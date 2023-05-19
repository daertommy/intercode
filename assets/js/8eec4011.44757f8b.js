"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[6325],{75631:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var a=r(45721);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return r?a.createElement(f,c(c({ref:t},s),{},{components:r})):a.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:n,c[1]=l;for(var p=2;p<o;p++)c[p]=r[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},15524:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>d,Bullet:()=>m,SpecifiedBy:()=>u,assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var a=r(64715),n=r(45721),o=r(75631);const c={id:"create-form",title:"createForm",hide_table_of_contents:!1},l=void 0,i={unversionedId:"graphql/mutations/create-form",id:"graphql/mutations/create-form",title:"createForm",description:"No description",source:"@site/docs/graphql/mutations/create-form.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/create-form",permalink:"/docs/graphql/mutations/create-form",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/mutations/create-form.mdx",tags:[],version:"current",frontMatter:{id:"create-form",title:"createForm",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"createFormWithJSON",permalink:"/docs/graphql/mutations/create-form-with-json"},next:{title:"createMaximumEventProvidedTicketsOverride",permalink:"/docs/graphql/mutations/create-maximum-event-provided-tickets-override"}},p={},s=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>createForm.<b>input</b></code><Bullet /><code>CreateFormInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-createformbinputbcodecreateforminput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>CreateFormPayload</code> <Badge class="secondary" text="object"/>',id:"createformpayload-",level:4}],m=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:s,Bullet:m,SpecifiedBy:u,Badge:d},y="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(y,(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"createForm(\n  input: CreateFormInput!\n): CreateFormPayload!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-createformbinputbcodecreateforminput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"createForm.",(0,o.kt)("b",null,"input"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/create-form-input"},(0,o.kt)("inlineCode",{parentName:"a"},"CreateFormInput!"))," ",(0,o.kt)(d,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Parameters for CreateForm")),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"createformpayload-"},(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/create-form-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"CreateFormPayload"))," ",(0,o.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Autogenerated return type of CreateForm.")))}g.isMDXComponent=!0}}]);