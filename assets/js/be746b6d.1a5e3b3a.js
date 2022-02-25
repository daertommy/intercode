"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[37400],{75631:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(3289);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=i,f=m["".concat(p,".").concat(u)]||m[u]||s[u]||o;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94606:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return d},toc:function(){return s},default:function(){return u}});var r=n(14002),i=n(89922),o=(n(3289),n(75631)),a=["components"],l={id:"form-item-input",title:"FormItemInput"},p=void 0,c={unversionedId:"graphql/inputs/form-item-input",id:"graphql/inputs/form-item-input",title:"FormItemInput",description:"No description",source:"@site/docs/graphql/inputs/form-item-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/form-item-input",permalink:"/docs/graphql/inputs/form-item-input",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/form-item-input.mdx",tags:[],version:"current",frontMatter:{id:"form-item-input",title:"FormItemInput"},sidebar:"sidebar",previous:{title:"FormInput",permalink:"/docs/graphql/inputs/form-input"},next:{title:"FormSectionInput",permalink:"/docs/graphql/inputs/form-section-input"}},d={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>admin_description</code> (<code>String</code>)",id:"admin_description-string",level:4},{value:"<code>default_value</code> (<code>Json</code>)",id:"default_value-json",level:4},{value:"<code>identifier</code> (<code>String</code>)",id:"identifier-string",level:4},{value:"<code>item_type</code> (<code>String</code>)",id:"item_type-string",level:4},{value:"<code>properties</code> (<code>Json</code>)",id:"properties-json",level:4},{value:"<code>public_description</code> (<code>String</code>)",id:"public_description-string",level:4},{value:"<code>visibility</code> (<code>FormItemRole</code>)",id:"visibility-formitemrole",level:4},{value:"<code>writeability</code> (<code>FormItemRole</code>)",id:"writeability-formitemrole",level:4}],m={toc:s};function u(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type FormItemInput {\n  admin_description: String\n  default_value: Json\n  identifier: String\n  item_type: String\n  properties: Json\n  public_description: String\n  visibility: FormItemRole\n  writeability: FormItemRole\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"admin_description-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"admin_description")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"default_value-json"},(0,o.kt)("inlineCode",{parentName:"h4"},"default_value")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/json"},(0,o.kt)("inlineCode",{parentName:"a"},"Json")),")"),(0,o.kt)("h4",{id:"identifier-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"identifier")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"item_type-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"item_type")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"properties-json"},(0,o.kt)("inlineCode",{parentName:"h4"},"properties")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/json"},(0,o.kt)("inlineCode",{parentName:"a"},"Json")),")"),(0,o.kt)("h4",{id:"public_description-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"public_description")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"visibility-formitemrole"},(0,o.kt)("inlineCode",{parentName:"h4"},"visibility")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/form-item-role"},(0,o.kt)("inlineCode",{parentName:"a"},"FormItemRole")),")"),(0,o.kt)("h4",{id:"writeability-formitemrole"},(0,o.kt)("inlineCode",{parentName:"h4"},"writeability")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/form-item-role"},(0,o.kt)("inlineCode",{parentName:"a"},"FormItemRole")),")"))}u.isMDXComponent=!0}}]);