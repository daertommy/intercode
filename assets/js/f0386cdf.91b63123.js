"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[20977],{75631:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(45721);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=c(n),m=l,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1605:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>d,SpecifiedBy:()=>s,assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=n(50524),l=n(45721),a=n(75631);const i={id:"delete-email-route-input",title:"DeleteEmailRouteInput",hide_table_of_contents:!1},o=void 0,u={unversionedId:"graphql/inputs/delete-email-route-input",id:"graphql/inputs/delete-email-route-input",title:"DeleteEmailRouteInput",description:"Autogenerated input type of DeleteEmailRoute",source:"@site/docs/graphql/inputs/delete-email-route-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/delete-email-route-input",permalink:"/docs/graphql/inputs/delete-email-route-input",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/delete-email-route-input.mdx",tags:[],version:"current",frontMatter:{id:"delete-email-route-input",title:"DeleteEmailRouteInput",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"DeleteDepartmentInput",permalink:"/docs/graphql/inputs/delete-department-input"},next:{title:"DeleteEventCategoryInput",permalink:"/docs/graphql/inputs/delete-event-category-input"}},c={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>DeleteEmailRouteInput.<b>clientMutationId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-deleteemailrouteinputbclientmutationidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DeleteEmailRouteInput.<b>id</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-deleteemailrouteinputbidbcodeid-",level:4},{value:"Member of",id:"member-of",level:3}],d=()=>(0,a.kt)(l.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,a.kt)(l.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,a.kt)(l.Fragment,null,(0,a.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:p,Bullet:d,SpecifiedBy:s,Badge:m};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Autogenerated input type of DeleteEmailRoute"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input DeleteEmailRouteInput {\n  clientMutationId: String\n  id: ID\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-deleteemailrouteinputbclientmutationidbcodestring-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"DeleteEmailRouteInput.",(0,a.kt)("b",null,"clientMutationId"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,a.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A unique identifier for the client performing the mutation.")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-deleteemailrouteinputbidbcodeid-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"DeleteEmailRouteInput.",(0,a.kt)("b",null,"id"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,a.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/mutations/delete-email-route"},(0,a.kt)("inlineCode",{parentName:"a"},"deleteEmailRoute")),"  ",(0,a.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);