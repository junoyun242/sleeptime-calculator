(this.webpackJsonpsleeptime=this.webpackJsonpsleeptime||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var s=c(1),l=c.n(s),n=c(4),a=c.n(n),r=c(0);var i=function(){return Object(r.jsx)("header",{className:"border-b-2 border-gray-300 flex flex-col justify-center items-center py-5 bg-gray-300",onClick:function(){return window.location.reload()},children:Object(r.jsx)("h1",{className:"text-2xl",children:"Sleeptime Calculator"})})},u=c(2),m=c(5),o=c.n(m);var b=function(){var e=o()(),t=Object(s.useState)(e.format("YYYY-MM-DD")),c=Object(u.a)(t,2),l=c[0],n=c[1],a=Object(s.useState)(e.format("hh:mm")),i=Object(u.a)(a,2),m=i[0],b=i[1],j=Object(s.useState)(0),d=Object(u.a)(j,2),x=d[0],h=d[1],f=Object(s.useState)(0),p=Object(u.a)(f,2),O=p[0],y=p[1],v=Object(s.useState)(e.format("YYYY-MM-DD hh:mm A")),g=Object(u.a)(v,2),N=g[0],w=g[1],k=Object(s.useState)(e.format("e")),Y=Object(u.a)(k,2),S=Y[0],C=Y[1];return Object(s.useEffect)((function(){switch(e.set({year:Number(null===l||void 0===l?void 0:l.slice(0,4)),month:Number(null===l||void 0===l?void 0:l.slice(5,7))-1,date:Number(null===l||void 0===l?void 0:l.slice(8,10)),hour:Number(null===m||void 0===m?void 0:m.slice(0,2)),minute:Number(null===m||void 0===m?void 0:m.slice(3))}),e.add({hours:x,minute:O}),console.log(null===m||void 0===m?void 0:m.slice(3)),w(e.format("YYYY-MM-DD hh:mm A")),Number(e.format("e"))){case 0:C("\uc77c");break;case 1:C("\uc6d4");break;case 2:C("\ud654");break;case 3:C("\uc218");break;case 4:C("\ubaa9");break;case 5:C("\uae08");break;case 6:C("\ud1a0")}console.log(N)}),[l,m,x,O]),Object(r.jsxs)("main",{className:"py-6 flex flex-col items-center bg-gray-600 h-screen md:flex-row md:justify-evenly md:items-start",children:[Object(r.jsxs)("div",{className:"flex flex-col justify-center items-center bg-blue-500 text-gray-300 w-4/5 py-3 px-3 mb-8 md:w-2/5 md:mb-0",children:[Object(r.jsx)("h3",{className:"text-lg my-2",children:"When will you sleep?"}),Object(r.jsx)("input",{type:"datetime-local",className:"p-0.5 my-2 text-black",onChange:function(e){return function(e){n(e.slice(0,10)),b(e.slice(11))}(e.target.value)}}),Object(r.jsx)("h3",{className:"text-lg my-2",children:"How long will you sleep?"}),Object(r.jsxs)("div",{className:"flex justify-center items-center my-2",children:[Object(r.jsx)("input",{type:"number",className:"p-1 w-1/3 text-black",onChange:function(e){return h(Number(e.target.value))}}),Object(r.jsx)("p",{className:"pl-1 pr-3",children:"\uc2dc\uac04"}),Object(r.jsx)("input",{type:"number",className:"p-1 w-1/3 text-black",max:"59",onChange:function(e){return y(Number(e.target.value))}}),Object(r.jsx)("p",{className:"pl-1 pr-3",children:"\ubd84"})]})]}),Object(r.jsxs)("div",{className:"flex flex-col justify-center items-center bg-purple-300 w-4/5 py-3 md:w-2/5",children:[Object(r.jsx)("h3",{className:"text-lg my-2",children:"You will wake up at"}),Object(r.jsxs)("div",{className:"flex justify-center items-center my-2",children:[Object(r.jsx)("p",{className:"pr-2",children:N}),Object(r.jsx)("p",{children:S})]})]})]})};c(12);var j=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(i,{}),Object(r.jsx)(b,{})]})},d=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(t){var c=t.getCLS,s=t.getFID,l=t.getFCP,n=t.getLCP,a=t.getTTFB;c(e),s(e),l(e),n(e),a(e)}))};a.a.render(Object(r.jsx)(l.a.StrictMode,{children:Object(r.jsx)(j,{})}),document.getElementById("root")),d()}},[[13,1,2]]]);
//# sourceMappingURL=main.ac559cf7.chunk.js.map