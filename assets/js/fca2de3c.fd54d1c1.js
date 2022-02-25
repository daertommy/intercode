"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[39553],{75631:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return v}});var r=n(3289);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),s=p(n),v=i,f=s["".concat(d,".").concat(v)]||s[v]||u[v]||o;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=s;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},60243:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return d},metadata:function(){return p},assets:function(){return l},toc:function(){return u},default:function(){return v}});var r=n(14002),i=n(89922),o=(n(3289),n(75631)),c=["components"],a={id:"convert-ticket-to-event-provided-input",title:"ConvertTicketToEventProvidedInput"},d=void 0,p={unversionedId:"graphql/inputs/convert-ticket-to-event-provided-input",id:"graphql/inputs/convert-ticket-to-event-provided-input",title:"ConvertTicketToEventProvidedInput",description:"Autogenerated input type of ConvertTicketToEventProvided",source:"@site/docs/graphql/inputs/convert-ticket-to-event-provided-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/convert-ticket-to-event-provided-input",permalink:"/docs/graphql/inputs/convert-ticket-to-event-provided-input",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/convert-ticket-to-event-provided-input.mdx",tags:[],version:"current",frontMatter:{id:"convert-ticket-to-event-provided-input",title:"ConvertTicketToEventProvidedInput"},sidebar:"sidebar",previous:{title:"ConventionInput",permalink:"/docs/graphql/inputs/convention-input"},next:{title:"CouponFiltersInput",permalink:"/docs/graphql/inputs/coupon-filters-input"}},l={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>clientMutationId</code> (<code>String</code>)",id:"clientmutationid-string",level:4},{value:"<code>eventId</code> (<code>ID</code>)",id:"eventid-id",level:4},{value:"<code>ticketTypeId</code> (<code>ID</code>)",id:"tickettypeid-id",level:4},{value:"<code>userConProfileId</code> (<code>ID</code>)",id:"userconprofileid-id",level:4}],s={toc:u};function v(e){var t=e.components,n=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Autogenerated input type of ConvertTicketToEventProvided"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type ConvertTicketToEventProvidedInput {\n  clientMutationId: String\n  eventId: ID\n  ticketTypeId: ID\n  userConProfileId: ID\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"clientmutationid-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"clientMutationId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,o.kt)("h4",{id:"eventid-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"eventId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,o.kt)("h4",{id:"tickettypeid-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"ticketTypeId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,o.kt)("h4",{id:"userconprofileid-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"userConProfileId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"))}v.isMDXComponent=!0}}]);