"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[57126],{75631:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(3289);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(n),g=r,m=u["".concat(p,".").concat(g)]||u[g]||s[g]||l;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},26252:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>s,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=n(34489),r=n(3289),l=n(75631);const o={id:"delete-page",title:"deletePage",hide_table_of_contents:!1},i=void 0,p={unversionedId:"graphql/mutations/delete-page",id:"graphql/mutations/delete-page",title:"deletePage",description:"No description",source:"@site/docs/graphql/mutations/delete-page.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/delete-page",permalink:"/docs/graphql/mutations/delete-page",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/mutations/delete-page.mdx",tags:[],version:"current",frontMatter:{id:"delete-page",title:"deletePage",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"deleteOrganizationRole",permalink:"/docs/graphql/mutations/delete-organization-role"},next:{title:"deleteProduct",permalink:"/docs/graphql/mutations/delete-product"}},d={},c=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>deletePage.<b>input</b></code><Bullet /><code>DeletePageInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-deletepagebinputbcodedeletepageinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>DeletePagePayload</code> <Badge class="secondary" text="object"/>',id:"deletepagepayload-",level:4}],s=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:c,Bullet:s,SpecifiedBy:u,Badge:g};function f(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"deletePage(\n  input: DeletePageInput!\n): DeletePagePayload!\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-deletepagebinputbcodedeletepageinput--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"deletePage.",(0,l.kt)("b",null,"input"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/delete-page-input"},(0,l.kt)("inlineCode",{parentName:"a"},"DeletePageInput!"))," ",(0,l.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Parameters for DeletePage")),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"deletepagepayload-"},(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/delete-page-payload"},(0,l.kt)("inlineCode",{parentName:"a"},"DeletePagePayload"))," ",(0,l.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Autogenerated return type of DeletePage")))}f.isMDXComponent=!0}}]);