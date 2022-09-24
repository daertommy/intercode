"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[18466],{75631:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>d});var n=o(45721);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),m=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=m(o),d=r,f=u["".concat(l,".").concat(d)]||u[d]||p[d]||a;return o?n.createElement(f,i(i({ref:t},s),{},{components:o})):n.createElement(f,i({ref:t},s))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var m=2;m<a;m++)i[m]=o[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},89997:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>d,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>m,contentTitle:()=>c,default:()=>v,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=o(34489),r=o(45721),a=o(75631);const i={id:"move-form-section",title:"moveFormSection",hide_table_of_contents:!1},c=void 0,l={unversionedId:"graphql/mutations/move-form-section",id:"graphql/mutations/move-form-section",title:"moveFormSection",description:"No description",source:"@site/docs/graphql/mutations/move-form-section.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/move-form-section",permalink:"/docs/graphql/mutations/move-form-section",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/mutations/move-form-section.mdx",tags:[],version:"current",frontMatter:{id:"move-form-section",title:"moveFormSection",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"moveFormItem",permalink:"/docs/graphql/mutations/move-form-item"},next:{title:"provideEventTicket",permalink:"/docs/graphql/mutations/provide-event-ticket"}},m={},s=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>moveFormSection.<b>input</b></code><Bullet /><code>MoveFormSectionInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-moveformsectionbinputbcodemoveformsectioninput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>MoveFormSectionPayload</code> <Badge class="secondary" text="object"/>',id:"moveformsectionpayload-",level:4}],p=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:s,Bullet:p,SpecifiedBy:u,Badge:d};function v(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"moveFormSection(\n  input: MoveFormSectionInput!\n): MoveFormSectionPayload!\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-moveformsectionbinputbcodemoveformsectioninput--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"moveFormSection.",(0,a.kt)("b",null,"input"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/move-form-section-input"},(0,a.kt)("inlineCode",{parentName:"a"},"MoveFormSectionInput!"))," ",(0,a.kt)(d,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Parameters for MoveFormSection")),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"moveformsectionpayload-"},(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/move-form-section-payload"},(0,a.kt)("inlineCode",{parentName:"a"},"MoveFormSectionPayload"))," ",(0,a.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Autogenerated return type of MoveFormSection")))}v.isMDXComponent=!0}}]);