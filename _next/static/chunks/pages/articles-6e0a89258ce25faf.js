(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[91],{1536:function(t,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles",function(){return r(3076)}])},2891:function(t,n,r){"use strict";r.d(n,{Z:function(){return c}});var e=r(5944),o=r(5861),i=r(3795),a=r(7357);function c(t){var n=t.config,r=n.copylight_name,c=n.copylight_url;return(0,e.tZ)(a.Z,{sx:{mt:"2rem"},children:(0,e.BX)(o.Z,{variant:"body2",color:"text.secondary",align:"center",children:["Copyright \xa9 ",(0,e.tZ)(i.Z,{color:"inherit",href:c,target:"_blank",rel:"noopener",children:r})," ",(new Date).getFullYear(),"."]})})}},2122:function(t,n,r){"use strict";r.d(n,{j:function(){return b},y:function(){return Z}});var e=r(5944),o=r(1664),i=r.n(o),a=r(6242),c=r(3321),l=r(7357),u=r(3965),s=r(5861),d=r(6574),h=r(6886),f=r(8787),v=r(786),g=r(7916);function p(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function m(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},e=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),e.forEach((function(n){p(t,n,r[n])}))}return t}var Z=function(t){var n=t.slug,r=t.title,o=t.tags,h=t.posted_at;return h>(0,v.I)()?(0,e.tZ)("div",{}):(0,e.BX)(a.Z,{variant:"outlined",sx:{width:"98%",m:0,p:0,borderRadius:"12px"},children:[(0,e.tZ)(i(),{href:"/articles/".concat(n),passHref:!0,children:(0,e.tZ)(c.Z,{sx:{width:"100%",textTransform:"none",pt:0,pb:0,pl:0,pr:0},children:(0,e.BX)(l.Z,{sx:{pt:0,pb:0,pr:0,width:"100%",pl:0},children:[(0,e.tZ)(u.Z,{component:"img",image:"".concat(g.sb,"/static/images/thumbnail/").concat(n,".jpg"),alt:"thumbnail"}),(0,e.BX)(l.Z,{sx:{pr:"1.4rem",pl:"1.4rem"},children:[(0,e.tZ)(s.Z,{gutterBottom:!0,variant:"body2",color:"text.secondary",component:"div",sx:{m:0,pt:1,pb:.5},children:h}),(0,e.tZ)(s.Z,{variant:"h2",color:"text.primary",component:"div",sx:{fontWeight:"bold",pt:0,pl:0,pr:0,pb:1},children:r})]})]})})}),(0,e.tZ)(d.Z,{children:(0,e.tZ)(l.Z,{sx:{m:0,pb:1,pt:1},children:(0,e.tZ)(f.L,{tags:o})})})]})},b=function(t){var n=t.posts,r=t.page,o=t.postNumPerPage,i=((r=r?Number(r):1)-1)*o,a=(r-1)*o+o;return(0,e.tZ)(h.ZP,{container:!0,children:n.slice(i,a).map((function(t){return(0,e.tZ)(h.ZP,{item:!0,xs:12,sm:6,children:(0,e.tZ)(l.Z,{sx:{m:{sm:"1rem",xs:1}},children:(0,e.tZ)(Z,m({},t))})},t.slug)}))})}},8787:function(t,n,r){"use strict";r.d(n,{L:function(){return f}});var e=r(5944),o=r(3321),i=r(7357),a=r(1664),c=r.n(a),l=function(t){return function(t){var n,r=t.r,e=t.g,o=t.b,i=360,a=Math.max(r,e,o),c=Math.min(r,e,o);return(n=a==c?0:r==a?(e-o)/(a-c)*60:e==a?(o-r)/(a-c)*60+120:(r-e)/(a-c)*60+240)<0&&(n+=i),{h:n,s:(a+c)/2<127.5?a+c<=0?0:(a-c)/(a+c)*100:(a-c)/(510-a-c)*100,l:(a+c)/255/2*100}}(function(t){return{r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)}}(t))},u=function(t){return function(t){var n=t.r,r=t.g,e=t.b,o=("00"+Math.round(n).toString(16)).slice(-2),i=("00"+Math.round(r).toString(16)).slice(-2),a=("00"+Math.round(e).toString(16)).slice(-2);return"".concat(o,i,a)}(function(t){var n,r,e,o,i,a=t.h,c=t.s,l=t.l;c/=100,(l/=100)<.5?(o=l+l*c,i=l-l*c):(o=l+(1-l)*c,i=l-(1-l)*c);var u=60,s=(a%=360)/u;return s<=1?(n=o,r=a/u*(o-i)+i,e=i):s<=2?(n=(120-a)/u*(o-i)+i,r=o,e=i):s<=3?(n=i,r=o,e=(a-120)/u*(o-i)+i):s<=4?(n=i,r=(240-a)/u*(o-i)+i,e=o):s<=5?(n=(a-240)/u*(o-i)+i,r=i,e=o):(n=o,r=i,e=(360-a)/u*(o-i)+i),{r:n*=255,g:r*=255,b:e*=255}}({h:t.h,s:t.s,l:t.l}))},s=function(t,n){var r={h:t.h,s:t.s,l:t.l};return void 0!=n.h&&(r.h=Math.max(Math.min(n.h,360),0)),void 0!=n.s&&(r.s=Math.max(Math.min(n.s,100),0)),void 0!=n.l&&(r.l=Math.max(Math.min(n.l,100),0)),r},d=r(6868),h=function(t){var n=t.tag,r=function(t,n){var r,e,o,i,a,c,d=l(t);return"light"===n?(r=u(s(d,{h:void 0,s:void 0,l:30})),e=u(s(d,{h:void 0,s:void 0,l:98})),o=u(s(d,{h:void 0,s:void 0,l:30})),i=u(s(d,{h:void 0,s:void 0,l:30})),a=u(s(d,{h:void 0,s:void 0,l:93})),c=u(s(d,{h:void 0,s:void 0,l:30}))):"dark"===n&&(r=u(s(d,{h:void 0,s:void 0,l:75})),e=u(s(d,{h:void 0,s:void 0,l:11})),o=u(s(d,{h:void 0,s:void 0,l:35})),i=u(s(d,{h:void 0,s:void 0,l:75})),a=u(s(d,{h:void 0,s:void 0,l:17})),c=u(s(d,{h:void 0,s:void 0,l:35}))),{fg:r,bg:e,ol:o,fgHover:i,bgHover:a,olHover:c}}(n.color,d.Z.palette.mode);return(0,e.tZ)(c(),{href:"/articles?tag=".concat(n.name),passHref:!0,children:(0,e.tZ)(o.Z,{variant:"outlined",size:"small",sx:{textTransform:"none",borderRadius:2,pt:0,pb:0,mt:0,mb:.7,color:"#".concat(r.fg),borderColor:"#".concat(r.ol),backgroundColor:"#".concat(r.bg),"&:hover":{color:"#".concat(r.fgHover),borderColor:"#".concat(r.olHover),backgroundColor:"#".concat(r.bgHover)}},children:n.name})})},f=function(t){var n=t.tags;return void 0===n?(0,e.tZ)("div",{}):(0,e.tZ)(i.Z,{children:n.map((function(t){return(0,e.tZ)(i.Z,{sx:{mr:.5,display:"inline"},children:(0,e.tZ)(h,{tag:t})},t.name)}))})}},786:function(t,n,r){"use strict";r.d(n,{I:function(){return u}});var e=r(7484),o=r.n(e),i=r(178),a=r.n(i),c=r(9387),l=r.n(c),u=function(){return o().extend(a()),o().extend(l()),o().tz.setDefault("Asia/Tokyo"),o()().tz().format("YYYY\u5e74MM\u6708DD\u65e5 HH\u6642mm\u5206")}},3076:function(t,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return _},default:function(){return C}});var e=r(5944),o=r(2045),i=r(9008),a=r.n(i),c=r(1163),l=r(2891),u=r(5861),s=r(7357),d=r(5054),h=function(t){var n=t.pageNum,r=t.page,o=t.handleChange;r=r?Number(r):1;return(0,e.tZ)(d.Z,{count:n,color:"primary",onClick:function(t){var n=(t.target.ownerDocument||document).querySelector("#paginationAnchor");n&&n.scrollIntoView({behavior:"smooth",block:"center"})},onChange:o,page:r,variant:"outlined",sx:{justifyContent:"center",display:"flex"},hideNextButton:!0,hidePrevButton:!0,siblingCount:2})},f=r(2122),v=r(4054),g=r(6186),p=r(3599),m=function(t){var n=t.year,r=t.years,o=t.handleChange;return n=n||"all",(0,e.tZ)(v.Z,{variant:"standard",children:(0,e.BX)(g.Z,{labelId:"article-year-label",id:"article-year-label",value:n,label:"Year",onChange:o,children:[(0,e.tZ)(p.Z,{value:"all",children:"all"},"all"),r.map((function(t){return(0,e.tZ)(p.Z,{value:t,children:t},t)}))]})})},Z=function(t){return"string"===typeof t.query.year?t.query.year:void 0},b=function(t){return"string"===typeof t.query.tag?t.query.tag:void 0},y=function(t){t.config;var n=t.years,r=t.router,o=t.posts,i=o.length,a=Math.floor((i-1)/14)+1,c=Z(r),l=function(t){return"string"===typeof t.query.page?t.query.page:void 0}(r),d=b(r),v=function(t,n){var e={};e.page="".concat(n),"string"===typeof c&&(e.year=c),"string"===typeof d&&(e.tag=d),r.push({pathname:"/articles",query:e})},g=c?"year='".concat(c,"'"):void 0,p=d?"tag='".concat(d,"'"):void 0,y=g||p?"(".concat(g||"").concat(g&&p?" ":"").concat(p||"",")"):void 0;return(0,e.BX)("div",{id:"paginationAnchor",children:[(0,e.BX)(u.Z,{variant:"h1",align:"center",children:["Articles List ",y]}),(0,e.tZ)(s.Z,{sx:{m:"3rem"}}),(0,e.tZ)(m,{year:c,years:n,handleChange:function(t){var n={};n.year=t.target.value,"string"===typeof l&&(n.page=l),"string"===typeof d&&(n.tag=d),r.push({pathname:"/articles",query:n})}}),(0,e.tZ)(s.Z,{sx:{m:"2rem"}}),(0,e.tZ)(h,{pageNum:a,page:l,handleChange:v}),(0,e.tZ)(f.j,{posts:o,page:l,postNumPerPage:14}),(0,e.tZ)(h,{pageNum:a,page:l,handleChange:v})]})},x=r(786),_=!0,C=function(t){var n=t.posts,r=t.config,i=t.years,u=(0,c.useRouter)(),s=Z(u);s=s||"all";var d=b(u);d=d||"";var h=(0,x.I)();return n=n.filter((function(t){return t.posted_at<=h})).filter((function(t){return t.posted_at.slice(0,4)===s||"all"===s})).filter((function(t){return t.tags.some((function(t){return t.name===d}))||""===d})),(0,e.BX)("div",{children:[(0,e.BX)(a(),{children:[(0,e.tZ)("title",{children:"\u8a18\u4e8b\u4e00\u89a7 | ".concat(r.blog_title)}),(0,e.tZ)("meta",{name:"description",content:"".concat(r.blog_title," article list")}),(0,e.tZ)("link",{rel:"icon",href:"".concat(r.root_url,"/static/favicon.ico")})]}),(0,e.tZ)("main",{children:(0,e.tZ)(o.Z,{maxWidth:"md",children:(0,e.tZ)(y,{config:r,years:i,router:u,posts:n})})}),(0,e.tZ)("footer",{children:(0,e.tZ)(l.Z,{config:r})})]})}}},function(t){t.O(0,[859,217,805,249,774,888,179],(function(){return n=1536,t(t.s=n);var n}));var n=t.O();_N_E=n}]);