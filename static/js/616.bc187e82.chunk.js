"use strict";(self.webpackChunkmantis_free_react_admin_template=self.webpackChunkmantis_free_react_admin_template||[]).push([[616],{84883:function(e,r,a){var t=a(4942),o=a(63366),n=a(87462),i=a(47313),l=(a(96214),a(83061)),s=a(21921),u=a(64164),d=a(11236),c=a(73529),v=a(49316),p=a(77969),m=a(46417),f=["children","className","component","componentsProps","max","spacing","total","variant"],Z={small:-16,medium:null},h=(0,u.ZP)("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:function(e,r){return(0,n.Z)((0,t.Z)({},"& .".concat(p.Z.avatar),r.avatar),r.root)}})((function(e){var r,a=e.theme;return r={},(0,t.Z)(r,"& .".concat(c.Z.root),{border:"2px solid ".concat((a.vars||a).palette.background.default),boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}}),(0,t.Z)(r,"display","flex"),(0,t.Z)(r,"flexDirection","row-reverse"),r})),x=(0,u.ZP)(v.Z,{name:"MuiAvatarGroup",slot:"Avatar",overridesResolver:function(e,r){return r.avatar}})((function(e){var r=e.theme;return{border:"2px solid ".concat((r.vars||r).palette.background.default),boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}}})),b=i.forwardRef((function(e,r){var a,t,u=(0,d.Z)({props:e,name:"MuiAvatarGroup"}),c=u.children,v=u.className,b=u.component,g=void 0===b?"div":b,w=u.componentsProps,P=void 0===w?{}:w,R=u.max,y=void 0===R?5:R,F=u.spacing,M=void 0===F?"medium":F,A=u.total,N=u.variant,C=void 0===N?"circular":N,k=(0,o.Z)(u,f),L=y<2?2:y,T=(0,n.Z)({},u,{max:y,spacing:M,component:g,variant:C}),_=function(e){var r=e.classes;return(0,s.Z)({root:["root"],avatar:["avatar"]},p.m,r)}(T),j=i.Children.toArray(c).filter((function(e){return i.isValidElement(e)})),I=A||j.length;I===L&&(L+=1),L=Math.min(I+1,L);var S=Math.min(j.length,L-1),G=Math.max(I-L,I-S,0),W=M&&void 0!==Z[M]?Z[M]:-M;return(0,m.jsxs)(h,(0,n.Z)({as:g,ownerState:T,className:(0,l.Z)(_.root,v),ref:r},k,{children:[G?(0,m.jsxs)(x,(0,n.Z)({ownerState:T,variant:C},P.additionalAvatar,{className:(0,l.Z)(_.avatar,null==(a=P.additionalAvatar)?void 0:a.className),style:(0,n.Z)({marginLeft:W},null==(t=P.additionalAvatar)?void 0:t.style),children:["+",G]})):null,j.slice(0,S).reverse().map((function(e,r){return i.cloneElement(e,{className:(0,l.Z)(e.props.className,_.avatar),style:(0,n.Z)({marginLeft:r===S-1?void 0:W},e.props.style),variant:e.props.variant||C})}))]}))}));r.Z=b},77969:function(e,r,a){a.d(r,{m:function(){return o}});var t=a(32298);function o(e){return(0,t.Z)("MuiAvatarGroup",e)}var n=(0,a(77430).Z)("MuiAvatarGroup",["root","avatar"]);r.Z=n},41251:function(e,r,a){var t=a(87462),o=a(63366),n=a(47313),i=a(83061),l=a(21921),s=a(33362),u=a(64164),d=a(11236),c=a(22449),v=a(31731),p=a(42318),m=a(23046),f=a(38934),Z=a(96646),h=a(35146),x=a(34838),b=a(46417),g=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],w={standard:c.Z,filled:v.Z,outlined:p.Z},P=(0,u.ZP)(f.Z,{name:"MuiTextField",slot:"Root",overridesResolver:function(e,r){return r.root}})({}),R=n.forwardRef((function(e,r){var a=(0,d.Z)({props:e,name:"MuiTextField"}),n=a.autoComplete,u=a.autoFocus,c=void 0!==u&&u,v=a.children,p=a.className,f=a.color,R=void 0===f?"primary":f,y=a.defaultValue,F=a.disabled,M=void 0!==F&&F,A=a.error,N=void 0!==A&&A,C=a.FormHelperTextProps,k=a.fullWidth,L=void 0!==k&&k,T=a.helperText,_=a.id,j=a.InputLabelProps,I=a.inputProps,S=a.InputProps,G=a.inputRef,W=a.label,q=a.maxRows,V=a.minRows,B=a.multiline,z=void 0!==B&&B,E=a.name,H=a.onBlur,D=a.onChange,J=a.onFocus,K=a.placeholder,O=a.required,Q=void 0!==O&&O,U=a.rows,X=a.select,Y=void 0!==X&&X,$=a.SelectProps,ee=a.type,re=a.value,ae=a.variant,te=void 0===ae?"outlined":ae,oe=(0,o.Z)(a,g),ne=(0,t.Z)({},a,{autoFocus:c,color:R,disabled:M,error:N,fullWidth:L,multiline:z,required:Q,select:Y,variant:te}),ie=function(e){var r=e.classes;return(0,l.Z)({root:["root"]},x.I,r)}(ne);var le={};"outlined"===te&&(j&&"undefined"!==typeof j.shrink&&(le.notched=j.shrink),le.label=W),Y&&($&&$.native||(le.id=void 0),le["aria-describedby"]=void 0);var se=(0,s.Z)(_),ue=T&&se?"".concat(se,"-helper-text"):void 0,de=W&&se?"".concat(se,"-label"):void 0,ce=w[te],ve=(0,b.jsx)(ce,(0,t.Z)({"aria-describedby":ue,autoComplete:n,autoFocus:c,defaultValue:y,fullWidth:L,multiline:z,name:E,rows:U,maxRows:q,minRows:V,type:ee,value:re,id:se,inputRef:G,onBlur:H,onChange:D,onFocus:J,placeholder:K,inputProps:I},le,S));return(0,b.jsxs)(P,(0,t.Z)({className:(0,i.Z)(ie.root,p),disabled:M,error:N,fullWidth:L,ref:r,required:Q,color:R,variant:te,ownerState:ne},oe,{children:[null!=W&&""!==W&&(0,b.jsx)(m.Z,(0,t.Z)({htmlFor:se,id:de},j,{children:W})),Y?(0,b.jsx)(h.Z,(0,t.Z)({"aria-describedby":ue,id:se,labelId:de,value:re,input:ve},$,{children:v})):ve,T&&(0,b.jsx)(Z.Z,(0,t.Z)({id:ue},C,{children:T}))]}))}));r.Z=R},34838:function(e,r,a){a.d(r,{I:function(){return o}});var t=a(32298);function o(e){return(0,t.Z)("MuiTextField",e)}var n=(0,a(77430).Z)("MuiTextField",["root"]);r.Z=n}}]);