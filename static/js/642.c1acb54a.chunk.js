"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[642],{3642:function(e,r,t){t.r(r),t.d(r,{default:function(){return _}});var n=t(5861),a=t(9439),c=t(7757),s=t.n(c),u=t(2791),i=t(7689),o=t(299),p=t(3521),v=t(1686),l=t.n(v),f="ReviewsList_review_title__60aGe",h="ReviewsList_review_container__xA-c8",d="ReviewsList_review_author__EbCvD",w="ReviewsList_review_text__qARge",x=t(184),m=function(e){var r=e.review;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:f,children:"Reviews"}),(0,x.jsx)("ul",{className:h,children:r.map((function(e){var r=e.author,t=e.id,n=e.content;return(0,x.jsxs)("li",{children:[(0,x.jsxs)("p",{className:d,children:["Autror: ",r]}),(0,x.jsx)("p",{className:w,children:n})]},t)}))})]})},_=function(){var e=(0,u.useState)(null),r=(0,a.Z)(e,2),t=r[0],c=r[1],v=(0,u.useState)(!1),f=(0,a.Z)(v,2),h=f[0],d=f[1],w=(0,u.useState)(null),_=(0,a.Z)(w,2),y=_[0],k=_[1],g=(0,i.UO)().movieId;return(0,u.useEffect)((function(){var e=function(){var e=(0,n.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.prev=1,e.next=4,(0,o.tx)(g);case 4:if(0!==(r=e.sent).length){e.next=7;break}return e.abrupt("return");case 7:c(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),k(e.t0);case 13:return e.prev=13,d(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[g]),(0,x.jsxs)(x.Fragment,{children:[h&&(0,x.jsx)(p.Z,{}),t?(0,x.jsx)(m,{review:t}):(0,x.jsx)("p",{children:"We don't have any reviews for this movie"}),y&&l().Notify.failure("Sorry, something wrong")]})}},299:function(e,r,t){t.d(r,{Df:function(){return o},M1:function(){return d},TP:function(){return f},tx:function(){return x},z1:function(){return v}});var n=t(5861),a=t(7757),c=t.n(a),s=t(1243),u="https://api.themoviedb.org/3",i="e58952305d798b0bf4a300c9b516b346";function o(){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(u,"/trending/movie/day?api_key=").concat(i));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error("getTrendingFilms error"+e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function v(e){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(u,"/search/movie?api_key=").concat(i,"&query=").concat(r));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error("searchMovies error"+e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(u,"/movie/").concat(r,"?api_key=").concat(i));case 3:return t=e.sent,e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.error("getMovieDetails error",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function d(e){return w.apply(this,arguments)}function w(){return(w=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(u,"/movie/").concat(r,"/credits?api_key=").concat(i));case 3:return t=e.sent,e.abrupt("return",t.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.error("getMovieCast error"+e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function x(e){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(u,"/movie/").concat(r,"/reviews?api_key=").concat(i));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error("getMovieReviews error"+e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=642.c1acb54a.chunk.js.map