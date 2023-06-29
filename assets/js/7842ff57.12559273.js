"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[88894],{75631:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>y});var a=n(45721);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var i=a.createContext({}),p=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(i.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,i=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),s=p(n),m=o,y=s["".concat(i,".").concat(m)]||s[m]||d[m]||r;return n?a.createElement(y,l(l({ref:e},c),{},{components:n})):a.createElement(y,l({ref:e},c))}));function y(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,l=new Array(r);l[0]=m;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u[s]="string"==typeof t?t:o,l[1]=u;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6749:(t,e,n)=>{n.r(e),n.d(e,{Badge:()=>m,Bullet:()=>s,SpecifiedBy:()=>d,assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(91487),o=n(45721),r=n(75631);const l={id:"update-cms-layout-input",title:"UpdateCmsLayoutInput",hide_table_of_contents:!1},u=void 0,i={unversionedId:"graphql/inputs/update-cms-layout-input",id:"graphql/inputs/update-cms-layout-input",title:"UpdateCmsLayoutInput",description:"Autogenerated input type of UpdateCmsLayout",source:"@site/docs/graphql/inputs/update-cms-layout-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/update-cms-layout-input",permalink:"/docs/graphql/inputs/update-cms-layout-input",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/update-cms-layout-input.mdx",tags:[],version:"current",frontMatter:{id:"update-cms-layout-input",title:"UpdateCmsLayoutInput",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"UpdateCmsGraphqlQueryInput",permalink:"/docs/graphql/inputs/update-cms-graphql-query-input"},next:{title:"UpdateCmsNavigationItemInput",permalink:"/docs/graphql/inputs/update-cms-navigation-item-input"}},p={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateCmsLayoutInput.<b>clientMutationId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatecmslayoutinputbclientmutationidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateCmsLayoutInput.<b>cms_layout</b></code><Bullet /><code>CmsLayoutInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updatecmslayoutinputbcms_layoutbcodecmslayoutinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateCmsLayoutInput.<b>id</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatecmslayoutinputbidbcodeid-",level:4},{value:"Member of",id:"member-of",level:3}],s=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=t=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:t.url,title:"Specified by "+t.url},"\u2398")),m=t=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{class:"badge badge--"+t.class},t.text)),y={toc:c,Bullet:s,SpecifiedBy:d,Badge:m},f="wrapper";function g(t){let{components:e,...n}=t;return(0,r.kt)(f,(0,a.Z)({},y,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Autogenerated input type of UpdateCmsLayout"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input UpdateCmsLayoutInput {\n  clientMutationId: String\n  cms_layout: CmsLayoutInput!\n  id: ID\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updatecmslayoutinputbclientmutationidbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UpdateCmsLayoutInput.",(0,r.kt)("b",null,"clientMutationId"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A unique identifier for the client performing the mutation.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updatecmslayoutinputbcms_layoutbcodecmslayoutinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UpdateCmsLayoutInput.",(0,r.kt)("b",null,"cms_layout"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/cms-layout-input"},(0,r.kt)("inlineCode",{parentName:"a"},"CmsLayoutInput!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updatecmslayoutinputbidbcodeid-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UpdateCmsLayoutInput.",(0,r.kt)("b",null,"id"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/graphql/mutations/update-cms-layout"},(0,r.kt)("inlineCode",{parentName:"a"},"updateCmsLayout")),"  ",(0,r.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);