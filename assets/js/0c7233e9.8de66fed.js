"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[71641],{75631:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(3289);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49010:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>u,SpecifiedBy:()=>m,assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=n(34489),i=n(3289),a=n(75631);const l={id:"receive-signup-email",title:"ReceiveSignupEmail",hide_table_of_contents:!1},o=void 0,c={unversionedId:"graphql/enums/receive-signup-email",id:"graphql/enums/receive-signup-email",title:"ReceiveSignupEmail",description:"No description",source:"@site/docs/graphql/enums/receive-signup-email.mdx",sourceDirName:"graphql/enums",slug:"/graphql/enums/receive-signup-email",permalink:"/docs/graphql/enums/receive-signup-email",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/enums/receive-signup-email.mdx",tags:[],version:"current",frontMatter:{id:"receive-signup-email",title:"ReceiveSignupEmail",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"PricingStrategy",permalink:"/docs/graphql/enums/pricing-strategy"},next:{title:"RefundStatus",permalink:"/docs/graphql/enums/refund-status"}},p={},s=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>ReceiveSignupEmail.<b>ALL_SIGNUPS</b></code>",id:"code-style-fontweight-normal-receivesignupemailball_signupsbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ReceiveSignupEmail.<b>NO</b></code>",id:"code-style-fontweight-normal-receivesignupemailbnobcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ReceiveSignupEmail.<b>NON_WAITLIST_SIGNUPS</b></code>",id:"code-style-fontweight-normal-receivesignupemailbnon_waitlist_signupsbcode",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,a.kt)(i.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,a.kt)(i.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,a.kt)(i.Fragment,null,(0,a.kt)("span",{class:"badge badge--"+e.class},e.text)),g={toc:s,Bullet:u,SpecifiedBy:m,Badge:d};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum ReceiveSignupEmail {\n  ALL_SIGNUPS\n  NO\n  NON_WAITLIST_SIGNUPS\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-receivesignupemailball_signupsbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ReceiveSignupEmail.",(0,a.kt)("b",null,"ALL_SIGNUPS")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Receive email for all signup activity")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-receivesignupemailbnobcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ReceiveSignupEmail.",(0,a.kt)("b",null,"NO")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Do not receive signup email")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-receivesignupemailbnon_waitlist_signupsbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ReceiveSignupEmail.",(0,a.kt)("b",null,"NON_WAITLIST_SIGNUPS")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Receive email for signup activity affecting confirmed signups")),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/objects/team-member"},(0,a.kt)("inlineCode",{parentName:"a"},"TeamMember")),"  ",(0,a.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/inputs/team-member-input"},(0,a.kt)("inlineCode",{parentName:"a"},"TeamMemberInput")),"  ",(0,a.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);