"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[29572],{75631:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(45721);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),g=a,m=d["".concat(l,".").concat(g)]||d[g]||p[g]||o;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14636:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>p,SpecifiedBy:()=>d,assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(34489),a=n(45721),o=n(75631);const s={id:"signup-request-state",title:"SignupRequestState",hide_table_of_contents:!1},i=void 0,l={unversionedId:"graphql/enums/signup-request-state",id:"graphql/enums/signup-request-state",title:"SignupRequestState",description:"No description",source:"@site/docs/graphql/enums/signup-request-state.mdx",sourceDirName:"graphql/enums",slug:"/graphql/enums/signup-request-state",permalink:"/docs/graphql/enums/signup-request-state",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/enums/signup-request-state.mdx",tags:[],version:"current",frontMatter:{id:"signup-request-state",title:"SignupRequestState",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"SignupMode",permalink:"/docs/graphql/enums/signup-mode"},next:{title:"SignupState",permalink:"/docs/graphql/enums/signup-state"}},u={},c=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>SignupRequestState.<b>accepted</b></code>",id:"code-style-fontweight-normal-signuprequeststatebacceptedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SignupRequestState.<b>pending</b></code>",id:"code-style-fontweight-normal-signuprequeststatebpendingbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SignupRequestState.<b>rejected</b></code>",id:"code-style-fontweight-normal-signuprequeststatebrejectedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SignupRequestState.<b>withdrawn</b></code>",id:"code-style-fontweight-normal-signuprequeststatebwithdrawnbcode",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:c,Bullet:p,SpecifiedBy:d,Badge:g};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum SignupRequestState {\n  accepted\n  pending\n  rejected\n  withdrawn\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-signuprequeststatebacceptedbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SignupRequestState.",(0,o.kt)("b",null,"accepted")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The request has been accepted and the requester has been signed up (see the result_signup field for the actual signup)")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-signuprequeststatebpendingbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SignupRequestState.",(0,o.kt)("b",null,"pending")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The request has not yet been reviewed by a moderator")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-signuprequeststatebrejectedbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SignupRequestState.",(0,o.kt)("b",null,"rejected")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The request has been rejected and the requester has not been signed up")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-signuprequeststatebwithdrawnbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SignupRequestState.",(0,o.kt)("b",null,"withdrawn")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The requester withdrew their request before it was accepted or rejected")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/graphql/objects/signup-request"},(0,o.kt)("inlineCode",{parentName:"a"},"SignupRequest")),"  ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/graphql/inputs/signup-request-filters-input"},(0,o.kt)("inlineCode",{parentName:"a"},"SignupRequestFiltersInput")),"  ",(0,o.kt)(g,{class:"secondary",text:"input",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);