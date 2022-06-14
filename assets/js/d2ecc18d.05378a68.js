"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[70106],{75631:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return f}});var n=t(3289);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,g=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return t?n.createElement(g,a(a({ref:r},s),{},{components:t})):n.createElement(g,a({ref:r},s))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},33978:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=t(75731),o=t(42706),i=(t(3289),t(75631)),a=["components"],l={id:"withdraw-all-user-con-profile-signups-payload",title:"WithdrawAllUserConProfileSignupsPayload",hide_table_of_contents:!1},c=void 0,p={unversionedId:"graphql/objects/withdraw-all-user-con-profile-signups-payload",id:"graphql/objects/withdraw-all-user-con-profile-signups-payload",title:"WithdrawAllUserConProfileSignupsPayload",description:"Autogenerated return type of WithdrawAllUserConProfileSignups",source:"@site/docs/graphql/objects/withdraw-all-user-con-profile-signups-payload.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/withdraw-all-user-con-profile-signups-payload",permalink:"/docs/graphql/objects/withdraw-all-user-con-profile-signups-payload",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/withdraw-all-user-con-profile-signups-payload.mdx",tags:[],version:"current",frontMatter:{id:"withdraw-all-user-con-profile-signups-payload",title:"WithdrawAllUserConProfileSignupsPayload",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"UsersPagination",permalink:"/docs/graphql/objects/users-pagination"},next:{title:"WithdrawMySignupPayload",permalink:"/docs/graphql/objects/withdraw-my-signup-payload"}},s={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>clientMutationId</code> (<code>String</code>)",id:"clientmutationid-string",level:4},{value:"<code>user_con_profile</code> (<code>UserConProfile!</code>)",id:"user_con_profile-userconprofile",level:4}],d={toc:u};function f(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Autogenerated return type of WithdrawAllUserConProfileSignups"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type WithdrawAllUserConProfileSignupsPayload {\n  clientMutationId: String\n  user_con_profile: UserConProfile!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"clientmutationid-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"clientMutationId"))," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,i.kt)("h4",{id:"user_con_profile-userconprofile"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"user_con_profile"))," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/user-con-profile"},(0,i.kt)("inlineCode",{parentName:"a"},"UserConProfile!")),")"))}f.isMDXComponent=!0}}]);