"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[74959],{75631:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return s}});var r=n(3289);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=d(n),s=i,f=m["".concat(p,".").concat(s)]||m[s]||u[s]||o;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11809:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return u}});var r=n(75731),i=n(42706),o=(n(3289),n(75631)),a=["components"],c={id:"move-form-item-input",title:"MoveFormItemInput",hide_table_of_contents:!1},p=void 0,d={unversionedId:"graphql/inputs/move-form-item-input",id:"graphql/inputs/move-form-item-input",title:"MoveFormItemInput",description:"Autogenerated input type of MoveFormItem",source:"@site/docs/graphql/inputs/move-form-item-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/move-form-item-input",permalink:"/docs/graphql/inputs/move-form-item-input",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/move-form-item-input.mdx",tags:[],version:"current",frontMatter:{id:"move-form-item-input",title:"MoveFormItemInput",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"MoneyInput",permalink:"/docs/graphql/inputs/money-input"},next:{title:"MoveFormSectionInput",permalink:"/docs/graphql/inputs/move-form-section-input"}},l={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>clientMutationId</code> (<code>String</code>)",id:"clientmutationid-string",level:4},{value:"<code>destination_index</code> (<code>Int</code>)",id:"destination_index-int",level:4},{value:"<code>formSectionId</code> (<code>ID</code>)",id:"formsectionid-id",level:4},{value:"<code>id</code> (<code>ID</code>)",id:"id-id",level:4}],m={toc:u};function s(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Autogenerated input type of MoveFormItem"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input MoveFormItemInput {\n  clientMutationId: String\n  destination_index: Int\n  formSectionId: ID\n  id: ID\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"clientmutationid-string"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"clientMutationId"))," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,o.kt)("h4",{id:"destination_index-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"destination_index"))," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("h4",{id:"formsectionid-id"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"formSectionId"))," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,o.kt)("h4",{id:"id-id"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"))}s.isMDXComponent=!0}}]);