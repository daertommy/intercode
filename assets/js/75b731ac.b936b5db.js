"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[65515],{75631:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(3289);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),u=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,y=m["".concat(c,".").concat(d)]||m[d]||s[d]||o;return r?a.createElement(y,l(l({ref:t},p),{},{components:r})):a.createElement(y,l({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},62042:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>d,Bullet:()=>s,SpecifiedBy:()=>m,assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=r(34489),n=r(3289),o=r(75631);const l={id:"create-email-route",title:"createEmailRoute",hide_table_of_contents:!1},i=void 0,c={unversionedId:"graphql/mutations/create-email-route",id:"graphql/mutations/create-email-route",title:"createEmailRoute",description:"No description",source:"@site/docs/graphql/mutations/create-email-route.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/create-email-route",permalink:"/docs/graphql/mutations/create-email-route",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/mutations/create-email-route.mdx",tags:[],version:"current",frontMatter:{id:"create-email-route",title:"createEmailRoute",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"createDepartment",permalink:"/docs/graphql/mutations/create-department"},next:{title:"createEventCategory",permalink:"/docs/graphql/mutations/create-event-category"}},u={},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>createEmailRoute.<b>input</b></code><Bullet /><code>CreateEmailRouteInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-createemailroutebinputbcodecreateemailrouteinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>CreateEmailRoutePayload</code> <Badge class="secondary" text="object"/>',id:"createemailroutepayload-",level:4}],s=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),y={toc:p,Bullet:s,SpecifiedBy:m,Badge:d};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"createEmailRoute(\n  input: CreateEmailRouteInput!\n): CreateEmailRoutePayload!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-createemailroutebinputbcodecreateemailrouteinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"createEmailRoute.",(0,o.kt)("b",null,"input"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/create-email-route-input"},(0,o.kt)("inlineCode",{parentName:"a"},"CreateEmailRouteInput!"))," ",(0,o.kt)(d,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Parameters for CreateEmailRoute")),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"createemailroutepayload-"},(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/create-email-route-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"CreateEmailRoutePayload"))," ",(0,o.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Autogenerated return type of CreateEmailRoute")))}f.isMDXComponent=!0}}]);