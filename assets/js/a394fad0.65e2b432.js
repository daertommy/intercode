"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[78740],{75631:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(3289);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),a=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=a(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=a(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||l[d]||i;return n?r.createElement(f,p(p({ref:t},s),{},{components:n})):r.createElement(f,p({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,p=new Array(i);p[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,p[1]=u;for(var a=2;a<i;a++)p[a]=n[a];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53536:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return a},toc:function(){return s},default:function(){return m}});var r=n(14002),o=n(89922),i=(n(3289),n(75631)),p=["components"],u={id:"create-cms-content-group-input",title:"CreateCmsContentGroupInput"},c=void 0,a={unversionedId:"graphql/inputs/create-cms-content-group-input",id:"graphql/inputs/create-cms-content-group-input",title:"CreateCmsContentGroupInput",description:"Autogenerated input type of CreateCmsContentGroup",source:"@site/docs/graphql/inputs/create-cms-content-group-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/create-cms-content-group-input",permalink:"/docs/graphql/inputs/create-cms-content-group-input",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/create-cms-content-group-input.mdx",tags:[],version:"current",frontMatter:{id:"create-cms-content-group-input",title:"CreateCmsContentGroupInput"},sidebar:"sidebar",previous:{title:"CouponInput",permalink:"/docs/graphql/inputs/coupon-input"},next:{title:"CreateCmsFileInput",permalink:"/docs/graphql/inputs/create-cms-file-input"}},s=[{value:"Fields",id:"fields",children:[{value:"<code>clientMutationId</code> (String)",id:"clientmutationid-string",children:[],level:4},{value:"<code>cms_content_group</code> (CmsContentGroupInput)",id:"cms_content_group-cmscontentgroupinput",children:[],level:4},{value:"<code>permissions</code> (PermissionInput)",id:"permissions-permissioninput",children:[],level:4}],level:3}],l={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Autogenerated input type of CreateCmsContentGroup"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type CreateCmsContentGroupInput {\n  clientMutationId: String\n  cms_content_group: CmsContentGroupInput!\n  permissions: [PermissionInput!]\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"clientmutationid-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"clientMutationId")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,i.kt)("h4",{id:"cms_content_group-cmscontentgroupinput"},(0,i.kt)("inlineCode",{parentName:"h4"},"cms_content_group")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/cms-content-group-input"},(0,i.kt)("inlineCode",{parentName:"a"},"CmsContentGroupInput")),")"),(0,i.kt)("h4",{id:"permissions-permissioninput"},(0,i.kt)("inlineCode",{parentName:"h4"},"permissions")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/permission-input"},(0,i.kt)("inlineCode",{parentName:"a"},"PermissionInput")),")"))}m.isMDXComponent=!0}}]);