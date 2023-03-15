"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[79059],{75631:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(45721);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(r),g=a,m=p["".concat(s,".").concat(g)]||p[g]||d[g]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[p]="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},90023:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>g,Bullet:()=>p,SpecifiedBy:()=>d,assets:()=>l,contentTitle:()=>u,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(25577),a=r(45721),o=r(75631);const i={id:"create-signup-request",title:"createSignupRequest",hide_table_of_contents:!1},u=void 0,s={unversionedId:"graphql/mutations/create-signup-request",id:"graphql/mutations/create-signup-request",title:"createSignupRequest",description:"No description",source:"@site/docs/graphql/mutations/create-signup-request.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/create-signup-request",permalink:"/docs/graphql/mutations/create-signup-request",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/mutations/create-signup-request.mdx",tags:[],version:"current",frontMatter:{id:"create-signup-request",title:"createSignupRequest",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"createRun",permalink:"/docs/graphql/mutations/create-run"},next:{title:"createStaffPosition",permalink:"/docs/graphql/mutations/create-staff-position"}},l={},c=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>createSignupRequest.<b>input</b></code><Bullet /><code>CreateSignupRequestInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-createsignuprequestbinputbcodecreatesignuprequestinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>CreateSignupRequestPayload</code> <Badge class="secondary" text="object"/>',id:"createsignuprequestpayload-",level:4}],p=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:c,Bullet:p,SpecifiedBy:d,Badge:g},f="wrapper";function y(e){let{components:t,...r}=e;return(0,o.kt)(f,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"createSignupRequest(\n  input: CreateSignupRequestInput!\n): CreateSignupRequestPayload!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-createsignuprequestbinputbcodecreatesignuprequestinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"createSignupRequest.",(0,o.kt)("b",null,"input"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/create-signup-request-input"},(0,o.kt)("inlineCode",{parentName:"a"},"CreateSignupRequestInput!"))," ",(0,o.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Parameters for CreateSignupRequest")),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"createsignuprequestpayload-"},(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/create-signup-request-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"CreateSignupRequestPayload"))," ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Autogenerated return type of CreateSignupRequest.")))}y.isMDXComponent=!0}}]);