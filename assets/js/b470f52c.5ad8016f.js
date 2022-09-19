"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[77549],{75631:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>g});var n=o(3289);function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,l=function(e,t){if(null==e)return{};var o,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(l[o]=e[o]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(l[o]=e[o])}return l}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(o),g=l,y=u["".concat(c,".").concat(g)]||u[g]||p[g]||a;return o?n.createElement(y,r(r({ref:t},d),{},{components:o})):n.createElement(y,r({ref:t},d))}));function g(e,t){var o=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=o.length,r=new Array(a);r[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var s=2;s<a;s++)r[s]=o[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},4187:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>g,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var n=o(34489),l=o(3289),a=o(75631);const r={id:"registration-policy",title:"RegistrationPolicy",hide_table_of_contents:!1},i=void 0,c={unversionedId:"graphql/objects/registration-policy",id:"graphql/objects/registration-policy",title:"RegistrationPolicy",description:"No description",source:"@site/docs/graphql/objects/registration-policy.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/registration-policy",permalink:"/docs/graphql/objects/registration-policy",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/registration-policy.mdx",tags:[],version:"current",frontMatter:{id:"registration-policy",title:"RegistrationPolicy",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"RegistrationPolicyBucket",permalink:"/docs/graphql/objects/registration-policy-bucket"},next:{title:"RejectSignupRequestPayload",permalink:"/docs/graphql/objects/reject-signup-request-payload"}},s={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>RegistrationPolicy.<b>buckets</b></code><Bullet /><code>[RegistrationPolicyBucket!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-registrationpolicybbucketsbcoderegistrationpolicybucket--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RegistrationPolicy.<b>minimum_slots</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-registrationpolicybminimum_slotsbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RegistrationPolicy.<b>minimum_slots_including_not_counted</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-registrationpolicybminimum_slots_including_not_countedbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RegistrationPolicy.<b>only_uncounted</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-registrationpolicybonly_uncountedbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RegistrationPolicy.<b>preferred_slots</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-registrationpolicybpreferred_slotsbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RegistrationPolicy.<b>preferred_slots_including_not_counted</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-registrationpolicybpreferred_slots_including_not_countedbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RegistrationPolicy.<b>prevent_no_preference_signups</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-registrationpolicybprevent_no_preference_signupsbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RegistrationPolicy.<b>slots_limited</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-registrationpolicybslots_limitedbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RegistrationPolicy.<b>total_slots</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-registrationpolicybtotal_slotsbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RegistrationPolicy.<b>total_slots_including_not_counted</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-registrationpolicybtotal_slots_including_not_countedbcodeint-",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,a.kt)(l.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,a.kt)(l.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,a.kt)(l.Fragment,null,(0,a.kt)("span",{class:"badge badge--"+e.class},e.text)),y={toc:d,Bullet:p,SpecifiedBy:u,Badge:g};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},y,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type RegistrationPolicy {\n  buckets: [RegistrationPolicyBucket!]!\n  minimum_slots: Int\n  minimum_slots_including_not_counted: Int\n  only_uncounted: Boolean\n  preferred_slots: Int\n  preferred_slots_including_not_counted: Int\n  prevent_no_preference_signups: Boolean!\n  slots_limited: Boolean\n  total_slots: Int\n  total_slots_including_not_counted: Int\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-registrationpolicybbucketsbcoderegistrationpolicybucket--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"RegistrationPolicy.",(0,a.kt)("b",null,"buckets"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/registration-policy-bucket"},(0,a.kt)("inlineCode",{parentName:"a"},"[RegistrationPolicyBucket!]!"))," ",(0,a.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-registrationpolicybminimum_slotsbcodeint-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"RegistrationPolicy.",(0,a.kt)("b",null,"minimum_slots"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,a.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-registrationpolicybminimum_slots_including_not_countedbcodeint-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"RegistrationPolicy.",(0,a.kt)("b",null,"minimum_slots_including_not_counted"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,a.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-registrationpolicybonly_uncountedbcodeboolean-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"RegistrationPolicy.",(0,a.kt)("b",null,"only_uncounted"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,a.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,a.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-registrationpolicybpreferred_slotsbcodeint-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"RegistrationPolicy.",(0,a.kt)("b",null,"preferred_slots"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,a.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-registrationpolicybpreferred_slots_including_not_countedbcodeint-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"RegistrationPolicy.",(0,a.kt)("b",null,"preferred_slots_including_not_counted"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,a.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-registrationpolicybprevent_no_preference_signupsbcodeboolean--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"RegistrationPolicy.",(0,a.kt)("b",null,"prevent_no_preference_signups"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,a.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,a.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-registrationpolicybslots_limitedbcodeboolean-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"RegistrationPolicy.",(0,a.kt)("b",null,"slots_limited"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,a.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,a.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-registrationpolicybtotal_slotsbcodeint-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"RegistrationPolicy.",(0,a.kt)("b",null,"total_slots"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,a.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-registrationpolicybtotal_slots_including_not_countedbcodeint-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"RegistrationPolicy.",(0,a.kt)("b",null,"total_slots_including_not_counted"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,a.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/objects/event"},(0,a.kt)("inlineCode",{parentName:"a"},"Event")),"  ",(0,a.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/objects/event-proposal"},(0,a.kt)("inlineCode",{parentName:"a"},"EventProposal")),"  ",(0,a.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);