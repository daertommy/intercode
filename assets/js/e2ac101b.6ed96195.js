"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[47329],{75631:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(45721);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=i(n),y=r,g=u["".concat(c,".").concat(y)]||u[y]||s[y]||o;return n?a.createElement(g,l(l({ref:t},d),{},{components:n})):a.createElement(g,l({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=y;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:r,l[1]=p;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},71502:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>y,Bullet:()=>u,SpecifiedBy:()=>s,assets:()=>i,contentTitle:()=>p,default:()=>v,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=n(91487),r=n(45721),o=n(75631);const l={id:"update-event-category",title:"updateEventCategory",hide_table_of_contents:!1},p=void 0,c={unversionedId:"graphql/mutations/update-event-category",id:"graphql/mutations/update-event-category",title:"updateEventCategory",description:"No description",source:"@site/docs/graphql/mutations/update-event-category.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/update-event-category",permalink:"/docs/graphql/mutations/update-event-category",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/mutations/update-event-category.mdx",tags:[],version:"current",frontMatter:{id:"update-event-category",title:"updateEventCategory",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"updateEventAdminNotes",permalink:"/docs/graphql/mutations/update-event-admin-notes"},next:{title:"updateEventProposalAdminNotes",permalink:"/docs/graphql/mutations/update-event-proposal-admin-notes"}},i={},d=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>updateEventCategory.<b>input</b></code><Bullet /><code>UpdateEventCategoryInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updateeventcategorybinputbcodeupdateeventcategoryinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>UpdateEventCategoryPayload</code> <Badge class="secondary" text="object"/>',id:"updateeventcategorypayload-",level:4}],u=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),g={toc:d,Bullet:u,SpecifiedBy:s,Badge:y},m="wrapper";function v(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"updateEventCategory(\n  input: UpdateEventCategoryInput!\n): UpdateEventCategoryPayload!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updateeventcategorybinputbcodeupdateeventcategoryinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"updateEventCategory.",(0,o.kt)("b",null,"input"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/update-event-category-input"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateEventCategoryInput!"))," ",(0,o.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Parameters for UpdateEventCategory")),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"updateeventcategorypayload-"},(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/update-event-category-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateEventCategoryPayload"))," ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Autogenerated return type of UpdateEventCategory.")))}v.isMDXComponent=!0}}]);