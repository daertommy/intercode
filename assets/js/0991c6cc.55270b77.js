"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[51752],{75631:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(45721);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),f=a,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return t?n.createElement(m,o(o({ref:r},u),{},{components:t})):n.createElement(m,o({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},68455:(e,r,t)=>{t.r(r),t.d(r,{Badge:()=>f,Bullet:()=>p,SpecifiedBy:()=>d,assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=t(25577),a=t(45721),i=t(75631);const o={id:"current-user",title:"currentUser",hide_table_of_contents:!1},l=void 0,c={unversionedId:"graphql/queries/current-user",id:"graphql/queries/current-user",title:"currentUser",description:"Returns the currently signed-in user. If no user is signed in, returns null.",source:"@site/docs/graphql/queries/current-user.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/current-user",permalink:"/docs/graphql/queries/current-user",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/queries/current-user.mdx",tags:[],version:"current",frontMatter:{id:"current-user",title:"currentUser",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"currentAbility",permalink:"/docs/graphql/queries/current-ability"},next:{title:"email_routes_paginated",permalink:"/docs/graphql/queries/email-routes-paginated"}},s={},u=[{value:"Type",id:"type",level:3},{value:'<code>User</code> <Badge class="secondary" text="object"/>',id:"user-",level:4}],p=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:u,Bullet:p,SpecifiedBy:d,Badge:f},g="wrapper";function y(e){let{components:r,...t}=e;return(0,i.kt)(g,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Returns the currently signed-in user. If no user is signed in, returns null."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"currentUser: User\n")),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"user-"},(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/user"},(0,i.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,i.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null))}y.isMDXComponent=!0}}]);