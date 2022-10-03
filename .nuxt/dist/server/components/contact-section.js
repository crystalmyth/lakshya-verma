exports.ids = [3,8];
exports.modules = {

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("1e3e9752", content, true, context)
};

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partial/Lines.vue?vue&type=template&id=6fb8493c&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "lines",
    attrs: {
      "data-aos": "fade-right",
      "data-aos-delay": "500",
      "data-aos-duration": "2000",
      "data-aos-easing": "ease-in-out"
    }
  }, [_vm._ssrNode("<div class=\"lines-first\"></div> <div class=\"lines-second\"></div> <div class=\"lines-third\"></div>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/partial/Lines.vue?vue&type=template&id=6fb8493c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/partial/Lines.vue?vue&type=script&lang=js&
/* harmony default export */ var Linesvue_type_script_lang_js_ = ({
  name: 'TheLines'
});
// CONCATENATED MODULE: ./components/partial/Lines.vue?vue&type=script&lang=js&
 /* harmony default export */ var partial_Linesvue_type_script_lang_js_ = (Linesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/partial/Lines.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(39)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  partial_Linesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "835f8a1a"
  
)

/* harmony default export */ var Lines = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Lines_vue_vue_type_style_index_0_id_6fb8493c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Lines_vue_vue_type_style_index_0_id_6fb8493c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Lines_vue_vue_type_style_index_0_id_6fb8493c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Lines_vue_vue_type_style_index_0_id_6fb8493c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Lines_vue_vue_type_style_index_0_id_6fb8493c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".lines{position:absolute;height:150%;top:-30%;width:100%;display:grid;grid-template-columns:repeat(4,1fr);z-index:-1}.lines div{border-right:1px solid rgba(51,51,51,.1)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(88);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("9023f2e4", content, true, context)
};

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactSection_vue_vue_type_style_index_0_id_ddeed194_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactSection_vue_vue_type_style_index_0_id_ddeed194_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactSection_vue_vue_type_style_index_0_id_ddeed194_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactSection_vue_vue_type_style_index_0_id_ddeed194_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactSection_vue_vue_type_style_index_0_id_ddeed194_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".contact-section{text-align:center}.contact-section .container-fluid{height:100vh!important;padding-top:6rem;position:relative}@media screen and (max-width:800px){.contact-section .container-fluid{height:130vh!important}}.contact-section h2{font-family:\"Libre Baskerville\",serif;font-size:4rem;font-weight:500}@media screen and (max-width:800px){.contact-section h2{font-size:3rem}}.contact-section h2 span{background-color:#fcf1e7;display:inline-block;padding:0 .5rem;font-weight:600}.contact-section p{color:#463989;padding-top:2rem;font-size:1.6rem;width:60%;padding-bottom:2rem;margin:2.5rem auto auto}@media screen and (max-width:800px){.contact-section p{width:100%;font-size:1.3rem}}.contact-section p span{font-weight:700}.contact-section .btn{background-color:#1f2044;border-color:#1f2044;height:4rem;width:22.6rem;text-transform:uppercase;padding:0;border-radius:4rem;font-weight:700;font-size:1.5rem;margin-top:3rem}.contact-section .row{position:absolute;width:100%;bottom:15rem}@media screen and (max-width:800px){.contact-section .row{bottom:5rem}}.contact-section .row .col-sm-4{display:flex;align-items:center;justify-content:center}@media screen and (max-width:800px){.contact-section .row .col-sm-4{padding-bottom:1rem}}.contact-section .row .col-sm-4 a{text-decoration:none;color:#463989;font-size:2rem}.contact-section .row .col-sm-4:first-child a{font-size:3rem;font-weight:700}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ContactSection.vue?vue&type=template&id=ddeed194&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "contact-section section"
  }, [_vm._ssrNode("<div class=\"container-fluid\">", "</div>", [_c('lines'), _vm._ssrNode(" <label data-aos=\"zoom-in\" data-aos-delay=\"500\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\">Contact Me</label> <h2><div data-aos=\"zoom-in-up\" data-aos-delay=\"500\" data-aos-duration=\"1500\" data-aos-easing=\"ease-in-out\" class=\"d-inline\">Are you ready to</div> <span data-aos=\"fade-right\" data-aos-delay=\"500\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\">work together?</span></h2> <p data-aos=\"zoom-left\" data-aos-delay=\"500\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\">\n      I’m always interested in hearing about new projects and opportunities.\n      <br>You can tell me about the problems you are trying to solve. I’d love to listen and see if there’s anything I can do to help you.\n    </p> <button data-aos=\"flip-right\" data-aos-delay=\"500\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\" data-aos-anchor-placement=\"top-bottom\" class=\"btn btn-primary\">Submit A Request</button> <div class=\"row\"><div class=\"col-sm-4\"><a href=\"tel:8619325471\" data-aos=\"flip-right\" data-aos-delay=\"500\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\" data-aos-anchor-placement=\"top-bottom\">(+91) 861 932 5471</a></div> <div class=\"col-sm-4\"><a href=\"mailto:lakshayverma.lv@gmail.com\" data-aos=\"flip-right\" data-aos-delay=\"500\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\" data-aos-anchor-placement=\"top-bottom\">lakshayverma.lv@gmail.com</a></div> <div class=\"col-sm-4\"><a href=\"#\" data-aos=\"flip-right\" data-aos-delay=\"500\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\" data-aos-anchor-placement=\"top-bottom\">Gurugram, India</a></div></div>")], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ContactSection.vue?vue&type=template&id=ddeed194&

// EXTERNAL MODULE: ./components/partial/Lines.vue + 4 modules
var Lines = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ContactSection.vue?vue&type=script&lang=js&

/* harmony default export */ var ContactSectionvue_type_script_lang_js_ = ({
  props: ["popup"],
  components: {
    lines: Lines["default"]
  },
  methods: {
    PopupQuery() {
      this.$emit("changePopup", !this.popup);
    }

  }
});
// CONCATENATED MODULE: ./components/ContactSection.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ContactSectionvue_type_script_lang_js_ = (ContactSectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ContactSection.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(87)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ContactSectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "043357da"
  
)

/* harmony default export */ var ContactSection = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=contact-section.js.map