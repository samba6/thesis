(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{347:function(e,t,a){"use strict";var r=a(16),n=a(631),o=a(60),i=a(64),l=a(62),s=a(61),c=a(63),u=a(0),m=a(142),d=a(657),p=(a(355),{showingSidebar:!1}),f=a(39),h=a(11),b=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(n)))).state=p,a.renderWithContext=function(e){var t=a.props,r=t.className,n=void 0===r?"":r,o=t.style,i=t.currentProject,l=t.title,s=t.match.path,c=t.showSideBarTrigger,p=e.onShowClicked,f=e.minWidth600,b=e.showSidebar,g=!f||!b;return u.createElement("div",{className:"".concat(n," src-components-header"),style:o},u.createElement("div",{className:"top"},c&&g&&u.createElement("a",{className:"sidebar-trigger item",onClick:p},u.createElement(m.a,{name:"content"})),u.createElement("div",{className:"title"},l)),i&&u.createElement("div",{className:"bottom"},s===h.e?u.createElement("span",{className:"project-title"},i.title):u.createElement(d.a,{to:Object(h.k)(),className:"project-title"},i.title)))},a}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return u.createElement(f.a,null,this.renderWithContext)}}]),t}(u.Component),g=a(120),v=Object(r.graphql)(g.a,{props:function(e){return e.data}});t.a=Object(r.compose)(n.a,v)(b)},355:function(e,t,a){},612:function(e,t,a){},645:function(e,t,a){"use strict";a.r(t);var r,n,o=a(16),i=a(126),l=a(8),s=a.n(l),c=a(14),u=a(60),m=a(64),d=a(62),p=a(61),f=a(63),h=a(0),b=a.n(h),g=a(640),v=a(648),E=a(632),O=a(644),j=a(142),y=a(635),S=a(343),w=a(183),k=a.n(w),F=a(657),x=a(119),C=a.n(x),A=(a(612),a(51));!function(e){e.EMAIL="email",e.PASSWORD="password"}(n||(n={}));var N=(r={},Object(A.a)(r,n.EMAIL,""),Object(A.a)(r,n.PASSWORD,""),r),U={formValues:N,initialFormValues:N},V=a(11),L=a(347),D=a(165),P=function(e){function t(){var e,a;Object(u.a)(this,t);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state=U,a.validate=function(e){for(var t={},r=Object.keys(e),n=0;n<r.length;n++){var o=r[n],i=a.formValuesEmpty(e)?"":a["validate".concat(o.charAt(0).toUpperCase()).concat(o.slice(1))](e[o]);if(i)return t[o]=i,t}return t},a.validateEmail=function(e){return e&&/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)?(a.setState(function(t){return C()(t,{formValues:{email:{$set:e}}})}),""):"Enter valid email"},a.validatePassword=function(e){return e?e.length<4?"Too short":(a.setState(function(t){return C()(t,{formValues:{password:{$set:e}}})}),""):"Enter Password"},a.renderError=function(){var e=a.state.graphQlError;if(e)return b.a.createElement(g.a.Content,{extra:!0},b.a.createElement(O.a,{error:!0,onDismiss:a.handleErrorMsgDismiss},b.a.createElement(O.a.Content,null,e.message)))},a.submit=function(){var e=Object(c.a)(s.a.mark(function e(t,r){var n,o,i,l,c,u,m,d;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r.setSubmitting(!0),n=a.props,o=n.login,i=n.client,l=n.updateLocalUser,e.prev=2,e.next=5,o({variables:{login:a.state.formValues}});case 5:if(!(c=e.sent)||!c.data){e.next=14;break}if(!(u=c.data.login)){e.next=14;break}return m=u.projects,d=u.jwt,Object(D.a)(m,i,d),e.next=13,l({variables:{user:u}});case 13:a.props.history.replace(V.c);case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(2),r.setSubmitting(!1),a.setState({graphQlError:e.t0});case 20:case"end":return e.stop()}},e,this,[[2,16]])}));return function(t,a){return e.apply(this,arguments)}}(),a.renderForm=function(e){var t=e.dirty,r=e.isSubmitting,o=e.errors,l=e.handleSubmit,s=a.state.graphQlError,c=!t||r||!k()(o)||!!s;return b.a.createElement(g.a,null,b.a.createElement(g.a.Content,{className:"form-title",extra:!0},"Login to Thysis"),a.renderError(),b.a.createElement(g.a.Content,null,b.a.createElement(y.a,{onSubmit:l},[["Email","email",n.EMAIL],["Password","password",n.PASSWORD]].map(function(e){var t=Object(i.a)(e,3),r=t[0],n=t[1],o=t[2];return b.a.createElement(S.a,{key:o,name:o,render:a.renderInput(r,n)})}),b.a.createElement(v.a,{id:"author-modal-submit",color:"green",inverted:!0,disabled:c,loading:r,type:"submit",fluid:!0},b.a.createElement(j.a,{name:"checkmark"})," Ok"))),b.a.createElement(g.a.Content,{extra:!0},b.a.createElement(F.a,{className:"to-reg-button",to:V.i},"Don't have an account? Sign Up")))},a.renderInput=function(e,t){return function(r){var o=r.field,i=r.form,l=a.state.initialFormValues.email,s=o.name,c=i.errors[s],u=!!c,m=i.touched[s],d=!1;return s!==n.EMAIL||l?s===n.PASSWORD&&l&&(d=!0):d=!0,b.a.createElement("div",null,b.a.createElement(y.a.Field,Object.assign({},o,{type:t,control:E.a,placeholder:e,autoComplete:"off",label:e,id:s,error:u,onBlur:a.handleFormControlBlur(s,i),onFocus:a.handleFocus,autoFocus:d})),u&&m&&b.a.createElement(O.a,{style:{display:"block",padding:"0.5em",marginBottom:"1em",marginTop:"-10px"},error:!0,header:c}))}},a.handleFormControlBlur=function(e,t){return function(){t.setFieldTouched(e,!0)}},a.handleFocus=function(){a.setState({graphQlError:void 0})},a.handleErrorMsgDismiss=function(){return a.setState({graphQlError:void 0})},a.formValuesEmpty=function(e){for(var t=!0,a=Object.values(e),r=0;r<a.length;r++){a[r].trim()&&(t=!1)}return t},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(c.a)(s.a.mark(function e(){var t,a,r,n,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(Object(V.o)("Sign In"),t=this.props,a=t.updateLocalUser,t.loggedOutUser){e.next=7;break}return e.next=5,a({variables:{user:null}});case 5:(r=e.sent)&&(n=r.data)&&(o=n.user)&&this.setState(function(e){return C()(e,{initialFormValues:{email:{$set:o.email}}})});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){Object(V.o)()}},{key:"render",value:function(){return b.a.createElement("div",{className:"login-route"},b.a.createElement(L.a,{title:"Thysis"}),b.a.createElement("div",{className:"main"},b.a.createElement(S.b,{initialValues:this.state.initialFormValues,enableReinitialize:!0,onSubmit:this.submit,render:this.renderForm,validate:this.validate})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=e.loggedOutUser;return a?C()(t,{initialFormValues:{email:{$set:a.email}}}):null}}]),t}(b.a.Component),M=a(4),W=a(5),I=a.n(W),$=a(41),Q=a(42);function T(){var e=Object(M.a)(["\n  mutation LoginMutation($login: LoginUser!) {\n    login(login: $login) {\n      ...UserFragment\n      projects {\n        ...ProjectFragment\n      }\n    }\n  }\n  ","\n  ","\n"]);return T=function(){return e},e}var B=I()(T(),$.a,Q.a),R=a(133);function q(){var e=Object(M.a)(["\n  query LoggedOutUserLocalQuery {\n    loggedOutUser @client {\n      ...UserFragment\n    }\n  }\n\n  ","\n"]);return q=function(){return e},e}var z=I()(q(),$.b),J=Object(o.graphql)(B,{props:function(e){return{login:e.mutate}}}),Z=Object(o.graphql)(z,{props:function(e){return e.data}});t.default=Object(o.compose)(Z,R.a,J,o.withApollo)(P)}}]);
//# sourceMappingURL=./9.f6449ca2.chunk.js-c2cf41fe0bb7c9290d3a18eef93b611f.map