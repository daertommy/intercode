"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[2352],{75631:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var r=n(3289);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),g=a,h=c["".concat(s,".").concat(g)]||c[g]||p[g]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},95591:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var r=n(1629),a=n(17322),i=(n(3289),n(75631)),o=["components"],l={id:"signup-request",title:"SignupRequest"},s=void 0,u={unversionedId:"graphql/objects/signup-request",id:"graphql/objects/signup-request",isDocsHomePage:!1,title:"SignupRequest",description:"No description",source:"@site/docs/graphql/objects/signup-request.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/signup-request",permalink:"/docs/graphql/objects/signup-request",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/signup-request.mdx",tags:[],version:"current",frontMatter:{id:"signup-request",title:"SignupRequest"},sidebar:"sidebar",previous:{title:"SignupMoveResult",permalink:"/docs/graphql/objects/signup-move-result"},next:{title:"SignupRequestsPagination",permalink:"/docs/graphql/objects/signup-requests-pagination"}},d=[{value:"Fields",id:"fields",children:[{value:"<code>created_at</code> (Date!)",id:"created_at-date",children:[],level:4},{value:"<code>id</code> (Int!)",id:"id-int",children:[],level:4},{value:"<code>replace_signup</code> (Signup)",id:"replace_signup-signup",children:[],level:4},{value:"<code>requested_bucket_key</code> (String)",id:"requested_bucket_key-string",children:[],level:4},{value:"<code>result_signup</code> (Signup)",id:"result_signup-signup",children:[],level:4},{value:"<code>state</code> (SignupRequestState!)",id:"state-signuprequeststate",children:[],level:4},{value:"<code>target_run</code> (Run!)",id:"target_run-run",children:[],level:4},{value:"<code>transitionalId</code> (ID!)",id:"transitionalid-id",children:[],level:4},{value:"<code>updated_at</code> (Date!)",id:"updated_at-date",children:[],level:4},{value:"<code>updated_by</code> (User!)",id:"updated_by-user",children:[],level:4},{value:"<code>user_con_profile</code> (UserConProfile!)",id:"user_con_profile-userconprofile",children:[],level:4}],level:3}],p={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type SignupRequest {\n  created_at: Date!\n  id: Int!\n  replace_signup: Signup\n  requested_bucket_key: String\n  result_signup: Signup\n  state: SignupRequestState!\n  target_run: Run!\n  transitionalId: ID!\n  updated_at: Date!\n  updated_by: User!\n  user_con_profile: UserConProfile!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"created_at-date"},(0,i.kt)("inlineCode",{parentName:"h4"},"created_at")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/date"},(0,i.kt)("inlineCode",{parentName:"a"},"Date!")),")"),(0,i.kt)("h4",{id:"id-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,i.kt)("span",{class:"badge badge--warning"},"DEPRECATED: IDs are transitioning to the ID type. For the moment, please use the transitionalId field until all id fields are replaced with ones of type ID."),(0,i.kt)("h4",{id:"replace_signup-signup"},(0,i.kt)("inlineCode",{parentName:"h4"},"replace_signup")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/signup"},(0,i.kt)("inlineCode",{parentName:"a"},"Signup")),")"),(0,i.kt)("h4",{id:"requested_bucket_key-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"requested_bucket_key")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"result_signup-signup"},(0,i.kt)("inlineCode",{parentName:"h4"},"result_signup")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/signup"},(0,i.kt)("inlineCode",{parentName:"a"},"Signup")),")"),(0,i.kt)("h4",{id:"state-signuprequeststate"},(0,i.kt)("inlineCode",{parentName:"h4"},"state")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/signup-request-state"},(0,i.kt)("inlineCode",{parentName:"a"},"SignupRequestState!")),")"),(0,i.kt)("h4",{id:"target_run-run"},(0,i.kt)("inlineCode",{parentName:"h4"},"target_run")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/run"},(0,i.kt)("inlineCode",{parentName:"a"},"Run!")),")"),(0,i.kt)("h4",{id:"transitionalid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"transitionalId")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,i.kt)("h4",{id:"updated_at-date"},(0,i.kt)("inlineCode",{parentName:"h4"},"updated_at")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/date"},(0,i.kt)("inlineCode",{parentName:"a"},"Date!")),")"),(0,i.kt)("h4",{id:"updated_by-user"},(0,i.kt)("inlineCode",{parentName:"h4"},"updated_by")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/user"},(0,i.kt)("inlineCode",{parentName:"a"},"User!")),")"),(0,i.kt)("h4",{id:"user_con_profile-userconprofile"},(0,i.kt)("inlineCode",{parentName:"h4"},"user_con_profile")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/user-con-profile"},(0,i.kt)("inlineCode",{parentName:"a"},"UserConProfile!")),")"))}c.isMDXComponent=!0}}]);