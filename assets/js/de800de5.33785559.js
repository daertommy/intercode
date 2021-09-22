"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[37158],{75631:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return u}});var r=n(3289);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,h=m["".concat(p,".").concat(u)]||m[u]||s[u]||i;return n?r.createElement(h,o(o({ref:t},l),{},{components:n})):r.createElement(h,o({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74468:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return l},default:function(){return m}});var r=n(1629),a=n(17322),i=(n(3289),n(75631)),o=["components"],c={id:"ticket",title:"Ticket"},p=void 0,d={unversionedId:"graphql/objects/ticket",id:"graphql/objects/ticket",isDocsHomePage:!1,title:"Ticket",description:"No description",source:"@site/docs/graphql/objects/ticket.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/ticket",permalink:"/docs/graphql/objects/ticket",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/ticket.mdx",tags:[],version:"current",frontMatter:{id:"ticket",title:"Ticket"},sidebar:"sidebar",previous:{title:"TicketType",permalink:"/docs/graphql/objects/ticket-type"},next:{title:"TimespanWithMoneyValue",permalink:"/docs/graphql/objects/timespan-with-money-value"}},l=[{value:"Fields",id:"fields",children:[]}],s={toc:l};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Ticket {\n  charge_id: String\n  convention: Convention!\n  created_at: Date!\n  id: Int!\n  order_entry: OrderEntry\n  payment_amount: Money\n  payment_note: String\n  provided_by_event: Event\n  ticket_type: TicketType!\n  updated_at: Date!\n  user_con_profile: UserConProfile!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"charge_id-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"charge_id")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("span",{class:"badge badge--warning"},"DEPRECATED: Use order_entry for payment fields"),(0,i.kt)("h4",{id:"convention-convention"},(0,i.kt)("inlineCode",{parentName:"h4"},"convention")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/convention"},(0,i.kt)("inlineCode",{parentName:"a"},"Convention!")),")"),(0,i.kt)("h4",{id:"created_at-date"},(0,i.kt)("inlineCode",{parentName:"h4"},"created_at")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/date"},(0,i.kt)("inlineCode",{parentName:"a"},"Date!")),")"),(0,i.kt)("h4",{id:"id-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,i.kt)("h4",{id:"order_entry-orderentry"},(0,i.kt)("inlineCode",{parentName:"h4"},"order_entry")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/order-entry"},(0,i.kt)("inlineCode",{parentName:"a"},"OrderEntry")),")"),(0,i.kt)("h4",{id:"payment_amount-money"},(0,i.kt)("inlineCode",{parentName:"h4"},"payment_amount")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/money"},(0,i.kt)("inlineCode",{parentName:"a"},"Money")),")"),(0,i.kt)("span",{class:"badge badge--warning"},"DEPRECATED: Use order_entry for payment fields"),(0,i.kt)("h4",{id:"payment_note-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"payment_note")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("span",{class:"badge badge--warning"},"DEPRECATED: Use order_entry for payment fields"),(0,i.kt)("h4",{id:"provided_by_event-event"},(0,i.kt)("inlineCode",{parentName:"h4"},"provided_by_event")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/event"},(0,i.kt)("inlineCode",{parentName:"a"},"Event")),")"),(0,i.kt)("h4",{id:"ticket_type-tickettype"},(0,i.kt)("inlineCode",{parentName:"h4"},"ticket_type")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/ticket-type"},(0,i.kt)("inlineCode",{parentName:"a"},"TicketType!")),")"),(0,i.kt)("h4",{id:"updated_at-date"},(0,i.kt)("inlineCode",{parentName:"h4"},"updated_at")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/date"},(0,i.kt)("inlineCode",{parentName:"a"},"Date!")),")"),(0,i.kt)("h4",{id:"user_con_profile-userconprofile"},(0,i.kt)("inlineCode",{parentName:"h4"},"user_con_profile")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/user-con-profile"},(0,i.kt)("inlineCode",{parentName:"a"},"UserConProfile!")),")"))}m.isMDXComponent=!0}}]);