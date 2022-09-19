"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[19368],{75631:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(3289);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),k=a,m=u["".concat(c,".").concat(k)]||u[k]||s[k]||l;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},48236:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>k,Bullet:()=>s,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(34489),a=n(3289),l=n(75631);const i={id:"delete-ticket",title:"deleteTicket",hide_table_of_contents:!1},o=void 0,c={unversionedId:"graphql/mutations/delete-ticket",id:"graphql/mutations/delete-ticket",title:"deleteTicket",description:"No description",source:"@site/docs/graphql/mutations/delete-ticket.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/delete-ticket",permalink:"/docs/graphql/mutations/delete-ticket",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/mutations/delete-ticket.mdx",tags:[],version:"current",frontMatter:{id:"delete-ticket",title:"deleteTicket",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"deleteTicketType",permalink:"/docs/graphql/mutations/delete-ticket-type"},next:{title:"deleteUserActivityAlert",permalink:"/docs/graphql/mutations/delete-user-activity-alert"}},d={},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>deleteTicket.<b>input</b></code><Bullet /><code>DeleteTicketInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-deleteticketbinputbcodedeleteticketinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>DeleteTicketPayload</code> <Badge class="secondary" text="object"/>',id:"deleteticketpayload-",level:4}],s=()=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(a.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),k=e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:p,Bullet:s,SpecifiedBy:u,Badge:k};function y(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"deleteTicket(\n  input: DeleteTicketInput!\n): DeleteTicketPayload!\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-deleteticketbinputbcodedeleteticketinput--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"deleteTicket.",(0,l.kt)("b",null,"input"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/delete-ticket-input"},(0,l.kt)("inlineCode",{parentName:"a"},"DeleteTicketInput!"))," ",(0,l.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(k,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Parameters for DeleteTicket")),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"deleteticketpayload-"},(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/delete-ticket-payload"},(0,l.kt)("inlineCode",{parentName:"a"},"DeleteTicketPayload"))," ",(0,l.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Autogenerated return type of DeleteTicket")))}y.isMDXComponent=!0}}]);