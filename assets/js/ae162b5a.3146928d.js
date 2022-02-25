"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[3159],{75631:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(3289);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=p(r),f=i,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||o;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},42115:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return l},toc:function(){return s},default:function(){return f}});var n=r(14002),i=r(89922),o=(r(3289),r(75631)),a=["components"],u={id:"create-user-con-profile-input",title:"CreateUserConProfileInput"},c=void 0,p={unversionedId:"graphql/inputs/create-user-con-profile-input",id:"graphql/inputs/create-user-con-profile-input",title:"CreateUserConProfileInput",description:"Autogenerated input type of CreateUserConProfile",source:"@site/docs/graphql/inputs/create-user-con-profile-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/create-user-con-profile-input",permalink:"/docs/graphql/inputs/create-user-con-profile-input",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/create-user-con-profile-input.mdx",tags:[],version:"current",frontMatter:{id:"create-user-con-profile-input",title:"CreateUserConProfileInput"},sidebar:"sidebar",previous:{title:"CreateUserActivityAlertInput",permalink:"/docs/graphql/inputs/create-user-activity-alert-input"},next:{title:"CreateUserSignupInput",permalink:"/docs/graphql/inputs/create-user-signup-input"}},l={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>clientMutationId</code> (<code>String</code>)",id:"clientmutationid-string",level:4},{value:"<code>userId</code> (<code>ID</code>)",id:"userid-id",level:4},{value:"<code>user_con_profile</code> (<code>UserConProfileInput</code>)",id:"user_con_profile-userconprofileinput",level:4}],d={toc:s};function f(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Autogenerated input type of CreateUserConProfile"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type CreateUserConProfileInput {\n  clientMutationId: String\n  userId: ID\n  user_con_profile: UserConProfileInput!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"clientmutationid-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"clientMutationId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,o.kt)("h4",{id:"userid-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"userId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,o.kt)("h4",{id:"user_con_profile-userconprofileinput"},(0,o.kt)("inlineCode",{parentName:"h4"},"user_con_profile")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/user-con-profile-input"},(0,o.kt)("inlineCode",{parentName:"a"},"UserConProfileInput")),")"))}f.isMDXComponent=!0}}]);