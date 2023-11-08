/*! For license information please see 33.3320d729.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[33],{33:function(t,e,r){r.r(e),r.d(e,{default:function(){return I}});var n,o,i,a,c,l,s,u=r(861),h=r(439),f=r(791),p=r(243),d=r(689),y=r(168),v=r(867),g=r(87),x=v.ZP.div(n||(n=(0,y.Z)(["\n  margin: 0 auto;\n  padding: 20px;\n"]))),m=v.ZP.div(o||(o=(0,y.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),w=v.ZP.img(i||(i=(0,y.Z)(["\n  box-shadow: 0 0 10px 1px grey;\n"]))),b=(0,v.ZP)(g.rU)(a||(a=(0,y.Z)(["\n  display: inline-block;\n  margin-top: 10px;\n  margin-bottom: 20px;\n  padding: 6px 8px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: #0a0d20;\n  background: linear-gradient(317deg, #26fff2 13.2%, #326cff 51.54%);\n  font-weight: 500;\n\n  &:hover {\n    background-color: #1f618d;\n    box-shadow: 0 0 13px 2px grey;\n  }\n"]))),j=v.ZP.ul(c||(c=(0,y.Z)(["\n  list-style: none;\n  display: flex;\n  padding: 0;\n  gap: 16px;\n"]))),L=v.ZP.div(l||(l=(0,y.Z)(["\n  padding: 20px;\n  margin-top: 15px;\n  box-shadow: 0 0 6px 1px grey;\n  > ul {\n    > li {\n      display: block;\n      margin-top: 10px;\n    }\n  }\n"]))),k=(0,v.ZP)(g.OL)(s||(s=(0,y.Z)(["\n  display: inline-block;\n  margin-bottom: 10px;\n  padding: 8px 10px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: #0a0d20;\n  background: linear-gradient(317deg, #26fff2 13.2%, #326cff 51.54%);\n  font-weight: 500;\n\n  &:hover {\n    background-color: #a9cce3;\n    box-shadow: 0 0 13px 2px grey;\n  }\n  &.active {\n    background-color: #1f618d;\n    box-shadow: 0 0 13px 2px grey;\n  }\n"]))),E=r(719),Z=r(716),O=r(184);function _(){_=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var i=e&&e.prototype instanceof v?e:v,a=Object.create(i.prototype),c=new I(n||[]);return o(a,"_invoke",{value:E(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=u;var f="suspendedStart",p="executing",d="completed",y={};function v(){}function g(){}function x(){}var m={};s(m,a,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(G([])));b&&b!==r&&n.call(b,a)&&(m=b);var j=x.prototype=v.prototype=Object.create(m);function L(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,i,a,c){var l=h(t[o],t,i);if("throw"!==l.type){var s=l.arg,u=s.value;return u&&"object"==typeof u&&n.call(u,"__await")?e.resolve(u.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(u).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(l.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function E(e,r,n){var o=f;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var l=Z(c,n);if(l){if(l===y)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===f)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var s=h(e,r,n);if("normal"===s.type){if(o=n.done?d:"suspendedYield",s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=d,n.method="throw",n.arg=s.arg)}}}function Z(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,Z(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=h(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function G(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(typeof e+" is not iterable")}return g.prototype=x,o(j,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:g,configurable:!0}),g.displayName=s(x,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,s(t,l,"GeneratorFunction")),t.prototype=Object.create(j),t},e.awrap=function(t){return{__await:t}},L(k.prototype),s(k.prototype,c,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new k(u(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(j),s(j,l,"Generator"),s(j,a,(function(){return this})),s(j,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=G,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(l&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:G(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}var N={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTAwNGI3MzMyYjVhNzZiNTI1YTZjNzAxZDAyNGM5OCIsInN1YiI6IjY1MTNmNmY3Y2FkYjZiMDJiZTU0YTE5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1B34jIpLrGSf868XAK4YgQ7VfiryosAPQmkD2oWkaMk",accept:"application / json"},method:"get"},I=function(){var t,e,r=(0,f.useState)(null),n=(0,h.Z)(r,2),o=n[0],i=n[1],a=(0,d.UO)().movieId,c=Number(a),l="https://api.themoviedb.org/3/movie/".concat(c),s=null!==(t=null===(e=(0,d.TH)().state)||void 0===e?void 0:e.from)&&void 0!==t?t:"/products",y=(0,f.useRef)(s),v=(0,f.useCallback)((0,u.Z)(_().mark((function t(){var e,r;return _().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,p.Z)(l,N);case 3:e=t.sent,r=e.data,i(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),[l]);return(0,f.useEffect)((function(){v()}),[v]),(0,O.jsxs)("main",{children:[(0,O.jsxs)(x,{children:[(0,O.jsxs)(b,{to:y.current,children:[(0,O.jsx)(E.YiX,{})," Go back"]}),o&&(0,O.jsxs)(m,{children:[(0,O.jsx)(w,{width:"200px",src:o.poster_path?"https://image.tmdb.org/t/p/w500".concat(o.poster_path):Z,alt:o.title}),(0,O.jsxs)("div",{children:[(0,O.jsx)("h1",{children:o.title}),(0,O.jsxs)("p",{children:["User Score: ",Math.ceil(o.popularity/10),"%"]}),(0,O.jsx)("h2",{children:"Overview"}),(0,O.jsx)("p",{children:o.overview}),(0,O.jsx)("h3",{children:"Genres"}),(0,O.jsx)(j,{children:o.genres.map((function(t){return(0,O.jsx)("li",{children:t.name},t.id)}))})]})]})]}),(0,O.jsxs)(L,{children:[(0,O.jsx)("h3",{children:"Additional information"}),(0,O.jsxs)("ul",{children:[(0,O.jsx)("li",{children:(0,O.jsx)(k,{to:"cast",children:"Cast"})}),(0,O.jsx)("li",{children:(0,O.jsx)(k,{to:"reviews",children:"Reviews"})})]})]}),(0,O.jsx)(x,{children:(0,O.jsx)(f.Suspense,{fallback:(0,O.jsx)("div",{children:"Loading subpage..."}),children:(0,O.jsx)(d.j3,{})})})]})}},716:function(t,e,r){t.exports=r.p+"static/media/placeholderFilm.25eaedfe7a808755144e.png"}}]);
//# sourceMappingURL=33.3320d729.chunk.js.map