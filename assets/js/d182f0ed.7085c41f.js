"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[75847],{75631:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var o=n(3289);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),p=i,m=h["".concat(l,".").concat(p)]||h[p]||d[p]||r;return n?o.createElement(m,a(a({ref:t},u),{},{components:n})):o.createElement(m,a({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8932:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(34489),i=(n(3289),n(75631));const r={title:"GraphQL Cross-Domain Security Issue Disclosure",tags:["security"],authors:["marleighnorton","nbudin","dkapell","jaelen"]},a=void 0,s={permalink:"/blog/2022/01/18/graphql-cross-domain-security-issue-disclosure",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/blog/blog/2022-01-18-graphql-cross-domain-security-issue-disclosure.md",source:"@site/blog/2022-01-18-graphql-cross-domain-security-issue-disclosure.md",title:"GraphQL Cross-Domain Security Issue Disclosure",description:"Hey all. This thing happened we should tell you about.",date:"2022-01-18T00:00:00.000Z",formattedDate:"January 18, 2022",tags:[{label:"security",permalink:"/blog/tags/security"}],readingTime:2.285,hasTruncateMarker:!0,authors:[{name:"Marleigh Norton",url:"https://github.com/marleighnorton",imageURL:"https://github.com/marleighnorton.png",key:"marleighnorton"},{name:"Nat Budin",url:"https://github.com/nbudin",imageURL:"https://github.com/nbudin.png",key:"nbudin"},{name:"Dave Kapell",url:"https://github.com/dkapell",imageURL:"https://github.com/dkapell.png",key:"dkapell"},{name:"Jae Hartwin",url:"https://github.com/jhartwin",imageURL:"https://github.com/jhartwin.png",key:"jaelen"}],frontMatter:{title:"GraphQL Cross-Domain Security Issue Disclosure",tags:["security"],authors:["marleighnorton","nbudin","dkapell","jaelen"]},nextItem:{title:"Email forwarding",permalink:"/blog/2020/03/15/email-forwarding"}},l={authorsImageUrls:[void 0,void 0,void 0,void 0]},c=[{value:"What Happened?",id:"what-happened",level:2},{value:"What Are We Doing About This?",id:"what-are-we-doing-about-this",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Hey all. This thing happened we should tell you about."),(0,i.kt)("p",null,"While performing platform upgrades, we found a bug in Intercode, the website code used by conventions such as Intercon. It has since been fixed."),(0,i.kt)("p",null,"This bug created an exploit where people with leadership access to one Intercode convention could use certain permissions on any convention. As a reminder, not even admins have access to your passwords or financial information."),(0,i.kt)("p",null,"Due to the technical complexity of accessing the exploit and the small number of people who had the permissions required to take advantage of this, we don\u2019t think it was used, but can\u2019t prove it."),(0,i.kt)("h2",{id:"what-happened"},"What Happened?"),(0,i.kt)("p",null,"It\u2019s technically possible con leadership from one convention looked at or modified information for conventions they should not have had access to. We don\u2019t think anyone did, and it\u2019s since been fixed, but here\u2019s the low down."),(0,i.kt)("p",null,"There\u2019s a function called \u201cBecome user\u201d which certain people on the convention team have permissions for. Just like it sounds, it lets people see the convention website as if they were logged in as the selected user. It\u2019s used for things like running the convention, debugging, and accessing the website on behalf of a user at their request. It does not allow access to anyone\u2019s passwords or payment information."),(0,i.kt)("p",null,"This permission is fairly restricted and convention specific. That being said, if you had Become user permissions on one convention using Intercode, it turns out there was a way to then Become user on any Intercode convention. It would involve coding and would not be easy, but it was possible. For example, someone with admin access to Intercon S could have accessed admin functions on Be-Con 2019, including viewing and modifying event and attendee data."),(0,i.kt)("h2",{id:"what-are-we-doing-about-this"},"What Are We Doing About This?"),(0,i.kt)("p",null,"The bug has been fixed and the exploit is gone. We\u2019ve also reviewed the list of people who have Become user permissions on any Intercode site. Considering the difficulty of finding the exploit, the technical expertise required to use it, and the limited set of people who have the necessary permissions, we think it\u2019s really unlikely anyone did so. That being said, we can\u2019t prove a negative."),(0,i.kt)("p",null,"A post-mortem was held to document the exploit, which you can find at: ",(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1Ov8jFIpExWn-elUBXtRd22BwoIQGSbWMFio_iTL9IRM/edit?usp=sharing"},"https://docs.google.com/document/d/1Ov8jFIpExWn-elUBXtRd22BwoIQGSbWMFio_iTL9IRM/edit?usp=sharing"),". It includes timelines and technical details for the interested."),(0,i.kt)("p",null,"And of course, we\u2019re now telling you about it. We take the safety and security of our community very seriously, which means owning up to our mistakes. We apologize this happened at all, and we're even more sorry it took us so long to notice it."),(0,i.kt)("p",null,"Thanks for your faith in us."),(0,i.kt)("p",null,"The Intercode Team",(0,i.kt)("br",null),"\nNat Budin (he/him)",(0,i.kt)("br",null),"\nDave Kapell (he/him)",(0,i.kt)("br",null),"\nJae Hartwin (they/them)",(0,i.kt)("br",null),"\nMarleigh Norton (she/her)"))}d.isMDXComponent=!0}}]);