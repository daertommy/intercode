"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[71609],{75631:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(45721);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=d(a),y=r,k=s["".concat(i,".").concat(y)]||s[y]||u[y]||o;return a?n.createElement(k,l(l({ref:t},p),{},{components:a})):n.createElement(k,l({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=y;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[s]="string"==typeof e?e:r,l[1]=c;for(var d=2;d<o;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},27496:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>y,Bullet:()=>s,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(25577),r=a(45721),o=a(75631);const l={id:"update-ticket-payload",title:"UpdateTicketPayload",hide_table_of_contents:!1},c=void 0,i={unversionedId:"graphql/objects/update-ticket-payload",id:"graphql/objects/update-ticket-payload",title:"UpdateTicketPayload",description:"Autogenerated return type of UpdateTicket.",source:"@site/docs/graphql/objects/update-ticket-payload.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/update-ticket-payload",permalink:"/docs/graphql/objects/update-ticket-payload",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/update-ticket-payload.mdx",tags:[],version:"current",frontMatter:{id:"update-ticket-payload",title:"UpdateTicketPayload",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"UpdateTeamMemberPayload",permalink:"/docs/graphql/objects/update-team-member-payload"},next:{title:"UpdateTicketTypePayload",permalink:"/docs/graphql/objects/update-ticket-type-payload"}},d={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateTicketPayload.<b>clientMutationId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updateticketpayloadbclientmutationidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateTicketPayload.<b>ticket</b></code><Bullet /><code>Ticket!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-updateticketpayloadbticketbcodeticket--",level:4},{value:"Returned by",id:"returned-by",level:3}],s=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),k={toc:p,Bullet:s,SpecifiedBy:u,Badge:y},m="wrapper";function f(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Autogenerated return type of UpdateTicket."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type UpdateTicketPayload {\n  clientMutationId: String\n  ticket: Ticket!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updateticketpayloadbclientmutationidbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UpdateTicketPayload.",(0,o.kt)("b",null,"clientMutationId"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A unique identifier for the client performing the mutation.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updateticketpayloadbticketbcodeticket--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UpdateTicketPayload.",(0,o.kt)("b",null,"ticket"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/ticket"},(0,o.kt)("inlineCode",{parentName:"a"},"Ticket!"))," ",(0,o.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/graphql/mutations/update-ticket"},(0,o.kt)("inlineCode",{parentName:"a"},"updateTicket")),"  ",(0,o.kt)(y,{class:"secondary",text:"mutation",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);