"use strict";(self.webpackChunkmantis_free_react_admin_template=self.webpackChunkmantis_free_react_admin_template||[]).push([[655],{44874:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(1413),a=n(47313),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},l=n(17469),i=function(e,t){return a.createElement(l.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:o}))};i.displayName="EyeInvisibleOutlined";var u=a.forwardRef(i)},31741:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(1413),a=n(47313),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"},l=n(17469),i=function(e,t){return a.createElement(l.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:o}))};i.displayName="EyeOutlined";var u=a.forwardRef(i)},93655:function(e,t,n){n.d(t,{Z:function(){return he}});var r=n(87462),a=n(4942),o=n(46123),l=n.n(o),i=n(47313),u=n(74714),c=n(4431),s=function(e){var t,n=(0,i.useContext)(u.E_),o=n.getPrefixCls,s=n.direction,f=e.prefixCls,d=e.className,p=void 0===d?"":d,v=o("input-group",f),m=l()(v,(t={},(0,a.Z)(t,"".concat(v,"-lg"),"large"===e.size),(0,a.Z)(t,"".concat(v,"-sm"),"small"===e.size),(0,a.Z)(t,"".concat(v,"-compact"),e.compact),(0,a.Z)(t,"".concat(v,"-rtl"),"rtl"===s),t),p),g=(0,i.useContext)(c.aM),h=(0,i.useMemo)((function(){return(0,r.Z)((0,r.Z)({},g),{isFormItemInput:!1})}),[g]);return i.createElement("span",{className:m,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},i.createElement(c.aM.Provider,{value:h},e.children))},f=n(71002),d=n(98315);function p(e){return!(!e.addonBefore&&!e.addonAfter)}function v(e){return!!(e.prefix||e.suffix||e.allowClear)}function m(e,t,n,r){if(n){var a=t;if("click"===t.type){var o=e.cloneNode(!0);return a=Object.create(t,{target:{value:o},currentTarget:{value:o}}),o.value="",void n(a)}if(void 0!==r)return a=Object.create(t,{target:{value:e},currentTarget:{value:e}}),e.value=r,void n(a);n(a)}}function g(e){return"undefined"===typeof e||null===e?"":String(e)}var h=function(e){var t=e.inputElement,n=e.prefixCls,r=e.prefix,o=e.suffix,u=e.addonBefore,c=e.addonAfter,s=e.className,d=e.style,m=e.affixWrapperClassName,g=e.groupClassName,h=e.wrapperClassName,b=e.disabled,x=e.readOnly,C=e.focused,Z=e.triggerFocus,y=e.allowClear,w=e.value,E=e.handleReset,z=e.hidden,N=(0,i.useRef)(null),S=(0,i.cloneElement)(t,{value:w,hidden:z});if(v(e)){var A,O="".concat(n,"-affix-wrapper"),R=l()(O,(A={},(0,a.Z)(A,"".concat(O,"-disabled"),b),(0,a.Z)(A,"".concat(O,"-focused"),C),(0,a.Z)(A,"".concat(O,"-readonly"),x),(0,a.Z)(A,"".concat(O,"-input-with-clear-btn"),o&&y&&w),A),!p(e)&&s,m),k=(o||y)&&i.createElement("span",{className:"".concat(n,"-suffix")},function(){var e;if(!y)return null;var t=!b&&!x&&w,r="".concat(n,"-clear-icon"),u="object"===(0,f.Z)(y)&&(null===y||void 0===y?void 0:y.clearIcon)?y.clearIcon:"\u2716";return i.createElement("span",{onClick:E,onMouseDown:function(e){return e.preventDefault()},className:l()(r,(e={},(0,a.Z)(e,"".concat(r,"-hidden"),!t),(0,a.Z)(e,"".concat(r,"-has-suffix"),!!o),e)),role:"button",tabIndex:-1},u)}(),o);S=i.createElement("span",{className:R,style:d,hidden:!p(e)&&z,onMouseDown:function(e){var t;(null===(t=N.current)||void 0===t?void 0:t.contains(e.target))&&(null===Z||void 0===Z||Z())},ref:N},r&&i.createElement("span",{className:"".concat(n,"-prefix")},r),(0,i.cloneElement)(t,{style:null,value:w,hidden:null}),k)}if(p(e)){var P="".concat(n,"-group"),T="".concat(P,"-addon"),j=l()("".concat(n,"-wrapper"),P,h),I=l()("".concat(n,"-group-wrapper"),s,g);return i.createElement("span",{className:I,style:d,hidden:z},i.createElement("span",{className:j},u&&i.createElement("span",{className:T},u),(0,i.cloneElement)(S,{style:null,hidden:null}),c&&i.createElement("span",{className:T},c)))}return S},b=n(93433),x=n(1413),C=n(29439),Z=n(45987),y=n(205),w=n(10946),E=["autoComplete","onChange","onFocus","onBlur","onPressEnter","onKeyDown","prefixCls","disabled","htmlSize","className","maxLength","suffix","showCount","type","inputClassName"],z=(0,i.forwardRef)((function(e,t){var n=e.autoComplete,r=e.onChange,o=e.onFocus,u=e.onBlur,c=e.onPressEnter,s=e.onKeyDown,d=e.prefixCls,z=void 0===d?"rc-input":d,N=e.disabled,S=e.htmlSize,A=e.className,O=e.maxLength,R=e.suffix,k=e.showCount,P=e.type,T=void 0===P?"text":P,j=e.inputClassName,I=(0,Z.Z)(e,E),M=(0,w.Z)(e.defaultValue,{value:e.value}),F=(0,C.Z)(M,2),B=F[0],D=F[1],V=(0,i.useState)(!1),_=(0,C.Z)(V,2),L=_[0],H=_[1],K=(0,i.useRef)(null),Q=function(e){K.current&&function(e,t){if(e){e.focus(t);var n=(t||{}).cursor;if(n){var r=e.value.length;switch(n){case"start":e.setSelectionRange(0,0);break;case"end":e.setSelectionRange(r,r);break;default:e.setSelectionRange(0,r)}}}}(K.current,e)};(0,i.useImperativeHandle)(t,(function(){return{focus:Q,blur:function(){var e;null===(e=K.current)||void 0===e||e.blur()},setSelectionRange:function(e,t,n){var r;null===(r=K.current)||void 0===r||r.setSelectionRange(e,t,n)},select:function(){var e;null===(e=K.current)||void 0===e||e.select()},input:K.current}})),(0,i.useEffect)((function(){H((function(e){return(!e||!N)&&e}))}),[N]);var W=function(t){void 0===e.value&&D(t.target.value),K.current&&m(K.current,t,r)},q=function(e){c&&"Enter"===e.key&&c(e),null===s||void 0===s||s(e)},U=function(e){H(!0),null===o||void 0===o||o(e)},Y=function(e){H(!1),null===u||void 0===u||u(e)};return i.createElement(h,(0,x.Z)((0,x.Z)({},I),{},{prefixCls:z,className:A,inputElement:function(){var t=(0,y.Z)(e,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","showCount","affixWrapperClassName","groupClassName","inputClassName","wrapperClassName","htmlSize"]);return i.createElement("input",(0,x.Z)((0,x.Z)({autoComplete:n},t),{},{onChange:W,onFocus:U,onBlur:Y,onKeyDown:q,className:l()(z,(0,a.Z)({},"".concat(z,"-disabled"),N),j,!p(e)&&!v(e)&&A),ref:K,size:S,type:T}))}(),handleReset:function(e){D(""),Q(),K.current&&m(K.current,e,r)},value:g(B),focused:L,triggerFocus:Q,suffix:function(){var e=Number(O)>0;if(R||k){var t=g(B),n=(0,b.Z)(t).length,r="object"===(0,f.Z)(k)?k.formatter({value:t,count:n,maxLength:O}):"".concat(n).concat(e?" / ".concat(O):"");return i.createElement(i.Fragment,null,!!k&&i.createElement("span",{className:l()("".concat(z,"-show-count-suffix"),(0,a.Z)({},"".concat(z,"-show-count-has-suffix"),!!R))},r),R)}return null}(),disabled:N}))})),N=z,S=n(16945),A=n(98438),O=n(21631),R=n(55681);function k(e,t){var n=(0,i.useRef)([]),r=function(){n.current.push(window.setTimeout((function(){var t,n,r,a;(null===(t=e.current)||void 0===t?void 0:t.input)&&"password"===(null===(n=e.current)||void 0===n?void 0:n.input.getAttribute("type"))&&(null===(r=e.current)||void 0===r?void 0:r.input.hasAttribute("value"))&&(null===(a=e.current)||void 0===a||a.input.removeAttribute("value"))})))};return(0,i.useEffect)((function(){return t&&r(),function(){return n.current.forEach((function(e){return window.clearTimeout(e)}))}}),[]),r}var P=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function T(e,t,n,r){if(n){var a=t;if("click"===t.type){var o=e.cloneNode(!0);return a=Object.create(t,{target:{value:o},currentTarget:{value:o}}),o.value="",void n(a)}if(void 0!==r)return a=Object.create(t,{target:{value:e},currentTarget:{value:e}}),e.value=r,void n(a);n(a)}}var j=(0,i.forwardRef)((function(e,t){var n,o,s,p=e.prefixCls,v=e.bordered,m=void 0===v||v,g=e.status,h=e.size,b=e.disabled,x=e.onBlur,C=e.onFocus,Z=e.suffix,y=e.allowClear,w=e.addonAfter,E=e.addonBefore,z=e.onChange,T=P(e,["prefixCls","bordered","status","size","disabled","onBlur","onFocus","suffix","allowClear","addonAfter","addonBefore","onChange"]),j=i.useContext(u.E_),I=j.getPrefixCls,M=j.direction,F=j.input,B=I("input",p),D=(0,i.useRef)(null),V=i.useContext(O.Z),_=h||V,L=i.useContext(A.Z),H=b||L,K=(0,i.useContext)(c.aM),Q=K.status,W=K.hasFeedback,q=K.feedbackIcon,U=(0,R.F)(Q,g),Y=function(e){return!!(e.prefix||e.suffix||e.allowClear)}(e)||!!W,G=(0,i.useRef)(Y);(0,i.useEffect)((function(){Y&&G.current,G.current=Y}),[Y]);var X,J=k(D,!0),$=(W||Z)&&i.createElement(i.Fragment,null,Z,W&&q);return"object"===(0,f.Z)(y)&&(null===y||void 0===y?void 0:y.clearIcon)?X=y:y&&(X={clearIcon:i.createElement(d.Z,null)}),i.createElement(N,(0,r.Z)({ref:(0,S.sQ)(t,D),prefixCls:B,autoComplete:null===F||void 0===F?void 0:F.autoComplete},T,{disabled:H||void 0,onBlur:function(e){J(),null===x||void 0===x||x(e)},onFocus:function(e){J(),null===C||void 0===C||C(e)},suffix:$,allowClear:X,onChange:function(e){J(),null===z||void 0===z||z(e)},addonAfter:w&&i.createElement(c.Ux,{override:!0,status:!0},w),addonBefore:E&&i.createElement(c.Ux,{override:!0,status:!0},E),inputClassName:l()((n={},(0,a.Z)(n,"".concat(B,"-sm"),"small"===_),(0,a.Z)(n,"".concat(B,"-lg"),"large"===_),(0,a.Z)(n,"".concat(B,"-rtl"),"rtl"===M),(0,a.Z)(n,"".concat(B,"-borderless"),!m),n),!Y&&(0,R.Z)(B,U)),affixWrapperClassName:l()((o={},(0,a.Z)(o,"".concat(B,"-affix-wrapper-sm"),"small"===_),(0,a.Z)(o,"".concat(B,"-affix-wrapper-lg"),"large"===_),(0,a.Z)(o,"".concat(B,"-affix-wrapper-rtl"),"rtl"===M),(0,a.Z)(o,"".concat(B,"-affix-wrapper-borderless"),!m),o),(0,R.Z)("".concat(B,"-affix-wrapper"),U,W)),wrapperClassName:l()((0,a.Z)({},"".concat(B,"-group-rtl"),"rtl"===M)),groupClassName:l()((s={},(0,a.Z)(s,"".concat(B,"-group-wrapper-sm"),"small"===_),(0,a.Z)(s,"".concat(B,"-group-wrapper-lg"),"large"===_),(0,a.Z)(s,"".concat(B,"-group-wrapper-rtl"),"rtl"===M),s),(0,R.Z)("".concat(B,"-group-wrapper"),U,W))}))})),I=j,M=n(44874),F=n(31741),B=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},D=function(e){return e?i.createElement(F.Z,null):i.createElement(M.Z,null)},V={click:"onClick",hover:"onMouseOver"};var _=i.forwardRef((function(e,t){var n=(0,i.useState)(!1),o=(0,C.Z)(n,2),c=o[0],s=o[1],f=(0,i.useRef)(null),d=k(f),p=function(){e.disabled||(c&&d(),s((function(e){return!e})))},v=function(n){var o=n.getPrefixCls,u=e.className,s=e.prefixCls,d=e.inputPrefixCls,v=e.size,m=e.visibilityToggle,g=void 0===m||m,h=B(e,["className","prefixCls","inputPrefixCls","size","visibilityToggle"]),b=o("input",d),x=o("input-password",s),C=g&&function(t){var n,r=e.action,o=void 0===r?"click":r,l=e.iconRender,u=V[o]||"",s=(void 0===l?D:l)(c),f=(n={},(0,a.Z)(n,u,p),(0,a.Z)(n,"className","".concat(t,"-icon")),(0,a.Z)(n,"key","passwordIcon"),(0,a.Z)(n,"onMouseDown",(function(e){e.preventDefault()})),(0,a.Z)(n,"onMouseUp",(function(e){e.preventDefault()})),n);return i.cloneElement(i.isValidElement(s)?s:i.createElement("span",null,s),f)}(x),Z=l()(x,u,(0,a.Z)({},"".concat(x,"-").concat(v),!!v)),w=(0,r.Z)((0,r.Z)({},(0,y.Z)(h,["suffix","iconRender"])),{type:c?"text":"password",className:Z,prefixCls:b,suffix:C});return v&&(w.size=v),i.createElement(I,(0,r.Z)({ref:(0,S.sQ)(t,f)},w))};return i.createElement(u.C,null,v)})),L=n(40765),H=n(59491),K=n(48138),Q=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};var W,q=i.forwardRef((function(e,t){var n,o,c=e.prefixCls,s=e.inputPrefixCls,f=e.className,d=e.size,p=e.suffix,v=e.enterButton,m=void 0!==v&&v,g=e.addonAfter,h=e.loading,b=e.disabled,x=e.onSearch,C=e.onChange,Z=e.onCompositionStart,y=e.onCompositionEnd,w=Q(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),E=i.useContext(u.E_),z=E.getPrefixCls,N=E.direction,A=i.useContext(O.Z),R=i.useRef(!1),k=d||A,P=i.useRef(null),T=function(e){var t;document.activeElement===(null===(t=P.current)||void 0===t?void 0:t.input)&&e.preventDefault()},j=function(e){var t,n;x&&x(null===(n=null===(t=P.current)||void 0===t?void 0:t.input)||void 0===n?void 0:n.value,e)},M=z("input-search",c),F=z("input",s),B="boolean"===typeof m?i.createElement(L.Z,null):null,D="".concat(M,"-button"),V=m||{},_=V.type&&!0===V.type.__ANT_BUTTON;o=_||"button"===V.type?(0,K.Tm)(V,(0,r.Z)({onMouseDown:T,onClick:function(e){var t,n;null===(n=null===(t=null===V||void 0===V?void 0:V.props)||void 0===t?void 0:t.onClick)||void 0===n||n.call(t,e),j(e)},key:"enterButton"},_?{className:D,size:k}:{})):i.createElement(H.Z,{className:D,type:m?"primary":void 0,size:k,disabled:b,key:"enterButton",onMouseDown:T,onClick:j,loading:h,icon:B},m),g&&(o=[o,(0,K.Tm)(g,{key:"addonAfter"})]);var W=l()(M,(n={},(0,a.Z)(n,"".concat(M,"-rtl"),"rtl"===N),(0,a.Z)(n,"".concat(M,"-").concat(k),!!k),(0,a.Z)(n,"".concat(M,"-with-button"),!!m),n),f);return i.createElement(I,(0,r.Z)({ref:(0,S.sQ)(P,t),onPressEnter:function(e){R.current||j(e)}},w,{size:k,onCompositionStart:function(e){R.current=!0,null===Z||void 0===Z||Z(e)},onCompositionEnd:function(e){R.current=!1,null===y||void 0===y||y(e)},prefixCls:F,addonAfter:o,suffix:p,onChange:function(e){e&&e.target&&"click"===e.type&&x&&x(e.target.value,e),C&&C(e)},className:W,disabled:b}))})),U=n(15671),Y=n(43144),G=n(60136),X=n(27277),J=n(25172),$=n(72846),ee=n(95557),te="\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important;\n  pointer-events: none !important;\n",ne=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break"],re={};function ae(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.getAttribute("id")||e.getAttribute("data-reactid")||e.getAttribute("name");if(t&&re[n])return re[n];var r=window.getComputedStyle(e),a=r.getPropertyValue("box-sizing")||r.getPropertyValue("-moz-box-sizing")||r.getPropertyValue("-webkit-box-sizing"),o=parseFloat(r.getPropertyValue("padding-bottom"))+parseFloat(r.getPropertyValue("padding-top")),l=parseFloat(r.getPropertyValue("border-bottom-width"))+parseFloat(r.getPropertyValue("border-top-width")),i=ne.map((function(e){return"".concat(e,":").concat(r.getPropertyValue(e))})).join(";"),u={sizingStyle:i,paddingSize:o,borderSize:l,boxSizing:a};return t&&n&&(re[n]=u),u}var oe=["prefixCls","onPressEnter","defaultValue","value","autoSize","onResize","className","style","disabled","onChange","onInternalAutoSize"],le=i.forwardRef((function(e,t){var n=e.prefixCls,o=void 0===n?"rc-textarea":n,u=(e.onPressEnter,e.defaultValue),c=e.value,s=e.autoSize,d=e.onResize,p=e.className,v=e.style,m=e.disabled,g=e.onChange,h=(e.onInternalAutoSize,(0,Z.Z)(e,oe)),b=(0,w.Z)(u,{value:c,postState:function(e){return null!==e&&void 0!==e?e:""}}),y=(0,C.Z)(b,2),E=y[0],z=y[1],N=i.useRef();i.useImperativeHandle(t,(function(){return{textArea:N.current}}));var S=i.useMemo((function(){return s&&"object"===(0,f.Z)(s)?[s.minRows,s.maxRows]:[]}),[s]),A=(0,C.Z)(S,2),O=A[0],R=A[1],k=!!s,P=i.useState(2),T=(0,C.Z)(P,2),j=T[0],I=T[1],M=i.useState(),F=(0,C.Z)(M,2),B=F[0],D=F[1],V=function(){I(0)};(0,$.Z)((function(){k&&V()}),[c,O,R,k]),(0,$.Z)((function(){if(0===j)I(1);else if(1===j){var e=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;W||((W=document.createElement("textarea")).setAttribute("tab-index","-1"),W.setAttribute("aria-hidden","true"),document.body.appendChild(W)),e.getAttribute("wrap")?W.setAttribute("wrap",e.getAttribute("wrap")):W.removeAttribute("wrap");var a=ae(e,t),o=a.paddingSize,l=a.borderSize,i=a.boxSizing,u=a.sizingStyle;W.setAttribute("style","".concat(u,";").concat(te)),W.value=e.value||e.placeholder||"";var c,s=void 0,f=void 0,d=W.scrollHeight;if("border-box"===i?d+=l:"content-box"===i&&(d-=o),null!==n||null!==r){W.value=" ";var p=W.scrollHeight-o;null!==n&&(s=p*n,"border-box"===i&&(s=s+o+l),d=Math.max(s,d)),null!==r&&(f=p*r,"border-box"===i&&(f=f+o+l),c=d>f?"":"hidden",d=Math.min(f,d))}var v={height:d,overflowY:c,resize:"none"};return s&&(v.minHeight=s),f&&(v.maxHeight=f),v}(N.current,!1,O,R);I(2),D(e)}else!function(){try{if(document.activeElement===N.current){var e=N.current,t=e.selectionStart,n=e.selectionEnd,r=e.scrollTop;N.current.setSelectionRange(t,n),N.current.scrollTop=r}}catch(a){}}()}),[j]);var _=i.useRef(),L=function(){ee.Z.cancel(_.current)};i.useEffect((function(){return L}),[]);var H=k?B:null,K=(0,x.Z)((0,x.Z)({},v),H);return 0!==j&&1!==j||(K.overflowY="hidden",K.overflowX="hidden"),i.createElement(J.Z,{onResize:function(e){2===j&&(null===d||void 0===d||d(e),s&&(L(),_.current=(0,ee.Z)((function(){V()}))))},disabled:!(s||d)},i.createElement("textarea",(0,r.Z)({},h,{ref:N,style:K,className:l()(o,p,(0,a.Z)({},"".concat(o,"-disabled"),m)),disabled:m,value:E,onChange:function(e){z(e.target.value),null===g||void 0===g||g(e)}})))})),ie=le,ue=function(e){(0,G.Z)(n,e);var t=(0,X.Z)(n);function n(e){var r;(0,U.Z)(this,n),(r=t.call(this,e)).resizableTextArea=void 0,r.focus=function(){r.resizableTextArea.textArea.focus()},r.saveTextArea=function(e){r.resizableTextArea=e},r.handleChange=function(e){var t=r.props.onChange;r.setValue(e.target.value),t&&t(e)},r.handleKeyDown=function(e){var t=r.props,n=t.onPressEnter,a=t.onKeyDown;13===e.keyCode&&n&&n(e),a&&a(e)};var a="undefined"===typeof e.value||null===e.value?e.defaultValue:e.value;return r.state={value:a},r}return(0,Y.Z)(n,[{key:"setValue",value:function(e,t){"value"in this.props||this.setState({value:e},t)}},{key:"blur",value:function(){this.resizableTextArea.textArea.blur()}},{key:"render",value:function(){return i.createElement(ie,(0,r.Z)({},this.props,{value:this.state.value,onKeyDown:this.handleKeyDown,onChange:this.handleChange,ref:this.saveTextArea}))}}],[{key:"getDerivedStateFromProps",value:function(e){return"value"in e?{value:e.value}:null}}]),n}(i.Component),ce=(0,n(56927).b)("text","input");var se=function(e){(0,G.Z)(n,e);var t=(0,X.Z)(n);function n(){return(0,U.Z)(this,n),t.apply(this,arguments)}return(0,Y.Z)(n,[{key:"renderClearIcon",value:function(e){var t,n=this.props,r=n.value,o=n.disabled,u=n.readOnly,c=n.handleReset,s=n.suffix,f=!o&&!u&&r,p="".concat(e,"-clear-icon");return i.createElement(d.Z,{onClick:c,onMouseDown:function(e){return e.preventDefault()},className:l()((t={},(0,a.Z)(t,"".concat(p,"-hidden"),!f),(0,a.Z)(t,"".concat(p,"-has-suffix"),!!s),t),p),role:"button"})}},{key:"renderTextAreaWithClearIcon",value:function(e,t,n){var r,o=this.props,u=o.value,c=o.allowClear,s=o.className,f=o.style,d=o.direction,p=o.bordered,v=o.hidden,m=o.status,g=n.status,h=n.hasFeedback;if(!c)return(0,K.Tm)(t,{value:u});var b,x=l()("".concat(e,"-affix-wrapper"),"".concat(e,"-affix-wrapper-textarea-with-clear-btn"),(0,R.Z)("".concat(e,"-affix-wrapper"),(0,R.F)(g,m),h),(r={},(0,a.Z)(r,"".concat(e,"-affix-wrapper-rtl"),"rtl"===d),(0,a.Z)(r,"".concat(e,"-affix-wrapper-borderless"),!p),(0,a.Z)(r,"".concat(s),!((b=this.props).addonBefore||b.addonAfter)&&s),r));return i.createElement("span",{className:x,style:f,hidden:v},(0,K.Tm)(t,{style:null,value:u}),this.renderClearIcon(e))}},{key:"render",value:function(){var e=this;return i.createElement(c.aM.Consumer,null,(function(t){var n=e.props,r=n.prefixCls,a=n.inputType,o=n.element;if(a===ce[0])return e.renderTextAreaWithClearIcon(r,o,t)}))}}]),n}(i.Component),fe=se,de=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function pe(e,t){return(0,b.Z)(e||"").slice(0,t).join("")}function ve(e,t,n,r){var a=n;return e?a=pe(n,r):(0,b.Z)(t||"").length<n.length&&(0,b.Z)(n||"").length>r&&(a=t),a}var me=i.forwardRef((function(e,t){var n,o=e.prefixCls,s=e.bordered,d=void 0===s||s,p=e.showCount,v=void 0!==p&&p,m=e.maxLength,g=e.className,h=e.style,x=e.size,Z=e.disabled,E=e.onCompositionStart,z=e.onCompositionEnd,N=e.onChange,S=e.status,k=de(e,["prefixCls","bordered","showCount","maxLength","className","style","size","disabled","onCompositionStart","onCompositionEnd","onChange","status"]),P=i.useContext(u.E_),j=P.getPrefixCls,I=P.direction,M=i.useContext(O.Z),F=i.useContext(A.Z),B=Z||F,D=i.useContext(c.aM),V=D.status,_=D.hasFeedback,L=D.isFormItemInput,H=D.feedbackIcon,K=(0,R.F)(V,S),Q=i.useRef(null),W=i.useRef(null),q=i.useState(!1),U=(0,C.Z)(q,2),Y=U[0],G=U[1],X=i.useRef(),J=i.useRef(0),$=(0,w.Z)(k.defaultValue,{value:k.value}),ee=(0,C.Z)($,2),te=ee[0],ne=ee[1],re=k.hidden,ae=function(e,t){void 0===k.value&&(ne(e),null===t||void 0===t||t())},oe=Number(m)>0,le=j("input",o);i.useImperativeHandle(t,(function(){var e;return{resizableTextArea:null===(e=Q.current)||void 0===e?void 0:e.resizableTextArea,focus:function(e){var t,n;!function(e,t){if(e){e.focus(t);var n=(t||{}).cursor;if(n){var r=e.value.length;switch(n){case"start":e.setSelectionRange(0,0);break;case"end":e.setSelectionRange(r,r);break;default:e.setSelectionRange(0,r)}}}}(null===(n=null===(t=Q.current)||void 0===t?void 0:t.resizableTextArea)||void 0===n?void 0:n.textArea,e)},blur:function(){var e;return null===(e=Q.current)||void 0===e?void 0:e.blur()}}}));var ie=i.createElement(ue,(0,r.Z)({},(0,y.Z)(k,["allowClear"]),{disabled:B,className:l()((n={},(0,a.Z)(n,"".concat(le,"-borderless"),!d),(0,a.Z)(n,g,g&&!v),(0,a.Z)(n,"".concat(le,"-sm"),"small"===M||"small"===x),(0,a.Z)(n,"".concat(le,"-lg"),"large"===M||"large"===x),n),(0,R.Z)(le,K)),style:v?{resize:null===h||void 0===h?void 0:h.resize}:h,prefixCls:le,onCompositionStart:function(e){G(!0),X.current=te,J.current=e.currentTarget.selectionStart,null===E||void 0===E||E(e)},onChange:function(e){var t=e.target.value;!Y&&oe&&(t=ve(e.target.selectionStart>=m+1||e.target.selectionStart===t.length||!e.target.selectionStart,te,t,m));ae(t),T(e.currentTarget,e,N,t)},onCompositionEnd:function(e){var t;G(!1);var n=e.currentTarget.value;oe&&(n=ve(J.current>=m+1||J.current===(null===(t=X.current)||void 0===t?void 0:t.length),X.current,n,m));n!==te&&(ae(n),T(e.currentTarget,e,N,n)),null===z||void 0===z||z(e)},ref:Q})),ce=function(e){return"undefined"===typeof e||null===e?"":String(e)}(te);Y||!oe||null!==k.value&&void 0!==k.value||(ce=pe(ce,m));var se=i.createElement(fe,(0,r.Z)({disabled:B},k,{prefixCls:le,direction:I,inputType:"text",value:ce,element:ie,handleReset:function(e){var t,n,r;ae(""),null===(t=Q.current)||void 0===t||t.focus(),T(null===(r=null===(n=Q.current)||void 0===n?void 0:n.resizableTextArea)||void 0===r?void 0:r.textArea,e,N)},ref:W,bordered:d,status:S,style:v?void 0:h}));if(v||_){var me,ge=(0,b.Z)(ce).length,he="";return he="object"===(0,f.Z)(v)?v.formatter({value:ce,count:ge,maxLength:m}):"".concat(ge).concat(oe?" / ".concat(m):""),i.createElement("div",{hidden:re,className:l()("".concat(le,"-textarea"),(me={},(0,a.Z)(me,"".concat(le,"-textarea-rtl"),"rtl"===I),(0,a.Z)(me,"".concat(le,"-textarea-show-count"),v),(0,a.Z)(me,"".concat(le,"-textarea-in-form-item"),L),me),(0,R.Z)("".concat(le,"-textarea"),K,_),g),style:h,"data-count":he},se,_&&i.createElement("span",{className:"".concat(le,"-textarea-suffix")},H))}return se})),ge=I;ge.Group=s,ge.Search=q,ge.TextArea=me,ge.Password=_;var he=ge}}]);