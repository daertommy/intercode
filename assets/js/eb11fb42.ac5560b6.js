"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[17783],{75631:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(3289);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||o;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},35218:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>d,Bullet:()=>f,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(34489),r=a(3289),o=a(75631);const i={id:"create-staff-position",title:"createStaffPosition",hide_table_of_contents:!1},s=void 0,l={unversionedId:"graphql/mutations/create-staff-position",id:"graphql/mutations/create-staff-position",title:"createStaffPosition",description:"No description",source:"@site/docs/graphql/mutations/create-staff-position.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/create-staff-position",permalink:"/docs/graphql/mutations/create-staff-position",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/mutations/create-staff-position.mdx",tags:[],version:"current",frontMatter:{id:"create-staff-position",title:"createStaffPosition",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"createSignupRequest",permalink:"/docs/graphql/mutations/create-signup-request"},next:{title:"createTeamMember",permalink:"/docs/graphql/mutations/create-team-member"}},c={},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>createStaffPosition.<b>input</b></code><Bullet /><code>CreateStaffPositionInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-createstaffpositionbinputbcodecreatestaffpositioninput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>CreateStaffPositionPayload</code> <Badge class="secondary" text="object"/>',id:"createstaffpositionpayload-",level:4}],f=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:p,Bullet:f,SpecifiedBy:u,Badge:d};function y(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"createStaffPosition(\n  input: CreateStaffPositionInput!\n): CreateStaffPositionPayload!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-createstaffpositionbinputbcodecreatestaffpositioninput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"createStaffPosition.",(0,o.kt)("b",null,"input"))),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/create-staff-position-input"},(0,o.kt)("inlineCode",{parentName:"a"},"CreateStaffPositionInput!"))," ",(0,o.kt)(d,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Parameters for CreateStaffPosition")),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"createstaffpositionpayload-"},(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/create-staff-position-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"CreateStaffPositionPayload"))," ",(0,o.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Autogenerated return type of CreateStaffPosition")))}y.isMDXComponent=!0}}]);