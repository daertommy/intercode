"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[91221],{75631:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>f});var n=i(45721);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},m=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(i),p=r,f=u["".concat(c,".").concat(p)]||u[p]||d[p]||a;return i?n.createElement(f,o(o({ref:t},m),{},{components:i})):n.createElement(f,o({ref:t},m))}));function f(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=i[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},53484:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=i(91487),r=(i(45721),i(75631));const a={id:"date-with-local-time",title:"date_with_local_time"},o=void 0,l={unversionedId:"liquid/filters/date-with-local-time",id:"liquid/filters/date-with-local-time",title:"date_with_local_time",description:"Given a time object, format it in the given timezone, translating to the user's local",source:"@site/docs/liquid/filters/date-with-local-time.mdx",sourceDirName:"liquid/filters",slug:"/liquid/filters/date-with-local-time",permalink:"/docs/liquid/filters/date-with-local-time",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/liquid/filters/date-with-local-time.mdx",tags:[],version:"current",frontMatter:{id:"date-with-local-time",title:"date_with_local_time"},sidebar:"sidebar",previous:{title:"condense_whitespace",permalink:"/docs/liquid/filters/condense-whitespace"},next:{title:"email_link",permalink:"/docs/liquid/filters/email-link"}},c={},s=[{value:"Parameters",id:"parameters",level:3},{value:"<code>format</code> (<code>String</code>)",id:"format-string",level:4},{value:"<code>input</code> (<code>ActiveSupport::TimeWithZone</code>)",id:"input-activesupporttimewithzone",level:4},{value:"<code>timezone_name</code> (<code>String</code>)",id:"timezone_name-string",level:4},{value:"Returns (<code>String</code>)",id:"returns-string",level:3},{value:"Examples",id:"examples",level:3}],m={toc:s},u="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Given a time object, format it in the given timezone, translating to the user's local\ntime if it isn't the same."),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("h4",{id:"format-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"format")," (",(0,r.kt)("code",null,"String"),")"),(0,r.kt)("p",null,'A time formatting string, like the one the built-in Liquid "date"\nfilter uses (see ',(0,r.kt)("a",{parentName:"p",href:"http://strftime.net"},"http://strftime.net"),' for examples).  We recommend\nincluding "%Z" in this string in order to have an explicit time zone\nspecifier.'),(0,r.kt)("h4",{id:"input-activesupporttimewithzone"},(0,r.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,r.kt)("code",null,"ActiveSupport::TimeWithZone"),")"),(0,r.kt)("p",null,"A time object"),(0,r.kt)("h4",{id:"timezone_name-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"timezone_name")," (",(0,r.kt)("code",null,"String"),")"),(0,r.kt)("p",null,"An IANA timezone name to use for the default format.  If\nnot given, this filter will try to use the convention's\nlocal timezone (if one exists)."),(0,r.kt)("h3",{id:"returns-string"},"Returns (",(0,r.kt)("code",null,"String"),")"),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-liquid",metastring:'title="Formatting a time using an explicit time zone, while the user is in that zone"',title:'"Formatting',a:!0,time:!0,using:!0,an:!0,explicit:!0,"zone,":!0,while:!0,the:!0,user:!0,is:!0,in:!0,that:!0,'zone"':!0},'{{ convention.starts_at | date_with_local_time: "%l:%M%P %Z", "America/New_York" }} =>\n  "7:00pm EDT"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-liquid",metastring:'title="Formatting a time using an explicit time zone, while the user is not in that zone"',title:'"Formatting',a:!0,time:!0,using:!0,an:!0,explicit:!0,"zone,":!0,while:!0,the:!0,user:!0,is:!0,not:!0,in:!0,that:!0,'zone"':!0},'{{ convention.starts_at | date_with_local_time: "%l:%M%P %Z", "America/New_York" }} =>\n  "7:00pm EDT (4:00pm PDT)"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-liquid",metastring:'title="Using the convention\'s time zone implicitly"',title:'"Using',the:!0,"convention's":!0,time:!0,zone:!0,'implicitly"':!0},'{{ convention.starts_at | date_with_local_time: "%l:%M%P %Z" }} => "7:00pm EDT"\n')))}d.isMDXComponent=!0}}]);