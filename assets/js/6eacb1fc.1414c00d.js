"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[24611],{75631:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(45721);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),d=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,y=m["".concat(i,".").concat(u)]||m[u]||p[u]||a;return n?o.createElement(y,l(l({ref:t},c),{},{components:n})):o.createElement(y,l({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var d=2;d<a;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64889:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>p,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var o=n(34489),r=n(45721),a=n(75631);const l={id:"permission",title:"Permission",hide_table_of_contents:!1},s=void 0,i={unversionedId:"graphql/objects/permission",id:"graphql/objects/permission",title:"Permission",description:"No description",source:"@site/docs/graphql/objects/permission.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/permission",permalink:"/docs/graphql/objects/permission",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/permission.mdx",tags:[],version:"current",frontMatter:{id:"permission",title:"Permission",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"PayWhatYouWantValue",permalink:"/docs/graphql/objects/pay-what-you-want-value"},next:{title:"PricingStructure",permalink:"/docs/graphql/objects/pricing-structure"}},d={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Permission.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-permissionbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Permission.<b>model</b></code><Bullet /><code>PermissionedModel!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="union"/>',id:"code-style-fontweight-normal-permissionbmodelbcodepermissionedmodel--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Permission.<b>permission</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-permissionbpermissionbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Permission.<b>role</b></code><Bullet /><code>PermissionedRole!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="union"/>',id:"code-style-fontweight-normal-permissionbrolebcodepermissionedrole--",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{class:"badge badge--"+e.class},e.text)),y={toc:c,Bullet:p,SpecifiedBy:m,Badge:u};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type Permission {\n  id: ID!\n  model: PermissionedModel!\n  permission: String!\n  role: PermissionedRole!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-permissionbidbcodeid--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"Permission.",(0,a.kt)("b",null,"id"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,a.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-permissionbmodelbcodepermissionedmodel--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"Permission.",(0,a.kt)("b",null,"model"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/unions/permissioned-model"},(0,a.kt)("inlineCode",{parentName:"a"},"PermissionedModel!"))," ",(0,a.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-permissionbpermissionbcodestring--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"Permission.",(0,a.kt)("b",null,"permission"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,a.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-permissionbrolebcodepermissionedrole--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"Permission.",(0,a.kt)("b",null,"role"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/unions/permissioned-role"},(0,a.kt)("inlineCode",{parentName:"a"},"PermissionedRole!"))," ",(0,a.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/objects/cms-content-group"},(0,a.kt)("inlineCode",{parentName:"a"},"CmsContentGroup")),"  ",(0,a.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/objects/organization-role"},(0,a.kt)("inlineCode",{parentName:"a"},"OrganizationRole")),"  ",(0,a.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/objects/staff-position"},(0,a.kt)("inlineCode",{parentName:"a"},"StaffPosition")),"  ",(0,a.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);