import React from "react";
import { ApolloError } from "apollo-client";

import { AuthorFragFragment } from "../../graphql/gen.types";

type AuthorModalCreatedCb = (tag: AuthorFragFragment) => void;

export interface NewAuthorModalProps {
  open: boolean;
  dismissModal: () => void;
  style: React.CSSProperties;
  onAuthorCreated?: AuthorModalCreatedCb;
}

export interface NewAuthorModalState {
  name: string;
  formError?: ApolloError;
  submitting: boolean;
  submitSuccess: boolean;
}

export const initalStateNewTagModalFormState: NewAuthorModalState = {
  name: "",
  formError: undefined,
  submitting: false,
  submitSuccess: false
};