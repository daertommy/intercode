"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[28233],{75631:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(3289);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62562:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(88078),o=n(65844),i=(n(3289),n(75631)),l=["components"],r={sidebar_position:2},s="Content management",c={unversionedId:"concepts/content-management",id:"concepts/content-management",isDocsHomePage:!1,title:"Content management",description:"Intercode comes with a built-in content management system. This CMS allows convention runners to build extremely",source:"@site/docs/concepts/content-management.md",sourceDirName:"concepts",slug:"/concepts/content-management",permalink:"/docs/concepts/content-management",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/concepts/content-management.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar",previous:{title:"Users and profiles",permalink:"/docs/concepts/users-and-profiles"},next:{title:"Events and runs",permalink:"/docs/concepts/events-and-runs"}},p=[{value:"Pages",id:"pages",children:[],level:2},{value:"Partials",id:"partials",children:[],level:2},{value:"Layouts",id:"layouts",children:[],level:2},{value:"Files",id:"files",children:[],level:2},{value:"Navigation",id:"navigation",children:[],level:2},{value:"Variables",id:"variables",children:[],level:2},{value:"Content groups",id:"content-groups",children:[],level:2},{value:"GraphQL queries",id:"graphql-queries",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"content-management"},"Content management"),(0,i.kt)("p",null,"Intercode comes with a built-in content management system. This CMS allows convention runners to build extremely\ncustomizable web sites for their cons, including layouts, dynamic page content, and interactive elements. It also\nallows reuse of content across multiple pages as well as partial permissioning, so that staff members can be allowed\nto edit certain pages related to their areas of responsibility without having to have full permissions to update\neverything on the web site."),(0,i.kt)("p",null,"Intercode's CMS is built on ",(0,i.kt)("a",{parentName:"p",href:"https://shopify.github.io/liquid/"},"Liquid"),", a template language created by Shopify. Liquid\nhas built-in features for manipulating text, rendering content conditionally, looping, and much more. Intercode extends\nthe Liquid language with several custom tags and filters, and exposes a great deal of its data to CMS templates so that\nconvention web sites can intelligently adapt their content for the user viewing them."),(0,i.kt)("h2",{id:"pages"},"Pages"),(0,i.kt)("p",null,"A page is pretty much what it sounds like: a single page's worth of content. Each page has its own URL path, beginning\nwith ",(0,i.kt)("inlineCode",{parentName:"p"},"/pages/")," (for example, a convention might have ",(0,i.kt)("inlineCode",{parentName:"p"},"/pages/about-us"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"/pages/info/hotel"),", and\n",(0,i.kt)("inlineCode",{parentName:"p"},"/pages/info/transportation"),")."),(0,i.kt)("p",null,"Pages are written in Liquid markup and rendered to HTML. In CMS pages (unlike the Markdown content on events), no\nHTML filtering is applied, and any valid HTML markup is allowed. CMS content can therefore include JavaScript, CSS,\nfonts, embedded videos, and anything else you can express in a web page."),(0,i.kt)("p",null,"Here's an example of a very simple page:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<h1>About us</h1>\n\n<p>{{ convention.name }} is a community convention put on by a crew of volunteers!</p>\n")),(0,i.kt)("p",null,"Because Intercode exposes the ",(0,i.kt)("inlineCode",{parentName:"p"},"convention")," object, the CMS will automatically put the name of the convention in place of\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"{{ convention.name }}")," Liquid snippet."),(0,i.kt)("h2",{id:"partials"},"Partials"),(0,i.kt)("p",null,"A partial is an embeddable block of content that can be used in pages or layouts. For example, if the convention had\na partial called ",(0,i.kt)("inlineCode",{parentName:"p"},"copyright")," with the following content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Partial: copyright"',title:'"Partial:','copyright"':!0},"<p>Copyright &copy; 2021 {{ convention.name }}</p>\n")),(0,i.kt)("p",null,"Pages on the site could include that partial like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Page"',title:'"Page"'},'<div>Some content</div>\n\n{% include "copyright" %}\n')),(0,i.kt)("p",null,"The copyright notice would then appear in place of the ",(0,i.kt)("inlineCode",{parentName:"p"},'{% include "copyright" %}')," Liquid tag."),(0,i.kt)("h2",{id:"layouts"},"Layouts"),(0,i.kt)("p",null,"A layout is the content that surrounds all pages of the site. Layouts can be used to do custom site-wide styling,\ninclude custom content on each page, modify the location of the navigation bar, and more."),(0,i.kt)("p",null,"There are a few special variables that are available to layouts. Layouts should always include all of them:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"content_for_head")," contains tags that load the Bootstrap CSS framework as well as Intercode's global JavaScript and\nstyles. It should be placed somewhere in the ",(0,i.kt)("inlineCode",{parentName:"li"},"<head>")," tag of the page."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"content_for_navbar")," contains the navigation bar for the site. It should be placed somewhere inside the ",(0,i.kt)("inlineCode",{parentName:"li"},"<body>")," tag\nof the page."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"content_for_layout")," contains the actual content of the page being rendered. It should be placed somewhere inside the\n",(0,i.kt)("inlineCode",{parentName:"li"},"<body>")," tag as well.")),(0,i.kt)("p",null,"A minimal example of a layout might be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    {{ content_for_head }}\n  </head>\n  <body>\n    <div class="container">{{ content_for_navbar }}</div>\n    <div class="container py-4">{{ content_for_layout }}</div>\n  </body>\n</html>\n')),(0,i.kt)("p",null,"If you wanted to make the background blue and the content area white, you might add some inline styling in the ",(0,i.kt)("inlineCode",{parentName:"p"},"<head>")," tag and use a Bootstrap background color class in the ",(0,i.kt)("inlineCode",{parentName:"p"},"<body>"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    {{ content_for_head }}\n    <style type="text/css">\n      body {\n        background: aliceblue;\n      }\n    </style>\n  </head>\n  <body>\n    <div class="container">{{ content_for_navbar }}</div>\n    <div class="container py-4 bg-white">{{ content_for_layout }}</div>\n  </body>\n</html>\n')),(0,i.kt)("h2",{id:"files"},"Files"),(0,i.kt)("p",null,"You can upload files to the CMS. The most common uses of this are to embed images on pages and to provide downloadable\ndocuments, but there are many other uses for uploaded files."),(0,i.kt)("p",null,"Pages can include uploaded files by name using the ",(0,i.kt)("inlineCode",{parentName:"p"},"{% file_url %}")," Liquid tag:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<img src="{% file_url picture-of-nat.jpg %}" alt="A picture of Nat" />\n')),(0,i.kt)("p",null,"Similarly, if you wanted to link to an uploaded file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<a href="{% file_url convention-poster.pdf %}">Click here to download our poster!</a>\n')),(0,i.kt)("h2",{id:"navigation"},"Navigation"),(0,i.kt)("p",null,"Using the Navigation tab of the CMS, you can add custom items and dropdown menus to the site navigation bar. A\nwell-organized and comprehensive navigation bar is essential for making all the info about a convention available to\nattendees."),(0,i.kt)("p",null,"Navigation bars can contain sections and links. A link is pretty much what it sounds like: a link to a CMS page. By\ndefault, the text of the link is the title of the page, but this can be customized. A section is a dropdown menu on\nthe navigation bar. Sections can contain links, but not other sections (in other words, the navigation hierarchy only\ngoes one level deep)."),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("p",null,"Conventions can define custom Liquid variables using the Variables tab of the CMS. A variable defined in this way is\nusable by all pages, layouts, and partials in the convention. Variables are defined using JSON syntax."),(0,i.kt)("p",null,"For example, if a convention defines a variable called ",(0,i.kt)("inlineCode",{parentName:"p"},"hotel_room_block_code")," with the value ",(0,i.kt)("inlineCode",{parentName:"p"},'"MYCON"'),", a page might\ninclude it like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<p>When calling the hotel, mention room block code: <strong>{{ hotel_room_block_code }}</strong>.</p>\n")),(0,i.kt)("p",null,"This can be very useful particularly for conventions that reoccur, because they can copy the CMS content and only change\nthe variables to update the site for the following year."),(0,i.kt)("h2",{id:"content-groups"},"Content groups"),(0,i.kt)("p",null,"A content group is a set of CMS content (pages, layouts, and partials). Content groups can be separately permissioned\nso that staff members can have permission to edit just a few pages relevant to their area of responsibility."),(0,i.kt)("p",null,"For example, if a convention has a game design contest, you might want to give the Game Design Contest Coordinator\nthe ability to update the contest page as well as the page containing the contest rules and prizes. You could use a\ncontent group containing just those pages, and grant update permission on it to the Game Design Contest Coordinator\nstaff position. Then, anyone with that staff position would be able to edit those pages."),(0,i.kt)("p",null,"Anyone who can edit CMS content also gets the ability to view the source code of all CMS content on that convention's\nsite. This can be helpful if they want to copy Liquid markup or widgets from other pages."),(0,i.kt)("h2",{id:"graphql-queries"},"GraphQL queries"),(0,i.kt)("p",null,"Intercode exposes much of its data via Liquid variables, but sometimes you need to access something that's not available\nthat way. For situations like that, Intercode allows creating custom GraphQL queries that can be run from inside CMS\ncontent."),(0,i.kt)("p",null,"As a very simple example (so simple that you would never want to actually do this with a GraphQL query), here's a query\nthat retrieves the name of the convention:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"query getConventionName {\n  convention: conventionByRequestHost {\n    name\n  }\n}\n")),(0,i.kt)("p",null,"You could then use it from a CMS page like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"{% assign_graphql_result convention_name_result=getConventionName() %}\n\n<p>The name of this convention is {{ convention_name_result.convention.name }}.</p>\n")))}d.isMDXComponent=!0}}]);