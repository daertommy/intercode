"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[20451],{75631:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return b}});var i=n(3289);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),u=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,f=p["".concat(c,".").concat(b)]||p[b]||s[b]||o;return n?i.createElement(f,l(l({ref:t},d),{},{components:n})):i.createElement(f,l({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var u=2;u<o;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},78480:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return s}});var i=n(75731),r=n(42706),o=(n(3289),n(75631)),l=["components"],a={id:"bucket-availability-drop",title:"BucketAvailabilityDrop"},c=void 0,u={unversionedId:"liquid/drops/bucket-availability-drop",id:"liquid/drops/bucket-availability-drop",title:"BucketAvailabilityDrop",description:"The available slots for a single bucket in an event run",source:"@site/docs/liquid/drops/bucket-availability-drop.mdx",sourceDirName:"liquid/drops",slug:"/liquid/drops/bucket-availability-drop",permalink:"/docs/liquid/drops/bucket-availability-drop",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/liquid/drops/bucket-availability-drop.mdx",tags:[],version:"current",frontMatter:{id:"bucket-availability-drop",title:"BucketAvailabilityDrop"},sidebar:"sidebar",previous:{title:"spoiler",permalink:"/docs/liquid/blocks/spoiler"},next:{title:"ConventionDrop",permalink:"/docs/liquid/drops/convention-drop"}},d={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>available_slots</code> (<code>Integer</code>)",id:"available_slots-integer",level:4},{value:'<code>bucket</code> (<code><a href="/docs/liquid/drops/registration-policy-bucket-drop">RegistrationPolicy::BucketDrop</a></code>)',id:"bucket-registrationpolicybucketdrop",level:4},{value:"<code>confirmed_count</code> (<code>Integer</code>)",id:"confirmed_count-integer",level:4},{value:"<code>full</code> (<code>Boolean</code>)",id:"full-boolean",level:4},{value:"<code>has_availablity</code> (<code>Boolean</code>)",id:"has_availablity-boolean",level:4}],p={toc:s};function b(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The available slots for a single bucket in an event run"),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"available_slots-integer"},(0,o.kt)("inlineCode",{parentName:"h4"},"available_slots")," (",(0,o.kt)("code",null,"Integer"),")"),(0,o.kt)("p",null,"The number of slots available in this bucket (or nil if the bucket is\nunlimited)"),(0,o.kt)("h4",{id:"bucket-registrationpolicybucketdrop"},(0,o.kt)("inlineCode",{parentName:"h4"},"bucket")," (",(0,o.kt)("code",null,(0,o.kt)("a",{href:"/docs/liquid/drops/registration-policy-bucket-drop"},"RegistrationPolicy",":",":","BucketDrop")),")"),(0,o.kt)("p",null,"The bucket itself"),(0,o.kt)("h4",{id:"confirmed_count-integer"},(0,o.kt)("inlineCode",{parentName:"h4"},"confirmed_count")," (",(0,o.kt)("code",null,"Integer"),")"),(0,o.kt)("p",null,"The number of filled slots in this bucket (whether counted or not-counted)"),(0,o.kt)("h4",{id:"full-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"full")," (",(0,o.kt)("code",null,"Boolean"),")"),(0,o.kt)("p",null,"Is this bucket full?  (Always false for unlimited buckets.)"),(0,o.kt)("h4",{id:"has_availablity-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"has_availablity")," (",(0,o.kt)("code",null,"Boolean"),")"),(0,o.kt)("p",null,"Does this bucket have any available slots?\n(Always true for unlimited buckets.)"))}b.isMDXComponent=!0}}]);