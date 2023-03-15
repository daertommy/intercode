"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[6367],{75631:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(45721);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),o=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=o(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=o(n),g=r,k=d["".concat(l,".").concat(g)]||d[g]||s[g]||i;return n?a.createElement(k,u(u({ref:t},c),{},{components:n})):a.createElement(k,u({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,u=new Array(i);u[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:r,u[1]=p;for(var o=2;o<i;o++)u[o]=n[o];return a.createElement.apply(null,u)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},13336:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>d,SpecifiedBy:()=>s,assets:()=>o,contentTitle:()=>p,default:()=>f,frontMatter:()=>u,metadata:()=>l,toc:()=>c});var a=n(25577),r=n(45721),i=n(75631);const u={id:"update-signup-bucket-input",title:"UpdateSignupBucketInput",hide_table_of_contents:!1},p=void 0,l={unversionedId:"graphql/inputs/update-signup-bucket-input",id:"graphql/inputs/update-signup-bucket-input",title:"UpdateSignupBucketInput",description:"Autogenerated input type of UpdateSignupBucket",source:"@site/docs/graphql/inputs/update-signup-bucket-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/update-signup-bucket-input",permalink:"/docs/graphql/inputs/update-signup-bucket-input",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/update-signup-bucket-input.mdx",tags:[],version:"current",frontMatter:{id:"update-signup-bucket-input",title:"UpdateSignupBucketInput",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"UpdateRunInput",permalink:"/docs/graphql/inputs/update-run-input"},next:{title:"UpdateSignupCountedInput",permalink:"/docs/graphql/inputs/update-signup-counted-input"}},o={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateSignupBucketInput.<b>bucket_key</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatesignupbucketinputbbucket_keybcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateSignupBucketInput.<b>clientMutationId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatesignupbucketinputbclientmutationidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateSignupBucketInput.<b>id</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatesignupbucketinputbidbcodeid-",level:4},{value:"Member of",id:"member-of",level:3}],d=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{class:"badge badge--"+e.class},e.text)),k={toc:c,Bullet:d,SpecifiedBy:s,Badge:g},m="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Autogenerated input type of UpdateSignupBucket"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input UpdateSignupBucketInput {\n  bucket_key: String!\n  clientMutationId: String\n  id: ID\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-updatesignupbucketinputbbucket_keybcodestring--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"UpdateSignupBucketInput.",(0,i.kt)("b",null,"bucket_key"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,i.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-updatesignupbucketinputbclientmutationidbcodestring-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"UpdateSignupBucketInput.",(0,i.kt)("b",null,"clientMutationId"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A unique identifier for the client performing the mutation.")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-updatesignupbucketinputbidbcodeid-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"UpdateSignupBucketInput.",(0,i.kt)("b",null,"id"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,i.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/graphql/mutations/update-signup-bucket"},(0,i.kt)("inlineCode",{parentName:"a"},"updateSignupBucket")),"  ",(0,i.kt)(g,{class:"secondary",text:"mutation",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);