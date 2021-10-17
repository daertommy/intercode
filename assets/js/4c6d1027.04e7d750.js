"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[8680],{75631:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(3289);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),l=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),f=o,g=u["".concat(d,".").concat(f)]||u[f]||s[f]||a;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},29083:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=t(1629),o=t(17322),a=(t(3289),t(75631)),i=["components"],c={id:"orders-connection",title:"OrdersConnection"},d=void 0,l={unversionedId:"graphql/objects/orders-connection",id:"graphql/objects/orders-connection",isDocsHomePage:!1,title:"OrdersConnection",description:"The connection type for Order.",source:"@site/docs/graphql/objects/orders-connection.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/orders-connection",permalink:"/docs/graphql/objects/orders-connection",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/orders-connection.mdx",tags:[],version:"current",frontMatter:{id:"orders-connection",title:"OrdersConnection"},sidebar:"sidebar",previous:{title:"Order",permalink:"/docs/graphql/objects/order"},next:{title:"OrdersPagination",permalink:"/docs/graphql/objects/orders-pagination"}},p=[{value:"Fields",id:"fields",children:[{value:"<code>edges</code> ([OrderEdge])",id:"edges-orderedge",children:[],level:4},{value:"<code>nodes</code> ([Order])",id:"nodes-order",children:[],level:4},{value:"<code>pageInfo</code> (PageInfo!)",id:"pageinfo-pageinfo",children:[],level:4},{value:"<code>totalCount</code> (Int!)",id:"totalcount-int",children:[],level:4}],level:3}],s={toc:p};function u(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The connection type for Order."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type OrdersConnection {\n  edges: [OrderEdge]\n  nodes: [Order]\n  pageInfo: PageInfo!\n  totalCount: Int!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"edges-orderedge"},(0,a.kt)("inlineCode",{parentName:"h4"},"edges")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/order-edge"},(0,a.kt)("inlineCode",{parentName:"a"},"[OrderEdge]")),")"),(0,a.kt)("p",null,"A list of edges."),(0,a.kt)("h4",{id:"nodes-order"},(0,a.kt)("inlineCode",{parentName:"h4"},"nodes")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/order"},(0,a.kt)("inlineCode",{parentName:"a"},"[Order]")),")"),(0,a.kt)("p",null,"A list of nodes."),(0,a.kt)("h4",{id:"pageinfo-pageinfo"},(0,a.kt)("inlineCode",{parentName:"h4"},"pageInfo")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/page-info"},(0,a.kt)("inlineCode",{parentName:"a"},"PageInfo!")),")"),(0,a.kt)("p",null,"Information to aid in pagination."),(0,a.kt)("h4",{id:"totalcount-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"totalCount")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int!")),")"))}u.isMDXComponent=!0}}]);