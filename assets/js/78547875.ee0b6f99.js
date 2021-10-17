"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[45132],{75631:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var r=n(3289);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(n),g=a,f=s["".concat(c,".").concat(g)]||s[g]||u[g]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},57909:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return s}});var r=n(1629),a=n(17322),o=(n(3289),n(75631)),i=["components"],l={id:"update-organization-role-payload",title:"UpdateOrganizationRolePayload"},c=void 0,p={unversionedId:"graphql/objects/update-organization-role-payload",id:"graphql/objects/update-organization-role-payload",isDocsHomePage:!1,title:"UpdateOrganizationRolePayload",description:"Autogenerated return type of UpdateOrganizationRole",source:"@site/docs/graphql/objects/update-organization-role-payload.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/update-organization-role-payload",permalink:"/docs/graphql/objects/update-organization-role-payload",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/update-organization-role-payload.mdx",tags:[],version:"current",frontMatter:{id:"update-organization-role-payload",title:"UpdateOrganizationRolePayload"},sidebar:"sidebar",previous:{title:"UpdateOrderPayload",permalink:"/docs/graphql/objects/update-order-payload"},next:{title:"UpdatePagePayload",permalink:"/docs/graphql/objects/update-page-payload"}},d=[{value:"Fields",id:"fields",children:[{value:"<code>clientMutationId</code> (String)",id:"clientmutationid-string",children:[],level:4},{value:"<code>organization_role</code> (OrganizationRole!)",id:"organization_role-organizationrole",children:[],level:4}],level:3}],u={toc:d};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Autogenerated return type of UpdateOrganizationRole"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type UpdateOrganizationRolePayload {\n  clientMutationId: String\n  organization_role: OrganizationRole!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"clientmutationid-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"clientMutationId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,o.kt)("h4",{id:"organization_role-organizationrole"},(0,o.kt)("inlineCode",{parentName:"h4"},"organization_role")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/organization-role"},(0,o.kt)("inlineCode",{parentName:"a"},"OrganizationRole!")),")"))}s.isMDXComponent=!0}}]);