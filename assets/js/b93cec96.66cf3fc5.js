"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[12580],{75631:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(3289);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=s(n),u=r,m=h["".concat(c,".").concat(u)]||h[u]||p[u]||i;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},63679:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return h}});var a=n(88078),r=n(65844),i=(n(3289),n(75631)),l=["components"],o={id:"cms-layout",title:"CmsLayout"},c=void 0,s={unversionedId:"graphql/objects/cms-layout",id:"graphql/objects/cms-layout",isDocsHomePage:!1,title:"CmsLayout",description:"No description",source:"@site/docs/graphql/objects/cms-layout.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/cms-layout",permalink:"/docs/graphql/objects/cms-layout",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/cms-layout.mdx",tags:[],version:"current",frontMatter:{id:"cms-layout",title:"CmsLayout"},sidebar:"sidebar",previous:{title:"CmsGraphqlQuery",permalink:"/docs/graphql/objects/cms-graphql-query"},next:{title:"CmsNavigationItem",permalink:"/docs/graphql/objects/cms-navigation-item"}},d=[{value:"Fields",id:"fields",children:[{value:"<code>admin_notes</code> (String)",id:"admin_notes-string",children:[],level:4},{value:"<code>content</code> (String)",id:"content-string",children:[],level:4},{value:"<code>content_html</code> (String)",id:"content_html-string",children:[],level:4},{value:"<code>content_html_with_placeholders</code> (String)",id:"content_html_with_placeholders-string",children:[],level:4},{value:"<code>current_ability_can_delete</code> (Boolean!)",id:"current_ability_can_delete-boolean",children:[],level:4},{value:"<code>current_ability_can_update</code> (Boolean!)",id:"current_ability_can_update-boolean",children:[],level:4},{value:"<code>id</code> (Int!)",id:"id-int",children:[],level:4},{value:"<code>name</code> (String)",id:"name-string",children:[],level:4},{value:"<code>navbar_classes</code> (String)",id:"navbar_classes-string",children:[],level:4},{value:"<code>transitionalId</code> (ID!)",id:"transitionalid-id",children:[],level:4}],level:3}],p={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type CmsLayout {\n  admin_notes: String\n  content: String\n  content_html(path: String): String\n  content_html_with_placeholders(path: String): String\n  current_ability_can_delete: Boolean!\n  current_ability_can_update: Boolean!\n  id: Int!\n  name: String\n  navbar_classes: String\n  transitionalId: ID!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"admin_notes-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"admin_notes")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"content-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"content")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"content_html-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"content_html")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"path-string"},(0,i.kt)("inlineCode",{parentName:"h5"},"path")," (",(0,i.kt)("a",{parentName:"h5",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,i.kt)("h4",{id:"content_html_with_placeholders-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"content_html_with_placeholders")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"path-string-1"},(0,i.kt)("inlineCode",{parentName:"h5"},"path")," (",(0,i.kt)("a",{parentName:"h5",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,i.kt)("h4",{id:"current_ability_can_delete-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"current_ability_can_delete")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean!")),")"),(0,i.kt)("h4",{id:"current_ability_can_update-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"current_ability_can_update")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean!")),")"),(0,i.kt)("h4",{id:"id-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,i.kt)("span",{class:"badge badge--warning"},"DEPRECATED: IDs are transitioning to the ID type. For the moment, please use the transitionalId field until all id fields are replaced with ones of type ID."),(0,i.kt)("h4",{id:"name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"navbar_classes-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"navbar_classes")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"transitionalid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"transitionalId")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!")),")"))}h.isMDXComponent=!0}}]);