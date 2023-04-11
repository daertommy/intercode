"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[8296],{75631:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(45721);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,f=s["".concat(o,".").concat(m)]||s[m]||d[m]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[s]="string"==typeof e?e:a,i[1]=u;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99733:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>s,SpecifiedBy:()=>d,assets:()=>p,contentTitle:()=>u,default:()=>y,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(25577),a=n(45721),l=n(75631);const i={id:"scheduled-value-input",title:"ScheduledValueInput",hide_table_of_contents:!1},u=void 0,o={unversionedId:"graphql/inputs/scheduled-value-input",id:"graphql/inputs/scheduled-value-input",title:"ScheduledValueInput",description:"No description",source:"@site/docs/graphql/inputs/scheduled-value-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/scheduled-value-input",permalink:"/docs/graphql/inputs/scheduled-value-input",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/scheduled-value-input.mdx",tags:[],version:"current",frontMatter:{id:"scheduled-value-input",title:"ScheduledValueInput",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"ScheduledMoneyValueInput",permalink:"/docs/graphql/inputs/scheduled-money-value-input"},next:{title:"SendNotificationPreviewInput",permalink:"/docs/graphql/inputs/send-notification-preview-input"}},p={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ScheduledValueInput.<b>timespans</b></code><Bullet /><code>[TimespanWithValueInput!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-scheduledvalueinputbtimespansbcodetimespanwithvalueinput--",level:4},{value:"Member of",id:"member-of",level:3}],s=()=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,l.kt)(a.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:c,Bullet:s,SpecifiedBy:d,Badge:m},h="wrapper";function y(e){let{components:t,...n}=e;return(0,l.kt)(h,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"input ScheduledValueInput {\n  timespans: [TimespanWithValueInput!]!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-scheduledvalueinputbtimespansbcodetimespanwithvalueinput--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ScheduledValueInput.",(0,l.kt)("b",null,"timespans"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/timespan-with-value-input"},(0,l.kt)("inlineCode",{parentName:"a"},"[TimespanWithValueInput!]!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/graphql/inputs/convention-input"},(0,l.kt)("inlineCode",{parentName:"a"},"ConventionInput")),"  ",(0,l.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);