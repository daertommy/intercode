"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[75403],{75631:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(45721);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=d(n),u=o,f=p["".concat(c,".").concat(u)]||p[u]||m[u]||a;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var d=2;d<a;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},47463:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>p,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=n(91487),o=n(45721),a=n(75631);const l={id:"delete-form-section",title:"deleteFormSection",hide_table_of_contents:!1},i=void 0,c={unversionedId:"graphql/mutations/delete-form-section",id:"graphql/mutations/delete-form-section",title:"deleteFormSection",description:"No description",source:"@site/docs/graphql/mutations/delete-form-section.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/delete-form-section",permalink:"/docs/graphql/mutations/delete-form-section",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/mutations/delete-form-section.mdx",tags:[],version:"current",frontMatter:{id:"delete-form-section",title:"deleteFormSection",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"deleteFormItem",permalink:"/docs/graphql/mutations/delete-form-item"},next:{title:"deleteForm",permalink:"/docs/graphql/mutations/delete-form"}},d={},s=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>deleteFormSection.<b>input</b></code><Bullet /><code>DeleteFormSectionInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-deleteformsectionbinputbcodedeleteformsectioninput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>DeleteFormSectionPayload</code> <Badge class="secondary" text="object"/>',id:"deleteformsectionpayload-",level:4}],p=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:s,Bullet:p,SpecifiedBy:m,Badge:u},y="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(y,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"deleteFormSection(\n  input: DeleteFormSectionInput!\n): DeleteFormSectionPayload!\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-deleteformsectionbinputbcodedeleteformsectioninput--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"deleteFormSection.",(0,a.kt)("b",null,"input"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/delete-form-section-input"},(0,a.kt)("inlineCode",{parentName:"a"},"DeleteFormSectionInput!"))," ",(0,a.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Parameters for DeleteFormSection")),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"deleteformsectionpayload-"},(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/delete-form-section-payload"},(0,a.kt)("inlineCode",{parentName:"a"},"DeleteFormSectionPayload"))," ",(0,a.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Autogenerated return type of DeleteFormSection.")))}g.isMDXComponent=!0}}]);