"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[37158],{75631:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>y});var n=a(3289);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=n.createContext({}),i=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=i(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),k=i(a),y=o,m=k["".concat(d,".").concat(y)]||k[y]||p[y]||l;return a?n.createElement(m,r(r({ref:t},s),{},{components:a})):n.createElement(m,r({ref:t},s))}));function y(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=k;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var i=2;i<l;i++)r[i]=a[i];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},75162:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>y,Bullet:()=>p,SpecifiedBy:()=>k,assets:()=>i,contentTitle:()=>c,default:()=>b,frontMatter:()=>r,metadata:()=>d,toc:()=>s});var n=a(34489),o=a(3289),l=a(75631);const r={id:"ticket",title:"Ticket",hide_table_of_contents:!1},c=void 0,d={unversionedId:"graphql/objects/ticket",id:"graphql/objects/ticket",title:"Ticket",description:"No description",source:"@site/docs/graphql/objects/ticket.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/ticket",permalink:"/docs/graphql/objects/ticket",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/ticket.mdx",tags:[],version:"current",frontMatter:{id:"ticket",title:"Ticket",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"TicketType",permalink:"/docs/graphql/objects/ticket-type"},next:{title:"TimespanWithMoneyValue",permalink:"/docs/graphql/objects/timespan-with-money-value"}},i={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Ticket.<b>convention</b></code><Bullet /><code>Convention!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-ticketbconventionbcodeconvention--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Ticket.<b>created_at</b></code><Bullet /><code>Date!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-ticketbcreated_atbcodedate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Ticket.<b>event</b></code><Bullet /><code>Event</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-ticketbeventbcodeevent-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Ticket.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-ticketbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Ticket.<b>order_entry</b></code><Bullet /><code>OrderEntry</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-ticketborder_entrybcodeorderentry-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Ticket.<b>provided_by_event</b></code><Bullet /><code>Event</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-ticketbprovided_by_eventbcodeevent-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Ticket.<b>ticket_type</b></code><Bullet /><code>TicketType!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-ticketbticket_typebcodetickettype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Ticket.<b>updated_at</b></code><Bullet /><code>Date!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-ticketbupdated_atbcodedate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Ticket.<b>user_con_profile</b></code><Bullet /><code>UserConProfile!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-ticketbuser_con_profilebcodeuserconprofile--",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),k=e=>(0,l.kt)(o.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:s,Bullet:p,SpecifiedBy:k,Badge:y};function b(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type Ticket {\n  convention: Convention!\n  created_at: Date!\n  event: Event\n  id: ID!\n  order_entry: OrderEntry\n  provided_by_event: Event\n  ticket_type: TicketType!\n  updated_at: Date!\n  user_con_profile: UserConProfile!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-ticketbconventionbcodeconvention--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Ticket.",(0,l.kt)("b",null,"convention"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/convention"},(0,l.kt)("inlineCode",{parentName:"a"},"Convention!"))," ",(0,l.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-ticketbcreated_atbcodedate--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Ticket.",(0,l.kt)("b",null,"created_at"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/date"},(0,l.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,l.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-ticketbeventbcodeevent-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Ticket.",(0,l.kt)("b",null,"event"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/event"},(0,l.kt)("inlineCode",{parentName:"a"},"Event"))," ",(0,l.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-ticketbidbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Ticket.",(0,l.kt)("b",null,"id"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-ticketborder_entrybcodeorderentry-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Ticket.",(0,l.kt)("b",null,"order_entry"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/order-entry"},(0,l.kt)("inlineCode",{parentName:"a"},"OrderEntry"))," ",(0,l.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-ticketbprovided_by_eventbcodeevent-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Ticket.",(0,l.kt)("b",null,"provided_by_event"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/event"},(0,l.kt)("inlineCode",{parentName:"a"},"Event"))," ",(0,l.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-ticketbticket_typebcodetickettype--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Ticket.",(0,l.kt)("b",null,"ticket_type"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/ticket-type"},(0,l.kt)("inlineCode",{parentName:"a"},"TicketType!"))," ",(0,l.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-ticketbupdated_atbcodedate--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Ticket.",(0,l.kt)("b",null,"updated_at"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/date"},(0,l.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,l.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-ticketbuser_con_profilebcodeuserconprofile--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Ticket.",(0,l.kt)("b",null,"user_con_profile"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/user-con-profile"},(0,l.kt)("inlineCode",{parentName:"a"},"UserConProfile!"))," ",(0,l.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/graphql/objects/convert-ticket-to-event-provided-payload"},(0,l.kt)("inlineCode",{parentName:"a"},"ConvertTicketToEventProvidedPayload")),"  ",(0,l.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/docs/graphql/objects/create-team-member-payload"},(0,l.kt)("inlineCode",{parentName:"a"},"CreateTeamMemberPayload")),"  ",(0,l.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/docs/graphql/objects/create-ticket-payload"},(0,l.kt)("inlineCode",{parentName:"a"},"CreateTicketPayload")),"  ",(0,l.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/docs/graphql/objects/delete-ticket-payload"},(0,l.kt)("inlineCode",{parentName:"a"},"DeleteTicketPayload")),"  ",(0,l.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/docs/graphql/objects/event"},(0,l.kt)("inlineCode",{parentName:"a"},"Event")),"  ",(0,l.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/docs/graphql/objects/event-provided-ticket-list"},(0,l.kt)("inlineCode",{parentName:"a"},"EventProvidedTicketList")),"  ",(0,l.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/docs/graphql/objects/provide-event-ticket-payload"},(0,l.kt)("inlineCode",{parentName:"a"},"ProvideEventTicketPayload")),"  ",(0,l.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/docs/graphql/objects/update-ticket-payload"},(0,l.kt)("inlineCode",{parentName:"a"},"UpdateTicketPayload")),"  ",(0,l.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/docs/graphql/objects/user-con-profile"},(0,l.kt)("inlineCode",{parentName:"a"},"UserConProfile")),"  ",(0,l.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);