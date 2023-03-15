"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[66378],{75631:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var a=r(45721);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),c=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},i="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),i=c(r),m=n,f=i["".concat(u,".").concat(m)]||i[m]||s[m]||o;return r?a.createElement(f,p(p({ref:t},l),{},{components:r})):a.createElement(f,p({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=m;var d={};for(var u in t)hasOwnProperty.call(t,u)&&(d[u]=t[u]);d.originalType=e,d[i]="string"==typeof e?e:n,p[1]=d;for(var c=2;c<o;c++)p[c]=r[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},40028:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>i,SpecifiedBy:()=>s,assets:()=>c,contentTitle:()=>d,default:()=>g,frontMatter:()=>p,metadata:()=>u,toc:()=>l});var a=r(25577),n=r(45721),o=r(75631);const p={id:"update-product",title:"updateProduct",hide_table_of_contents:!1},d=void 0,u={unversionedId:"graphql/mutations/update-product",id:"graphql/mutations/update-product",title:"updateProduct",description:"No description",source:"@site/docs/graphql/mutations/update-product.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/update-product",permalink:"/docs/graphql/mutations/update-product",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/mutations/update-product.mdx",tags:[],version:"current",frontMatter:{id:"update-product",title:"updateProduct",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"updatePage",permalink:"/docs/graphql/mutations/update-page"},next:{title:"updateRoom",permalink:"/docs/graphql/mutations/update-room"}},c={},l=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>updateProduct.<b>input</b></code><Bullet /><code>UpdateProductInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updateproductbinputbcodeupdateproductinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>UpdateProductPayload</code> <Badge class="secondary" text="object"/>',id:"updateproductpayload-",level:4}],i=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:l,Bullet:i,SpecifiedBy:s,Badge:m},y="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(y,(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"updateProduct(\n  input: UpdateProductInput!\n): UpdateProductPayload!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updateproductbinputbcodeupdateproductinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"updateProduct.",(0,o.kt)("b",null,"input"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/update-product-input"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateProductInput!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Parameters for UpdateProduct")),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"updateproductpayload-"},(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/update-product-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateProductPayload"))," ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Autogenerated return type of UpdateProduct.")))}g.isMDXComponent=!0}}]);