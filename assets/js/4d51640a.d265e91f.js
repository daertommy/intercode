"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[83306],{75631:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(45721);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(n),m=l,f=s["".concat(o,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[s]="string"==typeof e?e:l,i[1]=u;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68287:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>s,SpecifiedBy:()=>d,assets:()=>p,contentTitle:()=>u,default:()=>y,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(25577),l=n(45721),a=n(75631);const i={id:"create-multiple-runs-input",title:"CreateMultipleRunsInput",hide_table_of_contents:!1},u=void 0,o={unversionedId:"graphql/inputs/create-multiple-runs-input",id:"graphql/inputs/create-multiple-runs-input",title:"CreateMultipleRunsInput",description:"Autogenerated input type of CreateMultipleRuns",source:"@site/docs/graphql/inputs/create-multiple-runs-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/create-multiple-runs-input",permalink:"/docs/graphql/inputs/create-multiple-runs-input",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/create-multiple-runs-input.mdx",tags:[],version:"current",frontMatter:{id:"create-multiple-runs-input",title:"CreateMultipleRunsInput",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"CreateMaximumEventProvidedTicketsOverrideInput",permalink:"/docs/graphql/inputs/create-maximum-event-provided-tickets-override-input"},next:{title:"CreateMySignupInput",permalink:"/docs/graphql/inputs/create-my-signup-input"}},p={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CreateMultipleRunsInput.<b>clientMutationId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-createmultiplerunsinputbclientmutationidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateMultipleRunsInput.<b>eventId</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-createmultiplerunsinputbeventidbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateMultipleRunsInput.<b>runs</b></code><Bullet /><code>[RunInput!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-createmultiplerunsinputbrunsbcoderuninput--",level:4},{value:"Member of",id:"member-of",level:3}],s=()=>(0,a.kt)(l.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,a.kt)(l.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,a.kt)(l.Fragment,null,(0,a.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:c,Bullet:s,SpecifiedBy:d,Badge:m},g="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Autogenerated input type of CreateMultipleRuns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input CreateMultipleRunsInput {\n  clientMutationId: String\n  eventId: ID\n  runs: [RunInput!]!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-createmultiplerunsinputbclientmutationidbcodestring-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"CreateMultipleRunsInput.",(0,a.kt)("b",null,"clientMutationId"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,a.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A unique identifier for the client performing the mutation.")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-createmultiplerunsinputbeventidbcodeid-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"CreateMultipleRunsInput.",(0,a.kt)("b",null,"eventId"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,a.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-createmultiplerunsinputbrunsbcoderuninput--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"CreateMultipleRunsInput.",(0,a.kt)("b",null,"runs"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/run-input"},(0,a.kt)("inlineCode",{parentName:"a"},"[RunInput!]!"))," ",(0,a.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/mutations/create-multiple-runs"},(0,a.kt)("inlineCode",{parentName:"a"},"createMultipleRuns")),"  ",(0,a.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);