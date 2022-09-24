"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[69104],{75631:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>p});var a=n(45721);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,i=r(e,["components","mdxType","originalType","parentName"]),u=d(n),p=o,h=u["".concat(s,".").concat(p)]||u[p]||g[p]||l;return n?a.createElement(h,c(c({ref:t},i),{},{components:n})):a.createElement(h,c({ref:t},i))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,c=new Array(l);c[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,c[1]=r;for(var d=2;d<l;d++)c[d]=n[d];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},69395:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>g,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>i});var a=n(34489),o=n(45721),l=n(75631);const c={id:"signup-change",title:"SignupChange",hide_table_of_contents:!1},r=void 0,s={unversionedId:"graphql/objects/signup-change",id:"graphql/objects/signup-change",title:"SignupChange",description:"No description",source:"@site/docs/graphql/objects/signup-change.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/signup-change",permalink:"/docs/graphql/objects/signup-change",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/signup-change.mdx",tags:[],version:"current",frontMatter:{id:"signup-change",title:"SignupChange",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"SetConventionCanceledPayload",permalink:"/docs/graphql/objects/set-convention-canceled-payload"},next:{title:"SignupChangesPagination",permalink:"/docs/graphql/objects/signup-changes-pagination"}},d={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SignupChange.<b>action</b></code><Bullet /><code>SignupChangeAction!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-signupchangebactionbcodesignupchangeaction--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SignupChange.<b>bucket_key</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-signupchangebbucket_keybcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SignupChange.<b>counted</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-signupchangebcountedbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SignupChange.<b>created_at</b></code><Bullet /><code>Date!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-signupchangebcreated_atbcodedate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SignupChange.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-signupchangebidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SignupChange.<b>previous_signup_change</b></code><Bullet /><code>SignupChange</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-signupchangebprevious_signup_changebcodesignupchange-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SignupChange.<b>run</b></code><Bullet /><code>Run!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-signupchangebrunbcoderun--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SignupChange.<b>signup</b></code><Bullet /><code>Signup!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-signupchangebsignupbcodesignup--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SignupChange.<b>state</b></code><Bullet /><code>SignupState!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-signupchangebstatebcodesignupstate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SignupChange.<b>updated_at</b></code><Bullet /><code>Date!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-signupchangebupdated_atbcodedate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SignupChange.<b>user_con_profile</b></code><Bullet /><code>UserConProfile!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-signupchangebuser_con_profilebcodeuserconprofile--",level:4},{value:"Member of",id:"member-of",level:3}],g=()=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(o.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{class:"badge badge--"+e.class},e.text)),h={toc:i,Bullet:g,SpecifiedBy:u,Badge:p};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type SignupChange {\n  action: SignupChangeAction!\n  bucket_key: String\n  counted: Boolean!\n  created_at: Date!\n  id: ID!\n  previous_signup_change: SignupChange\n  run: Run!\n  signup: Signup!\n  state: SignupState!\n  updated_at: Date!\n  user_con_profile: UserConProfile!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-signupchangebactionbcodesignupchangeaction--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SignupChange.",(0,l.kt)("b",null,"action"))),(0,l.kt)(g,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/signup-change-action"},(0,l.kt)("inlineCode",{parentName:"a"},"SignupChangeAction!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-signupchangebbucket_keybcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SignupChange.",(0,l.kt)("b",null,"bucket_key"))),(0,l.kt)(g,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-signupchangebcountedbcodeboolean--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SignupChange.",(0,l.kt)("b",null,"counted"))),(0,l.kt)(g,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-signupchangebcreated_atbcodedate--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SignupChange.",(0,l.kt)("b",null,"created_at"))),(0,l.kt)(g,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/date"},(0,l.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-signupchangebidbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SignupChange.",(0,l.kt)("b",null,"id"))),(0,l.kt)(g,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-signupchangebprevious_signup_changebcodesignupchange-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SignupChange.",(0,l.kt)("b",null,"previous_signup_change"))),(0,l.kt)(g,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/signup-change"},(0,l.kt)("inlineCode",{parentName:"a"},"SignupChange"))," ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-signupchangebrunbcoderun--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SignupChange.",(0,l.kt)("b",null,"run"))),(0,l.kt)(g,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/run"},(0,l.kt)("inlineCode",{parentName:"a"},"Run!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-signupchangebsignupbcodesignup--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SignupChange.",(0,l.kt)("b",null,"signup"))),(0,l.kt)(g,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/signup"},(0,l.kt)("inlineCode",{parentName:"a"},"Signup!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-signupchangebstatebcodesignupstate--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SignupChange.",(0,l.kt)("b",null,"state"))),(0,l.kt)(g,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/signup-state"},(0,l.kt)("inlineCode",{parentName:"a"},"SignupState!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-signupchangebupdated_atbcodedate--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SignupChange.",(0,l.kt)("b",null,"updated_at"))),(0,l.kt)(g,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/date"},(0,l.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-signupchangebuser_con_profilebcodeuserconprofile--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SignupChange.",(0,l.kt)("b",null,"user_con_profile"))),(0,l.kt)(g,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/user-con-profile"},(0,l.kt)("inlineCode",{parentName:"a"},"UserConProfile!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/graphql/objects/signup-change"},(0,l.kt)("inlineCode",{parentName:"a"},"SignupChange")),"  ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(g,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/docs/graphql/objects/signup-changes-pagination"},(0,l.kt)("inlineCode",{parentName:"a"},"SignupChangesPagination")),"  ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);