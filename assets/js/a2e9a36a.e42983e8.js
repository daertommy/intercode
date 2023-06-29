"use strict";(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[39318],{75631:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>u});var o=a(45721);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},i=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),p=s(a),y=r,u=p["".concat(c,".").concat(y)]||p[y]||m[y]||n;return a?o.createElement(u,l(l({ref:t},i),{},{components:a})):o.createElement(u,l({ref:t},i))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=y;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[p]="string"==typeof e?e:r,l[1]=d;for(var s=2;s<n;s++)l[s]=a[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}y.displayName="MDXCreateElement"},7092:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>y,Bullet:()=>p,SpecifiedBy:()=>m,assets:()=>s,contentTitle:()=>d,default:()=>k,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var o=a(91487),r=a(45721),n=a(75631);const l={id:"order",title:"Order",hide_table_of_contents:!1},d=void 0,c={unversionedId:"graphql/objects/order",id:"graphql/objects/order",title:"Order",description:"No description",source:"@site/docs/graphql/objects/order.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/order",permalink:"/docs/graphql/objects/order",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/graphql/objects/order.mdx",tags:[],version:"current",frontMatter:{id:"order",title:"Order",hide_table_of_contents:!1},sidebar:"sidebar",previous:{title:"OrderQuantityByStatus",permalink:"/docs/graphql/objects/order-quantity-by-status"},next:{title:"OrdersPagination",permalink:"/docs/graphql/objects/orders-pagination"}},s={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Order.<b>charge_id</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderbcharge_idbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Order.<b>coupon_applications</b></code><Bullet /><code>[CouponApplication!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-orderbcoupon_applicationsbcodecouponapplication--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Order.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Order.<b>order_entries</b></code><Bullet /><code>[OrderEntry!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-orderborder_entriesbcodeorderentry--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Order.<b>paid_at</b></code><Bullet /><code>Date</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderbpaid_atbcodedate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Order.<b>payment_amount</b></code><Bullet /><code>Money</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-orderbpayment_amountbcodemoney-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Order.<b>payment_intent_client_secret</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderbpayment_intent_client_secretbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Order.<b>payment_note</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderbpayment_notebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Order.<b>status</b></code><Bullet /><code>OrderStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-orderbstatusbcodeorderstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Order.<b>submitted_at</b></code><Bullet /><code>Date</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderbsubmitted_atbcodedate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Order.<b>total_price</b></code><Bullet /><code>Money!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-orderbtotal_pricebcodemoney--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Order.<b>total_price_before_discounts</b></code><Bullet /><code>Money!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-orderbtotal_price_before_discountsbcodemoney--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Order.<b>user_con_profile</b></code><Bullet /><code>UserConProfile!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-orderbuser_con_profilebcodeuserconprofile--",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,n.kt)(r.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,n.kt)(r.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,n.kt)(r.Fragment,null,(0,n.kt)("span",{class:"badge badge--"+e.class},e.text)),u={toc:i,Bullet:p,SpecifiedBy:m,Badge:y},b="wrapper";function k(e){let{components:t,...a}=e;return(0,n.kt)(b,(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"No description"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type Order {\n  charge_id: String\n  coupon_applications: [CouponApplication!]!\n  id: ID!\n  order_entries: [OrderEntry!]!\n  paid_at: Date\n  payment_amount: Money\n  payment_intent_client_secret: String!\n  payment_note: String\n  status: OrderStatus!\n  submitted_at: Date\n  total_price: Money!\n  total_price_before_discounts: Money!\n  user_con_profile: UserConProfile!\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderbcharge_idbcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Order.",(0,n.kt)("b",null,"charge_id"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderbcoupon_applicationsbcodecouponapplication--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Order.",(0,n.kt)("b",null,"coupon_applications"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/coupon-application"},(0,n.kt)("inlineCode",{parentName:"a"},"[CouponApplication!]!"))," ",(0,n.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderbidbcodeid--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Order.",(0,n.kt)("b",null,"id"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,n.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderborder_entriesbcodeorderentry--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Order.",(0,n.kt)("b",null,"order_entries"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/order-entry"},(0,n.kt)("inlineCode",{parentName:"a"},"[OrderEntry!]!"))," ",(0,n.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderbpaid_atbcodedate-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Order.",(0,n.kt)("b",null,"paid_at"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/date"},(0,n.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,n.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderbpayment_amountbcodemoney-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Order.",(0,n.kt)("b",null,"payment_amount"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/money"},(0,n.kt)("inlineCode",{parentName:"a"},"Money"))," ",(0,n.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderbpayment_intent_client_secretbcodestring--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Order.",(0,n.kt)("b",null,"payment_intent_client_secret"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,n.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Generates a Stripe PaymentIntent for this order and returns the client secret from that\nPaymentIntent. This can be used to start a payment on the client side, for example using\nApple Pay or Google Pay.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderbpayment_notebcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Order.",(0,n.kt)("b",null,"payment_note"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderbstatusbcodeorderstatus--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Order.",(0,n.kt)("b",null,"status"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/order-status"},(0,n.kt)("inlineCode",{parentName:"a"},"OrderStatus!"))," ",(0,n.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(y,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderbsubmitted_atbcodedate-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Order.",(0,n.kt)("b",null,"submitted_at"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/date"},(0,n.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,n.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderbtotal_pricebcodemoney--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Order.",(0,n.kt)("b",null,"total_price"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/money"},(0,n.kt)("inlineCode",{parentName:"a"},"Money!"))," ",(0,n.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderbtotal_price_before_discountsbcodemoney--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Order.",(0,n.kt)("b",null,"total_price_before_discounts"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/money"},(0,n.kt)("inlineCode",{parentName:"a"},"Money!"))," ",(0,n.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-orderbuser_con_profilebcodeuserconprofile--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Order.",(0,n.kt)("b",null,"user_con_profile"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/user-con-profile"},(0,n.kt)("inlineCode",{parentName:"a"},"UserConProfile!"))," ",(0,n.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h3",{id:"member-of"},"Member of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/graphql/objects/cancel-order-payload"},(0,n.kt)("inlineCode",{parentName:"a"},"CancelOrderPayload")),"  ",(0,n.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/graphql/objects/coupon-application"},(0,n.kt)("inlineCode",{parentName:"a"},"CouponApplication")),"  ",(0,n.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/graphql/objects/create-order-payload"},(0,n.kt)("inlineCode",{parentName:"a"},"CreateOrderPayload")),"  ",(0,n.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/graphql/objects/mark-order-paid-payload"},(0,n.kt)("inlineCode",{parentName:"a"},"MarkOrderPaidPayload")),"  ",(0,n.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/graphql/objects/order-entry"},(0,n.kt)("inlineCode",{parentName:"a"},"OrderEntry")),"  ",(0,n.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/graphql/objects/orders-pagination"},(0,n.kt)("inlineCode",{parentName:"a"},"OrdersPagination")),"  ",(0,n.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/graphql/objects/submit-order-payload"},(0,n.kt)("inlineCode",{parentName:"a"},"SubmitOrderPayload")),"  ",(0,n.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/graphql/objects/update-order-payload"},(0,n.kt)("inlineCode",{parentName:"a"},"UpdateOrderPayload")),"  ",(0,n.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/graphql/objects/user-con-profile"},(0,n.kt)("inlineCode",{parentName:"a"},"UserConProfile")),"  ",(0,n.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);