"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[33355],{75631:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var i=n(3289);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),m=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=m(n),d=r,f=p["".concat(s,".").concat(d)]||p[d]||u[d]||a;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<a;m++)o[m]=n[m];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},41847:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return u}});var i=n(75731),r=n(42706),a=(n(3289),n(75631)),o=["components"],l={id:"timespan-with-local-time",title:"timespan_with_local_time"},s=void 0,m={unversionedId:"liquid/filters/timespan-with-local-time",id:"liquid/filters/timespan-with-local-time",title:"timespan_with_local_time",description:"Given a timespan, format it in the given timezone, translating to the user's local",source:"@site/docs/liquid/filters/timespan-with-local-time.mdx",sourceDirName:"liquid/filters",slug:"/liquid/filters/timespan-with-local-time",permalink:"/docs/liquid/filters/timespan-with-local-time",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/liquid/filters/timespan-with-local-time.mdx",tags:[],version:"current",frontMatter:{id:"timespan-with-local-time",title:"timespan_with_local_time"},sidebar:"sidebar",previous:{title:"singularize",permalink:"/docs/liquid/filters/singularize"},next:{title:"titleize",permalink:"/docs/liquid/filters/titleize"}},c={},u=[{value:"Parameters",id:"parameters",level:3},{value:"<code>format</code> (<code>String</code>)",id:"format-string",level:4},{value:'<code>input</code> (<code><a href="/docs/liquid/drops/scheduled-value-timespan-drop">ScheduledValue::TimespanDrop</a></code>)',id:"input-scheduledvaluetimespandrop",level:4},{value:"<code>timezone_name</code> (<code>String</code>)",id:"timezone_name-string",level:4},{value:"Returns (<code>String</code>)",id:"returns-string",level:3},{value:"Examples",id:"examples",level:3}],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Given a timespan, format it in the given timezone, translating to the user's local\ntime if it isn't the same.  Automatically removes duplicate verbiage in the middle (e.g.\nday of week, time zone, etc.)"),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("h4",{id:"format-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"format")," (",(0,a.kt)("code",null,"String"),")"),(0,a.kt)("p",null,'A time formatting string, like the one the built-in Liquid "date"\nfilter uses (see ',(0,a.kt)("a",{parentName:"p",href:"http://strftime.net"},"http://strftime.net"),' for examples).  We recommend\nincluding "%Z" in this string in order to have an explicit time zone\nspecifier.'),(0,a.kt)("h4",{id:"input-scheduledvaluetimespandrop"},(0,a.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,a.kt)("code",null,(0,a.kt)("a",{href:"/docs/liquid/drops/scheduled-value-timespan-drop"},"ScheduledValue",":",":","TimespanDrop")),")"),(0,a.kt)("p",null,"A timespan"),(0,a.kt)("h4",{id:"timezone_name-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"timezone_name")," (",(0,a.kt)("code",null,"String"),")"),(0,a.kt)("p",null,"An IANA timezone name to use for the default format.  If\nnot given, this filter will try to use the convention's\nlocal timezone (if one exists)."),(0,a.kt)("h3",{id:"returns-string"},"Returns (",(0,a.kt)("code",null,"String"),")"),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-liquid",metastring:'title="Formatting a timespan using an explicit time zone, while the user is in that zone"',title:'"Formatting',a:!0,timespan:!0,using:!0,an:!0,explicit:!0,time:!0,"zone,":!0,while:!0,the:!0,user:!0,is:!0,in:!0,that:!0,'zone"':!0},'{{ convention.timespan\n  | timespan_with_local_time: "%A, %B %e from %l:%M%P %Z", "America/New_York" }} =>\n  "Saturday, July 11 from 10:00am to 11:59pm EDT"\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-liquid",metastring:'title="Formatting a time using an explicit time zone, while the user is not in that zone"',title:'"Formatting',a:!0,time:!0,using:!0,an:!0,explicit:!0,"zone,":!0,while:!0,the:!0,user:!0,is:!0,not:!0,in:!0,that:!0,'zone"':!0},'{{ convention.timespan\n  | timespan_with_local_time: "%A, %B %e from %l:%M%P %Z", "America/New_York" }} =>\n  "Saturday, July 11 from 10:00am to 11:59pm EDT (7:00am to 8:59pm PDT)"\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-liquid",metastring:'title="Using the convention\'s time zone implicitly"',title:'"Using',the:!0,"convention's":!0,time:!0,zone:!0,'implicitly"':!0},'{{ convention.timespan | timespan_with_local_time: "%A, %B %e from %l:%M%P %Z" }} =>\n  "Saturday, July 11 from 10:00am to 11:59pm EDT"\n')))}d.isMDXComponent=!0}}]);