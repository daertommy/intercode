"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[8970],{75631:(e,t,o)=>{o.d(t,{Zo:()=>i,kt:()=>y});var n=o(45721);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},i=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=d(o),y=a,f=p["".concat(s,".").concat(y)]||p[y]||m[y]||r;return o?n.createElement(f,l(l({ref:t},i),{},{components:o})):n.createElement(f,l({ref:t},i))}));function y(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,l=new Array(r);l[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var d=2;d<r;d++)l[d]=o[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},48527:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>y,Bullet:()=>m,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var n=o(34489),a=o(45721),r=o(75631);const l={id:"form",title:"Form",hide_table_of_contents:!1},c=void 0,s={unversionedId:"graphql/objects/form",id:"graphql/objects/form",title:"Form",description:"No description",source:"@site/docs/graphql/objects/form.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/form",permalink:"/docs/graphql/objects/form",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/form.mdx",tags:[],version:"current",frontMatter:{id:"form",title:"Form",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"FormSection",permalink:"/docs/graphql/objects/form-section"},next:{title:"LiquidAssign",permalink:"/docs/graphql/objects/liquid-assign"}},d={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Form.<b>event_categories</b></code><Bullet /><code>[EventCategory!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-formbevent_categoriesbcodeeventcategory--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Form.<b>export_json</b></code><Bullet /><code>Json!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-formbexport_jsonbcodejson--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Form.<b>form_section</b></code><Bullet /><code>FormSection!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-formbform_sectionbcodeformsection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Form.<b>form_sections</b></code><Bullet /><code>[FormSection!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-formbform_sectionsbcodeformsection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Form.<b>form_type</b></code><Bullet /><code>FormType!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-formbform_typebcodeformtype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Form.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-formbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Form.<b>proposal_event_categories</b></code><Bullet /><code>[EventCategory!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-formbproposal_event_categoriesbcodeeventcategory--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Form.<b>title</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-formbtitlebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Form.<b>user_con_profile_conventions</b></code><Bullet /><code>[Convention!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-formbuser_con_profile_conventionsbcodeconvention--",level:4},{value:"Member of",id:"member-of",level:3}],m=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:i,Bullet:m,SpecifiedBy:p,Badge:y};function g(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Form {\n  event_categories: [EventCategory!]!\n  export_json: Json!\n  form_section(\n  id: ID\n): FormSection!\n  form_sections: [FormSection!]!\n  form_type: FormType!\n  id: ID!\n  proposal_event_categories: [EventCategory!]!\n  title: String!\n  user_con_profile_conventions: [Convention!]!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-formbevent_categoriesbcodeeventcategory--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Form.",(0,r.kt)("b",null,"event_categories"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/event-category"},(0,r.kt)("inlineCode",{parentName:"a"},"[EventCategory!]!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-formbexport_jsonbcodejson--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Form.",(0,r.kt)("b",null,"export_json"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/json"},(0,r.kt)("inlineCode",{parentName:"a"},"Json!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-formbform_sectionbcodeformsection--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Form.",(0,r.kt)("b",null,"form_section"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/form-section"},(0,r.kt)("inlineCode",{parentName:"a"},"FormSection!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-formform_sectionbidbcodeid-"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Form.form_section.",(0,r.kt)("b",null,"id"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h5",href:"/docs/graphql/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("p",{parentName:"blockquote"},"The ID of the form section to find.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-formbform_sectionsbcodeformsection--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Form.",(0,r.kt)("b",null,"form_sections"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/form-section"},(0,r.kt)("inlineCode",{parentName:"a"},"[FormSection!]!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-formbform_typebcodeformtype--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Form.",(0,r.kt)("b",null,"form_type"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/form-type"},(0,r.kt)("inlineCode",{parentName:"a"},"FormType!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-formbidbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Form.",(0,r.kt)("b",null,"id"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-formbproposal_event_categoriesbcodeeventcategory--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Form.",(0,r.kt)("b",null,"proposal_event_categories"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/event-category"},(0,r.kt)("inlineCode",{parentName:"a"},"[EventCategory!]!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-formbtitlebcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Form.",(0,r.kt)("b",null,"title"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-formbuser_con_profile_conventionsbcodeconvention--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"Form.",(0,r.kt)("b",null,"user_con_profile_conventions"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/convention"},(0,r.kt)("inlineCode",{parentName:"a"},"[Convention!]!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/graphql/objects/convention"},(0,r.kt)("inlineCode",{parentName:"a"},"Convention")),"  ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/docs/graphql/objects/create-form-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"CreateFormPayload")),"  ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/docs/graphql/objects/create-form-with-jsonpayload"},(0,r.kt)("inlineCode",{parentName:"a"},"CreateFormWithJSONPayload")),"  ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/docs/graphql/objects/delete-form-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"DeleteFormPayload")),"  ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/docs/graphql/objects/event"},(0,r.kt)("inlineCode",{parentName:"a"},"Event")),"  ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/docs/graphql/objects/event-category"},(0,r.kt)("inlineCode",{parentName:"a"},"EventCategory")),"  ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/docs/graphql/objects/event-proposal"},(0,r.kt)("inlineCode",{parentName:"a"},"EventProposal")),"  ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/docs/graphql/objects/form-section"},(0,r.kt)("inlineCode",{parentName:"a"},"FormSection")),"  ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/docs/graphql/objects/move-form-section-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"MoveFormSectionPayload")),"  ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/docs/graphql/objects/update-form-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"UpdateFormPayload")),"  ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/docs/graphql/objects/update-form-with-jsonpayload"},(0,r.kt)("inlineCode",{parentName:"a"},"UpdateFormWithJSONPayload")),"  ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);