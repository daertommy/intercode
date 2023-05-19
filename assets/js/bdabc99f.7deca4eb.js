"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[60134],{75631:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(45721);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(r),y=i,f=u["".concat(c,".").concat(y)]||u[y]||d[y]||l;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=y;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:i,a[1]=o;for(var s=2;s<l;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},2134:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>y,Bullet:()=>u,SpecifiedBy:()=>d,assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(64715),i=r(45721),l=r(75631);const a={id:"delete-user-activity-alert-input",title:"DeleteUserActivityAlertInput",hide_table_of_contents:!1},o=void 0,c={unversionedId:"graphql/inputs/delete-user-activity-alert-input",id:"graphql/inputs/delete-user-activity-alert-input",title:"DeleteUserActivityAlertInput",description:"Autogenerated input type of DeleteUserActivityAlert",source:"@site/docs/graphql/inputs/delete-user-activity-alert-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/delete-user-activity-alert-input",permalink:"/docs/graphql/inputs/delete-user-activity-alert-input",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/delete-user-activity-alert-input.mdx",tags:[],version:"current",frontMatter:{id:"delete-user-activity-alert-input",title:"DeleteUserActivityAlertInput",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"DeleteTicketTypeInput",permalink:"/docs/graphql/inputs/delete-ticket-type-input"},next:{title:"DeleteUserConProfileInput",permalink:"/docs/graphql/inputs/delete-user-con-profile-input"}},s={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>DeleteUserActivityAlertInput.<b>clientMutationId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-deleteuseractivityalertinputbclientmutationidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DeleteUserActivityAlertInput.<b>id</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-deleteuseractivityalertinputbidbcodeid-",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,l.kt)(i.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,l.kt)(i.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,l.kt)(i.Fragment,null,(0,l.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:p,Bullet:u,SpecifiedBy:d,Badge:y},m="wrapper";function g(e){let{components:t,...r}=e;return(0,l.kt)(m,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Autogenerated input type of DeleteUserActivityAlert"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"input DeleteUserActivityAlertInput {\n  clientMutationId: String\n  id: ID\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-deleteuseractivityalertinputbclientmutationidbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"DeleteUserActivityAlertInput.",(0,l.kt)("b",null,"clientMutationId"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A unique identifier for the client performing the mutation.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-deleteuseractivityalertinputbidbcodeid-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"DeleteUserActivityAlertInput.",(0,l.kt)("b",null,"id"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,l.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/graphql/mutations/delete-user-activity-alert"},(0,l.kt)("inlineCode",{parentName:"a"},"deleteUserActivityAlert")),"  ",(0,l.kt)(y,{class:"secondary",text:"mutation",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);