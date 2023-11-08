/*! For license information please see 253.4b95d014.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[253],{174:function(t,e,r){r.d(e,{Z:function(){return g}});r(791);var n,o,i,a,c=r(716),u=r(689),s=r(168),l=r(87),h=r(867),f=h.ZP.ul(n||(n=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 20px;\n"]))),p=h.ZP.div(o||(o=(0,s.Z)(["\n  box-shadow: 0 0 10px 1px grey;\n  border-radius: 5px;\n  overflow: hidden;\n  width: 250px;\n  height: 450px;\n  > h4 {\n    max-width: 250px;\n    margin: 0;\n    text-align: center;\n    display: block;\n    padding: 20px 5px;\n  }\n"]))),d=(0,h.ZP)(l.rU)(i||(i=(0,s.Z)(["\n  text-decoration: none;\n\n  display: inline-block;\n  &:hover,\n  &:focus {\n    > div {\n      box-shadow: 0px 0px 27px 8px rgba(3, 2, 15, 0.75);\n    }\n  }\n"]))),v=h.ZP.li(a||(a=(0,s.Z)(["\n  padding: 0;\n"]))),y=r(184),g=function(t){var e=t.movies;console.log(e);var r=(0,u.TH)();return(0,y.jsx)(f,{children:e.map((function(t){var e=t.poster_path,n=t.title,o=t.id;return(0,y.jsx)(v,{children:(0,y.jsx)(d,{to:"/movies/".concat(o),state:{from:r},children:(0,y.jsxs)(p,{children:[(0,y.jsx)("img",{src:e?"https://image.tmdb.org/t/p/w500".concat(e):c,alt:n}),(0,y.jsx)("h4",{children:n})]})})},o)}))})}},253:function(t,e,r){r.r(e),r.d(e,{default:function(){return E}});var n,o,i,a,c=r(861),u=r(439),s=r(791),l=r(243),h=r(87),f=r(686),p=r.n(f),d=r(168),v=r(867),y=v.ZP.form(n||(n=(0,d.Z)(["\n  margin-bottom: 20px;\n  margin-top: 20px;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),g=v.ZP.button(o||(o=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 140px;\n  height: 40px;\n  font-size: 16px;\n  font-weight: 600;\n  border: none;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n\n  cursor: pointer;\n  &:hover {\n    color: white;\n    background-color: #1f618d;\n    box-shadow: 0 0 13px 2px grey;\n  }\n"]))),x=v.ZP.input(i||(i=(0,d.Z)(["\n  width: 300px;\n  height: 40px;\n  font: inherit;\n  font-size: 16px;\n  border: solid 1px grey;\n  outline: none;\n  padding: 5px 5px 5px 15px;\n"]))),m=r(184),w=function(t){var e,r=t.getSearchMovies,n=(0,h.lr)(),o=(0,u.Z)(n,2),i=o[0],a=o[1],c=null!==(e=i.get("search"))&&void 0!==e?e:"",l=(0,s.useState)(""),f=(0,u.Z)(l,2),d=f[0],v=f[1];return(0,s.useEffect)((function(){d&&r(d)}),[r,d]),(0,m.jsxs)(y,{onSubmit:function(t){t.preventDefault();var e=t.currentTarget.elements.search.value;""===e&&p().Notify.failure("Fill in the form!"),v(e)},children:[(0,m.jsx)(x,{type:"text",name:"search",autoFocus:!0,value:c,onChange:function(t){var e=t.target.value;a(e?{search:e.toLowerCase().trim()}:{})}}),(0,m.jsx)(g,{type:"submit",children:"Search"})]})},b=v.ZP.div(a||(a=(0,d.Z)(["\n  padding: 20px;\n"]))),j=r(174);function L(){L=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof y?e:y,a=Object.create(i.prototype),c=new I(n||[]);return o(a,"_invoke",{value:k(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var f="suspendedStart",p="executing",d="completed",v={};function y(){}function g(){}function x(){}var m={};s(m,a,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(P([])));b&&b!==r&&n.call(b,a)&&(m=b);var j=x.prototype=y.prototype=Object.create(m);function Z(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function k(e,r,n){var o=f;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=_(c,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===f)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var s=h(e,r,n);if("normal"===s.type){if(o=n.done?d:"suspendedYield",s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=d,n.method="throw",n.arg=s.arg)}}}function _(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,_(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=h(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function P(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(typeof e+" is not iterable")}return g.prototype=x,o(j,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:g,configurable:!0}),g.displayName=s(x,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,s(t,u,"GeneratorFunction")),t.prototype=Object.create(j),t},e.awrap=function(t){return{__await:t}},Z(E.prototype),s(E.prototype,c,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new E(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},Z(j),s(j,u,"Generator"),s(j,a,(function(){return this})),s(j,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=P,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:P(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}var Z={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTAwNGI3MzMyYjVhNzZiNTI1YTZjNzAxZDAyNGM5OCIsInN1YiI6IjY1MTNmNmY3Y2FkYjZiMDJiZTU0YTE5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1B34jIpLrGSf868XAK4YgQ7VfiryosAPQmkD2oWkaMk"}},E=function(){var t,e=(0,s.useState)(null),r=(0,u.Z)(e,2),n=r[0],o=r[1],i=(0,h.lr)(),a=null!==(t=(0,u.Z)(i,1)[0].get("search"))&&void 0!==t?t:"",f=(0,s.useRef)(a),p=(0,s.useCallback)(function(){var t=(0,c.Z)(L().mark((function t(e){var r,n,i;return L().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r="https://api.themoviedb.org/3/search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=1"),t.next=4,(0,l.Z)(r,Z);case 4:n=t.sent,i=n.data,o(i.results),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}(),[]);return(0,s.useEffect)((function(){f.current&&p(f.current)}),[p]),(0,m.jsx)("main",{children:(0,m.jsxs)(b,{children:[(0,m.jsx)(w,{getSearchMovies:p}),n&&(0,m.jsx)("div",{children:(0,m.jsx)(j.Z,{movies:n})})]})})}},716:function(t,e,r){t.exports=r.p+"static/media/placeholderFilm.25eaedfe7a808755144e.png"}}]);
//# sourceMappingURL=253.4b95d014.chunk.js.map