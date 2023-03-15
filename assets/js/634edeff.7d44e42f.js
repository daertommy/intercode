"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[61449],{75631:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>g});var r=n(45721);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(g,l(l({ref:t},i),{},{components:n})):r.createElement(g,l({ref:t},i))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61260:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>u,SpecifiedBy:()=>d,assets:()=>s,contentTitle:()=>c,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var r=n(25577),o=n(45721),a=n(75631);const l={id:"delete-cms-content-group",title:"deleteCmsContentGroup",hide_table_of_contents:!1},c=void 0,p={unversionedId:"graphql/mutations/delete-cms-content-group",id:"graphql/mutations/delete-cms-content-group",title:"deleteCmsContentGroup",description:"No description",source:"@site/docs/graphql/mutations/delete-cms-content-group.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/delete-cms-content-group",permalink:"/docs/graphql/mutations/delete-cms-content-group",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/mutations/delete-cms-content-group.mdx",tags:[],version:"current",frontMatter:{id:"delete-cms-content-group",title:"deleteCmsContentGroup",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"createUserSignup",permalink:"/docs/graphql/mutations/create-user-signup"},next:{title:"deleteCmsFile",permalink:"/docs/graphql/mutations/delete-cms-file"}},s={},i=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>deleteCmsContentGroup.<b>input</b></code><Bullet /><code>DeleteCmsContentGroupInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-deletecmscontentgroupbinputbcodedeletecmscontentgroupinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>DeleteCmsContentGroupPayload</code> <Badge class="secondary" text="object"/>',id:"deletecmscontentgrouppayload-",level:4}],u=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{class:"badge badge--"+e.class},e.text)),g={toc:i,Bullet:u,SpecifiedBy:d,Badge:m},f="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"deleteCmsContentGroup(\n  input: DeleteCmsContentGroupInput!\n): DeleteCmsContentGroupPayload!\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-deletecmscontentgroupbinputbcodedeletecmscontentgroupinput--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"deleteCmsContentGroup.",(0,a.kt)("b",null,"input"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/delete-cms-content-group-input"},(0,a.kt)("inlineCode",{parentName:"a"},"DeleteCmsContentGroupInput!"))," ",(0,a.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Parameters for DeleteCmsContentGroup")),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"deletecmscontentgrouppayload-"},(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/delete-cms-content-group-payload"},(0,a.kt)("inlineCode",{parentName:"a"},"DeleteCmsContentGroupPayload"))," ",(0,a.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Autogenerated return type of DeleteCmsContentGroup.")))}y.isMDXComponent=!0}}]);