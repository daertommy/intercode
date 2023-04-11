"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[18047],{75631:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(45721);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||s[m]||r;return n?o.createElement(f,i(i({ref:t},d),{},{components:n})):o.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70215:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>u,SpecifiedBy:()=>s,assets:()=>c,contentTitle:()=>l,default:()=>v,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var o=n(25577),a=n(45721),r=n(75631);const i={id:"update-convention",title:"updateConvention",hide_table_of_contents:!1},l=void 0,p={unversionedId:"graphql/mutations/update-convention",id:"graphql/mutations/update-convention",title:"updateConvention",description:"No description",source:"@site/docs/graphql/mutations/update-convention.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/update-convention",permalink:"/docs/graphql/mutations/update-convention",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/mutations/update-convention.mdx",tags:[],version:"current",frontMatter:{id:"update-convention",title:"updateConvention",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"updateCmsPartial",permalink:"/docs/graphql/mutations/update-cms-partial"},next:{title:"updateCoupon",permalink:"/docs/graphql/mutations/update-coupon"}},c={},d=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>updateConvention.<b>input</b></code><Bullet /><code>UpdateConventionInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updateconventionbinputbcodeupdateconventioninput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>UpdateConventionPayload</code> <Badge class="secondary" text="object"/>',id:"updateconventionpayload-",level:4}],u=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:d,Bullet:u,SpecifiedBy:s,Badge:m},y="wrapper";function v(e){let{components:t,...n}=e;return(0,r.kt)(y,(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"updateConvention(\n  input: UpdateConventionInput!\n): UpdateConventionPayload!\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updateconventionbinputbcodeupdateconventioninput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"updateConvention.",(0,r.kt)("b",null,"input"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/update-convention-input"},(0,r.kt)("inlineCode",{parentName:"a"},"UpdateConventionInput!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Parameters for UpdateConvention")),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"updateconventionpayload-"},(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/update-convention-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"UpdateConventionPayload"))," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Autogenerated return type of UpdateConvention.")))}v.isMDXComponent=!0}}]);