"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[50190],{75631:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var i=t(3289);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),u=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return i.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},s=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(t),f=r,v=s["".concat(c,".").concat(f)]||s[f]||d[f]||o;return t?i.createElement(v,a(a({ref:n},l),{},{components:t})):i.createElement(v,a({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=s;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var u=2;u<o;u++)a[u]=t[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}s.displayName="MDXCreateElement"},82473:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return s}});var i=t(88078),r=t(65844),o=(t(3289),t(75631)),a=["components"],p={id:"update-convention-input",title:"UpdateConventionInput"},c=void 0,u={unversionedId:"graphql/inputs/update-convention-input",id:"graphql/inputs/update-convention-input",isDocsHomePage:!1,title:"UpdateConventionInput",description:"Autogenerated input type of UpdateConvention",source:"@site/docs/graphql/inputs/update-convention-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/update-convention-input",permalink:"/docs/graphql/inputs/update-convention-input",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/update-convention-input.mdx",tags:[],version:"current",frontMatter:{id:"update-convention-input",title:"UpdateConventionInput"},sidebar:"sidebar",previous:{title:"UpdateCmsPartialInput",permalink:"/docs/graphql/inputs/update-cms-partial-input"},next:{title:"UpdateCouponInput",permalink:"/docs/graphql/inputs/update-coupon-input"}},l=[{value:"Fields",id:"fields",children:[{value:"<code>clientMutationId</code> (String)",id:"clientmutationid-string",children:[],level:4},{value:"<code>convention</code> (ConventionInput!)",id:"convention-conventioninput",children:[],level:4},{value:"<code>id</code> (Int)",id:"id-int",children:[],level:4},{value:"<code>transitionalId</code> (ID)",id:"transitionalid-id",children:[],level:4}],level:3}],d={toc:l};function s(e){var n=e.components,t=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Autogenerated input type of UpdateConvention"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type UpdateConventionInput {\n  clientMutationId: String\n  convention: ConventionInput!\n  id: Int\n  transitionalId: ID\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"clientmutationid-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"clientMutationId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,o.kt)("h4",{id:"convention-conventioninput"},(0,o.kt)("inlineCode",{parentName:"h4"},"convention")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/convention-input"},(0,o.kt)("inlineCode",{parentName:"a"},"ConventionInput!")),")"),(0,o.kt)("h4",{id:"id-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("h4",{id:"transitionalid-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"transitionalId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"))}s.isMDXComponent=!0}}]);