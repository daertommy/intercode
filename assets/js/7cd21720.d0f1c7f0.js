"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[26467],{75631:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return s}});var n=r(3289);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),m=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(r),s=a,f=u["".concat(c,".").concat(s)]||u[s]||d[s]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},46375:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return p},default:function(){return u}});var n=r(50753),a=r(61242),o=(r(3289),r(75631)),i=["components"],l={id:"update-team-member-payload",title:"UpdateTeamMemberPayload"},c=void 0,m={unversionedId:"graphql/objects/update-team-member-payload",id:"graphql/objects/update-team-member-payload",isDocsHomePage:!1,title:"UpdateTeamMemberPayload",description:"Autogenerated return type of UpdateTeamMember",source:"@site/docs/graphql/objects/update-team-member-payload.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/update-team-member-payload",permalink:"/docs/graphql/objects/update-team-member-payload",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/update-team-member-payload.mdx",tags:[],version:"current",frontMatter:{id:"update-team-member-payload",title:"UpdateTeamMemberPayload"},sidebar:"sidebar",previous:{title:"UpdateStaffPositionPermissionsPayload",permalink:"/docs/graphql/objects/update-staff-position-permissions-payload"},next:{title:"UpdateTicketPayload",permalink:"/docs/graphql/objects/update-ticket-payload"}},p=[{value:"Fields",id:"fields",children:[{value:"<code>clientMutationId</code> (String)",id:"clientmutationid-string",children:[],level:4},{value:"<code>team_member</code> (TeamMember)",id:"team_member-teammember",children:[],level:4}],level:3}],d={toc:p};function u(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Autogenerated return type of UpdateTeamMember"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type UpdateTeamMemberPayload {\n  clientMutationId: String\n  team_member: TeamMember!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"clientmutationid-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"clientMutationId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,o.kt)("h4",{id:"team_member-teammember"},(0,o.kt)("inlineCode",{parentName:"h4"},"team_member")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/team-member"},(0,o.kt)("inlineCode",{parentName:"a"},"TeamMember")),")"))}u.isMDXComponent=!0}}]);