"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[26401],{75631:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>y});var o=t(45721);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),s=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return o.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,y=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return t?o.createElement(y,i(i({ref:n},d),{},{components:t})):o.createElement(y,i({ref:n},d))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[p]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},18435:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=t(91487),r=t(45721),a=t(75631);const i={id:"convention-by-domain",title:"conventionByDomain",hide_table_of_contents:!1},c=void 0,l={unversionedId:"graphql/queries/convention-by-domain",id:"graphql/queries/convention-by-domain",title:"conventionByDomain",description:"Returns the convention associated with a specified domain name.",source:"@site/docs/graphql/queries/convention-by-domain.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/convention-by-domain",permalink:"/docs/graphql/queries/convention-by-domain",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/queries/convention-by-domain.mdx",tags:[],version:"current",frontMatter:{id:"convention-by-domain",title:"conventionByDomain",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"cmsParentByRequestHost",permalink:"/docs/graphql/queries/cms-parent-by-request-host"},next:{title:"conventionById",permalink:"/docs/graphql/queries/convention-by-id"}},s={},d=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>conventionByDomain.<b>domain</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-conventionbydomainbdomainbcodestring--",level:4},{value:"Type",id:"type",level:3},{value:'<code>Convention</code> <Badge class="secondary" text="object"/>',id:"convention-",level:4}],p=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{class:"badge badge--"+e.class},e.text)),y={toc:d,Bullet:p,SpecifiedBy:u,Badge:m},f="wrapper";function g(e){let{components:n,...t}=e;return(0,a.kt)(f,(0,o.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Returns the convention associated with a specified domain name."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"conventionByDomain(\n  domain: String!\n): Convention!\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-conventionbydomainbdomainbcodestring--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"conventionByDomain.",(0,a.kt)("b",null,"domain"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,a.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The domain name to find a convention by.")),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"convention-"},(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/convention"},(0,a.kt)("inlineCode",{parentName:"a"},"Convention"))," ",(0,a.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null))}g.isMDXComponent=!0}}]);