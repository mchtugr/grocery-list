(this["webpackJsonpgrocery-list"]=this["webpackJsonpgrocery-list"]||[]).push([[0],{32:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(8),i=c.n(a),r=c(18),s=c(7),l=c(35),d=c(20),o=c(38),u=c(36),j=c(17),m=c(4),b=function(e){var t=e.listItem,c=e.handleEdit,n=e.handleDelete;return Object(m.jsxs)(l.a,{className:"border rounded list-item-container",children:[Object(m.jsx)(d.a,{md:10,xs:9,id:t.id,className:"text-capitalize list-item",onClick:function(){return function(e){var t=document.getElementById(e);t.classList.contains("checked")?t.classList.remove("checked"):t.classList.add("checked")}(t.id)},children:t.text}),Object(m.jsxs)(d.a,{md:2,xs:3,className:"icon-container align-middle",children:[Object(m.jsx)(j.a,{size:"1.2rem",onClick:function(){return c(t.id)},className:"icon edit-icon"}),Object(m.jsx)(j.b,{size:"1.2rem",onClick:function(){return n(t.id)},className:"icon delete-icon"})]})]})},x=function(e){var t=e.list,c=e.handleEdit,n=e.handleDelete,a=e.handleClear;return Object(m.jsxs)("div",{children:[t.map((function(e){return Object(m.jsx)(b,{listItem:e,handleEdit:c,handleDelete:n},e.id)})),t.length>0&&Object(m.jsx)("div",{className:"btn-container",children:Object(m.jsx)(u.a,{variant:"custom",onClick:a,className:" mt-2",children:"Clear All"})})]})},O=c(37),f=function(e){var t=e.variant,c=e.text,a=e.removeAlert;return Object(n.useEffect)((function(){var e=setTimeout((function(){a()}),1500);return function(){clearTimeout(e)}}),[a]),Object(m.jsx)(O.a,{variant:t,className:"text-center p-1",children:c})},h=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(function(){var e=localStorage.getItem("groceryList");return e?JSON.parse(e):[]}()),j=Object(s.a)(i,2),b=j[0],O=j[1],h=Object(n.useState)(!1),v=Object(s.a)(h,2),g=v[0],p=v[1],N=Object(n.useState)({}),y=Object(s.a)(N,2),S=y[0],k=y[1],C=Object(n.useState)({variant:"",text:""}),I=Object(s.a)(C,2),E=I[0],L=I[1],D=Object(n.useState)(!0),w=Object(s.a)(D,2),A=w[0],J=w[1],z=function(e,t){L({variant:e,text:t}),J(!0)};return Object(n.useEffect)((function(){localStorage.setItem("groceryList",JSON.stringify(b))}),[b]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(l.a,{className:"justify-content-center",children:Object(m.jsx)("h1",{className:"text-center m-3",children:"Grocery List"})}),Object(m.jsx)(l.a,{className:"justify-content-center",children:Object(m.jsxs)(d.a,{xl:5,lg:6,md:8,xs:10,className:"app-wrapper p-4 rounded",children:[A&&Object(m.jsx)(f,{variant:E.variant,text:E.text,removeAlert:function(){J(!1)}}),Object(m.jsx)(o.a,{onSubmit:function(e){if(e.preventDefault(),c)if(g&&c){p(!1);var t=b.indexOf(S),n=Object(r.a)(b);n.splice(t,1,{id:S.id,text:c}),O(n),a(""),z("info","Item updated")}else{var i={id:"id".concat((new Date).getTime()),text:c};O([].concat(Object(r.a)(b),[i])),a(""),z("success","Item added")}},children:Object(m.jsxs)(l.a,{className:"center mb-3",children:[Object(m.jsx)(d.a,{xs:8,children:Object(m.jsx)(o.a.Control,{controlId:"query",type:"text",placeholder:"Milk",value:c,onChange:function(e){return a(e.target.value)}})}),Object(m.jsx)(d.a,{xs:3,className:"center",children:Object(m.jsx)(u.a,{variant:"custom",type:"submit",children:g?"Edit":"Add"})})]})}),Object(m.jsx)(x,{list:b,handleEdit:function(e){p(!0);var t=b.find((function(t){return t.id===e}));k(t),a(t.text)},handleDelete:function(e){var t=b.filter((function(t){return t.id!==e}));O(t),a(""),z("danger","Item deleted")},handleClear:function(){localStorage.removeItem("groceryList"),O([]),a(""),z("danger","Cleared all")}})]})})]})};c(32);i.a.render(Object(m.jsx)(h,{}),document.querySelector("#root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.cd849fc9.chunk.js.map