(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();var rd={exports:{}},qr={},ld={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ei=Symbol.for("react.element"),Zm=Symbol.for("react.portal"),Gm=Symbol.for("react.fragment"),Km=Symbol.for("react.strict_mode"),Qm=Symbol.for("react.profiler"),Jm=Symbol.for("react.provider"),qm=Symbol.for("react.context"),th=Symbol.for("react.forward_ref"),eh=Symbol.for("react.suspense"),nh=Symbol.for("react.memo"),ah=Symbol.for("react.lazy"),nu=Symbol.iterator;function ih(e){return e===null||typeof e!="object"?null:(e=nu&&e[nu]||e["@@iterator"],typeof e=="function"?e:null)}var od={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sd=Object.assign,ud={};function Pa(e,t,n){this.props=e,this.context=t,this.refs=ud,this.updater=n||od}Pa.prototype.isReactComponent={};Pa.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Pa.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function cd(){}cd.prototype=Pa.prototype;function Zo(e,t,n){this.props=e,this.context=t,this.refs=ud,this.updater=n||od}var Go=Zo.prototype=new cd;Go.constructor=Zo;sd(Go,Pa.prototype);Go.isPureReactComponent=!0;var au=Array.isArray,dd=Object.prototype.hasOwnProperty,Ko={current:null},gd={key:!0,ref:!0,__self:!0,__source:!0};function md(e,t,n){var a,i={},r=null,l=null;if(t!=null)for(a in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(r=""+t.key),t)dd.call(t,a)&&!gd.hasOwnProperty(a)&&(i[a]=t[a]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var o=Array(s),u=0;u<s;u++)o[u]=arguments[u+2];i.children=o}if(e&&e.defaultProps)for(a in s=e.defaultProps,s)i[a]===void 0&&(i[a]=s[a]);return{$$typeof:Ei,type:e,key:r,ref:l,props:i,_owner:Ko.current}}function rh(e,t){return{$$typeof:Ei,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Qo(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ei}function lh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var iu=/\/+/g;function vl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?lh(""+e.key):t.toString(36)}function hr(e,t,n,a,i){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(r){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Ei:case Zm:l=!0}}if(l)return l=e,i=i(l),e=a===""?"."+vl(l,0):a,au(i)?(n="",e!=null&&(n=e.replace(iu,"$&/")+"/"),hr(i,t,n,"",function(u){return u})):i!=null&&(Qo(i)&&(i=rh(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(iu,"$&/")+"/")+e)),t.push(i)),1;if(l=0,a=a===""?".":a+":",au(e))for(var s=0;s<e.length;s++){r=e[s];var o=a+vl(r,s);l+=hr(r,t,n,o,i)}else if(o=ih(e),typeof o=="function")for(e=o.call(e),s=0;!(r=e.next()).done;)r=r.value,o=a+vl(r,s++),l+=hr(r,t,n,o,i);else if(r==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Fi(e,t,n){if(e==null)return e;var a=[],i=0;return hr(e,a,"","",function(r){return t.call(n,r,i++)}),a}function oh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ut={current:null},fr={transition:null},sh={ReactCurrentDispatcher:Ut,ReactCurrentBatchConfig:fr,ReactCurrentOwner:Ko};function hd(){throw Error("act(...) is not supported in production builds of React.")}W.Children={map:Fi,forEach:function(e,t,n){Fi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Fi(e,function(){t++}),t},toArray:function(e){return Fi(e,function(t){return t})||[]},only:function(e){if(!Qo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};W.Component=Pa;W.Fragment=Gm;W.Profiler=Qm;W.PureComponent=Zo;W.StrictMode=Km;W.Suspense=eh;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sh;W.act=hd;W.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=sd({},e.props),i=e.key,r=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(r=t.ref,l=Ko.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(o in t)dd.call(t,o)&&!gd.hasOwnProperty(o)&&(a[o]=t[o]===void 0&&s!==void 0?s[o]:t[o])}var o=arguments.length-2;if(o===1)a.children=n;else if(1<o){s=Array(o);for(var u=0;u<o;u++)s[u]=arguments[u+2];a.children=s}return{$$typeof:Ei,type:e.type,key:i,ref:r,props:a,_owner:l}};W.createContext=function(e){return e={$$typeof:qm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Jm,_context:e},e.Consumer=e};W.createElement=md;W.createFactory=function(e){var t=md.bind(null,e);return t.type=e,t};W.createRef=function(){return{current:null}};W.forwardRef=function(e){return{$$typeof:th,render:e}};W.isValidElement=Qo;W.lazy=function(e){return{$$typeof:ah,_payload:{_status:-1,_result:e},_init:oh}};W.memo=function(e,t){return{$$typeof:nh,type:e,compare:t===void 0?null:t}};W.startTransition=function(e){var t=fr.transition;fr.transition={};try{e()}finally{fr.transition=t}};W.unstable_act=hd;W.useCallback=function(e,t){return Ut.current.useCallback(e,t)};W.useContext=function(e){return Ut.current.useContext(e)};W.useDebugValue=function(){};W.useDeferredValue=function(e){return Ut.current.useDeferredValue(e)};W.useEffect=function(e,t){return Ut.current.useEffect(e,t)};W.useId=function(){return Ut.current.useId()};W.useImperativeHandle=function(e,t,n){return Ut.current.useImperativeHandle(e,t,n)};W.useInsertionEffect=function(e,t){return Ut.current.useInsertionEffect(e,t)};W.useLayoutEffect=function(e,t){return Ut.current.useLayoutEffect(e,t)};W.useMemo=function(e,t){return Ut.current.useMemo(e,t)};W.useReducer=function(e,t,n){return Ut.current.useReducer(e,t,n)};W.useRef=function(e){return Ut.current.useRef(e)};W.useState=function(e){return Ut.current.useState(e)};W.useSyncExternalStore=function(e,t,n){return Ut.current.useSyncExternalStore(e,t,n)};W.useTransition=function(){return Ut.current.useTransition()};W.version="18.3.1";ld.exports=W;var Z=ld.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uh=Z,ch=Symbol.for("react.element"),dh=Symbol.for("react.fragment"),gh=Object.prototype.hasOwnProperty,mh=uh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hh={key:!0,ref:!0,__self:!0,__source:!0};function fd(e,t,n){var a,i={},r=null,l=null;n!==void 0&&(r=""+n),t.key!==void 0&&(r=""+t.key),t.ref!==void 0&&(l=t.ref);for(a in t)gh.call(t,a)&&!hh.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps,t)i[a]===void 0&&(i[a]=t[a]);return{$$typeof:ch,type:e,key:r,ref:l,props:i,_owner:mh.current}}qr.Fragment=dh;qr.jsx=fd;qr.jsxs=fd;rd.exports=qr;var f=rd.exports,pd={exports:{}},ue={},Sd={exports:{}},vd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,F){var z=L.length;L.push(F);t:for(;0<z;){var pt=z-1>>>1,xt=L[pt];if(0<i(xt,F))L[pt]=F,L[z]=xt,z=pt;else break t}}function n(L){return L.length===0?null:L[0]}function a(L){if(L.length===0)return null;var F=L[0],z=L.pop();if(z!==F){L[0]=z;t:for(var pt=0,xt=L.length,Ti=xt>>>1;pt<Ti;){var Dn=2*(pt+1)-1,Sl=L[Dn],En=Dn+1,Yi=L[En];if(0>i(Sl,z))En<xt&&0>i(Yi,Sl)?(L[pt]=Yi,L[En]=z,pt=En):(L[pt]=Sl,L[Dn]=z,pt=Dn);else if(En<xt&&0>i(Yi,z))L[pt]=Yi,L[En]=z,pt=En;else break t}}return F}function i(L,F){var z=L.sortIndex-F.sortIndex;return z!==0?z:L.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var o=[],u=[],d=1,m=null,c=3,S=!1,y=!1,v=!1,x=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(L){for(var F=n(u);F!==null;){if(F.callback===null)a(u);else if(F.startTime<=L)a(u),F.sortIndex=F.expirationTime,t(o,F);else break;F=n(u)}}function p(L){if(v=!1,C(L),!y)if(n(o)!==null)y=!0,at(b);else{var F=n(u);F!==null&&tt(p,F.startTime-L)}}function b(L,F){y=!1,v&&(v=!1,g(E),E=-1),S=!0;var z=c;try{for(C(F),m=n(o);m!==null&&(!(m.expirationTime>F)||L&&!$());){var pt=m.callback;if(typeof pt=="function"){m.callback=null,c=m.priorityLevel;var xt=pt(m.expirationTime<=F);F=e.unstable_now(),typeof xt=="function"?m.callback=xt:m===n(o)&&a(o),C(F)}else a(o);m=n(o)}if(m!==null)var Ti=!0;else{var Dn=n(u);Dn!==null&&tt(p,Dn.startTime-F),Ti=!1}return Ti}finally{m=null,c=z,S=!1}}var A=!1,N=null,E=-1,B=5,R=-1;function $(){return!(e.unstable_now()-R<B)}function nt(){if(N!==null){var L=e.unstable_now();R=L;var F=!0;try{F=N(!0,L)}finally{F?X():(A=!1,N=null)}}else A=!1}var X;if(typeof h=="function")X=function(){h(nt)};else if(typeof MessageChannel<"u"){var w=new MessageChannel,k=w.port2;w.port1.onmessage=nt,X=function(){k.postMessage(null)}}else X=function(){x(nt,0)};function at(L){N=L,A||(A=!0,X())}function tt(L,F){E=x(function(){L(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){y||S||(y=!0,at(b))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return c},e.unstable_getFirstCallbackNode=function(){return n(o)},e.unstable_next=function(L){switch(c){case 1:case 2:case 3:var F=3;break;default:F=c}var z=c;c=F;try{return L()}finally{c=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,F){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var z=c;c=L;try{return F()}finally{c=z}},e.unstable_scheduleCallback=function(L,F,z){var pt=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?pt+z:pt):z=pt,L){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=z+xt,L={id:d++,callback:F,priorityLevel:L,startTime:z,expirationTime:xt,sortIndex:-1},z>pt?(L.sortIndex=z,t(u,L),n(o)===null&&L===n(u)&&(v?(g(E),E=-1):v=!0,tt(p,z-pt))):(L.sortIndex=xt,t(o,L),y||S||(y=!0,at(b))),L},e.unstable_shouldYield=$,e.unstable_wrapCallback=function(L){var F=c;return function(){var z=c;c=F;try{return L.apply(this,arguments)}finally{c=z}}}})(vd);Sd.exports=vd;var fh=Sd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ph=Z,se=fh;function O(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var yd=new Set,oi={};function $n(e,t){Aa(e,t),Aa(e+"Capture",t)}function Aa(e,t){for(oi[e]=t,e=0;e<t.length;e++)yd.add(t[e])}var Ge=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wl=Object.prototype.hasOwnProperty,Sh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ru={},lu={};function vh(e){return Wl.call(lu,e)?!0:Wl.call(ru,e)?!1:Sh.test(e)?lu[e]=!0:(ru[e]=!0,!1)}function yh(e,t,n,a){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ch(e,t,n,a){if(t===null||typeof t>"u"||yh(e,t,n,a))return!0;if(a)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Wt(e,t,n,a,i,r,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=r,this.removeEmptyString=l}var Ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ot[e]=new Wt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ot[t]=new Wt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ot[e]=new Wt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ot[e]=new Wt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ot[e]=new Wt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ot[e]=new Wt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ot[e]=new Wt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ot[e]=new Wt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ot[e]=new Wt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Jo=/[\-:]([a-z])/g;function qo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Jo,qo);Ot[t]=new Wt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Jo,qo);Ot[t]=new Wt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Jo,qo);Ot[t]=new Wt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ot[e]=new Wt(e,1,!1,e.toLowerCase(),null,!1,!1)});Ot.xlinkHref=new Wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ot[e]=new Wt(e,1,!1,e.toLowerCase(),null,!0,!0)});function ts(e,t,n,a){var i=Ot.hasOwnProperty(t)?Ot[t]:null;(i!==null?i.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ch(t,n,i,a)&&(n=null),a||i===null?vh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,a=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,a?e.setAttributeNS(a,t,n):e.setAttribute(t,n))))}var tn=ph.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$i=Symbol.for("react.element"),Kn=Symbol.for("react.portal"),Qn=Symbol.for("react.fragment"),es=Symbol.for("react.strict_mode"),Zl=Symbol.for("react.profiler"),Cd=Symbol.for("react.provider"),Ad=Symbol.for("react.context"),ns=Symbol.for("react.forward_ref"),Gl=Symbol.for("react.suspense"),Kl=Symbol.for("react.suspense_list"),as=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),bd=Symbol.for("react.offscreen"),ou=Symbol.iterator;function Ia(e){return e===null||typeof e!="object"?null:(e=ou&&e[ou]||e["@@iterator"],typeof e=="function"?e:null)}var gt=Object.assign,yl;function Xa(e){if(yl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);yl=t&&t[1]||""}return`
`+yl+e}var Cl=!1;function Al(e,t){if(!e||Cl)return"";Cl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var a=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){a=u}e.call(t.prototype)}else{try{throw Error()}catch(u){a=u}e()}}catch(u){if(u&&a&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),r=a.stack.split(`
`),l=i.length-1,s=r.length-1;1<=l&&0<=s&&i[l]!==r[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==r[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==r[s]){var o=`
`+i[l].replace(" at new "," at ");return e.displayName&&o.includes("<anonymous>")&&(o=o.replace("<anonymous>",e.displayName)),o}while(1<=l&&0<=s);break}}}finally{Cl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Xa(e):""}function Ah(e){switch(e.tag){case 5:return Xa(e.type);case 16:return Xa("Lazy");case 13:return Xa("Suspense");case 19:return Xa("SuspenseList");case 0:case 2:case 15:return e=Al(e.type,!1),e;case 11:return e=Al(e.type.render,!1),e;case 1:return e=Al(e.type,!0),e;default:return""}}function Ql(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qn:return"Fragment";case Kn:return"Portal";case Zl:return"Profiler";case es:return"StrictMode";case Gl:return"Suspense";case Kl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ad:return(e.displayName||"Context")+".Consumer";case Cd:return(e._context.displayName||"Context")+".Provider";case ns:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case as:return t=e.displayName||null,t!==null?t:Ql(e.type)||"Memo";case an:t=e._payload,e=e._init;try{return Ql(e(t))}catch{}}return null}function bh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ql(t);case 8:return t===es?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Cn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function xh(e){var t=xd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){a=""+l,r.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(l){a=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _i(e){e._valueTracker||(e._valueTracker=xh(e))}function Md(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=xd(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Pr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Jl(e,t){var n=t.checked;return gt({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function su(e,t){var n=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;n=Cn(t.value!=null?t.value:n),e._wrapperState={initialChecked:a,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Dd(e,t){t=t.checked,t!=null&&ts(e,"checked",t,!1)}function ql(e,t){Dd(e,t);var n=Cn(t.value),a=t.type;if(n!=null)a==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?to(e,t.type,n):t.hasOwnProperty("defaultValue")&&to(e,t.type,Cn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function uu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function to(e,t,n){(t!=="number"||Pr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ua=Array.isArray;function ma(e,t,n,a){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Cn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function eo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(O(91));return gt({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function cu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(O(92));if(Ua(n)){if(1<n.length)throw Error(O(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Cn(n)}}function Ed(e,t){var n=Cn(t.value),a=Cn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),a!=null&&(e.defaultValue=""+a)}function du(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Nd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function no(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Nd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var zi,wd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,a,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,a,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(zi=zi||document.createElement("div"),zi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=zi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function si(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ga={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Mh=["Webkit","ms","Moz","O"];Object.keys(Ga).forEach(function(e){Mh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ga[t]=Ga[e]})});function Pd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ga.hasOwnProperty(e)&&Ga[e]?(""+t).trim():t+"px"}function Vd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var a=n.indexOf("--")===0,i=Pd(n,t[n],a);n==="float"&&(n="cssFloat"),a?e.setProperty(n,i):e[n]=i}}var Dh=gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ao(e,t){if(t){if(Dh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(O(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(O(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(O(61))}if(t.style!=null&&typeof t.style!="object")throw Error(O(62))}}function io(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ro=null;function is(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var lo=null,ha=null,fa=null;function gu(e){if(e=Pi(e)){if(typeof lo!="function")throw Error(O(280));var t=e.stateNode;t&&(t=il(t),lo(e.stateNode,e.type,t))}}function Od(e){ha?fa?fa.push(e):fa=[e]:ha=e}function Rd(){if(ha){var e=ha,t=fa;if(fa=ha=null,gu(e),t)for(e=0;e<t.length;e++)gu(t[e])}}function kd(e,t){return e(t)}function Ld(){}var bl=!1;function Id(e,t,n){if(bl)return e(t,n);bl=!0;try{return kd(e,t,n)}finally{bl=!1,(ha!==null||fa!==null)&&(Ld(),Rd())}}function ui(e,t){var n=e.stateNode;if(n===null)return null;var a=il(n);if(a===null)return null;n=a[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(O(231,t,typeof n));return n}var oo=!1;if(Ge)try{var Ba={};Object.defineProperty(Ba,"passive",{get:function(){oo=!0}}),window.addEventListener("test",Ba,Ba),window.removeEventListener("test",Ba,Ba)}catch{oo=!1}function Eh(e,t,n,a,i,r,l,s,o){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Ka=!1,Vr=null,Or=!1,so=null,Nh={onError:function(e){Ka=!0,Vr=e}};function wh(e,t,n,a,i,r,l,s,o){Ka=!1,Vr=null,Eh.apply(Nh,arguments)}function Ph(e,t,n,a,i,r,l,s,o){if(wh.apply(this,arguments),Ka){if(Ka){var u=Vr;Ka=!1,Vr=null}else throw Error(O(198));Or||(Or=!0,so=u)}}function _n(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Bd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function mu(e){if(_n(e)!==e)throw Error(O(188))}function Vh(e){var t=e.alternate;if(!t){if(t=_n(e),t===null)throw Error(O(188));return t!==e?null:e}for(var n=e,a=t;;){var i=n.return;if(i===null)break;var r=i.alternate;if(r===null){if(a=i.return,a!==null){n=a;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===n)return mu(i),e;if(r===a)return mu(i),t;r=r.sibling}throw Error(O(188))}if(n.return!==a.return)n=i,a=r;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,a=r;break}if(s===a){l=!0,a=i,n=r;break}s=s.sibling}if(!l){for(s=r.child;s;){if(s===n){l=!0,n=r,a=i;break}if(s===a){l=!0,a=r,n=i;break}s=s.sibling}if(!l)throw Error(O(189))}}if(n.alternate!==a)throw Error(O(190))}if(n.tag!==3)throw Error(O(188));return n.stateNode.current===n?e:t}function Td(e){return e=Vh(e),e!==null?Yd(e):null}function Yd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Yd(e);if(t!==null)return t;e=e.sibling}return null}var Fd=se.unstable_scheduleCallback,hu=se.unstable_cancelCallback,Oh=se.unstable_shouldYield,Rh=se.unstable_requestPaint,St=se.unstable_now,kh=se.unstable_getCurrentPriorityLevel,rs=se.unstable_ImmediatePriority,$d=se.unstable_UserBlockingPriority,Rr=se.unstable_NormalPriority,Lh=se.unstable_LowPriority,_d=se.unstable_IdlePriority,tl=null,Ie=null;function Ih(e){if(Ie&&typeof Ie.onCommitFiberRoot=="function")try{Ie.onCommitFiberRoot(tl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ee=Math.clz32?Math.clz32:Yh,Bh=Math.log,Th=Math.LN2;function Yh(e){return e>>>=0,e===0?32:31-(Bh(e)/Th|0)|0}var ji=64,Hi=4194304;function Wa(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function kr(e,t){var n=e.pendingLanes;if(n===0)return 0;var a=0,i=e.suspendedLanes,r=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?a=Wa(s):(r&=l,r!==0&&(a=Wa(r)))}else l=n&~i,l!==0?a=Wa(l):r!==0&&(a=Wa(r));if(a===0)return 0;if(t!==0&&t!==a&&!(t&i)&&(i=a&-a,r=t&-t,i>=r||i===16&&(r&4194240)!==0))return t;if(a&4&&(a|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)n=31-Ee(t),i=1<<n,a|=e[n],t&=~i;return a}function Fh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $h(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes;0<r;){var l=31-Ee(r),s=1<<l,o=i[l];o===-1?(!(s&n)||s&a)&&(i[l]=Fh(s,t)):o<=t&&(e.expiredLanes|=s),r&=~s}}function uo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zd(){var e=ji;return ji<<=1,!(ji&4194240)&&(ji=64),e}function xl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ni(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ee(t),e[t]=n}function _h(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ee(n),r=1<<i;t[i]=0,a[i]=-1,e[i]=-1,n&=~r}}function ls(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-Ee(n),i=1<<a;i&t|e[a]&t&&(e[a]|=t),n&=~i}}var q=0;function jd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Hd,os,Xd,Ud,Wd,co=!1,Xi=[],dn=null,gn=null,mn=null,ci=new Map,di=new Map,ln=[],zh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fu(e,t){switch(e){case"focusin":case"focusout":dn=null;break;case"dragenter":case"dragleave":gn=null;break;case"mouseover":case"mouseout":mn=null;break;case"pointerover":case"pointerout":ci.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":di.delete(t.pointerId)}}function Ta(e,t,n,a,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:r,targetContainers:[i]},t!==null&&(t=Pi(t),t!==null&&os(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function jh(e,t,n,a,i){switch(t){case"focusin":return dn=Ta(dn,e,t,n,a,i),!0;case"dragenter":return gn=Ta(gn,e,t,n,a,i),!0;case"mouseover":return mn=Ta(mn,e,t,n,a,i),!0;case"pointerover":var r=i.pointerId;return ci.set(r,Ta(ci.get(r)||null,e,t,n,a,i)),!0;case"gotpointercapture":return r=i.pointerId,di.set(r,Ta(di.get(r)||null,e,t,n,a,i)),!0}return!1}function Zd(e){var t=Pn(e.target);if(t!==null){var n=_n(t);if(n!==null){if(t=n.tag,t===13){if(t=Bd(n),t!==null){e.blockedOn=t,Wd(e.priority,function(){Xd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=go(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);ro=a,n.target.dispatchEvent(a),ro=null}else return t=Pi(n),t!==null&&os(t),e.blockedOn=n,!1;t.shift()}return!0}function pu(e,t,n){pr(e)&&n.delete(t)}function Hh(){co=!1,dn!==null&&pr(dn)&&(dn=null),gn!==null&&pr(gn)&&(gn=null),mn!==null&&pr(mn)&&(mn=null),ci.forEach(pu),di.forEach(pu)}function Ya(e,t){e.blockedOn===t&&(e.blockedOn=null,co||(co=!0,se.unstable_scheduleCallback(se.unstable_NormalPriority,Hh)))}function gi(e){function t(i){return Ya(i,e)}if(0<Xi.length){Ya(Xi[0],e);for(var n=1;n<Xi.length;n++){var a=Xi[n];a.blockedOn===e&&(a.blockedOn=null)}}for(dn!==null&&Ya(dn,e),gn!==null&&Ya(gn,e),mn!==null&&Ya(mn,e),ci.forEach(t),di.forEach(t),n=0;n<ln.length;n++)a=ln[n],a.blockedOn===e&&(a.blockedOn=null);for(;0<ln.length&&(n=ln[0],n.blockedOn===null);)Zd(n),n.blockedOn===null&&ln.shift()}var pa=tn.ReactCurrentBatchConfig,Lr=!0;function Xh(e,t,n,a){var i=q,r=pa.transition;pa.transition=null;try{q=1,ss(e,t,n,a)}finally{q=i,pa.transition=r}}function Uh(e,t,n,a){var i=q,r=pa.transition;pa.transition=null;try{q=4,ss(e,t,n,a)}finally{q=i,pa.transition=r}}function ss(e,t,n,a){if(Lr){var i=go(e,t,n,a);if(i===null)kl(e,t,a,Ir,n),fu(e,a);else if(jh(i,e,t,n,a))a.stopPropagation();else if(fu(e,a),t&4&&-1<zh.indexOf(e)){for(;i!==null;){var r=Pi(i);if(r!==null&&Hd(r),r=go(e,t,n,a),r===null&&kl(e,t,a,Ir,n),r===i)break;i=r}i!==null&&a.stopPropagation()}else kl(e,t,a,null,n)}}var Ir=null;function go(e,t,n,a){if(Ir=null,e=is(a),e=Pn(e),e!==null)if(t=_n(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Bd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ir=e,null}function Gd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kh()){case rs:return 1;case $d:return 4;case Rr:case Lh:return 16;case _d:return 536870912;default:return 16}default:return 16}}var un=null,us=null,Sr=null;function Kd(){if(Sr)return Sr;var e,t=us,n=t.length,a,i="value"in un?un.value:un.textContent,r=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(a=1;a<=l&&t[n-a]===i[r-a];a++);return Sr=i.slice(e,1<a?1-a:void 0)}function vr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ui(){return!0}function Su(){return!1}function ce(e){function t(n,a,i,r,l){this._reactName=n,this._targetInst=i,this.type=a,this.nativeEvent=r,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(r):r[s]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Ui:Su,this.isPropagationStopped=Su,this}return gt(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ui)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ui)},persist:function(){},isPersistent:Ui}),t}var Va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cs=ce(Va),wi=gt({},Va,{view:0,detail:0}),Wh=ce(wi),Ml,Dl,Fa,el=gt({},wi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ds,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fa&&(Fa&&e.type==="mousemove"?(Ml=e.screenX-Fa.screenX,Dl=e.screenY-Fa.screenY):Dl=Ml=0,Fa=e),Ml)},movementY:function(e){return"movementY"in e?e.movementY:Dl}}),vu=ce(el),Zh=gt({},el,{dataTransfer:0}),Gh=ce(Zh),Kh=gt({},wi,{relatedTarget:0}),El=ce(Kh),Qh=gt({},Va,{animationName:0,elapsedTime:0,pseudoElement:0}),Jh=ce(Qh),qh=gt({},Va,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),tf=ce(qh),ef=gt({},Va,{data:0}),yu=ce(ef),nf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},af={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=rf[e])?!!t[e]:!1}function ds(){return lf}var of=gt({},wi,{key:function(e){if(e.key){var t=nf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=vr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?af[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ds,charCode:function(e){return e.type==="keypress"?vr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sf=ce(of),uf=gt({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cu=ce(uf),cf=gt({},wi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ds}),df=ce(cf),gf=gt({},Va,{propertyName:0,elapsedTime:0,pseudoElement:0}),mf=ce(gf),hf=gt({},el,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ff=ce(hf),pf=[9,13,27,32],gs=Ge&&"CompositionEvent"in window,Qa=null;Ge&&"documentMode"in document&&(Qa=document.documentMode);var Sf=Ge&&"TextEvent"in window&&!Qa,Qd=Ge&&(!gs||Qa&&8<Qa&&11>=Qa),Au=" ",bu=!1;function Jd(e,t){switch(e){case"keyup":return pf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jn=!1;function vf(e,t){switch(e){case"compositionend":return qd(t);case"keypress":return t.which!==32?null:(bu=!0,Au);case"textInput":return e=t.data,e===Au&&bu?null:e;default:return null}}function yf(e,t){if(Jn)return e==="compositionend"||!gs&&Jd(e,t)?(e=Kd(),Sr=us=un=null,Jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qd&&t.locale!=="ko"?null:t.data;default:return null}}var Cf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Cf[e.type]:t==="textarea"}function tg(e,t,n,a){Od(a),t=Br(t,"onChange"),0<t.length&&(n=new cs("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Ja=null,mi=null;function Af(e){dg(e,0)}function nl(e){var t=ea(e);if(Md(t))return e}function bf(e,t){if(e==="change")return t}var eg=!1;if(Ge){var Nl;if(Ge){var wl="oninput"in document;if(!wl){var Mu=document.createElement("div");Mu.setAttribute("oninput","return;"),wl=typeof Mu.oninput=="function"}Nl=wl}else Nl=!1;eg=Nl&&(!document.documentMode||9<document.documentMode)}function Du(){Ja&&(Ja.detachEvent("onpropertychange",ng),mi=Ja=null)}function ng(e){if(e.propertyName==="value"&&nl(mi)){var t=[];tg(t,mi,e,is(e)),Id(Af,t)}}function xf(e,t,n){e==="focusin"?(Du(),Ja=t,mi=n,Ja.attachEvent("onpropertychange",ng)):e==="focusout"&&Du()}function Mf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return nl(mi)}function Df(e,t){if(e==="click")return nl(t)}function Ef(e,t){if(e==="input"||e==="change")return nl(t)}function Nf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var we=typeof Object.is=="function"?Object.is:Nf;function hi(e,t){if(we(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var i=n[a];if(!Wl.call(t,i)||!we(e[i],t[i]))return!1}return!0}function Eu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nu(e,t){var n=Eu(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Eu(n)}}function ag(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ag(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ig(){for(var e=window,t=Pr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Pr(e.document)}return t}function ms(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function wf(e){var t=ig(),n=e.focusedElem,a=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ag(n.ownerDocument.documentElement,n)){if(a!==null&&ms(n)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,r=Math.min(a.start,i);a=a.end===void 0?r:Math.min(a.end,i),!e.extend&&r>a&&(i=a,a=r,r=i),i=Nu(n,r);var l=Nu(n,a);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),r>a?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Pf=Ge&&"documentMode"in document&&11>=document.documentMode,qn=null,mo=null,qa=null,ho=!1;function wu(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ho||qn==null||qn!==Pr(a)||(a=qn,"selectionStart"in a&&ms(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),qa&&hi(qa,a)||(qa=a,a=Br(mo,"onSelect"),0<a.length&&(t=new cs("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=qn)))}function Wi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ta={animationend:Wi("Animation","AnimationEnd"),animationiteration:Wi("Animation","AnimationIteration"),animationstart:Wi("Animation","AnimationStart"),transitionend:Wi("Transition","TransitionEnd")},Pl={},rg={};Ge&&(rg=document.createElement("div").style,"AnimationEvent"in window||(delete ta.animationend.animation,delete ta.animationiteration.animation,delete ta.animationstart.animation),"TransitionEvent"in window||delete ta.transitionend.transition);function al(e){if(Pl[e])return Pl[e];if(!ta[e])return e;var t=ta[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in rg)return Pl[e]=t[n];return e}var lg=al("animationend"),og=al("animationiteration"),sg=al("animationstart"),ug=al("transitionend"),cg=new Map,Pu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bn(e,t){cg.set(e,t),$n(t,[e])}for(var Vl=0;Vl<Pu.length;Vl++){var Ol=Pu[Vl],Vf=Ol.toLowerCase(),Of=Ol[0].toUpperCase()+Ol.slice(1);bn(Vf,"on"+Of)}bn(lg,"onAnimationEnd");bn(og,"onAnimationIteration");bn(sg,"onAnimationStart");bn("dblclick","onDoubleClick");bn("focusin","onFocus");bn("focusout","onBlur");bn(ug,"onTransitionEnd");Aa("onMouseEnter",["mouseout","mouseover"]);Aa("onMouseLeave",["mouseout","mouseover"]);Aa("onPointerEnter",["pointerout","pointerover"]);Aa("onPointerLeave",["pointerout","pointerover"]);$n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$n("onBeforeInput",["compositionend","keypress","textInput","paste"]);$n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Za="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Za));function Vu(e,t,n){var a=e.type||"unknown-event";e.currentTarget=n,Ph(a,t,void 0,e),e.currentTarget=null}function dg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],i=a.event;a=a.listeners;t:{var r=void 0;if(t)for(var l=a.length-1;0<=l;l--){var s=a[l],o=s.instance,u=s.currentTarget;if(s=s.listener,o!==r&&i.isPropagationStopped())break t;Vu(i,s,u),r=o}else for(l=0;l<a.length;l++){if(s=a[l],o=s.instance,u=s.currentTarget,s=s.listener,o!==r&&i.isPropagationStopped())break t;Vu(i,s,u),r=o}}}if(Or)throw e=so,Or=!1,so=null,e}function it(e,t){var n=t[yo];n===void 0&&(n=t[yo]=new Set);var a=e+"__bubble";n.has(a)||(gg(t,e,2,!1),n.add(a))}function Rl(e,t,n){var a=0;t&&(a|=4),gg(n,e,a,t)}var Zi="_reactListening"+Math.random().toString(36).slice(2);function fi(e){if(!e[Zi]){e[Zi]=!0,yd.forEach(function(n){n!=="selectionchange"&&(Rf.has(n)||Rl(n,!1,e),Rl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Zi]||(t[Zi]=!0,Rl("selectionchange",!1,t))}}function gg(e,t,n,a){switch(Gd(t)){case 1:var i=Xh;break;case 4:i=Uh;break;default:i=ss}n=i.bind(null,t,n,e),i=void 0,!oo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function kl(e,t,n,a,i){var r=a;if(!(t&1)&&!(t&2)&&a!==null)t:for(;;){if(a===null)return;var l=a.tag;if(l===3||l===4){var s=a.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=a.return;l!==null;){var o=l.tag;if((o===3||o===4)&&(o=l.stateNode.containerInfo,o===i||o.nodeType===8&&o.parentNode===i))return;l=l.return}for(;s!==null;){if(l=Pn(s),l===null)return;if(o=l.tag,o===5||o===6){a=r=l;continue t}s=s.parentNode}}a=a.return}Id(function(){var u=r,d=is(n),m=[];t:{var c=cg.get(e);if(c!==void 0){var S=cs,y=e;switch(e){case"keypress":if(vr(n)===0)break t;case"keydown":case"keyup":S=sf;break;case"focusin":y="focus",S=El;break;case"focusout":y="blur",S=El;break;case"beforeblur":case"afterblur":S=El;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=vu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=Gh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=df;break;case lg:case og:case sg:S=Jh;break;case ug:S=mf;break;case"scroll":S=Wh;break;case"wheel":S=ff;break;case"copy":case"cut":case"paste":S=tf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Cu}var v=(t&4)!==0,x=!v&&e==="scroll",g=v?c!==null?c+"Capture":null:c;v=[];for(var h=u,C;h!==null;){C=h;var p=C.stateNode;if(C.tag===5&&p!==null&&(C=p,g!==null&&(p=ui(h,g),p!=null&&v.push(pi(h,p,C)))),x)break;h=h.return}0<v.length&&(c=new S(c,y,null,n,d),m.push({event:c,listeners:v}))}}if(!(t&7)){t:{if(c=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",c&&n!==ro&&(y=n.relatedTarget||n.fromElement)&&(Pn(y)||y[Ke]))break t;if((S||c)&&(c=d.window===d?d:(c=d.ownerDocument)?c.defaultView||c.parentWindow:window,S?(y=n.relatedTarget||n.toElement,S=u,y=y?Pn(y):null,y!==null&&(x=_n(y),y!==x||y.tag!==5&&y.tag!==6)&&(y=null)):(S=null,y=u),S!==y)){if(v=vu,p="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(v=Cu,p="onPointerLeave",g="onPointerEnter",h="pointer"),x=S==null?c:ea(S),C=y==null?c:ea(y),c=new v(p,h+"leave",S,n,d),c.target=x,c.relatedTarget=C,p=null,Pn(d)===u&&(v=new v(g,h+"enter",y,n,d),v.target=C,v.relatedTarget=x,p=v),x=p,S&&y)e:{for(v=S,g=y,h=0,C=v;C;C=Hn(C))h++;for(C=0,p=g;p;p=Hn(p))C++;for(;0<h-C;)v=Hn(v),h--;for(;0<C-h;)g=Hn(g),C--;for(;h--;){if(v===g||g!==null&&v===g.alternate)break e;v=Hn(v),g=Hn(g)}v=null}else v=null;S!==null&&Ou(m,c,S,v,!1),y!==null&&x!==null&&Ou(m,x,y,v,!0)}}t:{if(c=u?ea(u):window,S=c.nodeName&&c.nodeName.toLowerCase(),S==="select"||S==="input"&&c.type==="file")var b=bf;else if(xu(c))if(eg)b=Ef;else{b=Mf;var A=xf}else(S=c.nodeName)&&S.toLowerCase()==="input"&&(c.type==="checkbox"||c.type==="radio")&&(b=Df);if(b&&(b=b(e,u))){tg(m,b,n,d);break t}A&&A(e,c,u),e==="focusout"&&(A=c._wrapperState)&&A.controlled&&c.type==="number"&&to(c,"number",c.value)}switch(A=u?ea(u):window,e){case"focusin":(xu(A)||A.contentEditable==="true")&&(qn=A,mo=u,qa=null);break;case"focusout":qa=mo=qn=null;break;case"mousedown":ho=!0;break;case"contextmenu":case"mouseup":case"dragend":ho=!1,wu(m,n,d);break;case"selectionchange":if(Pf)break;case"keydown":case"keyup":wu(m,n,d)}var N;if(gs)t:{switch(e){case"compositionstart":var E="onCompositionStart";break t;case"compositionend":E="onCompositionEnd";break t;case"compositionupdate":E="onCompositionUpdate";break t}E=void 0}else Jn?Jd(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Qd&&n.locale!=="ko"&&(Jn||E!=="onCompositionStart"?E==="onCompositionEnd"&&Jn&&(N=Kd()):(un=d,us="value"in un?un.value:un.textContent,Jn=!0)),A=Br(u,E),0<A.length&&(E=new yu(E,e,null,n,d),m.push({event:E,listeners:A}),N?E.data=N:(N=qd(n),N!==null&&(E.data=N)))),(N=Sf?vf(e,n):yf(e,n))&&(u=Br(u,"onBeforeInput"),0<u.length&&(d=new yu("onBeforeInput","beforeinput",null,n,d),m.push({event:d,listeners:u}),d.data=N))}dg(m,t)})}function pi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Br(e,t){for(var n=t+"Capture",a=[];e!==null;){var i=e,r=i.stateNode;i.tag===5&&r!==null&&(i=r,r=ui(e,n),r!=null&&a.unshift(pi(e,r,i)),r=ui(e,t),r!=null&&a.push(pi(e,r,i))),e=e.return}return a}function Hn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ou(e,t,n,a,i){for(var r=t._reactName,l=[];n!==null&&n!==a;){var s=n,o=s.alternate,u=s.stateNode;if(o!==null&&o===a)break;s.tag===5&&u!==null&&(s=u,i?(o=ui(n,r),o!=null&&l.unshift(pi(n,o,s))):i||(o=ui(n,r),o!=null&&l.push(pi(n,o,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var kf=/\r\n?/g,Lf=/\u0000|\uFFFD/g;function Ru(e){return(typeof e=="string"?e:""+e).replace(kf,`
`).replace(Lf,"")}function Gi(e,t,n){if(t=Ru(t),Ru(e)!==t&&n)throw Error(O(425))}function Tr(){}var fo=null,po=null;function So(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vo=typeof setTimeout=="function"?setTimeout:void 0,If=typeof clearTimeout=="function"?clearTimeout:void 0,ku=typeof Promise=="function"?Promise:void 0,Bf=typeof queueMicrotask=="function"?queueMicrotask:typeof ku<"u"?function(e){return ku.resolve(null).then(e).catch(Tf)}:vo;function Tf(e){setTimeout(function(){throw e})}function Ll(e,t){var n=t,a=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(a===0){e.removeChild(i),gi(t);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=i}while(n);gi(t)}function hn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Lu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Oa=Math.random().toString(36).slice(2),Le="__reactFiber$"+Oa,Si="__reactProps$"+Oa,Ke="__reactContainer$"+Oa,yo="__reactEvents$"+Oa,Yf="__reactListeners$"+Oa,Ff="__reactHandles$"+Oa;function Pn(e){var t=e[Le];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ke]||n[Le]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Lu(e);e!==null;){if(n=e[Le])return n;e=Lu(e)}return t}e=n,n=e.parentNode}return null}function Pi(e){return e=e[Le]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ea(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(O(33))}function il(e){return e[Si]||null}var Co=[],na=-1;function xn(e){return{current:e}}function lt(e){0>na||(e.current=Co[na],Co[na]=null,na--)}function et(e,t){na++,Co[na]=e.current,e.current=t}var An={},Ft=xn(An),Kt=xn(!1),Ln=An;function ba(e,t){var n=e.type.contextTypes;if(!n)return An;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var i={},r;for(r in n)i[r]=t[r];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Qt(e){return e=e.childContextTypes,e!=null}function Yr(){lt(Kt),lt(Ft)}function Iu(e,t,n){if(Ft.current!==An)throw Error(O(168));et(Ft,t),et(Kt,n)}function mg(e,t,n){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return n;a=a.getChildContext();for(var i in a)if(!(i in t))throw Error(O(108,bh(e)||"Unknown",i));return gt({},n,a)}function Fr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||An,Ln=Ft.current,et(Ft,e),et(Kt,Kt.current),!0}function Bu(e,t,n){var a=e.stateNode;if(!a)throw Error(O(169));n?(e=mg(e,t,Ln),a.__reactInternalMemoizedMergedChildContext=e,lt(Kt),lt(Ft),et(Ft,e)):lt(Kt),et(Kt,n)}var ze=null,rl=!1,Il=!1;function hg(e){ze===null?ze=[e]:ze.push(e)}function $f(e){rl=!0,hg(e)}function Mn(){if(!Il&&ze!==null){Il=!0;var e=0,t=q;try{var n=ze;for(q=1;e<n.length;e++){var a=n[e];do a=a(!0);while(a!==null)}ze=null,rl=!1}catch(i){throw ze!==null&&(ze=ze.slice(e+1)),Fd(rs,Mn),i}finally{q=t,Il=!1}}return null}var aa=[],ia=0,$r=null,_r=0,ge=[],me=0,In=null,He=1,Xe="";function Nn(e,t){aa[ia++]=_r,aa[ia++]=$r,$r=e,_r=t}function fg(e,t,n){ge[me++]=He,ge[me++]=Xe,ge[me++]=In,In=e;var a=He;e=Xe;var i=32-Ee(a)-1;a&=~(1<<i),n+=1;var r=32-Ee(t)+i;if(30<r){var l=i-i%5;r=(a&(1<<l)-1).toString(32),a>>=l,i-=l,He=1<<32-Ee(t)+i|n<<i|a,Xe=r+e}else He=1<<r|n<<i|a,Xe=e}function hs(e){e.return!==null&&(Nn(e,1),fg(e,1,0))}function fs(e){for(;e===$r;)$r=aa[--ia],aa[ia]=null,_r=aa[--ia],aa[ia]=null;for(;e===In;)In=ge[--me],ge[me]=null,Xe=ge[--me],ge[me]=null,He=ge[--me],ge[me]=null}var le=null,re=null,st=!1,Me=null;function pg(e,t){var n=he(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Tu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,le=e,re=hn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,le=e,re=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=In!==null?{id:He,overflow:Xe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=he(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,le=e,re=null,!0):!1;default:return!1}}function Ao(e){return(e.mode&1)!==0&&(e.flags&128)===0}function bo(e){if(st){var t=re;if(t){var n=t;if(!Tu(e,t)){if(Ao(e))throw Error(O(418));t=hn(n.nextSibling);var a=le;t&&Tu(e,t)?pg(a,n):(e.flags=e.flags&-4097|2,st=!1,le=e)}}else{if(Ao(e))throw Error(O(418));e.flags=e.flags&-4097|2,st=!1,le=e}}}function Yu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;le=e}function Ki(e){if(e!==le)return!1;if(!st)return Yu(e),st=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!So(e.type,e.memoizedProps)),t&&(t=re)){if(Ao(e))throw Sg(),Error(O(418));for(;t;)pg(e,t),t=hn(t.nextSibling)}if(Yu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(O(317));t:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){re=hn(e.nextSibling);break t}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}re=null}}else re=le?hn(e.stateNode.nextSibling):null;return!0}function Sg(){for(var e=re;e;)e=hn(e.nextSibling)}function xa(){re=le=null,st=!1}function ps(e){Me===null?Me=[e]:Me.push(e)}var _f=tn.ReactCurrentBatchConfig;function $a(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(O(309));var a=n.stateNode}if(!a)throw Error(O(147,e));var i=a,r=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===r?t.ref:(t=function(l){var s=i.refs;l===null?delete s[r]:s[r]=l},t._stringRef=r,t)}if(typeof e!="string")throw Error(O(284));if(!n._owner)throw Error(O(290,e))}return e}function Qi(e,t){throw e=Object.prototype.toString.call(t),Error(O(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Fu(e){var t=e._init;return t(e._payload)}function vg(e){function t(g,h){if(e){var C=g.deletions;C===null?(g.deletions=[h],g.flags|=16):C.push(h)}}function n(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function a(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function i(g,h){return g=vn(g,h),g.index=0,g.sibling=null,g}function r(g,h,C){return g.index=C,e?(C=g.alternate,C!==null?(C=C.index,C<h?(g.flags|=2,h):C):(g.flags|=2,h)):(g.flags|=1048576,h)}function l(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,h,C,p){return h===null||h.tag!==6?(h=zl(C,g.mode,p),h.return=g,h):(h=i(h,C),h.return=g,h)}function o(g,h,C,p){var b=C.type;return b===Qn?d(g,h,C.props.children,p,C.key):h!==null&&(h.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===an&&Fu(b)===h.type)?(p=i(h,C.props),p.ref=$a(g,h,C),p.return=g,p):(p=Dr(C.type,C.key,C.props,null,g.mode,p),p.ref=$a(g,h,C),p.return=g,p)}function u(g,h,C,p){return h===null||h.tag!==4||h.stateNode.containerInfo!==C.containerInfo||h.stateNode.implementation!==C.implementation?(h=jl(C,g.mode,p),h.return=g,h):(h=i(h,C.children||[]),h.return=g,h)}function d(g,h,C,p,b){return h===null||h.tag!==7?(h=kn(C,g.mode,p,b),h.return=g,h):(h=i(h,C),h.return=g,h)}function m(g,h,C){if(typeof h=="string"&&h!==""||typeof h=="number")return h=zl(""+h,g.mode,C),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case $i:return C=Dr(h.type,h.key,h.props,null,g.mode,C),C.ref=$a(g,null,h),C.return=g,C;case Kn:return h=jl(h,g.mode,C),h.return=g,h;case an:var p=h._init;return m(g,p(h._payload),C)}if(Ua(h)||Ia(h))return h=kn(h,g.mode,C,null),h.return=g,h;Qi(g,h)}return null}function c(g,h,C,p){var b=h!==null?h.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return b!==null?null:s(g,h,""+C,p);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case $i:return C.key===b?o(g,h,C,p):null;case Kn:return C.key===b?u(g,h,C,p):null;case an:return b=C._init,c(g,h,b(C._payload),p)}if(Ua(C)||Ia(C))return b!==null?null:d(g,h,C,p,null);Qi(g,C)}return null}function S(g,h,C,p,b){if(typeof p=="string"&&p!==""||typeof p=="number")return g=g.get(C)||null,s(h,g,""+p,b);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case $i:return g=g.get(p.key===null?C:p.key)||null,o(h,g,p,b);case Kn:return g=g.get(p.key===null?C:p.key)||null,u(h,g,p,b);case an:var A=p._init;return S(g,h,C,A(p._payload),b)}if(Ua(p)||Ia(p))return g=g.get(C)||null,d(h,g,p,b,null);Qi(h,p)}return null}function y(g,h,C,p){for(var b=null,A=null,N=h,E=h=0,B=null;N!==null&&E<C.length;E++){N.index>E?(B=N,N=null):B=N.sibling;var R=c(g,N,C[E],p);if(R===null){N===null&&(N=B);break}e&&N&&R.alternate===null&&t(g,N),h=r(R,h,E),A===null?b=R:A.sibling=R,A=R,N=B}if(E===C.length)return n(g,N),st&&Nn(g,E),b;if(N===null){for(;E<C.length;E++)N=m(g,C[E],p),N!==null&&(h=r(N,h,E),A===null?b=N:A.sibling=N,A=N);return st&&Nn(g,E),b}for(N=a(g,N);E<C.length;E++)B=S(N,g,E,C[E],p),B!==null&&(e&&B.alternate!==null&&N.delete(B.key===null?E:B.key),h=r(B,h,E),A===null?b=B:A.sibling=B,A=B);return e&&N.forEach(function($){return t(g,$)}),st&&Nn(g,E),b}function v(g,h,C,p){var b=Ia(C);if(typeof b!="function")throw Error(O(150));if(C=b.call(C),C==null)throw Error(O(151));for(var A=b=null,N=h,E=h=0,B=null,R=C.next();N!==null&&!R.done;E++,R=C.next()){N.index>E?(B=N,N=null):B=N.sibling;var $=c(g,N,R.value,p);if($===null){N===null&&(N=B);break}e&&N&&$.alternate===null&&t(g,N),h=r($,h,E),A===null?b=$:A.sibling=$,A=$,N=B}if(R.done)return n(g,N),st&&Nn(g,E),b;if(N===null){for(;!R.done;E++,R=C.next())R=m(g,R.value,p),R!==null&&(h=r(R,h,E),A===null?b=R:A.sibling=R,A=R);return st&&Nn(g,E),b}for(N=a(g,N);!R.done;E++,R=C.next())R=S(N,g,E,R.value,p),R!==null&&(e&&R.alternate!==null&&N.delete(R.key===null?E:R.key),h=r(R,h,E),A===null?b=R:A.sibling=R,A=R);return e&&N.forEach(function(nt){return t(g,nt)}),st&&Nn(g,E),b}function x(g,h,C,p){if(typeof C=="object"&&C!==null&&C.type===Qn&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case $i:t:{for(var b=C.key,A=h;A!==null;){if(A.key===b){if(b=C.type,b===Qn){if(A.tag===7){n(g,A.sibling),h=i(A,C.props.children),h.return=g,g=h;break t}}else if(A.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===an&&Fu(b)===A.type){n(g,A.sibling),h=i(A,C.props),h.ref=$a(g,A,C),h.return=g,g=h;break t}n(g,A);break}else t(g,A);A=A.sibling}C.type===Qn?(h=kn(C.props.children,g.mode,p,C.key),h.return=g,g=h):(p=Dr(C.type,C.key,C.props,null,g.mode,p),p.ref=$a(g,h,C),p.return=g,g=p)}return l(g);case Kn:t:{for(A=C.key;h!==null;){if(h.key===A)if(h.tag===4&&h.stateNode.containerInfo===C.containerInfo&&h.stateNode.implementation===C.implementation){n(g,h.sibling),h=i(h,C.children||[]),h.return=g,g=h;break t}else{n(g,h);break}else t(g,h);h=h.sibling}h=jl(C,g.mode,p),h.return=g,g=h}return l(g);case an:return A=C._init,x(g,h,A(C._payload),p)}if(Ua(C))return y(g,h,C,p);if(Ia(C))return v(g,h,C,p);Qi(g,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,h!==null&&h.tag===6?(n(g,h.sibling),h=i(h,C),h.return=g,g=h):(n(g,h),h=zl(C,g.mode,p),h.return=g,g=h),l(g)):n(g,h)}return x}var Ma=vg(!0),yg=vg(!1),zr=xn(null),jr=null,ra=null,Ss=null;function vs(){Ss=ra=jr=null}function ys(e){var t=zr.current;lt(zr),e._currentValue=t}function xo(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Sa(e,t){jr=e,Ss=ra=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Gt=!0),e.firstContext=null)}function pe(e){var t=e._currentValue;if(Ss!==e)if(e={context:e,memoizedValue:t,next:null},ra===null){if(jr===null)throw Error(O(308));ra=e,jr.dependencies={lanes:0,firstContext:e}}else ra=ra.next=e;return t}var Vn=null;function Cs(e){Vn===null?Vn=[e]:Vn.push(e)}function Cg(e,t,n,a){var i=t.interleaved;return i===null?(n.next=n,Cs(t)):(n.next=i.next,i.next=n),t.interleaved=n,Qe(e,a)}function Qe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var rn=!1;function As(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ag(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ue(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function fn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,K&2){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,Qe(e,n)}return i=a.interleaved,i===null?(t.next=t,Cs(a)):(t.next=i.next,i.next=t),a.interleaved=t,Qe(e,n)}function yr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,ls(e,n)}}function $u(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var i=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};r===null?i=r=l:r=r.next=l,n=n.next}while(n!==null);r===null?i=r=t:r=r.next=t}else i=r=t;n={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:a.shared,effects:a.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Hr(e,t,n,a){var i=e.updateQueue;rn=!1;var r=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var o=s,u=o.next;o.next=null,l===null?r=u:l.next=u,l=o;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==l&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=o))}if(r!==null){var m=i.baseState;l=0,d=u=o=null,s=r;do{var c=s.lane,S=s.eventTime;if((a&c)===c){d!==null&&(d=d.next={eventTime:S,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});t:{var y=e,v=s;switch(c=t,S=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){m=y.call(S,m,c);break t}m=y;break t;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,c=typeof y=="function"?y.call(S,m,c):y,c==null)break t;m=gt({},m,c);break t;case 2:rn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,c=i.effects,c===null?i.effects=[s]:c.push(s))}else S={eventTime:S,lane:c,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=S,o=m):d=d.next=S,l|=c;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;c=s,s=c.next,c.next=null,i.lastBaseUpdate=c,i.shared.pending=null}}while(!0);if(d===null&&(o=m),i.baseState=o,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else r===null&&(i.shared.lanes=0);Tn|=l,e.lanes=l,e.memoizedState=m}}function _u(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],i=a.callback;if(i!==null){if(a.callback=null,a=n,typeof i!="function")throw Error(O(191,i));i.call(a)}}}var Vi={},Be=xn(Vi),vi=xn(Vi),yi=xn(Vi);function On(e){if(e===Vi)throw Error(O(174));return e}function bs(e,t){switch(et(yi,t),et(vi,e),et(Be,Vi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:no(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=no(t,e)}lt(Be),et(Be,t)}function Da(){lt(Be),lt(vi),lt(yi)}function bg(e){On(yi.current);var t=On(Be.current),n=no(t,e.type);t!==n&&(et(vi,e),et(Be,n))}function xs(e){vi.current===e&&(lt(Be),lt(vi))}var ut=xn(0);function Xr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Bl=[];function Ms(){for(var e=0;e<Bl.length;e++)Bl[e]._workInProgressVersionPrimary=null;Bl.length=0}var Cr=tn.ReactCurrentDispatcher,Tl=tn.ReactCurrentBatchConfig,Bn=0,dt=null,At=null,Dt=null,Ur=!1,ti=!1,Ci=0,zf=0;function Rt(){throw Error(O(321))}function Ds(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!we(e[n],t[n]))return!1;return!0}function Es(e,t,n,a,i,r){if(Bn=r,dt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Cr.current=e===null||e.memoizedState===null?Uf:Wf,e=n(a,i),ti){r=0;do{if(ti=!1,Ci=0,25<=r)throw Error(O(301));r+=1,Dt=At=null,t.updateQueue=null,Cr.current=Zf,e=n(a,i)}while(ti)}if(Cr.current=Wr,t=At!==null&&At.next!==null,Bn=0,Dt=At=dt=null,Ur=!1,t)throw Error(O(300));return e}function Ns(){var e=Ci!==0;return Ci=0,e}function Re(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?dt.memoizedState=Dt=e:Dt=Dt.next=e,Dt}function Se(){if(At===null){var e=dt.alternate;e=e!==null?e.memoizedState:null}else e=At.next;var t=Dt===null?dt.memoizedState:Dt.next;if(t!==null)Dt=t,At=e;else{if(e===null)throw Error(O(310));At=e,e={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Dt===null?dt.memoizedState=Dt=e:Dt=Dt.next=e}return Dt}function Ai(e,t){return typeof t=="function"?t(e):t}function Yl(e){var t=Se(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var a=At,i=a.baseQueue,r=n.pending;if(r!==null){if(i!==null){var l=i.next;i.next=r.next,r.next=l}a.baseQueue=i=r,n.pending=null}if(i!==null){r=i.next,a=a.baseState;var s=l=null,o=null,u=r;do{var d=u.lane;if((Bn&d)===d)o!==null&&(o=o.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),a=u.hasEagerState?u.eagerState:e(a,u.action);else{var m={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};o===null?(s=o=m,l=a):o=o.next=m,dt.lanes|=d,Tn|=d}u=u.next}while(u!==null&&u!==r);o===null?l=a:o.next=s,we(a,t.memoizedState)||(Gt=!0),t.memoizedState=a,t.baseState=l,t.baseQueue=o,n.lastRenderedState=a}if(e=n.interleaved,e!==null){i=e;do r=i.lane,dt.lanes|=r,Tn|=r,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Fl(e){var t=Se(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var a=n.dispatch,i=n.pending,r=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do r=e(r,l.action),l=l.next;while(l!==i);we(r,t.memoizedState)||(Gt=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,a]}function xg(){}function Mg(e,t){var n=dt,a=Se(),i=t(),r=!we(a.memoizedState,i);if(r&&(a.memoizedState=i,Gt=!0),a=a.queue,ws(Ng.bind(null,n,a,e),[e]),a.getSnapshot!==t||r||Dt!==null&&Dt.memoizedState.tag&1){if(n.flags|=2048,bi(9,Eg.bind(null,n,a,i,t),void 0,null),Et===null)throw Error(O(349));Bn&30||Dg(n,t,i)}return i}function Dg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=dt.updateQueue,t===null?(t={lastEffect:null,stores:null},dt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Eg(e,t,n,a){t.value=n,t.getSnapshot=a,wg(t)&&Pg(e)}function Ng(e,t,n){return n(function(){wg(t)&&Pg(e)})}function wg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!we(e,n)}catch{return!0}}function Pg(e){var t=Qe(e,1);t!==null&&Ne(t,e,1,-1)}function zu(e){var t=Re();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ai,lastRenderedState:e},t.queue=e,e=e.dispatch=Xf.bind(null,dt,e),[t.memoizedState,e]}function bi(e,t,n,a){return e={tag:e,create:t,destroy:n,deps:a,next:null},t=dt.updateQueue,t===null?(t={lastEffect:null,stores:null},dt.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e)),e}function Vg(){return Se().memoizedState}function Ar(e,t,n,a){var i=Re();dt.flags|=e,i.memoizedState=bi(1|t,n,void 0,a===void 0?null:a)}function ll(e,t,n,a){var i=Se();a=a===void 0?null:a;var r=void 0;if(At!==null){var l=At.memoizedState;if(r=l.destroy,a!==null&&Ds(a,l.deps)){i.memoizedState=bi(t,n,r,a);return}}dt.flags|=e,i.memoizedState=bi(1|t,n,r,a)}function ju(e,t){return Ar(8390656,8,e,t)}function ws(e,t){return ll(2048,8,e,t)}function Og(e,t){return ll(4,2,e,t)}function Rg(e,t){return ll(4,4,e,t)}function kg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Lg(e,t,n){return n=n!=null?n.concat([e]):null,ll(4,4,kg.bind(null,t,e),n)}function Ps(){}function Ig(e,t){var n=Se();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&Ds(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Bg(e,t){var n=Se();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&Ds(t,a[1])?a[0]:(e=e(),n.memoizedState=[e,t],e)}function Tg(e,t,n){return Bn&21?(we(n,t)||(n=zd(),dt.lanes|=n,Tn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Gt=!0),e.memoizedState=n)}function jf(e,t){var n=q;q=n!==0&&4>n?n:4,e(!0);var a=Tl.transition;Tl.transition={};try{e(!1),t()}finally{q=n,Tl.transition=a}}function Yg(){return Se().memoizedState}function Hf(e,t,n){var a=Sn(e);if(n={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null},Fg(e))$g(t,n);else if(n=Cg(e,t,n,a),n!==null){var i=Ht();Ne(n,e,a,i),_g(n,t,a)}}function Xf(e,t,n){var a=Sn(e),i={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fg(e))$g(t,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var l=t.lastRenderedState,s=r(l,n);if(i.hasEagerState=!0,i.eagerState=s,we(s,l)){var o=t.interleaved;o===null?(i.next=i,Cs(t)):(i.next=o.next,o.next=i),t.interleaved=i;return}}catch{}finally{}n=Cg(e,t,i,a),n!==null&&(i=Ht(),Ne(n,e,a,i),_g(n,t,a))}}function Fg(e){var t=e.alternate;return e===dt||t!==null&&t===dt}function $g(e,t){ti=Ur=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function _g(e,t,n){if(n&4194240){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,ls(e,n)}}var Wr={readContext:pe,useCallback:Rt,useContext:Rt,useEffect:Rt,useImperativeHandle:Rt,useInsertionEffect:Rt,useLayoutEffect:Rt,useMemo:Rt,useReducer:Rt,useRef:Rt,useState:Rt,useDebugValue:Rt,useDeferredValue:Rt,useTransition:Rt,useMutableSource:Rt,useSyncExternalStore:Rt,useId:Rt,unstable_isNewReconciler:!1},Uf={readContext:pe,useCallback:function(e,t){return Re().memoizedState=[e,t===void 0?null:t],e},useContext:pe,useEffect:ju,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ar(4194308,4,kg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ar(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ar(4,2,e,t)},useMemo:function(e,t){var n=Re();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var a=Re();return t=n!==void 0?n(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=Hf.bind(null,dt,e),[a.memoizedState,e]},useRef:function(e){var t=Re();return e={current:e},t.memoizedState=e},useState:zu,useDebugValue:Ps,useDeferredValue:function(e){return Re().memoizedState=e},useTransition:function(){var e=zu(!1),t=e[0];return e=jf.bind(null,e[1]),Re().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var a=dt,i=Re();if(st){if(n===void 0)throw Error(O(407));n=n()}else{if(n=t(),Et===null)throw Error(O(349));Bn&30||Dg(a,t,n)}i.memoizedState=n;var r={value:n,getSnapshot:t};return i.queue=r,ju(Ng.bind(null,a,r,e),[e]),a.flags|=2048,bi(9,Eg.bind(null,a,r,n,t),void 0,null),n},useId:function(){var e=Re(),t=Et.identifierPrefix;if(st){var n=Xe,a=He;n=(a&~(1<<32-Ee(a)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ci++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=zf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Wf={readContext:pe,useCallback:Ig,useContext:pe,useEffect:ws,useImperativeHandle:Lg,useInsertionEffect:Og,useLayoutEffect:Rg,useMemo:Bg,useReducer:Yl,useRef:Vg,useState:function(){return Yl(Ai)},useDebugValue:Ps,useDeferredValue:function(e){var t=Se();return Tg(t,At.memoizedState,e)},useTransition:function(){var e=Yl(Ai)[0],t=Se().memoizedState;return[e,t]},useMutableSource:xg,useSyncExternalStore:Mg,useId:Yg,unstable_isNewReconciler:!1},Zf={readContext:pe,useCallback:Ig,useContext:pe,useEffect:ws,useImperativeHandle:Lg,useInsertionEffect:Og,useLayoutEffect:Rg,useMemo:Bg,useReducer:Fl,useRef:Vg,useState:function(){return Fl(Ai)},useDebugValue:Ps,useDeferredValue:function(e){var t=Se();return At===null?t.memoizedState=e:Tg(t,At.memoizedState,e)},useTransition:function(){var e=Fl(Ai)[0],t=Se().memoizedState;return[e,t]},useMutableSource:xg,useSyncExternalStore:Mg,useId:Yg,unstable_isNewReconciler:!1};function ye(e,t){if(e&&e.defaultProps){t=gt({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Mo(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:gt({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ol={isMounted:function(e){return(e=e._reactInternals)?_n(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Ht(),i=Sn(e),r=Ue(a,i);r.payload=t,n!=null&&(r.callback=n),t=fn(e,r,i),t!==null&&(Ne(t,e,i,a),yr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Ht(),i=Sn(e),r=Ue(a,i);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=fn(e,r,i),t!==null&&(Ne(t,e,i,a),yr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ht(),a=Sn(e),i=Ue(n,a);i.tag=2,t!=null&&(i.callback=t),t=fn(e,i,a),t!==null&&(Ne(t,e,a,n),yr(t,e,a))}};function Hu(e,t,n,a,i,r,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,r,l):t.prototype&&t.prototype.isPureReactComponent?!hi(n,a)||!hi(i,r):!0}function zg(e,t,n){var a=!1,i=An,r=t.contextType;return typeof r=="object"&&r!==null?r=pe(r):(i=Qt(t)?Ln:Ft.current,a=t.contextTypes,r=(a=a!=null)?ba(e,i):An),t=new t(n,r),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ol,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=r),t}function Xu(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&ol.enqueueReplaceState(t,t.state,null)}function Do(e,t,n,a){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},As(e);var r=t.contextType;typeof r=="object"&&r!==null?i.context=pe(r):(r=Qt(t)?Ln:Ft.current,i.context=ba(e,r)),i.state=e.memoizedState,r=t.getDerivedStateFromProps,typeof r=="function"&&(Mo(e,t,r,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ol.enqueueReplaceState(i,i.state,null),Hr(e,n,i,a),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ea(e,t){try{var n="",a=t;do n+=Ah(a),a=a.return;while(a);var i=n}catch(r){i=`
Error generating stack: `+r.message+`
`+r.stack}return{value:e,source:t,stack:i,digest:null}}function $l(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Eo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Gf=typeof WeakMap=="function"?WeakMap:Map;function jg(e,t,n){n=Ue(-1,n),n.tag=3,n.payload={element:null};var a=t.value;return n.callback=function(){Gr||(Gr=!0,Bo=a),Eo(e,t)},n}function Hg(e,t,n){n=Ue(-1,n),n.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var i=t.value;n.payload=function(){return a(i)},n.callback=function(){Eo(e,t)}}var r=e.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(n.callback=function(){Eo(e,t),typeof a!="function"&&(pn===null?pn=new Set([this]):pn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Uu(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Gf;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(n)||(i.add(n),e=up.bind(null,e,t,n),t.then(e,e))}function Wu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Zu(e,t,n,a,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ue(-1,1),t.tag=2,fn(n,t,1))),n.lanes|=1),e)}var Kf=tn.ReactCurrentOwner,Gt=!1;function zt(e,t,n,a){t.child=e===null?yg(t,null,n,a):Ma(t,e.child,n,a)}function Gu(e,t,n,a,i){n=n.render;var r=t.ref;return Sa(t,i),a=Es(e,t,n,a,r,i),n=Ns(),e!==null&&!Gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Je(e,t,i)):(st&&n&&hs(t),t.flags|=1,zt(e,t,a,i),t.child)}function Ku(e,t,n,a,i){if(e===null){var r=n.type;return typeof r=="function"&&!Ts(r)&&r.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=r,Xg(e,t,r,a,i)):(e=Dr(n.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!(e.lanes&i)){var l=r.memoizedProps;if(n=n.compare,n=n!==null?n:hi,n(l,a)&&e.ref===t.ref)return Je(e,t,i)}return t.flags|=1,e=vn(r,a),e.ref=t.ref,e.return=t,t.child=e}function Xg(e,t,n,a,i){if(e!==null){var r=e.memoizedProps;if(hi(r,a)&&e.ref===t.ref)if(Gt=!1,t.pendingProps=a=r,(e.lanes&i)!==0)e.flags&131072&&(Gt=!0);else return t.lanes=e.lanes,Je(e,t,i)}return No(e,t,n,a,i)}function Ug(e,t,n){var a=t.pendingProps,i=a.children,r=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},et(oa,ae),ae|=n;else{if(!(n&1073741824))return e=r!==null?r.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,et(oa,ae),ae|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=r!==null?r.baseLanes:n,et(oa,ae),ae|=a}else r!==null?(a=r.baseLanes|n,t.memoizedState=null):a=n,et(oa,ae),ae|=a;return zt(e,t,i,n),t.child}function Wg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function No(e,t,n,a,i){var r=Qt(n)?Ln:Ft.current;return r=ba(t,r),Sa(t,i),n=Es(e,t,n,a,r,i),a=Ns(),e!==null&&!Gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Je(e,t,i)):(st&&a&&hs(t),t.flags|=1,zt(e,t,n,i),t.child)}function Qu(e,t,n,a,i){if(Qt(n)){var r=!0;Fr(t)}else r=!1;if(Sa(t,i),t.stateNode===null)br(e,t),zg(t,n,a),Do(t,n,a,i),a=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var o=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=pe(u):(u=Qt(n)?Ln:Ft.current,u=ba(t,u));var d=n.getDerivedStateFromProps,m=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==a||o!==u)&&Xu(t,l,a,u),rn=!1;var c=t.memoizedState;l.state=c,Hr(t,a,l,i),o=t.memoizedState,s!==a||c!==o||Kt.current||rn?(typeof d=="function"&&(Mo(t,n,d,a),o=t.memoizedState),(s=rn||Hu(t,n,s,a,c,o,u))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=o),l.props=a,l.state=o,l.context=u,a=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{l=t.stateNode,Ag(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:ye(t.type,s),l.props=u,m=t.pendingProps,c=l.context,o=n.contextType,typeof o=="object"&&o!==null?o=pe(o):(o=Qt(n)?Ln:Ft.current,o=ba(t,o));var S=n.getDerivedStateFromProps;(d=typeof S=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==m||c!==o)&&Xu(t,l,a,o),rn=!1,c=t.memoizedState,l.state=c,Hr(t,a,l,i);var y=t.memoizedState;s!==m||c!==y||Kt.current||rn?(typeof S=="function"&&(Mo(t,n,S,a),y=t.memoizedState),(u=rn||Hu(t,n,u,a,c,y,o)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(a,y,o),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(a,y,o)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=y),l.props=a,l.state=y,l.context=o,a=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),a=!1)}return wo(e,t,n,a,r,i)}function wo(e,t,n,a,i,r){Wg(e,t);var l=(t.flags&128)!==0;if(!a&&!l)return i&&Bu(t,n,!1),Je(e,t,r);a=t.stateNode,Kf.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&l?(t.child=Ma(t,e.child,null,r),t.child=Ma(t,null,s,r)):zt(e,t,s,r),t.memoizedState=a.state,i&&Bu(t,n,!0),t.child}function Zg(e){var t=e.stateNode;t.pendingContext?Iu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Iu(e,t.context,!1),bs(e,t.containerInfo)}function Ju(e,t,n,a,i){return xa(),ps(i),t.flags|=256,zt(e,t,n,a),t.child}var Po={dehydrated:null,treeContext:null,retryLane:0};function Vo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gg(e,t,n){var a=t.pendingProps,i=ut.current,r=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(r=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),et(ut,i&1),e===null)return bo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=a.children,e=a.fallback,r?(a=t.mode,r=t.child,l={mode:"hidden",children:l},!(a&1)&&r!==null?(r.childLanes=0,r.pendingProps=l):r=cl(l,a,0,null),e=kn(e,a,n,null),r.return=t,e.return=t,r.sibling=e,t.child=r,t.child.memoizedState=Vo(n),t.memoizedState=Po,e):Vs(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Qf(e,t,l,a,s,i,n);if(r){r=a.fallback,l=t.mode,i=e.child,s=i.sibling;var o={mode:"hidden",children:a.children};return!(l&1)&&t.child!==i?(a=t.child,a.childLanes=0,a.pendingProps=o,t.deletions=null):(a=vn(i,o),a.subtreeFlags=i.subtreeFlags&14680064),s!==null?r=vn(s,r):(r=kn(r,l,n,null),r.flags|=2),r.return=t,a.return=t,a.sibling=r,t.child=a,a=r,r=t.child,l=e.child.memoizedState,l=l===null?Vo(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},r.memoizedState=l,r.childLanes=e.childLanes&~n,t.memoizedState=Po,a}return r=e.child,e=r.sibling,a=vn(r,{mode:"visible",children:a.children}),!(t.mode&1)&&(a.lanes=n),a.return=t,a.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function Vs(e,t){return t=cl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ji(e,t,n,a){return a!==null&&ps(a),Ma(t,e.child,null,n),e=Vs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qf(e,t,n,a,i,r,l){if(n)return t.flags&256?(t.flags&=-257,a=$l(Error(O(422))),Ji(e,t,l,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(r=a.fallback,i=t.mode,a=cl({mode:"visible",children:a.children},i,0,null),r=kn(r,i,l,null),r.flags|=2,a.return=t,r.return=t,a.sibling=r,t.child=a,t.mode&1&&Ma(t,e.child,null,l),t.child.memoizedState=Vo(l),t.memoizedState=Po,r);if(!(t.mode&1))return Ji(e,t,l,null);if(i.data==="$!"){if(a=i.nextSibling&&i.nextSibling.dataset,a)var s=a.dgst;return a=s,r=Error(O(419)),a=$l(r,a,void 0),Ji(e,t,l,a)}if(s=(l&e.childLanes)!==0,Gt||s){if(a=Et,a!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(a.suspendedLanes|l)?0:i,i!==0&&i!==r.retryLane&&(r.retryLane=i,Qe(e,i),Ne(a,e,i,-1))}return Bs(),a=$l(Error(O(421))),Ji(e,t,l,a)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=cp.bind(null,e),i._reactRetry=t,null):(e=r.treeContext,re=hn(i.nextSibling),le=t,st=!0,Me=null,e!==null&&(ge[me++]=He,ge[me++]=Xe,ge[me++]=In,He=e.id,Xe=e.overflow,In=t),t=Vs(t,a.children),t.flags|=4096,t)}function qu(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),xo(e.return,t,n)}function _l(e,t,n,a,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=n,r.tailMode=i)}function Kg(e,t,n){var a=t.pendingProps,i=a.revealOrder,r=a.tail;if(zt(e,t,a.children,n),a=ut.current,a&2)a=a&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qu(e,n,t);else if(e.tag===19)qu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(et(ut,a),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Xr(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),_l(t,!1,i,n,r);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Xr(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}_l(t,!0,n,null,r);break;case"together":_l(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function br(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Je(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Tn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(O(153));if(t.child!==null){for(e=t.child,n=vn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Jf(e,t,n){switch(t.tag){case 3:Zg(t),xa();break;case 5:bg(t);break;case 1:Qt(t.type)&&Fr(t);break;case 4:bs(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,i=t.memoizedProps.value;et(zr,a._currentValue),a._currentValue=i;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(et(ut,ut.current&1),t.flags|=128,null):n&t.child.childLanes?Gg(e,t,n):(et(ut,ut.current&1),e=Je(e,t,n),e!==null?e.sibling:null);et(ut,ut.current&1);break;case 19:if(a=(n&t.childLanes)!==0,e.flags&128){if(a)return Kg(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),et(ut,ut.current),a)break;return null;case 22:case 23:return t.lanes=0,Ug(e,t,n)}return Je(e,t,n)}var Qg,Oo,Jg,qg;Qg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Oo=function(){};Jg=function(e,t,n,a){var i=e.memoizedProps;if(i!==a){e=t.stateNode,On(Be.current);var r=null;switch(n){case"input":i=Jl(e,i),a=Jl(e,a),r=[];break;case"select":i=gt({},i,{value:void 0}),a=gt({},a,{value:void 0}),r=[];break;case"textarea":i=eo(e,i),a=eo(e,a),r=[];break;default:typeof i.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Tr)}ao(n,a);var l;n=null;for(u in i)if(!a.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(oi.hasOwnProperty(u)?r||(r=[]):(r=r||[]).push(u,null));for(u in a){var o=a[u];if(s=i?.[u],a.hasOwnProperty(u)&&o!==s&&(o!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||o&&o.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in o)o.hasOwnProperty(l)&&s[l]!==o[l]&&(n||(n={}),n[l]=o[l])}else n||(r||(r=[]),r.push(u,n)),n=o;else u==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,s=s?s.__html:void 0,o!=null&&s!==o&&(r=r||[]).push(u,o)):u==="children"?typeof o!="string"&&typeof o!="number"||(r=r||[]).push(u,""+o):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(oi.hasOwnProperty(u)?(o!=null&&u==="onScroll"&&it("scroll",e),r||s===o||(r=[])):(r=r||[]).push(u,o))}n&&(r=r||[]).push("style",n);var u=r;(t.updateQueue=u)&&(t.flags|=4)}};qg=function(e,t,n,a){n!==a&&(t.flags|=4)};function _a(e,t){if(!st)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function kt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags&14680064,a|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function qf(e,t,n){var a=t.pendingProps;switch(fs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(t),null;case 1:return Qt(t.type)&&Yr(),kt(t),null;case 3:return a=t.stateNode,Da(),lt(Kt),lt(Ft),Ms(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ki(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Me!==null&&(Fo(Me),Me=null))),Oo(e,t),kt(t),null;case 5:xs(t);var i=On(yi.current);if(n=t.type,e!==null&&t.stateNode!=null)Jg(e,t,n,a,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(O(166));return kt(t),null}if(e=On(Be.current),Ki(t)){a=t.stateNode,n=t.type;var r=t.memoizedProps;switch(a[Le]=t,a[Si]=r,e=(t.mode&1)!==0,n){case"dialog":it("cancel",a),it("close",a);break;case"iframe":case"object":case"embed":it("load",a);break;case"video":case"audio":for(i=0;i<Za.length;i++)it(Za[i],a);break;case"source":it("error",a);break;case"img":case"image":case"link":it("error",a),it("load",a);break;case"details":it("toggle",a);break;case"input":su(a,r),it("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!r.multiple},it("invalid",a);break;case"textarea":cu(a,r),it("invalid",a)}ao(n,r),i=null;for(var l in r)if(r.hasOwnProperty(l)){var s=r[l];l==="children"?typeof s=="string"?a.textContent!==s&&(r.suppressHydrationWarning!==!0&&Gi(a.textContent,s,e),i=["children",s]):typeof s=="number"&&a.textContent!==""+s&&(r.suppressHydrationWarning!==!0&&Gi(a.textContent,s,e),i=["children",""+s]):oi.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&it("scroll",a)}switch(n){case"input":_i(a),uu(a,r,!0);break;case"textarea":_i(a),du(a);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(a.onclick=Tr)}a=i,t.updateQueue=a,a!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Nd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=l.createElement(n,{is:a.is}):(e=l.createElement(n),n==="select"&&(l=e,a.multiple?l.multiple=!0:a.size&&(l.size=a.size))):e=l.createElementNS(e,n),e[Le]=t,e[Si]=a,Qg(e,t,!1,!1),t.stateNode=e;t:{switch(l=io(n,a),n){case"dialog":it("cancel",e),it("close",e),i=a;break;case"iframe":case"object":case"embed":it("load",e),i=a;break;case"video":case"audio":for(i=0;i<Za.length;i++)it(Za[i],e);i=a;break;case"source":it("error",e),i=a;break;case"img":case"image":case"link":it("error",e),it("load",e),i=a;break;case"details":it("toggle",e),i=a;break;case"input":su(e,a),i=Jl(e,a),it("invalid",e);break;case"option":i=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},i=gt({},a,{value:void 0}),it("invalid",e);break;case"textarea":cu(e,a),i=eo(e,a),it("invalid",e);break;default:i=a}ao(n,i),s=i;for(r in s)if(s.hasOwnProperty(r)){var o=s[r];r==="style"?Vd(e,o):r==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,o!=null&&wd(e,o)):r==="children"?typeof o=="string"?(n!=="textarea"||o!=="")&&si(e,o):typeof o=="number"&&si(e,""+o):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(oi.hasOwnProperty(r)?o!=null&&r==="onScroll"&&it("scroll",e):o!=null&&ts(e,r,o,l))}switch(n){case"input":_i(e),uu(e,a,!1);break;case"textarea":_i(e),du(e);break;case"option":a.value!=null&&e.setAttribute("value",""+Cn(a.value));break;case"select":e.multiple=!!a.multiple,r=a.value,r!=null?ma(e,!!a.multiple,r,!1):a.defaultValue!=null&&ma(e,!!a.multiple,a.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Tr)}switch(n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return kt(t),null;case 6:if(e&&t.stateNode!=null)qg(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(O(166));if(n=On(yi.current),On(Be.current),Ki(t)){if(a=t.stateNode,n=t.memoizedProps,a[Le]=t,(r=a.nodeValue!==n)&&(e=le,e!==null))switch(e.tag){case 3:Gi(a.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Gi(a.nodeValue,n,(e.mode&1)!==0)}r&&(t.flags|=4)}else a=(n.nodeType===9?n:n.ownerDocument).createTextNode(a),a[Le]=t,t.stateNode=a}return kt(t),null;case 13:if(lt(ut),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(st&&re!==null&&t.mode&1&&!(t.flags&128))Sg(),xa(),t.flags|=98560,r=!1;else if(r=Ki(t),a!==null&&a.dehydrated!==null){if(e===null){if(!r)throw Error(O(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(O(317));r[Le]=t}else xa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;kt(t),r=!1}else Me!==null&&(Fo(Me),Me=null),r=!0;if(!r)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,t.mode&1&&(e===null||ut.current&1?bt===0&&(bt=3):Bs())),t.updateQueue!==null&&(t.flags|=4),kt(t),null);case 4:return Da(),Oo(e,t),e===null&&fi(t.stateNode.containerInfo),kt(t),null;case 10:return ys(t.type._context),kt(t),null;case 17:return Qt(t.type)&&Yr(),kt(t),null;case 19:if(lt(ut),r=t.memoizedState,r===null)return kt(t),null;if(a=(t.flags&128)!==0,l=r.rendering,l===null)if(a)_a(r,!1);else{if(bt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Xr(e),l!==null){for(t.flags|=128,_a(r,!1),a=l.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=n,n=t.child;n!==null;)r=n,e=a,r.flags&=14680066,l=r.alternate,l===null?(r.childLanes=0,r.lanes=e,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=l.childLanes,r.lanes=l.lanes,r.child=l.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=l.memoizedProps,r.memoizedState=l.memoizedState,r.updateQueue=l.updateQueue,r.type=l.type,e=l.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return et(ut,ut.current&1|2),t.child}e=e.sibling}r.tail!==null&&St()>Na&&(t.flags|=128,a=!0,_a(r,!1),t.lanes=4194304)}else{if(!a)if(e=Xr(l),e!==null){if(t.flags|=128,a=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),_a(r,!0),r.tail===null&&r.tailMode==="hidden"&&!l.alternate&&!st)return kt(t),null}else 2*St()-r.renderingStartTime>Na&&n!==1073741824&&(t.flags|=128,a=!0,_a(r,!1),t.lanes=4194304);r.isBackwards?(l.sibling=t.child,t.child=l):(n=r.last,n!==null?n.sibling=l:t.child=l,r.last=l)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=St(),t.sibling=null,n=ut.current,et(ut,a?n&1|2:n&1),t):(kt(t),null);case 22:case 23:return Is(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&t.mode&1?ae&1073741824&&(kt(t),t.subtreeFlags&6&&(t.flags|=8192)):kt(t),null;case 24:return null;case 25:return null}throw Error(O(156,t.tag))}function tp(e,t){switch(fs(t),t.tag){case 1:return Qt(t.type)&&Yr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Da(),lt(Kt),lt(Ft),Ms(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return xs(t),null;case 13:if(lt(ut),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(O(340));xa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return lt(ut),null;case 4:return Da(),null;case 10:return ys(t.type._context),null;case 22:case 23:return Is(),null;case 24:return null;default:return null}}var qi=!1,Tt=!1,ep=typeof WeakSet=="function"?WeakSet:Set,I=null;function la(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(a){ht(e,t,a)}else n.current=null}function Ro(e,t,n){try{n()}catch(a){ht(e,t,a)}}var tc=!1;function np(e,t){if(fo=Lr,e=ig(),ms(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var i=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break t}var l=0,s=-1,o=-1,u=0,d=0,m=e,c=null;e:for(;;){for(var S;m!==n||i!==0&&m.nodeType!==3||(s=l+i),m!==r||a!==0&&m.nodeType!==3||(o=l+a),m.nodeType===3&&(l+=m.nodeValue.length),(S=m.firstChild)!==null;)c=m,m=S;for(;;){if(m===e)break e;if(c===n&&++u===i&&(s=l),c===r&&++d===a&&(o=l),(S=m.nextSibling)!==null)break;m=c,c=m.parentNode}m=S}n=s===-1||o===-1?null:{start:s,end:o}}else n=null}n=n||{start:0,end:0}}else n=null;for(po={focusedElem:e,selectionRange:n},Lr=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,x=y.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?v:ye(t.type,v),x);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var C=t.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(p){ht(t,t.return,p)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return y=tc,tc=!1,y}function ei(e,t,n){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var i=a=a.next;do{if((i.tag&e)===e){var r=i.destroy;i.destroy=void 0,r!==void 0&&Ro(t,n,r)}i=i.next}while(i!==a)}}function sl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var a=n.create;n.destroy=a()}n=n.next}while(n!==t)}}function ko(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function tm(e){var t=e.alternate;t!==null&&(e.alternate=null,tm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Le],delete t[Si],delete t[yo],delete t[Yf],delete t[Ff])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function em(e){return e.tag===5||e.tag===3||e.tag===4}function ec(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||em(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lo(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Tr));else if(a!==4&&(e=e.child,e!==null))for(Lo(e,t,n),e=e.sibling;e!==null;)Lo(e,t,n),e=e.sibling}function Io(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(Io(e,t,n),e=e.sibling;e!==null;)Io(e,t,n),e=e.sibling}var Pt=null,be=!1;function en(e,t,n){for(n=n.child;n!==null;)nm(e,t,n),n=n.sibling}function nm(e,t,n){if(Ie&&typeof Ie.onCommitFiberUnmount=="function")try{Ie.onCommitFiberUnmount(tl,n)}catch{}switch(n.tag){case 5:Tt||la(n,t);case 6:var a=Pt,i=be;Pt=null,en(e,t,n),Pt=a,be=i,Pt!==null&&(be?(e=Pt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Pt.removeChild(n.stateNode));break;case 18:Pt!==null&&(be?(e=Pt,n=n.stateNode,e.nodeType===8?Ll(e.parentNode,n):e.nodeType===1&&Ll(e,n),gi(e)):Ll(Pt,n.stateNode));break;case 4:a=Pt,i=be,Pt=n.stateNode.containerInfo,be=!0,en(e,t,n),Pt=a,be=i;break;case 0:case 11:case 14:case 15:if(!Tt&&(a=n.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){i=a=a.next;do{var r=i,l=r.destroy;r=r.tag,l!==void 0&&(r&2||r&4)&&Ro(n,t,l),i=i.next}while(i!==a)}en(e,t,n);break;case 1:if(!Tt&&(la(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=n.memoizedProps,a.state=n.memoizedState,a.componentWillUnmount()}catch(s){ht(n,t,s)}en(e,t,n);break;case 21:en(e,t,n);break;case 22:n.mode&1?(Tt=(a=Tt)||n.memoizedState!==null,en(e,t,n),Tt=a):en(e,t,n);break;default:en(e,t,n)}}function nc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ep),t.forEach(function(a){var i=dp.bind(null,e,a);n.has(a)||(n.add(a),a.then(i,i))})}}function ve(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a];try{var r=e,l=t,s=l;t:for(;s!==null;){switch(s.tag){case 5:Pt=s.stateNode,be=!1;break t;case 3:Pt=s.stateNode.containerInfo,be=!0;break t;case 4:Pt=s.stateNode.containerInfo,be=!0;break t}s=s.return}if(Pt===null)throw Error(O(160));nm(r,l,i),Pt=null,be=!1;var o=i.alternate;o!==null&&(o.return=null),i.return=null}catch(u){ht(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)am(t,e),t=t.sibling}function am(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ve(t,e),Ve(e),a&4){try{ei(3,e,e.return),sl(3,e)}catch(v){ht(e,e.return,v)}try{ei(5,e,e.return)}catch(v){ht(e,e.return,v)}}break;case 1:ve(t,e),Ve(e),a&512&&n!==null&&la(n,n.return);break;case 5:if(ve(t,e),Ve(e),a&512&&n!==null&&la(n,n.return),e.flags&32){var i=e.stateNode;try{si(i,"")}catch(v){ht(e,e.return,v)}}if(a&4&&(i=e.stateNode,i!=null)){var r=e.memoizedProps,l=n!==null?n.memoizedProps:r,s=e.type,o=e.updateQueue;if(e.updateQueue=null,o!==null)try{s==="input"&&r.type==="radio"&&r.name!=null&&Dd(i,r),io(s,l);var u=io(s,r);for(l=0;l<o.length;l+=2){var d=o[l],m=o[l+1];d==="style"?Vd(i,m):d==="dangerouslySetInnerHTML"?wd(i,m):d==="children"?si(i,m):ts(i,d,m,u)}switch(s){case"input":ql(i,r);break;case"textarea":Ed(i,r);break;case"select":var c=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!r.multiple;var S=r.value;S!=null?ma(i,!!r.multiple,S,!1):c!==!!r.multiple&&(r.defaultValue!=null?ma(i,!!r.multiple,r.defaultValue,!0):ma(i,!!r.multiple,r.multiple?[]:"",!1))}i[Si]=r}catch(v){ht(e,e.return,v)}}break;case 6:if(ve(t,e),Ve(e),a&4){if(e.stateNode===null)throw Error(O(162));i=e.stateNode,r=e.memoizedProps;try{i.nodeValue=r}catch(v){ht(e,e.return,v)}}break;case 3:if(ve(t,e),Ve(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{gi(t.containerInfo)}catch(v){ht(e,e.return,v)}break;case 4:ve(t,e),Ve(e);break;case 13:ve(t,e),Ve(e),i=e.child,i.flags&8192&&(r=i.memoizedState!==null,i.stateNode.isHidden=r,!r||i.alternate!==null&&i.alternate.memoizedState!==null||(ks=St())),a&4&&nc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Tt=(u=Tt)||d,ve(t,e),Tt=u):ve(t,e),Ve(e),a&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(I=e,d=e.child;d!==null;){for(m=I=d;I!==null;){switch(c=I,S=c.child,c.tag){case 0:case 11:case 14:case 15:ei(4,c,c.return);break;case 1:la(c,c.return);var y=c.stateNode;if(typeof y.componentWillUnmount=="function"){a=c,n=c.return;try{t=a,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){ht(a,n,v)}}break;case 5:la(c,c.return);break;case 22:if(c.memoizedState!==null){ic(m);continue}}S!==null?(S.return=c,I=S):ic(m)}d=d.sibling}t:for(d=null,m=e;;){if(m.tag===5){if(d===null){d=m;try{i=m.stateNode,u?(r=i.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(s=m.stateNode,o=m.memoizedProps.style,l=o!=null&&o.hasOwnProperty("display")?o.display:null,s.style.display=Pd("display",l))}catch(v){ht(e,e.return,v)}}}else if(m.tag===6){if(d===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(v){ht(e,e.return,v)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break t;for(;m.sibling===null;){if(m.return===null||m.return===e)break t;d===m&&(d=null),m=m.return}d===m&&(d=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:ve(t,e),Ve(e),a&4&&nc(e);break;case 21:break;default:ve(t,e),Ve(e)}}function Ve(e){var t=e.flags;if(t&2){try{t:{for(var n=e.return;n!==null;){if(em(n)){var a=n;break t}n=n.return}throw Error(O(160))}switch(a.tag){case 5:var i=a.stateNode;a.flags&32&&(si(i,""),a.flags&=-33);var r=ec(e);Io(e,r,i);break;case 3:case 4:var l=a.stateNode.containerInfo,s=ec(e);Lo(e,s,l);break;default:throw Error(O(161))}}catch(o){ht(e,e.return,o)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ap(e,t,n){I=e,im(e)}function im(e,t,n){for(var a=(e.mode&1)!==0;I!==null;){var i=I,r=i.child;if(i.tag===22&&a){var l=i.memoizedState!==null||qi;if(!l){var s=i.alternate,o=s!==null&&s.memoizedState!==null||Tt;s=qi;var u=Tt;if(qi=l,(Tt=o)&&!u)for(I=i;I!==null;)l=I,o=l.child,l.tag===22&&l.memoizedState!==null?rc(i):o!==null?(o.return=l,I=o):rc(i);for(;r!==null;)I=r,im(r),r=r.sibling;I=i,qi=s,Tt=u}ac(e)}else i.subtreeFlags&8772&&r!==null?(r.return=i,I=r):ac(e)}}function ac(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Tt||sl(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!Tt)if(n===null)a.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ye(t.type,n.memoizedProps);a.componentDidUpdate(i,n.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var r=t.updateQueue;r!==null&&_u(t,r,a);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}_u(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var o=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":o.autoFocus&&n.focus();break;case"img":o.src&&(n.src=o.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var m=d.dehydrated;m!==null&&gi(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}Tt||t.flags&512&&ko(t)}catch(c){ht(t,t.return,c)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function ic(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function rc(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{sl(4,t)}catch(o){ht(t,n,o)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var i=t.return;try{a.componentDidMount()}catch(o){ht(t,i,o)}}var r=t.return;try{ko(t)}catch(o){ht(t,r,o)}break;case 5:var l=t.return;try{ko(t)}catch(o){ht(t,l,o)}}}catch(o){ht(t,t.return,o)}if(t===e){I=null;break}var s=t.sibling;if(s!==null){s.return=t.return,I=s;break}I=t.return}}var ip=Math.ceil,Zr=tn.ReactCurrentDispatcher,Os=tn.ReactCurrentOwner,fe=tn.ReactCurrentBatchConfig,K=0,Et=null,yt=null,Vt=0,ae=0,oa=xn(0),bt=0,xi=null,Tn=0,ul=0,Rs=0,ni=null,Zt=null,ks=0,Na=1/0,$e=null,Gr=!1,Bo=null,pn=null,tr=!1,cn=null,Kr=0,ai=0,To=null,xr=-1,Mr=0;function Ht(){return K&6?St():xr!==-1?xr:xr=St()}function Sn(e){return e.mode&1?K&2&&Vt!==0?Vt&-Vt:_f.transition!==null?(Mr===0&&(Mr=zd()),Mr):(e=q,e!==0||(e=window.event,e=e===void 0?16:Gd(e.type)),e):1}function Ne(e,t,n,a){if(50<ai)throw ai=0,To=null,Error(O(185));Ni(e,n,a),(!(K&2)||e!==Et)&&(e===Et&&(!(K&2)&&(ul|=n),bt===4&&on(e,Vt)),Jt(e,a),n===1&&K===0&&!(t.mode&1)&&(Na=St()+500,rl&&Mn()))}function Jt(e,t){var n=e.callbackNode;$h(e,t);var a=kr(e,e===Et?Vt:0);if(a===0)n!==null&&hu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(n!=null&&hu(n),t===1)e.tag===0?$f(lc.bind(null,e)):hg(lc.bind(null,e)),Bf(function(){!(K&6)&&Mn()}),n=null;else{switch(jd(a)){case 1:n=rs;break;case 4:n=$d;break;case 16:n=Rr;break;case 536870912:n=_d;break;default:n=Rr}n=gm(n,rm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function rm(e,t){if(xr=-1,Mr=0,K&6)throw Error(O(327));var n=e.callbackNode;if(va()&&e.callbackNode!==n)return null;var a=kr(e,e===Et?Vt:0);if(a===0)return null;if(a&30||a&e.expiredLanes||t)t=Qr(e,a);else{t=a;var i=K;K|=2;var r=om();(Et!==e||Vt!==t)&&($e=null,Na=St()+500,Rn(e,t));do try{op();break}catch(s){lm(e,s)}while(!0);vs(),Zr.current=r,K=i,yt!==null?t=0:(Et=null,Vt=0,t=bt)}if(t!==0){if(t===2&&(i=uo(e),i!==0&&(a=i,t=Yo(e,i))),t===1)throw n=xi,Rn(e,0),on(e,a),Jt(e,St()),n;if(t===6)on(e,a);else{if(i=e.current.alternate,!(a&30)&&!rp(i)&&(t=Qr(e,a),t===2&&(r=uo(e),r!==0&&(a=r,t=Yo(e,r))),t===1))throw n=xi,Rn(e,0),on(e,a),Jt(e,St()),n;switch(e.finishedWork=i,e.finishedLanes=a,t){case 0:case 1:throw Error(O(345));case 2:wn(e,Zt,$e);break;case 3:if(on(e,a),(a&130023424)===a&&(t=ks+500-St(),10<t)){if(kr(e,0)!==0)break;if(i=e.suspendedLanes,(i&a)!==a){Ht(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=vo(wn.bind(null,e,Zt,$e),t);break}wn(e,Zt,$e);break;case 4:if(on(e,a),(a&4194240)===a)break;for(t=e.eventTimes,i=-1;0<a;){var l=31-Ee(a);r=1<<l,l=t[l],l>i&&(i=l),a&=~r}if(a=i,a=St()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*ip(a/1960))-a,10<a){e.timeoutHandle=vo(wn.bind(null,e,Zt,$e),a);break}wn(e,Zt,$e);break;case 5:wn(e,Zt,$e);break;default:throw Error(O(329))}}}return Jt(e,St()),e.callbackNode===n?rm.bind(null,e):null}function Yo(e,t){var n=ni;return e.current.memoizedState.isDehydrated&&(Rn(e,t).flags|=256),e=Qr(e,t),e!==2&&(t=Zt,Zt=n,t!==null&&Fo(t)),e}function Fo(e){Zt===null?Zt=e:Zt.push.apply(Zt,e)}function rp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var a=0;a<n.length;a++){var i=n[a],r=i.getSnapshot;i=i.value;try{if(!we(r(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function on(e,t){for(t&=~Rs,t&=~ul,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ee(t),a=1<<n;e[n]=-1,t&=~a}}function lc(e){if(K&6)throw Error(O(327));va();var t=kr(e,0);if(!(t&1))return Jt(e,St()),null;var n=Qr(e,t);if(e.tag!==0&&n===2){var a=uo(e);a!==0&&(t=a,n=Yo(e,a))}if(n===1)throw n=xi,Rn(e,0),on(e,t),Jt(e,St()),n;if(n===6)throw Error(O(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wn(e,Zt,$e),Jt(e,St()),null}function Ls(e,t){var n=K;K|=1;try{return e(t)}finally{K=n,K===0&&(Na=St()+500,rl&&Mn())}}function Yn(e){cn!==null&&cn.tag===0&&!(K&6)&&va();var t=K;K|=1;var n=fe.transition,a=q;try{if(fe.transition=null,q=1,e)return e()}finally{q=a,fe.transition=n,K=t,!(K&6)&&Mn()}}function Is(){ae=oa.current,lt(oa)}function Rn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,If(n)),yt!==null)for(n=yt.return;n!==null;){var a=n;switch(fs(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Yr();break;case 3:Da(),lt(Kt),lt(Ft),Ms();break;case 5:xs(a);break;case 4:Da();break;case 13:lt(ut);break;case 19:lt(ut);break;case 10:ys(a.type._context);break;case 22:case 23:Is()}n=n.return}if(Et=e,yt=e=vn(e.current,null),Vt=ae=t,bt=0,xi=null,Rs=ul=Tn=0,Zt=ni=null,Vn!==null){for(t=0;t<Vn.length;t++)if(n=Vn[t],a=n.interleaved,a!==null){n.interleaved=null;var i=a.next,r=n.pending;if(r!==null){var l=r.next;r.next=i,a.next=l}n.pending=a}Vn=null}return e}function lm(e,t){do{var n=yt;try{if(vs(),Cr.current=Wr,Ur){for(var a=dt.memoizedState;a!==null;){var i=a.queue;i!==null&&(i.pending=null),a=a.next}Ur=!1}if(Bn=0,Dt=At=dt=null,ti=!1,Ci=0,Os.current=null,n===null||n.return===null){bt=1,xi=t,yt=null;break}t:{var r=e,l=n.return,s=n,o=t;if(t=Vt,s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){var u=o,d=s,m=d.tag;if(!(d.mode&1)&&(m===0||m===11||m===15)){var c=d.alternate;c?(d.updateQueue=c.updateQueue,d.memoizedState=c.memoizedState,d.lanes=c.lanes):(d.updateQueue=null,d.memoizedState=null)}var S=Wu(l);if(S!==null){S.flags&=-257,Zu(S,l,s,r,t),S.mode&1&&Uu(r,u,t),t=S,o=u;var y=t.updateQueue;if(y===null){var v=new Set;v.add(o),t.updateQueue=v}else y.add(o);break t}else{if(!(t&1)){Uu(r,u,t),Bs();break t}o=Error(O(426))}}else if(st&&s.mode&1){var x=Wu(l);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Zu(x,l,s,r,t),ps(Ea(o,s));break t}}r=o=Ea(o,s),bt!==4&&(bt=2),ni===null?ni=[r]:ni.push(r),r=l;do{switch(r.tag){case 3:r.flags|=65536,t&=-t,r.lanes|=t;var g=jg(r,o,t);$u(r,g);break t;case 1:s=o;var h=r.type,C=r.stateNode;if(!(r.flags&128)&&(typeof h.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(pn===null||!pn.has(C)))){r.flags|=65536,t&=-t,r.lanes|=t;var p=Hg(r,s,t);$u(r,p);break t}}r=r.return}while(r!==null)}um(n)}catch(b){t=b,yt===n&&n!==null&&(yt=n=n.return);continue}break}while(!0)}function om(){var e=Zr.current;return Zr.current=Wr,e===null?Wr:e}function Bs(){(bt===0||bt===3||bt===2)&&(bt=4),Et===null||!(Tn&268435455)&&!(ul&268435455)||on(Et,Vt)}function Qr(e,t){var n=K;K|=2;var a=om();(Et!==e||Vt!==t)&&($e=null,Rn(e,t));do try{lp();break}catch(i){lm(e,i)}while(!0);if(vs(),K=n,Zr.current=a,yt!==null)throw Error(O(261));return Et=null,Vt=0,bt}function lp(){for(;yt!==null;)sm(yt)}function op(){for(;yt!==null&&!Oh();)sm(yt)}function sm(e){var t=dm(e.alternate,e,ae);e.memoizedProps=e.pendingProps,t===null?um(e):yt=t,Os.current=null}function um(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=tp(n,t),n!==null){n.flags&=32767,yt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{bt=6,yt=null;return}}else if(n=qf(n,t,ae),n!==null){yt=n;return}if(t=t.sibling,t!==null){yt=t;return}yt=t=e}while(t!==null);bt===0&&(bt=5)}function wn(e,t,n){var a=q,i=fe.transition;try{fe.transition=null,q=1,sp(e,t,n,a)}finally{fe.transition=i,q=a}return null}function sp(e,t,n,a){do va();while(cn!==null);if(K&6)throw Error(O(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(O(177));e.callbackNode=null,e.callbackPriority=0;var r=n.lanes|n.childLanes;if(_h(e,r),e===Et&&(yt=Et=null,Vt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||tr||(tr=!0,gm(Rr,function(){return va(),null})),r=(n.flags&15990)!==0,n.subtreeFlags&15990||r){r=fe.transition,fe.transition=null;var l=q;q=1;var s=K;K|=4,Os.current=null,np(e,n),am(n,e),wf(po),Lr=!!fo,po=fo=null,e.current=n,ap(n),Rh(),K=s,q=l,fe.transition=r}else e.current=n;if(tr&&(tr=!1,cn=e,Kr=i),r=e.pendingLanes,r===0&&(pn=null),Ih(n.stateNode),Jt(e,St()),t!==null)for(a=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],a(i.value,{componentStack:i.stack,digest:i.digest});if(Gr)throw Gr=!1,e=Bo,Bo=null,e;return Kr&1&&e.tag!==0&&va(),r=e.pendingLanes,r&1?e===To?ai++:(ai=0,To=e):ai=0,Mn(),null}function va(){if(cn!==null){var e=jd(Kr),t=fe.transition,n=q;try{if(fe.transition=null,q=16>e?16:e,cn===null)var a=!1;else{if(e=cn,cn=null,Kr=0,K&6)throw Error(O(331));var i=K;for(K|=4,I=e.current;I!==null;){var r=I,l=r.child;if(I.flags&16){var s=r.deletions;if(s!==null){for(var o=0;o<s.length;o++){var u=s[o];for(I=u;I!==null;){var d=I;switch(d.tag){case 0:case 11:case 15:ei(8,d,r)}var m=d.child;if(m!==null)m.return=d,I=m;else for(;I!==null;){d=I;var c=d.sibling,S=d.return;if(tm(d),d===u){I=null;break}if(c!==null){c.return=S,I=c;break}I=S}}}var y=r.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var x=v.sibling;v.sibling=null,v=x}while(v!==null)}}I=r}}if(r.subtreeFlags&2064&&l!==null)l.return=r,I=l;else t:for(;I!==null;){if(r=I,r.flags&2048)switch(r.tag){case 0:case 11:case 15:ei(9,r,r.return)}var g=r.sibling;if(g!==null){g.return=r.return,I=g;break t}I=r.return}}var h=e.current;for(I=h;I!==null;){l=I;var C=l.child;if(l.subtreeFlags&2064&&C!==null)C.return=l,I=C;else t:for(l=h;I!==null;){if(s=I,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:sl(9,s)}}catch(b){ht(s,s.return,b)}if(s===l){I=null;break t}var p=s.sibling;if(p!==null){p.return=s.return,I=p;break t}I=s.return}}if(K=i,Mn(),Ie&&typeof Ie.onPostCommitFiberRoot=="function")try{Ie.onPostCommitFiberRoot(tl,e)}catch{}a=!0}return a}finally{q=n,fe.transition=t}}return!1}function oc(e,t,n){t=Ea(n,t),t=jg(e,t,1),e=fn(e,t,1),t=Ht(),e!==null&&(Ni(e,1,t),Jt(e,t))}function ht(e,t,n){if(e.tag===3)oc(e,e,n);else for(;t!==null;){if(t.tag===3){oc(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(pn===null||!pn.has(a))){e=Ea(n,e),e=Hg(t,e,1),t=fn(t,e,1),e=Ht(),t!==null&&(Ni(t,1,e),Jt(t,e));break}}t=t.return}}function up(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),t=Ht(),e.pingedLanes|=e.suspendedLanes&n,Et===e&&(Vt&n)===n&&(bt===4||bt===3&&(Vt&130023424)===Vt&&500>St()-ks?Rn(e,0):Rs|=n),Jt(e,t)}function cm(e,t){t===0&&(e.mode&1?(t=Hi,Hi<<=1,!(Hi&130023424)&&(Hi=4194304)):t=1);var n=Ht();e=Qe(e,t),e!==null&&(Ni(e,t,n),Jt(e,n))}function cp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),cm(e,n)}function dp(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(O(314))}a!==null&&a.delete(t),cm(e,n)}var dm;dm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Kt.current)Gt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Gt=!1,Jf(e,t,n);Gt=!!(e.flags&131072)}else Gt=!1,st&&t.flags&1048576&&fg(t,_r,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;br(e,t),e=t.pendingProps;var i=ba(t,Ft.current);Sa(t,n),i=Es(null,t,a,e,i,n);var r=Ns();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Qt(a)?(r=!0,Fr(t)):r=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,As(t),i.updater=ol,t.stateNode=i,i._reactInternals=t,Do(t,a,e,n),t=wo(null,t,a,!0,r,n)):(t.tag=0,st&&r&&hs(t),zt(null,t,i,n),t=t.child),t;case 16:a=t.elementType;t:{switch(br(e,t),e=t.pendingProps,i=a._init,a=i(a._payload),t.type=a,i=t.tag=mp(a),e=ye(a,e),i){case 0:t=No(null,t,a,e,n);break t;case 1:t=Qu(null,t,a,e,n);break t;case 11:t=Gu(null,t,a,e,n);break t;case 14:t=Ku(null,t,a,ye(a.type,e),n);break t}throw Error(O(306,a,""))}return t;case 0:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:ye(a,i),No(e,t,a,i,n);case 1:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:ye(a,i),Qu(e,t,a,i,n);case 3:t:{if(Zg(t),e===null)throw Error(O(387));a=t.pendingProps,r=t.memoizedState,i=r.element,Ag(e,t),Hr(t,a,null,n);var l=t.memoizedState;if(a=l.element,r.isDehydrated)if(r={element:a,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){i=Ea(Error(O(423)),t),t=Ju(e,t,a,n,i);break t}else if(a!==i){i=Ea(Error(O(424)),t),t=Ju(e,t,a,n,i);break t}else for(re=hn(t.stateNode.containerInfo.firstChild),le=t,st=!0,Me=null,n=yg(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xa(),a===i){t=Je(e,t,n);break t}zt(e,t,a,n)}t=t.child}return t;case 5:return bg(t),e===null&&bo(t),a=t.type,i=t.pendingProps,r=e!==null?e.memoizedProps:null,l=i.children,So(a,i)?l=null:r!==null&&So(a,r)&&(t.flags|=32),Wg(e,t),zt(e,t,l,n),t.child;case 6:return e===null&&bo(t),null;case 13:return Gg(e,t,n);case 4:return bs(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Ma(t,null,a,n):zt(e,t,a,n),t.child;case 11:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:ye(a,i),Gu(e,t,a,i,n);case 7:return zt(e,t,t.pendingProps,n),t.child;case 8:return zt(e,t,t.pendingProps.children,n),t.child;case 12:return zt(e,t,t.pendingProps.children,n),t.child;case 10:t:{if(a=t.type._context,i=t.pendingProps,r=t.memoizedProps,l=i.value,et(zr,a._currentValue),a._currentValue=l,r!==null)if(we(r.value,l)){if(r.children===i.children&&!Kt.current){t=Je(e,t,n);break t}}else for(r=t.child,r!==null&&(r.return=t);r!==null;){var s=r.dependencies;if(s!==null){l=r.child;for(var o=s.firstContext;o!==null;){if(o.context===a){if(r.tag===1){o=Ue(-1,n&-n),o.tag=2;var u=r.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?o.next=o:(o.next=d.next,d.next=o),u.pending=o}}r.lanes|=n,o=r.alternate,o!==null&&(o.lanes|=n),xo(r.return,n,t),s.lanes|=n;break}o=o.next}}else if(r.tag===10)l=r.type===t.type?null:r.child;else if(r.tag===18){if(l=r.return,l===null)throw Error(O(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),xo(l,n,t),l=r.sibling}else l=r.child;if(l!==null)l.return=r;else for(l=r;l!==null;){if(l===t){l=null;break}if(r=l.sibling,r!==null){r.return=l.return,l=r;break}l=l.return}r=l}zt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,a=t.pendingProps.children,Sa(t,n),i=pe(i),a=a(i),t.flags|=1,zt(e,t,a,n),t.child;case 14:return a=t.type,i=ye(a,t.pendingProps),i=ye(a.type,i),Ku(e,t,a,i,n);case 15:return Xg(e,t,t.type,t.pendingProps,n);case 17:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:ye(a,i),br(e,t),t.tag=1,Qt(a)?(e=!0,Fr(t)):e=!1,Sa(t,n),zg(t,a,i),Do(t,a,i,n),wo(null,t,a,!0,e,n);case 19:return Kg(e,t,n);case 22:return Ug(e,t,n)}throw Error(O(156,t.tag))};function gm(e,t){return Fd(e,t)}function gp(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function he(e,t,n,a){return new gp(e,t,n,a)}function Ts(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mp(e){if(typeof e=="function")return Ts(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ns)return 11;if(e===as)return 14}return 2}function vn(e,t){var n=e.alternate;return n===null?(n=he(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Dr(e,t,n,a,i,r){var l=2;if(a=e,typeof e=="function")Ts(e)&&(l=1);else if(typeof e=="string")l=5;else t:switch(e){case Qn:return kn(n.children,i,r,t);case es:l=8,i|=8;break;case Zl:return e=he(12,n,t,i|2),e.elementType=Zl,e.lanes=r,e;case Gl:return e=he(13,n,t,i),e.elementType=Gl,e.lanes=r,e;case Kl:return e=he(19,n,t,i),e.elementType=Kl,e.lanes=r,e;case bd:return cl(n,i,r,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Cd:l=10;break t;case Ad:l=9;break t;case ns:l=11;break t;case as:l=14;break t;case an:l=16,a=null;break t}throw Error(O(130,e==null?e:typeof e,""))}return t=he(l,n,t,i),t.elementType=e,t.type=a,t.lanes=r,t}function kn(e,t,n,a){return e=he(7,e,a,t),e.lanes=n,e}function cl(e,t,n,a){return e=he(22,e,a,t),e.elementType=bd,e.lanes=n,e.stateNode={isHidden:!1},e}function zl(e,t,n){return e=he(6,e,null,t),e.lanes=n,e}function jl(e,t,n){return t=he(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function hp(e,t,n,a,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xl(0),this.expirationTimes=xl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xl(0),this.identifierPrefix=a,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ys(e,t,n,a,i,r,l,s,o){return e=new hp(e,t,n,s,o),t===1?(t=1,r===!0&&(t|=8)):t=0,r=he(3,null,null,t),e.current=r,r.stateNode=e,r.memoizedState={element:a,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},As(r),e}function fp(e,t,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kn,key:a==null?null:""+a,children:e,containerInfo:t,implementation:n}}function mm(e){if(!e)return An;e=e._reactInternals;t:{if(_n(e)!==e||e.tag!==1)throw Error(O(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break t;case 1:if(Qt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break t}}t=t.return}while(t!==null);throw Error(O(171))}if(e.tag===1){var n=e.type;if(Qt(n))return mg(e,n,t)}return t}function hm(e,t,n,a,i,r,l,s,o){return e=Ys(n,a,!0,e,i,r,l,s,o),e.context=mm(null),n=e.current,a=Ht(),i=Sn(n),r=Ue(a,i),r.callback=t??null,fn(n,r,i),e.current.lanes=i,Ni(e,i,a),Jt(e,a),e}function dl(e,t,n,a){var i=t.current,r=Ht(),l=Sn(i);return n=mm(n),t.context===null?t.context=n:t.pendingContext=n,t=Ue(r,l),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=fn(i,t,l),e!==null&&(Ne(e,i,l,r),yr(e,i,l)),l}function Jr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function sc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Fs(e,t){sc(e,t),(e=e.alternate)&&sc(e,t)}function pp(){return null}var fm=typeof reportError=="function"?reportError:function(e){console.error(e)};function $s(e){this._internalRoot=e}gl.prototype.render=$s.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(O(409));dl(e,t,null,null)};gl.prototype.unmount=$s.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Yn(function(){dl(null,e,null,null)}),t[Ke]=null}};function gl(e){this._internalRoot=e}gl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ud();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ln.length&&t!==0&&t<ln[n].priority;n++);ln.splice(n,0,e),n===0&&Zd(e)}};function _s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ml(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function uc(){}function Sp(e,t,n,a,i){if(i){if(typeof a=="function"){var r=a;a=function(){var u=Jr(l);r.call(u)}}var l=hm(t,a,e,0,null,!1,!1,"",uc);return e._reactRootContainer=l,e[Ke]=l.current,fi(e.nodeType===8?e.parentNode:e),Yn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof a=="function"){var s=a;a=function(){var u=Jr(o);s.call(u)}}var o=Ys(e,0,!1,null,null,!1,!1,"",uc);return e._reactRootContainer=o,e[Ke]=o.current,fi(e.nodeType===8?e.parentNode:e),Yn(function(){dl(t,o,n,a)}),o}function hl(e,t,n,a,i){var r=n._reactRootContainer;if(r){var l=r;if(typeof i=="function"){var s=i;i=function(){var o=Jr(l);s.call(o)}}dl(t,l,e,i)}else l=Sp(n,t,e,i,a);return Jr(l)}Hd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Wa(t.pendingLanes);n!==0&&(ls(t,n|1),Jt(t,St()),!(K&6)&&(Na=St()+500,Mn()))}break;case 13:Yn(function(){var a=Qe(e,1);if(a!==null){var i=Ht();Ne(a,e,1,i)}}),Fs(e,1)}};os=function(e){if(e.tag===13){var t=Qe(e,134217728);if(t!==null){var n=Ht();Ne(t,e,134217728,n)}Fs(e,134217728)}};Xd=function(e){if(e.tag===13){var t=Sn(e),n=Qe(e,t);if(n!==null){var a=Ht();Ne(n,e,t,a)}Fs(e,t)}};Ud=function(){return q};Wd=function(e,t){var n=q;try{return q=e,t()}finally{q=n}};lo=function(e,t,n){switch(t){case"input":if(ql(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var i=il(a);if(!i)throw Error(O(90));Md(a),ql(a,i)}}}break;case"textarea":Ed(e,n);break;case"select":t=n.value,t!=null&&ma(e,!!n.multiple,t,!1)}};kd=Ls;Ld=Yn;var vp={usingClientEntryPoint:!1,Events:[Pi,ea,il,Od,Rd,Ls]},za={findFiberByHostInstance:Pn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yp={bundleType:za.bundleType,version:za.version,rendererPackageName:za.rendererPackageName,rendererConfig:za.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Td(e),e===null?null:e.stateNode},findFiberByHostInstance:za.findFiberByHostInstance||pp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var er=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!er.isDisabled&&er.supportsFiber)try{tl=er.inject(yp),Ie=er}catch{}}ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vp;ue.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_s(t))throw Error(O(200));return fp(e,t,null,n)};ue.createRoot=function(e,t){if(!_s(e))throw Error(O(299));var n=!1,a="",i=fm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ys(e,1,!1,null,null,n,!1,a,i),e[Ke]=t.current,fi(e.nodeType===8?e.parentNode:e),new $s(t)};ue.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(O(188)):(e=Object.keys(e).join(","),Error(O(268,e)));return e=Td(t),e=e===null?null:e.stateNode,e};ue.flushSync=function(e){return Yn(e)};ue.hydrate=function(e,t,n){if(!ml(t))throw Error(O(200));return hl(null,e,t,!0,n)};ue.hydrateRoot=function(e,t,n){if(!_s(e))throw Error(O(405));var a=n!=null&&n.hydratedSources||null,i=!1,r="",l=fm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=hm(t,null,e,1,n??null,i,!1,r,l),e[Ke]=t.current,fi(e),a)for(e=0;e<a.length;e++)n=a[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new gl(t)};ue.render=function(e,t,n){if(!ml(t))throw Error(O(200));return hl(null,e,t,!1,n)};ue.unmountComponentAtNode=function(e){if(!ml(e))throw Error(O(40));return e._reactRootContainer?(Yn(function(){hl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};ue.unstable_batchedUpdates=Ls;ue.unstable_renderSubtreeIntoContainer=function(e,t,n,a){if(!ml(n))throw Error(O(200));if(e==null||e._reactInternals===void 0)throw Error(O(38));return hl(e,t,n,!1,a)};ue.version="18.3.1-next-f1338f8080-20240426";function pm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pm)}catch(e){console.error(e)}}pm(),pd.exports=ue;var Cp=pd.exports,Sm,cc=Cp;Sm=cc.createRoot,cc.hydrateRoot;/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),vm=(...e)=>e.filter((t,n,a)=>!!t&&a.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var bp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=Z.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:a,className:i="",children:r,iconNode:l,...s},o)=>Z.createElement("svg",{ref:o,...bp,width:t,height:t,stroke:e,strokeWidth:a?Number(n)*24/Number(t):n,className:vm("lucide",i),...s},[...l.map(([u,d])=>Z.createElement(u,d)),...Array.isArray(r)?r:[r]]));/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt=(e,t)=>{const n=Z.forwardRef(({className:a,...i},r)=>Z.createElement(xp,{ref:r,iconNode:t,className:vm(`lucide-${Ap(e)}`,a),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=Nt("Cable",[["path",{d:"M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1",key:"10bnsj"}],["path",{d:"M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9",key:"1eqmu1"}],["path",{d:"M21 21v-2h-4",key:"14zm7j"}],["path",{d:"M3 5h4V3",key:"z442eg"}],["path",{d:"M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3",key:"ebdjd7"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=Nt("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=Nt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=Nt("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=Nt("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oi=Nt("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=Nt("LockOpen",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zs=Nt("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=Nt("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=Nt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=Nt("Redo2",[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=Nt("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=Nt("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=Nt("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=Nt("Undo2",[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=Nt("Unplug",[["path",{d:"m19 5 3-3",key:"yk6iyv"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z",key:"1snsnr"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=Nt("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=Nt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Ri=240,ki=247,Li=126,We=1,gc=30,De={FileDump:7,EndOfFile:123,Wait:124,Cancel:125,Nack:126,Ack:127},ya={Header:1,Data:2,Request:3},Am=[66,73,78,32];function bm(e){return Array.from(e,t=>t.charCodeAt(0)&127)}function xm(e,t=0,n=e.length){let a=0;for(let i=t;i<n;i++)a^=e[i];return a}function Tp(e,t=0){const n=[t&127,t>>7&127,t>>14&127,t>>21&127];return Uint8Array.from([Ri,Li,We,De.FileDump,ya.Header,We,...Am,...n,...bm(e),ki])}function Yp(e){return Uint8Array.from([Ri,Li,We,De.FileDump,ya.Request,We,...Am,...bm(e),ki])}function Fp(e){const t=[];for(let n=0;n<e.length;n+=7){const a=Math.min(7,e.length-n);let i=0;const r=[];for(let l=0;l<a;l++)i+=(e[n+l]&128)>>7<<6-l,r.push(e[n+l]&127);t.push(i,...r)}return t}function $p(e){const t=Math.trunc(e/7),n=e-t*7;return t*8+1+n-1&255}function _p(e,t){const n=[Ri,Li,We,De.FileDump,ya.Data,e&127,$p(t.length),...Fp(t)],a=xm(n,1);return Uint8Array.from([...n,a,ki])}function zp(){return Uint8Array.from([Ri,Li,We,De.EndOfFile,0,ki])}function jp(e){const t=[];for(let n=0;n<e.length;n+=8){const a=e[n],i=Math.min(7,e.length-n-1);for(let r=0;r<i;r++){let l=e[n+1+r]&127;a&1<<6-r&&(l|=128),t.push(l)}}return t}function mc(e,t,n){let a="";for(let i=t;i<n&&i-t<64;i++)a+=String.fromCharCode(e[i]);return a}function Hp(e){const t=[];let n=0;for(;n<e.length;){if(e[n]!==Ri){n++;continue}let a=n+1;for(;a<e.length&&e[a]!==ki;)a++;const i=e.subarray(n,a);if(n=a+1,!(i.length<4||i[1]!==Li||i[2]!==We))switch(i[3]){case De.FileDump:{const r=i[4];if(r===ya.Header&&i[5]===We){const l=(i[10]??0)|(i[11]??0)<<7|(i[12]??0)<<14|(i[13]??0)<<21;t.push({kind:"header",name:mc(i,14,i.length),length:l})}else if(r===ya.Request&&i[5]===We)t.push({kind:"request",name:mc(i,10,i.length)});else if(r===ya.Data&&i.length>=8){const l=i[5],s=Uint8Array.from(jp(i.subarray(7,i.length-1))),o=i[i.length-1],u=xm(i,1,i.length-1)===o;t.push({kind:"data",packet:l,payload:s,checksumOk:u})}break}case De.EndOfFile:t.push({kind:"eof"});break;case De.Wait:t.push({kind:"wait"});break;case De.Cancel:t.push({kind:"cancel"});break;case De.Nack:t.push({kind:"nack",packet:i[4]??0});break;case De.Ack:t.push({kind:"ack",packet:i[4]??0});break}}return t}const Xp=3e3;class nn extends Error{constructor(t,n){super(t),this.reason=n}}class Up{constructor(t,n=Xp){this.transport=t,this.timeoutMs=n,this.unsubscribe=t.listen(a=>this.receive(a))}queue=Promise.resolve();waiters=new Set;unsubscribe;closed=!1;onNotification=null;onTraffic=null;close(){this.closed=!0,this.unsubscribe()}receive(t){this.onTraffic?.("in",t);for(const n of Hp(t)){let a=!1;for(const i of[...this.waiters])if(i(n)){a=!0;break}!a&&n.kind==="header"&&this.onNotification?.(n.name)}}send(t){if(this.closed)throw new nn("device closed","closed");this.onTraffic?.("out",t),this.transport.send(t)}waitFor(t,n){return new Promise((a,i)=>{const r=setTimeout(()=>{this.waiters.delete(l),i(new nn(`no answer from the device (${n})`,"timeout"))},this.timeoutMs),l=s=>{let o;try{o=t(s)}catch(u){return clearTimeout(r),this.waiters.delete(l),i(u),!0}return o===void 0?!1:(clearTimeout(r),this.waiters.delete(l),a(o),!0)};this.waiters.add(l)})}exclusive(t){const n=this.queue.then(t,t);return this.queue=n.catch(()=>{}),n}ackFor(t,n){return this.waitFor(a=>{if(a.kind==="nack")throw new nn(`the device refused ${n}`,"nack");if(a.kind==="ack"){if(a.packet!==t)throw new nn(`unexpected acknowledge for ${n}`,"sequence");return!0}},n)}sendFile(t,n=new Uint8Array(0)){return this.exclusive(async()=>{const a=this.ackFor(0,t);this.send(Tp(t)),await a;let i=0;for(let r=0;r<n.length;r+=gc){const l=n.subarray(r,Math.min(n.length,r+gc)),s=this.ackFor(i,`${t} packet ${i}`);this.send(_p(i,l)),await s,i=i+1&127}this.send(zp())})}receiveFile(t,n=Number.POSITIVE_INFINITY){return this.exclusive(async()=>{const a=[];let i=0;const r=new Promise((l,s)=>{let o;const u=()=>{clearTimeout(o),o=setTimeout(()=>{this.waiters.delete(m),s(new nn(`no answer from the device (${t})`,"timeout"))},this.timeoutMs)},d=c=>{clearTimeout(o),this.waiters.delete(m),s(c)},m=c=>{switch(c.kind){case"data":if(c.packet!==i)return d(new nn(`missing data from the device (${t})`,"sequence")),!0;i=i+1&127;for(const S of c.payload)a.push(S);return u(),!0;case"nack":return d(new nn(`the device refused ${t}`,"nack")),!0;case"eof":return clearTimeout(o),this.waiters.delete(m),l(Uint8Array.from(a.slice(0,n))),!0;case"header":return c.name===t?(u(),!0):!1;case"wait":return u(),!0;default:return!1}};this.waiters.add(m),u()});return this.send(Yp(t)),r})}static commands=De}const nr={AxisX:3,AxisY:4,AxisZ:5,UpdateList:9},de={Version:0,BuildNumber:1,SensorBuildNumber:2,SerialNumber:3,SensorVersion:7,Hardware:8,Slot1:11,OverviewSlot1:21,SerialSlot1:31},Wp={Flashing:1,Accessories:2},Zp=888,ee=e=>String(e).padStart(2,"0"),ar=(e,t)=>{let n=0;for(let a=t-1;a>=0;a--)n=n*256+(e[a]??0);return n};function Gp(e){if(e.length<=3||e.substring(0,3).toUpperCase()!=="IFO")return null;const t=r=>e.charCodeAt(r)-48,n=t(3)*10+t(4);if(n<de.OverviewSlot1||n>de.OverviewSlot1+5)return null;const a=n-de.OverviewSlot1+1;if(e.length<6)return null;if(e.length===6)return{slot:a,module:null};if(e.length!==14)return null;const i=r=>t(r)*10+t(r+1);return{slot:a,module:{slot:a,type:i(6),version:i(8),color:i(10),options:i(12)}}}function Kp(e){return Array.from(e,t=>t.toString(16).toUpperCase().padStart(2,"0")).join("-")}class hc{constructor(t,n,a){this.name=t,this.transport=n,this.files=new Up(n,a),this.files.onNotification=i=>{const r=Gp(i);r&&(r.module?this.onModuleAppeared?.(r.module):this.onModuleDisappeared?.(r.slot))}}files;onModuleAppeared=null;onModuleDisappeared=null;close(){this.files.close(),this.transport.close()}writeModule(t,n){return this.files.sendFile(`set${ee(de.Slot1+t-1)}`,n)}readModule(t){return this.files.receiveFile(`get${ee(de.Slot1+t-1)}`,Zp)}updateModuleList(){return this.files.sendFile(`cmd${ee(nr.UpdateList)}`)}async setAxes(t,n,a){await this.files.sendFile(`cmd${ee(nr.AxisX)}`,Uint8Array.of(t?1:0)),await this.files.sendFile(`cmd${ee(nr.AxisY)}`,Uint8Array.of(n?1:0)),await this.files.sendFile(`cmd${ee(nr.AxisZ)}`,Uint8Array.of(a?1:0))}async getBuildNumber(){const t=await this.files.receiveFile(`get${ee(de.BuildNumber)}`,2);if(t.length===0)throw new Error("empty build number");return ar(t,2)}async getVersion(){return ar(await this.files.receiveFile(`get${ee(de.Version)}`,4),4)}async getSensorBuildNumber(){return ar(await this.files.receiveFile(`get${ee(de.SensorBuildNumber)}`,2),2)}async getSensorVersion(){return ar(await this.files.receiveFile(`get${ee(de.SensorVersion)}`,4),4)}async getHardwareInfo(){const t=await this.files.receiveFile(`get${ee(de.Hardware)}`,4);if(t.length===0)throw new Error("empty hardware information");return{hardwareId:t[0]??0,limitations:t[1]??0}}getSerial(){return this.files.receiveFile(`get${ee(de.SerialNumber)}`,12)}getModuleSerial(t){return this.files.receiveFile(`get${ee(de.SerialSlot1+t-1)}`,7)}}class fc{constructor(t,n){this.input=t,this.output=n,this.label=t.name??n.name??"Joué",t.addEventListener("midimessage",this.handler)}label;callbacks=new Set;handler=t=>{const n=t.data;n&&n[0]===240&&this.callbacks.forEach(a=>a(n))};send(t){this.output.send(t)}listen(t){return this.callbacks.add(t),()=>this.callbacks.delete(t)}close(){this.input.removeEventListener("midimessage",this.handler),this.callbacks.clear()}}const Ca=e=>(e??"").toLowerCase();function pc(e){return Ca(e.name).includes("joue")||Ca(e.name).includes("joué")||Ca(e.manufacturer).includes("joue")}function Qp(e){return Ca(e.name).includes("bootloader")}function Sc(e){const t=Ca(e);return/midi(in|out)2|port 2|\b2\b|ctrl|control/.test(t)?0:1}function vc(e){return Ca(e).replace(/midi ?in|midi ?out|input|output|\bin\b|\bout\b/g,"").replace(/\s+/g," ").trim()}function Jp(e){const t=[...e.inputs.values()].filter(pc),n=[...e.outputs.values()].filter(pc),a=[];for(const r of t){const l=vc(r.name??""),s=n.filter(u=>vc(u.name??"")===l),o=n.filter(u=>u.manufacturer&&u.manufacturer===r.manufacturer);for(const u of s.length?s:o.length?o:n)a.push({input:r,output:u,bootloader:Qp(r)})}a.sort((r,l)=>Sc(r.input.name??"")-Sc(l.input.name??""));const i=new Set;return a.filter(r=>{const l=`${r.input.id}|${r.output.id}`;return i.has(l)?!1:(i.add(l),!0)})}function qp(){try{return window.self!==window.top}catch{return!0}}function t1(){const e=document,t=e.permissionsPolicy??e.featurePolicy;try{return t?t.allowsFeature("midi"):null}catch{return null}}async function e1(){if(typeof window<"u"&&!window.isSecureContext)return{support:"insecure",access:null};if(typeof navigator>"u"||!("requestMIDIAccess"in navigator))return{support:"unsupported",access:null};if(typeof document<"u"&&t1()===!1)return{support:"blocked",access:null};try{return{support:"ok",access:await navigator.requestMIDIAccess({sysex:!0})}}catch(e){const t=e instanceof Error?`${e.name}: ${e.message}`:String(e),n=e instanceof DOMException?e.name:"";return{support:n==="SecurityError"&&qp()?"blocked":n==="NotAllowedError"||n==="SecurityError"?"denied":"failed",access:null,error:t}}}async function n1(e,t=700){for(const n of e){if(n.bootloader)continue;try{await n.input.open(),await n.output.open()}catch{continue}const a=new fc(n.input,n.output),i=new hc(yc(n),a,t);try{await i.getHardwareInfo(),i.close();const r=new fc(n.input,n.output);return{device:new hc(yc(n),r),pair:n}}catch{i.close();try{await n.input.close(),await n.output.close()}catch{}}}return null}function yc(e){return(e.input.name??"Joué").replace(/MIDIIN\d*\s*\(([^)]*)\)/i,"$1").replace(/\s*(port|in|input)\s*\d*$/i,"").trim().replace(/^joue/i,"Joué")||"Joué"}const a1={fields:[{count:1,offset:0,path:"midiElementData.midiHeader.type",type:"u8"},{count:1,offset:1,path:"midiElementData.midiHeader.version",type:"u8"},{count:1,offset:2,path:"midiElementData.id",type:"u8"},{count:1,offset:3,path:"midiElementData.layerNbr",type:"u8"},{count:1,offset:4,path:"midiElementData.x",type:"u16"},{count:1,offset:6,path:"midiElementData.width",type:"u16"},{count:1,offset:8,path:"midiElementData.y",type:"u16"},{count:1,offset:10,path:"midiElementData.height",type:"u16"},{count:1,offset:12,path:"midiElementData.z",type:"u8"},{count:1,offset:13,path:"midiElementData.depth",type:"u8"},{count:1,offset:14,path:"midiElementData.options",type:"u16"},{count:1,offset:16,path:"actuatorData.targetId",type:"u8"},{count:1,offset:17,path:"actuatorData.velocityMin",type:"u8"},{count:1,offset:18,path:"actuatorData.velocityMax",type:"u8"},{count:1,offset:19,path:"actuatorData.reserved",type:"u8"}],size:20},i1={fields:[{count:1,offset:0,path:"midiElementData.midiHeader.type",type:"u8"},{count:1,offset:1,path:"midiElementData.midiHeader.version",type:"u8"},{count:1,offset:2,path:"midiElementData.id",type:"u8"},{count:1,offset:3,path:"midiElementData.layerNbr",type:"u8"},{count:1,offset:4,path:"midiElementData.x",type:"u16"},{count:1,offset:6,path:"midiElementData.width",type:"u16"},{count:1,offset:8,path:"midiElementData.y",type:"u16"},{count:1,offset:10,path:"midiElementData.height",type:"u16"},{count:1,offset:12,path:"midiElementData.z",type:"u8"},{count:1,offset:13,path:"midiElementData.depth",type:"u8"},{count:1,offset:14,path:"midiElementData.options",type:"u16"},{count:1,offset:16,path:"areaData.controlX",type:"u8"},{count:1,offset:17,path:"areaData.channelX",type:"u8"},{count:1,offset:18,path:"areaData.areaOptionsX",type:"u8"},{count:1,offset:19,path:"areaData.minX",type:"u8"},{count:1,offset:20,path:"areaData.maxX",type:"u8"},{count:1,offset:21,path:"areaData.controlY",type:"u8"},{count:1,offset:22,path:"areaData.channelY",type:"u8"},{count:1,offset:23,path:"areaData.areaOptionsY",type:"u8"},{count:1,offset:24,path:"areaData.minY",type:"u8"},{count:1,offset:25,path:"areaData.maxY",type:"u8"},{count:1,offset:26,path:"areaData.controlZ",type:"u8"},{count:1,offset:27,path:"areaData.channelZ",type:"u8"},{count:1,offset:28,path:"areaData.areaOptionsZ",type:"u8"},{count:1,offset:29,path:"areaData.minZ",type:"u8"},{count:1,offset:30,path:"areaData.maxZ",type:"u8"},{count:1,offset:31,path:"areaData.reserved",type:"u8"}],size:32},r1={fields:[{count:1,offset:0,path:"midiElementData.midiHeader.type",type:"u8"},{count:1,offset:1,path:"midiElementData.midiHeader.version",type:"u8"},{count:1,offset:2,path:"midiElementData.id",type:"u8"},{count:1,offset:3,path:"midiElementData.layerNbr",type:"u8"},{count:1,offset:4,path:"midiElementData.x",type:"u16"},{count:1,offset:6,path:"midiElementData.width",type:"u16"},{count:1,offset:8,path:"midiElementData.y",type:"u16"},{count:1,offset:10,path:"midiElementData.height",type:"u16"},{count:1,offset:12,path:"midiElementData.z",type:"u8"},{count:1,offset:13,path:"midiElementData.depth",type:"u8"},{count:1,offset:14,path:"midiElementData.options",type:"u16"},{count:1,offset:16,path:"areaData.controlX",type:"u8"},{count:1,offset:17,path:"areaData.controlY",type:"u8"},{count:1,offset:18,path:"areaData.controlZ",type:"u8"},{count:1,offset:19,path:"areaData.channelX",type:"u8"},{count:1,offset:20,path:"areaData.channelY",type:"u8"},{count:1,offset:21,path:"areaData.channelZ",type:"u8"},{count:1,offset:22,path:"areaData.areaOptionsX",type:"u8"},{count:1,offset:23,path:"areaData.areaOptionsY",type:"u8"},{count:1,offset:24,path:"areaData.areaOptionsZ",type:"u8"},{count:1,offset:25,path:"areaData.demultiplierX",type:"u8"},{count:1,offset:26,path:"areaData.demultiplierY",type:"u8"},{count:1,offset:27,path:"areaData.demultiplierZ",type:"u8"},{count:1,offset:28,path:"areaData.controlFineX",type:"u8"},{count:1,offset:29,path:"areaData.controlFineY",type:"u8"},{count:1,offset:30,path:"areaData.controlFineZ",type:"u8"},{count:1,offset:31,path:"areaData.originX",type:"u8"},{count:1,offset:32,path:"areaData.originY",type:"u8"},{count:1,offset:33,path:"areaData.originZ",type:"u8"},{count:1,offset:34,path:"areaData.minX",type:"i16"},{count:1,offset:36,path:"areaData.minY",type:"i16"},{count:1,offset:38,path:"areaData.minZ",type:"i16"},{count:1,offset:40,path:"areaData.maxX",type:"i16"},{count:1,offset:42,path:"areaData.maxY",type:"i16"},{count:1,offset:44,path:"areaData.maxZ",type:"i16"},{count:2,offset:46,path:"areaData.reserved",type:"u8"}],size:48},l1={fields:[{count:1,offset:0,path:"midiElementPolygonData6.polygonData.midiHeader.type",type:"u8"},{count:1,offset:1,path:"midiElementPolygonData6.polygonData.midiHeader.version",type:"u8"},{count:1,offset:2,path:"midiElementPolygonData6.polygonData.magic",type:"u8"},{count:1,offset:3,path:"midiElementPolygonData6.polygonData.vertexNbr",type:"u8"},{count:1,offset:4,path:"midiElementPolygonData6.polygonData.id",type:"u8"},{count:1,offset:5,path:"midiElementPolygonData6.polygonData.layerNbr",type:"u8"},{count:1,offset:6,path:"midiElementPolygonData6.polygonData.options",type:"u16"},{count:6,offset:8,path:"midiElementPolygonData6.vertexX",type:"u16"},{count:6,offset:20,path:"midiElementPolygonData6.vertexY",type:"u16"},{count:1,offset:32,path:"midiElementPolygonData6.z",type:"u8"},{count:1,offset:33,path:"midiElementPolygonData6.depth",type:"u8"},{count:2,offset:34,path:"midiElementPolygonData6.reserved",type:"u8"},{count:1,offset:36,path:"areaPiePartData.controlAxis1",type:"u8"},{count:1,offset:37,path:"areaPiePartData.controlAxis2",type:"u8"},{count:1,offset:38,path:"areaPiePartData.controlAxisZ",type:"u8"},{count:1,offset:39,path:"areaPiePartData.channelAxis1",type:"u8"},{count:1,offset:40,path:"areaPiePartData.channelAxis2",type:"u8"},{count:1,offset:41,path:"areaPiePartData.channelAxisZ",type:"u8"},{count:1,offset:42,path:"areaPiePartData.valueMinAxis1",type:"u8"},{count:1,offset:43,path:"areaPiePartData.valueMaxAxis1",type:"u8"},{count:1,offset:44,path:"areaPiePartData.valueMinAxis2",type:"u8"},{count:1,offset:45,path:"areaPiePartData.valueMaxAxis2",type:"u8"},{count:1,offset:46,path:"areaPiePartData.valueMinAxisZ",type:"u8"},{count:1,offset:47,path:"areaPiePartData.valueMaxAxisZ",type:"u8"},{count:1,offset:48,path:"areaPiePartData.angleShift",type:"i16"},{count:1,offset:50,path:"areaPiePartData.angleOpening",type:"i16"},{count:1,offset:52,path:"areaPiePartData.maxRho",type:"i16"},{count:1,offset:54,path:"areaPiePartData.Options",type:"u8"},{count:1,offset:55,path:"areaPiePartData.reserved",type:"u8"}],size:56},o1={fields:[{count:1,offset:0,path:"midiElementData.midiHeader.type",type:"u8"},{count:1,offset:1,path:"midiElementData.midiHeader.version",type:"u8"},{count:1,offset:2,path:"midiElementData.id",type:"u8"},{count:1,offset:3,path:"midiElementData.layerNbr",type:"u8"},{count:1,offset:4,path:"midiElementData.x",type:"u16"},{count:1,offset:6,path:"midiElementData.width",type:"u16"},{count:1,offset:8,path:"midiElementData.y",type:"u16"},{count:1,offset:10,path:"midiElementData.height",type:"u16"},{count:1,offset:12,path:"midiElementData.z",type:"u8"},{count:1,offset:13,path:"midiElementData.depth",type:"u8"},{count:1,offset:14,path:"midiElementData.options",type:"u16"},{count:1,offset:16,path:"buttonData.commandSize",type:"u16"},{count:2,offset:18,path:"buttonData.reserved",type:"u8"}],size:20},s1={fields:[{count:1,offset:0,path:"midiElementData.midiHeader.type",type:"u8"},{count:1,offset:1,path:"midiElementData.midiHeader.version",type:"u8"},{count:1,offset:2,path:"midiElementData.id",type:"u8"},{count:1,offset:3,path:"midiElementData.layerNbr",type:"u8"},{count:1,offset:4,path:"midiElementData.x",type:"u16"},{count:1,offset:6,path:"midiElementData.width",type:"u16"},{count:1,offset:8,path:"midiElementData.y",type:"u16"},{count:1,offset:10,path:"midiElementData.height",type:"u16"},{count:1,offset:12,path:"midiElementData.z",type:"u8"},{count:1,offset:13,path:"midiElementData.depth",type:"u8"},{count:1,offset:14,path:"midiElementData.options",type:"u16"},{count:1,offset:16,path:"controlData.channel",type:"u8"},{count:1,offset:17,path:"controlData.control_pitchbendMSB",type:"u8"},{count:1,offset:18,path:"controlData.value_pitchbendLSB",type:"u8"},{count:1,offset:19,path:"controlData.mode",type:"u8"}],size:20},u1={fields:[{count:1,offset:0,path:"midiElementData.midiHeader.type",type:"u8"},{count:1,offset:1,path:"midiElementData.midiHeader.version",type:"u8"},{count:1,offset:2,path:"midiElementData.id",type:"u8"},{count:1,offset:3,path:"midiElementData.layerNbr",type:"u8"},{count:1,offset:4,path:"midiElementData.x",type:"u16"},{count:1,offset:6,path:"midiElementData.width",type:"u16"},{count:1,offset:8,path:"midiElementData.y",type:"u16"},{count:1,offset:10,path:"midiElementData.height",type:"u16"},{count:1,offset:12,path:"midiElementData.z",type:"u8"},{count:1,offset:13,path:"midiElementData.depth",type:"u8"},{count:1,offset:14,path:"midiElementData.options",type:"u16"},{count:1,offset:16,path:"controlData.channel",type:"u8"},{count:1,offset:17,path:"controlData.control_pitchbendMSB",type:"u8"},{count:1,offset:18,path:"controlData.value_pitchbendLSB",type:"u8"},{count:1,offset:19,path:"controlData.controlOptions",type:"u8"},{count:1,offset:20,path:"controlData.controlFine",type:"u8"},{count:3,offset:21,path:"controlData.reserved",type:"u8"},{count:1,offset:24,path:"controlData.min",type:"i16"},{count:1,offset:26,path:"controlData.max",type:"i16"}],size:28},c1={fields:[{count:1,offset:0,path:"midiElementData.midiHeader.type",type:"u8"},{count:1,offset:1,path:"midiElementData.midiHeader.version",type:"u8"},{count:1,offset:2,path:"midiElementData.id",type:"u8"},{count:1,offset:3,path:"midiElementData.layerNbr",type:"u8"},{count:1,offset:4,path:"midiElementData.x",type:"u16"},{count:1,offset:6,path:"midiElementData.width",type:"u16"},{count:1,offset:8,path:"midiElementData.y",type:"u16"},{count:1,offset:10,path:"midiElementData.height",type:"u16"},{count:1,offset:12,path:"midiElementData.z",type:"u8"},{count:1,offset:13,path:"midiElementData.depth",type:"u8"},{count:1,offset:14,path:"midiElementData.options",type:"u16"},{count:1,offset:16,path:"glideData.pitchRange",type:"u8"},{count:1,offset:17,path:"glideData.elementNbr",type:"u8"},{count:1,offset:18,path:"glideData.size",type:"u8"},{count:1,offset:19,path:"glideData.reserved",type:"u8"}],size:20},d1={fields:[{count:1,offset:0,path:"instrumentHeader.midiHeader.type",type:"u8"},{count:1,offset:1,path:"instrumentHeader.midiHeader.version",type:"u8"},{count:1,offset:2,path:"instrumentHeader.color",type:"u8"},{count:1,offset:3,path:"instrumentHeader.reserved",type:"u8"},{count:1,offset:4,path:"checksum",type:"u8"},{count:1,offset:5,path:"revision",type:"u8"},{count:1,offset:6,path:"tagPosition",type:"u8"},{count:1,offset:7,path:"reserved",type:"u8"},{count:1,offset:8,path:"midiElementNbr",type:"u8"},{count:1,offset:9,path:"options",type:"u8"},{count:1,offset:10,path:"size",type:"u16"}],size:12},g1={fields:[{count:1,offset:0,path:"midiHeader.type",type:"u8"},{count:1,offset:1,path:"midiHeader.version",type:"u8"},{count:1,offset:2,path:"color",type:"u8"},{count:1,offset:3,path:"reserved",type:"u8"}],size:4},m1={fields:[{count:1,offset:0,path:"midiElementData.midiHeader.type",type:"u8"},{count:1,offset:1,path:"midiElementData.midiHeader.version",type:"u8"},{count:1,offset:2,path:"midiElementData.id",type:"u8"},{count:1,offset:3,path:"midiElementData.layerNbr",type:"u8"},{count:1,offset:4,path:"midiElementData.x",type:"u16"},{count:1,offset:6,path:"midiElementData.width",type:"u16"},{count:1,offset:8,path:"midiElementData.y",type:"u16"},{count:1,offset:10,path:"midiElementData.height",type:"u16"},{count:1,offset:12,path:"midiElementData.z",type:"u8"},{count:1,offset:13,path:"midiElementData.depth",type:"u8"},{count:1,offset:14,path:"midiElementData.options",type:"u16"},{count:1,offset:16,path:"keyData.padData.note",type:"u8"},{count:1,offset:17,path:"keyData.padData.channel",type:"u8"},{count:1,offset:18,path:"keyData.padData.velocityMin",type:"u8"},{count:1,offset:19,path:"keyData.padData.velocityMax",type:"u8"},{count:1,offset:20,path:"keyData.yControlMin",type:"i16"},{count:1,offset:22,path:"keyData.yControlMax",type:"i16"},{count:1,offset:24,path:"keyData.yControlOrigin",type:"i16"},{count:1,offset:26,path:"keyData.yControl",type:"u8"},{count:1,offset:27,path:"keyData.reserved",type:"u8"}],size:28},h1={fields:[{count:1,offset:0,path:"midiElementData.midiHeader.type",type:"u8"},{count:1,offset:1,path:"midiElementData.midiHeader.version",type:"u8"},{count:1,offset:2,path:"midiElementData.id",type:"u8"},{count:1,offset:3,path:"midiElementData.layerNbr",type:"u8"},{count:1,offset:4,path:"midiElementData.x",type:"u16"},{count:1,offset:6,path:"midiElementData.width",type:"u16"},{count:1,offset:8,path:"midiElementData.y",type:"u16"},{count:1,offset:10,path:"midiElementData.height",type:"u16"},{count:1,offset:12,path:"midiElementData.z",type:"u8"},{count:1,offset:13,path:"midiElementData.depth",type:"u8"},{count:1,offset:14,path:"midiElementData.options",type:"u16"},{count:1,offset:16,path:"keyData.padData.note",type:"u8"},{count:1,offset:17,path:"keyData.padData.channel",type:"u8"},{count:1,offset:18,path:"keyData.padData.velocityMin",type:"u8"},{count:1,offset:19,path:"keyData.padData.velocityMax",type:"u8"},{count:1,offset:20,path:"keyData.yControlMin",type:"i16"},{count:1,offset:22,path:"keyData.yControlMax",type:"i16"},{count:1,offset:24,path:"keyData.yControlOrigin",type:"i16"},{count:1,offset:26,path:"keyData.yControl",type:"u8"},{count:1,offset:27,path:"keyData.yControlFine",type:"u8"}],size:28},f1={fields:[{count:1,offset:0,path:"midiHeader.type",type:"u8"},{count:1,offset:1,path:"midiHeader.version",type:"u8"},{count:1,offset:2,path:"id",type:"u8"},{count:1,offset:3,path:"layerNbr",type:"u8"},{count:1,offset:4,path:"x",type:"u16"},{count:1,offset:6,path:"width",type:"u16"},{count:1,offset:8,path:"y",type:"u16"},{count:1,offset:10,path:"height",type:"u16"},{count:1,offset:12,path:"z",type:"u8"},{count:1,offset:13,path:"depth",type:"u8"},{count:1,offset:14,path:"options",type:"u16"}],size:16},p1={fields:[{count:1,offset:0,path:"midiHeader.type",type:"u8"},{count:1,offset:1,path:"midiHeader.version",type:"u8"},{count:1,offset:2,path:"magic",type:"u8"},{count:1,offset:3,path:"vertexNbr",type:"u8"},{count:1,offset:4,path:"id",type:"u8"},{count:1,offset:5,path:"layerNbr",type:"u8"},{count:1,offset:6,path:"options",type:"u16"}],size:8},S1={fields:[{count:1,offset:0,path:"polygonData.midiHeader.type",type:"u8"},{count:1,offset:1,path:"polygonData.midiHeader.version",type:"u8"},{count:1,offset:2,path:"polygonData.magic",type:"u8"},{count:1,offset:3,path:"polygonData.vertexNbr",type:"u8"},{count:1,offset:4,path:"polygonData.id",type:"u8"},{count:1,offset:5,path:"polygonData.layerNbr",type:"u8"},{count:1,offset:6,path:"polygonData.options",type:"u16"},{count:6,offset:8,path:"vertexX",type:"u16"},{count:6,offset:20,path:"vertexY",type:"u16"},{count:1,offset:32,path:"z",type:"u8"},{count:1,offset:33,path:"depth",type:"u8"},{count:2,offset:34,path:"reserved",type:"u8"}],size:36},v1={fields:[{count:1,offset:0,path:"type",type:"u8"},{count:1,offset:1,path:"version",type:"u8"}],size:2},y1={fields:[{count:1,offset:0,path:"midiElementData.midiHeader.type",type:"u8"},{count:1,offset:1,path:"midiElementData.midiHeader.version",type:"u8"},{count:1,offset:2,path:"midiElementData.id",type:"u8"},{count:1,offset:3,path:"midiElementData.layerNbr",type:"u8"},{count:1,offset:4,path:"midiElementData.x",type:"u16"},{count:1,offset:6,path:"midiElementData.width",type:"u16"},{count:1,offset:8,path:"midiElementData.y",type:"u16"},{count:1,offset:10,path:"midiElementData.height",type:"u16"},{count:1,offset:12,path:"midiElementData.z",type:"u8"},{count:1,offset:13,path:"midiElementData.depth",type:"u8"},{count:1,offset:14,path:"midiElementData.options",type:"u16"},{count:1,offset:16,path:"multipointData.controlX",type:"u8"},{count:1,offset:17,path:"multipointData.channelX",type:"u8"},{count:1,offset:18,path:"multipointData.multipointOptionsX",type:"u8"},{count:1,offset:19,path:"multipointData.minX",type:"u8"},{count:1,offset:20,path:"multipointData.maxX",type:"u8"},{count:1,offset:21,path:"multipointData.controlY",type:"u8"},{count:1,offset:22,path:"multipointData.channelY",type:"u8"},{count:1,offset:23,path:"multipointData.multipointOptionsY",type:"u8"},{count:1,offset:24,path:"multipointData.minY",type:"u8"},{count:1,offset:25,path:"multipointData.maxY",type:"u8"},{count:1,offset:26,path:"multipointData.controlZ",type:"u8"},{count:1,offset:27,path:"multipointData.channelZ",type:"u8"},{count:1,offset:28,path:"multipointData.multipointOptionsZ",type:"u8"},{count:1,offset:29,path:"multipointData.minZ",type:"u8"},{count:1,offset:30,path:"multipointData.maxZ",type:"u8"},{count:1,offset:31,path:"multipointData.reserved",type:"u8"}],size:32},C1={fields:[{count:1,offset:0,path:"midiElementData.midiHeader.type",type:"u8"},{count:1,offset:1,path:"midiElementData.midiHeader.version",type:"u8"},{count:1,offset:2,path:"midiElementData.id",type:"u8"},{count:1,offset:3,path:"midiElementData.layerNbr",type:"u8"},{count:1,offset:4,path:"midiElementData.x",type:"u16"},{count:1,offset:6,path:"midiElementData.width",type:"u16"},{count:1,offset:8,path:"midiElementData.y",type:"u16"},{count:1,offset:10,path:"midiElementData.height",type:"u16"},{count:1,offset:12,path:"midiElementData.z",type:"u8"},{count:1,offset:13,path:"midiElementData.depth",type:"u8"},{count:1,offset:14,path:"midiElementData.options",type:"u16"},{count:1,offset:16,path:"padData.note",type:"u8"},{count:1,offset:17,path:"padData.channel",type:"u8"},{count:1,offset:18,path:"padData.velocityMin",type:"u8"},{count:1,offset:19,path:"padData.velocityMax",type:"u8"}],size:20},A1={fields:[{count:1,offset:0,path:"polygonData.polygonData.midiHeader.type",type:"u8"},{count:1,offset:1,path:"polygonData.polygonData.midiHeader.version",type:"u8"},{count:1,offset:2,path:"polygonData.polygonData.magic",type:"u8"},{count:1,offset:3,path:"polygonData.polygonData.vertexNbr",type:"u8"},{count:1,offset:4,path:"polygonData.polygonData.id",type:"u8"},{count:1,offset:5,path:"polygonData.polygonData.layerNbr",type:"u8"},{count:1,offset:6,path:"polygonData.polygonData.options",type:"u16"},{count:6,offset:8,path:"polygonData.vertexX",type:"u16"},{count:6,offset:20,path:"polygonData.vertexY",type:"u16"},{count:1,offset:32,path:"polygonData.z",type:"u8"},{count:1,offset:33,path:"polygonData.depth",type:"u8"},{count:2,offset:34,path:"polygonData.reserved",type:"u8"},{count:1,offset:36,path:"padData.note",type:"u8"},{count:1,offset:37,path:"padData.channel",type:"u8"},{count:1,offset:38,path:"padData.velocityMin",type:"u8"},{count:1,offset:39,path:"padData.velocityMax",type:"u8"}],size:40},b1={fields:[{count:1,offset:0,path:"midiElementData.midiHeader.type",type:"u8"},{count:1,offset:1,path:"midiElementData.midiHeader.version",type:"u8"},{count:1,offset:2,path:"midiElementData.id",type:"u8"},{count:1,offset:3,path:"midiElementData.layerNbr",type:"u8"},{count:1,offset:4,path:"midiElementData.x",type:"u16"},{count:1,offset:6,path:"midiElementData.width",type:"u16"},{count:1,offset:8,path:"midiElementData.y",type:"u16"},{count:1,offset:10,path:"midiElementData.height",type:"u16"},{count:1,offset:12,path:"midiElementData.z",type:"u8"},{count:1,offset:13,path:"midiElementData.depth",type:"u8"},{count:1,offset:14,path:"midiElementData.options",type:"u16"},{count:1,offset:16,path:"roundData.control",type:"u8"},{count:1,offset:17,path:"roundData.channel",type:"u8"},{count:1,offset:18,path:"roundData.nbLoop",type:"u8"},{count:1,offset:19,path:"roundData.min",type:"u8"},{count:1,offset:20,path:"roundData.max",type:"u8"},{count:1,offset:21,path:"roundData.reserved",type:"u8"},{count:1,offset:22,path:"roundData.length",type:"u16"}],size:24},x1={fields:[{count:1,offset:0,path:"midiElementData.midiHeader.type",type:"u8"},{count:1,offset:1,path:"midiElementData.midiHeader.version",type:"u8"},{count:1,offset:2,path:"midiElementData.id",type:"u8"},{count:1,offset:3,path:"midiElementData.layerNbr",type:"u8"},{count:1,offset:4,path:"midiElementData.x",type:"u16"},{count:1,offset:6,path:"midiElementData.width",type:"u16"},{count:1,offset:8,path:"midiElementData.y",type:"u16"},{count:1,offset:10,path:"midiElementData.height",type:"u16"},{count:1,offset:12,path:"midiElementData.z",type:"u8"},{count:1,offset:13,path:"midiElementData.depth",type:"u8"},{count:1,offset:14,path:"midiElementData.options",type:"u16"},{count:1,offset:16,path:"roundData.control",type:"u8"},{count:1,offset:17,path:"roundData.channel",type:"u8"},{count:1,offset:18,path:"roundData.demultiplier",type:"u8"},{count:1,offset:19,path:"roundData.controlFine",type:"u8"},{count:1,offset:20,path:"roundData.min",type:"i16"},{count:1,offset:22,path:"roundData.max",type:"i16"},{count:1,offset:24,path:"roundData.length",type:"u16"},{count:1,offset:26,path:"roundData.roundOptions",type:"u8"},{count:1,offset:27,path:"roundData.reserved",type:"u8"}],size:28},M1={fields:[{count:1,offset:0,path:"midiHeader.type",type:"u8"},{count:1,offset:1,path:"midiHeader.version",type:"u8"},{count:1,offset:2,path:"commandSize",type:"u16"}],size:4},D1={fields:[{count:1,offset:0,path:"midiElementData.midiHeader.type",type:"u8"},{count:1,offset:1,path:"midiElementData.midiHeader.version",type:"u8"},{count:1,offset:2,path:"midiElementData.id",type:"u8"},{count:1,offset:3,path:"midiElementData.layerNbr",type:"u8"},{count:1,offset:4,path:"midiElementData.x",type:"u16"},{count:1,offset:6,path:"midiElementData.width",type:"u16"},{count:1,offset:8,path:"midiElementData.y",type:"u16"},{count:1,offset:10,path:"midiElementData.height",type:"u16"},{count:1,offset:12,path:"midiElementData.z",type:"u8"},{count:1,offset:13,path:"midiElementData.depth",type:"u8"},{count:1,offset:14,path:"midiElementData.options",type:"u16"},{count:1,offset:16,path:"stringData.note",type:"u8"},{count:1,offset:17,path:"stringData.channel",type:"u8"},{count:1,offset:18,path:"stringData.fretNbr",type:"u8"},{count:1,offset:19,path:"stringData.stringOptions",type:"u8"},{count:1,offset:20,path:"stringData.velocityMin",type:"u8"},{count:1,offset:21,path:"stringData.velocityMax",type:"u8"},{count:1,offset:22,path:"stringData.stringSize",type:"u16"}],size:24},E1={fields:[{count:1,offset:0,path:"midiElementData.midiHeader.type",type:"u8"},{count:1,offset:1,path:"midiElementData.midiHeader.version",type:"u8"},{count:1,offset:2,path:"midiElementData.id",type:"u8"},{count:1,offset:3,path:"midiElementData.layerNbr",type:"u8"},{count:1,offset:4,path:"midiElementData.x",type:"u16"},{count:1,offset:6,path:"midiElementData.width",type:"u16"},{count:1,offset:8,path:"midiElementData.y",type:"u16"},{count:1,offset:10,path:"midiElementData.height",type:"u16"},{count:1,offset:12,path:"midiElementData.z",type:"u8"},{count:1,offset:13,path:"midiElementData.depth",type:"u8"},{count:1,offset:14,path:"midiElementData.options",type:"u16"},{count:1,offset:16,path:"stripData.control",type:"u8"},{count:1,offset:17,path:"stripData.channel",type:"u8"},{count:1,offset:18,path:"stripData.stripOptions",type:"u8"},{count:1,offset:19,path:"stripData.reserved",type:"u8"},{count:1,offset:20,path:"stripData.min",type:"i16"},{count:1,offset:22,path:"stripData.max",type:"i16"}],size:24},N1={fields:[{count:1,offset:0,path:"midiElementData.midiHeader.type",type:"u8"},{count:1,offset:1,path:"midiElementData.midiHeader.version",type:"u8"},{count:1,offset:2,path:"midiElementData.id",type:"u8"},{count:1,offset:3,path:"midiElementData.layerNbr",type:"u8"},{count:1,offset:4,path:"midiElementData.x",type:"u16"},{count:1,offset:6,path:"midiElementData.width",type:"u16"},{count:1,offset:8,path:"midiElementData.y",type:"u16"},{count:1,offset:10,path:"midiElementData.height",type:"u16"},{count:1,offset:12,path:"midiElementData.z",type:"u8"},{count:1,offset:13,path:"midiElementData.depth",type:"u8"},{count:1,offset:14,path:"midiElementData.options",type:"u16"},{count:1,offset:16,path:"stripData.control",type:"u8"},{count:1,offset:17,path:"stripData.channel",type:"u8"},{count:1,offset:18,path:"stripData.stripOptions",type:"u8"},{count:1,offset:19,path:"stripData.demultiplier",type:"u8"},{count:1,offset:20,path:"stripData.min",type:"i16"},{count:1,offset:22,path:"stripData.max",type:"i16"},{count:1,offset:24,path:"stripData.controlFine",type:"u8"},{count:3,offset:25,path:"stripData.reserved",type:"u8"}],size:28},w1={fields:[{count:1,offset:0,path:"targetId",type:"u8"},{count:1,offset:1,path:"velocityMin",type:"u8"},{count:1,offset:2,path:"velocityMax",type:"u8"},{count:1,offset:3,path:"reserved",type:"u8"}],size:4},P1={fields:[{count:1,offset:0,path:"controlX",type:"u8"},{count:1,offset:1,path:"channelX",type:"u8"},{count:1,offset:2,path:"areaOptionsX",type:"u8"},{count:1,offset:3,path:"minX",type:"u8"},{count:1,offset:4,path:"maxX",type:"u8"},{count:1,offset:5,path:"controlY",type:"u8"},{count:1,offset:6,path:"channelY",type:"u8"},{count:1,offset:7,path:"areaOptionsY",type:"u8"},{count:1,offset:8,path:"minY",type:"u8"},{count:1,offset:9,path:"maxY",type:"u8"},{count:1,offset:10,path:"controlZ",type:"u8"},{count:1,offset:11,path:"channelZ",type:"u8"},{count:1,offset:12,path:"areaOptionsZ",type:"u8"},{count:1,offset:13,path:"minZ",type:"u8"},{count:1,offset:14,path:"maxZ",type:"u8"},{count:1,offset:15,path:"reserved",type:"u8"}],size:16},V1={fields:[{count:1,offset:0,path:"controlX",type:"u8"},{count:1,offset:1,path:"controlY",type:"u8"},{count:1,offset:2,path:"controlZ",type:"u8"},{count:1,offset:3,path:"channelX",type:"u8"},{count:1,offset:4,path:"channelY",type:"u8"},{count:1,offset:5,path:"channelZ",type:"u8"},{count:1,offset:6,path:"areaOptionsX",type:"u8"},{count:1,offset:7,path:"areaOptionsY",type:"u8"},{count:1,offset:8,path:"areaOptionsZ",type:"u8"},{count:1,offset:9,path:"demultiplierX",type:"u8"},{count:1,offset:10,path:"demultiplierY",type:"u8"},{count:1,offset:11,path:"demultiplierZ",type:"u8"},{count:1,offset:12,path:"controlFineX",type:"u8"},{count:1,offset:13,path:"controlFineY",type:"u8"},{count:1,offset:14,path:"controlFineZ",type:"u8"},{count:1,offset:15,path:"originX",type:"u8"},{count:1,offset:16,path:"originY",type:"u8"},{count:1,offset:17,path:"originZ",type:"u8"},{count:1,offset:18,path:"minX",type:"i16"},{count:1,offset:20,path:"minY",type:"i16"},{count:1,offset:22,path:"minZ",type:"i16"},{count:1,offset:24,path:"maxX",type:"i16"},{count:1,offset:26,path:"maxY",type:"i16"},{count:1,offset:28,path:"maxZ",type:"i16"},{count:2,offset:30,path:"reserved",type:"u8"}],size:32},O1={fields:[{count:1,offset:0,path:"controlAxis1",type:"u8"},{count:1,offset:1,path:"controlAxis2",type:"u8"},{count:1,offset:2,path:"controlAxisZ",type:"u8"},{count:1,offset:3,path:"channelAxis1",type:"u8"},{count:1,offset:4,path:"channelAxis2",type:"u8"},{count:1,offset:5,path:"channelAxisZ",type:"u8"},{count:1,offset:6,path:"valueMinAxis1",type:"u8"},{count:1,offset:7,path:"valueMaxAxis1",type:"u8"},{count:1,offset:8,path:"valueMinAxis2",type:"u8"},{count:1,offset:9,path:"valueMaxAxis2",type:"u8"},{count:1,offset:10,path:"valueMinAxisZ",type:"u8"},{count:1,offset:11,path:"valueMaxAxisZ",type:"u8"},{count:1,offset:12,path:"angleShift",type:"i16"},{count:1,offset:14,path:"angleOpening",type:"i16"},{count:1,offset:16,path:"maxRho",type:"i16"},{count:1,offset:18,path:"Options",type:"u8"},{count:1,offset:19,path:"reserved",type:"u8"}],size:20},R1={fields:[{count:1,offset:0,path:"commandSize",type:"u16"},{count:2,offset:2,path:"reserved",type:"u8"}],size:4},k1={fields:[{count:1,offset:0,path:"channel",type:"u8"},{count:1,offset:1,path:"control_pitchbendMSB",type:"u8"},{count:1,offset:2,path:"value_pitchbendLSB",type:"u8"},{count:1,offset:3,path:"mode",type:"u8"}],size:4},L1={fields:[{count:1,offset:0,path:"channel",type:"u8"},{count:1,offset:1,path:"control_pitchbendMSB",type:"u8"},{count:1,offset:2,path:"value_pitchbendLSB",type:"u8"},{count:1,offset:3,path:"controlOptions",type:"u8"},{count:1,offset:4,path:"controlFine",type:"u8"},{count:3,offset:5,path:"reserved",type:"u8"},{count:1,offset:8,path:"min",type:"i16"},{count:1,offset:10,path:"max",type:"i16"}],size:12},I1={fields:[{count:1,offset:0,path:"pitchRange",type:"u8"},{count:1,offset:1,path:"elementNbr",type:"u8"},{count:1,offset:2,path:"size",type:"u8"},{count:1,offset:3,path:"reserved",type:"u8"}],size:4},B1={fields:[{count:1,offset:0,path:"padData.note",type:"u8"},{count:1,offset:1,path:"padData.channel",type:"u8"},{count:1,offset:2,path:"padData.velocityMin",type:"u8"},{count:1,offset:3,path:"padData.velocityMax",type:"u8"},{count:1,offset:4,path:"yControlMin",type:"i16"},{count:1,offset:6,path:"yControlMax",type:"i16"},{count:1,offset:8,path:"yControlOrigin",type:"i16"},{count:1,offset:10,path:"yControl",type:"u8"},{count:1,offset:11,path:"reserved",type:"u8"}],size:12},T1={fields:[{count:1,offset:0,path:"padData.note",type:"u8"},{count:1,offset:1,path:"padData.channel",type:"u8"},{count:1,offset:2,path:"padData.velocityMin",type:"u8"},{count:1,offset:3,path:"padData.velocityMax",type:"u8"},{count:1,offset:4,path:"yControlMin",type:"i16"},{count:1,offset:6,path:"yControlMax",type:"i16"},{count:1,offset:8,path:"yControlOrigin",type:"i16"},{count:1,offset:10,path:"yControl",type:"u8"},{count:1,offset:11,path:"yControlFine",type:"u8"}],size:12},Y1={fields:[{count:1,offset:0,path:"controlX",type:"u8"},{count:1,offset:1,path:"channelX",type:"u8"},{count:1,offset:2,path:"multipointOptionsX",type:"u8"},{count:1,offset:3,path:"minX",type:"u8"},{count:1,offset:4,path:"maxX",type:"u8"},{count:1,offset:5,path:"controlY",type:"u8"},{count:1,offset:6,path:"channelY",type:"u8"},{count:1,offset:7,path:"multipointOptionsY",type:"u8"},{count:1,offset:8,path:"minY",type:"u8"},{count:1,offset:9,path:"maxY",type:"u8"},{count:1,offset:10,path:"controlZ",type:"u8"},{count:1,offset:11,path:"channelZ",type:"u8"},{count:1,offset:12,path:"multipointOptionsZ",type:"u8"},{count:1,offset:13,path:"minZ",type:"u8"},{count:1,offset:14,path:"maxZ",type:"u8"},{count:1,offset:15,path:"reserved",type:"u8"}],size:16},F1={fields:[{count:1,offset:0,path:"note",type:"u8"},{count:1,offset:1,path:"channel",type:"u8"},{count:1,offset:2,path:"velocityMin",type:"u8"},{count:1,offset:3,path:"velocityMax",type:"u8"}],size:4},$1={fields:[{count:1,offset:0,path:"note",type:"u8"},{count:1,offset:1,path:"channel",type:"u8"},{count:1,offset:2,path:"fretNbr",type:"u8"},{count:1,offset:3,path:"stringOptions",type:"u8"},{count:1,offset:4,path:"velocityMin",type:"u8"},{count:1,offset:5,path:"velocityMax",type:"u8"},{count:1,offset:6,path:"stringSize",type:"u16"}],size:8},_1={fields:[{count:1,offset:0,path:"control",type:"u8"},{count:1,offset:1,path:"channel",type:"u8"},{count:1,offset:2,path:"stripOptions",type:"u8"},{count:1,offset:3,path:"reserved",type:"u8"},{count:1,offset:4,path:"min",type:"i16"},{count:1,offset:6,path:"max",type:"i16"}],size:8},z1={fields:[{count:1,offset:0,path:"control",type:"u8"},{count:1,offset:1,path:"channel",type:"u8"},{count:1,offset:2,path:"stripOptions",type:"u8"},{count:1,offset:3,path:"demultiplier",type:"u8"},{count:1,offset:4,path:"min",type:"i16"},{count:1,offset:6,path:"max",type:"i16"},{count:1,offset:8,path:"controlFine",type:"u8"},{count:3,offset:9,path:"reserved",type:"u8"}],size:12},j1={fields:[{count:1,offset:0,path:"control",type:"u8"},{count:1,offset:1,path:"channel",type:"u8"},{count:1,offset:2,path:"nbLoop",type:"u8"},{count:1,offset:3,path:"min",type:"u8"},{count:1,offset:4,path:"max",type:"u8"},{count:1,offset:5,path:"reserved",type:"u8"},{count:1,offset:6,path:"length",type:"u16"}],size:8},H1={fields:[{count:1,offset:0,path:"control",type:"u8"},{count:1,offset:1,path:"channel",type:"u8"},{count:1,offset:2,path:"demultiplier",type:"u8"},{count:1,offset:3,path:"controlFine",type:"u8"},{count:1,offset:4,path:"min",type:"i16"},{count:1,offset:6,path:"max",type:"i16"},{count:1,offset:8,path:"length",type:"u16"},{count:1,offset:10,path:"roundOptions",type:"u8"},{count:1,offset:11,path:"reserved",type:"u8"}],size:12},X1={ActuatorDataV1:a1,AreaDataV1:i1,AreaDataV2:r1,AreaPiePartMixerData:l1,ButtonData:o1,ControlDataV1:s1,ControlDataV2:u1,GlideDataV1:c1,InstrumentData:d1,InstrumentHeader:g1,KeyDataV1:m1,KeyDataV2:h1,MidiElementData:f1,MidiElementPolygonData:p1,MidiElementPolygonData6:S1,MidiHeader:v1,MultipointData:y1,PadData:C1,PadDataPoly6:A1,RoundDataV1:b1,RoundDataV2:x1,ScriptData:M1,StringData:D1,StripDataV1:E1,StripDataV2:N1,_ActuatorDataV1:w1,_AreaDataV1:P1,_AreaDataV2:V1,_AreaPiePartMixerData:O1,_ButtonData:R1,_ControlDataV1:k1,_ControlDataV2:L1,_GlideDataV1:I1,_KeyDataV1:B1,_KeyDataV2:T1,_MultipointData:Y1,_PadData:F1,_StringData:$1,_StripDataV1:_1,_StripDataV2:z1,_roundDataV1:j1,_roundDataV2:H1},Mm=X1,Cc=new Map;function U1(e){let t=Cc.get(e);if(!t){const n=Mm[e];if(!n)throw new Error(`unknown struct ${e}`);t=new Map(n.fields.map(a=>[a.path,a])),Cc.set(e,t)}return t}const Ac={u8:1,i8:1,u16:2,i16:2,u32:4,i32:4};function ct(e){const t=Mm[e];if(!t)throw new Error(`unknown struct ${e}`);return t.size}function W1(e){return typeof e=="boolean"?e?1:0:Number.isFinite(e)?Math.trunc(e):0}class _{struct;bytes;view;fields;constructor(t,n){this.struct=t,this.fields=U1(t);const a=ct(t);if(n){if(n.length<a){const i=new Uint8Array(a);i.set(n),n=i}this.bytes=n}else this.bytes=new Uint8Array(a);this.view=new DataView(this.bytes.buffer,this.bytes.byteOffset,a)}static at(t,n,a){const i=ct(t),r=new Uint8Array(i);return r.set(n.subarray(a,Math.min(n.length,a+i))),new _(t,r)}field(t){const n=this.fields.get(t);if(!n)throw new Error(`${this.struct} has no field ${t}`);return n}set(t,n,a=0){const i=this.field(t);if(a<0||a>=i.count)throw new Error(`${this.struct}.${t}[${a}] out of range`);const r=i.offset+a*Ac[i.type],l=W1(n);switch(i.type){case"u8":this.view.setUint8(r,l&255);break;case"i8":this.view.setInt8(r,l<<24>>24);break;case"u16":this.view.setUint16(r,l&65535,!0);break;case"i16":this.view.setInt16(r,l<<16>>16,!0);break;case"u32":this.view.setUint32(r,l>>>0,!0);break;case"i32":this.view.setInt32(r,l|0,!0);break}}get(t,n=0){const a=this.field(t),i=a.offset+n*Ac[a.type];switch(a.type){case"u8":return this.view.getUint8(i);case"i8":return this.view.getInt8(i);case"u16":return this.view.getUint16(i,!0);case"i16":return this.view.getInt16(i,!0);case"u32":return this.view.getUint32(i,!0);case"i32":return this.view.getInt32(i,!0)}}or(t,n){this.set(t,this.get(t)|n)}}function js(e){const t=e.length+3>>2<<2,n=new Uint8Array(t);for(let a=0;a<e.length;a++)n[a]=e.charCodeAt(a)&255;return n}function Z1(e){const t=e.reduce((i,r)=>i+r.length,0),n=new Uint8Array(t);let a=0;for(const i of e)n.set(i,a),a+=i.length;return n}function Fe(e){if(e==null)return 0;let t=0;for(;t<e.length&&(e[t]===" "||e[t]==="	"||e[t]===`
`||e[t]==="\r");)t++;let n=1;(e[t]==="+"||e[t]==="-")&&(e[t]==="-"&&(n=-1),t++);let a=0,i=!1;for(;t<e.length&&e[t]>="0"&&e[t]<="9"&&(a=a*10+(e.charCodeAt(t)-48),i=!0,!(a>2147483648));)t++;return i?(a*=n,a>2147483647?2147483647:a<-2147483648?-2147483648:a):0}function G1(e){return e!=="0"}function xe(e){return Object.is(e,-0)?"-0.000000":e.toFixed(6)}function Xn(e){return String(Er(e))}function Er(e){return Number.isFinite(e)?Math.trunc(e)|0:0}function $o(e){return e<0?-Math.round(-e):Math.round(e)}function K1(e,t){return e==null||t===null||t===void 0?!1:e.toLowerCase()===t.toLowerCase()}function yn(e){return e==="-inf"?-1e4:e==="inf"?1e4:e==null||!/^\s*[-+]?(\d+\.?\d*|\.\d+)\s*$/.test(e)?0:parseFloat(e)}function ja(e){return e===-1e4?"-inf":e===1e4?"inf":Number.isInteger(e)?String(e):String(Number(e.toFixed(3)))}function Q1(e){return e?"1":"0"}var qt=(e=>(e[e.Integer=1]="Integer",e[e.String=2]="String",e[e.Array=3]="Array",e[e.Library=4]="Library",e[e.Collection=5]="Collection",e[e.Module=6]="Module",e[e.Element=7]="Element",e[e.Settings=8]="Settings",e[e.Setting=9]="Setting",e[e.Folder=10]="Folder",e))(qt||{});const J1={integer:1,string:2,array:3,library:4,collection:5,module:6,element:7,settings:8,setting:9,folder:10},q1={1:"Integer",2:"String",3:"Array",4:"Library",5:"Collection",6:"Module",7:"Element",8:"Settings",9:"Setting",10:"Folder"};function bc(e){return e.indexOf("&")<0?e:e.replace(/&(amp|lt|gt|quot|apos|#\d+|#x[0-9a-fA-F]+);/g,(t,n)=>{switch(n){case"amp":return"&";case"lt":return"<";case"gt":return">";case"quot":return'"';case"apos":return"'"}const a=n[1]==="x"?parseInt(n.slice(2),16):parseInt(n.slice(1),10);return Number.isFinite(a)?String.fromCodePoint(a):t})}function xc(e){return e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}class J{type;name;value;children=[];constructor(t=0,n=null,a=null){this.type=t,this.name=n,this.value=a}addChild(t){t&&this.children.push(t)}getValueForEntry(t){for(const n of this.children)if(n.name===t)return n.value;return null}static string(t,n){return new J(2,t,n)}static array(t,n=[]){const a=new J(3,t,null);for(const i of n)a.addChild(i);return a}clone(){const t=new J(this.type,this.name,this.value);return t.children=this.children.map(n=>n.clone()),t}getStringDescription(){return`<?xml version="1.0" encoding="UTF-8"?>
`+this.describe(0)}describe(t){const n=q1[this.type];if(!n)return"";const a="	".repeat(t);let i=`${a}<${n}`;if(this.name!==null&&(i+=` name="${xc(this.name)}"`),this.value!==null&&(i+=` value="${xc(this.value)}"`),this.children.length===0)return i+` />
`;i+=`>
`;for(const r of this.children)i+=r.describe(t+1);return i+`${a}</${n}>
`}static parse(t){const n=[""],a=new J,i=[a],r=t.split(/\r\n|\r|\n|\u2028|\u2029/),l={Idle:0,Tag:1,Attribute:2,Value:3};t:for(const s of r){let o=l.Idle,u=null,d=null,m="",c=null,S=!1,y=!1;for(let v=0;v<s.length;v++){const x=s[v];switch(o){case l.Idle:x==="<"&&(o=l.Tag);break;case l.Tag:if(x==="/"){S=!0;break}else{if(x==="?")continue t;if(x===" "||x==="	"||x===">"){if(u===null)break;if(S){const g=n[n.length-1];if(g!==void 0&&g.toLowerCase()===u.toLowerCase())n.pop(),i.pop(),u=null,o=l.Idle;else break t}else{if(c===null){const g=J1[u.toLowerCase()];if(g===void 0)break t;c=new J(g,null,null);const h=i[i.length-1];h&&h.addChild(c),i.push(c),n.push(u),u=null}o=l.Attribute}}else u=(u??"")+x}break;case l.Attribute:x===" "||x==="	"||(x===">"?(d=null,o=l.Idle):x==="/"?(n.pop(),i.pop()):x==="="?(o=l.Value,y=!1):d=(d??"")+x);break;case l.Value:if(x==='"')y?(y=!1,c&&d!==null&&(d.toLowerCase()==="name"?c.name=bc(m):d.toLowerCase()==="value"&&(c.value=bc(m)))):y=!0;else if(!y&&(x===" "||x==="	"||x===">"))d=null,m="",o=x===">"?l.Idle:l.Attribute;else if(!y&&x==="/")n.pop(),i.pop();else{if(!y&&x==="=")break t;m+=x}break}}}return a.children.length===0?null:a.children[0]}}const ft={Checkbox:1,Combobox:2,TextField:3,Slider:4,DoubleSlider:5,Button:6,ToggleButton:7,Category:8};class M{settings=null;dictionary={};children=[];hidden=!1;disabled=!1;invalid=!1;_readOnly=!1;get name(){return this.dictionary.Name??""}get title(){return this.dictionary.Title??""}get type(){return Fe(this.dictionary.Type)}get fields(){return this.dictionary.Fields??[]}get values(){return this.dictionary.Values??[]}get limitMin(){return Fe(this.dictionary.LimitMin)}get limitMax(){return Fe(this.dictionary.LimitMax)}get parentValue(){return this.dictionary.ParentValue??"ALL"}get value(){return this.dictionary.Value}set value(t){t===void 0?delete this.dictionary.Value:this.dictionary.Value=t}get intValue(){return this.dictionary.Value===""?-1:Fe(this.dictionary.Value)}set intValue(t){this.dictionary.Value=Xn(Er(t))}get minValue(){const t=this.dictionary.Value;return t===""?-1e4:Fe(ir(t)[0])}set minValue(t){let n=this.dictionary.Value;n===""&&(n="-10000;10000");const a=Fe(ir(n)[1]);this.dictionary.Value=`${xe(Er(t))};${xe(a)}`}get maxValue(){const t=this.dictionary.Value;return t===""?1e4:Fe(ir(t)[1])}set maxValue(t){let n=this.dictionary.Value;n===""&&(n="-10000;10000");const a=Fe(ir(n)[0]);this.dictionary.Value=`${xe(a)};${xe(Er(t))}`}get readOnly(){return this._readOnly}set readOnly(t){this._readOnly=t;for(const n of this.children)n.readOnly=t}update(){this.settings?.update()}childrenForValue(t){return this.children.filter(n=>{const a=n.dictionary.ParentValue;return a==="ALL"||a===t})}getSettingWithName(t){if(K1(this.dictionary.Name,t))return this;for(const n of this.children){const a=n.getSettingWithName(t);if(a)return a}return null}addSetting(t,n="ALL"){t.settings=this.settings,t.dictionary.ParentValue=n,this.children.push(t)}getDescription(){const t=new J(qt.Setting,this.dictionary.Name??null,this.dictionary.Value??null);return this.children.length>0&&t.addChild(J.array("Children",this.children.filter(n=>!n.hidden).map(n=>n.getDescription()))),t}static checkbox(t,n,a){const i=new M;return i.dictionary.Type=String(ft.Checkbox),i.dictionary.Name=t,i.dictionary.Title=n,i.dictionary.Value=Xn(a),i}static textField(t,n,a){const i=new M;return i.dictionary.Type=String(ft.TextField),i.dictionary.Name=t,i.dictionary.Title=n,i.dictionary.Value=a,i}static combobox(t,n,a,i,r){const l=new M;l.dictionary.Type=String(ft.Combobox),l.dictionary.Name=t,l.dictionary.Title=n,l.dictionary.Fields=a,l.dictionary.Values=i,l.dictionary.Value="";for(const s of i)if(s===r){l.dictionary.Value=r;break}return l}static category(t,n){const a=new M;return a.dictionary.Type=String(ft.Category),a.dictionary.Name=t,a.dictionary.Title=n,a.dictionary.Value="1",a}static button(t,n,a){const i=new M;return i.dictionary.Type=String(a?ft.ToggleButton:ft.Button),i.dictionary.Name=t,i.dictionary.Title=n,i.dictionary.Value="0",i}static range(t,n,a,i,r,l){const s=new M;return s.dictionary.Type=String(ft.DoubleSlider),s.dictionary.Name=t,s.dictionary.Title=n,s.dictionary.LimitMin=Xn(a),s.dictionary.LimitMax=Xn(i),s.dictionary.Value=`${xe(r)};${xe(l)}`,s}static slider(t,n,a,i){const r=new M;return r.dictionary.Type=String(ft.Slider),r.dictionary.Name=t,r.dictionary.Title=n,r.dictionary.LimitMax=Xn(a),r.dictionary.Value=`${Xn(-1e4)};${xe(i)}`,r}}function ir(e){if(e==null)return[void 0,void 0];const t=e.split(";");return[t[0],t[1]]}class Dm{owner=null;delegate=null;locked=!1;settingsName="";settingsList=[];_readOnly=!1;onUpdate=null;settingDidChange(t){this.delegate?.settingDidChange(t),this.onUpdate?.()}get readOnly(){return this._readOnly}set readOnly(t){this._readOnly=t,this.setIntValueOfSetting("ReadOnly",t?1:0);for(const n of this.settingsList){const a=n.dictionary.Name;a!=="Expert"&&(a!=="ReadOnly"||this.locked)&&(n.readOnly=t)}this.onUpdate?.()}checkOrigin(t,n){const a=this.getMinValueOfSetting(n),i=this.getMaxValueOfSetting(n),r=this.getIntValueOfSetting(t);return!(r!==-1&&a!==-1e4&&i!==1e4&&(r<a||r>i))}setValuesOfSetting(t,n,a){const i=this.getSettingWithName(t);return i?(i.dictionary.Fields=a,i.dictionary.Values=n,!0):!1}setValueOfSetting(t,n){const a=this.getSettingWithName(t);return a?(a.value=n,!0):!1}getValueOfSetting(t){const n=this.getSettingWithName(t);return n?n.value:void 0}setIntValueOfSetting(t,n){const a=this.getSettingWithName(t);return a?(a.intValue=n,!0):!1}getIntValueOfSetting(t){const n=this.getSettingWithName(t);return n?n.intValue:0}setMinValueOfSetting(t,n){const a=this.getSettingWithName(t);return a?(a.minValue=n,!0):!1}getMinValueOfSetting(t){const n=this.getSettingWithName(t);return n?n.minValue:0}setMaxValueOfSetting(t,n){const a=this.getSettingWithName(t);return a?(a.maxValue=n,!0):!1}getMaxValueOfSetting(t){const n=this.getSettingWithName(t);return n?n.maxValue:0}getSettingWithName(t){for(const n of this.settingsList){const a=n.getSettingWithName(t);if(a)return a}return null}addSetting(t){this.settingsList.push(t),t.settings=this}addSettingAfter(t,n){const a=this.settingsList.indexOf(n);this.settingsList.splice(a+1,0,t),t.settings=this}addSettingBefore(t,n){const a=this.settingsList.indexOf(n);this.settingsList.splice(a<0?this.settingsList.length:a,0,t),t.settings=this}getDescription(){return J.array("SettingsList",this.settingsList.filter(t=>!t.hidden).map(t=>t.getDescription()))}update(){this.onUpdate?.()}forEach(t){const n=a=>{for(const i of a)t(i),n(i.children)};n(this.settingsList)}}const P={Pad:2,Strip:3,Button:4,Key:5,String:6,Area:7,Round:8,Script:9,Control:10,PadPoly6:13,Glide:14,AreaCircularMixer:15,AreaPiePartMixer:16},H={LockCursor:1,Relative:8,AxisY:32,Sticks:64,CaptureCursor:128,RetrigCursor:256,MasterElement:512},V={Channel:1,ValueX:2,ValueY:3,ValueZ:4,LimitX:5,LimitY:6,StartX:11,StartY:12,Options:20,Sustain:21,PolyphonicAftertouch:22,ChannelAftertouch:23,Fretless:24},Mc={x:0,y:0,width:0,height:0};class T{enable=!1;_value=0;get value(){return this._value}set value(t){this._value=t,this.enable=!0}}class Q{enable=!1;_value="";get value(){return this._value}set value(t){this._value=t,this.enable=!0}}class tS{enable=!1;_values=[""];_defaultValue="";get values(){return this._values}set values(t){this._values=t,this.enable=!0}get defaultValue(){return this._defaultValue}set defaultValue(t){this._defaultValue=t,this.enable=!0}}class te{enable=!1;_valueMin=0;_valueMax=0;_limitMin=0;_limitMax=0;get valueMin(){return this._valueMin}set valueMin(t){this._valueMin=t,this.enable=!0}get valueMax(){return this._valueMax}set valueMax(t){this._valueMax=t,this.enable=!0}get limitMin(){return this._limitMin}set limitMin(t){this._limitMin=t,this.enable=!0}get limitMax(){return this._limitMax}set limitMax(t){this._limitMax=t,this.enable=!0}}const Hs=(()=>{const e=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],t=[];for(let n=0;n<128;n++)t.push(`${n} - ${e[n%12]}${Math.floor(n/12)-2}`);return t})(),rt=Array.from({length:128},(e,t)=>String(t)),mt=Array.from({length:16},(e,t)=>String(t+1));class ot{revision=0;module=null;dimensionMM={...Mc};geometryMM=[];touchAreaMM={...Mc};_rotation=0;z=0;depth=127;midiOptions=0;radiusMM=0;isColorizable=!0;invisible=!1;disabled=!1;noMidi=!1;noBackup=!1;elementId=0;name="";layerNbr=0;type_petal=0;radius=0;settings;title=null;constructor(){this.settings=new Dm,this.settings.owner=this,this.settings.delegate=this,this.settings.settingsName="Settings"}get className(){return"Element"}settingDidChange(t){this.module?.settingDidChange(t)}settingsDidLoad(){}getPreferedWidth(t,n){const a=t+n,i=$o(t)|0,r=i+Math.trunc(n);return i+Math.trunc(n)+1-a>a-r?Math.trunc(n):Math.trunc(n+1)}rotatePoints(t,n){if(!this.module)return t;const a=this.module.sizeMM,i=a.width*Math.cos(n)+0*Math.sin(n),r=-a.width*Math.sin(n)+0*Math.cos(n),l=a.width*Math.cos(n)+a.height*Math.sin(n),s=-a.width*Math.sin(n)+a.height*Math.cos(n),o=0*Math.cos(n)+a.height*Math.sin(n),u=-0*Math.sin(n)+a.height*Math.cos(n);let d=0;i<0&&(d=-i),l<-d&&(d=-l),o<-d&&(d=-o);let m=0;return r<0&&(m=-r),s<-m&&(m=-s),u<-m&&(m=-u),t.map(c=>({x:c.x*Math.cos(n)+c.y*Math.sin(n)+d,y:-c.x*Math.sin(n)+c.y*Math.cos(n)+m}))}rotateRect(t,n){let a=[{x:t.x,y:t.y},{x:t.x+t.width,y:t.y},{x:t.x+t.width,y:t.y+t.height},{x:t.x,y:t.y+t.height}];a=this.rotatePoints(a,n);const i=a[0],r=a[2],l={...t};return r.x>i.x?(l.x=i.x,l.width=r.x-i.x):(l.x=r.x,l.width=i.x-r.x),r.y>i.y?(l.y=i.y,l.height=r.y-i.y):(l.y=r.y,l.height=i.y-r.y),l}get rotation(){return this._rotation}set rotation(t){const n=this._rotation;this._rotation=t;const a=(t-n)*Math.PI/180;this.dimensionMM=this.rotateRect(this.dimensionMM,a),this.touchAreaMM=this.rotateRect(this.touchAreaMM,a)}getMidiObjectList(){return[]}loadMidiData(t,n){return 0}getDescription(){if(this.noBackup)return null;const t=new J(qt.Element,this.name,null);return t.addChild(J.string("Revision",String(this.revision))),t.addChild(this.settings.getDescription()),t}loadSettingTree(t,n){if(t.type===qt.Setting&&!this.loadSettingFromXmlDescription(t,n))return!1;for(const a of t.children)if(!this.loadSettingTree(a,n))return!1;return!0}loadSettingFromXmlDescription(t,n){if(t.name==="")return!0;if(t.name===null)return!1;const a=this.settings.getSettingWithName(t.name);return a?(a.value=t.value??void 0,!0):!1}loadFromXmlDescription(t){if(t.type!==qt.Element)return!1;let n=0;for(const a of t.children)if(a.name!==null&&a.name.toLowerCase()==="revision"){n=Math.trunc(yn(a.value));break}if(n>this.revision)return!1;for(const a of t.children)if(a.name!==null&&a.name.toLowerCase()==="settingslist"){for(const i of a.children)if(!this.loadSettingTree(i,n))return!1;this.settings.delegate?.settingsDidLoad()}return!0}}const G={Unknown:0,Area:1,Bubbles:3,Pads:5,Fretboard:6,GrandFretboard:7,Strips:9,Rounds:10,Synth:12,Scaler:14,GrandSynth:17,PopKeys:22,PopScaler:23,PopFretboard:24,PopPads:25,PopAudio:27},ie={Mpe:1,Rotate90:2,Rotate180:4,MpeBegin:16,MpeEnd:32},U={PadLow:40,PadHigh:70,KeyLow:40,KeyHigh:60,StringLow:30,StringHigh:50,AreaLow:40,AreaHigh:70,BubbleLow:80,BubbleHigh:110,BubbleScalerLow:80,BubbleScalerHigh:107},_o=[{id:0,name:"Unknown",hex:"#686868"},{id:1,name:"Red",hex:"#ca001d"},{id:2,name:"Blue",hex:"#257cc2"},{id:3,name:"Yellow",hex:"#ebc521"},{id:4,name:"Purple",hex:"#8a11d6"},{id:5,name:"Pink",hex:"#ff3e5a"},{id:6,name:"Green",hex:"#058773"},{id:7,name:"Orange",hex:"#f5802b"},{id:8,name:"Gray",hex:"#646464"},{id:9,name:"Pantone3005C",hex:"#0076cc"},{id:10,name:"Pantone638C",hex:"#00b2de"},{id:11,name:"Pantone319C",hex:"#36ccda"},{id:12,name:"Pantone3245C",hex:"#7bddd8"},{id:13,name:"Pantone116C",hex:"#ffce00"},{id:14,name:"Pantone137C",hex:"#ff9f00"},{id:15,name:"Pantone1585C",hex:"#ff6900"},{id:16,name:"Pantone172C",hex:"#fd4703"},{id:17,name:"Pantone353C",hex:"#81df9c"},{id:18,name:"PantoneWarmRedC",hex:"#f23a3a"}];function Nr(e){return _o.find(t=>t.id===e&&t.id!==0)??_o[0]}function Ct(e){return _o.find(t=>t.name===e&&t.id!==0)?.id??0}class Ze{delegate=null;invalid=!1;type=0;version=0;revision=0;libraryName="";settings;fullPrivilegesValue=!1;versionIndex=0;elementList=[];backgroundElementList=[];_readOnly=!1;_locked=!1;_color=0;_rotation=0;_moduleOptions=0;constructor(t,n,a){this.revision=0,this.invalid=!1,this.settings=new Dm,this.settings.settingsName="Module properties",this.settings.delegate=this,this.settings.owner=this,this.rotation=0,this.libraryName=this.title,this.type=t,this.version=n,this.color=Ct("Unknown"),this.moduleOptions=a}get title(){return""}get summary(){return""}get slotNbr(){return 0}get tagPosition(){return 1}get sizeMM(){return{width:this.slotNbr*90,height:90}}getDefaultColor(){return Ct("Unknown")}get fullPrivileges(){return this.fullPrivilegesValue}setFullPrivileges(t){this.fullPrivilegesValue=t}get readOnly(){return this._readOnly}set readOnly(t){this._readOnly=t,this.settings.readOnly=t;for(const n of this.elementList)n.settings.readOnly=t;this.delegate?.modulePropertiesDidChange(this)}get locked(){return this._locked}set locked(t){if(this._locked=t,t){this.settings.locked=!0,this.settings.readOnly=!0;for(const n of this.elementList)n.settings.locked=!0,n.settings.readOnly=!0}}get color(){return this._color}set color(t){this._color=t,this.settings.setIntValueOfSetting("Color",t)}get moduleOptions(){return this._moduleOptions}set moduleOptions(t){this._moduleOptions=t,this._rotation=0,t&ie.Rotate90&&(this._rotation+=90),t&ie.Rotate180&&(this._rotation+=180)}get rotation(){return this._rotation}set rotation(t){this._rotation=t,this._moduleOptions&=-7,t===90&&(this._moduleOptions|=ie.Rotate90),t===180&&(this._moduleOptions|=ie.Rotate180),t===270&&(this._moduleOptions|=ie.Rotate180|ie.Rotate90);for(const n of this.elementList??[])n.rotation=t;for(const n of this.backgroundElementList??[])n.rotation=t}get availableColors(){const t=this.settings.getSettingWithName("Color");return t?t.values.map(n=>parseInt(n,10)):[]}settingDidChange(t){const n=t.dictionary.Name;n==="Color"?(this.color=parseInt(t.dictionary.Value??"0",10)||0,this.updateModuleView(),this.delegate?.modulePropertiesDidChange(this)):n==="ReadOnly"&&(this.readOnly=(parseInt(t.dictionary.Value??"0",10)||0)!==0,this.updateModuleView(),this.delegate?.modulePropertiesDidChange(this))}settingsDidLoad(){}updateModuleView(){}getMidiStructure(){return[]}getMidiDescription(){if(this.invalid)return null;const t=new _("InstrumentData");t.set("instrumentHeader.midiHeader.type",G.Unknown),t.set("instrumentHeader.midiHeader.version",0),t.set("revision",0),t.set("midiElementNbr",0),t.set("instrumentHeader.color",Ct("Unknown")),t.set("options",0);const n=[];let a=0;for(const r of this.getMidiStructure())for(const l of this.elementList)if(l.name===r.name){if(l.noMidi)break;const s=l.getMidiObjectList();if(s===null)return null;n.push(...s),a++;break}t.set("midiElementNbr",a);let i=ct("InstrumentData");for(const r of n)i+=r.length;return t.set("size",i),Z1([t.bytes,...n])}patchHeader(t,n){const a=new _("InstrumentData",t.subarray(0,ct("InstrumentData")));return n(a),t}loadMidiData(t){if(this.invalid||t.length===0)return 0;const n=_.at("InstrumentData",t,0);let a=ct("InstrumentData"),i=a;const r=this.getMidiStructure();if(r.length!==n.get("midiElementNbr"))return 0;for(const l of r)for(const s of this.elementList)if(s.name===l.name){const o=s.loadMidiData(t,a);if(o===0)return 0;a+=o,i+=o;break}return i}checksum(t){let n=0;for(const a of t)n^=a;return n}addElement(t){this.elementList.push(t),t.module=this,t.rotation=this.rotation}addBackgroundElement(t){this.backgroundElementList.push(t),t.module=this,t.rotation=this.rotation,t.disabled=!0}getElementWithName(t){return this.elementList.find(n=>n.name===t)??null}getPreferedWidth(t,n){const a=t+n,i=Math.round(t),r=i+Math.trunc(n);return i+Math.trunc(n)+1-a>a-r?Math.trunc(n):Math.trunc(n+1)}initModule(){const t=new ot;t.radiusMM=10,t.dimensionMM={x:0,y:0,width:this.slotNbr*90,height:90},t.isColorizable=!0,this.addBackgroundElement(t);let n=new ot;n.radiusMM=3,n.dimensionMM={x:this.slotNbr*90/2-10/2,y:30,width:10,height:45},n.isColorizable=!1,this.addBackgroundElement(n),n=new ot,n.radiusMM=90,n.dimensionMM={x:this.slotNbr*90/2-12/2,y:10,width:12,height:12},n.isColorizable=!1,this.addBackgroundElement(n)}getDescription(){const t=new J(qt.Module,this.libraryName,null);t.addChild(J.string("Type",ja(this.type))),t.addChild(J.string("Version",ja(this.version))),t.addChild(J.string("Revision",ja(this.revision))),t.addChild(J.string("Color",ja(this.color))),t.addChild(J.string("Options",ja(this.moduleOptions))),t.addChild(J.string("ReadOnly",Q1(this.readOnly)));const n=J.array("ElementList");for(const a of this.elementList)n.addChild(a.getDescription());return t.addChild(n),t.addChild(this.settings.getDescription()),t}loadElementFromXmlDescription(t,n){for(const a of this.elementList)if(a.name===t.name&&!a.loadFromXmlDescription(t))return!1;return!0}loadSettingTree(t,n){if(t.type===qt.Setting&&!this.loadSettingFromXmlDescription(t,n))return!1;for(const a of t.children)if(!this.loadSettingTree(a,n))return!1;return!0}loadSettingFromXmlDescription(t,n){if(t.name==="")return!0;if(t.name===null)return!1;const a=this.settings.getSettingWithName(t.name);return a?(a.value=t.value??void 0,!0):!1}loadFromXmlDescription(t){if(t.type!==qt.Module)return!1;let n=0;for(const a of t.children)if(a.name!==null&&a.name.toLowerCase()==="revision"){n=Math.trunc(yn(a.value));break}if(n>this.revision)return!1;this.libraryName=t.name??"";for(const a of t.children){const i=a.name?.toLowerCase();if(i==="color")this.color=Math.trunc(yn(a.value));else if(i==="options")this.moduleOptions=Math.trunc(yn(a.value));else if(i==="readonly")this.readOnly=G1(a.value);else if(i==="elementlist"){for(const r of a.children)if(!this.loadElementFromXmlDescription(r,n))return!1}else if(i==="settingslist"){for(const r of a.children)if(!this.loadSettingTree(r,n))return!1;this.settings.delegate?.settingsDidLoad()}}return this.updateModuleView(),!0}drawableElements(){return[...this.backgroundElementList,...this.elementList].map((n,a)=>({e:n,i:a})).sort((n,a)=>n.e.layerNbr-a.e.layerNbr||n.i-a.i).map(n=>n.e)}get bounds(){const t=this.sizeMM;return{x:0,y:0,width:t.width,height:t.height}}}class jt extends Ze{originalType=0;originalDescription=null;constructor(t,n,a){super(G.Unknown,0,0),this.originalType=t,super.initModule()}get className(){return"Unknown"}get title(){return"Unknown"}get summary(){return"Unknown module"}get slotNbr(){return 1}getDefaultColor(){return Ct("Unknown")}getMidiDescription(){return null}getDescription(){if(this.originalDescription){const t=J.parse(this.originalDescription);if(t)return t}return super.getDescription()}}const Xs=new Map;function $t(e,t){Xs.set(e,t)}function eS(){return[...Xs.keys()].sort((e,t)=>e-t)}function ii(e,t,n){if(e===G.Unknown)return new jt(e,t,n);const a=Xs.get(e);return a?new a(e,t,n):null}function Us(e){if(e.type!==qt.Module)return null;const t=Math.trunc(yn(e.getValueForEntry("Type")));let n=Math.trunc(yn(e.getValueForEntry("Version")));const a=Math.trunc(yn(e.getValueForEntry("Options")));n===1&&(n=3);let i=ii(t,n,a)??new jt(t,n,a);if(!i.loadFromXmlDescription(e.clone())){const r=new jt(t,n,a);r.originalDescription=e.getStringDescription(),r.libraryName=e.name??"",i=r}return i}const Em={appName:"Joué Editor",library:"Library",myPresets:"My presets",factoryPresets:"Factory presets",search:"Search presets",noResults:"No preset matches “{q}”.",emptyMine:"Presets you save or import appear here.",board:"Board",inspector:"Settings",connect:"Connect a Joué",connecting:"Looking for a Joué…",disconnect:"Disconnect",connected:"Connected",firmware:"Firmware build {n}",noBoardTitle:"Connect your Joué",noBoardBody:"Plug your J-Pro or J-Play into USB, then connect. Chrome and Edge on Windows and macOS can talk to it directly; allow MIDI access when the browser asks.",midiUnsupported:"This browser cannot talk to MIDI devices. Use Chrome or Edge.",midiDenied:"The browser refused MIDI access. Click the icon left of the address bar, set MIDI devices to Allow, then connect again.",midiFailed:"The browser couldn't start MIDI on this computer. Quit and reopen the browser, then connect again.",midiBlocked:"MIDI is blocked in this view: the editor is shown inside another page (a preview, for example) that doesn't allow it. Open the editor file directly in Chrome or Edge, then connect.",midiInsecure:"MIDI needs a secure page (https or localhost).",notFound:"No Joué found. Check the USB cable, close other editors that may hold the port, then try again.",bootloader:"This Joué is in firmware update mode. Update it with the Joué firmware updater, then reconnect.",emptySlot:"Empty",reading:"Reading…",writing:"Sending…",readFailed:"Couldn't read this module. Select it again to retry.",unknownModule:"Unknown module",unknownBody:"This editor doesn't know this module (type {type}, version {version}).",selectSomething:"Select a module on the board or a preset in the library.",module:"Module",element:"Control",allControls:"All controls",pickElement:"Click a control on the module to edit it.",sendToModule:"Send to module",sendToBoard:"Send to board",sendTo:"Send to {name}",sent:"Sent to {name}.",sendFailed:"Sending failed: {reason}",noCompatible:"No {title} module on the board.",playLimit:"J-Play modules can be read but not reprogrammed. A J-Pro is needed to change them.",saveAsPreset:"Save as preset",saved:"Saved “{name}” in My presets.",duplicate:"Duplicate",duplicated:"Copied to My presets.",rename:"Rename",delete:"Delete",deleteConfirm:"Delete “{name}”?",deleted:"Deleted “{name}”.",undoDelete:"Undo",cancel:"Cancel",import:"Import",export:"Export",imported:"Imported {n} presets.",importNone:"No module presets found in this file.",exported:"Exported {n} presets.",factoryLocked:"Factory presets can't be changed. Duplicate it to edit a copy.",locked:"Locked",unlock:"Unlock",lock:"Lock",lockedBody:"This preset is locked. Unlock it to edit.",changed:"Not sent",undo:"Undo",redo:"Redo",mixed:"Mixed",advanced:"Advanced settings",color:"Silicone color",axisTitle:"MIDI learn",axisAll:"All",axisHint:"Send a single axis while mapping controls in your software.",slot:"Slot {n}",serial:"Serial number",language:"Language",dragHint:"Drop on a module of the same kind",invalidStart:"The start value is outside the range.",invalidOrigin:"The origin is outside the range.",needTuning:"Choose a first note and a tuning.",needScale:"Choose a first note and a scale.",cannotEncode:"Fix the highlighted settings before sending.",close:"Close",about:"About",aboutBody:"Open-source editor for Joué J-Pro and J-Play controllers. GPL-3.0-or-later.",newName:"{name} copy",presetName:"Preset name",fromBoard:"From the board",moduleKinds:"Module",version:"v{v}",presetsTitle:"Presets",devicesTitle:"Devices",editionTitle:"Edition",padTitle:"Pad properties",mappingTitle:"MIDI mapping",newPreset:"New preset",renameHint:"double-click to rename",axisShort:"Axis",noDevice:"No board connected.",factoryShort:"Factory preset"},nS={appName:"Éditeur Joué",library:"Bibliothèque",myPresets:"Mes presets",factoryPresets:"Presets d’usine",search:"Rechercher",noResults:"Aucun preset ne correspond à « {q} ».",emptyMine:"Les presets que vous enregistrez ou importez apparaissent ici.",board:"Board",inspector:"Réglages",connect:"Connecter un Joué",connecting:"Recherche d’un Joué…",disconnect:"Déconnecter",connected:"Connecté",firmware:"Firmware build {n}",noBoardTitle:"Connectez votre Joué",noBoardBody:"Branchez votre J-Pro ou J-Play en USB, puis connectez-le. Chrome et Edge, sous Windows et macOS, dialoguent directement avec lui ; autorisez l’accès MIDI quand le navigateur le demande.",midiUnsupported:"Ce navigateur ne gère pas le MIDI. Utilisez Chrome ou Edge.",midiDenied:"Le navigateur a refusé l’accès MIDI. Cliquez l’icône à gauche de la barre d’adresse, autorisez les appareils MIDI, puis reconnectez.",midiFailed:"Le navigateur n’a pas pu démarrer le MIDI sur cet ordinateur. Quittez et rouvrez le navigateur, puis reconnectez.",midiBlocked:"Le MIDI est bloqué dans cette vue : l’éditeur est affiché dans une autre page (un aperçu, par exemple) qui ne l’autorise pas. Ouvrez le fichier de l’éditeur directement dans Chrome ou Edge, puis connectez.",midiInsecure:"Le MIDI nécessite une page sécurisée (https ou localhost).",notFound:"Aucun Joué trouvé. Vérifiez le câble USB, fermez les autres éditeurs qui utilisent le port, puis réessayez.",bootloader:"Ce Joué est en mode mise à jour du firmware. Mettez-le à jour avec l’outil de mise à jour Joué, puis reconnectez.",emptySlot:"Vide",reading:"Lecture…",writing:"Envoi…",readFailed:"Lecture du module impossible. Sélectionnez-le à nouveau pour réessayer.",unknownModule:"Module inconnu",unknownBody:"Cet éditeur ne connaît pas ce module (type {type}, version {version}).",selectSomething:"Sélectionnez un module sur le board ou un preset dans la bibliothèque.",module:"Module",element:"Contrôle",allControls:"Tous les contrôles",pickElement:"Cliquez un contrôle sur le module pour le régler.",sendToModule:"Envoyer au module",sendToBoard:"Envoyer au board",sendTo:"Envoyer à {name}",sent:"Envoyé à {name}.",sendFailed:"Échec de l’envoi : {reason}",noCompatible:"Aucun module {title} sur le board.",playLimit:"Les modules J-Play peuvent être lus mais pas reprogrammés. Il faut un J-Pro pour les modifier.",saveAsPreset:"Enregistrer comme preset",saved:"« {name} » enregistré dans Mes presets.",duplicate:"Dupliquer",duplicated:"Copié dans Mes presets.",rename:"Renommer",delete:"Supprimer",deleteConfirm:"Supprimer « {name} » ?",deleted:"« {name} » supprimé.",undoDelete:"Annuler",cancel:"Annuler",import:"Importer",export:"Exporter",imported:"{n} presets importés.",importNone:"Aucun preset de module dans ce fichier.",exported:"{n} presets exportés.",factoryLocked:"Les presets d’usine ne sont pas modifiables. Dupliquez-le pour éditer une copie.",locked:"Verrouillé",unlock:"Déverrouiller",lock:"Verrouiller",lockedBody:"Ce preset est verrouillé. Déverrouillez-le pour le modifier.",changed:"Non envoyé",undo:"Annuler",redo:"Rétablir",mixed:"Mixte",advanced:"Réglages avancés",color:"Couleur du silicone",axisTitle:"MIDI learn",axisAll:"Tous",axisHint:"N’envoyer qu’un axe pendant l’assignation dans votre logiciel.",slot:"Emplacement {n}",serial:"Numéro de série",language:"Langue",dragHint:"Déposez sur un module du même type",invalidStart:"La valeur de départ est hors de la plage.",invalidOrigin:"L’origine est hors de la plage.",needTuning:"Choisissez une première note et un accordage.",needScale:"Choisissez une première note et une gamme.",cannotEncode:"Corrigez les réglages signalés avant l’envoi.",close:"Fermer",about:"À propos",aboutBody:"Éditeur open source pour les contrôleurs Joué J-Pro et J-Play. GPL-3.0 ou ultérieure.",newName:"{name} copie",presetName:"Nom du preset",fromBoard:"Depuis le board",moduleKinds:"Module",version:"v{v}",presetsTitle:"Presets",devicesTitle:"Appareils",editionTitle:"Édition",padTitle:"Propriétés du pad",mappingTitle:"Assignation MIDI",newPreset:"Nouveau preset",renameHint:"double-cliquez pour renommer",axisShort:"Axes",noDevice:"Aucun board connecté.",factoryShort:"Preset d’usine"},aS={en:Em,fr:nS};function iS(e,t,n={}){let a=aS[e][t]??Em[t];for(const[i,r]of Object.entries(n))a=a.split(`{${i}}`).join(String(r));return a}const Dc={Tunning:"Tuning","14 Bits":"14-bit","CC Fine":"Fine CC","Y Control":"Y control","Fretless PitchRange":"Fretless pitch range","Enable Radius":"Radius","Enable Angle":"Angle","Enable Fader":"Fader","Enable Axis1":"Axis 1","Enable Axis2":"Axis 2","Enable Pressure":"Pressure","Zero Return":"Return to zero","MPE Channels":"MPE channels","Custom mapping":"Custom mapping",Pitch:"Pitch bend"},rS={Color:"Couleur",Locked:"Verrouillé","Advanced settings":"Réglages avancés","Pressure range":"Plage de pression","Horizontal (X)":"Horizontal (X)","Vertical (Y)":"Vertical (Y)","Pressure (Z)":"Pression (Z)",Channel:"Canal","CC number":"Numéro de CC",Range:"Plage",Direction:"Sens",Mode:"Mode",Demultiplier:"Démultiplication","14 Bits":"14 bits","CC Fine":"CC fin","Start value":"Valeur de départ",Action:"Action",Note:"Note",Pitch:"Pitch bend","PC number":"Numéro de PC",Velocity:"Vélocité","First note":"Première note",Tuning:"Accordage",Tunning:"Accordage",Fretless:"Fretless","Fretless PitchRange":"Ambitus fretless",Orientation:"Orientation",Glissando:"Glissando","Y Control":"Contrôle Y",Scale:"Gamme","Custom mapping":"Assignation libre","MPE Channels":"Canaux MPE","Enable Radius":"Rayon","Enable Angle":"Angle","Enable Fader":"Fader","Enable Axis1":"Axe 1","Enable Axis2":"Axe 2","Enable Pressure":"Pression","Zero Return":"Retour à zéro"};function Mi(e,t){return e==="fr"?rS[t]??Dc[t]??t:Dc[t]??t}const lS={Low:"Faible",High:"Forte",Natural:"Normal",Inverted:"Inversé",Absolute:"Absolu",Relative:"Relatif",Up:"Haut",Down:"Bas",Horizontal:"Horizontal",Vertical:"Vertical",Polyphonic:"Polyphonique",Channel:"Canal","Control Change":"Control Change","Program Change":"Program Change","Channel selection":"Choix du canal","Sustain on/off":"Sustain on/off","Vibrato on/off":"Vibrato on/off","Bending on/off":"Bending on/off","Glissando on/off":"Glissando on/off","Fretless on/off":"Fretless on/off","YControl on/off":"Contrôle Y on/off","Aftertouch on/off":"Aftertouch on/off",Guitar:"Guitare",Chromatic:"Chromatique","Ionian major":"Majeur ionien",Dorian:"Dorien",Phrygian:"Phrygien",Lydian:"Lydien",Myxolydian:"Mixolydien",Aeolian:"Éolien",Locrian:"Locrien",Spanish:"Espagnole",Gypsy:"Tzigane",Arabian:"Arabe",Egyptian:"Égyptienne",Japanese:"Japonaise",Wholetone:"Par tons"};function oS(e,t){return e==="fr"?lS[t]??t.replace(/ semitones$/," demi-tons"):t}function Ws(e){return new Promise((t,n)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>n(e.error)})}function sS(e,t){const n=indexedDB.open(e);n.onupgradeneeded=()=>n.result.createObjectStore(t);const a=Ws(n);return(i,r)=>a.then(l=>r(l.transaction(t,i).objectStore(t)))}let Hl;function Nm(){return Hl||(Hl=sS("keyval-store","keyval")),Hl}function uS(e,t=Nm()){return t("readonly",n=>Ws(n.get(e)))}function cS(e,t,n=Nm()){return n("readwrite",a=>(a.put(t,e),Ws(a.transaction)))}const dS=`\uFEFF<?xml version="1.0" encoding="UTF-8"?>
<Library>
	<String name="Version" value="3" />
	<Array name="ModuleList">
		<Folder name="Pro Factory presets">
			<String name="IsExpanded" value="1" />
			<Array name="Entries">
				<Module name="Pro Area">
					<String name="Type" value="1" />
					<String name="Version" value="3" />
					<String name="Revision" value="1" />
					<String name="Color" value="3" />
					<String name="Options" value="0" />
					<String name="ReadOnly" value="1" />
					<Array name="ElementList">
						<Element name="AREA">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="EnableX" value="1">
									<Array name="Children">
										<Setting name="ChannelX" value="7" />
										<Setting name="ControlX" value="1" />
										<Setting name="RangeX" value="0;127" />
										<Setting name="DirectionX" value="Natural" />
										<Setting name="ModeX" value="Absolute">
											<Array name="Children">
												<Setting name="DemultiplierX" value="2" />
											</Array>
										</Setting>
										<Setting name="CC14BitsX" value="0">
											<Array name="Children">
												<Setting name="CCFineX" value="2" />
											</Array>
										</Setting>
									</Array>
								</Setting>
								<Setting name="EnableY" value="1">
									<Array name="Children">
										<Setting name="ChannelY" value="7" />
										<Setting name="ControlY" value="2" />
										<Setting name="RangeY" value="0;127" />
										<Setting name="DirectionY" value="Natural" />
										<Setting name="ModeY" value="Absolute">
											<Array name="Children">
												<Setting name="DemultiplierY" value="2" />
											</Array>
										</Setting>
										<Setting name="CC14BitsY" value="0">
											<Array name="Children">
												<Setting name="CCFineY" value="3" />
											</Array>
										</Setting>
									</Array>
								</Setting>
								<Setting name="EnableZ" value="1">
									<Array name="Children">
										<Setting name="ChannelZ" value="7" />
										<Setting name="ControlZ" value="3" />
										<Setting name="RangeZ" value="0;127" />
										<Setting name="DirectionZ" value="Natural" />
									</Array>
								</Setting>
							</Array>
						</Element>
					</Array>
					<Array name="SettingsList">
						<Setting name="Color" value="3" />
						<Setting name="ReadOnly" value="1" />
						<Setting name="Advanced" value="1">
							<Array name="Children">
								<Setting name="Dynamic" value="Low" />
							</Array>
						</Setting>
					</Array>
				</Module>
				<Module name="Pro Bubbles">
					<String name="Type" value="3" />
					<String name="Version" value="3" />
					<String name="Revision" value="1" />
					<String name="Color" value="4" />
					<String name="Options" value="0" />
					<String name="ReadOnly" value="1" />
					<Array name="ElementList">
						<Element name="BUBBLE1">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="EnableX" value="1">
									<Array name="Children">
										<Setting name="ChannelX" value="6" />
										<Setting name="ControlX" value="1" />
										<Setting name="RangeX" value="0;127" />
										<Setting name="DirectionX" value="Natural" />
										<Setting name="StartValueX" value="64" />
									</Array>
								</Setting>
								<Setting name="EnableY" value="1">
									<Array name="Children">
										<Setting name="ChannelY" value="6" />
										<Setting name="ControlY" value="2" />
										<Setting name="RangeY" value="0;127" />
										<Setting name="DirectionY" value="Natural" />
										<Setting name="StartValueY" value="64" />
									</Array>
								</Setting>
								<Setting name="EnableZ" value="1">
									<Array name="Children">
										<Setting name="ChannelZ" value="6" />
										<Setting name="ControlZ" value="3" />
										<Setting name="RangeZ" value="0;127" />
										<Setting name="DirectionZ" value="Natural" />
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="BUBBLE2">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="EnableX" value="1">
									<Array name="Children">
										<Setting name="ChannelX" value="6" />
										<Setting name="ControlX" value="4" />
										<Setting name="RangeX" value="0;127" />
										<Setting name="DirectionX" value="Natural" />
										<Setting name="StartValueX" value="64" />
									</Array>
								</Setting>
								<Setting name="EnableY" value="1">
									<Array name="Children">
										<Setting name="ChannelY" value="6" />
										<Setting name="ControlY" value="5" />
										<Setting name="RangeY" value="0;127" />
										<Setting name="DirectionY" value="Natural" />
										<Setting name="StartValueY" value="64" />
									</Array>
								</Setting>
								<Setting name="EnableZ" value="1">
									<Array name="Children">
										<Setting name="ChannelZ" value="6" />
										<Setting name="ControlZ" value="6" />
										<Setting name="RangeZ" value="0;127" />
										<Setting name="DirectionZ" value="Natural" />
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="BUBBLE3">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="EnableX" value="1">
									<Array name="Children">
										<Setting name="ChannelX" value="6" />
										<Setting name="ControlX" value="7" />
										<Setting name="RangeX" value="0;127" />
										<Setting name="DirectionX" value="Natural" />
										<Setting name="StartValueX" value="64" />
									</Array>
								</Setting>
								<Setting name="EnableY" value="1">
									<Array name="Children">
										<Setting name="ChannelY" value="6" />
										<Setting name="ControlY" value="8" />
										<Setting name="RangeY" value="0;127" />
										<Setting name="DirectionY" value="Natural" />
										<Setting name="StartValueY" value="64" />
									</Array>
								</Setting>
								<Setting name="EnableZ" value="1">
									<Array name="Children">
										<Setting name="ChannelZ" value="6" />
										<Setting name="ControlZ" value="9" />
										<Setting name="RangeZ" value="0;127" />
										<Setting name="DirectionZ" value="Natural" />
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="BUBBLE4">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="EnableX" value="1">
									<Array name="Children">
										<Setting name="ChannelX" value="6" />
										<Setting name="ControlX" value="10" />
										<Setting name="RangeX" value="0;127" />
										<Setting name="DirectionX" value="Natural" />
										<Setting name="StartValueX" value="64" />
									</Array>
								</Setting>
								<Setting name="EnableY" value="1">
									<Array name="Children">
										<Setting name="ChannelY" value="6" />
										<Setting name="ControlY" value="11" />
										<Setting name="RangeY" value="0;127" />
										<Setting name="DirectionY" value="Natural" />
										<Setting name="StartValueY" value="64" />
									</Array>
								</Setting>
								<Setting name="EnableZ" value="1">
									<Array name="Children">
										<Setting name="ChannelZ" value="6" />
										<Setting name="ControlZ" value="12" />
										<Setting name="RangeZ" value="0;127" />
										<Setting name="DirectionZ" value="Natural" />
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="BUTTON1">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Function" value="Note">
									<Array name="Children">
										<Setting name="NoteChannel" value="6" />
										<Setting name="Note" value="0" />
										<Setting name="CCChannel" value="6" />
										<Setting name="CC" value="0" />
										<Setting name="CCRange" value="0;127" />
										<Setting name="CCDirection" value="Natural" />
										<Setting name="PitchbendChannel" value="6" />
										<Setting name="PitchbendRange" value="-10000;0" />
										<Setting name="PitchbendDirection" value="Up" />
										<Setting name="PCChannel" value="6" />
										<Setting name="PC" value="0" />
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="BUTTON2">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Function" value="Note">
									<Array name="Children">
										<Setting name="NoteChannel" value="6" />
										<Setting name="Note" value="1" />
										<Setting name="CCChannel" value="6" />
										<Setting name="CC" value="1" />
										<Setting name="CCRange" value="0;127" />
										<Setting name="CCDirection" value="Natural" />
										<Setting name="PitchbendChannel" value="6" />
										<Setting name="PitchbendRange" value="-10000;0" />
										<Setting name="PitchbendDirection" value="Up" />
										<Setting name="PCChannel" value="6" />
										<Setting name="PC" value="1" />
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="BUTTON3">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Function" value="Note">
									<Array name="Children">
										<Setting name="NoteChannel" value="6" />
										<Setting name="Note" value="2" />
										<Setting name="CCChannel" value="6" />
										<Setting name="CC" value="2" />
										<Setting name="CCRange" value="0;127" />
										<Setting name="CCDirection" value="Natural" />
										<Setting name="PitchbendChannel" value="6" />
										<Setting name="PitchbendRange" value="-10000;0" />
										<Setting name="PitchbendDirection" value="Up" />
										<Setting name="PCChannel" value="6" />
										<Setting name="PC" value="2" />
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="BUTTON4">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Function" value="Note">
									<Array name="Children">
										<Setting name="NoteChannel" value="6" />
										<Setting name="Note" value="3" />
										<Setting name="CCChannel" value="6" />
										<Setting name="CC" value="3" />
										<Setting name="CCRange" value="0;127" />
										<Setting name="CCDirection" value="Natural" />
										<Setting name="PitchbendChannel" value="6" />
										<Setting name="PitchbendRange" value="-10000;0" />
										<Setting name="PitchbendDirection" value="Up" />
										<Setting name="PCChannel" value="6" />
										<Setting name="PC" value="3" />
									</Array>
								</Setting>
							</Array>
						</Element>
					</Array>
					<Array name="SettingsList">
						<Setting name="Color" value="4" />
						<Setting name="ReadOnly" value="1" />
						<Setting name="Advanced" value="1">
							<Array name="Children">
								<Setting name="Dynamic" value="Low" />
							</Array>
						</Setting>
					</Array>
				</Module>
				<Module name="Pro Matrix">
					<String name="Type" value="5" />
					<String name="Version" value="3" />
					<String name="Revision" value="2" />
					<String name="Color" value="2" />
					<String name="Options" value="0" />
					<String name="ReadOnly" value="1" />
					<Array name="ElementList">
						<Element name="PAD1">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Function" value="Note">
									<Array name="Children">
										<Setting name="NoteChannel" value="1" />
										<Setting name="Note" value="36" />
										<Setting name="NoteVelocity" value="50;127" />
										<Setting name="CCChannel" value="1" />
										<Setting name="CC" value="0" />
										<Setting name="CCRange" value="50;127" />
										<Setting name="CCDirection" value="Natural" />
										<Setting name="PitchbendChannel" value="1" />
										<Setting name="PitchbendRange" value="-10000;8192" />
										<Setting name="PitchbendDirection" value="Up" />
										<Setting name="PCChannel" value="1" />
										<Setting name="PC" value="0" />
										<Setting name="ScriptChannel" value="1" />
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="PAD2">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Function" value="Note">
									<Array name="Children">
										<Setting name="NoteChannel" value="1" />
										<Setting name="Note" value="37" />
										<Setting name="NoteVelocity" value="50;127" />
										<Setting name="CCChannel" value="1" />
										<Setting name="CC" value="1" />
										<Setting name="CCRange" value="50;127" />
										<Setting name="CCDirection" value="Natural" />
										<Setting name="PitchbendChannel" value="1" />
										<Setting name="PitchbendRange" value="-10000;8192" />
										<Setting name="PitchbendDirection" value="Up" />
										<Setting name="PCChannel" value="1" />
										<Setting name="PC" value="1" />
										<Setting name="ScriptChannel" value="2" />
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="PAD3">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Function" value="Note">
									<Array name="Children">
										<Setting name="NoteChannel" value="1" />
										<Setting name="Note" value="38" />
										<Setting name="NoteVelocity" value="50;127" />
										<Setting name="CCChannel" value="1" />
										<Setting name="CC" value="2" />
										<Setting name="CCRange" value="50;127" />
										<Setting name="CCDirection" value="Natural" />
										<Setting name="PitchbendChannel" value="1" />
										<Setting name="PitchbendRange" value="-10000;8192" />
										<Setting name="PitchbendDirection" value="Up" />
										<Setting name="PCChannel" value="1" />
										<Setting name="PC" value="2" />
										<Setting name="ScriptChannel" value="3" />
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="PAD4">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Function" value="Note">
									<Array name="Children">
										<Setting name="NoteChannel" value="1" />
										<Setting name="Note" value="39" />
										<Setting name="NoteVelocity" value="50;127" />
										<Setting name="CCChannel" value="1" />
										<Setting name="CC" value="3" />
										<Setting name="CCRange" value="50;127" />
										<Setting name="CCDirection" value="Natural" />
										<Setting name="PitchbendChannel" value="1" />
										<Setting name="PitchbendRange" value="-10000;8192" />
										<Setting name="PitchbendDirection" value="Up" />
										<Setting name="PCChannel" value="1" />
										<Setting name="PC" value="3" />
										<Setting name="ScriptChannel" value="4" />
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="PAD5">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Function" value="Note">
									<Array name="Children">
										<Setting name="NoteChannel" value="1" />
										<Setting name="Note" value="40" />
										<Setting name="NoteVelocity" value="50;127" />
										<Setting name="CCChannel" value="1" />
										<Setting name="CC" value="4" />
										<Setting name="CCRange" value="50;127" />
										<Setting name="CCDirection" value="Natural" />
										<Setting name="PitchbendChannel" value="1" />
										<Setting name="PitchbendRange" value="-10000;8192" />
										<Setting name="PitchbendDirection" value="Up" />
										<Setting name="PCChannel" value="1" />
										<Setting name="PC" value="4" />
										<Setting name="ScriptChannel" value="1" />
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="PAD6">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Function" value="Note">
									<Array name="Children">
										<Setting name="NoteChannel" value="1" />
										<Setting name="Note" value="41" />
										<Setting name="NoteVelocity" value="50;127" />
										<Setting name="CCChannel" value="1" />
										<Setting name="CC" value="5" />
										<Setting name="CCRange" value="50;127" />
										<Setting name="CCDirection" value="Natural" />
										<Setting name="PitchbendChannel" value="1" />
										<Setting name="PitchbendRange" value="-10000;8192" />
										<Setting name="PitchbendDirection" value="Up" />
										<Setting name="PCChannel" value="1" />
										<Setting name="PC" value="5" />
										<Setting name="ScriptChannel" value="2" />
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="PAD7">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Function" value="Note">
									<Array name="Children">
										<Setting name="NoteChannel" value="1" />
										<Setting name="Note" value="42" />
										<Setting name="NoteVelocity" value="50;127" />
										<Setting name="CCChannel" value="1" />
										<Setting name="CC" value="6" />
										<Setting name="CCRange" value="50;127" />
										<Setting name="CCDirection" value="Natural" />
										<Setting name="PitchbendChannel" value="1" />
										<Setting name="PitchbendRange" value="-10000;8192" />
										<Setting name="PitchbendDirection" value="Up" />
										<Setting name="PCChannel" value="1" />
										<Setting name="PC" value="6" />
										<Setting name="ScriptChannel" value="3" />
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="PAD8">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Function" value="Note">
									<Array name="Children">
										<Setting name="NoteChannel" value="1" />
										<Setting name="Note" value="43" />
										<Setting name="NoteVelocity" value="50;127" />
										<Setting name="CCChannel" value="1" />
										<Setting name="CC" value="7" />
										<Setting name="CCRange" value="50;127" />
										<Setting name="CCDirection" value="Natural" />
										<Setting name="PitchbendChannel" value="1" />
										<Setting name="PitchbendRange" value="-10000;8192" />
										<Setting name="PitchbendDirection" value="Up" />
										<Setting name="PCChannel" value="1" />
										<Setting name="PC" value="7" />
										<Setting name="ScriptChannel" value="4" />
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="PAD9">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Function" value="Note">
									<Array name="Children">
										<Setting name="NoteChannel" value="1" />
										<Setting name="Note" value="44" />
										<Setting name="NoteVelocity" value="50;127" />
										<Setting name="CCChannel" value="1" />
										<Setting name="CC" value="8" />
										<Setting name="CCRange" value="50;127" />
										<Setting name="CCDirection" value="Natural" />
										<Setting name="PitchbendChannel" value="1" />
										<Setting name="PitchbendRange" value="-10000;8192" />
										<Setting name="PitchbendDirection" value="Up" />
										<Setting name="PCChannel" value="1" />
										<Setting name="PC" value="8" />
										<Setting name="ScriptChannel" value="1" />
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="PAD10">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Function" value="Note">
									<Array name="Children">
										<Setting name="NoteChannel" value="1" />
										<Setting name="Note" value="45" />
										<Setting name="NoteVelocity" value="50;127" />
										<Setting name="CCChannel" value="1" />
										<Setting name="CC" value="9" />
										<Setting name="CCRange" value="50;127" />
										<Setting name="CCDirection" value="Natural" />
										<Setting name="PitchbendChannel" value="1" />
										<Setting name="PitchbendRange" value="-10000;8192" />
										<Setting name="PitchbendDirection" value="Up" />
										<Setting name="PCChannel" value="1" />
										<Setting name="PC" value="9" />
										<Setting name="ScriptChannel" value="2" />
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="PAD11">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Function" value="Note">
									<Array name="Children">
										<Setting name="NoteChannel" value="1" />
										<Setting name="Note" value="46" />
										<Setting name="NoteVelocity" value="50;127" />
										<Setting name="CCChannel" value="1" />
										<Setting name="CC" value="10" />
										<Setting name="CCRange" value="50;127" />
										<Setting name="CCDirection" value="Natural" />
										<Setting name="PitchbendChannel" value="1" />
										<Setting name="PitchbendRange" value="-10000;8192" />
										<Setting name="PitchbendDirection" value="Up" />
										<Setting name="PCChannel" value="1" />
										<Setting name="PC" value="10" />
										<Setting name="ScriptChannel" value="3" />
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="PAD12">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Function" value="Note">
									<Array name="Children">
										<Setting name="NoteChannel" value="1" />
										<Setting name="Note" value="47" />
										<Setting name="NoteVelocity" value="50;127" />
										<Setting name="CCChannel" value="1" />
										<Setting name="CC" value="11" />
										<Setting name="CCRange" value="50;127" />
										<Setting name="CCDirection" value="Natural" />
										<Setting name="PitchbendChannel" value="1" />
										<Setting name="PitchbendRange" value="-10000;8192" />
										<Setting name="PitchbendDirection" value="Up" />
										<Setting name="PCChannel" value="1" />
										<Setting name="PC" value="11" />
										<Setting name="ScriptChannel" value="4" />
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="PAD13">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Function" value="Note">
									<Array name="Children">
										<Setting name="NoteChannel" value="1" />
										<Setting name="Note" value="48" />
										<Setting name="NoteVelocity" value="50;127" />
										<Setting name="CCChannel" value="1" />
										<Setting name="CC" value="12" />
										<Setting name="CCRange" value="50;127" />
										<Setting name="CCDirection" value="Natural" />
										<Setting name="PitchbendChannel" value="1" />
										<Setting name="PitchbendRange" value="-10000;8192" />
										<Setting name="PitchbendDirection" value="Up" />
										<Setting name="PCChannel" value="1" />
										<Setting name="PC" value="12" />
										<Setting name="ScriptChannel" value="1" />
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="PAD14">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Function" value="Note">
									<Array name="Children">
										<Setting name="NoteChannel" value="1" />
										<Setting name="Note" value="49" />
										<Setting name="NoteVelocity" value="50;127" />
										<Setting name="CCChannel" value="1" />
										<Setting name="CC" value="13" />
										<Setting name="CCRange" value="50;127" />
										<Setting name="CCDirection" value="Natural" />
										<Setting name="PitchbendChannel" value="1" />
										<Setting name="PitchbendRange" value="-10000;8192" />
										<Setting name="PitchbendDirection" value="Up" />
										<Setting name="PCChannel" value="1" />
										<Setting name="PC" value="13" />
										<Setting name="ScriptChannel" value="2" />
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="PAD15">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Function" value="Note">
									<Array name="Children">
										<Setting name="NoteChannel" value="1" />
										<Setting name="Note" value="50" />
										<Setting name="NoteVelocity" value="50;127" />
										<Setting name="CCChannel" value="1" />
										<Setting name="CC" value="14" />
										<Setting name="CCRange" value="50;127" />
										<Setting name="CCDirection" value="Natural" />
										<Setting name="PitchbendChannel" value="1" />
										<Setting name="PitchbendRange" value="-10000;8192" />
										<Setting name="PitchbendDirection" value="Up" />
										<Setting name="PCChannel" value="1" />
										<Setting name="PC" value="14" />
										<Setting name="ScriptChannel" value="3" />
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="PAD16">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Function" value="Note">
									<Array name="Children">
										<Setting name="NoteChannel" value="1" />
										<Setting name="Note" value="51" />
										<Setting name="NoteVelocity" value="50;127" />
										<Setting name="CCChannel" value="1" />
										<Setting name="CC" value="15" />
										<Setting name="CCRange" value="50;127" />
										<Setting name="CCDirection" value="Natural" />
										<Setting name="PitchbendChannel" value="1" />
										<Setting name="PitchbendRange" value="-10000;8192" />
										<Setting name="PitchbendDirection" value="Up" />
										<Setting name="PCChannel" value="1" />
										<Setting name="PC" value="15" />
										<Setting name="ScriptChannel" value="4" />
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="ALL_PADS">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="NoteChannel" value="1" />
								<Setting name="Note" value="36" />
								<Setting name="NoteVelocity" value="50;127" />
							</Array>
						</Element>
					</Array>
					<Array name="SettingsList">
						<Setting name="Color" value="2" />
						<Setting name="ReadOnly" value="1" />
						<Setting name="Vibrato" value="0" />
						<Setting name="Aftertouch" value="0" />
						<Setting name="MPE" value="0" />
						<Setting name="Expert" value="0" />
						<Setting name="Advanced" value="1">
							<Array name="Children">
								<Setting name="Dynamic" value="Low" />
								<Setting name="MpeChannels" value="1-16" />
								<Setting name="AftertouchType" value="Channel" />
								<Setting name="VibratoValue" value="-10000;1024" />
							</Array>
						</Setting>
					</Array>
				</Module>
				<Module name="Pro Rounds">
					<String name="Type" value="10" />
					<String name="Version" value="3" />
					<String name="Revision" value="1" />
					<String name="Color" value="3" />
					<String name="Options" value="0" />
					<String name="ReadOnly" value="1" />
					<Array name="ElementList">
						<Element name="ROUND1">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Function" value="Control Change">
									<Array name="Children">
										<Setting name="CCChannel" value="9" />
										<Setting name="CC" value="1" />
										<Setting name="CCRange" value="0;127" />
										<Setting name="CCDirection" value="Natural" />
										<Setting name="CCMode" value="Absolute">
											<Array name="Children">
												<Setting name="CCDemultiplier" value="2" />
											</Array>
										</Setting>
										<Setting name="CC14Bits" value="0">
											<Array name="Children">
												<Setting name="CCFine" value="2" />
											</Array>
										</Setting>
										<Setting name="PitchbendChannel" value="9" />
										<Setting name="PitchbendRange" value="-10000;8192" />
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="ROUND2">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Function" value="Control Change">
									<Array name="Children">
										<Setting name="CCChannel" value="9" />
										<Setting name="CC" value="2" />
										<Setting name="CCRange" value="0;127" />
										<Setting name="CCDirection" value="Natural" />
										<Setting name="CCMode" value="Absolute">
											<Array name="Children">
												<Setting name="CCDemultiplier" value="2" />
											</Array>
										</Setting>
										<Setting name="CC14Bits" value="0">
											<Array name="Children">
												<Setting name="CCFine" value="3" />
											</Array>
										</Setting>
										<Setting name="PitchbendChannel" value="9" />
										<Setting name="PitchbendRange" value="-10000;8192" />
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="ROUND3">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Function" value="Control Change">
									<Array name="Children">
										<Setting name="CCChannel" value="9" />
										<Setting name="CC" value="3" />
										<Setting name="CCRange" value="0;127" />
										<Setting name="CCDirection" value="Natural" />
										<Setting name="CCMode" value="Absolute">
											<Array name="Children">
												<Setting name="CCDemultiplier" value="2" />
											</Array>
										</Setting>
										<Setting name="CC14Bits" value="0">
											<Array name="Children">
												<Setting name="CCFine" value="4" />
											</Array>
										</Setting>
										<Setting name="PitchbendChannel" value="9" />
										<Setting name="PitchbendRange" value="-10000;8192" />
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="ROUND4">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Function" value="Control Change">
									<Array name="Children">
										<Setting name="CCChannel" value="9" />
										<Setting name="CC" value="4" />
										<Setting name="CCRange" value="0;127" />
										<Setting name="CCDirection" value="Natural" />
										<Setting name="CCMode" value="Absolute">
											<Array name="Children">
												<Setting name="CCDemultiplier" value="2" />
											</Array>
										</Setting>
										<Setting name="CC14Bits" value="0">
											<Array name="Children">
												<Setting name="CCFine" value="5" />
											</Array>
										</Setting>
										<Setting name="PitchbendChannel" value="9" />
										<Setting name="PitchbendRange" value="-10000;8192" />
									</Array>
								</Setting>
							</Array>
						</Element>
					</Array>
					<Array name="SettingsList">
						<Setting name="Color" value="3" />
						<Setting name="ReadOnly" value="1" />
					</Array>
				</Module>
				<Module name="Pro Strips">
					<String name="Type" value="9" />
					<String name="Version" value="3" />
					<String name="Revision" value="1" />
					<String name="Color" value="2" />
					<String name="Options" value="0" />
					<String name="ReadOnly" value="1" />
					<Array name="ElementList">
						<Element name="STRIP1">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Function" value="Control Change">
									<Array name="Children">
										<Setting name="CCChannel" value="8" />
										<Setting name="CC" value="1" />
										<Setting name="CCRange" value="0;127" />
										<Setting name="CCDirection" value="Natural" />
										<Setting name="CCMode" value="Absolute">
											<Array name="Children">
												<Setting name="CCDemultiplier" value="2" />
											</Array>
										</Setting>
										<Setting name="CC14Bits" value="0">
											<Array name="Children">
												<Setting name="CCFine" value="2" />
											</Array>
										</Setting>
										<Setting name="PitchbendChannel" value="8" />
										<Setting name="PitchbendRange" value="-10000;8192" />
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="STRIP2">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Function" value="Control Change">
									<Array name="Children">
										<Setting name="CCChannel" value="8" />
										<Setting name="CC" value="2" />
										<Setting name="CCRange" value="0;127" />
										<Setting name="CCDirection" value="Natural" />
										<Setting name="CCMode" value="Absolute">
											<Array name="Children">
												<Setting name="CCDemultiplier" value="2" />
											</Array>
										</Setting>
										<Setting name="CC14Bits" value="0">
											<Array name="Children">
												<Setting name="CCFine" value="3" />
											</Array>
										</Setting>
										<Setting name="PitchbendChannel" value="8" />
										<Setting name="PitchbendRange" value="-10000;8192" />
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="STRIP3">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Function" value="Control Change">
									<Array name="Children">
										<Setting name="CCChannel" value="8" />
										<Setting name="CC" value="3" />
										<Setting name="CCRange" value="0;127" />
										<Setting name="CCDirection" value="Natural" />
										<Setting name="CCMode" value="Absolute">
											<Array name="Children">
												<Setting name="CCDemultiplier" value="2" />
											</Array>
										</Setting>
										<Setting name="CC14Bits" value="0">
											<Array name="Children">
												<Setting name="CCFine" value="4" />
											</Array>
										</Setting>
										<Setting name="PitchbendChannel" value="8" />
										<Setting name="PitchbendRange" value="-10000;8192" />
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="STRIP4">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Function" value="Control Change">
									<Array name="Children">
										<Setting name="CCChannel" value="8" />
										<Setting name="CC" value="4" />
										<Setting name="CCRange" value="0;127" />
										<Setting name="CCDirection" value="Natural" />
										<Setting name="CCMode" value="Absolute">
											<Array name="Children">
												<Setting name="CCDemultiplier" value="2" />
											</Array>
										</Setting>
										<Setting name="CC14Bits" value="0">
											<Array name="Children">
												<Setting name="CCFine" value="5" />
											</Array>
										</Setting>
										<Setting name="PitchbendChannel" value="8" />
										<Setting name="PitchbendRange" value="-10000;8192" />
									</Array>
								</Setting>
							</Array>
						</Element>
					</Array>
					<Array name="SettingsList">
						<Setting name="Color" value="2" />
						<Setting name="ReadOnly" value="1" />
						<Setting name="Orientation" value="Vertical" />
					</Array>
				</Module>
				<Module name="Pro Fretboard">
					<String name="Type" value="6" />
					<String name="Version" value="3" />
					<String name="Revision" value="1" />
					<String name="Color" value="3" />
					<String name="Options" value="0" />
					<String name="ReadOnly" value="1" />
					<Array name="ElementList">
						<Element name="STRING1">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="NoteChannel" value="2" />
								<Setting name="Note" value="40" />
								<Setting name="NoteVelocity" value="50;127" />
							</Array>
						</Element>
						<Element name="STRING2">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="NoteChannel" value="2" />
								<Setting name="Note" value="45" />
								<Setting name="NoteVelocity" value="50;127" />
							</Array>
						</Element>
						<Element name="STRING3">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="NoteChannel" value="2" />
								<Setting name="Note" value="50" />
								<Setting name="NoteVelocity" value="50;127" />
							</Array>
						</Element>
						<Element name="STRING4">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="NoteChannel" value="2" />
								<Setting name="Note" value="55" />
								<Setting name="NoteVelocity" value="50;127" />
							</Array>
						</Element>
						<Element name="STRING5">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="NoteChannel" value="2" />
								<Setting name="Note" value="59" />
								<Setting name="NoteVelocity" value="50;127" />
							</Array>
						</Element>
						<Element name="STRING6">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="NoteChannel" value="2" />
								<Setting name="Note" value="64" />
								<Setting name="NoteVelocity" value="50;127" />
							</Array>
						</Element>
						<Element name="ALL_STRINGS">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="NoteChannel" value="2" />
								<Setting name="Note" value="40" />
								<Setting name="Tunning" value="0" />
								<Setting name="NoteVelocity" value="50;127" />
							</Array>
						</Element>
						<Element name="BUTTON1">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Function" value="Channel selection">
									<Array name="Children">
										<Setting name="NoteChannel" value="2" />
										<Setting name="Note" value="0" />
										<Setting name="CCChannel" value="2" />
										<Setting name="CC" value="0" />
										<Setting name="CCRange" value="0;127" />
										<Setting name="CCDirection" value="Natural" />
										<Setting name="PitchbendChannel" value="2" />
										<Setting name="PitchbendRange" value="-10000;8192" />
										<Setting name="PitchbendDirection" value="Up" />
										<Setting name="PCChannel" value="2" />
										<Setting name="PC" value="0" />
										<Setting name="ScriptChannel" value="2" />
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="BUTTON2">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Function" value="Channel selection">
									<Array name="Children">
										<Setting name="NoteChannel" value="2" />
										<Setting name="Note" value="1" />
										<Setting name="CCChannel" value="2" />
										<Setting name="CC" value="1" />
										<Setting name="CCRange" value="0;127" />
										<Setting name="CCDirection" value="Natural" />
										<Setting name="PitchbendChannel" value="2" />
										<Setting name="PitchbendRange" value="-10000;8192" />
										<Setting name="PitchbendDirection" value="Up" />
										<Setting name="PCChannel" value="2" />
										<Setting name="PC" value="1" />
										<Setting name="ScriptChannel" value="3" />
									</Array>
								</Setting>
							</Array>
						</Element>
					</Array>
					<Array name="SettingsList">
						<Setting name="Color" value="3" />
						<Setting name="ReadOnly" value="1" />
						<Setting name="Vibrato" value="1" />
						<Setting name="Bending" value="1" />
						<Setting name="Aftertouch" value="0" />
						<Setting name="MPE" value="0" />
						<Setting name="Expert" value="0" />
						<Setting name="Advanced" value="1">
							<Array name="Children">
								<Setting name="Dynamic" value="Low" />
								<Setting name="MpeChannels" value="1-16" />
								<Setting name="AftertouchType" value="Channel" />
								<Setting name="VibratoValue" value="-10000;1024" />
								<Setting name="BendingValue" value="-10000;4096" />
							</Array>
						</Setting>
					</Array>
				</Module>
				<Module name="Pro Synth">
					<String name="Type" value="12" />
					<String name="Version" value="3" />
					<String name="Revision" value="1" />
					<String name="Color" value="2" />
					<String name="Options" value="0" />
					<String name="ReadOnly" value="1" />
					<Array name="ElementList">
						<Element name="ALL_KEYS">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Channel" value="4" />
								<Setting name="Note" value="53" />
								<Setting name="NoteVelocity" value="50;127" />
								<Setting name="YControlEnable" value="0">
									<Array name="Children">
										<Setting name="YControl" value="74" />
										<Setting name="YControlOrigin" value="64" />
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="GLISSANDO">
							<String name="Revision" value="1" />
							<Array name="SettingsList" />
						</Element>
						<Element name="BUTTON1">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Function" value="Channel selection">
									<Array name="Children">
										<Setting name="NoteChannel" value="4" />
										<Setting name="Note" value="0" />
										<Setting name="CCChannel" value="4" />
										<Setting name="CC" value="0" />
										<Setting name="CCRange" value="0;127" />
										<Setting name="CCDirection" value="Natural" />
										<Setting name="PitchbendChannel" value="4" />
										<Setting name="PitchbendRange" value="-10000;8192" />
										<Setting name="PitchbendDirection" value="Up" />
										<Setting name="PCChannel" value="4" />
										<Setting name="PC" value="0" />
										<Setting name="ScriptChannel" value="4" />
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="BUTTON2">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Function" value="Channel selection">
									<Array name="Children">
										<Setting name="NoteChannel" value="4" />
										<Setting name="Note" value="1" />
										<Setting name="CCChannel" value="4" />
										<Setting name="CC" value="1" />
										<Setting name="CCRange" value="0;127" />
										<Setting name="CCDirection" value="Natural" />
										<Setting name="PitchbendChannel" value="4" />
										<Setting name="PitchbendRange" value="-10000;8192" />
										<Setting name="PitchbendDirection" value="Up" />
										<Setting name="PCChannel" value="4" />
										<Setting name="PC" value="1" />
										<Setting name="ScriptChannel" value="5" />
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="BUTTON3">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Function" value="Sustain on/off">
									<Array name="Children">
										<Setting name="NoteChannel" value="4" />
										<Setting name="Note" value="2" />
										<Setting name="CCChannel" value="4" />
										<Setting name="CC" value="2" />
										<Setting name="CCRange" value="0;127" />
										<Setting name="CCDirection" value="Natural" />
										<Setting name="PitchbendChannel" value="4" />
										<Setting name="PitchbendRange" value="-10000;8192" />
										<Setting name="PitchbendDirection" value="Up" />
										<Setting name="PCChannel" value="4" />
										<Setting name="PC" value="2" />
										<Setting name="ScriptChannel" value="4" />
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="BUTTON4">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Function" value="Vibrato on/off">
									<Array name="Children">
										<Setting name="NoteChannel" value="4" />
										<Setting name="Note" value="3" />
										<Setting name="CCChannel" value="4" />
										<Setting name="CC" value="3" />
										<Setting name="CCRange" value="0;127" />
										<Setting name="CCDirection" value="Natural" />
										<Setting name="PitchbendChannel" value="4" />
										<Setting name="PitchbendRange" value="-10000;8192" />
										<Setting name="PitchbendDirection" value="Up" />
										<Setting name="PCChannel" value="4" />
										<Setting name="PC" value="3" />
										<Setting name="ScriptChannel" value="5" />
									</Array>
								</Setting>
							</Array>
						</Element>
					</Array>
					<Array name="SettingsList">
						<Setting name="Color" value="2" />
						<Setting name="ReadOnly" value="1" />
						<Setting name="Vibrato" value="0" />
						<Setting name="Glissando" value="0" />
						<Setting name="Aftertouch" value="0" />
						<Setting name="MPE" value="0" />
						<Setting name="Advanced" value="1">
							<Array name="Children">
								<Setting name="Dynamic" value="Low" />
								<Setting name="MpeChannels" value="1-16" />
								<Setting name="VibratoValue" value="-10000;1024" />
								<Setting name="GlissandoRange" value="24" />
								<Setting name="AftertouchType" value="Channel" />
							</Array>
						</Setting>
					</Array>
				</Module>
				<Module name="Pro Grand Clavier">
					<String name="Type" value="17" />
					<String name="Version" value="3" />
					<String name="Revision" value="1" />
					<String name="Color" value="6" />
					<String name="Options" value="0" />
					<String name="ReadOnly" value="1" />
					<Array name="ElementList">
						<Element name="ALL_KEYS">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Channel" value="12" />
								<Setting name="Note" value="48" />
								<Setting name="NoteVelocity" value="50;127" />
								<Setting name="YControlEnable" value="1">
									<Array name="Children">
										<Setting name="YControl" value="74" />
										<Setting name="YControlOrigin" value="64" />
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="GLISSANDO">
							<String name="Revision" value="1" />
							<Array name="SettingsList" />
						</Element>
						<Element name="BUTTON1">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Function" value="Sustain on/off">
									<Array name="Children">
										<Setting name="NoteChannel" value="12" />
										<Setting name="Note" value="0" />
										<Setting name="CCChannel" value="12" />
										<Setting name="CC" value="0" />
										<Setting name="CCRange" value="0;127" />
										<Setting name="CCDirection" value="Natural" />
										<Setting name="PitchbendChannel" value="12" />
										<Setting name="PitchbendRange" value="-10000;8192" />
										<Setting name="PitchbendDirection" value="Up" />
										<Setting name="PCChannel" value="12" />
										<Setting name="PC" value="0" />
										<Setting name="ScriptChannel" value="12" />
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="BUTTON2">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Function" value="Glissando on/off">
									<Array name="Children">
										<Setting name="NoteChannel" value="12" />
										<Setting name="Note" value="1" />
										<Setting name="CCChannel" value="12" />
										<Setting name="CC" value="1" />
										<Setting name="CCRange" value="0;127" />
										<Setting name="CCDirection" value="Natural" />
										<Setting name="PitchbendChannel" value="12" />
										<Setting name="PitchbendRange" value="-10000;8192" />
										<Setting name="PitchbendDirection" value="Up" />
										<Setting name="PCChannel" value="12" />
										<Setting name="PC" value="1" />
										<Setting name="ScriptChannel" value="13" />
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="BUBBLE">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="EnableX" value="0">
									<Array name="Children">
										<Setting name="ChannelX" value="12" />
										<Setting name="ControlX" value="1" />
										<Setting name="RangeX" value="0;127" />
										<Setting name="DirectionX" value="Natural" />
										<Setting name="StartValueX" value="64" />
									</Array>
								</Setting>
								<Setting name="EnableY" value="0">
									<Array name="Children">
										<Setting name="ChannelY" value="12" />
										<Setting name="ControlY" value="2" />
										<Setting name="RangeY" value="0;127" />
										<Setting name="DirectionY" value="Natural" />
										<Setting name="StartValueY" value="64" />
									</Array>
								</Setting>
								<Setting name="EnableZ" value="1">
									<Array name="Children">
										<Setting name="ChannelZ" value="12" />
										<Setting name="ControlZ" value="3" />
										<Setting name="RangeZ" value="0;127" />
										<Setting name="DirectionZ" value="Natural" />
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="STRIP">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Function" value="Control Change">
									<Array name="Children">
										<Setting name="CCChannel" value="12" />
										<Setting name="CC" value="4" />
										<Setting name="CCRange" value="0;127" />
										<Setting name="CCDirection" value="Natural" />
										<Setting name="CCMode" value="Absolute">
											<Array name="Children">
												<Setting name="CCDemultiplier" value="2" />
											</Array>
										</Setting>
										<Setting name="CC14Bits" value="0">
											<Array name="Children">
												<Setting name="CCFine" value="5" />
											</Array>
										</Setting>
										<Setting name="PitchbendChannel" value="12" />
										<Setting name="PitchbendRange" value="-10000;8192" />
									</Array>
								</Setting>
							</Array>
						</Element>
					</Array>
					<Array name="SettingsList">
						<Setting name="Color" value="6" />
						<Setting name="ReadOnly" value="1" />
						<Setting name="Vibrato" value="0" />
						<Setting name="Glissando" value="1" />
						<Setting name="Aftertouch" value="1" />
						<Setting name="MPE" value="1" />
						<Setting name="Advanced" value="1">
							<Array name="Children">
								<Setting name="Dynamic" value="Low" />
								<Setting name="MpeChannels" value="1-16" />
								<Setting name="VibratoValue" value="-10000;1024" />
								<Setting name="GlissandoRange" value="24" />
								<Setting name="AftertouchType" value="Polyphonic" />
							</Array>
						</Setting>
					</Array>
				</Module>
				<Module name="Pro Grand Fretboard">
					<String name="Type" value="7" />
					<String name="Version" value="3" />
					<String name="Revision" value="1" />
					<String name="Color" value="1" />
					<String name="Options" value="0" />
					<String name="ReadOnly" value="1" />
					<Array name="ElementList">
						<Element name="STRING1">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="NoteChannel" value="2" />
								<Setting name="Note" value="40" />
								<Setting name="NoteVelocity" value="50;127" />
							</Array>
						</Element>
						<Element name="STRING2">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="NoteChannel" value="2" />
								<Setting name="Note" value="45" />
								<Setting name="NoteVelocity" value="50;127" />
							</Array>
						</Element>
						<Element name="STRING3">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="NoteChannel" value="2" />
								<Setting name="Note" value="50" />
								<Setting name="NoteVelocity" value="50;127" />
							</Array>
						</Element>
						<Element name="STRING4">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="NoteChannel" value="2" />
								<Setting name="Note" value="55" />
								<Setting name="NoteVelocity" value="50;127" />
							</Array>
						</Element>
						<Element name="STRING5">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="NoteChannel" value="2" />
								<Setting name="Note" value="59" />
								<Setting name="NoteVelocity" value="50;127" />
							</Array>
						</Element>
						<Element name="STRING6">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="NoteChannel" value="2" />
								<Setting name="Note" value="64" />
								<Setting name="NoteVelocity" value="50;127" />
							</Array>
						</Element>
						<Element name="ALL_STRINGS">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="NoteChannel" value="2" />
								<Setting name="Note" value="40" />
								<Setting name="Tunning" value="0" />
								<Setting name="NoteVelocity" value="50;127" />
							</Array>
						</Element>
						<Element name="BUTTON1">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Function" value="Fretless on/off">
									<Array name="Children">
										<Setting name="NoteChannel" value="2" />
										<Setting name="Note" value="0" />
										<Setting name="CCChannel" value="2" />
										<Setting name="CC" value="0" />
										<Setting name="CCRange" value="0;127" />
										<Setting name="CCDirection" value="Natural" />
										<Setting name="PitchbendChannel" value="2" />
										<Setting name="PitchbendRange" value="-10000;8192" />
										<Setting name="PitchbendDirection" value="Up" />
										<Setting name="PCChannel" value="2" />
										<Setting name="PC" value="0" />
										<Setting name="ScriptChannel" value="2" />
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="BUTTON2">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Function" value="Bending on/off">
									<Array name="Children">
										<Setting name="NoteChannel" value="2" />
										<Setting name="Note" value="1" />
										<Setting name="CCChannel" value="2" />
										<Setting name="CC" value="1" />
										<Setting name="CCRange" value="0;127" />
										<Setting name="CCDirection" value="Natural" />
										<Setting name="PitchbendChannel" value="2" />
										<Setting name="PitchbendRange" value="-10000;8192" />
										<Setting name="PitchbendDirection" value="Up" />
										<Setting name="PCChannel" value="2" />
										<Setting name="PC" value="1" />
										<Setting name="ScriptChannel" value="3" />
									</Array>
								</Setting>
							</Array>
						</Element>
					</Array>
					<Array name="SettingsList">
						<Setting name="Color" value="1" />
						<Setting name="ReadOnly" value="1" />
						<Setting name="Fretless" value="1" />
						<Setting name="Vibrato" value="0" />
						<Setting name="Bending" value="0" />
						<Setting name="Aftertouch" value="0" />
						<Setting name="MPE" value="1" />
						<Setting name="Expert" value="0" />
						<Setting name="Advanced" value="1">
							<Array name="Children">
								<Setting name="Dynamic" value="Low" />
								<Setting name="MpeChannels" value="1-16" />
								<Setting name="AftertouchType" value="Channel" />
								<Setting name="VibratoValue" value="-10000;1024" />
								<Setting name="BendingValue" value="-10000;800" />
								<Setting name="PitchRange" value="24" />
							</Array>
						</Setting>
					</Array>
				</Module>
				<Module name="Pro Scaler">
					<String name="Type" value="14" />
					<String name="Version" value="3" />
					<String name="Revision" value="1" />
					<String name="Color" value="4" />
					<String name="Options" value="0" />
					<String name="ReadOnly" value="1" />
					<Array name="ElementList">
						<Element name="KEY1">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Channel" value="10" />
								<Setting name="Note" value="52" />
								<Setting name="NoteVelocity" value="50;127" />
								<Setting name="YControlEnable" value="1">
									<Array name="Children">
										<Setting name="YControl" value="74" />
										<Setting name="YControlRange" value="0;127" />
										<Setting name="YControlDirection" value="Natural" />
										<Setting name="YControlMode" value="Absolute">
											<Array name="Children">
												<Setting name="YControlOrigin" value="64" />
											</Array>
										</Setting>
										<Setting name="YControlCC14Bits" value="0">
											<Array name="Children">
												<Setting name="YControlFine" value="75" />
											</Array>
										</Setting>
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="KEY2">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Channel" value="10" />
								<Setting name="Note" value="54" />
								<Setting name="NoteVelocity" value="50;127" />
								<Setting name="YControlEnable" value="1">
									<Array name="Children">
										<Setting name="YControl" value="74" />
										<Setting name="YControlRange" value="0;127" />
										<Setting name="YControlDirection" value="Natural" />
										<Setting name="YControlMode" value="Absolute">
											<Array name="Children">
												<Setting name="YControlOrigin" value="64" />
											</Array>
										</Setting>
										<Setting name="YControlCC14Bits" value="0">
											<Array name="Children">
												<Setting name="YControlFine" value="75" />
											</Array>
										</Setting>
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="KEY3">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Channel" value="10" />
								<Setting name="Note" value="56" />
								<Setting name="NoteVelocity" value="50;127" />
								<Setting name="YControlEnable" value="1">
									<Array name="Children">
										<Setting name="YControl" value="74" />
										<Setting name="YControlRange" value="0;127" />
										<Setting name="YControlDirection" value="Natural" />
										<Setting name="YControlMode" value="Absolute">
											<Array name="Children">
												<Setting name="YControlOrigin" value="64" />
											</Array>
										</Setting>
										<Setting name="YControlCC14Bits" value="0">
											<Array name="Children">
												<Setting name="YControlFine" value="75" />
											</Array>
										</Setting>
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="KEY4">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Channel" value="10" />
								<Setting name="Note" value="59" />
								<Setting name="NoteVelocity" value="50;127" />
								<Setting name="YControlEnable" value="1">
									<Array name="Children">
										<Setting name="YControl" value="74" />
										<Setting name="YControlRange" value="0;127" />
										<Setting name="YControlDirection" value="Natural" />
										<Setting name="YControlMode" value="Absolute">
											<Array name="Children">
												<Setting name="YControlOrigin" value="64" />
											</Array>
										</Setting>
										<Setting name="YControlCC14Bits" value="0">
											<Array name="Children">
												<Setting name="YControlFine" value="75" />
											</Array>
										</Setting>
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="KEY5">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Channel" value="10" />
								<Setting name="Note" value="61" />
								<Setting name="NoteVelocity" value="50;127" />
								<Setting name="YControlEnable" value="1">
									<Array name="Children">
										<Setting name="YControl" value="74" />
										<Setting name="YControlRange" value="0;127" />
										<Setting name="YControlDirection" value="Natural" />
										<Setting name="YControlMode" value="Absolute">
											<Array name="Children">
												<Setting name="YControlOrigin" value="64" />
											</Array>
										</Setting>
										<Setting name="YControlCC14Bits" value="0">
											<Array name="Children">
												<Setting name="YControlFine" value="75" />
											</Array>
										</Setting>
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="KEY6">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Channel" value="10" />
								<Setting name="Note" value="64" />
								<Setting name="NoteVelocity" value="50;127" />
								<Setting name="YControlEnable" value="1">
									<Array name="Children">
										<Setting name="YControl" value="74" />
										<Setting name="YControlRange" value="0;127" />
										<Setting name="YControlDirection" value="Natural" />
										<Setting name="YControlMode" value="Absolute">
											<Array name="Children">
												<Setting name="YControlOrigin" value="64" />
											</Array>
										</Setting>
										<Setting name="YControlCC14Bits" value="0">
											<Array name="Children">
												<Setting name="YControlFine" value="75" />
											</Array>
										</Setting>
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="KEY7">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Channel" value="10" />
								<Setting name="Note" value="66" />
								<Setting name="NoteVelocity" value="50;127" />
								<Setting name="YControlEnable" value="1">
									<Array name="Children">
										<Setting name="YControl" value="74" />
										<Setting name="YControlRange" value="0;127" />
										<Setting name="YControlDirection" value="Natural" />
										<Setting name="YControlMode" value="Absolute">
											<Array name="Children">
												<Setting name="YControlOrigin" value="64" />
											</Array>
										</Setting>
										<Setting name="YControlCC14Bits" value="0">
											<Array name="Children">
												<Setting name="YControlFine" value="75" />
											</Array>
										</Setting>
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="KEY8">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Channel" value="10" />
								<Setting name="Note" value="68" />
								<Setting name="NoteVelocity" value="50;127" />
								<Setting name="YControlEnable" value="1">
									<Array name="Children">
										<Setting name="YControl" value="74" />
										<Setting name="YControlRange" value="0;127" />
										<Setting name="YControlDirection" value="Natural" />
										<Setting name="YControlMode" value="Absolute">
											<Array name="Children">
												<Setting name="YControlOrigin" value="64" />
											</Array>
										</Setting>
										<Setting name="YControlCC14Bits" value="0">
											<Array name="Children">
												<Setting name="YControlFine" value="75" />
											</Array>
										</Setting>
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="KEY9">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Channel" value="10" />
								<Setting name="Note" value="71" />
								<Setting name="NoteVelocity" value="50;127" />
								<Setting name="YControlEnable" value="1">
									<Array name="Children">
										<Setting name="YControl" value="74" />
										<Setting name="YControlRange" value="0;127" />
										<Setting name="YControlDirection" value="Natural" />
										<Setting name="YControlMode" value="Absolute">
											<Array name="Children">
												<Setting name="YControlOrigin" value="64" />
											</Array>
										</Setting>
										<Setting name="YControlCC14Bits" value="0">
											<Array name="Children">
												<Setting name="YControlFine" value="75" />
											</Array>
										</Setting>
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="KEY10">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Channel" value="10" />
								<Setting name="Note" value="73" />
								<Setting name="NoteVelocity" value="50;127" />
								<Setting name="YControlEnable" value="1">
									<Array name="Children">
										<Setting name="YControl" value="74" />
										<Setting name="YControlRange" value="0;127" />
										<Setting name="YControlDirection" value="Natural" />
										<Setting name="YControlMode" value="Absolute">
											<Array name="Children">
												<Setting name="YControlOrigin" value="64" />
											</Array>
										</Setting>
										<Setting name="YControlCC14Bits" value="0">
											<Array name="Children">
												<Setting name="YControlFine" value="75" />
											</Array>
										</Setting>
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="KEY11">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Channel" value="10" />
								<Setting name="Note" value="76" />
								<Setting name="NoteVelocity" value="50;127" />
								<Setting name="YControlEnable" value="1">
									<Array name="Children">
										<Setting name="YControl" value="74" />
										<Setting name="YControlRange" value="0;127" />
										<Setting name="YControlDirection" value="Natural" />
										<Setting name="YControlMode" value="Absolute">
											<Array name="Children">
												<Setting name="YControlOrigin" value="64" />
											</Array>
										</Setting>
										<Setting name="YControlCC14Bits" value="0">
											<Array name="Children">
												<Setting name="YControlFine" value="75" />
											</Array>
										</Setting>
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="KEY12">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Channel" value="10" />
								<Setting name="Note" value="78" />
								<Setting name="NoteVelocity" value="50;127" />
								<Setting name="YControlEnable" value="1">
									<Array name="Children">
										<Setting name="YControl" value="74" />
										<Setting name="YControlRange" value="0;127" />
										<Setting name="YControlDirection" value="Natural" />
										<Setting name="YControlMode" value="Absolute">
											<Array name="Children">
												<Setting name="YControlOrigin" value="64" />
											</Array>
										</Setting>
										<Setting name="YControlCC14Bits" value="0">
											<Array name="Children">
												<Setting name="YControlFine" value="75" />
											</Array>
										</Setting>
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="KEY13">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Channel" value="10" />
								<Setting name="Note" value="80" />
								<Setting name="NoteVelocity" value="50;127" />
								<Setting name="YControlEnable" value="1">
									<Array name="Children">
										<Setting name="YControl" value="74" />
										<Setting name="YControlRange" value="0;127" />
										<Setting name="YControlDirection" value="Natural" />
										<Setting name="YControlMode" value="Absolute">
											<Array name="Children">
												<Setting name="YControlOrigin" value="64" />
											</Array>
										</Setting>
										<Setting name="YControlCC14Bits" value="0">
											<Array name="Children">
												<Setting name="YControlFine" value="75" />
											</Array>
										</Setting>
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="KEY14">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Channel" value="10" />
								<Setting name="Note" value="83" />
								<Setting name="NoteVelocity" value="50;127" />
								<Setting name="YControlEnable" value="1">
									<Array name="Children">
										<Setting name="YControl" value="74" />
										<Setting name="YControlRange" value="0;127" />
										<Setting name="YControlDirection" value="Natural" />
										<Setting name="YControlMode" value="Absolute">
											<Array name="Children">
												<Setting name="YControlOrigin" value="64" />
											</Array>
										</Setting>
										<Setting name="YControlCC14Bits" value="0">
											<Array name="Children">
												<Setting name="YControlFine" value="75" />
											</Array>
										</Setting>
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="KEY15">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Channel" value="10" />
								<Setting name="Note" value="85" />
								<Setting name="NoteVelocity" value="50;127" />
								<Setting name="YControlEnable" value="1">
									<Array name="Children">
										<Setting name="YControl" value="74" />
										<Setting name="YControlRange" value="0;127" />
										<Setting name="YControlDirection" value="Natural" />
										<Setting name="YControlMode" value="Absolute">
											<Array name="Children">
												<Setting name="YControlOrigin" value="64" />
											</Array>
										</Setting>
										<Setting name="YControlCC14Bits" value="0">
											<Array name="Children">
												<Setting name="YControlFine" value="75" />
											</Array>
										</Setting>
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="KEY16">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Channel" value="10" />
								<Setting name="Note" value="88" />
								<Setting name="NoteVelocity" value="50;127" />
								<Setting name="YControlEnable" value="1">
									<Array name="Children">
										<Setting name="YControl" value="74" />
										<Setting name="YControlRange" value="0;127" />
										<Setting name="YControlDirection" value="Natural" />
										<Setting name="YControlMode" value="Absolute">
											<Array name="Children">
												<Setting name="YControlOrigin" value="64" />
											</Array>
										</Setting>
										<Setting name="YControlCC14Bits" value="0">
											<Array name="Children">
												<Setting name="YControlFine" value="75" />
											</Array>
										</Setting>
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="KEY17">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Channel" value="10" />
								<Setting name="Note" value="90" />
								<Setting name="NoteVelocity" value="50;127" />
								<Setting name="YControlEnable" value="1">
									<Array name="Children">
										<Setting name="YControl" value="74" />
										<Setting name="YControlRange" value="0;127" />
										<Setting name="YControlDirection" value="Natural" />
										<Setting name="YControlMode" value="Absolute">
											<Array name="Children">
												<Setting name="YControlOrigin" value="64" />
											</Array>
										</Setting>
										<Setting name="YControlCC14Bits" value="0">
											<Array name="Children">
												<Setting name="YControlFine" value="75" />
											</Array>
										</Setting>
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="ALL_KEYS">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Channel" value="10" />
								<Setting name="Note" value="52" />
								<Setting name="Scale" value="11" />
								<Setting name="NoteVelocity" value="50;127" />
								<Setting name="YControlEnable" value="1">
									<Array name="Children">
										<Setting name="YControl" value="74" />
										<Setting name="YControlRange" value="0;127" />
										<Setting name="YControlDirection" value="Natural" />
										<Setting name="YControlMode" value="Absolute">
											<Array name="Children">
												<Setting name="YControlOrigin" value="64" />
											</Array>
										</Setting>
										<Setting name="YControlCC14Bits" value="0">
											<Array name="Children">
												<Setting name="YControlFine" value="75" />
											</Array>
										</Setting>
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="GLISSANDO">
							<String name="Revision" value="1" />
							<Array name="SettingsList" />
						</Element>
						<Element name="BUTTON1">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Function" value="Channel selection">
									<Array name="Children">
										<Setting name="NoteChannel" value="10" />
										<Setting name="Note" value="0" />
										<Setting name="CCChannel" value="10" />
										<Setting name="CC" value="0" />
										<Setting name="CCRange" value="0;127" />
										<Setting name="CCDirection" value="Natural" />
										<Setting name="PitchbendChannel" value="10" />
										<Setting name="PitchbendRange" value="-10000;8192" />
										<Setting name="PitchbendDirection" value="Up" />
										<Setting name="PCChannel" value="10" />
										<Setting name="PC" value="0" />
										<Setting name="ScriptChannel" value="10" />
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="BUTTON2">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Function" value="Channel selection">
									<Array name="Children">
										<Setting name="NoteChannel" value="10" />
										<Setting name="Note" value="1" />
										<Setting name="CCChannel" value="10" />
										<Setting name="CC" value="1" />
										<Setting name="CCRange" value="0;127" />
										<Setting name="CCDirection" value="Natural" />
										<Setting name="PitchbendChannel" value="10" />
										<Setting name="PitchbendRange" value="-10000;8192" />
										<Setting name="PitchbendDirection" value="Up" />
										<Setting name="PCChannel" value="10" />
										<Setting name="PC" value="1" />
										<Setting name="ScriptChannel" value="11" />
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="BUBBLE">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="EnableX" value="0">
									<Array name="Children">
										<Setting name="ChannelX" value="10" />
										<Setting name="ControlX" value="1" />
										<Setting name="RangeX" value="0;127" />
										<Setting name="DirectionX" value="Natural" />
										<Setting name="StartValueX" value="64" />
									</Array>
								</Setting>
								<Setting name="EnableY" value="0">
									<Array name="Children">
										<Setting name="ChannelY" value="10" />
										<Setting name="ControlY" value="2" />
										<Setting name="RangeY" value="0;127" />
										<Setting name="DirectionY" value="Natural" />
										<Setting name="StartValueY" value="64" />
									</Array>
								</Setting>
								<Setting name="EnableZ" value="1">
									<Array name="Children">
										<Setting name="ChannelZ" value="10" />
										<Setting name="ControlZ" value="3" />
										<Setting name="RangeZ" value="0;127" />
										<Setting name="DirectionZ" value="Natural" />
									</Array>
								</Setting>
							</Array>
						</Element>
						<Element name="STRIP">
							<String name="Revision" value="2" />
							<Array name="SettingsList">
								<Setting name="Function" value="Control Change">
									<Array name="Children">
										<Setting name="CCChannel" value="10" />
										<Setting name="CC" value="4" />
										<Setting name="CCRange" value="0;127" />
										<Setting name="CCDirection" value="Natural" />
										<Setting name="CCMode" value="Absolute">
											<Array name="Children">
												<Setting name="CCDemultiplier" value="2" />
											</Array>
										</Setting>
										<Setting name="CC14Bits" value="0">
											<Array name="Children">
												<Setting name="CCFine" value="5" />
											</Array>
										</Setting>
										<Setting name="PitchbendChannel" value="10" />
										<Setting name="PitchbendRange" value="-10000;8192" />
									</Array>
								</Setting>
							</Array>
						</Element>
					</Array>
					<Array name="SettingsList">
						<Setting name="Color" value="4" />
						<Setting name="ReadOnly" value="1" />
						<Setting name="Vibrato" value="1" />
						<Setting name="Glissando" value="0" />
						<Setting name="Aftertouch" value="1" />
						<Setting name="MPE" value="0" />
						<Setting name="Expert" value="0" />
						<Setting name="Advanced" value="1">
							<Array name="Children">
								<Setting name="Dynamic" value="Low" />
								<Setting name="MpeChannels" value="1-16" />
								<Setting name="VibratoValue" value="-10000;1024" />
								<Setting name="GlissandoRange" value="24" />
								<Setting name="AftertouchType" value="Channel" />
							</Array>
						</Setting>
					</Array>
				</Module>
			</Array>
		</Folder>
    <Folder name="Play Factory presets">
      <String name="IsExpanded" value="1" />
      <Array name="Entries">
        <Module name="Play Drum">
          <String name="Type" value="25" />
          <String name="Version" value="3" />
          <String name="Revision" value="1" />
          <String name="Color" value="12" />
          <String name="Options" value="0" />
          <String name="ReadOnly" value="1" />
          <Array name="ElementList">
            <Element name="PAD1">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="Function" value="Note">
                  <Array name="Children">
                    <Setting name="NoteChannel" value="1" />
                    <Setting name="Note" value="36" />
                    <Setting name="NoteVelocity" value="50;127" />
                    <Setting name="CCChannel" value="1" />
                    <Setting name="CC" value="0" />
                    <Setting name="CCRange" value="50;127" />
                    <Setting name="CCDirection" value="Natural" />
                    <Setting name="PitchbendChannel" value="1" />
                    <Setting name="PitchbendRange" value="-10000;8192" />
                    <Setting name="PitchbendDirection" value="Up" />
                    <Setting name="PCChannel" value="1" />
                    <Setting name="PC" value="0" />
                    <Setting name="ScriptChannel" value="1" />
                  </Array>
                </Setting>
              </Array>
            </Element>
            <Element name="PAD2">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="Function" value="Note">
                  <Array name="Children">
                    <Setting name="NoteChannel" value="1" />
                    <Setting name="Note" value="37" />
                    <Setting name="NoteVelocity" value="50;127" />
                    <Setting name="CCChannel" value="1" />
                    <Setting name="CC" value="1" />
                    <Setting name="CCRange" value="50;127" />
                    <Setting name="CCDirection" value="Natural" />
                    <Setting name="PitchbendChannel" value="1" />
                    <Setting name="PitchbendRange" value="-10000;8192" />
                    <Setting name="PitchbendDirection" value="Up" />
                    <Setting name="PCChannel" value="1" />
                    <Setting name="PC" value="1" />
                    <Setting name="ScriptChannel" value="2" />
                  </Array>
                </Setting>
              </Array>
            </Element>
            <Element name="PAD3">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="Function" value="Note">
                  <Array name="Children">
                    <Setting name="NoteChannel" value="1" />
                    <Setting name="Note" value="38" />
                    <Setting name="NoteVelocity" value="50;127" />
                    <Setting name="CCChannel" value="1" />
                    <Setting name="CC" value="2" />
                    <Setting name="CCRange" value="50;127" />
                    <Setting name="CCDirection" value="Natural" />
                    <Setting name="PitchbendChannel" value="1" />
                    <Setting name="PitchbendRange" value="-10000;8192" />
                    <Setting name="PitchbendDirection" value="Up" />
                    <Setting name="PCChannel" value="1" />
                    <Setting name="PC" value="2" />
                    <Setting name="ScriptChannel" value="3" />
                  </Array>
                </Setting>
              </Array>
            </Element>
            <Element name="PAD4">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="Function" value="Note">
                  <Array name="Children">
                    <Setting name="NoteChannel" value="1" />
                    <Setting name="Note" value="39" />
                    <Setting name="NoteVelocity" value="50;127" />
                    <Setting name="CCChannel" value="1" />
                    <Setting name="CC" value="3" />
                    <Setting name="CCRange" value="50;127" />
                    <Setting name="CCDirection" value="Natural" />
                    <Setting name="PitchbendChannel" value="1" />
                    <Setting name="PitchbendRange" value="-10000;8192" />
                    <Setting name="PitchbendDirection" value="Up" />
                    <Setting name="PCChannel" value="1" />
                    <Setting name="PC" value="3" />
                    <Setting name="ScriptChannel" value="4" />
                  </Array>
                </Setting>
              </Array>
            </Element>
            <Element name="PAD5">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="Function" value="Note">
                  <Array name="Children">
                    <Setting name="NoteChannel" value="1" />
                    <Setting name="Note" value="40" />
                    <Setting name="NoteVelocity" value="50;127" />
                    <Setting name="CCChannel" value="1" />
                    <Setting name="CC" value="4" />
                    <Setting name="CCRange" value="50;127" />
                    <Setting name="CCDirection" value="Natural" />
                    <Setting name="PitchbendChannel" value="1" />
                    <Setting name="PitchbendRange" value="-10000;8192" />
                    <Setting name="PitchbendDirection" value="Up" />
                    <Setting name="PCChannel" value="1" />
                    <Setting name="PC" value="4" />
                    <Setting name="ScriptChannel" value="1" />
                  </Array>
                </Setting>
              </Array>
            </Element>
            <Element name="PAD6">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="Function" value="Note">
                  <Array name="Children">
                    <Setting name="NoteChannel" value="1" />
                    <Setting name="Note" value="41" />
                    <Setting name="NoteVelocity" value="50;127" />
                    <Setting name="CCChannel" value="1" />
                    <Setting name="CC" value="5" />
                    <Setting name="CCRange" value="50;127" />
                    <Setting name="CCDirection" value="Natural" />
                    <Setting name="PitchbendChannel" value="1" />
                    <Setting name="PitchbendRange" value="-10000;8192" />
                    <Setting name="PitchbendDirection" value="Up" />
                    <Setting name="PCChannel" value="1" />
                    <Setting name="PC" value="5" />
                    <Setting name="ScriptChannel" value="2" />
                  </Array>
                </Setting>
              </Array>
            </Element>
            <Element name="PAD7">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="Function" value="Note">
                  <Array name="Children">
                    <Setting name="NoteChannel" value="1" />
                    <Setting name="Note" value="42" />
                    <Setting name="NoteVelocity" value="50;127" />
                    <Setting name="CCChannel" value="1" />
                    <Setting name="CC" value="6" />
                    <Setting name="CCRange" value="50;127" />
                    <Setting name="CCDirection" value="Natural" />
                    <Setting name="PitchbendChannel" value="1" />
                    <Setting name="PitchbendRange" value="-10000;8192" />
                    <Setting name="PitchbendDirection" value="Up" />
                    <Setting name="PCChannel" value="1" />
                    <Setting name="PC" value="6" />
                    <Setting name="ScriptChannel" value="3" />
                  </Array>
                </Setting>
              </Array>
            </Element>
            <Element name="PAD8">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="Function" value="Note">
                  <Array name="Children">
                    <Setting name="NoteChannel" value="1" />
                    <Setting name="Note" value="43" />
                    <Setting name="NoteVelocity" value="50;127" />
                    <Setting name="CCChannel" value="1" />
                    <Setting name="CC" value="7" />
                    <Setting name="CCRange" value="50;127" />
                    <Setting name="CCDirection" value="Natural" />
                    <Setting name="PitchbendChannel" value="1" />
                    <Setting name="PitchbendRange" value="-10000;8192" />
                    <Setting name="PitchbendDirection" value="Up" />
                    <Setting name="PCChannel" value="1" />
                    <Setting name="PC" value="7" />
                    <Setting name="ScriptChannel" value="4" />
                  </Array>
                </Setting>
              </Array>
            </Element>
            <Element name="PAD9">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="Function" value="Note">
                  <Array name="Children">
                    <Setting name="NoteChannel" value="1" />
                    <Setting name="Note" value="44" />
                    <Setting name="NoteVelocity" value="50;127" />
                    <Setting name="CCChannel" value="1" />
                    <Setting name="CC" value="8" />
                    <Setting name="CCRange" value="50;127" />
                    <Setting name="CCDirection" value="Natural" />
                    <Setting name="PitchbendChannel" value="1" />
                    <Setting name="PitchbendRange" value="-10000;8192" />
                    <Setting name="PitchbendDirection" value="Up" />
                    <Setting name="PCChannel" value="1" />
                    <Setting name="PC" value="8" />
                    <Setting name="ScriptChannel" value="1" />
                  </Array>
                </Setting>
              </Array>
            </Element>
            <Element name="PAD10">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="Function" value="Note">
                  <Array name="Children">
                    <Setting name="NoteChannel" value="1" />
                    <Setting name="Note" value="45" />
                    <Setting name="NoteVelocity" value="50;127" />
                    <Setting name="CCChannel" value="1" />
                    <Setting name="CC" value="9" />
                    <Setting name="CCRange" value="50;127" />
                    <Setting name="CCDirection" value="Natural" />
                    <Setting name="PitchbendChannel" value="1" />
                    <Setting name="PitchbendRange" value="-10000;8192" />
                    <Setting name="PitchbendDirection" value="Up" />
                    <Setting name="PCChannel" value="1" />
                    <Setting name="PC" value="9" />
                    <Setting name="ScriptChannel" value="2" />
                  </Array>
                </Setting>
              </Array>
            </Element>
            <Element name="PAD11">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="Function" value="Note">
                  <Array name="Children">
                    <Setting name="NoteChannel" value="1" />
                    <Setting name="Note" value="46" />
                    <Setting name="NoteVelocity" value="50;127" />
                    <Setting name="CCChannel" value="1" />
                    <Setting name="CC" value="10" />
                    <Setting name="CCRange" value="50;127" />
                    <Setting name="CCDirection" value="Natural" />
                    <Setting name="PitchbendChannel" value="1" />
                    <Setting name="PitchbendRange" value="-10000;8192" />
                    <Setting name="PitchbendDirection" value="Up" />
                    <Setting name="PCChannel" value="1" />
                    <Setting name="PC" value="10" />
                    <Setting name="ScriptChannel" value="3" />
                  </Array>
                </Setting>
              </Array>
            </Element>
            <Element name="PAD12">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="Function" value="Note">
                  <Array name="Children">
                    <Setting name="NoteChannel" value="1" />
                    <Setting name="Note" value="47" />
                    <Setting name="NoteVelocity" value="50;127" />
                    <Setting name="CCChannel" value="1" />
                    <Setting name="CC" value="11" />
                    <Setting name="CCRange" value="50;127" />
                    <Setting name="CCDirection" value="Natural" />
                    <Setting name="PitchbendChannel" value="1" />
                    <Setting name="PitchbendRange" value="-10000;8192" />
                    <Setting name="PitchbendDirection" value="Up" />
                    <Setting name="PCChannel" value="1" />
                    <Setting name="PC" value="11" />
                    <Setting name="ScriptChannel" value="4" />
                  </Array>
                </Setting>
              </Array>
            </Element>
            <Element name="ALL_PADS">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="NoteChannel" value="1" />
                <Setting name="Note" value="36" />
                <Setting name="NoteVelocity" value="50;127" />
              </Array>
            </Element>
            <Element name="BUTTON1">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="Function" value="Note">
                  <Array name="Children">
                    <Setting name="NoteChannel" value="1" />
                    <Setting name="Note" value="1" />
                    <Setting name="CCChannel" value="1" />
                    <Setting name="CC" value="14" />
                    <Setting name="CCRange" value="127;127" />
                    <Setting name="CCDirection" value="Natural" />
                    <Setting name="PitchbendChannel" value="1" />
                    <Setting name="PitchbendRange" value="-10000;8192" />
                    <Setting name="PitchbendDirection" value="Up" />
                    <Setting name="PCChannel" value="1" />
                    <Setting name="PC" value="0" />
                    <Setting name="ScriptChannel" value="1" />
                  </Array>
                </Setting>
              </Array>
            </Element>
            <Element name="BUTTON2">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="Function" value="Note">
                  <Array name="Children">
                    <Setting name="NoteChannel" value="1" />
                    <Setting name="Note" value="0" />
                    <Setting name="CCChannel" value="1" />
                    <Setting name="CC" value="15" />
                    <Setting name="CCRange" value="127;127" />
                    <Setting name="CCDirection" value="Natural" />
                    <Setting name="PitchbendChannel" value="1" />
                    <Setting name="PitchbendRange" value="-10000;8192" />
                    <Setting name="PitchbendDirection" value="Up" />
                    <Setting name="PCChannel" value="1" />
                    <Setting name="PC" value="1" />
                    <Setting name="ScriptChannel" value="2" />
                  </Array>
                </Setting>
              </Array>
            </Element>
            <Element name="BUBBLE">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="EnableX" value="0">
                  <Array name="Children">
                    <Setting name="ChannelX" value="1" />
                    <Setting name="ControlX" value="75" />
                    <Setting name="RangeX" value="0;127" />
                    <Setting name="DirectionX" value="Natural" />
                    <Setting name="StartValueX" value="64" />
                  </Array>
                </Setting>
                <Setting name="EnableY" value="0">
                  <Array name="Children">
                    <Setting name="ChannelY" value="1" />
                    <Setting name="ControlY" value="76" />
                    <Setting name="RangeY" value="0;127" />
                    <Setting name="DirectionY" value="Natural" />
                    <Setting name="StartValueY" value="64" />
                  </Array>
                </Setting>
                <Setting name="EnableZ" value="1">
                  <Array name="Children">
                    <Setting name="ChannelZ" value="1" />
                    <Setting name="ControlZ" value="1" />
                    <Setting name="RangeZ" value="0;127" />
                    <Setting name="DirectionZ" value="Natural" />
                  </Array>
                </Setting>
              </Array>
            </Element>
            <Element name="AREA">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="EnableX" value="1">
                  <Array name="Children">
                    <Setting name="ChannelX" value="1" />
                    <Setting name="ControlX" value="12" />
                    <Setting name="RangeX" value="0;127" />
                    <Setting name="DirectionX" value="Natural" />
                    <Setting name="ModeX" value="Absolute">
                      <Array name="Children">
                        <Setting name="DemultiplierX" value="2" />
                      </Array>
                    </Setting>
                    <Setting name="CC14BitsX" value="0">
                      <Array name="Children">
                        <Setting name="CCFineX" value="13" />
                      </Array>
                    </Setting>
                  </Array>
                </Setting>
                <Setting name="EnableY" value="1">
                  <Array name="Children">
                    <Setting name="ChannelY" value="1" />
                    <Setting name="ControlY" value="13" />
                    <Setting name="RangeY" value="0;127" />
                    <Setting name="DirectionY" value="Natural" />
                    <Setting name="ModeY" value="Absolute">
                      <Array name="Children">
                        <Setting name="DemultiplierY" value="2" />
                      </Array>
                    </Setting>
                    <Setting name="CC14BitsY" value="0">
                      <Array name="Children">
                        <Setting name="CCFineY" value="14" />
                      </Array>
                    </Setting>
                  </Array>
                </Setting>
                <Setting name="EnableZ" value="1">
                  <Array name="Children">
                    <Setting name="ChannelZ" value="1" />
                    <Setting name="ControlZ" value="80" />
                    <Setting name="RangeZ" value="127;127" />
                    <Setting name="DirectionZ" value="Natural" />
                  </Array>
                </Setting>
              </Array>
            </Element>
          </Array>
          <Array name="SettingsList">
            <Setting name="Color" value="12" />
            <Setting name="ReadOnly" value="1" />
            <Setting name="Vibrato" value="0" />
            <Setting name="Aftertouch" value="0" />
            <Setting name="MPE" value="0" />
            <Setting name="Expert" value="0" />
            <Setting name="Advanced" value="1">
              <Array name="Children">
                <Setting name="Dynamic" value="Low" />
                <Setting name="MpeChannels" value="1-16" />
                <Setting name="AftertouchType" value="Channel" />
                <Setting name="VibratoValue" value="-10000;1024" />
              </Array>
            </Setting>
          </Array>
        </Module>
        <Module name="Play Piano">
          <String name="Type" value="22" />
          <String name="Version" value="3" />
          <String name="Revision" value="1" />
          <String name="Color" value="11" />
          <String name="Options" value="0" />
          <String name="ReadOnly" value="1" />
          <Array name="ElementList">
            <Element name="ALL_KEYS">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="Channel" value="12" />
                <Setting name="Note" value="48" />
                <Setting name="NoteVelocity" value="50;127" />
                <Setting name="YControlEnable" value="1">
                  <Array name="Children">
                    <Setting name="YControl" value="74" />
                    <Setting name="YControlOrigin" value="64" />
                  </Array>
                </Setting>
              </Array>
            </Element>
            <Element name="GLISSANDO">
              <String name="Revision" value="1" />
              <Array name="SettingsList" />
            </Element>
            <Element name="BUTTON1">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="Function" value="Note">
                  <Array name="Children">
                    <Setting name="NoteChannel" value="1" />
                    <Setting name="Note" value="1" />
                    <Setting name="CCChannel" value="12" />
                    <Setting name="CC" value="14" />
                    <Setting name="CCRange" value="127;127" />
                    <Setting name="CCDirection" value="Natural" />
                    <Setting name="PitchbendChannel" value="12" />
                    <Setting name="PitchbendRange" value="-10000;8192" />
                    <Setting name="PitchbendDirection" value="Up" />
                    <Setting name="PCChannel" value="12" />
                    <Setting name="PC" value="0" />
                    <Setting name="ScriptChannel" value="12" />
                  </Array>
                </Setting>
              </Array>
            </Element>
            <Element name="BUTTON2">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="Function" value="Note">
                  <Array name="Children">
                    <Setting name="NoteChannel" value="1" />
                    <Setting name="Note" value="0" />
                    <Setting name="CCChannel" value="12" />
                    <Setting name="CC" value="15" />
                    <Setting name="CCRange" value="127;127" />
                    <Setting name="CCDirection" value="Natural" />
                    <Setting name="PitchbendChannel" value="12" />
                    <Setting name="PitchbendRange" value="-10000;8192" />
                    <Setting name="PitchbendDirection" value="Up" />
                    <Setting name="PCChannel" value="12" />
                    <Setting name="PC" value="1" />
                    <Setting name="ScriptChannel" value="13" />
                  </Array>
                </Setting>
              </Array>
            </Element>
            <Element name="BUBBLE">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="EnableX" value="0">
                  <Array name="Children">
                    <Setting name="ChannelX" value="12" />
                    <Setting name="ControlX" value="75" />
                    <Setting name="RangeX" value="0;127" />
                    <Setting name="DirectionX" value="Natural" />
                    <Setting name="StartValueX" value="64" />
                  </Array>
                </Setting>
                <Setting name="EnableY" value="0">
                  <Array name="Children">
                    <Setting name="ChannelY" value="12" />
                    <Setting name="ControlY" value="76" />
                    <Setting name="RangeY" value="0;127" />
                    <Setting name="DirectionY" value="Natural" />
                    <Setting name="StartValueY" value="64" />
                  </Array>
                </Setting>
                <Setting name="EnableZ" value="1">
                  <Array name="Children">
                    <Setting name="ChannelZ" value="12" />
                    <Setting name="ControlZ" value="1" />
                    <Setting name="RangeZ" value="0;127" />
                    <Setting name="DirectionZ" value="Natural" />
                  </Array>
                </Setting>
              </Array>
            </Element>
            <Element name="STRIP">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="Function" value="Control Change">
                  <Array name="Children">
                    <Setting name="CCChannel" value="12" />
                    <Setting name="CC" value="12" />
                    <Setting name="CCRange" value="0;127" />
                    <Setting name="CCDirection" value="Natural" />
                    <Setting name="CCMode" value="Absolute">
                      <Array name="Children">
                        <Setting name="CCDemultiplier" value="2" />
                      </Array>
                    </Setting>
                    <Setting name="CC14Bits" value="0">
                      <Array name="Children">
                        <Setting name="CCFine" value="13" />
                      </Array>
                    </Setting>
                    <Setting name="PitchbendChannel" value="12" />
                    <Setting name="PitchbendRange" value="-10000;8192" />
                  </Array>
                </Setting>
              </Array>
            </Element>
          </Array>
          <Array name="SettingsList">
            <Setting name="Color" value="11" />
            <Setting name="ReadOnly" value="1" />
            <Setting name="Vibrato" value="0" />
            <Setting name="Glissando" value="1" />
            <Setting name="Aftertouch" value="0" />
            <Setting name="MPE" value="0" />
            <Setting name="Advanced" value="1">
              <Array name="Children">
                <Setting name="Dynamic" value="Low" />
                <Setting name="MpeChannels" value="1-16" />
                <Setting name="VibratoValue" value="-10000;1024" />
                <Setting name="GlissandoRange" value="48" />
                <Setting name="AftertouchType" value="Channel" />
              </Array>
            </Setting>
          </Array>
        </Module>
        <Module name="Play Guitar">
          <String name="Type" value="24" />
          <String name="Version" value="3" />
          <String name="Revision" value="1" />
          <String name="Color" value="10" />
          <String name="Options" value="0" />
          <String name="ReadOnly" value="1" />
          <Array name="ElementList">
            <Element name="STRING1">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="NoteChannel" value="2" />
                <Setting name="Note" value="40" />
                <Setting name="NoteVelocity" value="50;127" />
              </Array>
            </Element>
            <Element name="STRING2">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="NoteChannel" value="2" />
                <Setting name="Note" value="45" />
                <Setting name="NoteVelocity" value="50;127" />
              </Array>
            </Element>
            <Element name="STRING3">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="NoteChannel" value="2" />
                <Setting name="Note" value="50" />
                <Setting name="NoteVelocity" value="50;127" />
              </Array>
            </Element>
            <Element name="STRING4">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="NoteChannel" value="2" />
                <Setting name="Note" value="55" />
                <Setting name="NoteVelocity" value="50;127" />
              </Array>
            </Element>
            <Element name="STRING5">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="NoteChannel" value="2" />
                <Setting name="Note" value="59" />
                <Setting name="NoteVelocity" value="50;127" />
              </Array>
            </Element>
            <Element name="STRING6">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="NoteChannel" value="2" />
                <Setting name="Note" value="64" />
                <Setting name="NoteVelocity" value="50;127" />
              </Array>
            </Element>
            <Element name="ALL_STRINGS">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="NoteChannel" value="2" />
                <Setting name="Note" value="40" />
                <Setting name="Tunning" value="0" />
                <Setting name="NoteVelocity" value="50;127" />
              </Array>
            </Element>
            <Element name="BUTTON1">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="Function" value="Note">
                  <Array name="Children">
                    <Setting name="NoteChannel" value="1" />
                    <Setting name="Note" value="1" />
                    <Setting name="CCChannel" value="2" />
                    <Setting name="CC" value="14" />
                    <Setting name="CCRange" value="127;127" />
                    <Setting name="CCDirection" value="Natural" />
                    <Setting name="PitchbendChannel" value="2" />
                    <Setting name="PitchbendRange" value="-10000;8192" />
                    <Setting name="PitchbendDirection" value="Up" />
                    <Setting name="PCChannel" value="2" />
                    <Setting name="PC" value="0" />
                    <Setting name="ScriptChannel" value="2" />
                  </Array>
                </Setting>
              </Array>
            </Element>
            <Element name="BUTTON2">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="Function" value="Note">
                  <Array name="Children">
                    <Setting name="NoteChannel" value="1" />
                    <Setting name="Note" value="0" />
                    <Setting name="CCChannel" value="2" />
                    <Setting name="CC" value="15" />
                    <Setting name="CCRange" value="127;127" />
                    <Setting name="CCDirection" value="Natural" />
                    <Setting name="PitchbendChannel" value="2" />
                    <Setting name="PitchbendRange" value="-10000;8192" />
                    <Setting name="PitchbendDirection" value="Up" />
                    <Setting name="PCChannel" value="2" />
                    <Setting name="PC" value="1" />
                    <Setting name="ScriptChannel" value="3" />
                  </Array>
                </Setting>
              </Array>
            </Element>
            <Element name="BUBBLE">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="EnableX" value="0">
                  <Array name="Children">
                    <Setting name="ChannelX" value="2" />
                    <Setting name="ControlX" value="75" />
                    <Setting name="RangeX" value="0;127" />
                    <Setting name="DirectionX" value="Natural" />
                    <Setting name="StartValueX" value="64" />
                  </Array>
                </Setting>
                <Setting name="EnableY" value="0">
                  <Array name="Children">
                    <Setting name="ChannelY" value="2" />
                    <Setting name="ControlY" value="76" />
                    <Setting name="RangeY" value="0;127" />
                    <Setting name="DirectionY" value="Natural" />
                    <Setting name="StartValueY" value="64" />
                  </Array>
                </Setting>
                <Setting name="EnableZ" value="1">
                  <Array name="Children">
                    <Setting name="ChannelZ" value="2" />
                    <Setting name="ControlZ" value="1" />
                    <Setting name="RangeZ" value="0;127" />
                    <Setting name="DirectionZ" value="Natural" />
                  </Array>
                </Setting>
              </Array>
            </Element>
            <Element name="AREA">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="EnableX" value="1">
                  <Array name="Children">
                    <Setting name="ChannelX" value="2" />
                    <Setting name="ControlX" value="12" />
                    <Setting name="RangeX" value="0;127" />
                    <Setting name="DirectionX" value="Natural" />
                    <Setting name="ModeX" value="Absolute">
                      <Array name="Children">
                        <Setting name="DemultiplierX" value="2" />
                      </Array>
                    </Setting>
                    <Setting name="CC14BitsX" value="0">
                      <Array name="Children">
                        <Setting name="CCFineX" value="13" />
                      </Array>
                    </Setting>
                  </Array>
                </Setting>
                <Setting name="EnableY" value="1">
                  <Array name="Children">
                    <Setting name="ChannelY" value="2" />
                    <Setting name="ControlY" value="13" />
                    <Setting name="RangeY" value="0;127" />
                    <Setting name="DirectionY" value="Natural" />
                    <Setting name="ModeY" value="Absolute">
                      <Array name="Children">
                        <Setting name="DemultiplierY" value="2" />
                      </Array>
                    </Setting>
                    <Setting name="CC14BitsY" value="0">
                      <Array name="Children">
                        <Setting name="CCFineY" value="14" />
                      </Array>
                    </Setting>
                  </Array>
                </Setting>
                <Setting name="EnableZ" value="1">
                  <Array name="Children">
                    <Setting name="ChannelZ" value="2" />
                    <Setting name="ControlZ" value="80" />
                    <Setting name="RangeZ" value="127;127" />
                    <Setting name="DirectionZ" value="Natural" />
                  </Array>
                </Setting>
              </Array>
            </Element>
          </Array>
          <Array name="SettingsList">
            <Setting name="Color" value="10" />
            <Setting name="ReadOnly" value="1" />
            <Setting name="Fretless" value="1" />
            <Setting name="Vibrato" value="0" />
            <Setting name="Bending" value="1" />
            <Setting name="Aftertouch" value="0" />
            <Setting name="MPE" value="0" />
            <Setting name="Expert" value="0" />
            <Setting name="Advanced" value="1">
              <Array name="Children">
                <Setting name="Dynamic" value="Low" />
                <Setting name="MpeChannels" value="1-16" />
                <Setting name="AftertouchType" value="Channel" />
                <Setting name="VibratoValue" value="-10000;1024" />
                <Setting name="BendingValue" value="-10000;800" />
                <Setting name="PitchRange" value="48" />
              </Array>
            </Setting>
          </Array>
        </Module>
        <Module name="Play Keys">
          <String name="Type" value="23" />
          <String name="Version" value="3" />
          <String name="Revision" value="1" />
          <String name="Color" value="9" />
          <String name="Options" value="0" />
          <String name="ReadOnly" value="1" />
          <Array name="ElementList">
            <Element name="KEY1">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="Channel" value="10" />
                <Setting name="Note" value="52" />
                <Setting name="NoteVelocity" value="50;127" />
                <Setting name="YControlEnable" value="1">
                  <Array name="Children">
                    <Setting name="YControl" value="74" />
                    <Setting name="YControlRange" value="0;127" />
                    <Setting name="YControlDirection" value="Natural" />
                    <Setting name="YControlMode" value="Absolute">
                      <Array name="Children">
                        <Setting name="YControlOrigin" value="64" />
                      </Array>
                    </Setting>
                    <Setting name="YControlCC14Bits" value="0">
                      <Array name="Children">
                        <Setting name="YControlFine" value="75" />
                      </Array>
                    </Setting>
                  </Array>
                </Setting>
              </Array>
            </Element>
            <Element name="KEY2">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="Channel" value="10" />
                <Setting name="Note" value="54" />
                <Setting name="NoteVelocity" value="50;127" />
                <Setting name="YControlEnable" value="1">
                  <Array name="Children">
                    <Setting name="YControl" value="74" />
                    <Setting name="YControlRange" value="0;127" />
                    <Setting name="YControlDirection" value="Natural" />
                    <Setting name="YControlMode" value="Absolute">
                      <Array name="Children">
                        <Setting name="YControlOrigin" value="64" />
                      </Array>
                    </Setting>
                    <Setting name="YControlCC14Bits" value="0">
                      <Array name="Children">
                        <Setting name="YControlFine" value="75" />
                      </Array>
                    </Setting>
                  </Array>
                </Setting>
              </Array>
            </Element>
            <Element name="KEY3">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="Channel" value="10" />
                <Setting name="Note" value="56" />
                <Setting name="NoteVelocity" value="50;127" />
                <Setting name="YControlEnable" value="1">
                  <Array name="Children">
                    <Setting name="YControl" value="74" />
                    <Setting name="YControlRange" value="0;127" />
                    <Setting name="YControlDirection" value="Natural" />
                    <Setting name="YControlMode" value="Absolute">
                      <Array name="Children">
                        <Setting name="YControlOrigin" value="64" />
                      </Array>
                    </Setting>
                    <Setting name="YControlCC14Bits" value="0">
                      <Array name="Children">
                        <Setting name="YControlFine" value="75" />
                      </Array>
                    </Setting>
                  </Array>
                </Setting>
              </Array>
            </Element>
            <Element name="KEY4">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="Channel" value="10" />
                <Setting name="Note" value="59" />
                <Setting name="NoteVelocity" value="50;127" />
                <Setting name="YControlEnable" value="1">
                  <Array name="Children">
                    <Setting name="YControl" value="74" />
                    <Setting name="YControlRange" value="0;127" />
                    <Setting name="YControlDirection" value="Natural" />
                    <Setting name="YControlMode" value="Absolute">
                      <Array name="Children">
                        <Setting name="YControlOrigin" value="64" />
                      </Array>
                    </Setting>
                    <Setting name="YControlCC14Bits" value="0">
                      <Array name="Children">
                        <Setting name="YControlFine" value="75" />
                      </Array>
                    </Setting>
                  </Array>
                </Setting>
              </Array>
            </Element>
            <Element name="KEY5">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="Channel" value="10" />
                <Setting name="Note" value="61" />
                <Setting name="NoteVelocity" value="50;127" />
                <Setting name="YControlEnable" value="1">
                  <Array name="Children">
                    <Setting name="YControl" value="74" />
                    <Setting name="YControlRange" value="0;127" />
                    <Setting name="YControlDirection" value="Natural" />
                    <Setting name="YControlMode" value="Absolute">
                      <Array name="Children">
                        <Setting name="YControlOrigin" value="64" />
                      </Array>
                    </Setting>
                    <Setting name="YControlCC14Bits" value="0">
                      <Array name="Children">
                        <Setting name="YControlFine" value="75" />
                      </Array>
                    </Setting>
                  </Array>
                </Setting>
              </Array>
            </Element>
            <Element name="KEY6">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="Channel" value="10" />
                <Setting name="Note" value="64" />
                <Setting name="NoteVelocity" value="50;127" />
                <Setting name="YControlEnable" value="1">
                  <Array name="Children">
                    <Setting name="YControl" value="74" />
                    <Setting name="YControlRange" value="0;127" />
                    <Setting name="YControlDirection" value="Natural" />
                    <Setting name="YControlMode" value="Absolute">
                      <Array name="Children">
                        <Setting name="YControlOrigin" value="64" />
                      </Array>
                    </Setting>
                    <Setting name="YControlCC14Bits" value="0">
                      <Array name="Children">
                        <Setting name="YControlFine" value="75" />
                      </Array>
                    </Setting>
                  </Array>
                </Setting>
              </Array>
            </Element>
            <Element name="KEY7">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="Channel" value="10" />
                <Setting name="Note" value="66" />
                <Setting name="NoteVelocity" value="50;127" />
                <Setting name="YControlEnable" value="1">
                  <Array name="Children">
                    <Setting name="YControl" value="74" />
                    <Setting name="YControlRange" value="0;127" />
                    <Setting name="YControlDirection" value="Natural" />
                    <Setting name="YControlMode" value="Absolute">
                      <Array name="Children">
                        <Setting name="YControlOrigin" value="64" />
                      </Array>
                    </Setting>
                    <Setting name="YControlCC14Bits" value="0">
                      <Array name="Children">
                        <Setting name="YControlFine" value="75" />
                      </Array>
                    </Setting>
                  </Array>
                </Setting>
              </Array>
            </Element>
            <Element name="KEY8">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="Channel" value="10" />
                <Setting name="Note" value="68" />
                <Setting name="NoteVelocity" value="50;127" />
                <Setting name="YControlEnable" value="1">
                  <Array name="Children">
                    <Setting name="YControl" value="74" />
                    <Setting name="YControlRange" value="0;127" />
                    <Setting name="YControlDirection" value="Natural" />
                    <Setting name="YControlMode" value="Absolute">
                      <Array name="Children">
                        <Setting name="YControlOrigin" value="64" />
                      </Array>
                    </Setting>
                    <Setting name="YControlCC14Bits" value="0">
                      <Array name="Children">
                        <Setting name="YControlFine" value="75" />
                      </Array>
                    </Setting>
                  </Array>
                </Setting>
              </Array>
            </Element>
            <Element name="KEY9">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="Channel" value="10" />
                <Setting name="Note" value="71" />
                <Setting name="NoteVelocity" value="50;127" />
                <Setting name="YControlEnable" value="1">
                  <Array name="Children">
                    <Setting name="YControl" value="74" />
                    <Setting name="YControlRange" value="0;127" />
                    <Setting name="YControlDirection" value="Natural" />
                    <Setting name="YControlMode" value="Absolute">
                      <Array name="Children">
                        <Setting name="YControlOrigin" value="64" />
                      </Array>
                    </Setting>
                    <Setting name="YControlCC14Bits" value="0">
                      <Array name="Children">
                        <Setting name="YControlFine" value="75" />
                      </Array>
                    </Setting>
                  </Array>
                </Setting>
              </Array>
            </Element>
            <Element name="KEY10">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="Channel" value="10" />
                <Setting name="Note" value="73" />
                <Setting name="NoteVelocity" value="50;127" />
                <Setting name="YControlEnable" value="1">
                  <Array name="Children">
                    <Setting name="YControl" value="74" />
                    <Setting name="YControlRange" value="0;127" />
                    <Setting name="YControlDirection" value="Natural" />
                    <Setting name="YControlMode" value="Absolute">
                      <Array name="Children">
                        <Setting name="YControlOrigin" value="64" />
                      </Array>
                    </Setting>
                    <Setting name="YControlCC14Bits" value="0">
                      <Array name="Children">
                        <Setting name="YControlFine" value="75" />
                      </Array>
                    </Setting>
                  </Array>
                </Setting>
              </Array>
            </Element>
            <Element name="KEY11">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="Channel" value="10" />
                <Setting name="Note" value="76" />
                <Setting name="NoteVelocity" value="50;127" />
                <Setting name="YControlEnable" value="1">
                  <Array name="Children">
                    <Setting name="YControl" value="74" />
                    <Setting name="YControlRange" value="0;127" />
                    <Setting name="YControlDirection" value="Natural" />
                    <Setting name="YControlMode" value="Absolute">
                      <Array name="Children">
                        <Setting name="YControlOrigin" value="64" />
                      </Array>
                    </Setting>
                    <Setting name="YControlCC14Bits" value="0">
                      <Array name="Children">
                        <Setting name="YControlFine" value="75" />
                      </Array>
                    </Setting>
                  </Array>
                </Setting>
              </Array>
            </Element>
            <Element name="KEY12">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="Channel" value="10" />
                <Setting name="Note" value="78" />
                <Setting name="NoteVelocity" value="50;127" />
                <Setting name="YControlEnable" value="1">
                  <Array name="Children">
                    <Setting name="YControl" value="74" />
                    <Setting name="YControlRange" value="0;127" />
                    <Setting name="YControlDirection" value="Natural" />
                    <Setting name="YControlMode" value="Absolute">
                      <Array name="Children">
                        <Setting name="YControlOrigin" value="64" />
                      </Array>
                    </Setting>
                    <Setting name="YControlCC14Bits" value="0">
                      <Array name="Children">
                        <Setting name="YControlFine" value="75" />
                      </Array>
                    </Setting>
                  </Array>
                </Setting>
              </Array>
            </Element>
            <Element name="KEY13">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="Channel" value="10" />
                <Setting name="Note" value="80" />
                <Setting name="NoteVelocity" value="50;127" />
                <Setting name="YControlEnable" value="1">
                  <Array name="Children">
                    <Setting name="YControl" value="74" />
                    <Setting name="YControlRange" value="0;127" />
                    <Setting name="YControlDirection" value="Natural" />
                    <Setting name="YControlMode" value="Absolute">
                      <Array name="Children">
                        <Setting name="YControlOrigin" value="64" />
                      </Array>
                    </Setting>
                    <Setting name="YControlCC14Bits" value="0">
                      <Array name="Children">
                        <Setting name="YControlFine" value="75" />
                      </Array>
                    </Setting>
                  </Array>
                </Setting>
              </Array>
            </Element>
            <Element name="KEY14">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="Channel" value="10" />
                <Setting name="Note" value="83" />
                <Setting name="NoteVelocity" value="50;127" />
                <Setting name="YControlEnable" value="1">
                  <Array name="Children">
                    <Setting name="YControl" value="74" />
                    <Setting name="YControlRange" value="0;127" />
                    <Setting name="YControlDirection" value="Natural" />
                    <Setting name="YControlMode" value="Absolute">
                      <Array name="Children">
                        <Setting name="YControlOrigin" value="64" />
                      </Array>
                    </Setting>
                    <Setting name="YControlCC14Bits" value="0">
                      <Array name="Children">
                        <Setting name="YControlFine" value="75" />
                      </Array>
                    </Setting>
                  </Array>
                </Setting>
              </Array>
            </Element>
            <Element name="KEY15">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="Channel" value="10" />
                <Setting name="Note" value="85" />
                <Setting name="NoteVelocity" value="50;127" />
                <Setting name="YControlEnable" value="1">
                  <Array name="Children">
                    <Setting name="YControl" value="74" />
                    <Setting name="YControlRange" value="0;127" />
                    <Setting name="YControlDirection" value="Natural" />
                    <Setting name="YControlMode" value="Absolute">
                      <Array name="Children">
                        <Setting name="YControlOrigin" value="64" />
                      </Array>
                    </Setting>
                    <Setting name="YControlCC14Bits" value="0">
                      <Array name="Children">
                        <Setting name="YControlFine" value="75" />
                      </Array>
                    </Setting>
                  </Array>
                </Setting>
              </Array>
            </Element>
            <Element name="KEY16">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="Channel" value="10" />
                <Setting name="Note" value="88" />
                <Setting name="NoteVelocity" value="50;127" />
                <Setting name="YControlEnable" value="1">
                  <Array name="Children">
                    <Setting name="YControl" value="74" />
                    <Setting name="YControlRange" value="0;127" />
                    <Setting name="YControlDirection" value="Natural" />
                    <Setting name="YControlMode" value="Absolute">
                      <Array name="Children">
                        <Setting name="YControlOrigin" value="64" />
                      </Array>
                    </Setting>
                    <Setting name="YControlCC14Bits" value="0">
                      <Array name="Children">
                        <Setting name="YControlFine" value="75" />
                      </Array>
                    </Setting>
                  </Array>
                </Setting>
              </Array>
            </Element>
            <Element name="KEY17">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="Channel" value="10" />
                <Setting name="Note" value="90" />
                <Setting name="NoteVelocity" value="50;127" />
                <Setting name="YControlEnable" value="1">
                  <Array name="Children">
                    <Setting name="YControl" value="74" />
                    <Setting name="YControlRange" value="0;127" />
                    <Setting name="YControlDirection" value="Natural" />
                    <Setting name="YControlMode" value="Absolute">
                      <Array name="Children">
                        <Setting name="YControlOrigin" value="64" />
                      </Array>
                    </Setting>
                    <Setting name="YControlCC14Bits" value="0">
                      <Array name="Children">
                        <Setting name="YControlFine" value="75" />
                      </Array>
                    </Setting>
                  </Array>
                </Setting>
              </Array>
            </Element>
            <Element name="ALL_KEYS">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="Channel" value="10" />
                <Setting name="Note" value="52" />
                <Setting name="Scale" value="11" />
                <Setting name="NoteVelocity" value="50;127" />
                <Setting name="YControlEnable" value="1">
                  <Array name="Children">
                    <Setting name="YControl" value="74" />
                    <Setting name="YControlRange" value="0;127" />
                    <Setting name="YControlDirection" value="Natural" />
                    <Setting name="YControlMode" value="Absolute">
                      <Array name="Children">
                        <Setting name="YControlOrigin" value="64" />
                      </Array>
                    </Setting>
                    <Setting name="YControlCC14Bits" value="0">
                      <Array name="Children">
                        <Setting name="YControlFine" value="75" />
                      </Array>
                    </Setting>
                  </Array>
                </Setting>
              </Array>
            </Element>
            <Element name="GLISSANDO">
              <String name="Revision" value="1" />
              <Array name="SettingsList" />
            </Element>
            <Element name="BUTTON1">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="Function" value="Note">
                  <Array name="Children">
                    <Setting name="NoteChannel" value="1" />
                    <Setting name="Note" value="1" />
                    <Setting name="CCChannel" value="10" />
                    <Setting name="CC" value="14" />
                    <Setting name="CCRange" value="127;127" />
                    <Setting name="CCDirection" value="Natural" />
                    <Setting name="PitchbendChannel" value="10" />
                    <Setting name="PitchbendRange" value="-10000;8192" />
                    <Setting name="PitchbendDirection" value="Up" />
                    <Setting name="PCChannel" value="10" />
                    <Setting name="PC" value="0" />
                    <Setting name="ScriptChannel" value="10" />
                  </Array>
                </Setting>
              </Array>
            </Element>
            <Element name="BUTTON2">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="Function" value="Note">
                  <Array name="Children">
                    <Setting name="NoteChannel" value="1" />
                    <Setting name="Note" value="0" />
                    <Setting name="CCChannel" value="10" />
                    <Setting name="CC" value="15" />
                    <Setting name="CCRange" value="127;127" />
                    <Setting name="CCDirection" value="Natural" />
                    <Setting name="PitchbendChannel" value="10" />
                    <Setting name="PitchbendRange" value="-10000;8192" />
                    <Setting name="PitchbendDirection" value="Up" />
                    <Setting name="PCChannel" value="10" />
                    <Setting name="PC" value="1" />
                    <Setting name="ScriptChannel" value="11" />
                  </Array>
                </Setting>
              </Array>
            </Element>
            <Element name="BUBBLE">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="EnableX" value="0">
                  <Array name="Children">
                    <Setting name="ChannelX" value="10" />
                    <Setting name="ControlX" value="75" />
                    <Setting name="RangeX" value="0;127" />
                    <Setting name="DirectionX" value="Natural" />
                    <Setting name="StartValueX" value="64" />
                  </Array>
                </Setting>
                <Setting name="EnableY" value="0">
                  <Array name="Children">
                    <Setting name="ChannelY" value="10" />
                    <Setting name="ControlY" value="76" />
                    <Setting name="RangeY" value="0;127" />
                    <Setting name="DirectionY" value="Natural" />
                    <Setting name="StartValueY" value="64" />
                  </Array>
                </Setting>
                <Setting name="EnableZ" value="1">
                  <Array name="Children">
                    <Setting name="ChannelZ" value="10" />
                    <Setting name="ControlZ" value="1" />
                    <Setting name="RangeZ" value="0;127" />
                    <Setting name="DirectionZ" value="Natural" />
                  </Array>
                </Setting>
              </Array>
            </Element>
            <Element name="STRIP">
              <String name="Revision" value="2" />
              <Array name="SettingsList">
                <Setting name="Function" value="Control Change">
                  <Array name="Children">
                    <Setting name="CCChannel" value="10" />
                    <Setting name="CC" value="12" />
                    <Setting name="CCRange" value="0;127" />
                    <Setting name="CCDirection" value="Natural" />
                    <Setting name="CCMode" value="Absolute">
                      <Array name="Children">
                        <Setting name="CCDemultiplier" value="2" />
                      </Array>
                    </Setting>
                    <Setting name="CC14Bits" value="0">
                      <Array name="Children">
                        <Setting name="CCFine" value="13" />
                      </Array>
                    </Setting>
                    <Setting name="PitchbendChannel" value="10" />
                    <Setting name="PitchbendRange" value="-10000;8192" />
                  </Array>
                </Setting>
              </Array>
            </Element>
          </Array>
          <Array name="SettingsList">
            <Setting name="Color" value="9" />
            <Setting name="ReadOnly" value="1" />
            <Setting name="Vibrato" value="1" />
            <Setting name="Glissando" value="0" />
            <Setting name="Aftertouch" value="0" />
            <Setting name="MPE" value="0" />
            <Setting name="Expert" value="0" />
            <Setting name="Advanced" value="1">
              <Array name="Children">
                <Setting name="Dynamic" value="Low" />
                <Setting name="MpeChannels" value="1-16" />
                <Setting name="VibratoValue" value="-10000;1024" />
                <Setting name="GlissandoRange" value="48" />
                <Setting name="AftertouchType" value="Channel" />
              </Array>
            </Setting>
          </Array>
        </Module>
		<Module name="Play Audio">
			<String name="Version" value="3" />
			<String name="Options" value="0" />
			<Array name="ElementList">
				<Element name="BTN_PRESET_1">
					<Array name="SettingsList">
						<Setting name="Function" value="Note">
							<Array name="Children">
								<Setting name="NoteChannel" value="13" />
								<Setting name="Note" value="2" />
								<Setting name="CCChannel" value="13" />
								<Setting name="CC" value="14" />
								<Setting name="CCRange" value="127.000000;127.000000" />
								<Setting name="CCDirection" value="Natural" />
								<Setting name="PCChannel" value="13" />
								<Setting name="PC" value="0" />
								<Setting name="ScriptChannel" value="13" />
							</Array>
						</Setting>
					</Array>
					<String name="Revision" value="2" />
				</Element>
				<Element name="BTN_PRESET_2">
					<Array name="SettingsList">
						<Setting name="Function" value="Note">
							<Array name="Children">
								<Setting name="NoteChannel" value="13" />
								<Setting name="Note" value="3" />
								<Setting name="CCChannel" value="13" />
								<Setting name="CC" value="15" />
								<Setting name="CCRange" value="127.000000;127.000000" />
								<Setting name="CCDirection" value="Natural" />
								<Setting name="PCChannel" value="13" />
								<Setting name="PC" value="1" />
								<Setting name="ScriptChannel" value="14" />
							</Array>
						</Setting>
					</Array>
					<String name="Revision" value="2" />
				</Element>
				<Element name="BTN_PRESET_3">
					<Array name="SettingsList">
						<Setting name="Function" value="Note">
							<Array name="Children">
								<Setting name="NoteChannel" value="13" />
								<Setting name="Note" value="4" />
								<Setting name="CCChannel" value="13" />
								<Setting name="CC" value="16" />
								<Setting name="CCRange" value="127.000000;127.000000" />
								<Setting name="CCDirection" value="Natural" />
								<Setting name="PCChannel" value="13" />
								<Setting name="PC" value="2" />
								<Setting name="ScriptChannel" value="15" />
							</Array>
						</Setting>
					</Array>
					<String name="Revision" value="2" />
				</Element>
				<Element name="BTN_EFFECT_ONOFF">
					<Array name="SettingsList">
						<Setting name="Function" value="Note">
							<Array name="Children">
								<Setting name="NoteChannel" value="13" />
								<Setting name="Note" value="5" />
								<Setting name="CCChannel" value="13" />
								<Setting name="CC" value="17" />
								<Setting name="CCRange" value="127.000000;127.000000" />
								<Setting name="CCDirection" value="Natural" />
								<Setting name="PCChannel" value="13" />
								<Setting name="PC" value="3" />
							</Array>
						</Setting>
					</Array>
					<String name="Revision" value="2" />
				</Element>
				<Element name="BTN_PLAY">
					<Array name="SettingsList">
						<Setting name="Function" value="Note">
							<Array name="Children">
								<Setting name="NoteChannel" value="13" />
								<Setting name="Note" value="1" />
								<Setting name="CCChannel" value="13" />
								<Setting name="CC" value="18" />
								<Setting name="CCRange" value="127.000000;127.000000" />
								<Setting name="CCDirection" value="Natural" />
								<Setting name="PCChannel" value="13" />
								<Setting name="PC" value="4" />
							</Array>
						</Setting>
					</Array>
					<String name="Revision" value="2" />
				</Element>
				<Element name="BTN_REC">
					<Array name="SettingsList">
						<Setting name="Function" value="Note">
							<Array name="Children">
								<Setting name="NoteChannel" value="13" />
								<Setting name="Note" value="0" />
								<Setting name="CCChannel" value="13" />
								<Setting name="CC" value="19" />
								<Setting name="CCRange" value="127.000000;127.000000" />
								<Setting name="CCDirection" value="Natural" />
								<Setting name="PCChannel" value="13" />
								<Setting name="PC" value="5" />
							</Array>
						</Setting>
					</Array>
					<String name="Revision" value="2" />
				</Element>
				<Element name="PETAL_1_1">
					<Array name="SettingsList">
						<Setting name="function" value="Angle/Radius">
							<Array name="Children">
								<Setting name="EnableRadius" value="1">
									<Array name="Children">
										<Setting name="ChannelRadius" value="13" />
										<Setting name="ControlRadius" value="102" />
										<Setting name="RangeRadius" value="0.000000;127.000000" />
									</Array>
								</Setting>
								<Setting name="EnableAngle" value="1">
									<Array name="Children">
										<Setting name="ChannelAngle" value="13" />
										<Setting name="ControlAngle" value="103" />
										<Setting name="RangeAngle" value="0.000000;127.000000" />
									</Array>
								</Setting>
								<Setting name="EnableFader" value="1">
									<Array name="Children">
										<Setting name="ChannelFader" value="13" />
										<Setting name="ControlFader" value="102" />
										<Setting name="RangeFader" value="0.000000;127.000000" />
									</Array>
								</Setting>
								<Setting name="EnableAxis1" value="1">
									<Array name="Children">
										<Setting name="ChannelAxis1" value="13" />
										<Setting name="ControlAxis1" value="102" />
										<Setting name="RangeAxis1" value="0.000000;127.000000" />
									</Array>
								</Setting>
								<Setting name="EnableAxis2" value="1">
									<Array name="Children">
										<Setting name="ChannelAxis2" value="13" />
										<Setting name="ControlAxis2" value="103" />
										<Setting name="RangeAxis2" value="0.000000;127.000000" />
									</Array>
								</Setting>
								<Setting name="EnableAxisZ" value="0">
									<Array name="Children">
										<Setting name="ChannelPressure" value="13" />
										<Setting name="ControlPressure" value="20" />
										<Setting name="RangePressure" value="0.000000;127.000000" />
									</Array>
								</Setting>
							</Array>
						</Setting>
						<Setting name="zeroReturn" value="0" />
					</Array>
					<String name="Revision" value="2" />
				</Element>
				<Element name="PETAL_1_2">
					<Array name="SettingsList">
						<Setting name="function" value="Angle/Radius">
							<Array name="Children">
								<Setting name="EnableRadius" value="1">
									<Array name="Children">
										<Setting name="ChannelRadius" value="13" />
										<Setting name="ControlRadius" value="104" />
										<Setting name="RangeRadius" value="0.000000;127.000000" />
									</Array>
								</Setting>
								<Setting name="EnableAngle" value="1">
									<Array name="Children">
										<Setting name="ChannelAngle" value="13" />
										<Setting name="ControlAngle" value="105" />
										<Setting name="RangeAngle" value="0.000000;127.000000" />
									</Array>
								</Setting>
								<Setting name="EnableFader" value="1">
									<Array name="Children">
										<Setting name="ChannelFader" value="13" />
										<Setting name="ControlFader" value="104" />
										<Setting name="RangeFader" value="0.000000;127.000000" />
									</Array>
								</Setting>
								<Setting name="EnableAxis1" value="1">
									<Array name="Children">
										<Setting name="ChannelAxis1" value="13" />
										<Setting name="ControlAxis1" value="104" />
										<Setting name="RangeAxis1" value="0.000000;127.000000" />
									</Array>
								</Setting>
								<Setting name="EnableAxis2" value="1">
									<Array name="Children">
										<Setting name="ChannelAxis2" value="13" />
										<Setting name="ControlAxis2" value="105" />
										<Setting name="RangeAxis2" value="0.000000;127.000000" />
									</Array>
								</Setting>
								<Setting name="EnableAxisZ" value="0">
									<Array name="Children">
										<Setting name="ChannelPressure" value="13" />
										<Setting name="ControlPressure" value="21" />
										<Setting name="RangePressure" value="0.000000;127.000000" />
									</Array>
								</Setting>
							</Array>
						</Setting>
						<Setting name="zeroReturn" value="0" />
					</Array>
					<String name="Revision" value="2" />
				</Element>
				<Element name="PETAL_1_3">
					<Array name="SettingsList">
						<Setting name="function" value="Angle/Radius">
							<Array name="Children">
								<Setting name="EnableRadius" value="1">
									<Array name="Children">
										<Setting name="ChannelRadius" value="13" />
										<Setting name="ControlRadius" value="106" />
										<Setting name="RangeRadius" value="0.000000;127.000000" />
									</Array>
								</Setting>
								<Setting name="EnableAngle" value="1">
									<Array name="Children">
										<Setting name="ChannelAngle" value="13" />
										<Setting name="ControlAngle" value="107" />
										<Setting name="RangeAngle" value="0.000000;127.000000" />
									</Array>
								</Setting>
								<Setting name="EnableFader" value="1">
									<Array name="Children">
										<Setting name="ChannelFader" value="13" />
										<Setting name="ControlFader" value="106" />
										<Setting name="RangeFader" value="0.000000;127.000000" />
									</Array>
								</Setting>
								<Setting name="EnableAxis1" value="1">
									<Array name="Children">
										<Setting name="ChannelAxis1" value="13" />
										<Setting name="ControlAxis1" value="106" />
										<Setting name="RangeAxis1" value="0.000000;127.000000" />
									</Array>
								</Setting>
								<Setting name="EnableAxis2" value="1">
									<Array name="Children">
										<Setting name="ChannelAxis2" value="13" />
										<Setting name="ControlAxis2" value="107" />
										<Setting name="RangeAxis2" value="0.000000;127.000000" />
									</Array>
								</Setting>
								<Setting name="EnableAxisZ" value="0">
									<Array name="Children">
										<Setting name="ChannelPressure" value="13" />
										<Setting name="ControlPressure" value="22" />
										<Setting name="RangePressure" value="0.000000;127.000000" />
									</Array>
								</Setting>
							</Array>
						</Setting>
						<Setting name="zeroReturn" value="0" />
					</Array>
					<String name="Revision" value="2" />
				</Element>
				<Element name="PETAL_1_4">
					<Array name="SettingsList">
						<Setting name="function" value="Angle/Radius">
							<Array name="Children">
								<Setting name="EnableRadius" value="1">
									<Array name="Children">
										<Setting name="ChannelRadius" value="13" />
										<Setting name="ControlRadius" value="108" />
										<Setting name="RangeRadius" value="0.000000;127.000000" />
									</Array>
								</Setting>
								<Setting name="EnableAngle" value="1">
									<Array name="Children">
										<Setting name="ChannelAngle" value="13" />
										<Setting name="ControlAngle" value="109" />
										<Setting name="RangeAngle" value="0.000000;127.000000" />
									</Array>
								</Setting>
								<Setting name="EnableFader" value="1">
									<Array name="Children">
										<Setting name="ChannelFader" value="13" />
										<Setting name="ControlFader" value="108" />
										<Setting name="RangeFader" value="0.000000;127.000000" />
									</Array>
								</Setting>
								<Setting name="EnableAxis1" value="1">
									<Array name="Children">
										<Setting name="ChannelAxis1" value="13" />
										<Setting name="ControlAxis1" value="108" />
										<Setting name="RangeAxis1" value="0.000000;127.000000" />
									</Array>
								</Setting>
								<Setting name="EnableAxis2" value="1">
									<Array name="Children">
										<Setting name="ChannelAxis2" value="13" />
										<Setting name="ControlAxis2" value="109" />
										<Setting name="RangeAxis2" value="0.000000;127.000000" />
									</Array>
								</Setting>
								<Setting name="EnableAxisZ" value="0">
									<Array name="Children">
										<Setting name="ChannelPressure" value="13" />
										<Setting name="ControlPressure" value="23" />
										<Setting name="RangePressure" value="0.000000;127.000000" />
									</Array>
								</Setting>
							</Array>
						</Setting>
						<Setting name="zeroReturn" value="0" />
					</Array>
					<String name="Revision" value="2" />
				</Element>
				<Element name="PETAL_1_5">
					<Array name="SettingsList">
						<Setting name="function" value="Angle/Radius">
							<Array name="Children">
								<Setting name="EnableRadius" value="1">
									<Array name="Children">
										<Setting name="ChannelRadius" value="13" />
										<Setting name="ControlRadius" value="110" />
										<Setting name="RangeRadius" value="0.000000;127.000000" />
									</Array>
								</Setting>
								<Setting name="EnableAngle" value="1">
									<Array name="Children">
										<Setting name="ChannelAngle" value="13" />
										<Setting name="ControlAngle" value="111" />
										<Setting name="RangeAngle" value="0.000000;127.000000" />
									</Array>
								</Setting>
								<Setting name="EnableFader" value="1">
									<Array name="Children">
										<Setting name="ChannelFader" value="13" />
										<Setting name="ControlFader" value="110" />
										<Setting name="RangeFader" value="0.000000;127.000000" />
									</Array>
								</Setting>
								<Setting name="EnableAxis1" value="1">
									<Array name="Children">
										<Setting name="ChannelAxis1" value="13" />
										<Setting name="ControlAxis1" value="110" />
										<Setting name="RangeAxis1" value="0.000000;127.000000" />
									</Array>
								</Setting>
								<Setting name="EnableAxis2" value="1">
									<Array name="Children">
										<Setting name="ChannelAxis2" value="13" />
										<Setting name="ControlAxis2" value="111" />
										<Setting name="RangeAxis2" value="0.000000;127.000000" />
									</Array>
								</Setting>
								<Setting name="EnableAxisZ" value="0">
									<Array name="Children">
										<Setting name="ChannelPressure" value="13" />
										<Setting name="ControlPressure" value="24" />
										<Setting name="RangePressure" value="0.000000;127.000000" />
									</Array>
								</Setting>
							</Array>
						</Setting>
						<Setting name="zeroReturn" value="0" />
					</Array>
					<String name="Revision" value="2" />
				</Element>
				<Element name="PETAL_2_1">
					<Array name="SettingsList">
						<Setting name="function" value="Angle/Radius">
							<Array name="Children">
								<Setting name="EnableRadius" value="1">
									<Array name="Children">
										<Setting name="ChannelRadius" value="13" />
										<Setting name="ControlRadius" value="112" />
										<Setting name="RangeRadius" value="0.000000;127.000000" />
									</Array>
								</Setting>
								<Setting name="EnableAngle" value="1">
									<Array name="Children">
										<Setting name="ChannelAngle" value="13" />
										<Setting name="ControlAngle" value="113" />
										<Setting name="RangeAngle" value="0.000000;127.000000" />
									</Array>
								</Setting>
								<Setting name="EnableFader" value="1">
									<Array name="Children">
										<Setting name="ChannelFader" value="13" />
										<Setting name="ControlFader" value="112" />
										<Setting name="RangeFader" value="0.000000;127.000000" />
									</Array>
								</Setting>
								<Setting name="EnableAxis1" value="1">
									<Array name="Children">
										<Setting name="ChannelAxis1" value="13" />
										<Setting name="ControlAxis1" value="112" />
										<Setting name="RangeAxis1" value="0.000000;127.000000" />
									</Array>
								</Setting>
								<Setting name="EnableAxis2" value="1">
									<Array name="Children">
										<Setting name="ChannelAxis2" value="13" />
										<Setting name="ControlAxis2" value="113" />
										<Setting name="RangeAxis2" value="0.000000;127.000000" />
									</Array>
								</Setting>
								<Setting name="EnableAxisZ" value="0">
									<Array name="Children">
										<Setting name="ChannelPressure" value="13" />
										<Setting name="ControlPressure" value="25" />
										<Setting name="RangePressure" value="0.000000;127.000000" />
									</Array>
								</Setting>
							</Array>
						</Setting>
						<Setting name="zeroReturn" value="1" />
					</Array>
					<String name="Revision" value="2" />
				</Element>
				<Element name="PETAL_2_2">
					<Array name="SettingsList">
						<Setting name="function" value="Angle/Radius">
							<Array name="Children">
								<Setting name="EnableRadius" value="1">
									<Array name="Children">
										<Setting name="ChannelRadius" value="13" />
										<Setting name="ControlRadius" value="114" />
										<Setting name="RangeRadius" value="0.000000;127.000000" />
									</Array>
								</Setting>
								<Setting name="EnableAngle" value="1">
									<Array name="Children">
										<Setting name="ChannelAngle" value="13" />
										<Setting name="ControlAngle" value="115" />
										<Setting name="RangeAngle" value="0.000000;127.000000" />
									</Array>
								</Setting>
								<Setting name="EnableFader" value="1">
									<Array name="Children">
										<Setting name="ChannelFader" value="13" />
										<Setting name="ControlFader" value="114" />
										<Setting name="RangeFader" value="0.000000;127.000000" />
									</Array>
								</Setting>
								<Setting name="EnableAxis1" value="1">
									<Array name="Children">
										<Setting name="ChannelAxis1" value="13" />
										<Setting name="ControlAxis1" value="114" />
										<Setting name="RangeAxis1" value="0.000000;127.000000" />
									</Array>
								</Setting>
								<Setting name="EnableAxis2" value="1">
									<Array name="Children">
										<Setting name="ChannelAxis2" value="13" />
										<Setting name="ControlAxis2" value="115" />
										<Setting name="RangeAxis2" value="0.000000;127.000000" />
									</Array>
								</Setting>
								<Setting name="EnableAxisZ" value="0">
									<Array name="Children">
										<Setting name="ChannelPressure" value="13" />
										<Setting name="ControlPressure" value="26" />
										<Setting name="RangePressure" value="0.000000;127.000000" />
									</Array>
								</Setting>
							</Array>
						</Setting>
						<Setting name="zeroReturn" value="1" />
					</Array>
					<String name="Revision" value="2" />
				</Element>
				<Element name="PETAL_2_3">
					<Array name="SettingsList">
						<Setting name="function" value="Angle/Radius">
							<Array name="Children">
								<Setting name="EnableRadius" value="1">
									<Array name="Children">
										<Setting name="ChannelRadius" value="13" />
										<Setting name="ControlRadius" value="116" />
										<Setting name="RangeRadius" value="0.000000;127.000000" />
									</Array>
								</Setting>
								<Setting name="EnableAngle" value="1">
									<Array name="Children">
										<Setting name="ChannelAngle" value="13" />
										<Setting name="ControlAngle" value="117" />
										<Setting name="RangeAngle" value="0.000000;127.000000" />
									</Array>
								</Setting>
								<Setting name="EnableFader" value="1">
									<Array name="Children">
										<Setting name="ChannelFader" value="13" />
										<Setting name="ControlFader" value="116" />
										<Setting name="RangeFader" value="0.000000;127.000000" />
									</Array>
								</Setting>
								<Setting name="EnableAxis1" value="1">
									<Array name="Children">
										<Setting name="ChannelAxis1" value="13" />
										<Setting name="ControlAxis1" value="116" />
										<Setting name="RangeAxis1" value="0.000000;127.000000" />
									</Array>
								</Setting>
								<Setting name="EnableAxis2" value="1">
									<Array name="Children">
										<Setting name="ChannelAxis2" value="13" />
										<Setting name="ControlAxis2" value="117" />
										<Setting name="RangeAxis2" value="0.000000;127.000000" />
									</Array>
								</Setting>
								<Setting name="EnableAxisZ" value="0">
									<Array name="Children">
										<Setting name="ChannelPressure" value="13" />
										<Setting name="ControlPressure" value="27" />
										<Setting name="RangePressure" value="0.000000;127.000000" />
									</Array>
								</Setting>
							</Array>
						</Setting>
						<Setting name="zeroReturn" value="1" />
					</Array>
					<String name="Revision" value="2" />
				</Element>
				<Element name="PETAL_2_4">
					<Array name="SettingsList">
						<Setting name="function" value="Angle/Radius">
							<Array name="Children">
								<Setting name="EnableRadius" value="1">
									<Array name="Children">
										<Setting name="ChannelRadius" value="13" />
										<Setting name="ControlRadius" value="118" />
										<Setting name="RangeRadius" value="0.000000;127.000000" />
									</Array>
								</Setting>
								<Setting name="EnableAngle" value="1">
									<Array name="Children">
										<Setting name="ChannelAngle" value="13" />
										<Setting name="ControlAngle" value="119" />
										<Setting name="RangeAngle" value="0.000000;127.000000" />
									</Array>
								</Setting>
								<Setting name="EnableFader" value="1">
									<Array name="Children">
										<Setting name="ChannelFader" value="13" />
										<Setting name="ControlFader" value="118" />
										<Setting name="RangeFader" value="0.000000;127.000000" />
									</Array>
								</Setting>
								<Setting name="EnableAxis1" value="1">
									<Array name="Children">
										<Setting name="ChannelAxis1" value="13" />
										<Setting name="ControlAxis1" value="118" />
										<Setting name="RangeAxis1" value="0.000000;127.000000" />
									</Array>
								</Setting>
								<Setting name="EnableAxis2" value="1">
									<Array name="Children">
										<Setting name="ChannelAxis2" value="13" />
										<Setting name="ControlAxis2" value="119" />
										<Setting name="RangeAxis2" value="0.000000;127.000000" />
									</Array>
								</Setting>
								<Setting name="EnableAxisZ" value="0">
									<Array name="Children">
										<Setting name="ChannelPressure" value="13" />
										<Setting name="ControlPressure" value="28" />
										<Setting name="RangePressure" value="0.000000;127.000000" />
									</Array>
								</Setting>
							</Array>
						</Setting>
						<Setting name="zeroReturn" value="1" />
					</Array>
					<String name="Revision" value="2" />
				</Element>
			</Array>
			<String name="Color" value="17" />
			<Array name="SettingsList">
				<Setting name="Color" value="17" />
				<Setting name="ReadOnly" value="0" />
				<Setting name="Advanced" value="1">
					<Array name="Children">
						<Setting name="Dynamic" value="Low" />
					</Array>
				</Setting>
			</Array>
			<String name="Type" value="27" />
			<String name="Revision" value="1" />
			<String name="ReadOnly" value="0" />
		</Module>
      </Array>
    </Folder>
  </Array>
</Library>
`,wm="joue-editor/presets/v1";let Ec=0;function Pm(){return Ec++,`${Date.now().toString(36)}-${Ec.toString(36)}-${Math.random().toString(36).slice(2,7)}`}function Zs(e){if(e.type===qt.Module)return e;for(const t of e.children){const n=Zs(t);if(n)return n}return null}function Gs(e,t="",n=[]){if(e.type===qt.Module)return n.push({entry:e,folder:t}),n;const a=e.type===qt.Folder?e.name??"":t;for(const i of e.children)Gs(i,a,n);return n}function _e(e){const t=J.parse(e),n=t?Zs(t):null;return n?Us(n):null}function ri(e,t,n=!1){return{id:Pm(),name:e.libraryName||e.title,folder:t,xml:e.getDescription().getStringDescription(),factory:n,type:e.type,version:e.version,color:e.color,title:e.title,updatedAt:Date.now()}}function gS(){const e=J.parse(dS);if(!e)return[];const t=[];for(const{entry:n,folder:a}of Gs(e)){const i=Us(n);if(!i)continue;const r=ri(i,a,!0);r.id=`factory-${t.length}`,t.push(r)}return t}function mS(e,t){const n=J.parse(e);if(!n)return[];const a=t.replace(/\.[^.]+$/,""),i=[];for(const{entry:r,folder:l}of Gs(n)){const s=Us(r);!s||s.className==="Unknown"||(s.readOnly=!1,i.push(ri(s,l||a)))}return i}function hS(e){const t=new J(qt.Library,null,null);t.addChild(J.string("Version","3"));const n=J.array("ModuleList"),a=new Map;for(const i of e){const r=J.parse(i.xml),l=r?Zs(r):null;if(!l)continue;const s=i.folder||"My presets";let o=a.get(s);if(!o){const u=new J(qt.Folder,s,null);u.addChild(J.string("IsExpanded","1")),o=J.array("Entries"),u.addChild(o),n.addChild(u),a.set(s,o)}o.addChild(l)}return t.addChild(n),t.getStringDescription()}async function fS(){try{const e=await uS(wm);return Array.isArray(e)?e:[]}catch{return[]}}async function pS(e){try{return await cS(wm,e.filter(t=>!t.factory)),!0}catch{return!1}}const Vm="joue-editor/lang";function SS(){try{const e=localStorage.getItem(Vm);if(e==="fr"||e==="en")return e}catch{}return typeof navigator<"u"&&navigator.language?.toLowerCase().startsWith("fr")?"fr":"en"}function sn(e){return e.slot-e.module.tagPosition}function rr(e){const t=e.elementList.find(n=>!n.disabled);return t?t.name:null}function Om(e){const t=e.settings.getSettingWithName("Color")?.values??[];return Number(t.find(n=>n!=="0")??2)}function zo(e,t){return!t.invalid&&e.type===t.type&&e.version===t.version}class vS{listeners=new Set;state={ready:!1,lang:SS(),presets:[],connection:"idle",connectionError:null,board:null,selection:null,working:null,element:null,revision:0,toasts:[],undoDepth:0,redoDepth:0,dragging:null};device=null;undoStack=[];redoStack=[];saveTimer=null;toastId=0;restarting=new Map;subscribe=t=>(this.listeners.add(t),()=>this.listeners.delete(t));getSnapshot=()=>this.state;set(t){this.state={...this.state,...t},this.listeners.forEach(n=>n())}touch(){this.set({revision:this.state.revision+1})}t(t,n){return iS(this.state.lang,t,n)}async init(){const t=gS(),n=await fS();this.set({presets:[...n,...t],ready:!0}),typeof window<"u"&&window.addEventListener("pagehide",()=>{this.state.board&&this.state.board.axis!=="all"&&this.device?.setAxes(!0,!0,!0)})}setLang(t){try{localStorage.setItem(Vm,t)}catch{}this.set({lang:t})}toast(t,n="info",a){const i=++this.toastId;this.set({toasts:[...this.state.toasts,{id:i,text:t,tone:n,action:a}].slice(-2)}),setTimeout(()=>this.dismiss(i),a?8e3:n==="error"?6e3:3500)}dismiss(t){this.set({toasts:this.state.toasts.filter(n=>n.id!==t)})}async connect(){this.set({connection:"searching",connectionError:null});const{support:t,access:n,error:a}=await e1();if(t!=="ok"||!n){a&&console.warn("Web MIDI:",a),this.set({connection:t==="ok"?"notfound":t,connectionError:a??null});return}const i=Jp(n);if(i.length>0&&i.every(l=>l.bootloader)){this.set({connection:"bootloader"});return}const r=await n1(i);if(!r){const l=o=>[...o].map(u=>`${u.name??"?"}${u.manufacturer?` (${u.manufacturer})`:""}`).join(", ")||"–",s=`MIDI in: ${l(n.inputs.values())} · MIDI out: ${l(n.outputs.values())}`;console.warn("No Joué answered.",s),this.set({connection:"notfound",connectionError:s});return}n.onstatechange=l=>{const s=l.port;s&&s.state==="disconnected"&&(s.id===r.pair.input.id||s.id===r.pair.output.id)&&this.disconnect()},await this.attachDevice(r.device)}async attachDevice(t,n=!1){this.device=t,t.onModuleAppeared=l=>this.moduleAppeared(l),t.onModuleDisappeared=l=>this.moduleDisappeared(l);let a=n,i=null,r=null;try{a=((await t.getHardwareInfo()).limitations&Wp.Flashing)!==0}catch{}try{i=await t.getBuildNumber()}catch{i=null}try{r=Kp(await t.getSerial())}catch{r=null}this.set({connection:"connected",board:{name:t.name,play:a,build:i,serial:r,slots:[],axis:"all"}});try{await t.updateModuleList(),await t.setAxes(!0,!0,!0)}catch(l){this.toast(String(l instanceof Error?l.message:l),"error")}}disconnect(){const t=this.state.selection?.kind==="slot";this.device?.close(),this.device=null,this.set({board:null,connection:"idle",...t?{selection:null,working:null,element:null}:{}})}updateSlots(t){this.state.board&&this.set({board:{...this.state.board,slots:t}})}moduleAppeared(t){const n=this.state.board;if(!n)return;let a=null;t.version>1&&(a=ii(t.type,t.version,t.options)),a||(a=new jt(t.type,t.version,t.options)),a.color=t.color;let i=!1;const r=this.restarting.get(t.slot);r&&r.type===t.type&&r.version===t.version&&(a=r,i=!0);const l={...t,module:a,loaded:i,status:"idle",dirty:!1},s=sn(l),o=n.slots.filter(d=>{if(d.slot===t.slot)return!1;const m=sn(d);return m+d.module.slotNbr-1<s||m>s+a.slotNbr-1});this.updateSlots([...o,l].sort((d,m)=>sn(d)-sn(m)));const u=this.state.selection;u?.kind==="slot"&&u.slot===t.slot&&(i?this.set({working:a}):this.selectSlot(t.slot))}moduleDisappeared(t){const n=this.state.board;if(!n)return;this.updateSlots(n.slots.filter(i=>i.slot!==t));const a=this.state.selection;a?.kind==="slot"&&a.slot===t&&!this.restarting.has(t)&&this.set({selection:null,working:null,element:null})}slot(t){return this.state.board?.slots.find(n=>n.slot===t)}patchSlot(t,n){const a=this.state.board;a&&this.updateSlots(a.slots.map(i=>i.slot===t?{...i,...n}:i))}async selectSlot(t){const n=this.slot(t);if(n){if(this.resetHistory(),n.loaded||n.module instanceof jt){this.set({selection:{kind:"slot",slot:t},working:n.module,element:rr(n.module)});return}this.set({selection:{kind:"slot",slot:t},working:null,element:null}),this.patchSlot(t,{status:"reading",error:void 0});try{const a=await this.device.readModule(t),i=this.slot(t);if(!i)return;const r=ii(i.type,i.version,i.options)??i.module;if(r.color=i.color,r.loadMidiData(a)===0)throw new Error(this.t("readFailed"));this.state.board?.play&&(r.locked=!0),this.patchSlot(t,{module:r,loaded:!0,status:"idle",dirty:!1});const s=this.state.selection;s?.kind==="slot"&&s.slot===t&&this.set({working:r,element:rr(r)})}catch(a){this.patchSlot(t,{status:"error",error:a instanceof Error?a.message:String(a)});const i=this.state.selection;i?.kind==="slot"&&i.slot===t&&this.set({working:null})}}}compatibleSlots(t){return!t||!this.state.board||this.state.board.play?[]:this.state.board.slots.filter(n=>zo(n,t))}async send(t,n){const a=this.slot(t),i=this.device;if(!a||!i)return!1;if(this.state.board?.play)return this.toast(this.t("playLimit"),"error"),!1;if(!zo(a,n))return this.toast(this.t("noCompatible",{title:n.title}),"error"),!1;const r=n.color;n.color=a.color;const l=n.getMidiDescription();if(n.color=r,!l)return this.toast(this.t("cannotEncode"),"error"),!1;const s=`${a.module.title} (${this.t("slot",{n:sn(a)+1})})`,o=_e(n.getDescription().getStringDescription())??n;o.color=a.color,o.libraryName=n.libraryName,o.readOnly=!1,this.patchSlot(t,{status:"writing"}),this.restarting.set(t,o);try{await i.writeModule(t,l),setTimeout(()=>this.restarting.delete(t),4e3),this.patchSlot(t,{module:o,loaded:!0,status:"idle",dirty:!1,error:void 0});const u=this.state.selection;return u?.kind==="slot"&&u.slot===t&&this.set({working:o}),this.toast(this.t("sent",{name:s}),"success"),!0}catch(u){this.restarting.delete(t),this.patchSlot(t,{status:"idle"});const d=u instanceof nn||u instanceof Error?u.message:String(u);return this.toast(this.t("sendFailed",{reason:d}),"error"),!1}}async setAxis(t){const n=this.state.board;if(!(!n||!this.device)){this.set({board:{...n,axis:t}});try{await this.device.setAxes(t==="all"||t==="x",t==="all"||t==="y",t==="all"||t==="z")}catch(a){this.toast(a instanceof Error?a.message:String(a),"error")}}}selectPreset(t){const n=this.state.presets.find(i=>i.id===t);if(!n)return;const a=_e(n.xml);a&&(n.factory&&(a.readOnly=!0),this.resetHistory(),this.set({selection:{kind:"preset",id:t},working:a,element:rr(a)}))}selectedPreset(){const t=this.state.selection;return t?.kind==="preset"?this.state.presets.find(n=>n.id===t.id)??null:null}persist(){this.saveTimer&&clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>{pS(this.state.presets)},400)}replacePreset(t){this.set({presets:this.state.presets.map(n=>n.id===t.id?t:n)}),this.persist()}addPresets(t){this.set({presets:[...t,...this.state.presets]}),this.persist()}saveAsPreset(t,n){const a=_e(t.getDescription().getStringDescription())??t;a.readOnly=!1,a.libraryName=n??(t.libraryName||t.title);const i=ri(a,this.t("myPresets"));return this.addPresets([i]),this.toast(this.t("saved",{name:i.name}),"success"),i}newPreset(t){const n=ii(t,3,0);if(!n||n instanceof jt)return;n.libraryName=n.title,n.color===0&&(n.color=n.getDefaultColor()||Om(n));const a=ri(n,this.t("myPresets"));this.addPresets([a]),this.selectPreset(a.id)}duplicatePreset(t){const n=this.state.presets.find(r=>r.id===t);if(!n)return;const a=_e(n.xml);if(!a)return;a.readOnly=!1,a.libraryName=n.factory?n.name:this.t("newName",{name:n.name});const i=ri(a,this.t("myPresets"));this.addPresets([i]),this.selectPreset(i.id),this.toast(this.t("duplicated"),"success")}renamePreset(t,n){const a=this.state.presets.find(l=>l.id===t),i=n.trim();if(!a||a.factory||!i)return;const r=this.state.selection?.kind==="preset"&&this.state.selection.id===t?this.state.working:_e(a.xml);r&&(r.libraryName=i,this.replacePreset({...a,name:i,xml:r.getDescription().getStringDescription(),updatedAt:Date.now()}),this.touch())}deletePreset(t){const n=this.state.presets.findIndex(r=>r.id===t),a=this.state.presets[n];if(!a||a.factory)return;const i=this.state.selection;this.set({presets:this.state.presets.filter(r=>r.id!==t),...i?.kind==="preset"&&i.id===t?{selection:null,working:null,element:null}:{}}),this.persist(),this.toast(this.t("deleted",{name:a.name}),"info",{label:this.t("undoDelete"),run:()=>{const r=[...this.state.presets];r.splice(n,0,a),this.set({presets:r}),this.persist()}})}setPresetLocked(t,n){const a=this.state.presets.find(r=>r.id===t);if(!a||a.factory)return;const i=this.state.working;!i||this.state.selection?.kind!=="preset"||this.state.selection.id!==t||(i.readOnly=n,this.replacePreset({...a,xml:i.getDescription().getStringDescription(),updatedAt:Date.now()}),this.touch())}importFile(t,n){const a=mS(t,n);return a.length===0?(this.toast(this.t("importNone"),"error"),0):(this.addPresets(a),this.toast(this.t("imported",{n:a.length}),"success"),a.length)}exportText(t){return hS(t)}selectElement(t){this.set({element:t})}canEdit(){const t=this.state.working;if(!t||t instanceof jt)return!1;const n=this.state.selection;return n?.kind==="preset"?!this.selectedPreset()?.factory:n?.kind==="slot"?!this.state.board?.play:!1}change(t,n){const a=this.state.working;!a||!this.canEdit()||t.dictionary.Value!==n&&(this.undoStack.push(a.getDescription().getStringDescription()),this.undoStack.length>100&&this.undoStack.shift(),this.redoStack=[],t.dictionary.Value=n,t.settings?.settingDidChange(t),this.afterEdit())}afterEdit(){const t=this.state.working,n=this.state.selection;if(t){if(n?.kind==="preset"){const a=this.selectedPreset();a&&!a.factory&&this.replacePreset({...a,xml:t.getDescription().getStringDescription(),color:t.color,updatedAt:Date.now()})}else n?.kind==="slot"&&this.patchSlot(n.slot,{dirty:!0});this.set({undoDepth:this.undoStack.length,redoDepth:this.redoStack.length,revision:this.state.revision+1})}}resetHistory(){this.undoStack=[],this.redoStack=[],this.set({undoDepth:0,redoDepth:0})}restore(t){const n=this.state.working,a=_e(t);if(!a||!n)return;a.color=n.color;const i=this.state.selection;i?.kind==="slot"&&this.patchSlot(i.slot,{module:a});const r=this.state.element&&a.elementList.some(l=>l.name===this.state.element)?this.state.element:rr(a);this.set({working:a,element:r}),this.afterEdit()}undo(){const t=this.state.working,n=this.undoStack.pop();!t||n===void 0||(this.redoStack.push(t.getDescription().getStringDescription()),this.restore(n))}redo(){const t=this.state.working,n=this.redoStack.pop();!t||n===void 0||(this.undoStack.push(t.getDescription().getStringDescription()),this.restore(n))}setDragging(t){this.set({dragging:t})}async dropPreset(t,n){const a=this.state.presets.find(r=>r.id===t);if(!a)return;const i=_e(a.xml);i&&await this.send(n,i)}newPresetId(){return Pm()}}const D=new vS;function j(e){return Z.useSyncExternalStore(D.subscribe,()=>e(D.state),()=>e(D.state))}const Nc={viewBox:"4.6 53.6 81.9 127.8",d:"M 19.85 171.07 C 18.52 170.18 17.7 168.81 17.48 167.11 C 16.53 159.42 25.44 152.42 28.37 150.12 C 33.13 146.37 38.86 143.14 45.87 140.25 L 45.94 140.22 C 46.06 140.18 46.18 140.12 46.3 140.11 C 46.37 140.1 46.45 140.09 46.53 140.08 C 46.6 140.07 46.69 140.05 46.78 140.05 L 47.12 140.01 L 47.18 140.35 C 47.21 140.54 47.2 140.75 47.14 140.91 C 46.78 142.05 46.34 143.38 45.81 144.71 C 42.33 153.38 38.25 160.35 33.35 166.02 C 31.98 167.59 28.41 170.97 24.73 171.89 C 24.27 172 23.79 172.09 23.27 172.09 C 21.82 172.07 20.82 171.71 19.85 171.07 M 85.48 119.74 C 84.43 118.3 82.73 118.4 81.5 118.74 C 79.52 119.28 72.07 121.93 67.15 123.68 C 64.91 124.47 63.3 125.05 62.89 125.18 C 62.32 125.36 61.97 125.37 61.79 125.21 L 61.62 125.07 L 61.67 124.84 C 61.98 123.24 64.71 108.78 64.66 95.67 L 64.66 95.52 C 64.68 92.22 64.46 80.82 60.95 72.91 C 58.48 67.37 55.11 62.62 51.85 60.02 C 45.33 54.81 38.38 53.07 28.89 53.9 C 23.95 54.33 18.93 55.71 13.96 58 C 11.02 59.36 8.29 61 5.84 62.88 C 4.62 63.8 4.36 65.4 4.88 66.78 C 5.14 67.45 5.5 68.14 5.94 68.76 C 6.99 70.26 7.99 70.5 9.62 69.64 C 10.07 69.4 12.29 67.94 13.24 67.31 L 13.66 67.04 C 19.95 62.95 26.16 60.96 32.64 60.96 C 33.43 60.96 34.24 60.99 35.05 61.05 C 40 61.43 44.07 63.33 47.16 66.71 C 49.98 69.82 52.09 73.77 53.6 78.79 C 54.68 82.35 54.95 85.96 55.17 89.97 C 55.91 103.33 54.71 115.51 51.5 127.21 C 50.9 129.39 49.72 130.77 47.66 131.68 C 46.53 132.16 45.38 132.69 44.36 133.15 C 43.19 133.68 41.98 134.23 40.8 134.75 C 32.32 138.42 24.77 141.95 18.16 147.54 C 14.7 150.46 5.43 159.39 7.52 169.8 C 8.61 175.23 13.35 179.71 18.52 180.86 C 21.82 181.59 25.12 181.59 30.18 179.42 C 39.03 175.37 45.69 164.08 48.28 159.34 C 50.84 155.02 56.97 140.49 57.75 138.4 C 58.08 137.51 58.41 136.62 58.74 135.73 C 59.1 134.79 59.75 134.13 60.73 133.74 C 60.75 133.73 61.12 133.58 61.74 133.32 C 72.27 128.91 78.98 126.14 81.67 125.07 C 81.93 124.97 82.2 124.87 82.47 124.77 C 84.21 124.11 85.97 123.44 86.31 122.3 C 86.51 121.62 86.23 120.79 85.48 119.74"},wc={viewBox:"8 8 686 409",paths:["M 562.79 221.63 C 561.45 220.98 561.96 217.72 562.3 216.86 C 566.82 205.43 573.64 195.22 583.27 186.91 C 584.5 185.85 587.26 183.92 590.06 184.43 C 592.25 184.91 590.04 190.61 589.25 191.9 C 582.95 202.34 567.29 223.84 562.79 221.63 M 297.77 249.8 C 294.95 253.61 290.59 258.07 285.45 259.35 C 279.1 260.94 272.95 256.6 271.89 250.14 C 270.93 244.34 272.04 238.83 273.5 233.39 C 277.92 216.86 299.77 180.92 313.56 187.63 C 330.83 196.03 302.39 243.57 297.77 249.8 M 688.67 238.61 C 686.13 235.24 681.97 234.3 678.08 235.96 C 676.05 236.82 668.89 241.04 652.27 247.08 C 635.46 253.19 618.18 256.54 600.21 254.53 C 589.9 253.38 579.96 250.87 571.15 245.05 C 568.58 243.34 568.59 243.19 570.95 241.38 C 582.87 232.28 593.99 222.32 603.5 210.68 C 608.69 204.34 613.3 197.66 614.71 189.3 C 616.73 177.4 609.27 167.15 597.42 166.16 C 589.8 165.54 578.27 164.95 561.3 179.92 C 547.33 193.9 539.34 212.86 538.99 236.96 C 539.02 239.47 526.88 244.9 521.83 245.23 C 514.77 245.69 508.77 243.38 503.5 238.82 C 495.42 231.83 489.12 211.21 486.79 204.82 C 483.65 196.19 477.22 193.98 468.47 196.89 C 462.48 198.89 458.79 204.2 454.79 208.73 C 443.3 221.77 429.54 245.8 412.28 253.09 C 409.16 254.41 404.58 253.79 403.04 250.54 C 402.27 248.91 401.59 245.8 401.59 240.82 C 401.59 221.46 404.86 207.56 412.43 189.8 C 414.52 184.9 416.68 180.02 418.56 175.04 C 421.85 166.33 417.71 160.3 408.4 160.03 C 407.07 159.99 405.69 159.97 404.42 160.29 C 401.14 161.12 399.79 161.88 396.65 163.14 C 382.18 168.95 367.77 174.92 353.34 180.83 C 352.25 181.28 351.17 181.73 350.03 182.2 C 349.77 181.73 349.55 181.43 349.41 181.1 C 346.84 174.93 342.41 170.3 336.93 166.74 C 323.97 158.35 310.04 158.39 295.92 162.9 C 283.6 166.83 274.62 175.57 266.71 185.27 C 259.34 194.29 253.33 204.26 249.03 215.18 C 248.66 216.11 247.57 217.07 246.6 217.39 C 244.04 218.23 241.46 221.07 238.88 221.85 L 238.88 241.65 C 241.59 240.65 243.36 240 243.67 239.91 C 243.87 247.8 244.87 252.79 246.61 258.84 C 249.44 268.67 255.59 275.63 264.66 279.46 C 272.75 282.87 281.39 283.71 290.36 282.17 C 302.61 280.05 312.68 274.25 320.83 265.25 C 335.54 249.02 344.63 229.7 350.37 208.72 C 350.73 207.37 351.25 204.52 352.54 203.95 C 359.71 200.78 381.35 192.39 384.31 191.31 C 382.43 197.59 380.65 205.44 378.93 211.31 C 375.18 224.05 373.5 236.56 374.64 248.8 C 375.48 257.96 377.84 266.14 383.87 273.42 C 391.61 282.74 406.58 282.74 417.13 278.81 C 427.45 274.96 436.08 268.42 443.76 260.63 C 451.5 252.79 455.68 247.56 461.57 241.94 C 463.6 240 464.46 240.02 466.1 242.33 C 466.31 242.63 466.52 242.93 466.74 243.23 C 480.64 261.88 501.53 272.59 524.37 268.77 C 532.8 267.36 544.34 261.78 548.57 259.57 C 558.21 267.49 569.32 272.41 581.31 275.3 C 602.02 280.29 622.61 278.85 643.03 273.5 C 662.37 268.44 681.59 258.77 686.91 254.9 C 692.91 250.54 693.76 245.33 688.67 238.61","M 555 134 C 547.43 133.56 541.77 126.48 543.5 119.36 C 544.05 117.08 545.29 115.34 547.46 114.32 C 567.8 104.81 587.06 93.38 606.08 81.51 C 609.59 79.32 612.98 76.93 616.45 74.66 C 619.61 72.59 622.94 71.6 626.35 74.01 C 630.46 76.92 632.17 81.39 631.07 85.82 C 630.22 89.26 628.39 92.18 625.61 94.23 C 619.84 98.48 614.14 102.92 607.96 106.47 C 593.15 114.98 578.11 123.09 563.09 131.2 C 560.61 132.54 557.7 133.09 555 134","M 57.53 382 C 53.28 379.18 50.68 374.83 50.01 369.43 C 46.98 344.98 75.29 322.72 84.59 315.41 C 99.74 303.5 117.93 293.25 140.21 284.06 L 140.43 283.97 C 140.81 283.81 141.2 283.64 141.58 283.6 C 141.8 283.58 142.05 283.54 142.31 283.5 C 142.53 283.47 142.83 283.43 143.1 283.39 L 144.2 283.27 L 144.38 284.36 C 144.48 284.98 144.44 285.62 144.27 286.15 C 143.12 289.75 141.71 294.01 140.03 298.21 C 128.97 325.78 116.02 347.94 100.41 365.96 C 96.09 370.96 84.73 381.69 73.04 384.61 C 71.57 384.97 70.02 385.24 68.39 385.22 C 63.78 385.18 60.61 384.05 57.53 382 M 266.09 218.87 C 262.76 214.28 257.38 214.6 253.45 215.68 C 247.14 217.4 223.49 225.81 207.84 231.38 C 200.73 233.91 195.6 235.74 194.29 236.15 C 192.49 236.73 191.38 236.76 190.79 236.25 L 190.29 235.82 L 190.43 235.09 C 191.41 229.98 200.08 184.02 199.95 142.38 L 199.95 141.9 C 200 131.39 199.3 95.16 188.13 70.02 C 180.31 52.42 169.57 37.33 159.21 29.05 C 138.51 12.51 116.42 6.98 86.27 9.61 C 70.55 10.98 54.58 15.36 38.81 22.65 C 29.46 26.96 20.78 32.17 12.98 38.14 C 9.12 41.09 8.3 46.15 9.96 50.55 C 10.76 52.68 11.92 54.86 13.32 56.85 C 16.66 61.6 19.82 62.36 25 59.64 C 26.44 58.89 33.51 54.23 36.53 52.23 L 37.86 51.36 C 57.85 38.37 77.57 32.05 98.16 32.05 C 100.69 32.05 103.27 32.15 105.83 32.34 C 121.56 33.53 134.51 39.59 144.3 50.34 C 153.29 60.2 159.99 72.75 164.8 88.71 C 168.2 100.02 169.06 111.5 169.77 124.27 C 172.11 166.71 168.3 205.41 158.12 242.59 C 156.21 249.55 152.45 253.93 145.89 256.79 C 142.32 258.35 138.66 260.02 135.43 261.48 C 131.71 263.17 127.87 264.91 124.1 266.55 C 97.14 278.22 73.14 289.44 52.14 307.2 C 41.16 316.5 11.68 344.89 18.32 377.96 C 21.79 395.23 36.86 409.46 53.31 413.11 C 63.78 415.44 74.25 415.44 90.35 408.53 C 118.48 395.65 139.64 359.77 147.87 344.72 C 156 331 175.49 284.82 177.96 278.16 C 179.02 275.34 180.06 272.51 181.12 269.69 C 182.25 266.68 184.32 264.61 187.44 263.37 C 187.52 263.34 188.69 262.85 190.66 262.02 C 224.13 248.01 245.44 239.2 253.99 235.82 C 254.84 235.48 255.69 235.16 256.55 234.83 C 262.06 232.74 267.65 230.61 268.73 226.99 C 269.37 224.86 268.5 222.2 266.09 218.87"]},yS="#1b1a1e",CS="#323232",AS="#1aafff",bS="#808080",xS="#aaaaaa",ke=1,Pc=3,Yt=e=>Math.round(e*1e3)/1e3,vt=e=>`${Yt(e.x)} ${Yt(e.y)}`,li=e=>e*Math.PI/180,sa=(e,t,n)=>({x:e.x+t*Math.cos(li(n)),y:e.y+t*Math.sin(li(n))});function je(e,t,n){return{x:e.x+(t.x-e.x)*n,y:e.y+(t.y-e.y)*n}}function jo(e){if(e.geometryMM.length===0)return e.dimensionMM;const t=e.geometryMM.map(r=>r.x),n=e.geometryMM.map(r=>r.y),a=Math.min(...t),i=Math.min(...n);return{x:a,y:i,width:Math.max(...t)-a,height:Math.max(...n)-i}}function Ho(e,t,n,a){const i=Math.max(0,Math.min(t,e.width/2,e.height/2));return f.jsx("rect",{x:Yt(e.x),y:Yt(e.y),width:Yt(e.width),height:Yt(e.height),rx:Yt(i),ry:Yt(i),...n},a)}function MS(e,t){return{x:e.x-t,y:e.y-t,width:e.width+2*t,height:e.height+2*t}}function Vc(e,t,n){let a="";const i=e.length;for(let r=0;r<i;r++){const l=e[(r-1+i)%i],s=e[r],o=e[(r+1)%i];let u=Math.atan2(l.y-s.y,l.x-s.x)*180/Math.PI,d=Math.atan2(o.y-s.y,o.x-s.x)*180/Math.PI;u<=0&&(u+=360),d<0&&(d+=360);const m=d-u;let c=u+m/2;m>180&&(c-=180);const S=Math.sin(li(u-c)),y=t/S,v=n/S,x=y>=0?y-v:-(y-v),g={x:s.x+x*Math.cos(li(c)),y:s.y+x*Math.sin(li(c))},h=!(y>0),C=h?u+90-180:u+90,p=h?d-90-180:d-90;if(a+=`${r===0?"M":"L"}${vt(sa(g,t,C))}`,t>0){const b=((h?C-p:p-C)%360+360)%360;a+=` A${Yt(t)} ${Yt(t)} 0 ${b>180?1:0} ${h?0:1} ${vt(sa(g,t,p))}`}}return`${a} Z`}function DS(e){const[t,n,,a]=e.geometryMM,i=je(t,a,.7),r=je(t,a,1.3),l=je(t,n,.7),s=je(t,n,1.3);return`M${vt(i)} C${vt(t)} ${vt(t)} ${vt(l)} C${vt(s)} ${vt(r)} ${vt(i)} Z`}function ES(e){const[t,n,a,i]=e.geometryMM,r=jo(e).width-ke,l=e.radiusMM>0?e.radiusMM+ke/2:r*.9,s=90*(e.type_petal-6),o=s+90,u=`M${vt(sa(t,l,s))} A${Yt(l)} ${Yt(l)} 0 0 1 ${vt(sa(t,l,o))}`,d=`M${vt(je(t,i,.4))} L${vt(je(t,i,.6))} M${vt(je(t,n,.4))} L${vt(je(t,n,.6))}`,m=je(t,a,.05),c=l*.85,S=`M${vt(m)} L${vt(sa(m,c,s))} A${Yt(c)} ${Yt(c)} 0 0 1 ${vt(sa(m,c,o))} L${vt(m)} Z`;return{stroke:`${u} ${d}`,pie:S,lineWidth:r/18}}function NS(e){return e==="selected"?AS:e==="pressed"?xS:e==="hover"?bS:null}function wS({e,fill:t,look:n}){const a=NS(n);if(e.type_petal>=1&&e.type_petal<=5&&e.geometryMM.length>=4){const r=DS(e);return f.jsxs("g",{children:[t&&f.jsx("path",{d:r,fill:t}),a&&f.jsx("path",{d:r,fill:"none",stroke:a,strokeWidth:ke})]})}if(e.type_petal>=6&&e.type_petal<=9&&e.geometryMM.length>=4){const r=ES(e);return f.jsxs("g",{children:[a&&f.jsx("path",{d:r.pie,fill:a}),t&&f.jsx("path",{d:r.stroke,fill:"none",stroke:t,strokeWidth:Yt(r.lineWidth)}),a&&f.jsx("path",{d:r.stroke,fill:"none",stroke:a,strokeWidth:Yt(r.lineWidth)})]})}if(e.geometryMM.length>0){const r=e.radiusMM;return f.jsxs("g",{children:[a&&f.jsx("path",{d:Vc(e.geometryMM,r>0?r+ke/2:0,ke/2),fill:"none",stroke:a,strokeWidth:ke}),t&&f.jsx("path",{d:Vc(e.geometryMM,r,0),fill:t})]})}const i=e.dimensionMM;return i.width<=0||i.height<=0?null:f.jsxs("g",{children:[a&&Ho(MS(i,ke/2),e.radiusMM>0?e.radiusMM+ke/2:0,{fill:"none",stroke:a,strokeWidth:ke}),t&&Ho(i,e.radiusMM,{fill:t})]})}function PS({e}){return e.geometryMM.length>0?f.jsx("polygon",{points:e.geometryMM.map(vt).join(" ")}):Ho(e.dimensionMM,e.radiusMM,{})}function fl({module:e,selected:t,interactive:n,onSelect:a,nameOf:i,className:r,colorId:l}){const[s,o]=Z.useState(null),[u,d]=Z.useState(null),m=e.sizeMM.width,c=e.sizeMM.height,S=Nr(l??e.color).hex,y=n?ke:0,v=[...e.backgroundElementList.map((A,N)=>({e:A,bg:!0,order:N})),...e.elementList.map((A,N)=>({e:A,bg:!1,order:1e3+N}))].sort((A,N)=>A.e.layerNbr-N.e.layerNbr||A.order-N.order),x=A=>A.isColorizable?S:A.invisible?null:CS,g=(A,N)=>!n||N||A.disabled?null:t===A.name?"selected":u===A.name?"pressed":s===A.name?"hover":null,h=n?e.elementList.filter(A=>!A.disabled):[],C=A=>jo(A).width*jo(A).height,p=[...h].sort((A,N)=>C(N)-C(A)),b=(A,N)=>{(A.key==="Enter"||A.key===" ")&&(A.preventDefault(),a?.(N))};return f.jsx("svg",{className:r,viewBox:`${-y} ${-y} ${m+2*y} ${c+2*y}`,role:n?"group":"img","aria-label":e.libraryName||e.title,onMouseLeave:()=>{o(null),d(null)},children:f.jsxs("g",{transform:`matrix(1 0 0 -1 0 ${c})`,children:[f.jsx("rect",{x:0,y:0,width:m,height:c,rx:Pc,ry:Pc,fill:yS}),v.map((A,N)=>f.jsx(wS,{e:A.e,fill:x(A.e),look:g(A.e,A.bg)},N)),p.map(A=>f.jsxs("g",{className:"hit",role:"button",tabIndex:0,"aria-pressed":t===A.name,"aria-label":i?i(A):A.name,fill:"transparent",onClick:N=>{N.stopPropagation(),d(null),a?.(A.name)},onPointerDown:()=>d(A.name),onKeyDown:N=>b(N,A.name),onMouseEnter:()=>o(A.name),onFocus:()=>o(A.name),onBlur:()=>o(N=>N===A.name?null:N),children:[f.jsx("title",{children:i?i(A):A.name}),f.jsx(PS,{e:A})]},`t-${A.name}`))]})})}const Ce=200,Xo=76,Ae={x:9,y:13,w:150,h:50},Oc=50,lr=2,VS={top:[[0,"#c6a38e"],[.14,"#b49278"],[.36,"#a47655"],[.55,"#8d5935"],[.72,"#8a552f"],[.86,"#925f3b"],[1,"#503b2d"]],bottom:[[0,"#4a3729"],[.14,"#8f5b38"],[.3,"#845433"],[.46,"#87583a"],[.62,"#8f6549"],[.78,"#96705a"],[1,"#9e7c6a"]],y0:0,y1:76,radius:1.6,body:"#1d1d1d",edge:"#181a1c",rim:"#4c4744",tray:["#232324","#272727","#2b2b2b"],trayLine:null,separator:{x:[58,108],w:2,fill:"#a8a9a8",shade:"#1c1c1c"},grain:"#5a3520",logo:"#b8b8b8",word:"Pro"},OS={top:[[0,"#d4b688"],[.2,"#d0b17f"],[.45,"#cfb37f"],[.68,"#d3b383"],[.86,"#dcbb87"],[1,"#695e4f"]],bottom:[[0,"#4e463a"],[.18,"#d6b283"],[.38,"#d2af7c"],[.58,"#cea879"],[.78,"#d2ac80"],[1,"#d3b285"]],y0:2,y1:74,radius:3.6,body:"#2a2a2a",edge:"#1b1d20",rim:"#424242",tray:["#343434","#2f2f2f","#303030"],trayLine:"#212121",separator:{x:[58.7,108.7],w:1.3,fill:"#a6a6a6",shade:"#262626"},grain:"#a88553",logo:"#d2d2d2",word:"Play"};function Rc(e,t,n){let a=n;const i=()=>(a=a*16807%2147483647,a/2147483647),r=[];for(let l=0;l<9;l++){const s=e+.6+i()*(t-e-1.2),o=i()*120,u=30+i()*90,d=.08+i()*.25;let m=`M${o.toFixed(1)} ${s.toFixed(2)}`;for(let c=o+6;c<=Math.min(Ce,o+u);c+=6)m+=` L${c.toFixed(1)} ${(s+Math.sin(c/17+l)*d).toFixed(2)}`;r.push({d:m,o:.18+i()*.25})}return r}function RS({play:e,className:t}){const n=e?OS:VS,a=e?"play":"pro",i=7.5,r=68.5,l=Z.useMemo(()=>[...Rc(n.y0,i,e?11:7),...Rc(r,n.y1,e?29:13)],[e,n.y0,n.y1]),[s,o,u,d]=Nc.viewBox.split(" ").map(Number),c=12.6/d,S=e?168.4:168.6;return f.jsxs("svg",{className:t,viewBox:`0 0 ${Ce} ${Xo}`,"aria-hidden":"true",children:[f.jsxs("defs",{children:[f.jsx("linearGradient",{id:`wood-top-${a}`,x1:"0",y1:"0",x2:"0",y2:"1",children:n.top.map(([v,x])=>f.jsx("stop",{offset:v,stopColor:x},v))}),f.jsx("linearGradient",{id:`wood-bottom-${a}`,x1:"0",y1:"0",x2:"0",y2:"1",children:n.bottom.map(([v,x])=>f.jsx("stop",{offset:v,stopColor:x},v))}),f.jsxs("linearGradient",{id:`tray-${a}`,x1:"0",y1:"0",x2:"1",y2:"0",children:[f.jsx("stop",{offset:"0",stopColor:n.tray[0]}),f.jsx("stop",{offset:"0.5",stopColor:n.tray[1]}),f.jsx("stop",{offset:"1",stopColor:n.tray[2]})]}),f.jsxs("linearGradient",{id:`sep-${a}`,x1:"0",y1:"0",x2:"1",y2:"0",children:[f.jsx("stop",{offset:"0",stopColor:n.separator.fill}),f.jsx("stop",{offset:"1",stopColor:n.separator.fill,stopOpacity:"0.72"})]}),f.jsx("clipPath",{id:`outline-${a}`,children:f.jsx("rect",{x:"0",y:n.y0,width:Ce,height:n.y1-n.y0,rx:n.radius})})]}),f.jsxs("g",{clipPath:`url(#outline-${a})`,children:[f.jsx("rect",{x:"0",y:n.y0,width:Ce,height:i-n.y0,fill:`url(#wood-top-${a})`}),f.jsx("rect",{x:"0",y:r,width:Ce,height:n.y1-r,fill:`url(#wood-bottom-${a})`}),f.jsx("g",{fill:"none",stroke:n.grain,strokeWidth:"0.3",children:l.map((v,x)=>f.jsx("path",{d:v.d,opacity:v.o},x))}),f.jsx("rect",{x:"0",y:i,width:Ce,height:r-i,fill:n.body}),f.jsx("rect",{x:"0",y:i,width:Ce,height:"0.7",fill:n.edge}),f.jsx("rect",{x:"0",y:r-.7,width:Ce,height:"0.7",fill:n.edge}),f.jsx("rect",{x:"0",y:i,width:"0.8",height:r-i,fill:n.rim}),f.jsx("rect",{x:Ce-.8,y:i,width:"0.8",height:r-i,fill:n.rim,opacity:"0.8"})]}),f.jsx("rect",{x:Ae.x,y:Ae.y,width:Ae.w,height:Ae.h,fill:`url(#tray-${a})`}),n.trayLine&&f.jsx("rect",{x:Ae.x-.5,y:Ae.y-.5,width:Ae.w+1,height:Ae.h+1,fill:"none",stroke:n.trayLine,strokeWidth:"1"}),n.separator.x.map(v=>f.jsxs("g",{children:[f.jsx("rect",{x:v-.8,y:"16",width:n.separator.w+1.6,height:"44",fill:n.separator.shade}),f.jsx("rect",{x:v,y:"16",width:n.separator.w,height:"44",rx:n.separator.w/2,fill:`url(#sep-${a})`})]},v)),f.jsx("path",{d:Nc.d,fill:n.logo,transform:`translate(${S} ${31.4}) scale(${c}) translate(${-s} ${-o})`}),f.jsx("text",{x:S+u*c+.9,y:"41.2",className:"board-word",fill:n.logo,children:n.word})]})}const or=(e,t)=>`${e/t*100}%`;function kS(){const e=j(o=>o.board),t=j(o=>o.selection),n=j(o=>o.dragging),a=j(o=>o.presets),[i,r]=Z.useState(null),l=Z.useMemo(()=>{const o=n?a.find(u=>u.id===n):null;return o?_e(o.xml):null},[n,a]);if(!e)return null;const s=(o,u)=>{o.preventDefault(),r(null);const d=o.dataTransfer.getData("application/x-joue-preset")||n;D.setDragging(null),d&&D.dropPreset(d,u.slot)};return f.jsxs("div",{className:"device",children:[f.jsxs("p",{className:"device-name",children:[e.name,e.build!==null&&f.jsx("span",{className:"device-meta",children:D.t("firmware",{n:e.build})})]}),f.jsxs("div",{className:`board${e.play?" play":""}`,children:[f.jsx(RS,{play:e.play,className:"board-art"}),e.slots.map(o=>{const u=sn(o),d=o.module.slotNbr,m=t?.kind==="slot"&&t.slot===o.slot,c=l?zo(o,l)&&!e.play:!1,S=o.module instanceof jt,y=Ae.x+u*Oc+lr,v=d*Oc-2*lr;return f.jsxs("button",{type:"button",className:`slot-module${m?" selected":""}${l?c?" can-drop":" no-drop":""}${i===o.slot?" drop-over":""}`,style:{left:or(y,Ce),width:or(v,Ce),top:or(Ae.y+lr,Xo),height:or(Ae.h-2*lr,Xo),"--span":d},onClick:()=>void D.selectSlot(o.slot),"aria-pressed":m,"aria-label":`${S?D.t("unknownModule"):o.module.title}, ${D.t("slot",{n:u+1})}`,title:S?D.t("unknownModule"):o.module.title,onDragOver:x=>{c&&(x.preventDefault(),x.dataTransfer.dropEffect="copy",r(o.slot))},onDragLeave:()=>r(x=>x===o.slot?null:x),onDrop:x=>c&&s(x,o),children:[S?f.jsx("span",{className:"unknown-art",children:"?"}):f.jsx(fl,{module:o.module,colorId:o.color,className:"slot-art"}),(o.status==="reading"||o.status==="writing")&&f.jsxs("span",{className:"slot-status",children:[f.jsx(Oi,{className:"spin",size:14,"aria-hidden":"true"}),f.jsx("span",{className:"sr-only",children:o.status==="reading"?D.t("reading"):D.t("writing")})]}),o.dirty&&o.status==="idle"&&f.jsx("span",{className:"slot-dirty",title:D.t("changed"),"aria-label":D.t("changed")}),o.status==="error"&&f.jsx("span",{className:"slot-error",children:"!"})]},o.slot)})]})]})}function LS(){const e=j(t=>t.board);return e?f.jsxs("div",{className:"axis",role:"radiogroup","aria-labelledby":"axis-label",title:D.t("axisHint"),children:[f.jsx("span",{className:"axis-label",id:"axis-label",children:D.t("axisShort")}),["all","x","y","z"].map(t=>f.jsxs("label",{children:[f.jsx("span",{children:t==="all"?D.t("axisAll"):t.toUpperCase()}),f.jsx("input",{type:"radio",name:"axis",value:t,checked:e.axis===t,onChange:()=>void D.setAxis(t)})]},t))]}):null}function IS(){const e=j(r=>r.connection),t=j(r=>r.connectionError),a={unsupported:"midiUnsupported",denied:"midiDenied",insecure:"midiInsecure",blocked:"midiBlocked",failed:"midiFailed",notfound:"notFound",bootloader:"bootloader"}[e],i=a?D.t(a):null;return f.jsxs("div",{className:"connect",children:[f.jsx("p",{className:"connect-title",children:D.t("noBoardTitle")}),f.jsx("p",{className:"connect-body",children:D.t("noBoardBody")}),i&&f.jsxs("div",{className:"connect-problem",children:[f.jsx("p",{children:i}),t&&(e==="denied"||e==="failed"||e==="notfound")&&f.jsx("p",{className:"connect-detail",children:t})]}),f.jsx("div",{className:"connect-actions",children:f.jsxs("button",{type:"button",className:"btn primary",disabled:e==="searching",onClick:()=>void D.connect(),children:[e==="searching"?f.jsx(Oi,{size:15,className:"spin","aria-hidden":"true"}):f.jsx(ym,{size:15,"aria-hidden":"true"}),e==="searching"?D.t("connecting"):D.t("connect")]})})]})}function BS(){const e=j(t=>t.board);return f.jsxs("section",{className:"panel devices","aria-labelledby":"devices-title",children:[f.jsx("h2",{className:"panel-title",id:"devices-title",children:D.t("devicesTitle")}),f.jsx("div",{className:"device-list",children:e?f.jsxs(f.Fragment,{children:[f.jsx(kS,{}),f.jsx(LS,{})]}):f.jsx(IS,{})})]})}function Te(e,t,n="midiElementData"){const a=e.touchAreaMM;t.set(`${n}.id`,e.elementId),t.set(`${n}.x`,$o(a.x)),t.set(`${n}.y`,$o(a.y)),t.set(`${n}.width`,e.getPreferedWidth(a.x,a.width)),t.set(`${n}.height`,e.getPreferedWidth(a.y,a.height)),t.set(`${n}.z`,e.z),t.set(`${n}.depth`,e.settings.getMaxValueOfSetting("Dynamic")),t.set(`${n}.layerNbr`,e.layerNbr)}function Ra(e,t=e.length){const n=[];let a=0;if(t===0||e.length===0)return n;do{let i=0;const r=a<t&&e[a]===";"?a+1:a;for(;a<t&&e[a]!==".";a++);const l=e.substring(r,Math.min(a,t));for(a++;a<t;a++){const o=e.charCodeAt(a);if(o<48||o>57)break;i=i*10+(o-48)}const s=a;for(n.push({parameter:i,target:l,readValue:()=>{let o=0,u=s+1;for(;u<t;u++){const d=e.charCodeAt(u);if(d<48||d>57)break;o=o*10+(d-48)}return o}});a<t&&e[a]!==";";)a++}while(a<t);return n}const Ye={Disabled:1,ControlChange:2,RelativeAxis:16},kc=["X","Y","Z"];class Xl{enable=new T;channel=new T;control=new T;range=new te;direction=new Q;mode=new Q;startValue=new T;demultiplier=new T;enableCC14Bits=new T;ccFine=new T}class wa{type=new Q;x=new Xl;y=new Xl;z=new Xl;constructor(){this.type.value="AREA"}axis(t){return t==="X"?this.x:t==="Y"?this.y:this.z}}const TS={X:"Horizontal (X)",Y:"Vertical (Y)",Z:"Pressure (Z)"};function YS(e){const t=[];for(const n of["X","Y"]){const a=e.options.axis(n),i=e.settings;i.getIntValueOfSetting(`Enable${n}`)!==0&&(i.getValueOfSetting(`Mode${n}`)==="Relative"||e.options.type.value==="BUBBLE")&&a.startValue.enable&&!i.checkOrigin(`StartValue${n}`,`Range${n}`)&&t.push(n)}return t}class Fn extends ot{options;get className(){return"ElementArea"}constructor(t){super(),this.revision=2,this.options=t;const n=this.settings,a=["Natural","Inverted"],i=["Absolute","Relative"],r=["1","2","3","4","5"],l=["x1","x2","x3","x4","x5"],s=M.slider("Dynamic","Dynamic",127,this.depth);n.addSetting(s),s.hidden=!0;for(const o of kc){const u=t.axis(o),d=M.checkbox(`Enable${o}`,TS[o],u.enable.value);d.hidden=!u.enable.enable,n.addSetting(d);const m=p=>{u.enable.enable?d.addSetting(p,"1"):n.addSetting(p)},c=M.combobox(`Channel${o}`,"Channel",mt,mt,String(u.channel.value));c.hidden=!u.channel.enable,m(c);const S=M.combobox(`Control${o}`,"CC number",rt,rt,String(u.control.value));S.hidden=!u.control.enable,m(S);const y=M.range(`Range${o}`,"Range",u.range.limitMin,u.range.limitMax,u.range.valueMin,u.range.valueMax);y.hidden=!u.range.enable,m(y);const v=M.combobox(`Direction${o}`,"Direction",a,a,u.direction.value);v.hidden=!u.direction.enable,m(v);const x=M.combobox(`Mode${o}`,"Mode",i,i,u.mode.value);x.hidden=!u.mode.enable,m(x);const g=M.combobox(`StartValue${o}`,"Start value",rt,rt,String(u.startValue.value));g.hidden=!u.startValue.enable,u.mode.enable?x.addSetting(g,"Relative"):m(g);const h=M.combobox(`Demultiplier${o}`,"Demultiplier",l,r,String(u.demultiplier.value));h.hidden=!u.demultiplier.enable,u.mode.enable?x.addSetting(h,"Relative"):m(h);const C=M.checkbox(`CC14Bits${o}`,"14 Bits",u.enableCC14Bits.value);if(C.hidden=!u.enableCC14Bits.enable,m(C),u.ccFine.enable){const p=M.combobox(`CCFine${o}`,"CC Fine",rt,rt,String(u.ccFine.value));p.hidden=!u.ccFine.enable,u.enableCC14Bits.enable?C.addSetting(p,"1"):o==="Z"?n.addSetting(p):m(p)}}}checkOriginInRange(){for(const t of["X","Y"])if(this.options.axis(t).startValue.enable&&(this.settings.getValueOfSetting(`Mode${t}`)==="Relative"||this.options.type.value==="BUBBLE")){const a=!this.settings.checkOrigin(`StartValue${t}`,`Range${t}`);for(const i of[`Enable${t}`,`StartValue${t}`,`Range${t}`]){const r=this.settings.getSettingWithName(i);r&&(r.invalid=a)}}}settingDidChange(t){super.settingDidChange(t),this.checkOriginInRange(),this.settings.update()}settingsDidLoad(){this.checkOriginInRange(),this.settings.update()}getMidiObjectList(){const t=this.settings,n=this.options.type.value==="BUBBLE",a=new _("AreaDataV2");a.set("midiElementData.midiHeader.type",P.Area),a.set("midiElementData.midiHeader.version",2);let i=H.LockCursor|H.CaptureCursor|this.midiOptions;n&&(i|=H.Relative),a.set("midiElementData.options",i),Te(this,a);for(const r of["X","Y"]){const l="areaData.";if(t.getIntValueOfSetting(`Enable${r}`)===0){a.set(`${l}areaOptions${r}`,Ye.Disabled);continue}let s=Ye.ControlChange;a.set(`${l}control${r}`,t.getIntValueOfSetting(`Control${r}`)),a.set(`${l}channel${r}`,t.getIntValueOfSetting(`Channel${r}`));const o=t.getIntValueOfSetting(`CC14Bits${r}`)===1;if(t.getValueOfSetting(`Direction${r}`)==="Natural"?(a.set(`${l}min${r}`,t.getMinValueOfSetting(`Range${r}`)),a.set(`${l}max${r}`,t.getMaxValueOfSetting(`Range${r}`)),o&&(a.set(`${l}controlFine${r}`,t.getIntValueOfSetting(`CCFine${r}`)),a.set(`${l}min${r}`,(a.get(`${l}min${r}`)<<7)+0),a.set(`${l}max${r}`,(a.get(`${l}max${r}`)<<7)+127))):(a.set(`${l}min${r}`,t.getMaxValueOfSetting(`Range${r}`)),a.set(`${l}max${r}`,t.getMinValueOfSetting(`Range${r}`)),o&&(a.set(`${l}controlFine${r}`,t.getIntValueOfSetting(`CCFine${r}`)),a.set(`${l}min${r}`,(a.get(`${l}min${r}`)<<7)+127),a.set(`${l}max${r}`,(a.get(`${l}max${r}`)<<7)+0))),t.getValueOfSetting(`Mode${r}`)==="Relative"||n){if(s|=Ye.RelativeAxis,a.set(`${l}demultiplier${r}`,t.getIntValueOfSetting(`Demultiplier${r}`)),this.options.axis(r).startValue.enable&&!t.checkOrigin(`StartValue${r}`,`Range${r}`))return null;a.set(`${l}origin${r}`,t.getIntValueOfSetting(`StartValue${r}`))}a.set(`${l}areaOptions${r}`,s)}return t.getIntValueOfSetting("EnableZ")===0?a.set("areaData.areaOptionsZ",Ye.Disabled):(a.set("areaData.areaOptionsZ",Ye.ControlChange),a.set("areaData.controlZ",t.getIntValueOfSetting("ControlZ")),a.set("areaData.channelZ",t.getIntValueOfSetting("ChannelZ")),t.getValueOfSetting("DirectionZ")==="Natural"?(a.set("areaData.minZ",t.getMinValueOfSetting("RangeZ")),a.set("areaData.maxZ",t.getMaxValueOfSetting("RangeZ"))):(a.set("areaData.minZ",t.getMaxValueOfSetting("RangeZ")),a.set("areaData.maxZ",t.getMinValueOfSetting("RangeZ")))),[a.bytes]}loadMidiData(t,n){const a=_.at("MidiElementData",t,n);if(a.get("midiHeader.type")!==P.Area)return 0;const i=this.settings,r=a.get("midiHeader.version");if(r===1){const l=_.at("AreaDataV1",t,n);i.setMaxValueOfSetting("Dynamic",l.get("midiElementData.depth"));for(const s of kc){const o="areaData.";if(l.get(`${o}areaOptions${s}`)&Ye.Disabled){i.setIntValueOfSetting(`Enable${s}`,0);continue}i.setIntValueOfSetting(`Enable${s}`,1),i.setIntValueOfSetting(`Control${s}`,l.get(`${o}control${s}`)),i.setIntValueOfSetting(`Channel${s}`,l.get(`${o}channel${s}`)),i.setValueOfSetting(`Direction${s}`,"Natural"),s!=="Z"&&i.setIntValueOfSetting(`CC14Bits${s}`,0),i.setMinValueOfSetting(`Range${s}`,l.get(`${o}min${s}`)),i.setMaxValueOfSetting(`Range${s}`,l.get(`${o}max${s}`)),s!=="Z"&&i.setValueOfSetting(`Mode${s}`,"Absolute"),i.setIntValueOfSetting(`StartValue${s}`,Math.trunc((l.get(`${o}min${s}`)+l.get(`${o}max${s}`))/2))}return ct("AreaDataV1")}if(r===2){const l=_.at("AreaDataV2",t,n);i.setMaxValueOfSetting("Dynamic",l.get("midiElementData.depth"));const s="areaData.";for(const o of["X","Y"]){if(l.get(`${s}areaOptions${o}`)&Ye.Disabled){i.setIntValueOfSetting(`Enable${o}`,0);continue}i.setIntValueOfSetting(`Enable${o}`,1),i.setIntValueOfSetting(`Control${o}`,l.get(`${s}control${o}`)),i.setIntValueOfSetting(`Channel${o}`,l.get(`${s}channel${o}`));const u=l.get(`${s}min${o}`),d=l.get(`${s}max${o}`);u<=d?(i.setValueOfSetting(`Direction${o}`,"Natural"),d>127?(i.setIntValueOfSetting(`CC14Bits${o}`,1),i.setIntValueOfSetting(`CCFine${o}`,l.get(`${s}controlFine${o}`)),i.setMinValueOfSetting(`Range${o}`,u>>7),i.setMaxValueOfSetting(`Range${o}`,d>>7)):(i.setIntValueOfSetting(`CC14Bits${o}`,0),i.setMinValueOfSetting(`Range${o}`,u),i.setMaxValueOfSetting(`Range${o}`,d))):(i.setValueOfSetting(`Direction${o}`,"Inverted"),u>127?(i.setIntValueOfSetting(`CC14Bits${o}`,1),i.setIntValueOfSetting(`CCFine${o}`,l.get(`${s}controlFine${o}`)),i.setMinValueOfSetting(`Range${o}`,d>>7),i.setMaxValueOfSetting(`Range${o}`,u>>7)):(i.setIntValueOfSetting(`CC14Bits${o}`,0),i.setMinValueOfSetting(`Range${o}`,d),i.setMaxValueOfSetting(`Range${o}`,u))),i.setIntValueOfSetting(`StartValue${o}`,l.get(`${s}origin${o}`)),l.get(`${s}areaOptions${o}`)&Ye.RelativeAxis?(i.setValueOfSetting(`Mode${o}`,"Relative"),i.setIntValueOfSetting(`Demultiplier${o}`,l.get(`${s}demultiplier${o}`))):i.setValueOfSetting(`Mode${o}`,"Absolute")}if(l.get(`${s}areaOptionsZ`)&Ye.Disabled)i.setIntValueOfSetting("EnableZ",0);else{i.setIntValueOfSetting("EnableZ",1),i.setIntValueOfSetting("ControlZ",l.get(`${s}controlZ`)),i.setIntValueOfSetting("ChannelZ",l.get(`${s}channelZ`));const o=l.get(`${s}minZ`),u=l.get(`${s}maxZ`);o<=u?(i.setValueOfSetting("DirectionZ","Natural"),i.setMinValueOfSetting("RangeZ",o),i.setMaxValueOfSetting("RangeZ",u)):(i.setValueOfSetting("DirectionZ","Inverted"),i.setMinValueOfSetting("RangeZ",u),i.setMaxValueOfSetting("RangeZ",o)),i.setIntValueOfSetting("StartValueZ",l.get(`${s}originZ`))}return ct("AreaDataV2")}return 0}loadSettingFromXmlDescription(t,n){switch(n){case 0:case 1:{const a=(i,r)=>{t.name?.toLowerCase()===i.toLowerCase()&&(t.name=r)};a("X","EnableX"),a("OriginX","StartValueX"),a("Y","EnableY"),a("OriginY","StartValueY"),a("Z","EnableZ");break}case 2:break;default:return!1}return super.loadSettingFromXmlDescription(t,n)}}class Ks{channel=new T;noteEnable=new T;note=new T;noteVelocity=new te;yControlEnable=new T;yControl=new T;yControlRange=new te;yControlDirection=new Q;yControlMode=new Q;yControlOrigin=new T;yControlCC14Bits=new T;yControlFine=new T}class Di extends ot{options;get className(){return"ElementKey"}constructor(t){super(),this.revision=2,this.options=t;const n=this.settings,a=M.slider("Dynamic","Dynamic",127,this.depth);n.addSetting(a),a.hidden=!0;const i=M.combobox("Channel","Channel",mt,mt,String(t.channel.value));i.hidden=!t.channel.enable,n.addSetting(i);const r=M.checkbox("NoteEnable","Note",t.noteEnable.value);r.hidden=!t.noteEnable.enable,n.addSetting(r);const l=M.combobox("Note","Note",Hs,rt,String(t.note.value));l.hidden=!t.note.enable,t.noteEnable.enable?r.addSetting(l,"1"):n.addSetting(l);const s=M.range("NoteVelocity","Velocity",t.noteVelocity.limitMin,t.noteVelocity.limitMax,t.noteVelocity.valueMin,t.noteVelocity.valueMax);s.hidden=!t.noteVelocity.enable,t.noteEnable.enable?r.addSetting(s,"1"):n.addSetting(s);const o=M.checkbox("YControlEnable","Y Control",t.yControlEnable.value);o.hidden=!t.yControlEnable.enable,n.addSetting(o);const u=x=>{t.yControlEnable.enable?o.addSetting(x,"1"):n.addSetting(x)},d=M.combobox("YControl","CC number",rt,rt,String(t.yControl.value));d.hidden=!t.yControl.enable,u(d);const m=M.range("YControlRange","Range",t.yControlRange.limitMin,t.yControlRange.limitMax,t.yControlRange.valueMin,t.yControlRange.valueMax);m.hidden=!t.yControlRange.enable,u(m);const c=M.combobox("YControlDirection","Direction",["Natural","Inverted"],["Natural","Inverted"],t.yControlDirection.value);c.hidden=!t.yControlDirection.enable,u(c);const S=M.combobox("YControlMode","Mode",["Absolute","Relative"],["Absolute","Relative"],t.yControlMode.value);S.hidden=!t.yControlMode.enable,u(S);const y=M.combobox("YControlOrigin","Start value",rt,rt,String(t.yControlOrigin.value));y.hidden=!t.yControlOrigin.enable,t.yControlMode.enable?S.addSetting(y,"Relative"):u(y);const v=M.checkbox("YControlCC14Bits","14 Bits",t.yControlCC14Bits.value);if(v.hidden=!t.yControlCC14Bits.enable,u(v),t.yControlCC14Bits.enable){const x=M.combobox("YControlFine","CC Fine",rt,rt,String(t.yControlFine.value));x.hidden=!t.yControlFine.enable,t.yControlEnable.enable?v.addSetting(x,"1"):n.addSetting(x)}}settingDidChange(t){if(super.settingDidChange(t),this.options.yControlOrigin.enable){const n=this.settings.getSettingWithName("YControlOrigin"),a=this.settings.getSettingWithName("YControlRange"),i=this.settings.getSettingWithName("YControlEnable"),r=l=>{i&&(i.invalid=l),n&&(n.invalid=l),a&&(a.invalid=l)};if(this.settings.getValueOfSetting("YControlMode")==="Relative"){const l=this.settings.getMinValueOfSetting("YControlRange"),s=this.settings.getMaxValueOfSetting("YControlRange"),o=this.settings.getIntValueOfSetting("YControlOrigin");o!==-1&&l!==-1e4&&s!==1e4&&r(o<l||o>s)}else r(!1)}this.settings.update()}get originOutOfRange(){const t=this.settings;return t.getIntValueOfSetting("YControlEnable")===1&&t.getValueOfSetting("YControlMode")==="Relative"&&this.options.yControlOrigin.enable&&!t.checkOrigin("YControlOrigin","YControlRange")}getMidiObjectList(){const t=this.settings,n=new _("KeyDataV2");n.set("midiElementData.midiHeader.type",P.Key),n.set("midiElementData.midiHeader.version",2),Te(this,n);let a=H.LockCursor|this.midiOptions;if(t.getIntValueOfSetting("YControlEnable")===1){if(a|=H.AxisY,t.getValueOfSetting("YControlMode")==="Relative"){if(a|=H.Relative,this.options.yControlOrigin.enable&&!t.checkOrigin("YControlOrigin","YControlRange"))return null;n.set("keyData.yControlOrigin",t.getIntValueOfSetting("YControlOrigin"))}n.set("keyData.yControl",t.getIntValueOfSetting("YControl"));const i=t.getIntValueOfSetting("YControlCC14Bits")===1;t.getValueOfSetting("YControlDirection")==="Natural"?(n.set("keyData.yControlMin",t.getMinValueOfSetting("YControlRange")),n.set("keyData.yControlMax",t.getMaxValueOfSetting("YControlRange")),i&&(n.set("keyData.yControlFine",t.getIntValueOfSetting("YControlFine")),n.set("keyData.yControlMin",(n.get("keyData.yControlMin")<<7)+0),n.set("keyData.yControlMax",(n.get("keyData.yControlMax")<<7)+127))):(n.set("keyData.yControlMin",t.getMaxValueOfSetting("YControlRange")),n.set("keyData.yControlMax",t.getMinValueOfSetting("YControlRange")),i&&(n.set("keyData.yControlFine",t.getIntValueOfSetting("YControlFine")),n.set("keyData.yControlMin",(n.get("keyData.yControlMin")<<7)+127),n.set("keyData.yControlMax",(n.get("keyData.yControlMax")<<7)+0)))}else n.set("keyData.yControl",0);return n.set("midiElementData.options",a),n.set("keyData.padData.note",t.getIntValueOfSetting("Note")),n.set("keyData.padData.channel",t.getIntValueOfSetting("Channel")),n.set("keyData.padData.velocityMin",t.getMinValueOfSetting("NoteVelocity")),n.set("keyData.padData.velocityMax",t.getMaxValueOfSetting("NoteVelocity")),[n.bytes]}loadMidiData(t,n){const a=_.at("MidiElementData",t,n);if(a.get("id")===255||a.get("midiHeader.type")!==P.Key)return 0;const i=this.settings,r=a.get("midiHeader.version");if(r===1){const l=_.at("KeyDataV1",t,n),s=l.get("midiElementData.options");return i.setMaxValueOfSetting("Dynamic",l.get("midiElementData.depth")),i.setIntValueOfSetting("Note",l.get("keyData.padData.note")),i.setIntValueOfSetting("Channel",l.get("keyData.padData.channel")),i.setMinValueOfSetting("NoteVelocity",l.get("keyData.padData.velocityMin")),i.setMaxValueOfSetting("NoteVelocity",l.get("keyData.padData.velocityMax")),i.setIntValueOfSetting("YControlEnable",s&H.AxisY?1:0),i.setValueOfSetting("YControlMode",s&H.Relative?"Relative":"Absolute"),i.setIntValueOfSetting("YControl",l.get("keyData.yControl")),i.setMinValueOfSetting("YControlRange",l.get("keyData.yControlMin")),i.setMaxValueOfSetting("YControlRange",l.get("keyData.yControlMax")),i.setIntValueOfSetting("YControlOrigin",l.get("keyData.yControlOrigin")),i.setValueOfSetting("YControlDirection","Natural"),i.setIntValueOfSetting("YControlCC14Bits",0),ct("KeyDataV1")}if(r===2){const l=_.at("KeyDataV2",t,n),s=l.get("midiElementData.options"),o=l.get("keyData.yControlMin"),u=l.get("keyData.yControlMax");let d,m,c,S;const y=v=>v<<16>>16;return u>=o?(d="Natural",u>127?(m=1,c=y(o>>7),S=y(u>>7)):(m=0,c=o,S=u)):(d="Inverted",o>127?(m=1,c=y(u>>7),S=y(o>>7)):(m=0,c=u,S=o)),i.setMaxValueOfSetting("Dynamic",l.get("midiElementData.depth")),i.setIntValueOfSetting("Note",l.get("keyData.padData.note")),i.setIntValueOfSetting("Channel",l.get("keyData.padData.channel")),i.setMinValueOfSetting("NoteVelocity",l.get("keyData.padData.velocityMin")),i.setMaxValueOfSetting("NoteVelocity",l.get("keyData.padData.velocityMax")),i.setIntValueOfSetting("YControlEnable",s&H.AxisY?1:0),i.setValueOfSetting("YControlMode",s&H.Relative?"Relative":"Absolute"),i.setIntValueOfSetting("YControl",l.get("keyData.yControl")),i.setMinValueOfSetting("YControlRange",c),i.setMaxValueOfSetting("YControlRange",S),i.setIntValueOfSetting("YControlOrigin",l.get("keyData.yControlOrigin")),i.setValueOfSetting("YControlDirection",d),i.setIntValueOfSetting("YControlCC14Bits",m),i.setIntValueOfSetting("YControlFine",l.get("keyData.yControlFine")),ct("KeyDataV2")}return 0}loadSettingFromXmlDescription(t,n){switch(n){case 0:case 1:{const a={velocity:"NoteVelocity",ycontrol:"YControlEnable",ycontrolcc:"YControl",ycontrolccrange:"YControlRange",ycontroldirection:"YControlDirection",ycontrolmode:"YControlMode",ycontrolorigin:"YControlOrigin",ycontrolcc14bits:"YControlCC14Bits",ycontrolccfine:"YControlFine"},i=t.name?.toLowerCase();i&&a[i]&&(t.name=a[i]);break}case 2:break;default:return!1}return super.loadSettingFromXmlDescription(t,n)}}const FS={en:{PAD:"Pad",KEY:"Key",STRING:"String",STRIP:"Strip",ROUND:"Round",BUTTON:"Button",BUBBLE:"Bubble",AREA:"Area",GLISSANDO:"Glissando","OCTAVE-":"Octave down","OCTAVE+":"Octave up",ALL_PADS:"All pads",ALL_KEYS:"All keys",ALL_STRINGS:"All strings",BUTTON_MIN_:"Min button",BUTTON_MAX_:"Max button",PETAL_1_:"Flower petal",PETAL_2_:"Mixer quarter",BTN_PRESET_:"Preset",BTN_PRESET_RAND:"Random preset",BTN_EFFECT_ONOFF:"Effect on/off",BTN_PLAY:"Play",BTN_REC:"Record"},fr:{PAD:"Pad",KEY:"Touche",STRING:"Corde",STRIP:"Ruban",ROUND:"Rond",BUTTON:"Bouton",BUBBLE:"Bulle",AREA:"Zone",GLISSANDO:"Glissando","OCTAVE-":"Octave −","OCTAVE+":"Octave +",ALL_PADS:"Tous les pads",ALL_KEYS:"Toutes les touches",ALL_STRINGS:"Toutes les cordes",BUTTON_MIN_:"Bouton min",BUTTON_MAX_:"Bouton max",PETAL_1_:"Pétale",PETAL_2_:"Quart du mixeur",BTN_PRESET_:"Preset",BTN_PRESET_RAND:"Preset aléatoire",BTN_EFFECT_ONOFF:"Effet on/off",BTN_PLAY:"Lecture",BTN_REC:"Enregistrement"}};function wr(e,t){const n=FS[e];if(n[t])return n[t];const a=Object.keys(n).sort((i,r)=>r.length-i.length);for(const i of a)if(t.startsWith(i)){const r=t.substring(i.length);if(/^\d+$/.test(r))return`${n[i]} ${r}`}return t.charAt(0)+t.substring(1).toLowerCase().replace(/_/g," ")}function Lc(e){return e.type===ft.Category?e.children.filter(t=>!t.hidden):e.childrenForValue(e.value).filter(t=>!t.hidden)}function $S({id:e,on:t,mixed:n,disabled:a,onToggle:i}){const r=Z.useRef(null);return Z.useEffect(()=>{r.current&&(r.current.indeterminate=n)},[n]),f.jsx("input",{ref:r,type:"checkbox",id:e,className:"check",checked:t&&!n,disabled:a,onChange:i})}const sr=14;function _S(e){const{lo:t,hi:n,min:a,max:i,double:r,disabled:l,mixed:s,label:o,labelledBy:u,onDraft:d,onCommit:m}=e,c=Z.useRef(null),[S,y]=Z.useState(null),v=n-t||1,x=E=>Math.max(0,Math.min(1,(E-t)/v)),g=E=>`calc(${sr/2}px + (100% - ${sr}px) * ${E})`,h=E=>Math.max(t,Math.min(n,Math.round(E))),C=E=>{const B=c.current.getBoundingClientRect();return h(t+(E-B.left-sr/2)/Math.max(1,B.width-sr)*v)},p=(E,B)=>{E==="min"?d(Math.min(h(B),i),i):d(a,Math.max(h(B),r?a:t))},b=E=>{if(!r)return"max";const B=Math.abs(E-a),R=Math.abs(E-i);return B<R||B===R&&E<a?"min":"max"},A=E=>B=>{const R=E==="min"?a:i,$=Math.max(1,Math.round(v/10)),nt={ArrowRight:R+1,ArrowUp:R+1,ArrowLeft:R-1,ArrowDown:R-1,PageUp:R+$,PageDown:R-$,Home:t,End:n};l||!(B.key in nt)||(B.preventDefault(),p(E,nt[B.key]))},N=r?["min","max"]:["max"];return f.jsxs("div",{ref:c,className:`slider${S?" dragging":""}${l?" disabled":""}${s?" mixed":""}`,onPointerDown:E=>{if(l||E.button!==0)return;E.preventDefault();const B=C(E.clientX),R=b(B);c.current.setPointerCapture(E.pointerId),y(R),p(R,B),c.current.querySelector(`[data-thumb="${R}"]`)?.focus({preventScroll:!0})},onPointerMove:E=>S&&p(S,C(E.clientX)),onPointerUp:()=>{S&&(y(null),m())},onPointerCancel:()=>{S&&(y(null),m())},children:[f.jsx("div",{className:"slider-track","aria-hidden":"true",children:f.jsx("div",{className:"slider-fill",style:{left:`${(r?x(a):0)*100}%`,width:`${(x(i)-(r?x(a):0))*100}%`}})}),N.map(E=>f.jsx("div",{"data-thumb":E,role:"slider",tabIndex:l?-1:0,"aria-labelledby":r?void 0:u,"aria-label":r?`${o} ${E==="min"?"minimum":"maximum"}`:void 0,"aria-valuemin":E==="min"?t:r?a:t,"aria-valuemax":E==="min"?i:n,"aria-valuenow":E==="min"?a:i,"aria-valuetext":s?"–":void 0,"aria-disabled":l||void 0,className:`slider-thumb${S===E?" active":""}`,style:{left:g(x(E==="min"?a:i))},onKeyDown:A(E),onKeyUp:()=>m()},E))]})}function zS({setting:e,editable:t,id:n,lang:a}){const i=e.type===ft.DoubleSlider,r=i?e.limitMin:0,l=e.limitMax,s=e.value==="",o=s?r:Math.max(r,Math.min(l,e.minValue===-1e4?r:e.minValue)),u=s?l:Math.max(r,Math.min(l,e.maxValue)),[d,m]=Z.useState(null),c=Z.useRef(null),S=b=>{c.current=b,m(b)},y=d??{min:o,max:u},v=(b,A)=>{S(null),D.change(e,i?`${xe(Math.round(b))};${xe(Math.round(A))}`:`${xe(0)};${xe(Math.round(A))}`)},x=()=>{const b=c.current;b&&v(b.min,b.max)},g=!t||e.disabled||e.readOnly,h=b=>Math.max(r,Math.min(y.max,b)),C=b=>Math.min(l,Math.max(i?y.min:r,b)),p=Mi(a,e.title);return f.jsxs("div",{className:"range",children:[f.jsx(_S,{lo:r,hi:l,min:y.min,max:y.max,double:i,disabled:g,mixed:s&&!d,label:p,labelledBy:`${n}-label`,onDraft:(b,A)=>S({min:b,max:A}),onCommit:x}),f.jsxs("div",{className:"range-values",children:[i&&f.jsx("input",{className:"num",type:"number",id:`${n}-min`,"aria-label":`${p} minimum`,min:r,max:l,value:s&&!d?"":y.min,placeholder:"–",disabled:g,onChange:b=>S({min:Number(b.target.value),max:y.max}),onBlur:()=>d&&v(h(d.min),d.max),onKeyDown:b=>b.key==="Enter"&&d&&v(h(d.min),d.max)}),f.jsx("input",{className:"num",type:"number",id:`${n}-max`,"aria-label":i?`${p} maximum`:p,min:r,max:l,value:s&&!d?"":y.max,placeholder:"–",disabled:g,onChange:b=>S({min:y.min,max:Number(b.target.value)}),onBlur:()=>d&&v(d.min,C(d.max)),onKeyDown:b=>b.key==="Enter"&&d&&v(d.min,C(d.max))})]})]})}function jS({setting:e,editable:t,id:n,lang:a}){const i=!t||e.disabled||e.readOnly,r=e.value??"";switch(e.type){case ft.Checkbox:{const l=r==="1",s=r===""||r==="-1";return f.jsx($S,{id:n,on:l,mixed:s,disabled:i,onToggle:()=>D.change(e,l?"0":"1")})}case ft.ToggleButton:{const l=r==="1";return f.jsx("button",{type:"button",id:n,className:`btn small toggle${l?" on":""}`,"aria-pressed":l,disabled:i,onClick:()=>D.change(e,l?"0":"1"),children:Mi(a,e.title)})}case ft.Combobox:{const l=e.values,s=e.fields,o=l.indexOf(r),u=r!==""&&o>=0&&o<s.length;return f.jsxs("select",{id:n,className:"select",value:u?String(o):"",disabled:i,onChange:d=>{const m=Number(d.target.value);Number.isInteger(m)&&l[m]!==void 0&&D.change(e,l[m])},children:[!u&&f.jsx("option",{value:"",disabled:!0,children:a==="fr"?"Mixte":"Mixed"}),s.map((d,m)=>f.jsx("option",{value:String(m),children:oS(a,d)},m))]})}case ft.Slider:case ft.DoubleSlider:return f.jsx(zS,{setting:e,editable:t,id:n,lang:a});case ft.TextField:return f.jsx("input",{id:n,className:"text",type:"text",defaultValue:r,disabled:i,onBlur:l=>D.change(e,l.target.value),onKeyDown:l=>l.key==="Enter"&&l.target.blur()});case ft.Button:return f.jsx("button",{type:"button",id:n,className:"btn small",disabled:i,onClick:()=>D.change(e,r==="1"?"0":"1"),children:Mi(a,e.title)});default:return null}}function Uo({setting:e,props:t,depth:n}){const{lang:a,editable:i,idPrefix:r,problems:l}=t,s=String(e.dictionary.Name??e.title),o=`${r}-${s}`,[u,d]=Z.useState(!1);if(e.type===ft.Category){const v=Lc(e);return v.length===0?null:f.jsxs("div",{className:"group",children:[f.jsxs("button",{type:"button",className:"group-head","aria-expanded":u,onClick:()=>d(!u),children:[f.jsx("span",{className:"chev","aria-hidden":"true",children:u?"−":"+"}),Mi(a,e.title)]}),u&&f.jsx("div",{className:"group-body",children:v.map((x,g)=>f.jsx(Uo,{setting:x,props:t,depth:n},`${x.dictionary.Name}-${g}`))})]})}const m=Lc(e),c=l?.[s]??(e.invalid?a==="fr"?"Valeur hors limites":"Value out of range":void 0),S=e.type===ft.Slider||e.type===ft.DoubleSlider,y=e.disabled||e.readOnly||!i;return f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:`row${S?" wide":""}${c?" invalid":""}${y?" dim":""}`,style:{paddingInlineStart:n*14},children:[e.type===ft.Button||e.type===ft.ToggleButton?f.jsx("span",{className:"row-label"}):f.jsx("label",{htmlFor:S?`${o}-max`:o,id:`${o}-label`,className:"row-label",children:Mi(a,e.title)}),f.jsx("div",{className:"row-control",children:f.jsx(jS,{setting:e,editable:i,id:o,lang:a})}),c&&f.jsx("p",{className:"row-problem",children:c})]}),m.map((v,x)=>f.jsx(Uo,{setting:v,props:t,depth:n+1},`${v.dictionary.Name}-${x}`))]})}function Rm(e){const t=e.settings.filter(n=>!n.hidden&&!e.skip?.includes(String(n.dictionary.Name)));return f.jsx("div",{className:"settings",children:t.map((n,a)=>f.jsx(Uo,{setting:n,props:e,depth:0},`${n.dictionary.Name}-${a}`))})}function km(e,t,n){const a={};if(!t)return a;if(t instanceof Fn)for(const i of YS(t))a[`StartValue${i}`]=n("invalidStart");return t instanceof Di&&t.originOutOfRange&&(a.YControlOrigin=n("invalidOrigin")),t.name==="ALL_STRINGS"&&(t.settings.getValueOfSetting("Note")===""||t.settings.getValueOfSetting("Tunning")==="")&&(a.Tunning=n("needTuning")),t.name==="ALL_KEYS"&&t.settings.getSettingWithName("Scale")&&(t.settings.getValueOfSetting("Note")===""||t.settings.getValueOfSetting("Scale")==="")&&(a.Scale=n("needScale")),a}function HS(e){return e.elementList.filter(t=>Object.keys(km(e,t,D.t.bind(D))).length>0).map(t=>t.name)}function XS(e,t){return Z.useMemo(()=>!!e&&!(e instanceof jt)&&e.getMidiDescription()!==null,[e,t])}function US(){const e=j(n=>n.undoDepth),t=j(n=>n.redoDepth);return f.jsxs("span",{className:"history",children:[f.jsx("button",{type:"button",className:"icon",title:D.t("undo"),"aria-label":D.t("undo"),disabled:e===0,onClick:()=>D.undo(),children:f.jsx(kp,{size:16})}),f.jsx("button",{type:"button",className:"icon",title:D.t("redo"),"aria-label":D.t("redo"),disabled:t===0,onClick:()=>D.redo(),children:f.jsx(Vp,{size:16})})]})}function WS({working:e,encodable:t}){const n=j(o=>o.selection),a=j(o=>o.board);j(o=>o.presets);const i=D.selectedPreset(),r=n?.kind==="slot"?a?.slots.find(o=>o.slot===n.slot):void 0,l=r?.status==="writing"||r?.status==="reading",s=!r&&a&&!a.play?D.compatibleSlots(e):[];return f.jsxs("div",{className:"edition-bar",children:[f.jsx(US,{}),f.jsx("span",{className:"bar-gap"}),i?.factory&&f.jsxs("button",{type:"button",className:"btn small",onClick:()=>D.duplicatePreset(i.id),children:[f.jsx(Cm,{size:14,"aria-hidden":"true"}),D.t("duplicate")]}),i&&!i.factory&&f.jsxs("button",{type:"button",className:`btn small${e.readOnly?" on":""}`,"aria-pressed":e.readOnly,onClick:()=>D.setPresetLocked(i.id,!e.readOnly),children:[e.readOnly?f.jsx(Np,{size:14,"aria-hidden":"true"}):f.jsx(zs,{size:14,"aria-hidden":"true"}),e.readOnly?D.t("unlock"):D.t("lock")]}),r&&f.jsxs("button",{type:"button",className:"btn small",onClick:()=>D.saveAsPreset(e),children:[f.jsx(Op,{size:14,"aria-hidden":"true"}),D.t("saveAsPreset")]}),r&&D.canEdit()&&f.jsxs("button",{type:"button",className:"btn small send",disabled:!r.dirty||!t||l,onClick:()=>void D.send(r.slot,e),children:[r.status==="writing"?f.jsx(Oi,{size:14,className:"spin","aria-hidden":"true"}):f.jsx(dc,{size:14,"aria-hidden":"true"}),r.status==="writing"?D.t("writing"):D.t("sendToModule")]}),s.map(o=>f.jsxs("button",{type:"button",className:"btn small send",disabled:!t||o.status!=="idle",onClick:()=>void D.send(o.slot,e),children:[f.jsx(dc,{size:14,"aria-hidden":"true"}),s.length===1?D.t("sendToBoard"):D.t("sendTo",{name:D.t("slot",{n:sn(o)+1})})]},o.slot))]})}function ZS(){const e=j(d=>d.working),t=j(d=>d.revision),n=j(d=>d.element),a=j(d=>d.selection),i=j(d=>d.board),r=j(d=>d.lang);j(d=>d.presets);const l=XS(e,t),s=a?.kind==="slot"?i?.slots.find(d=>d.slot===a.slot):void 0,o=D.selectedPreset();let u;if(a?.kind==="slot"&&!e)u=f.jsx("p",{className:"canvas-empty",children:s?.status==="error"?D.t("readFailed"):f.jsxs(f.Fragment,{children:[f.jsx(Oi,{size:16,className:"spin","aria-hidden":"true"})," ",D.t("reading")]})});else if(!e)u=f.jsx("p",{className:"canvas-empty",children:D.t("selectSomething")});else if(e instanceof jt)u=f.jsxs("div",{className:"canvas-empty",children:[f.jsx("p",{className:"info-name",children:D.t("unknownModule")}),f.jsx("p",{children:D.t("unknownBody",{type:e.type,version:e.version})})]});else{const d=o?o.name:e.libraryName||e.title,m=[];s&&m.push(D.t("slot",{n:sn(s)+1})),d!==e.title&&m.push(e.title),o?.factory&&m.push(D.t("factoryShort"));const c=o?.factory||e.readOnly,S=(e.sizeMM.width+2)/(e.sizeMM.height+2);u=f.jsxs("div",{className:"module-frame",style:{"--slots":e.slotNbr,"--aspect":S},children:[f.jsxs("div",{className:"module-info",children:[f.jsx("p",{className:"info-name",children:d}),f.jsxs("p",{className:"info-sub",children:[m.join(" · "),c&&f.jsx("span",{className:"info-locked",children:D.t("locked")}),s?.dirty&&s.status==="idle"&&f.jsx("span",{className:"info-dirty",children:D.t("changed")})]})]}),f.jsx(fl,{module:e,revision:t,colorId:s?s.color:e.color,selected:n,interactive:!0,onSelect:y=>D.selectElement(y),nameOf:y=>wr(r,y.name),className:"edit-art"}),i?.play&&s&&f.jsx("p",{className:"canvas-note",children:D.t("playLimit")}),!l&&f.jsx("p",{className:"canvas-note warn",children:D.t("cannotEncode")})]})}return f.jsxs("section",{className:"panel edition","aria-labelledby":"edition-title",children:[f.jsx("h2",{className:"panel-title",id:"edition-title",children:D.t("editionTitle")}),f.jsx("div",{className:"canvas",children:u}),e&&!(e instanceof jt)&&f.jsx(WS,{working:e,encodable:l})]})}function GS(){const e=j(u=>u.working);j(u=>u.revision);const t=j(u=>u.selection),n=j(u=>u.board),a=j(u=>u.lang);j(u=>u.presets);const i=t?.kind==="slot"?n?.slots.find(u=>u.slot===t.slot):void 0,r=e&&!(e instanceof jt),l=!!r&&D.canEdit()&&!e.readOnly,s=r?e.settings.getSettingWithName("Color"):void 0,o=s?s.values.map((u,d)=>({id:Number(u),label:s.fields[d]??u})):[];return f.jsxs("section",{className:"panel pad","aria-labelledby":"pad-title",children:[f.jsx("h2",{className:"panel-title",id:"pad-title",children:D.t("padTitle")}),f.jsx("div",{className:"panel-scroll",children:r?f.jsxs(f.Fragment,{children:[i?f.jsxs("div",{className:"row",children:[f.jsx("span",{className:"row-label",children:D.t("color")}),f.jsxs("span",{className:"row-control color-name",children:[f.jsx("span",{className:"color on",style:{background:Nr(i.color).hex},"aria-hidden":"true"}),o.find(u=>u.id===i.color)?.label??Nr(i.color).name]})]}):o.length>0&&f.jsxs("div",{className:"row",children:[f.jsx("span",{className:"row-label",id:"color-label",children:D.t("color")}),f.jsx("div",{className:"row-control swatches",role:"radiogroup","aria-labelledby":"color-label",children:o.map(u=>{const d=e.color===u.id;return f.jsx("button",{type:"button",role:"radio","aria-checked":d,"aria-label":u.label,title:u.label,className:`color${d?" on":""}`,style:{background:Nr(u.id).hex},disabled:!l,onClick:()=>s&&D.change(s,String(u.id))},u.id)})})]}),f.jsx(Rm,{settings:e.settings.settingsList,lang:a,editable:l,skip:["Color","ReadOnly"],idPrefix:"module"})]}):f.jsx("p",{className:"panel-empty",children:e?"":D.t("selectSomething")})})]})}function KS(){const e=j(o=>o.working);j(o=>o.revision);const t=j(o=>o.element),n=j(o=>o.lang);j(o=>o.presets);const a=e&&!(e instanceof jt),i=!!a&&D.canEdit()&&!e.readOnly,r=a&&t?e.elementList.find(o=>o.name===t):void 0,l=a?km(e,r,D.t.bind(D)):{},s=a?HS(e):[];return f.jsxs("section",{className:"panel mapping","aria-labelledby":"mapping-title",children:[f.jsx("h2",{className:"panel-title",id:"mapping-title",children:D.t("mappingTitle")}),f.jsxs("div",{className:"panel-scroll",children:[a&&r&&f.jsx("p",{className:"element-title",children:wr(n,r.name)}),a&&s.length>0&&!(r&&s.includes(r.name))&&f.jsxs("div",{className:"notice warn",children:[f.jsx("p",{children:n==="fr"?`Un réglage de ${wr(n,s[0])} est refusé par le board.`:`${wr(n,s[0])} has a setting the board would refuse.`}),f.jsx("button",{type:"button",className:"btn tiny",onClick:()=>D.selectElement(s[0]),children:n==="fr"?"Afficher":"Show"})]}),a&&r?f.jsx(Rm,{settings:r.settings.settingsList,lang:n,editable:i,idPrefix:`el-${r.name}`,problems:l}):a?f.jsx("p",{className:"panel-empty",children:D.t("pickElement")}):null]})]})}const Ha=new Map;function Lm(e){const t=e.xml;return Ha.has(t)||(Ha.size>400&&Ha.clear(),Ha.set(t,_e(e.xml))),Ha.get(t)??null}function QS({preset:e}){const t=Lm(e);return!t||t instanceof jt?f.jsx("span",{className:"thumb unknown","aria-hidden":"true"}):f.jsx("span",{className:"thumb",style:{"--span":t.slotNbr},"aria-hidden":"true",children:f.jsx(fl,{module:t,className:"thumb-art"})})}function Ic({preset:e,selected:t,compatible:n}){const a=j(s=>s.lang),[i,r]=Z.useState(!1),l=e.factory||!!Lm(e)?.readOnly;return f.jsx("li",{className:`preset${t?" selected":""}`,children:i?f.jsx("form",{className:"rename",onSubmit:s=>{s.preventDefault();const o=s.currentTarget.elements.namedItem("name").value;D.renamePreset(e.id,o),r(!1)},children:f.jsx("input",{name:"name",id:`rename-${e.id}`,className:"text",defaultValue:e.name,"aria-label":D.t("presetName"),autoFocus:!0,onBlur:s=>{D.renamePreset(e.id,s.target.value),r(!1)},onKeyDown:s=>s.key==="Escape"&&r(!1)})}):f.jsxs("button",{type:"button",className:"preset-main",draggable:!0,"aria-pressed":t,onClick:()=>D.selectPreset(e.id),onDoubleClick:()=>!e.factory&&r(!0),onKeyDown:s=>{s.key==="F2"&&!e.factory&&r(!0)},onDragStart:s=>{s.dataTransfer.setData("application/x-joue-preset",e.id),s.dataTransfer.effectAllowed="copy",D.setDragging(e.id)},onDragEnd:()=>D.setDragging(null),title:n?D.t("dragHint"):e.factory?e.name:`${e.name} — ${D.t("renameHint")}`,children:[f.jsx("span",{className:"preset-name",children:e.name}),f.jsx(QS,{preset:e}),f.jsx("span",{className:"preset-lock","aria-label":l?D.t("locked"):void 0,children:l&&f.jsx(zs,{size:13,"aria-hidden":"true"})}),n&&f.jsx("span",{className:"fits","aria-label":a==="fr"?"Compatible avec le board":"Fits a module on the board"})]})})}function Bc({id:e,title:t,factory:n,children:a}){const[i,r]=Z.useState(!0);return f.jsxs("li",{className:"folder",children:[f.jsxs("button",{type:"button",className:"folder-head","aria-expanded":i,"aria-controls":`folder-${e}`,onClick:()=>r(!i),children:[i?f.jsx(Mp,{size:14,"aria-hidden":"true"}):f.jsx(Dp,{size:14,"aria-hidden":"true"}),f.jsx("span",{children:t}),n&&f.jsx(zs,{size:12,"aria-hidden":"true",className:"folder-lock"})]}),i&&f.jsx("ul",{id:`folder-${e}`,className:"folder-body",children:a})]})}function JS({onClose:e}){const t=Z.useRef(null),n=Z.useMemo(()=>eS().map(a=>ii(a,3,0)).filter(a=>!!a&&!(a instanceof jt)),[]);return Z.useEffect(()=>{const a=r=>{t.current&&!t.current.contains(r.target)&&!r.target.closest(".add-button")&&e()},i=r=>r.key==="Escape"&&e();return window.addEventListener("pointerdown",a),window.addEventListener("keydown",i),t.current?.querySelector("button")?.focus(),()=>{window.removeEventListener("pointerdown",a),window.removeEventListener("keydown",i)}},[e]),f.jsxs("div",{className:"collection",ref:t,role:"dialog","aria-label":D.t("newPreset"),children:[f.jsx("p",{className:"collection-title",children:D.t("newPreset")}),f.jsx("ul",{children:n.map(a=>f.jsx("li",{children:f.jsxs("button",{type:"button",onClick:()=>{D.newPreset(a.type),e()},children:[f.jsx("span",{className:"thumb",style:{"--span":a.slotNbr},"aria-hidden":"true",children:f.jsx(fl,{module:a,colorId:a.color||Om(a),className:"thumb-art"})}),f.jsx("span",{className:"collection-name",children:a.title})]})},a.type))})]})}function qS(e,t){const n=new Blob([t],{type:"application/xml"}),a=URL.createObjectURL(n),i=document.createElement("a");i.href=a,i.download=e,document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(a),1e3)}function tv(){const e=j(p=>p.presets),t=j(p=>p.selection),n=j(p=>p.board),a=j(p=>p.lang),[i,r]=Z.useState(""),[l,s]=Z.useState(!1),[o,u]=Z.useState(!1),d=Z.useRef(null),m=i.trim().toLowerCase(),c=p=>!m||p.name.toLowerCase().includes(m)||p.title.toLowerCase().includes(m),S=e.filter(p=>!p.factory&&c(p)),y=e.filter(p=>p.factory&&c(p)),v=new Map;for(const p of y){const b=p.folder.startsWith("Play")?"J-Play":"J-Pro";v.set(b,[...v.get(b)??[],p])}const x=p=>!!n&&!n.play&&n.slots.some(b=>b.type===p.type&&b.version===p.version),g=t?.kind==="preset"?t.id:null,h=e.find(p=>p.id===g)??null,C=e.filter(p=>!p.factory);return Z.useEffect(()=>u(!1),[g]),f.jsxs("section",{className:"panel library","aria-labelledby":"presets-title",children:[f.jsx("h2",{className:"panel-title",id:"presets-title",children:D.t("presetsTitle")}),f.jsxs("div",{className:"search",children:[f.jsx(Rp,{size:14,"aria-hidden":"true"}),f.jsx("input",{id:"preset-search",type:"search",placeholder:D.t("search"),"aria-label":D.t("search"),value:i,onChange:p=>r(p.target.value)})]}),f.jsxs("ul",{className:"library-scroll",children:[f.jsx(Bc,{id:"mine",title:D.t("myPresets"),children:S.length===0?f.jsx("li",{className:"empty",children:m?D.t("noResults",{q:i}):D.t("emptyMine")}):S.map(p=>f.jsx(Ic,{preset:p,selected:p.id===g,compatible:x(p)},p.id))}),[...v.entries()].map(([p,b])=>f.jsx(Bc,{id:p,title:a==="fr"?`Presets d’usine ${p}`:`${p} factory presets`,factory:!0,children:b.map(A=>f.jsx(Ic,{preset:A,selected:A.id===g,compatible:x(A)},A.id))},p))]}),o&&h&&!h.factory&&f.jsxs("div",{className:"confirm-bar",role:"alertdialog","aria-label":D.t("deleteConfirm",{name:h.name}),children:[f.jsx("span",{children:D.t("deleteConfirm",{name:h.name})}),f.jsx("button",{type:"button",className:"btn tiny danger",onClick:()=>D.deletePreset(h.id),children:D.t("delete")}),f.jsx("button",{type:"button",className:"btn tiny",onClick:()=>u(!1),children:D.t("cancel")})]}),f.jsxs("div",{className:"library-bar",children:[f.jsx("button",{type:"button",className:"bar-icon add-button",title:D.t("newPreset"),"aria-label":D.t("newPreset"),"aria-expanded":l,onClick:()=>s(!l),children:f.jsx(Pp,{size:15})}),f.jsx("button",{type:"button",className:"bar-icon",title:D.t("delete"),"aria-label":D.t("delete"),disabled:!h||h.factory,onClick:()=>u(!0),children:f.jsx(wp,{size:15})}),f.jsx("button",{type:"button",className:"bar-icon",title:D.t("duplicate"),"aria-label":D.t("duplicate"),disabled:!h,onClick:()=>h&&D.duplicatePreset(h.id),children:f.jsx(Cm,{size:14})}),f.jsx("span",{className:"bar-gap"}),f.jsx("button",{type:"button",className:"bar-icon",title:D.t("import"),"aria-label":D.t("import"),onClick:()=>d.current?.click(),children:f.jsx(Ip,{size:14})}),f.jsx("button",{type:"button",className:"bar-icon",title:D.t("export"),"aria-label":D.t("export"),disabled:C.length===0,onClick:()=>{qS("Joue presets.xml",D.exportText(C)),D.toast(D.t("exported",{n:C.length}),"success")},children:f.jsx(Ep,{size:14})}),f.jsx("input",{ref:d,id:"import-file",type:"file",accept:".xml,application/xml,text/xml",hidden:!0,onChange:async p=>{const b=p.target.files?.[0];b&&D.importFile(await b.text(),b.name),p.target.value=""}})]}),l&&f.jsx(JS,{onClose:()=>s(!1)})]})}function ev(){const e=j(t=>t.toasts);return f.jsx("div",{className:"toasts",role:"status","aria-live":"polite",children:e.map(t=>f.jsxs("div",{className:`toast ${t.tone}`,children:[f.jsx("span",{children:t.text}),t.action&&f.jsx("button",{type:"button",className:"link",onClick:()=>{t.action.run(),D.dismiss(t.id)},children:t.action.label}),f.jsx("button",{type:"button",className:"icon","aria-label":D.t("close"),onClick:()=>D.dismiss(t.id),children:f.jsx(Bp,{size:14})})]},t.id))})}function nv(){const e=j(a=>a.board),t=j(a=>a.connection),n=j(a=>a.lang);return f.jsxs("header",{className:"topbar",children:[f.jsxs("div",{className:"brand",children:[f.jsx("svg",{className:"wordmark",viewBox:wc.viewBox,role:"img","aria-label":"Joué",children:wc.paths.map((a,i)=>f.jsx("path",{d:a},i))}),f.jsx("span",{className:"brand-name",children:"Editor"})]}),f.jsxs("div",{className:"topbar-actions",children:[e?f.jsxs("button",{type:"button",className:"btn small ghost","aria-label":D.t("disconnect"),onClick:()=>D.disconnect(),children:[f.jsx(Lp,{size:14,"aria-hidden":"true"}),f.jsx("span",{className:"btn-label",children:D.t("disconnect")})]}):f.jsxs("button",{type:"button",className:"btn small ghost","aria-label":D.t("connect"),disabled:t==="searching",onClick:()=>void D.connect(),children:[t==="searching"?f.jsx(Oi,{size:14,className:"spin","aria-hidden":"true"}):f.jsx(ym,{size:14,"aria-hidden":"true"}),f.jsx("span",{className:"btn-label",children:t==="searching"?D.t("connecting"):D.t("connect")})]}),f.jsx("div",{className:"lang",role:"radiogroup","aria-label":D.t("language"),children:["en","fr"].map(a=>f.jsx("button",{type:"button",role:"radio","aria-checked":n===a,className:n===a?"on":"",onClick:()=>D.setLang(a),children:a.toUpperCase()},a))})]})]})}function av(){const e=j(r=>r.ready),t=j(r=>r.selection),n=j(r=>r.lang),[a,i]=Z.useState("board");return Z.useEffect(()=>{document.documentElement.lang=n},[n]),Z.useEffect(()=>{const r=l=>{if(l.target.closest("input, select, textarea"))return;const o=l.metaKey||l.ctrlKey;o&&l.key.toLowerCase()==="z"?(l.preventDefault(),l.shiftKey?D.redo():D.undo()):o&&l.key.toLowerCase()==="y"&&(l.preventDefault(),D.redo())};return window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[]),Z.useEffect(()=>{t&&i(r=>r==="library"?"board":r)},[t]),e?f.jsxs("div",{className:"app",children:[f.jsx(nv,{}),f.jsxs("div",{className:"workspace","data-view":a,children:[f.jsx(tv,{}),f.jsxs("div",{className:"column center",children:[f.jsx(BS,{}),f.jsx(ZS,{})]}),f.jsxs("div",{className:"column side",children:[f.jsx(GS,{}),f.jsx(KS,{})]})]}),f.jsx("nav",{className:"tabs","aria-label":"View",children:["library","board","settings"].map(r=>f.jsx("button",{type:"button",className:a===r?"on":"","aria-pressed":a===r,onClick:()=>i(r),children:r==="library"?D.t("presetsTitle"):r==="board"?D.t("board"):D.t("inspector")},r))}),f.jsx(ev,{})]}):f.jsx("div",{className:"app loading"})}const iv={fretlessStartXReadBack:!1},Tc=1,rv=1,lv=2,Un={ControlChange:1,Pitchbend:2,ProgramChange:8};class oe{function=new Q;note=new T;noteChannel=new T;inputMode=new Q;noteVelocity=new te;yControlEnable=new T;cc=new T;ccChannel=new T;ccRange=new te;ccDirection=new Q;pitchbendChannel=new T;pitchbendRange=new te;pitchbendDirection=new Q;pc=new T;pcChannel=new T;scriptChannelValue=new T;scriptTarget=new Q;scriptChannel=new Q;scriptPolyAftertouch=new Q;scriptChannelAftertouch=new Q;scriptVibrato=new Q;scriptBending=new Q;scriptSustain=new Q;scriptYControl=new Q;scriptGlissando=new Q;scriptFretless=new Q}class Xt extends ot{options;get className(){return"ElementPad"}constructor(t){super(),this.revision=2,this.options=t;const n=[];t.function.enable&&(t.note.enable&&n.push("Note"),t.scriptChannel.enable&&n.push("Channel selection"),t.scriptSustain.enable&&n.push("Sustain on/off"),t.scriptVibrato.enable&&n.push("Vibrato on/off"),t.scriptBending.enable&&n.push("Bending on/off"),(t.scriptPolyAftertouch.enable||t.scriptChannelAftertouch.enable)&&n.push("Aftertouch on/off"),t.scriptYControl.enable&&n.push("YControl on/off"),t.scriptGlissando.enable&&n.push("Glissando on/off"),t.scriptFretless.enable&&n.push("Fretless on/off"),t.cc.enable&&n.push("Control Change"),t.pc.enable&&n.push("Program Change"),t.pitchbendRange.enable&&n.push("Pitchbend"));const a=n.length>1,i=M.slider("Dynamic","Dynamic",127,this.depth);this.settings.addSetting(i),i.hidden=!0;const r=M.combobox("Function","Action",n,n,t.function.value);this.settings.addSetting(r),n.length<=1&&(n.length>0&&(r.value=n[0]),r.hidden=!0);const l=(N,E)=>{a?r.addSetting(N,E):this.settings.addSetting(N)},s=M.combobox("InputMode","Input",["Fingers","Sticks"],["Fingers","Sticks"],t.inputMode.value);s.hidden=!t.inputMode.enable,l(s,"Note");const o=M.combobox("NoteChannel","Channel",mt,mt,String(t.noteChannel.value));o.hidden=!t.noteChannel.enable,l(o,"Note");const u=M.combobox("Note","Note",Hs,rt,String(t.note.value));u.hidden=!t.note.enable,l(u,"Note");const d=M.range("NoteVelocity","Velocity",t.noteVelocity.limitMin,t.noteVelocity.limitMax,t.noteVelocity.valueMin,t.noteVelocity.valueMax);d.hidden=!t.noteVelocity.enable,l(d,"Note");const m=M.checkbox("YControlEnable","Y Control",t.yControlEnable.value);m.hidden=!0,this.settings.addSetting(m);const c=M.combobox("CCChannel","Channel",mt,mt,String(t.ccChannel.value));c.hidden=!t.ccChannel.enable,l(c,"Control Change");const S=M.combobox("CC","CC number",rt,rt,String(t.cc.value));S.hidden=!t.cc.enable,l(S,"Control Change");const y=M.range("CCRange","Range",t.ccRange.limitMin,t.ccRange.limitMax,t.ccRange.valueMin,t.ccRange.valueMax);y.hidden=!t.ccRange.enable,l(y,"Control Change");const v=M.combobox("CCDirection","Direction",["Natural","Inverted"],["Natural","Inverted"],t.ccDirection.value);v.hidden=!t.ccDirection.enable,l(v,"Control Change");const x=M.combobox("PitchbendChannel","Channel",mt,mt,String(t.pitchbendChannel.value));x.hidden=!t.pitchbendChannel.enable,l(x,"Pitchbend");const g=M.slider("PitchbendRange","Range",t.pitchbendRange.limitMax,t.pitchbendRange.valueMax);g.hidden=!t.pitchbendRange.enable,l(g,"Pitchbend");const h=M.combobox("PitchbendDirection","Pitch",["Up","Down"],["Up","Down"],t.pitchbendDirection.value);h.hidden=!t.pitchbendDirection.enable,l(h,"Pitchbend");const C=M.combobox("PCChannel","Channel",mt,mt,String(t.pcChannel.value));C.hidden=!t.pcChannel.enable,l(C,"Program Change");const p=M.combobox("PC","PC number",rt,rt,String(t.pc.value));p.hidden=!t.pc.enable,l(p,"Program Change");const b=M.combobox("ScriptChannel","Channel",mt,mt,String(t.scriptChannelValue.value));b.hidden=!t.scriptChannel.enable,l(b,"Channel selection");const A=M.combobox("AftertouchType","AftertouchType",["Polyphonic","Channel"],["Polyphonic","Channel"],"Polyphonic");A.hidden=!0,this.settings.addSetting(A)}getMidiObjectList(){const t=this.settings,n=t.getValueOfSetting("Function"),a=[];if(n==="Note")if(this.geometryMM.length===0){const i=new _("PadData");a.push(i.bytes),i.set("midiElementData.midiHeader.type",P.Pad),i.set("midiElementData.midiHeader.version",Tc);let r=H.LockCursor;r|=this.midiOptions,t.getIntValueOfSetting("YControlEnable")&&(r|=H.Relative|H.AxisY),t.getValueOfSetting("InputMode")==="Sticks"&&(r|=H.Sticks),i.set("midiElementData.options",r),Te(this,i),i.set("padData.note",t.getIntValueOfSetting("Note")),i.set("padData.channel",t.getIntValueOfSetting("NoteChannel")),i.set("padData.velocityMin",t.getMinValueOfSetting("NoteVelocity")),i.set("padData.velocityMax",t.getMaxValueOfSetting("NoteVelocity"))}else{const i=new _("PadDataPoly6");a.push(i.bytes);const r="polygonData.polygonData";i.set(`${r}.midiHeader.type`,P.PadPoly6),i.set(`${r}.midiHeader.version`,Tc);let l=H.LockCursor;l|=this.midiOptions,t.getIntValueOfSetting("YControlEnable")&&(l|=H.Relative|H.AxisY),t.getValueOfSetting("InputMode")==="Sticks"&&(l|=H.Sticks),i.set(`${r}.options`,l),i.set(`${r}.id`,this.elementId),i.set(`${r}.magic`,255),i.set(`${r}.vertexNbr`,this.geometryMM.length);for(let s=0;s<this.geometryMM.length;s++)i.set("polygonData.vertexX",this.geometryMM[s].x,s),i.set("polygonData.vertexY",this.geometryMM[s].y,s);i.set("polygonData.z",this.z),i.set("polygonData.depth",t.getMaxValueOfSetting("Dynamic")),i.set(`${r}.layerNbr`,this.layerNbr),i.set("padData.note",t.getIntValueOfSetting("Note")),i.set("padData.channel",t.getIntValueOfSetting("NoteChannel")),i.set("padData.velocityMin",t.getMinValueOfSetting("NoteVelocity")),i.set("padData.velocityMax",t.getMaxValueOfSetting("NoteVelocity"))}else if(n==="Control Change"||n==="Pitchbend"||n==="Program Change"){const i=new _("ControlDataV2");a.push(i.bytes),i.set("midiElementData.midiHeader.type",P.Control),i.set("midiElementData.midiHeader.version",lv),i.set("midiElementData.options",H.LockCursor|H.CaptureCursor|this.midiOptions),Te(this,i),n==="Control Change"?(i.set("controlData.channel",t.getIntValueOfSetting("CCChannel")),i.set("controlData.control_pitchbendMSB",t.getIntValueOfSetting("CC")),i.set("controlData.value_pitchbendLSB",0),i.set("controlData.controlOptions",Un.ControlChange),t.getValueOfSetting("CCDirection")==="Natural"?(i.set("controlData.min",t.getMinValueOfSetting("CCRange")),i.set("controlData.max",t.getMaxValueOfSetting("CCRange"))):(i.set("controlData.min",t.getMaxValueOfSetting("CCRange")),i.set("controlData.max",t.getMinValueOfSetting("CCRange")))):n==="Program Change"?(i.set("controlData.channel",t.getIntValueOfSetting("PCChannel")),i.set("controlData.control_pitchbendMSB",t.getIntValueOfSetting("PC")),i.set("controlData.value_pitchbendLSB",0),i.set("controlData.controlOptions",Un.ProgramChange)):(i.set("controlData.channel",t.getIntValueOfSetting("PitchbendChannel")),i.set("controlData.control_pitchbendMSB",0),i.set("controlData.value_pitchbendLSB",0),i.set("controlData.controlOptions",Un.Pitchbend),i.set("controlData.min",0),t.getValueOfSetting("PitchbendDirection")==="Up"?i.set("controlData.max",t.getMaxValueOfSetting("PitchbendRange")):i.set("controlData.max",-t.getMaxValueOfSetting("PitchbendRange")))}else{const i=new _("ButtonData");a.push(i.bytes),i.set("midiElementData.midiHeader.type",P.Button),i.set("midiElementData.midiHeader.version",rv),i.set("midiElementData.options",H.LockCursor|H.CaptureCursor|this.midiOptions),Te(this,i);const r=this.options,l=r.scriptTarget.value;let s="";if(n==="Channel selection"){const u=t.getValueOfSetting("ScriptChannel");r.scriptChannel.value===""?s=`${l}.${V.Channel}=${u??"(null)"};`:s=r.scriptChannel.value.split("__VAL").join(u??"(null)")}else n==="Sustain on/off"?s=r.scriptSustain.value===""?`${l}.${V.Sustain}^1;`:r.scriptSustain.value:n==="Vibrato on/off"?s=r.scriptVibrato.value===""?`${l}.${V.ValueX}^1;`:r.scriptVibrato.value:n==="Bending on/off"?s=r.scriptBending.value===""?`${l}.${V.ValueY}^1;`:r.scriptBending.value:n==="YControl on/off"?s=r.scriptYControl.value===""?`${l}.${V.Options}^${H.AxisY};`:r.scriptYControl.value:n==="Glissando on/off"?s=r.scriptGlissando.value:n==="Fretless on/off"?s=r.scriptFretless.value:n==="Aftertouch on/off"&&(t.getValueOfSetting("AftertouchType")==="Polyphonic"?s=r.scriptPolyAftertouch.value===""?`${l}.${V.PolyphonicAftertouch}^1;`:r.scriptPolyAftertouch.value:r.scriptChannelAftertouch.enable&&(s=r.scriptChannelAftertouch.value===""?`${l}.${V.ChannelAftertouch}^1;`:r.scriptChannelAftertouch.value));const o=js(s);i.set("buttonData.commandSize",o.length),a.push(o)}return a}loadMidiData(t,n){let a=0;const i=_.at("MidiElementData",t,n),r=this.settings;if(i.get("id")!==255)switch(i.get("midiHeader.type")){case P.Pad:{if(i.get("midiHeader.version")!==1)return 0;const l=_.at("PadData",t,n);a+=ct("PadData"),r.setMaxValueOfSetting("Dynamic",l.get("midiElementData.depth")),r.setIntValueOfSetting("Note",l.get("padData.note")),r.setIntValueOfSetting("NoteChannel",l.get("padData.channel")),r.setMinValueOfSetting("NoteVelocity",l.get("padData.velocityMin")),r.setMaxValueOfSetting("NoteVelocity",l.get("padData.velocityMax")),r.setIntValueOfSetting("YControlEnable",l.get("midiElementData.options")&H.AxisY?1:0);break}case P.Control:{if(i.get("midiHeader.version")!==2)return 0;const s=_.at("ControlDataV2",t,n);a+=ct("ControlDataV2"),r.setMaxValueOfSetting("Dynamic",s.get("midiElementData.depth"));const o=s.get("controlData.controlOptions");if(o&Un.Pitchbend){r.setValueOfSetting("Function","Pitchbend");const u=s.get("controlData.max");u>0?(r.setValueOfSetting("PitchbendDirection","Up"),r.setMaxValueOfSetting("PitchbendRange",u)):(r.setValueOfSetting("PitchbendDirection","Down"),r.setMaxValueOfSetting("PitchbendRange",-u)),r.setIntValueOfSetting("PitchbendChannel",s.get("controlData.channel"))}else if(o&Un.ControlChange){r.setValueOfSetting("Function","Control Change"),r.setIntValueOfSetting("CC",s.get("controlData.control_pitchbendMSB")),r.setIntValueOfSetting("CCChannel",s.get("controlData.channel"));const u=s.get("controlData.min"),d=s.get("controlData.max");u<=d?(r.setValueOfSetting("CCDirection","Natural"),r.setMinValueOfSetting("CCRange",u),r.setMaxValueOfSetting("CCRange",d)):(r.setValueOfSetting("CCDirection","Inverted"),r.setMinValueOfSetting("CCRange",d),r.setMaxValueOfSetting("CCRange",u))}else o&Un.ProgramChange&&(r.setValueOfSetting("Function","Program Change"),r.setIntValueOfSetting("PC",s.get("controlData.control_pitchbendMSB")),r.setIntValueOfSetting("PCChannel",s.get("controlData.channel")));break}case P.Button:{if(i.get("midiHeader.version")!==1)return 0;const l=_.at("ButtonData",t,n);a+=ct("ButtonData");const s=l.get("buttonData.commandSize"),o=n+ct("ButtonData");let u="";for(let d=0;d<s;d++)u+=String.fromCharCode(t[o+d]??0);a+=s,r.setMaxValueOfSetting("Dynamic",l.get("midiElementData.depth"));for(const d of Ra(u,s))switch(d.parameter){case V.Channel:r.setValueOfSetting("Function","Channel selection"),r.setIntValueOfSetting("ScriptChannel",d.readValue());break;case V.Sustain:r.setValueOfSetting("Function","Sustain on/off");break;case V.ValueX:d.target===`c${P.Glide}`?r.setValueOfSetting("Function","Glissando on/off"):r.setValueOfSetting("Function","Vibrato on/off");break;case V.ValueZ:d.target===`c${P.Glide}`&&r.setValueOfSetting("Function","Glissando on/off");break;case V.ValueY:r.setValueOfSetting("Function","Bending on/off");break;case V.Fretless:r.setValueOfSetting("Function","Fretless on/off");break;case V.Options:d.readValue()&H.AxisY&&r.setValueOfSetting("Function","YControl on/off");break;case V.PolyphonicAftertouch:case V.ChannelAftertouch:r.setValueOfSetting("Function","Aftertouch on/off");break}break}default:return 0}return a}loadSettingFromXmlDescription(t,n){switch(n){case 0:case 1:{const a=t.name?.toLowerCase();a==="channel"?t.name="NoteChannel":a==="velocity"?t.name="NoteVelocity":a==="pitchbend"?t.name="PitchbendRange":a==="setchannel"&&(t.name="ScriptChannel");break}case 2:break;default:return!1}return super.loadSettingFromXmlDescription(t,n)}}const ov=1;class zn extends ot{script="";get className(){return"ElementScript"}constructor(){super(),this.revision=2}getMidiObjectList(){const t=new _("ScriptData");t.set("midiHeader.type",P.Script),t.set("midiHeader.version",ov);const n=js(this.script??"");return t.set("commandSize",n.length),[t.bytes,n]}loadMidiData(t,n){const a=_.at("MidiElementData",t,n);if(a.get("midiHeader.type")!==P.Script||a.get("midiHeader.version")!==1)return 0;const r=_.at("ScriptData",t,n).get("commandSize"),l=n+ct("ScriptData");let s="";for(let o=0;o<r;o++){const u=t[l+o]??0;if(u===0)break;s+=String.fromCharCode(u)}return this.script=s,ct("ScriptData")+r}}class jn extends ot{script="";get className(){return"ElementButton"}constructor(){super(),this.revision=2;const t=M.slider("Dynamic","Dynamic",127,this.depth);this.settings.addSetting(t),t.hidden=!0}getMidiObjectList(){const t=new _("ButtonData");t.set("midiElementData.midiHeader.type",P.Button),t.set("midiElementData.midiHeader.version",1),t.set("midiElementData.options",H.LockCursor|H.CaptureCursor|this.midiOptions),Te(this,t);const n=js(this.script??"");return t.set("buttonData.commandSize",n.length),[t.bytes,n]}loadMidiData(t,n){const a=_.at("MidiElementData",t,n);if(a.get("midiHeader.type")!==P.Button||a.get("midiHeader.version")!==1)return 0;const i=_.at("ButtonData",t,n);return this.settings.setMaxValueOfSetting("Dynamic",i.get("midiElementData.depth")),ct("ButtonData")+i.get("buttonData.commandSize")}}class Qs{pitchRange=new T;elementType=new T;elementNbr=new T;elementList=new tS}class Js extends ot{options;get className(){return"ElementGlide"}constructor(t){super(),this.revision=1,this.options=t;const n=["2","3","4","5","7","12","24","48","96"],a=M.slider("Dynamic","Dynamic",127,this.depth);this.settings.addSetting(a),a.hidden=!0;const i=M.combobox("PitchRange","PitchRange",n.map(r=>`${r} semitones`),n,String(t.pitchRange.value));this.settings.addSetting(i),i.hidden=!0}getMidiObjectList(){const t=new _("GlideDataV1");t.set("midiElementData.midiHeader.type",P.Glide),t.set("midiElementData.midiHeader.version",1),t.set("midiElementData.options",H.MasterElement|this.midiOptions),Te(this,t),t.set("glideData.pitchRange",this.settings.getIntValueOfSetting("PitchRange")),t.set("glideData.elementNbr",this.options.elementNbr.value);const n=this.options.elementList.values,a=n.length+3>>2<<2;t.set("glideData.size",a);const i=new Uint8Array(a);for(let r=0;r<n.length;r++)i[r]=Math.trunc(yn(n[r]))&255;return[t.bytes,i]}loadMidiData(t,n){const a=_.at("MidiElementData",t,n);if(a.get("midiHeader.type")!==P.Glide||a.get("midiHeader.version")!==1)return 0;const i=_.at("GlideDataV1",t,n);return this.settings.setIntValueOfSetting("PitchRange",i.get("glideData.pitchRange")),this.settings.setMaxValueOfSetting("Dynamic",i.get("midiElementData.depth")),ct("GlideDataV1")+i.get("glideData.size")}loadSettingFromXmlDescription(t,n){return n!==0&&n!==1?!1:super.loadSettingFromXmlDescription(t,n)}}class Pe extends Ze{resolveVersion(t){return this.versionIndex=t.indexOf(this.version),this.versionIndex!==-1}finishInit(t,n){this.revision=n,this.resolveVersion(t)?this.initModule():(this.invalid=!0,this.baseInitModule())}baseInitModule(){Ze.prototype.initModule.call(this)}setColorChoices(t,n=t){this.settings.setValuesOfSetting("Color",t.map(a=>String(Ct(a))),n)}addColorSetting(){const t=M.combobox("Color","Color",["Unknown"],["0"],"0");return this.settings.addSetting(t),t}findScript(t){const n=this.elementList.find(a=>a.name===t);return n instanceof zn?n:null}}function qe(e,t){const n=/^\s*[+-]?\d+/.exec(e.substring(t));return n?parseInt(n[0],10):0}function Im(e){const t=M.category("Advanced","Advanced settings");e.settings.addSetting(t),t.addSetting(M.combobox("Dynamic","Pressure range",["Low","High"],["Low","High"],"Low"))}const Bm=["Blue","Red","Purple","Yellow","Pink","Green"];class ua extends Pe{static VERSIONS=[1,3];static REVISION=1;get className(){return"Area"}constructor(t,n,a){super(t,n,a),this.finishInit(ua.VERSIONS,ua.REVISION)}get slotNbr(){return 1}get title(){return"Pro Area"}get summary(){return"Area is played by sliding and taping the surface with fingers. The module sends X, Y, Z values which are 3 MIDI control changes by default. Each message can be customized."}getDefaultColor(){return Ct("Yellow")}setFullPrivileges(t){super.setFullPrivileges(t),this.setColorChoices(t?Bm:["Yellow"])}getMidiStructure(){return[{type:P.Area,name:"AREA"}]}getMidiDescription(){for(const n of this.elementList)n.name.startsWith("AREA")&&n.settings.setMaxValueOfSetting("Dynamic",this.settings.getValueOfSetting("Dynamic")==="Low"?U.AreaLow:U.AreaHigh);const t=super.getMidiDescription();return t?this.patchHeader(t,n=>{n.set("instrumentHeader.midiHeader.type",G.Area),n.set("instrumentHeader.midiHeader.version",ua.VERSIONS[this.versionIndex]),n.set("revision",ua.REVISION),n.set("instrumentHeader.color",this.color),n.set("options",this.moduleOptions),n.set("tagPosition",this.tagPosition)}):null}loadMidiData(t){const n=super.loadMidiData(t);if(n===0)return 0;for(const a of this.elementList)a.name.startsWith("AREA")&&this.settings.setValueOfSetting("Dynamic",a.settings.getMaxValueOfSetting("Dynamic")===U.AreaLow?"Low":"High");return n}loadElementFromXmlDescription(t,n){return n<0||n>2?!1:super.loadElementFromXmlDescription(t,n)}initModule(){const t=this.versionIndex,n=7;let a=1;this.addColorSetting(),this.setFullPrivileges(this.fullPrivileges),this.settings.addSetting(M.checkbox("ReadOnly","Locked",0)),Im(this);const i=new ot;i.radiusMM=4.5,i.isColorizable=!0,i.dimensionMM={x:[2,2][t],y:[2,2][t],width:[86,86][t],height:[86,86][t]},this.addBackgroundElement(i);const r=new wa;for(const c of[r.x,r.y])c.enable.value=1,c.channel.value=n,c.control.value=a++,c.range.limitMin=0,c.range.limitMax=127,c.range.valueMin=0,c.range.valueMax=127,c.direction.value="Natural",c.mode.value="Absolute",c.demultiplier.value=2,c.enableCC14Bits.value=0,c.ccFine.value=c.control.value+1;r.z.enable.value=1,r.z.channel.value=n,r.z.control.value=a++,r.z.range.limitMin=0,r.z.range.limitMax=127,r.z.range.valueMin=0,r.z.range.valueMax=127,r.z.direction.value="Natural";const l=new Fn(r);l.name=this.getMidiStructure()[0].name,l.elementId=1,l.layerNbr=1,l.z=0,l.depth=40;const s=[5,5][t],o=[5,5][t],u=[80,80][t],d=[80,80][t],m=[2,2][t];l.dimensionMM={x:s,y:o,width:u,height:d},l.touchAreaMM={x:s+m,y:o+m,width:u-2*m,height:d-2*m},l.radiusMM=1.5,l.isColorizable=!1,this.addElement(l)}}const wt={buttons:[4,4],buttonW:[14,14],buttonH:[14,14],buttonBorderX:[8,8],buttonBorderY:[68,68],buttonPitch:[20,20],bubbles:[4,4],bubbleW:[20,20],bubbleH:[20,20],touchMarginX:[4,3],touchMarginY:[4,3],positions:[{x:[6,6],y:[12,7]},{x:[21,17],y:[35,38.65]},{x:[49,53],y:[35,38.65]},{x:[64,64],y:[12,7]}]};class ca extends Pe{static VERSIONS=[1,3];static REVISION=1;get className(){return"Bubbles"}constructor(t,n,a){super(t,n,a),this.finishInit(ca.VERSIONS,ca.REVISION)}get slotNbr(){return 1}get title(){return"Pro Bubbles"}get summary(){return"Ever dreamed of controlling 12 parameters with one hand? Bubbles is the answer! On top of that, its crazy look will addict you for sure!"}getDefaultColor(){return Ct("Purple")}setFullPrivileges(t){super.setFullPrivileges(t),this.setColorChoices(t?Bm:["Purple"])}getMidiStructure(){return[{type:P.Area,name:"BUBBLE1"},{type:P.Area,name:"BUBBLE2"},{type:P.Area,name:"BUBBLE3"},{type:P.Area,name:"BUBBLE4"},{type:P.Pad,name:"BUTTON1"},{type:P.Pad,name:"BUTTON2"},{type:P.Pad,name:"BUTTON3"},{type:P.Pad,name:"BUTTON4"}]}getMidiDescription(){const t=this.settings.getValueOfSetting("Dynamic")==="Low";for(const a of this.elementList)a.name.startsWith("BUBBLE")?a.settings.setMaxValueOfSetting("Dynamic",t?U.BubbleLow:U.BubbleHigh):a.name.startsWith("BUTTON")&&a.settings.setMaxValueOfSetting("Dynamic",t?U.PadLow:U.PadHigh);const n=super.getMidiDescription();return n?this.patchHeader(n,a=>{a.set("instrumentHeader.midiHeader.type",G.Bubbles),a.set("instrumentHeader.midiHeader.version",ca.VERSIONS[this.versionIndex]),a.set("revision",ca.REVISION),a.set("instrumentHeader.color",this.color),a.set("options",this.moduleOptions),a.set("tagPosition",this.tagPosition)}):null}loadMidiData(t){const n=super.loadMidiData(t);if(n===0)return 0;for(const a of this.elementList)a.name.startsWith("BUBBLE1")&&this.settings.setValueOfSetting("Dynamic",a.settings.getMaxValueOfSetting("Dynamic")===U.BubbleLow?"Low":"High");return n}loadElementFromXmlDescription(t,n){switch(n){case 0:case 1:t.name?.startsWith("PAD")&&(t.name=t.name.split("PAD").join("BUTTON"));break;case 2:break;default:return!1}return super.loadElementFromXmlDescription(t,n)}initModule(){const t=this.versionIndex,n=6;let a=1,i=0,r=0,l=0;this.addColorSetting(),this.setFullPrivileges(this.fullPrivileges),this.settings.addSetting(M.checkbox("ReadOnly","Locked",0)),Im(this);const s=this.getMidiStructure();let o=1;for(let u=0;u<wt.bubbles[t];u++){const d=new wa;d.type.value="BUBBLE";for(const y of[d.x,d.y])y.enable.value=1,y.channel.value=n,y.control.value=a++,y.range.limitMin=0,y.range.limitMax=127,y.range.valueMin=0,y.range.valueMax=127,y.direction.value="Natural",y.startValue.value=64;d.z.enable.value=1,d.z.channel.value=n,d.z.control.value=a++,d.z.range.limitMin=0,d.z.range.limitMax=127,d.z.range.valueMin=0,d.z.range.valueMax=127,d.z.direction.value="Natural";const m=new Fn(d);m.name=s[o-1].name,m.elementId=o++,m.layerNbr=1,m.z=20,m.depth=127;const c=wt.positions[u].x[t],S=wt.positions[u].y[t];m.dimensionMM={x:c,y:S,width:wt.bubbleW[t],height:wt.bubbleH[t]},m.touchAreaMM={x:c-wt.touchMarginX[t],y:S-wt.touchMarginY[t],width:wt.bubbleW[t]+2*wt.touchMarginX[t],height:wt.bubbleH[t]+2*wt.touchMarginY[t]},m.radiusMM=90,m.isColorizable=!0,this.addElement(m)}for(let u=0;u<wt.buttons[t];u++){const d=new oe;d.function.value="Note",d.note.value=i++,d.noteChannel.value=n,d.noteVelocity.limitMin=1,d.noteVelocity.limitMax=127,d.noteVelocity.valueMin=127,d.noteVelocity.valueMax=127,d.noteVelocity.enable=!1,d.cc.value=r++,d.ccChannel.value=n,d.ccRange.limitMin=0,d.ccRange.limitMax=127,d.ccRange.valueMin=0,d.ccRange.valueMax=127,d.ccDirection.value="Natural",d.pc.value=l++,d.pcChannel.value=n,d.pitchbendChannel.value=n,d.pitchbendRange.limitMax=8192,d.pitchbendRange.valueMax=8192,d.pitchbendDirection.value="Up";const m=new Xt(d);m.name=s[o-1].name,m.elementId=o++,m.layerNbr=4,m.z=0,m.depth=40;const c={x:wt.buttonBorderX[t]+u*wt.buttonPitch[t],y:wt.buttonBorderY[t],width:wt.buttonW[t],height:wt.buttonH[t]};m.dimensionMM=c,m.touchAreaMM={...c},m.radiusMM=3,m.isColorizable=!0,m.disabled=!1,this.addElement(m)}}}const Wn={ControlChange:1,Pitchbend:2,Horizontal:8};class qs{function=new Q;orientation=new Q;cc=new T;ccChannel=new T;ccRange=new te;ccDirection=new Q;ccMode=new Q;ccDemultiplier=new T;cc14bitsEnable=new T;ccFine=new T;pitchbendChannel=new T;pitchbendRange=new te;pitchbendDirection=new Q;constructor(){this.orientation.value="Vertical"}}class tu extends ot{options;get className(){return"ElementStrip"}constructor(t){super(),this.revision=2,this.options=t,Tm(this,t)}getMidiObjectList(){const t=this.settings,n=new _("StripDataV2");n.set("midiElementData.midiHeader.type",P.Strip),n.set("midiElementData.midiHeader.version",2);let a=H.LockCursor|H.CaptureCursor|this.midiOptions;n.set("stripData.demultiplier",1),Te(this,n);let i=0;if(this.options.orientation.value==="Horizontal"&&(i|=Wn.Horizontal),(this.rotation===90||this.rotation===270)&&(i^=Wn.Horizontal),t.getValueOfSetting("Function")==="Control Change"){i|=Wn.ControlChange,n.set("stripData.control",t.getIntValueOfSetting("CC"));const r=t.getIntValueOfSetting("CC14Bits")===1;t.getValueOfSetting("CCDirection")==="Natural"?(n.set("stripData.min",t.getMinValueOfSetting("CCRange")),n.set("stripData.max",t.getMaxValueOfSetting("CCRange")),r&&(n.set("stripData.controlFine",t.getIntValueOfSetting("CCFine")),n.set("stripData.min",(n.get("stripData.min")<<7)+0),n.set("stripData.max",(n.get("stripData.max")<<7)+127))):(n.set("stripData.min",t.getMaxValueOfSetting("CCRange")),n.set("stripData.max",t.getMinValueOfSetting("CCRange")),r&&(n.set("stripData.controlFine",t.getIntValueOfSetting("CCFine")),n.set("stripData.min",(n.get("stripData.min")<<7)+127),n.set("stripData.max",(n.get("stripData.max")<<7)+0))),t.getValueOfSetting("CCMode")==="Relative"&&(a|=H.Relative,n.set("stripData.demultiplier",t.getIntValueOfSetting("CCDemultiplier"))),n.set("stripData.channel",t.getIntValueOfSetting("CCChannel"))}else i|=Wn.Pitchbend,n.set("stripData.min",-t.getMaxValueOfSetting("PitchbendRange")),n.set("stripData.max",t.getMaxValueOfSetting("PitchbendRange")),n.set("stripData.channel",t.getIntValueOfSetting("PitchbendChannel"));return n.set("stripData.stripOptions",i),n.set("midiElementData.options",a),[n.bytes]}loadMidiData(t,n){const a=_.at("MidiElementData",t,n);if(a.get("midiHeader.type")!==P.Strip)return 0;const i=this.settings,r=a.get("midiHeader.version");if(r===1){const l=_.at("StripDataV1",t,n);return i.setMaxValueOfSetting("Dynamic",l.get("midiElementData.depth")),i.setValueOfSetting("Function","Control Change"),i.setIntValueOfSetting("CC",l.get("stripData.control")),i.setValueOfSetting("CCDirection","Natural"),i.setIntValueOfSetting("CC14Bits",0),i.setMinValueOfSetting("CCRange",l.get("stripData.min")),i.setMaxValueOfSetting("CCRange",l.get("stripData.max")),i.setIntValueOfSetting("CCChannel",l.get("stripData.channel")),i.setValueOfSetting("CCMode","Absolute"),ct("StripDataV1")}if(r===2){const l=_.at("StripDataV2",t,n);i.setMaxValueOfSetting("Dynamic",l.get("midiElementData.depth"));const s=l.get("stripData.stripOptions"),o=l.get("stripData.min"),u=l.get("stripData.max");return s&Wn.ControlChange?(i.setValueOfSetting("Function","Control Change"),i.setIntValueOfSetting("CC",l.get("stripData.control")),o<=u?(i.setValueOfSetting("CCDirection","Natural"),u>127?(i.setIntValueOfSetting("CC14Bits",1),i.setIntValueOfSetting("CCFine",l.get("stripData.controlFine")),i.setMinValueOfSetting("CCRange",o>>7),i.setMaxValueOfSetting("CCRange",u>>7)):(i.setIntValueOfSetting("CC14Bits",0),i.setMinValueOfSetting("CCRange",o),i.setMaxValueOfSetting("CCRange",u))):(i.setValueOfSetting("CCDirection","Inverted"),o>127?(i.setIntValueOfSetting("CC14Bits",1),i.setIntValueOfSetting("CCFine",l.get("stripData.controlFine")),i.setMinValueOfSetting("CCRange",u>>7),i.setMaxValueOfSetting("CCRange",o>>7)):(i.setIntValueOfSetting("CC14Bits",0),i.setMinValueOfSetting("CCRange",u),i.setMaxValueOfSetting("CCRange",o))),i.setIntValueOfSetting("CCChannel",l.get("stripData.channel")),l.get("midiElementData.options")&H.Relative?(i.setValueOfSetting("CCMode","Relative"),i.setIntValueOfSetting("CCDemultiplier",l.get("stripData.demultiplier"))):i.setValueOfSetting("CCMode","Absolute")):s&Wn.Pitchbend&&(i.setValueOfSetting("Function","Pitchbend"),i.setMaxValueOfSetting("PitchbendRange",u),i.setIntValueOfSetting("PitchbendChannel",l.get("stripData.channel"))),ct("StripDataV2")}return 0}loadSettingFromXmlDescription(t,n){switch(n){case 0:case 1:{const a=(i,r)=>{t.name?.toLowerCase()===i.toLowerCase()&&(t.name=r)};a("Type","Function"),a("Channel","CCChannel"),a("CC number","CC"),a("Control","CC"),a("Control Change","CC"),a("Direction","CCDirection"),a("Mode","CCMode"),a("Demultiplier","CCDemultiplier"),a("Pitchbend","PitchbendRange");break}case 2:break;default:return!1}return super.loadSettingFromXmlDescription(t,n)}}function Tm(e,t){const n=e.settings,a=[];t.function.enable&&(t.cc.enable&&a.push("Control Change"),t.pitchbendRange.enable&&a.push("Pitchbend"));const i=a.length>1,r=M.slider("Dynamic","Dynamic",127,e.depth);n.addSetting(r),r.hidden=!0;const l=M.combobox("Function","Action",a,a,t.function.value);n.addSetting(l),a.length<=1&&(a.length>0&&(l.value=a[0]),l.hidden=!0);const s=(h,C)=>{i?l.addSetting(h,C):n.addSetting(h)},o=M.combobox("CCChannel","Channel",mt,mt,String(t.ccChannel.value));o.hidden=!t.ccChannel.enable,s(o,"Control Change");const u=M.combobox("CC","CC number",rt,rt,String(t.cc.value));u.hidden=!t.cc.enable,s(u,"Control Change");const d=M.range("CCRange","Range",t.ccRange.limitMin,t.ccRange.limitMax,t.ccRange.valueMin,t.ccRange.valueMax);d.hidden=!t.ccRange.enable,s(d,"Control Change");const m=M.combobox("CCDirection","Direction",["Natural","Inverted"],["Natural","Inverted"],t.ccDirection.value);m.hidden=!t.ccDirection.enable,s(m,"Control Change");const c=M.combobox("CCMode","Mode",["Absolute","Relative"],["Absolute","Relative"],t.ccMode.value);c.hidden=!t.ccMode.enable,s(c,"Control Change");const S=M.combobox("CCDemultiplier","Demultiplier",["x1","x2","x3","x4","x5"],["1","2","3","4","5"],String(t.ccDemultiplier.value));S.hidden=!t.ccDemultiplier.enable,t.ccMode.enable?c.addSetting(S,"Relative"):s(S,"Control Change");const y=M.checkbox("CC14Bits","14 Bits",t.cc14bitsEnable.value);y.hidden=!t.cc14bitsEnable.enable,s(y,"Control Change");const v=M.combobox("CCFine","CC Fine",rt,rt,String(t.ccFine.value));v.hidden=!t.ccFine.enable,t.cc14bitsEnable.enable&&y.addSetting(v,"1");const x=M.combobox("PitchbendChannel","Channel",mt,mt,String(t.pitchbendChannel.value));x.hidden=!t.pitchbendChannel.enable,s(x,"Pitchbend");const g=M.slider("PitchbendRange","Range",t.pitchbendRange.limitMax,t.pitchbendRange.valueMax);g.hidden=!t.pitchbendRange.enable,s(g,"Pitchbend")}const ur={ControlChange:1,Pitchbend:2};class sv{function=new Q;cc=new T;ccChannel=new T;ccRange=new te;ccDirection=new Q;ccMode=new Q;ccDemultiplier=new T;cc14bitsEnable=new T;ccFine=new T;pitchbendChannel=new T;pitchbendRange=new te;pitchbendDirection=new Q}class uv extends ot{options;get className(){return"ElementRound"}constructor(t){super(),this.revision=2,this.options=t,Tm(this,t)}getMidiObjectList(){const t=this.settings,n=new _("RoundDataV2");n.set("midiElementData.midiHeader.type",P.Round),n.set("midiElementData.midiHeader.version",2),n.set("midiElementData.options",H.LockCursor|H.CaptureCursor|this.midiOptions),Te(this,n);let a=0;if(t.getValueOfSetting("Function")==="Control Change"){a|=ur.ControlChange,n.set("roundData.control",t.getIntValueOfSetting("CC"));const i=t.getIntValueOfSetting("CC14Bits")===1;t.getValueOfSetting("CCDirection")==="Natural"?(n.set("roundData.min",t.getMinValueOfSetting("CCRange")),n.set("roundData.max",t.getMaxValueOfSetting("CCRange")),i&&(n.set("roundData.controlFine",t.getIntValueOfSetting("CCFine")),n.set("roundData.min",(n.get("roundData.min")<<7)+0),n.set("roundData.max",(n.get("roundData.max")<<7)+127))):(n.set("roundData.min",t.getMaxValueOfSetting("CCRange")),n.set("roundData.max",t.getMinValueOfSetting("CCRange")),i&&(n.set("roundData.controlFine",t.getIntValueOfSetting("CCFine")),n.set("roundData.min",(n.get("roundData.min")<<7)+127),n.set("roundData.max",(n.get("roundData.max")<<7)+0))),n.set("roundData.demultiplier",t.getValueOfSetting("CCMode")==="Relative"?t.getIntValueOfSetting("CCDemultiplier"):0),n.set("roundData.channel",t.getIntValueOfSetting("CCChannel"))}else a|=ur.Pitchbend,n.set("roundData.min",-t.getMaxValueOfSetting("PitchbendRange")),n.set("roundData.max",t.getMaxValueOfSetting("PitchbendRange")),n.set("roundData.channel",t.getIntValueOfSetting("PitchbendChannel")),n.set("roundData.demultiplier",0);return n.set("roundData.roundOptions",a),n.set("roundData.length",360-2*35),[n.bytes]}loadMidiData(t,n){const a=_.at("MidiElementData",t,n);if(a.get("midiHeader.type")!==P.Round)return 0;const i=this.settings,r=a.get("midiHeader.version");if(r===1){const l=_.at("RoundDataV1",t,n);return i.setMaxValueOfSetting("Dynamic",l.get("midiElementData.depth")),i.setValueOfSetting("Function","Control Change"),i.setIntValueOfSetting("CC",l.get("roundData.control")),i.setIntValueOfSetting("CCChannel",l.get("roundData.channel")),i.setMinValueOfSetting("CCRange",l.get("roundData.min")),i.setMaxValueOfSetting("CCRange",l.get("roundData.max")),l.get("roundData.nbLoop")>0?(i.setValueOfSetting("CCMode","Relative"),i.setIntValueOfSetting("CCDemultiplier",l.get("roundData.nbLoop"))):(i.setValueOfSetting("CCMode","Absolute"),i.setIntValueOfSetting("CCDemultiplier",1)),i.setValueOfSetting("CCDirection","Natural"),i.setIntValueOfSetting("CC14Bits",0),ct("RoundDataV1")}if(r===2){const l=_.at("RoundDataV2",t,n);i.setMaxValueOfSetting("Dynamic",l.get("midiElementData.depth"));const s=l.get("roundData.roundOptions"),o=l.get("roundData.min"),u=l.get("roundData.max");if(s&ur.ControlChange){i.setValueOfSetting("Function","Control Change"),i.setIntValueOfSetting("CC",l.get("roundData.control")),o<=u?(i.setValueOfSetting("CCDirection","Natural"),u>127?(i.setIntValueOfSetting("CC14Bits",1),i.setIntValueOfSetting("CCFine",l.get("roundData.controlFine")),i.setMinValueOfSetting("CCRange",o>>7),i.setMaxValueOfSetting("CCRange",u>>7)):(i.setIntValueOfSetting("CC14Bits",0),i.setMinValueOfSetting("CCRange",o),i.setMaxValueOfSetting("CCRange",u))):(i.setValueOfSetting("CCDirection","Inverted"),o>127?(i.setIntValueOfSetting("CC14Bits",1),i.setIntValueOfSetting("CCFine",l.get("roundData.controlFine")),i.setMinValueOfSetting("CCRange",u>>7),i.setMaxValueOfSetting("CCRange",o>>7)):(i.setIntValueOfSetting("CC14Bits",0),i.setMinValueOfSetting("CCRange",u),i.setMaxValueOfSetting("CCRange",o))),i.setIntValueOfSetting("CCChannel",l.get("roundData.channel"));const d=l.get("roundData.demultiplier");d>0?(i.setValueOfSetting("CCMode","Relative"),i.setIntValueOfSetting("CCDemultiplier",d)):i.setValueOfSetting("CCMode","Absolute")}else s&ur.Pitchbend&&(i.setValueOfSetting("Function","Pitchbend"),i.setMaxValueOfSetting("PitchbendRange",u),i.setIntValueOfSetting("PitchbendChannel",l.get("roundData.channel")));return ct("RoundDataV2")}return 0}loadSettingFromXmlDescription(t,n){switch(n){case 0:case 1:{const a=(i,r)=>{t.name?.toLowerCase()===i.toLowerCase()&&(t.name=r)};a("Type","Function"),a("Channel","CCChannel"),a("Control","CC"),a("Control Change","CC"),a("Range","CCRange"),a("Direction","CCDirection"),a("Mode","CCMode"),a("Demultiplier","CCDemultiplier"),a("Pitchbend","PitchbendRange");break}case 2:break;default:return!1}return super.loadSettingFromXmlDescription(t,n)}}const Ym=["Blue","Red","Purple","Yellow","Pink","Green"];class da extends Pe{static VERSIONS=[1,3];static REVISION=1;get className(){return"Rounds"}constructor(t,n,a){super(t,n,a),this.finishInit(da.VERSIONS,da.REVISION)}get slotNbr(){return 1}get title(){return"Pro Rounds"}get summary(){return"Slide you fingers across the circles to control any parameter. There are tactile areas to easily access min, mid and max values. Absolute or infinite modes are available."}getDefaultColor(){return Ct("Yellow")}setFullPrivileges(t){super.setFullPrivileges(t),this.setColorChoices(t?Ym:["Yellow"])}getMidiStructure(){return[1,2,3,4].map(t=>({type:P.Round,name:`ROUND${t}`}))}getMidiDescription(){const t=super.getMidiDescription();return t?this.patchHeader(t,n=>{n.set("instrumentHeader.midiHeader.type",G.Rounds),n.set("instrumentHeader.midiHeader.version",da.VERSIONS[this.versionIndex]),n.set("revision",da.REVISION),n.set("instrumentHeader.color",this.color),n.set("options",this.moduleOptions),n.set("tagPosition",this.tagPosition)}):null}loadElementFromXmlDescription(t,n){return n<0||n>2?!1:super.loadElementFromXmlDescription(t,n)}loadSettingFromXmlDescription(t,n){switch(n){case 0:case 1:t.name?.toLowerCase()==="mode"&&(t.name=""),t.name?.toLowerCase()==="loopnbr"&&(t.name="");break;case 2:break;default:return!1}return super.loadSettingFromXmlDescription(t,n)}initModule(){const t=this.versionIndex,n=9;let a=1;this.addColorSetting(),this.setFullPrivileges(this.fullPrivileges),this.settings.addSetting(M.checkbox("ReadOnly","Locked",0));const i=[2,2][t],r=[2,2][t],l=[35.3,35.3][t],s=[35.3,35.3][t],o=[5,5][t],u=[3,3][t],d=[5.5,5.5][t],m=[5.5,5.5][t],c=[43.7,43.7][t],S=this.getMidiStructure();for(let y=0;y<r;y++)for(let v=0;v<i;v++){const x=new ot;x.dimensionMM={x:d+v*c,y:m+y*c,width:l,height:s},x.radiusMM=90,x.isColorizable=!0,this.addBackgroundElement(x);const g=new sv;g.function.value="Control Change",g.cc.value=a++,g.ccChannel.value=n,g.ccRange.limitMin=0,g.ccRange.limitMax=127,g.ccRange.valueMin=0,g.ccRange.valueMax=127,g.ccMode.value="Absolute",g.ccDemultiplier.value=2,g.ccDirection.value="Natural",g.cc14bitsEnable.value=0,g.ccFine.value=g.cc.value+1,g.pitchbendRange.limitMax=8192,g.pitchbendRange.valueMax=8192,g.pitchbendChannel.value=n,g.pitchbendDirection.value="Up";const h=new uv(g);h.name=S[y*i+v].name,h.elementId=y*i+v+1,h.layerNbr=1,h.z=0,h.depth=40,h.dimensionMM={x:d+u+v*c,y:m+u+y*c,width:l-2*u,height:s-2*u},h.touchAreaMM={x:d-o+v*c,y:m-o+y*c,width:l+2*o,height:s+2*o},h.radiusMM=90,h.isColorizable=!1,this.addElement(h)}}}class ga extends Pe{static VERSIONS=[1,3];static REVISION=1;get className(){return"Strips"}constructor(t,n,a){super(t,n,a),this.finishInit(ga.VERSIONS,ga.REVISION)}get slotNbr(){return 1}get title(){return"Pro Strips"}get summary(){return"Slide your fingers across the 4 strips to control any parameter. There are delimited tactile areas to easily access min, mid and max values. It can be used horizontally or vertically"}getDefaultColor(){return Ct("Blue")}setFullPrivileges(t){super.setFullPrivileges(t),this.setColorChoices(t?Ym:["Blue"])}getMidiStructure(){const t=[];for(let n=1;n<=4;n++)t.push({type:P.Strip,name:`STRIP${n}`}),t.push({type:P.Button,name:`BUTTON_MIN_${n}`}),t.push({type:P.Button,name:`BUTTON_MAX_${n}`});return t}settingDidChange(t){super.settingDidChange(t),t.dictionary.Name==="Orientation"&&(this.rotation=this.settings.getValueOfSetting("Orientation")==="Horizontal"?90:0,this.updateModuleView(),this.delegate?.modulePropertiesDidChange(this))}getMidiDescription(){for(const n of this.elementList){if(!n.name.startsWith("STRIP"))continue;const a=qe(n.name,5);for(const i of this.elementList){if(!i.name.startsWith("BUTTON")||qe(i.name,11)!==a)continue;const r=n.settings.getValueOfSetting("Function")==="Control Change";i.name.startsWith("BUTTON_MIN")&&(i.script=r?`x${n.elementId}.${V.ValueY}=${n.settings.getMinValueOfSetting("CCRange")};`:""),i.name.startsWith("BUTTON_MAX")&&(i.script=r?`x${n.elementId}.${V.ValueY}=${n.settings.getMaxValueOfSetting("CCRange")};`:"")}}const t=super.getMidiDescription();return t?this.patchHeader(t,n=>{n.set("instrumentHeader.midiHeader.type",G.Strips),n.set("instrumentHeader.midiHeader.version",ga.VERSIONS[this.versionIndex]),n.set("revision",ga.REVISION),n.set("instrumentHeader.color",this.color),n.set("options",this.moduleOptions),n.set("tagPosition",this.tagPosition)}):null}loadElementFromXmlDescription(t,n){return n<0||n>2?!1:super.loadElementFromXmlDescription(t,n)}initModule(){const t=this.versionIndex,n=8;let a=1;this.addColorSetting(),this.setFullPrivileges(this.fullPrivileges),this.settings.addSetting(M.checkbox("ReadOnly","Locked",0));const i=["Vertical","Horizontal"],r=this.moduleOptions&ie.Rotate90?"Horizontal":"Vertical";this.settings.addSetting(M.combobox("Orientation","Orientation",i,i,r));const l=[4,4][t],s=[17.6,17.6][t],o=[60,60][t],u=[5,5][t],d=[5,5][t],m=[20.6,20.6][t],c=[10,10][t],S=[2,2][t],y=[2,2][t],v=new ot;v.dimensionMM={x:S,y,width:90-2*S,height:90-2*y},v.radiusMM=3,v.isColorizable=!0,this.addBackgroundElement(v);const x=this.getMidiStructure();let g=1;for(let h=0;h<l;h++){const C=new qs;C.function.value="Control Change",C.cc.value=a++,C.ccChannel.value=n,C.ccRange.limitMin=0,C.ccRange.limitMax=127,C.ccRange.valueMin=0,C.ccRange.valueMax=127,C.ccMode.value="Absolute",C.ccDemultiplier.value=2,C.ccDirection.value="Natural",C.cc14bitsEnable.value=0,C.ccFine.value=C.cc.value+1,C.pitchbendRange.limitMax=8192,C.pitchbendRange.valueMax=8192,C.pitchbendChannel.value=n,C.pitchbendDirection.value="Up";const p=new tu(C);p.name=x[g-1].name,p.elementId=g++,p.layerNbr=1,p.z=0,p.depth=40,p.dimensionMM={x:u+h*m,y:d,width:s,height:o+2*c},p.touchAreaMM={x:u+h*m,y:d+c,width:s,height:o},p.radiusMM=1.5,p.isColorizable=!1,this.addElement(p);for(let b=0;b<2;b++){const A=new jn;A.name=x[g-1].name,A.elementId=g++,A.layerNbr=1,A.z=0,A.depth=40;const N={x:u+h*m,y:d+b*(c+o),width:s,height:c};A.dimensionMM=N,A.touchAreaMM={...N},A.isColorizable=!1,A.disabled=!0,A.noBackup=!0,this.addElement(A)}}}}const Yc={Fretless:1};class Fc{note=new T;noteChannel=new T;noteVelocity=new te;mode=new Q;fretNbr=new T}class $c extends ot{options;get className(){return"ElementString"}constructor(t){super(),this.revision=2,this.options=t;const n=this.settings,a=M.slider("Dynamic","Dynamic",127,this.depth);n.addSetting(a),a.hidden=!0;const i=M.combobox("Mode","Mode",["Fretted","Fretless"],["Fretted","Fretless"],t.mode.value);i.hidden=!t.mode.enable,n.addSetting(i);const r=M.combobox("NoteChannel","Channel",mt,mt,String(t.noteChannel.value));r.hidden=!t.noteChannel.enable,n.addSetting(r);const l=M.combobox("Note","Note",Hs,rt,String(t.note.value));l.hidden=!t.note.enable,n.addSetting(l);const s=M.range("NoteVelocity","Velocity",t.noteVelocity.limitMin,t.noteVelocity.limitMax,t.noteVelocity.valueMin,t.noteVelocity.valueMax);s.hidden=!t.noteVelocity.enable,n.addSetting(s)}getMidiObjectList(){const t=this.settings,n=new _("StringData");return n.set("midiElementData.midiHeader.type",P.String),n.set("midiElementData.midiHeader.version",1),n.set("midiElementData.options",H.RetrigCursor|this.midiOptions),Te(this,n),n.set("stringData.note",t.getIntValueOfSetting("Note")),n.set("stringData.fretNbr",this.options.fretNbr.value),n.set("stringData.channel",t.getIntValueOfSetting("NoteChannel")),n.set("stringData.velocityMin",t.getMinValueOfSetting("NoteVelocity")),n.set("stringData.velocityMax",t.getMaxValueOfSetting("NoteVelocity")),n.set("stringData.stringOptions",t.getValueOfSetting("Mode")==="Fretless"?Yc.Fretless:0),n.set("stringData.stringSize",0),[n.bytes]}loadMidiData(t,n){const a=_.at("MidiElementData",t,n);if(a.get("midiHeader.type")!==P.String||a.get("midiHeader.version")!==1)return 0;const i=_.at("StringData",t,n),r=this.settings;return r.setMaxValueOfSetting("Dynamic",i.get("midiElementData.depth")),r.setIntValueOfSetting("Note",i.get("stringData.note")),r.setIntValueOfSetting("NoteChannel",i.get("stringData.channel")),r.setMinValueOfSetting("NoteVelocity",i.get("stringData.velocityMin")),r.setMaxValueOfSetting("NoteVelocity",i.get("stringData.velocityMax")),r.setValueOfSetting("Mode",i.get("stringData.stringOptions")&Yc.Fretless?"Fretless":"Fretted"),ct("StringData")}loadSettingFromXmlDescription(t,n){switch(n){case 0:case 1:{t.name?.toLowerCase()==="channel"&&(t.name="NoteChannel"),t.name?.toLowerCase()==="velocity"&&(t.name="NoteVelocity");break}case 2:break;default:return!1}return super.loadSettingFromXmlDescription(t,n)}}const cv=[5,5,5,4,5],Ul=[cv],dv=["Blue","Red","Purple","Yellow","Pink","Green"],pl=["Channel","NoteChannel","CCChannel","PCChannel","PitchbendChannel","ScriptChannel"];function Ii(e,t,n=pl){for(const a of e)for(const i of n){const r=a.settings.getSettingWithName(i);r&&(r.disabled=t,r.update())}}function eu(e,t,n){const a=(i,r)=>{const l=new ot;l.radiusMM=1,l.layerNbr=2,l.dimensionMM={x:t.dimensionMM.x+t.dimensionMM.width/2-i/2,y:t.dimensionMM.y+t.dimensionMM.height/2-r/2,width:i,height:r},l.isColorizable=!1,e.addBackgroundElement(l)};n&&a(2,8),a(8,2)}const gv={versions:[1,3],revision:1,strings:[6,6],stringW:[157,157],stringH:[3,3],stringPitch:[12,12],stringBorderX:[3,3],stringBorderY:[13.5,13.5],stringTouchMarginY:[3,3],frets:[8,8],fretW:[2,2],fretPitch:[19.5,19.5],fretBorderX:[3,3],fretY:()=>({y:10.5,height:69}),stringTouchExtendX:[0,0],fretLines:[9,9],buttonsHorizontal:!1,octaveSigns:!0,firstButtonCC:0,buttonW:[14,14],buttonH:[14,14],octaveButtons:[2,2],octaveBorderX:[163.5,163.5],octaveBorderY:[48,48],octavePitch:[20,20],functionButtons:[2,2],functionBorderX:[163.5,163.5],functionBorderY:[8,8],functionPitch:[20,20]};class Fm extends Pe{get className(){return"Fretboard"}constructor(t,n,a){super(t,n,a),this.finishInit(this.cfg.versions,this.cfg.revision)}get cfg(){return gv}get moduleType(){return G.Fretboard}get slotNbr(){return 2}get title(){return"Pro Fretboard"}get summary(){return"With Fretboard, you can play guitar or any strings instrument like never. The module has 6 strings and 9 frets plus octave +/- buttons and 2 configurables buttons. The strings can be tuned all together or individually. Vibrato and bending are switchable depending on the musician's intention."}getDefaultColor(){return Ct("Yellow")}setFullPrivileges(t){super.setFullPrivileges(t),this.setColorChoices(t?dv:["Yellow"])}getMidiStructure(){const t=[];for(let n=1;n<=6;n++)t.push({type:P.String,name:`STRING${n}`});return t.push({type:P.Button,name:"OCTAVE-"}),t.push({type:P.Button,name:"OCTAVE+"}),t.push({type:P.Pad,name:"BUTTON1"}),t.push({type:P.Pad,name:"BUTTON2"}),t.push({type:P.Script,name:"INIT_SCRIPT"}),t}updateNotesWithTuning(t,n){if(t===-1||n===-1)return!1;const a=Ul[t];if(!a)return!1;for(const i of this.elementList)if(i.name.startsWith("STRING")){const r=qe(i.name,6)-1;let l=n;for(let s=0;s<r;s++)l+=a[s%a.length];i.settings.setIntValueOfSetting("Note",l)}return!0}updateModuleView(){if(this.invalid)return;super.updateModuleView();const t=this.settings.getIntValueOfSetting("MPE"),n=this.settings.getSettingWithName("MpeChannels");n&&(n.disabled=t===0,n.update());const a=this.settings.getIntValueOfSetting("Expert");for(const o of this.elementList)o.name.startsWith("STRING")?o.disabled=a===0:o.name.startsWith("ALL_STRINGS")&&(o.disabled=a!==0);if(!this.elementList.find(o=>o.name==="ALL_STRINGS"))return;const r=this.settings.getSettingWithName("Vibrato"),l=this.settings.getSettingWithName("VibratoValue"),s=this.settings.getSettingWithName("PitchRange");this.settings.getIntValueOfSetting("Fretless")===1?(r&&(r.intValue=0,r.disabled=!0),l&&(l.disabled=!0),s&&(s.disabled=!1)):(r&&(r.disabled=!1),l&&(l.disabled=!1),s&&(s.disabled=!0)),Ii(this.elementList,t===1)}settingDidChange(t){super.settingDidChange(t);const n=t.dictionary.Name;if(n==="Expert"){this.updateModuleView(),this.delegate?.modulePropertiesDidChange(this);return}if(n==="MPE"){this.updateModuleView();return}const a=this.elementList.find(r=>r.name==="ALL_STRINGS");if(!a)return;const i=t.settings?.owner;if(i===a){const r=t.dictionary.Value,l=a.settings.getIntValueOfSetting("Note"),s=a.settings.getIntValueOfSetting("Tunning");if(n==="Tunning"||n==="Note")this.updateNotesWithTuning(s,l);else for(const o of this.elementList)o!==i&&o.name.startsWith("STRING")&&o.settings.setValueOfSetting(n,r)}else i instanceof ot&&i.name.startsWith("STRING")&&(n==="Note"||n==="Tunning"?(a.settings.setValueOfSetting("Note",""),a.settings.setValueOfSetting("Tunning","")):a.settings.setValueOfSetting(n,""))}prepareString(t){}vibratoScript(){const t=this.settings.getSettingWithName("Vibrato");let n;if(t&&!t.disabled)n=this.settings.getMaxValueOfSetting("VibratoValue");else{const a=this.settings.getIntValueOfSetting("PitchRange");n=a===0?0:Math.trunc(8192/a)*this.cfg.frets[this.versionIndex]}return`c${P.String}.${V.LimitX}=${n};`}readFirstString(t){}readInitScript(t){mv(this,t)}getMidiDescription(){if(!this.elementList.find(r=>r.name.startsWith("ALL_STRINGS")))return null;const n=this.settings.getValueOfSetting("Dynamic")==="Low",a=P.String;for(const r of this.elementList)if(r.name.startsWith("OCTAVE-"))r.script=`c${a}.${V.ValueZ}-12;`;else if(r.name.startsWith("OCTAVE+"))r.script=`c${a}.${V.ValueZ}+12;`;else if(r.name.startsWith("BUTTON"))r.settings.setMaxValueOfSetting("Dynamic",n?U.PadLow:U.PadHigh),r.settings.setValueOfSetting("AftertouchType",this.settings.getValueOfSetting("AftertouchType"));else if(r.name.startsWith("STRING"))r.settings.setMaxValueOfSetting("Dynamic",n?U.StringLow:U.StringHigh),this.prepareString(r);else if(r.name.startsWith("INIT_SCRIPT")){let l=this.vibratoScript();l+=`c${a}.${V.LimitY}=${this.settings.getMaxValueOfSetting("BendingValue")};`,this.settings.getIntValueOfSetting("Vibrato")===1&&(l+=`c${a}.${V.ValueX}=1;`),this.settings.getIntValueOfSetting("Bending")===1&&(l+=`c${a}.${V.ValueY}=1;`),this.settings.getIntValueOfSetting("Aftertouch")===1&&(l+=this.settings.getValueOfSetting("AftertouchType")==="Polyphonic"?`c${a}.${V.PolyphonicAftertouch}=1;`:`c${a}.${V.ChannelAftertouch}=1;`),r.script=l}const i=super.getMidiDescription();return i?this.patchHeader(i,r=>{r.set("instrumentHeader.midiHeader.type",this.moduleType),r.set("instrumentHeader.midiHeader.version",this.cfg.versions[this.versionIndex]),r.set("revision",this.cfg.revision),r.set("instrumentHeader.color",this.color),r.set("tagPosition",this.tagPosition),r.set("options",ka(this))}):null}loadMidiData(t){const n=super.loadMidiData(t);if(n===0)return 0;La(this,t);const a=this.elementList.find(c=>c.name==="ALL_STRINGS");if(!a)return 0;const i=[];let r=!0,l,s=-1,o=-1e4,u=1e4;for(const c of this.elementList)c.name.startsWith("STRING")?(i[qe(c.name,6)-1]=c,r?(r=!1,s=c.settings.getIntValueOfSetting("NoteChannel"),o=c.settings.getMinValueOfSetting("NoteVelocity"),u=c.settings.getMaxValueOfSetting("NoteVelocity"),this.settings.setValueOfSetting("Dynamic",c.settings.getMaxValueOfSetting("Dynamic")===U.StringLow?"Low":"High"),this.readFirstString(c)):(c.settings.getIntValueOfSetting("NoteChannel")!==s&&(s=-1),c.settings.getMinValueOfSetting("NoteVelocity")!==o&&(o=-1),c.settings.getMaxValueOfSetting("NoteVelocity")!==u&&(u=-1))):c.name.startsWith("INIT_SCRIPT")&&(this.settings.setIntValueOfSetting("Vibrato",0),this.settings.setIntValueOfSetting("Bending",0),this.settings.setIntValueOfSetting("Aftertouch",0),this.readInitScript(c.script??""));let d=0;l=i[0].settings.getIntValueOfSetting("Note");let m;do{m=!1;for(let c=1;c<this.cfg.strings[this.versionIndex];c++){const S=i[c-1].settings.getIntValueOfSetting("Note"),y=i[c].settings.getIntValueOfSetting("Note"),v=Ul[d];if(y!==S+v[(c-1)%v.length]){if(d++,d>=Ul.length){d=-1,l=-1;break}m=!0;break}}}while(m);return a.settings.setIntValueOfSetting("Tunning",d),a.settings.setIntValueOfSetting("Note",l),a.settings.setIntValueOfSetting("NoteChannel",s),o===-1||u===-1?a.settings.setValueOfSetting("NoteVelocity",""):(a.settings.setMinValueOfSetting("NoteVelocity",o),a.settings.setMaxValueOfSetting("NoteVelocity",u)),n}loadElementFromXmlDescription(t,n){switch(n){case 0:case 1:t.name?.startsWith("FUNCTION")&&(t.name=t.name.split("FUNCTION").join("BUTTON"));break;case 2:break;default:return!1}return super.loadElementFromXmlDescription(t,n)}addModuleSettings(){const t=this.settings;this.addColorSetting(),this.setFullPrivileges(this.fullPrivileges),t.addSetting(M.checkbox("ReadOnly","Locked",0)),t.addSetting(M.checkbox("Vibrato","Vibrato",1)),t.addSetting(M.checkbox("Bending","Bending",1)),t.addSetting(M.checkbox("Aftertouch","Aftertouch",0)),t.addSetting(M.checkbox("MPE","MPE",0)),t.addSetting(M.checkbox("Expert","Custom mapping",0));const n=M.category("Advanced","Advanced settings");t.addSetting(n),n.addSetting(M.combobox("Dynamic","Pressure range",["Low","High"],["Low","High"],"Low")),n.addSetting(M.combobox("MpeChannels","MPE Channels",["1-16","1-8","9-16"],["1-16","1-8","9-16"],"1-16")),n.addSetting(M.combobox("AftertouchType","Aftertouch",["Polyphonic","Channel"],["Polyphonic","Channel"],"Channel")),n.addSetting(M.slider("VibratoValue","Vibrato",8192,1024)),n.addSetting(M.slider("BendingValue","Bending",8192,4096))}get defaultStringMode(){return"Fretted"}get stringsInitiallyDisabled(){return!0}get tuningTitle(){return"Tuning"}configureFunctionButton(t,n){}addSurfaceElements(t,n){}initModule(){const t=this.versionIndex,n=this.cfg,a=40,i=2;let r=0,l=n.firstButtonCC,s=0;this.addModuleSettings();for(let y=0;y<n.fretLines[t];y++){const v=new ot,x=n.fretY(t,y);v.dimensionMM={x:n.fretBorderX[t]+y*n.fretPitch[t],y:x.y,width:n.fretW[t],height:x.height},v.isColorizable=!0,v.radiusMM=1.5,this.addBackgroundElement(v)}const o=this.getMidiStructure();let u=1;for(let y=0;y<n.strings[t];y++){const v=new Fc;v.noteChannel.value=i,v.note.value=0,v.noteVelocity.limitMin=1,v.noteVelocity.limitMax=127,v.noteVelocity.valueMin=50,v.noteVelocity.valueMax=127,v.fretNbr.value=n.frets[t],v.mode.value=this.defaultStringMode,v.mode.enable=!1;const x=new $c(v);x.name=o[u-1].name,x.elementId=u++,x.layerNbr=1,x.z=0,x.depth=30,x.dimensionMM={x:n.stringBorderX[t],y:n.stringBorderY[t]+y*n.stringPitch[t],width:n.stringW[t],height:n.stringH[t]},x.touchAreaMM={x:n.stringBorderX[t]-n.stringTouchExtendX[t],y:n.stringBorderY[t]-n.stringTouchMarginY[t]+y*n.stringPitch[t],width:n.stringW[t]+n.stringTouchExtendX[t],height:n.stringH[t]+2*n.stringTouchMarginY[t]},x.radiusMM=1.5,x.isColorizable=!0,x.disabled=this.stringsInitiallyDisabled,this.addElement(x)}const d=new Fc;d.note.value=a,d.noteChannel.value=i,d.noteVelocity.limitMin=1,d.noteVelocity.limitMax=127,d.noteVelocity.valueMin=50,d.noteVelocity.valueMax=127;const m=new $c(d);m.dimensionMM={x:n.stringBorderX[t],y:n.stringBorderY[t],width:n.stringW[t],height:90-2*n.stringBorderY[t]},m.name="ALL_STRINGS",m.isColorizable=!1,m.invisible=!0,m.disabled=!1,m.radiusMM=1.5,this.addElement(m);const c=m.settings.getSettingWithName("Note");c.dictionary.Title="First note",m.settings.addSettingAfter(M.combobox("Tunning",this.tuningTitle,["Guitar"],["0"],"0"),c),this.updateNotesWithTuning(0,a);for(let y=0;y<n.octaveButtons[t];y++){const v=new jn;v.name=o[u-1].name,v.elementId=u++,v.layerNbr=1,v.z=0,v.depth=40;const x=n.buttonsHorizontal?{x:n.octaveBorderX[t]+y*n.octavePitch[t],y:n.octaveBorderY[t],width:n.buttonW[t],height:n.buttonH[t]}:{x:n.octaveBorderX[t],y:n.octaveBorderY[t]+y*n.octavePitch[t],width:n.buttonW[t],height:n.buttonH[t]};v.dimensionMM=x,v.touchAreaMM={...x},v.radiusMM=3,v.isColorizable=!0,v.noBackup=!0,v.disabled=!0,this.addElement(v),n.octaveSigns&&eu(this,v,y!==0)}for(let y=0;y<n.functionButtons[t];y++){const v=new oe;v.function.value="Channel selection",v.note.value=r++,v.noteChannel.value=i,v.noteVelocity.limitMin=1,v.noteVelocity.limitMax=127,v.noteVelocity.valueMin=127,v.noteVelocity.valueMax=127,v.noteVelocity.enable=!1,v.cc.value=l++,v.ccChannel.value=i,v.ccRange.limitMin=0,v.ccRange.limitMax=127,v.ccRange.valueMin=0,v.ccRange.valueMax=127,v.ccDirection.value="Natural",v.pc.value=s++,v.pcChannel.value=i,v.pitchbendChannel.value=i,v.pitchbendRange.limitMax=8192,v.pitchbendRange.valueMax=8192,v.pitchbendDirection.value="Up",v.scriptTarget.value=`c${P.String}`,v.scriptChannel.enable=!0,v.scriptChannelValue.value=i+y,v.scriptVibrato.enable=!0,v.scriptBending.enable=!0,v.scriptPolyAftertouch.enable=!0,v.scriptChannelAftertouch.enable=!0,this.configureFunctionButton(v,y);const x=new Xt(v);x.name=o[u-1].name,x.elementId=u++,x.layerNbr=1,x.z=0,x.depth=40;const g=n.buttonsHorizontal?{x:n.functionBorderX[t]+y*n.functionPitch[t],y:n.functionBorderY[t],width:n.buttonW[t],height:n.buttonH[t]}:{x:n.functionBorderX[t],y:n.functionBorderY[t]+y*n.functionPitch[t],width:n.buttonW[t],height:n.buttonH[t]};x.dimensionMM=g,x.touchAreaMM={...g},x.radiusMM=3,x.isColorizable=!0,x.disabled=!1,this.addElement(x)}this.addSurfaceElements(()=>({name:o[u-1].name,id:u++}),i);const S=new zn;S.name=o[u-1].name,S.elementId=u++,S.disabled=!0,S.noBackup=!0,this.addElement(S)}}function ka(e){let t=e.moduleOptions;if(e.settings.getIntValueOfSetting("MPE")===1){t|=ie.Mpe;const n=e.settings.getValueOfSetting("MpeChannels");n==="1-8"?t|=ie.MpeBegin:n==="9-16"&&(t|=ie.MpeEnd)}return t}function La(e,t){const n=_.at("InstrumentData",t,0).get("options");n&ie.Mpe?(e.settings.setIntValueOfSetting("MPE",1),n&ie.MpeBegin?e.settings.setValueOfSetting("MpeChannels","1-8"):n&ie.MpeEnd?e.settings.setValueOfSetting("MpeChannels","9-16"):e.settings.setValueOfSetting("MpeChannels","1-16")):e.settings.setIntValueOfSetting("MPE",0)}function mv(e,t){const n=e.settings;for(const a of Ra(t))switch(a.parameter){case V.LimitX:n.setMaxValueOfSetting("VibratoValue",a.readValue());break;case V.LimitY:n.setMaxValueOfSetting("BendingValue",a.readValue());break;case V.ValueX:n.setIntValueOfSetting("Vibrato",1);break;case V.ValueY:n.setIntValueOfSetting("Bending",1);break;case V.PolyphonicAftertouch:n.setIntValueOfSetting("Aftertouch",1),n.setValueOfSetting("AftertouchType","Polyphonic");break;case V.ChannelAftertouch:n.setIntValueOfSetting("Aftertouch",1),n.setValueOfSetting("AftertouchType","Channel");break}}const hv=["Blue","Red","Purple","Yellow","Pink","Green"],_c=["12","24","48","96"],fv=24,pv={versions:[3],revision:1,strings:[6],stringW:[238.5+1],stringH:[3],stringPitch:[12],stringBorderX:[9.5],stringBorderY:[13.5],stringTouchMarginY:[3],stringTouchExtendX:[6.5],fretLines:[14],buttonsHorizontal:!1,octaveSigns:!0,firstButtonCC:0,frets:[13],fretW:[2],fretY:(e,t)=>t===0||t===1||t===13?{y:9,height:72}:{y:15,height:60},fretPitch:[18.81],fretBorderX:[2.5],buttonW:[14],buttonH:[14],octaveButtons:[2],octaveBorderX:[253.35],octaveBorderY:[48],octavePitch:[20],functionButtons:[2],functionBorderX:[253.35],functionBorderY:[8],functionPitch:[20]};class $m extends Fm{get className(){return"GrandFretboard"}get cfg(){return pv}get moduleType(){return G.GrandFretboard}get slotNbr(){return 3}get title(){return"Pro Grand Fretboard"}get summary(){return"With Grand Fretboard, you can play guitar or any strings instrument like never. The module has 6 strings and 14 frets plus octave +/- buttons and 2 configurables buttons. The strings can be tuned all together or individually. Vibrato and bending are switchable depending on the musician's intention."}getDefaultColor(){return Ct("Red")}setFullPrivileges(t){Ze.prototype.setFullPrivileges.call(this,t),this.setColorChoices(t?hv:["Red"])}loadElementFromXmlDescription(t,n){return Ze.prototype.loadElementFromXmlDescription.call(this,t,n)}settingDidChange(t){if(t.dictionary.Name==="Fretless"){Ze.prototype.settingDidChange.call(this,t),this.updateModuleView();return}super.settingDidChange(t)}prepareString(t){t.settings.setValueOfSetting("Mode",this.settings.getIntValueOfSetting("Fretless")===1?"Fretless":"Fretted")}vibratoScript(){const t=this.settings.getSettingWithName("Vibrato"),n=t&&!t.disabled?this.settings.getMaxValueOfSetting("VibratoValue"):this.settings.getIntValueOfSetting("PitchRange");return`c${P.String}.${V.StartX}=${n};`}readFirstString(t){this.settings.setIntValueOfSetting("Fretless",t.settings.getValueOfSetting("Mode")==="Fretted"?0:1)}readInitScript(t){const n=this.settings;n.setIntValueOfSetting("Vibrato",0),n.setIntValueOfSetting("Bending",0),n.setIntValueOfSetting("Aftertouch",0);const a=n.getIntValueOfSetting("Fretless")===1;for(const i of Ra(t))switch(i.parameter){case V.LimitX:n.setMaxValueOfSetting("VibratoValue",i.readValue());break;case V.StartX:a||iv.fretlessStartXReadBack?n.setIntValueOfSetting("PitchRange",i.readValue()):n.setMaxValueOfSetting("VibratoValue",i.readValue());break;case V.LimitY:n.setMaxValueOfSetting("BendingValue",i.readValue());break;case V.ValueX:n.setIntValueOfSetting("Vibrato",1);break;case V.ValueY:n.setIntValueOfSetting("Bending",1);break;case V.PolyphonicAftertouch:n.setIntValueOfSetting("Aftertouch",1),n.setValueOfSetting("AftertouchType","Polyphonic");break;case V.ChannelAftertouch:n.setIntValueOfSetting("Aftertouch",1),n.setValueOfSetting("AftertouchType","Channel");break}}get fretlessDefaults(){return{bending:0,mpe:1,pitchRange:"24"}}addModuleSettings(){const t=this.settings,n=this.fretlessDefaults;this.addColorSetting(),this.setFullPrivileges(this.fullPrivileges),t.addSetting(M.checkbox("ReadOnly","Locked",0)),t.addSetting(M.checkbox("Fretless","Fretless",1)),t.addSetting(M.checkbox("Vibrato","Vibrato",0)),t.addSetting(M.checkbox("Bending","Bending",n.bending)),t.addSetting(M.checkbox("Aftertouch","Aftertouch",0)),t.addSetting(M.checkbox("MPE","MPE",n.mpe)),t.addSetting(M.checkbox("Expert","Custom mapping",0));const a=M.category("Advanced","Advanced settings");t.addSetting(a),a.addSetting(M.combobox("Dynamic","Pressure range",["Low","High"],["Low","High"],"Low")),a.addSetting(M.combobox("MpeChannels","MPE Channels",["1-16","1-8","9-16"],["1-16","1-8","9-16"],"1-16")),a.addSetting(M.combobox("AftertouchType","Aftertouch",["Polyphonic","Channel"],["Polyphonic","Channel"],"Channel")),a.addSetting(M.slider("VibratoValue","Vibrato",8192,1024)),a.addSetting(M.slider("BendingValue","Bending",8192,800)),a.addSetting(M.combobox("PitchRange","Fretless PitchRange",_c.map(i=>`${i} semitones`),_c,n.pitchRange))}get defaultStringMode(){return"Fretless"}get stringsInitiallyDisabled(){return!1}get tuningTitle(){return"Tunning"}configureFunctionButton(t,n){t.function.value=n===0?"Fretless on/off":"Bending on/off",this.addFretlessScript(t)}addFretlessScript(t){const n=P.String;t.scriptFretless.value=`c${n}.${V.StartX}=${fv};c${n}.${V.Fretless}^1;`,t.scriptFretless.enable=!0}}const Sv=["Blue","Red","Purple","Yellow","Pink","Green"],zc=["2","3","4","5","7","12","24","48","96"],Y={versions:[1,3],revision:1,buttonW:[14,14],buttonH:[14,14],octaveButtons:[2,2],octaveBorderX:[8.42,8.42],octaveBorderY:[71.75,71.75],octavePitch:[29.83,29.83],functionButtons:[4,4],functionBorderX:[68.08,68.08],functionBorderY:[71.75,71.75],functionPitch:[29.83,29.83],whiteKeys:[12,12],whiteW:[12.91,12.91],whiteH:[66,66],whiteBorderX:[1.5,1.5],whiteBorderY:[1.5,1.5],whiteSpace:[2,2],whiteTouchX:[0,0],whiteTouchY:[0,0],blackKeys:[8,8],blackW:[7.7,7.7],blackH:[36,36],blackBorderY:[30.5,30.5],blackTouchX:[1,1]},vv="WBWBWBWWBWBWWBWBWBWW";class yv extends Pe{get className(){return"Synth"}constructor(t,n,a){super(t,n,a),this.finishInit(Y.versions,Y.revision)}get slotNbr(){return 2}get title(){return"Pro Synth"}get summary(){return"The Synth is a 1,5 octave keyboard with octave +/- buttons and 4 configurable buttons. Aftertouch, natural vibrato and glissendo gives it unique expressiveness."}getDefaultColor(){return Ct("Blue")}setFullPrivileges(t){super.setFullPrivileges(t),this.setColorChoices(t?Sv:["Blue"])}getMidiStructure(){const t=[];for(let n=1;n<=20;n++)t.push({type:P.Pad,name:`KEY${n}`});t.push({type:P.Glide,name:"GLISSANDO"}),t.push({type:P.Button,name:"OCTAVE-"}),t.push({type:P.Button,name:"OCTAVE+"});for(let n=1;n<=4;n++)t.push({type:P.Pad,name:`BUTTON${n}`});return t.push({type:P.Script,name:"INIT_SCRIPT"}),t}updateModuleView(){if(this.invalid)return;super.updateModuleView();const t=this.settings.getSettingWithName("Vibrato"),n=this.settings.getSettingWithName("VibratoValue");this.settings.getIntValueOfSetting("Glissando")===1?(t&&(t.disabled=!0,t.intValue=0),n&&(n.disabled=!0)):(t&&(t.disabled=!1),n&&(n.disabled=!1));const a=this.settings.getIntValueOfSetting("MPE"),i=this.settings.getSettingWithName("MpeChannels");i&&(i.disabled=a===0,i.update()),Ii(this.elementList,a===1)}settingDidChange(t){super.settingDidChange(t);const n=t.dictionary.Name;(n==="MPE"||n==="Glissando")&&this.updateModuleView()}getMidiDescription(){const t=this.elementList.find(c=>c.name.startsWith("ALL_KEYS"));if(!t)return null;const n=t.settings,a=n.getIntValueOfSetting("Note"),i=n.getIntValueOfSetting("Channel"),r=n.getMinValueOfSetting("NoteVelocity"),l=n.getMaxValueOfSetting("NoteVelocity"),s=n.getIntValueOfSetting("YControlEnable"),o=this.settings.getValueOfSetting("Dynamic")==="Low",u=this.settings.getIntValueOfSetting("Glissando")===1,d="l{2,3}";for(const c of this.elementList)if(c.name.startsWith("KEY")){const S=qe(c.name,3);c.midiOptions=u?H.CaptureCursor:0,c.settings.setIntValueOfSetting("Note",a+S-1),c.settings.setIntValueOfSetting("NoteChannel",i),c.settings.setMinValueOfSetting("NoteVelocity",r),c.settings.setMaxValueOfSetting("NoteVelocity",l),c.settings.setIntValueOfSetting("YControlEnable",s),c.settings.setMaxValueOfSetting("Dynamic",o?U.KeyLow:U.KeyHigh)}else if(c.name.startsWith("GLISSANDO"))c.settings.setIntValueOfSetting("PitchRange",this.settings.getIntValueOfSetting("GlissandoRange"));else if(c.name.startsWith("BUTTON"))c.settings.setMaxValueOfSetting("Dynamic",o?U.PadLow:U.PadHigh),c.settings.setValueOfSetting("AftertouchType",this.settings.getValueOfSetting("AftertouchType"));else if(c.name.startsWith("OCTAVE-"))c.script=`${d}.${V.ValueZ}-12;`;else if(c.name.startsWith("OCTAVE+"))c.script=`${d}.${V.ValueZ}+12;`;else if(c.name.startsWith("INIT_SCRIPT")){let S=`${d}.${V.LimitX}=${this.settings.getMaxValueOfSetting("VibratoValue")};`;S+=`${d}.${V.ValueY}=${n.getIntValueOfSetting("YControl")};`,S+=`${d}.${V.StartY}=${n.getIntValueOfSetting("YControlOrigin")};`,this.settings.getIntValueOfSetting("Vibrato")===1&&(S+=`${d}.${V.ValueX}=1;`),this.settings.getIntValueOfSetting("Aftertouch")===1&&(S+=this.settings.getValueOfSetting("AftertouchType")==="Polyphonic"?`${d}.${V.PolyphonicAftertouch}=1;`:`${d}.${V.ChannelAftertouch}=1;`),S+=`c${P.Glide}.${V.ValueZ}=${u?1:0};`,c.script=S}const m=super.getMidiDescription();return m?this.patchHeader(m,c=>{c.set("instrumentHeader.midiHeader.type",G.Synth),c.set("instrumentHeader.midiHeader.version",Y.versions[this.versionIndex]),c.set("revision",Y.revision),c.set("instrumentHeader.color",this.color),c.set("tagPosition",this.tagPosition),c.set("options",ka(this))}):null}loadMidiData(t){const n=super.loadMidiData(t);if(n===0)return 0;La(this,t);const a=this.elementList.find(i=>i.name==="ALL_KEYS");return a?(_m(this,a,"KEY1",U.KeyLow),n):0}loadElementFromXmlDescription(t,n){switch(n){case 0:case 1:t.name?.toLowerCase()==="keys"&&(t.name="ALL_KEYS"),t.name?.startsWith("FUNCTION")&&(t.name=t.name.split("FUNCTION").join("BUTTON"));break;case 2:break;default:return!1}return super.loadElementFromXmlDescription(t,n)}initModule(){const t=this.versionIndex,n=53,a=4;let i=0,r=0,l=0;const s=this.settings;this.addColorSetting(),this.setFullPrivileges(this.fullPrivileges),s.addSetting(M.checkbox("ReadOnly","Locked",0)),s.addSetting(M.checkbox("Vibrato","Vibrato",0)),s.addSetting(M.checkbox("Glissando","Glissando",0)),s.addSetting(M.checkbox("Aftertouch","Aftertouch",0)),s.addSetting(M.checkbox("MPE","MPE",0));const o=M.category("Advanced","Advanced settings");s.addSetting(o),o.addSetting(M.combobox("Dynamic","Pressure range",["Low","High"],["Low","High"],"Low")),o.addSetting(M.combobox("MpeChannels","MPE Channels",["1-16","1-8","9-16"],["1-16","1-8","9-16"],"1-16")),o.addSetting(M.slider("VibratoValue","Vibrato",8192,1024)),o.addSetting(M.combobox("GlissandoRange","Glissando",zc.map(b=>`${b} semitones`),zc,"24")),o.addSetting(M.combobox("AftertouchType","Aftertouch",["Polyphonic","Channel"],["Polyphonic","Channel"],"Channel"));const u=this.getMidiStructure();let d=1,m=0;const c=Y.whiteKeys[t]+Y.blackKeys[t];for(let b=0;b<c;b++){const A=vv[b]!=="B",N=new oe;N.function.value="Note",N.note.value=0;const E=new Xt(N);E.noBackup=!0,E.name=u[d-1].name,E.elementId=d++;const B=Y.whiteW[t]+Y.whiteSpace[t];if(A)E.layerNbr=2,E.radiusMM=3,E.dimensionMM={x:Y.whiteBorderX[t]+m*B,y:Y.whiteBorderY[t],width:Y.whiteW[t],height:Y.whiteH[t]},E.touchAreaMM={x:Y.whiteBorderX[t]+m*B+Y.whiteTouchX[t],y:Y.whiteBorderY[t],width:Y.whiteW[t]-2*Y.whiteTouchX[t],height:Y.whiteH[t]-Y.whiteTouchY[t]},E.isColorizable=!1,m++;else{E.layerNbr=3,E.radiusMM=1.5;const R=Y.whiteBorderX[t]+m*B-(Y.blackW[t]/2+Y.whiteSpace[t]/2);E.dimensionMM={x:R,y:Y.blackBorderY[t],width:Y.blackW[t],height:Y.blackH[t]},E.touchAreaMM={x:R-Y.blackTouchX[t],y:Y.blackBorderY[t],width:Y.blackW[t]+2*Y.blackTouchX[t],height:Y.blackH[t]},E.isColorizable=!0}E.z=0,E.depth=40,E.disabled=!0,this.addElement(E)}const S=new Ks;S.channel.value=a,S.note.value=n,S.noteVelocity.limitMin=1,S.noteVelocity.limitMax=127,S.noteVelocity.valueMin=50,S.noteVelocity.valueMax=127,S.yControlEnable.value=0,S.yControl.value=74,S.yControlOrigin.value=64;const y=new Di(S);y.dimensionMM={x:Y.whiteBorderX[t],y:Y.whiteBorderY[t],width:this.slotNbr*90-2*Y.whiteBorderX[t],height:Y.whiteH[t]},y.name="ALL_KEYS",y.radiusMM=3,y.isColorizable=!1,y.invisible=!0,y.noMidi=!0,this.addElement(y);const v=y.settings.getSettingWithName("Note");v.dictionary.Title="First note",v.dictionary.Fields=["5 - F-2","17 - F-1","29 - F0","41 - F1","53 - F2","65 - F3","77 - F4","89 - F5","101 - F6"],v.dictionary.Values=["5","17","29","41","53","65","77","89","101"];const x=new Qs;x.pitchRange.value=24,x.elementNbr.value=c,x.elementType.value=P.Pad,x.elementList.values=Array.from({length:c},(b,A)=>String(A+1));const g=new Js(x);g.name=u[d-1].name,g.elementId=d++,g.layerNbr=4,g.z=0,g.depth=40;const h={x:Y.whiteBorderX[t]/2,y:Y.whiteBorderY[t],width:this.slotNbr*90-Y.whiteBorderX[t],height:Y.whiteH[t]};g.dimensionMM=h,g.touchAreaMM={...h},g.isColorizable=!1,g.invisible=!0,g.disabled=!0,this.addElement(g);for(let b=0;b<Y.octaveButtons[t];b++){const A=new jn;A.name=u[d-1].name,A.elementId=d++,A.layerNbr=1,A.z=0,A.depth=40;const N={x:Y.octaveBorderX[t]+b*Y.octavePitch[t],y:Y.octaveBorderY[t],width:Y.buttonW[t],height:Y.buttonH[t]};A.dimensionMM=N,A.touchAreaMM={...N},A.radiusMM=3,A.isColorizable=!0,A.noBackup=!0,A.disabled=!0,this.addElement(A),eu(this,A,b!==0)}const C=["Channel selection","Channel selection","Sustain on/off","Vibrato on/off"];for(let b=0;b<Y.functionButtons[t];b++){const A=new oe;A.function.value=C[b],A.note.value=i++,A.noteChannel.value=a,A.noteVelocity.limitMin=1,A.noteVelocity.limitMax=127,A.noteVelocity.valueMin=127,A.noteVelocity.valueMax=127,A.noteVelocity.enable=!1,A.cc.value=r++,A.ccChannel.value=a,A.ccRange.limitMin=0,A.ccRange.limitMax=127,A.ccRange.valueMin=0,A.ccRange.valueMax=127,A.ccDirection.value="Natural",A.pc.value=l++,A.pcChannel.value=a,A.pitchbendChannel.value=a,A.pitchbendRange.limitMax=8192,A.pitchbendRange.valueMax=8192,A.pitchbendDirection.value="Up",A.scriptTarget.value="l{2,3}",A.scriptChannel.enable=!0,A.scriptChannelValue.value=a+b%2,A.scriptVibrato.enable=!0,A.scriptSustain.enable=!0,A.scriptPolyAftertouch.enable=!0,A.scriptChannelAftertouch.enable=!0,A.scriptYControl.enable=!0,A.scriptGlissando.value=`l{2,3}.${V.Options}^${H.CaptureCursor};c${P.Glide}.${V.ValueZ}^1;`;const N=new Xt(A);N.name=u[d-1].name,N.elementId=d++,N.layerNbr=1,N.z=0,N.depth=40;const E={x:Y.functionBorderX[t]+b*Y.functionPitch[t],y:Y.functionBorderY[t],width:Y.buttonW[t],height:Y.buttonH[t]};N.dimensionMM=E,N.touchAreaMM={...E},N.radiusMM=3,N.isColorizable=!0,N.disabled=!1,this.addElement(N)}const p=new zn;p.name=u[d-1].name,p.elementId=d++,p.disabled=!0,p.noBackup=!0,this.addElement(p)}}function _m(e,t,n,a){e.settings.setIntValueOfSetting("Glissando",0);for(const i of e.elementList)if(i.name===n)e.settings.setValueOfSetting("Dynamic",i.settings.getMaxValueOfSetting("Dynamic")===a?"Low":"High"),t.settings.setIntValueOfSetting("Note",i.settings.getIntValueOfSetting("Note")),t.settings.setIntValueOfSetting("Channel",i.settings.getIntValueOfSetting("NoteChannel")),t.settings.setMinValueOfSetting("NoteVelocity",i.settings.getMinValueOfSetting("NoteVelocity")),t.settings.setMaxValueOfSetting("NoteVelocity",i.settings.getMaxValueOfSetting("NoteVelocity")),t.settings.setIntValueOfSetting("YControlEnable",i.settings.getIntValueOfSetting("YControlEnable"));else if(i.name.startsWith("GLISSANDO"))e.settings.setIntValueOfSetting("GlissandoRange",i.settings.getIntValueOfSetting("PitchRange"));else if(i.name.startsWith("INIT_SCRIPT")){const r=e.settings;r.setIntValueOfSetting("Vibrato",0),r.setIntValueOfSetting("Aftertouch",0);for(const l of Ra(i.script??""))switch(l.parameter){case V.LimitX:r.setMaxValueOfSetting("VibratoValue",l.readValue());break;case V.ValueX:r.setIntValueOfSetting("Vibrato",1);break;case V.StartY:t.settings.setIntValueOfSetting("YControlOrigin",l.readValue());break;case V.ValueY:t.settings.setIntValueOfSetting("YControl",l.readValue());break;case V.ValueZ:r.setIntValueOfSetting("Glissando",l.readValue());break;case V.PolyphonicAftertouch:r.setIntValueOfSetting("Aftertouch",1),r.setValueOfSetting("AftertouchType","Polyphonic");break;case V.ChannelAftertouch:r.setIntValueOfSetting("Aftertouch",1),r.setValueOfSetting("AftertouchType","Channel");break}}}const Cv=["Blue","Red","Purple","Yellow","Pink","Green"],jc=["2","3","4","5","7","12","24","48","96"],Av="WBWBWWBWBWBWWBWBWWBWBWBWW",bv={versions:[3],revision:1,buttonW:[10.1],buttonH:[10.1],buttonRadius:2,octaveSigns:!0,octaveButtons:[2],octaveBorderX:[49.25],octaveBorderY:[76.95],octavePitch:[20.49],functionButtons:[2],functionBorderX:[226.04],functionBorderY:[76.95],functionPitch:[20.49],whiteKeys:[15],whiteW:[15.93],whiteH:[72.5],whiteBorderX:[1.5],whiteBorderY:[1.5],whiteSpace:[2],whiteTouchX:[0],whiteTouchY:[0],blackKeys:[10],blackW:[9.3],blackH:[35.6],blackBorderY:[37.4],blackTouchX:[1],stripW:[125.53],stripH:[10.1],stripBorderX:[90.17],stripBorderY:[76.95],stripBgX:[1],stripBgY:[1],stripTouchX:[2],stripControl:4,bubbleW:[20],bubbleH:[20],bubbleBorderX:[17.4],bubbleBorderY:[67.55],bubbleBg:{x:[2],y:[2]},bubbleTouch:[3],bubbleControls:[1,2,3],firstButtonCC:0,defaults:{aftertouch:1,mpe:1,glissandoRange:"24",aftertouchType:"Polyphonic"}};class zm extends Pe{get className(){return"GrandSynth"}constructor(t,n,a){super(t,n,a),this.finishInit(this.cfg.versions,this.cfg.revision)}get cfg(){return bv}get moduleType(){return G.GrandSynth}configureFunctionButton(t,n,a,i){t.function.value=n===0?"Sustain on/off":"Glissando on/off",t.note.value=i,t.noteChannel.value=a,t.ccRange.valueMin=0}get slotNbr(){return 3}get title(){return"Pro Grand Clavier"}get summary(){return"The Grand Clavier has 25 expressive keys to subtly play any type of digital instruments. The Glissando mode allows continuous pitch-bend between notes and open the door to microtonal interpretation."}getDefaultColor(){return Ct("Green")}setFullPrivileges(t){super.setFullPrivileges(t),this.setColorChoices(t?Cv:["Green"])}getMidiStructure(){const t=[];for(let n=1;n<=25;n++)t.push({type:P.Pad,name:`KEY${n}`});return t.push({type:P.Glide,name:"GLISSANDO"}),t.push({type:P.Button,name:"OCTAVE-"}),t.push({type:P.Button,name:"OCTAVE+"}),t.push({type:P.Pad,name:"BUTTON1"}),t.push({type:P.Pad,name:"BUTTON2"}),t.push({type:P.Area,name:"BUBBLE"}),t.push({type:P.Strip,name:"STRIP"}),t.push({type:P.Script,name:"INIT_SCRIPT"}),t}updateModuleView(){if(this.invalid)return;super.updateModuleView();const t=this.settings.getSettingWithName("Vibrato"),n=this.settings.getSettingWithName("VibratoValue");this.settings.getIntValueOfSetting("Glissando")===1?(t&&(t.disabled=!0,t.intValue=0),n&&(n.disabled=!0)):(t&&(t.disabled=!1),n&&(n.disabled=!1)),t?.update(),n?.update();const a=this.settings.getIntValueOfSetting("MPE"),i=this.settings.getSettingWithName("MpeChannels");i&&(i.disabled=a===0,i.update()),Ii(this.elementList,a===1,[...pl,"ChannelX","ChannelY","ChannelZ"])}settingDidChange(t){super.settingDidChange(t);const n=t.dictionary.Name;(n==="MPE"||n==="Glissando")&&this.updateModuleView()}getMidiDescription(){const t=this.elementList.find(c=>c.name.startsWith("ALL_KEYS"));if(!t)return null;const n=t.settings,a=n.getIntValueOfSetting("Note"),i=n.getIntValueOfSetting("Channel"),r=n.getMinValueOfSetting("NoteVelocity"),l=n.getMaxValueOfSetting("NoteVelocity"),s=n.getIntValueOfSetting("YControlEnable"),o=this.settings.getValueOfSetting("Dynamic")==="Low",u=this.settings.getIntValueOfSetting("Glissando")===1,d="l{2,3}";for(const c of this.elementList)if(c.name.startsWith("KEY")){const S=qe(c.name,3);c.midiOptions=u?H.CaptureCursor:0,c.settings.setIntValueOfSetting("Note",a+S-1),c.settings.setIntValueOfSetting("NoteChannel",i),c.settings.setMinValueOfSetting("NoteVelocity",r),c.settings.setMaxValueOfSetting("NoteVelocity",l),c.settings.setIntValueOfSetting("YControlEnable",s),c.settings.setMaxValueOfSetting("Dynamic",o?U.KeyLow:U.KeyHigh)}else if(c.name.startsWith("GLISSANDO"))c.settings.setIntValueOfSetting("PitchRange",this.settings.getIntValueOfSetting("GlissandoRange"));else if(c.name.startsWith("BUTTON"))c.settings.setMaxValueOfSetting("Dynamic",o?U.PadLow:U.PadHigh),c.settings.setValueOfSetting("AftertouchType",this.settings.getValueOfSetting("AftertouchType"));else if(c.name.startsWith("BUBBLE"))c.settings.setMaxValueOfSetting("Dynamic",o?U.BubbleScalerLow:U.BubbleScalerHigh);else if(c.name.startsWith("OCTAVE-"))c.script=`${d}.${V.ValueZ}-12;`;else if(c.name.startsWith("OCTAVE+"))c.script=`${d}.${V.ValueZ}+12;`;else if(c.name.startsWith("INIT_SCRIPT")){let S=`${d}.${V.LimitX}=${this.settings.getMaxValueOfSetting("VibratoValue")};`;S+=`${d}.${V.ValueY}=${n.getIntValueOfSetting("YControl")};`,S+=`${d}.${V.StartY}=${n.getIntValueOfSetting("YControlOrigin")};`,this.settings.getIntValueOfSetting("Vibrato")===1&&(S+=`${d}.${V.ValueX}=1;`),this.settings.getIntValueOfSetting("Aftertouch")===1&&(S+=this.settings.getValueOfSetting("AftertouchType")==="Polyphonic"?`${d}.${V.PolyphonicAftertouch}=1;`:`${d}.${V.ChannelAftertouch}=1;`),S+=`c${P.Glide}.${V.ValueZ}=${u?1:0};`,c.script=S}const m=super.getMidiDescription();return m?this.patchHeader(m,c=>{c.set("instrumentHeader.midiHeader.type",this.moduleType),c.set("instrumentHeader.midiHeader.version",this.cfg.versions[this.versionIndex]),c.set("revision",this.cfg.revision),c.set("instrumentHeader.color",this.color),c.set("tagPosition",this.tagPosition),c.set("options",ka(this))}):null}loadMidiData(t){const n=super.loadMidiData(t);if(n===0)return 0;La(this,t);const a=this.elementList.find(i=>i.name==="ALL_KEYS");return a?(_m(this,a,"KEY1",U.KeyLow),n):0}initModule(){const t=this.versionIndex,n=this.cfg,a=48,i=12;let r=0,l=n.firstButtonCC,s=0;const o=this.settings;this.addColorSetting(),this.setFullPrivileges(this.fullPrivileges),o.addSetting(M.checkbox("ReadOnly","Locked",0)),o.addSetting(M.checkbox("Vibrato","Vibrato",0)),o.addSetting(M.checkbox("Glissando","Glissando",1)),o.addSetting(M.checkbox("Aftertouch","Aftertouch",n.defaults.aftertouch)),o.addSetting(M.checkbox("MPE","MPE",n.defaults.mpe));const u=M.category("Advanced","Advanced settings");o.addSetting(u),u.addSetting(M.combobox("Dynamic","Pressure range",["Low","High"],["Low","High"],"Low")),u.addSetting(M.combobox("MpeChannels","MPE Channels",["1-16","1-8","9-16"],["1-16","1-8","9-16"],"1-16")),u.addSetting(M.slider("VibratoValue","Vibrato",8192,1024)),u.addSetting(M.combobox("GlissandoRange","Glissando",jc.map(w=>`${w} semitones`),jc,n.defaults.glissandoRange)),u.addSetting(M.combobox("AftertouchType","Aftertouch",["Polyphonic","Channel"],["Polyphonic","Channel"],n.defaults.aftertouchType));const d=this.getMidiStructure();let m=1,c=0;const S=n.whiteKeys[t]+n.blackKeys[t];for(let w=0;w<S;w++){const k=Av[w]!=="B",at=new oe;at.function.value="Note",at.note.value=0;const tt=new Xt(at);tt.noBackup=!0,tt.name=d[m-1].name,tt.elementId=m++;const L=n.whiteW[t]+n.whiteSpace[t];if(k)tt.layerNbr=2,tt.radiusMM=3,tt.dimensionMM={x:n.whiteBorderX[t]+c*L,y:n.whiteBorderY[t],width:n.whiteW[t],height:n.whiteH[t]},tt.touchAreaMM={x:n.whiteBorderX[t]+c*L+n.whiteTouchX[t],y:n.whiteBorderY[t],width:n.whiteW[t]-2*n.whiteTouchX[t],height:n.whiteH[t]-n.whiteTouchY[t]},tt.isColorizable=!1,c++;else{tt.layerNbr=3,tt.radiusMM=1.5;const F=n.whiteBorderX[t]+c*L-(n.blackW[t]/2+n.whiteSpace[t]/2);tt.dimensionMM={x:F,y:n.blackBorderY[t],width:n.blackW[t],height:n.blackH[t]},tt.touchAreaMM={x:F-n.blackTouchX[t],y:n.blackBorderY[t],width:n.blackW[t]+2*n.blackTouchX[t],height:n.blackH[t]},tt.isColorizable=!0}tt.z=0,tt.depth=40,tt.disabled=!0,this.addElement(tt)}const y=new Ks;y.channel.value=i,y.note.value=a,y.noteVelocity.limitMin=1,y.noteVelocity.limitMax=127,y.noteVelocity.valueMin=50,y.noteVelocity.valueMax=127,y.yControlEnable.value=1,y.yControl.value=74,y.yControlOrigin.value=64;const v=new Di(y);v.dimensionMM={x:n.whiteBorderX[t],y:n.whiteBorderY[t],width:this.slotNbr*90-2*n.whiteBorderX[t],height:n.whiteH[t]},v.name="ALL_KEYS",v.radiusMM=3,v.isColorizable=!1,v.invisible=!0,v.noMidi=!0,this.addElement(v);const x=v.settings.getSettingWithName("Note");x.dictionary.Title="First note",x.dictionary.Fields=["0 - C-2","12 - C-1","24 - C0","36 - C1","48 - C2","60 - C3","72 - C4","84 - C5","96 - C6"],x.dictionary.Values=["0","12","24","36","48","60","72","84","96"];const g=new Qs;g.pitchRange.value=24,g.elementNbr.value=S,g.elementType.value=P.Key,g.elementList.values=Array.from({length:S},(w,k)=>String(k+1));const h=new Js(g);h.name=d[m-1].name,h.elementId=m++,h.layerNbr=4,h.z=0,h.depth=40;const C={x:n.whiteBorderX[t],y:n.whiteBorderX[t],width:this.slotNbr*90-2*n.whiteBorderX[t],height:n.whiteH[t]};h.dimensionMM=C,h.touchAreaMM={...C},h.isColorizable=!1,h.invisible=!0,h.disabled=!0,this.addElement(h);for(let w=0;w<n.octaveButtons[t];w++){const k=new jn;k.name=d[m-1].name,k.elementId=m++,k.layerNbr=1,k.z=0,k.depth=40;const at={x:n.octaveBorderX[t]+w*n.octavePitch[t],y:n.octaveBorderY[t],width:n.buttonW[t],height:n.buttonH[t]};if(k.dimensionMM=at,k.touchAreaMM={...at},k.radiusMM=n.buttonRadius,k.isColorizable=!0,k.noBackup=!0,k.disabled=!0,this.addElement(k),!n.octaveSigns)continue;const tt=(L,F)=>{const z=new ot;z.radiusMM=1,z.layerNbr=2,z.dimensionMM={x:k.dimensionMM.x+k.dimensionMM.width/2-L/2,y:k.dimensionMM.y+k.dimensionMM.height/2-F/2,width:L,height:F},z.isColorizable=!1,this.addBackgroundElement(z)};w!==0&&tt(1.5,5.8),tt(5.8,1.5)}for(let w=0;w<n.functionButtons[t];w++){const k=new oe;this.configureFunctionButton(k,w,i,r++),k.noteVelocity.limitMin=1,k.noteVelocity.limitMax=127,k.noteVelocity.valueMin=127,k.noteVelocity.valueMax=127,k.noteVelocity.enable=!1,k.cc.value=l++,k.ccChannel.value=i,k.ccRange.limitMin=0,k.ccRange.limitMax=127,k.ccRange.valueMax=127,k.ccDirection.value="Natural",k.pc.value=s++,k.pcChannel.value=i,k.pitchbendChannel.value=i,k.pitchbendRange.limitMax=8192,k.pitchbendRange.valueMax=8192,k.pitchbendDirection.value="Up",k.scriptTarget.value="l{2,3}",k.scriptChannel.enable=!0,k.scriptChannelValue.value=i+w,k.scriptVibrato.enable=!0,k.scriptSustain.enable=!0,k.scriptPolyAftertouch.enable=!0,k.scriptChannelAftertouch.enable=!0,k.scriptYControl.enable=!0,k.scriptGlissando.value=`l{2,3}.${V.Options}^${H.CaptureCursor};c${P.Glide}.${V.ValueZ}^1;`;const at=new Xt(k);at.name=d[m-1].name,at.elementId=m++,at.layerNbr=1,at.z=0,at.depth=40;const tt={x:n.functionBorderX[t]+w*n.functionPitch[t],y:n.functionBorderY[t],width:n.buttonW[t],height:n.buttonH[t]};at.dimensionMM=tt,at.touchAreaMM={...tt},at.radiusMM=n.buttonRadius,at.isColorizable=!0,at.disabled=!1,this.addElement(at)}const p=new wa;p.type.value="BUBBLE";const[b,A,N]=n.bubbleControls;for(const[w,k]of[[p.x,b],[p.y,A]])w.enable.value=0,w.channel.value=i,w.control.value=k,w.range.limitMin=0,w.range.limitMax=127,w.range.valueMin=0,w.range.valueMax=127,w.direction.value="Natural",w.startValue.value=64;p.z.enable.value=1,p.z.channel.value=i,p.z.control.value=N,p.z.range.limitMin=0,p.z.range.limitMax=127,p.z.range.valueMin=0,p.z.range.valueMax=127,p.z.direction.value="Natural";const E=new Fn(p);E.name=d[m-1].name,E.elementId=m++,E.layerNbr=5,E.z=20,E.depth=127-E.z,E.dimensionMM={x:n.bubbleBorderX[t],y:n.bubbleBorderY[t],width:n.bubbleW[t],height:n.bubbleH[t]};const B=n.bubbleBg?n.bubbleBg.x[t]:0,R=n.bubbleBg?n.bubbleBg.y[t]:0;if(E.touchAreaMM={x:n.bubbleBorderX[t]-B+n.bubbleTouch[t],y:n.bubbleBorderY[t]-R+n.bubbleTouch[t],width:n.bubbleW[t]+2*B-2*n.bubbleTouch[t],height:n.bubbleH[t]+2*R-2*n.bubbleTouch[t]},E.radiusMM=90,E.isColorizable=!0,this.addElement(E),n.bubbleBg){const w=new ot;w.dimensionMM={x:n.bubbleBorderX[t]-B,y:n.bubbleBorderY[t]-R,width:n.bubbleW[t]+2*B,height:n.bubbleH[t]+2*R},w.isColorizable=!1,w.radiusMM=90,w.layerNbr=4,this.addBackgroundElement(w)}const $=new qs;$.function.value="Control Change",$.orientation.value="Horizontal",$.cc.value=n.stripControl,$.ccChannel.value=i,$.ccRange.limitMin=0,$.ccRange.limitMax=127,$.ccRange.valueMin=0,$.ccRange.valueMax=127,$.ccMode.value="Absolute",$.ccDemultiplier.value=2,$.ccDirection.value="Natural",$.cc14bitsEnable.value=0,$.ccFine.value=$.cc.value+1,$.pitchbendRange.limitMax=8192,$.pitchbendRange.valueMax=8192,$.pitchbendChannel.value=i,$.pitchbendDirection.value="Up";const nt=new tu($);nt.name=d[m-1].name,nt.elementId=m++,nt.layerNbr=4,nt.z=0,nt.depth=40,nt.dimensionMM={x:n.stripBorderX[t],y:n.stripBorderY[t],width:n.stripW[t],height:n.stripH[t]},nt.touchAreaMM={x:n.stripBorderX[t]+n.stripBgX[t]+n.stripTouchX[t],y:n.stripBorderY[t]+n.stripBgY[t],width:n.stripW[t]-2*n.stripBgX[t]-2*n.stripTouchX[t],height:n.stripH[t]-2*n.stripBgY[t]},nt.radiusMM=2,nt.isColorizable=!0,this.addElement(nt);const X=new zn;X.name=d[m-1].name,X.elementId=m++,X.disabled=!0,X.noBackup=!0,this.addElement(X)}}const Hc=[1,3],Xc=2,xv=[4,4],Mv=[4,4],cr=[2,2],dr=[2,2],Uc=[19.25,19.25],Wc=[19.25,19.25],Zc=[22.25,22.25],Gc=[22.25,22.25],gr=[1,1];class Dv extends Pe{get className(){return"Pads"}constructor(t,n,a){super(t,n,a),this.finishInit(Hc,Xc)}get slotNbr(){return 1}get title(){return"Pro Matrix"}get summary(){return"A 4X4 matrix of sensitive pads to play drums, percussion, melodies or to launch clips. Each pad can be configured individually or in group."}getDefaultColor(){return Ct("Blue")}setFullPrivileges(t){super.setFullPrivileges(t),this.setColorChoices(t?["Blue","Red","Purple","Yellow","Pink","Green"]:["Blue","Purple","Yellow"])}getMidiStructure(){const t=[];for(let n=1;n<=16;n++)t.push({type:P.Pad,name:`PAD${n}`});return t.push({type:P.Script,name:"INIT_SCRIPT"}),t}updateModuleView(){if(this.invalid)return;super.updateModuleView();const t=this.settings.getIntValueOfSetting("MPE"),n=this.settings.getSettingWithName("MpeChannels");n&&(n.disabled=t===0,n.update());const a=this.settings.getIntValueOfSetting("Expert");for(const i of this.elementList)a===0?i.name.startsWith("PAD")?i.disabled=!0:i.name.startsWith("ALL_PADS")&&(i.disabled=!1):i.name.startsWith("PAD")?i.disabled=!1:i.name.startsWith("ALL_PADS")&&(i.disabled=!0);for(const i of this.elementList)for(const r of["NoteChannel","CCChannel","PCChannel","PitchbendChannel","ScriptChannel"]){const l=i.settings.getSettingWithName(r);l&&(l.disabled=t===1,l.update())}}settingDidChange(t){super.settingDidChange(t),Hm(this,t)}getMidiDescription(){jm(this);const t=super.getMidiDescription();return t?this.patchHeader(t,n=>{n.set("instrumentHeader.midiHeader.type",G.Pads),n.set("instrumentHeader.midiHeader.version",Hc[this.versionIndex]),n.set("revision",Xc),n.set("instrumentHeader.color",this.color),n.set("tagPosition",this.tagPosition),n.set("options",ka(this))}):null}loadMidiData(t){const n=super.loadMidiData(t);return n===0?0:(La(this,t),Xm(this)?n:0)}loadElementFromXmlDescription(t,n){return n<0||n>2?!1:super.loadElementFromXmlDescription(t,n)}initModule(){let a=0,i=0;const r=this.settings,l=this.versionIndex;this.addColorSetting(),this.setFullPrivileges(this.fullPrivileges),r.addSetting(M.checkbox("ReadOnly","Locked",0)),r.addSetting(M.checkbox("Vibrato","Vibrato",0)),r.addSetting(M.checkbox("Aftertouch","Aftertouch",0)),r.addSetting(M.checkbox("MPE","MPE",0)),r.addSetting(M.checkbox("Expert","Custom mapping",0));const s=M.category("Advanced","Advanced settings");r.addSetting(s),s.addSetting(M.combobox("Dynamic","Pressure range",["Low","High"],["Low","High"],"Low")),s.addSetting(M.combobox("MpeChannels","MPE Channels",["1-16","1-8","9-16"],["1-16","1-8","9-16"],"1-16")),s.addSetting(M.combobox("AftertouchType","Aftertouch",["Polyphonic","Channel"],["Polyphonic","Channel"],"Channel")),s.addSetting(M.slider("VibratoValue","Vibrato",8192,1024));let o=1,u=36;const d=this.getMidiStructure();for(let v=0;v<Mv[l];v++)for(let x=0;x<xv[l];x++){const g=new oe;g.function.value="Note",g.note.value=u++,g.noteChannel.value=1,g.noteVelocity.limitMin=1,g.noteVelocity.limitMax=127,g.noteVelocity.valueMin=50,g.noteVelocity.valueMax=127,g.cc.value=a++,g.ccChannel.value=1,g.ccRange.limitMin=0,g.ccRange.limitMax=127,g.ccRange.valueMin=0,g.ccRange.valueMax=127,g.ccDirection.value="Natural",g.pc.value=i++,g.pcChannel.value=1,g.pitchbendChannel.value=1,g.pitchbendRange.limitMax=8192,g.pitchbendRange.valueMax=8192,g.pitchbendDirection.value="Up",g.scriptTarget.value=`c${P.Pad}`,g.scriptChannel.enable=!0,g.scriptChannelValue.value=1+x,g.scriptVibrato.enable=!0,g.scriptSustain.enable=!0,g.scriptPolyAftertouch.enable=!0,g.scriptChannelAftertouch.enable=!0;const h=new Xt(g);h.name=d[o-1].name,h.elementId=o++,h.layerNbr=1,h.z=0,h.depth=40,h.dimensionMM={x:cr[l]+x*Zc[l],y:dr[l]+v*Gc[l],width:Uc[l],height:Wc[l]},h.touchAreaMM={x:cr[l]+x*Zc[l]+gr[l],y:dr[l]+v*Gc[l]+gr[l],width:Uc[l]-2*gr[l],height:Wc[l]-2*gr[l]},h.radiusMM=4.5,h.isColorizable=!0,h.disabled=!0,this.addElement(h)}const m=new oe;m.note.value=36,m.noteChannel.value=1,m.noteVelocity.limitMin=1,m.noteVelocity.limitMax=127,m.noteVelocity.valueMin=50,m.noteVelocity.valueMax=127;const c=new Xt(m);c.name="ALL_PADS",c.dimensionMM={x:cr[l],y:dr[l],width:90-2*cr[l],height:90-2*dr[l]},c.radiusMM=4.5,c.isColorizable=!1,c.invisible=!0,c.disabled=!1,c.noMidi=!0,this.addElement(c);const S=c.settings.getSettingWithName("Note");S&&(S.dictionary.Title="First note");const y=new zn;y.name=d[o-1].name,y.elementId=o++,y.disabled=!0,y.noBackup=!0,this.addElement(y)}}function jm(e){const t=e.settings.getValueOfSetting("Dynamic")==="Low";for(const n of e.elementList)if(n.name.startsWith("INIT_SCRIPT")){const a=e.settings.getMaxValueOfSetting("VibratoValue");let i=`*.${V.LimitX}=${a};`;e.settings.getIntValueOfSetting("Vibrato")===1&&(i+=`*.${V.ValueX}=1;`),e.settings.getIntValueOfSetting("Aftertouch")===1&&(e.settings.getValueOfSetting("AftertouchType")==="Polyphonic"?i+=`*.${V.PolyphonicAftertouch}=1;`:i+=`*.${V.ChannelAftertouch}=1;`),n.script=i}else n.name.startsWith("PAD")||n.name.startsWith("BUTTON")?(n.settings.setMaxValueOfSetting("Dynamic",t?U.PadLow:U.PadHigh),n.settings.setValueOfSetting("AftertouchType",e.settings.getValueOfSetting("AftertouchType"))):n.name.startsWith("BUBBLE")?n.settings.setMaxValueOfSetting("Dynamic",t?U.BubbleScalerLow:U.BubbleScalerHigh):n.name.startsWith("OCTAVE-")?n.script=`c${P.Pad}.${V.ValueZ}-12;`:n.name.startsWith("OCTAVE+")&&(n.script=`c${P.Pad}.${V.ValueZ}+12;`)}function Hm(e,t){const n=t.dictionary.Name;if(n==="Expert"){e.updateModuleView(),e.delegate?.modulePropertiesDidChange(e);return}if(n==="MPE"){e.updateModuleView();return}const a=e.elementList.find(l=>l.name==="ALL_PADS");if(!a)return;const i=t.settings?.owner,r=e.elementList.filter(l=>l!==a&&l.name.startsWith("PAD"));if(i===a){const l=t.dictionary.Value;if(n==="Note"){let s=Fe(l);for(const o of r)o.settings.setIntValueOfSetting("Note",s++),o.settings.setValueOfSetting("Function","Note")}else for(const s of r)s.settings.setValueOfSetting("Function","Note"),s.settings.setValueOfSetting(n,l)}else i instanceof ot&&r.includes(i)&&(n==="Function"?(a.settings.setValueOfSetting("Note",""),a.settings.setValueOfSetting("NoteChannel",""),a.settings.setValueOfSetting("NoteVelocity","")):a.settings.setValueOfSetting(n,""))}function Xm(e){let t=-1,n=-1,a=-1e4,i=1e4;const r=e.elementList.find(l=>l.name==="ALL_PADS");if(!r)return!1;for(const l of e.elementList)if(l.name.startsWith("PAD")){const s=qe(l.name,3)-1,o=l.settings.getSettingWithName("Function");o===null||o.value==="Note"?t===-1?(t=l.settings.getIntValueOfSetting("Note")-s,n=l.settings.getIntValueOfSetting("NoteChannel"),a=l.settings.getMinValueOfSetting("NoteVelocity"),i=l.settings.getMaxValueOfSetting("NoteVelocity"),r.settings.setIntValueOfSetting("Note",t),r.settings.setIntValueOfSetting("NoteChannel",n),r.settings.setMinValueOfSetting("NoteVelocity",a),r.settings.setMaxValueOfSetting("NoteVelocity",i),e.settings.setValueOfSetting("Dynamic",l.settings.getMaxValueOfSetting("Dynamic")===U.PadLow?"Low":"High")):(l.settings.getIntValueOfSetting("Note")!==t+s&&r.settings.setValueOfSetting("Note",""),l.settings.getIntValueOfSetting("NoteChannel")!==n&&r.settings.setValueOfSetting("NoteChannel",""),(l.settings.getMinValueOfSetting("NoteVelocity")!==a||l.settings.getMaxValueOfSetting("NoteVelocity")!==i)&&r.settings.setValueOfSetting("NoteVelocity","")):(t=0,r.settings.setValueOfSetting("Note",""),r.settings.setValueOfSetting("NoteChannel",""),r.settings.setValueOfSetting("NoteVelocity",""))}else if(l.name.startsWith("INIT_SCRIPT")){e.settings.setIntValueOfSetting("Vibrato",0),e.settings.setIntValueOfSetting("Aftertouch",0);const s=l.script??"";for(const o of Ra(s))switch(o.parameter){case V.LimitX:e.settings.setMaxValueOfSetting("VibratoValue",o.readValue());break;case V.ValueX:e.settings.setIntValueOfSetting("Vibrato",1);break;case V.PolyphonicAftertouch:e.settings.setIntValueOfSetting("Aftertouch",1),e.settings.setValueOfSetting("AftertouchType","Polyphonic");break;case V.ChannelAftertouch:e.settings.setIntValueOfSetting("Aftertouch",1),e.settings.setValueOfSetting("AftertouchType","Channel");break}}return!0}function Um(e,t,n,a){const i=e,r=new wa;r.type.value="BUBBLE";for(const[c,S]of[[r.x,75],[r.y,76]])c.enable.value=0,c.channel.value=a,c.control.value=S,c.range.limitMin=0,c.range.limitMax=127,c.range.valueMin=0,c.range.valueMax=127,c.direction.value="Natural",c.startValue.value=64;r.z.enable.value=1,r.z.channel.value=a,r.z.control.value=1,r.z.range.limitMin=0,r.z.range.limitMax=127,r.z.range.valueMin=0,r.z.range.valueMax=127,r.z.direction.value="Natural";const l=new Fn(r),s=t();l.name=s.name,l.elementId=s.id,l.layerNbr=4,l.z=20,l.depth=127,l.dimensionMM={x:n.bubbleBorderX,y:n.bubbleBorderY,width:n.bubbleW,height:n.bubbleH},l.touchAreaMM={x:n.bubbleBorderX+n.bubbleTouch,y:n.bubbleBorderY+n.bubbleTouch,width:n.bubbleW-2*n.bubbleTouch,height:n.bubbleH-2*n.bubbleTouch},l.radiusMM=90,l.isColorizable=!0,i.addElement(l);const o=new ot;o.radiusMM=4.5,o.isColorizable=!0,o.dimensionMM={x:n.areaBgX,y:n.areaBgY,width:n.areaBgW,height:n.areaBgH},i.addBackgroundElement(o);const u=new wa;for(const[c,S]of[[u.x,12],[u.y,13]])c.enable.value=1,c.channel.value=a,c.control.value=S,c.range.limitMin=0,c.range.limitMax=127,c.range.valueMin=0,c.range.valueMax=127,c.direction.value="Natural",c.mode.value="Absolute",c.demultiplier.value=2,c.enableCC14Bits.value=0,c.ccFine.value=S+1;u.z.enable.value=1,u.z.channel.value=a,u.z.control.value=80,u.z.range.limitMin=0,u.z.range.limitMax=127,u.z.range.valueMin=127,u.z.range.valueMax=127,u.z.direction.value="Natural";const d=new Fn(u),m=t();d.name=m.name,d.elementId=m.id,d.layerNbr=1,d.z=0,d.depth=40,d.dimensionMM={x:n.areaX,y:n.areaY,width:n.areaW,height:n.areaH},d.touchAreaMM={x:n.areaX+n.areaTouch,y:n.areaY+n.areaTouch,width:n.areaW-2*n.areaTouch,height:n.areaH-2*n.areaTouch},d.radiusMM=1.5,d.isColorizable=!1,i.addElement(d)}const Ev={versions:[3],revision:1,buttonW:[12],buttonH:[12],buttonRadius:2,octaveButtons:[2],octaveBorderX:[40],octaveBorderY:[74],octavePitch:[20],octaveSigns:!1,functionButtons:[2],functionBorderX:[213.86],functionBorderY:[74],functionPitch:[20],whiteKeys:[15],whiteW:[15.93],whiteH:[67.5],whiteBorderX:[1.5],whiteBorderY:[1.5],whiteSpace:[2],whiteTouchX:[0],whiteTouchY:[0],blackKeys:[10],blackW:[9],blackH:[31],blackBorderY:[37],blackTouchX:[1],stripW:[108],stripH:[14],stripBorderX:[88.6],stripBorderY:[72.9],stripBgX:[1],stripBgY:[1],stripTouchX:[2],stripControl:12,bubbleW:[18],bubbleH:[18],bubbleBorderX:[9],bubbleBorderY:[70.5],bubbleBg:null,bubbleTouch:[3],bubbleControls:[75,76,1],firstButtonCC:14,defaults:{aftertouch:0,mpe:0,glissandoRange:"48",aftertouchType:"Channel"}},Bi=["Water","Fire"];class Nv extends zm{get className(){return"PopKeys"}get cfg(){return Ev}get moduleType(){return G.PopKeys}get tagPosition(){return 3}get title(){return"Play Piano"}get summary(){return"25 piano keys, a bubble and a ribbon to control effects. A play and a record button to launch and capture tracks"}getDefaultColor(){return Ct("Pantone319C")}setFullPrivileges(t){Ze.prototype.setFullPrivileges.call(this,t),this.setColorChoices(["Pantone319C","Pantone1585C"],Bi)}configureFunctionButton(t,n){t.function.value="Note",t.note.value=n===0?1:0,t.noteChannel.value=1,t.ccRange.valueMin=127}}const wv={versions:[3],revision:1,strings:[6],stringW:[155.5+1],stringH:[3],stringPitch:[12],stringBorderX:[47.06],stringBorderY:[13.5],stringTouchMarginY:[3],stringTouchExtendX:[0],frets:[8],fretW:[2],fretY:()=>({y:11.5,height:67}),fretPitch:[19.5],fretBorderX:[66.06],fretLines:[8],buttonsHorizontal:!0,octaveSigns:!1,firstButtonCC:14,buttonW:[12],buttonH:[12],octaveButtons:[2],octaveBorderX:[6.78],octaveBorderY:[12.02],octavePitch:[20],functionButtons:[2],functionBorderX:[6.78],functionBorderY:[66.02],functionPitch:[20]},Pv={bubbleW:18,bubbleH:18,bubbleBorderX:13.78,bubbleBorderY:36,bubbleTouch:3,areaX:218,areaY:8,areaW:34,areaH:74,areaTouch:2,areaBgX:215,areaBgY:5,areaBgW:40,areaBgH:80};class Vv extends $m{get className(){return"PopFretboard"}get cfg(){return wv}get moduleType(){return G.PopFretboard}get tagPosition(){return 3}get title(){return"Play Guitar"}get summary(){return"6 strings, 8 frets to play guitar or bass, a bubble and an area to control effects. A play and a record button to launch and capture tracks."}getDefaultColor(){return Ct("Pantone638C")}setFullPrivileges(t){Ze.prototype.setFullPrivileges.call(this,t),this.setColorChoices(["Pantone638C","Pantone137C"],Bi)}getMidiStructure(){const t=super.getMidiStructure(),n=t.pop();return t.push({type:P.Area,name:"BUBBLE"}),t.push({type:P.Area,name:"AREA"}),t.push(n),t}get fretlessDefaults(){return{bending:1,mpe:0,pitchRange:"48"}}configureFunctionButton(t,n){t.function.value="Note",t.note.value=n===0?1:0,t.noteChannel.value=1,t.ccRange.valueMin=127,this.addFretlessScript(t)}addSurfaceElements(t,n){Um(this,t,Pv,n)}}const _t={RhoTheta:0,Fader:1,Mixer:2,Mask:7,EnableAxisZ:16,EnableAxis2:32,EnableAxis1:64,ZeroReturn:128};class Ov{function=new Q;enableAxis1=new T;channelAxis1=new T;controlAxis1=new T;rangeAxis1=new te;enableAxis2=new T;channelAxis2=new T;controlAxis2=new T;rangeAxis2=new te;enableAxisZ=new T;channelAxisZ=new T;controlAxisZ=new T;rangeAxisZ=new te;zeroReturn=new T;angleShift=0;angleOpening=0;maxRho=0}class Rv extends ot{options;get className(){return"ElementPiePartMixer"}constructor(t){super(),this.revision=2,this.options=t;const n=this.settings,a=["Angle/Radius","Fader","Mixer"],i=M.slider("Dynamic","Dynamic",127,this.depth);i.hidden=!0,n.addSetting(i);const r=M.combobox("function","Action",a,a,t.function.value);r.hidden=!1,n.addSetting(r);const l=M.checkbox("zeroReturn","Zero Return",t.zeroReturn.value);n.addSetting(l);const s=(u,d,m,c,S,y,v,x)=>{const g=M.checkbox(u,d,S.value);m===null?r.addSetting(g):r.addSetting(g,m),g.addSetting(M.combobox(`Channel${c}`,"Channel",mt,mt,String(y.value)),"1"),g.addSetting(M.combobox(`Control${c}`,"CC number",rt,rt,String(v.value)),"1"),g.addSetting(M.range(`Range${c}`,"Range",x.limitMin,x.limitMax,x.valueMin,x.valueMax),"1")},o=t;s("EnableRadius","Enable Radius","Angle/Radius","Radius",o.enableAxis1,o.channelAxis1,o.controlAxis1,o.rangeAxis1),s("EnableAngle","Enable Angle","Angle/Radius","Angle",o.enableAxis2,o.channelAxis2,o.controlAxis2,o.rangeAxis2),s("EnableFader","Enable Fader","Fader","Fader",o.enableAxis1,o.channelAxis1,o.controlAxis1,o.rangeAxis1),s("EnableAxis1","Enable Axis1","Mixer","Axis1",o.enableAxis1,o.channelAxis1,o.controlAxis1,o.rangeAxis1),s("EnableAxis2","Enable Axis2","Mixer","Axis2",o.enableAxis2,o.channelAxis2,o.controlAxis2,o.rangeAxis2),s("EnableAxisZ","Enable Pressure",null,"Pressure",o.enableAxisZ,o.channelAxisZ,o.controlAxisZ,{limitMin:o.rangeAxis2.limitMin,limitMax:o.rangeAxisZ.limitMax,valueMin:o.rangeAxisZ.valueMin,valueMax:o.rangeAxisZ.valueMax})}getMidiObjectList(){const t=this.settings,n=new _("AreaPiePartMixerData"),a="midiElementPolygonData6.polygonData";n.set(`${a}.midiHeader.type`,P.AreaPiePartMixer),n.set(`${a}.midiHeader.version`,2),n.set(`${a}.options`,H.LockCursor|this.midiOptions),n.set(`${a}.magic`,255),n.set(`${a}.id`,this.elementId);let i=0;for(const u of this.geometryMM){if(i>=6)break;n.set("midiElementPolygonData6.vertexX",u.x,i),n.set("midiElementPolygonData6.vertexY",u.y,i),i++}n.set(`${a}.vertexNbr`,i),n.set("midiElementPolygonData6.z",this.z),n.set("midiElementPolygonData6.depth",t.getMaxValueOfSetting("Dynamic")),n.set(`${a}.layerNbr`,this.layerNbr),n.set("areaPiePartData.angleOpening",this.options.angleOpening),n.set("areaPiePartData.angleShift",this.options.angleShift),n.set("areaPiePartData.maxRho",this.options.maxRho);let r=0;const l=(u,d)=>{t.getIntValueOfSetting(d)===1&&(r|=_t.EnableAxis1),n.set("areaPiePartData.controlAxis1",t.getIntValueOfSetting(`Control${u}`)),n.set("areaPiePartData.channelAxis1",t.getIntValueOfSetting(`Channel${u}`)),n.set("areaPiePartData.valueMinAxis1",t.getMinValueOfSetting(`Range${u}`)),n.set("areaPiePartData.valueMaxAxis1",t.getMaxValueOfSetting(`Range${u}`))},s=(u,d)=>{t.getIntValueOfSetting(d)===1&&(r|=_t.EnableAxis2),n.set("areaPiePartData.controlAxis2",t.getIntValueOfSetting(`Control${u}`)),n.set("areaPiePartData.channelAxis2",t.getIntValueOfSetting(`Channel${u}`)),n.set("areaPiePartData.valueMinAxis2",t.getMinValueOfSetting(`Range${u}`)),n.set("areaPiePartData.valueMaxAxis2",t.getMaxValueOfSetting(`Range${u}`))},o=t.getValueOfSetting("function");return o==="Angle/Radius"?(r=_t.RhoTheta,l("Radius","EnableRadius"),s("Angle","EnableAngle")):o==="Fader"?(r=_t.Fader,l("Fader","EnableFader")):o==="Mixer"&&(r=_t.Mixer,l("Axis1","EnableAxis1"),s("Axis2","EnableAxis2")),t.getIntValueOfSetting("zeroReturn")===1&&(r|=_t.ZeroReturn),t.getIntValueOfSetting("EnableAxisZ")===1&&(r|=_t.EnableAxisZ),n.set("areaPiePartData.controlAxisZ",t.getIntValueOfSetting("ControlPressure")),n.set("areaPiePartData.channelAxisZ",t.getIntValueOfSetting("ChannelPressure")),n.set("areaPiePartData.valueMinAxisZ",t.getMinValueOfSetting("RangePressure")),n.set("areaPiePartData.valueMaxAxisZ",t.getMaxValueOfSetting("RangePressure")),n.set("areaPiePartData.Options",r),[n.bytes]}loadMidiData(t,n){const a=_.at("MidiElementData",t,n);if(a.get("midiHeader.type")!==P.AreaPiePartMixer)return 0;const i=a.get("midiHeader.version");if(i===1||i!==2)return 0;const r=this.settings,l=_.at("AreaPiePartMixerData",t,n),s=l.get("areaPiePartData.Options");r.setMaxValueOfSetting("Dynamic",l.get("midiElementPolygonData6.depth")),r.setIntValueOfSetting("zeroReturn",s&_t.ZeroReturn?1:0);const o=(m,c)=>{r.setIntValueOfSetting(c,s&_t.EnableAxis1?1:0),r.setIntValueOfSetting(`Control${m}`,l.get("areaPiePartData.controlAxis1")),r.setIntValueOfSetting(`Channel${m}`,l.get("areaPiePartData.channelAxis1")),r.setMinValueOfSetting(`Range${m}`,l.get("areaPiePartData.valueMinAxis1")),r.setMaxValueOfSetting(`Range${m}`,l.get("areaPiePartData.valueMaxAxis1"))},u=(m,c)=>{r.setIntValueOfSetting(c,s&_t.EnableAxis2?1:0),r.setIntValueOfSetting(`Control${m}`,l.get("areaPiePartData.controlAxis2")),r.setIntValueOfSetting(`Channel${m}`,l.get("areaPiePartData.channelAxis2")),r.setMinValueOfSetting(`Range${m}`,l.get("areaPiePartData.valueMinAxis2")),r.setMaxValueOfSetting(`Range${m}`,l.get("areaPiePartData.valueMaxAxis2"))},d=s&_t.Mask;return d===_t.RhoTheta?(r.setValueOfSetting("function","Angle/Radius"),o("Radius","EnableRadius"),u("Angle","EnableAngle")):d===_t.Fader?(r.setValueOfSetting("function","Fader"),o("Fader","EnableFader")):d===_t.Mixer&&(r.setValueOfSetting("function","Mixer"),o("Axis1","EnableAxis1"),u("Axis2","EnableAxis2")),r.setIntValueOfSetting("EnableAxisZ",s&_t.EnableAxisZ?1:0),r.setIntValueOfSetting("ControlPressure",l.get("areaPiePartData.controlAxisZ")),r.setIntValueOfSetting("ChannelPressure",l.get("areaPiePartData.channelAxisZ")),r.setMinValueOfSetting("RangePressure",l.get("areaPiePartData.valueMinAxisZ")),r.setMaxValueOfSetting("RangePressure",l.get("areaPiePartData.valueMaxAxisZ")),ct("AreaPiePartMixerData")}loadSettingFromXmlDescription(t,n){return n<0||n>2?!1:super.loadSettingFromXmlDescription(t,n)}}const Kc=[3],Qc=1,mr=14,Zn={startNote:2,count:3,x:11.5,y:[10.75,29.25,47.75,66.25]},ne={note:5,w:14,h:14,x:71.75,y:38.5,shrink:3},Gn={notes:[1,0],w:16,x:126.63,y:14.5,pitch:25},kv=[{degrees:54,points:[[78.25,50.53],[100.12,80.62],[78.25,87.4],[56.38,80.62]]},{degrees:126,points:[[72.99,46.71],[51.13,76.8],[37.93,58.1],[37.61,35.21]]},{degrees:198,points:[[75,40.53],[39.62,29.03],[53.33,10.7],[75,3.33]]},{degrees:270,points:[[81.5,40.53],[81.5,3.33],[103.71,10.7],[116.88,29.03]]},{degrees:342,points:[[83.51,46.71],[118.89,35.21],[118.57,58.1],[105.37,76.8]]}],Lt=215,It=45,Bt=42.5,Lv=[{degrees:0,points:[[Lt,It],[Lt+Bt,It],[Lt+Bt,It+Bt],[Lt,It+Bt]]},{degrees:90,points:[[Lt,It],[Lt,It+Bt],[Lt-Bt,It+Bt],[Lt-Bt,It]]},{degrees:180,points:[[Lt,It],[Lt-Bt,It],[Lt-Bt,It-Bt],[Lt,It-Bt]]},{degrees:270,points:[[Lt,It],[Lt,It-Bt],[Lt+Bt,It-Bt],[Lt+Bt,It]]}];class Iv extends Pe{get className(){return"PopAudio"}constructor(t,n,a){super(t,n,a),this.finishInit(Kc,Qc)}get slotNbr(){return 3}get tagPosition(){return 3}get title(){return"Play Audio"}get summary(){return"Audio pad to control effects on voice tracks."}getDefaultColor(){return Ct("Pantone353C")}setFullPrivileges(t){super.setFullPrivileges(t),this.setColorChoices(["Pantone353C","PantoneWarmRedC"],Bi)}getMidiStructure(){const t=[];for(const n of["BTN_PRESET_1","BTN_PRESET_2","BTN_PRESET_3","BTN_PRESET_RAND","BTN_EFFECT_ONOFF","BTN_PLAY","BTN_REC"])t.push({type:P.Pad,name:n});for(let n=1;n<=5;n++)t.push({type:P.AreaPiePartMixer,name:`PETAL_1_${n}`});for(let n=1;n<=4;n++)t.push({type:P.AreaCircularMixer,name:`PETAL_2_${n}`});return t}getMidiDescription(){const t=this.settings.getValueOfSetting("Dynamic")==="Low";for(const a of this.elementList)a.name.startsWith("BTN_PRESET_RAND")&&(a.script="l1.4?;"),a.name.startsWith("PETAL")&&a.settings.setMaxValueOfSetting("Dynamic",t?U.AreaLow:U.AreaHigh);const n=super.getMidiDescription();return n?this.patchHeader(n,a=>{a.set("instrumentHeader.midiHeader.type",G.PopAudio),a.set("instrumentHeader.midiHeader.version",Kc[this.versionIndex]),a.set("revision",Qc),a.set("instrumentHeader.color",this.color),a.set("options",this.moduleOptions),a.set("tagPosition",this.tagPosition)}):null}loadMidiData(t){const n=super.loadMidiData(t);if(n===0)return 0;for(const a of this.elementList)a.name.startsWith("PETAL")&&this.settings.setValueOfSetting("Dynamic",a.settings.getMaxValueOfSetting("Dynamic")===U.KeyLow?"Low":"High");return n}initModule(){let n=14,a=0;const i=this.settings;this.addColorSetting(),this.setFullPrivileges(this.fullPrivileges),i.addSetting(M.checkbox("ReadOnly","Locked",0));const r=M.category("Advanced","Advanced settings");i.addSetting(r),r.addSetting(M.combobox("Dynamic","Pressure range",["Low","High"],["Low","High"],"Low"));const l=this.getMidiStructure();let s=1;const o=()=>({name:l[s-1].name,id:s++}),u=c=>{const S=new oe;return S.function.value="Note",S.note.value=c,S.noteChannel.value=13,S.noteVelocity.limitMin=1,S.noteVelocity.limitMax=127,S.noteVelocity.valueMin=127,S.noteVelocity.valueMax=127,S.noteVelocity.enable=!1,S.cc.value=n++,S.ccChannel.value=13,S.ccRange.limitMin=0,S.ccRange.limitMax=127,S.ccRange.valueMin=127,S.ccRange.valueMax=127,S.ccDirection.value="Natural",S.pc.value=a++,S.pcChannel.value=13,S};for(let c=0;c<Zn.count;c++){const S=u(Zn.startNote+c);S.scriptTarget.value="l{1,2}",S.scriptChannel.enable=!0,S.scriptChannelValue.value=13+c;const y=new Xt(S),v=o();y.name=v.name,y.elementId=v.id,y.layerNbr=3,y.z=0,y.depth=40;const x={x:Zn.x,y:Zn.y[c+1],width:mr,height:mr};y.dimensionMM=x,y.touchAreaMM={...x},y.radiusMM=90,y.isColorizable=!0,y.disabled=!1,this.addElement(y)}{const c=new jn,S=o();c.name=S.name,c.elementId=S.id,c.layerNbr=3,c.z=0,c.depth=40;const y={x:Zn.x,y:Zn.y[0],width:mr,height:mr};c.dimensionMM=y,c.touchAreaMM={...y},c.radiusMM=50,c.isColorizable=!0,c.noBackup=!0,c.disabled=!0,this.addElement(c)}{const c=new Xt(u(ne.note)),S=o();c.name=S.name,c.elementId=S.id,c.layerNbr=2,c.z=0,c.depth=40,c.dimensionMM={x:ne.x,y:ne.y,width:ne.w,height:ne.h},c.touchAreaMM={x:ne.x+ne.shrink,y:ne.y+ne.shrink,width:ne.w-2*ne.shrink,height:ne.h-2*ne.shrink},c.radiusMM=90,c.isColorizable=!0,c.disabled=!1,this.addElement(c)}for(let c=0;c<2;c++){const S=new Xt(u(Gn.notes[c])),y=o();S.name=y.name,S.elementId=y.id,S.layerNbr=3,S.z=0,S.depth=40;const v={x:Gn.x+c*Gn.pitch,y:Gn.y,width:Gn.w,height:Gn.w};S.dimensionMM=v,S.touchAreaMM={...v},S.radiusMM=90,S.isColorizable=!0,S.disabled=!1,this.addElement(S)}let d=20;const m=(c,S,y,v,x,g,h,C)=>{const p=new Ov;p.function.value="Angle/Radius",p.zeroReturn.value=v,p.enableAxis1.value=1,p.enableAxis2.value=1,p.enableAxisZ.value=0,p.channelAxis1.value=13,p.controlAxis1.value=y+2*S,p.rangeAxis1.limitMin=0,p.rangeAxis1.limitMax=127,p.rangeAxis1.valueMin=0,p.rangeAxis1.valueMax=127,p.channelAxis2.value=13,p.controlAxis2.value=y+2*S+1,p.rangeAxis2.limitMin=0,p.rangeAxis2.limitMax=127,p.rangeAxis2.valueMin=0,p.rangeAxis2.valueMax=127,p.channelAxisZ.value=13,p.controlAxisZ.value=d,p.rangeAxisZ.limitMin=0,p.rangeAxisZ.limitMax=127,p.rangeAxisZ.valueMin=0,p.rangeAxisZ.valueMax=127,p.angleShift=c.degrees,p.angleOpening=x,p.maxRho=g;const b=new Rv(p),A=o();b.name=A.name,b.elementId=A.id,b.layerNbr=h,b.z=0,b.depth=40,b.type_petal=C;for(const[N,E]of c.points)b.geometryMM.push({x:N,y:E});b.dimensionMM={x:0,y:0,width:0,height:0},b.touchAreaMM={x:0,y:0,width:0,height:0},b.radiusMM=0,b.isColorizable=!0,b.disabled=!1,d+=1,this.addElement(b)};kv.forEach((c,S)=>m(c,S,102,0,72,31,1,1+S)),Lv.forEach((c,S)=>m(c,S,112,1,90,38,2,6+S))}}const Jc=[3],qc=1,td=4,ed=3,Mt={borderX:51,borderY:3.75,w:25,h:25,pitchX:28.75,pitchY:28.75,touch:1},Oe={w:12,h:12,octaveX:6.78,octaveY:12.02,functionX:6.78,functionY:66.02,pitch:20},Bv={bubbleW:18,bubbleH:18,bubbleBorderX:13.78,bubbleBorderY:36,bubbleTouch:3,areaX:178,areaY:8,areaW:74,areaH:74,areaTouch:2,areaBgX:175,areaBgY:5,areaBgW:80,areaBgH:80};class Tv extends Pe{get className(){return"PopPads"}constructor(t,n,a){super(t,n,a),this.finishInit(Jc,qc)}get slotNbr(){return 3}get tagPosition(){return 3}get title(){return"Play Drum"}get summary(){return"12 sensitive pads to play drums or percussions. A bubble and an area to control effects. A play and a record button to launch and capture tracks."}getDefaultColor(){return Ct("Pantone3245C")}setFullPrivileges(t){super.setFullPrivileges(t),this.setColorChoices(["Pantone3245C","Pantone172C"],Bi)}getMidiStructure(){const t=[];for(let n=1;n<=12;n++)t.push({type:P.Pad,name:`PAD${n}`});return t.push({type:P.Button,name:"OCTAVE-"}),t.push({type:P.Button,name:"OCTAVE+"}),t.push({type:P.Pad,name:"BUTTON1"}),t.push({type:P.Pad,name:"BUTTON2"}),t.push({type:P.Area,name:"BUBBLE"}),t.push({type:P.Area,name:"AREA"}),t.push({type:P.Script,name:"INIT_SCRIPT"}),t}updateModuleView(){if(this.invalid)return;super.updateModuleView();const t=this.settings.getIntValueOfSetting("MPE"),n=this.settings.getSettingWithName("MpeChannels");n&&(n.disabled=t===0,n.update());const a=this.settings.getIntValueOfSetting("Expert")!==0;for(const r of this.elementList)r.name.startsWith("PAD")?r.disabled=!a:r.name.startsWith("ALL_PADS")&&(r.disabled=a);const i=pl.filter(r=>r!=="Channel");Ii(this.elementList,t===1,[...i,"ChannelX","ChannelY","ChannelZ"])}settingDidChange(t){super.settingDidChange(t),Hm(this,t)}getMidiDescription(){jm(this);const t=super.getMidiDescription();return t?this.patchHeader(t,n=>{n.set("instrumentHeader.midiHeader.type",G.PopPads),n.set("instrumentHeader.midiHeader.version",Jc[this.versionIndex]),n.set("revision",qc),n.set("instrumentHeader.color",this.color),n.set("tagPosition",this.tagPosition),n.set("options",ka(this))}):null}loadMidiData(t){const n=super.loadMidiData(t);return n===0?0:(La(this,t),Xm(this)?n:0)}initModule(){let i=0,r=0,l=14,s=0;const o=this.settings;this.addColorSetting(),this.setFullPrivileges(this.fullPrivileges),o.addSetting(M.checkbox("ReadOnly","Locked",0)),o.addSetting(M.checkbox("Vibrato","Vibrato",0)),o.addSetting(M.checkbox("Aftertouch","Aftertouch",0)),o.addSetting(M.checkbox("MPE","MPE",0)),o.addSetting(M.checkbox("Expert","Custom mapping",0));const u=M.category("Advanced","Advanced settings");o.addSetting(u),u.addSetting(M.combobox("Dynamic","Pressure range",["Low","High"],["Low","High"],"Low")),u.addSetting(M.combobox("MpeChannels","MPE Channels",["1-16","1-8","9-16"],["1-16","1-8","9-16"],"1-16")),u.addSetting(M.combobox("AftertouchType","Aftertouch",["Polyphonic","Channel"],["Polyphonic","Channel"],"Channel")),u.addSetting(M.slider("VibratoValue","Vibrato",8192,1024));const d=this.getMidiStructure();let m=1;const c=()=>({name:d[m-1].name,id:m++});let S=36;for(let C=0;C<ed;C++)for(let p=0;p<td;p++){const b=new oe;b.function.value="Note",b.note.value=S++,b.noteChannel.value=1,b.noteVelocity.limitMin=1,b.noteVelocity.limitMax=127,b.noteVelocity.valueMin=50,b.noteVelocity.valueMax=127,b.cc.value=i++,b.ccChannel.value=1,b.ccRange.limitMin=0,b.ccRange.limitMax=127,b.ccRange.valueMin=0,b.ccRange.valueMax=127,b.ccDirection.value="Natural",b.pc.value=r++,b.pcChannel.value=1,b.pitchbendChannel.value=1,b.pitchbendRange.limitMax=8192,b.pitchbendRange.valueMax=8192,b.pitchbendDirection.value="Up",b.scriptTarget.value="l3",b.scriptChannel.enable=!0,b.scriptChannelValue.value=1+p,b.scriptVibrato.enable=!0,b.scriptSustain.enable=!0,b.scriptPolyAftertouch.enable=!0,b.scriptChannelAftertouch.enable=!0;const A=new Xt(b),N=c();A.name=N.name,A.elementId=N.id,A.layerNbr=3,A.z=0,A.depth=40;const E=Mt.borderX+p*Mt.pitchX,B=Mt.borderY+C*Mt.pitchY;A.dimensionMM={x:E,y:B,width:Mt.w,height:Mt.h},A.touchAreaMM={x:E+Mt.touch,y:B+Mt.touch,width:Mt.w-2*Mt.touch,height:Mt.h-2*Mt.touch},A.radiusMM=4.5,A.isColorizable=!0,A.disabled=!0,this.addElement(A)}const y=new oe;y.note.value=36,y.noteChannel.value=1,y.noteVelocity.limitMin=1,y.noteVelocity.limitMax=127,y.noteVelocity.valueMin=50,y.noteVelocity.valueMax=127;const v=new Xt(y);v.name="ALL_PADS",v.dimensionMM={x:Mt.borderX,y:Mt.borderY,width:(td-1)*Mt.pitchX+Mt.w,height:(ed-1)*Mt.pitchY+Mt.h},v.radiusMM=4.5,v.isColorizable=!1,v.invisible=!0,v.disabled=!1,v.noMidi=!0,this.addElement(v);const x=v.settings.getSettingWithName("Note");x&&(x.dictionary.Title="First note");for(let C=0;C<2;C++){const p=new jn,b=c();p.name=b.name,p.elementId=b.id,p.layerNbr=1,p.z=0,p.depth=40;const A={x:Oe.octaveX+C*Oe.pitch,y:Oe.octaveY,width:Oe.w,height:Oe.h};p.dimensionMM=A,p.touchAreaMM={...A},p.radiusMM=3,p.isColorizable=!0,p.noBackup=!0,p.disabled=!0,this.addElement(p)}for(let C=0;C<2;C++){const p=new oe;p.function.value="Note",p.note.value=C===0?1:0,p.noteChannel.value=1,p.noteVelocity.limitMin=1,p.noteVelocity.limitMax=127,p.noteVelocity.valueMin=127,p.noteVelocity.valueMax=127,p.noteVelocity.enable=!1,p.cc.value=l++,p.ccChannel.value=1,p.ccRange.limitMin=0,p.ccRange.limitMax=127,p.ccRange.valueMin=127,p.ccRange.valueMax=127,p.ccDirection.value="Natural",p.pc.value=s++,p.pcChannel.value=1,p.pitchbendChannel.value=1,p.pitchbendRange.limitMax=8192,p.pitchbendRange.valueMax=8192,p.pitchbendDirection.value="Up",p.scriptTarget.value="l3",p.scriptChannel.enable=!0,p.scriptChannelValue.value=1+C,p.scriptVibrato.enable=!0,p.scriptPolyAftertouch.enable=!0,p.scriptChannelAftertouch.enable=!0;const b=new Xt(p),A=c();b.name=A.name,b.elementId=A.id,b.layerNbr=1,b.z=0,b.depth=40;const N={x:Oe.functionX+C*Oe.pitch,y:Oe.functionY,width:Oe.w,height:Oe.h};b.dimensionMM=N,b.touchAreaMM={...N},b.radiusMM=3,b.isColorizable=!0,b.disabled=!1,this.addElement(b)}Um(this,c,Bv,1);const g=new zn,h=c();g.name=h.name,g.elementId=h.id,g.disabled=!0,g.noBackup=!0,this.addElement(g)}}const Yv=["Blue","Red","Purple","Yellow","Pink","Green"],nd=["2","3","4","5","7","12","24","48","96"],Wo=[[1,1,1,1,1,1,1,1,1,1,1,1],[2,2,1,2,2,2,1],[2,1,2,2,2,1,2],[1,2,2,2,1,2,2],[2,2,2,1,2,2,1],[2,2,1,2,2,1,2],[2,1,2,2,1,2,2],[1,2,2,1,2,2,2],[3,1,3,2,1,2],[3,2,1,1,3,2],[2,1,2,1,2,1,2,1],[2,2,3,2,3],[3,2,2,3,2],[1,2,1,1,2,1,2,2],[2,1,3,1,1,3,1],[2,2,1,1,2,2,2],[2,3,2,3,2],[4,1,2,4,1],[2,2,2,2,2,2],[4,4,4],[3,3,3,3],[7,5],[1,4,2,1,4]],Fv=["Chromatic","Ionian major","Dorian","Phrygian","Lydian","Myxolydian","Aeolian","Locrian","MajBlues","MinBlues","Diminish","MajPenta","MinPenta","Spanish","Gypsy","Arabian","Egyptian","Ryukyu","Wholetone","Maj3rd","Min3rd","Th5","Japanese"],$v=Array.from({length:24},(e,t)=>String(t));function _v(e,t,n){let a=t;for(let i=0;i<n;i++)a+=e[i%e.length];return a}function zv(e){for(let t=0;t<Wo.length;t++){const n=Wo[t];let a=!0;for(let i=1;i<e.length;i++)if(e[i]!==e[i-1]+n[(i-1)%n.length]){a=!1;break}if(a)return[t,e[0]]}return[-1,-1]}function ad(e,t){return e!==void 0&&t!==void 0&&e===t}function jv(e,t){let n=-1,a=-1e4,i=1e4,r=-1,l="",s=-1,o=-1e4,u=1e4,d=-1,m="",c=-1,S=-1;e.forEach((v,x)=>{const g=v.settings;if(x===0){n=g.getIntValueOfSetting("Channel"),a=g.getMinValueOfSetting("NoteVelocity"),i=g.getMaxValueOfSetting("NoteVelocity"),r=g.getIntValueOfSetting("YControlEnable"),l=g.getValueOfSetting("YControlMode"),s=g.getIntValueOfSetting("YControl"),o=g.getMinValueOfSetting("YControlRange"),u=g.getMaxValueOfSetting("YControlRange"),d=g.getIntValueOfSetting("YControlOrigin"),m=g.getValueOfSetting("YControlDirection"),c=g.getIntValueOfSetting("YControlCC14Bits"),S=g.getIntValueOfSetting("YControlFine");return}g.getIntValueOfSetting("Channel")!==n&&(n=-1),g.getMinValueOfSetting("NoteVelocity")!==a&&(a=-1),g.getMaxValueOfSetting("NoteVelocity")!==i&&(i=-1),g.getIntValueOfSetting("YControlEnable")!==r&&(r=-1),ad(g.getValueOfSetting("YControlMode"),l)||(l=""),g.getIntValueOfSetting("YControl")!==s&&(s=-1),g.getMinValueOfSetting("YControlRange")!==o&&(o=-1),g.getMaxValueOfSetting("YControlRange")!==u&&(u=-1),g.getIntValueOfSetting("YControlOrigin")!==d&&(d=-1),ad(g.getValueOfSetting("YControlDirection"),m)||(m=""),g.getIntValueOfSetting("YControlCC14Bits")!==c&&(c=-1),g.getIntValueOfSetting("YControlFine")!==S&&(S=-1)});const y=t.settings;y.setIntValueOfSetting("Channel",n),a===-1||i===-1?y.setValueOfSetting("NoteVelocity",""):(y.setMinValueOfSetting("NoteVelocity",a),y.setMaxValueOfSetting("NoteVelocity",i)),y.setIntValueOfSetting("YControlEnable",r),y.setValueOfSetting("YControlMode",l??""),y.setIntValueOfSetting("YControl",s),o===-1||u===-1?y.setValueOfSetting("YControlRange",""):(y.setMinValueOfSetting("YControlRange",o),y.setMaxValueOfSetting("YControlRange",u)),y.setIntValueOfSetting("YControlOrigin",d),y.setValueOfSetting("YControlDirection",m??""),y.setIntValueOfSetting("YControlCC14Bits",c),y.setIntValueOfSetting("YControlFine",S)}const Hv={versions:[1,3],revision:1,keys:[17,17],keyW:[13.82,13.82],keyH:[58.5,58.5],keyBorderX:[1.5,1.5],keyBorderY:[1.5,1.5],keyPitchX:[15.82,15.82],keyTouchX:[1,1],buttonW:[14,14],buttonH:[14,14],buttonRadius:3,octaveSigns:!0,octaveButtons:[2,2],octaveBorderX:[33.06,33.06],octaveBorderY:[68,68],octavePitch:[19,19],functionButtons:[2,2],functionBorderX:[71.06,71.06],functionBorderY:[68,68],functionPitch:[19,19],stripW:[146.41,146.41],stripH:[20,20],stripBorderX:[109.27,109.27],stripBorderY:[65,65],stripBgX:[3,3],stripBgY:[3,3],stripTouchX:[2,2],stripFullSize:!1,stripRadius:1.5,stripColorizable:!1,stripControl:4,bubbleW:[20,20],bubbleH:[20,20],bubbleBorderX:[7,7],bubbleBorderY:[65,65],bubbleTouch:[3,3],bubbleControls:[1,2,3],firstButtonCC:0,defaults:{aftertouch:1,glissandoRange:"24"}};class Wm extends Pe{get className(){return"Scaler"}constructor(t,n,a){super(t,n,a),this.finishInit(this.cfg.versions,this.cfg.revision)}get cfg(){return Hv}get moduleType(){return G.Scaler}configureFunctionButton(t,n,a,i){t.function.value="Channel selection",t.note.value=i,t.noteChannel.value=a,t.ccRange.valueMin=0}get slotNbr(){return 3}get title(){return"Pro Scaler"}get summary(){return"The scaler has 17 keys which are perfect to play harp, xylophone or balafon instruments. Many scales are available for an immediate play. A bubble and a long ribbon complete one of the most expressive module so far."}getDefaultColor(){return Ct("Purple")}setFullPrivileges(t){super.setFullPrivileges(t),this.setColorChoices(t?Yv:["Purple"])}getMidiStructure(){const t=[];for(let n=1;n<=17;n++)t.push({type:P.Key,name:`KEY${n}`});return t.push({type:P.Glide,name:"GLISSANDO"}),t.push({type:P.Button,name:"OCTAVE-"}),t.push({type:P.Button,name:"OCTAVE+"}),t.push({type:P.Pad,name:"BUTTON1"}),t.push({type:P.Pad,name:"BUTTON2"}),t.push({type:P.Area,name:"BUBBLE"}),t.push({type:P.Strip,name:"STRIP"}),t.push({type:P.Script,name:"INIT_SCRIPT"}),t}updateNotesWithScale(t,n){if(t===-1||n===-1)return!1;const a=Wo[t];if(!a)return!1;for(const i of this.elementList)i.name.startsWith("KEY")&&i.settings.setIntValueOfSetting("Note",_v(a,n,qe(i.name,3)-1));return!0}updateModuleView(){if(this.invalid)return;super.updateModuleView();const t=this.settings.getSettingWithName("Vibrato"),n=this.settings.getSettingWithName("VibratoValue");this.settings.getIntValueOfSetting("Glissando")===1?(t&&(t.disabled=!0,t.intValue=0),n&&(n.disabled=!0)):(t&&(t.disabled=!1),n&&(n.disabled=!1)),t?.update(),n?.update();const a=this.settings.getIntValueOfSetting("MPE"),i=this.settings.getSettingWithName("MpeChannels");i&&(i.disabled=a===0,i.update());const r=this.settings.getIntValueOfSetting("Expert")!==0;for(const l of this.elementList)l.name.startsWith("KEY")?l.disabled=!r:l.name.startsWith("ALL_KEYS")&&(l.disabled=r);Ii(this.elementList,a===1,[...pl,"ChannelX","ChannelY","ChannelZ"])}settingDidChange(t){super.settingDidChange(t);const n=t.dictionary.Name;if(n==="Expert"){this.updateModuleView(),this.delegate?.modulePropertiesDidChange(this);return}if(n==="MPE"||n==="Glissando"){this.updateModuleView();return}const a=this.elementList.find(r=>r.name==="ALL_KEYS");if(!a)return;const i=t.settings?.owner;if(i===a){const r=t.dictionary.Value;if(n==="Note"||n==="Scale")this.updateNotesWithScale(a.settings.getIntValueOfSetting("Scale"),a.settings.getIntValueOfSetting("Note"));else for(const l of this.elementList)l!==i&&l.name.startsWith("KEY")&&l.settings.setValueOfSetting(n,r)}else i instanceof ot&&i.name.startsWith("KEY")&&(n==="Note"||n==="Scale"?(a.settings.setValueOfSetting("Note",""),a.settings.setValueOfSetting("Scale","")):a.settings.setValueOfSetting(n,""))}getMidiDescription(){const t=this.settings.getValueOfSetting("Dynamic")==="Low",n=this.settings.getIntValueOfSetting("Glissando")===1,a="l3";for(const r of this.elementList)if(r.name.startsWith("KEY"))r.settings.setMaxValueOfSetting("Dynamic",t?U.KeyLow:U.KeyHigh),r.midiOptions=n?H.CaptureCursor:0;else if(r.name.startsWith("BUTTON"))r.settings.setMaxValueOfSetting("Dynamic",t?U.PadLow:U.PadHigh),r.settings.setValueOfSetting("AftertouchType",this.settings.getValueOfSetting("AftertouchType"));else if(r.name.startsWith("BUBBLE"))r.settings.setMaxValueOfSetting("Dynamic",t?U.BubbleScalerLow:U.BubbleScalerHigh);else if(r.name.startsWith("OCTAVE-"))r.script=`${a}.${V.ValueZ}-12;`;else if(r.name.startsWith("OCTAVE+"))r.script=`${a}.${V.ValueZ}+12;`;else if(r.name.startsWith("GLISSANDO"))r.settings.setIntValueOfSetting("PitchRange",this.settings.getIntValueOfSetting("GlissandoRange"));else if(r.name.startsWith("INIT_SCRIPT")){let l=`${a}.${V.LimitX}=${this.settings.getMaxValueOfSetting("VibratoValue")};`;this.settings.getIntValueOfSetting("Vibrato")===1&&(l+=`${a}.${V.ValueX}=1;`),this.settings.getIntValueOfSetting("Aftertouch")===1&&(l+=this.settings.getValueOfSetting("AftertouchType")==="Polyphonic"?`${a}.${V.PolyphonicAftertouch}=1;`:`${a}.${V.ChannelAftertouch}=1;`),l+=`c${P.Glide}.${V.ValueZ}=${n?1:0};`,r.script=l}const i=super.getMidiDescription();return i?this.patchHeader(i,r=>{r.set("instrumentHeader.midiHeader.type",this.moduleType),r.set("instrumentHeader.midiHeader.version",this.cfg.versions[this.versionIndex]),r.set("revision",this.cfg.revision),r.set("instrumentHeader.color",this.color),r.set("tagPosition",this.tagPosition),r.set("options",ka(this))}):null}loadMidiData(t){const n=super.loadMidiData(t);if(n===0)return 0;La(this,t);const a=this.elementList.find(o=>o.name==="ALL_KEYS");if(!a)return 0;const i=[];let r=!0;this.settings.setIntValueOfSetting("Glissando",0);for(const o of this.elementList)o.name.startsWith("KEY")?(i[qe(o.name,3)-1]=o,r&&(r=!1,this.settings.setValueOfSetting("Dynamic",o.settings.getMaxValueOfSetting("Dynamic")===U.KeyLow?"Low":"High"))):o.name.startsWith("GLISSANDO")?this.settings.setIntValueOfSetting("GlissandoRange",o.settings.getIntValueOfSetting("PitchRange")):o.name.startsWith("INIT_SCRIPT")&&Xv(this,o.script??"");const[l,s]=zv(i.map(o=>o.settings.getIntValueOfSetting("Note")));return a.settings.setIntValueOfSetting("Scale",l),a.settings.setIntValueOfSetting("Note",s),jv(i,a),n}loadElementFromXmlDescription(t,n){switch(n){case 0:case 1:t.name?.startsWith("FUNCTION")&&(t.name=t.name.split("FUNCTION").join("BUTTON"));break;case 2:break;default:return!1}return super.loadElementFromXmlDescription(t,n)}initModule(){const t=this.versionIndex,n=this.cfg,a=11,i=52,r=10,l=74;let s=0,o=n.firstButtonCC,u=0;const d=this.settings;this.addColorSetting(),this.setFullPrivileges(this.fullPrivileges),d.addSetting(M.checkbox("ReadOnly","Locked",0)),d.addSetting(M.checkbox("Vibrato","Vibrato",1)),d.addSetting(M.checkbox("Glissando","Glissando",0)),d.addSetting(M.checkbox("Aftertouch","Aftertouch",n.defaults.aftertouch)),d.addSetting(M.checkbox("MPE","MPE",0)),d.addSetting(M.checkbox("Expert","Custom mapping",0));const m=M.category("Advanced","Advanced settings");d.addSetting(m),m.addSetting(M.combobox("Dynamic","Pressure range",["Low","High"],["Low","High"],"Low")),m.addSetting(M.combobox("MpeChannels","MPE Channels",["1-16","1-8","9-16"],["1-16","1-8","9-16"],"1-16")),m.addSetting(M.slider("VibratoValue","Vibrato",8192,1024)),m.addSetting(M.combobox("GlissandoRange","Glissando",nd.map(X=>`${X} semitones`),nd,n.defaults.glissandoRange)),m.addSetting(M.combobox("AftertouchType","Aftertouch",["Polyphonic","Channel"],["Polyphonic","Channel"],"Channel"));const c=this.getMidiStructure();let S=1;const y=X=>{const w=new Ks;return w.channel.value=r,w.note.value=X,w.noteVelocity.limitMin=1,w.noteVelocity.limitMax=127,w.noteVelocity.valueMin=50,w.noteVelocity.valueMax=127,w.yControlEnable.value=1,w.yControl.value=l,w.yControlRange.limitMin=0,w.yControlRange.limitMax=127,w.yControlRange.valueMin=0,w.yControlRange.valueMax=127,w.yControlDirection.value="Natural",w.yControlMode.value="Absolute",w.yControlOrigin.value=64,w.yControlCC14Bits.value=0,w.yControlFine.value=75,w};for(let X=0;X<n.keys[t];X++){const w=new Di(y(0));w.name=c[S-1].name,w.elementId=S++,w.layerNbr=3,w.z=0,w.depth=40;const k=n.keyBorderX[t]+X*n.keyPitchX[t];w.dimensionMM={x:k,y:n.keyBorderY[t],width:n.keyW[t],height:n.keyH[t]},w.touchAreaMM={x:k+n.keyTouchX[t],y:n.keyBorderY[t],width:n.keyW[t]-2*n.keyTouchX[t],height:n.keyH[t]-n.keyTouchX[t]},w.radiusMM=3,w.isColorizable=!0,w.disabled=!0,this.addElement(w)}const v=new Di(y(i));v.dimensionMM={x:n.keyBorderX[t],y:n.keyBorderY[t],width:this.sizeMM.width-2*n.keyBorderX[t],height:n.keyH[t]},v.name="ALL_KEYS",v.layerNbr=1,v.radiusMM=3,v.isColorizable=!1,v.invisible=!0,v.disabled=!1,this.addElement(v);const x=v.settings.getSettingWithName("Note");x.dictionary.Title="First note",v.settings.addSettingAfter(M.combobox("Scale","Scale",Fv,$v,String(a)),x);const g=new Qs;g.pitchRange.value=24,g.elementNbr.value=n.keys[t],g.elementType.value=P.Key,g.elementList.values=Array.from({length:n.keys[t]},(X,w)=>String(w+1));const h=new Js(g);h.name=c[S-1].name,h.elementId=S++,h.layerNbr=4,h.z=0,h.depth=40;const C={x:n.keyBorderX[t]/2,y:n.keyBorderY[t],width:this.slotNbr*90-n.keyBorderX[t],height:n.keyH[t]};h.dimensionMM=C,h.touchAreaMM={...C},h.isColorizable=!1,h.invisible=!0,h.disabled=!0,this.addElement(h),this.updateNotesWithScale(a,i);for(let X=0;X<n.octaveButtons[t];X++){const w=new jn;w.name=c[S-1].name,w.elementId=S++,w.layerNbr=1,w.z=0,w.depth=40;const k={x:n.octaveBorderX[t]+X*n.octavePitch[t],y:n.octaveBorderY[t],width:n.buttonW[t],height:n.buttonH[t]};w.dimensionMM=k,w.touchAreaMM={...k},w.radiusMM=n.buttonRadius,w.isColorizable=!0,w.noBackup=!0,w.disabled=!0,this.addElement(w),n.octaveSigns&&eu(this,w,X!==0)}for(let X=0;X<n.functionButtons[t];X++){const w=new oe;this.configureFunctionButton(w,X,r,s++),w.noteVelocity.limitMin=1,w.noteVelocity.limitMax=127,w.noteVelocity.valueMin=127,w.noteVelocity.valueMax=127,w.noteVelocity.enable=!1,w.cc.value=o++,w.ccChannel.value=r,w.ccRange.limitMin=0,w.ccRange.limitMax=127,w.ccRange.valueMax=127,w.ccDirection.value="Natural",w.pc.value=u++,w.pcChannel.value=r,w.pitchbendChannel.value=r,w.pitchbendRange.limitMax=8192,w.pitchbendRange.valueMax=8192,w.pitchbendDirection.value="Up",w.scriptTarget.value="l3",w.scriptChannel.enable=!0,w.scriptChannelValue.value=r+X,w.scriptVibrato.enable=!0,w.scriptSustain.enable=!0,w.scriptPolyAftertouch.enable=!0,w.scriptChannelAftertouch.enable=!0,w.scriptYControl.enable=!0,w.scriptGlissando.value=`l3.${V.Options}^${H.CaptureCursor};c${P.Glide}.${V.ValueZ}^1;`;const k=new Xt(w);k.name=c[S-1].name,k.elementId=S++,k.layerNbr=4,k.z=0,k.depth=40;const at={x:n.functionBorderX[t]+X*n.functionPitch[t],y:n.functionBorderY[t],width:n.buttonW[t],height:n.buttonH[t]};k.dimensionMM=at,k.touchAreaMM={...at},k.radiusMM=n.buttonRadius,k.isColorizable=!0,k.disabled=!1,this.addElement(k)}const p=new wa;p.type.value="BUBBLE";const[b,A,N]=n.bubbleControls;for(const[X,w]of[[p.x,b],[p.y,A]])X.enable.value=0,X.channel.value=r,X.control.value=w,X.range.limitMin=0,X.range.limitMax=127,X.range.valueMin=0,X.range.valueMax=127,X.direction.value="Natural",X.startValue.value=64;p.z.enable.value=1,p.z.channel.value=r,p.z.control.value=N,p.z.range.limitMin=0,p.z.range.limitMax=127,p.z.range.valueMin=0,p.z.range.valueMax=127,p.z.direction.value="Natural";const E=new Fn(p);E.name=c[S-1].name,E.elementId=S++,E.layerNbr=4,E.z=20,E.depth=127,E.dimensionMM={x:n.bubbleBorderX[t],y:n.bubbleBorderY[t],width:n.bubbleW[t],height:n.bubbleH[t]},E.touchAreaMM={x:n.bubbleBorderX[t]+n.bubbleTouch[t],y:n.bubbleBorderY[t]+n.bubbleTouch[t],width:n.bubbleW[t]-2*n.bubbleTouch[t],height:n.bubbleH[t]-2*n.bubbleTouch[t]},E.radiusMM=90,E.isColorizable=!0,this.addElement(E);const B=new ot;B.dimensionMM={x:n.stripBorderX[t],y:n.stripBorderY[t],width:n.stripW[t],height:n.stripH[t]},B.isColorizable=!0,B.radiusMM=4.5,this.addBackgroundElement(B);const R=new qs;R.function.value="Control Change",R.orientation.value="Horizontal",R.cc.value=n.stripControl,R.ccChannel.value=r,R.ccRange.limitMin=0,R.ccRange.limitMax=127,R.ccRange.valueMin=0,R.ccRange.valueMax=127,R.ccMode.value="Absolute",R.ccDemultiplier.value=2,R.ccDirection.value="Natural",R.cc14bitsEnable.value=0,R.ccFine.value=R.cc.value+1,R.pitchbendRange.limitMax=8192,R.pitchbendRange.valueMax=8192,R.pitchbendChannel.value=r,R.pitchbendDirection.value="Up";const $=new tu(R);$.name=c[S-1].name,$.elementId=S++,$.layerNbr=4,$.z=0,$.depth=40,$.dimensionMM=n.stripFullSize?{x:n.stripBorderX[t],y:n.stripBorderY[t],width:n.stripW[t],height:n.stripH[t]}:{x:n.stripBorderX[t]+n.stripBgX[t],y:n.stripBorderY[t]+n.stripBgY[t],width:n.stripW[t]-2*n.stripBgX[t],height:n.stripH[t]-2*n.stripBgY[t]},$.touchAreaMM={x:n.stripBorderX[t]+n.stripBgX[t]+n.stripTouchX[t],y:n.stripBorderY[t]+n.stripBgY[t],width:n.stripW[t]-2*n.stripBgX[t]-2*n.stripTouchX[t],height:n.stripH[t]-2*n.stripBgY[t]},$.radiusMM=n.stripRadius,$.isColorizable=n.stripColorizable,this.addElement($);const nt=new zn;nt.name=c[S-1].name,nt.elementId=S++,nt.disabled=!0,nt.noBackup=!0,this.addElement(nt)}}function Xv(e,t){const n=e.settings;n.setIntValueOfSetting("Vibrato",0),n.setIntValueOfSetting("Aftertouch",0);for(const a of Ra(t))switch(a.parameter){case V.LimitX:n.setMaxValueOfSetting("VibratoValue",a.readValue());break;case V.ValueX:n.setIntValueOfSetting("Vibrato",1);break;case V.ValueZ:n.setIntValueOfSetting("Glissando",a.readValue());break;case V.PolyphonicAftertouch:n.setIntValueOfSetting("Aftertouch",1),n.setValueOfSetting("AftertouchType","Polyphonic");break;case V.ChannelAftertouch:n.setIntValueOfSetting("Aftertouch",1),n.setValueOfSetting("AftertouchType","Channel");break}}const Uv={versions:[3],revision:1,keys:[17],keyW:[13.82],keyH:[67.5],keyBorderX:[1.5],keyBorderY:[1.51],keyPitchX:[15.82],keyTouchX:[1],buttonW:[12],buttonH:[12],buttonRadius:2,octaveButtons:[2],octaveBorderX:[40],octaveBorderY:[74.01],octavePitch:[20],octaveSigns:!1,functionButtons:[2],functionBorderX:[213.86],functionBorderY:[74.01],functionPitch:[20],stripW:[108],stripH:[14],stripBorderX:[88.6],stripBorderY:[72.9],stripBgX:[1],stripBgY:[1],stripTouchX:[2],stripFullSize:!0,stripRadius:2,stripColorizable:!0,stripControl:12,bubbleW:[18],bubbleH:[18],bubbleBorderX:[9],bubbleBorderY:[70.5],bubbleTouch:[3],bubbleControls:[75,76,1],firstButtonCC:14,defaults:{aftertouch:0,glissandoRange:"48"}};class Wv extends Wm{get className(){return"PopScaler"}get cfg(){return Uv}get moduleType(){return G.PopScaler}get tagPosition(){return 3}get title(){return"Play Keys"}get summary(){return"17 keys to play harp, xylophone or synth, a bubble and a ribbon to control effects. A play and a record button to launch and capture tracks."}getDefaultColor(){return Ct("Pantone3005C")}setFullPrivileges(t){Ze.prototype.setFullPrivileges.call(this,t),this.setColorChoices(["Pantone3005C","Pantone116C"],Bi)}configureFunctionButton(t,n){t.function.value="Note",t.note.value=n===0?1:0,t.noteChannel.value=1,t.ccRange.valueMin=127}}let id=!1;function Zv(){id||(id=!0,$t(G.Pads,Dv),$t(G.Area,ua),$t(G.Strips,ga),$t(G.Synth,yv),$t(G.Rounds,da),$t(G.Fretboard,Fm),$t(G.Bubbles,ca),$t(G.GrandSynth,zm),$t(G.GrandFretboard,$m),$t(G.Scaler,Wm),$t(G.PopKeys,Nv),$t(G.PopScaler,Wv),$t(G.PopFretboard,Vv),$t(G.PopPads,Tv),$t(G.PopAudio,Iv))}Zv();D.init();{const e=(t,n)=>{const a=document.createElement("link");a.rel=t,a.href=n,document.head.appendChild(a)};e("manifest","manifest.webmanifest"),e("icon","icon.svg"),"serviceWorker"in navigator&&window.isSecureContext&&window.addEventListener("load",()=>void navigator.serviceWorker.register("sw.js"))}Sm(document.getElementById("root")).render(f.jsx(Z.StrictMode,{children:f.jsx(av,{})}));
