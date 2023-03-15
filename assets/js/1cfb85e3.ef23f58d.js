"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[56600],{75631:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>y});var a=o(45721);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)o=s[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)o=s[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},d=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=c(o),m=n,y=p["".concat(i,".").concat(m)]||p[m]||f[m]||s;return o?a.createElement(y,l(l({ref:t},d),{},{components:o})):a.createElement(y,l({ref:t},d))}));function y(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=o.length,l=new Array(s);l[0]=m;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r[p]="string"==typeof e?e:n,l[1]=r;for(var c=2;c<s;c++)l[c]=o[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},12458:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>f,assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=o(25577),n=o(45721),s=o(75631);const l={id:"staff-position",title:"StaffPosition",hide_table_of_contents:!1},r=void 0,i={unversionedId:"graphql/objects/staff-position",id:"graphql/objects/staff-position",title:"StaffPosition",description:"No description",source:"@site/docs/graphql/objects/staff-position.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/staff-position",permalink:"/docs/graphql/objects/staff-position",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/staff-position.mdx",tags:[],version:"current",frontMatter:{id:"staff-position",title:"StaffPosition",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"SortCmsNavigationItemsPayload",permalink:"/docs/graphql/objects/sort-cms-navigation-items-payload"},next:{title:"StripeAccount",permalink:"/docs/graphql/objects/stripe-account"}},c={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>StaffPosition.<b>cc_addresses</b></code><Bullet /><code>[String!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffpositionbcc_addressesbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StaffPosition.<b>email</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffpositionbemailbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StaffPosition.<b>email_aliases</b></code><Bullet /><code>[String!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffpositionbemail_aliasesbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StaffPosition.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffpositionbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StaffPosition.<b>name</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffpositionbnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StaffPosition.<b>permissions</b></code><Bullet /><code>[Permission!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-staffpositionbpermissionsbcodepermission--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StaffPosition.<b>user_con_profiles</b></code><Bullet /><code>[UserConProfile!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-staffpositionbuser_con_profilesbcodeuserconprofile--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StaffPosition.<b>visible</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-staffpositionbvisiblebcodeboolean-",level:4},{value:"Member of",id:"member-of",level:3},{value:"Implemented by",id:"implemented-by",level:3}],p=()=>(0,s.kt)(n.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,s.kt)(n.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,s.kt)(n.Fragment,null,(0,s.kt)("span",{class:"badge badge--"+e.class},e.text)),y={toc:d,Bullet:p,SpecifiedBy:f,Badge:m},g="wrapper";function u(e){let{components:t,...o}=e;return(0,s.kt)(g,(0,a.Z)({},y,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"No description"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"type StaffPosition {\n  cc_addresses: [String!]!\n  email: String\n  email_aliases: [String!]!\n  id: ID!\n  name: String!\n  permissions: [Permission!]!\n  user_con_profiles: [UserConProfile!]!\n  visible: Boolean\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-staffpositionbcc_addressesbcodestring--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StaffPosition.",(0,s.kt)("b",null,"cc_addresses"))),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"[String!]!"))," ",(0,s.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-staffpositionbemailbcodestring-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StaffPosition.",(0,s.kt)("b",null,"email"))),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,s.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-staffpositionbemail_aliasesbcodestring--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StaffPosition.",(0,s.kt)("b",null,"email_aliases"))),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"[String!]!"))," ",(0,s.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-staffpositionbidbcodeid--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StaffPosition.",(0,s.kt)("b",null,"id"))),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,s.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,s.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-staffpositionbnamebcodestring--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StaffPosition.",(0,s.kt)("b",null,"name"))),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,s.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-staffpositionbpermissionsbcodepermission--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StaffPosition.",(0,s.kt)("b",null,"permissions"))),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/permission"},(0,s.kt)("inlineCode",{parentName:"a"},"[Permission!]!"))," ",(0,s.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-staffpositionbuser_con_profilesbcodeuserconprofile--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StaffPosition.",(0,s.kt)("b",null,"user_con_profiles"))),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/user-con-profile"},(0,s.kt)("inlineCode",{parentName:"a"},"[UserConProfile!]!"))," ",(0,s.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-staffpositionbvisiblebcodeboolean-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"StaffPosition.",(0,s.kt)("b",null,"visible"))),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,s.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,s.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h3",{id:"member-of"},"Member of"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/graphql/objects/convention"},(0,s.kt)("inlineCode",{parentName:"a"},"Convention")),"  ",(0,s.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/docs/graphql/objects/create-staff-position-payload"},(0,s.kt)("inlineCode",{parentName:"a"},"CreateStaffPositionPayload")),"  ",(0,s.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/docs/graphql/objects/delete-staff-position-payload"},(0,s.kt)("inlineCode",{parentName:"a"},"DeleteStaffPositionPayload")),"  ",(0,s.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/docs/graphql/objects/notification-destination"},(0,s.kt)("inlineCode",{parentName:"a"},"NotificationDestination")),"  ",(0,s.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/docs/graphql/objects/update-staff-position-payload"},(0,s.kt)("inlineCode",{parentName:"a"},"UpdateStaffPositionPayload")),"  ",(0,s.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/docs/graphql/objects/update-staff-position-permissions-payload"},(0,s.kt)("inlineCode",{parentName:"a"},"UpdateStaffPositionPermissionsPayload")),"  ",(0,s.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/docs/graphql/objects/user-con-profile"},(0,s.kt)("inlineCode",{parentName:"a"},"UserConProfile")),"  ",(0,s.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/graphql/unions/permissioned-role"},(0,s.kt)("inlineCode",{parentName:"a"},"PermissionedRole")),"  ",(0,s.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);