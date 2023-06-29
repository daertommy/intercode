"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[92589],{75631:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(45721);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=i,g=p["".concat(c,".").concat(d)]||p[d]||u[d]||r;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43245:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>l,default:()=>v,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var a=n(91487),i=n(45721),r=n(75631);const o={id:"create-cms-navigation-item-input",title:"CreateCmsNavigationItemInput",hide_table_of_contents:!1},l=void 0,c={unversionedId:"graphql/inputs/create-cms-navigation-item-input",id:"graphql/inputs/create-cms-navigation-item-input",title:"CreateCmsNavigationItemInput",description:"Autogenerated input type of CreateCmsNavigationItem",source:"@site/docs/graphql/inputs/create-cms-navigation-item-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/create-cms-navigation-item-input",permalink:"/docs/graphql/inputs/create-cms-navigation-item-input",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/create-cms-navigation-item-input.mdx",tags:[],version:"current",frontMatter:{id:"create-cms-navigation-item-input",title:"CreateCmsNavigationItemInput",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"CreateCmsLayoutInput",permalink:"/docs/graphql/inputs/create-cms-layout-input"},next:{title:"CreateCmsPartialInput",permalink:"/docs/graphql/inputs/create-cms-partial-input"}},s={},m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CreateCmsNavigationItemInput.<b>clientMutationId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-createcmsnavigationiteminputbclientmutationidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateCmsNavigationItemInput.<b>cms_navigation_item</b></code><Bullet /><code>CmsNavigationItemInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-createcmsnavigationiteminputbcms_navigation_itembcodecmsnavigationiteminput--",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(i.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{class:"badge badge--"+e.class},e.text)),g={toc:m,Bullet:p,SpecifiedBy:u,Badge:d},f="wrapper";function v(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Autogenerated input type of CreateCmsNavigationItem"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input CreateCmsNavigationItemInput {\n  clientMutationId: String\n  cms_navigation_item: CmsNavigationItemInput!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-createcmsnavigationiteminputbclientmutationidbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CreateCmsNavigationItemInput.",(0,r.kt)("b",null,"clientMutationId"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(d,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A unique identifier for the client performing the mutation.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-createcmsnavigationiteminputbcms_navigation_itembcodecmsnavigationiteminput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CreateCmsNavigationItemInput.",(0,r.kt)("b",null,"cms_navigation_item"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/cms-navigation-item-input"},(0,r.kt)("inlineCode",{parentName:"a"},"CmsNavigationItemInput!"))," ",(0,r.kt)(d,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/graphql/mutations/create-cms-navigation-item"},(0,r.kt)("inlineCode",{parentName:"a"},"createCmsNavigationItem")),"  ",(0,r.kt)(d,{class:"secondary",text:"mutation",mdxType:"Badge"})))}v.isMDXComponent=!0}}]);