(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var l;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function n(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
n("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.i=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.i};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
n("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function q(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function fa(a){if(!(a instanceof Array)){a=q(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ha(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ia="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ha(d,e)&&(a[e]=d[e])}return a};
n("Object.assign",function(a){return a||ia});
var ja="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},la=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ja(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ma;
if("function"==typeof Object.setPrototypeOf)ma=Object.setPrototypeOf;else{var na;a:{var oa={a:!0},pa={};try{pa.__proto__=oa;na=pa.a;break a}catch(a){}na=!1}ma=na?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var qa=ma;
function r(a,b){a.prototype=ja(b.prototype);a.prototype.constructor=a;if(qa)qa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Y=b.prototype}
function ra(){this.D=!1;this.m=null;this.j=void 0;this.i=1;this.s=this.o=0;this.A=this.l=null}
function sa(a){if(a.D)throw new TypeError("Generator is already running");a.D=!0}
ra.prototype.v=function(a){this.j=a};
function ta(a,b){a.l={xb:b,Cb:!0};a.i=a.o||a.s}
ra.prototype.return=function(a){this.l={return:a};this.i=this.s};
function u(a,b,c){a.i=c;return{value:b}}
ra.prototype.u=function(a){this.i=a};
function wa(a,b,c){a.o=b;void 0!=c&&(a.s=c)}
function xa(a,b){a.i=b;a.o=0}
function ya(a){a.o=0;var b=a.l.xb;a.l=null;return b}
function za(a){a.A=[a.l];a.o=0;a.s=0}
function Aa(a){var b=a.A.splice(0)[0];(b=a.l=a.l||b)?b.Cb?a.i=a.o||a.s:void 0!=b.u&&a.s<b.u?(a.i=b.u,a.l=null):a.i=a.s:a.i=0}
function Ba(a){this.i=new ra;this.j=a}
function Da(a,b){sa(a.i);var c=a.i.m;if(c)return Ea(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.i.return);
a.i.return(b);return Fa(a)}
function Ea(a,b,c,d){try{var e=b.call(a.i.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.i.D=!1,e;var f=e.value}catch(g){return a.i.m=null,ta(a.i,g),Fa(a)}a.i.m=null;d.call(a.i,f);return Fa(a)}
function Fa(a){for(;a.i.i;)try{var b=a.j(a.i);if(b)return a.i.D=!1,{value:b.value,done:!1}}catch(c){a.i.j=void 0,ta(a.i,c)}a.i.D=!1;if(a.i.l){b=a.i.l;a.i.l=null;if(b.Cb)throw b.xb;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ga(a){this.next=function(b){sa(a.i);a.i.m?b=Ea(a,a.i.m.next,b,a.i.v):(a.i.v(b),b=Fa(a));return b};
this.throw=function(b){sa(a.i);a.i.m?b=Ea(a,a.i.m["throw"],b,a.i.v):(ta(a.i,b),b=Fa(a));return b};
this.return=function(b){return Da(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ha(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function w(a){return Ha(new Ga(new Ba(a)))}
function Ia(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
n("Reflect",function(a){return a?a:{}});
n("Reflect.construct",function(){return la});
n("Reflect.setPrototypeOf",function(a){return a?a:qa?function(b,c){try{return qa(b,c),!0}catch(d){return!1}}:null});
n("Promise",function(a){function b(g){this.i=0;this.l=void 0;this.j=[];this.D=!1;var h=this.m();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.i=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.j=function(g){if(null==this.i){this.i=[];var h=this;this.l(function(){h.s()})}this.i.push(g)};
var e=da.setTimeout;c.prototype.l=function(g){e(g,0)};
c.prototype.s=function(){for(;this.i&&this.i.length;){var g=this.i;this.i=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(m){this.m(m)}}}this.i=null};
c.prototype.m=function(g){this.l(function(){throw g;})};
b.prototype.m=function(){function g(m){return function(p){k||(k=!0,m.call(h,p))}}
var h=this,k=!1;return{resolve:g(this.R),reject:g(this.s)}};
b.prototype.R=function(g){if(g===this)this.s(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ea(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.N(g):this.o(g)}};
b.prototype.N=function(g){var h=void 0;try{h=g.then}catch(k){this.s(k);return}"function"==typeof h?this.oa(h,g):this.o(g)};
b.prototype.s=function(g){this.v(2,g)};
b.prototype.o=function(g){this.v(1,g)};
b.prototype.v=function(g,h){if(0!=this.i)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.i);this.i=g;this.l=h;2===this.i&&this.W();this.A()};
b.prototype.W=function(){var g=this;e(function(){if(g.L()){var h=da.console;"undefined"!==typeof h&&h.error(g.l)}},1)};
b.prototype.L=function(){if(this.D)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.l;return k(g)};
b.prototype.A=function(){if(null!=this.j){for(var g=0;g<this.j.length;++g)f.j(this.j[g]);this.j=null}};
var f=new c;b.prototype.ea=function(g){var h=this.m();g.La(h.resolve,h.reject)};
b.prototype.oa=function(g,h){var k=this.m();try{g.call(h,k.resolve,k.reject)}catch(m){k.reject(m)}};
b.prototype.then=function(g,h){function k(x,v){return"function"==typeof x?function(D){try{m(x(D))}catch(G){p(G)}}:v}
var m,p,t=new b(function(x,v){m=x;p=v});
this.La(k(g,m),k(h,p));return t};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.La=function(g,h){function k(){switch(m.i){case 1:g(m.l);break;case 2:h(m.l);break;default:throw Error("Unexpected state: "+m.i);}}
var m=this;null==this.j?f.j(k):this.j.push(k);this.D=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var m=q(g),p=m.next();!p.done;p=m.next())d(p.value).La(h,k)})};
b.all=function(g){var h=q(g),k=h.next();return k.done?d([]):new b(function(m,p){function t(D){return function(G){x[D]=G;v--;0==v&&m(x)}}
var x=[],v=0;do x.push(void 0),v++,d(k.value).La(t(x.length-1),p),k=h.next();while(!k.done)})};
return b});
n("WeakMap",function(a){function b(k){this.i=(h+=Math.random()+1).toString();if(k){k=q(k);for(var m;!(m=k.next()).done;)m=m.value,this.set(m[0],m[1])}}
function c(){}
function d(k){var m=typeof k;return"object"===m&&null!==k||"function"===m}
function e(k){if(!ha(k,g)){var m=new c;ba(k,g,{value:m})}}
function f(k){var m=Object[k];m&&(Object[k]=function(p){if(p instanceof c)return p;Object.isExtensible(p)&&e(p);return m(p)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),m=Object.seal({}),p=new a([[k,2],[m,3]]);if(2!=p.get(k)||3!=p.get(m))return!1;p.delete(k);p.set(m,4);return!p.has(k)&&4==p.get(m)}catch(t){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,m){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ha(k,g))throw Error("WeakMap key fail: "+k);k[g][this.i]=m;return this};
b.prototype.get=function(k){return d(k)&&ha(k,g)?k[g][this.i]:void 0};
b.prototype.has=function(k){return d(k)&&ha(k,g)&&ha(k[g],this.i)};
b.prototype.delete=function(k){return d(k)&&ha(k,g)&&ha(k[g],this.i)?delete k[g][this.i]:!1};
return b});
n("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var m=h.i;return ea(function(){if(m){for(;m.head!=h.i;)m=m.previous;for(;m.next!=m.head;)return m=m.next,{done:!1,value:k(m)};m=null}return{done:!0,value:void 0}})}
function d(h,k){var m=k&&typeof k;"object"==m||"function"==m?f.has(k)?m=f.get(k):(m=""+ ++g,f.set(k,m)):m="p_"+k;var p=h.data_[m];if(p&&ha(h.data_,m))for(h=0;h<p.length;h++){var t=p[h];if(k!==k&&t.key!==t.key||k===t.key)return{id:m,list:p,index:h,entry:t}}return{id:m,list:p,index:-1,entry:void 0}}
function e(h){this.data_={};this.i=b();this.size=0;if(h){h=q(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(q([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var m=k.entries(),p=m.next();if(p.done||p.value[0]!=h||"s"!=p.value[1])return!1;p=m.next();return p.done||4!=p.value[0].x||"t"!=p.value[1]||!m.next().done?!1:!0}catch(t){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var m=d(this,h);m.list||(m.list=this.data_[m.id]=[]);m.entry?m.entry.value=k:(m.entry={next:this.i,previous:this.i.previous,head:this.i,key:h,value:k},m.list.push(m.entry),this.i.previous.next=m.entry,this.i.previous=m.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.i=this.i.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var m=this.entries(),p;!(p=m.next()).done;)p=p.value,h.call(k,p[1],p[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ja(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
n("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
n("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
n("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
n("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
n("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
n("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
function Ka(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
n("Array.prototype.entries",function(a){return a?a:function(){return Ka(this,function(b,c){return[b,c]})}});
n("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
n("Object.setPrototypeOf",function(a){return a||qa});
n("Set",function(a){function b(c){this.i=new Map;if(c){c=q(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.i.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(q([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.i.set(c,c);this.size=this.i.size;return this};
b.prototype.delete=function(c){c=this.i.delete(c);this.size=this.i.size;return c};
b.prototype.clear=function(){this.i.clear();this.size=0};
b.prototype.has=function(c){return this.i.has(c)};
b.prototype.entries=function(){return this.i.entries()};
b.prototype.values=function(){return this.i.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.i.forEach(function(f){return c.call(d,f,f,e)})};
return b});
n("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ha(b,d)&&c.push([d,b[d]]);return c}});
n("Array.prototype.keys",function(a){return a?a:function(){return Ka(this,function(b){return b})}});
n("Array.prototype.values",function(a){return a?a:function(){return Ka(this,function(b,c){return c})}});
n("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
n("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
n("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
n("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ja(this,b,"includes").indexOf(b,c||0)}});
n("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ha(b,d)&&c.push(b[d]);return c}});
var y=this||self;function z(a,b,c){a=a.split(".");c=c||y;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function A(a,b){a=a.split(".");b=b||y;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function La(a){a.fb=void 0;a.getInstance=function(){return a.fb?a.fb:a.fb=new a}}
function Ma(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Na(a){var b=Ma(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Oa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Qa(a){return Object.prototype.hasOwnProperty.call(a,Ra)&&a[Ra]||(a[Ra]=++Sa)}
var Ra="closure_uid_"+(1E9*Math.random()>>>0),Sa=0;function Ta(a,b,c){return a.call.apply(a.bind,arguments)}
function Ua(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Va(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Va=Ta:Va=Ua;return Va.apply(null,arguments)}
function Wa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Xa(a,b){function c(){}
c.prototype=b.prototype;a.Y=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.np=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ya(a){return a}
;function Za(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Za);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.Sb=b)}
Xa(Za,Error);Za.prototype.name="CustomError";function $a(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.l=!b&&/[?&]ae=1(&|$)/.test(a);this.m=!b&&/[?&]ae=2(&|$)/.test(a);if((this.i=/[?&]adurl=([^&]*)/.exec(a))&&this.i[1]){try{var c=decodeURIComponent(this.i[1])}catch(d){c=null}this.j=c}}
;function ab(){}
function bb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var cb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},db=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},eb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},fb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},gb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
db(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function hb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function ib(a,b){b=cb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function jb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Na(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function kb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function lb(a){var b=mb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function nb(a){for(var b in a)return!1;return!0}
function ob(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function pb(a){return null!==a&&"privembed"in a?a.privembed:!1}
function qb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function rb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function sb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=sb(a[c]);return b}
var vb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function wb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<vb.length;f++)c=vb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var xb;function yb(){if(void 0===xb){var a=null,b=y.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Ya,createScript:Ya,createScriptURL:Ya})}catch(c){y.console&&y.console.error(c.message)}xb=a}else xb=a}return xb}
;function zb(a,b){this.l=a===Ab&&b||""}
zb.prototype.j=!0;zb.prototype.i=function(){return this.l};
function Bb(a){return new zb(Ab,a)}
var Ab={};Bb("");var Cb={};function Db(a){this.l=Cb===Cb?a:"";this.j=!0}
Db.prototype.toString=function(){return this.l.toString()};
Db.prototype.i=function(){return this.l.toString()};function Eb(a,b){this.l=b===Fb?a:""}
Eb.prototype.toString=function(){return this.l+""};
Eb.prototype.j=!0;Eb.prototype.i=function(){return this.l.toString()};
function Gb(a){if(a instanceof Eb&&a.constructor===Eb)return a.l;Ma(a);return"type_error:TrustedResourceUrl"}
var Fb={};function Hb(a){var b=yb();a=b?b.createScriptURL(a):a;return new Eb(a,Fb)}
;var Ib=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function Jb(a,b){this.l=b===Kb?a:""}
Jb.prototype.toString=function(){return this.l.toString()};
Jb.prototype.j=!0;Jb.prototype.i=function(){return this.l.toString()};
function Lb(a){if(a instanceof Jb&&a.constructor===Jb)return a.l;Ma(a);return"type_error:SafeUrl"}
var Mb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Kb={},Nb=new Jb("about:invalid#zClosurez",Kb);function Ob(){var a=y.navigator;return a&&(a=a.userAgent)?a:""}
function B(a){return-1!=Ob().indexOf(a)}
;function Pb(){return(B("Chrome")||B("CriOS"))&&!B("Edge")||B("Silk")}
;var Sb={};function Tb(a){this.l=Sb===Sb?a:"";this.j=!0}
Tb.prototype.i=function(){return this.l.toString()};
Tb.prototype.toString=function(){return this.l.toString()};function Ub(a,b){b instanceof Jb||b instanceof Jb||(b="object"==typeof b&&b.j?b.i():String(b),Mb.test(b)||(b="about:invalid#zClosurez"),b=new Jb(b,Kb));a.href=Lb(b)}
function Vb(a,b){a.rel="stylesheet";a.href=Gb(b).toString();(b=Wb('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)}
function Xb(){return Wb("script[nonce]")}
var Yb=/^[\w+/_-]+[=]{0,2}$/;function Wb(a,b){b=(b||y).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&Yb.test(a)?a:"":""}
;function Zb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var $b=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ac(a){return a?decodeURI(a):a}
function bc(a,b){return b.match($b)[a]||null}
function cc(a){return ac(bc(3,a))}
function dc(a){var b=a.match($b);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function ec(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)ec(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function fc(a){var b=[],c;for(c in a)ec(c,a[c],b);return b.join("&")}
function gc(a,b){b=fc(b);if(b){var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function hc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var ic=/#|$/,jc=/[?&]($|#)/;function kc(a){for(var b=a.search(ic),c=0,d,e=[];0<=(d=hc(a,c,"key",b));)e.push(a.substring(c,d)),c=Math.min(a.indexOf("&",d)+1||b,b);e.push(a.slice(c));return e.join("").replace(jc,"$1")}
;var lc={};function mc(a){if(a!==lc)throw Error("requires a valid immutable API token");}
;function nc(){return B("iPhone")&&!B("iPod")&&!B("iPad")}
;function oc(a){oc[" "](a);return a}
oc[" "]=function(){};var pc=B("Opera"),tc=B("Trident")||B("MSIE"),uc=B("Edge"),vc=B("Gecko")&&!(-1!=Ob().toLowerCase().indexOf("webkit")&&!B("Edge"))&&!(B("Trident")||B("MSIE"))&&!B("Edge"),wc=-1!=Ob().toLowerCase().indexOf("webkit")&&!B("Edge"),xc=B("Android");function yc(){var a=y.document;return a?a.documentMode:void 0}
var zc;a:{var Ac="",Bc=function(){var a=Ob();if(vc)return/rv:([^\);]+)(\)|;)/.exec(a);if(uc)return/Edge\/([\d\.]+)/.exec(a);if(tc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(wc)return/WebKit\/(\S+)/.exec(a);if(pc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Bc&&(Ac=Bc?Bc[1]:"");if(tc){var Cc=yc();if(null!=Cc&&Cc>parseFloat(Ac)){zc=String(Cc);break a}}zc=Ac}var Dc=zc,Ec;if(y.document&&tc){var Fc=yc();Ec=Fc?Fc:parseInt(Dc,10)||void 0}else Ec=void 0;var Gc=Ec;var Hc=nc()||B("iPod"),Ic=B("iPad");!B("Android")||Pb();Pb();var Jc=B("Safari")&&!(Pb()||B("Coast")||B("Opera")||B("Edge")||B("Edg/")||B("OPR")||B("Firefox")||B("FxiOS")||B("Silk")||B("Android"))&&!(nc()||B("iPad")||B("iPod"));var Kc={},Lc=null;
function Mc(a,b){Na(a);void 0===b&&(b=0);if(!Lc){Lc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Kc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Lc[h]&&(Lc[h]=g)}}}b=Kc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],m=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|m>>4];m=b[(m&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+m+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Nc="undefined"!==typeof Uint8Array,Oc={};var Pc;function Qc(a){if(Oc!==Oc)throw Error("illegal external caller");this.da=a;if(null!==a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
Qc.prototype.isEmpty=function(){return null==this.da};var Rc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function Sc(a,b){Object.isFrozen(a)||(Rc?a[Rc]|=b:void 0!==a.la?a.la|=b:Object.defineProperties(a,{la:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}
function Tc(a){var b;Rc?b=a[Rc]:b=a.la;return null==b?0:b}
function Uc(a){return Array.isArray(a)?!!(Tc(a)&1):!1}
function Vc(a){Sc(a,1);return a}
function Wc(a){return Array.isArray(a)?!!(Tc(a)&2):!1}
function Xc(a){if(!Array.isArray(a))throw Error("cannot mark non-array as immutable");Sc(a,2)}
function Yc(a,b){if(!Array.isArray(a))throw Error("cannot mark non-array as mutable");b?Sc(a,8):Object.isFrozen(a)||(Rc?a[Rc]&=-9:void 0!==a.la&&(a.la&=-9))}
;function Zc(a){return Wc(a.G)}
function $c(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var ad,bd=Object.freeze(Vc([]));function cd(a){if(Zc(a))throw Error("Cannot mutate an immutable Message");}
var dd="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;function hd(a){return{value:a,configurable:!1,writable:!1,enumerable:!1}}
;function id(a){y.setTimeout(function(){throw a;},0)}
;function jd(a){return a.displayName||a.name||"unknown type name"}
function kd(a,b){a instanceof b||id(Error("Expected instanceof "+jd(b)+" but got "+(a&&jd(a.constructor))));return a}
function ld(a,b,c){c=void 0===c?!1:c;if(Array.isArray(a))return new b(a);if(c)return new b}
;function md(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)){if(Nc&&null!=a&&a instanceof Uint8Array)return Mc(a);if(a instanceof Qc){var b=a.da;null!=b&&"string"!==typeof b&&(Nc&&b instanceof Uint8Array?b=Mc(b):(Ma(b),b=null));return(a.da=b)||""}}}return a}
;function nd(a,b){b=void 0===b?od:b;return pd(a,b)}
function qd(a,b){if(null!=a){if(Array.isArray(a))a=pd(a,b);else if($c(a)){var c={},d;for(d in a)c[d]=qd(a[d],b);a=c}else a=b(a);return a}}
function pd(a,b){for(var c=a.slice(),d=0;d<c.length;d++)c[d]=qd(c[d],b);Uc(a)&&Vc(c);return c}
function rd(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=md(a);return Array.isArray(a)?nd(a,rd):a}
function od(a){return Nc&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a}
;function sd(a){return a.j||(a.j=a.G[a.l+a.ja]={})}
function td(a,b,c){return-1===b?null:b>=a.l?a.j?a.j[b]:void 0:(void 0===c?0:c)&&a.j&&(c=a.j[b],null!=c)?c:a.G[b+a.ja]}
function C(a,b,c,d,e){d=void 0===d?!1:d;(void 0===e?0:e)||cd(a);b<a.l&&!d?a.G[b+a.ja]=c:sd(a)[b]=c;return a}
function ud(a,b,c,d){c=void 0===c?!0:c;var e=td(a,b,d);Array.isArray(e)||(e=bd);if(Zc(a))c&&(Xc(e),Object.freeze(e));else if(e===bd||Wc(e))e=Vc(e.slice()),C(a,b,e,d);return e}
function vd(a,b,c,d){cd(a);(c=wd(a,c))&&c!==b&&null!=d&&(a.i&&c in a.i&&(a.i[c]=void 0),C(a,c));return C(a,b,d)}
function wd(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=td(a,e)&&(0!==c&&C(a,c,void 0,!1,!0),c=e)}return c}
function xd(a,b,c,d,e){e=void 0===e?!1:e;var f=e;if(-1===c)d=null;else{a.i||(a.i={});var g=a.i[c];if(g)d=g;else{var h=td(a,c,f);b=ld(h,b,d);void 0==b?d=g:(d&&b.G!==h&&C(a,c,b.G,f,!0),a.i[c]=b,Zc(a)&&Xc(b.G),d=b)}}if(null==d)return d;Zc(d)&&!Zc(a)&&(d=d.mb(lc),C(a,c,d.G,e),a.i[c]=d);return d}
function yd(a,b,c,d){a.i||(a.i={});var e=Zc(a),f=a.i[c];if(!f){d=ud(a,c,!0,d);f=[];var g=e||Wc(d);e=e||g;for(var h=0;h<d.length;h++){var k=d[h];e=e||Wc(k);k=ld(k,b);void 0!==k&&(f.push(k),g&&Xc(k.G))}g&&(Xc(f),Object.freeze(f));a.i[c]=f;Yc(d,!e)}return f}
function E(a,b,c,d){cd(a);a.i||(a.i={});b=null!=d?kd(d,b).G:d;a.i[c]=d;return C(a,c,b)}
function zd(a,b,c,d,e){cd(a);a.i||(a.i={});b=null!=e?kd(e,b).G:e;a.i[c]=e;vd(a,c,d,b)}
function Ad(a,b,c,d){cd(a);var e=yd(a,c,b);c=null!=d?kd(d,c):new c;a=ud(a,b);e.push(c);a.push(c.G);mc(lc);Zc(c)&&Yc(a,!1)}
function Bd(a,b){a=td(a,b);return null==a?"":a}
;function Cd(a,b,c){a||(a=Dd);Dd=null;var d=this.constructor.j;a||(a=d?[d]:[]);this.ja=(d?0:-1)-(this.constructor.i||0);this.i=void 0;this.G=a;a:{d=this.G.length;a=d-1;if(d&&(d=this.G[a],$c(d))){this.l=a-this.ja;this.j=d;break a}void 0!==b&&-1<b?(this.l=Math.max(b,a+1-this.ja),this.j=void 0):this.l=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)if(a=c[b],a<this.l)a+=this.ja,(d=this.G[a])?Array.isArray(d)&&Vc(d):this.G[a]=bd;else{d=sd(this);var e=d[a];e?Array.isArray(e)&&Vc(e):d[a]=bd}}
Cd.prototype.toJSON=function(){var a=this.G;return ad?a:nd(a,rd)};
Cd.prototype.clone=function(){var a=nd(this.G);Dd=a;a=new this.constructor(a);Dd=null;Ed(a,this);return a};
Cd.prototype.isMutable=function(a){mc(a);return!Zc(this)};
Cd.prototype.toString=function(){return this.G.toString()};
function Fd(a,b){return md(b)}
function Ed(a,b){b.ya&&(a.ya=b.ya.slice());var c=b.i;if(c){b=b.j;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length){var h=a,k=f;k=void 0===k?!1:k;f=yd(h,e[0].constructor,g,k);var m=Zc(h);if(h=g=ud(h,g,k)){h=g;if(!Array.isArray(h))throw Error("cannot check mutability state of non-array");h=!(Tc(h)&8)}if(h){for(h=0;h<f.length;h++)(k=f[h])&&Zc(k)&&!m&&(f[h]=f[h].mb(lc),g[h]=f[h].G);Yc(g,!0)}for(m=0;m<Math.min(f.length,e.length);m++)Ed(f[m],e[m])}}else(f=xd(a,e.constructor,
g,void 0,f))&&Ed(f,e)}}}}
var Dd;function Gd(){Cd.apply(this,arguments)}
r(Gd,Cd);Gd.prototype.mb=function(){return this};
if(dd){var Hd={};Object.defineProperties(Gd,(Hd[Symbol.hasInstance]=hd(function(){throw Error("Cannot perform instanceof checks for MutableMessage");}),Hd))};function Id(a,b,c,d,e,f){if(a=a.i&&a.i[c])if(Array.isArray(a)){e=f.Ya?Vc(a.slice()):a;f=0<e.length?e[0].constructor:void 0;cd(b);if(null!=e){d=Vc([]);a=!1;for(var g=0;g<e.length;g++)d[g]=kd(e[g],f).G,a=a||Wc(d[g]);b.i||(b.i={});b.i[c]=e;Yc(d,!a)}else b.i&&(b.i[c]=void 0),d=bd;C(b,c,d)}else E(b,a.constructor,c,a);else Nc&&d instanceof Uint8Array?e=d.length?new Qc(new Uint8Array(d)):Pc||(Pc=new Qc(null)):(Array.isArray(d)&&(e?Xc(d):Uc(d)&&f.Ya&&(d=d.slice())),e=d),C(b,c,e)}
;function H(){Gd.apply(this,arguments)}
r(H,Gd);H.prototype.mb=function(a){mc(a);if(Zc(this)){a={Ya:!0};var b=Zc(this);if(b&&!a.Ya)throw Error("copyRepeatedFields must be true for frozen messages");var c=new this.constructor;this.ya&&(c.ya=this.ya.slice());for(var d=this.G,e=0;e<d.length;e++){var f=d[e];if(e===d.length-1&&$c(f))for(h in f){var g=+h;Number.isNaN(g)?sd(c)[h]=f[h]:Id(this,c,g,f[h],b,a)}else Id(this,c,e-this.ja,f,b,a)}var h=c}else h=this;return h};
if(dd){var Jd={};Object.defineProperties(H,(Jd[Symbol.hasInstance]=hd(Object[Symbol.hasInstance]),Jd))};function Kd(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Ld(a){this.j=!1;var b=a.program;a=a.globalName;var c=new Kd;this.l=c.promise;this.m=q((0,y[a].a)(b,function(d,e){Promise.resolve().then(function(){c.resolve({Rb:d,Ac:e})})},!0)).next().value;
this.zc=c.promise.then(function(){})}
Ld.prototype.snapshot=function(a){if(this.j)throw Error("Already disposed");return this.l.then(function(b){var c=b.Rb;return new Promise(function(d){c(function(e){d(e)},[a.sb,
a.Bc])})})};
Ld.prototype.dispose=function(){this.j=!0;this.l.then(function(a){(a=a.Ac)&&a()})};
Ld.prototype.i=function(){return this.j};var Md=window;Bb("csi.gstatic.com");Bb("googleads.g.doubleclick.net");Bb("partner.googleadservices.com");Bb("pubads.g.doubleclick.net");Bb("securepubads.g.doubleclick.net");Bb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
function Nd(a){this.isValid=a}
function Od(a){return new Nd(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Pd=[Od("data"),Od("http"),Od("https"),Od("mailto"),Od("ftp"),new Nd(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function Qd(a,b){a.src=Gb(b);var c,d;(c=(b=null==(d=(c=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:d.call(c,"script[nonce]"))?b.nonce||b.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)}
;function Rd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
l=Rd.prototype;l.clone=function(){return new Rd(this.x,this.y)};
l.equals=function(a){return a instanceof Rd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
l.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
l.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
l.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
l.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function Sd(a,b){this.width=a;this.height=b}
l=Sd.prototype;l.clone=function(){return new Sd(this.width,this.height)};
l.aspectRatio=function(){return this.width/this.height};
l.isEmpty=function(){return!(this.width*this.height)};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
l.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function Td(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Ud(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function Vd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Wd(a){var b=Xd;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Yd(){var a=[];Wd(function(b){a.push(b)});
return a}
var Xd={Sc:"allow-forms",Tc:"allow-modals",Uc:"allow-orientation-lock",Vc:"allow-pointer-lock",Wc:"allow-popups",Xc:"allow-popups-to-escape-sandbox",Yc:"allow-presentation",Zc:"allow-same-origin",bd:"allow-scripts",cd:"allow-top-navigation",dd:"allow-top-navigation-by-user-activation"},Zd=bb(function(){return Yd()});
function $d(){var a=ae(),b={};db(Zd(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function ae(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function be(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var ce=(new Date).getTime();function de(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;var ee="client_dev_mss_url client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");fa(ee);function fe(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;p=m=0}
function b(t){for(var x=g,v=0;64>v;v+=4)x[v/4]=t[v]<<24|t[v+1]<<16|t[v+2]<<8|t[v+3];for(v=16;80>v;v++)t=x[v-3]^x[v-8]^x[v-14]^x[v-16],x[v]=(t<<1|t>>>31)&4294967295;t=e[0];var D=e[1],G=e[2],K=e[3],N=e[4];for(v=0;80>v;v++){if(40>v)if(20>v){var O=K^D&(G^K);var S=1518500249}else O=D^G^K,S=1859775393;else 60>v?(O=D&G|K&(D|G),S=2400959708):(O=D^G^K,S=3395469782);O=((t<<5|t>>>27)&4294967295)+O+N+S+x[v]&4294967295;N=K;K=G;G=(D<<30|D>>>2)&4294967295;D=t;t=O}e[0]=e[0]+t&4294967295;e[1]=e[1]+D&4294967295;e[2]=
e[2]+G&4294967295;e[3]=e[3]+K&4294967295;e[4]=e[4]+N&4294967295}
function c(t,x){if("string"===typeof t){t=unescape(encodeURIComponent(t));for(var v=[],D=0,G=t.length;D<G;++D)v.push(t.charCodeAt(D));t=v}x||(x=t.length);v=0;if(0==m)for(;v+64<x;)b(t.slice(v,v+64)),v+=64,p+=64;for(;v<x;)if(f[m++]=t[v++],p++,64==m)for(m=0,b(f);v+64<x;)b(t.slice(v,v+64)),v+=64,p+=64}
function d(){var t=[],x=8*p;56>m?c(h,56-m):c(h,64-(m-56));for(var v=63;56<=v;v--)f[v]=x&255,x>>>=8;b(f);for(v=x=0;5>v;v++)for(var D=24;0<=D;D-=8)t[x++]=e[v]>>D&255;return t}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var m,p;a();return{reset:a,update:c,digest:d,Vb:function(){for(var t=d(),x="",v=0;v<t.length;v++)x+="0123456789ABCDEF".charAt(Math.floor(t[v]/16))+"0123456789ABCDEF".charAt(t[v]%16);return x}}}
;function ge(a,b,c){var d=String(y.location.href);return d&&a&&b?[b,he(de(d),a,c||null)].join(" "):null}
function he(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],db(d,function(h){e.push(h)}),le(e.join(" "));
var f=[],g=[];db(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];db(d,function(h){e.push(h)});
a=le(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function le(a){var b=fe();b.update(a);return b.Vb().toLowerCase()}
;var me={};function ne(a){this.i=a||{cookie:""}}
l=ne.prototype;l.isEnabled=function(){if(!y.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{Qa:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
l.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Dp;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Qa}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.i.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
l.get=function(a,b){for(var c=a+"=",d=(this.i.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Ib(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
l.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Qa:0,path:b,domain:c});return d};
l.bb=function(){return oe(this).keys};
l.isEmpty=function(){return!this.i.cookie};
l.clear=function(){for(var a=oe(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function oe(a){a=(a.i.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Ib(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var pe=new ne("undefined"==typeof document?null:document);function qe(a){return!!me.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function re(a){a=void 0===a?!1:a;var b=y.__SAPISID||y.__APISID||y.__3PSAPISID||y.__OVERRIDE_SID;qe(a)&&(b=b||y.__1PSAPISID);if(b)return!0;var c=new ne(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID");qe(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function se(a,b,c,d){(a=y[a])||(a=(new ne(document)).get(b));return a?ge(a,c,d):null}
function te(a){var b=void 0===b?!1:b;var c=de(String(y.location.href)),d=[];if(re(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?y.__SAPISID:y.__APISID;e||(e=new ne(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?ge(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&qe(b)&&((b=se("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=se("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function ue(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function ve(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Na(d)?ve.apply(null,d):ue(d)}}
;function I(){this.D=this.D;this.s=this.s}
I.prototype.D=!1;I.prototype.i=function(){return this.D};
I.prototype.dispose=function(){this.D||(this.D=!0,this.I())};
function we(a,b){a.D?b():(a.s||(a.s=[]),a.s.push(b))}
I.prototype.I=function(){if(this.s)for(;this.s.length;)this.s.shift()()};function xe(a,b){this.type=a;this.i=this.target=b;this.defaultPrevented=this.l=!1}
xe.prototype.stopPropagation=function(){this.l=!0};
xe.prototype.preventDefault=function(){this.defaultPrevented=!0};function ye(a){var b=A("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(g){e="Not available",c=!0}b=ze(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Ae[c])c=Ae[c];else{c=String(c);if(!Ae[c]){var f=/function\s+([^\(]+)/m.exec(c);Ae[c]=f?f[1]:"[Anonymous]"}c=Ae[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function ze(a,b){b||(b={});b[Be(a)]=!0;var c=a.stack||"";(a=a.Sb)&&!b[Be(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=ze(a,b));return c}
function Be(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Ae={};var Ce=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{y.addEventListener("test",function(){},b),y.removeEventListener("test",function(){},b)}catch(c){}return a}();function De(a,b){xe.call(this,a?a.type:"");this.relatedTarget=this.i=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.j=null;a&&this.init(a,b)}
Xa(De,xe);var Ee={2:"touch",3:"pen",4:"mouse"};
De.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.i=b;if(b=a.relatedTarget){if(vc){a:{try{oc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Ee[a.pointerType]||"";this.state=a.state;
this.j=a;a.defaultPrevented&&De.Y.preventDefault.call(this)};
De.prototype.stopPropagation=function(){De.Y.stopPropagation.call(this);this.j.stopPropagation?this.j.stopPropagation():this.j.cancelBubble=!0};
De.prototype.preventDefault=function(){De.Y.preventDefault.call(this);var a=this.j;a.preventDefault?a.preventDefault():a.returnValue=!1};var Fe="closure_listenable_"+(1E6*Math.random()|0);var Ge=0;function He(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Oa=e;this.key=++Ge;this.Aa=this.Ka=!1}
function Ie(a){a.Aa=!0;a.listener=null;a.proxy=null;a.src=null;a.Oa=null}
;function Je(a){this.src=a;this.listeners={};this.i=0}
Je.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.i++);var g=Ke(a,b,d,e);-1<g?(b=a[g],c||(b.Ka=!1)):(b=new He(b,this.src,f,!!d,e),b.Ka=c,a.push(b));return b};
Je.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Ke(e,b,c,d);return-1<b?(Ie(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.i--),!0):!1};
function Le(a,b){var c=b.type;c in a.listeners&&ib(a.listeners[c],b)&&(Ie(b),0==a.listeners[c].length&&(delete a.listeners[c],a.i--))}
function Ke(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Aa&&f.listener==b&&f.capture==!!c&&f.Oa==d)return e}return-1}
;var Me="closure_lm_"+(1E6*Math.random()|0),Ne={},Oe=0;function Pe(a,b,c,d,e){if(d&&d.once)Qe(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Pe(a,b[f],c,d,e);else c=Re(c),a&&a[Fe]?a.U(b,c,Oa(d)?!!d.capture:!!d,e):Se(a,b,c,!1,d,e)}
function Se(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Oa(e)?!!e.capture:!!e,h=Te(a);h||(a[Me]=h=new Je(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Ue();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Ce||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Ve(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Oe++}}
function Ue(){function a(c){return b.call(a.src,a.listener,c)}
var b=We;return a}
function Qe(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Qe(a,b[f],c,d,e);else c=Re(c),a&&a[Fe]?a.m.add(String(b),c,!0,Oa(d)?!!d.capture:!!d,e):Se(a,b,c,!0,d,e)}
function Xe(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Xe(a,b[f],c,d,e);else(d=Oa(d)?!!d.capture:!!d,c=Re(c),a&&a[Fe])?a.m.remove(String(b),c,d,e):a&&(a=Te(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Ke(b,c,d,e)),(c=-1<a?b[a]:null)&&Ye(c))}
function Ye(a){if("number"!==typeof a&&a&&!a.Aa){var b=a.src;if(b&&b[Fe])Le(b.m,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Ve(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Oe--;(c=Te(b))?(Le(c,a),0==c.i&&(c.src=null,b[Me]=null)):Ie(a)}}}
function Ve(a){return a in Ne?Ne[a]:Ne[a]="on"+a}
function We(a,b){if(a.Aa)a=!0;else{b=new De(b,this);var c=a.listener,d=a.Oa||a.src;a.Ka&&Ye(a);a=c.call(d,b)}return a}
function Te(a){a=a[Me];return a instanceof Je?a:null}
var Ze="__closure_events_fn_"+(1E9*Math.random()>>>0);function Re(a){if("function"===typeof a)return a;a[Ze]||(a[Ze]=function(b){return a.handleEvent(b)});
return a[Ze]}
;function $e(){I.call(this);this.m=new Je(this);this.W=this;this.L=null}
Xa($e,I);$e.prototype[Fe]=!0;$e.prototype.addEventListener=function(a,b,c,d){Pe(this,a,b,c,d)};
$e.prototype.removeEventListener=function(a,b,c,d){Xe(this,a,b,c,d)};
function af(a,b){var c=a.L;if(c){var d=[];for(var e=1;c;c=c.L)d.push(c),++e}a=a.W;c=b.type||b;"string"===typeof b?b=new xe(b,a):b instanceof xe?b.target=b.target||a:(e=b,b=new xe(c,a),wb(b,e));e=!0;if(d)for(var f=d.length-1;!b.l&&0<=f;f--){var g=b.i=d[f];e=bf(g,c,!0,b)&&e}b.l||(g=b.i=a,e=bf(g,c,!0,b)&&e,b.l||(e=bf(g,c,!1,b)&&e));if(d)for(f=0;!b.l&&f<d.length;f++)g=b.i=d[f],e=bf(g,c,!1,b)&&e}
$e.prototype.I=function(){$e.Y.I.call(this);if(this.m){var a=this.m,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Ie(d[e]);delete a.listeners[c];a.i--}}this.L=null};
$e.prototype.U=function(a,b,c,d){return this.m.add(String(a),b,!1,c,d)};
function bf(a,b,c,d){b=a.m.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Aa&&g.capture==c){var h=g.listener,k=g.Oa||g.src;g.Ka&&Le(a.m,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function cf(a){$e.call(this);var b=this;this.A=this.l=0;this.T=null!=a?a:{M:function(e,f){return setTimeout(e,f)},
S:function(e){clearTimeout(e)}};
var c,d;this.j=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.o=function(){return w(function(e){return u(e,df(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.A||ef(this)}
r(cf,$e);function ff(){var a=gf;cf.i||(cf.i=new cf(a));return cf.i}
cf.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.T.S(this.A);delete cf.i};
cf.prototype.H=function(){return this.j};
function ef(a){a.A=a.T.M(function(){var b;return w(function(c){if(1==c.i)return a.j?(null==(b=window.navigator)?0:b.onLine)?c.u(3):u(c,df(a),3):u(c,df(a),3);ef(a);c.i=0})},3E4)}
function df(a,b){return a.v?a.v:a.v=new Promise(function(c){var d,e,f,g;return w(function(h){switch(h.i){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,wa(h,2,3),d&&(a.l=a.T.M(function(){d.abort()},b||2E4)),u(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:za(h);a.v=void 0;a.l&&(a.T.S(a.l),a.l=0);g!==a.j&&(a.j=g,a.j?af(a,"networkstatus-online"):af(a,"networkstatus-offline"));c(g);Aa(h);break;case 2:ya(h),g=!1,h.u(3)}})})}
;var hf={Xg:"EMBEDDED_PLAYER_MODE_UNKNOWN",Ug:"EMBEDDED_PLAYER_MODE_DEFAULT",Wg:"EMBEDDED_PLAYER_MODE_PFP",Vg:"EMBEDDED_PLAYER_MODE_PFL"},jf={Wo:"WEB_DISPLAY_MODE_UNKNOWN",So:"WEB_DISPLAY_MODE_BROWSER",Uo:"WEB_DISPLAY_MODE_MINIMAL_UI",Vo:"WEB_DISPLAY_MODE_STANDALONE",To:"WEB_DISPLAY_MODE_FULLSCREEN"};function kf(){this.data_=[];this.i=-1}
kf.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.i=-1)};
kf.prototype.get=function(a){return!!this.data_[a]};
function lf(a){-1===a.i&&(a.i=gb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.i}
;function mf(a,b){this.l=a;this.m=b;this.j=0;this.i=null}
mf.prototype.get=function(){if(0<this.j){this.j--;var a=this.i;this.i=a.next;a.next=null}else a=this.l();return a};
function nf(a,b){a.m(b);100>a.j&&(a.j++,b.next=a.i,a.i=b)}
;var of;function pf(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!B("Presto")&&(a=function(){var e=Ud("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Va(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!B("Trident")&&!B("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.qb;c.qb=null;e()}};
return function(e){d.next={qb:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function qf(){this.j=this.i=null}
qf.prototype.add=function(a,b){var c=rf.get();c.set(a,b);this.j?this.j.next=c:this.i=c;this.j=c};
qf.prototype.remove=function(){var a=null;this.i&&(a=this.i,this.i=this.i.next,this.i||(this.j=null),a.next=null);return a};
var rf=new mf(function(){return new sf},function(a){return a.reset()});
function sf(){this.next=this.scope=this.i=null}
sf.prototype.set=function(a,b){this.i=a;this.scope=b;this.next=null};
sf.prototype.reset=function(){this.next=this.scope=this.i=null};var tf,uf=!1,vf=new qf;function wf(a,b){tf||xf();uf||(tf(),uf=!0);vf.add(a,b)}
function xf(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);tf=function(){a.then(yf)}}else tf=function(){var b=yf;
"function"!==typeof y.setImmediate||y.Window&&y.Window.prototype&&!B("Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(of||(of=pf()),of(b)):y.setImmediate(b)}}
function yf(){for(var a;a=vf.remove();){try{a.i.call(a.scope)}catch(b){id(b)}nf(rf,a)}uf=!1}
;function zf(a,b){this.i=a[y.Symbol.iterator]();this.j=b}
zf.prototype[Symbol.iterator]=function(){return this};
zf.prototype.next=function(){var a=this.i.next();return{value:a.done?void 0:this.j.call(void 0,a.value),done:a.done}};
function Af(a,b){return new zf(a,b)}
;function Bf(){this.blockSize=-1}
;function Cf(){this.blockSize=-1;this.blockSize=64;this.i=[];this.s=[];this.o=[];this.l=[];this.l[0]=128;for(var a=1;a<this.blockSize;++a)this.l[a]=0;this.m=this.j=0;this.reset()}
Xa(Cf,Bf);Cf.prototype.reset=function(){this.i[0]=1732584193;this.i[1]=4023233417;this.i[2]=2562383102;this.i[3]=271733878;this.i[4]=3285377520;this.m=this.j=0};
function Df(a,b,c){c||(c=0);var d=a.o;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.i[0];c=a.i[1];var g=a.i[2],h=a.i[3],k=a.i[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):
(f=c^g^h,m=3395469782);f=(b<<5|b>>>27)+f+k+m+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.i[0]=a.i[0]+b&4294967295;a.i[1]=a.i[1]+c&4294967295;a.i[2]=a.i[2]+g&4294967295;a.i[3]=a.i[3]+h&4294967295;a.i[4]=a.i[4]+k&4294967295}
Cf.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.s,f=this.j;d<b;){if(0==f)for(;d<=c;)Df(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Df(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Df(this,e);f=0;break}}this.j=f;this.m+=b}};
Cf.prototype.digest=function(){var a=[],b=8*this.m;56>this.j?this.update(this.l,56-this.j):this.update(this.l,this.blockSize-(this.j-56));for(var c=this.blockSize-1;56<=c;c--)this.s[c]=b&255,b/=256;Df(this,this.s);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.i[c]>>d&255,++b;return a};function Ef(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Ff(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Gf(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Ef(a).match(/\S+/g)||[],b=0<=cb(a,b));return b}
function Hf(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Gf(a,"inverted-hdpi")&&Ff(a,Array.prototype.filter.call(a.classList?a.classList:Ef(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function If(){}
If.prototype.next=function(){return Jf};
var Jf={done:!0,value:void 0};function Kf(a){return{value:a,done:!1}}
If.prototype.X=function(){return this};function Lf(a){if(a instanceof Mf||a instanceof Nf||a instanceof Of)return a;if("function"==typeof a.next)return new Mf(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Mf(function(){return a[Symbol.iterator]()});
if("function"==typeof a.X)return new Mf(function(){return a.X()});
throw Error("Not an iterator or iterable.");}
function Mf(a){this.j=a}
Mf.prototype.X=function(){return new Nf(this.j())};
Mf.prototype[Symbol.iterator]=function(){return new Of(this.j())};
Mf.prototype.i=function(){return new Of(this.j())};
function Nf(a){this.j=a}
r(Nf,If);Nf.prototype.next=function(){return this.j.next()};
Nf.prototype[Symbol.iterator]=function(){return new Of(this.j)};
Nf.prototype.i=function(){return new Of(this.j)};
function Of(a){Mf.call(this,function(){return a});
this.l=a}
r(Of,Mf);Of.prototype.next=function(){return this.l.next()};function Pf(a,b){this.j={};this.i=[];this.ha=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Pf)for(c=a.bb(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
l=Pf.prototype;l.bb=function(){Qf(this);return this.i.concat()};
l.has=function(a){return Rf(this.j,a)};
l.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Sf;Qf(this);for(var c,d=0;c=this.i[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Sf(a,b){return a===b}
l.isEmpty=function(){return 0==this.size};
l.clear=function(){this.j={};this.ha=this.size=this.i.length=0};
l.remove=function(a){return this.delete(a)};
l.delete=function(a){return Rf(this.j,a)?(delete this.j[a],--this.size,this.ha++,this.i.length>2*this.size&&Qf(this),!0):!1};
function Qf(a){if(a.size!=a.i.length){for(var b=0,c=0;b<a.i.length;){var d=a.i[b];Rf(a.j,d)&&(a.i[c++]=d);b++}a.i.length=c}if(a.size!=a.i.length){var e={};for(c=b=0;b<a.i.length;)d=a.i[b],Rf(e,d)||(a.i[c++]=d,e[d]=1),b++;a.i.length=c}}
l.get=function(a,b){return Rf(this.j,a)?this.j[a]:b};
l.set=function(a,b){Rf(this.j,a)||(this.size+=1,this.i.push(a),this.ha++);this.j[a]=b};
l.forEach=function(a,b){for(var c=this.bb(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
l.clone=function(){return new Pf(this)};
l.keys=function(){return Lf(this.X(!0)).i()};
l.values=function(){return Lf(this.X(!1)).i()};
l.entries=function(){var a=this;return Af(this.keys(),function(b){return[b,a.get(b)]})};
l.X=function(a){Qf(this);var b=0,c=this.ha,d=this,e=new If;e.next=function(){if(c!=d.ha)throw Error("The map has changed since the iterator was created");if(b>=d.i.length)return Jf;var f=d.i[b++];return Kf(a?f:d.j[f])};
return e};
function Rf(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function Tf(a){var b=[];Uf(new Vf,a,b);return b.join("")}
function Vf(){}
function Uf(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Uf(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Wf(d,c),c.push(":"),Uf(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Wf(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Xf={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Yf=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Wf(a,b){b.push('"',a.replace(Yf,function(c){var d=Xf[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Xf[c]=d);return d}),'"')}
;function Zf(a){this.i=0;this.D=void 0;this.m=this.j=this.l=null;this.s=this.o=!1;if(a!=ab)try{var b=this;a.call(void 0,function(c){$f(b,2,c)},function(c){$f(b,3,c)})}catch(c){$f(this,3,c)}}
function ag(){this.next=this.context=this.onRejected=this.j=this.i=null;this.l=!1}
ag.prototype.reset=function(){this.context=this.onRejected=this.j=this.i=null;this.l=!1};
var bg=new mf(function(){return new ag},function(a){a.reset()});
function cg(a,b,c){var d=bg.get();d.j=a;d.onRejected=b;d.context=c;return d}
function dg(a){return new Zf(function(b,c){c(a)})}
Zf.prototype.then=function(a,b,c){return eg(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Zf.prototype.$goog_Thenable=!0;function fg(a,b){return eg(a,null,b)}
Zf.prototype.cancel=function(a){if(0==this.i){var b=new gg(a);wf(function(){jg(this,b)},this)}};
function jg(a,b){if(0==a.i)if(a.l){var c=a.l;if(c.j){for(var d=0,e=null,f=null,g=c.j;g&&(g.l||(d++,g.i==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.i&&1==d?jg(c,b):(f?(d=f,d.next==c.m&&(c.m=d),d.next=d.next.next):kg(c),lg(c,e,3,b)))}a.l=null}else $f(a,3,b)}
function mg(a,b){a.j||2!=a.i&&3!=a.i||ng(a);a.m?a.m.next=b:a.j=b;a.m=b}
function eg(a,b,c,d){var e=cg(null,null,null);e.i=new Zf(function(f,g){e.j=b?function(h){try{var k=b.call(d,h);f(k)}catch(m){g(m)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof gg?g(h):f(k)}catch(m){g(m)}}:g});
e.i.l=a;mg(a,e);return e.i}
Zf.prototype.A=function(a){this.i=0;$f(this,2,a)};
Zf.prototype.L=function(a){this.i=0;$f(this,3,a)};
function $f(a,b,c){if(0==a.i){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.i=1;a:{var d=c,e=a.A,f=a.L;if(d instanceof Zf){mg(d,cg(e||ab,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(m){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Oa(d))try{var k=d.then;if("function"===typeof k){og(d,k,e,f,a);g=!0;break a}}catch(m){f.call(a,m);g=!0;break a}g=!1}}}g||(a.D=c,a.i=b,a.l=null,ng(a),3!=b||c instanceof gg||pg(a,c))}}
function og(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function ng(a){a.o||(a.o=!0,wf(a.v,a))}
function kg(a){var b=null;a.j&&(b=a.j,a.j=b.next,b.next=null);a.j||(a.m=null);return b}
Zf.prototype.v=function(){for(var a;a=kg(this);)lg(this,a,this.i,this.D);this.o=!1};
function lg(a,b,c,d){if(3==c&&b.onRejected&&!b.l)for(;a&&a.s;a=a.l)a.s=!1;if(b.i)b.i.l=null,qg(b,c,d);else try{b.l?b.j.call(b.context):qg(b,c,d)}catch(e){rg.call(null,e)}nf(bg,b)}
function qg(a,b,c){2==b?a.j.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function pg(a,b){a.s=!0;wf(function(){a.s&&rg.call(null,b)})}
var rg=id;function gg(a){Za.call(this,a)}
Xa(gg,Za);gg.prototype.name="cancel";function J(a){I.call(this);this.v=1;this.m=[];this.o=0;this.j=[];this.l={};this.A=!!a}
Xa(J,I);l=J.prototype;l.subscribe=function(a,b,c){var d=this.l[a];d||(d=this.l[a]=[]);var e=this.v;this.j[e]=a;this.j[e+1]=b;this.j[e+2]=c;this.v=e+3;d.push(e);return e};
function sg(a,b,c,d){if(b=a.l[b]){var e=a.j;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.va(b)}}
l.va=function(a){var b=this.j[a];if(b){var c=this.l[b];0!=this.o?(this.m.push(a),this.j[a+1]=function(){}):(c&&ib(c,a),delete this.j[a],delete this.j[a+1],delete this.j[a+2])}return!!b};
l.ia=function(a,b){var c=this.l[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];tg(this.j[g+1],this.j[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f&&!this.i();e++)g=c[e],this.j[g+1].apply(this.j[g+2],d)}finally{if(this.o--,0<this.m.length&&0==this.o)for(;c=this.m.pop();)this.va(c)}}return 0!=e}return!1};
function tg(a,b,c){wf(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.l[a];b&&(b.forEach(this.va,this),delete this.l[a])}else this.j.length=0,this.l={}};
l.I=function(){J.Y.I.call(this);this.clear();this.m.length=0};function ug(a){this.i=a}
ug.prototype.set=function(a,b){void 0===b?this.i.remove(a):this.i.set(a,Tf(b))};
ug.prototype.get=function(a){try{var b=this.i.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
ug.prototype.remove=function(a){this.i.remove(a)};function vg(a){this.i=a}
Xa(vg,ug);function wg(a){this.data=a}
function xg(a){return void 0===a||a instanceof wg?a:new wg(a)}
vg.prototype.set=function(a,b){vg.Y.set.call(this,a,xg(b))};
vg.prototype.j=function(a){a=vg.Y.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
vg.prototype.get=function(a){if(a=this.j(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function yg(a){this.i=a}
Xa(yg,vg);yg.prototype.set=function(a,b,c){if(b=xg(b)){if(c){if(c<Date.now()){yg.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}yg.Y.set.call(this,a,b)};
yg.prototype.j=function(a){var b=yg.Y.j.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())yg.prototype.remove.call(this,a);else return b}};function zg(){}
;function Ag(){}
Xa(Ag,zg);Ag.prototype[Symbol.iterator]=function(){return Lf(this.X(!0)).i()};
Ag.prototype.clear=function(){var a=Array.from(this);a=q(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Bg(a){this.i=a}
Xa(Bg,Ag);l=Bg.prototype;l.isAvailable=function(){if(!this.i)return!1;try{return this.i.setItem("__sak","1"),this.i.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.i.setItem(a,b)}catch(c){if(0==this.i.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.i.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.i.removeItem(a)};
l.X=function(a){var b=0,c=this.i,d=new If;d.next=function(){if(b>=c.length)return Jf;var e=c.key(b++);if(a)return Kf(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Kf(e)};
return d};
l.clear=function(){this.i.clear()};
l.key=function(a){return this.i.key(a)};function Cg(){var a=null;try{a=window.localStorage||null}catch(b){}this.i=a}
Xa(Cg,Bg);function Dg(a,b){this.j=a;this.i=null;var c;if(c=tc)c=!(9<=Number(Gc));if(c){Eg||(Eg=new Pf);this.i=Eg.get(a);this.i||(b?this.i=document.getElementById(b):(this.i=document.createElement("userdata"),this.i.addBehavior("#default#userData"),document.body.appendChild(this.i)),Eg.set(a,this.i));try{this.i.load(this.j)}catch(d){this.i=null}}}
Xa(Dg,Ag);var Fg={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Eg=null;function Gg(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Fg[b]})}
l=Dg.prototype;l.isAvailable=function(){return!!this.i};
l.set=function(a,b){this.i.setAttribute(Gg(a),b);Hg(this)};
l.get=function(a){a=this.i.getAttribute(Gg(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.i.removeAttribute(Gg(a));Hg(this)};
l.X=function(a){var b=0,c=this.i.XMLDocument.documentElement.attributes,d=new If;d.next=function(){if(b>=c.length)return Jf;var e=c[b++];if(a)return Kf(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Kf(e)};
return d};
l.clear=function(){for(var a=this.i.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Hg(this)};
function Hg(a){try{a.i.save(a.j)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Ig(a,b){this.j=a;this.i=b+"::"}
Xa(Ig,Ag);Ig.prototype.set=function(a,b){this.j.set(this.i+a,b)};
Ig.prototype.get=function(a){return this.j.get(this.i+a)};
Ig.prototype.remove=function(a){this.j.remove(this.i+a)};
Ig.prototype.X=function(a){var b=this.j[Symbol.iterator](),c=this,d=new If;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.i.length)!=c.i;){e=b.next();if(e.done)return e;e=e.value}return Kf(a?e.slice(c.i.length):c.j.get(e))};
return d};function Jg(a){H.call(this,a)}
r(Jg,H);function Kg(a){H.call(this,a)}
r(Kg,H);Kg.prototype.getKey=function(){return td(this,1)};
Kg.prototype.getValue=function(){return td(this,2===wd(this,Lg)?2:-1)};
Kg.prototype.setValue=function(a){return vd(this,2,Lg,a)};
var Lg=[2,3,4,5,6];function Mg(a){H.call(this,a)}
r(Mg,H);function Ng(a){H.call(this,a)}
r(Ng,H);function Og(a){H.call(this,a,-1,Pg)}
r(Og,H);var Pg=[2];function Qg(a){H.call(this,a,-1,Rg)}
r(Qg,H);Qg.prototype.getPlayerType=function(){return td(this,36)};
Qg.prototype.setHomeGroupInfo=function(a){return E(this,Og,81,a)};
var Rg=[9,66,24,32,86,100,101];function Sg(a){H.call(this,a,-1,Tg)}
r(Sg,H);var Tg=[15,26,28];function Ug(a){H.call(this,a)}
r(Ug,H);Ug.prototype.setToken=function(a){return C(this,2,a)};function Vg(a){H.call(this,a,-1,Wg)}
r(Vg,H);Vg.prototype.setSafetyMode=function(a){return C(this,5,a)};
var Wg=[12];function Xg(a){H.call(this,a,-1,Yg)}
r(Xg,H);var Yg=[12];function Zg(a){H.call(this,a,-1,$g)}
r(Zg,H);function ah(a){H.call(this,a)}
r(ah,H);ah.prototype.getKey=function(){return Bd(this,1)};
ah.prototype.getValue=function(){return Bd(this,2)};
ah.prototype.setValue=function(a){return C(this,2,a)};
var $g=[4,5];function bh(a){H.call(this,a)}
r(bh,H);function ch(a){H.call(this,a)}
r(ch,H);var dh=[2,3,4];function eh(a){H.call(this,a)}
r(eh,H);eh.prototype.getMessage=function(){return Bd(this,1)};function fh(a){H.call(this,a)}
r(fh,H);function gh(a){H.call(this,a)}
r(gh,H);function hh(a){H.call(this,a,-1,ih)}
r(hh,H);var ih=[10,17];function jh(a){H.call(this,a)}
r(jh,H);function kh(a){H.call(this,a)}
r(kh,H);kh.prototype.P=function(a){C(this,1,a)};function lh(a){H.call(this,a)}
r(lh,H);function mh(a){H.call(this,a)}
r(mh,H);function nh(a){H.call(this,a)}
r(nh,H);function oh(a){H.call(this,a,-1,ph)}
r(oh,H);oh.prototype.getVideoData=function(){return xd(this,nh,15)};
var ph=[4];function qh(a){H.call(this,a)}
r(qh,H);function rh(a,b){E(a,lh,1,b)}
qh.prototype.P=function(a){C(this,2,a)};
function sh(a){H.call(this,a)}
r(sh,H);function th(a,b){E(a,lh,1,b)}
;function uh(a){H.call(this,a,-1,vh)}
r(uh,H);uh.prototype.P=function(a){C(this,1,a)};
function wh(a,b){E(a,lh,2,b)}
var vh=[3];function xh(a){H.call(this,a)}
r(xh,H);xh.prototype.P=function(a){C(this,1,a)};function yh(a){H.call(this,a)}
r(yh,H);yh.prototype.P=function(a){C(this,1,a)};function zh(a){H.call(this,a)}
r(zh,H);zh.prototype.P=function(a){C(this,1,a)};function Ah(a){H.call(this,a)}
r(Ah,H);Ah.prototype.P=function(a){C(this,1,a)};function Bh(a){H.call(this,a)}
r(Bh,H);function Ch(a){H.call(this,a)}
r(Ch,H);function Dh(a){H.call(this,a,-1,Eh)}
r(Dh,H);function Fh(a,b){return C(a,1,b)}
Dh.prototype.getPlayerType=function(){var a=td(this,7);return null==a?0:a};
Dh.prototype.setVideoId=function(a){return C(this,19,a)};
function Gh(a,b){return C(a,25,b)}
function Hh(a,b){Ad(a,68,Ih,b)}
function Ih(a){H.call(this,a)}
r(Ih,H);Ih.prototype.getId=function(){return Bd(this,2)};
var Eh=[83,68];function Jh(a){H.call(this,a)}
r(Jh,H);function Kh(a){H.call(this,a)}
r(Kh,H);function Lh(a){H.call(this,a)}
r(Lh,H);function Mh(a){H.call(this,a,432)}
r(Mh,H);
var Nh=[23,24,11,6,7,5,2,3,20,21,22,28,32,37,229,241,45,59,225,288,72,73,78,208,156,202,215,74,76,79,80,111,85,91,97,100,102,105,119,126,127,136,146,148,151,157,158,159,163,164,168,176,222,383,177,178,179,411,184,188,189,190,191,193,194,195,196,198,199,200,201,402,320,203,204,205,206,258,259,260,261,209,219,226,227,232,233,234,240,244,247,248,249,251,254,255,270,272,278,291,293,300,304,308,309,310,311,313,314,319,321,323,324,328,330,331,332,334,337,338,340,344,348,350,351,352,353,354,355,356,357,
358,361,363,364,368,369,370,373,374,375,378,380,381,388,389,403,410,412,429,413,414,415,416,417,418,430,423,424,425,426,427,431,117];var Oh={Uh:0,Fh:1,Lh:2,Mh:4,Rh:8,Nh:16,Oh:32,Th:64,Sh:128,Hh:256,Jh:512,Qh:1024,Ih:2048,Kh:4096,Gh:8192,Ph:16384};function Ph(a){H.call(this,a)}
r(Ph,H);function Qh(a){H.call(this,a)}
r(Qh,H);Qh.prototype.setVideoId=function(a){return vd(this,1,Rh,a)};
Qh.prototype.getPlaylistId=function(){return td(this,2===wd(this,Rh)?2:-1)};
var Rh=[1,2];function Sh(a){H.call(this,a,-1,Th)}
r(Sh,H);var Th=[3];function Uh(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Vh=y.window,Wh,Xh,Yh=(null==Vh?void 0:null==(Wh=Vh.yt)?void 0:Wh.config_)||(null==Vh?void 0:null==(Xh=Vh.ytcfg)?void 0:Xh.data_)||{};z("yt.config_",Yh);function Zh(){Uh(Yh,arguments)}
function L(a,b){return a in Yh?Yh[a]:b}
function $h(){var a=Yh.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;function M(a){a=ai(a);return"string"===typeof a&&"false"===a?!1:!!a}
function bi(a,b){a=ai(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function ci(){return L("EXPERIMENTS_TOKEN","")}
function ai(a){var b=L("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:L("EXPERIMENT_FLAGS",{})[a]}
function di(){var a=[],b=L("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=L("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var ei=[];function fi(a){ei.forEach(function(b){return b(a)})}
function gi(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){hi(b)}}:a}
function hi(a,b,c,d){var e=A("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=L("ERRORS",[]),e.push([a,"ERROR",b,c,d]),Zh("ERRORS",e));fi(a)}
function ii(a,b,c,d){var e=A("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=L("ERRORS",[]),e.push([a,"WARNING",b,c,d]),Zh("ERRORS",e))}
;function ji(){var a=ki;A("yt.ads.biscotti.getId_")||z("yt.ads.biscotti.getId_",a)}
function li(a){z("yt.ads.biscotti.lastId_",a)}
;var mi=/^[\w.]*$/,ni={q:!0,search_query:!0};function oi(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=pi(f[0]||""),h=pi(f[1]||"");g in c?Array.isArray(c[g])?jb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(t){var k=t,m=f[0],p=String(oi);k.args=[{key:m,value:f[1],query:a,method:qi==p?"unchanged":p}];ni.hasOwnProperty(m)||ii(k)}}return c}
var qi=String(oi);function ri(a){var b=[];kb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];db(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function si(a){"?"==a.charAt(0)&&(a=a.substr(1));return oi(a,"&")}
function ti(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),si(1<a.length?a[1]:a[0])):{}}
function ui(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=si(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return gc(a,e)+d}
function vi(a){if(!b)var b=window.location.href;var c=bc(1,a),d=cc(a);c&&d?(a=a.match($b),b=b.match($b),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?cc(b)==d&&(Number(bc(4,b))||null)==(Number(bc(4,a))||null):!0;return a}
function pi(a){return a&&a.match(mi)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function wi(a){var b=xi;a=void 0===a?A("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=ce;e.flash="0";a:{try{var f=b.i.top.location.href}catch(ua){f=2;break a}f=f?f===b.j.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Md:g;try{var h=g.history.length}catch(ua){h=0}e.u_his=h;var k;e.u_h=null==(k=Md.screen)?void 0:k.height;var m;e.u_w=null==(m=Md.screen)?void 0:m.width;var p;e.u_ah=null==(p=Md.screen)?void 0:p.availHeight;var t;e.u_aw=
null==(t=Md.screen)?void 0:t.availWidth;var x;e.u_cd=null==(x=Md.screen)?void 0:x.colorDepth}catch(ua){}h=b.i;try{var v=h.screenX;var D=h.screenY}catch(ua){}try{var G=h.outerWidth;var K=h.outerHeight}catch(ua){}try{var N=h.innerWidth;var O=h.innerHeight}catch(ua){}try{var S=h.screenLeft;var ka=h.screenTop}catch(ua){}try{N=h.innerWidth,O=h.innerHeight}catch(ua){}try{var V=h.screen.availWidth;var W=h.screen.availTop}catch(ua){}v=[S,ka,v,D,V,W,G,K,N,O];try{var Pa=(b.i.top||window).document,va="CSS1Compat"==
Pa.compatMode?Pa.documentElement:Pa.body;var F=(new Sd(va.clientWidth,va.clientHeight)).round()}catch(ua){F=new Sd(-12245933,-12245933)}Pa=F;F={};var Ca=void 0===Ca?y:Ca;va=new kf;Ca.SVGElement&&Ca.document.createElementNS&&va.set(0);D=$d();D["allow-top-navigation-by-user-activation"]&&va.set(1);D["allow-popups-to-escape-sandbox"]&&va.set(2);Ca.crypto&&Ca.crypto.subtle&&va.set(3);Ca.TextDecoder&&Ca.TextEncoder&&va.set(4);Ca=lf(va);F.bc=Ca;F.bih=Pa.height;F.biw=Pa.width;F.brdim=v.join();b=b.j;b=(F.vis=
b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,F.wgl=!!Md.WebGLRenderingContext,F);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var xi=new function(){var a=window.document;this.i=window;this.j=a};
z("yt.ads_.signals_.getAdSignalsString",function(a){return ri(wi(a))});Date.now();var yi="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function zi(){if(!yi)return null;var a=yi();return"open"in a?a:null}
function Ai(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Bi(a,b){"function"===typeof a&&(a=gi(a));return window.setTimeout(a,b)}
function Ci(a){window.clearTimeout(a)}
;var Di={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Ei="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(fa(ee)),Fi=!1;
function Gi(a,b){b=void 0===b?{}:b;var c=vi(a),d=M("web_ajax_ignore_global_headers_if_set"),e;for(e in Di){var f=L(Di[e]);M("enable_visitor_header_for_vss")&&"X-Goog-Visitor-Id"===e&&!f&&(f=L("VISITOR_DATA"));!f||!c&&cc(a)||d&&void 0!==b[e]||!M("enable_web_eom_visitor_data")&&"X-Goog-EOM-Visitor-Id"===e||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!cc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!cc(a)){try{var g=
(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!cc(a))b["X-YouTube-Ad-Signals"]=ri(wi());return b}
function Hi(a){var b=window.location.search,c=cc(a);M("debug_handle_relative_url_for_query_forward_killswitch")||c||!vi(a)||(c=document.location.hostname);var d=ac(bc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=si(b),f={};db(Ei,function(g){e[g]&&(f[g]=e[g])});
return ui(a,f||{},!1)}
function Ii(a,b){var c=b.format||"JSON";a=Ji(a,b);var d=Ki(a,b),e=!1,f=Li(a,function(k){if(!e){e=!0;h&&Ci(h);var m=Ai(k),p=null,t=400<=k.status&&500>k.status,x=500<=k.status&&600>k.status;if(m||t||x)p=Mi(a,c,k,b.convertToSafeHtml);if(m)a:if(k&&204==k.status)m=!0;else{switch(c){case "XML":m=0==parseInt(p&&p.return_code,10);break a;case "RAW":m=!0;break a}m=!!p}p=p||{};t=b.context||y;m?b.onSuccess&&b.onSuccess.call(t,k,p):b.onError&&b.onError.call(t,k,p);b.onFinish&&b.onFinish.call(t,k,p)}},b.method,
d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=Bi(function(){e||(e=!0,f.abort(),Ci(h),g.call(b.context||y,f))},d)}return f}
function Ji(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=L("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=ui(a,b||{},!0);return a}
function Ki(a,b){var c=L("XSRF_FIELD_NAME"),d=L("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=L("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||cc(a)&&!b.withCredentials&&cc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=si(e),wb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):fc(e));f=e||f&&!nb(f);!Fi&&f&&"POST"!=b.method&&(Fi=
!0,hi(Error("AJAX request with postData should use POST")));return e}
function Mi(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,ii(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Ni(a):null)e={},db(a.getElementsByTagName("*"),function(g){e[g.tagName]=Oi(g)})}d&&Pi(e);
return e}
function Pi(a){if(Oa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;Bb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=a[b],e=yb();d=e?e.createHTML(d):d;a[c]=new Tb(d)}else Pi(a[b])}}
function Ni(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Oi(a){var b="";db(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Li(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&gi(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=zi();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;M("debug_forward_web_query_parameters")&&(a=Hi(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Gi(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function Qi(a){var b=this;this.i=void 0;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c})}
function Ri(){if(!y.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return y.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":y.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":y.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":y.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Si(a,b,c,d,e){pe.set(""+a,b,{Qa:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function Ti(a){return pe.get(""+a,void 0)}
function Ui(){if(!pe.isEnabled())return!1;if(!pe.isEmpty())return!0;pe.set("TESTCOOKIESENABLED","1",{Qa:60});if("1"!==pe.get("TESTCOOKIESENABLED"))return!1;pe.remove("TESTCOOKIESENABLED");return!0}
;var Vi=A("ytglobal.prefsUserPrefsPrefs_")||{};z("ytglobal.prefsUserPrefsPrefs_",Vi);function Wi(){this.i=L("ALT_PREF_COOKIE_NAME","PREF");this.j=L("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=Ti(this.i);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Vi[d]=c.toString())}}}
Wi.prototype.get=function(a,b){Xi(a);Yi(a);a=void 0!==Vi[a]?Vi[a].toString():null;return null!=a?a:b?b:""};
Wi.prototype.set=function(a,b){Xi(a);Yi(a);if(null==b)throw Error("ExpectedNotNull");Vi[a]=b.toString()};
function Zi(a){return!!(($i("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
Wi.prototype.remove=function(a){Xi(a);Yi(a);delete Vi[a]};
Wi.prototype.clear=function(){for(var a in Vi)delete Vi[a]};
function Yi(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Xi(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function $i(a){a=void 0!==Vi[a]?Vi[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
La(Wi);var aj={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},wj={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},xj={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},yj={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function zj(){var a=y.navigator;return a?a.connection:void 0}
function Aj(){var a=zj();if(a){var b=aj[a.type||"unknown"]||"CONN_UNKNOWN";a=aj[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function Bj(){var a=zj();if(null!=a&&a.effectiveType)return yj.hasOwnProperty(a.effectiveType)?yj[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function Cj(){return"INNERTUBE_API_KEY"in Yh&&"INNERTUBE_API_VERSION"in Yh}
function Dj(){return{innertubeApiKey:L("INNERTUBE_API_KEY"),innertubeApiVersion:L("INNERTUBE_API_VERSION"),eb:L("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),zb:L("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Zb:L("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:L("INNERTUBE_CONTEXT_CLIENT_VERSION"),Bb:L("INNERTUBE_CONTEXT_HL"),Ab:L("INNERTUBE_CONTEXT_GL"),ac:L("INNERTUBE_HOST_OVERRIDE")||"",dc:!!L("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),cc:!!L("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:L("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Ej(a){var b={client:{hl:a.Bb,gl:a.Ab,clientName:a.zb,clientVersion:a.innertubeContextClientVersion,configInfo:a.eb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=y.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=ci();""!==c&&(b.client.experimentsToken=c);c=di();0<c.length&&(b.request={internalExperimentFlags:c});Fj(a,void 0,b);Gj(void 0,b);Hj(a,void 0,b);Ij(void 0,b);L("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(b.user={onBehalfOfUser:L("DELEGATED_SESSION_ID")});
a=Object;c=a.assign;for(var d=b.client,e={},f=q(Object.entries(si(L("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=q(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function Jj(a){var b=new Xg,c=new Qg;C(c,1,a.Bb);C(c,2,a.Ab);C(c,16,a.Zb);C(c,17,a.innertubeContextClientVersion);if(a.eb){var d=a.eb,e=new Mg;d.coldConfigData&&C(e,1,d.coldConfigData);d.appInstallData&&C(e,6,d.appInstallData);d.coldHashData&&C(e,3,d.coldHashData);d.hotHashData&&C(e,5,d.hotHashData);E(c,Mg,62,e)}(d=y.devicePixelRatio)&&1!=d&&C(c,65,d);d=ci();""!==d&&C(c,54,d);d=di();if(0<d.length){e=new Sg;for(var f=0;f<d.length;f++){var g=new Kg;C(g,1,d[f].key);g.setValue(d[f].value);Ad(e,15,Kg,
g)}E(b,Sg,5,e)}Fj(a,c);Gj(c);Hj(a,c);Ij(c);L("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(a=new Vg,C(a,3,L("DELEGATED_SESSION_ID")));a=q(Object.entries(si(L("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=q(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?C(c,12,e):"cmodel"===d?C(c,13,e):"cbr"===d?C(c,87,e):"cbrver"===d?C(c,88,e):"cos"===d?C(c,18,e):"cosver"===d?C(c,19,e):"cplatform"===d&&C(c,42,e);E(b,Qg,1,c);return b}
function Fj(a,b,c){a=a.zb;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=xd(b,Ng,96)||new Ng;var d=Ri();d=Object.keys(jf).indexOf(d);d=-1===d?null:d;null!==d&&C(c,3,d);E(b,Ng,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=Ri())}
function Gj(a,b){var c;if(M("web_log_memory_total_kbytes")&&(null==(c=y.navigator)?0:c.deviceMemory)){var d;c=null==(d=y.navigator)?void 0:d.deviceMemory;a?C(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Hj(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=xd(b,Mg,62))?d:new Mg;C(c,6,a.appInstallData);E(b,Mg,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Ij(a,b){var c=Aj();c&&(a?C(a,61,wj[c]):b&&(b.client.connectionType=c));M("web_log_effective_connection_type")&&(c=Bj())&&(a?C(a,94,xj[c]):b&&(b.client.effectiveConnectionType=c))}
function Kj(a,b,c){c=void 0===c?{}:c;var d={};M("enable_web_eom_visitor_data")&&L("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":L("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||L("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.mp||L("AUTHORIZATION"))||(a?b="Bearer "+A("gapi.auth.getToken")().lp:b=te([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=L("SESSION_INDEX",0),M("pageid_as_header_web")&&(d["X-Goog-PageId"]=L("DELEGATED_SESSION_ID")));return d}
;function Lj(a){a=Object.assign({},a);delete a.Authorization;var b=te();if(b){var c=new Cf;c.update(L("INNERTUBE_API_KEY"));c.update(b);a.hash=Mc(c.digest(),3)}return a}
;function Mj(a){var b=new Cg;(b=b.isAvailable()?a?new Ig(b,a):b:null)||(a=new Dg(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.i=(a=b)?new yg(a):null;this.j=document.domain||window.location.hostname}
Mj.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.i)try{this.i.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Tf(b))}catch(f){return}else e=escape(b);Si(a,e,c,this.j)};
Mj.prototype.get=function(a,b){var c=void 0,d=!this.i;if(!d)try{c=this.i.get(a)}catch(e){d=!0}if(d&&(c=Ti(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Mj.prototype.remove=function(a){this.i&&this.i.remove(a);var b=this.j;pe.remove(""+a,"/",void 0===b?"youtube.com":b)};var Nj=window,P=Nj.ytcsi&&Nj.ytcsi.now?Nj.ytcsi.now:Nj.performance&&Nj.performance.timing&&Nj.performance.now&&Nj.performance.timing.navigationStart?function(){return Nj.performance.timing.navigationStart+Nj.performance.now()}:function(){return(new Date).getTime()};var Oj;function Pj(){Oj||(Oj=new Mj("yt.innertube"));return Oj}
function Qj(a,b,c,d){if(d)return null;d=Pj().get("nextId",!0)||1;var e=Pj().get("requests",!0)||{};e[d]={method:a,request:b,authState:Lj(c),requestTime:Math.round(P())};Pj().set("nextId",d+1,86400,!0);Pj().set("requests",e,86400,!0);return d}
function Rj(a){var b=Pj().get("requests",!0)||{};delete b[a];Pj().set("requests",b,86400,!0)}
function Sj(a){var b=Pj().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(P())-d.requestTime)){var e=d.authState,f=Lj(Kj(!1));qb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(P())),Tj(a,d.method,e,{}));delete b[c]}}Pj().set("requests",b,86400,!0)}}
;function Uj(){}
function Vj(a,b){return Wj(a,0,b)}
Uj.prototype.M=function(a,b){return Wj(a,1,b)};
function Xj(a,b){Wj(a,2,b)}
function Yj(a){var b=A("yt.scheduler.instance.addImmediateJob");b?b(a):a()}
;function Zj(){Uj.apply(this,arguments)}
r(Zj,Uj);function ak(){Zj.i||(Zj.i=new Zj);return Zj.i}
function Wj(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=A("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Bi(a,c||0)}
Zj.prototype.S=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=A("yt.scheduler.instance.cancelJob");b?b(a):Ci(a)}};
Zj.prototype.start=function(){var a=A("yt.scheduler.instance.start");a&&a()};
Zj.prototype.pause=function(){var a=A("yt.scheduler.instance.pause");a&&a()};var gf=ak();var bk=Hc||Ic;function ck(a){var b=Ob();return b?0<=b.toLowerCase().indexOf(a):!1}
;var dk=function(){var a;return function(){a||(a=new Mj("ytidb"));return a}}();
function ek(){var a;return null==(a=dk())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var fk=[],gk,hk=!1;function ik(){var a={};for(gk=new jk(void 0===a.handleError?kk:a.handleError,void 0===a.logEvent?lk:a.logEvent);0<fk.length;)switch(a=fk.shift(),a.type){case "ERROR":gk.handleError(a.payload);break;case "EVENT":gk.logEvent(a.eventType,a.payload)}}
function mk(a){hk||(gk?gk.handleError(a):(fk.push({type:"ERROR",payload:a}),10<fk.length&&fk.shift()))}
function nk(a,b){hk||(gk?gk.logEvent(a,b):(fk.push({type:"EVENT",eventType:a,payload:b}),10<fk.length&&fk.shift()))}
;function Q(a){var b=Ia.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(fa(b))}
r(Q,Error);function ok(){try{return pk(),!0}catch(a){return!1}}
function pk(a){if(void 0!==L("DATASYNC_ID"))return L("DATASYNC_ID");throw new Q("Datasync ID not set",void 0===a?"unknown":a);}
;function qk(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function rk(a){return a.substr(0,a.indexOf(":"))||a}
;var sk={},tk=(sk.AUTH_INVALID="No user identifier specified.",sk.EXPLICIT_ABORT="Transaction was explicitly aborted.",sk.IDB_NOT_SUPPORTED="IndexedDB is not supported.",sk.MISSING_INDEX="Index not created.",sk.MISSING_OBJECT_STORES="Object stores not created.",sk.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",sk.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",sk.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
sk.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",sk.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",sk.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",sk.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",sk),uk={},vk=(uk.AUTH_INVALID="ERROR",uk.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",uk.EXPLICIT_ABORT="IGNORED",uk.IDB_NOT_SUPPORTED="ERROR",uk.MISSING_INDEX=
"WARNING",uk.MISSING_OBJECT_STORES="ERROR",uk.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",uk.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",uk.QUOTA_EXCEEDED="WARNING",uk.QUOTA_MAYBE_EXCEEDED="WARNING",uk.UNKNOWN_ABORT="WARNING",uk.INCOMPATIBLE_DB_VERSION="WARNING",uk),wk={},xk=(wk.AUTH_INVALID=!1,wk.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,wk.EXPLICIT_ABORT=!1,wk.IDB_NOT_SUPPORTED=!1,wk.MISSING_INDEX=!1,wk.MISSING_OBJECT_STORES=!1,wk.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,wk.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,wk.QUOTA_EXCEEDED=!1,wk.QUOTA_MAYBE_EXCEEDED=!0,wk.UNKNOWN_ABORT=!0,wk.INCOMPATIBLE_DB_VERSION=!1,wk);function yk(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?tk[a]:c;d=void 0===d?vk[a]:d;e=void 0===e?xk[a]:e;Q.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.i=e;Object.setPrototypeOf(this,yk.prototype)}
r(yk,Q);function zk(a,b){yk.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},tk.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,zk.prototype)}
r(zk,yk);function Ak(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Ak.prototype)}
r(Ak,Error);var Bk=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Ck(a,b,c,d){b=rk(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof yk)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new yk("QUOTA_EXCEEDED",a);if(Jc&&"UnknownError"===e.name)return new yk("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Ak)return new yk("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Bk.some(function(f){return e.message.includes(f)}))return new yk("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new yk("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Fb:e.name})];e.level="WARNING";return e}
function Dk(a,b,c){var d=ek();return new yk("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Ek(a){if(!a)throw Error();throw a;}
function Fk(a){return a}
function Gk(a){this.i=a}
function Hk(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=q(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=q(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.i=[];this.onRejected=[];a=a.i;try{a(c,b)}catch(e){b(e)}}
Hk.all=function(a){return new Hk(new Gk(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={na:0};f.na<a.length;f={na:f.na},++f.na)Ik(Hk.resolve(a[f.na]).then(function(g){return function(h){d[g.na]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})}))};
Hk.resolve=function(a){return new Hk(new Gk(function(b,c){a instanceof Hk?a.then(b,c):b(a)}))};
Hk.reject=function(a){return new Hk(new Gk(function(b,c){c(a)}))};
Hk.prototype.then=function(a,b){var c=this,d=null!=a?a:Fk,e=null!=b?b:Ek;return new Hk(new Gk(function(f,g){"PENDING"===c.state.status?(c.i.push(function(){Jk(c,c,d,f,g)}),c.onRejected.push(function(){Kk(c,c,e,f,g)})):"FULFILLED"===c.state.status?Jk(c,c,d,f,g):"REJECTED"===c.state.status&&Kk(c,c,e,f,g)}))};
function Ik(a,b){a.then(void 0,b)}
function Jk(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Hk?Lk(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Kk(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Hk?Lk(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Lk(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Hk?Lk(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Mk(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Nk(a){return new Promise(function(b,c){Mk(a,b,c)})}
function Ok(a){return new Hk(new Gk(function(b,c){Mk(a,b,c)}))}
;function Pk(a,b){return new Hk(new Gk(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function Qk(a,b){this.i=a;this.options=b;this.transactionCount=0;this.l=Math.round(P());this.j=!1}
l=Qk.prototype;l.add=function(a,b,c){return Rk(this,[a],{mode:"readwrite",O:!0},function(d){return d.objectStore(a).add(b,c)})};
l.clear=function(a){return Rk(this,[a],{mode:"readwrite",O:!0},function(b){return b.objectStore(a).clear()})};
l.close=function(){this.i.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
l.count=function(a,b){return Rk(this,[a],{mode:"readonly",O:!0},function(c){return c.objectStore(a).count(b)})};
function Sk(a,b,c){a=a.i.createObjectStore(b,c);return new Tk(a)}
l.delete=function(a,b){return Rk(this,[a],{mode:"readwrite",O:!0},function(c){return c.objectStore(a).delete(b)})};
l.get=function(a,b){return Rk(this,[a],{mode:"readonly",O:!0},function(c){return c.objectStore(a).get(b)})};
function Uk(a,b){return Rk(a,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(c){c=c.objectStore("LogsRequestsStore");return Ok(c.i.put(b,void 0))})}
l.objectStoreNames=function(){return Array.from(this.i.objectStoreNames)};
function Rk(a,b,c,d){var e,f,g,h,k,m,p,t,x,v,D,G;return w(function(K){switch(K.i){case 1:var N={mode:"readonly",O:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?N.mode=c:Object.assign(N,c);e=N;a.transactionCount++;f=e.O?3:1;g=0;case 2:if(h){K.u(3);break}g++;k=Math.round(P());wa(K,4);m=a.i.transaction(b,e.mode);N=new Vk(m);N=Wk(N,d);return u(K,N,6);case 6:return p=K.j,t=Math.round(P()),Xk(a,k,t,g,void 0,b.join(),e),K.return(p);case 4:x=ya(K);v=Math.round(P());D=Ck(x,a.i.name,b.join(),a.i.version);
if((G=D instanceof yk&&!D.i)||g>=f)Xk(a,k,v,g,D,b.join(),e),h=D;K.u(2);break;case 3:return K.return(Promise.reject(h))}})}
function Xk(a,b,c,d,e,f,g){b=c-b;e?(e instanceof yk&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&nk("QUOTA_EXCEEDED",{dbName:rk(a.i.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof yk&&"UNKNOWN_ABORT"===e.type&&(c-=a.l,0>c&&c>=Math.pow(2,31)&&(c=0),nk("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.j=!0),Yk(a,!1,d,f,b,g.tag),mk(e)):Yk(a,!0,d,f,b,g.tag)}
function Yk(a,b,c,d,e,f){nk("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.j,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
l.getName=function(){return this.i.name};
function Tk(a){this.i=a}
l=Tk.prototype;l.add=function(a,b){return Ok(this.i.add(a,b))};
l.autoIncrement=function(){return this.i.autoIncrement};
l.clear=function(){return Ok(this.i.clear()).then(function(){})};
l.count=function(a){return Ok(this.i.count(a))};
function Zk(a,b){return $k(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
l.delete=function(a){return a instanceof IDBKeyRange?Zk(this,a):Ok(this.i.delete(a))};
l.get=function(a){return Ok(this.i.get(a))};
l.index=function(a){try{return new al(this.i.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Ak(a,this.i.name);throw b;}};
l.getName=function(){return this.i.name};
l.keyPath=function(){return this.i.keyPath};
function $k(a,b,c){a=a.i.openCursor(b.query,b.direction);return bl(a).then(function(d){return Pk(d,c)})}
function Vk(a){var b=this;this.i=a;this.l=new Map;this.j=!1;this.done=new Promise(function(c,d){b.i.addEventListener("complete",function(){c()});
b.i.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.i.error)});
b.i.addEventListener("abort",function(){var e=b.i.error;if(e)d(e);else if(!b.j){e=yk;for(var f=b.i.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.i.db.name,mode:b.i.mode});d(e)}})})}
function Wk(a,b){var c=new Promise(function(d,e){try{Ik(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return q(d).next().value})}
Vk.prototype.abort=function(){this.i.abort();this.j=!0;throw new yk("EXPLICIT_ABORT");};
Vk.prototype.objectStore=function(a){a=this.i.objectStore(a);var b=this.l.get(a);b||(b=new Tk(a),this.l.set(a,b));return b};
function al(a){this.i=a}
l=al.prototype;l.count=function(a){return Ok(this.i.count(a))};
l.delete=function(a){return cl(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
l.get=function(a){return Ok(this.i.get(a))};
l.getKey=function(a){return Ok(this.i.getKey(a))};
l.keyPath=function(){return this.i.keyPath};
l.unique=function(){return this.i.unique};
function cl(a,b,c){a=a.i.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return bl(a).then(function(d){return Pk(d,c)})}
function dl(a,b){this.request=a;this.cursor=b}
function bl(a){return Ok(a).then(function(b){return b?new dl(a,b):null})}
l=dl.prototype;l.advance=function(a){this.cursor.advance(a);return bl(this.request)};
l.continue=function(a){this.cursor.continue(a);return bl(this.request)};
l.delete=function(){return Ok(this.cursor.delete()).then(function(){})};
l.getKey=function(){return this.cursor.key};
l.getValue=function(){return this.cursor.value};
l.update=function(a){return Ok(this.cursor.update(a))};function el(a,b,c){return new Promise(function(d,e){function f(){x||(x=new Qk(g.result,{closed:t}));return x}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,m=c.Dc,p=c.upgrade,t=c.closed,x;g.addEventListener("upgradeneeded",function(v){try{if(null===v.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");v.dataLoss&&"none"!==v.dataLoss&&nk("IDB_DATA_CORRUPTED",{reason:v.dataLossMessage||"unknown reason",dbName:rk(a)});var D=f(),G=new Vk(g.transaction);
p&&p(D,function(K){return v.oldVersion<K&&v.newVersion>=K},G);
G.done.catch(function(K){e(K)})}catch(K){e(K)}});
g.addEventListener("success",function(){var v=g.result;k&&v.addEventListener("versionchange",function(){k(f())});
v.addEventListener("close",function(){nk("IDB_UNEXPECTEDLY_CLOSED",{dbName:rk(a),dbVersion:v.version});m&&m()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function fl(a,b,c){c=void 0===c?{}:c;return el(a,b,c)}
function gl(a,b){b=void 0===b?{}:b;var c,d,e,f;return w(function(g){if(1==g.i)return wa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.blocked)&&c.addEventListener("blocked",function(){e()}),u(g,Nk(c),4);
if(2!=g.i)return xa(g,0);f=ya(g);throw Ck(f,a,"",-1);})}
;function hl(a){return new Promise(function(b){Xj(function(){b()},a)})}
function il(a,b){this.name=a;this.options=b;this.m=!0;this.o=this.s=0;this.j=500}
il.prototype.l=function(a,b,c){c=void 0===c?{}:c;return fl(a,b,c)};
il.prototype.delete=function(a){a=void 0===a?{}:a;return gl(this.name,a)};
function jl(a,b){return new yk("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function kl(a,b){if(!b)throw Dk("openWithToken",rk(a.name));return ll(a)}
function ll(a){function b(){var f,g,h,k,m,p,t,x,v,D;return w(function(G){switch(G.i){case 1:return g=null!=(f=Error().stack)?f:"",wa(G,2),u(G,a.l(a.name,a.options.version,d),4);case 4:h=G.j;for(var K=a.options,N=[],O=q(Object.keys(K.za)),S=O.next();!S.done;S=O.next()){S=S.value;var ka=K.za[S],V=void 0===ka.mc?Number.MAX_VALUE:ka.mc;!(h.i.version>=ka.Xa)||h.i.version>=V||h.i.objectStoreNames.contains(S)||N.push(S)}k=N;if(0===k.length){G.u(5);break}m=Object.keys(a.options.za);p=h.objectStoreNames();
if(a.o<bi("ytidb_reopen_db_retries",0))return a.o++,h.close(),mk(new yk("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:m,foundObjectStores:p})),G.return(b());if(!(a.s<bi("ytidb_remake_db_retries",1))){G.u(6);break}a.s++;if(!M("ytidb_remake_db_enable_backoff_delay")){G.u(7);break}return u(G,hl(a.j),8);case 8:a.j*=2;case 7:return u(G,a.delete(),9);case 9:return mk(new yk("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:m,foundObjectStores:p})),G.return(b());
case 6:throw new zk(p,m);case 5:return G.return(h);case 2:t=ya(G);if(t instanceof DOMException?"VersionError"!==t.name:"DOMError"in self&&t instanceof DOMError?"VersionError"!==t.name:!(t instanceof Object&&"message"in t)||"An attempt was made to open a database using a lower version than the existing version."!==t.message){G.u(10);break}return u(G,a.l(a.name,void 0,Object.assign({},d,{upgrade:void 0})),11);case 11:x=G.j;v=x.i.version;if(void 0!==a.options.version&&v>a.options.version+1)throw x.close(),
a.m=!1,jl(a,v);return G.return(x);case 10:throw c(),t instanceof Error&&!M("ytidb_async_stack_killswitch")&&(t.stack=t.stack+"\n"+g.substring(g.indexOf("\n")+1)),Ck(t,a.name,"",null!=(D=a.options.version)?D:-1);}})}
function c(){a.i===e&&(a.i=void 0)}
if(!a.m)throw jl(a);if(a.i)return a.i;var d={blocking:function(f){f.close()},
closed:c,Dc:c,upgrade:a.options.upgrade};var e=b();a.i=e;return a.i}
;var ml=new il("YtIdbMeta",{za:{databases:{Xa:1}},upgrade:function(a,b){b(1)&&Sk(a,"databases",{keyPath:"actualName"})}});
function nl(a,b){var c;return w(function(d){if(1==d.i)return u(d,kl(ml,b),2);c=d.j;return d.return(Rk(c,["databases"],{O:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Ok(f.i.put(a,void 0)).then(function(){})})}))})}
function ol(a,b){var c;return w(function(d){if(1==d.i)return a?u(d,kl(ml,b),2):d.return();c=d.j;return d.return(c.delete("databases",a))})}
function pl(a,b){var c,d;return w(function(e){return 1==e.i?(c=[],u(e,kl(ml,b),2)):3!=e.i?(d=e.j,u(e,Rk(d,["databases"],{O:!0,mode:"readonly"},function(f){c.length=0;return $k(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function ql(a){return pl(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function rl(a,b,c){return pl(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function sl(a){var b,c;return w(function(d){if(1==d.i)return b=pk("YtIdbMeta hasAnyMeta other"),u(d,pl(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.j;return d.return(0<c.length)})}
;var tl,ul=new function(){}(new function(){});
function vl(){var a,b,c,d;return w(function(e){switch(e.i){case 1:a=ek();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=bk)f=/WebKit\/([0-9]+)/.exec(Ob()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Ob()),f=!(f&&602<=parseInt(f[1],10)));if(f||uc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
wa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return u(e,nl(d,ul),4);case 4:return u(e,ol("yt-idb-test-do-not-use",ul),5);case 5:return e.return(!0);case 2:return ya(e),e.return(!1)}})}
function wl(){if(void 0!==tl)return tl;hk=!0;return tl=vl().then(function(a){hk=!1;var b;if(null!=(b=dk())&&b.i){var c;b={hasSucceededOnce:(null==(c=ek())?void 0:c.hasSucceededOnce)||a};var d;null==(d=dk())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function xl(){return A("ytglobal.idbToken_")||void 0}
function yl(){var a=xl();return a?Promise.resolve(a):wl().then(function(b){(b=b?ul:void 0)&&z("ytglobal.idbToken_",b);return b})}
;var zl=0;function Al(a,b){zl||(zl=gf.M(function(){var c,d,e,f,g;return w(function(h){switch(h.i){case 1:return u(h,yl(),2);case 2:c=h.j;if(!c)return h.return();d=!0;wa(h,3);return u(h,rl(a,c,b),5);case 5:e=h.j;if(!e.length){d=!1;h.u(6);break}f=e[0];return u(h,gl(f.actualName),7);case 7:return u(h,ol(f.actualName,c),6);case 6:xa(h,4);break;case 3:g=ya(h),mk(g),d=!1;case 4:gf.S(zl),zl=0,d&&Al(a,b),h.i=0}})}))}
function Bl(){var a;return w(function(b){return 1==b.i?u(b,yl(),2):(a=b.j)?b.return(sl(a)):b.return(!1)})}
new Kd;function Cl(a){if(!ok())throw a=new yk("AUTH_INVALID",{dbName:a}),mk(a),a;var b=pk();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Dl(a,b,c,d){var e,f,g,h,k,m;return w(function(p){switch(p.i){case 1:return f=null!=(e=Error().stack)?e:"",u(p,yl(),2);case 2:g=p.j;if(!g)throw h=Dk("openDbImpl",a,b),M("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),mk(h),h;qk(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Cl(a);wa(p,3);return u(p,nl(k,g),5);case 5:return u(p,fl(k.actualName,b,d),6);case 6:return p.return(p.j);case 3:return m=ya(p),wa(p,7),u(p,ol(k.actualName,g),9);case 9:xa(p,
8);break;case 7:ya(p);case 8:throw m;}})}
function El(a,b,c){c=void 0===c?{}:c;return Dl(a,b,!1,c)}
function Fl(a,b,c){c=void 0===c?{}:c;return Dl(a,b,!0,c)}
function Gl(a,b){b=void 0===b?{}:b;var c,d;return w(function(e){if(1==e.i)return u(e,yl(),2);if(3!=e.i){c=e.j;if(!c)return e.return();qk(a);d=Cl(a);return u(e,gl(d.actualName,b),3)}return u(e,ol(d.actualName,c),0)})}
function Hl(a,b,c){a=a.map(function(d){return w(function(e){return 1==e.i?u(e,gl(d.actualName,b),2):u(e,ol(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Il(){var a=void 0===a?{}:a;var b,c;return w(function(d){if(1==d.i)return u(d,yl(),2);if(3!=d.i){b=d.j;if(!b)return d.return();qk("LogsDatabaseV2");return u(d,ql(b),3)}c=d.j;return u(d,Hl(c,a,b),0)})}
function Jl(a,b){b=void 0===b?{}:b;var c;return w(function(d){if(1==d.i)return u(d,yl(),2);if(3!=d.i){c=d.j;if(!c)return d.return();qk(a);return u(d,gl(a,b),3)}return u(d,ol(a,c),0)})}
;function Kl(a){this.Ja=this.i=!1;this.potentialEsfErrorCounter=this.j=0;this.handleError=function(){};
this.ra=function(){};
this.now=Date.now;this.xa=!1;var b;this.Mb=null!=(b=a.Mb)?b:100;var c;this.Kb=null!=(c=a.Kb)?c:1;var d;this.Ib=null!=(d=a.Ib)?d:2592E6;var e;this.Gb=null!=(e=a.Gb)?e:12E4;var f;this.Jb=null!=(f=a.Jb)?f:5E3;var g;this.C=null!=(g=a.C)?g:void 0;this.Na=!!a.Na;var h;this.Ma=null!=(h=a.Ma)?h:.1;var k;this.Sa=null!=(k=a.Sa)?k:10;a.handleError&&(this.handleError=a.handleError);a.ra&&(this.ra=a.ra);a.xa&&(this.xa=a.xa);a.Ja&&(this.Ja=a.Ja);this.F=a.F;this.T=a.T;this.K=a.K;this.J=a.J;this.ba=a.ba;this.jb=
a.jb;this.ib=a.ib;Ll(this)&&(!this.F||this.F("networkless_logging"))&&Ml(this)}
function Ml(a){Ll(a)&&!a.xa&&(a.i=!0,a.Na&&Math.random()<=a.Ma&&a.K.Tb(a.C),Nl(a),a.J.H()&&a.Ca(),a.J.U(a.jb,a.Ca.bind(a)),a.J.U(a.ib,a.pb.bind(a)))}
l=Kl.prototype;l.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(Ll(this)&&this.i){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.K.set(d,this.C).then(function(e){d.id=e;c.J.H()&&Ol(c,d)}).catch(function(e){Ol(c,d);
Pl(c,e)})}else this.ba(a,b)};
l.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(Ll(this)&&this.i){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.F&&this.F("nwl_skip_retry")&&(e.skipRetry=c);if(this.J.H()||this.F&&this.F("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return w(function(k){if(1==k.i)return u(k,d.K.set(e,d.C).catch(function(m){Pl(d,m)}),2);
f(g,h);k.i=0})}}this.ba(a,b,e.skipRetry)}else this.K.set(e,this.C).catch(function(g){d.ba(a,b,e.skipRetry);
Pl(d,g)})}else this.ba(a,b,this.F&&this.F("nwl_skip_retry")&&c)};
l.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(Ll(this)&&this.i){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.K.qa(d.id,c.C):e=!0;c.J.aa&&c.F&&c.F("vss_network_hint")&&c.J.aa(!0);f(g,h)};
this.ba(d.url,d.options);this.K.set(d,this.C).then(function(g){d.id=g;e&&c.K.qa(d.id,c.C)}).catch(function(g){Pl(c,g)})}else this.ba(a,b)};
l.Ca=function(){var a=this;if(!Ll(this))throw Dk("throttleSend");this.j||(this.j=this.T.M(function(){var b;return w(function(c){if(1==c.i)return u(c,a.K.yb("NEW",a.C),2);if(3!=c.i)return b=c.j,b?u(c,Ol(a,b),3):(a.pb(),c.return());a.j&&(a.j=0,a.Ca());c.i=0})},this.Mb))};
l.pb=function(){this.T.S(this.j);this.j=0};
function Ol(a,b){var c,d;return w(function(e){switch(e.i){case 1:if(!Ll(a))throw c=Dk("immediateSend"),c;if(void 0===b.id){e.u(2);break}return u(e,a.K.ec(b.id,a.C),3);case 3:(d=e.j)?b=d:a.ra(Error("The request cannot be found in the database."));case 2:if(Ql(a,b,a.Ib)){e.u(4);break}a.ra(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.u(5);break}return u(e,a.K.qa(b.id,a.C),5);case 5:return e.return();case 4:b.skipRetry||(b=Rl(a,b));if(!b){e.u(0);break}if(!b.skipRetry||
void 0===b.id){e.u(8);break}return u(e,a.K.qa(b.id,a.C),8);case 8:a.ba(b.url,b.options,!!b.skipRetry),e.i=0}})}
function Rl(a,b){if(!Ll(a))throw Dk("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k;return w(function(m){switch(m.i){case 1:g=Sl(f);if(!(a.F&&a.F("nwl_consider_error_code")&&g||a.F&&!a.F("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Sa)){m.u(2);break}if(!a.J.ca){m.u(3);break}return u(m,a.J.ca(),3);case 3:if(a.J.H()){m.u(2);break}c(e,f);if(!a.F||!a.F("nwl_consider_error_code")||void 0===(null==(h=b)?void 0:h.id)){m.u(6);break}return u(m,a.K.kb(b.id,a.C,!1),6);case 6:return m.return();case 2:if(a.F&&a.F("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.Sa)return m.return();a.potentialEsfErrorCounter++;if(void 0===(null==(k=b)?void 0:k.id)){m.u(8);break}return b.sendCount<a.Kb?u(m,a.K.kb(b.id,a.C),12):u(m,a.K.qa(b.id,a.C),8);case 12:a.T.M(function(){a.J.H()&&a.Ca()},a.Jb);
case 8:c(e,f),m.i=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return w(function(h){if(1==h.i)return void 0===(null==(g=b)?void 0:g.id)?h.u(2):u(h,a.K.qa(b.id,a.C),2);a.J.aa&&a.F&&a.F("vss_network_hint")&&a.J.aa(!0);d(e,f);h.i=0})};
return b}
function Ql(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Nl(a){if(!Ll(a))throw Dk("retryQueuedRequests");a.K.yb("QUEUED",a.C).then(function(b){b&&!Ql(a,b,a.Gb)?a.T.M(function(){return w(function(c){if(1==c.i)return void 0===b.id?c.u(2):u(c,a.K.kb(b.id,a.C),2);Nl(a);c.i=0})}):a.J.H()&&a.Ca()})}
function Pl(a,b){a.Ob&&!a.J.H()?a.Ob(b):a.handleError(b)}
function Ll(a){return!!a.C||a.Ja}
function Sl(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;function Tl(a,b){this.version=a;this.args=b}
;function Ul(a,b){this.topic=a;this.i=b}
Ul.prototype.toString=function(){return this.topic};var Vl=A("ytPubsub2Pubsub2Instance")||new J;J.prototype.subscribe=J.prototype.subscribe;J.prototype.unsubscribeByKey=J.prototype.va;J.prototype.publish=J.prototype.ia;J.prototype.clear=J.prototype.clear;z("ytPubsub2Pubsub2Instance",Vl);var Wl=A("ytPubsub2Pubsub2SubscribedKeys")||{};z("ytPubsub2Pubsub2SubscribedKeys",Wl);var Xl=A("ytPubsub2Pubsub2TopicToKeys")||{};z("ytPubsub2Pubsub2TopicToKeys",Xl);var Yl=A("ytPubsub2Pubsub2IsAsync")||{};z("ytPubsub2Pubsub2IsAsync",Yl);
z("ytPubsub2Pubsub2SkipSubKey",null);function Zl(a,b){var c=$l();c&&c.publish.call(c,a.toString(),a,b)}
function am(a){var b=bm,c=$l();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=A("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Wl[d])try{if(f&&b instanceof Ul&&b!=e)try{var h=b.i,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.ha){var m=new h;h.ha=m.version}var p=h.ha}catch(K){}if(!p||k.version!=p)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{p=Reflect;var t=p.construct;
var x=k.args,v=x.length;if(0<v){var D=Array(v);for(k=0;k<v;k++)D[k]=x[k];var G=D}else G=[];f=t.call(p,h,G)}catch(K){throw K.message="yt.pubsub2.Data.deserialize(): "+K.message,K;}}catch(K){throw K.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+K.message,K;}a.call(window,f)}catch(K){hi(K)}},Yl[b.toString()]?A("yt.scheduler.instance")?gf.M(g):Bi(g,0):g())});
Wl[d]=!0;Xl[b.toString()]||(Xl[b.toString()]=[]);Xl[b.toString()].push(d);return d}
function cm(){var a=dm,b=am(function(c){a.apply(void 0,arguments);em(b)});
return b}
function em(a){var b=$l();b&&("number"===typeof a&&(a=[a]),db(a,function(c){b.unsubscribeByKey(c);delete Wl[c]}))}
function $l(){return A("ytPubsub2Pubsub2Instance")}
;function fm(a,b){il.call(this,a,b);this.options=b;qk(a)}
r(fm,il);function gm(a,b){var c;return function(){c||(c=new fm(a,b));return c}}
fm.prototype.l=function(a,b,c){c=void 0===c?{}:c;return(this.options.lb?Fl:El)(a,b,Object.assign({},c))};
fm.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.lb?Jl:Gl)(this.name,a)};
function hm(a,b){return gm(a,b)}
;var im;
function jm(){if(im)return im();var a={};im=hm("LogsDatabaseV2",{za:(a.LogsRequestsStore={Xa:2},a),lb:!1,upgrade:function(b,c,d){c(2)&&Sk(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.i.indexNames.contains("newRequest")&&d.i.deleteIndex("newRequest"),d.i.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.i.objectStoreNames.contains("sapisid")&&b.i.deleteObjectStore("sapisid");c(9)&&b.i.objectStoreNames.contains("SWHealthLog")&&b.i.deleteObjectStore("SWHealthLog")},
version:9});return im()}
;function km(a){return kl(jm(),a)}
function lm(a,b){var c,d,e,f;return w(function(g){if(1==g.i)return c={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},u(g,km(b),2);if(3!=g.i)return d=g.j,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:L("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),u(g,Uk(d,e),3);f=g.j;c.Ec=P();mm(c);return g.return(f)})}
function nm(a,b){var c,d,e,f,g,h,k;return w(function(m){if(1==m.i)return c={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},u(m,km(b),2);if(3!=m.i)return d=m.j,e=L("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,P()],h=IDBKeyRange.bound(f,g),k=void 0,u(m,Rk(d,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(p){return cl(p.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(t){t.getValue()&&(k=t.getValue(),"NEW"===a&&(k.status="QUEUED",
t.update(k)))})}),3);
c.Ec=P();mm(c);return m.return(k)})}
function om(a,b){var c;return w(function(d){if(1==d.i)return u(d,km(b),2);c=d.j;return d.return(Rk(c,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Ok(f.i.put(g,void 0)).then(function(){return g})})}))})}
function pm(a,b,c){c=void 0===c?!0:c;var d;return w(function(e){if(1==e.i)return u(e,km(b),2);d=e.j;return e.return(Rk(d,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),Ok(g.i.put(h,void 0)).then(function(){return h})):Hk.resolve(void 0)})}))})}
function qm(a,b){var c;return w(function(d){if(1==d.i)return u(d,km(b),2);c=d.j;return d.return(c.delete("LogsRequestsStore",a))})}
function rm(a){var b,c;return w(function(d){if(1==d.i)return u(d,km(a),2);b=d.j;c=P()-2592E6;return u(d,Rk(b,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(e){return $k(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function sm(){return w(function(a){return u(a,Il(),0)})}
function mm(a){M("nwl_csi_killswitch")||.01>=Math.random()&&Zl("nwl_transaction_latency_payload",a)}
;var tm={},um=hm("ServiceWorkerLogsDatabase",{za:(tm.SWHealthLog={Xa:1},tm),lb:!0,upgrade:function(a,b){b(1)&&Sk(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).i.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function vm(a){return kl(um(),a)}
function wm(a){var b,c;return w(function(d){if(1==d.i)return u(d,vm(a),2);b=d.j;c=P()-2592E6;return u(d,Rk(b,["SWHealthLog"],{mode:"readwrite",O:!0},function(e){return $k(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function xm(a){var b;return w(function(c){if(1==c.i)return u(c,vm(a),2);b=c.j;return u(c,b.clear("SWHealthLog"),0)})}
;var ym={},zm=0;
function Am(a){var b=void 0===b?"":b;var c=void 0===c?!1:c;if(a)if(b)Li(a,void 0,"POST",b);else if(L("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))Li(a,void 0,"GET","",void 0,void 0,c);else{b:{try{var d=new $a({url:a});if(d.l&&d.j||d.m){var e=ac(bc(5,a)),f;if(!(f=!e||!e.endsWith("/aclk"))){var g=a.search(ic),h=hc(a,0,"ri",g);if(0>h)var k=null;else{var m=a.indexOf("&",h);if(0>m||m>g)m=g;k=decodeURIComponent(a.slice(h+3,-1!==m?m:0).replace(/\+/g," "))}f="1"!==k}var p=!f;break b}}catch(x){}p=!1}if(p){b:{try{if(window.navigator&&
window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var t=!0;break b}}catch(x){}t=!1}b=t?!0:!1}else b=!1;b||Bm(a)}}
function Bm(a){var b=new Image,c=""+zm++;ym[c]=b;b.onload=b.onerror=function(){delete ym[c]};
b.src=a}
;function Cm(){this.i=new Map;this.j=!1}
function Dm(){if(!Cm.i){var a=A("yt.networkRequestMonitor.instance")||new Cm;z("yt.networkRequestMonitor.instance",a);Cm.i=a}return Cm.i}
Cm.prototype.requestComplete=function(a,b){b&&(this.j=!0);a=this.removeParams(a);this.i.get(a)||this.i.set(a,b)};
Cm.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.i.get(a))?!1:!1===a&&this.j?!0:null};
Cm.prototype.removeParams=function(a){return a.split("?")[0]};
Cm.prototype.removeParams=Cm.prototype.removeParams;Cm.prototype.isEndpointCFR=Cm.prototype.isEndpointCFR;Cm.prototype.requestComplete=Cm.prototype.requestComplete;Cm.getInstance=Dm;var Em;function Fm(){Em||(Em=new Mj("yt.offline"));return Em}
function Gm(a){if(M("offline_error_handling")){var b=Fm().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Fm().set("errors",b,2592E3,!0)}}
function Hm(){if(M("offline_error_handling")){var a=Fm().get("errors",!0);if(a){for(var b in a)if(a[b]){var c=new Q(b,"sent via offline_errors");c.name=a[b].name;c.stack=a[b].stack;c.level=a[b].level;hi(c)}Fm().set("errors",{},2592E3,!0)}}}
;var Im=bi("network_polling_interval",3E4);function Jm(){$e.call(this);var a=this;this.R=0;this.A=this.o=!1;this.l=this.cb();M("use_shared_nsm")?(this.j=ff(),M("use_shared_nsm_and_keep_yt_online_updated")&&(this.j.U("networkstatus-online",function(){a.l=!0;a.A&&Hm()}),this.j.U("networkstatus-offline",function(){a.l=!1}))):(Km(this),Lm(this))}
r(Jm,$e);function Mm(){if(!Jm.i){var a=A("yt.networkStatusManager.instance")||new Jm;z("yt.networkStatusManager.instance",a);Jm.i=a}return Jm.i}
l=Jm.prototype;l.H=function(){if(M("use_shared_nsm")&&this.j){var a;return null==(a=this.j)?void 0:a.H()}return this.l};
l.aa=function(a){if(M("use_shared_nsm")&&this.j){var b;null!=(b=this.j)&&(b.j=a)}else a!==this.l&&(this.l=a)};
l.fc=function(a){!M("use_shared_nsm")&&(this.o=!0,void 0===a?0:a)&&(this.R||Nm(this))};
l.cb=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
l.Wb=function(){this.A=!0};
l.U=function(a,b){return M("use_shared_nsm")&&this.j?this.j.U(a,b):$e.prototype.U.call(this,a,b)};
function Lm(a){window.addEventListener("online",function(){return w(function(b){if(1==b.i)return u(b,a.ca(),2);a.A&&Hm();b.i=0})})}
function Km(a){window.addEventListener("offline",function(){return w(function(b){return u(b,a.ca(),0)})})}
function Nm(a){a.R=Vj(function(){return w(function(b){if(1==b.i)return a.l?a.cb()||!a.o?b.u(3):u(b,a.ca(),3):u(b,a.ca(),3);Nm(a);b.i=0})},Im)}
l.ca=function(a){var b=this;if(M("use_shared_nsm")&&this.j){var c=df(this.j,a);c.then(function(d){M("use_cfr_monitor")&&Dm().requestComplete("generate_204",d)});
return c}return this.v?this.v:this.v=new Promise(function(d){var e,f,g,h;return w(function(k){switch(k.i){case 1:return e=window.AbortController?new window.AbortController:void 0,g=null==(f=e)?void 0:f.signal,h=!1,wa(k,2,3),e&&(b.N=gf.M(function(){e.abort()},a||2E4)),u(k,fetch("/generate_204",{method:"HEAD",
signal:g}),5);case 5:h=!0;case 3:za(k);M("use_cfr_monitor")&&Dm().requestComplete("generate_204",h);b.v=void 0;b.N&&gf.S(b.N);h!==b.l&&(b.l=h,b.l&&b.o?af(b,"ytnetworkstatus-online"):b.o&&af(b,"ytnetworkstatus-offline"));d(h);Aa(k);break;case 2:ya(k),h=!1,k.u(3)}})})};
Jm.prototype.sendNetworkCheckRequest=Jm.prototype.ca;Jm.prototype.listen=Jm.prototype.U;Jm.prototype.enableErrorFlushing=Jm.prototype.Wb;Jm.prototype.getWindowStatus=Jm.prototype.cb;Jm.prototype.monitorNetworkStatusChange=Jm.prototype.fc;Jm.prototype.networkStatusHint=Jm.prototype.aa;Jm.prototype.isNetworkAvailable=Jm.prototype.H;Jm.getInstance=Mm;function Om(a){a=void 0===a?{}:a;$e.call(this);var b=this;this.l=this.N=0;this.o="ytnetworkstatus-offline";this.v="ytnetworkstatus-online";M("use_shared_nsm")&&(this.o="networkstatus-offline",this.v="networkstatus-online");this.j=Mm();var c=A("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.j);c&&c(a.vb);a.Db&&(c=A("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.j))&&c();if(c=A("yt.networkStatusManager.instance.listen").bind(this.j))a.Ua?(this.Ua=a.Ua,c(this.v,
function(){Pm(b,"publicytnetworkstatus-online")}),c(this.o,function(){Pm(b,"publicytnetworkstatus-offline")})):(c(this.v,function(){af(b,"publicytnetworkstatus-online")}),c(this.o,function(){af(b,"publicytnetworkstatus-offline")}))}
r(Om,$e);Om.prototype.H=function(){var a=A("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
Om.prototype.aa=function(a){var b=A("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Om.prototype.ca=function(a){var b=this,c;return w(function(d){c=A("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return M("skip_network_check_if_cfr")&&Dm().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.aa((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.H())})):c?d.return(c(a)):d.return(!0)})};
function Pm(a,b){a.Ua?a.l?(gf.S(a.N),a.N=gf.M(function(){a.A!==b&&(af(a,b),a.A=b,a.l=P())},a.Ua-(P()-a.l))):(af(a,b),a.A=b,a.l=P()):af(a,b)}
;var Qm;function Rm(){Kl.call(this,{K:{Tb:rm,qa:qm,yb:nm,ec:om,kb:pm,set:lm},J:Sm(),handleError:hi,ra:ii,ba:Tm,now:P,Ob:Gm,T:ak(),jb:"publicytnetworkstatus-online",ib:"publicytnetworkstatus-offline",Na:!0,Ma:.1,Sa:bi("potential_esf_error_limit",10),F:M,xa:!(ok()&&Um())});this.l=new Kd;M("networkless_immediately_drop_all_requests")&&sm();Jl("LogsDatabaseV2")}
r(Rm,Kl);function Vm(){var a=A("yt.networklessRequestController.instance");a||(a=new Rm,z("yt.networklessRequestController.instance",a),M("networkless_logging")&&yl().then(function(b){a.C=b;Ml(a);a.l.resolve();a.Na&&Math.random()<=a.Ma&&a.C&&wm(a.C);M("networkless_immediately_drop_sw_health_store")&&Wm(a)}));
return a}
Rm.prototype.writeThenSend=function(a,b){b||(b={});ok()||(this.i=!1);Kl.prototype.writeThenSend.call(this,a,b)};
Rm.prototype.sendThenWrite=function(a,b,c){b||(b={});ok()||(this.i=!1);Kl.prototype.sendThenWrite.call(this,a,b,c)};
Rm.prototype.sendAndWrite=function(a,b){b||(b={});ok()||(this.i=!1);Kl.prototype.sendAndWrite.call(this,a,b)};
Rm.prototype.awaitInitialization=function(){return this.l.promise};
function Wm(a){var b;w(function(c){if(!a.C)throw b=Dk("clearSWHealthLogsDb"),b;return c.return(xm(a.C).catch(function(d){a.handleError(d)}))})}
function Tm(a,b,c){M("use_cfr_monitor")&&Xm(a,b);var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(P());c&&0===Object.keys(b).length?Am(a):Ii(a,b)}
function Sm(){Qm||(Qm=new Om({Db:!0,vb:!0}));return Qm}
function Xm(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Dm().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Dm().requestComplete(a,!0);d(e,f)}}
function Um(){return"www.youtube-nocookie.com"!==cc(document.location.toString())}
;var Ym=!1,Zm=0,$m=0,an,bn=y.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Ym,potentialEsfErrorCounter:$m};z("ytNetworklessLoggingInitializationOptions",bn);
function cn(){var a;w(function(b){switch(b.i){case 1:return u(b,yl(),2);case 2:a=b.j;if(!a||!ok()&&!M("nwl_init_require_datasync_id_killswitch")||!Um()){b.u(0);break}Ym=!0;bn.isNwlInitialized=Ym;if(!M("use_new_nwl_initialization")){b.u(4);break}return u(b,Vm().awaitInitialization(),5);case 5:return b.return();case 4:return u(b,Jl("LogsDatabaseV2"),6);case 6:if(!(.1>=Math.random())){b.u(7);break}return u(b,rm(a),8);case 8:return u(b,wm(a),7);case 7:dn();en().H()&&fn();en().U("publicytnetworkstatus-online",
fn);en().U("publicytnetworkstatus-offline",gn);if(!M("networkless_immediately_drop_sw_health_store")){b.u(10);break}return u(b,hn(),10);case 10:if(M("networkless_immediately_drop_all_requests"))return u(b,sm(),0);b.u(0)}})}
function jn(a,b){function c(d){var e=en().H();if(!kn()||!d||e&&M("vss_networkless_bypass_write"))ln(a,b);else{var f={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0};lm(f,d).then(function(g){f.id=g;en().H()&&mn(f)}).catch(function(g){mn(f);
en().H()?hi(g):Gm(g)})}}
b=void 0===b?{}:b;M("skip_is_supported_killswitch")?yl().then(function(d){c(d)}):c(xl())}
function nn(a,b){function c(d){if(kn()&&d){var e={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(k,m){M("use_cfr_monitor")&&Dm().requestComplete(e.url,!0);void 0!==e.id?qm(e.id,d):f=!0;M("vss_network_hint")&&en().aa(!0);g(k,m)};
if(M("use_cfr_monitor")){var h=b.onError?b.onError:function(){};
e.options.onError=function(k,m){Dm().requestComplete(e.url,!1);h(k,m)}}ln(e.url,e.options);
lm(e,d).then(function(k){e.id=k;f&&qm(e.id,d)}).catch(function(k){en().H()?hi(k):Gm(k)})}else ln(a,b)}
b=void 0===b?{}:b;M("skip_is_supported_killswitch")?yl().then(function(d){c(d)}):c(xl())}
function fn(){var a=xl();if(!a)throw Dk("throttleSend");Zm||(Zm=gf.M(function(){var b;return w(function(c){if(1==c.i)return u(c,nm("NEW",a),2);if(3!=c.i)return b=c.j,b?u(c,mn(b),3):(gn(),c.return());Zm&&(Zm=0,fn());c.i=0})},100))}
function gn(){gf.S(Zm);Zm=0}
function mn(a){var b,c,d;return w(function(e){switch(e.i){case 1:b=xl();if(!b)throw c=Dk("immediateSend"),c;if(void 0===a.id){e.u(2);break}return u(e,om(a.id,b),3);case 3:(d=e.j)?a=d:ii(Error("The request cannot be found in the database."));case 2:if(on(a,2592E6)){e.u(4);break}ii(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.u(5);break}return u(e,qm(a.id,b),5);case 5:return e.return();case 4:a.skipRetry||(a=pn(a));var f=a,g,h;if(null==f?0:null==(g=f.options)?
0:null==(h=g.postParams)?0:h.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(P());a=f;if(!a){e.u(0);break}if(!a.skipRetry||void 0===a.id){e.u(8);break}return u(e,qm(a.id,b),8);case 8:ln(a.url,a.options,!!a.skipRetry),e.i=0}})}
function pn(a){var b=xl();if(!b)throw Dk("updateRequestHandlers");var c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){var g,h,k;return w(function(m){switch(m.i){case 1:M("use_cfr_monitor")&&Dm().requestComplete(a.url,!1);g=Sl(f);if(!(M("nwl_consider_error_code")&&g||!M("nwl_consider_error_code")&&qn()<=bi("potential_esf_error_limit",10))){m.u(2);break}if(M("skip_checking_network_on_cfr_failure")&&(!M("skip_checking_network_on_cfr_failure")||Dm().isEndpointCFR(a.url))){m.u(3);break}return u(m,en().ca(),3);case 3:if(en().H()){m.u(2);break}c(e,f);if(!M("nwl_consider_error_code")||void 0===
(null==(h=a)?void 0:h.id)){m.u(6);break}return u(m,pm(a.id,b,!1),6);case 6:return m.return();case 2:if(M("nwl_consider_error_code")&&!g&&qn()>bi("potential_esf_error_limit",10))return m.return();A("ytNetworklessLoggingInitializationOptions")&&bn.potentialEsfErrorCounter++;$m++;if(void 0===(null==(k=a)?void 0:k.id)){m.u(8);break}return 1>a.sendCount?u(m,pm(a.id,b),12):u(m,qm(a.id,b),8);case 12:gf.M(function(){en().H()&&fn()},5E3);
case 8:c(e,f),m.i=0}})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){var g;return w(function(h){if(1==h.i)return M("use_cfr_monitor")&&Dm().requestComplete(a.url,!0),void 0===(null==(g=a)?void 0:g.id)?h.u(2):u(h,qm(a.id,b),2);M("vss_network_hint")&&en().aa(!0);d(e,f);h.i=0})};
return a}
function on(a,b){a=a.timestamp;return P()-a>=b?!1:!0}
function dn(){var a=xl();if(!a)throw Dk("retryQueuedRequests");nm("QUEUED",a).then(function(b){b&&!on(b,12E4)?gf.M(function(){return w(function(c){if(1==c.i)return void 0===b.id?c.u(2):u(c,pm(b.id,a),2);dn();c.i=0})}):en().H()&&fn()})}
function hn(){var a,b;return w(function(c){a=xl();if(!a)throw b=Dk("clearSWHealthLogsDb"),b;return c.return(xm(a).catch(function(d){hi(d)}))})}
function en(){if(M("use_new_nwl"))return Sm();an||(an=new Om({Db:!0,vb:!0}));return an}
function ln(a,b,c){c&&0===Object.keys(b).length?Am(a):Ii(a,b)}
function kn(){return A("ytNetworklessLoggingInitializationOptions")?bn.isNwlInitialized:Ym}
function qn(){return A("ytNetworklessLoggingInitializationOptions")?bn.potentialEsfErrorCounter:$m}
;function rn(a){var b=this;this.config_=null;a?this.config_=a:Cj()&&(this.config_=Dj());Vj(function(){Sj(b)},5E3)}
rn.prototype.isReady=function(){!this.config_&&Cj()&&(this.config_=Dj());return!!this.config_};
function Tj(a,b,c,d){function e(D){D=void 0===D?!1:D;var G;if(d.retry&&"www.youtube-nocookie.com"!=h&&(D||M("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(G=Qj(b,c,m,k)),G)){var K=g.onSuccess,N=g.onFetchSuccess;g.onSuccess=function(O,S){Rj(G);K(O,S)};
c.onFetchSuccess=function(O,S){Rj(G);N(O,S)}}try{D&&d.retry&&!d.Eb.bypassNetworkless?(g.method="POST",d.Eb.writeThenSend?M("use_new_nwl_wts")?Vm().writeThenSend(v,g):jn(v,g):M("use_new_nwl_saw")?Vm().sendAndWrite(v,g):nn(v,g)):(g.method="POST",g.postParams||(g.postParams={}),Ii(v,g))}catch(O){if("InvalidAccessError"==O.name)G&&(Rj(G),G=0),ii(Error("An extension is blocking network request."));
else throw O;}G&&Vj(function(){Sj(a)},5E3)}
!L("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&ii(new Q("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Q("innertube xhrclient not ready",b,c,d);hi(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(D,G){if(d.onSuccess)d.onSuccess(G)},
onFetchSuccess:function(D){if(d.onSuccess)d.onSuccess(D)},
onError:function(D,G){if(d.onError)d.onError(G)},
onFetchError:function(D){if(d.onError)d.onError(D)},
timeout:d.timeout,withCredentials:!0};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.ac)&&(h=f);var k=a.config_.dc||!1,m=Kj(k,h,d);Object.assign(g.headers,m);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var p="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,t={alt:"json"},x=a.config_.cc&&f;x=x&&f.startsWith("Bearer");x||(t.key=a.config_.innertubeApiKey);var v=ui(""+h+p,t||{},!0);M("use_new_nwl")&&Vm().i||!M("use_new_nwl")&&
kn()?wl().then(function(D){e(D)}):e(!1)}
;var sn={appSettingsCaptured:!0,visualElementAttached:!0,visualElementGestured:!0,visualElementHidden:!0,visualElementShown:!0,flowEvent:!0,visualElementStateChanged:!0,playbackAssociated:!0,youThere:!0,accountStateChangeSignedIn:!0,accountStateChangeSignedOut:!0},tn={latencyActionBaselined:!0,latencyActionInfo:!0,latencyActionTicked:!0,bedrockRepetitiveActionTimed:!0,adsClientStateChange:!0,streamzIncremented:!0,mdxDialAdditionalDataUpdateEvent:!0,tvhtml5WatchKeyEvent:!0,tvhtml5VideoSeek:!0,tokenRefreshEvent:!0,
adNotify:!0,adNotifyFilled:!0,tvhtml5LaunchUrlComponentChanged:!0,bedrockResourceConsumptionSnapshot:!0,deviceStartupMetrics:!0,mdxSignIn:!0,tvhtml5KeyboardLogging:!0,tvhtml5StartupSoundEvent:!0,tvhtml5LiveChatStatus:!0,tvhtml5DeviceStorageStatus:!0,tvhtml5LocalStorage:!0,directSignInEvent:!0,finalPayload:!0,tvhtml5SearchCompleted:!0,tvhtml5KeyboardPerformance:!0,adNotifyFailure:!0,latencyActionSpan:!0,tvhtml5AccountDialogOpened:!0,tvhtml5ApiTest:!0};var un=0,vn=wc?"webkit":vc?"moz":tc?"ms":pc?"o":"";z("ytDomDomGetNextId",A("ytDomDomGetNextId")||function(){return++un});var wn={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function xn(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in wn||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.i=a.pageX;this.j=a.pageY}}catch(e){}}
function yn(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.i=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.j=a.clientY+b}}
xn.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
xn.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
xn.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var mb=y.ytEventsEventsListeners||{};z("ytEventsEventsListeners",mb);var zn=y.ytEventsEventsCounter||{count:0};z("ytEventsEventsCounter",zn);
function An(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return lb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Oa(e[4])&&Oa(d)&&qb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Bn=bb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Cn(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=An(a,b,c,d);if(e)return e;e=++zn.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new xn(h);if(!Vd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new xn(h);
h.currentTarget=a;return c.call(a,h)};
g=gi(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Bn()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);mb[e]=[a,b,c,g,d];return e}
function Dn(a){a&&("string"==typeof a&&(a=[a]),db(a,function(b){if(b in mb){var c=mb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Bn()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete mb[b]}}))}
;var En=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function Fn(a){this.L=a;this.j=null;this.o=0;this.A=null;this.v=0;this.l=[];for(a=0;4>a;a++)this.l.push(0);this.m=0;this.R=Cn(window,"mousemove",Va(this.W,this));a=Va(this.N,this);"function"===typeof a&&(a=gi(a));this.ea=window.setInterval(a,25)}
Xa(Fn,I);Fn.prototype.W=function(a){void 0===a.i&&yn(a);var b=a.i;void 0===a.j&&yn(a);this.j=new Rd(b,a.j)};
Fn.prototype.N=function(){if(this.j){var a=En();if(0!=this.o){var b=this.A,c=this.j,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.l[this.m]=.5<Math.abs((d-this.v)/this.v)?1:0;for(c=b=0;4>c;c++)b+=this.l[c]||0;3<=b&&this.L();this.v=d}this.o=a;this.A=this.j;this.m=(this.m+1)%4}};
Fn.prototype.I=function(){window.clearInterval(this.ea);Dn(this.R)};var Gn={};
function Hn(a){var b=void 0===a?{}:a;a=void 0===b.jc?!1:b.jc;b=void 0===b.Xb?!0:b.Xb;if(null==A("_lact",window)){var c=parseInt(L("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;z("_lact",c,window);z("_fact",c,window);-1==c&&In();Cn(document,"keydown",In);Cn(document,"keyup",In);Cn(document,"mousedown",In);Cn(document,"mouseup",In);a?Cn(window,"touchmove",function(){Jn("touchmove",200)},{passive:!0}):(Cn(window,"resize",function(){Jn("resize",200)}),b&&Cn(window,"scroll",function(){Jn("scroll",200)}));
new Fn(function(){Jn("mouse",100)});
Cn(document,"touchstart",In,{passive:!0});Cn(document,"touchend",In,{passive:!0})}}
function Jn(a,b){Gn[a]||(Gn[a]=!0,gf.M(function(){In();Gn[a]=!1},b))}
function In(){null==A("_lact",window)&&Hn();var a=Date.now();z("_lact",a,window);-1==A("_fact",window)&&z("_fact",a,window);(a=A("ytglobal.ytUtilActivityCallback_"))&&a()}
function Kn(){var a=A("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var Ln=y.ytPubsubPubsubInstance||new J,Mn=y.ytPubsubPubsubSubscribedKeys||{},Nn=y.ytPubsubPubsubTopicToKeys||{},On=y.ytPubsubPubsubIsSynchronous||{};function Pn(a,b){var c=Qn();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Mn[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{On[a]?f():Bi(f,0)}catch(g){hi(g)}},void 0);
Mn[d]=!0;Nn[a]||(Nn[a]=[]);Nn[a].push(d);return d}return 0}
function Rn(a){var b=Qn();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),db(a,function(c){b.unsubscribeByKey(c);delete Mn[c]}))}
function Sn(a,b){var c=Qn();c&&c.publish.apply(c,arguments)}
function Tn(a){var b=Qn();if(b)if(b.clear(a),a)Un(a);else for(var c in Nn)Un(c)}
function Qn(){return y.ytPubsubPubsubInstance}
function Un(a){Nn[a]&&(a=Nn[a],db(a,function(b){Mn[b]&&delete Mn[b]}),a.length=0)}
J.prototype.subscribe=J.prototype.subscribe;J.prototype.unsubscribeByKey=J.prototype.va;J.prototype.publish=J.prototype.ia;J.prototype.clear=J.prototype.clear;z("ytPubsubPubsubInstance",Ln);z("ytPubsubPubsubTopicToKeys",Nn);z("ytPubsubPubsubIsSynchronous",On);z("ytPubsubPubsubSubscribedKeys",Mn);var Vn=y.window;Vn.ytExports||(Vn.ytExports={logging:{transport:{leaderQueueLength:0,leaderChosen:!1}}});var Wn=bi("initial_gel_batch_timeout",2E3),Xn=Math.pow(2,16)-1,Yn=!1,Zn=void 0;function $n(){this.l=this.i=this.j=0}
var ro=new $n,Qo=new $n,Ro=!0,So=y.ytLoggingTransportGELQueue_||new Map;z("ytLoggingTransportGELQueue_",So);var To=new Map,Uo=y.ytLoggingTransportGELProtoQueue_||new Map;z("ytLoggingTransportGELProtoQueue_",Uo);var Vo=y.ytLoggingTransportTokensToCttTargetIds_||{};z("ytLoggingTransportTokensToCttTargetIds_",Vo);var Wo=y.ytLoggingTransportTokensToJspbCttTargetIds_||{};z("ytLoggingTransportTokensToJspbCttTargetIds_",Wo);
function Xo(){M("jspb_with_transport_leader")&&!Vn.ytExports.logging.transport.leaderChosen&&(Yn=Vn.ytExports.logging.transport.leaderChosen=!0,document.addEventListener("FLUSH_REQUEST",function(){Yo(void 0,void 0,!0)}))}
function Zo(a,b){Xo();if("log_event"===a.endpoint){var c=$o(a),d=So.get(c)||[];So.set(c,d);d.push(a.payload);ap(b,d,c)}}
function bp(a,b){Xo();if("log_event"===a.endpoint){var c=$o(a,!0);if(M("jspb_with_transport_leader")&&Yn){var d=To.get(c)||[];To.set(c,d);Vn.ytExports.logging.transport.leaderQueueLength++;d.push(a.payload);ap(b,d,c,!0)}else d=Uo.get(c)||[],Uo.set(c,d),a=a.payload.toJSON(),d.push(a),ap(b,d,c,!0)}}
function ap(a,b,c,d){d=void 0===d?!1:d;a&&(Zn=new a);a=bi("tvhtml5_logging_max_batch")||bi("web_logging_max_batch")||100;var e=P(),f=d?Qo.l:ro.l,g=Uo.get(c)||[];M("jspb_with_transport_leader")&&(Yn&&b.length+g.length>=a||!Yn&&Vn.ytExports.logging.transport.leaderQueueLength+b.length>=a)||b.length>=a?Yo({writeThenSend:!0},M("flush_only_full_queue")?c:void 0,d):10<=e-f&&(cp(d),d?Qo.l=e:ro.l=e)}
function dp(a,b){Xo();if("log_event"===a.endpoint){var c=$o(a),d=new Map;d.set(c,[a.payload]);b&&(Zn=new b);return new Zf(function(e,f){Zn&&Zn.isReady()?ep(d,e,f,{bypassNetworkless:!0},!0):e()})}}
function fp(a,b){Xo();if("log_event"===a.endpoint){var c=$o(a,!0),d=new Map,e=new Map;M("jspb_with_transport_leader")&&Yn?e.set(c,[a.payload]):d.set(c,[a.payload.toJSON()]);b&&(Zn=new b);return new Zf(function(f){Zn&&Zn.isReady()?gp(d,e,f,{bypassNetworkless:!0},!0):f()})}}
function $o(a,b){var c="";if(a.wa)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new Qh;c.videoId?d.setVideoId(c.videoId):c.playlistId&&vd(d,2,Rh,c.playlistId);Wo[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Vo[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function Yo(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;new Zf(function(d,e){c?(Ci(Qo.j),Ci(Qo.i),Qo.i=0):(Ci(ro.j),Ci(ro.i),ro.i=0);if(M("jspb_with_transport_leader")&&!Yn)document.dispatchEvent(new CustomEvent("FLUSH_REQUEST")),d();else if(Zn&&Zn.isReady())if(void 0!==b)if(c){e=new Map;var f=new Map,g=Uo.get(b)||[];e.set(b,g);M("jspb_with_transport_leader")&&(g=To.get(b)||[],f.set(b,g));gp(e,f,d,a);Uo.delete(b)}else f=new Map,g=So.get(b)||[],f.set(b,g),ep(f,d,e,a),So.delete(b);else c?(gp(Uo,To,d,
a),Uo.clear()):(ep(So,d,e,a),So.clear());else cp(c),d()})}
function cp(a){a=void 0===a?!1:a;if(M("web_gel_timeout_cap")&&(!a&&!ro.i||a&&!Qo.i)){var b=Bi(function(){Yo({writeThenSend:!0},void 0,a)},6E4);
a?Qo.i=b:ro.i=b}Ci(a?Qo.j:ro.j);b=L("LOGGING_BATCH_TIMEOUT",bi("web_gel_debounce_ms",1E4));M("shorten_initial_gel_batch_timeout")&&Ro&&(b=Wn);b=Bi(function(){Yo({writeThenSend:!0},void 0,a)},b);
a?Qo.j=b:ro.j=b}
function ep(a,b,c,d,e){var f=Zn;d=void 0===d?{}:d;var g=Math.round(P()),h=a.size;a=q(a);for(var k=a.next();!k.done;k=a.next()){var m=q(k.value);k=m.next().value;var p=m.next().value;m=k;k=sb({context:Ej(f.config_||Dj())});k.events=p;(p=Vo[m])&&hp(k,m,p);delete Vo[m];m="visitorOnlyApprovedKey"===m;ip(k,g,m);jp(d);p=function(){h--;h||b()};
var t=function(){h--;h||b()};
try{Tj(f,"log_event",k,kp(d,m,p,t,e)),Ro=!1}catch(x){hi(x),c()}}}
function gp(a,b,c,d,e){var f=Zn;d=void 0===d?{}:d;var g=Math.round(P()),h=a.size+b.size,k=new Map([].concat(fa(a),fa(b)));k=q(k);for(var m=k.next();!m.done;m=k.next()){var p=q(m.value).next().value,t=a.get(p),x=b.get(p)||[];m=new Sh;var v=Jj(f.config_||Dj());E(m,Xg,1,v);t=t?lp(t):[];t=q(t);for(v=t.next();!v.done;v=t.next())Ad(m,3,Mh,v.value);x=q(x);for(t=x.next();!t.done;t=x.next())Ad(m,3,Mh,t.value);(x=Wo[p])&&mp(m,p,x);delete Wo[p];p="visitorOnlyApprovedKey"===p;np(m,g,p);jp(d);a:{ad=!0;try{var D=
JSON.stringify(m.toJSON(),Fd);break a}finally{ad=!1}D=void 0}m=D;p=kp(d,p,function(){Vn.ytExports.logging.transport.leaderQueueLength=0;h--;h||c()},function(){Vn.ytExports.logging.transport.leaderQueueLength=0;
h--;h||c()},e);
p.headers={"Content-Type":"application/json+protobuf"};p.postBodyFormat="JSPB";p.postBody=m;Tj(f,"log_event","",p);Ro=!1}}
function jp(a){M("always_send_and_write")&&(a.writeThenSend=!1)}
function kp(a,b,c,d,e){return{retry:!0,onSuccess:c,onError:d,Eb:a,wa:b,qp:!!e,headers:{},postBodyFormat:"",postBody:""}}
function ip(a,b,c){a.requestTimeMs=String(b);M("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=L("EVENT_ID"))&&(c=op(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function np(a,b,c){C(a,2,b);if(!c&&(b=L("EVENT_ID"))){c=op();var d=new Ph;C(d,1,b);C(d,2,c);E(a,Ph,5,d)}}
function op(){var a=L("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*Xn/2));a++;a>Xn&&(a=1);Zh("BATCH_CLIENT_COUNTER",a);return a}
function hp(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function mp(a,b,c){if(td(c,1===wd(c,Rh)?1:-1))var d=1;else if(c.getPlaylistId())d=2;else return;E(a,Qh,4,c);a=xd(a,Xg,1)||new Xg;c=xd(a,Vg,3)||new Vg;var e=new Ug;e.setToken(b);C(e,1,d);Ad(c,12,Ug,e);E(a,Vg,3,c)}
function lp(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new Mh(a[c]))}catch(d){hi(new Q("Transport failed to deserialize "+String(a[c])))}return b}
;var pp=y.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",pp);
function qp(a,b,c,d){d=void 0===d?{}:d;if(M("lr_drop_other_and_business_payloads")){if(tn[a]||sn[a])return}else if(M("lr_drop_other_payloads")&&tn[a])return;var e={},f=Math.round(d.timestamp||P());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=Kn();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};M("log_sequence_info_on_gel_web")&&d.V&&(a=e.context,b=d.V,b={index:rp(b),groupKey:b},a.sequence=b,d.wb&&delete pp[d.V]);(d.sc?dp:Zo)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,
wa:d.wa},c)}
function sp(a){Yo(void 0,void 0,void 0===a?!1:a)}
function rp(a){pp[a]=a in pp?pp[a]+1:0;return pp[a]}
;function lk(a,b,c){c=void 0===c?{}:c;var d=rn;L("ytLoggingEventsDefaultDisabled",!1)&&rn==rn&&(d=null);qp(a,b,d,c)}
;var tp=[{hb:function(a){return"Cannot read property '"+a.key+"'"},
Ra:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{hb:function(a){return"Cannot call '"+a.key+"'"},
Ra:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{hb:function(a){return a.key+" is not defined"},
Ra:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var vp={ga:[],fa:[{ka:up,weight:500}]};function up(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function wp(){this.fa=[];this.ga=[]}
var xp;function yp(){if(!xp){var a=xp=new wp;a.ga.length=0;a.fa.length=0;vp.ga&&a.ga.push.apply(a.ga,vp.ga);vp.fa&&a.fa.push.apply(a.fa,vp.fa)}return xp}
;var zp=new J;function Ap(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Bp(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Bp(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Bp(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Bp(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Cp(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Dp(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=Ap(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?Dp(e+".ve",f,g,h):0;d+=g;d+=Dp(e,a[e],b,c);if(500<d)break}}else c[b]=Ep(a),d+=c[b].length;else c[b]=Ep(a),d+=c[b].length;return d}
function Dp(a,b,c,d){c+="."+a;a=Ep(b);d[c]=a;return c.length+a.length}
function Ep(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;var Fp=y.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",Fp);function Gp(a,b,c){c=void 0===c?{}:c;var d=Math.round(c.timestamp||P());C(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=Kn();d=new Lh;C(d,1,c.timestamp||!isFinite(e)?-1:e);if(M("log_sequence_info_on_gel_web")&&c.V){e=c.V;var f=rp(e),g=new Kh;C(g,2,f);C(g,1,e);E(d,Kh,3,g);c.wb&&delete Fp[c.V]}E(a,Lh,33,d);(c.sc?fp:bp)({endpoint:"log_event",payload:a,cttAuthInfo:c.cttAuthInfo,wa:c.wa},b)}
;function Hp(a,b){b=void 0===b?{}:b;var c=!1;L("ytLoggingEventsDefaultDisabled",!1)&&rn===rn&&(c=!0);Gp(a,c?null:rn,b)}
;function Ip(a,b){var c=new Mh;zd(c,zh,72,Nh,a);Hp(c,b)}
function Jp(a,b,c){var d=new Mh;zd(d,yh,73,Nh,a);c?Gp(d,c,b):Hp(d,b)}
function Kp(a,b,c){var d=new Mh;zd(d,xh,78,Nh,a);c?Gp(d,c,b):Hp(d,b)}
function Lp(a,b,c){var d=new Mh;zd(d,Ah,208,Nh,a);c?Gp(d,c,b):Hp(d,b)}
function Mp(a,b,c){var d=new Mh;zd(d,qh,156,Nh,a);c?Gp(d,c,b):Hp(d,b)}
function Np(a,b,c){var d=new Mh;zd(d,uh,215,Nh,a);c?Gp(d,c,b):Hp(d,b)}
function Op(a,b,c){var d=new Mh;zd(d,mh,111,Nh,a);c?Gp(d,c,b):Hp(d,b)}
;var Pp=new Set,Qp=0,Rp=0,Sp=0,Tp=[],Up=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function kk(a){Vp(a)}
function Wp(a){Vp(a,"WARNING")}
function Vp(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||L("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||L("INNERTUBE_CONTEXT_CLIENT_VERSION");var g=f||{},h=void 0===b?"ERROR":b;h=void 0===h?"ERROR":h;if(a){a.hasOwnProperty("level")&&a.level&&(h=a.level);if(M("console_log_js_exceptions")){var k=[];k.push("Name: "+a.name);k.push("Message: "+a.message);a.hasOwnProperty("params")&&k.push("Error Params: "+JSON.stringify(a.params));a.hasOwnProperty("args")&&k.push("Error args: "+JSON.stringify(a.args));
k.push("File name: "+a.fileName);k.push("Stacktrace: "+a.stack);window.console.log(k.join("\n"),a)}if(!(5<=Qp)){var m=Tp,p=ye(a),t=p.message||"Unknown Error",x=p.name||"UnknownError",v=p.stack||a.j||"Not available";if(v.startsWith(x+": "+t)){var D=v.split("\n");D.shift();v=D.join("\n")}var G=p.lineNumber||"Not available",K=p.fileName||"Not available",N=v,O=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var S=0;S<a.args.length&&!(O=Cp(a.args[S],"params."+S,g,O),500<=O);S++);else if(a.hasOwnProperty("params")&&
a.params){var ka=a.params;if("object"===typeof a.params)for(var V in ka){if(ka[V]){var W="params."+V,Pa=Ep(ka[V]);g[W]=Pa;O+=W.length+Pa.length;if(500<O)break}}else g.params=Ep(ka)}if(m.length)for(var va=0;va<m.length&&!(O=Cp(m[va],"params.context."+va,g,O),500<=O);va++);navigator.vendor&&!g.hasOwnProperty("vendor")&&(g["device.vendor"]=navigator.vendor);var F={message:t,name:x,lineNumber:G,fileName:K,stack:N,params:g,sampleWeight:1},Ca=Number(a.columnNumber);isNaN(Ca)||(F.lineNumber=F.lineNumber+
":"+Ca);if("IGNORED"===a.level)var ua=0;else a:{for(var ao=yp(),bo=q(ao.ga),bj=bo.next();!bj.done;bj=bo.next()){var co=bj.value;if(F.message&&F.message.match(co.xp)){ua=co.weight;break a}}for(var eo=q(ao.fa),cj=eo.next();!cj.done;cj=eo.next()){var fo=cj.value;if(fo.ka(F)){ua=fo.weight;break a}}ua=1}F.sampleWeight=ua;for(var go=q(tp),dj=go.next();!dj.done;dj=go.next()){var ej=dj.value;if(ej.Ra[F.name])for(var ho=q(ej.Ra[F.name]),fj=ho.next();!fj.done;fj=ho.next()){var io=fj.value,hg=F.message.match(io.regexp);
if(hg){F.params["params.error.original"]=hg[0];for(var gj=io.groups,jo={},ed=0;ed<gj.length;ed++)jo[gj[ed]]=hg[ed+1],F.params["params.error."+gj[ed]]=hg[ed+1];F.message=ej.hb(jo);break}}}F.params||(F.params={});var ko=yp();F.params["params.errorServiceSignature"]="msg="+ko.ga.length+"&cb="+ko.fa.length;F.params["params.serviceWorker"]="false";y.document&&y.document.querySelectorAll&&(F.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));Bb("sample").constructor!==
zb&&(F.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(F);if(0!==F.sampleWeight&&!Pp.has(F.message)){if("ERROR"===h){zp.ia("handleError",F);if(M("record_app_crashed_web")&&0===Sp&&1===F.sampleWeight)if(Sp++,M("errors_via_jspb")){var hj=new jh;C(hj,1,1);if(!M("report_client_error_with_app_crash_ks")){var lo=new eh;C(lo,1,F.message);var mo=new fh;E(mo,eh,3,lo);var no=new gh;E(no,fh,5,mo);var oo=new hh;E(oo,gh,9,no);E(hj,hh,4,oo)}var po=new Mh;zd(po,jh,20,
Nh,hj);Hp(po)}else{var qo={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};M("report_client_error_with_app_crash_ks")||(qo.systemHealth={crashData:{clientError:{logMessage:{message:F.message}}}});lk("appCrashed",qo)}Rp++}else"WARNING"===h&&zp.ia("handleWarning",F);if(M("kevlar_gel_error_routing"))a:{var ie=h;if(M("errors_via_jspb")){if(Xp())var so=void 0;else{var fd=new bh;C(fd,1,F.stack);F.fileName&&C(fd,4,F.fileName);var tb=F.lineNumber&&F.lineNumber.split?F.lineNumber.split(":"):[];0!==tb.length&&(1!==
tb.length||isNaN(Number(tb[0]))?2!==tb.length||isNaN(Number(tb[0]))||isNaN(Number(tb[1]))||(C(fd,2,Number(tb[0])),C(fd,3,Number(tb[1]))):C(fd,2,Number(tb[0])));var qc=new eh;C(qc,1,F.message);C(qc,3,F.name);C(qc,6,F.sampleWeight);"ERROR"===ie?C(qc,2,2):"WARNING"===ie?C(qc,2,1):C(qc,2,0);var ij=new ch;C(ij,1,!0);zd(ij,bh,3,dh,fd);var Qb=new Zg;C(Qb,3,window.location.href);for(var to=L("FEXP_EXPERIMENTS",[]),jj=0;jj<to.length;jj++){var It=to[jj];cd(Qb);ud(Qb,5).push(It)}var kj=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");
if(!$h()&&kj)for(var uo=q(Object.keys(kj)),rc=uo.next();!rc.done;rc=uo.next()){var vo=rc.value,lj=new ah;C(lj,1,vo);lj.setValue(String(kj[vo]));Ad(Qb,4,ah,lj)}var mj=F.params;if(mj){var wo=q(Object.keys(mj));for(rc=wo.next();!rc.done;rc=wo.next()){var xo=rc.value,nj=new ah;C(nj,1,"client."+xo);nj.setValue(String(mj[xo]));Ad(Qb,4,ah,nj)}}var yo=L("SERVER_NAME"),zo=L("SERVER_VERSION");if(yo&&zo){var oj=new ah;C(oj,1,"server.name");oj.setValue(yo);Ad(Qb,4,ah,oj);var pj=new ah;C(pj,1,"server.version");
pj.setValue(zo);Ad(Qb,4,ah,pj)}var ig=new fh;E(ig,Zg,1,Qb);E(ig,ch,2,ij);E(ig,eh,3,qc);so=ig}var Ao=so;if(!Ao)break a;var Bo=new Mh;zd(Bo,fh,163,Nh,Ao);Hp(Bo)}else{if(Xp())var Co=void 0;else{var je={stackTrace:F.stack};F.fileName&&(je.filename=F.fileName);var ub=F.lineNumber&&F.lineNumber.split?F.lineNumber.split(":"):[];0!==ub.length&&(1!==ub.length||isNaN(Number(ub[0]))?2!==ub.length||isNaN(Number(ub[0]))||isNaN(Number(ub[1]))||(je.lineNumber=Number(ub[0]),je.columnNumber=Number(ub[1])):je.lineNumber=
Number(ub[0]));var qj={level:"ERROR_LEVEL_UNKNOWN",message:F.message,errorClassName:F.name,sampleWeight:F.sampleWeight};"ERROR"===ie?qj.level="ERROR_LEVEL_ERROR":"WARNING"===ie&&(qj.level="ERROR_LEVEL_WARNNING");var Jt={isObfuscated:!0,browserStackInfo:je},gd={pageUrl:window.location.href,kvPairs:[]};L("FEXP_EXPERIMENTS")&&(gd.experimentIds=L("FEXP_EXPERIMENTS"));var rj=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!$h()&&rj)for(var Do=q(Object.keys(rj)),sc=Do.next();!sc.done;sc=Do.next()){var Eo=
sc.value;gd.kvPairs.push({key:Eo,value:String(rj[Eo])})}var sj=F.params;if(sj){var Fo=q(Object.keys(sj));for(sc=Fo.next();!sc.done;sc=Fo.next()){var Go=sc.value;gd.kvPairs.push({key:"client."+Go,value:String(sj[Go])})}}var Ho=L("SERVER_NAME"),Io=L("SERVER_VERSION");Ho&&Io&&(gd.kvPairs.push({key:"server.name",value:Ho}),gd.kvPairs.push({key:"server.version",value:Io}));Co={errorMetadata:gd,stackTrace:Jt,logMessage:qj}}var Jo=Co;if(!Jo)break a;lk("clientError",Jo)}if("ERROR"===ie||M("errors_flush_gel_always_killswitch"))M("web_fp_via_jspb")&&
sp(!0),sp()}if(!M("suppress_error_204_logging")){var ke=F.params||{},Rb={urlParams:{a:"logerror",t:"jserror",type:F.name,msg:F.message.substr(0,250),line:F.lineNumber,level:h,"client.name":ke.name},postParams:{url:L("PAGE_NAME",window.location.href),file:F.fileName},method:"POST"};ke.version&&(Rb["client.version"]=ke.version);if(Rb.postParams){F.stack&&(Rb.postParams.stack=F.stack);for(var Ko=q(Object.keys(ke)),tj=Ko.next();!tj.done;tj=Ko.next()){var Lo=tj.value;Rb.postParams["client."+Lo]=ke[Lo]}var uj=
L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(uj)for(var Mo=q(Object.keys(uj)),vj=Mo.next();!vj.done;vj=Mo.next()){var No=vj.value;Rb.postParams[No]=uj[No]}var Oo=L("SERVER_NAME"),Po=L("SERVER_VERSION");Oo&&Po&&(Rb.postParams["server.name"]=Oo,Rb.postParams["server.version"]=Po)}Ii(L("ECATCHER_REPORT_HOST","")+"/error_204",Rb)}try{Pp.add(F.message)}catch(gv){}Qp++}}}}
function Xp(){for(var a=q(Up),b=a.next();!b.done;b=a.next())if(ck(b.value.toLowerCase()))return!0;return!1}
function Yp(a){var b=Ia.apply(1,arguments);a.args||(a.args=[]);a.args.push.apply(a.args,fa(b))}
;function Zp(){this.register=new Map}
function $p(a){a=q(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Ap("ABORTED")}
Zp.prototype.clear=function(){$p(this);this.register.clear()};
var aq=new Zp;var bq=Date.now().toString();
function cq(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(bq)for(a=1,b=0;b<bq.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^bq.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var dq=y.ytLoggingDocDocumentNonce_;dq||(dq=cq(),z("ytLoggingDocDocumentNonce_",dq));var eq=dq;var fq={Jg:0,wd:1,Gd:2,yk:3,Lg:4,Ko:5,rl:6,Um:7,rm:8,Im:9,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS",9:"RICH_GRID_WATCH"};function gq(a){this.i=a}
function hq(a){return new gq({trackingParams:a})}
gq.prototype.getAsJson=function(){var a={};void 0!==this.i.trackingParams?a.trackingParams=this.i.trackingParams:(a.veType=this.i.veType,void 0!==this.i.veCounter&&(a.veCounter=this.i.veCounter),void 0!==this.i.elementIndex&&(a.elementIndex=this.i.elementIndex));void 0!==this.i.dataElement&&(a.dataElement=this.i.dataElement.getAsJson());void 0!==this.i.youtubeData&&(a.youtubeData=this.i.youtubeData);return a};
gq.prototype.getAsJspb=function(){var a=new lh;void 0!==this.i.trackingParams?C(a,1,this.i.trackingParams):(void 0!==this.i.veType&&C(a,2,this.i.veType),void 0!==this.i.veCounter&&C(a,6,this.i.veCounter),void 0!==this.i.elementIndex&&C(a,3,this.i.elementIndex));if(void 0!==this.i.dataElement){var b=this.i.dataElement.getAsJspb();E(a,lh,7,b)}void 0!==this.i.youtubeData&&E(a,Jg,8,this.i.jspbYoutubeData);return a};
gq.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
gq.prototype.isClientVe=function(){return!this.i.trackingParams&&!!this.i.veType};function iq(a){a=void 0===a?0:a;return 0===a?"client-screen-nonce":"client-screen-nonce."+a}
function jq(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function kq(a){return L(jq(void 0===a?0:a))}
z("yt_logging_screen.getRootVeType",kq);function lq(a){return(a=kq(void 0===a?0:a))?new gq({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null}
function mq(){var a=L("csn-to-ctt-auth-info");a||(a={},Zh("csn-to-ctt-auth-info",a));return a}
function nq(a){a=L(iq(void 0===a?0:a));if(!a&&!L("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
z("yt_logging_screen.getCurrentCsn",nq);function oq(a,b,c){var d=mq();(c=nq(c))&&delete d[c];b&&(d[a]=b)}
function pq(a){return mq()[a]}
z("yt_logging_screen.getCttAuthInfo",pq);
function qq(a,b,c,d){c=void 0===c?0:c;if(a!==L(iq(c))||b!==L(jq(c)))oq(a,d,c),Zh(iq(c),a),Zh(jq(c),b),b=function(){setTimeout(function(){if(a)if(M("web_time_via_jspb")){var e=new mh;C(e,1,eq);C(e,2,a);M("use_default_heartbeat_client")?Op(e):Op(e,void 0,rn)}else e={clientDocumentNonce:eq,clientScreenNonce:a},M("use_default_heartbeat_client")?lk("foregroundHeartbeatScreenAssociated",e):qp("foregroundHeartbeatScreenAssociated",e,rn)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):
b()}
z("yt_logging_screen.setCurrentScreen",qq);var rq=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};z("yt.msgs_",rq);function sq(a){Uh(rq,arguments)}
;var tq={vd:3611,Hc:27686,Ic:85013,Jc:23462,Lc:42016,Mc:62407,Nc:26926,Kc:43781,Oc:51236,Pc:79148,Qc:50160,Rc:77504,ed:87907,fd:18630,gd:54445,hd:80935,jd:152172,kd:105675,ld:150723,md:37521,nd:147285,od:47786,pd:98349,qd:123695,rd:6827,sd:29434,td:7282,ud:124448,yd:32276,xd:76278,zd:147868,Ad:147869,Bd:93911,Cd:106531,Dd:27259,Ed:27262,Fd:27263,Hd:21759,Id:27107,Jd:62936,Kd:49568,Ld:38408,Md:80637,Nd:68727,Od:68728,Pd:80353,Qd:80356,Rd:74610,Sd:45707,Td:83962,Ud:83970,Vd:46713,Wd:89711,Xd:74612,Yd:93265,
Zd:74611,ae:131380,ce:128979,de:139311,ee:128978,be:131391,ge:105350,ie:139312,je:134800,he:131392,le:113533,me:93252,ne:99357,pe:94521,qe:114252,re:113532,se:94522,oe:94583,te:88E3,ue:139580,we:93253,xe:93254,ye:94387,ze:94388,Ae:93255,Be:97424,ke:72502,Ce:110111,De:76019,Fe:117092,Ge:117093,Ee:89431,He:110466,Ie:77240,Je:60508,Ke:148123,Le:148124,Me:137401,Ne:137402,Oe:137046,Pe:73393,Qe:113534,Re:92098,Se:131381,Te:84517,Ue:83759,Ve:80357,We:86113,Xe:72598,Ye:72733,Ze:107349,af:124275,bf:118203,
cf:133275,df:152569,ef:133274,ff:133272,gf:133273,hf:133276,jf:144507,kf:143247,lf:143248,mf:143249,nf:143250,pf:143251,qf:144401,sf:117431,rf:133797,tf:128572,uf:133405,vf:117429,wf:117430,xf:117432,yf:120080,zf:117259,Af:121692,Bf:145656,Cf:145655,Df:145653,Ef:145654,Ff:145657,Gf:132972,Hf:133051,If:133658,Jf:132971,Kf:97615,Mf:143359,Lf:143356,Of:143361,Nf:143358,Qf:143360,Pf:143357,Rf:142303,Sf:143353,Tf:143354,Uf:144479,Vf:143355,Wf:31402,Yf:133624,Zf:146477,ag:133623,cg:133622,Xf:133621,dg:84774,
eg:95117,fg:150497,gg:98930,hg:98931,ig:98932,jg:43347,kg:129889,lg:149123,mg:45474,ng:100352,og:84758,pg:98443,qg:117985,rg:74613,sg:74614,tg:64502,ug:136032,vg:74615,wg:74616,xg:122224,yg:74617,zg:77820,Ag:74618,Bg:93278,Cg:93274,Dg:93275,Eg:93276,Fg:22110,Gg:29433,Hg:133798,Ig:132295,Kg:120541,Mg:82047,Ng:113550,Og:75836,Pg:75837,Qg:42352,Rg:84512,Sg:76065,Tg:75989,Yg:16623,Zg:32594,ah:27240,bh:32633,dh:74858,fh:3945,eh:16989,gh:45520,hh:25488,ih:25492,jh:25494,kh:55760,lh:14057,mh:18451,nh:57204,
oh:57203,ph:17897,qh:57205,rh:18198,sh:17898,th:17909,uh:43980,vh:46220,wh:11721,xh:147994,yh:49954,zh:96369,Ah:3854,Bh:151633,Ch:56251,Dh:25624,Eh:152036,Vh:16906,Wh:99999,Xh:68172,Yh:27068,Zh:47973,ai:72773,bi:26970,ci:26971,di:96805,fi:17752,gi:73233,hi:109512,ii:22256,ji:14115,ki:22696,li:89278,mi:89277,ni:109513,oi:43278,ri:43459,si:43464,ti:89279,vi:43717,wi:55764,xi:22255,yi:147912,zi:89281,Ai:40963,Bi:43277,Ci:43442,Di:91824,Ei:120137,Fi:96367,Gi:36850,Hi:72694,Ii:37414,Ji:36851,Li:124863,
Ki:121343,Mi:73491,Ni:54473,Oi:43375,Pi:46674,Qi:143815,Ri:139095,Si:144402,Ti:149968,Ui:149969,Vi:32473,Wi:72901,Xi:72906,Yi:50947,Zi:50612,aj:50613,bj:50942,cj:84938,dj:84943,ej:84939,fj:84941,gj:84944,hj:84940,ij:84942,jj:35585,kj:51926,lj:79983,mj:63238,nj:18921,oj:63241,pj:57893,qj:41182,rj:135732,sj:33424,tj:22207,uj:42993,vj:36229,wj:22206,xj:22205,yj:18993,zj:19001,Aj:18990,Bj:18991,Cj:18997,Dj:18725,Ej:19003,Fj:36874,Gj:44763,Hj:33427,Ij:67793,Jj:22182,Kj:37091,Lj:34650,Mj:50617,Nj:47261,
Oj:22287,Pj:25144,Qj:97917,Rj:62397,Sj:150871,Tj:150874,Uj:125598,Vj:137935,Wj:36961,Xj:108035,Yj:27426,Zj:27857,ak:27846,bk:27854,ck:69692,dk:61411,ek:39299,fk:38696,gk:62520,hk:36382,ik:108701,jk:50663,kk:36387,lk:14908,mk:37533,nk:105443,pk:61635,qk:62274,rk:133818,sk:65702,tk:65703,uk:65701,vk:76256,wk:37671,xk:49953,zk:36216,Ak:28237,Bk:39553,Ck:29222,Dk:26107,Ek:38050,Fk:26108,Hk:120745,Gk:26109,Ik:26110,Jk:66881,Kk:28236,Lk:14586,Mk:57929,Nk:74723,Ok:44098,Pk:44099,Sk:23528,Tk:61699,Qk:134104,
Rk:134103,Uk:59149,Vk:101951,Wk:97346,Xk:118051,Yk:95102,Zk:64882,al:119505,bl:63595,dl:63349,fl:95101,il:75240,jl:27039,kl:68823,ll:21537,ml:83464,nl:75707,ol:83113,pl:101952,ql:101953,sl:79610,ul:125755,vl:24402,wl:24400,xl:32925,yl:57173,zl:122502,Al:145268,Bl:138480,Cl:64423,Dl:64424,El:33986,Fl:100828,Gl:129089,Hl:21409,Ll:135155,Ml:135156,Nl:135157,Ol:135158,Pl:135159,Ql:135160,Rl:135161,Sl:135162,Tl:135163,Ul:135164,Vl:135165,Wl:135166,Il:11070,Jl:11074,Kl:17880,Xl:14001,Zl:30709,am:30707,
bm:30711,cm:30710,dm:30708,Yl:26984,em:146143,fm:63648,gm:63649,hm:51879,im:111059,jm:5754,km:20445,lm:151152,nm:130975,mm:130976,om:110386,pm:113746,qm:66557,sm:17310,tm:28631,um:21589,vm:68012,wm:60480,xm:138664,ym:141121,zm:31571,Am:141978,Bm:150105,Cm:150106,Dm:150107,Em:150108,Fm:76980,Gm:41577,Hm:45469,Jm:38669,Km:13768,Lm:13777,Mm:141842,Nm:62985,Om:4724,Pm:59369,Qm:43927,Rm:43928,Sm:12924,Tm:100355,Wm:56219,Xm:27669,Ym:10337,Vm:47896,Zm:122629,bn:139723,an:139722,cn:121258,dn:107598,en:127991,
fn:96639,gn:107536,hn:130169,jn:96661,kn:145188,ln:96658,mn:116646,nn:121122,pn:96660,qn:127738,rn:127083,sn:147842,tn:104443,un:96659,vn:147595,wn:106442,xn:134840,yn:63667,zn:63668,An:63669,Bn:130686,Cn:147036,Dn:78314,En:147799,Fn:148649,Gn:55761,Hn:127098,In:134841,Jn:96368,Kn:67374,Ln:48992,Mn:146176,Nn:49956,On:31961,Pn:26388,Qn:23811,Rn:5E4,Sn:126250,Tn:96370,Un:47355,Vn:47356,Wn:37935,Xn:45521,Yn:21760,Zn:83769,ao:49977,bo:49974,co:93497,eo:93498,fo:34325,ho:140759,jo:115803,ko:123707,lo:100081,
mo:35309,no:68314,oo:25602,po:100339,qo:143516,ro:59018,so:18248,to:50625,uo:9729,vo:37168,wo:37169,xo:21667,yo:16749,zo:18635,Ao:39305,Bo:18046,Co:53969,Do:8213,Eo:93926,Fo:102852,Go:110099,Ho:22678,Io:69076,Jo:137575,Lo:139224,Mo:100856,No:17736,Oo:3832,Po:147111,Qo:55759,Ro:64031,Xo:93044,Yo:93045,Zo:34388,ap:17657,bp:17655,cp:39579,ep:39578,fp:77448,gp:8196,hp:11357,ip:69877,jp:8197,kp:82039};function uq(){var a=rb(vq),b;return fg(new Zf(function(c,d){a.onSuccess=function(e){Ai(e)?c(new wq(e)):d(new xq("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new xq("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new xq("Request timed out","net.timeout",e))};
b=Ii("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof gg&&b.abort();
return dg(c)})}
function xq(a,b,c){Za.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
r(xq,Za);function wq(a){this.xhr=a}
;function yq(){this.i=0;this.da=null}
yq.prototype.then=function(a,b,c){return 1===this.i&&a?(a=a.call(c,this.da))&&"function"===typeof a.then?a:zq(a):2===this.i&&b?(a=b.call(c,this.da))&&"function"===typeof a.then?a:Aq(a):this};
yq.prototype.getValue=function(){return this.da};
yq.prototype.$goog_Thenable=!0;function Aq(a){var b=new yq;a=void 0===a?null:a;b.i=2;b.da=void 0===a?null:a;return b}
function zq(a){var b=new yq;a=void 0===a?null:a;b.i=1;b.da=void 0===a?null:a;return b}
;function Bq(a,b){return{method:void 0===b?"POST":b,mode:vi(a)?"same-origin":"cors",credentials:vi(a)?"same-origin":"include"}}
;function Cq(){if(re()||bk&&ck("applewebkit")&&!ck("version")&&(!ck("safari")||ck("gsa/"))||xc&&ck("version/"))return!0;if(M("enable_web_eom_visitor_data"))return L("EOM_VISITOR_DATA")?!1:!0;var a=L("INNERTUBE_CLIENT_NAME");return!a||"WEB"!==a&&"MWEB"!==a?!0:(a=Ti("CONSENT"))?a.startsWith("YES+"):!0}
;function Dq(a){a:{var b=a.raw_embedded_player_response;if(!b&&(a=a.embedded_player_response))try{b=JSON.parse(a)}catch(d){b="EMBEDDED_PLAYER_MODE_UNKNOWN";break a}if(b)b:{for(var c in hf)if(hf[c]==b.embeddedPlayerMode){b=hf[c];break b}b="EMBEDDED_PLAYER_MODE_UNKNOWN"}else b="EMBEDDED_PLAYER_MODE_UNKNOWN"}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function Eq(a){Za.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Fq;this.isTimeout=a instanceof xq&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof gg}
r(Eq,Za);Eq.prototype.name="BiscottiError";function Fq(){Za.call(this,"Biscotti ID is missing from server")}
r(Fq,Za);Fq.prototype.name="BiscottiMissingError";var vq={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Gq=null;
function ki(){if(M("disable_biscotti_fetch_entirely_for_all_web_clients"))return dg(Error("Biscotti id fetching has been disabled entirely."));if(!Cq())return dg(Error("User has not consented - not fetching biscotti id."));var a=L("PLAYER_VARS",{});if("1"==pb(a))return dg(Error("Biscotti ID is not available in private embed mode"));if(M("embeds_web_disable_ads_for_pfl")&&Dq(a))return dg(Error("Biscotti id fetching has been disabled for pfl."));Gq||(Gq=fg(uq().then(Hq),function(b){return Iq(2,b)}));
return Gq}
function Hq(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Fq;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Fq;a=a.id;li(a);Gq=zq(a);Jq(18E5,2);return a}
function Iq(a,b){b=new Eq(b);li("");Gq=Aq(b);0<a&&Jq(12E4,a-1);throw b;}
function Jq(a,b){Bi(function(){fg(uq().then(Hq,function(c){return Iq(b,c)}),ab)},a)}
function Kq(){try{var a=A("yt.ads.biscotti.getId_");return a?a():ki()}catch(b){return dg(b)}}
;function Lq(a){if("1"!=pb(L("PLAYER_VARS",{}))){a&&ji();try{Kq().then(function(){},function(){}),Bi(Lq,18E5)}catch(b){hi(b)}}}
;function Mq(){this.Cc=!0}
function Nq(a){var b={},c=te([]);c&&(b.Authorization=c,c=a=null==a?void 0:a.sessionIndex,void 0===c&&(c=Number(L("SESSION_INDEX",0)),c=isNaN(c)?0:c),M("voice_search_auth_header_removal")||(b["X-Goog-AuthUser"]=c),"INNERTUBE_HOST_OVERRIDE"in Yh||(b["X-Origin"]=window.location.origin),void 0===a&&"DELEGATED_SESSION_ID"in Yh&&(b["X-Goog-PageId"]=L("DELEGATED_SESSION_ID")));return b}
;var Oq=Symbol("injectionDeps");function Pq(a){this.name=a}
Pq.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Qq(){this.key=Rq}
function Sq(){this.providers=new Map;this.i=new Map}
Sq.prototype.resolve=function(a){return a instanceof Qq?Tq(this,a.key,[],!0):Tq(this,a,[])};
function Tq(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.i.has(b))return a.i.get(b);if(!a.providers.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.providers.get(b);c.push(b);if(d.Gc)var e=d.Gc;else if(d.Fc)e=d[Oq]?Uq(a,d[Oq],c):[],e=d.Fc.apply(d,fa(e));else if(d.Nb){e=d.Nb;var f=e[Oq]?Uq(a,e[Oq],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(fa(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Fp||a.i.set(b,e);
return e}
function Uq(a,b,c){return b?b.map(function(d){return d instanceof Qq?Tq(a,d.key,c,!0):Tq(a,d,c)}):[]}
;var Vq;var Wq={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};var Xq=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Yq(){var a=void 0===a?window.location.href:a;if(M("kevlar_disable_theme_param"))return null;ac(bc(5,a));try{var b=ti(a).theme;return Xq.get(b)||null}catch(c){}return null}
;function Zq(){this.i={};if(this.j=Ui()){var a=Ti("CONSISTENCY");a&&$q(this,{encryptedTokenJarContents:a})}}
Zq.prototype.handleResponse=function(a,b){var c,d;b=(null==(c=b.Z.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=q(b);for(c=e.next();!c.done;c=e.next())delete this.i[c.value.encryptedTokenJarContents];$q(this,a)}};
function $q(a,b){if(b.encryptedTokenJarContents&&(a.i[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.i[b.encryptedTokenJarContents]},1E3*c);
a.j&&Si("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var ar=window.location.hostname.split(".").slice(-2).join(".");function br(){var a=L("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===L("INNERTUBE_CLIENT_NAME")&&(this.i=cr(this))&&(a=this.i.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.j=void 0)}
var dr;br.getInstance=function(){dr=A("yt.clientLocationService.instance");dr||(dr=new br,z("yt.clientLocationService.instance",dr));return dr};
br.prototype.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.j?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.j.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.j.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.j.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
br.prototype.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.j=void 0,"TVHTML5"===L("INNERTUBE_CLIENT_NAME")?(this.i=cr(this))&&this.i.set("yt-location-playability-token",a,15552E3):Si("YT_CL",JSON.stringify({loctok:a}),15552E3,ar,!0))};
function cr(a){return void 0===a.i?new Mj("yt-client-location"):a.i}
br.prototype.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition)||!M("web_enable_browser_geolocation_api")&&!M("enable_handoff_location_2fa_on_mweb"))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;M("enable_handoff_location_2fa_on_mweb")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.j=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
br.prototype.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};function er(a,b){var c;if((null==(c=a.signalServiceEndpoint)?0:c.signal)&&b.Ba&&(c=b.Ba[a.signalServiceEndpoint.signal]))return c();var d;if((null==(d=a.continuationCommand)?0:d.request)&&b.Ub&&(d=b.Ub[a.continuationCommand.request]))return d();for(var e in a)if(b.rb[e]&&(a=b.rb[e]))return a()}
;function fr(a){return function(){return new a}}
;var gr={},hr=(gr.WEB_UNPLUGGED="^unplugged/",gr.WEB_UNPLUGGED_ONBOARDING="^unplugged/",gr.WEB_UNPLUGGED_OPS="^unplugged/",gr.WEB_UNPLUGGED_PUBLIC="^unplugged/",gr.WEB_CREATOR="^creator/",gr.WEB_KIDS="^kids/",gr.WEB_EXPERIMENTS="^experiments/",gr.WEB_MUSIC="^music/",gr.WEB_REMIX="^music/",gr.WEB_MUSIC_EMBEDDED_PLAYER="^music/",gr.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",gr);
function ir(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=hr[b];if(c){var d=new RegExp(c),e=q(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(hr).forEach(function(g){var h=q(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=q(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function jr(){}
jr.prototype.s=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?Wq:c;var d=a.clickTrackingParams,e=this.m,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=L("INNERTUBE_CONTEXT");if(g){g=sb(g);M("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&(h.clientFormFactor=L("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||
1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;Wi.getInstance();var m="USER_INTERFACE_THEME_LIGHT";Zi(165)?m="USER_INTERFACE_THEME_DARK":Zi(174)?m="USER_INTERFACE_THEME_LIGHT":!M("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(m="USER_INTERFACE_THEME_DARK");k=k?m:Yq()||m;h.userInterfaceTheme=k;if(!f){if(k=
Aj())h.connectionType=k;M("web_log_effective_connection_type")&&(k=Bj())&&(g.client.effectiveConnectionType=k)}var p;if(M("web_log_memory_total_kbytes")&&(null==(p=y.navigator)?0:p.deviceMemory)){var t;p=null==(t=y.navigator)?void 0:t.deviceMemory;g.client.memoryTotalKbytes=""+1E6*p}t=ti(y.location.href);!M("web_populate_internal_geo_killswitch")&&t.internalcountrycode&&(h.internalGeo=t.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:y.location.href},M("kevlar_woffle")&&
Qi.i&&(h.mainAppWebInfo.pwaInstallabilityStatus=Qi.i.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=Ri(),h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):"TVHTML5"===h.clientName&&(!M("web_lr_app_quality_killswitch")&&(t=L("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:t})),t=L("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:t}));
if(!M("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var x=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(Pa){}x=void 0}x&&(h.timeZone=x)}(x=ci())?h.experimentsToken=x:delete h.experimentsToken;x=di();Zq.i||(Zq.i=new Zq);h=Zq.i.i;t=[];p=0;for(var v in h)t[p++]=h[v];g.request=Object.assign({},g.request,{internalExperimentFlags:x,consistencyTokenJars:t});!M("web_prequest_context_killswitch")&&(v=L("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=
v);x=Wi.getInstance();v=Zi(58);x=x.get("gsml","");g.user=Object.assign({},g.user);v&&(g.user.enableSafetyMode=v);x&&(g.user.lockedSafetyMode=!0);M("warm_op_csn_cleanup")?e&&(f=nq())&&(g.clientScreenNonce=f):!f&&(f=nq())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=A("yt.mdx.remote.remoteClient_"))g.remoteClient=d;M("web_enable_client_location_service")&&br.getInstance().setLocationOnInnerTubeContext(g);try{var D=wi(),G=D.bid;delete D.bid;g.adSignalsInfo={params:[],bid:G};
var K=q(Object.entries(D));for(var N=K.next();!N.done;N=K.next()){var O=q(N.value),S=O.next().value,ka=O.next().value;D=S;G=ka;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:D,value:""+G})}}catch(Pa){Vp(Pa)}K=g}else Vp(Error("Error: No InnerTubeContext shell provided in ytconfig.")),K={};K={context:K};if(N=this.i(a)){this.j(K,N,b);var V;b="/youtubei/v1/"+ir(this.l());var W;(a=null==(V=a.commandMetadata)?void 0:null==(W=V.webCommandMetadata)?void 0:W.apiUrl)&&(b=a);V=b;(W=L("INNERTUBE_HOST_OVERRIDE"))&&
(V=String(W)+String(dc(V)));W={};W.key=L("INNERTUBE_API_KEY");M("json_condensed_response")&&(W.prettyPrint="false");V=ui(V,W||{},!1);V={input:V,sa:Bq(V),Z:K,config:Object.assign({},void 0)};V.config.Ia?V.config.Ia.identity=c:V.config.Ia={identity:c};return V}Vp(new Q("Error: Failed to create Request from Command.",a))};
da.Object.defineProperties(jr.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!1}}});function kr(){}
r(kr,jr);kr.prototype.s=function(){return{input:"/getDatasyncIdsEndpoint",sa:Bq("/getDatasyncIdsEndpoint","GET"),Z:{}}};
kr.prototype.l=function(){return[]};
kr.prototype.i=function(){};
kr.prototype.j=function(){};var lr={},mr=(lr.GET_DATASYNC_IDS=fr(kr),lr);function nr(a){var b=Ia.apply(1,arguments);if(!or(a)||b.some(function(d){return!or(d)}))throw Error("Only objects may be merged.");
b=q(b);for(var c=b.next();!c.done;c=b.next())pr(a,c.value);return a}
function pr(a,b){for(var c in b)if(or(b[c])){if(c in a&&!or(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});pr(a[c],b[c])}else if(qr(b[c])){if(c in a&&!qr(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);rr(a[c],b[c])}else a[c]=b[c];return a}
function rr(a,b){b=q(b);for(var c=b.next();!c.done;c=b.next())c=c.value,or(c)?a.push(pr({},c)):qr(c)?a.push(rr([],c)):a.push(c);return a}
function or(a){return"object"===typeof a&&!Array.isArray(a)}
function qr(a){return"object"===typeof a&&Array.isArray(a)}
;function sr(a,b){Tl.call(this,1,arguments);this.timer=b}
r(sr,Tl);var tr=new Ul("aft-recorded",sr);var ur=window;function vr(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var R=ur.performance||ur.mozPerformance||ur.msPerformance||ur.webkitPerformance||new vr;var wr=!1,xr={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};
Va(R.clearResourceTimings||R.webkitClearResourceTimings||R.mozClearResourceTimings||R.msClearResourceTimings||R.oClearResourceTimings||ab,R);function yr(a){var b=zr(a);if(b.aft)return b.aft;a=L((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function Ar(){var a;if(M("csi_use_performance_navigation_timing")){var b,c,d,e=null==R?void 0:null==(a=R.getEntriesByType)?void 0:null==(b=a.call(R,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=Br(e.requestStart),e.responseEnd=Br(e.responseEnd),e.redirectStart=Br(e.redirectStart),e.redirectEnd=Br(e.redirectEnd),e.domainLookupEnd=Br(e.domainLookupEnd),e.connectStart=Br(e.connectStart),e.connectEnd=Br(e.connectEnd),e.responseStart=Br(e.responseStart),
e.secureConnectionStart=Br(e.secureConnectionStart),e.domainLookupStart=Br(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=R.timing}else a=R.timing;return a}
function Cr(){return M("csi_use_time_origin")&&R.timeOrigin?Math.floor(R.timeOrigin):R.timing.navigationStart}
function Br(a){return Math.round(Cr()+a)}
function Dr(a){var b;(b=A("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},z("ytcsi."+(a||"")+"data_",b));return b}
function Er(a){a=Dr(a);a.info||(a.info={});return a.info}
function zr(a){a=Dr(a);a.tick||(a.tick={});return a.tick}
function Fr(a){a=Dr(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Gr(a){a=Fr(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function Hr(a){var b=Dr(a).nonce;b||(b=cq(),Dr(a).nonce=b);return b}
function Ir(a){var b=zr(a||""),c=yr(a);c&&!wr&&(Zl(tr,new sr(Math.round(c-b._start),a)),wr=!0)}
function Jr(a,b){for(var c=q(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!Jr(a[d],b[d]))return!1;return!0}
;function Kr(){if(R.getEntriesByType){var a=R.getEntriesByType("paint");if(a=hb(a,function(b){return"first-paint"===b.name}))return Br(a.startTime)}a=R.timing;
return a.hc?Math.max(0,a.hc):0}
;function Lr(){var a=A("ytcsi.debug");a||(a=[],z("ytcsi.debug",a),z("ytcsi.reference",{}));return a}
function Mr(a){a=a||"";var b=A("ytcsi.reference");b||(Lr(),b=A("ytcsi.reference"));if(b[a])return b[a];var c=Lr(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var T={},Nr=(T.auto_search="LATENCY_ACTION_AUTO_SEARCH",T.ad_to_ad="LATENCY_ACTION_AD_TO_AD",T.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",T["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",T.app_startup="LATENCY_ACTION_APP_STARTUP",T["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",T["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",T["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",T["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",T.browse="LATENCY_ACTION_BROWSE",
T.cast_splash="LATENCY_ACTION_CAST_SPLASH",T.channels="LATENCY_ACTION_CHANNELS",T.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",T["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",T["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",T["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",T["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",T["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",T["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",
T["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",T["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",T["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",T["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",T["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",T.chips="LATENCY_ACTION_CHIPS",T["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",T["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",
T["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",T.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",T.embed="LATENCY_ACTION_EMBED",T.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",T.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",T.explore="LATENCY_ACTION_EXPLORE",T.home="LATENCY_ACTION_HOME",T.library="LATENCY_ACTION_LIBRARY",T.live="LATENCY_ACTION_LIVE",T.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",T.onboarding="LATENCY_ACTION_ONBOARDING",
T.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",T.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",T.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",T.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",T["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",T["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",T.prebuffer="LATENCY_ACTION_PREBUFFER",T.prefetch="LATENCY_ACTION_PREFETCH",T.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",T.profile_switcher=
"LATENCY_ACTION_LOGIN",T.reel_watch="LATENCY_ACTION_REEL_WATCH",T.results="LATENCY_ACTION_RESULTS",T.search_ui="LATENCY_ACTION_SEARCH_UI",T.search_suggest="LATENCY_ACTION_SUGGEST",T.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",T.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",T.seek="LATENCY_ACTION_PLAYER_SEEK",T.settings="LATENCY_ACTION_SETTINGS",T.store="LATENCY_ACTION_STORE",T.tenx="LATENCY_ACTION_TENX",T.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",T.watch="LATENCY_ACTION_WATCH",T.watch_it_again=
"LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",T["watch,watch7"]="LATENCY_ACTION_WATCH",T["watch,watch7_html5"]="LATENCY_ACTION_WATCH",T["watch,watch7ad"]="LATENCY_ACTION_WATCH",T["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",T.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",T.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",T["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",T["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",T["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",T["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",
T["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",T["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",T["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",T["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",T["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",T.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",T.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",T.networkless_performance=
"LATENCY_ACTION_NETWORKLESS_PERFORMANCE",T),U={},Or=(U.ad_allowed="adTypesAllowed",U.yt_abt="adBreakType",U.ad_cpn="adClientPlaybackNonce",U.ad_docid="adVideoId",U.yt_ad_an="adNetworks",U.ad_at="adType",U.aida="appInstallDataAgeMs",U.browse_id="browseId",U.p="httpProtocol",U.t="transportProtocol",U.cs="commandSource",U.cpn="clientPlaybackNonce",U.ccs="creatorInfo.creatorCanaryState",U.ctop="creatorInfo.topEntityType",U.csn="clientScreenNonce",U.docid="videoId",U.GetHome_rid="requestIds",U.GetSearch_rid=
"requestIds",U.GetPlayer_rid="requestIds",U.GetWatchNext_rid="requestIds",U.GetBrowse_rid="requestIds",U.GetLibrary_rid="requestIds",U.is_continuation="isContinuation",U.is_nav="isNavigation",U.b_p="kabukiInfo.browseParams",U.is_prefetch="kabukiInfo.isPrefetch",U.is_secondary_nav="kabukiInfo.isSecondaryNav",U.nav_type="kabukiInfo.navigationType",U.prev_browse_id="kabukiInfo.prevBrowseId",U.query_source="kabukiInfo.querySource",U.voz_type="kabukiInfo.vozType",U.yt_lt="loadType",U.mver="creatorInfo.measurementVersion",
U.yt_ad="isMonetized",U.nr="webInfo.navigationReason",U.nrsu="navigationRequestedSameUrl",U.pnt="performanceNavigationTiming",U.prt="playbackRequiresTap",U.plt="playerInfo.playbackType",U.pis="playerInfo.playerInitializedState",U.paused="playerInfo.isPausedOnLoad",U.yt_pt="playerType",U.fmt="playerInfo.itag",U.yt_pl="watchInfo.isPlaylist",U.yt_pre="playerInfo.preloadType",U.yt_ad_pr="prerollAllowed",U.pa="previousAction",U.yt_red="isRedSubscriber",U.rce="mwebInfo.responseContentEncoding",U.rc="resourceInfo.resourceCache",
U.scrh="screenHeight",U.scrw="screenWidth",U.st="serverTimeMs",U.ssdm="shellStartupDurationMs",U.br_trs="tvInfo.bedrockTriggerState",U.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",U.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",U.label="tvInfo.label",U.is_mdx="tvInfo.isMdx",U.preloaded="tvInfo.isPreloaded",U.aac_type="tvInfo.authAccessCredentialType",U.upg_player_vis="playerInfo.visibilityState",U.query="unpluggedInfo.query",U.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",
U.yt_vst="videoStreamType",U.vph="viewportHeight",U.vpw="viewportWidth",U.yt_vis="isVisible",U.rcl="mwebInfo.responseContentLength",U.GetSettings_rid="requestIds",U.GetTrending_rid="requestIds",U.GetMusicSearchSuggestions_rid="requestIds",U.REQUEST_ID="requestIds",U),Pr="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
Qr={},Rr=(Qr.ccs="CANARY_STATE_",Qr.mver="MEASUREMENT_VERSION_",Qr.pis="PLAYER_INITIALIZED_STATE_",Qr.yt_pt="LATENCY_PLAYER_",Qr.pa="LATENCY_ACTION_",Qr.ctop="TOP_ENTITY_TYPE_",Qr.yt_vst="VIDEO_STREAM_TYPE_",Qr),Sr="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function Tr(a){return Nr[a]||"LATENCY_ACTION_UNKNOWN"}
function Ur(a,b,c){c=Fr(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in Or){c=Or[a];0<=cb(Pr,c)&&(b=!!b);a in Rr&&"string"===typeof b&&(b=Rr[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return nr({},d)}0<=cb(Sr,a)||Wp(new Q("Unknown label logged with GEL CSI",a))}
;var X={LATENCY_ACTION_KIDS_PROFILE_SWITCHER:90,LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER:100,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC:46,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR:37,LATENCY_ACTION_SPINNER_DISPLAYED:14,LATENCY_ACTION_PLAYABILITY_CHECK:10,LATENCY_ACTION_PROCESS:9,LATENCY_ACTION_APP_STARTUP:5,LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC:173,LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC:172,LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC:171,LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC:170,
LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC:169,LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC:168,LATENCY_ACTION_GET_OFFERS_RPC:167,LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC:166,LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC:165,LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC:164,LATENCY_ACTION_GET_OFFER_DETAILS_RPC:163,LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC:162,LATENCY_ACTION_GET_TIP_MODULE_RPC:161,LATENCY_ACTION_HANDLE_TRANSACTION_RPC:160,LATENCY_ACTION_COMPLETE_TRANSACTION_RPC:159,LATENCY_ACTION_GET_CART_RPC:158,
LATENCY_ACTION_THUMBNAIL_FETCH:156,LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK:154,LATENCY_ACTION_SHARE_VIDEO:153,LATENCY_ACTION_AD_TO_VIDEO_INT:152,LATENCY_ACTION_ABANDONED_BROWSE:151,LATENCY_ACTION_PLAYER_ROTATION:150,LATENCY_ACTION_SHOPPING_IN_APP:124,LATENCY_ACTION_PLAYER_ATTESTATION:121,LATENCY_ACTION_PLAYER_SEEK:119,LATENCY_ACTION_SUPER_STICKER_BUY_FLOW:114,LATENCY_ACTION_BLOCKS_PERFORMANCE:148,LATENCY_ACTION_ASSISTANT_QUERY:138,LATENCY_ACTION_ASSISTANT_SETTINGS:137,LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF:129,
LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF:128,LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE:127,LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION:123,LATENCY_ACTION_NETWORKLESS_PERFORMANCE:122,LATENCY_ACTION_DOWNLOADS_EXPANSION:133,LATENCY_ACTION_ENTITY_TRANSFORM:131,LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER:96,LATENCY_ACTION_EMBEDS_SET_VIDEO:95,LATENCY_ACTION_SETTINGS:93,LATENCY_ACTION_ABANDONED_STARTUP:81,LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY:80,LATENCY_ACTION_MEDIA_BROWSER_SEARCH:79,LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE:78,
LATENCY_ACTION_WHO_IS_WATCHING:77,LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH:76,LATENCY_ACTION_LITE_SWITCH_ACCOUNT:73,LATENCY_ACTION_ELEMENTS_PERFORMANCE:70,LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION:69,LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION:65,LATENCY_ACTION_OFFLINE_STORE_START:61,LATENCY_ACTION_REEL_EDITOR:58,LATENCY_ACTION_CHANNEL_SUBSCRIBE:56,LATENCY_ACTION_CHANNEL_PREVIEW:55,LATENCY_ACTION_PREFETCH:52,LATENCY_ACTION_ABANDONED_WATCH:45,LATENCY_ACTION_LOAD_COMMENT_REPLIES:26,LATENCY_ACTION_LOAD_COMMENTS:25,
LATENCY_ACTION_EDIT_COMMENT:24,LATENCY_ACTION_NEW_COMMENT:23,LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING:19,LATENCY_ACTION_EMBED:18,LATENCY_ACTION_MDX_LAUNCH:15,LATENCY_ACTION_RESOLVE_URL:13,LATENCY_ACTION_CAST_SPLASH:149,LATENCY_ACTION_MDX_CAST:120,LATENCY_ACTION_MDX_COMMAND:12,LATENCY_ACTION_REEL_SELECT_SEGMENT:136,LATENCY_ACTION_ACCELERATED_EFFECTS:145,LATENCY_ACTION_UPLOAD_AUDIO_MIXER:147,LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING:157,LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING:146,LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK:130,
LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD:125,LATENCY_ACTION_SHORTS_VIDEO_INGESTION:155,LATENCY_ACTION_SHORTS_GALLERY:107,LATENCY_ACTION_SHORTS_TRIM:105,LATENCY_ACTION_SHORTS_EDIT:104,LATENCY_ACTION_SHORTS_CAMERA:103,LATENCY_ACTION_PARENT_TOOLS_DASHBOARD:102,LATENCY_ACTION_PARENT_TOOLS_COLLECTION:101,LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS:116,LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS:115,LATENCY_ACTION_MUSIC_ALBUM_DETAIL:72,LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL:71,LATENCY_ACTION_STORE:175,LATENCY_ACTION_CHIPS:68,
LATENCY_ACTION_SEARCH_ZERO_STATE:67,LATENCY_ACTION_LIVE_PAGINATION:117,LATENCY_ACTION_LIVE:20,LATENCY_ACTION_PREBUFFER:40,LATENCY_ACTION_TENX:39,LATENCY_ACTION_KIDS_PROFILE_SETTINGS:94,LATENCY_ACTION_KIDS_WATCH_IT_AGAIN:92,LATENCY_ACTION_KIDS_SECRET_CODE:91,LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS:89,LATENCY_ACTION_KIDS_ONBOARDING:88,LATENCY_ACTION_KIDS_VOICE_SEARCH:82,LATENCY_ACTION_KIDS_CURATED_COLLECTION:62,LATENCY_ACTION_KIDS_LIBRARY:53,LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS:38,LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION:74,
LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING:141,LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS:142,LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC:51,LATENCY_ACTION_CREATOR_VIDEO_EDITOR:50,LATENCY_ACTION_CREATOR_VIDEO_EDIT:36,LATENCY_ACTION_CREATOR_VIDEO_COMMENTS:34,LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS:33,LATENCY_ACTION_CREATOR_SONG_ANALYTICS:176,LATENCY_ACTION_CREATOR_POST_LIST:112,LATENCY_ACTION_CREATOR_POST_EDIT:110,LATENCY_ACTION_CREATOR_POST_COMMENTS:111,LATENCY_ACTION_CREATOR_LIVE_STREAMING:108,LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT:174,
LATENCY_ACTION_CREATOR_DIALOG_UPLOADS:86,LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES:87,LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS:32,LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS:48,LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS:139,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC:99,LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION:43,LATENCY_ACTION_CREATOR_CHANNEL_EDITING:113,LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD:49,LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT:44,LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS:66,LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS:31,
LATENCY_ACTION_CREATOR_ARTIST_PROFILE:85,LATENCY_ACTION_CREATOR_ARTIST_CONCERTS:84,LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS:83,LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE:140,LATENCY_ACTION_STORYBOARD_THUMBNAILS:118,LATENCY_ACTION_SEARCH_THUMBNAILS:59,LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD:54,LATENCY_ACTION_VOICE_ASSISTANT:47,LATENCY_ACTION_SEARCH_UI:35,LATENCY_ACTION_SUGGEST:30,LATENCY_ACTION_AUTO_SEARCH:126,LATENCY_ACTION_DOWNLOADS:98,LATENCY_ACTION_EXPLORE:75,LATENCY_ACTION_VIDEO_LIST:63,LATENCY_ACTION_HOME_RESUME:60,
LATENCY_ACTION_SUBSCRIPTIONS_LIST:57,LATENCY_ACTION_THUMBNAIL_LOAD:42,LATENCY_ACTION_FIRST_THUMBNAIL_LOAD:29,LATENCY_ACTION_SUBSCRIPTIONS_FEED:109,LATENCY_ACTION_SUBSCRIPTIONS:28,LATENCY_ACTION_TRENDING:27,LATENCY_ACTION_LIBRARY:21,LATENCY_ACTION_VIDEO_THUMBNAIL:8,LATENCY_ACTION_SHOW_MORE:7,LATENCY_ACTION_VIDEO_PREVIEW:6,LATENCY_ACTION_PREBUFFER_VIDEO:144,LATENCY_ACTION_PREFETCH_VIDEO:143,LATENCY_ACTION_DIRECT_PLAYBACK:132,LATENCY_ACTION_REEL_WATCH:41,LATENCY_ACTION_AD_TO_AD:22,LATENCY_ACTION_VIDEO_TO_AD:17,
LATENCY_ACTION_AD_TO_VIDEO:16,LATENCY_ACTION_ONBOARDING:135,LATENCY_ACTION_LOGIN:97,LATENCY_ACTION_BROWSE:11,LATENCY_ACTION_CHANNELS:4,LATENCY_ACTION_WATCH:3,LATENCY_ACTION_RESULTS:2,LATENCY_ACTION_HOME:1,LATENCY_ACTION_STARTUP:106,LATENCY_ACTION_UNKNOWN:0};X[X.LATENCY_ACTION_KIDS_PROFILE_SWITCHER]="LATENCY_ACTION_KIDS_PROFILE_SWITCHER";X[X.LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER]="LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER";X[X.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC";
X[X.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR";X[X.LATENCY_ACTION_SPINNER_DISPLAYED]="LATENCY_ACTION_SPINNER_DISPLAYED";X[X.LATENCY_ACTION_PLAYABILITY_CHECK]="LATENCY_ACTION_PLAYABILITY_CHECK";X[X.LATENCY_ACTION_PROCESS]="LATENCY_ACTION_PROCESS";X[X.LATENCY_ACTION_APP_STARTUP]="LATENCY_ACTION_APP_STARTUP";X[X.LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC]="LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC";
X[X.LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC]="LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC";X[X.LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC]="LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC";X[X.LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC]="LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC";X[X.LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC]="LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC";X[X.LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC]="LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC";X[X.LATENCY_ACTION_GET_OFFERS_RPC]="LATENCY_ACTION_GET_OFFERS_RPC";
X[X.LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC]="LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC";X[X.LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC]="LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC";X[X.LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC]="LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC";X[X.LATENCY_ACTION_GET_OFFER_DETAILS_RPC]="LATENCY_ACTION_GET_OFFER_DETAILS_RPC";X[X.LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC]="LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC";
X[X.LATENCY_ACTION_GET_TIP_MODULE_RPC]="LATENCY_ACTION_GET_TIP_MODULE_RPC";X[X.LATENCY_ACTION_HANDLE_TRANSACTION_RPC]="LATENCY_ACTION_HANDLE_TRANSACTION_RPC";X[X.LATENCY_ACTION_COMPLETE_TRANSACTION_RPC]="LATENCY_ACTION_COMPLETE_TRANSACTION_RPC";X[X.LATENCY_ACTION_GET_CART_RPC]="LATENCY_ACTION_GET_CART_RPC";X[X.LATENCY_ACTION_THUMBNAIL_FETCH]="LATENCY_ACTION_THUMBNAIL_FETCH";X[X.LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK]="LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK";X[X.LATENCY_ACTION_SHARE_VIDEO]="LATENCY_ACTION_SHARE_VIDEO";
X[X.LATENCY_ACTION_AD_TO_VIDEO_INT]="LATENCY_ACTION_AD_TO_VIDEO_INT";X[X.LATENCY_ACTION_ABANDONED_BROWSE]="LATENCY_ACTION_ABANDONED_BROWSE";X[X.LATENCY_ACTION_PLAYER_ROTATION]="LATENCY_ACTION_PLAYER_ROTATION";X[X.LATENCY_ACTION_SHOPPING_IN_APP]="LATENCY_ACTION_SHOPPING_IN_APP";X[X.LATENCY_ACTION_PLAYER_ATTESTATION]="LATENCY_ACTION_PLAYER_ATTESTATION";X[X.LATENCY_ACTION_PLAYER_SEEK]="LATENCY_ACTION_PLAYER_SEEK";X[X.LATENCY_ACTION_SUPER_STICKER_BUY_FLOW]="LATENCY_ACTION_SUPER_STICKER_BUY_FLOW";
X[X.LATENCY_ACTION_BLOCKS_PERFORMANCE]="LATENCY_ACTION_BLOCKS_PERFORMANCE";X[X.LATENCY_ACTION_ASSISTANT_QUERY]="LATENCY_ACTION_ASSISTANT_QUERY";X[X.LATENCY_ACTION_ASSISTANT_SETTINGS]="LATENCY_ACTION_ASSISTANT_SETTINGS";X[X.LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF";X[X.LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF";X[X.LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE]="LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE";
X[X.LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION]="LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION";X[X.LATENCY_ACTION_NETWORKLESS_PERFORMANCE]="LATENCY_ACTION_NETWORKLESS_PERFORMANCE";X[X.LATENCY_ACTION_DOWNLOADS_EXPANSION]="LATENCY_ACTION_DOWNLOADS_EXPANSION";X[X.LATENCY_ACTION_ENTITY_TRANSFORM]="LATENCY_ACTION_ENTITY_TRANSFORM";X[X.LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER]="LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER";X[X.LATENCY_ACTION_EMBEDS_SET_VIDEO]="LATENCY_ACTION_EMBEDS_SET_VIDEO";
X[X.LATENCY_ACTION_SETTINGS]="LATENCY_ACTION_SETTINGS";X[X.LATENCY_ACTION_ABANDONED_STARTUP]="LATENCY_ACTION_ABANDONED_STARTUP";X[X.LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY]="LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY";X[X.LATENCY_ACTION_MEDIA_BROWSER_SEARCH]="LATENCY_ACTION_MEDIA_BROWSER_SEARCH";X[X.LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE]="LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE";X[X.LATENCY_ACTION_WHO_IS_WATCHING]="LATENCY_ACTION_WHO_IS_WATCHING";X[X.LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH]="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH";
X[X.LATENCY_ACTION_LITE_SWITCH_ACCOUNT]="LATENCY_ACTION_LITE_SWITCH_ACCOUNT";X[X.LATENCY_ACTION_ELEMENTS_PERFORMANCE]="LATENCY_ACTION_ELEMENTS_PERFORMANCE";X[X.LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION]="LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION";X[X.LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION]="LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION";X[X.LATENCY_ACTION_OFFLINE_STORE_START]="LATENCY_ACTION_OFFLINE_STORE_START";X[X.LATENCY_ACTION_REEL_EDITOR]="LATENCY_ACTION_REEL_EDITOR";
X[X.LATENCY_ACTION_CHANNEL_SUBSCRIBE]="LATENCY_ACTION_CHANNEL_SUBSCRIBE";X[X.LATENCY_ACTION_CHANNEL_PREVIEW]="LATENCY_ACTION_CHANNEL_PREVIEW";X[X.LATENCY_ACTION_PREFETCH]="LATENCY_ACTION_PREFETCH";X[X.LATENCY_ACTION_ABANDONED_WATCH]="LATENCY_ACTION_ABANDONED_WATCH";X[X.LATENCY_ACTION_LOAD_COMMENT_REPLIES]="LATENCY_ACTION_LOAD_COMMENT_REPLIES";X[X.LATENCY_ACTION_LOAD_COMMENTS]="LATENCY_ACTION_LOAD_COMMENTS";X[X.LATENCY_ACTION_EDIT_COMMENT]="LATENCY_ACTION_EDIT_COMMENT";
X[X.LATENCY_ACTION_NEW_COMMENT]="LATENCY_ACTION_NEW_COMMENT";X[X.LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING]="LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING";X[X.LATENCY_ACTION_EMBED]="LATENCY_ACTION_EMBED";X[X.LATENCY_ACTION_MDX_LAUNCH]="LATENCY_ACTION_MDX_LAUNCH";X[X.LATENCY_ACTION_RESOLVE_URL]="LATENCY_ACTION_RESOLVE_URL";X[X.LATENCY_ACTION_CAST_SPLASH]="LATENCY_ACTION_CAST_SPLASH";X[X.LATENCY_ACTION_MDX_CAST]="LATENCY_ACTION_MDX_CAST";X[X.LATENCY_ACTION_MDX_COMMAND]="LATENCY_ACTION_MDX_COMMAND";
X[X.LATENCY_ACTION_REEL_SELECT_SEGMENT]="LATENCY_ACTION_REEL_SELECT_SEGMENT";X[X.LATENCY_ACTION_ACCELERATED_EFFECTS]="LATENCY_ACTION_ACCELERATED_EFFECTS";X[X.LATENCY_ACTION_UPLOAD_AUDIO_MIXER]="LATENCY_ACTION_UPLOAD_AUDIO_MIXER";X[X.LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING]="LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING";X[X.LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING]="LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING";X[X.LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK]="LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK";
X[X.LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD]="LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD";X[X.LATENCY_ACTION_SHORTS_VIDEO_INGESTION]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION";X[X.LATENCY_ACTION_SHORTS_GALLERY]="LATENCY_ACTION_SHORTS_GALLERY";X[X.LATENCY_ACTION_SHORTS_TRIM]="LATENCY_ACTION_SHORTS_TRIM";X[X.LATENCY_ACTION_SHORTS_EDIT]="LATENCY_ACTION_SHORTS_EDIT";X[X.LATENCY_ACTION_SHORTS_CAMERA]="LATENCY_ACTION_SHORTS_CAMERA";X[X.LATENCY_ACTION_PARENT_TOOLS_DASHBOARD]="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD";
X[X.LATENCY_ACTION_PARENT_TOOLS_COLLECTION]="LATENCY_ACTION_PARENT_TOOLS_COLLECTION";X[X.LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS";X[X.LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS";X[X.LATENCY_ACTION_MUSIC_ALBUM_DETAIL]="LATENCY_ACTION_MUSIC_ALBUM_DETAIL";X[X.LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL]="LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL";X[X.LATENCY_ACTION_STORE]="LATENCY_ACTION_STORE";
X[X.LATENCY_ACTION_CHIPS]="LATENCY_ACTION_CHIPS";X[X.LATENCY_ACTION_SEARCH_ZERO_STATE]="LATENCY_ACTION_SEARCH_ZERO_STATE";X[X.LATENCY_ACTION_LIVE_PAGINATION]="LATENCY_ACTION_LIVE_PAGINATION";X[X.LATENCY_ACTION_LIVE]="LATENCY_ACTION_LIVE";X[X.LATENCY_ACTION_PREBUFFER]="LATENCY_ACTION_PREBUFFER";X[X.LATENCY_ACTION_TENX]="LATENCY_ACTION_TENX";X[X.LATENCY_ACTION_KIDS_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PROFILE_SETTINGS";X[X.LATENCY_ACTION_KIDS_WATCH_IT_AGAIN]="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN";
X[X.LATENCY_ACTION_KIDS_SECRET_CODE]="LATENCY_ACTION_KIDS_SECRET_CODE";X[X.LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS";X[X.LATENCY_ACTION_KIDS_ONBOARDING]="LATENCY_ACTION_KIDS_ONBOARDING";X[X.LATENCY_ACTION_KIDS_VOICE_SEARCH]="LATENCY_ACTION_KIDS_VOICE_SEARCH";X[X.LATENCY_ACTION_KIDS_CURATED_COLLECTION]="LATENCY_ACTION_KIDS_CURATED_COLLECTION";X[X.LATENCY_ACTION_KIDS_LIBRARY]="LATENCY_ACTION_KIDS_LIBRARY";
X[X.LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS";X[X.LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION";X[X.LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING";X[X.LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS";X[X.LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC";
X[X.LATENCY_ACTION_CREATOR_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR";X[X.LATENCY_ACTION_CREATOR_VIDEO_EDIT]="LATENCY_ACTION_CREATOR_VIDEO_EDIT";X[X.LATENCY_ACTION_CREATOR_VIDEO_COMMENTS]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS";X[X.LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS";X[X.LATENCY_ACTION_CREATOR_SONG_ANALYTICS]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS";X[X.LATENCY_ACTION_CREATOR_POST_LIST]="LATENCY_ACTION_CREATOR_POST_LIST";
X[X.LATENCY_ACTION_CREATOR_POST_EDIT]="LATENCY_ACTION_CREATOR_POST_EDIT";X[X.LATENCY_ACTION_CREATOR_POST_COMMENTS]="LATENCY_ACTION_CREATOR_POST_COMMENTS";X[X.LATENCY_ACTION_CREATOR_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_LIVE_STREAMING";X[X.LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT";X[X.LATENCY_ACTION_CREATOR_DIALOG_UPLOADS]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS";X[X.LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES";
X[X.LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS";X[X.LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS";X[X.LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS";X[X.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC";X[X.LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION";X[X.LATENCY_ACTION_CREATOR_CHANNEL_EDITING]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING";
X[X.LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD]="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD";X[X.LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT";X[X.LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS";X[X.LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS";X[X.LATENCY_ACTION_CREATOR_ARTIST_PROFILE]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE";X[X.LATENCY_ACTION_CREATOR_ARTIST_CONCERTS]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS";
X[X.LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS";X[X.LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE";X[X.LATENCY_ACTION_STORYBOARD_THUMBNAILS]="LATENCY_ACTION_STORYBOARD_THUMBNAILS";X[X.LATENCY_ACTION_SEARCH_THUMBNAILS]="LATENCY_ACTION_SEARCH_THUMBNAILS";X[X.LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD]="LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD";X[X.LATENCY_ACTION_VOICE_ASSISTANT]="LATENCY_ACTION_VOICE_ASSISTANT";
X[X.LATENCY_ACTION_SEARCH_UI]="LATENCY_ACTION_SEARCH_UI";X[X.LATENCY_ACTION_SUGGEST]="LATENCY_ACTION_SUGGEST";X[X.LATENCY_ACTION_AUTO_SEARCH]="LATENCY_ACTION_AUTO_SEARCH";X[X.LATENCY_ACTION_DOWNLOADS]="LATENCY_ACTION_DOWNLOADS";X[X.LATENCY_ACTION_EXPLORE]="LATENCY_ACTION_EXPLORE";X[X.LATENCY_ACTION_VIDEO_LIST]="LATENCY_ACTION_VIDEO_LIST";X[X.LATENCY_ACTION_HOME_RESUME]="LATENCY_ACTION_HOME_RESUME";X[X.LATENCY_ACTION_SUBSCRIPTIONS_LIST]="LATENCY_ACTION_SUBSCRIPTIONS_LIST";
X[X.LATENCY_ACTION_THUMBNAIL_LOAD]="LATENCY_ACTION_THUMBNAIL_LOAD";X[X.LATENCY_ACTION_FIRST_THUMBNAIL_LOAD]="LATENCY_ACTION_FIRST_THUMBNAIL_LOAD";X[X.LATENCY_ACTION_SUBSCRIPTIONS_FEED]="LATENCY_ACTION_SUBSCRIPTIONS_FEED";X[X.LATENCY_ACTION_SUBSCRIPTIONS]="LATENCY_ACTION_SUBSCRIPTIONS";X[X.LATENCY_ACTION_TRENDING]="LATENCY_ACTION_TRENDING";X[X.LATENCY_ACTION_LIBRARY]="LATENCY_ACTION_LIBRARY";X[X.LATENCY_ACTION_VIDEO_THUMBNAIL]="LATENCY_ACTION_VIDEO_THUMBNAIL";X[X.LATENCY_ACTION_SHOW_MORE]="LATENCY_ACTION_SHOW_MORE";
X[X.LATENCY_ACTION_VIDEO_PREVIEW]="LATENCY_ACTION_VIDEO_PREVIEW";X[X.LATENCY_ACTION_PREBUFFER_VIDEO]="LATENCY_ACTION_PREBUFFER_VIDEO";X[X.LATENCY_ACTION_PREFETCH_VIDEO]="LATENCY_ACTION_PREFETCH_VIDEO";X[X.LATENCY_ACTION_DIRECT_PLAYBACK]="LATENCY_ACTION_DIRECT_PLAYBACK";X[X.LATENCY_ACTION_REEL_WATCH]="LATENCY_ACTION_REEL_WATCH";X[X.LATENCY_ACTION_AD_TO_AD]="LATENCY_ACTION_AD_TO_AD";X[X.LATENCY_ACTION_VIDEO_TO_AD]="LATENCY_ACTION_VIDEO_TO_AD";X[X.LATENCY_ACTION_AD_TO_VIDEO]="LATENCY_ACTION_AD_TO_VIDEO";
X[X.LATENCY_ACTION_ONBOARDING]="LATENCY_ACTION_ONBOARDING";X[X.LATENCY_ACTION_LOGIN]="LATENCY_ACTION_LOGIN";X[X.LATENCY_ACTION_BROWSE]="LATENCY_ACTION_BROWSE";X[X.LATENCY_ACTION_CHANNELS]="LATENCY_ACTION_CHANNELS";X[X.LATENCY_ACTION_WATCH]="LATENCY_ACTION_WATCH";X[X.LATENCY_ACTION_RESULTS]="LATENCY_ACTION_RESULTS";X[X.LATENCY_ACTION_HOME]="LATENCY_ACTION_HOME";X[X.LATENCY_ACTION_STARTUP]="LATENCY_ACTION_STARTUP";X[X.LATENCY_ACTION_UNKNOWN]="LATENCY_ACTION_UNKNOWN";
var Vr={LATENCY_NETWORK_MOBILE:2,LATENCY_NETWORK_WIFI:1,LATENCY_NETWORK_UNKNOWN:0};Vr[Vr.LATENCY_NETWORK_MOBILE]="LATENCY_NETWORK_MOBILE";Vr[Vr.LATENCY_NETWORK_WIFI]="LATENCY_NETWORK_WIFI";Vr[Vr.LATENCY_NETWORK_UNKNOWN]="LATENCY_NETWORK_UNKNOWN";var Y={CONN_INVALID:31,CONN_CELLULAR_5G_NSA:12,CONN_CELLULAR_5G_SA:11,CONN_WIFI_METERED:10,CONN_CELLULAR_5G:9,CONN_DISCO:8,CONN_CELLULAR_UNKNOWN:7,CONN_CELLULAR_4G:6,CONN_CELLULAR_3G:5,CONN_CELLULAR_2G:4,CONN_WIFI:3,CONN_NONE:2,CONN_UNKNOWN:1,CONN_DEFAULT:0};
Y[Y.CONN_INVALID]="CONN_INVALID";Y[Y.CONN_CELLULAR_5G_NSA]="CONN_CELLULAR_5G_NSA";Y[Y.CONN_CELLULAR_5G_SA]="CONN_CELLULAR_5G_SA";Y[Y.CONN_WIFI_METERED]="CONN_WIFI_METERED";Y[Y.CONN_CELLULAR_5G]="CONN_CELLULAR_5G";Y[Y.CONN_DISCO]="CONN_DISCO";Y[Y.CONN_CELLULAR_UNKNOWN]="CONN_CELLULAR_UNKNOWN";Y[Y.CONN_CELLULAR_4G]="CONN_CELLULAR_4G";Y[Y.CONN_CELLULAR_3G]="CONN_CELLULAR_3G";Y[Y.CONN_CELLULAR_2G]="CONN_CELLULAR_2G";Y[Y.CONN_WIFI]="CONN_WIFI";Y[Y.CONN_NONE]="CONN_NONE";Y[Y.CONN_UNKNOWN]="CONN_UNKNOWN";
Y[Y.CONN_DEFAULT]="CONN_DEFAULT";
var Z={DETAILED_NETWORK_TYPE_NR_NSA:126,DETAILED_NETWORK_TYPE_NR_SA:125,DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED:124,DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT:123,DETAILED_NETWORK_TYPE_DISCONNECTED:122,DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN:121,DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN:120,DETAILED_NETWORK_TYPE_WIMAX:119,DETAILED_NETWORK_TYPE_ETHERNET:118,DETAILED_NETWORK_TYPE_BLUETOOTH:117,DETAILED_NETWORK_TYPE_WIFI:116,DETAILED_NETWORK_TYPE_LTE:115,DETAILED_NETWORK_TYPE_HSPAP:114,DETAILED_NETWORK_TYPE_EHRPD:113,
DETAILED_NETWORK_TYPE_EVDO_B:112,DETAILED_NETWORK_TYPE_UMTS:111,DETAILED_NETWORK_TYPE_IDEN:110,DETAILED_NETWORK_TYPE_HSUPA:109,DETAILED_NETWORK_TYPE_HSPA:108,DETAILED_NETWORK_TYPE_HSDPA:107,DETAILED_NETWORK_TYPE_EVDO_A:106,DETAILED_NETWORK_TYPE_EVDO_0:105,DETAILED_NETWORK_TYPE_CDMA:104,DETAILED_NETWORK_TYPE_1_X_RTT:103,DETAILED_NETWORK_TYPE_GPRS:102,DETAILED_NETWORK_TYPE_EDGE:101,DETAILED_NETWORK_TYPE_UNKNOWN:0};Z[Z.DETAILED_NETWORK_TYPE_NR_NSA]="DETAILED_NETWORK_TYPE_NR_NSA";
Z[Z.DETAILED_NETWORK_TYPE_NR_SA]="DETAILED_NETWORK_TYPE_NR_SA";Z[Z.DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED]="DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED";Z[Z.DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT]="DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT";Z[Z.DETAILED_NETWORK_TYPE_DISCONNECTED]="DETAILED_NETWORK_TYPE_DISCONNECTED";Z[Z.DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN";Z[Z.DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN";
Z[Z.DETAILED_NETWORK_TYPE_WIMAX]="DETAILED_NETWORK_TYPE_WIMAX";Z[Z.DETAILED_NETWORK_TYPE_ETHERNET]="DETAILED_NETWORK_TYPE_ETHERNET";Z[Z.DETAILED_NETWORK_TYPE_BLUETOOTH]="DETAILED_NETWORK_TYPE_BLUETOOTH";Z[Z.DETAILED_NETWORK_TYPE_WIFI]="DETAILED_NETWORK_TYPE_WIFI";Z[Z.DETAILED_NETWORK_TYPE_LTE]="DETAILED_NETWORK_TYPE_LTE";Z[Z.DETAILED_NETWORK_TYPE_HSPAP]="DETAILED_NETWORK_TYPE_HSPAP";Z[Z.DETAILED_NETWORK_TYPE_EHRPD]="DETAILED_NETWORK_TYPE_EHRPD";Z[Z.DETAILED_NETWORK_TYPE_EVDO_B]="DETAILED_NETWORK_TYPE_EVDO_B";
Z[Z.DETAILED_NETWORK_TYPE_UMTS]="DETAILED_NETWORK_TYPE_UMTS";Z[Z.DETAILED_NETWORK_TYPE_IDEN]="DETAILED_NETWORK_TYPE_IDEN";Z[Z.DETAILED_NETWORK_TYPE_HSUPA]="DETAILED_NETWORK_TYPE_HSUPA";Z[Z.DETAILED_NETWORK_TYPE_HSPA]="DETAILED_NETWORK_TYPE_HSPA";Z[Z.DETAILED_NETWORK_TYPE_HSDPA]="DETAILED_NETWORK_TYPE_HSDPA";Z[Z.DETAILED_NETWORK_TYPE_EVDO_A]="DETAILED_NETWORK_TYPE_EVDO_A";Z[Z.DETAILED_NETWORK_TYPE_EVDO_0]="DETAILED_NETWORK_TYPE_EVDO_0";Z[Z.DETAILED_NETWORK_TYPE_CDMA]="DETAILED_NETWORK_TYPE_CDMA";
Z[Z.DETAILED_NETWORK_TYPE_1_X_RTT]="DETAILED_NETWORK_TYPE_1_X_RTT";Z[Z.DETAILED_NETWORK_TYPE_GPRS]="DETAILED_NETWORK_TYPE_GPRS";Z[Z.DETAILED_NETWORK_TYPE_EDGE]="DETAILED_NETWORK_TYPE_EDGE";Z[Z.DETAILED_NETWORK_TYPE_UNKNOWN]="DETAILED_NETWORK_TYPE_UNKNOWN";var Wr={LATENCY_PLAYER_RTSP:7,LATENCY_PLAYER_HTML5_INLINE:6,LATENCY_PLAYER_HTML5_FULLSCREEN:5,LATENCY_PLAYER_HTML5:4,LATENCY_PLAYER_FRAMEWORK:3,LATENCY_PLAYER_FLASH:2,LATENCY_PLAYER_EXO:1,LATENCY_PLAYER_UNKNOWN:0};Wr[Wr.LATENCY_PLAYER_RTSP]="LATENCY_PLAYER_RTSP";
Wr[Wr.LATENCY_PLAYER_HTML5_INLINE]="LATENCY_PLAYER_HTML5_INLINE";Wr[Wr.LATENCY_PLAYER_HTML5_FULLSCREEN]="LATENCY_PLAYER_HTML5_FULLSCREEN";Wr[Wr.LATENCY_PLAYER_HTML5]="LATENCY_PLAYER_HTML5";Wr[Wr.LATENCY_PLAYER_FRAMEWORK]="LATENCY_PLAYER_FRAMEWORK";Wr[Wr.LATENCY_PLAYER_FLASH]="LATENCY_PLAYER_FLASH";Wr[Wr.LATENCY_PLAYER_EXO]="LATENCY_PLAYER_EXO";Wr[Wr.LATENCY_PLAYER_UNKNOWN]="LATENCY_PLAYER_UNKNOWN";
var Xr={LATENCY_AD_BREAK_TYPE_POSTROLL:3,LATENCY_AD_BREAK_TYPE_MIDROLL:2,LATENCY_AD_BREAK_TYPE_PREROLL:1,LATENCY_AD_BREAK_TYPE_UNKNOWN:0};Xr[Xr.LATENCY_AD_BREAK_TYPE_POSTROLL]="LATENCY_AD_BREAK_TYPE_POSTROLL";Xr[Xr.LATENCY_AD_BREAK_TYPE_MIDROLL]="LATENCY_AD_BREAK_TYPE_MIDROLL";Xr[Xr.LATENCY_AD_BREAK_TYPE_PREROLL]="LATENCY_AD_BREAK_TYPE_PREROLL";Xr[Xr.LATENCY_AD_BREAK_TYPE_UNKNOWN]="LATENCY_AD_BREAK_TYPE_UNKNOWN";var Yr={LATENCY_ACTION_ERROR_STARTUP_TIMEOUT:1,LATENCY_ACTION_ERROR_UNSPECIFIED:0};
Yr[Yr.LATENCY_ACTION_ERROR_STARTUP_TIMEOUT]="LATENCY_ACTION_ERROR_STARTUP_TIMEOUT";Yr[Yr.LATENCY_ACTION_ERROR_UNSPECIFIED]="LATENCY_ACTION_ERROR_UNSPECIFIED";var Zr={LIVE_STREAM_MODE_WINDOW:5,LIVE_STREAM_MODE_POST:4,LIVE_STREAM_MODE_LP:3,LIVE_STREAM_MODE_LIVE:2,LIVE_STREAM_MODE_DVR:1,LIVE_STREAM_MODE_UNKNOWN:0};Zr[Zr.LIVE_STREAM_MODE_WINDOW]="LIVE_STREAM_MODE_WINDOW";Zr[Zr.LIVE_STREAM_MODE_POST]="LIVE_STREAM_MODE_POST";Zr[Zr.LIVE_STREAM_MODE_LP]="LIVE_STREAM_MODE_LP";
Zr[Zr.LIVE_STREAM_MODE_LIVE]="LIVE_STREAM_MODE_LIVE";Zr[Zr.LIVE_STREAM_MODE_DVR]="LIVE_STREAM_MODE_DVR";Zr[Zr.LIVE_STREAM_MODE_UNKNOWN]="LIVE_STREAM_MODE_UNKNOWN";var $r={VIDEO_STREAM_TYPE_VOD:3,VIDEO_STREAM_TYPE_DVR:2,VIDEO_STREAM_TYPE_LIVE:1,VIDEO_STREAM_TYPE_UNSPECIFIED:0};$r[$r.VIDEO_STREAM_TYPE_VOD]="VIDEO_STREAM_TYPE_VOD";$r[$r.VIDEO_STREAM_TYPE_DVR]="VIDEO_STREAM_TYPE_DVR";$r[$r.VIDEO_STREAM_TYPE_LIVE]="VIDEO_STREAM_TYPE_LIVE";$r[$r.VIDEO_STREAM_TYPE_UNSPECIFIED]="VIDEO_STREAM_TYPE_UNSPECIFIED";
var as={YT_IDB_TRANSACTION_TYPE_READ:2,YT_IDB_TRANSACTION_TYPE_WRITE:1,YT_IDB_TRANSACTION_TYPE_UNKNOWN:0};as[as.YT_IDB_TRANSACTION_TYPE_READ]="YT_IDB_TRANSACTION_TYPE_READ";as[as.YT_IDB_TRANSACTION_TYPE_WRITE]="YT_IDB_TRANSACTION_TYPE_WRITE";as[as.YT_IDB_TRANSACTION_TYPE_UNKNOWN]="YT_IDB_TRANSACTION_TYPE_UNKNOWN";var bs={PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN:2,PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT:1,PLAYER_ROTATION_TYPE_UNKNOWN:0};bs[bs.PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN]="PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN";
bs[bs.PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT]="PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT";bs[bs.PLAYER_ROTATION_TYPE_UNKNOWN]="PLAYER_ROTATION_TYPE_UNKNOWN";var cs="actionVisualElement spinnerInfo resourceInfo playerInfo commentInfo mdxInfo watchInfo thumbnailLoadInfo creatorInfo unpluggedInfo reelInfo subscriptionsFeedInfo requestIds mediaBrowserActionInfo musicLoadActionInfo shoppingInfo prefetchInfo accelerationSession webInfo tvInfo kabukiInfo mwebInfo musicInfo".split(" ");var ds=y.ytLoggingLatencyUsageStats_||{};z("ytLoggingLatencyUsageStats_",ds);function es(){this.i=0}
function fs(){es.i||(es.i=new es);return es.i}
es.prototype.tick=function(a,b,c,d){gs(this,"tick_"+a+"_"+b)||(c={timestamp:c,cttAuthInfo:d},M("web_csi_via_jspb")?(d=new Jh,C(d,1,a),C(d,2,b),a=new Mh,zd(a,Jh,5,Nh,d),Hp(a,c)):lk("latencyActionTicked",{tickName:a,clientActionNonce:b},c))};
es.prototype.info=function(a,b,c){var d=Object.keys(a).join("");gs(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,lk("latencyActionInfo",a,{cttAuthInfo:c}))};
es.prototype.jspbInfo=function(a,b,c){for(var d="",e=0;e<a.toJSON().length;e++)void 0!==a.toJSON()[e]&&(d=0===e?d.concat(""+e):d.concat("_"+e));gs(this,"info_"+d+"_"+b)||(C(a,2,b),b={cttAuthInfo:c},c=new Mh,zd(c,Dh,7,Nh,a),Hp(c,b))};
es.prototype.span=function(a,b,c){var d=Object.keys(a).join("");gs(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,lk("latencyActionSpan",a,{cttAuthInfo:c}))};
function gs(a,b){ds[b]=ds[b]||{count:0};var c=ds[b];c.count++;c.time=P();a.i||(a.i=Vj(function(){var d=P(),e;for(e in ds)ds[e]&&6E4<d-ds[e].time&&delete ds[e];a&&(a.i=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new Q("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Wp(c)),!0):!1}
;function hs(){var a=["ol"];Mr("").info.actionType="embed";a&&Zh("TIMING_AFT_KEYS",a);Zh("TIMING_ACTION","embed");is();a=Er();var b=Gr();if("cold"===a.yt_lt||"cold"===b.loadType){var c=zr(),d=Fr();d=d.gelTicks?d.gelTicks:d.gelTicks={};for(var e in c)e in d||js(e,c[e]);e={};c=!1;d=q(Object.keys(a));for(var f=d.next();!f.done;f=d.next())f=f.value,(f=Ur(f,a[f]))&&!Jr(Gr(),f)&&(nr(b,f),nr(e,f),c=!0);c&&ks(e)}z("ytglobal.timingready_",!0);a=L("TIMING_ACTION");A("ytglobal.timingready_")&&a&&"_start"in zr()&&
yr()&&Ir()}
function ls(a,b,c,d){null!==b&&(Er(c)[a]=b,(a=Ur(a,b,c))&&ks(a,c,d))}
function ks(a,b,c){if(!M("web_csi_via_jspb")||(void 0===c?0:c))c=Mr(b||""),nr(c.info,a),nr(Gr(b),a),c=Hr(b),b=Dr(b).cttAuthInfo,fs().info(a,c,b);else{c=new Dh;var d=Object.keys(a);a=Object.values(a);for(var e=0;e<d.length;e++){var f=d[e];try{switch(f){case "actionType":Fh(c,X[a[e]]);break;case "clientActionNonce":C(c,2,a[e]);break;case "clientScreenNonce":C(c,4,a[e]);break;case "loadType":C(c,3,a[e]);break;case "isPrewarmedLaunch":C(c,92,a[e]);break;case "isFirstInstall":C(c,55,a[e]);break;case "networkType":C(c,
5,Vr[a[e]]);break;case "connectionType":C(c,26,Y[a[e]]);break;case "detailedConnectionType":C(c,27,Z[a[e]]);break;case "isVisible":C(c,6,a[e]);break;case "playerType":C(c,7,Wr[a[e]]);break;case "clientPlaybackNonce":C(c,8,a[e]);break;case "adClientPlaybackNonce":C(c,28,a[e]);break;case "previousCpn":C(c,77,a[e]);break;case "targetCpn":C(c,76,a[e]);break;case "isMonetized":C(c,9,a[e]);break;case "isPrerollAllowed":C(c,16,a[e]);break;case "isPrerollShown":C(c,17,a[e]);break;case "adType":C(c,12,a[e]);
break;case "adTypesAllowed":C(c,36,a[e]);break;case "adNetworks":C(c,37,a[e]);break;case "previousAction":C(c,13,X[a[e]]);break;case "isRedSubscriber":C(c,14,a[e]);break;case "serverTimeMs":C(c,15,a[e]);break;case "videoId":c.setVideoId(a[e]);break;case "adVideoId":C(c,20,a[e]);break;case "targetVideoId":C(c,78,a[e]);break;case "adBreakType":C(c,21,Xr[a[e]]);break;case "isNavigation":Gh(c,a[e]);break;case "viewportHeight":C(c,29,a[e]);break;case "viewportWidth":C(c,30,a[e]);break;case "screenHeight":C(c,
84,a[e]);break;case "screenWidth":C(c,85,a[e]);break;case "browseId":C(c,31,a[e]);break;case "isCacheHit":C(c,32,a[e]);break;case "httpProtocol":C(c,33,a[e]);break;case "transportProtocol":C(c,34,a[e]);break;case "searchQuery":C(c,41,a[e]);break;case "isContinuation":C(c,42,a[e]);break;case "availableProcessors":C(c,43,a[e]);break;case "sdk":C(c,44,a[e]);break;case "isLocalStream":C(c,45,a[e]);break;case "navigationRequestedSameUrl":C(c,64,a[e]);break;case "shellStartupDurationMs":C(c,70,a[e]);break;
case "appInstallDataAgeMs":C(c,73,a[e]);break;case "latencyActionError":C(c,71,Yr[a[e]]);break;case "actionStep":C(c,79,a[e]);break;case "jsHeapSizeLimit":C(c,80,a[e]);break;case "totalJsHeapSize":C(c,81,a[e]);break;case "usedJsHeapSize":C(c,82,a[e]);break;case "sourceVideoDurationMs":C(c,90,a[e]);break;case "videoOutputFrames":C(c,93,a[e]);break;case "adPrebufferedTimeSecs":C(c,39,a[e]);break;case "isLivestream":C(c,47,a[e]);break;case "liveStreamMode":C(c,91,Zr[a[e]]);break;case "adCpn2":C(c,48,
a[e]);break;case "adDaiDriftMillis":C(c,49,a[e]);break;case "videoStreamType":C(c,53,$r[a[e]]);break;case "playbackRequiresTap":C(c,56,a[e]);break;case "performanceNavigationTiming":C(c,67,a[e]);break;case "transactionType":C(c,74,as[a[e]]);break;case "playerRotationType":C(c,101,bs[a[e]]);break;case "allowedPreroll":C(c,10,a[e]);break;case "shownPreroll":C(c,11,a[e]);break;case "getHomeRequestId":C(c,57,a[e]);break;case "getSearchRequestId":C(c,60,a[e]);break;case "getPlayerRequestId":C(c,61,a[e]);
break;case "getWatchNextRequestId":C(c,62,a[e]);break;case "getBrowseRequestId":C(c,63,a[e]);break;case "getLibraryRequestId":C(c,66,a[e]);break;default:cs.includes(f)&&hi(new Q("Codegen laipb translator asked to translate message field",""+f))}}catch(g){hi(Error("Codegen laipb translator failed to set "+f))}}ms(c,b)}}
function ms(a,b){var c=Fr(b);c.jspbInfos||(c.jspbInfos=[]);c.jspbInfos.push(a);Mr(b||"").jspbInfo.push(a);c=Hr(b);b=Dr(b).cttAuthInfo;fs().jspbInfo(a,c,b)}
function js(a,b,c){if(!b&&"_"!==a[0]){var d=a;R.mark&&(0==d.lastIndexOf("mark_",0)||(d="mark_"+d),c&&(d+=" ("+c+")"),R.mark(d))}Mr(c||"").tick[a]=b||P();d=Fr(c);d.gelTicks&&(d.gelTicks[a]=!0);d=zr(c);var e=b||P();d[a]=e;e=Hr(c);var f=Dr(c).cttAuthInfo;if("_start"===a){var g=fs();gs(g,"baseline_"+e)||(b={timestamp:b,cttAuthInfo:f},M("web_csi_via_jspb")?(f=new Bh,C(f,1,e),e=new Mh,zd(e,Bh,6,Nh,f),Hp(e,b)):lk("latencyActionBaselined",{clientActionNonce:e},b))}else fs().tick(a,e,b,f);Ir(c);return d[a]}
function ns(){var a=Hr();requestAnimationFrame(function(){setTimeout(function(){a===Hr()&&js("ol",void 0,void 0)},0)})}
function os(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=vn+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function is(){function a(f){var g=Ar(),h=Cr(),k=L("CSI_START_TIMESTAMP_MILLIS",0);0<k&&!M("embeds_web_enable_csi_start_override_killswitch")&&(h=k);h&&(js("srt",g.responseStart),1!==f.prerender&&js("_start",h,void 0));f=Kr();0<f&&js("fpt",f);f=Ar();f.isPerformanceNavigationTiming&&ks({performanceNavigationTiming:!0});js("nreqs",f.requestStart,void 0);js("nress",f.responseStart,void 0);js("nrese",f.responseEnd,void 0);0<f.redirectEnd-f.redirectStart&&(js("nrs",f.redirectStart,void 0),js("nre",f.redirectEnd,
void 0));0<f.domainLookupEnd-f.domainLookupStart&&(js("ndnss",f.domainLookupStart,void 0),js("ndnse",f.domainLookupEnd,void 0));0<f.connectEnd-f.connectStart&&(js("ntcps",f.connectStart,void 0),js("ntcpe",f.connectEnd,void 0));f.secureConnectionStart>=Cr()&&0<f.connectEnd-f.secureConnectionStart&&(js("nstcps",f.secureConnectionStart,void 0),js("ntcpe",f.connectEnd,void 0));R&&"getEntriesByType"in R&&ps()}
var b=L("TIMING_INFO",{});if(M("web_csi_via_jspb")){b=qs(b);ms(b);b=Fh(Gh(new Dh,!0),X[Tr(L("TIMING_ACTION"))]);var c=L("PREVIOUS_ACTION");c&&C(b,13,X[Tr(c)]);(c=L("CLIENT_PROTOCOL"))&&C(b,33,c);(c=L("CLIENT_TRANSPORT"))&&C(b,34,c);(c=nq())&&"UNDEFINED_CSN"!==c&&C(b,4,c);c=os();1!==c&&-1!==c||C(b,6,!0);c=Er();C(b,3,"cold");a(c);c=rs();if(0<c.length){c=q(c);for(var d=c.next();!d.done;d=c.next()){d=d.value;var e=new Ch;C(e,1,d);Ad(b,83,Ch,e)}}ms(b)}else{for(c in b)b.hasOwnProperty(c)&&ls(c,b[c]);b=
{isNavigation:!0,actionType:Tr(L("TIMING_ACTION"))};if(c=L("PREVIOUS_ACTION"))b.previousAction=Tr(c);if(c=L("CLIENT_PROTOCOL"))b.httpProtocol=c;if(c=L("CLIENT_TRANSPORT"))b.transportProtocol=c;(c=nq())&&"UNDEFINED_CSN"!==c&&(b.clientScreenNonce=c);c=os();if(1===c||-1===c)b.isVisible=!0;c=Er();b.loadType="cold";a(c);c=rs();if(0<c.length)for(b.resourceInfo=[],c=q(c),d=c.next();!d.done;d=c.next())b.resourceInfo.push({resourceCache:d.value});ks(b)}}
function qs(a){var b=new Dh;a=q(Object.entries(a));for(var c=a.next();!c.done;c=a.next()){var d=q(c.value);c=d.next().value;d=d.next().value;switch(c){case "GetBrowse_rid":var e=new Ih;C(e,1,c);C(e,2,String(d));Hh(b,e);break;case "GetGuide_rid":e=new Ih;C(e,1,c);C(e,2,String(d));Hh(b,e);break;case "GetHome_rid":e=new Ih;C(e,1,c);C(e,2,String(d));Hh(b,e);break;case "GetPlayer_rid":e=new Ih;C(e,1,c);C(e,2,String(d));Hh(b,e);break;case "GetSearch_rid":e=new Ih;C(e,1,c);C(e,2,String(d));Hh(b,e);break;
case "GetSettings_rid":e=new Ih;C(e,1,c);C(e,2,String(d));Hh(b,e);break;case "GetTrending_rid":e=new Ih;C(e,1,c);C(e,2,String(d));Hh(b,e);break;case "GetWatchNext_rid":e=new Ih;C(e,1,c);C(e,2,String(d));Hh(b,e);break;case "yt_red":C(b,14,!!d);break;case "yt_ad":C(b,9,!!d)}}return b}
function ss(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);Xb()&&a.setAttribute("nonce",Xb());return c?(a=R.getEntriesByName(c))&&a[0]&&(a=a[0],c=Cr(),js("rsf_"+b,c+Math.round(a.fetchStart)),js("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function rs(){var a=[];if(document.querySelector&&R&&R.getEntriesByName)for(var b in xr)if(xr.hasOwnProperty(b)){var c=xr[b];ss(b,c)&&a.push(c)}return a}
function ps(){var a=window.location.protocol,b=R.getEntriesByType("resource");b=eb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=gb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(js("wffs",Br(b.startTime)),js("wffe",Br(b.responseEnd)))}
var ts=window;ts.ytcsi&&(ts.ytcsi.info=ls,ts.ytcsi.tick=js);var us="tokens consistency mss client_location entities response_received_commands store".split(" ");function vs(a,b,c,d){this.s=a;this.J=b;this.m=c;this.l=d;this.j=void 0;this.i=new Map;a.Ba||(a.Ba={});a.Ba=Object.assign({},mr,a.Ba)}
function ws(a,b,c,d){if(void 0!==vs.i){if(d=vs.i,a=[a!==d.s,b!==d.J,c!==d.m,!1,!1,void 0!==d.j],a.some(function(e){return e}))throw new Q("InnerTubeTransportService is already initialized",a);
}else vs.i=new vs(a,b,c,d)}
function xs(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?Wq:c;var d=er(b,a.s);if(!d)return dg(new Q("Error: No request builder found for command.",b));var e=d.s(b,void 0,c);return e?new Zf(function(f){var g,h,k;return w(function(m){if(1==m.i){h="cors"===(null==(g=e.sa)?void 0:g.mode)?"cors":void 0;if(a.m.Cc){var p=e.config,t;p=null==p?void 0:null==(t=p.Ia)?void 0:t.sessionIndex;t=Nq({sessionIndex:p});k=Object.assign({},ys(h),t);return m.u(2)}return u(m,zs(e.config,
h),3)}2!=m.i&&(k=m.j);f(As(a,e,k));m.i=0})}):dg(new Q("Error: Failed to build request for command.",b))}
function As(a,b,c){var d,e,f,g,h,k,m,p,t,x,v,D,G,K,N,O,S,ka,V;return w(function(W){switch(W.i){case 1:W.u(2);break;case 3:if((d=W.j)&&!d.isExpired())return W.return(Promise.resolve(d.i()));case 2:if(null==(e=b)?0:null==(f=e.Z)?0:f.context)for(g=q([]),h=g.next();!h.done;h=g.next())k=h.value,k.zp(b.Z.context);if(null==(m=a.j)?0:m.Ep(b.input,b.Z))return W.return(a.j.wp(b.input,b.Z));(x=null==(t=b.config)?void 0:t.Bp)&&a.i.has(x)&&M("web_memoize_inflight_requests")?p=a.i.get(x):(v=JSON.stringify(b.Z),
b.sa=Object.assign({},b.sa,{headers:c}),D=Object.assign({},b.sa),"POST"===b.sa.method&&(D=Object.assign({},D,{body:v})),(null==(G=b.config)?0:G.nc)&&js(b.config.nc),K=function(){return a.J.fetch(b.input,D,b.config)},p=K(),x&&a.i.set(x,p));
return u(W,p,4);case 4:N=W.j;x&&a.i.has(x)&&a.i.delete(x);(null==(O=b.config)?0:O.oc)&&js(b.config.oc);if(N||null==(S=a.j)||!S.rp(b.input,b.Z)){W.u(5);break}return u(W,a.j.vp(b.input,b.Z),6);case 6:N=W.j;case 5:if(N&&a.l)for(ka=q(us),h=ka.next();!h.done;h=ka.next())V=h.value,a.l[V]&&a.l[V].handleResponse(N,b);return W.return(N)}})}
function zs(a,b){var c,d,e,f;return w(function(g){if(1==g.i){e=null==(c=a)?void 0:null==(d=c.Ia)?void 0:d.sessionIndex;var h=Nq({sessionIndex:e});if(!(h instanceof Zf)){var k=new Zf(ab);$f(k,2,h);h=k}return u(g,h,2)}f=g.j;return g.return(Promise.resolve(Object.assign({},ys(b),f)))})}
function ys(a){var b={"Content-Type":"application/json"};M("enable_web_eom_visitor_data")&&L("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=L("EOM_VISITOR_DATA"):L("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=L("VISITOR_DATA"));M("track_webfe_innertube_auth_mismatch")&&(b["X-Youtube-Bootstrap-Logged-In"]=L("LOGGED_IN",!1));"cors"!==a&&((a=L("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=L("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=L("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),(a=L("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var Bs=["share/get_web_player_share_panel"],Cs=["feedback"],Ds=["notification/modify_channel_preference"],Es=["browse/edit_playlist"],Fs=["subscription/subscribe"],Gs=["subscription/unsubscribe"];function Hs(){}
r(Hs,jr);Hs.prototype.l=function(){return Fs};
Hs.prototype.i=function(a){return a.subscribeEndpoint};
Hs.prototype.j=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
da.Object.defineProperties(Hs.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Is(){}
r(Is,jr);Is.prototype.l=function(){return Gs};
Is.prototype.i=function(a){return a.unsubscribeEndpoint};
Is.prototype.j=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
da.Object.defineProperties(Is.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Js(){}
r(Js,jr);Js.prototype.l=function(){return Cs};
Js.prototype.i=function(a){return a.feedbackEndpoint};
Js.prototype.j=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
da.Object.defineProperties(Js.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Ks(){}
r(Ks,jr);Ks.prototype.l=function(){return Ds};
Ks.prototype.i=function(a){return a.modifyChannelNotificationPreferenceEndpoint};
Ks.prototype.j=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function Ls(){}
r(Ls,jr);Ls.prototype.l=function(){return Es};
Ls.prototype.i=function(a){return a.playlistEditEndpoint};
Ls.prototype.j=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Ms(){}
r(Ms,jr);Ms.prototype.l=function(){return Bs};
Ms.prototype.i=function(a){return a.webPlayerShareEntityServiceEndpoint};
Ms.prototype.j=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var Rq=new Pq("NETWORK_SLI_TOKEN");function Ns(a){this.i=a}
Ns.prototype.fetch=function(a,b){var c=this,d,e;return w(function(f){c.i&&(d=ac(bc(5,kc(a)))||"/UNKNOWN_PATH",c.i.start(d));e=new window.Request(a,b);return M("web_fetch_promise_cleanup_killswitch")?f.return(Promise.resolve(fetch(e).then(function(g){return c.handleResponse(g)}).catch(function(g){Wp(g)}))):f.return(fetch(e).then(function(g){return c.handleResponse(g)}).catch(function(g){Wp(g)}))})};
Ns.prototype.handleResponse=function(a){var b=a.text().then(function(c){return JSON.parse(c.replace(")]}'",""))});
a.redirected||a.ok?this.i&&this.i.success():(this.i&&this.i.failure(),b=b.then(function(c){Wp(new Q("Error: API fetch failed",a.status,a.url,c));return Object.assign({},c,{errorMetadata:{status:a.status}})}));
return b};
Ns[Oq]=[new Qq];var Os=new Pq("NETWORK_MANAGER_TOKEN");var Ps;function Qs(a){Tl.call(this,1,arguments);this.csn=a}
r(Qs,Tl);var bm=new Ul("screen-created",Qs),Rs=[],Ts=Ss,Us=0;function Vs(a,b,c,d,e,f,g){function h(){Wp(new Q("newScreen() parent element does not have a VE - rootVe",b))}
var k=Ts();f=new gq({veType:b,youtubeData:f,jspbYoutubeData:void 0});e={cttAuthInfo:e,V:k};if(M("il_via_jspb")){var m=new qh;m.P(k);rh(m,f.getAsJspb());c&&c.visualElement?(f=new sh,c.clientScreenNonce&&C(f,2,c.clientScreenNonce),th(f,c.visualElement.getAsJspb()),g&&C(f,4,Oh[g]),E(m,sh,5,f)):c&&h();d&&C(m,3,d);Mp(m,e,a)}else f={csn:k,pageVe:f.getAsJson()},c&&c.visualElement?(f.implicitGesture={parentCsn:c.clientScreenNonce,gesturedVe:c.visualElement.getAsJson()},g&&(f.implicitGesture.gestureType=g)):
c&&h(),d&&(f.cloneCsn=d),a?qp("screenCreated",f,a,e):lk("screenCreated",f,e);Zl(bm,new Qs(k));return k}
function Ws(a,b,c,d){var e=d.filter(function(k){k.csn!==b?(k.csn=b,k=!0):k=!1;return k}),f={cttAuthInfo:pq(b),
V:b};d=q(d);for(var g=d.next();!g.done;g=d.next())g=g.value.getAsJson(),(nb(g)||!g.trackingParams&&!g.veType)&&Wp(Error("Child VE logged with no data"));if(M("il_via_jspb")){var h=new uh;h.P(b);wh(h,c.getAsJspb());fb(e,function(k){k=k.getAsJspb();Ad(h,3,lh,k)});
"UNDEFINED_CSN"==b?Xs("visualElementAttached",h,f):Np(h,f,a)}else c={csn:b,parentVe:c.getAsJson(),childVes:fb(e,function(k){return k.getAsJson()})},"UNDEFINED_CSN"==b?Xs("visualElementAttached",c,f):a?qp("visualElementAttached",c,a,f):lk("visualElementAttached",c,f)}
function Ss(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return Mc(b,3)}
function Xs(a,b,c){Rs.push({payloadName:a,payload:b,options:c});Us||(Us=cm())}
function dm(a){if(Rs){for(var b=q(Rs),c=b.next();!c.done;c=b.next())if(c=c.value,c.payload)if(M("il_via_jspb"))switch(c.payload.P(a.csn),c.payloadName){case "screenCreated":Mp(c.payload,c.options);break;case "visualElementAttached":Np(c.payload,c.options);break;case "visualElementShown":Ip(c.payload,c.options);break;case "visualElementHidden":Jp(c.payload,c.options);break;case "visualElementGestured":Kp(c.payload,c.options);break;case "visualElementStateChanged":Lp(c.payload,c.options);break;default:Wp(new Q("flushQueue unable to map payloadName to JSPB setter"))}else c.payload.csn=
a.csn,qp(c.payloadName,c.payload,null,c.options);Rs.length=0}Us=0}
;function Ys(){this.j=new Set;this.i=new Set;this.l=new Map}
Ys.prototype.clear=function(){this.j.clear();this.i.clear();this.l.clear()};
La(Ys);function Zs(){this.s=[];this.D=[];this.i=[];this.m=[];this.o=[];this.j=new Set;this.v=new Map}
function $s(a,b,c){c=void 0===c?0:c;b.then(function(d){a.j.has(c)&&a.l&&a.l();var e=nq(c),f=lq(c);if(e&&f){var g;(null==d?0:null==(g=d.response)?0:g.trackingParams)&&Ws(a.client,e,f,[hq(d.response.trackingParams)]);var h;(null==d?0:null==(h=d.playerResponse)?0:h.trackingParams)&&Ws(a.client,e,f,[hq(d.playerResponse.trackingParams)])}})}
function at(a,b,c,d){d=void 0===d?0:d;if(a.j.has(d))a.s.push([b,c]);else{var e=nq(d);c=c||lq(d);e&&c&&Ws(a.client,e,c,[b])}}
Zs.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=nq(void 0===c?0:c)){a=this.client;var e=hq(d);var f="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";d={cttAuthInfo:pq(c),V:c};if(M("il_via_jspb")){var g=new xh;g.P(c);e=e.getAsJspb();E(g,lh,2,e);C(g,4,Oh[f]);b&&E(g,oh,3);"UNDEFINED_CSN"==c?Xs("visualElementGestured",g,d):Kp(g,d,a)}else f={csn:c,ve:e.getAsJson(),gestureType:f},b&&(f.clientData=b),"UNDEFINED_CSN"==c?Xs("visualElementGestured",f,d):a?qp("visualElementGestured",
f,a,d):lk("visualElementGestured",f,d);b=!0}else b=!1;else b=!1;return b};
function bt(a,b,c){c=void 0===c?{}:c;a.j.add(c.layer||0);a.l=function(){ct(a,b,c);var f=lq(c.layer);if(f){for(var g=q(a.s),h=g.next();!h.done;h=g.next())h=h.value,at(a,h[0],h[1]||f,c.layer);f=q(a.D);for(g=f.next();!g.done;g=f.next()){var k=g.value;g=void 0;g=void 0===g?0:g;h=nq(g);var m=k[0]||lq(g);if(h&&m){g=a.client;var p=k[1];k={cttAuthInfo:pq(h),V:h};M("il_via_jspb")?(p=new Ah,p.P(h),m=m.getAsJspb(),E(p,lh,2,m),"UNDEFINED_CSN"==h?Xs("visualElementStateChanged",p,k):Lp(p,k,g)):(m={csn:h,ve:m.getAsJson(),
clientData:p},"UNDEFINED_CSN"==h?Xs("visualElementStateChanged",m,k):g?qp("visualElementStateChanged",m,g,k):lk("visualElementStateChanged",m,k))}}}};
nq(c.layer)||a.l();if(c.ub)for(var d=q(c.ub),e=d.next();!e.done;e=d.next())$s(a,e.value,c.layer);else Vp(Error("Delayed screen needs a data promise."))}
function ct(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.ic?c.ic:c.layer;var e=nq(d);d=lq(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var g,h=L("EVENT_ID");"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});try{var k=Vs(a.client,b,f,c.tb,c.cttAuthInfo,g,c.up)}catch(m){Yp(m,{Cp:b,rootVe:d,parentVisualElement:void 0,sp:e,yp:f,tb:c.tb});Vp(m);return}qq(k,b,
c.layer,c.cttAuthInfo);if(b=e&&"UNDEFINED_CSN"!==e&&d){a:{b=q(Object.values(fq));for(f=b.next();!f.done;f=b.next())if(nq(f.value)===e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,g=!0,h=(g=void 0===g?!1:g)?16:8,f={cttAuthInfo:pq(e),V:e,wb:g},M("il_via_jspb")?(h=new zh,h.P(e),d=d.getAsJspb(),E(h,lh,2,d),C(h,4,g?16:8),"UNDEFINED_CSN"==e?Xs("visualElementHidden",h,f):Jp(h,f,b)):(d={csn:e,ve:d.getAsJson(),eventType:h},"UNDEFINED_CSN"==e?Xs("visualElementHidden",d,f):b?qp("visualElementHidden",d,b,f):lk("visualElementHidden",
d,f)));a.i[a.i.length-1]&&!a.i[a.i.length-1].csn&&(a.i[a.i.length-1].csn=k||"");ks({clientScreenNonce:k});Ys.getInstance().clear();d=lq(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(M("web_mark_root_visible")||M("music_web_mark_root_visible"))&&(e=k,k={cttAuthInfo:pq(e),V:e},M("il_via_jspb")?(b=new zh,b.P(e),f=d.getAsJspb(),E(b,lh,2,f),C(b,4,1),"UNDEFINED_CSN"==e?Xs("visualElementShown",b,k):Ip(b,k)):(b={csn:e,ve:d.getAsJson(),eventType:1},"UNDEFINED_CSN"==e?Xs("visualElementShown",b,k):lk("visualElementShown",
b,k)));a.j.delete(c.layer||0);a.l=void 0;e=q(a.v);for(k=e.next();!k.done;k=e.next())b=q(k.value),k=b.next().value,b=b.next().value,b.has(c.layer)&&d&&at(a,k,d,c.layer);for(c=0;c<a.m.length;c++){e=a.m[c];try{e()}catch(m){Vp(m)}}for(c=a.m.length=0;c<a.o.length;c++){e=a.o[c];try{e()}catch(m){Vp(m)}}}
;function dt(){var a,b;return w(function(c){if(1==c.i)return a=vs.i,a?u(c,xs(a),2):(Wp(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),c.return(void 0));if(b=c.j)return b.errorMetadata?(Wp(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),c.return(void 0)):c.return(b.tp);Wp(Error("Network request to get Datasync IDs failed."));return c.return(void 0)})}
;var et=y.caches,ft;function gt(a){var b=a.indexOf(":");return-1===b?{Fb:a}:{Fb:a.substring(0,b),datasyncId:a.substring(b+1)}}
function ht(){return w(function(a){if(void 0!==ft)return a.return(ft);ft=new Promise(function(b){var c;return w(function(d){switch(d.i){case 1:return wa(d,2),u(d,et.open("test-only"),4);case 4:return u(d,et.delete("test-only"),5);case 5:xa(d,3);break;case 2:if(c=ya(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.i=0}})});
return a.return(ft)})}
function jt(a){var b,c,d,e,f,g,h;w(function(k){if(1==k.i)return u(k,ht(),2);if(3!=k.i){if(!k.j)return k.return(!1);b=[];return u(k,et.keys(),3)}c=k.j;d=q(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=gt(f),h=g.datasyncId,!h||a.includes(h)||b.push(et.delete(f));return k.return(Promise.all(b).then(function(m){return m.some(function(p){return p})}))})}
function kt(){var a,b,c,d,e,f,g;return w(function(h){if(1==h.i)return u(h,ht(),2);if(3!=h.i){if(!h.j)return h.return(!1);a=pk("cache contains other");return u(h,et.keys(),3)}b=h.j;c=q(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=gt(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function lt(){try{return!!self.localStorage}catch(a){return!1}}
;function mt(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function nt(a){if(lt()){var b=Object.keys(window.localStorage);b=q(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=mt(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function ot(){if(!lt())return!1;var a=pk(),b=Object.keys(window.localStorage);b=q(b);for(var c=b.next();!c.done;c=b.next())if(c=mt(c.value),void 0!==c&&c!==a)return!0;return!1}
;function pt(){dt().then(function(a){a&&(Al(a),jt(a),nt(a))})}
function qt(){var a=new Om;gf.M(function(){var b,c,d,e;return w(function(f){switch(f.i){case 1:if(M("ytidb_clear_optimizations_killswitch")){f.u(2);break}b=pk("clear");if(b.startsWith("V")){var g=[b];Al(g);jt(g);nt(g);return f.return()}c=ot();return u(f,kt(),3);case 3:return d=f.j,u(f,Bl(),4);case 4:if(e=f.j,!c&&!d&&!e)return f.return();case 2:a.H()?pt():a.m.add("publicytnetworkstatus-online",pt,!0,void 0,void 0),f.i=0}})})}
;function rt(a){a&&(a.dataset?a.dataset[st("loaded")]="true":a.setAttribute("data-loaded","true"))}
function tt(a,b){return a?a.dataset?a.dataset[st(b)]:a.getAttribute("data-"+b):null}
var ut={};function st(a){return ut[a]||(ut[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var vt=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,wt=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function xt(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(vt,""),c=c.replace(wt,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else zt(a,b,c)}
function zt(a,b,c){c=void 0===c?null:c;var d=At(a),e=document.getElementById(d),f=e&&tt(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=Pn(d,b),b=""+Qa(b),Bt[b]=f),g||(e=Ct(a,d,function(){tt(e,"loaded")||(rt(e),Sn(d),Bi(Wa(Tn,d),0))},c)))}
function Ct(a,b,c,d){d=void 0===d?null:d;var e=Ud("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Qd(e,Hb(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Dt(a){a=At(a);var b=document.getElementById(a);b&&(Tn(a),b.parentNode.removeChild(b))}
function Et(a,b){a&&b&&(a=""+Qa(b),(a=Bt[a])&&Rn(a))}
function At(a){var b=document.createElement("a");Ub(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Zb(a)}
var Bt={};var Ft=[],Gt=!1;function Ht(){if(!M("disable_biscotti_fetch_for_ad_blocker_detection")&&!M("disable_biscotti_fetch_entirely_for_all_web_clients")&&Cq()){var a=L("PLAYER_VARS",{});if(!("1"==pb(a)||M("embeds_web_disable_ads_for_pfl")&&Dq(a))){var b=function(){Gt=!0;"google_ad_status"in window?Zh("DCLKSTAT",1):Zh("DCLKSTAT",2)};
try{xt("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Ft.push(gf.M(function(){if(!(Gt||"google_ad_status"in window)){try{Et("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Gt=!0;Zh("DCLKSTAT",3)}},5E3))}}}
function Kt(){var a=Number(L("DCLKSTAT",0));return isNaN(a)?0:a}
;function Lt(){this.state=1;this.i=null}
Lt.prototype.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterScript)?d:null,f;d=null!=(f=a.interpreterUrl)?f:null;a.interpreterSafeScript&&(e=a.interpreterSafeScript,Bb("From proto message. b/166824318"),e=e.privateDoNotAccessOrElseSafeScriptWrappedValue||"",e=(f=yb())?f.createScript(e):e,e=(new Db(e)).toString());a.interpreterSafeUrl&&(d=a.interpreterSafeUrl,Bb("From proto message. b/166824318"),d=Hb(d.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());
Mt(this,e,d,a.program,b,c)}else Wp(Error("Cannot initialize botguard without program"))};
function Mt(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,xt(c,function(){window[g]?Nt(a,d,g,e):(a.state=3,Dt(c),Wp(new Q("Unable to load Botguard","from "+c)))},f)):b?(f=Ud("SCRIPT"),f.textContent=b,f.nonce=Xb(),document.head.appendChild(f),document.head.removeChild(f),window[g]?Nt(a,d,g,e):(a.state=4,Wp(new Q("Unable to load Botguard from JS")))):Wp(new Q("Unable to load VM; no url or JS provided"))}
Lt.prototype.isInitialized=function(){return!!this.i};
function Nt(a,b,c,d){a.state=5;try{var e=new Ld({program:b,globalName:c});e.zc.then(function(){a.state=6;d&&d(b)});
Ot(a,e)}catch(f){a.state=7,f instanceof Error&&Wp(f)}}
Lt.prototype.invoke=function(a){a=void 0===a?{}:a;if(this.i){var b=this.i;a={sb:a};if(b.j)throw Error("Already disposed");b=b.m([a.sb,a.Bc])}else b=null;return b};
Lt.prototype.dispose=function(){Ot(this,null);this.state=8};
function Ot(a,b){ue(a.i);a.i=b}
;var Pt=new Lt;function Qt(){return Pt.isInitialized()}
function Rt(a){a=void 0===a?{}:a;return Pt.invoke(a)}
;function St(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?ak():d;this.m=c;this.l=d;this.j=new Kd;this.i=a;a={};c=q(this.i.entries());for(d=c.next();!d.done;a={ta:a.ta,Da:a.Da},d=c.next()){var e=q(d.value);d=e.next().value;e=e.next().value;a.Da=d;a.ta=e;d=function(f){return function(){f.ta.gb();b.i[f.Da].Ta=!0;b.i.every(function(g){return!0===g.Ta})&&b.j.resolve()}}(a);
e=Wj(d,Tt(this,a.ta));this.i[a.Da]=Object.assign({},a.ta,{gb:d,Pa:e})}}
function Ut(a){var b=Array.from(a.i.keys()).sort(function(d,e){return Tt(a,a.i[e])-Tt(a,a.i[d])});
b=q(b);for(var c=b.next();!c.done;c=b.next())c=a.i[c.value],void 0===c.Pa||c.Ta||(a.l.S(c.Pa),Wj(c.gb,10))}
St.prototype.cancel=function(){for(var a=q(this.i),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.Pa||b.Ta||this.l.S(b.Pa),b.Ta=!0;this.j.resolve()};
function Tt(a,b){var c;return null!=(c=b.priority)?c:a.m}
;function Vt(a){this.state=a;this.plugins=[];this.o=void 0}
Vt.prototype.install=function(){this.plugins.push.apply(this.plugins,fa(Ia.apply(0,arguments)))};
Vt.prototype.transition=function(a,b){var c=this,d=this.D.find(function(f){return f.from===c.state&&f.B===a});
if(d){this.l&&(Ut(this.l),this.l=void 0);this.state=a;d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Wt(this,e,this.o),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Wt(a,b,c){return function(){var d=Ia.apply(0,arguments),e=b.filter(function(k){var m;return 10===(null!=(m=null!=c?c:k.priority)?m:0)}),f=b.filter(function(k){var m;
return 10!==(null!=(m=null!=c?c:k.priority)?m:0)});
ak();var g={};e=q(e);for(var h=e.next();!h.done;g={Ea:g.Ea},h=e.next())g.Ea=h.value,Yj(function(k){return function(){k.Ea.ka.apply(k.Ea,fa(d))}}(g));
f=f.map(function(k){var m;return{gb:function(){k.ka.apply(k,fa(d))},
priority:null!=(m=null!=c?c:k.priority)?m:0}});
f.length&&(a.l=new St(f))}}
da.Object.defineProperties(Vt.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function Xt(a){Vt.call(this,void 0===a?"document_active":a);var b=this;this.o=10;this.i=new Map;this.D=[{from:"document_active",B:"document_disposed_preventable",action:this.v},{from:"document_active",B:"document_disposed",action:this.m},{from:"document_disposed_preventable",B:"document_disposed",action:this.m},{from:"document_disposed_preventable",B:"flush_logs",action:this.s},{from:"document_disposed_preventable",B:"document_active",action:this.j},{from:"document_disposed",B:"flush_logs",action:this.s},
{from:"document_disposed",B:"document_active",action:this.j},{from:"document_disposed",B:"document_disposed",action:function(){}},
{from:"flush_logs",B:"document_active",action:this.j}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
r(Xt,Vt);Xt.prototype.v=function(a,b){if(!this.i.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.i=new Map;this.transition("document_active");return}}this.i.set("document_disposed_preventable",!0);this.i.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
Xt.prototype.m=function(a,b){this.i.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.i.set("document_disposed",!0),this.transition("flush_logs"))};
Xt.prototype.s=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
Xt.prototype.j=function(){this.i=new Map};function Yt(a){Vt.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.D=[{from:"document_visibility_unknown",B:"document_visible",action:this.j},{from:"document_visibility_unknown",B:"document_hidden",action:this.i},{from:"document_visibility_unknown",B:"document_foregrounded",action:this.s},{from:"document_visibility_unknown",B:"document_backgrounded",action:this.m},{from:"document_visible",B:"document_hidden",action:this.i},{from:"document_visible",B:"document_foregrounded",action:this.s},
{from:"document_visible",B:"document_visible",action:this.j},{from:"document_foregrounded",B:"document_visible",action:this.j},{from:"document_foregrounded",B:"document_hidden",action:this.i},{from:"document_foregrounded",B:"document_foregrounded",action:this.s},{from:"document_hidden",B:"document_visible",action:this.j},{from:"document_hidden",B:"document_backgrounded",action:this.m},{from:"document_hidden",B:"document_hidden",action:this.i},{from:"document_backgrounded",B:"document_hidden",action:this.i},
{from:"document_backgrounded",B:"document_backgrounded",action:this.m},{from:"document_backgrounded",B:"document_visible",action:this.j}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
M("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
r(Yt,Vt);Yt.prototype.j=function(a,b){a(null==b?void 0:b.event);M("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
Yt.prototype.i=function(a,b){a(null==b?void 0:b.event);M("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
Yt.prototype.m=function(a,b){a(null==b?void 0:b.event)};
Yt.prototype.s=function(a,b){a(null==b?void 0:b.event)};function Zt(){this.i=new Xt;this.j=new Yt}
Zt.prototype.install=function(){var a=Ia.apply(0,arguments);this.i.install.apply(this.i,fa(a));this.j.install.apply(this.j,fa(a))};function $t(){Zt.call(this);var a={};this.install((a.document_disposed={ka:this.l},a));a={};this.install((a.flush_logs={ka:this.m},a))}
var au;r($t,Zt);$t.prototype.m=function(){if(M("web_fp_via_jspb")){var a=new kh,b=nq();b&&a.P(b);b=new Mh;zd(b,kh,380,Nh,a);Hp(b);M("web_fp_via_jspb_and_json")&&lk("finalPayload",{csn:nq()})}else lk("finalPayload",{csn:nq()})};
$t.prototype.l=function(){$p(aq)};function bu(){}
bu.getInstance=function(){var a=A("ytglobal.storage_");a||(a=new bu,z("ytglobal.storage_",a));return a};
bu.prototype.estimate=function(){var a,b,c;return w(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(cu()):d.return()})};
function cu(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
z("ytglobal.storageClass_",bu);function jk(a,b){var c=this;this.handleError=a;this.i=b;this.j=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.j=!0});
this.l=Math.random()<=bi("ytidb_transaction_ended_event_rate_limit",.02)}
jk.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":M("idb_data_corrupted_killswitch")||this.i("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.i("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":M("idb_is_supported_completed_killswitch")||this.i("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":du(this,b);break;case "TRANSACTION_ENDED":this.l&&this.i("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,
{hasWindowUnloaded:this.j}),this.i("idbTransactionAborted",a)}};
function du(a,b){bu.getInstance().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:eu(null==c?void 0:c.usage),deviceStorageQuotaMbytes:eu(null==c?void 0:c.quota)});a.i("idbQuotaExceeded",c)})}
function eu(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function fu(a,b,c){I.call(this);var d=this;c=c||L("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.l=b||null;this.targetOrigin="*";this.m=c;this.sessionId=null;this.channel="widget";this.L=!!a;this.A=function(e){a:if(!("*"!=d.m&&e.origin!=d.m||d.l&&e.source!=d.l||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.L&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.m=d.targetOrigin=e.origin);d.l=e.source;d.sessionId=f.id;d.j&&(d.j(),d.j=null);break;case "command":d.o&&(!d.v||0<=cb(d.v,f.func))&&d.o(f.func,f.args,e.origin)}}};
this.v=this.j=this.o=null;window.addEventListener("message",this.A)}
r(fu,I);fu.prototype.sendMessage=function(a,b){if(b=b||this.l){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){ii(d)}}};
fu.prototype.I=function(){window.removeEventListener("message",this.A);I.prototype.I.call(this)};function gu(){this.j=[];this.isReady=!1;this.l={};var a=this.i=new fu(!!L("WIDGET_ID_ENFORCE")),b=this.lc.bind(this);a.o=b;a.v=null;this.i.channel="widget";if(a=L("WIDGET_ID"))this.i.sessionId=a}
l=gu.prototype;l.lc=function(a,b,c){"addEventListener"===a&&b?(a=b[0],this.l[a]||"onReady"===a||(this.addEventListener(a,hu(this,a)),this.l[a]=!0)):this.nb(a,b,c)};
l.nb=function(){};
function hu(a,b){return function(c){return a.sendMessage(b,c)}}
l.addEventListener=function(){};
l.Yb=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.ab());this.sendMessage("onReady");db(this.j,this.Lb,this);this.j=[]};
l.ab=function(){return null};
function iu(a,b){a.sendMessage("infoDelivery",b)}
l.Lb=function(a){this.isReady?this.i.sendMessage(a):this.j.push(a)};
l.sendMessage=function(a,b){this.Lb({event:a,info:void 0===b?null:b})};
l.dispose=function(){this.i=null};function ju(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function ku(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function lu(a,b,c,d){if(Oa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function mu(a){gu.call(this);this.listeners=[];this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.wc.bind(this));this.addEventListener("onVolumeChange",this.xc.bind(this));this.addEventListener("onApiChange",this.pc.bind(this));this.addEventListener("onPlaybackQualityChange",this.tc.bind(this));this.addEventListener("onPlaybackRateChange",this.uc.bind(this));this.addEventListener("onStateChange",this.vc.bind(this));this.addEventListener("onWebglSettingsChanged",
this.yc.bind(this))}
r(mu,gu);l=mu.prototype;
l.nb=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&ju(a)){var d=b;if(Oa(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=ku(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=ku(e);break;case "loadPlaylist":case "cuePlaylist":e=lu(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);ju(a)&&iu(this,this.ab())}};
l.onReady=function(){var a=this.Yb.bind(this);this.i.j=a};
l.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
l.ab=function(){if(!this.api)return null;var a=this.api.getApiInterface();ib(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
l.vc=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());iu(this,a)};
l.tc=function(a){iu(this,{playbackQuality:a})};
l.uc=function(a){iu(this,{playbackRate:a})};
l.pc=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],m=this.api.getOption(e,k);b[e][k]=m}}this.sendMessage("apiInfoDelivery",b)};
l.xc=function(){iu(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
l.wc=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());iu(this,a)};
l.yc=function(){var a={sphericalProperties:this.api.getSphericalProperties()};iu(this,a)};
l.dispose=function(){gu.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function nu(a){I.call(this);this.j={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.Hb,this)}
r(nu,I);l=nu.prototype;l.start=function(){this.started||this.i()||(this.started=!0,this.connection.ma("RECEIVING"))};
l.ma=function(a,b){this.started&&!this.i()&&this.connection.ma(a,b)};
l.Hb=function(a,b,c){if(this.started&&!this.i()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=ou(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=pu(a,c))&&this.ma(a,c))}}};
l.addListener=function(a){if(!(a in this.j)){var b=this.qc.bind(this,a);this.j[a]=b;this.addEventListener(a,b)}};
l.qc=function(a,b){this.started&&!this.i()&&this.connection.ma(a,this.Za(a,b))};
l.Za=function(a,b){if(null!=b)return{value:b}};
l.removeListener=function(a){a in this.j&&(this.removeEventListener(a,this.j[a]),delete this.j[a])};
l.I=function(){var a=this.connection;a.i()||sg(a.j,"command",this.Hb,this);this.connection=null;for(var b in this.j)this.j.hasOwnProperty(b)&&this.removeListener(b);I.prototype.I.call(this)};function qu(a,b){nu.call(this,b);this.api=a;this.start()}
r(qu,nu);qu.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
qu.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function ou(a,b){switch(a){case "loadVideoById":return a=ku(b),[a];case "cueVideoById":return a=ku(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=lu(b),[a];case "cuePlaylist":return a=lu(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function pu(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
qu.prototype.Za=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return nu.prototype.Za.call(this,a,b)};
qu.prototype.I=function(){nu.prototype.I.call(this);delete this.api};function ru(a){a=void 0===a?!1:a;I.call(this);this.j=new J(a);we(this,Wa(ue,this.j))}
Xa(ru,I);ru.prototype.subscribe=function(a,b,c){return this.i()?0:this.j.subscribe(a,b,c)};
ru.prototype.m=function(a,b){this.i()||this.j.ia.apply(this.j,arguments)};function su(a,b,c){ru.call(this);this.l=a;this.destination=b;this.id=c}
r(su,ru);su.prototype.ma=function(a,b){this.i()||this.l.ma(this.destination,this.id,a,b)};
su.prototype.I=function(){this.destination=this.l=null;ru.prototype.I.call(this)};function tu(a,b,c){I.call(this);this.destination=a;this.origin=c;this.j=Cn(window,"message",this.l.bind(this));this.connection=new su(this,a,b);we(this,Wa(ue,this.connection))}
r(tu,I);tu.prototype.ma=function(a,b,c,d){this.i()||a!==this.destination||(a={id:b,command:c},d&&(a.data=d),this.destination.postMessage(Tf(a),this.origin))};
tu.prototype.l=function(a){var b;if(b=!this.i())if(b=a.origin===this.origin)a:{b=this.destination;do{b:{var c=a.source;do{if(c===b){c=!0;break b}if(c===c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.connection,c.i()||c.m("command",b.command,b.data,a.origin))}};
tu.prototype.I=function(){Dn(this.j);this.destination=null;I.prototype.I.call(this)};function uu(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||rb(b);this.assets=a.assets||{};this.attrs=a.attrs||rb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
uu.prototype.clone=function(){var a=new uu,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Ma(c)?a[b]=rb(c):a[b]=c}return a};var vu=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function wu(a){a=a||"";if(window.spf){var b=a.match(vu);spf.style.load(a,b?b[1]:"",void 0)}else xu(a)}
function xu(a){var b=yu(a),c=document.getElementById(b),d=c&&tt(c,"loaded");d||c&&!d||(c=zu(a,b,function(){tt(c,"loaded")||(rt(c),Sn(b),Bi(Wa(Tn,b),0))}))}
function zu(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Hb(a);Vb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function yu(a){var b=Ud("A");Bb("This URL is never added to the DOM");Ub(b,new Jb(a,Kb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Zb(a)}
;function Au(){I.call(this);this.j=[]}
r(Au,I);Au.prototype.I=function(){for(;this.j.length;){var a=this.j.pop();a.target.removeEventListener(a.name,a.ka,void 0)}I.prototype.I.call(this)};function Bu(){Au.apply(this,arguments)}
r(Bu,Au);function Cu(a,b,c,d){I.call(this);var e=this;this.A=b;this.webPlayerContextConfig=d;this.Va=!1;this.api={};this.Fa=this.v=null;this.R=new J;this.j={};this.ea=this.Ga=this.elementId=this.Wa=this.config=null;this.W=!1;this.m=this.L=null;this.Ha={};this.Pb=["onReady"];this.lastError=null;this.ob=NaN;this.N={};this.Qb=new Bu(this);this.oa=0;this.l=this.o=a;we(this,Wa(ue,this.R));Du(this);Eu(this);we(this,Wa(ue,this.Qb));c?this.oa=Bi(function(){e.loadNewVideoConfig(c)},0):d&&(Fu(this),Gu(this))}
r(Cu,I);l=Cu.prototype;l.getId=function(){return this.A};
l.loadNewVideoConfig=function(a){if(!this.i()){this.oa&&(Ci(this.oa),this.oa=0);var b=a||{};b instanceof uu||(b=new uu(b));this.config=b;this.setConfig(a);Gu(this);this.isReady()&&Hu(this)}};
function Fu(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.A,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.A:a.config.attrs.id=a.A);var c;(null==(c=a.l)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
l.setConfig=function(a){this.Wa=a;this.config=Iu(a);Fu(this);if(!this.Ga){var b;this.Ga=Ju(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.l&&(this.l.style.width=be(Number(b)||b)),(a=a.height)&&this.l&&(this.l.style.height=be(Number(a)||a))};
function Hu(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function Ku(a){var b=!0,c=Lu(a);c&&a.config&&(a=Mu(a),b=tt(c,"version")===a);return b&&!!A("yt.player.Application.create")}
function Gu(a){if(!a.i()&&!a.W){var b=Ku(a);if(b&&"html5"===(Lu(a)?"html5":null))a.ea="html5",a.isReady()||Nu(a);else if(Ou(a),a.ea="html5",b&&a.m&&a.o)a.o.appendChild(a.m),Nu(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.L=function(){c=!0;var d=Pu(a,"player_bootstrap_method")?A("yt.player.Application.createAlternate")||A("yt.player.Application.create"):A("yt.player.Application.create");var e=a.config?Iu(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig);Nu(a)};
a.W=!0;b?a.L():(xt(Mu(a),a.L),(b=Qu(a))&&wu(b),Ru(a)&&!c&&z("yt.player.Application.create",null))}}}
function Lu(a){var b=Td(a.elementId);!b&&a.l&&a.l.querySelector&&(b=a.l.querySelector("#"+a.elementId));return b}
function Nu(a){if(!a.i()){var b=Lu(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.W=!1;if(!Pu(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}Su(a)}else a.ob=Bi(function(){Nu(a)},50)}}
function Su(a){Du(a);a.Va=!0;var b=Lu(a);if(b){a.v=Tu(a,b,"addEventListener");a.Fa=Tu(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=Tu(a,b,f))}}for(var g in a.j)a.j.hasOwnProperty(g)&&a.v&&a.v(g,a.j[g]);Hu(a);a.Ga&&a.Ga(a.api);a.R.ia("onReady",a.api)}
function Tu(a,b,c){var d=b[c];return function(){var e=Ia.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,Wp(f))}}}
function Du(a){a.Va=!1;if(a.Fa)for(var b in a.j)a.j.hasOwnProperty(b)&&a.Fa(b,a.j[b]);for(var c in a.N)a.N.hasOwnProperty(c)&&Ci(Number(c));a.N={};a.v=null;a.Fa=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Wa};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
l.isReady=function(){return this.Va};
function Eu(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){Sn("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){Sn("WATCH_LATER_VIDEO_REMOVED",b)})}
l.addEventListener=function(a,b){var c=this,d=Ju(this,b);d&&(0<=cb(this.Pb,a)||this.j[a]||(b=Uu(this,a),this.v&&this.v(a,b)),this.R.subscribe(a,d),"onReady"===a&&this.isReady()&&Bi(function(){d(c.api)},0))};
l.removeEventListener=function(a,b){this.i()||(b=Ju(this,b))&&sg(this.R,a,b)};
function Ju(a,b){var c=b;if("string"===typeof b){if(a.Ha[b])return a.Ha[b];c=function(){var d=Ia.apply(0,arguments),e=A(b);if(e)try{e.apply(y,d)}catch(f){Vp(f)}};
a.Ha[b]=c}return c?c:null}
function Uu(a,b){var c="ytPlayer"+b+a.A;a.j[b]=c;y[c]=function(d){var e=Bi(function(){if(!a.i()){try{a.R.ia(b,null!=d?d:void 0)}catch(h){Wp(new Q("PlayerProxy error when creating global callback",{error:h,event:b,playerId:a.A,data:d}))}var f=a.N,g=String(e);g in f&&delete f[g]}},0);
ob(a.N,String(e))};
return c}
l.getPlayerType=function(){return this.ea||(Lu(this)?"html5":null)};
l.getLastError=function(){return this.lastError};
function Ou(a){a.cancel();Du(a);a.ea=null;a.config&&(a.config.loaded=!1);var b=Lu(a);b&&(Ku(a)||!Ru(a)?a.m=b:(b&&b.destroy&&b.destroy(),a.m=null));if(a.o)for(a=a.o;b=a.firstChild;)a.removeChild(b)}
l.cancel=function(){this.L&&Et(Mu(this),this.L);Ci(this.ob);this.W=!1};
l.I=function(){Ou(this);if(this.m&&this.config&&this.m.destroy)try{this.m.destroy()}catch(b){Vp(b)}this.Ha=null;for(var a in this.j)this.j.hasOwnProperty(a)&&(y[this.j[a]]=null);this.Wa=this.config=this.api=null;delete this.o;delete this.l;I.prototype.I.call(this)};
function Ru(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function Mu(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Qu(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Pu(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return"true"===oi(c||"","&")[b]}
function Iu(a){for(var b={},c=q(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?rb(e):e}return b}
;var Vu={},Wu="player_uid_"+(1E9*Math.random()>>>0);function Xu(a,b,c){var d="player";c=void 0===c?!0:c;d="string"===typeof d?Td(d):d;var e=Wu+"_"+Qa(d),f=Vu[e];if(f&&c)return Yu(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new Cu(d,e,a,b);Vu[e]=f;Sn("player-added",f.api);we(f,function(){delete Vu[f.getId()]});
return f.api}
function Yu(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Zu=null,$u=null,av=null;function bv(){var a=Zu.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
;function cv(a,b,c){a="ST-"+Zb(a).toString(36);b=b?fc(b):"";c=c||5;Cq()&&Si(a,b,c)}
;function dv(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=L("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=L("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=cc(window.location.href);g&&f.push(g);g=cc(d);if(0<=cb(f,g)||!g&&0==d.lastIndexOf("/",0))if(M("autoescape_tempdata_url")&&(f=document.createElement("a"),Ub(f,d),d=f.href),d&&(d=dc(d),f=d.indexOf("#"),d=0>f?d:d.slice(0,f)))if(e&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:nq()},b)),h){var h=parseInt(h,10);isFinite(h)&&0<h&&
cv(d,b,h)}else cv(d,b)}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var k=void 0===k?{}:k;var m=void 0===m?"":m;var p=void 0===p?window:p;c=p.location;a=gc(a,k)+m;var t=void 0===t?Pd:t;a:{t=void 0===t?Pd:t;for(k=0;k<t.length;++k)if(m=t[k],m instanceof Nd&&m.isValid(a)){t=new Jb(a,Kb);break a}t=void 0}c.href=Lb(t||Nb)}return!0}
;z("yt.setConfig",Zh);z("yt.config.set",Zh);z("yt.setMsg",sq);z("yt.msgs.set",sq);z("yt.logging.errors.log",Vp);
z("writeEmbed",function(){var a=L("PLAYER_CONFIG");if(!a){var b=L("PLAYER_VARS");b&&(a={args:b})}Lq(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=L("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);M("embeds_js_api_set_1p_cookie")&&(c=ti(window.location.href),c.embedsTokenValue&&(a.args.embedsTokenValue=c.embedsTokenValue));hs();if((c=L("WEB_PLAYER_CONTEXT_CONFIGS"))&&
"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in c){c=c.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=ti(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}Zu=Xu(a,c,!1)}else Zu=Xu(a);Zu.addEventListener("onVideoDataChange",bv);a=L("POST_MESSAGE_ID","player");L("ENABLE_JS_API")?av=new mu(Zu):L("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&($u=new tu(window.parent,a,b),av=new qu(Zu,$u.connection));
Ht();M("ytidb_create_logger_embed_killswitch")||ik();a={};au||(au=new $t);au.install((a.flush_logs={ka:function(){Yo()}},a));
M("embeds_web_enable_new_nwl")?Vm():cn();M("ytidb_clear_embedded_player")&&gf.M(function(){var e;if(!Ps){Vq||(Vq=new Sq);var f=Vq;var g={kc:Os,Nb:Ns};f.providers.set(g.kc,g);g={rb:{feedbackEndpoint:fr(Js),modifyChannelNotificationPreferenceEndpoint:fr(Ks),playlistEditEndpoint:fr(Ls),subscribeEndpoint:fr(Hs),unsubscribeEndpoint:fr(Is),webPlayerShareEntityServiceEndpoint:fr(Ms)}};var h=M("web_enable_client_location_service")?br.getInstance():void 0,k={};h&&(k.client_location=h);if(void 0===m){Mq.i||
(Mq.i=new Mq);var m=Mq.i}void 0===e&&(e=f.resolve(Os));ws(g,e,m,k);Ps=vs.i}qt()})});
var ev=gi(function(){ns();var a=Wi.getInstance(),b=Zi(119),c=1<window.devicePixelRatio;if(document.body&&Gf(document.body,"exp-invert-logo"))if(c&&!Gf(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Gf(d,"inverted-hdpi")){var e=Ef(d);Ff(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Gf(document.body,"inverted-hdpi")&&Hf();if(b!=c){b="f"+(Math.floor(119/31)+1);d=$i(b)||0;d=c?d|67108864:d&-67108865;0==d?delete Vi[b]:(c=d.toString(16),
Vi[b]=c.toString());c=!0;M("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.i;d=[];for(var f in Vi)d.push(f+"="+encodeURIComponent(String(Vi[f])));Si(b,d.join("&"),63072E3,a.j,c)}Zs.i||(Zs.i=new Zs);a=Zs.i;f=16623;var g=void 0===g?{}:g;Object.values(tq).includes(f)||(Wp(new Q("createClientScreen() called with a non-page VE",f)),f=83769);g.isHistoryNavigation||a.i.push({rootVe:f,key:g.key||""});a.s=[];a.D=[];g.ub?bt(a,f,g):ct(a,f,g)}),fv=gi(function(){Zu&&Zu.sendAbandonmentPing&&Zu.sendAbandonmentPing();
L("PL_ATT")&&Pt.dispose();for(var a=gf,b=0,c=Ft.length;b<c;b++)a.S(Ft[b]);Ft.length=0;Dt("//static.doubleclick.net/instream/ad_status.js");Gt=!1;Zh("DCLKSTAT",0);ve(av,$u);Zu&&(Zu.removeEventListener("onVideoDataChange",bv),Zu.destroy())});
window.addEventListener?(window.addEventListener("load",ev),window.addEventListener("pagehide",fv)):window.attachEvent&&(window.attachEvent("onload",ev),window.attachEvent("onunload",fv));z("yt.abuse.player.botguardInitialized",A("yt.abuse.player.botguardInitialized")||Qt);z("yt.abuse.player.invokeBotguard",A("yt.abuse.player.invokeBotguard")||Rt);z("yt.abuse.dclkstatus.checkDclkStatus",A("yt.abuse.dclkstatus.checkDclkStatus")||Kt);z("yt.player.exports.navigate",A("yt.player.exports.navigate")||dv);
z("yt.util.activity.init",A("yt.util.activity.init")||Hn);z("yt.util.activity.getTimeSinceActive",A("yt.util.activity.getTimeSinceActive")||Kn);z("yt.util.activity.setTimestamp",A("yt.util.activity.setTimestamp")||In);}).call(this);
