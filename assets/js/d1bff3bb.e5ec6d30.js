"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[73954],{75631:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(3289);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,g=u["".concat(l,".").concat(m)]||u[m]||s[m]||o;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},42489:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(50744),a=(n(3289),n(75631));const o={id:"attach-image-to-event-proposal-input",title:"AttachImageToEventProposalInput",hide_table_of_contents:!1},i=void 0,p={unversionedId:"graphql/inputs/attach-image-to-event-proposal-input",id:"graphql/inputs/attach-image-to-event-proposal-input",title:"AttachImageToEventProposalInput",description:"Autogenerated input type of AttachImageToEventProposal",source:"@site/docs/graphql/inputs/attach-image-to-event-proposal-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/attach-image-to-event-proposal-input",permalink:"/docs/graphql/inputs/attach-image-to-event-proposal-input",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/attach-image-to-event-proposal-input.mdx",tags:[],version:"current",frontMatter:{id:"attach-image-to-event-proposal-input",title:"AttachImageToEventProposalInput",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"AttachImageToEventInput",permalink:"/docs/graphql/inputs/attach-image-to-event-input"},next:{title:"CancelOrderInput",permalink:"/docs/graphql/inputs/cancel-order-input"}},l={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>clientMutationId</code> (<code>String</code>)",id:"clientmutationid-string",level:4},{value:"<code>id</code> (<code>ID</code>)",id:"id-id",level:4},{value:"<code>signedBlobId</code> (<code>ID!</code>)",id:"signedblobid-id",level:4}],d={toc:c};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Autogenerated input type of AttachImageToEventProposal"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input AttachImageToEventProposalInput {\n  clientMutationId: String\n  id: ID\n  signedBlobId: ID!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"clientmutationid-string"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"clientMutationId"))," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,a.kt)("h4",{id:"id-id"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"signedblobid-id"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"signedBlobId"))," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID!")),")"))}s.isMDXComponent=!0}}]);