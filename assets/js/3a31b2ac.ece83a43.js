"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[2976],{75631:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(45721);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(a),d=n,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return a?r.createElement(f,o(o({ref:t},p),{},{components:a})):r.createElement(f,o({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},82472:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>d,Bullet:()=>u,SpecifiedBy:()=>m,assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=a(25577),n=a(45721),l=a(75631);const o={id:"create-cms-partial",title:"createCmsPartial",hide_table_of_contents:!1},i=void 0,c={unversionedId:"graphql/mutations/create-cms-partial",id:"graphql/mutations/create-cms-partial",title:"createCmsPartial",description:"No description",source:"@site/docs/graphql/mutations/create-cms-partial.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/create-cms-partial",permalink:"/docs/graphql/mutations/create-cms-partial",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/mutations/create-cms-partial.mdx",tags:[],version:"current",frontMatter:{id:"create-cms-partial",title:"createCmsPartial",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"createCmsNavigationItem",permalink:"/docs/graphql/mutations/create-cms-navigation-item"},next:{title:"createConventionStripeAccount",permalink:"/docs/graphql/mutations/create-convention-stripe-account"}},s={},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>createCmsPartial.<b>input</b></code><Bullet /><code>CreateCmsPartialInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-createcmspartialbinputbcodecreatecmspartialinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>CreateCmsPartialPayload</code> <Badge class="secondary" text="object"/>',id:"createcmspartialpayload-",level:4}],u=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:p,Bullet:u,SpecifiedBy:m,Badge:d},y="wrapper";function g(e){let{components:t,...a}=e;return(0,l.kt)(y,(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"createCmsPartial(\n  input: CreateCmsPartialInput!\n): CreateCmsPartialPayload!\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createcmspartialbinputbcodecreatecmspartialinput--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"createCmsPartial.",(0,l.kt)("b",null,"input"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/create-cms-partial-input"},(0,l.kt)("inlineCode",{parentName:"a"},"CreateCmsPartialInput!"))," ",(0,l.kt)(d,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Parameters for CreateCmsPartial")),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"createcmspartialpayload-"},(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/create-cms-partial-payload"},(0,l.kt)("inlineCode",{parentName:"a"},"CreateCmsPartialPayload"))," ",(0,l.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Autogenerated return type of CreateCmsPartial.")))}g.isMDXComponent=!0}}]);