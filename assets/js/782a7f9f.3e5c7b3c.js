"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[246],{75631:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var l=a(45721);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=l.createContext({}),c=function(e){var t=l.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},u=function(e){var t=c(e.components);return l.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,y=p["".concat(d,".").concat(m)]||p[m]||s[m]||o;return a?l.createElement(y,n(n({ref:t},u),{},{components:a})):l.createElement(y,n({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,n=new Array(o);n[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,n[1]=i;for(var c=2;c<o;c++)n[c]=a[c];return l.createElement.apply(null,n)}return l.createElement.apply(null,a)}p.displayName="MDXCreateElement"},46635:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>s,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>n,metadata:()=>d,toc:()=>u});var l=a(50524),r=a(45721),o=a(75631);const n={id:"delete-email-route-payload",title:"DeleteEmailRoutePayload",hide_table_of_contents:!1},i=void 0,d={unversionedId:"graphql/objects/delete-email-route-payload",id:"graphql/objects/delete-email-route-payload",title:"DeleteEmailRoutePayload",description:"Autogenerated return type of DeleteEmailRoute.",source:"@site/docs/graphql/objects/delete-email-route-payload.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/delete-email-route-payload",permalink:"/docs/graphql/objects/delete-email-route-payload",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/delete-email-route-payload.mdx",tags:[],version:"current",frontMatter:{id:"delete-email-route-payload",title:"DeleteEmailRoutePayload",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"DeleteDepartmentPayload",permalink:"/docs/graphql/objects/delete-department-payload"},next:{title:"DeleteEventCategoryPayload",permalink:"/docs/graphql/objects/delete-event-category-payload"}},c={},u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>DeleteEmailRoutePayload.<b>clientMutationId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-deleteemailroutepayloadbclientmutationidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DeleteEmailRoutePayload.<b>email_route</b></code><Bullet /><code>EmailRoute!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-deleteemailroutepayloadbemail_routebcodeemailroute--",level:4},{value:"Returned by",id:"returned-by",level:3}],s=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),y={toc:u,Bullet:s,SpecifiedBy:p,Badge:m};function f(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,l.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Autogenerated return type of DeleteEmailRoute."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type DeleteEmailRoutePayload {\n  clientMutationId: String\n  email_route: EmailRoute!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-deleteemailroutepayloadbclientmutationidbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"DeleteEmailRoutePayload.",(0,o.kt)("b",null,"clientMutationId"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A unique identifier for the client performing the mutation.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-deleteemailroutepayloadbemail_routebcodeemailroute--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"DeleteEmailRoutePayload.",(0,o.kt)("b",null,"email_route"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/email-route"},(0,o.kt)("inlineCode",{parentName:"a"},"EmailRoute!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/graphql/mutations/delete-email-route"},(0,o.kt)("inlineCode",{parentName:"a"},"deleteEmailRoute")),"  ",(0,o.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);