"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[15556],{75631:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(45721);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),u=o,y=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(y,c(c({ref:t},p),{},{components:n})):r.createElement(y,c({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61772:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,SpecifiedBy:()=>m,assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var r=n(34489),o=n(45721),a=n(75631);const c={id:"cms-content-type-indicator",title:"CmsContentTypeIndicator",hide_table_of_contents:!1},i=void 0,l={unversionedId:"graphql/enums/cms-content-type-indicator",id:"graphql/enums/cms-content-type-indicator",title:"CmsContentTypeIndicator",description:"No description",source:"@site/docs/graphql/enums/cms-content-type-indicator.mdx",sourceDirName:"graphql/enums",slug:"/graphql/enums/cms-content-type-indicator",permalink:"/docs/graphql/enums/cms-content-type-indicator",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/enums/cms-content-type-indicator.mdx",tags:[],version:"current",frontMatter:{id:"cms-content-type-indicator",title:"CmsContentTypeIndicator",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"specifiedBy",permalink:"/docs/graphql/directives/specified-by"},next:{title:"EmailMode",permalink:"/docs/graphql/enums/email-mode"}},s={},p=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>CmsContentTypeIndicator.<b>CmsLayout</b></code>",id:"code-style-fontweight-normal-cmscontenttypeindicatorbcmslayoutbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CmsContentTypeIndicator.<b>CmsPartial</b></code>",id:"code-style-fontweight-normal-cmscontenttypeindicatorbcmspartialbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CmsContentTypeIndicator.<b>Page</b></code>",id:"code-style-fontweight-normal-cmscontenttypeindicatorbpagebcode",level:4},{value:"Member of",id:"member-of",level:3}],d=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{class:"badge badge--"+e.class},e.text)),y={toc:p,Bullet:d,SpecifiedBy:m,Badge:u};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum CmsContentTypeIndicator {\n  CmsLayout\n  CmsPartial\n  Page\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-cmscontenttypeindicatorbcmslayoutbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"CmsContentTypeIndicator.",(0,a.kt)("b",null,"CmsLayout")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-cmscontenttypeindicatorbcmspartialbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"CmsContentTypeIndicator.",(0,a.kt)("b",null,"CmsPartial")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-cmscontenttypeindicatorbpagebcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"CmsContentTypeIndicator.",(0,a.kt)("b",null,"Page")))),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/inputs/cms-content-input"},(0,a.kt)("inlineCode",{parentName:"a"},"CmsContentInput")),"  ",(0,a.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);