"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[35674],{75631:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var n=a(45721);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(a),u=i,g=m["".concat(p,".").concat(u)]||m[u]||d[u]||r;return a?n.createElement(g,o(o({ref:t},s),{},{components:a})):n.createElement(g,o({ref:t},s))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},17269:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>m,SpecifiedBy:()=>d,assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=a(25577),i=a(45721),r=a(75631);const o={id:"update-cms-navigation-item",title:"updateCmsNavigationItem",hide_table_of_contents:!1},l=void 0,p={unversionedId:"graphql/mutations/update-cms-navigation-item",id:"graphql/mutations/update-cms-navigation-item",title:"updateCmsNavigationItem",description:"No description",source:"@site/docs/graphql/mutations/update-cms-navigation-item.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/update-cms-navigation-item",permalink:"/docs/graphql/mutations/update-cms-navigation-item",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/mutations/update-cms-navigation-item.mdx",tags:[],version:"current",frontMatter:{id:"update-cms-navigation-item",title:"updateCmsNavigationItem",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"updateCmsLayout",permalink:"/docs/graphql/mutations/update-cms-layout"},next:{title:"updateCmsPartial",permalink:"/docs/graphql/mutations/update-cms-partial"}},c={},s=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>updateCmsNavigationItem.<b>input</b></code><Bullet /><code>UpdateCmsNavigationItemInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updatecmsnavigationitembinputbcodeupdatecmsnavigationiteminput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>UpdateCmsNavigationItemPayload</code> <Badge class="secondary" text="object"/>',id:"updatecmsnavigationitempayload-",level:4}],m=()=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,r.kt)(i.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{class:"badge badge--"+e.class},e.text)),g={toc:s,Bullet:m,SpecifiedBy:d,Badge:u},y="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(y,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"updateCmsNavigationItem(\n  input: UpdateCmsNavigationItemInput!\n): UpdateCmsNavigationItemPayload!\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updatecmsnavigationitembinputbcodeupdatecmsnavigationiteminput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"updateCmsNavigationItem.",(0,r.kt)("b",null,"input"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/update-cms-navigation-item-input"},(0,r.kt)("inlineCode",{parentName:"a"},"UpdateCmsNavigationItemInput!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Parameters for UpdateCmsNavigationItem")),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"updatecmsnavigationitempayload-"},(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/update-cms-navigation-item-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"UpdateCmsNavigationItemPayload"))," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Autogenerated return type of UpdateCmsNavigationItem.")))}f.isMDXComponent=!0}}]);