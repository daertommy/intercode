"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[90133],{75631:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>b});var r=a(45721);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var m=r.createContext({}),d=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},i=function(e){var t=d(e.components);return r.createElement(m.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,m=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),s=d(a),u=o,b=s["".concat(m,".").concat(u)]||s[u]||p[u]||n;return a?r.createElement(b,l(l({ref:t},i),{},{components:a})):r.createElement(b,l({ref:t},i))}));function b(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=u;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c[s]="string"==typeof e?e:o,l[1]=c;for(var d=2;d<n;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},55058:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>s,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>m,toc:()=>i});var r=a(25577),o=a(45721),n=a(75631);const l={id:"create-team-member-payload",title:"CreateTeamMemberPayload",hide_table_of_contents:!1},c=void 0,m={unversionedId:"graphql/objects/create-team-member-payload",id:"graphql/objects/create-team-member-payload",title:"CreateTeamMemberPayload",description:"Autogenerated return type of CreateTeamMember.",source:"@site/docs/graphql/objects/create-team-member-payload.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/create-team-member-payload",permalink:"/docs/graphql/objects/create-team-member-payload",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/create-team-member-payload.mdx",tags:[],version:"current",frontMatter:{id:"create-team-member-payload",title:"CreateTeamMemberPayload",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"CreateStaffPositionPayload",permalink:"/docs/graphql/objects/create-staff-position-payload"},next:{title:"CreateTicketPayload",permalink:"/docs/graphql/objects/create-ticket-payload"}},d={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CreateTeamMemberPayload.<b>clientMutationId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-createteammemberpayloadbclientmutationidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateTeamMemberPayload.<b>converted_signups</b></code><Bullet /><code>[Signup!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-createteammemberpayloadbconverted_signupsbcodesignup--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateTeamMemberPayload.<b>move_results</b></code><Bullet /><code>[SignupMoveResult!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-createteammemberpayloadbmove_resultsbcodesignupmoveresult--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateTeamMemberPayload.<b>team_member</b></code><Bullet /><code>TeamMember!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-createteammemberpayloadbteam_memberbcodeteammember--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateTeamMemberPayload.<b>ticket</b></code><Bullet /><code>Ticket</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-createteammemberpayloadbticketbcodeticket-",level:4},{value:"Returned by",id:"returned-by",level:3}],s=()=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,n.kt)(o.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{class:"badge badge--"+e.class},e.text)),b={toc:i,Bullet:s,SpecifiedBy:p,Badge:u},y="wrapper";function g(e){let{components:t,...a}=e;return(0,n.kt)(y,(0,r.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Autogenerated return type of CreateTeamMember."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type CreateTeamMemberPayload {\n  clientMutationId: String\n  converted_signups: [Signup!]!\n  move_results: [SignupMoveResult!]!\n  team_member: TeamMember!\n  ticket: Ticket\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-createteammemberpayloadbclientmutationidbcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"CreateTeamMemberPayload.",(0,n.kt)("b",null,"clientMutationId"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"A unique identifier for the client performing the mutation.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-createteammemberpayloadbconverted_signupsbcodesignup--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"CreateTeamMemberPayload.",(0,n.kt)("b",null,"converted_signups"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/signup"},(0,n.kt)("inlineCode",{parentName:"a"},"[Signup!]!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-createteammemberpayloadbmove_resultsbcodesignupmoveresult--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"CreateTeamMemberPayload.",(0,n.kt)("b",null,"move_results"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/signup-move-result"},(0,n.kt)("inlineCode",{parentName:"a"},"[SignupMoveResult!]!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-createteammemberpayloadbteam_memberbcodeteammember--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"CreateTeamMemberPayload.",(0,n.kt)("b",null,"team_member"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/team-member"},(0,n.kt)("inlineCode",{parentName:"a"},"TeamMember!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-createteammemberpayloadbticketbcodeticket-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"CreateTeamMemberPayload.",(0,n.kt)("b",null,"ticket"))),(0,n.kt)(s,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/ticket"},(0,n.kt)("inlineCode",{parentName:"a"},"Ticket"))," ",(0,n.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h3",{id:"returned-by"},"Returned by"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/graphql/mutations/create-team-member"},(0,n.kt)("inlineCode",{parentName:"a"},"createTeamMember")),"  ",(0,n.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);