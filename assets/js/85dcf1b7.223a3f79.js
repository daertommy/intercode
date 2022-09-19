"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[50262],{75631:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>u});var a=o(3289);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(o),u=n,y=p["".concat(s,".").concat(u)]||p[u]||f[u]||r;return o?a.createElement(y,l(l({ref:t},c),{},{components:o})):a.createElement(y,l({ref:t},c))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,l=new Array(r);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var d=2;d<r;d++)l[d]=o[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},57526:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>u,Bullet:()=>f,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=o(34489),n=o(3289),r=o(75631);const l={id:"delete-staff-position-payload",title:"DeleteStaffPositionPayload",hide_table_of_contents:!1},i=void 0,s={unversionedId:"graphql/objects/delete-staff-position-payload",id:"graphql/objects/delete-staff-position-payload",title:"DeleteStaffPositionPayload",description:"Autogenerated return type of DeleteStaffPosition",source:"@site/docs/graphql/objects/delete-staff-position-payload.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/delete-staff-position-payload",permalink:"/docs/graphql/objects/delete-staff-position-payload",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/delete-staff-position-payload.mdx",tags:[],version:"current",frontMatter:{id:"delete-staff-position-payload",title:"DeleteStaffPositionPayload",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"DeleteRunPayload",permalink:"/docs/graphql/objects/delete-run-payload"},next:{title:"DeleteTeamMemberPayload",permalink:"/docs/graphql/objects/delete-team-member-payload"}},d={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>DeleteStaffPositionPayload.<b>clientMutationId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-deletestaffpositionpayloadbclientmutationidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DeleteStaffPositionPayload.<b>staff_position</b></code><Bullet /><code>StaffPosition!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-deletestaffpositionpayloadbstaff_positionbcodestaffposition--",level:4},{value:"Returned by",id:"returned-by",level:3}],f=()=>(0,r.kt)(n.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(n.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(n.Fragment,null,(0,r.kt)("span",{class:"badge badge--"+e.class},e.text)),y={toc:c,Bullet:f,SpecifiedBy:p,Badge:u};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},y,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Autogenerated return type of DeleteStaffPosition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type DeleteStaffPositionPayload {\n  clientMutationId: String\n  staff_position: StaffPosition!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-deletestaffpositionpayloadbclientmutationidbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"DeleteStaffPositionPayload.",(0,r.kt)("b",null,"clientMutationId"))),(0,r.kt)(f,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A unique identifier for the client performing the mutation.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-deletestaffpositionpayloadbstaff_positionbcodestaffposition--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"DeleteStaffPositionPayload.",(0,r.kt)("b",null,"staff_position"))),(0,r.kt)(f,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/staff-position"},(0,r.kt)("inlineCode",{parentName:"a"},"StaffPosition!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/graphql/mutations/delete-staff-position"},(0,r.kt)("inlineCode",{parentName:"a"},"deleteStaffPosition")),"  ",(0,r.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);