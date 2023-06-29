"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[46390],{75631:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(45721);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},i="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),i=s(a),y=r,g=i["".concat(c,".").concat(y)]||i[y]||m[y]||o;return a?n.createElement(g,l(l({ref:t},p),{},{components:a})):n.createElement(g,l({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=y;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[i]="string"==typeof e?e:r,l[1]=d;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},14553:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>y,Bullet:()=>i,SpecifiedBy:()=>m,assets:()=>s,contentTitle:()=>d,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=a(91487),r=a(45721),o=a(75631);const l={id:"department",title:"Department",hide_table_of_contents:!1},d=void 0,c={unversionedId:"graphql/objects/department",id:"graphql/objects/department",title:"Department",description:"No description",source:"@site/docs/graphql/objects/department.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/department",permalink:"/docs/graphql/objects/department",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/department.mdx",tags:[],version:"current",frontMatter:{id:"department",title:"Department",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"DeleteUserConProfilePayload",permalink:"/docs/graphql/objects/delete-user-con-profile-payload"},next:{title:"DropEventPayload",permalink:"/docs/graphql/objects/drop-event-payload"}},s={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Department.<b>event_categories</b></code><Bullet /><code>[EventCategory!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-departmentbevent_categoriesbcodeeventcategory--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Department.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-departmentbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Department.<b>name</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-departmentbnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Department.<b>proposal_description</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-departmentbproposal_descriptionbcodestring-",level:4},{value:"Member of",id:"member-of",level:3}],i=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),g={toc:p,Bullet:i,SpecifiedBy:m,Badge:y},u="wrapper";function f(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Department {\n  event_categories: [EventCategory!]!\n  id: ID!\n  name: String!\n  proposal_description: String\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-departmentbevent_categoriesbcodeeventcategory--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Department.",(0,o.kt)("b",null,"event_categories"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/event-category"},(0,o.kt)("inlineCode",{parentName:"a"},"[EventCategory!]!"))," ",(0,o.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-departmentbidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Department.",(0,o.kt)("b",null,"id"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-departmentbnamebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Department.",(0,o.kt)("b",null,"name"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-departmentbproposal_descriptionbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Department.",(0,o.kt)("b",null,"proposal_description"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/graphql/objects/convention"},(0,o.kt)("inlineCode",{parentName:"a"},"Convention")),"  ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/graphql/objects/create-department-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"CreateDepartmentPayload")),"  ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/graphql/objects/delete-department-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"DeleteDepartmentPayload")),"  ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/graphql/objects/event-category"},(0,o.kt)("inlineCode",{parentName:"a"},"EventCategory")),"  ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/graphql/objects/update-department-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateDepartmentPayload")),"  ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);