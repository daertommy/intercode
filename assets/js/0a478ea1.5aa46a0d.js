"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[25030],{75631:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(3289);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return t?r.createElement(g,o(o({ref:n},s),{},{components:t})):r.createElement(g,o({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},32990:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var r=t(88078),a=t(65844),i=(t(3289),t(75631)),o=["components"],l={id:"page-input",title:"PageInput"},c=void 0,p={unversionedId:"graphql/inputs/page-input",id:"graphql/inputs/page-input",isDocsHomePage:!1,title:"PageInput",description:"No description",source:"@site/docs/graphql/inputs/page-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/page-input",permalink:"/docs/graphql/inputs/page-input",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/page-input.mdx",tags:[],version:"current",frontMatter:{id:"page-input",title:"PageInput"},sidebar:"sidebar",previous:{title:"OrganizationRoleInput",permalink:"/docs/graphql/inputs/organization-role-input"},next:{title:"PermissionInput",permalink:"/docs/graphql/inputs/permission-input"}},s=[{value:"Fields",id:"fields",children:[{value:"<code>admin_notes</code> (String)",id:"admin_notes-string",children:[],level:4},{value:"<code>cms_layout_id</code> (Int)",id:"cms_layout_id-int",children:[],level:4},{value:"<code>content</code> (String)",id:"content-string",children:[],level:4},{value:"<code>hidden_from_search</code> (Boolean)",id:"hidden_from_search-boolean",children:[],level:4},{value:"<code>name</code> (String)",id:"name-string",children:[],level:4},{value:"<code>skip_clickwrap_agreement</code> (Boolean)",id:"skip_clickwrap_agreement-boolean",children:[],level:4},{value:"<code>slug</code> (String)",id:"slug-string",children:[],level:4},{value:"<code>transitionalCmsLayoutId</code> (ID)",id:"transitionalcmslayoutid-id",children:[],level:4}],level:3}],d={toc:s};function u(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type PageInput {\n  admin_notes: String\n  cms_layout_id: Int\n  content: String\n  hidden_from_search: Boolean\n  name: String\n  skip_clickwrap_agreement: Boolean\n  slug: String\n  transitionalCmsLayoutId: ID\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"admin_notes-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"admin_notes")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"cms_layout_id-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"cms_layout_id")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"content-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"content")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"hidden_from_search-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"hidden_from_search")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"skip_clickwrap_agreement-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"skip_clickwrap_agreement")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"slug-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"slug")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"transitionalcmslayoutid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"transitionalCmsLayoutId")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"))}u.isMDXComponent=!0}}]);