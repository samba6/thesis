(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{372:function(e,t,n){"use strict";t.a={flex:1,overflowX:"hidden",overflowY:"auto",padding:"0 5px"}},392:function(e,t,n){"use strict";(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.a=n}).call(this,n(95))},394:function(e,t,n){"use strict";var r=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},a=n(392),o="object"==typeof self&&self&&self.Object===Object&&self,c=a.a||o||Function("return this")(),i=function(){return c.Date.now()},u=c.Symbol,s=Object.prototype,l=s.hasOwnProperty,p=s.toString,m=u?u.toStringTag:void 0;var h=function(e){var t=l.call(e,m),n=e[m];try{e[m]=void 0;var r=!0}catch(o){}var a=p.call(e);return r&&(t?e[m]=n:delete e[m]),a},f=Object.prototype.toString;var d=function(e){return f.call(e)},v="[object Null]",b="[object Undefined]",g=u?u.toStringTag:void 0;var S=function(e){return null==e?void 0===e?b:v:g&&g in Object(e)?h(e):d(e)};var x=function(e){return null!=e&&"object"==typeof e},y="[object Symbol]";var j=function(e){return"symbol"==typeof e||x(e)&&S(e)==y},O=NaN,w=/^\s+|\s+$/g,E=/^[-+]0x[0-9a-f]+$/i,T=/^0b[01]+$/i,C=/^0o[0-7]+$/i,R=parseInt;var k=function(e){if("number"==typeof e)return e;if(j(e))return O;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(w,"");var n=T.test(e);return n||C.test(e)?R(e.slice(2),n?2:8):E.test(e)?O:+e},N="Expected a function",F=Math.max,L=Math.min;t.a=function(e,t,n){var a,o,c,u,s,l,p=0,m=!1,h=!1,f=!0;if("function"!=typeof e)throw new TypeError(N);function d(t){var n=a,r=o;return a=o=void 0,p=t,u=e.apply(r,n)}function v(e){var n=e-l;return void 0===l||n>=t||n<0||h&&e-p>=c}function b(){var e=i();if(v(e))return g(e);s=setTimeout(b,function(e){var n=t-(e-l);return h?L(n,c-(e-p)):n}(e))}function g(e){return s=void 0,f&&a?d(e):(a=o=void 0,u)}function S(){var e=i(),n=v(e);if(a=arguments,o=this,l=e,n){if(void 0===s)return function(e){return p=e,s=setTimeout(b,t),m?d(e):u}(l);if(h)return s=setTimeout(b,t),d(l)}return void 0===s&&(s=setTimeout(b,t)),u}return t=k(t)||0,r(n)&&(m=!!n.leading,c=(h="maxWait"in n)?F(k(n.maxWait)||0,t):c,f="trailing"in n?!!n.trailing:f),S.cancel=function(){void 0!==s&&clearTimeout(s),p=0,a=l=o=s=void 0},S.flush=function(){return void 0===s?u:g(i())},S}},395:function(e,t,n){"use strict";var r=n(16),a=n(8),o=n.n(a),c=n(14),i=n(60),u=n(62),s=n(61),l=n(64),p=n(63),m=n(0),h=n.n(m),f=n(394),d=n(632),v=n(639),b=n(644),g=n(142),S=n(657),x=n(4),y=n(5),j=n.n(y);function O(){var e=Object(x.a)(["\n  fragment TextSearchRowFrag on QuoteFullSearchResultRow {\n    tid\n    text\n    source\n    column\n  }\n"]);return O=function(){return e},e}var w=j()(O());function E(){var e=Object(x.a)(["\n  fragment TextSearchResultFrag on QuoteFullSearchResult {\n    quotes {\n      ...TextSearchRowFrag\n    }\n\n    sources {\n      ...TextSearchRowFrag\n    }\n\n    tags {\n      ...TextSearchRowFrag\n    }\n\n    authors {\n      ...TextSearchRowFrag\n    }\n\n    sourceTypes {\n      ...TextSearchRowFrag\n    }\n  }\n\n  ","\n"]);return E=function(){return e},e}var T=j()(E(),w),C=T;function R(){var e=Object(x.a)(["\n  query AllMatchingTexts($text: QuoteFullSearchInput!) {\n    quoteFullSearch(text: $text) {\n      ...TextSearchResultFrag\n    }\n  }\n\n  ","\n"]);return R=function(){return e},e}var k=j()(R(),C),N=n(25),F=n(340),L=n.n(F),q=n(341),A=n.n(q),B=n(36),H=n(372);L.a.setup(A()());var I={root:B.c,input:{margin:"0 5px"},mainContent:Object(N.a)({},H.a,{margin:"5px 3px 0 0"}),resultContainer:{margin:"0",overflowY:"auto",wordBreak:"break-all"},result:{marginTop:"15px;","&.first-of-type":{marginTop:"0;"},"& .ui.list>a.item":{color:"initial"}},resultRowHeaderContainer:{textAlign:"center"},resultRowHeader:{display:"inline-block",minWidth:"40%",boxShadow:"0 1px 1px -1px black;"},resultRowItem:Object(N.a)({},{borderTop:["none","!important;"]},{borderBottom:"1px solid #22242626",marginTop:8})},$=L.a.createStyleSheet(I).attach().classes,D=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={hasError:!1},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?m.createElement(b.a,{error:!0,icon:!0,style:{marginTop:"20px"},className:this.props.className||""},m.createElement(g.a,{name:"ban"}),m.createElement(b.a.Content,null,m.createElement(b.a.Header,{style:{borderBottom:"1px solid",display:"inline-block",marginBottom:"10px"}},"An error has occurred"),m.createElement("div",null,JSON.stringify(this.state.info,null,2)))):this.props.children}}]),t}(m.Component),U=n(11),W={SOURCES:U.m,TAGS:U.n,QUOTES:U.l,AUTHORS:U.j},M={searchText:"",searchLoading:!1},Q=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state=M,n.onSearchInputChange=function(e,t){var r=t.value,a=n.state.result;a=r?a:void 0,n.setState({searchText:r,searchError:void 0,result:a}),n.doSearchDebounced()},n.doSearch=Object(c.a)(o.a.mark(function e(){var t,r,a,c;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!((t=n.state.searchText.trim()).length<2)){e.next=3;break}return e.abrupt("return");case 3:return n.setState({searchLoading:!0}),e.prev=4,e.next=7,n.props.client.query({query:k,variables:{text:{text:t}}});case 7:if(r=e.sent,a=r.data){e.next=11;break}return e.abrupt("return");case 11:c=a.quoteFullSearch,n.setState({searchLoading:!1,result:c}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(4),n.setState({searchLoading:!1,searchError:e.t0});case 18:case"end":return e.stop()}},e,this,[[4,15]])})),n.renderResult=function(e){var t=e.quotes,r=e.tags,a=e.authors,o=e.sources,c=e.sourceTypes;return a||t||o||c||r?h.a.createElement("div",{className:$.resultContainer},[t,r,a,o,c].map(n.renderCategory)):h.a.createElement(b.a,{className:$.resultContainer,style:{textAlign:"center",padding:"10px"},icon:!0,warning:!0,size:"small"},h.a.createElement(g.a,{name:"warning",size:"tiny",fitted:!0,style:{fontSize:"2em"}}),h.a.createElement(b.a.Content,null,"No Result!"))},n.renderCategory=function(e){if(e){var t=e[0];if(t){var r=t.source;return h.a.createElement("div",{className:$.result,key:r},h.a.createElement("div",{className:$.resultRowHeaderContainer},h.a.createElement("span",{className:$.resultRowHeader},r)),h.a.createElement(v.a,{divided:!0},e.map(n.renderRow(r))))}}},n.renderRow=function(e){return function(t){if(t){var n=t.text,r=t.tid,a=t.column,o=W[e],c=o?{as:S.a,to:o(r.toString())}:{};return h.a.createElement(v.a.Item,Object.assign({key:r+a,className:$.resultRowItem},c),h.a.createElement(v.a.Content,null,n))}}},n.doSearchDebounced=Object(f.a)(n.doSearch,700),n}return Object(p.a)(t,e),Object(l.a)(t,null,[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.searchComponentState;return n&&t===M?n:null}}]),Object(l.a)(t,[{key:"componentWillUnmount",value:function(){this.props.updateSCSLocal({variables:{searchComponentState:this.state}}),this.doSearchDebounced.cancel()}},{key:"render",value:function(){return h.a.createElement("div",{className:$.root},h.a.createElement("form",null,h.a.createElement(d.a,{className:$.input,icon:"search",placeholder:"Search...",fluid:!0,autoFocus:!0,onChange:this.onSearchInputChange,value:this.state.searchText,loading:this.state.searchLoading})),h.a.createElement(D,{className:$.mainContent},h.a.createElement("div",{className:$.mainContent},this.state.searchError&&h.a.createElement(b.a,{error:!0,icon:!0,style:{marginTop:"20px"}},h.a.createElement(g.a,{name:"ban"}),h.a.createElement(b.a.Content,null,h.a.createElement(b.a.Header,{style:{borderBottom:"1px solid",display:"inline-block",marginBottom:"10px"}},"An error has occurred"),h.a.createElement("div",null,JSON.stringify(this.state.searchError,null,2)))),!this.state.searchError&&this.state.searchText&&this.state.result&&this.renderResult(this.state.result))))}}]),t}(h.a.Component);function J(){var e=Object(x.a)(["\n  mutation SearchComponentStateLocalMutation(\n    $searchComponentState: SearchLocalInput!\n  ) {\n    searchComponentState(searchComponentState: $searchComponentState) @client\n  }\n"]);return J=function(){return e},e}var z=j()(J()),Y=Object(r.graphql)(z,{props:function(e){return{updateSCSLocal:e.mutate}}});function P(){var e=Object(x.a)(["\n  query SearchComponentStateLocalQuery {\n    searchComponentState @client {\n      searchText\n      searchLoading\n      result {\n        ...TextSearchResultFrag\n      }\n      searchError\n    }\n  }\n\n  ","\n"]);return P=function(){return e},e}var G=j()(P(),T),X=Object(r.graphql)(G,{props:function(e){return e.data}});t.a=Object(r.compose)(r.withApollo,X,Y)(Q)},653:function(e,t,n){"use strict";n.r(t);var r=n(60),a=n(64),o=n(62),c=n(61),i=n(63),u=n(0),s=n(347),l=n(11),p=n(25),m=n(340),h=n.n(m),f=n(341),d=n.n(f),v=n(36),b=n(372);h.a.setup(d()());var g={root:v.c,input:{margin:"0 5px"},mainContent:Object(p.a)({},b.a,{margin:"5px 3px 0 0"}),resultContainer:{margin:"0",overflowY:"auto",wordBreak:"break-all"},result:{marginTop:"15px;","&.first-of-type":{marginTop:"0;"}},resultRowHeaderContainer:{textAlign:"center"},resultRowHeader:{display:"inline-block",minWidth:"40%",boxShadow:"0 1px 1px -1px black;"},resultRowItem:Object(p.a)({},{borderTop:["none","!important;"]},{borderBottom:"1px solid #22242626",marginTop:8})},S=h.a.createStyleSheet(g).attach().classes,x=n(395),y=n(352),j=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(a.a)(t,[{key:"componentDidMount",value:function(){Object(l.o)("Search all")}},{key:"componentWillUnmount",value:function(){Object(l.o)()}},{key:"render",value:function(){return u.createElement(y.a,null,u.createElement("div",{className:S.root},u.createElement(s.a,{title:"Search",showSideBarTrigger:!0}),u.createElement(x.a,null)))}}]),t}(u.Component);t.default=j}}]);
//# sourceMappingURL=11.1733ac89.chunk.js.map