"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[84441],{75631:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(3289);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||s;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},79856:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>f,Bullet:()=>d,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(34489),a=r(3289),s=r(75631);const o={id:"users",title:"users",hide_table_of_contents:!1},l=void 0,i={unversionedId:"graphql/queries/users",id:"graphql/queries/users",title:"users",description:"Finds up to 25 users by ID. If any of the IDs don't match an existing user, errors out.",source:"@site/docs/graphql/queries/users.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/users",permalink:"/docs/graphql/queries/users",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/queries/users.mdx",tags:[],version:"current",frontMatter:{id:"users",title:"users",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"users_paginated",permalink:"/docs/graphql/queries/users-paginated"},next:{title:"BigDecimal",permalink:"/docs/graphql/scalars/big-decimal"}},c={},u=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>users.<b>ids</b></code><Bullet /><code>[ID!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-usersbidsbcodeid--",level:4},{value:"Type",id:"type",level:3},{value:'<code>User</code> <Badge class="secondary" text="object"/>',id:"user-",level:4}],d=()=>(0,s.kt)(a.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,s.kt)(a.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,s.kt)(a.Fragment,null,(0,s.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:u,Bullet:d,SpecifiedBy:p,Badge:f};function g(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Finds up to 25 users by ID. If any of the IDs don't match an existing user, errors out."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"users(\n  ids: [ID!]\n): [User!]!\n")),(0,s.kt)("h3",{id:"arguments"},"Arguments"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-usersbidsbcodeid--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"users.",(0,s.kt)("b",null,"ids"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,s.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,s.kt)(f,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,s.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The IDs of the users to find.")),(0,s.kt)("h3",{id:"type"},"Type"),(0,s.kt)("h4",{id:"user-"},(0,s.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/user"},(0,s.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,s.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null))}g.isMDXComponent=!0}}]);