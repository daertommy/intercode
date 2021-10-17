"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[99514],{75631:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return v}});var r=n(3289);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),v=a,m=d["".concat(l,".").concat(v)]||d[v]||s[v]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},289:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(1629),a=n(17322),o=(n(3289),n(75631)),i=["components"],c={id:"create-event",title:"createEvent"},l=void 0,p={unversionedId:"graphql/mutations/create-event",id:"graphql/mutations/create-event",isDocsHomePage:!1,title:"createEvent",description:"No description",source:"@site/docs/graphql/mutations/create-event.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/create-event",permalink:"/docs/graphql/mutations/create-event",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/mutations/create-event.mdx",tags:[],version:"current",frontMatter:{id:"create-event",title:"createEvent"},sidebar:"sidebar",previous:{title:"createEventProposal",permalink:"/docs/graphql/mutations/create-event-proposal"},next:{title:"createFillerEvent",permalink:"/docs/graphql/mutations/create-filler-event"}},u=[{value:"Arguments",id:"arguments",children:[{value:"<code>input</code> (CreateEventInput!)",id:"input-createeventinput",children:[],level:4}],level:3},{value:"Type",id:"type",children:[{value:"CreateEventPayload",id:"createeventpayload",children:[],level:4}],level:3}],s={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"createEvent(\n  input: CreateEventInput!\n): CreateEventPayload!\n\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"input-createeventinput"},(0,o.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/create-event-input"},(0,o.kt)("inlineCode",{parentName:"a"},"CreateEventInput!")),")"),(0,o.kt)("p",null,"Parameters for CreateEvent"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"createeventpayload"},(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/create-event-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"CreateEventPayload"))),(0,o.kt)("p",null,"Autogenerated return type of CreateEvent"))}d.isMDXComponent=!0}}]);