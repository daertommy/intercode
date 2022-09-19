"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[51684],{75631:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(3289);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=l(n),u=o,m=s["".concat(d,".").concat(u)]||s[u]||v[u]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=s;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},72967:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>v,SpecifiedBy:()=>s,assets:()=>l,contentTitle:()=>c,default:()=>k,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var r=n(34489),o=n(3289),i=n(75631);const a={id:"convert-ticket-to-event-provided",title:"convertTicketToEventProvided",hide_table_of_contents:!1},c=void 0,d={unversionedId:"graphql/mutations/convert-ticket-to-event-provided",id:"graphql/mutations/convert-ticket-to-event-provided",title:"convertTicketToEventProvided",description:"No description",source:"@site/docs/graphql/mutations/convert-ticket-to-event-provided.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/convert-ticket-to-event-provided",permalink:"/docs/graphql/mutations/convert-ticket-to-event-provided",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/mutations/convert-ticket-to-event-provided.mdx",tags:[],version:"current",frontMatter:{id:"convert-ticket-to-event-provided",title:"convertTicketToEventProvided",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"cancelOrder",permalink:"/docs/graphql/mutations/cancel-order"},next:{title:"createCmsContentGroup",permalink:"/docs/graphql/mutations/create-cms-content-group"}},l={},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>convertTicketToEventProvided.<b>input</b></code><Bullet /><code>ConvertTicketToEventProvidedInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-converttickettoeventprovidedbinputbcodeconverttickettoeventprovidedinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>ConvertTicketToEventProvidedPayload</code> <Badge class="secondary" text="object"/>',id:"converttickettoeventprovidedpayload-",level:4}],v=()=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,i.kt)(o.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:p,Bullet:v,SpecifiedBy:s,Badge:u};function k(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"convertTicketToEventProvided(\n  input: ConvertTicketToEventProvidedInput!\n): ConvertTicketToEventProvidedPayload!\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-converttickettoeventprovidedbinputbcodeconverttickettoeventprovidedinput--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"convertTicketToEventProvided.",(0,i.kt)("b",null,"input"))),(0,i.kt)(v,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/convert-ticket-to-event-provided-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ConvertTicketToEventProvidedInput!"))," ",(0,i.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Parameters for ConvertTicketToEventProvided")),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"converttickettoeventprovidedpayload-"},(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/convert-ticket-to-event-provided-payload"},(0,i.kt)("inlineCode",{parentName:"a"},"ConvertTicketToEventProvidedPayload"))," ",(0,i.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Autogenerated return type of ConvertTicketToEventProvided")))}k.isMDXComponent=!0}}]);