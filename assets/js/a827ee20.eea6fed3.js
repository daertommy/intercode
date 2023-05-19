"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[94613],{75631:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>g});var n=t(45721);function d(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){d(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,d=function(e,r){if(null==e)return{};var t,n,d={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(d[t]=e[t]);return d}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(d[t]=e[t])}return d}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,d=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),y=d,g=u["".concat(l,".").concat(y)]||u[y]||s[y]||o;return t?n.createElement(g,a(a({ref:r},p),{},{components:t})):n.createElement(g,a({ref:r},p))}));function g(e,r){var t=arguments,d=r&&r.mdxType;if("string"==typeof e||d){var o=t.length,a=new Array(o);a[0]=y;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[u]="string"==typeof e?e:d,a[1]=i;for(var c=2;c<o;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},11739:(e,r,t)=>{t.r(r),t.d(r,{Badge:()=>y,Bullet:()=>u,SpecifiedBy:()=>s,assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=t(64715),d=t(45721),o=t(75631);const a={id:"add-order-entry-to-current-pending-order",title:"addOrderEntryToCurrentPendingOrder",hide_table_of_contents:!1},i=void 0,l={unversionedId:"graphql/mutations/add-order-entry-to-current-pending-order",id:"graphql/mutations/add-order-entry-to-current-pending-order",title:"addOrderEntryToCurrentPendingOrder",description:"No description",source:"@site/docs/graphql/mutations/add-order-entry-to-current-pending-order.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/add-order-entry-to-current-pending-order",permalink:"/docs/graphql/mutations/add-order-entry-to-current-pending-order",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/mutations/add-order-entry-to-current-pending-order.mdx",tags:[],version:"current",frontMatter:{id:"add-order-entry-to-current-pending-order",title:"addOrderEntryToCurrentPendingOrder",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"acceptSignupRequest",permalink:"/docs/graphql/mutations/accept-signup-request"},next:{title:"attachImageToEventProposal",permalink:"/docs/graphql/mutations/attach-image-to-event-proposal"}},c={},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>addOrderEntryToCurrentPendingOrder.<b>input</b></code><Bullet /><code>AddOrderEntryToCurrentPendingOrderInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-addorderentrytocurrentpendingorderbinputbcodeaddorderentrytocurrentpendingorderinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>AddOrderEntryToCurrentPendingOrderPayload</code> <Badge class="secondary" text="object"/>',id:"addorderentrytocurrentpendingorderpayload-",level:4}],u=()=>(0,o.kt)(d.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,o.kt)(d.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,o.kt)(d.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),g={toc:p,Bullet:u,SpecifiedBy:s,Badge:y},m="wrapper";function f(e){let{components:r,...t}=e;return(0,o.kt)(m,(0,n.Z)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"addOrderEntryToCurrentPendingOrder(\n  input: AddOrderEntryToCurrentPendingOrderInput!\n): AddOrderEntryToCurrentPendingOrderPayload!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addorderentrytocurrentpendingorderbinputbcodeaddorderentrytocurrentpendingorderinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"addOrderEntryToCurrentPendingOrder.",(0,o.kt)("b",null,"input"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/add-order-entry-to-current-pending-order-input"},(0,o.kt)("inlineCode",{parentName:"a"},"AddOrderEntryToCurrentPendingOrderInput!"))," ",(0,o.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Parameters for AddOrderEntryToCurrentPendingOrder")),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"addorderentrytocurrentpendingorderpayload-"},(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/add-order-entry-to-current-pending-order-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"AddOrderEntryToCurrentPendingOrderPayload"))," ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Autogenerated return type of AddOrderEntryToCurrentPendingOrder.")))}f.isMDXComponent=!0}}]);