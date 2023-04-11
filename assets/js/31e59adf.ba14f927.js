"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[80288],{75631:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(45721);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||s[m]||l;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var d=2;d<l;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5282:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>u,SpecifiedBy:()=>s,assets:()=>d,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(25577),o=n(45721),l=n(75631);const a={id:"delete-room-input",title:"DeleteRoomInput",hide_table_of_contents:!1},i=void 0,c={unversionedId:"graphql/inputs/delete-room-input",id:"graphql/inputs/delete-room-input",title:"DeleteRoomInput",description:"Autogenerated input type of DeleteRoom",source:"@site/docs/graphql/inputs/delete-room-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/delete-room-input",permalink:"/docs/graphql/inputs/delete-room-input",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/delete-room-input.mdx",tags:[],version:"current",frontMatter:{id:"delete-room-input",title:"DeleteRoomInput",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"DeleteProductInput",permalink:"/docs/graphql/inputs/delete-product-input"},next:{title:"DeleteRunInput",permalink:"/docs/graphql/inputs/delete-run-input"}},d={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>DeleteRoomInput.<b>clientMutationId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-deleteroominputbclientmutationidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DeleteRoomInput.<b>id</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-deleteroominputbidbcodeid-",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,l.kt)(o.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:p,Bullet:u,SpecifiedBy:s,Badge:m},g="wrapper";function y(e){let{components:t,...n}=e;return(0,l.kt)(g,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Autogenerated input type of DeleteRoom"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"input DeleteRoomInput {\n  clientMutationId: String\n  id: ID\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-deleteroominputbclientmutationidbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"DeleteRoomInput.",(0,l.kt)("b",null,"clientMutationId"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A unique identifier for the client performing the mutation.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-deleteroominputbidbcodeid-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"DeleteRoomInput.",(0,l.kt)("b",null,"id"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/graphql/mutations/delete-room"},(0,l.kt)("inlineCode",{parentName:"a"},"deleteRoom")),"  ",(0,l.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);