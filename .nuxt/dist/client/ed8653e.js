(window.webpackJsonp=window.webpackJsonp||[]).push([[11,10],{345:function(e,t,r){var content=r(356);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(71).default)("a2aeb828",content,!0,{sourceMap:!1})},354:function(e,t,r){e.exports=r.p+"img/thanks.19c7dc4.png"},355:function(e,t,r){"use strict";r(345)},356:function(e,t,r){var o=r(70)(!1);o.push([e.i,'.thankyou .container{display:flex;align-items:center;justify-content:center}.thankyou .container img{height:5rem;-o-object-fit:contain;object-fit:contain}.thankyou .container h4{font-family:"Libre Baskerville",serif;font-size:2rem;font-weight:700;color:#463989}.thankyou .container p{font-size:1.2rem;letter-spacing:.2rem}',""]),e.exports=o},357:function(e,t,r){var content=r(396);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(71).default)("6c204fdc",content,!0,{sourceMap:!1})},358:function(e,t,r){"use strict";r.r(t);var o=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("img",{staticClass:"img-fluid thank-you",attrs:{src:r(354),alt:""}}),e._v(" "),t("div",[t("h4",[e._v("Thank you for your query.")]),e._v(" "),t("p",[e._v("I'll get back to you as soon as i can.")])])])}],n={props:["display"]},c=(r(355),r(57)),component=Object(c.a)(n,(function(){var e=this;return(0,e._self._c)("div",{staticClass:"thankyou",class:{"d-none":!e.display}},[e._m(0)])}),o,!1,null,null,null);t.default=component.exports},395:function(e,t,r){"use strict";r(357)},396:function(e,t,r){var o=r(70)(!1);o.push([e.i,".query-section{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background-color:rgba(0,0,0,.5)}.query-section .container-fluid{width:50%;background-color:#fff;padding:3rem;border-radius:.7rem}@media screen and (orientation:portrait){.query-section .container-fluid{width:95%;transform:scale(.9);margin-top:5rem}}.query-section .container-fluid .row{padding:1rem}.query-section .container-fluid .row .bx-x{position:absolute;right:1rem;top:1rem;font-size:2rem;cursor:pointer}.query-section .container-fluid .row .form-control{padding:2rem 1rem;font-size:1.4rem;margin-bottom:2rem}.query-section .container-fluid .row .btn{font-size:1.6rem;padding:1rem 2rem;border-radius:3rem;background-color:#1f2044;text-transform:uppercase;border-color:#1f2044}.query-section .container-fluid .error{font-size:.7rem}",""]),e.exports=o},397:function(e,t,r){"use strict";const o={_origin:"https://api.emailjs.com"},n=(e,t,r)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class c{constructor(e){this.status=e.status,this.text=e.responseText}}const l=(e,data,t={})=>new Promise(((r,n)=>{const l=new XMLHttpRequest;l.addEventListener("load",(({target:e})=>{const t=new c(e);200===t.status||"OK"===t.text?r(t):n(t)})),l.addEventListener("error",(({target:e})=>{n(new c(e))})),l.open("POST",o._origin+e,!0),Object.keys(t).forEach((e=>{l.setRequestHeader(e,t[e])})),l.send(data)}));t.a={init:(e,t="https://api.emailjs.com")=>{o._userID=e,o._origin=t},send:(e,t,r,c)=>{const m=c||o._userID;n(m,e,t);const d={lib_version:"3.6.2",user_id:m,service_id:e,template_id:t,template_params:r};return l("/api/v1.0/email/send",JSON.stringify(d),{"Content-type":"application/json"})},sendForm:(e,t,form,r)=>{const c=r||o._userID,m=(form=>{let e;if(e="string"==typeof form?document.querySelector(form):form,!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e})(form);n(c,e,t);const d=new FormData(m);return d.append("lib_version","3.6.2"),d.append("service_id",e),d.append("template_id",t),d.append("user_id",c),l("/api/v1.0/email/send-form",d)}}},405:function(e,t,r){"use strict";r.r(t);r(22),r(37);var o=r(397),n=r(358),c={props:{popup:Boolean},components:{"thank-you":n.default},data:function(){return{display:!1,errors:{name:"",email:"",subject:"",message:""},name:"",email:"",message:"",subject:""}},mounted:function(){o.a.init("4IkNR_VcYzrLhazwf")},methods:{Close:function(){this.$emit("changePopup",!this.popup)},checkForm:function(e){if(this.email&&this.name&&this.subject&&this.message)return this.sendEmail(),!0;this.errors={name:"",email:"",subject:"",message:""},this.name||(this.errors.name="Name required."),this.email||(this.errors.email="Email required."),this.subject||(this.errors.subject="Subject required."),this.message||(this.errors.message="Message required."),e.preventDefault()},DisplayThanks:function(){var e=this;this.display=!0,setTimeout((function(){e.display=!1}),3e3)},sendEmail:function(e){try{o.a.send("service_i35fh9e","template_lu79f8t",{name:this.name,email:this.email,subject:this.subject,message:this.message}),this.name="",this.email="",this.message="",this.subject="",this.DisplayThanks()}catch(e){console.log({error:e})}}}},l=(r(395),r(57)),component=Object(l.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"query-section section",class:[e.popup?"":"d-none"]},[t("div",{staticClass:"container-fluid"},[t("thank-you",{attrs:{display:e.display}}),e._v(" "),t("form",{ref:"form",staticClass:"row",on:{submit:function(t){return t.preventDefault(),e.checkForm.apply(null,arguments)}}},[t("i",{staticClass:"bx bx-x",on:{click:function(t){return e.Close()}}}),e._v(" "),t("div",{staticClass:"col-sm-6"},[t("div",{staticClass:"form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",class:{"is-invalid":e.errors.name.length},attrs:{type:"text",placeholder:"Name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"col-sm-6"},[t("div",{staticClass:"form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",class:{"is-invalid":e.errors.email.length},attrs:{type:"email",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"col-sm-12"},[t("div",{staticClass:"form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.subject,expression:"subject"}],staticClass:"form-control",class:{"is-invalid":e.errors.subject.length},attrs:{type:"text",placeholder:"Subject"},domProps:{value:e.subject},on:{input:function(t){t.target.composing||(e.subject=t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"col-sm-12"},[t("div",{staticClass:"form-group"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticClass:"form-control",class:{"is-invalid":e.errors.message.length},attrs:{cols:"30",rows:"10",placeholder:"Message"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}})]),e._v(" "),e._m(0)])])],1)])}),[function(){var e=this._self._c;return e("div",{staticClass:"text-center"},[e("button",{staticClass:"btn btn-primary"},[this._v("Contact Me")])])}],!1,null,null,null);t.default=component.exports}}]);