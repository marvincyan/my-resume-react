(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(7),l=a.n(r),c=(a(13),a(1)),o=a(2),s=a(4),m=a(3),d=a(5),u=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("header",null,i.a.createElement("div",{className:"col-10 offset-md-1 vCard"},i.a.createElement("div",{id:"hi"},"Hi, I'm"),i.a.createElement("div",{id:"fullName"},"MARVIN YAN"),i.a.createElement("div",{id:"jobTitle"},"CREATOR, WEB DEVELOPER"),i.a.createElement("div",{id:"objTitle"},"Objective:"),i.a.createElement("div",{id:"objective"},"To provide the best service I can and produce a great product. Collaboration is key to any endeavor and there's nothing more invigorating than collaborating together to make a better future."),i.a.createElement("button",{type:"button",className:"btn btn-outline-light",id:"hireMe","data-toggle":"modal","data-target":"#hireMeModal"},"HIRE ME"),i.a.createElement("hr",null),i.a.createElement("div",{id:"download"},i.a.createElement("a",{href:"http://www.marvinyan.com/MarvinYanResume.pdf",title:"Marvin Yan Resume"},"Download CV"))))}}]),t}(n.Component),p=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("button",{className:"btn btn-secondary btn-outline-light",type:"button","data-toggle":"collapse","data-target":"#collapseContent1","aria-expanded":"false"},i.a.createElement("i",{className:"far {this.props.navigation.icon} fa-3x"}),i.a.createElement("div",{className:"title"},this.props.navigation.title),i.a.createElement("div",{className:"plus"},"+"))}}]),t}(n.Component),E=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e;return this.props.navigation&&(e=this.props.navigation.map(function(e){return i.a.createElement(p,{key:e.title,navigation:e})})),i.a.createElement("div",{className:"row d-none d-md-block",id:"navContainer"},i.a.createElement("p",{id:"nav"},e))}}]),t}(n.Component),b=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("li",{className:"dr"},i.a.createElement("svg",null,i.a.createElement("circle",{cx:"10",cy:"11",r:"5",fill:"#004165"})),i.a.createElement("div",{className:"time-wrapper"},i.a.createElement("div",{className:"time"},this.props.experience.date)),i.a.createElement("div",{className:"flag-wrapper"},i.a.createElement("div",{className:"arrow-box d-none d-sm-block"}),i.a.createElement("span",{className:"flag"},this.props.experience.company),i.a.createElement("div",{className:"clearfix"})),i.a.createElement("div",{className:"desc"},i.a.createElement("span",null,this.props.experience.title),i.a.createElement("p",null,"Provide web and programming consultation services from frontend design and UI/UX components to backend design and database architecture. Develop and code based off of consultation. Implement and translate PSD comps to web code. Apply any responsive and adaptive design principles. Work with backend CMS systems including Drupal and WordPress.")))}}]),t}(n.Component),h=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e;return console.log(this.props.experiences),this.props.experiences&&(e=this.props.experiences.map(function(e){return i.a.createElement(b,{key:e.id,experience:e})})),i.a.createElement("ul",{className:"timeline"},e)}}]),t}(n.Component),v=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){switch(console.log(this.props.section),this.props.section.title){case"About":return i.a.createElement("div",null,"About");case"Resume":return i.a.createElement("div",{className:"collapse",id:"collapseContent2","data-parent":"#collapseContent"},i.a.createElement(h,{experiences:this.props.experiences}))}return i.a.createElement("div",null)}}]),t}(n.Component),g=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e,t=this;return this.props.sections&&(e=this.props.sections.map(function(e){return i.a.createElement(v,{key:e.title,section:e,experiences:t.props.experiences})})),i.a.createElement("div",{className:"row collapseContentRow"},e)}}]),t}(n.Component),f=(a(15),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"hire-me--modal modal fade in",id:"hireMeModal",role:"dialog"},i.a.createElement("div",{className:"modal-dialog modal-lg"},i.a.createElement("div",{className:"modal-content"},i.a.createElement("div",{className:"modal-header"},i.a.createElement("button",{className:"btn btn-outline-light closeButton","data-dismiss":"modal"},"close"),i.a.createElement("div",{className:"modal-title"},"HAVE A PROJECT?"),i.a.createElement("p",null,"I'm ready to help you. You just type in the details below.")),i.a.createElement("div",{className:"modal-body"},i.a.createElement("div",{className:"alert-box"}),i.a.createElement("form",{action:"#",method:"post",id:"popupContactForm",encType:"multipart/form-data"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-8 form-controls"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-6 name"},i.a.createElement("input",{type:"text",id:"hire_name",name:"hire_name",placeholder:"Your Name...",required:""})),i.a.createElement("div",{className:"col-md-6 email"},i.a.createElement("input",{type:"email",id:"hire_email",name:"hire_email",placeholder:"Please Enter Your Email...",required:""})),i.a.createElement("div",{className:"col-md-6 project-title"},i.a.createElement("input",{type:"text",id:"project_title",name:"project_title",placeholder:"Your Project Title...",required:""})),i.a.createElement("div",{className:"col-md-6 case-category"},i.a.createElement("select",{name:"hire_category",id:"hire_category",className:"bg-fa-caret-down SelectMenu",required:""},i.a.createElement("option",{value:""},"-Select Case Category-"),i.a.createElement("option",{value:"Web Development"},"Web Development"),i.a.createElement("option",{value:"UI/UX Designer"},"UI/UX Designer"),i.a.createElement("option",{value:"Seo"},"Seo")),i.a.createElement("span",{className:"ui-selectmenu-button ui-widget ui-state-default ui-corner-all",tabIndex:"0",id:"hire_category-button",role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":"hire_category-menu","aria-haspopup":"true"},i.a.createElement("span",{className:"ui-icon ui-icon-triangle-1-s"}),i.a.createElement("span",{className:"ui-selectmenu-text"},"-Select Case Category-"))),i.a.createElement("div",{className:"col-md-6 budget"},i.a.createElement("select",{name:"hire_budget",id:"hire_budget",className:"bg-fa-caret-down SelectMenu",required:""},i.a.createElement("option",{value:""},"-Budget-"),i.a.createElement("option",{value:"10-20"},"10-20"),i.a.createElement("option",{value:"20-30"},"20-30"),i.a.createElement("option",{value:"30-40"},"30-40")),i.a.createElement("span",{className:"ui-selectmenu-button ui-widget ui-state-default ui-corner-all",tabIndex:"0",id:"hire_budget-button",role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":"hire_budget-menu","aria-haspopup":"true"},i.a.createElement("span",{className:"ui-icon ui-icon-triangle-1-s"}),i.a.createElement("span",{className:"ui-selectmenu-text"},"-Budget-"))),i.a.createElement("div",{className:"col-md-6 date"},i.a.createElement("input",{type:"text",id:"hire_date",name:"hire_date",className:"DatePicker bg-fa-calender hasDatepicker",placeholder:"-Estimate Date-"})),i.a.createElement("div",{className:"col-md-12 message"},i.a.createElement("textarea",{id:"hairing_description",name:"hairing_description",rows:"9",placeholder:"Your Message..."})))),i.a.createElement("div",{className:"col-md-4 estimate-container"},i.a.createElement("div",{className:"estimate-text"},i.a.createElement("div",{className:"estimate-title"},"Is An Estimate Required?"),i.a.createElement("div",{className:"radio"},i.a.createElement("input",{type:"radio",className:"hire_estimate",id:"estimateZERO",name:"hire_estimate",value:"no",defaultChecked:!0}),i.a.createElement("label",{htmlFor:"estimateZERO"},"No Estimate Required")),i.a.createElement("div",{className:"radio"},i.a.createElement("input",{type:"radio",className:"hire_estimate",name:"hire_estimate",value:"yes",id:"estimateONE"}),i.a.createElement("label",{htmlFor:"estimateONE"},"Yes, I require an estimate cost of services. I understand I need to allow 2-4 business days to receive the estimate.")),i.a.createElement("button",{type:"submit",className:"btn btn-outline-dark w-100",value:"SEND OFFER"},"SEND OFFER"),i.a.createElement("div",{id:"hire-mess"})))))))))}}]),t}(n.Component)),N=(a(17),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={experiences:[],navigation:[]},e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){this.setState({experiences:[{id:1,date:"Jul 2016 - Present",company:"Marvin Yan Web Consulting",title:"Owner"},{id:2,date:"May 2015 - Jul 2016",company:"SpiritClips at Hallmark",title:"Senior Front End Developer"},{id:3,date:"Oct 2014 - Dec 2014",company:"Oversee.net",title:"Full Stack Developer"}],navigation:[{title:"About",icon:"fa-smile-beam"},{title:"Resume",icon:"fa-keyboard"},{title:"Let's Talk",icon:"fa-comments"}]})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(u,null),i.a.createElement("div",{className:"col-right"},i.a.createElement("div",{className:"container",id:"collapseContent"},i.a.createElement(E,{navigation:this.state.navigation}),i.a.createElement(g,{sections:this.state.navigation,experiences:this.state.experiences}))),i.a.createElement(f,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(19)}},[[8,2,1]]]);
//# sourceMappingURL=main.37981bb7.chunk.js.map