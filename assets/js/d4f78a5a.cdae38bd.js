"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[95849],{75631:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(45721);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),s=i(r),y=o,m=s["".concat(p,".").concat(y)]||s[y]||u[y]||a;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=y;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d[s]="string"==typeof e?e:o,l[1]=d;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},9209:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>y,Bullet:()=>s,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>d,default:()=>v,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=r(25577),o=r(45721),a=r(75631);const l={id:"restore-dropped-event-payload",title:"RestoreDroppedEventPayload",hide_table_of_contents:!1},d=void 0,p={unversionedId:"graphql/objects/restore-dropped-event-payload",id:"graphql/objects/restore-dropped-event-payload",title:"RestoreDroppedEventPayload",description:"Autogenerated return type of RestoreDroppedEvent.",source:"@site/docs/graphql/objects/restore-dropped-event-payload.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/restore-dropped-event-payload",permalink:"/docs/graphql/objects/restore-dropped-event-payload",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/restore-dropped-event-payload.mdx",tags:[],version:"current",frontMatter:{id:"restore-dropped-event-payload",title:"RestoreDroppedEventPayload",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"RenameCmsFilePayload",permalink:"/docs/graphql/objects/rename-cms-file-payload"},next:{title:"RevokeAuthorizedApplicationPayload",permalink:"/docs/graphql/objects/revoke-authorized-application-payload"}},i={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>RestoreDroppedEventPayload.<b>clientMutationId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-restoredroppedeventpayloadbclientmutationidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RestoreDroppedEventPayload.<b>event</b></code><Bullet /><code>Event!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-restoredroppedeventpayloadbeventbcodeevent--",level:4},{value:"Returned by",id:"returned-by",level:3}],s=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:c,Bullet:s,SpecifiedBy:u,Badge:y},f="wrapper";function v(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Autogenerated return type of RestoreDroppedEvent."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type RestoreDroppedEventPayload {\n  clientMutationId: String\n  event: Event!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-restoredroppedeventpayloadbclientmutationidbcodestring-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"RestoreDroppedEventPayload.",(0,a.kt)("b",null,"clientMutationId"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,a.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A unique identifier for the client performing the mutation.")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-restoredroppedeventpayloadbeventbcodeevent--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"RestoreDroppedEventPayload.",(0,a.kt)("b",null,"event"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/event"},(0,a.kt)("inlineCode",{parentName:"a"},"Event!"))," ",(0,a.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"returned-by"},"Returned by"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/mutations/restore-dropped-event"},(0,a.kt)("inlineCode",{parentName:"a"},"restoreDroppedEvent")),"  ",(0,a.kt)(y,{class:"secondary",text:"mutation",mdxType:"Badge"})))}v.isMDXComponent=!0}}]);