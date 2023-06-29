"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[6584],{75631:(e,t,i)=>{i.d(t,{Zo:()=>a,kt:()=>k});var r=i(45721);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function c(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function d(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):c(c({},t),e)),i},a=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,a=d(e,["components","mdxType","originalType","parentName"]),u=p(i),h=n,k=u["".concat(l,".").concat(h)]||u[h]||s[h]||o;return i?r.createElement(k,c(c({ref:t},a),{},{components:i})):r.createElement(k,c({ref:t},a))}));function k(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,c=new Array(o);c[0]=h;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[u]="string"==typeof e?e:n,c[1]=d;for(var p=2;p<o;p++)c[p]=i[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,i)}h.displayName="MDXCreateElement"},88926:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var r=i(91487),n=(i(45721),i(75631));const o={id:"ticket-type-drop",title:"TicketTypeDrop"},c=void 0,d={unversionedId:"liquid/drops/ticket-type-drop",id:"liquid/drops/ticket-type-drop",title:"TicketTypeDrop",description:"A type of ticket that this convention issues",source:"@site/docs/liquid/drops/ticket-type-drop.mdx",sourceDirName:"liquid/drops",slug:"/liquid/drops/ticket-type-drop",permalink:"/docs/liquid/drops/ticket-type-drop",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/liquid/drops/ticket-type-drop.mdx",tags:[],version:"current",frontMatter:{id:"ticket-type-drop",title:"TicketTypeDrop"},sidebar:"sidebar",previous:{title:"TicketDrop",permalink:"/docs/liquid/drops/ticket-drop"},next:{title:"TimespanWithValueDrop",permalink:"/docs/liquid/drops/timespan-with-value-drop"}},l={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>description</code> (<code>String</code>)",id:"description-string",level:4},{value:"<code>id</code> (<code>Integer</code>)",id:"id-integer",level:4},{value:"<code>maximum_event_provided_tickets</code> (<code>Integer</code>)",id:"maximum_event_provided_tickets-integer",level:4},{value:"<code>name</code> (<code>String</code>)",id:"name-string",level:4},{value:"<code>next_price</code> (<code>String</code>)",id:"next_price-string",level:4},{value:"<code>next_price_change</code> (<code>ActiveSupport::Time</code>)",id:"next_price_change-activesupporttime",level:4},{value:"<code>price</code> (<code>String</code>)",id:"price-string",level:4},{value:'<code>pricing_schedule</code> (<code><a href="/docs/liquid/drops/scheduled-value-drop">ScheduledValueDrop</a></code>)',id:"pricing_schedule-scheduledvaluedrop",level:4},{value:'<code>providing_products</code> (<code>Array&lt;<a href="/docs/liquid/drops/product-drop">ProductDrop</a>&gt;</code>)',id:"providing_products-arrayproductdrop",level:4},{value:"<code>publicly_available</code> (<code>Boolean</code>)",id:"publicly_available-boolean",level:4}],a={toc:p},u="wrapper";function s(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,r.Z)({},a,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A type of ticket that this convention issues"),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"description-string"},(0,n.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,n.kt)("code",null,"String"),")"),(0,n.kt)("p",null,"The human-readable description of this ticket type"),(0,n.kt)("h4",{id:"id-integer"},(0,n.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,n.kt)("code",null,"Integer"),")"),(0,n.kt)("p",null,"The numeric database ID of this ticket type"),(0,n.kt)("h4",{id:"maximum_event_provided_tickets-integer"},(0,n.kt)("inlineCode",{parentName:"h4"},"maximum_event_provided_tickets")," (",(0,n.kt)("code",null,"Integer"),")"),(0,n.kt)("p",null,"The default number of tickets of this type events are allowed to provide"),(0,n.kt)("h4",{id:"name-string"},(0,n.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,n.kt)("code",null,"String"),")"),(0,n.kt)("p",null,"The unique string name of this ticket type"),(0,n.kt)("h4",{id:"next_price-string"},(0,n.kt)("inlineCode",{parentName:"h4"},"next_price")," (",(0,n.kt)("code",null,"String"),")"),(0,n.kt)("p",null,"The price this ticket type will next change to, if there is an upcoming change"),(0,n.kt)("h4",{id:"next_price_change-activesupporttime"},(0,n.kt)("inlineCode",{parentName:"h4"},"next_price_change")," (",(0,n.kt)("code",null,"ActiveSupport::Time"),")"),(0,n.kt)("p",null,"When the price of this ticket type will next change, if there is\nan upcoming price change"),(0,n.kt)("h4",{id:"price-string"},(0,n.kt)("inlineCode",{parentName:"h4"},"price")," (",(0,n.kt)("code",null,"String"),")"),(0,n.kt)("p",null,"The current price of this ticket type"),(0,n.kt)("h4",{id:"pricing_schedule-scheduledvaluedrop"},(0,n.kt)("inlineCode",{parentName:"h4"},"pricing_schedule")," (",(0,n.kt)("code",null,(0,n.kt)("a",{href:"/docs/liquid/drops/scheduled-value-drop"},"ScheduledValueDrop")),")"),(0,n.kt)("p",null,"The pricing schedule for this ticket type"),(0,n.kt)("h4",{id:"providing_products-arrayproductdrop"},(0,n.kt)("inlineCode",{parentName:"h4"},"providing_products")," (",(0,n.kt)("code",null,"Array","<",(0,n.kt)("a",{href:"/docs/liquid/drops/product-drop"},"ProductDrop"),">"),")"),(0,n.kt)("p",null,"Products that provide this type of ticket"),(0,n.kt)("h4",{id:"publicly_available-boolean"},(0,n.kt)("inlineCode",{parentName:"h4"},"publicly_available")," (",(0,n.kt)("code",null,"Boolean"),")"),(0,n.kt)("p",null,"Whether this ticket type is publicly available for purchase"))}s.isMDXComponent=!0}}]);