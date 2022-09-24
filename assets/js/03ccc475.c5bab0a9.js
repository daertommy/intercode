"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[95675],{75631:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(45721);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),d=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=d(n),y=a,g=u["".concat(i,".").concat(y)]||u[y]||s[y]||o;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},13405:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>y,Bullet:()=>s,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(34489),a=n(45721),o=n(75631);const l={id:"delete-event-category",title:"deleteEventCategory",hide_table_of_contents:!1},c=void 0,i={unversionedId:"graphql/mutations/delete-event-category",id:"graphql/mutations/delete-event-category",title:"deleteEventCategory",description:"No description",source:"@site/docs/graphql/mutations/delete-event-category.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/delete-event-category",permalink:"/docs/graphql/mutations/delete-event-category",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/mutations/delete-event-category.mdx",tags:[],version:"current",frontMatter:{id:"delete-event-category",title:"deleteEventCategory",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"deleteEmailRoute",permalink:"/docs/graphql/mutations/delete-email-route"},next:{title:"deleteEventProposal",permalink:"/docs/graphql/mutations/delete-event-proposal"}},d={},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>deleteEventCategory.<b>input</b></code><Bullet /><code>DeleteEventCategoryInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-deleteeventcategorybinputbcodedeleteeventcategoryinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>DeleteEventCategoryPayload</code> <Badge class="secondary" text="object"/>',id:"deleteeventcategorypayload-",level:4}],s=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),g={toc:p,Bullet:s,SpecifiedBy:u,Badge:y};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"deleteEventCategory(\n  input: DeleteEventCategoryInput!\n): DeleteEventCategoryPayload!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-deleteeventcategorybinputbcodedeleteeventcategoryinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"deleteEventCategory.",(0,o.kt)("b",null,"input"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/delete-event-category-input"},(0,o.kt)("inlineCode",{parentName:"a"},"DeleteEventCategoryInput!"))," ",(0,o.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Parameters for DeleteEventCategory")),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"deleteeventcategorypayload-"},(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/delete-event-category-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"DeleteEventCategoryPayload"))," ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Autogenerated return type of DeleteEventCategory")))}m.isMDXComponent=!0}}]);