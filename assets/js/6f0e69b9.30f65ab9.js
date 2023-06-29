"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[11359],{75631:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(45721);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),m=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=m(n),u=a,f=d["".concat(c,".").concat(u)]||d[u]||p[u]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var m=2;m<o;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},86861:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,SpecifiedBy:()=>p,assets:()=>m,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=n(91487),a=n(45721),o=n(75631);const l={id:"email-mode",title:"EmailMode",hide_table_of_contents:!1},i=void 0,c={unversionedId:"graphql/enums/email-mode",id:"graphql/enums/email-mode",title:"EmailMode",description:"No description",source:"@site/docs/graphql/enums/email-mode.mdx",sourceDirName:"graphql/enums",slug:"/graphql/enums/email-mode",permalink:"/docs/graphql/enums/email-mode",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/enums/email-mode.mdx",tags:[],version:"current",frontMatter:{id:"email-mode",title:"EmailMode",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"CmsContentTypeIndicator",permalink:"/docs/graphql/enums/cms-content-type-indicator"},next:{title:"FormItemExposeIn",permalink:"/docs/graphql/enums/form-item-expose-in"}},m={},s=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>EmailMode.<b>forward</b></code>",id:"code-style-fontweight-normal-emailmodebforwardbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>EmailMode.<b>staff_emails_to_catch_all</b></code>",id:"code-style-fontweight-normal-emailmodebstaff_emails_to_catch_allbcode",level:4},{value:"Member of",id:"member-of",level:3}],d=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:s,Bullet:d,SpecifiedBy:p,Badge:u},b="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(b,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum EmailMode {\n  forward\n  staff_emails_to_catch_all\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-emailmodebforwardbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"EmailMode.",(0,o.kt)("b",null,"forward")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Forward received emails to staff positions as configured")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-emailmodebstaff_emails_to_catch_allbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"EmailMode.",(0,o.kt)("b",null,"staff_emails_to_catch_all")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Forward all received staff emails to catch-all staff position")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/graphql/objects/convention"},(0,o.kt)("inlineCode",{parentName:"a"},"Convention")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/graphql/inputs/convention-input"},(0,o.kt)("inlineCode",{parentName:"a"},"ConventionInput")),"  ",(0,o.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);