"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[63461],{75631:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(3289);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return a?r.createElement(b,o(o({ref:t},p),{},{components:a})):r.createElement(b,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},74566:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>u,SpecifiedBy:()=>d,assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=a(34489),n=a(3289),l=a(75631);const o={id:"set-cms-variable",title:"setCmsVariable",hide_table_of_contents:!1},i=void 0,s={unversionedId:"graphql/mutations/set-cms-variable",id:"graphql/mutations/set-cms-variable",title:"setCmsVariable",description:"No description",source:"@site/docs/graphql/mutations/set-cms-variable.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/set-cms-variable",permalink:"/docs/graphql/mutations/set-cms-variable",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/mutations/set-cms-variable.mdx",tags:[],version:"current",frontMatter:{id:"set-cms-variable",title:"setCmsVariable",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"sendNotificationPreview",permalink:"/docs/graphql/mutations/send-notification-preview"},next:{title:"setConventionCanceled",permalink:"/docs/graphql/mutations/set-convention-canceled"}},c={},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>setCmsVariable.<b>input</b></code><Bullet /><code>SetCmsVariableInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-setcmsvariablebinputbcodesetcmsvariableinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>SetCmsVariablePayload</code> <Badge class="secondary" text="object"/>',id:"setcmsvariablepayload-",level:4}],u=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{class:"badge badge--"+e.class},e.text)),b={toc:p,Bullet:u,SpecifiedBy:d,Badge:m};function f(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"setCmsVariable(\n  input: SetCmsVariableInput!\n): SetCmsVariablePayload!\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-setcmsvariablebinputbcodesetcmsvariableinput--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"setCmsVariable.",(0,l.kt)("b",null,"input"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/set-cms-variable-input"},(0,l.kt)("inlineCode",{parentName:"a"},"SetCmsVariableInput!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Parameters for SetCmsVariable")),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"setcmsvariablepayload-"},(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/set-cms-variable-payload"},(0,l.kt)("inlineCode",{parentName:"a"},"SetCmsVariablePayload"))," ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Autogenerated return type of SetCmsVariable")))}f.isMDXComponent=!0}}]);