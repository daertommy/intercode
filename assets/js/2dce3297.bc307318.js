"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[477],{75631:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return g}});var r=t(3289);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),g=i,f=d["".concat(u,".").concat(g)]||d[g]||l[g]||a;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},76861:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=t(88078),i=t(65844),a=(t(3289),t(75631)),o=["components"],s={id:"signup",title:"signup"},u=void 0,c={unversionedId:"graphql/queries/signup",id:"graphql/queries/signup",isDocsHomePage:!1,title:"signup",description:"DEPRECATED: Domain-specific queries are being deprecated. Please use the signup field on the Convention type instead.",source:"@site/docs/graphql/queries/signup.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/signup",permalink:"/docs/graphql/queries/signup",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/queries/signup.mdx",tags:[],version:"current",frontMatter:{id:"signup",title:"signup"},sidebar:"sidebar",previous:{title:"searchCmsContent",permalink:"/docs/graphql/queries/search-cms-content"},next:{title:"siteSearch",permalink:"/docs/graphql/queries/site-search"}},p=[{value:"Arguments",id:"arguments",children:[{value:"<code>id</code> (Int)",id:"id-int",children:[],level:4},{value:"<code>transitionalId</code> (ID)",id:"transitionalid-id",children:[],level:4}],level:3},{value:"Type",id:"type",children:[{value:"Signup",id:"signup",children:[],level:4}],level:3}],l={toc:p};function d(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("span",{class:"badge badge--warning"},"DEPRECATED: Domain-specific queries are being deprecated. Please use the `signup` field on the Convention type instead."),(0,a.kt)("p",null,"Finds a signup by ID in the convention associated with the domain name of this HTTP\nrequest. If there is no signup with that ID, or the signup is associated\nwith a different convention, errors out."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"signup(\n  id: Int\n  transitionalId: ID\n): Signup!\n\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"id-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("p",null,"The ID of the signup to find."),(0,a.kt)("h4",{id:"transitionalid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"transitionalId")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("p",null,"The ID of the signup to find."),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"signup"},(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/signup"},(0,a.kt)("inlineCode",{parentName:"a"},"Signup"))))}d.isMDXComponent=!0}}]);