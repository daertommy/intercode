"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[65682],{75631:(e,t,o)=>{o.d(t,{Zo:()=>a,kt:()=>h});var i=o(45721);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function d(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,i,r=function(e,t){if(null==e)return{};var o,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)o=n[i],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)o=n[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):d(d({},t),e)),o},a=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,a=c(e,["components","mdxType","originalType","parentName"]),u=p(o),h=r,k=u["".concat(l,".").concat(h)]||u[h]||s[h]||n;return o?i.createElement(k,d(d({ref:t},a),{},{components:o})):i.createElement(k,d({ref:t},a))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,d=new Array(n);d[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,d[1]=c;for(var p=2;p<n;p++)d[p]=o[p];return i.createElement.apply(null,d)}return i.createElement.apply(null,o)}u.displayName="MDXCreateElement"},71329:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>s,frontMatter:()=>n,metadata:()=>c,toc:()=>p});var i=o(34489),r=(o(45721),o(75631));const n={id:"ticket-drop",title:"TicketDrop"},d=void 0,c={unversionedId:"liquid/drops/ticket-drop",id:"liquid/drops/ticket-drop",title:"TicketDrop",description:"A ticket for this convention (which may allow its holder to sign up for events)",source:"@site/docs/liquid/drops/ticket-drop.mdx",sourceDirName:"liquid/drops",slug:"/liquid/drops/ticket-drop",permalink:"/docs/liquid/drops/ticket-drop",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/liquid/drops/ticket-drop.mdx",tags:[],version:"current",frontMatter:{id:"ticket-drop",title:"TicketDrop"},sidebar:"sidebar",previous:{title:"StaffPositionDrop",permalink:"/docs/liquid/drops/staff-position-drop"},next:{title:"TicketTypeDrop",permalink:"/docs/liquid/drops/ticket-type-drop"}},l={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>allows_event_signups</code> (<code>Boolean</code>)",id:"allows_event_signups-boolean",level:4},{value:"<code>charge_id</code> (<code>String</code>)",id:"charge_id-string",level:4},{value:"<code>created_at</code> (<code>ActiveSupport::TimeWithZone</code>)",id:"created_at-activesupporttimewithzone",level:4},{value:"<code>description</code> (<code>String</code>)",id:"description-string",level:4},{value:"<code>id</code> (<code>Integer</code>)",id:"id-integer",level:4},{value:"<code>name</code> (<code>String</code>)",id:"name-string",level:4},{value:'<code>payment_amount</code> (<code><a href="/docs/liquid/drops/money-drop">MoneyDrop</a></code>)',id:"payment_amount-moneydrop",level:4},{value:'<code>provided_by_event</code> (<code><a href="/docs/liquid/drops/event-drop">EventDrop</a></code>)',id:"provided_by_event-eventdrop",level:4},{value:'<code>ticket_type</code> (<code><a href="/docs/liquid/drops/ticket-type-drop">TicketTypeDrop</a></code>)',id:"ticket_type-tickettypedrop",level:4},{value:"<code>updated_at</code> (<code>ActiveSupport::TimeWithZone</code>)",id:"updated_at-activesupporttimewithzone",level:4},{value:'<code>user_con_profile</code> (<code><a href="/docs/liquid/drops/user-con-profile-drop">UserConProfileDrop</a></code>)',id:"user_con_profile-userconprofiledrop",level:4}],a={toc:p};function s(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,i.Z)({},a,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A ticket for this convention (which may allow its holder to sign up for events)"),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"allows_event_signups-boolean"},(0,r.kt)("inlineCode",{parentName:"h4"},"allows_event_signups")," (",(0,r.kt)("code",null,"Boolean"),")"),(0,r.kt)("p",null,"Whether or not this ticket allows its holder to sign up for events"),(0,r.kt)("h4",{id:"charge_id-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"charge_id")," (",(0,r.kt)("code",null,"String"),")"),(0,r.kt)("p",null,"The ID of the charge in the underlying payment processing system"),(0,r.kt)("h4",{id:"created_at-activesupporttimewithzone"},(0,r.kt)("inlineCode",{parentName:"h4"},"created_at")," (",(0,r.kt)("code",null,"ActiveSupport::TimeWithZone"),")"),(0,r.kt)("p",null,"The time at which this ticket was first created in the\ndatabase"),(0,r.kt)("h4",{id:"description-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,r.kt)("code",null,"String"),")"),(0,r.kt)("p",null,"The human-readable description of the type of this ticket"),(0,r.kt)("h4",{id:"id-integer"},(0,r.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,r.kt)("code",null,"Integer"),")"),(0,r.kt)("p",null,"The numeric database ID of this ticket"),(0,r.kt)("h4",{id:"name-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,r.kt)("code",null,"String"),")"),(0,r.kt)("p",null,"The unique name of the type of this ticket"),(0,r.kt)("h4",{id:"payment_amount-moneydrop"},(0,r.kt)("inlineCode",{parentName:"h4"},"payment_amount")," (",(0,r.kt)("code",null,(0,r.kt)("a",{href:"/docs/liquid/drops/money-drop"},"MoneyDrop")),")"),(0,r.kt)("p",null,"The amount the person paid for the ticket"),(0,r.kt)("h4",{id:"provided_by_event-eventdrop"},(0,r.kt)("inlineCode",{parentName:"h4"},"provided_by_event")," (",(0,r.kt)("code",null,(0,r.kt)("a",{href:"/docs/liquid/drops/event-drop"},"EventDrop")),")"),(0,r.kt)("p",null,"The event that provided this ticket, if applicable"),(0,r.kt)("h4",{id:"ticket_type-tickettypedrop"},(0,r.kt)("inlineCode",{parentName:"h4"},"ticket_type")," (",(0,r.kt)("code",null,(0,r.kt)("a",{href:"/docs/liquid/drops/ticket-type-drop"},"TicketTypeDrop")),")"),(0,r.kt)("p",null,"The type of this ticket"),(0,r.kt)("h4",{id:"updated_at-activesupporttimewithzone"},(0,r.kt)("inlineCode",{parentName:"h4"},"updated_at")," (",(0,r.kt)("code",null,"ActiveSupport::TimeWithZone"),")"),(0,r.kt)("p",null,"The time at which this ticket was last updated in the\ndatabase"),(0,r.kt)("h4",{id:"user_con_profile-userconprofiledrop"},(0,r.kt)("inlineCode",{parentName:"h4"},"user_con_profile")," (",(0,r.kt)("code",null,(0,r.kt)("a",{href:"/docs/liquid/drops/user-con-profile-drop"},"UserConProfileDrop")),")"),(0,r.kt)("p",null,"The profile of the ticket holder"))}s.isMDXComponent=!0}}]);