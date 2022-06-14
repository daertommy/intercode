"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[70201],{75631:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(3289);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),s=c(n),f=i,m=s["".concat(p,".").concat(f)]||s[f]||d[f]||a;return n?r.createElement(m,u(u({ref:t},l),{},{components:n})):r.createElement(m,u({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,u=new Array(a);u[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,u[1]=o;for(var c=2;c<a;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},11840:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var r=n(75731),i=n(42706),a=(n(3289),n(75631)),u=["components"],o={id:"update-run-input",title:"UpdateRunInput",hide_table_of_contents:!1},p=void 0,c={unversionedId:"graphql/inputs/update-run-input",id:"graphql/inputs/update-run-input",title:"UpdateRunInput",description:"Autogenerated input type of UpdateRun",source:"@site/docs/graphql/inputs/update-run-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/update-run-input",permalink:"/docs/graphql/inputs/update-run-input",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/inputs/update-run-input.mdx",tags:[],version:"current",frontMatter:{id:"update-run-input",title:"UpdateRunInput",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"UpdateRootSiteInput",permalink:"/docs/graphql/inputs/update-root-site-input"},next:{title:"UpdateSignupBucketInput",permalink:"/docs/graphql/inputs/update-signup-bucket-input"}},l={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>clientMutationId</code> (<code>String</code>)",id:"clientmutationid-string",level:4},{value:"<code>id</code> (<code>ID</code>)",id:"id-id",level:4},{value:"<code>run</code> (<code>RunInput!</code>)",id:"run-runinput",level:4}],s={toc:d};function f(e){var t=e.components,n=(0,i.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Autogenerated input type of UpdateRun"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input UpdateRunInput {\n  clientMutationId: String\n  id: ID\n  run: RunInput!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"clientmutationid-string"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"clientMutationId"))," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"A unique identifier for the client performing the mutation."),(0,a.kt)("h4",{id:"id-id"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"run-runinput"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"run"))," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/run-input"},(0,a.kt)("inlineCode",{parentName:"a"},"RunInput!")),")"))}f.isMDXComponent=!0}}]);