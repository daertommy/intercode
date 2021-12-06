"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[40119],{75631:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(3289);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=c(n),d=o,f=s["".concat(p,".").concat(d)]||s[d]||m[d]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=s;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},95442:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return s}});var r=n(50753),o=n(61242),i=(n(3289),n(75631)),a=["components"],u={id:"create-room-input",title:"CreateRoomInput"},p=void 0,c={unversionedId:"graphql/inputs/create-room-input",id:"graphql/inputs/create-room-input",isDocsHomePage:!1,title:"CreateRoomInput",description:"Autogenerated input type of CreateRoom",source:"@site/docs/graphql/inputs/create-room-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/create-room-input",permalink:"/docs/graphql/inputs/create-room-input",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/create-room-input.mdx",tags:[],version:"current",frontMatter:{id:"create-room-input",title:"CreateRoomInput"},sidebar:"sidebar",previous:{title:"CreateProductInput",permalink:"/docs/graphql/inputs/create-product-input"},next:{title:"CreateRunInput",permalink:"/docs/graphql/inputs/create-run-input"}},l=[{value:"Fields",id:"fields",children:[{value:"<code>clientMutationId</code> (String)",id:"clientmutationid-string",children:[],level:4},{value:"<code>room</code> (RoomInput)",id:"room-roominput",children:[],level:4}],level:3}],m={toc:l};function s(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Autogenerated input type of CreateRoom"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type CreateRoomInput {\n  clientMutationId: String\n  room: RoomInput!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"clientmutationid-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"clientMutationId")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,i.kt)("h4",{id:"room-roominput"},(0,i.kt)("inlineCode",{parentName:"h4"},"room")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/room-input"},(0,i.kt)("inlineCode",{parentName:"a"},"RoomInput")),")"))}s.isMDXComponent=!0}}]);