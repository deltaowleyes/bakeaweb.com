var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var S=x.prototype=new b;S.constructor=x,_(S,y.prototype),S.isPureReactComponent=!0;var C=Array.isArray;function w(){}var T={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function D(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function O(e,t){return D(e.type,t,e.props)}function k(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function A(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var j=/\/+/g;function M(e,t){return typeof e==`object`&&e&&e.key!=null?A(``+e.key):t.toString(36)}function N(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(w,w):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function P(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,P(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+M(e,0):a,C(o)?(i=``,c!=null&&(i=c.replace(j,`$&/`)+`/`),P(o,r,i,``,function(e){return e})):o!=null&&(k(o)&&(o=O(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(j,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(C(e))for(var u=0;u<e.length;u++)a=e[u],s=l+M(a,u),c+=P(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+M(a,u++),c+=P(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return P(N(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function F(e,t,n){if(e==null)return e;var r=[],i=0;return P(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function I(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var L=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function R(e){var t=T.T,n={};n.types=t===null?null:t.types,T.T=n;try{var r=e(),i=T.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(w,L)}catch(e){L(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),T.T=t}}function z(e){var t=T.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else R(z.bind(null,e))}var B={map:F,forEach:function(e,t,n){F(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return F(e,function(){t++}),t},toArray:function(e){return F(e,function(e){return e})||[]},only:function(e){if(!k(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=B,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=x,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return T.H.useMemoCache(e)}},e.addTransitionType=z,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!E.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return D(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)E.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return D(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=k,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:I}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=R,e.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},e.use=function(e){return T.H.use(e)},e.useActionState=function(e,t,n){return T.H.useActionState(e,t,n)},e.useCallback=function(e,t){return T.H.useCallback(e,t)},e.useContext=function(e){return T.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return T.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return T.H.useEffect(e,t)},e.useEffectEvent=function(e){return T.H.useEffectEvent(e)},e.useId=function(){return T.H.useId()},e.useImperativeHandle=function(e,t,n){return T.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return T.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return T.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return T.H.useMemo(e,t)},e.useOptimistic=function(e,t){return T.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return T.H.useReducer(e,t,n)},e.useRef=function(e){return T.H.useRef(e)},e.useState=function(e){return T.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return T.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return T.H.useTransition()},e.version=`19.3.1`})),u=o(((e,t)=>{t.exports=l()})),d=u(),f=(function(){function e(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}function t(e){return function(){e|=0,e=e+1831565813|0;var t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function n(e){return e=String(e||``).trim(),/^#[0-9a-f]{3}$/i.test(e)&&(e=`#`+e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),/^#[0-9a-f]{6}$/i.test(e)?e.toLowerCase():null}function r(e){var t=parseInt(n(e).slice(1),16);return[t>>16&255,t>>8&255,t&255]}function i(e){var t=r(e);return(t[0]*299+t[1]*587+t[2]*114)/1e3}function a(e){var t=r(e),n=Math.max.apply(0,t),i=Math.min.apply(0,t);return n?(n-i)/n:0}function o(e){return i(e)>150?`#111111`:`#ffffff`}function s(e,t,n){var i=r(e),a=r(t);return`#`+i.map(function(e,t){return(`0`+Math.round(e+(a[t]-e)*n).toString(16)).slice(-2)}).join(``)}var c=[{name:`Wetland`,bg:`#fbfaf6`,ink:`#193a3a`,acc:`#b07b37`,soft:`#e9f2ee`},{name:`Harbour`,bg:`#f6f4ee`,ink:`#0f2f4a`,acc:`#a8481f`,soft:`#d9e4ec`},{name:`Forest`,bg:`#f3f1e7`,ink:`#1f3d2b`,acc:`#c98a1b`,soft:`#dde6d0`},{name:`Night`,bg:`#101820`,ink:`#f2eee3`,acc:`#f2b544`,soft:`#1e2c38`},{name:`Clear`,bg:`#ffffff`,ink:`#0f2a43`,acc:`#c93e22`,soft:`#dce8f2`},{name:`Stone`,bg:`#f7f5f0`,ink:`#222222`,acc:`#2f6f6b`,soft:`#dce9e6`},{name:`Clay`,bg:`#f5eee4`,ink:`#2b1b12`,acc:`#8a3b12`,soft:`#ebd7be`},{name:`Lake`,bg:`#f2f7f8`,ink:`#0b2e3a`,acc:`#0a7d8c`,soft:`#cfe6ea`}],l=[{name:`Classic serif`,h:`Georgia,"Times New Roman",serif`,b:`system-ui,-apple-system,"Segoe UI",sans-serif`,w:700},{name:`Modern sans`,h:`"Helvetica Neue",Arial,sans-serif`,b:`"Helvetica Neue",Arial,sans-serif`,w:800},{name:`Friendly`,h:`"Trebuchet MS",Verdana,sans-serif`,b:`Verdana,Geneva,sans-serif`,w:700},{name:`Book`,h:`"Palatino Linotype",Palatino,serif`,b:`Georgia,serif`,w:700},{name:`System`,h:`system-ui,-apple-system,"Segoe UI",sans-serif`,b:`system-ui,-apple-system,"Segoe UI",sans-serif`,w:750},{name:`Newspaper`,h:`"Times New Roman",Times,serif`,b:`Georgia,serif`,w:800}],u=[`<circle cx="15" cy="25" r="12" fill="none" stroke="@i" stroke-width="4"/><circle cx="35" cy="25" r="12" fill="none" stroke="@i" stroke-width="4"/><circle cx="15" cy="25" r="5" fill="@a"/><circle cx="35" cy="25" r="5" fill="@a"/>`,`<path d="M25 8V26M25 26L10 43M25 26L40 43" fill="none" stroke="@i" stroke-width="5" stroke-linecap="round"/><circle cx="25" cy="8" r="5" fill="@a"/>`,`<rect x="10" y="14" width="6" height="30" rx="3" fill="@i"/><rect x="22" y="6" width="6" height="38" rx="3" fill="@i"/><rect x="34" y="18" width="6" height="26" rx="3" fill="@i"/><circle cx="25" cy="6" r="5" fill="@a"/>`,`<path d="M6 32A19 19 0 0 1 44 32Z" fill="@a"/><rect x="4" y="37" width="42" height="5" rx="2" fill="@i"/>`,`<polygon points="25,6 40,26 10,26" fill="@a"/><polygon points="25,20 44,44 6,44" fill="@i"/>`,`<path d="M5 18Q15 8 25 18T45 18" fill="none" stroke="@i" stroke-width="4" stroke-linecap="round"/><path d="M5 31Q15 21 25 31T45 31" fill="none" stroke="@a" stroke-width="4" stroke-linecap="round"/><circle cx="25" cy="42" r="3" fill="@i"/>`,`<circle cx="25" cy="25" r="19" fill="none" stroke="@i" stroke-width="4"/><path d="M25 6V44M6 25H44" stroke="@a" stroke-width="4"/>`,`<ellipse cx="17" cy="22" rx="9" ry="11" fill="none" stroke="@i" stroke-width="4"/><ellipse cx="33" cy="22" rx="9" ry="11" fill="none" stroke="@i" stroke-width="4"/><circle cx="17" cy="23" r="4" fill="@a"/><circle cx="33" cy="23" r="4" fill="@a"/><path d="M21 38L25 44L29 38" fill="@a"/>`];function d(t,n,r,i,a){var o=t.up?n.toUpperCase():n,s=t.up?22:28,c=Math.max(o.length,3)*s*.6+16,l=u[t.mark%u.length].replace(/@i/g,i.ink).replace(/@a/g,i.acc),d=` font-family='`+a.h+`' font-weight="`+a.w+`" font-size="`+s+`" fill="`+i.ink+`"`,f=` role="img" aria-label="`+e(n)+` logo"`;if(t.lay==0)return`<svg viewBox="0 0 `+(84+c)+` 80" height="`+r+`"`+f+`><g transform="translate(8,8) scale(1.28)">`+l+`</g><text x="84" y="49"`+d+`>`+e(o)+`</text></svg>`;if(t.lay==2)return`<svg viewBox="0 0 80 80" height="`+r+`"`+f+`><g transform="translate(8,8) scale(1.28)">`+l+`</g></svg>`;var p=Math.max(120,c);return`<svg viewBox="0 0 `+p+` 120" height="`+r+`"`+f+`><g transform="translate(`+(p/2-32)+`,2) scale(1.28)">`+l+`</g><text x="`+p/2+`" y="108" text-anchor="middle"`+d+`>`+e(o)+`</text></svg>`}function f(e,n){var r=t(e.s),i=`<rect width="1600" height="900" fill="`+n.soft+`"/>`,a,o;if(e.k==0)for(i+=`<circle cx="`+(300+r()*1e3)+`" cy="`+(200+r()*150)+`" r="`+(80+r()*60)+`" fill="`+n.acc+`"/>`,a=0;a<3;a++)o=430+a*150,i+=`<path d="M0 `+o+`C400 `+(o-120+r()*160)+` 900 `+(o+100-r()*160)+` 1600 `+(o-40+r()*80)+`L1600 900L0 900Z" fill="`+n.ink+`" fill-opacity="`+[.3,.6,1][a]+`"/>`;else if(e.k==1)for(i+=`<circle cx="`+(250+r()*1100)+`" cy="230" r="110" fill="`+n.acc+`"/>`,a=0;a<3;a++){var s=r()*1e3;i+=`<polygon points="`+s+`,900 `+(s+350+r()*150)+`,`+(280+a*110+r()*80)+` `+(s+800)+`,900" fill="`+n.ink+`" fill-opacity="`+[.3,.6,1][a]+`"/>`}else if(e.k==2)for(a=0;a<6;a++)o=250+a*110,i+=`<path d="M0 `+o+`Q200 `+(o-70)+` 400 `+o+`T800 `+o+`T1200 `+o+`T1600 `+o+`V900H0Z" fill="`+(a%2?n.acc:n.ink)+`" fill-opacity="`+(.25+a*.15)+`"/>`;else if(e.k==3){for(i+=`<circle cx="800" cy="470" r="270" fill="`+n.acc+`"/>`,a=0;a<6;a++)i+=`<rect x="500" y="`+(430+a*42)+`" width="600" height="`+(6+a*5)+`" fill="`+n.soft+`"/>`;i+=`<rect y="690" width="1600" height="210" fill="`+n.ink+`"/>`}else for(a=0;a<40;a++){var c=r()*1600,l=r()*900;i+=`<circle cx="`+c+`" cy="`+l+`" r="`+(20+r()*90)+`" fill="`+(r()<.3?n.acc:n.ink)+`" fill-opacity="`+(.15+r()*.5)+`"/>`}return`<svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Hero image">`+i+`</svg>`}function p(e,n){var r=t(e.s),i=`<rect width="200" height="200" fill="`+n.soft+`"/>`,a,o;if(e.k==0)for(a=0;a<3;a++){var s=60+r()*60;i+=`<path d="M`+(24+a*52)+` 180V`+(180-s)+`a24 24 0 0 1 48 0V180Z" fill="`+(a==1?n.acc:n.ink)+`"/>`}else if(e.k==1)i+=`<circle cx="100" cy="`+(70+r()*20)+`" r="34" fill="`+n.acc+`"/><path d="M0 150Q60 `+(110+r()*20)+` 120 150T200 140V200H0Z" fill="`+n.ink+`" fill-opacity=".55"/><path d="M0 175Q70 `+(140+r()*20)+` 140 172T200 165V200H0Z" fill="`+n.ink+`"/>`;else if(e.k==2)for(a=0;a<5;a++)for(o=0;o<5;o++)i+=`<circle cx="`+(30+o*35)+`" cy="`+(30+a*35)+`" r="`+(4+r()*11)+`" fill="`+(r()<.3?n.acc:n.ink)+`"/>`;else if(e.k==3)for(i+=`<path d="M100 185V60" stroke="`+n.ink+`" stroke-width="4"/>`,a=0;a<4;a++){var c=75+a*28,l=a%2?n.acc:n.ink;i+=`<ellipse cx="74" cy="`+c+`" rx="26" ry="11" fill="`+l+`" transform="rotate(-25 74 `+c+`)"/><ellipse cx="126" cy="`+c+`" rx="26" ry="11" fill="`+l+`" transform="rotate(25 126 `+c+`)"/>`}else if(e.k==4)for(a=0;a<4;a++){var u=60+r()*100;i+=`<rect x="`+(100-u/2)+`" y="`+(30+a*38)+`" width="`+u+`" height="28" rx="14" fill="`+(a%2?n.acc:n.ink)+`"/>`}else i+=`<path d="M30 160L100 40L170 160Z" fill="`+n.ink+`"/><circle cx="100" cy="115" r="22" fill="`+n.acc+`"/>`;return`<svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Illustration">`+i+`</svg>`}function m(e,n,r){for(var i=t(n*7919+e.length*31),a=[],o=0;o<r;o++){var s={kind:`svg`};e==`logo`?(s.mark=i()*u.length|0,s.lay=i()<.45?0:i()<.7?1:2,s.up=i()<.3):(s.k=i()*(e==`hero`?5:6)|0,s.s=i()*1e6|0),a.push(s)}return a}return{esc:e,rng:t,hex:n,lum:i,sat:a,onColor:o,mix:s,PALETTES:c,FONTS:l,logo:d,hero:f,ill:p,genOptions:m}})(),p={pro:{name:`PRO`,full:`BAKE Studio PRO`,who:`For clients: anyone making a site`,blurb:`Try every template, section and extension, premium ones included. Pay only for what you use when you publish or download the code.`},baker:{name:`BAKER`,full:`BAKE Studio BAKER`,who:`For Bakers: the experts`,blurb:`Everything in PRO, plus the markets: sell templates, sections and extensions, bid on tasks and build your portfolio on bakedbya.pro.`,markets:!0}},m=Object.keys(p);function h(e){return e==`baker`?`baker`:`pro`}function g(e){return p[h(e.edition)]}var _=[{k:`services`,name:`Services`,blurb:`Bid on tasks clients post.`},{k:`templates`,name:`Templates`,blurb:`Make and submit whole-site templates.`},{k:`sections`,name:`Sections`,blurb:`Make and submit section designs.`},{k:`extensions`,name:`Extensions`,blurb:`Make and submit add-ons for sites.`}],v={bakedby:{name:`bakedby.me`,host:`bakedby.me`,blurb:`Free for anyone. You pay only the cart.`},rezsite:{name:`rezsite.com`,host:`rezsite.com`,blurb:`Free for First Nations, Métis and Inuit people, businesses and communities, with lower prices.`},own:{name:`Your own domain`,host:``,blurb:`A new domain (+$50 plus its price) or one you already own (+$100).`}},y=Object.keys(v),b=()=>!1;function x(e){b=typeof e==`function`?e:()=>!1}function S(e){try{return!!b(e)}catch{return!1}}function C(e){return!S(e)}var w=g,T=`bake-studio-v2`;function E(){return{v:3,step:1,edition:`pro`,source:{has:!0,url:`https://deltaowleyes.ca/`,log:[],found:null},biz:{name:`Your business`,desc:``},brand:{pal:Object.assign({},f.PALETTES[0]),palFound:null,font:0,seed:{logo:0,hero:0,ill:0},opts:{logo:[],hero:[],ill:[]},pick:{},star:{}},pages:[],lib:[],footer:{motto:``,text:``},menu:{items:[],cta:{label:`Contact us`,href:`#contact`},vp:{desktop:{type:`bar`,logo:`left`,sticky:!0,cta:!1,search:!1},tablet:{type:`hamburger`,logo:`left`,sticky:!0,cta:!1,search:!1},phone:{type:`hamburger`,logo:`left`,sticky:!0,cta:!1,search:!1}}},tpl:{pick:null,view:null,fav:{},all:!1,favOnly:!1},notes:[],req:{name:``,email:``,dest:`bakedby`},ai:{endpoint:``},ui:{vp:`desktop`,tvp:`all`,mvp:`desktop`,btab:`logo`,bsrc:`svg`,sel:null,open:!1,prompt:{},page:null,tpage:null,pasteFor:null,libq:``,insp:{open:!1,tab:`section`,key:null,item:null}}}}function D(){try{let e=JSON.parse(localStorage.getItem(`bake-studio-v2`)||`null`);if(e&&e.v==2&&(e.v=3,e.pages=[{id:`p-home`,name:`Home`,url:e.source&&e.source.url||``,status:`imported`,sections:e.sections||[]}],delete e.sections,e.lib=[],[`logo`,`hero`].forEach(t=>e.brand.opts[t].forEach(n=>{n.from==`site`&&e.lib.push({id:n.id,src:n.src,label:n.label||``,logo:t==`logo`})}))),e&&(e.edition=h(e.edition)),e&&e.v==3){let t=E();for(let n in t)n in e||(e[n]=t[n]);for(let n in t.ui)n in e.ui||(e.ui[n]=t.ui[n]);return e}}catch{}return null}var O=D()||E(),k=/#step-(\d)/.exec(location.hash);k&&(O.step=Math.min(5,Math.max(1,+k[1])));var A=/[?&]v=(express|rezsite|indigihub|baker|pro)\b/.exec(location.search);A&&(O.edition=h(A[1]));var j=0,M,N=!1,P=new Set;function F(){j++,P.forEach(e=>e())}function I(){clearTimeout(M),M=setTimeout(()=>{let e=!L();for(;e&&de();)e=!L();e!=N&&(N=e,F())},250)}function L(){try{return localStorage.setItem(T,JSON.stringify(O)),!0}catch{return!1}}var R=80,z=6e7,B=1500,V=`bake-studio-history`,H=8,ee=18e4,U=[],W=[],G=null,K=0,q=null,J=0;function Y(){return JSON.stringify(O,function(e,t){if((this!==O||e!=`ui`&&e!=`step`)&&(this!==O.source||e!=`log`))return t})}function te(){let e=document.activeElement;return e&&(e.tagName==`INPUT`||e.tagName==`TEXTAREA`||e.isContentEditable)?e:null}function ne(e){try{return(JSON.parse(e).pages||[]).map(e=>e.id)}catch{return[]}}function re(e){let t=e.reduce((e,t)=>e+t.length,0);for(;e.length>R||t>z&&e.length>1;)t-=e.shift().length}function ie(e){let t=JSON.parse(e),n={ui:O.ui,step:O.step,log:O.source.log};for(let e in O)delete O[e];Object.assign(O,E(),t,{ui:n.ui,step:n.step}),O.source.log=n.log||[];let r=O.pages.find(e=>e.id==O.ui.page)||O.pages[0];O.ui.page=r?r.id:null,O.pages.some(e=>e.id==O.ui.tpage)||(O.ui.tpage=r?r.id:null),O.ui.sel!=`footer`&&!(r&&r.sections.some(e=>e.id==O.ui.sel))&&(O.ui.sel=null,O.ui.insp&&(O.ui.insp.open=!1)),G=e,q=null,K=0,J=Date.now()}function ae(e){G===null&&(G=Y()),e&&e(O);let t=Y();if(t!==G){let e=Date.now(),n=te();n&&n===q&&e-K<B&&U.length||(U.push(G),re(U)),W=[];let r=ne(G),i=new Set(ne(t));r.length&&!r.some(e=>i.has(e))&&JSON.parse(G).pages.some(e=>e.sections.length)&&Z(`Before replacing the pages`,G),G=t,K=e,q=n,J=e}I(),F()}function oe(){return U.length>0}function se(){return W.length>0}function ce(){U.length&&(G===null&&(G=Y()),W.push(G),ie(U.pop()),I(),F())}function le(){W.length&&(U.push(G),ie(W.pop()),I(),F())}function X(){try{return JSON.parse(localStorage.getItem(V)||`[]`)}catch{return[]}}function ue(e){for(;;)try{return localStorage.setItem(V,JSON.stringify(e)),!0}catch{if(!e.length)return!1;e.pop()}}function de(){let e=X();return e.length?(e.pop(),ue(e),F(),!0):!1}var fe=null;function pe(){return fe||=X().map(e=>({id:e.id,at:e.at,label:e.label,info:e.info})),fe}function me(e){try{let t=JSON.parse(e),n=(t.pages||[]).reduce((e,t)=>e+t.sections.length,0),r=(e,t)=>e+` `+t+(e==1?``:`s`);return(t.biz&&t.biz.name||``)+` · `+r((t.pages||[]).length,`page`)+`, `+r(n,`section`)}catch{return``}}function Z(e,t){t||=Y();let n=X();n[0]&&n[0].snap===t||(n.unshift({id:`h`+Date.now().toString(36),at:Date.now(),label:e,info:me(t),snap:t}),ue(n.slice(0,H)),fe=null,F())}function he(e){let t=X().find(t=>t.id==e);t&&(Z(`Before restoring a save point`),G===null&&(G=Y()),U.push(G),re(U),W=[],ie(t.snap),I(),F())}function ge(e){ue(X().filter(t=>t.id!=e)),fe=null,F()}var _e=Date.now();setInterval(()=>{J>_e&&Date.now()-_e>=ee&&(_e=Date.now(),Z(`Automatic save point`))},3e4);function ve(){return(0,d.useSyncExternalStore)(e=>(P.add(e),()=>P.delete(e)),()=>j),O}function ye(){return(0,d.useSyncExternalStore)(e=>(P.add(e),()=>P.delete(e)),()=>j)}function be(){return N}function xe(){Z(`Before Start over`);try{localStorage.removeItem(T)}catch{}location.href=location.pathname}var Se=(function(){var e=f.esc,t={hero:`Hero banner`,tiles:`Card grid`,feature:`Featured story`,list:`Link list`,text:`Text block`,stats:`Numbers`,gallery:`Gallery`,testimonial:`Quotes`,cta:`Call to action`,contact:`Contact details`,videos:`Video gallery`,podcast:`Podcasts / audio`,pagehead:`Page header`,menu:`Menu with prices`,booking:`Booking and service area`,products:`Products with prices`},n={bar:{name:`Links bar`,desc:`Links in a row. Groups open as dropdowns.`,vps:[`desktop`,`tablet`]},mega:{name:`Mega menu`,desc:`Main links plus one big panel showing every group.`,vps:[`desktop`]},split:{name:`Split with centred logo`,desc:`Logo in the middle, links on both sides.`,vps:[`desktop`,`tablet`]},hamburger:{name:`Menu button`,desc:`A single Menu button that opens the full list.`,vps:[`desktop`,`tablet`,`phone`]},bottom:{name:`Bottom tab bar`,desc:`App-style tabs at the bottom of the screen.`,vps:[`tablet`,`phone`]}},r=[{k:`news`,videos:`lead`,name:`Newsroom`,desc:`Newspaper rules, serif headlines and a big lead story.`,hero:`editorial`,tiles:`rule`,feature:`wide`,menus:[`bar`,`mega`,`split`,`hamburger`]},{k:`app`,videos:`grid`,name:`App grid`,desc:`Rounded tiles you can tap, like a phone home screen.`,hero:`split`,tiles:`app`,feature:`card`,menus:[`bar`,`mega`,`split`,`hamburger`]},{k:`mag`,videos:`row`,name:`Magazine`,desc:`Full-width photo opener and a mixed-size card mosaic.`,hero:`overlay`,tiles:`bento`,feature:`split`,menus:[`bar`,`mega`,`hamburger`]},{k:`min`,videos:`grid`,name:`Minimal`,desc:`Lots of white space, centred text and simple lists.`,hero:`center`,tiles:`list`,feature:`split`,menus:[`bar`,`split`,`hamburger`],no:[`gallery`]},{k:`bold`,videos:`row`,name:`Bold blocks`,desc:`Strong colour bands and icon cards.`,hero:`band`,tiles:`icons`,feature:`wide`,menus:[`bar`,`mega`,`hamburger`],bands:!0},{k:`portal`,videos:`lead`,name:`Community portal`,desc:`A dark welcome panel with search-style shortcuts.`,hero:`portal`,tiles:`icons`,feature:`card`,menus:[`mega`,`bar`,`hamburger`]},{k:`story`,videos:`lead`,name:`Storyteller`,desc:`Photo-led, long-form pages for telling a story.`,hero:`overlay`,tiles:`cards`,feature:`split`,menus:[`split`,`bar`,`hamburger`],maxTiles:6},{k:`board`,videos:`grid`,name:`Notice board`,desc:`Compact, two-column lists for lots of links.`,hero:`none`,tiles:`cols`,feature:`card`,menus:[`mega`,`bar`],need:[`list`,`tiles`]},{k:`tide`,videos:`grid`,name:`Tide`,desc:`Airy and rounded: a floating menu, a big soft hero panel and pill buttons.`,hero:`split`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],gf:{h:`Fraunces`,hcat:`r`,hw:600,b:`Inter`,bcat:`s`}},{k:`ember`,wordmark:1,videos:`lead`,name:`Ember`,desc:`Dark and warm, like a candle-lit dining room. Elegant serif type and a menu-style list.`,hero:`overlay`,tiles:`cols`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],dark:1,gf:{h:`Playfair Display`,hcat:`r`,hw:600,b:`Karla`,bcat:`s`}},{k:`folio`,videos:`lead`,name:`Folio`,desc:`A fashion-magazine look: giant headlines, numbered sections and fine rules.`,hero:`editorial`,tiles:`rule`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],gf:{h:`Instrument Serif`,hcat:`r`,hw:400,b:`Inter Tight`,bcat:`s`}},{k:`block`,videos:`grid`,name:`Block party`,desc:`Bold outlines, hard shadows and loud colour. Impossible to ignore.`,hero:`split`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],gf:{h:`Space Grotesk`,hcat:`s`,hw:700,b:`Space Grotesk`,bcat:`s`}},{k:`bento`,videos:`grid`,name:`Bento`,desc:`Everything sits in neat rounded panels, like a tidy lunch box.`,hero:`split`,tiles:`bento`,feature:`card`,menus:[`bar`,`mega`,`split`,`hamburger`],gf:{h:`Manrope`,hcat:`s`,hw:800,b:`Inter`,bcat:`s`}},{k:`craft`,videos:`grid`,name:`Handmade`,desc:`Warm and crafted: arched pictures, stitched cards and a scalloped edge.`,hero:`split`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,gf:{h:`Young Serif`,hcat:`r`,hw:400,b:`Nunito Sans`,bcat:`s`}},{k:`glow`,wordmark:1,videos:`grid`,name:`Glow`,desc:`Dark and modern with soft coloured light and glowing buttons.`,hero:`center`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],dark:2,gf:{h:`Sora`,hcat:`s`,hw:700,b:`Inter`,bcat:`s`}},{k:`swiss`,videos:`grid`,name:`Swiss grid`,desc:`Strict grid, huge type and section labels in their own column.`,hero:`editorial`,tiles:`rule`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],gf:{h:`Archivo`,hcat:`s`,hw:800,b:`Archivo`,bcat:`s`}},{k:`retro`,videos:`row`,name:`Sunny retro`,desc:`A cheerful 70s feel: chunky type, stripes and a sunburst.`,hero:`center`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],gf:{h:`Bricolage Grotesque`,hcat:`s`,hw:800,b:`DM Sans`,bcat:`s`}},{k:`lens`,videos:`row`,name:`Lens`,desc:`Photo first: a full-screen opener, picture cards and an edge-to-edge gallery.`,hero:`overlay`,tiles:`cards`,feature:`wide`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,gf:{h:`Outfit`,hcat:`s`,hw:600,b:`Outfit`,bcat:`s`}},{k:`hearth`,wordmark:1,videos:`lead`,name:`Hearth`,desc:`Flagship for cafés and restaurants: a full-screen food photo, a menu with prices and a warm, elegant feel.`,hero:`overlay`,tiles:`menu`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,gf:{h:`Cormorant Garamond`,hcat:`r`,hw:600,b:`Jost`,bcat:`s`}},{k:`volt`,wordmark:1,videos:`grid`,name:`Volt`,desc:`Flagship for trades and services: bold and trustworthy, with service cards, big numbers and a strong call to book.`,hero:`split`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,gf:{h:`Barlow Condensed`,hcat:`s`,hw:700,b:`Barlow`,bcat:`s`}},{k:`loom`,wordmark:1,videos:`grid`,name:`Loom`,desc:`Flagship for makers and craft shops: a product grid, an arched hero and a hand-stitched feel.`,hero:`split`,tiles:`shop`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,gf:{h:`DM Serif Display`,hcat:`r`,hw:400,b:`Work Sans`,bcat:`s`}},{k:`bloom`,wordmark:1,videos:`grid`,name:`Bloom`,desc:`Flagship for salons and beauty: elegant type, a price list, a booking card and a lookbook gallery.`,hero:`split`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,gf:{h:`Bodoni Moda`,hcat:`r`,hw:500,b:`Manrope`,bcat:`s`}},{k:`pulse`,wordmark:1,videos:`grid`,name:`Pulse`,desc:`Flagship for gyms and fitness: dark, loud and full of energy, with a class schedule and memberships.`,hero:`overlay`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,dark:2,gf:{h:`Anton`,hcat:`s`,hw:400,b:`Inter`,bcat:`s`}},{k:`commons`,wordmark:1,videos:`grid`,name:`Commons`,desc:`Flagship for community organizations and band offices: clear, welcoming and easy to read, with notices and programs.`,hero:`split`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,gf:{h:`Merriweather`,hcat:`r`,hw:700,b:`Source Sans 3`,bcat:`s`}},{k:`council`,wordmark:1,videos:`grid`,name:`Council`,desc:`For consulting firms that work with government: formal, credible and easy to scan, with credentials up front.`,hero:`split`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,gf:{h:`Libre Baskerville`,hcat:`r`,hw:700,b:`IBM Plex Sans`,bcat:`s`}},{k:`meridian`,wordmark:1,videos:`grid`,name:`Meridian`,desc:`For modern consultancies: a dark, confident opener, glowing step cards and services that read like a pitch deck.`,hero:`split`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,gf:{h:`Plus Jakarta Sans`,hcat:`s`,hw:800,b:`Plus Jakarta Sans`,bcat:`s`}},{k:`bridge`,wordmark:1,videos:`grid`,name:`Bridge`,desc:`For people-first firms: warm photography, a step-by-step timeline and a welcoming, human tone.`,hero:`overlay`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,gf:{h:`Lora`,hcat:`r`,hw:600,b:`Figtree`,bcat:`s`}},{k:`convoy`,wordmark:1,videos:`grid`,name:`Convoy`,desc:`For movers and trucking: loud condensed type, road-stripe accents, big numbers and a quote button that never leaves the screen.`,hero:`overlay`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,gf:{h:`Barlow Condensed`,hcat:`s`,hw:800,b:`Barlow`,bcat:`s`}},{k:`homeward`,wordmark:1,videos:`grid`,name:`Homeward`,desc:`For family movers: friendly and reassuring, with rounded photos, a three-step moving plan and a quote card up front.`,hero:`split`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,gf:{h:`Nunito`,hcat:`s`,hw:800,b:`Nunito Sans`,bcat:`s`}},{k:`freight`,mono:`IBM Plex Mono`,wordmark:1,videos:`grid`,name:`Freight`,desc:`For logistics, storage and delivery firms: a blueprint grid, data-style numbers and services laid out like a shipping manifest.`,hero:`split`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,gf:{h:`Space Grotesk`,hcat:`s`,hw:700,b:`IBM Plex Sans`,bcat:`s`}}],i=[{k:`a`,name:`Classic`,r:0,band:`none`,dens:`m`},{k:`b`,name:`Soft`,r:14,band:`soft`,dens:`l`},{k:`c`,name:`Crisp`,r:4,band:`ink`,dens:`s`}],a=[];r.forEach(function(e){i.forEach(function(t){a.push({id:e.k+`-`+t.k,name:e.name+` `+t.name,fam:e,v:t})})});function o(e){return a.filter(function(t){return t.id==e})[0]||a[0]}function s(e,r){var i=[],a=e.fam,o=r.menu.vp.desktop.type,s=c(r),l=s.map(function(e){return e.type});return a.menus.indexOf(o)<0&&i.push(`doesn’t offer a `+n[o].name.toLowerCase()+` on desktop`),(a.no||[]).forEach(function(e){l.indexOf(e)>=0&&i.push(`has no `+t[e].toLowerCase()+` section`)}),a.maxTiles&&s.forEach(function(e){e.type==`tiles`&&(e.items||[]).length>a.maxTiles&&i.push(`fits up to `+a.maxTiles+` cards per grid (“`+e.title+`” has `+e.items.length+`)`)}),a.need&&!a.need.some(function(e){return l.indexOf(e)>=0})&&i.push(`needs a card grid or link list`),{ok:!i.length,why:i}}function c(e){var t=[];return(e.pages||[]).forEach(function(e){t=t.concat(e.sections)}),t}function l(e,t){var n=e.pages||[];return n.filter(function(e){return e.id==t})[0]||n[0]||{sections:[]}}var u=null;function d(e){return u||e.brand.pal}function p(e){return f.FONTS[e.brand.font]||f.FONTS[0]}function m(t,n,r,i){return n?n.kind==`img`?`<img src="`+e(n.src)+`" alt="`+e(n.label||``)+`"`+(i?` style="height:`+i+`px;width:auto"`:``)+` loading="lazy">`:r==`logo`?f.logo(n,t.biz.name,i||40,d(t),p(t)):r==`hero`?f.hero(n,d(t)):f.ill(n,d(t)):``}function h(e,t){var n=e.brand;return n.opts[t].filter(function(e){return e.id==n.pick[t]})[0]||n.opts[t][0]}function g(e){var t=e.brand,n=t.opts.ill.filter(function(e){return t.star[e.id]}),r=h(e,`ill`);return r&&n.indexOf(r)<0&&n.unshift(r),n.length?n:t.opts.ill.slice(0,3)}function _(e,t){var n=g(e);return n.length?m(e,n[t%n.length],`ill`):``}function v(e,t,n){return t?t.kind==`hero`?m(e,h(e,`hero`),`hero`):t.kind==`ill`?_(e,t.i||n||0):m(e,t,`img`):``}function y(e,t,n){return T(v(e,t,n),t)}function b(e,t,n){return y(e,t.image,n)}var x={none:`none`,soft:`0 4px 14px rgba(0,0,0,.14)`,medium:`0 10px 26px rgba(0,0,0,.22)`,strong:`0 20px 44px rgba(0,0,0,.34)`,offset:`12px 12px 0 var(--acc)`,hard:`8px 8px 0 var(--ink)`,glow:`0 0 0 3px var(--acc),0 0 26px var(--acc)`},S={polaroid:`Polaroid`,tilt:`Tilted polaroid`,mat:`Gallery mat`,gold:`Gold frame`,double:`Double line`,vintage:`Vintage`,circle:`Circle`,arch:`Arch`,blob:`Organic blob`,offset:`Offset block`,neon:`Neon glow`},C=[`solid`,`dashed`,`dotted`,`double`,`groove`,`ridge`,`inset`,`outset`];function w(e){if(!e)return null;var t=[],n=function(e){return e!=null&&e!==``};n(e.bw)&&t.push(`--ibw:`+A(e.bw)+`px`),C.indexOf(e.bs)>=0&&t.push(`--ibs:`+e.bs),j(e.bc)&&t.push(`--ibc:`+e.bc),n(e.br)&&t.push(`--ibr:`+A(e.br)+`px`),x[e.sh]&&t.push(`--ish:`+x[e.sh]),n(e.pad)&&t.push(`--ipad:`+A(e.pad)+`px`),j(e.bg)&&t.push(`--ibg:`+e.bg),n(e.tilt)&&A(e.tilt)&&t.push(`--itf:rotate(`+A(e.tilt)+`deg)`);var r=S[e.art]?` fr-`+e.art:``;return r||t.length?{cls:`fr`+r,style:t.join(`;`)}:null}function T(t,n){if(!t||!n)return t;/^data:image\//.test(n.cropSrc||``)&&(t=`<img src="`+e(n.cropSrc)+`" alt="`+e(n.label||``)+`">`);var r=w(n.frame);return r?t.replace(/^<(img|svg)\b([^>]*?)(\/?)>/,function(e,t,n,i){return n=/\sclass="/.test(n)?n.replace(/\sclass="/,` class="`+r.cls+` `):n+` class="`+r.cls+`"`,r.style&&(n=/\sstyle="/.test(n)?n.replace(/\sstyle="/,` style="`+r.style+`;`):n+` style="`+r.style+`"`),`<`+t+n+i+`>`}):t}function E(t){return e(t||`#`)}var D=null,O=null,k={s:`sans-serif`,r:`serif`,d:`sans-serif`,h:`cursive`,m:`monospace`};function A(e){return e=parseFloat(e),isFinite(e)?Math.round(e*1e3)/1e3:0}function j(e){return/^#[0-9a-f]{3,8}$/i.test(e||``)}function M(e,t){O&&e&&((O[e]=O[e]||{})[t]=1)}function N(e,t){return`'`+String(e).replace(/['"<>&;]/g,``)+`',`+(k[t]||`sans-serif`)}function P(e){var t=D&&D[e];if(!t)return``;var n=[];if(t.font&&(n.push(`font-family:`+N(t.font,t.fcat)),t.weight?M(t.font,t.weight):(M(t.font,400),M(t.font,700))),t.size){var r=A(t.size);n.push(`font-size:`+(r>20?`clamp(`+Math.max(14,Math.round(r*.5))+`px,`+(r*1.8/12.8).toFixed(2)+`cqw,`+r+`px)`:r+`px`))}return t.weight&&n.push(`font-weight:`+A(t.weight)),t.ls!=null&&t.ls!==``&&n.push(`letter-spacing:`+A(t.ls)+`em`),t.lh&&n.push(`line-height:`+A(t.lh)),/^(none|uppercase|lowercase|capitalize)$/.test(t.tt||``)&&n.push(`text-transform:`+t.tt),t.ital&&n.push(`font-style:italic`),j(t.color)&&n.push(`color:`+t.color),n.length?` style="`+n.join(`;`)+`"`:``}function F(e){var t=e.lx||{},n=``,r=[];return t.pt!=null&&t.pt!==``&&(n+=` lx-pt`,r.push(`--pt:`+A(t.pt)+`px`)),t.pb!=null&&t.pb!==``&&(n+=` lx-pb`,r.push(`--pb:`+A(t.pb)+`px`)),t.cw==`full`?n+=` lx-full`:t.cw&&(n+=` lx-cw`,r.push(`--cw:`+A(t.cw)+`px`)),t.mh&&(n+=` lx-mh lx-va-`+(/^(top|bottom)$/.test(t.va||``)?t.va:`center`),r.push(`--mh:`+A(t.mh)+`px`)),t.gap!=null&&t.gap!==``&&r.push(`--gap:`+A(t.gap)+`px`),t.r!=null&&t.r!==``&&r.push(`--r:`+A(t.r)+`px`),j(t.bgc)?(n+=` lx-bg`,r.push(`--sbg:`+t.bgc+`;--sink:`+(j(t.ink)?t.ink:f.onColor(t.bgc)))):j(t.ink)&&(n+=` lx-ink`,r.push(`--sink:`+t.ink)),{cls:n,style:r.length?` style="`+r.join(`;`)+`"`:``}}function I(e){return e?` data-fk="`+e+`"`+P(e):``}function L(e){return e?` data-fk="`+e+`"`+P(`item.`+e):``}function R(e,t){return e?e.replace(/^<(img|svg)\b/,`<$1`+I(t||`image`)):``}function z(t,n,r,i,a){return t?`<a class="`+(r||`bt`)+`" href="`+E(n)+`"`+(a?L(i):I(i))+`>`+e(t)+`</a>`:``}function B(t,n){return String(t||``).split(/\n{2,}/).filter(Boolean).map(function(t){return`<p`+I(n||`text`)+`>`+e(t)+`</p>`}).join(``)}function V(e){return` data-ii="`+e+`"`}function H(t){return`<a href="`+E(t.href)+`">`+e(t.label)+`</a>`}function ee(t,n){return`<details class="dd"`+(n?` open`:``)+`><summary>`+e(t.label)+`</summary><div class="pn">`+t.children.map(H).join(``)+`</div></details>`}function U(e,t){var n=!0;return e.map(function(e){if(e.children&&e.children.length){var r=ee(e,t&&n);return n=!1,r}return H(e)}).join(``)}function W(t){var n=t.filter(function(e){return!(e.children&&e.children.length)}),r=t.filter(function(e){return e.children&&e.children.length});return(n.length?`<div class="dg"><strong>Main</strong>`+n.map(H).join(``)+`</div>`:``)+r.map(function(t){return`<div class="dg"><strong>`+e(t.label)+`</strong>`+t.children.map(H).join(``)+`</div>`}).join(``)}function G(t,n,r){var i=t.menu.vp[n],a=t.menu.items,o=i.type,s=`<a class="lg" href="#">`+te(t,n==`phone`?34:44)+`</a>`,c=(i.search?`<span class="sr" aria-label="Search">⌕</span>`:``)+(i.cta&&t.menu.cta.label?z(t.menu.cta.label,t.menu.cta.href,`bt hc`):``),l=`<details class="dr"`+(r?` open`:``)+`><summary>☰ Menu</summary><div class="dw">`+W(a)+`</div></details>`,u=`hd hd-`+o+` lp-`+(o==`split`?`center`:i.logo)+(i.sticky?` sk`:``),d;if(o==`bar`)d=s+`<nav class="mn">`+U(a,r)+`</nav><div class="ha">`+c+`</div>`;else if(o==`mega`){var f=a.filter(function(e){return!(e.children&&e.children.length)}),p=a.filter(function(e){return e.children&&e.children.length});d=s+`<nav class="mn">`+f.map(H).join(``)+(p.length?`<details class="dd mg"`+(r?` open`:``)+`><summary>Explore all</summary><div class="pn">`+p.map(function(t){return`<div class="dg"><strong>`+e(t.label)+`</strong>`+t.children.map(H).join(``)+`</div>`}).join(``)+`</div></details>`:``)+`</nav><div class="ha">`+c+`</div>`}else if(o==`split`){var m=Math.ceil(a.length/2);d=`<nav class="mn ml">`+U(a.slice(0,m),r)+`</nav>`+s+`<nav class="mn mr">`+U(a.slice(m),!1)+c+`</nav>`}else d=o==`bottom`?s+`<div class="ha">`+c+`</div>`:s+`<div class="ha">`+c+l+`</div>`;return`<header class="`+u+`">`+d+`</header>`}function K(t,n,r){var i=t.menu.items,a=i.slice(0,3);return`<nav class="bb bb-`+n+`" aria-label="Tabs">`+a.map(function(t){return`<a href="`+E(t.href||t.children&&t.children[0]&&t.children[0].href)+`"><i>●</i>`+e(t.label)+`</a>`}).join(``)+`<details class="bm"`+(r?` open`:``)+`><summary><i>☰</i>More</summary><div class="dw">`+W(i)+`</div></details></nav>`}function q(t){return(t.title?`<div class="sh"><h2`+I(`title`)+`>`+e(t.title)+`</h2>`+(t.moreText?z(t.moreText,t.moreLink,`mo`,`moreText`):``)+`</div>`:``)+(t.text&&t.type!=`feature`&&t.type!=`text`&&t.type!=`cta`?`<p class="in"`+I(`text`)+`>`+e(t.text)+`</p>`:``)}var J={hero:function(t,n,r){var i=n.layout&&n.layout!=`auto`?n.layout:r.hero;i==`none`&&(i=`center`);var a=n.image===null?``:n.image?b(t,n):m(t,h(t,`hero`),`hero`);return`<section class="s s-hero hl-`+i+`"><div class="hx"><div class="ht">`+(n.eyebrow?`<p class="ey"`+I(`eyebrow`)+`>`+e(n.eyebrow)+`</p>`:``)+`<h1`+I(`title`)+`>`+e(n.title||t.biz.name)+`</h1>`+B(n.text)+`<div class="bts">`+z(n.linkText,n.link,`bt`,`linkText`)+z(n.link2Text,n.link2,`bt bt2`,`link2Text`)+`</div></div>`+(a?`<div class="hm">`+R(a)+`</div>`:``)+`</div></section>`},tiles:function(t,n,r){var i=n.style&&n.style!=`auto`?n.style:r.tiles,a=n.cols||3;return n.showImg===void 0&&r.img&&(n=Object.assign({},n,{showImg:!0})),`<section class="s s-tiles"><div class="w">`+q(n)+`<div class="tl tl-`+i+` c`+a+`">`+(n.items||[]).map(function(r,a){var o=n.showImg===!1&&i!=`icons`?``:r.image?`<span class="tim">`+R(y(t,r.image,a))+`</span>`:n.showImg||i==`icons`?`<span class="tim">`+R(_(t,a))+`</span>`:``;return`<a class="ti" href="`+E(r.link)+`"`+V(a)+`>`+o+`<span class="tx">`+(r.eyebrow?`<small class="meta"`+L(`eyebrow`)+`>`+e(r.eyebrow)+`</small>`:``)+`<h3`+L(`title`)+`>`+e(r.title)+`</h3>`+(r.text?`<p`+L(`text`)+`>`+e(r.text)+`</p>`:``)+(r.linkText?`<b`+L(`linkText`)+`>`+e(r.linkText)+` →</b>`:``)+`</span></a>`}).join(``)+`</div></div></section>`},feature:function(t,n,r){var i=n.style&&n.style!=`auto`?n.style:r.feature,a=n.image===null?``:n.image?b(t,n):_(t,1);return`<section class="s s-feature"><div class="w">`+q(n)+`<div class="fe fe-`+i+`">`+(a?`<div class="fm">`+R(a)+`</div>`:``)+`<div class="fx">`+(n.eyebrow?`<p class="ey"`+I(`eyebrow`)+`>`+e(n.eyebrow)+`</p>`:``)+`<h3`+I(`headline`)+`>`+e(n.headline||``)+`</h3>`+B(n.text)+z(n.linkText,n.link,`bt`,`linkText`)+`</div></div></div></section>`},list:function(t,n){return`<section class="s s-list"><div class="w">`+q(n)+`<div class="ls">`+(n.items||[]).map(function(t,n){return`<div class="lr"`+V(n)+`><strong`+L(`title`)+`>`+e(t.title)+`</strong>`+(t.text?`<span`+L(`text`)+`>`+e(t.text)+`</span>`:``)+(t.linkText||t.link&&t.link!=`#`?z(t.linkText||`Open`,t.link,`mo`,`linkText`,1):``)+`</div>`}).join(``)+`</div>`+(n.linkText?z(n.linkText,n.link,`mo`,`linkText`):``)+`</div></section>`},text:function(t,n){var r=n.image?b(t,n):``;return`<section class="s s-text`+(r?` wi`:``)+`"><div class="w"><div class="tb">`+(n.title?`<h2`+I(`title`)+`>`+e(n.title)+`</h2>`:``)+B(n.text)+z(n.linkText,n.link,`mo`,`linkText`)+`</div>`+(r?`<div class="fm">`+R(r)+`</div>`:``)+`</div></section>`},stats:function(t,n){return`<section class="s s-stats"><div class="w">`+q(n)+`<div class="stt">`+(n.items||[]).map(function(t,n){return`<div`+V(n)+`><b`+L(`title`)+`>`+e(t.title)+`</b><span`+L(`text`)+`>`+e(t.text)+`</span></div>`}).join(``)+`</div></div></section>`},gallery:function(t,n){return`<section class="s s-gallery"><div class="w">`+q(n)+`<div class="gl">`+(n.items||[]).map(function(n,r){return`<figure`+V(r)+`>`+R(n.image?y(t,n.image,r):_(t,r))+(n.title?`<figcaption`+L(`title`)+`>`+e(n.title)+`</figcaption>`:``)+`</figure>`}).join(``)+`</div></div></section>`},testimonial:function(t,n){return`<section class="s s-quotes"><div class="w">`+q(n)+`<div class="qs">`+(n.items||[]).map(function(t,n){return`<blockquote`+V(n)+`><p`+L(`text`)+`>“`+e(t.text)+`”</p><cite`+L(`title`)+`>`+e(t.title)+`</cite></blockquote>`}).join(``)+`</div></div></section>`},cta:function(t,n){return`<section class="s s-cta"><div class="w"><h2`+I(`title`)+`>`+e(n.title)+`</h2>`+B(n.text)+z(n.linkText,n.link,`bt bt3`,`linkText`)+`</div></section>`},videos:function(t,n,r){var i=n.style&&n.style!=`auto`?n.style:r.videos||`grid`,a=(n.items||[]).slice(0,12);function o(n,r,i){var a=n.image?y(t,n.image,r):_(t,r);return`<a class="vi`+(i?` big`:``)+`" href="`+E(n.link)+`"`+V(r)+`><span class="vt">`+R(a)+`<span class="play" aria-hidden="true"></span>`+(n.duration?`<span class="du"`+L(`duration`)+`>`+e(n.duration)+`</span>`:``)+`</span><span class="vx">`+(n.eyebrow?`<small class="meta"`+L(`eyebrow`)+`>`+e(n.eyebrow)+`</small>`:``)+`<h3`+L(`title`)+`>`+e(n.title)+`</h3>`+(i&&n.text?`<p`+L(`text`)+`>`+e(n.text)+`</p>`:``)+`</span></a>`}var s=i==`lead`&&a.length>1?`<div class="vl-lead">`+o(a[0],0,!0)+`<div class="rail">`+a.slice(1,5).map(function(e,t){return o(e,t+1)}).join(``)+`</div></div>`+(a.length>5?`<div class="vg">`+a.slice(5,9).map(function(e,t){return o(e,t+5)}).join(``)+`</div>`:``):i==`row`?`<div class="vrow">`+a.slice(0,8).map(function(e,t){return o(e,t)}).join(``)+`</div><div class="arr" aria-hidden="true"><span>‹</span><span>›</span></div>`:`<div class="vg">`+a.map(function(e,t){return o(e,t)}).join(``)+`</div>`;return`<section class="s s-videos vs-`+i+`"><div class="w">`+q(n)+s+`</div></section>`},podcast:function(t,n){return`<section class="s s-podcast"><div class="w">`+q(n)+`<div class="pods">`+(n.items||[]).slice(0,8).map(function(n,r){return`<div class="pod"`+V(r)+`><span class="pc">`+R(n.image?y(t,n.image,r):_(t,r+2))+`</span><div class="px"><h3`+L(`title`)+`>`+e(n.title)+`</h3>`+(n.text?`<p`+L(`text`)+`>`+e(n.text)+`</p>`:``)+`<div class="bar"><span class="pb" aria-hidden="true">▶</span><span class="tr"><i style="width:`+(18+r*23%60)+`%"></i></span><span class="tm">00:00</span></div></div></div>`}).join(``)+`</div></div></section>`},pagehead:function(t,n){var r=n.image?y(t,n.image):``;return`<section class="s s-pagehead`+(r?` wi`:``)+`"><div class="w"><p class="crumb">Home <span>/</span> `+e(n.title)+`</p><h1`+I(`title`)+`>`+e(n.title)+`</h1>`+B(n.text)+`</div>`+(r?`<div class="phm">`+R(r)+`</div>`:``)+`</section>`},contact:function(t,n){return`<section class="s s-contact"><div class="w">`+q(n)+`<dl class="ct">`+(n.items||[]).map(function(t,n){return`<div`+V(n)+`><dt`+L(`title`)+`>`+e(t.title)+`</dt><dd`+L(`text`)+`>`+(t.link?`<a href="`+E(t.link)+`">`+e(t.text||t.link)+`</a>`:e(t.text))+`</dd></div>`}).join(``)+`</dl>`+z(n.linkText,n.link,`bt`,`linkText`)+`</div></section>`}},Y=null;function te(t,n){var r=h(t,`logo`),i=String(t.biz.name||``).trim();return Y&&Y.wordmark&&i&&(!r||r.kind!=`img`)?`<span class="wm" role="img" aria-label="`+e(i)+` logo"><span class="wm-i" aria-hidden="true">`+e(i.charAt(0).toUpperCase())+`</span><span class="wm-n" aria-hidden="true">`+e(i)+`</span></span>`:m(t,r,`logo`,n)}function ne(e){var t=[],n={};return e.forEach(function(e,r){var i=String(e.group||``).trim();n.hasOwnProperty(i)||(n[i]=t.length,t.push({name:i,items:[]})),t[n[i]].items.push([e,r])}),t}J.menu=function(t,n){var r=n.items||[],i=n.showImg!==!1&&r.some(function(e){return e.image});return`<section class="s s-menu"><div class="w">`+q(n)+`<div class="mu-g`+(i?` mu-pics`:``)+`">`+ne(r).map(function(n){return`<div class="mu-c">`+(n.name?`<h3 class="mu-h">`+e(n.name)+`</h3>`:``)+n.items.map(function(n){var r=n[0],a=n[1];return`<div class="mu-i"`+V(a)+`>`+(i&&r.image?`<span class="mu-im">`+R(y(t,r.image,a))+`</span>`:``)+`<div class="mu-x"><div class="mu-l"><strong`+L(`title`)+`>`+e(r.title)+`</strong><span class="mu-d" aria-hidden="true"></span>`+(r.price?`<b class="mu-p"`+L(`price`)+`>`+e(r.price)+`</b>`:``)+`</div>`+(r.text?`<p`+L(`text`)+`>`+e(r.text)+`</p>`:``)+`</div></div>`}).join(``)+`</div>`}).join(``)+`</div>`+(n.linkText?`<div class="mu-f">`+z(n.linkText,n.link,`bt`,`linkText`)+`</div>`:``)+`</div></section>`},J.booking=function(t,n){var r=String(n.areas||``).split(`,`).map(function(e){return e.trim()}).filter(Boolean);return`<section class="s s-booking"><div class="w"><div class="bk"><div class="bk-a">`+(n.title?`<h2`+I(`title`)+`>`+e(n.title)+`</h2>`:``)+B(n.text)+(r.length?`<p class="bk-at"`+I(`areasTitle`)+`>`+e(n.areasTitle||`Areas we serve`)+`</p><ul class="bk-ar" data-fk="areas">`+r.map(function(t){return`<li>`+e(t)+`</li>`}).join(``)+`</ul>`:``)+`</div><div class="bk-b">`+(n.cardTitle?`<h3`+I(`cardTitle`)+`>`+e(n.cardTitle)+`</h3>`:``)+`<div class="bk-l">`+(n.items||[]).map(function(t,n){return`<div class="bk-i"`+V(n)+`><div class="bk-x"><strong`+L(`title`)+`>`+e(t.title)+`</strong>`+(t.text?`<span`+L(`text`)+`>`+e(t.text)+`</span>`:``)+`</div>`+(t.price?`<b`+L(`price`)+`>`+e(t.price)+`</b>`:``)+`</div>`}).join(``)+`</div>`+z(n.linkText,n.link,`bt bk-bt`,`linkText`)+(n.note?`<p class="bk-n"`+I(`note`)+`>`+e(n.note)+`</p>`:``)+`</div></div></div></section>`},J.products=function(t,n){var r=n.cols||3;return`<section class="s s-products"><div class="w">`+q(n)+`<div class="pr-g c`+r+`">`+(n.items||[]).map(function(n,r){return`<a class="pr-i" href="`+E(n.link)+`"`+V(r)+`><span class="pr-im">`+R(n.image?y(t,n.image,r):_(t,r))+(n.eyebrow?`<small class="pr-bd"`+L(`eyebrow`)+`>`+e(n.eyebrow)+`</small>`:``)+`</span><span class="pr-x"><span class="pr-t"><h3`+L(`title`)+`>`+e(n.title)+`</h3>`+(n.price?`<b class="pr-p"`+L(`price`)+`>`+e(n.price)+`</b>`:``)+`</span>`+(n.text?`<p`+L(`text`)+`>`+e(n.text)+`</p>`:``)+(n.linkText?`<span class="pr-btn"`+L(`linkText`)+`>`+e(n.linkText)+`</span>`:``)+`</span></a>`}).join(``)+`</div></div></section>`};function re(t){var n=t.menu.items,r=[];return n.forEach(function(e){e.children&&e.children.length?r=r.concat(e.children):r.push(e)}),`<footer class="ft" data-sec="footer" data-type="footer" data-si="-1"><div class="w"><div class="fb">`+te(t,36)+(t.footer.motto?`<p class="mt"`+I(`motto`)+`>`+e(t.footer.motto)+`</p>`:``)+`</div><nav>`+r.slice(0,12).map(H).join(``)+`</nav><p class="cp"`+I(`text`)+`>`+e(t.footer.text||`© `+t.biz.name)+`</p></div></footer>`}function ie(t,n,r){r||={},u=null;var i=o(n),a=i.fam,s=i.v,c=d(t),m=p(t);if(Y=a,a.dark&&f.lum(c.bg)>=110){var h=a.dark==2?f.mix(c.ink,`#05060a`,.55):f.mix(c.ink,`#000000`,.25);c={bg:h,ink:c.bg,acc:c.acc,soft:f.mix(h,c.bg,.08)},u=c}var g=f.lum(c.bg)<110;O={};var _=t.brand.gf||a.gf||{};_.h&&(m=Object.assign({},m,{h:N(_.h,_.hcat)}),M(_.h,_.hw||m.w)),_.hw&&(m=Object.assign({},m,{w:A(_.hw)})),_.b&&(m=Object.assign({},m,{b:N(_.b,_.bcat)}),M(_.b,400),M(_.b,700)),a.mono&&(M(a.mono,500),M(a.mono,600));var v=`--bg:`+c.bg+`;--ink:`+c.ink+`;--acc:`+c.acc+`;--soft:`+c.soft+`;--oa:`+f.onColor(c.acc)+`;--oi:`+f.onColor(c.ink)+`;--line:`+f.mix(c.bg,c.ink,g?.3:.16)+`;--mute:`+f.mix(c.ink,c.bg,.3)+`;--card:`+(g?f.mix(c.bg,c.ink,.06):`#ffffff`)+`;--hf:`+m.h.replace(/"/g,`'`)+`;--bf:`+m.b.replace(/"/g,`'`)+`;--hw:`+m.w+`;--r:`+s.r+`px`,y=l(t,r.pageId).sections.map(function(e,n){D=e.fx||null;var i=(J[e.type]||J.text)(t,e,a),o=F(e);D=null;var c=e.bg&&e.bg!=`auto`?e.bg:s.band!=`none`&&n%2==1&&e.type!=`hero`?a.dark&&s.band==`ink`?`soft`:s.band:`default`;return a.bands&&e.type==`cta`&&(c=`acc`),e.type!=`pagehead`||e.bg&&e.bg!=`auto`||(c=a.k==`bold`||a.k==`portal`?`ink`:`soft`),i.replace(`<section class="s `,`<section data-sec="`+e.id+`" data-type="`+e.type+`" data-si="`+n+`"`+o.style+` class="s bg-`+c+` al-`+(e.align||`auto`)+o.cls+(r.sel==e.id?` sel`:``)+` `)}).join(``),b=r.openMenu;D=t.footer.fx||null;var x=re(t);D=null,u=null;var S=Object.keys(O).map(function(e){return e+`:`+Object.keys(O[e]).join(`,`)}).join(`|`);return O=null,`<div class="pv tf-`+a.k+` tv-`+s.k+` dn-`+s.dens+`" style="`+v+`"`+(S?` data-gf="`+e(S)+`"`:``)+`><div class="vh vh-d">`+G(t,`desktop`,b==`desktop`)+`</div><div class="vh vh-t">`+G(t,`tablet`,b==`tablet`)+`</div><div class="vh vh-p">`+G(t,`phone`,b==`phone`)+`</div><main>`+y+`</main>`+x+(t.menu.vp.tablet.type==`bottom`?`<div class="vh vh-t">`+K(t,`tablet`,b==`tablet`)+`</div>`:``)+(t.menu.vp.phone.type==`bottom`?`<div class="vh vh-p">`+K(t,`phone`,b==`phone`)+`</div>`:``)+`</div>`}return{page:ie,pageOf:l,allSections:c,imageRef:y,imageRaw:v,decorate:T,SHADOWS:x,FRAMES:S,BSTYLES:C,TEMPLATES:a,FAMILIES:r,tpl:o,compat:s,SECTION_TYPES:t,MENU_TYPES:n,asset:m,picked:h}})(),Ce=`/* BAKE Studio: styles for generated pages. Layout reacts to the width of .cq (the page frame). */
.cq{container-type:inline-size}
.pv{background:var(--bg);color:var(--ink);font:17px/1.6 var(--bf);--pad:56px;--gap:24px;--sy:64px;min-height:100%;position:relative}
.pv.dn-s{--sy:44px;--gap:16px;font-size:16px}.pv.dn-l{--sy:88px;--gap:30px}
.pv *{box-sizing:border-box}
.pv a{color:inherit}
.pv img{max-width:100%;display:block}
.pv svg{display:block}
.pv h1,.pv h2,.pv h3{font-family:var(--hf);font-weight:var(--hw);line-height:1.12;margin:0 0 .4em}
.pv h1{font-size:56px}.pv h2{font-size:34px}.pv h3{font-size:22px}
.pv p{margin:0 0 1em;max-width:70ch}
.pv .w{max-width:1200px;margin:0 auto;padding:0 var(--pad)}
.pv .s{padding:var(--sy) 0}
.pv .s.sel{outline:3px dashed var(--acc);outline-offset:-6px}
.pv .ey{font-size:13px;letter-spacing:.12em;text-transform:uppercase;font-weight:700;color:var(--acc);margin-bottom:.6em}
.pv .bt{display:inline-block;background:var(--acc);color:var(--oa);padding:12px 22px;font-weight:700;text-decoration:none;border-radius:var(--r);margin:4px 8px 4px 0}
.pv .bt2{background:transparent;color:inherit;box-shadow:inset 0 0 0 2px currentColor}
.pv .mo{font-weight:700;text-decoration:none;color:var(--acc);white-space:nowrap}
.pv .mo:after{content:" →"}
.pv .sh{display:flex;justify-content:space-between;align-items:baseline;gap:16px;flex-wrap:wrap;margin-bottom:18px}
.pv .sh h2{margin:0}
.pv .in{color:var(--mute);margin-top:-6px}
.pv .bg-soft{background:var(--soft)}
.pv .bg-ink{background:var(--ink);color:var(--oi)}.pv .bg-ink .ey,.pv .bg-ink .mo{color:inherit}
.pv .bg-acc{background:var(--acc);color:var(--oa)}.pv .bg-acc .ey,.pv .bg-acc .mo{color:inherit}.pv .bg-acc .bt{background:var(--bg);color:var(--ink)}
.pv .al-center .w,.pv .al-center .sh{text-align:center;justify-content:center}.pv .al-center p{margin-left:auto;margin-right:auto}

/* header and menus */
.pv .vh{display:none}
.pv .hd{display:flex;align-items:center;gap:20px;padding:16px var(--pad);border-bottom:1px solid var(--line);background:var(--bg);position:relative;z-index:5}
.pv .hd.sk{box-shadow:0 2px 0 var(--line)}
.pv .hd .lg{display:flex;align-items:center;text-decoration:none;flex:0 0 auto}
.pv .hd .lg img{height:44px;width:auto}
.pv .mn{display:flex;align-items:center;gap:22px;flex:1;font-weight:600;font-size:15px}
.pv .mn>a,.pv .dd>summary{text-decoration:none;cursor:pointer;white-space:nowrap}
.pv .ha{display:flex;align-items:center;gap:12px;margin-left:auto}
.pv .hc{margin:0}
.pv .sr{font-size:22px;line-height:1}
.pv details>summary{list-style:none}.pv details>summary::-webkit-details-marker{display:none}
.pv .dd{position:relative}
.pv .dd>summary:after{content:" ▾";font-size:12px}
.pv .pn{position:absolute;top:calc(100% + 12px);left:-12px;background:var(--card);color:var(--ink);border:1px solid var(--line);border-radius:var(--r);padding:10px;min-width:220px;display:grid;gap:2px;box-shadow:0 12px 30px rgba(0,0,0,.12);z-index:20}
.pv .pn a{padding:8px 10px;text-decoration:none;font-weight:500;border-radius:var(--r)}
.pv .pn a:hover{background:var(--soft)}
.pv .mg{position:static}
.pv .mg .pn{left:var(--pad);right:var(--pad);top:100%;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:20px;padding:22px}
.pv .dg{display:grid;gap:2px;align-content:start}
.pv .dg strong{font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:var(--acc);padding:4px 10px}
.pv .dg a{padding:7px 10px;text-decoration:none}
.pv .hd-mega{position:relative}
.pv .hd-split{justify-content:center}
.pv .hd-split .ml{justify-content:flex-end}.pv .hd-split .mr{justify-content:flex-start}
.pv .lp-center:not(.hd-split){justify-content:space-between}
.pv .lp-center.hd-hamburger .lg,.pv .lp-center.hd-bottom .lg{position:absolute;left:50%;transform:translateX(-50%)}
.pv .dr{position:static}
.pv .dr>summary{border:2px solid currentColor;border-radius:var(--r);padding:6px 14px;font-weight:700;cursor:pointer;white-space:nowrap}
.pv .dw{position:absolute;left:0;right:0;top:100%;background:var(--card);color:var(--ink);border-bottom:1px solid var(--line);padding:18px var(--pad);display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:18px;box-shadow:0 14px 30px rgba(0,0,0,.12);z-index:20}
.pv .bb{position:sticky;bottom:0;display:grid;grid-template-columns:repeat(4,1fr);background:var(--card);border-top:1px solid var(--line);z-index:10}
.pv .bb>a,.pv .bm>summary{display:flex;flex-direction:column;align-items:center;gap:2px;padding:8px 4px 10px;font-size:12px;font-weight:600;text-decoration:none;text-align:center;cursor:pointer}
.pv .bb i{font-style:normal;font-size:16px;color:var(--acc)}
.pv .bm .dw{top:auto;bottom:100%;grid-template-columns:1fr 1fr}

/* hero layouts */
.pv .s-hero{padding:0}
.pv .s-hero .hx{max-width:1200px;margin:0 auto;padding:var(--sy) var(--pad)}
.pv .hm{overflow:hidden;border-radius:var(--r)}
.pv .hm svg,.pv .hm img{width:100%;height:100%;object-fit:cover}
.pv .hl-split .hx{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center}
.pv .hl-split .hm{aspect-ratio:4/3}
.pv .hl-overlay{position:relative;color:#fff}
.pv .hl-overlay .hx{position:relative;min-height:520px;display:flex;align-items:flex-end;max-width:none}
.pv .hl-overlay .hm{position:absolute;inset:0;border-radius:0}
.pv .hl-overlay .hm:after{content:"";position:absolute;inset:0;background:linear-gradient(0deg,rgba(0,0,0,.65),rgba(0,0,0,.05) 70%)}
.pv .hl-overlay .ht{position:relative;z-index:1;max-width:760px;width:100%;margin:0 auto 0 max(0px,calc((100% - 1200px)/2))}
.pv .hl-overlay .ey{color:#fff}
.pv .hl-center .ht{text-align:center;max-width:820px;margin:0 auto}
.pv .hl-center p{margin-left:auto;margin-right:auto}
.pv .hl-center .hm{margin-top:40px;aspect-ratio:21/8}
.pv .hl-editorial .ht{max-width:900px;border-bottom:3px solid var(--ink);padding-bottom:28px;margin-bottom:28px}
.pv .hl-editorial .hm{aspect-ratio:21/8}
.pv .hl-band .hm{aspect-ratio:16/4.5;border-radius:0;margin:0 calc(-1 * var(--pad)) 40px}
.pv .hl-band .hx{display:flex;flex-direction:column}
.pv .hl-band .hm{order:-1}
.pv .hl-portal{background:var(--ink);color:var(--oi)}
.pv .hl-portal .hx{display:grid;grid-template-columns:1.3fr 1fr;gap:40px;align-items:center}
.pv .hl-portal .hm{aspect-ratio:1;border-radius:50%;max-width:380px;justify-self:end;width:100%}
.pv .hl-portal .ey{color:var(--acc)}
.pv .bts{margin-top:8px}

/* card grids */
.pv .tl{display:grid;gap:var(--gap);grid-template-columns:repeat(3,1fr)}
.pv .tl.c2{grid-template-columns:repeat(2,1fr)}.pv .tl.c4{grid-template-columns:repeat(4,1fr)}
.pv .ti{display:flex;flex-direction:column;text-decoration:none;color:inherit;min-width:0}
.pv .ti h3{font-size:20px;margin:0 0 6px}
.pv .ti p{font-size:15px;color:var(--mute);margin:0 0 8px}
.pv .ti b{font-size:14px;color:var(--acc);margin-top:auto}
.pv .tim{display:block;overflow:hidden;border-radius:var(--r);aspect-ratio:16/10;margin-bottom:12px}
.pv .tim svg{width:100%;height:100%}
.pv .tx{display:flex;flex-direction:column;flex:1}
.pv .tl-cards .ti{background:var(--card);border:1px solid var(--line);border-radius:var(--r);padding:20px}
.pv .tl-app .ti{background:var(--card);border:1px solid var(--line);border-radius:max(12px,var(--r));padding:22px;min-height:150px;box-shadow:0 2px 8px rgba(0,0,0,.05)}
.pv .tl-rule .ti{border-top:3px solid var(--ink);padding-top:14px}
.pv .tl-list{grid-template-columns:1fr!important;gap:0}
.pv .tl-list .ti{flex-direction:row;align-items:center;gap:16px;border-bottom:1px solid var(--line);padding:16px 0}
.pv .tl-list .tx{flex-direction:row;align-items:baseline;gap:16px;flex-wrap:wrap}
.pv .tl-list .ti h3{margin:0;min-width:240px}.pv .tl-list .ti p{margin:0}
.pv .tl-list .tim{width:64px;flex:0 0 64px;margin:0;aspect-ratio:1}
.pv .tl-icons .ti{background:var(--card);border:1px solid var(--line);border-radius:var(--r);padding:20px;flex-direction:row;gap:14px;align-items:flex-start}
.pv .tl-icons .tim{flex:0 0 56px;width:56px;aspect-ratio:1;margin:0;border-radius:50%}
.pv .tl-bento{grid-template-columns:repeat(4,1fr)!important;grid-auto-rows:minmax(140px,auto)}
.pv .tl-bento .ti{background:var(--soft);border-radius:var(--r);padding:20px;justify-content:flex-end}
.pv .tl-bento .ti:first-child{grid-column:span 2;grid-row:span 2;background:var(--ink);color:var(--oi)}
.pv .tl-bento .ti:first-child h3{font-size:30px}.pv .tl-bento .ti:first-child p{color:inherit;opacity:.85}
.pv .tl-bento .ti:nth-child(4){grid-column:span 2;background:var(--acc);color:var(--oa)}
.pv .tl-bento .ti:nth-child(4) p,.pv .tl-bento .ti:nth-child(4) b{color:inherit}
.pv .tl-cols{grid-template-columns:repeat(2,1fr)!important;gap:0 40px}
.pv .tl-cols .ti{padding:12px 0;border-bottom:1px dotted var(--line)}
.pv .tl-cols .ti h3{font-size:18px;margin:0}
.pv .bg-ink .tl-cards .ti,.pv .bg-ink .tl-app .ti,.pv .bg-ink .tl-icons .ti,.pv .bg-acc .tl-cards .ti,.pv .bg-acc .tl-app .ti,.pv .bg-acc .tl-icons .ti{color:var(--ink)}

/* feature, text, list, others */
.pv .fe{display:grid;gap:36px;align-items:center}
.pv .fe-split{grid-template-columns:1fr 1fr}
.pv .fe-wide .fm{aspect-ratio:21/8}
.pv .fe-wide .fx{max-width:820px}
.pv .fe-card{grid-template-columns:2fr 3fr;background:var(--card);border:1px solid var(--line);border-radius:var(--r);padding:24px;color:var(--ink)}
.pv .fe h3{font-size:30px}
.pv .fm{overflow:hidden;border-radius:var(--r);aspect-ratio:4/3}
.pv .fm svg,.pv .fm img{width:100%;height:100%;object-fit:cover}
.pv .s-text .w{display:grid;gap:40px;align-items:center}
.pv .s-text.wi .w{grid-template-columns:3fr 2fr}
.pv .ls{border-top:1px solid var(--line)}
.pv .lr{display:flex;align-items:center;gap:16px;padding:14px 0;border-bottom:1px solid var(--line);flex-wrap:wrap}
.pv .lr strong{flex:1;min-width:200px}
.pv .lr span{flex:2;color:var(--mute)}
.pv .stt{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:var(--gap);text-align:center}
.pv .stt b{display:block;font-family:var(--hf);font-size:46px;color:var(--acc);line-height:1.1}
.pv .gl{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.pv .gl figure{margin:0}.pv .gl figure>svg,.pv .gl figure>img{width:100%;aspect-ratio:1;object-fit:cover;border-radius:var(--r)}
.pv .gl figcaption{font-size:14px;color:var(--mute);margin-top:6px}
.pv .qs{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:var(--gap)}
.pv .qs blockquote{margin:0;background:var(--soft);padding:26px;border-radius:var(--r);color:var(--ink)}
.pv .qs blockquote p{font-family:var(--hf);font-size:21px}
.pv .qs cite{font-style:normal;font-weight:700;font-size:14px}
.pv .s-cta .w{text-align:center}.pv .s-cta p{margin-left:auto;margin-right:auto}
.pv .bg-default.s-cta,.pv .bg-auto.s-cta{background:var(--soft)}
.pv .ct{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:18px;margin:0 0 20px}
.pv .ct dt{font-size:13px;letter-spacing:.1em;text-transform:uppercase;color:var(--acc);font-weight:700}.pv .ct dd{margin:4px 0 0}
.pv .ft{background:var(--ink);color:var(--oi);padding:44px 0}
.pv .ft .w{display:grid;grid-template-columns:1fr 2fr;gap:32px}
.pv .ft .fb{display:grid;gap:12px;justify-items:start}
.pv .ft .fb svg,.pv .ft .fb img{background:var(--bg);padding:6px 10px;border-radius:var(--r);height:46px!important;width:auto}
.pv .ft .mt{font-weight:800;letter-spacing:.12em;font-size:13px}
.pv .ft nav{display:flex;flex-wrap:wrap;gap:10px 22px;align-content:start}
.pv .ft nav a{text-decoration:none;opacity:.9;font-size:15px}
.pv .ft .cp{grid-column:1/-1;font-size:14px;opacity:.75;margin:0}

/* meta lines, videos, podcasts, page headers */
.pv .meta{display:block;font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:var(--acc);font-weight:700;margin-bottom:4px}
.pv .tim img{width:100%;height:100%;object-fit:cover}
.pv .vi{display:flex;flex-direction:column;text-decoration:none;color:inherit;min-width:0}
.pv .vt{position:relative;display:block;aspect-ratio:16/9;overflow:hidden;border-radius:var(--r);background:var(--ink)}
.pv .vt>svg,.pv .vt>img{width:100%;height:100%;object-fit:cover}
.pv .play{position:absolute;left:50%;top:50%;width:56px;height:56px;margin:-28px 0 0 -28px;border-radius:50%;background:rgba(0,0,0,.62);box-shadow:0 0 0 3px rgba(255,255,255,.85)}
.pv .play:after{content:"";position:absolute;left:22px;top:17px;border-style:solid;border-width:11px 0 11px 18px;border-color:transparent transparent transparent #fff}
.pv .du{position:absolute;right:8px;bottom:8px;background:rgba(0,0,0,.75);color:#fff;font-size:12px;font-weight:700;padding:2px 6px;border-radius:4px}
.pv .vx{padding-top:10px}.pv .vx h3{font-size:17px;line-height:1.3;margin:0}.pv .vx p{font-size:15px;color:var(--mute);margin:8px 0 0}
.pv .vg{display:grid;grid-template-columns:repeat(4,1fr);gap:var(--gap)}
.pv .vl-lead{display:grid;grid-template-columns:2fr 1fr;gap:var(--gap);margin-bottom:var(--gap)}
.pv .vi.big .vx h3{font-size:28px}.pv .vi.big .play{width:84px;height:84px;margin:-42px 0 0 -42px}.pv .vi.big .play:after{left:33px;top:25px;border-width:17px 0 17px 27px}
.pv .rail{display:grid;gap:14px;align-content:start}
.pv .rail .vi{flex-direction:row;gap:12px;align-items:flex-start}
.pv .rail .vt{flex:0 0 44%;width:44%}.pv .rail .vx{padding:0}.pv .rail .vx h3{font-size:15px}
.pv .rail .play{width:34px;height:34px;margin:-17px 0 0 -17px}.pv .rail .play:after{left:13px;top:10px;border-width:7px 0 7px 11px}
.pv .vrow{display:grid;grid-auto-flow:column;grid-auto-columns:calc((100% - 3 * var(--gap)) / 3.5);gap:var(--gap);overflow:hidden}
.pv .arr{display:flex;justify-content:flex-end;gap:8px;margin-top:12px}.pv .arr span{width:38px;height:38px;border-radius:50%;border:2px solid currentColor;display:grid;place-items:center;font-size:20px;line-height:1}
.pv .pods{display:grid;grid-template-columns:repeat(2,1fr);gap:var(--gap)}
.pv .pod{display:flex;gap:16px;background:var(--card);border:1px solid var(--line);border-radius:var(--r);padding:14px;color:var(--ink)}
.pv .pc{flex:0 0 96px;height:96px;border-radius:var(--r);overflow:hidden}.pv .pc svg,.pv .pc img{width:100%;height:100%;object-fit:cover}
.pv .px{flex:1;min-width:0}.pv .px h3{font-size:18px;margin:0 0 4px}.pv .px p{font-size:14px;color:var(--mute);margin:0 0 8px}
.pv .pod .bar{display:flex;align-items:center;gap:10px;margin-top:8px}
.pv .pb{width:34px;height:34px;border-radius:50%;background:var(--acc);color:var(--oa);display:grid;place-items:center;font-size:13px;flex:0 0 34px}
.pv .tr{flex:1;height:5px;border-radius:5px;background:var(--line);overflow:hidden}.pv .tr i{display:block;height:100%;background:var(--acc)}
.pv .tm{font-size:12px;color:var(--mute)}
.pv .s-pagehead{padding:calc(var(--sy) * .8) 0}
.pv .s-pagehead h1{font-size:46px;margin:0 0 10px}
.pv .crumb{font-size:13px;opacity:.75;margin:0 0 10px}.pv .crumb span{margin:0 4px}
.pv .phm{max-width:1200px;margin:24px auto 0;padding:0 var(--pad)}.pv .phm img,.pv .phm svg{width:100%;aspect-ratio:21/6;object-fit:cover;border-radius:var(--r)}
.pv.tf-news .s-videos h2,.pv.tf-news .s-podcast h2{font-size:15px;letter-spacing:.14em;text-transform:uppercase;font-family:var(--bf);font-weight:800;border-bottom:2px solid var(--ink);padding-bottom:6px;width:100%}
.pv.tf-bold .s-videos,.pv.tf-portal .s-videos.vs-row{background:var(--ink);color:var(--oi)}
.pv.tf-app .vt,.pv.tf-app .pod{border-radius:max(12px,var(--r))}
.pv.tf-story .vi.big .vx h3{font-style:italic;font-weight:400}

/* template families */
.pv.tf-news .hd{border-bottom:3px double var(--ink)}
.pv.tf-news .s-tiles h2,.pv.tf-news .s-list h2,.pv.tf-news .s-feature .sh h2{font-size:15px;letter-spacing:.14em;text-transform:uppercase;font-family:var(--bf);font-weight:800;border-bottom:2px solid var(--ink);padding-bottom:6px;width:100%}
.pv.tf-news .s-feature .sh .mo{position:relative;top:-34px;margin-left:auto}
.pv.tf-news .fe h3{font-size:40px}
.pv.tf-app .s{padding:calc(var(--sy) * .6) 0}
.pv.tf-app .s-hero .hx{padding-bottom:20px}
.pv.tf-app .s-feature .w>.fe,.pv.tf-app .s-list .w,.pv.tf-app .s-text .w{background:var(--card);border:1px solid var(--line);border-radius:max(12px,var(--r));padding:24px;color:var(--ink)}
.pv.tf-app .s-list .w,.pv.tf-app .s-text .w{max-width:none;margin:0 max(var(--pad),calc((100% - 1200px) / 2 + var(--pad)))}
.pv.tf-mag h2{font-size:40px}
.pv.tf-min{--pad:72px}
.pv.tf-min .hd{border-bottom:0}
.pv.tf-min .s-tiles .w,.pv.tf-min .s-list .w,.pv.tf-min .s-text .w,.pv.tf-min .s-feature .w{max-width:900px}
.pv.tf-min h2{font-weight:400}
.pv.tf-bold .hd{background:var(--ink);color:var(--oi);border:0}
.pv.tf-bold .hd .lg svg,.pv.tf-bold .hd .lg img{background:var(--bg);border-radius:var(--r);padding:4px 8px}
.pv.tf-bold h2{text-transform:uppercase;letter-spacing:.02em}
.pv.tf-portal .hd{background:var(--ink);color:var(--oi);border:0}
.pv.tf-portal .hd .lg svg,.pv.tf-portal .hd .lg img{background:var(--bg);border-radius:var(--r);padding:4px 8px}
.pv.tf-portal .hd-mega .mn,.pv.tf-portal .hd-bar .mn{gap:28px}
.pv.tf-story h2{font-size:42px;font-weight:400;font-style:italic}
.pv.tf-story .s-text .tb{max-width:720px;margin:0 auto;font-size:19px}
.pv.tf-board{--sy:40px}
.pv.tf-board main{display:grid;grid-template-columns:1fr 1fr;max-width:1200px;margin:0 auto;padding:0 var(--pad);gap:0 40px}
.pv.tf-board main>.s{padding:var(--sy) 0}
.pv.tf-board main>.s .w{padding:0}
.pv.tf-board main>.s-hero,.pv.tf-board main>.s-tiles,.pv.tf-board main>.s-gallery,.pv.tf-board main>.s-cta{grid-column:1/-1}
.pv.tf-board h2{font-size:22px;border-bottom:2px solid var(--acc);padding-bottom:6px}

/* desktop / tablet / phone */
@container (min-width:1024px){.pv .vh-d{display:block}}
@container (min-width:600px) and (max-width:1023.98px){
.pv .vh-t{display:block}
.pv{--pad:32px;--sy:48px}
.pv h1{font-size:44px}.pv h2{font-size:28px}
.pv .tl.c4,.pv .tl-bento{grid-template-columns:repeat(2,1fr)!important}.pv .tl.c3{grid-template-columns:repeat(2,1fr)}
.pv .hl-split .hx,.pv .hl-portal .hx{grid-template-columns:1fr 1fr;gap:28px}
.pv .mn{gap:14px;font-size:14px}
.pv .gl{grid-template-columns:repeat(2,1fr)}
.pv.tf-board main{grid-template-columns:1fr}
.pv .vg{grid-template-columns:repeat(2,1fr)}
.pv .vl-lead{grid-template-columns:3fr 2fr}
.pv .vrow{grid-auto-columns:calc((100% - var(--gap)) / 2.3)}
.pv .s-pagehead h1{font-size:38px}
}
@container (max-width:599.98px){
.pv .vh-p{display:block}
.pv{--pad:20px;--sy:36px;font-size:16px}
.pv h1{font-size:34px}.pv h2{font-size:24px}.pv h3{font-size:19px}
.pv .tl,.pv .tl.c2,.pv .tl.c4,.pv .tl-cols{grid-template-columns:1fr!important}
.pv .vg{grid-template-columns:1fr 1fr;gap:14px}.pv .vg .vx h3{font-size:14px}
.pv .vl-lead{grid-template-columns:1fr}.pv .vi.big .vx h3{font-size:22px}
.pv .vrow{grid-auto-columns:72%}
.pv .pods{grid-template-columns:1fr}.pv .pc{flex-basis:72px;height:72px}
.pv .s-pagehead h1{font-size:32px}.pv .phm img,.pv .phm svg{aspect-ratio:16/7}
.pv .tl-app{grid-template-columns:1fr 1fr!important;gap:10px}
.pv .tl-app .ti{padding:14px;min-height:120px}.pv .tl-app .ti h3{font-size:16px}.pv .tl-app .ti p{font-size:13px}
.pv .tl-bento{grid-template-columns:1fr 1fr!important}
.pv .tl-bento .ti:first-child,.pv .tl-bento .ti:nth-child(4){grid-column:span 2;grid-row:auto}
.pv .tl-list .tx{display:block}.pv .tl-list .ti h3{min-width:0}
.pv .hl-split .hx,.pv .hl-portal .hx,.pv .fe-split,.pv .fe-card,.pv .s-text.wi .w,.pv .ft .w{grid-template-columns:1fr}
.pv .hl-portal .hm{max-width:220px;justify-self:start}
.pv .hl-overlay .hx{min-height:420px}
.pv .hl-center .hm,.pv .hl-editorial .hm,.pv .fe-wide .fm{aspect-ratio:16/10}
.pv .hl-band .hm{aspect-ratio:16/7}
.pv .gl{grid-template-columns:repeat(2,1fr)}
.pv .lr{display:block}.pv .lr strong{display:block}
.pv .fe h3{font-size:24px}.pv.tf-news .fe h3{font-size:28px}
.pv.tf-news .s-feature .sh .mo{position:static}
.pv.tf-board main{grid-template-columns:1fr}
.pv .hd{padding:12px var(--pad);gap:10px}
.pv .hd .lg img{height:34px}
.pv .hc{padding:8px 12px;font-size:14px}
.pv .dw{grid-template-columns:1fr 1fr}
}


/* ---------- menu, booking and products sections (2026-11-14) ---------- */
.pv .mu-g{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:40px 48px}
.pv .mu-h{font-size:15px;letter-spacing:.14em;text-transform:uppercase;color:var(--acc);font-family:var(--bf);font-weight:700;margin:0 0 14px;padding-bottom:10px;border-bottom:1px solid var(--line)}
.pv .mu-i{display:flex;gap:16px;align-items:flex-start;padding:12px 0}
.pv .mu-im{flex:0 0 72px;width:72px;height:72px;border-radius:var(--r);overflow:hidden}
.pv .mu-im>:is(img,svg){width:100%;height:100%;object-fit:cover}
.pv .mu-x{flex:1;min-width:0}
.pv .mu-l{display:flex;align-items:baseline;gap:10px}
.pv .mu-l strong{font-size:18px}
.pv .mu-d{flex:1;min-width:16px;border-bottom:1px dotted var(--mute);transform:translateY(-4px)}
.pv .mu-p{font-size:18px;white-space:nowrap}
.pv .mu-x p{margin:4px 0 0;font-size:15px;color:var(--mute)}
.pv .mu-f{margin-top:28px}
.pv .bk{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:start}
.pv .bk-at{font-size:13px;letter-spacing:.12em;text-transform:uppercase;font-weight:700;color:var(--acc);margin:24px 0 10px}
.pv .bk-ar{list-style:none;margin:0;padding:0;display:flex;flex-wrap:wrap;gap:8px}
.pv .bk-ar li{padding:6px 14px;border:1px solid var(--line);border-radius:999px;font-size:14px;font-weight:600}
.pv .bk-b{background:var(--card);color:var(--ink);border:1px solid var(--line);border-radius:var(--r);padding:28px;box-shadow:0 18px 40px -24px rgba(0,0,0,.35)}
.pv .bk-b h3{margin:0 0 8px}
.pv .bk-i{display:flex;align-items:center;gap:16px;padding:14px 0;border-bottom:1px solid var(--line)}
.pv .bk-x{flex:1;display:grid;gap:2px}.pv .bk-x span{font-size:14px;color:var(--mute)}
.pv .bk-i b{white-space:nowrap;color:var(--acc)}
.pv .bk-bt{display:block;text-align:center;margin:20px 0 0}
.pv .bk-n{font-size:13px;color:var(--mute);margin:10px 0 0;text-align:center;max-width:none}
.pv .pr-g{display:grid;grid-template-columns:repeat(3,1fr);gap:28px var(--gap)}
.pv .pr-g.c2{grid-template-columns:repeat(2,1fr)}.pv .pr-g.c4{grid-template-columns:repeat(4,1fr)}
.pv .pr-i{display:flex;flex-direction:column;text-decoration:none;color:inherit;min-width:0}
.pv .pr-im{position:relative;display:block;aspect-ratio:1;border-radius:var(--r);overflow:hidden;background:var(--soft);margin-bottom:14px}
.pv .pr-im>:is(img,svg){width:100%;height:100%;object-fit:cover}
.pv .pr-bd{position:absolute;left:12px;top:12px;background:var(--bg);color:var(--ink);font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:4px 10px;border-radius:999px}
.pv .pr-t{display:flex;align-items:baseline;justify-content:space-between;gap:12px}
.pv .pr-t h3{font-size:19px;margin:0}
.pv .pr-p{white-space:nowrap}
.pv .pr-x p{font-size:15px;color:var(--mute);margin:6px 0 10px}
.pv .pr-btn{font-weight:700;font-size:14px;color:var(--acc)}
.pv .pr-btn:after{content:" →"}
.pv.tf-board main>:is(.s-menu,.s-products,.s-booking){grid-column:1/-1}
@container (max-width:1023.98px){.pv .pr-g,.pv .pr-g.c4{grid-template-columns:repeat(2,1fr)}.pv .bk{gap:32px}}
@container (max-width:599.98px){.pv .bk{grid-template-columns:1fr}.pv .mu-g{grid-template-columns:1fr;gap:28px}.pv .pr-g,.pv .pr-g.c2,.pv .pr-g.c4{grid-template-columns:1fr 1fr;gap:20px 12px}.pv .pr-t{display:block}.pv .bk-b{padding:20px}}


/* numbered steps card style (any template): cards count 1, 2, 3… with a line joining them */
.pv .tl-steps{counter-reset:stp;position:relative}
.pv .tl-steps .ti{counter-increment:stp;position:relative;padding-top:72px}
.pv .tl-steps .ti:before{content:counter(stp);position:absolute;left:0;top:0;width:52px;height:52px;border-radius:50%;display:grid;place-items:center;background:var(--acc);color:var(--oa);font:var(--hw) 22px/1 var(--hf);z-index:1}
.pv .tl-steps .ti:after{content:"";position:absolute;left:60px;right:-8px;top:26px;border-top:2px dashed var(--line)}
.pv .tl-steps .ti:last-child:after{display:none}
@container (max-width:599.98px){.pv .tl-steps .ti:after{display:none}}

/* ---------- inspector overrides (set per section in step 3; see render.js lxAttr) ---------- */
.pv .s.lx-pt{padding-top:var(--pt)!important}
.pv .s.lx-pb{padding-bottom:var(--pb)!important}
.pv .s-hero.lx-pt,.pv .s-hero.lx-pb{padding-top:0!important;padding-bottom:0!important}
.pv .s-hero.lx-pt .hx{padding-top:var(--pt)!important}
.pv .s-hero.lx-pb .hx{padding-bottom:var(--pb)!important}
.pv .s.lx-cw .w,.pv .s.lx-cw .hx,.pv .s.lx-cw .phm{max-width:var(--cw)!important}
.pv .s.lx-full .w,.pv .s.lx-full .hx,.pv .s.lx-full .phm{max-width:none!important}
.pv .s.lx-mh{min-height:var(--mh);display:flex;flex-direction:column;justify-content:center}
.pv .s.lx-va-top{justify-content:flex-start}.pv .s.lx-va-bottom{justify-content:flex-end}
.pv .s-hero.lx-mh .hx{min-height:var(--mh);width:100%;box-sizing:border-box}
.pv .s.lx-bg{background:var(--sbg)!important;color:var(--sink)!important}
.pv .s.lx-ink{color:var(--sink)!important}
.pv .s.lx-bg h1,.pv .s.lx-bg h2,.pv .s.lx-bg h3,.pv .s.lx-ink h1,.pv .s.lx-ink h2,.pv .s.lx-ink h3{color:inherit}
.pv .al-left .w,.pv .al-left .sh,.pv .al-left .ht{text-align:left;justify-content:flex-start}
.pv .al-right .w,.pv .al-right .sh,.pv .al-right .ht{text-align:right;justify-content:flex-end}
.pv .al-right p{margin-left:auto}
@container (max-width:599.98px){
  .pv .s.lx-pt:not(.s-hero){padding-top:calc(var(--pt) * .6)!important}
  .pv .s.lx-pb:not(.s-hero){padding-bottom:calc(var(--pb) * .6)!important}
  .pv .s-hero.lx-pt .hx{padding-top:calc(var(--pt) * .6)!important}
  .pv .s-hero.lx-pb .hx{padding-bottom:calc(var(--pb) * .6)!important}
}

/* ---------- image frames (set in the step 3 image editor; see render.js frameAttrs) ----------
   The frame sits on the <img>/<svg> itself through CSS variables. Frame styles (.fr-*) only set
   variables, and the editor's own choices arrive as inline variables, so they always win. */
.pv .fr{box-sizing:border-box!important;border:var(--ibw,0px) var(--ibs,solid) var(--ibc,var(--ink))!important;border-radius:var(--ibr,var(--r))!important;box-shadow:var(--ish,none)!important;padding:var(--ipad,0px)!important;background:var(--ibg,transparent)!important;transform:var(--itf,none);filter:var(--iflt,none)}
.pv :has(> .fr){overflow:visible!important;border-radius:0!important;background:none!important}
.pv .fr-polaroid,.pv .fr-tilt{--ipad:10px 10px 38px;--ibg:#ffffff;--ish:0 8px 22px rgba(0,0,0,.24);--ibr:2px}
.pv .fr-tilt{--itf:rotate(-2.5deg)}
.pv .fr-mat{--ibw:10px;--ibc:#2b2622;--ipad:22px;--ibg:#f6f1e7;--ibr:0px;--ish:0 6px 18px rgba(0,0,0,.18)}
.pv .fr-gold{--ibw:14px;--ibs:ridge;--ibc:#c49a3a;--ipad:6px;--ibg:#f5ecd2;--ibr:0px;--ish:0 6px 16px rgba(0,0,0,.25)}
.pv .fr-double{--ibw:7px;--ibs:double;--ipad:6px;--ibr:0px}
.pv .fr-vintage{--ibw:10px;--ibc:#fffaf0;--ibr:4px;--ish:0 4px 14px rgba(60,40,20,.3);--iflt:sepia(.45) saturate(.85) contrast(1.05)}
.pv .fr-circle{--ibr:50%;aspect-ratio:1/1!important;height:auto!important;object-fit:cover}
.pv .fr-arch{--ibr:999px 999px 6px 6px}
.pv .fr-blob{--ibr:42% 58% 63% 37% / 41% 44% 56% 59%}
.pv .fr-offset{--ish:14px 14px 0 var(--acc);--ibr:0px}
.pv .fr-neon{--ibw:2px;--ibc:var(--acc);--ish:0 0 0 3px var(--acc),0 0 28px var(--acc)}

/* ======================================================================
   Designer families (2026-11-14): tide, ember, folio, block, bento, craft, glow, swiss, retro, lens.
   Each family brings its own fonts (render.js FAMILIES gf) and works with any palette.
   ====================================================================== */
/* shared: gallery captions sit on the picture; first picture is big */
.pv:is(.tf-tide,.tf-bento,.tf-craft,.tf-lens,.tf-glow,.tf-retro) .gl figure{position:relative}
.pv:is(.tf-tide,.tf-bento,.tf-craft,.tf-lens,.tf-glow,.tf-retro) .gl figcaption{position:absolute;left:12px;bottom:12px;margin:0;background:var(--bg);color:var(--ink);padding:4px 12px;border-radius:999px;font-size:13px;font-weight:600}
.pv:is(.tf-tide,.tf-bento,.tf-lens,.tf-glow) .gl{grid-template-columns:repeat(3,1fr)}
.pv:is(.tf-tide,.tf-bento,.tf-lens,.tf-glow) .gl:has(>figure:nth-child(5):last-child){grid-template-columns:repeat(4,1fr)}
.pv:is(.tf-tide,.tf-bento,.tf-lens,.tf-glow) .gl figure:first-child{grid-column:span 2;grid-row:span 2}
.pv:is(.tf-tide,.tf-bento,.tf-lens,.tf-glow) .gl figure:first-child>:is(img,svg){height:100%;aspect-ratio:auto}

/* ---------- Tide: airy, rounded, floating menu ---------- */
.pv.tf-tide h1{font-size:64px;letter-spacing:-.025em;line-height:1.02}
.pv.tf-tide h2{font-size:40px;letter-spacing:-.02em}
.pv.tf-tide .hd{border:0;margin:16px var(--pad) 0;border-radius:999px;background:var(--card);box-shadow:0 8px 30px rgba(0,0,0,.08);padding:10px 12px 10px 24px}
.pv.tf-tide .bt{border-radius:999px;padding:14px 26px}
.pv.tf-tide .dr>summary{border-radius:999px}
.pv.tf-tide .s-hero{padding:24px var(--pad) 0}
.pv.tf-tide .s-hero .hx{background:linear-gradient(140deg,var(--soft),var(--bg) 85%);border-radius:40px;padding:72px 64px}
.pv.tf-tide .hm,.pv.tf-tide .fm{border-radius:32px}
.pv.tf-tide .hl-split .hm{aspect-ratio:1;box-shadow:0 30px 60px -20px rgba(0,0,0,.25)}
.pv.tf-tide .ey{display:inline-block;background:var(--card);color:var(--ink);padding:6px 14px;border-radius:999px;letter-spacing:.06em;box-shadow:0 2px 10px rgba(0,0,0,.06)}
.pv.tf-tide .stt{gap:16px}
.pv.tf-tide .stt>div{background:var(--soft);border-radius:28px;padding:28px 16px}
.pv.tf-tide .stt b{color:var(--ink);font-size:48px}
.pv.tf-tide .tl-cards .ti{border:0;border-radius:28px;padding:28px;box-shadow:0 10px 30px -10px rgba(0,0,0,.14)}
.pv.tf-tide .meta{display:inline-block;align-self:flex-start;background:var(--soft);color:var(--ink);border-radius:999px;padding:4px 12px;letter-spacing:.04em}
.pv.tf-tide .gl{gap:16px}.pv.tf-tide .gl figure>:is(img,svg){border-radius:24px}
.pv.tf-tide .qs blockquote{background:var(--card);border-radius:28px;box-shadow:0 10px 30px -10px rgba(0,0,0,.14);position:relative;padding:34px 28px 26px}
.pv.tf-tide .qs blockquote:before{content:"“";position:absolute;top:-6px;left:24px;font:700 70px/1 var(--hf);color:var(--acc)}
.pv.tf-tide .ct>div{background:var(--soft);border-radius:24px;padding:20px}
.pv.tf-tide .s-cta.bg-default,.pv.tf-tide .s-cta.bg-auto{background:transparent}
.pv.tf-tide .s-cta .w{background:var(--acc);color:var(--oa);border-radius:40px;padding:72px 48px;max-width:calc(1200px - 2 * var(--pad))}
.pv.tf-tide .s-cta .bt{background:var(--bg);color:var(--ink)}
.pv.tf-tide .ft{border-radius:40px 40px 0 0;margin-top:24px}

/* ---------- Ember: dark, warm, elegant ---------- */
.pv.tf-ember h1,.pv.tf-ember h2{font-weight:500}
.pv.tf-ember h1{font-size:78px;line-height:1;letter-spacing:-.01em}
.pv.tf-ember h2{font-size:44px;font-style:italic}
.pv.tf-ember .hd{border-bottom:1px solid var(--line)}
.pv.tf-ember :is(.mn,.dr>summary){font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.14em}
.pv.tf-ember .bt{border-radius:0;text-transform:uppercase;letter-spacing:.16em;font-size:13px;padding:15px 28px}
.pv.tf-ember .bt2{box-shadow:inset 0 0 0 1px currentColor}
.pv.tf-ember .ey{letter-spacing:.3em;font-weight:600;display:flex;align-items:center;gap:14px}
.pv.tf-ember .ey:before{content:"";width:40px;height:1px;background:currentColor}
.pv.tf-ember .hl-overlay .hx{min-height:640px;align-items:center}
.pv.tf-ember .hl-overlay .hm:after{background:linear-gradient(90deg,rgba(0,0,0,.82),rgba(0,0,0,.3) 75%),linear-gradient(0deg,rgba(0,0,0,.6),transparent 50%)}
.pv:is(.tf-ember,.tf-craft) .s-contact .w{text-align:center}
.pv.tf-ember .sh{justify-content:center;text-align:center;flex-direction:column;align-items:center;gap:6px}
.pv.tf-ember .sh:after{content:"✦";color:var(--acc);font-size:14px}
.pv.tf-ember .in{text-align:center;margin:0 auto 28px}
.pv.tf-ember .stt{gap:0}
.pv.tf-ember .stt>div{border-left:1px solid var(--line);padding:8px}.pv.tf-ember .stt>div:first-child{border:0}
.pv.tf-ember .stt b{font-style:italic;font-weight:500}
.pv.tf-ember .stt span{font-size:12px;text-transform:uppercase;letter-spacing:.2em;opacity:.75}
.pv.tf-ember .tl-cols{gap:0 72px;max-width:1000px;margin:0 auto}
.pv.tf-ember .tl-cols .ti{border-bottom:0;padding:16px 0}
.pv.tf-ember .tl-cols .tx{display:grid;grid-template-columns:1fr auto;column-gap:12px}
.pv.tf-ember .tl-cols .meta{grid-column:2;grid-row:1;align-self:end;font-weight:600;letter-spacing:.14em}
.pv.tf-ember .tl-cols h3{grid-column:1;grid-row:1;font-size:22px;display:flex;gap:12px;align-items:baseline}
.pv.tf-ember .tl-cols h3:after{content:"";flex:1;border-bottom:1px dotted var(--mute);transform:translateY(-5px)}
.pv.tf-ember .tl-cols p{grid-column:1/-1;font-style:italic}
.pv.tf-ember .tl-cols b{display:none}
.pv.tf-ember .fm{border-radius:0;outline:1px solid var(--acc);outline-offset:14px}
.pv.tf-ember .fe h3{font-size:42px;font-weight:500}
.pv.tf-ember .gl{gap:4px}.pv.tf-ember .gl figure>:is(img,svg){border-radius:0}
.pv.tf-ember .qs blockquote{background:transparent;border-top:1px solid var(--acc);border-radius:0;text-align:center;color:inherit}
.pv.tf-ember .qs blockquote p{font-style:italic;font-size:24px}
.pv.tf-ember .ct{text-align:center}
.pv.tf-ember .s-cta{border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.pv.tf-ember .s-cta.bg-default,.pv.tf-ember .s-cta.bg-auto{background:transparent}
.pv.tf-ember .s-cta h2{font-size:56px}
.pv.tf-ember .ft{background:var(--bg);color:var(--ink);border-top:1px solid var(--line)}
.pv.tf-ember .ft .mt{color:var(--acc)}

/* ---------- Folio: fashion magazine ---------- */
.pv.tf-folio main{counter-reset:fsec}
.pv.tf-folio h1{font-size:132px;line-height:.9;letter-spacing:-.035em;font-weight:400}
.pv.tf-folio h2{font-size:58px;letter-spacing:-.02em;font-weight:400}
.pv.tf-folio h3{font-weight:400;font-size:28px}
.pv.tf-folio .hd{border-bottom:1px solid var(--ink)}
.pv.tf-folio .mn{text-transform:uppercase;font-size:12px;letter-spacing:.16em;font-weight:500}
.pv.tf-folio .bt{border-radius:999px;font-weight:500;background:var(--ink);color:var(--oi)}
.pv.tf-folio .bt2{background:transparent;color:inherit}
.pv.tf-folio .hl-editorial .hx{display:grid;grid-template-columns:1fr 1fr;gap:28px 48px;align-items:end}
.pv.tf-folio .hl-editorial .ht{display:contents}
.pv.tf-folio .hl-editorial .ey{max-width:none;grid-column:1/-1;grid-row:1;color:var(--ink);border-top:1px solid var(--ink);padding-top:10px;font-weight:500}
.pv.tf-folio .hl-editorial h1{grid-column:1/-1;grid-row:2;margin:0}
.pv.tf-folio .hl-editorial p{grid-column:1;grid-row:3;font-size:21px;max-width:34ch;align-self:start}
.pv.tf-folio .hl-editorial .bts{grid-column:1;grid-row:4;align-self:start}
.pv.tf-folio .hl-editorial .hm{grid-column:2;grid-row:3/6;aspect-ratio:4/5;border-radius:0}
.pv.tf-folio .sh{border-top:1px solid var(--ink);padding-top:14px;margin-bottom:32px}
.pv.tf-folio .sh h2:before{counter-increment:fsec;content:counter(fsec,decimal-leading-zero);display:block;font:500 13px/1 var(--bf);letter-spacing:.16em;margin-bottom:14px}
.pv.tf-folio .tl-rule{gap:40px 32px}
.pv.tf-folio .tl-rule .ti{border-top:1px solid var(--ink);padding-top:18px}
.pv.tf-folio .meta{color:var(--ink);font-weight:500;letter-spacing:.16em}
.pv.tf-folio .ti h3{font-size:30px}
.pv.tf-folio .stt{text-align:left}.pv.tf-folio .stt>div{border-top:1px solid var(--ink);padding-top:12px}
.pv.tf-folio .stt b{color:var(--ink);font-size:72px;font-weight:400}
.pv.tf-folio .fe h3{font-size:56px}
.pv.tf-folio .fm{border-radius:0;aspect-ratio:4/5}
.pv.tf-folio .gl figure>:is(img,svg){border-radius:0;aspect-ratio:3/4}
.pv.tf-folio .qs blockquote{background:transparent;border-left:1px solid var(--ink);border-radius:0;padding:0 0 0 24px}
.pv.tf-folio .qs blockquote p{font-size:30px;line-height:1.2}
.pv.tf-folio .s-cta h2{font-size:84px}
.pv.tf-folio .s-cta.bg-default,.pv.tf-folio .s-cta.bg-auto{background:transparent;border-top:1px solid var(--ink)}
.pv.tf-folio .ft{background:var(--bg);color:var(--ink);border-top:1px solid var(--ink)}

/* ---------- Block party: neo-brutalist ---------- */
.pv.tf-block{--bw:3px;--hs:6px 6px 0 var(--ink)}
.pv.tf-block h1{font-size:72px;letter-spacing:-.03em;line-height:1}
.pv.tf-block h2{font-size:44px;letter-spacing:-.02em}
.pv.tf-block .hd{border-bottom:var(--bw) solid var(--ink)}
.pv.tf-block .bt{border:var(--bw) solid var(--ink);box-shadow:4px 4px 0 var(--ink);color:var(--oa);background:var(--acc)}
.pv.tf-block .bt2{background:var(--bg);color:var(--ink);box-shadow:4px 4px 0 var(--ink)}
.pv.tf-block .dr>summary{border-width:var(--bw)}
.pv.tf-block .ey{display:inline-block;background:var(--ink);color:var(--oi);padding:6px 12px;transform:rotate(-1.5deg)}
.pv.tf-block .s-hero{border-bottom:var(--bw) solid var(--ink);background:var(--soft)}
.pv.tf-block .hm,.pv.tf-block .fm{border:var(--bw) solid var(--ink);box-shadow:var(--hs)}
.pv.tf-block .stt{gap:0;border:var(--bw) solid var(--ink);box-shadow:var(--hs)}
.pv.tf-block .stt>div{padding:26px 10px;border-left:var(--bw) solid var(--ink)}.pv.tf-block .stt>div:first-child{border-left:0}
.pv.tf-block .stt>div:nth-child(odd){background:var(--acc);color:var(--oa)}
.pv.tf-block .stt b{color:inherit;font-size:54px}
.pv.tf-block .tl-cards .ti{border:var(--bw) solid var(--ink);box-shadow:var(--hs);color:var(--ink)}
.pv.tf-block .tl-cards .ti:nth-child(3n+2){background:var(--soft)}
.pv.tf-block .meta{display:inline-block;align-self:flex-start;border:2px solid var(--ink);padding:2px 8px;color:var(--ink);background:var(--bg)}
.pv.tf-block .gl figure>:is(img,svg){border:var(--bw) solid var(--ink)}
.pv.tf-block .qs blockquote{border:var(--bw) solid var(--ink);box-shadow:var(--hs);background:var(--card)}
.pv.tf-block .qs blockquote:nth-child(2){transform:rotate(1deg);background:var(--soft)}
.pv.tf-block .ct>div{border:var(--bw) solid var(--ink);padding:16px;background:var(--card);color:var(--ink)}
.pv.tf-block .s-cta,.pv.tf-block .s-cta.bg-default{background:var(--acc);color:var(--oa);border-top:var(--bw) solid var(--ink);border-bottom:var(--bw) solid var(--ink)}
.pv.tf-block .s-cta h2{font-size:56px}
.pv.tf-block .s-cta .bt{background:var(--bg)}
.pv.tf-block .ft .fb :is(svg,img){border:var(--bw) solid var(--oi)}

/* ---------- Bento: rounded panels ---------- */
.pv.tf-bento{background:var(--soft);--gap:14px}
.pv.tf-bento h1{font-size:62px;letter-spacing:-.035em;line-height:1}
.pv.tf-bento h2{font-size:36px;letter-spacing:-.03em}
.pv.tf-bento .s{padding:calc(var(--sy) * .4) 0}
.pv.tf-bento .hd{margin:12px var(--pad) 0;border:0;border-radius:22px;background:var(--card)}
.pv.tf-bento .bt{border-radius:14px}
.pv.tf-bento .s-hero .hx{display:grid;grid-template-columns:3fr 2fr;gap:14px;padding:24px var(--pad) 0}
.pv.tf-bento .s-hero .ht{background:var(--card);color:var(--ink);border-radius:28px;padding:56px 48px}
.pv.tf-bento .hl-split .hm{border-radius:28px;aspect-ratio:auto;position:relative;min-height:320px}
.pv.tf-bento .hl-split .hm>:is(svg,img){position:absolute;inset:0}
.pv.tf-bento .tl-bento .ti:nth-child(5):nth-last-child(2),.pv.tf-bento .tl-bento .ti:nth-child(6):last-child{grid-column:span 2}
.pv.tf-bento :is(.s-tiles,.s-stats,.s-gallery,.s-quotes,.s-contact,.s-list,.s-text,.s-videos,.s-podcast)>.w{background:var(--card);color:var(--ink);border-radius:28px;padding:36px 40px;max-width:calc(1200px - 2 * var(--pad))}
.pv.tf-bento .s.bg-ink>.w,.pv.tf-bento .s.bg-soft>.w,.pv.tf-bento .s.bg-acc>.w{background:var(--card);color:var(--ink)}
.pv.tf-bento .s.bg-ink,.pv.tf-bento .s.bg-soft,.pv.tf-bento .s.bg-acc,.pv.tf-bento .s.bg-default{background:transparent;color:var(--ink)}
.pv.tf-bento .s-stats>.w{background:transparent;padding:0}
.pv.tf-bento .stt{gap:14px;text-align:left}
.pv.tf-bento .stt>div{background:var(--card);border-radius:28px;padding:28px}
.pv.tf-bento .stt>div:first-child{background:var(--acc);color:var(--oa)}.pv.tf-bento .stt>div:first-child b{color:inherit}
.pv.tf-bento .stt b{font-size:52px;color:var(--ink);letter-spacing:-.03em}
.pv.tf-bento .tl-bento .ti{border-radius:22px;padding:24px}
.pv.tf-bento .tl-bento .ti:first-child{background:var(--acc);color:var(--oa)}.pv.tf-bento .tl-bento .ti:first-child :is(p,b,.meta){color:inherit}
.pv.tf-bento .tl-bento .ti:nth-child(4){background:var(--ink);color:var(--oi)}
.pv.tf-bento .fe-card{border:0;border-radius:28px;padding:20px}.pv.tf-bento .fm{border-radius:20px}
.pv.tf-bento .gl{gap:10px}.pv.tf-bento .gl figure>:is(img,svg){border-radius:20px}
.pv.tf-bento .qs blockquote{border-radius:22px}
.pv.tf-bento .ct>div{background:var(--soft);border-radius:20px;padding:18px}
.pv.tf-bento .s-cta .w{background:var(--ink);color:var(--oi);border-radius:28px;padding:64px 40px;max-width:calc(1200px - 2 * var(--pad))}
.pv.tf-bento .ft{margin:14px var(--pad) var(--pad);border-radius:28px}

/* ---------- Handmade: warm, arched, stitched ---------- */
.pv.tf-craft h1{font-size:62px;line-height:1.05}
.pv.tf-craft h2{font-size:40px}
.pv.tf-craft .hd{border-bottom:2px dashed var(--line)}
.pv.tf-craft .bt{border-radius:999px;padding:14px 26px}
.pv.tf-craft .ey{color:var(--acc);letter-spacing:.2em}
.pv.tf-craft .hl-split .hx{grid-template-columns:5fr 6fr}
.pv.tf-craft .hl-split .hm{order:-1;aspect-ratio:4/5;border-radius:999px 999px 18px 18px;border:10px solid var(--soft)}
.pv.tf-craft .sh{flex-direction:column;align-items:center;text-align:center;gap:8px}
.pv.tf-craft .sh:before{content:"";width:12px;height:12px;background:var(--acc);transform:rotate(45deg);order:-1}
.pv.tf-craft .in{text-align:center;margin:0 auto 26px}
.pv.tf-craft .stt b{font-family:var(--hf);font-weight:400}
.pv.tf-craft .stt>div{border:2px dashed var(--line);border-radius:999px;padding:22px 10px}
.pv.tf-craft .tl-cards .ti{border:2px dashed var(--line);border-radius:22px;padding:14px 14px 22px;background:var(--card)}
.pv.tf-craft .tl-cards .tim{border-radius:999px 999px 12px 12px;aspect-ratio:1}
.pv.tf-craft .tl-cards .tx{padding:0 8px;text-align:center;align-items:center}
.pv.tf-craft .meta{color:var(--acc)}
.pv.tf-craft .fe-split{grid-template-columns:2fr 3fr}
.pv.tf-craft .fm{border-radius:999px 999px 18px 18px;aspect-ratio:4/5}
.pv.tf-craft .gl figure>:is(img,svg){border-radius:18px}
.pv.tf-craft .gl figure:nth-child(3n+2)>:is(img,svg){border-radius:999px 999px 18px 18px}
.pv.tf-craft .qs blockquote{background:var(--card);border:2px dashed var(--line);border-radius:22px;text-align:center}
.pv.tf-craft .qs blockquote p:before{content:"♥";display:block;color:var(--acc);font-size:18px;margin-bottom:6px}
.pv.tf-craft .ct{text-align:center}
.pv.tf-craft .ft{position:relative;margin-top:30px}
.pv.tf-craft .ft:before{content:"";position:absolute;left:0;right:0;top:-18px;height:19px;background:radial-gradient(circle at 18px 19px,var(--ink) 17px,transparent 18px) 0 0/36px 19px repeat-x}
.pv.tf-craft .s-cta .w{border:2px dashed currentColor;border-radius:28px;padding:56px 32px;max-width:calc(1000px - 2 * var(--pad))}

/* ---------- Glow: dark, modern, soft light ---------- */
.pv.tf-glow{background:radial-gradient(900px 600px at 15% 0%,color-mix(in srgb,var(--acc) 22%,transparent),transparent 70%),radial-gradient(800px 600px at 100% 30%,color-mix(in srgb,var(--acc) 12%,transparent),transparent 70%),var(--bg)}
.pv.tf-glow h1{font-size:76px;letter-spacing:-.04em;line-height:1.02;background:linear-gradient(180deg,var(--ink) 30%,color-mix(in srgb,var(--ink) 55%,var(--acc)));-webkit-background-clip:text;background-clip:text;color:transparent}
.pv.tf-glow h2{font-size:42px;letter-spacing:-.03em}
.pv.tf-glow .hd{background:transparent;border-bottom:1px solid var(--line)}
.pv.tf-glow .bt{border-radius:12px;box-shadow:0 0 0 1px color-mix(in srgb,var(--acc) 60%,#fff),0 10px 34px -6px var(--acc)}
.pv.tf-glow .bt2{box-shadow:inset 0 0 0 1px var(--line);background:color-mix(in srgb,var(--ink) 6%,transparent)}
.pv.tf-glow .ey{display:inline-block;padding:6px 14px;border-radius:999px;border:1px solid var(--line);background:color-mix(in srgb,var(--ink) 5%,transparent);color:var(--ink);letter-spacing:.08em}
.pv.tf-glow .hl-center .hm{border-radius:22px;box-shadow:0 0 0 1px var(--line),0 40px 120px -30px var(--acc)}
.pv.tf-glow .s.bg-soft,.pv.tf-glow .s.bg-default{background:transparent}
.pv.tf-glow .stt>div{border:1px solid var(--line);border-radius:18px;padding:26px 10px;background:color-mix(in srgb,var(--ink) 4%,transparent)}
.pv.tf-glow .stt b{background:linear-gradient(90deg,var(--ink),var(--acc));-webkit-background-clip:text;background-clip:text;color:transparent}
.pv.tf-glow .tl-cards .ti,.pv.tf-glow .qs blockquote,.pv.tf-glow .ct>div,.pv.tf-glow .pod{background:color-mix(in srgb,var(--ink) 5%,transparent);border:1px solid var(--line);border-radius:18px;color:var(--ink)}
.pv.tf-glow .ct>div{padding:18px}
.pv.tf-glow .tl-cards .ti h3:before{content:"";display:block;width:36px;height:36px;border-radius:10px;margin-bottom:16px;background:linear-gradient(135deg,var(--acc),color-mix(in srgb,var(--acc) 40%,var(--ink)));box-shadow:0 8px 24px -6px var(--acc)}
.pv.tf-glow .tl-cards .tim+.tx h3:before{display:none}
.pv.tf-glow .fm{border-radius:22px;box-shadow:0 0 0 1px var(--line)}
.pv.tf-glow .gl figure>:is(img,svg){border-radius:18px}
.pv.tf-glow .s-cta .w{border:1px solid var(--line);border-radius:28px;padding:72px 40px;max-width:calc(1100px - 2 * var(--pad));background:radial-gradient(600px 300px at 50% 0%,color-mix(in srgb,var(--acc) 30%,transparent),transparent)}
.pv.tf-glow .s-cta.bg-default,.pv.tf-glow .s-cta.bg-auto{background:transparent}
.pv.tf-glow .ft{background:transparent;color:var(--ink);border-top:1px solid var(--line)}

/* ---------- Swiss grid ---------- */
.pv.tf-swiss h1{font-size:112px;line-height:.92;letter-spacing:-.05em}
.pv.tf-swiss h2{font-size:22px;letter-spacing:-.01em}
.pv.tf-swiss h3{letter-spacing:-.02em}
.pv.tf-swiss .hd{border-bottom:2px solid var(--ink)}
.pv.tf-swiss .bt{border-radius:0;padding:14px 22px}
.pv.tf-swiss .ey{color:var(--ink);font-weight:800;letter-spacing:.02em;text-transform:none;font-size:16px}
.pv.tf-swiss .ey:before{content:"";display:inline-block;width:12px;height:12px;background:var(--acc);margin-right:10px}
.pv.tf-swiss .hl-editorial .ht{max-width:none;border-bottom:2px solid var(--ink)}
.pv.tf-swiss .hl-editorial p{font-size:22px;max-width:36ch}
.pv.tf-swiss .hm,.pv.tf-swiss .fm,.pv.tf-swiss .gl figure>:is(img,svg){border-radius:0}
.pv.tf-swiss .s:not(.s-hero):not(.s-cta) .w{display:grid;grid-template-columns:240px 1fr;gap:0 48px;border-top:2px solid var(--ink);padding-top:22px}
.pv.tf-swiss .s:not(.s-hero):not(.s-cta) .w>*{grid-column:2}
.pv.tf-swiss .s:not(.s-hero):not(.s-cta) .w>.sh{grid-column:1;grid-row:1/span 9;align-self:start;flex-direction:column;align-items:flex-start;gap:8px}
.pv.tf-swiss .s:not(.s-hero):not(.s-cta) .w>.in{margin:0 0 20px}
.pv.tf-swiss .s:not(.s-hero):not(.s-cta) .w:not(:has(>.sh))>*{grid-column:1/-1}
.pv.tf-swiss .s-cta p{margin-left:0}
.pv.tf-swiss .s:not(.s-hero):not(.s-cta) .w>.bt{justify-self:start}
.pv.tf-swiss .sh h2:before{content:"";display:block;width:12px;height:12px;background:var(--acc);margin-bottom:12px}
.pv.tf-swiss main{counter-reset:sw}
.pv.tf-swiss .tl-rule{gap:32px 24px}
.pv.tf-swiss .tl-rule .ti{border-top:2px solid var(--ink);counter-increment:sw}
.pv.tf-swiss .tl-rule .ti h3:before{content:counter(sw,decimal-leading-zero);display:block;font-size:13px;color:var(--acc);margin-bottom:8px}
.pv.tf-swiss .meta{color:var(--mute)}
.pv.tf-swiss .stt{text-align:left;grid-template-columns:repeat(4,1fr)}
.pv.tf-swiss .stt b{color:var(--ink);font-size:64px;letter-spacing:-.04em}
.pv.tf-swiss .fe h3{font-size:44px;letter-spacing:-.03em}
.pv.tf-swiss .qs blockquote{background:transparent;border-radius:0;border-top:2px solid var(--acc);padding:16px 0 0}
.pv.tf-swiss .qs blockquote p{font-family:var(--bf);font-weight:700;font-size:20px}
.pv.tf-swiss .s-cta.bg-default,.pv.tf-swiss .s-cta.bg-auto{background:var(--acc);color:var(--oa)}
.pv.tf-swiss .s-cta .w{text-align:left}.pv.tf-swiss .s-cta h2{font-size:72px;letter-spacing:-.04em;max-width:14ch}
.pv.tf-swiss .s-cta .bt{background:var(--ink);color:var(--oi)}

/* ---------- Sunny retro ---------- */
.pv.tf-retro h1{font-size:84px;line-height:.95;letter-spacing:-.03em}
.pv.tf-retro h2{font-size:46px;letter-spacing:-.02em}
.pv.tf-retro .bt{border-radius:999px;border:3px solid var(--ink);color:var(--oa);padding:13px 28px;box-shadow:0 5px 0 var(--ink)}
.pv.tf-retro .bt2{background:var(--bg);color:var(--ink)}
.pv.tf-retro .hd{border-bottom:3px solid var(--ink)}
.pv.tf-retro .ey{display:inline-block;background:var(--acc);color:var(--oa);padding:8px 18px;border-radius:999px;transform:rotate(-3deg)}
.pv.tf-retro .s-hero{position:relative;padding-bottom:64px;background:var(--soft)}
.pv.tf-retro .s-hero:after{content:"";position:absolute;left:0;right:0;bottom:0;height:48px;background:linear-gradient(var(--acc) 0 33%,var(--bg) 33% 45%,var(--ink) 45% 78%,var(--bg) 78% 88%,var(--acc) 88%)}
.pv.tf-retro .hl-center .hm{border-radius:999px 999px 24px 24px;aspect-ratio:21/9;border:3px solid var(--ink)}
.pv.tf-retro .stt>div{position:relative}
.pv.tf-retro .stt b{display:grid;place-items:center;width:150px;height:150px;margin:0 auto 10px;border-radius:50%;background:var(--acc);color:var(--oa);font-size:40px;border:3px solid var(--ink);transform:rotate(-6deg)}
.pv.tf-retro .stt>div:nth-child(even) b{background:var(--soft);color:var(--ink);transform:rotate(5deg)}
.pv.tf-retro .stt span{font-weight:700}
.pv.tf-retro .tl-cards .ti{border:3px solid var(--ink);border-radius:26px;box-shadow:0 6px 0 var(--ink);color:var(--ink)}
.pv.tf-retro .tl-cards .ti:nth-child(3n+1){background:var(--soft)}
.pv.tf-retro .tl-cards .ti:nth-child(3n+2){background:var(--card)}
.pv.tf-retro .tl-cards .ti:nth-child(3n){background:var(--acc);color:var(--oa)}
.pv.tf-retro .tl-cards .ti:nth-child(3n) :is(p,b,.meta){color:inherit}
.pv.tf-retro .meta{color:inherit}
.pv.tf-retro .fm,.pv.tf-retro .gl figure>:is(img,svg){border:3px solid var(--ink);border-radius:26px}
.pv.tf-retro .qs blockquote{background:var(--card);border:3px solid var(--ink);border-radius:26px;position:relative;margin-bottom:22px}
.pv.tf-retro .qs blockquote:after{content:"";position:absolute;left:36px;bottom:-20px;width:28px;height:28px;background:var(--card);border-right:3px solid var(--ink);border-bottom:3px solid var(--ink);transform:skewY(35deg) rotate(45deg)}
.pv.tf-retro .s-cta,.pv.tf-retro .s-cta.bg-default{background:repeating-conic-gradient(from 0deg at 50% 120%,var(--acc) 0 6deg,color-mix(in srgb,var(--acc) 82%,var(--bg)) 6deg 12deg);color:var(--oa)}
.pv.tf-retro .s-cta h2{font-size:64px}
.pv.tf-retro .s-cta .bt{background:var(--bg)}

/* ---------- Lens: photo first ---------- */
.pv.tf-lens h1{font-size:96px;line-height:.95;letter-spacing:-.04em;font-weight:600}
.pv.tf-lens h2{font-size:44px;letter-spacing:-.03em;font-weight:500}
.pv.tf-lens .hd{border:0}
.pv.tf-lens .mn{font-weight:400;letter-spacing:.06em}
.pv.tf-lens .bt{border-radius:999px;font-weight:500}
.pv.tf-lens .hl-overlay .hx{min-height:760px;padding-bottom:72px}
.pv.tf-lens .hl-overlay .hm:after{background:linear-gradient(0deg,rgba(0,0,0,.78),rgba(0,0,0,.18) 70%)}
.pv.tf-lens .hl-overlay .bt2{color:#fff}
.pv.tf-lens .ey{color:#fff;font-weight:500;letter-spacing:.24em}
.pv.tf-lens .stt{text-align:left}.pv.tf-lens .stt>div{border-left:2px solid var(--acc);padding-left:16px}
.pv.tf-lens .stt b{color:var(--ink);font-weight:500;letter-spacing:-.03em}
.pv.tf-lens .tl-cards{gap:12px}
.pv.tf-lens .tl-cards .ti{position:relative;border:0;padding:0;border-radius:var(--r);overflow:hidden;min-height:380px;background:var(--ink);color:#fff}
.pv.tf-lens .tl-cards .tim{position:absolute;inset:0;margin:0;aspect-ratio:auto;border-radius:0}
.pv.tf-lens .tl-cards .tim:after{content:"";position:absolute;inset:0;background:linear-gradient(0deg,rgba(0,0,0,.78),rgba(0,0,0,0) 65%)}
.pv.tf-lens .tl-cards .tx{position:relative;margin-top:auto;padding:22px;justify-content:flex-end}
.pv.tf-lens .tl-cards .ti :is(p,b,.meta){color:rgba(255,255,255,.88)}
.pv.tf-lens .tl-cards .ti b{margin-top:6px}
.pv.tf-lens .fe-wide .fx .bt{justify-self:start}
.pv.tf-lens .fe-wide .fm{aspect-ratio:21/9;border-radius:var(--r)}
.pv.tf-lens .fe-wide .fx{display:grid;grid-template-columns:1fr 1fr;gap:0 48px;max-width:none}
.pv.tf-lens .fe-wide .fx .ey{grid-column:1/-1;color:var(--acc)}
.pv.tf-lens .fe-wide .fx h3{grid-column:1;grid-row:2/5;font-size:40px}
.pv.tf-lens .fe-wide .fx>:not(h3):not(.ey){grid-column:2}
.pv.tf-lens .s-gallery .w{max-width:none;padding:0 6px}
.pv.tf-lens .s-gallery .sh{max-width:1200px;margin:0 auto 18px;padding:0 var(--pad)}
.pv.tf-lens .gl{gap:6px}.pv.tf-lens .gl figure>:is(img,svg){border-radius:0}
.pv.tf-lens .qs blockquote{background:transparent;border-radius:0;padding:0}
.pv.tf-lens .qs blockquote p{font-size:26px;font-weight:300}
.pv.tf-lens .qs cite:before{content:"— "}
.pv.tf-lens .s-cta.bg-default,.pv.tf-lens .s-cta.bg-auto{background:var(--ink);color:var(--oi)}
.pv.tf-lens .s-cta h2{font-size:64px;letter-spacing:-.04em}


/* designer families on dark or accent bands: everything inside switches to the band's text colour */
.pv:is(.tf-tide,.tf-ember,.tf-folio,.tf-block,.tf-craft,.tf-glow,.tf-swiss,.tf-retro,.tf-lens,.tf-hearth,.tf-volt,.tf-loom,.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight) .s.bg-ink>.w{--ink:var(--oi);--line:color-mix(in srgb,var(--oi) 28%,transparent);--mute:color-mix(in srgb,var(--oi) 72%,transparent);--card:color-mix(in srgb,var(--oi) 8%,transparent);--soft:color-mix(in srgb,var(--oi) 12%,transparent)}
.pv:is(.tf-tide,.tf-ember,.tf-folio,.tf-block,.tf-craft,.tf-glow,.tf-swiss,.tf-retro,.tf-lens,.tf-hearth,.tf-volt,.tf-loom,.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight) .s.bg-acc>.w{--ink:var(--oa);--line:color-mix(in srgb,var(--oa) 30%,transparent);--mute:color-mix(in srgb,var(--oa) 78%,transparent);--card:color-mix(in srgb,var(--oa) 10%,transparent);--soft:color-mix(in srgb,var(--oa) 14%,transparent)}
.pv:is(.tf-tide,.tf-ember,.tf-folio,.tf-block,.tf-craft,.tf-glow,.tf-swiss,.tf-retro,.tf-lens,.tf-hearth,.tf-volt,.tf-loom,.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight) .s.bg-ink .meta,.pv:is(.tf-tide,.tf-ember,.tf-folio,.tf-block,.tf-craft,.tf-glow,.tf-swiss,.tf-retro,.tf-lens,.tf-hearth,.tf-volt,.tf-loom,.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight) .s.bg-acc .meta{color:inherit}
/* designer families: tablet */
@container (min-width:600px) and (max-width:1023.98px){
.pv:is(.tf-tide,.tf-craft,.tf-bento) h1{font-size:48px}
.pv.tf-ember h1,.pv.tf-glow h1,.pv.tf-block h1,.pv.tf-retro h1{font-size:56px}
.pv.tf-folio h1,.pv.tf-swiss h1,.pv.tf-lens h1{font-size:76px}
.pv.tf-folio h2,.pv.tf-swiss .s-cta h2,.pv.tf-lens .s-cta h2,.pv.tf-retro .s-cta h2,.pv.tf-folio .s-cta h2{font-size:44px}
.pv.tf-tide .s-hero .hx{padding:48px 36px}
.pv.tf-bento .s-hero .hx{grid-template-columns:1fr}.pv.tf-bento .hl-split .hm{aspect-ratio:16/9}
.pv.tf-swiss .s:not(.s-hero):not(.s-cta) .w{grid-template-columns:170px 1fr;gap:0 28px}
.pv.tf-swiss .stt{grid-template-columns:repeat(2,1fr)}
.pv.tf-retro .stt b{width:120px;height:120px;font-size:32px}
.pv:is(.tf-tide,.tf-bento,.tf-lens,.tf-glow) .gl{grid-template-columns:repeat(3,1fr)}
.pv.tf-lens .hl-overlay .hx{min-height:600px}
}
/* designer families: phone */
@container (max-width:599.98px){
.pv:is(.tf-tide,.tf-craft,.tf-bento,.tf-block,.tf-glow,.tf-ember,.tf-retro) h1{font-size:40px}
.pv:is(.tf-folio,.tf-swiss,.tf-lens) h1{font-size:54px}
.pv:is(.tf-tide,.tf-ember,.tf-folio,.tf-block,.tf-bento,.tf-craft,.tf-glow,.tf-retro,.tf-lens) h2{font-size:30px}
.pv:is(.tf-folio,.tf-swiss,.tf-lens,.tf-retro,.tf-block,.tf-ember) .s-cta h2{font-size:36px}
.pv.tf-tide .hd,.pv.tf-bento .hd{margin:10px 12px 0}
.pv.tf-tide .s-hero{padding:12px 12px 0}.pv.tf-tide .s-hero .hx{padding:36px 22px;border-radius:28px}
.pv.tf-tide .s-cta .w,.pv.tf-bento .s-cta .w,.pv.tf-glow .s-cta .w,.pv.tf-craft .s-cta .w{padding:44px 22px;border-radius:28px}
.pv.tf-tide .stt b{font-size:36px}
.pv.tf-ember .hl-overlay .hx{min-height:520px}
.pv.tf-ember .stt{grid-template-columns:1fr 1fr;row-gap:24px}.pv.tf-ember .stt>div{border-left:0}
.pv.tf-ember .tl-cols h3{font-size:19px}
.pv.tf-folio .hl-editorial .hx{grid-template-columns:1fr}
.pv.tf-folio .hl-editorial :is(p,.bts,.hm){grid-column:1;grid-row:auto}
.pv.tf-folio .stt b{font-size:48px}
.pv.tf-folio .fe h3,.pv.tf-swiss .fe h3{font-size:32px}
.pv.tf-folio .qs blockquote p{font-size:24px}
.pv.tf-block .stt{grid-template-columns:1fr 1fr}.pv.tf-block .stt>div{border-left:0;border-top:var(--bw) solid var(--ink)}
.pv.tf-block .stt>div:nth-child(-n+2){border-top:0}.pv.tf-block .stt>div:nth-child(even){border-left:var(--bw) solid var(--ink)}
.pv.tf-block .stt b{font-size:40px}
.pv.tf-bento .s-hero .hx{grid-template-columns:1fr;padding:12px 12px 0}.pv.tf-bento .s-hero .ht{padding:32px 24px}
.pv.tf-bento .hl-split .hm{aspect-ratio:4/3;min-height:0}
.pv.tf-bento :is(.s-tiles,.s-gallery,.s-quotes,.s-contact,.s-list,.s-text,.s-videos,.s-podcast)>.w{padding:24px 20px;margin:0 12px;max-width:none}
.pv.tf-bento .stt{grid-template-columns:1fr 1fr}.pv.tf-bento .stt b{font-size:38px}
.pv.tf-bento .ft{margin:12px}
.pv.tf-craft .hl-split .hx{grid-template-columns:1fr}.pv.tf-craft .hl-split .hm{order:0;max-width:300px;width:100%;margin:0 auto}
.pv.tf-craft .fe-split{grid-template-columns:1fr}.pv.tf-craft .fm{max-width:300px;margin:0 auto}
.pv.tf-craft .stt{grid-template-columns:1fr 1fr}
.pv.tf-glow .stt{grid-template-columns:1fr 1fr}
.pv.tf-swiss .s:not(.s-hero):not(.s-cta) .w{grid-template-columns:1fr}
.pv.tf-swiss .s:not(.s-hero):not(.s-cta) .w>*,.pv.tf-swiss .s:not(.s-hero):not(.s-cta) .w>.sh,.pv.tf-swiss .s:not(.s-hero):not(.s-cta) .w>.in{grid-column:1;grid-row:auto}
.pv.tf-swiss .stt{grid-template-columns:1fr 1fr}.pv.tf-swiss .stt b{font-size:44px}
.pv.tf-retro .stt{grid-template-columns:1fr 1fr}.pv.tf-retro .stt b{width:110px;height:110px;font-size:28px}
.pv.tf-retro .hl-center .hm{aspect-ratio:4/3}
.pv:is(.tf-tide,.tf-bento,.tf-lens,.tf-glow) .gl{grid-template-columns:1fr 1fr}
.pv.tf-lens .hl-overlay .hx{min-height:560px;padding-bottom:40px}
.pv.tf-lens .tl-cards .ti{min-height:300px}
.pv.tf-lens .fe-wide .fx{grid-template-columns:1fr}.pv.tf-lens .fe-wide .fx>*{grid-column:1!important;grid-row:auto!important}
.pv.tf-lens .fe-wide .fm{aspect-ratio:4/3}
}

/* ======================================================================
   Flagship families (2026-11-14): Hearth (cafés), Volt (trades), Loom (makers).
   Photo-led, with gentle motion. Motion only moves things (never hides them), so screenshots stay correct,
   and it switches off for visitors who ask for less motion.
   ====================================================================== */
.pv:is(.tf-hearth,.tf-volt,.tf-loom,.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight) .ti,.pv:is(.tf-hearth,.tf-volt,.tf-loom,.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight) .bt{transition:transform .35s cubic-bezier(.2,.7,.2,1),box-shadow .35s}
.pv:is(.tf-hearth,.tf-volt,.tf-loom,.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight) .tim>img,.pv:is(.tf-hearth,.tf-volt,.tf-loom,.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight) .gl figure>img,.pv:is(.tf-hearth,.tf-volt,.tf-loom,.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight) .fm>img{transition:transform .8s cubic-bezier(.2,.7,.2,1)}
.pv:is(.tf-hearth,.tf-volt,.tf-loom,.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight) .ti:hover .tim>img,.pv:is(.tf-hearth,.tf-volt,.tf-loom,.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight) .gl figure:hover>img{transform:scale(1.06)}
.pv:is(.tf-hearth,.tf-volt,.tf-loom,.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight) .bt:hover{transform:translateY(-2px)}
.pv:is(.tf-hearth,.tf-volt,.tf-loom,.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight) .gl figure{overflow:hidden;border-radius:var(--r)}
@media (prefers-reduced-motion:no-preference){
  .pv:is(.tf-hearth,.tf-volt,.tf-loom,.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight) .s-hero .hm>img{animation:bk-drift 24s ease-in-out infinite alternate}
  @supports (animation-timeline:view()){
    .pv:is(.tf-hearth,.tf-volt,.tf-loom,.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight) main>.s:not(.s-hero) .w>*{animation:bk-rise linear both;animation-timeline:view();animation-range:entry 0% entry 35%}
  }
}
@keyframes bk-drift{from{transform:scale(1)}to{transform:scale(1.08) translate(-1%,-1%)}}
@keyframes bk-rise{from{transform:translateY(40px)}to{transform:none}}

/* ---------- Hearth: cafés and restaurants ---------- */
.pv.tf-hearth{--sy:96px}
.pv.tf-hearth h1{font-size:104px;line-height:.92;font-weight:600;font-style:italic;letter-spacing:-.01em}
.pv.tf-hearth h2{font-size:56px;font-weight:600;letter-spacing:-.01em}
.pv.tf-hearth h3{font-weight:600;font-size:26px}
.pv.tf-hearth .hd{border-bottom:1px solid var(--line)}
.pv.tf-hearth :is(.mn,.dr>summary){font-weight:500;letter-spacing:.12em;text-transform:uppercase;font-size:13px}
.pv.tf-hearth .bt{border-radius:999px;font-weight:500;letter-spacing:.08em;text-transform:uppercase;font-size:13px;padding:15px 30px}
.pv.tf-hearth .ey{font-weight:500;letter-spacing:.32em;display:flex;align-items:center;gap:16px}
.pv.tf-hearth .ey:before,.pv.tf-hearth .hl-overlay .ey:after{content:"";width:44px;height:1px;background:currentColor}
.pv.tf-hearth .hl-overlay .hx{min-height:760px;align-items:center;justify-content:center;max-width:none}
.pv.tf-hearth .hl-overlay .ht{margin:0 auto;text-align:center;max-width:900px}
.pv.tf-hearth .hl-overlay .ey{justify-content:center;max-width:none}
.pv.tf-hearth .hl-overlay p{margin-left:auto;margin-right:auto;font-size:20px;max-width:46ch}
.pv.tf-hearth .hl-overlay .hm:after{background:radial-gradient(ellipse at center,rgba(0,0,0,.5),rgba(0,0,0,.72))}
.pv.tf-hearth .hl-overlay .bt2{color:#fff}
.pv.tf-hearth .s-hero+.s-stats{margin-top:0}
.pv.tf-hearth .s-stats{background:var(--ink);color:var(--oi);padding:40px 0}
.pv.tf-hearth .stt b{font-style:italic;font-weight:600;font-size:54px;color:var(--acc)}
.pv.tf-hearth .stt span{font-size:12px;letter-spacing:.24em;text-transform:uppercase;opacity:.8}
.pv.tf-hearth .sh{flex-direction:column;align-items:center;text-align:center;gap:4px;margin-bottom:12px}
.pv.tf-hearth .sh .mo{font-size:13px;letter-spacing:.14em;text-transform:uppercase;font-weight:500}
.pv.tf-hearth .in{text-align:center;margin:0 auto 48px;font-style:italic;font-family:var(--hf);font-size:22px}
.pv.tf-hearth .tl-menu{grid-template-columns:1fr 1fr!important;gap:36px 64px;max-width:1040px;margin:0 auto}
.pv.tf-hearth .tl-menu .ti{flex-direction:row;align-items:center;gap:22px}
.pv.tf-hearth .tl-menu .tim{flex:0 0 104px;width:104px;aspect-ratio:1;border-radius:50%;margin:0;box-shadow:0 10px 24px -10px rgba(0,0,0,.5)}
.pv.tf-hearth .tl-menu .tx{display:grid;grid-template-columns:1fr auto;column-gap:14px;align-items:baseline}
.pv.tf-hearth .tl-menu h3{grid-column:1;grid-row:1;margin:0;display:flex;align-items:baseline;gap:12px;font-size:28px}
.pv.tf-hearth .tl-menu h3:after{content:"";flex:1;min-width:20px;border-bottom:1px dotted var(--mute);transform:translateY(-6px)}
.pv.tf-hearth .tl-menu .meta{grid-column:2;grid-row:1;margin:0;font:600 24px var(--hf);letter-spacing:0;text-transform:none;color:var(--acc)}
.pv.tf-hearth .tl-menu p{grid-column:1/-1;margin:4px 0 0;font-size:15px}
.pv.tf-hearth .tl-menu b{display:none}
.pv.tf-hearth .ti:hover{transform:translateX(4px)}
.pv.tf-hearth .fe-split{grid-template-columns:5fr 6fr;gap:72px}
.pv.tf-hearth .fm{aspect-ratio:4/5;border-radius:999px 999px 0 0}
.pv.tf-hearth .fe h3{font-size:58px;line-height:1;font-style:italic}
.pv.tf-hearth .gl{grid-template-columns:repeat(3,1fr);grid-auto-rows:260px;grid-auto-flow:dense;gap:10px}
.pv.tf-hearth .gl figure{position:relative;margin:0}
.pv.tf-hearth .gl figure:nth-child(6n+1){grid-column:span 2;grid-row:span 2}
.pv.tf-hearth .gl figure>:is(img,svg){height:100%;aspect-ratio:auto;border-radius:0}
.pv.tf-hearth .gl figcaption{position:absolute;left:0;right:0;bottom:0;margin:0;padding:28px 16px 12px;color:#fff;font:italic 600 20px var(--hf);background:linear-gradient(0deg,rgba(0,0,0,.6),transparent)}
.pv.tf-hearth .qs{gap:48px}
.pv.tf-hearth .qs blockquote{background:transparent;padding:0;text-align:center;color:inherit}
.pv.tf-hearth .qs blockquote:before{content:"“";display:block;font:600 90px/.6 var(--hf);color:var(--acc);margin-bottom:10px}
.pv.tf-hearth .qs blockquote p{font-style:italic;font-size:26px;line-height:1.3}
.pv.tf-hearth .qs cite{letter-spacing:.16em;text-transform:uppercase;font-size:12px;font-weight:500}
.pv.tf-hearth .s-contact .w{text-align:center}
.pv.tf-hearth .ct{grid-template-columns:repeat(auto-fit,minmax(170px,1fr));background:var(--card);color:var(--ink);border:1px solid var(--line);padding:40px;border-radius:var(--r);max-width:1000px;margin:0 auto 28px}
.pv.tf-hearth .ct dd{font:600 24px var(--hf)}
.pv.tf-hearth .s-cta,.pv.tf-hearth .s-cta.bg-default{background:var(--acc);color:var(--oa);background-image:radial-gradient(color-mix(in srgb,var(--oa) 14%,transparent) 1.2px,transparent 1.4px);background-size:22px 22px}
.pv.tf-hearth .s-cta h2{font-size:72px;font-style:italic}
.pv.tf-hearth .s-cta .bt{background:var(--bg);color:var(--ink)}
.pv.tf-hearth .ft .mt{font-family:var(--hf);font-style:italic;font-size:20px;letter-spacing:.02em;font-weight:600}

/* ---------- Volt: trades and services ---------- */
.pv.tf-volt h1,.pv.tf-volt h2,.pv.tf-volt h3{text-transform:uppercase;letter-spacing:.005em}
.pv.tf-volt h1{font-size:96px;line-height:.9}
.pv.tf-volt h2{font-size:58px;line-height:.95}
.pv.tf-volt h3{font-size:26px}
.pv.tf-volt .hd{border-bottom:0;box-shadow:0 1px 0 var(--line)}
.pv.tf-volt .mn{font-weight:600;text-transform:uppercase;letter-spacing:.06em;font-size:14px}
.pv.tf-volt .bt{border-radius:4px;text-transform:uppercase;letter-spacing:.08em;font-size:14px;padding:16px 28px;box-shadow:0 10px 24px -10px var(--acc)}
.pv.tf-volt .bt2{box-shadow:inset 0 0 0 2px currentColor}
.pv.tf-volt .ey{display:inline-flex;align-items:center;gap:10px;background:color-mix(in srgb,var(--acc) 18%,transparent);color:inherit;padding:8px 14px;border-radius:4px;letter-spacing:.1em}
.pv.tf-volt .ey:before{content:"✓";display:grid;place-items:center;width:20px;height:20px;border-radius:50%;background:var(--acc);color:var(--oa);font-size:12px}
.pv.tf-volt .s-hero{background:var(--ink);color:var(--oi);overflow:hidden}
.pv.tf-volt .hl-split .hx{grid-template-columns:1.05fr 1fr;gap:56px;padding-top:88px;padding-bottom:88px;position:relative}
.pv.tf-volt .hl-split .hm{aspect-ratio:4/4.4;border-radius:0;clip-path:polygon(14% 0,100% 0,100% 100%,0 100%);margin-right:calc(-1 * var(--pad));box-shadow:none}
.pv.tf-volt .hl-split p{font-size:20px;opacity:.88}
.pv.tf-volt .s-hero .bt2{color:var(--oi)}
.pv.tf-volt .s-stats,.pv.tf-volt .s-stats.bg-default{background:var(--acc);color:var(--oa);padding:36px 0}
.pv.tf-volt .stt{gap:0}.pv.tf-volt .stt>div{border-left:1px solid color-mix(in srgb,var(--oa) 30%,transparent)}.pv.tf-volt .stt>div:first-child{border:0}
.pv.tf-volt .stt b{color:inherit;font-size:68px;line-height:1}
.pv.tf-volt .stt span{text-transform:uppercase;font-weight:600;letter-spacing:.1em;font-size:13px}
.pv.tf-volt .sh{border-left:6px solid var(--acc);padding-left:18px}
.pv.tf-volt .tl-cards{gap:24px}
.pv.tf-volt .tl-cards .ti{background:var(--card);border:1px solid var(--line);border-radius:6px;padding:0;overflow:hidden;color:var(--ink);box-shadow:0 2px 0 var(--line);position:relative}
.pv.tf-volt .tl-cards .ti:after{content:"";position:absolute;left:0;right:0;bottom:0;height:4px;background:var(--acc);transform:scaleX(.18);transform-origin:left;transition:transform .45s}
.pv.tf-volt .tl-cards .ti:hover{transform:translateY(-6px);box-shadow:0 22px 40px -18px rgba(0,0,0,.35)}
.pv.tf-volt .tl-cards .ti:hover:after{transform:none}
.pv.tf-volt .tl-cards .tim{border-radius:0;margin:0;aspect-ratio:16/10}
.pv.tf-volt .tl-cards .tx{padding:22px 24px 28px}
.pv.tf-volt .meta{color:var(--acc);letter-spacing:.12em}
.pv.tf-volt .ti b{text-transform:uppercase;letter-spacing:.08em;font-size:13px}
.pv.tf-volt .fe-split{grid-template-columns:1fr 1fr;gap:64px}
.pv.tf-volt .fm{border-radius:6px;aspect-ratio:5/4;box-shadow:24px 24px 0 var(--soft)}
.pv.tf-volt .fe h3{font-size:52px;line-height:.95}
.pv.tf-volt .gl{gap:8px}
.pv.tf-volt .gl figure{position:relative;margin:0}
.pv.tf-volt .gl figure>:is(img,svg){aspect-ratio:4/3;border-radius:0}
.pv.tf-volt .gl figcaption{position:absolute;left:0;bottom:0;margin:0;background:var(--ink);color:var(--oi);padding:6px 12px;font-size:13px;text-transform:uppercase;letter-spacing:.08em;font-weight:600}
.pv.tf-volt .qs blockquote{background:var(--card);border:1px solid var(--line);border-top:6px solid var(--acc);border-radius:6px;color:var(--ink)}
.pv.tf-volt .qs blockquote p{font-family:var(--bf);font-size:19px;font-weight:500}
.pv.tf-volt .qs blockquote:before{content:"★★★★★";display:block;color:var(--acc);letter-spacing:.2em;margin-bottom:10px;font-size:15px}
.pv.tf-volt .ct>div{background:var(--card);color:var(--ink);border:1px solid var(--line);border-radius:6px;padding:20px 20px 20px 64px;position:relative}
.pv.tf-volt .ct>div:before{content:"";position:absolute;left:20px;top:22px;width:28px;height:28px;border-radius:50%;background:var(--acc)}
.pv.tf-volt .ct dd{font-weight:600;font-size:18px}
.pv.tf-volt .s-cta,.pv.tf-volt .s-cta.bg-default{background:var(--ink);color:var(--oi);background-image:repeating-linear-gradient(-45deg,transparent 0 22px,color-mix(in srgb,var(--acc) 12%,transparent) 22px 44px)}
.pv.tf-volt .s-cta h2{font-size:76px}
.pv.tf-volt .s-cta .bt{font-size:17px;padding:20px 36px}

/* ---------- Loom: makers and craft shops ---------- */
.pv.tf-loom h1{font-size:84px;line-height:1;letter-spacing:-.01em}
.pv.tf-loom h2{font-size:50px;letter-spacing:-.01em}
.pv.tf-loom h3{font-size:24px}
.pv.tf-loom .hd{border-bottom:1px dashed var(--line)}
.pv.tf-loom .bt{border-radius:999px;padding:14px 28px;font-weight:600}
.pv.tf-loom .ey{color:var(--acc);letter-spacing:.24em}
.pv.tf-loom .hl-split .hx{grid-template-columns:1fr 1fr;gap:72px;padding-top:80px;padding-bottom:96px}
.pv.tf-loom .hl-split .hm{aspect-ratio:4/5;border-radius:999px 999px 14px 14px;box-shadow:-28px 28px 0 var(--soft)}
.pv.tf-loom .hl-split p{font-size:20px}
.pv.tf-loom .sh h2:after{content:"";display:block;width:72px;border-bottom:3px dashed var(--acc);margin-top:14px}
.pv.tf-loom .stt{gap:0}.pv.tf-loom .stt>div{border-left:1px dashed var(--line)}.pv.tf-loom .stt>div:first-child{border:0}
.pv.tf-loom .stt b{color:var(--ink);font-family:var(--hf);font-weight:400}
.pv.tf-loom .stt span{font-size:14px;color:var(--mute)}
.pv.tf-loom .tl-shop{gap:40px 28px}
.pv.tf-loom .tl-shop .tim{aspect-ratio:1;border-radius:14px;margin-bottom:16px;background:var(--soft)}
.pv.tf-loom .tl-shop .tx{display:grid;grid-template-columns:1fr auto;column-gap:12px;align-items:baseline}
.pv.tf-loom .tl-shop h3{grid-column:1;grid-row:1;margin:0}
.pv.tf-loom .tl-shop .meta{grid-column:2;grid-row:1;margin:0;font:600 16px var(--bf);letter-spacing:0;text-transform:none;color:var(--ink);background:var(--soft);padding:4px 12px;border-radius:999px}
.pv.tf-loom .tl-shop p{grid-column:1/-1;margin:6px 0 10px}
.pv.tf-loom .tl-shop b{grid-column:1/-1;text-decoration:underline;text-underline-offset:4px;text-decoration-style:dashed}
.pv.tf-loom .tl-shop .ti:hover{transform:translateY(-4px)}
.pv.tf-loom .fe-split{grid-template-columns:6fr 5fr;gap:72px}
.pv.tf-loom .fe-split .fm{order:2;aspect-ratio:1;border-radius:50%;box-shadow:24px 24px 0 var(--soft)}
.pv.tf-loom .fe h3{font-size:50px;line-height:1.05}
.pv.tf-loom .gl{display:block;columns:3;column-gap:16px}
.pv.tf-loom .gl figure{break-inside:avoid;margin:0 0 16px;border-radius:14px}
.pv.tf-loom .gl figure>:is(img,svg){border-radius:14px;aspect-ratio:4/5}
.pv.tf-loom .gl figure:nth-child(3n+2)>:is(img,svg){aspect-ratio:1}
.pv.tf-loom .gl figure:nth-child(3n)>:is(img,svg){aspect-ratio:4/3}
.pv.tf-loom .gl figcaption{font-style:italic}
.pv.tf-loom .qs blockquote{background:var(--card);color:var(--ink);border-radius:4px;box-shadow:0 14px 30px -16px rgba(0,0,0,.3);position:relative;padding:34px 28px 24px}
.pv.tf-loom .qs blockquote:nth-child(odd){transform:rotate(-1.2deg)}.pv.tf-loom .qs blockquote:nth-child(even){transform:rotate(1deg)}
.pv.tf-loom .qs blockquote:before{content:"";position:absolute;top:-10px;left:50%;width:84px;height:22px;margin-left:-42px;background:color-mix(in srgb,var(--acc) 35%,transparent);transform:rotate(-3deg)}
.pv.tf-loom .qs cite{color:var(--acc)}
.pv.tf-loom .ct>div{border-top:1px dashed var(--line);padding-top:14px}
.pv.tf-loom .s-cta .w{border:2px dashed currentColor;border-radius:24px;padding:64px 32px;max-width:calc(1000px - 2 * var(--pad))}
.pv.tf-loom .s-cta h2{font-size:58px}

/* flagships: tablet */
@container (min-width:600px) and (max-width:1023.98px){
.pv.tf-hearth h1{font-size:72px}.pv.tf-volt h1{font-size:68px}.pv.tf-loom h1{font-size:60px}
.pv:is(.tf-hearth,.tf-volt,.tf-loom,.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight) h2,.pv:is(.tf-hearth,.tf-volt,.tf-loom,.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight) .s-cta h2{font-size:42px}
.pv.tf-hearth .tl-menu{grid-template-columns:1fr!important}
.pv.tf-hearth .hl-overlay .hx{min-height:600px}
.pv.tf-volt .hl-split .hx,.pv.tf-loom .hl-split .hx{gap:32px}
.pv.tf-loom .gl{columns:2}
}
/* flagships: phone */
@container (max-width:599.98px){
.pv.tf-hearth{--sy:60px}
.pv.tf-hearth h1{font-size:54px}.pv.tf-volt h1{font-size:54px}.pv.tf-loom h1{font-size:44px}
.pv:is(.tf-hearth,.tf-volt,.tf-loom,.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight) h2,.pv:is(.tf-hearth,.tf-volt,.tf-loom,.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight) .s-cta h2{font-size:34px}
.pv:is(.tf-hearth,.tf-volt,.tf-loom,.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight) .fe h3{font-size:32px}
.pv.tf-hearth .hl-overlay .hx{min-height:560px}
.pv.tf-hearth .tl-menu{grid-template-columns:1fr!important;gap:24px}
.pv.tf-hearth .tl-menu .tim{flex-basis:76px;width:76px}
.pv.tf-hearth .tl-menu h3{font-size:22px}.pv.tf-hearth .tl-menu .meta{font-size:20px}
.pv.tf-hearth .fe-split,.pv.tf-volt .fe-split,.pv.tf-loom .fe-split{grid-template-columns:1fr;gap:28px}
.pv.tf-hearth .gl{grid-template-columns:1fr 1fr;grid-auto-rows:150px}
.pv.tf-hearth .gl figure:nth-child(6n+1){grid-row:span 1}.pv.tf-hearth .gl figure:last-child:nth-child(even){grid-column:span 2}
.pv.tf-hearth .ey:before,.pv.tf-hearth .hl-overlay .ey:after{display:none}
.pv.tf-hearth .stt b,.pv.tf-volt .stt b{font-size:40px}
.pv.tf-hearth .ct{padding:24px}
.pv.tf-volt .hl-split .hx{grid-template-columns:1fr;padding-top:48px;padding-bottom:0;gap:32px}
.pv.tf-volt .hl-split .hm{margin:0 calc(-1 * var(--pad));clip-path:polygon(0 12%,100% 0,100% 100%,0 100%);aspect-ratio:4/3}
.pv.tf-volt .stt{grid-template-columns:1fr 1fr;row-gap:20px}.pv.tf-volt .stt>div{border:0}
.pv.tf-loom .hl-split .hx{grid-template-columns:1fr;padding-top:40px;gap:36px}
.pv.tf-loom .hl-split .hm{box-shadow:-14px 14px 0 var(--soft);max-width:340px}
.pv.tf-loom .stt{grid-template-columns:1fr 1fr;row-gap:20px}.pv.tf-loom .stt>div{border:0}
.pv.tf-loom .tl-shop{grid-template-columns:1fr 1fr!important;gap:24px 14px}
.pv.tf-loom .tl-shop .tx{display:block}.pv.tf-loom .tl-shop .meta{display:inline-block;margin-top:6px}
.pv.tf-loom .gl{columns:2;column-gap:10px}
.pv.tf-loom .fe-split .fm{order:0;max-width:300px}
}

/* ---------- flagships: wordmark logos (business name in the template's type, with a monogram) ---------- */
.pv .wm{display:inline-flex;align-items:center;gap:12px;color:inherit;white-space:nowrap;line-height:1}
.pv .wm-i{display:grid;place-items:center;width:42px;height:42px;flex:0 0 42px;background:var(--acc);color:var(--oa);font:var(--hw) 22px/1 var(--hf)}
.pv .wm-n{font:var(--hw) 24px/1 var(--hf)}
.pv .ft .wm{color:var(--oi)}
.pv.tf-hearth .wm-i{border-radius:50%;font-style:italic;font-size:26px;box-shadow:0 0 0 2px var(--bg),0 0 0 3px var(--acc)}
.pv.tf-hearth .wm-n{font-style:italic;font-size:30px;letter-spacing:.01em}
.pv.tf-volt .wm-i{width:40px;height:40px;transform:skewX(-12deg);border-radius:3px;font-size:24px}
.pv.tf-volt .wm-n{text-transform:uppercase;font-size:28px;letter-spacing:.02em}
.pv.tf-loom .wm-i{border-radius:999px 999px 4px 4px;height:46px;font-size:24px;padding-top:4px}
.pv.tf-loom .wm-n{font-size:27px;padding-bottom:4px;border-bottom:2px dashed var(--acc)}
@container (max-width:599.98px){.pv .wm-n{font-size:17px!important}.pv .wm-i{width:34px;height:34px;flex-basis:34px;font-size:18px!important}.pv .wm{gap:9px}}
.pv .ft .fb .wm{background:none}

/* ---------- flagships: menu, booking and products ---------- */
.pv.tf-hearth .s-menu .w{max-width:1100px}
.pv.tf-hearth .mu-g{gap:48px 56px}
.pv.tf-hearth .mu-h{font:italic 600 34px/1.1 var(--hf);letter-spacing:0;text-transform:none;text-align:center;border:0;margin-bottom:18px;color:var(--ink)}
.pv.tf-hearth .mu-h:after{content:"";display:block;width:48px;height:2px;background:var(--acc);margin:12px auto 0}
.pv.tf-hearth .s-menu .w{max-width:1200px}
.pv.tf-hearth .mu-g{gap:48px 44px}
.pv.tf-hearth .mu-im{flex-basis:64px;width:64px;height:64px;border-radius:50%;box-shadow:0 10px 22px -10px rgba(0,0,0,.5)}
.pv.tf-hearth .mu-l strong,.pv.tf-hearth .mu-p{font:600 21px/1.15 var(--hf)}
.pv.tf-hearth .mu-x p{font-size:14px}
.pv.tf-hearth .mu-p{color:var(--acc)}
.pv.tf-hearth .mu-f{text-align:center;margin-top:44px}
.pv.tf-volt .bk-a h2{font-size:58px}
.pv.tf-volt .bk-ar li{border-radius:4px;background:color-mix(in srgb,var(--acc) 14%,transparent);border-color:transparent;text-transform:uppercase;letter-spacing:.06em;font-size:13px}
.pv.tf-volt .bk-b{border-radius:6px;border-top:6px solid var(--acc);padding:32px}
.pv.tf-volt .bk-b h3{font-size:30px}
.pv.tf-volt .bk-i strong{font-size:18px}
.pv.tf-volt .bk-i b{font:700 22px var(--hf);text-transform:uppercase}
.pv.tf-volt .bk-bt{font-size:16px;padding:18px}
.pv.tf-loom .pr-g{gap:44px 28px}
.pv.tf-loom .pr-im{border-radius:14px;transition:transform .35s}
.pv.tf-loom .pr-i:hover .pr-im{transform:translateY(-4px)}
.pv.tf-loom .pr-im>img{transition:transform .8s cubic-bezier(.2,.7,.2,1)}
.pv.tf-loom .pr-i:hover .pr-im>img{transform:scale(1.06)}
.pv.tf-loom .pr-t h3{font-size:24px}
.pv.tf-loom .pr-p{background:var(--soft);padding:4px 12px;border-radius:999px;font-weight:600;font-size:15px}
.pv.tf-loom .pr-bd{background:var(--acc);color:var(--oa)}
.pv.tf-loom .pr-btn{color:var(--ink);text-decoration:underline dashed var(--acc);text-underline-offset:5px}
@container (max-width:599.98px){.pv.tf-volt .bk-a h2{font-size:36px}.pv.tf-hearth .mu-h{font-size:28px}.pv.tf-hearth .mu-l strong,.pv.tf-hearth .mu-p{font-size:20px}.pv.tf-hearth .mu-im{flex-basis:64px;width:64px;height:64px}.pv.tf-loom .pr-t h3{font-size:19px}}

/* ======================================================================
   Flagships, round 2 (2026-11-14): Bloom (salons), Pulse (fitness), Commons (community organizations).
   ====================================================================== */
/* ---------- Bloom: salons and beauty ---------- */
.pv.tf-bloom{--sy:96px}
.pv.tf-bloom h1{font-size:92px;line-height:.98;font-weight:500;letter-spacing:-.02em}
.pv.tf-bloom h2{font-size:54px;font-weight:500;letter-spacing:-.015em}
.pv.tf-bloom h3{font-weight:500}
.pv.tf-bloom .hd{border-bottom:1px solid var(--line)}
.pv.tf-bloom :is(.mn,.dr>summary){font-weight:600;letter-spacing:.14em;text-transform:uppercase;font-size:12px}
.pv.tf-bloom .bt{border-radius:999px;background:var(--ink);color:var(--oi);font-weight:600;letter-spacing:.06em;padding:15px 30px}
.pv.tf-bloom .bt2{background:transparent;color:inherit}
.pv.tf-bloom .ey{color:var(--acc);letter-spacing:.3em;font-weight:600;font-size:12px}
.pv.tf-bloom .hl-split .hx{grid-template-columns:1fr 1fr;gap:80px;padding-top:72px;padding-bottom:96px}
.pv.tf-bloom .hl-split .hm{aspect-ratio:4/5;border-radius:240px 240px 24px 240px;position:relative;box-shadow:30px 30px 0 var(--soft)}
.pv.tf-bloom .hl-split p{font-size:19px;max-width:36ch}
.pv.tf-bloom .sh{flex-direction:column;align-items:center;text-align:center;gap:6px}
.pv.tf-bloom .sh h2:before{content:"✦";display:block;font-size:14px;color:var(--acc);margin-bottom:12px}
.pv.tf-bloom .in{text-align:center;margin:0 auto 44px}
.pv.tf-bloom .s-menu .w{max-width:1200px}
.pv.tf-bloom .mu-g{gap:48px 56px}
.pv.tf-bloom .mu-h{font:italic 500 30px var(--hf);letter-spacing:0;text-transform:none;color:var(--ink);border-bottom:1px solid var(--ink);padding-bottom:12px}
.pv.tf-bloom .mu-l strong{font-weight:600;font-size:17px}
.pv.tf-bloom .mu-p{font:500 20px var(--hf)}
.pv.tf-bloom .mu-f{text-align:center}
.pv.tf-bloom .bk{grid-template-columns:5fr 6fr;gap:72px;align-items:center}
.pv.tf-bloom .bk-a h2{font-size:54px}
.pv.tf-bloom .bk-ar li{border-color:var(--ink);font-weight:500}
.pv.tf-bloom .bk-b{background:var(--soft);border:0;border-radius:32px;padding:40px;box-shadow:none}
.pv.tf-bloom .bk-b h3{font-size:30px}
.pv.tf-bloom .bk-i{border-color:color-mix(in srgb,var(--ink) 15%,transparent)}
.pv.tf-bloom .bk-i b{color:var(--ink);font:500 20px var(--hf)}
.pv.tf-bloom .tl-cards .ti{border:0;background:transparent;padding:0;text-align:center}
.pv.tf-bloom .tl-cards .tim{aspect-ratio:3/4;border-radius:200px 200px 16px 16px;margin-bottom:16px}
.pv.tf-bloom .tl-cards .tx{align-items:center}
.pv.tf-bloom .tl-cards h3{font-size:26px}
.pv.tf-bloom .meta{color:var(--acc);letter-spacing:.2em}
.pv.tf-bloom .fe-split{grid-template-columns:1fr 1fr;gap:80px}
.pv.tf-bloom .fm{aspect-ratio:4/5;border-radius:24px 240px 24px 24px}
.pv.tf-bloom .fe h3{font-size:52px;font-weight:500;line-height:1.02}
.pv.tf-bloom .gl{grid-template-columns:repeat(4,1fr);gap:18px;padding-bottom:48px}
.pv.tf-bloom .gl figure{margin:0;border-radius:20px}
.pv.tf-bloom .gl figure:nth-child(even){transform:translateY(48px)}
.pv.tf-bloom .gl figure>:is(img,svg){aspect-ratio:3/4;border-radius:20px}
.pv.tf-bloom .gl figcaption{text-align:center;font-size:12px;letter-spacing:.16em;text-transform:uppercase}
.pv.tf-bloom .qs blockquote{background:transparent;text-align:center;padding:0 12px;color:inherit}
.pv.tf-bloom .qs blockquote p{font:italic 500 26px/1.3 var(--hf)}
.pv.tf-bloom .qs cite{letter-spacing:.16em;text-transform:uppercase;font-size:12px;color:var(--acc)}
.pv.tf-bloom .stt b{font:500 54px var(--hf);color:var(--ink)}
.pv.tf-bloom .stt span{letter-spacing:.16em;text-transform:uppercase;font-size:11px}
.pv.tf-bloom .ct{text-align:center}
.pv.tf-bloom .s-contact .w{text-align:center}
.pv.tf-bloom .s-cta,.pv.tf-bloom .s-cta.bg-default{background:transparent}
.pv.tf-bloom .s-cta .w{background:var(--soft);border-radius:36px;padding:80px 40px;max-width:calc(1200px - 2 * var(--pad))}
.pv.tf-bloom .s-cta h2{font-size:64px}
.pv.tf-bloom .wm-i{border-radius:50%;background:transparent;color:var(--ink);box-shadow:inset 0 0 0 1.5px var(--ink);font-weight:500}
.pv.tf-bloom .ft .wm-i{color:var(--oi);box-shadow:inset 0 0 0 1.5px var(--oi)}
.pv.tf-bloom .wm-n{font-size:28px;letter-spacing:.04em;font-weight:500}

/* ---------- Pulse: gyms and fitness (dark) ---------- */
.pv.tf-pulse h1,.pv.tf-pulse h2,.pv.tf-pulse h3{text-transform:uppercase;font-weight:400;letter-spacing:.005em}
.pv.tf-pulse h1{font-size:132px;line-height:.88}
.pv.tf-pulse h2{font-size:72px;line-height:.92}
.pv.tf-pulse h3{font-size:28px}
.pv.tf-pulse .hd{border-bottom:1px solid var(--line);background:var(--bg)}
.pv.tf-pulse :is(.mn,.dr>summary){text-transform:uppercase;letter-spacing:.12em;font-size:13px;font-weight:700}
.pv.tf-pulse .bt{border-radius:0;text-transform:uppercase;letter-spacing:.12em;font-weight:800;font-size:14px;padding:17px 32px;clip-path:polygon(0 0,100% 0,100% 72%,92% 100%,0 100%)}
.pv.tf-pulse .bt2{clip-path:none;box-shadow:inset 0 0 0 2px currentColor}
.pv.tf-pulse .ey{display:inline-block;background:var(--acc);color:var(--oa);padding:6px 12px;letter-spacing:.18em;font-weight:800}
.pv.tf-pulse .hl-overlay .hx{min-height:820px;padding-bottom:96px}
.pv.tf-pulse .hl-overlay .hm:after{background:linear-gradient(0deg,var(--bg) 2%,rgba(0,0,0,.35) 45%,rgba(0,0,0,.15)),linear-gradient(90deg,rgba(0,0,0,.6),transparent 60%)}
.pv.tf-pulse .hl-overlay .ht{max-width:980px}
.pv.tf-pulse .hl-overlay p{font-size:20px;max-width:44ch}
.pv.tf-pulse .s-stats{border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.pv.tf-pulse .stt b{font:400 88px/1 var(--hf);color:transparent;-webkit-text-stroke:2px var(--acc)}
.pv.tf-pulse .stt span{text-transform:uppercase;letter-spacing:.16em;font-weight:700;font-size:12px}
.pv.tf-pulse .sh{align-items:flex-end}
.pv.tf-pulse .sh h2:after{content:"";display:block;width:80px;height:6px;background:var(--acc);margin-top:14px;transform:skewX(-20deg)}
.pv.tf-pulse .mu-g{grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px}
.pv.tf-pulse .mu-c{background:var(--card);border:1px solid var(--line);padding:24px}
.pv.tf-pulse .mu-h{font:400 30px var(--hf);letter-spacing:.02em;color:var(--acc);border-color:var(--line)}
.pv.tf-pulse .mu-l{flex-direction:column;gap:2px}
.pv.tf-pulse .mu-d{display:none}
.pv.tf-pulse .mu-l strong{font-size:18px;text-transform:uppercase;letter-spacing:.04em}
.pv.tf-pulse .mu-p{order:-1;font-size:13px;font-weight:800;letter-spacing:.12em;color:var(--acc)}
.pv.tf-pulse .mu-i{border-bottom:1px solid var(--line)}.pv.tf-pulse .mu-i:last-child{border:0}
.pv.tf-pulse .bk{align-items:center}
.pv.tf-pulse .bk-ar li{border-radius:0;border-color:var(--acc);color:var(--ink);text-transform:uppercase;letter-spacing:.08em;font-size:12px}
.pv.tf-pulse .bk-at{color:var(--ink)}
.pv.tf-pulse .bk-b{background:var(--card);border:2px solid var(--acc);border-radius:0;padding:36px;box-shadow:16px 16px 0 color-mix(in srgb,var(--acc) 35%,transparent)}
.pv.tf-pulse .bk-b h3{font-size:36px}
.pv.tf-pulse .bk-i b{font:400 30px var(--hf);color:var(--acc)}
.pv.tf-pulse .tl-cards{gap:12px}
.pv.tf-pulse .tl-cards .ti{position:relative;border:0;padding:0;border-radius:0;overflow:hidden;min-height:420px;background:var(--card);color:#fff}
.pv.tf-pulse .tl-cards .tim{position:absolute;inset:0;margin:0;aspect-ratio:auto;border-radius:0}
.pv.tf-pulse .tl-cards .tim:after{content:"";position:absolute;inset:0;background:linear-gradient(0deg,rgba(0,0,0,.85),rgba(0,0,0,.05) 70%)}
.pv.tf-pulse .tl-cards .tx{position:relative;margin-top:auto;padding:24px;justify-content:flex-end}
.pv.tf-pulse .tl-cards .ti :is(p,.meta){color:rgba(255,255,255,.85)}
.pv.tf-pulse .tl-cards .ti b{margin-top:8px;color:var(--acc);text-transform:uppercase;letter-spacing:.1em;font-size:13px}
.pv.tf-pulse .tl-cards .ti:hover .tim>img{transform:scale(1.08)}
.pv.tf-pulse .fe-split{grid-template-columns:1fr 1fr;gap:64px}
.pv.tf-pulse .fm{border-radius:0;aspect-ratio:1;clip-path:polygon(0 0,100% 0,100% 88%,88% 100%,0 100%)}
.pv.tf-pulse .fe h3{font-size:64px;line-height:.92}
.pv.tf-pulse .gl{gap:6px}
.pv.tf-pulse .gl figure{margin:0;position:relative;border-radius:0}
.pv.tf-pulse .gl figure>:is(img,svg){border-radius:0;aspect-ratio:4/5;filter:grayscale(1) contrast(1.1);transition:filter .5s,transform .8s}
.pv.tf-pulse .gl figure:hover>:is(img,svg){filter:none}
.pv.tf-pulse .gl figcaption{position:absolute;left:0;bottom:0;margin:0;background:var(--acc);color:var(--oa);padding:6px 12px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;font-size:12px}
.pv.tf-pulse .qs blockquote{background:var(--card);border-left:4px solid var(--acc);border-radius:0;color:var(--ink)}
.pv.tf-pulse .qs blockquote p{font:400 26px/1.15 var(--hf);text-transform:uppercase}
.pv.tf-pulse .ct>div{border-left:4px solid var(--acc);padding-left:16px}
.pv.tf-pulse .s-cta,.pv.tf-pulse .s-cta.bg-default{background:var(--acc);color:var(--oa);background-image:repeating-linear-gradient(-60deg,transparent 0 30px,color-mix(in srgb,var(--oa) 8%,transparent) 30px 60px)}
.pv.tf-pulse .s-cta h2{font-size:104px}
.pv.tf-pulse .s-cta .bt{background:var(--oa);color:var(--acc)}
.pv.tf-pulse .ft{background:var(--bg);color:var(--ink);border-top:1px solid var(--line)}
.pv.tf-pulse .ft .wm{color:var(--ink)}
.pv.tf-pulse .wm-i{transform:skewX(-14deg);border-radius:0}
.pv.tf-pulse .wm-n{text-transform:uppercase;font-size:30px;letter-spacing:.03em}

/* ---------- Commons: community organizations and band offices ---------- */
.pv.tf-commons{font-size:18px}
.pv.tf-commons h1{font-size:56px;line-height:1.1;letter-spacing:-.01em}
.pv.tf-commons .fe h3{font-size:38px}
.pv.tf-commons h2{font-size:40px;line-height:1.15}
.pv.tf-commons h3{font-size:22px}
.pv.tf-commons .hd{border-bottom:4px solid var(--acc)}
.pv.tf-commons :is(.mn,.dr>summary){font-weight:700;font-size:16px}
.pv.tf-commons .bt{border-radius:8px;font-size:17px;padding:15px 26px}
.pv.tf-commons .bt:focus-visible,.pv.tf-commons a:focus-visible{outline:3px solid var(--acc);outline-offset:3px}
.pv.tf-commons .ey{display:inline-flex;align-items:center;gap:10px;background:var(--card);color:var(--ink);border:1px solid var(--line);padding:8px 14px;border-radius:999px;letter-spacing:.04em;text-transform:none;font-size:15px}
.pv.tf-commons .ey:before{content:"";width:10px;height:10px;border-radius:50%;background:var(--acc);box-shadow:0 0 0 4px color-mix(in srgb,var(--acc) 25%,transparent)}
.pv.tf-commons .s-hero{background:var(--soft)}
.pv.tf-commons .hl-split .hx{grid-template-columns:1fr 1fr;gap:56px;padding-top:72px;padding-bottom:72px}
.pv.tf-commons .hl-split .hm{aspect-ratio:4/3;border-radius:20px;box-shadow:0 30px 60px -30px rgba(0,0,0,.45)}
.pv.tf-commons .hl-split p{font-size:20px}
.pv.tf-commons .sh h2{position:relative;padding-left:20px}
.pv.tf-commons .sh h2:before{content:"";position:absolute;left:0;top:.2em;bottom:.2em;width:6px;border-radius:3px;background:var(--acc)}
.pv.tf-commons .tl-cards .ti{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:0;overflow:hidden;color:var(--ink)}
.pv.tf-commons .tl-cards .ti:hover{transform:translateY(-4px);box-shadow:0 20px 40px -20px rgba(0,0,0,.35)}
.pv.tf-commons .tl-cards .tim{margin:0;border-radius:0;aspect-ratio:16/9}
.pv.tf-commons .tl-cards .tx{padding:20px 22px 24px}
.pv.tf-commons .meta{color:var(--acc);letter-spacing:.08em}
.pv.tf-commons .ti b{font-size:16px}
.pv.tf-commons .ls{border:0;display:grid;gap:12px}
.pv.tf-commons .lr{background:var(--card);border:1px solid var(--line);border-left:6px solid var(--acc);border-radius:12px;padding:18px 22px;color:var(--ink)}
.pv.tf-commons .lr strong{font-size:18px}
.pv.tf-commons .lr .mo{background:var(--soft);padding:8px 14px;border-radius:8px}
.pv.tf-commons .bk-b{border-radius:16px}
.pv.tf-commons .bk-ar li{background:var(--soft);border-color:transparent;font-size:15px}
.pv.tf-commons .bk-i b{color:var(--ink);font-weight:700}
.pv.tf-commons .stt>div{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:24px 12px;color:var(--ink)}
.pv.tf-commons .stt b{font-family:var(--hf)}
.pv.tf-commons .fe-split{grid-template-columns:1fr 1fr;gap:56px}
.pv.tf-commons .fm{border-radius:20px}
.pv.tf-commons .gl figure>:is(img,svg){border-radius:16px;aspect-ratio:4/3}
.pv.tf-commons .gl figcaption{font-size:15px;font-weight:600;color:var(--ink)}
.pv.tf-commons .qs blockquote{background:var(--card);border:1px solid var(--line);border-radius:16px}
.pv.tf-commons .qs blockquote p{font-size:19px;line-height:1.5}
.pv.tf-commons .ct>div{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:18px;color:var(--ink)}
.pv.tf-commons .ct dd{font-size:18px;font-weight:600}
.pv.tf-commons .s-cta,.pv.tf-commons .s-cta.bg-default{background:var(--ink);color:var(--oi)}
.pv.tf-commons .wm-i{border-radius:12px}
.pv.tf-commons .wm-n{font-size:22px;line-height:1.15;white-space:normal;max-width:260px}

/* round 2: tablet and phone */
@container (min-width:600px) and (max-width:1023.98px){
.pv.tf-bloom h1{font-size:64px}.pv.tf-pulse h1{font-size:92px}.pv.tf-commons h1{font-size:48px}
.pv:is(.tf-bloom,.tf-pulse) h2,.pv:is(.tf-bloom,.tf-pulse) .s-cta h2,.pv.tf-pulse .fe h3{font-size:48px}
.pv.tf-bloom .gl{grid-template-columns:repeat(2,1fr)}
.pv:is(.tf-bloom,.tf-commons) .hl-split .hx,.pv.tf-bloom .bk{gap:36px}
}
@container (max-width:599.98px){
.pv.tf-bloom{--sy:60px}
.pv.tf-bloom h1{font-size:50px}.pv.tf-pulse h1{font-size:68px}.pv.tf-commons h1{font-size:38px}
.pv:is(.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight) h2,.pv:is(.tf-bloom,.tf-pulse) .s-cta h2,.pv.tf-bloom .bk-a h2{font-size:36px}
.pv:is(.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight) .fe h3{font-size:32px}
.pv:is(.tf-bloom,.tf-commons) .hl-split .hx{grid-template-columns:1fr;gap:36px;padding-top:40px;padding-bottom:56px}
.pv.tf-bloom .hl-split .hm{box-shadow:16px 16px 0 var(--soft);border-radius:160px 160px 16px 160px}
.pv:is(.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight) .fe-split{grid-template-columns:1fr;gap:28px}
.pv.tf-bloom .bk{grid-template-columns:1fr;gap:28px}.pv.tf-bloom .bk-b{padding:24px}
.pv.tf-bloom .gl{grid-template-columns:1fr 1fr;padding-bottom:24px}.pv.tf-bloom .gl figure:nth-child(even){transform:translateY(24px)}
.pv.tf-pulse .hl-overlay .hx{min-height:620px;padding-bottom:48px}
.pv.tf-pulse .stt{grid-template-columns:1fr 1fr;row-gap:20px}.pv.tf-pulse .stt b{font-size:56px}
.pv.tf-pulse .tl-cards .ti{min-height:320px}
.pv.tf-pulse .bk-b{box-shadow:8px 8px 0 color-mix(in srgb,var(--acc) 35%,transparent);padding:24px}
.pv.tf-commons .stt{grid-template-columns:1fr 1fr}
.pv.tf-commons .lr .mo{display:inline-block;margin-top:8px}
}

/* buttons stay readable on dark and accent bands */
.pv:is(.tf-tide,.tf-ember,.tf-folio,.tf-block,.tf-craft,.tf-glow,.tf-swiss,.tf-retro,.tf-lens,.tf-hearth,.tf-volt,.tf-loom,.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight) .s.bg-acc .bt:not(.bt2){background:var(--bg);color:var(--acc)}
.pv.tf-bloom .s.bg-ink .bt:not(.bt2){background:var(--acc);color:var(--oa)}

/* ======================================================================
   Indigenous business series, run 1 (2026-11-14): consulting firms. Council, Meridian, Bridge.
   ====================================================================== */
/* ---------- Council: government-ready ---------- */
.pv.tf-council{font-size:17px}
.pv.tf-council h1{font-size:58px;line-height:1.1;letter-spacing:-.01em}
.pv.tf-council h2{font-size:36px}
.pv.tf-council h3{font-size:20px}
.pv.tf-council .hd{border-bottom:1px solid var(--line);box-shadow:inset 0 4px 0 var(--acc)}
.pv.tf-council :is(.mn,.dr>summary){font-weight:600;font-size:15px}
.pv.tf-council .bt{border-radius:2px;font-weight:600;padding:14px 24px}
.pv.tf-council .ey{color:var(--ink);font-weight:600;letter-spacing:.06em;text-transform:none;font-size:14px;display:flex;align-items:center;gap:10px}
.pv.tf-council .ey:before{content:"";width:28px;height:28px;flex:0 0 28px;border-radius:50%;background:var(--acc) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M6 12.5l4 4 8-9' fill='none' stroke='white' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") center/16px no-repeat}
.pv.tf-council .hl-split .hx{grid-template-columns:7fr 5fr;gap:64px;padding-top:80px;padding-bottom:80px}
.pv.tf-council .hl-split .hm{aspect-ratio:4/5;border-radius:2px;box-shadow:-18px 18px 0 var(--soft)}
.pv.tf-council .hl-split p{font-size:19px}
.pv.tf-council .s-stats,.pv.tf-council .s-stats.bg-default{background:var(--ink);color:var(--oi)}
.pv.tf-council .stt{text-align:left;gap:0}
.pv.tf-council .stt>div{border-left:1px solid color-mix(in srgb,var(--oi) 25%,transparent);padding:4px 24px}
.pv.tf-council .stt b{color:var(--oi);font-size:40px}
.pv.tf-council .stt span{font-size:14px;opacity:.8}
.pv.tf-council .sh{border-bottom:1px solid var(--ink);padding-bottom:12px}
.pv.tf-council .tl-steps{gap:32px}
.pv.tf-council .tl-steps .ti:before{border-radius:2px;background:var(--ink);color:var(--oi)}
.pv.tf-council .tl-steps .ti:after{border-top:1px solid var(--ink)}
.pv.tf-council .ls{display:grid;grid-template-columns:1fr 1fr;gap:0 48px;border:0}
.pv.tf-council .lr{border-bottom:1px solid var(--line);padding:20px 0;align-items:flex-start}
.pv.tf-council .lr strong{font:700 19px var(--hf);flex-basis:100%}
.pv.tf-council .lr span{flex-basis:100%;font-size:15px}
.pv.tf-council .lr .mo{font-size:14px}
.pv.tf-council .fe-split{grid-template-columns:1fr 1fr;gap:64px}
.pv.tf-council .fm{border-radius:2px}
.pv.tf-council .fe h3{font-size:36px}
.pv.tf-council .ct>div{border-top:3px solid var(--acc);padding-top:12px}
.pv.tf-council .s-cta.bg-default,.pv.tf-council .s-cta.bg-auto{background:var(--soft)}
.pv.tf-council .s-cta .w{text-align:left;display:grid;grid-template-columns:2fr 1fr;align-items:center;gap:0 40px}
.pv.tf-council .s-cta .w>.bt{grid-column:2;grid-row:1/3;justify-self:end}
.pv.tf-council .wm-i{border-radius:2px;background:var(--ink);color:var(--oi)}
.pv.tf-council .ft .wm-i{background:var(--acc);color:var(--oa)}
.pv.tf-council .wm-n{font-size:22px}

/* ---------- Meridian: modern consultancy ---------- */
.pv.tf-meridian h1{font-size:68px;line-height:1.02;letter-spacing:-.04em}
.pv.tf-meridian h2{font-size:44px;letter-spacing:-.03em}
.pv.tf-meridian h3{letter-spacing:-.02em}
.pv.tf-meridian .hd{border:0;background:var(--ink);color:var(--oi)}
.pv.tf-meridian .bt{border-radius:12px;padding:15px 26px}
.pv.tf-meridian .s-hero .bt2{color:var(--oi);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--oi) 40%,transparent)}
.pv.tf-meridian .ey{display:inline-block;padding:7px 14px;border-radius:999px;background:color-mix(in srgb,var(--acc) 18%,transparent);color:var(--acc);letter-spacing:.06em;text-transform:none;font-size:14px;font-weight:600}
.pv.tf-meridian .s-hero{background:radial-gradient(800px 500px at 85% 20%,color-mix(in srgb,var(--acc) 35%,transparent),transparent 70%),var(--ink);color:var(--oi)}
.pv.tf-meridian .hl-split .hx{grid-template-columns:1.1fr 1fr;gap:64px;padding-top:88px;padding-bottom:104px}
.pv.tf-meridian .hl-split .hm{aspect-ratio:1;border-radius:28px;box-shadow:0 40px 80px -30px rgba(0,0,0,.6),0 0 0 1px color-mix(in srgb,var(--oi) 15%,transparent)}
.pv.tf-meridian .hl-split p{font-size:19px;opacity:.85}
.pv.tf-meridian .s-hero+.s-stats{margin-top:-56px;padding-top:0;background:transparent}
.pv.tf-meridian .stt{background:var(--card);color:var(--ink);border:1px solid var(--line);border-radius:20px;padding:28px 8px;box-shadow:0 30px 60px -30px rgba(0,0,0,.35);position:relative}
.pv.tf-meridian .stt b{font-size:40px;letter-spacing:-.03em;color:var(--ink)}
.pv.tf-meridian .stt>div+div{border-left:1px solid var(--line)}
.pv.tf-meridian .tl-steps{gap:16px}
.pv.tf-meridian .tl-steps .ti{background:var(--card);border:1px solid var(--line);border-radius:20px;padding:84px 24px 26px;color:var(--ink)}
.pv.tf-meridian .tl-steps .ti:before{left:24px;top:24px;border-radius:14px;background:linear-gradient(135deg,var(--acc),color-mix(in srgb,var(--acc) 50%,var(--ink)));box-shadow:0 10px 24px -8px var(--acc)}
.pv.tf-meridian .tl-steps .ti:after{display:none}
.pv.tf-meridian .ls{display:grid;grid-template-columns:1fr 1fr;gap:14px;border:0}
.pv.tf-meridian .lr{background:var(--card);border:1px solid var(--line);border-radius:18px;padding:22px 24px;color:var(--ink);display:grid;grid-template-columns:1fr auto;gap:6px 16px;transition:transform .3s,box-shadow .3s}
.pv.tf-meridian .lr:hover{transform:translateY(-3px);box-shadow:0 20px 40px -24px rgba(0,0,0,.4)}
.pv.tf-meridian .lr strong{font-size:19px;letter-spacing:-.01em}
.pv.tf-meridian .lr span{grid-column:1;font-size:15px}
.pv.tf-meridian .lr .mo{grid-column:2;grid-row:1/3;align-self:center;width:40px;height:40px;border-radius:50%;background:var(--soft);font-size:0;display:grid;place-items:center}
.pv.tf-meridian .lr .mo:after{content:"→";font-size:18px;color:var(--ink)}
.pv.tf-meridian .fe-split{grid-template-columns:1fr 1fr;gap:64px}
.pv.tf-meridian .fm{border-radius:28px}
.pv.tf-meridian .fe h3{font-size:42px;letter-spacing:-.03em}
.pv.tf-meridian .ct>div{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:18px;color:var(--ink)}
.pv.tf-meridian .s-cta,.pv.tf-meridian .s-cta.bg-default{background:transparent}
.pv.tf-meridian .s-cta .w{background:radial-gradient(600px 300px at 80% 0%,color-mix(in srgb,var(--acc) 40%,transparent),transparent 70%),var(--ink);color:var(--oi);border-radius:28px;padding:72px 40px;max-width:calc(1200px - 2 * var(--pad))}
.pv.tf-meridian .wm-i{border-radius:12px;background:linear-gradient(135deg,var(--acc),color-mix(in srgb,var(--acc) 50%,var(--ink)))}
.pv.tf-meridian .wm-n{letter-spacing:-.03em;font-size:24px}

/* ---------- Bridge: people first ---------- */
.pv.tf-bridge h1{font-size:72px;line-height:1.05}
.pv.tf-bridge h2{font-size:44px}
.pv.tf-bridge .bt{border-radius:999px;padding:15px 28px;font-weight:700}
.pv.tf-bridge .hd{border-bottom:1px solid var(--line)}
.pv.tf-bridge .ey{color:#fff;letter-spacing:.14em;font-weight:700}
.pv.tf-bridge .hl-overlay .hx{min-height:680px;align-items:center}
.pv.tf-bridge .hl-overlay .hm:after{background:linear-gradient(90deg,rgba(0,0,0,.78),rgba(0,0,0,.35) 55%,rgba(0,0,0,.05))}
.pv.tf-bridge .hl-overlay .ht{max-width:640px}
.pv.tf-bridge .hl-overlay p{font-size:20px}
.pv.tf-bridge .hl-overlay .bt2{color:#fff}
.pv.tf-bridge .s-stats,.pv.tf-bridge .s-stats.bg-default{background:var(--soft)}
.pv.tf-bridge .stt b{font-family:var(--hf);color:var(--acc)}
.pv.tf-bridge .sh{flex-direction:column;align-items:center;text-align:center;gap:6px}
.pv.tf-bridge .in{text-align:center;margin:0 auto 40px}
.pv.tf-bridge .tl-steps{gap:24px}
.pv.tf-bridge .tl-steps .ti{text-align:center;align-items:center;padding-top:96px}
.pv.tf-bridge .tl-steps .tx{align-items:center}
.pv.tf-bridge .tl-steps .ti:before{left:50%;margin-left:-36px;width:72px;height:72px;font-size:28px;box-shadow:0 0 0 10px var(--soft)}
.pv.tf-bridge .tl-steps .ti:after{left:calc(50% + 46px);right:calc(-50% + 46px);top:36px;border-top:3px dotted var(--acc)}
.pv.tf-bridge .ls{border:0;display:grid;gap:12px;max-width:900px;margin:0 auto}
.pv.tf-bridge .lr{background:var(--card);border:1px solid var(--line);border-radius:18px;padding:20px 24px 20px 72px;position:relative;color:var(--ink)}
.pv.tf-bridge .lr:before{content:"+";position:absolute;left:22px;top:50%;margin-top:-17px;width:34px;height:34px;border-radius:50%;background:var(--soft);display:grid;place-items:center;font-weight:700;color:var(--acc);font-size:20px;line-height:34px;text-align:center}
.pv.tf-bridge .lr strong{font:600 21px var(--hf)}
.pv.tf-bridge .fe-split{grid-template-columns:1fr 1fr;gap:64px}
.pv.tf-bridge .fm{border-radius:32px;aspect-ratio:4/3.4}
.pv.tf-bridge .fe h3{font-size:42px}
.pv.tf-bridge .ct{text-align:center}.pv.tf-bridge .s-contact .w{text-align:center}
.pv.tf-bridge .s-cta,.pv.tf-bridge .s-cta.bg-default{background:var(--acc);color:var(--oa)}
.pv.tf-bridge .s-cta h2{font-size:52px}
.pv.tf-bridge .wm-i{border-radius:50% 50% 50% 8px}
.pv.tf-bridge .wm-n{font-size:24px}

/* run 1: tablet and phone */
@container (min-width:600px) and (max-width:1023.98px){
.pv.tf-council h1{font-size:44px}.pv.tf-meridian h1{font-size:50px}.pv.tf-bridge h1{font-size:54px}
.pv:is(.tf-council,.tf-meridian) .ls{grid-template-columns:1fr}
.pv.tf-council .hl-split .hx,.pv.tf-meridian .hl-split .hx{gap:32px}
}
@container (max-width:599.98px){
.pv.tf-council h1{font-size:36px}.pv.tf-meridian h1{font-size:40px}.pv.tf-bridge h1{font-size:42px}
.pv:is(.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight) h2,.pv.tf-bridge .s-cta h2{font-size:30px}
.pv:is(.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight) .fe h3{font-size:28px}
.pv:is(.tf-council,.tf-meridian) .hl-split .hx{grid-template-columns:1fr;gap:32px;padding-top:44px;padding-bottom:56px}
.pv:is(.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight) .fe-split{grid-template-columns:1fr;gap:28px}
.pv:is(.tf-council,.tf-meridian) .ls{grid-template-columns:1fr}
.pv.tf-council .stt{grid-template-columns:1fr 1fr;row-gap:20px}.pv.tf-council .stt>div{border:0;padding:0}
.pv.tf-meridian .stt{grid-template-columns:1fr 1fr;row-gap:16px}.pv.tf-meridian .stt>div+div{border:0}
.pv.tf-council .s-cta .w{grid-template-columns:1fr}.pv.tf-council .s-cta .w>.bt{grid-column:1;grid-row:auto;justify-self:start}
.pv.tf-bridge .hl-overlay .hx{min-height:560px}
}

.pv.tf-meridian .s-hero .ey{color:var(--oi);background:color-mix(in srgb,var(--acc) 30%,transparent)}
.pv.tf-bridge .ey{color:var(--acc)}.pv.tf-bridge .s-hero .ey{color:#fff}
.pv.tf-bridge .s-cta .bt{background:var(--bg);color:var(--acc)}
/* Meridian panels that sit on a band keep the page colours */
.pv.tf-meridian .s-hero+.s-stats{background:transparent!important}
.pv.tf-meridian .s.s-hero+.s.s-stats>.w,.pv.tf-meridian .s.s-cta.s>.w{--ink:inherit;--line:inherit;--mute:inherit;--card:inherit;--soft:inherit}
.pv.tf-meridian .s-cta{background:transparent!important}
.pv.tf-meridian .s-cta>.w{color:var(--oi)}
.pv.tf-council .s-cta p{margin-left:0}

/* ======================================================================
   Indigenous business series, run 2 (2026-11-14): movers, storage and logistics. Convoy, Homeward, Freight.
   ====================================================================== */
/* ---------- Convoy: loud and road-ready ---------- */
.pv.tf-convoy{font-size:17px}
.pv.tf-convoy :is(h1,h2,h3,.wm-n){text-transform:uppercase;letter-spacing:.01em}
.pv.tf-convoy h1{font-size:104px;line-height:.9}
.pv.tf-convoy h2{font-size:56px;line-height:.95}
.pv.tf-convoy h3{font-size:26px;line-height:1}
.pv.tf-convoy .hd{background:var(--ink);color:var(--oi);border:0;box-shadow:inset 0 -5px 0 var(--acc)}
.pv.tf-convoy :is(.mn,.dr>summary){text-transform:uppercase;font-weight:700;letter-spacing:.06em;font-size:14px}
.pv.tf-convoy .bt{border-radius:0;text-transform:uppercase;letter-spacing:.08em;font-weight:800;padding:16px 28px;clip-path:polygon(0 0,100% 0,calc(100% - 12px) 100%,0 100%)}
.pv.tf-convoy .ey{display:inline-block;background:var(--acc);color:var(--oa);padding:6px 12px;letter-spacing:.12em;font-weight:800}
.pv.tf-convoy .hl-overlay .hx{min-height:700px;align-items:end;padding-bottom:110px}
.pv.tf-convoy .hl-overlay .ht{max-width:860px}
.pv.tf-convoy .hl-overlay .hm:after{background:linear-gradient(0deg,rgba(0,0,0,.85),rgba(0,0,0,.25) 60%,rgba(0,0,0,.1))}
.pv.tf-convoy .hl-overlay p{font-size:20px;max-width:600px}
.pv.tf-convoy .hl-overlay .bt2{color:#fff;box-shadow:inset 0 0 0 2px #fff}
.pv.tf-convoy .s-hero{position:relative}
.pv.tf-convoy .s-hero:after{content:"";position:absolute;left:0;right:0;bottom:44px;height:6px;background:repeating-linear-gradient(90deg,var(--acc) 0 64px,transparent 64px 104px);opacity:.95;pointer-events:none}
.pv.tf-convoy .s-stats,.pv.tf-convoy .s-stats.bg-default{background:var(--acc);color:var(--oa)}
.pv.tf-convoy .stt b{font:800 66px/1 var(--hf);color:var(--oa);white-space:nowrap}
.pv.tf-convoy .stt span{text-transform:uppercase;letter-spacing:.1em;font-weight:700;font-size:13px}
.pv.tf-convoy .sh{border-left:8px solid var(--acc);padding-left:18px}
.pv.tf-convoy .ti{border-radius:0;border:2px solid var(--ink);box-shadow:8px 8px 0 var(--acc)}
.pv.tf-convoy .tim{border-radius:0}
.pv.tf-convoy .tl-steps{gap:0;counter-reset:cv}
.pv.tf-convoy .tl-steps .ti{box-shadow:none;border:0;border-left:2px solid var(--line);padding:84px 24px 8px}
.pv.tf-convoy .tl-steps .ti:before{border-radius:0;background:var(--ink);color:var(--oi);font:800 30px/56px var(--hf);width:56px;height:56px;left:24px}
.pv.tf-convoy .tl-steps .ti:after{display:none}
.pv.tf-convoy .ls{border:0;display:grid;grid-template-columns:1fr 1fr;gap:0 48px;border-top:2px solid var(--ink)}
.pv.tf-convoy .lr{flex-direction:column;align-items:flex-start;border-bottom:2px solid var(--ink);padding:24px 24px 24px 0}
.pv.tf-convoy .lr strong{font:800 26px/1 var(--hf);text-transform:uppercase}
.pv.tf-convoy .lr .mo{font-weight:800;text-transform:uppercase;letter-spacing:.08em;font-size:13px;color:var(--acc)}
.pv.tf-convoy .fe-split{grid-template-columns:1fr 1fr;gap:64px}
.pv.tf-convoy .fm{border-radius:0;box-shadow:-16px 16px 0 var(--acc)}
.pv.tf-convoy .fe h3{font-size:52px}
.pv.tf-convoy .bk-b{border-radius:0;border:2px solid var(--ink);box-shadow:10px 10px 0 var(--acc)}
.pv.tf-convoy .bk-ar li{border-radius:0;border:2px solid var(--ink);text-transform:uppercase;font-size:13px;letter-spacing:.06em}
.pv.tf-convoy .bk-i b{font:800 24px var(--hf)}
.pv.tf-convoy .tq{border-radius:0}
.pv.tf-convoy .s-cta,.pv.tf-convoy .s-cta.bg-default{background:repeating-linear-gradient(-45deg,var(--ink) 0 22px,color-mix(in srgb,var(--ink) 88%,var(--acc)) 22px 44px);color:var(--oi)}
.pv.tf-convoy .s-cta h2{font-size:72px}
.pv.tf-convoy .wm-i{border-radius:0;background:var(--acc);color:var(--oa)}
.pv.tf-convoy .wm-n{font:800 28px var(--hf)}
.pv.tf-convoy .ft{border-top:6px solid var(--acc)}

/* ---------- Homeward: friendly family mover ---------- */
.pv.tf-homeward{font-size:17px}
.pv.tf-homeward h1{font-size:64px;line-height:1.05;letter-spacing:-.02em}
.pv.tf-homeward h2{font-size:42px;letter-spacing:-.01em}
.pv.tf-homeward .hd{border:0;background:var(--bg)}
.pv.tf-homeward :is(.mn,.dr>summary){font-weight:700}
.pv.tf-homeward .bt{border-radius:999px;font-weight:800;padding:16px 30px;box-shadow:0 10px 24px -10px var(--acc)}
.pv.tf-homeward .bt2{box-shadow:inset 0 0 0 2px var(--line)}
.pv.tf-homeward .ey{display:inline-flex;align-items:center;gap:8px;background:var(--soft);color:var(--ink);padding:8px 16px;border-radius:999px;letter-spacing:0;text-transform:none;font-weight:700;font-size:14px}
.pv.tf-homeward .ey:before{content:"";width:10px;height:10px;border-radius:50%;background:var(--acc);box-shadow:0 0 0 4px color-mix(in srgb,var(--acc) 25%,transparent)}
.pv.tf-homeward .s-hero{background:linear-gradient(180deg,var(--soft),var(--bg))}
.pv.tf-homeward .hl-split .hx{grid-template-columns:1fr 1fr;gap:56px;padding-top:72px;padding-bottom:96px}
.pv.tf-homeward .hl-split .hm{aspect-ratio:5/4.6;border-radius:40px 40px 40px 120px;position:relative;overflow:visible}
.pv.tf-homeward .hl-split .hm>img,.pv.tf-homeward .hl-split .hm>svg{border-radius:inherit}
.pv.tf-homeward .hl-split .hm:after{content:"";position:absolute;right:-18px;bottom:-18px;width:96px;height:96px;border-radius:28px;background:var(--acc) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cpath d='M8 22L24 9l16 13v17H29V28h-10v11H8z' fill='none' stroke='white' stroke-width='3.4' stroke-linejoin='round'/%3E%3C/svg%3E") center/52% no-repeat;box-shadow:0 18px 36px -12px rgba(0,0,0,.35)}
.pv.tf-homeward .hl-split p{font-size:19px}
.pv.tf-homeward .s-stats,.pv.tf-homeward .s-stats.bg-default{background:var(--bg)}
.pv.tf-homeward .stt{background:var(--card);border:1px solid var(--line);border-radius:28px;padding:30px 12px;box-shadow:0 24px 48px -32px rgba(0,0,0,.35)}
.pv.tf-homeward .stt b{color:var(--acc);font-size:42px}
.pv.tf-homeward .sh{flex-direction:column;align-items:center;text-align:center;gap:6px}
.pv.tf-homeward .in{text-align:center;margin:0 auto 40px}
.pv.tf-homeward .ti{border-radius:28px;background:var(--card);border:1px solid var(--line);overflow:hidden}
.pv.tf-homeward .tim{border-radius:0}
.pv.tf-homeward .tl-steps{gap:24px}
.pv.tf-homeward .tl-steps .ti{text-align:center;align-items:center;padding:100px 24px 28px}
.pv.tf-homeward .tl-steps .tx{align-items:center}
.pv.tf-homeward .tl-steps .ti:before{left:50%;margin-left:-32px;top:24px;width:64px;height:64px;border-radius:22px;background:var(--acc);color:var(--oa);font-size:26px;box-shadow:0 12px 24px -10px var(--acc)}
.pv.tf-homeward .tl-steps .ti:after{display:none}
.pv.tf-homeward .ls{border:0;display:grid;grid-template-columns:1fr 1fr;gap:14px}
.pv.tf-homeward .lr{background:var(--card);border:1px solid var(--line);border-radius:22px;padding:22px 24px 22px 76px;position:relative;color:var(--ink);flex-direction:column;align-items:flex-start;gap:4px}
.pv.tf-homeward .lr:before{content:"✓";position:absolute;left:22px;top:22px;width:36px;height:36px;border-radius:12px;background:var(--soft);color:var(--acc);font-weight:900;text-align:center;line-height:36px}
.pv.tf-homeward .lr strong{font:800 19px var(--hf)}
.pv.tf-homeward .fe-split{grid-template-columns:1fr 1fr;gap:64px}
.pv.tf-homeward .fm{border-radius:40px}
.pv.tf-homeward .fe h3{font-size:40px}
.pv.tf-homeward .bk-b{border-radius:32px;padding:32px;border:0;box-shadow:0 30px 60px -30px rgba(0,0,0,.35)}
.pv.tf-homeward .bk-ar li{background:var(--soft);border-color:transparent}
.pv.tf-homeward .tq{border-radius:28px}
.pv.tf-homeward .s-cta,.pv.tf-homeward .s-cta.bg-default{background:transparent}
.pv.tf-homeward .s-cta>.w{background:var(--acc);color:var(--oa);border-radius:40px;padding:72px 40px;max-width:calc(1200px - 2 * var(--pad))}
.pv.tf-homeward .s-cta .bt{background:var(--bg);color:var(--acc);box-shadow:none}
.pv.tf-homeward .wm-i{border-radius:14px 14px 14px 4px}
.pv.tf-homeward .wm-n{font:800 24px var(--hf);letter-spacing:-.01em}

/* ---------- Freight: logistics manifest ---------- */
.pv.tf-freight{font-size:16px}
.pv.tf-freight h1{font-size:72px;line-height:1;letter-spacing:-.035em}
.pv.tf-freight h2{font-size:44px;letter-spacing:-.03em}
.pv.tf-freight :is(.ey,.stt span,.lr .mo,.bk-at,.bk-n){font-family:"IBM Plex Mono",ui-monospace,monospace}
.pv.tf-freight .hd{border-bottom:1px solid var(--ink)}
.pv.tf-freight :is(.mn,.dr>summary){font-weight:500}
.pv.tf-freight .bt{border-radius:4px;font-weight:600;padding:14px 22px}
.pv.tf-freight .bt:not(.bt2):after{content:" →"}
.pv.tf-freight .ey{color:var(--acc);letter-spacing:.04em;text-transform:uppercase;font-size:13px;font-weight:500}
.pv.tf-freight .ey:before{content:"[ "}.pv.tf-freight .ey:after{content:" ]"}
.pv.tf-freight .s-hero{background:linear-gradient(var(--line) 1px,transparent 1px) 0 0/48px 48px,linear-gradient(90deg,var(--line) 1px,transparent 1px) 0 0/48px 48px,var(--bg)}
.pv.tf-freight .hl-split .hx{grid-template-columns:1.15fr 1fr;gap:56px;padding-top:88px;padding-bottom:88px}
.pv.tf-freight .hl-split .hm{aspect-ratio:4/3.6;border-radius:4px;outline:1px solid var(--ink);outline-offset:10px}
.pv.tf-freight .hl-split p{font-size:19px}
.pv.tf-freight .s-stats,.pv.tf-freight .s-stats.bg-default{background:var(--ink);color:var(--oi)}
.pv.tf-freight .stt{text-align:left;gap:0}
.pv.tf-freight .stt>div{border-left:1px dashed color-mix(in srgb,var(--oi) 35%,transparent);padding:2px 24px}
.pv.tf-freight .stt b{font:700 48px/1.05 var(--hf);color:var(--oi);letter-spacing:-.03em}
.pv.tf-freight .stt span{font-size:12px;text-transform:uppercase;letter-spacing:.06em;opacity:.75}
.pv.tf-freight .sh{border-bottom:1px solid var(--ink);padding-bottom:14px}
.pv.tf-freight .ti{border-radius:4px;border:1px solid var(--ink);background:var(--card)}
.pv.tf-freight .tim{border-radius:0;border-bottom:1px solid var(--ink)}
.pv.tf-freight .tl-steps{gap:0;border:1px solid var(--ink)}
.pv.tf-freight .tl-steps .ti{border:0;border-radius:0;padding:76px 22px 24px}
.pv.tf-freight .tl-steps .ti+.ti{border-left:1px solid var(--ink)}
.pv.tf-freight .tl-steps .ti:before{left:22px;top:22px;border-radius:4px;background:transparent;color:var(--acc);box-shadow:inset 0 0 0 1px var(--acc);font-family:"IBM Plex Mono",monospace;font-weight:500}
.pv.tf-freight .tl-steps .ti:after{display:none}
.pv.tf-freight .ls{border:0;counter-reset:fr;display:grid;grid-template-columns:1fr 1fr;gap:0 40px}
.pv.tf-freight .lr{counter-increment:fr;border-bottom:1px solid var(--ink);padding:20px 0 20px 64px;position:relative;flex-direction:column;align-items:flex-start;gap:4px}
.pv.tf-freight .lr:before{content:counter(fr,decimal-leading-zero);position:absolute;left:0;top:20px;font:500 14px "IBM Plex Mono",monospace;color:var(--acc);border:1px solid var(--acc);border-radius:4px;padding:2px 7px}
.pv.tf-freight .lr strong{font:700 20px var(--hf);letter-spacing:-.01em}
.pv.tf-freight .lr .mo{font-size:13px;color:var(--acc)}
.pv.tf-freight .fe-split{grid-template-columns:1fr 1fr;gap:64px}
.pv.tf-freight .fm{border-radius:4px}
.pv.tf-freight .fe h3{font-size:40px;letter-spacing:-.03em}
.pv.tf-freight .bk-b{border-radius:4px;border:1px solid var(--ink);box-shadow:8px 8px 0 color-mix(in srgb,var(--ink) 12%,transparent)}
.pv.tf-freight .bk-ar li{border-radius:4px;font-family:"IBM Plex Mono",monospace;font-weight:500;font-size:13px}
.pv.tf-freight .bk-i b{font-family:"IBM Plex Mono",monospace;font-weight:600}
.pv.tf-freight .ct>div{border:1px solid var(--line);border-radius:4px;padding:16px}
.pv.tf-freight .s-cta,.pv.tf-freight .s-cta.bg-default{background:var(--acc);color:var(--oa)}
.pv.tf-freight .s-cta .w{text-align:left;display:grid;grid-template-columns:2fr 1fr;align-items:center;gap:0 40px}
.pv.tf-freight .s-cta .w>.bt{grid-column:2;grid-row:1/3;justify-self:end;background:var(--ink);color:var(--oi)}
.pv.tf-freight .s-cta p{margin-left:0}
.pv.tf-freight .wm-i{border-radius:4px;background:var(--ink);color:var(--oi)}
.pv.tf-freight .wm-n{font:700 22px var(--hf);letter-spacing:-.02em}

/* run 2: tablet and phone */
@container (min-width:600px) and (max-width:1023.98px){
.pv.tf-convoy h1{font-size:76px}.pv.tf-homeward h1{font-size:50px}.pv.tf-freight h1{font-size:54px}
.pv:is(.tf-homeward,.tf-freight) .hl-split .hx{gap:32px}
.pv.tf-freight .tl-steps .ti+.ti{border-left:0}
}
@container (max-width:599.98px){
.pv.tf-convoy h1{font-size:58px}.pv.tf-homeward h1{font-size:40px}.pv.tf-freight h1{font-size:42px}
.pv:is(.tf-convoy,.tf-homeward,.tf-freight) h2{font-size:32px}.pv.tf-convoy .s-cta h2{font-size:42px}
.pv:is(.tf-convoy,.tf-homeward,.tf-freight) .fe h3{font-size:30px}
.pv.tf-convoy .hl-overlay .hx{min-height:560px;padding-bottom:84px}.pv.tf-convoy .s-hero:after{bottom:30px}
.pv.tf-convoy .stt b{font-size:48px}
.pv:is(.tf-convoy,.tf-homeward,.tf-freight) .ls{grid-template-columns:1fr}
.pv:is(.tf-homeward,.tf-freight) .hl-split .hx{grid-template-columns:1fr;gap:36px;padding-top:44px;padding-bottom:60px}
.pv:is(.tf-convoy,.tf-homeward,.tf-freight) .fe-split{grid-template-columns:1fr;gap:28px}
.pv.tf-homeward .hl-split .hm:after{width:72px;height:72px;right:-8px;bottom:-12px}
.pv.tf-homeward .s-cta>.w{padding:48px 24px;border-radius:28px}
.pv.tf-freight .stt{grid-template-columns:1fr 1fr;row-gap:20px}.pv.tf-freight .stt>div{border:0;padding:0}
.pv.tf-freight .tl-steps .ti+.ti{border-left:0;border-top:1px solid var(--ink)}
.pv.tf-freight .s-cta .w{grid-template-columns:1fr}.pv.tf-freight .s-cta .w>.bt{grid-column:1;grid-row:auto;justify-self:start}
}
`,we=`modulepreload`,Te=function(e,t){return new URL(e,t).href},Ee={},De=function(e){return e.pathname.endsWith(`.css`)},Oe=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},ke=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=Te(t,n);let r=s(t),i=De(r);return Oe(Ee,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:we,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{let i=a=>{t.removeEventListener(`load`,i),t.removeEventListener(`error`,i),a.type===`error`?n(Error(`Unable to preload CSS for ${r}`)):e(a)};t.addEventListener(`load`,i),t.addEventListener(`error`,i)})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Ae=null,Q=null;function je(){return Ae?Promise.resolve(Ae):ke(()=>import(`./gfonts-CkimgZd4.js`).then(e=>(Ae=e.default,Q={},Ae.forEach(e=>{Q[e[0]]=e}),Ae)),[],import.meta.url)}var Me={s:`Sans serif`,r:`Serif`,d:`Display`,h:`Handwriting`,m:`Monospace`};function Ne(e){return Q&&Q[e]}function Pe(e,t){return e.reduce((e,n)=>Math.abs(n-t)<Math.abs(e-t)?n:e,e[0])}var Fe={},Ie={},Le={},Re={};function ze(e){return Fe[e]||(Fe[e]=fetch(e).then(e=>{if(!e.ok)throw Error(`font file`);return e.blob()}).then(e=>new Promise(t=>{let n=new FileReader;n.onload=()=>t(n.result),n.readAsDataURL(e)})))}function Be(e,t,n){return`https://fonts.googleapis.com/css2?family=`+encodeURIComponent(e).replace(/%20/g,`+`)+`:wght@`+t.join(`;`)+`&display=block`+(n?`&text=`+encodeURIComponent(n):``)}function Ve(e,t){let n=e+`:`+t.join(`,`);return Ie[n]||(Ie[n]=fetch(Be(e,t)).then(e=>{if(!e.ok)throw Error(`font css`);return e.text()}).then(e=>{let n=e.split(/(?=\/\* [\w-]+ \*\/)/).filter(e=>/@font-face/.test(e)),r=n.filter(e=>/^\/\* latin \*\//.test(e));return r.length||(r=n.slice(0,t.length)),Promise.all(r.map(e=>{let t=/url\((https:[^)]+)\)/.exec(e);return t?ze(t[1]).then(n=>e.replace(t[1],n)).catch(()=>``):e}))}).then(e=>e.join(`
`)).catch(()=>``)),Ie[n]}async function He(e){if(!e)return``;await je();let t=await Promise.all(e.split(`|`).map(e=>{let t=e.lastIndexOf(`:`),n=e.slice(0,t),r=Q[n];if(!r)return null;let i=[...new Set(e.slice(t+1).split(`,`).map(e=>Pe(r[2],+e)))].sort((e,t)=>e-t);return Ve(n,i).then(e=>({fam:n,ws:i,css:e}))})),n=``;for(let e of t)if(e&&e.css&&(n+=e.css+`
`,!Le[e.css])){let t=document.createElement(`style`);t.dataset.gf=e.fam,t.textContent=e.css,document.head.appendChild(t),Le[e.css]=1}return await Promise.all(t.filter(e=>e&&e.css).flatMap(e=>e.ws.map(t=>document.fonts.load(t+` 16px "`+e.fam+`"`).catch(()=>null)))),n}var Ue=e=>`bake-preview `+e;function We(e){if(Re[e]||!Q||!Q[e])return;Re[e]=1;let t=Q[e];fetch(Be(e,[Pe(t[2],400)],e+` Aa0123`)).then(e=>e.ok?e.text():``).then(t=>{if(!t)return;let n=document.createElement(`style`);n.dataset.gfPreview=e,n.textContent=t.replace(/font-family:\s*'[^']*'/g,`font-family:'`+Ue(e).replace(/'/g,``)+`'`),document.head.appendChild(n)}).catch(()=>{Re[e]=0})}var Ge=(function(){var e=null,t={},n={},r=[];function i(){return e||=Promise.resolve(Ce),e}function a(e){return/^data:/.test(e)?Promise.resolve(e):(t[e]||(t[e]=fetch(e).then(function(e){if(!e.ok)throw 0;return e.blob()}).then(function(e){return new Promise(function(t){var n=new FileReader;n.onload=function(){t(n.result)},n.onerror=function(){t(``)},n.readAsDataURL(e)})}).catch(function(){return``})),t[e])}function o(e,t){return n[e]=t,r.push(e),r.length>80&&delete n[r.shift()],t}var s={section:0,item:1,text:2,image:2};function c(e,t,n){var r=e.getBoundingClientRect(),i=[],a={};function o(e){var i=e.getBoundingClientRect(),a=Math.max(0,i.left-r.left),o=Math.max(0,i.top-r.top),s=Math.min(t,i.right-r.left),c=Math.min(n,i.bottom-r.top);return s-a>=2&&c-o>=2?{x:Math.round(a),y:Math.round(o),width:Math.round(s-a),height:Math.round(c-o)}:null}function c(e,t,n,r,s){var c=o(e);if(c){var l=n.dataset.sec+(r?`:`+r.dataset.ii:``)+(s?`:`+s:``)+(t==`item`?`:item`:``);a[l]=(a[l]||0)+1,a[l]>1&&(l+=`:`+a[l]),i.push({id:l,type:t,sectionIndex:+n.dataset.si,x:c.x,y:c.y,width:c.width,height:c.height,sectionId:n.dataset.sec,sectionType:n.dataset.type,itemIndex:r?+r.dataset.ii:null,field:s||null})}}Array.prototype.forEach.call(e.querySelectorAll(`[data-sec]`),function(e){c(e,`section`,e),Array.prototype.forEach.call(e.querySelectorAll(`[data-ii]`),function(t){c(t,`item`,e,t)}),Array.prototype.forEach.call(e.querySelectorAll(`[data-fk]`),function(t){var n=t.closest(`[data-ii]`);n&&!e.contains(n)&&(n=null),c(t,/^(img|svg)$/i.test(t.tagName)?`image`:`text`,e,n,t.dataset.fk)})}),i.sort(function(e,t){return s[e.type]-s[t.type]});var l=[];return Array.prototype.forEach.call(e.querySelectorAll(`a[href]`),function(e){var t=o(e),n=e.getAttribute(`href`);t&&n&&n!=`#`&&l.push({x:t.x,y:t.y,width:t.width,height:t.height,href:n,label:(e.textContent||``).trim().slice(0,80)})}),{width:t,height:n,boxes:i,links:l}}async function l(e,t,r){r||={};var s=t+`|`+(r.maxH||0)+`|`+(r.scale||1)+`|`+e;if(n[s])return n[s];var l=await i(),u=/data-gf="([^"]*)"/.exec(e);u&&(l=await He(u[1].replace(/&amp;/g,`&`))+l);var d=document.createElement(`div`);d.className=`cq`,d.style.cssText=`position:absolute;left:-100000px;top:0;width:`+t+`px`,d.innerHTML=e,document.body.appendChild(d);var f=Array.prototype.slice.call(d.querySelectorAll(`img`));f.forEach(function(e){e.removeAttribute(`loading`)}),await Promise.all(f.map(function(e){return a(e.getAttribute(`src`)).then(function(t){t?e.setAttribute(`src`,t):e.removeAttribute(`src`)})})),await Promise.all(f.map(function(e){return Promise.race([e.decode?e.decode().catch(function(){}):null,new Promise(function(e){setTimeout(e,4e3)})])}));var p=d.scrollHeight,m=Math.min(p,r.maxH||p,3e4),h=c(d,t,m),g=h.boxes.filter(function(e){return e.type==`section`}).map(function(e){return{id:e.sectionId,y:e.y,h:e.height}});d.style.cssText=`width:`+t+`px`;var _=new XMLSerializer().serializeToString(d);d.remove();var v=`<svg xmlns="http://www.w3.org/2000/svg" width="`+t+`" height="`+m+`"><foreignObject width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml"><style>`+l.replace(/</g,`&lt;`)+`</style>`+_+`</div></foreignObject></svg>`,y=new Image;y.src=`data:image/svg+xml;charset=utf-8,`+encodeURIComponent(v),await y.decode();var b=r.scale||1,x=document.createElement(`canvas`);x.width=Math.round(t*b),x.height=Math.round(m*b);var S=x.getContext(`2d`);return S.scale(b,b),S.drawImage(y,0,0),o(s,{url:await new Promise(function(e){x.toBlob(function(t){e(URL.createObjectURL(t))},r.type||`image/png`,.9)}),w:t,h:m,full:p,secs:g,map:h})}return{take:l}})(),$=e=>String(e??``).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]);function Ke(e){let t=/data-gf="([^"]*)"/.exec(e);if(!t)return``;let n=t[1].replace(/&amp;/g,`&`).split(`|`).filter(Boolean).map(e=>{let[t,n]=e.split(`:`),r=(n||`400`).split(`,`).map(Number).sort((e,t)=>e-t);return`family=`+encodeURIComponent(t).replace(/%20/g,`+`)+`:wght@`+r.join(`;`)});return n.length?`https://fonts.googleapis.com/css2?`+n.join(`&`)+`&display=swap`:``}function qe(e,t){return t==0?`index`:(String(e.name||`page`).toLowerCase().normalize(`NFKD`).replace(/[^\w\s-]/g,``).trim().replace(/[\s_]+/g,`-`).replace(/-+/g,`-`)||`page`)+``}function Je(e){let t={},n=[];return e.pages.forEach((e,r)=>{let i=qe(e,r),a=2;for(;t[i];)i=qe(e,r)+`-`+a++;t[i]=1,n.push({id:e.id,file:i+`.html`,url:e.url||``,name:e.name})}),n}function Ye(e,t){let n=e=>String(e||``).replace(/^https?:\/\/(www\.)?/i,``).replace(/[#?].*$/,``).replace(/\/+$/,``).toLowerCase(),r={};t.forEach(e=>{e.url&&(r[n(e.url)]=e.file)});let i=t[0],a={};return t.forEach(e=>{a[String(e.name||``).trim().toLowerCase()]=e.file}),e=e.replace(/<a([^>]*?)href="#"([^>]*)>([^<]*)<\/a>/g,(e,t,n,r)=>{let i=a[r.replace(/&amp;/g,`&`).trim().toLowerCase()];return i?`<a`+t+`href="`+i+`"`+n+`>`+r+`</a>`:e}),e.replace(/href="([^"]*)"/g,(e,t)=>{let a=t.replace(/&amp;/g,`&`);return r[n(a)]?`href="`+r[n(a)]+`"`:i&&(a==`/`||i.url&&n(a)==n(i.url))?`href="index.html"`:e})}function Xe(e,t,n={}){let r=Se.page(e,t,{pageId:n.pageId});n.map&&(r=Ye(r,n.map));let i=e.pages.filter(e=>e.id==n.pageId)[0]||e.pages[0]||{},a=n.title||(i.name&&i.name!=`Home`?i.name+` | `:``)+(e.biz.name||`My site`),o=Ke(r);return`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>`+$(a)+`</title>
`+(e.biz.desc?`<meta name="description" content="`+$(e.biz.desc)+`">
`:``)+`<meta name="generator" content="BAKE Studio (bakeaweb.com)">
`+(o?`<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="`+$(o)+`">
`:``)+`<style>
body{margin:0}
`+Ce+`
</style>
</head>
<body>
<div class="cq">`+r+`</div>
</body>
</html>
`}function Ze(e,t){let n=Je(e);return n.map(r=>({path:r.file,content:Xe(e,t,{pageId:r.id,map:n})}))}async function Qe(e,t,n={}){let r=Je(e),i=r.filter(e=>e.id==n.pageId)[0]||r[0],a=Ye(Se.page(e,t,{pageId:i.id}),r),o=[[`desktop`,1280],[`phone`,390]],s=[],c=[];for(let[t,n]of o){let r=await Ge.take(a,n,{scale:t==`phone`?2:1,type:`image/webp`}),o=await(await fetch(r.url)).blob(),l=i.file.replace(/\.html$/,``)+`-`+t+`.webp`;s.push({path:l,blob:o});let u=(e,t)=>(e/t*100).toFixed(3)+`%`,d=(r.map.links||[]).map(e=>`<a href="`+$(e.href)+`" style="left:`+u(e.x,r.w)+`;top:`+u(e.y,r.h)+`;width:`+u(e.width,r.w)+`;height:`+u(e.height,r.h)+`"`+(e.label?` aria-label="`+$(e.label)+`"`:``)+`></a>`).join(``);c.push(`<div class="pic pic-`+t+`" style="max-width:`+n+`px"><img src="`+l+`" alt="`+$((i.name||`Page`)+` of `+(e.biz.name||`this site`))+`" width="`+n+`" height="`+r.h+`">`+d+`</div>`)}return{html:`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>`+$(n.title||e.biz.name||`Portfolio`)+`</title>
<style>body{margin:0;background:#f4f4f2}.pic{position:relative;margin:0 auto}.pic img{display:block;width:100%;height:auto}.pic a{position:absolute;display:block}.pic a:hover,.pic a:focus{outline:2px solid rgba(37,99,235,.7);outline-offset:1px;border-radius:4px}.pic-phone{display:none}@media (max-width:700px){.pic-desktop{display:none}.pic-phone{display:block}}</style>
</head>
<body>
`+c.join(`
`)+`
</body>
</html>
`,images:s}}var $e={html:Xe,files:Ze,shotSite:Qe,fontLink:Ke,slug:qe};export{v as A,u as B,he as C,ce as D,xe as E,w as F,c as H,C as I,h as L,_ as M,p as N,ye as O,m as P,x as R,le as S,pe as T,o as V,se as _,Ne as a,ge as b,We as c,Ce as d,Se as f,E as g,Z as h,Me as i,y as j,ve as k,Ue as l,O as m,Ke as n,je as o,T as p,Ge as r,Pe as s,$e as t,ke as u,oe as v,I as w,be as x,ae as y,f as z};