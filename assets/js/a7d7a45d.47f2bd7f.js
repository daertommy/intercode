"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[99073],{75631:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>p});var r=n(45721);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(n),p=i,f=m["".concat(u,".").concat(p)]||m[p]||d[p]||a;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87756:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(34489),i=(n(45721),n(75631));const a={id:"event-admin-menu",title:"event_admin_menu"},o=void 0,c={unversionedId:"liquid/tags/event-admin-menu",id:"liquid/tags/event-admin-menu",title:"event_admin_menu",description:"Renders an event's admin menu, if the user is permitted to administer the event.",source:"@site/docs/liquid/tags/event-admin-menu.mdx",sourceDirName:"liquid/tags",slug:"/liquid/tags/event-admin-menu",permalink:"/docs/liquid/tags/event-admin-menu",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/liquid/tags/event-admin-menu.mdx",tags:[],version:"current",frontMatter:{id:"event-admin-menu",title:"event_admin_menu"},sidebar:"sidebar",previous:{title:"cookie_consent",permalink:"/docs/liquid/tags/cookie-consent"},next:{title:"event_runs_section",permalink:"/docs/liquid/tags/event-runs-section"}},u={},s=[{value:"Examples",id:"examples",level:3}],l={toc:s};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Renders an event's admin menu, if the user is permitted to administer the event.\nRequires specifying an event ID."),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-liquid"},"{% event_admin_menu 1234 %}\n")))}d.isMDXComponent=!0}}]);