"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[20356],{75631:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(3289);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),f=l,g=d["".concat(s,".").concat(f)]||d[f]||c[f]||a;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},47457:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>f,Bullet:()=>c,SpecifiedBy:()=>d,assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(34489),l=r(3289),a=r(75631);const o={id:"withdraw-all-user-con-profile-signups",title:"withdrawAllUserConProfileSignups",hide_table_of_contents:!1},i=void 0,s={unversionedId:"graphql/mutations/withdraw-all-user-con-profile-signups",id:"graphql/mutations/withdraw-all-user-con-profile-signups",title:"withdrawAllUserConProfileSignups",description:"No description",source:"@site/docs/graphql/mutations/withdraw-all-user-con-profile-signups.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/withdraw-all-user-con-profile-signups",permalink:"/docs/graphql/mutations/withdraw-all-user-con-profile-signups",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/mutations/withdraw-all-user-con-profile-signups.mdx",tags:[],version:"current",frontMatter:{id:"withdraw-all-user-con-profile-signups",title:"withdrawAllUserConProfileSignups",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"updateUserConProfile",permalink:"/docs/graphql/mutations/update-user-con-profile"},next:{title:"withdrawMySignup",permalink:"/docs/graphql/mutations/withdraw-my-signup"}},p={},u=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>withdrawAllUserConProfileSignups.<b>input</b></code><Bullet /><code>WithdrawAllUserConProfileSignupsInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-withdrawalluserconprofilesignupsbinputbcodewithdrawalluserconprofilesignupsinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>WithdrawAllUserConProfileSignupsPayload</code> <Badge class="secondary" text="object"/>',id:"withdrawalluserconprofilesignupspayload-",level:4}],c=()=>(0,a.kt)(l.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,a.kt)(l.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,a.kt)(l.Fragment,null,(0,a.kt)("span",{class:"badge badge--"+e.class},e.text)),g={toc:u,Bullet:c,SpecifiedBy:d,Badge:f};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"withdrawAllUserConProfileSignups(\n  input: WithdrawAllUserConProfileSignupsInput!\n): WithdrawAllUserConProfileSignupsPayload!\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-withdrawalluserconprofilesignupsbinputbcodewithdrawalluserconprofilesignupsinput--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"withdrawAllUserConProfileSignups.",(0,a.kt)("b",null,"input"))),(0,a.kt)(c,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/withdraw-all-user-con-profile-signups-input"},(0,a.kt)("inlineCode",{parentName:"a"},"WithdrawAllUserConProfileSignupsInput!"))," ",(0,a.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Parameters for WithdrawAllUserConProfileSignups")),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"withdrawalluserconprofilesignupspayload-"},(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/withdraw-all-user-con-profile-signups-payload"},(0,a.kt)("inlineCode",{parentName:"a"},"WithdrawAllUserConProfileSignupsPayload"))," ",(0,a.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Autogenerated return type of WithdrawAllUserConProfileSignups")))}m.isMDXComponent=!0}}]);