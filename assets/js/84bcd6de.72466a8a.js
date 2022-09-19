"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[28773],{75631:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var r=o(3289);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var d=r.createContext({}),c=function(e){var t=r.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(o),m=n,f=s["".concat(d,".").concat(m)]||s[m]||u[m]||a;return o?r.createElement(f,l(l({ref:t},p),{},{components:o})):r.createElement(f,l({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=s;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<a;c++)l[c]=o[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}s.displayName="MDXCreateElement"},88527:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>m,Bullet:()=>u,SpecifiedBy:()=>s,assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var r=o(34489),n=o(3289),a=o(75631);const l={id:"delete-room",title:"deleteRoom",hide_table_of_contents:!1},i=void 0,d={unversionedId:"graphql/mutations/delete-room",id:"graphql/mutations/delete-room",title:"deleteRoom",description:"No description",source:"@site/docs/graphql/mutations/delete-room.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/delete-room",permalink:"/docs/graphql/mutations/delete-room",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/mutations/delete-room.mdx",tags:[],version:"current",frontMatter:{id:"delete-room",title:"deleteRoom",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"deleteProduct",permalink:"/docs/graphql/mutations/delete-product"},next:{title:"deleteRun",permalink:"/docs/graphql/mutations/delete-run"}},c={},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>deleteRoom.<b>input</b></code><Bullet /><code>DeleteRoomInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-deleteroombinputbcodedeleteroominput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>DeleteRoomPayload</code> <Badge class="secondary" text="object"/>',id:"deleteroompayload-",level:4}],u=()=>(0,a.kt)(n.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,a.kt)(n.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,a.kt)(n.Fragment,null,(0,a.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:p,Bullet:u,SpecifiedBy:s,Badge:m};function y(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"deleteRoom(\n  input: DeleteRoomInput!\n): DeleteRoomPayload!\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-deleteroombinputbcodedeleteroominput--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"deleteRoom.",(0,a.kt)("b",null,"input"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/delete-room-input"},(0,a.kt)("inlineCode",{parentName:"a"},"DeleteRoomInput!"))," ",(0,a.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Parameters for DeleteRoom")),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"deleteroompayload-"},(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/delete-room-payload"},(0,a.kt)("inlineCode",{parentName:"a"},"DeleteRoomPayload"))," ",(0,a.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Autogenerated return type of DeleteRoom")))}y.isMDXComponent=!0}}]);