"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[76311],{75631:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(3289);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=c(n),m=s,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?o.createElement(f,r(r({ref:t},d),{},{components:n})):o.createElement(f,r({ref:t},d))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,r=new Array(i);r[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:s,r[1]=a;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},60984:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return d},toc:function(){return u},default:function(){return m}});var o=n(14002),s=n(89922),i=(n(3289),n(75631)),r=["components"],a={sidebar_position:0},l="Conventions",c={unversionedId:"concepts/conventions",id:"concepts/conventions",title:"Conventions",description:"Intercode was first designed to manage web sites for conventions. In Intercode 1, a separate",source:"@site/docs/concepts/conventions.md",sourceDirName:"concepts",slug:"/concepts/conventions",permalink:"/docs/concepts/conventions",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/concepts/conventions.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"sidebar",previous:{title:"Welcome to Intercode",permalink:"/docs/intro"},next:{title:"Users and profiles",permalink:"/docs/concepts/users-and-profiles"}},d={},u=[{value:"Convention modes",id:"convention-modes",level:2},{value:"Site modes",id:"site-modes",level:3},{value:"Signup modes",id:"signup-modes",level:3},{value:"Ticket modes",id:"ticket-modes",level:3},{value:"Email modes",id:"email-modes",level:3},{value:"Time zone mode",id:"time-zone-mode",level:3}],p={toc:u};function m(e){var t=e.components,n=(0,s.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"conventions"},"Conventions"),(0,i.kt)("p",null,"Intercode was first designed to manage web sites for conventions. In Intercode 1, a separate\ninstance of the Intercode application would be set up for each convention."),(0,i.kt)("p",null,"Intercode 2 is a multi-tenant application, designed to host multiple sites from a single application\ninstance. Because different conventions have vastly different needs, most of Intercode 2's\nconfigurability and customization options are attached to conventions in the database. A convention\nin Intercode includes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a unique domain name or subdomain"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/concepts/content-management"},"CMS content such as pages, layouts, and partials")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/concepts/events-and-runs"},"events, runs, and event proposals")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/concepts/permissions"},"staff positions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/concepts/users-and-profiles"},"user convention profiles")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/concepts/store"},"tickets and products")),(0,i.kt)("li",{parentName:"ul"},"...and a lot more stuff")),(0,i.kt)("h2",{id:"convention-modes"},"Convention modes"),(0,i.kt)("p",null,"There are a few overall configuration settings on conventions that affect the behavior\nof their web site. These are ",(0,i.kt)("strong",{parentName:"p"},"site mode"),", ",(0,i.kt)("strong",{parentName:"p"},"signup mode"),", ",(0,i.kt)("strong",{parentName:"p"},"ticket mode"),", ",(0,i.kt)("strong",{parentName:"p"},"email mode"),", and\n",(0,i.kt)("strong",{parentName:"p"},"time zone mode"),"."),(0,i.kt)("h3",{id:"site-modes"},"Site modes"),(0,i.kt)("p",null,"There are currently three site modes: convention mode, single-event mode, and event series mode.\nConvention mode is the original behavior of Intercode, and provides the fullest set of\nfunctionality, including events that can run multiple times throughout the con, a schedule grid,\nticket sales, and more."),(0,i.kt)("p",null,'Single-event mode is intended for simpler sites that represent just a single event (the fact that\nIntercode thinks of these, confusingly, as "conventions" is an unfortunate historical artifact).\nThis mode disables most of the user interface around events and scheduling, and enforces a single\nevent with a single run. Currently, ticket sales are not available in single-event mode (so\nsingle-event "conventions" must be free for attendees), but there are plans to enable them through\nfuture UX design work and development.'),(0,i.kt)("p",null,"Event series mode is intended for sites that represent a set of connected events run under the same\numbrella, but taking place on different, non-consecutive dates and possibly in separate locations.\nEvent series mode operates similarly to convention mode, but disables some parts of the user\ninterface that are cumbersome or unworkable under these conditions, such as the grid view of the\nschedule. Event series sites, like single-event sites, cannot yet sell tickets, but this is also\nplanned."),(0,i.kt)("h3",{id:"signup-modes"},"Signup modes"),(0,i.kt)("p",null,"There are currently two signup modes: self-service and moderated. Almost all conventions using\nIntercode use self-service signups, but some, such as ",(0,i.kt)("a",{parentName:"p",href:"https://beconlarp.com"},"Be-Con"),", use moderated\nsignups."),(0,i.kt)("p",null,"Self-service signups allow attendees to sign up for events via the web site. When signups are\navailable, users can go to event pages on the site and click to sign up. If a spot is available,\nthe user will be instantly confirmed as an attendee. If not, they will be placed on the waitlist.\nFor more details about this process, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts/signups"},"the signups section"),'. In\nself-service signup mode, convention staff cannot directly manipulate the signups on events\n(although if absolutely necessary, they can use the "become user" feature to do so).'),(0,i.kt)("p",null,"Moderated signups present a similar experience to attendees, but rather than clicking to sign up\nfor an event, users can click to ",(0,i.kt)("em",{parentName:"p"},"request")," to sign up for an event. This request goes into a queue\nvisible to convention staff, from which they can accept or reject requests. Accepting a request\nwill sign the user up for the event, waitlisting them if necessary, just as in self-service signups.\nModerated signups also provide a direct user interface for con staff to sign users up for events\nwithout them having to submit a request. (This is useful for cases such as Be-Con's, where the\ninitial round of requests goes through a separate online survey that collects ranked choices.)"),(0,i.kt)("h3",{id:"ticket-modes"},"Ticket modes"),(0,i.kt)("p",null,"There are currently two ticket modes: tickets disabled and tickets required for signup."),(0,i.kt)("p",null,"If tickets are disabled, attending the convention is free. Anyone can sign up for events at the\nconvention just by logging in with their Intercode account, and doing so will effectively sign them\nup for the convention."),(0,i.kt)("p",null,"If tickets are required for signup, attendees must purchase (or receive) a ticket before they are\nallowed to sign up for events. A single ticket covers all event signups for that attendee; there\nis no additional charge for further event registrations."),(0,i.kt)("p",null,"In the future, there are potential plans to build more ticket modes, such as one that would allow\nconventions to sell per-event tickets."),(0,i.kt)("h3",{id:"email-modes"},"Email modes"),(0,i.kt)("p",null,"There are currently two email modes: forwarding and catch-all. These modes only have an effect if\nthe convention has set up their domain to have Intercode process its incoming emails."),(0,i.kt)("p",null,"In forwarding mode, staff positions can have email aliases and forwarding addresses. These aliases\nwill automatically forward received email to everyone with that staff position, plus (optionally)\na CC list of additional addresses."),(0,i.kt)("p",null,"In catch-all mode, all received emails will be forwarded to a catch-all address. This is primarily\nintended for conventions that are already over and for which their staff no longer wants to receive\nemail."),(0,i.kt)("h3",{id:"time-zone-mode"},"Time zone mode"),(0,i.kt)("p",null,"There are currently two time zone modes: convention time zone and user-local time zone."),(0,i.kt)("p",null,"In convention time zone mode, the convention chooses a time zone in which it takes place. All\ndates and times of events on the web site are expressed in that zone. This is primarily intended\nfor conventions taking place at a specific location."),(0,i.kt)("p",null,"In user-local time zone mode, the web site will automatically detect the time zone the user's\ncomputer or device is set to and express all times and dates in that zone. This is primarily\nintended for virtual conventions."))}m.isMDXComponent=!0}}]);