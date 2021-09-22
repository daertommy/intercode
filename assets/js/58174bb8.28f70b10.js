"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[3526],{75631:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(3289);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=u(n),g=i,m=d["".concat(l,".").concat(g)]||d[g]||s[g]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35173:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(1629),i=n(17322),a=(n(3289),n(75631)),o=["components"],p={id:"create-organization-role-input",title:"CreateOrganizationRoleInput"},l=void 0,u={unversionedId:"graphql/inputs/create-organization-role-input",id:"graphql/inputs/create-organization-role-input",isDocsHomePage:!1,title:"CreateOrganizationRoleInput",description:"Autogenerated input type of CreateOrganizationRole",source:"@site/docs/graphql/inputs/create-organization-role-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/create-organization-role-input",permalink:"/docs/graphql/inputs/create-organization-role-input",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/create-organization-role-input.mdx",tags:[],version:"current",frontMatter:{id:"create-organization-role-input",title:"CreateOrganizationRoleInput"},sidebar:"sidebar",previous:{title:"CreateOrderInput",permalink:"/docs/graphql/inputs/create-order-input"},next:{title:"CreatePageInput",permalink:"/docs/graphql/inputs/create-page-input"}},c=[{value:"Fields",id:"fields",children:[]}],s={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Autogenerated input type of CreateOrganizationRole"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type CreateOrganizationRoleInput {\n  clientMutationId: String\n  organization_id: Int!\n  organization_role: OrganizationRoleInput!\n  permissions: [PermissionInput!]!\n  user_ids: [Int!]!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"clientmutationid-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"clientMutationId")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,a.kt)("h4",{id:"organization_id-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"organization_id")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,a.kt)("h4",{id:"organization_role-organizationroleinput"},(0,a.kt)("inlineCode",{parentName:"h4"},"organization_role")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/organization-role-input"},(0,a.kt)("inlineCode",{parentName:"a"},"OrganizationRoleInput!")),")"),(0,a.kt)("h4",{id:"permissions-permissioninput"},(0,a.kt)("inlineCode",{parentName:"h4"},"permissions")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/permission-input"},(0,a.kt)("inlineCode",{parentName:"a"},"[PermissionInput!]!")),")"),(0,a.kt)("h4",{id:"user_ids-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"user_ids")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"[Int!]!")),")"))}d.isMDXComponent=!0}}]);