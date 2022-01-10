"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[12002],{75631:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(3289);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(t),m=i,v=s["".concat(l,".").concat(m)]||s[m]||d[m]||o;return t?r.createElement(v,a(a({ref:n},u),{},{components:t})):r.createElement(v,a({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=s;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},36846:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var r=t(97390),i=t(14184),o=(t(3289),t(75631)),a=["components"],c={id:"create-convention-input",title:"CreateConventionInput"},l=void 0,p={unversionedId:"graphql/inputs/create-convention-input",id:"graphql/inputs/create-convention-input",title:"CreateConventionInput",description:"Autogenerated input type of CreateConvention",source:"@site/docs/graphql/inputs/create-convention-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/create-convention-input",permalink:"/docs/graphql/inputs/create-convention-input",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/create-convention-input.mdx",tags:[],version:"current",frontMatter:{id:"create-convention-input",title:"CreateConventionInput"},sidebar:"sidebar",previous:{title:"CreateCmsPartialInput",permalink:"/docs/graphql/inputs/create-cms-partial-input"},next:{title:"CreateConventionStripeAccountInput",permalink:"/docs/graphql/inputs/create-convention-stripe-account-input"}},u=[{value:"Fields",id:"fields",children:[{value:"<code>clientMutationId</code> (String)",id:"clientmutationid-string",children:[],level:4},{value:"<code>cloneConventionId</code> (ID)",id:"cloneconventionid-id",children:[],level:4},{value:"<code>cms_content_set_name</code> (String)",id:"cms_content_set_name-string",children:[],level:4},{value:"<code>convention</code> (ConventionInput)",id:"convention-conventioninput",children:[],level:4},{value:"<code>organizationId</code> (ID)",id:"organizationid-id",children:[],level:4}],level:3}],d={toc:u};function s(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Autogenerated input type of CreateConvention"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type CreateConventionInput {\n  clientMutationId: String\n  cloneConventionId: ID\n  cms_content_set_name: String\n  convention: ConventionInput!\n  organizationId: ID\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"clientmutationid-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"clientMutationId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,o.kt)("h4",{id:"cloneconventionid-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"cloneConventionId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,o.kt)("h4",{id:"cms_content_set_name-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"cms_content_set_name")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"convention-conventioninput"},(0,o.kt)("inlineCode",{parentName:"h4"},"convention")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/convention-input"},(0,o.kt)("inlineCode",{parentName:"a"},"ConventionInput")),")"),(0,o.kt)("h4",{id:"organizationid-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"organizationId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"))}s.isMDXComponent=!0}}]);