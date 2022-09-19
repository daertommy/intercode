"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[95660],{75631:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>y});var a=o(3289);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var d=a.createContext({}),s=function(e){var t=a.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,d=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(o),y=n,m=u["".concat(d,".").concat(y)]||u[y]||i[y]||r;return o?a.createElement(m,l(l({ref:t},c),{},{components:o})):a.createElement(m,l({ref:t},c))}));function y(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,l=new Array(r);l[0]=u;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var s=2;s<r;s++)l[s]=o[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},34767:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>y,Bullet:()=>i,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var a=o(34489),n=o(3289),r=o(75631);const l={id:"delete-event-proposal-payload",title:"DeleteEventProposalPayload",hide_table_of_contents:!1},p=void 0,d={unversionedId:"graphql/objects/delete-event-proposal-payload",id:"graphql/objects/delete-event-proposal-payload",title:"DeleteEventProposalPayload",description:"Autogenerated return type of DeleteEventProposal",source:"@site/docs/graphql/objects/delete-event-proposal-payload.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/delete-event-proposal-payload",permalink:"/docs/graphql/objects/delete-event-proposal-payload",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/delete-event-proposal-payload.mdx",tags:[],version:"current",frontMatter:{id:"delete-event-proposal-payload",title:"DeleteEventProposalPayload",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"DeleteEventCategoryPayload",permalink:"/docs/graphql/objects/delete-event-category-payload"},next:{title:"DeleteFormItemPayload",permalink:"/docs/graphql/objects/delete-form-item-payload"}},s={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>DeleteEventProposalPayload.<b>clientMutationId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-deleteeventproposalpayloadbclientmutationidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DeleteEventProposalPayload.<b>event_proposal</b></code><Bullet /><code>EventProposal!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-deleteeventproposalpayloadbevent_proposalbcodeeventproposal--",level:4},{value:"Returned by",id:"returned-by",level:3}],i=()=>(0,r.kt)(n.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(n.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,r.kt)(n.Fragment,null,(0,r.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:c,Bullet:i,SpecifiedBy:u,Badge:y};function f(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Autogenerated return type of DeleteEventProposal"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type DeleteEventProposalPayload {\n  clientMutationId: String\n  event_proposal: EventProposal!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-deleteeventproposalpayloadbclientmutationidbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"DeleteEventProposalPayload.",(0,r.kt)("b",null,"clientMutationId"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A unique identifier for the client performing the mutation.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-deleteeventproposalpayloadbevent_proposalbcodeeventproposal--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"DeleteEventProposalPayload.",(0,r.kt)("b",null,"event_proposal"))),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/event-proposal"},(0,r.kt)("inlineCode",{parentName:"a"},"EventProposal!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/graphql/mutations/delete-event-proposal"},(0,r.kt)("inlineCode",{parentName:"a"},"deleteEventProposal")),"  ",(0,r.kt)(y,{class:"secondary",text:"mutation",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);