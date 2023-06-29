"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[18918],{75631:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(45721);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var m=n.createContext({}),c=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(m.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,m=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(r),u=o,f=p["".concat(m,".").concat(u)]||p[u]||s[u]||a;return r?n.createElement(f,l(l({ref:t},d),{},{components:r})):n.createElement(f,l({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},43305:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>u,Bullet:()=>p,SpecifiedBy:()=>s,assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>m,toc:()=>d});var n=r(91487),o=r(45721),a=r(75631);const l={id:"delete-form-item",title:"deleteFormItem",hide_table_of_contents:!1},i=void 0,m={unversionedId:"graphql/mutations/delete-form-item",id:"graphql/mutations/delete-form-item",title:"deleteFormItem",description:"No description",source:"@site/docs/graphql/mutations/delete-form-item.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/delete-form-item",permalink:"/docs/graphql/mutations/delete-form-item",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/mutations/delete-form-item.mdx",tags:[],version:"current",frontMatter:{id:"delete-form-item",title:"deleteFormItem",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"deleteEventProposal",permalink:"/docs/graphql/mutations/delete-event-proposal"},next:{title:"deleteFormSection",permalink:"/docs/graphql/mutations/delete-form-section"}},c={},d=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>deleteFormItem.<b>input</b></code><Bullet /><code>DeleteFormItemInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-deleteformitembinputbcodedeleteformiteminput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>DeleteFormItemPayload</code> <Badge class="secondary" text="object"/>',id:"deleteformitempayload-",level:4}],p=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:d,Bullet:p,SpecifiedBy:s,Badge:u},y="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(y,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"deleteFormItem(\n  input: DeleteFormItemInput!\n): DeleteFormItemPayload!\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-deleteformitembinputbcodedeleteformiteminput--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"deleteFormItem.",(0,a.kt)("b",null,"input"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/delete-form-item-input"},(0,a.kt)("inlineCode",{parentName:"a"},"DeleteFormItemInput!"))," ",(0,a.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Parameters for DeleteFormItem")),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"deleteformitempayload-"},(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/delete-form-item-payload"},(0,a.kt)("inlineCode",{parentName:"a"},"DeleteFormItemPayload"))," ",(0,a.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Autogenerated return type of DeleteFormItem.")))}g.isMDXComponent=!0}}]);