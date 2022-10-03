exports.ids = [2,8];
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

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(86);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3663daa6", content, true, context)
};

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/rentfoxxy-logo.0f3785d.png";

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/denesahealth-logo.055f2e1.png";

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/gorefurbo-logo.24dc5e1.jpeg";

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/aaftonline-logo.dc0f4f3.png";

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/routecorp-logo.fdd464f.png";

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/livefunish-logo.b8e2c50.png";

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/truetech-logo.2291788.png";

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySection_vue_vue_type_style_index_0_id_6e7a2e72_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySection_vue_vue_type_style_index_0_id_6e7a2e72_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySection_vue_vue_type_style_index_0_id_6e7a2e72_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySection_vue_vue_type_style_index_0_id_6e7a2e72_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySection_vue_vue_type_style_index_0_id_6e7a2e72_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".company-section .container-fluid{padding-top:10rem}.company-section .container-fluid h2{font-family:\"Libre Baskerville\",serif;font-size:4rem;font-weight:500;margin-bottom:4rem}@media screen and (max-width:800px){.company-section .container-fluid h2{font-size:2.5rem}}@media screen and (max-width:800px){.company-section .container-fluid p{font-size:1.3rem}}.company-section-content-count{margin-top:5rem}.company-section-content-count-box{margin-bottom:2rem;display:flex;align-items:center}.company-section-content-count-box h4{font-size:5rem;color:#75a9d6}.company-section-content-count-box div{margin-left:2rem}.company-section-content-count-box div h5{text-transform:uppercase;font-weight:700;font-size:1.6rem;color:#1f2044}.company-section-content-count-box div span{font-size:1.3rem;color:#234969}.company-section-body{display:grid;grid-template-areas:\"img-1 img-1 img-2\" \"img-3 img-4 img-5\" \"img-6 img-7 img-7\";grid-gap:6rem}@media screen and (max-width:800px){.company-section-body{padding-bottom:4rem;grid-gap:2rem}}.company-section-body img{-o-object-fit:contain;object-fit:contain;width:100%;height:10rem}.company-section-body .img-1{grid-area:img-2;transform:scale(1.2)}.company-section-body .img-2{grid-area:img-1;background-color:#1f98df}.company-section-body .img-3{grid-area:img-3;padding:.5rem}.company-section-body .img-4{grid-area:img-4;transform:scale(1.7);background-color:#c5d509}.company-section-body .img-5{grid-area:img-5}.company-section-body .img-6{grid-area:img-7;background-color:#fff;padding:.5rem}.company-section-body .img-7{grid-area:img-6;transform:scale(1.2)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CompanySection.vue?vue&type=template&id=6e7a2e72&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "company-section section"
  }, [_vm._ssrNode("<div class=\"container-fluid\">", "</div>", [_c('lines'), _vm._ssrNode(" <div class=\"row\"><div class=\"col-sm-7 company-section-content\"><label data-aos=\"zoom-in\" data-aos-delay=\"500\" data-aos-duration=\"2000\" data-aos-easing=\"ease-in-out\">My Clients &amp; Employeers</label> <h2 data-aos=\"fade-left\" data-aos-delay=\"500\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\">Some Of Companies I have worked with :</h2> <p data-aos=\"fade-right\" data-aos-delay=\"500\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\">Over the past four years, I’ve been fortunate to work with and for people from some amazing organizations.</p> <div class=\"company-section-content-count\"><div class=\"company-section-content-count-box\"><h4 data-aos=\"fade-left\" data-aos-delay=\"500\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\">25+</h4> <div data-aos=\"fade-right\" data-aos-delay=\"500\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\"><h5>Total Client</h5> <span>In Pan India</span></div></div> <div class=\"company-section-content-count-box\"><h4 data-aos=\"fade-left\" data-aos-delay=\"500\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\">95%</h4> <div data-aos=\"fade-right\" data-aos-delay=\"500\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\" l><h5>Sensitive Feedback</h5> <span>At project quality</span></div></div></div></div> <div class=\"col-sm-5\"><div class=\"company-section-body\"><img data-aos=\"zoom-down\" data-aos-delay=\"500\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\"" + _vm._ssrAttr("src", __webpack_require__(78)) + " class=\"img-fluid rounded shadow-lg img-1\"> <img data-aos=\"fade-right\" data-aos-delay=\"500\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\"" + _vm._ssrAttr("src", __webpack_require__(79)) + " class=\"img-fluid rounded shadow-lg img-2\"> <img data-aos=\"fade-right\" data-aos-delay=\"500\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\"" + _vm._ssrAttr("src", __webpack_require__(80)) + " class=\"img-fluid rounded shadow-lg img-3\"> <img data-aos=\"zoom-in\" data-aos-delay=\"500\" data-aos-duration=\"2000\" data-aos-easing=\"ease-in-out\"" + _vm._ssrAttr("src", __webpack_require__(81)) + " class=\"img-fluid rounded shadow-lg img-4\"> <img data-aos=\"zoom-right\" data-aos-delay=\"500\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\"" + _vm._ssrAttr("src", __webpack_require__(82)) + " class=\"img-fluid rounded shadow-lg img-5\"> <img data-aos=\"zoom-left\" data-aos-delay=\"500\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\"" + _vm._ssrAttr("src", __webpack_require__(83)) + " class=\"img-fluid rounded shadow-lg img-6\"> <img data-aos=\"zoom-up\" data-aos-delay=\"500\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\"" + _vm._ssrAttr("src", __webpack_require__(84)) + " class=\"img-fluid rounded shadow-lg img-7\"></div></div></div>")], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CompanySection.vue?vue&type=template&id=6e7a2e72&

// EXTERNAL MODULE: ./components/partial/Lines.vue + 4 modules
var Lines = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CompanySection.vue?vue&type=script&lang=js&

/* harmony default export */ var CompanySectionvue_type_script_lang_js_ = ({
  components: {
    lines: Lines["default"]
  }
});
// CONCATENATED MODULE: ./components/CompanySection.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CompanySectionvue_type_script_lang_js_ = (CompanySectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CompanySection.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(85)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CompanySectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "1b004f96"
  
)

/* harmony default export */ var CompanySection = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=company-section.js.map