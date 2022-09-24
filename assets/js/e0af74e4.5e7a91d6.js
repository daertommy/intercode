"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[34800],{75631:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(45721);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),s=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,v=u["".concat(i,".").concat(m)]||u[m]||p[m]||r;return n?o.createElement(v,c(c({ref:t},d),{},{components:n})):o.createElement(v,c({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<r;s++)c[s]=n[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},55894:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var o=n(34489),a=n(45721),r=n(75631);const c={id:"set-convention-canceled",title:"setConventionCanceled",hide_table_of_contents:!1},l=void 0,i={unversionedId:"graphql/mutations/set-convention-canceled",id:"graphql/mutations/set-convention-canceled",title:"setConventionCanceled",description:"No description",source:"@site/docs/graphql/mutations/set-convention-canceled.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/set-convention-canceled",permalink:"/docs/graphql/mutations/set-convention-canceled",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/mutations/set-convention-canceled.mdx",tags:[],version:"current",frontMatter:{id:"set-convention-canceled",title:"setConventionCanceled",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"setCmsVariable",permalink:"/docs/graphql/mutations/set-cms-variable"},next:{title:"sortCmsNavigationItems",permalink:"/docs/graphql/mutations/sort-cms-navigation-items"}},s={},d=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>setConventionCanceled.<b>input</b></code><Bullet /><code>SetConventionCanceledInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-setconventioncanceledbinputbcodesetconventioncanceledinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>SetConventionCanceledPayload</code> <Badge class="secondary" text="object"/>',id:"setconventioncanceledpayload-",level:4}],p=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{class:"badge badge--"+e.class},e.text)),v={toc:d,Bullet:p,SpecifiedBy:u,Badge:m};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"setConventionCanceled(\n  input: SetConventionCanceledInput!\n): SetConventionCanceledPayload!\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-setconventioncanceledbinputbcodesetconventioncanceledinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"setConventionCanceled.",(0,r.kt)("b",null,"input"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/set-convention-canceled-input"},(0,r.kt)("inlineCode",{parentName:"a"},"SetConventionCanceledInput!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Parameters for SetConventionCanceled")),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"setconventioncanceledpayload-"},(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/set-convention-canceled-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"SetConventionCanceledPayload"))," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Autogenerated return type of SetConventionCanceled")))}f.isMDXComponent=!0}}]);