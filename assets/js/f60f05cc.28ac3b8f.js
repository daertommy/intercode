"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[19561],{75631:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var a=n(45721);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,y=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(y,i(i({ref:t},s),{},{components:n})):a.createElement(y,i({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[u]="string"==typeof e?e:r,i[1]=d;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67257:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>u,SpecifiedBy:()=>c,assets:()=>p,contentTitle:()=>d,default:()=>v,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(25577),r=n(45721),o=n(75631);const i={id:"update-event-admin-notes",title:"updateEventAdminNotes",hide_table_of_contents:!1},d=void 0,l={unversionedId:"graphql/mutations/update-event-admin-notes",id:"graphql/mutations/update-event-admin-notes",title:"updateEventAdminNotes",description:"No description",source:"@site/docs/graphql/mutations/update-event-admin-notes.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/update-event-admin-notes",permalink:"/docs/graphql/mutations/update-event-admin-notes",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/mutations/update-event-admin-notes.mdx",tags:[],version:"current",frontMatter:{id:"update-event-admin-notes",title:"updateEventAdminNotes",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"updateEmailRoute",permalink:"/docs/graphql/mutations/update-email-route"},next:{title:"updateEventCategory",permalink:"/docs/graphql/mutations/update-event-category"}},p={},s=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>updateEventAdminNotes.<b>input</b></code><Bullet /><code>UpdateEventAdminNotesInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updateeventadminnotesbinputbcodeupdateeventadminnotesinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>UpdateEventAdminNotesPayload</code> <Badge class="secondary" text="object"/>',id:"updateeventadminnotespayload-",level:4}],u=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),y={toc:s,Bullet:u,SpecifiedBy:c,Badge:m},f="wrapper";function v(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"updateEventAdminNotes(\n  input: UpdateEventAdminNotesInput!\n): UpdateEventAdminNotesPayload!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updateeventadminnotesbinputbcodeupdateeventadminnotesinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"updateEventAdminNotes.",(0,o.kt)("b",null,"input"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/update-event-admin-notes-input"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateEventAdminNotesInput!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Parameters for UpdateEventAdminNotes")),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"updateeventadminnotespayload-"},(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/update-event-admin-notes-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateEventAdminNotesPayload"))," ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Autogenerated return type of UpdateEventAdminNotes.")))}v.isMDXComponent=!0}}]);