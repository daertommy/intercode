"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[34817],{75631:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>u});var a=o(45721);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),f=p(o),u=n,m=f["".concat(l,".").concat(u)]||f[u]||c[u]||i;return o?a.createElement(m,r(r({ref:t},d),{},{components:o})):a.createElement(m,r({ref:t},d))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,r=new Array(i);r[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var p=2;p<i;p++)r[p]=o[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}f.displayName="MDXCreateElement"},8420:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>u,Bullet:()=>c,SpecifiedBy:()=>f,assets:()=>p,contentTitle:()=>s,default:()=>y,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=o(50524),n=o(45721),i=o(75631);const r={id:"update-staff-position-permissions-payload",title:"UpdateStaffPositionPermissionsPayload",hide_table_of_contents:!1},s=void 0,l={unversionedId:"graphql/objects/update-staff-position-permissions-payload",id:"graphql/objects/update-staff-position-permissions-payload",title:"UpdateStaffPositionPermissionsPayload",description:"Autogenerated return type of UpdateStaffPositionPermissions",source:"@site/docs/graphql/objects/update-staff-position-permissions-payload.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/update-staff-position-permissions-payload",permalink:"/docs/graphql/objects/update-staff-position-permissions-payload",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/update-staff-position-permissions-payload.mdx",tags:[],version:"current",frontMatter:{id:"update-staff-position-permissions-payload",title:"UpdateStaffPositionPermissionsPayload",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"UpdateStaffPositionPayload",permalink:"/docs/graphql/objects/update-staff-position-payload"},next:{title:"UpdateTeamMemberPayload",permalink:"/docs/graphql/objects/update-team-member-payload"}},p={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateStaffPositionPermissionsPayload.<b>clientMutationId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatestaffpositionpermissionspayloadbclientmutationidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateStaffPositionPermissionsPayload.<b>staff_position</b></code><Bullet /><code>StaffPosition!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-updatestaffpositionpermissionspayloadbstaff_positionbcodestaffposition--",level:4},{value:"Returned by",id:"returned-by",level:3}],c=()=>(0,i.kt)(n.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,i.kt)(n.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,i.kt)(n.Fragment,null,(0,i.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:c,SpecifiedBy:f,Badge:u};function y(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Autogenerated return type of UpdateStaffPositionPermissions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type UpdateStaffPositionPermissionsPayload {\n  clientMutationId: String\n  staff_position: StaffPosition!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-updatestaffpositionpermissionspayloadbclientmutationidbcodestring-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"UpdateStaffPositionPermissionsPayload.",(0,i.kt)("b",null,"clientMutationId"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A unique identifier for the client performing the mutation.")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-updatestaffpositionpermissionspayloadbstaff_positionbcodestaffposition--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"UpdateStaffPositionPermissionsPayload.",(0,i.kt)("b",null,"staff_position"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/staff-position"},(0,i.kt)("inlineCode",{parentName:"a"},"StaffPosition!"))," ",(0,i.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"returned-by"},"Returned by"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/graphql/mutations/update-staff-position-permissions"},(0,i.kt)("inlineCode",{parentName:"a"},"updateStaffPositionPermissions")),"  ",(0,i.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);