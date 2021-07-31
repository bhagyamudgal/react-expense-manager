(this["webpackJsonpreact-expense-manager"]=this["webpackJsonpreact-expense-manager"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(8),s=n.n(c),l=(n(14),n(5)),i=n(2),r=n(7),j=(n(15),n(0)),u=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],s=n[1],l=Object(a.useState)(""),r=Object(i.a)(l,2),u=r[0],o=r[1],b=Object(a.useState)(""),d=Object(i.a)(b,2),x=d[0],O=d[1];return Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:c,amount:u,date:new Date(x)};e.onSaveExpenseData(n),s(""),o(""),O("")},children:[Object(j.jsxs)("div",{className:"new-expense__controls",children:[Object(j.jsxs)("div",{className:"new-expense__control",children:[Object(j.jsx)("label",{children:"Title"}),Object(j.jsx)("input",{type:"text",value:c,onChange:function(e){s(e.target.value)}})]}),Object(j.jsxs)("div",{className:"new-expense__control",children:[Object(j.jsx)("label",{children:"Amount"}),Object(j.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:u,onChange:function(e){o(e.target.value)}})]}),Object(j.jsxs)("div",{className:"new-expense__control",children:[Object(j.jsx)("label",{children:"Date"}),Object(j.jsx)("input",{type:"date",min:"2019-01-01",max:"2022-12-31",value:x,onChange:function(e){O(e.target.value)}})]})]}),Object(j.jsxs)("div",{className:"new-expense__actions",children:[Object(j.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(j.jsx)("button",{type:"submit",children:"Add Expense"})]})]})},o=(n(17),function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],s=n[1];return Object(j.jsxs)("div",{className:"new-expense",children:[!c&&Object(j.jsx)("button",{onClick:function(){s(!0)},children:"Add New Expense"}),c&&Object(j.jsx)(u,{onSaveExpenseData:function(t){var n=Object(r.a)(Object(r.a)({},t),{},{id:(Math.random()+1).toString(36).substring(7)});e.onAddExpense(n),s(!1)},onCancel:function(){s(!1)}})]})}),b=(n(18),function(e){var t="card "+e.className;return Object(j.jsx)("div",{className:t,children:e.children})}),d=(n(19),function(e){return Object(j.jsx)("div",{className:"expenses-filter",children:Object(j.jsxs)("div",{className:"expenses-filter__control",children:[Object(j.jsx)("label",{children:"Filter by year"}),Object(j.jsxs)("select",{value:e.selected,onChange:function(t){e.onChangeFilter(t.target.value)},children:[Object(j.jsx)("option",{value:"2023",children:"2023"}),Object(j.jsx)("option",{value:"2022",children:"2022"}),Object(j.jsx)("option",{value:"2021",children:"2021"}),Object(j.jsx)("option",{value:"2020",children:"2020"}),Object(j.jsx)("option",{value:"2019",children:"2019"})]})]})})}),x=(n(20),function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(j.jsxs)("div",{className:"expense-date",children:[Object(j.jsx)("div",{className:"expense-date__month",children:t}),Object(j.jsx)("div",{className:"expense-date__year",children:a}),Object(j.jsx)("div",{className:"expense-date__day",children:n})]})}),O=(n(21),function(e){return Object(j.jsx)("li",{children:Object(j.jsxs)(b,{className:"expense-item",children:[Object(j.jsx)(x,{date:e.date}),Object(j.jsxs)("div",{className:"expense-item__description",children:[Object(j.jsx)("h2",{children:e.title}),Object(j.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})]})})}),v=(n(22),function(e){return 0===e.items.length?Object(j.jsx)("h2",{className:"expenses-list__fallback",children:"Found no expenses."}):Object(j.jsx)("ul",{className:"expenses-list",children:e.items.map((function(e){return Object(j.jsx)(O,{title:e.title,amount:e.amount,date:e.date},e.id)}))})}),h=n(9),m=(n(23),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(j.jsxs)("div",{className:"chart-bar",children:[Object(j.jsx)("div",{className:"chart-bar__inner",children:Object(j.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(j.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),p=(n(24),function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(l.a)(t));return Object(j.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(j.jsx)(m,{value:e.value,maxValue:n,label:e.label},e.label)}))})}),f=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(h.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(s){a.e(s)}finally{a.f()}return Object(j.jsx)(p,{dataPoints:n})},g=(n(25),function(e){var t=Object(a.useState)("2021"),n=Object(i.a)(t,2),c=n[0],s=n[1],l=e.items.filter((function(e){return e.date.getFullYear().toString()===c}));return Object(j.jsx)("div",{children:Object(j.jsxs)(b,{className:"expenses",children:[Object(j.jsx)(d,{selected:c,onChangeFilter:function(e){s(e)}}),Object(j.jsx)(f,{expenses:l}),Object(j.jsx)(v,{items:l})]})})}),N=[],_=function(){null===localStorage.getItem("expenses")&&localStorage.setItem("expenses",JSON.stringify(N));var e=JSON.parse(localStorage.getItem("expenses"));e.map((function(e){return e.date=new Date(e.date)}));var t=Object(a.useState)(e),n=Object(i.a)(t,2),c=n[0],s=n[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)(o,{onAddExpense:function(t){s((function(e){return[t].concat(Object(l.a)(e))})),e.push(t),localStorage.setItem("expenses",JSON.stringify(e))}}),Object(j.jsx)(g,{items:c})]})};s.a.render(Object(j.jsx)(_,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.f0cace49.chunk.js.map