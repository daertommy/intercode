"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[7247],{75631:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(3289);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||a;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1727:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>s,SpecifiedBy:()=>d,assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=n(34489),o=n(3289),a=n(75631);const l={id:"update-user-con-profile-input",title:"UpdateUserConProfileInput",hide_table_of_contents:!1},i=void 0,p={unversionedId:"graphql/inputs/update-user-con-profile-input",id:"graphql/inputs/update-user-con-profile-input",title:"UpdateUserConProfileInput",description:"Autogenerated input type of UpdateUserConProfile",source:"@site/docs/graphql/inputs/update-user-con-profile-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/update-user-con-profile-input",permalink:"/docs/graphql/inputs/update-user-con-profile-input",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/update-user-con-profile-input.mdx",tags:[],version:"current",frontMatter:{id:"update-user-con-profile-input",title:"UpdateUserConProfileInput",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"UpdateUserActivityAlertInput",permalink:"/docs/graphql/inputs/update-user-activity-alert-input"},next:{title:"UserActivityAlertInput",permalink:"/docs/graphql/inputs/user-activity-alert-input"}},u={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateUserConProfileInput.<b>clientMutationId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updateuserconprofileinputbclientmutationidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateUserConProfileInput.<b>id</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updateuserconprofileinputbidbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateUserConProfileInput.<b>user_con_profile</b></code><Bullet /><code>UserConProfileInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updateuserconprofileinputbuser_con_profilebcodeuserconprofileinput--",level:4},{value:"Member of",id:"member-of",level:3}],s=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:c,Bullet:s,SpecifiedBy:d,Badge:f};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Autogenerated input type of UpdateUserConProfile"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input UpdateUserConProfileInput {\n  clientMutationId: String\n  id: ID\n  user_con_profile: UserConProfileInput!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-updateuserconprofileinputbclientmutationidbcodestring-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"UpdateUserConProfileInput.",(0,a.kt)("b",null,"clientMutationId"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,a.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A unique identifier for the client performing the mutation.")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-updateuserconprofileinputbidbcodeid-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"UpdateUserConProfileInput.",(0,a.kt)("b",null,"id"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,a.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-updateuserconprofileinputbuser_con_profilebcodeuserconprofileinput--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"UpdateUserConProfileInput.",(0,a.kt)("b",null,"user_con_profile"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/user-con-profile-input"},(0,a.kt)("inlineCode",{parentName:"a"},"UserConProfileInput!"))," ",(0,a.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/mutations/update-user-con-profile"},(0,a.kt)("inlineCode",{parentName:"a"},"updateUserConProfile")),"  ",(0,a.kt)(f,{class:"secondary",text:"mutation",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);