"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{1510:function(e,t,r){r.d(t,{Z:function(){return o}});r(2791);var n=r(1160),a=r(1087),c=r(7689),i={movie_container:"MovieList_movie_container__e-vEF",card_wrapper:"MovieList_card_wrapper__uegMx",movie_link:"MovieList_movie_link__aBAcC",movie_img:"MovieList_movie_img__nhGcc",movie_title:"MovieList_movie_title__6L8Eg"},s=r(184),o=function(e){var t=e.movies,r=n,o=(0,c.TH)();return(0,s.jsx)("ul",{className:i.movie_container,children:t.map((function(e){var t=e.poster_path,n=e.name,c=e.title,u=e.id;return(0,s.jsx)("div",{className:i.card_wrapper,children:(0,s.jsx)(a.rU,{to:"/movies/".concat(u),state:{from:o},className:i.movie_link,children:(0,s.jsxs)("li",{className:i.movie_item,children:[(0,s.jsx)("img",{className:i.movie_img,src:null!==t?"https://image.tmdb.org/t/p/w500/"+t:r,alt:c}),(0,s.jsx)("p",{className:i.movie_title,children:c||n})]})})},u)}))})}},9544:function(e,t,r){r.r(t);var n=r(5861),a=r(9439),c=r(7757),i=r.n(c),s=r(2791),o=r(1510),u=r(299),p=r(3521),l=r(184);t.default=function(){var e=(0,s.useState)(null),t=(0,a.Z)(e,2),r=t[0],c=t[1],v=(0,s.useState)(!1),f=(0,a.Z)(v,2),m=f[0],h=f[1],_=(0,s.useState)(null),d=(0,a.Z)(_,2),x=d[0],g=d[1];return(0,s.useEffect)((function(){h(!0);var e=function(){var e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.Df)();case 3:if(0!==(t=e.sent)){e.next=6;break}return e.abrupt("return");case 6:c(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),g(e.t0);case 12:return e.prev=12,h(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,l.jsxs)("main",{children:[x&&(0,l.jsx)("p",{children:"Something went wrong. Please, refresh the page"}),m&&(0,l.jsx)(p.Z,{}),r&&(0,l.jsx)(o.Z,{movies:r})]})}},299:function(e,t,r){r.d(t,{Df:function(){return u},M1:function(){return h},TP:function(){return f},tx:function(){return d},z1:function(){return l}});var n=r(5861),a=r(7757),c=r.n(a),i=r(1243),s="https://api.themoviedb.org/3",o="e58952305d798b0bf4a300c9b516b346";function u(){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(s,"/trending/movie/day?api_key=").concat(o));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error("getTrendingFilms error"+e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function l(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(s,"/search/movie?api_key=").concat(o,"&query=").concat(t));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error("searchMovies error"+e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function f(e){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(s,"/movie/").concat(t,"?api_key=").concat(o));case 3:return r=e.sent,e.next=6,r.data;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.error("getMovieDetails error",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function h(e){return _.apply(this,arguments)}function _(){return(_=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(o));case 3:return r=e.sent,e.abrupt("return",r.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.error("getMovieCast error"+e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function d(e){return x.apply(this,arguments)}function x(){return(x=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(o));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error("getMovieReviews error"+e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}},1160:function(e,t,r){e.exports=r.p+"static/media/noPoster.68ae350692995e841a18.png"}}]);
//# sourceMappingURL=544.0d461df6.chunk.js.map