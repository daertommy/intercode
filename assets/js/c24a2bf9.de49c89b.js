"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[5763],{75631:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>k});var n=a(45721);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=c(a),u=r,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||p;return a?n.createElement(k,o(o({ref:t},i),{},{components:a})):n.createElement(k,o({ref:t},i))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,o=new Array(p);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<p;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},82768:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>d,SpecifiedBy:()=>m,assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=a(91487),r=a(45721),p=a(75631);const o={id:"date",title:"Date",hide_table_of_contents:!1},l=void 0,s={unversionedId:"graphql/scalars/date",id:"graphql/scalars/date",title:"Date",description:"Date in ISO8601 format",source:"@site/docs/graphql/scalars/date.mdx",sourceDirName:"graphql/scalars",slug:"/graphql/scalars/date",permalink:"/docs/graphql/scalars/date",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/scalars/date.mdx",tags:[],version:"current",frontMatter:{id:"date",title:"Date",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"Boolean",permalink:"/docs/graphql/scalars/boolean"},next:{title:"Float",permalink:"/docs/graphql/scalars/float"}},c={},i=[{value:"Member of",id:"member-of",level:3}],d=()=>(0,p.kt)(r.Fragment,null,(0,p.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,p.kt)(r.Fragment,null,"Specification",(0,p.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,p.kt)(r.Fragment,null,(0,p.kt)("span",{class:"badge badge--"+e.class},e.text)),k={toc:i,Bullet:d,SpecifiedBy:m,Badge:u},y="wrapper";function g(e){let{components:t,...a}=e;return(0,p.kt)(y,(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Date in ISO8601 format"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar Date\n")),(0,p.kt)("h3",{id:"member-of"},"Member of"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/objects/convention"},(0,p.kt)("inlineCode",{parentName:"a"},"Convention")),"  ",(0,p.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/inputs/convention-input"},(0,p.kt)("inlineCode",{parentName:"a"},"ConventionInput")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/objects/coupon"},(0,p.kt)("inlineCode",{parentName:"a"},"Coupon")),"  ",(0,p.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/inputs/coupon-input"},(0,p.kt)("inlineCode",{parentName:"a"},"CouponInput")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/objects/event"},(0,p.kt)("inlineCode",{parentName:"a"},"Event")),"  ",(0,p.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/objects/event-proposal"},(0,p.kt)("inlineCode",{parentName:"a"},"EventProposal")),"  ",(0,p.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/objects/form-response-change"},(0,p.kt)("inlineCode",{parentName:"a"},"FormResponseChange")),"  ",(0,p.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/objects/order"},(0,p.kt)("inlineCode",{parentName:"a"},"Order")),"  ",(0,p.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/objects/run"},(0,p.kt)("inlineCode",{parentName:"a"},"Run")),"  ",(0,p.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/inputs/run-input"},(0,p.kt)("inlineCode",{parentName:"a"},"RunInput")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/objects/signup"},(0,p.kt)("inlineCode",{parentName:"a"},"Signup")),"  ",(0,p.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/objects/signup-change"},(0,p.kt)("inlineCode",{parentName:"a"},"SignupChange")),"  ",(0,p.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/objects/signup-request"},(0,p.kt)("inlineCode",{parentName:"a"},"SignupRequest")),"  ",(0,p.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/objects/ticket"},(0,p.kt)("inlineCode",{parentName:"a"},"Ticket")),"  ",(0,p.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/objects/timespan-with-money-value"},(0,p.kt)("inlineCode",{parentName:"a"},"TimespanWithMoneyValue")),"  ",(0,p.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/inputs/timespan-with-money-value-input"},(0,p.kt)("inlineCode",{parentName:"a"},"TimespanWithMoneyValueInput")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/objects/timespan-with-value"},(0,p.kt)("inlineCode",{parentName:"a"},"TimespanWithValue")),"  ",(0,p.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/inputs/timespan-with-value-input"},(0,p.kt)("inlineCode",{parentName:"a"},"TimespanWithValueInput")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/objects/user-con-profile"},(0,p.kt)("inlineCode",{parentName:"a"},"UserConProfile")),"  ",(0,p.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/docs/graphql/inputs/user-con-profile-input"},(0,p.kt)("inlineCode",{parentName:"a"},"UserConProfileInput")),"  ",(0,p.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);