"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[24592],{75631:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(45721);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),s=u(n),g=a,m=s["".concat(i,".").concat(g)]||s[g]||d[g]||c;return n?r.createElement(m,p(p({ref:t},l),{},{components:n})):r.createElement(m,p({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,p=new Array(c);p[0]=g;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[s]="string"==typeof e?e:a,p[1]=o;for(var u=2;u<c;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},34699:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>s,SpecifiedBy:()=>d,assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>p,metadata:()=>i,toc:()=>l});var r=n(91487),a=n(45721),c=n(75631);const p={id:"accept-signup-request",title:"acceptSignupRequest",hide_table_of_contents:!1},o=void 0,i={unversionedId:"graphql/mutations/accept-signup-request",id:"graphql/mutations/accept-signup-request",title:"acceptSignupRequest",description:"No description",source:"@site/docs/graphql/mutations/accept-signup-request.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/accept-signup-request",permalink:"/docs/graphql/mutations/accept-signup-request",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/mutations/accept-signup-request.mdx",tags:[],version:"current",frontMatter:{id:"accept-signup-request",title:"acceptSignupRequest",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"acceptClickwrapAgreement",permalink:"/docs/graphql/mutations/accept-clickwrap-agreement"},next:{title:"addOrderEntryToCurrentPendingOrder",permalink:"/docs/graphql/mutations/add-order-entry-to-current-pending-order"}},u={},l=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>acceptSignupRequest.<b>input</b></code><Bullet /><code>AcceptSignupRequestInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-acceptsignuprequestbinputbcodeacceptsignuprequestinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>AcceptSignupRequestPayload</code> <Badge class="secondary" text="object"/>',id:"acceptsignuprequestpayload-",level:4}],s=()=>(0,c.kt)(a.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,c.kt)(a.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,c.kt)(a.Fragment,null,(0,c.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:l,Bullet:s,SpecifiedBy:d,Badge:g},y="wrapper";function f(e){let{components:t,...n}=e;return(0,c.kt)(y,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"No description"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"acceptSignupRequest(\n  input: AcceptSignupRequestInput!\n): AcceptSignupRequestPayload!\n")),(0,c.kt)("h3",{id:"arguments"},"Arguments"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-acceptsignuprequestbinputbcodeacceptsignuprequestinput--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"acceptSignupRequest.",(0,c.kt)("b",null,"input"))),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/accept-signup-request-input"},(0,c.kt)("inlineCode",{parentName:"a"},"AcceptSignupRequestInput!"))," ",(0,c.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(g,{class:"secondary",text:"input",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Parameters for AcceptSignupRequest")),(0,c.kt)("h3",{id:"type"},"Type"),(0,c.kt)("h4",{id:"acceptsignuprequestpayload-"},(0,c.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/accept-signup-request-payload"},(0,c.kt)("inlineCode",{parentName:"a"},"AcceptSignupRequestPayload"))," ",(0,c.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Autogenerated return type of AcceptSignupRequest.")))}f.isMDXComponent=!0}}]);