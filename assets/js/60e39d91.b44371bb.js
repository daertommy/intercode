"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[23524],{75631:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(3289);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,h=m["".concat(c,".").concat(u)]||m[u]||p[u]||o;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90362:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},assets:function(){return s},toc:function(){return p},default:function(){return u}});var a=n(14002),r=n(89922),o=(n(3289),n(75631)),i=["components"],l={id:"page",title:"Page"},c=void 0,d={unversionedId:"graphql/objects/page",id:"graphql/objects/page",title:"Page",description:"No description",source:"@site/docs/graphql/objects/page.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/page",permalink:"/docs/graphql/objects/page",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/page.mdx",tags:[],version:"current",frontMatter:{id:"page",title:"Page"},sidebar:"sidebar",previous:{title:"Organization",permalink:"/docs/graphql/objects/organization"},next:{title:"Permission",permalink:"/docs/graphql/objects/permission"}},s={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>admin_notes</code> (<code>String</code>)",id:"admin_notes-string",level:4},{value:"<code>cms_layout</code> (<code>CmsLayout</code>)",id:"cms_layout-cmslayout",level:4},{value:"<code>content</code> (<code>String</code>)",id:"content-string",level:4},{value:"<code>content_html</code> (<code>String</code>)",id:"content_html-string",level:4},{value:"<code>current_ability_can_delete</code> (<code>Boolean</code>)",id:"current_ability_can_delete-boolean",level:4},{value:"<code>current_ability_can_update</code> (<code>Boolean</code>)",id:"current_ability_can_update-boolean",level:4},{value:"<code>hidden_from_search</code> (<code>Boolean</code>)",id:"hidden_from_search-boolean",level:4},{value:"<code>id</code> (<code>ID</code>)",id:"id-id",level:4},{value:"<code>name</code> (<code>String</code>)",id:"name-string",level:4},{value:"<code>referenced_partials</code> (<code>CmsPartial</code>)",id:"referenced_partials-cmspartial",level:4},{value:"<code>skip_clickwrap_agreement</code> (<code>Boolean</code>)",id:"skip_clickwrap_agreement-boolean",level:4},{value:"<code>slug</code> (<code>String</code>)",id:"slug-string",level:4}],m={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Page {\n  admin_notes: String\n  cms_layout: CmsLayout\n  content: String\n  content_html: String!\n  current_ability_can_delete: Boolean!\n  current_ability_can_update: Boolean!\n  hidden_from_search: Boolean!\n  id: ID!\n  name: String\n  referenced_partials: [CmsPartial!]!\n  skip_clickwrap_agreement: Boolean\n  slug: String\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"admin_notes-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"admin_notes")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"cms_layout-cmslayout"},(0,o.kt)("inlineCode",{parentName:"h4"},"cms_layout")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/cms-layout"},(0,o.kt)("inlineCode",{parentName:"a"},"CmsLayout")),")"),(0,o.kt)("h4",{id:"content-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"content")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"content_html-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"content_html")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"current_ability_can_delete-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"current_ability_can_delete")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,o.kt)("h4",{id:"current_ability_can_update-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"current_ability_can_update")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,o.kt)("h4",{id:"hidden_from_search-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"hidden_from_search")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,o.kt)("h4",{id:"id-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,o.kt)("h4",{id:"name-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"referenced_partials-cmspartial"},(0,o.kt)("inlineCode",{parentName:"h4"},"referenced_partials")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/cms-partial"},(0,o.kt)("inlineCode",{parentName:"a"},"CmsPartial")),")"),(0,o.kt)("h4",{id:"skip_clickwrap_agreement-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"skip_clickwrap_agreement")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,o.kt)("h4",{id:"slug-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"slug")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"))}u.isMDXComponent=!0}}]);