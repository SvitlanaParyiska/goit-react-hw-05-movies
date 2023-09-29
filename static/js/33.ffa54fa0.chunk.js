/*! For license information please see 33.ffa54fa0.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[33],{33:function(t,e,r){r.r(e),r.d(e,{default:function(){return O}});var n,o,i,a,c,l,s=r(861),u=r(439),h=r(791),f=r(243),p=r(689),d=r(168),v=r(867),y=r(87),g=v.ZP.div(n||(n=(0,d.Z)(["\n  margin: 0 auto;\n  padding: 20px;\n"]))),x=v.ZP.div(o||(o=(0,d.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),m=(0,v.ZP)(y.rU)(i||(i=(0,d.Z)(["\n  display: inline-block;\n  margin-top: 10px;\n  margin-bottom: 20px;\n  padding: 8px 10px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n\n  &:hover {\n    color: white;\n    background-color: #1f618d;\n    box-shadow: 0 0 13px 2px grey;\n  }\n"]))),w=v.ZP.ul(a||(a=(0,d.Z)(["\n  list-style: none;\n  display: flex;\n  padding: 0;\n  gap: 16px;\n"]))),b=v.ZP.div(c||(c=(0,d.Z)(["\n  padding: 20px;\n  margin-top: 15px;\n  box-shadow: 0 0 6px 1px grey;\n  > ul {\n    > li {\n      display: block;\n      margin-top: 10px;\n    }\n  }\n"]))),j=(0,v.ZP)(y.OL)(l||(l=(0,d.Z)(["\n  display: inline-block;\n  margin-bottom: 10px;\n  padding: 8px 10px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n\n  &:hover {\n    background-color: #a9cce3;\n    box-shadow: 0 0 13px 2px grey;\n  }\n  &.active {\n    color: white;\n    background-color: #1f618d;\n    box-shadow: 0 0 13px 2px grey;\n  }\n"]))),L=r(719),k=r(184);function E(){E=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var i=e&&e.prototype instanceof y?e:y,a=Object.create(i.prototype),c=new I(n||[]);return o(a,"_invoke",{value:Z(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=u;var f="suspendedStart",p="executing",d="completed",v={};function y(){}function g(){}function x(){}var m={};s(m,a,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(G([])));b&&b!==r&&n.call(b,a)&&(m=b);var j=x.prototype=y.prototype=Object.create(m);function L(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,i,a,c){var l=h(t[o],t,i);if("throw"!==l.type){var s=l.arg,u=s.value;return u&&"object"==typeof u&&n.call(u,"__await")?e.resolve(u.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(u).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(l.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function Z(e,r,n){var o=f;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var l=O(c,n);if(l){if(l===v)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===f)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var s=h(e,r,n);if("normal"===s.type){if(o=n.done?d:"suspendedYield",s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=d,n.method="throw",n.arg=s.arg)}}}function O(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=h(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function G(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(typeof e+" is not iterable")}return g.prototype=x,o(j,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:g,configurable:!0}),g.displayName=s(x,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,s(t,l,"GeneratorFunction")),t.prototype=Object.create(j),t},e.awrap=function(t){return{__await:t}},L(k.prototype),s(k.prototype,c,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new k(u(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(j),s(j,l,"Generator"),s(j,a,(function(){return this})),s(j,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=G,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(_),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(l&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:G(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}var Z={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTAwNGI3MzMyYjVhNzZiNTI1YTZjNzAxZDAyNGM5OCIsInN1YiI6IjY1MTNmNmY3Y2FkYjZiMDJiZTU0YTE5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1B34jIpLrGSf868XAK4YgQ7VfiryosAPQmkD2oWkaMk",accept:"application / json"},method:"get"},O=function(){var t,e,r=(0,h.useState)(null),n=(0,u.Z)(r,2),o=n[0],i=n[1],a=(0,p.UO)().movieId,c=Number(a),l="https://api.themoviedb.org/3/movie/".concat(c),d=(0,p.TH)(),v=null!==(t=null===(e=d.state)||void 0===e?void 0:e.from)&&void 0!==t?t:"/products",y=(0,h.useCallback)((0,s.Z)(E().mark((function t(){var e,r;return E().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,f.Z)(l,Z);case 3:e=t.sent,r=e.data,i(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),[l]);return(0,h.useEffect)((function(){y()}),[y]),(0,k.jsxs)("main",{children:[(0,k.jsxs)(g,{children:[(0,k.jsxs)(m,{to:v,state:{from:d},children:[(0,k.jsx)(L.YiX,{})," Go back"]}),o&&(0,k.jsxs)(x,{children:[(0,k.jsx)("img",{width:"200px",src:"https://image.tmdb.org/t/p/w500".concat(o.poster_path),alt:o.title}),(0,k.jsxs)("div",{children:[(0,k.jsx)("h1",{children:o.title}),(0,k.jsxs)("p",{children:["User Score: ",Math.ceil(o.popularity/10),"%"]}),(0,k.jsx)("h2",{children:"Overview"}),(0,k.jsx)("p",{children:o.overview}),(0,k.jsx)("h3",{children:"Genres"}),(0,k.jsx)(w,{children:o.genres.map((function(t){return(0,k.jsx)("li",{children:t.name},t.id)}))})]})]})]}),(0,k.jsxs)(b,{children:[(0,k.jsx)("h3",{children:"Additional information"}),(0,k.jsxs)("ul",{children:[(0,k.jsx)("li",{children:(0,k.jsx)(j,{to:"cast",children:"Cast"})}),(0,k.jsx)("li",{children:(0,k.jsx)(j,{to:"reviews",children:"Reviews"})})]})]}),(0,k.jsx)(g,{children:(0,k.jsx)(h.Suspense,{fallback:(0,k.jsx)("div",{children:"Loading subpage..."}),children:(0,k.jsx)(p.j3,{})})})]})}}}]);
//# sourceMappingURL=33.ffa54fa0.chunk.js.map