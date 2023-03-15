"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[20073],{75631:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(45721);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),h=n,f=u["".concat(p,".").concat(h)]||u[h]||d[h]||o;return a?r.createElement(f,i(i({ref:t},c),{},{components:a})):r.createElement(f,i({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},37403:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>h,Bullet:()=>u,SpecifiedBy:()=>d,assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=a(25577),n=a(45721),o=a(75631);const i={id:"has-oauth-applications",title:"hasOauthApplications",hide_table_of_contents:!1},l=void 0,p={unversionedId:"graphql/queries/has-oauth-applications",id:"graphql/queries/has-oauth-applications",title:"hasOauthApplications",description:"Returns whether or not this instance of Intercode has any third-party OAuth2 applications",source:"@site/docs/graphql/queries/has-oauth-applications.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/has-oauth-applications",permalink:"/docs/graphql/queries/has-oauth-applications",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/queries/has-oauth-applications.mdx",tags:[],version:"current",frontMatter:{id:"has-oauth-applications",title:"hasOauthApplications",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"email_routes_paginated",permalink:"/docs/graphql/queries/email-routes-paginated"},next:{title:"myAuthorizedApplications",permalink:"/docs/graphql/queries/my-authorized-applications"}},s={},c=[{value:"Type",id:"type",level:3},{value:'<code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"boolean-",level:4}],u=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),h=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:c,Bullet:u,SpecifiedBy:d,Badge:h},m="wrapper";function y(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Returns whether or not this instance of Intercode has any third-party OAuth2 applications\nset up. If not, the UI will not show the "Authorized Applications" menu item to users.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"hasOauthApplications: Boolean!\n")),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"boolean-"},(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,o.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Boolean")," scalar type represents ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),".")))}y.isMDXComponent=!0}}]);