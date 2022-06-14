"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[27918],{55281:function(e,t,a){a.r(t),a.d(t,{default:function(){return ie}});var n=a(3289),r=a(52238),l=a(31619),i=a(49094),s=a(71119),o=a(75731),c=a(8207),d=a(70909);function m(e){var t=e.previous,a=e.next;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&n.createElement(d.Z,(0,o.Z)({},t,{subLabel:n.createElement(c.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&n.createElement(d.Z,(0,o.Z)({},a,{subLabel:n.createElement(c.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}var u=a(7021),v=a(53361),f=a(76821),b=a(38596),p=a(6105);var h={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(c.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(c.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function E(e){var t=h[e.versionMetadata.banner];return n.createElement(t,e)}function g(e){var t=e.versionLabel,a=e.to,r=e.onClick;return n.createElement(c.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(v.Z,{to:a,onClick:r},n.createElement(c.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function L(e){var t,a=e.className,l=e.versionMetadata,i=(0,u.Z)().siteConfig.title,o=(0,f.gA)({failfast:!0}).pluginId,c=(0,b.J)(o).savePreferredVersionName,d=(0,f.Jo)(o),m=d.latestDocSuggestion,v=d.latestVersionSuggestion,p=null!=m?m:(t=v).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,r.Z)(a,s.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(E,{siteTitle:i,versionMetadata:l})),n.createElement("div",{className:"margin-top--md"},n.createElement(g,{versionLabel:v.label,to:p.path,onClick:function(){return c(v.name)}})))}function N(e){var t=e.className,a=(0,p.E)();return a.banner?n.createElement(L,{className:t,versionMetadata:a}):null}function Z(e){var t=e.className,a=(0,p.E)();return a.badge?n.createElement("span",{className:(0,r.Z)(t,s.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(c.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}function k(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(c.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function C(e){var t=e.lastUpdatedBy;return n.createElement(c.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function _(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return n.createElement("span",{className:s.k.common.lastUpdated},n.createElement(c.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(k,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:r?n.createElement(C,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var H=a(28833),x=a(56583),U="lastUpdated_T8Ig";function T(e){return n.createElement("div",{className:(0,r.Z)(s.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(x.Z,e)))}function y(e){var t=e.editUrl,a=e.lastUpdatedAt,l=e.lastUpdatedBy,i=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,r.Z)(s.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(H.Z,{editUrl:t})),n.createElement("div",{className:(0,r.Z)("col",U)},(a||l)&&n.createElement(_,{lastUpdatedAt:a,formattedLastUpdatedAt:i,lastUpdatedBy:l})))}function A(e){var t=e.content.metadata,a=t.editUrl,l=t.lastUpdatedAt,i=t.formattedLastUpdatedAt,o=t.lastUpdatedBy,c=t.tags,d=c.length>0,m=!!(a||l||o);return d||m?n.createElement("footer",{className:(0,r.Z)(s.k.docs.docFooter,"docusaurus-mt-lg")},d&&n.createElement(T,{tags:c}),m&&n.createElement(y,{editUrl:a,lastUpdatedAt:l,lastUpdatedBy:o,formattedLastUpdatedAt:i})):null}var w=a(78500),I=a(34738),M=a(75282),B=a(42706),O="tocCollapsibleButton_hT49",S="tocCollapsibleButtonExpanded_IjoV",V=["collapsed"];function R(e){var t=e.collapsed,a=(0,B.Z)(e,V);return n.createElement("button",(0,o.Z)({type:"button"},a,{className:(0,r.Z)("clean-btn",O,!t&&S,a.className)}),n.createElement(c.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}var D="tocCollapsible_MKLB",P="tocCollapsibleContent_nv2_",z="tocCollapsibleExpanded_YUpm";function F(e){var t=e.toc,a=e.className,l=e.minHeadingLevel,i=e.maxHeadingLevel,s=(0,I.u)({initialState:!0}),o=s.collapsed,c=s.toggleCollapsed;return n.createElement("div",{className:(0,r.Z)(D,!o&&z,a)},n.createElement(R,{collapsed:o,onClick:c}),n.createElement(I.z,{lazy:!0,className:P,collapsed:o},n.createElement(M.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:i})))}var j=a(43186),q=a(72107),G=a(87986),J=a(28714);function K(e){return n.createElement("svg",(0,o.Z)({viewBox:"0 0 24 24"},e),n.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}var Y={breadcrumbsContainer:"breadcrumbsContainer_GYIM",breadcrumbHomeIcon:"breadcrumbHomeIcon_iW0p"};function W(e){var t=e.children,a=e.href,r="breadcrumbs__link";return e.isLast?n.createElement("span",{className:r,itemProp:"name"},t):a?n.createElement(v.Z,{className:r,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:r},t)}function Q(e){var t=e.children,a=e.active,l=e.index,i=e.addMicrodata;return n.createElement("li",(0,o.Z)({},i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,n.createElement("meta",{itemProp:"position",content:String(l+1)}))}function X(){var e=(0,J.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(v.Z,{"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,r.Z)("breadcrumbs__link",Y.breadcrumbsItemLink),href:e},n.createElement(K,{className:Y.breadcrumbHomeIcon})))}function $(){var e=(0,q.s1)(),t=(0,G.Ns)();return e?n.createElement("nav",{className:(0,r.Z)(s.k.docs.docBreadcrumbs,Y.breadcrumbsContainer),"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(X,null),e.map((function(t,a){var r=a===e.length-1;return n.createElement(Q,{key:a,active:r,index:a,addMicrodata:!!t.href},n.createElement(W,{href:t.href,isLast:r},t.label))})))):null}var ee=a(90983),te="docItemContainer_G6Ke",ae="docItemCol_wySw",ne="tocMobile_dRep";function re(e){var t,a=e.content,r=a.metadata,i=a.frontMatter,s=a.assets,o=i.keywords,c=r.description,d=r.title,m=null!=(t=s.image)?t:i.image;return n.createElement(l.d,{title:d,description:c,keywords:o,image:m})}function le(e){var t=e.content,a=t.metadata,l=t.frontMatter,o=l.hide_title,c=l.hide_table_of_contents,d=l.toc_min_heading_level,u=l.toc_max_heading_level,v=a.title,f=!o&&void 0===t.contentTitle,b=(0,i.i)(),p=!c&&t.toc&&t.toc.length>0,h=p&&("desktop"===b||"ssr"===b);return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,r.Z)("col",!c&&ae)},n.createElement(N,null),n.createElement("div",{className:te},n.createElement("article",null,n.createElement($,null),n.createElement(Z,null),p&&n.createElement(F,{toc:t.toc,minHeadingLevel:d,maxHeadingLevel:u,className:(0,r.Z)(s.k.docs.docTocMobile,ne)}),n.createElement("div",{className:(0,r.Z)(s.k.docs.docMarkdown,"markdown")},f&&n.createElement("header",null,n.createElement(j.Z,{as:"h1"},v)),n.createElement(ee.Z,null,n.createElement(t,null))),n.createElement(A,e)),n.createElement(m,{previous:a.previous,next:a.next}))),h&&n.createElement("div",{className:"col col--3"},n.createElement(w.Z,{toc:t.toc,minHeadingLevel:d,maxHeadingLevel:u,className:s.k.docs.docTocDesktop})))}function ie(e){var t="docs-doc-id-"+e.content.metadata.unversionedId;return n.createElement(l.FG,{className:t},n.createElement(re,e),n.createElement(le,e))}},78500:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(75731),r=a(42706),l=a(3289),i=a(52238),s=a(75282),o="tableOfContents_Uh3J",c=["className"];function d(e){var t=e.className,a=(0,r.Z)(e,c);return l.createElement("div",{className:(0,i.Z)(o,"thin-scrollbar",t)},l.createElement(s.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},75282:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(75731),r=a(42706),l=a(3289),i=["parentIndex"];function s(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),a=Array(7).fill(-1);t.forEach((function(e,t){var n=a.slice(2,e.level);e.parentIndex=Math.max.apply(Math,n),a[e.level]=t}));var n=[];return t.forEach((function(e){var a=e.parentIndex,l=(0,r.Z)(e,i);a>=0?t[a].children.push(l):n.push(l)})),n}function o(e){var t=e.toc,a=e.minHeadingLevel,n=e.maxHeadingLevel;return t.flatMap((function(e){var t=o({toc:e.children,minHeadingLevel:a,maxHeadingLevel:n});return function(e){return e.level>=a&&e.level<=n}(e)?[Object.assign({},e,{children:t})]:t}))}var c=a(14258);function d(e){var t=e.getBoundingClientRect();return t.top===t.bottom?d(e.parentNode):t}function m(e,t){var a,n,r=t.anchorTopOffset,l=e.find((function(e){return d(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(d(l))?l:null!=(n=e[e.indexOf(l)-1])?n:null:null!=(a=e[e.length-1])?a:null}function u(){var e=(0,l.useRef)(0),t=(0,c.L)().navbar.hideOnScroll;return(0,l.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function v(e){var t=(0,l.useRef)(void 0),a=u();(0,l.useEffect)((function(){if(!e)return function(){};var n=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,i=e.maxHeadingLevel;function s(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),s=function(e){for(var t=e.minHeadingLevel,a=e.maxHeadingLevel,n=[],r=t;r<=a;r+=1)n.push("h"+r+".anchor");return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:l,maxHeadingLevel:i}),o=m(s,{anchorTopOffset:a.current}),c=e.find((function(e){return o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){a?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===c)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),function(){document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,a])}function f(e){var t=e.toc,a=e.className,n=e.linkClassName,r=e.isChild;return t.length?l.createElement("ul",{className:r?void 0:a},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(f,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}var b=l.memo(f),p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function h(e){var t=e.toc,a=e.className,i=void 0===a?"table-of-contents table-of-contents__left-border":a,d=e.linkClassName,m=void 0===d?"table-of-contents__link":d,u=e.linkActiveClassName,f=void 0===u?void 0:u,h=e.minHeadingLevel,E=e.maxHeadingLevel,g=(0,r.Z)(e,p),L=(0,c.L)(),N=null!=h?h:L.tableOfContents.minHeadingLevel,Z=null!=E?E:L.tableOfContents.maxHeadingLevel,k=function(e){var t=e.toc,a=e.minHeadingLevel,n=e.maxHeadingLevel;return(0,l.useMemo)((function(){return o({toc:s(t),minHeadingLevel:a,maxHeadingLevel:n})}),[t,a,n])}({toc:t,minHeadingLevel:N,maxHeadingLevel:Z});return v((0,l.useMemo)((function(){if(m&&f)return{linkClassName:m,linkActiveClassName:f,minHeadingLevel:N,maxHeadingLevel:Z}}),[m,f,N,Z])),l.createElement(b,(0,n.Z)({toc:k,className:i,linkClassName:m},g))}},6105:function(e,t,a){a.d(t,{E:function(){return s},q:function(){return i}});var n=a(3289),r=a(41878),l=n.createContext(null);function i(e){var t=e.children,a=e.version;return n.createElement(l.Provider,{value:a},t)}function s(){var e=(0,n.useContext)(l);if(null===e)throw new r.i6("DocsVersionProvider");return e}}}]);