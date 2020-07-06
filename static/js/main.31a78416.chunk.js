(this["webpackJsonpreact-course-work"]=this["webpackJsonpreact-course-work"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports={button:"styles_button__2WSs1",searchOptionsButton:"styles_searchOptionsButton__3bugm",sortOptionsButton:"styles_sortOptionsButton__1qSTp",searchButton:"styles_searchButton__115rv",closeModalButton:"styles_closeModalButton__1UmwS",homeButton:"styles_homeButton__HUgTW",activeButton:"styles_activeButton__303YH"}},function(e,t,a){e.exports={container:"styles_container__zFTIn",modalWindow:"styles_modalWindow__3Kuob",fadeIn:"styles_fadeIn__bTdba",modalWindowContainer:"styles_modalWindowContainer__3dTU1",movieTitle:"styles_movieTitle__1I9eX",movieOverview:"styles_movieOverview__SN7J3",movieGenres:"styles_movieGenres__ByZcq",movieBudget:"styles_movieBudget__3D1fC",movieRating:"styles_movieRating__3urHa"}},,function(e,t,a){e.exports={container:"styles_container__2Efk3",posterContainer:"styles_posterContainer__31dZM",posterWrapper:"styles_posterWrapper__PzC4z",movieDescription:"styles_movieDescription__205Jb",title:"styles_title__pGuhe",subtitle:"styles_subtitle__QGzpz"}},,function(e,t,a){e.exports={container:"styles_container__2Rif4",input:"styles_input__113WA",buttonPanel:"styles_buttonPanel__ye0qR",searchOptions:"styles_searchOptions__17xks",buttonWrapper:"styles_buttonWrapper__2KgnK"}},,function(e,t,a){e.exports={container:"styles_container__3MMav",wrapper:"styles_wrapper__1t8_M",errorMessage:"styles_errorMessage__2ipGP"}},function(e,t,a){e.exports={container:"styles_container__2PJdh",movieCounter:"styles_movieCounter__b7ABD",sortOptions:"styles_sortOptions__2Da0C",buttonWrapper:"styles_buttonWrapper__WyM3P"}},function(e,t,a){e.exports={container:"styles_container__3Ovmd",errorWrapper:"styles_errorWrapper__26wTC",codeError:"styles_codeError__2z1NG",textError:"styles_textError__3jacv"}},,,function(e,t,a){e.exports={container:"styles_container__2uVUS",header:"styles_header__3hZKO",logo:"styles_logo__gDk44"}},,,,,function(e,t,a){e.exports={container:"styles_container__nTeNq",logo:"styles_logo__3knon"}},,,,,,function(e,t,a){e.exports=a(44)},,,,,function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(20),c=a.n(r),s=(a(38),a(4)),i=a(9),l=a(2),u=a(13),p=a.n(u),_=function(e){var t=e.id,a=e.title,n=e.releaseDate,r=e.poster,c=e.genres;return o.a.createElement(i.b,{to:"/".concat(t)},o.a.createElement("div",{className:p.a.container},o.a.createElement("div",{className:p.a.posterWrapper},o.a.createElement("div",{className:p.a.posterContainer,style:{backgroundImage:"url(".concat(r,")")}})),o.a.createElement("div",{className:p.a.movieDescription},o.a.createElement("div",{className:p.a.title},o.a.createElement("h3",null,a.toUpperCase()),o.a.createElement("span",null,n.split("-")[0])),o.a.createElement("div",{className:p.a.subtitle},c.join(" & ")))))},d=a(17),m=a.n(d),E=function(){var e=Object(s.c)((function(e){return e})),t=e.dataMovies,a=e.inputValue,r=e.searchOption,c=e.sortOption,i=e.error,l=Object(s.b)(),u=Object(n.useRef)(!1);Object(n.useEffect)((function(){l({type:"GET_MOVIE_REQUEST"})}),[l]);u.current&&(u.current=!u.current);var p=function e(){var t=window.innerHeight,n=document.body.clientHeight,o=window.pageYOffset||document.documentElement.scrollTop;u.current||t+o>=n-200&&(l({type:"ADD_MOVIE_TO_STORE_REQUEST",payload:{inputValue:a,searchOption:r,sortOption:c}}),u.current=!u.current,window.removeEventListener("scroll",e))};return Object(n.useEffect)((function(){window.addEventListener("scroll",p)})),o.a.createElement("main",{className:m.a.container},i?o.a.createElement("div",{className:m.a.wrapper},o.a.createElement("div",{className:m.a.errorMessage},i)):o.a.createElement("div",{className:m.a.wrapper},0===t.length?"Movies not found":t.map((function(e){var t=e.id,a=e.title,n=e.release_date,r=e.poster_path,c=e.genres;return o.a.createElement(_,{key:t,id:t,title:a,releaseDate:n,poster:r,genres:c})}))))},v=a(10),O=a.n(v),y=function(e){var t=e.children,a=e.onClick,n=e.typeButton,r=e.isActive;return o.a.createElement("button",{type:"searchButton"===n?"submit":"button",className:"".concat(O.a.button," ").concat(function(){var e;switch(n){case"searchOptionsButton":e=O.a.searchOptionsButton;break;case"sortOptionsButton":e=O.a.sortOptionsButton;break;case"searchButton":e=O.a.searchButton;break;case"closeModalButton":e=O.a.closeModalButton;break;case"homeButton":e=O.a.homeButton;break;default:e=O.a.button}return e}()," ").concat(r?O.a.activeButton:""),onClick:a},t)},f=a(15),h=a.n(f),b=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e})),a=t.inputValue,n=t.searchOption,r=function(t){e({type:"CHANGE_STATE_SEARCH_OPTION",payload:t})};return o.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e({type:"RESET_STATE_SORT_OPTION"}),e({type:"GET_MOVIE_REQUEST",payload:{inputValue:a,searchOption:n}})},className:h.a.container},o.a.createElement("input",{onChange:function(t){e({type:"SET_INPUT_VALUE",payload:t.target.value})},className:h.a.input,placeholder:"Find your movie",value:a}),o.a.createElement("div",{className:h.a.buttonPanel},o.a.createElement("div",{className:h.a.searchOptions},o.a.createElement("span",null,"Search by"),o.a.createElement("div",{className:h.a.buttonWrapper},o.a.createElement(y,{onClick:function(){return r("title")},typeButton:"searchOptionsButton",isActive:"title"===n},"Title"),o.a.createElement(y,{onClick:function(){return r("genres")},typeButton:"searchOptionsButton",isActive:"genres"===n},"Genre"))),o.a.createElement(y,{typeButton:"searchButton"},"Search")))},T=a(27),M=a.n(T),g=function(){return o.a.createElement("footer",{className:M.a.container},o.a.createElement("div",{className:M.a.logo},"Netflixroulette"))},S=a(11),B=a.n(S),N=function(){var e=Object(l.h)().id,t=Object(s.b)();Object(n.useEffect)((function(){t({type:"GET_MOVIE_BY_ID_REQUEST",payload:e})}),[t,e]);var a=Object(s.c)((function(e){return e.dataMovieById})),r=Object(l.g)();if(null!==a&&0===Object.keys(a).length)return o.a.createElement(l.a,{to:{pathname:"/not-found"}});var c=a||{},i=c.title,u=c.genres,p=void 0===u?[]:u,_=c.overview,d=c.poster_path,m=c.vote_average,E=c.budget;return o.a.createElement("div",{className:B.a.container},o.a.createElement("div",{className:B.a.modalWindow,style:{backgroundImage:"url(".concat(d,")")}},o.a.createElement("div",{className:B.a.modalWindowContainer},o.a.createElement("div",{className:B.a.movieTitle},i,o.a.createElement(y,{onClick:function(){t({type:"RESET_DATA_MOVIE_MODAL"}),r.goBack()},typeButton:"closeModalButton"},"\xd7")),o.a.createElement("span",{className:B.a.movieGenres},p.join(" & ")),o.a.createElement("span",{className:B.a.movieOverview},_),o.a.createElement("span",{className:B.a.movieBudget},"Budget: ".concat(E,"$")),o.a.createElement("span",{className:B.a.movieRating},"Rating: ".concat(m)))))},j=a(18),I=a.n(j),C=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e})),a=t.inputValue,n=t.searchOption,r=t.sortOption,c=t.totalMovies,i=function(t){e({type:"CHANGE_STATE_SORT_OPTION",payload:t}),e({type:"GET_MOVIE_REQUEST",payload:{inputValue:a,searchOption:n,sortOption:t}})};return o.a.createElement("div",{className:I.a.container},o.a.createElement("div",{className:I.a.movieCounter},"".concat(c," movies found")),o.a.createElement("div",{className:I.a.sortOptions},o.a.createElement("span",null,"Sort by:"),o.a.createElement("div",{className:I.a.buttonWrapper},o.a.createElement(y,{onClick:function(){return i("release_date")},typeButton:"sortOptionsButton",isActive:"release_date"===r},"Release date"),o.a.createElement(y,{onClick:function(){return i("vote_average")},typeButton:"sortOptionsButton",isActive:"vote_average"===r},"Rating"))))},w=a(22),A=a.n(w),V=function(){return o.a.createElement("div",{className:A.a.container},o.a.createElement("header",{className:A.a.header},o.a.createElement("div",{className:A.a.logo},"Netflixroulette"),o.a.createElement("span",null,"Find your movie"),o.a.createElement(b,null)),o.a.createElement(C,null),o.a.createElement(E,null),o.a.createElement(g,null),o.a.createElement(l.b,{path:"/:id",component:N}))},R=a(19),D=a.n(R),k=function(){return Object(s.b)()({type:"RESET_DATA_MOVIE_MODAL"}),o.a.createElement("div",{className:D.a.container},o.a.createElement("div",{className:D.a.errorWrapper},o.a.createElement("span",{className:D.a.codeError},"404"),o.a.createElement("span",{className:D.a.textError},"Page not found"),o.a.createElement(i.b,{to:"/"},o.a.createElement(y,{typeButton:"homeButton"},"Home"))))};function U(){return o.a.createElement("div",{className:"App"},o.a.createElement(l.d,null,o.a.createElement(l.b,{path:"/not-found",component:k}),o.a.createElement(l.b,{path:"/",component:V})))}var G=a(12),W=a(32),x=function(e){var t=e.inputValue,a=e.searchOption,n=e.sortOption,o=e.offsetMovie,r=e.limitMovie;return fetch("https://reactjs-cdp.herokuapp.com/movies?sortBy=".concat(n,"&sortOrder=desc&search=").concat(t,"&searchBy=").concat(a,"&offset=").concat(o,"&limit=").concat(r)).then((function(e){return e.json()}))},P=a(28),H=a(3),L={inputValue:"",searchOption:"title",sortOption:"",dataMovies:[],totalMovies:0,loading:!1,error:null,dataMovieById:null,offsetMovie:0,limitMovie:12},Q=Object(G.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INPUT_VALUE":return Object(H.a)(Object(H.a)({},e),{},{inputValue:t.payload});case"CHANGE_STATE_SEARCH_OPTION":return Object(H.a)(Object(H.a)({},e),{},{searchOption:t.payload});case"CHANGE_STATE_SORT_OPTION":return Object(H.a)(Object(H.a)({},e),{},{sortOption:t.payload,offsetMovie:0});case"RESET_STATE_SORT_OPTION":return Object(H.a)(Object(H.a)({},e),{},{sortOption:"",offsetMovie:0});case"GET_MOVIE_SUCCESS":return Object(H.a)(Object(H.a)({},e),{},{dataMovies:t.payload.dataMovies,totalMovies:t.payload.totalMovies,loading:!1});case"GET_MOVIE_FAILURE":return Object(H.a)(Object(H.a)({},e),{},{error:t.payload,loading:!1});case"GET_MOVIE_BY_ID_REQUEST":return Object(H.a)(Object(H.a)({},e),{},{loading:!0});case"GET_MOVIE_BY_ID_SUCCESS":return Object(H.a)(Object(H.a)({},e),{},{dataMovieById:t.payload,loading:!1});case"ADD_MOVIE_TO_STORE_SUCCESS":return Object(H.a)(Object(H.a)({},e),{},{dataMovies:[].concat(Object(P.a)(e.dataMovies),Object(P.a)(t.payload.dataMovies)),loading:!1,offsetMovie:t.payload.offsetMovie});case"RESET_DATA_MOVIE_MODAL":return Object(H.a)(Object(H.a)({},e),{},{dataMovieById:null});default:return e}}),Object(W.composeWithDevTools)(Object(G.applyMiddleware)((function(e){return function(t){return function(a){var n=a.payload&&a.payload.inputValue,o=a.payload&&a.payload.searchOption,r=a.payload&&a.payload.sortOption,c=e.getState(),s=c.offsetMovie,i=c.limitMovie;return"GET_MOVIE_REQUEST"===a.type&&x({inputValue:n,searchOption:o,sortOption:r,offsetMovie:s,limitMovie:i}).then((function(t){var a=t.data,n=t.total;e.dispatch({type:"GET_MOVIE_SUCCESS",payload:{dataMovies:a,totalMovies:n}})})).catch((function(t){e.dispatch({type:"GET_MOVIE_FAILURE",payload:t.message})})),t(a)}}})),Object(G.applyMiddleware)((function(e){return function(t){return function(a){var n=a.payload&&a.payload.inputValue,o=a.payload&&a.payload.searchOption,r=a.payload&&a.payload.sortOption,c=e.getState(),s=c.offsetMovie,i=c.limitMovie;return"ADD_MOVIE_TO_STORE_REQUEST"===a.type&&x({inputValue:n,searchOption:o,sortOption:r,offsetMovie:s+=i,limitMovie:i}).then((function(t){var a=t.data;e.dispatch({type:"ADD_MOVIE_TO_STORE_SUCCESS",payload:{dataMovies:a,offsetMovie:s}})})).catch((function(t){e.dispatch({type:"GET_MOVIE_FAILURE",payload:t.message})})),t(a)}}})),Object(G.applyMiddleware)((function(e){return function(t){return function(a){var n,o=a.payload;return"GET_MOVIE_BY_ID_REQUEST"===a.type&&(n=o,fetch("https://reactjs-cdp.herokuapp.com/movies/".concat(n)).then((function(e){return e.json()}))).then((function(t){e.dispatch({type:"GET_MOVIE_BY_ID_SUCCESS",payload:t})})).catch((function(t){e.dispatch({type:"GET_MOVIE_FAILURE",payload:t.message})})),t(a)}}}))));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(s.a,{store:Q},o.a.createElement(i.a,null,o.a.createElement(U,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[33,1,2]]]);
//# sourceMappingURL=main.31a78416.chunk.js.map