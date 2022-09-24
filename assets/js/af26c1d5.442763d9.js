"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[45699],{75631:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(45721);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),g=o,m=u["".concat(d,".").concat(g)]||u[g]||c[g]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},79338:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>c,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var a=n(34489),o=n(45721),r=n(75631);const i={id:"update-organization-role-input",title:"UpdateOrganizationRoleInput",hide_table_of_contents:!1},l=void 0,d={unversionedId:"graphql/inputs/update-organization-role-input",id:"graphql/inputs/update-organization-role-input",title:"UpdateOrganizationRoleInput",description:"Autogenerated input type of UpdateOrganizationRole",source:"@site/docs/graphql/inputs/update-organization-role-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/update-organization-role-input",permalink:"/docs/graphql/inputs/update-organization-role-input",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/update-organization-role-input.mdx",tags:[],version:"current",frontMatter:{id:"update-organization-role-input",title:"UpdateOrganizationRoleInput",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"UpdateOrderInput",permalink:"/docs/graphql/inputs/update-order-input"},next:{title:"UpdatePageInput",permalink:"/docs/graphql/inputs/update-page-input"}},s={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateOrganizationRoleInput.<b>addUserIds</b></code><Bullet /><code>[ID!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updateorganizationroleinputbadduseridsbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateOrganizationRoleInput.<b>add_permissions</b></code><Bullet /><code>[PermissionInput!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updateorganizationroleinputbadd_permissionsbcodepermissioninput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateOrganizationRoleInput.<b>clientMutationId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updateorganizationroleinputbclientmutationidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateOrganizationRoleInput.<b>id</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updateorganizationroleinputbidbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateOrganizationRoleInput.<b>organization_role</b></code><Bullet /><code>OrganizationRoleInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updateorganizationroleinputborganization_rolebcodeorganizationroleinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateOrganizationRoleInput.<b>removePermissionIds</b></code><Bullet /><code>[ID!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updateorganizationroleinputbremovepermissionidsbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateOrganizationRoleInput.<b>removeUserIds</b></code><Bullet /><code>[ID!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updateorganizationroleinputbremoveuseridsbcodeid--",level:4},{value:"Member of",id:"member-of",level:3}],c=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:p,Bullet:c,SpecifiedBy:u,Badge:g};function y(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Autogenerated input type of UpdateOrganizationRole"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input UpdateOrganizationRoleInput {\n  addUserIds: [ID!]\n  add_permissions: [PermissionInput!]\n  clientMutationId: String\n  id: ID\n  organization_role: OrganizationRoleInput!\n  removePermissionIds: [ID!]\n  removeUserIds: [ID!]\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updateorganizationroleinputbadduseridsbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UpdateOrganizationRoleInput.",(0,r.kt)("b",null,"addUserIds"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,r.kt)(g,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updateorganizationroleinputbadd_permissionsbcodepermissioninput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UpdateOrganizationRoleInput.",(0,r.kt)("b",null,"add_permissions"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/permission-input"},(0,r.kt)("inlineCode",{parentName:"a"},"[PermissionInput!]"))," ",(0,r.kt)(g,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updateorganizationroleinputbclientmutationidbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UpdateOrganizationRoleInput.",(0,r.kt)("b",null,"clientMutationId"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A unique identifier for the client performing the mutation.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updateorganizationroleinputbidbcodeid-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UpdateOrganizationRoleInput.",(0,r.kt)("b",null,"id"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,r.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updateorganizationroleinputborganization_rolebcodeorganizationroleinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UpdateOrganizationRoleInput.",(0,r.kt)("b",null,"organization_role"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/organization-role-input"},(0,r.kt)("inlineCode",{parentName:"a"},"OrganizationRoleInput!"))," ",(0,r.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updateorganizationroleinputbremovepermissionidsbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UpdateOrganizationRoleInput.",(0,r.kt)("b",null,"removePermissionIds"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,r.kt)(g,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updateorganizationroleinputbremoveuseridsbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UpdateOrganizationRoleInput.",(0,r.kt)("b",null,"removeUserIds"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,r.kt)(g,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/graphql/mutations/update-organization-role"},(0,r.kt)("inlineCode",{parentName:"a"},"updateOrganizationRole")),"  ",(0,r.kt)(g,{class:"secondary",text:"mutation",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);