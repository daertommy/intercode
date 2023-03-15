"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[161],{75631:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(45721);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(r),g=i,m=c["".concat(u,".").concat(g)]||c[g]||d[g]||l;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=g;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:i,a[1]=o;for(var s=2;s<l;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},58150:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=r(25577),i=(r(45721),r(75631));const l={id:"pluralize",title:"pluralize"},a=void 0,o={unversionedId:"liquid/filters/pluralize",id:"liquid/filters/pluralize",title:"pluralize",description:"Can be used to either pluralize a singular noun, or to conditionally pluralize a noun based",source:"@site/docs/liquid/filters/pluralize.mdx",sourceDirName:"liquid/filters",slug:"/liquid/filters/pluralize",permalink:"/docs/liquid/filters/pluralize",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/liquid/filters/pluralize.mdx",tags:[],version:"current",frontMatter:{id:"pluralize",title:"pluralize"},sidebar:"sidebar",previous:{title:"money",permalink:"/docs/liquid/filters/money"},next:{title:"singularize",permalink:"/docs/liquid/filters/singularize"}},u={},s=[{value:"Parameters",id:"parameters",level:3},{value:"<code>input</code> (<code>String</code>, <code>Integer</code>)",id:"input-string-integer",level:4},{value:"<code>plural</code> (<code>String</code>)",id:"plural-string",level:4},{value:"<code>singular</code> (<code>String</code>)",id:"singular-string",level:4},{value:"Returns (<code>String</code>)",id:"returns-string",level:3},{value:"Examples",id:"examples",level:3}],p={toc:s},c="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Can be used to either pluralize a singular noun, or to conditionally pluralize a noun based\non a count."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("h4",{id:"input-string-integer"},(0,i.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,i.kt)("code",null,"String"),", ",(0,i.kt)("code",null,"Integer"),")"),(0,i.kt)("p",null,"The input to pluralize.  If it's a string, that string will\nbe unconditionally pluralized.  If it's a number, pluralize\nwill read the singular and plural parameters and decide\nbetween them depending on whether input is 1."),(0,i.kt)("h4",{id:"plural-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"plural")," (",(0,i.kt)("code",null,"String"),")"),(0,i.kt)("p",null,"Optional.  If input is a number, this will be the result if input is\nnot 1."),(0,i.kt)("h4",{id:"singular-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"singular")," (",(0,i.kt)("code",null,"String"),")"),(0,i.kt)("p",null,"Optional.  If input is a number, this will be the result if input\nis 1."),(0,i.kt)("h3",{id:"returns-string"},"Returns (",(0,i.kt)("code",null,"String"),")"),(0,i.kt)("p",null,"The pluralized string or phrase"),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-liquid",metastring:'title="Pluralizing a noun unconditionally"',title:'"Pluralizing',a:!0,noun:!0,'unconditionally"':!0},'{{ "goose" | pluralize }} => "geese"\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-liquid",metastring:'title="Pluralizing a count"',title:'"Pluralizing',a:!0,'count"':!0},'You are signed up for {{ user_con_profile.signups.length | pluralize "game" "games" }}\n=> "You are signed up for 3 games"\n')))}d.isMDXComponent=!0}}]);