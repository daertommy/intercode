"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[84904],{75631:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(3289);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,h=m["".concat(p,".").concat(u)]||m[u]||s[u]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71847:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return s}});var a=n(75731),r=n(42706),o=(n(3289),n(75631)),i=["components"],l={id:"event-category",title:"EventCategory",hide_table_of_contents:!1},p=void 0,d={unversionedId:"graphql/objects/event-category",id:"graphql/objects/event-category",title:"EventCategory",description:"No description",source:"@site/docs/graphql/objects/event-category.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/event-category",permalink:"/docs/graphql/objects/event-category",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/event-category.mdx",tags:[],version:"current",frontMatter:{id:"event-category",title:"EventCategory",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"EmailRoutesPagination",permalink:"/docs/graphql/objects/email-routes-pagination"},next:{title:"EventProposal",permalink:"/docs/graphql/objects/event-proposal"}},c={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>can_provide_tickets</code> (<code>Boolean!</code>)",id:"can_provide_tickets-boolean",level:4},{value:"<code>convention</code> (<code>Convention!</code>)",id:"convention-convention",level:4},{value:"<code>default_color</code> (<code>String</code>)",id:"default_color-string",level:4},{value:"<code>department</code> (<code>Department</code>)",id:"department-department",level:4},{value:"<code>event_form</code> (<code>Form!</code>)",id:"event_form-form",level:4},{value:"<code>event_proposal_form</code> (<code>Form</code>)",id:"event_proposal_form-form",level:4},{value:"<code>events_paginated</code> (<code>EventsPagination!</code>)",id:"events_paginated-eventspagination",level:4},{value:"<code>full_color</code> (<code>String</code>)",id:"full_color-string",level:4},{value:"<code>id</code> (<code>ID!</code>)",id:"id-id",level:4},{value:"<code>name</code> (<code>String!</code>)",id:"name-string",level:4},{value:"<code>proposable</code> (<code>Boolean!</code>)",id:"proposable-boolean",level:4},{value:"<code>proposal_description</code> (<code>String</code>)",id:"proposal_description-string",level:4},{value:"<code>scheduling_ui</code> (<code>SchedulingUi!</code>)",id:"scheduling_ui-schedulingui",level:4},{value:"<code>signed_up_color</code> (<code>String</code>)",id:"signed_up_color-string",level:4},{value:"<code>teamMemberNamePlural</code> (<code>String!</code>)",id:"teammembernameplural-string",level:4},{value:"<code>team_member_name</code> (<code>String!</code>)",id:"team_member_name-string",level:4}],m={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type EventCategory {\n  can_provide_tickets: Boolean!\n  convention: Convention!\n  default_color: String\n  department: Department\n  event_form: Form!\n  event_proposal_form: Form\n  events_paginated(\n  filters: EventFiltersInput\n  page: Int\n  per_page: Int\n  sort: [SortInput!]\n): EventsPagination!\n  full_color: String\n  id: ID!\n  name: String!\n  proposable: Boolean!\n  proposal_description: String\n  scheduling_ui: SchedulingUi!\n  signed_up_color: String\n  teamMemberNamePlural: String!\n  team_member_name: String!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"can_provide_tickets-boolean"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"can_provide_tickets"))," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean!")),")"),(0,o.kt)("h4",{id:"convention-convention"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"convention"))," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/convention"},(0,o.kt)("inlineCode",{parentName:"a"},"Convention!")),")"),(0,o.kt)("h4",{id:"default_color-string"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"default_color"))," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"department-department"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"department"))," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/department"},(0,o.kt)("inlineCode",{parentName:"a"},"Department")),")"),(0,o.kt)("h4",{id:"event_form-form"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"event_form"))," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/form"},(0,o.kt)("inlineCode",{parentName:"a"},"Form!")),")"),(0,o.kt)("h4",{id:"event_proposal_form-form"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"event_proposal_form"))," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/form"},(0,o.kt)("inlineCode",{parentName:"a"},"Form")),")"),(0,o.kt)("h4",{id:"events_paginated-eventspagination"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"events_paginated"))," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/events-pagination"},(0,o.kt)("inlineCode",{parentName:"a"},"EventsPagination!")),")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"filters-eventfiltersinput"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"filters"))," (",(0,o.kt)("a",{parentName:"h5",href:"/docs/graphql/inputs/event-filters-input"},(0,o.kt)("inlineCode",{parentName:"a"},"EventFiltersInput")),")"))),(0,o.kt)("p",null,"Filters to restrict what items will appear in the result set."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"page-int"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"page"))," (",(0,o.kt)("a",{parentName:"h5",href:"/docs/graphql/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,o.kt)("p",null,"The page number to return from the result set.  Page numbers start with 1."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"per_page-int"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"per_page"))," (",(0,o.kt)("a",{parentName:"h5",href:"/docs/graphql/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,o.kt)("p",null,"The number of items to return per page.  Defaults to 20, can go up to 200."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"sort-sortinput"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"sort"))," (",(0,o.kt)("a",{parentName:"h5",href:"/docs/graphql/inputs/sort-input"},(0,o.kt)("inlineCode",{parentName:"a"},"[SortInput!]")),")"))),(0,o.kt)("p",null,"A set of fields to use for ordering the result set. The second field is used as a\ntiebreaker for the first, the third field is used as a tiebreaker for the first two,\nand so on. If the sort argument is missing or empty, the order of items will be left\nup to the database (and may be unpredictable)."),(0,o.kt)("h4",{id:"full_color-string"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"full_color"))," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"id-id"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,o.kt)("h4",{id:"name-string"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"name"))," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,o.kt)("h4",{id:"proposable-boolean"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"proposable"))," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean!")),")"),(0,o.kt)("h4",{id:"proposal_description-string"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"proposal_description"))," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"scheduling_ui-schedulingui"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"scheduling_ui"))," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/scheduling-ui"},(0,o.kt)("inlineCode",{parentName:"a"},"SchedulingUi!")),")"),(0,o.kt)("h4",{id:"signed_up_color-string"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"signed_up_color"))," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"teammembernameplural-string"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"teamMemberNamePlural"))," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,o.kt)("h4",{id:"team_member_name-string"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"team_member_name"))," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!")),")"))}u.isMDXComponent=!0}}]);