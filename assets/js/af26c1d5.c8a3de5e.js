"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[45699],{75631:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(3289);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=l(t),m=i,g=c["".concat(p,".").concat(m)]||c[m]||u[m]||a;return t?r.createElement(g,o(o({ref:n},s),{},{components:t})):r.createElement(g,o({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=c;var d={};for(var p in n)hasOwnProperty.call(n,p)&&(d[p]=n[p]);d.originalType=e,d.mdxType="string"==typeof e?e:i,o[1]=d;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},38668:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var r=t(97390),i=t(14184),a=(t(3289),t(75631)),o=["components"],d={id:"update-organization-role-input",title:"UpdateOrganizationRoleInput"},p=void 0,l={unversionedId:"graphql/inputs/update-organization-role-input",id:"graphql/inputs/update-organization-role-input",title:"UpdateOrganizationRoleInput",description:"Autogenerated input type of UpdateOrganizationRole",source:"@site/docs/graphql/inputs/update-organization-role-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/update-organization-role-input",permalink:"/docs/graphql/inputs/update-organization-role-input",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/update-organization-role-input.mdx",tags:[],version:"current",frontMatter:{id:"update-organization-role-input",title:"UpdateOrganizationRoleInput"},sidebar:"sidebar",previous:{title:"UpdateOrderInput",permalink:"/docs/graphql/inputs/update-order-input"},next:{title:"UpdatePageInput",permalink:"/docs/graphql/inputs/update-page-input"}},s=[{value:"Fields",id:"fields",children:[{value:"<code>addUserIds</code> (ID)",id:"adduserids-id",children:[],level:4},{value:"<code>add_permissions</code> (PermissionInput)",id:"add_permissions-permissioninput",children:[],level:4},{value:"<code>clientMutationId</code> (String)",id:"clientmutationid-string",children:[],level:4},{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>organization_role</code> (OrganizationRoleInput)",id:"organization_role-organizationroleinput",children:[],level:4},{value:"<code>removePermissionIds</code> (ID)",id:"removepermissionids-id",children:[],level:4},{value:"<code>removeUserIds</code> (ID)",id:"removeuserids-id",children:[],level:4}],level:3}],u={toc:s};function c(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Autogenerated input type of UpdateOrganizationRole"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type UpdateOrganizationRoleInput {\n  addUserIds: [ID!]\n  add_permissions: [PermissionInput!]\n  clientMutationId: String\n  id: ID\n  organization_role: OrganizationRoleInput!\n  removePermissionIds: [ID!]\n  removeUserIds: [ID!]\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"adduserids-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"addUserIds")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"add_permissions-permissioninput"},(0,a.kt)("inlineCode",{parentName:"h4"},"add_permissions")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/permission-input"},(0,a.kt)("inlineCode",{parentName:"a"},"PermissionInput")),")"),(0,a.kt)("h4",{id:"clientmutationid-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"clientMutationId")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,a.kt)("h4",{id:"id-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"organization_role-organizationroleinput"},(0,a.kt)("inlineCode",{parentName:"h4"},"organization_role")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/organization-role-input"},(0,a.kt)("inlineCode",{parentName:"a"},"OrganizationRoleInput")),")"),(0,a.kt)("h4",{id:"removepermissionids-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"removePermissionIds")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"removeuserids-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"removeUserIds")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"))}c.isMDXComponent=!0}}]);