"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[34729],{75631:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>y});var o=a(45721);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),f=c(a),u=n,y=f["".concat(s,".").concat(u)]||f[u]||p[u]||r;return a?o.createElement(y,i(i({ref:t},d),{},{components:a})):o.createElement(y,i({ref:t},d))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[f]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},93064:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>f,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=a(25577),n=a(45721),r=a(75631);const i={id:"create-staff-position-payload",title:"CreateStaffPositionPayload",hide_table_of_contents:!1},l=void 0,s={unversionedId:"graphql/objects/create-staff-position-payload",id:"graphql/objects/create-staff-position-payload",title:"CreateStaffPositionPayload",description:"Autogenerated return type of CreateStaffPosition.",source:"@site/docs/graphql/objects/create-staff-position-payload.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/create-staff-position-payload",permalink:"/docs/graphql/objects/create-staff-position-payload",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/create-staff-position-payload.mdx",tags:[],version:"current",frontMatter:{id:"create-staff-position-payload",title:"CreateStaffPositionPayload",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"CreateSignupRequestPayload",permalink:"/docs/graphql/objects/create-signup-request-payload"},next:{title:"CreateTeamMemberPayload",permalink:"/docs/graphql/objects/create-team-member-payload"}},c={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CreateStaffPositionPayload.<b>clientMutationId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-createstaffpositionpayloadbclientmutationidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateStaffPositionPayload.<b>staff_position</b></code><Bullet /><code>StaffPosition!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-createstaffpositionpayloadbstaff_positionbcodestaffposition--",level:4},{value:"Returned by",id:"returned-by",level:3}],f=()=>(0,r.kt)(n.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(n.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(n.Fragment,null,(0,r.kt)("span",{class:"badge badge--"+e.class},e.text)),y={toc:d,Bullet:f,SpecifiedBy:p,Badge:u},m="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,o.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Autogenerated return type of CreateStaffPosition."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type CreateStaffPositionPayload {\n  clientMutationId: String\n  staff_position: StaffPosition!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-createstaffpositionpayloadbclientmutationidbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CreateStaffPositionPayload.",(0,r.kt)("b",null,"clientMutationId"))),(0,r.kt)(f,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A unique identifier for the client performing the mutation.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-createstaffpositionpayloadbstaff_positionbcodestaffposition--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CreateStaffPositionPayload.",(0,r.kt)("b",null,"staff_position"))),(0,r.kt)(f,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/staff-position"},(0,r.kt)("inlineCode",{parentName:"a"},"StaffPosition!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/graphql/mutations/create-staff-position"},(0,r.kt)("inlineCode",{parentName:"a"},"createStaffPosition")),"  ",(0,r.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);