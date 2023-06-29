"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[3300],{75631:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(45721);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=i(n),m=o,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(g,c(c({ref:t},s),{},{components:n})):r.createElement(g,c({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:o,c[1]=p;for(var i=2;i<a;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69309:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>u,SpecifiedBy:()=>d,assets:()=>i,contentTitle:()=>p,default:()=>y,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var r=n(91487),o=n(45721),a=n(75631);const c={id:"cms-content-group-input",title:"CmsContentGroupInput",hide_table_of_contents:!1},p=void 0,l={unversionedId:"graphql/inputs/cms-content-group-input",id:"graphql/inputs/cms-content-group-input",title:"CmsContentGroupInput",description:"No description",source:"@site/docs/graphql/inputs/cms-content-group-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/cms-content-group-input",permalink:"/docs/graphql/inputs/cms-content-group-input",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/cms-content-group-input.mdx",tags:[],version:"current",frontMatter:{id:"cms-content-group-input",title:"CmsContentGroupInput",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"CancelOrderInput",permalink:"/docs/graphql/inputs/cancel-order-input"},next:{title:"CmsContentInput",permalink:"/docs/graphql/inputs/cms-content-input"}},i={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CmsContentGroupInput.<b>contents</b></code><Bullet /><code>[CmsContentInput!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-cmscontentgroupinputbcontentsbcodecmscontentinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CmsContentGroupInput.<b>name</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cmscontentgroupinputbnamebcodestring-",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{class:"badge badge--"+e.class},e.text)),g={toc:s,Bullet:u,SpecifiedBy:d,Badge:m},f="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input CmsContentGroupInput {\n  contents: [CmsContentInput!]\n  name: String\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-cmscontentgroupinputbcontentsbcodecmscontentinput--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"CmsContentGroupInput.",(0,a.kt)("b",null,"contents"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/cms-content-input"},(0,a.kt)("inlineCode",{parentName:"a"},"[CmsContentInput!]"))," ",(0,a.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,a.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-cmscontentgroupinputbnamebcodestring-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"CmsContentGroupInput.",(0,a.kt)("b",null,"name"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,a.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/inputs/create-cms-content-group-input"},(0,a.kt)("inlineCode",{parentName:"a"},"CreateCmsContentGroupInput")),"  ",(0,a.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"}),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/inputs/update-cms-content-group-input"},(0,a.kt)("inlineCode",{parentName:"a"},"UpdateCmsContentGroupInput")),"  ",(0,a.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);