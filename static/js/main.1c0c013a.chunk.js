(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(29)},17:function(e,t,a){},22:function(e,t,a){},24:function(e,t,a){},26:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(10),l=a.n(r),o=(a(17),a(2)),c=a(3),s=a(5),m=a(4),d=a(6),p=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("header",null,i.a.createElement("div",{className:"col-10 offset-md-1 vCard"},i.a.createElement("div",{id:"hi"},"Hi, I'm"),i.a.createElement("div",{id:"fullName"},"MARVIN YAN"),i.a.createElement("div",{id:"jobTitle"},"CREATOR, WEB DEVELOPER"),i.a.createElement("div",{id:"objTitle"},"Objective:"),i.a.createElement("div",{id:"objective"},"To provide the best service I can and produce a great product. Collaboration is key to any endeavor and there's nothing more invigorating than collaborating together to make a better future."),i.a.createElement("button",{type:"button",className:"btn btn-outline-light",id:"hireMe","data-toggle":"modal","data-target":"#hireMeModal"},"HIRE ME"),i.a.createElement("hr",null),i.a.createElement("div",{id:"download"},i.a.createElement("a",{download:!0,href:"MarvinYanResume.pdf",title:"Marvin Yan Resume"},"Download CV"))))}}]),t}(n.Component),u=a(11),v=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("button",{className:"btn btn-secondary btn-outline-light",type:"button","data-toggle":"collapse","data-target":"#collapseContent"+this.props.navigation.id,"aria-expanded":"false"},i.a.createElement(u.a,{icon:["far",this.props.navigation.icon],size:"3x"}),i.a.createElement("div",{className:"title"},this.props.navigation.title),i.a.createElement("div",{className:"plus"},"+"))}}]),t}(n.Component),E=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e;return this.props.navigation&&(e=this.props.navigation.map(function(e){return i.a.createElement(v,{key:e.title,navigation:e})})),i.a.createElement("div",{className:"row d-none d-md-block",id:"navContainer"},i.a.createElement("p",{id:"nav"},e))}}]),t}(n.Component),b=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e,t=this.props.experience.id%2?"dr":"dl";return e=this.props.experience.description.map(function(e){return i.a.createElement("p",{key:e},e)}),i.a.createElement("li",{className:t},i.a.createElement("svg",null,i.a.createElement("circle",{cx:"10",cy:"11",r:"5",fill:"#004165"})),i.a.createElement("div",{className:"time-wrapper"},i.a.createElement("div",{className:"time"},this.props.experience.date)),i.a.createElement("div",{className:"flag-wrapper"},i.a.createElement("div",{className:"arrow-box d-none d-sm-block"}),i.a.createElement("p",null,i.a.createElement("span",{className:"flag"},this.props.experience.company)),i.a.createElement("div",{className:"clearfix"})),i.a.createElement("div",{className:"desc"},i.a.createElement("div",{className:"jobTitle"},this.props.experience.title),e))}}]),t}(n.Component),g=(a(22),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e;return this.props.experiences&&(e=this.props.experiences.map(function(e){return i.a.createElement(b,{key:e.id,experience:e})})),i.a.createElement("ul",{className:"timeline"},e)}}]),t}(n.Component)),h=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("form",{action:"",method:"post",className:"contactForm"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-6"},i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"text",name:"contactName",size:"40",className:"form-control","aria-required":"true","aria-invalid":"false",placeholder:"Your Name..."}))),i.a.createElement("div",{className:"col-md-6"},i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"email",name:"contactEmail",size:"40",className:"form-control","aria-required":"true","aria-invalid":"false",placeholder:"Please Enter Your Email..."})))),i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"text",name:"contactSubject",size:"40",className:"form-control","aria-required":"true","aria-invalid":"false",placeholder:"Please Enter a Subject..."})),i.a.createElement("div",{className:"form-group"},i.a.createElement("textarea",{name:"contactMessage",cols:"40",rows:"10",className:"form-control","aria-required":"true","aria-invalid":"false",placeholder:"Your Message..."})),i.a.createElement("p",null,i.a.createElement("button",{type:"submit",className:"btn btn-light w-25",value:"SEND"},"SEND"),i.a.createElement("span",{className:"ajax-loader"})))}}]),t}(n.Component),f=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){switch(this.props.section.title){case"About":return i.a.createElement("div",{className:"collapse",id:"collapseContent"+this.props.section.id,"data-parent":"#collapseContent"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"col-12"},i.a.createElement("div",{id:"contentContainer"},i.a.createElement("div",{id:"title"},"A little something about me\u2026"),i.a.createElement("p",null,"Starting out as a Systems Administrator 20 some odd years ago, I made my way towards backend development and eventually frontend development where, in comparison, is what I enjoy the most. I am self-taught and love learning new languages to help companies achieve their goals. Currently, I am teaching myself to code iOS apps in Xcode/Swift. To give my brain a break from coding, I enjoy photography, drawing and traveling."))))));case"Resume":return i.a.createElement("div",{className:"collapse",id:"collapseContent"+this.props.section.id,"data-parent":"#collapseContent"},i.a.createElement(g,{experiences:this.props.experiences}));case"Let's Talk":return i.a.createElement("div",{className:"collapse",id:"collapseContent"+this.props.section.id,"data-parent":"#collapseContent"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"col-xs-12 col-sm-8"},i.a.createElement("div",{id:"contactTitle"},"Got a project? Let's create something awesome together!")))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"col-xs-12 col-sm-8 float-left"},i.a.createElement(h,null)),i.a.createElement("div",{className:"d-none d-sm-block col-4 float-left"},i.a.createElement("div",{id:"bringTitle"},"Bring me in for:"),i.a.createElement("ul",{id:"bringList"},i.a.createElement("li",null,"Pitchwork or projects"),i.a.createElement("li",null,"Ideas or concept development"),i.a.createElement("li",null,"Experience design"),i.a.createElement("li",null,"Art direction"),i.a.createElement("li",null,"Creative strategy"),i.a.createElement("li",null,"UX"),i.a.createElement("li",null,"Design"),i.a.createElement("li",null,"Illustration"),i.a.createElement("li",null,"Storyboarding"))))))}return i.a.createElement("div",null)}}]),t}(n.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e,t=this;return this.props.sections&&(e=this.props.sections.map(function(e){return i.a.createElement(f,{key:e.title,section:e,experiences:t.props.experiences})})),i.a.createElement("div",null,i.a.createElement("div",{className:"row clearfix"}),i.a.createElement("div",{className:"collapseContentRow"},e))}}]),t}(n.Component),N=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("form",{action:"#",method:"post",id:"popupContactForm"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-8"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-6"},i.a.createElement("input",{type:"text",name:"name",className:"form-control",placeholder:"Your Name...",required:""})),i.a.createElement("div",{className:"col-md-6"},i.a.createElement("input",{type:"email",name:"email",className:"form-control",placeholder:"Please Enter Your Email...",required:""})),i.a.createElement("div",{className:"col-md-6"},i.a.createElement("input",{type:"text",name:"project_title",className:"form-control",placeholder:"Your Project Title...",required:""})),i.a.createElement("div",{className:"col-md-6"},i.a.createElement("select",{name:"category",className:"form-control",required:""},i.a.createElement("option",{value:""},"-Select Case Category-"),i.a.createElement("option",{value:"Web Development"},"Web Development"),i.a.createElement("option",{value:"UI/UX Designer"},"UI/UX Designer"),i.a.createElement("option",{value:"Seo"},"Seo"))),i.a.createElement("div",{className:"col-md-6"},i.a.createElement("select",{name:"budget",className:"form-control",required:""},i.a.createElement("option",{value:""},"-Budget-"),i.a.createElement("option",{value:"10-20"},"10-20"),i.a.createElement("option",{value:"20-30"},"20-30"),i.a.createElement("option",{value:"30-40"},"30-40"))),i.a.createElement("div",{className:"col-md-6"},i.a.createElement("input",{type:"text",name:"date",className:"form-control",placeholder:"-Estimate Date-"})),i.a.createElement("div",{className:"col-md-12"},i.a.createElement("textarea",{name:"description",rows:"9",className:"form-control",placeholder:"Your Message..."})))),i.a.createElement("div",{className:"col-md-4 estimate-container"},i.a.createElement("div",{className:"estimate-text"},i.a.createElement("div",{className:"estimate-title"},"Is An Estimate Required?"),i.a.createElement("div",{className:"radio"},i.a.createElement("input",{type:"radio",id:"estimateZERO",name:"estimate",value:"no",defaultChecked:!0}),i.a.createElement("label",{htmlFor:"estimateZERO"},"No Estimate Required")),i.a.createElement("div",{className:"radio"},i.a.createElement("input",{type:"radio",id:"estimateONE",name:"estimate",value:"yes"}),i.a.createElement("label",{htmlFor:"estimateONE"},"Yes, I require an estimate cost of services. I understand I need to allow 2-4 business days to receive the estimate.")),i.a.createElement("button",{type:"submit",className:"btn btn-outline-dark w-100",value:"SEND OFFER"},"SEND OFFER")))))}}]),t}(n.Component),j=(a(24),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"hire-me--modal modal fade in",id:"hireMeModal",role:"dialog"},i.a.createElement("div",{className:"modal-dialog modal-lg"},i.a.createElement("div",{className:"modal-content"},i.a.createElement("div",{className:"modal-header"},i.a.createElement("button",{className:"btn btn-outline-light closeButton","data-dismiss":"modal"},"close"),i.a.createElement("div",{className:"modal-title"},"HAVE A PROJECT?"),i.a.createElement("p",null,"I'm ready to help you. You just type in the details below.")),i.a.createElement("div",{className:"modal-body"},i.a.createElement("div",{className:"alert-box"}),i.a.createElement(N,null)))))}}]),t}(n.Component)),w=a(7),O=a(8);a(26);w.b.add(O.d,O.c,O.b,O.a);var S=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={experiences:[],navigation:[]},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.setState({experiences:[{id:1,date:"Jul 2016 - Present",company:"Marvin Yan Web Consulting",title:"Web Consultant and Developer",description:["Provide web and programming consultation services from frontend design and UI/UX components to backend design and database architecture. Develop and code based off of consultation. Implement and translate PSD comps to web code. Apply any responsive and adaptive design principles. Work with backend CMS systems including Drupal and WordPress."]},{id:2,date:"May 2015 - Jul 2016",company:"SpiritClips at Hallmark",title:"Senior Front End Developer",description:["Implemented and translated PSD comps and wireframes into semantically correct web templates. Applied responsive and adaptive design principles. Coded necessary middle and sometimes backend requirements necessary for frontend."]},{id:3,date:"Oct 2014 - Dec 2014",company:"Oversee.net",title:"Full Stack Developer",description:["Short-term contract to help launch their website ListenCarefully.org. Helped with implementing frontend design and development on a WordPress CMS system. Aided with searching, installing and customizing WordPress plugins. Helped with bug discovery and fixing."]},{id:4,date:"Sep 2007 \u2013 Jan 2008",company:"Griffith Park Media",title:"",description:["Responsibilities: Developed/designed internal administration scripts, frontend scripts, and database. Maintained/updated working integrity of current scripts and programs.","Languages/Software: PHP, HTML, CSS, jQuery, JavaScript, PEAR, MySQL, SMARTY"]},{id:5,date:"Nov 2006 \u2013 Mar 2007",company:"Fitnessblowout.com",title:"Web Developer",description:["Responsibilities: Developed and maintained internal administration scripts. Maintained and updated products listed on website.","Languages/Software: PHP, HTML, CSS, jQuery, JavaScript, MySQL, Xcart"]},{id:6,date:"Aug 2006 \u2013 Oct 2006",company:"NBC Universal",title:"Web Developer",description:["Responsibilities: Maintained and designed administration tools according to Web Producer\u2019s needs. Database upkeep and management. Produced web pages from templates and content from the database.","Accomplishments: Reorganized database for Saturday Night Live. Designed and created voting module and video/photo upload module.","Languages/Software: Zend, PHP, HTML, CSS, JavaScript, PEAR, MySQL, SMARTY"]},{id:7,date:"Aug 2005 \u2013 Aug 2006",company:"WPT Enterprises",title:"Systems Engineer",description:["Responsibilities: Uptime management, equipment and software maintenance, email delivery continuance, domain name management, networking administrative duties, security design and upkeep.","Accomplishments: Designed and programmed major features on ChipLeaders.com including database structure, search functionality and image uploading tool. Created web-based image tagging/organizing administrative tool. Designed networking topology.","Languages/Software: Zend, PHP, HTML, CSS, JavaScript, PEAR, MySQL, SMARTY, mod_rewrite, Photoshop, Dreamweaver, Fireworks, BASH"]},{id:8,date:"Jul 2006 \u2013 Jul 2005",company:"ValueClick",title:"Programmer and Network Administrator",description:["Responsibilities: Uptime management, equipment and software maintenance, email delivery continuance, domain name management, suppression file administration, networking administrative duties, security design and upkeep.","Accomplishments: Designed and implemented B2B and B2C email management system, developed chargeback and refund system for E-Commerce division, designed and implemented email tracking and data relay systems.","Languages/Software: PHP, HTML, CSS, JavaScript, PEAR, MySQL, SMARTY, PERL, mod_rewrite, mod_perl, mod_ssl, memcached, BASH"]}],navigation:[{id:1,title:"About",icon:"smile-beam"},{id:2,title:"Resume",icon:"keyboard"},{id:3,title:"Let's Talk",icon:"comments"}]})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(p,null),i.a.createElement("div",{className:"col-right"},i.a.createElement("div",{className:"container",id:"collapseContent"},i.a.createElement(E,{navigation:this.state.navigation}),i.a.createElement(y,{sections:this.state.navigation,experiences:this.state.experiences}))),i.a.createElement(j,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,2,1]]]);
//# sourceMappingURL=main.1c0c013a.chunk.js.map