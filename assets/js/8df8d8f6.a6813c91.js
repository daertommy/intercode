"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[13786],{75631:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(45721);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=d(n),m=a,f=s["".concat(u,".").concat(m)]||s[m]||p[m]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},50018:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>s,assets:()=>d,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var r=n(34489),a=n(45721),l=n(75631);const o={id:"delete-run",title:"deleteRun",hide_table_of_contents:!1},i=void 0,u={unversionedId:"graphql/mutations/delete-run",id:"graphql/mutations/delete-run",title:"deleteRun",description:"No description",source:"@site/docs/graphql/mutations/delete-run.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/delete-run",permalink:"/docs/graphql/mutations/delete-run",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/mutations/delete-run.mdx",tags:[],version:"current",frontMatter:{id:"delete-run",title:"deleteRun",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"deleteRoom",permalink:"/docs/graphql/mutations/delete-room"},next:{title:"deleteStaffPosition",permalink:"/docs/graphql/mutations/delete-staff-position"}},d={},c=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>deleteRun.<b>input</b></code><Bullet /><code>DeleteRunInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-deleterunbinputbcodedeleteruninput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>DeleteRunPayload</code> <Badge class="secondary" text="object"/>',id:"deleterunpayload-",level:4}],p=()=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,l.kt)(a.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:c,Bullet:p,SpecifiedBy:s,Badge:m};function y(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"deleteRun(\n  input: DeleteRunInput!\n): DeleteRunPayload!\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-deleterunbinputbcodedeleteruninput--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"deleteRun.",(0,l.kt)("b",null,"input"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/delete-run-input"},(0,l.kt)("inlineCode",{parentName:"a"},"DeleteRunInput!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Parameters for DeleteRun")),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"deleterunpayload-"},(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/delete-run-payload"},(0,l.kt)("inlineCode",{parentName:"a"},"DeleteRunPayload"))," ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Autogenerated return type of DeleteRun")))}y.isMDXComponent=!0}}]);