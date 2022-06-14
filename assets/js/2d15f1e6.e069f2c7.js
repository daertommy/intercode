"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[66465],{75631:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(3289);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},705:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=n(75731),a=n(42706),i=(n(3289),n(75631)),o=["components"],c={id:"user-activity-alert",title:"UserActivityAlert",hide_table_of_contents:!1},l=void 0,s={unversionedId:"graphql/objects/user-activity-alert",id:"graphql/objects/user-activity-alert",title:"UserActivityAlert",description:"No description",source:"@site/docs/graphql/objects/user-activity-alert.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/user-activity-alert",permalink:"/docs/graphql/objects/user-activity-alert",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/user-activity-alert.mdx",tags:[],version:"current",frontMatter:{id:"user-activity-alert",title:"UserActivityAlert",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"UpdateUserConProfilePayload",permalink:"/docs/graphql/objects/update-user-con-profile-payload"},next:{title:"UserConProfile",permalink:"/docs/graphql/objects/user-con-profile"}},d={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>convention</code> (<code>Convention!</code>)",id:"convention-convention",level:4},{value:"<code>email</code> (<code>String</code>)",id:"email-string",level:4},{value:"<code>id</code> (<code>ID!</code>)",id:"id-id",level:4},{value:"<code>notification_destinations</code> (<code>[NotificationDestination!]!</code>)",id:"notification_destinations-notificationdestination",level:4},{value:"<code>partial_name</code> (<code>String</code>)",id:"partial_name-string",level:4},{value:"<code>trigger_on_ticket_create</code> (<code>Boolean!</code>)",id:"trigger_on_ticket_create-boolean",level:4},{value:"<code>trigger_on_user_con_profile_create</code> (<code>Boolean!</code>)",id:"trigger_on_user_con_profile_create-boolean",level:4},{value:"<code>user</code> (<code>User</code>)",id:"user-user",level:4}],u={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type UserActivityAlert {\n  convention: Convention!\n  email: String\n  id: ID!\n  notification_destinations: [NotificationDestination!]!\n  partial_name: String\n  trigger_on_ticket_create: Boolean!\n  trigger_on_user_con_profile_create: Boolean!\n  user: User\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"convention-convention"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"convention"))," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/convention"},(0,i.kt)("inlineCode",{parentName:"a"},"Convention!")),")"),(0,i.kt)("h4",{id:"email-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"email"))," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"id-id"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,i.kt)("h4",{id:"notification_destinations-notificationdestination"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"notification_destinations"))," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/notification-destination"},(0,i.kt)("inlineCode",{parentName:"a"},"[NotificationDestination!]!")),")"),(0,i.kt)("h4",{id:"partial_name-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"partial_name"))," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"trigger_on_ticket_create-boolean"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"trigger_on_ticket_create"))," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean!")),")"),(0,i.kt)("h4",{id:"trigger_on_user_con_profile_create-boolean"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"trigger_on_user_con_profile_create"))," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean!")),")"),(0,i.kt)("h4",{id:"user-user"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"user"))," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/user"},(0,i.kt)("inlineCode",{parentName:"a"},"User")),")"))}f.isMDXComponent=!0}}]);