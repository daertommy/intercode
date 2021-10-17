"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[23933],{75631:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(3289);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=i,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},93989:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var n=r(1629),i=r(17322),o=(r(3289),r(75631)),a=["components"],l={id:"form",title:"form"},c=void 0,s={unversionedId:"graphql/queries/form",id:"graphql/queries/form",isDocsHomePage:!1,title:"form",description:"DEPRECATED: Domain-specific queries are being deprecated. Please use the form field on the Convention object instead.",source:"@site/docs/graphql/queries/form.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/form",permalink:"/docs/graphql/queries/form",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/queries/form.mdx",tags:[],version:"current",frontMatter:{id:"form",title:"form"},sidebar:"sidebar",previous:{title:"events",permalink:"/docs/graphql/queries/events"},next:{title:"liquidAssigns",permalink:"/docs/graphql/queries/liquid-assigns"}},u=[{value:"Arguments",id:"arguments",children:[{value:"<code>id</code> (Int)",id:"id-int",children:[],level:4},{value:"<code>transitionalId</code> (ID)",id:"transitionalid-id",children:[],level:4}],level:3},{value:"Type",id:"type",children:[{value:"Form",id:"form",children:[],level:4}],level:3}],d={toc:u};function p(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("span",{class:"badge badge--warning"},"DEPRECATED: Domain-specific queries are being deprecated. Please use the `form` field on the Convention object instead."),(0,o.kt)("p",null,"Finds a form by ID in the convention associated with the domain name of this HTTP\nrequest. If there is no form with that ID, or the form is associated\nwith a different convention, errors out."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"form(\n  id: Int\n  transitionalId: ID\n): Form!\n\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"id-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The ID of the form to find."),(0,o.kt)("h4",{id:"transitionalid-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"transitionalId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,o.kt)("p",null,"The ID of the form to find."),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"form"},(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/form"},(0,o.kt)("inlineCode",{parentName:"a"},"Form"))))}p.isMDXComponent=!0}}]);