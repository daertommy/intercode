"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[17557],{75631:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(3289);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(i,".").concat(m)]||u[m]||s[m]||a;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},60842:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>s,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>p,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=n(34489),o=n(3289),a=n(75631);const l={id:"drop-event",title:"dropEvent",hide_table_of_contents:!1},p=void 0,i={unversionedId:"graphql/mutations/drop-event",id:"graphql/mutations/drop-event",title:"dropEvent",description:"No description",source:"@site/docs/graphql/mutations/drop-event.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/drop-event",permalink:"/docs/graphql/mutations/drop-event",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/mutations/drop-event.mdx",tags:[],version:"current",frontMatter:{id:"drop-event",title:"dropEvent",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"deleteUserConProfile",permalink:"/docs/graphql/mutations/delete-user-con-profile"},next:{title:"forceConfirmSignup",permalink:"/docs/graphql/mutations/force-confirm-signup"}},c={},d=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>dropEvent.<b>input</b></code><Bullet /><code>DropEventInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-dropeventbinputbcodedropeventinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>DropEventPayload</code> <Badge class="secondary" text="object"/>',id:"dropeventpayload-",level:4}],s=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:d,Bullet:s,SpecifiedBy:u,Badge:m};function y(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"dropEvent(\n  input: DropEventInput!\n): DropEventPayload!\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-dropeventbinputbcodedropeventinput--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"dropEvent.",(0,a.kt)("b",null,"input"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/drop-event-input"},(0,a.kt)("inlineCode",{parentName:"a"},"DropEventInput!"))," ",(0,a.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Parameters for DropEvent")),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"dropeventpayload-"},(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/drop-event-payload"},(0,a.kt)("inlineCode",{parentName:"a"},"DropEventPayload"))," ",(0,a.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Autogenerated return type of DropEvent")))}y.isMDXComponent=!0}}]);