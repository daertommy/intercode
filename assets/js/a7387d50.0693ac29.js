"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[86831],{75631:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(45721);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,y=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(y,s(s({ref:t},p),{},{components:n})):r.createElement(y,s({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14789:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>u,SpecifiedBy:()=>d,assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=n(34489),o=n(45721),i=n(75631);const s={id:"convention-by-request-host-if-present",title:"conventionByRequestHostIfPresent",hide_table_of_contents:!1},a=void 0,c={unversionedId:"graphql/queries/convention-by-request-host-if-present",id:"graphql/queries/convention-by-request-host-if-present",title:"conventionByRequestHostIfPresent",description:"Returns the convention associated with the domain name of this HTTP request. If one is not",source:"@site/docs/graphql/queries/convention-by-request-host-if-present.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/convention-by-request-host-if-present",permalink:"/docs/graphql/queries/convention-by-request-host-if-present",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/queries/convention-by-request-host-if-present.mdx",tags:[],version:"current",frontMatter:{id:"convention-by-request-host-if-present",title:"conventionByRequestHostIfPresent",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"conventionById",permalink:"/docs/graphql/queries/convention-by-id"},next:{title:"conventionByRequestHost",permalink:"/docs/graphql/queries/convention-by-request-host"}},l={},p=[{value:"Type",id:"type",level:3},{value:'<code>Convention</code> <Badge class="secondary" text="object"/>',id:"convention-",level:4}],u=()=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,i.kt)(o.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{class:"badge badge--"+e.class},e.text)),y={toc:p,Bullet:u,SpecifiedBy:d,Badge:f};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Returns the convention associated with the domain name of this HTTP request. If one is not\npresent, returns null."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"conventionByRequestHostIfPresent: Convention\n")),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"convention-"},(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/convention"},(0,i.kt)("inlineCode",{parentName:"a"},"Convention"))," ",(0,i.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null))}m.isMDXComponent=!0}}]);