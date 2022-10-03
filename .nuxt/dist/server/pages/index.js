exports.ids = [12,1,2,3,4,5,6,7,8,9,10,11];
exports.modules = Array(37).concat([
/* 37 */
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
/* 38 */
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
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Lines_vue_vue_type_style_index_0_id_6fb8493c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Lines_vue_vue_type_style_index_0_id_6fb8493c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Lines_vue_vue_type_style_index_0_id_6fb8493c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Lines_vue_vue_type_style_index_0_id_6fb8493c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Lines_vue_vue_type_style_index_0_id_6fb8493c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".lines{position:absolute;height:150%;top:-30%;width:100%;display:grid;grid-template-columns:repeat(4,1fr);z-index:-1}.lines div{border-right:1px solid rgba(51,51,51,.1)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 41 */
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(56);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("97018908", content, true, context)
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(60);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("2bc14ee2", content, true, context)
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(67);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("b4360eae", content, true, context)
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(73);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("43899be2", content, true, context)
};

/***/ }),
/* 46 */
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
/* 47 */
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
/* 48 */
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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(90);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("2b6d5adc", content, true, context)
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/thanks.19c7dc4.png";

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThankYou_vue_vue_type_style_index_0_id_b99a343a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThankYou_vue_vue_type_style_index_0_id_b99a343a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThankYou_vue_vue_type_style_index_0_id_b99a343a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThankYou_vue_vue_type_style_index_0_id_b99a343a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThankYou_vue_vue_type_style_index_0_id_b99a343a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".thankyou .container{display:flex;align-items:center;justify-content:center}.thankyou .container img{height:5rem;-o-object-fit:contain;object-fit:contain}.thankyou .container h4{font-family:\"Libre Baskerville\",serif;font-size:2rem;font-weight:700;color:#463989}.thankyou .container p{font-size:1.2rem;letter-spacing:.2rem}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 53 */
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
/* 54 */
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
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_98fbc80e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_98fbc80e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_98fbc80e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_98fbc80e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_98fbc80e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".navbar{position:fixed;width:100%;top:0;display:flex;align-items:center;justify-content:space-between;z-index:100;color:#333;height:5rem;background-color:#fff}.navbar .bx{color:#333;font-size:2.5rem}.navbar-left-title{color:#463989;font-size:2rem;font-weight:400}.navbar-left-title span{font-weight:600}.navbar-right a{text-decoration:none;color:#463989;font-size:1.5rem}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/waving-hand.026931c.png";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/hero-section-img.3b5a237.png";

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroSection_vue_vue_type_style_index_0_id_5e4438f0_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroSection_vue_vue_type_style_index_0_id_5e4438f0_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroSection_vue_vue_type_style_index_0_id_5e4438f0_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroSection_vue_vue_type_style_index_0_id_5e4438f0_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroSection_vue_vue_type_style_index_0_id_5e4438f0_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".hero-section{text-align:center}@media screen and (max-width:800px){.hero-section{width:100vw;overflow-x:hidden}}.hero-section .wave-icon{height:4rem;-o-object-fit:contain;object-fit:contain}.hero-section .container-fluid{height:100vh!important;padding-top:6rem}.hero-section h1,.hero-section h2{font-family:\"Libre Baskerville\",serif;font-size:4rem;font-weight:500}@media screen and (max-width:800px){.hero-section h1,.hero-section h2{font-size:2rem}}.hero-section h1 span,.hero-section h2 span{background-color:#fcf1e7;display:inline-block;padding:0 .5rem;font-weight:600}.hero-section p{color:#463989;padding-top:2rem;font-size:1.6rem;width:75%;margin:auto;padding-bottom:2rem}@media screen and (max-width:800px){.hero-section p{font-size:1.2rem;width:90%}}.hero-section p span{font-weight:700}.hero-section-img{height:40rem;-o-object-fit:contain;object-fit:contain;margin:auto;position:absolute;bottom:0;left:50%;transform:translateX(-50%)}@media screen and (max-width:800px){.hero-section-img{bottom:-8rem}}@media screen and (min-width:800px)and (orientation:portrait){.hero-section-img{bottom:-6rem;height:60rem;max-width:200%}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/object-1.917cbff.png";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/object-2.62cdc78.png";

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/object-4.6e7675d.png";

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/object-3.bf59eae.png";

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/object-5.2f0adf5.png";

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceSection_vue_vue_type_style_index_0_id_00f72b68_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceSection_vue_vue_type_style_index_0_id_00f72b68_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceSection_vue_vue_type_style_index_0_id_00f72b68_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceSection_vue_vue_type_style_index_0_id_00f72b68_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceSection_vue_vue_type_style_index_0_id_00f72b68_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".service-section{padding-top:10rem;padding-bottom:10rem}.service-section .container-fluid .row .col-sm-6{position:relative!important;display:flex;flex-direction:column;justify-content:center}.service-section .container-fluid .row .col-sm-6 h2{font-size:4rem;font-family:\"Libre Baskerville\",serif}@media screen and (max-width:800px){.service-section .container-fluid .row .col-sm-6 h2{font-size:2.5rem}}.service-section .container-fluid .row .col-sm-6 h2 span{background-color:#fcf1e7;display:inline-block;padding:0 .5rem}.service-section .container-fluid .row .col-sm-6 p{color:#463989;padding-top:3rem}@media screen and (max-width:800px){.service-section .container-fluid .row .col-sm-6 p{font-size:1.2rem}}.service-section .container-fluid .row .col-sm-6 ul{padding-top:2rem;list-style:none;padding-left:0}.service-section .container-fluid .row .col-sm-6 ul li{color:#463989;font-size:2rem;padding-bottom:1rem;font-weight:700}@media screen and (max-width:800px){.service-section .container-fluid .row .col-sm-6 ul li{font-size:1.4rem}}.service-section .container-fluid .row .col-sm-6 .images{display:grid;grid-template-areas:\"img-2 big img-3\" \"... big ...\" \"img-4 big img-5\"}.service-section .container-fluid .row .col-sm-6 .images img{-o-object-fit:contain;object-fit:contain}.service-section .container-fluid .row .col-sm-6 .images [class*=img-]{border-radius:.5rem;box-shadow:0 0 2.5rem #eaeaea;width:10rem}.service-section .container-fluid .row .col-sm-6 .images .img-1{height:calc(100vh - 7rem);grid-area:big;box-shadow:none;width:calc(100% - 2rem);transform:scale(1.4)}.service-section .container-fluid .row .col-sm-6 .images .img-2{height:100%;grid-area:img-2;height:10rem}.service-section .container-fluid .row .col-sm-6 .images .img-3{height:100%;grid-area:img-3;width:15rem}.service-section .container-fluid .row .col-sm-6 .images .img-4{height:100%;grid-area:img-4;margin-bottom:2rem;height:13rem;width:13rem;position:relative;z-index:inherit}.service-section .container-fluid .row .col-sm-6 .images .img-5{height:100%;grid-area:img-5;margin-bottom:5rem;width:7rem;height:7rem;position:relative;z-index:inherit}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/object-6.96c6eb7.png";

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/object-7.a4ad160.png";

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/object-8.6aca7ab.png";

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/object-9.8c4174b.png";

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturedSection_vue_vue_type_style_index_0_id_23a546aa_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturedSection_vue_vue_type_style_index_0_id_23a546aa_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturedSection_vue_vue_type_style_index_0_id_23a546aa_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturedSection_vue_vue_type_style_index_0_id_23a546aa_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturedSection_vue_vue_type_style_index_0_id_23a546aa_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".featured-section{padding-top:7rem}.featured-section h2{font-family:\"Libre Baskerville\",serif;font-size:4rem;font-weight:500;padding-bottom:2rem}@media screen and (max-width:800px){.featured-section h2{font-size:2.5rem}}.featured-section h2 span{background-color:#fcf1e7;display:inline-block;padding:.5rem}.featured-section p{font-size:1.6rem}@media screen and (max-width:800px){.featured-section p{font-size:1.3rem}}.featured-section .languages{padding-top:2rem}.featured-section .languages-box{padding-bottom:2rem}.featured-section .languages-box-header{display:flex;align-items:center;justify-content:space-between;padding-bottom:.5rem}.featured-section .languages-box-header h4,.featured-section .languages-box-header span{font-size:1.4rem;font-family:\"Libre Baskerville\",serif;letter-spacing:.15rem}.featured-section .languages-box .progress-bar{background-color:#75a9d6;border-radius:1rem}.featured-section .languages-box .progress{border-radius:1rem}.featured-section .images{display:grid;grid-template-areas:\"img-1 ... img-2\" \"... big ...\" \"... ... img-3\";height:auto;align-items:center}.featured-section .images img{-o-object-fit:contain;object-fit:contain;width:10rem}.featured-section .images .img-1{grid-area:big;width:auto}.featured-section .images .img-2{grid-area:img-1;border-radius:1.2rem;position:relative;top:2rem;left:5rem}.featured-section .images .img-3{grid-area:img-2;border-radius:1.2rem;transform:scale(1.5);position:relative;top:4rem;right:4rem}.featured-section .images .img-4{grid-area:img-3;border-radius:1.2rem;position:relative;bottom:7rem;right:5rem;transform:scale(.75)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/experience.2d33d1a.png";

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/education.d034d8e.png";

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExperienceSection_vue_vue_type_style_index_0_id_a3faa9ae_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExperienceSection_vue_vue_type_style_index_0_id_a3faa9ae_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExperienceSection_vue_vue_type_style_index_0_id_a3faa9ae_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExperienceSection_vue_vue_type_style_index_0_id_a3faa9ae_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExperienceSection_vue_vue_type_style_index_0_id_a3faa9ae_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".experience-section{padding-top:7rem;height:auto;text-align:center}.experience-section img{width:55%;-o-object-fit:contain;object-fit:contain;padding-bottom:3rem}.experience-section .card-title{font-family:\"Libre Baskerville\",serif;font-size:4rem;font-weight:500}.experience-section .box{text-align:left;padding:1rem 0;transform:scale(.8)}.experience-section .box-header{display:flex;align-items:center;justify-content:space-between}.experience-section .box-header span{font-size:1.4rem}.experience-section .box-title{text-transform:uppercase;font-size:2rem}.experience-section .box-content{display:flex;align-items:center;justify-content:space-between}.experience-section .box-lang{display:flex;align-items:center;justify-content:flex-start;flex-wrap:row wrap}.experience-section .box-lang-box{display:flex;flex-direction:column;position:relative;padding-top:2rem}.experience-section .box-lang-box span{font-size:1.2rem;position:absolute;bottom:1rem;left:50%;transform:translateX(-50%)}.experience-section .box-lang img{height:7rem;width:7rem;-o-object-fit:contain;object-fit:contain}.experience-section .box summary{font-size:1.4rem;letter-spacing:.2rem}.experience-section .box-time{color:#f79784;font-size:1.4rem}.experience-section .box-description{font-size:1.6rem;font-weight:300;padding-top:1rem}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/rentfoxxy-logo.0f3785d.png";

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/denesahealth-logo.055f2e1.png";

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/gorefurbo-logo.24dc5e1.jpeg";

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/aaftonline-logo.dc0f4f3.png";

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/routecorp-logo.fdd464f.png";

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/livefunish-logo.b8e2c50.png";

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/truetech-logo.2291788.png";

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySection_vue_vue_type_style_index_0_id_6e7a2e72_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySection_vue_vue_type_style_index_0_id_6e7a2e72_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySection_vue_vue_type_style_index_0_id_6e7a2e72_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySection_vue_vue_type_style_index_0_id_6e7a2e72_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySection_vue_vue_type_style_index_0_id_6e7a2e72_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".company-section .container-fluid{padding-top:10rem}.company-section .container-fluid h2{font-family:\"Libre Baskerville\",serif;font-size:4rem;font-weight:500;margin-bottom:4rem}@media screen and (max-width:800px){.company-section .container-fluid h2{font-size:2.5rem}}@media screen and (max-width:800px){.company-section .container-fluid p{font-size:1.3rem}}.company-section-content-count{margin-top:5rem}.company-section-content-count-box{margin-bottom:2rem;display:flex;align-items:center}.company-section-content-count-box h4{font-size:5rem;color:#75a9d6}.company-section-content-count-box div{margin-left:2rem}.company-section-content-count-box div h5{text-transform:uppercase;font-weight:700;font-size:1.6rem;color:#1f2044}.company-section-content-count-box div span{font-size:1.3rem;color:#234969}.company-section-body{display:grid;grid-template-areas:\"img-1 img-1 img-2\" \"img-3 img-4 img-5\" \"img-6 img-7 img-7\";grid-gap:6rem}@media screen and (max-width:800px){.company-section-body{padding-bottom:4rem;grid-gap:2rem}}.company-section-body img{-o-object-fit:contain;object-fit:contain;width:100%;height:10rem}.company-section-body .img-1{grid-area:img-2;transform:scale(1.2)}.company-section-body .img-2{grid-area:img-1;background-color:#1f98df}.company-section-body .img-3{grid-area:img-3;padding:.5rem}.company-section-body .img-4{grid-area:img-4;transform:scale(1.7);background-color:#c5d509}.company-section-body .img-5{grid-area:img-5}.company-section-body .img-6{grid-area:img-7;background-color:#fff;padding:.5rem}.company-section-body .img-7{grid-area:img-6;transform:scale(1.2)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactSection_vue_vue_type_style_index_0_id_ddeed194_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactSection_vue_vue_type_style_index_0_id_ddeed194_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactSection_vue_vue_type_style_index_0_id_ddeed194_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactSection_vue_vue_type_style_index_0_id_ddeed194_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactSection_vue_vue_type_style_index_0_id_ddeed194_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".contact-section{text-align:center}.contact-section .container-fluid{height:100vh!important;padding-top:6rem;position:relative}@media screen and (max-width:800px){.contact-section .container-fluid{height:130vh!important}}.contact-section h2{font-family:\"Libre Baskerville\",serif;font-size:4rem;font-weight:500}@media screen and (max-width:800px){.contact-section h2{font-size:3rem}}.contact-section h2 span{background-color:#fcf1e7;display:inline-block;padding:0 .5rem;font-weight:600}.contact-section p{color:#463989;padding-top:2rem;font-size:1.6rem;width:60%;padding-bottom:2rem;margin:2.5rem auto auto}@media screen and (max-width:800px){.contact-section p{width:100%;font-size:1.3rem}}.contact-section p span{font-weight:700}.contact-section .btn{background-color:#1f2044;border-color:#1f2044;height:4rem;width:22.6rem;text-transform:uppercase;padding:0;border-radius:4rem;font-weight:700;font-size:1.5rem;margin-top:3rem}.contact-section .row{position:absolute;width:100%;bottom:15rem}@media screen and (max-width:800px){.contact-section .row{bottom:5rem}}.contact-section .row .col-sm-4{display:flex;align-items:center;justify-content:center}@media screen and (max-width:800px){.contact-section .row .col-sm-4{padding-bottom:1rem}}.contact-section .row .col-sm-4 a{text-decoration:none;color:#463989;font-size:2rem}.contact-section .row .col-sm-4:first-child a{font-size:3rem;font-weight:700}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BottomSection_vue_vue_type_style_index_0_id_66cf0f90_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BottomSection_vue_vue_type_style_index_0_id_66cf0f90_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BottomSection_vue_vue_type_style_index_0_id_66cf0f90_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BottomSection_vue_vue_type_style_index_0_id_66cf0f90_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BottomSection_vue_vue_type_style_index_0_id_66cf0f90_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".bottom-section{position:fixed;bottom:-3rem;left:0;width:100%;height:15rem;z-index:-1;opacity:.4}@media screen and (max-width:1500px)and (orientation:portrait){.bottom-section{bottom:-8rem}}.bottom-section svg{position:absolute;width:100%;top:-20%}@media screen and (max-width:800px){.bottom-section svg{top:30%}}.bottom-section svg:first-child{left:20%;transform:scaleX(-1)}.bottom-section svg:nth-child(3){top:-30%}@media screen and (max-width:800px){.bottom-section svg:nth-child(3){top:20%;z-index:-1}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuerySection_vue_vue_type_style_index_0_id_cac64c9e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuerySection_vue_vue_type_style_index_0_id_cac64c9e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuerySection_vue_vue_type_style_index_0_id_cac64c9e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuerySection_vue_vue_type_style_index_0_id_cac64c9e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuerySection_vue_vue_type_style_index_0_id_cac64c9e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".query-section{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background-color:rgba(0,0,0,.5)}.query-section .container-fluid{width:50%;background-color:#fff;padding:3rem;border-radius:.7rem}@media screen and (orientation:portrait){.query-section .container-fluid{width:95%;transform:scale(.9);margin-top:5rem}}.query-section .container-fluid .row{padding:1rem}.query-section .container-fluid .row .bx-x{position:absolute;right:1rem;top:1rem;font-size:2rem;cursor:pointer}.query-section .container-fluid .row .form-control{padding:2rem 1rem;font-size:1.4rem;margin-bottom:2rem}.query-section .container-fluid .row .btn{font-size:1.6rem;padding:1rem 2rem;border-radius:3rem;background-color:#1f2044;text-transform:uppercase;border-color:#1f2044}.query-section .container-fluid .error{font-size:.7rem}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeroSection.vue?vue&type=template&id=5e4438f0&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "hero-section section"
  }, [_vm._ssrNode("<div class=\"container-fluid\">", "</div>", [_c('lines'), _vm._ssrNode(" <label data-aos=\"zoom-in\" data-aos-delay=\"500\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\">About Me</label> <h1><div data-aos=\"fade-right\" data-aos-delay=\"500\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\" class=\"d-inline\"><img" + _vm._ssrAttr("src", __webpack_require__(57)) + " class=\"img-fluid wave-icon\"> Hey,\n      </div> <span data-aos=\"fade-left\" data-aos-delay=\"500\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\">Lakshya</span> <div data-aos=\"fade-right\" data-aos-delay=\"500\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\" class=\"d-inline\">here.</div></h1> <h2 data-aos=\"fade-right\" data-aos-delay=\"500\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\">working as Full Stack Developer.</h2> <p data-aos=\"fade-up\" data-aos-delay=\"500\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\">\n      I will help you\n      <span>build your brand</span> and\n      <span>grow your business</span>. I create clarifying strategy, beautiful and engaging websites and ongoing marketing support.\n    </p> <img" + _vm._ssrAttr("src", __webpack_require__(58)) + " alt class=\"img-fluid hero-section-img\">")], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/HeroSection.vue?vue&type=template&id=5e4438f0&

// EXTERNAL MODULE: ./components/partial/Lines.vue + 4 modules
var Lines = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeroSection.vue?vue&type=script&lang=js&

/* harmony default export */ var HeroSectionvue_type_script_lang_js_ = ({
  components: {
    lines: Lines["default"]
  }
});
// CONCATENATED MODULE: ./components/HeroSection.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HeroSectionvue_type_script_lang_js_ = (HeroSectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/HeroSection.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(59)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HeroSectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5ddcb10d"
  
)

/* harmony default export */ var HeroSection = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ServiceSection.vue?vue&type=template&id=00f72b68&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "service-section section"
  }, [_vm._ssrNode("<div class=\"container-fluid\">", "</div>", [_c('lines'), _vm._ssrNode(" <div class=\"row\"><div class=\"col-sm-6\"><label data-aos=\"zoom-in\" data-aos-delay=\"500\" data-aos-duration=\"2000\" data-aos-easing=\"ease-in-out\">My Services</label> <h2><span data-aos=\"fade-right\" data-aos-delay=\"500\" data-aos-duration=\"2000\" data-aos-easing=\"ease-in-out\">Build your brand</span> <div data-aos=\"fade-in\" data-aos-delay=\"500\" data-aos-duration=\"2000\" data-aos-easing=\"ease-in-out\" class=\"d-inline\">\n            and\n            <br>grow your business.\n          </div></h2> <p data-aos=\"fade-right\" data-aos-delay=\"500\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\">Whether you are working on a new startup or have an existing product, I’d love the opportunity to help you and your team solve your most challenging problems.</p> <ul><li data-aos=\"fade-down\" data-aos-delay=\"500\" data-aos-duration=\"2000\" data-aos-easing=\"ease-in-out\">Website Design</li> <li data-aos=\"fade-down\" data-aos-delay=\"1000\" data-aos-duration=\"2000\" data-aos-easing=\"ease-in-out\">Website Development</li> <li data-aos=\"fade-down\" data-aos-delay=\"1500\" data-aos-duration=\"2000\" data-aos-easing=\"ease-in-out\">Mobile App Development</li></ul></div> <div class=\"col-sm-6\"><div class=\"images\"><img data-aos=\"zoom-in\" data-aos-delay=\"1000\" data-aos-duration=\"2000\" data-aos-easing=\"ease-in-out\"" + _vm._ssrAttr("src", __webpack_require__(61)) + " alt class=\"img-1 img-fluid\"> <img data-aos=\"zoom-in\" data-aos-delay=\"500\" data-aos-duration=\"1500\"" + _vm._ssrAttr("src", __webpack_require__(62)) + " alt class=\"img-fluid float-img img-2\"> <img data-aos=\"zoom-in\" data-aos-delay=\"500\" data-aos-duration=\"1700\"" + _vm._ssrAttr("src", __webpack_require__(63)) + " alt class=\"img-fluid float-img img-3\"> <img data-aos=\"zoom-in\" data-aos-delay=\"500\" data-aos-duration=\"1300\"" + _vm._ssrAttr("src", __webpack_require__(64)) + " alt class=\"img-fluid float-img img-4\"> <img data-aos=\"zoom-in\" data-aos-delay=\"500\" data-aos-duration=\"1600\"" + _vm._ssrAttr("src", __webpack_require__(65)) + " alt class=\"img-fluid float-img img-5\"></div></div></div>")], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ServiceSection.vue?vue&type=template&id=00f72b68&

// EXTERNAL MODULE: ./components/partial/Lines.vue + 4 modules
var Lines = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ServiceSection.vue?vue&type=script&lang=js&

/* harmony default export */ var ServiceSectionvue_type_script_lang_js_ = ({
  name: 'ServiceSection',
  components: {
    lines: Lines["default"]
  }
});
// CONCATENATED MODULE: ./components/ServiceSection.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ServiceSectionvue_type_script_lang_js_ = (ServiceSectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ServiceSection.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(66)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ServiceSectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "14349b44"
  
)

/* harmony default export */ var ServiceSection = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FeaturedSection.vue?vue&type=template&id=23a546aa&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('section', {
    staticClass: "featured-section section"
  }, [_vm._ssrNode("<div class=\"container-fluid\">", "</div>", [_c('lines'), _vm._ssrNode(" <div class=\"row\"><div class=\"col-sm-6 order-md-2 content\"><label data-aos=\"zoom-in\" data-aos-delay=\"500\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\">My Featured Skills</label> <h2><div data-aos=\"fade-in\" data-aos-delay=\"500\" data-aos-duration=\"2000\" data-aos-easing=\"ease-in-out\" class=\"d-inline\">\n            I’m using\n          </div> <span data-aos=\"fade-right\" data-aos-delay=\"500\" data-aos-duration=\"2000\" data-aos-easing=\"ease-in-out\">top leading</span> <br> <div data-aos=\"fade-in\" data-aos-delay=\"500\" data-aos-duration=\"2000\" data-aos-easing=\"ease-in-out\" class=\"d-inline\">\n            development languages.\n          </div></h2> <p data-aos=\"fade-right\" data-aos-delay=\"500\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\">\n          I specialize in helping early stage startups validate their riskiest\n          assumptions using\n          <strong>leading development languages.</strong></p> <div class=\"languages\">" + _vm._ssrList(_vm.languages, function (lang, index) {
    return "<div class=\"languages-box\"><div class=\"languages-box-header\"><h4 data-aos=\"fade-right\" data-aos-delay=\"500\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\">" + _vm._ssrEscape("\n                " + _vm._s(lang.name) + "\n              ") + "</h4> <span data-aos=\"fade-left\" data-aos-delay=\"500\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\">" + _vm._ssrEscape(_vm._s(lang.percentage)) + "</span></div> <div class=\"progress\"><div data-aos=\"fade-right\" data-aos-delay=\"500\" data-aos-duration=\"1500\" data-aos-easing=\"ease-in-out\" role=\"progressbar\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\" class=\"progress-bar\"" + _vm._ssrStyle(null, {
      width: lang.percentage
    }, null) + "></div></div></div>";
  }) + "</div></div> <div class=\"col-sm-6 order-md-1 images\"><img" + _vm._ssrAttr("src", __webpack_require__(68)) + " alt data-aos=\"flip-right\" data-aos-delay=\"500\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\" data-aos-anchor-placement=\"top-bottom\" class=\"img-fluid img-1 shadow\"> <img" + _vm._ssrAttr("src", __webpack_require__(69)) + " alt data-aos=\"flip-right\" data-aos-delay=\"500\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\" data-aos-anchor-placement=\"top-bottom\" class=\"img-fluid img-2 shadow\"> <img" + _vm._ssrAttr("src", __webpack_require__(70)) + " alt data-aos=\"flip-left\" data-aos-delay=\"500\" data-aos-duration=\"1500\" data-aos-easing=\"ease-in-out\" data-aos-anchor-placement=\"top-bottom\" class=\"img-fluid img-3 shadow\"> <img" + _vm._ssrAttr("src", __webpack_require__(71)) + " alt data-aos=\"flip-right\" data-aos-delay=\"500\" data-aos-duration=\"1000\" data-aos-easing=\"ease-in-out\" data-aos-anchor-placement=\"top-bottom\" class=\"img-fluid img-4 shadow\"></div></div>")], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/FeaturedSection.vue?vue&type=template&id=23a546aa&

// EXTERNAL MODULE: ./components/partial/Lines.vue + 4 modules
var Lines = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FeaturedSection.vue?vue&type=script&lang=js&

/* harmony default export */ var FeaturedSectionvue_type_script_lang_js_ = ({
  components: {
    lines: Lines["default"]
  },

  data() {
    return {
      languages: [{
        name: "Laravel",
        percentage: "80%"
      }, {
        name: "Vue",
        percentage: "70%"
      }, {
        name: "Livewire",
        percentage: "75%"
      }, {
        name: "Javascript",
        percentage: "75%"
      }, {
        name: "CSS3",
        percentage: "90%"
      }, {
        name: "Nuxt3",
        percentage: "70%"
      }, {
        name: "NodeJs",
        percentage: "60%"
      }, {
        name: "ExpressJs",
        percentage: "60%"
      }, {
        name: "Jquery",
        percentage: "80%"
      }, {
        name: "PHP",
        percentage: "70%"
      }, {
        name: "Bootstrap",
        percentage: "80%"
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/FeaturedSection.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FeaturedSectionvue_type_script_lang_js_ = (FeaturedSectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/FeaturedSection.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(72)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FeaturedSectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "02266f59"
  
)

/* harmony default export */ var FeaturedSection = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 96 */
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

/***/ }),
/* 97 */
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

/***/ }),
/* 98 */
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

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BottomSection.vue?vue&type=template&id=66cf0f90&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "bottom-section section"
  }, [_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 320\"><path fill=\"#F79784\" fill-opacity=\"1\" d=\"M0,64L26.7,74.7C53.3,85,107,107,160,106.7C213.3,107,267,85,320,90.7C373.3,96,427,128,480,117.3C533.3,107,587,53,640,69.3C693.3,85,747,171,800,197.3C853.3,224,907,192,960,192C1013.3,192,1067,224,1120,229.3C1173.3,235,1227,213,1280,202.7C1333.3,192,1387,192,1413,192L1440,192L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z\"></path></svg> <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 320\"><path fill=\"#78ACD9\" fill-opacity=\"1\" d=\"M0,192L26.7,192C53.3,192,107,192,160,176C213.3,160,267,128,320,106.7C373.3,85,427,75,480,64C533.3,53,587,43,640,64C693.3,85,747,139,800,165.3C853.3,192,907,192,960,208C1013.3,224,1067,256,1120,250.7C1173.3,245,1227,203,1280,197.3C1333.3,192,1387,224,1413,240L1440,256L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z\"></path></svg> <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 320\"><path fill=\"#F5E3D4\" fill-opacity=\"1\" d=\"M0,192L26.7,202.7C53.3,213,107,235,160,245.3C213.3,256,267,256,320,256C373.3,256,427,256,480,266.7C533.3,277,587,299,640,266.7C693.3,235,747,149,800,133.3C853.3,117,907,171,960,181.3C1013.3,192,1067,160,1120,170.7C1173.3,181,1227,235,1280,261.3C1333.3,288,1387,288,1413,288L1440,288L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z\"></path></svg>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/BottomSection.vue?vue&type=template&id=66cf0f90&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BottomSection.vue?vue&type=script&lang=js&
/* harmony default export */ var BottomSectionvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/BottomSection.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BottomSectionvue_type_script_lang_js_ = (BottomSectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BottomSection.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(89)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BottomSectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0b275bbc"
  
)

/* harmony default export */ var BottomSection = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 100 */
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
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/include/Navbar.vue?vue&type=template&id=98fbc80e&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "navbar"
  }, [_vm._ssrNode("<div class=\"container-fluid\"><div class=\"navbar-left\"><div class=\"navbar-left-title\">\n        Lakshya\n        <span>Verma</span></div></div> <div class=\"navbar-right\"><a href=\"./resume.pdf\" download=\"lakshya-resume\">Download CV</a></div></div>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/include/Navbar.vue?vue&type=template&id=98fbc80e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/include/Navbar.vue?vue&type=script&lang=js&
/* harmony default export */ var Navbarvue_type_script_lang_js_ = ({
  name: 'TheNavbar'
});
// CONCATENATED MODULE: ./components/include/Navbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var include_Navbarvue_type_script_lang_js_ = (Navbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/include/Navbar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(55)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  include_Navbarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "949b5076"
  
)

/* harmony default export */ var Navbar = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(103);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("0667d9c0", content, true)

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "[data-aos][data-aos][data-aos-duration=\"50\"],body[data-aos-duration=\"50\"] [data-aos]{transition-duration:50ms}[data-aos][data-aos][data-aos-delay=\"50\"],body[data-aos-delay=\"50\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"50\"].aos-animate,body[data-aos-delay=\"50\"] [data-aos].aos-animate{transition-delay:50ms}[data-aos][data-aos][data-aos-duration=\"100\"],body[data-aos-duration=\"100\"] [data-aos]{transition-duration:.1s}[data-aos][data-aos][data-aos-delay=\"100\"],body[data-aos-delay=\"100\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"100\"].aos-animate,body[data-aos-delay=\"100\"] [data-aos].aos-animate{transition-delay:.1s}[data-aos][data-aos][data-aos-duration=\"150\"],body[data-aos-duration=\"150\"] [data-aos]{transition-duration:.15s}[data-aos][data-aos][data-aos-delay=\"150\"],body[data-aos-delay=\"150\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"150\"].aos-animate,body[data-aos-delay=\"150\"] [data-aos].aos-animate{transition-delay:.15s}[data-aos][data-aos][data-aos-duration=\"200\"],body[data-aos-duration=\"200\"] [data-aos]{transition-duration:.2s}[data-aos][data-aos][data-aos-delay=\"200\"],body[data-aos-delay=\"200\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"200\"].aos-animate,body[data-aos-delay=\"200\"] [data-aos].aos-animate{transition-delay:.2s}[data-aos][data-aos][data-aos-duration=\"250\"],body[data-aos-duration=\"250\"] [data-aos]{transition-duration:.25s}[data-aos][data-aos][data-aos-delay=\"250\"],body[data-aos-delay=\"250\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"250\"].aos-animate,body[data-aos-delay=\"250\"] [data-aos].aos-animate{transition-delay:.25s}[data-aos][data-aos][data-aos-duration=\"300\"],body[data-aos-duration=\"300\"] [data-aos]{transition-duration:.3s}[data-aos][data-aos][data-aos-delay=\"300\"],body[data-aos-delay=\"300\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"300\"].aos-animate,body[data-aos-delay=\"300\"] [data-aos].aos-animate{transition-delay:.3s}[data-aos][data-aos][data-aos-duration=\"350\"],body[data-aos-duration=\"350\"] [data-aos]{transition-duration:.35s}[data-aos][data-aos][data-aos-delay=\"350\"],body[data-aos-delay=\"350\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"350\"].aos-animate,body[data-aos-delay=\"350\"] [data-aos].aos-animate{transition-delay:.35s}[data-aos][data-aos][data-aos-duration=\"400\"],body[data-aos-duration=\"400\"] [data-aos]{transition-duration:.4s}[data-aos][data-aos][data-aos-delay=\"400\"],body[data-aos-delay=\"400\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"400\"].aos-animate,body[data-aos-delay=\"400\"] [data-aos].aos-animate{transition-delay:.4s}[data-aos][data-aos][data-aos-duration=\"450\"],body[data-aos-duration=\"450\"] [data-aos]{transition-duration:.45s}[data-aos][data-aos][data-aos-delay=\"450\"],body[data-aos-delay=\"450\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"450\"].aos-animate,body[data-aos-delay=\"450\"] [data-aos].aos-animate{transition-delay:.45s}[data-aos][data-aos][data-aos-duration=\"500\"],body[data-aos-duration=\"500\"] [data-aos]{transition-duration:.5s}[data-aos][data-aos][data-aos-delay=\"500\"],body[data-aos-delay=\"500\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"500\"].aos-animate,body[data-aos-delay=\"500\"] [data-aos].aos-animate{transition-delay:.5s}[data-aos][data-aos][data-aos-duration=\"550\"],body[data-aos-duration=\"550\"] [data-aos]{transition-duration:.55s}[data-aos][data-aos][data-aos-delay=\"550\"],body[data-aos-delay=\"550\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"550\"].aos-animate,body[data-aos-delay=\"550\"] [data-aos].aos-animate{transition-delay:.55s}[data-aos][data-aos][data-aos-duration=\"600\"],body[data-aos-duration=\"600\"] [data-aos]{transition-duration:.6s}[data-aos][data-aos][data-aos-delay=\"600\"],body[data-aos-delay=\"600\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"600\"].aos-animate,body[data-aos-delay=\"600\"] [data-aos].aos-animate{transition-delay:.6s}[data-aos][data-aos][data-aos-duration=\"650\"],body[data-aos-duration=\"650\"] [data-aos]{transition-duration:.65s}[data-aos][data-aos][data-aos-delay=\"650\"],body[data-aos-delay=\"650\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"650\"].aos-animate,body[data-aos-delay=\"650\"] [data-aos].aos-animate{transition-delay:.65s}[data-aos][data-aos][data-aos-duration=\"700\"],body[data-aos-duration=\"700\"] [data-aos]{transition-duration:.7s}[data-aos][data-aos][data-aos-delay=\"700\"],body[data-aos-delay=\"700\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"700\"].aos-animate,body[data-aos-delay=\"700\"] [data-aos].aos-animate{transition-delay:.7s}[data-aos][data-aos][data-aos-duration=\"750\"],body[data-aos-duration=\"750\"] [data-aos]{transition-duration:.75s}[data-aos][data-aos][data-aos-delay=\"750\"],body[data-aos-delay=\"750\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"750\"].aos-animate,body[data-aos-delay=\"750\"] [data-aos].aos-animate{transition-delay:.75s}[data-aos][data-aos][data-aos-duration=\"800\"],body[data-aos-duration=\"800\"] [data-aos]{transition-duration:.8s}[data-aos][data-aos][data-aos-delay=\"800\"],body[data-aos-delay=\"800\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"800\"].aos-animate,body[data-aos-delay=\"800\"] [data-aos].aos-animate{transition-delay:.8s}[data-aos][data-aos][data-aos-duration=\"850\"],body[data-aos-duration=\"850\"] [data-aos]{transition-duration:.85s}[data-aos][data-aos][data-aos-delay=\"850\"],body[data-aos-delay=\"850\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"850\"].aos-animate,body[data-aos-delay=\"850\"] [data-aos].aos-animate{transition-delay:.85s}[data-aos][data-aos][data-aos-duration=\"900\"],body[data-aos-duration=\"900\"] [data-aos]{transition-duration:.9s}[data-aos][data-aos][data-aos-delay=\"900\"],body[data-aos-delay=\"900\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"900\"].aos-animate,body[data-aos-delay=\"900\"] [data-aos].aos-animate{transition-delay:.9s}[data-aos][data-aos][data-aos-duration=\"950\"],body[data-aos-duration=\"950\"] [data-aos]{transition-duration:.95s}[data-aos][data-aos][data-aos-delay=\"950\"],body[data-aos-delay=\"950\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"950\"].aos-animate,body[data-aos-delay=\"950\"] [data-aos].aos-animate{transition-delay:.95s}[data-aos][data-aos][data-aos-duration=\"1000\"],body[data-aos-duration=\"1000\"] [data-aos]{transition-duration:1s}[data-aos][data-aos][data-aos-delay=\"1000\"],body[data-aos-delay=\"1000\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1000\"].aos-animate,body[data-aos-delay=\"1000\"] [data-aos].aos-animate{transition-delay:1s}[data-aos][data-aos][data-aos-duration=\"1050\"],body[data-aos-duration=\"1050\"] [data-aos]{transition-duration:1.05s}[data-aos][data-aos][data-aos-delay=\"1050\"],body[data-aos-delay=\"1050\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1050\"].aos-animate,body[data-aos-delay=\"1050\"] [data-aos].aos-animate{transition-delay:1.05s}[data-aos][data-aos][data-aos-duration=\"1100\"],body[data-aos-duration=\"1100\"] [data-aos]{transition-duration:1.1s}[data-aos][data-aos][data-aos-delay=\"1100\"],body[data-aos-delay=\"1100\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1100\"].aos-animate,body[data-aos-delay=\"1100\"] [data-aos].aos-animate{transition-delay:1.1s}[data-aos][data-aos][data-aos-duration=\"1150\"],body[data-aos-duration=\"1150\"] [data-aos]{transition-duration:1.15s}[data-aos][data-aos][data-aos-delay=\"1150\"],body[data-aos-delay=\"1150\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1150\"].aos-animate,body[data-aos-delay=\"1150\"] [data-aos].aos-animate{transition-delay:1.15s}[data-aos][data-aos][data-aos-duration=\"1200\"],body[data-aos-duration=\"1200\"] [data-aos]{transition-duration:1.2s}[data-aos][data-aos][data-aos-delay=\"1200\"],body[data-aos-delay=\"1200\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1200\"].aos-animate,body[data-aos-delay=\"1200\"] [data-aos].aos-animate{transition-delay:1.2s}[data-aos][data-aos][data-aos-duration=\"1250\"],body[data-aos-duration=\"1250\"] [data-aos]{transition-duration:1.25s}[data-aos][data-aos][data-aos-delay=\"1250\"],body[data-aos-delay=\"1250\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1250\"].aos-animate,body[data-aos-delay=\"1250\"] [data-aos].aos-animate{transition-delay:1.25s}[data-aos][data-aos][data-aos-duration=\"1300\"],body[data-aos-duration=\"1300\"] [data-aos]{transition-duration:1.3s}[data-aos][data-aos][data-aos-delay=\"1300\"],body[data-aos-delay=\"1300\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1300\"].aos-animate,body[data-aos-delay=\"1300\"] [data-aos].aos-animate{transition-delay:1.3s}[data-aos][data-aos][data-aos-duration=\"1350\"],body[data-aos-duration=\"1350\"] [data-aos]{transition-duration:1.35s}[data-aos][data-aos][data-aos-delay=\"1350\"],body[data-aos-delay=\"1350\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1350\"].aos-animate,body[data-aos-delay=\"1350\"] [data-aos].aos-animate{transition-delay:1.35s}[data-aos][data-aos][data-aos-duration=\"1400\"],body[data-aos-duration=\"1400\"] [data-aos]{transition-duration:1.4s}[data-aos][data-aos][data-aos-delay=\"1400\"],body[data-aos-delay=\"1400\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1400\"].aos-animate,body[data-aos-delay=\"1400\"] [data-aos].aos-animate{transition-delay:1.4s}[data-aos][data-aos][data-aos-duration=\"1450\"],body[data-aos-duration=\"1450\"] [data-aos]{transition-duration:1.45s}[data-aos][data-aos][data-aos-delay=\"1450\"],body[data-aos-delay=\"1450\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1450\"].aos-animate,body[data-aos-delay=\"1450\"] [data-aos].aos-animate{transition-delay:1.45s}[data-aos][data-aos][data-aos-duration=\"1500\"],body[data-aos-duration=\"1500\"] [data-aos]{transition-duration:1.5s}[data-aos][data-aos][data-aos-delay=\"1500\"],body[data-aos-delay=\"1500\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1500\"].aos-animate,body[data-aos-delay=\"1500\"] [data-aos].aos-animate{transition-delay:1.5s}[data-aos][data-aos][data-aos-duration=\"1550\"],body[data-aos-duration=\"1550\"] [data-aos]{transition-duration:1.55s}[data-aos][data-aos][data-aos-delay=\"1550\"],body[data-aos-delay=\"1550\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1550\"].aos-animate,body[data-aos-delay=\"1550\"] [data-aos].aos-animate{transition-delay:1.55s}[data-aos][data-aos][data-aos-duration=\"1600\"],body[data-aos-duration=\"1600\"] [data-aos]{transition-duration:1.6s}[data-aos][data-aos][data-aos-delay=\"1600\"],body[data-aos-delay=\"1600\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1600\"].aos-animate,body[data-aos-delay=\"1600\"] [data-aos].aos-animate{transition-delay:1.6s}[data-aos][data-aos][data-aos-duration=\"1650\"],body[data-aos-duration=\"1650\"] [data-aos]{transition-duration:1.65s}[data-aos][data-aos][data-aos-delay=\"1650\"],body[data-aos-delay=\"1650\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1650\"].aos-animate,body[data-aos-delay=\"1650\"] [data-aos].aos-animate{transition-delay:1.65s}[data-aos][data-aos][data-aos-duration=\"1700\"],body[data-aos-duration=\"1700\"] [data-aos]{transition-duration:1.7s}[data-aos][data-aos][data-aos-delay=\"1700\"],body[data-aos-delay=\"1700\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1700\"].aos-animate,body[data-aos-delay=\"1700\"] [data-aos].aos-animate{transition-delay:1.7s}[data-aos][data-aos][data-aos-duration=\"1750\"],body[data-aos-duration=\"1750\"] [data-aos]{transition-duration:1.75s}[data-aos][data-aos][data-aos-delay=\"1750\"],body[data-aos-delay=\"1750\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1750\"].aos-animate,body[data-aos-delay=\"1750\"] [data-aos].aos-animate{transition-delay:1.75s}[data-aos][data-aos][data-aos-duration=\"1800\"],body[data-aos-duration=\"1800\"] [data-aos]{transition-duration:1.8s}[data-aos][data-aos][data-aos-delay=\"1800\"],body[data-aos-delay=\"1800\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1800\"].aos-animate,body[data-aos-delay=\"1800\"] [data-aos].aos-animate{transition-delay:1.8s}[data-aos][data-aos][data-aos-duration=\"1850\"],body[data-aos-duration=\"1850\"] [data-aos]{transition-duration:1.85s}[data-aos][data-aos][data-aos-delay=\"1850\"],body[data-aos-delay=\"1850\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1850\"].aos-animate,body[data-aos-delay=\"1850\"] [data-aos].aos-animate{transition-delay:1.85s}[data-aos][data-aos][data-aos-duration=\"1900\"],body[data-aos-duration=\"1900\"] [data-aos]{transition-duration:1.9s}[data-aos][data-aos][data-aos-delay=\"1900\"],body[data-aos-delay=\"1900\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1900\"].aos-animate,body[data-aos-delay=\"1900\"] [data-aos].aos-animate{transition-delay:1.9s}[data-aos][data-aos][data-aos-duration=\"1950\"],body[data-aos-duration=\"1950\"] [data-aos]{transition-duration:1.95s}[data-aos][data-aos][data-aos-delay=\"1950\"],body[data-aos-delay=\"1950\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"1950\"].aos-animate,body[data-aos-delay=\"1950\"] [data-aos].aos-animate{transition-delay:1.95s}[data-aos][data-aos][data-aos-duration=\"2000\"],body[data-aos-duration=\"2000\"] [data-aos]{transition-duration:2s}[data-aos][data-aos][data-aos-delay=\"2000\"],body[data-aos-delay=\"2000\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2000\"].aos-animate,body[data-aos-delay=\"2000\"] [data-aos].aos-animate{transition-delay:2s}[data-aos][data-aos][data-aos-duration=\"2050\"],body[data-aos-duration=\"2050\"] [data-aos]{transition-duration:2.05s}[data-aos][data-aos][data-aos-delay=\"2050\"],body[data-aos-delay=\"2050\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2050\"].aos-animate,body[data-aos-delay=\"2050\"] [data-aos].aos-animate{transition-delay:2.05s}[data-aos][data-aos][data-aos-duration=\"2100\"],body[data-aos-duration=\"2100\"] [data-aos]{transition-duration:2.1s}[data-aos][data-aos][data-aos-delay=\"2100\"],body[data-aos-delay=\"2100\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2100\"].aos-animate,body[data-aos-delay=\"2100\"] [data-aos].aos-animate{transition-delay:2.1s}[data-aos][data-aos][data-aos-duration=\"2150\"],body[data-aos-duration=\"2150\"] [data-aos]{transition-duration:2.15s}[data-aos][data-aos][data-aos-delay=\"2150\"],body[data-aos-delay=\"2150\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2150\"].aos-animate,body[data-aos-delay=\"2150\"] [data-aos].aos-animate{transition-delay:2.15s}[data-aos][data-aos][data-aos-duration=\"2200\"],body[data-aos-duration=\"2200\"] [data-aos]{transition-duration:2.2s}[data-aos][data-aos][data-aos-delay=\"2200\"],body[data-aos-delay=\"2200\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2200\"].aos-animate,body[data-aos-delay=\"2200\"] [data-aos].aos-animate{transition-delay:2.2s}[data-aos][data-aos][data-aos-duration=\"2250\"],body[data-aos-duration=\"2250\"] [data-aos]{transition-duration:2.25s}[data-aos][data-aos][data-aos-delay=\"2250\"],body[data-aos-delay=\"2250\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2250\"].aos-animate,body[data-aos-delay=\"2250\"] [data-aos].aos-animate{transition-delay:2.25s}[data-aos][data-aos][data-aos-duration=\"2300\"],body[data-aos-duration=\"2300\"] [data-aos]{transition-duration:2.3s}[data-aos][data-aos][data-aos-delay=\"2300\"],body[data-aos-delay=\"2300\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2300\"].aos-animate,body[data-aos-delay=\"2300\"] [data-aos].aos-animate{transition-delay:2.3s}[data-aos][data-aos][data-aos-duration=\"2350\"],body[data-aos-duration=\"2350\"] [data-aos]{transition-duration:2.35s}[data-aos][data-aos][data-aos-delay=\"2350\"],body[data-aos-delay=\"2350\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2350\"].aos-animate,body[data-aos-delay=\"2350\"] [data-aos].aos-animate{transition-delay:2.35s}[data-aos][data-aos][data-aos-duration=\"2400\"],body[data-aos-duration=\"2400\"] [data-aos]{transition-duration:2.4s}[data-aos][data-aos][data-aos-delay=\"2400\"],body[data-aos-delay=\"2400\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2400\"].aos-animate,body[data-aos-delay=\"2400\"] [data-aos].aos-animate{transition-delay:2.4s}[data-aos][data-aos][data-aos-duration=\"2450\"],body[data-aos-duration=\"2450\"] [data-aos]{transition-duration:2.45s}[data-aos][data-aos][data-aos-delay=\"2450\"],body[data-aos-delay=\"2450\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2450\"].aos-animate,body[data-aos-delay=\"2450\"] [data-aos].aos-animate{transition-delay:2.45s}[data-aos][data-aos][data-aos-duration=\"2500\"],body[data-aos-duration=\"2500\"] [data-aos]{transition-duration:2.5s}[data-aos][data-aos][data-aos-delay=\"2500\"],body[data-aos-delay=\"2500\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2500\"].aos-animate,body[data-aos-delay=\"2500\"] [data-aos].aos-animate{transition-delay:2.5s}[data-aos][data-aos][data-aos-duration=\"2550\"],body[data-aos-duration=\"2550\"] [data-aos]{transition-duration:2.55s}[data-aos][data-aos][data-aos-delay=\"2550\"],body[data-aos-delay=\"2550\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2550\"].aos-animate,body[data-aos-delay=\"2550\"] [data-aos].aos-animate{transition-delay:2.55s}[data-aos][data-aos][data-aos-duration=\"2600\"],body[data-aos-duration=\"2600\"] [data-aos]{transition-duration:2.6s}[data-aos][data-aos][data-aos-delay=\"2600\"],body[data-aos-delay=\"2600\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2600\"].aos-animate,body[data-aos-delay=\"2600\"] [data-aos].aos-animate{transition-delay:2.6s}[data-aos][data-aos][data-aos-duration=\"2650\"],body[data-aos-duration=\"2650\"] [data-aos]{transition-duration:2.65s}[data-aos][data-aos][data-aos-delay=\"2650\"],body[data-aos-delay=\"2650\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2650\"].aos-animate,body[data-aos-delay=\"2650\"] [data-aos].aos-animate{transition-delay:2.65s}[data-aos][data-aos][data-aos-duration=\"2700\"],body[data-aos-duration=\"2700\"] [data-aos]{transition-duration:2.7s}[data-aos][data-aos][data-aos-delay=\"2700\"],body[data-aos-delay=\"2700\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2700\"].aos-animate,body[data-aos-delay=\"2700\"] [data-aos].aos-animate{transition-delay:2.7s}[data-aos][data-aos][data-aos-duration=\"2750\"],body[data-aos-duration=\"2750\"] [data-aos]{transition-duration:2.75s}[data-aos][data-aos][data-aos-delay=\"2750\"],body[data-aos-delay=\"2750\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2750\"].aos-animate,body[data-aos-delay=\"2750\"] [data-aos].aos-animate{transition-delay:2.75s}[data-aos][data-aos][data-aos-duration=\"2800\"],body[data-aos-duration=\"2800\"] [data-aos]{transition-duration:2.8s}[data-aos][data-aos][data-aos-delay=\"2800\"],body[data-aos-delay=\"2800\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2800\"].aos-animate,body[data-aos-delay=\"2800\"] [data-aos].aos-animate{transition-delay:2.8s}[data-aos][data-aos][data-aos-duration=\"2850\"],body[data-aos-duration=\"2850\"] [data-aos]{transition-duration:2.85s}[data-aos][data-aos][data-aos-delay=\"2850\"],body[data-aos-delay=\"2850\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2850\"].aos-animate,body[data-aos-delay=\"2850\"] [data-aos].aos-animate{transition-delay:2.85s}[data-aos][data-aos][data-aos-duration=\"2900\"],body[data-aos-duration=\"2900\"] [data-aos]{transition-duration:2.9s}[data-aos][data-aos][data-aos-delay=\"2900\"],body[data-aos-delay=\"2900\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2900\"].aos-animate,body[data-aos-delay=\"2900\"] [data-aos].aos-animate{transition-delay:2.9s}[data-aos][data-aos][data-aos-duration=\"2950\"],body[data-aos-duration=\"2950\"] [data-aos]{transition-duration:2.95s}[data-aos][data-aos][data-aos-delay=\"2950\"],body[data-aos-delay=\"2950\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"2950\"].aos-animate,body[data-aos-delay=\"2950\"] [data-aos].aos-animate{transition-delay:2.95s}[data-aos][data-aos][data-aos-duration=\"3000\"],body[data-aos-duration=\"3000\"] [data-aos]{transition-duration:3s}[data-aos][data-aos][data-aos-delay=\"3000\"],body[data-aos-delay=\"3000\"] [data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay=\"3000\"].aos-animate,body[data-aos-delay=\"3000\"] [data-aos].aos-animate{transition-delay:3s}[data-aos][data-aos][data-aos-easing=linear],body[data-aos-easing=linear] [data-aos]{transition-timing-function:cubic-bezier(.25,.25,.75,.75)}[data-aos][data-aos][data-aos-easing=ease],body[data-aos-easing=ease] [data-aos]{transition-timing-function:ease}[data-aos][data-aos][data-aos-easing=ease-in],body[data-aos-easing=ease-in] [data-aos]{transition-timing-function:ease-in}[data-aos][data-aos][data-aos-easing=ease-out],body[data-aos-easing=ease-out] [data-aos]{transition-timing-function:ease-out}[data-aos][data-aos][data-aos-easing=ease-in-out],body[data-aos-easing=ease-in-out] [data-aos]{transition-timing-function:ease-in-out}[data-aos][data-aos][data-aos-easing=ease-in-back],body[data-aos-easing=ease-in-back] [data-aos]{transition-timing-function:cubic-bezier(.6,-.28,.735,.045)}[data-aos][data-aos][data-aos-easing=ease-out-back],body[data-aos-easing=ease-out-back] [data-aos]{transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}[data-aos][data-aos][data-aos-easing=ease-in-out-back],body[data-aos-easing=ease-in-out-back] [data-aos]{transition-timing-function:cubic-bezier(.68,-.55,.265,1.55)}[data-aos][data-aos][data-aos-easing=ease-in-sine],body[data-aos-easing=ease-in-sine] [data-aos]{transition-timing-function:cubic-bezier(.47,0,.745,.715)}[data-aos][data-aos][data-aos-easing=ease-out-sine],body[data-aos-easing=ease-out-sine] [data-aos]{transition-timing-function:cubic-bezier(.39,.575,.565,1)}[data-aos][data-aos][data-aos-easing=ease-in-out-sine],body[data-aos-easing=ease-in-out-sine] [data-aos]{transition-timing-function:cubic-bezier(.445,.05,.55,.95)}[data-aos][data-aos][data-aos-easing=ease-in-quad],body[data-aos-easing=ease-in-quad] [data-aos]{transition-timing-function:cubic-bezier(.55,.085,.68,.53)}[data-aos][data-aos][data-aos-easing=ease-out-quad],body[data-aos-easing=ease-out-quad] [data-aos]{transition-timing-function:cubic-bezier(.25,.46,.45,.94)}[data-aos][data-aos][data-aos-easing=ease-in-out-quad],body[data-aos-easing=ease-in-out-quad] [data-aos]{transition-timing-function:cubic-bezier(.455,.03,.515,.955)}[data-aos][data-aos][data-aos-easing=ease-in-cubic],body[data-aos-easing=ease-in-cubic] [data-aos]{transition-timing-function:cubic-bezier(.55,.085,.68,.53)}[data-aos][data-aos][data-aos-easing=ease-out-cubic],body[data-aos-easing=ease-out-cubic] [data-aos]{transition-timing-function:cubic-bezier(.25,.46,.45,.94)}[data-aos][data-aos][data-aos-easing=ease-in-out-cubic],body[data-aos-easing=ease-in-out-cubic] [data-aos]{transition-timing-function:cubic-bezier(.455,.03,.515,.955)}[data-aos][data-aos][data-aos-easing=ease-in-quart],body[data-aos-easing=ease-in-quart] [data-aos]{transition-timing-function:cubic-bezier(.55,.085,.68,.53)}[data-aos][data-aos][data-aos-easing=ease-out-quart],body[data-aos-easing=ease-out-quart] [data-aos]{transition-timing-function:cubic-bezier(.25,.46,.45,.94)}[data-aos][data-aos][data-aos-easing=ease-in-out-quart],body[data-aos-easing=ease-in-out-quart] [data-aos]{transition-timing-function:cubic-bezier(.455,.03,.515,.955)}[data-aos^=fade][data-aos^=fade]{opacity:0;transition-property:opacity,transform}[data-aos^=fade][data-aos^=fade].aos-animate{opacity:1;transform:translateZ(0)}[data-aos=fade-up]{transform:translate3d(0,100px,0)}[data-aos=fade-down]{transform:translate3d(0,-100px,0)}[data-aos=fade-right]{transform:translate3d(-100px,0,0)}[data-aos=fade-left]{transform:translate3d(100px,0,0)}[data-aos=fade-up-right]{transform:translate3d(-100px,100px,0)}[data-aos=fade-up-left]{transform:translate3d(100px,100px,0)}[data-aos=fade-down-right]{transform:translate3d(-100px,-100px,0)}[data-aos=fade-down-left]{transform:translate3d(100px,-100px,0)}[data-aos^=zoom][data-aos^=zoom]{opacity:0;transition-property:opacity,transform}[data-aos^=zoom][data-aos^=zoom].aos-animate{opacity:1;transform:translateZ(0) scale(1)}[data-aos=zoom-in]{transform:scale(.6)}[data-aos=zoom-in-up]{transform:translate3d(0,100px,0) scale(.6)}[data-aos=zoom-in-down]{transform:translate3d(0,-100px,0) scale(.6)}[data-aos=zoom-in-right]{transform:translate3d(-100px,0,0) scale(.6)}[data-aos=zoom-in-left]{transform:translate3d(100px,0,0) scale(.6)}[data-aos=zoom-out]{transform:scale(1.2)}[data-aos=zoom-out-up]{transform:translate3d(0,100px,0) scale(1.2)}[data-aos=zoom-out-down]{transform:translate3d(0,-100px,0) scale(1.2)}[data-aos=zoom-out-right]{transform:translate3d(-100px,0,0) scale(1.2)}[data-aos=zoom-out-left]{transform:translate3d(100px,0,0) scale(1.2)}[data-aos^=slide][data-aos^=slide]{transition-property:transform}[data-aos^=slide][data-aos^=slide].aos-animate{transform:translateZ(0)}[data-aos=slide-up]{transform:translate3d(0,100%,0)}[data-aos=slide-down]{transform:translate3d(0,-100%,0)}[data-aos=slide-right]{transform:translate3d(-100%,0,0)}[data-aos=slide-left]{transform:translate3d(100%,0,0)}[data-aos^=flip][data-aos^=flip]{-webkit-backface-visibility:hidden;backface-visibility:hidden;transition-property:transform}[data-aos=flip-left]{transform:perspective(2500px) rotateY(-100deg)}[data-aos=flip-left].aos-animate{transform:perspective(2500px) rotateY(0)}[data-aos=flip-right]{transform:perspective(2500px) rotateY(100deg)}[data-aos=flip-right].aos-animate{transform:perspective(2500px) rotateY(0)}[data-aos=flip-up]{transform:perspective(2500px) rotateX(-100deg)}[data-aos=flip-up].aos-animate{transform:perspective(2500px) rotateX(0)}[data-aos=flip-down]{transform:perspective(2500px) rotateX(100deg)}[data-aos=flip-down].aos-animate{transform:perspective(2500px) rotateX(0)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=5167ecde&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [_c('Navbar'), _vm._ssrNode(" "), _c('hero-section'), _vm._ssrNode(" "), _c('service-section'), _vm._ssrNode(" "), _c('featured-section'), _vm._ssrNode(" "), _c('experience-section'), _vm._ssrNode(" "), _c('company-section'), _vm._ssrNode(" "), _c('contact-section', {
    attrs: {
      "popup": _vm.popup
    },
    on: {
      "changePopup": function ($event) {
        return _vm.PopupChange($event);
      }
    }
  }), _vm._ssrNode(" "), _c('bottom-section'), _vm._ssrNode(" "), _c('query-section', {
    attrs: {
      "popup": _vm.popup
    },
    on: {
      "changePopup": function ($event) {
        return _vm.PopupChange($event);
      }
    }
  })], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=5167ecde&

// EXTERNAL MODULE: external "aos"
var external_aos_ = __webpack_require__(36);
var external_aos_default = /*#__PURE__*/__webpack_require__.n(external_aos_);

// EXTERNAL MODULE: ./node_modules/aos/dist/aos.css
var aos = __webpack_require__(102);

// EXTERNAL MODULE: ./components/include/Navbar.vue + 4 modules
var Navbar = __webpack_require__(101);

// EXTERNAL MODULE: ./components/HeroSection.vue + 4 modules
var HeroSection = __webpack_require__(93);

// EXTERNAL MODULE: ./components/ServiceSection.vue + 4 modules
var ServiceSection = __webpack_require__(94);

// EXTERNAL MODULE: ./components/FeaturedSection.vue + 4 modules
var FeaturedSection = __webpack_require__(95);

// EXTERNAL MODULE: ./components/ExperienceSection.vue + 4 modules
var ExperienceSection = __webpack_require__(96);

// EXTERNAL MODULE: ./components/CompanySection.vue + 4 modules
var CompanySection = __webpack_require__(97);

// EXTERNAL MODULE: ./components/ContactSection.vue + 4 modules
var ContactSection = __webpack_require__(98);

// EXTERNAL MODULE: ./components/BottomSection.vue + 4 modules
var BottomSection = __webpack_require__(99);

// EXTERNAL MODULE: ./components/QuerySection.vue + 4 modules
var QuerySection = __webpack_require__(100);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&











/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: 'IndexPage',
  components: {
    Navbar: Navbar["default"],
    'hero-section': HeroSection["default"],
    'service-section': ServiceSection["default"],
    'featured-section': FeaturedSection["default"],
    'experience-section': ExperienceSection["default"],
    'company-section': CompanySection["default"],
    'contact-section': ContactSection["default"],
    'bottom-section': BottomSection["default"],
    'query-section': QuerySection["default"]
  },

  data() {
    return {
      popup: false
    };
  },

  mounted() {
    external_aos_default.a.init();
  },

  methods: {
    PopupChange(e) {
      this.popup = e;
    }

  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "009f0e3c"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeroSection: __webpack_require__(93).default,ServiceSection: __webpack_require__(94).default,FeaturedSection: __webpack_require__(95).default,ExperienceSection: __webpack_require__(96).default,CompanySection: __webpack_require__(97).default,ContactSection: __webpack_require__(98).default,BottomSection: __webpack_require__(99).default,QuerySection: __webpack_require__(100).default})


/***/ })
]);;
//# sourceMappingURL=index.js.map