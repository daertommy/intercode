"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[69104],{75631:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return g}});var a=t(3289);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),d=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=d(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=d(t),g=r,h=s["".concat(p,".").concat(g)]||s[g]||u[g]||o;return t?a.createElement(h,i(i({ref:n},l),{},{components:t})):a.createElement(h,i({ref:n},l))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=s;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},19743:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return u}});var a=t(75731),r=t(42706),o=(t(3289),t(75631)),i=["components"],c={id:"signup-change",title:"SignupChange",hide_table_of_contents:!1},p=void 0,d={unversionedId:"graphql/objects/signup-change",id:"graphql/objects/signup-change",title:"SignupChange",description:"No description",source:"@site/docs/graphql/objects/signup-change.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/signup-change",permalink:"/docs/graphql/objects/signup-change",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/signup-change.mdx",tags:[],version:"current",frontMatter:{id:"signup-change",title:"SignupChange",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"SetConventionCanceledPayload",permalink:"/docs/graphql/objects/set-convention-canceled-payload"},next:{title:"SignupChangesPagination",permalink:"/docs/graphql/objects/signup-changes-pagination"}},l={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>action</code> (<code>SignupChangeAction!</code>)",id:"action-signupchangeaction",level:4},{value:"<code>bucket_key</code> (<code>String</code>)",id:"bucket_key-string",level:4},{value:"<code>counted</code> (<code>Boolean!</code>)",id:"counted-boolean",level:4},{value:"<code>created_at</code> (<code>Date!</code>)",id:"created_at-date",level:4},{value:"<code>id</code> (<code>ID!</code>)",id:"id-id",level:4},{value:"<code>previous_signup_change</code> (<code>SignupChange</code>)",id:"previous_signup_change-signupchange",level:4},{value:"<code>run</code> (<code>Run!</code>)",id:"run-run",level:4},{value:"<code>signup</code> (<code>Signup!</code>)",id:"signup-signup",level:4},{value:"<code>state</code> (<code>SignupState!</code>)",id:"state-signupstate",level:4},{value:"<code>updated_at</code> (<code>Date!</code>)",id:"updated_at-date",level:4},{value:"<code>user_con_profile</code> (<code>UserConProfile!</code>)",id:"user_con_profile-userconprofile",level:4}],s={toc:u};function g(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type SignupChange {\n  action: SignupChangeAction!\n  bucket_key: String\n  counted: Boolean!\n  created_at: Date!\n  id: ID!\n  previous_signup_change: SignupChange\n  run: Run!\n  signup: Signup!\n  state: SignupState!\n  updated_at: Date!\n  user_con_profile: UserConProfile!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"action-signupchangeaction"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"action"))," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/signup-change-action"},(0,o.kt)("inlineCode",{parentName:"a"},"SignupChangeAction!")),")"),(0,o.kt)("h4",{id:"bucket_key-string"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"bucket_key"))," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"counted-boolean"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"counted"))," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean!")),")"),(0,o.kt)("h4",{id:"created_at-date"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"created_at"))," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date!")),")"),(0,o.kt)("h4",{id:"id-id"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,o.kt)("h4",{id:"previous_signup_change-signupchange"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"previous_signup_change"))," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/signup-change"},(0,o.kt)("inlineCode",{parentName:"a"},"SignupChange")),")"),(0,o.kt)("h4",{id:"run-run"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"run"))," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/run"},(0,o.kt)("inlineCode",{parentName:"a"},"Run!")),")"),(0,o.kt)("h4",{id:"signup-signup"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"signup"))," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/signup"},(0,o.kt)("inlineCode",{parentName:"a"},"Signup!")),")"),(0,o.kt)("h4",{id:"state-signupstate"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"state"))," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/signup-state"},(0,o.kt)("inlineCode",{parentName:"a"},"SignupState!")),")"),(0,o.kt)("h4",{id:"updated_at-date"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"updated_at"))," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date!")),")"),(0,o.kt)("h4",{id:"user_con_profile-userconprofile"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"user_con_profile"))," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/user-con-profile"},(0,o.kt)("inlineCode",{parentName:"a"},"UserConProfile!")),")"))}g.isMDXComponent=!0}}]);