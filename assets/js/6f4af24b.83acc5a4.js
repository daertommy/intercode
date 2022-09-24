"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[33355],{75631:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>d});var n=i(45721);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},c=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=m(i),d=r,f=u["".concat(s,".").concat(d)]||u[d]||p[d]||a;return i?n.createElement(f,l(l({ref:t},c),{},{components:i})):n.createElement(f,l({ref:t},c))}));function d(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,l=new Array(a);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var m=2;m<a;m++)l[m]=i[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},97545:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>m});var n=i(34489),r=(i(45721),i(75631));const a={id:"timespan-with-local-time",title:"timespan_with_local_time"},l=void 0,o={unversionedId:"liquid/filters/timespan-with-local-time",id:"liquid/filters/timespan-with-local-time",title:"timespan_with_local_time",description:"Given a timespan, format it in the given timezone, translating to the user's local",source:"@site/docs/liquid/filters/timespan-with-local-time.mdx",sourceDirName:"liquid/filters",slug:"/liquid/filters/timespan-with-local-time",permalink:"/docs/liquid/filters/timespan-with-local-time",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/liquid/filters/timespan-with-local-time.mdx",tags:[],version:"current",frontMatter:{id:"timespan-with-local-time",title:"timespan_with_local_time"},sidebar:"sidebar",previous:{title:"singularize",permalink:"/docs/liquid/filters/singularize"},next:{title:"titleize",permalink:"/docs/liquid/filters/titleize"}},s={},m=[{value:"Parameters",id:"parameters",level:3},{value:"<code>format</code> (<code>String</code>)",id:"format-string",level:4},{value:'<code>input</code> (<code><a href="/docs/liquid/drops/scheduled-value-timespan-drop">ScheduledValue::TimespanDrop</a></code>)',id:"input-scheduledvaluetimespandrop",level:4},{value:"<code>timezone_name</code> (<code>String</code>)",id:"timezone_name-string",level:4},{value:"Returns (<code>String</code>)",id:"returns-string",level:3},{value:"Examples",id:"examples",level:3}],c={toc:m};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Given a timespan, format it in the given timezone, translating to the user's local\ntime if it isn't the same.  Automatically removes duplicate verbiage in the middle (e.g.\nday of week, time zone, etc.)"),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("h4",{id:"format-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"format")," (",(0,r.kt)("code",null,"String"),")"),(0,r.kt)("p",null,'A time formatting string, like the one the built-in Liquid "date"\nfilter uses (see ',(0,r.kt)("a",{parentName:"p",href:"http://strftime.net"},"http://strftime.net"),' for examples).  We recommend\nincluding "%Z" in this string in order to have an explicit time zone\nspecifier.'),(0,r.kt)("h4",{id:"input-scheduledvaluetimespandrop"},(0,r.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,r.kt)("code",null,(0,r.kt)("a",{href:"/docs/liquid/drops/scheduled-value-timespan-drop"},"ScheduledValue",":",":","TimespanDrop")),")"),(0,r.kt)("p",null,"A timespan"),(0,r.kt)("h4",{id:"timezone_name-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"timezone_name")," (",(0,r.kt)("code",null,"String"),")"),(0,r.kt)("p",null,"An IANA timezone name to use for the default format.  If\nnot given, this filter will try to use the convention's\nlocal timezone (if one exists)."),(0,r.kt)("h3",{id:"returns-string"},"Returns (",(0,r.kt)("code",null,"String"),")"),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-liquid",metastring:'title="Formatting a timespan using an explicit time zone, while the user is in that zone"',title:'"Formatting',a:!0,timespan:!0,using:!0,an:!0,explicit:!0,time:!0,"zone,":!0,while:!0,the:!0,user:!0,is:!0,in:!0,that:!0,'zone"':!0},'{{ convention.timespan\n  | timespan_with_local_time: "%A, %B %e from %l:%M%P %Z", "America/New_York" }} =>\n  "Saturday, July 11 from 10:00am to 11:59pm EDT"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-liquid",metastring:'title="Formatting a time using an explicit time zone, while the user is not in that zone"',title:'"Formatting',a:!0,time:!0,using:!0,an:!0,explicit:!0,"zone,":!0,while:!0,the:!0,user:!0,is:!0,not:!0,in:!0,that:!0,'zone"':!0},'{{ convention.timespan\n  | timespan_with_local_time: "%A, %B %e from %l:%M%P %Z", "America/New_York" }} =>\n  "Saturday, July 11 from 10:00am to 11:59pm EDT (7:00am to 8:59pm PDT)"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-liquid",metastring:'title="Using the convention\'s time zone implicitly"',title:'"Using',the:!0,"convention's":!0,time:!0,zone:!0,'implicitly"':!0},'{{ convention.timespan | timespan_with_local_time: "%A, %B %e from %l:%M%P %Z" }} =>\n  "Saturday, July 11 from 10:00am to 11:59pm EDT"\n')))}p.isMDXComponent=!0}}]);