"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[39410],{75631:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(45721);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(n),y=r,g=s["".concat(d,".").concat(y)]||s[y]||u[y]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=y;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[s]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},82137:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>y,Bullet:()=>s,SpecifiedBy:()=>u,assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var a=n(91487),r=n(45721),i=n(75631);const o={id:"withdraw-my-signup-payload",title:"WithdrawMySignupPayload",hide_table_of_contents:!1},l=void 0,d={unversionedId:"graphql/objects/withdraw-my-signup-payload",id:"graphql/objects/withdraw-my-signup-payload",title:"WithdrawMySignupPayload",description:"Autogenerated return type of WithdrawMySignup.",source:"@site/docs/graphql/objects/withdraw-my-signup-payload.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/withdraw-my-signup-payload",permalink:"/docs/graphql/objects/withdraw-my-signup-payload",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/withdraw-my-signup-payload.mdx",tags:[],version:"current",frontMatter:{id:"withdraw-my-signup-payload",title:"WithdrawMySignupPayload",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"WithdrawAllUserConProfileSignupsPayload",permalink:"/docs/graphql/objects/withdraw-all-user-con-profile-signups-payload"},next:{title:"WithdrawSignupRequestPayload",permalink:"/docs/graphql/objects/withdraw-signup-request-payload"}},p={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>WithdrawMySignupPayload.<b>clientMutationId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-withdrawmysignuppayloadbclientmutationidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>WithdrawMySignupPayload.<b>signup</b></code><Bullet /><code>Signup!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-withdrawmysignuppayloadbsignupbcodesignup--",level:4},{value:"Returned by",id:"returned-by",level:3}],s=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{class:"badge badge--"+e.class},e.text)),g={toc:c,Bullet:s,SpecifiedBy:u,Badge:y},m="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Autogenerated return type of WithdrawMySignup."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type WithdrawMySignupPayload {\n  clientMutationId: String\n  signup: Signup!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-withdrawmysignuppayloadbclientmutationidbcodestring-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"WithdrawMySignupPayload.",(0,i.kt)("b",null,"clientMutationId"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A unique identifier for the client performing the mutation.")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-withdrawmysignuppayloadbsignupbcodesignup--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"WithdrawMySignupPayload.",(0,i.kt)("b",null,"signup"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/signup"},(0,i.kt)("inlineCode",{parentName:"a"},"Signup!"))," ",(0,i.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"returned-by"},"Returned by"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/graphql/mutations/withdraw-my-signup"},(0,i.kt)("inlineCode",{parentName:"a"},"withdrawMySignup")),"  ",(0,i.kt)(y,{class:"secondary",text:"mutation",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);