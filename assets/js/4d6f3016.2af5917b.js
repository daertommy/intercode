"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[92808],{75631:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>u});var n=a(45721);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=d(a),u=r,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||p;return a?n.createElement(k,o(o({ref:t},i),{},{components:a})):n.createElement(k,o({ref:t},i))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,o=new Array(p);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<p;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},82454:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>c,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=a(34489),r=a(45721),p=a(75631);const o={id:"boolean",title:"Boolean",hide_table_of_contents:!1},l=void 0,s={unversionedId:"graphql/scalars/boolean",id:"graphql/scalars/boolean",title:"Boolean",description:"The Boolean scalar type represents true or false.",source:"@site/docs/graphql/scalars/boolean.mdx",sourceDirName:"graphql/scalars",slug:"/graphql/scalars/boolean",permalink:"/docs/graphql/scalars/boolean",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/scalars/boolean.mdx",tags:[],version:"current",frontMatter:{id:"boolean",title:"Boolean",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"BigDecimal",permalink:"/docs/graphql/scalars/big-decimal"},next:{title:"Date",permalink:"/docs/graphql/scalars/date"}},d={},i=[{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],c=()=>(0,p.kt)(r.Fragment,null,(0,p.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,p.kt)(r.Fragment,null,"Specification",(0,p.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,p.kt)(r.Fragment,null,(0,p.kt)("span",{class:"badge badge--"+e.class},e.text)),k={toc:i,Bullet:c,SpecifiedBy:m,Badge:u};function y(e){let{components:t,...a}=e;return(0,p.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"The ",(0,p.kt)("inlineCode",{parentName:"p"},"Boolean")," scalar type represents ",(0,p.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,p.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar Boolean\n")),(0,p.kt)("h3",{id:"returned-by"},"Returned by"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/queries/has-oauth-applications"},(0,p.kt)("inlineCode",{parentName:"a"},"hasOauthApplications")),"  ",(0,p.kt)(u,{class:"secondary",text:"query",mdxType:"Badge"})),(0,p.kt)("h3",{id:"member-of"},"Member of"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/objects/ability"},(0,p.kt)("inlineCode",{parentName:"a"},"Ability")),"  ",(0,p.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/inputs/cancel-order-input"},(0,p.kt)("inlineCode",{parentName:"a"},"CancelOrderInput")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/objects/cms-content-group"},(0,p.kt)("inlineCode",{parentName:"a"},"CmsContentGroup")),"  ",(0,p.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/objects/cms-file"},(0,p.kt)("inlineCode",{parentName:"a"},"CmsFile")),"  ",(0,p.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/objects/cms-graphql-query"},(0,p.kt)("inlineCode",{parentName:"a"},"CmsGraphqlQuery")),"  ",(0,p.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/objects/cms-layout"},(0,p.kt)("inlineCode",{parentName:"a"},"CmsLayout")),"  ",(0,p.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/objects/cms-partial"},(0,p.kt)("inlineCode",{parentName:"a"},"CmsPartial")),"  ",(0,p.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/objects/cms-variable"},(0,p.kt)("inlineCode",{parentName:"a"},"CmsVariable")),"  ",(0,p.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/objects/convention"},(0,p.kt)("inlineCode",{parentName:"a"},"Convention")),"  ",(0,p.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/inputs/convention-input"},(0,p.kt)("inlineCode",{parentName:"a"},"ConventionInput")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/inputs/create-my-signup-input"},(0,p.kt)("inlineCode",{parentName:"a"},"CreateMySignupInput")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/inputs/create-user-signup-input"},(0,p.kt)("inlineCode",{parentName:"a"},"CreateUserSignupInput")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/inputs/delete-ticket-input"},(0,p.kt)("inlineCode",{parentName:"a"},"DeleteTicketInput")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/objects/event"},(0,p.kt)("inlineCode",{parentName:"a"},"Event")),"  ",(0,p.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/objects/event-category"},(0,p.kt)("inlineCode",{parentName:"a"},"EventCategory")),"  ",(0,p.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/inputs/event-category-input"},(0,p.kt)("inlineCode",{parentName:"a"},"EventCategoryInput")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/objects/form-response-change"},(0,p.kt)("inlineCode",{parentName:"a"},"FormResponseChange")),"  ",(0,p.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/directives/include"},(0,p.kt)("inlineCode",{parentName:"a"},"include")),"  ",(0,p.kt)(u,{class:"secondary",text:"directive",mdxType:"Badge"}),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/objects/organization"},(0,p.kt)("inlineCode",{parentName:"a"},"Organization")),"  ",(0,p.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/objects/page"},(0,p.kt)("inlineCode",{parentName:"a"},"Page")),"  ",(0,p.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/inputs/page-input"},(0,p.kt)("inlineCode",{parentName:"a"},"PageInput")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/objects/product"},(0,p.kt)("inlineCode",{parentName:"a"},"Product")),"  ",(0,p.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/inputs/product-input"},(0,p.kt)("inlineCode",{parentName:"a"},"ProductInput")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/objects/registration-policy"},(0,p.kt)("inlineCode",{parentName:"a"},"RegistrationPolicy")),"  ",(0,p.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/objects/registration-policy-bucket"},(0,p.kt)("inlineCode",{parentName:"a"},"RegistrationPolicyBucket")),"  ",(0,p.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/objects/run"},(0,p.kt)("inlineCode",{parentName:"a"},"Run")),"  ",(0,p.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/inputs/send-notification-preview-input"},(0,p.kt)("inlineCode",{parentName:"a"},"SendNotificationPreviewInput")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/inputs/set-convention-canceled-input"},(0,p.kt)("inlineCode",{parentName:"a"},"SetConventionCanceledInput")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/objects/signup"},(0,p.kt)("inlineCode",{parentName:"a"},"Signup")),"  ",(0,p.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/objects/signup-change"},(0,p.kt)("inlineCode",{parentName:"a"},"SignupChange")),"  ",(0,p.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/directives/skip"},(0,p.kt)("inlineCode",{parentName:"a"},"skip")),"  ",(0,p.kt)(u,{class:"secondary",text:"directive",mdxType:"Badge"}),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/inputs/sort-input"},(0,p.kt)("inlineCode",{parentName:"a"},"SortInput")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/objects/staff-position"},(0,p.kt)("inlineCode",{parentName:"a"},"StaffPosition")),"  ",(0,p.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/inputs/staff-position-input"},(0,p.kt)("inlineCode",{parentName:"a"},"StaffPositionInput")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/objects/stripe-account"},(0,p.kt)("inlineCode",{parentName:"a"},"StripeAccount")),"  ",(0,p.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/objects/team-member"},(0,p.kt)("inlineCode",{parentName:"a"},"TeamMember")),"  ",(0,p.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/inputs/team-member-input"},(0,p.kt)("inlineCode",{parentName:"a"},"TeamMemberInput")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/objects/ticket-type"},(0,p.kt)("inlineCode",{parentName:"a"},"TicketType")),"  ",(0,p.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/inputs/ticket-type-input"},(0,p.kt)("inlineCode",{parentName:"a"},"TicketTypeInput")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/inputs/transition-event-proposal-input"},(0,p.kt)("inlineCode",{parentName:"a"},"TransitionEventProposalInput")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/inputs/update-signup-counted-input"},(0,p.kt)("inlineCode",{parentName:"a"},"UpdateSignupCountedInput")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/objects/user-activity-alert"},(0,p.kt)("inlineCode",{parentName:"a"},"UserActivityAlert")),"  ",(0,p.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/inputs/user-activity-alert-input"},(0,p.kt)("inlineCode",{parentName:"a"},"UserActivityAlertInput")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/objects/user-con-profile"},(0,p.kt)("inlineCode",{parentName:"a"},"UserConProfile")),"  ",(0,p.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/inputs/user-con-profile-filters-input"},(0,p.kt)("inlineCode",{parentName:"a"},"UserConProfileFiltersInput")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/inputs/user-con-profile-input"},(0,p.kt)("inlineCode",{parentName:"a"},"UserConProfileInput")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/inputs/withdraw-user-signup-input"},(0,p.kt)("inlineCode",{parentName:"a"},"WithdrawUserSignupInput")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);