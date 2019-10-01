(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{235:function(e,t,a){"use strict";a.r(t);a(264),a(49);var n=a(0),r=a.n(n),o=a(248),i=a(321),c=a(322),l=a(239),s=a(323),m=a(324);var p=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(e,t,a,n,o){return r.a.createElement("div",{className:"m-1"},r.a.createElement("a",{className:this.props.link?"link":"",href:this.props.link,rel:"noopener noreferrer",target:"_blank"},r.a.createElement(l.a,{icon:this.props.icon,size:"lg",fixedWidth:!0}),"  ",String(this.props.name)),function(e){return e?r.a.createElement("span",null," ",r.a.createElement("span",{className:"small text-muted"},String(e))):""}(this.props.description),function(e){return e?r.a.createElement("span",null," ",r.a.createElement(l.a,{icon:s.faExternalLinkSquare,fixedWidth:!0})):""}(this.props.link),"  ",r.a.createElement(m.a,{color:this.props.color?this.props.color:"primary"},String(this.props.year)))},n}(n.Component),d=a(246);var u=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(e,t,a){var n;switch(this.props.type){case 1:n="success";break;case 2:n="info";break;case 3:n="primary";break;case 4:n="danger";break;default:n="none"}function o(e){return!0===e?r.a.createElement("br",null):r.a.createElement("span",null,"  ")}return 0===this.props.type?r.a.createElement("span",null,this.props.name,o(this.props.wr)):r.a.createElement("span",null,r.a.createElement(m.a,{color:n},this.props.name),o(this.props.wr))},n}(n.Component);var h=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(e,t){return r.a.createElement("div",null,r.a.createElement(l.a,{icon:this.props.icon,fixedWidth:!0})," ",r.a.createElement("span",{dangerouslySetInnerHTML:{__html:this.props.text}}))},n}(n.Component),y=a(241),E=a(325),f=a.n(E);a.d(t,"default",function(){return g});var g=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).title="Curriculum",a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=[{text:"Alessandro D'Orazio",icon:i.e},{text:"Born in Pescara on 3 February 1999",icon:i.b},{text:"Computer science studente @ UnivAQ and Web developer @ Promobulls",icon:i.a},{text:"Pescara/L'Aquila",icon:i.g}],t=[{text:"<a href='mailto:me@alessandrodorazio.it' class='link' title='Send me an email'>me@alessandrodorazio.it</a>",icon:i.c},{text:"<a href='tel:38978707248' class='link' title='Call me'>+39 3898707248</a>",icon:i.i},{text:"<a href='https://www.linkedin.com/in/alessandrodorazio' rel='noreferrer noopener' target='_blank' class='link' title='LinkedIn profile'>LinkedIn</a>",icon:c.f}],a=[{icon:i.j,text:'High school diploma obtained with <span className="badge badge-primary">86/100</span> in computer science at the l\'IIS "A. Volta" in Pescara'},{icon:i.j,text:"Basic safety at work course"},{icon:i.k,text:"React with Redux"},{icon:i.k,text:"Laravel from scratch"},{icon:i.d,text:"Corso for Web developers 2.0"},{icon:i.d,text:"ECDL"},{text:"Codemotion MI 17/18 & Codemotion Rome 18",icon:i.f}],n=[{name:"Promobulls",description:"Full stack developer",icon:i.a,year:"2019",color:"success"},{name:"Dario Belfiore",description:"Website",icon:c.i,year:"2019"},{name:"MediaWellness",description:"Website",icon:c.e,year:"2019"},{name:"Kidland Viking",description:"Website",icon:c.i,year:"2019"},{name:"PooPooLess",description:"Single Page Application",icon:c.h,year:"2019"},{name:"Andrea Di Berto",description:"Single Page Application",icon:c.h,year:"2019"},{name:"ASD Judo Kuroki",description:"Management software",icon:c.e,year:"2018"},{name:"Telemetrica",description:"Computer technician",icon:i.a,year:"2016"}],l=[{name:"Motorway Management System",link:"https://github.com/alessandrodorazio/MMS",icon:c.c,year:"2019"},{name:"SocialBook",link:"https://github.com/alessandrodorazio/SocialBook",icon:c.g,year:"2019"},{name:"EcoToll",link:"https://github.com/alessandrodorazio/ECOtoll",icon:c.c,year:"2019"},{name:"CodiceFiscale.JS",link:"https://github.com/alessandrodorazio/CodiceFiscale.js",icon:c.d,year:"2018"},{name:"Web resource",link:"https://github.com/alessandrodorazio/Risorse-per-il-Web",icon:c.b,year:"2018"},{name:"Inventory",icon:c.e,year:"2017"},{name:"BeDev",icon:i.h,description:"Ionic framework + backend in PHP",year:"2016"},{name:"WeightGraph",description:"Ionic framework",icon:c.a,year:"2016"},{name:"HeartLet",description:"Arduino + Ionic",icon:i.l,year:"2016"}];return r.a.createElement(o.a,{title:this.title},r.a.createElement(d.a,{title:this.title,description:"Curriculum Alessandro D'Orazio"}),r.a.createElement(y.a,{className:"mt-3 pl-2 pr-2 pl-lg-4 pr-lg-4"},r.a.createElement("h1",{className:"text-primary"},this.title),r.a.createElement("div",{className:"font-weight-light"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-9"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 mt-2"},r.a.createElement("h4",null,"Personal data"),e.map(function(e,t){return r.a.createElement(h,{key:t,icon:e.icon,text:e.text})})),r.a.createElement("div",{className:"col-md-6 mt-2"},r.a.createElement("h4",null,"Contacts"),t.map(function(e,t){return r.a.createElement(h,{key:t,icon:e.icon,text:e.text})}))),r.a.createElement("hr",null),r.a.createElement("h4",null,"Training"),a.map(function(e,t){return r.a.createElement(h,{key:t,icon:e.icon,text:e.text})})),r.a.createElement("div",{className:"col-md-3 mt-2"},r.a.createElement("img",{src:f.a,className:"img-fluid img-thumbnail",alt:"Profile photo"}),r.a.createElement("p",{className:"text-muted small text-right"},"Last update: ","01/08/19"))),r.a.createElement("hr",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h4",null,"Professional experiences"),n.map(function(e,t){return r.a.createElement(p,{key:t,name:e.name,description:e.description,icon:e.icon,year:e.year,color:e.color})})),r.a.createElement("div",{className:"col-md-6 mt-2"},r.a.createElement("h4",null,"Projects"),l.map(function(e){return r.a.createElement(p,{key:e.name,name:e.name,description:e.description,link:e.link,icon:e.icon,year:e.year})}))),r.a.createElement("hr",null),r.a.createElement("div",{className:"row mt-4"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("h5",null,"Know how"),r.a.createElement("p",null,[{type:0,name:"Algorithms and data structure",wr:!0},{type:0,name:"UI&UX Design",wr:!0},{type:1,name:"Linux"},{type:1,name:"Git",wr:!0},{type:2,name:"English B1"},{type:2,name:"Driving license B",wr:!0},{type:3,name:"C"},{type:3,name:"Java"},{type:3,name:"Javascript"},{type:3,name:"PHP"},{type:3,name:"SQL",wr:!0},{type:4,name:"Bootstrap"},{type:4,name:"Ionic"},{type:4,name:"Laravel"},{type:4,name:"React"}].map(function(e,t){return r.a.createElement(u,{key:t,type:e.type,name:e.name,wr:e.wr})}))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("h5",null,"Expertise"),r.a.createElement("p",null,["Communication-relational skills","Accounting management","Problem solving","Teamworking","Time Keeping"].map(function(e,t){return r.a.createElement("span",{key:t},e," ",r.a.createElement("br",null))}))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("h5",null,"Interests"),r.a.createElement("p",null,["Big Data","Internet of Things","Operative research","Machine Learning"].map(function(e,t){return r.a.createElement("span",{key:t},e," ",r.a.createElement("br",null))})))),r.a.createElement("p",{className:"text-muted mt-2"},"I authorize the processing of personal data contained in my curriculum vitae based on art. 13 of Legislative Decree 196/2003 and art. 13 GDPR 679/16."))))},n}(n.Component)},240:function(e,t,a){e.exports=a.p+"static/me-699c52065319573f815a4ba7b5cdb0e8.png"},246:function(e,t,a){"use strict";var n=a(247),r=a(0),o=a.n(r),i=a(263),c=a.n(i),l=a(240),s=a.n(l);function m(e){var t=e.description,a=e.lang,r=e.meta,i=e.title,l=n.data.site,m=t||l.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:i},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:m},{name:"og:url",content:"https://alessandrodorazio.it"},{name:"og:site_name",content:i},{name:"og:image",content:"https://alessandrodorazio.it"+s.a},{name:"twitter:image",content:"https://alessandrodorazio.it"+s.a}].concat(r)})}m.defaultProps={lang:"it",meta:[],description:"Sviluppatore full stack di Pescara. Siti Web, applicazione e gestionali innovativi."},t.a=m},247:function(e){e.exports={data:{site:{siteMetadata:{title:"Alessandro D'Orazio",description:"Sviluppatore full stack di Pescara. Siti Web, applicazione e gestionali innovativi.",author:"Alessandro D'Orazio"}}}}},248:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(240),i=a.n(o),c=a(241),l=a(249),s=a(250),m=a(258),p=a(239),d=a(253),u=a.n(d),h=a(259);var y=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).prev=void 0,a.prev=t.prev,"undefined"!=typeof window?a.prevPath=window.location.pathname:a.prevPath="/",a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(e,t){return r.a.createElement("div",null,r.a.createElement("header",{className:"pt-3 bg-primary pb-4"},r.a.createElement(c.a,null,r.a.createElement(l.a,{className:"align-items-center"},r.a.createElement(s.a,{xs:3,md:2},r.a.createElement(u.a,{fade:!0,to:"/"},r.a.createElement("img",{src:i.a,className:"img-fluid rounded-circle float-right",style:{maxWidth:"64px"},alt:"Profile photo"}))),r.a.createElement(s.a,{xs:7,md:8},r.a.createElement(u.a,{className:"text-white",fade:!0,to:"/"},r.a.createElement("strong",null,"Alessandro D'Orazio")),r.a.createElement("br",null),r.a.createElement("span",{className:"font-weight-light text-white-50"},"Web developer")),r.a.createElement(s.a,{xs:2},r.a.createElement(u.a,{id:"menuButton",state:{prevPath:this.prevPath},swipe:!0,direction:"Menu"===this.props.page?"up":"down",duration:.35,entryOffset:80,top:"Menu"===this.props.page?"entry":"exit",to:"Menu"===this.props.page?this.prev:"/menu",className:"link"},r.a.createElement(p.a,{className:"text-white",icon:"Menu"===this.props.page?h.faTimes:m.faBars,size:"2x"})))))))},n}(n.Component),E=(a(230),a(231),a(232),a(260)),f=a(261),g=a(262),v=a(256),b=a(257);var w=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement(c.a,{className:"mt-2"},r.a.createElement(l.a,{className:"align-items-center"},r.a.createElement(s.a,{md:6},r.a.createElement("p",{className:"text-muted"},(new Date).getFullYear()," Alessandro D'Orazio",r.a.createElement("br",null),r.a.createElement(p.a,{icon:g.faIdBadge,fixedWidth:!0})," DRZLSN99B03G482S",r.a.createElement("br",null),r.a.createElement(p.a,{icon:v.faPhonePlus,fixedWidth:!0})," ",r.a.createElement("a",{href:"tel:3898707248",className:"link-muted"},"389/8707248"),r.a.createElement("br",null),r.a.createElement(p.a,{icon:b.faEnvelopeOpenText,fixedWidth:!0})," ",r.a.createElement("a",{href:"mailto:me@alessandrodorazio.it",className:"link-muted"},"me@alessandrodorazio.it"))),r.a.createElement(s.a,{md:6},r.a.createElement("footer",{className:"sticky-top text-right mr-3 mb-2 text-muted font-weight-light"},"Made with ",r.a.createElement(p.a,{icon:f.a,className:"text-primary",fixedWidth:!0})," by Alessandro D'Orazio"))))},n}(n.Component),x=a(252);a.d(t,"a",function(){return k});var k=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return x.a.autoAddCss=!1,r.a.createElement("div",{className:"bg-light Site"},r.a.createElement(E.OutboundLink,{href:"https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/"}),r.a.createElement(y,{page:this.props.title,prev:this.props.prev}),r.a.createElement("div",{className:"Site-content"},r.a.createElement("main",null,this.props.children)),r.a.createElement(w,null))},n}(n.Component)},325:function(e,t,a){e.exports=a.p+"static/foto-189923a15ca71796da5aa50bc64600b4.png"}}]);
//# sourceMappingURL=component---src-pages-curriculum-js-2149a77979525d62247d.js.map