(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{284:function(e,t,a){e.exports=a(547)},290:function(e,t,a){},545:function(e,t,a){},546:function(e,t,a){},547:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),o=a.n(c),l=a(14),i=a.n(l),s=a(20),u=a(16),m=(a(290),a(6)),f=a(551),p=a(552),d=a(228),h=[],E=[],y=function(e){var t=Object(n.useState)(!0),a=Object(u.a)(t,2),r=a[0],c=a[1];function o(){return(o=Object(s.a)(i.a.mark((function t(){var a,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return a=t.sent,t.next=5,a.json();case 5:n=t.sent,h=[{Male:n.Gender.Male,Female:n.Gender.Female,Unknown:n.Gender.Unknown}],c(!1);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){o.apply(this,arguments)}()}),[]),{loading:r}},g=function(e){var t=Object(n.useState)(!0),a=Object(u.a)(t,2),r=a[0],c=a[1];function o(){return(o=Object(s.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return a=t.sent,t.next=5,a.json();case 5:t.sent.Data.map((function(e){E.push({"\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48":e.Date,"\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d\u0e40\u0e1e\u0e34\u0e48\u0e21":e.NewConfirmed,"\u0e23\u0e31\u0e01\u0e29\u0e32\u0e2b\u0e32\u0e22\u0e40\u0e1e\u0e34\u0e48\u0e21":e.NewRecovered,"\u0e40\u0e2a\u0e35\u0e22\u0e0a\u0e35\u0e27\u0e34\u0e15\u0e40\u0e1e\u0e34\u0e48\u0e21":e.NewDeaths,"\u0e01\u0e33\u0e25\u0e31\u0e07\u0e23\u0e31\u0e01\u0e29\u0e32\u0e40\u0e1e\u0e34\u0e48\u0e21":e.NewHospitalized})})),c(!1);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){o.apply(this,arguments)}()}),[]),{loadingStat:r}};var v=function(){var e=y("https://covid19.th-stat.com/api/open/cases/sum").loading,t=g("https://covid19.th-stat.com/api/open/timeline").loadingStat;return e||t?r.a.createElement("center",null,r.a.createElement(f.a,{justify:"center"},r.a.createElement(p.a,{span:12},r.a.createElement(d.a,{tip:"Loading chart . . . . "})),r.a.createElement(p.a,{span:12},r.a.createElement(d.a,{tip:"Loading chart . . . . "})))):r.a.createElement("div",null,r.a.createElement(f.a,{justify:"center"},r.a.createElement(p.a,{span:12},r.a.createElement("h2",null,"\u0e41\u0e22\u0e01\u0e1c\u0e39\u0e49\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d\u0e15\u0e32\u0e21\u0e40\u0e1e\u0e28"),r.a.createElement(m.b,{width:500,height:300,data:h,margin:{top:5,right:30,left:20,bottom:5}},r.a.createElement(m.c,{strokeDasharray:"3 3"}),r.a.createElement(m.h,{dataKey:"name"}),r.a.createElement(m.i,null),r.a.createElement(m.g,null),r.a.createElement(m.d,null),r.a.createElement(m.a,{dataKey:"Male",fill:"#8884d8"}),r.a.createElement(m.a,{dataKey:"Female",fill:"#82ca9d"}),r.a.createElement(m.a,{dataKey:"Unknown",fill:"#82ca9d"}))),r.a.createElement(p.a,{span:12},r.a.createElement("h2",null,"\u0e2d\u0e31\u0e15\u0e23\u0e32\u0e01\u0e32\u0e23\u0e40\u0e1e\u0e34\u0e48\u0e21"),r.a.createElement(m.f,{width:600,height:300,data:E},r.a.createElement(m.e,{type:"monotone",dataKey:"\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d\u0e40\u0e1e\u0e34\u0e48\u0e21",stroke:"#f0dc26"}),r.a.createElement(m.e,{type:"monotone",dataKey:"\u0e23\u0e31\u0e01\u0e29\u0e32\u0e2b\u0e32\u0e22\u0e40\u0e1e\u0e34\u0e48\u0e21",stroke:"green"}),r.a.createElement(m.e,{type:"monotone",dataKey:"\u0e40\u0e2a\u0e35\u0e22\u0e0a\u0e35\u0e27\u0e34\u0e15\u0e40\u0e1e\u0e34\u0e48\u0e21",stroke:"red"}),r.a.createElement(m.e,{type:"monotone",dataKey:"\u0e01\u0e33\u0e25\u0e31\u0e07\u0e23\u0e31\u0e01\u0e29\u0e32\u0e40\u0e1e\u0e34\u0e48\u0e21",stroke:"blue"}),r.a.createElement(m.c,{stroke:"#ccc"}),r.a.createElement(m.h,{dataKey:"\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48"}),r.a.createElement(m.i,null),r.a.createElement(m.g,null)))))},x=a(550),b=function(e){var t=Object(n.useState)(null),a=Object(u.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(!0),l=Object(u.a)(o,2),m=l[0],f=l[1];function p(){return(p=Object(s.a)(i.a.mark((function t(){var a,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return a=t.sent,t.next=5,a.json();case 5:n=t.sent,c(n),f(!1);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){p.apply(this,arguments)}()}),[]),{loading:m,datas:r}};var j,O,w,k,S=function(){var e=b("https://api.covid19api.com/summary"),t=e.loading,a=e.datas;return t?r.a.createElement("center",null,r.a.createElement(d.a,{style:{marginTop:"100px"},tip:"Loading Data..."})):r.a.createElement("div",null,t?r.a.createElement(x.a,{loading:t}):r.a.createElement(x.a,{columns:[{title:"\u0e0a\u0e37\u0e48\u0e2d\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28",dataIndex:"Country",key:"Country"},{title:"\u0e1c\u0e39\u0e49\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e48\u0e2d",dataIndex:"TotalConfirmed",key:"TotalConfirmed",defaultSortOrder:"descend",sorter:function(e,t){return e.TotalConfirmed-t.TotalConfirmed}},{title:"\u0e2b\u0e32\u0e22\u0e41\u0e25\u0e49\u0e27",dataIndex:"TotalRecovered",key:"TotalRecovered",defaultSortOrder:"descend",sorter:function(e,t){return e.TotalRecovered-t.TotalRecovered}},{title:"\u0e40\u0e2a\u0e35\u0e22\u0e0a\u0e35\u0e27\u0e34\u0e15",dataIndex:"TotalDeaths",key:"TotalDeaths",defaultSortOrder:"descend",sorter:function(e,t){return e.TotalDeaths-t.TotalDeaths}}],dataSource:a.Countries}),r.a.createElement("p",null,console.log(a)))},T=(a(545),function(e){var t=Object(n.useState)(null),a=Object(u.a)(t,1)[0],r=Object(n.useState)(!0),c=Object(u.a)(r,2),o=c[0],l=c[1];function m(){return(m=Object(s.a)(i.a.mark((function t(){var a,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return a=t.sent,t.next=5,a.json();case 5:n=t.sent,j=n.Deaths,O=n.Recovered,w=n.Confirmed,k=n.NewConfirmed,l(!1);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){m.apply(this,arguments)}()})),{loading:o,datas:a}});var C=function(){return T("https://covid19.th-stat.com/api/open/today").loading?r.a.createElement("center",null,r.a.createElement(d.a,{style:{marginTop:"100px"},tip:"Loading Data..."})):r.a.createElement("div",{className:"site-card-wrapper"},r.a.createElement(f.a,{gutter:8,align:"middle",style:{textAlign:"center"},justify:"center"},r.a.createElement(p.a,{span:8},r.a.createElement("div",{className:"card"},r.a.createElement("h4",{style:{color:"#fff",fontSize:"24px",fontWeight:600}},"\u0e1c\u0e39\u0e49\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d"),r.a.createElement("h1",{style:{color:"#fff",fontSize:"140px",fontWeight:600,marginTop:"50px"}},w," "),r.a.createElement("span",{style:{fontSize:"24px",color:"#fff",marginTop:"0px"}},"( \u0e40\u0e1e\u0e34\u0e48\u0e21\u0e21\u0e32 ",k," \u0e04\u0e19 )"))),r.a.createElement(p.a,{span:8,style:{marginLeft:"30px"}},r.a.createElement(p.a,{span:16},r.a.createElement("div",{className:"card2"},r.a.createElement("h2",{style:{color:"#fff",fontSize:"24px",fontWeight:600}}," ","\u0e1c\u0e39\u0e49\u0e23\u0e31\u0e01\u0e29\u0e32\u0e2b\u0e32\u0e22"),r.a.createElement("h1",{style:{color:"#fff",fontSize:"72px",fontWeight:600,marginTop:"-10px"}},O,r.a.createElement("span",{style:{fontSize:"18px",color:"#fff",marginTop:"0px"}})))),r.a.createElement(p.a,{span:16,style:{marginTop:"10px"}},r.a.createElement("div",{className:"card3"},r.a.createElement("h2",{style:{color:"#fff",fontSize:"24px",fontWeight:600}}," ","\u0e1c\u0e39\u0e49\u0e40\u0e2a\u0e35\u0e22\u0e0a\u0e35\u0e27\u0e34\u0e15"),r.a.createElement("h1",{style:{color:"#fff",fontSize:"72px",fontWeight:600,marginTop:"-10px"}},j))))))},D=[],K=[],z=function(e){var t=Object(n.useState)(null),a=Object(u.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(!0),l=Object(u.a)(o,2),m=l[0],f=l[1];function p(){return(p=Object(s.a)(i.a.mark((function t(){var a,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return a=t.sent,t.next=5,a.json();case 5:(n=t.sent).Data.map((function(e){D.push({"\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48":e.Date,"\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d":e.Confirmed,"\u0e23\u0e31\u0e01\u0e29\u0e32\u0e2b\u0e32\u0e22\u0e41\u0e25\u0e49\u0e27":e.Recovered,"\u0e40\u0e2a\u0e35\u0e22\u0e0a\u0e35\u0e27\u0e34\u0e15":e.Deaths,"\u0e01\u0e33\u0e25\u0e31\u0e07\u0e23\u0e31\u0e01\u0e29\u0e32":e.Hospitalized})})),c(n),f(!1);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){p.apply(this,arguments)}()}),[]),{loading:m,datas:r}},W=function(e){var t=Object(n.useState)(null),a=Object(u.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(!0),l=Object(u.a)(o,2),m=l[0],f=l[1];function p(){return(p=Object(s.a)(i.a.mark((function t(){var a,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return a=t.sent,t.next=5,a.json();case 5:(n=t.sent).Countries.map((function(e){K.push({name:e.Country,TotalConfirmed:e.TotalConfirmed})})),c(n),f(!1);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){p.apply(this,arguments)}()}),[]),{loadingw:m,dataw:r}};var N,R=function(){var e=z("https://covid19.th-stat.com/api/open/timeline").loading,t=W("https://api.covid19api.com/summary").loadingw;return e||t?r.a.createElement("center",null,r.a.createElement(f.a,{justify:"center"},r.a.createElement(p.a,{span:12},r.a.createElement(d.a,{tip:"Loading chart . . . . "})),r.a.createElement(p.a,{span:12},r.a.createElement(d.a,{tip:"Loading chart . . . . "})))):r.a.createElement("div",null,r.a.createElement(f.a,{justify:"center"},r.a.createElement(p.a,{span:12},r.a.createElement("h2",null,"\u0e1c\u0e39\u0e49\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d\u0e43\u0e19\u0e44\u0e17\u0e22"),r.a.createElement(m.f,{width:600,height:300,data:D},r.a.createElement(m.e,{type:"monotone",dataKey:"\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d",stroke:"#f0dc26"}),r.a.createElement(m.e,{type:"monotone",dataKey:"\u0e23\u0e31\u0e01\u0e29\u0e32\u0e2b\u0e32\u0e22\u0e41\u0e25\u0e49\u0e27",stroke:"green"}),r.a.createElement(m.e,{type:"monotone",dataKey:"\u0e40\u0e2a\u0e35\u0e22\u0e0a\u0e35\u0e27\u0e34\u0e15",stroke:"red"}),r.a.createElement(m.e,{type:"monotone",dataKey:"\u0e01\u0e33\u0e25\u0e31\u0e07\u0e23\u0e31\u0e01\u0e29\u0e32",stroke:"blue"}),r.a.createElement(m.c,{stroke:"#ccc"}),r.a.createElement(m.h,{dataKey:"\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48"}),r.a.createElement(m.i,null),r.a.createElement(m.g,null))),r.a.createElement(p.a,{span:12},r.a.createElement("h2",null,"\u0e1c\u0e39\u0e49\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d\u0e17\u0e31\u0e48\u0e27\u0e42\u0e25\u0e01"),r.a.createElement(m.b,{width:600,height:300,data:K},r.a.createElement(m.a,{type:"monotone",dataKey:"TotalConfirmed",stroke:"#f0dc26"}),r.a.createElement(m.c,{stroke:"#ccc"}),r.a.createElement(m.h,{dataKey:"name"}),r.a.createElement(m.i,null),r.a.createElement(m.g,null)))))},F=a(549),L=F.a.Header,I=F.a.Content,A=F.a.Footer,U=function(e){var t=Object(n.useState)(!0),a=Object(u.a)(t,2),r=a[0],c=a[1];function o(){return(o=Object(s.a)(i.a.mark((function t(){var a,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return a=t.sent,t.next=5,a.json();case 5:n=t.sent,N=n.UpdateDate,c(!1);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){o.apply(this,arguments)}()})),{loading:r}};function G(){return U("https://covid19.th-stat.com/api/open/today"),r.a.createElement("div",null,r.a.createElement(F.a,null,r.a.createElement(L,{style:{height:"600px",backgroundColor:"#353538"}},r.a.createElement("h1",{style:{fontSize:"64px",fontWeight:600,color:"#FF3A81",textAlign:"center",marginTop:"40px",marginBottom:"-20px"}},"COVID-19 \ud83c\uddf9\ud83c\udded"),r.a.createElement("h1",{style:{fontSize:"64px",fontWeight:600,color:"#fff",textAlign:"center",marginTop:"40px"}},"Thailand Realtime Data"),r.a.createElement(C,null)),r.a.createElement(I,{style:{padding:"0 50px"}},r.a.createElement("div",{className:"site-layout-content"},r.a.createElement("h4",{align:"right",style:{color:"#b92246"}},"Update at : ",N),r.a.createElement("h5",{align:"right",style:{color:"green"}},"( Data From covid19api and WHO \u0e41\u0e25\u0e30 \u0e01\u0e23\u0e21\u0e04\u0e27\u0e1a\u0e04\u0e38\u0e21\u0e42\u0e23\u0e04 )"),r.a.createElement(R,null),r.a.createElement("br",null),r.a.createElement(v,null),r.a.createElement("br",null),r.a.createElement(S,null))),r.a.createElement(A,{style:{textAlign:"center"}},"Covid-19 \xa92020 Created by Thanawat Gulati")))}a(546),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[284,1,2]]]);
//# sourceMappingURL=main.f6379391.chunk.js.map