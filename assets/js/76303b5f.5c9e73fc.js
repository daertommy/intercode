"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[44720],{75631:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(45721);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(t),f=i,g=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return t?r.createElement(g,l(l({ref:n},p),{},{components:t})):r.createElement(g,l({ref:n},p))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=f;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[u]="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},76355:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>f,Bullet:()=>u,SpecifiedBy:()=>d,assets:()=>c,contentTitle:()=>a,default:()=>y,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=t(25577),i=t(45721),o=t(75631);const l={id:"winning-user-con-profile-input",title:"WinningUserConProfileInput",hide_table_of_contents:!1},a=void 0,s={unversionedId:"graphql/inputs/winning-user-con-profile-input",id:"graphql/inputs/winning-user-con-profile-input",title:"WinningUserConProfileInput",description:"No description",source:"@site/docs/graphql/inputs/winning-user-con-profile-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/winning-user-con-profile-input",permalink:"/docs/graphql/inputs/winning-user-con-profile-input",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/winning-user-con-profile-input.mdx",tags:[],version:"current",frontMatter:{id:"winning-user-con-profile-input",title:"WinningUserConProfileInput",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"UserFiltersInput",permalink:"/docs/graphql/inputs/user-filters-input"},next:{title:"WithdrawAllUserConProfileSignupsInput",permalink:"/docs/graphql/inputs/withdraw-all-user-con-profile-signups-input"}},c={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>WinningUserConProfileInput.<b>conventionId</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-winninguserconprofileinputbconventionidbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>WinningUserConProfileInput.<b>userConProfileId</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-winninguserconprofileinputbuserconprofileidbcodeid-",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,o.kt)(i.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,o.kt)(i.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,o.kt)(i.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),g={toc:p,Bullet:u,SpecifiedBy:d,Badge:f},m="wrapper";function y(e){let{components:n,...t}=e;return(0,o.kt)(m,(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input WinningUserConProfileInput {\n  conventionId: ID\n  userConProfileId: ID\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-winninguserconprofileinputbconventionidbcodeid-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"WinningUserConProfileInput.",(0,o.kt)("b",null,"conventionId"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,o.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-winninguserconprofileinputbuserconprofileidbcodeid-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"WinningUserConProfileInput.",(0,o.kt)("b",null,"userConProfileId"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,o.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/graphql/inputs/merge-users-input"},(0,o.kt)("inlineCode",{parentName:"a"},"MergeUsersInput")),"  ",(0,o.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);