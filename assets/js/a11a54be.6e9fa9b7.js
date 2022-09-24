"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[3201],{75631:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var o=n(45721);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),c=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,k=p["".concat(a,".").concat(m)]||p[m]||u[m]||i;return n?o.createElement(k,l(l({ref:t},s),{},{components:n})):o.createElement(k,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var d={};for(var a in t)hasOwnProperty.call(t,a)&&(d[a]=t[a]);d.originalType=e,d.mdxType="string"==typeof e?e:r,l[1]=d;for(var c=2;c<i;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},28794:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var o=n(34489),r=(n(45721),n(75631));const i={id:"registration-policy-bucket-drop",title:"RegistrationPolicy::BucketDrop"},l=void 0,d={unversionedId:"liquid/drops/registration-policy-bucket-drop",id:"liquid/drops/registration-policy-bucket-drop",title:"RegistrationPolicy::BucketDrop",description:"A registration bucket for an event",source:"@site/docs/liquid/drops/registration-policy-bucket-drop.mdx",sourceDirName:"liquid/drops",slug:"/liquid/drops/registration-policy-bucket-drop",permalink:"/docs/liquid/drops/registration-policy-bucket-drop",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/liquid/drops/registration-policy-bucket-drop.mdx",tags:[],version:"current",frontMatter:{id:"registration-policy-bucket-drop",title:"RegistrationPolicy::BucketDrop"},sidebar:"sidebar",previous:{title:"ProductVariantDrop",permalink:"/docs/liquid/drops/product-variant-drop"},next:{title:"RunAvailabilityDrop",permalink:"/docs/liquid/drops/run-availability-drop"}},a={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>anything</code> (<code>Boolean</code>)",id:"anything-boolean",level:4},{value:"<code>description</code> (<code>String</code>)",id:"description-string",level:4},{value:"<code>expose_attendees</code> (<code>Boolean</code>)",id:"expose_attendees-boolean",level:4},{value:"<code>key</code> (<code>String</code>)",id:"key-string",level:4},{value:"<code>minimum_slots</code> (<code>Integer</code>)",id:"minimum_slots-integer",level:4},{value:"<code>name</code> (<code>String</code>)",id:"name-string",level:4},{value:"<code>not_counted</code> (<code>Boolean</code>)",id:"not_counted-boolean",level:4},{value:"<code>preferred_slots</code> (<code>Integer</code>)",id:"preferred_slots-integer",level:4},{value:"<code>slots_limited</code> (<code>Boolean</code>)",id:"slots_limited-boolean",level:4},{value:"<code>total_slots</code> (<code>Integer</code>)",id:"total_slots-integer",level:4}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A registration bucket for an event"),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"anything-boolean"},(0,r.kt)("inlineCode",{parentName:"h4"},"anything")," (",(0,r.kt)("code",null,"Boolean"),")"),(0,r.kt)("p",null,'Whether or not this is a "flex" bucket ("anything" is a legacy term for\n"flex")'),(0,r.kt)("h4",{id:"description-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,r.kt)("code",null,"String"),")"),(0,r.kt)("p",null,"A long-form description for the bucket (currently not exposed anywhere)"),(0,r.kt)("h4",{id:"expose_attendees-boolean"},(0,r.kt)("inlineCode",{parentName:"h4"},"expose_attendees")," (",(0,r.kt)("code",null,"Boolean"),")"),(0,r.kt)("p",null,"Whether or not to allow other attendees to see that a person is in this\nbucket in the signup summary page"),(0,r.kt)("h4",{id:"key-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"key")," (",(0,r.kt)("code",null,"String"),")"),(0,r.kt)("p",null,"The unique string identifier for this bucket"),(0,r.kt)("h4",{id:"minimum_slots-integer"},(0,r.kt)("inlineCode",{parentName:"h4"},"minimum_slots")," (",(0,r.kt)("code",null,"Integer"),")"),(0,r.kt)("p",null,"The minimum number of attendees needed for this bucket"),(0,r.kt)("h4",{id:"name-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,r.kt)("code",null,"String"),")"),(0,r.kt)("p",null,"The name of this bucket"),(0,r.kt)("h4",{id:"not_counted-boolean"},(0,r.kt)("inlineCode",{parentName:"h4"},"not_counted")," (",(0,r.kt)("code",null,"Boolean"),")"),(0,r.kt)("p",null,"If true, attendees in this bucket are not counted towards total attendees\nfor runs of this event, and this event will not count towards their maximum\nevent signups allowed"),(0,r.kt)("h4",{id:"preferred_slots-integer"},(0,r.kt)("inlineCode",{parentName:"h4"},"preferred_slots")," (",(0,r.kt)("code",null,"Integer"),")"),(0,r.kt)("p",null,"The preferred number of attendees for this bucket"),(0,r.kt)("h4",{id:"slots_limited-boolean"},(0,r.kt)("inlineCode",{parentName:"h4"},"slots_limited")," (",(0,r.kt)("code",null,"Boolean"),")"),(0,r.kt)("p",null,"Whether or not the number of attendees is limited in this bucket"),(0,r.kt)("h4",{id:"total_slots-integer"},(0,r.kt)("inlineCode",{parentName:"h4"},"total_slots")," (",(0,r.kt)("code",null,"Integer"),")"),(0,r.kt)("p",null,"The maximum number of attendees this bucket can accept"))}u.isMDXComponent=!0}}]);