"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[24012],{75631:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(45721);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(a),g=r,m=c["".concat(i,".").concat(g)]||c[g]||s[g]||o;return a?n.createElement(m,p(p({ref:t},u),{},{components:a})):n.createElement(m,p({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,p=new Array(o);p[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:r,p[1]=l;for(var d=2;d<o;d++)p[d]=a[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},5709:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>g,Bullet:()=>c,SpecifiedBy:()=>s,assets:()=>d,contentTitle:()=>l,default:()=>y,frontMatter:()=>p,metadata:()=>i,toc:()=>u});var n=a(25577),r=a(45721),o=a(75631);const p={id:"update-page",title:"updatePage",hide_table_of_contents:!1},l=void 0,i={unversionedId:"graphql/mutations/update-page",id:"graphql/mutations/update-page",title:"updatePage",description:"No description",source:"@site/docs/graphql/mutations/update-page.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/update-page",permalink:"/docs/graphql/mutations/update-page",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/mutations/update-page.mdx",tags:[],version:"current",frontMatter:{id:"update-page",title:"updatePage",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"updateOrganizationRole",permalink:"/docs/graphql/mutations/update-organization-role"},next:{title:"updateProduct",permalink:"/docs/graphql/mutations/update-product"}},d={},u=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>updatePage.<b>input</b></code><Bullet /><code>UpdatePageInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updatepagebinputbcodeupdatepageinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>UpdatePagePayload</code> <Badge class="secondary" text="object"/>',id:"updatepagepayload-",level:4}],c=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:u,Bullet:c,SpecifiedBy:s,Badge:g},f="wrapper";function y(e){let{components:t,...a}=e;return(0,o.kt)(f,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"updatePage(\n  input: UpdatePageInput!\n): UpdatePagePayload!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updatepagebinputbcodeupdatepageinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"updatePage.",(0,o.kt)("b",null,"input"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/update-page-input"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdatePageInput!"))," ",(0,o.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Parameters for UpdatePage")),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"updatepagepayload-"},(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/update-page-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdatePagePayload"))," ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Autogenerated return type of UpdatePage.")))}y.isMDXComponent=!0}}]);