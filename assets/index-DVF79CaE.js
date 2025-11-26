(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))s(h);new MutationObserver(h=>{for(const f of h)if(f.type==="childList")for(const S of f.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&s(S)}).observe(document,{childList:!0,subtree:!0});function c(h){const f={};return h.integrity&&(f.integrity=h.integrity),h.referrerPolicy&&(f.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?f.credentials="include":h.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(h){if(h.ep)return;h.ep=!0;const f=c(h);fetch(h.href,f)}})();var Ms={exports:{}},jr={};var Zm;function ng(){if(Zm)return jr;Zm=1;var l=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function c(s,h,f){var S=null;if(f!==void 0&&(S=""+f),h.key!==void 0&&(S=""+h.key),"key"in h){f={};for(var C in h)C!=="key"&&(f[C]=h[C])}else f=h;return h=f.ref,{$$typeof:l,type:s,key:S,ref:h!==void 0?h:null,props:f}}return jr.Fragment=d,jr.jsx=c,jr.jsxs=c,jr}var Im;function ig(){return Im||(Im=1,Ms.exports=ng()),Ms.exports}var A=ig(),Ds={exports:{}},I={};var Jm;function rg(){if(Jm)return I;Jm=1;var l=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),S=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),j=Symbol.iterator;function H(g){return g===null||typeof g!="object"?null:(g=j&&g[j]||g["@@iterator"],typeof g=="function"?g:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W=Object.assign,L={};function G(g,_,B){this.props=g,this.context=_,this.refs=L,this.updater=B||F}G.prototype.isReactComponent={},G.prototype.setState=function(g,_){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,_,"setState")},G.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function Y(){}Y.prototype=G.prototype;function P(g,_,B){this.props=g,this.context=_,this.refs=L,this.updater=B||F}var ye=P.prototype=new Y;ye.constructor=P,W(ye,G.prototype),ye.isPureReactComponent=!0;var ke=Array.isArray;function ze(){}var J={H:null,A:null,T:null,S:null},Ae=Object.prototype.hasOwnProperty;function $(g,_,B){var V=B.ref;return{$$typeof:l,type:g,key:_,ref:V!==void 0?V:null,props:B}}function ot(g,_){return $(g.type,_,g.props)}function lt(g){return typeof g=="object"&&g!==null&&g.$$typeof===l}function Ie(g){var _={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(B){return _[B]})}var Dn=/\/+/g;function Lt(g,_){return typeof g=="object"&&g!==null&&g.key!=null?Ie(""+g.key):_.toString(36)}function Et(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(ze,ze):(g.status="pending",g.then(function(_){g.status==="pending"&&(g.status="fulfilled",g.value=_)},function(_){g.status==="pending"&&(g.status="rejected",g.reason=_)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function z(g,_,B,V,ee){var ie=typeof g;(ie==="undefined"||ie==="boolean")&&(g=null);var me=!1;if(g===null)me=!0;else switch(ie){case"bigint":case"string":case"number":me=!0;break;case"object":switch(g.$$typeof){case l:case d:me=!0;break;case M:return me=g._init,z(me(g._payload),_,B,V,ee)}}if(me)return ee=ee(g),me=V===""?"."+Lt(g,0):V,ke(ee)?(B="",me!=null&&(B=me.replace(Dn,"$&/")+"/"),z(ee,_,B,"",function(Fi){return Fi})):ee!=null&&(lt(ee)&&(ee=ot(ee,B+(ee.key==null||g&&g.key===ee.key?"":(""+ee.key).replace(Dn,"$&/")+"/")+me)),_.push(ee)),1;me=0;var Ke=V===""?".":V+":";if(ke(g))for(var Re=0;Re<g.length;Re++)V=g[Re],ie=Ke+Lt(V,Re),me+=z(V,_,B,ie,ee);else if(Re=H(g),typeof Re=="function")for(g=Re.call(g),Re=0;!(V=g.next()).done;)V=V.value,ie=Ke+Lt(V,Re++),me+=z(V,_,B,ie,ee);else if(ie==="object"){if(typeof g.then=="function")return z(Et(g),_,B,V,ee);throw _=String(g),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.")}return me}function q(g,_,B){if(g==null)return g;var V=[],ee=0;return z(g,V,"","",function(ie){return _.call(B,ie,ee++)}),V}function Z(g){if(g._status===-1){var _=g._result;_=_(),_.then(function(B){(g._status===0||g._status===-1)&&(g._status=1,g._result=B)},function(B){(g._status===0||g._status===-1)&&(g._status=2,g._result=B)}),g._status===-1&&(g._status=0,g._result=_)}if(g._status===1)return g._result.default;throw g._result}var fe=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var _=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(_))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)},Se={map:q,forEach:function(g,_,B){q(g,function(){_.apply(this,arguments)},B)},count:function(g){var _=0;return q(g,function(){_++}),_},toArray:function(g){return q(g,function(_){return _})||[]},only:function(g){if(!lt(g))throw Error("React.Children.only expected to receive a single React element child.");return g}};return I.Activity=O,I.Children=Se,I.Component=G,I.Fragment=c,I.Profiler=h,I.PureComponent=P,I.StrictMode=s,I.Suspense=y,I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,I.__COMPILER_RUNTIME={__proto__:null,c:function(g){return J.H.useMemoCache(g)}},I.cache=function(g){return function(){return g.apply(null,arguments)}},I.cacheSignal=function(){return null},I.cloneElement=function(g,_,B){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var V=W({},g.props),ee=g.key;if(_!=null)for(ie in _.key!==void 0&&(ee=""+_.key),_)!Ae.call(_,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&_.ref===void 0||(V[ie]=_[ie]);var ie=arguments.length-2;if(ie===1)V.children=B;else if(1<ie){for(var me=Array(ie),Ke=0;Ke<ie;Ke++)me[Ke]=arguments[Ke+2];V.children=me}return $(g.type,ee,V)},I.createContext=function(g){return g={$$typeof:S,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:f,_context:g},g},I.createElement=function(g,_,B){var V,ee={},ie=null;if(_!=null)for(V in _.key!==void 0&&(ie=""+_.key),_)Ae.call(_,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(ee[V]=_[V]);var me=arguments.length-2;if(me===1)ee.children=B;else if(1<me){for(var Ke=Array(me),Re=0;Re<me;Re++)Ke[Re]=arguments[Re+2];ee.children=Ke}if(g&&g.defaultProps)for(V in me=g.defaultProps,me)ee[V]===void 0&&(ee[V]=me[V]);return $(g,ie,ee)},I.createRef=function(){return{current:null}},I.forwardRef=function(g){return{$$typeof:C,render:g}},I.isValidElement=lt,I.lazy=function(g){return{$$typeof:M,_payload:{_status:-1,_result:g},_init:Z}},I.memo=function(g,_){return{$$typeof:v,type:g,compare:_===void 0?null:_}},I.startTransition=function(g){var _=J.T,B={};J.T=B;try{var V=g(),ee=J.S;ee!==null&&ee(B,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(ze,fe)}catch(ie){fe(ie)}finally{_!==null&&B.types!==null&&(_.types=B.types),J.T=_}},I.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},I.use=function(g){return J.H.use(g)},I.useActionState=function(g,_,B){return J.H.useActionState(g,_,B)},I.useCallback=function(g,_){return J.H.useCallback(g,_)},I.useContext=function(g){return J.H.useContext(g)},I.useDebugValue=function(){},I.useDeferredValue=function(g,_){return J.H.useDeferredValue(g,_)},I.useEffect=function(g,_){return J.H.useEffect(g,_)},I.useEffectEvent=function(g){return J.H.useEffectEvent(g)},I.useId=function(){return J.H.useId()},I.useImperativeHandle=function(g,_,B){return J.H.useImperativeHandle(g,_,B)},I.useInsertionEffect=function(g,_){return J.H.useInsertionEffect(g,_)},I.useLayoutEffect=function(g,_){return J.H.useLayoutEffect(g,_)},I.useMemo=function(g,_){return J.H.useMemo(g,_)},I.useOptimistic=function(g,_){return J.H.useOptimistic(g,_)},I.useReducer=function(g,_,B){return J.H.useReducer(g,_,B)},I.useRef=function(g){return J.H.useRef(g)},I.useState=function(g){return J.H.useState(g)},I.useSyncExternalStore=function(g,_,B){return J.H.useSyncExternalStore(g,_,B)},I.useTransition=function(){return J.H.useTransition()},I.version="19.2.0",I}var $m;function Ws(){return $m||($m=1,Ds.exports=rg()),Ds.exports}var E=Ws(),_s={exports:{}},qr={},js={exports:{}},qs={};var eh;function ag(){return eh||(eh=1,(function(l){function d(z,q){var Z=z.length;z.push(q);e:for(;0<Z;){var fe=Z-1>>>1,Se=z[fe];if(0<h(Se,q))z[fe]=q,z[Z]=Se,Z=fe;else break e}}function c(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var q=z[0],Z=z.pop();if(Z!==q){z[0]=Z;e:for(var fe=0,Se=z.length,g=Se>>>1;fe<g;){var _=2*(fe+1)-1,B=z[_],V=_+1,ee=z[V];if(0>h(B,Z))V<Se&&0>h(ee,B)?(z[fe]=ee,z[V]=Z,fe=V):(z[fe]=B,z[_]=Z,fe=_);else if(V<Se&&0>h(ee,Z))z[fe]=ee,z[V]=Z,fe=V;else break e}}return q}function h(z,q){var Z=z.sortIndex-q.sortIndex;return Z!==0?Z:z.id-q.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;l.unstable_now=function(){return f.now()}}else{var S=Date,C=S.now();l.unstable_now=function(){return S.now()-C}}var y=[],v=[],M=1,O=null,j=3,H=!1,F=!1,W=!1,L=!1,G=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function ye(z){for(var q=c(v);q!==null;){if(q.callback===null)s(v);else if(q.startTime<=z)s(v),q.sortIndex=q.expirationTime,d(y,q);else break;q=c(v)}}function ke(z){if(W=!1,ye(z),!F)if(c(y)!==null)F=!0,ze||(ze=!0,Ie());else{var q=c(v);q!==null&&Et(ke,q.startTime-z)}}var ze=!1,J=-1,Ae=5,$=-1;function ot(){return L?!0:!(l.unstable_now()-$<Ae)}function lt(){if(L=!1,ze){var z=l.unstable_now();$=z;var q=!0;try{e:{F=!1,W&&(W=!1,Y(J),J=-1),H=!0;var Z=j;try{t:{for(ye(z),O=c(y);O!==null&&!(O.expirationTime>z&&ot());){var fe=O.callback;if(typeof fe=="function"){O.callback=null,j=O.priorityLevel;var Se=fe(O.expirationTime<=z);if(z=l.unstable_now(),typeof Se=="function"){O.callback=Se,ye(z),q=!0;break t}O===c(y)&&s(y),ye(z)}else s(y);O=c(y)}if(O!==null)q=!0;else{var g=c(v);g!==null&&Et(ke,g.startTime-z),q=!1}}break e}finally{O=null,j=Z,H=!1}q=void 0}}finally{q?Ie():ze=!1}}}var Ie;if(typeof P=="function")Ie=function(){P(lt)};else if(typeof MessageChannel<"u"){var Dn=new MessageChannel,Lt=Dn.port2;Dn.port1.onmessage=lt,Ie=function(){Lt.postMessage(null)}}else Ie=function(){G(lt,0)};function Et(z,q){J=G(function(){z(l.unstable_now())},q)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(z){z.callback=null},l.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ae=0<z?Math.floor(1e3/z):5},l.unstable_getCurrentPriorityLevel=function(){return j},l.unstable_next=function(z){switch(j){case 1:case 2:case 3:var q=3;break;default:q=j}var Z=j;j=q;try{return z()}finally{j=Z}},l.unstable_requestPaint=function(){L=!0},l.unstable_runWithPriority=function(z,q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Z=j;j=z;try{return q()}finally{j=Z}},l.unstable_scheduleCallback=function(z,q,Z){var fe=l.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?fe+Z:fe):Z=fe,z){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=Z+Se,z={id:M++,callback:q,priorityLevel:z,startTime:Z,expirationTime:Se,sortIndex:-1},Z>fe?(z.sortIndex=Z,d(v,z),c(y)===null&&z===c(v)&&(W?(Y(J),J=-1):W=!0,Et(ke,Z-fe))):(z.sortIndex=Se,d(y,z),F||H||(F=!0,ze||(ze=!0,Ie()))),z},l.unstable_shouldYield=ot,l.unstable_wrapCallback=function(z){var q=j;return function(){var Z=j;j=q;try{return z.apply(this,arguments)}finally{j=Z}}}})(qs)),qs}var th;function og(){return th||(th=1,js.exports=ag()),js.exports}var Bs={exports:{}},Pe={};var nh;function lg(){if(nh)return Pe;nh=1;var l=Ws();function d(y){var v="https://react.dev/errors/"+y;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var M=2;M<arguments.length;M++)v+="&args[]="+encodeURIComponent(arguments[M])}return"Minified React error #"+y+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var s={d:{f:c,r:function(){throw Error(d(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},h=Symbol.for("react.portal");function f(y,v,M){var O=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:O==null?null:""+O,children:y,containerInfo:v,implementation:M}}var S=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function C(y,v){if(y==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return Pe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Pe.createPortal=function(y,v){var M=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(d(299));return f(y,v,null,M)},Pe.flushSync=function(y){var v=S.T,M=s.p;try{if(S.T=null,s.p=2,y)return y()}finally{S.T=v,s.p=M,s.d.f()}},Pe.preconnect=function(y,v){typeof y=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,s.d.C(y,v))},Pe.prefetchDNS=function(y){typeof y=="string"&&s.d.D(y)},Pe.preinit=function(y,v){if(typeof y=="string"&&v&&typeof v.as=="string"){var M=v.as,O=C(M,v.crossOrigin),j=typeof v.integrity=="string"?v.integrity:void 0,H=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;M==="style"?s.d.S(y,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:O,integrity:j,fetchPriority:H}):M==="script"&&s.d.X(y,{crossOrigin:O,integrity:j,fetchPriority:H,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},Pe.preinitModule=function(y,v){if(typeof y=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var M=C(v.as,v.crossOrigin);s.d.M(y,{crossOrigin:M,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&s.d.M(y)},Pe.preload=function(y,v){if(typeof y=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var M=v.as,O=C(M,v.crossOrigin);s.d.L(y,M,{crossOrigin:O,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},Pe.preloadModule=function(y,v){if(typeof y=="string")if(v){var M=C(v.as,v.crossOrigin);s.d.m(y,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:M,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else s.d.m(y)},Pe.requestFormReset=function(y){s.d.r(y)},Pe.unstable_batchedUpdates=function(y,v){return y(v)},Pe.useFormState=function(y,v,M){return S.H.useFormState(y,v,M)},Pe.useFormStatus=function(){return S.H.useHostTransitionStatus()},Pe.version="19.2.0",Pe}var ih;function sg(){if(ih)return Bs.exports;ih=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(d){console.error(d)}}return l(),Bs.exports=lg(),Bs.exports}var rh;function ug(){if(rh)return qr;rh=1;var l=og(),d=Ws(),c=sg();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function S(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function C(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(f(e)!==e)throw Error(s(188))}function v(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,i=t;;){var r=n.return;if(r===null)break;var a=r.alternate;if(a===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===n)return y(r),e;if(a===i)return y(r),t;a=a.sibling}throw Error(s(188))}if(n.return!==i.return)n=r,i=a;else{for(var o=!1,u=r.child;u;){if(u===n){o=!0,n=r,i=a;break}if(u===i){o=!0,i=r,n=a;break}u=u.sibling}if(!o){for(u=a.child;u;){if(u===n){o=!0,n=a,i=r;break}if(u===i){o=!0,i=a,n=r;break}u=u.sibling}if(!o)throw Error(s(189))}}if(n.alternate!==i)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function M(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=M(e),t!==null)return t;e=e.sibling}return null}var O=Object.assign,j=Symbol.for("react.element"),H=Symbol.for("react.transitional.element"),F=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),Y=Symbol.for("react.consumer"),P=Symbol.for("react.context"),ye=Symbol.for("react.forward_ref"),ke=Symbol.for("react.suspense"),ze=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),Ae=Symbol.for("react.lazy"),$=Symbol.for("react.activity"),ot=Symbol.for("react.memo_cache_sentinel"),lt=Symbol.iterator;function Ie(e){return e===null||typeof e!="object"?null:(e=lt&&e[lt]||e["@@iterator"],typeof e=="function"?e:null)}var Dn=Symbol.for("react.client.reference");function Lt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Dn?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case W:return"Fragment";case G:return"Profiler";case L:return"StrictMode";case ke:return"Suspense";case ze:return"SuspenseList";case $:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case F:return"Portal";case P:return e.displayName||"Context";case Y:return(e._context.displayName||"Context")+".Consumer";case ye:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case J:return t=e.displayName||null,t!==null?t:Lt(e.type)||"Memo";case Ae:t=e._payload,e=e._init;try{return Lt(e(t))}catch{}}return null}var Et=Array.isArray,z=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},fe=[],Se=-1;function g(e){return{current:e}}function _(e){0>Se||(e.current=fe[Se],fe[Se]=null,Se--)}function B(e,t){Se++,fe[Se]=e.current,e.current=t}var V=g(null),ee=g(null),ie=g(null),me=g(null);function Ke(e,t){switch(B(ie,t),B(ee,e),B(V,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ym(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ym(t),e=Sm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}_(V),B(V,e)}function Re(){_(V),_(ee),_(ie)}function Fi(e){e.memoizedState!==null&&B(me,e);var t=V.current,n=Sm(t,e.type);t!==n&&(B(ee,e),B(V,n))}function Wr(e){ee.current===e&&(_(V),_(ee)),me.current===e&&(_(me),Rr._currentValue=Z)}var po,Ks;function _n(e){if(po===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);po=t&&t[1]||"",Ks=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+po+e+Ks}var fo=!1;function go(e,t){if(!e||fo)return"";fo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(k){var T=k}Reflect.construct(e,[],D)}else{try{D.call()}catch(k){T=k}e.call(D.prototype)}}else{try{throw Error()}catch(k){T=k}(D=e())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(k){if(k&&T&&typeof k.stack=="string")return[k.stack,T.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),o=a[0],u=a[1];if(o&&u){var m=o.split(`
`),x=u.split(`
`);for(r=i=0;i<m.length&&!m[i].includes("DetermineComponentFrameRoot");)i++;for(;r<x.length&&!x[r].includes("DetermineComponentFrameRoot");)r++;if(i===m.length||r===x.length)for(i=m.length-1,r=x.length-1;1<=i&&0<=r&&m[i]!==x[r];)r--;for(;1<=i&&0<=r;i--,r--)if(m[i]!==x[r]){if(i!==1||r!==1)do if(i--,r--,0>r||m[i]!==x[r]){var N=`
`+m[i].replace(" at new "," at ");return e.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",e.displayName)),N}while(1<=i&&0<=r);break}}}finally{fo=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?_n(n):""}function Mh(e,t){switch(e.tag){case 26:case 27:case 5:return _n(e.type);case 16:return _n("Lazy");case 13:return e.child!==t&&t!==null?_n("Suspense Fallback"):_n("Suspense");case 19:return _n("SuspenseList");case 0:case 15:return go(e.type,!1);case 11:return go(e.type.render,!1);case 1:return go(e.type,!0);case 31:return _n("Activity");default:return""}}function Zs(e){try{var t="",n=null;do t+=Mh(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var vo=Object.prototype.hasOwnProperty,bo=l.unstable_scheduleCallback,yo=l.unstable_cancelCallback,Dh=l.unstable_shouldYield,_h=l.unstable_requestPaint,st=l.unstable_now,jh=l.unstable_getCurrentPriorityLevel,Is=l.unstable_ImmediatePriority,Js=l.unstable_UserBlockingPriority,Vr=l.unstable_NormalPriority,qh=l.unstable_LowPriority,$s=l.unstable_IdlePriority,Bh=l.log,Hh=l.unstable_setDisableYieldValue,Wi=null,ut=null;function ln(e){if(typeof Bh=="function"&&Hh(e),ut&&typeof ut.setStrictMode=="function")try{ut.setStrictMode(Wi,e)}catch{}}var ct=Math.clz32?Math.clz32:Gh,Lh=Math.log,Uh=Math.LN2;function Gh(e){return e>>>=0,e===0?32:31-(Lh(e)/Uh|0)|0}var Xr=256,Yr=262144,Qr=4194304;function jn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Pr(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var r=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var u=i&134217727;return u!==0?(i=u&~a,i!==0?r=jn(i):(o&=u,o!==0?r=jn(o):n||(n=u&~e,n!==0&&(r=jn(n))))):(u=i&~a,u!==0?r=jn(u):o!==0?r=jn(o):n||(n=i&~e,n!==0&&(r=jn(n)))),r===0?0:t!==0&&t!==r&&(t&a)===0&&(a=r&-r,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:r}function Vi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Fh(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function eu(){var e=Qr;return Qr<<=1,(Qr&62914560)===0&&(Qr=4194304),e}function So(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Wh(e,t,n,i,r,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var u=e.entanglements,m=e.expirationTimes,x=e.hiddenUpdates;for(n=o&~n;0<n;){var N=31-ct(n),D=1<<N;u[N]=0,m[N]=-1;var T=x[N];if(T!==null)for(x[N]=null,N=0;N<T.length;N++){var k=T[N];k!==null&&(k.lane&=-536870913)}n&=~D}i!==0&&tu(e,i,0),a!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function tu(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-ct(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function nu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-ct(n),r=1<<i;r&t|e[i]&t&&(e[i]|=t),n&=~r}}function iu(e,t){var n=t&-t;return n=(n&42)!==0?1:wo(n),(n&(e.suspendedLanes|t))!==0?0:n}function wo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function xo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ru(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:Wm(e.type))}function au(e,t){var n=q.p;try{return q.p=e,t()}finally{q.p=n}}var sn=Math.random().toString(36).slice(2),Fe="__reactFiber$"+sn,Je="__reactProps$"+sn,ei="__reactContainer$"+sn,To="__reactEvents$"+sn,Vh="__reactListeners$"+sn,Xh="__reactHandles$"+sn,ou="__reactResources$"+sn,Yi="__reactMarker$"+sn;function ko(e){delete e[Fe],delete e[Je],delete e[To],delete e[Vh],delete e[Xh]}function ti(e){var t=e[Fe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ei]||n[Fe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Nm(e);e!==null;){if(n=e[Fe])return n;e=Nm(e)}return t}e=n,n=e.parentNode}return null}function ni(e){if(e=e[Fe]||e[ei]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Qi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function ii(e){var t=e[ou];return t||(t=e[ou]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ue(e){e[Yi]=!0}var lu=new Set,su={};function qn(e,t){ri(e,t),ri(e+"Capture",t)}function ri(e,t){for(su[e]=t,e=0;e<t.length;e++)lu.add(t[e])}var Yh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),uu={},cu={};function Qh(e){return vo.call(cu,e)?!0:vo.call(uu,e)?!1:Yh.test(e)?cu[e]=!0:(uu[e]=!0,!1)}function Kr(e,t,n){if(Qh(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Zr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Ut(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function bt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function du(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ph(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var r=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(o){n=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Co(e){if(!e._valueTracker){var t=du(e)?"checked":"value";e._valueTracker=Ph(e,t,""+e[t])}}function mu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=du(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Ir(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Kh=/[\n"\\]/g;function yt(e){return e.replace(Kh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Oo(e,t,n,i,r,a,o,u){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+bt(t)):e.value!==""+bt(t)&&(e.value=""+bt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?No(e,o,bt(t)):n!=null?No(e,o,bt(n)):i!=null&&e.removeAttribute("value"),r==null&&a!=null&&(e.defaultChecked=!!a),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+bt(u):e.removeAttribute("name")}function hu(e,t,n,i,r,a,o,u){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){Co(e);return}n=n!=null?""+bt(n):"",t=t!=null?""+bt(t):n,u||t===e.value||(e.value=t),e.defaultValue=t}i=i??r,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=u?e.checked:!!i,e.defaultChecked=!!i,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),Co(e)}function No(e,t,n){t==="number"&&Ir(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ai(e,t,n,i){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&i&&(e[n].defaultSelected=!0)}else{for(n=""+bt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function pu(e,t,n){if(t!=null&&(t=""+bt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+bt(n):""}function fu(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(s(92));if(Et(i)){if(1<i.length)throw Error(s(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=bt(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Co(e)}function oi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Zh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function gu(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||Zh.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function vu(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var r in t)i=t[r],t.hasOwnProperty(r)&&n[r]!==i&&gu(e,r,i)}else for(var a in t)t.hasOwnProperty(a)&&gu(e,a,t[a])}function Eo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ih=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Jh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Jr(e){return Jh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Gt(){}var zo=null;function Ao(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var li=null,si=null;function bu(e){var t=ni(e);if(t&&(e=t.stateNode)){var n=e[Je]||null;e:switch(e=t.stateNode,t.type){case"input":if(Oo(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+yt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var r=i[Je]||null;if(!r)throw Error(s(90));Oo(i,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&mu(i)}break e;case"textarea":pu(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ai(e,!!n.multiple,t,!1)}}}var Ro=!1;function yu(e,t,n){if(Ro)return e(t,n);Ro=!0;try{var i=e(t);return i}finally{if(Ro=!1,(li!==null||si!==null)&&(La(),li&&(t=li,e=si,si=li=null,bu(t),e)))for(t=0;t<e.length;t++)bu(e[t])}}function Pi(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Je]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var Ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mo=!1;if(Ft)try{var Ki={};Object.defineProperty(Ki,"passive",{get:function(){Mo=!0}}),window.addEventListener("test",Ki,Ki),window.removeEventListener("test",Ki,Ki)}catch{Mo=!1}var un=null,Do=null,$r=null;function Su(){if($r)return $r;var e,t=Do,n=t.length,i,r="value"in un?un.value:un.textContent,a=r.length;for(e=0;e<n&&t[e]===r[e];e++);var o=n-e;for(i=1;i<=o&&t[n-i]===r[a-i];i++);return $r=r.slice(e,1<i?1-i:void 0)}function ea(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ta(){return!0}function wu(){return!1}function $e(e){function t(n,i,r,a,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(a):a[u]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ta:wu,this.isPropagationStopped=wu,this}return O(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ta)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ta)},persist:function(){},isPersistent:ta}),t}var Bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},na=$e(Bn),Zi=O({},Bn,{view:0,detail:0}),$h=$e(Zi),_o,jo,Ii,ia=O({},Zi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ii&&(Ii&&e.type==="mousemove"?(_o=e.screenX-Ii.screenX,jo=e.screenY-Ii.screenY):jo=_o=0,Ii=e),_o)},movementY:function(e){return"movementY"in e?e.movementY:jo}}),xu=$e(ia),ep=O({},ia,{dataTransfer:0}),tp=$e(ep),np=O({},Zi,{relatedTarget:0}),qo=$e(np),ip=O({},Bn,{animationName:0,elapsedTime:0,pseudoElement:0}),rp=$e(ip),ap=O({},Bn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),op=$e(ap),lp=O({},Bn,{data:0}),Tu=$e(lp),sp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},up={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=cp[e])?!!t[e]:!1}function Bo(){return dp}var mp=O({},Zi,{key:function(e){if(e.key){var t=sp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ea(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?up[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bo,charCode:function(e){return e.type==="keypress"?ea(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ea(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hp=$e(mp),pp=O({},ia,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ku=$e(pp),fp=O({},Zi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bo}),gp=$e(fp),vp=O({},Bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),bp=$e(vp),yp=O({},ia,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Sp=$e(yp),wp=O({},Bn,{newState:0,oldState:0}),xp=$e(wp),Tp=[9,13,27,32],Ho=Ft&&"CompositionEvent"in window,Ji=null;Ft&&"documentMode"in document&&(Ji=document.documentMode);var kp=Ft&&"TextEvent"in window&&!Ji,Cu=Ft&&(!Ho||Ji&&8<Ji&&11>=Ji),Ou=" ",Nu=!1;function Eu(e,t){switch(e){case"keyup":return Tp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ui=!1;function Cp(e,t){switch(e){case"compositionend":return zu(t);case"keypress":return t.which!==32?null:(Nu=!0,Ou);case"textInput":return e=t.data,e===Ou&&Nu?null:e;default:return null}}function Op(e,t){if(ui)return e==="compositionend"||!Ho&&Eu(e,t)?(e=Su(),$r=Do=un=null,ui=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cu&&t.locale!=="ko"?null:t.data;default:return null}}var Np={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Au(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Np[e.type]:t==="textarea"}function Ru(e,t,n,i){li?si?si.push(i):si=[i]:li=i,t=Ya(t,"onChange"),0<t.length&&(n=new na("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var $i=null,er=null;function Ep(e){hm(e,0)}function ra(e){var t=Qi(e);if(mu(t))return e}function Mu(e,t){if(e==="change")return t}var Du=!1;if(Ft){var Lo;if(Ft){var Uo="oninput"in document;if(!Uo){var _u=document.createElement("div");_u.setAttribute("oninput","return;"),Uo=typeof _u.oninput=="function"}Lo=Uo}else Lo=!1;Du=Lo&&(!document.documentMode||9<document.documentMode)}function ju(){$i&&($i.detachEvent("onpropertychange",qu),er=$i=null)}function qu(e){if(e.propertyName==="value"&&ra(er)){var t=[];Ru(t,er,e,Ao(e)),yu(Ep,t)}}function zp(e,t,n){e==="focusin"?(ju(),$i=t,er=n,$i.attachEvent("onpropertychange",qu)):e==="focusout"&&ju()}function Ap(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ra(er)}function Rp(e,t){if(e==="click")return ra(t)}function Mp(e,t){if(e==="input"||e==="change")return ra(t)}function Dp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var dt=typeof Object.is=="function"?Object.is:Dp;function tr(e,t){if(dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!vo.call(t,r)||!dt(e[r],t[r]))return!1}return!0}function Bu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hu(e,t){var n=Bu(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bu(n)}}function Lu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Lu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Uu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ir(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ir(e.document)}return t}function Go(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var _p=Ft&&"documentMode"in document&&11>=document.documentMode,ci=null,Fo=null,nr=null,Wo=!1;function Gu(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wo||ci==null||ci!==Ir(i)||(i=ci,"selectionStart"in i&&Go(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),nr&&tr(nr,i)||(nr=i,i=Ya(Fo,"onSelect"),0<i.length&&(t=new na("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=ci)))}function Hn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var di={animationend:Hn("Animation","AnimationEnd"),animationiteration:Hn("Animation","AnimationIteration"),animationstart:Hn("Animation","AnimationStart"),transitionrun:Hn("Transition","TransitionRun"),transitionstart:Hn("Transition","TransitionStart"),transitioncancel:Hn("Transition","TransitionCancel"),transitionend:Hn("Transition","TransitionEnd")},Vo={},Fu={};Ft&&(Fu=document.createElement("div").style,"AnimationEvent"in window||(delete di.animationend.animation,delete di.animationiteration.animation,delete di.animationstart.animation),"TransitionEvent"in window||delete di.transitionend.transition);function Ln(e){if(Vo[e])return Vo[e];if(!di[e])return e;var t=di[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Fu)return Vo[e]=t[n];return e}var Wu=Ln("animationend"),Vu=Ln("animationiteration"),Xu=Ln("animationstart"),jp=Ln("transitionrun"),qp=Ln("transitionstart"),Bp=Ln("transitioncancel"),Yu=Ln("transitionend"),Qu=new Map,Xo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xo.push("scrollEnd");function zt(e,t){Qu.set(e,t),qn(t,[e])}var aa=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},St=[],mi=0,Yo=0;function oa(){for(var e=mi,t=Yo=mi=0;t<e;){var n=St[t];St[t++]=null;var i=St[t];St[t++]=null;var r=St[t];St[t++]=null;var a=St[t];if(St[t++]=null,i!==null&&r!==null){var o=i.pending;o===null?r.next=r:(r.next=o.next,o.next=r),i.pending=r}a!==0&&Pu(n,r,a)}}function la(e,t,n,i){St[mi++]=e,St[mi++]=t,St[mi++]=n,St[mi++]=i,Yo|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Qo(e,t,n,i){return la(e,t,n,i),sa(e)}function Un(e,t){return la(e,null,null,t),sa(e)}function Pu(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var r=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(r=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,r&&t!==null&&(r=31-ct(n),e=a.hiddenUpdates,i=e[r],i===null?e[r]=[t]:i.push(t),t.lane=n|536870912),a):null}function sa(e){if(50<kr)throw kr=0,ns=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var hi={};function Hp(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(e,t,n,i){return new Hp(e,t,n,i)}function Po(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wt(e,t){var n=e.alternate;return n===null?(n=mt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ku(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ua(e,t,n,i,r,a){var o=0;if(i=e,typeof e=="function")Po(e)&&(o=1);else if(typeof e=="string")o=Vf(e,n,V.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case $:return e=mt(31,n,t,r),e.elementType=$,e.lanes=a,e;case W:return Gn(n.children,r,a,t);case L:o=8,r|=24;break;case G:return e=mt(12,n,t,r|2),e.elementType=G,e.lanes=a,e;case ke:return e=mt(13,n,t,r),e.elementType=ke,e.lanes=a,e;case ze:return e=mt(19,n,t,r),e.elementType=ze,e.lanes=a,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case P:o=10;break e;case Y:o=9;break e;case ye:o=11;break e;case J:o=14;break e;case Ae:o=16,i=null;break e}o=29,n=Error(s(130,e===null?"null":typeof e,"")),i=null}return t=mt(o,n,t,r),t.elementType=e,t.type=i,t.lanes=a,t}function Gn(e,t,n,i){return e=mt(7,e,i,t),e.lanes=n,e}function Ko(e,t,n){return e=mt(6,e,null,t),e.lanes=n,e}function Zu(e){var t=mt(18,null,null,0);return t.stateNode=e,t}function Zo(e,t,n){return t=mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Iu=new WeakMap;function wt(e,t){if(typeof e=="object"&&e!==null){var n=Iu.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Zs(t)},Iu.set(e,t),t)}return{value:e,source:t,stack:Zs(t)}}var pi=[],fi=0,ca=null,ir=0,xt=[],Tt=0,cn=null,Dt=1,_t="";function Vt(e,t){pi[fi++]=ir,pi[fi++]=ca,ca=e,ir=t}function Ju(e,t,n){xt[Tt++]=Dt,xt[Tt++]=_t,xt[Tt++]=cn,cn=e;var i=Dt;e=_t;var r=32-ct(i)-1;i&=~(1<<r),n+=1;var a=32-ct(t)+r;if(30<a){var o=r-r%5;a=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Dt=1<<32-ct(t)+r|n<<r|i,_t=a+e}else Dt=1<<a|n<<r|i,_t=e}function Io(e){e.return!==null&&(Vt(e,1),Ju(e,1,0))}function Jo(e){for(;e===ca;)ca=pi[--fi],pi[fi]=null,ir=pi[--fi],pi[fi]=null;for(;e===cn;)cn=xt[--Tt],xt[Tt]=null,_t=xt[--Tt],xt[Tt]=null,Dt=xt[--Tt],xt[Tt]=null}function $u(e,t){xt[Tt++]=Dt,xt[Tt++]=_t,xt[Tt++]=cn,Dt=t.id,_t=t.overflow,cn=e}var We=null,xe=null,se=!1,dn=null,kt=!1,$o=Error(s(519));function mn(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw rr(wt(t,e)),$o}function ec(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[Fe]=e,t[Je]=i,n){case"dialog":ae("cancel",t),ae("close",t);break;case"iframe":case"object":case"embed":ae("load",t);break;case"video":case"audio":for(n=0;n<Or.length;n++)ae(Or[n],t);break;case"source":ae("error",t);break;case"img":case"image":case"link":ae("error",t),ae("load",t);break;case"details":ae("toggle",t);break;case"input":ae("invalid",t),hu(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":ae("invalid",t);break;case"textarea":ae("invalid",t),fu(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||vm(t.textContent,n)?(i.popover!=null&&(ae("beforetoggle",t),ae("toggle",t)),i.onScroll!=null&&ae("scroll",t),i.onScrollEnd!=null&&ae("scrollend",t),i.onClick!=null&&(t.onclick=Gt),t=!0):t=!1,t||mn(e,!0)}function tc(e){for(We=e.return;We;)switch(We.tag){case 5:case 31:case 13:kt=!1;return;case 27:case 3:kt=!0;return;default:We=We.return}}function gi(e){if(e!==We)return!1;if(!se)return tc(e),se=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||vs(e.type,e.memoizedProps)),n=!n),n&&xe&&mn(e),tc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));xe=Om(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));xe=Om(e)}else t===27?(t=xe,On(e.type)?(e=xs,xs=null,xe=e):xe=t):xe=We?Ot(e.stateNode.nextSibling):null;return!0}function Fn(){xe=We=null,se=!1}function el(){var e=dn;return e!==null&&(it===null?it=e:it.push.apply(it,e),dn=null),e}function rr(e){dn===null?dn=[e]:dn.push(e)}var tl=g(null),Wn=null,Xt=null;function hn(e,t,n){B(tl,t._currentValue),t._currentValue=n}function Yt(e){e._currentValue=tl.current,_(tl)}function nl(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function il(e,t,n,i){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var a=r.dependencies;if(a!==null){var o=r.child;a=a.firstContext;e:for(;a!==null;){var u=a;a=r;for(var m=0;m<t.length;m++)if(u.context===t[m]){a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),nl(a.return,n,e),i||(o=null);break e}a=u.next}}else if(r.tag===18){if(o=r.return,o===null)throw Error(s(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),nl(o,n,e),o=null}else o=r.child;if(o!==null)o.return=r;else for(o=r;o!==null;){if(o===e){o=null;break}if(r=o.sibling,r!==null){r.return=o.return,o=r;break}o=o.return}r=o}}function vi(e,t,n,i){e=null;for(var r=t,a=!1;r!==null;){if(!a){if((r.flags&524288)!==0)a=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var o=r.alternate;if(o===null)throw Error(s(387));if(o=o.memoizedProps,o!==null){var u=r.type;dt(r.pendingProps.value,o.value)||(e!==null?e.push(u):e=[u])}}else if(r===me.current){if(o=r.alternate,o===null)throw Error(s(387));o.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(Rr):e=[Rr])}r=r.return}e!==null&&il(t,e,n,i),t.flags|=262144}function da(e){for(e=e.firstContext;e!==null;){if(!dt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Vn(e){Wn=e,Xt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ve(e){return nc(Wn,e)}function ma(e,t){return Wn===null&&Vn(e),nc(e,t)}function nc(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Xt===null){if(e===null)throw Error(s(308));Xt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Xt=Xt.next=t;return n}var Lp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Up=l.unstable_scheduleCallback,Gp=l.unstable_NormalPriority,_e={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function rl(){return{controller:new Lp,data:new Map,refCount:0}}function ar(e){e.refCount--,e.refCount===0&&Up(Gp,function(){e.controller.abort()})}var or=null,al=0,bi=0,yi=null;function Fp(e,t){if(or===null){var n=or=[];al=0,bi=ss(),yi={status:"pending",value:void 0,then:function(i){n.push(i)}}}return al++,t.then(ic,ic),t}function ic(){if(--al===0&&or!==null){yi!==null&&(yi.status="fulfilled");var e=or;or=null,bi=0,yi=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Wp(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(i.status="rejected",i.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),i}var rc=z.S;z.S=function(e,t){Gd=st(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Fp(e,t),rc!==null&&rc(e,t)};var Xn=g(null);function ol(){var e=Xn.current;return e!==null?e:we.pooledCache}function ha(e,t){t===null?B(Xn,Xn.current):B(Xn,t.pool)}function ac(){var e=ol();return e===null?null:{parent:_e._currentValue,pool:e}}var Si=Error(s(460)),ll=Error(s(474)),pa=Error(s(542)),fa={then:function(){}};function oc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function lc(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Gt,Gt),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,uc(e),e;default:if(typeof t.status=="string")t.then(Gt,Gt);else{if(e=we,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=i}},function(i){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,uc(e),e}throw Qn=t,Si}}function Yn(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Qn=n,Si):n}}var Qn=null;function sc(){if(Qn===null)throw Error(s(459));var e=Qn;return Qn=null,e}function uc(e){if(e===Si||e===pa)throw Error(s(483))}var wi=null,lr=0;function ga(e){var t=lr;return lr+=1,wi===null&&(wi=[]),lc(wi,e,t)}function sr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function va(e,t){throw t.$$typeof===j?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function cc(e){function t(b,p){if(e){var w=b.deletions;w===null?(b.deletions=[p],b.flags|=16):w.push(p)}}function n(b,p){if(!e)return null;for(;p!==null;)t(b,p),p=p.sibling;return null}function i(b){for(var p=new Map;b!==null;)b.key!==null?p.set(b.key,b):p.set(b.index,b),b=b.sibling;return p}function r(b,p){return b=Wt(b,p),b.index=0,b.sibling=null,b}function a(b,p,w){return b.index=w,e?(w=b.alternate,w!==null?(w=w.index,w<p?(b.flags|=67108866,p):w):(b.flags|=67108866,p)):(b.flags|=1048576,p)}function o(b){return e&&b.alternate===null&&(b.flags|=67108866),b}function u(b,p,w,R){return p===null||p.tag!==6?(p=Ko(w,b.mode,R),p.return=b,p):(p=r(p,w),p.return=b,p)}function m(b,p,w,R){var Q=w.type;return Q===W?N(b,p,w.props.children,R,w.key):p!==null&&(p.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===Ae&&Yn(Q)===p.type)?(p=r(p,w.props),sr(p,w),p.return=b,p):(p=ua(w.type,w.key,w.props,null,b.mode,R),sr(p,w),p.return=b,p)}function x(b,p,w,R){return p===null||p.tag!==4||p.stateNode.containerInfo!==w.containerInfo||p.stateNode.implementation!==w.implementation?(p=Zo(w,b.mode,R),p.return=b,p):(p=r(p,w.children||[]),p.return=b,p)}function N(b,p,w,R,Q){return p===null||p.tag!==7?(p=Gn(w,b.mode,R,Q),p.return=b,p):(p=r(p,w),p.return=b,p)}function D(b,p,w){if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return p=Ko(""+p,b.mode,w),p.return=b,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case H:return w=ua(p.type,p.key,p.props,null,b.mode,w),sr(w,p),w.return=b,w;case F:return p=Zo(p,b.mode,w),p.return=b,p;case Ae:return p=Yn(p),D(b,p,w)}if(Et(p)||Ie(p))return p=Gn(p,b.mode,w,null),p.return=b,p;if(typeof p.then=="function")return D(b,ga(p),w);if(p.$$typeof===P)return D(b,ma(b,p),w);va(b,p)}return null}function T(b,p,w,R){var Q=p!==null?p.key:null;if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return Q!==null?null:u(b,p,""+w,R);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case H:return w.key===Q?m(b,p,w,R):null;case F:return w.key===Q?x(b,p,w,R):null;case Ae:return w=Yn(w),T(b,p,w,R)}if(Et(w)||Ie(w))return Q!==null?null:N(b,p,w,R,null);if(typeof w.then=="function")return T(b,p,ga(w),R);if(w.$$typeof===P)return T(b,p,ma(b,w),R);va(b,w)}return null}function k(b,p,w,R,Q){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return b=b.get(w)||null,u(p,b,""+R,Q);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case H:return b=b.get(R.key===null?w:R.key)||null,m(p,b,R,Q);case F:return b=b.get(R.key===null?w:R.key)||null,x(p,b,R,Q);case Ae:return R=Yn(R),k(b,p,w,R,Q)}if(Et(R)||Ie(R))return b=b.get(w)||null,N(p,b,R,Q,null);if(typeof R.then=="function")return k(b,p,w,ga(R),Q);if(R.$$typeof===P)return k(b,p,w,ma(p,R),Q);va(p,R)}return null}function U(b,p,w,R){for(var Q=null,ue=null,X=p,ne=p=0,le=null;X!==null&&ne<w.length;ne++){X.index>ne?(le=X,X=null):le=X.sibling;var ce=T(b,X,w[ne],R);if(ce===null){X===null&&(X=le);break}e&&X&&ce.alternate===null&&t(b,X),p=a(ce,p,ne),ue===null?Q=ce:ue.sibling=ce,ue=ce,X=le}if(ne===w.length)return n(b,X),se&&Vt(b,ne),Q;if(X===null){for(;ne<w.length;ne++)X=D(b,w[ne],R),X!==null&&(p=a(X,p,ne),ue===null?Q=X:ue.sibling=X,ue=X);return se&&Vt(b,ne),Q}for(X=i(X);ne<w.length;ne++)le=k(X,b,ne,w[ne],R),le!==null&&(e&&le.alternate!==null&&X.delete(le.key===null?ne:le.key),p=a(le,p,ne),ue===null?Q=le:ue.sibling=le,ue=le);return e&&X.forEach(function(Rn){return t(b,Rn)}),se&&Vt(b,ne),Q}function K(b,p,w,R){if(w==null)throw Error(s(151));for(var Q=null,ue=null,X=p,ne=p=0,le=null,ce=w.next();X!==null&&!ce.done;ne++,ce=w.next()){X.index>ne?(le=X,X=null):le=X.sibling;var Rn=T(b,X,ce.value,R);if(Rn===null){X===null&&(X=le);break}e&&X&&Rn.alternate===null&&t(b,X),p=a(Rn,p,ne),ue===null?Q=Rn:ue.sibling=Rn,ue=Rn,X=le}if(ce.done)return n(b,X),se&&Vt(b,ne),Q;if(X===null){for(;!ce.done;ne++,ce=w.next())ce=D(b,ce.value,R),ce!==null&&(p=a(ce,p,ne),ue===null?Q=ce:ue.sibling=ce,ue=ce);return se&&Vt(b,ne),Q}for(X=i(X);!ce.done;ne++,ce=w.next())ce=k(X,b,ne,ce.value,R),ce!==null&&(e&&ce.alternate!==null&&X.delete(ce.key===null?ne:ce.key),p=a(ce,p,ne),ue===null?Q=ce:ue.sibling=ce,ue=ce);return e&&X.forEach(function(tg){return t(b,tg)}),se&&Vt(b,ne),Q}function be(b,p,w,R){if(typeof w=="object"&&w!==null&&w.type===W&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case H:e:{for(var Q=w.key;p!==null;){if(p.key===Q){if(Q=w.type,Q===W){if(p.tag===7){n(b,p.sibling),R=r(p,w.props.children),R.return=b,b=R;break e}}else if(p.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===Ae&&Yn(Q)===p.type){n(b,p.sibling),R=r(p,w.props),sr(R,w),R.return=b,b=R;break e}n(b,p);break}else t(b,p);p=p.sibling}w.type===W?(R=Gn(w.props.children,b.mode,R,w.key),R.return=b,b=R):(R=ua(w.type,w.key,w.props,null,b.mode,R),sr(R,w),R.return=b,b=R)}return o(b);case F:e:{for(Q=w.key;p!==null;){if(p.key===Q)if(p.tag===4&&p.stateNode.containerInfo===w.containerInfo&&p.stateNode.implementation===w.implementation){n(b,p.sibling),R=r(p,w.children||[]),R.return=b,b=R;break e}else{n(b,p);break}else t(b,p);p=p.sibling}R=Zo(w,b.mode,R),R.return=b,b=R}return o(b);case Ae:return w=Yn(w),be(b,p,w,R)}if(Et(w))return U(b,p,w,R);if(Ie(w)){if(Q=Ie(w),typeof Q!="function")throw Error(s(150));return w=Q.call(w),K(b,p,w,R)}if(typeof w.then=="function")return be(b,p,ga(w),R);if(w.$$typeof===P)return be(b,p,ma(b,w),R);va(b,w)}return typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint"?(w=""+w,p!==null&&p.tag===6?(n(b,p.sibling),R=r(p,w),R.return=b,b=R):(n(b,p),R=Ko(w,b.mode,R),R.return=b,b=R),o(b)):n(b,p)}return function(b,p,w,R){try{lr=0;var Q=be(b,p,w,R);return wi=null,Q}catch(X){if(X===Si||X===pa)throw X;var ue=mt(29,X,null,b.mode);return ue.lanes=R,ue.return=b,ue}finally{}}}var Pn=cc(!0),dc=cc(!1),pn=!1;function sl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ul(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function fn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function gn(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(de&2)!==0){var r=i.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),i.pending=t,t=sa(e),Pu(e,null,n),t}return la(e,i,t,n),sa(e)}function ur(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,nu(e,n)}}function cl(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?r=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?r=a=t:a=a.next=t}else r=a=t;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var dl=!1;function cr(){if(dl){var e=yi;if(e!==null)throw e}}function dr(e,t,n,i){dl=!1;var r=e.updateQueue;pn=!1;var a=r.firstBaseUpdate,o=r.lastBaseUpdate,u=r.shared.pending;if(u!==null){r.shared.pending=null;var m=u,x=m.next;m.next=null,o===null?a=x:o.next=x,o=m;var N=e.alternate;N!==null&&(N=N.updateQueue,u=N.lastBaseUpdate,u!==o&&(u===null?N.firstBaseUpdate=x:u.next=x,N.lastBaseUpdate=m))}if(a!==null){var D=r.baseState;o=0,N=x=m=null,u=a;do{var T=u.lane&-536870913,k=T!==u.lane;if(k?(oe&T)===T:(i&T)===T){T!==0&&T===bi&&(dl=!0),N!==null&&(N=N.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var U=e,K=u;T=t;var be=n;switch(K.tag){case 1:if(U=K.payload,typeof U=="function"){D=U.call(be,D,T);break e}D=U;break e;case 3:U.flags=U.flags&-65537|128;case 0:if(U=K.payload,T=typeof U=="function"?U.call(be,D,T):U,T==null)break e;D=O({},D,T);break e;case 2:pn=!0}}T=u.callback,T!==null&&(e.flags|=64,k&&(e.flags|=8192),k=r.callbacks,k===null?r.callbacks=[T]:k.push(T))}else k={lane:T,tag:u.tag,payload:u.payload,callback:u.callback,next:null},N===null?(x=N=k,m=D):N=N.next=k,o|=T;if(u=u.next,u===null){if(u=r.shared.pending,u===null)break;k=u,u=k.next,k.next=null,r.lastBaseUpdate=k,r.shared.pending=null}}while(!0);N===null&&(m=D),r.baseState=m,r.firstBaseUpdate=x,r.lastBaseUpdate=N,a===null&&(r.shared.lanes=0),wn|=o,e.lanes=o,e.memoizedState=D}}function mc(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function hc(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)mc(n[e],t)}var xi=g(null),ba=g(0);function pc(e,t){e=tn,B(ba,e),B(xi,t),tn=e|t.baseLanes}function ml(){B(ba,tn),B(xi,xi.current)}function hl(){tn=ba.current,_(xi),_(ba)}var ht=g(null),Ct=null;function vn(e){var t=e.alternate;B(Me,Me.current&1),B(ht,e),Ct===null&&(t===null||xi.current!==null||t.memoizedState!==null)&&(Ct=e)}function pl(e){B(Me,Me.current),B(ht,e),Ct===null&&(Ct=e)}function fc(e){e.tag===22?(B(Me,Me.current),B(ht,e),Ct===null&&(Ct=e)):bn()}function bn(){B(Me,Me.current),B(ht,ht.current)}function pt(e){_(ht),Ct===e&&(Ct=null),_(Me)}var Me=g(0);function ya(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Ss(n)||ws(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qt=0,te=null,ge=null,je=null,Sa=!1,Ti=!1,Kn=!1,wa=0,mr=0,ki=null,Vp=0;function Ne(){throw Error(s(321))}function fl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!dt(e[n],t[n]))return!1;return!0}function gl(e,t,n,i,r,a){return Qt=a,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,z.H=e===null||e.memoizedState===null?Jc:Rl,Kn=!1,a=n(i,r),Kn=!1,Ti&&(a=vc(t,n,i,r)),gc(e),a}function gc(e){z.H=fr;var t=ge!==null&&ge.next!==null;if(Qt=0,je=ge=te=null,Sa=!1,mr=0,ki=null,t)throw Error(s(300));e===null||qe||(e=e.dependencies,e!==null&&da(e)&&(qe=!0))}function vc(e,t,n,i){te=e;var r=0;do{if(Ti&&(ki=null),mr=0,Ti=!1,25<=r)throw Error(s(301));if(r+=1,je=ge=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}z.H=$c,a=t(n,i)}while(Ti);return a}function Xp(){var e=z.H,t=e.useState()[0];return t=typeof t.then=="function"?hr(t):t,e=e.useState()[0],(ge!==null?ge.memoizedState:null)!==e&&(te.flags|=1024),t}function vl(){var e=wa!==0;return wa=0,e}function bl(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function yl(e){if(Sa){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Sa=!1}Qt=0,je=ge=te=null,Ti=!1,mr=wa=0,ki=null}function Ze(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?te.memoizedState=je=e:je=je.next=e,je}function De(){if(ge===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=je===null?te.memoizedState:je.next;if(t!==null)je=t,ge=e;else{if(e===null)throw te.alternate===null?Error(s(467)):Error(s(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},je===null?te.memoizedState=je=e:je=je.next=e}return je}function xa(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function hr(e){var t=mr;return mr+=1,ki===null&&(ki=[]),e=lc(ki,e,t),t=te,(je===null?t.memoizedState:je.next)===null&&(t=t.alternate,z.H=t===null||t.memoizedState===null?Jc:Rl),e}function Ta(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return hr(e);if(e.$$typeof===P)return Ve(e)}throw Error(s(438,String(e)))}function Sl(e){var t=null,n=te.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=te.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=xa(),te.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=ot;return t.index++,n}function Pt(e,t){return typeof t=="function"?t(e):t}function ka(e){var t=De();return wl(t,ge,e)}function wl(e,t,n){var i=e.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=n;var r=e.baseQueue,a=i.pending;if(a!==null){if(r!==null){var o=r.next;r.next=a.next,a.next=o}t.baseQueue=r=a,i.pending=null}if(a=e.baseState,r===null)e.memoizedState=a;else{t=r.next;var u=o=null,m=null,x=t,N=!1;do{var D=x.lane&-536870913;if(D!==x.lane?(oe&D)===D:(Qt&D)===D){var T=x.revertLane;if(T===0)m!==null&&(m=m.next={lane:0,revertLane:0,gesture:null,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),D===bi&&(N=!0);else if((Qt&T)===T){x=x.next,T===bi&&(N=!0);continue}else D={lane:0,revertLane:x.revertLane,gesture:null,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},m===null?(u=m=D,o=a):m=m.next=D,te.lanes|=T,wn|=T;D=x.action,Kn&&n(a,D),a=x.hasEagerState?x.eagerState:n(a,D)}else T={lane:D,revertLane:x.revertLane,gesture:x.gesture,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},m===null?(u=m=T,o=a):m=m.next=T,te.lanes|=D,wn|=D;x=x.next}while(x!==null&&x!==t);if(m===null?o=a:m.next=u,!dt(a,e.memoizedState)&&(qe=!0,N&&(n=yi,n!==null)))throw n;e.memoizedState=a,e.baseState=o,e.baseQueue=m,i.lastRenderedState=a}return r===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function xl(e){var t=De(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var i=n.dispatch,r=n.pending,a=t.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do a=e(a,o.action),o=o.next;while(o!==r);dt(a,t.memoizedState)||(qe=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function bc(e,t,n){var i=te,r=De(),a=se;if(a){if(n===void 0)throw Error(s(407));n=n()}else n=t();var o=!dt((ge||r).memoizedState,n);if(o&&(r.memoizedState=n,qe=!0),r=r.queue,Cl(wc.bind(null,i,r,e),[e]),r.getSnapshot!==t||o||je!==null&&je.memoizedState.tag&1){if(i.flags|=2048,Ci(9,{destroy:void 0},Sc.bind(null,i,r,n,t),null),we===null)throw Error(s(349));a||(Qt&127)!==0||yc(i,t,n)}return n}function yc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=te.updateQueue,t===null?(t=xa(),te.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Sc(e,t,n,i){t.value=n,t.getSnapshot=i,xc(t)&&Tc(e)}function wc(e,t,n){return n(function(){xc(t)&&Tc(e)})}function xc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!dt(e,n)}catch{return!0}}function Tc(e){var t=Un(e,2);t!==null&&rt(t,e,2)}function Tl(e){var t=Ze();if(typeof e=="function"){var n=e;if(e=n(),Kn){ln(!0);try{n()}finally{ln(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:e},t}function kc(e,t,n,i){return e.baseState=n,wl(e,ge,typeof i=="function"?i:Pt)}function Yp(e,t,n,i,r){if(Na(e))throw Error(s(485));if(e=t.action,e!==null){var a={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){a.listeners.push(o)}};z.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,Cc(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Cc(e,t){var n=t.action,i=t.payload,r=e.state;if(t.isTransition){var a=z.T,o={};z.T=o;try{var u=n(r,i),m=z.S;m!==null&&m(o,u),Oc(e,t,u)}catch(x){kl(e,t,x)}finally{a!==null&&o.types!==null&&(a.types=o.types),z.T=a}}else try{a=n(r,i),Oc(e,t,a)}catch(x){kl(e,t,x)}}function Oc(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Nc(e,t,i)},function(i){return kl(e,t,i)}):Nc(e,t,n)}function Nc(e,t,n){t.status="fulfilled",t.value=n,Ec(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Cc(e,n)))}function kl(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Ec(t),t=t.next;while(t!==i)}e.action=null}function Ec(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function zc(e,t){return t}function Ac(e,t){if(se){var n=we.formState;if(n!==null){e:{var i=te;if(se){if(xe){t:{for(var r=xe,a=kt;r.nodeType!==8;){if(!a){r=null;break t}if(r=Ot(r.nextSibling),r===null){r=null;break t}}a=r.data,r=a==="F!"||a==="F"?r:null}if(r){xe=Ot(r.nextSibling),i=r.data==="F!";break e}}mn(i)}i=!1}i&&(t=n[0])}}return n=Ze(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zc,lastRenderedState:t},n.queue=i,n=Kc.bind(null,te,i),i.dispatch=n,i=Tl(!1),a=Al.bind(null,te,!1,i.queue),i=Ze(),r={state:t,dispatch:null,action:e,pending:null},i.queue=r,n=Yp.bind(null,te,r,a,n),r.dispatch=n,i.memoizedState=e,[t,n,!1]}function Rc(e){var t=De();return Mc(t,ge,e)}function Mc(e,t,n){if(t=wl(e,t,zc)[0],e=ka(Pt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=hr(t)}catch(o){throw o===Si?pa:o}else i=t;t=De();var r=t.queue,a=r.dispatch;return n!==t.memoizedState&&(te.flags|=2048,Ci(9,{destroy:void 0},Qp.bind(null,r,n),null)),[i,a,e]}function Qp(e,t){e.action=t}function Dc(e){var t=De(),n=ge;if(n!==null)return Mc(t,n,e);De(),t=t.memoizedState,n=De();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Ci(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=te.updateQueue,t===null&&(t=xa(),te.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function _c(){return De().memoizedState}function Ca(e,t,n,i){var r=Ze();te.flags|=e,r.memoizedState=Ci(1|t,{destroy:void 0},n,i===void 0?null:i)}function Oa(e,t,n,i){var r=De();i=i===void 0?null:i;var a=r.memoizedState.inst;ge!==null&&i!==null&&fl(i,ge.memoizedState.deps)?r.memoizedState=Ci(t,a,n,i):(te.flags|=e,r.memoizedState=Ci(1|t,a,n,i))}function jc(e,t){Ca(8390656,8,e,t)}function Cl(e,t){Oa(2048,8,e,t)}function Pp(e){te.flags|=4;var t=te.updateQueue;if(t===null)t=xa(),te.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function qc(e){var t=De().memoizedState;return Pp({ref:t,nextImpl:e}),function(){if((de&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function Bc(e,t){return Oa(4,2,e,t)}function Hc(e,t){return Oa(4,4,e,t)}function Lc(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Uc(e,t,n){n=n!=null?n.concat([e]):null,Oa(4,4,Lc.bind(null,t,e),n)}function Ol(){}function Gc(e,t){var n=De();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&fl(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Fc(e,t){var n=De();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&fl(t,i[1]))return i[0];if(i=e(),Kn){ln(!0);try{e()}finally{ln(!1)}}return n.memoizedState=[i,t],i}function Nl(e,t,n){return n===void 0||(Qt&1073741824)!==0&&(oe&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Wd(),te.lanes|=e,wn|=e,n)}function Wc(e,t,n,i){return dt(n,t)?n:xi.current!==null?(e=Nl(e,n,i),dt(e,t)||(qe=!0),e):(Qt&42)===0||(Qt&1073741824)!==0&&(oe&261930)===0?(qe=!0,e.memoizedState=n):(e=Wd(),te.lanes|=e,wn|=e,t)}function Vc(e,t,n,i,r){var a=q.p;q.p=a!==0&&8>a?a:8;var o=z.T,u={};z.T=u,Al(e,!1,t,n);try{var m=r(),x=z.S;if(x!==null&&x(u,m),m!==null&&typeof m=="object"&&typeof m.then=="function"){var N=Wp(m,i);pr(e,t,N,vt(e))}else pr(e,t,i,vt(e))}catch(D){pr(e,t,{then:function(){},status:"rejected",reason:D},vt())}finally{q.p=a,o!==null&&u.types!==null&&(o.types=u.types),z.T=o}}function Kp(){}function El(e,t,n,i){if(e.tag!==5)throw Error(s(476));var r=Xc(e).queue;Vc(e,r,t,Z,n===null?Kp:function(){return Yc(e),n(i)})}function Xc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:Z},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Yc(e){var t=Xc(e);t.next===null&&(t=e.alternate.memoizedState),pr(e,t.next.queue,{},vt())}function zl(){return Ve(Rr)}function Qc(){return De().memoizedState}function Pc(){return De().memoizedState}function Zp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=vt();e=fn(n);var i=gn(t,e,n);i!==null&&(rt(i,t,n),ur(i,t,n)),t={cache:rl()},e.payload=t;return}t=t.return}}function Ip(e,t,n){var i=vt();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Na(e)?Zc(t,n):(n=Qo(e,t,n,i),n!==null&&(rt(n,e,i),Ic(n,t,i)))}function Kc(e,t,n){var i=vt();pr(e,t,n,i)}function pr(e,t,n,i){var r={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Na(e))Zc(t,r);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,u=a(o,n);if(r.hasEagerState=!0,r.eagerState=u,dt(u,o))return la(e,t,r,0),we===null&&oa(),!1}catch{}finally{}if(n=Qo(e,t,r,i),n!==null)return rt(n,e,i),Ic(n,t,i),!0}return!1}function Al(e,t,n,i){if(i={lane:2,revertLane:ss(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Na(e)){if(t)throw Error(s(479))}else t=Qo(e,n,i,2),t!==null&&rt(t,e,2)}function Na(e){var t=e.alternate;return e===te||t!==null&&t===te}function Zc(e,t){Ti=Sa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ic(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,nu(e,n)}}var fr={readContext:Ve,use:Ta,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useLayoutEffect:Ne,useInsertionEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useSyncExternalStore:Ne,useId:Ne,useHostTransitionStatus:Ne,useFormState:Ne,useActionState:Ne,useOptimistic:Ne,useMemoCache:Ne,useCacheRefresh:Ne};fr.useEffectEvent=Ne;var Jc={readContext:Ve,use:Ta,useCallback:function(e,t){return Ze().memoizedState=[e,t===void 0?null:t],e},useContext:Ve,useEffect:jc,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Ca(4194308,4,Lc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ca(4194308,4,e,t)},useInsertionEffect:function(e,t){Ca(4,2,e,t)},useMemo:function(e,t){var n=Ze();t=t===void 0?null:t;var i=e();if(Kn){ln(!0);try{e()}finally{ln(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Ze();if(n!==void 0){var r=n(t);if(Kn){ln(!0);try{n(t)}finally{ln(!1)}}}else r=t;return i.memoizedState=i.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},i.queue=e,e=e.dispatch=Ip.bind(null,te,e),[i.memoizedState,e]},useRef:function(e){var t=Ze();return e={current:e},t.memoizedState=e},useState:function(e){e=Tl(e);var t=e.queue,n=Kc.bind(null,te,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ol,useDeferredValue:function(e,t){var n=Ze();return Nl(n,e,t)},useTransition:function(){var e=Tl(!1);return e=Vc.bind(null,te,e.queue,!0,!1),Ze().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=te,r=Ze();if(se){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),we===null)throw Error(s(349));(oe&127)!==0||yc(i,t,n)}r.memoizedState=n;var a={value:n,getSnapshot:t};return r.queue=a,jc(wc.bind(null,i,a,e),[e]),i.flags|=2048,Ci(9,{destroy:void 0},Sc.bind(null,i,a,n,t),null),n},useId:function(){var e=Ze(),t=we.identifierPrefix;if(se){var n=_t,i=Dt;n=(i&~(1<<32-ct(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=wa++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Vp++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:zl,useFormState:Ac,useActionState:Ac,useOptimistic:function(e){var t=Ze();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Al.bind(null,te,!0,n),n.dispatch=t,[e,t]},useMemoCache:Sl,useCacheRefresh:function(){return Ze().memoizedState=Zp.bind(null,te)},useEffectEvent:function(e){var t=Ze(),n={impl:e};return t.memoizedState=n,function(){if((de&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Rl={readContext:Ve,use:Ta,useCallback:Gc,useContext:Ve,useEffect:Cl,useImperativeHandle:Uc,useInsertionEffect:Bc,useLayoutEffect:Hc,useMemo:Fc,useReducer:ka,useRef:_c,useState:function(){return ka(Pt)},useDebugValue:Ol,useDeferredValue:function(e,t){var n=De();return Wc(n,ge.memoizedState,e,t)},useTransition:function(){var e=ka(Pt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:hr(e),t]},useSyncExternalStore:bc,useId:Qc,useHostTransitionStatus:zl,useFormState:Rc,useActionState:Rc,useOptimistic:function(e,t){var n=De();return kc(n,ge,e,t)},useMemoCache:Sl,useCacheRefresh:Pc};Rl.useEffectEvent=qc;var $c={readContext:Ve,use:Ta,useCallback:Gc,useContext:Ve,useEffect:Cl,useImperativeHandle:Uc,useInsertionEffect:Bc,useLayoutEffect:Hc,useMemo:Fc,useReducer:xl,useRef:_c,useState:function(){return xl(Pt)},useDebugValue:Ol,useDeferredValue:function(e,t){var n=De();return ge===null?Nl(n,e,t):Wc(n,ge.memoizedState,e,t)},useTransition:function(){var e=xl(Pt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:hr(e),t]},useSyncExternalStore:bc,useId:Qc,useHostTransitionStatus:zl,useFormState:Dc,useActionState:Dc,useOptimistic:function(e,t){var n=De();return ge!==null?kc(n,ge,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Sl,useCacheRefresh:Pc};$c.useEffectEvent=qc;function Ml(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:O({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Dl={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=vt(),r=fn(i);r.payload=t,n!=null&&(r.callback=n),t=gn(e,r,i),t!==null&&(rt(t,e,i),ur(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=vt(),r=fn(i);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=gn(e,r,i),t!==null&&(rt(t,e,i),ur(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=vt(),i=fn(n);i.tag=2,t!=null&&(i.callback=t),t=gn(e,i,n),t!==null&&(rt(t,e,n),ur(t,e,n))}};function ed(e,t,n,i,r,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,o):t.prototype&&t.prototype.isPureReactComponent?!tr(n,i)||!tr(r,a):!0}function td(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Dl.enqueueReplaceState(t,t.state,null)}function Zn(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=O({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function nd(e){aa(e)}function id(e){console.error(e)}function rd(e){aa(e)}function Ea(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function ad(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function _l(e,t,n){return n=fn(n),n.tag=3,n.payload={element:null},n.callback=function(){Ea(e,t)},n}function od(e){return e=fn(e),e.tag=3,e}function ld(e,t,n,i){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var a=i.value;e.payload=function(){return r(a)},e.callback=function(){ad(t,n,i)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){ad(t,n,i),typeof r!="function"&&(xn===null?xn=new Set([this]):xn.add(this));var u=i.stack;this.componentDidCatch(i.value,{componentStack:u!==null?u:""})})}function Jp(e,t,n,i,r){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&vi(t,n,r,!0),n=ht.current,n!==null){switch(n.tag){case 31:case 13:return Ct===null?Ua():n.alternate===null&&Ee===0&&(Ee=3),n.flags&=-257,n.flags|=65536,n.lanes=r,i===fa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),as(e,i,r)),!1;case 22:return n.flags|=65536,i===fa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),as(e,i,r)),!1}throw Error(s(435,n.tag))}return as(e,i,r),Ua(),!1}if(se)return t=ht.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,i!==$o&&(e=Error(s(422),{cause:i}),rr(wt(e,n)))):(i!==$o&&(t=Error(s(423),{cause:i}),rr(wt(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,i=wt(i,n),r=_l(e.stateNode,i,r),cl(e,r),Ee!==4&&(Ee=2)),!1;var a=Error(s(520),{cause:i});if(a=wt(a,n),Tr===null?Tr=[a]:Tr.push(a),Ee!==4&&(Ee=2),t===null)return!0;i=wt(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=_l(n.stateNode,i,e),cl(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(xn===null||!xn.has(a))))return n.flags|=65536,r&=-r,n.lanes|=r,r=od(r),ld(r,e,n,i),cl(n,r),!1}n=n.return}while(n!==null);return!1}var jl=Error(s(461)),qe=!1;function Xe(e,t,n,i){t.child=e===null?dc(t,null,n,i):Pn(t,e.child,n,i)}function sd(e,t,n,i,r){n=n.render;var a=t.ref;if("ref"in i){var o={};for(var u in i)u!=="ref"&&(o[u]=i[u])}else o=i;return Vn(t),i=gl(e,t,n,o,a,r),u=vl(),e!==null&&!qe?(bl(e,t,r),Kt(e,t,r)):(se&&u&&Io(t),t.flags|=1,Xe(e,t,i,r),t.child)}function ud(e,t,n,i,r){if(e===null){var a=n.type;return typeof a=="function"&&!Po(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,cd(e,t,a,i,r)):(e=ua(n.type,null,i,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Wl(e,r)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:tr,n(o,i)&&e.ref===t.ref)return Kt(e,t,r)}return t.flags|=1,e=Wt(a,i),e.ref=t.ref,e.return=t,t.child=e}function cd(e,t,n,i,r){if(e!==null){var a=e.memoizedProps;if(tr(a,i)&&e.ref===t.ref)if(qe=!1,t.pendingProps=i=a,Wl(e,r))(e.flags&131072)!==0&&(qe=!0);else return t.lanes=e.lanes,Kt(e,t,r)}return ql(e,t,n,i,r)}function dd(e,t,n,i){var r=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;i=r&~a}else i=0,t.child=null;return md(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ha(t,a!==null?a.cachePool:null),a!==null?pc(t,a):ml(),fc(t);else return i=t.lanes=536870912,md(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(ha(t,a.cachePool),pc(t,a),bn(),t.memoizedState=null):(e!==null&&ha(t,null),ml(),bn());return Xe(e,t,r,n),t.child}function gr(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function md(e,t,n,i,r){var a=ol();return a=a===null?null:{parent:_e._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ha(t,null),ml(),fc(t),e!==null&&vi(e,t,i,!0),t.childLanes=r,null}function za(e,t){return t=Ra({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function hd(e,t,n){return Pn(t,e.child,null,n),e=za(t,t.pendingProps),e.flags|=2,pt(t),t.memoizedState=null,e}function $p(e,t,n){var i=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(se){if(i.mode==="hidden")return e=za(t,i),t.lanes=536870912,gr(null,e);if(pl(t),(e=xe)?(e=Cm(e,kt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:cn!==null?{id:Dt,overflow:_t}:null,retryLane:536870912,hydrationErrors:null},n=Zu(e),n.return=t,t.child=n,We=t,xe=null)):e=null,e===null)throw mn(t);return t.lanes=536870912,null}return za(t,i)}var a=e.memoizedState;if(a!==null){var o=a.dehydrated;if(pl(t),r)if(t.flags&256)t.flags&=-257,t=hd(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(qe||vi(e,t,n,!1),r=(n&e.childLanes)!==0,qe||r){if(i=we,i!==null&&(o=iu(i,n),o!==0&&o!==a.retryLane))throw a.retryLane=o,Un(e,o),rt(i,e,o),jl;Ua(),t=hd(e,t,n)}else e=a.treeContext,xe=Ot(o.nextSibling),We=t,se=!0,dn=null,kt=!1,e!==null&&$u(t,e),t=za(t,i),t.flags|=4096;return t}return e=Wt(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Aa(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function ql(e,t,n,i,r){return Vn(t),n=gl(e,t,n,i,void 0,r),i=vl(),e!==null&&!qe?(bl(e,t,r),Kt(e,t,r)):(se&&i&&Io(t),t.flags|=1,Xe(e,t,n,r),t.child)}function pd(e,t,n,i,r,a){return Vn(t),t.updateQueue=null,n=vc(t,i,n,r),gc(e),i=vl(),e!==null&&!qe?(bl(e,t,a),Kt(e,t,a)):(se&&i&&Io(t),t.flags|=1,Xe(e,t,n,a),t.child)}function fd(e,t,n,i,r){if(Vn(t),t.stateNode===null){var a=hi,o=n.contextType;typeof o=="object"&&o!==null&&(a=Ve(o)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Dl,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},sl(t),o=n.contextType,a.context=typeof o=="object"&&o!==null?Ve(o):hi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Ml(t,n,o,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(o=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),o!==a.state&&Dl.enqueueReplaceState(a,a.state,null),dr(t,i,a,r),cr(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var u=t.memoizedProps,m=Zn(n,u);a.props=m;var x=a.context,N=n.contextType;o=hi,typeof N=="object"&&N!==null&&(o=Ve(N));var D=n.getDerivedStateFromProps;N=typeof D=="function"||typeof a.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,N||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u||x!==o)&&td(t,a,i,o),pn=!1;var T=t.memoizedState;a.state=T,dr(t,i,a,r),cr(),x=t.memoizedState,u||T!==x||pn?(typeof D=="function"&&(Ml(t,n,D,i),x=t.memoizedState),(m=pn||ed(t,n,m,i,T,x,o))?(N||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=x),a.props=i,a.state=x,a.context=o,i=m):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,ul(e,t),o=t.memoizedProps,N=Zn(n,o),a.props=N,D=t.pendingProps,T=a.context,x=n.contextType,m=hi,typeof x=="object"&&x!==null&&(m=Ve(x)),u=n.getDerivedStateFromProps,(x=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==D||T!==m)&&td(t,a,i,m),pn=!1,T=t.memoizedState,a.state=T,dr(t,i,a,r),cr();var k=t.memoizedState;o!==D||T!==k||pn||e!==null&&e.dependencies!==null&&da(e.dependencies)?(typeof u=="function"&&(Ml(t,n,u,i),k=t.memoizedState),(N=pn||ed(t,n,N,i,T,k,m)||e!==null&&e.dependencies!==null&&da(e.dependencies))?(x||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,k,m),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,k,m)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=k),a.props=i,a.state=k,a.context=m,i=N):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,Aa(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=Pn(t,e.child,null,r),t.child=Pn(t,null,n,r)):Xe(e,t,n,r),t.memoizedState=a.state,e=t.child):e=Kt(e,t,r),e}function gd(e,t,n,i){return Fn(),t.flags|=256,Xe(e,t,n,i),t.child}var Bl={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hl(e){return{baseLanes:e,cachePool:ac()}}function Ll(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=gt),e}function vd(e,t,n){var i=t.pendingProps,r=!1,a=(t.flags&128)!==0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(Me.current&2)!==0),o&&(r=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(se){if(r?vn(t):bn(),(e=xe)?(e=Cm(e,kt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:cn!==null?{id:Dt,overflow:_t}:null,retryLane:536870912,hydrationErrors:null},n=Zu(e),n.return=t,t.child=n,We=t,xe=null)):e=null,e===null)throw mn(t);return ws(e)?t.lanes=32:t.lanes=536870912,null}var u=i.children;return i=i.fallback,r?(bn(),r=t.mode,u=Ra({mode:"hidden",children:u},r),i=Gn(i,r,n,null),u.return=t,i.return=t,u.sibling=i,t.child=u,i=t.child,i.memoizedState=Hl(n),i.childLanes=Ll(e,o,n),t.memoizedState=Bl,gr(null,i)):(vn(t),Ul(t,u))}var m=e.memoizedState;if(m!==null&&(u=m.dehydrated,u!==null)){if(a)t.flags&256?(vn(t),t.flags&=-257,t=Gl(e,t,n)):t.memoizedState!==null?(bn(),t.child=e.child,t.flags|=128,t=null):(bn(),u=i.fallback,r=t.mode,i=Ra({mode:"visible",children:i.children},r),u=Gn(u,r,n,null),u.flags|=2,i.return=t,u.return=t,i.sibling=u,t.child=i,Pn(t,e.child,null,n),i=t.child,i.memoizedState=Hl(n),i.childLanes=Ll(e,o,n),t.memoizedState=Bl,t=gr(null,i));else if(vn(t),ws(u)){if(o=u.nextSibling&&u.nextSibling.dataset,o)var x=o.dgst;o=x,i=Error(s(419)),i.stack="",i.digest=o,rr({value:i,source:null,stack:null}),t=Gl(e,t,n)}else if(qe||vi(e,t,n,!1),o=(n&e.childLanes)!==0,qe||o){if(o=we,o!==null&&(i=iu(o,n),i!==0&&i!==m.retryLane))throw m.retryLane=i,Un(e,i),rt(o,e,i),jl;Ss(u)||Ua(),t=Gl(e,t,n)}else Ss(u)?(t.flags|=192,t.child=e.child,t=null):(e=m.treeContext,xe=Ot(u.nextSibling),We=t,se=!0,dn=null,kt=!1,e!==null&&$u(t,e),t=Ul(t,i.children),t.flags|=4096);return t}return r?(bn(),u=i.fallback,r=t.mode,m=e.child,x=m.sibling,i=Wt(m,{mode:"hidden",children:i.children}),i.subtreeFlags=m.subtreeFlags&65011712,x!==null?u=Wt(x,u):(u=Gn(u,r,n,null),u.flags|=2),u.return=t,i.return=t,i.sibling=u,t.child=i,gr(null,i),i=t.child,u=e.child.memoizedState,u===null?u=Hl(n):(r=u.cachePool,r!==null?(m=_e._currentValue,r=r.parent!==m?{parent:m,pool:m}:r):r=ac(),u={baseLanes:u.baseLanes|n,cachePool:r}),i.memoizedState=u,i.childLanes=Ll(e,o,n),t.memoizedState=Bl,gr(e.child,i)):(vn(t),n=e.child,e=n.sibling,n=Wt(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Ul(e,t){return t=Ra({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ra(e,t){return e=mt(22,e,null,t),e.lanes=0,e}function Gl(e,t,n){return Pn(t,e.child,null,n),e=Ul(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function bd(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),nl(e.return,t,n)}function Fl(e,t,n,i,r,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r,o.treeForkCount=a)}function yd(e,t,n){var i=t.pendingProps,r=i.revealOrder,a=i.tail;i=i.children;var o=Me.current,u=(o&2)!==0;if(u?(o=o&1|2,t.flags|=128):o&=1,B(Me,o),Xe(e,t,i,n),i=se?ir:0,!u&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bd(e,n,t);else if(e.tag===19)bd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&ya(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Fl(t,!1,r,n,a,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&ya(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Fl(t,!0,n,null,a,i);break;case"together":Fl(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function Kt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),wn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(vi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=Wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Wl(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&da(e)))}function ef(e,t,n){switch(t.tag){case 3:Ke(t,t.stateNode.containerInfo),hn(t,_e,e.memoizedState.cache),Fn();break;case 27:case 5:Fi(t);break;case 4:Ke(t,t.stateNode.containerInfo);break;case 10:hn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,pl(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(vn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?vd(e,t,n):(vn(t),e=Kt(e,t,n),e!==null?e.sibling:null);vn(t);break;case 19:var r=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(vi(e,t,n,!1),i=(n&t.childLanes)!==0),r){if(i)return yd(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),B(Me,Me.current),i)break;return null;case 22:return t.lanes=0,dd(e,t,n,t.pendingProps);case 24:hn(t,_e,e.memoizedState.cache)}return Kt(e,t,n)}function Sd(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)qe=!0;else{if(!Wl(e,n)&&(t.flags&128)===0)return qe=!1,ef(e,t,n);qe=(e.flags&131072)!==0}else qe=!1,se&&(t.flags&1048576)!==0&&Ju(t,ir,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=Yn(t.elementType),t.type=e,typeof e=="function")Po(e)?(i=Zn(e,i),t.tag=1,t=fd(null,t,e,i,n)):(t.tag=0,t=ql(null,t,e,i,n));else{if(e!=null){var r=e.$$typeof;if(r===ye){t.tag=11,t=sd(null,t,e,i,n);break e}else if(r===J){t.tag=14,t=ud(null,t,e,i,n);break e}}throw t=Lt(e)||e,Error(s(306,t,""))}}return t;case 0:return ql(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,r=Zn(i,t.pendingProps),fd(e,t,i,r,n);case 3:e:{if(Ke(t,t.stateNode.containerInfo),e===null)throw Error(s(387));i=t.pendingProps;var a=t.memoizedState;r=a.element,ul(e,t),dr(t,i,null,n);var o=t.memoizedState;if(i=o.cache,hn(t,_e,i),i!==a.cache&&il(t,[_e],n,!0),cr(),i=o.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=gd(e,t,i,n);break e}else if(i!==r){r=wt(Error(s(424)),t),rr(r),t=gd(e,t,i,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(xe=Ot(e.firstChild),We=t,se=!0,dn=null,kt=!0,n=dc(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Fn(),i===r){t=Kt(e,t,n);break e}Xe(e,t,i,n)}t=t.child}return t;case 26:return Aa(e,t),e===null?(n=Rm(t.type,null,t.pendingProps,null))?t.memoizedState=n:se||(n=t.type,e=t.pendingProps,i=Qa(ie.current).createElement(n),i[Fe]=t,i[Je]=e,Ye(i,n,e),Ue(i),t.stateNode=i):t.memoizedState=Rm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Fi(t),e===null&&se&&(i=t.stateNode=Em(t.type,t.pendingProps,ie.current),We=t,kt=!0,r=xe,On(t.type)?(xs=r,xe=Ot(i.firstChild)):xe=r),Xe(e,t,t.pendingProps.children,n),Aa(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&se&&((r=i=xe)&&(i=Rf(i,t.type,t.pendingProps,kt),i!==null?(t.stateNode=i,We=t,xe=Ot(i.firstChild),kt=!1,r=!0):r=!1),r||mn(t)),Fi(t),r=t.type,a=t.pendingProps,o=e!==null?e.memoizedProps:null,i=a.children,vs(r,a)?i=null:o!==null&&vs(r,o)&&(t.flags|=32),t.memoizedState!==null&&(r=gl(e,t,Xp,null,null,n),Rr._currentValue=r),Aa(e,t),Xe(e,t,i,n),t.child;case 6:return e===null&&se&&((e=n=xe)&&(n=Mf(n,t.pendingProps,kt),n!==null?(t.stateNode=n,We=t,xe=null,e=!0):e=!1),e||mn(t)),null;case 13:return vd(e,t,n);case 4:return Ke(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Pn(t,null,i,n):Xe(e,t,i,n),t.child;case 11:return sd(e,t,t.type,t.pendingProps,n);case 7:return Xe(e,t,t.pendingProps,n),t.child;case 8:return Xe(e,t,t.pendingProps.children,n),t.child;case 12:return Xe(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,hn(t,t.type,i.value),Xe(e,t,i.children,n),t.child;case 9:return r=t.type._context,i=t.pendingProps.children,Vn(t),r=Ve(r),i=i(r),t.flags|=1,Xe(e,t,i,n),t.child;case 14:return ud(e,t,t.type,t.pendingProps,n);case 15:return cd(e,t,t.type,t.pendingProps,n);case 19:return yd(e,t,n);case 31:return $p(e,t,n);case 22:return dd(e,t,n,t.pendingProps);case 24:return Vn(t),i=Ve(_e),e===null?(r=ol(),r===null&&(r=we,a=rl(),r.pooledCache=a,a.refCount++,a!==null&&(r.pooledCacheLanes|=n),r=a),t.memoizedState={parent:i,cache:r},sl(t),hn(t,_e,r)):((e.lanes&n)!==0&&(ul(e,t),dr(t,null,null,n),cr()),r=e.memoizedState,a=t.memoizedState,r.parent!==i?(r={parent:i,cache:i},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),hn(t,_e,i)):(i=a.cache,hn(t,_e,i),i!==r.cache&&il(t,[_e],n,!0))),Xe(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Zt(e){e.flags|=4}function Vl(e,t,n,i,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(Qd())e.flags|=8192;else throw Qn=fa,ll}else e.flags&=-16777217}function wd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!qm(t))if(Qd())e.flags|=8192;else throw Qn=fa,ll}function Ma(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?eu():536870912,e.lanes|=t,zi|=t)}function vr(e,t){if(!se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&65011712,i|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function tf(e,t,n){var i=t.pendingProps;switch(Jo(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Te(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Yt(_e),Re(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(gi(t)?Zt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,el())),Te(t),null;case 26:var r=t.type,a=t.memoizedState;return e===null?(Zt(t),a!==null?(Te(t),wd(t,a)):(Te(t),Vl(t,r,null,i,n))):a?a!==e.memoizedState?(Zt(t),Te(t),wd(t,a)):(Te(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Zt(t),Te(t),Vl(t,r,e,i,n)),null;case 27:if(Wr(t),n=ie.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Zt(t);else{if(!i){if(t.stateNode===null)throw Error(s(166));return Te(t),null}e=V.current,gi(t)?ec(t):(e=Em(r,i,n),t.stateNode=e,Zt(t))}return Te(t),null;case 5:if(Wr(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Zt(t);else{if(!i){if(t.stateNode===null)throw Error(s(166));return Te(t),null}if(a=V.current,gi(t))ec(t);else{var o=Qa(ie.current);switch(a){case 1:a=o.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:a=o.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":a=o.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":a=o.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":a=o.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?o.createElement("select",{is:i.is}):o.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?o.createElement(r,{is:i.is}):o.createElement(r)}}a[Fe]=t,a[Je]=i;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)a.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=a;e:switch(Ye(a,r,i),r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Zt(t)}}return Te(t),Vl(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Zt(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(s(166));if(e=ie.current,gi(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,r=We,r!==null)switch(r.tag){case 27:case 5:i=r.memoizedProps}e[Fe]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||vm(e.nodeValue,n)),e||mn(t,!0)}else e=Qa(e).createTextNode(i),e[Fe]=t,t.stateNode=e}return Te(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=gi(t),n!==null){if(e===null){if(!i)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Fe]=t}else Fn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Te(t),e=!1}else n=el(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(pt(t),t):(pt(t),null);if((t.flags&128)!==0)throw Error(s(558))}return Te(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=gi(t),i!==null&&i.dehydrated!==null){if(e===null){if(!r)throw Error(s(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(s(317));r[Fe]=t}else Fn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Te(t),r=!1}else r=el(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(pt(t),t):(pt(t),null)}return pt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,r=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(r=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==r&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ma(t,t.updateQueue),Te(t),null);case 4:return Re(),e===null&&ms(t.stateNode.containerInfo),Te(t),null;case 10:return Yt(t.type),Te(t),null;case 19:if(_(Me),i=t.memoizedState,i===null)return Te(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)vr(i,!1);else{if(Ee!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=ya(e),a!==null){for(t.flags|=128,vr(i,!1),e=a.updateQueue,t.updateQueue=e,Ma(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Ku(n,e),n=n.sibling;return B(Me,Me.current&1|2),se&&Vt(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&st()>Ba&&(t.flags|=128,r=!0,vr(i,!1),t.lanes=4194304)}else{if(!r)if(e=ya(a),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Ma(t,e),vr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!se)return Te(t),null}else 2*st()-i.renderingStartTime>Ba&&n!==536870912&&(t.flags|=128,r=!0,vr(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=st(),e.sibling=null,n=Me.current,B(Me,r?n&1|2:n&1),se&&Vt(t,i.treeForkCount),e):(Te(t),null);case 22:case 23:return pt(t),hl(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),n=t.updateQueue,n!==null&&Ma(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&_(Xn),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Yt(_e),Te(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function nf(e,t){switch(Jo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yt(_e),Re(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Wr(t),null;case 31:if(t.memoizedState!==null){if(pt(t),t.alternate===null)throw Error(s(340));Fn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(pt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Fn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _(Me),null;case 4:return Re(),null;case 10:return Yt(t.type),null;case 22:case 23:return pt(t),hl(),e!==null&&_(Xn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Yt(_e),null;case 25:return null;default:return null}}function xd(e,t){switch(Jo(t),t.tag){case 3:Yt(_e),Re();break;case 26:case 27:case 5:Wr(t);break;case 4:Re();break;case 31:t.memoizedState!==null&&pt(t);break;case 13:pt(t);break;case 19:_(Me);break;case 10:Yt(t.type);break;case 22:case 23:pt(t),hl(),e!==null&&_(Xn);break;case 24:Yt(_e)}}function br(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&e)===e){i=void 0;var a=n.create,o=n.inst;i=a(),o.destroy=i}n=n.next}while(n!==r)}}catch(u){pe(t,t.return,u)}}function yn(e,t,n){try{var i=t.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var a=r.next;i=a;do{if((i.tag&e)===e){var o=i.inst,u=o.destroy;if(u!==void 0){o.destroy=void 0,r=t;var m=n,x=u;try{x()}catch(N){pe(r,m,N)}}}i=i.next}while(i!==a)}}catch(N){pe(t,t.return,N)}}function Td(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{hc(t,n)}catch(i){pe(e,e.return,i)}}}function kd(e,t,n){n.props=Zn(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){pe(e,t,i)}}function yr(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(r){pe(e,t,r)}}function jt(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(r){pe(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){pe(e,t,r)}else n.current=null}function Cd(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(r){pe(e,e.return,r)}}function Xl(e,t,n){try{var i=e.stateNode;Cf(i,e.type,n,t),i[Je]=t}catch(r){pe(e,e.return,r)}}function Od(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&On(e.type)||e.tag===4}function Yl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Od(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&On(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ql(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Gt));else if(i!==4&&(i===27&&On(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Ql(e,t,n),e=e.sibling;e!==null;)Ql(e,t,n),e=e.sibling}function Da(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&On(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Da(e,t,n),e=e.sibling;e!==null;)Da(e,t,n),e=e.sibling}function Nd(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);Ye(t,i,n),t[Fe]=e,t[Je]=n}catch(a){pe(e,e.return,a)}}var It=!1,Be=!1,Pl=!1,Ed=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function rf(e,t){if(e=e.containerInfo,fs=eo,e=Uu(e),Go(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,u=-1,m=-1,x=0,N=0,D=e,T=null;t:for(;;){for(var k;D!==n||r!==0&&D.nodeType!==3||(u=o+r),D!==a||i!==0&&D.nodeType!==3||(m=o+i),D.nodeType===3&&(o+=D.nodeValue.length),(k=D.firstChild)!==null;)T=D,D=k;for(;;){if(D===e)break t;if(T===n&&++x===r&&(u=o),T===a&&++N===i&&(m=o),(k=D.nextSibling)!==null)break;D=T,T=D.parentNode}D=k}n=u===-1||m===-1?null:{start:u,end:m}}else n=null}n=n||{start:0,end:0}}else n=null;for(gs={focusedElem:e,selectionRange:n},eo=!1,Ge=t;Ge!==null;)if(t=Ge,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ge=e;else for(;Ge!==null;){switch(t=Ge,a=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&a!==null){e=void 0,n=t,r=a.memoizedProps,a=a.memoizedState,i=n.stateNode;try{var U=Zn(n.type,r);e=i.getSnapshotBeforeUpdate(U,a),i.__reactInternalSnapshotBeforeUpdate=e}catch(K){pe(n,n.return,K)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ys(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ys(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,Ge=e;break}Ge=t.return}}function zd(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:$t(e,n),i&4&&br(5,n);break;case 1:if($t(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(o){pe(n,n.return,o)}else{var r=Zn(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){pe(n,n.return,o)}}i&64&&Td(n),i&512&&yr(n,n.return);break;case 3:if($t(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{hc(e,t)}catch(o){pe(n,n.return,o)}}break;case 27:t===null&&i&4&&Nd(n);case 26:case 5:$t(e,n),t===null&&i&4&&Cd(n),i&512&&yr(n,n.return);break;case 12:$t(e,n);break;case 31:$t(e,n),i&4&&Md(e,n);break;case 13:$t(e,n),i&4&&Dd(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=hf.bind(null,n),Df(e,n))));break;case 22:if(i=n.memoizedState!==null||It,!i){t=t!==null&&t.memoizedState!==null||Be,r=It;var a=Be;It=i,(Be=t)&&!a?en(e,n,(n.subtreeFlags&8772)!==0):$t(e,n),It=r,Be=a}break;case 30:break;default:$t(e,n)}}function Ad(e){var t=e.alternate;t!==null&&(e.alternate=null,Ad(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ko(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ce=null,et=!1;function Jt(e,t,n){for(n=n.child;n!==null;)Rd(e,t,n),n=n.sibling}function Rd(e,t,n){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(Wi,n)}catch{}switch(n.tag){case 26:Be||jt(n,t),Jt(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Be||jt(n,t);var i=Ce,r=et;On(n.type)&&(Ce=n.stateNode,et=!1),Jt(e,t,n),Er(n.stateNode),Ce=i,et=r;break;case 5:Be||jt(n,t);case 6:if(i=Ce,r=et,Ce=null,Jt(e,t,n),Ce=i,et=r,Ce!==null)if(et)try{(Ce.nodeType===9?Ce.body:Ce.nodeName==="HTML"?Ce.ownerDocument.body:Ce).removeChild(n.stateNode)}catch(a){pe(n,t,a)}else try{Ce.removeChild(n.stateNode)}catch(a){pe(n,t,a)}break;case 18:Ce!==null&&(et?(e=Ce,Tm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Bi(e)):Tm(Ce,n.stateNode));break;case 4:i=Ce,r=et,Ce=n.stateNode.containerInfo,et=!0,Jt(e,t,n),Ce=i,et=r;break;case 0:case 11:case 14:case 15:yn(2,n,t),Be||yn(4,n,t),Jt(e,t,n);break;case 1:Be||(jt(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&kd(n,t,i)),Jt(e,t,n);break;case 21:Jt(e,t,n);break;case 22:Be=(i=Be)||n.memoizedState!==null,Jt(e,t,n),Be=i;break;default:Jt(e,t,n)}}function Md(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Bi(e)}catch(n){pe(t,t.return,n)}}}function Dd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Bi(e)}catch(n){pe(t,t.return,n)}}function af(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ed),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ed),t;default:throw Error(s(435,e.tag))}}function _a(e,t){var n=af(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var r=pf.bind(null,e,i);i.then(r,r)}})}function tt(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i],a=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 27:if(On(u.type)){Ce=u.stateNode,et=!1;break e}break;case 5:Ce=u.stateNode,et=!1;break e;case 3:case 4:Ce=u.stateNode.containerInfo,et=!0;break e}u=u.return}if(Ce===null)throw Error(s(160));Rd(a,o,r),Ce=null,et=!1,a=r.alternate,a!==null&&(a.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_d(t,e),t=t.sibling}var At=null;function _d(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:tt(t,e),nt(e),i&4&&(yn(3,e,e.return),br(3,e),yn(5,e,e.return));break;case 1:tt(t,e),nt(e),i&512&&(Be||n===null||jt(n,n.return)),i&64&&It&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var r=At;if(tt(t,e),nt(e),i&512&&(Be||n===null||jt(n,n.return)),i&4){var a=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(i){case"title":a=r.getElementsByTagName("title")[0],(!a||a[Yi]||a[Fe]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=r.createElement(i),r.head.insertBefore(a,r.querySelector("head > title"))),Ye(a,i,n),a[Fe]=e,Ue(a),i=a;break e;case"link":var o=_m("link","href",r).get(i+(n.href||""));if(o){for(var u=0;u<o.length;u++)if(a=o[u],a.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(u,1);break t}}a=r.createElement(i),Ye(a,i,n),r.head.appendChild(a);break;case"meta":if(o=_m("meta","content",r).get(i+(n.content||""))){for(u=0;u<o.length;u++)if(a=o[u],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){o.splice(u,1);break t}}a=r.createElement(i),Ye(a,i,n),r.head.appendChild(a);break;default:throw Error(s(468,i))}a[Fe]=e,Ue(a),i=a}e.stateNode=i}else jm(r,e.type,e.stateNode);else e.stateNode=Dm(r,i,e.memoizedProps);else a!==i?(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,i===null?jm(r,e.type,e.stateNode):Dm(r,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Xl(e,e.memoizedProps,n.memoizedProps)}break;case 27:tt(t,e),nt(e),i&512&&(Be||n===null||jt(n,n.return)),n!==null&&i&4&&Xl(e,e.memoizedProps,n.memoizedProps);break;case 5:if(tt(t,e),nt(e),i&512&&(Be||n===null||jt(n,n.return)),e.flags&32){r=e.stateNode;try{oi(r,"")}catch(U){pe(e,e.return,U)}}i&4&&e.stateNode!=null&&(r=e.memoizedProps,Xl(e,r,n!==null?n.memoizedProps:r)),i&1024&&(Pl=!0);break;case 6:if(tt(t,e),nt(e),i&4){if(e.stateNode===null)throw Error(s(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(U){pe(e,e.return,U)}}break;case 3:if(Za=null,r=At,At=Pa(t.containerInfo),tt(t,e),At=r,nt(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Bi(t.containerInfo)}catch(U){pe(e,e.return,U)}Pl&&(Pl=!1,jd(e));break;case 4:i=At,At=Pa(e.stateNode.containerInfo),tt(t,e),nt(e),At=i;break;case 12:tt(t,e),nt(e);break;case 31:tt(t,e),nt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,_a(e,i)));break;case 13:tt(t,e),nt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(qa=st()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,_a(e,i)));break;case 22:r=e.memoizedState!==null;var m=n!==null&&n.memoizedState!==null,x=It,N=Be;if(It=x||r,Be=N||m,tt(t,e),Be=N,It=x,nt(e),i&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||m||It||Be||In(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){m=n=t;try{if(a=m.stateNode,r)o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{u=m.stateNode;var D=m.memoizedProps.style,T=D!=null&&D.hasOwnProperty("display")?D.display:null;u.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(U){pe(m,m.return,U)}}}else if(t.tag===6){if(n===null){m=t;try{m.stateNode.nodeValue=r?"":m.memoizedProps}catch(U){pe(m,m.return,U)}}}else if(t.tag===18){if(n===null){m=t;try{var k=m.stateNode;r?km(k,!0):km(m.stateNode,!1)}catch(U){pe(m,m.return,U)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,_a(e,n))));break;case 19:tt(t,e),nt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,_a(e,i)));break;case 30:break;case 21:break;default:tt(t,e),nt(e)}}function nt(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Od(i)){n=i;break}i=i.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var r=n.stateNode,a=Yl(e);Da(e,a,r);break;case 5:var o=n.stateNode;n.flags&32&&(oi(o,""),n.flags&=-33);var u=Yl(e);Da(e,u,o);break;case 3:case 4:var m=n.stateNode.containerInfo,x=Yl(e);Ql(e,x,m);break;default:throw Error(s(161))}}catch(N){pe(e,e.return,N)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function jd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;jd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function $t(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)zd(e,t.alternate,t),t=t.sibling}function In(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:yn(4,t,t.return),In(t);break;case 1:jt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&kd(t,t.return,n),In(t);break;case 27:Er(t.stateNode);case 26:case 5:jt(t,t.return),In(t);break;case 22:t.memoizedState===null&&In(t);break;case 30:In(t);break;default:In(t)}e=e.sibling}}function en(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,r=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:en(r,a,n),br(4,a);break;case 1:if(en(r,a,n),i=a,r=i.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(x){pe(i,i.return,x)}if(i=a,r=i.updateQueue,r!==null){var u=i.stateNode;try{var m=r.shared.hiddenCallbacks;if(m!==null)for(r.shared.hiddenCallbacks=null,r=0;r<m.length;r++)mc(m[r],u)}catch(x){pe(i,i.return,x)}}n&&o&64&&Td(a),yr(a,a.return);break;case 27:Nd(a);case 26:case 5:en(r,a,n),n&&i===null&&o&4&&Cd(a),yr(a,a.return);break;case 12:en(r,a,n);break;case 31:en(r,a,n),n&&o&4&&Md(r,a);break;case 13:en(r,a,n),n&&o&4&&Dd(r,a);break;case 22:a.memoizedState===null&&en(r,a,n),yr(a,a.return);break;case 30:break;default:en(r,a,n)}t=t.sibling}}function Kl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ar(n))}function Zl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ar(e))}function Rt(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)qd(e,t,n,i),t=t.sibling}function qd(e,t,n,i){var r=t.flags;switch(t.tag){case 0:case 11:case 15:Rt(e,t,n,i),r&2048&&br(9,t);break;case 1:Rt(e,t,n,i);break;case 3:Rt(e,t,n,i),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ar(e)));break;case 12:if(r&2048){Rt(e,t,n,i),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,u=a.onPostCommit;typeof u=="function"&&u(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(m){pe(t,t.return,m)}}else Rt(e,t,n,i);break;case 31:Rt(e,t,n,i);break;case 13:Rt(e,t,n,i);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState!==null?a._visibility&2?Rt(e,t,n,i):Sr(e,t):a._visibility&2?Rt(e,t,n,i):(a._visibility|=2,Oi(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),r&2048&&Kl(o,t);break;case 24:Rt(e,t,n,i),r&2048&&Zl(t.alternate,t);break;default:Rt(e,t,n,i)}}function Oi(e,t,n,i,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,o=t,u=n,m=i,x=o.flags;switch(o.tag){case 0:case 11:case 15:Oi(a,o,u,m,r),br(8,o);break;case 23:break;case 22:var N=o.stateNode;o.memoizedState!==null?N._visibility&2?Oi(a,o,u,m,r):Sr(a,o):(N._visibility|=2,Oi(a,o,u,m,r)),r&&x&2048&&Kl(o.alternate,o);break;case 24:Oi(a,o,u,m,r),r&&x&2048&&Zl(o.alternate,o);break;default:Oi(a,o,u,m,r)}t=t.sibling}}function Sr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,r=i.flags;switch(i.tag){case 22:Sr(n,i),r&2048&&Kl(i.alternate,i);break;case 24:Sr(n,i),r&2048&&Zl(i.alternate,i);break;default:Sr(n,i)}t=t.sibling}}var wr=8192;function Ni(e,t,n){if(e.subtreeFlags&wr)for(e=e.child;e!==null;)Bd(e,t,n),e=e.sibling}function Bd(e,t,n){switch(e.tag){case 26:Ni(e,t,n),e.flags&wr&&e.memoizedState!==null&&Xf(n,At,e.memoizedState,e.memoizedProps);break;case 5:Ni(e,t,n);break;case 3:case 4:var i=At;At=Pa(e.stateNode.containerInfo),Ni(e,t,n),At=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=wr,wr=16777216,Ni(e,t,n),wr=i):Ni(e,t,n));break;default:Ni(e,t,n)}}function Hd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function xr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ge=i,Ud(i,e)}Hd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ld(e),e=e.sibling}function Ld(e){switch(e.tag){case 0:case 11:case 15:xr(e),e.flags&2048&&yn(9,e,e.return);break;case 3:xr(e);break;case 12:xr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ja(e)):xr(e);break;default:xr(e)}}function ja(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ge=i,Ud(i,e)}Hd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:yn(8,t,t.return),ja(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,ja(t));break;default:ja(t)}e=e.sibling}}function Ud(e,t){for(;Ge!==null;){var n=Ge;switch(n.tag){case 0:case 11:case 15:yn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:ar(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Ge=i;else e:for(n=e;Ge!==null;){i=Ge;var r=i.sibling,a=i.return;if(Ad(i),i===n){Ge=null;break e}if(r!==null){r.return=a,Ge=r;break e}Ge=a}}}var of={getCacheForType:function(e){var t=Ve(_e),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ve(_e).controller.signal}},lf=typeof WeakMap=="function"?WeakMap:Map,de=0,we=null,re=null,oe=0,he=0,ft=null,Sn=!1,Ei=!1,Il=!1,tn=0,Ee=0,wn=0,Jn=0,Jl=0,gt=0,zi=0,Tr=null,it=null,$l=!1,qa=0,Gd=0,Ba=1/0,Ha=null,xn=null,He=0,Tn=null,Ai=null,nn=0,es=0,ts=null,Fd=null,kr=0,ns=null;function vt(){return(de&2)!==0&&oe!==0?oe&-oe:z.T!==null?ss():ru()}function Wd(){if(gt===0)if((oe&536870912)===0||se){var e=Yr;Yr<<=1,(Yr&3932160)===0&&(Yr=262144),gt=e}else gt=536870912;return e=ht.current,e!==null&&(e.flags|=32),gt}function rt(e,t,n){(e===we&&(he===2||he===9)||e.cancelPendingCommit!==null)&&(Ri(e,0),kn(e,oe,gt,!1)),Xi(e,n),((de&2)===0||e!==we)&&(e===we&&((de&2)===0&&(Jn|=n),Ee===4&&kn(e,oe,gt,!1)),qt(e))}function Vd(e,t,n){if((de&6)!==0)throw Error(s(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Vi(e,t),r=i?cf(e,t):rs(e,t,!0),a=i;do{if(r===0){Ei&&!i&&kn(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!sf(n)){r=rs(e,t,!1),a=!1;continue}if(r===2){if(a=t,e.errorRecoveryDisabledLanes&a)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var u=e;r=Tr;var m=u.current.memoizedState.isDehydrated;if(m&&(Ri(u,o).flags|=256),o=rs(u,o,!1),o!==2){if(Il&&!m){u.errorRecoveryDisabledLanes|=a,Jn|=a,r=4;break e}a=it,it=r,a!==null&&(it===null?it=a:it.push.apply(it,a))}r=o}if(a=!1,r!==2)continue}}if(r===1){Ri(e,0),kn(e,t,0,!0);break}e:{switch(i=e,a=r,a){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:kn(i,t,gt,!Sn);break e;case 2:it=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(r=qa+300-st(),10<r)){if(kn(i,t,gt,!Sn),Pr(i,0,!0)!==0)break e;nn=t,i.timeoutHandle=wm(Xd.bind(null,i,n,it,Ha,$l,t,gt,Jn,zi,Sn,a,"Throttled",-0,0),r);break e}Xd(i,n,it,Ha,$l,t,gt,Jn,zi,Sn,a,null,-0,0)}}break}while(!0);qt(e)}function Xd(e,t,n,i,r,a,o,u,m,x,N,D,T,k){if(e.timeoutHandle=-1,D=t.subtreeFlags,D&8192||(D&16785408)===16785408){D={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Gt},Bd(t,a,D);var U=(a&62914560)===a?qa-st():(a&4194048)===a?Gd-st():0;if(U=Yf(D,U),U!==null){nn=a,e.cancelPendingCommit=U($d.bind(null,e,t,a,n,i,r,o,u,m,N,D,null,T,k)),kn(e,a,o,!x);return}}$d(e,t,a,n,i,r,o,u,m)}function sf(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var r=n[i],a=r.getSnapshot;r=r.value;try{if(!dt(a(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kn(e,t,n,i){t&=~Jl,t&=~Jn,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var r=t;0<r;){var a=31-ct(r),o=1<<a;i[a]=-1,r&=~o}n!==0&&tu(e,n,t)}function La(){return(de&6)===0?(Cr(0),!1):!0}function is(){if(re!==null){if(he===0)var e=re.return;else e=re,Xt=Wn=null,yl(e),wi=null,lr=0,e=re;for(;e!==null;)xd(e.alternate,e),e=e.return;re=null}}function Ri(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Ef(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),nn=0,is(),we=e,re=n=Wt(e.current,null),oe=t,he=0,ft=null,Sn=!1,Ei=Vi(e,t),Il=!1,zi=gt=Jl=Jn=wn=Ee=0,it=Tr=null,$l=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var r=31-ct(i),a=1<<r;t|=e[r],i&=~a}return tn=t,oa(),n}function Yd(e,t){te=null,z.H=fr,t===Si||t===pa?(t=sc(),he=3):t===ll?(t=sc(),he=4):he=t===jl?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ft=t,re===null&&(Ee=1,Ea(e,wt(t,e.current)))}function Qd(){var e=ht.current;return e===null?!0:(oe&4194048)===oe?Ct===null:(oe&62914560)===oe||(oe&536870912)!==0?e===Ct:!1}function Pd(){var e=z.H;return z.H=fr,e===null?fr:e}function Kd(){var e=z.A;return z.A=of,e}function Ua(){Ee=4,Sn||(oe&4194048)!==oe&&ht.current!==null||(Ei=!0),(wn&134217727)===0&&(Jn&134217727)===0||we===null||kn(we,oe,gt,!1)}function rs(e,t,n){var i=de;de|=2;var r=Pd(),a=Kd();(we!==e||oe!==t)&&(Ha=null,Ri(e,t)),t=!1;var o=Ee;e:do try{if(he!==0&&re!==null){var u=re,m=ft;switch(he){case 8:is(),o=6;break e;case 3:case 2:case 9:case 6:ht.current===null&&(t=!0);var x=he;if(he=0,ft=null,Mi(e,u,m,x),n&&Ei){o=0;break e}break;default:x=he,he=0,ft=null,Mi(e,u,m,x)}}uf(),o=Ee;break}catch(N){Yd(e,N)}while(!0);return t&&e.shellSuspendCounter++,Xt=Wn=null,de=i,z.H=r,z.A=a,re===null&&(we=null,oe=0,oa()),o}function uf(){for(;re!==null;)Zd(re)}function cf(e,t){var n=de;de|=2;var i=Pd(),r=Kd();we!==e||oe!==t?(Ha=null,Ba=st()+500,Ri(e,t)):Ei=Vi(e,t);e:do try{if(he!==0&&re!==null){t=re;var a=ft;t:switch(he){case 1:he=0,ft=null,Mi(e,t,a,1);break;case 2:case 9:if(oc(a)){he=0,ft=null,Id(t);break}t=function(){he!==2&&he!==9||we!==e||(he=7),qt(e)},a.then(t,t);break e;case 3:he=7;break e;case 4:he=5;break e;case 7:oc(a)?(he=0,ft=null,Id(t)):(he=0,ft=null,Mi(e,t,a,7));break;case 5:var o=null;switch(re.tag){case 26:o=re.memoizedState;case 5:case 27:var u=re;if(o?qm(o):u.stateNode.complete){he=0,ft=null;var m=u.sibling;if(m!==null)re=m;else{var x=u.return;x!==null?(re=x,Ga(x)):re=null}break t}}he=0,ft=null,Mi(e,t,a,5);break;case 6:he=0,ft=null,Mi(e,t,a,6);break;case 8:is(),Ee=6;break e;default:throw Error(s(462))}}df();break}catch(N){Yd(e,N)}while(!0);return Xt=Wn=null,z.H=i,z.A=r,de=n,re!==null?0:(we=null,oe=0,oa(),Ee)}function df(){for(;re!==null&&!Dh();)Zd(re)}function Zd(e){var t=Sd(e.alternate,e,tn);e.memoizedProps=e.pendingProps,t===null?Ga(e):re=t}function Id(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=pd(n,t,t.pendingProps,t.type,void 0,oe);break;case 11:t=pd(n,t,t.pendingProps,t.type.render,t.ref,oe);break;case 5:yl(t);default:xd(n,t),t=re=Ku(t,tn),t=Sd(n,t,tn)}e.memoizedProps=e.pendingProps,t===null?Ga(e):re=t}function Mi(e,t,n,i){Xt=Wn=null,yl(t),wi=null,lr=0;var r=t.return;try{if(Jp(e,r,t,n,oe)){Ee=1,Ea(e,wt(n,e.current)),re=null;return}}catch(a){if(r!==null)throw re=r,a;Ee=1,Ea(e,wt(n,e.current)),re=null;return}t.flags&32768?(se||i===1?e=!0:Ei||(oe&536870912)!==0?e=!1:(Sn=e=!0,(i===2||i===9||i===3||i===6)&&(i=ht.current,i!==null&&i.tag===13&&(i.flags|=16384))),Jd(t,e)):Ga(t)}function Ga(e){var t=e;do{if((t.flags&32768)!==0){Jd(t,Sn);return}e=t.return;var n=tf(t.alternate,t,tn);if(n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);Ee===0&&(Ee=5)}function Jd(e,t){do{var n=nf(e.alternate,e);if(n!==null){n.flags&=32767,re=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){re=e;return}re=e=n}while(e!==null);Ee=6,re=null}function $d(e,t,n,i,r,a,o,u,m){e.cancelPendingCommit=null;do Fa();while(He!==0);if((de&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(a=t.lanes|t.childLanes,a|=Yo,Wh(e,n,a,o,u,m),e===we&&(re=we=null,oe=0),Ai=t,Tn=e,nn=n,es=a,ts=r,Fd=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ff(Vr,function(){return rm(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=z.T,z.T=null,r=q.p,q.p=2,o=de,de|=4;try{rf(e,t,n)}finally{de=o,q.p=r,z.T=i}}He=1,em(),tm(),nm()}}function em(){if(He===1){He=0;var e=Tn,t=Ai,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=z.T,z.T=null;var i=q.p;q.p=2;var r=de;de|=4;try{_d(t,e);var a=gs,o=Uu(e.containerInfo),u=a.focusedElem,m=a.selectionRange;if(o!==u&&u&&u.ownerDocument&&Lu(u.ownerDocument.documentElement,u)){if(m!==null&&Go(u)){var x=m.start,N=m.end;if(N===void 0&&(N=x),"selectionStart"in u)u.selectionStart=x,u.selectionEnd=Math.min(N,u.value.length);else{var D=u.ownerDocument||document,T=D&&D.defaultView||window;if(T.getSelection){var k=T.getSelection(),U=u.textContent.length,K=Math.min(m.start,U),be=m.end===void 0?K:Math.min(m.end,U);!k.extend&&K>be&&(o=be,be=K,K=o);var b=Hu(u,K),p=Hu(u,be);if(b&&p&&(k.rangeCount!==1||k.anchorNode!==b.node||k.anchorOffset!==b.offset||k.focusNode!==p.node||k.focusOffset!==p.offset)){var w=D.createRange();w.setStart(b.node,b.offset),k.removeAllRanges(),K>be?(k.addRange(w),k.extend(p.node,p.offset)):(w.setEnd(p.node,p.offset),k.addRange(w))}}}}for(D=[],k=u;k=k.parentNode;)k.nodeType===1&&D.push({element:k,left:k.scrollLeft,top:k.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<D.length;u++){var R=D[u];R.element.scrollLeft=R.left,R.element.scrollTop=R.top}}eo=!!fs,gs=fs=null}finally{de=r,q.p=i,z.T=n}}e.current=t,He=2}}function tm(){if(He===2){He=0;var e=Tn,t=Ai,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=z.T,z.T=null;var i=q.p;q.p=2;var r=de;de|=4;try{zd(e,t.alternate,t)}finally{de=r,q.p=i,z.T=n}}He=3}}function nm(){if(He===4||He===3){He=0,_h();var e=Tn,t=Ai,n=nn,i=Fd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?He=5:(He=0,Ai=Tn=null,im(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(xn=null),xo(n),t=t.stateNode,ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(Wi,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=z.T,r=q.p,q.p=2,z.T=null;try{for(var a=e.onRecoverableError,o=0;o<i.length;o++){var u=i[o];a(u.value,{componentStack:u.stack})}}finally{z.T=t,q.p=r}}(nn&3)!==0&&Fa(),qt(e),r=e.pendingLanes,(n&261930)!==0&&(r&42)!==0?e===ns?kr++:(kr=0,ns=e):kr=0,Cr(0)}}function im(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ar(t)))}function Fa(){return em(),tm(),nm(),rm()}function rm(){if(He!==5)return!1;var e=Tn,t=es;es=0;var n=xo(nn),i=z.T,r=q.p;try{q.p=32>n?32:n,z.T=null,n=ts,ts=null;var a=Tn,o=nn;if(He=0,Ai=Tn=null,nn=0,(de&6)!==0)throw Error(s(331));var u=de;if(de|=4,Ld(a.current),qd(a,a.current,o,n),de=u,Cr(0,!1),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(Wi,a)}catch{}return!0}finally{q.p=r,z.T=i,im(e,t)}}function am(e,t,n){t=wt(n,t),t=_l(e.stateNode,t,2),e=gn(e,t,2),e!==null&&(Xi(e,2),qt(e))}function pe(e,t,n){if(e.tag===3)am(e,e,n);else for(;t!==null;){if(t.tag===3){am(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(xn===null||!xn.has(i))){e=wt(n,e),n=od(2),i=gn(t,n,2),i!==null&&(ld(n,i,t,e),Xi(i,2),qt(i));break}}t=t.return}}function as(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new lf;var r=new Set;i.set(t,r)}else r=i.get(t),r===void 0&&(r=new Set,i.set(t,r));r.has(n)||(Il=!0,r.add(n),e=mf.bind(null,e,t,n),t.then(e,e))}function mf(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,we===e&&(oe&n)===n&&(Ee===4||Ee===3&&(oe&62914560)===oe&&300>st()-qa?(de&2)===0&&Ri(e,0):Jl|=n,zi===oe&&(zi=0)),qt(e)}function om(e,t){t===0&&(t=eu()),e=Un(e,t),e!==null&&(Xi(e,t),qt(e))}function hf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),om(e,n)}function pf(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(s(314))}i!==null&&i.delete(t),om(e,n)}function ff(e,t){return bo(e,t)}var Wa=null,Di=null,os=!1,Va=!1,ls=!1,Cn=0;function qt(e){e!==Di&&e.next===null&&(Di===null?Wa=Di=e:Di=Di.next=e),Va=!0,os||(os=!0,vf())}function Cr(e,t){if(!ls&&Va){ls=!0;do for(var n=!1,i=Wa;i!==null;){if(e!==0){var r=i.pendingLanes;if(r===0)var a=0;else{var o=i.suspendedLanes,u=i.pingedLanes;a=(1<<31-ct(42|e)+1)-1,a&=r&~(o&~u),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,cm(i,a))}else a=oe,a=Pr(i,i===we?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||Vi(i,a)||(n=!0,cm(i,a));i=i.next}while(n);ls=!1}}function gf(){lm()}function lm(){Va=os=!1;var e=0;Cn!==0&&Nf()&&(e=Cn);for(var t=st(),n=null,i=Wa;i!==null;){var r=i.next,a=sm(i,t);a===0?(i.next=null,n===null?Wa=r:n.next=r,r===null&&(Di=n)):(n=i,(e!==0||(a&3)!==0)&&(Va=!0)),i=r}He!==0&&He!==5||Cr(e),Cn!==0&&(Cn=0)}function sm(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-ct(a),u=1<<o,m=r[o];m===-1?((u&n)===0||(u&i)!==0)&&(r[o]=Fh(u,t)):m<=t&&(e.expiredLanes|=u),a&=~u}if(t=we,n=oe,n=Pr(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(he===2||he===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&yo(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Vi(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&yo(i),xo(n)){case 2:case 8:n=Js;break;case 32:n=Vr;break;case 268435456:n=$s;break;default:n=Vr}return i=um.bind(null,e),n=bo(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&yo(i),e.callbackPriority=2,e.callbackNode=null,2}function um(e,t){if(He!==0&&He!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Fa()&&e.callbackNode!==n)return null;var i=oe;return i=Pr(e,e===we?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Vd(e,i,t),sm(e,st()),e.callbackNode!=null&&e.callbackNode===n?um.bind(null,e):null)}function cm(e,t){if(Fa())return null;Vd(e,t,!0)}function vf(){zf(function(){(de&6)!==0?bo(Is,gf):lm()})}function ss(){if(Cn===0){var e=bi;e===0&&(e=Xr,Xr<<=1,(Xr&261888)===0&&(Xr=256)),Cn=e}return Cn}function dm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Jr(""+e)}function mm(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function bf(e,t,n,i,r){if(t==="submit"&&n&&n.stateNode===r){var a=dm((r[Je]||null).action),o=i.submitter;o&&(t=(t=o[Je]||null)?dm(t.formAction):o.getAttribute("formAction"),t!==null&&(a=t,o=null));var u=new na("action","action",null,i,r);e.push({event:u,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Cn!==0){var m=o?mm(r,o):new FormData(r);El(n,{pending:!0,data:m,method:r.method,action:a},null,m)}}else typeof a=="function"&&(u.preventDefault(),m=o?mm(r,o):new FormData(r),El(n,{pending:!0,data:m,method:r.method,action:a},a,m))},currentTarget:r}]})}}for(var us=0;us<Xo.length;us++){var cs=Xo[us],yf=cs.toLowerCase(),Sf=cs[0].toUpperCase()+cs.slice(1);zt(yf,"on"+Sf)}zt(Wu,"onAnimationEnd"),zt(Vu,"onAnimationIteration"),zt(Xu,"onAnimationStart"),zt("dblclick","onDoubleClick"),zt("focusin","onFocus"),zt("focusout","onBlur"),zt(jp,"onTransitionRun"),zt(qp,"onTransitionStart"),zt(Bp,"onTransitionCancel"),zt(Yu,"onTransitionEnd"),ri("onMouseEnter",["mouseout","mouseover"]),ri("onMouseLeave",["mouseout","mouseover"]),ri("onPointerEnter",["pointerout","pointerover"]),ri("onPointerLeave",["pointerout","pointerover"]),qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),qn("onBeforeInput",["compositionend","keypress","textInput","paste"]),qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Or="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wf=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Or));function hm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],r=i.event;i=i.listeners;e:{var a=void 0;if(t)for(var o=i.length-1;0<=o;o--){var u=i[o],m=u.instance,x=u.currentTarget;if(u=u.listener,m!==a&&r.isPropagationStopped())break e;a=u,r.currentTarget=x;try{a(r)}catch(N){aa(N)}r.currentTarget=null,a=m}else for(o=0;o<i.length;o++){if(u=i[o],m=u.instance,x=u.currentTarget,u=u.listener,m!==a&&r.isPropagationStopped())break e;a=u,r.currentTarget=x;try{a(r)}catch(N){aa(N)}r.currentTarget=null,a=m}}}}function ae(e,t){var n=t[To];n===void 0&&(n=t[To]=new Set);var i=e+"__bubble";n.has(i)||(pm(t,e,2,!1),n.add(i))}function ds(e,t,n){var i=0;t&&(i|=4),pm(n,e,i,t)}var Xa="_reactListening"+Math.random().toString(36).slice(2);function ms(e){if(!e[Xa]){e[Xa]=!0,lu.forEach(function(n){n!=="selectionchange"&&(wf.has(n)||ds(n,!1,e),ds(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xa]||(t[Xa]=!0,ds("selectionchange",!1,t))}}function pm(e,t,n,i){switch(Wm(t)){case 2:var r=Kf;break;case 8:r=Zf;break;default:r=Ns}n=r.bind(null,t,n,e),r=void 0,!Mo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function hs(e,t,n,i,r){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var u=i.stateNode.containerInfo;if(u===r)break;if(o===4)for(o=i.return;o!==null;){var m=o.tag;if((m===3||m===4)&&o.stateNode.containerInfo===r)return;o=o.return}for(;u!==null;){if(o=ti(u),o===null)return;if(m=o.tag,m===5||m===6||m===26||m===27){i=a=o;continue e}u=u.parentNode}}i=i.return}yu(function(){var x=a,N=Ao(n),D=[];e:{var T=Qu.get(e);if(T!==void 0){var k=na,U=e;switch(e){case"keypress":if(ea(n)===0)break e;case"keydown":case"keyup":k=hp;break;case"focusin":U="focus",k=qo;break;case"focusout":U="blur",k=qo;break;case"beforeblur":case"afterblur":k=qo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=xu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=tp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=gp;break;case Wu:case Vu:case Xu:k=rp;break;case Yu:k=bp;break;case"scroll":case"scrollend":k=$h;break;case"wheel":k=Sp;break;case"copy":case"cut":case"paste":k=op;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=ku;break;case"toggle":case"beforetoggle":k=xp}var K=(t&4)!==0,be=!K&&(e==="scroll"||e==="scrollend"),b=K?T!==null?T+"Capture":null:T;K=[];for(var p=x,w;p!==null;){var R=p;if(w=R.stateNode,R=R.tag,R!==5&&R!==26&&R!==27||w===null||b===null||(R=Pi(p,b),R!=null&&K.push(Nr(p,R,w))),be)break;p=p.return}0<K.length&&(T=new k(T,U,null,n,N),D.push({event:T,listeners:K}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",T&&n!==zo&&(U=n.relatedTarget||n.fromElement)&&(ti(U)||U[ei]))break e;if((k||T)&&(T=N.window===N?N:(T=N.ownerDocument)?T.defaultView||T.parentWindow:window,k?(U=n.relatedTarget||n.toElement,k=x,U=U?ti(U):null,U!==null&&(be=f(U),K=U.tag,U!==be||K!==5&&K!==27&&K!==6)&&(U=null)):(k=null,U=x),k!==U)){if(K=xu,R="onMouseLeave",b="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(K=ku,R="onPointerLeave",b="onPointerEnter",p="pointer"),be=k==null?T:Qi(k),w=U==null?T:Qi(U),T=new K(R,p+"leave",k,n,N),T.target=be,T.relatedTarget=w,R=null,ti(N)===x&&(K=new K(b,p+"enter",U,n,N),K.target=w,K.relatedTarget=be,R=K),be=R,k&&U)t:{for(K=xf,b=k,p=U,w=0,R=b;R;R=K(R))w++;R=0;for(var Q=p;Q;Q=K(Q))R++;for(;0<w-R;)b=K(b),w--;for(;0<R-w;)p=K(p),R--;for(;w--;){if(b===p||p!==null&&b===p.alternate){K=b;break t}b=K(b),p=K(p)}K=null}else K=null;k!==null&&fm(D,T,k,K,!1),U!==null&&be!==null&&fm(D,be,U,K,!0)}}e:{if(T=x?Qi(x):window,k=T.nodeName&&T.nodeName.toLowerCase(),k==="select"||k==="input"&&T.type==="file")var ue=Mu;else if(Au(T))if(Du)ue=Mp;else{ue=Ap;var X=zp}else k=T.nodeName,!k||k.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?x&&Eo(x.elementType)&&(ue=Mu):ue=Rp;if(ue&&(ue=ue(e,x))){Ru(D,ue,n,N);break e}X&&X(e,T,x),e==="focusout"&&x&&T.type==="number"&&x.memoizedProps.value!=null&&No(T,"number",T.value)}switch(X=x?Qi(x):window,e){case"focusin":(Au(X)||X.contentEditable==="true")&&(ci=X,Fo=x,nr=null);break;case"focusout":nr=Fo=ci=null;break;case"mousedown":Wo=!0;break;case"contextmenu":case"mouseup":case"dragend":Wo=!1,Gu(D,n,N);break;case"selectionchange":if(_p)break;case"keydown":case"keyup":Gu(D,n,N)}var ne;if(Ho)e:{switch(e){case"compositionstart":var le="onCompositionStart";break e;case"compositionend":le="onCompositionEnd";break e;case"compositionupdate":le="onCompositionUpdate";break e}le=void 0}else ui?Eu(e,n)&&(le="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(le="onCompositionStart");le&&(Cu&&n.locale!=="ko"&&(ui||le!=="onCompositionStart"?le==="onCompositionEnd"&&ui&&(ne=Su()):(un=N,Do="value"in un?un.value:un.textContent,ui=!0)),X=Ya(x,le),0<X.length&&(le=new Tu(le,e,null,n,N),D.push({event:le,listeners:X}),ne?le.data=ne:(ne=zu(n),ne!==null&&(le.data=ne)))),(ne=kp?Cp(e,n):Op(e,n))&&(le=Ya(x,"onBeforeInput"),0<le.length&&(X=new Tu("onBeforeInput","beforeinput",null,n,N),D.push({event:X,listeners:le}),X.data=ne)),bf(D,e,x,n,N)}hm(D,t)})}function Nr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ya(e,t){for(var n=t+"Capture",i=[];e!==null;){var r=e,a=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||a===null||(r=Pi(e,n),r!=null&&i.unshift(Nr(e,r,a)),r=Pi(e,t),r!=null&&i.push(Nr(e,r,a))),e.tag===3)return i;e=e.return}return[]}function xf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function fm(e,t,n,i,r){for(var a=t._reactName,o=[];n!==null&&n!==i;){var u=n,m=u.alternate,x=u.stateNode;if(u=u.tag,m!==null&&m===i)break;u!==5&&u!==26&&u!==27||x===null||(m=x,r?(x=Pi(n,a),x!=null&&o.unshift(Nr(n,x,m))):r||(x=Pi(n,a),x!=null&&o.push(Nr(n,x,m)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Tf=/\r\n?/g,kf=/\u0000|\uFFFD/g;function gm(e){return(typeof e=="string"?e:""+e).replace(Tf,`
`).replace(kf,"")}function vm(e,t){return t=gm(t),gm(e)===t}function ve(e,t,n,i,r,a){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||oi(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&oi(e,""+i);break;case"className":Zr(e,"class",i);break;case"tabIndex":Zr(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Zr(e,n,i);break;case"style":vu(e,i,a);break;case"data":if(t!=="object"){Zr(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Jr(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&ve(e,t,"name",r.name,r,null),ve(e,t,"formEncType",r.formEncType,r,null),ve(e,t,"formMethod",r.formMethod,r,null),ve(e,t,"formTarget",r.formTarget,r,null)):(ve(e,t,"encType",r.encType,r,null),ve(e,t,"method",r.method,r,null),ve(e,t,"target",r.target,r,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Jr(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Gt);break;case"onScroll":i!=null&&ae("scroll",e);break;case"onScrollEnd":i!=null&&ae("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(s(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Jr(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":ae("beforetoggle",e),ae("toggle",e),Kr(e,"popover",i);break;case"xlinkActuate":Ut(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Ut(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Ut(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Ut(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Ut(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Ut(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Kr(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Ih.get(n)||n,Kr(e,n,i))}}function ps(e,t,n,i,r,a){switch(n){case"style":vu(e,i,a);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(s(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof i=="string"?oi(e,i):(typeof i=="number"||typeof i=="bigint")&&oi(e,""+i);break;case"onScroll":i!=null&&ae("scroll",e);break;case"onScrollEnd":i!=null&&ae("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Gt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!su.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),a=e[Je]||null,a=a!=null?a[n]:null,typeof a=="function"&&e.removeEventListener(t,a,r),typeof i=="function")){typeof a!="function"&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,r);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Kr(e,n,i)}}}function Ye(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ae("error",e),ae("load",e);var i=!1,r=!1,a;for(a in n)if(n.hasOwnProperty(a)){var o=n[a];if(o!=null)switch(a){case"src":i=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:ve(e,t,a,o,n,null)}}r&&ve(e,t,"srcSet",n.srcSet,n,null),i&&ve(e,t,"src",n.src,n,null);return;case"input":ae("invalid",e);var u=a=o=r=null,m=null,x=null;for(i in n)if(n.hasOwnProperty(i)){var N=n[i];if(N!=null)switch(i){case"name":r=N;break;case"type":o=N;break;case"checked":m=N;break;case"defaultChecked":x=N;break;case"value":a=N;break;case"defaultValue":u=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(s(137,t));break;default:ve(e,t,i,N,n,null)}}hu(e,a,u,m,x,o,r,!1);return;case"select":ae("invalid",e),i=o=a=null;for(r in n)if(n.hasOwnProperty(r)&&(u=n[r],u!=null))switch(r){case"value":a=u;break;case"defaultValue":o=u;break;case"multiple":i=u;default:ve(e,t,r,u,n,null)}t=a,n=o,e.multiple=!!i,t!=null?ai(e,!!i,t,!1):n!=null&&ai(e,!!i,n,!0);return;case"textarea":ae("invalid",e),a=r=i=null;for(o in n)if(n.hasOwnProperty(o)&&(u=n[o],u!=null))switch(o){case"value":i=u;break;case"defaultValue":r=u;break;case"children":a=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:ve(e,t,o,u,n,null)}fu(e,i,r,a);return;case"option":for(m in n)if(n.hasOwnProperty(m)&&(i=n[m],i!=null))switch(m){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:ve(e,t,m,i,n,null)}return;case"dialog":ae("beforetoggle",e),ae("toggle",e),ae("cancel",e),ae("close",e);break;case"iframe":case"object":ae("load",e);break;case"video":case"audio":for(i=0;i<Or.length;i++)ae(Or[i],e);break;case"image":ae("error",e),ae("load",e);break;case"details":ae("toggle",e);break;case"embed":case"source":case"link":ae("error",e),ae("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(x in n)if(n.hasOwnProperty(x)&&(i=n[x],i!=null))switch(x){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:ve(e,t,x,i,n,null)}return;default:if(Eo(t)){for(N in n)n.hasOwnProperty(N)&&(i=n[N],i!==void 0&&ps(e,t,N,i,n,void 0));return}}for(u in n)n.hasOwnProperty(u)&&(i=n[u],i!=null&&ve(e,t,u,i,n,null))}function Cf(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,a=null,o=null,u=null,m=null,x=null,N=null;for(k in n){var D=n[k];if(n.hasOwnProperty(k)&&D!=null)switch(k){case"checked":break;case"value":break;case"defaultValue":m=D;default:i.hasOwnProperty(k)||ve(e,t,k,null,i,D)}}for(var T in i){var k=i[T];if(D=n[T],i.hasOwnProperty(T)&&(k!=null||D!=null))switch(T){case"type":a=k;break;case"name":r=k;break;case"checked":x=k;break;case"defaultChecked":N=k;break;case"value":o=k;break;case"defaultValue":u=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(s(137,t));break;default:k!==D&&ve(e,t,T,k,i,D)}}Oo(e,o,u,m,x,N,a,r);return;case"select":k=o=u=T=null;for(a in n)if(m=n[a],n.hasOwnProperty(a)&&m!=null)switch(a){case"value":break;case"multiple":k=m;default:i.hasOwnProperty(a)||ve(e,t,a,null,i,m)}for(r in i)if(a=i[r],m=n[r],i.hasOwnProperty(r)&&(a!=null||m!=null))switch(r){case"value":T=a;break;case"defaultValue":u=a;break;case"multiple":o=a;default:a!==m&&ve(e,t,r,a,i,m)}t=u,n=o,i=k,T!=null?ai(e,!!n,T,!1):!!i!=!!n&&(t!=null?ai(e,!!n,t,!0):ai(e,!!n,n?[]:"",!1));return;case"textarea":k=T=null;for(u in n)if(r=n[u],n.hasOwnProperty(u)&&r!=null&&!i.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:ve(e,t,u,null,i,r)}for(o in i)if(r=i[o],a=n[o],i.hasOwnProperty(o)&&(r!=null||a!=null))switch(o){case"value":T=r;break;case"defaultValue":k=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(s(91));break;default:r!==a&&ve(e,t,o,r,i,a)}pu(e,T,k);return;case"option":for(var U in n)if(T=n[U],n.hasOwnProperty(U)&&T!=null&&!i.hasOwnProperty(U))switch(U){case"selected":e.selected=!1;break;default:ve(e,t,U,null,i,T)}for(m in i)if(T=i[m],k=n[m],i.hasOwnProperty(m)&&T!==k&&(T!=null||k!=null))switch(m){case"selected":e.selected=T&&typeof T!="function"&&typeof T!="symbol";break;default:ve(e,t,m,T,i,k)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var K in n)T=n[K],n.hasOwnProperty(K)&&T!=null&&!i.hasOwnProperty(K)&&ve(e,t,K,null,i,T);for(x in i)if(T=i[x],k=n[x],i.hasOwnProperty(x)&&T!==k&&(T!=null||k!=null))switch(x){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(137,t));break;default:ve(e,t,x,T,i,k)}return;default:if(Eo(t)){for(var be in n)T=n[be],n.hasOwnProperty(be)&&T!==void 0&&!i.hasOwnProperty(be)&&ps(e,t,be,void 0,i,T);for(N in i)T=i[N],k=n[N],!i.hasOwnProperty(N)||T===k||T===void 0&&k===void 0||ps(e,t,N,T,i,k);return}}for(var b in n)T=n[b],n.hasOwnProperty(b)&&T!=null&&!i.hasOwnProperty(b)&&ve(e,t,b,null,i,T);for(D in i)T=i[D],k=n[D],!i.hasOwnProperty(D)||T===k||T==null&&k==null||ve(e,t,D,T,i,k)}function bm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Of(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var r=n[i],a=r.transferSize,o=r.initiatorType,u=r.duration;if(a&&u&&bm(o)){for(o=0,u=r.responseEnd,i+=1;i<n.length;i++){var m=n[i],x=m.startTime;if(x>u)break;var N=m.transferSize,D=m.initiatorType;N&&bm(D)&&(m=m.responseEnd,o+=N*(m<u?1:(u-x)/(m-x)))}if(--i,t+=8*(a+o)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var fs=null,gs=null;function Qa(e){return e.nodeType===9?e:e.ownerDocument}function ym(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Sm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function vs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bs=null;function Nf(){var e=window.event;return e&&e.type==="popstate"?e===bs?!1:(bs=e,!0):(bs=null,!1)}var wm=typeof setTimeout=="function"?setTimeout:void 0,Ef=typeof clearTimeout=="function"?clearTimeout:void 0,xm=typeof Promise=="function"?Promise:void 0,zf=typeof queueMicrotask=="function"?queueMicrotask:typeof xm<"u"?function(e){return xm.resolve(null).then(e).catch(Af)}:wm;function Af(e){setTimeout(function(){throw e})}function On(e){return e==="head"}function Tm(e,t){var n=t,i=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(r),Bi(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Er(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Er(n);for(var a=n.firstChild;a;){var o=a.nextSibling,u=a.nodeName;a[Yi]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=o}}else n==="body"&&Er(e.ownerDocument.body);n=r}while(n);Bi(t)}function km(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function ys(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":ys(n),ko(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Rf(e,t,n,i){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Yi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=Ot(e.nextSibling),e===null)break}return null}function Mf(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ot(e.nextSibling),e===null))return null;return e}function Cm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ot(e.nextSibling),e===null))return null;return e}function Ss(e){return e.data==="$?"||e.data==="$~"}function ws(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Df(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var xs=null;function Om(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Ot(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Nm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Em(e,t,n){switch(t=Qa(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Er(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ko(e)}var Nt=new Map,zm=new Set;function Pa(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var rn=q.d;q.d={f:_f,r:jf,D:qf,C:Bf,L:Hf,m:Lf,X:Gf,S:Uf,M:Ff};function _f(){var e=rn.f(),t=La();return e||t}function jf(e){var t=ni(e);t!==null&&t.tag===5&&t.type==="form"?Yc(t):rn.r(e)}var _i=typeof document>"u"?null:document;function Am(e,t,n){var i=_i;if(i&&typeof t=="string"&&t){var r=yt(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),zm.has(r)||(zm.add(r),e={rel:e,crossOrigin:n,href:t},i.querySelector(r)===null&&(t=i.createElement("link"),Ye(t,"link",e),Ue(t),i.head.appendChild(t)))}}function qf(e){rn.D(e),Am("dns-prefetch",e,null)}function Bf(e,t){rn.C(e,t),Am("preconnect",e,t)}function Hf(e,t,n){rn.L(e,t,n);var i=_i;if(i&&e&&t){var r='link[rel="preload"][as="'+yt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+yt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+yt(n.imageSizes)+'"]')):r+='[href="'+yt(e)+'"]';var a=r;switch(t){case"style":a=ji(e);break;case"script":a=qi(e)}Nt.has(a)||(e=O({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Nt.set(a,e),i.querySelector(r)!==null||t==="style"&&i.querySelector(zr(a))||t==="script"&&i.querySelector(Ar(a))||(t=i.createElement("link"),Ye(t,"link",e),Ue(t),i.head.appendChild(t)))}}function Lf(e,t){rn.m(e,t);var n=_i;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+yt(i)+'"][href="'+yt(e)+'"]',a=r;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=qi(e)}if(!Nt.has(a)&&(e=O({rel:"modulepreload",href:e},t),Nt.set(a,e),n.querySelector(r)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ar(a)))return}i=n.createElement("link"),Ye(i,"link",e),Ue(i),n.head.appendChild(i)}}}function Uf(e,t,n){rn.S(e,t,n);var i=_i;if(i&&e){var r=ii(i).hoistableStyles,a=ji(e);t=t||"default";var o=r.get(a);if(!o){var u={loading:0,preload:null};if(o=i.querySelector(zr(a)))u.loading=5;else{e=O({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Nt.get(a))&&Ts(e,n);var m=o=i.createElement("link");Ue(m),Ye(m,"link",e),m._p=new Promise(function(x,N){m.onload=x,m.onerror=N}),m.addEventListener("load",function(){u.loading|=1}),m.addEventListener("error",function(){u.loading|=2}),u.loading|=4,Ka(o,t,i)}o={type:"stylesheet",instance:o,count:1,state:u},r.set(a,o)}}}function Gf(e,t){rn.X(e,t);var n=_i;if(n&&e){var i=ii(n).hoistableScripts,r=qi(e),a=i.get(r);a||(a=n.querySelector(Ar(r)),a||(e=O({src:e,async:!0},t),(t=Nt.get(r))&&ks(e,t),a=n.createElement("script"),Ue(a),Ye(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(r,a))}}function Ff(e,t){rn.M(e,t);var n=_i;if(n&&e){var i=ii(n).hoistableScripts,r=qi(e),a=i.get(r);a||(a=n.querySelector(Ar(r)),a||(e=O({src:e,async:!0,type:"module"},t),(t=Nt.get(r))&&ks(e,t),a=n.createElement("script"),Ue(a),Ye(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(r,a))}}function Rm(e,t,n,i){var r=(r=ie.current)?Pa(r):null;if(!r)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ji(n.href),n=ii(r).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ji(n.href);var a=ii(r).hoistableStyles,o=a.get(e);if(o||(r=r.ownerDocument||r,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,o),(a=r.querySelector(zr(e)))&&!a._p&&(o.instance=a,o.state.loading=5),Nt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Nt.set(e,n),a||Wf(r,e,n,o.state))),t&&i===null)throw Error(s(528,""));return o}if(t&&i!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=qi(n),n=ii(r).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function ji(e){return'href="'+yt(e)+'"'}function zr(e){return'link[rel="stylesheet"]['+e+"]"}function Mm(e){return O({},e,{"data-precedence":e.precedence,precedence:null})}function Wf(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),Ye(t,"link",n),Ue(t),e.head.appendChild(t))}function qi(e){return'[src="'+yt(e)+'"]'}function Ar(e){return"script[async]"+e}function Dm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+yt(n.href)+'"]');if(i)return t.instance=i,Ue(i),i;var r=O({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Ue(i),Ye(i,"style",r),Ka(i,n.precedence,e),t.instance=i;case"stylesheet":r=ji(n.href);var a=e.querySelector(zr(r));if(a)return t.state.loading|=4,t.instance=a,Ue(a),a;i=Mm(n),(r=Nt.get(r))&&Ts(i,r),a=(e.ownerDocument||e).createElement("link"),Ue(a);var o=a;return o._p=new Promise(function(u,m){o.onload=u,o.onerror=m}),Ye(a,"link",i),t.state.loading|=4,Ka(a,n.precedence,e),t.instance=a;case"script":return a=qi(n.src),(r=e.querySelector(Ar(a)))?(t.instance=r,Ue(r),r):(i=n,(r=Nt.get(a))&&(i=O({},n),ks(i,r)),e=e.ownerDocument||e,r=e.createElement("script"),Ue(r),Ye(r,"link",i),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Ka(i,n.precedence,e));return t.instance}function Ka(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=i.length?i[i.length-1]:null,a=r,o=0;o<i.length;o++){var u=i[o];if(u.dataset.precedence===t)a=u;else if(a!==r)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Ts(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ks(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Za=null;function _m(e,t,n){if(Za===null){var i=new Map,r=Za=new Map;r.set(n,i)}else r=Za,i=r.get(n),i||(i=new Map,r.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var a=n[r];if(!(a[Yi]||a[Fe]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var o=a.getAttribute(t)||"";o=e+o;var u=i.get(o);u?u.push(a):i.set(o,[a])}}return i}function jm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Vf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function qm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Xf(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=ji(i.href),a=t.querySelector(zr(r));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ia.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Ue(a);return}a=t.ownerDocument||t,i=Mm(i),(r=Nt.get(r))&&Ts(i,r),a=a.createElement("link"),Ue(a);var o=a;o._p=new Promise(function(u,m){o.onload=u,o.onerror=m}),Ye(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Ia.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Cs=0;function Yf(e,t){return e.stylesheets&&e.count===0&&$a(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&$a(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&Cs===0&&(Cs=62500*Of());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&$a(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>Cs?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(r)}}:null}function Ia(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$a(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ja=null;function $a(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ja=new Map,t.forEach(Qf,e),Ja=null,Ia.call(e))}function Qf(e,t){if(!(t.state.loading&4)){var n=Ja.get(e);if(n)var i=n.get(null);else{n=new Map,Ja.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<r.length;a++){var o=r[a];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(n.set(o.dataset.precedence,o),i=o)}i&&n.set(null,i)}r=t.instance,o=r.getAttribute("data-precedence"),a=n.get(o)||i,a===i&&n.set(null,r),n.set(o,r),this.count++,i=Ia.bind(this),r.addEventListener("load",i),r.addEventListener("error",i),a?a.parentNode.insertBefore(r,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var Rr={$$typeof:P,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function Pf(e,t,n,i,r,a,o,u,m){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=So(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=So(0),this.hiddenUpdates=So(null),this.identifierPrefix=i,this.onUncaughtError=r,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function Bm(e,t,n,i,r,a,o,u,m,x,N,D){return e=new Pf(e,t,n,o,m,x,N,D,u),t=1,a===!0&&(t|=24),a=mt(3,null,null,t),e.current=a,a.stateNode=e,t=rl(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},sl(a),e}function Hm(e){return e?(e=hi,e):hi}function Lm(e,t,n,i,r,a){r=Hm(r),i.context===null?i.context=r:i.pendingContext=r,i=fn(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=gn(e,i,t),n!==null&&(rt(n,e,t),ur(n,e,t))}function Um(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Os(e,t){Um(e,t),(e=e.alternate)&&Um(e,t)}function Gm(e){if(e.tag===13||e.tag===31){var t=Un(e,67108864);t!==null&&rt(t,e,67108864),Os(e,67108864)}}function Fm(e){if(e.tag===13||e.tag===31){var t=vt();t=wo(t);var n=Un(e,t);n!==null&&rt(n,e,t),Os(e,t)}}var eo=!0;function Kf(e,t,n,i){var r=z.T;z.T=null;var a=q.p;try{q.p=2,Ns(e,t,n,i)}finally{q.p=a,z.T=r}}function Zf(e,t,n,i){var r=z.T;z.T=null;var a=q.p;try{q.p=8,Ns(e,t,n,i)}finally{q.p=a,z.T=r}}function Ns(e,t,n,i){if(eo){var r=Es(i);if(r===null)hs(e,t,i,to,n),Vm(e,i);else if(Jf(r,e,t,n,i))i.stopPropagation();else if(Vm(e,i),t&4&&-1<If.indexOf(e)){for(;r!==null;){var a=ni(r);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=jn(a.pendingLanes);if(o!==0){var u=a;for(u.pendingLanes|=2,u.entangledLanes|=2;o;){var m=1<<31-ct(o);u.entanglements[1]|=m,o&=~m}qt(a),(de&6)===0&&(Ba=st()+500,Cr(0))}}break;case 31:case 13:u=Un(a,2),u!==null&&rt(u,a,2),La(),Os(a,2)}if(a=Es(i),a===null&&hs(e,t,i,to,n),a===r)break;r=a}r!==null&&i.stopPropagation()}else hs(e,t,i,null,n)}}function Es(e){return e=Ao(e),zs(e)}var to=null;function zs(e){if(to=null,e=ti(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=S(t),e!==null)return e;e=null}else if(n===31){if(e=C(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return to=e,null}function Wm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(jh()){case Is:return 2;case Js:return 8;case Vr:case qh:return 32;case $s:return 268435456;default:return 32}default:return 32}}var As=!1,Nn=null,En=null,zn=null,Mr=new Map,Dr=new Map,An=[],If="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vm(e,t){switch(e){case"focusin":case"focusout":Nn=null;break;case"dragenter":case"dragleave":En=null;break;case"mouseover":case"mouseout":zn=null;break;case"pointerover":case"pointerout":Mr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dr.delete(t.pointerId)}}function _r(e,t,n,i,r,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[r]},t!==null&&(t=ni(t),t!==null&&Gm(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function Jf(e,t,n,i,r){switch(t){case"focusin":return Nn=_r(Nn,e,t,n,i,r),!0;case"dragenter":return En=_r(En,e,t,n,i,r),!0;case"mouseover":return zn=_r(zn,e,t,n,i,r),!0;case"pointerover":var a=r.pointerId;return Mr.set(a,_r(Mr.get(a)||null,e,t,n,i,r)),!0;case"gotpointercapture":return a=r.pointerId,Dr.set(a,_r(Dr.get(a)||null,e,t,n,i,r)),!0}return!1}function Xm(e){var t=ti(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=S(n),t!==null){e.blockedOn=t,au(e.priority,function(){Fm(n)});return}}else if(t===31){if(t=C(n),t!==null){e.blockedOn=t,au(e.priority,function(){Fm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function no(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Es(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);zo=i,n.target.dispatchEvent(i),zo=null}else return t=ni(n),t!==null&&Gm(t),e.blockedOn=n,!1;t.shift()}return!0}function Ym(e,t,n){no(e)&&n.delete(t)}function $f(){As=!1,Nn!==null&&no(Nn)&&(Nn=null),En!==null&&no(En)&&(En=null),zn!==null&&no(zn)&&(zn=null),Mr.forEach(Ym),Dr.forEach(Ym)}function io(e,t){e.blockedOn===t&&(e.blockedOn=null,As||(As=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,$f)))}var ro=null;function Qm(e){ro!==e&&(ro=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){ro===e&&(ro=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],r=e[t+2];if(typeof i!="function"){if(zs(i||n)===null)continue;break}var a=ni(n);a!==null&&(e.splice(t,3),t-=3,El(a,{pending:!0,data:r,method:n.method,action:i},i,r))}}))}function Bi(e){function t(m){return io(m,e)}Nn!==null&&io(Nn,e),En!==null&&io(En,e),zn!==null&&io(zn,e),Mr.forEach(t),Dr.forEach(t);for(var n=0;n<An.length;n++){var i=An[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<An.length&&(n=An[0],n.blockedOn===null);)Xm(n),n.blockedOn===null&&An.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var r=n[i],a=n[i+1],o=r[Je]||null;if(typeof a=="function")o||Qm(n);else if(o){var u=null;if(a&&a.hasAttribute("formAction")){if(r=a,o=a[Je]||null)u=o.formAction;else if(zs(r)!==null)continue}else u=o.action;typeof u=="function"?n[i+1]=u:(n.splice(i,3),i-=3),Qm(n)}}}function Pm(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(o){return r=o})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function Rs(e){this._internalRoot=e}ao.prototype.render=Rs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,i=vt();Lm(n,i,e,t,null,null)},ao.prototype.unmount=Rs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Lm(e.current,2,null,e,null,null),La(),t[ei]=null}};function ao(e){this._internalRoot=e}ao.prototype.unstable_scheduleHydration=function(e){if(e){var t=ru();e={blockedOn:null,target:e,priority:t};for(var n=0;n<An.length&&t!==0&&t<An[n].priority;n++);An.splice(n,0,e),n===0&&Xm(e)}};var Km=d.version;if(Km!=="19.2.0")throw Error(s(527,Km,"19.2.0"));q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=v(t),e=e!==null?M(e):null,e=e===null?null:e.stateNode,e};var eg={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oo.isDisabled&&oo.supportsFiber)try{Wi=oo.inject(eg),ut=oo}catch{}}return qr.createRoot=function(e,t){if(!h(e))throw Error(s(299));var n=!1,i="",r=nd,a=id,o=rd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Bm(e,1,!1,null,null,n,i,null,r,a,o,Pm),e[ei]=t.current,ms(e),new Rs(t)},qr.hydrateRoot=function(e,t,n){if(!h(e))throw Error(s(299));var i=!1,r="",a=nd,o=id,u=rd,m=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(u=n.onRecoverableError),n.formState!==void 0&&(m=n.formState)),t=Bm(e,1,!0,t,n??null,i,r,m,a,o,u,Pm),t.context=Hm(null),n=t.current,i=vt(),i=wo(i),r=fn(i),r.callback=null,gn(n,r,i),n=i,t.current.lanes=n,Xi(t,n),qt(t),e[ei]=t.current,ms(e),new ao(t)},qr.version="19.2.0",qr}var ah;function cg(){if(ah)return _s.exports;ah=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(d){console.error(d)}}return l(),_s.exports=ug(),_s.exports}var dg=cg();var oh="popstate";function mg(l={}){function d(s,h){let{pathname:f,search:S,hash:C}=s.location;return Us("",{pathname:f,search:S,hash:C},h.state&&h.state.usr||null,h.state&&h.state.key||"default")}function c(s,h){return typeof h=="string"?h:Hr(h)}return pg(d,c,null,l)}function Oe(l,d){if(l===!1||l===null||typeof l>"u")throw new Error(d)}function Mt(l,d){if(!l){typeof console<"u"&&console.warn(d);try{throw new Error(d)}catch{}}}function hg(){return Math.random().toString(36).substring(2,10)}function lh(l,d){return{usr:l.state,key:l.key,idx:d}}function Us(l,d,c=null,s){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof d=="string"?Ui(d):d,state:c,key:d&&d.key||s||hg()}}function Hr({pathname:l="/",search:d="",hash:c=""}){return d&&d!=="?"&&(l+=d.charAt(0)==="?"?d:"?"+d),c&&c!=="#"&&(l+=c.charAt(0)==="#"?c:"#"+c),l}function Ui(l){let d={};if(l){let c=l.indexOf("#");c>=0&&(d.hash=l.substring(c),l=l.substring(0,c));let s=l.indexOf("?");s>=0&&(d.search=l.substring(s),l=l.substring(0,s)),l&&(d.pathname=l)}return d}function pg(l,d,c,s={}){let{window:h=document.defaultView,v5Compat:f=!1}=s,S=h.history,C="POP",y=null,v=M();v==null&&(v=0,S.replaceState({...S.state,idx:v},""));function M(){return(S.state||{idx:null}).idx}function O(){C="POP";let L=M(),G=L==null?null:L-v;v=L,y&&y({action:C,location:W.location,delta:G})}function j(L,G){C="PUSH";let Y=Us(W.location,L,G);v=M()+1;let P=lh(Y,v),ye=W.createHref(Y);try{S.pushState(P,"",ye)}catch(ke){if(ke instanceof DOMException&&ke.name==="DataCloneError")throw ke;h.location.assign(ye)}f&&y&&y({action:C,location:W.location,delta:1})}function H(L,G){C="REPLACE";let Y=Us(W.location,L,G);v=M();let P=lh(Y,v),ye=W.createHref(Y);S.replaceState(P,"",ye),f&&y&&y({action:C,location:W.location,delta:0})}function F(L){return fg(L)}let W={get action(){return C},get location(){return l(h,S)},listen(L){if(y)throw new Error("A history only accepts one active listener");return h.addEventListener(oh,O),y=L,()=>{h.removeEventListener(oh,O),y=null}},createHref(L){return d(h,L)},createURL:F,encodeLocation(L){let G=F(L);return{pathname:G.pathname,search:G.search,hash:G.hash}},push:j,replace:H,go(L){return S.go(L)}};return W}function fg(l,d=!1){let c="http://localhost";typeof window<"u"&&(c=window.location.origin!=="null"?window.location.origin:window.location.href),Oe(c,"No window.location.(origin|href) available to create URL");let s=typeof l=="string"?l:Hr(l);return s=s.replace(/ $/,"%20"),!d&&s.startsWith("//")&&(s=c+s),new URL(s,c)}function hh(l,d,c="/"){return gg(l,d,c,!1)}function gg(l,d,c,s){let h=typeof d=="string"?Ui(d):d,f=on(h.pathname||"/",c);if(f==null)return null;let S=ph(l);vg(S);let C=null;for(let y=0;C==null&&y<S.length;++y){let v=Eg(f);C=Og(S[y],v,s)}return C}function ph(l,d=[],c=[],s="",h=!1){let f=(S,C,y=h,v)=>{let M={relativePath:v===void 0?S.path||"":v,caseSensitive:S.caseSensitive===!0,childrenIndex:C,route:S};if(M.relativePath.startsWith("/")){if(!M.relativePath.startsWith(s)&&y)return;Oe(M.relativePath.startsWith(s),`Absolute route path "${M.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),M.relativePath=M.relativePath.slice(s.length)}let O=an([s,M.relativePath]),j=c.concat(M);S.children&&S.children.length>0&&(Oe(S.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${O}".`),ph(S.children,d,j,O,y)),!(S.path==null&&!S.index)&&d.push({path:O,score:kg(O,S.index),routesMeta:j})};return l.forEach((S,C)=>{if(S.path===""||!S.path?.includes("?"))f(S,C);else for(let y of fh(S.path))f(S,C,!0,y)}),d}function fh(l){let d=l.split("/");if(d.length===0)return[];let[c,...s]=d,h=c.endsWith("?"),f=c.replace(/\?$/,"");if(s.length===0)return h?[f,""]:[f];let S=fh(s.join("/")),C=[];return C.push(...S.map(y=>y===""?f:[f,y].join("/"))),h&&C.push(...S),C.map(y=>l.startsWith("/")&&y===""?"/":y)}function vg(l){l.sort((d,c)=>d.score!==c.score?c.score-d.score:Cg(d.routesMeta.map(s=>s.childrenIndex),c.routesMeta.map(s=>s.childrenIndex)))}var bg=/^:[\w-]+$/,yg=3,Sg=2,wg=1,xg=10,Tg=-2,sh=l=>l==="*";function kg(l,d){let c=l.split("/"),s=c.length;return c.some(sh)&&(s+=Tg),d&&(s+=Sg),c.filter(h=>!sh(h)).reduce((h,f)=>h+(bg.test(f)?yg:f===""?wg:xg),s)}function Cg(l,d){return l.length===d.length&&l.slice(0,-1).every((s,h)=>s===d[h])?l[l.length-1]-d[d.length-1]:0}function Og(l,d,c=!1){let{routesMeta:s}=l,h={},f="/",S=[];for(let C=0;C<s.length;++C){let y=s[C],v=C===s.length-1,M=f==="/"?d:d.slice(f.length)||"/",O=co({path:y.relativePath,caseSensitive:y.caseSensitive,end:v},M),j=y.route;if(!O&&v&&c&&!s[s.length-1].route.index&&(O=co({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},M)),!O)return null;Object.assign(h,O.params),S.push({params:h,pathname:an([f,O.pathname]),pathnameBase:Dg(an([f,O.pathnameBase])),route:j}),O.pathnameBase!=="/"&&(f=an([f,O.pathnameBase]))}return S}function co(l,d){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[c,s]=Ng(l.path,l.caseSensitive,l.end),h=d.match(c);if(!h)return null;let f=h[0],S=f.replace(/(.)\/+$/,"$1"),C=h.slice(1);return{params:s.reduce((v,{paramName:M,isOptional:O},j)=>{if(M==="*"){let F=C[j]||"";S=f.slice(0,f.length-F.length).replace(/(.)\/+$/,"$1")}const H=C[j];return O&&!H?v[M]=void 0:v[M]=(H||"").replace(/%2F/g,"/"),v},{}),pathname:f,pathnameBase:S,pattern:l}}function Ng(l,d=!1,c=!0){Mt(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let s=[],h="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(S,C,y)=>(s.push({paramName:C,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return l.endsWith("*")?(s.push({paramName:"*"}),h+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?h+="\\/*$":l!==""&&l!=="/"&&(h+="(?:(?=\\/|$))"),[new RegExp(h,d?void 0:"i"),s]}function Eg(l){try{return l.split("/").map(d=>decodeURIComponent(d).replace(/\//g,"%2F")).join("/")}catch(d){return Mt(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${d}).`),l}}function on(l,d){if(d==="/")return l;if(!l.toLowerCase().startsWith(d.toLowerCase()))return null;let c=d.endsWith("/")?d.length-1:d.length,s=l.charAt(c);return s&&s!=="/"?null:l.slice(c)||"/"}var zg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ag=l=>zg.test(l);function Rg(l,d="/"){let{pathname:c,search:s="",hash:h=""}=typeof l=="string"?Ui(l):l,f;if(c)if(Ag(c))f=c;else{if(c.includes("//")){let S=c;c=c.replace(/\/\/+/g,"/"),Mt(!1,`Pathnames cannot have embedded double slashes - normalizing ${S} -> ${c}`)}c.startsWith("/")?f=uh(c.substring(1),"/"):f=uh(c,d)}else f=d;return{pathname:f,search:_g(s),hash:jg(h)}}function uh(l,d){let c=d.replace(/\/+$/,"").split("/");return l.split("/").forEach(h=>{h===".."?c.length>1&&c.pop():h!=="."&&c.push(h)}),c.length>1?c.join("/"):"/"}function Hs(l,d,c,s){return`Cannot include a '${l}' character in a manually specified \`to.${d}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Mg(l){return l.filter((d,c)=>c===0||d.route.path&&d.route.path.length>0)}function gh(l){let d=Mg(l);return d.map((c,s)=>s===d.length-1?c.pathname:c.pathnameBase)}function vh(l,d,c,s=!1){let h;typeof l=="string"?h=Ui(l):(h={...l},Oe(!h.pathname||!h.pathname.includes("?"),Hs("?","pathname","search",h)),Oe(!h.pathname||!h.pathname.includes("#"),Hs("#","pathname","hash",h)),Oe(!h.search||!h.search.includes("#"),Hs("#","search","hash",h)));let f=l===""||h.pathname==="",S=f?"/":h.pathname,C;if(S==null)C=c;else{let O=d.length-1;if(!s&&S.startsWith("..")){let j=S.split("/");for(;j[0]==="..";)j.shift(),O-=1;h.pathname=j.join("/")}C=O>=0?d[O]:"/"}let y=Rg(h,C),v=S&&S!=="/"&&S.endsWith("/"),M=(f||S===".")&&c.endsWith("/");return!y.pathname.endsWith("/")&&(v||M)&&(y.pathname+="/"),y}var an=l=>l.join("/").replace(/\/\/+/g,"/"),Dg=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),_g=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,jg=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l;function qg(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var bh=["POST","PUT","PATCH","DELETE"];new Set(bh);var Bg=["GET",...bh];new Set(Bg);var Gi=E.createContext(null);Gi.displayName="DataRouter";var mo=E.createContext(null);mo.displayName="DataRouterState";E.createContext(!1);var yh=E.createContext({isTransitioning:!1});yh.displayName="ViewTransition";var Hg=E.createContext(new Map);Hg.displayName="Fetchers";var Lg=E.createContext(null);Lg.displayName="Await";var Bt=E.createContext(null);Bt.displayName="Navigation";var Lr=E.createContext(null);Lr.displayName="Location";var Ht=E.createContext({outlet:null,matches:[],isDataRoute:!1});Ht.displayName="Route";var Vs=E.createContext(null);Vs.displayName="RouteError";function Ug(l,{relative:d}={}){Oe(Ur(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:s}=E.useContext(Bt),{hash:h,pathname:f,search:S}=Fr(l,{relative:d}),C=f;return c!=="/"&&(C=f==="/"?c:an([c,f])),s.createHref({pathname:C,search:S,hash:h})}function Ur(){return E.useContext(Lr)!=null}function Mn(){return Oe(Ur(),"useLocation() may be used only in the context of a <Router> component."),E.useContext(Lr).location}var Sh="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function wh(l){E.useContext(Bt).static||E.useLayoutEffect(l)}function Gr(){let{isDataRoute:l}=E.useContext(Ht);return l?ev():Gg()}function Gg(){Oe(Ur(),"useNavigate() may be used only in the context of a <Router> component.");let l=E.useContext(Gi),{basename:d,navigator:c}=E.useContext(Bt),{matches:s}=E.useContext(Ht),{pathname:h}=Mn(),f=JSON.stringify(gh(s)),S=E.useRef(!1);return wh(()=>{S.current=!0}),E.useCallback((y,v={})=>{if(Mt(S.current,Sh),!S.current)return;if(typeof y=="number"){c.go(y);return}let M=vh(y,JSON.parse(f),h,v.relative==="path");l==null&&d!=="/"&&(M.pathname=M.pathname==="/"?d:an([d,M.pathname])),(v.replace?c.replace:c.push)(M,v.state,v)},[d,c,f,h,l])}E.createContext(null);function Fg(){let{matches:l}=E.useContext(Ht),d=l[l.length-1];return d?d.params:{}}function Fr(l,{relative:d}={}){let{matches:c}=E.useContext(Ht),{pathname:s}=Mn(),h=JSON.stringify(gh(c));return E.useMemo(()=>vh(l,JSON.parse(h),s,d==="path"),[l,h,s,d])}function Wg(l,d){return xh(l,d)}function xh(l,d,c,s,h){Oe(Ur(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=E.useContext(Bt),{matches:S}=E.useContext(Ht),C=S[S.length-1],y=C?C.params:{},v=C?C.pathname:"/",M=C?C.pathnameBase:"/",O=C&&C.route;{let Y=O&&O.path||"";Th(v,!O||Y.endsWith("*")||Y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${Y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Y}"> to <Route path="${Y==="/"?"*":`${Y}/*`}">.`)}let j=Mn(),H;if(d){let Y=typeof d=="string"?Ui(d):d;Oe(M==="/"||Y.pathname?.startsWith(M),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${M}" but pathname "${Y.pathname}" was given in the \`location\` prop.`),H=Y}else H=j;let F=H.pathname||"/",W=F;if(M!=="/"){let Y=M.replace(/^\//,"").split("/");W="/"+F.replace(/^\//,"").split("/").slice(Y.length).join("/")}let L=hh(l,{pathname:W});Mt(O||L!=null,`No routes matched location "${H.pathname}${H.search}${H.hash}" `),Mt(L==null||L[L.length-1].route.element!==void 0||L[L.length-1].route.Component!==void 0||L[L.length-1].route.lazy!==void 0,`Matched leaf route at location "${H.pathname}${H.search}${H.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let G=Pg(L&&L.map(Y=>Object.assign({},Y,{params:Object.assign({},y,Y.params),pathname:an([M,f.encodeLocation?f.encodeLocation(Y.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:Y.pathname]),pathnameBase:Y.pathnameBase==="/"?M:an([M,f.encodeLocation?f.encodeLocation(Y.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:Y.pathnameBase])})),S,c,s,h);return d&&G?E.createElement(Lr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...H},navigationType:"POP"}},G):G}function Vg(){let l=$g(),d=qg(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),c=l instanceof Error?l.stack:null,s="rgba(200,200,200, 0.5)",h={padding:"0.5rem",backgroundColor:s},f={padding:"2px 4px",backgroundColor:s},S=null;return console.error("Error handled by React Router default ErrorBoundary:",l),S=E.createElement(E.Fragment,null,E.createElement("p",null,"💿 Hey developer 👋"),E.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",E.createElement("code",{style:f},"ErrorBoundary")," or"," ",E.createElement("code",{style:f},"errorElement")," prop on your route.")),E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},d),c?E.createElement("pre",{style:h},c):null,S)}var Xg=E.createElement(Vg,null),Yg=class extends E.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,d){return d.location!==l.location||d.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:d.error,location:d.location,revalidation:l.revalidation||d.revalidation}}componentDidCatch(l,d){this.props.onError?this.props.onError(l,d):console.error("React Router caught the following error during render",l)}render(){return this.state.error!==void 0?E.createElement(Ht.Provider,{value:this.props.routeContext},E.createElement(Vs.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Qg({routeContext:l,match:d,children:c}){let s=E.useContext(Gi);return s&&s.static&&s.staticContext&&(d.route.errorElement||d.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=d.route.id),E.createElement(Ht.Provider,{value:l},c)}function Pg(l,d=[],c=null,s=null,h=null){if(l==null){if(!c)return null;if(c.errors)l=c.matches;else if(d.length===0&&!c.initialized&&c.matches.length>0)l=c.matches;else return null}let f=l,S=c?.errors;if(S!=null){let M=f.findIndex(O=>O.route.id&&S?.[O.route.id]!==void 0);Oe(M>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(S).join(",")}`),f=f.slice(0,Math.min(f.length,M+1))}let C=!1,y=-1;if(c)for(let M=0;M<f.length;M++){let O=f[M];if((O.route.HydrateFallback||O.route.hydrateFallbackElement)&&(y=M),O.route.id){let{loaderData:j,errors:H}=c,F=O.route.loader&&!j.hasOwnProperty(O.route.id)&&(!H||H[O.route.id]===void 0);if(O.route.lazy||F){C=!0,y>=0?f=f.slice(0,y+1):f=[f[0]];break}}}let v=c&&s?(M,O)=>{s(M,{location:c.location,params:c.matches?.[0]?.params??{},errorInfo:O})}:void 0;return f.reduceRight((M,O,j)=>{let H,F=!1,W=null,L=null;c&&(H=S&&O.route.id?S[O.route.id]:void 0,W=O.route.errorElement||Xg,C&&(y<0&&j===0?(Th("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),F=!0,L=null):y===j&&(F=!0,L=O.route.hydrateFallbackElement||null)));let G=d.concat(f.slice(0,j+1)),Y=()=>{let P;return H?P=W:F?P=L:O.route.Component?P=E.createElement(O.route.Component,null):O.route.element?P=O.route.element:P=M,E.createElement(Qg,{match:O,routeContext:{outlet:M,matches:G,isDataRoute:c!=null},children:P})};return c&&(O.route.ErrorBoundary||O.route.errorElement||j===0)?E.createElement(Yg,{location:c.location,revalidation:c.revalidation,component:W,error:H,children:Y(),routeContext:{outlet:null,matches:G,isDataRoute:!0},onError:v}):Y()},null)}function Xs(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Kg(l){let d=E.useContext(Gi);return Oe(d,Xs(l)),d}function Zg(l){let d=E.useContext(mo);return Oe(d,Xs(l)),d}function Ig(l){let d=E.useContext(Ht);return Oe(d,Xs(l)),d}function Ys(l){let d=Ig(l),c=d.matches[d.matches.length-1];return Oe(c.route.id,`${l} can only be used on routes that contain a unique "id"`),c.route.id}function Jg(){return Ys("useRouteId")}function $g(){let l=E.useContext(Vs),d=Zg("useRouteError"),c=Ys("useRouteError");return l!==void 0?l:d.errors?.[c]}function ev(){let{router:l}=Kg("useNavigate"),d=Ys("useNavigate"),c=E.useRef(!1);return wh(()=>{c.current=!0}),E.useCallback(async(h,f={})=>{Mt(c.current,Sh),c.current&&(typeof h=="number"?l.navigate(h):await l.navigate(h,{fromRouteId:d,...f}))},[l,d])}var ch={};function Th(l,d,c){!d&&!ch[l]&&(ch[l]=!0,Mt(!1,c))}E.memo(tv);function tv({routes:l,future:d,state:c,unstable_onError:s}){return xh(l,void 0,c,s,d)}function Gs(l){Oe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function nv({basename:l="/",children:d=null,location:c,navigationType:s="POP",navigator:h,static:f=!1}){Oe(!Ur(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let S=l.replace(/^\/*/,"/"),C=E.useMemo(()=>({basename:S,navigator:h,static:f,future:{}}),[S,h,f]);typeof c=="string"&&(c=Ui(c));let{pathname:y="/",search:v="",hash:M="",state:O=null,key:j="default"}=c,H=E.useMemo(()=>{let F=on(y,S);return F==null?null:{location:{pathname:F,search:v,hash:M,state:O,key:j},navigationType:s}},[S,y,v,M,O,j,s]);return Mt(H!=null,`<Router basename="${S}"> is not able to match the URL "${y}${v}${M}" because it does not start with the basename, so the <Router> won't render anything.`),H==null?null:E.createElement(Bt.Provider,{value:C},E.createElement(Lr.Provider,{children:d,value:H}))}function iv({children:l,location:d}){return Wg(Fs(l),d)}function Fs(l,d=[]){let c=[];return E.Children.forEach(l,(s,h)=>{if(!E.isValidElement(s))return;let f=[...d,h];if(s.type===E.Fragment){c.push.apply(c,Fs(s.props.children,f));return}Oe(s.type===Gs,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Oe(!s.props.index||!s.props.children,"An index route cannot have child routes.");let S={id:s.props.id||f.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(S.children=Fs(s.props.children,f)),c.push(S)}),c}var so="get",uo="application/x-www-form-urlencoded";function ho(l){return l!=null&&typeof l.tagName=="string"}function rv(l){return ho(l)&&l.tagName.toLowerCase()==="button"}function av(l){return ho(l)&&l.tagName.toLowerCase()==="form"}function ov(l){return ho(l)&&l.tagName.toLowerCase()==="input"}function lv(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function sv(l,d){return l.button===0&&(!d||d==="_self")&&!lv(l)}var lo=null;function uv(){if(lo===null)try{new FormData(document.createElement("form"),0),lo=!1}catch{lo=!0}return lo}var cv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ls(l){return l!=null&&!cv.has(l)?(Mt(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${uo}"`),null):l}function dv(l,d){let c,s,h,f,S;if(av(l)){let C=l.getAttribute("action");s=C?on(C,d):null,c=l.getAttribute("method")||so,h=Ls(l.getAttribute("enctype"))||uo,f=new FormData(l)}else if(rv(l)||ov(l)&&(l.type==="submit"||l.type==="image")){let C=l.form;if(C==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=l.getAttribute("formaction")||C.getAttribute("action");if(s=y?on(y,d):null,c=l.getAttribute("formmethod")||C.getAttribute("method")||so,h=Ls(l.getAttribute("formenctype"))||Ls(C.getAttribute("enctype"))||uo,f=new FormData(C,l),!uv()){let{name:v,type:M,value:O}=l;if(M==="image"){let j=v?`${v}.`:"";f.append(`${j}x`,"0"),f.append(`${j}y`,"0")}else v&&f.append(v,O)}}else{if(ho(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=so,s=null,h=uo,S=l}return f&&h==="text/plain"&&(S=f,f=void 0),{action:s,method:c.toLowerCase(),encType:h,formData:f,body:S}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Qs(l,d){if(l===!1||l===null||typeof l>"u")throw new Error(d)}function mv(l,d,c){let s=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return s.pathname==="/"?s.pathname=`_root.${c}`:d&&on(s.pathname,d)==="/"?s.pathname=`${d.replace(/\/$/,"")}/_root.${c}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${c}`,s}async function hv(l,d){if(l.id in d)return d[l.id];try{let c=await import(l.module);return d[l.id]=c,c}catch(c){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function pv(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function fv(l,d,c){let s=await Promise.all(l.map(async h=>{let f=d.routes[h.route.id];if(f){let S=await hv(f,c);return S.links?S.links():[]}return[]}));return yv(s.flat(1).filter(pv).filter(h=>h.rel==="stylesheet"||h.rel==="preload").map(h=>h.rel==="stylesheet"?{...h,rel:"prefetch",as:"style"}:{...h,rel:"prefetch"}))}function dh(l,d,c,s,h,f){let S=(y,v)=>c[v]?y.route.id!==c[v].route.id:!0,C=(y,v)=>c[v].pathname!==y.pathname||c[v].route.path?.endsWith("*")&&c[v].params["*"]!==y.params["*"];return f==="assets"?d.filter((y,v)=>S(y,v)||C(y,v)):f==="data"?d.filter((y,v)=>{let M=s.routes[y.route.id];if(!M||!M.hasLoader)return!1;if(S(y,v)||C(y,v))return!0;if(y.route.shouldRevalidate){let O=y.route.shouldRevalidate({currentUrl:new URL(h.pathname+h.search+h.hash,window.origin),currentParams:c[0]?.params||{},nextUrl:new URL(l,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof O=="boolean")return O}return!0}):[]}function gv(l,d,{includeHydrateFallback:c}={}){return vv(l.map(s=>{let h=d.routes[s.route.id];if(!h)return[];let f=[h.module];return h.clientActionModule&&(f=f.concat(h.clientActionModule)),h.clientLoaderModule&&(f=f.concat(h.clientLoaderModule)),c&&h.hydrateFallbackModule&&(f=f.concat(h.hydrateFallbackModule)),h.imports&&(f=f.concat(h.imports)),f}).flat(1))}function vv(l){return[...new Set(l)]}function bv(l){let d={},c=Object.keys(l).sort();for(let s of c)d[s]=l[s];return d}function yv(l,d){let c=new Set;return new Set(d),l.reduce((s,h)=>{let f=JSON.stringify(bv(h));return c.has(f)||(c.add(f),s.push({key:f,link:h})),s},[])}function kh(){let l=E.useContext(Gi);return Qs(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function Sv(){let l=E.useContext(mo);return Qs(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var Ps=E.createContext(void 0);Ps.displayName="FrameworkContext";function Ch(){let l=E.useContext(Ps);return Qs(l,"You must render this element inside a <HydratedRouter> element"),l}function wv(l,d){let c=E.useContext(Ps),[s,h]=E.useState(!1),[f,S]=E.useState(!1),{onFocus:C,onBlur:y,onMouseEnter:v,onMouseLeave:M,onTouchStart:O}=d,j=E.useRef(null);E.useEffect(()=>{if(l==="render"&&S(!0),l==="viewport"){let W=G=>{G.forEach(Y=>{S(Y.isIntersecting)})},L=new IntersectionObserver(W,{threshold:.5});return j.current&&L.observe(j.current),()=>{L.disconnect()}}},[l]),E.useEffect(()=>{if(s){let W=setTimeout(()=>{S(!0)},100);return()=>{clearTimeout(W)}}},[s]);let H=()=>{h(!0)},F=()=>{h(!1),S(!1)};return c?l!=="intent"?[f,j,{}]:[f,j,{onFocus:Br(C,H),onBlur:Br(y,F),onMouseEnter:Br(v,H),onMouseLeave:Br(M,F),onTouchStart:Br(O,H)}]:[!1,j,{}]}function Br(l,d){return c=>{l&&l(c),c.defaultPrevented||d(c)}}function xv({page:l,...d}){let{router:c}=kh(),s=E.useMemo(()=>hh(c.routes,l,c.basename),[c.routes,l,c.basename]);return s?E.createElement(kv,{page:l,matches:s,...d}):null}function Tv(l){let{manifest:d,routeModules:c}=Ch(),[s,h]=E.useState([]);return E.useEffect(()=>{let f=!1;return fv(l,d,c).then(S=>{f||h(S)}),()=>{f=!0}},[l,d,c]),s}function kv({page:l,matches:d,...c}){let s=Mn(),{manifest:h,routeModules:f}=Ch(),{basename:S}=kh(),{loaderData:C,matches:y}=Sv(),v=E.useMemo(()=>dh(l,d,y,h,s,"data"),[l,d,y,h,s]),M=E.useMemo(()=>dh(l,d,y,h,s,"assets"),[l,d,y,h,s]),O=E.useMemo(()=>{if(l===s.pathname+s.search+s.hash)return[];let F=new Set,W=!1;if(d.forEach(G=>{let Y=h.routes[G.route.id];!Y||!Y.hasLoader||(!v.some(P=>P.route.id===G.route.id)&&G.route.id in C&&f[G.route.id]?.shouldRevalidate||Y.hasClientLoader?W=!0:F.add(G.route.id))}),F.size===0)return[];let L=mv(l,S,"data");return W&&F.size>0&&L.searchParams.set("_routes",d.filter(G=>F.has(G.route.id)).map(G=>G.route.id).join(",")),[L.pathname+L.search]},[S,C,s,h,v,d,l,f]),j=E.useMemo(()=>gv(M,h),[M,h]),H=Tv(M);return E.createElement(E.Fragment,null,O.map(F=>E.createElement("link",{key:F,rel:"prefetch",as:"fetch",href:F,...c})),j.map(F=>E.createElement("link",{key:F,rel:"modulepreload",href:F,...c})),H.map(({key:F,link:W})=>E.createElement("link",{key:F,nonce:c.nonce,...W})))}function Cv(...l){return d=>{l.forEach(c=>{typeof c=="function"?c(d):c!=null&&(c.current=d)})}}var Oh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Oh&&(window.__reactRouterVersion="7.9.6")}catch{}function Ov({basename:l,children:d,window:c}){let s=E.useRef();s.current==null&&(s.current=mg({window:c,v5Compat:!0}));let h=s.current,[f,S]=E.useState({action:h.action,location:h.location}),C=E.useCallback(y=>{E.startTransition(()=>S(y))},[S]);return E.useLayoutEffect(()=>h.listen(C),[h,C]),E.createElement(nv,{basename:l,children:d,location:f.location,navigationType:f.action,navigator:h})}var Nh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Eh=E.forwardRef(function({onClick:d,discover:c="render",prefetch:s="none",relative:h,reloadDocument:f,replace:S,state:C,target:y,to:v,preventScrollReset:M,viewTransition:O,...j},H){let{basename:F}=E.useContext(Bt),W=typeof v=="string"&&Nh.test(v),L,G=!1;if(typeof v=="string"&&W&&(L=v,Oh))try{let $=new URL(window.location.href),ot=v.startsWith("//")?new URL($.protocol+v):new URL(v),lt=on(ot.pathname,F);ot.origin===$.origin&&lt!=null?v=lt+ot.search+ot.hash:G=!0}catch{Mt(!1,`<Link to="${v}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let Y=Ug(v,{relative:h}),[P,ye,ke]=wv(s,j),ze=Av(v,{replace:S,state:C,target:y,preventScrollReset:M,relative:h,viewTransition:O});function J($){d&&d($),$.defaultPrevented||ze($)}let Ae=E.createElement("a",{...j,...ke,href:L||Y,onClick:G||f?d:J,ref:Cv(H,ye),target:y,"data-discover":!W&&c==="render"?"true":void 0});return P&&!W?E.createElement(E.Fragment,null,Ae,E.createElement(xv,{page:Y})):Ae});Eh.displayName="Link";var Nv=E.forwardRef(function({"aria-current":d="page",caseSensitive:c=!1,className:s="",end:h=!1,style:f,to:S,viewTransition:C,children:y,...v},M){let O=Fr(S,{relative:v.relative}),j=Mn(),H=E.useContext(mo),{navigator:F,basename:W}=E.useContext(Bt),L=H!=null&&jv(O)&&C===!0,G=F.encodeLocation?F.encodeLocation(O).pathname:O.pathname,Y=j.pathname,P=H&&H.navigation&&H.navigation.location?H.navigation.location.pathname:null;c||(Y=Y.toLowerCase(),P=P?P.toLowerCase():null,G=G.toLowerCase()),P&&W&&(P=on(P,W)||P);const ye=G!=="/"&&G.endsWith("/")?G.length-1:G.length;let ke=Y===G||!h&&Y.startsWith(G)&&Y.charAt(ye)==="/",ze=P!=null&&(P===G||!h&&P.startsWith(G)&&P.charAt(G.length)==="/"),J={isActive:ke,isPending:ze,isTransitioning:L},Ae=ke?d:void 0,$;typeof s=="function"?$=s(J):$=[s,ke?"active":null,ze?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let ot=typeof f=="function"?f(J):f;return E.createElement(Eh,{...v,"aria-current":Ae,className:$,ref:M,style:ot,to:S,viewTransition:C},typeof y=="function"?y(J):y)});Nv.displayName="NavLink";var Ev=E.forwardRef(({discover:l="render",fetcherKey:d,navigate:c,reloadDocument:s,replace:h,state:f,method:S=so,action:C,onSubmit:y,relative:v,preventScrollReset:M,viewTransition:O,...j},H)=>{let F=Dv(),W=_v(C,{relative:v}),L=S.toLowerCase()==="get"?"get":"post",G=typeof C=="string"&&Nh.test(C),Y=P=>{if(y&&y(P),P.defaultPrevented)return;P.preventDefault();let ye=P.nativeEvent.submitter,ke=ye?.getAttribute("formmethod")||S;F(ye||P.currentTarget,{fetcherKey:d,method:ke,navigate:c,replace:h,state:f,relative:v,preventScrollReset:M,viewTransition:O})};return E.createElement("form",{ref:H,method:L,action:W,onSubmit:s?y:Y,...j,"data-discover":!G&&l==="render"?"true":void 0})});Ev.displayName="Form";function zv(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function zh(l){let d=E.useContext(Gi);return Oe(d,zv(l)),d}function Av(l,{target:d,replace:c,state:s,preventScrollReset:h,relative:f,viewTransition:S}={}){let C=Gr(),y=Mn(),v=Fr(l,{relative:f});return E.useCallback(M=>{if(sv(M,d)){M.preventDefault();let O=c!==void 0?c:Hr(y)===Hr(v);C(l,{replace:O,state:s,preventScrollReset:h,relative:f,viewTransition:S})}},[y,C,v,c,s,d,l,h,f,S])}var Rv=0,Mv=()=>`__${String(++Rv)}__`;function Dv(){let{router:l}=zh("useSubmit"),{basename:d}=E.useContext(Bt),c=Jg();return E.useCallback(async(s,h={})=>{let{action:f,method:S,encType:C,formData:y,body:v}=dv(s,d);if(h.navigate===!1){let M=h.fetcherKey||Mv();await l.fetch(M,c,h.action||f,{preventScrollReset:h.preventScrollReset,formData:y,body:v,formMethod:h.method||S,formEncType:h.encType||C,flushSync:h.flushSync})}else await l.navigate(h.action||f,{preventScrollReset:h.preventScrollReset,formData:y,body:v,formMethod:h.method||S,formEncType:h.encType||C,replace:h.replace,state:h.state,fromRouteId:c,flushSync:h.flushSync,viewTransition:h.viewTransition})},[l,d,c])}function _v(l,{relative:d}={}){let{basename:c}=E.useContext(Bt),s=E.useContext(Ht);Oe(s,"useFormAction must be used inside a RouteContext");let[h]=s.matches.slice(-1),f={...Fr(l||".",{relative:d})},S=Mn();if(l==null){f.search=S.search;let C=new URLSearchParams(f.search),y=C.getAll("index");if(y.some(M=>M==="")){C.delete("index"),y.filter(O=>O).forEach(O=>C.append("index",O));let M=C.toString();f.search=M?`?${M}`:""}}return(!l||l===".")&&h.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(f.pathname=f.pathname==="/"?c:an([c,f.pathname])),Hr(f)}function jv(l,{relative:d}={}){let c=E.useContext(yh);Oe(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=zh("useViewTransitionState"),h=Fr(l,{relative:d});if(!c.isTransitioning)return!1;let f=on(c.currentLocation.pathname,s)||c.currentLocation.pathname,S=on(c.nextLocation.pathname,s)||c.nextLocation.pathname;return co(h.pathname,S)!=null||co(h.pathname,f)!=null}const qv="_container_1tlkm_1",Bv="_navigation_1tlkm_59",Hi={container:qv,"app-info":"_app-info_1tlkm_23","app-name":"_app-name_1tlkm_31","app-author":"_app-author_1tlkm_45",navigation:Bv,"navigation-button":"_navigation-button_1tlkm_77"},Hv=()=>A.jsx(A.Fragment,{children:A.jsxs("div",{className:`${Hi.container}`,children:[A.jsxs("div",{className:`${Hi["app-info"]}`,children:[A.jsx("p",{className:`${Hi["app-name"]}`,children:"Leet101"}),A.jsxs("p",{className:`${Hi["app-author"]}`,children:["by ","Phong Doan"]})]}),A.jsx("nav",{className:`${Hi.navigation}`,children:A.jsx("a",{className:`${Hi["navigation-button"]}`,href:"https://williamdoan17.github.io/Leet101/",target:"_blank",children:"Practice"})})]})}),Lv="_container_1wjut_1",at={container:Lv,"search-page-heading":"_search-page-heading_1wjut_17","search-page-subheading":"_search-page-subheading_1wjut_35","result-container":"_result-container_1wjut_53","result-container-heading":"_result-container-heading_1wjut_67","result-card-container":"_result-card-container_1wjut_81","result-card":"_result-card_1wjut_81","result-index":"_result-index_1wjut_121","result-info":"_result-info_1wjut_137","result-name":"_result-name_1wjut_157","result-tag-container":"_result-tag-container_1wjut_185","difficulty-tag":"_difficulty-tag_1wjut_199","topic-tag":"_topic-tag_1wjut_213","result-arrow":"_result-arrow_1wjut_241"},Uv=[{level:"easy",labelColor:"rgb(16, 185, 129)",chosen:!0},{level:"medium",labelColor:"rgb(234, 179, 8)",chosen:!0},{level:"hard",labelColor:"rgb(239, 68, 68)",chosen:!0}],Gv=[{name:"Array",chosen:!0},{name:"Hash Table",chosen:!0},{name:"String",chosen:!0},{name:"Dynamic Programming",chosen:!0},{name:"Binary Search",chosen:!0},{name:"Binary Tree",chosen:!0},{name:"Linked List",chosen:!0},{name:"Stack",chosen:!0},{name:"Graph",chosen:!0},{name:"Heap",chosen:!0},{name:"Binary Search Tree",chosen:!0},{name:"Recursion",chosen:!0},{name:"Matrix",chosen:!0},{name:"Queue",chosen:!0},{name:"Math",chosen:!0},{name:"Trie",chosen:!0},{name:"Binary",chosen:!0}],Ah=[{problemName:"Two Sum",author:"Algorithm Master",explanation:"Use a hash map to store numbers and their indices. For each number, calculate its complement (target - current) and check if it exists in the map. This avoids O(n²) brute force.",solution:`class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> map;
        for (int i = 0; i < nums.size(); i++) {
            int complement = target - nums[i];
            if (map.find(complement) != map.end()) {
                return {map[complement], i};
            }
            map[nums[i]] = i;
        }
        return {};
    }
};`,notes:"Time: O(n), Space: O(n)",comments:[{author:"CodeReviewer42",content:"Elegant solution! Hash map eliminates nested loops. Each lookup is O(1)."},{author:"PythonFan",content:"In Python, this can be done even more concisely with enumerate() and dictionary."},{author:"NewCoder",content:"What if there are duplicate numbers? The hash map approach handles this well since we store indices."},{author:"OptimizationExpert",content:"Consider adding an early return if no solution is possible, though the problem guarantees exactly one solution."}]},{problemName:"Best Time to Buy and Sell Stock",author:"Trading Pro",explanation:"Track the minimum price seen so far and calculate maximum profit by comparing current price with minimum.",solution:`class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int minPrice = INT_MAX;
        int maxProfit = 0;
        
        for (int price : prices) {
            if (price < minPrice) {
                minPrice = price;
            } else if (price - minPrice > maxProfit) {
                maxProfit = price - minPrice;
            }
        }
        return maxProfit;
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"StockTrader",content:"Clean one-pass solution! This is essentially Kadane's algorithm for maximum subarray."},{author:"AlgorithmEnthusiast",content:"Note that we can only buy once and sell once. For multiple transactions, we'd need a different approach."},{author:"CodeReviewer42",content:"Good use of INT_MAX to initialize minPrice. Makes the first comparison always true."},{author:"PythonDev",content:"In Python, we can use float('inf') instead of INT_MAX for similar initialization."}]},{problemName:"Contains Duplicate",author:"Set Master",explanation:"Use a hash set to track seen numbers. If we encounter a number already in the set, we found a duplicate.",solution:`class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        unordered_set<int> seen;
        for (int num : nums) {
            if (seen.find(num) != seen.end()) {
                return true;
            }
            seen.insert(num);
        }
        return false;
    }
};`,notes:"Time: O(n), Space: O(n)",comments:[{author:"SetExpert",content:"Hash set provides O(1) lookups on average. Much better than sorting which would be O(n log n)."},{author:"MemoryOptimizer",content:"We could also sort and check adjacent elements for O(1) space, but O(n log n) time."},{author:"PythonFan",content:"In Python, this is one line: return len(nums) != len(set(nums))"},{author:"BigOAnalyst",content:"For very large n, the hash set might have collisions but average case is still O(n)."}]},{problemName:"Remove Duplicates from Sorted Array",author:"Two Pointer Pro",explanation:"Use two pointers - one for the current position to place unique elements, and one to iterate through the array.",solution:`class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        if (nums.empty()) return 0;
        
        int i = 0;
        for (int j = 1; j < nums.size(); j++) {
            if (nums[j] != nums[i]) {
                i++;
                nums[i] = nums[j];
            }
        }
        return i + 1;
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"PointerMaster",content:"Classic two-pointer technique! i tracks the last unique element position."},{author:"EdgeCaseHunter",content:"Good check for empty array at the beginning. Always important for robustness."},{author:"AlgorithmTeacher",content:"This works because the array is sorted. For unsorted array, we'd need a different approach."},{author:"CodeStyleGuru",content:"Clean and efficient. The in-place modification is exactly what the problem asks for."}]},{problemName:"Move Zeroes",author:"Array Manipulator",explanation:"Use two pointers - one to find non-zero elements and one to place them in order, then fill remaining positions with zeroes.",solution:`class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int nonZeroIndex = 0;
        
        // Move all non-zero elements to the front
        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] != 0) {
                nums[nonZeroIndex++] = nums[i];
            }
        }
        
        // Fill remaining positions with zeroes
        for (int i = nonZeroIndex; i < nums.size(); i++) {
            nums[i] = 0;
        }
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"OptimizationExpert",content:"Efficient two-pass solution! First pass collects non-zeroes, second pass fills zeroes."},{author:"OnePassFan",content:"We could also do this in one pass with a swap operation, but this is more readable."},{author:"CodeReviewer42",content:"Good variable naming - nonZeroIndex clearly indicates its purpose."},{author:"PythonDev",content:"In Python, we can use list comprehension: nums[:] = [x for x in nums if x != 0] + [0]*nums.count(0)"}]},{problemName:"Plus One",author:"Digit Expert",explanation:"Start from the end and handle carry. If all digits become 9, we need to add an extra digit at the beginning.",solution:`class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {
        int n = digits.size();
        
        for (int i = n - 1; i >= 0; i--) {
            if (digits[i] < 9) {
                digits[i]++;
                return digits;
            }
            digits[i] = 0;
        }
        
        // If we're here, all digits were 9
        digits.insert(digits.begin(), 1);
        return digits;
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"MathWizard",content:"Smart approach! Handles the carry propagation elegantly without extra variables."},{author:"EdgeCaseHunter",content:"Good handling of the edge case where all digits are 9 and we need to add a new digit."},{author:"CodeSimplicity",content:"The early return when digits[i] < 9 makes this very efficient for most cases."},{author:"AlternativeThinker",content:"We could also convert to number and back, but that might cause overflow for large arrays."}]},{problemName:"Single Number",author:"Bit Manipulation Guru",explanation:"Use XOR operation. Since a XOR a = 0 and a XOR 0 = a, all duplicate numbers cancel out, leaving the single number.",solution:`class Solution {
public:
    int singleNumber(vector<int>& nums) {
        int result = 0;
        for (int num : nums) {
            result ^= num;
        }
        return result;
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"BitMaster",content:"Beautiful bit manipulation! XOR is perfect for this problem."},{author:"MathGeek",content:"This works because XOR is commutative and associative. The order doesn't matter."},{author:"MemoryOptimizer",content:"O(1) space solution! No extra data structures needed."},{author:"PythonFan",content:"In Python, we can use reduce from functools: return reduce(lambda x, y: x ^ y, nums)"}]},{problemName:"Intersection of Two Arrays II",author:"Hash Map Specialist",explanation:"Use a hash map to count frequencies of numbers in the smaller array, then iterate through the other array to find common elements.",solution:`class Solution {
public:
    vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {
        if (nums1.size() > nums2.size()) {
            return intersect(nums2, nums1);
        }
        
        unordered_map<int, int> freq;
        vector<int> result;
        
        // Count frequencies in smaller array
        for (int num : nums1) {
            freq[num]++;
        }
        
        // Find common elements
        for (int num : nums2) {
            if (freq.find(num) != freq.end() && freq[num] > 0) {
                result.push_back(num);
                freq[num]--;
            }
        }
        
        return result;
    }
};`,notes:"Time: O(n + m), Space: O(min(n, m))",comments:[{author:"OptimizationExpert",content:"Smart to process the smaller array first to minimize space usage!"},{author:"AlternativeSolver",content:"We could also sort both arrays and use two pointers for O(1) space (but O(n log n) time)."},{author:"CodeReviewer42",content:"Good use of frequency counting to handle duplicates correctly."},{author:"BigOAnalyst",content:"Space complexity is O(min(n,m)) which is optimal for this approach."}]},{problemName:"Valid Sudoku",author:"Grid Validator",explanation:"Use three sets of hash sets to track seen numbers in rows, columns, and 3x3 sub-boxes.",solution:`class Solution {
public:
    bool isValidSudoku(vector<vector<char>>& board) {
        vector<unordered_set<char>> rows(9), cols(9), boxes(9);
        
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                char num = board[i][j];
                if (num == '.') continue;
                
                int boxIndex = (i / 3) * 3 + (j / 3);
                
                if (rows[i].count(num) || cols[j].count(num) || boxes[boxIndex].count(num)) {
                    return false;
                }
                
                rows[i].insert(num);
                cols[j].insert(num);
                boxes[boxIndex].insert(num);
            }
        }
        return true;
    }
};`,notes:"Time: O(1) since board is fixed 9x9, Space: O(1)",comments:[{author:"SudokuMaster",content:"Clean solution! The box index calculation is clever: (i/3)*3 + (j/3)."},{author:"SpaceOptimizer",content:"We could use bit masking to reduce space further, but this is more readable."},{author:"CodeReviewer42",content:"Good handling of empty cells with continue statement."},{author:"AlternativeThinker",content:"We could also use arrays of booleans instead of sets for potentially better performance."}]},{problemName:"Rotate Array",author:"Array Rotator",explanation:"Three-step reversal: reverse entire array, then reverse first k elements, then reverse remaining elements.",solution:`class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        int n = nums.size();
        k = k % n; // Handle k larger than array size
        
        // Three-step reversal
        reverse(nums.begin(), nums.end());
        reverse(nums.begin(), nums.begin() + k);
        reverse(nums.begin() + k, nums.end());
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"AlgorithmMaster",content:"Elegant reversal technique! This is the classic O(1) space solution."},{author:"EdgeCaseHunter",content:"Important to handle k > n with modulo operation. Many forget this!"},{author:"AlternativeSolver",content:"We could also use extra array or cyclic replacements, but this is most space-efficient."},{author:"CodeSimplicity",content:"Using STL reverse makes the code clean and readable."}]},{problemName:"Find All Numbers Disappeared in an Array",author:"Marking Pro",explanation:"Use the array itself as a marker by making numbers negative at positions corresponding to seen numbers.",solution:`class Solution {
public:
    vector<int> findDisappearedNumbers(vector<int>& nums) {
        vector<int> result;
        
        // Mark positions as negative
        for (int i = 0; i < nums.size(); i++) {
            int index = abs(nums[i]) - 1;
            if (nums[index] > 0) {
                nums[index] = -nums[index];
            }
        }
        
        // Find positive numbers (indices of missing numbers)
        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] > 0) {
                result.push_back(i + 1);
            }
        }
        
        return result;
    }
};`,notes:"Time: O(n), Space: O(1) excluding result",comments:[{author:"SpaceOptimizer",content:"Brilliant in-place marking! No extra space needed for tracking."},{author:"AlgorithmEnthusiast",content:"This works because all numbers are between 1 and n, and array size is n."},{author:"CodeReviewer42",content:"Good use of abs() to handle already negative numbers in the marking phase."},{author:"PythonDev",content:"In Python, we'd need to be careful since we can't modify the array if it's given as immutable."}]},{problemName:"Max Consecutive Ones",author:"Counter Expert",explanation:"Iterate through array, count consecutive ones, and track the maximum count.",solution:`class Solution {
public:
    int findMaxConsecutiveOnes(vector<int>& nums) {
        int maxCount = 0;
        int currentCount = 0;
        
        for (int num : nums) {
            if (num == 1) {
                currentCount++;
                maxCount = max(maxCount, currentCount);
            } else {
                currentCount = 0;
            }
        }
        
        return maxCount;
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"SimplicityMaster",content:"Straightforward and efficient! Single pass with O(1) space."},{author:"CodeReviewer42",content:"Good use of max() to avoid if-else for updating maxCount."},{author:"EdgeCaseHunter",content:"Handles empty array and all zeros correctly."},{author:"PythonFan",content:"In Python, we could use groupby from itertools, but this is more readable."}]},{problemName:"Reshape the Matrix",author:"Matrix Reshaper",explanation:"Flatten the matrix row by row, then fill the new matrix with the flattened elements.",solution:`class Solution {
public:
    vector<vector<int>> matrixReshape(vector<vector<int>>& mat, int r, int c) {
        int m = mat.size(), n = mat[0].size();
        
        // Check if reshape is possible
        if (m * n != r * c) {
            return mat;
        }
        
        vector<vector<int>> result(r, vector<int>(c));
        int index = 0;
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                int newRow = index / c;
                int newCol = index % c;
                result[newRow][newCol] = mat[i][j];
                index++;
            }
        }
        
        return result;
    }
};`,notes:"Time: O(m*n), Space: O(m*n) for result",comments:[{author:"MatrixMaster",content:"Clean index calculation using division and modulo!"},{author:"EdgeCaseHunter",content:"Important to check if reshape is possible at the beginning."},{author:"AlternativeThinker",content:"We could also use a single loop with index conversion formulas."},{author:"CodeReviewer42",content:"Good variable naming - m, n, r, c follow conventional matrix notation."}]},{problemName:"Pascal's Triangle",author:"Math Generator",explanation:"Each row is generated by summing adjacent elements from the previous row, with 1s at the ends.",solution:`class Solution {
public:
    vector<vector<int>> generate(int numRows) {
        vector<vector<int>> triangle;
        
        for (int i = 0; i < numRows; i++) {
            vector<int> row(i + 1, 1); // Initialize with 1s
            
            // Calculate inner elements (skip first and last)
            for (int j = 1; j < i; j++) {
                row[j] = triangle[i-1][j-1] + triangle[i-1][j];
            }
            
            triangle.push_back(row);
        }
        
        return triangle;
    }
};`,notes:"Time: O(n²), Space: O(n²)",comments:[{author:"MathWizard",content:"Perfect implementation of Pascal's triangle generation!"},{author:"CodeReviewer42",content:"Good initialization of each row with 1s, then filling inner elements."},{author:"EdgeCaseHunter",content:"Handles numRows = 0 correctly by returning empty vector."},{author:"AlternativeThinker",content:"We could also use combinatorial formula with nCr, but this is more straightforward."}]},{problemName:"Missing Number",author:"Math Genius",explanation:"Use Gauss formula: sum of first n numbers is n(n+1)/2. Subtract actual sum to find missing number.",solution:`class Solution {
public:
    int missingNumber(vector<int>& nums) {
        int n = nums.size();
        int expectedSum = n * (n + 1) / 2;
        int actualSum = 0;
        
        for (int num : nums) {
            actualSum += num;
        }
        
        return expectedSum - actualSum;
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"MathGeek",content:"Clever use of mathematical formula! No extra space needed."},{author:"AlternativeSolver",content:"We could also use XOR with all numbers from 0 to n, similar to Single Number problem."},{author:"CodeReviewer42",content:"Simple and efficient. Handles overflow well for given constraints."},{author:"PythonFan",content:"In Python, we could use: return sum(range(len(nums)+1)) - sum(nums)"}]},{problemName:"Product of Array Except Self",author:"Prefix-Suffix Master",explanation:"Use prefix and suffix products. First pass calculates left products, second pass calculates right products and combines.",solution:`class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        int n = nums.size();
        vector<int> result(n, 1);
        
        // Calculate left products
        int left = 1;
        for (int i = 0; i < n; i++) {
            result[i] = left;
            left *= nums[i];
        }
        
        // Calculate right products and combine
        int right = 1;
        for (int i = n - 1; i >= 0; i--) {
            result[i] *= right;
            right *= nums[i];
        }
        
        return result;
    }
};`,notes:"Time: O(n), Space: O(1) excluding result",comments:[{author:"AlgorithmMaster",content:"Brilliant O(n) time and O(1) space solution! No division used."},{author:"CodeReviewer42",content:"Clean two-pass approach. First pass left products, second pass right products."},{author:"SpaceOptimizer",content:"Using the result array for intermediate storage is smart."},{author:"InterviewExpert",content:"This is a classic interview problem. Important to know both division and non-division solutions."}]},{problemName:"Maximum Subarray",author:"Kadane's Algorithm Expert",explanation:"Kadane's algorithm: track current sum and maximum sum. Reset current sum when it becomes negative.",solution:`class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int maxSum = nums[0];
        int currentSum = nums[0];
        
        for (int i = 1; i < nums.size(); i++) {
            currentSum = max(nums[i], currentSum + nums[i]);
            maxSum = max(maxSum, currentSum);
        }
        
        return maxSum;
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"AlgorithmHistorian",content:"Classic Kadane's algorithm! One of the most famous DP problems."},{author:"CodeReviewer42",content:"Clean implementation. The key insight is resetting when current sum goes negative."},{author:"EdgeCaseHunter",content:"Handles all negative arrays correctly by starting with first element."},{author:"AlternativeThinker",content:"We could also use divide and conquer for O(n log n), but this is optimal."}]},{problemName:"Maximum Product Subarray",author:"DP Specialist",explanation:"Track both maximum and minimum products at each position, since negative numbers can make minimum become maximum.",solution:`class Solution {
public:
    int maxProduct(vector<int>& nums) {
        if (nums.empty()) return 0;
        
        int maxProd = nums[0];
        int minProd = nums[0];
        int result = nums[0];
        
        for (int i = 1; i < nums.size(); i++) {
            if (nums[i] < 0) {
                swap(maxProd, minProd);
            }
            
            maxProd = max(nums[i], maxProd * nums[i]);
            minProd = min(nums[i], minProd * nums[i]);
            
            result = max(result, maxProd);
        }
        
        return result;
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"DPExpert",content:"Smart to track both max and min! Negative numbers flip the relationship."},{author:"CodeReviewer42",content:"The swap when encountering negative number is the key insight."},{author:"EdgeCaseHunter",content:"Handles zeros correctly since max() and min() will reset at zero."},{author:"AlternativeThinker",content:"We could also do two passes (forward and backward) to handle negative counts."}]},{problemName:"Find Minimum in Rotated Sorted Array",author:"Binary Search Pro",explanation:"Modified binary search: compare mid element with right element to determine which side has the minimum.",solution:`class Solution {
public:
    int findMin(vector<int>& nums) {
        int left = 0, right = nums.size() - 1;
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] > nums[right]) {
                // Minimum is in right half
                left = mid + 1;
            } else {
                // Minimum is in left half (including mid)
                right = mid;
            }
        }
        
        return nums[left];
    }
};`,notes:"Time: O(log n), Space: O(1)",comments:[{author:"BinarySearchMaster",content:"Clean binary search adaptation for rotated array!"},{author:"CodeReviewer42",content:"Good use of comparing with right element instead of left to handle duplicates."},{author:"EdgeCaseHunter",content:"Handles non-rotated array correctly (when nums[0] is minimum)."},{author:"AlternativeThinker",content:"We could also compare with left element, but comparing with right is more robust."}]},{problemName:"Search in Rotated Sorted Array",author:"Rotation Searcher",explanation:"Modified binary search: first find which side is sorted, then check if target is in the sorted side.",solution:`class Solution {
public:
    int search(vector<int>& nums, int target) {
        int left = 0, right = nums.size() - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] == target) {
                return mid;
            }
            
            // Check if left side is sorted
            if (nums[left] <= nums[mid]) {
                if (nums[left] <= target && target < nums[mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else { // Right side is sorted
                if (nums[mid] < target && target <= nums[right]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }
        
        return -1;
    }
};`,notes:"Time: O(log n), Space: O(1)",comments:[{author:"BinarySearchExpert",content:"Elegant solution! The key is determining which half is properly sorted."},{author:"CodeReviewer42",content:"Good handling of both cases: left sorted and right sorted."},{author:"EdgeCaseHunter",content:"Handles single element and two element arrays correctly."},{author:"AlternativeThinker",content:"We could first find the pivot, then do binary search on the appropriate half."}]},{problemName:"3Sum",author:"Two Pointer Master",explanation:"Sort the array, then for each element, use two pointers to find pairs that sum to -current element. Skip duplicates to avoid duplicate triplets.",solution:`class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        vector<vector<int>> result;
        sort(nums.begin(), nums.end());
        int n = nums.size();
        
        for (int i = 0; i < n - 2; i++) {
            // Skip duplicates
            if (i > 0 && nums[i] == nums[i-1]) continue;
            
            int left = i + 1, right = n - 1;
            while (left < right) {
                int sum = nums[i] + nums[left] + nums[right];
                if (sum == 0) {
                    result.push_back({nums[i], nums[left], nums[right]});
                    // Skip duplicates
                    while (left < right && nums[left] == nums[left+1]) left++;
                    while (left < right && nums[right] == nums[right-1]) right--;
                    left++;
                    right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }
        return result;
    }
};`,notes:"Time: O(n²), Space: O(1) excluding result",comments:[{author:"TwoPointerExpert",content:"Classic two-pointer approach after sorting! Handles duplicates elegantly."},{author:"CodeReviewer42",content:"Good duplicate skipping logic - both for the outer loop and inner pointers."},{author:"OptimizationExpert",content:"Early termination could be added: if nums[i] > 0, break since sorted array."},{author:"AlternativeThinker",content:"We could use hash set for O(n²) time with O(n) space, but sorting is more efficient."}]},{problemName:"Container With Most Water",author:"Two Pointer Pro",explanation:"Use two pointers at both ends. Always move the pointer with smaller height, as that's the limiting factor.",solution:`class Solution {
public:
    int maxArea(vector<int>& height) {
        int left = 0, right = height.size() - 1;
        int maxArea = 0;
        
        while (left < right) {
            int currentArea = min(height[left], height[right]) * (right - left);
            maxArea = max(maxArea, currentArea);
            
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
        
        return maxArea;
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"GreedyAlgoExpert",content:"Greedy approach works perfectly! Always move the shorter line inward."},{author:"CodeReviewer42",content:"Clean and intuitive. The area calculation is straightforward."},{author:"ProofMaster",content:"This works because moving the longer line cannot increase the area, only moving shorter line might."},{author:"AlternativeThinker",content:"Brute force would be O(n²), but this greedy approach gives O(n)."}]},{problemName:"Merge Intervals",author:"Interval Master",explanation:"Sort intervals by start time, then merge overlapping intervals by comparing with the last merged interval.",solution:`class Solution {
public:
    vector<vector<int>> merge(vector<vector<int>>& intervals) {
        if (intervals.empty()) return {};
        
        sort(intervals.begin(), intervals.end());
        vector<vector<int>> merged;
        merged.push_back(intervals[0]);
        
        for (int i = 1; i < intervals.size(); i++) {
            vector<int>& last = merged.back();
            if (intervals[i][0] <= last[1]) {
                // Overlapping, merge them
                last[1] = max(last[1], intervals[i][1]);
            } else {
                // Non-overlapping, add new interval
                merged.push_back(intervals[i]);
            }
        }
        
        return merged;
    }
};`,notes:"Time: O(n log n), Space: O(1) excluding result",comments:[{author:"SortingExpert",content:"Sorting makes the problem much easier! Then it's just linear merging."},{author:"CodeReviewer42",content:"Good use of reference to the last merged interval for efficient updates."},{author:"EdgeCaseHunter",content:"Handles empty input and single interval correctly."},{author:"AlternativeThinker",content:"We could use a sweep line algorithm, but sorting is simpler and efficient."}]},{problemName:"Insert Interval",author:"Interval Inserter",explanation:"Three phases: add all intervals before new interval, merge overlapping intervals with new interval, add all intervals after.",solution:`class Solution {
public:
    vector<vector<int>> insert(vector<vector<int>>& intervals, vector<int>& newInterval) {
        vector<vector<int>> result;
        int i = 0, n = intervals.size();
        
        // Add all intervals before newInterval
        while (i < n && intervals[i][1] < newInterval[0]) {
            result.push_back(intervals[i]);
            i++;
        }
        
        // Merge overlapping intervals
        while (i < n && intervals[i][0] <= newInterval[1]) {
            newInterval[0] = min(newInterval[0], intervals[i][0]);
            newInterval[1] = max(newInterval[1], intervals[i][1]);
            i++;
        }
        result.push_back(newInterval);
        
        // Add remaining intervals
        while (i < n) {
            result.push_back(intervals[i]);
            i++;
        }
        
        return result;
    }
};`,notes:"Time: O(n), Space: O(1) excluding result",comments:[{author:"ThreePhaseExpert",content:"Clean three-phase approach! No sorting needed since intervals are already sorted."},{author:"CodeReviewer42",content:"Efficient linear scan. Each interval is processed exactly once."},{author:"EdgeCaseHunter",content:"Handles cases where newInterval is at beginning, middle, or end correctly."},{author:"AlternativeThinker",content:"We could use binary search to find insertion point, but linear scan is simpler."}]},{problemName:"Non-overlapping Intervals",author:"Greedy Interval Selector",explanation:"Sort by end time, then greedily select intervals. When conflict occurs, remove the interval with larger end time.",solution:`class Solution {
public:
    int eraseOverlapIntervals(vector<vector<int>>& intervals) {
        if (intervals.empty()) return 0;
        
        sort(intervals.begin(), intervals.end(), [](const vector<int>& a, const vector<int>& b) {
            return a[1] < b[1];
        });
        
        int count = 0;
        int lastEnd = intervals[0][1];
        
        for (int i = 1; i < intervals.size(); i++) {
            if (intervals[i][0] < lastEnd) {
                // Overlapping, remove current interval
                count++;
            } else {
                // Non-overlapping, update lastEnd
                lastEnd = intervals[i][1];
            }
        }
        
        return count;
    }
};`,notes:"Time: O(n log n), Space: O(1)",comments:[{author:"GreedyAlgorithmExpert",content:"Classic greedy interval scheduling! Always pick the interval that ends earliest."},{author:"CodeReviewer42",content:"Smart to sort by end time rather than start time for this problem."},{author:"ProofMaster",content:"This maximizes the number of non-overlapping intervals, which minimizes removals."},{author:"AlternativeThinker",content:"We could use DP for O(n²) solution, but greedy is optimal and faster."}]},{problemName:"4Sum",author:"K-Sum Specialist",explanation:"Extend 3Sum approach: two outer loops, then two pointers. Handle duplicates carefully.",solution:`class Solution {
public:
    vector<vector<int>> fourSum(vector<int>& nums, int target) {
        vector<vector<int>> result;
        sort(nums.begin(), nums.end());
        int n = nums.size();
        
        for (int i = 0; i < n - 3; i++) {
            if (i > 0 && nums[i] == nums[i-1]) continue;
            
            for (int j = i + 1; j < n - 2; j++) {
                if (j > i + 1 && nums[j] == nums[j-1]) continue;
                
                int left = j + 1, right = n - 1;
                while (left < right) {
                    long long sum = (long long)nums[i] + nums[j] + nums[left] + nums[right];
                    if (sum == target) {
                        result.push_back({nums[i], nums[j], nums[left], nums[right]});
                        while (left < right && nums[left] == nums[left+1]) left++;
                        while (left < right && nums[right] == nums[right-1]) right--;
                        left++;
                        right--;
                    } else if (sum < target) {
                        left++;
                    } else {
                        right--;
                    }
                }
            }
        }
        return result;
    }
};`,notes:"Time: O(n³), Space: O(1) excluding result",comments:[{author:"KSumMaster",content:"Generalizes 3Sum approach well! Careful duplicate handling is key."},{author:"CodeReviewer42",content:"Good use of long long to prevent integer overflow for large numbers."},{author:"OptimizationExpert",content:"Early pruning: break if nums[i] + nums[i+1] + nums[i+2] + nums[i+3] > target, etc."},{author:"AlternativeThinker",content:"We could use hash map for O(n³) average case, but worst case still O(n³)."}]},{problemName:"Jump Game",author:"Greedy Jumper",explanation:"Track the farthest reachable position. If at any point current position exceeds farthest reachable, return false.",solution:`class Solution {
public:
    bool canJump(vector<int>& nums) {
        int farthest = 0;
        for (int i = 0; i < nums.size(); i++) {
            if (i > farthest) {
                return false;
            }
            farthest = max(farthest, i + nums[i]);
            if (farthest >= nums.size() - 1) {
                return true;
            }
        }
        return true;
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"GreedyAlgoExpert",content:"Elegant greedy solution! Track the maximum reachable index."},{author:"CodeReviewer42",content:"Early termination when farthest reaches last index improves efficiency."},{author:"EdgeCaseHunter",content:"Handles single element array and array with zeros correctly."},{author:"AlternativeThinker",content:"We could use DP with O(n²) time, but greedy gives optimal O(n)."}]},{problemName:"Jump Game II",author:"Greedy Jump Optimizer",explanation:"Track current jump end and farthest reachable. When we reach jump end, increment jumps and update jump end to farthest.",solution:`class Solution {
public:
    int jump(vector<int>& nums) {
        int jumps = 0, currentEnd = 0, farthest = 0;
        
        for (int i = 0; i < nums.size() - 1; i++) {
            farthest = max(farthest, i + nums[i]);
            
            if (i == currentEnd) {
                jumps++;
                currentEnd = farthest;
                
                if (currentEnd >= nums.size() - 1) {
                    break;
                }
            }
        }
        
        return jumps;
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"GreedyAlgorithmMaster",content:"Brilliant BFS-like approach! Each 'level' represents one jump."},{author:"CodeReviewer42",content:"Smart to stop at nums.size()-1 since we don't need to jump from last position."},{author:"OptimizationExpert",content:"Early break when currentEnd reaches last index improves performance."},{author:"AlternativeThinker",content:"DP solution would be O(n²), but this greedy gives optimal O(n)."}]},{problemName:"Find the Duplicate Number",author:"Cycle Detection Pro",explanation:"Treat array as linked list where nums[i] is next pointer. Use Floyd's cycle detection (tortoise and hare).",solution:`class Solution {
public:
    int findDuplicate(vector<int>& nums) {
        // Phase 1: Find intersection point
        int slow = nums[0];
        int fast = nums[0];
        
        do {
            slow = nums[slow];
            fast = nums[nums[fast]];
        } while (slow != fast);
        
        // Phase 2: Find cycle entrance (duplicate)
        slow = nums[0];
        while (slow != fast) {
            slow = nums[slow];
            fast = nums[fast];
        }
        
        return slow;
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"CycleDetectionExpert",content:"Brilliant application of Floyd's cycle detection! Treats array as linked list."},{author:"CodeReviewer42",content:"Two-phase approach: find meeting point, then find cycle entrance."},{author:"MathWizard",content:"Works because numbers are 1 to n, so indices are valid and there must be a cycle."},{author:"AlternativeThinker",content:"We could use binary search on value space for O(n log n), but this is O(n)."}]},{problemName:"Subarray Sum Equals K",author:"Prefix Sum Master",explanation:"Use hash map to store prefix sums and their frequencies. For each position, check if (prefixSum - k) exists in map.",solution:`class Solution {
public:
    int subarraySum(vector<int>& nums, int k) {
        unordered_map<int, int> prefixSumCount;
        prefixSumCount[0] = 1; // Empty subarray has sum 0
        int count = 0, prefixSum = 0;
        
        for (int num : nums) {
            prefixSum += num;
            if (prefixSumCount.find(prefixSum - k) != prefixSumCount.end()) {
                count += prefixSumCount[prefixSum - k];
            }
            prefixSumCount[prefixSum]++;
        }
        
        return count;
    }
};`,notes:"Time: O(n), Space: O(n)",comments:[{author:"PrefixSumExpert",content:"Classic prefix sum + hash map approach! Handles negative numbers perfectly."},{author:"CodeReviewer42",content:"Important to initialize with prefixSumCount[0] = 1 for subarrays starting at index 0."},{author:"EdgeCaseHunter",content:"Handles cases where k=0 and arrays with negative numbers correctly."},{author:"AlternativeThinker",content:"Brute force would be O(n²), but this optimal solution is O(n)."}]},{problemName:"Next Permutation",author:"Permutation Algorithmist",explanation:"Find first decreasing element from right, swap with next larger element, then reverse the suffix to get next permutation.",solution:`class Solution {
public:
    void nextPermutation(vector<int>& nums) {
        int n = nums.size();
        int i = n - 2;
        
        // Find first decreasing element from right
        while (i >= 0 && nums[i] >= nums[i + 1]) {
            i--;
        }
        
        if (i >= 0) {
            // Find element just larger than nums[i]
            int j = n - 1;
            while (j >= 0 && nums[j] <= nums[i]) {
                j--;
            }
            swap(nums[i], nums[j]);
        }
        
        // Reverse the suffix
        reverse(nums.begin() + i + 1, nums.end());
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"CombinatoricsExpert",content:"Implements Narayana's algorithm for next permutation! Classic approach."},{author:"CodeReviewer42",content:"Three steps: find pivot, find successor, reverse suffix. Clean implementation."},{author:"EdgeCaseHunter",content:"Handles last permutation correctly by reversing entire array."},{author:"AlternativeThinker",content:"We could use STL next_permutation, but understanding the algorithm is key."}]},{problemName:"Spiral Matrix",author:"Matrix Traversal Pro",explanation:"Use four boundaries (top, bottom, left, right) and traverse in four directions until boundaries cross.",solution:`class Solution {
public:
    vector<int> spiralOrder(vector<vector<int>>& matrix) {
        vector<int> result;
        if (matrix.empty()) return result;
        
        int top = 0, bottom = matrix.size() - 1;
        int left = 0, right = matrix[0].size() - 1;
        
        while (top <= bottom && left <= right) {
            // Traverse right
            for (int i = left; i <= right; i++) {
                result.push_back(matrix[top][i]);
            }
            top++;
            
            // Traverse down
            for (int i = top; i <= bottom; i++) {
                result.push_back(matrix[i][right]);
            }
            right--;
            
            if (top <= bottom) {
                // Traverse left
                for (int i = right; i >= left; i--) {
                    result.push_back(matrix[bottom][i]);
                }
                bottom--;
            }
            
            if (left <= right) {
                // Traverse up
                for (int i = bottom; i >= top; i--) {
                    result.push_back(matrix[i][left]);
                }
                left++;
            }
        }
        
        return result;
    }
};`,notes:"Time: O(m*n), Space: O(1) excluding result",comments:[{author:"MatrixTraversalExpert",content:"Clean boundary approach! Four directions with shrinking boundaries."},{author:"CodeReviewer42",content:"Good checks for top<=bottom and left<=right after first two traversals."},{author:"EdgeCaseHunter",content:"Handles single row and single column matrices correctly."},{author:"AlternativeThinker",content:"We could use direction vectors, but boundary method is more intuitive."}]},{problemName:"Set Matrix Zeroes",author:"In-Place Modifier",explanation:"Use first row and first column as markers. First pass mark zeros, second pass set zeros based on markers.",solution:`class Solution {
public:
    void setZeroes(vector<vector<int>>& matrix) {
        int m = matrix.size(), n = matrix[0].size();
        bool firstRowZero = false, firstColZero = false;
        
        // Check if first row has zero
        for (int j = 0; j < n; j++) {
            if (matrix[0][j] == 0) {
                firstRowZero = true;
                break;
            }
        }
        
        // Check if first column has zero
        for (int i = 0; i < m; i++) {
            if (matrix[i][0] == 0) {
                firstColZero = true;
                break;
            }
        }
        
        // Use first row/col as markers
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                if (matrix[i][j] == 0) {
                    matrix[i][0] = 0;
                    matrix[0][j] = 0;
                }
            }
        }
        
        // Set zeros based on markers
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                    matrix[i][j] = 0;
                }
            }
        }
        
        // Set first row if needed
        if (firstRowZero) {
            for (int j = 0; j < n; j++) {
                matrix[0][j] = 0;
            }
        }
        
        // Set first column if needed
        if (firstColZero) {
            for (int i = 0; i < m; i++) {
                matrix[i][0] = 0;
            }
        }
    }
};`,notes:"Time: O(m*n), Space: O(1)",comments:[{author:"InPlaceAlgorithmist",content:"Brilliant O(1) space solution using first row/col as markers!"},{author:"CodeReviewer42",content:"Good separation of first row/col handling from the main marking logic."},{author:"EdgeCaseHunter",content:"Handles cases where first row/col themselves contain zeros correctly."},{author:"AlternativeThinker",content:"We could use two additional arrays, but this in-place approach is optimal."}]},{problemName:"Rotate Image",author:"Matrix Transformer",explanation:"Two-step approach: transpose matrix (swap rows and columns), then reverse each row.",solution:`class Solution {
public:
    void rotate(vector<vector<int>>& matrix) {
        int n = matrix.size();
        
        // Transpose matrix
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                swap(matrix[i][j], matrix[j][i]);
            }
        }
        
        // Reverse each row
        for (int i = 0; i < n; i++) {
            reverse(matrix[i].begin(), matrix[i].end());
        }
    }
};`,notes:"Time: O(n²), Space: O(1)",comments:[{author:"MatrixOperationsExpert",content:"Elegant two-step approach! Transpose + reverse = 90° rotation."},{author:"CodeReviewer42",content:"Clean and efficient. The transpose is done in-place with j starting from i+1."},{author:"MathGeek",content:"Mathematically, rotation is transpose followed by reflection."},{author:"AlternativeThinker",content:"We could rotate layer by layer, but this approach is simpler to implement."}]},{problemName:"Word Search",author:"Backtracking Searcher",explanation:"Use DFS backtracking. For each starting position, explore all four directions, marking visited cells.",solution:`class Solution {
public:
    bool exist(vector<vector<char>>& board, string word) {
        int m = board.size(), n = board[0].size();
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (backtrack(board, word, i, j, 0)) {
                    return true;
                }
            }
        }
        return false;
    }
    
private:
    bool backtrack(vector<vector<char>>& board, string& word, int i, int j, int index) {
        if (index == word.length()) {
            return true;
        }
        
        if (i < 0 || i >= board.size() || j < 0 || j >= board[0].size() || 
            board[i][j] != word[index]) {
            return false;
        }
        
        // Mark as visited
        char temp = board[i][j];
        board[i][j] = '#';
        
        // Explore four directions
        bool found = backtrack(board, word, i + 1, j, index + 1) ||
                     backtrack(board, word, i - 1, j, index + 1) ||
                     backtrack(board, word, i, j + 1, index + 1) ||
                     backtrack(board, word, i, j - 1, index + 1);
        
        // Restore original character
        board[i][j] = temp;
        
        return found;
    }
};`,notes:"Time: O(m*n*4^L) where L is word length, Space: O(L) for recursion stack",comments:[{author:"BacktrackingMaster",content:"Classic backtracking with DFS! Good pruning when characters don't match."},{author:"CodeReviewer42",content:"Clean marking/unmarking of visited cells using temporary storage."},{author:"OptimizationExpert",content:"We could add a visited matrix, but modifying board saves space."},{author:"AlternativeThinker",content:"Trie could help for multiple words, but for single word this is efficient."}]},{problemName:"Trapping Rain Water",author:"Two Pointer Water Collector",explanation:"Use two pointers from both ends. Track left max and right max. Water trapped at each position is min(leftMax, rightMax) - height.",solution:`class Solution {
public:
    int trap(vector<int>& height) {
        int left = 0, right = height.size() - 1;
        int leftMax = 0, rightMax = 0;
        int water = 0;
        
        while (left < right) {
            if (height[left] < height[right]) {
                if (height[left] >= leftMax) {
                    leftMax = height[left];
                } else {
                    water += leftMax - height[left];
                }
                left++;
            } else {
                if (height[right] >= rightMax) {
                    rightMax = height[right];
                } else {
                    water += rightMax - height[right];
                }
                right--;
            }
        }
        
        return water;
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"TwoPointerExpert",content:"Brilliant two-pointer approach! No extra arrays needed."},{author:"CodeReviewer42",content:"Key insight: water trapped depends on min(leftMax, rightMax) at each position."},{author:"OptimizationExpert",content:"More efficient than DP approach which uses O(n) space for left/right arrays."},{author:"AlternativeThinker",content:"We could use stack for O(n) time and space, but this is optimal."}]},{problemName:"Median of Two Sorted Arrays",author:"Binary Search Master",explanation:"Use binary search on smaller array. Partition both arrays such that left half has same elements as right half, and all left elements <= right elements.",solution:`class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        // Ensure nums1 is the smaller array
        if (nums1.size() > nums2.size()) {
            return findMedianSortedArrays(nums2, nums1);
        }
        
        int m = nums1.size(), n = nums2.size();
        int left = 0, right = m;
        
        while (left <= right) {
            int partition1 = (left + right) / 2;
            int partition2 = (m + n + 1) / 2 - partition1;
            
            int maxLeft1 = (partition1 == 0) ? INT_MIN : nums1[partition1 - 1];
            int minRight1 = (partition1 == m) ? INT_MAX : nums1[partition1];
            
            int maxLeft2 = (partition2 == 0) ? INT_MIN : nums2[partition2 - 1];
            int minRight2 = (partition2 == n) ? INT_MAX : nums2[partition2];
            
            if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
                // Found correct partition
                if ((m + n) % 2 == 0) {
                    return (max(maxLeft1, maxLeft2) + min(minRight1, minRight2)) / 2.0;
                } else {
                    return max(maxLeft1, maxLeft2);
                }
            } else if (maxLeft1 > minRight2) {
                right = partition1 - 1;
            } else {
                left = partition1 + 1;
            }
        }
        
        return 0.0;
    }
};`,notes:"Time: O(log(min(m,n))), Space: O(1)",comments:[{author:"BinarySearchGuru",content:"One of the hardest binary search problems! Partition approach is brilliant."},{author:"CodeReviewer42",content:"Good handling of edge cases with INT_MIN and INT_MAX for empty partitions."},{author:"AlgorithmHistorian",content:"Classic problem that tests deep understanding of binary search and medians."},{author:"AlternativeThinker",content:"We could merge arrays for O(m+n) time, but this logarithmic solution is optimal."}]},{problemName:"First Missing Positive",author:"In-Place Marker",explanation:"Use array itself as hash table. Place each number in its correct position (if within range), then find first position where number doesn't match index.",solution:`class Solution {
public:
    int firstMissingPositive(vector<int>& nums) {
        int n = nums.size();
        
        // Place each number in its correct position if possible
        for (int i = 0; i < n; i++) {
            while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] != nums[i]) {
                swap(nums[i], nums[nums[i] - 1]);
            }
        }
        
        // Find first missing positive
        for (int i = 0; i < n; i++) {
            if (nums[i] != i + 1) {
                return i + 1;
            }
        }
        
        return n + 1;
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"InPlaceAlgorithmist",content:"Brilliant cyclic sort approach! O(1) space by using array as hash table."},{author:"CodeReviewer42",content:"The while loop ensures each number eventually reaches its correct position."},{author:"EdgeCaseHunter",content:"Handles duplicates and numbers out of range correctly."},{author:"AlternativeThinker",content:"We could use hash set for O(n) time and space, but this is optimal O(1) space."}]},{problemName:"Sliding Window Maximum",author:"Deque Master",explanation:"Use deque to maintain indices of elements in current window in decreasing order. Remove from back while current element is larger, and remove from front if out of window.",solution:`class Solution {
public:
    vector<int> maxSlidingWindow(vector<int>& nums, int k) {
        vector<int> result;
        deque<int> dq;
        
        for (int i = 0; i < nums.size(); i++) {
            // Remove elements out of window from front
            if (!dq.empty() && dq.front() == i - k) {
                dq.pop_front();
            }
            
            // Remove smaller elements from back
            while (!dq.empty() && nums[dq.back()] < nums[i]) {
                dq.pop_back();
            }
            
            dq.push_back(i);
            
            // Add to result once window size is reached
            if (i >= k - 1) {
                result.push_back(nums[dq.front()]);
            }
        }
        
        return result;
    }
};`,notes:"Time: O(n), Space: O(k)",comments:[{author:"DequeExpert",content:"Perfect use of deque! Maintains decreasing order of values in window."},{author:"CodeReviewer42",content:"Stores indices in deque instead of values for easy window boundary checking."},{author:"OptimizationExpert",content:"Each element pushed and popped at most once, so O(n) time."},{author:"AlternativeThinker",content:"We could use heap for O(n log k), but deque gives optimal O(n)."}]},{problemName:"Minimum Window Substring",author:"Sliding Window Pro",explanation:"Use two pointers and hash map. Expand right pointer until all characters are included, then contract left pointer to find minimum window.",solution:`class Solution {
public:
    string minWindow(string s, string t) {
        unordered_map<char, int> target, window;
        for (char c : t) target[c]++;
        
        int left = 0, right = 0;
        int required = target.size();
        int formed = 0;
        int minLen = INT_MAX;
        int start = 0;
        
        while (right < s.length()) {
            char c = s[right];
            window[c]++;
            
            if (target.count(c) && window[c] == target[c]) {
                formed++;
            }
            
            while (left <= right && formed == required) {
                // Update minimum window
                if (right - left + 1 < minLen) {
                    minLen = right - left + 1;
                    start = left;
                }
                
                // Contract window from left
                char leftChar = s[left];
                window[leftChar]--;
                if (target.count(leftChar) && window[leftChar] < target[leftChar]) {
                    formed--;
                }
                left++;
            }
            
            right++;
        }
        
        return minLen == INT_MAX ? "" : s.substr(start, minLen);
    }
};`,notes:"Time: O(m + n), Space: O(m + n)",comments:[{author:"SlidingWindowExpert",content:"Classic sliding window with character counting! Expand and contract strategy."},{author:"CodeReviewer42",content:"Good use of 'formed' counter to track when all characters are satisfied."},{author:"OptimizationExpert",content:"Each character processed at most twice (by left and right pointers), so O(n)."},{author:"AlternativeThinker",content:"We could use array instead of hash map since characters are limited, but hash map is more general."}]},{problemName:"Largest Rectangle in Histogram",author:"Stack Calculator",explanation:"Use stack to track indices of increasing heights. When smaller height found, calculate area with stack top as smallest height.",solution:`class Solution {
public:
    int largestRectangleArea(vector<int>& heights) {
        stack<int> st;
        int maxArea = 0;
        int n = heights.size();
        
        for (int i = 0; i <= n; i++) {
            int currentHeight = (i == n) ? 0 : heights[i];
            
            while (!st.empty() && currentHeight < heights[st.top()]) {
                int height = heights[st.top()];
                st.pop();
                int width = st.empty() ? i : i - st.top() - 1;
                maxArea = max(maxArea, height * width);
            }
            
            st.push(i);
        }
        
        return maxArea;
    }
};`,notes:"Time: O(n), Space: O(n)",comments:[{author:"StackMaster",content:"Brilliant stack-based solution! Maintains increasing height indices."},{author:"CodeReviewer42",content:"Adding sentinel height 0 at the end ensures all bars are processed."},{author:"AlgorithmEnthusiast",content:"The width calculation using stack indices is the key insight."},{author:"AlternativeThinker",content:"We could use divide and conquer for O(n log n), but stack gives optimal O(n)."}]},{problemName:"Maximal Rectangle",author:"Histogram Transformer",explanation:"For each row, build histogram of consecutive 1's from top, then apply largest rectangle in histogram to each row.",solution:`class Solution {
public:
    int maximalRectangle(vector<vector<char>>& matrix) {
        if (matrix.empty()) return 0;
        
        int m = matrix.size(), n = matrix[0].size();
        vector<int> heights(n, 0);
        int maxArea = 0;
        
        for (int i = 0; i < m; i++) {
            // Update heights for current row
            for (int j = 0; j < n; j++) {
                if (matrix[i][j] == '1') {
                    heights[j]++;
                } else {
                    heights[j] = 0;
                }
            }
            // Calculate max area for current histogram
            maxArea = max(maxArea, largestRectangleArea(heights));
        }
        
        return maxArea;
    }
    
private:
    int largestRectangleArea(vector<int>& heights) {
        stack<int> st;
        int maxArea = 0;
        int n = heights.size();
        
        for (int i = 0; i <= n; i++) {
            int h = (i == n) ? 0 : heights[i];
            while (!st.empty() && h < heights[st.top()]) {
                int height = heights[st.top()];
                st.pop();
                int width = st.empty() ? i : i - st.top() - 1;
                maxArea = max(maxArea, height * width);
            }
            st.push(i);
        }
        return maxArea;
    }
};`,notes:"Time: O(m*n), Space: O(n)",comments:[{author:"DPAndStackExpert",content:"Clever reduction to histogram problem! Build histogram row by row."},{author:"CodeReviewer42",content:"Reuses the histogram solution efficiently for each row."},{author:"OptimizationExpert",content:"O(n) space for heights array, and O(n) for stack in each row processing."},{author:"AlternativeThinker",content:"We could use DP with left/right boundaries, but this approach is more intuitive."}]},{problemName:"Count of Smaller Numbers After Self",author:"Merge Sort Counter",explanation:"Use merge sort with counting. During merge process, count how many elements from right array are smaller than current left element.",solution:`class Solution {
public:
    vector<int> countSmaller(vector<int>& nums) {
        int n = nums.size();
        vector<int> result(n, 0);
        vector<pair<int, int>> indexedNums; // (value, original index)
        
        for (int i = 0; i < n; i++) {
            indexedNums.push_back({nums[i], i});
        }
        
        mergeSort(indexedNums, 0, n - 1, result);
        return result;
    }
    
private:
    void mergeSort(vector<pair<int, int>>& nums, int left, int right, vector<int>& result) {
        if (left >= right) return;
        
        int mid = left + (right - left) / 2;
        mergeSort(nums, left, mid, result);
        mergeSort(nums, mid + 1, right, result);
        merge(nums, left, mid, right, result);
    }
    
    void merge(vector<pair<int, int>>& nums, int left, int mid, int right, vector<int>& result) {
        vector<pair<int, int>> temp(right - left + 1);
        int i = left, j = mid + 1, k = 0;
        int rightCount = 0;
        
        while (i <= mid && j <= right) {
            if (nums[i].first > nums[j].first) {
                rightCount++;
                temp[k++] = nums[j++];
            } else {
                result[nums[i].second] += rightCount;
                temp[k++] = nums[i++];
            }
        }
        
        while (i <= mid) {
            result[nums[i].second] += rightCount;
            temp[k++] = nums[i++];
        }
        
        while (j <= right) {
            temp[k++] = nums[j++];
        }
        
        for (int p = 0; p < temp.size(); p++) {
            nums[left + p] = temp[p];
        }
    }
};`,notes:"Time: O(n log n), Space: O(n)",comments:[{author:"MergeSortExpert",content:"Brilliant use of merge sort for counting inversions! Classic divide and conquer."},{author:"CodeReviewer42",content:"Stores original indices to update result array correctly during merge."},{author:"AlgorithmEnthusiast",content:"The rightCount tracks how many elements from right are smaller than current left."},{author:"AlternativeThinker",content:"We could use BST or Fenwick tree, but merge sort is elegant and efficient."}]},{problemName:"Candy",author:"Greedy Distributor",explanation:"Two passes: left to right ensuring right neighbor has more if rating is higher, then right to left ensuring left neighbor has more if rating is higher.",solution:`class Solution {
public:
    int candy(vector<int>& ratings) {
        int n = ratings.size();
        vector<int> candies(n, 1);
        
        // Left to right pass
        for (int i = 1; i < n; i++) {
            if (ratings[i] > ratings[i - 1]) {
                candies[i] = candies[i - 1] + 1;
            }
        }
        
        // Right to left pass
        for (int i = n - 2; i >= 0; i--) {
            if (ratings[i] > ratings[i + 1]) {
                candies[i] = max(candies[i], candies[i + 1] + 1);
            }
        }
        
        return accumulate(candies.begin(), candies.end(), 0);
    }
};`,notes:"Time: O(n), Space: O(n)",comments:[{author:"GreedyAlgorithmist",content:"Classic two-pass greedy! Ensures both left and right constraints are satisfied."},{author:"CodeReviewer42",content:"The second pass uses max() to preserve candies from first pass."},{author:"OptimizationExpert",content:"We could do this in O(1) space with careful tracking, but O(n) is acceptable."},{author:"AlternativeThinker",content:"Single pass with peak detection is possible but more complex."}]},{problemName:"N-Queens",author:"Backtracking Queen",explanation:"Use backtracking with three sets to track attacked columns and diagonals. Place queens row by row, checking conflicts.",solution:`class Solution {
public:
    vector<vector<string>> solveNQueens(int n) {
        vector<vector<string>> solutions;
        vector<string> board(n, string(n, '.'));
        unordered_set<int> cols, diag1, diag2;
        backtrack(0, n, board, solutions, cols, diag1, diag2);
        return solutions;
    }
    
private:
    void backtrack(int row, int n, vector<string>& board, vector<vector<string>>& solutions,
                  unordered_set<int>& cols, unordered_set<int>& diag1, unordered_set<int>& diag2) {
        if (row == n) {
            solutions.push_back(board);
            return;
        }
        
        for (int col = 0; col < n; col++) {
            if (cols.count(col) || diag1.count(row - col) || diag2.count(row + col)) {
                continue;
            }
            
            // Place queen
            board[row][col] = 'Q';
            cols.insert(col);
            diag1.insert(row - col);
            diag2.insert(row + col);
            
            // Recurse
            backtrack(row + 1, n, board, solutions, cols, diag1, diag2);
            
            // Remove queen
            board[row][col] = '.';
            cols.erase(col);
            diag1.erase(row - col);
            diag2.erase(row + col);
        }
    }
};`,notes:"Time: O(n!), Space: O(n)",comments:[{author:"BacktrackingMaster",content:"Classic backtracking with pruning! Uses three sets for efficient conflict checking."},{author:"CodeReviewer42",content:"Clean marking/unmarking of attacked positions using sets."},{author:"OptimizationExpert",content:"We could use bit masks for better performance, but sets are more readable."},{author:"AlternativeThinker",content:"Iterative solutions exist but recursive backtracking is more natural for this problem."}]},{problemName:"Intersection of Two Arrays",author:"Set Operator",explanation:"Convert both arrays to sets, then find the intersection using set operations.",solution:`class Solution {
public:
    vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {
        unordered_set<int> set1(nums1.begin(), nums1.end());
        unordered_set<int> resultSet;
        
        for (int num : nums2) {
            if (set1.count(num)) {
                resultSet.insert(num);
            }
        }
        
        return vector<int>(resultSet.begin(), resultSet.end());
    }
};`,notes:"Time: O(n + m), Space: O(n + m)",comments:[{author:"SetMaster",content:"Clean set-based solution! Automatically handles duplicates."},{author:"CodeReviewer42",content:"Using unordered_set for O(1) lookups. Efficient and readable."},{author:"AlternativeThinker",content:"We could also sort both arrays and use two pointers for O(1) space."},{author:"OptimizationExpert",content:"If one array is much larger, it's better to put the smaller one in the set."}]},{problemName:"Happy Number",author:"Cycle Detector",explanation:"Use a set to detect cycles. Keep calculating sum of squares of digits until we reach 1 or detect a cycle.",solution:`class Solution {
public:
    bool isHappy(int n) {
        unordered_set<int> seen;
        
        while (n != 1 && !seen.count(n)) {
            seen.insert(n);
            n = getNext(n);
        }
        
        return n == 1;
    }
    
private:
    int getNext(int n) {
        int sum = 0;
        while (n > 0) {
            int digit = n % 10;
            sum += digit * digit;
            n /= 10;
        }
        return sum;
    }
};`,notes:"Time: O(log n), Space: O(log n)",comments:[{author:"CycleDetectionExpert",content:"Perfect cycle detection using hash set! All non-happy numbers eventually cycle."},{author:"CodeReviewer42",content:"Clean separation of digit sum calculation into helper function."},{author:"MathGeek",content:"Mathematically proven that all numbers either reach 1 or enter cycle 4→16→37→58→89→145→42→20→4"},{author:"AlternativeThinker",content:"We could use Floyd's cycle detection for O(1) space, but set is more readable."}]},{problemName:"Isomorphic Strings",author:"Mapping Validator",explanation:"Use two hash maps to track character mappings in both directions. Ensure one-to-one mapping between characters.",solution:`class Solution {
public:
    bool isIsomorphic(string s, string t) {
        if (s.length() != t.length()) return false;
        
        unordered_map<char, char> sToT;
        unordered_map<char, char> tToS;
        
        for (int i = 0; i < s.length(); i++) {
            char charS = s[i];
            char charT = t[i];
            
            // Check mapping from s to t
            if (sToT.count(charS)) {
                if (sToT[charS] != charT) {
                    return false;
                }
            } else {
                sToT[charS] = charT;
            }
            
            // Check mapping from t to s
            if (tToS.count(charT)) {
                if (tToS[charT] != charS) {
                    return false;
                }
            } else {
                tToS[charT] = charS;
            }
        }
        
        return true;
    }
};`,notes:"Time: O(n), Space: O(1) since limited to 256 ASCII characters",comments:[{author:"MappingExpert",content:"Good use of bidirectional mapping! Prevents many-to-one mappings."},{author:"CodeReviewer42",content:"Clean validation of both directions ensures true isomorphism."},{author:"EdgeCaseHunter",content:"Handles cases like 'ab' vs 'aa' and 'aa' vs 'ab' correctly."},{author:"AlternativeThinker",content:"We could use array of size 256 instead of hash maps for slightly better performance."}]},{problemName:"Word Pattern",author:"Pattern Matcher",explanation:"Similar to isomorphic strings. Use two hash maps to track pattern-character to word mapping and word to pattern-character mapping.",solution:`class Solution {
public:
    bool wordPattern(string pattern, string s) {
        unordered_map<char, string> charToWord;
        unordered_map<string, char> wordToChar;
        
        vector<string> words;
        stringstream ss(s);
        string word;
        
        // Split string into words
        while (ss >> word) {
            words.push_back(word);
        }
        
        if (pattern.length() != words.size()) {
            return false;
        }
        
        for (int i = 0; i < pattern.length(); i++) {
            char c = pattern[i];
            string w = words[i];
            
            // Check char to word mapping
            if (charToWord.count(c)) {
                if (charToWord[c] != w) {
                    return false;
                }
            } else {
                charToWord[c] = w;
            }
            
            // Check word to char mapping
            if (wordToChar.count(w)) {
                if (wordToChar[w] != c) {
                    return false;
                }
            } else {
                wordToChar[w] = c;
            }
        }
        
        return true;
    }
};`,notes:"Time: O(n), Space: O(n)",comments:[{author:"PatternMatchingExpert",content:"Extends isomorphic strings concept to word patterns!"},{author:"CodeReviewer42",content:"Good use of stringstream for word splitting. Handles multiple spaces correctly."},{author:"EdgeCaseHunter",content:"Important length check at the beginning prevents mismatched patterns."},{author:"AlternativeThinker",content:"We could use istringstream for more modern C++ string splitting."}]},{problemName:"Longest Consecutive Sequence",author:"Sequence Finder",explanation:"Use hash set for O(1) lookups. For each number, check if it's the start of a sequence (no num-1 exists), then expand sequence.",solution:`class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        unordered_set<int> numSet(nums.begin(), nums.end());
        int longest = 0;
        
        for (int num : numSet) {
            // Check if this is the start of a sequence
            if (!numSet.count(num - 1)) {
                int currentNum = num;
                int currentStreak = 1;
                
                // Expand the sequence
                while (numSet.count(currentNum + 1)) {
                    currentNum++;
                    currentStreak++;
                }
                
                longest = max(longest, currentStreak);
            }
        }
        
        return longest;
    }
};`,notes:"Time: O(n), Space: O(n)",comments:[{author:"SequenceExpert",content:"Brilliant O(n) solution! Only starts sequences from actual starting points."},{author:"CodeReviewer42",content:"The key insight: only check sequences starting from numbers without num-1."},{author:"OptimizationExpert",content:"Each number is part of exactly one sequence, so O(n) time overall."},{author:"AlternativeThinker",content:"Sorting would give O(n log n), but this hash set approach is optimal."}]},{problemName:"Insert Delete GetRandom O(1)",author:"Data Structure Designer",explanation:"Combine hash map (for O(1) lookups) with vector (for O(1) random access). When deleting, swap with last element.",solution:`class RandomizedSet {
private:
    unordered_map<int, int> valToIndex; // value to index in vector
    vector<int> values;
    
public:
    RandomizedSet() {}
    
    bool insert(int val) {
        if (valToIndex.count(val)) {
            return false;
        }
        valToIndex[val] = values.size();
        values.push_back(val);
        return true;
    }
    
    bool remove(int val) {
        if (!valToIndex.count(val)) {
            return false;
        }
        
        // Swap with last element
        int lastElement = values.back();
        int indexToRemove = valToIndex[val];
        
        values[indexToRemove] = lastElement;
        valToIndex[lastElement] = indexToRemove;
        
        // Remove last element
        values.pop_back();
        valToIndex.erase(val);
        
        return true;
    }
    
    int getRandom() {
        int randomIndex = rand() % values.size();
        return values[randomIndex];
    }
};`,notes:"Time: O(1) for all operations, Space: O(n)",comments:[{author:"DSDesigner",content:"Clever combination of hash map and vector! Enables all O(1) operations."},{author:"CodeReviewer42",content:"The swap-and-pop technique for deletion maintains O(1) time."},{author:"EdgeCaseHunter",content:"Handles removal of last element correctly with the swap."},{author:"AlternativeThinker",content:"We need to update the index of the swapped element in the hash map."}]},{problemName:"Design Underground System",author:"System Designer",explanation:"Use two hash maps: one for active check-ins, another for aggregating travel times between stations.",solution:`class UndergroundSystem {
private:
    unordered_map<int, pair<string, int>> checkIns; // id -> {stationName, time}
    unordered_map<string, pair<int, int>> travelTimes; // "start->end" -> {totalTime, count}
    
public:
    UndergroundSystem() {}
    
    void checkIn(int id, string stationName, int t) {
        checkIns[id] = {stationName, t};
    }
    
    void checkOut(int id, string stationName, int t) {
        auto& checkIn = checkIns[id];
        string startStation = checkIn.first;
        int startTime = checkIn.second;
        
        string route = startStation + "->" + stationName;
        int travelTime = t - startTime;
        
        travelTimes[route].first += travelTime;
        travelTimes[route].second++;
        
        checkIns.erase(id);
    }
    
    double getAverageTime(string startStation, string endStation) {
        string route = startStation + "->" + endStation;
        auto& data = travelTimes[route];
        return (double)data.first / data.second;
    }
};`,notes:"Time: O(1) for all operations, Space: O(n + m) where n is active trips, m is routes",comments:[{author:"SystemDesignExpert",content:"Clean separation of check-in data and travel time aggregation!"},{author:"CodeReviewer42",content:"Good use of pair to store total time and count for easy average calculation."},{author:"EdgeCaseHunter",content:"Properly removes check-in record after checkout to prevent memory leaks."},{author:"AlternativeThinker",content:"We could use nested hash maps for station pairs, but string concatenation is simpler."}]},{problemName:"Find Duplicate File in System",author:"File System Parser",explanation:"Parse each file path to extract content and use hash map to group files by content.",solution:`class Solution {
public:
    vector<vector<string>> findDuplicate(vector<string>& paths) {
        unordered_map<string, vector<string>> contentToFiles;
        
        for (string& path : paths) {
            stringstream ss(path);
            string directory;
            ss >> directory;
            
            string fileInfo;
            while (ss >> fileInfo) {
                // Parse filename(content)
                int openParen = fileInfo.find('(');
                string filename = fileInfo.substr(0, openParen);
                string content = fileInfo.substr(openParen + 1, fileInfo.length() - openParen - 2);
                
                string fullPath = directory + "/" + filename;
                contentToFiles[content].push_back(fullPath);
            }
        }
        
        // Collect groups with duplicates
        vector<vector<string>> result;
        for (auto& [content, files] : contentToFiles) {
            if (files.size() > 1) {
                result.push_back(files);
            }
        }
        
        return result;
    }
};`,notes:"Time: O(n * m) where n is paths, m is files per path, Space: O(n)",comments:[{author:"StringParser",content:"Good string parsing with stringstream and find! Handles the format well."},{author:"CodeReviewer42",content:"Clean extraction of filename and content using substring operations."},{author:"EdgeCaseHunter",content:"Properly handles the parentheses and builds correct file paths."},{author:"AlternativeThinker",content:"We could use regex for more robust parsing, but this is efficient and clear."}]},{problemName:"Brick Wall",author:"Edge Counter",explanation:"Use hash map to count edges at each position. The solution is total rows minus maximum edges at any position.",solution:`class Solution {
public:
    int leastBricks(vector<vector<int>>& wall) {
        unordered_map<int, int> edgeCount;
        int maxEdges = 0;
        
        for (auto& row : wall) {
            int position = 0;
            // Don't include the last edge (end of wall)
            for (int i = 0; i < row.size() - 1; i++) {
                position += row[i];
                edgeCount[position]++;
                maxEdges = max(maxEdges, edgeCount[position]);
            }
        }
        
        return wall.size() - maxEdges;
    }
};`,notes:"Time: O(n * m), Space: O(n)",comments:[{author:"EdgeCountingExpert",content:"Clever insight! The weak point is where most edges align."},{author:"CodeReviewer42",content:"Important to skip the last edge since all rows end at the same position."},{author:"OptimizationExpert",content:"We only need to track the maximum, not all edge counts."},{author:"AlternativeThinker",content:"We could use prefix sums for each row, but this cumulative approach is simpler."}]},{problemName:"Contiguous Array",author:"Prefix Sum Balancer",explanation:"Treat 0 as -1 and 1 as +1. Use hash map to track first occurrence of each prefix sum. Maximum subarray is between equal prefix sums.",solution:`class Solution {
public:
    int findMaxLength(vector<int>& nums) {
        unordered_map<int, int> prefixSumIndex;
        prefixSumIndex[0] = -1; // Empty subarray has sum 0
        
        int maxLength = 0;
        int prefixSum = 0;
        
        for (int i = 0; i < nums.size(); i++) {
            // Treat 0 as -1, 1 as +1
            prefixSum += (nums[i] == 0) ? -1 : 1;
            
            if (prefixSumIndex.count(prefixSum)) {
                maxLength = max(maxLength, i - prefixSumIndex[prefixSum]);
            } else {
                prefixSumIndex[prefixSum] = i;
            }
        }
        
        return maxLength;
    }
};`,notes:"Time: O(n), Space: O(n)",comments:[{author:"PrefixSumMaster",content:"Brilliant transformation! Equal numbers of 0s and 1s means sum = 0."},{author:"CodeReviewer42",content:"The initial prefixSumIndex[0] = -1 handles subarrays starting from index 0."},{author:"OptimizationExpert",content:"Only stores first occurrence of each prefix sum for maximum length."},{author:"AlternativeThinker",content:"We could use array instead of hash map since sum range is limited to [-n, n]."}]},{problemName:"Find All Duplicates in an Array",author:"In-Place Marker",explanation:"Use the array itself as a marker. For each number, mark the position (num-1) as negative. If already negative, it's a duplicate.",solution:`class Solution {
public:
    vector<int> findDuplicates(vector<int>& nums) {
        vector<int> result;
        
        for (int i = 0; i < nums.size(); i++) {
            int index = abs(nums[i]) - 1;
            
            if (nums[index] < 0) {
                result.push_back(index + 1);
            } else {
                nums[index] = -nums[index];
            }
        }
        
        return result;
    }
};`,notes:"Time: O(n), Space: O(1) excluding result",comments:[{author:"InPlaceAlgorithmist",content:"Clever negative marking technique! O(1) space by using array as marker."},{author:"CodeReviewer42",content:"Uses abs() to handle already negative numbers during processing."},{author:"EdgeCaseHunter",content:"Works because numbers are between 1 and n, and array size is n."},{author:"AlternativeThinker",content:"We could use hash set for O(n) space, but this in-place approach is optimal."}]},{problemName:"Encode and Decode TinyURL",author:"URL Shortener",explanation:"Use hash map to store mapping from short URL to long URL. Generate random short codes.",solution:`class Solution {
private:
    unordered_map<string, string> urlMap;
    string characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    string baseUrl = "http://tinyurl.com/";
    
public:
    // Encodes a URL to a shortened URL.
    string encode(string longUrl) {
        string shortCode;
        do {
            shortCode = generateRandomCode();
        } while (urlMap.count(baseUrl + shortCode));
        
        string shortUrl = baseUrl + shortCode;
        urlMap[shortUrl] = longUrl;
        return shortUrl;
    }
    
    // Decodes a shortened URL to its original URL.
    string decode(string shortUrl) {
        return urlMap[shortUrl];
    }
    
private:
    string generateRandomCode() {
        string code;
        for (int i = 0; i < 6; i++) {
            code += characters[rand() % characters.length()];
        }
        return code;
    }
};`,notes:"Time: O(1) for both operations, Space: O(n)",comments:[{author:"URLShorteningExpert",content:"Practical implementation! Handles potential collisions with do-while loop."},{author:"CodeReviewer42",content:"Good character set for URL-friendly short codes."},{author:"EdgeCaseHunter",content:"Checks for existing codes to prevent overwriting."},{author:"AlternativeThinker",content:"We could use counter-based encoding for guaranteed uniqueness, but random is more secure."}]},{problemName:"Sudoku Solver",author:"Backtracking Solver",explanation:"Use backtracking with three sets to track used numbers in rows, columns, and boxes. Try all possibilities for empty cells.",solution:`class Solution {
public:
    void solveSudoku(vector<vector<char>>& board) {
        solve(board);
    }
    
private:
    bool solve(vector<vector<char>>& board) {
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                if (board[i][j] == '.') {
                    for (char c = '1'; c <= '9'; c++) {
                        if (isValid(board, i, j, c)) {
                            board[i][j] = c;
                            if (solve(board)) {
                                return true;
                            }
                            board[i][j] = '.'; // backtrack
                        }
                    }
                    return false; // no valid number found
                }
            }
        }
        return true; // all cells filled
    }
    
    bool isValid(vector<vector<char>>& board, int row, int col, char c) {
        for (int i = 0; i < 9; i++) {
            // Check row
            if (board[row][i] == c) return false;
            // Check column
            if (board[i][col] == c) return false;
            // Check 3x3 box
            if (board[3 * (row / 3) + i / 3][3 * (col / 3) + i % 3] == c) return false;
        }
        return true;
    }
};`,notes:"Time: O(9^(n*n)) but heavily pruned, Space: O(1)",comments:[{author:"BacktrackingMaster",content:"Classic backtracking! Tries all possibilities with pruning."},{author:"CodeReviewer42",content:"Clean isValid function checks row, column and box efficiently."},{author:"OptimizationExpert",content:"We could precompute possible numbers for each cell to reduce branching."},{author:"AlternativeThinker",content:"Dancing Links algorithm is more efficient but much more complex."}]},{problemName:"Word Squares",author:"Prefix Builder",explanation:"Use backtracking with trie or hash map for prefix lookup. Build square row by row, ensuring each prefix matches corresponding column.",solution:`class Solution {
public:
    vector<vector<string>> wordSquares(vector<string>& words) {
        unordered_map<string, vector<string>> prefixMap;
        int n = words[0].size();
        
        // Build prefix map
        for (string& word : words) {
            for (int i = 0; i <= n; i++) {
                string prefix = word.substr(0, i);
                prefixMap[prefix].push_back(word);
            }
        }
        
        vector<vector<string>> result;
        vector<string> square;
        backtrack(0, n, square, prefixMap, result);
        return result;
    }
    
private:
    void backtrack(int row, int n, vector<string>& square, 
                   unordered_map<string, vector<string>>& prefixMap,
                   vector<vector<string>>& result) {
        if (row == n) {
            result.push_back(square);
            return;
        }
        
        // Build prefix for current row
        string prefix;
        for (int i = 0; i < row; i++) {
            prefix += square[i][row];
        }
        
        // Get words with matching prefix
        for (string& word : prefixMap[prefix]) {
            square.push_back(word);
            backtrack(row + 1, n, square, prefixMap, result);
            square.pop_back();
        }
    }
};`,notes:"Time: O(n * 26^n) in worst case, Space: O(n * L) where L is total characters",comments:[{author:"WordSquareExpert",content:"Clever prefix-based backtracking! Ensures column prefixes match row prefixes."},{author:"CodeReviewer42",content:"Good prefix map that stores all prefixes from length 0 to n."},{author:"OptimizationExpert",content:"Using trie instead of hash map could be more memory efficient for large inputs."},{author:"AlternativeThinker",content:"We could prune early when no words match the required prefix."}]},{problemName:"Valid Palindrome",author:"Two Pointer Validator",explanation:"Use two pointers from both ends, skipping non-alphanumeric characters. Compare characters case-insensitively.",solution:`class Solution {
public:
    bool isPalindrome(string s) {
        int left = 0, right = s.length() - 1;
        
        while (left < right) {
            // Skip non-alphanumeric characters from left
            while (left < right && !isalnum(s[left])) {
                left++;
            }
            // Skip non-alphanumeric characters from right
            while (left < right && !isalnum(s[right])) {
                right--;
            }
            
            // Compare characters case-insensitively
            if (tolower(s[left]) != tolower(s[right])) {
                return false;
            }
            
            left++;
            right--;
        }
        
        return true;
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"TwoPointerExpert",content:"Clean two-pointer approach! Handles all edge cases elegantly."},{author:"CodeReviewer42",content:"Good use of isalnum() and tolower() for proper character handling."},{author:"EdgeCaseHunter",content:"Handles empty string, single character, and strings with only non-alphanumeric characters."},{author:"AlternativeThinker",content:"We could filter first then check, but this avoids extra space usage."}]},{problemName:"Valid Anagram",author:"Frequency Counter",explanation:"Use frequency array to count characters in both strings. Compare if frequencies match.",solution:`class Solution {
public:
    bool isAnagram(string s, string t) {
        if (s.length() != t.length()) return false;
        
        vector<int> freq(26, 0);
        
        // Count characters in s
        for (char c : s) {
            freq[c - 'a']++;
        }
        
        // Decrement counts for characters in t
        for (char c : t) {
            freq[c - 'a']--;
            if (freq[c - 'a'] < 0) {
                return false;
            }
        }
        
        return true;
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"FrequencyMaster",content:"Efficient array-based solution! O(1) space for English letters."},{author:"CodeReviewer42",content:"Early return when frequency becomes negative improves efficiency."},{author:"OptimizationExpert",content:"For Unicode, we'd need hash map, but array is faster for English."},{author:"AlternativeThinker",content:"We could sort both strings and compare for O(n log n) time, O(1) space."}]},{problemName:"First Unique Character in a String",author:"Frequency Analyzer",explanation:"First pass: count frequency of each character. Second pass: find first character with frequency 1.",solution:`class Solution {
public:
    int firstUniqChar(string s) {
        vector<int> freq(26, 0);
        
        // Count frequencies
        for (char c : s) {
            freq[c - 'a']++;
        }
        
        // Find first unique character
        for (int i = 0; i < s.length(); i++) {
            if (freq[s[i] - 'a'] == 1) {
                return i;
            }
        }
        
        return -1;
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"TwoPassExpert",content:"Efficient two-pass approach! O(n) time with O(1) space."},{author:"CodeReviewer42",content:"Clean separation of frequency counting and unique character finding."},{author:"OptimizationExpert",content:"Array is more efficient than hash map for limited character set."},{author:"AlternativeThinker",content:"We could store both frequency and first index in one pass with linked hash map."}]},{problemName:"Reverse String",author:"Two Pointer Reverser",explanation:"Use two pointers from both ends, swap characters until they meet in the middle.",solution:`class Solution {
public:
    void reverseString(vector<char>& s) {
        int left = 0, right = s.size() - 1;
        
        while (left < right) {
            swap(s[left], s[right]);
            left++;
            right--;
        }
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"TwoPointerMaster",content:"Classic two-pointer string reversal! In-place and efficient."},{author:"CodeReviewer42",content:"Clean and straightforward. No extra space needed."},{author:"EdgeCaseHunter",content:"Handles empty array and single character correctly."},{author:"AlternativeThinker",content:"We could use STL reverse, but understanding the algorithm is important."}]},{problemName:"Reverse Integer",author:"Digit Reverser",explanation:"Process digits from right to left, building reversed number. Check for integer overflow at each step.",solution:`class Solution {
public:
    int reverse(int x) {
        int reversed = 0;
        
        while (x != 0) {
            int digit = x % 10;
            x /= 10;
            
            // Check for overflow before multiplying
            if (reversed > INT_MAX / 10 || (reversed == INT_MAX / 10 && digit > 7)) {
                return 0;
            }
            if (reversed < INT_MIN / 10 || (reversed == INT_MIN / 10 && digit < -8)) {
                return 0;
            }
            
            reversed = reversed * 10 + digit;
        }
        
        return reversed;
    }
};`,notes:"Time: O(log x), Space: O(1)",comments:[{author:"OverflowExpert",content:"Good overflow checking! Prevents undefined behavior."},{author:"CodeReviewer42",content:"Checks overflow before the actual multiplication and addition."},{author:"EdgeCaseHunter",content:"Handles negative numbers correctly through modulo and division."},{author:"AlternativeThinker",content:"We could use long long for intermediate storage, but this is more space efficient."}]},{problemName:"Implement strStr()",author:"String Matcher",explanation:"Use sliding window to check each possible starting position. For each position, check if substring matches needle.",solution:`class Solution {
public:
    int strStr(string haystack, string needle) {
        int n = haystack.length();
        int m = needle.length();
        
        if (m == 0) return 0;
        if (n < m) return -1;
        
        for (int i = 0; i <= n - m; i++) {
            int j = 0;
            while (j < m && haystack[i + j] == needle[j]) {
                j++;
            }
            if (j == m) {
                return i;
            }
        }
        
        return -1;
    }
};`,notes:"Time: O(n * m), Space: O(1)",comments:[{author:"StringMatchingExpert",content:"Straightforward sliding window approach! Good for small patterns."},{author:"CodeReviewer42",content:"Proper handling of edge cases: empty needle and shorter haystack."},{author:"OptimizationExpert",content:"For large inputs, KMP algorithm would be more efficient with O(n + m) time."},{author:"AlternativeThinker",content:"We could use Rabin-Karp with rolling hash for average O(n + m) time."}]},{problemName:"Longest Common Prefix",author:"Vertical Scanner",explanation:"Compare characters vertically (same position across all strings). Stop when characters don't match.",solution:`class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        if (strs.empty()) return "";
        
        for (int i = 0; i < strs[0].length(); i++) {
            char c = strs[0][i];
            for (int j = 1; j < strs.size(); j++) {
                if (i >= strs[j].length() || strs[j][i] != c) {
                    return strs[0].substr(0, i);
                }
            }
        }
        
        return strs[0];
    }
};`,notes:"Time: O(S) where S is total characters, Space: O(1)",comments:[{author:"VerticalScanner",content:"Efficient vertical scanning! Stops early when mismatch found."},{author:"CodeReviewer42",content:"Good bounds checking with i >= strs[j].length()."},{author:"OptimizationExpert",content:"Worst case is when all strings are identical, O(n * m) time."},{author:"AlternativeThinker",content:"We could use divide and conquer or binary search, but this is simpler."}]},{problemName:"Valid Parentheses",author:"Stack Validator",explanation:"Use stack to track opening brackets. When closing bracket found, check if it matches top of stack.",solution:`class Solution {
public:
    bool isValid(string s) {
        stack<char> st;
        unordered_map<char, char> matching = {
            {')', '('},
            {']', '['},
            {'}', '{'}
        };
        
        for (char c : s) {
            if (c == '(' || c == '[' || c == '{') {
                st.push(c);
            } else {
                if (st.empty() || st.top() != matching[c]) {
                    return false;
                }
                st.pop();
            }
        }
        
        return st.empty();
    }
};`,notes:"Time: O(n), Space: O(n)",comments:[{author:"StackMaster",content:"Classic stack application! Perfect for nested bracket matching."},{author:"CodeReviewer42",content:"Good use of hash map for clean bracket matching logic."},{author:"EdgeCaseHunter",content:"Final check st.empty() ensures all brackets are closed."},{author:"AlternativeThinker",content:"We could use counter method for single bracket type, but stack handles all types."}]},{problemName:"Roman to Integer",author:"Roman Numerals Converter",explanation:"Process from left to right. If current value is less than next value, subtract current value, otherwise add it.",solution:`class Solution {
public:
    int romanToInt(string s) {
        unordered_map<char, int> values = {
            {'I', 1},
            {'V', 5},
            {'X', 10},
            {'L', 50},
            {'C', 100},
            {'D', 500},
            {'M', 1000}
        };
        
        int result = 0;
        int n = s.length();
        
        for (int i = 0; i < n; i++) {
            int current = values[s[i]];
            int next = (i < n - 1) ? values[s[i + 1]] : 0;
            
            if (current < next) {
                result -= current;
            } else {
                result += current;
            }
        }
        
        return result;
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"RomanExpert",content:"Clever left-to-right processing! Handles subtractive notation correctly."},{author:"CodeReviewer42",content:"Good use of hash map for clean value lookup."},{author:"EdgeCaseHunter",content:"Proper bounds checking for next value lookup."},{author:"AlternativeThinker",content:"We could process right-to-left and always add, checking if we need to subtract previous."}]},{problemName:"Count and Say",author:"Sequence Generator",explanation:"Iteratively generate each term from previous term. Count consecutive same digits and append count-digit pairs.",solution:`class Solution {
public:
    string countAndSay(int n) {
        if (n == 1) return "1";
        
        string prev = "1";
        for (int i = 2; i <= n; i++) {
            string current = "";
            int count = 1;
            char digit = prev[0];
            
            for (int j = 1; j < prev.length(); j++) {
                if (prev[j] == digit) {
                    count++;
                } else {
                    current += to_string(count) + digit;
                    count = 1;
                    digit = prev[j];
                }
            }
            current += to_string(count) + digit;
            prev = current;
        }
        
        return prev;
    }
};`,notes:"Time: O(2^n) in worst case, Space: O(2^(n-1))",comments:[{author:"SequenceGenerator",content:"Iterative generation! Each term builds on previous term."},{author:"CodeReviewer42",content:"Clean counting of consecutive digits with string building."},{author:"EdgeCaseHunter",content:"Handles n=1 as base case correctly."},{author:"AlternativeThinker",content:"We could use recursion, but iterative is more space efficient."}]},{problemName:"Longest Substring Without Repeating Characters",author:"Sliding Window Expert",explanation:"Use sliding window with hash set. Expand right pointer, when duplicate found, shrink left pointer until duplicate removed.",solution:`class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        unordered_set<char> window;
        int left = 0, maxLength = 0;
        
        for (int right = 0; right < s.length(); right++) {
            // Shrink window until no duplicate
            while (window.count(s[right])) {
                window.erase(s[left]);
                left++;
            }
            
            window.insert(s[right]);
            maxLength = max(maxLength, right - left + 1);
        }
        
        return maxLength;
    }
};`,notes:"Time: O(n), Space: O(min(n, m)) where m is character set size",comments:[{author:"SlidingWindowMaster",content:"Classic sliding window! Maintains window with unique characters."},{author:"CodeReviewer42",content:"Clean shrinking of left boundary when duplicate encountered."},{author:"OptimizationExpert",content:"We could use hash map to store indices for O(1) left jumps."},{author:"AlternativeThinker",content:"Array of size 128 could be used instead of hash set for ASCII."}]},{problemName:"Longest Palindromic Substring",author:"Center Expansion Expert",explanation:"Expand around each possible center (character or between characters). Track longest palindrome found.",solution:`class Solution {
public:
    string longestPalindrome(string s) {
        if (s.empty()) return "";
        
        int start = 0, maxLength = 1;
        
        for (int i = 0; i < s.length(); i++) {
            // Expand around single character center
            int len1 = expandAroundCenter(s, i, i);
            // Expand around center between characters
            int len2 = expandAroundCenter(s, i, i + 1);
            
            int len = max(len1, len2);
            if (len > maxLength) {
                maxLength = len;
                start = i - (len - 1) / 2;
            }
        }
        
        return s.substr(start, maxLength);
    }
    
private:
    int expandAroundCenter(string& s, int left, int right) {
        while (left >= 0 && right < s.length() && s[left] == s[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    }
};`,notes:"Time: O(n²), Space: O(1)",comments:[{author:"PalindromeExpert",content:"Center expansion approach! Handles both odd and even length palindromes."},{author:"CodeReviewer42",content:"Clean separation of expansion logic into helper function."},{author:"OptimizationExpert",content:"Manacher's algorithm provides O(n) time but is more complex."},{author:"AlternativeThinker",content:"We could use DP with O(n²) time and space, but this uses O(1) space."}]},{problemName:"Palindromic Substrings",author:"Center Counter",explanation:"Similar to longest palindromic substring, but count all palindromic substrings by expanding around all centers.",solution:`class Solution {
public:
    int countSubstrings(string s) {
        int count = 0;
        
        for (int i = 0; i < s.length(); i++) {
            // Count palindromes with single character center
            count += expandAroundCenter(s, i, i);
            // Count palindromes with center between characters
            count += expandAroundCenter(s, i, i + 1);
        }
        
        return count;
    }
    
private:
    int expandAroundCenter(string& s, int left, int right) {
        int count = 0;
        while (left >= 0 && right < s.length() && s[left] == s[right]) {
            count++;
            left--;
            right++;
        }
        return count;
    }
};`,notes:"Time: O(n²), Space: O(1)",comments:[{author:"PalindromeCounter",content:"Center expansion adapted for counting! Efficient O(n²) solution."},{author:"CodeReviewer42",content:"Same expansion logic as longest palindrome, but returns count instead of length."},{author:"OptimizationExpert",content:"Manacher's algorithm could give O(n) time but is much more complex."},{author:"AlternativeThinker",content:"DP approach would use O(n²) space, this uses O(1) space."}]},{problemName:"String to Integer (atoi)",author:"String Parser",explanation:"Process string character by character: skip whitespace, check sign, read digits, handle overflow.",solution:`class Solution {
public:
    int myAtoi(string s) {
        int i = 0, n = s.length();
        int sign = 1;
        long result = 0;
        
        // Skip leading whitespace
        while (i < n && s[i] == ' ') {
            i++;
        }
        
        // Check sign
        if (i < n && (s[i] == '+' || s[i] == '-')) {
            sign = (s[i] == '-') ? -1 : 1;
            i++;
        }
        
        // Process digits
        while (i < n && isdigit(s[i])) {
            int digit = s[i] - '0';
            
            // Check for overflow
            if (result > (INT_MAX - digit) / 10) {
                return (sign == 1) ? INT_MAX : INT_MIN;
            }
            
            result = result * 10 + digit;
            i++;
        }
        
        return sign * result;
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"StringParserExpert",content:"Comprehensive parsing! Handles all edge cases: whitespace, signs, overflow."},{author:"CodeReviewer42",content:"Good overflow checking using integer arithmetic instead of long comparison."},{author:"EdgeCaseHunter",content:"Handles cases like empty string, only whitespace, and non-digit characters."},{author:"AlternativeThinker",content:"We could use finite state machine for more complex parsing requirements."}]},{problemName:"Longest Repeating Character Replacement",author:"Sliding Window Optimizer",explanation:"Use sliding window with character counts. Track max frequency in current window. Window is valid if (window size - max frequency) <= k.",solution:`class Solution {
public:
    int characterReplacement(string s, int k) {
        vector<int> count(26, 0);
        int left = 0, maxCount = 0, maxLength = 0;
        
        for (int right = 0; right < s.length(); right++) {
            count[s[right] - 'A']++;
            maxCount = max(maxCount, count[s[right] - 'A']);
            
            // Current window size is (right - left + 1)
            // If we need to replace more than k characters, shrink window
            while (right - left + 1 - maxCount > k) {
                count[s[left] - 'A']--;
                left++;
                // Note: we don't need to update maxCount here due to the maxLength property
            }
            
            maxLength = max(maxLength, right - left + 1);
        }
        
        return maxLength;
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"SlidingWindowExpert",content:"Clever sliding window! The key insight is tracking max frequency in window."},{author:"CodeReviewer42",content:"The while loop condition (window size - maxCount > k) determines validity."},{author:"OptimizationExpert",content:"We don't need to update maxCount when shrinking because we only care about larger windows."},{author:"AlternativeThinker",content:"We could track all character frequencies, but tracking max is sufficient."}]},{problemName:"Group Anagrams",author:"Anagram Grouper",explanation:"Use sorted string as key in hash map. All anagrams will have the same sorted string.",solution:`class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        unordered_map<string, vector<string>> groups;
        
        for (string& str : strs) {
            string key = str;
            sort(key.begin(), key.end());
            groups[key].push_back(str);
        }
        
        vector<vector<string>> result;
        for (auto& [key, group] : groups) {
            result.push_back(group);
        }
        
        return result;
    }
};`,notes:"Time: O(n * k log k) where k is max string length, Space: O(n * k)",comments:[{author:"AnagramMaster",content:"Classic sorting-based grouping! Simple and effective."},{author:"CodeReviewer42",content:"Clean use of sorted string as hash map key."},{author:"OptimizationExpert",content:"For better performance with long strings, we could use frequency count as key."},{author:"AlternativeThinker",content:"We could use character frequency string like '#2#1#3...' as key to avoid sorting."}]},{problemName:"Generate Parentheses",author:"Backtracking Generator",explanation:"Use backtracking with open and close counts. Add '(' if open < n, add ')' if close < open.",solution:`class Solution {
public:
    vector<string> generateParenthesis(int n) {
        vector<string> result;
        backtrack("", 0, 0, n, result);
        return result;
    }
    
private:
    void backtrack(string current, int open, int close, int n, vector<string>& result) {
        if (current.length() == 2 * n) {
            result.push_back(current);
            return;
        }
        
        if (open < n) {
            backtrack(current + '(', open + 1, close, n, result);
        }
        
        if (close < open) {
            backtrack(current + ')', open, close + 1, n, result);
        }
    }
};`,notes:"Time: O(4^n/√n) - Catalan number, Space: O(n) for recursion stack",comments:[{author:"BacktrackingExpert",content:"Classic backtracking! Ensures valid parentheses by tracking open/close counts."},{author:"CodeReviewer42",content:"The condition 'close < open' ensures we never have invalid closing parentheses."},{author:"CombinatoricsExpert",content:"Number of results is the nth Catalan number C(2n,n)/(n+1)."},{author:"AlternativeThinker",content:"We could use iterative DP, but backtracking is more intuitive."}]},{problemName:"Simplify Path",author:"Path Simplifier",explanation:"Use stack to process path components. Split by '/', handle '.', '..', and push valid directory names.",solution:`class Solution {
public:
    string simplifyPath(string path) {
        vector<string> stack;
        stringstream ss(path);
        string token;
        
        // Split by '/'
        while (getline(ss, token, '/')) {
            if (token == "" || token == ".") {
                continue;
            } else if (token == "..") {
                if (!stack.empty()) {
                    stack.pop_back();
                }
            } else {
                stack.push_back(token);
            }
        }
        
        // Build simplified path
        string result = "";
        for (string& dir : stack) {
            result += "/" + dir;
        }
        
        return result.empty() ? "/" : result;
    }
};`,notes:"Time: O(n), Space: O(n)",comments:[{author:"PathProcessingExpert",content:"Clean stack-based processing! Handles all special cases correctly."},{author:"CodeReviewer42",content:"Good use of stringstream with getline for path splitting."},{author:"EdgeCaseHunter",content:"Handles multiple slashes, '.', '..', and trailing slashes correctly."},{author:"AlternativeThinker",content:"We could process character by character, but stringstream is cleaner."}]},{problemName:"Letter Combinations of a Phone Number",author:"Backtracking Generator",explanation:"Use backtracking to generate all combinations. For each digit, try all corresponding letters.",solution:`class Solution {
public:
    vector<string> letterCombinations(string digits) {
        if (digits.empty()) return {};
        
        vector<string> result;
        vector<string> mapping = {
            "", "", "abc", "def", "ghi", "jkl", 
            "mno", "pqrs", "tuv", "wxyz"
        };
        
        backtrack("", 0, digits, mapping, result);
        return result;
    }
    
private:
    void backtrack(string current, int index, string& digits, 
                   vector<string>& mapping, vector<string>& result) {
        if (index == digits.length()) {
            result.push_back(current);
            return;
        }
        
        string letters = mapping[digits[index] - '0'];
        for (char c : letters) {
            backtrack(current + c, index + 1, digits, mapping, result);
        }
    }
};`,notes:"Time: O(4^n), Space: O(n) for recursion stack",comments:[{author:"BacktrackingMaster",content:"Classic backtracking! Explores all possible combinations systematically."},{author:"CodeReviewer42",content:"Clean mapping from digit to letters using array indexing."},{author:"OptimizationExpert",content:"We could use iterative BFS approach to avoid recursion stack."},{author:"AlternativeThinker",content:"For fixed input size, we could use nested loops, but backtracking handles variable length."}]},{problemName:"Word Break",author:"Dynamic Programming Solver",explanation:"Use DP where dp[i] means first i characters can be segmented. For each position, check all possible word endings.",solution:`class Solution {
public:
    bool wordBreak(string s, vector<string>& wordDict) {
        unordered_set<string> wordSet(wordDict.begin(), wordDict.end());
        int n = s.length();
        vector<bool> dp(n + 1, false);
        dp[0] = true; // empty string
        
        for (int i = 1; i <= n; i++) {
            for (int j = 0; j < i; j++) {
                if (dp[j] && wordSet.count(s.substr(j, i - j))) {
                    dp[i] = true;
                    break;
                }
            }
        }
        
        return dp[n];
    }
};`,notes:"Time: O(n³) - O(n²) loops * O(n) substring, Space: O(n)",comments:[{author:"DPExpert",content:"Classic DP approach! dp[i] represents segmentability up to index i."},{author:"CodeReviewer42",content:"The break statement improves efficiency once a valid segmentation is found."},{author:"OptimizationExpert",content:"We could use trie for faster word lookups in the dictionary."},{author:"AlternativeThinker",content:"BFS approach is also possible where we explore reachable indices."}]},{problemName:"Decode String",author:"Stack Decoder",explanation:"Use stack to process encoded strings. Push current string and count when encountering '[', pop and decode when encountering ']'.",solution:`class Solution {
public:
    string decodeString(string s) {
        stack<pair<string, int>> st; // pair<current_string, repeat_count>
        string current = "";
        int count = 0;
        
        for (char c : s) {
            if (isdigit(c)) {
                count = count * 10 + (c - '0');
            } else if (c == '[') {
                st.push({current, count});
                current = "";
                count = 0;
            } else if (c == ']') {
                auto [prev, repeat] = st.top();
                st.pop();
                string temp = "";
                for (int i = 0; i < repeat; i++) {
                    temp += current;
                }
                current = prev + temp;
            } else {
                current += c;
            }
        }
        
        return current;
    }
};`,notes:"Time: O(n), Space: O(n)",comments:[{author:"StackDecoder",content:"Elegant stack-based decoding! Handles nested encodings naturally."},{author:"CodeReviewer42",content:"Good use of pair to store both string and repeat count on stack."},{author:"EdgeCaseHunter",content:"Handles multiple levels of nesting and consecutive numbers correctly."},{author:"AlternativeThinker",content:"We could use recursion, but stack approach is more intuitive."}]},{problemName:"Find All Anagrams in a String",author:"Sliding Window Counter",explanation:"Use sliding window with frequency counts. Maintain counts of characters in current window and compare with target pattern.",solution:`class Solution {
public:
    vector<int> findAnagrams(string s, string p) {
        vector<int> result;
        if (s.length() < p.length()) return result;
        
        vector<int> pCount(26, 0), sCount(26, 0);
        
        // Initialize frequency counts
        for (char c : p) {
            pCount[c - 'a']++;
        }
        
        int windowSize = p.length();
        
        // Initialize first window
        for (int i = 0; i < windowSize; i++) {
            sCount[s[i] - 'a']++;
        }
        
        if (pCount == sCount) {
            result.push_back(0);
        }
        
        // Slide the window
        for (int i = windowSize; i < s.length(); i++) {
            // Remove leftmost character
            sCount[s[i - windowSize] - 'a']--;
            // Add new character
            sCount[s[i] - 'a']++;
            
            if (pCount == sCount) {
                result.push_back(i - windowSize + 1);
            }
        }
        
        return result;
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"SlidingWindowExpert",content:"Efficient sliding window with frequency arrays! O(1) space for English letters."},{author:"CodeReviewer42",content:"Direct vector comparison makes the anagram check very clean."},{author:"OptimizationExpert",content:"We could use a single frequency array and a match counter for optimization."},{author:"AlternativeThinker",content:"Hash map approach would work for Unicode but is slower for English."}]},{problemName:"Permutation in String",author:"Sliding Window Matcher",explanation:"Similar to find all anagrams. Use sliding window to check if any window in s1 contains a permutation of s2.",solution:`class Solution {
public:
    bool checkInclusion(string s1, string s2) {
        if (s1.length() > s2.length()) return false;
        
        vector<int> s1Count(26, 0), s2Count(26, 0);
        
        // Initialize frequency counts
        for (int i = 0; i < s1.length(); i++) {
            s1Count[s1[i] - 'a']++;
            s2Count[s2[i] - 'a']++;
        }
        
        if (s1Count == s2Count) {
            return true;
        }
        
        // Slide the window
        for (int i = s1.length(); i < s2.length(); i++) {
            // Remove leftmost character
            s2Count[s2[i - s1.length()] - 'a']--;
            // Add new character
            s2Count[s2[i] - 'a']++;
            
            if (s1Count == s2Count) {
                return true;
            }
        }
        
        return false;
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"SlidingWindowMaster",content:"Efficient permutation checking! Same technique as anagram finding."},{author:"CodeReviewer42",content:"Clean frequency array comparison for permutation check."},{author:"OptimizationExpert",content:"We could optimize by tracking the number of matching characters."},{author:"AlternativeThinker",content:"For very long strings, we could use rolling hash but this is sufficient."}]},{problemName:"Basic Calculator II",author:"Stack Calculator",explanation:"Process string left to right. Use stack to handle precedence. For '+' and '-', push with sign. For '*' and '/', calculate immediately.",solution:`class Solution {
public:
    int calculate(string s) {
        stack<int> st;
        char operation = '+';
        int currentNumber = 0;
        
        for (int i = 0; i < s.length(); i++) {
            char c = s[i];
            
            if (isdigit(c)) {
                currentNumber = currentNumber * 10 + (c - '0');
            }
            
            if ((!isdigit(c) && c != ' ') || i == s.length() - 1) {
                if (operation == '+') {
                    st.push(currentNumber);
                } else if (operation == '-') {
                    st.push(-currentNumber);
                } else if (operation == '*') {
                    int top = st.top();
                    st.pop();
                    st.push(top * currentNumber);
                } else if (operation == '/') {
                    int top = st.top();
                    st.pop();
                    st.push(top / currentNumber);
                }
                
                operation = c;
                currentNumber = 0;
            }
        }
        
        int result = 0;
        while (!st.empty()) {
            result += st.top();
            st.pop();
        }
        
        return result;
    }
};`,notes:"Time: O(n), Space: O(n)",comments:[{author:"CalculatorExpert",content:"Smart stack handling! Deferred addition/subtraction, immediate multiplication/division."},{author:"CodeReviewer42",content:"Good handling of spaces and final character edge case."},{author:"OptimizationExpert",content:"We could do this in O(1) space by tracking last number instead of using stack."},{author:"AlternativeThinker",content:"Using stringstream would make parsing cleaner but less efficient."}]},{problemName:"Integer to Roman",author:"Roman Numerals Builder",explanation:"Use greedy approach with sorted value-symbol pairs. Subtract largest possible values and append corresponding symbols.",solution:`class Solution {
public:
    string intToRoman(int num) {
        vector<pair<int, string>> values = {
            {1000, "M"}, {900, "CM"}, {500, "D"}, {400, "CD"},
            {100, "C"}, {90, "XC"}, {50, "L"}, {40, "XL"},
            {10, "X"}, {9, "IX"}, {5, "V"}, {4, "IV"}, {1, "I"}
        };
        
        string result = "";
        
        for (auto& [value, symbol] : values) {
            while (num >= value) {
                result += symbol;
                num -= value;
            }
        }
        
        return result;
    }
};`,notes:"Time: O(1), Space: O(1)",comments:[{author:"RomanNumeralsExpert",content:"Greedy approach with sorted values! Handles all subtractive cases."},{author:"CodeReviewer42",content:"Clean use of vector of pairs for value-symbol mapping."},{author:"OptimizationExpert",content:"Since Roman numerals have limited range, this is effectively O(1)."},{author:"AlternativeThinker",content:"We could use hardcoded arrays for thousands, hundreds, etc., but this is more maintainable."}]},{problemName:"Edit Distance",author:"Dynamic Programming Expert",explanation:"Use DP where dp[i][j] represents minimum operations to convert first i chars of word1 to first j chars of word2. Consider insert, delete, replace.",solution:`class Solution {
public:
    int minDistance(string word1, string word2) {
        int m = word1.length(), n = word2.length();
        vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));
        
        // Initialize base cases
        for (int i = 0; i <= m; i++) {
            dp[i][0] = i; // delete all characters from word1
        }
        for (int j = 0; j <= n; j++) {
            dp[0][j] = j; // insert all characters into word1
        }
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (word1[i - 1] == word2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1]; // no operation needed
                } else {
                    dp[i][j] = 1 + min({
                        dp[i - 1][j],    // delete from word1
                        dp[i][j - 1],    // insert into word1
                        dp[i - 1][j - 1] // replace
                    });
                }
            }
        }
        
        return dp[m][n];
    }
};`,notes:"Time: O(m*n), Space: O(m*n)",comments:[{author:"DPMaster",content:"Classic edit distance algorithm! Wagner-Fischer algorithm."},{author:"CodeReviewer42",content:"Clean DP formulation with three operations: insert, delete, replace."},{author:"OptimizationExpert",content:"We can optimize space to O(min(m,n)) by using two rows instead of full matrix."},{author:"AlternativeThinker",content:"For similar strings, we could use Myers' bit-parallel algorithm for better performance."}]},{problemName:"Regular Expression Matching",author:"Dynamic Programming Matcher",explanation:"Use DP where dp[i][j] means first i chars of s match first j chars of p. Handle '.' as any char and '*' as zero or more of preceding element.",solution:`class Solution {
public:
    bool isMatch(string s, string p) {
        int m = s.length(), n = p.length();
        vector<vector<bool>> dp(m + 1, vector<bool>(n + 1, false));
        dp[0][0] = true; // empty string matches empty pattern
        
        // Handle patterns like a*, a*b*, a*b*c* that can match empty string
        for (int j = 2; j <= n; j++) {
            if (p[j - 1] == '*') {
                dp[0][j] = dp[0][j - 2];
            }
        }
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (p[j - 1] == '*') {
                    // Zero occurrence of preceding char
                    dp[i][j] = dp[i][j - 2];
                    // One or more occurrences if preceding char matches
                    if (p[j - 2] == '.' || p[j - 2] == s[i - 1]) {
                        dp[i][j] = dp[i][j] || dp[i - 1][j];
                    }
                } else {
                    // Direct character match or '.'
                    if (p[j - 1] == '.' || p[j - 1] == s[i - 1]) {
                        dp[i][j] = dp[i - 1][j - 1];
                    }
                }
            }
        }
        
        return dp[m][n];
    }
};`,notes:"Time: O(m*n), Space: O(m*n)",comments:[{author:"RegexExpert",content:"Complex DP for regex matching! Handles all special cases correctly."},{author:"CodeReviewer42",content:"Good handling of '*' with both zero and one-or-more occurrences."},{author:"OptimizationExpert",content:"Space can be optimized to O(n) since we only need previous row."},{author:"AlternativeThinker",content:"We could use NFA simulation but DP is more straightforward."}]},{problemName:"Wildcard Matching",author:"Dynamic Programming Wildcard",explanation:"Similar to regex but simpler. Use DP where '?' matches any single char, '*' matches any sequence. Handle '*' by matching zero or more characters.",solution:`class Solution {
public:
    bool isMatch(string s, string p) {
        int m = s.length(), n = p.length();
        vector<vector<bool>> dp(m + 1, vector<bool>(n + 1, false));
        dp[0][0] = true;
        
        // Handle patterns starting with '*' that can match empty string
        for (int j = 1; j <= n; j++) {
            if (p[j - 1] == '*') {
                dp[0][j] = dp[0][j - 1];
            }
        }
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (p[j - 1] == '*') {
                    // '*' can match zero characters or one or more characters
                    dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
                } else if (p[j - 1] == '?' || p[j - 1] == s[i - 1]) {
                    dp[i][j] = dp[i - 1][j - 1];
                }
            }
        }
        
        return dp[m][n];
    }
};`,notes:"Time: O(m*n), Space: O(m*n)",comments:[{author:"WildcardExpert",content:"Clean DP for wildcard matching! Simpler than regex without precedence rules."},{author:"CodeReviewer42",content:"Good handling of '*' with both zero and one-or-more character matching."},{author:"OptimizationExpert",content:"We can optimize space to O(n) and add early termination for better performance."},{author:"AlternativeThinker",content:"Two-pointer greedy approach works for many cases but DP is more general."}]},{problemName:"Text Justification",author:"Line Formatter",explanation:"Greedy line packing. For each line, pack as many words as possible, then distribute spaces evenly. Handle last line separately.",solution:`class Solution {
public:
    vector<string> fullJustify(vector<string>& words, int maxWidth) {
        vector<string> result;
        int i = 0, n = words.size();
        
        while (i < n) {
            // Find words that fit in current line
            int j = i, lineLength = 0;
            while (j < n && lineLength + words[j].length() + (j - i) <= maxWidth) {
                lineLength += words[j].length();
                j++;
            }
            
            // Build the line
            string line = "";
            int numWords = j - i;
            int totalSpaces = maxWidth - lineLength;
            
            // If last line or only one word, left justify
            if (j == n || numWords == 1) {
                for (int k = i; k < j; k++) {
                    line += words[k];
                    if (k < j - 1) {
                        line += " ";
                    }
                }
                // Add remaining spaces at the end
                line += string(maxWidth - line.length(), ' ');
            } else {
                // Distribute spaces evenly
                int spacesBetween = totalSpaces / (numWords - 1);
                int extraSpaces = totalSpaces % (numWords - 1);
                
                for (int k = i; k < j; k++) {
                    line += words[k];
                    if (k < j - 1) {
                        int spaces = spacesBetween + (k - i < extraSpaces ? 1 : 0);
                        line += string(spaces, ' ');
                    }
                }
            }
            
            result.push_back(line);
            i = j;
        }
        
        return result;
    }
};`,notes:"Time: O(n), Space: O(n)",comments:[{author:"TextFormattingExpert",content:"Comprehensive text justification! Handles all spacing rules correctly."},{author:"CodeReviewer42",content:"Good separation of last line case and multi-word line formatting."},{author:"EdgeCaseHunter",content:"Handles single word lines and exact fitting correctly."},{author:"AlternativeThinker",content:"We could precompute line breaks for better organization."}]},{problemName:"Reverse Linked List",author:"Pointer Reverser",explanation:"Use three pointers: previous, current, next. Iterate through the list, reversing the direction of pointers.",solution:`/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        ListNode* prev = nullptr;
        ListNode* curr = head;
        
        while (curr != nullptr) {
            ListNode* nextTemp = curr->next;
            curr->next = prev;
            prev = curr;
            curr = nextTemp;
        }
        
        return prev;
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"LinkedListMaster",content:"Classic iterative reversal! Clean three-pointer technique."},{author:"CodeReviewer42",content:"Good use of temporary pointer to avoid losing reference to next node."},{author:"RecursionFan",content:"We could use recursion for O(n) space, but iterative is more space efficient."},{author:"EdgeCaseHunter",content:"Handles empty list and single node list correctly."}]},{problemName:"Merge Two Sorted Lists",author:"List Merger",explanation:"Use dummy node and compare nodes from both lists. Append the smaller node to the result list.",solution:`class Solution {
public:
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        ListNode* dummy = new ListNode(0);
        ListNode* current = dummy;
        
        while (list1 != nullptr && list2 != nullptr) {
            if (list1->val <= list2->val) {
                current->next = list1;
                list1 = list1->next;
            } else {
                current->next = list2;
                list2 = list2->next;
            }
            current = current->next;
        }
        
        // Append remaining nodes
        if (list1 != nullptr) {
            current->next = list1;
        } else {
            current->next = list2;
        }
        
        return dummy->next;
    }
};`,notes:"Time: O(n + m), Space: O(1)",comments:[{author:"MergeExpert",content:"Clean merge using dummy node! Avoids special cases for empty lists."},{author:"CodeReviewer42",content:"Good handling of remaining nodes after one list is exhausted."},{author:"OptimizationExpert",content:"We could merge in-place without dummy node, but this is cleaner."},{author:"AlternativeThinker",content:"Recursive solution is elegant but uses O(n+m) stack space."}]},{problemName:"Linked List Cycle",author:"Cycle Detector",explanation:"Use Floyd's cycle detection algorithm (tortoise and hare). Slow pointer moves 1 step, fast pointer moves 2 steps. If they meet, cycle exists.",solution:`class Solution {
public:
    bool hasCycle(ListNode *head) {
        if (head == nullptr || head->next == nullptr) {
            return false;
        }
        
        ListNode* slow = head;
        ListNode* fast = head;
        
        while (fast != nullptr && fast->next != nullptr) {
            slow = slow->next;
            fast = fast->next->next;
            
            if (slow == fast) {
                return true;
            }
        }
        
        return false;
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"CycleDetectionExpert",content:"Classic Floyd's algorithm! No extra space needed."},{author:"CodeReviewer42",content:"Good bounds checking for fast pointer to avoid null pointer exceptions."},{author:"MathGeek",content:"If there's a cycle, fast pointer will eventually meet slow pointer within O(n) time."},{author:"AlternativeThinker",content:"We could use hash set for O(n) space, but this is optimal."}]},{problemName:"Palindrome Linked List",author:"Palindrome Checker",explanation:"Find middle, reverse second half, compare both halves. Restore the list afterwards.",solution:`class Solution {
public:
    bool isPalindrome(ListNode* head) {
        if (head == nullptr || head->next == nullptr) {
            return true;
        }
        
        // Find middle using slow and fast pointers
        ListNode* slow = head;
        ListNode* fast = head;
        while (fast->next != nullptr && fast->next->next != nullptr) {
            slow = slow->next;
            fast = fast->next->next;
        }
        
        // Reverse second half
        ListNode* secondHalf = reverseList(slow->next);
        ListNode* firstHalf = head;
        
        // Compare both halves
        bool isPal = true;
        ListNode* temp = secondHalf;
        while (temp != nullptr) {
            if (firstHalf->val != temp->val) {
                isPal = false;
                break;
            }
            firstHalf = firstHalf->next;
            temp = temp->next;
        }
        
        // Restore the list
        slow->next = reverseList(secondHalf);
        
        return isPal;
    }
    
private:
    ListNode* reverseList(ListNode* head) {
        ListNode* prev = nullptr;
        ListNode* curr = head;
        while (curr != nullptr) {
            ListNode* nextTemp = curr->next;
            curr->next = prev;
            prev = curr;
            curr = nextTemp;
        }
        return prev;
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"PalindromeExpert",content:"Clever O(1) space solution! Finds middle, reverses, compares, then restores."},{author:"CodeReviewer42",content:"Good practice to restore the original list structure."},{author:"OptimizationExpert",content:"We could push values to stack for O(n) space simpler solution."},{author:"AlternativeThinker",content:"Recursive approach possible but uses O(n) stack space."}]},{problemName:"Remove Linked List Elements",author:"Element Remover",explanation:"Use dummy node to handle head removal. Iterate through list, skipping nodes with target value.",solution:`class Solution {
public:
    ListNode* removeElements(ListNode* head, int val) {
        ListNode* dummy = new ListNode(0);
        dummy->next = head;
        ListNode* current = dummy;
        
        while (current->next != nullptr) {
            if (current->next->val == val) {
                ListNode* toDelete = current->next;
                current->next = current->next->next;
                delete toDelete; // Free memory
            } else {
                current = current->next;
            }
        }
        
        return dummy->next;
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"ListModifier",content:"Clean removal with dummy node! Handles head deletion elegantly."},{author:"CodeReviewer42",content:"Good memory management by deleting removed nodes."},{author:"EdgeCaseHunter",content:"Handles consecutive nodes to remove and empty list correctly."},{author:"AlternativeThinker",content:"We could use recursion but iterative is more space efficient."}]},{problemName:"Middle of the Linked List",author:"Middle Finder",explanation:"Use slow and fast pointers. Slow moves 1 step, fast moves 2 steps. When fast reaches end, slow is at middle.",solution:`class Solution {
public:
    ListNode* middleNode(ListNode* head) {
        ListNode* slow = head;
        ListNode* fast = head;
        
        while (fast != nullptr && fast->next != nullptr) {
            slow = slow->next;
            fast = fast->next->next;
        }
        
        return slow;
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"TwoPointerExpert",content:"Classic tortoise and hare! Finds middle in single pass."},{author:"CodeReviewer42",content:"Clean and efficient. No extra space needed."},{author:"EdgeCaseHunter",content:"For even length, returns second middle as required."},{author:"AlternativeThinker",content:"We could count nodes then traverse to middle, but that takes two passes."}]},{problemName:"Convert Binary Number in a Linked List to Integer",author:"Binary Converter",explanation:"Traverse list, accumulating binary value. For each node, shift left and add current value.",solution:`class Solution {
public:
    int getDecimalValue(ListNode* head) {
        int result = 0;
        ListNode* current = head;
        
        while (current != nullptr) {
            result = (result << 1) | current->val;
            current = current->next;
        }
        
        return result;
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"BitManipulationExpert",content:"Efficient bit manipulation! Left shift and OR operations."},{author:"CodeReviewer42",content:"Clean single pass solution. No extra data structures needed."},{author:"MathGeek",content:"Equivalent to result = result * 2 + current->val, but bit operations are faster."},{author:"AlternativeThinker",content:"We could reverse list first, but this direct approach is better."}]},{problemName:"Intersection of Two Linked Lists",author:"Intersection Finder",explanation:"Use two pointers. When one reaches end, switch to other list. They will meet at intersection or both become null.",solution:`class Solution {
public:
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
        if (headA == nullptr || headB == nullptr) {
            return nullptr;
        }
        
        ListNode* ptrA = headA;
        ListNode* ptrB = headB;
        
        while (ptrA != ptrB) {
            ptrA = (ptrA == nullptr) ? headB : ptrA->next;
            ptrB = (ptrB == nullptr) ? headA : ptrB->next;
        }
        
        return ptrA;
    }
};`,notes:"Time: O(n + m), Space: O(1)",comments:[{author:"IntersectionExpert",content:"Clever two-pointer technique! Both pointers traverse same total distance."},{author:"CodeReviewer42",content:"Elegant solution that handles no intersection case naturally."},{author:"MathGeek",content:"Both pointers travel distance (A + B - common) so they meet at intersection."},{author:"AlternativeThinker",content:"We could use hash set but that would require O(n) space."}]},{problemName:"Delete Node in a Linked List",author:"Node Deleter",explanation:"Since we don't have access to previous node, copy next node's value to current node, then delete next node.",solution:`class Solution {
public:
    void deleteNode(ListNode* node) {
        // Copy next node's value to current node
        node->val = node->next->val;
        
        // Delete the next node
        ListNode* toDelete = node->next;
        node->next = node->next->next;
        delete toDelete;
    }
};`,notes:"Time: O(1), Space: O(1)",comments:[{author:"CreativeDeleter",content:"Clever workaround! Modifies value instead of pointer manipulation."},{author:"CodeReviewer42",content:"Important to delete the next node to avoid memory leak."},{author:"EdgeCaseHunter",content:"Doesn't work for deleting last node, but problem guarantees node is not tail."},{author:"AlternativeThinker",content:"We could iterate and shift all values, but this is O(1) time."}]},{problemName:"Design Linked List",author:"LinkedList Designer",explanation:"Implement singly linked list with head, tail, and size. Handle all edge cases for get, addAtHead, addAtTail, addAtIndex, deleteAtIndex.",solution:`class MyLinkedList {
private:
    struct Node {
        int val;
        Node* next;
        Node(int x) : val(x), next(nullptr) {}
    };
    
    Node* head;
    Node* tail;
    int size;
    
public:
    MyLinkedList() {
        head = nullptr;
        tail = nullptr;
        size = 0;
    }
    
    int get(int index) {
        if (index < 0 || index >= size) return -1;
        
        Node* current = head;
        for (int i = 0; i < index; i++) {
            current = current->next;
        }
        return current->val;
    }
    
    void addAtHead(int val) {
        Node* newNode = new Node(val);
        newNode->next = head;
        head = newNode;
        if (size == 0) {
            tail = head;
        }
        size++;
    }
    
    void addAtTail(int val) {
        Node* newNode = new Node(val);
        if (size == 0) {
            head = tail = newNode;
        } else {
            tail->next = newNode;
            tail = newNode;
        }
        size++;
    }
    
    void addAtIndex(int index, int val) {
        if (index < 0 || index > size) return;
        
        if (index == 0) {
            addAtHead(val);
        } else if (index == size) {
            addAtTail(val);
        } else {
            Node* current = head;
            for (int i = 0; i < index - 1; i++) {
                current = current->next;
            }
            Node* newNode = new Node(val);
            newNode->next = current->next;
            current->next = newNode;
            size++;
        }
    }
    
    void deleteAtIndex(int index) {
        if (index < 0 || index >= size) return;
        
        if (index == 0) {
            Node* toDelete = head;
            head = head->next;
            delete toDelete;
            if (size == 1) {
                tail = nullptr;
            }
        } else {
            Node* current = head;
            for (int i = 0; i < index - 1; i++) {
                current = current->next;
            }
            Node* toDelete = current->next;
            current->next = toDelete->next;
            if (index == size - 1) {
                tail = current;
            }
            delete toDelete;
        }
        size--;
    }
};`,notes:"Time: O(n) for get/delete, O(1) for addAtHead/addAtTail, Space: O(n)",comments:[{author:"DataStructureDesigner",content:"Comprehensive linked list implementation! Handles all edge cases."},{author:"CodeReviewer42",content:"Good use of tail pointer for O(1) addAtTail operations."},{author:"MemoryManager",content:"Proper memory management with delete operations."},{author:"AlternativeThinker",content:"We could use doubly linked list for O(1) deletions but more memory."}]},{problemName:"Remove Nth Node From End of List",author:"Two Pointer Remover",explanation:"Use two pointers with n gap. When fast reaches end, slow is at node before target. Remove target node.",solution:`class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        ListNode* dummy = new ListNode(0);
        dummy->next = head;
        
        ListNode* fast = dummy;
        ListNode* slow = dummy;
        
        // Move fast n+1 steps ahead
        for (int i = 0; i <= n; i++) {
            fast = fast->next;
        }
        
        // Move both until fast reaches end
        while (fast != nullptr) {
            slow = slow->next;
            fast = fast->next;
        }
        
        // Remove the nth node
        ListNode* toDelete = slow->next;
        slow->next = slow->next->next;
        delete toDelete;
        
        return dummy->next;
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"TwoPointerMaster",content:"Classic two-pointer technique! Maintains n+1 gap for easy deletion."},{author:"CodeReviewer42",content:"Dummy node handles head deletion elegantly."},{author:"EdgeCaseHunter",content:"Handles cases where n equals list length (head deletion)."},{author:"AlternativeThinker",content:"We could calculate length first, but this is one-pass."}]},{problemName:"Copy List with Random Pointer",author:"List Copier",explanation:"Three steps: 1) Create copy nodes interweaved with original, 2) Set random pointers for copies, 3) Separate the two lists.",solution:`/*
// Definition for a Node.
class Node {
public:
    int val;
    Node* next;
    Node* random;
    
    Node(int _val) {
        val = _val;
        next = NULL;
        random = NULL;
    }
};
*/
class Solution {
public:
    Node* copyRandomList(Node* head) {
        if (head == nullptr) return nullptr;
        
        // Step 1: Create copy nodes interweaved
        Node* current = head;
        while (current != nullptr) {
            Node* copy = new Node(current->val);
            copy->next = current->next;
            current->next = copy;
            current = copy->next;
        }
        
        // Step 2: Set random pointers for copies
        current = head;
        while (current != nullptr) {
            if (current->random != nullptr) {
                current->next->random = current->random->next;
            }
            current = current->next->next;
        }
        
        // Step 3: Separate the two lists
        current = head;
        Node* copyHead = head->next;
        Node* copyCurrent = copyHead;
        
        while (current != nullptr) {
            current->next = current->next->next;
            if (copyCurrent->next != nullptr) {
                copyCurrent->next = copyCurrent->next->next;
            }
            current = current->next;
            copyCurrent = copyCurrent->next;
        }
        
        return copyHead;
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"ListCopyExpert",content:"Brilliant O(1) space solution! Interweaving copies makes random pointer assignment easy."},{author:"CodeReviewer42",content:"Clean three-step process: interweave, set random, separate."},{author:"MemoryManager",content:"Creates deep copy without using hash map for O(n) space."},{author:"AlternativeThinker",content:"Hash map approach is simpler but uses O(n) space."}]},{problemName:"Add Two Numbers",author:"Digit Adder",explanation:"Simulate digit-by-digit addition with carry. Process both lists until all digits and carry are handled.",solution:`class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode* dummy = new ListNode(0);
        ListNode* current = dummy;
        int carry = 0;
        
        while (l1 != nullptr || l2 != nullptr || carry != 0) {
            int sum = carry;
            
            if (l1 != nullptr) {
                sum += l1->val;
                l1 = l1->next;
            }
            if (l2 != nullptr) {
                sum += l2->val;
                l2 = l2->next;
            }
            
            carry = sum / 10;
            current->next = new ListNode(sum % 10);
            current = current->next;
        }
        
        return dummy->next;
    }
};`,notes:"Time: O(max(m,n)), Space: O(max(m,n))",comments:[{author:"AdditionExpert",content:"Clean digit-by-digit addition simulation! Handles different length lists."},{author:"CodeReviewer42",content:"Good handling of final carry when both lists are exhausted."},{author:"EdgeCaseHunter",content:"Handles cases like 5+5=10 and 999+1=1000 correctly."},{author:"AlternativeThinker",content:"We could convert to numbers then back, but that might cause overflow."}]},{problemName:"Sort List",author:"Merge Sort Specialist",explanation:"Use merge sort: find middle, recursively sort both halves, then merge sorted halves.",solution:`class Solution {
public:
    ListNode* sortList(ListNode* head) {
        if (head == nullptr || head->next == nullptr) {
            return head;
        }
        
        // Find middle
        ListNode* mid = getMiddle(head);
        ListNode* left = head;
        ListNode* right = mid->next;
        mid->next = nullptr;
        
        // Recursively sort both halves
        left = sortList(left);
        right = sortList(right);
        
        // Merge sorted halves
        return merge(left, right);
    }
    
private:
    ListNode* getMiddle(ListNode* head) {
        ListNode* slow = head;
        ListNode* fast = head->next;
        
        while (fast != nullptr && fast->next != nullptr) {
            slow = slow->next;
            fast = fast->next->next;
        }
        
        return slow;
    }
    
    ListNode* merge(ListNode* l1, ListNode* l2) {
        ListNode* dummy = new ListNode(0);
        ListNode* current = dummy;
        
        while (l1 != nullptr && l2 != nullptr) {
            if (l1->val <= l2->val) {
                current->next = l1;
                l1 = l1->next;
            } else {
                current->next = l2;
                l2 = l2->next;
            }
            current = current->next;
        }
        
        if (l1 != nullptr) {
            current->next = l1;
        } else {
            current->next = l2;
        }
        
        return dummy->next;
    }
};`,notes:"Time: O(n log n), Space: O(log n) for recursion stack",comments:[{author:"SortingExpert",content:"Classic merge sort for linked lists! O(n log n) time guaranteed."},{author:"CodeReviewer42",content:"Clean separation: find middle, recursive sort, merge."},{author:"OptimizationExpert",content:"We could use iterative bottom-up merge sort for O(1) space."},{author:"AlternativeThinker",content:"Quick sort is possible but merge sort is more stable for linked lists."}]},{problemName:"Reorder List",author:"List Reorganizer",explanation:"Three steps: 1) Find middle, 2) Reverse second half, 3) Merge first and reversed second halves alternately.",solution:`class Solution {
public:
    void reorderList(ListNode* head) {
        if (head == nullptr || head->next == nullptr) {
            return;
        }
        
        // Step 1: Find middle
        ListNode* slow = head;
        ListNode* fast = head;
        while (fast->next != nullptr && fast->next->next != nullptr) {
            slow = slow->next;
            fast = fast->next->next;
        }
        
        // Step 2: Reverse second half
        ListNode* second = reverseList(slow->next);
        slow->next = nullptr;
        ListNode* first = head;
        
        // Step 3: Merge alternately
        while (second != nullptr) {
            ListNode* temp1 = first->next;
            ListNode* temp2 = second->next;
            
            first->next = second;
            second->next = temp1;
            
            first = temp1;
            second = temp2;
        }
    }
    
private:
    ListNode* reverseList(ListNode* head) {
        ListNode* prev = nullptr;
        ListNode* curr = head;
        while (curr != nullptr) {
            ListNode* nextTemp = curr->next;
            curr->next = prev;
            prev = curr;
            curr = nextTemp;
        }
        return prev;
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"ListReorderingExpert",content:"Clever three-step approach! Finds middle, reverses, then interweaves."},{author:"CodeReviewer42",content:"Good pointer manipulation during the merge step."},{author:"EdgeCaseHunter",content:"Handles both even and odd length lists correctly."},{author:"AlternativeThinker",content:"We could use stack for second half but that would use O(n) space."}]},{problemName:"Flatten a Multilevel Doubly Linked List",author:"List Flattener",explanation:"Use DFS approach. When encountering a child, flatten it and insert between current and next nodes.",solution:`/*
// Definition for a Node.
class Node {
public:
    int val;
    Node* prev;
    Node* next;
    Node* child;
};
*/
class Solution {
public:
    Node* flatten(Node* head) {
        if (head == nullptr) return nullptr;
        
        Node* current = head;
        while (current != nullptr) {
            if (current->child != nullptr) {
                // Save next node
                Node* next = current->next;
                
                // Flatten the child list
                Node* child = flatten(current->child);
                current->child = nullptr;
                
                // Connect current to child
                current->next = child;
                child->prev = current;
                
                // Find tail of child list
                Node* tail = child;
                while (tail->next != nullptr) {
                    tail = tail->next;
                }
                
                // Connect tail to next
                tail->next = next;
                if (next != nullptr) {
                    next->prev = tail;
                }
                
                current = next;
            } else {
                current = current->next;
            }
        }
        
        return head;
    }
};`,notes:"Time: O(n), Space: O(n) for recursion stack",comments:[{author:"MultilevelExpert",content:"DFS approach! Recursively flattens child lists before proceeding."},{author:"CodeReviewer42",content:"Good pointer manipulation connecting current, child, and next nodes."},{author:"EdgeCaseHunter",content:"Handles multiple levels of nesting and preserves doubly linked structure."},{author:"AlternativeThinker",content:"Iterative approach with stack is also possible."}]},{problemName:"LRU Cache",author:"Cache Designer",explanation:"Combine hash map for O(1) lookups with doubly linked list for O(1) removals. Maintain most recent at head, least recent at tail.",solution:`class LRUCache {
private:
    struct Node {
        int key, value;
        Node *prev, *next;
        Node(int k, int v) : key(k), value(v), prev(nullptr), next(nullptr) {}
    };
    
    unordered_map<int, Node*> cache;
    Node *head, *tail;
    int capacity;
    
    void addToFront(Node* node) {
        node->next = head->next;
        node->prev = head;
        head->next->prev = node;
        head->next = node;
    }
    
    void removeNode(Node* node) {
        node->prev->next = node->next;
        node->next->prev = node->prev;
    }
    
    void moveToFront(Node* node) {
        removeNode(node);
        addToFront(node);
    }
    
    Node* removeTail() {
        Node* node = tail->prev;
        removeNode(node);
        return node;
    }
    
public:
    LRUCache(int capacity) : capacity(capacity) {
        head = new Node(-1, -1);
        tail = new Node(-1, -1);
        head->next = tail;
        tail->prev = head;
    }
    
    int get(int key) {
        if (!cache.count(key)) {
            return -1;
        }
        Node* node = cache[key];
        moveToFront(node);
        return node->value;
    }
    
    void put(int key, int value) {
        if (cache.count(key)) {
            Node* node = cache[key];
            node->value = value;
            moveToFront(node);
        } else {
            if (cache.size() == capacity) {
                Node* tailNode = removeTail();
                cache.erase(tailNode->key);
                delete tailNode;
            }
            Node* newNode = new Node(key, value);
            cache[key] = newNode;
            addToFront(newNode);
        }
    }
};`,notes:"Time: O(1) for both operations, Space: O(capacity)",comments:[{author:"CacheDesignExpert",content:"Classic LRU implementation! Hash map + doubly linked list for O(1) operations."},{author:"CodeReviewer42",content:"Clean separation of linked list operations into helper functions."},{author:"MemoryManager",content:"Good use of dummy head and tail nodes to simplify edge cases."},{author:"AlternativeThinker",content:"We could use ordered dict in some languages, but this is fundamental."}]},{problemName:"Odd Even Linked List",author:"List Separator",explanation:"Maintain two lists: odd and even. Connect odd nodes together and even nodes together, then connect odd tail to even head.",solution:`class Solution {
public:
    ListNode* oddEvenList(ListNode* head) {
        if (head == nullptr || head->next == nullptr) {
            return head;
        }
        
        ListNode* odd = head;
        ListNode* even = head->next;
        ListNode* evenHead = even;
        
        while (even != nullptr && even->next != nullptr) {
            odd->next = even->next;
            odd = odd->next;
            even->next = odd->next;
            even = even->next;
        }
        
        odd->next = evenHead;
        return head;
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"ListSeparator",content:"Clean in-place separation! Maintains two lists and connects them."},{author:"CodeReviewer42",content:"Good pointer manipulation updating both odd and even lists simultaneously."},{author:"EdgeCaseHunter",content:"Handles both even and odd length lists correctly."},{author:"AlternativeThinker",content:"We could use extra arrays but this is O(1) space."}]},{problemName:"Partition List",author:"List Partitioner",explanation:"Maintain two lists: one for nodes less than x, one for nodes >= x. Then connect the two lists.",solution:`class Solution {
public:
    ListNode* partition(ListNode* head, int x) {
        ListNode* beforeHead = new ListNode(0);
        ListNode* afterHead = new ListNode(0);
        ListNode* before = beforeHead;
        ListNode* after = afterHead;
        
        ListNode* current = head;
        while (current != nullptr) {
            if (current->val < x) {
                before->next = current;
                before = before->next;
            } else {
                after->next = current;
                after = after->next;
            }
            current = current->next;
        }
        
        // Connect the two lists
        after->next = nullptr;
        before->next = afterHead->next;
        
        return beforeHead->next;
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"PartitionExpert",content:"Clean two-list approach! Maintains relative order within partitions."},{author:"CodeReviewer42",content:"Important to set after->next to nullptr to avoid cycles."},{author:"EdgeCaseHunter",content:"Handles cases where all nodes are less than or greater than x."},{author:"AlternativeThinker",content:"We could do in-place but this is cleaner and maintains stability."}]},{problemName:"Merge k Sorted Lists",author:"List Merger",explanation:"Use min-heap to always get the smallest node from all lists. Add nodes to result and push next nodes to heap.",solution:`class Solution {
public:
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        auto compare = [](ListNode* a, ListNode* b) {
            return a->val > b->val;
        };
        priority_queue<ListNode*, vector<ListNode*>, decltype(compare)> minHeap(compare);
        
        // Add all non-null heads to heap
        for (ListNode* list : lists) {
            if (list != nullptr) {
                minHeap.push(list);
            }
        }
        
        ListNode* dummy = new ListNode(0);
        ListNode* current = dummy;
        
        while (!minHeap.empty()) {
            ListNode* smallest = minHeap.top();
            minHeap.pop();
            
            current->next = smallest;
            current = current->next;
            
            if (smallest->next != nullptr) {
                minHeap.push(smallest->next);
            }
        }
        
        return dummy->next;
    }
};`,notes:"Time: O(n log k) where n is total nodes, k is number of lists, Space: O(k)",comments:[{author:"HeapMaster",content:"Efficient min-heap approach! Always processes smallest available node."},{author:"CodeReviewer42",content:"Clean use of lambda for custom comparator in priority queue."},{author:"OptimizationExpert",content:"We could use divide and conquer merge for O(1) space but O(n log k) time."},{author:"AlternativeThinker",content:"Pairwise merging is also possible but heap is more elegant."}]},{problemName:"Reverse Nodes in k-Group",author:"Group Reverser",explanation:"Reverse nodes in groups of k. For each group, reverse normally and connect to previous and next groups.",solution:`class Solution {
public:
    ListNode* reverseKGroup(ListNode* head, int k) {
        ListNode* dummy = new ListNode(0);
        dummy->next = head;
        ListNode* prevGroupEnd = dummy;
        
        while (true) {
            // Check if there are k nodes left
            ListNode* kth = getKth(prevGroupEnd, k);
            if (kth == nullptr) {
                break;
            }
            
            ListNode* nextGroupStart = kth->next;
            ListNode* groupStart = prevGroupEnd->next;
            
            // Reverse the current group
            ListNode* prev = nextGroupStart;
            ListNode* curr = groupStart;
            while (curr != nextGroupStart) {
                ListNode* nextTemp = curr->next;
                curr->next = prev;
                prev = curr;
                curr = nextTemp;
            }
            
            // Connect previous group to reversed group
            prevGroupEnd->next = prev;
            prevGroupEnd = groupStart;
        }
        
        return dummy->next;
    }
    
private:
    ListNode* getKth(ListNode* node, int k) {
        while (node != nullptr && k > 0) {
            node = node->next;
            k--;
        }
        return node;
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"GroupReversalExpert",content:"Efficient group reversal! Handles partial groups at the end correctly."},{author:"CodeReviewer42",content:"Good use of helper function to check for k nodes remaining."},{author:"EdgeCaseHunter",content:"Handles cases where k=1 and k equals list length."},{author:"AlternativeThinker",content:"We could use recursion but iterative is more space efficient."}]},{problemName:"LFU Cache",author:"Frequency Cache Designer",explanation:"Use three data structures: keyToNode map, frequencyToNodes map (linked hash set), and minFrequency tracker. Maintain nodes in frequency groups.",solution:`class LFUCache {
private:
    struct Node {
        int key, value, freq;
        Node(int k, int v) : key(k), value(v), freq(1) {}
    };
    
    int capacity, minFreq;
    unordered_map<int, list<Node>::iterator> keyToNode;
    unordered_map<int, list<Node>> freqToNodes;
    
    void updateFrequency(int key) {
        auto it = keyToNode[key];
        Node node = *it;
        
        // Remove from current frequency list
        freqToNodes[node.freq].erase(it);
        if (freqToNodes[node.freq].empty()) {
            freqToNodes.erase(node.freq);
            if (minFreq == node.freq) {
                minFreq++;
            }
        }
        
        // Insert into higher frequency list
        node.freq++;
        freqToNodes[node.freq].push_front(node);
        keyToNode[key] = freqToNodes[node.freq].begin();
    }
    
public:
    LFUCache(int capacity) : capacity(capacity), minFreq(0) {}
    
    int get(int key) {
        if (!keyToNode.count(key)) {
            return -1;
        }
        updateFrequency(key);
        return keyToNode[key]->value;
    }
    
    void put(int key, int value) {
        if (capacity == 0) return;
        
        if (keyToNode.count(key)) {
            keyToNode[key]->value = value;
            updateFrequency(key);
        } else {
            if (keyToNode.size() == capacity) {
                // Remove LFU node (and LRU if multiple)
                auto& minFreqList = freqToNodes[minFreq];
                int keyToRemove = minFreqList.back().key;
                minFreqList.pop_back();
                keyToNode.erase(keyToRemove);
                if (minFreqList.empty()) {
                    freqToNodes.erase(minFreq);
                }
            }
            
            // Add new node
            minFreq = 1;
            freqToNodes[1].push_front(Node(key, value));
            keyToNode[key] = freqToNodes[1].begin();
        }
    }
};`,notes:"Time: O(1) for both operations, Space: O(capacity)",comments:[{author:"CacheDesignMaster",content:"Complex LFU implementation! Maintains frequency groups with LRU within each group."},{author:"CodeReviewer42",content:"Good use of multiple data structures for O(1) operations."},{author:"OptimizationExpert",content:"Efficient frequency update with minFrequency tracking."},{author:"AlternativeThinker",content:"We could use balanced BST but hash maps + linked lists are more efficient."}]},{problemName:"All O`one Data Structure",author:"Frequency Data Structure Designer",explanation:"Use hash map for key to frequency, and doubly linked list of frequency buckets. Each bucket contains keys with that frequency.",solution:`class AllOne {
private:
    struct Bucket {
        int freq;
        unordered_set<string> keys;
        Bucket(int f) : freq(f) {}
    };
    
    unordered_map<string, list<Bucket>::iterator> keyToBucket;
    list<Bucket> buckets; // sorted by frequency
    
public:
    AllOne() {}
    
    void inc(string key) {
        if (!keyToBucket.count(key)) {
            // Key doesn't exist, add to freq 1 bucket
            if (buckets.empty() || buckets.front().freq != 1) {
                buckets.push_front(Bucket(1));
            }
            buckets.front().keys.insert(key);
            keyToBucket[key] = buckets.begin();
        } else {
            // Key exists, move to next frequency bucket
            auto currBucket = keyToBucket[key];
            int newFreq = currBucket->freq + 1;
            auto nextBucket = next(currBucket);
            
            // Remove from current bucket
            currBucket->keys.erase(key);
            
            // Insert into next bucket or create new one
            if (nextBucket == buckets.end() || nextBucket->freq != newFreq) {
                nextBucket = buckets.insert(nextBucket, Bucket(newFreq));
            }
            nextBucket->keys.insert(key);
            keyToBucket[key] = nextBucket;
            
            // Remove current bucket if empty
            if (currBucket->keys.empty()) {
                buckets.erase(currBucket);
            }
        }
    }
    
    void dec(string key) {
        if (!keyToBucket.count(key)) return;
        
        auto currBucket = keyToBucket[key];
        int newFreq = currBucket->freq - 1;
        
        // Remove from current bucket
        currBucket->keys.erase(key);
        
        if (newFreq > 0) {
            auto prevBucket = prev(currBucket);
            if (currBucket == buckets.begin() || prevBucket->freq != newFreq) {
                prevBucket = buckets.insert(currBucket, Bucket(newFreq));
            }
            prevBucket->keys.insert(key);
            keyToBucket[key] = prevBucket;
        } else {
            keyToBucket.erase(key);
        }
        
        // Remove current bucket if empty
        if (currBucket->keys.empty()) {
            buckets.erase(currBucket);
        }
    }
    
    string getMaxKey() {
        return buckets.empty() ? "" : *buckets.back().keys.begin();
    }
    
    string getMinKey() {
        return buckets.empty() ? "" : *buckets.front().keys.begin();
    }
};`,notes:"Time: O(1) for all operations, Space: O(n)",comments:[{author:"DataStructureExpert",content:"Sophisticated design! Buckets with frequencies and linked list for ordering."},{author:"CodeReviewer42",content:"Clean handling of bucket creation and deletion."},{author:"OptimizationExpert",content:"Efficient O(1) operations for all required methods."},{author:"AlternativeThinker",content:"We could use multiple heaps but this design is more efficient."}]},{problemName:"Design Skiplist",author:"Skiplist Designer",explanation:"Implement probabilistic skip list with multiple levels. Each node has forward pointers to nodes in higher levels.",solution:`struct Node {
    int val;
    vector<Node*> forward;
    Node(int v, int level) : val(v), forward(level, nullptr) {}
};

class Skiplist {
private:
    constexpr static int MAX_LEVEL = 16;
    constexpr static double P = 0.5;
    
    Node* head;
    int level;
    random_device rd;
    mt19937 gen;
    uniform_real_distribution<> dis;
    
    int randomLevel() {
        int lvl = 1;
        while (dis(gen) < P && lvl < MAX_LEVEL) {
            lvl++;
        }
        return lvl;
    }
    
public:
    Skiplist() : head(new Node(-1, MAX_LEVEL)), level(1), gen(rd()), dis(0.0, 1.0) {}
    
    bool search(int target) {
        Node* curr = head;
        for (int i = level - 1; i >= 0; i--) {
            while (curr->forward[i] != nullptr && curr->forward[i]->val < target) {
                curr = curr->forward[i];
            }
        }
        curr = curr->forward[0];
        return curr != nullptr && curr->val == target;
    }
    
    void add(int num) {
        vector<Node*> update(MAX_LEVEL, nullptr);
        Node* curr = head;
        
        for (int i = level - 1; i >= 0; i--) {
            while (curr->forward[i] != nullptr && curr->forward[i]->val < num) {
                curr = curr->forward[i];
            }
            update[i] = curr;
        }
        
        int newLevel = randomLevel();
        if (newLevel > level) {
            for (int i = level; i < newLevel; i++) {
                update[i] = head;
            }
            level = newLevel;
        }
        
        Node* newNode = new Node(num, newLevel);
        for (int i = 0; i < newLevel; i++) {
            newNode->forward[i] = update[i]->forward[i];
            update[i]->forward[i] = newNode;
        }
    }
    
    bool erase(int num) {
        vector<Node*> update(MAX_LEVEL, nullptr);
        Node* curr = head;
        
        for (int i = level - 1; i >= 0; i--) {
            while (curr->forward[i] != nullptr && curr->forward[i]->val < num) {
                curr = curr->forward[i];
            }
            update[i] = curr;
        }
        
        curr = curr->forward[0];
        if (curr == nullptr || curr->val != num) {
            return false;
        }
        
        for (int i = 0; i < level; i++) {
            if (update[i]->forward[i] != curr) {
                break;
            }
            update[i]->forward[i] = curr->forward[i];
        }
        
        delete curr;
        
        while (level > 1 && head->forward[level - 1] == nullptr) {
            level--;
        }
        
        return true;
    }
};`,notes:"Time: O(log n) average for all operations, Space: O(n)",comments:[{author:"SkiplistExpert",content:"Classic probabilistic skip list implementation! O(log n) search, insert, delete."},{author:"CodeReviewer42",content:"Good use of random level generation for probabilistic balancing."},{author:"OptimizationExpert",content:"Efficient search using multiple levels for fast traversal."},{author:"AlternativeThinker",content:"We could use balanced BST but skiplist is simpler and has good average performance."}]},{problemName:"Maximum Depth of Binary Tree",author:"Tree Depth Calculator",explanation:"Use DFS recursion. The depth is 1 + max(left depth, right depth). Base case: null node has depth 0.",solution:`/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int maxDepth(TreeNode* root) {
        if (root == nullptr) {
            return 0;
        }
        return 1 + max(maxDepth(root->left), maxDepth(root->right));
    }
};`,notes:"Time: O(n), Space: O(h) where h is tree height",comments:[{author:"TreeExpert",content:"Classic recursive DFS! Simple and elegant solution."},{author:"CodeReviewer42",content:"Clean base case handling for null nodes."},{author:"OptimizationExpert",content:"We could use BFS for iterative solution, but recursive is more intuitive."},{author:"AlternativeThinker",content:"For very deep trees, iterative DFS with stack would avoid stack overflow."}]},{problemName:"Same Tree",author:"Tree Comparator",explanation:"Use DFS recursion. Check if current nodes are equal, then recursively check left and right subtrees.",solution:`class Solution {
public:
    bool isSameTree(TreeNode* p, TreeNode* q) {
        if (p == nullptr && q == nullptr) {
            return true;
        }
        if (p == nullptr || q == nullptr) {
            return false;
        }
        if (p->val != q->val) {
            return false;
        }
        return isSameTree(p->left, q->left) && isSameTree(p->right, q->right);
    }
};`,notes:"Time: O(n), Space: O(h)",comments:[{author:"TreeComparisonExpert",content:"Clean recursive comparison! Handles all cases: both null, one null, values different."},{author:"CodeReviewer42",content:"Good ordering of checks: null cases first, then value comparison."},{author:"OptimizationExpert",content:"We could use iterative BFS with queue for O(n) space."},{author:"AlternativeThinker",content:"For very unbalanced trees, iterative might be better to avoid stack overflow."}]},{problemName:"Invert Binary Tree",author:"Tree Inverter",explanation:"Use DFS recursion. Swap left and right children, then recursively invert both subtrees.",solution:`class Solution {
public:
    TreeNode* invertTree(TreeNode* root) {
        if (root == nullptr) {
            return nullptr;
        }
        
        // Swap left and right children
        TreeNode* temp = root->left;
        root->left = root->right;
        root->right = temp;
        
        // Recursively invert subtrees
        invertTree(root->left);
        invertTree(root->right);
        
        return root;
    }
};`,notes:"Time: O(n), Space: O(h)",comments:[{author:"TreeManipulationExpert",content:"Classic tree inversion! Simple recursive swapping."},{author:"CodeReviewer42",content:"Clean in-place modification. Returns the original root."},{author:"OptimizationExpert",content:"We could use iterative BFS with queue for O(n) space."},{author:"AlternativeThinker",content:"For very large trees, iterative approach avoids recursion stack limits."}]},{problemName:"Symmetric Tree",author:"Symmetry Checker",explanation:"Use helper function to compare two trees symmetrically. Check if left subtree is mirror of right subtree.",solution:`class Solution {
public:
    bool isSymmetric(TreeNode* root) {
        if (root == nullptr) {
            return true;
        }
        return isMirror(root->left, root->right);
    }
    
private:
    bool isMirror(TreeNode* left, TreeNode* right) {
        if (left == nullptr && right == nullptr) {
            return true;
        }
        if (left == nullptr || right == nullptr) {
            return false;
        }
        if (left->val != right->val) {
            return false;
        }
        return isMirror(left->left, right->right) && isMirror(left->right, right->left);
    }
};`,notes:"Time: O(n), Space: O(h)",comments:[{author:"SymmetryExpert",content:"Clever mirror comparison! Compares left->left with right->right and left->right with right->left."},{author:"CodeReviewer42",content:"Good separation into helper function for cleaner logic."},{author:"OptimizationExpert",content:"We could use iterative approach with queue for O(n) space."},{author:"AlternativeThinker",content:"For very wide trees, iterative BFS might be more memory efficient."}]},{problemName:"Path Sum",author:"Path Sum Checker",explanation:"Use DFS recursion. Subtract current value from target sum. If leaf node and remaining sum equals node value, path found.",solution:`class Solution {
public:
    bool hasPathSum(TreeNode* root, int targetSum) {
        if (root == nullptr) {
            return false;
        }
        
        // Check if current node is leaf and path sum equals target
        if (root->left == nullptr && root->right == nullptr) {
            return targetSum == root->val;
        }
        
        // Recursively check left and right subtrees
        int remainingSum = targetSum - root->val;
        return hasPathSum(root->left, remainingSum) || hasPathSum(root->right, remainingSum);
    }
};`,notes:"Time: O(n), Space: O(h)",comments:[{author:"PathSumExpert",content:"Clean DFS approach! Accumulates sum by subtracting node values."},{author:"CodeReviewer42",content:"Good leaf node check: both children are null."},{author:"EdgeCaseHunter",content:"Handles negative values and zero correctly."},{author:"AlternativeThinker",content:"We could use iterative DFS with stack storing both node and remaining sum."}]},{problemName:"Binary Tree Inorder Traversal",author:"Tree Traverser",explanation:"Use iterative approach with stack. Go left until null, then process node, then go right.",solution:`class Solution {
public:
    vector<int> inorderTraversal(TreeNode* root) {
        vector<int> result;
        stack<TreeNode*> st;
        TreeNode* current = root;
        
        while (current != nullptr || !st.empty()) {
            // Go to the leftmost node
            while (current != nullptr) {
                st.push(current);
                current = current->left;
            }
            
            // Process the node
            current = st.top();
            st.pop();
            result.push_back(current->val);
            
            // Go to right subtree
            current = current->right;
        }
        
        return result;
    }
};`,notes:"Time: O(n), Space: O(h)",comments:[{author:"TraversalExpert",content:"Classic iterative inorder traversal! Uses stack to simulate recursion."},{author:"CodeReviewer42",content:"Clean while loop conditions handle both current node and stack state."},{author:"OptimizationExpert",content:"More space efficient than recursion for deep trees."},{author:"AlternativeThinker",content:"Morris traversal can do this in O(1) space but is more complex."}]},{problemName:"Binary Tree Preorder Traversal",author:"Tree Traverser",explanation:"Use iterative approach with stack. Process node first, then push right child, then left child.",solution:`class Solution {
public:
    vector<int> preorderTraversal(TreeNode* root) {
        if (root == nullptr) return {};
        
        vector<int> result;
        stack<TreeNode*> st;
        st.push(root);
        
        while (!st.empty()) {
            TreeNode* node = st.top();
            st.pop();
            result.push_back(node->val);
            
            // Push right first, then left (so left is processed first)
            if (node->right != nullptr) {
                st.push(node->right);
            }
            if (node->left != nullptr) {
                st.push(node->left);
            }
        }
        
        return result;
    }
};`,notes:"Time: O(n), Space: O(h)",comments:[{author:"TraversalExpert",content:"Clean iterative preorder! Processes root, then right, then left (due to stack LIFO)."},{author:"CodeReviewer42",content:"Good ordering: push right before left so left gets processed first."},{author:"OptimizationExpert",content:"More space efficient than recursion for unbalanced trees."},{author:"AlternativeThinker",content:"We could use Morris traversal for O(1) space."}]},{problemName:"Binary Tree Postorder Traversal",author:"Tree Traverser",explanation:"Use iterative approach with two stacks. First stack for processing, second stack for result.",solution:`class Solution {
public:
    vector<int> postorderTraversal(TreeNode* root) {
        if (root == nullptr) return {};
        
        vector<int> result;
        stack<TreeNode*> st1, st2;
        st1.push(root);
        
        while (!st1.empty()) {
            TreeNode* node = st1.top();
            st1.pop();
            st2.push(node);
            
            if (node->left != nullptr) {
                st1.push(node->left);
            }
            if (node->right != nullptr) {
                st1.push(node->right);
            }
        }
        
        while (!st2.empty()) {
            result.push_back(st2.top()->val);
            st2.pop();
        }
        
        return result;
    }
};`,notes:"Time: O(n), Space: O(n)",comments:[{author:"TraversalExpert",content:"Clever two-stack approach! First stack processes in root-right-left order, second stack reverses to left-right-root."},{author:"CodeReviewer42",content:"Clean implementation. Pushes left then right to get correct order after reversal."},{author:"OptimizationExpert",content:"We could use single stack with state tracking, but this is simpler."},{author:"AlternativeThinker",content:"Morris traversal can do this in O(1) space but is complex."}]},{problemName:"Convert Sorted Array to Binary Search Tree",author:"BST Builder",explanation:"Use binary search approach. Middle element becomes root, recursively build left and right subtrees from left and right halves.",solution:`class Solution {
public:
    TreeNode* sortedArrayToBST(vector<int>& nums) {
        return buildBST(nums, 0, nums.size() - 1);
    }
    
private:
    TreeNode* buildBST(vector<int>& nums, int left, int right) {
        if (left > right) {
            return nullptr;
        }
        
        // Middle element becomes root
        int mid = left + (right - left) / 2;
        TreeNode* root = new TreeNode(nums[mid]);
        
        // Recursively build left and right subtrees
        root->left = buildBST(nums, left, mid - 1);
        root->right = buildBST(nums, mid + 1, right);
        
        return root;
    }
};`,notes:"Time: O(n), Space: O(log n) for recursion stack",comments:[{author:"BSTExpert",content:"Classic divide and conquer! Always picks middle element for balanced BST."},{author:"CodeReviewer42",content:"Clean recursive construction with proper bounds checking."},{author:"OptimizationExpert",content:"Produces perfectly balanced BST due to always choosing middle element."},{author:"AlternativeThinker",content:"We could use iterative approach but recursive is more natural for tree construction."}]},{problemName:"Balanced Binary Tree",author:"Balance Checker",explanation:"Use DFS to compute height. If subtree is unbalanced, return -1. Otherwise return height.",solution:`class Solution {
public:
    bool isBalanced(TreeNode* root) {
        return checkHeight(root) != -1;
    }
    
private:
    int checkHeight(TreeNode* node) {
        if (node == nullptr) {
            return 0;
        }
        
        int leftHeight = checkHeight(node->left);
        if (leftHeight == -1) return -1;
        
        int rightHeight = checkHeight(node->right);
        if (rightHeight == -1) return -1;
        
        if (abs(leftHeight - rightHeight) > 1) {
            return -1;
        }
        
        return 1 + max(leftHeight, rightHeight);
    }
};`,notes:"Time: O(n), Space: O(h)",comments:[{author:"BalanceExpert",content:"Efficient O(n) solution! Combines height calculation with balance checking."},{author:"CodeReviewer42",content:"Smart use of -1 to indicate unbalanced subtree."},{author:"OptimizationExpert",content:"Avoids redundant height calculations by checking balance during height computation."},{author:"AlternativeThinker",content:"We could compute heights separately but that would be O(n²) in worst case."}]},{problemName:"Minimum Depth of Binary Tree",author:"Depth Calculator",explanation:"Use BFS to find the first leaf node. The depth of first leaf is the minimum depth.",solution:`class Solution {
public:
    int minDepth(TreeNode* root) {
        if (root == nullptr) {
            return 0;
        }
        
        queue<TreeNode*> q;
        q.push(root);
        int depth = 1;
        
        while (!q.empty()) {
            int levelSize = q.size();
            for (int i = 0; i < levelSize; i++) {
                TreeNode* node = q.front();
                q.pop();
                
                // Check if this is a leaf node
                if (node->left == nullptr && node->right == nullptr) {
                    return depth;
                }
                
                if (node->left != nullptr) {
                    q.push(node->left);
                }
                if (node->right != nullptr) {
                    q.push(node->right);
                }
            }
            depth++;
        }
        
        return depth;
    }
};`,notes:"Time: O(n), Space: O(n)",comments:[{author:"BFSExpert",content:"Efficient BFS approach! Stops at first leaf node encountered."},{author:"CodeReviewer42",content:"Clean level-order traversal with depth tracking."},{author:"OptimizationExpert",content:"More efficient than DFS for finding minimum depth in unbalanced trees."},{author:"AlternativeThinker",content:"We could use DFS but BFS is optimal for minimum depth."}]},{problemName:"Diameter of Binary Tree",author:"Diameter Calculator",explanation:"For each node, diameter through that node is left height + right height. Track maximum diameter during DFS.",solution:`class Solution {
public:
    int diameterOfBinaryTree(TreeNode* root) {
        int diameter = 0;
        calculateHeight(root, diameter);
        return diameter;
    }
    
private:
    int calculateHeight(TreeNode* node, int& diameter) {
        if (node == nullptr) {
            return 0;
        }
        
        int leftHeight = calculateHeight(node->left, diameter);
        int rightHeight = calculateHeight(node->right, diameter);
        
        // Update diameter if path through current node is larger
        diameter = max(diameter, leftHeight + rightHeight);
        
        return 1 + max(leftHeight, rightHeight);
    }
};`,notes:"Time: O(n), Space: O(h)",comments:[{author:"TreeMetricsExpert",content:"Clever O(n) solution! Combines height calculation with diameter tracking."},{author:"CodeReviewer42",content:"Good use of reference parameter to track maximum diameter."},{author:"OptimizationExpert",content:"Computes diameter in same pass as height calculation."},{author:"AlternativeThinker",content:"We could compute heights separately but that would be less efficient."}]},{problemName:"Binary Tree Level Order Traversal",author:"Level Order Traverser",explanation:"Use BFS with queue. Process each level, store nodes in result level by level.",solution:`class Solution {
public:
    vector<vector<int>> levelOrder(TreeNode* root) {
        if (root == nullptr) return {};
        
        vector<vector<int>> result;
        queue<TreeNode*> q;
        q.push(root);
        
        while (!q.empty()) {
            int levelSize = q.size();
            vector<int> currentLevel;
            
            for (int i = 0; i < levelSize; i++) {
                TreeNode* node = q.front();
                q.pop();
                currentLevel.push_back(node->val);
                
                if (node->left != nullptr) {
                    q.push(node->left);
                }
                if (node->right != nullptr) {
                    q.push(node->right);
                }
            }
            
            result.push_back(currentLevel);
        }
        
        return result;
    }
};`,notes:"Time: O(n), Space: O(n)",comments:[{author:"BFSTraversalExpert",content:"Classic BFS level order traversal! Clean implementation."},{author:"CodeReviewer42",content:"Good use of levelSize to process each level separately."},{author:"OptimizationExpert",content:"Optimal for level order traversal. DFS would be less intuitive."},{author:"AlternativeThinker",content:"We could use DFS with level tracking, but BFS is more natural."}]},{problemName:"Validate Binary Search Tree",author:"BST Validator",explanation:"Use DFS with min and max bounds. Each node must be between min and max. Update bounds recursively.",solution:`class Solution {
public:
    bool isValidBST(TreeNode* root) {
        return validate(root, LONG_MIN, LONG_MAX);
    }
    
private:
    bool validate(TreeNode* node, long minVal, long maxVal) {
        if (node == nullptr) {
            return true;
        }
        
        if (node->val <= minVal || node->val >= maxVal) {
            return false;
        }
        
        return validate(node->left, minVal, node->val) && 
               validate(node->right, node->val, maxVal);
    }
};`,notes:"Time: O(n), Space: O(h)",comments:[{author:"BSTValidationExpert",content:"Elegant bounds checking! Each node must be in (min, max) range."},{author:"CodeReviewer42",content:"Good use of LONG_MIN/MAX to handle edge cases with INT_MIN/INT_MAX."},{author:"OptimizationExpert",content:"We could use inorder traversal to check if sorted, but this is more direct."},{author:"AlternativeThinker",content:"Iterative inorder traversal would use O(h) space instead of recursion stack."}]},{problemName:"Kth Smallest Element in a BST",author:"BST Traverser",explanation:"Use iterative inorder traversal. Stop when kth element is found.",solution:`class Solution {
public:
    int kthSmallest(TreeNode* root, int k) {
        stack<TreeNode*> st;
        TreeNode* current = root;
        int count = 0;
        
        while (current != nullptr || !st.empty()) {
            while (current != nullptr) {
                st.push(current);
                current = current->left;
            }
            
            current = st.top();
            st.pop();
            count++;
            
            if (count == k) {
                return current->val;
            }
            
            current = current->right;
        }
        
        return -1; // Should not reach here if k is valid
    }
};`,notes:"Time: O(h + k), Space: O(h)",comments:[{author:"BSTSearchExpert",content:"Efficient iterative inorder! Stops early when kth element is found."},{author:"CodeReviewer42",content:"Clean counter implementation. No unnecessary traversals."},{author:"OptimizationExpert",content:"Better than O(n) solution when k is small compared to n."},{author:"AlternativeThinker",content:"We could use recursive inorder but iterative gives better space control."}]},{problemName:"Construct Binary Tree from Preorder and Inorder Traversal",author:"Tree Constructor",explanation:"Use recursion. First element in preorder is root. Find root in inorder to split left and right subtrees.",solution:`class Solution {
public:
    TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {
        unordered_map<int, int> inorderMap;
        for (int i = 0; i < inorder.size(); i++) {
            inorderMap[inorder[i]] = i;
        }
        return build(preorder, 0, preorder.size() - 1, inorder, 0, inorder.size() - 1, inorderMap);
    }
    
private:
    TreeNode* build(vector<int>& preorder, int preStart, int preEnd,
                   vector<int>& inorder, int inStart, int inEnd,
                   unordered_map<int, int>& inorderMap) {
        if (preStart > preEnd || inStart > inEnd) {
            return nullptr;
        }
        
        // Root is first element in preorder
        TreeNode* root = new TreeNode(preorder[preStart]);
        int rootIndex = inorderMap[root->val];
        int leftSize = rootIndex - inStart;
        
        // Recursively build left and right subtrees
        root->left = build(preorder, preStart + 1, preStart + leftSize,
                          inorder, inStart, rootIndex - 1, inorderMap);
        root->right = build(preorder, preStart + leftSize + 1, preEnd,
                           inorder, rootIndex + 1, inEnd, inorderMap);
        
        return root;
    }
};`,notes:"Time: O(n), Space: O(n)",comments:[{author:"TreeConstructionExpert",content:"Classic tree construction! Uses hash map for O(1) inorder lookups."},{author:"CodeReviewer42",content:"Clean recursive construction with proper index calculations."},{author:"OptimizationExpert",content:"Hash map makes root finding O(1) instead of O(n) linear search."},{author:"AlternativeThinker",content:"We could use iterative approach but recursive is more intuitive."}]},{problemName:"Construct Binary Tree from Inorder and Postorder Traversal",author:"Tree Constructor",explanation:"Use recursion. Last element in postorder is root. Find root in inorder to split left and right subtrees.",solution:`class Solution {
public:
    TreeNode* buildTree(vector<int>& inorder, vector<int>& postorder) {
        unordered_map<int, int> inorderMap;
        for (int i = 0; i < inorder.size(); i++) {
            inorderMap[inorder[i]] = i;
        }
        return build(inorder, 0, inorder.size() - 1, postorder, 0, postorder.size() - 1, inorderMap);
    }
    
private:
    TreeNode* build(vector<int>& inorder, int inStart, int inEnd,
                   vector<int>& postorder, int postStart, int postEnd,
                   unordered_map<int, int>& inorderMap) {
        if (inStart > inEnd || postStart > postEnd) {
            return nullptr;
        }
        
        // Root is last element in postorder
        TreeNode* root = new TreeNode(postorder[postEnd]);
        int rootIndex = inorderMap[root->val];
        int leftSize = rootIndex - inStart;
        
        // Recursively build left and right subtrees
        root->left = build(inorder, inStart, rootIndex - 1,
                          postorder, postStart, postStart + leftSize - 1, inorderMap);
        root->right = build(inorder, rootIndex + 1, inEnd,
                           postorder, postStart + leftSize, postEnd - 1, inorderMap);
        
        return root;
    }
};`,notes:"Time: O(n), Space: O(n)",comments:[{author:"TreeConstructionExpert",content:"Mirror of preorder-inorder construction! Uses postorder's last element as root."},{author:"CodeReviewer42",content:"Clean index calculations for postorder ranges."},{author:"OptimizationExpert",content:"Hash map makes construction efficient."},{author:"AlternativeThinker",content:"We could use iterative approach with stack."}]},{problemName:"Lowest Common Ancestor of a Binary Tree",author:"LCA Finder",explanation:"Use DFS recursion. If current node is p or q, return it. Recursively search left and right. If both sides return non-null, current is LCA.",solution:`class Solution {
public:
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        if (root == nullptr || root == p || root == q) {
            return root;
        }
        
        TreeNode* left = lowestCommonAncestor(root->left, p, q);
        TreeNode* right = lowestCommonAncestor(root->right, p, q);
        
        if (left != nullptr && right != nullptr) {
            return root;
        }
        
        return left != nullptr ? left : right;
    }
};`,notes:"Time: O(n), Space: O(h)",comments:[{author:"LCAExpert",content:"Elegant recursive solution! Returns LCA when both subtrees contain targets."},{author:"CodeReviewer42",content:"Clean base cases and combination logic."},{author:"OptimizationExpert",content:"Handles cases where one node is ancestor of another."},{author:"AlternativeThinker",content:"We could store parent pointers and find intersection, but this is simpler."}]},{problemName:"Binary Tree Right Side View",author:"Right View Traverser",explanation:"Use BFS level order traversal. For each level, take the last node (rightmost node).",solution:`class Solution {
public:
    vector<int> rightSideView(TreeNode* root) {
        if (root == nullptr) return {};
        
        vector<int> result;
        queue<TreeNode*> q;
        q.push(root);
        
        while (!q.empty()) {
            int levelSize = q.size();
            for (int i = 0; i < levelSize; i++) {
                TreeNode* node = q.front();
                q.pop();
                
                // Last node in current level
                if (i == levelSize - 1) {
                    result.push_back(node->val);
                }
                
                if (node->left != nullptr) {
                    q.push(node->left);
                }
                if (node->right != nullptr) {
                    q.push(node->right);
                }
            }
        }
        
        return result;
    }
};`,notes:"Time: O(n), Space: O(n)",comments:[{author:"TreeViewExpert",content:"Clean BFS approach! Takes last node of each level for right side view."},{author:"CodeReviewer42",content:"Good use of levelSize to identify last node in each level."},{author:"OptimizationExpert",content:"We could use DFS with level tracking, but BFS is more intuitive."},{author:"AlternativeThinker",content:"DFS would be more space efficient for very wide trees."}]},{problemName:"Count Complete Tree Nodes",author:"Node Counter",explanation:"Use binary search. Check if left and right heights are equal. If equal, use formula 2^h - 1. Otherwise recurse.",solution:`class Solution {
public:
    int countNodes(TreeNode* root) {
        if (root == nullptr) return 0;
        
        int leftHeight = getHeight(root->left);
        int rightHeight = getHeight(root->right);
        
        if (leftHeight == rightHeight) {
            // Left subtree is perfect binary tree
            return (1 << leftHeight) + countNodes(root->right);
        } else {
            // Right subtree is perfect binary tree
            return (1 << rightHeight) + countNodes(root->left);
        }
    }
    
private:
    int getHeight(TreeNode* node) {
        int height = 0;
        while (node != nullptr) {
            height++;
            node = node->left;
        }
        return height;
    }
};`,notes:"Time: O(log² n), Space: O(log n)",comments:[{author:"CompleteTreeExpert",content:"Clever binary search approach! Uses height to determine perfect subtrees."},{author:"CodeReviewer42",content:"Efficient O(log² n) solution instead of O(n)."},{author:"OptimizationExpert",content:"Uses bit shifting for power of two calculations."},{author:"AlternativeThinker",content:"We could use simple DFS but that would be O(n)."}]},{problemName:"Serialize and Deserialize Binary Tree",author:"Tree Serializer",explanation:"Use preorder traversal with null markers. For serialization, use 'X' for null. For deserialization, rebuild tree recursively.",solution:`class Codec {
public:
    // Encodes a tree to a single string.
    string serialize(TreeNode* root) {
        if (root == nullptr) {
            return "X,";
        }
        
        string left = serialize(root->left);
        string right = serialize(root->right);
        
        return to_string(root->val) + "," + left + right;
    }
    
    // Decodes your encoded data to tree.
    TreeNode* deserialize(string data) {
        queue<string> nodes;
        stringstream ss(data);
        string item;
        
        while (getline(ss, item, ',')) {
            nodes.push(item);
        }
        
        return buildTree(nodes);
    }
    
private:
    TreeNode* buildTree(queue<string>& nodes) {
        string val = nodes.front();
        nodes.pop();
        
        if (val == "X") {
            return nullptr;
        }
        
        TreeNode* root = new TreeNode(stoi(val));
        root->left = buildTree(nodes);
        root->right = buildTree(nodes);
        
        return root;
    }
};`,notes:"Time: O(n), Space: O(n)",comments:[{author:"SerializationExpert",content:"Clean preorder serialization! Uses 'X' for null markers."},{author:"CodeReviewer42",content:"Good use of queue for efficient deserialization."},{author:"OptimizationExpert",content:"Compact representation with comma separation."},{author:"AlternativeThinker",content:"We could use level order but preorder is more space efficient."}]},{problemName:"Flatten Binary Tree to Linked List",author:"Tree Flattener",explanation:"Use postorder traversal. Flatten right subtree, then left subtree, then attach them to root's right.",solution:`class Solution {
public:
    void flatten(TreeNode* root) {
        if (root == nullptr) return;
        
        flatten(root->left);
        flatten(root->right);
        
        // Save right subtree
        TreeNode* right = root->right;
        
        // Move left subtree to right
        root->right = root->left;
        root->left = nullptr;
        
        // Find the end of new right subtree and attach original right
        TreeNode* current = root;
        while (current->right != nullptr) {
            current = current->right;
        }
        current->right = right;
    }
};`,notes:"Time: O(n), Space: O(h)",comments:[{author:"TreeFlatteningExpert",content:"Clever postorder approach! Processes children before modifying parent."},{author:"CodeReviewer42",content:"Good pointer manipulation to preserve original right subtree."},{author:"OptimizationExpert",content:"In-place modification without extra data structures."},{author:"AlternativeThinker",content:"We could use iterative approach with stack for O(n) space."}]},{problemName:"Populating Next Right Pointers in Each Node",author:"Next Pointer Populator",explanation:"Use level order traversal. For each level, connect nodes from left to right. Handle perfect binary tree property.",solution:`/*
// Definition for a Node.
class Node {
public:
    int val;
    Node* left;
    Node* right;
    Node* next;
    Node() : val(0), left(NULL), right(NULL), next(NULL) {}
    Node(int _val) : val(_val), left(NULL), right(NULL), next(NULL) {}
    Node(int _val, Node* _left, Node* _right, Node* _next)
        : val(_val), left(_left), right(_right), next(_next) {}
};
*/
class Solution {
public:
    Node* connect(Node* root) {
        if (root == nullptr) return nullptr;
        
        Node* leftmost = root;
        
        while (leftmost->left != nullptr) {
            Node* current = leftmost;
            
            while (current != nullptr) {
                // Connect left child to right child
                current->left->next = current->right;
                
                // Connect right child to next node's left child
                if (current->next != nullptr) {
                    current->right->next = current->next->left;
                }
                
                current = current->next;
            }
            
            leftmost = leftmost->left;
        }
        
        return root;
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"NextPointerExpert",content:"Elegant O(1) space solution! Uses perfect binary tree property."},{author:"CodeReviewer42",content:"Clean level-by-level processing without queue."},{author:"OptimizationExpert",content:"Optimal for perfect binary trees. No extra space needed."},{author:"AlternativeThinker",content:"For non-perfect trees, we'd need level order traversal with queue."}]},{problemName:"Sum Root to Leaf Numbers",author:"Path Sum Calculator",explanation:"Use DFS recursion. Accumulate number along path. When leaf reached, add to total sum.",solution:`class Solution {
public:
    int sumNumbers(TreeNode* root) {
        return dfs(root, 0);
    }
    
private:
    int dfs(TreeNode* node, int currentSum) {
        if (node == nullptr) {
            return 0;
        }
        
        currentSum = currentSum * 10 + node->val;
        
        // If leaf node, return the number
        if (node->left == nullptr && node->right == nullptr) {
            return currentSum;
        }
        
        return dfs(node->left, currentSum) + dfs(node->right, currentSum);
    }
};`,notes:"Time: O(n), Space: O(h)",comments:[{author:"PathSumExpert",content:"Clean DFS accumulation! Builds number digit by digit."},{author:"CodeReviewer42",content:"Good leaf node check and sum accumulation."},{author:"OptimizationExpert",content:"Efficient single pass solution."},{author:"AlternativeThinker",content:"We could use iterative DFS with stack storing both node and current sum."}]},{problemName:"House Robber III",author:"Tree DP Expert",explanation:"Use DP with DFS. For each node, return [rob_this_node, skip_this_node]. rob = node.val + left.skip + right.skip, skip = max(left) + max(right).",solution:`class Solution {
public:
    int rob(TreeNode* root) {
        auto result = dfs(root);
        return max(result[0], result[1]);
    }
    
private:
    vector<int> dfs(TreeNode* node) {
        if (node == nullptr) {
            return {0, 0};
        }
        
        vector<int> left = dfs(node->left);
        vector<int> right = dfs(node->right);
        
        // rob current node: node->val + skip left + skip right
        int rob = node->val + left[1] + right[1];
        
        // skip current node: max of left (rob or skip) + max of right (rob or skip)
        int skip = max(left[0], left[1]) + max(right[0], right[1]);
        
        return {rob, skip};
    }
};`,notes:"Time: O(n), Space: O(h)",comments:[{author:"TreeDPExpert",content:"Elegant DP solution! Returns [rob, skip] for each subtree."},{author:"CodeReviewer42",content:"Clean recursive DP with proper state tracking."},{author:"OptimizationExpert",content:"Optimal O(n) solution with memoization built into recursion."},{author:"AlternativeThinker",content:"We could use memoization with hash map but recursion handles it naturally."}]},{problemName:"Path Sum III",author:"Path Counter",explanation:"Use DFS with prefix sum. Track cumulative sum and use hash map to count paths ending at current node with target sum.",solution:`class Solution {
public:
    int pathSum(TreeNode* root, int targetSum) {
        unordered_map<long, int> prefixSum;
        prefixSum[0] = 1; // Base case: sum 0 appears once
        return dfs(root, 0, targetSum, prefixSum);
    }
    
private:
    int dfs(TreeNode* node, long currentSum, int target, unordered_map<long, int>& prefixSum) {
        if (node == nullptr) {
            return 0;
        }
        
        currentSum += node->val;
        int count = prefixSum[currentSum - target];
        
        prefixSum[currentSum]++;
        
        count += dfs(node->left, currentSum, target, prefixSum);
        count += dfs(node->right, currentSum, target, prefixSum);
        
        prefixSum[currentSum]--; // Backtrack
        
        return count;
    }
};`,notes:"Time: O(n), Space: O(n)",comments:[{author:"PathCountingExpert",content:"Clever prefix sum approach! Similar to subarray sum equals k."},{author:"CodeReviewer42",content:"Good use of hash map to track prefix sums and backtracking."},{author:"OptimizationExpert",content:"Efficient O(n) solution instead of O(n²) naive approach."},{author:"AlternativeThinker",content:"We could use double DFS but that would be O(n²)."}]},{problemName:"Find Largest Value in Each Tree Row",author:"Level Max Finder",explanation:"Use BFS level order traversal. For each level, track the maximum value.",solution:`class Solution {
public:
    vector<int> largestValues(TreeNode* root) {
        if (root == nullptr) return {};
        
        vector<int> result;
        queue<TreeNode*> q;
        q.push(root);
        
        while (!q.empty()) {
            int levelSize = q.size();
            int maxVal = INT_MIN;
            
            for (int i = 0; i < levelSize; i++) {
                TreeNode* node = q.front();
                q.pop();
                maxVal = max(maxVal, node->val);
                
                if (node->left != nullptr) {
                    q.push(node->left);
                }
                if (node->right != nullptr) {
                    q.push(node->right);
                }
            }
            
            result.push_back(maxVal);
        }
        
        return result;
    }
};`,notes:"Time: O(n), Space: O(n)",comments:[{author:"LevelTraversalExpert",content:"Clean BFS approach! Tracks maximum value for each level."},{author:"CodeReviewer42",content:"Good use of levelSize to process each level separately."},{author:"OptimizationExpert",content:"We could use DFS with level tracking, but BFS is more natural."},{author:"AlternativeThinker",content:"DFS would be more space efficient for very wide trees."}]},{problemName:"Binary Tree Maximum Path Sum",author:"Path Sum Expert",explanation:"Use DFS. For each node, compute max path sum through that node. Track global maximum. Return max single path for recursion.",solution:`class Solution {
public:
    int maxPathSum(TreeNode* root) {
        int maxSum = INT_MIN;
        dfs(root, maxSum);
        return maxSum;
    }
    
private:
    int dfs(TreeNode* node, int& maxSum) {
        if (node == nullptr) {
            return 0;
        }
        
        // Compute max path sums for left and right subtrees
        int leftMax = max(0, dfs(node->left, maxSum));
        int rightMax = max(0, dfs(node->right, maxSum));
        
        // Update global maximum with path through current node
        maxSum = max(maxSum, leftMax + rightMax + node->val);
        
        // Return max single path (can only take one branch)
        return node->val + max(leftMax, rightMax);
    }
};`,notes:"Time: O(n), Space: O(h)",comments:[{author:"PathSumMaster",content:"Elegant DFS solution! Tracks both global max and returns single path max."},{author:"CodeReviewer42",content:"Good use of max(0, ...) to handle negative paths."},{author:"OptimizationExpert",content:"Optimal O(n) solution with single pass."},{author:"AlternativeThinker",content:"We could use iterative postorder but recursive is cleaner."}]},{problemName:"Serialize and Deserialize BST",author:"BST Serializer",explanation:"Use preorder traversal. For BST, we can reconstruct without null markers using value ranges.",solution:`class Codec {
public:
    // Encodes a tree to a single string.
    string serialize(TreeNode* root) {
        if (root == nullptr) return "";
        return to_string(root->val) + "," + serialize(root->left) + serialize(root->right);
    }
    
    // Decodes your encoded data to tree.
    TreeNode* deserialize(string data) {
        if (data.empty()) return nullptr;
        
        stringstream ss(data);
        string item;
        vector<int> values;
        
        while (getline(ss, item, ',')) {
            values.push_back(stoi(item));
        }
        
        return buildBST(values, 0, values.size() - 1);
    }
    
private:
    TreeNode* buildBST(vector<int>& values, int start, int end) {
        if (start > end) return nullptr;
        
        TreeNode* root = new TreeNode(values[start]);
        
        // Find first value greater than root (start of right subtree)
        int rightStart = start + 1;
        while (rightStart <= end && values[rightStart] < values[start]) {
            rightStart++;
        }
        
        root->left = buildBST(values, start + 1, rightStart - 1);
        root->right = buildBST(values, rightStart, end);
        
        return root;
    }
};`,notes:"Time: O(n), Space: O(n)",comments:[{author:"BSTSerializationExpert",content:"Clever BST-specific serialization! No null markers needed due to BST property."},{author:"CodeReviewer42",content:"Good use of BST property to split left and right subtrees."},{author:"OptimizationExpert",content:"More compact than general binary tree serialization."},{author:"AlternativeThinker",content:"We could use the same method as general binary tree but this is more efficient."}]},{problemName:"Recover Binary Search Tree",author:"BST Repairer",explanation:"Use inorder traversal to find two swapped nodes. Track first, middle, last violations of BST property.",solution:`class Solution {
public:
    void recoverTree(TreeNode* root) {
        TreeNode* first = nullptr;
        TreeNode* middle = nullptr;
        TreeNode* last = nullptr;
        TreeNode* prev = nullptr;
        
        inorder(root, prev, first, middle, last);
        
        if (first && last) {
            swap(first->val, last->val);
        } else if (first && middle) {
            swap(first->val, middle->val);
        }
    }
    
private:
    void inorder(TreeNode* node, TreeNode*& prev, TreeNode*& first, TreeNode*& middle, TreeNode*& last) {
        if (node == nullptr) return;
        
        inorder(node->left, prev, first, middle, last);
        
        if (prev != nullptr && node->val < prev->val) {
            if (first == nullptr) {
                first = prev;
                middle = node;
            } else {
                last = node;
            }
        }
        prev = node;
        
        inorder(node->right, prev, first, middle, last);
    }
};`,notes:"Time: O(n), Space: O(h)",comments:[{author:"BSTRepairExpert",content:"Clever inorder traversal! Tracks violations to identify swapped nodes."},{author:"CodeReviewer42",content:"Good handling of both adjacent and non-adjacent swapped nodes."},{author:"OptimizationExpert",content:"O(1) space with Morris traversal possible but more complex."},{author:"AlternativeThinker",content:"We could store inorder traversal and find swapped elements, but this is O(1) space."}]},{problemName:"Vertical Order Traversal of a Binary Tree",author:"Vertical Traverser",explanation:"Use BFS with column tracking. Store nodes by column and row. Sort nodes in same (col, row) by value.",solution:`class Solution {
public:
    vector<vector<int>> verticalTraversal(TreeNode* root) {
        if (root == nullptr) return {};
        
        map<int, map<int, multiset<int>>> nodes; // col -> row -> values
        queue<pair<TreeNode*, pair<int, int>>> q; // node, <col, row>
        q.push({root, {0, 0}});
        
        while (!q.empty()) {
            auto [node, pos] = q.front();
            q.pop();
            int col = pos.first, row = pos.second;
            
            nodes[col][row].insert(node->val);
            
            if (node->left != nullptr) {
                q.push({node->left, {col - 1, row + 1}});
            }
            if (node->right != nullptr) {
                q.push({node->right, {col + 1, row + 1}});
            }
        }
        
        vector<vector<int>> result;
        for (auto& [col, rows] : nodes) {
            vector<int> column;
            for (auto& [row, values] : rows) {
                column.insert(column.end(), values.begin(), values.end());
            }
            result.push_back(column);
        }
        
        return result;
    }
};`,notes:"Time: O(n log n), Space: O(n)",comments:[{author:"VerticalTraversalExpert",content:"Comprehensive BFS with coordinate tracking! Handles sorting requirements."},{author:"CodeReviewer42",content:"Good use of nested maps and multisets for proper ordering."},{author:"OptimizationExpert",content:"We could use DFS but BFS ensures proper row ordering."},{author:"AlternativeThinker",content:"We could store all nodes and sort once at the end."}]},{problemName:"Binary Tree Cameras",author:"Camera Placer",explanation:"Use DFS with state: 0=not covered, 1=covered by camera, 2=has camera. Place cameras at nodes that are not covered.",solution:`class Solution {
public:
    int minCameraCover(TreeNode* root) {
        int cameras = 0;
        int rootState = dfs(root, cameras);
        
        // If root is not covered, need to place camera at root
        if (rootState == 0) {
            cameras++;
        }
        
        return cameras;
    }
    
private:
    // 0: not covered
    // 1: covered by camera
    // 2: has camera
    int dfs(TreeNode* node, int& cameras) {
        if (node == nullptr) {
            return 1; // null nodes are considered covered
        }
        
        int left = dfs(node->left, cameras);
        int right = dfs(node->right, cameras);
        
        // If any child is not covered, place camera here
        if (left == 0 || right == 0) {
            cameras++;
            return 2;
        }
        
        // If any child has camera, this node is covered
        if (left == 2 || right == 2) {
            return 1;
        }
        
        // Otherwise, this node is not covered
        return 0;
    }
};`,notes:"Time: O(n), Space: O(h)",comments:[{author:"CameraPlacementExpert",content:"Clever state machine! Places cameras only when necessary."},{author:"CodeReviewer42",content:"Good state definitions and transition logic."},{author:"OptimizationExpert",content:"Optimal greedy solution. Places cameras at uncovered nodes' parents."},{author:"AlternativeThinker",content:"We could use DP with more states but this is elegant."}]},{problemName:"Sum of Distances in Tree",author:"Tree Distance Calculator",explanation:"Use two DFS passes. First pass computes subtree sizes and sum of distances from root. Second pass computes distances for all nodes using rerooting.",solution:`class Solution {
public:
    vector<int> sumOfDistancesInTree(int n, vector<vector<int>>& edges) {
        // Build adjacency list
        vector<vector<int>> graph(n);
        for (auto& edge : edges) {
            graph[edge[0]].push_back(edge[1]);
            graph[edge[1]].push_back(edge[0]);
        }
        
        vector<int> count(n, 1); // subtree node count
        vector<int> res(n, 0);   // sum of distances
        
        // First DFS: compute count and res for root 0
        dfs1(0, -1, graph, count, res);
        
        // Second DFS: compute res for all nodes
        dfs2(0, -1, graph, count, res, n);
        
        return res;
    }
    
private:
    void dfs1(int node, int parent, vector<vector<int>>& graph, vector<int>& count, vector<int>& res) {
        for (int neighbor : graph[node]) {
            if (neighbor == parent) continue;
            dfs1(neighbor, node, graph, count, res);
            count[node] += count[neighbor];
            res[node] += res[neighbor] + count[neighbor];
        }
    }
    
    void dfs2(int node, int parent, vector<vector<int>>& graph, vector<int>& count, vector<int>& res, int n) {
        for (int neighbor : graph[node]) {
            if (neighbor == parent) continue;
            // When moving root from node to neighbor:
            // - count[neighbor] nodes get 1 closer
            // - (n - count[neighbor]) nodes get 1 farther
            res[neighbor] = res[node] - count[neighbor] + (n - count[neighbor]);
            dfs2(neighbor, node, graph, count, res, n);
        }
    }
};`,notes:"Time: O(n), Space: O(n)",comments:[{author:"TreeDistanceExpert",content:"Brilliant rerooting technique! Two DFS passes compute all distances efficiently."},{author:"CodeReviewer42",content:"Clean mathematical formula for distance transfer during rerooting."},{author:"OptimizationExpert",content:"Optimal O(n) solution instead of O(n²) naive approach."},{author:"AlternativeThinker",content:"We could use BFS from each node but that would be O(n²)."}]},{problemName:"Number of Ways to Reorder Array to Get Same BST",author:"BST Counting Expert",explanation:"Use recursion with combinatorics. For each root, left and right subtrees can be interleaved in C(n-1, left_size) ways.",solution:`class Solution {
public:
    int numOfWays(vector<int>& nums) {
        int n = nums.size();
        // Precompute combinations using Pascal's triangle
        comb = vector<vector<long>>(n + 1, vector<long>(n + 1, 0));
        for (int i = 0; i <= n; i++) {
            comb[i][0] = comb[i][i] = 1;
            for (int j = 1; j < i; j++) {
                comb[i][j] = (comb[i-1][j-1] + comb[i-1][j]) % MOD;
            }
        }
        
        return (dfs(nums) - 1) % MOD;
    }
    
private:
    const int MOD = 1e9 + 7;
    vector<vector<long>> comb;
    
    long dfs(vector<int>& nums) {
        int n = nums.size();
        if (n <= 2) return 1;
        
        vector<int> left, right;
        int root = nums[0];
        
        for (int i = 1; i < n; i++) {
            if (nums[i] < root) {
                left.push_back(nums[i]);
            } else {
                right.push_back(nums[i]);
            }
        }
        
        long leftWays = dfs(left);
        long rightWays = dfs(right);
        
        // Number of interleavings: C(n-1, left.size())
        return (comb[n-1][left.size()] * ((leftWays * rightWays) % MOD)) % MOD;
    }
};`,notes:"Time: O(n²), Space: O(n²)",comments:[{author:"BSTCountingExpert",content:"Elegant combinatorial solution! Uses recursion with combination counting."},{author:"CodeReviewer42",content:"Good use of Pascal's triangle for efficient combination calculation."},{author:"OptimizationExpert",content:"We could compute combinations on the fly but precomputation is efficient."},{author:"AlternativeThinker",content:"Dynamic programming approach is also possible but recursive is cleaner."}]},{problemName:"Step-By-Step Directions From a Binary Tree Node to Another",author:"Path Finder",explanation:"Find LCA of start and dest. Build path from start to LCA (all 'U'), then from LCA to dest.",solution:`class Solution {
public:
    string getDirections(TreeNode* root, int startValue, int destValue) {
        // Find paths from root to start and dest
        string startPath, destPath;
        findPath(root, startValue, startPath);
        findPath(root, destValue, destPath);
        
        // Find common prefix (path to LCA)
        int i = 0;
        while (i < startPath.length() && i < destPath.length() && startPath[i] == destPath[i]) {
            i++;
        }
        
        // From start to LCA: all 'U'
        string result = string(startPath.length() - i, 'U');
        
        // From LCA to dest: remaining dest path
        result += destPath.substr(i);
        
        return result;
    }
    
private:
    bool findPath(TreeNode* node, int target, string& path) {
        if (node == nullptr) return false;
        if (node->val == target) return true;
        
        // Try left subtree
        path.push_back('L');
        if (findPath(node->left, target, path)) return true;
        path.pop_back();
        
        // Try right subtree
        path.push_back('R');
        if (findPath(node->right, target, path)) return true;
        path.pop_back();
        
        return false;
    }
};`,notes:"Time: O(n), Space: O(h)",comments:[{author:"PathFindingExpert",content:"Clever LCA-based approach! Builds paths and finds common prefix."},{author:"CodeReviewer42",content:"Clean path building with backtracking."},{author:"OptimizationExpert",content:"Efficient O(n) solution with single DFS for each path."},{author:"AlternativeThinker",content:"We could find LCA directly but building paths is simpler."}]},{problemName:"Climbing Stairs",author:"DP Sequence Expert",explanation:"Use Fibonacci-like sequence. Ways to reach step n = ways(n-1) + ways(n-2). Base cases: 1 way for step 1, 2 ways for step 2.",solution:`class Solution {
public:
    int climbStairs(int n) {
        if (n <= 2) return n;
        
        int prev1 = 1, prev2 = 2;
        for (int i = 3; i <= n; i++) {
            int current = prev1 + prev2;
            prev1 = prev2;
            prev2 = current;
        }
        return prev2;
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"DPExpert",content:"Classic Fibonacci DP! Optimal O(1) space solution."},{author:"CodeReviewer42",content:"Clean iterative approach with two variables."},{author:"MathGeek",content:"This is essentially the Fibonacci sequence shifted by one position."},{author:"AlternativeThinker",content:"We could use matrix exponentiation for O(log n) time but that's overkill."}]},{problemName:"House Robber",author:"DP Decision Maker",explanation:"For each house, choose max(rob current + max from i-2, skip current + max from i-1).",solution:`class Solution {
public:
    int rob(vector<int>& nums) {
        int n = nums.size();
        if (n == 0) return 0;
        if (n == 1) return nums[0];
        
        int prev2 = 0, prev1 = nums[0];
        for (int i = 1; i < n; i++) {
            int current = max(prev1, prev2 + nums[i]);
            prev2 = prev1;
            prev1 = current;
        }
        return prev1;
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"DPExpert",content:"Classic 1D DP! Tracks two previous states for optimal decision making."},{author:"CodeReviewer42",content:"Clean state transition: rob current or skip current."},{author:"OptimizationExpert",content:"O(1) space instead of O(n) DP array."},{author:"AlternativeThinker",content:"We could use recursion with memoization but iterative is more efficient."}]},{problemName:"Divisor Game",author:"Game Theory Expert",explanation:"Mathematical solution: Alice wins if n is even, loses if n is odd.",solution:`class Solution {
public:
    bool divisorGame(int n) {
        return n % 2 == 0;
    }
};`,notes:"Time: O(1), Space: O(1)",comments:[{author:"GameTheoryExpert",content:"Elegant mathematical solution! Even numbers guarantee win for Alice."},{author:"CodeReviewer42",content:"Simplest possible implementation. No DP needed."},{author:"MathGeek",content:"Proof: For even n, Alice can always choose 1, leaving odd n for Bob. Odd numbers have only odd divisors."},{author:"AlternativeThinker",content:"We could use DP with O(n²) time but this is optimal."}]},{problemName:"Fibonacci Number",author:"Sequence Calculator",explanation:"Classic Fibonacci sequence. F(n) = F(n-1) + F(n-2) with base cases F(0)=0, F(1)=1.",solution:`class Solution {
public:
    int fib(int n) {
        if (n <= 1) return n;
        
        int prev1 = 0, prev2 = 1;
        for (int i = 2; i <= n; i++) {
            int current = prev1 + prev2;
            prev1 = prev2;
            prev2 = current;
        }
        return prev2;
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"SequenceExpert",content:"Classic iterative Fibonacci! Optimal O(1) space."},{author:"CodeReviewer42",content:"Clean implementation with two variables."},{author:"OptimizationExpert",content:"Better than recursion which would be O(2^n) without memoization."},{author:"AlternativeThinker",content:"We could use matrix exponentiation for O(log n) time."}]},{problemName:"N-th Tribonacci Number",author:"Sequence Calculator",explanation:"Tribonacci sequence: T(n) = T(n-1) + T(n-2) + T(n-3) with base cases T(0)=0, T(1)=1, T(2)=1.",solution:`class Solution {
public:
    int tribonacci(int n) {
        if (n == 0) return 0;
        if (n <= 2) return 1;
        
        int a = 0, b = 1, c = 1;
        for (int i = 3; i <= n; i++) {
            int d = a + b + c;
            a = b;
            b = c;
            c = d;
        }
        return c;
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"SequenceExpert",content:"Tribonacci extension of Fibonacci! Uses three variables."},{author:"CodeReviewer42",content:"Clean iterative approach with three state variables."},{author:"OptimizationExpert",content:"O(1) space instead of O(n) DP array."},{author:"AlternativeThinker",content:"We could use matrix exponentiation for O(log n) time."}]},{problemName:"Min Cost Climbing Stairs",author:"DP Cost Minimizer",explanation:"For each step, min cost to reach it = cost[i] + min(cost to reach i-1, cost to reach i-2). Start from step 0 or 1.",solution:`class Solution {
public:
    int minCostClimbingStairs(vector<int>& cost) {
        int n = cost.size();
        int prev1 = 0, prev2 = 0;
        
        for (int i = 2; i <= n; i++) {
            int current = min(prev1 + cost[i-1], prev2 + cost[i-2]);
            prev2 = prev1;
            prev1 = current;
        }
        
        return prev1;
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"DPExpert",content:"Similar to climbing stairs but with costs! Minimizes total cost."},{author:"CodeReviewer42",content:"Clean state transition considering costs from previous steps."},{author:"OptimizationExpert",content:"O(1) space with two variables tracking previous states."},{author:"AlternativeThinker",content:"We could start from the end and work backwards."}]},{problemName:"Counting Bits",author:"Bit Counter",explanation:"Use DP: number of 1's in i = number of 1's in i/2 + (i % 2). Even easier: bits[i] = bits[i >> 1] + (i & 1).",solution:`class Solution {
public:
    vector<int> countBits(int n) {
        vector<int> bits(n + 1, 0);
        for (int i = 1; i <= n; i++) {
            bits[i] = bits[i >> 1] + (i & 1);
        }
        return bits;
    }
};`,notes:"Time: O(n), Space: O(1) excluding result",comments:[{author:"BitManipulationExpert",content:"Clever DP relation! Uses right shift and bitwise AND."},{author:"CodeReviewer42",content:"Elegant formula: bits[i] = bits[i/2] + (i % 2)."},{author:"OptimizationExpert",content:"O(n) time with single pass, better than O(n log n) naive approach."},{author:"AlternativeThinker",content:"We could use built-in popcount but that might not be O(1) per number."}]},{problemName:"Is Subsequence",author:"Two Pointer Matcher",explanation:"Use two pointers. Move through both strings. If characters match, move both pointers. Otherwise, move only s pointer.",solution:`class Solution {
public:
    bool isSubsequence(string s, string t) {
        int i = 0, j = 0;
        while (i < s.length() && j < t.length()) {
            if (s[i] == t[j]) {
                i++;
            }
            j++;
        }
        return i == s.length();
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"TwoPointerExpert",content:"Simple two pointer approach! Efficient O(n) solution."},{author:"CodeReviewer42",content:"Clean implementation with early termination."},{author:"OptimizationExpert",content:"Optimal for single queries. For multiple queries, preprocess t."},{author:"AlternativeThinker",content:"We could use DP for multiple queries but this is optimal for single query."}]},{problemName:"Coin Change",author:"DP Minimizer",explanation:"DP where dp[i] = min coins to make amount i. For each amount, try all coins: dp[i] = min(dp[i], 1 + dp[i - coin]).",solution:`class Solution {
public:
    int coinChange(vector<int>& coins, int amount) {
        vector<int> dp(amount + 1, amount + 1);
        dp[0] = 0;
        
        for (int i = 1; i <= amount; i++) {
            for (int coin : coins) {
                if (coin <= i) {
                    dp[i] = min(dp[i], 1 + dp[i - coin]);
                }
            }
        }
        
        return dp[amount] > amount ? -1 : dp[amount];
    }
};`,notes:"Time: O(amount * n), Space: O(amount)",comments:[{author:"DPExpert",content:"Classic unbounded knapsack DP! Minimizes number of coins."},{author:"CodeReviewer42",content:"Good initialization with amount+1 as infinity equivalent."},{author:"OptimizationExpert",content:"We could sort coins and break early for optimization."},{author:"AlternativeThinker",content:"BFS approach is also possible but DP is more standard."}]},{problemName:"Longest Increasing Subsequence",author:"DP Sequence Finder",explanation:"Use DP with binary search. Maintain active list where tails[i] = smallest ending value of LIS of length i+1.",solution:`class Solution {
public:
    int lengthOfLIS(vector<int>& nums) {
        vector<int> tails;
        for (int num : nums) {
            auto it = lower_bound(tails.begin(), tails.end(), num);
            if (it == tails.end()) {
                tails.push_back(num);
            } else {
                *it = num;
            }
        }
        return tails.size();
    }
};`,notes:"Time: O(n log n), Space: O(n)",comments:[{author:"LISExpert",content:"Patience sorting algorithm! O(n log n) instead of O(n²) DP."},{author:"CodeReviewer42",content:"Clever use of lower_bound to maintain increasing sequence."},{author:"OptimizationExpert",content:"Optimal O(n log n) solution. Much better than naive DP."},{author:"AlternativeThinker",content:"We could use segment trees or Fenwick trees for same complexity."}]},{problemName:"Unique Paths",author:"DP Grid Traverser",explanation:"DP where dp[i][j] = paths to reach (i,j). dp[i][j] = dp[i-1][j] + dp[i][j-1]. First row and column are 1.",solution:`class Solution {
public:
    int uniquePaths(int m, int n) {
        vector<vector<int>> dp(m, vector<int>(n, 1));
        
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                dp[i][j] = dp[i-1][j] + dp[i][j-1];
            }
        }
        
        return dp[m-1][n-1];
    }
};`,notes:"Time: O(m*n), Space: O(m*n)",comments:[{author:"DPExpert",content:"Classic grid DP! Sum paths from left and top."},{author:"CodeReviewer42",content:"Clean initialization: first row and column are all 1s."},{author:"OptimizationExpert",content:"We can optimize to O(n) space by reusing single row."},{author:"AlternativeThinker",content:"Combinatorial solution: C(m+n-2, m-1) but might overflow."}]},{problemName:"Longest Common Subsequence",author:"DP String Matcher",explanation:"DP where dp[i][j] = LCS of text1[0..i-1] and text2[0..j-1]. If chars match: 1 + dp[i-1][j-1], else max(dp[i-1][j], dp[i][j-1]).",solution:`class Solution {
public:
    int longestCommonSubsequence(string text1, string text2) {
        int m = text1.length(), n = text2.length();
        vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (text1[i-1] == text2[j-1]) {
                    dp[i][j] = 1 + dp[i-1][j-1];
                } else {
                    dp[i][j] = max(dp[i-1][j], dp[i][j-1]);
                }
            }
        }
        
        return dp[m][n];
    }
};`,notes:"Time: O(m*n), Space: O(m*n)",comments:[{author:"StringDPExpert",content:"Classic LCS algorithm! Foundational DP problem."},{author:"CodeReviewer42",content:"Clean state transition for match and mismatch cases."},{author:"OptimizationExpert",content:"We can optimize to O(min(m,n)) space."},{author:"AlternativeThinker",content:"We could reconstruct the sequence by backtracking."}]},{problemName:"Partition Equal Subset Sum",author:"DP Subset Finder",explanation:"Subset sum problem. Check if there's a subset that sums to total/2. DP where dp[i] = whether sum i is achievable.",solution:`class Solution {
public:
    bool canPartition(vector<int>& nums) {
        int total = accumulate(nums.begin(), nums.end(), 0);
        if (total % 2 != 0) return false;
        
        int target = total / 2;
        vector<bool> dp(target + 1, false);
        dp[0] = true;
        
        for (int num : nums) {
            for (int i = target; i >= num; i--) {
                dp[i] = dp[i] || dp[i - num];
            }
        }
        
        return dp[target];
    }
};`,notes:"Time: O(n * target), Space: O(target)",comments:[{author:"SubsetSumExpert",content:"Classic subset sum DP! Iterates backwards to avoid reuse."},{author:"CodeReviewer42",content:"Good early return if total is odd."},{author:"OptimizationExpert",content:"Iterating backwards ensures each number is used at most once."},{author:"AlternativeThinker",content:"We could use bitset for more efficient implementation."}]},{problemName:"Target Sum",author:"DP Expression Evaluator",explanation:"Convert to subset sum: find subset with sum = (target + total) / 2. Then count number of such subsets.",solution:`class Solution {
public:
    int findTargetSumWays(vector<int>& nums, int target) {
        int total = accumulate(nums.begin(), nums.end(), 0);
        if (abs(target) > total) return 0;
        
        int newTarget = (target + total);
        if (newTarget % 2 != 0) return 0;
        
        newTarget /= 2;
        vector<int> dp(newTarget + 1, 0);
        dp[0] = 1;
        
        for (int num : nums) {
            for (int i = newTarget; i >= num; i--) {
                dp[i] += dp[i - num];
            }
        }
        
        return dp[newTarget];
    }
};`,notes:"Time: O(n * target), Space: O(target)",comments:[{author:"DPExpert",content:"Clever reduction to subset sum! + and - signs become subset selection."},{author:"CodeReviewer42",content:"Good handling of edge cases and integer division."},{author:"OptimizationExpert",content:"Much more efficient than DFS which would be O(2^n)."},{author:"AlternativeThinker",content:"We could use DFS with memoization but DP is better."}]},{problemName:"Decode Ways",author:"DP String Decoder",explanation:"DP where dp[i] = ways to decode first i characters. Consider single digit (1-9) and two digits (10-26).",solution:`class Solution {
public:
    int numDecodings(string s) {
        int n = s.length();
        if (n == 0 || s[0] == '0') return 0;
        
        vector<int> dp(n + 1, 0);
        dp[0] = 1;
        dp[1] = 1;
        
        for (int i = 2; i <= n; i++) {
            // Single digit
            if (s[i-1] != '0') {
                dp[i] += dp[i-1];
            }
            
            // Two digits
            int twoDigit = stoi(s.substr(i-2, 2));
            if (twoDigit >= 10 && twoDigit <= 26) {
                dp[i] += dp[i-2];
            }
        }
        
        return dp[n];
    }
};`,notes:"Time: O(n), Space: O(n)",comments:[{author:"StringDPExpert",content:"Classic decoding DP! Handles single and double digit cases."},{author:"CodeReviewer42",content:"Good handling of '0' which cannot be used alone."},{author:"OptimizationExpert",content:"We can optimize to O(1) space with two variables."},{author:"AlternativeThinker",content:"We could use DFS with memoization but DP is more efficient."}]},{problemName:"Perfect Squares",author:"DP Number Theorist",explanation:"DP where dp[i] = min perfect squares that sum to i. For each i, try all j where j² <= i: dp[i] = min(dp[i], 1 + dp[i - j²]).",solution:`class Solution {
public:
    int numSquares(int n) {
        vector<int> dp(n + 1, INT_MAX);
        dp[0] = 0;
        
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j * j <= i; j++) {
                dp[i] = min(dp[i], 1 + dp[i - j * j]);
            }
        }
        
        return dp[n];
    }
};`,notes:"Time: O(n √n), Space: O(n)",comments:[{author:"DPExpert",content:"Classic perfect squares DP! Tries all possible square numbers."},{author:"CodeReviewer42",content:"Clean initialization with INT_MAX and dp[0] = 0."},{author:"OptimizationExpert",content:"We could use BFS for potentially better performance."},{author:"AlternativeThinker",content:"Lagrange's four-square theorem says answer is at most 4."}]},{problemName:"Coin Change II",author:"DP Counter",explanation:"DP where dp[i] = number of combinations to make amount i. For each coin, update dp: dp[i] += dp[i - coin].",solution:`class Solution {
public:
    int change(int amount, vector<int>& coins) {
        vector<int> dp(amount + 1, 0);
        dp[0] = 1;
        
        for (int coin : coins) {
            for (int i = coin; i <= amount; i++) {
                dp[i] += dp[i - coin];
            }
        }
        
        return dp[amount];
    }
};`,notes:"Time: O(amount * n), Space: O(amount)",comments:[{author:"DPExpert",content:"Classic unbounded knapsack counting! Iterates forwards for unlimited coins."},{author:"CodeReviewer42",content:"Clean implementation. Note the order: coins outer loop, amount inner loop."},{author:"OptimizationExpert",content:"Iterating forwards allows multiple uses of same coin."},{author:"AlternativeThinker",content:"If we iterate backwards, it becomes 0/1 knapsack."}]},{problemName:"Unique Paths II",author:"DP Grid Traverser",explanation:"Similar to unique paths but with obstacles. If cell is obstacle, dp[i][j] = 0. Otherwise dp[i][j] = dp[i-1][j] + dp[i][j-1].",solution:`class Solution {
public:
    int uniquePathsWithObstacles(vector<vector<int>>& obstacleGrid) {
        int m = obstacleGrid.size(), n = obstacleGrid[0].size();
        vector<vector<long>> dp(m, vector<long>(n, 0));
        
        // Initialize first cell
        if (obstacleGrid[0][0] == 0) {
            dp[0][0] = 1;
        }
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (obstacleGrid[i][j] == 1) {
                    dp[i][j] = 0;
                    continue;
                }
                if (i > 0) dp[i][j] += dp[i-1][j];
                if (j > 0) dp[i][j] += dp[i][j-1];
            }
        }
        
        return dp[m-1][n-1];
    }
};`,notes:"Time: O(m*n), Space: O(m*n)",comments:[{author:"DPExpert",content:"Grid DP with obstacles! Handles blocked cells correctly."},{author:"CodeReviewer42",content:"Good use of long to avoid integer overflow."},{author:"OptimizationExpert",content:"We can optimize to O(n) space by reusing single row."},{author:"AlternativeThinker",content:"We could modify obstacleGrid in-place to save space."}]},{problemName:"Best Time to Buy and Sell Stock III",author:"DP Transaction Expert",explanation:"Use state machine: bought1, sold1, bought2, sold2. Track maximum profit after each transaction.",solution:`class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int bought1 = INT_MIN, sold1 = 0;
        int bought2 = INT_MIN, sold2 = 0;
        
        for (int price : prices) {
            bought1 = max(bought1, -price);
            sold1 = max(sold1, bought1 + price);
            bought2 = max(bought2, sold1 - price);
            sold2 = max(sold2, bought2 + price);
        }
        
        return sold2;
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"StockExpert",content:"Clever state machine! Tracks two transactions simultaneously."},{author:"CodeReviewer42",content:"Elegant O(1) space solution with four state variables."},{author:"OptimizationExpert",content:"Much better than O(n) space DP approaches."},{author:"AlternativeThinker",content:"We could use DP with k transactions but this is optimal for k=2."}]},{problemName:"Best Time to Buy and Sell Stock IV",author:"DP Transaction Expert",explanation:"Generalized solution for k transactions. Use DP where dp[i][j] = max profit with j transactions by day i.",solution:`class Solution {
public:
    int maxProfit(int k, vector<int>& prices) {
        int n = prices.size();
        if (n == 0 || k == 0) return 0;
        
        if (k >= n / 2) {
            // Unlimited transactions
            int profit = 0;
            for (int i = 1; i < n; i++) {
                if (prices[i] > prices[i-1]) {
                    profit += prices[i] - prices[i-1];
                }
            }
            return profit;
        }
        
        vector<vector<int>> dp(k + 1, vector<int>(n, 0));
        
        for (int t = 1; t <= k; t++) {
            int maxDiff = -prices[0];
            for (int i = 1; i < n; i++) {
                dp[t][i] = max(dp[t][i-1], prices[i] + maxDiff);
                maxDiff = max(maxDiff, dp[t-1][i] - prices[i]);
            }
        }
        
        return dp[k][n-1];
    }
};`,notes:"Time: O(k*n), Space: O(k*n)",comments:[{author:"StockExpert",content:"Generalized stock trading! Handles unlimited transactions case separately."},{author:"CodeReviewer42",content:"Good optimization for k >= n/2 (unlimited transactions)."},{author:"OptimizationExpert",content:"We can optimize to O(n) space by reusing arrays."},{author:"AlternativeThinker",content:"State machine approach also works but this is more standard."}]},{problemName:"Maximum Profit in Job Scheduling",author:"DP Scheduler",explanation:"Sort jobs by end time. Use binary search to find last non-conflicting job. DP: dp[i] = max(profit[i] + dp[prev], dp[i-1]).",solution:`class Solution {
public:
    int jobScheduling(vector<int>& startTime, vector<int>& endTime, vector<int>& profit) {
        int n = startTime.size();
        vector<vector<int>> jobs;
        for (int i = 0; i < n; i++) {
            jobs.push_back({endTime[i], startTime[i], profit[i]});
        }
        sort(jobs.begin(), jobs.end());
        
        vector<int> dp(n);
        dp[0] = jobs[0][2];
        
        for (int i = 1; i < n; i++) {
            int currentProfit = jobs[i][2];
            
            // Find last non-conflicting job using binary search
            int left = 0, right = i - 1;
            while (left <= right) {
                int mid = (left + right) / 2;
                if (jobs[mid][0] <= jobs[i][1]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
            
            if (right >= 0) {
                currentProfit += dp[right];
            }
            
            dp[i] = max(dp[i-1], currentProfit);
        }
        
        return dp[n-1];
    }
};`,notes:"Time: O(n log n), Space: O(n)",comments:[{author:"SchedulingExpert",content:"Weighted interval scheduling! Classic DP with binary search."},{author:"CodeReviewer42",content:"Good use of binary search to find non-conflicting jobs."},{author:"OptimizationExpert",content:"O(n log n) due to sorting and binary searches."},{author:"AlternativeThinker",content:"We could use coordinate compression and Fenwick tree."}]},{problemName:"Russian Doll Envelopes",author:"DP Enveloper",explanation:"Sort by width ascending, height descending. Then find LIS on heights. This avoids same width envelopes nesting.",solution:`class Solution {
public:
    int maxEnvelopes(vector<vector<int>>& envelopes) {
        // Sort by width ascending, height descending
        sort(envelopes.begin(), envelopes.end(), [](const vector<int>& a, const vector<int>& b) {
            if (a[0] == b[0]) return a[1] > b[1];
            return a[0] < b[0];
        });
        
        // Find LIS on heights
        vector<int> tails;
        for (auto& env : envelopes) {
            int height = env[1];
            auto it = lower_bound(tails.begin(), tails.end(), height);
            if (it == tails.end()) {
                tails.push_back(height);
            } else {
                *it = height;
            }
        }
        
        return tails.size();
    }
};`,notes:"Time: O(n log n), Space: O(n)",comments:[{author:"LISExpert",content:"Clever reduction to LIS! Sorting by width ascending, height descending avoids same width nesting."},{author:"CodeReviewer42",content:"Good custom comparator for the special sorting requirement."},{author:"OptimizationExpert",content:"O(n log n) instead of O(n²) 2D DP."},{author:"AlternativeThinker",content:"We could use 2D DP but that would be O(n²)."}]},{problemName:"Dungeon Game",author:"DP Pathfinder",explanation:"Start from bottom-right. DP[i][j] = min health needed to reach princess from (i,j). dp[i][j] = max(1, min(dp[i+1][j], dp[i][j+1]) - dungeon[i][j]).",solution:`class Solution {
public:
    int calculateMinimumHP(vector<vector<int>>& dungeon) {
        int m = dungeon.size(), n = dungeon[0].size();
        vector<vector<int>> dp(m, vector<int>(n, 0));
        
        // Bottom-right corner
        dp[m-1][n-1] = max(1, 1 - dungeon[m-1][n-1]);
        
        // Last row
        for (int j = n-2; j >= 0; j--) {
            dp[m-1][j] = max(1, dp[m-1][j+1] - dungeon[m-1][j]);
        }
        
        // Last column
        for (int i = m-2; i >= 0; i--) {
            dp[i][n-1] = max(1, dp[i+1][n-1] - dungeon[i][n-1]);
        }
        
        // Fill rest of the table
        for (int i = m-2; i >= 0; i--) {
            for (int j = n-2; j >= 0; j--) {
                int minHealth = min(dp[i+1][j], dp[i][j+1]);
                dp[i][j] = max(1, minHealth - dungeon[i][j]);
            }
        }
        
        return dp[0][0];
    }
};`,notes:"Time: O(m*n), Space: O(m*n)",comments:[{author:"DPExpert",content:"Reverse DP from destination! Ensures knight never dies."},{author:"CodeReviewer42",content:"Good use of max(1, ...) to ensure minimum health of 1."},{author:"OptimizationExpert",content:"We can optimize to O(n) space by reusing single row."},{author:"AlternativeThinker",content:"We could use Dijkstra but DP is more efficient."}]},{problemName:"Burst Balloons",author:"DP Interval Expert",explanation:"DP where dp[i][j] = max coins from bursting balloons i..j. Try each k as last balloon: dp[i][j] = max(dp[i][k-1] + nums[i-1]*nums[k]*nums[j+1] + dp[k+1][j]).",solution:`class Solution {
public:
    int maxCoins(vector<int>& nums) {
        int n = nums.size();
        vector<int> balloons(n + 2, 1);
        for (int i = 0; i < n; i++) {
            balloons[i+1] = nums[i];
        }
        
        vector<vector<int>> dp(n + 2, vector<int>(n + 2, 0));
        
        for (int len = 1; len <= n; len++) {
            for (int i = 1; i <= n - len + 1; i++) {
                int j = i + len - 1;
                for (int k = i; k <= j; k++) {
                    dp[i][j] = max(dp[i][j], 
                                  dp[i][k-1] + 
                                  balloons[i-1] * balloons[k] * balloons[j+1] + 
                                  dp[k+1][j]);
                }
            }
        }
        
        return dp[1][n];
    }
};`,notes:"Time: O(n³), Space: O(n²)",comments:[{author:"IntervalDPExpert",content:"Classic interval DP! Considers each balloon as last to burst."},{author:"CodeReviewer42",content:"Good padding with 1s at boundaries for edge cases."},{author:"OptimizationExpert",content:"O(n³) is optimal for this problem."},{author:"AlternativeThinker",content:"We could use memoized DFS but iterative DP is cleaner."}]},{problemName:"Palindrome Partitioning II",author:"DP Partitioner",explanation:"Use two DPs: isPal[i][j] = whether s[i..j] is palindrome, and dp[i] = min cuts for s[0..i-1].",solution:`class Solution {
public:
    int minCut(string s) {
        int n = s.length();
        vector<vector<bool>> isPal(n, vector<bool>(n, false));
        vector<int> dp(n, 0);
        
        for (int i = 0; i < n; i++) {
            int minCuts = i; // max cuts for length i+1 is i
            for (int j = 0; j <= i; j++) {
                if (s[j] == s[i] && (i - j <= 1 || isPal[j+1][i-1])) {
                    isPal[j][i] = true;
                    minCuts = (j == 0) ? 0 : min(minCuts, dp[j-1] + 1);
                }
            }
            dp[i] = minCuts;
        }
        
        return dp[n-1];
    }
};`,notes:"Time: O(n²), Space: O(n²)",comments:[{author:"StringDPExpert",content:"Clever combined DP! Builds palindrome table and min cuts simultaneously."},{author:"CodeReviewer42",content:"Good palindrome check: s[j]==s[i] and inner substring is palindrome."},{author:"OptimizationExpert",content:"We can optimize space by building palindrome table on the fly."},{author:"AlternativeThinker",content:"We could use two separate passes but this is more efficient."}]},{problemName:"Number of Islands",author:"DFS Explorer",explanation:"Use DFS to mark connected land cells. For each unvisited '1', do DFS and increment count.",solution:`class Solution {
public:
    int numIslands(vector<vector<char>>& grid) {
        if (grid.empty()) return 0;
        
        int m = grid.size(), n = grid[0].size();
        int count = 0;
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == '1') {
                    dfs(grid, i, j);
                    count++;
                }
            }
        }
        
        return count;
    }
    
private:
    void dfs(vector<vector<char>>& grid, int i, int j) {
        int m = grid.size(), n = grid[0].size();
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] != '1') {
            return;
        }
        
        grid[i][j] = '0'; // mark as visited
        
        // Explore all four directions
        dfs(grid, i + 1, j);
        dfs(grid, i - 1, j);
        dfs(grid, i, j + 1);
        dfs(grid, i, j - 1);
    }
};`,notes:"Time: O(m*n), Space: O(m*n) for recursion stack",comments:[{author:"DFSExpert",content:"Classic connected components DFS! Marks visited cells in-place."},{author:"CodeReviewer42",content:"Clean DFS implementation with bounds checking."},{author:"OptimizationExpert",content:"We could use BFS with queue for O(min(m,n)) space."},{author:"AlternativeThinker",content:"Union-Find is also possible but DFS is more intuitive."}]},{problemName:"Flood Fill",author:"DFS Painter",explanation:"Use DFS to change all connected pixels of original color to new color. Similar to number of islands.",solution:`class Solution {
public:
    vector<vector<int>> floodFill(vector<vector<int>>& image, int sr, int sc, int newColor) {
        int oldColor = image[sr][sc];
        if (oldColor != newColor) {
            dfs(image, sr, sc, oldColor, newColor);
        }
        return image;
    }
    
private:
    void dfs(vector<vector<int>>& image, int i, int j, int oldColor, int newColor) {
        int m = image.size(), n = image[0].size();
        if (i < 0 || i >= m || j < 0 || j >= n || image[i][j] != oldColor) {
            return;
        }
        
        image[i][j] = newColor;
        
        dfs(image, i + 1, j, oldColor, newColor);
        dfs(image, i - 1, j, oldColor, newColor);
        dfs(image, i, j + 1, oldColor, newColor);
        dfs(image, i, j - 1, oldColor, newColor);
    }
};`,notes:"Time: O(m*n), Space: O(m*n) for recursion stack",comments:[{author:"DFSExpert",content:"Classic flood fill algorithm! Similar to paint bucket tool."},{author:"CodeReviewer42",content:"Good check to avoid infinite recursion when oldColor == newColor."},{author:"OptimizationExpert",content:"We could use BFS for more control over memory usage."},{author:"AlternativeThinker",content:"Iterative DFS with stack would avoid recursion limits."}]},{problemName:"Find the Town Judge",author:"Graph Degree Counter",explanation:"The judge is trusted by n-1 people and trusts nobody. Track in-degree (trust count) and out-degree (trusts others).",solution:`class Solution {
public:
    int findJudge(int n, vector<vector<int>>& trust) {
        vector<int> inDegree(n + 1, 0);
        vector<int> outDegree(n + 1, 0);
        
        for (auto& t : trust) {
            outDegree[t[0]]++;
            inDegree[t[1]]++;
        }
        
        for (int i = 1; i <= n; i++) {
            if (inDegree[i] == n - 1 && outDegree[i] == 0) {
                return i;
            }
        }
        
        return -1;
    }
};`,notes:"Time: O(n + t), Space: O(n)",comments:[{author:"GraphExpert",content:"Clever degree counting! Judge has in-degree n-1 and out-degree 0."},{author:"CodeReviewer42",content:"Clean implementation with two degree arrays."},{author:"OptimizationExpert",content:"We could use single array: inDegree - outDegree."},{author:"AlternativeThinker",content:"We could track net trust but two arrays are clearer."}]},{problemName:"Find Center of Star Graph",author:"Star Finder",explanation:"The center appears in every edge. Just check first two edges to find common node.",solution:`class Solution {
public:
    int findCenter(vector<vector<int>>& edges) {
        // The center node appears in both first and second edge
        if (edges[0][0] == edges[1][0] || edges[0][0] == edges[1][1]) {
            return edges[0][0];
        }
        return edges[0][1];
    }
};`,notes:"Time: O(1), Space: O(1)",comments:[{author:"GraphExpert",content:"Elegant O(1) solution! Center appears in all edges."},{author:"CodeReviewer42",content:"Simple check using first two edges."},{author:"OptimizationExpert",content:"Optimal solution. No need to process all edges."},{author:"AlternativeThinker",content:"We could count degrees but this is simpler."}]},{problemName:"Island Perimeter",author:"Perimeter Calculator",explanation:"For each land cell, add 4 to perimeter. For each adjacent land cell, subtract 2 (shared edge).",solution:`class Solution {
public:
    int islandPerimeter(vector<vector<int>>& grid) {
        int m = grid.size(), n = grid[0].size();
        int perimeter = 0;
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 1) {
                    perimeter += 4;
                    
                    // Check left neighbor
                    if (j > 0 && grid[i][j-1] == 1) {
                        perimeter -= 2;
                    }
                    
                    // Check top neighbor
                    if (i > 0 && grid[i-1][j] == 1) {
                        perimeter -= 2;
                    }
                }
            }
        }
        
        return perimeter;
    }
};`,notes:"Time: O(m*n), Space: O(1)",comments:[{author:"GridExpert",content:"Clever counting approach! Adds 4 per land cell, subtracts 2 per shared edge."},{author:"CodeReviewer42",content:"Only checks left and top to avoid double counting."},{author:"OptimizationExpert",content:"More efficient than DFS/BFS approaches."},{author:"AlternativeThinker",content:"We could use DFS and count boundaries but this is simpler."}]},{problemName:"Max Area of Island",author:"DFS Area Calculator",explanation:"Use DFS to explore each island. Track maximum area encountered.",solution:`class Solution {
public:
    int maxAreaOfIsland(vector<vector<int>>& grid) {
        int m = grid.size(), n = grid[0].size();
        int maxArea = 0;
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 1) {
                    maxArea = max(maxArea, dfs(grid, i, j));
                }
            }
        }
        
        return maxArea;
    }
    
private:
    int dfs(vector<vector<int>>& grid, int i, int j) {
        int m = grid.size(), n = grid[0].size();
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] != 1) {
            return 0;
        }
        
        grid[i][j] = 0; // mark as visited
        
        return 1 + dfs(grid, i + 1, j) + dfs(grid, i - 1, j) + 
               dfs(grid, i, j + 1) + dfs(grid, i, j - 1);
    }
};`,notes:"Time: O(m*n), Space: O(m*n) for recursion stack",comments:[{author:"DFSExpert",content:"Classic connected components with area tracking!"},{author:"CodeReviewer42",content:"Clean DFS that returns area of current island."},{author:"OptimizationExpert",content:"We could use BFS with queue for O(min(m,n)) space."},{author:"AlternativeThinker",content:"Union-Find with size tracking is also possible."}]},{problemName:"Employee Importance",author:"DFS Importance Calculator",explanation:"Use DFS to sum importance of employee and all subordinates.",solution:`/*
// Definition for Employee.
class Employee {
public:
    int id;
    int importance;
    vector<int> subordinates;
};
*/
class Solution {
public:
    int getImportance(vector<Employee*> employees, int id) {
        unordered_map<int, Employee*> empMap;
        for (Employee* emp : employees) {
            empMap[emp->id] = emp;
        }
        return dfs(id, empMap);
    }
    
private:
    int dfs(int id, unordered_map<int, Employee*>& empMap) {
        Employee* emp = empMap[id];
        int total = emp->importance;
        for (int subId : emp->subordinates) {
            total += dfs(subId, empMap);
        }
        return total;
    }
};`,notes:"Time: O(n), Space: O(n)",comments:[{author:"DFSExpert",content:"Tree DFS on employee hierarchy! Sums importance recursively."},{author:"CodeReviewer42",content:"Good use of hash map for O(1) employee lookup."},{author:"OptimizationExpert",content:"We could use BFS with queue for iterative solution."},{author:"AlternativeThinker",content:"We could precompute all importances but DFS is simpler."}]},{problemName:"Keys and Rooms",author:"DFS Room Explorer",explanation:"Use DFS to visit all reachable rooms. Check if all rooms are visited.",solution:`class Solution {
public:
    bool canVisitAllRooms(vector<vector<int>>& rooms) {
        int n = rooms.size();
        vector<bool> visited(n, false);
        dfs(0, rooms, visited);
        
        for (bool v : visited) {
            if (!v) return false;
        }
        return true;
    }
    
private:
    void dfs(int room, vector<vector<int>>& rooms, vector<bool>& visited) {
        if (visited[room]) return;
        
        visited[room] = true;
        for (int key : rooms[room]) {
            dfs(key, rooms, visited);
        }
    }
};`,notes:"Time: O(n + k) where k is total keys, Space: O(n)",comments:[{author:"DFSExpert",content:"Classic graph connectivity! Checks if all rooms are reachable from room 0."},{author:"CodeReviewer42",content:"Clean DFS implementation with visited array."},{author:"OptimizationExpert",content:"We could use BFS with queue for iterative solution."},{author:"AlternativeThinker",content:"Union-Find would be overkill for this problem."}]},{problemName:"Clone Graph",author:"DFS Cloner",explanation:"Use DFS with hash map to map original nodes to cloned nodes. Create clones recursively.",solution:`/*
// Definition for a Node.
class Node {
public:
    int val;
    vector<Node*> neighbors;
    Node() {
        val = 0;
        neighbors = vector<Node*>();
    }
    Node(int _val) {
        val = _val;
        neighbors = vector<Node*>();
    }
    Node(int _val, vector<Node*> _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }
};
*/
class Solution {
public:
    Node* cloneGraph(Node* node) {
        if (node == nullptr) return nullptr;
        unordered_map<Node*, Node*> visited;
        return dfs(node, visited);
    }
    
private:
    Node* dfs(Node* node, unordered_map<Node*, Node*>& visited) {
        if (visited.count(node)) {
            return visited[node];
        }
        
        Node* clone = new Node(node->val);
        visited[node] = clone;
        
        for (Node* neighbor : node->neighbors) {
            clone->neighbors.push_back(dfs(neighbor, visited));
        }
        
        return clone;
    }
};`,notes:"Time: O(n), Space: O(n)",comments:[{author:"GraphExpert",content:"Classic graph cloning! Uses DFS with visited map to avoid cycles."},{author:"CodeReviewer42",content:"Clean recursive DFS that creates clones and connects neighbors."},{author:"OptimizationExpert",content:"We could use BFS with queue for iterative solution."},{author:"AlternativeThinker",content:"We could use iterative DFS with stack."}]},{problemName:"Course Schedule",author:"Cycle Detector",explanation:"Use topological sort (Kahn's algorithm) or DFS cycle detection. Check if graph is DAG.",solution:`class Solution {
public:
    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {
        vector<vector<int>> graph(numCourses);
        vector<int> inDegree(numCourses, 0);
        
        // Build graph and compute in-degrees
        for (auto& pre : prerequisites) {
            graph[pre[1]].push_back(pre[0]);
            inDegree[pre[0]]++;
        }
        
        // Kahn's algorithm for topological sort
        queue<int> q;
        for (int i = 0; i < numCourses; i++) {
            if (inDegree[i] == 0) {
                q.push(i);
            }
        }
        
        int count = 0;
        while (!q.empty()) {
            int course = q.front();
            q.pop();
            count++;
            
            for (int neighbor : graph[course]) {
                inDegree[neighbor]--;
                if (inDegree[neighbor] == 0) {
                    q.push(neighbor);
                }
            }
        }
        
        return count == numCourses;
    }
};`,notes:"Time: O(n + e), Space: O(n + e)",comments:[{author:"TopologicalSortExpert",content:"Kahn's algorithm! Detects cycles by counting processed nodes."},{author:"CodeReviewer42",content:"Clean implementation with in-degree counting."},{author:"OptimizationExpert",content:"We could use DFS with state coloring for cycle detection."},{author:"AlternativeThinker",content:"DFS approach might be more intuitive for some."}]},{problemName:"Pacific Atlantic Water Flow",author:"BFS from Oceans",explanation:"Start BFS from Pacific and Atlantic edges separately. Find cells reachable from both oceans.",solution:`class Solution {
public:
    vector<vector<int>> pacificAtlantic(vector<vector<int>>& heights) {
        if (heights.empty()) return {};
        
        int m = heights.size(), n = heights[0].size();
        vector<vector<bool>> pacific(m, vector<bool>(n, false));
        vector<vector<bool>> atlantic(m, vector<bool>(n, false));
        
        // BFS from Pacific (left and top edges)
        queue<pair<int, int>> q;
        for (int i = 0; i < m; i++) {
            q.push({i, 0});
            pacific[i][0] = true;
        }
        for (int j = 0; j < n; j++) {
            q.push({0, j});
            pacific[0][j] = true;
        }
        bfs(heights, q, pacific);
        
        // BFS from Atlantic (right and bottom edges)
        q = queue<pair<int, int>>();
        for (int i = 0; i < m; i++) {
            q.push({i, n-1});
            atlantic[i][n-1] = true;
        }
        for (int j = 0; j < n; j++) {
            q.push({m-1, j});
            atlantic[m-1][j] = true;
        }
        bfs(heights, q, atlantic);
        
        // Find cells reachable from both oceans
        vector<vector<int>> result;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (pacific[i][j] && atlantic[i][j]) {
                    result.push_back({i, j});
                }
            }
        }
        
        return result;
    }
    
private:
    void bfs(vector<vector<int>>& heights, queue<pair<int, int>>& q, vector<vector<bool>>& visited) {
        int m = heights.size(), n = heights[0].size();
        vector<vector<int>> directions = {{1,0}, {-1,0}, {0,1}, {0,-1}};
        
        while (!q.empty()) {
            auto [i, j] = q.front();
            q.pop();
            
            for (auto& dir : directions) {
                int ni = i + dir[0], nj = j + dir[1];
                if (ni >= 0 && ni < m && nj >= 0 && nj < n && 
                    !visited[ni][nj] && heights[ni][nj] >= heights[i][j]) {
                    visited[ni][nj] = true;
                    q.push({ni, nj});
                }
            }
        }
    }
};`,notes:"Time: O(m*n), Space: O(m*n)",comments:[{author:"BFSExpert",content:"Clever multi-source BFS! Starts from ocean edges and flows uphill."},{author:"CodeReviewer42",content:"Good separation of Pacific and Atlantic BFS."},{author:"OptimizationExpert",content:"We could use DFS but BFS is more natural for this problem."},{author:"AlternativeThinker",content:"We could do single pass with different markers."}]},{problemName:"Word Ladder",author:"BFS Word Transformer",explanation:"Use BFS to find shortest transformation sequence. Try all possible one-character changes.",solution:`class Solution {
public:
    int ladderLength(string beginWord, string endWord, vector<string>& wordList) {
        unordered_set<string> wordSet(wordList.begin(), wordList.end());
        if (!wordSet.count(endWord)) return 0;
        
        queue<string> q;
        q.push(beginWord);
        int level = 1;
        
        while (!q.empty()) {
            int levelSize = q.size();
            for (int i = 0; i < levelSize; i++) {
                string current = q.front();
                q.pop();
                
                if (current == endWord) {
                    return level;
                }
                
                // Try all possible one-character changes
                for (int j = 0; j < current.length(); j++) {
                    char original = current[j];
                    for (char c = 'a'; c <= 'z'; c++) {
                        if (c == original) continue;
                        current[j] = c;
                        if (wordSet.count(current)) {
                            q.push(current);
                            wordSet.erase(current); // mark as visited
                        }
                    }
                    current[j] = original;
                }
            }
            level++;
        }
        
        return 0;
    }
};`,notes:"Time: O(n * L²) where L is word length, Space: O(n)",comments:[{author:"BFSExpert",content:"Classic word ladder BFS! Finds shortest transformation path."},{author:"CodeReviewer42",content:"Good optimization: remove visited words from set."},{author:"OptimizationExpert",content:"We could use bidirectional BFS for better performance."},{author:"AlternativeThinker",content:"We could precompute all transformations but that would use more memory."}]},{problemName:"Graph Valid Tree",author:"Tree Validator",explanation:"A valid tree has exactly n-1 edges and is connected. Use DFS/BFS to check connectivity and cycle detection.",solution:`class Solution {
public:
    bool validTree(int n, vector<vector<int>>& edges) {
        if (edges.size() != n - 1) return false;
        
        vector<vector<int>> graph(n);
        for (auto& edge : edges) {
            graph[edge[0]].push_back(edge[1]);
            graph[edge[1]].push_back(edge[0]);
        }
        
        vector<bool> visited(n, false);
        if (hasCycle(0, -1, graph, visited)) {
            return false;
        }
        
        // Check if all nodes are visited (connected)
        for (bool v : visited) {
            if (!v) return false;
        }
        
        return true;
    }
    
private:
    bool hasCycle(int node, int parent, vector<vector<int>>& graph, vector<bool>& visited) {
        if (visited[node]) return true;
        
        visited[node] = true;
        for (int neighbor : graph[node]) {
            if (neighbor != parent && hasCycle(neighbor, node, graph, visited)) {
                return true;
            }
        }
        return false;
    }
};`,notes:"Time: O(n + e), Space: O(n + e)",comments:[{author:"GraphExpert",content:"Tree validation: n-1 edges, connected, no cycles. Uses DFS cycle detection."},{author:"CodeReviewer42",content:"Good cycle detection with parent tracking."},{author:"OptimizationExpert",content:"We could use Union-Find for O(n) time and space."},{author:"AlternativeThinker",content:"Union-Find is more efficient for this problem."}]},{problemName:"Number of Connected Components in an Undirected Graph",author:"Component Counter",explanation:"Use DFS/BFS to count connected components. Each unvisited node starts a new component.",solution:`class Solution {
public:
    int countComponents(int n, vector<vector<int>>& edges) {
        vector<vector<int>> graph(n);
        for (auto& edge : edges) {
            graph[edge[0]].push_back(edge[1]);
            graph[edge[1]].push_back(edge[0]);
        }
        
        vector<bool> visited(n, false);
        int count = 0;
        
        for (int i = 0; i < n; i++) {
            if (!visited[i]) {
                dfs(i, graph, visited);
                count++;
            }
        }
        
        return count;
    }
    
private:
    void dfs(int node, vector<vector<int>>& graph, vector<bool>& visited) {
        if (visited[node]) return;
        
        visited[node] = true;
        for (int neighbor : graph[node]) {
            dfs(neighbor, graph, visited);
        }
    }
};`,notes:"Time: O(n + e), Space: O(n + e)",comments:[{author:"GraphExpert",content:"Classic connected components counting! Uses DFS to mark connected nodes."},{author:"CodeReviewer42",content:"Clean DFS implementation with visited array."},{author:"OptimizationExpert",content:"We could use Union-Find for potentially better performance."},{author:"AlternativeThinker",content:"BFS with queue would work equally well."}]},{problemName:"Course Schedule II",author:"Topological Sorter",explanation:"Use Kahn's algorithm for topological sort. Return order of courses.",solution:`class Solution {
public:
    vector<int> findOrder(int numCourses, vector<vector<int>>& prerequisites) {
        vector<vector<int>> graph(numCourses);
        vector<int> inDegree(numCourses, 0);
        
        // Build graph and compute in-degrees
        for (auto& pre : prerequisites) {
            graph[pre[1]].push_back(pre[0]);
            inDegree[pre[0]]++;
        }
        
        // Kahn's algorithm
        queue<int> q;
        for (int i = 0; i < numCourses; i++) {
            if (inDegree[i] == 0) {
                q.push(i);
            }
        }
        
        vector<int> order;
        while (!q.empty()) {
            int course = q.front();
            q.pop();
            order.push_back(course);
            
            for (int neighbor : graph[course]) {
                inDegree[neighbor]--;
                if (inDegree[neighbor] == 0) {
                    q.push(neighbor);
                }
            }
        }
        
        if (order.size() == numCourses) {
            return order;
        }
        return {};
    }
};`,notes:"Time: O(n + e), Space: O(n + e)",comments:[{author:"TopologicalSortExpert",content:"Kahn's algorithm for topological order! Returns course sequence."},{author:"CodeReviewer42",content:"Clean implementation with in-degree counting."},{author:"OptimizationExpert",content:"We could use DFS with post-order traversal."},{author:"AlternativeThinker",content:"DFS approach might be more intuitive for some."}]},{problemName:"Alien Dictionary",author:"Topological Sorter",explanation:"Build graph from adjacent words' character differences. Then topological sort to find order.",solution:`class Solution {
public:
    string alienOrder(vector<string>& words) {
        unordered_map<char, unordered_set<char>> graph;
        unordered_map<char, int> inDegree;
        
        // Initialize all characters
        for (string& word : words) {
            for (char c : word) {
                inDegree[c] = 0;
            }
        }
        
        // Build graph from adjacent words
        for (int i = 0; i < words.size() - 1; i++) {
            string& word1 = words[i];
            string& word2 = words[i + 1];
            
            // Check for invalid case: word2 is prefix of word1
            if (word1.length() > word2.length() && word1.substr(0, word2.length()) == word2) {
                return "";
            }
            
            int len = min(word1.length(), word2.length());
            for (int j = 0; j < len; j++) {
                if (word1[j] != word2[j]) {
                    if (!graph[word1[j]].count(word2[j])) {
                        graph[word1[j]].insert(word2[j]);
                        inDegree[word2[j]]++;
                    }
                    break;
                }
            }
        }
        
        // Kahn's algorithm
        queue<char> q;
        for (auto& [c, degree] : inDegree) {
            if (degree == 0) {
                q.push(c);
            }
        }
        
        string result;
        while (!q.empty()) {
            char c = q.front();
            q.pop();
            result += c;
            
            for (char neighbor : graph[c]) {
                inDegree[neighbor]--;
                if (inDegree[neighbor] == 0) {
                    q.push(neighbor);
                }
            }
        }
        
        // Check if all characters are included
        if (result.length() == inDegree.size()) {
            return result;
        }
        return "";
    }
};`,notes:"Time: O(n * L) where L is max word length, Space: O(1) since 26 letters",comments:[{author:"TopologicalSortExpert",content:"Complex graph building from word comparisons! Uses topological sort for character order."},{author:"CodeReviewer42",content:"Good handling of invalid cases like 'abc' before 'ab'."},{author:"OptimizationExpert",content:"We only have 26 letters, so complexity is effectively O(n)."},{author:"AlternativeThinker",content:"We could use DFS with state coloring for cycle detection."}]},{problemName:"Cheapest Flights Within K Stops",author:"BFS Price Finder",explanation:"Use BFS with price tracking. For each stop level, track minimum price to reach each city.",solution:`class Solution {
public:
    int findCheapestPrice(int n, vector<vector<int>>& flights, int src, int dst, int k) {
        // Build graph: city -> {neighbor, price}
        vector<vector<pair<int, int>>> graph(n);
        for (auto& flight : flights) {
            graph[flight[0]].push_back({flight[1], flight[2]});
        }
        
        // BFS with stops constraint
        vector<int> prices(n, INT_MAX);
        prices[src] = 0;
        
        queue<pair<int, int>> q; // {city, current_price}
        q.push({src, 0});
        int stops = 0;
        
        while (!q.empty() && stops <= k) {
            int levelSize = q.size();
            for (int i = 0; i < levelSize; i++) {
                auto [city, currentPrice] = q.front();
                q.pop();
                
                for (auto& [neighbor, price] : graph[city]) {
                    int newPrice = currentPrice + price;
                    if (newPrice < prices[neighbor]) {
                        prices[neighbor] = newPrice;
                        q.push({neighbor, newPrice});
                    }
                }
            }
            stops++;
        }
        
        return prices[dst] == INT_MAX ? -1 : prices[dst];
    }
};`,notes:"Time: O(n + e * k), Space: O(n)",comments:[{author:"BFSExpert",content:"BFS with stops constraint! Tracks minimum prices at each stop level."},{author:"CodeReviewer42",content:"Good use of level-by-level BFS to track stops."},{author:"OptimizationExpert",content:"We could use Dijkstra with stop tracking for better performance."},{author:"AlternativeThinker",content:"Bellman-Ford would also work for this problem."}]},{problemName:"Network Delay Time",author:"Dijkstra Expert",explanation:"Use Dijkstra's algorithm to find shortest path from source to all nodes. Return max distance.",solution:`class Solution {
public:
    int networkDelayTime(vector<vector<int>>& times, int n, int k) {
        // Build graph: node -> {neighbor, time}
        vector<vector<pair<int, int>>> graph(n + 1);
        for (auto& time : times) {
            graph[time[0]].push_back({time[1], time[2]});
        }
        
        // Dijkstra's algorithm
        vector<int> dist(n + 1, INT_MAX);
        dist[k] = 0;
        
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
        pq.push({0, k});
        
        while (!pq.empty()) {
            auto [currentDist, node] = pq.top();
            pq.pop();
            
            if (currentDist > dist[node]) continue;
            
            for (auto& [neighbor, time] : graph[node]) {
                int newDist = currentDist + time;
                if (newDist < dist[neighbor]) {
                    dist[neighbor] = newDist;
                    pq.push({newDist, neighbor});
                }
            }
        }
        
        // Find maximum distance
        int maxTime = 0;
        for (int i = 1; i <= n; i++) {
            if (dist[i] == INT_MAX) return -1;
            maxTime = max(maxTime, dist[i]);
        }
        
        return maxTime;
    }
};`,notes:"Time: O(n log n + e), Space: O(n + e)",comments:[{author:"DijkstraExpert",content:"Classic Dijkstra's algorithm! Finds shortest paths from source."},{author:"CodeReviewer42",content:"Clean implementation with min-heap."},{author:"OptimizationExpert",content:"Optimal for non-negative weights."},{author:"AlternativeThinker",content:"We could use Bellman-Ford but Dijkstra is more efficient."}]},{problemName:"Shortest Path in Binary Matrix",author:"BFS Pathfinder",explanation:"Use BFS to find shortest path in binary matrix. 8-direction movement allowed.",solution:`class Solution {
public:
    int shortestPathBinaryMatrix(vector<vector<int>>& grid) {
        int n = grid.size();
        if (grid[0][0] == 1 || grid[n-1][n-1] == 1) return -1;
        
        vector<vector<int>> directions = {
            {-1,-1}, {-1,0}, {-1,1},
            {0,-1},           {0,1},
            {1,-1},  {1,0},  {1,1}
        };
        
        queue<vector<int>> q; // {row, col, distance}
        q.push({0, 0, 1});
        grid[0][0] = 1; // mark as visited
        
        while (!q.empty()) {
            auto cell = q.front();
            q.pop();
            int row = cell[0], col = cell[1], dist = cell[2];
            
            if (row == n-1 && col == n-1) {
                return dist;
            }
            
            for (auto& dir : directions) {
                int newRow = row + dir[0], newCol = col + dir[1];
                if (newRow >= 0 && newRow < n && newCol >= 0 && newCol < n && grid[newRow][newCol] == 0) {
                    q.push({newRow, newCol, dist + 1});
                    grid[newRow][newCol] = 1; // mark as visited
                }
            }
        }
        
        return -1;
    }
};`,notes:"Time: O(n²), Space: O(n²)",comments:[{author:"BFSExpert",content:"BFS for shortest path in grid! 8-direction movement."},{author:"CodeReviewer42",content:"Clean implementation with 8 directions."},{author:"OptimizationExpert",content:"BFS guarantees shortest path for unweighted grid."},{author:"AlternativeThinker",content:"We could use A* with heuristic but BFS is simpler."}]},{problemName:"Rotting Oranges",author:"BFS Rot Spreader",explanation:"Multi-source BFS from all rotten oranges. Track time to rot all fresh oranges.",solution:`class Solution {
public:
    int orangesRotting(vector<vector<int>>& grid) {
        int m = grid.size(), n = grid[0].size();
        queue<pair<int, int>> q;
        int fresh = 0;
        
        // Count fresh oranges and add rotten ones to queue
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 2) {
                    q.push({i, j});
                } else if (grid[i][j] == 1) {
                    fresh++;
                }
            }
        }
        
        if (fresh == 0) return 0;
        
        vector<vector<int>> directions = {{1,0}, {-1,0}, {0,1}, {0,-1}};
        int minutes = 0;
        
        while (!q.empty()) {
            int levelSize = q.size();
            bool infected = false;
            
            for (int i = 0; i < levelSize; i++) {
                auto [row, col] = q.front();
                q.pop();
                
                for (auto& dir : directions) {
                    int newRow = row + dir[0], newCol = col + dir[1];
                    if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n && grid[newRow][newCol] == 1) {
                        grid[newRow][newCol] = 2;
                        q.push({newRow, newCol});
                        fresh--;
                        infected = true;
                    }
                }
            }
            
            if (infected) minutes++;
        }
        
        return fresh == 0 ? minutes : -1;
    }
};`,notes:"Time: O(m*n), Space: O(m*n)",comments:[{author:"BFSExpert",content:"Multi-source BFS! Spreads rot from all rotten oranges simultaneously."},{author:"CodeReviewer42",content:"Good tracking of fresh count and infection progress."},{author:"OptimizationExpert",content:"We could track time without level counting but this is clearer."},{author:"AlternativeThinker",content:"We could use DFS but BFS is more natural for spreading."}]},{problemName:"Walls and Gates",author:"BFS Distance Calculator",explanation:"Multi-source BFS from all gates. Update rooms with shortest distance to nearest gate.",solution:`class Solution {
public:
    void wallsAndGates(vector<vector<int>>& rooms) {
        if (rooms.empty()) return;
        
        int m = rooms.size(), n = rooms[0].size();
        queue<pair<int, int>> q;
        
        // Add all gates to queue
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (rooms[i][j] == 0) {
                    q.push({i, j});
                }
            }
        }
        
        vector<vector<int>> directions = {{1,0}, {-1,0}, {0,1}, {0,-1}};
        
        while (!q.empty()) {
            auto [row, col] = q.front();
            q.pop();
            
            for (auto& dir : directions) {
                int newRow = row + dir[0], newCol = col + dir[1];
                if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n && 
                    rooms[newRow][newCol] == INT_MAX) {
                    rooms[newRow][newCol] = rooms[row][col] + 1;
                    q.push({newRow, newCol});
                }
            }
        }
    }
};`,notes:"Time: O(m*n), Space: O(m*n)",comments:[{author:"BFSExpert",content:"Multi-source BFS from gates! Updates room distances efficiently."},{author:"CodeReviewer42",content:"Clean implementation that modifies rooms in-place."},{author:"OptimizationExpert",content:"BFS guarantees shortest distances for unweighted grid."},{author:"AlternativeThinker",content:"We could use DFS but it would be less efficient."}]},{problemName:"Surrounded Regions",author:"DFS Region Capturer",explanation:"Start DFS from border 'O's to mark unsurrounded regions. Then capture surrounded regions.",solution:`class Solution {
public:
    void solve(vector<vector<char>>& board) {
        if (board.empty()) return;
        
        int m = board.size(), n = board[0].size();
        
        // Mark unsurrounded regions starting from borders
        for (int i = 0; i < m; i++) {
            if (board[i][0] == 'O') dfs(board, i, 0);
            if (board[i][n-1] == 'O') dfs(board, i, n-1);
        }
        for (int j = 0; j < n; j++) {
            if (board[0][j] == 'O') dfs(board, 0, j);
            if (board[m-1][j] == 'O') dfs(board, m-1, j);
        }
        
        // Capture surrounded regions and restore unsurrounded
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (board[i][j] == 'O') {
                    board[i][j] = 'X';
                } else if (board[i][j] == 'T') {
                    board[i][j] = 'O';
                }
            }
        }
    }
    
private:
    void dfs(vector<vector<char>>& board, int i, int j) {
        int m = board.size(), n = board[0].size();
        if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] != 'O') {
            return;
        }
        
        board[i][j] = 'T'; // mark as temporary
        
        dfs(board, i + 1, j);
        dfs(board, i - 1, j);
        dfs(board, i, j + 1);
        dfs(board, i, j - 1);
    }
};`,notes:"Time: O(m*n), Space: O(m*n) for recursion stack",comments:[{author:"DFSExpert",content:"Clever two-pass approach! Marks unsurrounded regions first, then captures surrounded ones."},{author:"CodeReviewer42",content:"Good use of temporary marker 'T' for unsurrounded regions."},{author:"OptimizationExpert",content:"We could use BFS for O(min(m,n)) space."},{author:"AlternativeThinker",content:"Union-Find would also work but DFS is more intuitive."}]},{problemName:"Redundant Connection",author:"Union-Find Expert",explanation:"Use Union-Find to detect cycle. The first edge that connects already connected components is redundant.",solution:`class Solution {
public:
    vector<int> findRedundantConnection(vector<vector<int>>& edges) {
        int n = edges.size();
        vector<int> parent(n + 1);
        for (int i = 1; i <= n; i++) {
            parent[i] = i;
        }
        
        for (auto& edge : edges) {
            int u = edge[0], v = edge[1];
            if (find(parent, u) == find(parent, v)) {
                return edge;
            }
            unionSets(parent, u, v);
        }
        
        return {};
    }
    
private:
    int find(vector<int>& parent, int x) {
        if (parent[x] != x) {
            parent[x] = find(parent, parent[x]);
        }
        return parent[x];
    }
    
    void unionSets(vector<int>& parent, int x, int y) {
        parent[find(parent, x)] = find(parent, y);
    }
};`,notes:"Time: O(n α(n)), Space: O(n)",comments:[{author:"UnionFindExpert",content:"Classic Union-Find cycle detection! Returns first edge that creates cycle."},{author:"CodeReviewer42",content:"Clean Union-Find with path compression."},{author:"OptimizationExpert",content:"Optimal O(n α(n)) time with Union-Find."},{author:"AlternativeThinker",content:"We could use DFS cycle detection but Union-Find is more efficient."}]},{problemName:"Word Ladder II",author:"BFS Path Finder",explanation:"Use BFS to find all shortest transformation paths. Build graph and then use DFS to reconstruct paths.",solution:`class Solution {
public:
    vector<vector<string>> findLadders(string beginWord, string endWord, vector<string>& wordList) {
        unordered_set<string> wordSet(wordList.begin(), wordList.end());
        if (!wordSet.count(endWord)) return {};
        
        // BFS to build graph and find shortest distance
        unordered_map<string, vector<string>> graph;
        unordered_map<string, int> distance;
        queue<string> q;
        
        q.push(beginWord);
        distance[beginWord] = 0;
        
        while (!q.empty()) {
            string current = q.front();
            q.pop();
            
            if (current == endWord) break;
            
            string temp = current;
            for (int i = 0; i < current.length(); i++) {
                char original = temp[i];
                for (char c = 'a'; c <= 'z'; c++) {
                    if (c == original) continue;
                    temp[i] = c;
                    if (wordSet.count(temp)) {
                        if (!distance.count(temp)) {
                            distance[temp] = distance[current] + 1;
                            q.push(temp);
                            graph[current].push_back(temp);
                        } else if (distance[temp] == distance[current] + 1) {
                            graph[current].push_back(temp);
                        }
                    }
                }
                temp[i] = original;
            }
        }
        
        // DFS to find all shortest paths
        vector<vector<string>> result;
        vector<string> path = {beginWord};
        dfs(beginWord, endWord, graph, path, result);
        return result;
    }
    
private:
    void dfs(string current, string endWord, unordered_map<string, vector<string>>& graph, 
             vector<string>& path, vector<vector<string>>& result) {
        if (current == endWord) {
            result.push_back(path);
            return;
        }
        
        for (string& neighbor : graph[current]) {
            path.push_back(neighbor);
            dfs(neighbor, endWord, graph, path, result);
            path.pop_back();
        }
    }
};`,notes:"Time: O(n * L² + k) where k is number of paths, Space: O(n)",comments:[{author:"BFSExpert",content:"Complex BFS + DFS! Finds all shortest transformation paths."},{author:"CodeReviewer42",content:"Good graph building with distance tracking for shortest paths only."},{author:"OptimizationExpert",content:"We could use bidirectional BFS for better performance."},{author:"AlternativeThinker",content:"We could store paths during BFS but that would use more memory."}]},{problemName:"Reconstruct Itinerary",author:"DFS Eulerian Path Finder",explanation:"Use Hierholzer's algorithm for Eulerian path. DFS with lexical order and backtracking.",solution:`class Solution {
public:
    vector<string> findItinerary(vector<vector<string>>& tickets) {
        // Build graph with lexical order
        unordered_map<string, multiset<string>> graph;
        for (auto& ticket : tickets) {
            graph[ticket[0]].insert(ticket[1]);
        }
        
        vector<string> itinerary;
        dfs("JFK", graph, itinerary);
        reverse(itinerary.begin(), itinerary.end());
        return itinerary;
    }
    
private:
    void dfs(string airport, unordered_map<string, multiset<string>>& graph, vector<string>& itinerary) {
        while (!graph[airport].empty()) {
            string next = *graph[airport].begin();
            graph[airport].erase(graph[airport].begin());
            dfs(next, graph, itinerary);
        }
        itinerary.push_back(airport);
    }
};`,notes:"Time: O(e log e), Space: O(e)",comments:[{author:"GraphExpert",content:"Hierholzer's algorithm for Eulerian path! Uses DFS with multiset for lexical order."},{author:"CodeReviewer42",content:"Clever post-order DFS that builds itinerary backwards."},{author:"OptimizationExpert",content:"We could use iterative DFS with stack."},{author:"AlternativeThinker",content:"We could track used tickets but multiset automatically handles duplicates."}]},{problemName:"Minimum Height Trees",author:"Topological Trimmer",explanation:"Repeatedly remove leaves until 1 or 2 nodes remain. These are the roots of MHTs.",solution:`class Solution {
public:
    vector<int> findMinHeightTrees(int n, vector<vector<int>>& edges) {
        if (n == 1) return {0};
        
        vector<unordered_set<int>> graph(n);
        for (auto& edge : edges) {
            graph[edge[0]].insert(edge[1]);
            graph[edge[1]].insert(edge[0]);
        }
        
        queue<int> leaves;
        for (int i = 0; i < n; i++) {
            if (graph[i].size() == 1) {
                leaves.push(i);
            }
        }
        
        int remaining = n;
        while (remaining > 2) {
            int levelSize = leaves.size();
            remaining -= levelSize;
            
            for (int i = 0; i < levelSize; i++) {
                int leaf = leaves.front();
                leaves.pop();
                
                for (int neighbor : graph[leaf]) {
                    graph[neighbor].erase(leaf);
                    if (graph[neighbor].size() == 1) {
                        leaves.push(neighbor);
                    }
                }
            }
        }
        
        vector<int> result;
        while (!leaves.empty()) {
            result.push_back(leaves.front());
            leaves.pop();
        }
        return result;
    }
};`,notes:"Time: O(n), Space: O(n)",comments:[{author:"GraphExpert",content:"Clever topological trimming! Repeatedly removes leaves until center remains."},{author:"CodeReviewer42",content:"Good use of unordered_set for efficient neighbor removal."},{author:"OptimizationExpert",content:"Optimal O(n) solution instead of O(n²) BFS from each node."},{author:"AlternativeThinker",content:"We could use BFS from leaves but this is more efficient."}]},{problemName:"Critical Connections in a Network",author:"Tarjan's Algorithm Expert",explanation:"Use Tarjan's algorithm to find bridges in the graph. Track discovery time and low link values.",solution:`class Solution {
public:
    vector<vector<int>> criticalConnections(int n, vector<vector<int>>& connections) {
        // Build graph
        vector<vector<int>> graph(n);
        for (auto& conn : connections) {
            graph[conn[0]].push_back(conn[1]);
            graph[conn[1]].push_back(conn[0]);
        }
        
        vector<int> disc(n, -1), low(n, -1);
        vector<vector<int>> bridges;
        int time = 0;
        
        dfs(0, -1, graph, disc, low, bridges, time);
        return bridges;
    }
    
private:
    void dfs(int u, int parent, vector<vector<int>>& graph, vector<int>& disc, 
             vector<int>& low, vector<vector<int>>& bridges, int& time) {
        disc[u] = low[u] = time++;
        
        for (int v : graph[u]) {
            if (v == parent) continue;
            
            if (disc[v] == -1) {
                dfs(v, u, graph, disc, low, bridges, time);
                low[u] = min(low[u], low[v]);
                
                // If low[v] > disc[u], then u-v is a bridge
                if (low[v] > disc[u]) {
                    bridges.push_back({u, v});
                }
            } else {
                low[u] = min(low[u], disc[v]);
            }
        }
    }
};`,notes:"Time: O(n + e), Space: O(n + e)",comments:[{author:"GraphExpert",content:"Tarjan's algorithm for bridge finding! Uses discovery time and low link values."},{author:"CodeReviewer42",content:"Clean implementation with DFS and time tracking."},{author:"OptimizationExpert",content:"Optimal O(n + e) algorithm for bridge detection."},{author:"AlternativeThinker",content:"We could use Union-Find but it's less efficient for this problem."}]},{problemName:"Swim in Rising Water",author:"Binary Search + BFS",explanation:"Binary search on possible water levels. For each level, check if path exists using BFS/DFS.",solution:`class Solution {
public:
    int swimInWater(vector<vector<int>>& grid) {
        int n = grid.size();
        int left = 0, right = n * n - 1;
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (canReach(grid, mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        
        return left;
    }
    
private:
    bool canReach(vector<vector<int>>& grid, int waterLevel) {
        int n = grid.size();
        if (grid[0][0] > waterLevel) return false;
        
        vector<vector<bool>> visited(n, vector<bool>(n, false));
        queue<pair<int, int>> q;
        q.push({0, 0});
        visited[0][0] = true;
        
        vector<vector<int>> directions = {{1,0}, {-1,0}, {0,1}, {0,-1}};
        
        while (!q.empty()) {
            auto [i, j] = q.front();
            q.pop();
            
            if (i == n-1 && j == n-1) return true;
            
            for (auto& dir : directions) {
                int ni = i + dir[0], nj = j + dir[1];
                if (ni >= 0 && ni < n && nj >= 0 && nj < n && 
                    !visited[ni][nj] && grid[ni][nj] <= waterLevel) {
                    visited[ni][nj] = true;
                    q.push({ni, nj});
                }
            }
        }
        
        return false;
    }
};`,notes:"Time: O(n² log n²), Space: O(n²)",comments:[{author:"BinarySearchExpert",content:"Binary search + BFS! Finds minimum water level for path existence."},{author:"CodeReviewer42",content:"Clean binary search with BFS path checking."},{author:"OptimizationExpert",content:"We could use Dijkstra for O(n² log n) time."},{author:"AlternativeThinker",content:"Dijkstra might be more efficient for this problem."}]},{problemName:"Sliding Puzzle",author:"BFS State Explorer",explanation:"Treat puzzle as graph where each state is a node. Use BFS to find shortest path to target state.",solution:`class Solution {
public:
    int slidingPuzzle(vector<vector<int>>& board) {
        string target = "123450";
        string start = "";
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 3; j++) {
                start += to_string(board[i][j]);
            }
        }
        
        // Possible moves for each position
        vector<vector<int>> moves = {
            {1, 3},     // position 0
            {0, 2, 4},  // position 1
            {1, 5},     // position 2
            {0, 4},     // position 3
            {1, 3, 5},  // position 4
            {2, 4}      // position 5
        };
        
        unordered_set<string> visited;
        queue<string> q;
        q.push(start);
        visited.insert(start);
        int steps = 0;
        
        while (!q.empty()) {
            int levelSize = q.size();
            for (int i = 0; i < levelSize; i++) {
                string current = q.front();
                q.pop();
                
                if (current == target) return steps;
                
                int zeroPos = current.find('0');
                for (int move : moves[zeroPos]) {
                    string next = current;
                    swap(next[zeroPos], next[move]);
                    if (!visited.count(next)) {
                        visited.insert(next);
                        q.push(next);
                    }
                }
            }
            steps++;
        }
        
        return -1;
    }
};`,notes:"Time: O(6!)=O(720), Space: O(720)",comments:[{author:"BFSExpert",content:"BFS on puzzle states! Treats each board configuration as graph node."},{author:"CodeReviewer42",content:"Good representation of board as string for easy hashing."},{author:"OptimizationExpert",content:"We could use A* with Manhattan distance heuristic."},{author:"AlternativeThinker",content:"We could precompute all possible moves but BFS is sufficient."}]},{problemName:"Shortest Path to Get All Keys",author:"BFS with State",explanation:"BFS with state tracking (keys collected). Each state is (position, keys_bitmask).",solution:`class Solution {
public:
    int shortestPathAllKeys(vector<string>& grid) {
        int m = grid.size(), n = grid[0].size();
        int allKeys = 0;
        int startX, startY;
        
        // Find start position and count keys
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == '@') {
                    startX = i;
                    startY = j;
                } else if (islower(grid[i][j])) {
                    allKeys |= (1 << (grid[i][j] - 'a'));
                }
            }
        }
        
        // BFS with state: (x, y, keys)
        queue<vector<int>> q; // {x, y, keys, steps}
        q.push({startX, startY, 0, 0});
        
        vector<vector<vector<bool>>> visited(m, vector<vector<bool>>(n, vector<bool>(64, false)));
        visited[startX][startY][0] = true;
        
        vector<vector<int>> directions = {{1,0}, {-1,0}, {0,1}, {0,-1}};
        
        while (!q.empty()) {
            auto state = q.front();
            q.pop();
            int x = state[0], y = state[1], keys = state[2], steps = state[3];
            
            if (keys == allKeys) return steps;
            
            for (auto& dir : directions) {
                int nx = x + dir[0], ny = y + dir[1];
                int newKeys = keys;
                
                if (nx < 0 || nx >= m || ny < 0 || ny >= n || grid[nx][ny] == '#') {
                    continue;
                }
                
                char cell = grid[nx][ny];
                
                // If it's a lock and we don't have the key, skip
                if (isupper(cell) && !(keys & (1 << (cell - 'A')))) {
                    continue;
                }
                
                // If it's a key, pick it up
                if (islower(cell)) {
                    newKeys |= (1 << (cell - 'a'));
                }
                
                if (!visited[nx][ny][newKeys]) {
                    visited[nx][ny][newKeys] = true;
                    q.push({nx, ny, newKeys, steps + 1});
                }
            }
        }
        
        return -1;
    }
};`,notes:"Time: O(m * n * 2^k), Space: O(m * n * 2^k)",comments:[{author:"BFSExpert",content:"BFS with state tracking! Tracks keys collected using bitmask."},{author:"CodeReviewer42",content:"Good use of bitmask for efficient key state representation."},{author:"OptimizationExpert",content:"We could use Dijkstra but BFS is sufficient for unweighted graph."},{author:"AlternativeThinker",content:"We could use A* with heuristic but BFS is simpler."}]},{problemName:"Binary Search",author:"Binary Search Master",explanation:"Classic binary search algorithm. Maintain left and right pointers, calculate mid, and adjust search range based on comparison with target.",solution:`class Solution {
public:
    int search(vector<int>& nums, int target) {
        int left = 0, right = nums.size() - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return -1;
    }
};`,notes:"Time: O(log n), Space: O(1)",comments:[{author:"AlgorithmExpert",content:"Classic binary search implementation! Clean and efficient."},{author:"CodeReviewer42",content:"Good use of left + (right - left) / 2 to avoid integer overflow."},{author:"EdgeCaseHunter",content:"Handles empty array and single element correctly."},{author:"AlternativeThinker",content:"We could use recursion but iterative is more space efficient."}]},{problemName:"First Bad Version",author:"Binary Search Detective",explanation:"Use binary search to find the first bad version. If mid is bad, search left half. Otherwise, search right half.",solution:`// The API isBadVersion is defined for you.
// bool isBadVersion(int version);

class Solution {
public:
    int firstBadVersion(int n) {
        int left = 1, right = n;
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            
            if (isBadVersion(mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        
        return left;
    }
};`,notes:"Time: O(log n), Space: O(1)",comments:[{author:"BinarySearchExpert",content:"Clean binary search variant! Finds first occurrence of bad version."},{author:"CodeReviewer42",content:"Good use of left < right to avoid infinite loops."},{author:"EdgeCaseHunter",content:"Handles case where first version is bad correctly."},{author:"AlternativeThinker",content:"We could use left <= right but this approach is more elegant."}]},{problemName:"Search Insert Position",author:"Binary Search Inserter",explanation:"Use binary search to find insertion position. If target found, return index. Otherwise, return left pointer.",solution:`class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {
        int left = 0, right = nums.size() - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return left;
    }
};`,notes:"Time: O(log n), Space: O(1)",comments:[{author:"BinarySearchExpert",content:"Classic insertion position search! Left pointer gives correct insertion index."},{author:"CodeReviewer42",content:"Clean implementation. Left pointer naturally ends at insertion position."},{author:"EdgeCaseHunter",content:"Handles insertion at beginning, middle, and end correctly."},{author:"AlternativeThinker",content:"We could use lower_bound from STL but understanding the algorithm is important."}]},{problemName:"Sqrt(x)",author:"Binary Search Calculator",explanation:"Use binary search to find integer square root. Search in range [0, x] for the largest number whose square <= x.",solution:`class Solution {
public:
    int mySqrt(int x) {
        if (x <= 1) return x;
        
        int left = 1, right = x;
        int result = 0;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            // Use division to avoid overflow
            if (mid <= x / mid) {
                result = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return result;
    }
};`,notes:"Time: O(log x), Space: O(1)",comments:[{author:"MathExpert",content:"Clever binary search for square root! Uses division to avoid overflow."},{author:"CodeReviewer42",content:"Good handling of overflow by using division instead of multiplication."},{author:"EdgeCaseHunter",content:"Handles x=0 and x=1 as base cases correctly."},{author:"AlternativeThinker",content:"We could use Newton's method but binary search is more intuitive."}]},{problemName:"Arranging Coins",author:"Binary Search Arranger",explanation:"Use binary search to find the maximum complete rows. The k-th triangular number is k*(k+1)/2.",solution:`class Solution {
public:
    int arrangeCoins(int n) {
        long left = 0, right = n;
        
        while (left <= right) {
            long mid = left + (right - left) / 2;
            long coins = mid * (mid + 1) / 2;
            
            if (coins == n) {
                return mid;
            } else if (coins < n) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return right;
    }
};`,notes:"Time: O(log n), Space: O(1)",comments:[{author:"MathExpert",content:"Binary search on triangular numbers! Finds maximum complete rows."},{author:"CodeReviewer42",content:"Good use of long to avoid integer overflow."},{author:"EdgeCaseHunter",content:"Returns right pointer when exact match not found."},{author:"AlternativeThinker",content:"We could solve quadratic equation but binary search is more general."}]},{problemName:"Valid Perfect Square",author:"Binary Search Checker",explanation:"Use binary search to check if a number is perfect square. Search in range [1, num] for integer square root.",solution:`class Solution {
public:
    bool isPerfectSquare(int num) {
        if (num <= 1) return true;
        
        long left = 1, right = num;
        
        while (left <= right) {
            long mid = left + (right - left) / 2;
            long square = mid * mid;
            
            if (square == num) {
                return true;
            } else if (square < num) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return false;
    }
};`,notes:"Time: O(log n), Space: O(1)",comments:[{author:"BinarySearchExpert",content:"Binary search for perfect square check! Efficient O(log n) solution."},{author:"CodeReviewer42",content:"Good use of long to handle large numbers and avoid overflow."},{author:"EdgeCaseHunter",content:"Handles edge cases like 0, 1, and large numbers correctly."},{author:"AlternativeThinker",content:"We could use Newton's method but binary search is sufficient."}]},{problemName:"Search a 2D Matrix",author:"Binary Search Matrix Explorer",explanation:"Treat the 2D matrix as a 1D sorted array. Use binary search with index conversion: row = mid / cols, col = mid % cols.",solution:`class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        int m = matrix.size(), n = matrix[0].size();
        int left = 0, right = m * n - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            int row = mid / n, col = mid % n;
            int value = matrix[row][col];
            
            if (value == target) {
                return true;
            } else if (value < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return false;
    }
};`,notes:"Time: O(log(m*n)), Space: O(1)",comments:[{author:"MatrixExpert",content:"Clever 1D treatment of 2D matrix! Uses division and modulo for index conversion."},{author:"CodeReviewer42",content:"Clean index calculation: row = mid/cols, col = mid%cols."},{author:"OptimizationExpert",content:"More efficient than searching row first then column."},{author:"AlternativeThinker",content:"We could search row first then column but this is one-pass."}]},{problemName:"Find First and Last Position of Element in Sorted Array",author:"Binary Search Range Finder",explanation:"Use two binary searches: one to find first occurrence, one to find last occurrence.",solution:`class Solution {
public:
    vector<int> searchRange(vector<int>& nums, int target) {
        return {findFirst(nums, target), findLast(nums, target)};
    }
    
private:
    int findFirst(vector<int>& nums, int target) {
        int left = 0, right = nums.size() - 1;
        int first = -1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] == target) {
                first = mid;
                right = mid - 1; // Continue searching left
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return first;
    }
    
    int findLast(vector<int>& nums, int target) {
        int left = 0, right = nums.size() - 1;
        int last = -1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] == target) {
                last = mid;
                left = mid + 1; // Continue searching right
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return last;
    }
};`,notes:"Time: O(log n), Space: O(1)",comments:[{author:"BinarySearchExpert",content:"Two-pass binary search! Finds first and last occurrence separately."},{author:"CodeReviewer42",content:"Clean separation into helper functions for clarity."},{author:"EdgeCaseHunter",content:"Handles cases where target is not present correctly."},{author:"AlternativeThinker",content:"We could use lower_bound and upper_bound from STL."}]},{problemName:"Capacity To Ship Packages Within D Days",author:"Binary Search Capacity Finder",explanation:"Binary search on possible capacity. Check if a given capacity can ship all packages within D days.",solution:`class Solution {
public:
    int shipWithinDays(vector<int>& weights, int days) {
        int left = *max_element(weights.begin(), weights.end());
        int right = accumulate(weights.begin(), weights.end(), 0);
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            
            if (canShip(weights, days, mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        
        return left;
    }
    
private:
    bool canShip(vector<int>& weights, int days, int capacity) {
        int currentLoad = 0;
        int daysNeeded = 1;
        
        for (int weight : weights) {
            if (currentLoad + weight > capacity) {
                daysNeeded++;
                currentLoad = 0;
            }
            currentLoad += weight;
        }
        
        return daysNeeded <= days;
    }
};`,notes:"Time: O(n log s) where s is sum of weights, Space: O(1)",comments:[{author:"BinarySearchExpert",content:"Binary search on answer! Checks feasibility for each capacity."},{author:"CodeReviewer42",content:"Good search range: from max weight to total weight."},{author:"OptimizationExpert",content:"Efficient O(n log s) solution instead of brute force."},{author:"AlternativeThinker",content:"We could use greedy with priority queue but binary search is better."}]},{problemName:"Split Array Largest Sum",author:"Binary Search Splitter",explanation:"Binary search on possible maximum subarray sum. Check if array can be split into m subarrays with given max sum.",solution:`class Solution {
public:
    int splitArray(vector<int>& nums, int m) {
        int left = *max_element(nums.begin(), nums.end());
        int right = accumulate(nums.begin(), nums.end(), 0);
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            
            if (canSplit(nums, m, mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        
        return left;
    }
    
private:
    bool canSplit(vector<int>& nums, int m, int maxSum) {
        int currentSum = 0;
        int splits = 1; // Start with 1 subarray
        
        for (int num : nums) {
            if (currentSum + num > maxSum) {
                splits++;
                currentSum = 0;
            }
            currentSum += num;
        }
        
        return splits <= m;
    }
};`,notes:"Time: O(n log s) where s is sum of array, Space: O(1)",comments:[{author:"BinarySearchExpert",content:"Similar to ship packages problem! Binary search on maximum subarray sum."},{author:"CodeReviewer42",content:"Clean feasibility check with subarray counting."},{author:"OptimizationExpert",content:"Optimal solution for this minimization problem."},{author:"AlternativeThinker",content:"We could use DP but it would be O(n² m) time."}]},{problemName:"Koko Eating Bananas",author:"Binary Search Eater",explanation:"Binary search on eating speed. Check if Koko can eat all bananas within h hours at given speed.",solution:`class Solution {
public:
    int minEatingSpeed(vector<int>& piles, int h) {
        int left = 1;
        int right = *max_element(piles.begin(), piles.end());
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            
            if (canEat(piles, h, mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        
        return left;
    }
    
private:
    bool canEat(vector<int>& piles, int h, int speed) {
        long hours = 0; // Use long to avoid overflow
        for (int pile : piles) {
            hours += (pile + speed - 1) / speed; // Ceiling division
        }
        return hours <= h;
    }
};`,notes:"Time: O(n log m) where m is max pile, Space: O(1)",comments:[{author:"BinarySearchExpert",content:"Binary search on eating speed! Uses ceiling division for hour calculation."},{author:"CodeReviewer42",content:"Good use of (pile + speed - 1) / speed for ceiling division."},{author:"OptimizationExpert",content:"Efficient O(n log m) solution."},{author:"AlternativeThinker",content:"We could use float division with ceil but integer math is faster."}]},{problemName:"Find Peak Element",author:"Binary Search Peak Finder",explanation:"Use binary search to find peak. Compare mid with mid+1 to determine search direction.",solution:`class Solution {
public:
    int findPeakElement(vector<int>& nums) {
        int left = 0, right = nums.size() - 1;
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] > nums[mid + 1]) {
                // Peak is in left half (including mid)
                right = mid;
            } else {
                // Peak is in right half
                left = mid + 1;
            }
        }
        
        return left;
    }
};`,notes:"Time: O(log n), Space: O(1)",comments:[{author:"BinarySearchExpert",content:"Clever binary search for peak finding! Compares adjacent elements."},{author:"CodeReviewer42",content:"Simple and elegant solution. No need to check both neighbors."},{author:"EdgeCaseHunter",content:"Handles single element and two element arrays correctly."},{author:"AlternativeThinker",content:"We could check both neighbors but comparing with right neighbor is sufficient."}]},{problemName:"Search in Rotated Sorted Array II",author:"Binary Search Rotated Array Expert",explanation:"Handle duplicates by skipping them. When nums[left] == nums[mid] == nums[right], increment left and decrement right.",solution:`class Solution {
public:
    bool search(vector<int>& nums, int target) {
        int left = 0, right = nums.size() - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] == target) {
                return true;
            }
            
            // Handle duplicates
            if (nums[left] == nums[mid] && nums[mid] == nums[right]) {
                left++;
                right--;
            }
            // Left side is sorted
            else if (nums[left] <= nums[mid]) {
                if (nums[left] <= target && target < nums[mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
            // Right side is sorted
            else {
                if (nums[mid] < target && target <= nums[right]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }
        
        return false;
    }
};`,notes:"Time: O(n) worst case (all duplicates), O(log n) average, Space: O(1)",comments:[{author:"BinarySearchExpert",content:"Handles duplicates in rotated array! Skips duplicates when all three pointers match."},{author:"CodeReviewer42",content:"Good handling of the duplicate case by incrementing left and decrementing right."},{author:"EdgeCaseHunter",content:"Works correctly with arrays containing many duplicates."},{author:"AlternativeThinker",content:"We could find pivot first but this approach is more direct."}]},{problemName:"Time Based Key-Value Store",author:"Binary Search Time Store",explanation:"Use hash map to store key -> list of (timestamp, value). Use binary search to find value with largest timestamp <= given timestamp.",solution:`class TimeMap {
private:
    unordered_map<string, vector<pair<int, string>>> store;
    
public:
    TimeMap() {}
    
    void set(string key, string value, int timestamp) {
        store[key].push_back({timestamp, value});
    }
    
    string get(string key, int timestamp) {
        if (!store.count(key)) return "";
        
        vector<pair<int, string>>& values = store[key];
        
        // Binary search for largest timestamp <= given timestamp
        int left = 0, right = values.size() - 1;
        string result = "";
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (values[mid].first <= timestamp) {
                result = values[mid].second;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return result;
    }
};`,notes:"Time: O(log n) for get, O(1) for set, Space: O(n)",comments:[{author:"DataStructureExpert",content:"Efficient time-based key-value store! Uses binary search for timestamp queries."},{author:"CodeReviewer42",content:"Clean implementation with vector of pairs for each key."},{author:"OptimizationExpert",content:"We could use map instead of vector but vector is more space efficient."},{author:"AlternativeThinker",content:"We could store timestamps separately but this approach is simpler."}]},{problemName:"Find Minimum in Rotated Sorted Array II",author:"Binary Search Minimum Finder",explanation:"Handle duplicates by skipping them. Compare mid with right to determine search direction.",solution:`class Solution {
public:
    int findMin(vector<int>& nums) {
        int left = 0, right = nums.size() - 1;
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] > nums[right]) {
                // Minimum is in right half
                left = mid + 1;
            } else if (nums[mid] < nums[right]) {
                // Minimum is in left half (including mid)
                right = mid;
            } else {
                // nums[mid] == nums[right], skip duplicate
                right--;
            }
        }
        
        return nums[left];
    }
};`,notes:"Time: O(n) worst case (all duplicates), O(log n) average, Space: O(1)",comments:[{author:"BinarySearchExpert",content:"Handles duplicates in rotated array! Compares with right element and skips duplicates."},{author:"CodeReviewer42",content:"Clean solution. Decrements right when mid equals right."},{author:"EdgeCaseHunter",content:"Works correctly with arrays containing many duplicates."},{author:"AlternativeThinker",content:"We could compare with left element but comparing with right is more robust."}]},{problemName:"Max Sum of Rectangle No Larger Than K",author:"Binary Search Rectangle Finder",explanation:"Fix left and right columns, compute prefix sums for rows, then use binary search to find max sum <= k.",solution:`class Solution {
public:
    int maxSumSubmatrix(vector<vector<int>>& matrix, int k) {
        int m = matrix.size(), n = matrix[0].size();
        int result = INT_MIN;
        
        // Try all possible left columns
        for (int left = 0; left < n; left++) {
            vector<int> rowSums(m, 0);
            
            // Try all possible right columns
            for (int right = left; right < n; right++) {
                // Update row sums for current left-right pair
                for (int i = 0; i < m; i++) {
                    rowSums[i] += matrix[i][right];
                }
                
                // Find max subarray sum <= k in rowSums
                result = max(result, maxSubarraySum(rowSums, k));
            }
        }
        
        return result;
    }
    
private:
    int maxSubarraySum(vector<int>& nums, int k) {
        int maxSum = INT_MIN;
        int prefixSum = 0;
        set<int> prefixSums;
        prefixSums.insert(0);
        
        for (int num : nums) {
            prefixSum += num;
            
            // Find smallest prefixSum >= (prefixSum - k)
            auto it = prefixSums.lower_bound(prefixSum - k);
            if (it != prefixSums.end()) {
                maxSum = max(maxSum, prefixSum - *it);
            }
            
            prefixSums.insert(prefixSum);
        }
        
        return maxSum;
    }
};`,notes:"Time: O(min(m,n)² * max(m,n) log max(m,n)), Space: O(max(m,n))",comments:[{author:"BinarySearchExpert",content:"Complex 2D problem reduced to 1D! Uses Kadane's algorithm with binary search."},{author:"CodeReviewer42",content:"Clever use of set and lower_bound to find max subarray sum <= k."},{author:"OptimizationExpert",content:"We could optimize by choosing smaller dimension for outer loops."},{author:"AlternativeThinker",content:"We could use brute force but that would be O(m² n²)."}]},{problemName:"Kth Largest Element in a Stream",author:"Min-Heap Stream Processor",explanation:"Maintain a min-heap of size k to always have quick access to the kth largest element. When adding new elements, push them to the heap and pop if size exceeds k.",solution:`class KthLargest {
private:
    priority_queue<int, vector<int>, greater<int>> minHeap;
    int k;
    
public:
    KthLargest(int k, vector<int>& nums) {
        this->k = k;
        for (int num : nums) {
            add(num);
        }
    }
    
    int add(int val) {
        minHeap.push(val);
        if (minHeap.size() > k) {
            minHeap.pop();
        }
        return minHeap.top();
    }
};`,notes:"Time: O(n log k), Space: O(k)",comments:[{author:"HeapMaster",content:"Using min-heap ensures we always have the k largest elements with the smallest at top being kth largest"},{author:"CodeReviewer42",content:"Clean implementation with proper constructor initialization and efficient add operation"},{author:"EdgeCaseHunter",content:"Handles initial empty array case correctly by building heap incrementally"},{author:"AlternativeThinker",content:"Could also use quickselect for initial array but heap is better for stream"}]},{problemName:"Last Stone Weight",author:"Max-Heap Stone Smasher",explanation:"Use a max-heap to always get the two heaviest stones. Smash them together and push the result back if non-zero.",solution:`class Solution {
public:
    int lastStoneWeight(vector<int>& stones) {
        priority_queue<int> maxHeap(stones.begin(), stones.end());
        
        while (maxHeap.size() > 1) {
            int y = maxHeap.top(); maxHeap.pop();
            int x = maxHeap.top(); maxHeap.pop();
            
            if (x != y) {
                maxHeap.push(y - x);
            }
        }
        
        return maxHeap.empty() ? 0 : maxHeap.top();
    }
};`,notes:"Time: O(n log n), Space: O(n)",comments:[{author:"HeapMaster",content:"Max-heap perfectly fits the problem requirement of always getting largest elements"},{author:"CodeReviewer42",content:"Efficient implementation with proper edge case handling for empty heap"},{author:"EdgeCaseHunter",content:"Correctly handles case where all stones destroy each other completely"},{author:"AlternativeThinker",content:"Could use multiset but heap provides better time complexity"}]},{problemName:"The K Weakest Rows in a Matrix",author:"Heap with Custom Comparator",explanation:"Use a max-heap to track k weakest rows based on soldier count and row index. Soldier count is found using binary search.",solution:`class Solution {
public:
    vector<int> kWeakestRows(vector<vector<int>>& mat, int k) {
        // Max heap to store pairs of (soldier_count, row_index)
        priority_queue<pair<int, int>> maxHeap;
        
        for (int i = 0; i < mat.size(); i++) {
            int soldiers = countSoldiers(mat[i]);
            maxHeap.push({soldiers, i});
            
            // Maintain only k elements in heap
            if (maxHeap.size() > k) {
                maxHeap.pop();
            }
        }
        
        // Extract results in reverse order
        vector<int> result(k);
        for (int i = k - 1; i >= 0; i--) {
            result[i] = maxHeap.top().second;
            maxHeap.pop();
        }
        
        return result;
    }
    
private:
    int countSoldiers(vector<int>& row) {
        int left = 0, right = row.size() - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (row[mid] == 1) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return left; // Number of soldiers
    }
};`,notes:"Time: O(m log n + m log k), Space: O(k)",comments:[{author:"HeapMaster",content:"Max-heap with custom comparator efficiently finds k smallest elements"},{author:"CodeReviewer42",content:"Good separation of concerns with helper function for soldier counting"},{author:"EdgeCaseHunter",content:"Handles edge cases where multiple rows have same soldier count using row index"},{author:"AlternativeThinker",content:"Could also use quickselect for better average case performance"}]},{problemName:"Maximum Product of Two Elements in an Array",author:"Two Largest Finder",explanation:"Find the two largest elements in the array using a max-heap or direct scanning, then calculate (max1-1)*(max2-1).",solution:`class Solution {
public:
    int maxProduct(vector<int>& nums) {
        priority_queue<int> maxHeap(nums.begin(), nums.end());
        
        int first = maxHeap.top(); maxHeap.pop();
        int second = maxHeap.top(); maxHeap.pop();
        
        return (first - 1) * (second - 1);
    }
};`,notes:"Time: O(n), Space: O(n)",comments:[{author:"HeapMaster",content:"Heap provides clean solution though direct scanning would be more space efficient"},{author:"CodeReviewer42",content:"Simple and readable implementation"},{author:"EdgeCaseHunter",content:"Works correctly for arrays with duplicate maximum values"},{author:"AlternativeThinker",content:"Can be solved in O(1) space by tracking two largest elements manually"}]},{problemName:"Kth Largest Element in an Array",author:"Quickselect Expert",explanation:"Use quickselect algorithm to find kth largest element without fully sorting the array, achieving O(n) average time.",solution:`class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        return quickSelect(nums, 0, nums.size() - 1, nums.size() - k);
    }
    
private:
    int quickSelect(vector<int>& nums, int left, int right, int k) {
        if (left == right) return nums[left];
        
        int pivotIndex = partition(nums, left, right);
        
        if (k == pivotIndex) {
            return nums[k];
        } else if (k < pivotIndex) {
            return quickSelect(nums, left, pivotIndex - 1, k);
        } else {
            return quickSelect(nums, pivotIndex + 1, right, k);
        }
    }
    
    int partition(vector<int>& nums, int left, int right) {
        int pivot = nums[right];
        int i = left;
        
        for (int j = left; j < right; j++) {
            if (nums[j] <= pivot) {
                swap(nums[i], nums[j]);
                i++;
            }
        }
        swap(nums[i], nums[right]);
        return i;
    }
};`,notes:"Time: O(n) average, O(n²) worst, Space: O(1)",comments:[{author:"AlgorithmExpert",content:"Quickselect provides optimal average case time complexity for this problem"},{author:"CodeReviewer42",content:"Clean implementation of Lomuto partition scheme"},{author:"EdgeCaseHunter",content:"Handles duplicate elements correctly in the partition"},{author:"AlternativeThinker",content:"Min-heap approach also works with O(n log k) time and O(k) space"}]},{problemName:"Top K Frequent Elements",author:"Bucket Sort Specialist",explanation:"Use frequency map and bucket sort to group elements by frequency, then extract top k frequent elements.",solution:`class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        // Count frequencies
        unordered_map<int, int> freqMap;
        for (int num : nums) {
            freqMap[num]++;
        }
        
        // Bucket sort by frequency
        vector<vector<int>> buckets(nums.size() + 1);
        for (auto& [num, freq] : freqMap) {
            buckets[freq].push_back(num);
        }
        
        // Extract top k frequent elements
        vector<int> result;
        for (int i = buckets.size() - 1; i >= 0 && result.size() < k; i--) {
            for (int num : buckets[i]) {
                result.push_back(num);
                if (result.size() == k) break;
            }
        }
        
        return result;
    }
};`,notes:"Time: O(n), Space: O(n)",comments:[{author:"AlgorithmExpert",content:"Bucket sort approach provides optimal O(n) time complexity"},{author:"CodeReviewer42",content:"Clean implementation with proper use of unordered_map and vector buckets"},{author:"EdgeCaseHunter",content:"Handles cases where multiple elements have same frequency correctly"},{author:"AlternativeThinker",content:"Min-heap approach with O(n log k) is also popular"}]},{problemName:"Sort Characters By Frequency",author:"Frequency-Based Sorter",explanation:"Count character frequencies, then sort characters based on frequency in descending order.",solution:`class Solution {
public:
    string frequencySort(string s) {
        // Count frequencies
        unordered_map<char, int> freqMap;
        for (char c : s) {
            freqMap[c]++;
        }
        
        // Sort characters by frequency
        sort(s.begin(), s.end(), [&](char a, char b) {
            if (freqMap[a] == freqMap[b]) {
                return a < b; // Secondary sort by character
            }
            return freqMap[a] > freqMap[b];
        });
        
        return s;
    }
};`,notes:"Time: O(n log n), Space: O(n)",comments:[{author:"AlgorithmExpert",content:"Custom comparator with frequency map provides elegant solution"},{author:"CodeReviewer42",content:"Clean lambda function with proper secondary sorting"},{author:"EdgeCaseHunter",content:"Handles tie-breaking when frequencies are equal"},{author:"AlternativeThinker",content:"Bucket sort approach can achieve O(n) time"}]},{problemName:"K Closest Points to Origin",author:"Max-Heap Distance Tracker",explanation:"Use a max-heap to maintain k closest points to origin based on Euclidean distance.",solution:`class Solution {
public:
    vector<vector<int>> kClosest(vector<vector<int>>& points, int k) {
        // Max heap to store (distance, index) pairs
        priority_queue<pair<double, int>> maxHeap;
        
        for (int i = 0; i < points.size(); i++) {
            int x = points[i][0], y = points[i][1];
            double dist = sqrt(x * x + y * y);
            
            maxHeap.push({dist, i});
            if (maxHeap.size() > k) {
                maxHeap.pop();
            }
        }
        
        // Extract results
        vector<vector<int>> result;
        while (!maxHeap.empty()) {
            result.push_back(points[maxHeap.top().second]);
            maxHeap.pop();
        }
        
        return result;
    }
};`,notes:"Time: O(n log k), Space: O(k)",comments:[{author:"HeapMaster",content:"Max-heap efficiently maintains k smallest distances without full sorting"},{author:"CodeReviewer42",content:"Good use of pair to store both distance and original index"},{author:"EdgeCaseHunter",content:"Avoids floating point precision issues by comparing squared distances"},{author:"AlternativeThinker",content:"Quickselect can achieve O(n) average time complexity"}]},{problemName:"Reorganize String",author:"Max-Heap Character Arranger",explanation:"Use max-heap to always place the most frequent character first while ensuring no two adjacent characters are same.",solution:`class Solution {
public:
    string reorganizeString(string s) {
        // Count frequencies
        unordered_map<char, int> freqMap;
        for (char c : s) {
            freqMap[c]++;
        }
        
        // Max heap based on frequency
        priority_queue<pair<int, char>> maxHeap;
        for (auto& [ch, count] : freqMap) {
            maxHeap.push({count, ch});
        }
        
        string result;
        pair<int, char> prev = {-1, '#'}; // Previously used character
        
        while (!maxHeap.empty()) {
            auto [count, ch] = maxHeap.top();
            maxHeap.pop();
            
            result += ch;
            count--;
            
            // Push back the previous character if it still has count
            if (prev.first > 0) {
                maxHeap.push(prev);
            }
            
            // Store current character as previous for next iteration
            prev = {count, ch};
        }
        
        // If result length doesn't match original, reorganization failed
        return result.length() == s.length() ? result : "";
    }
};`,notes:"Time: O(n log 26), Space: O(26)",comments:[{author:"HeapMaster",content:"Greedy approach with max-heap ensures optimal character placement"},{author:"CodeReviewer42",content:"Elegant solution with prev variable to avoid consecutive duplicates"},{author:"EdgeCaseHunter",content:"Correctly identifies when reorganization is impossible"},{author:"AlternativeThinker",content:"Can also be solved by interleaving most frequent character with others"}]},{problemName:"Task Scheduler",author:"Greedy Interval Calculator",explanation:"Calculate minimum intervals by considering the most frequent task and filling idle slots with other tasks.",solution:`class Solution {
public:
    int leastInterval(vector<char>& tasks, int n) {
        // Count task frequencies
        vector<int> freq(26, 0);
        for (char task : tasks) {
            freq[task - 'A']++;
        }
        
        // Find maximum frequency and count of tasks with max frequency
        int maxFreq = *max_element(freq.begin(), freq.end());
        int maxCount = 0;
        for (int f : freq) {
            if (f == maxFreq) {
                maxCount++;
            }
        }
        
        // Calculate minimum intervals
        int partCount = maxFreq - 1;
        int partLength = n - (maxCount - 1);
        int emptySlots = partCount * partLength;
        int availableTasks = tasks.size() - maxFreq * maxCount;
        int idles = max(0, emptySlots - availableTasks);
        
        return tasks.size() + idles;
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"AlgorithmExpert",content:"Mathematical approach provides O(n) solution without simulation"},{author:"CodeReviewer42",content:"Efficient calculation using frequency array and mathematical formula"},{author:"EdgeCaseHunter",content:"Handles cases where n=0 and all tasks are same correctly"},{author:"AlternativeThinker",content:"Max-heap simulation approach also works but is less efficient"}]},{problemName:"Find K Pairs with Smallest Sums",author:"Min-Heap Pair Generator",explanation:"Use min-heap to generate pairs in sorted order, starting with all (nums1[i], nums2[0]) pairs and expanding incrementally.",solution:`class Solution {
public:
    vector<vector<int>> kSmallestPairs(vector<int>& nums1, vector<int>& nums2, int k) {
        vector<vector<int>> result;
        if (nums1.empty() || nums2.empty()) return result;
        
        // Min heap: (sum, index_in_nums1, index_in_nums2)
        priority_queue<vector<int>, vector<vector<int>>, greater<vector<int>>> minHeap;
        
        // Push all (nums1[i], nums2[0]) pairs initially
        for (int i = 0; i < nums1.size() && i < k; i++) {
            minHeap.push({nums1[i] + nums2[0], i, 0});
        }
        
        // Extract k smallest pairs
        while (k-- > 0 && !minHeap.empty()) {
            auto top = minHeap.top();
            minHeap.pop();
            
            int i = top[1], j = top[2];
            result.push_back({nums1[i], nums2[j]});
            
            // Push next pair from nums2 if available
            if (j + 1 < nums2.size()) {
                minHeap.push({nums1[i] + nums2[j + 1], i, j + 1});
            }
        }
        
        return result;
    }
};`,notes:"Time: O(k log k), Space: O(k)",comments:[{author:"HeapMaster",content:"Efficient approach that generates pairs on-demand without precomputing all"},{author:"CodeReviewer42",content:"Clean implementation with vector-based min-heap and proper bounds checking"},{author:"EdgeCaseHunter",content:"Handles cases where k is larger than total possible pairs correctly"},{author:"AlternativeThinker",content:"Binary search approach exists but is more complex to implement"}]},{problemName:"Kth Smallest Element in a Sorted Matrix",author:"Min-Heap Matrix Traverser",explanation:"Use min-heap to traverse matrix in sorted order, starting with first column and moving rightwards.",solution:`class Solution {
public:
    int kthSmallest(vector<vector<int>>& matrix, int k) {
        int n = matrix.size();
        
        // Min heap: (value, row, col)
        priority_queue<vector<int>, vector<vector<int>>, greater<vector<int>>> minHeap;
        
        // Push first element of each row
        for (int i = 0; i < n; i++) {
            minHeap.push({matrix[i][0], i, 0});
        }
        
        // Extract k-1 smallest elements
        while (k-- > 1) {
            auto top = minHeap.top();
            minHeap.pop();
            
            int row = top[1], col = top[2];
            
            // Push next element in same row if available
            if (col + 1 < n) {
                minHeap.push({matrix[row][col + 1], row, col + 1});
            }
        }
        
        return minHeap.top()[0];
    }
};`,notes:"Time: O(k log n), Space: O(n)",comments:[{author:"HeapMaster",content:"Min-heap efficiently traverses sorted matrix without full sorting"},{author:"CodeReviewer42",content:"Clean implementation with proper tracking of row and column indices"},{author:"EdgeCaseHunter",content:"Handles k=1 case correctly without unnecessary operations"},{author:"AlternativeThinker",content:"Binary search approach can achieve O(n log(max-min)) time"}]},{problemName:"Find Median from Data Stream",author:"Two-Heap Balance Master",explanation:"Maintain two heaps - max-heap for lower half and min-heap for upper half, balancing to ensure median access in O(1).",solution:`class MedianFinder {
private:
    priority_queue<int> maxHeap; // Lower half (max at top)
    priority_queue<int, vector<int>, greater<int>> minHeap; // Upper half (min at top)
    
public:
    MedianFinder() {}
    
    void addNum(int num) {
        // Always add to maxHeap first, then balance
        maxHeap.push(num);
        
        // Ensure all elements in maxHeap <= all elements in minHeap
        if (!maxHeap.empty() && !minHeap.empty() && maxHeap.top() > minHeap.top()) {
            minHeap.push(maxHeap.top());
            maxHeap.pop();
        }
        
        // Balance sizes: maxHeap can have at most one more element than minHeap
        if (maxHeap.size() > minHeap.size() + 1) {
            minHeap.push(maxHeap.top());
            maxHeap.pop();
        } else if (minHeap.size() > maxHeap.size()) {
            maxHeap.push(minHeap.top());
            minHeap.pop();
        }
    }
    
    double findMedian() {
        if (maxHeap.size() > minHeap.size()) {
            return maxHeap.top();
        } else {
            return (maxHeap.top() + minHeap.top()) / 2.0;
        }
    }
};`,notes:"Time: O(log n) add, O(1) find, Space: O(n)",comments:[{author:"HeapMaster",content:"Two-heap approach is optimal for streaming median finding"},{author:"CodeReviewer42",content:"Clean balancing logic with proper size management"},{author:"EdgeCaseHunter",content:"Handles both even and odd total counts correctly"},{author:"AlternativeThinker",content:"Balanced BST approach also works but is more complex"}]},{problemName:"Sliding Window Median",author:"Two-Heap Window Manager",explanation:"Extend two-heap approach for sliding window by maintaining heaps for current window and handling element removal.",solution:`class Solution {
public:
    vector<double> medianSlidingWindow(vector<int>& nums, int k) {
        vector<double> result;
        multiset<int> window(nums.begin(), nums.begin() + k);
        auto mid = next(window.begin(), k / 2);
        
        for (int i = k; ; i++) {
            // Calculate current median
            if (k % 2 == 0) {
                result.push_back((*mid + *prev(mid)) / 2.0);
            } else {
                result.push_back(*mid);
            }
            
            // Break if at end
            if (i == nums.size()) break;
            
            // Insert new element
            window.insert(nums[i]);
            if (nums[i] < *mid) {
                mid--;
            }
            
            // Remove old element
            if (nums[i - k] <= *mid) {
                mid++;
            }
            window.erase(window.find(nums[i - k]));
        }
        
        return result;
    }
};`,notes:"Time: O(n log k), Space: O(k)",comments:[{author:"AlgorithmExpert",content:"Multiset provides efficient insertion, deletion and median access"},{author:"CodeReviewer42",content:"Elegant iterator management for median tracking"},{author:"EdgeCaseHunter",content:"Handles duplicate values correctly using multiset"},{author:"AlternativeThinker",content:"Two-heap with lazy deletion is also possible but more complex"}]},{problemName:"IPO",author:"Greedy Capital Maximizer",explanation:"Use max-heap for profits and min-heap for capital requirements, greedily selecting most profitable projects within current capital.",solution:`class Solution {
public:
    int findMaximizedCapital(int k, int w, vector<int>& profits, vector<int>& capital) {
        int n = profits.size();
        vector<pair<int, int>> projects;
        
        // Create pairs of (capital, profit)
        for (int i = 0; i < n; i++) {
            projects.push_back({capital[i], profits[i]});
        }
        
        // Sort projects by capital requirement
        sort(projects.begin(), projects.end());
        
        // Max heap for available profits
        priority_queue<int> maxHeap;
        int i = 0;
        
        // Select up to k projects
        while (k--) {
            // Add all projects we can afford with current capital
            while (i < n && projects[i].first <= w) {
                maxHeap.push(projects[i].second);
                i++;
            }
            
            // If no projects available, break
            if (maxHeap.empty()) {
                break;
            }
            
            // Select most profitable project
            w += maxHeap.top();
            maxHeap.pop();
        }
        
        return w;
    }
};`,notes:"Time: O(n log n + k log n), Space: O(n)",comments:[{author:"GreedyExpert",content:"Greedy approach optimally selects most profitable affordable projects"},{author:"CodeReviewer42",content:"Clean separation of capital sorting and profit selection"},{author:"EdgeCaseHunter",content:"Handles case where capital is insufficient for any projects"},{author:"AlternativeThinker",content:"Could optimize with different data structures for very large inputs"}]},{problemName:"Min Stack",author:"Dual Stack Designer",explanation:"Use two stacks - one for regular elements and one to track minimum values. Push/pop from both stacks simultaneously to maintain O(1) min access.",solution:`class MinStack {
private:
    stack<int> mainStack;
    stack<int> minStack;
    
public:
    MinStack() {}
    
    void push(int val) {
        mainStack.push(val);
        if (minStack.empty() || val <= minStack.top()) {
            minStack.push(val);
        } else {
            minStack.push(minStack.top()); // Keep current min
        }
    }
    
    void pop() {
        mainStack.pop();
        minStack.pop();
    }
    
    int top() {
        return mainStack.top();
    }
    
    int getMin() {
        return minStack.top();
    }
};`,notes:"Time: O(1) all operations, Space: O(n)",comments:[{author:"StackMaster",content:"Dual stack approach guarantees O(1) time for all operations including getMin"},{author:"CodeReviewer42",content:"Clean implementation with proper handling of duplicate minimum values"},{author:"EdgeCaseHunter",content:"Handles empty stack cases implicitly through stack's own error handling"},{author:"AlternativeThinker",content:"Could use single stack storing pairs (value, current_min) for same complexity"}]},{problemName:"Implement Queue using Stacks",author:"Two Stack Queue Architect",explanation:"Use two stacks - input stack for enqueue operations and output stack for dequeue operations. Transfer elements when output stack is empty.",solution:`class MyQueue {
private:
    stack<int> input, output;
    
    void transfer() {
        while (!input.empty()) {
            output.push(input.top());
            input.pop();
        }
    }
    
public:
    MyQueue() {}
    
    void push(int x) {
        input.push(x);
    }
    
    int pop() {
        if (output.empty()) {
            transfer();
        }
        int val = output.top();
        output.pop();
        return val;
    }
    
    int peek() {
        if (output.empty()) {
            transfer();
        }
        return output.top();
    }
    
    bool empty() {
        return input.empty() && output.empty();
    }
};`,notes:"Time: O(1) amortized, Space: O(n)",comments:[{author:"StackMaster",content:"Amortized O(1) complexity achieved by transferring elements only when necessary"},{author:"CodeReviewer42",content:"Clean separation with helper function for stack transfer"},{author:"EdgeCaseHunter",content:"Correctly handles all FIFO operations including peek on empty queue"},{author:"AlternativeThinker",content:"Single stack with recursion also possible but uses implicit call stack"}]},{problemName:"Next Greater Element I",author:"Monotonic Stack Solver",explanation:"Use monotonic decreasing stack to find next greater elements for all elements, then map results to subset array.",solution:`class Solution {
public:
    vector<int> nextGreaterElement(vector<int>& nums1, vector<int>& nums2) {
        unordered_map<int, int> nextGreater;
        stack<int> st;
        
        // Find next greater for all elements in nums2
        for (int num : nums2) {
            while (!st.empty() && st.top() < num) {
                nextGreater[st.top()] = num;
                st.pop();
            }
            st.push(num);
        }
        
        // Remaining elements have no next greater
        while (!st.empty()) {
            nextGreater[st.top()] = -1;
            st.pop();
        }
        
        // Build result for nums1
        vector<int> result;
        for (int num : nums1) {
            result.push_back(nextGreater[num]);
        }
        
        return result;
    }
};`,notes:"Time: O(n + m), Space: O(n)",comments:[{author:"StackMaster",content:"Monotonic stack pattern efficiently finds next greater element in O(n) time"},{author:"CodeReviewer42",content:"Clean implementation with hash map for quick lookups"},{author:"EdgeCaseHunter",content:"Handles cases where no greater element exists correctly"},{author:"AlternativeThinker",content:"Brute force O(n*m) solution works but is inefficient for large inputs"}]},{problemName:"Backspace String Compare",author:"Stack String Processor",explanation:"Process strings using stacks to handle backspace characters, then compare resulting strings.",solution:`class Solution {
public:
    bool backspaceCompare(string s, string t) {
        return processString(s) == processString(t);
    }
    
private:
    string processString(string str) {
        stack<char> st;
        for (char c : str) {
            if (c == '#') {
                if (!st.empty()) {
                    st.pop();
                }
            } else {
                st.push(c);
            }
        }
        
        // Build result string from stack
        string result;
        while (!st.empty()) {
            result = st.top() + result;
            st.pop();
        }
        return result;
    }
};`,notes:"Time: O(n + m), Space: O(n + m)",comments:[{author:"StackMaster",content:"Stack naturally handles backspace operations in LIFO order"},{author:"CodeReviewer42",content:"Good separation with helper function to avoid code duplication"},{author:"EdgeCaseHunter",content:"Handles multiple consecutive backspaces and backspaces on empty string"},{author:"AlternativeThinker",content:"Two pointer approach can solve this in O(1) space"}]},{problemName:"Remove All Adjacent Duplicates In String",author:"Stack Duplicate Remover",explanation:"Use stack to remove adjacent duplicates by comparing current character with top of stack.",solution:`class Solution {
public:
    string removeDuplicates(string s) {
        stack<char> st;
        
        for (char c : s) {
            if (!st.empty() && st.top() == c) {
                st.pop(); // Remove duplicate
            } else {
                st.push(c);
            }
        }
        
        // Build result from stack
        string result;
        while (!st.empty()) {
            result = st.top() + result;
            st.pop();
        }
        return result;
    }
};`,notes:"Time: O(n), Space: O(n)",comments:[{author:"StackMaster",content:"Stack is perfect for detecting and removing adjacent duplicates"},{author:"CodeReviewer42",content:"Simple and efficient implementation"},{author:"EdgeCaseHunter",content:"Handles multiple rounds of duplicate removal correctly"},{author:"AlternativeThinker",content:"Can be solved with string as stack for O(1) extra space"}]},{problemName:"Evaluate Reverse Polish Notation",author:"Stack Calculator",explanation:"Use stack to evaluate RPN expressions - push numbers, pop and apply operators when encountering them.",solution:`class Solution {
public:
    int evalRPN(vector<string>& tokens) {
        stack<int> st;
        
        for (string token : tokens) {
            if (token == "+" || token == "-" || token == "*" || token == "/") {
                int b = st.top(); st.pop();
                int a = st.top(); st.pop();
                
                if (token == "+") st.push(a + b);
                else if (token == "-") st.push(a - b);
                else if (token == "*") st.push(a * b);
                else if (token == "/") st.push(a / b);
            } else {
                st.push(stoi(token));
            }
        }
        
        return st.top();
    }
};`,notes:"Time: O(n), Space: O(n)",comments:[{author:"StackMaster",content:"Stack naturally handles postfix notation evaluation"},{author:"CodeReviewer42",content:"Clean implementation with proper operator precedence handling"},{author:"EdgeCaseHunter",content:"Handles negative numbers and division correctly"},{author:"AlternativeThinker",content:"Recursive approach possible but stack is more intuitive"}]},{problemName:"Daily Temperatures",author:"Monotonic Stack Temperature Tracker",explanation:"Use monotonic decreasing stack to track temperatures and calculate days until warmer temperature.",solution:`class Solution {
public:
    vector<int> dailyTemperatures(vector<int>& temperatures) {
        int n = temperatures.size();
        vector<int> result(n, 0);
        stack<int> st; // Stack stores indices
        
        for (int i = 0; i < n; i++) {
            while (!st.empty() && temperatures[st.top()] < temperatures[i]) {
                int idx = st.top();
                st.pop();
                result[idx] = i - idx;
            }
            st.push(i);
        }
        
        return result;
    }
};`,notes:"Time: O(n), Space: O(n)",comments:[{author:"StackMaster",content:"Monotonic stack pattern efficiently finds next warmer day in O(n) time"},{author:"CodeReviewer42",content:"Clean implementation storing indices instead of values"},{author:"EdgeCaseHunter",content:"Handles cases where no warmer day exists (result remains 0)"},{author:"AlternativeThinker",content:"Can be solved from right to left with dynamic programming"}]},{problemName:"Asteroid Collision",author:"Stack Collision Simulator",explanation:"Use stack to simulate asteroid collisions - right-moving asteroids are pushed, left-moving ones cause collisions.",solution:`class Solution {
public:
    vector<int> asteroidCollision(vector<int>& asteroids) {
        stack<int> st;
        
        for (int asteroid : asteroids) {
            bool destroyed = false;
            
            // Handle collisions: current asteroid moving left, top moving right
            while (!st.empty() && asteroid < 0 && st.top() > 0) {
                if (abs(asteroid) > st.top()) {
                    st.pop(); // Destroy top asteroid
                    continue;
                } else if (abs(asteroid) == st.top()) {
                    st.pop(); // Both destroyed
                    destroyed = true;
                    break;
                } else {
                    destroyed = true; // Current asteroid destroyed
                    break;
                }
            }
            
            if (!destroyed) {
                st.push(asteroid);
            }
        }
        
        // Build result from stack
        vector<int> result(st.size());
        for (int i = st.size() - 1; i >= 0; i--) {
            result[i] = st.top();
            st.pop();
        }
        return result;
    }
};`,notes:"Time: O(n), Space: O(n)",comments:[{author:"StackMaster",content:"Stack perfectly models the collision sequence in LIFO order"},{author:"CodeReviewer42",content:"Clear collision handling with proper size comparison"},{author:"EdgeCaseHunter",content:"Correctly handles all collision scenarios including equal size asteroids"},{author:"AlternativeThinker",content:"Vector simulation also possible but stack is more efficient"}]},{problemName:"Remove K Digits",author:"Monotonic Stack Digit Remover",explanation:"Use monotonic increasing stack to remove digits while maintaining smallest number. Remove larger digits from left when possible.",solution:`class Solution {
public:
    string removeKdigits(string num, int k) {
        if (k >= num.length()) return "0";
        
        stack<char> st;
        
        for (char digit : num) {
            while (k > 0 && !st.empty() && st.top() > digit) {
                st.pop();
                k--;
            }
            st.push(digit);
        }
        
        // Remove remaining k digits from end if needed
        while (k > 0) {
            st.pop();
            k--;
        }
        
        // Build result string
        string result;
        while (!st.empty()) {
            result = st.top() + result;
            st.pop();
        }
        
        // Remove leading zeros
        int start = 0;
        while (start < result.length() && result[start] == '0') {
            start++;
        }
        
        return start == result.length() ? "0" : result.substr(start);
    }
};`,notes:"Time: O(n), Space: O(n)",comments:[{author:"StackMaster",content:"Monotonic stack ensures we always remove larger left digits first"},{author:"CodeReviewer42",content:"Clean implementation with proper handling of leading zeros"},{author:"EdgeCaseHunter",content:"Handles edge cases like all zeros and k >= num.length correctly"},{author:"AlternativeThinker",content:"Greedy approach with string manipulation also works"}]},{problemName:"132 Pattern",author:"Monotonic Stack Pattern Finder",explanation:"Use monotonic decreasing stack to track potential '32' patterns while maintaining the minimum value as '1'.",solution:`class Solution {
public:
    bool find132pattern(vector<int>& nums) {
        int n = nums.size();
        if (n < 3) return false;
        
        stack<int> st; // Stack stores potential '2' values
        int third = INT_MIN; // This will be our '2' in '132'
        
        // Traverse from right to left
        for (int i = n - 1; i >= 0; i--) {
            // If current number is less than third, we found '1' in '132'
            if (nums[i] < third) return true;
            
            // Maintain decreasing stack, update third with popped values
            while (!st.empty() && st.top() < nums[i]) {
                third = st.top();
                st.pop();
            }
            
            st.push(nums[i]);
        }
        
        return false;
    }
};`,notes:"Time: O(n), Space: O(n)",comments:[{author:"StackMaster",content:"Right-to-left traversal with monotonic stack efficiently finds 132 pattern"},{author:"CodeReviewer42",content:"Elegant solution using third variable to track potential '2'"},{author:"EdgeCaseHunter",content:"Handles duplicate values and all edge cases correctly"},{author:"AlternativeThinker",content:"Precomputation of min array also solves this problem"}]},{problemName:"Next Greater Element II",author:"Circular Array Stack Solver",explanation:"Handle circular array by traversing twice the length and using modulo indexing with monotonic stack.",solution:`class Solution {
public:
    vector<int> nextGreaterElements(vector<int>& nums) {
        int n = nums.size();
        vector<int> result(n, -1);
        stack<int> st; // Stack stores indices
        
        // Traverse circular array (twice the length)
        for (int i = 0; i < 2 * n; i++) {
            int idx = i % n;
            
            while (!st.empty() && nums[st.top()] < nums[idx]) {
                result[st.top()] = nums[idx];
                st.pop();
            }
            
            // Only push during first traversal
            if (i < n) {
                st.push(idx);
            }
        }
        
        return result;
    }
};`,notes:"Time: O(n), Space: O(n)",comments:[{author:"StackMaster",content:"Circular array handled elegantly by traversing twice with modulo"},{author:"CodeReviewer42",content:"Clean implementation with proper index management"},{author:"EdgeCaseHunter",content:"Handles cases where no greater element exists in circular array"},{author:"AlternativeThinker",content:"Can concatenate array with itself for simpler indexing"}]},{problemName:"Validate Stack Sequences",author:"Stack Sequence Simulator",explanation:"Simulate push and pop operations using a stack to verify if given sequences are valid.",solution:`class Solution {
public:
    bool validateStackSequences(vector<int>& pushed, vector<int>& popped) {
        stack<int> st;
        int popIndex = 0;
        
        for (int num : pushed) {
            st.push(num);
            
            // Try to pop as many as possible
            while (!st.empty() && popIndex < popped.size() && st.top() == popped[popIndex]) {
                st.pop();
                popIndex++;
            }
        }
        
        return popIndex == popped.size();
    }
};`,notes:"Time: O(n), Space: O(n)",comments:[{author:"StackMaster",content:"Direct simulation is the most intuitive approach for this problem"},{author:"CodeReviewer42",content:"Clean implementation with efficient popping logic"},{author:"EdgeCaseHunter",content:"Handles all valid and invalid sequence combinations correctly"},{author:"AlternativeThinker",content:"Can be solved with O(1) space by using pushed array as stack"}]},{problemName:"Minimum Remove to Make Valid Parentheses",author:"Stack Parentheses Balancer",explanation:"Use stack to track unmatched parentheses and mark indices for removal.",solution:`class Solution {
public:
    string minRemoveToMakeValid(string s) {
        stack<int> st; // Stack stores indices of '('
        unordered_set<int> toRemove;
        
        // First pass: find unmatched parentheses
        for (int i = 0; i < s.length(); i++) {
            if (s[i] == '(') {
                st.push(i);
            } else if (s[i] == ')') {
                if (st.empty()) {
                    toRemove.insert(i); // Unmatched ')'
                } else {
                    st.pop(); // Matched pair
                }
            }
        }
        
        // Any remaining '(' in stack are unmatched
        while (!st.empty()) {
            toRemove.insert(st.top());
            st.pop();
        }
        
        // Build result string
        string result;
        for (int i = 0; i < s.length(); i++) {
            if (toRemove.find(i) == toRemove.end()) {
                result += s[i];
            }
        }
        
        return result;
    }
};`,notes:"Time: O(n), Space: O(n)",comments:[{author:"StackMaster",content:"Stack efficiently tracks unmatched parentheses indices"},{author:"CodeReviewer42",content:"Clean two-pass approach with set for removal tracking"},{author:"EdgeCaseHunter",content:"Handles all edge cases including strings with no parentheses"},{author:"AlternativeThinker",content:"Two-pointer approach can solve this in O(1) extra space"}]},{problemName:"Basic Calculator",author:"Stack Expression Evaluator",explanation:"Use stack to handle parentheses and operators with proper precedence, evaluating expression from left to right.",solution:`class Solution {
public:
    int calculate(string s) {
        stack<int> st;
        int result = 0;
        int num = 0;
        int sign = 1; // 1 for positive, -1 for negative
        
        for (char c : s) {
            if (isdigit(c)) {
                num = num * 10 + (c - '0');
            } else if (c == '+') {
                result += sign * num;
                num = 0;
                sign = 1;
            } else if (c == '-') {
                result += sign * num;
                num = 0;
                sign = -1;
            } else if (c == '(') {
                // Push current result and sign onto stack
                st.push(result);
                st.push(sign);
                // Reset for new sub-expression
                result = 0;
                sign = 1;
            } else if (c == ')') {
                // Complete current sub-expression
                result += sign * num;
                num = 0;
                // Apply sign from stack
                result *= st.top(); st.pop();
                // Add to previous result
                result += st.top(); st.pop();
            }
        }
        
        // Add last number
        result += sign * num;
        return result;
    }
};`,notes:"Time: O(n), Space: O(n)",comments:[{author:"StackMaster",content:"Stack handles parentheses nesting and sign propagation elegantly"},{author:"CodeReviewer42",content:"Clean state management with result, num, and sign variables"},{author:"EdgeCaseHunter",content:"Handles negative numbers, nested parentheses, and spaces correctly"},{author:"AlternativeThinker",content:"Recursive descent parser also works but is more complex"}]},{problemName:"Basic Calculator III",author:"Advanced Stack Calculator",explanation:"Extend basic calculator to handle multiplication and division with proper operator precedence using two stacks.",solution:`class Solution {
public:
    int calculate(string s) {
        stack<int> nums;
        stack<char> ops;
        int num = 0;
        
        for (int i = 0; i < s.length(); i++) {
            char c = s[i];
            
            if (isdigit(c)) {
                num = num * 10 + (c - '0');
            } else if (c == '(') {
                ops.push(c);
            } else if (c == ')') {
                // Evaluate until matching '('
                while (!ops.empty() && ops.top() != '(') {
                    num = evaluate(nums, ops, num);
                }
                ops.pop(); // Remove '('
            } else if (c == '+' || c == '-' || c == '*' || c == '/') {
                // Evaluate higher precedence operations first
                while (!ops.empty() && precedence(ops.top()) >= precedence(c)) {
                    num = evaluate(nums, ops, num);
                }
                ops.push(c);
                nums.push(num);
                num = 0;
            }
        }
        
        // Evaluate remaining operations
        while (!ops.empty()) {
            num = evaluate(nums, ops, num);
        }
        
        return num;
    }
    
private:
    int precedence(char op) {
        if (op == '+' || op == '-') return 1;
        if (op == '*' || op == '/') return 2;
        return 0;
    }
    
    int evaluate(stack<int>& nums, stack<char>& ops, int num) {
        int b = num;
        int a = nums.top(); nums.pop();
        char op = ops.top(); ops.pop();
        
        switch (op) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '/': return a / b;
        }
        return 0;
    }
};`,notes:"Time: O(n), Space: O(n)",comments:[{author:"StackMaster",content:"Dual stack approach handles operator precedence and parentheses correctly"},{author:"CodeReviewer42",content:"Clean separation with helper functions for precedence and evaluation"},{author:"EdgeCaseHunter",content:"Handles all edge cases including negative results and division by constraints"},{author:"AlternativeThinker",content:"Shunting yard algorithm is another valid approach"}]},{problemName:"Longest Valid Parentheses",author:"Stack Parentheses Tracker",explanation:"Use stack to track indices of unmatched parentheses and calculate longest valid substring between invalid positions.",solution:`class Solution {
public:
    int longestValidParentheses(string s) {
        stack<int> st;
        st.push(-1); // Base for length calculation
        int maxLength = 0;
        
        for (int i = 0; i < s.length(); i++) {
            if (s[i] == '(') {
                st.push(i);
            } else {
                st.pop();
                if (st.empty()) {
                    st.push(i); // New base
                } else {
                    maxLength = max(maxLength, i - st.top());
                }
            }
        }
        
        return maxLength;
    }
};`,notes:"Time: O(n), Space: O(n)",comments:[{author:"StackMaster",content:"Stack with base index elegantly calculates valid parentheses length"},{author:"CodeReviewer42",content:"Clean implementation with smart use of -1 as initial base"},{author:"EdgeCaseHunter",content:"Handles all patterns including nested and consecutive valid parentheses"},{author:"AlternativeThinker",content:"Dynamic programming approach also solves this in O(n) time"}]},{problemName:"Intersection of Two Arrays",author:"Set Intersection Finder",explanation:"Use unordered_set to store elements from first array, then check which elements from second array exist in the set.",solution:`class Solution {
public:
    vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {
        unordered_set<int> set1(nums1.begin(), nums1.end());
        unordered_set<int> resultSet;
        
        for (int num : nums2) {
            if (set1.find(num) != set1.end()) {
                resultSet.insert(num);
            }
        }
        
        return vector<int>(resultSet.begin(), resultSet.end());
    }
};`,notes:"Time: O(n + m), Space: O(min(n, m))",comments:[{author:"HashMaster",content:"Set operations provide optimal O(1) lookups for intersection checking"},{author:"CodeReviewer42",content:"Clean implementation using set constructors and iterators"},{author:"EdgeCaseHunter",content:"Handles duplicates correctly by using set for result"},{author:"AlternativeThinker",content:"Could sort both arrays and use two pointers for O(1) space"}]},{problemName:"Happy Number",author:"Cycle Detection with HashSet",explanation:"Use unordered_set to detect cycles while repeatedly calculating sum of squares of digits. If we reach 1, it's happy.",solution:`class Solution {
public:
    bool isHappy(int n) {
        unordered_set<int> seen;
        
        while (n != 1 && seen.find(n) == seen.end()) {
            seen.insert(n);
            n = getNext(n);
        }
        
        return n == 1;
    }
    
private:
    int getNext(int n) {
        int sum = 0;
        while (n > 0) {
            int digit = n % 10;
            sum += digit * digit;
            n /= 10;
        }
        return sum;
    }
};`,notes:"Time: O(log n), Space: O(log n)",comments:[{author:"HashMaster",content:"HashSet perfectly detects cycles in the digit square sum sequence"},{author:"CodeReviewer42",content:"Clean separation with helper function for digit sum calculation"},{author:"EdgeCaseHunter",content:"Correctly handles all numbers including those that enter infinite loops"},{author:"AlternativeThinker",content:"Floyd's cycle detection can solve this with O(1) space"}]},{problemName:"Isomorphic Strings",author:"Bi-directional Mapping Checker",explanation:"Use two unordered_maps to verify character mappings work both ways (s -> t and t -> s) without conflicts.",solution:`class Solution {
public:
    bool isIsomorphic(string s, string t) {
        if (s.length() != t.length()) return false;
        
        unordered_map<char, char> sToT;
        unordered_map<char, char> tToS;
        
        for (int i = 0; i < s.length(); i++) {
            char charS = s[i];
            char charT = t[i];
            
            // Check mapping from s to t
            if (sToT.find(charS) != sToT.end()) {
                if (sToT[charS] != charT) return false;
            } else {
                sToT[charS] = charT;
            }
            
            // Check mapping from t to s
            if (tToS.find(charT) != tToS.end()) {
                if (tToS[charT] != charS) return false;
            } else {
                tToS[charT] = charS;
            }
        }
        
        return true;
    }
};`,notes:"Time: O(n), Space: O(1) since fixed character set",comments:[{author:"HashMaster",content:"Dual mapping ensures isomorphism works in both directions"},{author:"CodeReviewer42",content:"Clean implementation with early termination on mapping conflicts"},{author:"EdgeCaseHunter",content:"Handles all edge cases including empty strings and many-to-one mappings"},{author:"AlternativeThinker",content:"Can use array indexing for better performance with fixed character set"}]},{problemName:"Word Pattern",author:"Bijective Mapping Validator",explanation:"Similar to isomorphic strings but with words instead of characters. Use two unordered_maps to ensure pattern-character to word mapping is bijective.",solution:`class Solution {
public:
    bool wordPattern(string pattern, string s) {
        unordered_map<char, string> charToWord;
        unordered_map<string, char> wordToChar;
        
        vector<string> words = split(s);
        if (pattern.length() != words.size()) return false;
        
        for (int i = 0; i < pattern.length(); i++) {
            char c = pattern[i];
            string word = words[i];
            
            // Check char to word mapping
            if (charToWord.find(c) != charToWord.end()) {
                if (charToWord[c] != word) return false;
            } else {
                charToWord[c] = word;
            }
            
            // Check word to char mapping
            if (wordToChar.find(word) != wordToChar.end()) {
                if (wordToChar[word] != c) return false;
            } else {
                wordToChar[word] = c;
            }
        }
        
        return true;
    }
    
private:
    vector<string> split(string s) {
        vector<string> words;
        stringstream ss(s);
        string word;
        while (getline(ss, word, ' ')) {
            words.push_back(word);
        }
        return words;
    }
};`,notes:"Time: O(n), Space: O(n)",comments:[{author:"HashMaster",content:"Extends isomorphic strings concept to handle word mappings"},{author:"CodeReviewer42",content:"Good string splitting implementation with stringstream"},{author:"EdgeCaseHunter",content:"Handles cases where pattern and word count don't match correctly"},{author:"AlternativeThinker",content:"Could use istringstream for more efficient string splitting"}]},{problemName:"Longest Consecutive Sequence",author:"HashSet Sequence Finder",explanation:"Store all numbers in unordered_set, then for each number check if it's the start of a sequence (no num-1 exists), then expand rightwards.",solution:`class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        unordered_set<int> numSet(nums.begin(), nums.end());
        int longest = 0;
        
        for (int num : numSet) {
            // Check if this is the start of a sequence
            if (numSet.find(num - 1) == numSet.end()) {
                int currentNum = num;
                int currentStreak = 1;
                
                // Expand the sequence
                while (numSet.find(currentNum + 1) != numSet.end()) {
                    currentNum++;
                    currentStreak++;
                }
                
                longest = max(longest, currentStreak);
            }
        }
        
        return longest;
    }
};`,notes:"Time: O(n), Space: O(n)",comments:[{author:"HashMaster",content:"Only checking sequence starts avoids O(n²) complexity"},{author:"CodeReviewer42",content:"Elegant solution with O(n) average time complexity"},{author:"EdgeCaseHunter",content:"Handles empty array, single element, and duplicate values correctly"},{author:"AlternativeThinker",content:"Sorting approach takes O(n log n) time but O(1) space"}]},{problemName:"Insert Delete GetRandom O(1)",author:"Hybrid Vector-HashMap Designer",explanation:"Use vector for random access and unordered_map to store value-index mappings for O(1) operations.",solution:`class RandomizedSet {
private:
    vector<int> values;
    unordered_map<int, int> valueToIndex; // value -> index in values vector
    
public:
    RandomizedSet() {}
    
    bool insert(int val) {
        if (valueToIndex.find(val) != valueToIndex.end()) {
            return false;
        }
        
        values.push_back(val);
        valueToIndex[val] = values.size() - 1;
        return true;
    }
    
    bool remove(int val) {
        if (valueToIndex.find(val) == valueToIndex.end()) {
            return false;
        }
        
        // Move last element to deleted position
        int index = valueToIndex[val];
        int lastVal = values.back();
        
        values[index] = lastVal;
        valueToIndex[lastVal] = index;
        
        // Remove the element
        values.pop_back();
        valueToIndex.erase(val);
        
        return true;
    }
    
    int getRandom() {
        int randomIndex = rand() % values.size();
        return values[randomIndex];
    }
};`,notes:"Time: O(1) all operations, Space: O(n)",comments:[{author:"HashMaster",content:"Vector + HashMap hybrid achieves O(1) for all required operations"},{author:"CodeReviewer42",content:"Smart removal by swapping with last element maintains O(1) time"},{author:"EdgeCaseHunter",content:"Handles all edge cases including removal of single element"},{author:"AlternativeThinker",content:"Could use reservoir sampling for true O(1) getRandom without vector"}]},{problemName:"Design Underground System",author:"Multi-HashMap System Designer",explanation:"Use two unordered_maps - one for active check-ins and one for tracking travel times between stations.",solution:`class UndergroundSystem {
private:
    // id -> {stationName, checkInTime}
    unordered_map<int, pair<string, int>> checkIns;
    
    // route -> {totalTime, count}
    unordered_map<string, pair<int, int>> travelTimes;
    
    string getRoute(string startStation, string endStation) {
        return startStation + "->" + endStation;
    }
    
public:
    UndergroundSystem() {}
    
    void checkIn(int id, string stationName, int t) {
        checkIns[id] = {stationName, t};
    }
    
    void checkOut(int id, string endStation, int t) {
        auto [startStation, checkInTime] = checkIns[id];
        string route = getRoute(startStation, endStation);
        int travelTime = t - checkInTime;
        
        // Update travel times
        travelTimes[route].first += travelTime;
        travelTimes[route].second++;
        
        // Remove check-in record
        checkIns.erase(id);
    }
    
    double getAverageTime(string startStation, string endStation) {
        string route = getRoute(startStation, endStation);
        auto [totalTime, count] = travelTimes[route];
        return (double)totalTime / count;
    }
};`,notes:"Time: O(1) all operations, Space: O(n + m) where n is active trips, m is unique routes",comments:[{author:"HashMaster",content:"Multiple specialized HashMaps efficiently handle different aspects of the system"},{author:"CodeReviewer42",content:"Clean design with helper function for route key generation"},{author:"EdgeCaseHunter",content:"Handles concurrent check-ins/outs and calculates averages correctly"},{author:"AlternativeThinker",content:"Could use nested HashMap for station pairs for faster lookups"}]},{problemName:"Find Duplicate File in System",author:"Content-Based File Grouper",explanation:"Use unordered_map to group files by their content, then extract groups with multiple files as duplicates.",solution:`class Solution {
public:
    vector<vector<string>> findDuplicate(vector<string>& paths) {
        unordered_map<string, vector<string>> contentToFiles;
        
        for (string path : paths) {
            stringstream ss(path);
            string directory;
            getline(ss, directory, ' ');
            
            string fileInfo;
            while (getline(ss, fileInfo, ' ')) {
                // Extract filename and content
                int openParen = fileInfo.find('(');
                int closeParen = fileInfo.find(')');
                
                string filename = fileInfo.substr(0, openParen);
                string content = fileInfo.substr(openParen + 1, closeParen - openParen - 1);
                
                string fullPath = directory + '/' + filename;
                contentToFiles[content].push_back(fullPath);
            }
        }
        
        // Extract groups with duplicates
        vector<vector<string>> result;
        for (auto& [content, files] : contentToFiles) {
            if (files.size() > 1) {
                result.push_back(files);
            }
        }
        
        return result;
    }
};`,notes:"Time: O(n * m) where n is paths, m is files per path, Space: O(n)",comments:[{author:"HashMaster",content:"HashMap naturally groups files by content for duplicate detection"},{author:"CodeReviewer42",content:"Good string parsing with stringstream and substr operations"},{author:"EdgeCaseHunter",content:"Handles edge cases like empty directories and files without content"},{author:"AlternativeThinker",content:"Could use regex for more robust file parsing"}]},{problemName:"Brick Wall",author:"Edge Frequency Counter",explanation:"Use unordered_map to count how many bricks end at each position, then find position with maximum edges to minimize crosses.",solution:`class Solution {
public:
    int leastBricks(vector<vector<int>>& wall) {
        unordered_map<int, int> edgeCount;
        int maxEdges = 0;
        
        for (auto& row : wall) {
            int position = 0;
            // Don't include the last edge (end of wall)
            for (int i = 0; i < row.size() - 1; i++) {
                position += row[i];
                edgeCount[position]++;
                maxEdges = max(maxEdges, edgeCount[position]);
            }
        }
        
        // Minimum crosses = total rows - maximum aligned edges
        return wall.size() - maxEdges;
    }
};`,notes:"Time: O(n * m), Space: O(n)",comments:[{author:"HashMaster",content:"Counting edge positions transforms problem into frequency maximization"},{author:"CodeReviewer42",content:"Elegant solution with clear mathematical insight"},{author:"EdgeCaseHunter",content:"Correctly handles cases where no edges align (all crosses)"},{author:"AlternativeThinker",content:"Priority queue approach also works but is less efficient"}]},{problemName:"Contiguous Array",author:"Prefix Sum with HashMap",explanation:"Treat 0 as -1 and 1 as +1, use HashMap to store first occurrence of prefix sums to find longest subarray with equal 0s and 1s.",solution:`class Solution {
public:
    int findMaxLength(vector<int>& nums) {
        unordered_map<int, int> prefixSumIndex;
        prefixSumIndex[0] = -1; // Initial state: sum 0 at index -1
        
        int maxLength = 0;
        int sum = 0;
        
        for (int i = 0; i < nums.size(); i++) {
            // Treat 0 as -1, 1 as +1
            sum += (nums[i] == 0) ? -1 : 1;
            
            if (prefixSumIndex.find(sum) != prefixSumIndex.end()) {
                // Found matching prefix sum
                maxLength = max(maxLength, i - prefixSumIndex[sum]);
            } else {
                // Store first occurrence of this prefix sum
                prefixSumIndex[sum] = i;
            }
        }
        
        return maxLength;
    }
};`,notes:"Time: O(n), Space: O(n)",comments:[{author:"HashMaster",content:"Prefix sum + HashMap pattern efficiently finds subarrays with target sum"},{author:"CodeReviewer42",content:"Smart encoding of 0 as -1 transforms problem into sum zero subarray"},{author:"EdgeCaseHunter",content:"Handles all cases including arrays starting with balanced subarray"},{author:"AlternativeThinker",content:"Sliding window doesn't work here due to negative numbers"}]},{problemName:"Find All Duplicates in an Array",author:"In-Place Marker",explanation:"Use the array itself as a HashMap by marking visited numbers negative. When encountering a negative index, we found a duplicate.",solution:`class Solution {
public:
    vector<int> findDuplicates(vector<int>& nums) {
        vector<int> duplicates;
        
        for (int i = 0; i < nums.size(); i++) {
            int index = abs(nums[i]) - 1; // Convert to 0-based index
            
            if (nums[index] < 0) {
                // Already visited, this is a duplicate
                duplicates.push_back(index + 1);
            } else {
                // Mark as visited by making it negative
                nums[index] = -nums[index];
            }
        }
        
        return duplicates;
    }
};`,notes:"Time: O(n), Space: O(1) excluding output",comments:[{author:"HashMaster",content:"In-place marking achieves O(1) space by using input array as HashMap"},{author:"CodeReviewer42",content:"Elegant solution with absolute value to handle already marked elements"},{author:"EdgeCaseHunter",content:"Handles multiple duplicates and preserves original array values conceptually"},{author:"AlternativeThinker",content:"Could use swap-based approach to put numbers in their correct positions"}]},{problemName:"Encode and Decode TinyURL",author:"Bijective URL Mapper",explanation:"Use two unordered_maps to store encoding (long->short) and decoding (short->long) mappings with random code generation.",solution:`class Solution {
private:
    unordered_map<string, string> longToShort;
    unordered_map<string, string> shortToLong;
    string characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    string baseURL = "http://tinyurl.com/";
    
    string generateCode() {
        string code;
        for (int i = 0; i < 6; i++) {
            code += characters[rand() % characters.length()];
        }
        return code;
    }
    
public:
    // Encodes a URL to a shortened URL.
    string encode(string longUrl) {
        if (longToShort.find(longUrl) != longToShort.end()) {
            return baseURL + longToShort[longUrl];
        }
        
        string code = generateCode();
        // Ensure unique code (very low collision probability with 62^6 combinations)
        while (shortToLong.find(code) != shortToLong.end()) {
            code = generateCode();
        }
        
        longToShort[longUrl] = code;
        shortToLong[code] = longUrl;
        
        return baseURL + code;
    }
    
    // Decodes a shortened URL to its original URL.
    string decode(string shortUrl) {
        string code = shortUrl.substr(baseURL.length());
        return shortToLong[code];
    }
};`,notes:"Time: O(1) average, Space: O(n)",comments:[{author:"HashMaster",content:"Dual HashMap design provides O(1) encode/decode operations"},{author:"CodeReviewer42",content:"Good random code generation with collision handling"},{author:"EdgeCaseHunter",content:"Handles duplicate encoding requests by returning existing short URL"},{author:"AlternativeThinker",content:"Could use counter-based approach for deterministic URLs"}]},{problemName:"Sudoku Solver",author:"Backtracking with HashSets",explanation:"Use arrays to track used numbers in rows, columns, and boxes, then backtrack to solve the puzzle.",solution:`class Solution {
public:
    void solveSudoku(vector<vector<char>>& board) {
        // Track used numbers
        bool rows[9][9] = {false};
        bool cols[9][9] = {false};
        bool boxes[9][9] = {false};
        
        // Initialize tracking arrays
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                if (board[i][j] != '.') {
                    int num = board[i][j] - '1';
                    int boxIndex = (i / 3) * 3 + (j / 3);
                    rows[i][num] = true;
                    cols[j][num] = true;
                    boxes[boxIndex][num] = true;
                }
            }
        }
        
        backtrack(board, rows, cols, boxes, 0, 0);
    }
    
private:
    bool backtrack(vector<vector<char>>& board, bool rows[9][9], bool cols[9][9], bool boxes[9][9], int i, int j) {
        if (i == 9) return true; // Solved
        if (j == 9) return backtrack(board, rows, cols, boxes, i + 1, 0); // Next row
        if (board[i][j] != '.') return backtrack(board, rows, cols, boxes, i, j + 1); // Skip filled cell
        
        int boxIndex = (i / 3) * 3 + (j / 3);
        
        for (char c = '1'; c <= '9'; c++) {
            int num = c - '1';
            
            if (!rows[i][num] && !cols[j][num] && !boxes[boxIndex][num]) {
                // Place number
                board[i][j] = c;
                rows[i][num] = true;
                cols[j][num] = true;
                boxes[boxIndex][num] = true;
                
                // Recursively solve
                if (backtrack(board, rows, cols, boxes, i, j + 1)) {
                    return true;
                }
                
                // Backtrack
                board[i][j] = '.';
                rows[i][num] = false;
                cols[j][num] = false;
                boxes[boxIndex][num] = false;
            }
        }
        
        return false;
    }
};`,notes:"Time: O(9^(n²)) worst case, but much faster with pruning, Space: O(1)",comments:[{author:"HashMaster",content:"Boolean arrays serve as efficient HashSets for tracking used numbers"},{author:"CodeReviewer42",content:"Clean backtracking implementation with proper state management"},{author:"EdgeCaseHunter",content:"Handles all valid Sudoku puzzles including the hardest ones"},{author:"AlternativeThinker",content:"Could add more heuristics like most constrained variable first"}]},{problemName:"Word Squares",author:"Trie-Backed Square Builder",explanation:"Use Trie to efficiently find words with specific prefixes, then backtrack to build word squares row by row.",solution:`class Solution {
private:
    struct TrieNode {
        vector<string> words;
        TrieNode* children[26];
        
        TrieNode() {
            memset(children, 0, sizeof(children));
        }
    };
    
    TrieNode* buildTrie(vector<string>& words) {
        TrieNode* root = new TrieNode();
        
        for (string word : words) {
            TrieNode* node = root;
            for (char c : word) {
                int index = c - 'a';
                if (!node->children[index]) {
                    node->children[index] = new TrieNode();
                }
                node = node->children[index];
                node->words.push_back(word);
            }
        }
        
        return root;
    }
    
    vector<string> getWordsWithPrefix(TrieNode* root, string prefix) {
        TrieNode* node = root;
        for (char c : prefix) {
            int index = c - 'a';
            if (!node->children[index]) {
                return {};
            }
            node = node->children[index];
        }
        return node->words;
    }
    
    void backtrack(vector<string>& square, TrieNode* root, vector<vector<string>>& result, int level, int n) {
        if (level == n) {
            result.push_back(square);
            return;
        }
        
        // Build prefix for current level
        string prefix;
        for (int i = 0; i < level; i++) {
            prefix += square[i][level];
        }
        
        // Get candidate words for this prefix
        vector<string> candidates = getWordsWithPrefix(root, prefix);
        
        for (string candidate : candidates) {
            square[level] = candidate;
            backtrack(square, root, result, level + 1, n);
        }
    }
    
public:
    vector<vector<string>> wordSquares(vector<string>& words) {
        if (words.empty()) return {};
        
        int n = words[0].size();
        TrieNode* root = buildTrie(words);
        
        vector<vector<string>> result;
        vector<string> square(n);
        
        for (string word : words) {
            square[0] = word;
            backtrack(square, root, result, 1, n);
        }
        
        return result;
    }
};`,notes:"Time: O(n * 26^l) where l is word length, Space: O(n * l)",comments:[{author:"HashMaster",content:"Trie provides efficient prefix searching for building word squares"},{author:"CodeReviewer42",content:"Well-structured with separate Trie implementation and backtracking"},{author:"EdgeCaseHunter",content:"Handles cases where no word squares can be formed"},{author:"AlternativeThinker",content:"Could use HashMap of prefixes to words for simpler implementation"}]},{problemName:"Search in a Binary Search Tree",author:"BST Search Specialist",explanation:"Leverage BST property to recursively search - go left if target is smaller, right if larger, return node when found.",solution:`/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    TreeNode* searchBST(TreeNode* root, int val) {
        if (root == nullptr || root->val == val) {
            return root;
        }
        
        if (val < root->val) {
            return searchBST(root->left, val);
        } else {
            return searchBST(root->right, val);
        }
    }
};`,notes:"Time: O(h) where h is tree height, Space: O(h) for recursion stack",comments:[{author:"TreeMaster",content:"Classic BST search leveraging the binary search tree property for efficient lookup"},{author:"CodeReviewer42",content:"Clean recursive implementation with proper base cases"},{author:"EdgeCaseHunter",content:"Handles cases where value doesn't exist by returning nullptr"},{author:"AlternativeThinker",content:"Iterative approach would use O(1) space and be more efficient for large trees"}]},{problemName:"Insert into a Binary Search Tree",author:"BST Insertion Expert",explanation:"Traverse the tree to find the correct insertion position based on BST property, then create new node at leaf position.",solution:`class Solution {
public:
    TreeNode* insertIntoBST(TreeNode* root, int val) {
        if (root == nullptr) {
            return new TreeNode(val);
        }
        
        if (val < root->val) {
            root->left = insertIntoBST(root->left, val);
        } else {
            root->right = insertIntoBST(root->right, val);
        }
        
        return root;
    }
};`,notes:"Time: O(h) where h is tree height, Space: O(h) for recursion stack",comments:[{author:"TreeMaster",content:"Maintains BST property by always inserting at correct leaf position"},{author:"CodeReviewer42",content:"Elegant recursive solution that properly updates child pointers"},{author:"EdgeCaseHunter",content:"Handles empty tree case by creating new root node"},{author:"AlternativeThinker",content:"Iterative approach avoids recursion stack overhead"}]},{problemName:"Delete Node in a BST",author:"BST Deletion Strategist",explanation:"Handle three cases: node with no children (simple delete), one child (replace with child), two children (replace with inorder successor).",solution:`class Solution {
public:
    TreeNode* deleteNode(TreeNode* root, int key) {
        if (root == nullptr) return nullptr;
        
        if (key < root->val) {
            root->left = deleteNode(root->left, key);
        } else if (key > root->val) {
            root->right = deleteNode(root->right, key);
        } else {
            // Node to delete found
            if (root->left == nullptr) {
                return root->right;
            } else if (root->right == nullptr) {
                return root->left;
            } else {
                // Node with two children: replace with inorder successor
                TreeNode* successor = findMin(root->right);
                root->val = successor->val;
                root->right = deleteNode(root->right, successor->val);
            }
        }
        return root;
    }
    
private:
    TreeNode* findMin(TreeNode* node) {
        while (node->left != nullptr) {
            node = node->left;
        }
        return node;
    }
};`,notes:"Time: O(h) where h is tree height, Space: O(h) for recursion stack",comments:[{author:"TreeMaster",content:"Properly handles all three deletion cases while maintaining BST properties"},{author:"CodeReviewer42",content:"Clean implementation with helper function for finding minimum value"},{author:"EdgeCaseHunter",content:"Correctly handles deletion of root node and nodes with two children"},{author:"AlternativeThinker",content:"Could use predecessor instead of successor for two-child case"}]},{problemName:"Lowest Common Ancestor of a Binary Search Tree",author:"BST LCA Finder",explanation:"Use BST property - LCA is the node where p and q split into different subtrees, or one of them equals current node.",solution:`class Solution {
public:
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        if (root == nullptr) return nullptr;
        
        // If both are smaller, LCA is in left subtree
        if (p->val < root->val && q->val < root->val) {
            return lowestCommonAncestor(root->left, p, q);
        }
        // If both are larger, LCA is in right subtree
        else if (p->val > root->val && q->val > root->val) {
            return lowestCommonAncestor(root->right, p, q);
        }
        // Current node is LCA (p and q split, or one equals root)
        else {
            return root;
        }
    }
};`,notes:"Time: O(h) where h is tree height, Space: O(h) for recursion stack",comments:[{author:"TreeMaster",content:"Efficiently uses BST property to find LCA without searching entire tree"},{author:"CodeReviewer42",content:"Clean recursive solution with clear condition checks"},{author:"EdgeCaseHunter",content:"Handles cases where one node is ancestor of the other correctly"},{author:"AlternativeThinker",content:"Iterative approach uses O(1) space and is more efficient"}]},{problemName:"Binary Search Tree Iterator",author:"Controlled Inorder Traversal",explanation:"Use stack to simulate controlled inorder traversal. Store leftmost path initially, then pop and process right subtrees.",solution:`class BSTIterator {
private:
    stack<TreeNode*> st;
    
    void pushLeft(TreeNode* node) {
        while (node != nullptr) {
            st.push(node);
            node = node->left;
        }
    }
    
public:
    BSTIterator(TreeNode* root) {
        pushLeft(root);
    }
    
    int next() {
        TreeNode* node = st.top();
        st.pop();
        
        // Push left path of right subtree
        if (node->right != nullptr) {
            pushLeft(node->right);
        }
        
        return node->val;
    }
    
    bool hasNext() {
        return !st.empty();
    }
};`,notes:"Time: O(1) amortized for next(), O(1) for hasNext(), Space: O(h)",comments:[{author:"TreeMaster",content:"Stack-based approach provides amortized O(1) time complexity for next() operation"},{author:"CodeReviewer42",content:"Clean implementation with helper function for left path pushing"},{author:"EdgeCaseHunter",content:"Handles empty tree and single node cases correctly"},{author:"AlternativeThinker",content:"Morris traversal could achieve O(1) space but modifies tree temporarily"}]},{problemName:"Kth Smallest Element in a BST",author:"Inorder Traversal Counter",explanation:"Perform inorder traversal (which gives sorted order) while counting nodes, return kth element encountered.",solution:`class Solution {
public:
    int kthSmallest(TreeNode* root, int k) {
        stack<TreeNode*> st;
        TreeNode* current = root;
        int count = 0;
        
        while (current != nullptr || !st.empty()) {
            // Go to leftmost node
            while (current != nullptr) {
                st.push(current);
                current = current->left;
            }
            
            // Process node
            current = st.top();
            st.pop();
            count++;
            
            if (count == k) {
                return current->val;
            }
            
            // Move to right subtree
            current = current->right;
        }
        
        return -1; // Should not reach here if k is valid
    }
};`,notes:"Time: O(h + k), Space: O(h)",comments:[{author:"TreeMaster",content:"Iterative inorder traversal efficiently finds kth smallest without processing entire tree"},{author:"CodeReviewer42",content:"Clean iterative implementation with explicit stack"},{author:"EdgeCaseHunter",content:"Handles cases where k is larger than tree size (though constraints prevent this)"},{author:"AlternativeThinker",content:"Recursive approach with global counter is simpler but uses implicit stack"}]},{problemName:"Validate Binary Search Tree",author:"Range-Based Validator",explanation:"Pass valid range (min, max) to each node and recursively validate that all nodes satisfy BST property within their ranges.",solution:`class Solution {
public:
    bool isValidBST(TreeNode* root) {
        return validate(root, LONG_MIN, LONG_MAX);
    }
    
private:
    bool validate(TreeNode* node, long minVal, long maxVal) {
        if (node == nullptr) return true;
        
        // Check current node value is within valid range
        if (node->val <= minVal || node->val >= maxVal) {
            return false;
        }
        
        // Validate left and right subtrees with updated ranges
        return validate(node->left, minVal, node->val) && 
               validate(node->right, node->val, maxVal);
    }
};`,notes:"Time: O(n), Space: O(h)",comments:[{author:"TreeMaster",content:"Range propagation approach efficiently validates BST property in single pass"},{author:"CodeReviewer42",content:"Clean recursive solution with proper range boundary checking"},{author:"EdgeCaseHunter",content:"Handles edge cases like INT_MIN and INT_MAX values correctly using long"},{author:"AlternativeThinker",content:"Inorder traversal approach also works by checking sorted order"}]},{problemName:"Convert Sorted Array to Binary Search Tree",author:"Balanced BST Constructor",explanation:"Use binary search approach - middle element becomes root, recursively build left and right subtrees from left and right halves.",solution:`class Solution {
public:
    TreeNode* sortedArrayToBST(vector<int>& nums) {
        return buildBST(nums, 0, nums.size() - 1);
    }
    
private:
    TreeNode* buildBST(vector<int>& nums, int left, int right) {
        if (left > right) return nullptr;
        
        // Choose middle element as root
        int mid = left + (right - left) / 2;
        TreeNode* root = new TreeNode(nums[mid]);
        
        // Recursively build left and right subtrees
        root->left = buildBST(nums, left, mid - 1);
        root->right = buildBST(nums, mid + 1, right);
        
        return root;
    }
};`,notes:"Time: O(n), Space: O(log n) for recursion stack",comments:[{author:"TreeMaster",content:"Divide and conquer approach guarantees height-balanced BST construction"},{author:"CodeReviewer42",content:"Clean recursive implementation with proper index management"},{author:"EdgeCaseHunter",content:"Handles empty array and single element cases correctly"},{author:"AlternativeThinker",content:"Iterative approach with queue is possible but more complex"}]},{problemName:"Balance a Binary Search Tree",author:"Inorder Reconstruction Specialist",explanation:"Perform inorder traversal to get sorted values, then reconstruct balanced BST using sorted array to BST approach.",solution:`class Solution {
public:
    TreeNode* balanceBST(TreeNode* root) {
        vector<int> values;
        inorderTraversal(root, values);
        return buildBalancedBST(values, 0, values.size() - 1);
    }
    
private:
    void inorderTraversal(TreeNode* node, vector<int>& values) {
        if (node == nullptr) return;
        inorderTraversal(node->left, values);
        values.push_back(node->val);
        inorderTraversal(node->right, values);
    }
    
    TreeNode* buildBalancedBST(vector<int>& values, int left, int right) {
        if (left > right) return nullptr;
        
        int mid = left + (right - left) / 2;
        TreeNode* root = new TreeNode(values[mid]);
        root->left = buildBalancedBST(values, left, mid - 1);
        root->right = buildBalancedBST(values, mid + 1, right);
        
        return root;
    }
};`,notes:"Time: O(n), Space: O(n)",comments:[{author:"TreeMaster",content:"Two-step approach: extract sorted values, then build balanced BST from sorted array"},{author:"CodeReviewer42",content:"Well-structured with separate functions for traversal and construction"},{author:"EdgeCaseHunter",content:"Handles already balanced trees efficiently"},{author:"AlternativeThinker",content:"DSW algorithm can balance in-place but is more complex"}]},{problemName:"Contains Duplicate III",author:"BST with Sliding Window",explanation:"Maintain a balanced BST (using set) of last k elements, use BST operations to check if there exists value within range [nums[i]-t, nums[i]+t].",solution:`class Solution {
public:
    bool containsNearbyAlmostDuplicate(vector<int>& nums, int indexDiff, int valueDiff) {
        set<long> window; // Balanced BST to maintain last indexDiff elements
        
        for (int i = 0; i < nums.size(); i++) {
            long num = nums[i];
            
            // Find successor (smallest element >= num - valueDiff)
            auto successor = window.lower_bound(num - valueDiff);
            if (successor != window.end() && *successor <= num + valueDiff) {
                return true;
            }
            
            window.insert(num);
            
            // Maintain window size of indexDiff
            if (window.size() > indexDiff) {
                window.erase(nums[i - indexDiff]);
            }
        }
        
        return false;
    }
};`,notes:"Time: O(n log k), Space: O(k)",comments:[{author:"TreeMaster",content:"Set provides balanced BST operations for efficient range queries"},{author:"CodeReviewer42",content:"Smart use of lower_bound to find elements within value difference range"},{author:"EdgeCaseHunter",content:"Handles integer overflow by using long type"},{author:"AlternativeThinker",content:"Bucket-based approach can achieve O(n) average time"}]},{problemName:"Swap Nodes in Pairs",author:"Recursive Pair Swapper",explanation:"Recursively swap pairs of nodes by handling the first two nodes, then recursively processing the remaining list.",solution:`/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* swapPairs(ListNode* head) {
        // Base case: empty list or single node
        if (head == nullptr || head->next == nullptr) {
            return head;
        }
        
        // Nodes to be swapped
        ListNode* first = head;
        ListNode* second = head->next;
        
        // Swap the pair
        first->next = swapPairs(second->next);
        second->next = first;
        
        // New head after swapping
        return second;
    }
};`,notes:"Time: O(n), Space: O(n) for recursion stack",comments:[{author:"RecursionMaster",content:"Elegant recursive solution that naturally handles the pair-by-pair swapping"},{author:"CodeReviewer42",content:"Clean pointer manipulation with proper base cases"},{author:"EdgeCaseHunter",content:"Handles lists with odd number of nodes correctly by leaving last node unchanged"},{author:"AlternativeThinker",content:"Iterative approach with dummy node uses O(1) space"}]},{problemName:"Permutations",author:"Backtracking Permutation Generator",explanation:"Use backtracking to generate all permutations by swapping elements and recursively generating permutations for remaining elements.",solution:`class Solution {
public:
    vector<vector<int>> permute(vector<int>& nums) {
        vector<vector<int>> result;
        backtrack(nums, 0, result);
        return result;
    }
    
private:
    void backtrack(vector<int>& nums, int start, vector<vector<int>>& result) {
        if (start == nums.size()) {
            result.push_back(nums);
            return;
        }
        
        for (int i = start; i < nums.size(); i++) {
            // Swap current element with start element
            swap(nums[start], nums[i]);
            
            // Recursively generate permutations for remaining elements
            backtrack(nums, start + 1, result);
            
            // Backtrack - swap back
            swap(nums[start], nums[i]);
        }
    }
};`,notes:"Time: O(n * n!), Space: O(n) for recursion stack",comments:[{author:"RecursionMaster",content:"Classic backtracking approach that generates all permutations by swapping elements in-place"},{author:"CodeReviewer42",content:"Efficient implementation that avoids extra space by modifying input array"},{author:"EdgeCaseHunter",content:"Handles duplicate elements correctly (though this version works for unique elements)"},{author:"AlternativeThinker",content:"DFS with visited array approach also works and is more intuitive for some"}]},{problemName:"Subsets",author:"Backtracking Subset Builder",explanation:"Generate all subsets using backtracking - at each step, either include or exclude the current element.",solution:`class Solution {
public:
    vector<vector<int>> subsets(vector<int>& nums) {
        vector<vector<int>> result;
        vector<int> current;
        backtrack(nums, 0, current, result);
        return result;
    }
    
private:
    void backtrack(vector<int>& nums, int start, vector<int>& current, vector<vector<int>>& result) {
        // Add current subset to result
        result.push_back(current);
        
        for (int i = start; i < nums.size(); i++) {
            // Include nums[i] in subset
            current.push_back(nums[i]);
            
            // Recursively generate subsets with current element included
            backtrack(nums, i + 1, current, result);
            
            // Backtrack - exclude nums[i]
            current.pop_back();
        }
    }
};`,notes:"Time: O(n * 2^n), Space: O(n) for recursion stack",comments:[{author:"RecursionMaster",content:"Backtracking naturally generates all subsets by considering include/exclude decisions"},{author:"CodeReviewer42",content:"Clean implementation with proper state management using current vector"},{author:"EdgeCaseHunter",content:"Generates subsets in lexicographical order and handles empty set correctly"},{author:"AlternativeThinker",content:"Bit manipulation approach can generate all subsets iteratively"}]},{problemName:"Combination Sum",author:"Backtracking Sum Finder",explanation:"Use backtracking to find all combinations that sum to target. At each step, try including current candidate multiple times.",solution:`class Solution {
public:
    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
        vector<vector<int>> result;
        vector<int> current;
        backtrack(candidates, target, 0, current, result);
        return result;
    }
    
private:
    void backtrack(vector<int>& candidates, int target, int start, vector<int>& current, vector<vector<int>>& result) {
        if (target == 0) {
            result.push_back(current);
            return;
        }
        
        if (target < 0) {
            return;
        }
        
        for (int i = start; i < candidates.size(); i++) {
            // Include candidate
            current.push_back(candidates[i]);
            
            // Recursively search with reduced target
            // Note: we pass 'i' instead of 'i+1' to allow reuse of same element
            backtrack(candidates, target - candidates[i], i, current, result);
            
            // Backtrack
            current.pop_back();
        }
    }
};`,notes:"Time: O(n^(target/min)), Space: O(target/min) for recursion stack",comments:[{author:"RecursionMaster",content:"Backtracking with index reuse elegantly handles the unlimited usage requirement"},{author:"CodeReviewer42",content:"Clean implementation with proper termination conditions"},{author:"EdgeCaseHunter",content:"Handles cases where no combination sums to target correctly"},{author:"AlternativeThinker",content:"Dynamic programming approach can solve this more efficiently for some cases"}]},{problemName:"Generate Parentheses",author:"Balanced Parentheses Generator",explanation:"Use backtracking to generate valid parentheses by tracking open and close counts, ensuring we never have more closing than opening.",solution:`class Solution {
public:
    vector<string> generateParenthesis(int n) {
        vector<string> result;
        string current;
        backtrack(n, 0, 0, current, result);
        return result;
    }
    
private:
    void backtrack(int n, int open, int close, string& current, vector<string>& result) {
        if (current.length() == 2 * n) {
            result.push_back(current);
            return;
        }
        
        // Add opening parenthesis if we haven't used all open ones
        if (open < n) {
            current.push_back('(');
            backtrack(n, open + 1, close, current, result);
            current.pop_back();
        }
        
        // Add closing parenthesis if we have more open than close
        if (close < open) {
            current.push_back(')');
            backtrack(n, open, close + 1, current, result);
            current.pop_back();
        }
    }
};`,notes:"Time: O(4^n/√n) - Catalan number, Space: O(n) for recursion stack",comments:[{author:"RecursionMaster",content:"Classic backtracking problem that generates all valid parentheses combinations"},{author:"CodeReviewer42",content:"Elegant solution using open/close counters to ensure validity"},{author:"EdgeCaseHunter",content:"Guarantees all generated parentheses are balanced and valid"},{author:"AlternativeThinker",content:"Iterative approach using queue or stack is also possible"}]},{problemName:"Letter Combinations of a Phone Number",author:"DFS Combination Generator",explanation:"Use DFS/backtracking to generate all combinations by recursively building strings from digit mappings.",solution:`class Solution {
public:
    vector<string> letterCombinations(string digits) {
        if (digits.empty()) return {};
        
        vector<string> result;
        string current;
        backtrack(digits, 0, current, result);
        return result;
    }
    
private:
    vector<string> digitMap = {
        "", "", "abc", "def", "ghi", "jkl", 
        "mno", "pqrs", "tuv", "wxyz"
    };
    
    void backtrack(string& digits, int index, string& current, vector<string>& result) {
        if (index == digits.length()) {
            result.push_back(current);
            return;
        }
        
        string letters = digitMap[digits[index] - '0'];
        for (char c : letters) {
            current.push_back(c);
            backtrack(digits, index + 1, current, result);
            current.pop_back();
        }
    }
};`,notes:"Time: O(4^n), Space: O(n) for recursion stack",comments:[{author:"RecursionMaster",content:"DFS approach naturally explores all possible letter combinations"},{author:"CodeReviewer42",content:"Clean implementation with digit mapping array"},{author:"EdgeCaseHunter",content:"Handles empty input and digits with varying numbers of letters correctly"},{author:"AlternativeThinker",content:"Iterative BFS approach can also solve this problem"}]},{problemName:"Sudoku Solver",author:"Backtracking Puzzle Solver",explanation:"Use backtracking to try all possible numbers in empty cells, backtracking when constraints are violated.",solution:`class Solution {
public:
    void solveSudoku(vector<vector<char>>& board) {
        solve(board);
    }
    
private:
    bool solve(vector<vector<char>>& board) {
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                if (board[i][j] == '.') {
                    for (char c = '1'; c <= '9'; c++) {
                        if (isValid(board, i, j, c)) {
                            board[i][j] = c;
                            
                            if (solve(board)) {
                                return true;
                            }
                            
                            board[i][j] = '.'; // Backtrack
                        }
                    }
                    return false; // No valid number found
                }
            }
        }
        return true; // All cells filled
    }
    
    bool isValid(vector<vector<char>>& board, int row, int col, char c) {
        for (int i = 0; i < 9; i++) {
            // Check row
            if (board[row][i] == c) return false;
            // Check column
            if (board[i][col] == c) return false;
            // Check 3x3 box
            if (board[3 * (row / 3) + i / 3][3 * (col / 3) + i % 3] == c) return false;
        }
        return true;
    }
};`,notes:"Time: O(9^(n²)) worst case, Space: O(n²) for recursion stack",comments:[{author:"RecursionMaster",content:"Classic backtracking application for constraint satisfaction problems"},{author:"CodeReviewer42",content:"Efficient validation function that checks row, column and box simultaneously"},{author:"EdgeCaseHunter",content:"Handles all valid Sudoku puzzles including the most difficult ones"},{author:"AlternativeThinker",content:"Adding heuristics like most constrained variable can improve performance"}]},{problemName:"N-Queens",author:"Chessboard Backtracker",explanation:"Use backtracking to place queens row by row, checking for conflicts with previously placed queens.",solution:`class Solution {
public:
    vector<vector<string>> solveNQueens(int n) {
        vector<vector<string>> result;
        vector<string> board(n, string(n, '.'));
        backtrack(board, 0, result);
        return result;
    }
    
private:
    void backtrack(vector<string>& board, int row, vector<vector<string>>& result) {
        if (row == board.size()) {
            result.push_back(board);
            return;
        }
        
        for (int col = 0; col < board.size(); col++) {
            if (isValid(board, row, col)) {
                board[row][col] = 'Q';
                backtrack(board, row + 1, result);
                board[row][col] = '.'; // Backtrack
            }
        }
    }
    
    bool isValid(vector<string>& board, int row, int col) {
        // Check column
        for (int i = 0; i < row; i++) {
            if (board[i][col] == 'Q') return false;
        }
        
        // Check upper left diagonal
        for (int i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] == 'Q') return false;
        }
        
        // Check upper right diagonal
        for (int i = row - 1, j = col + 1; i >= 0 && j < board.size(); i--, j++) {
            if (board[i][j] == 'Q') return false;
        }
        
        return true;
    }
};`,notes:"Time: O(n!), Space: O(n²) for board storage",comments:[{author:"RecursionMaster",content:"Classic backtracking problem that places queens while checking all constraints"},{author:"CodeReviewer42",content:"Efficient validation that checks column and both diagonals"},{author:"EdgeCaseHunter",content:"Handles all board sizes and generates all distinct solutions"},{author:"AlternativeThinker",content:"Bitmasking can optimize the validation checks"}]},{problemName:"Word Search",author:"DFS Word Finder",explanation:"Use DFS/backtracking to search for word in grid, marking visited cells and backtracking when path doesn't lead to solution.",solution:`class Solution {
public:
    bool exist(vector<vector<char>>& board, string word) {
        int m = board.size(), n = board[0].size();
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (backtrack(board, word, i, j, 0)) {
                    return true;
                }
            }
        }
        return false;
    }
    
private:
    bool backtrack(vector<vector<char>>& board, string& word, int i, int j, int index) {
        if (index == word.length()) {
            return true;
        }
        
        if (i < 0 || i >= board.size() || j < 0 || j >= board[0].size() || 
            board[i][j] != word[index]) {
            return false;
        }
        
        // Mark cell as visited
        char temp = board[i][j];
        board[i][j] = '#';
        
        // Explore neighbors
        bool found = backtrack(board, word, i + 1, j, index + 1) ||
                     backtrack(board, word, i - 1, j, index + 1) ||
                     backtrack(board, word, i, j + 1, index + 1) ||
                     backtrack(board, word, i, j - 1, index + 1);
        
        // Backtrack - restore cell
        board[i][j] = temp;
        
        return found;
    }
};`,notes:"Time: O(m * n * 4^L) where L is word length, Space: O(L) for recursion stack",comments:[{author:"RecursionMaster",content:"DFS with backtracking efficiently explores all possible paths in the grid"},{author:"CodeReviewer42",content:"Clean implementation with in-place marking using special character"},{author:"EdgeCaseHunter",content:"Handles cases where word doesn't exist and prevents revisiting cells"},{author:"AlternativeThinker",content:"Trie-based approach can optimize when searching for multiple words"}]},{problemName:"Restore IP Addresses",author:"Backtracking IP Builder",explanation:"Use backtracking to place dots at valid positions, ensuring each segment is between 0-255 and has no leading zeros.",solution:`class Solution {
public:
    vector<string> restoreIpAddresses(string s) {
        vector<string> result;
        string current;
        backtrack(s, 0, 0, current, result);
        return result;
    }
    
private:
    void backtrack(string& s, int start, int segments, string& current, vector<string>& result) {
        if (segments == 4 && start == s.length()) {
            result.push_back(current);
            return;
        }
        
        if (segments == 4 || start == s.length()) {
            return;
        }
        
        for (int len = 1; len <= 3 && start + len <= s.length(); len++) {
            string segment = s.substr(start, len);
            
            // Check if segment is valid
            if (isValidSegment(segment)) {
                string newCurrent = current;
                if (!newCurrent.empty()) {
                    newCurrent += ".";
                }
                newCurrent += segment;
                
                backtrack(s, start + len, segments + 1, newCurrent, result);
            }
        }
    }
    
    bool isValidSegment(string segment) {
        if (segment.length() > 1 && segment[0] == '0') {
            return false; // No leading zero
        }
        
        int value = stoi(segment);
        return value >= 0 && value <= 255;
    }
};`,notes:"Time: O(3^4) constant time, Space: O(1) constant space",comments:[{author:"RecursionMaster",content:"Backtracking naturally explores all valid dot placements"},{author:"CodeReviewer42",content:"Clean validation function that checks both numeric range and leading zeros"},{author:"EdgeCaseHunter",content:"Handles edge cases like strings that are too short or too long"},{author:"AlternativeThinker",content:"Iterative approach with nested loops is also possible"}]},{problemName:"Toeplitz Matrix",author:"Diagonal Consistency Checker",explanation:"Check if every diagonal from top-left to bottom-right has the same elements by comparing each element with its top-left neighbor.",solution:`class Solution {
public:
    bool isToeplitzMatrix(vector<vector<int>>& matrix) {
        int m = matrix.size(), n = matrix[0].size();
        
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                if (matrix[i][j] != matrix[i-1][j-1]) {
                    return false;
                }
            }
        }
        return true;
    }
};`,notes:"Time: O(m*n), Space: O(1)",comments:[{author:"MatrixMaster",content:"Efficient solution that checks each element against its top-left neighbor"},{author:"CodeReviewer42",content:"Clean implementation with proper bounds checking"},{author:"EdgeCaseHunter",content:"Handles 1x1 matrices and single row/column matrices correctly"},{author:"AlternativeThinker",content:"Could check each diagonal separately but this approach is more efficient"}]},{problemName:"Transpose Matrix",author:"Row-Column Swapper",explanation:"Create a new matrix where rows become columns and columns become rows by swapping indices [i][j] to [j][i].",solution:`class Solution {
public:
    vector<vector<int>> transpose(vector<vector<int>>& matrix) {
        int m = matrix.size(), n = matrix[0].size();
        vector<vector<int>> result(n, vector<int>(m));
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                result[j][i] = matrix[i][j];
            }
        }
        return result;
    }
};`,notes:"Time: O(m*n), Space: O(m*n)",comments:[{author:"MatrixMaster",content:"Straightforward approach that directly implements matrix transposition"},{author:"CodeReviewer42",content:"Clean implementation with proper result matrix initialization"},{author:"EdgeCaseHunter",content:"Handles non-square matrices correctly by swapping dimensions"},{author:"AlternativeThinker",content:"In-place transposition possible for square matrices but more complex"}]},{problemName:"Matrix Diagonal Sum",author:"Dual Diagonal Calculator",explanation:"Sum both primary and secondary diagonals, avoiding double-counting the center element in odd-sized matrices.",solution:`class Solution {
public:
    int diagonalSum(vector<vector<int>>& mat) {
        int n = mat.size();
        int sum = 0;
        
        for (int i = 0; i < n; i++) {
            // Primary diagonal (i, i)
            sum += mat[i][i];
            // Secondary diagonal (i, n-1-i)
            sum += mat[i][n-1-i];
        }
        
        // If matrix size is odd, subtract center element (counted twice)
        if (n % 2 == 1) {
            sum -= mat[n/2][n/2];
        }
        
        return sum;
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"MatrixMaster",content:"Efficient single-pass solution that handles both diagonals simultaneously"},{author:"CodeReviewer42",content:"Clean implementation with proper handling of center element duplication"},{author:"EdgeCaseHunter",content:"Correctly handles both even and odd sized matrices"},{author:"AlternativeThinker",content:"Could use two separate loops but this approach is more efficient"}]},{problemName:"Game of Life",author:"In-Place State Encoder",explanation:"Use special states to encode both current and next state simultaneously, then update all cells in a second pass.",solution:`class Solution {
public:
    void gameOfLife(vector<vector<int>>& board) {
        int m = board.size(), n = board[0].size();
        
        // Directions: 8 neighbors
        vector<pair<int, int>> directions = {
            {-1,-1}, {-1,0}, {-1,1},
            {0,-1},          {0,1},
            {1,-1},  {1,0},  {1,1}
        };
        
        // First pass: encode next state
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                int liveNeighbors = 0;
                
                // Count live neighbors
                for (auto [dx, dy] : directions) {
                    int ni = i + dx, nj = j + dy;
                    if (ni >= 0 && ni < m && nj >= 0 && nj < n) {
                        // Check if originally live (1 or going to die 2)
                        if (board[ni][nj] == 1 || board[ni][nj] == 2) {
                            liveNeighbors++;
                        }
                    }
                }
                
                // Apply rules
                if (board[i][j] == 1) { // Currently live
                    if (liveNeighbors < 2 || liveNeighbors > 3) {
                        board[i][j] = 2; // Live -> Dead
                    }
                } else { // Currently dead
                    if (liveNeighbors == 3) {
                        board[i][j] = 3; // Dead -> Live
                    }
                }
            }
        }
        
        // Second pass: decode next state
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (board[i][j] == 2) {
                    board[i][j] = 0;
                } else if (board[i][j] == 3) {
                    board[i][j] = 1;
                }
            }
        }
    }
};`,notes:"Time: O(m*n), Space: O(1)",comments:[{author:"MatrixMaster",content:"Clever encoding scheme allows in-place updates without extra space"},{author:"CodeReviewer42",content:"Well-structured two-pass approach with clear state transitions"},{author:"EdgeCaseHunter",content:"Handles all edge cases including boundaries and corner cells"},{author:"AlternativeThinker",content:"Could use a separate board for simplicity but this saves space"}]},{problemName:"Implement Stack using Queues",author:"Queue Stack Simulator",explanation:"Use two queues to simulate stack operations. For push, add to q2, move all from q1 to q2, then swap queues.",solution:`class MyStack {
private:
    queue<int> q1, q2;
    
public:
    MyStack() {}
    
    void push(int x) {
        q2.push(x);
        
        // Move all elements from q1 to q2
        while (!q1.empty()) {
            q2.push(q1.front());
            q1.pop();
        }
        
        // Swap queues
        swap(q1, q2);
    }
    
    int pop() {
        int val = q1.front();
        q1.pop();
        return val;
    }
    
    int top() {
        return q1.front();
    }
    
    bool empty() {
        return q1.empty();
    }
};`,notes:"Time: O(n) push, O(1) pop/top, Space: O(n)",comments:[{author:"QueueMaster",content:"Smart queue swapping ensures LIFO behavior for stack operations"},{author:"CodeReviewer42",content:"Clean implementation with efficient push operation"},{author:"EdgeCaseHunter",content:"Handles all stack operations correctly including empty stack"},{author:"AlternativeThinker",content:"Single queue approach also works by rotating elements"}]},{problemName:"Number of Recent Calls",author:"Sliding Window Queue",explanation:"Use queue to store timestamps. For each ping, remove timestamps outside 3000ms window, then return queue size.",solution:`class RecentCounter {
private:
    queue<int> requests;
    
public:
    RecentCounter() {}
    
    int ping(int t) {
        requests.push(t);
        
        // Remove requests outside [t-3000, t] window
        while (!requests.empty() && requests.front() < t - 3000) {
            requests.pop();
        }
        
        return requests.size();
    }
};`,notes:"Time: O(1) amortized, Space: O(n)",comments:[{author:"QueueMaster",content:"Queue naturally maintains sliding window of recent requests"},{author:"CodeReviewer42",content:"Efficient implementation with amortized O(1) time complexity"},{author:"EdgeCaseHunter",content:"Handles rapidly increasing timestamps and empty states correctly"},{author:"AlternativeThinker",content:"Could use deque for more flexibility but queue is sufficient"}]},{problemName:"Moving Average from Data Stream",author:"Queue-based Average Calculator",explanation:"Use queue to maintain window of size, keep running sum, update by adding new value and removing oldest.",solution:`class MovingAverage {
private:
    queue<int> window;
    int size;
    double sum;
    
public:
    MovingAverage(int size) {
        this->size = size;
        this->sum = 0;
    }
    
    double next(int val) {
        window.push(val);
        sum += val;
        
        // If window exceeds size, remove oldest element
        if (window.size() > size) {
            sum -= window.front();
            window.pop();
        }
        
        return sum / window.size();
    }
};`,notes:"Time: O(1), Space: O(size)",comments:[{author:"QueueMaster",content:"Queue with running sum provides efficient O(1) moving average calculation"},{author:"CodeReviewer42",content:"Clean implementation with proper sum maintenance"},{author:"EdgeCaseHunter",content:"Handles window filling phase correctly when count < size"},{author:"AlternativeThinker",content:"Circular array approach also works with O(1) time"}]},{problemName:"Open the Lock",author:"BFS Lock Solver",explanation:"Use BFS with queue to explore all possible lock combinations level by level, avoiding deadends and visited states.",solution:`class Solution {
public:
    int openLock(vector<string>& deadends, string target) {
        unordered_set<string> dead(deadends.begin(), deadends.end());
        unordered_set<string> visited;
        queue<string> q;
        
        string start = "0000";
        if (dead.count(start)) return -1;
        
        q.push(start);
        visited.insert(start);
        int turns = 0;
        
        while (!q.empty()) {
            int levelSize = q.size();
            
            for (int i = 0; i < levelSize; i++) {
                string current = q.front();
                q.pop();
                
                if (current == target) {
                    return turns;
                }
                
                // Generate all possible next combinations
                for (int j = 0; j < 4; j++) {
                    for (int delta : {-1, 1}) {
                        string next = current;
                        // Rotate wheel
                        next[j] = (next[j] - '0' + delta + 10) % 10 + '0';
                        
                        if (!dead.count(next) && !visited.count(next)) {
                            visited.insert(next);
                            q.push(next);
                        }
                    }
                }
            }
            turns++;
        }
        
        return -1;
    }
};`,notes:"Time: O(10^4) = O(10000), Space: O(10000)",comments:[{author:"QueueMaster",content:"BFS with queue guarantees shortest path to target combination"},{author:"CodeReviewer42",content:"Clean implementation with proper level-by-level traversal"},{author:"EdgeCaseHunter",content:"Handles deadends correctly and avoids infinite loops"},{author:"AlternativeThinker",content:"Bidirectional BFS could improve performance for some cases"}]},{problemName:"Design Circular Queue",author:"Array-based Circular Buffer",explanation:"Use fixed-size array with front and rear pointers, handle wrap-around using modulo arithmetic.",solution:`class MyCircularQueue {
private:
    vector<int> data;
    int front, rear, size, capacity;
    
public:
    MyCircularQueue(int k) {
        data.resize(k);
        front = 0;
        rear = -1;
        size = 0;
        capacity = k;
    }
    
    bool enQueue(int value) {
        if (isFull()) return false;
        
        rear = (rear + 1) % capacity;
        data[rear] = value;
        size++;
        return true;
    }
    
    bool deQueue() {
        if (isEmpty()) return false;
        
        front = (front + 1) % capacity;
        size--;
        return true;
    }
    
    int Front() {
        if (isEmpty()) return -1;
        return data[front];
    }
    
    int Rear() {
        if (isEmpty()) return -1;
        return data[rear];
    }
    
    bool isEmpty() {
        return size == 0;
    }
    
    bool isFull() {
        return size == capacity;
    }
};`,notes:"Time: O(1) all operations, Space: O(k)",comments:[{author:"QueueMaster",content:"Circular array implementation provides efficient O(1) operations"},{author:"CodeReviewer42",content:"Clean implementation with proper pointer management using modulo"},{author:"EdgeCaseHunter",content:"Handles all edge cases including empty/full states correctly"},{author:"AlternativeThinker",content:"Linked list approach also works but has more overhead"}]},{problemName:"First Unique Number",author:"LinkedHashSet + Queue Hybrid",explanation:"Use queue to maintain order of elements, hash map to track counts. Remove from front when count > 1.",solution:`class FirstUnique {
private:
    queue<int> q;
    unordered_map<int, int> count;
    
public:
    FirstUnique(vector<int>& nums) {
        for (int num : nums) {
            add(num);
        }
    }
    
    int showFirstUnique() {
        // Remove all non-unique elements from front
        while (!q.empty() && count[q.front()] > 1) {
            q.pop();
        }
        
        return q.empty() ? -1 : q.front();
    }
    
    void add(int value) {
        count[value]++;
        if (count[value] == 1) {
            q.push(value);
        }
    }
};`,notes:"Time: O(1) amortized, Space: O(n)",comments:[{author:"QueueMaster",content:"Queue maintains order while hash map tracks uniqueness efficiently"},{author:"CodeReviewer42",content:"Amortized O(1) operations by lazy removal of non-unique elements"},{author:"EdgeCaseHunter",content:"Handles duplicate additions and empty states correctly"},{author:"AlternativeThinker",content:"LinkedHashSet (ordered dict) would be ideal but not in C++ STL"}]},{problemName:"Fizz Buzz",author:"Conditional String Generator",explanation:"Iterate through numbers, check divisibility by 3 and 5 to determine the appropriate string output for each number.",solution:`class Solution {
public:
    vector<string> fizzBuzz(int n) {
        vector<string> result;
        
        for (int i = 1; i <= n; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                result.push_back("FizzBuzz");
            } else if (i % 3 == 0) {
                result.push_back("Fizz");
            } else if (i % 5 == 0) {
                result.push_back("Buzz");
            } else {
                result.push_back(to_string(i));
            }
        }
        
        return result;
    }
};`,notes:"Time: O(n), Space: O(1) excluding output",comments:[{author:"MathMaster",content:"Straightforward conditional logic handles all divisibility cases"},{author:"CodeReviewer42",content:"Clean implementation with proper order of condition checks"},{author:"EdgeCaseHunter",content:"Handles edge case n=1 correctly and avoids string concatenation overhead"},{author:"AlternativeThinker",content:"Could use string building to avoid multiple condition checks"}]},{problemName:"Count Primes",author:"Sieve of Eratosthenes Implementer",explanation:"Use Sieve of Eratosthenes algorithm to mark non-prime numbers, then count remaining primes.",solution:`class Solution {
public:
    int countPrimes(int n) {
        if (n <= 2) return 0;
        
        vector<bool> isPrime(n, true);
        isPrime[0] = isPrime[1] = false;
        
        // Sieve of Eratosthenes
        for (int i = 2; i * i < n; i++) {
            if (isPrime[i]) {
                for (int j = i * i; j < n; j += i) {
                    isPrime[j] = false;
                }
            }
        }
        
        // Count primes
        int count = 0;
        for (int i = 2; i < n; i++) {
            if (isPrime[i]) {
                count++;
            }
        }
        
        return count;
    }
};`,notes:"Time: O(n log log n), Space: O(n)",comments:[{author:"MathMaster",content:"Sieve of Eratosthenes is the most efficient algorithm for counting primes up to n"},{author:"CodeReviewer42",content:"Optimized implementation that starts marking from i*i"},{author:"EdgeCaseHunter",content:"Handles edge cases n=0,1,2 correctly and efficiently"},{author:"AlternativeThinker",content:"Segmented sieve could reduce memory usage for very large n"}]},{problemName:"Power of Three",author:"Mathematical Constraints Explorer",explanation:"Check if n is positive and divide repeatedly by 3 until reaching 1, ensuring no remainder at each step.",solution:`class Solution {
public:
    bool isPowerOfThree(int n) {
        if (n <= 0) return false;
        
        while (n % 3 == 0) {
            n /= 3;
        }
        
        return n == 1;
    }
};`,notes:"Time: O(log₃n), Space: O(1)",comments:[{author:"MathMaster",content:"Simple iterative division efficiently checks power of three property"},{author:"CodeReviewer42",content:"Clean implementation with early termination on non-divisible numbers"},{author:"EdgeCaseHunter",content:"Handles negative numbers and zero correctly"},{author:"AlternativeThinker",content:"Could use mathematical approach: n > 0 && 3^19 % n == 0 for 32-bit integers"}]},{problemName:"Factorial Trailing Zeroes",author:"Prime Factor Counter",explanation:"Count factors of 5 in n! since trailing zeroes come from pairs of 2 and 5, and factors of 5 are always fewer.",solution:`class Solution {
public:
    int trailingZeroes(int n) {
        int count = 0;
        
        // Count factors of 5 in n!
        while (n > 0) {
            n /= 5;
            count += n;
        }
        
        return count;
    }
};`,notes:"Time: O(log₅n), Space: O(1)",comments:[{author:"MathMaster",content:"Mathematical insight: trailing zeroes = number of factor 5 pairs in prime factorization"},{author:"CodeReviewer42",content:"Elegant iterative division that counts all 5 factors including multiples"},{author:"EdgeCaseHunter",content:"Handles edge case n=0 correctly and works for large n efficiently"},{author:"AlternativeThinker",content:"Recursive approach also works but iterative is more space efficient"}]},{problemName:"Excel Sheet Column Number",author:"Base-26 Number Converter",explanation:"Treat column title as base-26 number where A=1, B=2, ..., Z=26, and convert to decimal.",solution:`class Solution {
public:
    int titleToNumber(string columnTitle) {
        int result = 0;
        
        for (char c : columnTitle) {
            result = result * 26 + (c - 'A' + 1);
        }
        
        return result;
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"MathMaster",content:"Base conversion algorithm adapted for base-26 with A=1 instead of 0"},{author:"CodeReviewer42",content:"Clean implementation using Horner's method for polynomial evaluation"},{author:"EdgeCaseHunter",content:"Handles single character columns and multi-character columns correctly"},{author:"AlternativeThinker",content:"Could use pow() function but this approach is more efficient"}]},{problemName:"Pow(x, n)",author:"Binary Exponentiation Expert",explanation:"Use binary exponentiation (exponentiation by squaring) to compute power in O(log n) time by halving exponent repeatedly.",solution:`class Solution {
public:
    double myPow(double x, int n) {
        long long N = n;
        if (N < 0) {
            x = 1 / x;
            N = -N;
        }
        
        double result = 1.0;
        double current = x;
        
        while (N > 0) {
            if (N % 2 == 1) {
                result *= current;
            }
            current *= current;
            N /= 2;
        }
        
        return result;
    }
};`,notes:"Time: O(log n), Space: O(1)",comments:[{author:"MathMaster",content:"Binary exponentiation reduces time complexity from O(n) to O(log n)"},{author:"CodeReviewer42",content:"Clean implementation handling negative exponents and integer overflow"},{author:"EdgeCaseHunter",content:"Handles edge cases like n=0, n=INT_MIN correctly"},{author:"AlternativeThinker",content:"Recursive approach also works but iterative avoids stack overflow"}]},{problemName:"Max Points on a Line",author:"Slope Frequency Analyzer",explanation:"For each point, calculate slopes to all other points, use hash map to count points with same slope (same line).",solution:`class Solution {
public:
    int maxPoints(vector<vector<int>>& points) {
        int n = points.size();
        if (n <= 2) return n;
        
        int maxPoints = 1;
        
        for (int i = 0; i < n; i++) {
            unordered_map<string, int> slopeCount;
            int duplicate = 1; // Count the current point itself
            
            for (int j = i + 1; j < n; j++) {
                int x1 = points[i][0], y1 = points[i][1];
                int x2 = points[j][0], y2 = points[j][1];
                
                if (x1 == x2 && y1 == y2) {
                    duplicate++;
                    continue;
                }
                
                string slope;
                int dx = x2 - x1;
                int dy = y2 - y1;
                
                // Reduce slope to simplest form using gcd
                int g = gcd(dx, dy);
                dx /= g;
                dy /= g;
                
                // Handle negative slopes consistently
                if (dx < 0) {
                    dx = -dx;
                    dy = -dy;
                }
                
                slope = to_string(dy) + "/" + to_string(dx);
                slopeCount[slope]++;
            }
            
            maxPoints = max(maxPoints, duplicate);
            for (auto& [slope, count] : slopeCount) {
                maxPoints = max(maxPoints, count + duplicate);
            }
        }
        
        return maxPoints;
    }
    
private:
    int gcd(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
};`,notes:"Time: O(n²), Space: O(n)",comments:[{author:"MathMaster",content:"Slope comparison with gcd ensures accurate line detection avoiding floating point issues"},{author:"CodeReviewer42",content:"Good handling of duplicate points and vertical/horizontal lines"},{author:"EdgeCaseHunter",content:"Handles edge cases with duplicate points and small input sizes"},{author:"AlternativeThinker",content:"Could use pair<int,int> for slope instead of string for better performance"}]},{problemName:"Implement Trie (Prefix Tree)",author:"Trie Data Structure Designer",explanation:"Implement trie with nodes containing children array and end-of-word flag. Support insert, search, and startsWith operations.",solution:`class TrieNode {
public:
    vector<TrieNode*> children;
    bool isEnd;
    
    TrieNode() {
        children = vector<TrieNode*>(26, nullptr);
        isEnd = false;
    }
};

class Trie {
private:
    TrieNode* root;
    
public:
    Trie() {
        root = new TrieNode();
    }
    
    void insert(string word) {
        TrieNode* node = root;
        for (char c : word) {
            int index = c - 'a';
            if (node->children[index] == nullptr) {
                node->children[index] = new TrieNode();
            }
            node = node->children[index];
        }
        node->isEnd = true;
    }
    
    bool search(string word) {
        TrieNode* node = root;
        for (char c : word) {
            int index = c - 'a';
            if (node->children[index] == nullptr) {
                return false;
            }
            node = node->children[index];
        }
        return node->isEnd;
    }
    
    bool startsWith(string prefix) {
        TrieNode* node = root;
        for (char c : prefix) {
            int index = c - 'a';
            if (node->children[index] == nullptr) {
                return false;
            }
            node = node->children[index];
        }
        return true;
    }
};`,notes:"Time: O(L) per operation, Space: O(AL) where A=26, L=word length",comments:[{author:"TrieMaster",content:"Classic trie implementation with efficient prefix searching"},{author:"CodeReviewer42",content:"Clean separation of TrieNode and Trie classes with proper memory management"},{author:"EdgeCaseHunter",content:"Handles empty strings and non-existent words correctly"},{author:"AlternativeThinker",content:"Could use unordered_map for children to support larger character sets"}]},{problemName:"Add and Search Word",author:"Wildcard Trie Searcher",explanation:"Extend trie to support wildcard '.' searches using DFS when encountering wildcard characters.",solution:`class WordDictionary {
private:
    struct TrieNode {
        vector<TrieNode*> children;
        bool isEnd;
        
        TrieNode() {
            children = vector<TrieNode*>(26, nullptr);
            isEnd = false;
        }
    };
    
    TrieNode* root;
    
    bool searchInNode(string& word, int index, TrieNode* node) {
        if (index == word.length()) {
            return node->isEnd;
        }
        
        char c = word[index];
        if (c == '.') {
            // Search all possible children
            for (TrieNode* child : node->children) {
                if (child != nullptr && searchInNode(word, index + 1, child)) {
                    return true;
                }
            }
            return false;
        } else {
            int childIndex = c - 'a';
            if (node->children[childIndex] == nullptr) {
                return false;
            }
            return searchInNode(word, index + 1, node->children[childIndex]);
        }
    }
    
public:
    WordDictionary() {
        root = new TrieNode();
    }
    
    void addWord(string word) {
        TrieNode* node = root;
        for (char c : word) {
            int index = c - 'a';
            if (node->children[index] == nullptr) {
                node->children[index] = new TrieNode();
            }
            node = node->children[index];
        }
        node->isEnd = true;
    }
    
    bool search(string word) {
        return searchInNode(word, 0, root);
    }
};`,notes:"Time: O(26^L) worst case with wildcards, O(L) without, Space: O(AL)",comments:[{author:"TrieMaster",content:"DFS handles wildcard searches by exploring all possible paths"},{author:"CodeReviewer42",content:"Clean recursive implementation for wildcard searching"},{author:"EdgeCaseHunter",content:"Handles multiple consecutive wildcards and words with only wildcards"},{author:"AlternativeThinker",content:"BFS approach also works but DFS is more memory efficient"}]},{problemName:"Word Search II",author:"Trie-Backed Grid Explorer",explanation:"Use trie to store all words, then DFS on grid to find words, using trie for early termination of invalid paths.",solution:`class Solution {
private:
    struct TrieNode {
        vector<TrieNode*> children;
        string word;
        
        TrieNode() {
            children = vector<TrieNode*>(26, nullptr);
            word = "";
        }
    };
    
    TrieNode* buildTrie(vector<string>& words) {
        TrieNode* root = new TrieNode();
        for (string word : words) {
            TrieNode* node = root;
            for (char c : word) {
                int index = c - 'a';
                if (node->children[index] == nullptr) {
                    node->children[index] = new TrieNode();
                }
                node = node->children[index];
            }
            node->word = word;
        }
        return root;
    }
    
    void dfs(vector<vector<char>>& board, int i, int j, TrieNode* node, vector<string>& result) {
        char c = board[i][j];
        if (c == '#' || node->children[c - 'a'] == nullptr) return;
        
        node = node->children[c - 'a'];
        if (node->word != "") {
            result.push_back(node->word);
            node->word = ""; // Avoid duplicates
        }
        
        board[i][j] = '#'; // Mark visited
        
        // Explore neighbors
        if (i > 0) dfs(board, i - 1, j, node, result);
        if (j > 0) dfs(board, i, j - 1, node, result);
        if (i < board.size() - 1) dfs(board, i + 1, j, node, result);
        if (j < board[0].size() - 1) dfs(board, i, j + 1, node, result);
        
        board[i][j] = c; // Backtrack
    }
    
public:
    vector<string> findWords(vector<vector<char>>& board, vector<string>& words) {
        vector<string> result;
        TrieNode* root = buildTrie(words);
        
        for (int i = 0; i < board.size(); i++) {
            for (int j = 0; j < board[0].size(); j++) {
                dfs(board, i, j, root, result);
            }
        }
        return result;
    }
};`,notes:"Time: O(m*n*4^L) where L is max word length, Space: O(AL + m*n)",comments:[{author:"TrieMaster",content:"Trie provides efficient prefix checking to prune invalid search paths early"},{author:"CodeReviewer42",content:"Well-structured with separate trie building and DFS functions"},{author:"EdgeCaseHunter",content:"Handles duplicate word findings by clearing word after first discovery"},{author:"AlternativeThinker",content:"Could use hash set for words but trie is more efficient for prefix checking"}]},{problemName:"Replace Words",author:"Prefix Replacement Trie",explanation:"Build trie from dictionary, for each word find shortest root prefix in trie and replace with that root.",solution:`class Solution {
private:
    struct TrieNode {
        vector<TrieNode*> children;
        string word;
        
        TrieNode() {
            children = vector<TrieNode*>(26, nullptr);
            word = "";
        }
    };
    
    void insert(TrieNode* root, string word) {
        TrieNode* node = root;
        for (char c : word) {
            int index = c - 'a';
            if (node->children[index] == nullptr) {
                node->children[index] = new TrieNode();
            }
            node = node->children[index];
        }
        node->word = word;
    }
    
    string findRoot(TrieNode* root, string word) {
        TrieNode* node = root;
        for (char c : word) {
            int index = c - 'a';
            if (node->children[index] == nullptr) {
                return word; // No root found, return original word
            }
            node = node->children[index];
            if (node->word != "") {
                return node->word; // Found shortest root
            }
        }
        return word;
    }
    
public:
    string replaceWords(vector<string>& dictionary, string sentence) {
        TrieNode* root = new TrieNode();
        
        // Build trie from dictionary
        for (string word : dictionary) {
            insert(root, word);
        }
        
        stringstream ss(sentence);
        string word, result;
        
        while (ss >> word) {
            if (!result.empty()) {
                result += " ";
            }
            result += findRoot(root, word);
        }
        
        return result;
    }
};`,notes:"Time: O(n + m) where n is total chars in sentence, m in dictionary, Space: O(m)",comments:[{author:"TrieMaster",content:"Trie efficiently finds shortest root prefix for each word"},{author:"CodeReviewer42",content:"Clean implementation with proper string stream handling"},{author:"EdgeCaseHunter",content:"Handles cases where no root exists by returning original word"},{author:"AlternativeThinker",content:"Hash set approach works but doesn't guarantee shortest root"}]},{problemName:"Map Sum Pairs",author:"Trie with Value Storage",explanation:"Extend trie to store values at each node and support prefix sum calculation by storing cumulative values.",solution:`class MapSum {
private:
    struct TrieNode {
        vector<TrieNode*> children;
        int value;
        int sum; // Sum of all values in this subtree
        
        TrieNode() {
            children = vector<TrieNode*>(26, nullptr);
            value = 0;
            sum = 0;
        }
    };
    
    TrieNode* root;
    unordered_map<string, int> keyValues; // Track previous values for overwrites
    
public:
    MapSum() {
        root = new TrieNode();
    }
    
    void insert(string key, int val) {
        int delta = val;
        if (keyValues.count(key)) {
            delta = val - keyValues[key];
        }
        keyValues[key] = val;
        
        TrieNode* node = root;
        for (char c : key) {
            int index = c - 'a';
            if (node->children[index] == nullptr) {
                node->children[index] = new TrieNode();
            }
            node = node->children[index];
            node->sum += delta;
        }
        node->value = val;
    }
    
    int sum(string prefix) {
        TrieNode* node = root;
        for (char c : prefix) {
            int index = c - 'a';
            if (node->children[index] == nullptr) {
                return 0;
            }
            node = node->children[index];
        }
        return node->sum;
    }
};`,notes:"Time: O(L) per operation, Space: O(AL)",comments:[{author:"TrieMaster",content:"Trie with sum storage enables efficient prefix sum calculations"},{author:"CodeReviewer42",content:"Smart delta calculation handles key overwrites efficiently"},{author:"EdgeCaseHunter",content:"Handles duplicate key insertions and non-existent prefixes correctly"},{author:"AlternativeThinker",content:"Hash map with prefix iteration also works but is less efficient for long prefixes"}]},{problemName:"Concatenated Words",author:"Trie Word Composition Checker",explanation:"Build trie from words, then for each word check if it can be formed by concatenating other words using DFS.",solution:`class Solution {
private:
    struct TrieNode {
        vector<TrieNode*> children;
        bool isEnd;
        
        TrieNode() {
            children = vector<TrieNode*>(26, nullptr);
            isEnd = false;
        }
    };
    
    TrieNode* root;
    
    void insert(string word) {
        TrieNode* node = root;
        for (char c : word) {
            int index = c - 'a';
            if (node->children[index] == nullptr) {
                node->children[index] = new TrieNode();
            }
            node = node->children[index];
        }
        node->isEnd = true;
    }
    
    bool isConcatenated(string word, int start, int count) {
        if (start == word.length()) {
            return count >= 2; // At least two words
        }
        
        TrieNode* node = root;
        for (int i = start; i < word.length(); i++) {
            int index = word[i] - 'a';
            if (node->children[index] == nullptr) {
                return false;
            }
            node = node->children[index];
            if (node->isEnd) {
                if (isConcatenated(word, i + 1, count + 1)) {
                    return true;
                }
            }
        }
        return false;
    }
    
public:
    vector<string> findAllConcatenatedWordsInADict(vector<string>& words) {
        // Sort by length to process shorter words first
        sort(words.begin(), words.end(), [](const string& a, const string& b) {
            return a.length() < b.length();
        });
        
        root = new TrieNode();
        vector<string> result;
        
        for (string word : words) {
            if (word.empty()) continue;
            
            if (isConcatenated(word, 0, 0)) {
                result.push_back(word);
            }
            insert(word);
        }
        
        return result;
    }
};`,notes:"Time: O(n * L²) where L is max word length, Space: O(AL)",comments:[{author:"TrieMaster",content:"Trie with DFS efficiently checks word concatenation possibilities"},{author:"CodeReviewer42",content:"Smart sorting by length ensures shorter words are available for concatenation checks"},{author:"EdgeCaseHunter",content:"Handles empty words and single-character words correctly"},{author:"AlternativeThinker",content:"Dynamic programming approach also works with similar time complexity"}]},{problemName:"Palindrome Pairs",author:"Trie Palindrome Finder",explanation:"Build trie with words and their reverses, check for palindrome pairs by matching prefixes and suffixes.",solution:`class Solution {
private:
    struct TrieNode {
        vector<TrieNode*> children;
        int index;
        vector<int> palindromeIndices;
        
        TrieNode() {
            children = vector<TrieNode*>(26, nullptr);
            index = -1;
        }
    };
    
    bool isPalindrome(string word, int left, int right) {
        while (left < right) {
            if (word[left++] != word[right--]) {
                return false;
            }
        }
        return true;
    }
    
    void addWord(TrieNode* root, string word, int idx) {
        TrieNode* node = root;
        
        // Check for palindrome suffixes when adding word in reverse
        for (int i = word.length() - 1; i >= 0; i--) {
            int index = word[i] - 'a';
            if (node->children[index] == nullptr) {
                node->children[index] = new TrieNode();
            }
            
            // If the remaining prefix is palindrome, store index
            if (isPalindrome(word, 0, i)) {
                node->palindromeIndices.push_back(idx);
            }
            
            node = node->children[index];
        }
        
        node->index = idx;
        node->palindromeIndices.push_back(idx); // Empty string is palindrome
    }
    
public:
    vector<vector<int>> palindromePairs(vector<string>& words) {
        TrieNode* root = new TrieNode();
        
        // Build trie with words in reverse
        for (int i = 0; i < words.size(); i++) {
            addWord(root, words[i], i);
        }
        
        vector<vector<int>> result;
        
        // Search for palindrome pairs
        for (int i = 0; i < words.size(); i++) {
            TrieNode* node = root;
            string word = words[i];
            
            for (int j = 0; j < word.length(); j++) {
                // Case 1: Current node is a word and remaining suffix is palindrome
                if (node->index != -1 && node->index != i && 
                    isPalindrome(word, j, word.length() - 1)) {
                    result.push_back({i, node->index});
                }
                
                int index = word[j] - 'a';
                if (node->children[index] == nullptr) {
                    node = nullptr;
                    break;
                }
                node = node->children[index];
            }
            
            if (node == nullptr) continue;
            
            // Case 2: Exact match with reversed words
            for (int idx : node->palindromeIndices) {
                if (i != idx) {
                    result.push_back({i, idx});
                }
            }
        }
        
        return result;
    }
};`,notes:"Time: O(n * k²) where k is average word length, Space: O(n * k)",comments:[{author:"TrieMaster",content:"Trie with reverse word storage efficiently finds palindrome pairs"},{author:"CodeReviewer42",content:"Complex but comprehensive handling of all palindrome pair cases"},{author:"EdgeCaseHunter",content:"Handles empty strings and single character words correctly"},{author:"AlternativeThinker",content:"Hash map approach also works but trie is more elegant for prefix/suffix matching"}]},{problemName:"Number of 1 Bits",author:"Bit Manipulation Counter",explanation:"Use bit manipulation to count set bits by repeatedly clearing the least significant set bit using n & (n-1).",solution:`class Solution {
public:
    int hammingWeight(uint32_t n) {
        int count = 0;
        
        while (n != 0) {
            n = n & (n - 1); // Clear the least significant set bit
            count++;
        }
        
        return count;
    }
};`,notes:"Time: O(k) where k is number of set bits, Space: O(1)",comments:[{author:"BitMaster",content:"Brian Kernighan's algorithm efficiently counts set bits by clearing them one by one"},{author:"CodeReviewer42",content:"Clean implementation using the n & (n-1) trick for optimal performance"},{author:"EdgeCaseHunter",content:"Handles zero input correctly and works for all 32-bit unsigned integers"},{author:"AlternativeThinker",content:"Built-in __builtin_popcount also works but this demonstrates the algorithm"}]},{problemName:"Reverse Bits",author:"Bit Reversal Specialist",explanation:"Reverse bits by extracting each bit from the input and setting it in the corresponding reversed position in the result.",solution:`class Solution {
public:
    uint32_t reverseBits(uint32_t n) {
        uint32_t result = 0;
        
        for (int i = 0; i < 32; i++) {
            // Extract the i-th bit from n
            uint32_t bit = (n >> i) & 1;
            // Set the (31-i)-th bit in result
            result |= (bit << (31 - i));
        }
        
        return result;
    }
};`,notes:"Time: O(1), Space: O(1)",comments:[{author:"BitMaster",content:"Bit-by-bit reversal ensures each bit is placed in its correct mirrored position"},{author:"CodeReviewer42",content:"Clean implementation with proper bit shifting and masking"},{author:"EdgeCaseHunter",content:"Handles all possible 32-bit patterns including all zeros and all ones"},{author:"AlternativeThinker",content:"Byte-wise reversal with lookup table could be faster for multiple operations"}]},{problemName:"Sum of Two Integers",author:"Bitwise Adder",explanation:"Use bitwise operations to simulate addition: XOR for sum without carry, AND for carry, shift carry left and repeat until no carry.",solution:`class Solution {
public:
    int getSum(int a, int b) {
        while (b != 0) {
            // Calculate carry
            unsigned int carry = a & b;
            
            // Calculate sum without carry
            a = a ^ b;
            
            // Shift carry left by 1 for next iteration
            b = carry << 1;
        }
        
        return a;
    }
};`,notes:"Time: O(1) since 32-bit integers, Space: O(1)",comments:[{author:"BitMaster",content:"Classic bitwise addition algorithm using XOR for sum and AND for carry"},{author:"CodeReviewer42",content:"Clean implementation handling negative numbers through two's complement"},{author:"EdgeCaseHunter",content:"Handles all integer pairs including negative numbers and zero correctly"},{author:"AlternativeThinker",content:"Recursive approach also works but iterative is more space efficient"}]},{problemName:"Divide Two Integers",author:"Bit Manipulation Divider",explanation:"Use bit manipulation to perform division by repeatedly subtracting the largest possible power of 2 times divisor from dividend.",solution:`class Solution {
public:
    int divide(int dividend, int divisor) {
        // Handle overflow case
        if (dividend == INT_MIN && divisor == -1) {
            return INT_MAX;
        }
        
        // Determine sign of result
        bool negative = (dividend < 0) ^ (divisor < 0);
        
        // Convert to positive (use long to handle INT_MIN)
        long long_dividend = labs(dividend);
        long long_divisor = labs(divisor);
        
        long result = 0;
        
        while (long_dividend >= long_divisor) {
            long temp = long_divisor;
            long multiple = 1;
            
            // Find largest power of 2 * divisor that fits in dividend
            while (long_dividend >= (temp << 1)) {
                temp <<= 1;
                multiple <<= 1;
            }
            
            long_dividend -= temp;
            result += multiple;
        }
        
        // Apply sign
        if (negative) {
            result = -result;
        }
        
        // Handle overflow
        if (result > INT_MAX) return INT_MAX;
        if (result < INT_MIN) return INT_MIN;
        
        return result;
    }
};`,notes:"Time: O(log n), Space: O(1)",comments:[{author:"BitMaster",content:"Bit shifting efficiently finds the largest multiples for fast division"},{author:"CodeReviewer42",content:"Proper handling of integer overflow and negative numbers"},{author:"EdgeCaseHunter",content:"Correctly handles edge cases like INT_MIN division and division by 1"},{author:"AlternativeThinker",content:"Logarithmic approach also works but bit manipulation is more efficient"}]},{problemName:"Maximum Product of Word Lengths",author:"Bitmask Comparator",explanation:"Convert each word to a bitmask representing its characters, then compare bitmasks to find words with no common characters.",solution:`class Solution {
public:
    int maxProduct(vector<string>& words) {
        int n = words.size();
        vector<int> bitmasks(n, 0);
        
        // Convert each word to bitmask
        for (int i = 0; i < n; i++) {
            for (char c : words[i]) {
                bitmasks[i] |= (1 << (c - 'a'));
            }
        }
        
        int maxProduct = 0;
        
        // Compare all pairs of words
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                // Check if words have no common characters
                if ((bitmasks[i] & bitmasks[j]) == 0) {
                    int product = words[i].length() * words[j].length();
                    maxProduct = max(maxProduct, product);
                }
            }
        }
        
        return maxProduct;
    }
};`,notes:"Time: O(n² + n*L) where L is word length, Space: O(n)",comments:[{author:"BitMaster",content:"Bitmask representation allows O(1) common character checking"},{author:"CodeReviewer42",content:"Efficient implementation using bitwise AND for character intersection"},{author:"EdgeCaseHunter",content:"Handles empty words and single character words correctly"},{author:"AlternativeThinker",content:"Could pre-sort by length descending to find large products faster"}]},{problemName:"Missing Number",author:"XOR Bit Manipulator",explanation:"Use XOR properties: a ^ a = 0 and a ^ 0 = a. XOR all numbers and indices to find the missing number.",solution:`class Solution {
public:
    int missingNumber(vector<int>& nums) {
        int result = nums.size();
        
        for (int i = 0; i < nums.size(); i++) {
            result ^= i;
            result ^= nums[i];
        }
        
        return result;
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"BitMaster",content:"XOR cancellation property elegantly finds the missing number"},{author:"CodeReviewer42",content:"Clean implementation using XOR to avoid overflow issues"},{author:"EdgeCaseHunter",content:"Handles edge cases like missing 0 or missing last number correctly"},{author:"AlternativeThinker",content:"Sum formula approach also works but may cause integer overflow"}]},{problemName:"Counting Bits",author:"Dynamic Bit Counter",explanation:"Use dynamic programming: number of 1's in i = number of 1's in i/2 + least significant bit of i.",solution:`class Solution {
public:
    vector<int> countBits(int n) {
        vector<int> result(n + 1, 0);
        
        for (int i = 1; i <= n; i++) {
            // result[i] = result[i >> 1] + (i & 1)
            result[i] = result[i / 2] + (i % 2);
        }
        
        return result;
    }
};`,notes:"Time: O(n), Space: O(1) excluding output",comments:[{author:"BitMaster",content:"DP approach leverages the relationship between a number and its half"},{author:"CodeReviewer42",content:"Elegant recurrence relation that builds solution incrementally"},{author:"EdgeCaseHunter",content:"Handles n=0 correctly and generates all counts in linear time"},{author:"AlternativeThinker",content:"Brian Kernighan's algorithm for each number would be O(n log n)"}]},{problemName:"Single Number",author:"XOR Duplicate Remover",explanation:"Use XOR to cancel out duplicate numbers since a ^ a = 0, leaving only the single number.",solution:`class Solution {
public:
    int singleNumber(vector<int>& nums) {
        int result = 0;
        
        for (int num : nums) {
            result ^= num;
        }
        
        return result;
    }
};`,notes:"Time: O(n), Space: O(1)",comments:[{author:"BitMaster",content:"XOR's commutative and associative properties perfectly solve this problem"},{author:"CodeReviewer42",content:"Extremely concise and efficient solution"},{author:"EdgeCaseHunter",content:"Works for any input size and handles negative numbers correctly"},{author:"AlternativeThinker",content:"Hash set approach works but uses O(n) space"}]}];console.log(Ah);const Rh=new Map;Ah.forEach(l=>{Rh.set(l.problemName,l)});const mh=[{name:"Two Sum",difficulty:"easy",topic:"Array",source:"https://leetcode.com/problems/two-sum/"},{name:"Best Time to Buy and Sell Stock",difficulty:"easy",topic:"Array",source:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"},{name:"Contains Duplicate",difficulty:"easy",topic:"Array",source:"https://leetcode.com/problems/contains-duplicate/"},{name:"Remove Duplicates from Sorted Array",difficulty:"easy",topic:"Array",source:"https://leetcode.com/problems/remove-duplicates-from-sorted-array/"},{name:"Move Zeroes",difficulty:"easy",topic:"Array",source:"https://leetcode.com/problems/move-zeroes/"},{name:"Plus One",difficulty:"easy",topic:"Array",source:"https://leetcode.com/problems/plus-one/"},{name:"Single Number",difficulty:"easy",topic:"Array",source:"https://leetcode.com/problems/single-number/"},{name:"Intersection of Two Arrays II",difficulty:"easy",topic:"Array",source:"https://leetcode.com/problems/intersection-of-two-arrays-ii/"},{name:"Valid Sudoku",difficulty:"easy",topic:"Array",source:"https://leetcode.com/problems/valid-sudoku/"},{name:"Rotate Array",difficulty:"easy",topic:"Array",source:"https://leetcode.com/problems/rotate-array/"},{name:"Find All Numbers Disappeared in an Array",difficulty:"easy",topic:"Array",source:"https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/"},{name:"Max Consecutive Ones",difficulty:"easy",topic:"Array",source:"https://leetcode.com/problems/max-consecutive-ones/"},{name:"Reshape the Matrix",difficulty:"easy",topic:"Array",source:"https://leetcode.com/problems/reshape-the-matrix/"},{name:"Pascal's Triangle",difficulty:"easy",topic:"Array",source:"https://leetcode.com/problems/pascals-triangle/"},{name:"Missing Number",difficulty:"easy",topic:"Array",source:"https://leetcode.com/problems/missing-number/"},{name:"Product of Array Except Self",difficulty:"medium",topic:"Array",source:"https://leetcode.com/problems/product-of-array-except-self/"},{name:"Maximum Subarray",difficulty:"medium",topic:"Array",source:"https://leetcode.com/problems/maximum-subarray/"},{name:"Maximum Product Subarray",difficulty:"medium",topic:"Array",source:"https://leetcode.com/problems/maximum-product-subarray/"},{name:"Find Minimum in Rotated Sorted Array",difficulty:"medium",topic:"Array",source:"https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/"},{name:"Search in Rotated Sorted Array",difficulty:"medium",topic:"Array",source:"https://leetcode.com/problems/search-in-rotated-sorted-array/"},{name:"3Sum",difficulty:"medium",topic:"Array",source:"https://leetcode.com/problems/3sum/"},{name:"Container With Most Water",difficulty:"medium",topic:"Array",source:"https://leetcode.com/problems/container-with-most-water/"},{name:"Merge Intervals",difficulty:"medium",topic:"Array",source:"https://leetcode.com/problems/merge-intervals/"},{name:"Insert Interval",difficulty:"medium",topic:"Array",source:"https://leetcode.com/problems/insert-interval/"},{name:"Non-overlapping Intervals",difficulty:"medium",topic:"Array",source:"https://leetcode.com/problems/non-overlapping-intervals/"},{name:"4Sum",difficulty:"medium",topic:"Array",source:"https://leetcode.com/problems/4sum/"},{name:"Jump Game",difficulty:"medium",topic:"Array",source:"https://leetcode.com/problems/jump-game/"},{name:"Jump Game II",difficulty:"medium",topic:"Array",source:"https://leetcode.com/problems/jump-game-ii/"},{name:"Find the Duplicate Number",difficulty:"medium",topic:"Array",source:"https://leetcode.com/problems/find-the-duplicate-number/"},{name:"Subarray Sum Equals K",difficulty:"medium",topic:"Array",source:"https://leetcode.com/problems/subarray-sum-equals-k/"},{name:"Next Permutation",difficulty:"medium",topic:"Array",source:"https://leetcode.com/problems/next-permutation/"},{name:"Spiral Matrix",difficulty:"medium",topic:"Array",source:"https://leetcode.com/problems/spiral-matrix/"},{name:"Set Matrix Zeroes",difficulty:"medium",topic:"Array",source:"https://leetcode.com/problems/set-matrix-zeroes/"},{name:"Rotate Image",difficulty:"medium",topic:"Array",source:"https://leetcode.com/problems/rotate-image/"},{name:"Word Search",difficulty:"medium",topic:"Array",source:"https://leetcode.com/problems/word-search/"},{name:"Trapping Rain Water",difficulty:"hard",topic:"Array",source:"https://leetcode.com/problems/trapping-rain-water/"},{name:"Median of Two Sorted Arrays",difficulty:"hard",topic:"Array",source:"https://leetcode.com/problems/median-of-two-sorted-arrays/"},{name:"First Missing Positive",difficulty:"hard",topic:"Array",source:"https://leetcode.com/problems/first-missing-positive/"},{name:"Sliding Window Maximum",difficulty:"hard",topic:"Array",source:"https://leetcode.com/problems/sliding-window-maximum/"},{name:"Minimum Window Substring",difficulty:"hard",topic:"Array",source:"https://leetcode.com/problems/minimum-window-substring/"},{name:"Largest Rectangle in Histogram",difficulty:"hard",topic:"Array",source:"https://leetcode.com/problems/largest-rectangle-in-histogram/"},{name:"Maximal Rectangle",difficulty:"hard",topic:"Array",source:"https://leetcode.com/problems/maximal-rectangle/"},{name:"Count of Smaller Numbers After Self",difficulty:"hard",topic:"Array",source:"https://leetcode.com/problems/count-of-smaller-numbers-after-self/"},{name:"Candy",difficulty:"hard",topic:"Array",source:"https://leetcode.com/problems/candy/"},{name:"N-Queens",difficulty:"hard",topic:"Array",source:"https://leetcode.com/problems/n-queens/"},{name:"Valid Palindrome",difficulty:"easy",topic:"String",source:"https://leetcode.com/problems/valid-palindrome/"},{name:"Valid Anagram",difficulty:"easy",topic:"String",source:"https://leetcode.com/problems/valid-anagram/"},{name:"First Unique Character in a String",difficulty:"easy",topic:"String",source:"https://leetcode.com/problems/first-unique-character-in-a-string/"},{name:"Reverse String",difficulty:"easy",topic:"String",source:"https://leetcode.com/problems/reverse-string/"},{name:"Reverse Integer",difficulty:"easy",topic:"String",source:"https://leetcode.com/problems/reverse-integer/"},{name:"Implement strStr()",difficulty:"easy",topic:"String",source:"https://leetcode.com/problems/implement-strstr/"},{name:"Longest Common Prefix",difficulty:"easy",topic:"String",source:"https://leetcode.com/problems/longest-common-prefix/"},{name:"Valid Parentheses",difficulty:"easy",topic:"String",source:"https://leetcode.com/problems/valid-parentheses/"},{name:"Roman to Integer",difficulty:"easy",topic:"String",source:"https://leetcode.com/problems/roman-to-integer/"},{name:"Count and Say",difficulty:"easy",topic:"String",source:"https://leetcode.com/problems/count-and-say/"},{name:"Longest Substring Without Repeating Characters",difficulty:"medium",topic:"String",source:"https://leetcode.com/problems/longest-substring-without-repeating-characters/"},{name:"Longest Palindromic Substring",difficulty:"medium",topic:"String",source:"https://leetcode.com/problems/longest-palindromic-substring/"},{name:"Palindromic Substrings",difficulty:"medium",topic:"String",source:"https://leetcode.com/problems/palindromic-substrings/"},{name:"String to Integer (atoi)",difficulty:"medium",topic:"String",source:"https://leetcode.com/problems/string-to-integer-atoi/"},{name:"Longest Repeating Character Replacement",difficulty:"medium",topic:"String",source:"https://leetcode.com/problems/longest-repeating-character-replacement/"},{name:"Group Anagrams",difficulty:"medium",topic:"String",source:"https://leetcode.com/problems/group-anagrams/"},{name:"Generate Parentheses",difficulty:"medium",topic:"String",source:"https://leetcode.com/problems/generate-parentheses/"},{name:"Simplify Path",difficulty:"medium",topic:"String",source:"https://leetcode.com/problems/simplify-path/"},{name:"Letter Combinations of a Phone Number",difficulty:"medium",topic:"String",source:"https://leetcode.com/problems/letter-combinations-of-a-phone-number/"},{name:"Word Break",difficulty:"medium",topic:"String",source:"https://leetcode.com/problems/word-break/"},{name:"Decode String",difficulty:"medium",topic:"String",source:"https://leetcode.com/problems/decode-string/"},{name:"Find All Anagrams in a String",difficulty:"medium",topic:"String",source:"https://leetcode.com/problems/find-all-anagrams-in-a-string/"},{name:"Permutation in String",difficulty:"medium",topic:"String",source:"https://leetcode.com/problems/permutation-in-string/"},{name:"Basic Calculator II",difficulty:"medium",topic:"String",source:"https://leetcode.com/problems/basic-calculator-ii/"},{name:"Integer to Roman",difficulty:"medium",topic:"String",source:"https://leetcode.com/problems/integer-to-roman/"},{name:"Edit Distance",difficulty:"hard",topic:"String",source:"https://leetcode.com/problems/edit-distance/"},{name:"Regular Expression Matching",difficulty:"hard",topic:"String",source:"https://leetcode.com/problems/regular-expression-matching/"},{name:"Wildcard Matching",difficulty:"hard",topic:"String",source:"https://leetcode.com/problems/wildcard-matching/"},{name:"Text Justification",difficulty:"hard",topic:"String",source:"https://leetcode.com/problems/text-justification/"},{name:"Reverse Linked List",difficulty:"easy",topic:"Linked List",source:"https://leetcode.com/problems/reverse-linked-list/"},{name:"Merge Two Sorted Lists",difficulty:"easy",topic:"Linked List",source:"https://leetcode.com/problems/merge-two-sorted-lists/"},{name:"Linked List Cycle",difficulty:"easy",topic:"Linked List",source:"https://leetcode.com/problems/linked-list-cycle/"},{name:"Palindrome Linked List",difficulty:"easy",topic:"Linked List",source:"https://leetcode.com/problems/palindrome-linked-list/"},{name:"Remove Linked List Elements",difficulty:"easy",topic:"Linked List",source:"https://leetcode.com/problems/remove-linked-list-elements/"},{name:"Middle of the Linked List",difficulty:"easy",topic:"Linked List",source:"https://leetcode.com/problems/middle-of-the-linked-list/"},{name:"Convert Binary Number in a Linked List to Integer",difficulty:"easy",topic:"Linked List",source:"https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/"},{name:"Intersection of Two Linked Lists",difficulty:"easy",topic:"Linked List",source:"https://leetcode.com/problems/intersection-of-two-linked-lists/"},{name:"Delete Node in a Linked List",difficulty:"easy",topic:"Linked List",source:"https://leetcode.com/problems/delete-node-in-a-linked-list/"},{name:"Design Linked List",difficulty:"easy",topic:"Linked List",source:"https://leetcode.com/problems/design-linked-list/"},{name:"Remove Nth Node From End of List",difficulty:"medium",topic:"Linked List",source:"https://leetcode.com/problems/remove-nth-node-from-end-of-list/"},{name:"Copy List with Random Pointer",difficulty:"medium",topic:"Linked List",source:"https://leetcode.com/problems/copy-list-with-random-pointer/"},{name:"Add Two Numbers",difficulty:"medium",topic:"Linked List",source:"https://leetcode.com/problems/add-two-numbers/"},{name:"Sort List",difficulty:"medium",topic:"Linked List",source:"https://leetcode.com/problems/sort-list/"},{name:"Reorder List",difficulty:"medium",topic:"Linked List",source:"https://leetcode.com/problems/reorder-list/"},{name:"Flatten a Multilevel Doubly Linked List",difficulty:"medium",topic:"Linked List",source:"https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/"},{name:"LRU Cache",difficulty:"medium",topic:"Linked List",source:"https://leetcode.com/problems/lru-cache/"},{name:"Odd Even Linked List",difficulty:"medium",topic:"Linked List",source:"https://leetcode.com/problems/odd-even-linked-list/"},{name:"Partition List",difficulty:"medium",topic:"Linked List",source:"https://leetcode.com/problems/partition-list/"},{name:"Merge k Sorted Lists",difficulty:"hard",topic:"Linked List",source:"https://leetcode.com/problems/merge-k-sorted-lists/"},{name:"Reverse Nodes in k-Group",difficulty:"hard",topic:"Linked List",source:"https://leetcode.com/problems/reverse-nodes-in-k-group/"},{name:"LFU Cache",difficulty:"hard",topic:"Linked List",source:"https://leetcode.com/problems/lfu-cache/"},{name:"All O`one Data Structure",difficulty:"hard",topic:"Linked List",source:"https://leetcode.com/problems/all-oone-data-structure/"},{name:"Design Skiplist",difficulty:"hard",topic:"Linked List",source:"https://leetcode.com/problems/design-skiplist/"},{name:"Maximum Depth of Binary Tree",difficulty:"easy",topic:"Binary Tree",source:"https://leetcode.com/problems/maximum-depth-of-binary-tree/"},{name:"Same Tree",difficulty:"easy",topic:"Binary Tree",source:"https://leetcode.com/problems/same-tree/"},{name:"Invert Binary Tree",difficulty:"easy",topic:"Binary Tree",source:"https://leetcode.com/problems/invert-binary-tree/"},{name:"Symmetric Tree",difficulty:"easy",topic:"Binary Tree",source:"https://leetcode.com/problems/symmetric-tree/"},{name:"Path Sum",difficulty:"easy",topic:"Binary Tree",source:"https://leetcode.com/problems/path-sum/"},{name:"Binary Tree Inorder Traversal",difficulty:"easy",topic:"Binary Tree",source:"https://leetcode.com/problems/binary-tree-inorder-traversal/"},{name:"Binary Tree Preorder Traversal",difficulty:"easy",topic:"Binary Tree",source:"https://leetcode.com/problems/binary-tree-preorder-traversal/"},{name:"Binary Tree Postorder Traversal",difficulty:"easy",topic:"Binary Tree",source:"https://leetcode.com/problems/binary-tree-postorder-traversal/"},{name:"Convert Sorted Array to Binary Search Tree",difficulty:"easy",topic:"Binary Tree",source:"https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/"},{name:"Balanced Binary Tree",difficulty:"easy",topic:"Binary Tree",source:"https://leetcode.com/problems/balanced-binary-tree/"},{name:"Minimum Depth of Binary Tree",difficulty:"easy",topic:"Binary Tree",source:"https://leetcode.com/problems/minimum-depth-of-binary-tree/"},{name:"Diameter of Binary Tree",difficulty:"easy",topic:"Binary Tree",source:"https://leetcode.com/problems/diameter-of-binary-tree/"},{name:"Binary Tree Level Order Traversal",difficulty:"medium",topic:"Binary Tree",source:"https://leetcode.com/problems/binary-tree-level-order-traversal/"},{name:"Validate Binary Search Tree",difficulty:"medium",topic:"Binary Tree",source:"https://leetcode.com/problems/validate-binary-search-tree/"},{name:"Kth Smallest Element in a BST",difficulty:"medium",topic:"Binary Tree",source:"https://leetcode.com/problems/kth-smallest-element-in-a-bst/"},{name:"Construct Binary Tree from Preorder and Inorder Traversal",difficulty:"medium",topic:"Binary Tree",source:"https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/"},{name:"Construct Binary Tree from Inorder and Postorder Traversal",difficulty:"medium",topic:"Binary Tree",source:"https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/"},{name:"Lowest Common Ancestor of a Binary Tree",difficulty:"medium",topic:"Binary Tree",source:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/"},{name:"Binary Tree Right Side View",difficulty:"medium",topic:"Binary Tree",source:"https://leetcode.com/problems/binary-tree-right-side-view/"},{name:"Count Complete Tree Nodes",difficulty:"medium",topic:"Binary Tree",source:"https://leetcode.com/problems/count-complete-tree-nodes/"},{name:"Serialize and Deserialize Binary Tree",difficulty:"medium",topic:"Binary Tree",source:"https://leetcode.com/problems/serialize-and-deserialize-binary-tree/"},{name:"Flatten Binary Tree to Linked List",difficulty:"medium",topic:"Binary Tree",source:"https://leetcode.com/problems/flatten-binary-tree-to-linked-list/"},{name:"Populating Next Right Pointers in Each Node",difficulty:"medium",topic:"Binary Tree",source:"https://leetcode.com/problems/populating-next-right-pointers-in-each-node/"},{name:"Sum Root to Leaf Numbers",difficulty:"medium",topic:"Binary Tree",source:"https://leetcode.com/problems/sum-root-to-leaf-numbers/"},{name:"House Robber III",difficulty:"medium",topic:"Binary Tree",source:"https://leetcode.com/problems/house-robber-iii/"},{name:"Path Sum III",difficulty:"medium",topic:"Binary Tree",source:"https://leetcode.com/problems/path-sum-iii/"},{name:"Find Largest Value in Each Tree Row",difficulty:"medium",topic:"Binary Tree",source:"https://leetcode.com/problems/find-largest-value-in-each-tree-row/"},{name:"Binary Tree Maximum Path Sum",difficulty:"hard",topic:"Binary Tree",source:"https://leetcode.com/problems/binary-tree-maximum-path-sum/"},{name:"Serialize and Deserialize BST",difficulty:"hard",topic:"Binary Tree",source:"https://leetcode.com/problems/serialize-and-deserialize-bst/"},{name:"Recover Binary Search Tree",difficulty:"hard",topic:"Binary Tree",source:"https://leetcode.com/problems/recover-binary-search-tree/"},{name:"Vertical Order Traversal of a Binary Tree",difficulty:"hard",topic:"Binary Tree",source:"https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/"},{name:"Binary Tree Cameras",difficulty:"hard",topic:"Binary Tree",source:"https://leetcode.com/problems/binary-tree-cameras/"},{name:"Sum of Distances in Tree",difficulty:"hard",topic:"Binary Tree",source:"https://leetcode.com/problems/sum-of-distances-in-tree/"},{name:"Number of Ways to Reorder Array to Get Same BST",difficulty:"hard",topic:"Binary Tree",source:"https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/"},{name:"Step-By-Step Directions From a Binary Tree Node to Another",difficulty:"hard",topic:"Binary Tree",source:"https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/"},{name:"Climbing Stairs",difficulty:"easy",topic:"Dynamic Programming",source:"https://leetcode.com/problems/climbing-stairs/"},{name:"House Robber",difficulty:"easy",topic:"Dynamic Programming",source:"https://leetcode.com/problems/house-robber/"},{name:"Divisor Game",difficulty:"easy",topic:"Dynamic Programming",source:"https://leetcode.com/problems/divisor-game/"},{name:"Fibonacci Number",difficulty:"easy",topic:"Dynamic Programming",source:"https://leetcode.com/problems/fibonacci-number/"},{name:"N-th Tribonacci Number",difficulty:"easy",topic:"Dynamic Programming",source:"https://leetcode.com/problems/n-th-tribonacci-number/"},{name:"Min Cost Climbing Stairs",difficulty:"easy",topic:"Dynamic Programming",source:"https://leetcode.com/problems/min-cost-climbing-stairs/"},{name:"Counting Bits",difficulty:"easy",topic:"Dynamic Programming",source:"https://leetcode.com/problems/counting-bits/"},{name:"Is Subsequence",difficulty:"easy",topic:"Dynamic Programming",source:"https://leetcode.com/problems/is-subsequence/"},{name:"Coin Change",difficulty:"medium",topic:"Dynamic Programming",source:"https://leetcode.com/problems/coin-change/"},{name:"Longest Increasing Subsequence",difficulty:"medium",topic:"Dynamic Programming",source:"https://leetcode.com/problems/longest-increasing-subsequence/"},{name:"Unique Paths",difficulty:"medium",topic:"Dynamic Programming",source:"https://leetcode.com/problems/unique-paths/"},{name:"Longest Common Subsequence",difficulty:"medium",topic:"Dynamic Programming",source:"https://leetcode.com/problems/longest-common-subsequence/"},{name:"Partition Equal Subset Sum",difficulty:"medium",topic:"Dynamic Programming",source:"https://leetcode.com/problems/partition-equal-subset-sum/"},{name:"Target Sum",difficulty:"medium",topic:"Dynamic Programming",source:"https://leetcode.com/problems/target-sum/"},{name:"Decode Ways",difficulty:"medium",topic:"Dynamic Programming",source:"https://leetcode.com/problems/decode-ways/"},{name:"Perfect Squares",difficulty:"medium",topic:"Dynamic Programming",source:"https://leetcode.com/problems/perfect-squares/"},{name:"Coin Change II",difficulty:"medium",topic:"Dynamic Programming",source:"https://leetcode.com/problems/coin-change-ii/"},{name:"Unique Paths II",difficulty:"medium",topic:"Dynamic Programming",source:"https://leetcode.com/problems/unique-paths-ii/"},{name:"Best Time to Buy and Sell Stock III",difficulty:"hard",topic:"Dynamic Programming",source:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/"},{name:"Best Time to Buy and Sell Stock IV",difficulty:"hard",topic:"Dynamic Programming",source:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/"},{name:"Maximum Profit in Job Scheduling",difficulty:"hard",topic:"Dynamic Programming",source:"https://leetcode.com/problems/maximum-profit-in-job-scheduling/"},{name:"Russian Doll Envelopes",difficulty:"hard",topic:"Dynamic Programming",source:"https://leetcode.com/problems/russian-doll-envelopes/"},{name:"Dungeon Game",difficulty:"hard",topic:"Dynamic Programming",source:"https://leetcode.com/problems/dungeon-game/"},{name:"Burst Balloons",difficulty:"hard",topic:"Dynamic Programming",source:"https://leetcode.com/problems/burst-balloons/"},{name:"Palindrome Partitioning II",difficulty:"hard",topic:"Dynamic Programming",source:"https://leetcode.com/problems/palindrome-partitioning-ii/"},{name:"Number of Islands",difficulty:"easy",topic:"Graph",source:"https://leetcode.com/problems/number-of-islands/"},{name:"Flood Fill",difficulty:"easy",topic:"Graph",source:"https://leetcode.com/problems/flood-fill/"},{name:"Find the Town Judge",difficulty:"easy",topic:"Graph",source:"https://leetcode.com/problems/find-the-town-judge/"},{name:"Find Center of Star Graph",difficulty:"easy",topic:"Graph",source:"https://leetcode.com/problems/find-center-of-star-graph/"},{name:"Island Perimeter",difficulty:"easy",topic:"Graph",source:"https://leetcode.com/problems/island-perimeter/"},{name:"Max Area of Island",difficulty:"easy",topic:"Graph",source:"https://leetcode.com/problems/max-area-of-island/"},{name:"Employee Importance",difficulty:"easy",topic:"Graph",source:"https://leetcode.com/problems/employee-importance/"},{name:"Keys and Rooms",difficulty:"easy",topic:"Graph",source:"https://leetcode.com/problems/keys-and-rooms/"},{name:"Clone Graph",difficulty:"medium",topic:"Graph",source:"https://leetcode.com/problems/clone-graph/"},{name:"Course Schedule",difficulty:"medium",topic:"Graph",source:"https://leetcode.com/problems/course-schedule/"},{name:"Pacific Atlantic Water Flow",difficulty:"medium",topic:"Graph",source:"https://leetcode.com/problems/pacific-atlantic-water-flow/"},{name:"Word Ladder",difficulty:"medium",topic:"Graph",source:"https://leetcode.com/problems/word-ladder/"},{name:"Graph Valid Tree",difficulty:"medium",topic:"Graph",source:"https://leetcode.com/problems/graph-valid-tree/"},{name:"Number of Connected Components in an Undirected Graph",difficulty:"medium",topic:"Graph",source:"https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/"},{name:"Course Schedule II",difficulty:"medium",topic:"Graph",source:"https://leetcode.com/problems/course-schedule-ii/"},{name:"Alien Dictionary",difficulty:"medium",topic:"Graph",source:"https://leetcode.com/problems/alien-dictionary/"},{name:"Cheapest Flights Within K Stops",difficulty:"medium",topic:"Graph",source:"https://leetcode.com/problems/cheapest-flights-within-k-stops/"},{name:"Network Delay Time",difficulty:"medium",topic:"Graph",source:"https://leetcode.com/problems/network-delay-time/"},{name:"Shortest Path in Binary Matrix",difficulty:"medium",topic:"Graph",source:"https://leetcode.com/problems/shortest-path-in-binary-matrix/"},{name:"Rotting Oranges",difficulty:"medium",topic:"Graph",source:"https://leetcode.com/problems/rotting-oranges/"},{name:"Walls and Gates",difficulty:"medium",topic:"Graph",source:"https://leetcode.com/problems/walls-and-gates/"},{name:"Surrounded Regions",difficulty:"medium",topic:"Graph",source:"https://leetcode.com/problems/surrounded-regions/"},{name:"Redundant Connection",difficulty:"medium",topic:"Graph",source:"https://leetcode.com/problems/redundant-connection/"},{name:"Word Ladder II",difficulty:"hard",topic:"Graph",source:"https://leetcode.com/problems/word-ladder-ii/"},{name:"Reconstruct Itinerary",difficulty:"hard",topic:"Graph",source:"https://leetcode.com/problems/reconstruct-itinerary/"},{name:"Minimum Height Trees",difficulty:"hard",topic:"Graph",source:"https://leetcode.com/problems/minimum-height-trees/"},{name:"Critical Connections in a Network",difficulty:"hard",topic:"Graph",source:"https://leetcode.com/problems/critical-connections-in-a-network/"},{name:"Swim in Rising Water",difficulty:"hard",topic:"Graph",source:"https://leetcode.com/problems/swim-in-rising-water/"},{name:"Sliding Puzzle",difficulty:"hard",topic:"Graph",source:"https://leetcode.com/problems/sliding-puzzle/"},{name:"Shortest Path to Get All Keys",difficulty:"hard",topic:"Graph",source:"https://leetcode.com/problems/shortest-path-to-get-all-keys/"},{name:"Binary Search",difficulty:"easy",topic:"Binary Search",source:"https://leetcode.com/problems/binary-search/"},{name:"First Bad Version",difficulty:"easy",topic:"Binary Search",source:"https://leetcode.com/problems/first-bad-version/"},{name:"Search Insert Position",difficulty:"easy",topic:"Binary Search",source:"https://leetcode.com/problems/search-insert-position/"},{name:"Sqrt(x)",difficulty:"easy",topic:"Binary Search",source:"https://leetcode.com/problems/sqrtx/"},{name:"Arranging Coins",difficulty:"easy",topic:"Binary Search",source:"https://leetcode.com/problems/arranging-coins/"},{name:"Valid Perfect Square",difficulty:"easy",topic:"Binary Search",source:"https://leetcode.com/problems/valid-perfect-square/"},{name:"Search a 2D Matrix",difficulty:"medium",topic:"Binary Search",source:"https://leetcode.com/problems/search-a-2d-matrix/"},{name:"Find First and Last Position of Element in Sorted Array",difficulty:"medium",topic:"Binary Search",source:"https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/"},{name:"Capacity To Ship Packages Within D Days",difficulty:"medium",topic:"Binary Search",source:"https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/"},{name:"Split Array Largest Sum",difficulty:"medium",topic:"Binary Search",source:"https://leetcode.com/problems/split-array-largest-sum/"},{name:"Koko Eating Bananas",difficulty:"medium",topic:"Binary Search",source:"https://leetcode.com/problems/koko-eating-bananas/"},{name:"Find Peak Element",difficulty:"medium",topic:"Binary Search",source:"https://leetcode.com/problems/find-peak-element/"},{name:"Search in Rotated Sorted Array II",difficulty:"medium",topic:"Binary Search",source:"https://leetcode.com/problems/search-in-rotated-sorted-array-ii/"},{name:"Time Based Key-Value Store",difficulty:"medium",topic:"Binary Search",source:"https://leetcode.com/problems/time-based-key-value-store/"},{name:"Find Minimum in Rotated Sorted Array II",difficulty:"hard",topic:"Binary Search",source:"https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/"},{name:"Max Sum of Rectangle No Larger Than K",difficulty:"hard",topic:"Binary Search",source:"https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/"},{name:"Kth Largest Element in a Stream",difficulty:"easy",topic:"Heap",source:"https://leetcode.com/problems/kth-largest-element-in-a-stream/"},{name:"Last Stone Weight",difficulty:"easy",topic:"Heap",source:"https://leetcode.com/problems/last-stone-weight/"},{name:"The K Weakest Rows in a Matrix",difficulty:"easy",topic:"Heap",source:"https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/"},{name:"Maximum Product of Two Elements in an Array",difficulty:"easy",topic:"Heap",source:"https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/"},{name:"Kth Largest Element in an Array",difficulty:"medium",topic:"Heap",source:"https://leetcode.com/problems/kth-largest-element-in-an-array/"},{name:"Top K Frequent Elements",difficulty:"medium",topic:"Heap",source:"https://leetcode.com/problems/top-k-frequent-elements/"},{name:"Sort Characters By Frequency",difficulty:"medium",topic:"Heap",source:"https://leetcode.com/problems/sort-characters-by-frequency/"},{name:"K Closest Points to Origin",difficulty:"medium",topic:"Heap",source:"https://leetcode.com/problems/k-closest-points-to-origin/"},{name:"Reorganize String",difficulty:"medium",topic:"Heap",source:"https://leetcode.com/problems/reorganize-string/"},{name:"Task Scheduler",difficulty:"medium",topic:"Heap",source:"https://leetcode.com/problems/task-scheduler/"},{name:"Find K Pairs with Smallest Sums",difficulty:"medium",topic:"Heap",source:"https://leetcode.com/problems/find-k-pairs-with-smallest-sums/"},{name:"Kth Smallest Element in a Sorted Matrix",difficulty:"medium",topic:"Heap",source:"https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/"},{name:"Find Median from Data Stream",difficulty:"hard",topic:"Heap",source:"https://leetcode.com/problems/find-median-from-data-stream/"},{name:"Sliding Window Median",difficulty:"hard",topic:"Heap",source:"https://leetcode.com/problems/sliding-window-median/"},{name:"IPO",difficulty:"hard",topic:"Heap",source:"https://leetcode.com/problems/ipo/"},{name:"Min Stack",difficulty:"easy",topic:"Stack",source:"https://leetcode.com/problems/min-stack/"},{name:"Implement Queue using Stacks",difficulty:"easy",topic:"Stack",source:"https://leetcode.com/problems/implement-queue-using-stacks/"},{name:"Next Greater Element I",difficulty:"easy",topic:"Stack",source:"https://leetcode.com/problems/next-greater-element-i/"},{name:"Backspace String Compare",difficulty:"easy",topic:"Stack",source:"https://leetcode.com/problems/backspace-string-compare/"},{name:"Remove All Adjacent Duplicates In String",difficulty:"easy",topic:"Stack",source:"https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/"},{name:"Evaluate Reverse Polish Notation",difficulty:"medium",topic:"Stack",source:"https://leetcode.com/problems/evaluate-reverse-polish-notation/"},{name:"Daily Temperatures",difficulty:"medium",topic:"Stack",source:"https://leetcode.com/problems/daily-temperatures/"},{name:"Asteroid Collision",difficulty:"medium",topic:"Stack",source:"https://leetcode.com/problems/asteroid-collision/"},{name:"Remove K Digits",difficulty:"medium",topic:"Stack",source:"https://leetcode.com/problems/remove-k-digits/"},{name:"132 Pattern",difficulty:"medium",topic:"Stack",source:"https://leetcode.com/problems/132-pattern/"},{name:"Next Greater Element II",difficulty:"medium",topic:"Stack",source:"https://leetcode.com/problems/next-greater-element-ii/"},{name:"Validate Stack Sequences",difficulty:"medium",topic:"Stack",source:"https://leetcode.com/problems/validate-stack-sequences/"},{name:"Minimum Remove to Make Valid Parentheses",difficulty:"medium",topic:"Stack",source:"https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/"},{name:"Basic Calculator",difficulty:"medium",topic:"Stack",source:"https://leetcode.com/problems/basic-calculator/"},{name:"Basic Calculator III",difficulty:"hard",topic:"Stack",source:"https://leetcode.com/problems/basic-calculator-iii/"},{name:"Longest Valid Parentheses",difficulty:"hard",topic:"Stack",source:"https://leetcode.com/problems/longest-valid-parentheses/"},{name:"Intersection of Two Arrays",difficulty:"easy",topic:"Hash Table",source:"https://leetcode.com/problems/intersection-of-two-arrays/"},{name:"Happy Number",difficulty:"easy",topic:"Hash Table",source:"https://leetcode.com/problems/happy-number/"},{name:"Isomorphic Strings",difficulty:"easy",topic:"Hash Table",source:"https://leetcode.com/problems/isomorphic-strings/"},{name:"Word Pattern",difficulty:"easy",topic:"Hash Table",source:"https://leetcode.com/problems/word-pattern/"},{name:"Longest Consecutive Sequence",difficulty:"medium",topic:"Hash Table",source:"https://leetcode.com/problems/longest-consecutive-sequence/"},{name:"Insert Delete GetRandom O(1)",difficulty:"medium",topic:"Hash Table",source:"https://leetcode.com/problems/insert-delete-getrandom-o1/"},{name:"Design Underground System",difficulty:"medium",topic:"Hash Table",source:"https://leetcode.com/problems/design-underground-system/"},{name:"Find Duplicate File in System",difficulty:"medium",topic:"Hash Table",source:"https://leetcode.com/problems/find-duplicate-file-in-system/"},{name:"Brick Wall",difficulty:"medium",topic:"Hash Table",source:"https://leetcode.com/problems/brick-wall/"},{name:"Contiguous Array",difficulty:"medium",topic:"Hash Table",source:"https://leetcode.com/problems/contiguous-array/"},{name:"Find All Duplicates in an Array",difficulty:"medium",topic:"Hash Table",source:"https://leetcode.com/problems/find-all-duplicates-in-an-array/"},{name:"Encode and Decode TinyURL",difficulty:"medium",topic:"Hash Table",source:"https://leetcode.com/problems/encode-and-decode-tinyurl/"},{name:"Sudoku Solver",difficulty:"hard",topic:"Hash Table",source:"https://leetcode.com/problems/sudoku-solver/"},{name:"Word Squares",difficulty:"hard",topic:"Hash Table",source:"https://leetcode.com/problems/word-squares/"},{name:"Search in a Binary Search Tree",difficulty:"easy",topic:"Binary Search Tree",source:"https://leetcode.com/problems/search-in-a-binary-search-tree/"},{name:"Insert into a Binary Search Tree",difficulty:"easy",topic:"Binary Search Tree",source:"https://leetcode.com/problems/insert-into-a-binary-search-tree/"},{name:"Delete Node in a BST",difficulty:"easy",topic:"Binary Search Tree",source:"https://leetcode.com/problems/delete-node-in-a-bst/"},{name:"Lowest Common Ancestor of a Binary Search Tree",difficulty:"easy",topic:"Binary Search Tree",source:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/"},{name:"Binary Search Tree Iterator",difficulty:"medium",topic:"Binary Search Tree",source:"https://leetcode.com/problems/binary-search-tree-iterator/"},{name:"Swap Nodes in Pairs",difficulty:"easy",topic:"Recursion",source:"https://leetcode.com/problems/swap-nodes-in-pairs/"},{name:"Permutations",difficulty:"medium",topic:"Recursion",source:"https://leetcode.com/problems/permutations/"},{name:"Subsets",difficulty:"medium",topic:"Recursion",source:"https://leetcode.com/problems/subsets/"},{name:"Combination Sum",difficulty:"medium",topic:"Recursion",source:"https://leetcode.com/problems/combination-sum/"},{name:"Toeplitz Matrix",difficulty:"easy",topic:"Matrix",source:"https://leetcode.com/problems/toeplitz-matrix/"},{name:"Transpose Matrix",difficulty:"easy",topic:"Matrix",source:"https://leetcode.com/problems/transpose-matrix/"},{name:"Matrix Diagonal Sum",difficulty:"easy",topic:"Matrix",source:"https://leetcode.com/problems/matrix-diagonal-sum/"},{name:"Game of Life",difficulty:"hard",topic:"Matrix",source:"https://leetcode.com/problems/game-of-life/"},{name:"Implement Stack using Queues",difficulty:"easy",topic:"Queue",source:"https://leetcode.com/problems/implement-stack-using-queues/"},{name:"Number of Recent Calls",difficulty:"easy",topic:"Queue",source:"https://leetcode.com/problems/number-of-recent-calls/"},{name:"Moving Average from Data Stream",difficulty:"easy",topic:"Queue",source:"https://leetcode.com/problems/moving-average-from-data-stream/"},{name:"Open the Lock",difficulty:"medium",topic:"Queue",source:"https://leetcode.com/problems/open-the-lock/"},{name:"Design Circular Queue",difficulty:"medium",topic:"Queue",source:"https://leetcode.com/problems/design-circular-queue/"},{name:"First Unique Number",difficulty:"hard",topic:"Queue",source:"https://leetcode.com/problems/first-unique-number/"},{name:"Fizz Buzz",difficulty:"easy",topic:"Math",source:"https://leetcode.com/problems/fizz-buzz/"},{name:"Count Primes",difficulty:"easy",topic:"Math",source:"https://leetcode.com/problems/count-primes/"},{name:"Power of Three",difficulty:"easy",topic:"Math",source:"https://leetcode.com/problems/power-of-three/"},{name:"Factorial Trailing Zeroes",difficulty:"medium",topic:"Math",source:"https://leetcode.com/problems/factorial-trailing-zeroes/"},{name:"Excel Sheet Column Number",difficulty:"medium",topic:"Math",source:"https://leetcode.com/problems/excel-sheet-column-number/"},{name:"Pow(x, n)",difficulty:"medium",topic:"Math",source:"https://leetcode.com/problems/powx-n/"},{name:"Max Points on a Line",difficulty:"hard",topic:"Math",source:"https://leetcode.com/problems/max-points-on-a-line/"},{name:"Implement Trie (Prefix Tree)",difficulty:"easy",topic:"Trie",source:"https://leetcode.com/problems/implement-trie-prefix-tree/"},{name:"Add and Search Word",difficulty:"medium",topic:"Trie",source:"https://leetcode.com/problems/add-and-search-word-data-structure-design/"},{name:"Word Search II",difficulty:"medium",topic:"Trie",source:"https://leetcode.com/problems/word-search-ii/"},{name:"Replace Words",difficulty:"medium",topic:"Trie",source:"https://leetcode.com/problems/replace-words/"},{name:"Map Sum Pairs",difficulty:"medium",topic:"Trie",source:"https://leetcode.com/problems/map-sum-pairs/"},{name:"Concatenated Words",difficulty:"hard",topic:"Trie",source:"https://leetcode.com/problems/concatenated-words/"},{name:"Palindrome Pairs",difficulty:"hard",topic:"Trie",source:"https://leetcode.com/problems/palindrome-pairs/"},{name:"Number of 1 Bits",difficulty:"easy",topic:"Binary",source:"https://leetcode.com/problems/number-of-1-bits/"},{name:"Reverse Bits",difficulty:"easy",topic:"Binary",source:"https://leetcode.com/problems/reverse-bits/"},{name:"Sum of Two Integers",difficulty:"medium",topic:"Binary",source:"https://leetcode.com/problems/sum-of-two-integers/"},{name:"Divide Two Integers",difficulty:"hard",topic:"Binary",source:"https://leetcode.com/problems/divide-two-integers/"},{name:"Maximum Product of Word Lengths",difficulty:"hard",topic:"Binary",source:"https://leetcode.com/problems/maximum-product-of-word-lengths/"}],$n=E.createContext(),Fv=({children:l})=>{const[d,c]=E.useState(""),[s,h]=E.useState([...Uv]),[f,S]=E.useState([...Gv]),[C,y]=E.useState([...mh]),v=Gr(),M=(W,L,G,Y)=>{const P=L.filter(({chosen:$})=>$).map(({level:$})=>$),ye=G.filter(({chosen:$})=>$).map(({name:$})=>$),ke=({name:$})=>W?$.toLowerCase().includes(W.toLowerCase()):!0,ze=({difficulty:$})=>P.includes($),J=({topic:$})=>ye.length===0?!0:ye.includes($),Ae=$=>ke($)&&ze($)&&J($);return Y.map($=>({...$,chosen:Ae($)}))},O=W=>{const L=new Map;return W.forEach(G=>{L.set(G.name,G)}),L},[j,H]=E.useState(O(mh));E.useEffect(()=>{const W=M(d,s,f,C);H(O(W)),y(W),v("/search")},[d,s,f]);const F={keyword:d,setKeyword:c,difficulties:s,setDifficulties:h,topics:f,setTopics:S,problems:C,setProblems:y,problemMap:j,setProblemMap:H};return A.jsx(A.Fragment,{children:A.jsx($n.Provider,{value:F,children:l})})},Wv=({problem:l,index:d})=>{const{name:c,difficulty:s,topic:h,source:f}=l,{difficulties:S}=E.useContext($n),C=Gr(),v=(()=>{const{labelColor:H}=S.find(({level:F})=>F===s);return H})(),M=()=>{const H={color:v};return A.jsx("span",{className:`${at["difficulty-tag"]}`,style:H,children:s})},O=()=>A.jsx("span",{className:`${at["topic-tag"]}`,children:h}),j=()=>{C(`solution/${c}`)};return A.jsx(A.Fragment,{children:A.jsxs("div",{className:`${at["result-card"]}`,onClick:j,children:[A.jsx("span",{className:`${at["result-index"]}`,children:d+1}),A.jsxs("div",{className:`${at["result-info"]}`,children:[A.jsx("a",{className:`${at["result-name"]}`,href:f,target:"_blank",onClick:H=>H.stopPropagation(),children:c}),A.jsxs("div",{className:`${at["result-tag-container"]}`,children:[A.jsx(M,{}),A.jsx(O,{})]})]}),A.jsx("span",{className:`${at["result-arrow"]}`,children:">"})]})})},Vv=()=>{const{keyword:l,difficulties:d,topics:c,problems:s}=E.useContext($n),f=s.filter(({chosen:C})=>C).map(C=>C);return A.jsx(A.Fragment,{children:A.jsxs("div",{className:`${at.container}`,children:[A.jsx("h1",{className:`${at["search-page-heading"]}`,children:"Find your LeetCode Solution here"}),A.jsx("p",{className:`${at["search-page-subheading"]}`,children:"Here you can find a great resource for solutions that helps you to understand LeetCode problems."}),A.jsxs("div",{className:`${at["result-container"]}`,children:[A.jsx("h2",{className:`${at["result-container-heading"]}`,children:"Solutions"}),A.jsx("div",{className:`${at["result-card-container"]}`,children:f.map((S,C)=>A.jsx(Wv,{problem:S,index:C},S.name))})]})]})})},Xv="_container_1s99l_1",Yv={container:Xv},Qv="_container_vqwya_1",Le={container:Qv,"sticky-container":"_sticky-container_vqwya_11","preference-container":"_preference-container_vqwya_21","preference-message":"_preference-message_vqwya_47","preference-label":"_preference-label_vqwya_63","keyword-form":"_keyword-form_vqwya_81","keyword-input":"_keyword-input_vqwya_89","difficulty-checkbox-container":"_difficulty-checkbox-container_vqwya_109","difficulty-checkbox-input":"_difficulty-checkbox-input_vqwya_123","difficulty-checkbox-label":"_difficulty-checkbox-label_vqwya_149","topics-container":"_topics-container_vqwya_165","topic-checkbox-container":"_topic-checkbox-container_vqwya_175","topic-checkbox-input":"_topic-checkbox-input_vqwya_189","topic-checkbox-label":"_topic-checkbox-label_vqwya_219"},Pv=()=>{const{keyword:l,setKeyword:d}=E.useContext($n),[c,s]=E.useState(l),h=Gr(),f=C=>{s(C.target.value)},S=C=>{C.preventDefault(),d(c),h("/")};return A.jsx(A.Fragment,{children:A.jsxs("div",{className:`${Le["preference-container"]}`,children:[A.jsx("legend",{className:`${Le["preference-label"]}`,children:"Search by keyword"}),A.jsx("form",{className:`${Le["keyword-form"]}`,onSubmit:S,children:A.jsx("input",{className:`${Le["keyword-input"]}`,id:"keyword",type:"text",name:"keyword",placeholder:"Input keyword",value:c,onChange:f})})]})})},Kv=({difficulty:l,onChange:d})=>{const{level:c,labelColor:s,chosen:h}=l,f={color:s},S={accentColor:s,border:`1px solid ${s}`},C=y=>{d&&d(l,y.target.checked)};return A.jsx(A.Fragment,{children:A.jsxs("div",{className:`${Le["difficulty-checkbox-container"]}`,children:[A.jsx("input",{className:`${Le["difficulty-checkbox-input"]}`,style:S,type:"checkbox",checked:h,onChange:C,id:c,name:c}),A.jsx("label",{className:`${Le["difficulty-checkbox-label"]}`,htmlFor:c,style:f,children:c})]})})},Zv=()=>{const{difficulties:l,setDifficulties:d}=E.useContext($n),c=(s,h)=>{const f={...s,chosen:h},S=l.map(C=>C===s?f:C);d(S)};return A.jsx(A.Fragment,{children:A.jsxs("div",{className:`${Le["preference-container"]}`,children:[A.jsx("legend",{className:`${Le["preference-label"]}`,children:"Difficulty"}),l.map(s=>A.jsx(Kv,{difficulty:s,onChange:c},s.level))]})})},Iv=({topic:l,onChange:d})=>{const{name:c,chosen:s}=l,h=f=>{d&&d(l,f.target.checked)};return A.jsx(A.Fragment,{children:A.jsxs("div",{className:`${Le["topic-checkbox-container"]}`,children:[A.jsx("input",{className:`${Le["topic-checkbox-input"]}`,type:"checkbox",checked:s,onChange:h,id:c,name:c}),A.jsx("label",{className:`${Le["topic-checkbox-label"]}`,htmlFor:c,children:c})]})})},Jv=()=>{const{topics:l,setTopics:d}=E.useContext($n),c=(s,h)=>{const f={...s,chosen:h},S=l.map(C=>C===s?f:C);d(S)};return A.jsx(A.Fragment,{children:A.jsxs("div",{className:`${Le["preference-container"]}`,children:[A.jsx("legend",{className:`${Le["preference-label"]}`,children:"Topics"}),A.jsx("div",{className:`${Le["topics-container"]}`,children:l.map(s=>A.jsx(Iv,{topic:s,onChange:c},s.name))})]})})},$v=()=>A.jsx(A.Fragment,{children:A.jsx("div",{className:`${Le.container}`,children:A.jsxs("div",{className:`${Le["sticky-container"]}`,children:[A.jsx("p",{className:`${Le["preference-container"]} ${Le["preference-message"]}`,children:"Adjust your preference of questions below to access solutions for your Leet101 questions!"}),A.jsx(Pv,{}),A.jsx(Zv,{}),A.jsx(Jv,{})]})})}),eb="_container_16zi6_1",tb="_heading_16zi6_41",Qe={container:eb,"back-button":"_back-button_16zi6_17",heading:tb,"solution-container":"_solution-container_16zi6_55","solution-author":"_solution-author_16zi6_69","solution-container-heading":"_solution-container-heading_16zi6_81","solution-container-para":"_solution-container-para_16zi6_109","solution-code":"_solution-code_16zi6_123","comments-container":"_comments-container_16zi6_135","comments-container-heading":"_comments-container-heading_16zi6_149","comment-card":"_comment-card_16zi6_161","comment-author":"_comment-author_16zi6_173","comment-content":"_comment-content_16zi6_191"},nb=()=>{const{name:l}=Fg(),{problemMap:d}=E.useContext($n),c=d.get(l),{difficulty:s,topic:h}=c,f=Gr(),{author:S,explanation:C,solution:y,notes:v,comments:M}=Rh.get(l),O=()=>{f("/")},j=()=>A.jsx(A.Fragment,{children:A.jsxs("div",{className:`${Qe["solution-container"]}`,children:[A.jsxs("span",{className:`${Qe["solution-author"]}`,children:["Written by: ",S]}),A.jsx("h2",{className:`${Qe["solution-container-heading"]}`,children:"Explanation"}),A.jsx("p",{className:`${Qe["solution-container-para"]}`,children:C}),A.jsx("h2",{className:`${Qe["solution-container-heading"]}`,children:"Solution"}),A.jsx("code",{className:`${Qe["solution-container-para"]}`,children:A.jsx("pre",{className:`${Qe["solution-code"]}`,children:y})}),A.jsx("h2",{className:`${Qe["solution-container-heading"]}`,children:"Notes:"}),A.jsx("p",{className:`${Qe["solution-container-para"]}`,children:v})]})}),H=({comment:F})=>{const{author:W,content:L}=F;return A.jsx(A.Fragment,{children:A.jsxs("div",{className:`${Qe["comment-card"]}`,children:[A.jsx("p",{className:`${Qe["comment-author"]}`,children:W}),A.jsx("p",{className:`${Qe["comment-content"]}`,children:L})]})})};return A.jsx(A.Fragment,{children:A.jsxs("div",{className:`${Qe.container}`,children:[A.jsx("a",{className:`${Qe["back-button"]}`,onClick:O,children:"← Go Back"}),A.jsx("h1",{className:`${Qe.heading}`,children:l}),A.jsx(j,{}),A.jsx("h2",{className:`${Qe["comments-container-heading"]}`,children:"Comments"}),A.jsx("div",{className:`${Qe["comments-container"]}`,children:M.map((F,W)=>A.jsx(H,{comment:F},W))})]})})},ib=()=>{const l=Mn();return E.useEffect(()=>{console.log("Current scroll position:",window.pageYOffset),window.scrollTo(0,0),console.log("After scroll position:",window.pageYOffset)},[l.pathname]),A.jsx(A.Fragment,{children:A.jsx("div",{className:`${Yv.container}`,children:A.jsxs(Fv,{children:[A.jsx($v,{}),A.jsxs(iv,{children:[A.jsx(Gs,{path:"/search",element:A.jsx(Vv,{})}),A.jsx(Gs,{path:"/solution/:name",element:A.jsx(A.Fragment,{children:A.jsx(nb,{})})})]})]})})})},rb="_container_fchyu_1",ab="_heading_fchyu_9",ob="_contact_fchyu_39",Li={container:rb,heading:ab,"footer-para":"_footer-para_fchyu_25",contact:ob,"mail-icon":"_mail-icon_fchyu_55","mail-address":"_mail-address_fchyu_67"},lb=()=>A.jsx(A.Fragment,{children:A.jsxs("div",{className:`${Li.container}`,children:[A.jsx("h2",{className:`${Li.heading}`,children:"Have feedback or questions?"}),A.jsx("p",{className:`${Li["footer-para"]}`,children:"If you have any feedback or questions, feel free to email me! I will get back to you as soon as possible."}),A.jsxs("div",{className:`${Li.contact}`,children:[A.jsx("svg",{className:`${Li["mail-icon"]}`,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:A.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),A.jsx("a",{href:"mailto:willdoan17@gmail.com",className:`${Li["mail-address"]}`,children:"willdoan17@gmail.com"})]})]})});function sb(){return A.jsx(A.Fragment,{children:A.jsx("div",{className:"app-container",children:A.jsxs(Ov,{children:[A.jsx(Hv,{}),A.jsx(ib,{}),A.jsx(lb,{})]})})})}dg.createRoot(document.getElementById("root")).render(A.jsx(E.StrictMode,{children:A.jsx(sb,{})}));
