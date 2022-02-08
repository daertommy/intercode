"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[39318],{75631:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(3289);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,h=u["".concat(d,".").concat(m)]||u[m]||s[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},10244:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=n(14002),a=n(89922),o=(n(3289),n(75631)),i=["components"],c={id:"order",title:"Order"},d=void 0,l={unversionedId:"graphql/objects/order",id:"graphql/objects/order",title:"Order",description:"No description",source:"@site/docs/graphql/objects/order.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/order",permalink:"/docs/graphql/objects/order",editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/order.mdx",tags:[],version:"current",frontMatter:{id:"order",title:"Order"},sidebar:"sidebar",previous:{title:"OrderQuantityByStatus",permalink:"/docs/graphql/objects/order-quantity-by-status"},next:{title:"OrdersPagination",permalink:"/docs/graphql/objects/orders-pagination"}},p=[{value:"Fields",id:"fields",children:[{value:"<code>charge_id</code> (String)",id:"charge_id-string",children:[],level:4},{value:"<code>coupon_applications</code> (CouponApplication)",id:"coupon_applications-couponapplication",children:[],level:4},{value:"<code>id</code> (ID)",id:"id-id",children:[],level:4},{value:"<code>order_entries</code> (OrderEntry)",id:"order_entries-orderentry",children:[],level:4},{value:"<code>paid_at</code> (Date)",id:"paid_at-date",children:[],level:4},{value:"<code>payment_amount</code> (Money)",id:"payment_amount-money",children:[],level:4},{value:"<code>payment_intent_client_secret</code> (String)",id:"payment_intent_client_secret-string",children:[],level:4},{value:"<code>payment_note</code> (String)",id:"payment_note-string",children:[],level:4},{value:"<code>status</code> (OrderStatus)",id:"status-orderstatus",children:[],level:4},{value:"<code>submitted_at</code> (Date)",id:"submitted_at-date",children:[],level:4},{value:"<code>total_price</code> (Money)",id:"total_price-money",children:[],level:4},{value:"<code>total_price_before_discounts</code> (Money)",id:"total_price_before_discounts-money",children:[],level:4},{value:"<code>user_con_profile</code> (UserConProfile)",id:"user_con_profile-userconprofile",children:[],level:4}],level:3}],s={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Order {\n  charge_id: String\n  coupon_applications: [CouponApplication!]!\n  id: ID!\n  order_entries: [OrderEntry!]!\n  paid_at: Date\n  payment_amount: Money\n  payment_intent_client_secret: String!\n  payment_note: String\n  status: OrderStatus!\n  submitted_at: Date\n  total_price: Money!\n  total_price_before_discounts: Money!\n  user_con_profile: UserConProfile!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"charge_id-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"charge_id")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"coupon_applications-couponapplication"},(0,o.kt)("inlineCode",{parentName:"h4"},"coupon_applications")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/coupon-application"},(0,o.kt)("inlineCode",{parentName:"a"},"CouponApplication")),")"),(0,o.kt)("h4",{id:"id-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,o.kt)("h4",{id:"order_entries-orderentry"},(0,o.kt)("inlineCode",{parentName:"h4"},"order_entries")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/order-entry"},(0,o.kt)("inlineCode",{parentName:"a"},"OrderEntry")),")"),(0,o.kt)("h4",{id:"paid_at-date"},(0,o.kt)("inlineCode",{parentName:"h4"},"paid_at")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date")),")"),(0,o.kt)("h4",{id:"payment_amount-money"},(0,o.kt)("inlineCode",{parentName:"h4"},"payment_amount")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/money"},(0,o.kt)("inlineCode",{parentName:"a"},"Money")),")"),(0,o.kt)("h4",{id:"payment_intent_client_secret-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"payment_intent_client_secret")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("p",null,"Generates a Stripe PaymentIntent for this order and returns the client secret from that\nPaymentIntent. This can be used to start a payment on the client side, for example using\nApple Pay or Google Pay."),(0,o.kt)("h4",{id:"payment_note-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"payment_note")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"status-orderstatus"},(0,o.kt)("inlineCode",{parentName:"h4"},"status")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/order-status"},(0,o.kt)("inlineCode",{parentName:"a"},"OrderStatus")),")"),(0,o.kt)("h4",{id:"submitted_at-date"},(0,o.kt)("inlineCode",{parentName:"h4"},"submitted_at")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date")),")"),(0,o.kt)("h4",{id:"total_price-money"},(0,o.kt)("inlineCode",{parentName:"h4"},"total_price")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/money"},(0,o.kt)("inlineCode",{parentName:"a"},"Money")),")"),(0,o.kt)("h4",{id:"total_price_before_discounts-money"},(0,o.kt)("inlineCode",{parentName:"h4"},"total_price_before_discounts")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/money"},(0,o.kt)("inlineCode",{parentName:"a"},"Money")),")"),(0,o.kt)("h4",{id:"user_con_profile-userconprofile"},(0,o.kt)("inlineCode",{parentName:"h4"},"user_con_profile")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/user-con-profile"},(0,o.kt)("inlineCode",{parentName:"a"},"UserConProfile")),")"))}u.isMDXComponent=!0}}]);