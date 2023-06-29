"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[27020],{75631:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var a=n(45721);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=c(n),m=o,y=s["".concat(i,".").concat(m)]||s[m]||u[m]||r;return n?a.createElement(y,l(l({ref:t},p),{},{components:n})):a.createElement(y,l({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[s]="string"==typeof e?e:o,l[1]=d;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23294:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>s,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>d,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(91487),o=n(45721),r=n(75631);const l={id:"update-event-admin-notes-payload",title:"UpdateEventAdminNotesPayload",hide_table_of_contents:!1},d=void 0,i={unversionedId:"graphql/objects/update-event-admin-notes-payload",id:"graphql/objects/update-event-admin-notes-payload",title:"UpdateEventAdminNotesPayload",description:"Autogenerated return type of UpdateEventAdminNotes.",source:"@site/docs/graphql/objects/update-event-admin-notes-payload.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/update-event-admin-notes-payload",permalink:"/docs/graphql/objects/update-event-admin-notes-payload",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/update-event-admin-notes-payload.mdx",tags:[],version:"current",frontMatter:{id:"update-event-admin-notes-payload",title:"UpdateEventAdminNotesPayload",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"UpdateEmailRoutePayload",permalink:"/docs/graphql/objects/update-email-route-payload"},next:{title:"UpdateEventCategoryPayload",permalink:"/docs/graphql/objects/update-event-category-payload"}},c={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateEventAdminNotesPayload.<b>clientMutationId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updateeventadminnotespayloadbclientmutationidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateEventAdminNotesPayload.<b>event</b></code><Bullet /><code>Event!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-updateeventadminnotespayloadbeventbcodeevent--",level:4},{value:"Returned by",id:"returned-by",level:3}],s=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{class:"badge badge--"+e.class},e.text)),y={toc:p,Bullet:s,SpecifiedBy:u,Badge:m},f="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Autogenerated return type of UpdateEventAdminNotes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type UpdateEventAdminNotesPayload {\n  clientMutationId: String\n  event: Event!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updateeventadminnotespayloadbclientmutationidbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UpdateEventAdminNotesPayload.",(0,r.kt)("b",null,"clientMutationId"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A unique identifier for the client performing the mutation.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updateeventadminnotespayloadbeventbcodeevent--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UpdateEventAdminNotesPayload.",(0,r.kt)("b",null,"event"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/event"},(0,r.kt)("inlineCode",{parentName:"a"},"Event!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/graphql/mutations/update-event-admin-notes"},(0,r.kt)("inlineCode",{parentName:"a"},"updateEventAdminNotes")),"  ",(0,r.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);