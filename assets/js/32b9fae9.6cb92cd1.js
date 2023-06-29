"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[49873],{75631:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(45721);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),g=a,m=p["".concat(c,".").concat(g)]||p[g]||d[g]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[p]="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},94449:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>p,SpecifiedBy:()=>d,assets:()=>s,contentTitle:()=>u,default:()=>y,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(91487),a=n(45721),o=n(75631);const i={id:"reject-signup-request",title:"rejectSignupRequest",hide_table_of_contents:!1},u=void 0,c={unversionedId:"graphql/mutations/reject-signup-request",id:"graphql/mutations/reject-signup-request",title:"rejectSignupRequest",description:"No description",source:"@site/docs/graphql/mutations/reject-signup-request.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/reject-signup-request",permalink:"/docs/graphql/mutations/reject-signup-request",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/mutations/reject-signup-request.mdx",tags:[],version:"current",frontMatter:{id:"reject-signup-request",title:"rejectSignupRequest",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"rateEvent",permalink:"/docs/graphql/mutations/rate-event"},next:{title:"renameCmsFile",permalink:"/docs/graphql/mutations/rename-cms-file"}},s={},l=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>rejectSignupRequest.<b>input</b></code><Bullet /><code>RejectSignupRequestInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-rejectsignuprequestbinputbcoderejectsignuprequestinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>RejectSignupRequestPayload</code> <Badge class="secondary" text="object"/>',id:"rejectsignuprequestpayload-",level:4}],p=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:l,Bullet:p,SpecifiedBy:d,Badge:g},f="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"rejectSignupRequest(\n  input: RejectSignupRequestInput!\n): RejectSignupRequestPayload!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-rejectsignuprequestbinputbcoderejectsignuprequestinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"rejectSignupRequest.",(0,o.kt)("b",null,"input"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/reject-signup-request-input"},(0,o.kt)("inlineCode",{parentName:"a"},"RejectSignupRequestInput!"))," ",(0,o.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Parameters for RejectSignupRequest")),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"rejectsignuprequestpayload-"},(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/reject-signup-request-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"RejectSignupRequestPayload"))," ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Autogenerated return type of RejectSignupRequest.")))}y.isMDXComponent=!0}}]);