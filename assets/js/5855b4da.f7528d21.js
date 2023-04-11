"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[45009],{75631:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(45721);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,f=c["".concat(p,".").concat(m)]||c[m]||s[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23654:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>c,SpecifiedBy:()=>s,assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var a=n(25577),r=n(45721),o=n(75631);const i={id:"update-event-input",title:"UpdateEventInput",hide_table_of_contents:!1},l=void 0,p={unversionedId:"graphql/inputs/update-event-input",id:"graphql/inputs/update-event-input",title:"UpdateEventInput",description:"Autogenerated input type of UpdateEvent",source:"@site/docs/graphql/inputs/update-event-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/update-event-input",permalink:"/docs/graphql/inputs/update-event-input",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/update-event-input.mdx",tags:[],version:"current",frontMatter:{id:"update-event-input",title:"UpdateEventInput",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"UpdateEventCategoryInput",permalink:"/docs/graphql/inputs/update-event-category-input"},next:{title:"UpdateEventProposalAdminNotesInput",permalink:"/docs/graphql/inputs/update-event-proposal-admin-notes-input"}},d={},u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateEventInput.<b>clientMutationId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updateeventinputbclientmutationidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateEventInput.<b>event</b></code><Bullet /><code>EventInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updateeventinputbeventbcodeeventinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateEventInput.<b>id</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updateeventinputbidbcodeid-",level:4},{value:"Member of",id:"member-of",level:3}],c=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:u,Bullet:c,SpecifiedBy:s,Badge:m},v="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(v,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Autogenerated input type of UpdateEvent"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input UpdateEventInput {\n  clientMutationId: String\n  event: EventInput\n  id: ID\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updateeventinputbclientmutationidbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UpdateEventInput.",(0,o.kt)("b",null,"clientMutationId"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A unique identifier for the client performing the mutation.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updateeventinputbeventbcodeeventinput-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UpdateEventInput.",(0,o.kt)("b",null,"event"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/event-input"},(0,o.kt)("inlineCode",{parentName:"a"},"EventInput"))," ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updateeventinputbidbcodeid-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UpdateEventInput.",(0,o.kt)("b",null,"id"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/graphql/mutations/update-event"},(0,o.kt)("inlineCode",{parentName:"a"},"updateEvent")),"  ",(0,o.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);