"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[34825],{75631:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var r=n(3289);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),s=o,f=m["".concat(u,".").concat(s)]||m[s]||d[s]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61319:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var r=n(97390),o=n(14184),i=(n(3289),n(75631)),a=["components"],p={id:"update-room-input",title:"UpdateRoomInput"},u=void 0,l={unversionedId:"graphql/inputs/update-room-input",id:"graphql/inputs/update-room-input",title:"UpdateRoomInput",description:"Autogenerated input type of UpdateRoom",source:"@site/docs/graphql/inputs/update-room-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/update-room-input",permalink:"/docs/graphql/inputs/update-room-input",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/update-room-input.mdx",tags:[],version:"current",frontMatter:{id:"update-room-input",title:"UpdateRoomInput"},sidebar:"sidebar",previous:{title:"UpdateProductInput",permalink:"/docs/graphql/inputs/update-product-input"},next:{title:"UpdateRootSiteInput",permalink:"/docs/graphql/inputs/update-root-site-input"}},c=[{value:"Fields",id:"fields",children:[{value:"<code>clientMutationId</code> (String)",id:"clientmutationid-string",children:[],level:4},{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>room</code> (RoomInput)",id:"room-roominput",children:[],level:4}],level:3}],d={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Autogenerated input type of UpdateRoom"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type UpdateRoomInput {\n  clientMutationId: String\n  id: ID\n  room: RoomInput!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"clientmutationid-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"clientMutationId")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,i.kt)("h4",{id:"id-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"room-roominput"},(0,i.kt)("inlineCode",{parentName:"h4"},"room")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/room-input"},(0,i.kt)("inlineCode",{parentName:"a"},"RoomInput")),")"))}m.isMDXComponent=!0}}]);