"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[2352],{75631:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(45721);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},i="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),i=c(n),g=r,m=i["".concat(d,".").concat(g)]||i[g]||p[g]||o;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=g;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[i]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},91844:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>i,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var a=n(25577),r=n(45721),o=n(75631);const l={id:"signup-request",title:"SignupRequest",hide_table_of_contents:!1},s=void 0,d={unversionedId:"graphql/objects/signup-request",id:"graphql/objects/signup-request",title:"SignupRequest",description:"No description",source:"@site/docs/graphql/objects/signup-request.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/signup-request",permalink:"/docs/graphql/objects/signup-request",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/signup-request.mdx",tags:[],version:"current",frontMatter:{id:"signup-request",title:"SignupRequest",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"SignupMoveResult",permalink:"/docs/graphql/objects/signup-move-result"},next:{title:"SignupRequestsPagination",permalink:"/docs/graphql/objects/signup-requests-pagination"}},c={},u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SignupRequest.<b>created_at</b></code><Bullet /><code>Date!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-signuprequestbcreated_atbcodedate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SignupRequest.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-signuprequestbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SignupRequest.<b>replace_signup</b></code><Bullet /><code>Signup</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-signuprequestbreplace_signupbcodesignup-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SignupRequest.<b>requested_bucket_key</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-signuprequestbrequested_bucket_keybcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SignupRequest.<b>result_signup</b></code><Bullet /><code>Signup</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-signuprequestbresult_signupbcodesignup-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SignupRequest.<b>state</b></code><Bullet /><code>SignupRequestState!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-signuprequestbstatebcodesignuprequeststate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SignupRequest.<b>target_run</b></code><Bullet /><code>Run!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-signuprequestbtarget_runbcoderun--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SignupRequest.<b>updated_at</b></code><Bullet /><code>Date!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-signuprequestbupdated_atbcodedate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SignupRequest.<b>updated_by</b></code><Bullet /><code>User!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-signuprequestbupdated_bybcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SignupRequest.<b>user_con_profile</b></code><Bullet /><code>UserConProfile!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-signuprequestbuser_con_profilebcodeuserconprofile--",level:4},{value:"Member of",id:"member-of",level:3}],i=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:u,Bullet:i,SpecifiedBy:p,Badge:g},y="wrapper";function k(e){let{components:t,...n}=e;return(0,o.kt)(y,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type SignupRequest {\n  created_at: Date!\n  id: ID!\n  replace_signup: Signup\n  requested_bucket_key: String\n  result_signup: Signup\n  state: SignupRequestState!\n  target_run: Run!\n  updated_at: Date!\n  updated_by: User!\n  user_con_profile: UserConProfile!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-signuprequestbcreated_atbcodedate--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SignupRequest.",(0,o.kt)("b",null,"created_at"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,o.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-signuprequestbidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SignupRequest.",(0,o.kt)("b",null,"id"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-signuprequestbreplace_signupbcodesignup-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SignupRequest.",(0,o.kt)("b",null,"replace_signup"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/signup"},(0,o.kt)("inlineCode",{parentName:"a"},"Signup"))," ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-signuprequestbrequested_bucket_keybcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SignupRequest.",(0,o.kt)("b",null,"requested_bucket_key"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-signuprequestbresult_signupbcodesignup-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SignupRequest.",(0,o.kt)("b",null,"result_signup"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/signup"},(0,o.kt)("inlineCode",{parentName:"a"},"Signup"))," ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-signuprequestbstatebcodesignuprequeststate--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SignupRequest.",(0,o.kt)("b",null,"state"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/signup-request-state"},(0,o.kt)("inlineCode",{parentName:"a"},"SignupRequestState!"))," ",(0,o.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-signuprequestbtarget_runbcoderun--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SignupRequest.",(0,o.kt)("b",null,"target_run"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/run"},(0,o.kt)("inlineCode",{parentName:"a"},"Run!"))," ",(0,o.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-signuprequestbupdated_atbcodedate--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SignupRequest.",(0,o.kt)("b",null,"updated_at"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,o.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-signuprequestbupdated_bybcodeuser--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SignupRequest.",(0,o.kt)("b",null,"updated_by"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/user"},(0,o.kt)("inlineCode",{parentName:"a"},"User!"))," ",(0,o.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-signuprequestbuser_con_profilebcodeuserconprofile--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SignupRequest.",(0,o.kt)("b",null,"user_con_profile"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/user-con-profile"},(0,o.kt)("inlineCode",{parentName:"a"},"UserConProfile!"))," ",(0,o.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/graphql/objects/accept-signup-request-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"AcceptSignupRequestPayload")),"  ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/graphql/objects/create-signup-request-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"CreateSignupRequestPayload")),"  ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/graphql/objects/reject-signup-request-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"RejectSignupRequestPayload")),"  ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/graphql/objects/run"},(0,o.kt)("inlineCode",{parentName:"a"},"Run")),"  ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/graphql/objects/signup-requests-pagination"},(0,o.kt)("inlineCode",{parentName:"a"},"SignupRequestsPagination")),"  ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/graphql/objects/user-con-profile"},(0,o.kt)("inlineCode",{parentName:"a"},"UserConProfile")),"  ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/graphql/objects/withdraw-signup-request-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"WithdrawSignupRequestPayload")),"  ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);