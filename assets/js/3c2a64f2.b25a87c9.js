"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[93732],{75631:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>y});var r=a(45721);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),i=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=i(a),d=n,y=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return a?r.createElement(y,l(l({ref:t},u),{},{components:a})):r.createElement(y,l({ref:t},u))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:n,l[1]=c;for(var i=2;i<o;i++)l[i]=a[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},13527:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>d,Bullet:()=>p,SpecifiedBy:()=>m,assets:()=>i,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=a(25577),n=a(45721),o=a(75631);const l={id:"create-cms-layout",title:"createCmsLayout",hide_table_of_contents:!1},c=void 0,s={unversionedId:"graphql/mutations/create-cms-layout",id:"graphql/mutations/create-cms-layout",title:"createCmsLayout",description:"No description",source:"@site/docs/graphql/mutations/create-cms-layout.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/create-cms-layout",permalink:"/docs/graphql/mutations/create-cms-layout",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/mutations/create-cms-layout.mdx",tags:[],version:"current",frontMatter:{id:"create-cms-layout",title:"createCmsLayout",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"createCmsGraphqlQuery",permalink:"/docs/graphql/mutations/create-cms-graphql-query"},next:{title:"createCmsNavigationItem",permalink:"/docs/graphql/mutations/create-cms-navigation-item"}},i={},u=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>createCmsLayout.<b>input</b></code><Bullet /><code>CreateCmsLayoutInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-createcmslayoutbinputbcodecreatecmslayoutinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>CreateCmsLayoutPayload</code> <Badge class="secondary" text="object"/>',id:"createcmslayoutpayload-",level:4}],p=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),y={toc:u,Bullet:p,SpecifiedBy:m,Badge:d},f="wrapper";function g(e){let{components:t,...a}=e;return(0,o.kt)(f,(0,r.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"createCmsLayout(\n  input: CreateCmsLayoutInput!\n): CreateCmsLayoutPayload!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-createcmslayoutbinputbcodecreatecmslayoutinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"createCmsLayout.",(0,o.kt)("b",null,"input"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/create-cms-layout-input"},(0,o.kt)("inlineCode",{parentName:"a"},"CreateCmsLayoutInput!"))," ",(0,o.kt)(d,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Parameters for CreateCmsLayout")),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"createcmslayoutpayload-"},(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/create-cms-layout-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"CreateCmsLayoutPayload"))," ",(0,o.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Autogenerated return type of CreateCmsLayout.")))}g.isMDXComponent=!0}}]);