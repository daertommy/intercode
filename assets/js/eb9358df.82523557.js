"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[40565],{75631:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(45721);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=p(n),v=o,m=s["".concat(l,".").concat(v)]||s[v]||u[v]||i;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=v;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},6193:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>v,Bullet:()=>s,SpecifiedBy:()=>u,assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(64715),o=n(45721),i=n(75631);const a={id:"provide-event-ticket",title:"provideEventTicket",hide_table_of_contents:!1},c=void 0,l={unversionedId:"graphql/mutations/provide-event-ticket",id:"graphql/mutations/provide-event-ticket",title:"provideEventTicket",description:"No description",source:"@site/docs/graphql/mutations/provide-event-ticket.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/provide-event-ticket",permalink:"/docs/graphql/mutations/provide-event-ticket",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/mutations/provide-event-ticket.mdx",tags:[],version:"current",frontMatter:{id:"provide-event-ticket",title:"provideEventTicket",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"moveFormSection",permalink:"/docs/graphql/mutations/move-form-section"},next:{title:"rateEvent",permalink:"/docs/graphql/mutations/rate-event"}},p={},d=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>provideEventTicket.<b>input</b></code><Bullet /><code>ProvideEventTicketInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-provideeventticketbinputbcodeprovideeventticketinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>ProvideEventTicketPayload</code> <Badge class="secondary" text="object"/>',id:"provideeventticketpayload-",level:4}],s=()=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,i.kt)(o.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),v=e=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:s,SpecifiedBy:u,Badge:v},k="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(k,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"provideEventTicket(\n  input: ProvideEventTicketInput!\n): ProvideEventTicketPayload!\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-provideeventticketbinputbcodeprovideeventticketinput--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"provideEventTicket.",(0,i.kt)("b",null,"input"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/provide-event-ticket-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ProvideEventTicketInput!"))," ",(0,i.kt)(v,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(v,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Parameters for ProvideEventTicket")),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"provideeventticketpayload-"},(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/provide-event-ticket-payload"},(0,i.kt)("inlineCode",{parentName:"a"},"ProvideEventTicketPayload"))," ",(0,i.kt)(v,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Autogenerated return type of ProvideEventTicket.")))}f.isMDXComponent=!0}}]);