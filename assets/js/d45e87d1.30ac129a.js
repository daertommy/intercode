"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[21266],{75631:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var o=t(3289);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),g=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=g(e.components);return o.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=g(t),d=a,h=p["".concat(l,".").concat(d)]||p[d]||s[d]||i;return t?o.createElement(h,c(c({ref:n},u),{},{components:t})):o.createElement(h,c({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=p;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,c[1]=r;for(var g=2;g<i;g++)c[g]=t[g];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},32629:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>d,Bullet:()=>s,SpecifiedBy:()=>p,assets:()=>g,contentTitle:()=>r,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var o=t(34489),a=t(3289),i=t(75631);const c={id:"signup-change-action",title:"SignupChangeAction",hide_table_of_contents:!1},r=void 0,l={unversionedId:"graphql/enums/signup-change-action",id:"graphql/enums/signup-change-action",title:"SignupChangeAction",description:"No description",source:"@site/docs/graphql/enums/signup-change-action.mdx",sourceDirName:"graphql/enums",slug:"/graphql/enums/signup-change-action",permalink:"/docs/graphql/enums/signup-change-action",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/enums/signup-change-action.mdx",tags:[],version:"current",frontMatter:{id:"signup-change-action",title:"SignupChangeAction",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"ShowSchedule",permalink:"/docs/graphql/enums/show-schedule"},next:{title:"SignupMode",permalink:"/docs/graphql/enums/signup-mode"}},g={},u=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>SignupChangeAction.<b>accept_signup_request</b></code>",id:"code-style-fontweight-normal-signupchangeactionbaccept_signup_requestbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SignupChangeAction.<b>admin_create_signup</b></code>",id:"code-style-fontweight-normal-signupchangeactionbadmin_create_signupbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SignupChangeAction.<b>change_registration_policy</b></code>",id:"code-style-fontweight-normal-signupchangeactionbchange_registration_policybcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SignupChangeAction.<b>self_service_signup</b></code>",id:"code-style-fontweight-normal-signupchangeactionbself_service_signupbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SignupChangeAction.<b>unknown</b></code>",id:"code-style-fontweight-normal-signupchangeactionbunknownbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SignupChangeAction.<b>vacancy_fill</b></code>",id:"code-style-fontweight-normal-signupchangeactionbvacancy_fillbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SignupChangeAction.<b>withdraw</b></code>",id:"code-style-fontweight-normal-signupchangeactionbwithdrawbcode",level:4},{value:"Member of",id:"member-of",level:3}],s=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{class:"badge badge--"+e.class},e.text)),h={toc:u,Bullet:s,SpecifiedBy:p,Badge:d};function f(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,o.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"enum SignupChangeAction {\n  accept_signup_request\n  admin_create_signup\n  change_registration_policy\n  self_service_signup\n  unknown\n  vacancy_fill\n  withdraw\n}\n")),(0,i.kt)("h3",{id:"values"},"Values"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-signupchangeactionbaccept_signup_requestbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SignupChangeAction.",(0,i.kt)("b",null,"accept_signup_request")))),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-signupchangeactionbadmin_create_signupbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SignupChangeAction.",(0,i.kt)("b",null,"admin_create_signup")))),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-signupchangeactionbchange_registration_policybcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SignupChangeAction.",(0,i.kt)("b",null,"change_registration_policy")))),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-signupchangeactionbself_service_signupbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SignupChangeAction.",(0,i.kt)("b",null,"self_service_signup")))),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-signupchangeactionbunknownbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SignupChangeAction.",(0,i.kt)("b",null,"unknown")))),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-signupchangeactionbvacancy_fillbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SignupChangeAction.",(0,i.kt)("b",null,"vacancy_fill")))),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-signupchangeactionbwithdrawbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SignupChangeAction.",(0,i.kt)("b",null,"withdraw")))),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/graphql/objects/signup-change"},(0,i.kt)("inlineCode",{parentName:"a"},"SignupChange")),"  ",(0,i.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);