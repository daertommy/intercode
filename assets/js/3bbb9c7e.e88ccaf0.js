"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[40052],{75631:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(45721);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},43781:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>d,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(91487),o=r(45721),i=r(75631);const a={id:"permissioned-role",title:"PermissionedRole",hide_table_of_contents:!1},l=void 0,s={unversionedId:"graphql/unions/permissioned-role",id:"graphql/unions/permissioned-role",title:"PermissionedRole",description:"No description",source:"@site/docs/graphql/unions/permissioned-role.mdx",sourceDirName:"graphql/unions",slug:"/graphql/unions/permissioned-role",permalink:"/docs/graphql/unions/permissioned-role",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/unions/permissioned-role.mdx",tags:[],version:"current",frontMatter:{id:"permissioned-role",title:"PermissionedRole",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"PermissionedModel",permalink:"/docs/graphql/unions/permissioned-model"},next:{title:"PricingStructureValue",permalink:"/docs/graphql/unions/pricing-structure-value"}},c={},p=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>OrganizationRole</code> <Badge class="secondary" text="object"/>',id:"organizationrole-",level:4},{value:'<code>StaffPosition</code> <Badge class="secondary" text="object"/>',id:"staffposition-",level:4},{value:"Member of",id:"member-of",level:3}],d=()=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,i.kt)(o.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:p,Bullet:d,SpecifiedBy:u,Badge:m},g="wrapper";function b(e){let{components:t,...r}=e;return(0,i.kt)(g,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"union PermissionedRole = OrganizationRole | StaffPosition\n")),(0,i.kt)("h3",{id:"possible-types"},"Possible types"),(0,i.kt)("h4",{id:"organizationrole-"},(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/organization-role"},(0,i.kt)("inlineCode",{parentName:"a"},"OrganizationRole"))," ",(0,i.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"staffposition-"},(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/staff-position"},(0,i.kt)("inlineCode",{parentName:"a"},"StaffPosition"))," ",(0,i.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/graphql/objects/permission"},(0,i.kt)("inlineCode",{parentName:"a"},"Permission")),"  ",(0,i.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);