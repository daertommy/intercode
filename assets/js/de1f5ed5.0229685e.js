"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[53269],{75631:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var o=n(45721);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),r=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=r(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=r(n),m=a,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||l;return n?o.createElement(h,i(i({ref:t},s),{},{components:n})):o.createElement(h,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=p;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var r=2;r<l;r++)i[r]=n[r];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},14291:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>r,contentTitle:()=>d,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var o=n(34489),a=n(45721),l=n(75631);const i={id:"convention-input",title:"ConventionInput",hide_table_of_contents:!1},d=void 0,c={unversionedId:"graphql/inputs/convention-input",id:"graphql/inputs/convention-input",title:"ConventionInput",description:"No description",source:"@site/docs/graphql/inputs/convention-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/convention-input",permalink:"/docs/graphql/inputs/convention-input",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/convention-input.mdx",tags:[],version:"current",frontMatter:{id:"convention-input",title:"ConventionInput",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"ConventionFiltersInput",permalink:"/docs/graphql/inputs/convention-filters-input"},next:{title:"ConvertTicketToEventProvidedInput",permalink:"/docs/graphql/inputs/convert-ticket-to-event-provided-input"}},r={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ConventionInput.<b>accepting_proposals</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-conventioninputbaccepting_proposalsbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ConventionInput.<b>catchAllStaffPositionId</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-conventioninputbcatchallstaffpositionidbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ConventionInput.<b>clickwrap_agreement</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-conventioninputbclickwrap_agreementbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ConventionInput.<b>defaultLayoutId</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-conventioninputbdefaultlayoutidbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ConventionInput.<b>domain</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-conventioninputbdomainbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ConventionInput.<b>email_from</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-conventioninputbemail_frombcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ConventionInput.<b>email_mode</b></code><Bullet /><code>EmailMode</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-conventioninputbemail_modebcodeemailmode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ConventionInput.<b>ends_at</b></code><Bullet /><code>Date</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-conventioninputbends_atbcodedate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ConventionInput.<b>event_mailing_list_domain</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-conventioninputbevent_mailing_list_domainbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ConventionInput.<b>favicon</b></code><Bullet /><code>Upload</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-conventioninputbfaviconbcodeupload-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ConventionInput.<b>hidden</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-conventioninputbhiddenbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ConventionInput.<b>language</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-conventioninputblanguagebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ConventionInput.<b>location</b></code><Bullet /><code>Json</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-conventioninputblocationbcodejson-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ConventionInput.<b>maximum_event_signups</b></code><Bullet /><code>ScheduledValueInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-conventioninputbmaximum_event_signupsbcodescheduledvalueinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ConventionInput.<b>maximum_tickets</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-conventioninputbmaximum_ticketsbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ConventionInput.<b>name</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-conventioninputbnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ConventionInput.<b>openGraphImage</b></code><Bullet /><code>Upload</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-conventioninputbopengraphimagebcodeupload-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ConventionInput.<b>rootPageId</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-conventioninputbrootpageidbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ConventionInput.<b>show_event_list</b></code><Bullet /><code>ShowSchedule</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-conventioninputbshow_event_listbcodeshowschedule-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ConventionInput.<b>show_schedule</b></code><Bullet /><code>ShowSchedule</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-conventioninputbshow_schedulebcodeshowschedule-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ConventionInput.<b>signup_mode</b></code><Bullet /><code>SignupMode</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-conventioninputbsignup_modebcodesignupmode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ConventionInput.<b>signup_requests_open</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-conventioninputbsignup_requests_openbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ConventionInput.<b>site_mode</b></code><Bullet /><code>SiteMode</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-conventioninputbsite_modebcodesitemode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ConventionInput.<b>starts_at</b></code><Bullet /><code>Date</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-conventioninputbstarts_atbcodedate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ConventionInput.<b>ticket_mode</b></code><Bullet /><code>TicketMode</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-conventioninputbticket_modebcodeticketmode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ConventionInput.<b>ticket_name</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-conventioninputbticket_namebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ConventionInput.<b>timezone_mode</b></code><Bullet /><code>TimezoneMode</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-conventioninputbtimezone_modebcodetimezonemode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ConventionInput.<b>timezone_name</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-conventioninputbtimezone_namebcodestring-",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(a.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{class:"badge badge--"+e.class},e.text)),h={toc:s,Bullet:u,SpecifiedBy:p,Badge:m};function g(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"input ConventionInput {\n  accepting_proposals: Boolean\n  catchAllStaffPositionId: ID\n  clickwrap_agreement: String\n  defaultLayoutId: ID\n  domain: String\n  email_from: String\n  email_mode: EmailMode\n  ends_at: Date\n  event_mailing_list_domain: String\n  favicon: Upload\n  hidden: Boolean\n  language: String\n  location: Json\n  maximum_event_signups: ScheduledValueInput\n  maximum_tickets: Int\n  name: String\n  openGraphImage: Upload\n  rootPageId: ID\n  show_event_list: ShowSchedule\n  show_schedule: ShowSchedule\n  signup_mode: SignupMode\n  signup_requests_open: Boolean\n  site_mode: SiteMode\n  starts_at: Date\n  ticket_mode: TicketMode\n  ticket_name: String\n  timezone_mode: TimezoneMode\n  timezone_name: String\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-conventioninputbaccepting_proposalsbcodeboolean-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ConventionInput.",(0,l.kt)("b",null,"accepting_proposals"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-conventioninputbcatchallstaffpositionidbcodeid-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ConventionInput.",(0,l.kt)("b",null,"catchAllStaffPositionId"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-conventioninputbclickwrap_agreementbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ConventionInput.",(0,l.kt)("b",null,"clickwrap_agreement"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-conventioninputbdefaultlayoutidbcodeid-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ConventionInput.",(0,l.kt)("b",null,"defaultLayoutId"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-conventioninputbdomainbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ConventionInput.",(0,l.kt)("b",null,"domain"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-conventioninputbemail_frombcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ConventionInput.",(0,l.kt)("b",null,"email_from"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-conventioninputbemail_modebcodeemailmode-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ConventionInput.",(0,l.kt)("b",null,"email_mode"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/email-mode"},(0,l.kt)("inlineCode",{parentName:"a"},"EmailMode"))," ",(0,l.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-conventioninputbends_atbcodedate-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ConventionInput.",(0,l.kt)("b",null,"ends_at"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/date"},(0,l.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-conventioninputbevent_mailing_list_domainbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ConventionInput.",(0,l.kt)("b",null,"event_mailing_list_domain"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-conventioninputbfaviconbcodeupload-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ConventionInput.",(0,l.kt)("b",null,"favicon"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/upload"},(0,l.kt)("inlineCode",{parentName:"a"},"Upload"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-conventioninputbhiddenbcodeboolean-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ConventionInput.",(0,l.kt)("b",null,"hidden"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-conventioninputblanguagebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ConventionInput.",(0,l.kt)("b",null,"language"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-conventioninputblocationbcodejson-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ConventionInput.",(0,l.kt)("b",null,"location"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/json"},(0,l.kt)("inlineCode",{parentName:"a"},"Json"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-conventioninputbmaximum_event_signupsbcodescheduledvalueinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ConventionInput.",(0,l.kt)("b",null,"maximum_event_signups"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/scheduled-value-input"},(0,l.kt)("inlineCode",{parentName:"a"},"ScheduledValueInput"))," ",(0,l.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-conventioninputbmaximum_ticketsbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ConventionInput.",(0,l.kt)("b",null,"maximum_tickets"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-conventioninputbnamebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ConventionInput.",(0,l.kt)("b",null,"name"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-conventioninputbopengraphimagebcodeupload-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ConventionInput.",(0,l.kt)("b",null,"openGraphImage"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/upload"},(0,l.kt)("inlineCode",{parentName:"a"},"Upload"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-conventioninputbrootpageidbcodeid-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ConventionInput.",(0,l.kt)("b",null,"rootPageId"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-conventioninputbshow_event_listbcodeshowschedule-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ConventionInput.",(0,l.kt)("b",null,"show_event_list"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/show-schedule"},(0,l.kt)("inlineCode",{parentName:"a"},"ShowSchedule"))," ",(0,l.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-conventioninputbshow_schedulebcodeshowschedule-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ConventionInput.",(0,l.kt)("b",null,"show_schedule"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/show-schedule"},(0,l.kt)("inlineCode",{parentName:"a"},"ShowSchedule"))," ",(0,l.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-conventioninputbsignup_modebcodesignupmode-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ConventionInput.",(0,l.kt)("b",null,"signup_mode"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/signup-mode"},(0,l.kt)("inlineCode",{parentName:"a"},"SignupMode"))," ",(0,l.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-conventioninputbsignup_requests_openbcodeboolean-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ConventionInput.",(0,l.kt)("b",null,"signup_requests_open"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-conventioninputbsite_modebcodesitemode-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ConventionInput.",(0,l.kt)("b",null,"site_mode"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/site-mode"},(0,l.kt)("inlineCode",{parentName:"a"},"SiteMode"))," ",(0,l.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-conventioninputbstarts_atbcodedate-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ConventionInput.",(0,l.kt)("b",null,"starts_at"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/date"},(0,l.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-conventioninputbticket_modebcodeticketmode-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ConventionInput.",(0,l.kt)("b",null,"ticket_mode"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/ticket-mode"},(0,l.kt)("inlineCode",{parentName:"a"},"TicketMode"))," ",(0,l.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-conventioninputbticket_namebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ConventionInput.",(0,l.kt)("b",null,"ticket_name"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-conventioninputbtimezone_modebcodetimezonemode-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ConventionInput.",(0,l.kt)("b",null,"timezone_mode"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/timezone-mode"},(0,l.kt)("inlineCode",{parentName:"a"},"TimezoneMode"))," ",(0,l.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-conventioninputbtimezone_namebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ConventionInput.",(0,l.kt)("b",null,"timezone_name"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/graphql/inputs/create-convention-input"},(0,l.kt)("inlineCode",{parentName:"a"},"CreateConventionInput")),"  ",(0,l.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/docs/graphql/inputs/update-convention-input"},(0,l.kt)("inlineCode",{parentName:"a"},"UpdateConventionInput")),"  ",(0,l.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);