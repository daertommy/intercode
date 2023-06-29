"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[32825],{75631:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(45721);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=l(n),f=i,m=u["".concat(p,".").concat(f)]||u[f]||c[f]||a;return n?o.createElement(m,s(s({ref:t},d),{},{components:n})):o.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=f;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[u]="string"==typeof e?e:i,s[1]=r;for(var l=2;l<a;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},75254:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>u,SpecifiedBy:()=>c,assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var o=n(91487),i=n(45721),a=n(75631);const s={id:"update-staff-position-permissions",title:"updateStaffPositionPermissions",hide_table_of_contents:!1},r=void 0,p={unversionedId:"graphql/mutations/update-staff-position-permissions",id:"graphql/mutations/update-staff-position-permissions",title:"updateStaffPositionPermissions",description:"No description",source:"@site/docs/graphql/mutations/update-staff-position-permissions.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/update-staff-position-permissions",permalink:"/docs/graphql/mutations/update-staff-position-permissions",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/mutations/update-staff-position-permissions.mdx",tags:[],version:"current",frontMatter:{id:"update-staff-position-permissions",title:"updateStaffPositionPermissions",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"updateSignupCounted",permalink:"/docs/graphql/mutations/update-signup-counted"},next:{title:"updateStaffPosition",permalink:"/docs/graphql/mutations/update-staff-position"}},l={},d=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>updateStaffPositionPermissions.<b>input</b></code><Bullet /><code>UpdateStaffPositionPermissionsInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updatestaffpositionpermissionsbinputbcodeupdatestaffpositionpermissionsinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>UpdateStaffPositionPermissionsPayload</code> <Badge class="secondary" text="object"/>',id:"updatestaffpositionpermissionspayload-",level:4}],u=()=>(0,a.kt)(i.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,a.kt)(i.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,a.kt)(i.Fragment,null,(0,a.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:u,SpecifiedBy:c,Badge:f},y="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(y,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"updateStaffPositionPermissions(\n  input: UpdateStaffPositionPermissionsInput!\n): UpdateStaffPositionPermissionsPayload!\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-updatestaffpositionpermissionsbinputbcodeupdatestaffpositionpermissionsinput--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"updateStaffPositionPermissions.",(0,a.kt)("b",null,"input"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/update-staff-position-permissions-input"},(0,a.kt)("inlineCode",{parentName:"a"},"UpdateStaffPositionPermissionsInput!"))," ",(0,a.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Parameters for UpdateStaffPositionPermissions")),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"updatestaffpositionpermissionspayload-"},(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/update-staff-position-permissions-payload"},(0,a.kt)("inlineCode",{parentName:"a"},"UpdateStaffPositionPermissionsPayload"))," ",(0,a.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Autogenerated return type of UpdateStaffPositionPermissions.")))}g.isMDXComponent=!0}}]);