"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[30170],{75631:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>k});var a=t(45721);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),p=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return a.createElement(l.Provider,{value:r},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),s=p(t),m=n,k=s["".concat(l,".").concat(m)]||s[m]||u[m]||o;return t?a.createElement(k,i(i({ref:r},c),{},{components:t})):a.createElement(k,i({ref:r},c))}));function k(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=m;var d={};for(var l in r)hasOwnProperty.call(r,l)&&(d[l]=r[l]);d.originalType=e,d[s]="string"==typeof e?e:n,i[1]=d;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},33747:(e,r,t)=>{t.r(r),t.d(r,{Badge:()=>m,Bullet:()=>s,SpecifiedBy:()=>u,assets:()=>p,contentTitle:()=>d,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=t(25577),n=t(45721),o=t(75631);const i={id:"mark-order-paid",title:"markOrderPaid",hide_table_of_contents:!1},d=void 0,l={unversionedId:"graphql/mutations/mark-order-paid",id:"graphql/mutations/mark-order-paid",title:"markOrderPaid",description:"No description",source:"@site/docs/graphql/mutations/mark-order-paid.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/mark-order-paid",permalink:"/docs/graphql/mutations/mark-order-paid",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/mutations/mark-order-paid.mdx",tags:[],version:"current",frontMatter:{id:"mark-order-paid",title:"markOrderPaid",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"forceConfirmSignup",permalink:"/docs/graphql/mutations/force-confirm-signup"},next:{title:"mergeUsers",permalink:"/docs/graphql/mutations/merge-users"}},p={},c=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>markOrderPaid.<b>input</b></code><Bullet /><code>MarkOrderPaidInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-markorderpaidbinputbcodemarkorderpaidinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>MarkOrderPaidPayload</code> <Badge class="secondary" text="object"/>',id:"markorderpaidpayload-",level:4}],s=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),k={toc:c,Bullet:s,SpecifiedBy:u,Badge:m},f="wrapper";function y(e){let{components:r,...t}=e;return(0,o.kt)(f,(0,a.Z)({},k,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"markOrderPaid(\n  input: MarkOrderPaidInput!\n): MarkOrderPaidPayload!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-markorderpaidbinputbcodemarkorderpaidinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"markOrderPaid.",(0,o.kt)("b",null,"input"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/mark-order-paid-input"},(0,o.kt)("inlineCode",{parentName:"a"},"MarkOrderPaidInput!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Parameters for MarkOrderPaid")),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"markorderpaidpayload-"},(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/mark-order-paid-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"MarkOrderPaidPayload"))," ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Autogenerated return type of MarkOrderPaid.")))}y.isMDXComponent=!0}}]);