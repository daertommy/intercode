"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[16894],{75631:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(45721);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),h=n,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return r?a.createElement(m,i(i({ref:t},c),{},{components:r})):a.createElement(m,i({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58460:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>h,Bullet:()=>p,SpecifiedBy:()=>d,assets:()=>u,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=r(34489),n=r(45721),o=r(75631);const i={id:"oauth-pre-auth",title:"oauthPreAuth",hide_table_of_contents:!1},l=void 0,s={unversionedId:"graphql/queries/oauth-pre-auth",id:"graphql/queries/oauth-pre-auth",title:"oauthPreAuth",description:"Given a set of valid OAuth query parameters for the /oauth/authorize endpoint, returns a",source:"@site/docs/graphql/queries/oauth-pre-auth.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/oauth-pre-auth",permalink:"/docs/graphql/queries/oauth-pre-auth",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/queries/oauth-pre-auth.mdx",tags:[],version:"current",frontMatter:{id:"oauth-pre-auth",title:"oauthPreAuth",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"myAuthorizedApplications",permalink:"/docs/graphql/queries/my-authorized-applications"},next:{title:"organizations",permalink:"/docs/graphql/queries/organizations"}},u={},c=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>oauthPreAuth.<b>queryParams</b></code><Bullet /><code>Json!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-oauthpreauthbqueryparamsbcodejson--",level:4},{value:"Type",id:"type",level:3},{value:'<code>Json</code> <Badge class="secondary" text="scalar"/>',id:"json-",level:4}],p=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),h=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:c,Bullet:p,SpecifiedBy:d,Badge:h};function y(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Given a set of valid OAuth query parameters for the ",(0,o.kt)("inlineCode",{parentName:"p"},"/oauth/authorize")," endpoint, returns a\nJSON object containing the necessary data for rendering the pre-authorization screen that\nchecks if you want to allow an application to access Intercode on your behalf."),(0,o.kt)("p",null,"This essentially emulates the JSON behavior of\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/doorkeeper-gem/doorkeeper"},"Doorkeeper"),"'s API-only mode if you go to\n",(0,o.kt)("inlineCode",{parentName:"p"},"/oauth/authorize")," with query parameters. The only reason this query exists, rather than\nsimply having clients actually call ",(0,o.kt)("inlineCode",{parentName:"p"},"/oauth/authorize"),", is that we're running Doorkeeper\nin regular mode so that we can get the server-rendered HTML admin views."),(0,o.kt)("p",null,"When we've implemented our own admin screens for OAuth\n(see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/neinteractiveliterature/intercode/issues/2740"},"this Github issue"),"),\nthis query will be deprecated."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"oauthPreAuth(\n  queryParams: Json!\n): Json!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-oauthpreauthbqueryparamsbcodejson--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"oauthPreAuth.",(0,o.kt)("b",null,"queryParams"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/json"},(0,o.kt)("inlineCode",{parentName:"a"},"Json!"))," ",(0,o.kt)(h,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A set of HTTP query parameters for ",(0,o.kt)("inlineCode",{parentName:"p"},"/oauth/authorize"),", parsed out and\nrepresented as a JSON object.")),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"json-"},(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/json"},(0,o.kt)("inlineCode",{parentName:"a"},"Json"))," ",(0,o.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"An arbitrary object, serialized as JSON")))}y.isMDXComponent=!0}}]);