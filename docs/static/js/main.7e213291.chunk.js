(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(9),c=n.n(r),i=n(2),s=n(10),u=n(0),o=function(t){var e=t.setCategorias,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],o=r[1];return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),c.trim().length>2&&(e((function(t){return[c].concat(Object(s.a)(t))})),o(""))},children:Object(u.jsx)("input",{type:"text",onChange:function(t){o(t.target.value)},value:c})})},j=n(8),d=(n(16),n(3)),p=n.n(d),b=n(6),l=function(){var t=Object(b.a)(p.a.mark((function t(e){var n,a,r,c,i,s;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=encodeURI(e),a="https://api.giphy.com/v1/gifs/search?q=".concat(n,"&limit=").concat(10,"&api_key=").concat("PJaS1HplSyfVX8LrB11GYA4G9FMaN0Nd"),t.next=4,fetch(a);case 4:return r=t.sent,t.next=7,r.json();case 7:return c=t.sent,i=c.data,s=i.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",s);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(t){t.id;var e=t.title,n=t.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__bounceInLeft",children:[Object(u.jsx)("img",{src:n,alt:e}),Object(u.jsx)("h5",{children:e})]})},O=function(t){var e=t.categoria,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),r=n[0],c=n[1];return Object(a.useEffect)(Object(b.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,l(t);case 3:e.t1=e.sent,e.t2={data:e.t1,loading:!1},(0,e.t0)(e.t2);case 6:case"end":return e.stop()}}),e)}))),[t]),r}(e),r=n.data,c=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:e}),c&&Object(u.jsx)("p",{children:"Cargando.."}),Object(u.jsx)("div",{className:"card-grid",children:r.map((function(t){return Object(a.createElement)(f,Object(j.a)(Object(j.a)({},t),{},{key:t.id}))}))})]})};var h=function(t){var e=Object(a.useState)(["One Punch"]),n=Object(i.a)(e,2),r=n[0],c=n[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"Gif Expert App"}),Object(u.jsx)(o,{setCategorias:c}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:r.map((function(t){return Object(u.jsx)(O,{categoria:t},t)}))})]})};n(18);c.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.7e213291.chunk.js.map