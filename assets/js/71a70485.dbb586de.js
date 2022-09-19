"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[3024],{75631:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var a=n(3289);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),d=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=d(n),g=r,m=s["".concat(i,".").concat(g)]||s[g]||c[g]||o;return n?a.createElement(m,u(u({ref:t},l),{},{components:n})):a.createElement(m,u({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,u=new Array(o);u[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,u[1]=p;for(var d=2;d<o;d++)u[d]=n[d];return a.createElement.apply(null,u)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},77012:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>c,SpecifiedBy:()=>s,assets:()=>d,contentTitle:()=>p,default:()=>f,frontMatter:()=>u,metadata:()=>i,toc:()=>l});var a=n(34489),r=n(3289),o=n(75631);const u={id:"update-signup-counted",title:"updateSignupCounted",hide_table_of_contents:!1},p=void 0,i={unversionedId:"graphql/mutations/update-signup-counted",id:"graphql/mutations/update-signup-counted",title:"updateSignupCounted",description:"No description",source:"@site/docs/graphql/mutations/update-signup-counted.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/update-signup-counted",permalink:"/docs/graphql/mutations/update-signup-counted",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/mutations/update-signup-counted.mdx",tags:[],version:"current",frontMatter:{id:"update-signup-counted",title:"updateSignupCounted",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"updateSignupBucket",permalink:"/docs/graphql/mutations/update-signup-bucket"},next:{title:"updateStaffPositionPermissions",permalink:"/docs/graphql/mutations/update-staff-position-permissions"}},d={},l=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>updateSignupCounted.<b>input</b></code><Bullet /><code>UpdateSignupCountedInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updatesignupcountedbinputbcodeupdatesignupcountedinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>UpdateSignupCountedPayload</code> <Badge class="secondary" text="object"/>',id:"updatesignupcountedpayload-",level:4}],c=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:l,Bullet:c,SpecifiedBy:s,Badge:g};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"updateSignupCounted(\n  input: UpdateSignupCountedInput!\n): UpdateSignupCountedPayload!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updatesignupcountedbinputbcodeupdatesignupcountedinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"updateSignupCounted.",(0,o.kt)("b",null,"input"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/update-signup-counted-input"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateSignupCountedInput!"))," ",(0,o.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Parameters for UpdateSignupCounted")),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"updatesignupcountedpayload-"},(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/update-signup-counted-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateSignupCountedPayload"))," ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Autogenerated return type of UpdateSignupCounted")))}f.isMDXComponent=!0}}]);