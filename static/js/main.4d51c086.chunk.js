(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var s=n(3),c=n.n(s),o=n(7),r=n(4),a=n(5),l=n(9),d=n(8),i=n(1),u=n.n(i),m=n(6),h=n.n(m),b=(n(14),n(0)),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],f=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={selectedGoods:[]},e.addItem=function(t){e.setState((function(e){return{selectedGoods:[].concat(Object(o.a)(e.selectedGoods),[t])}}))},e.removeItem=function(t){e.setState((function(e){return{selectedGoods:e.selectedGoods.filter((function(e){return e!==t}))}}))},e.showChosenItems=function(){var t=e.state.selectedGoods;return 0===t.length?"No goods selected":1===t.length?"".concat(t," selected"):"".concat(t.slice(0,t.length-1).join(", ")," and ").concat(t[t.length-1]," are selected")},e.removeSelections=function(){return e.setState({selectedGoods:[]}),"No goods selected"},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this,t=this.state.selectedGoods;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("h1",{className:"selectedItemsList",children:[this.showChosenItems(),0!==t.length&&Object(b.jsx)("button",{type:"button",className:"button button--top",onClick:this.removeSelections,children:"Remove all"})]}),Object(b.jsx)("div",{children:j.map((function(n){var s=t.includes(n);return Object(b.jsxs)("div",{className:"itemAndButton",children:[Object(b.jsx)("li",{className:h()("item",{itemSelected:s}),children:n}),Object(b.jsx)("button",{type:"button",className:"button",onClick:s?function(){e.removeItem(n)}:function(){e.addItem(n)},children:s?"Remove":"Add"})]},n)}))})]})}}]),n}(u.a.Component),p=f;c.a.render(Object(b.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.4d51c086.chunk.js.map