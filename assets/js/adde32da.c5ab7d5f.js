"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[36430],{75631:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>f});var a=n(45721);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=a.createContext({}),p=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(c.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,r(r({ref:e},s),{},{components:n})):a.createElement(f,r({ref:e},s))}));function f(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[d]="string"==typeof t?t:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86344:(t,e,n)=>{n.r(e),n.d(e,{Badge:()=>m,Bullet:()=>d,SpecifiedBy:()=>u,assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var a=n(25577),i=n(45721),o=n(75631);const r={id:"notification-template-input",title:"NotificationTemplateInput",hide_table_of_contents:!1},l=void 0,c={unversionedId:"graphql/inputs/notification-template-input",id:"graphql/inputs/notification-template-input",title:"NotificationTemplateInput",description:"No description",source:"@site/docs/graphql/inputs/notification-template-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/notification-template-input",permalink:"/docs/graphql/inputs/notification-template-input",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/notification-template-input.mdx",tags:[],version:"current",frontMatter:{id:"notification-template-input",title:"NotificationTemplateInput",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"NotificationDestinationInput",permalink:"/docs/graphql/inputs/notification-destination-input"},next:{title:"OrderEntryInput",permalink:"/docs/graphql/inputs/order-entry-input"}},p={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>NotificationTemplateInput.<b>body_html</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-notificationtemplateinputbbody_htmlbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>NotificationTemplateInput.<b>body_sms</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-notificationtemplateinputbbody_smsbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>NotificationTemplateInput.<b>body_text</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-notificationtemplateinputbbody_textbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>NotificationTemplateInput.<b>subject</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-notificationtemplateinputbsubjectbcodestring-",level:4},{value:"Member of",id:"member-of",level:3}],d=()=>(0,o.kt)(i.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=t=>(0,o.kt)(i.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:t.url,title:"Specified by "+t.url},"\u2398")),m=t=>(0,o.kt)(i.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+t.class},t.text)),f={toc:s,Bullet:d,SpecifiedBy:u,Badge:m},g="wrapper";function y(t){let{components:e,...n}=t;return(0,o.kt)(g,(0,a.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input NotificationTemplateInput {\n  body_html: String\n  body_sms: String\n  body_text: String\n  subject: String\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-notificationtemplateinputbbody_htmlbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"NotificationTemplateInput.",(0,o.kt)("b",null,"body_html"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-notificationtemplateinputbbody_smsbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"NotificationTemplateInput.",(0,o.kt)("b",null,"body_sms"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-notificationtemplateinputbbody_textbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"NotificationTemplateInput.",(0,o.kt)("b",null,"body_text"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-notificationtemplateinputbsubjectbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"NotificationTemplateInput.",(0,o.kt)("b",null,"subject"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/graphql/inputs/update-notification-template-input"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateNotificationTemplateInput")),"  ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);