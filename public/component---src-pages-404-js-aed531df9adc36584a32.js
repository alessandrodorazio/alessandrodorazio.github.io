(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{233:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return l});var n=a(0),r=a.n(n),o=a(248),i=a(246);var l=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement(o.a,null,r.a.createElement(i.a,{title:"404: Non trovato"}),r.a.createElement("h1",null,"Page not found"),r.a.createElement("a",{href:"https://alessandrodorazio.it",title:"Home page"},"Home page"))},n}(n.Component)},240:function(e,t,a){e.exports=a.p+"static/me-699c52065319573f815a4ba7b5cdb0e8.png"},246:function(e,t,a){"use strict";var n=a(247),r=a(0),o=a.n(r),i=a(263),l=a.n(i),c=a(240),s=a.n(c);function p(e){var t=e.description,a=e.lang,r=e.meta,i=e.title,c=n.data.site,p=t||c.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:p},{property:"og:title",content:i},{property:"og:description",content:p},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:p},{name:"og:url",content:"https://alessandrodorazio.it"},{name:"og:site_name",content:i},{name:"og:image",content:"https://alessandrodorazio.it"+s.a},{name:"twitter:image",content:"https://alessandrodorazio.it"+s.a}].concat(r)})}p.defaultProps={lang:"it",meta:[],description:"Sviluppatore full stack di Pescara. Siti Web, applicazione e gestionali innovativi."},t.a=p},247:function(e){e.exports={data:{site:{siteMetadata:{title:"Alessandro D'Orazio",description:"Sviluppatore full stack di Pescara. Siti Web, applicazione e gestionali innovativi.",author:"Alessandro D'Orazio"}}}}},248:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(240),i=a.n(o),l=a(241),c=a(249),s=a(250),p=a(258),m=a(239),d=a(253),u=a.n(d),h=a(259);var f=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).prev=void 0,a.prev=t.prev,"undefined"!=typeof window?a.prevPath=window.location.pathname:a.prevPath="/",a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(e,t){return r.a.createElement("div",null,r.a.createElement("header",{className:"pt-3 bg-primary pb-4"},r.a.createElement(l.a,null,r.a.createElement(c.a,{className:"align-items-center"},r.a.createElement(s.a,{xs:3,md:2},r.a.createElement(u.a,{fade:!0,to:"/"},r.a.createElement("img",{src:i.a,className:"img-fluid rounded-circle float-right",style:{maxWidth:"64px"},alt:"Profile photo"}))),r.a.createElement(s.a,{xs:7,md:8},r.a.createElement(u.a,{className:"text-white",fade:!0,to:"/"},r.a.createElement("strong",null,"Alessandro D'Orazio")),r.a.createElement("br",null),r.a.createElement("span",{className:"font-weight-light text-white-50"},"Web developer")),r.a.createElement(s.a,{xs:2},r.a.createElement(u.a,{id:"menuButton",state:{prevPath:this.prevPath},swipe:!0,direction:"Menu"===this.props.page?"up":"down",duration:.35,entryOffset:80,top:"Menu"===this.props.page?"entry":"exit",to:"Menu"===this.props.page?this.prev:"/menu",className:"link"},r.a.createElement(m.a,{className:"text-white",icon:"Menu"===this.props.page?h.faTimes:p.faBars,size:"2x"})))))))},n}(n.Component),g=(a(230),a(231),a(232),a(260)),E=a(261),v=a(262),y=a(256),w=a(257);var b=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement(l.a,{className:"mt-2"},r.a.createElement(c.a,{className:"align-items-center"},r.a.createElement(s.a,{md:6},r.a.createElement("p",{className:"text-muted"},(new Date).getFullYear()," Alessandro D'Orazio",r.a.createElement("br",null),r.a.createElement(m.a,{icon:v.faIdBadge,fixedWidth:!0})," DRZLSN99B03G482S",r.a.createElement("br",null),r.a.createElement(m.a,{icon:y.faPhonePlus,fixedWidth:!0})," ",r.a.createElement("a",{href:"tel:3898707248",className:"link-muted"},"389/8707248"),r.a.createElement("br",null),r.a.createElement(m.a,{icon:w.faEnvelopeOpenText,fixedWidth:!0})," ",r.a.createElement("a",{href:"mailto:me@alessandrodorazio.it",className:"link-muted"},"me@alessandrodorazio.it"))),r.a.createElement(s.a,{md:6},r.a.createElement("footer",{className:"sticky-top text-right mr-3 mb-2 text-muted font-weight-light"},"Made with ",r.a.createElement(m.a,{icon:E.a,className:"text-primary",fixedWidth:!0})," by Alessandro D'Orazio"))))},n}(n.Component),x=a(252);a.d(t,"a",function(){return N});var N=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return x.a.autoAddCss=!1,r.a.createElement("div",{className:"bg-light Site"},r.a.createElement(g.OutboundLink,{href:"https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/"}),r.a.createElement(f,{page:this.props.title,prev:this.props.prev}),r.a.createElement("div",{className:"Site-content"},r.a.createElement("main",null,this.props.children)),r.a.createElement(b,null))},n}(n.Component)}}]);
//# sourceMappingURL=component---src-pages-404-js-aed531df9adc36584a32.js.map