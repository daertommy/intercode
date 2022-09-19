"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[27710],{75631:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(3289);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),d=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),v=d(n),u=o,k=v["".concat(a,".").concat(u)]||v[u]||p[u]||i;return n?r.createElement(k,c(c({ref:t},s),{},{components:n})):r.createElement(k,c({ref:t},s))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=v;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var d=2;d<i;d++)c[d]=n[d];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},92168:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>p,SpecifiedBy:()=>v,assets:()=>d,contentTitle:()=>l,default:()=>b,frontMatter:()=>c,metadata:()=>a,toc:()=>s});var r=n(34489),o=n(3289),i=n(75631);const c={id:"event-provided-ticket-list",title:"EventProvidedTicketList",hide_table_of_contents:!1},l=void 0,a={unversionedId:"graphql/objects/event-provided-ticket-list",id:"graphql/objects/event-provided-ticket-list",title:"EventProvidedTicketList",description:"No description",source:"@site/docs/graphql/objects/event-provided-ticket-list.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/event-provided-ticket-list",permalink:"/docs/graphql/objects/event-provided-ticket-list",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/event-provided-ticket-list.mdx",tags:[],version:"current",frontMatter:{id:"event-provided-ticket-list",title:"EventProvidedTicketList",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"EventProposalsPagination",permalink:"/docs/graphql/objects/event-proposals-pagination"},next:{title:"EventWithChoiceCounts",permalink:"/docs/graphql/objects/event-with-choice-counts"}},d={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>EventProvidedTicketList.<b>provided_by_event</b></code><Bullet /><code>Event!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-eventprovidedticketlistbprovided_by_eventbcodeevent--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>EventProvidedTicketList.<b>tickets</b></code><Bullet /><code>[Ticket!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-eventprovidedticketlistbticketsbcodeticket--",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),v=e=>(0,i.kt)(o.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{class:"badge badge--"+e.class},e.text)),k={toc:s,Bullet:p,SpecifiedBy:v,Badge:u};function b(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type EventProvidedTicketList {\n  provided_by_event: Event!\n  tickets: [Ticket!]!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-eventprovidedticketlistbprovided_by_eventbcodeevent--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"EventProvidedTicketList.",(0,i.kt)("b",null,"provided_by_event"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/event"},(0,i.kt)("inlineCode",{parentName:"a"},"Event!"))," ",(0,i.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-eventprovidedticketlistbticketsbcodeticket--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"EventProvidedTicketList.",(0,i.kt)("b",null,"tickets"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/ticket"},(0,i.kt)("inlineCode",{parentName:"a"},"[Ticket!]!"))," ",(0,i.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/graphql/objects/convention-reports"},(0,i.kt)("inlineCode",{parentName:"a"},"ConventionReports")),"  ",(0,i.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);