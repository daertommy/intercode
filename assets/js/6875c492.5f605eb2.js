"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[48610],{16136:function(e,t,a){a.d(t,{Z:function(){return v}});var r=a(89922),l=a(3289),n=a(52238),s=a(95152),i=a(43926),m="sidebar_EP8a",o="sidebarItemTitle_ljRP",c="sidebarItemList_SYUZ",u="sidebarItem_CiA0",g="sidebarItemLink_lgoa",d="sidebarItemLinkActive_o7UG",p=a(70693);function h(e){var t=e.sidebar;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.Z)(m,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(o,"margin-bottom--md")},t.title),l.createElement("ul",{className:c},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:u},l.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:d},e.title))}))))}var E=["sidebar","toc","children"];var v=function(e){var t=e.sidebar,a=e.toc,i=e.children,m=(0,r.Z)(e,E),o=t&&t.items.length>0;return l.createElement(s.Z,m,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},o&&l.createElement("aside",{className:"col col--3"},l.createElement(h,{sidebar:t})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&l.createElement("div",{className:"col col--2"},a))))}},74441:function(e,t,a){a.d(t,{Z:function(){return P}});var r=a(3289),l=a(52238),n=a(75631),s=a(70693),i=a(43926),m=a(99484),o=a(52553),c=a(62040),u=a(94062),g=a(34088),d="blogPostTitle_6Noy",p="blogPostData_Taj7",h="blogPostDetailsFull_apcR",E=a(23253),v="image_z5zH";var b=function(e){var t=e.author,a=t.name,l=t.title,n=t.url,s=t.imageURL;return r.createElement("div",{className:"avatar margin-bottom--sm"},s&&r.createElement(i.Z,{className:"avatar__photo-link avatar__photo",href:n},r.createElement("img",{className:v,src:s,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(i.Z,{href:n,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),l&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))},f="authorCol_ODFM",Z="imageOnlyAuthorRow_sc0l",N="imageOnlyAuthorCol_rtZF";function _(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var n=t.every((function(e){return!e.name}));return r.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",n?Z:"row")},t.map((function(e,t){var s;return r.createElement("div",{className:(0,l.Z)(!n&&"col col--6",n?N:f),key:t},r.createElement(b,{author:Object.assign({},e,{imageURL:null!=(s=a.authorsImageUrls[t])?s:e.imageURL})}))})))}var P=function(e){var t,a,v,b=(v=(0,o.c2)().selectMessage,function(e){var t=Math.ceil(e);return v(t,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),f=(0,m.C)().withBaseUrl,Z=e.children,N=e.frontMatter,P=e.assets,k=e.metadata,T=e.truncated,w=e.isBlogPostPage,y=void 0!==w&&w,M=k.date,C=k.formattedDate,I=k.permalink,L=k.tags,U=k.readingTime,R=k.title,A=k.editUrl,B=k.authors,x=null!=(t=P.image)?t:N.image,z=!y&&T,O=L.length>0,D=y?"h1":"h2";return r.createElement("article",{className:y?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement("header",null,r.createElement(D,{className:d,itemProp:"headline"},y?R:r.createElement(i.Z,{itemProp:"url",to:I},R)),r.createElement("div",{className:(0,l.Z)(p,"margin-vert--md")},r.createElement("time",{dateTime:M,itemProp:"datePublished"},C),void 0!==U&&r.createElement(r.Fragment,null," \xb7 ",b(U))),r.createElement(_,{authors:B,assets:P})),x&&r.createElement("meta",{itemProp:"image",content:f(x,{absolute:!0})}),r.createElement("div",{id:y?c.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},r.createElement(n.Zo,{components:u.Z},Z)),(O||T)&&r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",(a={},a[h]=y,a))},O&&r.createElement("div",{className:(0,l.Z)("col",{"col--9":z})},r.createElement(E.Z,{tags:L})),y&&A&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(g.Z,{editUrl:A})),z&&r.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":O})},r.createElement(i.Z,{to:k.permalink,"aria-label":"Read more about "+R},r.createElement("b",null,r.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},91550:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var r=a(3289),l=a(43926),n=a(16136),s=a(74441),i=a(70693),m=a(52553);function o(e){var t,a=e.metadata,o=e.items,c=e.sidebar,u=a.allTagsPath,g=a.name,d=a.count,p=(t=(0,m.c2)().selectMessage,function(e){return t(e,(0,i.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),h=(0,i.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:p(d),tagName:g});return r.createElement(n.Z,{title:h,wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogTagPostListPage,searchMetadata:{tag:"blog_tags_posts"},sidebar:c},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,h),r.createElement(l.Z,{href:u},r.createElement(i.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),o.map((function(e){var t=e.content;return r.createElement(s.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},r.createElement(t,null))})))}},34088:function(e,t,a){a.d(t,{Z:function(){return g}});var r=a(3289),l=a(70693),n=a(14002),s=a(89922),i=a(52238),m="iconEdit_iZg9",o=["className"];var c=function(e){var t=e.className,a=(0,s.Z)(e,o);return r.createElement("svg",(0,n.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(m,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},u=a(52553);function g(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},r.createElement(c,null),r.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},93072:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(3289),l=a(52238),n=a(43926),s="tag_GrTR",i="tagRegular_BaXr",m="tagWithCount_EtYw";var o=function(e){var t,a=e.permalink,o=e.name,c=e.count;return r.createElement(n.Z,{href:a,className:(0,l.Z)(s,(t={},t[i]=!c,t[m]=c,t))},o,c&&r.createElement("span",null,c))}},23253:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(3289),l=a(52238),n=a(70693),s=a(93072),i="tags_v38E",m="tag_bemm";function o(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,l.Z)(i,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return r.createElement("li",{key:a,className:m},r.createElement(s.Z,{name:t,permalink:a}))}))))}}}]);