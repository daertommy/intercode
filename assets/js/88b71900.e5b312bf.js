"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[9293],{75631:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return g}});var r=n(3289);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=c(n),g=i,f=d["".concat(p,".").concat(g)]||d[g]||s[g]||a;return n?r.createElement(f,u(u({ref:t},l),{},{components:n})):r.createElement(f,u({ref:t},l))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,u=new Array(a);u[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,u[1]=o;for(var c=2;c<a;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},17457:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return l},toc:function(){return s},default:function(){return g}});var r=n(14002),i=n(89922),a=(n(3289),n(75631)),u=["components"],o={id:"create-signup-request-input",title:"CreateSignupRequestInput"},p=void 0,c={unversionedId:"graphql/inputs/create-signup-request-input",id:"graphql/inputs/create-signup-request-input",title:"CreateSignupRequestInput",description:"Autogenerated input type of CreateSignupRequest",source:"@site/docs/graphql/inputs/create-signup-request-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/create-signup-request-input",permalink:"/docs/graphql/inputs/create-signup-request-input",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/create-signup-request-input.mdx",tags:[],version:"current",frontMatter:{id:"create-signup-request-input",title:"CreateSignupRequestInput"},sidebar:"sidebar",previous:{title:"CreateRunInput",permalink:"/docs/graphql/inputs/create-run-input"},next:{title:"CreateStaffPositionInput",permalink:"/docs/graphql/inputs/create-staff-position-input"}},l={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>clientMutationId</code> (<code>String</code>)",id:"clientmutationid-string",level:4},{value:"<code>replaceSignupId</code> (<code>ID</code>)",id:"replacesignupid-id",level:4},{value:"<code>requested_bucket_key</code> (<code>String</code>)",id:"requested_bucket_key-string",level:4},{value:"<code>targetRunId</code> (<code>ID</code>)",id:"targetrunid-id",level:4}],d={toc:s};function g(e){var t=e.components,n=(0,i.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Autogenerated input type of CreateSignupRequest"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type CreateSignupRequestInput {\n  clientMutationId: String\n  replaceSignupId: ID\n  requested_bucket_key: String\n  targetRunId: ID\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"clientmutationid-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"clientMutationId")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,a.kt)("h4",{id:"replacesignupid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"replaceSignupId")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"requested_bucket_key-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"requested_bucket_key")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"targetrunid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"targetRunId")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"))}g.isMDXComponent=!0}}]);