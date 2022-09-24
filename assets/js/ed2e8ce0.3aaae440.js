"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[60086],{75631:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(45721);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99970:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>u,SpecifiedBy:()=>d,assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(34489),o=n(45721),a=n(75631);const i={id:"transition-event-proposal",title:"transitionEventProposal",hide_table_of_contents:!1},l=void 0,s={unversionedId:"graphql/mutations/transition-event-proposal",id:"graphql/mutations/transition-event-proposal",title:"transitionEventProposal",description:"No description",source:"@site/docs/graphql/mutations/transition-event-proposal.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/transition-event-proposal",permalink:"/docs/graphql/mutations/transition-event-proposal",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/mutations/transition-event-proposal.mdx",tags:[],version:"current",frontMatter:{id:"transition-event-proposal",title:"transitionEventProposal",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"submitOrder",permalink:"/docs/graphql/mutations/submit-order"},next:{title:"updateCmsContentGroup",permalink:"/docs/graphql/mutations/update-cms-content-group"}},p={},c=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>transitionEventProposal.<b>input</b></code><Bullet /><code>TransitionEventProposalInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-transitioneventproposalbinputbcodetransitioneventproposalinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>TransitionEventProposalPayload</code> <Badge class="secondary" text="object"/>',id:"transitioneventproposalpayload-",level:4}],u=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:c,Bullet:u,SpecifiedBy:d,Badge:m};function y(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"transitionEventProposal(\n  input: TransitionEventProposalInput!\n): TransitionEventProposalPayload!\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-transitioneventproposalbinputbcodetransitioneventproposalinput--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"transitionEventProposal.",(0,a.kt)("b",null,"input"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/transition-event-proposal-input"},(0,a.kt)("inlineCode",{parentName:"a"},"TransitionEventProposalInput!"))," ",(0,a.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Parameters for TransitionEventProposal")),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"transitioneventproposalpayload-"},(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/transition-event-proposal-payload"},(0,a.kt)("inlineCode",{parentName:"a"},"TransitionEventProposalPayload"))," ",(0,a.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Autogenerated return type of TransitionEventProposal")))}y.isMDXComponent=!0}}]);