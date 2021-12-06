"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[19368],{75631:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(3289);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=i,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},88575:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return s}});var r=n(50753),i=n(61242),a=(n(3289),n(75631)),o=["components"],l={id:"delete-ticket",title:"deleteTicket"},c=void 0,u={unversionedId:"graphql/mutations/delete-ticket",id:"graphql/mutations/delete-ticket",isDocsHomePage:!1,title:"deleteTicket",description:"No description",source:"@site/docs/graphql/mutations/delete-ticket.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/delete-ticket",permalink:"/docs/graphql/mutations/delete-ticket",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/mutations/delete-ticket.mdx",tags:[],version:"current",frontMatter:{id:"delete-ticket",title:"deleteTicket"},sidebar:"sidebar",previous:{title:"deleteTicketType",permalink:"/docs/graphql/mutations/delete-ticket-type"},next:{title:"deleteUserActivityAlert",permalink:"/docs/graphql/mutations/delete-user-activity-alert"}},p=[{value:"Arguments",id:"arguments",children:[{value:"<code>input</code> (DeleteTicketInput)",id:"input-deleteticketinput",children:[],level:4}],level:3},{value:"Type",id:"type",children:[{value:"DeleteTicketPayload",id:"deleteticketpayload",children:[],level:4}],level:3}],d={toc:p};function s(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"deleteTicket(\n  input: DeleteTicketInput!\n): DeleteTicketPayload!\n\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"input-deleteticketinput"},(0,a.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/delete-ticket-input"},(0,a.kt)("inlineCode",{parentName:"a"},"DeleteTicketInput")),")"),(0,a.kt)("p",null,"Parameters for DeleteTicket"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"deleteticketpayload"},(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/delete-ticket-payload"},(0,a.kt)("inlineCode",{parentName:"a"},"DeleteTicketPayload"))),(0,a.kt)("p",null,"Autogenerated return type of DeleteTicket"))}s.isMDXComponent=!0}}]);