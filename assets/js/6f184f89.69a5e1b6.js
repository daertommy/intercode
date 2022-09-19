"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[2688],{75631:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(3289);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=r.createContext({}),c=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(a),m=o,y=s["".concat(d,".").concat(m)]||s[m]||p[m]||n;return a?r.createElement(y,l(l({ref:t},u),{},{components:a})):r.createElement(y,l({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=s;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<n;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},42328:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>s,assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var r=a(34489),o=a(3289),n=a(75631);const l={id:"update-email-route-payload",title:"UpdateEmailRoutePayload",hide_table_of_contents:!1},i=void 0,d={unversionedId:"graphql/objects/update-email-route-payload",id:"graphql/objects/update-email-route-payload",title:"UpdateEmailRoutePayload",description:"Autogenerated return type of UpdateEmailRoute",source:"@site/docs/graphql/objects/update-email-route-payload.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/update-email-route-payload",permalink:"/docs/graphql/objects/update-email-route-payload",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/update-email-route-payload.mdx",tags:[],version:"current",frontMatter:{id:"update-email-route-payload",title:"UpdateEmailRoutePayload",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"UpdateDepartmentPayload",permalink:"/docs/graphql/objects/update-department-payload"},next:{title:"UpdateEventAdminNotesPayload",permalink:"/docs/graphql/objects/update-event-admin-notes-payload"}},c={},u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateEmailRoutePayload.<b>clientMutationId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updateemailroutepayloadbclientmutationidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateEmailRoutePayload.<b>email_route</b></code><Bullet /><code>EmailRoute!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-updateemailroutepayloadbemail_routebcodeemailroute--",level:4},{value:"Returned by",id:"returned-by",level:3}],p=()=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,n.kt)(o.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{class:"badge badge--"+e.class},e.text)),y={toc:u,Bullet:p,SpecifiedBy:s,Badge:m};function f(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Autogenerated return type of UpdateEmailRoute"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type UpdateEmailRoutePayload {\n  clientMutationId: String\n  email_route: EmailRoute!\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-updateemailroutepayloadbclientmutationidbcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"UpdateEmailRoutePayload.",(0,n.kt)("b",null,"clientMutationId"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"A unique identifier for the client performing the mutation.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-updateemailroutepayloadbemail_routebcodeemailroute--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"UpdateEmailRoutePayload.",(0,n.kt)("b",null,"email_route"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/email-route"},(0,n.kt)("inlineCode",{parentName:"a"},"EmailRoute!"))," ",(0,n.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h3",{id:"returned-by"},"Returned by"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/graphql/mutations/update-email-route"},(0,n.kt)("inlineCode",{parentName:"a"},"updateEmailRoute")),"  ",(0,n.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);