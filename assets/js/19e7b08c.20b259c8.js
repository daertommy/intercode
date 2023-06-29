"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[67450],{75631:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(45721);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||s;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79035:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(91487),o=(n(45721),n(75631));const s={sidebar_position:1},a="Users and profiles",i={unversionedId:"concepts/users-and-profiles",id:"concepts/users-and-profiles",title:"Users and profiles",description:"In Intercode, user accounts are shared across multiple convention sites. This is so that users don't have to remember",source:"@site/docs/concepts/users-and-profiles.md",sourceDirName:"concepts",slug:"/concepts/users-and-profiles",permalink:"/docs/concepts/users-and-profiles",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/concepts/users-and-profiles.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Conventions",permalink:"/docs/concepts/conventions"},next:{title:"Content management",permalink:"/docs/concepts/content-management"}},c={},l=[],p={toc:l},u="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"users-and-profiles"},"Users and profiles"),(0,o.kt)("p",null,"In Intercode, user accounts are shared across multiple convention sites. This is so that users don't have to remember\na separate password for each convention they attend. It also allows some useful cross-site functionality, such as\nallowing users to quickly re-propose an event that they've proposed at other conventions."),(0,o.kt)("p",null,"However, conventions typically want to collect some specific information about attendees, and that information shouldn't\nbe shared with other conventions by default. Therefore, Intercode has a separate concept of the \"user con profile,\" a\nconvention-specific record that contains the user's information for that particular convention."),(0,o.kt)("p",null,"As a result, the user account itself ends up being fairly minimal. It contains only:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The user's name"),(0,o.kt)("li",{parentName:"ul"},"The user's email address"),(0,o.kt)("li",{parentName:"ul"},"A hashed password"),(0,o.kt)("li",{parentName:"ul"},"A flag for whether or not the user is a global (cross-site) administrator"),(0,o.kt)("li",{parentName:"ul"},"Some record-keeping information about logins, password resets, etc.")),(0,o.kt)("p",null,"The user con profile typically contains a great deal more:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A copy of the user's name (separately editable by the user, and used everywhere on the con site)"),(0,o.kt)("li",{parentName:"ul"},"The user's nickname (note: this feature might be phased out in the future)"),(0,o.kt)("li",{parentName:"ul"},"Records of their ticket for the convention, if applicable"),(0,o.kt)("li",{parentName:"ul"},"Orders from the convention's online store, if applicable"),(0,o.kt)("li",{parentName:"ul"},"Event signups"),(0,o.kt)("li",{parentName:"ul"},"Event team memberships"),(0,o.kt)("li",{parentName:"ul"},"Convention staff positions"),(0,o.kt)("li",{parentName:"ul"},"Any other information the convention has decided to collect via its profile form (",(0,o.kt)("a",{parentName:"li",href:"/docs/concepts/forms"},"see Forms for more details on how this works"),")")))}f.isMDXComponent=!0}}]);