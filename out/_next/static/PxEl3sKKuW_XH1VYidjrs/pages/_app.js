(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"4bdI":function(t,e,n){n("Ui4e"),t.exports=n("WEpk").Object.freeze},"5HXA":function(t,e,n){"use strict";var r=n("ANjH").compose;e.__esModule=!0,e.composeWithDevTools="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"===typeof arguments[0]?r:r.apply(null,arguments)},e.devToolsEnhancer="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__:function(){return function(t){return t}}},"8Bbg":function(t,e,n){t.exports=n("B5Ud")},"9Jkg":function(t,e,n){t.exports=n("oh+g")},B5Ud:function(t,e,n){"use strict";var r=n("/HRN"),o=n("WaGi"),a=n("ZDA2"),i=n("/+P4"),u=n("N9n2"),c=n("ln6h"),f=n("KI45");e.__esModule=!0,e.Container=function(t){0;return t.children},e.createUrl=v,e.default=void 0;var l=f(n("htGi")),s=f(n("+oT+")),p=f(n("q1tI")),d=n("g/15");function b(t){return h.apply(this,arguments)}function h(){return(h=(0,s.default)(c.mark(function t(e){var n,r,o;return c.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.Component,r=e.ctx,t.next=3,(0,d.loadGetInitialProps)(n,r);case 3:return o=t.sent,t.abrupt("return",{pageProps:o});case 5:case"end":return t.stop()}},t)}))).apply(this,arguments)}e.AppInitialProps=d.AppInitialProps;var y=function(t){function e(){return r(this,e),a(this,i(e).apply(this,arguments))}return u(e,t),o(e,[{key:"componentDidCatch",value:function(t,e){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,n=t.Component,r=t.pageProps,o=v(e);return p.default.createElement(n,(0,l.default)({},r,{url:o}))}}]),e}(p.default.Component);function v(t){var e=t.pathname,n=t.asPath,r=t.query;return{get query(){return r},get pathname(){return e},get asPath(){return n},back:function(){t.back()},push:function(e,n){return t.push(e,n)},pushTo:function(e,n){var r=n?e:"",o=n||e;return t.push(r,o)},replace:function(e,n){return t.replace(e,n)},replaceTo:function(e,n){var r=n?e:"",o=n||e;return t.replace(r,o)}}}e.default=y,y.origGetInitialProps=b,y.getInitialProps=b},FbiP:function(t,e,n){t.exports=n("4bdI")},J5xr:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("Q0q4")}])},Q0q4:function(t,e,n){"use strict";n.r(e);var r=n("ln6h"),o=n.n(r),a=n("eVuF"),i=n.n(a);function u(t,e,n,r,o,a,u){try{var c=t[a](u),f=c.value}catch(l){return void n(l)}c.done?e(f):i.a.resolve(f).then(r,o)}var c=n("0iUn"),f=n("hfKm"),l=n.n(f);function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),l()(t,r.key,r)}}var p=n("XVgq"),d=n.n(p),b=n("Z7t5"),h=n.n(b);function y(t){return(y="function"===typeof h.a&&"symbol"===typeof d.a?function(t){return typeof t}:function(t){return t&&"function"===typeof h.a&&t.constructor===h.a&&t!==h.a.prototype?"symbol":typeof t})(t)}function v(t){return(v="function"===typeof h.a&&"symbol"===y(d.a)?function(t){return y(t)}:function(t){return t&&"function"===typeof h.a&&t.constructor===h.a&&t!==h.a.prototype?"symbol":y(t)})(t)}function m(t,e){return!e||"object"!==v(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}var g=n("Bhuq"),w=n.n(g),O=n("TRZx"),_=n.n(O);function E(t){return(E=_.a?w.a:function(t){return t.__proto__||w()(t)})(t)}var S=n("SqZg"),x=n.n(S);function j(t,e){return(j=_.a||function(t,e){return t.__proto__=e,t})(t,e)}var k=n("8Bbg"),P=n.n(k),T=n("q1tI"),z=n.n(T),I=n("vOnD"),N=n("WRJ3"),U=n("/MKj"),C=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),R=function(){return(R=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},D=function(t,e,n,r){return new(n||(n=Promise))(function(o,a){function i(t){try{c(r.next(t))}catch(e){a(e)}}function u(t){try{c(r.throw(t))}catch(e){a(e)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(i,u)}c((r=r.apply(t,e||[])).next())})},F=function(t,e){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i)}catch(u){a=[6,u],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},A=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n},X={storeKey:"__NEXT_REDUX_STORE__",debug:!1,serializeState:function(t){return t},deserializeState:function(t){return t}},L=n("viY9"),M=n("o8Rm"),B=n("wx14"),J=(n("17x9"),n("OKji")),G=n("aXM8"),H=n("hfi/");var W=function(t){var e=t.children,n=t.theme,r=Object(G.a)(),o=z.a.useMemo(function(){var t=null===r?n:function(t,e){return"function"===typeof e?e(t):Object(B.a)({},t,{},e)}(r,n);return null!=t&&(t[H.a]=null!==r),t},[n,r]);return z.a.createElement(J.a.Provider,{value:o},e)},q=n("8ezB"),K=n("ANjH"),V=n("5HXA"),Q=n("2Eek"),Z=n.n(Q),Y=n("XoMD"),$=n.n(Y),tt=n("Jo+v"),et=n.n(tt),nt=n("4mXO"),rt=n.n(nt),ot=n("9Jkg"),at=n.n(ot),it=n("vYYK"),ut=n("pLtp"),ct=n.n(ut);function ft(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=ct()(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(rt.a){var a=rt()(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var lt=n("vcXL"),st=n.n(lt),pt=n("XiPH"),dt=n("7Qib");function bt(t,e){var n=ct()(t);if(rt.a){var r=rt()(t);e&&(r=r.filter(function(e){return et()(t,e).enumerable})),n.push.apply(n,r)}return n}function ht(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?bt(n,!0).forEach(function(e){Object(it.a)(t,e,n[e])}):$.a?Z()(t,$()(n)):bt(n).forEach(function(e){l()(t,e,et()(n,e))})}return t}var yt=function(t){var e=t.dispatch,n=t.getState;return function(t){return function(r){if("function"===typeof r)return r(e,n);if(!r||!r.endpoint||!r.method)return t(r);var o=r.endpoint,a=r.type,i=r.method,u=r.data,c=r.params,f=r.schema,l=r.entityType,s=r.directPaginatedEntity,p=ft(r,["endpoint","type","method","data","params","schema","entityType","directPaginatedEntity"]);t(ht({},p,{type:"".concat(a,"_REQUEST")}));var d=o.indexOf("unacademy.com/")>-1?o:"".concat("https://unacademy.com/api/").concat(o),b=function(t){return t?ct()(t).map(function(e){return"".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(t[e]))}).join("&"):null}(c);b&&(d="".concat(d,"?").concat(b));var h=dt.a.readCookie("accessToken");return st()(d,{method:i,body:at()(u),headers:{authorization:"Bearer ".concat(h)}}).then(function(t){return t.json()}).then(function(e){var n=e;l&&(n=s?ht({},e,{results:e.results.map(function(t){return Object(it.a)({},l,t)})}):Object(it.a)({},l,e));var r=Object(pt.a)(n,f);return t(ht({},p,{entities:r.entities})),t(ht({},p,{result:r.result,type:"".concat(a,"_SUCCESS")}))}).catch(function(e){return t(ht({},p,{error:e,type:"".concat(a,"_FAILURE")}))})}}},vt=function(t){var e=t.dispatch,n=t.getState;return function(t){return function(r){if("function"===typeof r)return r(e,n);if(!r||!r.entities)return t(r);var o=r.entities;ct()(o).forEach(function(e){t({type:"UPDATE_".concat(e.toUpperCase()),data:o[e]})})}}},mt=n("FkkM");function gt(t,e){var n=ct()(t);if(rt.a){var r=rt()(t);e&&(r=r.filter(function(e){return et()(t,e).enumerable})),n.push.apply(n,r)}return n}function wt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?gt(n,!0).forEach(function(e){Object(it.a)(t,e,n[e])}):$.a?Z()(t,$()(n)):gt(n).forEach(function(e){l()(t,e,et()(n,e))})}return t}var Ot={data:{}},_t=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot,n=arguments.length>1?arguments[1]:void 0,r=(t={},Object(it.a)(t,mt.a.UPDATE_COURSES,wt({},e,{data:Object(dt.b)(n.data,e.data)})),Object(it.a)(t,"".concat(mt.a.FETCH_COURSE_INFO,"_SUCCESS"),wt({},e,{courseDetails:wt({},e.courseDetails,Object(it.a)({},n.courseUid,n.result))})),Object(it.a)(t,"default",e),t);return r[n.type]||r.default};function Et(t,e){var n=ct()(t);if(rt.a){var r=rt()(t);e&&(r=r.filter(function(e){return et()(t,e).enumerable})),n.push.apply(n,r)}return n}function St(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Et(n,!0).forEach(function(e){Object(it.a)(t,e,n[e])}):$.a?Z()(t,$()(n)):Et(n).forEach(function(e){l()(t,e,et()(n,e))})}return t}var xt={data:{},profileInfo:{}},jt=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xt,n=arguments.length>1?arguments[1]:void 0,r=(t={},Object(it.a)(t,mt.b.UPDATE_USERS,St({},e,{data:Object(dt.b)(n.data,e.data)})),Object(it.a)(t,"".concat(mt.b.FETCH_PROFILE_INFO,"_SUCCESS"),St({},e,{profileInfo:St({},e.profileInfo,Object(it.a)({},n.username,n.result))})),Object(it.a)(t,"default",e),t);return r[n.type]||r.default};function kt(t,e){var n=ct()(t);if(rt.a){var r=rt()(t);e&&(r=r.filter(function(e){return et()(t,e).enumerable})),n.push.apply(n,r)}return n}function Pt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?kt(n,!0).forEach(function(e){Object(it.a)(t,e,n[e])}):$.a?Z()(t,$()(n)):kt(n).forEach(function(e){l()(t,e,et()(n,e))})}return t}var Tt={data:{}},zt=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Tt,n=arguments.length>1?arguments[1]:void 0,r=(t={},Object(it.a)(t,mt.c.UPDATE_GOALS,{data:Pt({},e.data,{},n.data)}),Object(it.a)(t,"default",e),t);return r[n.type]||r.default},It=Object(K.combineReducers)({educatorLeaderboard:Object(dt.c)({actionType:mt.b.FETCH_EDUCATOR_LEADERBOARD}),profileFollowing:Object(dt.c)({actionType:mt.b.FETCH_FOLLOWING_LIST}),freeGoalCourses:Object(dt.c)({actionType:mt.a.FETCH_FREE_GOAL_COURSES})}),Nt=Object(K.combineReducers)({courses:_t,users:jt,goals:zt,paginator:It}),Ut=function(t){return Object(K.createStore)(Nt,t,Object(V.composeWithDevTools)(Object(K.applyMiddleware)(yt,vt)))},Ct=n("FbiP"),Rt=n.n(Ct);function Dt(){var t,e,n=(t=['\n  @font-face {\n    font-family: "UN-Font";\n    src: url("/static/fonts/AvertaStd-Regular.otf");\n  }\n  @font-face {\n    font-family: "UN-Font";\n    font-weight: bold;\n    src: url("/static/fonts/AvertaStd-Bold.otf");\n  }\n  @font-face {\n    font-family: "UN-Font";\n    font-weight: 600;\n    src: url("/static/fonts/AvertaStd-SemiBold.otf");\n  }\n  * {\n    font-kerning: none;\n    text-rendering: optimizeLegibility;\n    box-sizing: border-box;\n    word-break: break-word;\n    outline: none;\n    text-decoration: none;\n    margin: 0;\n    -webkit-font-smoothing: antialiased;\n    font-family: UN-Font, -apple-system, BlinkMacSystemFont, sans-serif;\n  }\n  ::selection {\n    color: #3C4852;\n    background: rgba(8,189,128,0.4);\n  }\n'],e||(e=t.slice(0)),Rt()(Z()(t,{raw:{value:Rt()(e)}})));return Dt=function(){return n},n}var Ft=Object(I.createGlobalStyle)(Dt()),At=z.a.createElement,Xt=Object(L.a)({palette:{},typography:{fontFamily:"UN-Font, -apple-system, BlinkMacSystemFont, sans-serif;"}});e.default=function(t,e){e=R(R({},X),e);var n="undefined"===typeof window,r=function(r){var o=r.initialState,a=r.ctx,i=e.storeKey,u=function(){return t(e.deserializeState(o),R(R(R({},a),e),{isServer:n}))};return n?u():(i in window||(window[i]=u()),window[i])};return function(t){var o;return(o=function(n){function o(t,o){var a=n.call(this,t,o)||this,i=t.initialState;return e.debug&&console.log("4. WrappedApp.render created new store with initialState",i),a.store=r({initialState:i}),a}return C(o,n),o.prototype.render=function(){var e=this.props,n=e.initialProps,r=(e.initialState,A(e,["initialProps","initialState"]));return z.a.createElement(t,R({},r,n,{store:this.store}))},o}(T.Component)).displayName="withRedux("+(t.displayName||t.name||"App")+")",o.getInitialProps=function(o){return D(void 0,void 0,void 0,function(){var a,i;return F(this,function(u){switch(u.label){case 0:if(!o)throw new Error("No app context");if(!o.ctx)throw new Error("No page context");return a=r({ctx:o.ctx}),e.debug&&console.log("1. WrappedApp.getInitialProps wrapper got the store with state",a.getState()),o.ctx.store=a,o.ctx.isServer=n,i={},"getInitialProps"in t?[4,t.getInitialProps.call(t,o)]:[3,2];case 1:i=u.sent(),u.label=2;case 2:return e.debug&&console.log("3. WrappedApp.getInitialProps has store state",a.getState()),[2,{isServer:n,initialState:n?e.serializeState(a.getState()):a.getState(),initialProps:i}]}})})},o}}(Ut)(function(t){function e(){return Object(c.a)(this,e),m(this,E(e).apply(this,arguments))}var n,r,a;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=x()(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&j(t,e)}(e,P.a),n=e,r=[{key:"componentDidMount",value:function(){var t=document.querySelector("#jss-server-side");t&&t.parentNode&&t.parentNode.removeChild(t)}},{key:"render",value:function(){var t=this.props,e=t.Component,n=t.pageProps,r=t.store;return At(U.a,{store:r},At(I.ThemeProvider,{theme:q.i},At(N.Normalize,null),At(M.b,{injectFirst:!0},At(W,{theme:Xt},At(e,n))),At(Ft,null)))}}],a=[{key:"getInitialProps",value:function(){var t,e=(t=o.a.mark(function t(e){var n,r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.Component,r=e.ctx,!n.getInitialProps){t.next=7;break}return t.next=4,n.getInitialProps(r);case 4:t.t0=t.sent,t.next=8;break;case 7:t.t0={};case 8:return t.t1=t.t0,t.abrupt("return",{pageProps:t.t1});case 10:case"end":return t.stop()}},t)}),function(){var e=this,n=arguments;return new i.a(function(r,o){var a=t.apply(e,n);function i(t){u(a,r,o,i,c,"next",t)}function c(t){u(a,r,o,i,c,"throw",t)}i(void 0)})});return function(t){return e.apply(this,arguments)}}()}],r&&s(n.prototype,r),a&&s(n,a),e}())},Ui4e:function(t,e,n){var r=n("93I4"),o=n("6/1s").onFreeze;n("zn7N")("freeze",function(t){return function(e){return t&&r(e)?t(o(e)):e}})},WRJ3:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.Normalize=e.normalize=void 0;var r=n("vOnD");function o(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["",""]);return o=function(){return t},t}var a=(0,r.css)(['html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0;}main{display:block;}h1{font-size:2em;margin:0.67em 0;}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace,monospace;font-size:1em;}a{background-color:transparent;}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder;}code,kbd,samp{font-family:monospace,monospace;font-size:1em;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}img{border-style:none;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible;}button,select{text-transform:none;}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0;}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText;}fieldset{padding:0.35em 0.75em 0.625em;}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline;}textarea{overflow:auto;}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto;}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block;}summary{display:list-item;}template{display:none;}[hidden]{display:none;}']);e.normalize=a;var i=(0,r.createGlobalStyle)(o(),a);e.Normalize=i;var u=a;e.default=u},"oh+g":function(t,e,n){var r=n("WEpk"),o=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},vcXL:function(t,e,n){"use strict";var r=self.fetch.bind(self);t.exports=r,t.exports.default=t.exports}},[["J5xr",0,1]]]);