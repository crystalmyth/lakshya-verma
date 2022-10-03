exports.ids = [11,8];
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

/***/ 44:
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

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/object-1.917cbff.png";

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/object-2.62cdc78.png";

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/object-4.6e7675d.png";

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/object-3.bf59eae.png";

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/object-5.2f0adf5.png";

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceSection_vue_vue_type_style_index_0_id_00f72b68_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceSection_vue_vue_type_style_index_0_id_00f72b68_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceSection_vue_vue_type_style_index_0_id_00f72b68_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceSection_vue_vue_type_style_index_0_id_00f72b68_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceSection_vue_vue_type_style_index_0_id_00f72b68_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".service-section{padding-top:10rem;padding-bottom:10rem}.service-section .container-fluid .row .col-sm-6{position:relative!important;display:flex;flex-direction:column;justify-content:center}.service-section .container-fluid .row .col-sm-6 h2{font-size:4rem;font-family:\"Libre Baskerville\",serif}@media screen and (max-width:800px){.service-section .container-fluid .row .col-sm-6 h2{font-size:2.5rem}}.service-section .container-fluid .row .col-sm-6 h2 span{background-color:#fcf1e7;display:inline-block;padding:0 .5rem}.service-section .container-fluid .row .col-sm-6 p{color:#463989;padding-top:3rem}@media screen and (max-width:800px){.service-section .container-fluid .row .col-sm-6 p{font-size:1.2rem}}.service-section .container-fluid .row .col-sm-6 ul{padding-top:2rem;list-style:none;padding-left:0}.service-section .container-fluid .row .col-sm-6 ul li{color:#463989;font-size:2rem;padding-bottom:1rem;font-weight:700}@media screen and (max-width:800px){.service-section .container-fluid .row .col-sm-6 ul li{font-size:1.4rem}}.service-section .container-fluid .row .col-sm-6 .images{display:grid;grid-template-areas:\"img-2 big img-3\" \"... big ...\" \"img-4 big img-5\"}.service-section .container-fluid .row .col-sm-6 .images img{-o-object-fit:contain;object-fit:contain}.service-section .container-fluid .row .col-sm-6 .images [class*=img-]{border-radius:.5rem;box-shadow:0 0 2.5rem #eaeaea;width:10rem}.service-section .container-fluid .row .col-sm-6 .images .img-1{height:calc(100vh - 7rem);grid-area:big;box-shadow:none;width:calc(100% - 2rem);transform:scale(1.4)}.service-section .container-fluid .row .col-sm-6 .images .img-2{height:100%;grid-area:img-2;height:10rem}.service-section .container-fluid .row .col-sm-6 .images .img-3{height:100%;grid-area:img-3;width:15rem}.service-section .container-fluid .row .col-sm-6 .images .img-4{height:100%;grid-area:img-4;margin-bottom:2rem;height:13rem;width:13rem;position:relative;z-index:inherit}.service-section .container-fluid .row .col-sm-6 .images .img-5{height:100%;grid-area:img-5;margin-bottom:5rem;width:7rem;height:7rem;position:relative;z-index:inherit}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 94:
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

/***/ })

};;
//# sourceMappingURL=service-section.js.map