(self.webpackChunkdoc_site=self.webpackChunkdoc_site||[]).push([[82637],{83771:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>w,frontMatter:()=>h,metadata:()=>g,toc:()=>k});var i=n(64715),s=(n(45721),n(75631)),a=n(33645),o=n(73221),l=n.n(o),r=n(93325),c=n.n(r),u=n(18246),p=n.n(u);const h={sidebar_position:4},d="Signups",g={unversionedId:"concepts/signups",id:"concepts/signups",title:"Signups",description:"Intercode allows individual event runs within a convention to accept signups. Events can specify",source:"@site/docs/concepts/signups.mdx",sourceDirName:"concepts",slug:"/concepts/signups",permalink:"/docs/concepts/signups",draft:!1,editUrl:"https://github.com/neinteractiveliterature/intercode/edit/main/doc-site/docs/concepts/signups.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"sidebar",previous:{title:"Events and runs",permalink:"/docs/concepts/events-and-runs"},next:{title:"Permissions",permalink:"/docs/concepts/permissions"}},m={},k=[{value:"Signup buckets",id:"signup-buckets",level:2},{value:"Events with multiple buckets",id:"events-with-multiple-buckets",level:2},{value:"No-preference signups",id:"no-preference-signups",level:2},{value:"Flex buckets",id:"flex-buckets",level:2},{value:"Non-counted signups",id:"non-counted-signups",level:2},{value:"Concurrent events",id:"concurrent-events",level:2},{value:"Team member signups",id:"team-member-signups",level:2}],f={toc:k},b="wrapper";function w(e){let{components:t,...n}=e;return(0,s.kt)(b,(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"signups"},"Signups"),(0,s.kt)("p",null,"Intercode allows individual event runs within a convention to accept signups. Events can specify\na registration policy that describes how many people can sign up, whether there are different types\nof signups with different capacities, and what to do when signups overfill."),(0,s.kt)("p",null,"This section describes the signup system in detail, piece by piece."),(0,s.kt)("h2",{id:"signup-buckets"},"Signup buckets"),(0,s.kt)("p",null,"A registration policy consists of one or more buckets. For the moment, let's just consider a simple\nregistration policy with a single bucket."),(0,s.kt)("p",null,"Signup buckets can be either limited or unlimited. If a bucket is unlimited, Intercode will allow any\nnumber of people to sign up in that bucket. If a bucket is limited, Intercode will allow a certain\nmaximum number of people to sign up in that bucket. Any further people who try to sign up in that bucket\nwill be placed on the waitlist (or in the flex bucket; see below for details on that). Later, if\nother attendees drop out of the event, people on the waitlist will be pulled into the bucket of their\nchoice in the order that they signed up."),(0,s.kt)("p",null,"If a bucket is limited, it must specify a minimum, preferred, and maximum capacity. (These can all be\nthe same number, but the preferred must be greater than or equal to the minimum, and the maximum must\nbe greater than or equal to the preferred.) The minimum and preferred numbers aren't visible to attendees\nand don't affect signup behavior, but are visible to convention staff in the \"schedule grid with counts\"\nview, as a way of seeing whether events at the convention are hitting their desired attendee counts."),(0,s.kt)("h2",{id:"events-with-multiple-buckets"},"Events with multiple buckets"),(0,s.kt)("p",null,"Buckets let an event subdivide its signups into multiple groups, and let attendees choose the group they'd\nlike when signing up. For example, a karaoke event might want to let attendes choose whether to sign up\nas a singer or an audience member. There might be different capacities for these groups."),(0,s.kt)("p",null,"If an event has multiple buckets, it will appear with multiple signup buttons for attendees. Here's how\nthe karaoke event might look:"),(0,s.kt)(a.Z,{img:l(),width:239,mdxType:"Image"}),(0,s.kt)("p",null,"For this event, an unlimited number of people can sign up to watch from the audience, but there's only\ntime for 10 singers, so the event runners have limited the capacity of the Singers bucket."),(0,s.kt)("h2",{id:"no-preference-signups"},"No-preference signups"),(0,s.kt)("p",null,"If an event has multiple ",(0,s.kt)("em",{parentName:"p"},"limited"),' buckets, Intercode will add an additional signup button to the interface:\n"no preference." For example, in a larp about pets, the signup interface might look like this:'),(0,s.kt)(a.Z,{img:c(),width:235,mdxType:"Image"}),(0,s.kt)("p",null,'Players with a preference for the animal species they want to play as would click one of the specific bucket\nbuttons, and players who just want to play this game but don\'t care whether they\'re playing as a cat or a dog\nwould click the "no preference" button. Clicking the "no preference" button will place the attendee into\nwhichever bucket has capacity, more or less randomly.'),(0,s.kt)("p",null,"When someone clicks a signup button, Intercode records which button they clicked on, in addition to which\nbucket they actually ended up in. This is so that later on, it can know whether it's possible to shuffle\npeople between buckets to make room as necessary."),(0,s.kt)("p",null,'For example, let\'s say that the Cats bucket is full, but the Dogs bucket has room. However, 2 of the players\nin the Cats bucket actually clicked "no preference". If someone comes along and wants to sign up as a cat,\nIntercode will move one of the no-preference attendees from the Cats bucket to the Dogs bucket so that this\ncan happen. If nobody can be moved to make room, the new attendee will be placed on the waitlist.'),(0,s.kt)("h2",{id:"flex-buckets"},"Flex buckets"),(0,s.kt)("p",null,'In some cases, events may want a special bucket that represents signup slots that can be any of the other\nlimited buckets. This is called a "flex" bucket (or, in some parts of the API, an ',(0,s.kt)("inlineCode",{parentName:"p"},"anything")," bucket, for\nhistorical reasons)."),(0,s.kt)("p",null,"The most common example of this is roles in a game subdivided by character gender. For example, let's say\na larp has 6 roles written as male, 8 roles written as female, and 4 roles that aren't written as a specific\ngender and can be played as any gender. If the GMs want to allow players to select a character gender at\nsignup time, they might add a flex bucket with a capacity of 4 to account for the roles that aren't written\nwith a specific gender. The signup interface would then look like this:"),(0,s.kt)(a.Z,{img:p(),width:248,mdxType:"Image"}),(0,s.kt)("p",null,"Note that there is no button to sign up for the flex bucket specifically. That's because it's an overflow\nbucket for the other limited-capacity buckets. If, for example, the female roles bucket is full, and\nsomeone clicks the \"Sign up - female role\" button, they will be placed in the flex bucket. (If the flex\nbucket is also full, they will be placed on the waitlist.)"),(0,s.kt)("h2",{id:"non-counted-signups"},"Non-counted signups"),(0,s.kt)("p",null,'Most signups are "counted." This is the normal case for signups. However, signups can be set as\n"non-counted" in the admin UI. This has a few effects:'),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The signup does not count towards the capacity of the bucket it's in"),(0,s.kt)("li",{parentName:"ul"},"The signup does not count towards the user's convention-wide signup limit, if one is in effect")),(0,s.kt)("p",null,"In addition to setting signups as non-counted individually, entire buckets can be set as non-counted.\nThis can be useful, for example, for volunteer shifts where you don't want to penalize attendees for taking\nthem on."),(0,s.kt)("h2",{id:"concurrent-events"},"Concurrent events"),(0,s.kt)("p",null,'Events have an optional setting called "can play concurrently". If this setting is enabled, Intercode does\nnot count this event\'s signups during time conflict checks.'),(0,s.kt)("p",null,'Normally, when a user signs up for an event, Intercode checks to make sure they aren\'t signed up for anything\nelse that overlaps it in time. Turning on "can play concurrently" disables that check. Additionally, when\nsigning up for additional events, the event with the "can play concurrently" setting enabled is not checked\nfor conflicts with these additional events.'),(0,s.kt)("p",null,"This potentially allows signing up for an unlimited number of simultaneous events, so it's worth using this\nsetting with caution."),(0,s.kt)("h2",{id:"team-member-signups"},"Team member signups"),(0,s.kt)("p",null,"Team members can sign up for their own events, in order to get them onto their personal schedules. These\nsignups are always non-counted."),(0,s.kt)("p",null,"Team member signups also do not count for the purposes of concurrent events. It's possible to sign up as a\nteam member for multiple simultaneous events (but we don't particularly recommend this lifestyle choice)."))}w.isMDXComponent=!0},18246:(e,t,n)=>{e.exports={src:{srcSet:n.p+"assets/ideal-img/gender-buckets.189c9d1.496.png 496w",images:[{path:n.p+"assets/ideal-img/gender-buckets.189c9d1.496.png",width:496,height:820}],src:n.p+"assets/ideal-img/gender-buckets.189c9d1.496.png",toString:function(){return n.p+"assets/ideal-img/gender-buckets.189c9d1.496.png"},placeholder:void 0,width:496,height:820},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAQCAYAAAAvf+5AAAAACXBIWXMAABYlAAAWJQFJUiTwAAABU0lEQVQokW2Q0W6jMBBF8/8/1q72LVW1L6tNIQkJYBsbYxsw9lmVFLqR1tLIGunozsw5hDDStAIhFb0dkEqtfd202GHg86WUOCyTZxIlkzgT1ZWoLo9e18QYv8HgPbKpsVoxmI5ONKi2RktBznmtFXRj4NRUnFVNZQSFuGOGAe8DKafvRB88UiuU7hCd5N7UGGNWIP+bGPyEvDvayiJri3cO7/1/wDBSVTW9cczzY9QK8VUbGONMb3tGP7CEnhQnUpxJo3v8G7hHxJEcDMvphXR7J4+WPIc9/7DtkScH8kQufpKvR7I4kWe/j1/BVUEcGfoG2zc4K3B9u66xHbWDS840zvBS/uKt/qD1luXL4zOYElfT8lte+KOu3HqxC1/BzfynO6k7LvcbtWhRRuOcewbneSaEgO40r68/OB7fUFI9id8TtTaU5Xmtoiz5KAq01jv4F+hsapbd33fnAAAAAElFTkSuQmCC"}},73221:(e,t,n)=>{e.exports={src:{srcSet:n.p+"assets/ideal-img/karaoke-buckets.9381ede.478.png 478w",images:[{path:n.p+"assets/ideal-img/karaoke-buckets.9381ede.478.png",width:478,height:386}],src:n.p+"assets/ideal-img/karaoke-buckets.9381ede.478.png",toString:function(){return n.p+"assets/ideal-img/karaoke-buckets.9381ede.478.png"},placeholder:void 0,width:478,height:386},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAABYlAAAWJQFJUiTwAAAA2klEQVQYlUWPyW7DMBBD/f9fVuTSW1rkkqZOvMixJS+SbVkzr4hyKIEHYgAOARbWWqrHg6Hv6YyhriruZZlvVJCUEBGKFCaO4Y64Chmbt7sanVqYDUSPKBRrCAydwU8jox0wTU3/NHRtk/HLggKFcyO38s5gHWHdMuu6sSwe7wMxRlT13ej6jtXP6LEjaWdPEVEhSWI/YvaCl7oLejuh9Zljaildx+n3zLe50fsxPxUqCZka0vUjB2MYKW3L5+PCV/uDWex/ULcZXZ7gB45twYY549aZaXutVv4AQ5sym+h28wMAAAAASUVORK5CYII="}},93325:(e,t,n)=>{e.exports={src:{srcSet:n.p+"assets/ideal-img/no-preference-buckets.ff73c78.470.png 470w",images:[{path:n.p+"assets/ideal-img/no-preference-buckets.ff73c78.470.png",width:470,height:566}],src:n.p+"assets/ideal-img/no-preference-buckets.ff73c78.470.png",toString:function(){return n.p+"assets/ideal-img/no-preference-buckets.ff73c78.470.png"},placeholder:void 0,width:470,height:566},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAMCAYAAABbayygAAAACXBIWXMAABYlAAAWJQFJUiTwAAABI0lEQVQYlT2Q2U7DMBBF+//fVgoIKBKFLpTGieMkTuKsXg6Ko3akq5mHM57ruzHGIKWMStOU6/VKlmWEEPDex+6cY+NHQ6gF/i6dECbDUgu01LKw6dqWplAYXdGUirrIKZXCWRehB1h3LZdckGgV+1kmHNMric6RpqIZuxU0fYdQkqKu6OeR0Vkmb+PczyOzsyvY9z1KZrRti3cOvMNaC2H16LxbPxNNjBX87fDygMt/4snX5JtTKfjVWUQ2wTv82BLEHpJ3rL7RTT1v6TFqWVrBEGIcU1sxFDfc0NANhsLUnOQNMw34ENbTi9l+GBimmY/9J+fzhVrX2NlGf/HFe7BlWSKEYLt9Yvf8wtfhG1UUj9AfoNYakabkuUIpRZplcb7XP6vwzM8fpsZ8AAAAAElFTkSuQmCC"}}}]);