"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[45696],{75631:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>b});var n=a(45721);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var m=n.createContext({}),d=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(m.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,m=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(a),b=l,u=p["".concat(m,".").concat(b)]||p[b]||i[b]||o;return a?n.createElement(u,r(r({ref:t},s),{},{components:a})):n.createElement(u,r({ref:t},s))}));function b(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,r=new Array(o);r[0]=p;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c.mdxType="string"==typeof e?e:l,r[1]=c;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},20115:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>b,Bullet:()=>i,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>c,default:()=>y,frontMatter:()=>r,metadata:()=>m,toc:()=>s});var n=a(34489),l=a(45721),o=a(75631);const r={id:"team-member",title:"TeamMember",hide_table_of_contents:!1},c=void 0,m={unversionedId:"graphql/objects/team-member",id:"graphql/objects/team-member",title:"TeamMember",description:"No description",source:"@site/docs/graphql/objects/team-member.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/team-member",permalink:"/docs/graphql/objects/team-member",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/team-member.mdx",tags:[],version:"current",frontMatter:{id:"team-member",title:"TeamMember",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"SubmitOrderPayload",permalink:"/docs/graphql/objects/submit-order-payload"},next:{title:"TicketCountByTypeAndPaymentAmount",permalink:"/docs/graphql/objects/ticket-count-by-type-and-payment-amount"}},d={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>TeamMember.<b>display_team_member</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-teammemberbdisplay_team_memberbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TeamMember.<b>email</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-teammemberbemailbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TeamMember.<b>event</b></code><Bullet /><code>Event!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-teammemberbeventbcodeevent--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TeamMember.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-teammemberbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TeamMember.<b>receive_con_email</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-teammemberbreceive_con_emailbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TeamMember.<b>receive_signup_email</b></code><Bullet /><code>ReceiveSignupEmail!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-teammemberbreceive_signup_emailbcodereceivesignupemail--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TeamMember.<b>show_email</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-teammemberbshow_emailbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TeamMember.<b>user_con_profile</b></code><Bullet /><code>UserConProfile!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-teammemberbuser_con_profilebcodeuserconprofile--",level:4},{value:"Member of",id:"member-of",level:3}],i=()=>(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(l.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),u={toc:s,Bullet:i,SpecifiedBy:p,Badge:b};function y(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type TeamMember {\n  display_team_member: Boolean!\n  email: String\n  event: Event!\n  id: ID!\n  receive_con_email: Boolean!\n  receive_signup_email: ReceiveSignupEmail!\n  show_email: Boolean!\n  user_con_profile: UserConProfile!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-teammemberbdisplay_team_memberbcodeboolean--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TeamMember.",(0,o.kt)("b",null,"display_team_member"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,o.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-teammemberbemailbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TeamMember.",(0,o.kt)("b",null,"email"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-teammemberbeventbcodeevent--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TeamMember.",(0,o.kt)("b",null,"event"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/event"},(0,o.kt)("inlineCode",{parentName:"a"},"Event!"))," ",(0,o.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-teammemberbidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TeamMember.",(0,o.kt)("b",null,"id"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-teammemberbreceive_con_emailbcodeboolean--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TeamMember.",(0,o.kt)("b",null,"receive_con_email"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,o.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-teammemberbreceive_signup_emailbcodereceivesignupemail--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TeamMember.",(0,o.kt)("b",null,"receive_signup_email"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/receive-signup-email"},(0,o.kt)("inlineCode",{parentName:"a"},"ReceiveSignupEmail!"))," ",(0,o.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-teammemberbshow_emailbcodeboolean--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TeamMember.",(0,o.kt)("b",null,"show_email"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,o.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-teammemberbuser_con_profilebcodeuserconprofile--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"TeamMember.",(0,o.kt)("b",null,"user_con_profile"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/user-con-profile"},(0,o.kt)("inlineCode",{parentName:"a"},"UserConProfile!"))," ",(0,o.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/graphql/objects/create-team-member-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"CreateTeamMemberPayload")),"  ",(0,o.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/graphql/objects/delete-team-member-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"DeleteTeamMemberPayload")),"  ",(0,o.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/graphql/objects/event"},(0,o.kt)("inlineCode",{parentName:"a"},"Event")),"  ",(0,o.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/graphql/objects/update-team-member-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateTeamMemberPayload")),"  ",(0,o.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/graphql/objects/user-con-profile"},(0,o.kt)("inlineCode",{parentName:"a"},"UserConProfile")),"  ",(0,o.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);