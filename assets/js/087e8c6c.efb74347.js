"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[33893],{75631:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return s}});var r=n(3289);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),u=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=u(n),s=i,f=m["".concat(d,".").concat(s)]||m[s]||c[s]||a;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55219:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var r=n(97390),i=n(14184),a=(n(3289),n(75631)),o=["components"],p={id:"submit-order-input",title:"SubmitOrderInput"},d=void 0,u={unversionedId:"graphql/inputs/submit-order-input",id:"graphql/inputs/submit-order-input",title:"SubmitOrderInput",description:"Autogenerated input type of SubmitOrder",source:"@site/docs/graphql/inputs/submit-order-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/submit-order-input",permalink:"/docs/graphql/inputs/submit-order-input",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/submit-order-input.mdx",tags:[],version:"current",frontMatter:{id:"submit-order-input",title:"SubmitOrderInput"},sidebar:"sidebar",previous:{title:"SubmitEventProposalInput",permalink:"/docs/graphql/inputs/submit-event-proposal-input"},next:{title:"TeamMemberInput",permalink:"/docs/graphql/inputs/team-member-input"}},l=[{value:"Fields",id:"fields",children:[{value:"<code>clientMutationId</code> (String)",id:"clientmutationid-string",children:[],level:4},{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>payment_intent_id</code> (String)",id:"payment_intent_id-string",children:[],level:4},{value:"<code>payment_mode</code> (PaymentMode)",id:"payment_mode-paymentmode",children:[],level:4},{value:"<code>stripe_token</code> (String)",id:"stripe_token-string",children:[],level:4}],level:3}],c={toc:l};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Autogenerated input type of SubmitOrder"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type SubmitOrderInput {\n  clientMutationId: String\n  id: ID\n  payment_intent_id: String\n  payment_mode: PaymentMode!\n  stripe_token: String\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"clientmutationid-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"clientMutationId")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,a.kt)("h4",{id:"id-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"payment_intent_id-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"payment_intent_id")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"payment_mode-paymentmode"},(0,a.kt)("inlineCode",{parentName:"h4"},"payment_mode")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/payment-mode"},(0,a.kt)("inlineCode",{parentName:"a"},"PaymentMode")),")"),(0,a.kt)("h4",{id:"stripe_token-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"stripe_token")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"))}m.isMDXComponent=!0}}]);