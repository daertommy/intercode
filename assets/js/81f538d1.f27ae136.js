"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[13027],{75631:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(3289);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(r),f=o,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||a;return r?n.createElement(d,c(c({ref:t},s),{},{components:r})):n.createElement(d,c({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},74702:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return s},toc:function(){return p},default:function(){return f}});var n=r(14002),o=r(89922),a=(r(3289),r(75631)),c=["components"],i={id:"account-form-content-html",title:"accountFormContentHtml"},l=void 0,u={unversionedId:"graphql/queries/account-form-content-html",id:"graphql/queries/account-form-content-html",title:"accountFormContentHtml",description:"If there is a CMS partial on the root site called accountformtext, renders it to HTML",source:"@site/docs/graphql/queries/account-form-content-html.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/account-form-content-html",permalink:"/docs/graphql/queries/account-form-content-html",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/queries/account-form-content-html.mdx",tags:[],version:"current",frontMatter:{id:"account-form-content-html",title:"accountFormContentHtml"},sidebar:"sidebar",previous:{title:"WithdrawUserSignupPayload",permalink:"/docs/graphql/objects/withdraw-user-signup-payload"},next:{title:"assumedIdentityFromProfile",permalink:"/docs/graphql/queries/assumed-identity-from-profile"}},s={},p=[{value:"Type",id:"type",level:3},{value:"<code>String</code>",id:"string",level:4}],m={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If there is a CMS partial on the root site called ",(0,a.kt)("inlineCode",{parentName:"p"},"account_form_text"),", renders it to HTML\nand returns the result. Otherwise, returns null."),(0,a.kt)("p",null,'This is used by the "update your account" pages as a way to clarify that your account is\nshared between multiple conventions.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"accountFormContentHtml: String\n\n")),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"string"},(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String"))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"String")," scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text."))}f.isMDXComponent=!0}}]);