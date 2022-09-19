"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[62573],{75631:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(3289);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),c=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,f=s["".concat(i,".").concat(m)]||s[m]||d[m]||l;return n?o.createElement(f,r(r({ref:t},u),{},{components:n})):o.createElement(f,r({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var c=2;c<l;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},21766:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>d,SpecifiedBy:()=>s,assets:()=>c,contentTitle:()=>p,default:()=>y,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var o=n(34489),a=n(3289),l=n(75631);const r={id:"delete-coupon-application",title:"deleteCouponApplication",hide_table_of_contents:!1},p=void 0,i={unversionedId:"graphql/mutations/delete-coupon-application",id:"graphql/mutations/delete-coupon-application",title:"deleteCouponApplication",description:"No description",source:"@site/docs/graphql/mutations/delete-coupon-application.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/delete-coupon-application",permalink:"/docs/graphql/mutations/delete-coupon-application",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/mutations/delete-coupon-application.mdx",tags:[],version:"current",frontMatter:{id:"delete-coupon-application",title:"deleteCouponApplication",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"deleteCmsVariable",permalink:"/docs/graphql/mutations/delete-cms-variable"},next:{title:"deleteCoupon",permalink:"/docs/graphql/mutations/delete-coupon"}},c={},u=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>deleteCouponApplication.<b>input</b></code><Bullet /><code>DeleteCouponApplicationInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-deletecouponapplicationbinputbcodedeletecouponapplicationinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>DeleteCouponApplicationPayload</code> <Badge class="secondary" text="object"/>',id:"deletecouponapplicationpayload-",level:4}],d=()=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,l.kt)(a.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:u,Bullet:d,SpecifiedBy:s,Badge:m};function y(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"deleteCouponApplication(\n  input: DeleteCouponApplicationInput!\n): DeleteCouponApplicationPayload!\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-deletecouponapplicationbinputbcodedeletecouponapplicationinput--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"deleteCouponApplication.",(0,l.kt)("b",null,"input"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/delete-coupon-application-input"},(0,l.kt)("inlineCode",{parentName:"a"},"DeleteCouponApplicationInput!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Parameters for DeleteCouponApplication")),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"deletecouponapplicationpayload-"},(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/delete-coupon-application-payload"},(0,l.kt)("inlineCode",{parentName:"a"},"DeleteCouponApplicationPayload"))," ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Autogenerated return type of DeleteCouponApplication")))}y.isMDXComponent=!0}}]);