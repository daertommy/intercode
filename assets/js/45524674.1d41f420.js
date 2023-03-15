"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[93457],{75631:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(45721);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(r),u=i,y=d["".concat(l,".").concat(u)]||d[u]||f[u]||a;return r?n.createElement(y,c(c({ref:t},p),{},{components:r})):n.createElement(y,c({ref:t},p))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,c=new Array(a);c[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:i,c[1]=o;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},42647:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>u,Bullet:()=>d,SpecifiedBy:()=>f,assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var n=r(25577),i=r(45721),a=r(75631);const c={id:"specified-by",title:"specifiedBy",hide_table_of_contents:!1},o=void 0,l={unversionedId:"graphql/directives/specified-by",id:"graphql/directives/specified-by",title:"specifiedBy",description:"Exposes a URL that specifies the behavior of this scalar.",source:"@site/docs/graphql/directives/specified-by.mdx",sourceDirName:"graphql/directives",slug:"/graphql/directives/specified-by",permalink:"/docs/graphql/directives/specified-by",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/directives/specified-by.mdx",tags:[],version:"current",frontMatter:{id:"specified-by",title:"specifiedBy",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"skip",permalink:"/docs/graphql/directives/skip"},next:{title:"CmsContentTypeIndicator",permalink:"/docs/graphql/enums/cms-content-type-indicator"}},s={},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>specifiedBy.<b>url</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-specifiedbyburlbcodestring--",level:4}],d=()=>(0,a.kt)(i.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,a.kt)(i.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,a.kt)(i.Fragment,null,(0,a.kt)("span",{class:"badge badge--"+e.class},e.text)),y={toc:p,Bullet:d,SpecifiedBy:f,Badge:u},m="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Exposes a URL that specifies the behavior of this scalar."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"directive @specifiedBy(\n  url: String!\n)\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-specifiedbyburlbcodestring--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"specifiedBy.",(0,a.kt)("b",null,"url"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,a.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The URL that specifies the behavior of this scalar.")))}g.isMDXComponent=!0}}]);