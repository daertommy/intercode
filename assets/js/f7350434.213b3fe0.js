"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[62334],{75631:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(45721);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(a),g=r,m=s["".concat(p,".").concat(g)]||s[g]||c[g]||o;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},22128:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>g,Bullet:()=>c,SpecifiedBy:()=>s,assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=a(34489),r=a(45721),o=a(75631);const i={id:"update-organization-role",title:"updateOrganizationRole",hide_table_of_contents:!1},l=void 0,p={unversionedId:"graphql/mutations/update-organization-role",id:"graphql/mutations/update-organization-role",title:"updateOrganizationRole",description:"No description",source:"@site/docs/graphql/mutations/update-organization-role.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/update-organization-role",permalink:"/docs/graphql/mutations/update-organization-role",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/mutations/update-organization-role.mdx",tags:[],version:"current",frontMatter:{id:"update-organization-role",title:"updateOrganizationRole",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"updateOrder",permalink:"/docs/graphql/mutations/update-order"},next:{title:"updatePage",permalink:"/docs/graphql/mutations/update-page"}},d={},u=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>updateOrganizationRole.<b>input</b></code><Bullet /><code>UpdateOrganizationRoleInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updateorganizationrolebinputbcodeupdateorganizationroleinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>UpdateOrganizationRolePayload</code> <Badge class="secondary" text="object"/>',id:"updateorganizationrolepayload-",level:4}],c=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:u,Bullet:c,SpecifiedBy:s,Badge:g};function f(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"updateOrganizationRole(\n  input: UpdateOrganizationRoleInput!\n): UpdateOrganizationRolePayload!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updateorganizationrolebinputbcodeupdateorganizationroleinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"updateOrganizationRole.",(0,o.kt)("b",null,"input"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/update-organization-role-input"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateOrganizationRoleInput!"))," ",(0,o.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Parameters for UpdateOrganizationRole")),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"updateorganizationrolepayload-"},(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/update-organization-role-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateOrganizationRolePayload"))," ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Autogenerated return type of UpdateOrganizationRole")))}f.isMDXComponent=!0}}]);