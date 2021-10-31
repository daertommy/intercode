"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[66465],{75631:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(3289);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=i,h=u["".concat(c,".").concat(f)]||u[f]||p[f]||a;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},16437:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var r=n(88078),i=n(65844),a=(n(3289),n(75631)),o=["components"],l={id:"user-activity-alert",title:"UserActivityAlert"},c=void 0,s={unversionedId:"graphql/objects/user-activity-alert",id:"graphql/objects/user-activity-alert",isDocsHomePage:!1,title:"UserActivityAlert",description:"No description",source:"@site/docs/graphql/objects/user-activity-alert.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/user-activity-alert",permalink:"/docs/graphql/objects/user-activity-alert",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/user-activity-alert.mdx",tags:[],version:"current",frontMatter:{id:"user-activity-alert",title:"UserActivityAlert"},sidebar:"sidebar",previous:{title:"UpdateUserConProfilePayload",permalink:"/docs/graphql/objects/update-user-con-profile-payload"},next:{title:"UserConProfile",permalink:"/docs/graphql/objects/user-con-profile"}},d=[{value:"Fields",id:"fields",children:[{value:"<code>convention</code> (Convention!)",id:"convention-convention",children:[],level:4},{value:"<code>email</code> (String)",id:"email-string",children:[],level:4},{value:"<code>id</code> (Int!)",id:"id-int",children:[],level:4},{value:"<code>notification_destinations</code> ([NotificationDestination!]!)",id:"notification_destinations-notificationdestination",children:[],level:4},{value:"<code>partial_name</code> (String)",id:"partial_name-string",children:[],level:4},{value:"<code>transitionalId</code> (ID!)",id:"transitionalid-id",children:[],level:4},{value:"<code>trigger_on_ticket_create</code> (Boolean!)",id:"trigger_on_ticket_create-boolean",children:[],level:4},{value:"<code>trigger_on_user_con_profile_create</code> (Boolean!)",id:"trigger_on_user_con_profile_create-boolean",children:[],level:4},{value:"<code>user</code> (User)",id:"user-user",children:[],level:4}],level:3}],p={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type UserActivityAlert {\n  convention: Convention!\n  email: String\n  id: Int!\n  notification_destinations: [NotificationDestination!]!\n  partial_name: String\n  transitionalId: ID!\n  trigger_on_ticket_create: Boolean!\n  trigger_on_user_con_profile_create: Boolean!\n  user: User\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"convention-convention"},(0,a.kt)("inlineCode",{parentName:"h4"},"convention")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/convention"},(0,a.kt)("inlineCode",{parentName:"a"},"Convention!")),")"),(0,a.kt)("h4",{id:"email-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"email")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"id-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,a.kt)("span",{class:"badge badge--warning"},"DEPRECATED: IDs are transitioning to the ID type. For the moment, please use the transitionalId field until all id fields are replaced with ones of type ID."),(0,a.kt)("h4",{id:"notification_destinations-notificationdestination"},(0,a.kt)("inlineCode",{parentName:"h4"},"notification_destinations")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/notification-destination"},(0,a.kt)("inlineCode",{parentName:"a"},"[NotificationDestination!]!")),")"),(0,a.kt)("h4",{id:"partial_name-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"partial_name")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"transitionalid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"transitionalId")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,a.kt)("h4",{id:"trigger_on_ticket_create-boolean"},(0,a.kt)("inlineCode",{parentName:"h4"},"trigger_on_ticket_create")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,a.kt)("inlineCode",{parentName:"a"},"Boolean!")),")"),(0,a.kt)("h4",{id:"trigger_on_user_con_profile_create-boolean"},(0,a.kt)("inlineCode",{parentName:"h4"},"trigger_on_user_con_profile_create")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,a.kt)("inlineCode",{parentName:"a"},"Boolean!")),")"),(0,a.kt)("h4",{id:"user-user"},(0,a.kt)("inlineCode",{parentName:"h4"},"user")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/user"},(0,a.kt)("inlineCode",{parentName:"a"},"User")),")"))}u.isMDXComponent=!0}}]);