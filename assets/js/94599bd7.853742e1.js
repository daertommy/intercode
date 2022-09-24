"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[60531],{75631:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>s});var r=a(45721);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.createContext({}),i=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},d=function(e){var t=i(e.components);return r.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,m=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=i(a),s=n,b=c["".concat(m,".").concat(s)]||c[s]||u[s]||o;return a?r.createElement(b,p(p({ref:t},d),{},{components:a})):r.createElement(b,p({ref:t},d))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,p=new Array(o);p[0]=c;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:n,p[1]=l;for(var i=2;i<o;i++)p[i]=a[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},898:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>s,Bullet:()=>u,SpecifiedBy:()=>c,assets:()=>i,contentTitle:()=>l,default:()=>f,frontMatter:()=>p,metadata:()=>m,toc:()=>d});var r=a(34489),n=a(45721),o=a(75631);const p={id:"update-team-member",title:"updateTeamMember",hide_table_of_contents:!1},l=void 0,m={unversionedId:"graphql/mutations/update-team-member",id:"graphql/mutations/update-team-member",title:"updateTeamMember",description:"No description",source:"@site/docs/graphql/mutations/update-team-member.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/update-team-member",permalink:"/docs/graphql/mutations/update-team-member",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/mutations/update-team-member.mdx",tags:[],version:"current",frontMatter:{id:"update-team-member",title:"updateTeamMember",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"updateStaffPosition",permalink:"/docs/graphql/mutations/update-staff-position"},next:{title:"updateTicketType",permalink:"/docs/graphql/mutations/update-ticket-type"}},i={},d=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>updateTeamMember.<b>input</b></code><Bullet /><code>UpdateTeamMemberInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updateteammemberbinputbcodeupdateteammemberinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>UpdateTeamMemberPayload</code> <Badge class="secondary" text="object"/>',id:"updateteammemberpayload-",level:4}],u=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),b={toc:d,Bullet:u,SpecifiedBy:c,Badge:s};function f(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"updateTeamMember(\n  input: UpdateTeamMemberInput!\n): UpdateTeamMemberPayload!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updateteammemberbinputbcodeupdateteammemberinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"updateTeamMember.",(0,o.kt)("b",null,"input"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/update-team-member-input"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateTeamMemberInput!"))," ",(0,o.kt)(s,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(s,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Parameters for UpdateTeamMember")),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"updateteammemberpayload-"},(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/update-team-member-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateTeamMemberPayload"))," ",(0,o.kt)(s,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Autogenerated return type of UpdateTeamMember")))}f.isMDXComponent=!0}}]);