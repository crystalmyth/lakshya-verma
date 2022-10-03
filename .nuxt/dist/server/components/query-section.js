exports.ids = [10,9];
exports.modules = {

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/QuerySection.vue?vue&type=template&id=cac64c9e&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "query-section section",
    class: [_vm.popup ? '' : 'd-none']
  }, [_vm._ssrNode("<div class=\"container-fluid\">", "</div>", [_c('thank-you', {
    attrs: {
      "display": _vm.display
    }
  }), _vm._ssrNode(" <form class=\"row\"><i class=\"bx bx-x\"></i> <div class=\"col-sm-6\"><div class=\"form-group\"><input type=\"text\" placeholder=\"Name\"" + _vm._ssrAttr("value", _vm.name) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.name.length
  }) + "></div></div> <div class=\"col-sm-6\"><div class=\"form-group\"><input type=\"email\" placeholder=\"Email\"" + _vm._ssrAttr("value", _vm.email) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.email.length
  }) + "></div></div> <div class=\"col-sm-12\"><div class=\"form-group\"><input type=\"text\" placeholder=\"Subject\"" + _vm._ssrAttr("value", _vm.subject) + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.subject.length
  }) + "></div></div> <div class=\"col-sm-12\"><div class=\"form-group\"><textarea cols=\"30\" rows=\"10\" placeholder=\"Message\"" + _vm._ssrClass("form-control", {
    'is-invalid': _vm.errors.message.length
  }) + ">" + _vm._ssrEscape(_vm._s(_vm.message)) + "</textarea></div> <div class=\"text-center\"><button class=\"btn btn-primary\">Contact Me</button></div></div></form>")], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/QuerySection.vue?vue&type=template&id=cac64c9e&

// EXTERNAL MODULE: external "@emailjs/browser"
var browser_ = __webpack_require__(35);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser_);

// EXTERNAL MODULE: ./components/partial/ThankYou.vue + 4 modules
var ThankYou = __webpack_require__(54);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/QuerySection.vue?vue&type=script&lang=js&


/* harmony default export */ var QuerySectionvue_type_script_lang_js_ = ({
  props: {
    popup: Boolean
  },
  components: {
    "thank-you": ThankYou["default"]
  },

  data() {
    return {
      display: false,
      errors: {
        name: "",
        email: "",
        subject: "",
        message: ""
      },
      name: "",
      email: "",
      message: "",
      subject: ""
    };
  },

  mounted() {
    (function () {
      // https://dashboard.emailjs.com/admin/account
      browser_default.a.init("4IkNR_VcYzrLhazwf");
    })();
  },

  methods: {
    Close() {
      this.$emit("changePopup", !this.popup);
    },

    checkForm: function (e) {
      if (this.email && this.name && this.subject && this.message) {
        this.sendEmail();
        return true;
      }

      this.errors = {
        name: "",
        email: "",
        subject: "",
        message: ""
      };

      if (!this.name) {
        this.errors.name = "Name required.";
      }

      if (!this.email) {
        this.errors.email = "Email required.";
      }

      if (!this.subject) {
        this.errors.subject = "Subject required.";
      }

      if (!this.message) {
        this.errors.message = "Message required.";
      }

      e.preventDefault();
    },

    DisplayThanks() {
      this.display = true;
      setTimeout(() => {
        this.display = false;
      }, 3000);
    },

    sendEmail(e) {
      try {
        browser_default.a.send("service_i35fh9e", "template_lu79f8t", {
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message
        }); // Reset form field

        this.name = "";
        this.email = "";
        this.message = "";
        this.subject = "";
        this.DisplayThanks();
      } catch (error) {
        console.log({
          error
        });
      }
    }

  }
});
// CONCATENATED MODULE: ./components/QuerySection.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_QuerySectionvue_type_script_lang_js_ = (QuerySectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/QuerySection.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(91)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_QuerySectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3789c3eb"
  
)

/* harmony default export */ var QuerySection = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(52);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("a2aeb828", content, true, context)
};

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/thanks.19c7dc4.png";

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThankYou_vue_vue_type_style_index_0_id_b99a343a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThankYou_vue_vue_type_style_index_0_id_b99a343a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThankYou_vue_vue_type_style_index_0_id_b99a343a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThankYou_vue_vue_type_style_index_0_id_b99a343a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThankYou_vue_vue_type_style_index_0_id_b99a343a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".thankyou .container{display:flex;align-items:center;justify-content:center}.thankyou .container img{height:5rem;-o-object-fit:contain;object-fit:contain}.thankyou .container h4{font-family:\"Libre Baskerville\",serif;font-size:2rem;font-weight:700;color:#463989}.thankyou .container p{font-size:1.2rem;letter-spacing:.2rem}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(92);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("6c204fdc", content, true, context)
};

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partial/ThankYou.vue?vue&type=template&id=b99a343a&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "thankyou",
    class: {
      'd-none': !_vm.display
    }
  }, [_vm._ssrNode("<div class=\"container\"><img" + _vm._ssrAttr("src", __webpack_require__(50)) + " alt class=\"img-fluid thank-you\"> <div><h4>Thank you for your query.</h4> <p>I'll get back to you as soon as i can.</p></div></div>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/partial/ThankYou.vue?vue&type=template&id=b99a343a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partial/ThankYou.vue?vue&type=script&lang=js&
/* harmony default export */ var ThankYouvue_type_script_lang_js_ = ({
  props: ['display']
});
// CONCATENATED MODULE: ./components/partial/ThankYou.vue?vue&type=script&lang=js&
 /* harmony default export */ var partial_ThankYouvue_type_script_lang_js_ = (ThankYouvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/partial/ThankYou.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(51)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  partial_ThankYouvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "096b0691"
  
)

/* harmony default export */ var ThankYou = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuerySection_vue_vue_type_style_index_0_id_cac64c9e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuerySection_vue_vue_type_style_index_0_id_cac64c9e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuerySection_vue_vue_type_style_index_0_id_cac64c9e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuerySection_vue_vue_type_style_index_0_id_cac64c9e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuerySection_vue_vue_type_style_index_0_id_cac64c9e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".query-section{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background-color:rgba(0,0,0,.5)}.query-section .container-fluid{width:50%;background-color:#fff;padding:3rem;border-radius:.7rem}@media screen and (orientation:portrait){.query-section .container-fluid{width:95%;transform:scale(.9);margin-top:5rem}}.query-section .container-fluid .row{padding:1rem}.query-section .container-fluid .row .bx-x{position:absolute;right:1rem;top:1rem;font-size:2rem;cursor:pointer}.query-section .container-fluid .row .form-control{padding:2rem 1rem;font-size:1.4rem;margin-bottom:2rem}.query-section .container-fluid .row .btn{font-size:1.6rem;padding:1rem 2rem;border-radius:3rem;background-color:#1f2044;text-transform:uppercase;border-color:#1f2044}.query-section .container-fluid .error{font-size:.7rem}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=query-section.js.map