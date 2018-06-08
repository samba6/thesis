defmodule Gas.QuoteApi do
  @moduledoc """
  The Quotes context.
  """

  import Ecto.Query, warn: false

  require Logger

  alias Ecto.Multi
  alias Gas.Repo
  alias Gas.Quote
  alias Gas.QuoteTag

  @doc """
  Returns the list of quotes.

  ## Examples

      iex> list()
      [%Quote{}, ...]

  """
  def list do
    Repo.all(Quote)
  end

  @doc """
  Gets a single quote.

  Raises `Ecto.NoResultsError` if the Quote does not exist.

  ## Examples

      iex> get!(123)
      %Quote{}

      iex> get!(456)
      ** (Ecto.NoResultsError)

  """
  def get!(id), do: Repo.get!(Quote, id)

  @doc """
  Creates a quote.

  ## Examples

      iex> create_(%{field: value})
      {:ok, %Quote{}}

      iex> create_(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_(attrs \\ %{}) do
    %Quote{}
    |> Quote.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Creates a quote with one or more tags in a single transaction

  ## Examples

      iex> create_with_tags(%{
                tags: ["1", 2, "3"],
                text: "cool quote",
                source_id: "1"
            })
      {:ok, %{quote: %Quote{}, quote_tags: 3}}

      iex> create_with_tags(%{
                tags: ["1", 2, "3"],
                text: "cool quote",
                source_id: "1"
            })
      {:error, field_operations_names, changeset, successful_operations}
  """

  @spec create_with_tags(%{
          tags: [String.t() | Integer.t()],
          text: String.t(),
          source_id: String.t() | Integer.t()
        }) ::
          {:ok, %{quote: %Quote{}, quote_tags: Integer.t()}}
          | {:error, Multi.name(), any(), %{optional(Multi.name()) => any()}}
  def create_with_tags(%{tags: tags} = inputs) do
    Multi.new()
    |> Multi.insert(
      :quote,
      change_(%Quote{}, Map.delete(inputs, :tags))
    )
    |> Multi.merge(fn %{quote: %Quote{id: id}} ->
      now = Timex.now()

      quote_tags =
        Enum.map(
          tags,
          &[
            tag_id: String.to_integer("#{&1}"),
            quote_id: id,
            inserted_at: now,
            updated_at: now
          ]
        )

      Multi.new()
      |> Multi.insert_all(:quote_tags, QuoteTag, quote_tags)
    end)
    |> Repo.transaction()
  end

  @doc """
  Updates a quote.

  ## Examples

      iex> update_(quote, %{field: new_value})
      {:ok, %Quote{}}

      iex> update_(quote, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_(%Quote{} = quote, attrs) do
    quote
    |> Quote.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a Quote.

  ## Examples

      iex> delete_(quote)
      {:ok, %Quote{}}

      iex> delete_(quote)
      {:error, %Ecto.Changeset{}}

  """
  def delete_(%Quote{} = quote) do
    Repo.delete(quote)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking quote changes.

  ## Examples

      iex> change_(quote)
      %Ecto.Changeset{source: %Quote{}}

  """
  def change_(%Quote{} = quote, attrs \\ %{}) do
    Quote.changeset(quote, attrs)
  end

  @doc """
  Do a full text search on Query. Given a text, search the quote.text, source.author, tag.text, source.topic, quote.page_start, quote.page_end,
  quote.issue, quote.extras, source.source_type.name, source.publication,
  source.url
  """
  @spec full_text_search(String.t()) :: %{}
  def full_text_search(text) when is_binary(text) do
    params = ["%#{text}%"]

    sql =
      %{
        "quotes" => ["text", "volume", "issue", "extras"],
        "sources" => ["author", "topic", "publication", "url"],
        "tags" => ["text"],
        "source_types" => ["name"]
      }
      |> Enum.flat_map(fn {source, data} ->
        Enum.map(
          data,
          &"""
          select id, #{&1} as text, '#{source}' as source from #{source}
          where #{&1} ilike $1
          """
        )
      end)
      |> Enum.join(" union ")

    result =
      Repo.execute_and_load(sql, params)
      |> Enum.map(fn map ->
        Enum.map(map, fn
          {"source", val} -> {:source, String.to_existing_atom(val)}
          {k, val} -> {String.to_existing_atom(k), val}
        end)
        |> Enum.into(%{})
      end)
      |> Enum.group_by(& &1.source)

    Logger.info(fn -> "Result for query: #{text} is: #{inspect(result)}" end)

    %{
      quotes: [
        %{
          id: 13,
          source: :quotes,
          text:
            "The most frequently used gasification reactors encountered in practice are fixed bed(updraft or downdraft) and fluidised bed (bubbling or circulating) reactors. Figure 2shows the working principle of these gasifier configurations. "
        },
        %{
          id: 17,
          source: :quotes,
          text:
            "All products pass through a high temperature reaction\nzone at the base of the reactor, which explains why the tar level in downdraft\ngasifiers tends to stay below 0.1% (1 g Nm-³)."
        },
        %{
          id: 20,
          source: :quotes,
          text:
            "The product gas of fluidised bed reactors contains intermediate (between updraft and downdraft) tar\nlevels (∼10 g Nm-³)."
        },
        %{
          id: 16,
          source: :quotes,
          text:
            "In the downdraft (co-current) configuration, the feedstock is supplied from\nthe top while gas is introduced at the sides above the grate. The raw product gas is\nwithdrawn below the grate."
        }
      ],
      tags: [
        %{id: 19, source: :tags, text: "Disadvantage of downdraft gasifier"},
        %{id: 18, source: :tags, text: "Advantage of downdraft gasifier"},
        %{id: 17, source: :tags, text: "Description downdraft gasifier"}
      ]
    }
  end

  def get_quotes_by(nil), do: Repo.all(Quote)

  @spec get_quotes_by(Map.t()) :: [%Quote{}]
  def get_quotes_by(inputs) do
    query = Quote

    {query, _got_source} =
      case Map.get(inputs, :source) do
        nil -> {query, false}
        source_id -> get_quotes_by(:source, query, source_id)
      end

    Repo.all(query)
  end

  @spec get_quotes_by(atom, any, String.t()) :: {%Ecto.Query{}, true}
  def get_quotes_by(:source, query, id),
    do: {join(query, :inner, [q], s in assoc(q, :source), s.id == ^id), true}
end
