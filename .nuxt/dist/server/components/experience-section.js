exports.ids = [4,8];
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

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(77);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("03a7fb65", content, true, context)
};

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/experience.2d33d1a.png";

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/education.d034d8e.png";

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExperienceSection_vue_vue_type_style_index_0_id_a3faa9ae_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExperienceSection_vue_vue_type_style_index_0_id_a3faa9ae_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExperienceSection_vue_vue_type_style_index_0_id_a3faa9ae_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExperienceSection_vue_vue_type_style_index_0_id_a3faa9ae_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExperienceSection_vue_vue_type_style_index_0_id_a3faa9ae_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".experience-section{padding-top:7rem;height:auto;text-align:center}.experience-section img{width:55%;-o-object-fit:contain;object-fit:contain;padding-bottom:3rem}.experience-section .card-title{font-family:\"Libre Baskerville\",serif;font-size:4rem;font-weight:500}.experience-section .box{text-align:left;padding:1rem 0;transform:scale(.8)}.experience-section .box-header{display:flex;align-items:center;justify-content:space-between}.experience-section .box-header span{font-size:1.4rem}.experience-section .box-title{text-transform:uppercase;font-size:2rem}.experience-section .box-content{display:flex;align-items:center;justify-content:space-between}.experience-section .box-lang{display:flex;align-items:center;justify-content:flex-start;flex-wrap:row wrap}.experience-section .box-lang-box{display:flex;flex-direction:column;position:relative;padding-top:2rem}.experience-section .box-lang-box span{font-size:1.2rem;position:absolute;bottom:1rem;left:50%;transform:translateX(-50%)}.experience-section .box-lang img{height:7rem;width:7rem;-o-object-fit:contain;object-fit:contain}.experience-section .box summary{font-size:1.4rem;letter-spacing:.2rem}.experience-section .box-time{color:#f79784;font-size:1.4rem}.experience-section .box-description{font-size:1.6rem;font-weight:300;padding-top:1rem}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ExperienceSection.vue?vue&type=template&id=a3faa9ae&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "experience-section section"
  }, [_vm._ssrNode("<div class=\"container-fluid\">", "</div>", [_c('lines'), _vm._ssrNode(" <div class=\"row\"><div class=\"col-sm-6\"><img data-aos=\"zoom-in-down\" data-aos-delay=\"500\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\"" + _vm._ssrAttr("src", __webpack_require__(74)) + " alt class=\"img-fluid\"> <div class=\"experience-box\"><h4 data-aos=\"fade-right\" data-aos-delay=\"500\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\" class=\"card-title\">\n            Experience\n          </h4> " + _vm._ssrList(this.$store.getters.getExperience, function (experience, index) {
    return "<div class=\"box\"><h4 data-aos=\"fade-right\" data-aos-delay=\"500\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\" class=\"box-title\">" + _vm._ssrEscape("\n              " + _vm._s(experience.title) + "\n            ") + "</h4> <div data-aos=\"fade-left\" data-aos-delay=\"500\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\" class=\"box-content\"><p class=\"box-description\">" + _vm._ssrEscape(_vm._s(experience.content)) + "</p> <span class=\"box-time\">" + _vm._ssrEscape(_vm._s(experience.time)) + "</span></div> <details data-aos=\"fade-right\" data-aos-delay=\"500\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\"><summary>Worked With</summary> <div class=\"box-lang\">" + _vm._ssrList(experience.lang, function (ln, ind) {
      return "<div class=\"box-lang-box\"><img" + _vm._ssrAttr("src", ln.img) + " alt class=\"img-fluid\"> <span>" + _vm._ssrEscape(_vm._s(ln.name)) + "</span></div>";
    }) + "</div></details></div>";
  }) + "</div></div> <div class=\"col-sm-6\"><img data-aos=\"zoom-in-down\" data-aos-delay=\"500\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\"" + _vm._ssrAttr("src", __webpack_require__(75)) + " alt class=\"img-fluid\"> <h4 data-aos=\"fade-right\" data-aos-delay=\"500\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\" class=\"card-title\">\n          Projects\n        </h4> " + _vm._ssrList(this.$store.getters.getProject, function (education, index) {
    return "<div class=\"box\"><h4 data-aos=\"fade-right\" data-aos-delay=\"500\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\" class=\"box-title\">" + _vm._ssrEscape("\n            " + _vm._s(education.title) + "\n          ") + "</h4> <div data-aos=\"fade-left\" data-aos-delay=\"500\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\" class=\"box-content\"><p class=\"box-description\">" + _vm._ssrEscape(_vm._s(education.content)) + "</p> <span class=\"box-time\">" + _vm._ssrEscape(_vm._s(education.time)) + "</span></div> <details data-aos=\"fade-right\" data-aos-delay=\"500\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\"><summary>Worked With</summary> <div class=\"box-lang\">" + _vm._ssrList(education.lang, function (ln, ind) {
      return "<div class=\"box-lang-box\"><img" + _vm._ssrAttr("src", ln.img) + " alt class=\"img-fluid\"> <span>" + _vm._ssrEscape(_vm._s(ln.name)) + "</span></div>";
    }) + "</div></details></div>";
  }) + "</div></div>")], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ExperienceSection.vue?vue&type=template&id=a3faa9ae&

// EXTERNAL MODULE: ./components/partial/Lines.vue + 4 modules
var Lines = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ExperienceSection.vue?vue&type=script&lang=js&

/* harmony default export */ var ExperienceSectionvue_type_script_lang_js_ = ({
  components: {
    lines: Lines["default"]
  }
});
// CONCATENATED MODULE: ./components/ExperienceSection.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ExperienceSectionvue_type_script_lang_js_ = (ExperienceSectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ExperienceSection.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(76)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ExperienceSectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "222a2bc6"
  
)

/* harmony default export */ var ExperienceSection = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=experience-section.js.map