(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Yr(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function jn(t){if(P(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=se(r)?Ta(r):jn(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(se(t))return t;if(ee(t))return t}}const Ia=/;(?![^(]*\))/g,wa=/:([^]+)/,Ea=/\/\*.*?\*\//gs;function Ta(t){const e={};return t.replace(Ea,"").split(Ia).forEach(n=>{if(n){const r=n.split(wa);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Xr(t){let e="";if(se(t))e=t;else if(P(t))for(let n=0;n<t.length;n++){const r=Xr(t[n]);r&&(e+=r+" ")}else if(ee(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ca="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Sa=Yr(Ca);function Pi(t){return!!t||t===""}const ur=t=>se(t)?t:t==null?"":P(t)||ee(t)&&(t.toString===xi||!N(t.toString))?JSON.stringify(t,Di,2):String(t),Di=(t,e)=>e&&e.__v_isRef?Di(t,e.value):kt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Ni(e)?{[`Set(${e.size})`]:[...e.values()]}:ee(e)&&!P(e)&&!Li(e)?String(e):e,X={},Rt=[],Oe=()=>{},Aa=()=>!1,Oa=/^on[^a-z]/,Wn=t=>Oa.test(t),Qr=t=>t.startsWith("onUpdate:"),ce=Object.assign,Zr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ra=Object.prototype.hasOwnProperty,U=(t,e)=>Ra.call(t,e),P=Array.isArray,kt=t=>Vn(t)==="[object Map]",Ni=t=>Vn(t)==="[object Set]",N=t=>typeof t=="function",se=t=>typeof t=="string",es=t=>typeof t=="symbol",ee=t=>t!==null&&typeof t=="object",Mi=t=>ee(t)&&N(t.then)&&N(t.catch),xi=Object.prototype.toString,Vn=t=>xi.call(t),ka=t=>Vn(t).slice(8,-1),Li=t=>Vn(t)==="[object Object]",ts=t=>se(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,En=Yr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zn=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Pa=/-(\w)/g,Ue=zn(t=>t.replace(Pa,(e,n)=>n?n.toUpperCase():"")),Da=/\B([A-Z])/g,Bt=zn(t=>t.replace(Da,"-$1").toLowerCase()),Kn=zn(t=>t.charAt(0).toUpperCase()+t.slice(1)),fr=zn(t=>t?`on${Kn(t)}`:""),Yt=(t,e)=>!Object.is(t,e),Tn=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Dn=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ar=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Rs;const Na=()=>Rs||(Rs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ce;class Ma{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ce,!e&&Ce&&(this.index=(Ce.scopes||(Ce.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ce;try{return Ce=this,e()}finally{Ce=n}}}on(){Ce=this}off(){Ce=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function xa(t,e=Ce){e&&e.active&&e.effects.push(t)}function La(){return Ce}const ns=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ui=t=>(t.w&it)>0,Fi=t=>(t.n&it)>0,Ua=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=it},Fa=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Ui(s)&&!Fi(s)?s.delete(t):e[n++]=s,s.w&=~it,s.n&=~it}e.length=n}},Or=new WeakMap;let zt=0,it=1;const Rr=30;let Se;const vt=Symbol(""),kr=Symbol("");class rs{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,xa(this,r)}run(){if(!this.active)return this.fn();let e=Se,n=tt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Se,Se=this,tt=!0,it=1<<++zt,zt<=Rr?Ua(this):ks(this),this.fn()}finally{zt<=Rr&&Fa(this),it=1<<--zt,Se=this.parent,tt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Se===this?this.deferStop=!0:this.active&&(ks(this),this.onStop&&this.onStop(),this.active=!1)}}function ks(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let tt=!0;const Bi=[];function Ht(){Bi.push(tt),tt=!1}function $t(){const t=Bi.pop();tt=t===void 0?!0:t}function he(t,e,n){if(tt&&Se){let r=Or.get(t);r||Or.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=ns()),Hi(s)}}function Hi(t,e){let n=!1;zt<=Rr?Fi(t)||(t.n|=it,n=!Ui(t)):n=!t.has(Se),n&&(t.add(Se),Se.deps.push(t))}function We(t,e,n,r,s,i){const o=Or.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&P(t)){const c=Number(r);o.forEach((f,d)=>{(d==="length"||d>=c)&&a.push(f)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":P(t)?ts(n)&&a.push(o.get("length")):(a.push(o.get(vt)),kt(t)&&a.push(o.get(kr)));break;case"delete":P(t)||(a.push(o.get(vt)),kt(t)&&a.push(o.get(kr)));break;case"set":kt(t)&&a.push(o.get(vt));break}if(a.length===1)a[0]&&Pr(a[0]);else{const c=[];for(const f of a)f&&c.push(...f);Pr(ns(c))}}function Pr(t,e){const n=P(t)?t:[...t];for(const r of n)r.computed&&Ps(r);for(const r of n)r.computed||Ps(r)}function Ps(t,e){(t!==Se||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Ba=Yr("__proto__,__v_isRef,__isVue"),$i=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(es)),Ha=ss(),$a=ss(!1,!0),ja=ss(!0),Ds=Wa();function Wa(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=B(this);for(let i=0,o=this.length;i<o;i++)he(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(B)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ht();const r=B(this)[e].apply(this,n);return $t(),r}}),t}function Va(t){const e=B(this);return he(e,"has",t),e.hasOwnProperty(t)}function ss(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?oc:Ki:e?zi:Vi).get(r))return r;const o=P(r);if(!t){if(o&&U(Ds,s))return Reflect.get(Ds,s,i);if(s==="hasOwnProperty")return Va}const a=Reflect.get(r,s,i);return(es(s)?$i.has(s):Ba(s))||(t||he(r,"get",s),e)?a:ae(a)?o&&ts(s)?a:a.value:ee(a)?t?qi(a):as(a):a}}const za=ji(),Ka=ji(!0);function ji(t=!1){return function(n,r,s,i){let o=n[r];if(Lt(o)&&ae(o)&&!ae(s))return!1;if(!t&&(!Nn(s)&&!Lt(s)&&(o=B(o),s=B(s)),!P(n)&&ae(o)&&!ae(s)))return o.value=s,!0;const a=P(n)&&ts(r)?Number(r)<n.length:U(n,r),c=Reflect.set(n,r,s,i);return n===B(i)&&(a?Yt(s,o)&&We(n,"set",r,s):We(n,"add",r,s)),c}}function qa(t,e){const n=U(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&We(t,"delete",e,void 0),r}function Ga(t,e){const n=Reflect.has(t,e);return(!es(e)||!$i.has(e))&&he(t,"has",e),n}function Ja(t){return he(t,"iterate",P(t)?"length":vt),Reflect.ownKeys(t)}const Wi={get:Ha,set:za,deleteProperty:qa,has:Ga,ownKeys:Ja},Ya={get:ja,set(t,e){return!0},deleteProperty(t,e){return!0}},Xa=ce({},Wi,{get:$a,set:Ka}),is=t=>t,qn=t=>Reflect.getPrototypeOf(t);function pn(t,e,n=!1,r=!1){t=t.__v_raw;const s=B(t),i=B(e);n||(e!==i&&he(s,"get",e),he(s,"get",i));const{has:o}=qn(s),a=r?is:n?ls:Xt;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function gn(t,e=!1){const n=this.__v_raw,r=B(n),s=B(t);return e||(t!==s&&he(r,"has",t),he(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function mn(t,e=!1){return t=t.__v_raw,!e&&he(B(t),"iterate",vt),Reflect.get(t,"size",t)}function Ns(t){t=B(t);const e=B(this);return qn(e).has.call(e,t)||(e.add(t),We(e,"add",t,t)),this}function Ms(t,e){e=B(e);const n=B(this),{has:r,get:s}=qn(n);let i=r.call(n,t);i||(t=B(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Yt(e,o)&&We(n,"set",t,e):We(n,"add",t,e),this}function xs(t){const e=B(this),{has:n,get:r}=qn(e);let s=n.call(e,t);s||(t=B(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&We(e,"delete",t,void 0),i}function Ls(){const t=B(this),e=t.size!==0,n=t.clear();return e&&We(t,"clear",void 0,void 0),n}function _n(t,e){return function(r,s){const i=this,o=i.__v_raw,a=B(o),c=e?is:t?ls:Xt;return!t&&he(a,"iterate",vt),o.forEach((f,d)=>r.call(s,c(f),c(d),i))}}function bn(t,e,n){return function(...r){const s=this.__v_raw,i=B(s),o=kt(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,f=s[t](...r),d=n?is:e?ls:Xt;return!e&&he(i,"iterate",c?kr:vt),{next(){const{value:m,done:b}=f.next();return b?{value:m,done:b}:{value:a?[d(m[0]),d(m[1])]:d(m),done:b}},[Symbol.iterator](){return this}}}}function Ge(t){return function(...e){return t==="delete"?!1:this}}function Qa(){const t={get(i){return pn(this,i)},get size(){return mn(this)},has:gn,add:Ns,set:Ms,delete:xs,clear:Ls,forEach:_n(!1,!1)},e={get(i){return pn(this,i,!1,!0)},get size(){return mn(this)},has:gn,add:Ns,set:Ms,delete:xs,clear:Ls,forEach:_n(!1,!0)},n={get(i){return pn(this,i,!0)},get size(){return mn(this,!0)},has(i){return gn.call(this,i,!0)},add:Ge("add"),set:Ge("set"),delete:Ge("delete"),clear:Ge("clear"),forEach:_n(!0,!1)},r={get(i){return pn(this,i,!0,!0)},get size(){return mn(this,!0)},has(i){return gn.call(this,i,!0)},add:Ge("add"),set:Ge("set"),delete:Ge("delete"),clear:Ge("clear"),forEach:_n(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=bn(i,!1,!1),n[i]=bn(i,!0,!1),e[i]=bn(i,!1,!0),r[i]=bn(i,!0,!0)}),[t,n,e,r]}const[Za,ec,tc,nc]=Qa();function os(t,e){const n=e?t?nc:tc:t?ec:Za;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(U(n,s)&&s in r?n:r,s,i)}const rc={get:os(!1,!1)},sc={get:os(!1,!0)},ic={get:os(!0,!1)},Vi=new WeakMap,zi=new WeakMap,Ki=new WeakMap,oc=new WeakMap;function ac(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cc(t){return t.__v_skip||!Object.isExtensible(t)?0:ac(ka(t))}function as(t){return Lt(t)?t:cs(t,!1,Wi,rc,Vi)}function lc(t){return cs(t,!1,Xa,sc,zi)}function qi(t){return cs(t,!0,Ya,ic,Ki)}function cs(t,e,n,r,s){if(!ee(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=cc(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Pt(t){return Lt(t)?Pt(t.__v_raw):!!(t&&t.__v_isReactive)}function Lt(t){return!!(t&&t.__v_isReadonly)}function Nn(t){return!!(t&&t.__v_isShallow)}function Gi(t){return Pt(t)||Lt(t)}function B(t){const e=t&&t.__v_raw;return e?B(e):t}function Ji(t){return Dn(t,"__v_skip",!0),t}const Xt=t=>ee(t)?as(t):t,ls=t=>ee(t)?qi(t):t;function Yi(t){tt&&Se&&(t=B(t),Hi(t.dep||(t.dep=ns())))}function Xi(t,e){t=B(t);const n=t.dep;n&&Pr(n)}function ae(t){return!!(t&&t.__v_isRef===!0)}function Vt(t){return uc(t,!1)}function uc(t,e){return ae(t)?t:new fc(t,e)}class fc{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:B(e),this._value=n?e:Xt(e)}get value(){return Yi(this),this._value}set value(e){const n=this.__v_isShallow||Nn(e)||Lt(e);e=n?e:B(e),Yt(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Xt(e),Xi(this))}}function dt(t){return ae(t)?t.value:t}const dc={get:(t,e,n)=>dt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ae(s)&&!ae(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Qi(t){return Pt(t)?t:new Proxy(t,dc)}var Zi;class hc{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Zi]=!1,this._dirty=!0,this.effect=new rs(e,()=>{this._dirty||(this._dirty=!0,Xi(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=B(this);return Yi(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Zi="__v_isReadonly";function pc(t,e,n=!1){let r,s;const i=N(t);return i?(r=t,s=Oe):(r=t.get,s=t.set),new hc(r,s,i||!s,n)}function nt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Gn(i,e,n)}return s}function Ee(t,e,n,r){if(N(t)){const i=nt(t,e,n,r);return i&&Mi(i)&&i.catch(o=>{Gn(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Ee(t[i],e,n,r));return s}function Gn(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const f=i.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){nt(c,null,10,[t,o,a]);return}}gc(t,n,s,r)}function gc(t,e,n,r=!0){console.error(t)}let Qt=!1,Dr=!1;const oe=[];let Me=0;const Dt=[];let He=null,gt=0;const eo=Promise.resolve();let us=null;function mc(t){const e=us||eo;return t?e.then(this?t.bind(this):t):e}function _c(t){let e=Me+1,n=oe.length;for(;e<n;){const r=e+n>>>1;Zt(oe[r])<t?e=r+1:n=r}return e}function fs(t){(!oe.length||!oe.includes(t,Qt&&t.allowRecurse?Me+1:Me))&&(t.id==null?oe.push(t):oe.splice(_c(t.id),0,t),to())}function to(){!Qt&&!Dr&&(Dr=!0,us=eo.then(ro))}function bc(t){const e=oe.indexOf(t);e>Me&&oe.splice(e,1)}function vc(t){P(t)?Dt.push(...t):(!He||!He.includes(t,t.allowRecurse?gt+1:gt))&&Dt.push(t),to()}function Us(t,e=Qt?Me+1:0){for(;e<oe.length;e++){const n=oe[e];n&&n.pre&&(oe.splice(e,1),e--,n())}}function no(t){if(Dt.length){const e=[...new Set(Dt)];if(Dt.length=0,He){He.push(...e);return}for(He=e,He.sort((n,r)=>Zt(n)-Zt(r)),gt=0;gt<He.length;gt++)He[gt]();He=null,gt=0}}const Zt=t=>t.id==null?1/0:t.id,yc=(t,e)=>{const n=Zt(t)-Zt(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ro(t){Dr=!1,Qt=!0,oe.sort(yc);const e=Oe;try{for(Me=0;Me<oe.length;Me++){const n=oe[Me];n&&n.active!==!1&&nt(n,null,14)}}finally{Me=0,oe.length=0,no(),Qt=!1,us=null,(oe.length||Dt.length)&&ro()}}function Ic(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||X;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:b}=r[d]||X;b&&(s=n.map(T=>se(T)?T.trim():T)),m&&(s=n.map(Ar))}let a,c=r[a=fr(e)]||r[a=fr(Ue(e))];!c&&i&&(c=r[a=fr(Bt(e))]),c&&Ee(c,t,6,s);const f=r[a+"Once"];if(f){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ee(f,t,6,s)}}function so(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!N(t)){const c=f=>{const d=so(f,e,!0);d&&(a=!0,ce(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ee(t)&&r.set(t,null),null):(P(i)?i.forEach(c=>o[c]=null):ce(o,i),ee(t)&&r.set(t,o),o)}function Jn(t,e){return!t||!Wn(e)?!1:(e=e.slice(2).replace(/Once$/,""),U(t,e[0].toLowerCase()+e.slice(1))||U(t,Bt(e))||U(t,e))}let be=null,Yn=null;function Mn(t){const e=be;return be=t,Yn=t&&t.type.__scopeId||null,e}function wc(t){Yn=t}function Ec(){Yn=null}function Kt(t,e=be,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&qs(-1);const i=Mn(e);let o;try{o=t(...s)}finally{Mn(i),r._d&&qs(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function dr(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:f,render:d,renderCache:m,data:b,setupState:T,ctx:D,inheritAttrs:C}=t;let $,F;const ie=Mn(t);try{if(n.shapeFlag&4){const K=s||r;$=Ne(d.call(K,K,m,i,T,b,D)),F=c}else{const K=e;$=Ne(K.length>1?K(i,{attrs:c,slots:a,emit:f}):K(i,null)),F=e.props?c:Tc(c)}}catch(K){Gt.length=0,Gn(K,t,1),$=ve(Re)}let O=$;if(F&&C!==!1){const K=Object.keys(F),{shapeFlag:te}=O;K.length&&te&7&&(o&&K.some(Qr)&&(F=Cc(F,o)),O=ot(O,F))}return n.dirs&&(O=ot(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),$=O,Mn(ie),$}const Tc=t=>{let e;for(const n in t)(n==="class"||n==="style"||Wn(n))&&((e||(e={}))[n]=t[n]);return e},Cc=(t,e)=>{const n={};for(const r in t)(!Qr(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Sc(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,f=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Fs(r,o,f):!!o;if(c&8){const d=e.dynamicProps;for(let m=0;m<d.length;m++){const b=d[m];if(o[b]!==r[b]&&!Jn(f,b))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Fs(r,o,f):!0:!!o;return!1}function Fs(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Jn(n,i))return!0}return!1}function Ac({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Oc=t=>t.__isSuspense;function Rc(t,e){e&&e.pendingBranch?P(t)?e.effects.push(...t):e.effects.push(t):vc(t)}function kc(t,e){if(ne){let n=ne.provides;const r=ne.parent&&ne.parent.provides;r===n&&(n=ne.provides=Object.create(r)),n[t]=e}}function Cn(t,e,n=!1){const r=ne||be;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&N(e)?e.call(r.proxy):e}}const vn={};function hr(t,e,n){return io(t,e,n)}function io(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=X){const a=La()===(ne==null?void 0:ne.scope)?ne:null;let c,f=!1,d=!1;if(ae(t)?(c=()=>t.value,f=Nn(t)):Pt(t)?(c=()=>t,r=!0):P(t)?(d=!0,f=t.some(O=>Pt(O)||Nn(O)),c=()=>t.map(O=>{if(ae(O))return O.value;if(Pt(O))return bt(O);if(N(O))return nt(O,a,2)})):N(t)?e?c=()=>nt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return m&&m(),Ee(t,a,3,[b])}:c=Oe,e&&r){const O=c;c=()=>bt(O())}let m,b=O=>{m=F.onStop=()=>{nt(O,a,4)}},T;if(tn)if(b=Oe,e?n&&Ee(e,a,3,[c(),d?[]:void 0,b]):c(),s==="sync"){const O=Al();T=O.__watcherHandles||(O.__watcherHandles=[])}else return Oe;let D=d?new Array(t.length).fill(vn):vn;const C=()=>{if(F.active)if(e){const O=F.run();(r||f||(d?O.some((K,te)=>Yt(K,D[te])):Yt(O,D)))&&(m&&m(),Ee(e,a,3,[O,D===vn?void 0:d&&D[0]===vn?[]:D,b]),D=O)}else F.run()};C.allowRecurse=!!e;let $;s==="sync"?$=C:s==="post"?$=()=>de(C,a&&a.suspense):(C.pre=!0,a&&(C.id=a.uid),$=()=>fs(C));const F=new rs(c,$);e?n?C():D=F.run():s==="post"?de(F.run.bind(F),a&&a.suspense):F.run();const ie=()=>{F.stop(),a&&a.scope&&Zr(a.scope.effects,F)};return T&&T.push(ie),ie}function Pc(t,e,n){const r=this.proxy,s=se(t)?t.includes(".")?oo(r,t):()=>r[t]:t.bind(r,r);let i;N(e)?i=e:(i=e.handler,n=e);const o=ne;Ut(this);const a=io(s,i.bind(r),n);return o?Ut(o):yt(),a}function oo(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function bt(t,e){if(!ee(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ae(t))bt(t.value,e);else if(P(t))for(let n=0;n<t.length;n++)bt(t[n],e);else if(Ni(t)||kt(t))t.forEach(n=>{bt(n,e)});else if(Li(t))for(const n in t)bt(t[n],e);return t}function Dc(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return fo(()=>{t.isMounted=!0}),ho(()=>{t.isUnmounting=!0}),t}const Ie=[Function,Array],Nc={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ie,onEnter:Ie,onAfterEnter:Ie,onEnterCancelled:Ie,onBeforeLeave:Ie,onLeave:Ie,onAfterLeave:Ie,onLeaveCancelled:Ie,onBeforeAppear:Ie,onAppear:Ie,onAfterAppear:Ie,onAppearCancelled:Ie},setup(t,{slots:e}){const n=vl(),r=Dc();let s;return()=>{const i=e.default&&co(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const C of i)if(C.type!==Re){o=C;break}}const a=B(t),{mode:c}=a;if(r.isLeaving)return pr(o);const f=Bs(o);if(!f)return pr(o);const d=Nr(f,a,r,n);Mr(f,d);const m=n.subTree,b=m&&Bs(m);let T=!1;const{getTransitionKey:D}=f.type;if(D){const C=D();s===void 0?s=C:C!==s&&(s=C,T=!0)}if(b&&b.type!==Re&&(!mt(f,b)||T)){const C=Nr(b,a,r,n);if(Mr(b,C),c==="out-in")return r.isLeaving=!0,C.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},pr(o);c==="in-out"&&f.type!==Re&&(C.delayLeave=($,F,ie)=>{const O=ao(r,b);O[String(b.key)]=b,$._leaveCb=()=>{F(),$._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=ie})}return o}}},Mc=Nc;function ao(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Nr(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:f,onEnterCancelled:d,onBeforeLeave:m,onLeave:b,onAfterLeave:T,onLeaveCancelled:D,onBeforeAppear:C,onAppear:$,onAfterAppear:F,onAppearCancelled:ie}=e,O=String(t.key),K=ao(n,t),te=(M,Y)=>{M&&Ee(M,r,9,Y)},ye=(M,Y)=>{const V=Y[1];te(M,Y),P(M)?M.every(ue=>ue.length<=1)&&V():M.length<=1&&V()},pe={mode:i,persisted:o,beforeEnter(M){let Y=a;if(!n.isMounted)if(s)Y=C||a;else return;M._leaveCb&&M._leaveCb(!0);const V=K[O];V&&mt(t,V)&&V.el._leaveCb&&V.el._leaveCb(),te(Y,[M])},enter(M){let Y=c,V=f,ue=d;if(!n.isMounted)if(s)Y=$||c,V=F||f,ue=ie||d;else return;let x=!1;const Q=M._enterCb=j=>{x||(x=!0,j?te(ue,[M]):te(V,[M]),pe.delayedLeave&&pe.delayedLeave(),M._enterCb=void 0)};Y?ye(Y,[M,Q]):Q()},leave(M,Y){const V=String(t.key);if(M._enterCb&&M._enterCb(!0),n.isUnmounting)return Y();te(m,[M]);let ue=!1;const x=M._leaveCb=Q=>{ue||(ue=!0,Y(),Q?te(D,[M]):te(T,[M]),M._leaveCb=void 0,K[V]===t&&delete K[V])};K[V]=t,b?ye(b,[M,x]):x()},clone(M){return Nr(M,e,n,r)}};return pe}function pr(t){if(Xn(t))return t=ot(t),t.children=null,t}function Bs(t){return Xn(t)?t.children?t.children[0]:void 0:t}function Mr(t,e){t.shapeFlag&6&&t.component?Mr(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function co(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===_e?(o.patchFlag&128&&s++,r=r.concat(co(o.children,e,a))):(e||o.type!==Re)&&r.push(a!=null?ot(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function lo(t){return N(t)?{setup:t,name:t.name}:t}const Sn=t=>!!t.type.__asyncLoader,Xn=t=>t.type.__isKeepAlive;function xc(t,e){uo(t,"a",e)}function Lc(t,e){uo(t,"da",e)}function uo(t,e,n=ne){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Qn(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Xn(s.parent.vnode)&&Uc(r,e,n,s),s=s.parent}}function Uc(t,e,n,r){const s=Qn(e,t,r,!0);po(()=>{Zr(r[e],s)},n)}function Qn(t,e,n=ne,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ht(),Ut(n);const a=Ee(e,n,t,o);return yt(),$t(),a});return r?s.unshift(i):s.push(i),i}}const Ke=t=>(e,n=ne)=>(!tn||t==="sp")&&Qn(t,(...r)=>e(...r),n),Fc=Ke("bm"),fo=Ke("m"),Bc=Ke("bu"),Hc=Ke("u"),ho=Ke("bum"),po=Ke("um"),$c=Ke("sp"),jc=Ke("rtg"),Wc=Ke("rtc");function Vc(t,e=ne){Qn("ec",t,e)}function yn(t,e){const n=be;if(n===null)return t;const r=tr(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,f=X]=e[i];o&&(N(o)&&(o={mounted:o,updated:o}),o.deep&&bt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:f}))}return t}function ut(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Ht(),Ee(c,n,8,[t.el,a,t,e]),$t())}}const go="components";function mo(t,e){return Kc(go,t,!0,e)||t}const zc=Symbol();function Kc(t,e,n=!0,r=!1){const s=be||ne;if(s){const i=s.type;if(t===go){const a=Tl(i,!1);if(a&&(a===e||a===Ue(e)||a===Kn(Ue(e))))return i}const o=Hs(s[t]||i[t],e)||Hs(s.appContext[t],e);return!o&&r?i:o}}function Hs(t,e){return t&&(t[e]||t[Ue(e)]||t[Kn(Ue(e))])}function qc(t,e,n,r){let s;const i=n&&n[r];if(P(t)||se(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(ee(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const f=o[a];s[a]=e(t[f],f,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const xr=t=>t?Ao(t)?tr(t)||t.proxy:xr(t.parent):null,qt=ce(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>xr(t.parent),$root:t=>xr(t.root),$emit:t=>t.emit,$options:t=>ds(t),$forceUpdate:t=>t.f||(t.f=()=>fs(t.update)),$nextTick:t=>t.n||(t.n=mc.bind(t.proxy)),$watch:t=>Pc.bind(t)}),gr=(t,e)=>t!==X&&!t.__isScriptSetup&&U(t,e),Gc={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let f;if(e[0]!=="$"){const T=o[e];if(T!==void 0)switch(T){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(gr(r,e))return o[e]=1,r[e];if(s!==X&&U(s,e))return o[e]=2,s[e];if((f=t.propsOptions[0])&&U(f,e))return o[e]=3,i[e];if(n!==X&&U(n,e))return o[e]=4,n[e];Lr&&(o[e]=0)}}const d=qt[e];let m,b;if(d)return e==="$attrs"&&he(t,"get",e),d(t);if((m=a.__cssModules)&&(m=m[e]))return m;if(n!==X&&U(n,e))return o[e]=4,n[e];if(b=c.config.globalProperties,U(b,e))return b[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return gr(s,e)?(s[e]=n,!0):r!==X&&U(r,e)?(r[e]=n,!0):U(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==X&&U(t,o)||gr(e,o)||(a=i[0])&&U(a,o)||U(r,o)||U(qt,o)||U(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:U(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Lr=!0;function Jc(t){const e=ds(t),n=t.proxy,r=t.ctx;Lr=!1,e.beforeCreate&&$s(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:f,created:d,beforeMount:m,mounted:b,beforeUpdate:T,updated:D,activated:C,deactivated:$,beforeDestroy:F,beforeUnmount:ie,destroyed:O,unmounted:K,render:te,renderTracked:ye,renderTriggered:pe,errorCaptured:M,serverPrefetch:Y,expose:V,inheritAttrs:ue,components:x,directives:Q,filters:j}=e;if(f&&Yc(f,r,null,t.appContext.config.unwrapInjectedRef),o)for(const H in o){const q=o[H];N(q)&&(r[H]=q.bind(n))}if(s){const H=s.call(n,n);ee(H)&&(t.data=as(H))}if(Lr=!0,i)for(const H in i){const q=i[H],ct=N(q)?q.bind(n,n):N(q.get)?q.get.bind(n,n):Oe,dn=!N(q)&&N(q.set)?q.set.bind(n):Oe,lt=Ro({get:ct,set:dn});Object.defineProperty(r,H,{enumerable:!0,configurable:!0,get:()=>lt.value,set:ke=>lt.value=ke})}if(a)for(const H in a)_o(a[H],r,n,H);if(c){const H=N(c)?c.call(n):c;Reflect.ownKeys(H).forEach(q=>{kc(q,H[q])})}d&&$s(d,t,"c");function W(H,q){P(q)?q.forEach(ct=>H(ct.bind(n))):q&&H(q.bind(n))}if(W(Fc,m),W(fo,b),W(Bc,T),W(Hc,D),W(xc,C),W(Lc,$),W(Vc,M),W(Wc,ye),W(jc,pe),W(ho,ie),W(po,K),W($c,Y),P(V))if(V.length){const H=t.exposed||(t.exposed={});V.forEach(q=>{Object.defineProperty(H,q,{get:()=>n[q],set:ct=>n[q]=ct})})}else t.exposed||(t.exposed={});te&&t.render===Oe&&(t.render=te),ue!=null&&(t.inheritAttrs=ue),x&&(t.components=x),Q&&(t.directives=Q)}function Yc(t,e,n=Oe,r=!1){P(t)&&(t=Ur(t));for(const s in t){const i=t[s];let o;ee(i)?"default"in i?o=Cn(i.from||s,i.default,!0):o=Cn(i.from||s):o=Cn(i),ae(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function $s(t,e,n){Ee(P(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function _o(t,e,n,r){const s=r.includes(".")?oo(n,r):()=>n[r];if(se(t)){const i=e[t];N(i)&&hr(s,i)}else if(N(t))hr(s,t.bind(n));else if(ee(t))if(P(t))t.forEach(i=>_o(i,e,n,r));else{const i=N(t.handler)?t.handler.bind(n):e[t.handler];N(i)&&hr(s,i,t)}}function ds(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(f=>xn(c,f,o,!0)),xn(c,e,o)),ee(e)&&i.set(e,c),c}function xn(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&xn(t,i,n,!0),s&&s.forEach(o=>xn(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Xc[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Xc={data:js,props:ht,emits:ht,methods:ht,computed:ht,beforeCreate:fe,created:fe,beforeMount:fe,mounted:fe,beforeUpdate:fe,updated:fe,beforeDestroy:fe,beforeUnmount:fe,destroyed:fe,unmounted:fe,activated:fe,deactivated:fe,errorCaptured:fe,serverPrefetch:fe,components:ht,directives:ht,watch:Zc,provide:js,inject:Qc};function js(t,e){return e?t?function(){return ce(N(t)?t.call(this,this):t,N(e)?e.call(this,this):e)}:e:t}function Qc(t,e){return ht(Ur(t),Ur(e))}function Ur(t){if(P(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function fe(t,e){return t?[...new Set([].concat(t,e))]:e}function ht(t,e){return t?ce(ce(Object.create(null),t),e):e}function Zc(t,e){if(!t)return e;if(!e)return t;const n=ce(Object.create(null),t);for(const r in e)n[r]=fe(t[r],e[r]);return n}function el(t,e,n,r=!1){const s={},i={};Dn(i,er,1),t.propsDefaults=Object.create(null),bo(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:lc(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function tl(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=B(s),[c]=t.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let m=0;m<d.length;m++){let b=d[m];if(Jn(t.emitsOptions,b))continue;const T=e[b];if(c)if(U(i,b))T!==i[b]&&(i[b]=T,f=!0);else{const D=Ue(b);s[D]=Fr(c,a,D,T,t,!1)}else T!==i[b]&&(i[b]=T,f=!0)}}}else{bo(t,e,s,i)&&(f=!0);let d;for(const m in a)(!e||!U(e,m)&&((d=Bt(m))===m||!U(e,d)))&&(c?n&&(n[m]!==void 0||n[d]!==void 0)&&(s[m]=Fr(c,a,m,void 0,t,!0)):delete s[m]);if(i!==a)for(const m in i)(!e||!U(e,m))&&(delete i[m],f=!0)}f&&We(t,"set","$attrs")}function bo(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(En(c))continue;const f=e[c];let d;s&&U(s,d=Ue(c))?!i||!i.includes(d)?n[d]=f:(a||(a={}))[d]=f:Jn(t.emitsOptions,c)||(!(c in r)||f!==r[c])&&(r[c]=f,o=!0)}if(i){const c=B(n),f=a||X;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Fr(s,c,m,f[m],t,!U(f,m))}}return o}function Fr(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=U(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&N(c)){const{propsDefaults:f}=s;n in f?r=f[n]:(Ut(s),r=f[n]=c.call(null,e),yt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Bt(n))&&(r=!0))}return r}function vo(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!N(t)){const d=m=>{c=!0;const[b,T]=vo(m,e,!0);ce(o,b),T&&a.push(...T)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return ee(t)&&r.set(t,Rt),Rt;if(P(i))for(let d=0;d<i.length;d++){const m=Ue(i[d]);Ws(m)&&(o[m]=X)}else if(i)for(const d in i){const m=Ue(d);if(Ws(m)){const b=i[d],T=o[m]=P(b)||N(b)?{type:b}:Object.assign({},b);if(T){const D=Ks(Boolean,T.type),C=Ks(String,T.type);T[0]=D>-1,T[1]=C<0||D<C,(D>-1||U(T,"default"))&&a.push(m)}}}const f=[o,a];return ee(t)&&r.set(t,f),f}function Ws(t){return t[0]!=="$"}function Vs(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function zs(t,e){return Vs(t)===Vs(e)}function Ks(t,e){return P(e)?e.findIndex(n=>zs(n,t)):N(e)&&zs(e,t)?0:-1}const yo=t=>t[0]==="_"||t==="$stable",hs=t=>P(t)?t.map(Ne):[Ne(t)],nl=(t,e,n)=>{if(e._n)return e;const r=Kt((...s)=>hs(e(...s)),n);return r._c=!1,r},Io=(t,e,n)=>{const r=t._ctx;for(const s in t){if(yo(s))continue;const i=t[s];if(N(i))e[s]=nl(s,i,r);else if(i!=null){const o=hs(i);e[s]=()=>o}}},wo=(t,e)=>{const n=hs(e);t.slots.default=()=>n},rl=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=B(e),Dn(e,"_",n)):Io(e,t.slots={})}else t.slots={},e&&wo(t,e);Dn(t.slots,er,1)},sl=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=X;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ce(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Io(e,s)),o=e}else e&&(wo(t,e),o={default:1});if(i)for(const a in s)!yo(a)&&!(a in o)&&delete s[a]};function Eo(){return{app:null,config:{isNativeTag:Aa,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let il=0;function ol(t,e){return function(r,s=null){N(r)||(r=Object.assign({},r)),s!=null&&!ee(s)&&(s=null);const i=Eo(),o=new Set;let a=!1;const c=i.app={_uid:il++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Ol,get config(){return i.config},set config(f){},use(f,...d){return o.has(f)||(f&&N(f.install)?(o.add(f),f.install(c,...d)):N(f)&&(o.add(f),f(c,...d))),c},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),c},component(f,d){return d?(i.components[f]=d,c):i.components[f]},directive(f,d){return d?(i.directives[f]=d,c):i.directives[f]},mount(f,d,m){if(!a){const b=ve(r,s);return b.appContext=i,d&&e?e(b,f):t(b,f,m),a=!0,c._container=f,f.__vue_app__=c,tr(b.component)||b.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(f,d){return i.provides[f]=d,c}};return c}}function Br(t,e,n,r,s=!1){if(P(t)){t.forEach((b,T)=>Br(b,e&&(P(e)?e[T]:e),n,r,s));return}if(Sn(r)&&!s)return;const i=r.shapeFlag&4?tr(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,f=e&&e.r,d=a.refs===X?a.refs={}:a.refs,m=a.setupState;if(f!=null&&f!==c&&(se(f)?(d[f]=null,U(m,f)&&(m[f]=null)):ae(f)&&(f.value=null)),N(c))nt(c,a,12,[o,d]);else{const b=se(c),T=ae(c);if(b||T){const D=()=>{if(t.f){const C=b?U(m,c)?m[c]:d[c]:c.value;s?P(C)&&Zr(C,i):P(C)?C.includes(i)||C.push(i):b?(d[c]=[i],U(m,c)&&(m[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else b?(d[c]=o,U(m,c)&&(m[c]=o)):T&&(c.value=o,t.k&&(d[t.k]=o))};o?(D.id=-1,de(D,n)):D()}}}const de=Rc;function al(t){return cl(t)}function cl(t,e){const n=Na();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:f,setElementText:d,parentNode:m,nextSibling:b,setScopeId:T=Oe,insertStaticContent:D}=t,C=(l,u,h,g=null,p=null,y=null,w=!1,v=null,I=!!u.dynamicChildren)=>{if(l===u)return;l&&!mt(l,u)&&(g=hn(l),ke(l,p,y,!0),l=null),u.patchFlag===-2&&(I=!1,u.dynamicChildren=null);const{type:_,ref:S,shapeFlag:E}=u;switch(_){case Zn:$(l,u,h,g);break;case Re:F(l,u,h,g);break;case mr:l==null&&ie(u,h,g,w);break;case _e:x(l,u,h,g,p,y,w,v,I);break;default:E&1?te(l,u,h,g,p,y,w,v,I):E&6?Q(l,u,h,g,p,y,w,v,I):(E&64||E&128)&&_.process(l,u,h,g,p,y,w,v,I,Ct)}S!=null&&p&&Br(S,l&&l.ref,y,u||l,!u)},$=(l,u,h,g)=>{if(l==null)r(u.el=a(u.children),h,g);else{const p=u.el=l.el;u.children!==l.children&&f(p,u.children)}},F=(l,u,h,g)=>{l==null?r(u.el=c(u.children||""),h,g):u.el=l.el},ie=(l,u,h,g)=>{[l.el,l.anchor]=D(l.children,u,h,g,l.el,l.anchor)},O=({el:l,anchor:u},h,g)=>{let p;for(;l&&l!==u;)p=b(l),r(l,h,g),l=p;r(u,h,g)},K=({el:l,anchor:u})=>{let h;for(;l&&l!==u;)h=b(l),s(l),l=h;s(u)},te=(l,u,h,g,p,y,w,v,I)=>{w=w||u.type==="svg",l==null?ye(u,h,g,p,y,w,v,I):Y(l,u,p,y,w,v,I)},ye=(l,u,h,g,p,y,w,v)=>{let I,_;const{type:S,props:E,shapeFlag:A,transition:k,dirs:L}=l;if(I=l.el=o(l.type,y,E&&E.is,E),A&8?d(I,l.children):A&16&&M(l.children,I,null,g,p,y&&S!=="foreignObject",w,v),L&&ut(l,null,g,"created"),pe(I,l,l.scopeId,w,g),E){for(const z in E)z!=="value"&&!En(z)&&i(I,z,null,E[z],y,l.children,g,p,Fe);"value"in E&&i(I,"value",null,E.value),(_=E.onVnodeBeforeMount)&&De(_,g,l)}L&&ut(l,null,g,"beforeMount");const G=(!p||p&&!p.pendingBranch)&&k&&!k.persisted;G&&k.beforeEnter(I),r(I,u,h),((_=E&&E.onVnodeMounted)||G||L)&&de(()=>{_&&De(_,g,l),G&&k.enter(I),L&&ut(l,null,g,"mounted")},p)},pe=(l,u,h,g,p)=>{if(h&&T(l,h),g)for(let y=0;y<g.length;y++)T(l,g[y]);if(p){let y=p.subTree;if(u===y){const w=p.vnode;pe(l,w,w.scopeId,w.slotScopeIds,p.parent)}}},M=(l,u,h,g,p,y,w,v,I=0)=>{for(let _=I;_<l.length;_++){const S=l[_]=v?Ye(l[_]):Ne(l[_]);C(null,S,u,h,g,p,y,w,v)}},Y=(l,u,h,g,p,y,w)=>{const v=u.el=l.el;let{patchFlag:I,dynamicChildren:_,dirs:S}=u;I|=l.patchFlag&16;const E=l.props||X,A=u.props||X;let k;h&&ft(h,!1),(k=A.onVnodeBeforeUpdate)&&De(k,h,u,l),S&&ut(u,l,h,"beforeUpdate"),h&&ft(h,!0);const L=p&&u.type!=="foreignObject";if(_?V(l.dynamicChildren,_,v,h,g,L,y):w||q(l,u,v,null,h,g,L,y,!1),I>0){if(I&16)ue(v,u,E,A,h,g,p);else if(I&2&&E.class!==A.class&&i(v,"class",null,A.class,p),I&4&&i(v,"style",E.style,A.style,p),I&8){const G=u.dynamicProps;for(let z=0;z<G.length;z++){const re=G[z],Te=E[re],St=A[re];(St!==Te||re==="value")&&i(v,re,Te,St,p,l.children,h,g,Fe)}}I&1&&l.children!==u.children&&d(v,u.children)}else!w&&_==null&&ue(v,u,E,A,h,g,p);((k=A.onVnodeUpdated)||S)&&de(()=>{k&&De(k,h,u,l),S&&ut(u,l,h,"updated")},g)},V=(l,u,h,g,p,y,w)=>{for(let v=0;v<u.length;v++){const I=l[v],_=u[v],S=I.el&&(I.type===_e||!mt(I,_)||I.shapeFlag&70)?m(I.el):h;C(I,_,S,null,g,p,y,w,!0)}},ue=(l,u,h,g,p,y,w)=>{if(h!==g){if(h!==X)for(const v in h)!En(v)&&!(v in g)&&i(l,v,h[v],null,w,u.children,p,y,Fe);for(const v in g){if(En(v))continue;const I=g[v],_=h[v];I!==_&&v!=="value"&&i(l,v,_,I,w,u.children,p,y,Fe)}"value"in g&&i(l,"value",h.value,g.value)}},x=(l,u,h,g,p,y,w,v,I)=>{const _=u.el=l?l.el:a(""),S=u.anchor=l?l.anchor:a("");let{patchFlag:E,dynamicChildren:A,slotScopeIds:k}=u;k&&(v=v?v.concat(k):k),l==null?(r(_,h,g),r(S,h,g),M(u.children,h,S,p,y,w,v,I)):E>0&&E&64&&A&&l.dynamicChildren?(V(l.dynamicChildren,A,h,p,y,w,v),(u.key!=null||p&&u===p.subTree)&&To(l,u,!0)):q(l,u,h,S,p,y,w,v,I)},Q=(l,u,h,g,p,y,w,v,I)=>{u.slotScopeIds=v,l==null?u.shapeFlag&512?p.ctx.activate(u,h,g,w,I):j(u,h,g,p,y,w,I):ge(l,u,I)},j=(l,u,h,g,p,y,w)=>{const v=l.component=bl(l,g,p);if(Xn(l)&&(v.ctx.renderer=Ct),yl(v),v.asyncDep){if(p&&p.registerDep(v,W),!l.el){const I=v.subTree=ve(Re);F(null,I,u,h)}return}W(v,l,u,h,p,y,w)},ge=(l,u,h)=>{const g=u.component=l.component;if(Sc(l,u,h))if(g.asyncDep&&!g.asyncResolved){H(g,u,h);return}else g.next=u,bc(g.update),g.update();else u.el=l.el,g.vnode=u},W=(l,u,h,g,p,y,w)=>{const v=()=>{if(l.isMounted){let{next:S,bu:E,u:A,parent:k,vnode:L}=l,G=S,z;ft(l,!1),S?(S.el=L.el,H(l,S,w)):S=L,E&&Tn(E),(z=S.props&&S.props.onVnodeBeforeUpdate)&&De(z,k,S,L),ft(l,!0);const re=dr(l),Te=l.subTree;l.subTree=re,C(Te,re,m(Te.el),hn(Te),l,p,y),S.el=re.el,G===null&&Ac(l,re.el),A&&de(A,p),(z=S.props&&S.props.onVnodeUpdated)&&de(()=>De(z,k,S,L),p)}else{let S;const{el:E,props:A}=u,{bm:k,m:L,parent:G}=l,z=Sn(u);if(ft(l,!1),k&&Tn(k),!z&&(S=A&&A.onVnodeBeforeMount)&&De(S,G,u),ft(l,!0),E&&lr){const re=()=>{l.subTree=dr(l),lr(E,l.subTree,l,p,null)};z?u.type.__asyncLoader().then(()=>!l.isUnmounted&&re()):re()}else{const re=l.subTree=dr(l);C(null,re,h,g,l,p,y),u.el=re.el}if(L&&de(L,p),!z&&(S=A&&A.onVnodeMounted)){const re=u;de(()=>De(S,G,re),p)}(u.shapeFlag&256||G&&Sn(G.vnode)&&G.vnode.shapeFlag&256)&&l.a&&de(l.a,p),l.isMounted=!0,u=h=g=null}},I=l.effect=new rs(v,()=>fs(_),l.scope),_=l.update=()=>I.run();_.id=l.uid,ft(l,!0),_()},H=(l,u,h)=>{u.component=l;const g=l.vnode.props;l.vnode=u,l.next=null,tl(l,u.props,g,h),sl(l,u.children,h),Ht(),Us(),$t()},q=(l,u,h,g,p,y,w,v,I=!1)=>{const _=l&&l.children,S=l?l.shapeFlag:0,E=u.children,{patchFlag:A,shapeFlag:k}=u;if(A>0){if(A&128){dn(_,E,h,g,p,y,w,v,I);return}else if(A&256){ct(_,E,h,g,p,y,w,v,I);return}}k&8?(S&16&&Fe(_,p,y),E!==_&&d(h,E)):S&16?k&16?dn(_,E,h,g,p,y,w,v,I):Fe(_,p,y,!0):(S&8&&d(h,""),k&16&&M(E,h,g,p,y,w,v,I))},ct=(l,u,h,g,p,y,w,v,I)=>{l=l||Rt,u=u||Rt;const _=l.length,S=u.length,E=Math.min(_,S);let A;for(A=0;A<E;A++){const k=u[A]=I?Ye(u[A]):Ne(u[A]);C(l[A],k,h,null,p,y,w,v,I)}_>S?Fe(l,p,y,!0,!1,E):M(u,h,g,p,y,w,v,I,E)},dn=(l,u,h,g,p,y,w,v,I)=>{let _=0;const S=u.length;let E=l.length-1,A=S-1;for(;_<=E&&_<=A;){const k=l[_],L=u[_]=I?Ye(u[_]):Ne(u[_]);if(mt(k,L))C(k,L,h,null,p,y,w,v,I);else break;_++}for(;_<=E&&_<=A;){const k=l[E],L=u[A]=I?Ye(u[A]):Ne(u[A]);if(mt(k,L))C(k,L,h,null,p,y,w,v,I);else break;E--,A--}if(_>E){if(_<=A){const k=A+1,L=k<S?u[k].el:g;for(;_<=A;)C(null,u[_]=I?Ye(u[_]):Ne(u[_]),h,L,p,y,w,v,I),_++}}else if(_>A)for(;_<=E;)ke(l[_],p,y,!0),_++;else{const k=_,L=_,G=new Map;for(_=L;_<=A;_++){const me=u[_]=I?Ye(u[_]):Ne(u[_]);me.key!=null&&G.set(me.key,_)}let z,re=0;const Te=A-L+1;let St=!1,Ss=0;const Wt=new Array(Te);for(_=0;_<Te;_++)Wt[_]=0;for(_=k;_<=E;_++){const me=l[_];if(re>=Te){ke(me,p,y,!0);continue}let Pe;if(me.key!=null)Pe=G.get(me.key);else for(z=L;z<=A;z++)if(Wt[z-L]===0&&mt(me,u[z])){Pe=z;break}Pe===void 0?ke(me,p,y,!0):(Wt[Pe-L]=_+1,Pe>=Ss?Ss=Pe:St=!0,C(me,u[Pe],h,null,p,y,w,v,I),re++)}const As=St?ll(Wt):Rt;for(z=As.length-1,_=Te-1;_>=0;_--){const me=L+_,Pe=u[me],Os=me+1<S?u[me+1].el:g;Wt[_]===0?C(null,Pe,h,Os,p,y,w,v,I):St&&(z<0||_!==As[z]?lt(Pe,h,Os,2):z--)}}},lt=(l,u,h,g,p=null)=>{const{el:y,type:w,transition:v,children:I,shapeFlag:_}=l;if(_&6){lt(l.component.subTree,u,h,g);return}if(_&128){l.suspense.move(u,h,g);return}if(_&64){w.move(l,u,h,Ct);return}if(w===_e){r(y,u,h);for(let E=0;E<I.length;E++)lt(I[E],u,h,g);r(l.anchor,u,h);return}if(w===mr){O(l,u,h);return}if(g!==2&&_&1&&v)if(g===0)v.beforeEnter(y),r(y,u,h),de(()=>v.enter(y),p);else{const{leave:E,delayLeave:A,afterLeave:k}=v,L=()=>r(y,u,h),G=()=>{E(y,()=>{L(),k&&k()})};A?A(y,L,G):G()}else r(y,u,h)},ke=(l,u,h,g=!1,p=!1)=>{const{type:y,props:w,ref:v,children:I,dynamicChildren:_,shapeFlag:S,patchFlag:E,dirs:A}=l;if(v!=null&&Br(v,null,h,l,!0),S&256){u.ctx.deactivate(l);return}const k=S&1&&A,L=!Sn(l);let G;if(L&&(G=w&&w.onVnodeBeforeUnmount)&&De(G,u,l),S&6)ya(l.component,h,g);else{if(S&128){l.suspense.unmount(h,g);return}k&&ut(l,null,u,"beforeUnmount"),S&64?l.type.remove(l,u,h,p,Ct,g):_&&(y!==_e||E>0&&E&64)?Fe(_,u,h,!1,!0):(y===_e&&E&384||!p&&S&16)&&Fe(I,u,h),g&&Ts(l)}(L&&(G=w&&w.onVnodeUnmounted)||k)&&de(()=>{G&&De(G,u,l),k&&ut(l,null,u,"unmounted")},h)},Ts=l=>{const{type:u,el:h,anchor:g,transition:p}=l;if(u===_e){va(h,g);return}if(u===mr){K(l);return}const y=()=>{s(h),p&&!p.persisted&&p.afterLeave&&p.afterLeave()};if(l.shapeFlag&1&&p&&!p.persisted){const{leave:w,delayLeave:v}=p,I=()=>w(h,y);v?v(l.el,y,I):I()}else y()},va=(l,u)=>{let h;for(;l!==u;)h=b(l),s(l),l=h;s(u)},ya=(l,u,h)=>{const{bum:g,scope:p,update:y,subTree:w,um:v}=l;g&&Tn(g),p.stop(),y&&(y.active=!1,ke(w,l,u,h)),v&&de(v,u),de(()=>{l.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Fe=(l,u,h,g=!1,p=!1,y=0)=>{for(let w=y;w<l.length;w++)ke(l[w],u,h,g,p)},hn=l=>l.shapeFlag&6?hn(l.component.subTree):l.shapeFlag&128?l.suspense.next():b(l.anchor||l.el),Cs=(l,u,h)=>{l==null?u._vnode&&ke(u._vnode,null,null,!0):C(u._vnode||null,l,u,null,null,null,h),Us(),no(),u._vnode=l},Ct={p:C,um:ke,m:lt,r:Ts,mt:j,mc:M,pc:q,pbc:V,n:hn,o:t};let cr,lr;return e&&([cr,lr]=e(Ct)),{render:Cs,hydrate:cr,createApp:ol(Cs,cr)}}function ft({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function To(t,e,n=!1){const r=t.children,s=e.children;if(P(r)&&P(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Ye(s[i]),a.el=o.el),n||To(o,a)),a.type===Zn&&(a.el=o.el)}}function ll(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const f=t[r];if(f!==0){if(s=n[n.length-1],t[s]<f){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<f?i=a+1:o=a;f<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const ul=t=>t.__isTeleport,_e=Symbol(void 0),Zn=Symbol(void 0),Re=Symbol(void 0),mr=Symbol(void 0),Gt=[];let Ae=null;function we(t=!1){Gt.push(Ae=t?null:[])}function fl(){Gt.pop(),Ae=Gt[Gt.length-1]||null}let en=1;function qs(t){en+=t}function Co(t){return t.dynamicChildren=en>0?Ae||Rt:null,fl(),en>0&&Ae&&Ae.push(t),t}function Be(t,e,n,r,s,i){return Co(Z(t,e,n,r,s,i,!0))}function Hr(t,e,n,r,s){return Co(ve(t,e,n,r,s,!0))}function dl(t){return t?t.__v_isVNode===!0:!1}function mt(t,e){return t.type===e.type&&t.key===e.key}const er="__vInternal",So=({key:t})=>t??null,An=({ref:t,ref_key:e,ref_for:n})=>t!=null?se(t)||ae(t)||N(t)?{i:be,r:t,k:e,f:!!n}:t:null;function Z(t,e=null,n=null,r=0,s=null,i=t===_e?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&So(e),ref:e&&An(e),scopeId:Yn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:be};return a?(ps(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=se(n)?8:16),en>0&&!o&&Ae&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ae.push(c),c}const ve=hl;function hl(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===zc)&&(t=Re),dl(t)){const a=ot(t,e,!0);return n&&ps(a,n),en>0&&!i&&Ae&&(a.shapeFlag&6?Ae[Ae.indexOf(t)]=a:Ae.push(a)),a.patchFlag|=-2,a}if(Cl(t)&&(t=t.__vccOpts),e){e=pl(e);let{class:a,style:c}=e;a&&!se(a)&&(e.class=Xr(a)),ee(c)&&(Gi(c)&&!P(c)&&(c=ce({},c)),e.style=jn(c))}const o=se(t)?1:Oc(t)?128:ul(t)?64:ee(t)?4:N(t)?2:0;return Z(t,e,n,r,s,o,i,!0)}function pl(t){return t?Gi(t)||er in t?ce({},t):t:null}function ot(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?gl(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&So(a),ref:e&&e.ref?n&&s?P(s)?s.concat(An(e)):[s,An(e)]:An(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==_e?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ot(t.ssContent),ssFallback:t.ssFallback&&ot(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function $r(t=" ",e=0){return ve(Zn,null,t,e)}function _r(t="",e=!1){return e?(we(),Hr(Re,null,t)):ve(Re,null,t)}function Ne(t){return t==null||typeof t=="boolean"?ve(Re):P(t)?ve(_e,null,t.slice()):typeof t=="object"?Ye(t):ve(Zn,null,String(t))}function Ye(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ot(t)}function ps(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(P(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),ps(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(er in e)?e._ctx=be:s===3&&be&&(be.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else N(e)?(e={default:e,_ctx:be},n=32):(e=String(e),r&64?(n=16,e=[$r(e)]):n=8);t.children=e,t.shapeFlag|=n}function gl(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Xr([e.class,r.class]));else if(s==="style")e.style=jn([e.style,r.style]);else if(Wn(s)){const i=e[s],o=r[s];o&&i!==o&&!(P(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function De(t,e,n,r=null){Ee(t,e,7,[n,r])}const ml=Eo();let _l=0;function bl(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||ml,i={uid:_l++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ma(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vo(r,s),emitsOptions:so(r,s),emit:null,emitted:null,propsDefaults:X,inheritAttrs:r.inheritAttrs,ctx:X,data:X,props:X,attrs:X,slots:X,refs:X,setupState:X,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Ic.bind(null,i),t.ce&&t.ce(i),i}let ne=null;const vl=()=>ne||be,Ut=t=>{ne=t,t.scope.on()},yt=()=>{ne&&ne.scope.off(),ne=null};function Ao(t){return t.vnode.shapeFlag&4}let tn=!1;function yl(t,e=!1){tn=e;const{props:n,children:r}=t.vnode,s=Ao(t);el(t,n,s,e),rl(t,r);const i=s?Il(t,e):void 0;return tn=!1,i}function Il(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ji(new Proxy(t.ctx,Gc));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?El(t):null;Ut(t),Ht();const i=nt(r,t,0,[t.props,s]);if($t(),yt(),Mi(i)){if(i.then(yt,yt),e)return i.then(o=>{Gs(t,o,e)}).catch(o=>{Gn(o,t,0)});t.asyncDep=i}else Gs(t,i,e)}else Oo(t,e)}function Gs(t,e,n){N(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ee(e)&&(t.setupState=Qi(e)),Oo(t,n)}let Js;function Oo(t,e,n){const r=t.type;if(!t.render){if(!e&&Js&&!r.render){const s=r.template||ds(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,f=ce(ce({isCustomElement:i,delimiters:a},o),c);r.render=Js(s,f)}}t.render=r.render||Oe}Ut(t),Ht(),Jc(t),$t(),yt()}function wl(t){return new Proxy(t.attrs,{get(e,n){return he(t,"get","$attrs"),e[n]}})}function El(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=wl(t))},slots:t.slots,emit:t.emit,expose:e}}function tr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Qi(Ji(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in qt)return qt[n](t)},has(e,n){return n in e||n in qt}}))}function Tl(t,e=!0){return N(t)?t.displayName||t.name:t.name||e&&t.__name}function Cl(t){return N(t)&&"__vccOpts"in t}const Ro=(t,e)=>pc(t,e,tn),Sl=Symbol(""),Al=()=>Cn(Sl),Ol="3.2.47",Rl="http://www.w3.org/2000/svg",_t=typeof document<"u"?document:null,Ys=_t&&_t.createElement("template"),kl={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?_t.createElementNS(Rl,t):_t.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>_t.createTextNode(t),createComment:t=>_t.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>_t.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ys.innerHTML=r?`<svg>${t}</svg>`:t;const a=Ys.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Pl(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Dl(t,e,n){const r=t.style,s=se(n);if(n&&!s){if(e&&!se(e))for(const i in e)n[i]==null&&jr(r,i,"");for(const i in n)jr(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Xs=/\s*!important$/;function jr(t,e,n){if(P(n))n.forEach(r=>jr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Nl(t,e);Xs.test(n)?t.setProperty(Bt(r),n.replace(Xs,""),"important"):t[r]=n}}const Qs=["Webkit","Moz","ms"],br={};function Nl(t,e){const n=br[e];if(n)return n;let r=Ue(e);if(r!=="filter"&&r in t)return br[e]=r;r=Kn(r);for(let s=0;s<Qs.length;s++){const i=Qs[s]+r;if(i in t)return br[e]=i}return e}const Zs="http://www.w3.org/1999/xlink";function Ml(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Zs,e.slice(6,e.length)):t.setAttributeNS(Zs,e,n);else{const i=Sa(e);n==null||i&&!Pi(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function xl(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Pi(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function At(t,e,n,r){t.addEventListener(e,n,r)}function Ll(t,e,n,r){t.removeEventListener(e,n,r)}function Ul(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Fl(e);if(r){const f=i[e]=$l(r,s);At(t,a,f,c)}else o&&(Ll(t,a,o,c),i[e]=void 0)}}const ei=/(?:Once|Passive|Capture)$/;function Fl(t){let e;if(ei.test(t)){e={};let r;for(;r=t.match(ei);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Bt(t.slice(2)),e]}let vr=0;const Bl=Promise.resolve(),Hl=()=>vr||(Bl.then(()=>vr=0),vr=Date.now());function $l(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ee(jl(r,n.value),e,5,[r])};return n.value=t,n.attached=Hl(),n}function jl(t,e){if(P(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const ti=/^on[a-z]/,Wl=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?Pl(t,r,s):e==="style"?Dl(t,n,r):Wn(e)?Qr(e)||Ul(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Vl(t,e,r,s))?xl(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Ml(t,e,r,s))};function Vl(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&ti.test(e)&&N(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ti.test(e)&&se(n)?!1:e in t}const zl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Mc.props;const ni=t=>{const e=t.props["onUpdate:modelValue"]||!1;return P(e)?n=>Tn(e,n):e};function Kl(t){t.target.composing=!0}function ri(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const In={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=ni(s);const i=r||s.props&&s.props.type==="number";At(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ar(a)),t._assign(a)}),n&&At(t,"change",()=>{t.value=t.value.trim()}),e||(At(t,"compositionstart",Kl),At(t,"compositionend",ri),At(t,"change",ri))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=ni(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Ar(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},ql=ce({patchProp:Wl},kl);let si;function Gl(){return si||(si=al(ql))}const Jl=(...t)=>{const e=Gl().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Yl(r);if(!s)return;const i=e._component;!N(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Yl(t){return se(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Xl=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Po={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,f=c?t[s+2]:0,d=i>>2,m=(i&3)<<4|a>>4;let b=(a&15)<<2|f>>6,T=f&63;c||(T=64,o||(b=64)),r.push(n[d],n[m],n[b],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ko(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Xl(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const f=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||f==null||m==null)throw new Ql;const b=i<<2|a>>4;if(r.push(b),f!==64){const T=a<<4&240|f>>2;if(r.push(T),m!==64){const D=f<<6&192|m;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ql extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zl=function(t){const e=ko(t);return Po.encodeByteArray(e,!0)},Do=function(t){return Zl(t).replace(/\./g,"")},No=function(t){try{return Po.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu=()=>eu().__FIREBASE_DEFAULTS__,nu=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ru=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&No(t[1]);return e&&JSON.parse(e)},gs=()=>{try{return tu()||nu()||ru()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},su=t=>{var e,n;return(n=(e=gs())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},iu=()=>{var t;return(t=gs())===null||t===void 0?void 0:t.config},Mo=t=>{var e;return(e=gs())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function au(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(le())}function cu(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function lu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uu(){const t=le();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function fu(){try{return typeof indexedDB=="object"}catch{return!1}}function du(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu="FirebaseError";class at extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=hu,Object.setPrototypeOf(this,at.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,an.prototype.create)}}class an{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?pu(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new at(s,a,r)}}function pu(t,e){return t.replace(gu,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const gu=/\{\$([^}]+)}/g;function mu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ln(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ii(i)&&ii(o)){if(!Ln(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ii(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function _u(t,e){const n=new bu(t,e);return n.subscribe.bind(n)}class bu{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");vu(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=yr),s.error===void 0&&(s.error=yr),s.complete===void 0&&(s.complete=yr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vu(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function yr(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(t){return t&&t._delegate?t._delegate:t}class Ft{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ou;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wu(e))try{this.getOrInitializeService({instanceIdentifier:pt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=pt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pt){return this.instances.has(e)}getOptions(e=pt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Iu(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=pt){return this.component?this.component.multipleInstances?e:pt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Iu(t){return t===pt?void 0:t}function wu(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new yu(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(J||(J={}));const Tu={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},Cu=J.INFO,Su={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},Au=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Su[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xo{constructor(e){this.name=e,this._logLevel=Cu,this._logHandler=Au,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Tu[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const Ou=(t,e)=>e.some(n=>t instanceof n);let oi,ai;function Ru(){return oi||(oi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ku(){return ai||(ai=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lo=new WeakMap,Wr=new WeakMap,Uo=new WeakMap,Ir=new WeakMap,ms=new WeakMap;function Pu(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(rt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Lo.set(n,t)}).catch(()=>{}),ms.set(e,t),e}function Du(t){if(Wr.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Wr.set(t,e)}let Vr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Wr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Uo.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return rt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Nu(t){Vr=t(Vr)}function Mu(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(wr(this),e,...n);return Uo.set(r,e.sort?e.sort():[e]),rt(r)}:ku().includes(t)?function(...e){return t.apply(wr(this),e),rt(Lo.get(this))}:function(...e){return rt(t.apply(wr(this),e))}}function xu(t){return typeof t=="function"?Mu(t):(t instanceof IDBTransaction&&Du(t),Ou(t,Ru())?new Proxy(t,Vr):t)}function rt(t){if(t instanceof IDBRequest)return Pu(t);if(Ir.has(t))return Ir.get(t);const e=xu(t);return e!==t&&(Ir.set(t,e),ms.set(e,t)),e}const wr=t=>ms.get(t);function Lu(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=rt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(rt(o.result),c.oldVersion,c.newVersion,rt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Uu=["get","getKey","getAll","getAllKeys","count"],Fu=["put","add","delete","clear"],Er=new Map;function ci(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Er.get(e))return Er.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Fu.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Uu.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let f=c.store;return r&&(f=f.index(a.shift())),(await Promise.all([f[n](...a),s&&c.done]))[0]};return Er.set(e,i),i}Nu(t=>({...t,get:(e,n,r)=>ci(e,n)||t.get(e,n,r),has:(e,n)=>!!ci(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Hu(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Hu(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zr="@firebase/app",li="0.9.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt=new xo("@firebase/app"),$u="@firebase/app-compat",ju="@firebase/analytics-compat",Wu="@firebase/analytics",Vu="@firebase/app-check-compat",zu="@firebase/app-check",Ku="@firebase/auth",qu="@firebase/auth-compat",Gu="@firebase/database",Ju="@firebase/database-compat",Yu="@firebase/functions",Xu="@firebase/functions-compat",Qu="@firebase/installations",Zu="@firebase/installations-compat",ef="@firebase/messaging",tf="@firebase/messaging-compat",nf="@firebase/performance",rf="@firebase/performance-compat",sf="@firebase/remote-config",of="@firebase/remote-config-compat",af="@firebase/storage",cf="@firebase/storage-compat",lf="@firebase/firestore",uf="@firebase/firestore-compat",ff="firebase",df="9.18.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr="[DEFAULT]",hf={[zr]:"fire-core",[$u]:"fire-core-compat",[Wu]:"fire-analytics",[ju]:"fire-analytics-compat",[zu]:"fire-app-check",[Vu]:"fire-app-check-compat",[Ku]:"fire-auth",[qu]:"fire-auth-compat",[Gu]:"fire-rtdb",[Ju]:"fire-rtdb-compat",[Yu]:"fire-fn",[Xu]:"fire-fn-compat",[Qu]:"fire-iid",[Zu]:"fire-iid-compat",[ef]:"fire-fcm",[tf]:"fire-fcm-compat",[nf]:"fire-perf",[rf]:"fire-perf-compat",[sf]:"fire-rc",[of]:"fire-rc-compat",[af]:"fire-gcs",[cf]:"fire-gcs-compat",[lf]:"fire-fst",[uf]:"fire-fst-compat","fire-js":"fire-js",[ff]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=new Map,qr=new Map;function pf(t,e){try{t.container.addComponent(e)}catch(n){wt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function nn(t){const e=t.name;if(qr.has(e))return wt.debug(`There were multiple attempts to register component ${e}.`),!1;qr.set(e,t);for(const n of Un.values())pf(n,t);return!0}function Fo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},st=new an("app","Firebase",gf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ft("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw st.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=df;function Bo(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Kr,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw st.create("bad-app-name",{appName:String(s)});if(n||(n=iu()),!n)throw st.create("no-options");const i=Un.get(s);if(i){if(Ln(n,i.options)&&Ln(r,i.config))return i;throw st.create("duplicate-app",{appName:s})}const o=new Eu(s);for(const c of qr.values())o.addComponent(c);const a=new mf(n,r,o);return Un.set(s,a),a}function _f(t=Kr){const e=Un.get(t);if(!e&&t===Kr)return Bo();if(!e)throw st.create("no-app",{appName:t});return e}function Nt(t,e,n){var r;let s=(r=hf[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wt.warn(a.join(" "));return}nn(new Ft(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf="firebase-heartbeat-database",vf=1,rn="firebase-heartbeat-store";let Tr=null;function Ho(){return Tr||(Tr=Lu(bf,vf,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(rn)}}}).catch(t=>{throw st.create("idb-open",{originalErrorMessage:t.message})})),Tr}async function yf(t){try{return(await Ho()).transaction(rn).objectStore(rn).get($o(t))}catch(e){if(e instanceof at)wt.warn(e.message);else{const n=st.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wt.warn(n.message)}}}async function ui(t,e){try{const r=(await Ho()).transaction(rn,"readwrite");return await r.objectStore(rn).put(e,$o(t)),r.done}catch(n){if(n instanceof at)wt.warn(n.message);else{const r=st.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});wt.warn(r.message)}}}function $o(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If=1024,wf=30*24*60*60*1e3;class Ef{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Cf(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=fi();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=wf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=fi(),{heartbeatsToSend:n,unsentEntries:r}=Tf(this._heartbeatsCache.heartbeats),s=Do(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function fi(){return new Date().toISOString().substring(0,10)}function Tf(t,e=If){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),di(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),di(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Cf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fu()?du().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await yf(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ui(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ui(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function di(t){return Do(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sf(t){nn(new Ft("platform-logger",e=>new Bu(e),"PRIVATE")),nn(new Ft("heartbeat",e=>new Ef(e),"PRIVATE")),Nt(zr,li,t),Nt(zr,li,"esm2017"),Nt("fire-js","")}Sf("");var Af="firebase",Of="9.18.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nt(Af,Of,"app");function _s(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function jo(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Rf=jo,Wo=new an("auth","Firebase",jo());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=new xo("@firebase/auth");function On(t,...e){hi.logLevel<=J.ERROR&&hi.error(`Auth (${nr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(t,...e){throw bs(t,...e)}function xe(t,...e){return bs(t,...e)}function kf(t,e,n){const r=Object.assign(Object.assign({},Rf()),{[e]:n});return new an("auth","Firebase",r).create(e,{appName:t.name})}function bs(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Wo.create(t,...e)}function R(t,e,...n){if(!t)throw bs(e,...n)}function $e(t){const e="INTERNAL ASSERTION FAILED: "+t;throw On(e),new Error(e)}function ze(t,e){t||$e(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=new Map;function je(t){ze(t instanceof Function,"Expected a class definition");let e=pi.get(t);return e?(ze(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,pi.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(t,e){const n=Fo(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ln(i,e??{}))return s;Ve(s,"already-initialized")}return n.initialize({options:e})}function Df(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(je);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Nf(){return gi()==="http:"||gi()==="https:"}function gi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Nf()||cu()||"connection"in navigator)?navigator.onLine:!0}function xf(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e,n){this.shortDelay=e,this.longDelay=n,ze(n>e,"Short delay should be less than long delay!"),this.isMobile=au()||lu()}get(){return Mf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(t,e){ze(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;$e("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;$e("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;$e("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf=new ln(3e4,6e4);function zo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function rr(t,e,n,r,s={}){return Ko(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=cn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Vo.fetch()(Go(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Ko(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Lf),e);try{const s=new Ff(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw wn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,f]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw wn(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw wn(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw wn(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw kf(t,d,f);Ve(t,d)}}catch(s){if(s instanceof at)throw s;Ve(t,"internal-error",{message:String(s)})}}async function qo(t,e,n,r,s={}){const i=await rr(t,e,n,r,s);return"mfaPendingCredential"in i&&Ve(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Go(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?vs(t.config,s):`${t.config.apiScheme}://${s}`}class Ff{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(xe(this.auth,"network-request-failed")),Uf.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=xe(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bf(t,e){return rr(t,"POST","/v1/accounts:delete",e)}async function Hf(t,e){return rr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $f(t,e=!1){const n=jt(t),r=await n.getIdToken(e),s=ys(r);R(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Jt(Cr(s.auth_time)),issuedAtTime:Jt(Cr(s.iat)),expirationTime:Jt(Cr(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Cr(t){return Number(t)*1e3}function ys(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return On("JWT malformed, contained fewer than 3 sections"),null;try{const s=No(n);return s?JSON.parse(s):(On("Failed to decode base64 JWT payload"),null)}catch(s){return On("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function jf(t){const e=ys(t);return R(e,"internal-error"),R(typeof e.exp<"u","internal-error"),R(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof at&&Wf(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Wf({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Jt(this.lastLoginAt),this.creationTime=Jt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fn(t){var e;const n=t.auth,r=await t.getIdToken(),s=await sn(t,Hf(n,{idToken:r}));R(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?qf(i.providerUserInfo):[],a=Kf(t.providerData,o),c=t.isAnonymous,f=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),d=c?f:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Jo(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,m)}async function zf(t){const e=jt(t);await Fn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Kf(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function qf(t){return t.map(e=>{var{providerId:n}=e,r=_s(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gf(t,e){const n=await Ko(t,{},async()=>{const r=cn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Go(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Vo.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){R(e.idToken,"internal-error"),R(typeof e.idToken<"u","internal-error"),R(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return R(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Gf(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new on;return r&&(R(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(R(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(R(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new on,this.toJSON())}_performRefresh(){return $e("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(t,e){R(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class It{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=_s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Vf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Jo(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await sn(this,this.stsTokenManager.getToken(this.auth,e));return R(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return $f(this,e)}reload(){return zf(this)}_assign(e){this!==e&&(R(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new It(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Fn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await sn(this,Bf(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,f,d;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,b=(s=n.email)!==null&&s!==void 0?s:void 0,T=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,D=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,$=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,F=(f=n.createdAt)!==null&&f!==void 0?f:void 0,ie=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:O,emailVerified:K,isAnonymous:te,providerData:ye,stsTokenManager:pe}=n;R(O&&pe,e,"internal-error");const M=on.fromJSON(this.name,pe);R(typeof O=="string",e,"internal-error"),Je(m,e.name),Je(b,e.name),R(typeof K=="boolean",e,"internal-error"),R(typeof te=="boolean",e,"internal-error"),Je(T,e.name),Je(D,e.name),Je(C,e.name),Je($,e.name),Je(F,e.name),Je(ie,e.name);const Y=new It({uid:O,auth:e,email:b,emailVerified:K,displayName:m,isAnonymous:te,photoURL:D,phoneNumber:T,tenantId:C,stsTokenManager:M,createdAt:F,lastLoginAt:ie});return ye&&Array.isArray(ye)&&(Y.providerData=ye.map(V=>Object.assign({},V))),$&&(Y._redirectEventId=$),Y}static async _fromIdTokenResponse(e,n,r=!1){const s=new on;s.updateFromServerResponse(n);const i=new It({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Fn(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Yo.type="NONE";const mi=Yo;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(t,e,n){return`firebase:${t}:${e}:${n}`}class Mt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Rn(this.userKey,s.apiKey,i),this.fullPersistenceKey=Rn("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?It._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Mt(je(mi),e,r);const s=(await Promise.all(n.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let i=s[0]||je(mi);const o=Rn(r,e.config.apiKey,e.name);let a=null;for(const f of n)try{const d=await f._get(o);if(d){const m=It._fromJSON(e,d);f!==i&&(a=m),i=f;break}}catch{}const c=s.filter(f=>f._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Mt(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async f=>{if(f!==i)try{await f._remove(o)}catch{}})),new Mt(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Zo(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xo(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ta(e))return"Blackberry";if(na(e))return"Webos";if(Is(e))return"Safari";if((e.includes("chrome/")||Qo(e))&&!e.includes("edge/"))return"Chrome";if(ea(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Xo(t=le()){return/firefox\//i.test(t)}function Is(t=le()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Qo(t=le()){return/crios\//i.test(t)}function Zo(t=le()){return/iemobile/i.test(t)}function ea(t=le()){return/android/i.test(t)}function ta(t=le()){return/blackberry/i.test(t)}function na(t=le()){return/webos/i.test(t)}function sr(t=le()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Jf(t=le()){var e;return sr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Yf(){return uu()&&document.documentMode===10}function ra(t=le()){return sr(t)||ea(t)||na(t)||ta(t)||/windows phone/i.test(t)||Zo(t)}function Xf(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(t,e=[]){let n;switch(t){case"Browser":n=_i(le());break;case"Worker":n=`${_i(le())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${nr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bi(this),this.idTokenSubscription=new bi(this),this.beforeStateQueue=new Qf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wo,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=je(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Mt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fn(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xf()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?jt(e):null;return n&&R(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&R(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(je(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new an("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&je(e)||this._popupRedirectResolver;R(n,this,"argument-error"),this.redirectPersistenceManager=await Mt.create(this,[je(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return R(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sa(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function ir(t){return jt(t)}class bi{constructor(e){this.auth=e,this.observer=null,this.addObserver=_u(n=>this.observer=n)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function ed(t,e,n){const r=ir(t);R(r._canInitEmulator,r,"emulator-config-failed"),R(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=ia(e),{host:o,port:a}=td(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||nd()}function ia(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function td(t){const e=ia(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:vi(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:vi(o)}}}function vi(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function nd(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return $e("not implemented")}_getIdTokenResponse(e){return $e("not implemented")}_linkToIdToken(e,n){return $e("not implemented")}_getReauthenticationResolver(e){return $e("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xt(t,e){return qo(t,"POST","/v1/accounts:signInWithIdp",zo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd="http://localhost";class Et extends oa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Et(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ve("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=_s(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Et(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return xt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,xt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,xt(e,n)}buildRequest(){const e={requestUri:rd,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=cn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un extends aa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe extends un{constructor(){super("facebook.com")}static credential(e){return Et._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xe.credential(e.oauthAccessToken)}catch{return null}}}Xe.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xe.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends un{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Et._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Qe.credential(n,r)}catch{return null}}}Qe.GOOGLE_SIGN_IN_METHOD="google.com";Qe.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze extends un{constructor(){super("github.com")}static credential(e){return Et._fromParams({providerId:Ze.PROVIDER_ID,signInMethod:Ze.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ze.credentialFromTaggedObject(e)}static credentialFromError(e){return Ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ze.credential(e.oauthAccessToken)}catch{return null}}}Ze.GITHUB_SIGN_IN_METHOD="github.com";Ze.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et extends un{constructor(){super("twitter.com")}static credential(e,n){return Et._fromParams({providerId:et.PROVIDER_ID,signInMethod:et.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return et.credentialFromTaggedObject(e)}static credentialFromError(e){return et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return et.credential(n,r)}catch{return null}}}et.TWITTER_SIGN_IN_METHOD="twitter.com";et.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sd(t,e){return qo(t,"POST","/v1/accounts:signUp",zo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await It._fromIdTokenResponse(e,r,s),o=yi(r);return new Tt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=yi(r);return new Tt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function yi(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends at{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Bn.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Bn(e,n,r,s)}}function ca(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Bn._fromErrorAndOperation(t,i,e,r):i})}async function id(t,e,n=!1){const r=await sn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Tt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function od(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await sn(t,ca(r,s,e,t),n);R(i.idToken,r,"internal-error");const o=ys(i.idToken);R(o,r,"internal-error");const{sub:a}=o;return R(t.uid===a,r,"user-mismatch"),Tt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ve(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ad(t,e,n=!1){const r="signIn",s=await ca(t,r,e),i=await Tt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Ii(t,e,n){const r=ir(t),s=await sd(r,{returnSecureToken:!0,email:e,password:n}),i=await Tt._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function cd(t,e,n,r){return jt(t).onIdTokenChanged(e,n,r)}function ld(t,e,n){return jt(t).beforeAuthStateChanged(e,n)}const Hn="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Hn,"1"),this.storage.removeItem(Hn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(){const t=le();return Is(t)||sr(t)}const fd=1e3,dd=10;class ua extends la{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ud()&&Xf(),this.fallbackToPolling=ra(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Yf()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,dd):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},fd)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ua.type="LOCAL";const hd=ua;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa extends la{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}fa.type="SESSION";const da=fa;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new or(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async f=>f(n.origin,i)),c=await pd(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}or.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const f=ws("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const b=m;if(b.data.eventId===f)switch(b.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(b.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:f,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(){return window}function md(t){Le().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(){return typeof Le().WorkerGlobalScope<"u"&&typeof Le().importScripts=="function"}async function _d(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bd(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function vd(){return ha()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa="firebaseLocalStorageDb",yd=1,$n="firebaseLocalStorage",ga="fbase_key";class fn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ar(t,e){return t.transaction([$n],e?"readwrite":"readonly").objectStore($n)}function Id(){const t=indexedDB.deleteDatabase(pa);return new fn(t).toPromise()}function Jr(){const t=indexedDB.open(pa,yd);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore($n,{keyPath:ga})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains($n)?e(r):(r.close(),await Id(),e(await Jr()))})})}async function wi(t,e,n){const r=ar(t,!0).put({[ga]:e,value:n});return new fn(r).toPromise()}async function wd(t,e){const n=ar(t,!1).get(e),r=await new fn(n).toPromise();return r===void 0?null:r.value}function Ei(t,e){const n=ar(t,!0).delete(e);return new fn(n).toPromise()}const Ed=800,Td=3;class ma{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jr(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Td)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ha()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=or._getInstance(vd()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await _d(),!this.activeServiceWorker)return;this.sender=new gd(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bd()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jr();return await wi(e,Hn,"1"),await Ei(e,Hn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>wi(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>wd(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ei(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ar(s,!1).getAll();return new fn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ed)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ma.type="LOCAL";const Cd=ma;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Ad(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=xe("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Sd().appendChild(r)})}function Od(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ln(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(t,e){return e?je(e):(R(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es extends oa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return xt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return xt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function kd(t){return ad(t.auth,new Es(t),t.bypassAuthState)}function Pd(t){const{auth:e,user:n}=t;return R(n,e,"internal-error"),od(n,new Es(t),t.bypassAuthState)}async function Dd(t){const{auth:e,user:n}=t;return R(n,e,"internal-error"),id(n,new Es(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kd;case"linkViaPopup":case"linkViaRedirect":return Dd;case"reauthViaPopup":case"reauthViaRedirect":return Pd;default:Ve(this.auth,"internal-error")}}resolve(e){ze(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ze(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd=new ln(2e3,1e4);class Ot extends _a{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ot.currentPopupAction&&Ot.currentPopupAction.cancel(),Ot.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return R(e,this.auth,"internal-error"),e}async onExecution(){ze(this.filter.length===1,"Popup operations only handle one event");const e=ws();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ot.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xe(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Nd.get())};e()}}Ot.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md="pendingRedirect",kn=new Map;class xd extends _a{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=kn.get(this.auth._key());if(!e){try{const r=await Ld(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}kn.set(this.auth._key(),e)}return this.bypassAuthState||kn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ld(t,e){const n=Bd(e),r=Fd(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Ud(t,e){kn.set(t._key(),e)}function Fd(t){return je(t._redirectPersistence)}function Bd(t){return Rn(Md,t.config.apiKey,t.name)}async function Hd(t,e,n=!1){const r=ir(t),s=Rd(r,e),o=await new xd(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d=10*60*1e3;class jd{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Wd(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ba(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(xe(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$d&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ti(e))}saveEventToCache(e){this.cachedEventUids.add(Ti(e)),this.lastProcessedEventTime=Date.now()}}function Ti(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ba({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Wd(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ba(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vd(t,e={}){return rr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Kd=/^https?/;async function qd(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Vd(t);for(const n of e)try{if(Gd(n))return}catch{}Ve(t,"unauthorized-domain")}function Gd(t){const e=Gr(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Kd.test(n))return!1;if(zd.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd=new ln(3e4,6e4);function Ci(){const t=Le().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Yd(t){return new Promise((e,n)=>{var r,s,i;function o(){Ci(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ci(),n(xe(t,"network-request-failed"))},timeout:Jd.get()})}if(!((s=(r=Le().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Le().gapi)===null||i===void 0)&&i.load)o();else{const a=Od("iframefcb");return Le()[a]=()=>{gapi.load?o():n(xe(t,"network-request-failed"))},Ad(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Pn=null,e})}let Pn=null;function Xd(t){return Pn=Pn||Yd(t),Pn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd=new ln(5e3,15e3),Zd="__/auth/iframe",eh="emulator/auth/iframe",th={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nh=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rh(t){const e=t.config;R(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?vs(e,eh):`https://${t.config.authDomain}/${Zd}`,r={apiKey:e.apiKey,appName:t.name,v:nr},s=nh.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${cn(r).slice(1)}`}async function sh(t){const e=await Xd(t),n=Le().gapi;return R(n,t,"internal-error"),e.open({where:document.body,url:rh(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:th,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=xe(t,"network-request-failed"),a=Le().setTimeout(()=>{i(o)},Qd.get());function c(){Le().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},oh=500,ah=600,ch="_blank",lh="http://localhost";class Si{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function uh(t,e,n,r=oh,s=ah){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},ih),{width:r.toString(),height:s.toString(),top:i,left:o}),f=le().toLowerCase();n&&(a=Qo(f)?ch:n),Xo(f)&&(e=e||lh,c.scrollbars="yes");const d=Object.entries(c).reduce((b,[T,D])=>`${b}${T}=${D},`,"");if(Jf(f)&&a!=="_self")return fh(e||"",a),new Si(null);const m=window.open(e||"",a,d);R(m,t,"popup-blocked");try{m.focus()}catch{}return new Si(m)}function fh(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh="__/auth/handler",hh="emulator/auth/handler";function Ai(t,e,n,r,s,i){R(t.config.authDomain,t,"auth-domain-config-required"),R(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:nr,eventId:s};if(e instanceof aa){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",mu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,f]of Object.entries(i||{}))o[c]=f}if(e instanceof un){const c=e.getScopes().filter(f=>f!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${ph(t)}?${cn(a).slice(1)}`}function ph({config:t}){return t.emulator?vs(t,hh):`https://${t.authDomain}/${dh}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr="webStorageSupport";class gh{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=da,this._completeRedirectFn=Hd,this._overrideRedirectResult=Ud}async _openPopup(e,n,r,s){var i;ze((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Ai(e,n,r,Gr(),s);return uh(e,o,ws())}async _openRedirect(e,n,r,s){return await this._originValidation(e),md(Ai(e,n,r,Gr(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ze(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await sh(e),r=new jd(e);return n.register("authEvent",s=>(R(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Sr,{type:Sr},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Sr];o!==void 0&&n(!!o),Ve(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=qd(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ra()||Is()||sr()}}const mh=gh;var Oi="@firebase/auth",Ri="0.21.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function vh(t){nn(new Ft("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{R(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),R(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const f={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sa(t)},d=new Zf(a,c,f);return Df(d,n),d})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),nn(new Ft("auth-internal",e=>{const n=ir(e.getProvider("auth").getImmediate());return(r=>new _h(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nt(Oi,Ri,bh(t)),Nt(Oi,Ri,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh=5*60,Ih=Mo("authIdTokenMaxAge")||yh;let ki=null;const wh=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ih)return;const s=n==null?void 0:n.token;ki!==s&&(ki=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Eh(t=_f()){const e=Fo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Pf(t,{popupRedirectResolver:mh,persistence:[Cd,hd,da]}),r=Mo("authTokenSyncURL");if(r){const i=wh(r);ld(n,i,()=>i(n.currentUser)),cd(n,o=>i(o))}const s=su("auth");return s&&ed(n,`http://${s}`),n}vh("Browser");const qe=t=>(wc("data-v-a1dad856"),t=t(),Ec(),t),Th={id:"grid"},Ch=["onUpdate:modelValue"],Sh=["onUpdate:modelValue"],Ah=["onUpdate:modelValue"],Oh=["onUpdate:modelValue"],Rh=qe(()=>Z("h1",null," 🎊 Congratulations! You Win! 🎊 ",-1)),kh=qe(()=>Z("h2",null," Tap the 'New Game' button to play again! ",-1)),Ph=qe(()=>Z("h1",null," 😔 Game Over! No more guesses left! 😔 ",-1)),Dh=qe(()=>Z("h2",null," Tap the 'New Game' button to play again! ",-1)),Nh={id:"timers"},Mh={id:"timedisplay"},xh=qe(()=>Z("br",null,null,-1)),Lh={class:"buttons"},Uh=qe(()=>Z("br",null,null,-1)),Fh={class:"report"},Bh=qe(()=>Z("b",null,"Report:",-1)),Hh=qe(()=>Z("h5",null,` Our word matching function first checks that the user has entered a complete five-letter word. Then it creates a temporary array with the letters of the secret word to check for duplicate letters in the user's word. It then loops through each letter in the user's word and compares it to the corresponding letter in the secret word. If the letters match and the letter is in the correct position, it assigns the "G" color code. If the letters match but are in the wrong position, it assigns the "Y" color code. If the letters do not match, it assigns the "B" color code. If the user's word contains a letter that is in the secret word, the function removes that letter from the temporary array to avoid counting it twice in the color codes. `,-1)),$h=qe(()=>Z("h5",null,' In this Vue3 template, a grid of input cells is displayed using an inline-grid layout with six rows and five columns. The "v-for" directive is used to iterate through the "userWords" array and display an input field for each element. The "v-model" directive is used to bind the input field to the corresponding element of the "userWords" array. Conditional rendering is used to change the background color of the input field based on the value of the "letterColor" array. Four different classes are defined in the "style" section, each with a different background color: black for the default cell, grey for a wrong letter, green for a correct letter in the right spot, and yellow for a correct letter in the wrong spot. ',-1)),jh=lo({__name:"HelloWordle",props:{updateInterval:{default:1e3},startLabel:{default:"Start"},faceColor:{default:"transparent"}},setup(t){const e=t,n=Vt(["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]),r=Vt(["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]),s=["amber","brave","catch","dream","earth","flair","gloom","happy","image","juice","knack","latch","birth","notch","olive","peace","quirk","route","shrug","toast"],o=Bo({apiKey:"AIzaSyAC0VT8m3ZspBjn-5gcXp1Rck1hq_c0lu4",authDomain:"wordle-snoap-taylor.firebaseapp.com",projectId:"wordle-snoap-taylor",storageBucket:"wordle-snoap-taylor.appspot.com",messagingSenderId:"1064048946619",appId:"1:1064048946619:web:2d319ef9b72845c96de89e",measurementId:"G-1XQ3ERZCYV"}),a=Eh(o),c="user@example.com",f="password123";Ii(a,c,f).then(x=>{x.user}).catch(x=>{x.code,x.message}),Ii(a,c,f).then(x=>{x.user}).catch(x=>{x.code,x.message});const d=Vt(0),m=Vt(0);let b=0,T=!1,D=!1,C=s[Math.floor(Math.random()*s.length)],$=Vt(null),F=!1;function ie(){F==!1&&(Y(),F=!0)}ie();function O(){V(),Y(),C=s[Math.floor(Math.random()*s.length)],T=!1,D=!1,b=0,d.value=0,m.value=0,n.value.splice(0),r.value.splice(0);for(let x=0;x<30;x++)n.value.push(""),r.value.push("")}function K(){const x=5*b;let Q=[];for(let j=0;j<5;j++){if(n.value[j+x]=="")return;Q.push(C.charAt(j))}for(let j=0;j<5;j++)if(n.value[j+x].toLowerCase()==C.charAt(j)&&Q.includes(n.value[j+x].toLowerCase())){r.value[j+x]="G";for(let ge=0;ge<5;ge++)if(Q[ge]==n.value[j+x].toLowerCase()){Q.splice(ge,1);break}}else if(C.charAt(j)!=n.value[j+x]&&Q.includes(n.value[j+x].toLowerCase())){r.value[j+x]="Y";for(let ge=0;ge<5;ge++)if(Q[ge]==n.value[j+x].toLowerCase()){Q.splice(ge,1);break}}else r.value[j+x]="B";te(),b+=1,b==6&&!T&&(D=!0,V())}function te(){let x=0;for(let Q=0;Q<30;Q++)r.value[Q]=="G"&&x++,x==5?ye():(Q+1)%5==0&&(x=0)}function ye(){T=!0,V()}function pe(){return d.value.toLocaleString("en-US",{minimumIntegerDigits:2})}function M(){d.value++,d.value===60&&(m.value++,d.value=0)}function Y(){$.value=setInterval(M,e.updateInterval)}function V(){$.value!==null&&(clearInterval($.value),$.value=null)}const ue=Ro(()=>({backgroundColor:e.faceColor}));return(x,Q)=>{const j=mo("h");return we(),Be(_e,null,[ve(j,null,{default:Kt(()=>[Z("div",Th,[(we(!0),Be(_e,null,qc(n.value,(ge,W)=>(we(),Be("p",{key:W},[r.value[W]==""?yn((we(),Be("input",{key:0,class:"cell","onUpdate:modelValue":H=>n.value[W]=H},null,8,Ch)),[[In,n.value[W]]]):r.value[W]=="B"?yn((we(),Be("input",{key:1,class:"cell",id:"wrong","onUpdate:modelValue":H=>n.value[W]=H},null,8,Sh)),[[In,n.value[W]]]):r.value[W]=="G"?yn((we(),Be("input",{key:2,class:"cell",id:"right","onUpdate:modelValue":H=>n.value[W]=H},null,8,Ah)),[[In,n.value[W]]]):r.value[W]=="Y"?yn((we(),Be("input",{key:3,class:"cell",id:"misplaced","onUpdate:modelValue":H=>n.value[W]=H},null,8,Oh)),[[In,n.value[W]]]):_r("",!0)]))),128))])]),_:1}),Z("p",null,[dt(T)?(we(),Hr(j,{key:0,style:{color:"black"}},{default:Kt(()=>[Rh,kh]),_:1})):dt(D)?(we(),Hr(j,{key:1,style:{color:"black"}},{default:Kt(()=>[Ph,Z("h2",null," The word was '"+ur(dt(C))+"' ",1),Dh]),_:1})):_r("",!0)]),Z("div",Nh,[Z("div",{id:"timer",style:jn(dt(ue))},[Z("div",Mh,ur(m.value)+":"+ur(pe()),1)],4)]),xh,Z("div",Lh,[Z("button",{onClick:O}," New Game "),!dt(T)&&!dt(D)?(we(),Be("button",{key:0,onClick:K}," Check Answer ")):_r("",!0)]),Uh,Z("div",Fh,[ve(j,{style:{"font-size":"100px"}},{default:Kt(()=>[Bh]),_:1}),Hh,$h])],64)}}});const Wh=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Vh=Wh(jh,[["__scopeId","data-v-a1dad856"]]),zh=Z("h1",{style:{color:"darkblue","font-size":"50px"}},"SnoTay Wordle",-1),Kh=Z("h4",{style:{"font-size":"large",color:"black"}},[$r(" Cameron Snoap"),Z("br"),$r(" Kyle Taylor ")],-1),qh=lo({__name:"App",setup(t){return(e,n)=>{const r=mo("Signup");return we(),Be(_e,null,[ve(r),zh,ve(Vh),Kh],64)}}});Jl(qh).mount("#app");
