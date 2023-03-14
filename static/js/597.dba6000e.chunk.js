"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[597],{5597:function(e,r,t){t.r(r),t.d(r,{default:function(){return _}});var n=t(5861),a=t(9439),c=t(7757),s=t.n(c),i=t(2791),o=t(1087),u=t(7689),l=t(299),p=t(1160),d={card_container:"MovieCard_card_container__Zat1R",card_img:"MovieCard_card_img__8YWvr",card_description:"MovieCard_card_description__k7iPq",card_title:"MovieCard_card_title__DzBeX"},v=t(184),h=function(e){var r=e.movie,t=r.poster_path,n=r.original_title,a=r.release_date,c=r.genres,s=r.vote_average,i=r.overview,o=p;return(0,v.jsxs)("div",{className:d.card_container,children:[(0,v.jsx)("div",{children:(0,v.jsx)("img",{src:null!==t?"https://image.tmdb.org/t/p/w500/"+t:o,className:d.card_img,alt:n})}),(0,v.jsxs)("div",{className:d.card_description,children:[(0,v.jsxs)("h1",{className:d.card_title,children:[n,(0,v.jsxs)("span",{children:["(",parseInt(a),")"]})]}),(0,v.jsxs)("p",{children:["User Score: ",Math.round(10*s),"%"]}),(0,v.jsx)("h2",{className:d.description_name,children:"Overview"}),(0,v.jsx)("p",{className:d.description,children:i}),(0,v.jsx)("h2",{className:d.description_name,children:"Genres"}),(0,v.jsx)("p",{className:d.description_name,children:c.map((function(e){return e.name})).join(" | ")})]})]})},f={go_back:"MovieDetails_go_back__OpTV4",movie_link:"MovieDetails_movie_link__mfuEK"},m=t(3521),_=function(){var e,r,t=(0,i.useState)(null),c=(0,a.Z)(t,2),p=c[0],d=c[1],_=(0,i.useState)(null),x=(0,a.Z)(_,2),g=x[0],j=x[1],k=(0,i.useState)(!1),w=(0,a.Z)(k,2),b=w[0],y=w[1],Z=(0,u.UO)().movieId,M=null!==(e=null===(r=(0,u.TH)().state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/";return(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.prev=1,e.next=4,(0,l.TP)(Z);case 4:if(0!==(r=e.sent)){e.next=7;break}return e.abrupt("return");case 7:d(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),j(e.t0);case 13:return e.prev=13,y(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[Z]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(o.rU,{to:M,className:f.go_back,children:"\u2190 Go back"}),p&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(h,{movie:p}),(0,v.jsxs)("div",{children:[(0,v.jsx)("h2",{children:"Additional information"}),(0,v.jsxs)("ul",{className:f.list,children:[(0,v.jsx)(o.rU,{to:"cast",state:{from:M},className:f.movie_link,children:(0,v.jsx)("li",{children:"Cast"})}),(0,v.jsx)(o.rU,{to:"reviews",state:{from:M},className:f.movie_link,children:(0,v.jsx)("li",{children:"Reviews"})})]})]})]}),g&&(0,v.jsx)("p",{children:"Something went wrong. Please, refresh the page"}),b&&(0,v.jsx)(m.Z,{}),(0,v.jsx)(i.Suspense,{fallback:(0,v.jsx)(m.Z,{}),children:(0,v.jsx)(u.j3,{})})]})}},299:function(e,r,t){t.d(r,{Df:function(){return u},M1:function(){return f},TP:function(){return v},tx:function(){return _},z1:function(){return p}});var n=t(5861),a=t(7757),c=t.n(a),s=t(1243),i="https://api.themoviedb.org/3",o="e58952305d798b0bf4a300c9b516b346";function u(){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(i,"/trending/movie/day?api_key=").concat(o));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error("getTrendingFilms error"+e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function p(e){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(i,"/search/movie?api_key=").concat(o,"&query=").concat(r));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error("searchMovies error"+e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function v(e){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(i,"/movie/").concat(r,"?api_key=").concat(o));case 3:return t=e.sent,e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.error("getMovieDetails error",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function f(e){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(i,"/movie/").concat(r,"/credits?api_key=").concat(o));case 3:return t=e.sent,e.abrupt("return",t.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.error("getMovieCast error"+e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function _(e){return x.apply(this,arguments)}function x(){return(x=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(i,"/movie/").concat(r,"/reviews?api_key=").concat(o));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error("getMovieReviews error"+e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}},1160:function(e,r,t){e.exports=t.p+"static/media/noPoster.68ae350692995e841a18.png"}}]);
//# sourceMappingURL=597.dba6000e.chunk.js.map