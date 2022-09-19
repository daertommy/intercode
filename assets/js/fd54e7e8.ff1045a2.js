"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[60894],{75631:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(3289);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||l;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},70517:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>f,Bullet:()=>u,SpecifiedBy:()=>d,assets:()=>p,contentTitle:()=>i,default:()=>v,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(34489),a=r(3289),l=r(75631);const o={id:"create-filler-event",title:"createFillerEvent",hide_table_of_contents:!1},i=void 0,c={unversionedId:"graphql/mutations/create-filler-event",id:"graphql/mutations/create-filler-event",title:"createFillerEvent",description:"No description",source:"@site/docs/graphql/mutations/create-filler-event.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/create-filler-event",permalink:"/docs/graphql/mutations/create-filler-event",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/mutations/create-filler-event.mdx",tags:[],version:"current",frontMatter:{id:"create-filler-event",title:"createFillerEvent",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"createEvent",permalink:"/docs/graphql/mutations/create-event"},next:{title:"createFormItem",permalink:"/docs/graphql/mutations/create-form-item"}},p={},s=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>createFillerEvent.<b>input</b></code><Bullet /><code>CreateFillerEventInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-createfillereventbinputbcodecreatefillereventinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>CreateFillerEventPayload</code> <Badge class="secondary" text="object"/>',id:"createfillereventpayload-",level:4}],u=()=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,l.kt)(a.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:s,Bullet:u,SpecifiedBy:d,Badge:f};function v(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"createFillerEvent(\n  input: CreateFillerEventInput!\n): CreateFillerEventPayload!\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createfillereventbinputbcodecreatefillereventinput--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"createFillerEvent.",(0,l.kt)("b",null,"input"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/create-filler-event-input"},(0,l.kt)("inlineCode",{parentName:"a"},"CreateFillerEventInput!"))," ",(0,l.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Parameters for CreateFillerEvent")),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"createfillereventpayload-"},(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/create-filler-event-payload"},(0,l.kt)("inlineCode",{parentName:"a"},"CreateFillerEventPayload"))," ",(0,l.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Autogenerated return type of CreateFillerEvent")))}v.isMDXComponent=!0}}]);