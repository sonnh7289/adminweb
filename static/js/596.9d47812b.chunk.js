"use strict";(self.webpackChunkmantis_free_react_admin_template=self.webpackChunkmantis_free_react_admin_template||[]).push([[596],{37596:function(t,n,e){e.r(n),e.d(n,{default:function(){return R}});var i=e(15861),a=e(29439),r=e(64687),c=e.n(r),o=e(47313),s=e(54720),u=e(71535),d=e(22425),l=e(54295),h=e(2066),p=e(50188),f=e(285),m=e(22338),x=e(79209),g=e(73803),v=e(15863),Z=e(59491),b=e(73912),j=e(70807),k=e(46417);var S=function(t){var n=(0,o.useState)(!1),e=(0,a.Z)(n,2),i=e[0],r=e[1],c=t.props,u=t.danhMuc,d="http://localhost:4000/api/dkt/".concat(c);"\u0110\u01a1n V\u1ecb Ki\u1ebfn Th\u1ee9c"===u?d="http://localhost:4000/api/dvkt/".concat(c):"M\xf4 T\u1ea3 Chi Ti\u1ebft"===u&&(d="http://localhost:4000/api/chi-tiet/".concat(c));var l=function(){s.ZP.delete(d).then(j.fn.success("X\xf3a th\xe0nh c\xf4ng"),window.location.reload(!1))};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(Z.Z,{onClick:function(){r(!0)},danger:!0,children:"Delete"}),(0,k.jsx)(b.Z,{title:"Confirm modal",open:i,onOk:function(){l(),r(!1)},onCancel:function(){r(!1)},children:(0,k.jsx)("h2",{children:"B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a ".concat(u," ").concat(c)})})]})},W=e(2135);var w=function(t){var n=t.id,e=t.danhMuc,i="dkt/".concat(n);return"\u0110\u01a1n V\u1ecb Ki\u1ebfn Th\u1ee9c"===e?i="dvkt/".concat(n):"M\xf4 T\u1ea3 Chi Ti\u1ebft"===e&&(i="chi-tiet/".concat(n)),(0,k.jsx)(W.rU,{to:"".concat(i),children:(0,k.jsx)(Z.Z,{children:"Edit"})})},M=[{id:"stt",label:"STT",minWidth:70},{id:"id",label:"ID",minWidth:100},{id:"name",label:"M\xf4 t\u1ea3 chi ti\u1ebft",minWidth:100,align:"left"},{id:"slug",label:"Slug",minWidth:170,align:"left"},{id:"edit",label:"S\u1eeda",minWidth:170,align:"left"},{id:"delete",label:"X\xf3a",minWidth:170,align:"left"}];function P(t){var n=t.props,e=t.danhMuc,i=n.map((function(t,n){return function(t){var n=t.stt,e=t.name,i=t.id,a=t.slug,r=t.optionDanhMuc;return{stt:n,id:i,name:e,slug:a,edit:(0,k.jsx)(w,{id:i,danhMuc:r}),delete:(0,k.jsx)(S,{props:i,danhMuc:r})}}({stt:n+1,name:t.Name,slug:t.Slug,id:t.id,optionDanhMuc:e})})),r=o.useState(0),c=(0,a.Z)(r,2),s=c[0],u=c[1],d=o.useState(10),Z=(0,a.Z)(d,2),b=Z[0],j=Z[1];return(0,k.jsxs)(l.Z,{sx:{width:"100%",overflow:"hidden"},children:[(0,k.jsx)(m.Z,{sx:{maxHeight:440},children:(0,k.jsxs)(h.Z,{stickyHeader:!0,"aria-label":"sticky table",children:[(0,k.jsx)(x.Z,{children:(0,k.jsx)(v.Z,{children:M.map((function(t){return(0,k.jsx)(f.Z,{align:t.align,style:{minWidth:t.minWidth},children:t.label},t.id)}))})}),(0,k.jsx)(p.Z,{children:i.slice(s*b,s*b+b).map((function(t){return t.slug||(t.slug=" "),(0,k.jsx)(v.Z,{hover:!0,role:"checkbox",tabIndex:-1,children:M.map((function(n){var e=t[n.id];return(0,k.jsx)(f.Z,{align:n.align,children:e},n.id)}))},t.stt)}))})]})}),(0,k.jsx)(g.Z,{rowsPerPageOptions:[10,25,100],component:"div",count:i.length,rowsPerPage:b,page:s,onPageChange:function(t,n){u(n)},onRowsPerPageChange:function(t){j(+t.target.value),u(0)}})]})}var T=(0,e(53249).Z)(),y=e(38934),C=e(23046),_=e(35146),N=e(6621);function G(t){var n=t.props,e=t.danhMuc,i=t.propsFunc,r=t.defaultValue,c=o.useState(r||""),s=(0,a.Z)(c,2),u=s[0],d=s[1];return(0,k.jsx)(T,{children:(0,k.jsxs)(y.Z,{sx:{m:1,minWidth:200},size:"small",children:[(0,k.jsx)(C.Z,{id:"demo-simple-select-standard-label",children:e}),(0,k.jsxs)(_.Z,{labelId:"demo-simple-select-disabled-label",id:"demo-simple-select-standard",value:u,onChange:function(t){d(t.target.value),i(t.target.value)},autoWidth:!0,label:e,children:[(0,k.jsx)(N.Z,{value:"",children:(0,k.jsx)("em",{children:e})}),n.map((function(t){return(0,k.jsx)(N.Z,{value:t.id,children:t.Name},t.id)}))]})]})})}var R=function(){var t=(0,o.useState)([]),n=(0,a.Z)(t,2),e=n[0],r=n[1],l=(0,o.useState)([]),h=(0,a.Z)(l,2),p=h[0],f=h[1],m=(0,o.useState)([]),x=(0,a.Z)(m,2),g=x[0],v=x[1],Z=(0,o.useState)(""),b=(0,a.Z)(Z,2),j=b[0],S=b[1],W=(0,o.useState)(""),w=(0,a.Z)(W,2),M=w[0],T=w[1];function y(){return(y=(0,i.Z)(c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.ZP.get("http://localhost:4000/api/dkt").then((function(t){r(t.data)})).catch((function(t){return console.log(t)}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function C(){return(C=(0,i.Z)(c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.ZP.get("http://localhost:4000/api/dvkt").then((function(t){return f(t.data)})).catch((function(t){return console.log(t)}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(){return(_=(0,i.Z)(c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.ZP.get("http://localhost:4000/api/chi-tiet").then((function(t){return v(t.data)})).catch((function(t){return console.log(t)}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}(0,o.useEffect)((function(){!function(){y.apply(this,arguments)}(),function(){C.apply(this,arguments)}(),function(){_.apply(this,arguments)}()}),[]);var N=e.map((function(t){return JSON.parse(t)})),R=p.map((function(t){return JSON.parse(t)})),D=g.map((function(t){return JSON.parse(t)})),I=function(t){S(t),T("")},K=function(t){T(t)};return(0,k.jsxs)(d.Z,{title:"",children:[function(){var t=R.filter((function(t){return t.Id_category_dkt===j}));return(0,k.jsxs)(u.ZP,{container:!0,spacing:2,children:[(0,k.jsx)(u.ZP,{item:!0,xs:6,children:(0,k.jsx)(G,{props:N,danhMuc:"D\u1ea1ng Ki\u1ebfn Th\u1ee9c",propsFunc:I})}),(0,k.jsx)(u.ZP,{item:!0,xs:6,children:(0,k.jsx)(G,{props:t,danhMuc:"\u0110\u01a1n V\u1ecb Ki\u1ebfn Th\u1ee9c",propsFunc:K})})]})}(),function(){if(!j)return(0,k.jsx)(P,{props:N,danhMuc:"D\u1ea1ng Ki\u1ebfn Th\u1ee9c"});if(j&&!M){var t=R.filter((function(t){return t.Id_category_dkt===j}));return(0,k.jsx)(P,{props:t,danhMuc:"\u0110\u01a1n V\u1ecb Ki\u1ebfn Th\u1ee9c"})}var n=D.filter((function(t){return t.Id_category_dvkt===M}));return(0,k.jsx)(P,{props:n,danhMuc:"M\xf4 T\u1ea3 Chi Ti\u1ebft"})}()]})}},53249:function(t,n,e){e.d(n,{Z:function(){return b}});var i=e(4942),a=e(63366),r=e(87462),c=e(47313),o=e(83061),s=e(50114),u=e(32298),d=e(21921),l=e(14614),h=e(96694),p=e(98331),f=e(46417),m=["className","component","disableGutters","fixed","maxWidth","classes"],x=(0,p.Z)(),g=(0,h.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(t,n){var e=t.ownerState;return[n.root,n["maxWidth".concat((0,s.Z)(String(e.maxWidth)))],e.fixed&&n.fixed,e.disableGutters&&n.disableGutters]}}),v=function(t){return(0,l.Z)({props:t,name:"MuiContainer",defaultTheme:x})},Z=function(t,n){var e=t.classes,i=t.fixed,a=t.disableGutters,r=t.maxWidth,c={root:["root",r&&"maxWidth".concat((0,s.Z)(String(r))),i&&"fixed",a&&"disableGutters"]};return(0,d.Z)(c,(function(t){return(0,u.Z)(n,t)}),e)};function b(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.createStyledComponent,e=void 0===n?g:n,s=t.useThemeProps,u=void 0===s?v:s,d=t.componentName,l=void 0===d?"MuiContainer":d,h=e((function(t){var n=t.theme,e=t.ownerState;return(0,r.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!e.disableGutters&&(0,i.Z)({paddingLeft:n.spacing(2),paddingRight:n.spacing(2)},n.breakpoints.up("sm"),{paddingLeft:n.spacing(3),paddingRight:n.spacing(3)}))}),(function(t){var n=t.theme;return t.ownerState.fixed&&Object.keys(n.breakpoints.values).reduce((function(t,e){var i=e,a=n.breakpoints.values[i];return 0!==a&&(t[n.breakpoints.up(i)]={maxWidth:"".concat(a).concat(n.breakpoints.unit)}),t}),{})}),(function(t){var n=t.theme,e=t.ownerState;return(0,r.Z)({},"xs"===e.maxWidth&&(0,i.Z)({},n.breakpoints.up("xs"),{maxWidth:Math.max(n.breakpoints.values.xs,444)}),e.maxWidth&&"xs"!==e.maxWidth&&(0,i.Z)({},n.breakpoints.up(e.maxWidth),{maxWidth:"".concat(n.breakpoints.values[e.maxWidth]).concat(n.breakpoints.unit)}))})),p=c.forwardRef((function(t,n){var e=u(t),i=e.className,c=e.component,s=void 0===c?"div":c,d=e.disableGutters,p=void 0!==d&&d,x=e.fixed,g=void 0!==x&&x,v=e.maxWidth,b=void 0===v?"lg":v,j=(0,a.Z)(e,m),k=(0,r.Z)({},e,{component:s,disableGutters:p,fixed:g,maxWidth:b}),S=Z(k,l);return(0,f.jsx)(h,(0,r.Z)({as:s,ownerState:k,className:(0,o.Z)(S.root,i),ref:n},j))}));return p}},96694:function(t,n,e){var i=(0,e(36541).ZP)();n.Z=i}}]);