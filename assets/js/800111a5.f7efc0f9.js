"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[37576],{75631:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(45721);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),m=d(n),f=o,y=m["".concat(c,".").concat(f)]||m[f]||p[f]||l;return n?a.createElement(y,i(i({ref:t},s),{},{components:n})):a.createElement(y,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=m;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23045:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>p,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>r,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var a=n(34489),o=n(45721),l=n(75631);const i={id:"notification-template",title:"NotificationTemplate",hide_table_of_contents:!1},r=void 0,c={unversionedId:"graphql/objects/notification-template",id:"graphql/objects/notification-template",title:"NotificationTemplate",description:"No description",source:"@site/docs/graphql/objects/notification-template.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/notification-template",permalink:"/docs/graphql/objects/notification-template",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/notification-template.mdx",tags:[],version:"current",frontMatter:{id:"notification-template",title:"NotificationTemplate",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"NotificationDestination",permalink:"/docs/graphql/objects/notification-destination"},next:{title:"OrderEntry",permalink:"/docs/graphql/objects/order-entry"}},d={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>NotificationTemplate.<b>body_html</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-notificationtemplatebbody_htmlbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>NotificationTemplate.<b>body_sms</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-notificationtemplatebbody_smsbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>NotificationTemplate.<b>body_text</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-notificationtemplatebbody_textbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>NotificationTemplate.<b>event_key</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-notificationtemplatebevent_keybcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>NotificationTemplate.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-notificationtemplatebidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>NotificationTemplate.<b>subject</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-notificationtemplatebsubjectbcodestring-",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,l.kt)(o.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{class:"badge badge--"+e.class},e.text)),y={toc:s,Bullet:p,SpecifiedBy:m,Badge:f};function g(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type NotificationTemplate {\n  body_html: String\n  body_sms: String\n  body_text: String\n  event_key: String!\n  id: ID!\n  subject: String\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-notificationtemplatebbody_htmlbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"NotificationTemplate.",(0,l.kt)("b",null,"body_html"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-notificationtemplatebbody_smsbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"NotificationTemplate.",(0,l.kt)("b",null,"body_sms"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-notificationtemplatebbody_textbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"NotificationTemplate.",(0,l.kt)("b",null,"body_text"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-notificationtemplatebevent_keybcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"NotificationTemplate.",(0,l.kt)("b",null,"event_key"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-notificationtemplatebidbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"NotificationTemplate.",(0,l.kt)("b",null,"id"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-notificationtemplatebsubjectbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"NotificationTemplate.",(0,l.kt)("b",null,"subject"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/graphql/objects/convention"},(0,l.kt)("inlineCode",{parentName:"a"},"Convention")),"  ",(0,l.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/docs/graphql/objects/update-notification-template-payload"},(0,l.kt)("inlineCode",{parentName:"a"},"UpdateNotificationTemplatePayload")),"  ",(0,l.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);