(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/MarvinYanResumeNoRef.28e32c1a.pdf"},22:function(e,t,a){e.exports=a(44)},27:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){},37:function(e,t,a){},40:function(e,t,a){},42:function(e,t){function a(){var e=$(window).width(),t=$(window).height();e<576&&$("body, #root, .App").height(t+"px")}$(document).ready(function(){a(),$(window).resize(function(){a()}),$("#mobileNavButton").click(function(){$("#mobileNav").show().animate({left:"25%"})}),$("#mobileNavClose, #mobileNav li").click(function(){var e=$(this).data("target");$(".collapse").hide(),$("#mobileNav").animate({left:"100%"},400,function(){$(this).hide(),e&&e.length>0?($(".col-right").show(),$(e).show(),$("header").css("height","300px"),$("#objTitle, #objective").hide()):($(".col-right").hide(),$("header").css("height","100%"),$("#objTitle, #objective").show())})})})},43:function(e,t){$(document).ready(function(){$(".dr, .dl").prepend('<svg><circle cx="10" cy="11" r="5" /></svg>')})},44:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(9),l=a.n(r),o=(a(27),a(29),a(17)),c=a(3),s=a(4),m=a(6),d=a(5),u=a(7),p=a(10),h=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e;return this.props.navigation&&(e=this.props.navigation.map(function(e){return i.a.createElement("li",{key:e.id,"data-target":"#collapseContent"+e.id},e.title)})),i.a.createElement("div",null,i.a.createElement("button",{className:"btn btn-outline-primary d-xs-block d-sm-none",id:"mobileNavButton"},"menu"),i.a.createElement("div",{id:"mobileNav",className:"h-100 d-xs-block d-sm-none"},i.a.createElement("button",{id:"mobileNavClose",className:"btn btn-outline-secondary float-right"},"close"),i.a.createElement("ul",null,i.a.createElement("li",null,"HOME"),e)))}}]),t}(n.Component),E=a(19),v=a.n(E),g=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("header",null,i.a.createElement("div",{className:"col-10 offset-md-1 vCard"},i.a.createElement("div",{id:"hi"},"Hi, I'm"),i.a.createElement("div",{id:"fullName"},"MARVIN YAN"),i.a.createElement("div",{id:"jobTitle"},"CREATOR, WEB DEVELOPER"),i.a.createElement("div",{id:"objTitle"},"Objective:"),i.a.createElement("div",{id:"objective"},"To provide the best service I can and produce a great product. Collaboration is key to any endeavor and there's nothing more invigorating than collaborating together to make a better future."),i.a.createElement("button",{type:"button",className:"btn btn-outline-light",id:"hireMe","data-toggle":"modal","data-target":"#hireMeModal",onClick:this.props.changeHire},"HIRE ME"),i.a.createElement("hr",null),i.a.createElement("div",{id:"download"},i.a.createElement("a",{download:!0,href:v.a,title:"Marvin Yan Resume"},"Download CV"))))}}]),t}(n.Component),b=a(20),f=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("button",{className:"btn btn-secondary btn-outline-light",type:"button","data-toggle":"collapse","data-target":"#collapseContent"+this.props.navigation.id,"aria-expanded":"false"},i.a.createElement(b.a,{icon:["far",this.props.navigation.icon],size:"3x"}),i.a.createElement("div",{className:"title"},this.props.navigation.title),i.a.createElement("div",{className:"plus"},"+"))}}]),t}(n.Component),y=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e;return this.props.navigation&&(e=this.props.navigation.map(function(e){return i.a.createElement(f,{key:e.title,navigation:e})})),i.a.createElement("div",{className:"row d-none d-md-block",id:"navContainer"},i.a.createElement("p",{id:"nav"},e))}}]),t}(n.Component),w=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t=this.props.experience.id%2?"dr":"dl";return e=this.props.experience.description.map(function(e){return i.a.createElement("p",{key:e},e)}),i.a.createElement("li",{className:t},i.a.createElement("svg",null,i.a.createElement("circle",{cx:"10",cy:"11",r:"5",fill:"#004165"})),i.a.createElement("div",{className:"time-wrapper"},i.a.createElement("div",{className:"time"},this.props.experience.date)),i.a.createElement("div",{className:"flag-wrapper"},i.a.createElement("div",{className:"arrow-box d-none d-sm-block"}),i.a.createElement("p",null,i.a.createElement("span",{className:"flag"},this.props.experience.company)),i.a.createElement("div",{className:"clearfix"})),i.a.createElement("div",{className:"desc"},i.a.createElement("div",{className:"jobTitle"},this.props.experience.title),e))}}]),t}(n.Component),N=(a(33),function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e;return this.props.experiences&&(e=this.props.experiences.map(function(e){return i.a.createElement(w,{key:e.id,experience:e})})),i.a.createElement("ul",{className:"timeline"},e)}}]),t}(n.Component)),k=window.location.origin+window.location.pathname,j=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("form",{action:"https://formspree.io/marvincyan@gmail.com",method:"post",className:"contactForm"},i.a.createElement("input",{type:"hidden",name:"_next",value:k+"?form=submitted"}),i.a.createElement("input",{type:"hidden",name:"_format",value:"plain"}),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-6"},i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"text",name:"Name",size:"40",className:"form-control","aria-required":"true","aria-invalid":"false",placeholder:"Your Name...",required:!0}))),i.a.createElement("div",{className:"col-md-6"},i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"email",name:"_replyto",size:"40",className:"form-control","aria-required":"true","aria-invalid":"false",placeholder:"Please Enter Your Email...",required:!0})))),i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"text",name:"_subject",size:"40",className:"form-control","aria-required":"true","aria-invalid":"false",placeholder:"Please Enter a Subject...",required:!0})),i.a.createElement("div",{className:"form-group"},i.a.createElement("textarea",{name:"Message",cols:"40",rows:"10",className:"form-control","aria-required":"true","aria-invalid":"false",placeholder:"Your Message..."})),i.a.createElement("p",null,i.a.createElement("button",{type:"submit",className:"btn btn-light w-25",value:"SEND"},"SEND"),i.a.createElement("span",{className:"ajax-loader"})))}}]),t}(n.Component),O=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){switch(this.props.section.title){case"About":return i.a.createElement("div",{className:"collapse show",id:"collapseContent"+this.props.section.id,"data-parent":"#collapseContent"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"col-12"},i.a.createElement("div",{id:"contentContainer"},i.a.createElement("p",{className:"title"},"Welcome to my corner of the interwebs..."),i.a.createElement("p",null,"You are currently viewing this site coded in ",i.a.createElement("a",{href:"https://reactjs.org",target:"_blank"},"React.js"),". If you want to see the source code just ",i.a.createElement("a",{href:"https://github.com/marvincyan/my-resume-react",target:"_blank"},"click here"),"."),i.a.createElement("p",null,"If you want to see this site built on ",i.a.createElement("a",{href:"https://reactjs.org",target:"_blank"},"React"),"/",i.a.createElement("a",{href:"https://redux.js.org/",target:"_blank"},"Redux"),": [",i.a.createElement("a",{href:"https://marvincyan.github.io/my-resume-react-redux/",target:"_blank"},"website"),"] [",i.a.createElement("a",{href:"https://github.com/marvincyan/my-resume-react-redux",target:"_blank"},"source"),"]."),i.a.createElement("p",null,"If you want to see this site built on ",i.a.createElement("a",{href:"https://wordpress.org/",target:"_blank"},"WordPress"),": [",i.a.createElement("a",{href:"http://www.marvinyan.com",target:"_blank"},"website"),"] [",i.a.createElement("a",{href:"https://github.com/marvincyan/my-resume-wordpress",target:"_blank"},"source"),"]."),i.a.createElement("hr",null),i.a.createElement("p",{className:"title"},"A little something about me\u2026"),i.a.createElement("p",null,"Starting out as a Systems Administrator 20 some odd years ago, I made my way towards backend development and eventually frontend development where, in comparison, is what I enjoy the most. I am self-taught and love learning new languages to help companies achieve their goals."),i.a.createElement("p",null,"I am currently teaching myself to code iOS apps in ",i.a.createElement("a",{href:"https://developer.apple.com/xcode/",target:"_blank"},"Xcode/Swift"),"."),i.a.createElement("p",null,"To give my brain a break from coding, I'll usually do some sketching or head out and do some street photography."),i.a.createElement("p",null,"Head on over to my ",i.a.createElement("a",{href:"https://www.instagram.com/eviefied/",target:"_blank"},"Instagram@eviefied")," account if you want to see some of my sketchings."),i.a.createElement("p",null,"I have a separate website for my photography called ",i.a.createElement("a",{href:"http://themarvinyanprojects.com",target:"_blank"},"The Marvin Yan Projects")," as well as a separate ",i.a.createElement("a",{href:"https://www.instagram.com/MarvinYanProjx/",target:"_blank"},"Instagram@MarvinYanProjx")," account."),i.a.createElement("hr",null),i.a.createElement("p",{className:"title"},"Fun Facts..."),i.a.createElement("ul",{id:"aboutMeList"},i.a.createElement("li",null,i.a.createElement("span",null,"Photography")),i.a.createElement("li",null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("span",null,"Currently using:")," Fuji X-T1, Fuji 23mm f2, Fuji 18-55mm"),i.a.createElement("li",null,i.a.createElement("span",null,"Would like to upgrade:")," Fuji X-E3, Summilux 21mm f2"),i.a.createElement("li",null,i.a.createElement("span",null,"Also using:")," Nikon FM10, Nikkor 18-55mm, Fuji Instax 90"))),i.a.createElement("li",null,i.a.createElement("span",null,"Sketching")),i.a.createElement("li",null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("span",null,"Currently using:")," Pentel GraphGear 1000 0.5"),i.a.createElement("li",null,i.a.createElement("span",null,"Would like to experiment with:")," Gouache")))))))));case"Resume":return i.a.createElement("div",{className:"collapse",id:"collapseContent"+this.props.section.id,"data-parent":"#collapseContent"},i.a.createElement(N,{experiences:this.props.experiences}));case"Let's Talk":return i.a.createElement("div",{className:"collapse",id:"collapseContent"+this.props.section.id,"data-parent":"#collapseContent"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"col-xs-12 col-sm-8"},i.a.createElement("div",{id:"contactTitle"},"Got a project? Let's create something awesome together!")))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"col-xs-12 col-sm-8 float-left"},i.a.createElement(j,null)),i.a.createElement("div",{className:"d-none d-sm-block col-4 float-left"},i.a.createElement("div",{id:"bringTitle"},"Bring me in for:"),i.a.createElement("ul",{id:"bringList"},i.a.createElement("li",null,"Pitchwork or projects"),i.a.createElement("li",null,"Ideas or concept development"),i.a.createElement("li",null,"Experience design"),i.a.createElement("li",null,"Art direction"),i.a.createElement("li",null,"Creative strategy"),i.a.createElement("li",null,"UX"),i.a.createElement("li",null,"Design"),i.a.createElement("li",null,"Illustration"),i.a.createElement("li",null,"Storyboarding"))))))}return i.a.createElement("div",null)}}]),t}(n.Component),S=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t=this;return this.props.sections&&(e=this.props.sections.map(function(e){return i.a.createElement(O,{key:e.title,section:e,experiences:t.props.experiences})})),i.a.createElement("div",null,i.a.createElement("div",{className:"row clearfix"}),i.a.createElement("div",{className:"collapseContentRow"},e))}}]),t}(n.Component),C=a(8),x=window.location.origin+window.location.pathname,P=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("form",{action:"https://formspree.io/marvincyan@gmail.com",method:"post"},i.a.createElement("input",{type:"hidden",name:"_next",value:x+"?form=submitted"}),i.a.createElement("input",{type:"hidden",name:"_format",value:"plain"}),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-8"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-6"},i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"text",name:"Name",className:"form-control",placeholder:"Your Name...",required:!0}))),i.a.createElement("div",{className:"col-md-6"},i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"email",name:"_replyto",className:"form-control",placeholder:"Please Enter Your Email...",required:!0}))),i.a.createElement("div",{className:"col-md-6"},i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"text",name:"_subject",className:"form-control",placeholder:"Your Project Title...",required:!0}))),i.a.createElement("div",{className:"col-md-6"},i.a.createElement("div",{className:"form-group"},i.a.createElement("select",{name:"Category",className:"form-control",defaultValue:"",required:!0},i.a.createElement("option",{value:"",disabled:!0},"-Project Category-"),i.a.createElement("option",{value:"Web Development"},"Web Development"),i.a.createElement("option",{value:"UI/UX Designer"},"UI/UX Designer"),i.a.createElement("option",{value:"SEO"},"SEO"),i.a.createElement("option",{value:"WordPress"},"WordPress"),i.a.createElement("option",{value:"Other"},"Other")))),i.a.createElement("div",{className:"col-md-6"},i.a.createElement("div",{className:"form-group"},i.a.createElement("select",{name:"Budget",className:"form-control",defaultValue:"",required:!0},i.a.createElement("option",{value:"",disabled:!0},"-Budget-"),i.a.createElement("option",{value:"< $100"},"< $100"),i.a.createElement("option",{value:"$100 - $500"},"$100 - $500"),i.a.createElement("option",{value:"$500 - $1000"},"$500 - $1000"),i.a.createElement("option",{value:"$1000 - $2000"},"$1000 - $2000"),i.a.createElement("option",{value:"$2000 - $5000"},"$2000 - $5000"),i.a.createElement("option",{value:"$5000+"},"$5000+")))),i.a.createElement("div",{className:"col-md-6"},i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"text",name:"Date",className:"form-control",placeholder:"-Estimate Date-"}))),i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"form-group"},i.a.createElement("textarea",{name:"Description",rows:"9",className:"form-control",placeholder:"Your Message..."}))))),i.a.createElement("div",{className:"col-md-4 estimate-container"},i.a.createElement("div",{className:"estimate-text"},i.a.createElement("div",{className:"estimate-title"},"Is An Estimate Required?"),i.a.createElement("div",{className:"radio"},i.a.createElement("input",{type:"radio",id:"estimateZERO",name:"Estimate",value:"No",defaultChecked:!0}),i.a.createElement("label",{htmlFor:"estimateZERO"},"No Estimate Required")),i.a.createElement("div",{className:"radio"},i.a.createElement("input",{type:"radio",id:"estimateONE",name:"Estimate",value:"Yes"}),i.a.createElement("label",{htmlFor:"estimateONE"},"Yes, I require an estimate cost of services. I understand I need to allow 2-4 business days to receive the estimate.")),i.a.createElement("button",{type:"submit",className:"btn btn-outline-dark w-100",value:"SEND OFFER"},"SEND OFFER")))))}}]),t}(n.Component),M=(a(35),function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=window.location.href,t=new URL(e).searchParams.get("form");t&&"submitted"===t&&this.props.changeThanks()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(C.b,{size:"lg",isOpen:this.props.modals.hire},i.a.createElement(C.d,null,i.a.createElement(C.a,{color:"outline-light",className:"closeButton",onClick:this.props.changeHire},"close"),i.a.createElement("div",{className:"modal-title"},"HAVE A PROJECT?"),i.a.createElement("p",null,"I'm ready to help you. You just type in the details below.")),i.a.createElement(C.c,null,i.a.createElement(P,null))),i.a.createElement(C.b,{size:"lg",className:"thanks",isOpen:this.props.modals.thanks},i.a.createElement(C.d,null,i.a.createElement(C.a,{color:"outline-light",className:"closeButton",onClick:this.props.changeThanks},"close"),"Your form has been submitted!"),i.a.createElement(C.c,null,i.a.createElement("p",null,"Thank you for contacting me. I will get back to you as soon as possible."),i.a.createElement("p",null,"I look forward to working with you!"))))}}]),t}(n.Component)),$=a(11),R=a(12);a(37),a(40);a(42),a(43),$.b.add(R.d,R.c,R.b,R.a);var A=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).state={experiences:[],navigation:[],modals:{hire:!1,thanks:!1}},e.changeHireState=e.changeHireState.bind(Object(p.a)(Object(p.a)(e))),e.changeThanksState=e.changeThanksState.bind(Object(p.a)(Object(p.a)(e))),e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.setState({experiences:[{id:1,date:"Jul 2016 - Present",company:"Marvin Yan Web Consulting",title:"Web Consultant and Developer",description:["Provide web and programming consultation services from frontend design and UI/UX components to backend design and database architecture. Develop and code based off of consultation. Implement and translate PSD comps to web code. Apply any responsive and adaptive design principles. Work with backend CMS systems including Drupal and WordPress."]},{id:2,date:"May 2015 - Jul 2016",company:"SpiritClips by Hallmark",title:"Senior Front End Developer",description:["Implemented and translated PSD comps and wireframes into semantically correct web templates. Applied responsive and adaptive design principles. Coded necessary middle and sometimes backend requirements necessary for frontend."]},{id:3,date:"Oct 2014 - Dec 2014",company:"Starkey Hearing Foundation",title:"Frontend Web Developer",description:["Short-term contract to help launch their website ListenCarefully.org. Helped with implementing frontend design and development on a WordPress CMS system. Aided with searching, installing and customizing WordPress plugins. Helped with bug discovery and fixing."]},{id:4,date:"Jul 2008 \u2013 Jul 2014",company:"Oversee.net",title:"Full Stack Developer",description:["Short-term contract to help launch their website ListenCarefully.org. Helped with implementing frontend design and development on a WordPress CMS system. Aided with searching, installing and customizing WordPress plugins. Helped with bug discovery and fixing."]},{id:5,date:"Sep 2007 \u2013 Jan 2008",company:"Griffith Park Media",title:"",description:["Responsibilities: Developed/designed internal administration scripts, frontend scripts, and database. Maintained/updated working integrity of current scripts and programs.","Languages/Software: PHP, HTML, CSS, jQuery, JavaScript, PEAR, MySQL, SMARTY"]},{id:6,date:"Nov 2006 \u2013 Mar 2007",company:"Fitnessblowout.com",title:"Web Developer",description:["Responsibilities: Developed and maintained internal administration scripts. Maintained and updated products listed on website.","Languages/Software: PHP, HTML, CSS, jQuery, JavaScript, MySQL, Xcart"]},{id:7,date:"Aug 2006 \u2013 Oct 2006",company:"NBC Universal",title:"Web Developer",description:["Responsibilities: Maintained and designed administration tools according to Web Producer\u2019s needs. Database upkeep and management. Produced web pages from templates and content from the database.","Accomplishments: Reorganized database for Saturday Night Live. Designed and created voting module and video/photo upload module.","Languages/Software: Zend, PHP, HTML, CSS, JavaScript, PEAR, MySQL, SMARTY"]},{id:8,date:"Aug 2005 \u2013 Aug 2006",company:"WPT Enterprises",title:"Systems Engineer",description:["Responsibilities: Uptime management, equipment and software maintenance, email delivery continuance, domain name management, networking administrative duties, security design and upkeep.","Accomplishments: Designed and programmed major features on ChipLeaders.com including database structure, search functionality and image uploading tool. Created web-based image tagging/organizing administrative tool. Designed networking topology.","Languages/Software: Zend, PHP, HTML, CSS, JavaScript, PEAR, MySQL, SMARTY, mod_rewrite, Photoshop, Dreamweaver, Fireworks, BASH"]},{id:9,date:"Jul 2005 \u2013 Jul 2006",company:"ValueClick",title:"Programmer and Network Administrator",description:["Responsibilities: Uptime management, equipment and software maintenance, email delivery continuance, domain name management, suppression file administration, networking administrative duties, security design and upkeep.","Accomplishments: Designed and implemented B2B and B2C email management system, developed chargeback and refund system for E-Commerce division, designed and implemented email tracking and data relay systems.","Languages/Software: PHP, HTML, CSS, JavaScript, PEAR, MySQL, SMARTY, PERL, mod_rewrite, mod_perl, mod_ssl, memcached, BASH"]}],navigation:[{id:1,title:"About",icon:"smile-beam"},{id:2,title:"Resume",icon:"keyboard"},{id:3,title:"Let's Talk",icon:"comments"}]})}},{key:"changeHireState",value:function(){this.setState({modals:Object(o.a)({},this.state.modals,{hire:!this.state.modals.hire})})}},{key:"changeThanksState",value:function(){this.setState({modals:Object(o.a)({},this.state.modals,{thanks:!this.state.modals.thanks})})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("div",{id:"background"}),i.a.createElement(h,{navigation:this.state.navigation}),i.a.createElement(g,{changeHire:this.changeHireState}),i.a.createElement("div",{className:"col-right"},i.a.createElement("div",{className:"container",id:"collapseContent"},i.a.createElement(y,{navigation:this.state.navigation}),i.a.createElement(S,{sections:this.state.navigation,experiences:this.state.experiences}))),i.a.createElement(M,{modals:this.state.modals,changeHire:this.changeHireState,changeThanks:this.changeThanksState}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,2,1]]]);
//# sourceMappingURL=main.5028a5c8.chunk.js.map