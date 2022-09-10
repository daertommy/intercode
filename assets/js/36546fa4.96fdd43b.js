"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[5067],{75631:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(3289);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=s(n),h=i,m=u["".concat(d,".").concat(h)]||u[h]||p[h]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=u;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9665:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var r=n(50744),i=(n(3289),n(75631));const o={id:"user-con-profile-drop",title:"UserConProfileDrop"},l=void 0,a={unversionedId:"liquid/drops/user-con-profile-drop",id:"liquid/drops/user-con-profile-drop",title:"UserConProfileDrop",description:"A profile for a user attending a convention.  This is the main object used for all user-specific",source:"@site/docs/liquid/drops/user-con-profile-drop.mdx",sourceDirName:"liquid/drops",slug:"/liquid/drops/user-con-profile-drop",permalink:"/docs/liquid/drops/user-con-profile-drop",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/liquid/drops/user-con-profile-drop.mdx",tags:[],version:"current",frontMatter:{id:"user-con-profile-drop",title:"UserConProfileDrop"},sidebar:"sidebar",previous:{title:"TimespanWithValueDrop",permalink:"/docs/liquid/drops/timespan-with-value-drop"},next:{title:"UserDrop",permalink:"/docs/liquid/drops/user-drop"}},d={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>bio</code> (<code>String</code>)",id:"bio-string",level:4},{value:"<code>bio_name</code> (<code>String</code>)",id:"bio_name-string",level:4},{value:"<code>email</code> (<code>String</code>)",id:"email-string",level:4},{value:'<code>event_proposals</code> (<code>Array&lt;<a href="/docs/liquid/drops/event-proposal-drop">EventProposalDrop</a>&gt;</code>)',id:"event_proposals-arrayeventproposaldrop",level:4},{value:"<code>first_name</code> (<code>String</code>)",id:"first_name-string",level:4},{value:"<code>form_response</code> (<code>Hash</code>)",id:"form_response-hash",level:4},{value:"<code>gravatar_url</code> (<code>String</code>)",id:"gravatar_url-string",level:4},{value:"<code>ical_secret</code> (<code>String</code>)",id:"ical_secret-string",level:4},{value:"<code>id</code> (<code>Integer</code>)",id:"id-integer",level:4},{value:"<code>last_name</code> (<code>String</code>)",id:"last_name-string",level:4},{value:"<code>name</code> (<code>String</code>)",id:"name-string",level:4},{value:"<code>name_inverted</code> (<code>String</code>)",id:"name_inverted-string",level:4},{value:"<code>name_without_nickname</code> (<code>String</code>)",id:"name_without_nickname-string",level:4},{value:"<code>nickname</code> (<code>String</code>)",id:"nickname-string",level:4},{value:"<code>privileges</code> (<code>Array&lt;String&gt;</code>)",id:"privileges-arraystring",level:4},{value:"<code>schedule_calendar_url</code> (<code>String</code>)",id:"schedule_calendar_url-string",level:4},{value:'<code>signups</code> (<code>Array&lt;<a href="/docs/liquid/drops/signup-drop">SignupDrop</a>&gt;</code>)',id:"signups-arraysignupdrop",level:4},{value:'<code>staff_positions</code> (<code>Array&lt;<a href="/docs/liquid/drops/staff-position-drop">StaffPositionDrop</a>&gt;</code>)',id:"staff_positions-arraystaffpositiondrop",level:4},{value:'<code>team_member_events</code> (<code>Array&lt;<a href="/docs/liquid/drops/event-drop">EventDrop</a>&gt;</code>)',id:"team_member_events-arrayeventdrop",level:4},{value:'<code>ticket</code> (<code><a href="/docs/liquid/drops/ticket-drop">TicketDrop</a></code>)',id:"ticket-ticketdrop",level:4}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A profile for a user attending a convention.  This is the main object used for all user-specific\ndata in a convention, rather than User, which is just the sitewide account data shared between\nall conventions."),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"bio-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"bio")," (",(0,i.kt)("code",null,"String"),")"),(0,i.kt)("p",null,"The user's bio, as HTML"),(0,i.kt)("h4",{id:"bio_name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"bio_name")," (",(0,i.kt)("code",null,"String"),")"),(0,i.kt)("p",null,"The name used for the user's bio, which will either include a nickname or not\ndepending on their preference"),(0,i.kt)("h4",{id:"email-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"email")," (",(0,i.kt)("code",null,"String"),")"),(0,i.kt)("p",null,"The user's email address"),(0,i.kt)("h4",{id:"event_proposals-arrayeventproposaldrop"},(0,i.kt)("inlineCode",{parentName:"h4"},"event_proposals")," (",(0,i.kt)("code",null,"Array","<",(0,i.kt)("a",{href:"/docs/liquid/drops/event-proposal-drop"},"EventProposalDrop"),">"),")"),(0,i.kt)("p",null,"All the event proposals this user submitted for this convention"),(0,i.kt)("h4",{id:"first_name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"first_name")," (",(0,i.kt)("code",null,"String"),")"),(0,i.kt)("p",null,"The user's first name"),(0,i.kt)("h4",{id:"form_response-hash"},(0,i.kt)("inlineCode",{parentName:"h4"},"form_response")," (",(0,i.kt)("code",null,"Hash"),")"),(0,i.kt)("p",null,'The user\'s response to the profile form set up by this convention.  This includes\nthe fields that the user themselves can see; admin-only fields will be replaced\nwith a "this is hidden" message.'),(0,i.kt)("h4",{id:"gravatar_url-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"gravatar_url")," (",(0,i.kt)("code",null,"String"),")"),(0,i.kt)("p",null,"The URL of the user's Gravatar"),(0,i.kt)("h4",{id:"ical_secret-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"ical_secret")," (",(0,i.kt)("code",null,"String"),")"),(0,i.kt)("p",null,"The user's iCal secret for this convention (used in the\n{% add_to_calendar_dropdown %} tag)"),(0,i.kt)("h4",{id:"id-integer"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("code",null,"Integer"),")"),(0,i.kt)("p",null,"The numeric database ID of the user profile"),(0,i.kt)("h4",{id:"last_name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"last_name")," (",(0,i.kt)("code",null,"String"),")"),(0,i.kt)("p",null,"The user's last name"),(0,i.kt)("h4",{id:"name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,i.kt)("code",null,"String"),")"),(0,i.kt)("p",null,"The user's name, including nickname if present"),(0,i.kt)("h4",{id:"name_inverted-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name_inverted")," (",(0,i.kt)("code",null,"String"),")"),(0,i.kt)("p",null,'The user\'s name in "Last, First" format'),(0,i.kt)("h4",{id:"name_without_nickname-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name_without_nickname")," (",(0,i.kt)("code",null,"String"),")"),(0,i.kt)("p",null,"The user's name, not including nickname"),(0,i.kt)("h4",{id:"nickname-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"nickname")," (",(0,i.kt)("code",null,"String"),")"),(0,i.kt)("p",null,"The nickname the user entered on their profile"),(0,i.kt)("h4",{id:"privileges-arraystring"},(0,i.kt)("inlineCode",{parentName:"h4"},"privileges")," (",(0,i.kt)("code",null,"Array","<","String",">"),")"),(0,i.kt)("p",null,"The user's privileges for this convention"),(0,i.kt)("h4",{id:"schedule_calendar_url-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"schedule_calendar_url")," (",(0,i.kt)("code",null,"String"),")"),(0,i.kt)("p",null,"A webcal:// URL for the user's personal schedule for this convention.  This URL\nis considered secret and should only be given to that user."),(0,i.kt)("h4",{id:"signups-arraysignupdrop"},(0,i.kt)("inlineCode",{parentName:"h4"},"signups")," (",(0,i.kt)("code",null,"Array","<",(0,i.kt)("a",{href:"/docs/liquid/drops/signup-drop"},"SignupDrop"),">"),")"),(0,i.kt)("p",null,"All the user's signups, excluding withdrawn events"),(0,i.kt)("h4",{id:"staff_positions-arraystaffpositiondrop"},(0,i.kt)("inlineCode",{parentName:"h4"},"staff_positions")," (",(0,i.kt)("code",null,"Array","<",(0,i.kt)("a",{href:"/docs/liquid/drops/staff-position-drop"},"StaffPositionDrop"),">"),")"),(0,i.kt)("p",null,"All the staff positions this user holds at this convention"),(0,i.kt)("h4",{id:"team_member_events-arrayeventdrop"},(0,i.kt)("inlineCode",{parentName:"h4"},"team_member_events")," (",(0,i.kt)("code",null,"Array","<",(0,i.kt)("a",{href:"/docs/liquid/drops/event-drop"},"EventDrop"),">"),")"),(0,i.kt)("p",null,"All the active events at this convention for which this user is a\nteam member"),(0,i.kt)("h4",{id:"ticket-ticketdrop"},(0,i.kt)("inlineCode",{parentName:"h4"},"ticket")," (",(0,i.kt)("code",null,(0,i.kt)("a",{href:"/docs/liquid/drops/ticket-drop"},"TicketDrop")),")"),(0,i.kt)("p",null,"The user's convention ticket, if present"))}p.isMDXComponent=!0}}]);