"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[21839],{75631:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(3289);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,k=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(k,a(a({ref:t},s),{},{components:n})):r.createElement(k,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},95189:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(34489),o=n(3289),i=n(75631);const a={id:"ticket-mode",title:"TicketMode",hide_table_of_contents:!1},l=void 0,c={unversionedId:"graphql/enums/ticket-mode",id:"graphql/enums/ticket-mode",title:"TicketMode",description:"No description",source:"@site/docs/graphql/enums/ticket-mode.mdx",sourceDirName:"graphql/enums",slug:"/graphql/enums/ticket-mode",permalink:"/docs/graphql/enums/ticket-mode",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/enums/ticket-mode.mdx",tags:[],version:"current",frontMatter:{id:"ticket-mode",title:"TicketMode",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"SiteMode",permalink:"/docs/graphql/enums/site-mode"},next:{title:"TimezoneMode",permalink:"/docs/graphql/enums/timezone-mode"}},d={},s=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>TicketMode.<b>disabled</b></code>",id:"code-style-fontweight-normal-ticketmodebdisabledbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>TicketMode.<b>required_for_signup</b></code>",id:"code-style-fontweight-normal-ticketmodebrequired_for_signupbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>TicketMode.<b>ticket_per_event</b></code>",id:"code-style-fontweight-normal-ticketmodebticket_per_eventbcode",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,i.kt)(o.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{class:"badge badge--"+e.class},e.text)),k={toc:s,Bullet:p,SpecifiedBy:u,Badge:m};function f(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"enum TicketMode {\n  disabled\n  required_for_signup\n  ticket_per_event\n}\n")),(0,i.kt)("h3",{id:"values"},"Values"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-ticketmodebdisabledbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"TicketMode.",(0,i.kt)("b",null,"disabled")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Tickets are neither sold nor required in this convention")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-ticketmodebrequired_for_signupbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"TicketMode.",(0,i.kt)("b",null,"required_for_signup")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A valid ticket is required to sign up for events in this convention")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-ticketmodebticket_per_eventbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"TicketMode.",(0,i.kt)("b",null,"ticket_per_event")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Each event in this convention sells tickets separately")),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/graphql/objects/convention"},(0,i.kt)("inlineCode",{parentName:"a"},"Convention")),"  ",(0,i.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/docs/graphql/inputs/convention-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ConventionInput")),"  ",(0,i.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);