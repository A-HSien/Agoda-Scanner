(this["webpackJsonpagoda-scanner"]=this["webpackJsonpagoda-scanner"]||[]).push([[0],{26:function(e,n,t){e.exports=t(35)},31:function(e,n,t){},34:function(e,n,t){},35:function(e,n,t){"use strict";t.r(n);var a=t(3),c=t.n(a),r=t(23),o=t.n(r),s=(t(31),t(11)),i=t.n(s),l=t(9),u=t(15),b=t(12),m=t(25),h=t(24),d=t.n(h),p=(t(34),t(40)),g=t(39),v=t(21),f=t(38),y={isEnabled:!0,scanSpeed:5e3,city:4951,scannerNumber:-1},E=Object(b.a)({},y);function O(){if(!chrome.storage)return Object(p.a)(y);var e=chrome.storage.sync.get;return Object(g.a)(e).bind(chrome.storage.sync)("settings").pipe(Object(v.a)((function(e){var n=e.settings;return n?(n.scanSpeed=Number(n.scanSpeed),n):{}})))}function j(e){if(!chrome.storage)return Object(p.a)(e);var n=chrome.storage.sync.set;return Object(g.a)(n).bind(chrome.storage.sync)(Object(l.a)({},"settings",e)).pipe(Object(f.a)((function(){return O()})))}var k=!1,w=function(){var e=Object(a.useState)(Object(b.a)({},E,{checkIn:d()().add(1,"day").format("YYYY-MM-DD")})),n=Object(m.a)(e,2),t=n[0],r=n[1];k||(k=!0,O().subscribe((function(e){var n=Object(b.a)({},t,{},e);r(n)})));var o=function(){var e=Object(u.a)(i.a.mark((function e(n){var a,c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=n.target,c="checkbox"===a.type?a.checked:a.value,o=Object(b.a)({},t,Object(l.a)({},a.name,c)),r(o),j(o).subscribe();case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"app"},c.a.createElement("label",{className:"title"},"Agoda Scanner"),c.a.createElement("hr",null),c.a.createElement("div",{className:"grid"},c.a.createElement("label",null,"\u958b\u555f"),c.a.createElement("input",{type:"checkbox",name:"isEnabled",checked:t.isEnabled,onChange:o}),c.a.createElement("label",null,"\u6383\u63cf\u6301\u7e8c\u6642\u9593"),c.a.createElement("input",{type:"number",name:"scanSpeed",value:t.scanSpeed,onChange:o}),c.a.createElement("label",null,"\u57ce\u5e02"),c.a.createElement("input",{type:"number",name:"city",value:t.city,onChange:o}),c.a.createElement("label",null,"\u5165\u4f4f\u65e5"),c.a.createElement("input",{type:"text",name:"checkIn",value:t.checkIn,onChange:o})),c.a.createElement("button",{type:"button",disabled:!t.isEnabled,onClick:function(){var e=t.city,n=t.checkIn,a=E.scannerNumber=Date.now(),c="https://www.agoda.com/zh-tw/search?scannerNumber=".concat(a,"&city=").concat(e,"&checkIn=").concat(n);console.log("go to "+c),chrome.tabs&&j(E).subscribe((function(e){console.log(e),chrome.tabs.update({url:c})}))}},"GO!"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.08e39b55.chunk.js.map