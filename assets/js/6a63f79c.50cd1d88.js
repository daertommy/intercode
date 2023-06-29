"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[70723],{75631:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(45721);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,f=p["".concat(c,".").concat(d)]||p[d]||u[d]||l;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56653:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var r=n(91487),a=n(45721),l=n(75631);const o={id:"rename-cms-file",title:"renameCmsFile",hide_table_of_contents:!1},i=void 0,c={unversionedId:"graphql/mutations/rename-cms-file",id:"graphql/mutations/rename-cms-file",title:"renameCmsFile",description:"No description",source:"@site/docs/graphql/mutations/rename-cms-file.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/rename-cms-file",permalink:"/docs/graphql/mutations/rename-cms-file",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/mutations/rename-cms-file.mdx",tags:[],version:"current",frontMatter:{id:"rename-cms-file",title:"renameCmsFile",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"rejectSignupRequest",permalink:"/docs/graphql/mutations/reject-signup-request"},next:{title:"restoreDroppedEvent",permalink:"/docs/graphql/mutations/restore-dropped-event"}},s={},m=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>renameCmsFile.<b>input</b></code><Bullet /><code>RenameCmsFileInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-renamecmsfilebinputbcoderenamecmsfileinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>RenameCmsFilePayload</code> <Badge class="secondary" text="object"/>',id:"renamecmsfilepayload-",level:4}],p=()=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(a.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:m,Bullet:p,SpecifiedBy:u,Badge:d},y="wrapper";function g(e){let{components:t,...n}=e;return(0,l.kt)(y,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"renameCmsFile(\n  input: RenameCmsFileInput!\n): RenameCmsFilePayload!\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-renamecmsfilebinputbcoderenamecmsfileinput--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"renameCmsFile.",(0,l.kt)("b",null,"input"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/rename-cms-file-input"},(0,l.kt)("inlineCode",{parentName:"a"},"RenameCmsFileInput!"))," ",(0,l.kt)(d,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Parameters for RenameCmsFile")),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"renamecmsfilepayload-"},(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/rename-cms-file-payload"},(0,l.kt)("inlineCode",{parentName:"a"},"RenameCmsFilePayload"))," ",(0,l.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Autogenerated return type of RenameCmsFile.")))}g.isMDXComponent=!0}}]);