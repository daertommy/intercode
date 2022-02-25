"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[59671],{75631:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(3289);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64914:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return u},toc:function(){return p},default:function(){return f}});var r=n(14002),o=n(89922),i=(n(3289),n(75631)),a=["components"],s={sidebar_position:1},c="Welcome to Intercode",l={unversionedId:"intro",id:"intro",title:"Welcome to Intercode",description:"Intercode is a web application for conventions, which:",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",next:{title:"Conventions",permalink:"/docs/concepts/conventions"}},u={},p=[{value:"Using Intercode via NEIL Hosting",id:"using-intercode-via-neil-hosting",level:2},{value:"Self-hosting Intercode",id:"self-hosting-intercode",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"welcome-to-intercode"},"Welcome to Intercode"),(0,i.kt)("p",null,"Intercode is a web application for conventions, which:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"serves as the public-facing web site for a convention"),(0,i.kt)("li",{parentName:"ul"},"automates signup and payment"),(0,i.kt)("li",{parentName:"ul"},"automates business processes for the convention staff")),(0,i.kt)("p",null,"The original Intercode was written in PHP by Barry Tannenbaum for Intercon New England, and has since been used by several other conventions around the world."),(0,i.kt)("p",null,"Intercode 2 is a ground-up rewrite of Intercode, making it more robust, more flexible, and more modern."),(0,i.kt)("h2",{id:"using-intercode-via-neil-hosting"},"Using Intercode via NEIL Hosting"),(0,i.kt)("p",null,"New England Interactive Literature, the non-profit organization that maintains Intercode, runs a hosting service for conventions called ",(0,i.kt)("a",{parentName:"p",href:"https://www.neilhosting.net"},"NEIL Hosting"),". NEIL Hosting aims to provide larp conventions with free or affordable hosting in support of NEIL's mission to promote larp in New England and beyond."),(0,i.kt)("p",null,"For pricing and other details, please see NEIL Hosting's ",(0,i.kt)("a",{parentName:"p",href:"https://www.neilhosting.net/pages/host-with-us"},"host with us page"),"."),(0,i.kt)("h2",{id:"self-hosting-intercode"},"Self-hosting Intercode"),(0,i.kt)("p",null,"Intercode is open source and can be self-hosted. To do this, we strongly recommend using a setup similar to the one NEIL Hosting uses, since that's the setup we test with ourselves and therefore the best-supported one. Specifically, NEIL Hosting uses:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://heroku.com"},"Heroku")," for backend servers"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://postgresql.org"},"PostgreSQL")," for a database (we use AWS RDS for this, but Heroku's PostgreSQL product will also work)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://aws.amazon.com/s3/"},"Amazon S3")," for file hosting"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://aws.amazon.com/ses/"},"Amazon Simple Email Service")," for sending and receiving email"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://aws.amazon.com/sqs/"},"Amazon Simple Queue Service")," for background job queues")),(0,i.kt)("p",null,"To try out running Intercode, you can clone ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/neinteractiveliterature/intercode"},"the source code from Github"),"."))}f.isMDXComponent=!0}}]);