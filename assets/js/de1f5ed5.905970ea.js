"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[53269],{75631:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return u}});var a=t(3289);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),m=c(t),u=o,h=m["".concat(l,".").concat(u)]||m[u]||p[u]||i;return t?a.createElement(h,d(d({ref:n},s),{},{components:t})):a.createElement(h,d({ref:n},s))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,d=new Array(i);d[0]=m;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,d[1]=r;for(var c=2;c<i;c++)d[c]=t[c];return a.createElement.apply(null,d)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5497:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return p}});var a=t(43830),o=t(32056),i=(t(3289),t(75631)),d=["components"],r={id:"convention-input",title:"ConventionInput"},l=void 0,c={unversionedId:"graphql/inputs/convention-input",id:"graphql/inputs/convention-input",title:"ConventionInput",description:"No description",source:"@site/docs/graphql/inputs/convention-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/convention-input",permalink:"/docs/graphql/inputs/convention-input",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/convention-input.mdx",tags:[],version:"current",frontMatter:{id:"convention-input",title:"ConventionInput"},sidebar:"sidebar",previous:{title:"ConventionFiltersInput",permalink:"/docs/graphql/inputs/convention-filters-input"},next:{title:"ConvertTicketToEventProvidedInput",permalink:"/docs/graphql/inputs/convert-ticket-to-event-provided-input"}},s={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>accepting_proposals</code> (<code>Boolean</code>)",id:"accepting_proposals-boolean",level:4},{value:"<code>catchAllStaffPositionId</code> (<code>ID</code>)",id:"catchallstaffpositionid-id",level:4},{value:"<code>clickwrap_agreement</code> (<code>String</code>)",id:"clickwrap_agreement-string",level:4},{value:"<code>defaultLayoutId</code> (<code>ID</code>)",id:"defaultlayoutid-id",level:4},{value:"<code>domain</code> (<code>String</code>)",id:"domain-string",level:4},{value:"<code>email_from</code> (<code>String</code>)",id:"email_from-string",level:4},{value:"<code>email_mode</code> (<code>EmailMode</code>)",id:"email_mode-emailmode",level:4},{value:"<code>ends_at</code> (<code>Date</code>)",id:"ends_at-date",level:4},{value:"<code>event_mailing_list_domain</code> (<code>String</code>)",id:"event_mailing_list_domain-string",level:4},{value:"<code>favicon</code> (<code>Upload</code>)",id:"favicon-upload",level:4},{value:"<code>hidden</code> (<code>Boolean</code>)",id:"hidden-boolean",level:4},{value:"<code>language</code> (<code>String</code>)",id:"language-string",level:4},{value:"<code>location</code> (<code>Json</code>)",id:"location-json",level:4},{value:"<code>maximum_event_signups</code> (<code>ScheduledValueInput</code>)",id:"maximum_event_signups-scheduledvalueinput",level:4},{value:"<code>maximum_tickets</code> (<code>Int</code>)",id:"maximum_tickets-int",level:4},{value:"<code>name</code> (<code>String</code>)",id:"name-string",level:4},{value:"<code>openGraphImage</code> (<code>Upload</code>)",id:"opengraphimage-upload",level:4},{value:"<code>rootPageId</code> (<code>ID</code>)",id:"rootpageid-id",level:4},{value:"<code>show_event_list</code> (<code>ShowSchedule</code>)",id:"show_event_list-showschedule",level:4},{value:"<code>show_schedule</code> (<code>ShowSchedule</code>)",id:"show_schedule-showschedule",level:4},{value:"<code>signup_mode</code> (<code>SignupMode</code>)",id:"signup_mode-signupmode",level:4},{value:"<code>signup_requests_open</code> (<code>Boolean</code>)",id:"signup_requests_open-boolean",level:4},{value:"<code>site_mode</code> (<code>SiteMode</code>)",id:"site_mode-sitemode",level:4},{value:"<code>starts_at</code> (<code>Date</code>)",id:"starts_at-date",level:4},{value:"<code>ticket_mode</code> (<code>TicketMode</code>)",id:"ticket_mode-ticketmode",level:4},{value:"<code>ticket_name</code> (<code>String</code>)",id:"ticket_name-string",level:4},{value:"<code>timezone_mode</code> (<code>TimezoneMode</code>)",id:"timezone_mode-timezonemode",level:4},{value:"<code>timezone_name</code> (<code>String</code>)",id:"timezone_name-string",level:4}],m={toc:p};function u(e){var n=e.components,t=(0,o.Z)(e,d);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input ConventionInput {\n  accepting_proposals: Boolean\n  catchAllStaffPositionId: ID\n  clickwrap_agreement: String\n  defaultLayoutId: ID\n  domain: String\n  email_from: String\n  email_mode: EmailMode\n  ends_at: Date\n  event_mailing_list_domain: String\n  favicon: Upload\n  hidden: Boolean\n  language: String\n  location: Json\n  maximum_event_signups: ScheduledValueInput\n  maximum_tickets: Int\n  name: String\n  openGraphImage: Upload\n  rootPageId: ID\n  show_event_list: ShowSchedule\n  show_schedule: ShowSchedule\n  signup_mode: SignupMode\n  signup_requests_open: Boolean\n  site_mode: SiteMode\n  starts_at: Date\n  ticket_mode: TicketMode\n  ticket_name: String\n  timezone_mode: TimezoneMode\n  timezone_name: String\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"accepting_proposals-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"accepting_proposals")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"catchallstaffpositionid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"catchAllStaffPositionId")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"clickwrap_agreement-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"clickwrap_agreement")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"defaultlayoutid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"defaultLayoutId")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"domain-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"domain")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"email_from-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"email_from")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"email_mode-emailmode"},(0,i.kt)("inlineCode",{parentName:"h4"},"email_mode")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/email-mode"},(0,i.kt)("inlineCode",{parentName:"a"},"EmailMode")),")"),(0,i.kt)("h4",{id:"ends_at-date"},(0,i.kt)("inlineCode",{parentName:"h4"},"ends_at")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/date"},(0,i.kt)("inlineCode",{parentName:"a"},"Date")),")"),(0,i.kt)("h4",{id:"event_mailing_list_domain-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"event_mailing_list_domain")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"favicon-upload"},(0,i.kt)("inlineCode",{parentName:"h4"},"favicon")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/upload"},(0,i.kt)("inlineCode",{parentName:"a"},"Upload")),")"),(0,i.kt)("h4",{id:"hidden-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"hidden")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"language-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"language")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"location-json"},(0,i.kt)("inlineCode",{parentName:"h4"},"location")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/json"},(0,i.kt)("inlineCode",{parentName:"a"},"Json")),")"),(0,i.kt)("h4",{id:"maximum_event_signups-scheduledvalueinput"},(0,i.kt)("inlineCode",{parentName:"h4"},"maximum_event_signups")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/scheduled-value-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ScheduledValueInput")),")"),(0,i.kt)("h4",{id:"maximum_tickets-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"maximum_tickets")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"opengraphimage-upload"},(0,i.kt)("inlineCode",{parentName:"h4"},"openGraphImage")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/upload"},(0,i.kt)("inlineCode",{parentName:"a"},"Upload")),")"),(0,i.kt)("h4",{id:"rootpageid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"rootPageId")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"show_event_list-showschedule"},(0,i.kt)("inlineCode",{parentName:"h4"},"show_event_list")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/show-schedule"},(0,i.kt)("inlineCode",{parentName:"a"},"ShowSchedule")),")"),(0,i.kt)("h4",{id:"show_schedule-showschedule"},(0,i.kt)("inlineCode",{parentName:"h4"},"show_schedule")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/show-schedule"},(0,i.kt)("inlineCode",{parentName:"a"},"ShowSchedule")),")"),(0,i.kt)("h4",{id:"signup_mode-signupmode"},(0,i.kt)("inlineCode",{parentName:"h4"},"signup_mode")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/signup-mode"},(0,i.kt)("inlineCode",{parentName:"a"},"SignupMode")),")"),(0,i.kt)("h4",{id:"signup_requests_open-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"signup_requests_open")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"site_mode-sitemode"},(0,i.kt)("inlineCode",{parentName:"h4"},"site_mode")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/site-mode"},(0,i.kt)("inlineCode",{parentName:"a"},"SiteMode")),")"),(0,i.kt)("h4",{id:"starts_at-date"},(0,i.kt)("inlineCode",{parentName:"h4"},"starts_at")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/date"},(0,i.kt)("inlineCode",{parentName:"a"},"Date")),")"),(0,i.kt)("h4",{id:"ticket_mode-ticketmode"},(0,i.kt)("inlineCode",{parentName:"h4"},"ticket_mode")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/ticket-mode"},(0,i.kt)("inlineCode",{parentName:"a"},"TicketMode")),")"),(0,i.kt)("h4",{id:"ticket_name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"ticket_name")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"timezone_mode-timezonemode"},(0,i.kt)("inlineCode",{parentName:"h4"},"timezone_mode")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/timezone-mode"},(0,i.kt)("inlineCode",{parentName:"a"},"TimezoneMode")),")"),(0,i.kt)("h4",{id:"timezone_name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"timezone_name")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))}u.isMDXComponent=!0}}]);