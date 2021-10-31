"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[50262],{75631:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(3289);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=o,m=d["".concat(c,".").concat(u)]||d[u]||f[u]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55205:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(88078),o=n(65844),i=(n(3289),n(75631)),a=["components"],l={id:"delete-staff-position-payload",title:"DeleteStaffPositionPayload"},c=void 0,s={unversionedId:"graphql/objects/delete-staff-position-payload",id:"graphql/objects/delete-staff-position-payload",isDocsHomePage:!1,title:"DeleteStaffPositionPayload",description:"Autogenerated return type of DeleteStaffPosition",source:"@site/docs/graphql/objects/delete-staff-position-payload.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/delete-staff-position-payload",permalink:"/docs/graphql/objects/delete-staff-position-payload",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/delete-staff-position-payload.mdx",tags:[],version:"current",frontMatter:{id:"delete-staff-position-payload",title:"DeleteStaffPositionPayload"},sidebar:"sidebar",previous:{title:"DeleteRunPayload",permalink:"/docs/graphql/objects/delete-run-payload"},next:{title:"DeleteTeamMemberPayload",permalink:"/docs/graphql/objects/delete-team-member-payload"}},p=[{value:"Fields",id:"fields",children:[{value:"<code>clientMutationId</code> (String)",id:"clientmutationid-string",children:[],level:4},{value:"<code>staff_position</code> (StaffPosition!)",id:"staff_position-staffposition",children:[],level:4}],level:3}],f={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Autogenerated return type of DeleteStaffPosition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type DeleteStaffPositionPayload {\n  clientMutationId: String\n  staff_position: StaffPosition!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"clientmutationid-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"clientMutationId")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,i.kt)("h4",{id:"staff_position-staffposition"},(0,i.kt)("inlineCode",{parentName:"h4"},"staff_position")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/staff-position"},(0,i.kt)("inlineCode",{parentName:"a"},"StaffPosition!")),")"))}d.isMDXComponent=!0}}]);