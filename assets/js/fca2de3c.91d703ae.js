"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[39553],{75631:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var o=n(45721);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},v=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=c(n),v=r,k=s["".concat(l,".").concat(v)]||s[v]||u[v]||i;return n?o.createElement(k,a(a({ref:t},p),{},{components:n})):o.createElement(k,a({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=v;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[s]="string"==typeof e?e:r,a[1]=d;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}v.displayName="MDXCreateElement"},23795:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>v,Bullet:()=>s,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(91487),r=n(45721),i=n(75631);const a={id:"convert-ticket-to-event-provided-input",title:"ConvertTicketToEventProvidedInput",hide_table_of_contents:!1},d=void 0,l={unversionedId:"graphql/inputs/convert-ticket-to-event-provided-input",id:"graphql/inputs/convert-ticket-to-event-provided-input",title:"ConvertTicketToEventProvidedInput",description:"Autogenerated input type of ConvertTicketToEventProvided",source:"@site/docs/graphql/inputs/convert-ticket-to-event-provided-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/convert-ticket-to-event-provided-input",permalink:"/docs/graphql/inputs/convert-ticket-to-event-provided-input",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/convert-ticket-to-event-provided-input.mdx",tags:[],version:"current",frontMatter:{id:"convert-ticket-to-event-provided-input",title:"ConvertTicketToEventProvidedInput",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"ConventionInput",permalink:"/docs/graphql/inputs/convention-input"},next:{title:"CouponFiltersInput",permalink:"/docs/graphql/inputs/coupon-filters-input"}},c={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ConvertTicketToEventProvidedInput.<b>clientMutationId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-converttickettoeventprovidedinputbclientmutationidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ConvertTicketToEventProvidedInput.<b>eventId</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-converttickettoeventprovidedinputbeventidbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ConvertTicketToEventProvidedInput.<b>ticketTypeId</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-converttickettoeventprovidedinputbtickettypeidbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ConvertTicketToEventProvidedInput.<b>userConProfileId</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-converttickettoeventprovidedinputbuserconprofileidbcodeid-",level:4},{value:"Member of",id:"member-of",level:3}],s=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),v=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{class:"badge badge--"+e.class},e.text)),k={toc:p,Bullet:s,SpecifiedBy:u,Badge:v},f="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,o.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Autogenerated input type of ConvertTicketToEventProvided"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input ConvertTicketToEventProvidedInput {\n  clientMutationId: String\n  eventId: ID\n  ticketTypeId: ID\n  userConProfileId: ID\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-converttickettoeventprovidedinputbclientmutationidbcodestring-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ConvertTicketToEventProvidedInput.",(0,i.kt)("b",null,"clientMutationId"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(v,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A unique identifier for the client performing the mutation.")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-converttickettoeventprovidedinputbeventidbcodeid-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ConvertTicketToEventProvidedInput.",(0,i.kt)("b",null,"eventId"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,i.kt)(v,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-converttickettoeventprovidedinputbtickettypeidbcodeid-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ConvertTicketToEventProvidedInput.",(0,i.kt)("b",null,"ticketTypeId"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,i.kt)(v,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-converttickettoeventprovidedinputbuserconprofileidbcodeid-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ConvertTicketToEventProvidedInput.",(0,i.kt)("b",null,"userConProfileId"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,i.kt)(v,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/graphql/mutations/convert-ticket-to-event-provided"},(0,i.kt)("inlineCode",{parentName:"a"},"convertTicketToEventProvided")),"  ",(0,i.kt)(v,{class:"secondary",text:"mutation",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);