"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[21839],{75631:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(3289);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=u(n),m=i,f=s["".concat(l,".").concat(m)]||s[m]||p[m]||o;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},82743:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(75731),i=n(42706),o=(n(3289),n(75631)),a=["components"],c={id:"ticket-mode",title:"TicketMode",hide_table_of_contents:!1},l=void 0,u={unversionedId:"graphql/enums/ticket-mode",id:"graphql/enums/ticket-mode",title:"TicketMode",description:"No description",source:"@site/docs/graphql/enums/ticket-mode.mdx",sourceDirName:"graphql/enums",slug:"/graphql/enums/ticket-mode",permalink:"/docs/graphql/enums/ticket-mode",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/enums/ticket-mode.mdx",tags:[],version:"current",frontMatter:{id:"ticket-mode",title:"TicketMode",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"SiteMode",permalink:"/docs/graphql/enums/site-mode"},next:{title:"TimezoneMode",permalink:"/docs/graphql/enums/timezone-mode"}},d={},p=[{value:"Values",id:"values",level:3},{value:"<code>disabled</code>",id:"disabled",level:4},{value:"<code>required_for_signup</code>",id:"required_for_signup",level:4},{value:"<code>ticket_per_event</code>",id:"ticket_per_event",level:4}],s={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum TicketMode {\n  disabled\n  required_for_signup\n  ticket_per_event\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"disabled"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"disabled"))),(0,o.kt)("p",null,"Tickets are neither sold nor required in this convention"),(0,o.kt)("h4",{id:"required_for_signup"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"required_for_signup"))),(0,o.kt)("p",null,"A valid ticket is required to sign up for events in this convention"),(0,o.kt)("h4",{id:"ticket_per_event"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"ticket_per_event"))),(0,o.kt)("p",null,"Each event in this convention sells tickets separately"))}m.isMDXComponent=!0}}]);