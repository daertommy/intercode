"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[18572],{75631:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(45721);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},74628:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>f,Bullet:()=>p,SpecifiedBy:()=>d,assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(34489),o=r(45721),i=r(75631);const a={id:"assumed-identity-from-profile",title:"assumedIdentityFromProfile",hide_table_of_contents:!1},l=void 0,s={unversionedId:"graphql/queries/assumed-identity-from-profile",id:"graphql/queries/assumed-identity-from-profile",title:"assumedIdentityFromProfile",description:'If the current user is an assumed identity (using the "become user" feature), this returns',source:"@site/docs/graphql/queries/assumed-identity-from-profile.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/assumed-identity-from-profile",permalink:"/docs/graphql/queries/assumed-identity-from-profile",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/queries/assumed-identity-from-profile.mdx",tags:[],version:"current",frontMatter:{id:"assumed-identity-from-profile",title:"assumedIdentityFromProfile",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"accountFormContentHtml",permalink:"/docs/graphql/queries/account-form-content-html"},next:{title:"cmsParentByDomain",permalink:"/docs/graphql/queries/cms-parent-by-domain"}},c={},u=[{value:"Type",id:"type",level:3},{value:'<code>UserConProfile</code> <Badge class="secondary" text="object"/>',id:"userconprofile-",level:4}],p=()=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,i.kt)(o.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:u,Bullet:p,SpecifiedBy:d,Badge:f};function y(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'If the current user is an assumed identity (using the "become user" feature), this returns\nthe actual profile of the signed-in account. If not, returns null.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"assumedIdentityFromProfile: UserConProfile\n")),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"userconprofile-"},(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/user-con-profile"},(0,i.kt)("inlineCode",{parentName:"a"},"UserConProfile"))," ",(0,i.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null))}y.isMDXComponent=!0}}]);