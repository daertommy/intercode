"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[61047],{75631:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(45721);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(r),f=o,m=c["".concat(p,".").concat(f)]||c[f]||d[f]||a;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},27614:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>f,Bullet:()=>c,SpecifiedBy:()=>d,assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=r(25577),o=r(45721),a=r(75631);const l={id:"update-user-con-profile",title:"updateUserConProfile",hide_table_of_contents:!1},i=void 0,p={unversionedId:"graphql/mutations/update-user-con-profile",id:"graphql/mutations/update-user-con-profile",title:"updateUserConProfile",description:"No description",source:"@site/docs/graphql/mutations/update-user-con-profile.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/update-user-con-profile",permalink:"/docs/graphql/mutations/update-user-con-profile",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/mutations/update-user-con-profile.mdx",tags:[],version:"current",frontMatter:{id:"update-user-con-profile",title:"updateUserConProfile",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"updateUserActivityAlert",permalink:"/docs/graphql/mutations/update-user-activity-alert"},next:{title:"withdrawAllUserConProfileSignups",permalink:"/docs/graphql/mutations/withdraw-all-user-con-profile-signups"}},u={},s=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>updateUserConProfile.<b>input</b></code><Bullet /><code>UpdateUserConProfileInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updateuserconprofilebinputbcodeupdateuserconprofileinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>UpdateUserConProfilePayload</code> <Badge class="secondary" text="object"/>',id:"updateuserconprofilepayload-",level:4}],c=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:s,Bullet:c,SpecifiedBy:d,Badge:f},y="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(y,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"updateUserConProfile(\n  input: UpdateUserConProfileInput!\n): UpdateUserConProfilePayload!\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-updateuserconprofilebinputbcodeupdateuserconprofileinput--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"updateUserConProfile.",(0,a.kt)("b",null,"input"))),(0,a.kt)(c,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/update-user-con-profile-input"},(0,a.kt)("inlineCode",{parentName:"a"},"UpdateUserConProfileInput!"))," ",(0,a.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Parameters for UpdateUserConProfile")),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"updateuserconprofilepayload-"},(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/update-user-con-profile-payload"},(0,a.kt)("inlineCode",{parentName:"a"},"UpdateUserConProfilePayload"))," ",(0,a.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Autogenerated return type of UpdateUserConProfile.")))}g.isMDXComponent=!0}}]);