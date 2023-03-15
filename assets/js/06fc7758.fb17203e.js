"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[20215],{75631:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(45721);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},d=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=i(n),m=a,f=c["".concat(p,".").concat(m)]||c[m]||s[m]||o;return n?r.createElement(f,u(u({ref:t},d),{},{components:n})):r.createElement(f,u({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,u[1]=l;for(var i=2;i<o;i++)u[i]=n[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38866:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>c,SpecifiedBy:()=>s,assets:()=>i,contentTitle:()=>l,default:()=>g,frontMatter:()=>u,metadata:()=>p,toc:()=>d});var r=n(25577),a=n(45721),o=n(75631);const u={id:"update-run",title:"updateRun",hide_table_of_contents:!1},l=void 0,p={unversionedId:"graphql/mutations/update-run",id:"graphql/mutations/update-run",title:"updateRun",description:"No description",source:"@site/docs/graphql/mutations/update-run.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/update-run",permalink:"/docs/graphql/mutations/update-run",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/mutations/update-run.mdx",tags:[],version:"current",frontMatter:{id:"update-run",title:"updateRun",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"updateRootSite",permalink:"/docs/graphql/mutations/update-root-site"},next:{title:"updateSignupBucket",permalink:"/docs/graphql/mutations/update-signup-bucket"}},i={},d=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>updateRun.<b>input</b></code><Bullet /><code>UpdateRunInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updaterunbinputbcodeupdateruninput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>UpdateRunPayload</code> <Badge class="secondary" text="object"/>',id:"updaterunpayload-",level:4}],c=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:d,Bullet:c,SpecifiedBy:s,Badge:m},y="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(y,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"updateRun(\n  input: UpdateRunInput!\n): UpdateRunPayload!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updaterunbinputbcodeupdateruninput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"updateRun.",(0,o.kt)("b",null,"input"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/update-run-input"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateRunInput!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Parameters for UpdateRun")),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"updaterunpayload-"},(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/update-run-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateRunPayload"))," ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Autogenerated return type of UpdateRun.")))}g.isMDXComponent=!0}}]);