define(function(__WEBPACK_EXTERNAL_MODULE__tarojs_taro_h5__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/taro/taro-components.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/taro/node_modules/swiper/dist/css/swiper.min.css":
/*!**************************************************************!*\
  !*** ./lib/taro/node_modules/swiper/dist/css/swiper.min.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!./swiper.min.css */ "./node_modules/css-loader/dist/cjs.js!./lib/taro/node_modules/swiper/dist/css/swiper.min.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./lib/taro/taro-components.js":
/*!*************************************!*\
  !*** ./lib/taro/taro-components.js ***!
  \*************************************/
/*! exports provided: View, Block, Image, Text, Switch, Button, Icon, Radio, Input, ScrollView, Swiper, SwiperItem, Checkbox, Picker, Label, Textarea, Slider, Audio, Camera, Progress, RichText, Form, RadioGroup, CheckboxGroup, WebView, OpenData, MovableArea, MovableView, CoverImage, CoverView, PickerView, PickerViewColumn, PullDownRefresh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_components_src_components_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/components/src/components/view */ "./node_modules/@tarojs/components/src/components/view/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View", function() { return _tarojs_components_src_components_view__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _tarojs_components_src_components_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components/src/components/block */ "./node_modules/@tarojs/components/src/components/block/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Block", function() { return _tarojs_components_src_components_block__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _tarojs_components_src_components_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components/src/components/image */ "./node_modules/@tarojs/components/src/components/image/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _tarojs_components_src_components_image__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _tarojs_components_src_components_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components/src/components/text */ "./node_modules/@tarojs/components/src/components/text/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _tarojs_components_src_components_text__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _tarojs_components_src_components_switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/components/src/components/switch */ "./node_modules/@tarojs/components/src/components/switch/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _tarojs_components_src_components_switch__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _tarojs_components_src_components_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components/src/components/button */ "./node_modules/@tarojs/components/src/components/button/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _tarojs_components_src_components_button__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _tarojs_components_src_components_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components/src/components/icon */ "./node_modules/@tarojs/components/src/components/icon/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _tarojs_components_src_components_icon__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _tarojs_components_src_components_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components/src/components/radio */ "./node_modules/@tarojs/components/src/components/radio/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return _tarojs_components_src_components_radio__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _tarojs_components_src_components_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components/src/components/input */ "./node_modules/@tarojs/components/src/components/input/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _tarojs_components_src_components_input__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _tarojs_components_src_components_scroll_view__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components/src/components/scroll-view */ "./node_modules/@tarojs/components/src/components/scroll-view/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollView", function() { return _tarojs_components_src_components_scroll_view__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _tarojs_components_src_components_swiper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tarojs/components/src/components/swiper */ "./node_modules/@tarojs/components/src/components/swiper/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Swiper", function() { return _tarojs_components_src_components_swiper__WEBPACK_IMPORTED_MODULE_10__["Swiper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwiperItem", function() { return _tarojs_components_src_components_swiper__WEBPACK_IMPORTED_MODULE_10__["SwiperItem"]; });

/* harmony import */ var _tarojs_components_src_components_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tarojs/components/src/components/checkbox */ "./node_modules/@tarojs/components/src/components/checkbox/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _tarojs_components_src_components_checkbox__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _tarojs_components_src_components_picker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @tarojs/components/src/components/picker */ "./node_modules/@tarojs/components/src/components/picker/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return _tarojs_components_src_components_picker__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _tarojs_components_src_components_label__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @tarojs/components/src/components/label */ "./node_modules/@tarojs/components/src/components/label/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _tarojs_components_src_components_label__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _tarojs_components_src_components_textarea__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @tarojs/components/src/components/textarea */ "./node_modules/@tarojs/components/src/components/textarea/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return _tarojs_components_src_components_textarea__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _tarojs_components_src_components_slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @tarojs/components/src/components/slider */ "./node_modules/@tarojs/components/src/components/slider/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return _tarojs_components_src_components_slider__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _tarojs_components_src_components_audio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @tarojs/components/src/components/audio */ "./node_modules/@tarojs/components/src/components/audio/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Audio", function() { return _tarojs_components_src_components_audio__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _tarojs_components_src_components_camera__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @tarojs/components/src/components/camera */ "./node_modules/@tarojs/components/src/components/camera/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return _tarojs_components_src_components_camera__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _tarojs_components_src_components_progress__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @tarojs/components/src/components/progress */ "./node_modules/@tarojs/components/src/components/progress/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return _tarojs_components_src_components_progress__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _tarojs_components_src_components_rich_text__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @tarojs/components/src/components/rich-text */ "./node_modules/@tarojs/components/src/components/rich-text/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RichText", function() { return _tarojs_components_src_components_rich_text__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _tarojs_components_src_components_form__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @tarojs/components/src/components/form */ "./node_modules/@tarojs/components/src/components/form/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _tarojs_components_src_components_form__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _tarojs_components_src_components_radio_radio_group__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @tarojs/components/src/components/radio/radio-group */ "./node_modules/@tarojs/components/src/components/radio/radio-group.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return _tarojs_components_src_components_radio_radio_group__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _tarojs_components_src_components_checkbox_checkbox_group__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @tarojs/components/src/components/checkbox/checkbox-group */ "./node_modules/@tarojs/components/src/components/checkbox/checkbox-group.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxGroup", function() { return _tarojs_components_src_components_checkbox_checkbox_group__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _tarojs_components_src_components_web_view__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @tarojs/components/src/components/web-view */ "./node_modules/@tarojs/components/src/components/web-view/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebView", function() { return _tarojs_components_src_components_web_view__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _tarojs_components_src_components_open_data__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @tarojs/components/src/components/open-data */ "./node_modules/@tarojs/components/src/components/open-data/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenData", function() { return _tarojs_components_src_components_open_data__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _tarojs_components_src_components_movable_view__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @tarojs/components/src/components/movable-view */ "./node_modules/@tarojs/components/src/components/movable-view/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovableArea", function() { return _tarojs_components_src_components_movable_view__WEBPACK_IMPORTED_MODULE_25__["MovableArea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovableView", function() { return _tarojs_components_src_components_movable_view__WEBPACK_IMPORTED_MODULE_25__["MovableView"]; });

/* harmony import */ var _tarojs_components_src_components_cover_view__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @tarojs/components/src/components/cover-view */ "./node_modules/@tarojs/components/src/components/cover-view/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoverImage", function() { return _tarojs_components_src_components_cover_view__WEBPACK_IMPORTED_MODULE_26__["CoverImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoverView", function() { return _tarojs_components_src_components_cover_view__WEBPACK_IMPORTED_MODULE_26__["CoverView"]; });

/* harmony import */ var _tarojs_components_src_components_picker_view__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @tarojs/components/src/components/picker-view */ "./node_modules/@tarojs/components/src/components/picker-view/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickerView", function() { return _tarojs_components_src_components_picker_view__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _tarojs_components_src_components_picker_view_column__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @tarojs/components/src/components/picker-view-column */ "./node_modules/@tarojs/components/src/components/picker-view-column/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickerViewColumn", function() { return _tarojs_components_src_components_picker_view_column__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _tarojs_components_src_components_pull_down_refresh_index__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @tarojs/components/src/components/pull-down-refresh/index */ "./node_modules/@tarojs/components/src/components/pull-down-refresh/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PullDownRefresh", function() { return _tarojs_components_src_components_pull_down_refresh_index__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _node_modules_swiper_dist_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./node_modules/swiper/dist/css/swiper.min.css */ "./lib/taro/node_modules/swiper/dist/css/swiper.min.css");
/* harmony import */ var _node_modules_swiper_dist_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_node_modules_swiper_dist_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_30__);















 // export { default as Video } from '@tarojs/components/src/components/video';







 // export { default as Tabbar } from '@tarojs/components/src/components/tabbar';
// export { default as TabbarContainer } from '@tarojs/components/src/components/tabbar/container';
// export { default as TabbarPanel } from '@tarojs/components/src/components/tabbar/panel';
// export { default as Navigator } from '@tarojs/components/src/components/navigator';


 // export { default as Canvas } from '@tarojs/components/src/components/canvas';








/***/ }),

/***/ "./node_modules/@tarojs/components/src/components/audio/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@tarojs/components/src/components/audio/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var weui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! weui */ "./node_modules/weui/dist/style/weui.css");
/* harmony import */ var weui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(weui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nervjs */ "./node_modules/react/umd/react.development.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/index.scss */ "./node_modules/@tarojs/components/src/components/audio/style/index.scss");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var Audio = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(Audio, _Nerv$Component);

  var _super = _createSuper(Audio);

  function Audio() {
    _classCallCheck(this, Audio);

    return _super.apply(this, arguments);
  }

  _createClass(Audio, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.bindevent();
    }
  }, {
    key: "bindevent",
    value: function bindevent() {
      var _this = this;

      this.audio.addEventListener('timeupdate', function (e) {
        Object.defineProperty(e, 'detail', {
          enumerable: true,
          value: {
            duration: e.srcElement.duration,
            currentTime: e.srcElement.currentTime
          }
        });
        _this.props.onTimeUpdate && _this.props.onTimeUpdate(e);
      });
      this.audio.addEventListener('ended', function (e) {
        _this.props.onEnded && _this.props.onEnded(e);
      });
      this.audio.addEventListener('play', function (e) {
        _this.props.onPlay && _this.props.onPlay(e);
      });
      this.audio.addEventListener('pause', function (e) {
        _this.props.onPause && _this.props.onPause(e);
      }); // 1网络错误, 2解码错误, 3解码错误，4 不合适资源

      this.audio.addEventListener('error', function (e) {
        Object.defineProperty(e, 'detail', {
          enumerable: true,
          value: {
            errMsg: e.srcElement.error.code
          }
        });
        _this.props.onError && _this.props.onError(e);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          src = _this$props.src,
          controls = _this$props.controls,
          autoplay = _this$props.autoplay,
          initialTime = _this$props.initialTime,
          id = _this$props.id,
          loop = _this$props.loop,
          muted = _this$props.muted,
          className = _this$props.className;
      return nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("audio", {
        id: id,
        src: src,
        controls: controls,
        autoplay: autoplay,
        start: initialTime,
        loop: loop,
        muted: muted,
        className: className,
        ref: function ref(audio) {
          _this2.audio = audio;
        }
      }, "\u6682\u65F6\u4E0D\u652F\u6301\u64AD\u653E\u8BE5\u89C6\u9891");
    }
  }]);

  return Audio;
}(nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.Component); // 默认配置


Audio.defaultProps = {
  autoplay: false,
  controls: true,
  loop: false,
  muted: false
};
/* harmony default export */ __webpack_exports__["default"] = (Audio);

/***/ }),

/***/ "./node_modules/@tarojs/components/src/components/audio/style/index.scss":
/*!*******************************************************************************!*\
  !*** ./node_modules/@tarojs/components/src/components/audio/style/index.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../css-loader/dist/cjs.js!../../../../../../sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@tarojs/components/src/components/audio/style/index.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./node_modules/@tarojs/components/src/components/block/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@tarojs/components/src/components/block/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Block; });
/* harmony import */ var weui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! weui */ "./node_modules/weui/dist/style/weui.css");
/* harmony import */ var weui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(weui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nervjs */ "./node_modules/react/umd/react.development.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Block = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(Block, _Nerv$Component);

  var _super = _createSuper(Block);

  function Block() {
    _classCallCheck(this, Block);

    return _super.apply(this, arguments);
  }

  _createClass(Block, [{
    key: "render",
    value: function render() {
      return nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.props.children);
    }
  }]);

  return Block;
}(nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ }),

/***/ "./node_modules/@tarojs/components/src/components/button/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@tarojs/components/src/components/button/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var weui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! weui */ "./node_modules/weui/dist/style/weui.css");
/* harmony import */ var weui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(weui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nervjs */ "./node_modules/react/umd/react.development.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var omit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style/index.scss */ "./node_modules/@tarojs/components/src/components/button/style/index.scss");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var Button = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(Button, _Nerv$Component);

  var _super = _createSuper(Button);

  function Button() {
    var _this;

    _classCallCheck(this, Button);

    _this = _super.apply(this, arguments);
    _this.state = {
      hover: false,
      touch: false
    };
    return _this;
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var _classNames,
          _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          disabled = _this$props.disabled,
          className = _this$props.className,
          style = _this$props.style,
          onClick = _this$props.onClick,
          onTouchStart = _this$props.onTouchStart,
          onTouchEnd = _this$props.onTouchEnd,
          _this$props$hoverClas = _this$props.hoverClass,
          hoverClass = _this$props$hoverClas === void 0 ? 'button-hover' : _this$props$hoverClas,
          _this$props$hoverStar = _this$props.hoverStartTime,
          hoverStartTime = _this$props$hoverStar === void 0 ? 20 : _this$props$hoverStar,
          _this$props$hoverStay = _this$props.hoverStayTime,
          hoverStayTime = _this$props$hoverStay === void 0 ? 70 : _this$props$hoverStay,
          size = _this$props.size,
          plain = _this$props.plain,
          _this$props$loading = _this$props.loading,
          loading = _this$props$loading === void 0 ? false : _this$props$loading,
          _this$props$type = _this$props.type,
          type = _this$props$type === void 0 ? 'default' : _this$props$type;
      var cls = className || classnames__WEBPACK_IMPORTED_MODULE_3___default()('weui-btn', (_classNames = {}, _defineProperty(_classNames, "".concat(hoverClass), this.state.hover && !disabled), _defineProperty(_classNames, "weui-btn_plain-".concat(type), plain), _defineProperty(_classNames, "weui-btn_".concat(type), !plain && type), _defineProperty(_classNames, 'weui-btn_mini', size === 'mini'), _defineProperty(_classNames, 'weui-btn_loading', loading), _defineProperty(_classNames, 'weui-btn_disabled', disabled), _classNames));

      var _onTouchStart = function _onTouchStart(e) {
        _this2.setState(function () {
          return {
            touch: true
          };
        });

        if (hoverClass && !disabled) {
          setTimeout(function () {
            if (_this2.state.touch) {
              _this2.setState(function () {
                return {
                  hover: true
                };
              });
            }
          }, hoverStartTime);
        }

        onTouchStart && onTouchStart(e);
      };

      var _onTouchEnd = function _onTouchEnd(e) {
        _this2.setState(function () {
          return {
            touch: false
          };
        });

        if (hoverClass && !disabled) {
          setTimeout(function () {
            if (!_this2.state.touch) {
              _this2.setState(function () {
                return {
                  hover: false
                };
              });
            }
          }, hoverStayTime);
        }

        onTouchEnd && onTouchEnd(e);
      };

      return nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", _extends({}, Object(omit_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.props, ['hoverClass', 'onTouchStart', 'onTouchEnd']), {
        className: cls,
        style: style,
        onClick: onClick,
        disabled: disabled,
        onTouchStart: _onTouchStart,
        onTouchEnd: _onTouchEnd
      }), loading && nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        "class": "weui-loading"
      }), children);
    }
  }]);

  return Button;
}(nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./node_modules/@tarojs/components/src/components/button/style/index.scss":
/*!********************************************************************************!*\
  !*** ./node_modules/@tarojs/components/src/components/button/style/index.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../css-loader/dist/cjs.js!../../../../../../sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@tarojs/components/src/components/button/style/index.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./node_modules/@tarojs/components/src/components/camera/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@tarojs/components/src/components/camera/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nervjs */ "./node_modules/react/umd/react.development.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Camera = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(Camera, _Nerv$Component);

  var _super = _createSuper(Camera);

  function Camera() {
    _classCallCheck(this, Camera);

    return _super.apply(this, arguments);
  }

  _createClass(Camera, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.error('h5 暂不支持 Camera 组件');
    }
  }, {
    key: "render",
    value: function render() {
      return nervjs__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
    }
  }]);

  return Camera;
}(nervjs__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Camera);

/***/ }),

/***/ "./node_modules/@tarojs/components/src/components/checkbox/checkbox-group.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@tarojs/components/src/components/checkbox/checkbox-group.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var weui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! weui */ "./node_modules/weui/dist/style/weui.css");
/* harmony import */ var weui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(weui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nervjs */ "./node_modules/react/umd/react.development.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var CheckboxGroup = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(CheckboxGroup, _Nerv$Component);

  var _super = _createSuper(CheckboxGroup);

  function CheckboxGroup() {
    var _this;

    _classCallCheck(this, CheckboxGroup);

    _this = _super.apply(this, arguments);
    _this.state = {
      value: []
    };
    _this.uniqueName = Date.now().toString(36);
    _this.toggleChange = _this.toggleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CheckboxGroup, [{
    key: "toggleChange",
    value: function toggleChange(e, i) {
      this.state.value[i] = {
        name: e.target.textContent,
        value: e.target.value,
        checked: e.target.checked
      };
      var resp = [];
      this.state.value.forEach(function (v) {
        if (v.checked) {
          resp.push(v.value);
        }
      });
      var onChange = this.props.onChange;
      Object.defineProperty(e, 'detail', {
        enumerable: true,
        value: {
          value: resp
        }
      });
      onChange && onChange(e);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$name = this.props.name,
          name = _this$props$name === void 0 ? this.uniqueName : _this$props$name; // 给 children 绑定事件

      var children = nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.Children.toArray(this.props.children).map(function (item, i) {
        var _key = item.props["for"];
        var chd = nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.Children.toArray(item.props.children).map(function (ch) {
          if (ch.name === 'Checkbox') {
            if (ch.props.checked) {
              _this2.state.value[i] = {
                name: ch.props.name,
                value: ch.props.value,
                checked: true
              };
            } else {
              _this2.state.value[i] = {
                name: ch.props.name,
                value: ch.props.value,
                checked: false
              };
            }

            return nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(ch, {
              onChange: function onChange(e) {
                return _this2.toggleChange(e, i);
              },
              "for": _key,
              name: name
            });
          }

          return ch;
        });
        return nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(item, '', chd);
      });
      return children;
    }
  }]);

  return CheckboxGroup;
}(nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CheckboxGroup);

/***/ }),

/***/ "./node_modules/@tarojs/components/src/components/checkbox/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@tarojs/components/src/components/checkbox/index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var weui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! weui */ "./node_modules/weui/dist/style/weui.css");
/* harmony import */ var weui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(weui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nervjs */ "./node_modules/react/umd/react.development.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var omit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style/index.scss */ "./node_modules/@tarojs/components/src/components/checkbox/style/index.scss");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var Checkbox = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(Checkbox, _Nerv$Component);

  var _super = _createSuper(Checkbox);

  function Checkbox() {
    _classCallCheck(this, Checkbox);

    return _super.apply(this, arguments);
  }

  _createClass(Checkbox, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onChange = _this$props.onChange,
          className = _this$props.className,
          checked = _this$props.checked,
          name = _this$props.name,
          color = _this$props.color;
      var key = this.props["for"];
      var cls = classnames__WEBPACK_IMPORTED_MODULE_3___default()('taro-checkbox_checked ', className);
      var style = {
        color: color
      };
      var sty = this.props.style;
      return nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "weui-cells_checkbox",
        style: sty
      }, nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", _extends({}, Object(omit_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.props, ['className', 'checked', 'onChange', 'name', 'type', 'id', 'style']), {
        id: key,
        type: "checkbox",
        name: name,
        className: cls,
        checked: checked,
        onChange: onChange,
        style: style
      })), this.props.children);
    }
  }]);

  return Checkbox;
}(nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Checkbox);

/***/ }),

/***/ "./node_modules/@tarojs/components/src/components/checkbox/style/index.scss":
/*!**********************************************************************************!*\
  !*** ./node_modules/@tarojs/components/src/components/checkbox/style/index.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../css-loader/dist/cjs.js!../../../../../../sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@tarojs/components/src/components/checkbox/style/index.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./node_modules/@tarojs/components/src/components/cover-view/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@tarojs/components/src/components/cover-view/index.js ***!
  \****************************************************************************/
/*! exports provided: CoverImage, CoverView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverImage", function() { return CoverImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverView", function() { return CoverView; });
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nervjs */ "./node_modules/react/umd/react.development.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var CoverView = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(CoverView, _Nerv$Component);

  var _super = _createSuper(CoverView);

  function CoverView() {
    _classCallCheck(this, CoverView);

    return _super.apply(this, arguments);
  }

  _createClass(CoverView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.error('H5 暂不支持 CoverView 组件！');
    }
  }, {
    key: "render",
    value: function render() {
      var reset = _extends({}, this.props);

      return nervjs__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", reset, this.props.children);
    }
  }]);

  return CoverView;
}(nervjs__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var CoverImage = /*#__PURE__*/function (_Nerv$Component2) {
  _inherits(CoverImage, _Nerv$Component2);

  var _super2 = _createSuper(CoverImage);

  function CoverImage() {
    _classCallCheck(this, CoverImage);

    return _super2.apply(this, arguments);
  }

  _createClass(CoverImage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.error('H5 暂不支持 CoverImage 组件！');
    }
  }, {
    key: "render",
    value: function render() {
      var reset = _extends({}, this.props);

      return nervjs__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", reset, this.props.children);
    }
  }]);

  return CoverImage;
}(nervjs__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./node_modules/@tarojs/components/src/components/form/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@tarojs/components/src/components/form/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var weui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! weui */ "./node_modules/weui/dist/style/weui.css");
/* harmony import */ var weui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(weui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nervjs */ "./node_modules/react/umd/react.development.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Form = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(Form, _Nerv$Component);

  var _super = _createSuper(Form);

  function Form() {
    var _this;

    _classCallCheck(this, Form);

    _this = _super.apply(this, arguments);
    _this.Forms = [];
    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_this));
    _this.onReset = _this.onReset.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Form, [{
    key: "onSubmit",
    value: function onSubmit(e) {
      e.preventDefault();
      var formDom = nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(this);
      var elements = [];
      var tagElements = formDom.getElementsByTagName('input');

      for (var j = 0; j < tagElements.length; j++) {
        elements.push(tagElements[j]);
      }

      var formItem = {};
      var hash = {};
      elements.forEach(function (item) {
        if (item.className.indexOf('weui-switch') !== -1) {
          formItem[item.name] = item.checked;
          return;
        }

        if (item.type === 'radio') {
          if (item.checked) {
            hash[item.name] = true;
            formItem[item.name] = item.value;
          } else {
            if (!hash[item.name]) {
              formItem[item.name] = '';
            }
          }

          return;
        }

        if (item.type === 'checkbox') {
          if (item.checked) {
            if (hash[item.name]) {
              formItem[item.name].push(item.value);
            } else {
              hash[item.name] = true;
              formItem[item.name] = [item.value];
            }
          } else {
            if (!hash[item.name]) {
              formItem[item.name] = [];
            }
          }

          return;
        }

        formItem[item.name] = item.value;
      });
      var textareaElements = formDom.getElementsByTagName('textarea');
      var textareaEleArr = [];

      for (var i = 0; i < textareaElements.length; i++) {
        textareaEleArr.push(textareaElements[i]);
      }

      textareaEleArr.forEach(function (v) {
        formItem[v.name] = v.value;
      });
      Object.defineProperty(e, 'detail', {
        enumerable: true,
        value: {
          value: formItem
        }
      });
      this.props.onSubmit(e);
    }
  }, {
    key: "onReset",
    value: function onReset(e) {
      e.preventDefault();
      this.props.onReset();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          style = _this$props.style;
      return nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
        className: className,
        style: style,
        onSubmit: this.onSubmit,
        onReset: this.onReset
      }, this.props.children);
    }
  }]);

  return Form;
}(nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./node_modules/@tarojs/components/src/components/icon/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@tarojs/components/src/components/icon/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var weui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! weui */ "./node_modules/weui/dist/style/weui.css");
/* harmony import */ var weui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(weui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nervjs */ "./node_modules/react/umd/react.development.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var omit_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Icon = function Icon(props) {
  var type = props.type,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      _props$size = props.size,
      size = _props$size === void 0 ? '23' : _props$size,
      color = props.color;
  if (type) type = type.replace(/_/g, '-');
  var cls = classnames__WEBPACK_IMPORTED_MODULE_2___default()(_defineProperty({}, "weui-icon-".concat(type), true), className);
  var style = {
    'font-size': size + 'px',
    color: color
  };
  return nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", _extends({}, Object(omit_js__WEBPACK_IMPORTED_MODULE_3__["default"])(props, ['type', 'className']), {
    className: cls,
    style: style
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "./node_modules/@tarojs/components/src/components/image/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@tarojs/components/src/components/image/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var weui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! weui */ "./node_modules/weui/dist/style/weui.css");
/* harmony import */ var weui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(weui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nervjs */ "./node_modules/react/umd/react.development.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style/index.scss */ "./node_modules/@tarojs/components/src/components/image/style/index.scss");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






__webpack_require__(/*! intersection-observer */ "./node_modules/intersection-observer/intersection-observer.js");

var Image = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(Image, _Nerv$Component);

  var _super = _createSuper(Image);

  function Image() {
    var _this;

    _classCallCheck(this, Image);

    _this = _super.apply(this, arguments);
    _this.state = {
      isLoaded: false
    };
    _this.imageOnLoad = _this.imageOnLoad.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Image, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.lazyLoad) {
        var lazyImg = new IntersectionObserver(function (entries, observer) {
          // 异步 api 关系
          if (entries[entries.length - 1].isIntersecting) {
            _this2.setState({
              isLoaded: true
            }, function () {
              lazyImg.unobserve(_this2.imgRef);
              nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(_this2).children[0].src = _this2.props.src;
            });
          }
        }, {
          rootMargin: '300px 0px'
        });
        lazyImg.observe(this.imgRef);
      }
    }
  }, {
    key: "componentWillUnMount",
    value: function componentWillUnMount() {}
  }, {
    key: "imageOnLoad",
    value: function imageOnLoad(e) {
      var onLoad = this.props.onLoad;
      Object.defineProperty(e, 'detail', {
        enumerable: true,
        value: {
          width: this.imgRef.width,
          height: this.imgRef.height
        }
      });
      onLoad && onLoad(e);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          className = _this$props.className,
          src = _this$props.src,
          style = _this$props.style,
          mode = _this$props.mode,
          onError = _this$props.onError,
          lazyLoad = _this$props.lazyLoad,
          reset = _objectWithoutProperties(_this$props, ["className", "src", "style", "mode", "onError", "lazyLoad"]);

      var cls = classnames__WEBPACK_IMPORTED_MODULE_2___default()('taro-img', {
        'taro-img__widthfix': mode === 'widthFix'
      }, className);
      var imgCls = classnames__WEBPACK_IMPORTED_MODULE_2___default()('taro-img__mode-' + (mode || 'scaleToFill').toLowerCase().replace(/\s/g, ''));
      return nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", _extends({
        className: cls,
        style: style
      }, reset), lazyLoad ? nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        ref: function ref(img) {
          return _this3.imgRef = img;
        },
        className: imgCls,
        "data-src": src,
        onLoad: this.imageOnLoad,
        onError: onError
      }) : nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        ref: function ref(img) {
          return _this3.imgRef = img;
        },
        className: imgCls,
        src: src,
        onLoad: this.imageOnLoad,
        onError: onError
      }));
    }
  }]);

  return Image;
}(nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./node_modules/@tarojs/components/src/components/image/style/index.scss":
/*!*******************************************************************************!*\
  !*** ./node_modules/@tarojs/components/src/components/image/style/index.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../css-loader/dist/cjs.js!../../../../../../sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@tarojs/components/src/components/image/style/index.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./node_modules/@tarojs/components/src/components/input/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@tarojs/components/src/components/input/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var weui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! weui */ "./node_modules/weui/dist/style/weui.css");
/* harmony import */ var weui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(weui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nervjs */ "./node_modules/react/umd/react.development.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var omit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ "./node_modules/@tarojs/components/src/components/input/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







function getTrueType(type, confirmType, password) {
  if (!type) {
    throw new Error('unexpected type');
  }

  if (confirmType === 'search') type = 'search';
  if (password) type = 'password';
  if (type === 'digit') type = 'number';
  return type;
}

function fixControlledValue(value) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }

  return value;
}

var Input = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(Input, _Nerv$Component);

  var _super = _createSuper(Input);

  function Input() {
    var _this;

    _classCallCheck(this, Input);

    _this = _super.apply(this, arguments);
    _this.onInput = _this.onInput.bind(_assertThisInitialized(_this));
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_this));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this));
    _this.handleComposition = _this.handleComposition.bind(_assertThisInitialized(_this)); // input hook

    _this.isOnComposition = false;
    _this.onInputExcuted = false;
    return _this;
  }

  _createClass(Input, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // 修复无法选择文件
      if (this.props.type === 'file') {
        this.inputRef.addEventListener('change', this.onInput);
      }
    }
  }, {
    key: "componentWillUnMount",
    value: function componentWillUnMount() {
      // 修复无法选择文件
      if (this.props.type === 'file') {
        this.inputRef.removeEventListener('change', this.onInput);
      }
    }
  }, {
    key: "onInput",
    value: function onInput(e) {
      var _this$props = this.props,
          type = _this$props.type,
          maxLength = _this$props.maxLength,
          confirmType = _this$props.confirmType,
          password = _this$props.password,
          _this$props$onInput = _this$props.onInput,
          onInput = _this$props$onInput === void 0 ? '' : _this$props$onInput,
          _this$props$onChange = _this$props.onChange,
          onChange = _this$props$onChange === void 0 ? '' : _this$props$onChange;

      if (!this.isOnComposition && !this.onInputExcuted) {
        var value = e.target.value;
        var inputType = getTrueType(type, confirmType, password);
        this.onInputExcuted = true;
        /* 修复 number 类型 maxLength 无效 */

        if (inputType === 'number' && value && maxLength <= value.length) {
          value = value.substring(0, maxLength);
          e.target.value = value;
        }

        Object.defineProperty(e, 'detail', {
          enumerable: true,
          value: {
            value: value
          }
        }); // 修复 IOS 光标跳转问题

        if (!(['number', 'file'].indexOf(inputType) >= 0)) {
          var pos = e.target.selectionEnd;
          setTimeout(function () {
            e.target.selectionStart = pos;
            e.target.selectionEnd = pos;
          });
        }

        if (onChange) return onChange(e);
        if (onInput) return onInput(e);
      }
    }
  }, {
    key: "onFocus",
    value: function onFocus(e) {
      var onFocus = this.props.onFocus;
      this.onInputExcuted = false;
      Object.defineProperty(e, 'detail', {
        enumerable: true,
        value: {
          value: e.target.value
        }
      });
      onFocus && onFocus(e);
    }
  }, {
    key: "onBlur",
    value: function onBlur(e) {
      var onBlur = this.props.onBlur;
      Object.defineProperty(e, 'detail', {
        enumerable: true,
        value: {
          value: e.target.value
        }
      });
      onBlur && onBlur(e);
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(e) {
      var _this$props2 = this.props,
          onConfirm = _this$props2.onConfirm,
          onKeyDown = _this$props2.onKeyDown;
      this.onInputExcuted = false;
      onKeyDown && onKeyDown(e);

      if (e.keyCode === 13 && onConfirm) {
        Object.defineProperty(e, 'detail', {
          enumerable: true,
          value: {
            value: e.target.value
          }
        });
        onConfirm(e);
      }
    }
  }, {
    key: "handleComposition",
    value: function handleComposition(e) {
      if (!(e.target instanceof HTMLInputElement)) return;

      if (e.type === 'compositionend') {
        this.isOnComposition = false;
        this.onInput(e);
      } else {
        this.isOnComposition = true;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          _this$props3$classNam = _this$props3.className,
          className = _this$props3$classNam === void 0 ? '' : _this$props3$classNam,
          placeholder = _this$props3.placeholder,
          _this$props3$type = _this$props3.type,
          type = _this$props3$type === void 0 ? 'text' : _this$props3$type,
          password = _this$props3.password,
          disabled = _this$props3.disabled,
          maxLength = _this$props3.maxLength,
          _this$props3$confirmT = _this$props3.confirmType,
          confirmType = _this$props3$confirmT === void 0 ? '' : _this$props3$confirmT,
          _this$props3$focus = _this$props3.focus,
          focus = _this$props3$focus === void 0 ? false : _this$props3$focus,
          value = _this$props3.value;
      var cls = classnames__WEBPACK_IMPORTED_MODULE_3___default()('weui-input', className);
      var otherProps = Object(omit_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.props, ['className', 'placeholder', 'disabled', 'max', 'onChange', 'onFocus', 'onBlur', 'type', 'focus']);

      if ('value' in this.props) {
        otherProps.value = fixControlledValue(value);
      }

      return nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", _extends({
        ref: function ref(input) {
          _this2.inputRef = input;
          input && focus && input.focus();
        }
      }, otherProps, {
        className: cls,
        placeholder: placeholder,
        disabled: disabled,
        maxlength: maxLength,
        onInput: this.onInput,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        autofocus: focus,
        onKeyDown: this.onKeyDown,
        type: getTrueType(type, confirmType, password),
        onCompositionStart: this.handleComposition,
        onCompositionEnd: this.handleComposition
      }));
    }
  }]);

  return Input;
}(nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

Input.defaultProps = {
  type: 'text'
};
/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./node_modules/@tarojs/components/src/components/input/index.scss":
/*!*************************************************************************!*\
  !*** ./node_modules/@tarojs/components/src/components/input/index.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../css-loader/dist/cjs.js!../../../../../sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@tarojs/components/src/components/input/index.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./node_modules/@tarojs/components/src/components/label/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@tarojs/components/src/components/label/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var weui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! weui */ "./node_modules/weui/dist/style/weui.css");
/* harmony import */ var weui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(weui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nervjs */ "./node_modules/react/umd/react.development.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Label = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(Label, _Nerv$Component);

  var _super = _createSuper(Label);

  function Label() {
    _classCallCheck(this, Label);

    return _super.apply(this, arguments);
  }

  _createClass(Label, [{
    key: "render",
    value: function render() {
      var reset = _extends({}, this.props);

      return nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", reset, this.props.children);
    }
  }]);

  return Label;
}(nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Label);

/***/ }),

/***/ "./node_modules/@tarojs/components/src/components/movable-view/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@tarojs/components/src/components/movable-view/index.js ***!
  \******************************************************************************/
/*! exports provided: MovableArea, MovableView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovableArea", function() { return MovableArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovableView", function() { return MovableView; });
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nervjs */ "./node_modules/react/umd/react.development.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var MovableView = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(MovableView, _Nerv$Component);

  var _super = _createSuper(MovableView);

  function MovableView() {
    _classCallCheck(this, MovableView);

    return _super.apply(this, arguments);
  }

  _createClass(MovableView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.error('H5 暂不支持 MovableView 组件！');
    }
  }, {
    key: "render",
    value: function render() {
      var reset = _extends({}, this.props);

      return nervjs__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", reset, this.props.children);
    }
  }]);

  return MovableView;
}(nervjs__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var MovableArea = /*#__PURE__*/function (_Nerv$Component2) {
  _inherits(MovableArea, _Nerv$Component2);

  var _super2 = _createSuper(MovableArea);

  function MovableArea() {
    _classCallCheck(this, MovableArea);

    return _super2.apply(this, arguments);
  }

  _createClass(MovableArea, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.error('H5 暂不支持 MovableArea 组件！');
    }
  }, {
    key: "render",
    value: function render() {
      var reset = _extends({}, this.props);

      return nervjs__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", reset, this.props.children);
    }
  }]);

  return MovableArea;
}(nervjs__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./node_modules/@tarojs/components/src/components/open-data/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@tarojs/components/src/components/open-data/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nervjs */ "./node_modules/react/umd/react.development.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var OpenData = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(OpenData, _Nerv$Component);

  var _super = _createSuper(OpenData);

  function OpenData() {
    _classCallCheck(this, OpenData);

    return _super.apply(this, arguments);
  }

  _createClass(OpenData, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.error('H5 暂不支持 OpenData 组件！');
    }
  }, {
    key: "render",
    value: function render() {
      var reset = _extends({}, this.props);

      return nervjs__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", reset, this.props.children);
    }
  }]);

  return OpenData;
}(nervjs__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (OpenData);

/***/ }),

/***/ "./node_modules/@tarojs/components/src/components/picker-view-column/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@tarojs/components/src/components/picker-view-column/index.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nervjs */ "./node_modules/react/umd/react.development.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PickerViewColumn = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(PickerViewColumn, _Nerv$Component);

  var _super = _createSuper(PickerViewColumn);

  function PickerViewColumn() {
    _classCallCheck(this, PickerViewColumn);

    return _super.apply(this, arguments);
  }

  _createClass(PickerViewColumn, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.error('H5 暂不支持 PickerViewColumn 组件！');
    }
  }, {
    key: "render",
    value: function render() {
      var rest = _extends({}, this.props);

      return nervjs__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", rest, this.props.children);
    }
  }]);

  return PickerViewColumn;
}(nervjs__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PickerViewColumn);

/***/ }),

/***/ "./node_modules/@tarojs/components/src/components/picker-view/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@tarojs/components/src/components/picker-view/index.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nervjs */ "./node_modules/react/umd/react.development.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PickerView = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(PickerView, _Nerv$Component);

  var _super = _createSuper(PickerView);

  function PickerView() {
    _classCallCheck(this, PickerView);

    return _super.apply(this, arguments);
  }

  _createClass(PickerView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.error('H5 暂不支持 PickerView 组件！');
    }
  }, {
    key: "render",
    value: function render() {
      var reset = _extends({}, this.props);

      return nervjs__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", reset, this.props.children);
    }
  }]);

  return PickerView;
}(nervjs__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PickerView);

/***/ }),

/***/ "./node_modules/@tarojs/components/src/components/picker/constant.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@tarojs/components/src/components/picker/constant.js ***!
  \***************************************************************************/
/*! exports provided: TOP, LINE_HEIGHT, MASK_HEIGHT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOP", function() { return TOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LINE_HEIGHT", function() { return LINE_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MASK_HEIGHT", function() { return MASK_HEIGHT; });
var TOP = 102;
var LINE_HEIGHT = 34;
var MASK_HEIGHT = LINE_HEIGHT * 7;

/***/ }),

/***/ "./node_modules/@tarojs/components/src/components/picker/date.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@tarojs/components/src/components/picker/date.js ***!
  \***********************************************************************/
/*! exports provided: verifyDate, getMaxDay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyDate", function() { return verifyDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMaxDay", function() { return getMaxDay; });
/**
 * @author zhongxin
 * @description 日期选择器相关函数
 *
 */

/**
 * 校验日期合法性，返回合法性和日期数组
 *
 * @param {String} date
 * @param {String} start
 * @param {String} end
 * @returns
 */
function verifyDate(date) {
  if (!date) return false;
  date = new Date(date.replace(/-/g, '/'));
  return isNaN(date.getMonth()) ? false : date;
}
/**
 * 获取当月最大天数
 *
 * @param {Number} year
 * @param {Number} month
 * @returns
 */


function getMaxDay(year, month) {
  if (month === 4 || month === 6 || month === 9 || month === 11) return 30;

  if (month === 2) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) return 29;else return 28;
  }

  return 31;
}



/***/ }),

/***/ "./node_modules/@tarojs/components/src/components/picker/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@tarojs/components/src/components/picker/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Picker; });
/* harmony import */ var weui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! weui */ "./node_modules/weui/dist/style/weui.css");
/* harmony import */ var weui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(weui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nervjs */ "./node_modules/react/umd/react.development.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _picker_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./picker-group */ "./node_modules/@tarojs/components/src/components/picker/picker-group/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constant */ "./node_modules/@tarojs/components/src/components/picker/constant.js");
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./date */ "./node_modules/@tarojs/components/src/components/picker/date.js");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style/index.scss */ "./node_modules/@tarojs/components/src/components/picker/style/index.scss");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @author chenjiajian
 * @property {Array} range mode为 selector 或 multiSelector 时，range 有效
 * @property {String} rangeKey 当 range 是一个 Object Array 时，通过 rangeKey 来指定 Object 中 key 的值作为选择器显示内容
 * @property {Number} value value 的值表示选择了 range 中的第几个（下标从 0 开始）
 * @property {EventHandle} onChange value 改变时触发 change 事件，event.detail = {value: value}
 * @property {Boolean} disabled 是否禁用
 * @property {EventHandle} onCancel 取消选择或点遮罩层收起 picker 时触发
 */






 // todos:
// 1. 加入滚动惯性
// 2. shouldComponentUpdate
// 3. 多指操控。。。
// 4. timePicker 样式问题：不在指定时间范围时，选项样式置灰。缩窄两列间宽度。

var Picker = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(Picker, _Nerv$Component);

  var _super = _createSuper(Picker);

  /** @type {PickerProps} */
  function Picker(props) {
    var _this;

    _classCallCheck(this, Picker);

    _this = _super.call(this, props);
    _this.index = [];

    _this.handlePrpos();

    _this.state = {
      pickerValue: _this.index,
      hidden: true,
      fadeOut: false,
      height: []
    };
    return _this;
  }

  _createClass(Picker, [{
    key: "handlePrpos",
    value: function handlePrpos() {
      var _this2 = this;

      var nextProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var value = nextProps.value,
          range = nextProps.range,
          mode = nextProps.mode;

      if (mode === 'multiSelector') {
        if (!range) {
          range = [];
          this.props.range = [];
        }

        if (range.length === this.index.length) this.index = [];
        range.forEach(function (r, i) {
          var v = value && value.length ? value[i] : undefined;

          _this2.index.push(_this2.verifyValue(v, r) ? Math.floor(value[i]) : 0);
        });
      } else if (mode === 'time') {
        // check value...
        if (!this.verifyTime(value)) {
          console.warn('time picker value illegal');
          value = '0:0';
        }

        var time = value.split(':').map(function (n) {
          return +n;
        });
        this.index = time;
      } else if (mode === 'date') {
        var _nextProps$start = nextProps.start,
            start = _nextProps$start === void 0 ? '' : _nextProps$start,
            _nextProps$end = nextProps.end,
            end = _nextProps$end === void 0 ? '' : _nextProps$end;

        var _value = _date__WEBPACK_IMPORTED_MODULE_5__["verifyDate"](value);

        var _start = _date__WEBPACK_IMPORTED_MODULE_5__["verifyDate"](start);

        var _end = _date__WEBPACK_IMPORTED_MODULE_5__["verifyDate"](end);

        if (!_value) _value = new Date(new Date().setHours(0, 0, 0, 0)); // 没传值或值的合法性错误默认今天时间

        if (!_start) _start = new Date('1970/01/01');
        if (!_end) _end = new Date('2999/01/01'); // 时间区间有效性

        if (_value.getTime() >= _start.getTime() && _value.getTime() <= _end.getTime()) {
          this.index = [_value.getFullYear(), _value.getMonth() + 1, _value.getDate()];

          if (!this.pickerDate || this.pickerDate._value.getTime() !== _value.getTime() || this.pickerDate._start.getTime() !== _start.getTime() || this.pickerDate._end.getTime() !== _end.getTime()) {
            this.pickerDate = {
              _value: _value,
              _start: _start,
              _end: _end,
              _updateValue: [_value.getFullYear(), _value.getMonth() + 1, _value.getDate()]
            };
          }
        } else {
          throw new Error('Date Interval Error');
        } // this.index = dateHandle.

      } else {
        if (!range) {
          range = [];
          this.props.range = [];
        }

        if (this.index.length >= 1) this.index = [];
        this.index.push(this.verifyValue(value, range) ? Math.floor(value) : 0);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.handlePrpos(nextProps);
    } // 校验传入的 value 是否合法

  }, {
    key: "verifyValue",
    value: function verifyValue(value, range) {
      if (!isNaN(+value) && value >= 0 && value < range.length) return true;
      return false;
    } // 检验传入的 time value 是否合法

  }, {
    key: "verifyTime",
    value: function verifyTime(value) {
      if (!/^\d{1,2}:\d{1,2}$/.test(value)) return false;
      var time = value.split(':').map(function (num) {
        return +num;
      });
      if (time[0] < 0 || time[0] > 23) return false;
      if (time[1] < 0 || time[1] > 59) return false;
      return true;
    } // 比较时间

  }, {
    key: "compareTime",
    value: function compareTime(t1, t2) {
      // logic: t1 <= t2: return true
      t1 = t1.split(':').map(function (i) {
        return +i;
      });
      t2 = t2.split(':').map(function (i) {
        return +i;
      });
      if (t1[0] < t2[0]) return true;

      if (t1[0] === t2[0]) {
        if (t1[1] <= t2[1]) return true;
      }

      return false;
    }
  }, {
    key: "getMonthRange",
    value: function getMonthRange() {
      var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var _start = 1;
      var _end = 12;

      if (this.pickerDate._start.getFullYear() === this.pickerDate._end.getFullYear()) {
        _start = this.pickerDate._start.getMonth() + 1;
        _end = this.pickerDate._end.getMonth() + 1;
      } else if (this.pickerDate._start.getFullYear() === this.pickerDate._updateValue[0]) {
        _start = this.pickerDate._start.getMonth() + 1;
        _end = 12;
      } else if (this.pickerDate._end.getFullYear() === this.pickerDate._updateValue[0]) {
        _start = 1;
        _end = this.pickerDate._end.getMonth() + 1;
      }

      return this.getDateRange(_start, _end, fields);
    }
  }, {
    key: "getDayRange",
    value: function getDayRange() {
      var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var _start = 1;

      var _end = _date__WEBPACK_IMPORTED_MODULE_5__["getMaxDay"](this.pickerDate._updateValue[0], this.pickerDate._updateValue[1]);

      if (this.pickerDate._start.getFullYear() === this.pickerDate._updateValue[0] && this.pickerDate._start.getMonth() + 1 === this.pickerDate._updateValue[1]) {
        _start = this.pickerDate._start.getDate();
      }

      if (this.pickerDate._end.getFullYear() === this.pickerDate._updateValue[0] && this.pickerDate._end.getMonth() + 1 === this.pickerDate._updateValue[1]) {
        _end = this.pickerDate._end.getDate();
      }

      return this.getDateRange(_start, _end, fields);
    } // 获取年月日下标或者下标对应的数

  }, {
    key: "getDateArrIndex",
    value: function getDateArrIndex(value, fields) {
      var getIdx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var year = this.getDateRange(this.pickerDate._start.getFullYear(), this.pickerDate._end.getFullYear());
      var month = this.getMonthRange();
      var day = this.getDayRange();

      if (getIdx) {
        if (fields === 0) {
          return year[value];
        } else if (fields === 1) {
          return month[value];
        } else {
          return day[value];
        }
      } else {
        if (fields === 0) {
          return year.indexOf(value + '');
        } else if (fields === 1) {
          return month.indexOf(value + '');
        } else {
          return day.indexOf(value + '');
        }
      }
    } // 获取时间数组

  }, {
    key: "getDateRange",
    value: function getDateRange(begin, end) {
      var fields = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var range = [];

      for (var i = begin; i <= end; i++) {
        range.push("".concat(i).concat(fields));
      }

      return range;
    } // 隐藏 picker

  }, {
    key: "hidePicker",
    value: function hidePicker() {
      var _this3 = this;

      this.setState({
        fadeOut: true
      });
      setTimeout(function () {
        return _this3.setState({
          hidden: true,
          fadeOut: false
        });
      }, 350);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.index = [];
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      // 展示 Picker
      var showPicker = function showPicker() {
        if (_this4.props.disabled) return;

        var height = _this4.index.map(function (i, idx) {
          var factor = 0;

          if (_this4.props.mode === 'time') {
            factor = _constant__WEBPACK_IMPORTED_MODULE_4__["LINE_HEIGHT"] * 4;
          }

          if (_this4.props.mode === 'date') {
            return _constant__WEBPACK_IMPORTED_MODULE_4__["TOP"] - _constant__WEBPACK_IMPORTED_MODULE_4__["LINE_HEIGHT"] * _this4.getDateArrIndex(i, idx) - factor;
          }

          return _constant__WEBPACK_IMPORTED_MODULE_4__["TOP"] - _constant__WEBPACK_IMPORTED_MODULE_4__["LINE_HEIGHT"] * i - factor;
        });

        _this4.setState({
          hidden: false,
          height: height
        });
      }; // 点击确定


      var onChange = function onChange(e) {
        _this4.hidePicker(); // 除了 multiSeclector，都在点击确认时才改变记录的下标值


        _this4.index = _this4.state.height.map(function (h) {
          return (_constant__WEBPACK_IMPORTED_MODULE_4__["TOP"] - h) / _constant__WEBPACK_IMPORTED_MODULE_4__["LINE_HEIGHT"];
        });
        var eventObj = getEventObj(e, 'change', {
          value: _this4.index.length > 1 && _this4.props.mode !== 'selector' ? _this4.index : _this4.index[0]
        });

        if (_this4.props.mode === 'time') {
          var range = [['20', '21', '22', '23'].concat(_toConsumableArray(getTimeRange(0, 23)), ['00', '01', '02', '03']), ['56', '57', '58', '59'].concat(_toConsumableArray(getTimeRange(0, 59)), ['00', '01', '02', '03'])];
          _this4.index = _this4.index.map(function (n, i) {
            return range[i][n];
          });
          eventObj.detail.value = _this4.index.join(':');
        }

        if (_this4.props.mode === 'date') {
          _this4.index = _this4.index.map(function (n, i) {
            return _this4.getDateArrIndex(n, i, true);
          });

          if (_this4.props.fields === 'year') {
            eventObj.detail.value = [_this4.index[0]];
          } else if (_this4.props.fields === 'month') {
            eventObj.detail.value = [_this4.index[0], _this4.index[1]];
          } else {
            eventObj.detail.value = _this4.index;
          }

          eventObj.detail.value = eventObj.detail.value.join('-');
        }

        _this4.setState({
          pickerValue: eventObj.detail.value
        });

        _this4.props.onChange && _this4.props.onChange(eventObj);
      }; // 点击取消或蒙层


      var onCancel = function onCancel(e) {
        _this4.hidePicker();

        var eventObj = getEventObj(e, 'cancel', {});
        _this4.props.onCancel && _this4.props.onCancel(eventObj);
      }; // 列改变


      var onColumnChange = function onColumnChange(height, columnId, e) {
        // 获取 touchend 时的 index
        var index = _this4.state.height.map(function (h, i) {
          if (columnId === i) h = height;
          return (_constant__WEBPACK_IMPORTED_MODULE_4__["TOP"] - h) / _constant__WEBPACK_IMPORTED_MODULE_4__["LINE_HEIGHT"];
        }); // 前一级列改变时，后面所有级别的 index 都要设为 0, 并初始化高度


        var rangeLen = _this4.props.range.length;

        if (columnId < rangeLen - 1) {
          for (var i = columnId + 1; i < rangeLen; i++) {
            index[i] = 0;
          }
        }

        _this4.setState({
          height: index.map(function (i) {
            return _constant__WEBPACK_IMPORTED_MODULE_4__["TOP"] - i * _constant__WEBPACK_IMPORTED_MODULE_4__["LINE_HEIGHT"];
          })
        }); // 改变 index 的值


        _this4.index = index;
        var eventObj = getEventObj(e, 'columnChange', {
          column: columnId,
          value: index[columnId]
        });
        _this4.props.onColumnChange && _this4.props.onColumnChange(eventObj);
      }; // 统一抛出的事件对象，和小程序对齐


      var getEventObj = function getEventObj(e, type, detail) {
        Object.defineProperties(e, {
          detail: {
            value: detail,
            enumerable: true
          },
          type: {
            value: type,
            enumerable: true
          }
        });
        return e;
      }; // 供 PickerGroup 修改对应的 height 值


      var updateHeight = function updateHeight(height, columnId) {
        var needRevise = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        _this4.setState(function (prevState) {
          prevState.height[columnId] = height;
          return {
            height: prevState.height
          };
        }, function () {
          // time picker 必须在规定时间范围内，因此需要在 touchEnd 做修正
          if (needRevise) {
            var _this4$props = _this4.props,
                start = _this4$props.start,
                end = _this4$props.end;
            if (!_this4.verifyTime(start)) start = '00:00';
            if (!_this4.verifyTime(end)) end = '23:59';
            if (!_this4.compareTime(start, end)) return;

            var time = _this4.state.height.map(function (h) {
              return (_constant__WEBPACK_IMPORTED_MODULE_4__["TOP"] - h) / _constant__WEBPACK_IMPORTED_MODULE_4__["LINE_HEIGHT"];
            });

            var range = [['20', '21', '22', '23'].concat(_toConsumableArray(getTimeRange(0, 23)), ['00', '01', '02', '03']), ['56', '57', '58', '59'].concat(_toConsumableArray(getTimeRange(0, 59)), ['00', '01', '02', '03'])];
            time = time.map(function (n, i) {
              return range[i][n];
            }).join(':');

            if (!_this4.compareTime(start, time)) {
              // 修正到 start
              var _height = start.split(':').map(function (i) {
                return _constant__WEBPACK_IMPORTED_MODULE_4__["TOP"] - _constant__WEBPACK_IMPORTED_MODULE_4__["LINE_HEIGHT"] * (+i + 4);
              });

              _this4.setState({
                height: _height
              });
            } else if (!_this4.compareTime(time, end)) {
              // 修正到 end
              var _height2 = end.split(':').map(function (i) {
                return _constant__WEBPACK_IMPORTED_MODULE_4__["TOP"] - _constant__WEBPACK_IMPORTED_MODULE_4__["LINE_HEIGHT"] * (+i + 4);
              });

              _this4.setState({
                height: _height2
              });
            }
          }
        });
      }; // 单列


      var getSelector = function getSelector() {
        return nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_picker_group__WEBPACK_IMPORTED_MODULE_2__["default"], {
          range: _this4.props.range,
          rangeKey: _this4.props.rangeKey,
          height: _this4.state.height[0],
          updateHeight: updateHeight,
          columnId: "0"
        });
      }; // 多列


      var getMultiSelector = function getMultiSelector() {
        return _this4.props.range.map(function (range, index) {
          return nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_picker_group__WEBPACK_IMPORTED_MODULE_2__["default"], {
            range: range,
            rangeKey: _this4.props.rangeKey,
            height: _this4.state.height[index],
            updateHeight: updateHeight,
            onColumnChange: onColumnChange,
            columnId: index
          });
        });
      }; // 时间


      var getTimeSelector = function getTimeSelector() {
        var hourRange = ['20', '21', '22', '23'].concat(_toConsumableArray(getTimeRange(0, 23)), ['00', '01', '02', '03']);
        var minRange = ['56', '57', '58', '59'].concat(_toConsumableArray(getTimeRange(0, 59)), ['00', '01', '02', '03']);
        return [nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_picker_group__WEBPACK_IMPORTED_MODULE_2__["default"], {
          mode: "time",
          range: hourRange,
          height: _this4.state.height[0],
          updateHeight: updateHeight,
          columnId: "0"
        }), nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_picker_group__WEBPACK_IMPORTED_MODULE_2__["default"], {
          mode: "time",
          range: minRange,
          height: _this4.state.height[1],
          updateHeight: updateHeight,
          columnId: "1"
        })];
      };

      var getTimeRange = function getTimeRange(begin, end) {
        var range = [];

        for (var i = begin; i <= end; i++) {
          range.push("".concat(i < 10 ? '0' : '').concat(i));
        }

        return range;
      };
      /**
       * @author zhongxin
       * @description 时间选择
       *
       */
      // ======================= Date start =====================//


      var updateDay = function updateDay(value, fields) {
        _this4.pickerDate._updateValue[fields] = value; // 滚动年份

        if (fields === 0) {
          var monthRange = _this4.getMonthRange();

          updateDay(monthRange[0] * 1, 1);
          updateHeight(_constant__WEBPACK_IMPORTED_MODULE_4__["TOP"], 1);
        } else if (fields === 1) {
          var dayRange = _this4.getDayRange();

          updateDay(dayRange[0] * 1, 2);
          updateHeight(_constant__WEBPACK_IMPORTED_MODULE_4__["TOP"], 2);
        }
      };

      var gitDateSelector = function gitDateSelector() {
        var year = _this4.getDateRange(_this4.pickerDate._start.getFullYear(), _this4.pickerDate._end.getFullYear(), '年');

        var month = _this4.getMonthRange('月');

        var day = _this4.getDayRange('日');

        var renderView = [];

        if (_this4.props.fields === 'year') {
          renderView.push(nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_picker_group__WEBPACK_IMPORTED_MODULE_2__["default"], {
            mode: "date",
            range: year,
            height: _this4.state.height[0],
            updateDay: updateDay,
            updateHeight: updateHeight,
            columnId: "0"
          }));
        } else if (_this4.props.fields === 'month') {
          renderView.push(nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_picker_group__WEBPACK_IMPORTED_MODULE_2__["default"], {
            mode: "date",
            range: year,
            height: _this4.state.height[0],
            updateDay: updateDay,
            updateHeight: updateHeight,
            columnId: "0"
          }), nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_picker_group__WEBPACK_IMPORTED_MODULE_2__["default"], {
            mode: "date",
            range: month,
            height: _this4.state.height[1],
            updateDay: updateDay,
            updateHeight: updateHeight,
            columnId: "1"
          }));
        } else {
          renderView = [nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_picker_group__WEBPACK_IMPORTED_MODULE_2__["default"], {
            mode: "date",
            range: year,
            height: _this4.state.height[0],
            updateDay: updateDay,
            updateHeight: updateHeight,
            columnId: "0"
          }), nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_picker_group__WEBPACK_IMPORTED_MODULE_2__["default"], {
            mode: "date",
            range: month,
            height: _this4.state.height[1],
            updateDay: updateDay,
            updateHeight: updateHeight,
            columnId: "1"
          }), nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_picker_group__WEBPACK_IMPORTED_MODULE_2__["default"], {
            mode: "date",
            range: day,
            updateDay: updateDay,
            height: _this4.state.height[2],
            updateHeight: updateHeight,
            columnId: "2"
          })];
        }

        return renderView;
      }; // ======================= Date end =====================//
      // 动画类名控制逻辑


      var clsMask = classnames__WEBPACK_IMPORTED_MODULE_3___default()('weui-mask', 'weui-animate-fade-in', {
        'weui-animate-fade-out': this.state.fadeOut
      });
      var clsSlider = classnames__WEBPACK_IMPORTED_MODULE_3___default()('weui-picker', 'weui-animate-slide-up', {
        'weui-animate-slide-down': this.state.fadeOut
      });
      var shouldDivHidden = this.state.hidden ? 'display: none;' : ''; // // 给 children 绑定事件
      // const children = Nerv.Children.map(this.props.children, child => {
      //   return Nerv.cloneElement(child, {
      //     onClick: showPicker
      //   })
      // })
      // picker__group

      var pickerGroup;

      switch (this.props.mode) {
        case 'multiSelector':
          pickerGroup = getMultiSelector();
          break;

        case 'time':
          pickerGroup = getTimeSelector();
          break;

        case 'date':
          pickerGroup = gitDateSelector();
          break;

        default:
          pickerGroup = getSelector();
      }

      var _this$props$name = this.props.name,
          name = _this$props$name === void 0 ? '' : _this$props$name;
      return nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: this.props.className
      }, nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        onClick: showPicker
      }, this.props.children), nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: shouldDivHidden,
        className: clsMask,
        onClick: onCancel
      }), nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: shouldDivHidden,
        className: clsSlider
      }, nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "weui-picker__hd"
      }, nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "weui-picker__action",
        onClick: onCancel
      }, "\u53D6\u6D88"), nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "weui-picker__action",
        onClick: onChange
      }, "\u786E\u5B9A")), nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "weui-picker__bd"
      }, pickerGroup), nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "hidden",
        name: name,
        value: this.state.pickerValue
      })));
    }
  }]);

  return Picker;
}(nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

_defineProperty(Picker, "defaultProps", {
  mode: 'selector'
});



/***/ }),

/***/ "./node_modules/@tarojs/components/src/components/picker/picker-group/index.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@tarojs/components/src/components/picker/picker-group/index.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PickerGroup; });
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nervjs */ "./node_modules/react/umd/react.development.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant */ "./node_modules/@tarojs/components/src/components/picker/constant.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var PickerGroup = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(PickerGroup, _Nerv$Component);

  var _super = _createSuper(PickerGroup);

  function PickerGroup(props) {
    _classCallCheck(this, PickerGroup);

    return _super.call(this, props);
  }

  _createClass(PickerGroup, [{
    key: "getPosition",
    value: function getPosition(id) {
      var transition = this.touchEnd ? 0.3 : 0;
      return "transform: translate3d(0, ".concat(this.props.height, "px, 0);-webkit-transform: translate3d(0, ").concat(this.props.height, "px, 0);transition: transform ").concat(transition, "s;-webkit-transition: transform ").concat(transition, "s;");
    }
  }, {
    key: "formulaUnlimitedScroll",
    value: function formulaUnlimitedScroll(range, absoluteHeight, direction) {
      var _this = this;

      var _this$props = this.props,
          height = _this$props.height,
          updateHeight = _this$props.updateHeight,
          columnId = _this$props.columnId;
      var factor = direction === 'up' ? 1 : -1;
      this.touchEnd = false; // 点击超过范围，点击到补帧时，先跳到另一端的补帧

      updateHeight(-range * factor * _constant__WEBPACK_IMPORTED_MODULE_1__["LINE_HEIGHT"] + height, columnId); // 再做过渡动画

      setTimeout(function () {
        _this.touchEnd = true;
        var index = Math.round(absoluteHeight / -_constant__WEBPACK_IMPORTED_MODULE_1__["LINE_HEIGHT"]) + range * factor;
        var relativeHeight = _constant__WEBPACK_IMPORTED_MODULE_1__["TOP"] - _constant__WEBPACK_IMPORTED_MODULE_1__["LINE_HEIGHT"] * index;
        updateHeight(relativeHeight, columnId, true);
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var onTouchStart = function onTouchStart(e) {
        // 记录第一次的点击位置
        _this2.startY = e.changedTouches[0].clientY;
        _this2.preY = e.changedTouches[0].clientY;
        _this2.hadMove = false;
      };

      var onTouchMove = function onTouchMove(e) {
        var y = e.changedTouches[0].clientY;
        var deltaY = y - _this2.preY;
        _this2.preY = y;
        _this2.touchEnd = false;
        if (Math.abs(y - _this2.startY) > 10) _this2.hadMove = true;
        var newPos = _this2.props.height + deltaY; // 处理时间选择器的无限滚动

        if (_this2.props.mode === 'time') {
          if (_this2.props.columnId === '0') {
            // 数字 28 来自于 4 格补帧 + 0 ～ 23 的 24 格，共 28 格
            if (newPos > _constant__WEBPACK_IMPORTED_MODULE_1__["TOP"] - _constant__WEBPACK_IMPORTED_MODULE_1__["LINE_HEIGHT"] * 3) {
              newPos = _constant__WEBPACK_IMPORTED_MODULE_1__["TOP"] - _constant__WEBPACK_IMPORTED_MODULE_1__["LINE_HEIGHT"] * 27 + deltaY;
            }

            if (newPos < _constant__WEBPACK_IMPORTED_MODULE_1__["TOP"] - _constant__WEBPACK_IMPORTED_MODULE_1__["LINE_HEIGHT"] * 28) {
              newPos = _constant__WEBPACK_IMPORTED_MODULE_1__["TOP"] - _constant__WEBPACK_IMPORTED_MODULE_1__["LINE_HEIGHT"] * 4 + deltaY;
            }
          } else if (_this2.props.columnId === '1') {
            if (newPos > _constant__WEBPACK_IMPORTED_MODULE_1__["TOP"] - _constant__WEBPACK_IMPORTED_MODULE_1__["LINE_HEIGHT"] * 3) {
              newPos = _constant__WEBPACK_IMPORTED_MODULE_1__["TOP"] - _constant__WEBPACK_IMPORTED_MODULE_1__["LINE_HEIGHT"] * 63 + deltaY;
            }

            if (newPos < _constant__WEBPACK_IMPORTED_MODULE_1__["TOP"] - _constant__WEBPACK_IMPORTED_MODULE_1__["LINE_HEIGHT"] * 64) {
              newPos = _constant__WEBPACK_IMPORTED_MODULE_1__["TOP"] - _constant__WEBPACK_IMPORTED_MODULE_1__["LINE_HEIGHT"] * 4 + deltaY;
            }
          }
        }

        _this2.props.updateHeight(newPos, _this2.props.columnId);

        e.preventDefault();
      };

      var onTouchEnd = function onTouchEnd(e) {
        var _this2$props = _this2.props,
            mode = _this2$props.mode,
            range = _this2$props.range,
            height = _this2$props.height,
            updateHeight = _this2$props.updateHeight,
            onColumnChange = _this2$props.onColumnChange,
            columnId = _this2$props.columnId;
        var max = 0;
        var min = -_constant__WEBPACK_IMPORTED_MODULE_1__["LINE_HEIGHT"] * (range.length - 1);
        var endY = e.changedTouches[0].clientY;
        _this2.touchEnd = true; // touchEnd 时的高度，可能带小数点，需要再处理

        var absoluteHeight;

        if (!_this2.hadMove) {
          /** 点击 */
          // 屏幕高度
          var windowHeight = window.innerHeight; // picker__mask 垂直方向距离屏幕顶部的高度

          var relativeY = windowHeight - _constant__WEBPACK_IMPORTED_MODULE_1__["MASK_HEIGHT"] / 2;
          absoluteHeight = height - _constant__WEBPACK_IMPORTED_MODULE_1__["TOP"] - (endY - relativeY); // 处理时间选择器的无限滚动

          if (_this2.props.mode === 'time') {
            if (_this2.props.columnId === '0') {
              // 点击上溢出
              // absoluteHeight 是相对模块中点来算的，所以会算多半行，这时要减去这半行，即2.5行
              if (absoluteHeight > -_constant__WEBPACK_IMPORTED_MODULE_1__["LINE_HEIGHT"] * 2.5) {
                _this2.formulaUnlimitedScroll(24, absoluteHeight, 'up');

                return;
              } // 点击下溢出


              if (absoluteHeight < -_constant__WEBPACK_IMPORTED_MODULE_1__["LINE_HEIGHT"] * 28.5) {
                _this2.formulaUnlimitedScroll(24, absoluteHeight, 'down');

                return;
              }
            } else if (_this2.props.columnId === '1') {
              // 点击上溢出
              if (absoluteHeight > -_constant__WEBPACK_IMPORTED_MODULE_1__["LINE_HEIGHT"] * 2.5) {
                _this2.formulaUnlimitedScroll(60, absoluteHeight, 'up');

                return;
              } // 点击下溢出


              if (absoluteHeight < -_constant__WEBPACK_IMPORTED_MODULE_1__["LINE_HEIGHT"] * 64.5) {
                _this2.formulaUnlimitedScroll(60, absoluteHeight, 'down');

                return;
              }
            }
          }
        } else {
          /** 滚动 */
          absoluteHeight = height - _constant__WEBPACK_IMPORTED_MODULE_1__["TOP"];
        } // 边界情况处理


        if (absoluteHeight > max) absoluteHeight = 0;
        if (absoluteHeight < min) absoluteHeight = min; // 先按公式算出 index, 再用此 index 算出一个整数高度

        var index = Math.round(absoluteHeight / -_constant__WEBPACK_IMPORTED_MODULE_1__["LINE_HEIGHT"]);
        var relativeHeight = _constant__WEBPACK_IMPORTED_MODULE_1__["TOP"] - _constant__WEBPACK_IMPORTED_MODULE_1__["LINE_HEIGHT"] * index;

        if (_this2.props.mode === 'date') {
          if (_this2.props.columnId === '0') {
            _this2.props.updateDay(+_this2.props.range[index].replace(/[^0-9]/gi, ''), 0);
          }

          if (_this2.props.columnId === '1') {
            _this2.props.updateDay(+_this2.props.range[index].replace(/[^0-9]/gi, ''), 1);
          }

          if (_this2.props.columnId === '2') {
            _this2.props.updateDay(+_this2.props.range[index].replace(/[^0-9]/gi, ''), 2);
          }
        }

        updateHeight(relativeHeight, columnId, mode === 'time');
        onColumnChange && onColumnChange(relativeHeight, columnId, e);
      }; // picker__item


      var range = this.props.range || [];
      var pickerItem = range.map(function (item) {
        var rangeKey = _this2.props.rangeKey;
        var content = rangeKey ? item[rangeKey] : item;
        return nervjs__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "weui-picker__item"
        }, "".concat(content));
      });
      return nervjs__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "weui-picker__group",
        onTouchStart: onTouchStart,
        onTouchMove: onTouchMove,
        onTouchEnd: onTouchEnd
      }, nervjs__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "weui-picker__mask"
      }), nervjs__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "weui-picker__indicator"
      }), nervjs__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "weui-picker__content",
        style: this.getPosition()
      }, pickerItem));
    }
  }]);

  return PickerGroup;
}(nervjs__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./node_modules/@tarojs/components/src/components/picker/style/index.scss":
/*!********************************************************************************!*\
  !*** ./node_modules/@tarojs/components/src/components/picker/style/index.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../css-loader/dist/cjs.js!../../../../../../sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@tarojs/components/src/components/picker/style/index.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./node_modules/@tarojs/components/src/components/progress/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@tarojs/components/src/components/progress/index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var weui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! weui */ "./node_modules/weui/dist/style/weui.css");
/* harmony import */ var weui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(weui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nervjs */ "./node_modules/react/umd/react.development.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_parse_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/parse-type */ "./node_modules/@tarojs/components/src/utils/parse-type.js");




/**
 * props 类型检测
 *
 * @param {Object} props
 */

function parseType(props) {
  var showInfo = props.showInfo,
      percent = props.percent,
      strokeWidth = props.strokeWidth,
      activeColor = props.activeColor,
      backgroundColor = props.backgroundColor,
      active = props.active,
      borderRadius = props.borderRadius; // 抛出错误信息

  var throwErrorMsg = function throwErrorMsg(type) {
    throw new TypeError(type);
  };

  if (showInfo) Object(_utils_parse_type__WEBPACK_IMPORTED_MODULE_3__["isBoolean"])(showInfo) ? '' : throwErrorMsg('showInfo');
  if (active) Object(_utils_parse_type__WEBPACK_IMPORTED_MODULE_3__["isBoolean"])(active) ? '' : throwErrorMsg('active');
  if (percent) Object(_utils_parse_type__WEBPACK_IMPORTED_MODULE_3__["isNumber"])(percent) ? '' : throwErrorMsg('percent');
  if (strokeWidth) Object(_utils_parse_type__WEBPACK_IMPORTED_MODULE_3__["isNumber"])(strokeWidth) ? '' : throwErrorMsg('strokeWidth');
  if (activeColor) Object(_utils_parse_type__WEBPACK_IMPORTED_MODULE_3__["isString"])(activeColor) ? '' : throwErrorMsg('activeColor');

  if (backgroundColor) {
    Object(_utils_parse_type__WEBPACK_IMPORTED_MODULE_3__["isString"])(backgroundColor) ? '' : throwErrorMsg('backgroundColor');
  }

  if (borderRadius) Object(_utils_parse_type__WEBPACK_IMPORTED_MODULE_3__["isString"])(borderRadius) ? '' : throwErrorMsg('borderRadius');
}

var Progress = function Progress(props) {
  parseType(props);
  var className = props.className,
      showInfo = props.showInfo,
      strokeWidth = props.strokeWidth,
      activeColor = props.activeColor,
      backgroundColor = props.backgroundColor,
      active = props.active,
      percent = props.percent,
      borderRadius = props.borderRadius;
  var pgPercent = percent > 100 ? 100 : percent < 0 ? 0 : percent;
  var cls = classnames__WEBPACK_IMPORTED_MODULE_2___default()('weui-progress', className);
  var pgWdith = {
    width: pgPercent + '%',
    backgroundColor: activeColor,
    WebkitTransition: active ? 'width 1s ease-in-out' : 'none',
    transition: active ? 'width 1s ease-in-out' : 'none',
    borderRadius: borderRadius ? "".concat(borderRadius, "px") : 0
  };
  var pgHeight = {
    height: strokeWidth + 'px',
    backgroundColor: backgroundColor
  };
  return nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: cls
  }, nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "weui-progress__bar",
    style: pgHeight
  }, nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "weui-progress__inner-bar",
    style: pgWdith
  })), showInfo ? nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "weui-progress__opr",
    style: "font-size: inherit"
  }, nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, pgPercent, "%")) : false);
};

/* harmony default export */ __webpack_exports__["default"] = (Progress);
Progress.defaultProps = {
  percent: 0,
  showInfo: false
};

/***/ }),

/***/ "./node_modules/@tarojs/components/src/components/pull-down-refresh/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@tarojs/components/src/components/pull-down-refresh/index.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nervjs */ "./node_modules/react/umd/react.development.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_taro_h5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro-h5 */ "@tarojs/taro-h5");
/* harmony import */ var _tarojs_taro_h5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro_h5__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style/index.css */ "./node_modules/@tarojs/components/src/components/pull-down-refresh/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_3__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var StaticRenderer = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(StaticRenderer, _Nerv$Component);

  var _super = _createSuper(StaticRenderer);

  function StaticRenderer() {
    _classCallCheck(this, StaticRenderer);

    return _super.apply(this, arguments);
  }

  _createClass(StaticRenderer, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.shouldUpdate;
    }
  }, {
    key: "render",
    value: function render() {
      return nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, this.props.render());
    }
  }]);

  return StaticRenderer;
}(nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

function setTransform(nodeStyle, value) {
  nodeStyle.transform = value;
  nodeStyle.webkitTransform = value;
  nodeStyle.MozTransform = value;
}

var isWebView = typeof navigator !== 'undefined' && /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
var INDICATOR = {
  activate: 'release',
  deactivate: 'pull',
  release: 'loading',
  finish: 'finish'
};
var supportsPassive = false;

try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function get() {
      supportsPassive = true;
    }
  });
  window.addEventListener('test', null, opts);
} catch (e) {}

var willPreventDefault = supportsPassive ? {
  passive: false
} : false; // const willNotPreventDefault = supportsPassive ? { passive: true } : false;

var PullToRefresh = /*#__PURE__*/function (_Nerv$Component2) {
  _inherits(PullToRefresh, _Nerv$Component2);

  var _super2 = _createSuper(PullToRefresh);

  function PullToRefresh() {
    var _this;

    _classCallCheck(this, PullToRefresh);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super2.call.apply(_super2, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      currSt: 'deactivate',
      dragOnEdge: false
    });

    _defineProperty(_assertThisInitialized(_this), "containerRef", null);

    _defineProperty(_assertThisInitialized(_this), "contentRef", null);

    _defineProperty(_assertThisInitialized(_this), "_to", null);

    _defineProperty(_assertThisInitialized(_this), "_ScreenY", null);

    _defineProperty(_assertThisInitialized(_this), "_startScreenY", null);

    _defineProperty(_assertThisInitialized(_this), "_lastScreenY", null);

    _defineProperty(_assertThisInitialized(_this), "_isMounted", false);

    _defineProperty(_assertThisInitialized(_this), "shouldUpdateChildren", false);

    _defineProperty(_assertThisInitialized(_this), "scrollContainer", document.querySelector('.taro-tabbar__panel') || document.body);

    _defineProperty(_assertThisInitialized(_this), "triggerPullDownRefresh", function () {
      // 在初始化时、用代码 自动 触发 pullDownRefresh
      // 添加this._isMounted的判断，否则组建一实例化，currSt就会是finish
      if (!_this.state.dragOnEdge && _this._isMounted) {
        if (_this.props.refreshing) {
          _this._lastScreenY = _this.props.distanceToRefresh + 1; // change dom need after setState

          _this.setState({
            currSt: 'release'
          }, function () {
            return _this.setContentStyle(_this._lastScreenY);
          });
        } else {
          _this.setState({
            currSt: 'finish'
          }, function () {
            return _this.reset();
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "init", function () {
      var ele = _this.scrollContainer;
      _this._to = {
        touchstart: _this.onTouchStart.bind(_assertThisInitialized(_this), ele),
        touchmove: _this.onTouchMove.bind(_assertThisInitialized(_this), ele),
        touchend: _this.onTouchEnd.bind(_assertThisInitialized(_this), ele),
        touchcancel: _this.onTouchEnd.bind(_assertThisInitialized(_this), ele)
      };
      Object.keys(_this._to).forEach(function (key) {
        ele.addEventListener(key, _this._to[key], willPreventDefault);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "destroy", function () {
      var ele = _this.scrollContainer;
      Object.keys(_this._to).forEach(function (key) {
        ele.removeEventListener(key, _this._to[key]);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onTouchStart", function (_ele, e) {
      _this._ScreenY = _this._startScreenY = e.touches[0].screenY; // 一开始 refreshing 为 true 时 this._lastScreenY 有值

      _this._lastScreenY = _this._lastScreenY || 0;
    });

    _defineProperty(_assertThisInitialized(_this), "isEdge", function (ele) {
      var container = _this.scrollContainer;

      if (container && container === document.body) {
        // In chrome61 `document.body.scrollTop` is invalid
        var scrollNode = document.scrollingElement ? document.scrollingElement : document.body;
        return scrollNode.scrollTop <= 0;
      }

      return ele.scrollTop <= 0;
    });

    _defineProperty(_assertThisInitialized(_this), "damping", function (dy) {
      if (Math.abs(_this._lastScreenY) > _this.props.damping) {
        return 0;
      }

      var ratio = Math.abs(_this._ScreenY - _this._startScreenY) / window.screen.height;
      dy *= (1 - ratio) * 0.6;
      return dy;
    });

    _defineProperty(_assertThisInitialized(_this), "onTouchMove", function (ele, e) {
      // 使用 pageY 对比有问题
      var _screenY = e.touches[0].screenY; // 拖动方向不符合的不处理

      if (_this._startScreenY > _screenY) {
        return;
      }

      if (_this.isEdge(ele)) {
        if (!_this.state.dragOnEdge) {
          // 当用户开始往上滑的时候isEdge还是false的话，会导致this._ScreenY不是想要的，只有当isEdge为true时，再上滑，才有意义
          // 下面这行代码解决了上面这个问题
          _this._ScreenY = _this._startScreenY = e.touches[0].screenY;

          _this.setState({
            dragOnEdge: true
          });
        }

        if (e.cancelable) {
          e.preventDefault();
        } // add stopPropagation with fastclick will trigger content onClick event. why?
        // ref https://github.com/ant-design/ant-design-mobile/issues/2141
        // e.stopPropagation();


        var _diff = Math.round(_screenY - _this._ScreenY);

        _this._ScreenY = _screenY;
        _this._lastScreenY += _this.damping(_diff);

        _this.setContentStyle(_this._lastScreenY);

        if (Math.abs(_this._lastScreenY) < _this.props.distanceToRefresh) {
          if (_this.state.currSt !== 'deactivate') {
            // console.log('back to the distance');
            _this.setState({
              currSt: 'deactivate'
            });
          }
        } else {
          if (_this.state.currSt === 'deactivate') {
            // console.log('reach to the distance');
            _this.setState({
              currSt: 'activate'
            });
          }
        } // https://github.com/ant-design/ant-design-mobile/issues/573#issuecomment-339560829
        // iOS UIWebView issue, It seems no problem in WKWebView


        if (isWebView && e.changedTouches[0].clientY < 0) {
          _this.onTouchEnd();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onTouchEnd", function () {
      if (_this.state.dragOnEdge) {
        _this.setState({
          dragOnEdge: false
        });
      }

      if (_this.state.currSt === 'activate') {
        _this.setState({
          currSt: 'release'
        });

        _this.props.onRefresh();
      } else if (_this.state.currSt === 'release') {
        _this._lastScreenY = _this.props.distanceToRefresh + 1;

        _this.setContentStyle(_this._lastScreenY);
      } else {
        _this.reset();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "reset", function () {
      _this._lastScreenY = 0;

      _this.setContentStyle(0);
    });

    _defineProperty(_assertThisInitialized(_this), "setContentStyle", function (ty) {
      // todos: Why sometimes do not have `this.contentRef` ?
      if (_this.contentRef) {
        setTransform(_this.contentRef.style, "translate3d(0px,".concat(ty, "px,0)"));
      }
    });

    return _this;
  }

  _createClass(PullToRefresh, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      this.shouldUpdateChildren = this.props.children !== nextProps.children;
      return true;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps === this.props || prevProps.refreshing === this.props.refreshing) {
        return;
      } // triggerPullDownRefresh 需要尽可能减少 setState 次数


      this.triggerPullDownRefresh();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      // this.init()
      this.triggerPullDownRefresh();
      this._isMounted = true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {// Should have no setTimeout here!
      // this.destroy(this.scrollContainer)
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = _objectSpread({}, this.props);

      delete props.damping;

      var className = props.className,
          prefixCls = props.prefixCls,
          children = props.children,
          onRefresh = props.onRefresh,
          refreshing = props.refreshing,
          indicator = props.indicator,
          distanceToRefresh = props.distanceToRefresh,
          restProps = _objectWithoutProperties(props, ["className", "prefixCls", "children", "onRefresh", "refreshing", "indicator", "distanceToRefresh"]);

      var renderChildren = nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StaticRenderer, {
        shouldUpdate: this.shouldUpdateChildren,
        render: function render() {
          return children;
        }
      });

      var renderRefresh = function renderRefresh(cls) {
        var _this2$state = _this2.state,
            currSt = _this2$state.currSt,
            dragOnEdge = _this2$state.dragOnEdge;
        var cla = classnames__WEBPACK_IMPORTED_MODULE_0___default()(cls, !dragOnEdge && "".concat(prefixCls, "-transition"));
        var showIndicator = currSt === 'activate' || currSt === 'release';
        return nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "".concat(prefixCls, "-content-wrapper")
        }, nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: cla,
          ref: function ref(el) {
            _this2.contentRef = el;
          }
        }, showIndicator && nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "".concat(prefixCls, "-indicator")
        }, nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null), nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null), nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null)), renderChildren));
      };

      if (this.scrollContainer) {
        return renderRefresh("".concat(prefixCls, "-content ").concat(prefixCls, "-down"));
      }

      return nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", _extends({
        ref: function ref(el) {
          _this2.containerRef = el;
        },
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, prefixCls, "".concat(prefixCls, "-down"))
      }, restProps), renderRefresh("".concat(prefixCls, "-content")));
    }
  }]);

  return PullToRefresh;
}(nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

_defineProperty(PullToRefresh, "defaultProps", {
  prefixCls: 'rmc-pull-to-refresh',
  distanceToRefresh: 50,
  damping: 100,
  indicator: INDICATOR
});

var PullDownRefresh = /*#__PURE__*/function (_Nerv$Component3) {
  _inherits(PullDownRefresh, _Nerv$Component3);

  var _super3 = _createSuper(PullDownRefresh);

  function PullDownRefresh() {
    var _this3;

    _classCallCheck(this, PullDownRefresh);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this3 = _super3.call.apply(_super3, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this3), "state", {
      refreshing: false
    });

    _defineProperty(_assertThisInitialized(_this3), "isBound", false);

    _defineProperty(_assertThisInitialized(_this3), "listeners", []);

    _defineProperty(_assertThisInitialized(_this3), "startPullDownRefresh", function () {
      _this3.props.onRefresh();

      _this3.setState({
        refreshing: true
      });
    });

    _defineProperty(_assertThisInitialized(_this3), "stopPullDownRefresh", function () {
      _this3.setState({
        refreshing: false
      });
    });

    _defineProperty(_assertThisInitialized(_this3), "getPtrRef", function (ref) {
      _this3.ptrRef = ref;
    });

    _defineProperty(_assertThisInitialized(_this3), "bindEvent", function () {
      if (_this3.isBound) return;
      _this3.isBound = true;
      _this3.ptrRef && _this3.ptrRef.init();
      _this3.listeners = [['__taroStartPullDownRefresh', function (_ref) {
        var successHandler = _ref.successHandler,
            errorHandler = _ref.errorHandler;

        try {
          _this3.startPullDownRefresh();

          successHandler({
            errMsg: 'startPullDownRefresh: ok'
          });
        } catch (e) {
          errorHandler({
            errMsg: 'startPullDownRefresh: fail'
          });
        }
      }], ['__taroStopPullDownRefresh', function (_ref2) {
        var successHandler = _ref2.successHandler,
            errorHandler = _ref2.errorHandler;

        try {
          _this3.stopPullDownRefresh();

          successHandler({
            errMsg: 'stopPullDownRefresh: ok'
          });
        } catch (e) {
          errorHandler({
            errMsg: 'stopPullDownRefresh: fail'
          });
        }
      }]];

      _this3.listeners.forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            evtName = _ref4[0],
            callback = _ref4[1];

        _tarojs_taro_h5__WEBPACK_IMPORTED_MODULE_2___default.a.eventCenter.on(evtName, callback);
      });
    });

    _defineProperty(_assertThisInitialized(_this3), "unbindEvent", function () {
      _this3.isBound = false;
      _this3.ptrRef && _this3.ptrRef.destroy();

      _this3.listeners.forEach(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
            evtName = _ref6[0],
            callback = _ref6[1];

        _tarojs_taro_h5__WEBPACK_IMPORTED_MODULE_2___default.a.eventCenter.off(evtName, callback);
      });
    });

    return _this3;
  }

  _createClass(PullDownRefresh, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.bindEvent();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unbindEvent();
    }
  }, {
    key: "render",
    value: function render() {
      var props = {
        distanceToRefresh: 100,
        damping: 200,
        refreshing: this.state.refreshing,
        onRefresh: this.startPullDownRefresh,
        ref: this.getPtrRef
      };
      return nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PullToRefresh, props, this.props.children);
    }
  }]);

  return PullDownRefresh;
}(nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PullDownRefresh);

/***/ }),

/***/ "./node_modules/@tarojs/components/src/components/pull-down-refresh/style/index.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/@tarojs/components/src/components/pull-down-refresh/style/index.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/@tarojs/components/src/components/pull-down-refresh/style/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./node_modules/@tarojs/components/src/components/radio/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@tarojs/components/src/components/radio/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var weui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! weui */ "./node_modules/weui/dist/style/weui.css");
/* harmony import */ var weui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(weui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nervjs */ "./node_modules/react/umd/react.development.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var omit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var Radio = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(Radio, _Nerv$Component);

  var _super = _createSuper(Radio);

  function Radio() {
    _classCallCheck(this, Radio);

    return _super.apply(this, arguments);
  }

  _createClass(Radio, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onChange = _this$props.onChange,
          className = _this$props.className,
          checked = _this$props.checked,
          name = _this$props.name,
          style = _this$props.style;
      var key = this.props["for"];
      var cls = classnames__WEBPACK_IMPORTED_MODULE_3___default()('weui-check', className);
      return nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "weui-cells_checkbox",
        style: style
      }, nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", _extends({}, Object(omit_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.props, ['className', 'checked', 'onChange', 'name', 'id', 'type', 'style']), {
        id: key,
        type: "radio",
        name: name,
        className: cls,
        checked: checked,
        onChange: onChange
      })), className ? false : nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "weui-icon-checked"
      }), this.props.children);
    }
  }]);

  return Radio;
}(nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Radio);

/***/ }),

/***/ "./node_modules/@tarojs/components/src/components/radio/radio-group.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@tarojs/components/src/components/radio/radio-group.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var weui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! weui */ "./node_modules/weui/dist/style/weui.css");
/* harmony import */ var weui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(weui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nervjs */ "./node_modules/react/umd/react.development.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_parse_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/parse-type */ "./node_modules/@tarojs/components/src/utils/parse-type.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var RadioGroup = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(RadioGroup, _Nerv$Component);

  var _super = _createSuper(RadioGroup);

  function RadioGroup() {
    var _this;

    _classCallCheck(this, RadioGroup);

    _this = _super.apply(this, arguments); // this.state = {
    //   value: []
    // }

    _this.uniqueName = Date.now().toString(36);
    _this.radioValue = [];
    _this.toggleChange = _this.toggleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(RadioGroup, [{
    key: "toggleChange",
    value: function toggleChange(e, i) {
      var checkValue;

      var _value = this.radioValue.map(function (item, idx) {
        var curValue = item.value;
        if (Object(_utils_parse_type__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(item.value)) curValue = item.value.toString();

        if (e.target.value === curValue) {
          checkValue = item.value;
          return {
            name: item.name,
            value: item.value,
            checked: !item.checked
          };
        }

        return item;
      });

      this.radioValue = _value;
      var onChange = this.props.onChange;
      Object.defineProperty(e, 'detail', {
        enumerable: true,
        value: {
          value: checkValue
        }
      });
      onChange && onChange(e);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$name = this.props.name,
          name = _this$props$name === void 0 ? this.uniqueName : _this$props$name; // 给 children 绑定事件

      var children = nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.Children.toArray(this.props.children).map(function (item, i) {
        var _key = item.props["for"];
        var chd = nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.Children.toArray(item.props.children).map(function (ch) {
          if (ch.name === 'Radio') {
            if (ch.props.checked) {
              _this2.radioValue[i] = {
                name: ch.props.name,
                value: ch.props.value,
                checked: true
              };
            } else {
              _this2.radioValue[i] = {
                name: ch.props.name,
                value: ch.props.value,
                checked: false
              };
            }

            return nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(ch, {
              onChange: function onChange(e) {
                return _this2.toggleChange(e, i);
              },
              "for": _key,
              name: name
            });
          }

          return ch;
        });
        return nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(item, '', chd);
      });
      /* TODO 规避Nerv数组diff问题 */

      return nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "weui-cells_radiogroup"
      }, children);
    }
  }]);

  return RadioGroup;
}(nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (RadioGroup);

/***/ }),

/***/ "./node_modules/@tarojs/components/src/components/rich-text/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@tarojs/components/src/components/rich-text/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var weui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! weui */ "./node_modules/weui/dist/style/weui.css");
/* harmony import */ var weui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(weui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nervjs */ "./node_modules/react/umd/react.development.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var omit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var RichText = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(RichText, _Nerv$Component);

  var _super = _createSuper(RichText);

  function RichText() {
    _classCallCheck(this, RichText);

    return _super.apply(this, arguments);
  }

  _createClass(RichText, [{
    key: "renderNodes",
    value: function renderNodes(item) {
      if (item.type === 'text') {
        return nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('span', {}, item.text);
      } else {
        var child = this.renderChildrens(item.children);
        var obj = {
          className: '',
          style: ''
        };

        if (item.hasOwnProperty('attrs')) {
          for (var key in item.attrs) {
            if (key === 'class') {
              obj.className = item.attrs[key] || '';
            } else {
              obj[key] = item.attrs[key] || '';
            }
          }
        }

        return nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(item.name, obj, child);
      }
    }
  }, {
    key: "renderChildrens",
    value: function renderChildrens() {
      var _this = this;

      var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      if (arr.length === 0) return;
      return arr.map(function (list, i) {
        if (list.type === 'text') {
          return list.text;
        }

        return _this.renderNodes(list);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          nodes = _this$props.nodes,
          className = _this$props.className,
          other = _objectWithoutProperties(_this$props, ["nodes", "className"]);

      if (Array.isArray(nodes)) {
        return nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", _extends({
          className: className
        }, Object(omit_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.props, ['nodes', 'className']), other), nodes.map(function (item, idx) {
          return _this2.renderNodes(item);
        }));
      } else {
        return nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", _extends({
          className: className
        }, Object(omit_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.props, ['className']), other, {
          dangerouslySetInnerHTML: {
            __html: nodes
          }
        }));
      }
    }
  }]);

  return RichText;
}(nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (RichText);

/***/ }),

/***/ "./node_modules/@tarojs/components/src/components/scroll-view/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@tarojs/components/src/components/scroll-view/index.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var weui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! weui */ "./node_modules/weui/dist/style/weui.css");
/* harmony import */ var weui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(weui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nervjs */ "./node_modules/react/umd/react.development.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var omit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style/index.scss */ "./node_modules/@tarojs/components/src/components/scroll-view/style/index.scss");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function easeOutScroll(from, to, callback) {
  if (from === to || typeof from !== 'number') {
    return;
  }

  var change = to - from;
  var dur = 500;
  var sTime = +new Date();

  function linear(t, b, c, d) {
    return c * t / d + b;
  }

  var isLarger = to >= from;

  function step() {
    from = linear(+new Date() - sTime, from, change, dur);

    if (isLarger && from >= to || !isLarger && to >= from) {
      callback(to);
      return;
    }

    callback(from);
    requestAnimationFrame(step);
  }

  step();
}

function throttle(fn, delay) {
  var timer = null;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn();
    }, delay);
  };
}

var ScrollView = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(ScrollView, _Nerv$Component);

  var _super = _createSuper(ScrollView);

  function ScrollView() {
    var _this;

    _classCallCheck(this, ScrollView);

    _this = _super.apply(this, arguments);

    _defineProperty(_assertThisInitialized(_this), "onTouchMove", function (e) {
      e.stopPropagation();
    });

    return _this;
  }

  _createClass(ScrollView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        var props = _this2.props;

        if (props.scrollY && typeof props.scrollTop === 'number') {
          if ('scrollWithAnimation' in props) {
            easeOutScroll(0, props.scrollTop, function (pos) {
              _this2.container.scrollTop = pos;
            });
          } else {
            _this2.container.scrollTop = props.scrollTop;
          }

          _this2._scrollTop = props.scrollTop;
        }

        if (props.scrollX && typeof props.scrollLeft === 'number') {
          if ('scrollWithAnimation' in props) {
            easeOutScroll(0, props.scrollLeft, function (pos) {
              _this2.container.scrollLeft = pos;
            });
          } else {
            _this2.container.scrollLeft = props.scrollLeft;
          }

          _this2._scrollLeft = props.scrollLeft;
        }
      }, 10);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      var props = this.props; // Y 轴滚动

      if (nextProps.scrollY && typeof nextProps.scrollTop === 'number' && nextProps.scrollTop !== this._scrollTop) {
        if ('scrollWithAnimation' in nextProps) {
          easeOutScroll(this._scrollTop, nextProps.scrollTop, function (pos) {
            _this3.container.scrollTop = pos;
          });
        } else {
          this.container.scrollTop = nextProps.scrollTop;
        }

        this._scrollTop = nextProps.scrollTop;
      } // X 轴滚动


      if (nextProps.scrollX && typeof props.scrollLeft === 'number' && nextProps.scrollLeft !== this._scrollLeft) {
        if ('scrollWithAnimation' in nextProps) {
          easeOutScroll(this._scrollLeft, nextProps.scrollLeft, function (pos) {
            _this3.container.scrollLeft = pos;
          });
        } else {
          this.container.scrollLeft = nextProps.scrollLeft;
        }

        this._scrollLeft = nextProps.scrollLeft;
      } // scrollIntoView


      if (nextProps.scrollIntoView && typeof nextProps.scrollIntoView === 'string' && document && document.querySelector && document.querySelector("#".concat(nextProps.scrollIntoView))) {
        document.querySelector("#".concat(nextProps.scrollIntoView)).scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'start'
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props = this.props,
          className = _this$props.className,
          onScroll = _this$props.onScroll,
          onScrollToUpper = _this$props.onScrollToUpper,
          onScrollToLower = _this$props.onScrollToLower,
          onTouchMove = _this$props.onTouchMove,
          scrollX = _this$props.scrollX,
          scrollY = _this$props.scrollY;
      var _this$props2 = this.props,
          _this$props2$upperThr = _this$props2.upperThreshold,
          upperThreshold = _this$props2$upperThr === void 0 ? 50 : _this$props2$upperThr,
          _this$props2$lowerThr = _this$props2.lowerThreshold,
          lowerThreshold = _this$props2$lowerThr === void 0 ? 50 : _this$props2$lowerThr;
      var cls = classnames__WEBPACK_IMPORTED_MODULE_3___default()('taro-scroll', {
        'taro-scroll-view__scroll-x': scrollX,
        'taro-scroll-view__scroll-y': scrollY
      }, className);
      upperThreshold = parseInt(upperThreshold);
      lowerThreshold = parseInt(lowerThreshold);

      var uperAndLower = function uperAndLower() {
        var _this4$container = _this4.container,
            offsetWidth = _this4$container.offsetWidth,
            offsetHeight = _this4$container.offsetHeight,
            scrollLeft = _this4$container.scrollLeft,
            scrollTop = _this4$container.scrollTop,
            scrollHeight = _this4$container.scrollHeight,
            scrollWidth = _this4$container.scrollWidth;

        if (onScrollToLower && (_this4.props.scrollY && offsetHeight + scrollTop + lowerThreshold >= scrollHeight || _this4.props.scrollX && offsetWidth + scrollLeft + lowerThreshold >= scrollWidth)) {
          onScrollToLower();
        }

        if (onScrollToUpper && (_this4.props.scrollY && scrollTop <= upperThreshold || _this4.props.scrollX && scrollLeft <= upperThreshold)) {
          onScrollToUpper();
        }
      };

      var uperAndLowerThrottle = throttle(uperAndLower, 200);

      var _onScroll = function _onScroll(e) {
        var _this4$container2 = _this4.container,
            scrollLeft = _this4$container2.scrollLeft,
            scrollTop = _this4$container2.scrollTop,
            scrollHeight = _this4$container2.scrollHeight,
            scrollWidth = _this4$container2.scrollWidth;
        _this4._scrollLeft = scrollLeft;
        _this4._scrollTop = scrollTop;
        e.detail = {
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          scrollHeight: scrollHeight,
          scrollWidth: scrollWidth
        };
        uperAndLowerThrottle();
        onScroll && onScroll(e);
      };

      var _onTouchMove = function _onTouchMove(e) {
        onTouchMove ? onTouchMove(e) : _this4.onTouchMove(e);
      };

      return nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", _extends({
        ref: function ref(container) {
          _this4.container = container;
        }
      }, Object(omit_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.props, ['className', 'scrollTop', 'scrollLeft']), {
        className: cls,
        onScroll: _onScroll,
        onTouchMove: _onTouchMove
      }), this.props.children);
    }
  }]);

  return ScrollView;
}(nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ScrollView);

/***/ }),

/***/ "./node_modules/@tarojs/components/src/components/scroll-view/style/index.scss":
/*!*************************************************************************************!*\
  !*** ./node_modules/@tarojs/components/src/components/scroll-view/style/index.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../css-loader/dist/cjs.js!../../../../../../sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@tarojs/components/src/components/scroll-view/style/index.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./node_modules/@tarojs/components/src/components/slider/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@tarojs/components/src/components/slider/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var weui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! weui */ "./node_modules/weui/dist/style/weui.css");
/* harmony import */ var weui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(weui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nervjs */ "./node_modules/react/umd/react.development.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_parse_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/parse-type */ "./node_modules/@tarojs/components/src/utils/parse-type.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





/**
 * props 类型检测
 *
 * @param {Object} props
 */

function parseType(props) {
  var min = props.min,
      max = props.max,
      step = props.step,
      disabled = props.disabled,
      value = props.value,
      backgroundColor = props.backgroundColor,
      activeColor = props.activeColor,
      blockSize = props.blockSize,
      blockColor = props.blockColor,
      showValue = props.showValue,
      onChange = props.onChange,
      onChanging = props.onChanging; // 抛出错误信息

  var throwErrorMsg = function throwErrorMsg(type) {
    throw new TypeError(type);
  };

  if (min) Object(_utils_parse_type__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(min) ? '' : throwErrorMsg('min');
  if (max) Object(_utils_parse_type__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(max) ? '' : throwErrorMsg('max');
  if (step) Object(_utils_parse_type__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(step) ? '' : throwErrorMsg('step');
  if (value) Object(_utils_parse_type__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(value) ? '' : throwErrorMsg('value');
  if (blockSize) Object(_utils_parse_type__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(blockSize) ? '' : throwErrorMsg('blockSize');
  if (disabled) Object(_utils_parse_type__WEBPACK_IMPORTED_MODULE_2__["isBoolean"])(disabled) ? '' : throwErrorMsg('disabled');
  if (showValue) Object(_utils_parse_type__WEBPACK_IMPORTED_MODULE_2__["isBoolean"])(showValue) ? '' : throwErrorMsg('showValue');

  if (backgroundColor) {
    Object(_utils_parse_type__WEBPACK_IMPORTED_MODULE_2__["isString"])(backgroundColor) ? '' : throwErrorMsg('backgroundColor');
  }

  if (activeColor) Object(_utils_parse_type__WEBPACK_IMPORTED_MODULE_2__["isString"])(activeColor) ? '' : throwErrorMsg('activeColor');
  if (blockColor) Object(_utils_parse_type__WEBPACK_IMPORTED_MODULE_2__["isString"])(blockColor) ? '' : throwErrorMsg('blockColor');
  if (onChange) Object(_utils_parse_type__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(onChange) ? '' : throwErrorMsg('onChange');
  if (onChanging) Object(_utils_parse_type__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(onChanging) ? '' : throwErrorMsg('onChanging');
}

var Slider = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(Slider, _Nerv$Component);

  var _super = _createSuper(Slider);

  function Slider() {
    var _this;

    _classCallCheck(this, Slider);

    _this = _super.apply(this, arguments);
    parseType(_this.props);
    _this.sliderInsRef = '';

    if (_this.props.value) {
      if (_this.props.value > _this.props.max) {
        _this.props.value = _this.props.max;
      }
    }

    _this.state = {
      value: _this.props.value,
      controlled: typeof _this.props.value !== 'undefined',
      totalWidth: 0,
      touching: false,
      ogX: 0,
      touchID: false,
      percent: _this.props.value ? parseInt(_this.props.value / (_this.props.max - _this.props.min) * 100) : 0
    };
    _this.handleTouchStart = _this.handleTouchStart.bind(_assertThisInitialized(_this));
    _this.handleTouchMove = _this.handleTouchMove.bind(_assertThisInitialized(_this));
    _this.handleTouchEnd = _this.handleTouchEnd.bind(_assertThisInitialized(_this));
    _this.updateValue = _this.updateValue.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Slider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.state.value === 0) this.updateValue();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.state.controlled) {
        if (nextProps.value <= this.props.max && nextProps.value >= this.props.min) {
          var percent = parseInt(nextProps.value / (this.props.max - this.props.min) * 100);
          this.setState({
            value: nextProps.value,
            percent: percent
          });
        }
      }
    }
  }, {
    key: "updateValue",
    value: function updateValue() {
      var value = 0;
      var percent = this.state.percent;
      var _this$props = this.props,
          min = _this$props.min,
          max = _this$props.max,
          step = _this$props.step;
      var steps = parseInt((max - min) / step);
      var per = 100 / steps;
      if (per < 1) per = 1;
      var perPercent = parseInt(per);

      if (percent === 100) {
        value = max;
      } else if (percent === 0) {
        value = min;
      } else {
        for (var i = 0; i < steps; i++) {
          if (percent > i * perPercent && percent <= (i + 1) * perPercent) {
            value = percent - i * perPercent > perPercent / 2 ? (i + 1) * step + min : i * step + min;
          }
        }
      }

      if (value !== this.state.value) {
        this.setState({
          value: value
        });
        return true;
      }

      return false;
    }
  }, {
    key: "handleTouchStart",
    value: function handleTouchStart(e) {
      if (this.state.touching || this.props.disabled) return;
      var barDOM = nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(this.sliderInsRef);
      this.setState({
        touching: true,
        touchId: e.targetTouches[0].identifier,
        totalWidth: barDOM.clientWidth,
        ogX: e.targetTouches[0].pageX,
        ogPercent: this.state.percent
      });
    }
  }, {
    key: "handleTouchMove",
    value: function handleTouchMove(e) {
      var _this2 = this;

      var onChanging = this.props.onChanging;
      if (!this.state.touching || this.props.disabled) return;
      if (e.targetTouches[0].identifier !== this.state.touchId) return; // 阻止默认事件

      e.preventDefault();
      var pageX = e.targetTouches[0].pageX;
      var diffX = pageX - this.state.ogX;
      var percent = parseInt(diffX / this.state.totalWidth * 100) + this.state.ogPercent;
      percent = percent < 0 ? 0 : percent > 100 ? 100 : percent;
      this.setState({
        percent: percent
      }, function () {
        var updateValueFlag = _this2.updateValue(); // 数据变化才更新


        if (updateValueFlag) {
          Object.defineProperty(e, 'detail', {
            enumerable: true,
            value: {
              detail: e.detail,
              value: _this2.state.value
            }
          });
          if (onChanging) onChanging(e);
        }
      });
    }
  }, {
    key: "handleTouchEnd",
    value: function handleTouchEnd(e) {
      var _this3 = this;

      if (!this.state.touching || this.props.disabled) {
        return;
      }

      var onChange = this.props.onChange;
      this.setState({
        touching: false,
        ogX: 0,
        touchId: false,
        ogPercent: 0
      }, function () {
        Object.defineProperty(e, 'detail', {
          enumerable: true,
          value: {
            detail: e.detail,
            value: _this3.state.value
          }
        });
        if (onChange) onChange(e);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props2 = this.props,
          className = _this$props2.className,
          showValue = _this$props2.showValue,
          backgroundColor = _this$props2.backgroundColor,
          activeColor = _this$props2.activeColor,
          blockColor = _this$props2.blockColor;
      var blockSize = this.props.blockSize;
      var cls = classnames__WEBPACK_IMPORTED_MODULE_3___default()('weui-slider-box', className);
      var innerStyles = {
        backgroundColor: backgroundColor
      };
      var percent = this.state.percent > 100 ? 100 : this.state.percent;
      var trackStyles = {
        width: "".concat(percent, "%"),
        backgroundColor: activeColor
      };

      if (blockSize < 12) {
        blockSize = 28;
      }

      if (blockSize > 28) {
        blockSize = 28;
      }

      var handlerStyles = {
        left: "".concat(percent, "%"),
        width: "".concat(blockSize, "px"),
        height: "".concat(blockSize, "px"),
        backgroundColor: blockColor,
        marginTop: "-".concat(Math.floor(blockSize / 2), "px"),
        marginLeft: "-".concat(Math.floor(blockSize / 2), "px")
      };
      var _this$props$name = this.props.name,
          name = _this$props$name === void 0 ? '' : _this$props$name;
      return nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: cls
      }, nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "weui-slider"
      }, nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "weui-slider__inner",
        style: innerStyles,
        ref: function ref(c) {
          return _this4.sliderInsRef = c;
        }
      }, nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: trackStyles,
        className: "weui-slider__track"
      }), nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: handlerStyles,
        onTouchStart: this.handleTouchStart,
        onTouchMove: this.handleTouchMove,
        onTouchEnd: this.handleTouchEnd,
        className: "weui-slider__handler"
      }), nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "hidden",
        name: name,
        value: this.state.value
      }))), showValue ? nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "weui-slider-box__value"
      }, this.state.value) : false);
    }
  }]);

  return Slider;
}(nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

Slider.defaultProps = {
  max: 100,
  min: 0,
  step: 1,
  showValue: false,
  disabled: false,
  value: 0
};
/* harmony default export */ __webpack_exports__["default"] = (Slider);

/***/ }),

/***/ "./node_modules/@tarojs/components/src/components/swiper/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@tarojs/components/src/components/swiper/index.js ***!
  \************************************************************************/
/*! exports provided: Swiper, SwiperItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Swiper", function() { return Swiper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwiperItem", function() { return SwiperItem; });
/* harmony import */ var weui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! weui */ "./node_modules/weui/dist/style/weui.css");
/* harmony import */ var weui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(weui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nervjs */ "./node_modules/react/umd/react.development.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/dist/js/swiper.esm.bundle.js");
/* harmony import */ var swiper_dist_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/dist/css/swiper.min.css */ "./node_modules/swiper/dist/css/swiper.min.css");
/* harmony import */ var swiper_dist_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_dist_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style/index.scss */ "./node_modules/@tarojs/components/src/components/swiper/style/index.scss");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var INSTANCE_ID = 0;

var SwiperItem = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(SwiperItem, _Nerv$Component);

  var _super = _createSuper(SwiperItem);

  function SwiperItem() {
    _classCallCheck(this, SwiperItem);

    return _super.apply(this, arguments);
  }

  _createClass(SwiperItem, [{
    key: "render",
    value: function render() {
      var cls = classnames__WEBPACK_IMPORTED_MODULE_2___default()('swiper-slide', this.props.className);
      return nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: cls,
        style: this.props.style,
        "item-id": this.props.itemId
      }, this.props.children);
    }
  }]);

  return SwiperItem;
}(nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var createEvent = function createEvent(type) {
  var e;

  try {
    e = new TouchEvent(type);
  } catch (err) {
    e = document.createEvent('Event');
    e.initEvent(type, true, true);
  }

  return e;
};

var Swiper = /*#__PURE__*/function (_Nerv$Component2) {
  _inherits(Swiper, _Nerv$Component2);

  var _super2 = _createSuper(Swiper);

  function Swiper() {
    var _this;

    _classCallCheck(this, Swiper);

    _this = _super2.apply(this, arguments);
    _this.$el = null;
    _this._id = INSTANCE_ID + 1;
    INSTANCE_ID++;
    _this._$current = 0;
    return _this;
  }

  _createClass(Swiper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          _this$props$autoplay = _this$props.autoplay,
          autoplay = _this$props$autoplay === void 0 ? false : _this$props$autoplay,
          _this$props$interval = _this$props.interval,
          interval = _this$props$interval === void 0 ? 5000 : _this$props$interval,
          _this$props$duration = _this$props.duration,
          duration = _this$props$duration === void 0 ? 500 : _this$props$duration,
          _this$props$current = _this$props.current,
          current = _this$props$current === void 0 ? 0 : _this$props$current,
          _this$props$displayMu = _this$props.displayMultipleItems,
          displayMultipleItems = _this$props$displayMu === void 0 ? 1 : _this$props$displayMu,
          onChange = _this$props.onChange,
          circular = _this$props.circular,
          vertical = _this$props.vertical,
          onAnimationfinish = _this$props.onAnimationfinish,
          spaceBetween = _this$props.spaceBetween;
      var that = this;
      var opt = {
        // 指示器
        pagination: {
          el: ".taro-swiper-".concat(this._id, " .swiper-pagination")
        },
        direction: vertical ? 'vertical' : 'horizontal',
        loop: circular,
        slidesPerView: parseInt(displayMultipleItems, 10),
        initialSlide: parseInt(current, 10),
        speed: parseInt(duration, 10),
        observer: true,
        on: {
          slideChange: function slideChange() {
            var e = createEvent('touchend');

            try {
              Object.defineProperty(e, 'detail', {
                enumerable: true,
                value: {
                  current: this.realIndex
                }
              });
            } catch (err) {}

            that._$current = this.realIndex;
            onChange && onChange(e);
          },
          transitionEnd: function transitionEnd() {
            var e = createEvent('touchend');

            try {
              Object.defineProperty(e, 'detail', {
                enumerable: true,
                value: {
                  current: this.realIndex
                }
              });
            } catch (err) {}

            onAnimationfinish && onAnimationfinish(e);
          }
        }
      }; // 自动播放

      if (autoplay) {
        opt.autoplay = {
          delay: parseInt(interval, 10),
          stopOnLastSlide: true,
          disableOnInteraction: false
        };
      } // 两端距离


      if (spaceBetween) {
        opt.spaceBetween = spaceBetween;
      }

      this.mySwiper = new swiper__WEBPACK_IMPORTED_MODULE_3__["default"](this.$el, opt);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.mySwiper) {
        var nextCurrent = 0;

        if (nextProps.current === 0) {
          nextCurrent = this._$current || 0;
        } else {
          nextCurrent = nextProps.current || this._$current || 0;
        } // 是否衔接滚动模式


        if (nextProps.circular) {
          if (nextProps.current !== 0) this.mySwiper.slideToLoop(parseInt(nextCurrent, 10)); // 更新下标
        } else {
          if (nextProps.current !== 0) this.mySwiper.slideTo(parseInt(nextCurrent, 10)); // 更新下标
        } // 判断是否需要停止或开始自动轮播


        if (this.mySwiper.autoplay.running !== nextProps.autoplay) {
          if (nextProps.autoplay) {
            this.mySwiper.autoplay.start();
          } else {
            this.mySwiper.autoplay.stop();
          }
        }

        this.mySwiper.update(); // 更新子元素
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.$el = null;
      if (this.mySwiper) this.mySwiper.destroy();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          className = _this$props2.className,
          style = _this$props2.style,
          indicatorColor = _this$props2.indicatorColor,
          indicatorActiveColor = _this$props2.indicatorActiveColor;
      var defaultIndicatorColor = indicatorColor || 'rgba(0, 0, 0, .3)';
      var defaultIndicatorActiveColor = indicatorActiveColor || '#000';
      var cls = classnames__WEBPACK_IMPORTED_MODULE_2___default()("taro-swiper-".concat(this._id), 'swiper-container', className);
      var paginationCls = classnames__WEBPACK_IMPORTED_MODULE_2___default()('swiper-pagination', {
        'swiper-pagination-hidden': !this.props.indicatorDots,
        'swiper-pagination-bullets': this.props.indicatorDots
      });
      return nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: cls,
        style: style,
        ref: function ref(el) {
          _this2.$el = el;
        }
      }, nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: "<style type='text/css'>\n            .taro-swiper-".concat(this._id, " .swiper-pagination-bullet { background: ").concat(defaultIndicatorColor, " }\n            .taro-swiper-").concat(this._id, " .swiper-pagination-bullet-active { background: ").concat(defaultIndicatorActiveColor, " }\n            </style>")
        }
      }), nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "swiper-wrapper"
      }, this.props.children), nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: paginationCls
      }));
    }
  }]);

  return Swiper;
}(nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ }),

/***/ "./node_modules/@tarojs/components/src/components/swiper/style/index.scss":
/*!********************************************************************************!*\
  !*** ./node_modules/@tarojs/components/src/components/swiper/style/index.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../css-loader/dist/cjs.js!../../../../../../sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@tarojs/components/src/components/swiper/style/index.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./node_modules/@tarojs/components/src/components/switch/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@tarojs/components/src/components/switch/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var weui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! weui */ "./node_modules/weui/dist/style/weui.css");
/* harmony import */ var weui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(weui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nervjs */ "./node_modules/react/umd/react.development.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var omit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var types = {
  "switch": 'switch',
  checkbox: 'check'
};

function parseType(type) {
  if (!types[type]) throw new Error('unexpected type');
  return types[type];
}

var Switch = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(Switch, _Nerv$Component);

  var _super = _createSuper(Switch);

  function Switch() {
    var _this;

    _classCallCheck(this, Switch);

    _this = _super.apply(this, arguments);
    _this.state = {
      checked: _this.props.checked
    };
    _this.switchChange = _this.switchChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Switch, [{
    key: "switchChange",
    value: function switchChange(e) {
      var onChange = this.props.onChange;
      Object.defineProperty(e, 'detail', {
        enumerable: true,
        value: {
          value: e.target.checked
        }
      });
      onChange && onChange(e);
      this.setState({
        checked: e.target.checked
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.hasOwnProperty('checked')) {
        this.setState({
          checked: nextProps.checked
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$type = _this$props.type,
          type = _this$props$type === void 0 ? 'switch' : _this$props$type,
          className = _this$props.className,
          color = _this$props.color;
      var cls = classnames__WEBPACK_IMPORTED_MODULE_3___default()(_defineProperty({}, "weui-".concat(parseType(type)), true), className);
      var sty;

      if (this.state.checked) {
        sty = {
          borderColor: color || '04BE02',
          backgroundColor: color || '04BE02'
        };
      } else {
        sty = '';
      }

      return nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", _extends({}, Object(omit_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.props, ['className', 'checked', 'onChange']), {
        className: cls,
        checked: this.state.checked,
        type: "checkbox",
        onChange: this.switchChange,
        style: sty
      }));
    }
  }]);

  return Switch;
}(nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Switch);

/***/ }),

/***/ "./node_modules/@tarojs/components/src/components/text/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@tarojs/components/src/components/text/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var weui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! weui */ "./node_modules/weui/dist/style/weui.css");
/* harmony import */ var weui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(weui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nervjs */ "./node_modules/react/umd/react.development.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var omit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style/index.scss */ "./node_modules/@tarojs/components/src/components/text/style/index.scss");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var Text = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(Text, _Nerv$Component);

  var _super = _createSuper(Text);

  function Text() {
    _classCallCheck(this, Text);

    return _super.apply(this, arguments);
  }

  _createClass(Text, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          _this$props$selectabl = _this$props.selectable,
          selectable = _this$props$selectabl === void 0 ? false : _this$props$selectabl;
      var cls = classnames__WEBPACK_IMPORTED_MODULE_3___default()('taro-text', {
        'taro-text__selectable': selectable
      }, className);
      return nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", _extends({}, Object(omit_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.props, ['selectable', 'className']), {
        className: cls
      }), this.props.children);
    }
  }]);

  return Text;
}(nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./node_modules/@tarojs/components/src/components/text/style/index.scss":
/*!******************************************************************************!*\
  !*** ./node_modules/@tarojs/components/src/components/text/style/index.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../css-loader/dist/cjs.js!../../../../../../sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@tarojs/components/src/components/text/style/index.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./node_modules/@tarojs/components/src/components/textarea/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@tarojs/components/src/components/textarea/index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var weui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! weui */ "./node_modules/weui/dist/style/weui.css");
/* harmony import */ var weui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(weui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nervjs */ "./node_modules/react/umd/react.development.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var omit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var Textarea = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(Textarea, _Nerv$Component);

  var _super = _createSuper(Textarea);

  function Textarea() {
    var _this;

    _classCallCheck(this, Textarea);

    _this = _super.apply(this, arguments);
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_this));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Textarea, [{
    key: "onChange",
    value: function onChange(e) {
      var _this$props = this.props,
          _this$props$onChange = _this$props.onChange,
          onChange = _this$props$onChange === void 0 ? '' : _this$props$onChange,
          _this$props$onInput = _this$props.onInput,
          onInput = _this$props$onInput === void 0 ? '' : _this$props$onInput;
      Object.defineProperty(e, 'detail', {
        enumerable: true,
        value: {
          value: e.target.value
        }
      });
      if (onChange) return onChange && onChange(e);
      if (onInput) return onInput && onInput(e);
    }
  }, {
    key: "onFocus",
    value: function onFocus(e) {
      var onFocus = this.props.onFocus;
      Object.defineProperty(e, 'detail', {
        enumerable: true,
        value: {
          value: e.target.value
        }
      });
      onFocus && onFocus(e);
    }
  }, {
    key: "onBlur",
    value: function onBlur(e) {
      var onBlur = this.props.onBlur;
      Object.defineProperty(e, 'detail', {
        enumerable: true,
        value: {
          value: e.target.value
        }
      });
      onBlur && onBlur(e);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          _this$props2$classNam = _this$props2.className,
          className = _this$props2$classNam === void 0 ? '' : _this$props2$classNam,
          _this$props2$placehol = _this$props2.placeholder,
          placeholder = _this$props2$placehol === void 0 ? '' : _this$props2$placehol,
          disabled = _this$props2.disabled,
          _this$props2$maxlengt = _this$props2.maxlength,
          maxlength = _this$props2$maxlengt === void 0 ? 140 : _this$props2$maxlengt,
          _this$props2$autoFocu = _this$props2.autoFocus,
          autoFocus = _this$props2$autoFocu === void 0 ? false : _this$props2$autoFocu;
      return nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", _extends({}, Object(omit_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.props, ['className', 'placeholder', 'disabled', 'maxlength', 'onChange', 'onInput', 'onFocus', 'onBlur', 'autofocus']), {
        className: className,
        placeholder: placeholder,
        disabled: disabled,
        maxlength: maxlength,
        autofocus: autoFocus,
        onChange: this.onChange,
        onFocus: this.onFocus,
        onBlur: this.onBlur
      }));
    }
  }]);

  return Textarea;
}(nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Textarea);

/***/ }),

/***/ "./node_modules/@tarojs/components/src/components/view/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@tarojs/components/src/components/view/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var weui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! weui */ "./node_modules/weui/dist/style/weui.css");
/* harmony import */ var weui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(weui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nervjs */ "./node_modules/react/umd/react.development.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var omit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style/index.scss */ "./node_modules/@tarojs/components/src/components/view/style/index.scss");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var View = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(View, _Nerv$Component);

  var _super = _createSuper(View);

  function View() {
    var _this;

    _classCallCheck(this, View);

    _this = _super.apply(this, arguments);

    _defineProperty(_assertThisInitialized(_this), "timeoutEvent", 0);

    _defineProperty(_assertThisInitialized(_this), "startTime", 0);

    _this.state = {
      hover: false,
      touch: false
    };
    return _this;
  }

  _createClass(View, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          hoverClass = _this$props.hoverClass,
          onTouchStart = _this$props.onTouchStart,
          onTouchEnd = _this$props.onTouchEnd,
          onTouchMove = _this$props.onTouchMove,
          className = _this$props.className,
          _this$props$hoverStar = _this$props.hoverStartTime,
          hoverStartTime = _this$props$hoverStar === void 0 ? 50 : _this$props$hoverStar,
          _this$props$hoverStay = _this$props.hoverStayTime,
          hoverStayTime = _this$props$hoverStay === void 0 ? 400 : _this$props$hoverStay,
          other = _objectWithoutProperties(_this$props, ["hoverClass", "onTouchStart", "onTouchEnd", "onTouchMove", "className", "hoverStartTime", "hoverStayTime"]);

      var cls = classnames__WEBPACK_IMPORTED_MODULE_3___default()('', _defineProperty({}, "".concat(hoverClass), this.state.hover), className);

      var _onTouchStart = function _onTouchStart(e) {
        if (hoverClass) {
          _this2.setState(function () {
            return {
              touch: true
            };
          });

          setTimeout(function () {
            if (_this2.state.touch) {
              _this2.setState(function () {
                return {
                  hover: true
                };
              });
            }
          }, hoverStartTime);
        }

        onTouchStart && onTouchStart(e);

        if (_this2.props.onLongPress) {
          _this2.timeoutEvent = setTimeout(function () {
            _this2.props.onLongPress();
          }, 350);
          _this2.startTime = new Date().getTime();
        }
      };

      var _onTouchMove = function _onTouchMove(e) {
        clearTimeout(_this2.timeoutEvent);
        onTouchMove && onTouchMove(e);
      };

      var _onTouchEnd = function _onTouchEnd(e) {
        var spanTime = new Date().getTime() - _this2.startTime;

        if (spanTime < 350) {
          clearTimeout(_this2.timeoutEvent);
        }

        if (hoverClass) {
          _this2.setState(function () {
            return {
              touch: false
            };
          });

          setTimeout(function () {
            if (!_this2.state.touch) {
              _this2.setState(function () {
                return {
                  hover: false
                };
              });
            }
          }, hoverStayTime);
        }

        onTouchEnd && onTouchEnd(e);
      };

      return nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", _extends({}, Object(omit_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.props, ['hoverClass', 'onTouchStart', 'onTouchEnd', 'onTouchMove', 'className', 'hoverStartTime', 'hoverStayTime']), other, {
        className: cls,
        onTouchStart: _onTouchStart,
        onTouchEnd: _onTouchEnd,
        onTouchMove: _onTouchMove
      }), this.props.children);
    }
  }]);

  return View;
}(nervjs__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (View);

/***/ }),

/***/ "./node_modules/@tarojs/components/src/components/view/style/index.scss":
/*!******************************************************************************!*\
  !*** ./node_modules/@tarojs/components/src/components/view/style/index.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../css-loader/dist/cjs.js!../../../../../../sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@tarojs/components/src/components/view/style/index.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./node_modules/@tarojs/components/src/components/web-view/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@tarojs/components/src/components/web-view/index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nervjs */ "./node_modules/react/umd/react.development.js");
/* harmony import */ var nervjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nervjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var omit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/index.scss */ "./node_modules/@tarojs/components/src/components/web-view/style/index.scss");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var WebView = /*#__PURE__*/function (_Nerv$Component) {
  _inherits(WebView, _Nerv$Component);

  var _super = _createSuper(WebView);

  function WebView() {
    var _this;

    _classCallCheck(this, WebView);

    _this = _super.apply(this, arguments);
    _this.onLoad = _this.onLoad.bind(_assertThisInitialized(_this));
    _this.onError = _this.onError.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(WebView, [{
    key: "onLoad",
    value: function onLoad(e) {
      var onLoad = this.props.onLoad;
      onLoad && onLoad(e);
    }
  }, {
    key: "onError",
    value: function onError(e) {
      var onError = this.props.onError;
      onError && onError(e);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          src = _this$props.src,
          other = _objectWithoutProperties(_this$props, ["src"]);

      return nervjs__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", _extends({
        className: "taro-webview",
        onLoad: this.onLoad,
        onError: this.onError
      }, Object(omit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.props, ['src', 'className']), {
        src: src
      }, other));
    }
  }]);

  return WebView;
}(nervjs__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (WebView);

/***/ }),

/***/ "./node_modules/@tarojs/components/src/components/web-view/style/index.scss":
/*!**********************************************************************************!*\
  !*** ./node_modules/@tarojs/components/src/components/web-view/style/index.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../css-loader/dist/cjs.js!../../../../../../sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@tarojs/components/src/components/web-view/style/index.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./node_modules/@tarojs/components/src/utils/parse-type.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@tarojs/components/src/utils/parse-type.js ***!
  \*****************************************************************/
/*! exports provided: isBoolean, isNumber, isString, isFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return isBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/** lodash BOF */
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var toString = objectProto.toString;
var symToStringTag = typeof Symbol !== 'undefined' ? Symbol.toStringTag : undefined;
/** `Object#toString` result references. */

var dataViewTag = '[object DataView]';
var mapTag = '[object Map]';
var objectTag = '[object Object]';
var promiseTag = '[object Promise]';
var setTag = '[object Set]';
var weakMapTag = '[object WeakMap]';
/** Used to detect maps, sets, and weakmaps. */

var dataViewCtorString = "".concat(DataView);
var mapCtorString = "".concat(Map);
var promiseCtorString = "".concat(Promise);
var setCtorString = "".concat(Set);
var weakMapCtorString = "".concat(WeakMap);
var getTag = baseGetTag;

if (DataView && getTag(new DataView(new ArrayBuffer(1))) !== dataViewTag || getTag(new Map()) !== mapTag || getTag(Promise.resolve()) !== promiseTag || getTag(new Set()) !== setTag || getTag(new WeakMap()) !== weakMapTag) {
  getTag = function getTag(value) {
    var result = baseGetTag(value);
    var Ctor = result === objectTag ? value.constructor : undefined;
    var ctorString = Ctor ? "".concat(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;

        case mapCtorString:
          return mapTag;

        case promiseCtorString:
          return promiseTag;

        case setCtorString:
          return setTag;

        case weakMapCtorString:
          return weakMapTag;
      }
    }

    return result;
  };
}

function isObjectLike(value) {
  return _typeof(value) === 'object' && value !== null;
}

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }

  if (!(symToStringTag && symToStringTag in Object(value))) {
    return toString.call(value);
  }

  var isOwn = hasOwnProperty.call(value, symToStringTag);
  var tag = value[symToStringTag];
  var unmasked = false;

  try {
    value[symToStringTag] = undefined;
    unmasked = true;
  } catch (e) {}

  var result = toString.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}

function isBoolean(value) {
  return value === true || value === false || isObjectLike(value) && baseGetTag(value) === '[object Boolean]';
}

function isNumber(value) {
  return typeof value === 'number' || isObjectLike(value) && baseGetTag(value) === '[object Number]';
}

function isString(value) {
  var type = _typeof(value);

  return type === 'string' || type === 'object' && value != null && !Array.isArray(value) && getTag(value) === '[object String]';
}

function isObject(value) {
  var type = _typeof(value);

  return value != null && (type === 'object' || type === 'function');
}

function isFunction(value) {
  if (!isObject(value)) {
    return false;
  } // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.


  var tag = baseGetTag(value);
  return tag === '[object Function]' || tag === '[object AsyncFunction]' || tag === '[object GeneratorFunction]' || tag === '[object Proxy]';
}
/** lodash  EOF */




/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/assign.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/assign.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "default": __webpack_require__(/*! core-js/library/fn/object/assign */ "./node_modules/core-js/library/fn/object/assign.js"),
  __esModule: true
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/extends.js":
/*!*******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/extends.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

exports["default"] = _assign2["default"] || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

/* global define */
(function () {
  'use strict';

  var hasOwn = {}.hasOwnProperty;

  function classNames() {
    var classes = [];

    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if (!arg) continue;

      var argType = _typeof(arg);

      if (argType === 'string' || argType === 'number') {
        classes.push(arg);
      } else if (Array.isArray(arg) && arg.length) {
        var inner = classNames.apply(null, arg);

        if (inner) {
          classes.push(inner);
        }
      } else if (argType === 'object') {
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
      }
    }

    return classes.join(' ');
  }

  if ( true && module.exports) {
    classNames["default"] = classNames;
    module.exports = classNames;
  } else if ( true && _typeof(__webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) === 'object' && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
    // register as 'classnames', consistent with npm package name
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return classNames;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    window.classNames = classNames;
  }
})();

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/assign.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/assign.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ "./node_modules/core-js/library/modules/es6.object.assign.js");

module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.assign;

/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");

module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");

var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/library/modules/_to-absolute-index.js");

module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
    }
    return !IS_INCLUDES && -1;
  };
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = {
  version: '2.6.11'
};
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");

module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;

  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };

    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };

    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }

  return function ()
  /* ...args */
  {
    return fn.apply(that, arguments);
  };
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document; // typeof document.createElement is 'object' in old IE


var is = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");

var PROTOTYPE = 'prototype';

var $export = function $export(type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;

  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue; // export native or passed

    out = own ? target[key] : source[key]; // prevent global pollution for namespaces

    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global) // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? function (C) {
      var F = function F(a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0:
              return new C();

            case 1:
              return new C(a);

            case 2:
              return new C(a, b);
          }

          return new C(a, b, c);
        }

        return C.apply(this, arguments);
      };

      F[PROTOTYPE] = C[PROTOTYPE];
      return F; // make static versions for prototype methods
    }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out; // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%

    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out; // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%

      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
}; // type bitmap


$export.F = 1; // forced

$export.G = 2; // global

$export.S = 4; // static

$export.P = 8; // proto

$export.B = 16; // bind

$export.W = 32; // wrap

$export.U = 64; // safe

$export.R = 128; // real proto method for `library`

module.exports = $export;

/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
: Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");

var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js"); // eslint-disable-next-line no-prototype-builtins


module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function (it) {
  return _typeof(it) === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-assign.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-assign.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 19.1.2.1 Object.assign(target, source, ...)

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");

var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");

var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");

var $assign = Object.assign; // should work with symbols and should have deterministic property order (V8 bug)

module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {}; // eslint-disable-next-line no-undef

  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) {
    B[k] = k;
  });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;

  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;

    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  }

  return T;
} : $assign;

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");

var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");

var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");

var dP = Object.defineProperty;
exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");

var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/library/modules/_array-includes.js")(false);

var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) {
    if (key != IE_PROTO) has(O, key) && result.push(key);
  } // Don't enum bug & hidden keys


  while (names.length > i) {
    if (has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
  }

  return result;
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");

var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('keys');

var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");

module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");

var max = Math.max;
var min = Math.min;

module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;

module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");

var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");

module.exports = function (it) {
  return IObject(defined(it));
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");

var min = Math.min;

module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");

module.exports = function (it) {
  return Object(defined(it));
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js"); // instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string


module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();

module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.assign.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.assign.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', {
  assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/library/modules/_object-assign.js")
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./lib/taro/node_modules/swiper/dist/css/swiper.min.css":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./lib/taro/node_modules/swiper/dist/css/swiper.min.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/**\n * Swiper 4.4.2\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * http://www.idangero.us/swiper/\n *\n * Copyright 2014-2018 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: November 1, 2018\n */\n.swiper-container {\n    margin    : 0 auto;\n    position  : relative;\n    overflow  : hidden;\n    list-style: none;\n    padding   : 0;\n    z-index   : 1\n}\n\n.swiper-container-no-flexbox .swiper-slide {\n    float: left\n}\n\n.swiper-container-vertical>.swiper-wrapper {\n    -webkit-box-orient    : vertical;\n    -webkit-box-direction : normal;\n    -webkit-flex-direction: column;\n    -ms-flex-direction    : column;\n    flex-direction        : column\n}\n\n.swiper-wrapper {\n    position                   : relative;\n    width                      : 100%;\n    height                     : 100%;\n    z-index                    : 1;\n    display                    : -webkit-box;\n    display                    : -webkit-flex;\n    display                    : -ms-flexbox;\n    display                    : flex;\n    -webkit-transition-property: -webkit-transform;\n    transition-property        : -webkit-transform;\n    -o-transition-property     : transform;\n    transition-property        : transform;\n    transition-property        : transform, -webkit-transform;\n    -webkit-box-sizing         : content-box;\n    box-sizing                 : content-box\n}\n\n.swiper-container-android .swiper-slide,\n.swiper-wrapper {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform        : translate3d(0, 0, 0)\n}\n\n.swiper-container-multirow>.swiper-wrapper {\n    -webkit-flex-wrap: wrap;\n    -ms-flex-wrap    : wrap;\n    flex-wrap        : wrap\n}\n\n.swiper-container-free-mode>.swiper-wrapper {\n    -webkit-transition-timing-function: ease-out;\n    -o-transition-timing-function     : ease-out;\n    transition-timing-function        : ease-out;\n    margin                            : 0 auto\n}\n\n.swiper-slide {\n    -webkit-flex-shrink        : 0;\n    -ms-flex-negative          : 0;\n    flex-shrink                : 0;\n    width                      : 100%;\n    height                     : 100%;\n    position                   : relative;\n    -webkit-transition-property: -webkit-transform;\n    transition-property        : -webkit-transform;\n    -o-transition-property     : transform;\n    transition-property        : transform;\n    transition-property        : transform, -webkit-transform\n}\n\n.swiper-slide-invisible-blank {\n    visibility: hidden\n}\n\n.swiper-container-autoheight,\n.swiper-container-autoheight .swiper-slide {\n    height: auto\n}\n\n.swiper-container-autoheight .swiper-wrapper {\n    -webkit-box-align          : start;\n    -webkit-align-items        : flex-start;\n    -ms-flex-align             : start;\n    align-items                : flex-start;\n    -webkit-transition-property: height, -webkit-transform;\n    transition-property        : height, -webkit-transform;\n    -o-transition-property     : transform, height;\n    transition-property        : transform, height;\n    transition-property        : transform, height, -webkit-transform\n}\n\n.swiper-container-3d {\n    -webkit-perspective: 1200px;\n    perspective        : 1200px\n}\n\n.swiper-container-3d .swiper-cube-shadow,\n.swiper-container-3d .swiper-slide,\n.swiper-container-3d .swiper-slide-shadow-bottom,\n.swiper-container-3d .swiper-slide-shadow-left,\n.swiper-container-3d .swiper-slide-shadow-right,\n.swiper-container-3d .swiper-slide-shadow-top,\n.swiper-container-3d .swiper-wrapper {\n    -webkit-transform-style: preserve-3d;\n    transform-style        : preserve-3d\n}\n\n.swiper-container-3d .swiper-slide-shadow-bottom,\n.swiper-container-3d .swiper-slide-shadow-left,\n.swiper-container-3d .swiper-slide-shadow-right,\n.swiper-container-3d .swiper-slide-shadow-top {\n    position      : absolute;\n    left          : 0;\n    top           : 0;\n    width         : 100%;\n    height        : 100%;\n    pointer-events: none;\n    z-index       : 10\n}\n\n.swiper-container-3d .swiper-slide-shadow-left {\n    background-image: -webkit-gradient(linear, right top, left top, from(rgba(0, 0, 0, .5)), to(rgba(0, 0, 0, 0)));\n    background-image: -webkit-linear-gradient(right, rgba(0, 0, 0, .5), rgba(0, 0, 0, 0));\n    background-image: -o-linear-gradient(right, rgba(0, 0, 0, .5), rgba(0, 0, 0, 0));\n    background-image: linear-gradient(to left, rgba(0, 0, 0, .5), rgba(0, 0, 0, 0))\n}\n\n.swiper-container-3d .swiper-slide-shadow-right {\n    background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .5)), to(rgba(0, 0, 0, 0)));\n    background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, .5), rgba(0, 0, 0, 0));\n    background-image: -o-linear-gradient(left, rgba(0, 0, 0, .5), rgba(0, 0, 0, 0));\n    background-image: linear-gradient(to right, rgba(0, 0, 0, .5), rgba(0, 0, 0, 0))\n}\n\n.swiper-container-3d .swiper-slide-shadow-top {\n    background-image: -webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, .5)), to(rgba(0, 0, 0, 0)));\n    background-image: -webkit-linear-gradient(bottom, rgba(0, 0, 0, .5), rgba(0, 0, 0, 0));\n    background-image: -o-linear-gradient(bottom, rgba(0, 0, 0, .5), rgba(0, 0, 0, 0));\n    background-image: linear-gradient(to top, rgba(0, 0, 0, .5), rgba(0, 0, 0, 0))\n}\n\n.swiper-container-3d .swiper-slide-shadow-bottom {\n    background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, .5)), to(rgba(0, 0, 0, 0)));\n    background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, .5), rgba(0, 0, 0, 0));\n    background-image: -o-linear-gradient(top, rgba(0, 0, 0, .5), rgba(0, 0, 0, 0));\n    background-image: linear-gradient(to bottom, rgba(0, 0, 0, .5), rgba(0, 0, 0, 0))\n}\n\n.swiper-container-wp8-horizontal,\n.swiper-container-wp8-horizontal>.swiper-wrapper {\n    -ms-touch-action: pan-y;\n    touch-action    : pan-y\n}\n\n.swiper-container-wp8-vertical,\n.swiper-container-wp8-vertical>.swiper-wrapper {\n    -ms-touch-action: pan-x;\n    touch-action    : pan-x\n}\n\n.swiper-button-next,\n.swiper-button-prev {\n    position           : absolute;\n    top                : 50%;\n    width              : 27px;\n    height             : 44px;\n    margin-top         : -22px;\n    z-index            : 10;\n    cursor             : pointer;\n    background-size    : 27px 44px;\n    background-position: center;\n    background-repeat  : no-repeat\n}\n\n.swiper-button-next.swiper-button-disabled,\n.swiper-button-prev.swiper-button-disabled {\n    opacity       : .35;\n    cursor        : auto;\n    pointer-events: none\n}\n\n.swiper-button-prev,\n.swiper-container-rtl .swiper-button-next {\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");\n    left            : 10px;\n    right           : auto\n}\n\n.swiper-button-next,\n.swiper-container-rtl .swiper-button-prev {\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");\n    right           : 10px;\n    left            : auto\n}\n\n.swiper-button-prev.swiper-button-white,\n.swiper-container-rtl .swiper-button-next.swiper-button-white {\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")\n}\n\n.swiper-button-next.swiper-button-white,\n.swiper-container-rtl .swiper-button-prev.swiper-button-white {\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")\n}\n\n.swiper-button-prev.swiper-button-black,\n.swiper-container-rtl .swiper-button-next.swiper-button-black {\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")\n}\n\n.swiper-button-next.swiper-button-black,\n.swiper-container-rtl .swiper-button-prev.swiper-button-black {\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")\n}\n\n.swiper-button-lock {\n    display: none\n}\n\n.swiper-pagination {\n    position          : absolute;\n    text-align        : center;\n    -webkit-transition: .3s opacity;\n    -o-transition     : .3s opacity;\n    transition        : .3s opacity;\n    -webkit-transform : translate3d(0, 0, 0);\n    transform         : translate3d(0, 0, 0);\n    z-index           : 10\n}\n\n.swiper-pagination.swiper-pagination-hidden {\n    opacity: 0\n}\n\n.swiper-container-horizontal>.swiper-pagination-bullets,\n.swiper-pagination-custom,\n.swiper-pagination-fraction {\n    bottom: 10px;\n    left  : 0;\n    width : 100%\n}\n\n.swiper-pagination-bullets-dynamic {\n    overflow : hidden;\n    font-size: 0\n}\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n    -webkit-transform: scale(.33);\n    -ms-transform    : scale(.33);\n    transform        : scale(.33);\n    position         : relative\n}\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {\n    -webkit-transform: scale(1);\n    -ms-transform    : scale(1);\n    transform        : scale(1)\n}\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {\n    -webkit-transform: scale(1);\n    -ms-transform    : scale(1);\n    transform        : scale(1)\n}\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {\n    -webkit-transform: scale(.66);\n    -ms-transform    : scale(.66);\n    transform        : scale(.66)\n}\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {\n    -webkit-transform: scale(.33);\n    -ms-transform    : scale(.33);\n    transform        : scale(.33)\n}\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {\n    -webkit-transform: scale(.66);\n    -ms-transform    : scale(.66);\n    transform        : scale(.66)\n}\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {\n    -webkit-transform: scale(.33);\n    -ms-transform    : scale(.33);\n    transform        : scale(.33)\n}\n\n.swiper-pagination-bullet {\n    width        : 8px;\n    height       : 8px;\n    display      : inline-block;\n    border-radius: 100%;\n    background   : #000;\n    opacity      : .2\n}\n\nbutton.swiper-pagination-bullet {\n    border            : none;\n    margin            : 0;\n    padding           : 0;\n    -webkit-box-shadow: none;\n    box-shadow        : none;\n    -webkit-appearance: none;\n    -moz-appearance   : none;\n    appearance        : none\n}\n\n.swiper-pagination-clickable .swiper-pagination-bullet {\n    cursor: pointer\n}\n\n.swiper-pagination-bullet-active {\n    opacity   : 1;\n    background: #007aff\n}\n\n.swiper-container-vertical>.swiper-pagination-bullets {\n    right            : 10px;\n    top              : 50%;\n    -webkit-transform: translate3d(0, -50%, 0);\n    transform        : translate3d(0, -50%, 0)\n}\n\n.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet {\n    margin : 6px 0;\n    display: block\n}\n\n.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n    top              : 50%;\n    -webkit-transform: translateY(-50%);\n    -ms-transform    : translateY(-50%);\n    transform        : translateY(-50%);\n    width            : 8px\n}\n\n.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n    display           : inline-block;\n    -webkit-transition: .2s top, .2s -webkit-transform;\n    transition        : .2s top, .2s -webkit-transform;\n    -o-transition     : .2s transform, .2s top;\n    transition        : .2s transform, .2s top;\n    transition        : .2s transform, .2s top, .2s -webkit-transform\n}\n\n.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {\n    margin: 0 4px\n}\n\n.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n    left             : 50%;\n    -webkit-transform: translateX(-50%);\n    -ms-transform    : translateX(-50%);\n    transform        : translateX(-50%);\n    white-space      : nowrap\n}\n\n.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n    -webkit-transition: .2s left, .2s -webkit-transform;\n    transition        : .2s left, .2s -webkit-transform;\n    -o-transition     : .2s transform, .2s left;\n    transition        : .2s transform, .2s left;\n    transition        : .2s transform, .2s left, .2s -webkit-transform\n}\n\n.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n    -webkit-transition: .2s right, .2s -webkit-transform;\n    transition        : .2s right, .2s -webkit-transform;\n    -o-transition     : .2s transform, .2s right;\n    transition        : .2s transform, .2s right;\n    transition        : .2s transform, .2s right, .2s -webkit-transform\n}\n\n.swiper-pagination-progressbar {\n    background: rgba(0, 0, 0, .25);\n    position  : absolute\n}\n\n.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n    background              : #007aff;\n    position                : absolute;\n    left                    : 0;\n    top                     : 0;\n    width                   : 100%;\n    height                  : 100%;\n    -webkit-transform       : scale(0);\n    -ms-transform           : scale(0);\n    transform               : scale(0);\n    -webkit-transform-origin: left top;\n    -ms-transform-origin    : left top;\n    transform-origin        : left top\n}\n\n.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n    -webkit-transform-origin: right top;\n    -ms-transform-origin    : right top;\n    transform-origin        : right top\n}\n\n.swiper-container-horizontal>.swiper-pagination-progressbar,\n.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {\n    width : 100%;\n    height: 4px;\n    left  : 0;\n    top   : 0\n}\n\n.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,\n.swiper-container-vertical>.swiper-pagination-progressbar {\n    width : 4px;\n    height: 100%;\n    left  : 0;\n    top   : 0\n}\n\n.swiper-pagination-white .swiper-pagination-bullet-active {\n    background: #fff\n}\n\n.swiper-pagination-progressbar.swiper-pagination-white {\n    background: rgba(255, 255, 255, .25)\n}\n\n.swiper-pagination-progressbar.swiper-pagination-white .swiper-pagination-progressbar-fill {\n    background: #fff\n}\n\n.swiper-pagination-black .swiper-pagination-bullet-active {\n    background: #000\n}\n\n.swiper-pagination-progressbar.swiper-pagination-black {\n    background: rgba(0, 0, 0, .25)\n}\n\n.swiper-pagination-progressbar.swiper-pagination-black .swiper-pagination-progressbar-fill {\n    background: #000\n}\n\n.swiper-pagination-lock {\n    display: none\n}\n\n.swiper-scrollbar {\n    border-radius   : 10px;\n    position        : relative;\n    -ms-touch-action: none;\n    background      : rgba(0, 0, 0, .1)\n}\n\n.swiper-container-horizontal>.swiper-scrollbar {\n    position: absolute;\n    left    : 1%;\n    bottom  : 3px;\n    z-index : 50;\n    height  : 5px;\n    width   : 98%\n}\n\n.swiper-container-vertical>.swiper-scrollbar {\n    position: absolute;\n    right   : 3px;\n    top     : 1%;\n    z-index : 50;\n    width   : 5px;\n    height  : 98%\n}\n\n.swiper-scrollbar-drag {\n    height       : 100%;\n    width        : 100%;\n    position     : relative;\n    background   : rgba(0, 0, 0, .5);\n    border-radius: 10px;\n    left         : 0;\n    top          : 0\n}\n\n.swiper-scrollbar-cursor-drag {\n    cursor: move\n}\n\n.swiper-scrollbar-lock {\n    display: none\n}\n\n.swiper-zoom-container {\n    width                  : 100%;\n    height                 : 100%;\n    display                : -webkit-box;\n    display                : -webkit-flex;\n    display                : -ms-flexbox;\n    display                : flex;\n    -webkit-box-pack       : center;\n    -webkit-justify-content: center;\n    -ms-flex-pack          : center;\n    justify-content        : center;\n    -webkit-box-align      : center;\n    -webkit-align-items    : center;\n    -ms-flex-align         : center;\n    align-items            : center;\n    text-align             : center\n}\n\n.swiper-zoom-container>canvas,\n.swiper-zoom-container>img,\n.swiper-zoom-container>svg {\n    max-width    : 100%;\n    max-height   : 100%;\n    -o-object-fit: contain;\n    object-fit   : contain\n}\n\n.swiper-slide-zoomed {\n    cursor: move\n}\n\n.swiper-lazy-preloader {\n    width                   : 42px;\n    height                  : 42px;\n    position                : absolute;\n    left                    : 50%;\n    top                     : 50%;\n    margin-left             : -21px;\n    margin-top              : -21px;\n    z-index                 : 10;\n    -webkit-transform-origin: 50%;\n    -ms-transform-origin    : 50%;\n    transform-origin        : 50%;\n    -webkit-animation       : swiper-preloader-spin 1s steps(12, end) infinite;\n    animation               : swiper-preloader-spin 1s steps(12, end) infinite\n}\n\n.swiper-lazy-preloader:after {\n    display            : block;\n    content            : '';\n    width              : 100%;\n    height             : 100%;\n    background-image   : url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n    background-position: 50%;\n    background-size    : 100%;\n    background-repeat  : no-repeat\n}\n\n.swiper-lazy-preloader-white:after {\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\")\n}\n\n@-webkit-keyframes swiper-preloader-spin {\n    100% {\n        -webkit-transform: rotate(360deg);\n        transform        : rotate(360deg)\n    }\n}\n\n@keyframes swiper-preloader-spin {\n    100% {\n        -webkit-transform: rotate(360deg);\n        transform        : rotate(360deg)\n    }\n}\n\n.swiper-container .swiper-notification {\n    position      : absolute;\n    left          : 0;\n    top           : 0;\n    pointer-events: none;\n    opacity       : 0;\n    z-index       : -1000\n}\n\n.swiper-container-fade.swiper-container-free-mode .swiper-slide {\n    -webkit-transition-timing-function: ease-out;\n    -o-transition-timing-function     : ease-out;\n    transition-timing-function        : ease-out\n}\n\n.swiper-container-fade .swiper-slide {\n    pointer-events             : none;\n    -webkit-transition-property: opacity;\n    -o-transition-property     : opacity;\n    transition-property        : opacity\n}\n\n.swiper-container-fade .swiper-slide .swiper-slide {\n    pointer-events: none\n}\n\n.swiper-container-fade .swiper-slide-active,\n.swiper-container-fade .swiper-slide-active .swiper-slide-active {\n    pointer-events: auto\n}\n\n.swiper-container-cube {\n    overflow: visible\n}\n\n.swiper-container-cube .swiper-slide {\n    pointer-events             : none;\n    -webkit-backface-visibility: hidden;\n    backface-visibility        : hidden;\n    z-index                    : 1;\n    visibility                 : hidden;\n    -webkit-transform-origin   : 0 0;\n    -ms-transform-origin       : 0 0;\n    transform-origin           : 0 0;\n    width                      : 100%;\n    height                     : 100%\n}\n\n.swiper-container-cube .swiper-slide .swiper-slide {\n    pointer-events: none\n}\n\n.swiper-container-cube.swiper-container-rtl .swiper-slide {\n    -webkit-transform-origin: 100% 0;\n    -ms-transform-origin    : 100% 0;\n    transform-origin        : 100% 0\n}\n\n.swiper-container-cube .swiper-slide-active,\n.swiper-container-cube .swiper-slide-active .swiper-slide-active {\n    pointer-events: auto\n}\n\n.swiper-container-cube .swiper-slide-active,\n.swiper-container-cube .swiper-slide-next,\n.swiper-container-cube .swiper-slide-next+.swiper-slide,\n.swiper-container-cube .swiper-slide-prev {\n    pointer-events: auto;\n    visibility    : visible\n}\n\n.swiper-container-cube .swiper-slide-shadow-bottom,\n.swiper-container-cube .swiper-slide-shadow-left,\n.swiper-container-cube .swiper-slide-shadow-right,\n.swiper-container-cube .swiper-slide-shadow-top {\n    z-index                    : 0;\n    -webkit-backface-visibility: hidden;\n    backface-visibility        : hidden\n}\n\n.swiper-container-cube .swiper-cube-shadow {\n    position      : absolute;\n    left          : 0;\n    bottom        : 0;\n    width         : 100%;\n    height        : 100%;\n    background    : #000;\n    opacity       : .6;\n    -webkit-filter: blur(50px);\n    filter        : blur(50px);\n    z-index       : 0\n}\n\n.swiper-container-flip {\n    overflow: visible\n}\n\n.swiper-container-flip .swiper-slide {\n    pointer-events             : none;\n    -webkit-backface-visibility: hidden;\n    backface-visibility        : hidden;\n    z-index                    : 1\n}\n\n.swiper-container-flip .swiper-slide .swiper-slide {\n    pointer-events: none\n}\n\n.swiper-container-flip .swiper-slide-active,\n.swiper-container-flip .swiper-slide-active .swiper-slide-active {\n    pointer-events: auto\n}\n\n.swiper-container-flip .swiper-slide-shadow-bottom,\n.swiper-container-flip .swiper-slide-shadow-left,\n.swiper-container-flip .swiper-slide-shadow-right,\n.swiper-container-flip .swiper-slide-shadow-top {\n    z-index                    : 0;\n    -webkit-backface-visibility: hidden;\n    backface-visibility        : hidden\n}\n\n.swiper-container-coverflow .swiper-wrapper {\n    -ms-perspective: 1200px\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/@tarojs/components/src/components/pull-down-refresh/style/index.css":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/@tarojs/components/src/components/pull-down-refresh/style/index.css ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".rmc-pull-to-refresh-content {\r\n  transform-origin: left top 0px;\r\n}\r\n.rmc-pull-to-refresh-content-wrapper {\r\n  overflow: hidden;\r\n}\r\n\r\n.rmc-pull-to-refresh-transition {\r\n  transition: transform 0.3s;\r\n}\r\n\r\n\r\n@keyframes rmc-pull-to-refresh-indicator {\r\n  50% {\r\n    opacity: 0.2;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.rmc-pull-to-refresh-indicator {\r\n  text-align: center;\r\n  height: 30px;\r\n  line-height: 10px;\r\n}\r\n\r\n.rmc-pull-to-refresh-indicator > div {\r\n  background-color: grey;\r\n  width: 6px;\r\n  height: 6px;\r\n  border-radius: 100%;\r\n  margin: 3px;\r\n  animation-fill-mode: both;\r\n  display: inline-block;\r\n  animation: rmc-pull-to-refresh-indicator 0.5s 0s infinite linear;\r\n}\r\n.rmc-pull-to-refresh-indicator > div:nth-child(0) {\r\n  animation-delay: -0.1s !important;\r\n}\r\n.rmc-pull-to-refresh-indicator > div:nth-child(1) {\r\n  animation-delay: -0.2s !important;\r\n}\r\n.rmc-pull-to-refresh-indicator > div:nth-child(2) {\r\n  animation-delay: -0.3s !important;\r\n}\r\n.rmc-pull-to-refresh-down .rmc-pull-to-refresh-indicator {\r\n  margin-top: -25px;\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@tarojs/components/src/components/audio/style/index.scss":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@tarojs/components/src/components/audio/style/index.scss ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "audio {\n  max-width: 100%; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@tarojs/components/src/components/button/style/index.scss":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@tarojs/components/src/components/button/style/index.scss ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "button {\n  position: relative;\n  display: block;\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 14px;\n  padding-right: 14px;\n  box-sizing: border-box;\n  font-size: 18px;\n  text-align: center;\n  text-decoration: none;\n  line-height: 2.55555556;\n  border-radius: 5px;\n  -webkit-tap-highlight-color: transparent;\n  overflow: hidden;\n  color: #000000;\n  background-color: #F8F8F8; }\n\nbutton[plain] {\n  color: #353535;\n  border: 1px solid #353535;\n  background-color: transparent; }\n\nbutton[plain][disabled] {\n  color: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  background-color: #F7F7F7; }\n\nbutton[type=primary] {\n  color: #FFFFFF;\n  background-color: #1AAD19; }\n\nbutton[type=primary][plain] {\n  color: #1aad19;\n  border: 1px solid #1aad19;\n  background-color: transparent; }\n\nbutton[type=primary][plain][disabled] {\n  color: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  background-color: #F7F7F7; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@tarojs/components/src/components/checkbox/style/index.scss":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@tarojs/components/src/components/checkbox/style/index.scss ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".taro-checkbox {\n  position: relative;\n  display: inline-block; }\n  .taro-checkbox_checked {\n    display: inline-block;\n    min-height: 0;\n    -webkit-appearance: none;\n    appearance: none;\n    outline: 0;\n    font-size: 23px;\n    border: 1px solid #d1d1d1;\n    background-color: #ffffff;\n    border-radius: 3px;\n    color: #1AAD19;\n    width: 23px;\n    height: 23px;\n    position: relative;\n    vertical-align: 0;\n    top: 5px; }\n    .taro-checkbox_checked:checked::before {\n      font-family: \"weui\";\n      font-style: normal;\n      font-weight: normal;\n      font-variant: normal;\n      text-transform: none;\n      text-align: center;\n      speak: none;\n      display: inline-block;\n      vertical-align: middle;\n      text-decoration: inherit;\n      content: \"\\EA08\";\n      color: inherit;\n      font-size: inherit;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -48%) scale(0.73); }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@tarojs/components/src/components/image/style/index.scss":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@tarojs/components/src/components/image/style/index.scss ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "img[src=\"\"] {\n  opacity: 0; }\n\n.taro-img {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  font-size: 0;\n  width: 320px;\n  height: 240px; }\n  .taro-img.taro-img__widthfix {\n    height: 100%; }\n  .taro-img__mode-scaletofill {\n    width: 100%;\n    height: 100%; }\n  .taro-img__mode-aspectfit {\n    max-width: 100%;\n    max-height: 100%; }\n  .taro-img__mode-aspectfill {\n    min-width: 100%;\n    height: 100%; }\n  .taro-img__mode-widthfix {\n    width: 100%; }\n  .taro-img__mode-top {\n    width: 100%; }\n  .taro-img__mode-bottom {\n    width: 100%;\n    position: absolute;\n    bottom: 0; }\n  .taro-img__mode-left {\n    height: 100%; }\n  .taro-img__mode-right {\n    position: absolute;\n    height: 100%;\n    right: 0; }\n  .taro-img__mode-topright {\n    position: absolute;\n    right: 0; }\n  .taro-img__mode-bottomleft {\n    position: absolute;\n    bottom: 0; }\n  .taro-img__mode-bottomright {\n    position: absolute;\n    right: 0;\n    bottom: 0; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@tarojs/components/src/components/input/index.scss":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@tarojs/components/src/components/input/index.scss ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "input {\n  display: block;\n  height: 1.4rem;\n  text-align: inherit;\n  text-overflow: clip;\n  overflow: hidden;\n  white-space: nowrap; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@tarojs/components/src/components/picker/style/index.scss":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@tarojs/components/src/components/picker/style/index.scss ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".weui-picker, .weui-picker__hd {\n  font-size: 12px; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@tarojs/components/src/components/scroll-view/style/index.scss":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@tarojs/components/src/components/scroll-view/style/index.scss ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".taro-scroll {\n  -webkit-overflow-scrolling: auto; }\n  .taro-scroll::-webkit-scrollbar {\n    display: none; }\n\n.taro-scroll-view {\n  overflow: hidden; }\n  .taro-scroll-view__scroll-x {\n    overflow-x: scroll;\n    overflow-y: hidden; }\n  .taro-scroll-view__scroll-y {\n    overflow-x: hidden;\n    overflow-y: scroll; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@tarojs/components/src/components/swiper/style/index.scss":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@tarojs/components/src/components/swiper/style/index.scss ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".swiper-container {\n  height: 150px; }\n\n.swiper-pagination {\n  font-size: 0; }\n\n.swiper-pagination-bullet {\n  opacity: 1; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@tarojs/components/src/components/text/style/index.scss":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@tarojs/components/src/components/text/style/index.scss ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".taro-text {\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n  .taro-text__selectable {\n    -moz-user-select: text;\n    -webkit-user-select: text;\n    -ms-user-select: text;\n    user-select: text; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@tarojs/components/src/components/view/style/index.scss":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@tarojs/components/src/components/view/style/index.scss ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body, html {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@tarojs/components/src/components/web-view/style/index.scss":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@tarojs/components/src/components/web-view/style/index.scss ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "iframe {\n  border: none; }\n\n.taro-webview {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 999; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/swiper/dist/css/swiper.min.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/swiper/dist/css/swiper.min.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/**\n * Swiper 4.4.2\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * http://www.idangero.us/swiper/\n *\n * Copyright 2014-2018 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: November 1, 2018\n */\n.swiper-container{margin:0 auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-container-no-flexbox .swiper-slide{float:left}.swiper-container-vertical>.swiper-wrapper{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;-o-transition-property:transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-box-sizing:content-box;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.swiper-container-multirow>.swiper-wrapper{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.swiper-container-free-mode>.swiper-wrapper{-webkit-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out;margin:0 auto}.swiper-slide{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:100%;height:100%;position:relative;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;-o-transition-property:transform;transition-property:transform;transition-property:transform,-webkit-transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-transition-property:height,-webkit-transform;transition-property:height,-webkit-transform;-o-transition-property:transform,height;transition-property:transform,height;transition-property:transform,height,-webkit-transform}.swiper-container-3d{-webkit-perspective:1200px;perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:-webkit-gradient(linear,right top,left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(right,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(right,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-right{background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(left,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(left,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-top{background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(bottom,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(bottom,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-o-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-wp8-horizontal,.swiper-container-wp8-horizontal>.swiper-wrapper{-ms-touch-action:pan-y;touch-action:pan-y}.swiper-container-wp8-vertical,.swiper-container-wp8-vertical>.swiper-wrapper{-ms-touch-action:pan-x;touch-action:pan-x}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:27px;height:44px;margin-top:-22px;z-index:10;cursor:pointer;background-size:27px 44px;background-position:center;background-repeat:no-repeat}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");left:10px;right:auto}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");right:10px;left:auto}.swiper-button-prev.swiper-button-white,.swiper-container-rtl .swiper-button-next.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-next.swiper-button-white,.swiper-container-rtl .swiper-button-prev.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-prev.swiper-button-black,.swiper-container-rtl .swiper-button-next.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-next.swiper-button-black,.swiper-container-rtl .swiper-button-prev.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;-webkit-transition:.3s opacity;-o-transition:.3s opacity;transition:.3s opacity;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transform:scale(.33);-ms-transform:scale(.33);transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{-webkit-transform:scale(.66);-ms-transform:scale(.66);transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{-webkit-transform:scale(.33);-ms-transform:scale(.33);transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{-webkit-transform:scale(.66);-ms-transform:scale(.66);transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{-webkit-transform:scale(.33);-ms-transform:scale(.33);transform:scale(.33)}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;-webkit-box-shadow:none;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet-active{opacity:1;background:#007aff}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;-webkit-transition:.2s top,.2s -webkit-transform;transition:.2s top,.2s -webkit-transform;-o-transition:.2s transform,.2s top;transition:.2s transform,.2s top;transition:.2s transform,.2s top,.2s -webkit-transform}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:.2s left,.2s -webkit-transform;transition:.2s left,.2s -webkit-transform;-o-transition:.2s transform,.2s left;transition:.2s transform,.2s left;transition:.2s transform,.2s left,.2s -webkit-transform}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:.2s right,.2s -webkit-transform;transition:.2s right,.2s -webkit-transform;-o-transition:.2s transform,.2s right;transition:.2s transform,.2s right;transition:.2s transform,.2s right,.2s -webkit-transform}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:#007aff;position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);-webkit-transform-origin:left top;-ms-transform-origin:left top;transform-origin:left top}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{-webkit-transform-origin:right top;-ms-transform-origin:right top;transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-white .swiper-pagination-bullet-active{background:#fff}.swiper-pagination-progressbar.swiper-pagination-white{background:rgba(255,255,255,.25)}.swiper-pagination-progressbar.swiper-pagination-white .swiper-pagination-progressbar-fill{background:#fff}.swiper-pagination-black .swiper-pagination-bullet-active{background:#000}.swiper-pagination-progressbar.swiper-pagination-black{background:rgba(0,0,0,.25)}.swiper-pagination-progressbar.swiper-pagination-black .swiper-pagination-progressbar-fill{background:#000}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;-webkit-transform-origin:50%;-ms-transform-origin:50%;transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s steps(12,end) infinite;animation:swiper-preloader-spin 1s steps(12,end) infinite}.swiper-lazy-preloader:after{display:block;content:'';width:100%;height:100%;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");background-position:50%;background-size:100%;background-repeat:no-repeat}.swiper-lazy-preloader-white:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\")}@-webkit-keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide{-webkit-transition-timing-function:ease-out;-o-transition-timing-function:ease-out;transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;-webkit-transition-property:opacity;-o-transition-property:opacity;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube{overflow:visible}.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide{-webkit-transform-origin:100% 0;-ms-transform-origin:100% 0;transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}.swiper-container-flip{overflow:visible}.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-coverflow .swiper-wrapper{-ms-perspective:1200px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/weui/dist/style/weui.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/weui/dist/style/weui.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*!\r\n * WeUI v1.1.3 (https://github.com/weui/weui)\r\n * Copyright 2018 Tencent, Inc.\r\n * Licensed under the MIT license\r\n */\r\nhtml{\r\n  -ms-text-size-adjust:100%;\r\n  -webkit-text-size-adjust:100%;\r\n}\r\nbody{\r\n  line-height:1.6;\r\n  font-family:-apple-system-font, \"Helvetica Neue\", sans-serif;\r\n}\r\n*{\r\n  margin:0;\r\n  padding:0;\r\n}\r\na img{\r\n  border:0;\r\n}\r\na{\r\n  text-decoration:none;\r\n  -webkit-tap-highlight-color:rgba(0, 0, 0, 0);\r\n}\r\n@font-face{\r\n  font-weight:normal;\r\n  font-style:normal;\r\n  font-family:\"weui\";\r\n  src:url('data:application/octet-stream;base64,AAEAAAALAIAAAwAwR1NVQrD+s+0AAAE4AAAAQk9TLzJAKEx+AAABfAAAAFZjbWFw65cFHQAAAhwAAAJQZ2x5ZvCRR/EAAASUAAAKtGhlYWQMPROtAAAA4AAAADZoaGVhCCwD+gAAALwAAAAkaG10eEJo//8AAAHUAAAASGxvY2EYqhW4AAAEbAAAACZtYXhwASEAVQAAARgAAAAgbmFtZeNcHtgAAA9IAAAB5nBvc3T6bLhLAAARMAAAAOYAAQAAA+gAAABaA+j/////A+kAAQAAAAAAAAAAAAAAAAAAABIAAQAAAAEAACbZbxtfDzz1AAsD6AAAAADUm2dvAAAAANSbZ2///wAAA+kD6gAAAAgAAgAAAAAAAAABAAAAEgBJAAUAAAAAAAIAAAAKAAoAAAD/AAAAAAAAAAEAAAAKAB4ALAABREZMVAAIAAQAAAAAAAAAAQAAAAFsaWdhAAgAAAABAAAAAQAEAAQAAAABAAgAAQAGAAAAAQAAAAAAAQOwAZAABQAIAnoCvAAAAIwCegK8AAAB4AAxAQIAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA6gHqEQPoAAAAWgPqAAAAAAABAAAAAAAAAAAAAAPoAAAD6AAAA+gAAAPoAAAD6AAAA+gAAAPoAAAD6AAAA+gAAAPoAAAD6AAAA+gAAAPoAAAD6AAAA+j//wPoAAAD6AAAAAAABQAAAAMAAAAsAAAABAAAAXQAAQAAAAAAbgADAAEAAAAsAAMACgAAAXQABABCAAAABAAEAAEAAOoR//8AAOoB//8AAAABAAQAAAABAAIAAwAEAAUABgAHAAgACQAKAAsADAANAA4ADwAQABEAAAEGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAANwAAAAAAAAAEQAA6gEAAOoBAAAAAQAA6gIAAOoCAAAAAgAA6gMAAOoDAAAAAwAA6gQAAOoEAAAABAAA6gUAAOoFAAAABQAA6gYAAOoGAAAABgAA6gcAAOoHAAAABwAA6ggAAOoIAAAACAAA6gkAAOoJAAAACQAA6goAAOoKAAAACgAA6gsAAOoLAAAACwAA6gwAAOoMAAAADAAA6g0AAOoNAAAADQAA6g4AAOoOAAAADgAA6g8AAOoPAAAADwAA6hAAAOoQAAAAEAAA6hEAAOoRAAAAEQAAAAAARgCMANIBJAF4AcQCMgJgAqgC/ANIA6YD/gROBKAE9AVaAAAAAgAAAAADrwOtABQAKQAAASIHBgcGFBcWFxYyNzY3NjQnJicmAyInJicmNDc2NzYyFxYXFhQHBgcGAfV4Z2Q7PDw7ZGfwZmQ7PDw7ZGZ4bl5bNjc3Nlte215bNjc3NlteA608O2Rn8GdjOzw8O2Nn8GdkOzz8rzc1W17bXlw1Nzc1XF7bXls1NwAAAAACAAAAAAOzA7MAFwAtAAABIgcGBwYVFBcWFxYzMjc2NzY1NCcmJyYTBwYiLwEmNjsBETQ2OwEyFhURMzIWAe52Z2Q7PT07ZGd2fGpmOz4+O2ZpIXYOKA52Dg0XXQsHJgcLXRcNA7M+O2ZqfHZnZDs9PTtkZ3Z9aWY7Pv3wmhISmhIaARcICwsI/ukaAAMAAAAAA+UD5QAXACMALAAAASIHBgcGFRQXFhcWMzI3Njc2NTQnJicmAxQrASI1AzQ7ATIHJyImNDYyFhQGAe6Ecm9BRERBb3KEiXZxQkREQnF1aQIxAwgCQgMBIxIZGSQZGQPkREJxdomEcm9BRERBb3KEinVxQkT9HQICAWICAjEZIxkZIxkAAAAAAgAAAAADsQPkABkALgAAAQYHBgc2BREUFxYXFhc2NzY3NjURJBcmJyYTAQYvASY/ATYyHwEWNjclNjIfARYB9VVVQk+v/tFHPmxebGxdbT1I/tGvT0JVo/7VBASKAwMSAQUBcQEFAgESAgUBEQQD4xMYEhk3YP6sjnVlSD8cHD9IZXWOAVRgNxkSGP62/tkDA48EBBkCAVYCAQHlAQIQBAAAAAADAAAAAAOxA+QAGwAqADMAAAEGBwYHBgcGNxEUFxYXFhc2NzY3NjURJBcmJyYHMzIWFQMUBisBIicDNDYTIiY0NjIWFAYB9UFBODssO38gRz5sXmxsXW09SP7YqFBBVW80BAYMAwImBQELBh4PFhYeFRUD5A8SDhIOEikK/q2PdWRJPh0dPklkdY8BU141GRIY/AYE/sYCAwUBOgQG/kAVHxUVHxUAAAACAAAAAAPkA+QAFwAtAAABIgcGBwYVFBcWFxYzMjc2NzY1NCcmJyYTAQYiLwEmPwE2Mh8BFjI3ATYyHwEWAe6Ecm9BQ0NCbnODiXVxQkREQnF1kf6gAQUBowMDFgEFAYUCBQEBQwIFARUEA+NEQnF1iYNzbkJDQ0FvcoSJdXFCRP6j/qUBAagEBR4CAWYBAQENAgIVBAAAAAQAAAAAA68DrQAUACkAPwBDAAABIgcGBwYUFxYXFjI3Njc2NCcmJyYDIicmJyY0NzY3NjIXFhcWFAcGBwYTBQ4BLwEmBg8BBhYfARYyNwE+ASYiFzAfAQH1eGdkOzw8O2Rn8GZkOzw8O2RmeG5eWzY3NzZbXtteWzY3NzZbXmn+9gYSBmAGDwUDBQEGfQUQBgElBQELEBUBAQOtPDtkZ/BnYzs8PDtjZ/BnZDs8/K83NVte215cNTc3NVxe215bNTcCJt0FAQVJBQIGBAcRBoAGBQEhBQ8LBAEBAAABAAAAAAO7AzoAFwAAEy4BPwE+AR8BFjY3ATYWFycWFAcBBiInPQoGBwUHGgzLDCELAh0LHwsNCgr9uQoeCgGzCyEOCw0HCZMJAQoBvgkCCg0LHQv9sQsKAAAAAAIAAAAAA+UD5gAXACwAAAEiBwYHBhUUFxYXFjMyNzY3NjU0JyYnJhMHBi8BJicmNRM0NjsBMhYVExceAQHvhHJvQUNDQm5zg4l1cUJEREJxdVcQAwT6AwIEEAMCKwIDDsUCAQPlREJxdYmDc25CQ0NBb3KEiXVxQkT9VhwEAncCAgMGAXoCAwMC/q2FAgQAAAQAAAAAA68DrQADABgALQAzAAABMB8BAyIHBgcGFBcWFxYyNzY3NjQnJicmAyInJicmNDc2NzYyFxYXFhQHBgcGAyMVMzUjAuUBAfJ4Z2Q7PDw7ZGfwZmQ7PDw7ZGZ4bl5bNjc3Nlte215bNjc3NltemyT92QKDAQEBLDw7ZGfwZ2M7PDw7Y2fwZ2Q7PPyvNzVbXtteXDU3NzVcXtteWzU3AjH9JAAAAAMAAAAAA+QD5AAXACcAMAAAASIHBgcGFRQXFhcWMzI3Njc2NTQnJicmAzMyFhUDFAYrASImNQM0NhMiJjQ2MhYUBgHuhHJvQUNDQm5zg4l1cUJEREJxdZ42BAYMAwInAwMMBh8PFhYeFhYD40RCcXWJg3NuQkNDQW9yhIl1cUJE/vYGBf7AAgMDAgFABQb+NhYfFhYfFgAABAAAAAADwAPAAAgAEgAoAD0AAAEyNjQmIgYUFhcjFTMRIxUzNSMDIgcGBwYVFBYXFjMyNzY3NjU0Jy4BAyInJicmNDc2NzYyFxYXFhQHBgcGAfQYISEwISFRjzk5yTorhG5rPT99am+DdmhlPD4+PMyFbV5bNTc3NVte2l5bNTc3NVteAqAiLyIiLyI5Hf7EHBwCsT89a26Ed8w8Pj48ZWh2g29qffyjNzVbXtpeWzU3NzVbXtpeWzU3AAADAAAAAAOoA6gACwAgADUAAAEHJwcXBxc3FzcnNwMiBwYHBhQXFhcWMjc2NzY0JyYnJgMiJyYnJjQ3Njc2MhcWFxYUBwYHBgKOmpocmpocmpocmpq2dmZiOjs7OmJm7GZiOjs7OmJmdmtdWTQ2NjRZXdZdWTQ2NjRZXQKqmpocmpocmpocmpoBGTs6YmbsZmI6Ozs6YmbsZmI6O/zCNjRZXdZdWTQ2NjRZXdZdWTQ2AAMAAAAAA+kD6gAaAC8AMAAAAQYHBiMiJyYnJjQ3Njc2MhcWFxYVFAcGBwEHATI3Njc2NCcmJyYiBwYHBhQXFhcWMwKONUBCR21dWjU3NzVaXdpdWzU2GBcrASM5/eBXS0grKysrSEuuSkkqLCwqSUpXASMrFxg2NVtd2l1aNTc3NVpdbUdCQDX+3jkBGSsrSEuuSkkqLCwqSUquS0grKwAC//8AAAPoA+gAFAAwAAABIgcGBwYQFxYXFiA3Njc2ECcmJyYTFg4BIi8BBwYuATQ/AScmPgEWHwE3Nh4BBg8BAfSIdHFDRERDcXQBEHRxQ0REQ3F0SQoBFBsKoqgKGxMKqKIKARQbCqKoChsUAQqoA+hEQ3F0/vB0cUNERENxdAEQdHFDRP1jChsTCqiiCgEUGwqiqAobFAEKqKIKARQbCqIAAAIAAAAAA+QD5AAXADQAAAEiBwYHBhUUFxYXFjMyNzY3NjU0JyYnJhMUBiMFFxYUDwEGLwEuAT8BNh8BFhQPAQUyFh0BAe6Ecm9BQ0NCbnODiXVxQkREQnF1fwQC/pGDAQEVAwTsAgEC7AQEFAIBhAFwAgMD40RCcXWJg3NuQkNDQW9yhIl1cUJE/fYCAwuVAgQCFAQE0AIFAtEEBBQCBQGVCwMDJwAAAAUAAAAAA9QD0wAjACcANwBHAEgAAAERFAYjISImNREjIiY9ATQ2MyE1NDYzITIWHQEhMhYdARQGIyERIREHIgYVERQWOwEyNjURNCYjISIGFREUFjsBMjY1ETQmKwEDeyYb/XYbJkMJDQ0JAQYZEgEvExkBBgkNDQn9CQJc0QkNDQktCQ0NCf7sCQ0NCS0JDQ0JLQMi/TQbJiYbAswMCiwJDS4SGRkSLg0JLAoM/UwCtGsNCf5NCQ0NCQGzCQ0NCf5NCQ0NCQGzCQ0AAAAAEADGAAEAAAAAAAEABAAAAAEAAAAAAAIABwAEAAEAAAAAAAMABAALAAEAAAAAAAQABAAPAAEAAAAAAAUACwATAAEAAAAAAAYABAAeAAEAAAAAAAoAKwAiAAEAAAAAAAsAEwBNAAMAAQQJAAEACABgAAMAAQQJAAIADgBoAAMAAQQJAAMACAB2AAMAAQQJAAQACAB+AAMAAQQJAAUAFgCGAAMAAQQJAAYACACcAAMAAQQJAAoAVgCkAAMAAQQJAAsAJgD6d2V1aVJlZ3VsYXJ3ZXVpd2V1aVZlcnNpb24gMS4wd2V1aUdlbmVyYXRlZCBieSBzdmcydHRmIGZyb20gRm9udGVsbG8gcHJvamVjdC5odHRwOi8vZm9udGVsbG8uY29tAHcAZQB1AGkAUgBlAGcAdQBsAGEAcgB3AGUAdQBpAHcAZQB1AGkAVgBlAHIAcwBpAG8AbgAgADEALgAwAHcAZQB1AGkARwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABzAHYAZwAyAHQAdABmACAAZgByAG8AbQAgAEYAbwBuAHQAZQBsAGwAbwAgAHAAcgBvAGoAZQBjAHQALgBoAHQAdABwADoALwAvAGYAbwBuAHQAZQBsAGwAbwAuAGMAbwBtAAAAAgAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwEQAREBEgETAAZjaXJjbGUIZG93bmxvYWQEaW5mbwxzYWZlX3N1Y2Nlc3MJc2FmZV93YXJuB3N1Y2Nlc3MOc3VjY2Vzcy1jaXJjbGURc3VjY2Vzcy1uby1jaXJjbGUHd2FpdGluZw53YWl0aW5nLWNpcmNsZQR3YXJuC2luZm8tY2lyY2xlBmNhbmNlbAZzZWFyY2gFY2xlYXIEYmFjawZkZWxldGUAAAAA') format('truetype');\r\n}\r\n[class^=\"weui-icon-\"],\r\n[class*=\" weui-icon-\"]{\r\n  display:inline-block;\r\n  vertical-align:middle;\r\n  font:normal normal normal 14px/1 \"weui\";\r\n  font-size:inherit;\r\n  text-rendering:auto;\r\n  -webkit-font-smoothing:antialiased;\r\n}\r\n[class^=\"weui-icon-\"]:before,\r\n[class*=\" weui-icon-\"]:before{\r\n  display:inline-block;\r\n  margin-left:.2em;\r\n  margin-right:.2em;\r\n}\r\n.weui-icon-circle:before{\r\n  content:\"\\EA01\";\r\n}\r\n.weui-icon-download:before{\r\n  content:\"\\EA02\";\r\n}\r\n.weui-icon-info:before{\r\n  content:\"\\EA03\";\r\n}\r\n.weui-icon-safe-success:before{\r\n  content:\"\\EA04\";\r\n}\r\n.weui-icon-safe-warn:before{\r\n  content:\"\\EA05\";\r\n}\r\n.weui-icon-success:before{\r\n  content:\"\\EA06\";\r\n}\r\n.weui-icon-success-circle:before{\r\n  content:\"\\EA07\";\r\n}\r\n.weui-icon-success-no-circle:before{\r\n  content:\"\\EA08\";\r\n}\r\n.weui-icon-waiting:before{\r\n  content:\"\\EA09\";\r\n}\r\n.weui-icon-waiting-circle:before{\r\n  content:\"\\EA0A\";\r\n}\r\n.weui-icon-warn:before{\r\n  content:\"\\EA0B\";\r\n}\r\n.weui-icon-info-circle:before{\r\n  content:\"\\EA0C\";\r\n}\r\n.weui-icon-cancel:before{\r\n  content:\"\\EA0D\";\r\n}\r\n.weui-icon-search:before{\r\n  content:\"\\EA0E\";\r\n}\r\n.weui-icon-clear:before{\r\n  content:\"\\EA0F\";\r\n}\r\n.weui-icon-back:before{\r\n  content:\"\\EA10\";\r\n}\r\n.weui-icon-delete:before{\r\n  content:\"\\EA11\";\r\n}\r\n[class^=\"weui-icon_\"]:before,\r\n[class*=\" weui-icon_\"]:before{\r\n  margin:0;\r\n}\r\n.weui-icon-success{\r\n  font-size:23px;\r\n  color:#09BB07;\r\n}\r\n.weui-icon-waiting{\r\n  font-size:23px;\r\n  color:#10AEFF;\r\n}\r\n.weui-icon-warn{\r\n  font-size:23px;\r\n  color:#F43530;\r\n}\r\n.weui-icon-info{\r\n  font-size:23px;\r\n  color:#10AEFF;\r\n}\r\n.weui-icon-success-circle{\r\n  font-size:23px;\r\n  color:#09BB07;\r\n}\r\n.weui-icon-success-no-circle{\r\n  font-size:23px;\r\n  color:#09BB07;\r\n}\r\n.weui-icon-waiting-circle{\r\n  font-size:23px;\r\n  color:#10AEFF;\r\n}\r\n.weui-icon-circle{\r\n  font-size:23px;\r\n  color:#C9C9C9;\r\n}\r\n.weui-icon-download{\r\n  font-size:23px;\r\n  color:#09BB07;\r\n}\r\n.weui-icon-info-circle{\r\n  font-size:23px;\r\n  color:#09BB07;\r\n}\r\n.weui-icon-safe-success{\r\n  color:#09BB07;\r\n}\r\n.weui-icon-safe-warn{\r\n  color:#FFBE00;\r\n}\r\n.weui-icon-cancel{\r\n  color:#F43530;\r\n  font-size:22px;\r\n}\r\n.weui-icon-search{\r\n  color:#B2B2B2;\r\n  font-size:14px;\r\n}\r\n.weui-icon-clear{\r\n  color:#B2B2B2;\r\n  font-size:14px;\r\n}\r\n.weui-icon-delete.weui-icon_gallery-delete{\r\n  color:#FFFFFF;\r\n  font-size:22px;\r\n}\r\n.weui-icon_msg{\r\n  font-size:93px;\r\n}\r\n.weui-icon_msg.weui-icon-warn{\r\n  color:#F76260;\r\n}\r\n.weui-icon_msg-primary{\r\n  font-size:93px;\r\n}\r\n.weui-icon_msg-primary.weui-icon-warn{\r\n  color:#FFBE00;\r\n}\r\n.weui-btn{\r\n  position:relative;\r\n  display:block;\r\n  margin-left:auto;\r\n  margin-right:auto;\r\n  padding-left:14px;\r\n  padding-right:14px;\r\n  box-sizing:border-box;\r\n  font-size:18px;\r\n  text-align:center;\r\n  text-decoration:none;\r\n  color:#FFFFFF;\r\n  line-height:2.55555556;\r\n  border-radius:5px;\r\n  -webkit-tap-highlight-color:rgba(0, 0, 0, 0);\r\n  overflow:hidden;\r\n}\r\n.weui-btn:after{\r\n  content:\" \";\r\n  width:200%;\r\n  height:200%;\r\n  position:absolute;\r\n  top:0;\r\n  left:0;\r\n  border:1px solid rgba(0, 0, 0, 0.2);\r\n  -webkit-transform:scale(0.5);\r\n          transform:scale(0.5);\r\n  -webkit-transform-origin:0 0;\r\n          transform-origin:0 0;\r\n  box-sizing:border-box;\r\n  border-radius:10px;\r\n}\r\n.weui-btn_inline{\r\n  display:inline-block;\r\n}\r\n.weui-btn_default{\r\n  color:#000000;\r\n  background-color:#F8F8F8;\r\n}\r\n.weui-btn_default:not(.weui-btn_disabled):visited{\r\n  color:#000000;\r\n}\r\n.weui-btn_default:not(.weui-btn_disabled):active{\r\n  color:rgba(0, 0, 0, 0.6);\r\n  background-color:#DEDEDE;\r\n}\r\n.weui-btn_primary{\r\n  background-color:#1AAD19;\r\n}\r\n.weui-btn_primary:not(.weui-btn_disabled):visited{\r\n  color:#FFFFFF;\r\n}\r\n.weui-btn_primary:not(.weui-btn_disabled):active{\r\n  color:rgba(255, 255, 255, 0.6);\r\n  background-color:#179B16;\r\n}\r\n.weui-btn_warn{\r\n  background-color:#E64340;\r\n}\r\n.weui-btn_warn:not(.weui-btn_disabled):visited{\r\n  color:#FFFFFF;\r\n}\r\n.weui-btn_warn:not(.weui-btn_disabled):active{\r\n  color:rgba(255, 255, 255, 0.6);\r\n  background-color:#CE3C39;\r\n}\r\n.weui-btn_disabled{\r\n  color:rgba(255, 255, 255, 0.6);\r\n}\r\n.weui-btn_disabled.weui-btn_default{\r\n  color:rgba(0, 0, 0, 0.3);\r\n  background-color:#F7F7F7;\r\n}\r\n.weui-btn_disabled.weui-btn_primary{\r\n  background-color:#9ED99D;\r\n}\r\n.weui-btn_disabled.weui-btn_warn{\r\n  background-color:#EC8B89;\r\n}\r\n.weui-btn_loading .weui-loading{\r\n  margin:-0.2em 0.34em 0 0;\r\n}\r\n.weui-btn_loading.weui-btn_primary,\r\n.weui-btn_loading.weui-btn_warn{\r\n  color:rgba(255, 255, 255, 0.6);\r\n}\r\n.weui-btn_loading.weui-btn_primary{\r\n  background-color:#179B16;\r\n}\r\n.weui-btn_loading.weui-btn_warn{\r\n  background-color:#CE3C39;\r\n}\r\n.weui-btn_plain-primary{\r\n  color:#1aad19;\r\n  border:1px solid #1aad19;\r\n}\r\n.weui-btn_plain-primary:not(.weui-btn_plain-disabled):active{\r\n  color:rgba(26, 173, 25, 0.6);\r\n  border-color:rgba(26, 173, 25, 0.6);\r\n}\r\n.weui-btn_plain-primary:after{\r\n  border-width:0;\r\n}\r\n.weui-btn_plain-default{\r\n  color:#353535;\r\n  border:1px solid #353535;\r\n}\r\n.weui-btn_plain-default:not(.weui-btn_plain-disabled):active{\r\n  color:rgba(53, 53, 53, 0.6);\r\n  border-color:rgba(53, 53, 53, 0.6);\r\n}\r\n.weui-btn_plain-default:after{\r\n  border-width:0;\r\n}\r\n.weui-btn_plain-disabled{\r\n  color:rgba(0, 0, 0, 0.2);\r\n  border-color:rgba(0, 0, 0, 0.2);\r\n}\r\nbutton.weui-btn,\r\ninput.weui-btn{\r\n  width:100%;\r\n  border-width:0;\r\n  outline:0;\r\n  -webkit-appearance:none;\r\n}\r\nbutton.weui-btn:focus,\r\ninput.weui-btn:focus{\r\n  outline:0;\r\n}\r\nbutton.weui-btn_inline,\r\ninput.weui-btn_inline,\r\nbutton.weui-btn_mini,\r\ninput.weui-btn_mini{\r\n  width:auto;\r\n}\r\nbutton.weui-btn_plain-primary,\r\ninput.weui-btn_plain-primary,\r\nbutton.weui-btn_plain-default,\r\ninput.weui-btn_plain-default{\r\n  border-width:1px;\r\n  background-color:transparent;\r\n}\r\n.weui-btn_mini{\r\n  display:inline-block;\r\n  padding:0 1.32em;\r\n  line-height:2.3;\r\n  font-size:13px;\r\n}\r\n.weui-btn + .weui-btn{\r\n  margin-top:15px;\r\n}\r\n.weui-btn.weui-btn_inline + .weui-btn.weui-btn_inline{\r\n  margin-top:auto;\r\n  margin-left:15px;\r\n}\r\n.weui-btn-area{\r\n  margin:1.17647059em 15px 0.3em;\r\n}\r\n.weui-btn-area_inline{\r\n  display:-webkit-box;\r\n  display:-webkit-flex;\r\n  display:flex;\r\n}\r\n.weui-btn-area_inline .weui-btn{\r\n  margin-top:auto;\r\n  margin-right:15px;\r\n  width:100%;\r\n  -webkit-box-flex:1;\r\n  -webkit-flex:1;\r\n          flex:1;\r\n}\r\n.weui-btn-area_inline .weui-btn:last-child{\r\n  margin-right:0;\r\n}\r\n.weui-cells{\r\n  margin-top:1.17647059em;\r\n  background-color:#FFFFFF;\r\n  line-height:1.47058824;\r\n  font-size:17px;\r\n  overflow:hidden;\r\n  position:relative;\r\n}\r\n.weui-cells:before{\r\n  content:\" \";\r\n  position:absolute;\r\n  left:0;\r\n  top:0;\r\n  right:0;\r\n  height:1px;\r\n  border-top:1px solid #e5e5e5;\r\n  color:#e5e5e5;\r\n  -webkit-transform-origin:0 0;\r\n          transform-origin:0 0;\r\n  -webkit-transform:scaleY(0.5);\r\n          transform:scaleY(0.5);\r\n  z-index:2;\r\n}\r\n.weui-cells:after{\r\n  content:\" \";\r\n  position:absolute;\r\n  left:0;\r\n  bottom:0;\r\n  right:0;\r\n  height:1px;\r\n  border-bottom:1px solid #e5e5e5;\r\n  color:#e5e5e5;\r\n  -webkit-transform-origin:0 100%;\r\n          transform-origin:0 100%;\r\n  -webkit-transform:scaleY(0.5);\r\n          transform:scaleY(0.5);\r\n  z-index:2;\r\n}\r\n.weui-cells__title{\r\n  margin-top:.77em;\r\n  margin-bottom:.3em;\r\n  padding-left:15px;\r\n  padding-right:15px;\r\n  color:#999999;\r\n  font-size:14px;\r\n}\r\n.weui-cells__title + .weui-cells{\r\n  margin-top:0;\r\n}\r\n.weui-cells__tips{\r\n  margin-top:.3em;\r\n  color:#999999;\r\n  padding-left:15px;\r\n  padding-right:15px;\r\n  font-size:14px;\r\n}\r\n.weui-cell{\r\n  padding:10px 15px;\r\n  position:relative;\r\n  display:-webkit-box;\r\n  display:-webkit-flex;\r\n  display:flex;\r\n  -webkit-box-align:center;\r\n  -webkit-align-items:center;\r\n          align-items:center;\r\n}\r\n.weui-cell:before{\r\n  content:\" \";\r\n  position:absolute;\r\n  left:0;\r\n  top:0;\r\n  right:0;\r\n  height:1px;\r\n  border-top:1px solid #e5e5e5;\r\n  color:#e5e5e5;\r\n  -webkit-transform-origin:0 0;\r\n          transform-origin:0 0;\r\n  -webkit-transform:scaleY(0.5);\r\n          transform:scaleY(0.5);\r\n  left:15px;\r\n  z-index:2;\r\n}\r\n.weui-cell:first-child:before{\r\n  display:none;\r\n}\r\n.weui-cell_primary{\r\n  -webkit-box-align:start;\r\n  -webkit-align-items:flex-start;\r\n          align-items:flex-start;\r\n}\r\n.weui-cell__bd{\r\n  -webkit-box-flex:1;\r\n  -webkit-flex:1;\r\n          flex:1;\r\n}\r\n.weui-cell__ft{\r\n  text-align:right;\r\n  color:#999999;\r\n}\r\n.weui-cell_swiped{\r\n  display:block;\r\n  padding:0;\r\n}\r\n.weui-cell_swiped > .weui-cell__bd{\r\n  position:relative;\r\n  z-index:1;\r\n  background-color:#FFFFFF;\r\n}\r\n.weui-cell_swiped > .weui-cell__ft{\r\n  position:absolute;\r\n  right:0;\r\n  top:0;\r\n  bottom:0;\r\n  display:-webkit-box;\r\n  display:-webkit-flex;\r\n  display:flex;\r\n  color:#FFFFFF;\r\n}\r\n.weui-swiped-btn{\r\n  display:block;\r\n  padding:10px 1em;\r\n  line-height:1.47058824;\r\n  color:inherit;\r\n}\r\n.weui-swiped-btn_default{\r\n  background-color:#C7C7CC;\r\n}\r\n.weui-swiped-btn_warn{\r\n  background-color:#FF3B30;\r\n}\r\n.weui-cell_access{\r\n  -webkit-tap-highlight-color:rgba(0, 0, 0, 0);\r\n  color:inherit;\r\n}\r\n.weui-cell_access:active{\r\n  background-color:#ECECEC;\r\n}\r\n.weui-cell_access .weui-cell__ft{\r\n  padding-right:13px;\r\n  position:relative;\r\n}\r\n.weui-cell_access .weui-cell__ft:after{\r\n  content:\" \";\r\n  display:inline-block;\r\n  height:6px;\r\n  width:6px;\r\n  border-width:2px 2px 0 0;\r\n  border-color:#C8C8CD;\r\n  border-style:solid;\r\n  -webkit-transform:matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\r\n          transform:matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\r\n  position:relative;\r\n  top:-2px;\r\n  position:absolute;\r\n  top:50%;\r\n  margin-top:-4px;\r\n  right:2px;\r\n}\r\n.weui-cell_link{\r\n  color:#586C94;\r\n  font-size:14px;\r\n}\r\n.weui-cell_link:first-child:before{\r\n  display:block;\r\n}\r\n.weui-check__label{\r\n  -webkit-tap-highlight-color:rgba(0, 0, 0, 0);\r\n}\r\n.weui-check__label:active{\r\n  background-color:#ECECEC;\r\n}\r\n.weui-check{\r\n  position:absolute;\r\n  left:-9999em;\r\n}\r\n.weui-cells_radio .weui-cell__ft{\r\n  padding-left:0.35em;\r\n}\r\n.weui-cells_radio .weui-check + .weui-icon-checked{\r\n  min-width:16px;\r\n}\r\n.weui-cells_radio .weui-check:checked + .weui-icon-checked:before{\r\n  display:block;\r\n  content:'\\EA08';\r\n  color:#09BB07;\r\n  font-size:16px;\r\n}\r\n.weui-cells_checkbox .weui-cell__hd{\r\n  padding-right:0.35em;\r\n}\r\n.weui-cells_checkbox .weui-icon-checked:before{\r\n  content:'\\EA01';\r\n  color:#C9C9C9;\r\n  font-size:23px;\r\n  display:block;\r\n}\r\n.weui-cells_checkbox .weui-check:checked + .weui-icon-checked:before{\r\n  content:'\\EA06';\r\n  color:#09BB07;\r\n}\r\n.weui-label{\r\n  display:block;\r\n  width:105px;\r\n  word-wrap:break-word;\r\n  word-break:break-all;\r\n}\r\n.weui-input{\r\n  width:100%;\r\n  border:0;\r\n  outline:0;\r\n  -webkit-appearance:none;\r\n  background-color:transparent;\r\n  font-size:inherit;\r\n  color:inherit;\r\n  height:1.47058824em;\r\n  line-height:1.47058824;\r\n}\r\n.weui-input::-webkit-outer-spin-button,\r\n.weui-input::-webkit-inner-spin-button{\r\n  -webkit-appearance:none;\r\n  margin:0;\r\n}\r\n.weui-textarea{\r\n  display:block;\r\n  border:0;\r\n  resize:none;\r\n  width:100%;\r\n  color:inherit;\r\n  font-size:1em;\r\n  line-height:inherit;\r\n  outline:0;\r\n}\r\n.weui-textarea-counter{\r\n  color:#B2B2B2;\r\n  text-align:right;\r\n}\r\n.weui-cell_warn .weui-textarea-counter{\r\n  color:#E64340;\r\n}\r\n.weui-toptips{\r\n  display:none;\r\n  position:fixed;\r\n  -webkit-transform:translateZ(0);\r\n          transform:translateZ(0);\r\n  top:0;\r\n  left:0;\r\n  right:0;\r\n  padding:5px;\r\n  font-size:14px;\r\n  text-align:center;\r\n  color:#FFF;\r\n  z-index:5000;\r\n  word-wrap:break-word;\r\n  word-break:break-all;\r\n}\r\n.weui-toptips_warn{\r\n  background-color:#E64340;\r\n}\r\n.weui-cells_form .weui-cell__ft{\r\n  font-size:0;\r\n}\r\n.weui-cells_form .weui-icon-warn{\r\n  display:none;\r\n}\r\n.weui-cells_form input,\r\n.weui-cells_form textarea,\r\n.weui-cells_form label[for]{\r\n  -webkit-tap-highlight-color:rgba(0, 0, 0, 0);\r\n}\r\n.weui-cell_warn{\r\n  color:#E64340;\r\n}\r\n.weui-cell_warn .weui-icon-warn{\r\n  display:inline-block;\r\n}\r\n.weui-form-preview{\r\n  position:relative;\r\n  background-color:#FFFFFF;\r\n}\r\n.weui-form-preview:before{\r\n  content:\" \";\r\n  position:absolute;\r\n  left:0;\r\n  top:0;\r\n  right:0;\r\n  height:1px;\r\n  border-top:1px solid #e5e5e5;\r\n  color:#e5e5e5;\r\n  -webkit-transform-origin:0 0;\r\n          transform-origin:0 0;\r\n  -webkit-transform:scaleY(0.5);\r\n          transform:scaleY(0.5);\r\n}\r\n.weui-form-preview:after{\r\n  content:\" \";\r\n  position:absolute;\r\n  left:0;\r\n  bottom:0;\r\n  right:0;\r\n  height:1px;\r\n  border-bottom:1px solid #e5e5e5;\r\n  color:#e5e5e5;\r\n  -webkit-transform-origin:0 100%;\r\n          transform-origin:0 100%;\r\n  -webkit-transform:scaleY(0.5);\r\n          transform:scaleY(0.5);\r\n}\r\n.weui-form-preview__hd{\r\n  position:relative;\r\n  padding:10px 15px;\r\n  text-align:right;\r\n  line-height:2.5em;\r\n}\r\n.weui-form-preview__hd:after{\r\n  content:\" \";\r\n  position:absolute;\r\n  left:0;\r\n  bottom:0;\r\n  right:0;\r\n  height:1px;\r\n  border-bottom:1px solid #e5e5e5;\r\n  color:#e5e5e5;\r\n  -webkit-transform-origin:0 100%;\r\n          transform-origin:0 100%;\r\n  -webkit-transform:scaleY(0.5);\r\n          transform:scaleY(0.5);\r\n  left:15px;\r\n}\r\n.weui-form-preview__hd .weui-form-preview__value{\r\n  font-style:normal;\r\n  font-size:1.6em;\r\n}\r\n.weui-form-preview__bd{\r\n  padding:10px 15px;\r\n  font-size:.9em;\r\n  text-align:right;\r\n  color:#999999;\r\n  line-height:2;\r\n}\r\n.weui-form-preview__ft{\r\n  position:relative;\r\n  line-height:50px;\r\n  display:-webkit-box;\r\n  display:-webkit-flex;\r\n  display:flex;\r\n}\r\n.weui-form-preview__ft:before{\r\n  content:\" \";\r\n  position:absolute;\r\n  left:0;\r\n  top:0;\r\n  right:0;\r\n  height:1px;\r\n  border-top:1px solid #D5D5D6;\r\n  color:#D5D5D6;\r\n  -webkit-transform-origin:0 0;\r\n          transform-origin:0 0;\r\n  -webkit-transform:scaleY(0.5);\r\n          transform:scaleY(0.5);\r\n}\r\n.weui-form-preview__item{\r\n  overflow:hidden;\r\n}\r\n.weui-form-preview__label{\r\n  float:left;\r\n  margin-right:1em;\r\n  min-width:4em;\r\n  color:#999999;\r\n  text-align:justify;\r\n  text-align-last:justify;\r\n}\r\n.weui-form-preview__value{\r\n  display:block;\r\n  overflow:hidden;\r\n  word-break:normal;\r\n  word-wrap:break-word;\r\n}\r\n.weui-form-preview__btn{\r\n  position:relative;\r\n  display:block;\r\n  -webkit-box-flex:1;\r\n  -webkit-flex:1;\r\n          flex:1;\r\n  color:#3CC51F;\r\n  text-align:center;\r\n  -webkit-tap-highlight-color:rgba(0, 0, 0, 0);\r\n}\r\nbutton.weui-form-preview__btn{\r\n  background-color:transparent;\r\n  border:0;\r\n  outline:0;\r\n  line-height:inherit;\r\n  font-size:inherit;\r\n}\r\n.weui-form-preview__btn:active{\r\n  background-color:#EEEEEE;\r\n}\r\n.weui-form-preview__btn:after{\r\n  content:\" \";\r\n  position:absolute;\r\n  left:0;\r\n  top:0;\r\n  width:1px;\r\n  bottom:0;\r\n  border-left:1px solid #D5D5D6;\r\n  color:#D5D5D6;\r\n  -webkit-transform-origin:0 0;\r\n          transform-origin:0 0;\r\n  -webkit-transform:scaleX(0.5);\r\n          transform:scaleX(0.5);\r\n}\r\n.weui-form-preview__btn:first-child:after{\r\n  display:none;\r\n}\r\n.weui-form-preview__btn_default{\r\n  color:#999999;\r\n}\r\n.weui-form-preview__btn_primary{\r\n  color:#0BB20C;\r\n}\r\n.weui-cell_select{\r\n  padding:0;\r\n}\r\n.weui-cell_select .weui-select{\r\n  padding-right:30px;\r\n}\r\n.weui-cell_select .weui-cell__bd:after{\r\n  content:\" \";\r\n  display:inline-block;\r\n  height:6px;\r\n  width:6px;\r\n  border-width:2px 2px 0 0;\r\n  border-color:#C8C8CD;\r\n  border-style:solid;\r\n  -webkit-transform:matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\r\n          transform:matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\r\n  position:relative;\r\n  top:-2px;\r\n  position:absolute;\r\n  top:50%;\r\n  right:15px;\r\n  margin-top:-4px;\r\n}\r\n.weui-select{\r\n  -webkit-appearance:none;\r\n  border:0;\r\n  outline:0;\r\n  background-color:transparent;\r\n  width:100%;\r\n  font-size:inherit;\r\n  height:45px;\r\n  line-height:45px;\r\n  position:relative;\r\n  z-index:1;\r\n  padding-left:15px;\r\n}\r\n.weui-cell_select-before{\r\n  padding-right:15px;\r\n}\r\n.weui-cell_select-before .weui-select{\r\n  width:105px;\r\n  box-sizing:border-box;\r\n}\r\n.weui-cell_select-before .weui-cell__hd{\r\n  position:relative;\r\n}\r\n.weui-cell_select-before .weui-cell__hd:after{\r\n  content:\" \";\r\n  position:absolute;\r\n  right:0;\r\n  top:0;\r\n  width:1px;\r\n  bottom:0;\r\n  border-right:1px solid #e5e5e5;\r\n  color:#e5e5e5;\r\n  -webkit-transform-origin:100% 0;\r\n          transform-origin:100% 0;\r\n  -webkit-transform:scaleX(0.5);\r\n          transform:scaleX(0.5);\r\n}\r\n.weui-cell_select-before .weui-cell__hd:before{\r\n  content:\" \";\r\n  display:inline-block;\r\n  height:6px;\r\n  width:6px;\r\n  border-width:2px 2px 0 0;\r\n  border-color:#C8C8CD;\r\n  border-style:solid;\r\n  -webkit-transform:matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\r\n          transform:matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\r\n  position:relative;\r\n  top:-2px;\r\n  position:absolute;\r\n  top:50%;\r\n  right:15px;\r\n  margin-top:-4px;\r\n}\r\n.weui-cell_select-before .weui-cell__bd{\r\n  padding-left:15px;\r\n}\r\n.weui-cell_select-before .weui-cell__bd:after{\r\n  display:none;\r\n}\r\n.weui-cell_select-after{\r\n  padding-left:15px;\r\n}\r\n.weui-cell_select-after .weui-select{\r\n  padding-left:0;\r\n}\r\n.weui-cell_vcode{\r\n  padding-top:0;\r\n  padding-right:0;\r\n  padding-bottom:0;\r\n}\r\n.weui-vcode-img{\r\n  margin-left:5px;\r\n  height:45px;\r\n  vertical-align:middle;\r\n}\r\n.weui-vcode-btn{\r\n  display:inline-block;\r\n  height:45px;\r\n  margin-left:5px;\r\n  padding:0 0.6em 0 0.7em;\r\n  border-left:1px solid #E5E5E5;\r\n  line-height:45px;\r\n  vertical-align:middle;\r\n  font-size:17px;\r\n  color:#3CC51F;\r\n}\r\nbutton.weui-vcode-btn{\r\n  background-color:transparent;\r\n  border-top:0;\r\n  border-right:0;\r\n  border-bottom:0;\r\n  outline:0;\r\n}\r\n.weui-vcode-btn:active{\r\n  color:#52a341;\r\n}\r\n.weui-gallery{\r\n  display:none;\r\n  position:fixed;\r\n  top:0;\r\n  right:0;\r\n  bottom:0;\r\n  left:0;\r\n  background-color:#000000;\r\n  z-index:1000;\r\n}\r\n.weui-gallery__img{\r\n  position:absolute;\r\n  top:0;\r\n  right:0;\r\n  bottom:60px;\r\n  left:0;\r\n  background:center center no-repeat;\r\n  background-size:contain;\r\n}\r\n.weui-gallery__opr{\r\n  position:absolute;\r\n  right:0;\r\n  bottom:0;\r\n  left:0;\r\n  background-color:#0D0D0D;\r\n  color:#FFFFFF;\r\n  line-height:60px;\r\n  text-align:center;\r\n}\r\n.weui-gallery__del{\r\n  display:block;\r\n}\r\n.weui-cell_switch{\r\n  padding-top:6.5px;\r\n  padding-bottom:6.5px;\r\n}\r\n.weui-switch{\r\n  -webkit-appearance:none;\r\n          appearance:none;\r\n}\r\n.weui-switch,\r\n.weui-switch-cp__box{\r\n  position:relative;\r\n  width:52px;\r\n  height:32px;\r\n  border:1px solid #DFDFDF;\r\n  outline:0;\r\n  border-radius:16px;\r\n  box-sizing:border-box;\r\n  background-color:#DFDFDF;\r\n  -webkit-transition:background-color 0.1s, border 0.1s;\r\n  transition:background-color 0.1s, border 0.1s;\r\n}\r\n.weui-switch:before,\r\n.weui-switch-cp__box:before{\r\n  content:\" \";\r\n  position:absolute;\r\n  top:0;\r\n  left:0;\r\n  width:50px;\r\n  height:30px;\r\n  border-radius:15px;\r\n  background-color:#FDFDFD;\r\n  -webkit-transition:-webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);\r\n  transition:-webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);\r\n  transition:transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);\r\n  transition:transform 0.35s cubic-bezier(0.45, 1, 0.4, 1), -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);\r\n}\r\n.weui-switch:after,\r\n.weui-switch-cp__box:after{\r\n  content:\" \";\r\n  position:absolute;\r\n  top:0;\r\n  left:0;\r\n  width:30px;\r\n  height:30px;\r\n  border-radius:15px;\r\n  background-color:#FFFFFF;\r\n  box-shadow:0 1px 3px rgba(0, 0, 0, 0.4);\r\n  -webkit-transition:-webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);\r\n  transition:-webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);\r\n  transition:transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);\r\n  transition:transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35), -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);\r\n}\r\n.weui-switch:checked,\r\n.weui-switch-cp__input:checked ~ .weui-switch-cp__box{\r\n  border-color:#04BE02;\r\n  background-color:#04BE02;\r\n}\r\n.weui-switch:checked:before,\r\n.weui-switch-cp__input:checked ~ .weui-switch-cp__box:before{\r\n  -webkit-transform:scale(0);\r\n          transform:scale(0);\r\n}\r\n.weui-switch:checked:after,\r\n.weui-switch-cp__input:checked ~ .weui-switch-cp__box:after{\r\n  -webkit-transform:translateX(20px);\r\n          transform:translateX(20px);\r\n}\r\n.weui-switch-cp__input{\r\n  position:absolute;\r\n  left:-9999px;\r\n}\r\n.weui-switch-cp__box{\r\n  display:block;\r\n}\r\n.weui-uploader__hd{\r\n  display:-webkit-box;\r\n  display:-webkit-flex;\r\n  display:flex;\r\n  padding-bottom:10px;\r\n  -webkit-box-align:center;\r\n  -webkit-align-items:center;\r\n          align-items:center;\r\n}\r\n.weui-uploader__title{\r\n  -webkit-box-flex:1;\r\n  -webkit-flex:1;\r\n          flex:1;\r\n}\r\n.weui-uploader__info{\r\n  color:#B2B2B2;\r\n}\r\n.weui-uploader__bd{\r\n  margin-bottom:-4px;\r\n  margin-right:-9px;\r\n  overflow:hidden;\r\n}\r\n.weui-uploader__files{\r\n  list-style:none;\r\n}\r\n.weui-uploader__file{\r\n  float:left;\r\n  margin-right:9px;\r\n  margin-bottom:9px;\r\n  width:79px;\r\n  height:79px;\r\n  background:no-repeat center center;\r\n  background-size:cover;\r\n}\r\n.weui-uploader__file_status{\r\n  position:relative;\r\n}\r\n.weui-uploader__file_status:before{\r\n  content:\" \";\r\n  position:absolute;\r\n  top:0;\r\n  right:0;\r\n  bottom:0;\r\n  left:0;\r\n  background-color:rgba(0, 0, 0, 0.5);\r\n}\r\n.weui-uploader__file_status .weui-uploader__file-content{\r\n  display:block;\r\n}\r\n.weui-uploader__file-content{\r\n  display:none;\r\n  position:absolute;\r\n  top:50%;\r\n  left:50%;\r\n  -webkit-transform:translate(-50%, -50%);\r\n          transform:translate(-50%, -50%);\r\n  color:#FFFFFF;\r\n}\r\n.weui-uploader__file-content .weui-icon-warn{\r\n  display:inline-block;\r\n}\r\n.weui-uploader__input-box{\r\n  float:left;\r\n  position:relative;\r\n  margin-right:9px;\r\n  margin-bottom:9px;\r\n  width:77px;\r\n  height:77px;\r\n  border:1px solid #D9D9D9;\r\n}\r\n.weui-uploader__input-box:before,\r\n.weui-uploader__input-box:after{\r\n  content:\" \";\r\n  position:absolute;\r\n  top:50%;\r\n  left:50%;\r\n  -webkit-transform:translate(-50%, -50%);\r\n          transform:translate(-50%, -50%);\r\n  background-color:#D9D9D9;\r\n}\r\n.weui-uploader__input-box:before{\r\n  width:2px;\r\n  height:39.5px;\r\n}\r\n.weui-uploader__input-box:after{\r\n  width:39.5px;\r\n  height:2px;\r\n}\r\n.weui-uploader__input-box:active{\r\n  border-color:#999999;\r\n}\r\n.weui-uploader__input-box:active:before,\r\n.weui-uploader__input-box:active:after{\r\n  background-color:#999999;\r\n}\r\n.weui-uploader__input{\r\n  position:absolute;\r\n  z-index:1;\r\n  top:0;\r\n  left:0;\r\n  width:100%;\r\n  height:100%;\r\n  opacity:0;\r\n  -webkit-tap-highlight-color:rgba(0, 0, 0, 0);\r\n}\r\n.weui-msg{\r\n  padding-top:36px;\r\n  text-align:center;\r\n}\r\n.weui-msg__icon-area{\r\n  margin-bottom:30px;\r\n}\r\n.weui-msg__text-area{\r\n  margin-bottom:25px;\r\n  padding:0 20px;\r\n}\r\n.weui-msg__text-area a{\r\n  color:#586C94;\r\n}\r\n.weui-msg__title{\r\n  margin-bottom:5px;\r\n  font-weight:400;\r\n  font-size:20px;\r\n  word-wrap:break-word;\r\n  word-break:break-all;\r\n}\r\n.weui-msg__desc{\r\n  font-size:14px;\r\n  color:#999999;\r\n  word-wrap:break-word;\r\n  word-break:break-all;\r\n}\r\n.weui-msg__opr-area{\r\n  margin-bottom:25px;\r\n}\r\n.weui-msg__extra-area{\r\n  margin-bottom:15px;\r\n  font-size:14px;\r\n  color:#999999;\r\n}\r\n.weui-msg__extra-area a{\r\n  color:#586C94;\r\n}\r\n@media screen and (min-height: 438px){\r\n  .weui-msg__extra-area{\r\n    position:fixed;\r\n    left:0;\r\n    bottom:0;\r\n    width:100%;\r\n    text-align:center;\r\n  }\r\n}\r\n@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3){\r\n  .weui-msg__extra-area{\r\n    margin-bottom:49px;\r\n  }\r\n}\r\n.weui-article{\r\n  padding:20px 15px;\r\n  font-size:15px;\r\n}\r\n.weui-article section{\r\n  margin-bottom:1.5em;\r\n}\r\n.weui-article h1{\r\n  font-size:18px;\r\n  font-weight:400;\r\n  margin-bottom:.9em;\r\n}\r\n.weui-article h2{\r\n  font-size:16px;\r\n  font-weight:400;\r\n  margin-bottom:.34em;\r\n}\r\n.weui-article h3{\r\n  font-weight:400;\r\n  font-size:15px;\r\n  margin-bottom:.34em;\r\n}\r\n.weui-article *{\r\n  max-width:100%;\r\n  box-sizing:border-box;\r\n  word-wrap:break-word;\r\n}\r\n.weui-article p{\r\n  margin:0 0 .8em;\r\n}\r\n.weui-tabbar{\r\n  display:-webkit-box;\r\n  display:-webkit-flex;\r\n  display:flex;\r\n  position:absolute;\r\n  z-index:500;\r\n  bottom:0;\r\n  width:100%;\r\n  background-color:#F7F7FA;\r\n}\r\n.weui-tabbar:before{\r\n  content:\" \";\r\n  position:absolute;\r\n  left:0;\r\n  top:0;\r\n  right:0;\r\n  height:1px;\r\n  border-top:1px solid #C0BFC4;\r\n  color:#C0BFC4;\r\n  -webkit-transform-origin:0 0;\r\n          transform-origin:0 0;\r\n  -webkit-transform:scaleY(0.5);\r\n          transform:scaleY(0.5);\r\n}\r\n.weui-tabbar__item{\r\n  display:block;\r\n  -webkit-box-flex:1;\r\n  -webkit-flex:1;\r\n          flex:1;\r\n  padding:5px 0 0;\r\n  font-size:0;\r\n  color:#999999;\r\n  text-align:center;\r\n  -webkit-tap-highlight-color:rgba(0, 0, 0, 0);\r\n}\r\n.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon,\r\n.weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon > i,\r\n.weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{\r\n  color:#09BB07;\r\n}\r\n.weui-tabbar__icon{\r\n  display:inline-block;\r\n  width:27px;\r\n  height:27px;\r\n}\r\ni.weui-tabbar__icon,\r\n.weui-tabbar__icon > i{\r\n  font-size:24px;\r\n  color:#999999;\r\n}\r\n.weui-tabbar__icon img{\r\n  width:100%;\r\n  height:100%;\r\n}\r\n.weui-tabbar__label{\r\n  text-align:center;\r\n  color:#999999;\r\n  font-size:10px;\r\n  line-height:1.8;\r\n}\r\n.weui-navbar{\r\n  display:-webkit-box;\r\n  display:-webkit-flex;\r\n  display:flex;\r\n  position:absolute;\r\n  z-index:500;\r\n  top:0;\r\n  width:100%;\r\n  background-color:#FAFAFA;\r\n}\r\n.weui-navbar:after{\r\n  content:\" \";\r\n  position:absolute;\r\n  left:0;\r\n  bottom:0;\r\n  right:0;\r\n  height:1px;\r\n  border-bottom:1px solid #CCCCCC;\r\n  color:#CCCCCC;\r\n  -webkit-transform-origin:0 100%;\r\n          transform-origin:0 100%;\r\n  -webkit-transform:scaleY(0.5);\r\n          transform:scaleY(0.5);\r\n}\r\n.weui-navbar + .weui-tab__panel{\r\n  padding-top:50px;\r\n  padding-bottom:0;\r\n}\r\n.weui-navbar__item{\r\n  position:relative;\r\n  display:block;\r\n  -webkit-box-flex:1;\r\n  -webkit-flex:1;\r\n          flex:1;\r\n  padding:13px 0;\r\n  text-align:center;\r\n  font-size:15px;\r\n  -webkit-tap-highlight-color:rgba(0, 0, 0, 0);\r\n}\r\n.weui-navbar__item:active{\r\n  background-color:#EDEDED;\r\n}\r\n.weui-navbar__item.weui-bar__item_on{\r\n  background-color:#EAEAEA;\r\n}\r\n.weui-navbar__item:after{\r\n  content:\" \";\r\n  position:absolute;\r\n  right:0;\r\n  top:0;\r\n  width:1px;\r\n  bottom:0;\r\n  border-right:1px solid #CCCCCC;\r\n  color:#CCCCCC;\r\n  -webkit-transform-origin:100% 0;\r\n          transform-origin:100% 0;\r\n  -webkit-transform:scaleX(0.5);\r\n          transform:scaleX(0.5);\r\n}\r\n.weui-navbar__item:last-child:after{\r\n  display:none;\r\n}\r\n.weui-tab{\r\n  position:relative;\r\n  height:100%;\r\n}\r\n.weui-tab__panel{\r\n  box-sizing:border-box;\r\n  height:100%;\r\n  padding-bottom:50px;\r\n  overflow:auto;\r\n  -webkit-overflow-scrolling:touch;\r\n}\r\n.weui-tab__content{\r\n  display:none;\r\n}\r\n.weui-progress{\r\n  display:-webkit-box;\r\n  display:-webkit-flex;\r\n  display:flex;\r\n  -webkit-box-align:center;\r\n  -webkit-align-items:center;\r\n          align-items:center;\r\n}\r\n.weui-progress__bar{\r\n  background-color:#EBEBEB;\r\n  height:3px;\r\n  -webkit-box-flex:1;\r\n  -webkit-flex:1;\r\n          flex:1;\r\n}\r\n.weui-progress__inner-bar{\r\n  width:0;\r\n  height:100%;\r\n  background-color:#09BB07;\r\n}\r\n.weui-progress__opr{\r\n  display:block;\r\n  margin-left:15px;\r\n  font-size:0;\r\n}\r\n.weui-panel{\r\n  background-color:#FFFFFF;\r\n  margin-top:10px;\r\n  position:relative;\r\n  overflow:hidden;\r\n}\r\n.weui-panel:first-child{\r\n  margin-top:0;\r\n}\r\n.weui-panel:before{\r\n  content:\" \";\r\n  position:absolute;\r\n  left:0;\r\n  top:0;\r\n  right:0;\r\n  height:1px;\r\n  border-top:1px solid #E5E5E5;\r\n  color:#E5E5E5;\r\n  -webkit-transform-origin:0 0;\r\n          transform-origin:0 0;\r\n  -webkit-transform:scaleY(0.5);\r\n          transform:scaleY(0.5);\r\n}\r\n.weui-panel:after{\r\n  content:\" \";\r\n  position:absolute;\r\n  left:0;\r\n  bottom:0;\r\n  right:0;\r\n  height:1px;\r\n  border-bottom:1px solid #E5E5E5;\r\n  color:#E5E5E5;\r\n  -webkit-transform-origin:0 100%;\r\n          transform-origin:0 100%;\r\n  -webkit-transform:scaleY(0.5);\r\n          transform:scaleY(0.5);\r\n}\r\n.weui-panel__hd{\r\n  padding:14px 15px 10px;\r\n  color:#999999;\r\n  font-size:13px;\r\n  position:relative;\r\n}\r\n.weui-panel__hd:after{\r\n  content:\" \";\r\n  position:absolute;\r\n  left:0;\r\n  bottom:0;\r\n  right:0;\r\n  height:1px;\r\n  border-bottom:1px solid #E5E5E5;\r\n  color:#E5E5E5;\r\n  -webkit-transform-origin:0 100%;\r\n          transform-origin:0 100%;\r\n  -webkit-transform:scaleY(0.5);\r\n          transform:scaleY(0.5);\r\n  left:15px;\r\n}\r\n.weui-media-box{\r\n  padding:15px;\r\n  position:relative;\r\n}\r\n.weui-media-box:before{\r\n  content:\" \";\r\n  position:absolute;\r\n  left:0;\r\n  top:0;\r\n  right:0;\r\n  height:1px;\r\n  border-top:1px solid #E5E5E5;\r\n  color:#E5E5E5;\r\n  -webkit-transform-origin:0 0;\r\n          transform-origin:0 0;\r\n  -webkit-transform:scaleY(0.5);\r\n          transform:scaleY(0.5);\r\n  left:15px;\r\n}\r\n.weui-media-box:first-child:before{\r\n  display:none;\r\n}\r\na.weui-media-box{\r\n  color:#000000;\r\n  -webkit-tap-highlight-color:rgba(0, 0, 0, 0);\r\n}\r\na.weui-media-box:active{\r\n  background-color:#ECECEC;\r\n}\r\n.weui-media-box__title{\r\n  font-weight:400;\r\n  font-size:17px;\r\n  width:auto;\r\n  overflow:hidden;\r\n  text-overflow:ellipsis;\r\n  white-space:nowrap;\r\n  word-wrap:normal;\r\n  word-wrap:break-word;\r\n  word-break:break-all;\r\n}\r\n.weui-media-box__desc{\r\n  color:#999999;\r\n  font-size:13px;\r\n  line-height:1.2;\r\n  overflow:hidden;\r\n  text-overflow:ellipsis;\r\n  display:-webkit-box;\r\n  -webkit-box-orient:vertical;\r\n  -webkit-line-clamp:2;\r\n}\r\n.weui-media-box__info{\r\n  margin-top:15px;\r\n  padding-bottom:5px;\r\n  font-size:13px;\r\n  color:#CECECE;\r\n  line-height:1em;\r\n  list-style:none;\r\n  overflow:hidden;\r\n}\r\n.weui-media-box__info__meta{\r\n  float:left;\r\n  padding-right:1em;\r\n}\r\n.weui-media-box__info__meta_extra{\r\n  padding-left:1em;\r\n  border-left:1px solid #CECECE;\r\n}\r\n.weui-media-box_text .weui-media-box__title{\r\n  margin-bottom:8px;\r\n}\r\n.weui-media-box_appmsg{\r\n  display:-webkit-box;\r\n  display:-webkit-flex;\r\n  display:flex;\r\n  -webkit-box-align:center;\r\n  -webkit-align-items:center;\r\n          align-items:center;\r\n}\r\n.weui-media-box_appmsg .weui-media-box__hd{\r\n  margin-right:.8em;\r\n  width:60px;\r\n  height:60px;\r\n  line-height:60px;\r\n  text-align:center;\r\n}\r\n.weui-media-box_appmsg .weui-media-box__thumb{\r\n  width:100%;\r\n  max-height:100%;\r\n  vertical-align:top;\r\n}\r\n.weui-media-box_appmsg .weui-media-box__bd{\r\n  -webkit-box-flex:1;\r\n  -webkit-flex:1;\r\n          flex:1;\r\n  min-width:0;\r\n}\r\n.weui-media-box_small-appmsg{\r\n  padding:0;\r\n}\r\n.weui-media-box_small-appmsg .weui-cells{\r\n  margin-top:0;\r\n}\r\n.weui-media-box_small-appmsg .weui-cells:before{\r\n  display:none;\r\n}\r\n.weui-grids{\r\n  position:relative;\r\n  overflow:hidden;\r\n}\r\n.weui-grids:before{\r\n  content:\" \";\r\n  position:absolute;\r\n  left:0;\r\n  top:0;\r\n  right:0;\r\n  height:1px;\r\n  border-top:1px solid #D9D9D9;\r\n  color:#D9D9D9;\r\n  -webkit-transform-origin:0 0;\r\n          transform-origin:0 0;\r\n  -webkit-transform:scaleY(0.5);\r\n          transform:scaleY(0.5);\r\n}\r\n.weui-grids:after{\r\n  content:\" \";\r\n  position:absolute;\r\n  left:0;\r\n  top:0;\r\n  width:1px;\r\n  bottom:0;\r\n  border-left:1px solid #D9D9D9;\r\n  color:#D9D9D9;\r\n  -webkit-transform-origin:0 0;\r\n          transform-origin:0 0;\r\n  -webkit-transform:scaleX(0.5);\r\n          transform:scaleX(0.5);\r\n}\r\n.weui-grid{\r\n  position:relative;\r\n  float:left;\r\n  padding:20px 10px;\r\n  width:33.33333333%;\r\n  box-sizing:border-box;\r\n}\r\n.weui-grid:before{\r\n  content:\" \";\r\n  position:absolute;\r\n  right:0;\r\n  top:0;\r\n  width:1px;\r\n  bottom:0;\r\n  border-right:1px solid #D9D9D9;\r\n  color:#D9D9D9;\r\n  -webkit-transform-origin:100% 0;\r\n          transform-origin:100% 0;\r\n  -webkit-transform:scaleX(0.5);\r\n          transform:scaleX(0.5);\r\n}\r\n.weui-grid:after{\r\n  content:\" \";\r\n  position:absolute;\r\n  left:0;\r\n  bottom:0;\r\n  right:0;\r\n  height:1px;\r\n  border-bottom:1px solid #D9D9D9;\r\n  color:#D9D9D9;\r\n  -webkit-transform-origin:0 100%;\r\n          transform-origin:0 100%;\r\n  -webkit-transform:scaleY(0.5);\r\n          transform:scaleY(0.5);\r\n}\r\n.weui-grid:active{\r\n  background-color:#ECECEC;\r\n}\r\n.weui-grid__icon{\r\n  width:28px;\r\n  height:28px;\r\n  margin:0 auto;\r\n}\r\n.weui-grid__icon img{\r\n  display:block;\r\n  width:100%;\r\n  height:100%;\r\n}\r\n.weui-grid__icon + .weui-grid__label{\r\n  margin-top:5px;\r\n}\r\n.weui-grid__label{\r\n  display:block;\r\n  text-align:center;\r\n  color:#000000;\r\n  font-size:14px;\r\n  white-space:nowrap;\r\n  text-overflow:ellipsis;\r\n  overflow:hidden;\r\n}\r\n.weui-footer{\r\n  color:#999999;\r\n  font-size:14px;\r\n  text-align:center;\r\n}\r\n.weui-footer a{\r\n  color:#586C94;\r\n}\r\n.weui-footer_fixed-bottom{\r\n  position:fixed;\r\n  bottom:.52em;\r\n  left:0;\r\n  right:0;\r\n}\r\n.weui-footer__links{\r\n  font-size:0;\r\n}\r\n.weui-footer__link{\r\n  display:inline-block;\r\n  vertical-align:top;\r\n  margin:0 .62em;\r\n  position:relative;\r\n  font-size:14px;\r\n}\r\n.weui-footer__link:before{\r\n  content:\" \";\r\n  position:absolute;\r\n  left:0;\r\n  top:0;\r\n  width:1px;\r\n  bottom:0;\r\n  border-left:1px solid #C7C7C7;\r\n  color:#C7C7C7;\r\n  -webkit-transform-origin:0 0;\r\n          transform-origin:0 0;\r\n  -webkit-transform:scaleX(0.5);\r\n          transform:scaleX(0.5);\r\n  left:-0.65em;\r\n  top:.36em;\r\n  bottom:.36em;\r\n}\r\n.weui-footer__link:first-child:before{\r\n  display:none;\r\n}\r\n.weui-footer__text{\r\n  padding:0 .34em;\r\n  font-size:12px;\r\n}\r\n.weui-flex{\r\n  display:-webkit-box;\r\n  display:-webkit-flex;\r\n  display:flex;\r\n}\r\n.weui-flex__item{\r\n  -webkit-box-flex:1;\r\n  -webkit-flex:1;\r\n          flex:1;\r\n}\r\n.weui-dialog{\r\n  position:fixed;\r\n  z-index:5000;\r\n  width:80%;\r\n  max-width:300px;\r\n  top:50%;\r\n  left:50%;\r\n  -webkit-transform:translate(-50%, -50%);\r\n          transform:translate(-50%, -50%);\r\n  background-color:#FFFFFF;\r\n  text-align:center;\r\n  border-radius:3px;\r\n  overflow:hidden;\r\n}\r\n.weui-dialog__hd{\r\n  padding:1.3em 1.6em 0.5em;\r\n}\r\n.weui-dialog__title{\r\n  font-weight:400;\r\n  font-size:18px;\r\n}\r\n.weui-dialog__bd{\r\n  padding:0 1.6em 0.8em;\r\n  min-height:40px;\r\n  font-size:15px;\r\n  line-height:1.3;\r\n  word-wrap:break-word;\r\n  word-break:break-all;\r\n  color:#999999;\r\n}\r\n.weui-dialog__bd:first-child{\r\n  padding:2.7em 20px 1.7em;\r\n  color:#353535;\r\n}\r\n.weui-dialog__ft{\r\n  position:relative;\r\n  line-height:48px;\r\n  font-size:18px;\r\n  display:-webkit-box;\r\n  display:-webkit-flex;\r\n  display:flex;\r\n}\r\n.weui-dialog__ft:after{\r\n  content:\" \";\r\n  position:absolute;\r\n  left:0;\r\n  top:0;\r\n  right:0;\r\n  height:1px;\r\n  border-top:1px solid #D5D5D6;\r\n  color:#D5D5D6;\r\n  -webkit-transform-origin:0 0;\r\n          transform-origin:0 0;\r\n  -webkit-transform:scaleY(0.5);\r\n          transform:scaleY(0.5);\r\n}\r\n.weui-dialog__btn{\r\n  display:block;\r\n  -webkit-box-flex:1;\r\n  -webkit-flex:1;\r\n          flex:1;\r\n  color:#3CC51F;\r\n  text-decoration:none;\r\n  -webkit-tap-highlight-color:rgba(0, 0, 0, 0);\r\n  position:relative;\r\n}\r\n.weui-dialog__btn:active{\r\n  background-color:#EEEEEE;\r\n}\r\n.weui-dialog__btn:after{\r\n  content:\" \";\r\n  position:absolute;\r\n  left:0;\r\n  top:0;\r\n  width:1px;\r\n  bottom:0;\r\n  border-left:1px solid #D5D5D6;\r\n  color:#D5D5D6;\r\n  -webkit-transform-origin:0 0;\r\n          transform-origin:0 0;\r\n  -webkit-transform:scaleX(0.5);\r\n          transform:scaleX(0.5);\r\n}\r\n.weui-dialog__btn:first-child:after{\r\n  display:none;\r\n}\r\n.weui-dialog__btn_default{\r\n  color:#353535;\r\n}\r\n.weui-dialog__btn_primary{\r\n  color:#0BB20C;\r\n}\r\n.weui-skin_android .weui-dialog{\r\n  text-align:left;\r\n  box-shadow:0 6px 30px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n.weui-skin_android .weui-dialog__title{\r\n  font-size:21px;\r\n}\r\n.weui-skin_android .weui-dialog__hd{\r\n  text-align:left;\r\n}\r\n.weui-skin_android .weui-dialog__bd{\r\n  color:#999999;\r\n  padding:0.25em 1.6em 2em;\r\n  font-size:17px;\r\n  text-align:left;\r\n}\r\n.weui-skin_android .weui-dialog__bd:first-child{\r\n  padding:1.6em 1.6em 2em;\r\n  color:#353535;\r\n}\r\n.weui-skin_android .weui-dialog__ft{\r\n  display:block;\r\n  text-align:right;\r\n  line-height:42px;\r\n  font-size:16px;\r\n  padding:0 1.6em 0.7em;\r\n}\r\n.weui-skin_android .weui-dialog__ft:after{\r\n  display:none;\r\n}\r\n.weui-skin_android .weui-dialog__btn{\r\n  display:inline-block;\r\n  vertical-align:top;\r\n  padding:0 .8em;\r\n}\r\n.weui-skin_android .weui-dialog__btn:after{\r\n  display:none;\r\n}\r\n.weui-skin_android .weui-dialog__btn:active{\r\n  background-color:rgba(0, 0, 0, 0.06);\r\n}\r\n.weui-skin_android .weui-dialog__btn:visited{\r\n  background-color:rgba(0, 0, 0, 0.06);\r\n}\r\n.weui-skin_android .weui-dialog__btn:last-child{\r\n  margin-right:-0.8em;\r\n}\r\n.weui-skin_android .weui-dialog__btn_default{\r\n  color:#808080;\r\n}\r\n@media screen and (min-width: 1024px){\r\n  .weui-dialog{\r\n    width:35%;\r\n  }\r\n}\r\n.weui-toast{\r\n  position:fixed;\r\n  z-index:5000;\r\n  width:7.6em;\r\n  min-height:7.6em;\r\n  top:180px;\r\n  left:50%;\r\n  margin-left:-3.8em;\r\n  background:rgba(17, 17, 17, 0.7);\r\n  text-align:center;\r\n  border-radius:5px;\r\n  color:#FFFFFF;\r\n}\r\n.weui-icon_toast{\r\n  margin:22px 0 0;\r\n  display:block;\r\n}\r\n.weui-icon_toast.weui-icon-success-no-circle:before{\r\n  color:#FFFFFF;\r\n  font-size:55px;\r\n}\r\n.weui-icon_toast.weui-loading{\r\n  margin:30px 0 0;\r\n  width:38px;\r\n  height:38px;\r\n  vertical-align:baseline;\r\n}\r\n.weui-toast__content{\r\n  margin:0 0 15px;\r\n}\r\n.weui-mask{\r\n  position:fixed;\r\n  z-index:1000;\r\n  top:0;\r\n  right:0;\r\n  left:0;\r\n  bottom:0;\r\n  background:rgba(0, 0, 0, 0.6);\r\n}\r\n.weui-mask_transparent{\r\n  position:fixed;\r\n  z-index:1000;\r\n  top:0;\r\n  right:0;\r\n  left:0;\r\n  bottom:0;\r\n}\r\n.weui-actionsheet{\r\n  position:fixed;\r\n  left:0;\r\n  bottom:0;\r\n  -webkit-transform:translate(0, 100%);\r\n          transform:translate(0, 100%);\r\n  -webkit-backface-visibility:hidden;\r\n          backface-visibility:hidden;\r\n  z-index:5000;\r\n  width:100%;\r\n  background-color:#EFEFF4;\r\n  -webkit-transition:-webkit-transform .3s;\r\n  transition:-webkit-transform .3s;\r\n  transition:transform .3s;\r\n  transition:transform .3s, -webkit-transform .3s;\r\n}\r\n.weui-actionsheet__title{\r\n  position:relative;\r\n  height:65px;\r\n  padding:0 20px;\r\n  line-height:1.4;\r\n  display:-webkit-box;\r\n  display:-webkit-flex;\r\n  display:flex;\r\n  -webkit-box-pack:center;\r\n  -webkit-justify-content:center;\r\n          justify-content:center;\r\n  -webkit-box-orient:vertical;\r\n  -webkit-box-direction:normal;\r\n  -webkit-flex-direction:column;\r\n          flex-direction:column;\r\n  text-align:center;\r\n  font-size:14px;\r\n  color:#888;\r\n  background:#FCFCFD;\r\n}\r\n.weui-actionsheet__title:before{\r\n  content:\" \";\r\n  position:absolute;\r\n  left:0;\r\n  bottom:0;\r\n  right:0;\r\n  height:1px;\r\n  border-bottom:1px solid #e5e5e5;\r\n  color:#e5e5e5;\r\n  -webkit-transform-origin:0 100%;\r\n          transform-origin:0 100%;\r\n  -webkit-transform:scaleY(0.5);\r\n          transform:scaleY(0.5);\r\n}\r\n.weui-actionsheet__title .weui-actionsheet__title-text{\r\n  overflow:hidden;\r\n  text-overflow:ellipsis;\r\n  display:-webkit-box;\r\n  -webkit-box-orient:vertical;\r\n  -webkit-line-clamp:2;\r\n}\r\n.weui-actionsheet__menu{\r\n  background-color:#FCFCFD;\r\n}\r\n.weui-actionsheet__action{\r\n  margin-top:6px;\r\n  background-color:#FCFCFD;\r\n}\r\n.weui-actionsheet__cell{\r\n  position:relative;\r\n  padding:10px 0;\r\n  text-align:center;\r\n  font-size:18px;\r\n}\r\n.weui-actionsheet__cell:before{\r\n  content:\" \";\r\n  position:absolute;\r\n  left:0;\r\n  top:0;\r\n  right:0;\r\n  height:1px;\r\n  border-top:1px solid #e5e5e5;\r\n  color:#e5e5e5;\r\n  -webkit-transform-origin:0 0;\r\n          transform-origin:0 0;\r\n  -webkit-transform:scaleY(0.5);\r\n          transform:scaleY(0.5);\r\n}\r\n.weui-actionsheet__cell:active{\r\n  background-color:#ECECEC;\r\n}\r\n.weui-actionsheet__cell:first-child:before{\r\n  display:none;\r\n}\r\n.weui-skin_android .weui-actionsheet{\r\n  position:fixed;\r\n  left:50%;\r\n  top:50%;\r\n  bottom:auto;\r\n  -webkit-transform:translate(-50%, -50%);\r\n          transform:translate(-50%, -50%);\r\n  width:274px;\r\n  box-sizing:border-box;\r\n  -webkit-backface-visibility:hidden;\r\n          backface-visibility:hidden;\r\n  background:transparent;\r\n  -webkit-transition:-webkit-transform .3s;\r\n  transition:-webkit-transform .3s;\r\n  transition:transform .3s;\r\n  transition:transform .3s, -webkit-transform .3s;\r\n}\r\n.weui-skin_android .weui-actionsheet__action{\r\n  display:none;\r\n}\r\n.weui-skin_android .weui-actionsheet__menu{\r\n  border-radius:2px;\r\n  box-shadow:0 6px 30px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n.weui-skin_android .weui-actionsheet__cell{\r\n  padding:13px 24px;\r\n  font-size:16px;\r\n  line-height:1.4;\r\n  text-align:left;\r\n}\r\n.weui-skin_android .weui-actionsheet__cell:first-child{\r\n  border-top-left-radius:2px;\r\n  border-top-right-radius:2px;\r\n}\r\n.weui-skin_android .weui-actionsheet__cell:last-child{\r\n  border-bottom-left-radius:2px;\r\n  border-bottom-right-radius:2px;\r\n}\r\n.weui-actionsheet_toggle{\r\n  -webkit-transform:translate(0, 0);\r\n          transform:translate(0, 0);\r\n}\r\n.weui-loadmore{\r\n  width:65%;\r\n  margin:1.5em auto;\r\n  line-height:1.6em;\r\n  font-size:14px;\r\n  text-align:center;\r\n}\r\n.weui-loadmore__tips{\r\n  display:inline-block;\r\n  vertical-align:middle;\r\n}\r\n.weui-loadmore_line{\r\n  border-top:1px solid #E5E5E5;\r\n  margin-top:2.4em;\r\n}\r\n.weui-loadmore_line .weui-loadmore__tips{\r\n  position:relative;\r\n  top:-0.9em;\r\n  padding:0 .55em;\r\n  background-color:#FFFFFF;\r\n  color:#999999;\r\n}\r\n.weui-loadmore_dot .weui-loadmore__tips{\r\n  padding:0 .16em;\r\n}\r\n.weui-loadmore_dot .weui-loadmore__tips:before{\r\n  content:\" \";\r\n  width:4px;\r\n  height:4px;\r\n  border-radius:50%;\r\n  background-color:#E5E5E5;\r\n  display:inline-block;\r\n  position:relative;\r\n  vertical-align:0;\r\n  top:-0.16em;\r\n}\r\n.weui-badge{\r\n  display:inline-block;\r\n  padding:.15em .4em;\r\n  min-width:8px;\r\n  border-radius:18px;\r\n  background-color:#F43530;\r\n  color:#FFFFFF;\r\n  line-height:1.2;\r\n  text-align:center;\r\n  font-size:12px;\r\n  vertical-align:middle;\r\n}\r\n.weui-badge_dot{\r\n  padding:.4em;\r\n  min-width:0;\r\n}\r\n.weui-search-bar{\r\n  position:relative;\r\n  padding:8px 10px;\r\n  display:-webkit-box;\r\n  display:-webkit-flex;\r\n  display:flex;\r\n  box-sizing:border-box;\r\n  background-color:#EFEFF4;\r\n  -webkit-text-size-adjust:100%;\r\n  -webkit-box-align:center;\r\n  -webkit-align-items:center;\r\n          align-items:center;\r\n}\r\n.weui-search-bar:before{\r\n  content:\" \";\r\n  position:absolute;\r\n  left:0;\r\n  top:0;\r\n  right:0;\r\n  height:1px;\r\n  border-top:1px solid #D7D6DC;\r\n  color:#D7D6DC;\r\n  -webkit-transform-origin:0 0;\r\n          transform-origin:0 0;\r\n  -webkit-transform:scaleY(0.5);\r\n          transform:scaleY(0.5);\r\n}\r\n.weui-search-bar:after{\r\n  content:\" \";\r\n  position:absolute;\r\n  left:0;\r\n  bottom:0;\r\n  right:0;\r\n  height:1px;\r\n  border-bottom:1px solid #D7D6DC;\r\n  color:#D7D6DC;\r\n  -webkit-transform-origin:0 100%;\r\n          transform-origin:0 100%;\r\n  -webkit-transform:scaleY(0.5);\r\n          transform:scaleY(0.5);\r\n}\r\n.weui-search-bar.weui-search-bar_focusing .weui-search-bar__cancel-btn{\r\n  display:block;\r\n}\r\n.weui-search-bar.weui-search-bar_focusing .weui-search-bar__label{\r\n  display:none;\r\n}\r\n.weui-search-bar__form{\r\n  position:relative;\r\n  -webkit-box-flex:1;\r\n  -webkit-flex:auto;\r\n          flex:auto;\r\n  background-color:#EFEFF4;\r\n}\r\n.weui-search-bar__form:after{\r\n  content:'';\r\n  position:absolute;\r\n  left:0;\r\n  top:0;\r\n  width:200%;\r\n  height:200%;\r\n  -webkit-transform:scale(0.5);\r\n          transform:scale(0.5);\r\n  -webkit-transform-origin:0 0;\r\n          transform-origin:0 0;\r\n  border-radius:10px;\r\n  border:1px solid #E6E6EA;\r\n  box-sizing:border-box;\r\n  background:#FFFFFF;\r\n}\r\n.weui-search-bar__box{\r\n  position:relative;\r\n  padding-left:30px;\r\n  padding-right:30px;\r\n  height:100%;\r\n  width:100%;\r\n  box-sizing:border-box;\r\n  z-index:1;\r\n}\r\n.weui-search-bar__box .weui-search-bar__input{\r\n  padding:4px 0;\r\n  width:100%;\r\n  height:1.42857143em;\r\n  border:0;\r\n  font-size:14px;\r\n  line-height:1.42857143em;\r\n  box-sizing:content-box;\r\n  background:transparent;\r\n}\r\n.weui-search-bar__box .weui-search-bar__input:focus{\r\n  outline:none;\r\n}\r\n.weui-search-bar__box .weui-icon-search{\r\n  position:absolute;\r\n  top:50%;\r\n  left:10px;\r\n  margin-top:-14px;\r\n  line-height:28px;\r\n}\r\n.weui-search-bar__box .weui-icon-clear{\r\n  position:absolute;\r\n  top:50%;\r\n  right:0;\r\n  margin-top:-14px;\r\n  padding:0 10px;\r\n  line-height:28px;\r\n}\r\n.weui-search-bar__label{\r\n  position:absolute;\r\n  top:1px;\r\n  right:1px;\r\n  bottom:1px;\r\n  left:1px;\r\n  z-index:2;\r\n  border-radius:3px;\r\n  text-align:center;\r\n  color:#9B9B9B;\r\n  background:#FFFFFF;\r\n}\r\n.weui-search-bar__label span{\r\n  display:inline-block;\r\n  font-size:14px;\r\n  vertical-align:middle;\r\n}\r\n.weui-search-bar__label .weui-icon-search{\r\n  margin-right:5px;\r\n}\r\n.weui-search-bar__cancel-btn{\r\n  display:none;\r\n  margin-left:10px;\r\n  line-height:28px;\r\n  color:#09BB07;\r\n  white-space:nowrap;\r\n}\r\n.weui-search-bar__input:not(:valid) ~ .weui-icon-clear{\r\n  display:none;\r\n}\r\ninput[type=\"search\"]::-webkit-search-decoration,\r\ninput[type=\"search\"]::-webkit-search-cancel-button,\r\ninput[type=\"search\"]::-webkit-search-results-button,\r\ninput[type=\"search\"]::-webkit-search-results-decoration{\r\n  display:none;\r\n}\r\n.weui-picker{\r\n  position:fixed;\r\n  width:100%;\r\n  left:0;\r\n  bottom:0;\r\n  z-index:5000;\r\n  -webkit-backface-visibility:hidden;\r\n          backface-visibility:hidden;\r\n  -webkit-transform:translate(0, 100%);\r\n          transform:translate(0, 100%);\r\n  -webkit-transition:-webkit-transform .3s;\r\n  transition:-webkit-transform .3s;\r\n  transition:transform .3s;\r\n  transition:transform .3s, -webkit-transform .3s;\r\n}\r\n.weui-picker__hd{\r\n  display:-webkit-box;\r\n  display:-webkit-flex;\r\n  display:flex;\r\n  padding:9px 15px;\r\n  background-color:#fff;\r\n  position:relative;\r\n  text-align:center;\r\n  font-size:17px;\r\n}\r\n.weui-picker__hd:after{\r\n  content:\" \";\r\n  position:absolute;\r\n  left:0;\r\n  bottom:0;\r\n  right:0;\r\n  height:1px;\r\n  border-bottom:1px solid #E5E5E5;\r\n  color:#E5E5E5;\r\n  -webkit-transform-origin:0 100%;\r\n          transform-origin:0 100%;\r\n  -webkit-transform:scaleY(0.5);\r\n          transform:scaleY(0.5);\r\n}\r\n.weui-picker__action{\r\n  display:block;\r\n  -webkit-box-flex:1;\r\n  -webkit-flex:1;\r\n          flex:1;\r\n  color:#1AAD19;\r\n}\r\n.weui-picker__action:first-child{\r\n  text-align:left;\r\n  color:#888;\r\n}\r\n.weui-picker__action:last-child{\r\n  text-align:right;\r\n}\r\n.weui-picker__bd{\r\n  display:-webkit-box;\r\n  display:-webkit-flex;\r\n  display:flex;\r\n  position:relative;\r\n  background-color:#fff;\r\n  height:238px;\r\n  overflow:hidden;\r\n}\r\n.weui-picker__group{\r\n  -webkit-box-flex:1;\r\n  -webkit-flex:1;\r\n          flex:1;\r\n  position:relative;\r\n  height:100%;\r\n}\r\n.weui-picker__mask{\r\n  position:absolute;\r\n  top:0;\r\n  left:0;\r\n  width:100%;\r\n  height:100%;\r\n  margin:0 auto;\r\n  z-index:3;\r\n  background:-webkit-linear-gradient(top, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6)), -webkit-linear-gradient(bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6));\r\n  background:linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6)), linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6));\r\n  background-position:top, bottom;\r\n  background-size:100% 102px;\r\n  background-repeat:no-repeat;\r\n  -webkit-transform:translateZ(0);\r\n          transform:translateZ(0);\r\n}\r\n.weui-picker__indicator{\r\n  width:100%;\r\n  height:34px;\r\n  position:absolute;\r\n  left:0;\r\n  top:102px;\r\n  z-index:3;\r\n}\r\n.weui-picker__indicator:before{\r\n  content:\" \";\r\n  position:absolute;\r\n  left:0;\r\n  top:0;\r\n  right:0;\r\n  height:1px;\r\n  border-top:1px solid #E5E5E5;\r\n  color:#E5E5E5;\r\n  -webkit-transform-origin:0 0;\r\n          transform-origin:0 0;\r\n  -webkit-transform:scaleY(0.5);\r\n          transform:scaleY(0.5);\r\n}\r\n.weui-picker__indicator:after{\r\n  content:\" \";\r\n  position:absolute;\r\n  left:0;\r\n  bottom:0;\r\n  right:0;\r\n  height:1px;\r\n  border-bottom:1px solid #E5E5E5;\r\n  color:#E5E5E5;\r\n  -webkit-transform-origin:0 100%;\r\n          transform-origin:0 100%;\r\n  -webkit-transform:scaleY(0.5);\r\n          transform:scaleY(0.5);\r\n}\r\n.weui-picker__content{\r\n  position:absolute;\r\n  top:0;\r\n  left:0;\r\n  width:100%;\r\n}\r\n.weui-picker__item{\r\n  padding:0;\r\n  height:34px;\r\n  line-height:34px;\r\n  text-align:center;\r\n  color:#000;\r\n  text-overflow:ellipsis;\r\n  white-space:nowrap;\r\n  overflow:hidden;\r\n}\r\n.weui-picker__item_disabled{\r\n  color:#999999;\r\n}\r\n@-webkit-keyframes slideUp{\r\n  from{\r\n    -webkit-transform:translate3d(0, 100%, 0);\r\n            transform:translate3d(0, 100%, 0);\r\n  }\r\n  to{\r\n    -webkit-transform:translate3d(0, 0, 0);\r\n            transform:translate3d(0, 0, 0);\r\n  }\r\n}\r\n@keyframes slideUp{\r\n  from{\r\n    -webkit-transform:translate3d(0, 100%, 0);\r\n            transform:translate3d(0, 100%, 0);\r\n  }\r\n  to{\r\n    -webkit-transform:translate3d(0, 0, 0);\r\n            transform:translate3d(0, 0, 0);\r\n  }\r\n}\r\n.weui-animate-slide-up{\r\n  -webkit-animation:slideUp ease .3s forwards;\r\n          animation:slideUp ease .3s forwards;\r\n}\r\n@-webkit-keyframes slideDown{\r\n  from{\r\n    -webkit-transform:translate3d(0, 0, 0);\r\n            transform:translate3d(0, 0, 0);\r\n  }\r\n  to{\r\n    -webkit-transform:translate3d(0, 100%, 0);\r\n            transform:translate3d(0, 100%, 0);\r\n  }\r\n}\r\n@keyframes slideDown{\r\n  from{\r\n    -webkit-transform:translate3d(0, 0, 0);\r\n            transform:translate3d(0, 0, 0);\r\n  }\r\n  to{\r\n    -webkit-transform:translate3d(0, 100%, 0);\r\n            transform:translate3d(0, 100%, 0);\r\n  }\r\n}\r\n.weui-animate-slide-down{\r\n  -webkit-animation:slideDown ease .3s forwards;\r\n          animation:slideDown ease .3s forwards;\r\n}\r\n@-webkit-keyframes fadeIn{\r\n  from{\r\n    opacity:0;\r\n  }\r\n  to{\r\n    opacity:1;\r\n  }\r\n}\r\n@keyframes fadeIn{\r\n  from{\r\n    opacity:0;\r\n  }\r\n  to{\r\n    opacity:1;\r\n  }\r\n}\r\n.weui-animate-fade-in{\r\n  -webkit-animation:fadeIn ease .3s forwards;\r\n          animation:fadeIn ease .3s forwards;\r\n}\r\n@-webkit-keyframes fadeOut{\r\n  from{\r\n    opacity:1;\r\n  }\r\n  to{\r\n    opacity:0;\r\n  }\r\n}\r\n@keyframes fadeOut{\r\n  from{\r\n    opacity:1;\r\n  }\r\n  to{\r\n    opacity:0;\r\n  }\r\n}\r\n.weui-animate-fade-out{\r\n  -webkit-animation:fadeOut ease .3s forwards;\r\n          animation:fadeOut ease .3s forwards;\r\n}\r\n.weui-agree{\r\n  display:block;\r\n  padding:.5em 15px;\r\n  font-size:13px;\r\n}\r\n.weui-agree a{\r\n  color:#586C94;\r\n}\r\n.weui-agree__text{\r\n  color:#999999;\r\n}\r\n.weui-agree__checkbox{\r\n  -webkit-appearance:none;\r\n          appearance:none;\r\n  outline:0;\r\n  font-size:0;\r\n  border:1px solid #D1D1D1;\r\n  background-color:#FFFFFF;\r\n  border-radius:3px;\r\n  width:13px;\r\n  height:13px;\r\n  position:relative;\r\n  vertical-align:0;\r\n  top:2px;\r\n}\r\n.weui-agree__checkbox:checked:before{\r\n  font-family:\"weui\";\r\n  font-style:normal;\r\n  font-weight:normal;\r\n  font-variant:normal;\r\n  text-transform:none;\r\n  text-align:center;\r\n  speak:none;\r\n  display:inline-block;\r\n  vertical-align:middle;\r\n  text-decoration:inherit;\r\n  content:\"\\EA08\";\r\n  color:#09BB07;\r\n  font-size:13px;\r\n  position:absolute;\r\n  top:50%;\r\n  left:50%;\r\n  -webkit-transform:translate(-50%, -48%) scale(0.73);\r\n          transform:translate(-50%, -48%) scale(0.73);\r\n}\r\n.weui-agree__checkbox:disabled{\r\n  background-color:#E1E1E1;\r\n}\r\n.weui-agree__checkbox:disabled:before{\r\n  color:#ADADAD;\r\n}\r\n.weui-loading{\r\n  width:20px;\r\n  height:20px;\r\n  display:inline-block;\r\n  vertical-align:middle;\r\n  -webkit-animation:weuiLoading 1s steps(12, end) infinite;\r\n          animation:weuiLoading 1s steps(12, end) infinite;\r\n  background:transparent url(\"data:image/svg+xml;charset=utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 100 100'%3E%3Cpath fill='none' d='M0 0h100v100H0z'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23E9E9E9' rx='5' ry='5' transform='translate(0 -30)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23989697' rx='5' ry='5' transform='rotate(30 105.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%239B999A' rx='5' ry='5' transform='rotate(60 75.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23A3A1A2' rx='5' ry='5' transform='rotate(90 65 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23ABA9AA' rx='5' ry='5' transform='rotate(120 58.66 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23B2B2B2' rx='5' ry='5' transform='rotate(150 54.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23BAB8B9' rx='5' ry='5' transform='rotate(180 50 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23C2C0C1' rx='5' ry='5' transform='rotate(-150 45.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23CBCBCB' rx='5' ry='5' transform='rotate(-120 41.34 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23D2D2D2' rx='5' ry='5' transform='rotate(-90 35 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23DADADA' rx='5' ry='5' transform='rotate(-60 24.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23E2E2E2' rx='5' ry='5' transform='rotate(-30 -5.98 65)'/%3E%3C/svg%3E\") no-repeat;\r\n  background-size:100%;\r\n}\r\n.weui-loading.weui-loading_transparent,\r\n.weui-btn_loading.weui-btn_primary .weui-loading,\r\n.weui-btn_loading.weui-btn_warn .weui-loading{\r\n  background-image:url(\"data:image/svg+xml;charset=utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 100 100'%3E%3Cpath fill='none' d='M0 0h100v100H0z'/%3E%3Crect xmlns='http://www.w3.org/2000/svg' width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.56)' rx='5' ry='5' transform='translate(0 -30)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.5)' rx='5' ry='5' transform='rotate(30 105.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.43)' rx='5' ry='5' transform='rotate(60 75.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.38)' rx='5' ry='5' transform='rotate(90 65 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.32)' rx='5' ry='5' transform='rotate(120 58.66 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.28)' rx='5' ry='5' transform='rotate(150 54.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.25)' rx='5' ry='5' transform='rotate(180 50 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.2)' rx='5' ry='5' transform='rotate(-150 45.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.17)' rx='5' ry='5' transform='rotate(-120 41.34 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.14)' rx='5' ry='5' transform='rotate(-90 35 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.1)' rx='5' ry='5' transform='rotate(-60 24.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.03)' rx='5' ry='5' transform='rotate(-30 -5.98 65)'/%3E%3C/svg%3E\");\r\n}\r\n@-webkit-keyframes weuiLoading{\r\n  0%{\r\n    -webkit-transform:rotate3d(0, 0, 1, 0deg);\r\n            transform:rotate3d(0, 0, 1, 0deg);\r\n  }\r\n  100%{\r\n    -webkit-transform:rotate3d(0, 0, 1, 360deg);\r\n            transform:rotate3d(0, 0, 1, 360deg);\r\n  }\r\n}\r\n@keyframes weuiLoading{\r\n  0%{\r\n    -webkit-transform:rotate3d(0, 0, 1, 0deg);\r\n            transform:rotate3d(0, 0, 1, 0deg);\r\n  }\r\n  100%{\r\n    -webkit-transform:rotate3d(0, 0, 1, 360deg);\r\n            transform:rotate3d(0, 0, 1, 360deg);\r\n  }\r\n}\r\n.weui-slider{\r\n  padding:15px 18px;\r\n  -webkit-user-select:none;\r\n          user-select:none;\r\n}\r\n.weui-slider__inner{\r\n  position:relative;\r\n  height:2px;\r\n  background-color:#E9E9E9;\r\n}\r\n.weui-slider__track{\r\n  height:2px;\r\n  background-color:#1AAD19;\r\n  width:0;\r\n}\r\n.weui-slider__handler{\r\n  position:absolute;\r\n  left:0;\r\n  top:50%;\r\n  width:28px;\r\n  height:28px;\r\n  margin-left:-14px;\r\n  margin-top:-14px;\r\n  border-radius:50%;\r\n  background-color:#FFFFFF;\r\n  box-shadow:0 0 4px rgba(0, 0, 0, 0.2);\r\n}\r\n.weui-slider-box{\r\n  display:-webkit-box;\r\n  display:-webkit-flex;\r\n  display:flex;\r\n  -webkit-box-align:center;\r\n  -webkit-align-items:center;\r\n          align-items:center;\r\n}\r\n.weui-slider-box .weui-slider{\r\n  -webkit-box-flex:1;\r\n  -webkit-flex:1;\r\n          flex:1;\r\n}\r\n.weui-slider-box__value{\r\n  margin-left:.5em;\r\n  min-width:24px;\r\n  color:#888888;\r\n  text-align:center;\r\n  font-size:14px;\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/dom7/dist/dom7.modular.js":
/*!************************************************!*\
  !*** ./node_modules/dom7/dist/dom7.modular.js ***!
  \************************************************/
/*! exports provided: $, addClass, removeClass, hasClass, toggleClass, attr, removeAttr, prop, data, removeData, dataset, val, transform, transition, on, off, once, trigger, transitionEnd, animationEnd, width, outerWidth, height, outerHeight, offset, hide, show, styles, css, toArray, each, forEach, filter, map, html, text, is, indexOf, index, eq, append, appendTo, prepend, prependTo, insertBefore, insertAfter, next, nextAll, prev, prevAll, siblings, parent, parents, closest, find, children, remove, detach, add, empty, scrollTo, scrollTop, scrollLeft, animate, stop, click, blur, focus, focusin, focusout, keyup, keydown, keypress, submit, change, mousedown, mousemove, mouseup, mouseenter, mouseleave, mouseout, mouseover, touchstart, touchend, touchmove, resize, scroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return hasClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function() { return toggleClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAttr", function() { return removeAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prop", function() { return prop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeData", function() { return removeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataset", function() { return dataset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "val", function() { return val; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "off", function() { return off; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "once", function() { return once; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitionEnd", function() { return transitionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationEnd", function() { return animationEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "width", function() { return width; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outerWidth", function() { return outerWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "height", function() { return height; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outerHeight", function() { return outerHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return offset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return hide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "each", function() { return each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is", function() { return is; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexOf", function() { return indexOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "index", function() { return index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eq", function() { return eq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendTo", function() { return appendTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepend", function() { return prepend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prependTo", function() { return prependTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertBefore", function() { return insertBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertAfter", function() { return insertAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "next", function() { return next; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextAll", function() { return nextAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prev", function() { return prev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prevAll", function() { return prevAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siblings", function() { return siblings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parent", function() { return parent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parents", function() { return parents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return closest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "children", function() { return children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach", function() { return detach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTo", function() { return scrollTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTop", function() { return scrollTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollLeft", function() { return scrollLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animate", function() { return animate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stop", function() { return stop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "click", function() { return click; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blur", function() { return blur; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focus", function() { return focus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusin", function() { return focusin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusout", function() { return focusout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyup", function() { return keyup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keydown", function() { return keydown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keypress", function() { return keypress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submit", function() { return submit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "change", function() { return change; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mousedown", function() { return mousedown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mousemove", function() { return mousemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseup", function() { return mouseup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseenter", function() { return mouseenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseleave", function() { return mouseleave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseout", function() { return mouseout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseover", function() { return mouseover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "touchstart", function() { return touchstart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "touchend", function() { return touchend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "touchmove", function() { return touchmove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resize", function() { return resize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scroll", function() { return scroll; });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/dist/ssr-window.esm.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Dom7 2.1.3
 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
 * http://framework7.io/docs/dom.html
 *
 * Copyright 2019, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under MIT
 *
 * Released on: February 11, 2019
 */


var Dom7 = function Dom7(arr) {
  _classCallCheck(this, Dom7);

  var self = this; // Create array-like object

  for (var i = 0; i < arr.length; i += 1) {
    self[i] = arr[i];
  }

  self.length = arr.length; // Return collection with methods

  return this;
};

function $(selector, context) {
  var arr = [];
  var i = 0;

  if (selector && !context) {
    if (selector instanceof Dom7) {
      return selector;
    }
  }

  if (selector) {
    // String
    if (typeof selector === 'string') {
      var els;
      var tempParent;

      var _html = selector.trim();

      if (_html.indexOf('<') >= 0 && _html.indexOf('>') >= 0) {
        var toCreate = 'div';
        if (_html.indexOf('<li') === 0) toCreate = 'ul';
        if (_html.indexOf('<tr') === 0) toCreate = 'tbody';
        if (_html.indexOf('<td') === 0 || _html.indexOf('<th') === 0) toCreate = 'tr';
        if (_html.indexOf('<tbody') === 0) toCreate = 'table';
        if (_html.indexOf('<option') === 0) toCreate = 'select';
        tempParent = ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"].createElement(toCreate);
        tempParent.innerHTML = _html;

        for (i = 0; i < tempParent.childNodes.length; i += 1) {
          arr.push(tempParent.childNodes[i]);
        }
      } else {
        if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
          // Pure ID selector
          els = [ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"].getElementById(selector.trim().split('#')[1])];
        } else {
          // Other selectors
          els = (context || ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]).querySelectorAll(selector.trim());
        }

        for (i = 0; i < els.length; i += 1) {
          if (els[i]) arr.push(els[i]);
        }
      }
    } else if (selector.nodeType || selector === ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"] || selector === ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]) {
      // Node/element
      arr.push(selector);
    } else if (selector.length > 0 && selector[0].nodeType) {
      // Array of elements or instance of Dom
      for (i = 0; i < selector.length; i += 1) {
        arr.push(selector[i]);
      }
    }
  }

  return new Dom7(arr);
}

$.fn = Dom7.prototype;
$.Class = Dom7;
$.Dom7 = Dom7;

function unique(arr) {
  var uniqueArray = [];

  for (var i = 0; i < arr.length; i += 1) {
    if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
  }

  return uniqueArray;
}

function toCamelCase(string) {
  return string.toLowerCase().replace(/-(.)/g, function (match, group1) {
    return group1.toUpperCase();
  });
}

function requestAnimationFrame(callback) {
  if (ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].requestAnimationFrame) return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].requestAnimationFrame(callback);else if (ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].webkitRequestAnimationFrame) return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].webkitRequestAnimationFrame(callback);
  return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].setTimeout(callback, 1000 / 60);
}

function cancelAnimationFrame(id) {
  if (ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].cancelAnimationFrame) return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].cancelAnimationFrame(id);else if (ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].webkitCancelAnimationFrame) return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].webkitCancelAnimationFrame(id);
  return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].clearTimeout(id);
} // Classes and attributes


function addClass(className) {
  if (typeof className === 'undefined') {
    return this;
  }

  var classes = className.split(' ');

  for (var i = 0; i < classes.length; i += 1) {
    for (var j = 0; j < this.length; j += 1) {
      if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') this[j].classList.add(classes[i]);
    }
  }

  return this;
}

function removeClass(className) {
  var classes = className.split(' ');

  for (var i = 0; i < classes.length; i += 1) {
    for (var j = 0; j < this.length; j += 1) {
      if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') this[j].classList.remove(classes[i]);
    }
  }

  return this;
}

function hasClass(className) {
  if (!this[0]) return false;
  return this[0].classList.contains(className);
}

function toggleClass(className) {
  var classes = className.split(' ');

  for (var i = 0; i < classes.length; i += 1) {
    for (var j = 0; j < this.length; j += 1) {
      if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') this[j].classList.toggle(classes[i]);
    }
  }

  return this;
}

function attr(attrs, value) {
  if (arguments.length === 1 && typeof attrs === 'string') {
    // Get attr
    if (this[0]) return this[0].getAttribute(attrs);
    return undefined;
  } // Set attrs


  for (var i = 0; i < this.length; i += 1) {
    if (arguments.length === 2) {
      // String
      this[i].setAttribute(attrs, value);
    } else {
      // Object
      // eslint-disable-next-line
      for (var attrName in attrs) {
        this[i][attrName] = attrs[attrName];
        this[i].setAttribute(attrName, attrs[attrName]);
      }
    }
  }

  return this;
} // eslint-disable-next-line


function removeAttr(attr) {
  for (var i = 0; i < this.length; i += 1) {
    this[i].removeAttribute(attr);
  }

  return this;
} // eslint-disable-next-line


function prop(props, value) {
  if (arguments.length === 1 && typeof props === 'string') {
    // Get prop
    if (this[0]) return this[0][props];
  } else {
    // Set props
    for (var i = 0; i < this.length; i += 1) {
      if (arguments.length === 2) {
        // String
        this[i][props] = value;
      } else {
        // Object
        // eslint-disable-next-line
        for (var propName in props) {
          this[i][propName] = props[propName];
        }
      }
    }

    return this;
  }
}

function data(key, value) {
  var el;

  if (typeof value === 'undefined') {
    el = this[0]; // Get value

    if (el) {
      if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) {
        return el.dom7ElementDataStorage[key];
      }

      var dataKey = el.getAttribute("data-".concat(key));

      if (dataKey) {
        return dataKey;
      }

      return undefined;
    }

    return undefined;
  } // Set value


  for (var i = 0; i < this.length; i += 1) {
    el = this[i];
    if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
    el.dom7ElementDataStorage[key] = value;
  }

  return this;
}

function removeData(key) {
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {
      el.dom7ElementDataStorage[key] = null;
      delete el.dom7ElementDataStorage[key];
    }
  }
}

function dataset() {
  var el = this[0];
  if (!el) return undefined;
  var dataset = {}; // eslint-disable-line

  if (el.dataset) {
    // eslint-disable-next-line
    for (var dataKey in el.dataset) {
      dataset[dataKey] = el.dataset[dataKey];
    }
  } else {
    for (var i = 0; i < el.attributes.length; i += 1) {
      // eslint-disable-next-line
      var _attr = el.attributes[i];

      if (_attr.name.indexOf('data-') >= 0) {
        dataset[toCamelCase(_attr.name.split('data-')[1])] = _attr.value;
      }
    }
  } // eslint-disable-next-line


  for (var key in dataset) {
    if (dataset[key] === 'false') dataset[key] = false;else if (dataset[key] === 'true') dataset[key] = true;else if (parseFloat(dataset[key]) === dataset[key] * 1) dataset[key] *= 1;
  }

  return dataset;
}

function val(value) {
  var dom = this;

  if (typeof value === 'undefined') {
    if (dom[0]) {
      if (dom[0].multiple && dom[0].nodeName.toLowerCase() === 'select') {
        var values = [];

        for (var i = 0; i < dom[0].selectedOptions.length; i += 1) {
          values.push(dom[0].selectedOptions[i].value);
        }

        return values;
      }

      return dom[0].value;
    }

    return undefined;
  }

  for (var _i = 0; _i < dom.length; _i += 1) {
    var el = dom[_i];

    if (Array.isArray(value) && el.multiple && el.nodeName.toLowerCase() === 'select') {
      for (var j = 0; j < el.options.length; j += 1) {
        el.options[j].selected = value.indexOf(el.options[j].value) >= 0;
      }
    } else {
      el.value = value;
    }
  }

  return dom;
} // Transforms
// eslint-disable-next-line


function transform(transform) {
  for (var i = 0; i < this.length; i += 1) {
    var elStyle = this[i].style;
    elStyle.webkitTransform = transform;
    elStyle.transform = transform;
  }

  return this;
}

function transition(duration) {
  if (typeof duration !== 'string') {
    duration = "".concat(duration, "ms"); // eslint-disable-line
  }

  for (var i = 0; i < this.length; i += 1) {
    var elStyle = this[i].style;
    elStyle.webkitTransitionDuration = duration;
    elStyle.transitionDuration = duration;
  }

  return this;
} // Events


function on() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var eventType = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventType = args[0];
    listener = args[1];
    capture = args[2];
    targetSelector = undefined;
  }

  if (!capture) capture = false;

  function handleLiveEvent(e) {
    var target = e.target;
    if (!target) return;
    var eventData = e.target.dom7EventData || [];

    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }

    if ($(target).is(targetSelector)) listener.apply(target, eventData);else {
      var _parents = $(target).parents(); // eslint-disable-line


      for (var k = 0; k < _parents.length; k += 1) {
        if ($(_parents[k]).is(targetSelector)) listener.apply(_parents[k], eventData);
      }
    }
  }

  function handleEvent(e) {
    var eventData = e && e.target ? e.target.dom7EventData || [] : [];

    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }

    listener.apply(this, eventData);
  }

  var events = eventType.split(' ');
  var j;

  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (!targetSelector) {
      for (j = 0; j < events.length; j += 1) {
        var event = events[j];
        if (!el.dom7Listeners) el.dom7Listeners = {};
        if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
        el.dom7Listeners[event].push({
          listener: listener,
          proxyListener: handleEvent
        });
        el.addEventListener(event, handleEvent, capture);
      }
    } else {
      // Live events
      for (j = 0; j < events.length; j += 1) {
        var _event = events[j];
        if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
        if (!el.dom7LiveListeners[_event]) el.dom7LiveListeners[_event] = [];

        el.dom7LiveListeners[_event].push({
          listener: listener,
          proxyListener: handleLiveEvent
        });

        el.addEventListener(_event, handleLiveEvent, capture);
      }
    }
  }

  return this;
}

function off() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  var eventType = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventType = args[0];
    listener = args[1];
    capture = args[2];
    targetSelector = undefined;
  }

  if (!capture) capture = false;
  var events = eventType.split(' ');

  for (var i = 0; i < events.length; i += 1) {
    var event = events[i];

    for (var j = 0; j < this.length; j += 1) {
      var el = this[j];
      var handlers = void 0;

      if (!targetSelector && el.dom7Listeners) {
        handlers = el.dom7Listeners[event];
      } else if (targetSelector && el.dom7LiveListeners) {
        handlers = el.dom7LiveListeners[event];
      }

      if (handlers && handlers.length) {
        for (var k = handlers.length - 1; k >= 0; k -= 1) {
          var handler = handlers[k];

          if (listener && handler.listener === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (!listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          }
        }
      }
    }
  }

  return this;
}

function once() {
  var dom = this;

  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  var eventName = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventName = args[0];
    listener = args[1];
    capture = args[2];
    targetSelector = undefined;
  }

  function onceHandler() {
    for (var _len4 = arguments.length, eventArgs = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      eventArgs[_key4] = arguments[_key4];
    }

    listener.apply(this, eventArgs);
    dom.off(eventName, targetSelector, onceHandler, capture);

    if (onceHandler.dom7proxy) {
      delete onceHandler.dom7proxy;
    }
  }

  onceHandler.dom7proxy = listener;
  return dom.on(eventName, targetSelector, onceHandler, capture);
}

function trigger() {
  for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    args[_key5] = arguments[_key5];
  }

  var events = args[0].split(' ');
  var eventData = args[1];

  for (var i = 0; i < events.length; i += 1) {
    var event = events[i];

    for (var j = 0; j < this.length; j += 1) {
      var el = this[j];
      var evt = void 0;

      try {
        evt = new ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].CustomEvent(event, {
          detail: eventData,
          bubbles: true,
          cancelable: true
        });
      } catch (e) {
        evt = ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"].createEvent('Event');
        evt.initEvent(event, true, true);
        evt.detail = eventData;
      } // eslint-disable-next-line


      el.dom7EventData = args.filter(function (data, dataIndex) {
        return dataIndex > 0;
      });
      el.dispatchEvent(evt);
      el.dom7EventData = [];
      delete el.dom7EventData;
    }
  }

  return this;
}

function transitionEnd(callback) {
  var events = ['webkitTransitionEnd', 'transitionend'];
  var dom = this;
  var i;

  function fireCallBack(e) {
    /* jshint validthis:true */
    if (e.target !== this) return;
    callback.call(this, e);

    for (i = 0; i < events.length; i += 1) {
      dom.off(events[i], fireCallBack);
    }
  }

  if (callback) {
    for (i = 0; i < events.length; i += 1) {
      dom.on(events[i], fireCallBack);
    }
  }

  return this;
}

function animationEnd(callback) {
  var events = ['webkitAnimationEnd', 'animationend'];
  var dom = this;
  var i;

  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);

    for (i = 0; i < events.length; i += 1) {
      dom.off(events[i], fireCallBack);
    }
  }

  if (callback) {
    for (i = 0; i < events.length; i += 1) {
      dom.on(events[i], fireCallBack);
    }
  }

  return this;
} // Sizing/Styles


function width() {
  if (this[0] === ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"]) {
    return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].innerWidth;
  }

  if (this.length > 0) {
    return parseFloat(this.css('width'));
  }

  return null;
}

function outerWidth(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      // eslint-disable-next-line
      var _styles = this.styles();

      return this[0].offsetWidth + parseFloat(_styles.getPropertyValue('margin-right')) + parseFloat(_styles.getPropertyValue('margin-left'));
    }

    return this[0].offsetWidth;
  }

  return null;
}

function height() {
  if (this[0] === ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"]) {
    return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].innerHeight;
  }

  if (this.length > 0) {
    return parseFloat(this.css('height'));
  }

  return null;
}

function outerHeight(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      // eslint-disable-next-line
      var _styles2 = this.styles();

      return this[0].offsetHeight + parseFloat(_styles2.getPropertyValue('margin-top')) + parseFloat(_styles2.getPropertyValue('margin-bottom'));
    }

    return this[0].offsetHeight;
  }

  return null;
}

function offset() {
  if (this.length > 0) {
    var el = this[0];
    var box = el.getBoundingClientRect();
    var body = ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"].body;
    var clientTop = el.clientTop || body.clientTop || 0;
    var clientLeft = el.clientLeft || body.clientLeft || 0;

    var _scrollTop = el === ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"] ? ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].scrollY : el.scrollTop;

    var _scrollLeft = el === ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"] ? ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].scrollX : el.scrollLeft;

    return {
      top: box.top + _scrollTop - clientTop,
      left: box.left + _scrollLeft - clientLeft
    };
  }

  return null;
}

function hide() {
  for (var i = 0; i < this.length; i += 1) {
    this[i].style.display = 'none';
  }

  return this;
}

function show() {
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (el.style.display === 'none') {
      el.style.display = '';
    }

    if (ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].getComputedStyle(el, null).getPropertyValue('display') === 'none') {
      // Still not visible
      el.style.display = 'block';
    }
  }

  return this;
}

function styles() {
  if (this[0]) return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].getComputedStyle(this[0], null);
  return {};
}

function css(props, value) {
  var i;

  if (arguments.length === 1) {
    if (typeof props === 'string') {
      if (this[0]) return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].getComputedStyle(this[0], null).getPropertyValue(props);
    } else {
      for (i = 0; i < this.length; i += 1) {
        // eslint-disable-next-line
        for (var _prop in props) {
          this[i].style[_prop] = props[_prop];
        }
      }

      return this;
    }
  }

  if (arguments.length === 2 && typeof props === 'string') {
    for (i = 0; i < this.length; i += 1) {
      this[i].style[props] = value;
    }

    return this;
  }

  return this;
} // Dom manipulation


function toArray() {
  var arr = [];

  for (var i = 0; i < this.length; i += 1) {
    arr.push(this[i]);
  }

  return arr;
} // Iterate over the collection passing elements to `callback`


function each(callback) {
  // Don't bother continuing without a callback
  if (!callback) return this; // Iterate over the current collection

  for (var i = 0; i < this.length; i += 1) {
    // If the callback returns false
    if (callback.call(this[i], i, this[i]) === false) {
      // End the loop early
      return this;
    }
  } // Return `this` to allow chained DOM operations


  return this;
}

function forEach(callback) {
  // Don't bother continuing without a callback
  if (!callback) return this; // Iterate over the current collection

  for (var i = 0; i < this.length; i += 1) {
    // If the callback returns false
    if (callback.call(this[i], this[i], i) === false) {
      // End the loop early
      return this;
    }
  } // Return `this` to allow chained DOM operations


  return this;
}

function filter(callback) {
  var matchedItems = [];
  var dom = this;

  for (var i = 0; i < dom.length; i += 1) {
    if (callback.call(dom[i], i, dom[i])) matchedItems.push(dom[i]);
  }

  return new Dom7(matchedItems);
}

function map(callback) {
  var modifiedItems = [];
  var dom = this;

  for (var i = 0; i < dom.length; i += 1) {
    modifiedItems.push(callback.call(dom[i], i, dom[i]));
  }

  return new Dom7(modifiedItems);
} // eslint-disable-next-line


function html(html) {
  if (typeof html === 'undefined') {
    return this[0] ? this[0].innerHTML : undefined;
  }

  for (var i = 0; i < this.length; i += 1) {
    this[i].innerHTML = html;
  }

  return this;
} // eslint-disable-next-line


function text(text) {
  if (typeof text === 'undefined') {
    if (this[0]) {
      return this[0].textContent.trim();
    }

    return null;
  }

  for (var i = 0; i < this.length; i += 1) {
    this[i].textContent = text;
  }

  return this;
}

function is(selector) {
  var el = this[0];
  var compareWith;
  var i;
  if (!el || typeof selector === 'undefined') return false;

  if (typeof selector === 'string') {
    if (el.matches) return el.matches(selector);else if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);else if (el.msMatchesSelector) return el.msMatchesSelector(selector);
    compareWith = $(selector);

    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }

    return false;
  } else if (selector === ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]) return el === ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"];else if (selector === ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"]) return el === ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"];

  if (selector.nodeType || selector instanceof Dom7) {
    compareWith = selector.nodeType ? [selector] : selector;

    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }

    return false;
  }

  return false;
}

function indexOf(el) {
  for (var i = 0; i < this.length; i += 1) {
    if (this[i] === el) return i;
  }

  return -1;
}

function index() {
  var child = this[0];
  var i;

  if (child) {
    i = 0; // eslint-disable-next-line

    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }

    return i;
  }

  return undefined;
} // eslint-disable-next-line


function eq(index) {
  if (typeof index === 'undefined') return this;
  var length = this.length;
  var returnIndex;

  if (index > length - 1) {
    return new Dom7([]);
  }

  if (index < 0) {
    returnIndex = length + index;
    if (returnIndex < 0) return new Dom7([]);
    return new Dom7([this[returnIndex]]);
  }

  return new Dom7([this[index]]);
}

function append() {
  var newChild;

  for (var k = 0; k < arguments.length; k += 1) {
    newChild = k < 0 || arguments.length <= k ? undefined : arguments[k];

    for (var i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        var tempDiv = ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"].createElement('div');
        tempDiv.innerHTML = newChild;

        while (tempDiv.firstChild) {
          this[i].appendChild(tempDiv.firstChild);
        }
      } else if (newChild instanceof Dom7) {
        for (var j = 0; j < newChild.length; j += 1) {
          this[i].appendChild(newChild[j]);
        }
      } else {
        this[i].appendChild(newChild);
      }
    }
  }

  return this;
} // eslint-disable-next-line


function appendTo(parent) {
  $(parent).append(this);
  return this;
}

function prepend(newChild) {
  var i;
  var j;

  for (i = 0; i < this.length; i += 1) {
    if (typeof newChild === 'string') {
      var tempDiv = ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"].createElement('div');
      tempDiv.innerHTML = newChild;

      for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
        this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
      }
    } else if (newChild instanceof Dom7) {
      for (j = 0; j < newChild.length; j += 1) {
        this[i].insertBefore(newChild[j], this[i].childNodes[0]);
      }
    } else {
      this[i].insertBefore(newChild, this[i].childNodes[0]);
    }
  }

  return this;
} // eslint-disable-next-line


function prependTo(parent) {
  $(parent).prepend(this);
  return this;
}

function insertBefore(selector) {
  var before = $(selector);

  for (var i = 0; i < this.length; i += 1) {
    if (before.length === 1) {
      before[0].parentNode.insertBefore(this[i], before[0]);
    } else if (before.length > 1) {
      for (var j = 0; j < before.length; j += 1) {
        before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
      }
    }
  }
}

function insertAfter(selector) {
  var after = $(selector);

  for (var i = 0; i < this.length; i += 1) {
    if (after.length === 1) {
      after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
    } else if (after.length > 1) {
      for (var j = 0; j < after.length; j += 1) {
        after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
      }
    }
  }
}

function next(selector) {
  if (this.length > 0) {
    if (selector) {
      if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
        return new Dom7([this[0].nextElementSibling]);
      }

      return new Dom7([]);
    }

    if (this[0].nextElementSibling) return new Dom7([this[0].nextElementSibling]);
    return new Dom7([]);
  }

  return new Dom7([]);
}

function nextAll(selector) {
  var nextEls = [];
  var el = this[0];
  if (!el) return new Dom7([]);

  while (el.nextElementSibling) {
    var _next = el.nextElementSibling; // eslint-disable-line

    if (selector) {
      if ($(_next).is(selector)) nextEls.push(_next);
    } else nextEls.push(_next);

    el = _next;
  }

  return new Dom7(nextEls);
}

function prev(selector) {
  if (this.length > 0) {
    var el = this[0];

    if (selector) {
      if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
        return new Dom7([el.previousElementSibling]);
      }

      return new Dom7([]);
    }

    if (el.previousElementSibling) return new Dom7([el.previousElementSibling]);
    return new Dom7([]);
  }

  return new Dom7([]);
}

function prevAll(selector) {
  var prevEls = [];
  var el = this[0];
  if (!el) return new Dom7([]);

  while (el.previousElementSibling) {
    var _prev = el.previousElementSibling; // eslint-disable-line

    if (selector) {
      if ($(_prev).is(selector)) prevEls.push(_prev);
    } else prevEls.push(_prev);

    el = _prev;
  }

  return new Dom7(prevEls);
}

function siblings(selector) {
  return this.nextAll(selector).add(this.prevAll(selector));
}

function parent(selector) {
  var parents = []; // eslint-disable-line

  for (var i = 0; i < this.length; i += 1) {
    if (this[i].parentNode !== null) {
      if (selector) {
        if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
      } else {
        parents.push(this[i].parentNode);
      }
    }
  }

  return $(unique(parents));
}

function parents(selector) {
  var parents = []; // eslint-disable-line

  for (var i = 0; i < this.length; i += 1) {
    var _parent = this[i].parentNode; // eslint-disable-line

    while (_parent) {
      if (selector) {
        if ($(_parent).is(selector)) parents.push(_parent);
      } else {
        parents.push(_parent);
      }

      _parent = _parent.parentNode;
    }
  }

  return $(unique(parents));
}

function closest(selector) {
  var closest = this; // eslint-disable-line

  if (typeof selector === 'undefined') {
    return new Dom7([]);
  }

  if (!closest.is(selector)) {
    closest = closest.parents(selector).eq(0);
  }

  return closest;
}

function find(selector) {
  var foundElements = [];

  for (var i = 0; i < this.length; i += 1) {
    var found = this[i].querySelectorAll(selector);

    for (var j = 0; j < found.length; j += 1) {
      foundElements.push(found[j]);
    }
  }

  return new Dom7(foundElements);
}

function children(selector) {
  var children = []; // eslint-disable-line

  for (var i = 0; i < this.length; i += 1) {
    var childNodes = this[i].childNodes;

    for (var j = 0; j < childNodes.length; j += 1) {
      if (!selector) {
        if (childNodes[j].nodeType === 1) children.push(childNodes[j]);
      } else if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) {
        children.push(childNodes[j]);
      }
    }
  }

  return new Dom7(unique(children));
}

function remove() {
  for (var i = 0; i < this.length; i += 1) {
    if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
  }

  return this;
}

function detach() {
  return this.remove();
}

function add() {
  var dom = this;
  var i;
  var j;

  for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    args[_key6] = arguments[_key6];
  }

  for (i = 0; i < args.length; i += 1) {
    var toAdd = $(args[i]);

    for (j = 0; j < toAdd.length; j += 1) {
      dom[dom.length] = toAdd[j];
      dom.length += 1;
    }
  }

  return dom;
}

function empty() {
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (el.nodeType === 1) {
      for (var j = 0; j < el.childNodes.length; j += 1) {
        if (el.childNodes[j].parentNode) {
          el.childNodes[j].parentNode.removeChild(el.childNodes[j]);
        }
      }

      el.textContent = '';
    }
  }

  return this;
}

function scrollTo() {
  for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    args[_key7] = arguments[_key7];
  }

  var left = args[0],
      top = args[1],
      duration = args[2],
      easing = args[3],
      callback = args[4];

  if (args.length === 4 && typeof easing === 'function') {
    callback = easing;
    left = args[0];
    top = args[1];
    duration = args[2];
    callback = args[3];
    easing = args[4];
  }

  if (typeof easing === 'undefined') easing = 'swing';
  return this.each(function animate() {
    var el = this;
    var currentTop;
    var currentLeft;
    var maxTop;
    var maxLeft;
    var newTop;
    var newLeft;
    var scrollTop; // eslint-disable-line

    var scrollLeft; // eslint-disable-line

    var animateTop = top > 0 || top === 0;
    var animateLeft = left > 0 || left === 0;

    if (typeof easing === 'undefined') {
      easing = 'swing';
    }

    if (animateTop) {
      currentTop = el.scrollTop;

      if (!duration) {
        el.scrollTop = top;
      }
    }

    if (animateLeft) {
      currentLeft = el.scrollLeft;

      if (!duration) {
        el.scrollLeft = left;
      }
    }

    if (!duration) return;

    if (animateTop) {
      maxTop = el.scrollHeight - el.offsetHeight;
      newTop = Math.max(Math.min(top, maxTop), 0);
    }

    if (animateLeft) {
      maxLeft = el.scrollWidth - el.offsetWidth;
      newLeft = Math.max(Math.min(left, maxLeft), 0);
    }

    var startTime = null;
    if (animateTop && newTop === currentTop) animateTop = false;
    if (animateLeft && newLeft === currentLeft) animateLeft = false;

    function render() {
      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date().getTime();

      if (startTime === null) {
        startTime = time;
      }

      var progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      var easeProgress = easing === 'linear' ? progress : 0.5 - Math.cos(progress * Math.PI) / 2;
      var done;
      if (animateTop) scrollTop = currentTop + easeProgress * (newTop - currentTop);
      if (animateLeft) scrollLeft = currentLeft + easeProgress * (newLeft - currentLeft);

      if (animateTop && newTop > currentTop && scrollTop >= newTop) {
        el.scrollTop = newTop;
        done = true;
      }

      if (animateTop && newTop < currentTop && scrollTop <= newTop) {
        el.scrollTop = newTop;
        done = true;
      }

      if (animateLeft && newLeft > currentLeft && scrollLeft >= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }

      if (animateLeft && newLeft < currentLeft && scrollLeft <= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }

      if (done) {
        if (callback) callback();
        return;
      }

      if (animateTop) el.scrollTop = scrollTop;
      if (animateLeft) el.scrollLeft = scrollLeft;
      requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
  });
} // scrollTop(top, duration, easing, callback) {


function scrollTop() {
  for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
    args[_key8] = arguments[_key8];
  }

  var top = args[0],
      duration = args[1],
      easing = args[2],
      callback = args[3];

  if (args.length === 3 && typeof easing === 'function') {
    top = args[0];
    duration = args[1];
    callback = args[2];
    easing = args[3];
  }

  var dom = this;

  if (typeof top === 'undefined') {
    if (dom.length > 0) return dom[0].scrollTop;
    return null;
  }

  return dom.scrollTo(undefined, top, duration, easing, callback);
}

function scrollLeft() {
  for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
    args[_key9] = arguments[_key9];
  }

  var left = args[0],
      duration = args[1],
      easing = args[2],
      callback = args[3];

  if (args.length === 3 && typeof easing === 'function') {
    left = args[0];
    duration = args[1];
    callback = args[2];
    easing = args[3];
  }

  var dom = this;

  if (typeof left === 'undefined') {
    if (dom.length > 0) return dom[0].scrollLeft;
    return null;
  }

  return dom.scrollTo(left, undefined, duration, easing, callback);
}

function animate(initialProps, initialParams) {
  var els = this;
  var a = {
    props: Object.assign({}, initialProps),
    params: Object.assign({
      duration: 300,
      easing: 'swing' // or 'linear'

      /* Callbacks
      begin(elements)
      complete(elements)
      progress(elements, complete, remaining, start, tweenValue)
      */

    }, initialParams),
    elements: els,
    animating: false,
    que: [],
    easingProgress: function easingProgress(easing, progress) {
      if (easing === 'swing') {
        return 0.5 - Math.cos(progress * Math.PI) / 2;
      }

      if (typeof easing === 'function') {
        return easing(progress);
      }

      return progress;
    },
    stop: function stop() {
      if (a.frameId) {
        cancelAnimationFrame(a.frameId);
      }

      a.animating = false;
      a.elements.each(function (index, el) {
        var element = el;
        delete element.dom7AnimateInstance;
      });
      a.que = [];
    },
    done: function done(complete) {
      a.animating = false;
      a.elements.each(function (index, el) {
        var element = el;
        delete element.dom7AnimateInstance;
      });
      if (complete) complete(els);

      if (a.que.length > 0) {
        var que = a.que.shift();
        a.animate(que[0], que[1]);
      }
    },
    animate: function animate(props, params) {
      if (a.animating) {
        a.que.push([props, params]);
        return a;
      }

      var elements = []; // Define & Cache Initials & Units

      a.elements.each(function (index, el) {
        var initialFullValue;
        var initialValue;
        var unit;
        var finalValue;
        var finalFullValue;
        if (!el.dom7AnimateInstance) a.elements[index].dom7AnimateInstance = a;
        elements[index] = {
          container: el
        };
        Object.keys(props).forEach(function (prop) {
          initialFullValue = ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].getComputedStyle(el, null).getPropertyValue(prop).replace(',', '.');
          initialValue = parseFloat(initialFullValue);
          unit = initialFullValue.replace(initialValue, '');
          finalValue = parseFloat(props[prop]);
          finalFullValue = props[prop] + unit;
          elements[index][prop] = {
            initialFullValue: initialFullValue,
            initialValue: initialValue,
            unit: unit,
            finalValue: finalValue,
            finalFullValue: finalFullValue,
            currentValue: initialValue
          };
        });
      });
      var startTime = null;
      var time;
      var elementsDone = 0;
      var propsDone = 0;
      var done;
      var began = false;
      a.animating = true;

      function render() {
        time = new Date().getTime();
        var progress;
        var easeProgress; // let el;

        if (!began) {
          began = true;
          if (params.begin) params.begin(els);
        }

        if (startTime === null) {
          startTime = time;
        }

        if (params.progress) {
          // eslint-disable-next-line
          params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), startTime + params.duration - time < 0 ? 0 : startTime + params.duration - time, startTime);
        }

        elements.forEach(function (element) {
          var el = element;
          if (done || el.done) return;
          Object.keys(props).forEach(function (prop) {
            if (done || el.done) return;
            progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0);
            easeProgress = a.easingProgress(params.easing, progress);
            var _el$prop = el[prop],
                initialValue = _el$prop.initialValue,
                finalValue = _el$prop.finalValue,
                unit = _el$prop.unit;
            el[prop].currentValue = initialValue + easeProgress * (finalValue - initialValue);
            var currentValue = el[prop].currentValue;

            if (finalValue > initialValue && currentValue >= finalValue || finalValue < initialValue && currentValue <= finalValue) {
              el.container.style[prop] = finalValue + unit;
              propsDone += 1;

              if (propsDone === Object.keys(props).length) {
                el.done = true;
                elementsDone += 1;
              }

              if (elementsDone === elements.length) {
                done = true;
              }
            }

            if (done) {
              a.done(params.complete);
              return;
            }

            el.container.style[prop] = currentValue + unit;
          });
        });
        if (done) return; // Then call

        a.frameId = requestAnimationFrame(render);
      }

      a.frameId = requestAnimationFrame(render);
      return a;
    }
  };

  if (a.elements.length === 0) {
    return els;
  }

  var animateInstance;

  for (var i = 0; i < a.elements.length; i += 1) {
    if (a.elements[i].dom7AnimateInstance) {
      animateInstance = a.elements[i].dom7AnimateInstance;
    } else a.elements[i].dom7AnimateInstance = a;
  }

  if (!animateInstance) {
    animateInstance = a;
  }

  if (initialProps === 'stop') {
    animateInstance.stop();
  } else {
    animateInstance.animate(a.props, a.params);
  }

  return els;
}

function stop() {
  var els = this;

  for (var i = 0; i < els.length; i += 1) {
    if (els[i].dom7AnimateInstance) {
      els[i].dom7AnimateInstance.stop();
    }
  }
}

var noTrigger = 'resize scroll'.split(' ');

function eventShortcut(name) {
  for (var _len10 = arguments.length, args = new Array(_len10 > 1 ? _len10 - 1 : 0), _key10 = 1; _key10 < _len10; _key10++) {
    args[_key10 - 1] = arguments[_key10];
  }

  if (typeof args[0] === 'undefined') {
    for (var i = 0; i < this.length; i += 1) {
      if (noTrigger.indexOf(name) < 0) {
        if (name in this[i]) this[i][name]();else {
          $(this[i]).trigger(name);
        }
      }
    }

    return this;
  }

  return this.on.apply(this, [name].concat(args));
}

function click() {
  for (var _len11 = arguments.length, args = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
    args[_key11] = arguments[_key11];
  }

  return eventShortcut.bind(this).apply(void 0, ['click'].concat(args));
}

function blur() {
  for (var _len12 = arguments.length, args = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
    args[_key12] = arguments[_key12];
  }

  return eventShortcut.bind(this).apply(void 0, ['blur'].concat(args));
}

function focus() {
  for (var _len13 = arguments.length, args = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
    args[_key13] = arguments[_key13];
  }

  return eventShortcut.bind(this).apply(void 0, ['focus'].concat(args));
}

function focusin() {
  for (var _len14 = arguments.length, args = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
    args[_key14] = arguments[_key14];
  }

  return eventShortcut.bind(this).apply(void 0, ['focusin'].concat(args));
}

function focusout() {
  for (var _len15 = arguments.length, args = new Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
    args[_key15] = arguments[_key15];
  }

  return eventShortcut.bind(this).apply(void 0, ['focusout'].concat(args));
}

function keyup() {
  for (var _len16 = arguments.length, args = new Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
    args[_key16] = arguments[_key16];
  }

  return eventShortcut.bind(this).apply(void 0, ['keyup'].concat(args));
}

function keydown() {
  for (var _len17 = arguments.length, args = new Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
    args[_key17] = arguments[_key17];
  }

  return eventShortcut.bind(this).apply(void 0, ['keydown'].concat(args));
}

function keypress() {
  for (var _len18 = arguments.length, args = new Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
    args[_key18] = arguments[_key18];
  }

  return eventShortcut.bind(this).apply(void 0, ['keypress'].concat(args));
}

function submit() {
  for (var _len19 = arguments.length, args = new Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
    args[_key19] = arguments[_key19];
  }

  return eventShortcut.bind(this).apply(void 0, ['submit'].concat(args));
}

function change() {
  for (var _len20 = arguments.length, args = new Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {
    args[_key20] = arguments[_key20];
  }

  return eventShortcut.bind(this).apply(void 0, ['change'].concat(args));
}

function mousedown() {
  for (var _len21 = arguments.length, args = new Array(_len21), _key21 = 0; _key21 < _len21; _key21++) {
    args[_key21] = arguments[_key21];
  }

  return eventShortcut.bind(this).apply(void 0, ['mousedown'].concat(args));
}

function mousemove() {
  for (var _len22 = arguments.length, args = new Array(_len22), _key22 = 0; _key22 < _len22; _key22++) {
    args[_key22] = arguments[_key22];
  }

  return eventShortcut.bind(this).apply(void 0, ['mousemove'].concat(args));
}

function mouseup() {
  for (var _len23 = arguments.length, args = new Array(_len23), _key23 = 0; _key23 < _len23; _key23++) {
    args[_key23] = arguments[_key23];
  }

  return eventShortcut.bind(this).apply(void 0, ['mouseup'].concat(args));
}

function mouseenter() {
  for (var _len24 = arguments.length, args = new Array(_len24), _key24 = 0; _key24 < _len24; _key24++) {
    args[_key24] = arguments[_key24];
  }

  return eventShortcut.bind(this).apply(void 0, ['mouseenter'].concat(args));
}

function mouseleave() {
  for (var _len25 = arguments.length, args = new Array(_len25), _key25 = 0; _key25 < _len25; _key25++) {
    args[_key25] = arguments[_key25];
  }

  return eventShortcut.bind(this).apply(void 0, ['mouseleave'].concat(args));
}

function mouseout() {
  for (var _len26 = arguments.length, args = new Array(_len26), _key26 = 0; _key26 < _len26; _key26++) {
    args[_key26] = arguments[_key26];
  }

  return eventShortcut.bind(this).apply(void 0, ['mouseout'].concat(args));
}

function mouseover() {
  for (var _len27 = arguments.length, args = new Array(_len27), _key27 = 0; _key27 < _len27; _key27++) {
    args[_key27] = arguments[_key27];
  }

  return eventShortcut.bind(this).apply(void 0, ['mouseover'].concat(args));
}

function touchstart() {
  for (var _len28 = arguments.length, args = new Array(_len28), _key28 = 0; _key28 < _len28; _key28++) {
    args[_key28] = arguments[_key28];
  }

  return eventShortcut.bind(this).apply(void 0, ['touchstart'].concat(args));
}

function touchend() {
  for (var _len29 = arguments.length, args = new Array(_len29), _key29 = 0; _key29 < _len29; _key29++) {
    args[_key29] = arguments[_key29];
  }

  return eventShortcut.bind(this).apply(void 0, ['touchend'].concat(args));
}

function touchmove() {
  for (var _len30 = arguments.length, args = new Array(_len30), _key30 = 0; _key30 < _len30; _key30++) {
    args[_key30] = arguments[_key30];
  }

  return eventShortcut.bind(this).apply(void 0, ['touchmove'].concat(args));
}

function resize() {
  for (var _len31 = arguments.length, args = new Array(_len31), _key31 = 0; _key31 < _len31; _key31++) {
    args[_key31] = arguments[_key31];
  }

  return eventShortcut.bind(this).apply(void 0, ['resize'].concat(args));
}

function scroll() {
  for (var _len32 = arguments.length, args = new Array(_len32), _key32 = 0; _key32 < _len32; _key32++) {
    args[_key32] = arguments[_key32];
  }

  return eventShortcut.bind(this).apply(void 0, ['scroll'].concat(args));
}



/***/ }),

/***/ "./node_modules/intersection-observer/intersection-observer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/intersection-observer/intersection-observer.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
 *
 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 */
(function () {
  'use strict'; // Exit early if we're not running in a browser.

  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== 'object') {
    return;
  } // Exit early if all IntersectionObserver and IntersectionObserverEntry
  // features are natively supported.


  if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
    // Minimal polyfill for Edge 15's lack of `isIntersecting`
    // See: https://github.com/w3c/IntersectionObserver/issues/211
    if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
      Object.defineProperty(window.IntersectionObserverEntry.prototype, 'isIntersecting', {
        get: function get() {
          return this.intersectionRatio > 0;
        }
      });
    }

    return;
  }
  /**
   * A local reference to the document.
   */


  var document = window.document;
  /**
   * An IntersectionObserver registry. This registry exists to hold a strong
   * reference to IntersectionObserver instances currently observing a target
   * element. Without this registry, instances without another reference may be
   * garbage collected.
   */

  var registry = [];
  /**
   * Creates the global IntersectionObserverEntry constructor.
   * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
   * @param {Object} entry A dictionary of instance properties.
   * @constructor
   */

  function IntersectionObserverEntry(entry) {
    this.time = entry.time;
    this.target = entry.target;
    this.rootBounds = entry.rootBounds;
    this.boundingClientRect = entry.boundingClientRect;
    this.intersectionRect = entry.intersectionRect || getEmptyRect();
    this.isIntersecting = !!entry.intersectionRect; // Calculates the intersection ratio.

    var targetRect = this.boundingClientRect;
    var targetArea = targetRect.width * targetRect.height;
    var intersectionRect = this.intersectionRect;
    var intersectionArea = intersectionRect.width * intersectionRect.height; // Sets intersection ratio.

    if (targetArea) {
      // Round the intersection ratio to avoid floating point math issues:
      // https://github.com/w3c/IntersectionObserver/issues/324
      this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
    } else {
      // If area is zero and is intersecting, sets to 1, otherwise to 0
      this.intersectionRatio = this.isIntersecting ? 1 : 0;
    }
  }
  /**
   * Creates the global IntersectionObserver constructor.
   * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
   * @param {Function} callback The function to be invoked after intersection
   *     changes have queued. The function is not invoked if the queue has
   *     been emptied by calling the `takeRecords` method.
   * @param {Object=} opt_options Optional configuration options.
   * @constructor
   */


  function IntersectionObserver(callback, opt_options) {
    var options = opt_options || {};

    if (typeof callback != 'function') {
      throw new Error('callback must be a function');
    }

    if (options.root && options.root.nodeType != 1) {
      throw new Error('root must be an Element');
    } // Binds and throttles `this._checkForIntersections`.


    this._checkForIntersections = throttle(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT); // Private properties.

    this._callback = callback;
    this._observationTargets = [];
    this._queuedEntries = [];
    this._rootMarginValues = this._parseRootMargin(options.rootMargin); // Public properties.

    this.thresholds = this._initThresholds(options.threshold);
    this.root = options.root || null;
    this.rootMargin = this._rootMarginValues.map(function (margin) {
      return margin.value + margin.unit;
    }).join(' ');
  }
  /**
   * The minimum interval within which the document will be checked for
   * intersection changes.
   */


  IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;
  /**
   * The frequency in which the polyfill polls for intersection changes.
   * this can be updated on a per instance basis and must be set prior to
   * calling `observe` on the first target.
   */

  IntersectionObserver.prototype.POLL_INTERVAL = null;
  /**
   * Use a mutation observer on the root element
   * to detect intersection changes.
   */

  IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;
  /**
   * Starts observing a target element for intersection changes based on
   * the thresholds values.
   * @param {Element} target The DOM element to observe.
   */

  IntersectionObserver.prototype.observe = function (target) {
    var isTargetAlreadyObserved = this._observationTargets.some(function (item) {
      return item.element == target;
    });

    if (isTargetAlreadyObserved) {
      return;
    }

    if (!(target && target.nodeType == 1)) {
      throw new Error('target must be an Element');
    }

    this._registerInstance();

    this._observationTargets.push({
      element: target,
      entry: null
    });

    this._monitorIntersections();

    this._checkForIntersections();
  };
  /**
   * Stops observing a target element for intersection changes.
   * @param {Element} target The DOM element to observe.
   */


  IntersectionObserver.prototype.unobserve = function (target) {
    this._observationTargets = this._observationTargets.filter(function (item) {
      return item.element != target;
    });

    if (!this._observationTargets.length) {
      this._unmonitorIntersections();

      this._unregisterInstance();
    }
  };
  /**
   * Stops observing all target elements for intersection changes.
   */


  IntersectionObserver.prototype.disconnect = function () {
    this._observationTargets = [];

    this._unmonitorIntersections();

    this._unregisterInstance();
  };
  /**
   * Returns any queue entries that have not yet been reported to the
   * callback and clears the queue. This can be used in conjunction with the
   * callback to obtain the absolute most up-to-date intersection information.
   * @return {Array} The currently queued entries.
   */


  IntersectionObserver.prototype.takeRecords = function () {
    var records = this._queuedEntries.slice();

    this._queuedEntries = [];
    return records;
  };
  /**
   * Accepts the threshold value from the user configuration object and
   * returns a sorted array of unique threshold values. If a value is not
   * between 0 and 1 and error is thrown.
   * @private
   * @param {Array|number=} opt_threshold An optional threshold value or
   *     a list of threshold values, defaulting to [0].
   * @return {Array} A sorted list of unique and valid threshold values.
   */


  IntersectionObserver.prototype._initThresholds = function (opt_threshold) {
    var threshold = opt_threshold || [0];
    if (!Array.isArray(threshold)) threshold = [threshold];
    return threshold.sort().filter(function (t, i, a) {
      if (typeof t != 'number' || isNaN(t) || t < 0 || t > 1) {
        throw new Error('threshold must be a number between 0 and 1 inclusively');
      }

      return t !== a[i - 1];
    });
  };
  /**
   * Accepts the rootMargin value from the user configuration object
   * and returns an array of the four margin values as an object containing
   * the value and unit properties. If any of the values are not properly
   * formatted or use a unit other than px or %, and error is thrown.
   * @private
   * @param {string=} opt_rootMargin An optional rootMargin value,
   *     defaulting to '0px'.
   * @return {Array<Object>} An array of margin objects with the keys
   *     value and unit.
   */


  IntersectionObserver.prototype._parseRootMargin = function (opt_rootMargin) {
    var marginString = opt_rootMargin || '0px';
    var margins = marginString.split(/\s+/).map(function (margin) {
      var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);

      if (!parts) {
        throw new Error('rootMargin must be specified in pixels or percent');
      }

      return {
        value: parseFloat(parts[1]),
        unit: parts[2]
      };
    }); // Handles shorthand.

    margins[1] = margins[1] || margins[0];
    margins[2] = margins[2] || margins[0];
    margins[3] = margins[3] || margins[1];
    return margins;
  };
  /**
   * Starts polling for intersection changes if the polling is not already
   * happening, and if the page's visibility state is visible.
   * @private
   */


  IntersectionObserver.prototype._monitorIntersections = function () {
    if (!this._monitoringIntersections) {
      this._monitoringIntersections = true; // If a poll interval is set, use polling instead of listening to
      // resize and scroll events or DOM mutations.

      if (this.POLL_INTERVAL) {
        this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL);
      } else {
        addEvent(window, 'resize', this._checkForIntersections, true);
        addEvent(document, 'scroll', this._checkForIntersections, true);

        if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in window) {
          this._domObserver = new MutationObserver(this._checkForIntersections);

          this._domObserver.observe(document, {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
          });
        }
      }
    }
  };
  /**
   * Stops polling for intersection changes.
   * @private
   */


  IntersectionObserver.prototype._unmonitorIntersections = function () {
    if (this._monitoringIntersections) {
      this._monitoringIntersections = false;
      clearInterval(this._monitoringInterval);
      this._monitoringInterval = null;
      removeEvent(window, 'resize', this._checkForIntersections, true);
      removeEvent(document, 'scroll', this._checkForIntersections, true);

      if (this._domObserver) {
        this._domObserver.disconnect();

        this._domObserver = null;
      }
    }
  };
  /**
   * Scans each observation target for intersection changes and adds them
   * to the internal entries queue. If new entries are found, it
   * schedules the callback to be invoked.
   * @private
   */


  IntersectionObserver.prototype._checkForIntersections = function () {
    var rootIsInDom = this._rootIsInDom();

    var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();

    this._observationTargets.forEach(function (item) {
      var target = item.element;
      var targetRect = getBoundingClientRect(target);

      var rootContainsTarget = this._rootContainsTarget(target);

      var oldEntry = item.entry;

      var intersectionRect = rootIsInDom && rootContainsTarget && this._computeTargetAndRootIntersection(target, rootRect);

      var newEntry = item.entry = new IntersectionObserverEntry({
        time: now(),
        target: target,
        boundingClientRect: targetRect,
        rootBounds: rootRect,
        intersectionRect: intersectionRect
      });

      if (!oldEntry) {
        this._queuedEntries.push(newEntry);
      } else if (rootIsInDom && rootContainsTarget) {
        // If the new entry intersection ratio has crossed any of the
        // thresholds, add a new entry.
        if (this._hasCrossedThreshold(oldEntry, newEntry)) {
          this._queuedEntries.push(newEntry);
        }
      } else {
        // If the root is not in the DOM or target is not contained within
        // root but the previous entry for this target had an intersection,
        // add a new record indicating removal.
        if (oldEntry && oldEntry.isIntersecting) {
          this._queuedEntries.push(newEntry);
        }
      }
    }, this);

    if (this._queuedEntries.length) {
      this._callback(this.takeRecords(), this);
    }
  };
  /**
   * Accepts a target and root rect computes the intersection between then
   * following the algorithm in the spec.
   * TODO(philipwalton): at this time clip-path is not considered.
   * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
   * @param {Element} target The target DOM element
   * @param {Object} rootRect The bounding rect of the root after being
   *     expanded by the rootMargin value.
   * @return {?Object} The final intersection rect object or undefined if no
   *     intersection is found.
   * @private
   */


  IntersectionObserver.prototype._computeTargetAndRootIntersection = function (target, rootRect) {
    // If the element isn't displayed, an intersection can't happen.
    if (window.getComputedStyle(target).display == 'none') return;
    var targetRect = getBoundingClientRect(target);
    var intersectionRect = targetRect;
    var parent = getParentNode(target);
    var atRoot = false;

    while (!atRoot) {
      var parentRect = null;
      var parentComputedStyle = parent.nodeType == 1 ? window.getComputedStyle(parent) : {}; // If the parent isn't displayed, an intersection can't happen.

      if (parentComputedStyle.display == 'none') return;

      if (parent == this.root || parent == document) {
        atRoot = true;
        parentRect = rootRect;
      } else {
        // If the element has a non-visible overflow, and it's not the <body>
        // or <html> element, update the intersection rect.
        // Note: <body> and <html> cannot be clipped to a rect that's not also
        // the document rect, so no need to compute a new intersection.
        if (parent != document.body && parent != document.documentElement && parentComputedStyle.overflow != 'visible') {
          parentRect = getBoundingClientRect(parent);
        }
      } // If either of the above conditionals set a new parentRect,
      // calculate new intersection data.


      if (parentRect) {
        intersectionRect = computeRectIntersection(parentRect, intersectionRect);
        if (!intersectionRect) break;
      }

      parent = getParentNode(parent);
    }

    return intersectionRect;
  };
  /**
   * Returns the root rect after being expanded by the rootMargin value.
   * @return {Object} The expanded root rect.
   * @private
   */


  IntersectionObserver.prototype._getRootRect = function () {
    var rootRect;

    if (this.root) {
      rootRect = getBoundingClientRect(this.root);
    } else {
      // Use <html>/<body> instead of window since scroll bars affect size.
      var html = document.documentElement;
      var body = document.body;
      rootRect = {
        top: 0,
        left: 0,
        right: html.clientWidth || body.clientWidth,
        width: html.clientWidth || body.clientWidth,
        bottom: html.clientHeight || body.clientHeight,
        height: html.clientHeight || body.clientHeight
      };
    }

    return this._expandRectByRootMargin(rootRect);
  };
  /**
   * Accepts a rect and expands it by the rootMargin value.
   * @param {Object} rect The rect object to expand.
   * @return {Object} The expanded rect.
   * @private
   */


  IntersectionObserver.prototype._expandRectByRootMargin = function (rect) {
    var margins = this._rootMarginValues.map(function (margin, i) {
      return margin.unit == 'px' ? margin.value : margin.value * (i % 2 ? rect.width : rect.height) / 100;
    });

    var newRect = {
      top: rect.top - margins[0],
      right: rect.right + margins[1],
      bottom: rect.bottom + margins[2],
      left: rect.left - margins[3]
    };
    newRect.width = newRect.right - newRect.left;
    newRect.height = newRect.bottom - newRect.top;
    return newRect;
  };
  /**
   * Accepts an old and new entry and returns true if at least one of the
   * threshold values has been crossed.
   * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
   *    particular target element or null if no previous entry exists.
   * @param {IntersectionObserverEntry} newEntry The current entry for a
   *    particular target element.
   * @return {boolean} Returns true if a any threshold has been crossed.
   * @private
   */


  IntersectionObserver.prototype._hasCrossedThreshold = function (oldEntry, newEntry) {
    // To make comparing easier, an entry that has a ratio of 0
    // but does not actually intersect is given a value of -1
    var oldRatio = oldEntry && oldEntry.isIntersecting ? oldEntry.intersectionRatio || 0 : -1;
    var newRatio = newEntry.isIntersecting ? newEntry.intersectionRatio || 0 : -1; // Ignore unchanged ratios

    if (oldRatio === newRatio) return;

    for (var i = 0; i < this.thresholds.length; i++) {
      var threshold = this.thresholds[i]; // Return true if an entry matches a threshold or if the new ratio
      // and the old ratio are on the opposite sides of a threshold.

      if (threshold == oldRatio || threshold == newRatio || threshold < oldRatio !== threshold < newRatio) {
        return true;
      }
    }
  };
  /**
   * Returns whether or not the root element is an element and is in the DOM.
   * @return {boolean} True if the root element is an element and is in the DOM.
   * @private
   */


  IntersectionObserver.prototype._rootIsInDom = function () {
    return !this.root || containsDeep(document, this.root);
  };
  /**
   * Returns whether or not the target element is a child of root.
   * @param {Element} target The target element to check.
   * @return {boolean} True if the target element is a child of root.
   * @private
   */


  IntersectionObserver.prototype._rootContainsTarget = function (target) {
    return containsDeep(this.root || document, target);
  };
  /**
   * Adds the instance to the global IntersectionObserver registry if it isn't
   * already present.
   * @private
   */


  IntersectionObserver.prototype._registerInstance = function () {
    if (registry.indexOf(this) < 0) {
      registry.push(this);
    }
  };
  /**
   * Removes the instance from the global IntersectionObserver registry.
   * @private
   */


  IntersectionObserver.prototype._unregisterInstance = function () {
    var index = registry.indexOf(this);
    if (index != -1) registry.splice(index, 1);
  };
  /**
   * Returns the result of the performance.now() method or null in browsers
   * that don't support the API.
   * @return {number} The elapsed time since the page was requested.
   */


  function now() {
    return window.performance && performance.now && performance.now();
  }
  /**
   * Throttles a function and delays its execution, so it's only called at most
   * once within a given time period.
   * @param {Function} fn The function to throttle.
   * @param {number} timeout The amount of time that must pass before the
   *     function can be called again.
   * @return {Function} The throttled function.
   */


  function throttle(fn, timeout) {
    var timer = null;
    return function () {
      if (!timer) {
        timer = setTimeout(function () {
          fn();
          timer = null;
        }, timeout);
      }
    };
  }
  /**
   * Adds an event handler to a DOM node ensuring cross-browser compatibility.
   * @param {Node} node The DOM node to add the event handler to.
   * @param {string} event The event name.
   * @param {Function} fn The event handler to add.
   * @param {boolean} opt_useCapture Optionally adds the even to the capture
   *     phase. Note: this only works in modern browsers.
   */


  function addEvent(node, event, fn, opt_useCapture) {
    if (typeof node.addEventListener == 'function') {
      node.addEventListener(event, fn, opt_useCapture || false);
    } else if (typeof node.attachEvent == 'function') {
      node.attachEvent('on' + event, fn);
    }
  }
  /**
   * Removes a previously added event handler from a DOM node.
   * @param {Node} node The DOM node to remove the event handler from.
   * @param {string} event The event name.
   * @param {Function} fn The event handler to remove.
   * @param {boolean} opt_useCapture If the event handler was added with this
   *     flag set to true, it should be set to true here in order to remove it.
   */


  function removeEvent(node, event, fn, opt_useCapture) {
    if (typeof node.removeEventListener == 'function') {
      node.removeEventListener(event, fn, opt_useCapture || false);
    } else if (typeof node.detatchEvent == 'function') {
      node.detatchEvent('on' + event, fn);
    }
  }
  /**
   * Returns the intersection between two rect objects.
   * @param {Object} rect1 The first rect.
   * @param {Object} rect2 The second rect.
   * @return {?Object} The intersection rect or undefined if no intersection
   *     is found.
   */


  function computeRectIntersection(rect1, rect2) {
    var top = Math.max(rect1.top, rect2.top);
    var bottom = Math.min(rect1.bottom, rect2.bottom);
    var left = Math.max(rect1.left, rect2.left);
    var right = Math.min(rect1.right, rect2.right);
    var width = right - left;
    var height = bottom - top;
    return width >= 0 && height >= 0 && {
      top: top,
      bottom: bottom,
      left: left,
      right: right,
      width: width,
      height: height
    };
  }
  /**
   * Shims the native getBoundingClientRect for compatibility with older IE.
   * @param {Element} el The element whose bounding rect to get.
   * @return {Object} The (possibly shimmed) rect of the element.
   */


  function getBoundingClientRect(el) {
    var rect;

    try {
      rect = el.getBoundingClientRect();
    } catch (err) {// Ignore Windows 7 IE11 "Unspecified error"
      // https://github.com/w3c/IntersectionObserver/pull/205
    }

    if (!rect) return getEmptyRect(); // Older IE

    if (!(rect.width && rect.height)) {
      rect = {
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        left: rect.left,
        width: rect.right - rect.left,
        height: rect.bottom - rect.top
      };
    }

    return rect;
  }
  /**
   * Returns an empty rect object. An empty rect is returned when an element
   * is not in the DOM.
   * @return {Object} The empty rect.
   */


  function getEmptyRect() {
    return {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 0,
      height: 0
    };
  }
  /**
   * Checks to see if a parent element contains a child element (including inside
   * shadow DOM).
   * @param {Node} parent The parent element.
   * @param {Node} child The child element.
   * @return {boolean} True if the parent node contains the child node.
   */


  function containsDeep(parent, child) {
    var node = child;

    while (node) {
      if (node == parent) return true;
      node = getParentNode(node);
    }

    return false;
  }
  /**
   * Gets the parent node of an element or its host element if the parent node
   * is a shadow root.
   * @param {Node} node The node whose parent to get.
   * @return {Node|null} The parent node or null if no parent exists.
   */


  function getParentNode(node) {
    var parent = node.parentNode;

    if (parent && parent.nodeType == 11 && parent.host) {
      // If the parent is a shadow root, return the host element.
      return parent.host;
    }

    if (parent && parent.assignedSlot) {
      // If the parent is distributed in a <slot>, return the parent of a slot.
      return parent.assignedSlot.parentNode;
    }

    return parent;
  } // Exposes the constructors globally.


  window.IntersectionObserver = IntersectionObserver;
  window.IntersectionObserverEntry = IntersectionObserverEntry;
})();

/***/ }),

/***/ "./node_modules/omit.js/es/index.js":
/*!******************************************!*\
  !*** ./node_modules/omit.js/es/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);


function omit(obj, fields) {
  var shallowCopy = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, obj);

  for (var i = 0; i < fields.length; i++) {
    var key = fields[i];
    delete shallowCopy[key];
  }

  return shallowCopy;
}

/* harmony default export */ __webpack_exports__["default"] = (omit);

/***/ }),

/***/ "./node_modules/react/umd/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/umd/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/** @license React v16.13.1
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function (exports) {
  'use strict';

  var ReactVersion = '16.13.1'; // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
  // nor polyfill, then a plain number is used for performance.

  var hasSymbol = typeof Symbol === 'function' && Symbol["for"];
  var REACT_ELEMENT_TYPE = hasSymbol ? Symbol["for"]('react.element') : 0xeac7;
  var REACT_PORTAL_TYPE = hasSymbol ? Symbol["for"]('react.portal') : 0xeaca;
  var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol["for"]('react.fragment') : 0xeacb;
  var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.strict_mode') : 0xeacc;
  var REACT_PROFILER_TYPE = hasSymbol ? Symbol["for"]('react.profiler') : 0xead2;
  var REACT_PROVIDER_TYPE = hasSymbol ? Symbol["for"]('react.provider') : 0xeacd;
  var REACT_CONTEXT_TYPE = hasSymbol ? Symbol["for"]('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary

  var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.concurrent_mode') : 0xeacf;
  var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol["for"]('react.forward_ref') : 0xead0;
  var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol["for"]('react.suspense') : 0xead1;
  var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol["for"]('react.suspense_list') : 0xead8;
  var REACT_MEMO_TYPE = hasSymbol ? Symbol["for"]('react.memo') : 0xead3;
  var REACT_LAZY_TYPE = hasSymbol ? Symbol["for"]('react.lazy') : 0xead4;
  var REACT_BLOCK_TYPE = hasSymbol ? Symbol["for"]('react.block') : 0xead9;
  var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol["for"]('react.fundamental') : 0xead5;
  var REACT_RESPONDER_TYPE = hasSymbol ? Symbol["for"]('react.responder') : 0xead6;
  var REACT_SCOPE_TYPE = hasSymbol ? Symbol["for"]('react.scope') : 0xead7;
  var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator';

  function getIteratorFn(maybeIterable) {
    if (maybeIterable === null || _typeof(maybeIterable) !== 'object') {
      return null;
    }

    var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

    if (typeof maybeIterator === 'function') {
      return maybeIterator;
    }

    return null;
  }
  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */

  /* eslint-disable no-unused-vars */


  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
    if (val === null || val === undefined) {
      throw new TypeError('Object.assign cannot be called with null or undefined');
    }

    return Object(val);
  }

  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      } // Detect buggy property enumeration order in older V8 versions.
      // https://bugs.chromium.org/p/v8/issues/detail?id=4118


      var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

      test1[5] = 'de';

      if (Object.getOwnPropertyNames(test1)[0] === '5') {
        return false;
      } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


      var test2 = {};

      for (var i = 0; i < 10; i++) {
        test2['_' + String.fromCharCode(i)] = i;
      }

      var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
        return test2[n];
      });

      if (order2.join('') !== '0123456789') {
        return false;
      } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


      var test3 = {};
      'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
        test3[letter] = letter;
      });

      if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
        return false;
      }

      return true;
    } catch (err) {
      // We don't expect any of the above to throw, but better to be safe.
      return false;
    }
  }

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
    var from;
    var to = toObject(target);
    var symbols;

    for (var s = 1; s < arguments.length; s++) {
      from = Object(arguments[s]);

      for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
          to[key] = from[key];
        }
      }

      if (getOwnPropertySymbols) {
        symbols = getOwnPropertySymbols(from);

        for (var i = 0; i < symbols.length; i++) {
          if (propIsEnumerable.call(from, symbols[i])) {
            to[symbols[i]] = from[symbols[i]];
          }
        }
      }
    }

    return to;
  };
  /**
   * Keeps track of the current dispatcher.
   */

  var ReactCurrentDispatcher = {
    /**
     * @internal
     * @type {ReactComponent}
     */
    current: null
  };
  /**
   * Keeps track of the current batch's configuration such as how long an update
   * should suspend for if it needs to.
   */

  var ReactCurrentBatchConfig = {
    suspense: null
  };
  /**
   * Keeps track of the current owner.
   *
   * The current owner is the component who should own any components that are
   * currently being constructed.
   */

  var ReactCurrentOwner = {
    /**
     * @internal
     * @type {ReactComponent}
     */
    current: null
  };
  var BEFORE_SLASH_RE = /^(.*)[\\\/]/;

  function describeComponentFrame(name, source, ownerName) {
    var sourceInfo = '';

    if (source) {
      var path = source.fileName;
      var fileName = path.replace(BEFORE_SLASH_RE, '');
      {
        // In DEV, include code for a common special case:
        // prefer "folder/index.js" instead of just "index.js".
        if (/^index\./.test(fileName)) {
          var match = path.match(BEFORE_SLASH_RE);

          if (match) {
            var pathBeforeSlash = match[1];

            if (pathBeforeSlash) {
              var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
              fileName = folderName + '/' + fileName;
            }
          }
        }
      }
      sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
    } else if (ownerName) {
      sourceInfo = ' (created by ' + ownerName + ')';
    }

    return '\n    in ' + (name || 'Unknown') + sourceInfo;
  }

  var Resolved = 1;

  function refineResolvedLazyComponent(lazyComponent) {
    return lazyComponent._status === Resolved ? lazyComponent._result : null;
  }

  function getWrappedName(outerType, innerType, wrapperName) {
    var functionName = innerType.displayName || innerType.name || '';
    return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
  }

  function getComponentName(type) {
    if (type == null) {
      // Host root, text node or just invalid type.
      return null;
    }

    {
      if (typeof type.tag === 'number') {
        error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
      }
    }

    if (typeof type === 'function') {
      return type.displayName || type.name || null;
    }

    if (typeof type === 'string') {
      return type;
    }

    switch (type) {
      case REACT_FRAGMENT_TYPE:
        return 'Fragment';

      case REACT_PORTAL_TYPE:
        return 'Portal';

      case REACT_PROFILER_TYPE:
        return "Profiler";

      case REACT_STRICT_MODE_TYPE:
        return 'StrictMode';

      case REACT_SUSPENSE_TYPE:
        return 'Suspense';

      case REACT_SUSPENSE_LIST_TYPE:
        return 'SuspenseList';
    }

    if (_typeof(type) === 'object') {
      switch (type.$$typeof) {
        case REACT_CONTEXT_TYPE:
          return 'Context.Consumer';

        case REACT_PROVIDER_TYPE:
          return 'Context.Provider';

        case REACT_FORWARD_REF_TYPE:
          return getWrappedName(type, type.render, 'ForwardRef');

        case REACT_MEMO_TYPE:
          return getComponentName(type.type);

        case REACT_BLOCK_TYPE:
          return getComponentName(type.render);

        case REACT_LAZY_TYPE:
          {
            var thenable = type;
            var resolvedThenable = refineResolvedLazyComponent(thenable);

            if (resolvedThenable) {
              return getComponentName(resolvedThenable);
            }

            break;
          }
      }
    }

    return null;
  }

  var ReactDebugCurrentFrame = {};
  var currentlyValidatingElement = null;

  function setCurrentlyValidatingElement(element) {
    {
      currentlyValidatingElement = element;
    }
  }

  {
    // Stack implementation injected by the current renderer.
    ReactDebugCurrentFrame.getCurrentStack = null;

    ReactDebugCurrentFrame.getStackAddendum = function () {
      var stack = ''; // Add an extra top frame while an element is being validated

      if (currentlyValidatingElement) {
        var name = getComponentName(currentlyValidatingElement.type);
        var owner = currentlyValidatingElement._owner;
        stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
      } // Delegate to the injected renderer-specific implementation


      var impl = ReactDebugCurrentFrame.getCurrentStack;

      if (impl) {
        stack += impl() || '';
      }

      return stack;
    };
  }
  /**
   * Used by act() to track whether you're inside an act() scope.
   */

  var IsSomeRendererActing = {
    current: false
  };
  var ReactSharedInternals = {
    ReactCurrentDispatcher: ReactCurrentDispatcher,
    ReactCurrentBatchConfig: ReactCurrentBatchConfig,
    ReactCurrentOwner: ReactCurrentOwner,
    IsSomeRendererActing: IsSomeRendererActing,
    // Used by renderers to avoid bundling object-assign twice in UMD bundles:
    assign: objectAssign
  };
  {
    objectAssign(ReactSharedInternals, {
      // These should not be included in production.
      ReactDebugCurrentFrame: ReactDebugCurrentFrame,
      // Shim for React DOM 16.0.0 which still destructured (but not used) this.
      // TODO: remove in React 17.0.
      ReactComponentTreeHook: {}
    });
  } // by calls to these methods by a Babel plugin.
  //
  // In PROD (or in packages without access to React internals),
  // they are left as they are instead.

  function warn(format) {
    {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      printWarning('warn', format, args);
    }
  }

  function error(format) {
    {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      printWarning('error', format, args);
    }
  }

  function printWarning(level, format, args) {
    // When changing this logic, you might want to also
    // update consoleWithStackDev.www.js as well.
    {
      var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === 'string' && args[args.length - 1].indexOf('\n    in') === 0;

      if (!hasExistingStack) {
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        var stack = ReactDebugCurrentFrame.getStackAddendum();

        if (stack !== '') {
          format += '%s';
          args = args.concat([stack]);
        }
      }

      var argsWithFormat = args.map(function (item) {
        return '' + item;
      }); // Careful: RN currently depends on this prefix

      argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
      // breaks IE9: https://github.com/facebook/react/issues/13610
      // eslint-disable-next-line react-internal/no-production-logging

      Function.prototype.apply.call(console[level], console, argsWithFormat);

      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        var argIndex = 0;
        var message = 'Warning: ' + format.replace(/%s/g, function () {
          return args[argIndex++];
        });
        throw new Error(message);
      } catch (x) {}
    }
  }

  var didWarnStateUpdateForUnmountedComponent = {};

  function warnNoop(publicInstance, callerName) {
    {
      var _constructor = publicInstance.constructor;
      var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
      var warningKey = componentName + "." + callerName;

      if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
        return;
      }

      error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
      didWarnStateUpdateForUnmountedComponent[warningKey] = true;
    }
  }
  /**
   * This is the abstract API for an update queue.
   */


  var ReactNoopUpdateQueue = {
    /**
     * Checks whether or not this composite component is mounted.
     * @param {ReactClass} publicInstance The instance we want to test.
     * @return {boolean} True if mounted, false otherwise.
     * @protected
     * @final
     */
    isMounted: function isMounted(publicInstance) {
      return false;
    },

    /**
     * Forces an update. This should only be invoked when it is known with
     * certainty that we are **not** in a DOM transaction.
     *
     * You may want to call this when you know that some deeper aspect of the
     * component's state has changed but `setState` was not called.
     *
     * This will not invoke `shouldComponentUpdate`, but it will invoke
     * `componentWillUpdate` and `componentDidUpdate`.
     *
     * @param {ReactClass} publicInstance The instance that should rerender.
     * @param {?function} callback Called after component is updated.
     * @param {?string} callerName name of the calling function in the public API.
     * @internal
     */
    enqueueForceUpdate: function enqueueForceUpdate(publicInstance, callback, callerName) {
      warnNoop(publicInstance, 'forceUpdate');
    },

    /**
     * Replaces all of the state. Always use this or `setState` to mutate state.
     * You should treat `this.state` as immutable.
     *
     * There is no guarantee that `this.state` will be immediately updated, so
     * accessing `this.state` after calling this method may return the old value.
     *
     * @param {ReactClass} publicInstance The instance that should rerender.
     * @param {object} completeState Next state.
     * @param {?function} callback Called after component is updated.
     * @param {?string} callerName name of the calling function in the public API.
     * @internal
     */
    enqueueReplaceState: function enqueueReplaceState(publicInstance, completeState, callback, callerName) {
      warnNoop(publicInstance, 'replaceState');
    },

    /**
     * Sets a subset of the state. This only exists because _pendingState is
     * internal. This provides a merging strategy that is not available to deep
     * properties which is confusing. TODO: Expose pendingState or don't use it
     * during the merge.
     *
     * @param {ReactClass} publicInstance The instance that should rerender.
     * @param {object} partialState Next partial state to be merged with state.
     * @param {?function} callback Called after component is updated.
     * @param {?string} Name of the calling function in the public API.
     * @internal
     */
    enqueueSetState: function enqueueSetState(publicInstance, partialState, callback, callerName) {
      warnNoop(publicInstance, 'setState');
    }
  };
  var emptyObject = {};
  {
    Object.freeze(emptyObject);
  }
  /**
   * Base class helpers for the updating state of a component.
   */

  function Component(props, context, updater) {
    this.props = props;
    this.context = context; // If a component has string refs, we will assign a different object later.

    this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
    // renderer.

    this.updater = updater || ReactNoopUpdateQueue;
  }

  Component.prototype.isReactComponent = {};
  /**
   * Sets a subset of the state. Always use this to mutate
   * state. You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * There is no guarantee that calls to `setState` will run synchronously,
   * as they may eventually be batched together.  You can provide an optional
   * callback that will be executed when the call to setState is actually
   * completed.
   *
   * When a function is provided to setState, it will be called at some point in
   * the future (not synchronously). It will be called with the up to date
   * component arguments (state, props, context). These values can be different
   * from this.* because your function may be called after receiveProps but before
   * shouldComponentUpdate, and this new state, props, and context will not yet be
   * assigned to this.
   *
   * @param {object|function} partialState Next partial state or function to
   *        produce next partial state to be merged with current state.
   * @param {?function} callback Called after state is updated.
   * @final
   * @protected
   */

  Component.prototype.setState = function (partialState, callback) {
    if (!(_typeof(partialState) === 'object' || typeof partialState === 'function' || partialState == null)) {
      {
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      }
    }

    this.updater.enqueueSetState(this, partialState, callback, 'setState');
  };
  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {?function} callback Called after update is complete.
   * @final
   * @protected
   */


  Component.prototype.forceUpdate = function (callback) {
    this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
  };
  /**
   * Deprecated APIs. These APIs used to exist on classic React classes but since
   * we would like to deprecate them, we're not going to move them over to this
   * modern base class. Instead, we define a getter that warns if it's accessed.
   */


  {
    var deprecatedAPIs = {
      isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
      replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
    };

    var defineDeprecationWarning = function defineDeprecationWarning(methodName, info) {
      Object.defineProperty(Component.prototype, methodName, {
        get: function get() {
          warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
          return undefined;
        }
      });
    };

    for (var fnName in deprecatedAPIs) {
      if (deprecatedAPIs.hasOwnProperty(fnName)) {
        defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
      }
    }
  }

  function ComponentDummy() {}

  ComponentDummy.prototype = Component.prototype;
  /**
   * Convenience component with default shallow equality check for sCU.
   */

  function PureComponent(props, context, updater) {
    this.props = props;
    this.context = context; // If a component has string refs, we will assign a different object later.

    this.refs = emptyObject;
    this.updater = updater || ReactNoopUpdateQueue;
  }

  var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
  pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

  objectAssign(pureComponentPrototype, Component.prototype);
  pureComponentPrototype.isPureReactComponent = true; // an immutable object with a single mutable value

  function createRef() {
    var refObject = {
      current: null
    };
    {
      Object.seal(refObject);
    }
    return refObject;
  }

  var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
  var RESERVED_PROPS = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
  {
    didWarnAboutStringRefs = {};
  }

  function hasValidRef(config) {
    {
      if (hasOwnProperty$1.call(config, 'ref')) {
        var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

        if (getter && getter.isReactWarning) {
          return false;
        }
      }
    }
    return config.ref !== undefined;
  }

  function hasValidKey(config) {
    {
      if (hasOwnProperty$1.call(config, 'key')) {
        var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

        if (getter && getter.isReactWarning) {
          return false;
        }
      }
    }
    return config.key !== undefined;
  }

  function defineKeyPropWarningGetter(props, displayName) {
    var warnAboutAccessingKey = function warnAboutAccessingKey() {
      {
        if (!specialPropKeyWarningShown) {
          specialPropKeyWarningShown = true;
          error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
        }
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }

  function defineRefPropWarningGetter(props, displayName) {
    var warnAboutAccessingRef = function warnAboutAccessingRef() {
      {
        if (!specialPropRefWarningShown) {
          specialPropRefWarningShown = true;
          error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
        }
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }

  function warnIfStringRefCannotBeAutoConverted(config) {
    {
      if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
        var componentName = getComponentName(ReactCurrentOwner.current.type);

        if (!didWarnAboutStringRefs[componentName]) {
          error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://fb.me/react-strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);
          didWarnAboutStringRefs[componentName] = true;
        }
      }
    }
  }
  /**
   * Factory method to create a new React element. This no longer adheres to
   * the class pattern, so do not use new to call it. Also, instanceof check
   * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
   * if something is a React Element.
   *
   * @param {*} type
   * @param {*} props
   * @param {*} key
   * @param {string|object} ref
   * @param {*} owner
   * @param {*} self A *temporary* helper to detect places where `this` is
   * different from the `owner` when React.createElement is called, so that we
   * can warn. We want to get rid of owner and replace string `ref`s with arrow
   * functions, and as long as `this` and owner are the same, there will be no
   * change in behavior.
   * @param {*} source An annotation object (added by a transpiler or otherwise)
   * indicating filename, line number, and/or other information.
   * @internal
   */


  var ReactElement = function ReactElement(type, key, ref, self, source, owner, props) {
    var element = {
      // This tag allows us to uniquely identify this as a React Element
      $$typeof: REACT_ELEMENT_TYPE,
      // Built-in properties that belong on the element
      type: type,
      key: key,
      ref: ref,
      props: props,
      // Record the component responsible for creating this element.
      _owner: owner
    };
    {
      // The validation flag is currently mutative. We put it on
      // an external backing store so that we can freeze the whole object.
      // This can be replaced with a WeakMap once they are implemented in
      // commonly used development environments.
      element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
      // the validation flag non-enumerable (where possible, which should
      // include every environment we run tests in), so the test framework
      // ignores it.

      Object.defineProperty(element._store, 'validated', {
        configurable: false,
        enumerable: false,
        writable: true,
        value: false
      }); // self and source are DEV only properties.

      Object.defineProperty(element, '_self', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: self
      }); // Two elements created in two different places should be considered
      // equal for testing purposes and therefore we hide it from enumeration.

      Object.defineProperty(element, '_source', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: source
      });

      if (Object.freeze) {
        Object.freeze(element.props);
        Object.freeze(element);
      }
    }
    return element;
  };
  /**
   * Create and return a new ReactElement of the given type.
   * See https://reactjs.org/docs/react-api.html#createelement
   */


  function createElement(type, config, children) {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null;
    var self = null;
    var source = null;

    if (config != null) {
      if (hasValidRef(config)) {
        ref = config.ref;
        {
          warnIfStringRefCannotBeAutoConverted(config);
        }
      }

      if (hasValidKey(config)) {
        key = '' + config.key;
      }

      self = config.__self === undefined ? null : config.__self;
      source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

      for (propName in config) {
        if (hasOwnProperty$1.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
          props[propName] = config[propName];
        }
      }
    } // Children can be more than one argument, and those are transferred onto
    // the newly allocated props object.


    var childrenLength = arguments.length - 2;

    if (childrenLength === 1) {
      props.children = children;
    } else if (childrenLength > 1) {
      var childArray = Array(childrenLength);

      for (var i = 0; i < childrenLength; i++) {
        childArray[i] = arguments[i + 2];
      }

      {
        if (Object.freeze) {
          Object.freeze(childArray);
        }
      }
      props.children = childArray;
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    {
      if (key || ref) {
        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

        if (key) {
          defineKeyPropWarningGetter(props, displayName);
        }

        if (ref) {
          defineRefPropWarningGetter(props, displayName);
        }
      }
    }
    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }

  function cloneAndReplaceKey(oldElement, newKey) {
    var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
    return newElement;
  }
  /**
   * Clone and return a new ReactElement using element as the starting point.
   * See https://reactjs.org/docs/react-api.html#cloneelement
   */


  function cloneElement(element, config, children) {
    if (!!(element === null || element === undefined)) {
      {
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
      }
    }

    var propName; // Original props are copied

    var props = objectAssign({}, element.props); // Reserved names are extracted

    var key = element.key;
    var ref = element.ref; // Self is preserved since the owner is preserved.

    var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
    // transpiler, and the original source is probably a better indicator of the
    // true owner.

    var source = element._source; // Owner will be preserved, unless ref is overridden

    var owner = element._owner;

    if (config != null) {
      if (hasValidRef(config)) {
        // Silently steal the ref from the parent.
        ref = config.ref;
        owner = ReactCurrentOwner.current;
      }

      if (hasValidKey(config)) {
        key = '' + config.key;
      } // Remaining properties override existing props


      var defaultProps;

      if (element.type && element.type.defaultProps) {
        defaultProps = element.type.defaultProps;
      }

      for (propName in config) {
        if (hasOwnProperty$1.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
          if (config[propName] === undefined && defaultProps !== undefined) {
            // Resolve default props
            props[propName] = defaultProps[propName];
          } else {
            props[propName] = config[propName];
          }
        }
      }
    } // Children can be more than one argument, and those are transferred onto
    // the newly allocated props object.


    var childrenLength = arguments.length - 2;

    if (childrenLength === 1) {
      props.children = children;
    } else if (childrenLength > 1) {
      var childArray = Array(childrenLength);

      for (var i = 0; i < childrenLength; i++) {
        childArray[i] = arguments[i + 2];
      }

      props.children = childArray;
    }

    return ReactElement(element.type, key, ref, self, source, owner, props);
  }
  /**
   * Verifies the object is a ReactElement.
   * See https://reactjs.org/docs/react-api.html#isvalidelement
   * @param {?object} object
   * @return {boolean} True if `object` is a ReactElement.
   * @final
   */


  function isValidElement(object) {
    return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }

  var SEPARATOR = '.';
  var SUBSEPARATOR = ':';
  /**
   * Escape and wrap key so it is safe to use as a reactid
   *
   * @param {string} key to be escaped.
   * @return {string} the escaped key.
   */

  function escape(key) {
    var escapeRegex = /[=:]/g;
    var escaperLookup = {
      '=': '=0',
      ':': '=2'
    };
    var escapedString = ('' + key).replace(escapeRegex, function (match) {
      return escaperLookup[match];
    });
    return '$' + escapedString;
  }
  /**
   * TODO: Test that a single child and an array with one item have the same key
   * pattern.
   */


  var didWarnAboutMaps = false;
  var userProvidedKeyEscapeRegex = /\/+/g;

  function escapeUserProvidedKey(text) {
    return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
  }

  var POOL_SIZE = 10;
  var traverseContextPool = [];

  function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
    if (traverseContextPool.length) {
      var traverseContext = traverseContextPool.pop();
      traverseContext.result = mapResult;
      traverseContext.keyPrefix = keyPrefix;
      traverseContext.func = mapFunction;
      traverseContext.context = mapContext;
      traverseContext.count = 0;
      return traverseContext;
    } else {
      return {
        result: mapResult,
        keyPrefix: keyPrefix,
        func: mapFunction,
        context: mapContext,
        count: 0
      };
    }
  }

  function releaseTraverseContext(traverseContext) {
    traverseContext.result = null;
    traverseContext.keyPrefix = null;
    traverseContext.func = null;
    traverseContext.context = null;
    traverseContext.count = 0;

    if (traverseContextPool.length < POOL_SIZE) {
      traverseContextPool.push(traverseContext);
    }
  }
  /**
   * @param {?*} children Children tree container.
   * @param {!string} nameSoFar Name of the key path so far.
   * @param {!function} callback Callback to invoke with each child found.
   * @param {?*} traverseContext Used to pass information throughout the traversal
   * process.
   * @return {!number} The number of children in this subtree.
   */


  function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
    var type = _typeof(children);

    if (type === 'undefined' || type === 'boolean') {
      // All of the above are perceived as null.
      children = null;
    }

    var invokeCallback = false;

    if (children === null) {
      invokeCallback = true;
    } else {
      switch (type) {
        case 'string':
        case 'number':
          invokeCallback = true;
          break;

        case 'object':
          switch (children.$$typeof) {
            case REACT_ELEMENT_TYPE:
            case REACT_PORTAL_TYPE:
              invokeCallback = true;
          }

      }
    }

    if (invokeCallback) {
      callback(traverseContext, children, // If it's the only child, treat the name as if it was wrapped in an array
      // so that it's consistent if the number of children grows.
      nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
      return 1;
    }

    var child;
    var nextName;
    var subtreeCount = 0; // Count of children found in the current subtree.

    var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; i++) {
        child = children[i];
        nextName = nextNamePrefix + getComponentKey(child, i);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else {
      var iteratorFn = getIteratorFn(children);

      if (typeof iteratorFn === 'function') {
        {
          // Warn about using Maps as children
          if (iteratorFn === children.entries) {
            if (!didWarnAboutMaps) {
              warn('Using Maps as children is deprecated and will be removed in ' + 'a future major release. Consider converting children to ' + 'an array of keyed ReactElements instead.');
            }

            didWarnAboutMaps = true;
          }
        }
        var iterator = iteratorFn.call(children);
        var step;
        var ii = 0;

        while (!(step = iterator.next()).done) {
          child = step.value;
          nextName = nextNamePrefix + getComponentKey(child, ii++);
          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
        }
      } else if (type === 'object') {
        var addendum = '';
        {
          addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
        }
        var childrenString = '' + children;
        {
          {
            throw Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + ")." + addendum);
          }
        }
      }
    }

    return subtreeCount;
  }
  /**
   * Traverses children that are typically specified as `props.children`, but
   * might also be specified through attributes:
   *
   * - `traverseAllChildren(this.props.children, ...)`
   * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
   *
   * The `traverseContext` is an optional argument that is passed through the
   * entire traversal. It can be used to store accumulations or anything else that
   * the callback might find relevant.
   *
   * @param {?*} children Children tree object.
   * @param {!function} callback To invoke upon traversing each child.
   * @param {?*} traverseContext Context for traversal.
   * @return {!number} The number of children in this subtree.
   */


  function traverseAllChildren(children, callback, traverseContext) {
    if (children == null) {
      return 0;
    }

    return traverseAllChildrenImpl(children, '', callback, traverseContext);
  }
  /**
   * Generate a key string that identifies a component within a set.
   *
   * @param {*} component A component that could contain a manual key.
   * @param {number} index Index that is used if a manual key is not provided.
   * @return {string}
   */


  function getComponentKey(component, index) {
    // Do some typechecking here since we call this blindly. We want to ensure
    // that we don't block potential future ES APIs.
    if (_typeof(component) === 'object' && component !== null && component.key != null) {
      // Explicit key
      return escape(component.key);
    } // Implicit key determined by the index in the set


    return index.toString(36);
  }

  function forEachSingleChild(bookKeeping, child, name) {
    var func = bookKeeping.func,
        context = bookKeeping.context;
    func.call(context, child, bookKeeping.count++);
  }
  /**
   * Iterates through children that are typically specified as `props.children`.
   *
   * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
   *
   * The provided forEachFunc(child, index) will be called for each
   * leaf child.
   *
   * @param {?*} children Children tree container.
   * @param {function(*, int)} forEachFunc
   * @param {*} forEachContext Context for forEachContext.
   */


  function forEachChildren(children, forEachFunc, forEachContext) {
    if (children == null) {
      return children;
    }

    var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
    traverseAllChildren(children, forEachSingleChild, traverseContext);
    releaseTraverseContext(traverseContext);
  }

  function mapSingleChildIntoContext(bookKeeping, child, childKey) {
    var result = bookKeeping.result,
        keyPrefix = bookKeeping.keyPrefix,
        func = bookKeeping.func,
        context = bookKeeping.context;
    var mappedChild = func.call(context, child, bookKeeping.count++);

    if (Array.isArray(mappedChild)) {
      mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
        return c;
      });
    } else if (mappedChild != null) {
      if (isValidElement(mappedChild)) {
        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
      }

      result.push(mappedChild);
    }
  }

  function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
    var escapedPrefix = '';

    if (prefix != null) {
      escapedPrefix = escapeUserProvidedKey(prefix) + '/';
    }

    var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
    traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
    releaseTraverseContext(traverseContext);
  }
  /**
   * Maps children that are typically specified as `props.children`.
   *
   * See https://reactjs.org/docs/react-api.html#reactchildrenmap
   *
   * The provided mapFunction(child, key, index) will be called for each
   * leaf child.
   *
   * @param {?*} children Children tree container.
   * @param {function(*, int)} func The map function.
   * @param {*} context Context for mapFunction.
   * @return {object} Object containing the ordered map of results.
   */


  function mapChildren(children, func, context) {
    if (children == null) {
      return children;
    }

    var result = [];
    mapIntoWithKeyPrefixInternal(children, result, null, func, context);
    return result;
  }
  /**
   * Count the number of children that are typically specified as
   * `props.children`.
   *
   * See https://reactjs.org/docs/react-api.html#reactchildrencount
   *
   * @param {?*} children Children tree container.
   * @return {number} The number of children.
   */


  function countChildren(children) {
    return traverseAllChildren(children, function () {
      return null;
    }, null);
  }
  /**
   * Flatten a children object (typically specified as `props.children`) and
   * return an array with appropriately re-keyed children.
   *
   * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
   */


  function toArray(children) {
    var result = [];
    mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
      return child;
    });
    return result;
  }
  /**
   * Returns the first child in a collection of children and verifies that there
   * is only one child in the collection.
   *
   * See https://reactjs.org/docs/react-api.html#reactchildrenonly
   *
   * The current implementation of this function assumes that a single child gets
   * passed without a wrapper, but the purpose of this helper function is to
   * abstract away the particular structure of children.
   *
   * @param {?object} children Child collection structure.
   * @return {ReactElement} The first and only `ReactElement` contained in the
   * structure.
   */


  function onlyChild(children) {
    if (!isValidElement(children)) {
      {
        throw Error("React.Children.only expected to receive a single React element child.");
      }
    }

    return children;
  }

  function createContext(defaultValue, calculateChangedBits) {
    if (calculateChangedBits === undefined) {
      calculateChangedBits = null;
    } else {
      {
        if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
          error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
        }
      }
    }

    var context = {
      $$typeof: REACT_CONTEXT_TYPE,
      _calculateChangedBits: calculateChangedBits,
      // As a workaround to support multiple concurrent renderers, we categorize
      // some renderers as primary and others as secondary. We only expect
      // there to be two concurrent renderers at most: React Native (primary) and
      // Fabric (secondary); React DOM (primary) and React ART (secondary).
      // Secondary renderers store their context values on separate fields.
      _currentValue: defaultValue,
      _currentValue2: defaultValue,
      // Used to track how many concurrent renderers this context currently
      // supports within in a single renderer. Such as parallel server rendering.
      _threadCount: 0,
      // These are circular
      Provider: null,
      Consumer: null
    };
    context.Provider = {
      $$typeof: REACT_PROVIDER_TYPE,
      _context: context
    };
    var hasWarnedAboutUsingNestedContextConsumers = false;
    var hasWarnedAboutUsingConsumerProvider = false;
    {
      // A separate object, but proxies back to the original context object for
      // backwards compatibility. It has a different $$typeof, so we can properly
      // warn for the incorrect usage of Context as a Consumer.
      var Consumer = {
        $$typeof: REACT_CONTEXT_TYPE,
        _context: context,
        _calculateChangedBits: context._calculateChangedBits
      }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

      Object.defineProperties(Consumer, {
        Provider: {
          get: function get() {
            if (!hasWarnedAboutUsingConsumerProvider) {
              hasWarnedAboutUsingConsumerProvider = true;
              error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
            }

            return context.Provider;
          },
          set: function set(_Provider) {
            context.Provider = _Provider;
          }
        },
        _currentValue: {
          get: function get() {
            return context._currentValue;
          },
          set: function set(_currentValue) {
            context._currentValue = _currentValue;
          }
        },
        _currentValue2: {
          get: function get() {
            return context._currentValue2;
          },
          set: function set(_currentValue2) {
            context._currentValue2 = _currentValue2;
          }
        },
        _threadCount: {
          get: function get() {
            return context._threadCount;
          },
          set: function set(_threadCount) {
            context._threadCount = _threadCount;
          }
        },
        Consumer: {
          get: function get() {
            if (!hasWarnedAboutUsingNestedContextConsumers) {
              hasWarnedAboutUsingNestedContextConsumers = true;
              error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
            }

            return context.Consumer;
          }
        }
      }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

      context.Consumer = Consumer;
    }
    {
      context._currentRenderer = null;
      context._currentRenderer2 = null;
    }
    return context;
  }

  function lazy(ctor) {
    var lazyType = {
      $$typeof: REACT_LAZY_TYPE,
      _ctor: ctor,
      // React uses these fields to store the result.
      _status: -1,
      _result: null
    };
    {
      // In production, this would just set it on the object.
      var defaultProps;
      var propTypes;
      Object.defineProperties(lazyType, {
        defaultProps: {
          configurable: true,
          get: function get() {
            return defaultProps;
          },
          set: function set(newDefaultProps) {
            error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
            defaultProps = newDefaultProps; // Match production behavior more closely:

            Object.defineProperty(lazyType, 'defaultProps', {
              enumerable: true
            });
          }
        },
        propTypes: {
          configurable: true,
          get: function get() {
            return propTypes;
          },
          set: function set(newPropTypes) {
            error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
            propTypes = newPropTypes; // Match production behavior more closely:

            Object.defineProperty(lazyType, 'propTypes', {
              enumerable: true
            });
          }
        }
      });
    }
    return lazyType;
  }

  function forwardRef(render) {
    {
      if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
        error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
      } else if (typeof render !== 'function') {
        error('forwardRef requires a render function but was given %s.', render === null ? 'null' : _typeof(render));
      } else {
        if (render.length !== 0 && render.length !== 2) {
          error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
        }
      }

      if (render != null) {
        if (render.defaultProps != null || render.propTypes != null) {
          error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
        }
      }
    }
    return {
      $$typeof: REACT_FORWARD_REF_TYPE,
      render: render
    };
  }

  function isValidElementType(type) {
    return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
    type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || _typeof(type) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
  }

  function memo(type, compare) {
    {
      if (!isValidElementType(type)) {
        error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : _typeof(type));
      }
    }
    return {
      $$typeof: REACT_MEMO_TYPE,
      type: type,
      compare: compare === undefined ? null : compare
    };
  }

  function resolveDispatcher() {
    var dispatcher = ReactCurrentDispatcher.current;

    if (!(dispatcher !== null)) {
      {
        throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.");
      }
    }

    return dispatcher;
  }

  function useContext(Context, unstable_observedBits) {
    var dispatcher = resolveDispatcher();
    {
      if (unstable_observedBits !== undefined) {
        error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '');
      } // TODO: add a more generic warning for invalid values.


      if (Context._context !== undefined) {
        var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
        // and nobody should be using this in existing code.

        if (realContext.Consumer === Context) {
          error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
        } else if (realContext.Provider === Context) {
          error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
        }
      }
    }
    return dispatcher.useContext(Context, unstable_observedBits);
  }

  function useState(initialState) {
    var dispatcher = resolveDispatcher();
    return dispatcher.useState(initialState);
  }

  function useReducer(reducer, initialArg, init) {
    var dispatcher = resolveDispatcher();
    return dispatcher.useReducer(reducer, initialArg, init);
  }

  function useRef(initialValue) {
    var dispatcher = resolveDispatcher();
    return dispatcher.useRef(initialValue);
  }

  function useEffect(create, deps) {
    var dispatcher = resolveDispatcher();
    return dispatcher.useEffect(create, deps);
  }

  function useLayoutEffect(create, deps) {
    var dispatcher = resolveDispatcher();
    return dispatcher.useLayoutEffect(create, deps);
  }

  function useCallback(callback, deps) {
    var dispatcher = resolveDispatcher();
    return dispatcher.useCallback(callback, deps);
  }

  function useMemo(create, deps) {
    var dispatcher = resolveDispatcher();
    return dispatcher.useMemo(create, deps);
  }

  function useImperativeHandle(ref, create, deps) {
    var dispatcher = resolveDispatcher();
    return dispatcher.useImperativeHandle(ref, create, deps);
  }

  function useDebugValue(value, formatterFn) {
    {
      var dispatcher = resolveDispatcher();
      return dispatcher.useDebugValue(value, formatterFn);
    }
  }
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */


  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  var ReactPropTypesSecret_1 = ReactPropTypesSecret;

  var printWarning$1 = function printWarning$1() {};

  {
    var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
    var loggedTypeFailures = {};
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    printWarning$1 = function printWarning$1(text) {
      var message = 'Warning: ' + text;

      if (typeof console !== 'undefined') {
        console.error(message);
      }

      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };
  }
  /**
   * Assert that the values match with the type specs.
   * Error messages are memorized and will only be shown once.
   *
   * @param {object} typeSpecs Map of name to a ReactPropType
   * @param {object} values Runtime values that need to be type-checked
   * @param {string} location e.g. "prop", "context", "child context"
   * @param {string} componentName Name of the component for error messages.
   * @param {?Function} getStack Returns the component stack.
   * @private
   */

  function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    {
      for (var typeSpecName in typeSpecs) {
        if (has(typeSpecs, typeSpecName)) {
          var error; // Prop type validation may throw. In case they do, we don't want to
          // fail the render phase where it didn't fail before. So we log it.
          // After these have been cleaned up, we'll let them throw.

          try {
            // This is intentionally an invariant that gets caught. It's the same
            // behavior as without this statement except with a better message.
            if (typeof typeSpecs[typeSpecName] !== 'function') {
              var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.');
              err.name = 'Invariant Violation';
              throw err;
            }

            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
          } catch (ex) {
            error = ex;
          }

          if (error && !(error instanceof Error)) {
            printWarning$1((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + _typeof(error) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
          }

          if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            // Only monitor this failure once because there tends to be a lot of the
            // same error.
            loggedTypeFailures[error.message] = true;
            var stack = getStack ? getStack() : '';
            printWarning$1('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
          }
        }
      }
    }
  }
  /**
   * Resets warning cache when testing.
   *
   * @private
   */


  checkPropTypes.resetWarningCache = function () {
    {
      loggedTypeFailures = {};
    }
  };

  var checkPropTypes_1 = checkPropTypes;
  var propTypesMisspellWarningShown;
  {
    propTypesMisspellWarningShown = false;
  }

  function getDeclarationErrorAddendum() {
    if (ReactCurrentOwner.current) {
      var name = getComponentName(ReactCurrentOwner.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }

  function getSourceInfoErrorAddendum(source) {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }

  function getSourceInfoErrorAddendumForProps(elementProps) {
    if (elementProps !== null && elementProps !== undefined) {
      return getSourceInfoErrorAddendum(elementProps.__source);
    }

    return '';
  }
  /**
   * Warn if there's no key explicitly set on dynamic arrays of children or
   * object keys are not valid. This allows us to keep track of children between
   * updates.
   */


  var ownerHasKeyUseWarning = {};

  function getCurrentComponentErrorInfo(parentType) {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
  /**
   * Warn if the element doesn't have an explicit key assigned to it.
   * This element is in an array. The array could grow and shrink or be
   * reordered. All children that haven't already been validated are required to
   * have a "key" property assigned to it. Error statuses are cached so a warning
   * will only be shown once.
   *
   * @internal
   * @param {ReactElement} element Element that requires a key.
   * @param {*} parentType element's parent's type.
   */


  function validateExplicitKey(element, parentType) {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement(element);
    {
      error('Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
    }
    setCurrentlyValidatingElement(null);
  }
  /**
   * Ensure that every element either is passed in a static location, in an
   * array with an explicit keys property defined, or in an object literal
   * with valid key property.
   *
   * @internal
   * @param {ReactNode} node Statically passed child of any type.
   * @param {*} parentType node's parent's type.
   */


  function validateChildKeys(node, parentType) {
    if (_typeof(node) !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
  /**
   * Given an element, validate that its props follow the propTypes definition,
   * provided by the type.
   *
   * @param {ReactElement} element
   */


  function validatePropTypes(element) {
    {
      var type = element.type;

      if (type === null || type === undefined || typeof type === 'string') {
        return;
      }

      var name = getComponentName(type);
      var propTypes;

      if (typeof type === 'function') {
        propTypes = type.propTypes;
      } else if (_typeof(type) === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
      // Inner props are checked in the reconciler.
      type.$$typeof === REACT_MEMO_TYPE)) {
        propTypes = type.propTypes;
      } else {
        return;
      }

      if (propTypes) {
        setCurrentlyValidatingElement(element);
        checkPropTypes_1(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
        setCurrentlyValidatingElement(null);
      } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
        propTypesMisspellWarningShown = true;
        error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
      }

      if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
        error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
      }
    }
  }
  /**
   * Given a fragment, validate that it can only be provided with fragment props
   * @param {ReactElement} fragment
   */


  function validateFragmentProps(fragment) {
    {
      setCurrentlyValidatingElement(fragment);
      var keys = Object.keys(fragment.props);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];

        if (key !== 'children' && key !== 'key') {
          error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
          break;
        }
      }

      if (fragment.ref !== null) {
        error('Invalid attribute `ref` supplied to `React.Fragment`.');
      }

      setCurrentlyValidatingElement(null);
    }
  }

  function createElementWithValidation(type, props, children) {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || _typeof(type) === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendumForProps(props);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = _typeof(type);
      }

      {
        error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
      }
    }

    var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      for (var i = 2; i < arguments.length; i++) {
        validateChildKeys(arguments[i], type);
      }
    }

    if (type === REACT_FRAGMENT_TYPE) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }

  var didWarnAboutDeprecatedCreateFactory = false;

  function createFactoryWithValidation(type) {
    var validatedFactory = createElementWithValidation.bind(null, type);
    validatedFactory.type = type;
    {
      if (!didWarnAboutDeprecatedCreateFactory) {
        didWarnAboutDeprecatedCreateFactory = true;
        warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
      } // Legacy hook: remove it


      Object.defineProperty(validatedFactory, 'type', {
        enumerable: false,
        get: function get() {
          warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
          Object.defineProperty(this, 'type', {
            value: type
          });
          return type;
        }
      });
    }
    return validatedFactory;
  }

  function cloneElementWithValidation(element, props, children) {
    var newElement = cloneElement.apply(this, arguments);

    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], newElement.type);
    }

    validatePropTypes(newElement);
    return newElement;
  }

  var enableSchedulerDebugging = false;
  var enableProfiling = true;

  var _requestHostCallback;

  var requestHostTimeout;
  var cancelHostTimeout;
  var shouldYieldToHost;
  var requestPaint;
  var getCurrentTime;
  var forceFrameRate;

  if ( // If Scheduler runs in a non-DOM environment, it falls back to a naive
  // implementation using setTimeout.
  typeof window === 'undefined' || // Check if MessageChannel is supported, too.
  typeof MessageChannel !== 'function') {
    // If this accidentally gets imported in a non-browser environment, e.g. JavaScriptCore,
    // fallback to a naive implementation.
    var _callback = null;
    var _timeoutID = null;

    var _flushCallback = function _flushCallback() {
      if (_callback !== null) {
        try {
          var currentTime = getCurrentTime();
          var hasRemainingTime = true;

          _callback(hasRemainingTime, currentTime);

          _callback = null;
        } catch (e) {
          setTimeout(_flushCallback, 0);
          throw e;
        }
      }
    };

    var initialTime = Date.now();

    getCurrentTime = function getCurrentTime() {
      return Date.now() - initialTime;
    };

    _requestHostCallback = function requestHostCallback(cb) {
      if (_callback !== null) {
        // Protect against re-entrancy.
        setTimeout(_requestHostCallback, 0, cb);
      } else {
        _callback = cb;
        setTimeout(_flushCallback, 0);
      }
    };

    requestHostTimeout = function requestHostTimeout(cb, ms) {
      _timeoutID = setTimeout(cb, ms);
    };

    cancelHostTimeout = function cancelHostTimeout() {
      clearTimeout(_timeoutID);
    };

    shouldYieldToHost = function shouldYieldToHost() {
      return false;
    };

    requestPaint = forceFrameRate = function forceFrameRate() {};
  } else {
    // Capture local references to native APIs, in case a polyfill overrides them.
    var performance = window.performance;
    var _Date = window.Date;
    var _setTimeout = window.setTimeout;
    var _clearTimeout = window.clearTimeout;

    if (typeof console !== 'undefined') {
      // TODO: Scheduler no longer requires these methods to be polyfilled. But
      // maybe we want to continue warning if they don't exist, to preserve the
      // option to rely on it in the future?
      var requestAnimationFrame = window.requestAnimationFrame;
      var cancelAnimationFrame = window.cancelAnimationFrame; // TODO: Remove fb.me link

      if (typeof requestAnimationFrame !== 'function') {
        // Using console['error'] to evade Babel and ESLint
        console['error']("This browser doesn't support requestAnimationFrame. " + 'Make sure that you load a ' + 'polyfill in older browsers. https://fb.me/react-polyfills');
      }

      if (typeof cancelAnimationFrame !== 'function') {
        // Using console['error'] to evade Babel and ESLint
        console['error']("This browser doesn't support cancelAnimationFrame. " + 'Make sure that you load a ' + 'polyfill in older browsers. https://fb.me/react-polyfills');
      }
    }

    if (_typeof(performance) === 'object' && typeof performance.now === 'function') {
      getCurrentTime = function getCurrentTime() {
        return performance.now();
      };
    } else {
      var _initialTime = _Date.now();

      getCurrentTime = function getCurrentTime() {
        return _Date.now() - _initialTime;
      };
    }

    var isMessageLoopRunning = false;
    var scheduledHostCallback = null;
    var taskTimeoutID = -1; // Scheduler periodically yields in case there is other work on the main
    // thread, like user events. By default, it yields multiple times per frame.
    // It does not attempt to align with frame boundaries, since most tasks don't
    // need to be frame aligned; for those that do, use requestAnimationFrame.

    var yieldInterval = 5;
    var deadline = 0; // TODO: Make this configurable

    {
      // `isInputPending` is not available. Since we have no way of knowing if
      // there's pending input, always yield at the end of the frame.
      shouldYieldToHost = function shouldYieldToHost() {
        return getCurrentTime() >= deadline;
      }; // Since we yield every frame regardless, `requestPaint` has no effect.


      requestPaint = function requestPaint() {};
    }

    forceFrameRate = function forceFrameRate(fps) {
      if (fps < 0 || fps > 125) {
        // Using console['error'] to evade Babel and ESLint
        console['error']('forceFrameRate takes a positive int between 0 and 125, ' + 'forcing framerates higher than 125 fps is not unsupported');
        return;
      }

      if (fps > 0) {
        yieldInterval = Math.floor(1000 / fps);
      } else {
        // reset the framerate
        yieldInterval = 5;
      }
    };

    var performWorkUntilDeadline = function performWorkUntilDeadline() {
      if (scheduledHostCallback !== null) {
        var currentTime = getCurrentTime(); // Yield after `yieldInterval` ms, regardless of where we are in the vsync
        // cycle. This means there's always time remaining at the beginning of
        // the message event.

        deadline = currentTime + yieldInterval;
        var hasTimeRemaining = true;

        try {
          var hasMoreWork = scheduledHostCallback(hasTimeRemaining, currentTime);

          if (!hasMoreWork) {
            isMessageLoopRunning = false;
            scheduledHostCallback = null;
          } else {
            // If there's more work, schedule the next message event at the end
            // of the preceding one.
            port.postMessage(null);
          }
        } catch (error) {
          // If a scheduler task throws, exit the current browser task so the
          // error can be observed.
          port.postMessage(null);
          throw error;
        }
      } else {
        isMessageLoopRunning = false;
      } // Yielding to the browser will give it a chance to paint, so we can

    };

    var channel = new MessageChannel();
    var port = channel.port2;
    channel.port1.onmessage = performWorkUntilDeadline;

    _requestHostCallback = function _requestHostCallback(callback) {
      scheduledHostCallback = callback;

      if (!isMessageLoopRunning) {
        isMessageLoopRunning = true;
        port.postMessage(null);
      }
    };

    requestHostTimeout = function requestHostTimeout(callback, ms) {
      taskTimeoutID = _setTimeout(function () {
        callback(getCurrentTime());
      }, ms);
    };

    cancelHostTimeout = function cancelHostTimeout() {
      _clearTimeout(taskTimeoutID);

      taskTimeoutID = -1;
    };
  }

  function push(heap, node) {
    var index = heap.length;
    heap.push(node);
    siftUp(heap, node, index);
  }

  function peek(heap) {
    var first = heap[0];
    return first === undefined ? null : first;
  }

  function pop(heap) {
    var first = heap[0];

    if (first !== undefined) {
      var last = heap.pop();

      if (last !== first) {
        heap[0] = last;
        siftDown(heap, last, 0);
      }

      return first;
    } else {
      return null;
    }
  }

  function siftUp(heap, node, i) {
    var index = i;

    while (true) {
      var parentIndex = index - 1 >>> 1;
      var parent = heap[parentIndex];

      if (parent !== undefined && compare(parent, node) > 0) {
        // The parent is larger. Swap positions.
        heap[parentIndex] = node;
        heap[index] = parent;
        index = parentIndex;
      } else {
        // The parent is smaller. Exit.
        return;
      }
    }
  }

  function siftDown(heap, node, i) {
    var index = i;
    var length = heap.length;

    while (index < length) {
      var leftIndex = (index + 1) * 2 - 1;
      var left = heap[leftIndex];
      var rightIndex = leftIndex + 1;
      var right = heap[rightIndex]; // If the left or right node is smaller, swap with the smaller of those.

      if (left !== undefined && compare(left, node) < 0) {
        if (right !== undefined && compare(right, left) < 0) {
          heap[index] = right;
          heap[rightIndex] = node;
          index = rightIndex;
        } else {
          heap[index] = left;
          heap[leftIndex] = node;
          index = leftIndex;
        }
      } else if (right !== undefined && compare(right, node) < 0) {
        heap[index] = right;
        heap[rightIndex] = node;
        index = rightIndex;
      } else {
        // Neither child is smaller. Exit.
        return;
      }
    }
  }

  function compare(a, b) {
    // Compare sort index first, then task id.
    var diff = a.sortIndex - b.sortIndex;
    return diff !== 0 ? diff : a.id - b.id;
  } // TODO: Use symbols?


  var NoPriority = 0;
  var ImmediatePriority = 1;
  var UserBlockingPriority = 2;
  var NormalPriority = 3;
  var LowPriority = 4;
  var IdlePriority = 5;
  var runIdCounter = 0;
  var mainThreadIdCounter = 0;
  var profilingStateSize = 4;
  var sharedProfilingBuffer = // $FlowFixMe Flow doesn't know about SharedArrayBuffer
  typeof SharedArrayBuffer === 'function' ? new SharedArrayBuffer(profilingStateSize * Int32Array.BYTES_PER_ELEMENT) : // $FlowFixMe Flow doesn't know about ArrayBuffer
  typeof ArrayBuffer === 'function' ? new ArrayBuffer(profilingStateSize * Int32Array.BYTES_PER_ELEMENT) : null // Don't crash the init path on IE9
  ;
  var profilingState = sharedProfilingBuffer !== null ? new Int32Array(sharedProfilingBuffer) : []; // We can't read this but it helps save bytes for null checks

  var PRIORITY = 0;
  var CURRENT_TASK_ID = 1;
  var CURRENT_RUN_ID = 2;
  var QUEUE_SIZE = 3;
  {
    profilingState[PRIORITY] = NoPriority; // This is maintained with a counter, because the size of the priority queue
    // array might include canceled tasks.

    profilingState[QUEUE_SIZE] = 0;
    profilingState[CURRENT_TASK_ID] = 0;
  } // Bytes per element is 4

  var INITIAL_EVENT_LOG_SIZE = 131072;
  var MAX_EVENT_LOG_SIZE = 524288; // Equivalent to 2 megabytes

  var eventLogSize = 0;
  var eventLogBuffer = null;
  var eventLog = null;
  var eventLogIndex = 0;
  var TaskStartEvent = 1;
  var TaskCompleteEvent = 2;
  var TaskErrorEvent = 3;
  var TaskCancelEvent = 4;
  var TaskRunEvent = 5;
  var TaskYieldEvent = 6;
  var SchedulerSuspendEvent = 7;
  var SchedulerResumeEvent = 8;

  function logEvent(entries) {
    if (eventLog !== null) {
      var offset = eventLogIndex;
      eventLogIndex += entries.length;

      if (eventLogIndex + 1 > eventLogSize) {
        eventLogSize *= 2;

        if (eventLogSize > MAX_EVENT_LOG_SIZE) {
          // Using console['error'] to evade Babel and ESLint
          console['error']("Scheduler Profiling: Event log exceeded maximum size. Don't " + 'forget to call `stopLoggingProfilingEvents()`.');
          stopLoggingProfilingEvents();
          return;
        }

        var newEventLog = new Int32Array(eventLogSize * 4);
        newEventLog.set(eventLog);
        eventLogBuffer = newEventLog.buffer;
        eventLog = newEventLog;
      }

      eventLog.set(entries, offset);
    }
  }

  function startLoggingProfilingEvents() {
    eventLogSize = INITIAL_EVENT_LOG_SIZE;
    eventLogBuffer = new ArrayBuffer(eventLogSize * 4);
    eventLog = new Int32Array(eventLogBuffer);
    eventLogIndex = 0;
  }

  function stopLoggingProfilingEvents() {
    var buffer = eventLogBuffer;
    eventLogSize = 0;
    eventLogBuffer = null;
    eventLog = null;
    eventLogIndex = 0;
    return buffer;
  }

  function markTaskStart(task, ms) {
    {
      profilingState[QUEUE_SIZE]++;

      if (eventLog !== null) {
        // performance.now returns a float, representing milliseconds. When the
        // event is logged, it's coerced to an int. Convert to microseconds to
        // maintain extra degrees of precision.
        logEvent([TaskStartEvent, ms * 1000, task.id, task.priorityLevel]);
      }
    }
  }

  function markTaskCompleted(task, ms) {
    {
      profilingState[PRIORITY] = NoPriority;
      profilingState[CURRENT_TASK_ID] = 0;
      profilingState[QUEUE_SIZE]--;

      if (eventLog !== null) {
        logEvent([TaskCompleteEvent, ms * 1000, task.id]);
      }
    }
  }

  function markTaskCanceled(task, ms) {
    {
      profilingState[QUEUE_SIZE]--;

      if (eventLog !== null) {
        logEvent([TaskCancelEvent, ms * 1000, task.id]);
      }
    }
  }

  function markTaskErrored(task, ms) {
    {
      profilingState[PRIORITY] = NoPriority;
      profilingState[CURRENT_TASK_ID] = 0;
      profilingState[QUEUE_SIZE]--;

      if (eventLog !== null) {
        logEvent([TaskErrorEvent, ms * 1000, task.id]);
      }
    }
  }

  function markTaskRun(task, ms) {
    {
      runIdCounter++;
      profilingState[PRIORITY] = task.priorityLevel;
      profilingState[CURRENT_TASK_ID] = task.id;
      profilingState[CURRENT_RUN_ID] = runIdCounter;

      if (eventLog !== null) {
        logEvent([TaskRunEvent, ms * 1000, task.id, runIdCounter]);
      }
    }
  }

  function markTaskYield(task, ms) {
    {
      profilingState[PRIORITY] = NoPriority;
      profilingState[CURRENT_TASK_ID] = 0;
      profilingState[CURRENT_RUN_ID] = 0;

      if (eventLog !== null) {
        logEvent([TaskYieldEvent, ms * 1000, task.id, runIdCounter]);
      }
    }
  }

  function markSchedulerSuspended(ms) {
    {
      mainThreadIdCounter++;

      if (eventLog !== null) {
        logEvent([SchedulerSuspendEvent, ms * 1000, mainThreadIdCounter]);
      }
    }
  }

  function markSchedulerUnsuspended(ms) {
    {
      if (eventLog !== null) {
        logEvent([SchedulerResumeEvent, ms * 1000, mainThreadIdCounter]);
      }
    }
  }
  /* eslint-disable no-var */
  // Math.pow(2, 30) - 1
  // 0b111111111111111111111111111111


  var maxSigned31BitInt = 1073741823; // Times out immediately

  var IMMEDIATE_PRIORITY_TIMEOUT = -1; // Eventually times out

  var USER_BLOCKING_PRIORITY = 250;
  var NORMAL_PRIORITY_TIMEOUT = 5000;
  var LOW_PRIORITY_TIMEOUT = 10000; // Never times out

  var IDLE_PRIORITY = maxSigned31BitInt; // Tasks are stored on a min heap

  var taskQueue = [];
  var timerQueue = []; // Incrementing id counter. Used to maintain insertion order.

  var taskIdCounter = 1; // Pausing the scheduler is useful for debugging.

  var currentTask = null;
  var currentPriorityLevel = NormalPriority; // This is set while performing work, to prevent re-entrancy.

  var isPerformingWork = false;
  var isHostCallbackScheduled = false;
  var isHostTimeoutScheduled = false;

  function advanceTimers(currentTime) {
    // Check for tasks that are no longer delayed and add them to the queue.
    var timer = peek(timerQueue);

    while (timer !== null) {
      if (timer.callback === null) {
        // Timer was cancelled.
        pop(timerQueue);
      } else if (timer.startTime <= currentTime) {
        // Timer fired. Transfer to the task queue.
        pop(timerQueue);
        timer.sortIndex = timer.expirationTime;
        push(taskQueue, timer);
        {
          markTaskStart(timer, currentTime);
          timer.isQueued = true;
        }
      } else {
        // Remaining timers are pending.
        return;
      }

      timer = peek(timerQueue);
    }
  }

  function handleTimeout(currentTime) {
    isHostTimeoutScheduled = false;
    advanceTimers(currentTime);

    if (!isHostCallbackScheduled) {
      if (peek(taskQueue) !== null) {
        isHostCallbackScheduled = true;

        _requestHostCallback(flushWork);
      } else {
        var firstTimer = peek(timerQueue);

        if (firstTimer !== null) {
          requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
        }
      }
    }
  }

  function flushWork(hasTimeRemaining, initialTime) {
    {
      markSchedulerUnsuspended(initialTime);
    } // We'll need a host callback the next time work is scheduled.

    isHostCallbackScheduled = false;

    if (isHostTimeoutScheduled) {
      // We scheduled a timeout but it's no longer needed. Cancel it.
      isHostTimeoutScheduled = false;
      cancelHostTimeout();
    }

    isPerformingWork = true;
    var previousPriorityLevel = currentPriorityLevel;

    try {
      if (enableProfiling) {
        try {
          return workLoop(hasTimeRemaining, initialTime);
        } catch (error) {
          if (currentTask !== null) {
            var currentTime = getCurrentTime();
            markTaskErrored(currentTask, currentTime);
            currentTask.isQueued = false;
          }

          throw error;
        }
      } else {
        // No catch in prod codepath.
        return workLoop(hasTimeRemaining, initialTime);
      }
    } finally {
      currentTask = null;
      currentPriorityLevel = previousPriorityLevel;
      isPerformingWork = false;
      {
        var _currentTime = getCurrentTime();

        markSchedulerSuspended(_currentTime);
      }
    }
  }

  function workLoop(hasTimeRemaining, initialTime) {
    var currentTime = initialTime;
    advanceTimers(currentTime);
    currentTask = peek(taskQueue);

    while (currentTask !== null && !enableSchedulerDebugging) {
      if (currentTask.expirationTime > currentTime && (!hasTimeRemaining || shouldYieldToHost())) {
        // This currentTask hasn't expired, and we've reached the deadline.
        break;
      }

      var callback = currentTask.callback;

      if (callback !== null) {
        currentTask.callback = null;
        currentPriorityLevel = currentTask.priorityLevel;
        var didUserCallbackTimeout = currentTask.expirationTime <= currentTime;
        markTaskRun(currentTask, currentTime);
        var continuationCallback = callback(didUserCallbackTimeout);
        currentTime = getCurrentTime();

        if (typeof continuationCallback === 'function') {
          currentTask.callback = continuationCallback;
          markTaskYield(currentTask, currentTime);
        } else {
          {
            markTaskCompleted(currentTask, currentTime);
            currentTask.isQueued = false;
          }

          if (currentTask === peek(taskQueue)) {
            pop(taskQueue);
          }
        }

        advanceTimers(currentTime);
      } else {
        pop(taskQueue);
      }

      currentTask = peek(taskQueue);
    } // Return whether there's additional work


    if (currentTask !== null) {
      return true;
    } else {
      var firstTimer = peek(timerQueue);

      if (firstTimer !== null) {
        requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
      }

      return false;
    }
  }

  function unstable_runWithPriority(priorityLevel, eventHandler) {
    switch (priorityLevel) {
      case ImmediatePriority:
      case UserBlockingPriority:
      case NormalPriority:
      case LowPriority:
      case IdlePriority:
        break;

      default:
        priorityLevel = NormalPriority;
    }

    var previousPriorityLevel = currentPriorityLevel;
    currentPriorityLevel = priorityLevel;

    try {
      return eventHandler();
    } finally {
      currentPriorityLevel = previousPriorityLevel;
    }
  }

  function unstable_next(eventHandler) {
    var priorityLevel;

    switch (currentPriorityLevel) {
      case ImmediatePriority:
      case UserBlockingPriority:
      case NormalPriority:
        // Shift down to normal priority
        priorityLevel = NormalPriority;
        break;

      default:
        // Anything lower than normal priority should remain at the current level.
        priorityLevel = currentPriorityLevel;
        break;
    }

    var previousPriorityLevel = currentPriorityLevel;
    currentPriorityLevel = priorityLevel;

    try {
      return eventHandler();
    } finally {
      currentPriorityLevel = previousPriorityLevel;
    }
  }

  function unstable_wrapCallback(callback) {
    var parentPriorityLevel = currentPriorityLevel;
    return function () {
      // This is a fork of runWithPriority, inlined for performance.
      var previousPriorityLevel = currentPriorityLevel;
      currentPriorityLevel = parentPriorityLevel;

      try {
        return callback.apply(this, arguments);
      } finally {
        currentPriorityLevel = previousPriorityLevel;
      }
    };
  }

  function timeoutForPriorityLevel(priorityLevel) {
    switch (priorityLevel) {
      case ImmediatePriority:
        return IMMEDIATE_PRIORITY_TIMEOUT;

      case UserBlockingPriority:
        return USER_BLOCKING_PRIORITY;

      case IdlePriority:
        return IDLE_PRIORITY;

      case LowPriority:
        return LOW_PRIORITY_TIMEOUT;

      case NormalPriority:
      default:
        return NORMAL_PRIORITY_TIMEOUT;
    }
  }

  function unstable_scheduleCallback(priorityLevel, callback, options) {
    var currentTime = getCurrentTime();
    var startTime;
    var timeout;

    if (_typeof(options) === 'object' && options !== null) {
      var delay = options.delay;

      if (typeof delay === 'number' && delay > 0) {
        startTime = currentTime + delay;
      } else {
        startTime = currentTime;
      }

      timeout = typeof options.timeout === 'number' ? options.timeout : timeoutForPriorityLevel(priorityLevel);
    } else {
      timeout = timeoutForPriorityLevel(priorityLevel);
      startTime = currentTime;
    }

    var expirationTime = startTime + timeout;
    var newTask = {
      id: taskIdCounter++,
      callback: callback,
      priorityLevel: priorityLevel,
      startTime: startTime,
      expirationTime: expirationTime,
      sortIndex: -1
    };
    {
      newTask.isQueued = false;
    }

    if (startTime > currentTime) {
      // This is a delayed task.
      newTask.sortIndex = startTime;
      push(timerQueue, newTask);

      if (peek(taskQueue) === null && newTask === peek(timerQueue)) {
        // All tasks are delayed, and this is the task with the earliest delay.
        if (isHostTimeoutScheduled) {
          // Cancel an existing timeout.
          cancelHostTimeout();
        } else {
          isHostTimeoutScheduled = true;
        } // Schedule a timeout.


        requestHostTimeout(handleTimeout, startTime - currentTime);
      }
    } else {
      newTask.sortIndex = expirationTime;
      push(taskQueue, newTask);
      {
        markTaskStart(newTask, currentTime);
        newTask.isQueued = true;
      } // Schedule a host callback, if needed. If we're already performing work,
      // wait until the next time we yield.

      if (!isHostCallbackScheduled && !isPerformingWork) {
        isHostCallbackScheduled = true;

        _requestHostCallback(flushWork);
      }
    }

    return newTask;
  }

  function unstable_pauseExecution() {}

  function unstable_continueExecution() {
    if (!isHostCallbackScheduled && !isPerformingWork) {
      isHostCallbackScheduled = true;

      _requestHostCallback(flushWork);
    }
  }

  function unstable_getFirstCallbackNode() {
    return peek(taskQueue);
  }

  function unstable_cancelCallback(task) {
    {
      if (task.isQueued) {
        var currentTime = getCurrentTime();
        markTaskCanceled(task, currentTime);
        task.isQueued = false;
      }
    } // Null out the callback to indicate the task has been canceled. (Can't
    // remove from the queue because you can't remove arbitrary nodes from an
    // array based heap, only the first one.)

    task.callback = null;
  }

  function unstable_getCurrentPriorityLevel() {
    return currentPriorityLevel;
  }

  function unstable_shouldYield() {
    var currentTime = getCurrentTime();
    advanceTimers(currentTime);
    var firstTask = peek(taskQueue);
    return firstTask !== currentTask && currentTask !== null && firstTask !== null && firstTask.callback !== null && firstTask.startTime <= currentTime && firstTask.expirationTime < currentTask.expirationTime || shouldYieldToHost();
  }

  var unstable_requestPaint = requestPaint;
  var unstable_Profiling = {
    startLoggingProfilingEvents: startLoggingProfilingEvents,
    stopLoggingProfilingEvents: stopLoggingProfilingEvents,
    sharedProfilingBuffer: sharedProfilingBuffer
  };
  var Scheduler = /*#__PURE__*/Object.freeze({
    __proto__: null,
    unstable_ImmediatePriority: ImmediatePriority,
    unstable_UserBlockingPriority: UserBlockingPriority,
    unstable_NormalPriority: NormalPriority,
    unstable_IdlePriority: IdlePriority,
    unstable_LowPriority: LowPriority,
    unstable_runWithPriority: unstable_runWithPriority,
    unstable_next: unstable_next,
    unstable_scheduleCallback: unstable_scheduleCallback,
    unstable_cancelCallback: unstable_cancelCallback,
    unstable_wrapCallback: unstable_wrapCallback,
    unstable_getCurrentPriorityLevel: unstable_getCurrentPriorityLevel,
    unstable_shouldYield: unstable_shouldYield,
    unstable_requestPaint: unstable_requestPaint,
    unstable_continueExecution: unstable_continueExecution,
    unstable_pauseExecution: unstable_pauseExecution,
    unstable_getFirstCallbackNode: unstable_getFirstCallbackNode,

    get unstable_now() {
      return getCurrentTime;
    },

    get unstable_forceFrameRate() {
      return forceFrameRate;
    },

    unstable_Profiling: unstable_Profiling
  });
  var DEFAULT_THREAD_ID = 0; // Counters used to generate unique IDs.

  var interactionIDCounter = 0;
  var threadIDCounter = 0; // Set of currently traced interactions.
  // Interactions "stack"–
  // Meaning that newly traced interactions are appended to the previously active set.
  // When an interaction goes out of scope, the previous set (if any) is restored.

  var interactionsRef = null; // Listener(s) to notify when interactions begin and end.

  var subscriberRef = null;
  {
    interactionsRef = {
      current: new Set()
    };
    subscriberRef = {
      current: null
    };
  }

  function unstable_clear(callback) {
    var prevInteractions = interactionsRef.current;
    interactionsRef.current = new Set();

    try {
      return callback();
    } finally {
      interactionsRef.current = prevInteractions;
    }
  }

  function unstable_getCurrent() {
    {
      return interactionsRef.current;
    }
  }

  function unstable_getThreadID() {
    return ++threadIDCounter;
  }

  function unstable_trace(name, timestamp, callback) {
    var threadID = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DEFAULT_THREAD_ID;
    var interaction = {
      __count: 1,
      id: interactionIDCounter++,
      name: name,
      timestamp: timestamp
    };
    var prevInteractions = interactionsRef.current; // Traced interactions should stack/accumulate.
    // To do that, clone the current interactions.
    // The previous set will be restored upon completion.

    var interactions = new Set(prevInteractions);
    interactions.add(interaction);
    interactionsRef.current = interactions;
    var subscriber = subscriberRef.current;
    var returnValue;

    try {
      if (subscriber !== null) {
        subscriber.onInteractionTraced(interaction);
      }
    } finally {
      try {
        if (subscriber !== null) {
          subscriber.onWorkStarted(interactions, threadID);
        }
      } finally {
        try {
          returnValue = callback();
        } finally {
          interactionsRef.current = prevInteractions;

          try {
            if (subscriber !== null) {
              subscriber.onWorkStopped(interactions, threadID);
            }
          } finally {
            interaction.__count--; // If no async work was scheduled for this interaction,
            // Notify subscribers that it's completed.

            if (subscriber !== null && interaction.__count === 0) {
              subscriber.onInteractionScheduledWorkCompleted(interaction);
            }
          }
        }
      }
    }

    return returnValue;
  }

  function unstable_wrap(callback) {
    var threadID = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_THREAD_ID;
    var wrappedInteractions = interactionsRef.current;
    var subscriber = subscriberRef.current;

    if (subscriber !== null) {
      subscriber.onWorkScheduled(wrappedInteractions, threadID);
    } // Update the pending async work count for the current interactions.
    // Update after calling subscribers in case of error.


    wrappedInteractions.forEach(function (interaction) {
      interaction.__count++;
    });
    var hasRun = false;

    function wrapped() {
      var prevInteractions = interactionsRef.current;
      interactionsRef.current = wrappedInteractions;
      subscriber = subscriberRef.current;

      try {
        var returnValue;

        try {
          if (subscriber !== null) {
            subscriber.onWorkStarted(wrappedInteractions, threadID);
          }
        } finally {
          try {
            returnValue = callback.apply(undefined, arguments);
          } finally {
            interactionsRef.current = prevInteractions;

            if (subscriber !== null) {
              subscriber.onWorkStopped(wrappedInteractions, threadID);
            }
          }
        }

        return returnValue;
      } finally {
        if (!hasRun) {
          // We only expect a wrapped function to be executed once,
          // But in the event that it's executed more than once–
          // Only decrement the outstanding interaction counts once.
          hasRun = true; // Update pending async counts for all wrapped interactions.
          // If this was the last scheduled async work for any of them,
          // Mark them as completed.

          wrappedInteractions.forEach(function (interaction) {
            interaction.__count--;

            if (subscriber !== null && interaction.__count === 0) {
              subscriber.onInteractionScheduledWorkCompleted(interaction);
            }
          });
        }
      }
    }

    wrapped.cancel = function cancel() {
      subscriber = subscriberRef.current;

      try {
        if (subscriber !== null) {
          subscriber.onWorkCanceled(wrappedInteractions, threadID);
        }
      } finally {
        // Update pending async counts for all wrapped interactions.
        // If this was the last scheduled async work for any of them,
        // Mark them as completed.
        wrappedInteractions.forEach(function (interaction) {
          interaction.__count--;

          if (subscriber && interaction.__count === 0) {
            subscriber.onInteractionScheduledWorkCompleted(interaction);
          }
        });
      }
    };

    return wrapped;
  }

  var subscribers = null;
  {
    subscribers = new Set();
  }

  function unstable_subscribe(subscriber) {
    {
      subscribers.add(subscriber);

      if (subscribers.size === 1) {
        subscriberRef.current = {
          onInteractionScheduledWorkCompleted: onInteractionScheduledWorkCompleted,
          onInteractionTraced: onInteractionTraced,
          onWorkCanceled: onWorkCanceled,
          onWorkScheduled: onWorkScheduled,
          onWorkStarted: onWorkStarted,
          onWorkStopped: onWorkStopped
        };
      }
    }
  }

  function unstable_unsubscribe(subscriber) {
    {
      subscribers["delete"](subscriber);

      if (subscribers.size === 0) {
        subscriberRef.current = null;
      }
    }
  }

  function onInteractionTraced(interaction) {
    var didCatchError = false;
    var caughtError = null;
    subscribers.forEach(function (subscriber) {
      try {
        subscriber.onInteractionTraced(interaction);
      } catch (error) {
        if (!didCatchError) {
          didCatchError = true;
          caughtError = error;
        }
      }
    });

    if (didCatchError) {
      throw caughtError;
    }
  }

  function onInteractionScheduledWorkCompleted(interaction) {
    var didCatchError = false;
    var caughtError = null;
    subscribers.forEach(function (subscriber) {
      try {
        subscriber.onInteractionScheduledWorkCompleted(interaction);
      } catch (error) {
        if (!didCatchError) {
          didCatchError = true;
          caughtError = error;
        }
      }
    });

    if (didCatchError) {
      throw caughtError;
    }
  }

  function onWorkScheduled(interactions, threadID) {
    var didCatchError = false;
    var caughtError = null;
    subscribers.forEach(function (subscriber) {
      try {
        subscriber.onWorkScheduled(interactions, threadID);
      } catch (error) {
        if (!didCatchError) {
          didCatchError = true;
          caughtError = error;
        }
      }
    });

    if (didCatchError) {
      throw caughtError;
    }
  }

  function onWorkStarted(interactions, threadID) {
    var didCatchError = false;
    var caughtError = null;
    subscribers.forEach(function (subscriber) {
      try {
        subscriber.onWorkStarted(interactions, threadID);
      } catch (error) {
        if (!didCatchError) {
          didCatchError = true;
          caughtError = error;
        }
      }
    });

    if (didCatchError) {
      throw caughtError;
    }
  }

  function onWorkStopped(interactions, threadID) {
    var didCatchError = false;
    var caughtError = null;
    subscribers.forEach(function (subscriber) {
      try {
        subscriber.onWorkStopped(interactions, threadID);
      } catch (error) {
        if (!didCatchError) {
          didCatchError = true;
          caughtError = error;
        }
      }
    });

    if (didCatchError) {
      throw caughtError;
    }
  }

  function onWorkCanceled(interactions, threadID) {
    var didCatchError = false;
    var caughtError = null;
    subscribers.forEach(function (subscriber) {
      try {
        subscriber.onWorkCanceled(interactions, threadID);
      } catch (error) {
        if (!didCatchError) {
          didCatchError = true;
          caughtError = error;
        }
      }
    });

    if (didCatchError) {
      throw caughtError;
    }
  }

  var SchedulerTracing = /*#__PURE__*/Object.freeze({
    __proto__: null,

    get __interactionsRef() {
      return interactionsRef;
    },

    get __subscriberRef() {
      return subscriberRef;
    },

    unstable_clear: unstable_clear,
    unstable_getCurrent: unstable_getCurrent,
    unstable_getThreadID: unstable_getThreadID,
    unstable_trace: unstable_trace,
    unstable_wrap: unstable_wrap,
    unstable_subscribe: unstable_subscribe,
    unstable_unsubscribe: unstable_unsubscribe
  });
  var ReactSharedInternals$1 = {
    ReactCurrentDispatcher: ReactCurrentDispatcher,
    ReactCurrentOwner: ReactCurrentOwner,
    IsSomeRendererActing: IsSomeRendererActing,
    // Used by renderers to avoid bundling object-assign twice in UMD bundles:
    assign: objectAssign
  };
  {
    objectAssign(ReactSharedInternals$1, {
      // These should not be included in production.
      ReactDebugCurrentFrame: ReactDebugCurrentFrame,
      // Shim for React DOM 16.0.0 which still destructured (but not used) this.
      // TODO: remove in React 17.0.
      ReactComponentTreeHook: {}
    });
  } // Re-export the schedule API(s) for UMD bundles.
  // This avoids introducing a dependency on a new UMD global in a minor update,
  // Since that would be a breaking change (e.g. for all existing CodeSandboxes).
  // This re-export is only required for UMD bundles;
  // CJS bundles use the shared NPM package.

  objectAssign(ReactSharedInternals$1, {
    Scheduler: Scheduler,
    SchedulerTracing: SchedulerTracing
  });
  {
    try {
      var frozenObject = Object.freeze({});
      var testMap = new Map([[frozenObject, null]]);
      var testSet = new Set([frozenObject]); // This is necessary for Rollup to not consider these unused.
      // https://github.com/rollup/rollup/issues/1771
      // TODO: we can remove these if Rollup fixes the bug.

      testMap.set(0, 0);
      testSet.add(0);
    } catch (e) {}
  }
  var createElement$1 = createElementWithValidation;
  var cloneElement$1 = cloneElementWithValidation;
  var createFactory = createFactoryWithValidation;
  var Children = {
    map: mapChildren,
    forEach: forEachChildren,
    count: countChildren,
    toArray: toArray,
    only: onlyChild
  };
  exports.Children = Children;
  exports.Component = Component;
  exports.Fragment = REACT_FRAGMENT_TYPE;
  exports.Profiler = REACT_PROFILER_TYPE;
  exports.PureComponent = PureComponent;
  exports.StrictMode = REACT_STRICT_MODE_TYPE;
  exports.Suspense = REACT_SUSPENSE_TYPE;
  exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals$1;
  exports.cloneElement = cloneElement$1;
  exports.createContext = createContext;
  exports.createElement = createElement$1;
  exports.createFactory = createFactory;
  exports.createRef = createRef;
  exports.forwardRef = forwardRef;
  exports.isValidElement = isValidElement;
  exports.lazy = lazy;
  exports.memo = memo;
  exports.useCallback = useCallback;
  exports.useContext = useContext;
  exports.useDebugValue = useDebugValue;
  exports.useEffect = useEffect;
  exports.useImperativeHandle = useImperativeHandle;
  exports.useLayoutEffect = useLayoutEffect;
  exports.useMemo = useMemo;
  exports.useReducer = useReducer;
  exports.useRef = useRef;
  exports.useState = useState;
  exports.version = ReactVersion;
});

/***/ }),

/***/ "./node_modules/ssr-window/dist/ssr-window.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/ssr-window/dist/ssr-window.esm.js ***!
  \********************************************************/
/*! exports provided: window, document */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "window", function() { return win; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "document", function() { return doc; });
/**
 * SSR Window 1.0.1
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2018, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: July 18, 2018
 */
var doc = typeof document === 'undefined' ? {
  body: {},
  addEventListener: function addEventListener() {},
  removeEventListener: function removeEventListener() {},
  activeElement: {
    blur: function blur() {},
    nodeName: ''
  },
  querySelector: function querySelector() {
    return null;
  },
  querySelectorAll: function querySelectorAll() {
    return [];
  },
  getElementById: function getElementById() {
    return null;
  },
  createEvent: function createEvent() {
    return {
      initEvent: function initEvent() {}
    };
  },
  createElement: function createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute: function setAttribute() {},
      getElementsByTagName: function getElementsByTagName() {
        return [];
      }
    };
  },
  location: {
    hash: ''
  }
} : document; // eslint-disable-line

var win = typeof window === 'undefined' ? {
  document: doc,
  navigator: {
    userAgent: ''
  },
  location: {},
  history: {},
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener: function addEventListener() {},
  removeEventListener: function removeEventListener() {},
  getComputedStyle: function getComputedStyle() {
    return {
      getPropertyValue: function getPropertyValue() {
        return '';
      }
    };
  },
  Image: function Image() {},
  Date: function Date() {},
  screen: {},
  setTimeout: function setTimeout() {},
  clearTimeout: function clearTimeout() {}
} : window; // eslint-disable-line



/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/swiper/dist/css/swiper.min.css":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/dist/css/swiper.min.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../css-loader/dist/cjs.js!./swiper.min.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/swiper/dist/css/swiper.min.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./node_modules/swiper/dist/js/swiper.esm.bundle.js":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/dist/js/swiper.esm.bundle.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom7/dist/dom7.modular */ "./node_modules/dom7/dist/dom7.modular.js");
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/dist/ssr-window.esm.js");
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Swiper 4.4.2
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2018 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: November 1, 2018
 */


var Methods = {
  addClass: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["addClass"],
  removeClass: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["removeClass"],
  hasClass: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["hasClass"],
  toggleClass: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["toggleClass"],
  attr: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["attr"],
  removeAttr: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["removeAttr"],
  data: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["data"],
  transform: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["transform"],
  transition: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["transition"],
  on: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["on"],
  off: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["off"],
  trigger: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["trigger"],
  transitionEnd: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["transitionEnd"],
  outerWidth: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["outerWidth"],
  outerHeight: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["outerHeight"],
  offset: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["offset"],
  css: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["css"],
  each: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["each"],
  html: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["html"],
  text: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["text"],
  is: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["is"],
  index: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["index"],
  eq: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["eq"],
  append: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["append"],
  prepend: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["prepend"],
  next: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["next"],
  nextAll: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["nextAll"],
  prev: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["prev"],
  prevAll: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["prevAll"],
  parent: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["parent"],
  parents: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["parents"],
  closest: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["closest"],
  find: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["find"],
  children: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["children"],
  remove: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["remove"],
  add: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["add"],
  styles: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["styles"]
};
Object.keys(Methods).forEach(function (methodName) {
  dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"].fn[methodName] = Methods[methodName];
});
var Utils = {
  deleteProps: function deleteProps(obj) {
    var object = obj;
    Object.keys(object).forEach(function (key) {
      try {
        object[key] = null;
      } catch (e) {// no getter for object
      }

      try {
        delete object[key];
      } catch (e) {// something got wrong
      }
    });
  },
  nextTick: function nextTick(callback) {
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return setTimeout(callback, delay);
  },
  now: function now() {
    return Date.now();
  },
  getTranslate: function getTranslate(el) {
    var axis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'x';
    var matrix;
    var curTransform;
    var transformMatrix;
    var curStyle = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].getComputedStyle(el, null);

    if (ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].WebKitCSSMatrix) {
      curTransform = curStyle.transform || curStyle.webkitTransform;

      if (curTransform.split(',').length > 6) {
        curTransform = curTransform.split(', ').map(function (a) {
          return a.replace(',', '.');
        }).join(', ');
      } // Some old versions of Webkit choke when 'none' is passed; pass
      // empty string instead in this case


      transformMatrix = new ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
    } else {
      transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
      matrix = transformMatrix.toString().split(',');
    }

    if (axis === 'x') {
      // Latest Chrome and webkits Fix
      if (ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
      else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
        else curTransform = parseFloat(matrix[4]);
    }

    if (axis === 'y') {
      // Latest Chrome and webkits Fix
      if (ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
      else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
        else curTransform = parseFloat(matrix[5]);
    }

    return curTransform || 0;
  },
  parseUrlQuery: function parseUrlQuery(url) {
    var query = {};
    var urlToParse = url || ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].location.href;
    var i;
    var params;
    var param;
    var length;

    if (typeof urlToParse === 'string' && urlToParse.length) {
      urlToParse = urlToParse.indexOf('?') > -1 ? urlToParse.replace(/\S*\?/, '') : '';
      params = urlToParse.split('&').filter(function (paramsPart) {
        return paramsPart !== '';
      });
      length = params.length;

      for (i = 0; i < length; i += 1) {
        param = params[i].replace(/#\S+/g, '').split('=');
        query[decodeURIComponent(param[0])] = typeof param[1] === 'undefined' ? undefined : decodeURIComponent(param[1]) || '';
      }
    }

    return query;
  },
  isObject: function isObject(o) {
    return _typeof(o) === 'object' && o !== null && o.constructor && o.constructor === Object;
  },
  extend: function extend() {
    var to = Object(arguments.length <= 0 ? undefined : arguments[0]);

    for (var i = 1; i < arguments.length; i += 1) {
      var nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];

      if (nextSource !== undefined && nextSource !== null) {
        var keysArray = Object.keys(Object(nextSource));

        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

          if (desc !== undefined && desc.enumerable) {
            if (Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
              Utils.extend(to[nextKey], nextSource[nextKey]);
            } else if (!Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
              to[nextKey] = {};
              Utils.extend(to[nextKey], nextSource[nextKey]);
            } else {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
    }

    return to;
  }
};

var Support = function Support() {
  var testDiv = ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].createElement('div');
  return {
    touch: ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].Modernizr && ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].Modernizr.touch === true || function checkTouch() {
      return !!('ontouchstart' in ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"] || ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].DocumentTouch && ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"] instanceof ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].DocumentTouch);
    }(),
    pointerEvents: !!(ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator.pointerEnabled || ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].PointerEvent || 'maxTouchPoints' in ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator),
    prefixedPointerEvents: !!ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator.msPointerEnabled,
    transition: function checkTransition() {
      var style = testDiv.style;
      return 'transition' in style || 'webkitTransition' in style || 'MozTransition' in style;
    }(),
    transforms3d: ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].Modernizr && ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].Modernizr.csstransforms3d === true || function checkTransforms3d() {
      var style = testDiv.style;
      return 'webkitPerspective' in style || 'MozPerspective' in style || 'OPerspective' in style || 'MsPerspective' in style || 'perspective' in style;
    }(),
    flexbox: function checkFlexbox() {
      var style = testDiv.style;
      var styles$$1 = 'alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient'.split(' ');

      for (var i = 0; i < styles$$1.length; i += 1) {
        if (styles$$1[i] in style) return true;
      }

      return false;
    }(),
    observer: function checkObserver() {
      return 'MutationObserver' in ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"] || 'WebkitMutationObserver' in ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"];
    }(),
    passiveListener: function checkPassiveListener() {
      var supportsPassive = false;

      try {
        var opts = Object.defineProperty({}, 'passive', {
          // eslint-disable-next-line
          get: function get() {
            supportsPassive = true;
          }
        });
        ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].addEventListener('testPassiveListener', null, opts);
      } catch (e) {// No support
      }

      return supportsPassive;
    }(),
    gestures: function checkGestures() {
      return 'ongesturestart' in ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"];
    }()
  };
}();

var SwiperClass = /*#__PURE__*/function () {
  function SwiperClass() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, SwiperClass);

    var self = this;
    self.params = params; // Events

    self.eventsListeners = {};

    if (self.params && self.params.on) {
      Object.keys(self.params.on).forEach(function (eventName) {
        self.on(eventName, self.params.on[eventName]);
      });
    }
  }

  _createClass(SwiperClass, [{
    key: "on",
    value: function on(events, handler, priority) {
      var self = this;
      if (typeof handler !== 'function') return self;
      var method = priority ? 'unshift' : 'push';
      events.split(' ').forEach(function (event) {
        if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
        self.eventsListeners[event][method](handler);
      });
      return self;
    }
  }, {
    key: "once",
    value: function once(events, handler, priority) {
      var self = this;
      if (typeof handler !== 'function') return self;

      function onceHandler() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        handler.apply(self, args);
        self.off(events, onceHandler);
      }

      return self.on(events, onceHandler, priority);
    }
  }, {
    key: "off",
    value: function off(events, handler) {
      var self = this;
      if (!self.eventsListeners) return self;
      events.split(' ').forEach(function (event) {
        if (typeof handler === 'undefined') {
          self.eventsListeners[event] = [];
        } else if (self.eventsListeners[event] && self.eventsListeners[event].length) {
          self.eventsListeners[event].forEach(function (eventHandler, index$$1) {
            if (eventHandler === handler) {
              self.eventsListeners[event].splice(index$$1, 1);
            }
          });
        }
      });
      return self;
    }
  }, {
    key: "emit",
    value: function emit() {
      var self = this;
      if (!self.eventsListeners) return self;
      var events;
      var data$$1;
      var context;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      if (typeof args[0] === 'string' || Array.isArray(args[0])) {
        events = args[0];
        data$$1 = args.slice(1, args.length);
        context = self;
      } else {
        events = args[0].events;
        data$$1 = args[0].data;
        context = args[0].context || self;
      }

      var eventsArray = Array.isArray(events) ? events : events.split(' ');
      eventsArray.forEach(function (event) {
        if (self.eventsListeners && self.eventsListeners[event]) {
          var handlers = [];
          self.eventsListeners[event].forEach(function (eventHandler) {
            handlers.push(eventHandler);
          });
          handlers.forEach(function (eventHandler) {
            eventHandler.apply(context, data$$1);
          });
        }
      });
      return self;
    }
  }, {
    key: "useModulesParams",
    value: function useModulesParams(instanceParams) {
      var instance = this;
      if (!instance.modules) return;
      Object.keys(instance.modules).forEach(function (moduleName) {
        var module = instance.modules[moduleName]; // Extend params

        if (module.params) {
          Utils.extend(instanceParams, module.params);
        }
      });
    }
  }, {
    key: "useModules",
    value: function useModules() {
      var modulesParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var instance = this;
      if (!instance.modules) return;
      Object.keys(instance.modules).forEach(function (moduleName) {
        var module = instance.modules[moduleName];
        var moduleParams = modulesParams[moduleName] || {}; // Extend instance methods and props

        if (module.instance) {
          Object.keys(module.instance).forEach(function (modulePropName) {
            var moduleProp = module.instance[modulePropName];

            if (typeof moduleProp === 'function') {
              instance[modulePropName] = moduleProp.bind(instance);
            } else {
              instance[modulePropName] = moduleProp;
            }
          });
        } // Add event listeners


        if (module.on && instance.on) {
          Object.keys(module.on).forEach(function (moduleEventName) {
            instance.on(moduleEventName, module.on[moduleEventName]);
          });
        } // Module create callback


        if (module.create) {
          module.create.bind(instance)(moduleParams);
        }
      });
    }
  }], [{
    key: "installModule",
    value: function installModule(module) {
      var Class = this;
      if (!Class.prototype.modules) Class.prototype.modules = {};
      var name = module.name || "".concat(Object.keys(Class.prototype.modules).length, "_").concat(Utils.now());
      Class.prototype.modules[name] = module; // Prototype

      if (module.proto) {
        Object.keys(module.proto).forEach(function (key) {
          Class.prototype[key] = module.proto[key];
        });
      } // Class


      if (module["static"]) {
        Object.keys(module["static"]).forEach(function (key) {
          Class[key] = module["static"][key];
        });
      } // Callback


      if (module.install) {
        for (var _len3 = arguments.length, params = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          params[_key3 - 1] = arguments[_key3];
        }

        module.install.apply(Class, params);
      }

      return Class;
    }
  }, {
    key: "use",
    value: function use(module) {
      var Class = this;

      if (Array.isArray(module)) {
        module.forEach(function (m) {
          return Class.installModule(m);
        });
        return Class;
      }

      for (var _len4 = arguments.length, params = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        params[_key4 - 1] = arguments[_key4];
      }

      return Class.installModule.apply(Class, [module].concat(params));
    }
  }, {
    key: "components",
    set: function set(components) {
      var Class = this;
      if (!Class.use) return;
      Class.use(components);
    }
  }]);

  return SwiperClass;
}();

function updateSize() {
  var swiper = this;
  var width;
  var height;
  var $el = swiper.$el;

  if (typeof swiper.params.width !== 'undefined') {
    width = swiper.params.width;
  } else {
    width = $el[0].clientWidth;
  }

  if (typeof swiper.params.height !== 'undefined') {
    height = swiper.params.height;
  } else {
    height = $el[0].clientHeight;
  }

  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  } // Subtract paddings


  width = width - parseInt($el.css('padding-left'), 10) - parseInt($el.css('padding-right'), 10);
  height = height - parseInt($el.css('padding-top'), 10) - parseInt($el.css('padding-bottom'), 10);
  Utils.extend(swiper, {
    width: width,
    height: height,
    size: swiper.isHorizontal() ? width : height
  });
}

function updateSlides() {
  var swiper = this;
  var params = swiper.params;
  var $wrapperEl = swiper.$wrapperEl,
      swiperSize = swiper.size,
      rtl = swiper.rtlTranslate,
      wrongRTL = swiper.wrongRTL;
  var isVirtual = swiper.virtual && params.virtual.enabled;
  var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  var slides = $wrapperEl.children(".".concat(swiper.params.slideClass));
  var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  var snapGrid = [];
  var slidesGrid = [];
  var slidesSizesGrid = [];
  var offsetBefore = params.slidesOffsetBefore;

  if (typeof offsetBefore === 'function') {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }

  var offsetAfter = params.slidesOffsetAfter;

  if (typeof offsetAfter === 'function') {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }

  var previousSnapGridLength = swiper.snapGrid.length;
  var previousSlidesGridLength = swiper.snapGrid.length;
  var spaceBetween = params.spaceBetween;
  var slidePosition = -offsetBefore;
  var prevSlideSize = 0;
  var index$$1 = 0;

  if (typeof swiperSize === 'undefined') {
    return;
  }

  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
  }

  swiper.virtualSize = -spaceBetween; // reset margins

  if (rtl) slides.css({
    marginLeft: '',
    marginTop: ''
  });else slides.css({
    marginRight: '',
    marginBottom: ''
  });
  var slidesNumberEvenToRows;

  if (params.slidesPerColumn > 1) {
    if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
      slidesNumberEvenToRows = slidesLength;
    } else {
      slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
    }

    if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
      slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
    }
  } // Calc slides


  var slideSize;
  var slidesPerColumn = params.slidesPerColumn;
  var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
  var numFullColumns = slidesPerRow - (params.slidesPerColumn * slidesPerRow - slidesLength);

  for (var i = 0; i < slidesLength; i += 1) {
    slideSize = 0;

    var _slide = slides.eq(i);

    if (params.slidesPerColumn > 1) {
      // Set slides order
      var newSlideOrderIndex = void 0;
      var column = void 0;
      var row = void 0;

      if (params.slidesPerColumnFill === 'column') {
        column = Math.floor(i / slidesPerColumn);
        row = i - column * slidesPerColumn;

        if (column > numFullColumns || column === numFullColumns && row === slidesPerColumn - 1) {
          row += 1;

          if (row >= slidesPerColumn) {
            row = 0;
            column += 1;
          }
        }

        newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;

        _slide.css({
          '-webkit-box-ordinal-group': newSlideOrderIndex,
          '-moz-box-ordinal-group': newSlideOrderIndex,
          '-ms-flex-order': newSlideOrderIndex,
          '-webkit-order': newSlideOrderIndex,
          order: newSlideOrderIndex
        });
      } else {
        row = Math.floor(i / slidesPerRow);
        column = i - row * slidesPerRow;
      }

      _slide.css("margin-".concat(swiper.isHorizontal() ? 'top' : 'left'), row !== 0 && params.spaceBetween && "".concat(params.spaceBetween, "px")).attr('data-swiper-column', column).attr('data-swiper-row', row);
    }

    if (_slide.css('display') === 'none') continue; // eslint-disable-line

    if (params.slidesPerView === 'auto') {
      var slideStyles = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].getComputedStyle(_slide[0], null);
      var currentTransform = _slide[0].style.transform;
      var currentWebKitTransform = _slide[0].style.webkitTransform;

      if (currentTransform) {
        _slide[0].style.transform = 'none';
      }

      if (currentWebKitTransform) {
        _slide[0].style.webkitTransform = 'none';
      }

      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? _slide.outerWidth(true) : _slide.outerHeight(true);
      } else {
        // eslint-disable-next-line
        if (swiper.isHorizontal()) {
          slideSize = parseFloat(slideStyles.getPropertyValue('width')) + parseFloat(slideStyles.getPropertyValue('margin-left')) + parseFloat(slideStyles.getPropertyValue('margin-right'));
        } else {
          slideSize = parseFloat(slideStyles.getPropertyValue('height')) + parseFloat(slideStyles.getPropertyValue('margin-top')) + parseFloat(slideStyles.getPropertyValue('margin-bottom'));
        }
      }

      if (currentTransform) {
        _slide[0].style.transform = currentTransform;
      }

      if (currentWebKitTransform) {
        _slide[0].style.webkitTransform = currentWebKitTransform;
      }

      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);

      if (slides[i]) {
        if (swiper.isHorizontal()) {
          slides[i].style.width = "".concat(slideSize, "px");
        } else {
          slides[i].style.height = "".concat(slideSize, "px");
        }
      }
    }

    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }

    slidesSizesGrid.push(slideSize);

    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index$$1 % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index$$1 % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }

    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index$$1 += 1;
  }

  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  var newSlidesGrid;

  if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
    $wrapperEl.css({
      width: "".concat(swiper.virtualSize + params.spaceBetween, "px")
    });
  }

  if (!Support.flexbox || params.setWrapperSize) {
    if (swiper.isHorizontal()) $wrapperEl.css({
      width: "".concat(swiper.virtualSize + params.spaceBetween, "px")
    });else $wrapperEl.css({
      height: "".concat(swiper.virtualSize + params.spaceBetween, "px")
    });
  }

  if (params.slidesPerColumn > 1) {
    swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
    swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
    if (swiper.isHorizontal()) $wrapperEl.css({
      width: "".concat(swiper.virtualSize + params.spaceBetween, "px")
    });else $wrapperEl.css({
      height: "".concat(swiper.virtualSize + params.spaceBetween, "px")
    });

    if (params.centeredSlides) {
      newSlidesGrid = [];

      for (var _i = 0; _i < snapGrid.length; _i += 1) {
        var slidesGridItem = snapGrid[_i];
        if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[_i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
      }

      snapGrid = newSlidesGrid;
    }
  } // Remove last grid elements depending on width


  if (!params.centeredSlides) {
    newSlidesGrid = [];

    for (var _i2 = 0; _i2 < snapGrid.length; _i2 += 1) {
      var _slidesGridItem = snapGrid[_i2];
      if (params.roundLengths) _slidesGridItem = Math.floor(_slidesGridItem);

      if (snapGrid[_i2] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(_slidesGridItem);
      }
    }

    snapGrid = newSlidesGrid;

    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }

  if (snapGrid.length === 0) snapGrid = [0];

  if (params.spaceBetween !== 0) {
    if (swiper.isHorizontal()) {
      if (rtl) slides.css({
        marginLeft: "".concat(spaceBetween, "px")
      });else slides.css({
        marginRight: "".concat(spaceBetween, "px")
      });
    } else slides.css({
      marginBottom: "".concat(spaceBetween, "px")
    });
  }

  if (params.centerInsufficientSlides) {
    var allSlidesSize = 0;
    slidesSizesGrid.forEach(function (slideSizeValue) {
      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    allSlidesSize -= params.spaceBetween;

    if (allSlidesSize < swiperSize) {
      var allSlidesOffset = (swiperSize - allSlidesSize) / 2;
      snapGrid.forEach(function (snap, snapIndex) {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach(function (snap, snapIndex) {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }

  Utils.extend(swiper, {
    slides: slides,
    snapGrid: snapGrid,
    slidesGrid: slidesGrid,
    slidesSizesGrid: slidesSizesGrid
  });

  if (slidesLength !== previousSlidesLength) {
    swiper.emit('slidesLengthChange');
  }

  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit('snapGridLengthChange');
  }

  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit('slidesGridLengthChange');
  }

  if (params.watchSlidesProgress || params.watchSlidesVisibility) {
    swiper.updateSlidesOffset();
  }
}

function updateAutoHeight(speed) {
  var swiper = this;
  var activeSlides = [];
  var newHeight = 0;
  var i;

  if (typeof speed === 'number') {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  } // Find slides currently in view


  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
    for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
      var index$$1 = swiper.activeIndex + i;
      if (index$$1 > swiper.slides.length) break;
      activeSlides.push(swiper.slides.eq(index$$1)[0]);
    }
  } else {
    activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
  } // Find new height from highest slide in view


  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== 'undefined') {
      var height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  } // Update Height


  if (newHeight) swiper.$wrapperEl.css('height', "".concat(newHeight, "px"));
}

function updateSlidesOffset() {
  var swiper = this;
  var slides = swiper.slides;

  for (var i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
  }
}

function updateSlidesProgress() {
  var translate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this && this.translate || 0;
  var swiper = this;
  var params = swiper.params;
  var slides = swiper.slides,
      rtl = swiper.rtlTranslate;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
  var offsetCenter = -translate;
  if (rtl) offsetCenter = translate; // Visible Slides

  slides.removeClass(params.slideVisibleClass);
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];

  for (var i = 0; i < slides.length; i += 1) {
    var _slide2 = slides[i];
    var slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - _slide2.swiperSlideOffset) / (_slide2.swiperSlideSize + params.spaceBetween);

    if (params.watchSlidesVisibility) {
      var slideBefore = -(offsetCenter - _slide2.swiperSlideOffset);
      var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
      var isVisible = slideBefore >= 0 && slideBefore < swiper.size || slideAfter > 0 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;

      if (isVisible) {
        swiper.visibleSlides.push(_slide2);
        swiper.visibleSlidesIndexes.push(i);
        slides.eq(i).addClass(params.slideVisibleClass);
      }
    }

    _slide2.progress = rtl ? -slideProgress : slideProgress;
  }

  swiper.visibleSlides = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(swiper.visibleSlides);
}

function updateProgress() {
  var translate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this && this.translate || 0;
  var swiper = this;
  var params = swiper.params;
  var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  var progress = swiper.progress,
      isBeginning = swiper.isBeginning,
      isEnd = swiper.isEnd;
  var wasBeginning = isBeginning;
  var wasEnd = isEnd;

  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate - swiper.minTranslate()) / translatesDiff;
    isBeginning = progress <= 0;
    isEnd = progress >= 1;
  }

  Utils.extend(swiper, {
    progress: progress,
    isBeginning: isBeginning,
    isEnd: isEnd
  });
  if (params.watchSlidesProgress || params.watchSlidesVisibility) swiper.updateSlidesProgress(translate);

  if (isBeginning && !wasBeginning) {
    swiper.emit('reachBeginning toEdge');
  }

  if (isEnd && !wasEnd) {
    swiper.emit('reachEnd toEdge');
  }

  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit('fromEdge');
  }

  swiper.emit('progress', progress);
}

function updateSlidesClasses() {
  var swiper = this;
  var slides = swiper.slides,
      params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      activeIndex = swiper.activeIndex,
      realIndex = swiper.realIndex;
  var isVirtual = swiper.virtual && params.virtual.enabled;
  slides.removeClass("".concat(params.slideActiveClass, " ").concat(params.slideNextClass, " ").concat(params.slidePrevClass, " ").concat(params.slideDuplicateActiveClass, " ").concat(params.slideDuplicateNextClass, " ").concat(params.slideDuplicatePrevClass));
  var activeSlide;

  if (isVirtual) {
    activeSlide = swiper.$wrapperEl.find(".".concat(params.slideClass, "[data-swiper-slide-index=\"").concat(activeIndex, "\"]"));
  } else {
    activeSlide = slides.eq(activeIndex);
  } // Active classes


  activeSlide.addClass(params.slideActiveClass);

  if (params.loop) {
    // Duplicate to all looped slides
    if (activeSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children(".".concat(params.slideClass, ":not(.").concat(params.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(realIndex, "\"]")).addClass(params.slideDuplicateActiveClass);
    } else {
      $wrapperEl.children(".".concat(params.slideClass, ".").concat(params.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(realIndex, "\"]")).addClass(params.slideDuplicateActiveClass);
    }
  } // Next Slide


  var nextSlide = activeSlide.nextAll(".".concat(params.slideClass)).eq(0).addClass(params.slideNextClass);

  if (params.loop && nextSlide.length === 0) {
    nextSlide = slides.eq(0);
    nextSlide.addClass(params.slideNextClass);
  } // Prev Slide


  var prevSlide = activeSlide.prevAll(".".concat(params.slideClass)).eq(0).addClass(params.slidePrevClass);

  if (params.loop && prevSlide.length === 0) {
    prevSlide = slides.eq(-1);
    prevSlide.addClass(params.slidePrevClass);
  }

  if (params.loop) {
    // Duplicate to all looped slides
    if (nextSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children(".".concat(params.slideClass, ":not(.").concat(params.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(nextSlide.attr('data-swiper-slide-index'), "\"]")).addClass(params.slideDuplicateNextClass);
    } else {
      $wrapperEl.children(".".concat(params.slideClass, ".").concat(params.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(nextSlide.attr('data-swiper-slide-index'), "\"]")).addClass(params.slideDuplicateNextClass);
    }

    if (prevSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children(".".concat(params.slideClass, ":not(.").concat(params.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(prevSlide.attr('data-swiper-slide-index'), "\"]")).addClass(params.slideDuplicatePrevClass);
    } else {
      $wrapperEl.children(".".concat(params.slideClass, ".").concat(params.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(prevSlide.attr('data-swiper-slide-index'), "\"]")).addClass(params.slideDuplicatePrevClass);
    }
  }
}

function updateActiveIndex(newActiveIndex) {
  var swiper = this;
  var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  var slidesGrid = swiper.slidesGrid,
      snapGrid = swiper.snapGrid,
      params = swiper.params,
      previousIndex = swiper.activeIndex,
      previousRealIndex = swiper.realIndex,
      previousSnapIndex = swiper.snapIndex;
  var activeIndex = newActiveIndex;
  var snapIndex;

  if (typeof activeIndex === 'undefined') {
    for (var i = 0; i < slidesGrid.length; i += 1) {
      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
          activeIndex = i;
        } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
          activeIndex = i + 1;
        }
      } else if (translate >= slidesGrid[i]) {
        activeIndex = i;
      }
    } // Normalize slideIndex


    if (params.normalizeSlideIndex) {
      if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
    }
  }

  if (snapGrid.indexOf(translate) >= 0) {
    snapIndex = snapGrid.indexOf(translate);
  } else {
    snapIndex = Math.floor(activeIndex / params.slidesPerGroup);
  }

  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

  if (activeIndex === previousIndex) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit('snapIndexChange');
    }

    return;
  } // Get real index


  var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
  Utils.extend(swiper, {
    snapIndex: snapIndex,
    realIndex: realIndex,
    previousIndex: previousIndex,
    activeIndex: activeIndex
  });
  swiper.emit('activeIndexChange');
  swiper.emit('snapIndexChange');

  if (previousRealIndex !== realIndex) {
    swiper.emit('realIndexChange');
  }

  swiper.emit('slideChange');
}

function updateClickedSlide(e) {
  var swiper = this;
  var params = swiper.params;
  var slide = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target).closest(".".concat(params.slideClass))[0];
  var slideFound = false;

  if (slide) {
    for (var i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide) slideFound = true;
    }
  }

  if (slide && slideFound) {
    swiper.clickedSlide = slide;

    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt(Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(slide).attr('data-swiper-slide-index'), 10);
    } else {
      swiper.clickedIndex = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(slide).index();
    }
  } else {
    swiper.clickedSlide = undefined;
    swiper.clickedIndex = undefined;
    return;
  }

  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}

var update = {
  updateSize: updateSize,
  updateSlides: updateSlides,
  updateAutoHeight: updateAutoHeight,
  updateSlidesOffset: updateSlidesOffset,
  updateSlidesProgress: updateSlidesProgress,
  updateProgress: updateProgress,
  updateSlidesClasses: updateSlidesClasses,
  updateActiveIndex: updateActiveIndex,
  updateClickedSlide: updateClickedSlide
};

function getTranslate() {
  var axis = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.isHorizontal() ? 'x' : 'y';
  var swiper = this;
  var params = swiper.params,
      rtl = swiper.rtlTranslate,
      translate = swiper.translate,
      $wrapperEl = swiper.$wrapperEl;

  if (params.virtualTranslate) {
    return rtl ? -translate : translate;
  }

  var currentTranslate = Utils.getTranslate($wrapperEl[0], axis);
  if (rtl) currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}

function setTranslate(translate, byController) {
  var swiper = this;
  var rtl = swiper.rtlTranslate,
      params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      progress = swiper.progress;
  var x = 0;
  var y = 0;
  var z = 0;

  if (swiper.isHorizontal()) {
    x = rtl ? -translate : translate;
  } else {
    y = translate;
  }

  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }

  if (!params.virtualTranslate) {
    if (Support.transforms3d) $wrapperEl.transform("translate3d(".concat(x, "px, ").concat(y, "px, ").concat(z, "px)"));else $wrapperEl.transform("translate(".concat(x, "px, ").concat(y, "px)"));
  }

  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress

  var newProgress;
  var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate - swiper.minTranslate()) / translatesDiff;
  }

  if (newProgress !== progress) {
    swiper.updateProgress(translate);
  }

  swiper.emit('setTranslate', swiper.translate, byController);
}

function minTranslate() {
  return -this.snapGrid[0];
}

function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}

var translate = {
  getTranslate: getTranslate,
  setTranslate: setTranslate,
  minTranslate: minTranslate,
  maxTranslate: maxTranslate
};

function setTransition(duration, byController) {
  var swiper = this;
  swiper.$wrapperEl.transition(duration);
  swiper.emit('setTransition', duration, byController);
}

function transitionStart() {
  var runCallbacks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var direction = arguments.length > 1 ? arguments[1] : undefined;
  var swiper = this;
  var activeIndex = swiper.activeIndex,
      params = swiper.params,
      previousIndex = swiper.previousIndex;

  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }

  var dir = direction;

  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }

  swiper.emit('transitionStart');

  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit('slideResetTransitionStart');
      return;
    }

    swiper.emit('slideChangeTransitionStart');

    if (dir === 'next') {
      swiper.emit('slideNextTransitionStart');
    } else {
      swiper.emit('slidePrevTransitionStart');
    }
  }
}

function transitionEnd$1() {
  var runCallbacks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var direction = arguments.length > 1 ? arguments[1] : undefined;
  var swiper = this;
  var activeIndex = swiper.activeIndex,
      previousIndex = swiper.previousIndex;
  swiper.animating = false;
  swiper.setTransition(0);
  var dir = direction;

  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }

  swiper.emit('transitionEnd');

  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit('slideResetTransitionEnd');
      return;
    }

    swiper.emit('slideChangeTransitionEnd');

    if (dir === 'next') {
      swiper.emit('slideNextTransitionEnd');
    } else {
      swiper.emit('slidePrevTransitionEnd');
    }
  }
}

var transition$1 = {
  setTransition: setTransition,
  transitionStart: transitionStart,
  transitionEnd: transitionEnd$1
};

function slideTo() {
  var index$$1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.params.speed;
  var runCallbacks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var internal = arguments.length > 3 ? arguments[3] : undefined;
  var swiper = this;
  var slideIndex = index$$1;
  if (slideIndex < 0) slideIndex = 0;
  var params = swiper.params,
      snapGrid = swiper.snapGrid,
      slidesGrid = swiper.slidesGrid,
      previousIndex = swiper.previousIndex,
      activeIndex = swiper.activeIndex,
      rtl = swiper.rtlTranslate;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }

  var snapIndex = Math.floor(slideIndex / params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

  if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
    swiper.emit('beforeSlideChangeStart');
  }

  var translate = -snapGrid[snapIndex]; // Update progress

  swiper.updateProgress(translate); // Normalize slideIndex

  if (params.normalizeSlideIndex) {
    for (var i = 0; i < slidesGrid.length; i += 1) {
      if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
        slideIndex = i;
      }
    }
  } // Directions locks


  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
      return false;
    }

    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) return false;
    }
  }

  var direction;
  if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset'; // Update Index

  if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
    swiper.updateActiveIndex(slideIndex); // Update Height

    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }

    swiper.updateSlidesClasses();

    if (params.effect !== 'slide') {
      swiper.setTranslate(translate);
    }

    if (direction !== 'reset') {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }

    return false;
  }

  if (speed === 0 || !Support.transition) {
    swiper.setTransition(0);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    swiper.transitionEnd(runCallbacks, direction);
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);

    if (!swiper.animating) {
      swiper.animating = true;

      if (!swiper.onSlideToWrapperTransitionEnd) {
        swiper.onSlideToWrapperTransitionEnd = function transitionEnd$$1(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
          swiper.onSlideToWrapperTransitionEnd = null;
          delete swiper.onSlideToWrapperTransitionEnd;
          swiper.transitionEnd(runCallbacks, direction);
        };
      }

      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
    }
  }

  return true;
}

function slideToLoop() {
  var index$$1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.params.speed;
  var runCallbacks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var internal = arguments.length > 3 ? arguments[3] : undefined;
  var swiper = this;
  var newIndex = index$$1;

  if (swiper.params.loop) {
    newIndex += swiper.loopedSlides;
  }

  return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}
/* eslint no-unused-vars: "off" */


function slideNext() {
  var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
  var runCallbacks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var internal = arguments.length > 2 ? arguments[2] : undefined;
  var swiper = this;
  var params = swiper.params,
      animating = swiper.animating;

  if (params.loop) {
    if (animating) return false;
    swiper.loopFix(); // eslint-disable-next-line

    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
  }

  return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
}
/* eslint no-unused-vars: "off" */


function slidePrev() {
  var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
  var runCallbacks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var internal = arguments.length > 2 ? arguments[2] : undefined;
  var swiper = this;
  var params = swiper.params,
      animating = swiper.animating,
      snapGrid = swiper.snapGrid,
      slidesGrid = swiper.slidesGrid,
      rtlTranslate = swiper.rtlTranslate;

  if (params.loop) {
    if (animating) return false;
    swiper.loopFix(); // eslint-disable-next-line

    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }

  var translate = rtlTranslate ? swiper.translate : -swiper.translate;

  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }

  var normalizedTranslate = normalize(translate);
  var normalizedSnapGrid = snapGrid.map(function (val) {
    return normalize(val);
  });
  var normalizedSlidesGrid = slidesGrid.map(function (val) {
    return normalize(val);
  });
  var currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
  var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
  var prevIndex;

  if (typeof prevSnap !== 'undefined') {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
  }

  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}
/* eslint no-unused-vars: "off" */


function slideReset() {
  var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
  var runCallbacks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var internal = arguments.length > 2 ? arguments[2] : undefined;
  var swiper = this;
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}
/* eslint no-unused-vars: "off" */


function slideToClosest() {
  var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
  var runCallbacks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var internal = arguments.length > 2 ? arguments[2] : undefined;
  var swiper = this;
  var index$$1 = swiper.activeIndex;
  var snapIndex = Math.floor(index$$1 / swiper.params.slidesPerGroup);

  if (snapIndex < swiper.snapGrid.length - 1) {
    var _translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

    var currentSnap = swiper.snapGrid[snapIndex];
    var nextSnap = swiper.snapGrid[snapIndex + 1];

    if (_translate - currentSnap > (nextSnap - currentSnap) / 2) {
      index$$1 = swiper.params.slidesPerGroup;
    }
  }

  return swiper.slideTo(index$$1, speed, runCallbacks, internal);
}

function slideToClickedSlide() {
  var swiper = this;
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl;
  var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  var slideToIndex = swiper.clickedIndex;
  var realIndex;

  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt(Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);

    if (params.centeredSlides) {
      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
        swiper.loopFix();
        slideToIndex = $wrapperEl.children(".".concat(params.slideClass, "[data-swiper-slide-index=\"").concat(realIndex, "\"]:not(.").concat(params.slideDuplicateClass, ")")).eq(0).index();
        Utils.nextTick(function () {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = $wrapperEl.children(".".concat(params.slideClass, "[data-swiper-slide-index=\"").concat(realIndex, "\"]:not(.").concat(params.slideDuplicateClass, ")")).eq(0).index();
      Utils.nextTick(function () {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}

var slide = {
  slideTo: slideTo,
  slideToLoop: slideToLoop,
  slideNext: slideNext,
  slidePrev: slidePrev,
  slideReset: slideReset,
  slideToClosest: slideToClosest,
  slideToClickedSlide: slideToClickedSlide
};

function loopCreate() {
  var swiper = this;
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl; // Remove duplicated slides

  $wrapperEl.children(".".concat(params.slideClass, ".").concat(params.slideDuplicateClass)).remove();
  var slides = $wrapperEl.children(".".concat(params.slideClass));

  if (params.loopFillGroupWithBlank) {
    var blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;

    if (blankSlidesNum !== params.slidesPerGroup) {
      for (var i = 0; i < blankSlidesNum; i += 1) {
        var blankNode = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].createElement('div')).addClass("".concat(params.slideClass, " ").concat(params.slideBlankClass));
        $wrapperEl.append(blankNode);
      }

      slides = $wrapperEl.children(".".concat(params.slideClass));
    }
  }

  if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
  swiper.loopedSlides = parseInt(params.loopedSlides || params.slidesPerView, 10);
  swiper.loopedSlides += params.loopAdditionalSlides;

  if (swiper.loopedSlides > slides.length) {
    swiper.loopedSlides = slides.length;
  }

  var prependSlides = [];
  var appendSlides = [];
  slides.each(function (index$$1, el) {
    var slide = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(el);
    if (index$$1 < swiper.loopedSlides) appendSlides.push(el);
    if (index$$1 < slides.length && index$$1 >= slides.length - swiper.loopedSlides) prependSlides.push(el);
    slide.attr('data-swiper-slide-index', index$$1);
  });

  for (var _i3 = 0; _i3 < appendSlides.length; _i3 += 1) {
    $wrapperEl.append(Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(appendSlides[_i3].cloneNode(true)).addClass(params.slideDuplicateClass));
  }

  for (var _i4 = prependSlides.length - 1; _i4 >= 0; _i4 -= 1) {
    $wrapperEl.prepend(Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(prependSlides[_i4].cloneNode(true)).addClass(params.slideDuplicateClass));
  }
}

function loopFix() {
  var swiper = this;
  var params = swiper.params,
      activeIndex = swiper.activeIndex,
      slides = swiper.slides,
      loopedSlides = swiper.loopedSlides,
      allowSlidePrev = swiper.allowSlidePrev,
      allowSlideNext = swiper.allowSlideNext,
      snapGrid = swiper.snapGrid,
      rtl = swiper.rtlTranslate;
  var newIndex;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  var snapTranslate = -snapGrid[activeIndex];
  var diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding

  if (activeIndex < loopedSlides) {
    newIndex = slides.length - loopedSlides * 3 + activeIndex;
    newIndex += loopedSlides;
    var slideChanged = swiper.slideTo(newIndex, 0, false, true);

    if (slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  } else if (params.slidesPerView === 'auto' && activeIndex >= loopedSlides * 2 || activeIndex >= slides.length - loopedSlides) {
    // Fix For Positive Oversliding
    newIndex = -slides.length + activeIndex + loopedSlides;
    newIndex += loopedSlides;

    var _slideChanged = swiper.slideTo(newIndex, 0, false, true);

    if (_slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  }

  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
}

function loopDestroy() {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl,
      params = swiper.params,
      slides = swiper.slides;
  $wrapperEl.children(".".concat(params.slideClass, ".").concat(params.slideDuplicateClass)).remove();
  slides.removeAttr('data-swiper-slide-index');
}

var loop = {
  loopCreate: loopCreate,
  loopFix: loopFix,
  loopDestroy: loopDestroy
};

function setGrabCursor(moving) {
  var swiper = this;
  if (Support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked) return;
  var el = swiper.el;
  el.style.cursor = 'move';
  el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
  el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
  el.style.cursor = moving ? 'grabbing' : 'grab';
}

function unsetGrabCursor() {
  var swiper = this;
  if (Support.touch || swiper.params.watchOverflow && swiper.isLocked) return;
  swiper.el.style.cursor = '';
}

var grabCursor = {
  setGrabCursor: setGrabCursor,
  unsetGrabCursor: unsetGrabCursor
};

function appendSlide(slides) {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl,
      params = swiper.params;

  if (params.loop) {
    swiper.loopDestroy();
  }

  if (_typeof(slides) === 'object' && 'length' in slides) {
    for (var i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.append(slides[i]);
    }
  } else {
    $wrapperEl.append(slides);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && Support.observer)) {
    swiper.update();
  }
}

function prependSlide(slides) {
  var swiper = this;
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      activeIndex = swiper.activeIndex;

  if (params.loop) {
    swiper.loopDestroy();
  }

  var newActiveIndex = activeIndex + 1;

  if (_typeof(slides) === 'object' && 'length' in slides) {
    for (var i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.prepend(slides[i]);
    }

    newActiveIndex = activeIndex + slides.length;
  } else {
    $wrapperEl.prepend(slides);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && Support.observer)) {
    swiper.update();
  }

  swiper.slideTo(newActiveIndex, 0, false);
}

function addSlide(index$$1, slides) {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl,
      params = swiper.params,
      activeIndex = swiper.activeIndex;
  var activeIndexBuffer = activeIndex;

  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children(".".concat(params.slideClass));
  }

  var baseLength = swiper.slides.length;

  if (index$$1 <= 0) {
    swiper.prependSlide(slides);
    return;
  }

  if (index$$1 >= baseLength) {
    swiper.appendSlide(slides);
    return;
  }

  var newActiveIndex = activeIndexBuffer > index$$1 ? activeIndexBuffer + 1 : activeIndexBuffer;
  var slidesBuffer = [];

  for (var i = baseLength - 1; i >= index$$1; i -= 1) {
    var currentSlide = swiper.slides.eq(i);
    currentSlide.remove();
    slidesBuffer.unshift(currentSlide);
  }

  if (_typeof(slides) === 'object' && 'length' in slides) {
    for (var _i5 = 0; _i5 < slides.length; _i5 += 1) {
      if (slides[_i5]) $wrapperEl.append(slides[_i5]);
    }

    newActiveIndex = activeIndexBuffer > index$$1 ? activeIndexBuffer + slides.length : activeIndexBuffer;
  } else {
    $wrapperEl.append(slides);
  }

  for (var _i6 = 0; _i6 < slidesBuffer.length; _i6 += 1) {
    $wrapperEl.append(slidesBuffer[_i6]);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && Support.observer)) {
    swiper.update();
  }

  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

function removeSlide(slidesIndexes) {
  var swiper = this;
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      activeIndex = swiper.activeIndex;
  var activeIndexBuffer = activeIndex;

  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children(".".concat(params.slideClass));
  }

  var newActiveIndex = activeIndexBuffer;
  var indexToRemove;

  if (_typeof(slidesIndexes) === 'object' && 'length' in slidesIndexes) {
    for (var i = 0; i < slidesIndexes.length; i += 1) {
      indexToRemove = slidesIndexes[i];
      if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    }

    newActiveIndex = Math.max(newActiveIndex, 0);
  } else {
    indexToRemove = slidesIndexes;
    if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
    if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    newActiveIndex = Math.max(newActiveIndex, 0);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && Support.observer)) {
    swiper.update();
  }

  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

function removeAllSlides() {
  var swiper = this;
  var slidesIndexes = [];

  for (var i = 0; i < swiper.slides.length; i += 1) {
    slidesIndexes.push(i);
  }

  swiper.removeSlide(slidesIndexes);
}

var manipulation = {
  appendSlide: appendSlide,
  prependSlide: prependSlide,
  addSlide: addSlide,
  removeSlide: removeSlide,
  removeAllSlides: removeAllSlides
};

var Device = function Device() {
  var ua = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator.userAgent;
  var device = {
    ios: false,
    android: false,
    androidChrome: false,
    desktop: false,
    windows: false,
    iphone: false,
    ipod: false,
    ipad: false,
    cordova: ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].cordova || ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].phonegap,
    phonegap: ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].cordova || ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].phonegap
  };
  var windows = ua.match(/(Windows Phone);?[\s\/]+([\d.]+)?/); // eslint-disable-line

  var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line

  var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/); // Windows

  if (windows) {
    device.os = 'windows';
    device.osVersion = windows[2];
    device.windows = true;
  } // Android


  if (android && !windows) {
    device.os = 'android';
    device.osVersion = android[2];
    device.android = true;
    device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
  }

  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  } // iOS


  if (iphone && !ipod) {
    device.osVersion = iphone[2].replace(/_/g, '.');
    device.iphone = true;
  }

  if (ipad) {
    device.osVersion = ipad[2].replace(/_/g, '.');
    device.ipad = true;
  }

  if (ipod) {
    device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
    device.iphone = true;
  } // iOS 8+ changed UA


  if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
    if (device.osVersion.split('.')[0] === '10') {
      device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
    }
  } // Desktop


  device.desktop = !(device.os || device.android || device.webView); // Webview

  device.webView = (iphone || ipad || ipod) && ua.match(/.*AppleWebKit(?!.*Safari)/i); // Minimal UI

  if (device.os && device.os === 'ios') {
    var osVersionArr = device.osVersion.split('.');
    var metaViewport = ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].querySelector('meta[name="viewport"]');
    device.minimalUi = !device.webView && (ipod || iphone) && (osVersionArr[0] * 1 === 7 ? osVersionArr[1] * 1 >= 1 : osVersionArr[0] * 1 > 7) && metaViewport && metaViewport.getAttribute('content').indexOf('minimal-ui') >= 0;
  } // Pixel Ratio


  device.pixelRatio = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].devicePixelRatio || 1; // Export object

  return device;
}();

function onTouchStart(event) {
  var swiper = this;
  var data$$1 = swiper.touchEventsData;
  var params = swiper.params,
      touches = swiper.touches;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }

  var e = event;
  if (e.originalEvent) e = e.originalEvent;
  data$$1.isTouchEvent = e.type === 'touchstart';
  if (!data$$1.isTouchEvent && 'which' in e && e.which === 3) return;
  if (!data$$1.isTouchEvent && 'button' in e && e.button > 0) return;
  if (data$$1.isTouched && data$$1.isMoved) return;

  if (params.noSwiping && Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target).closest(params.noSwipingSelector ? params.noSwipingSelector : ".".concat(params.noSwipingClass))[0]) {
    swiper.allowClick = true;
    return;
  }

  if (params.swipeHandler) {
    if (!Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(e).closest(params.swipeHandler)[0]) return;
  }

  touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
  touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  var startX = touches.currentX;
  var startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore

  var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
  var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;

  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].screen.width - edgeSwipeThreshold)) {
    return;
  }

  Utils.extend(data$$1, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: undefined,
    startMoving: undefined
  });
  touches.startX = startX;
  touches.startY = startY;
  data$$1.touchStartTime = Utils.now();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = undefined;
  if (params.threshold > 0) data$$1.allowThresholdMove = false;

  if (e.type !== 'touchstart') {
    var preventDefault = true;
    if (Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target).is(data$$1.formElements)) preventDefault = false;

    if (ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement && Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement).is(data$$1.formElements) && ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement !== e.target) {
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement.blur();
    }

    var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;

    if (params.touchStartForcePreventDefault || shouldPreventDefault) {
      e.preventDefault();
    }
  }

  swiper.emit('touchStart', e);
}

function onTouchMove(event) {
  var swiper = this;
  var data$$1 = swiper.touchEventsData;
  var params = swiper.params,
      touches = swiper.touches,
      rtl = swiper.rtlTranslate;
  var e = event;
  if (e.originalEvent) e = e.originalEvent;

  if (!data$$1.isTouched) {
    if (data$$1.startMoving && data$$1.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }

    return;
  }

  if (data$$1.isTouchEvent && e.type === 'mousemove') return;
  var pageX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
  var pageY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }

  if (!swiper.allowTouchMove) {
    // isMoved = true;
    swiper.allowClick = false;

    if (data$$1.isTouched) {
      Utils.extend(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY
      });
      data$$1.touchStartTime = Utils.now();
    }

    return;
  }

  if (data$$1.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      // Vertical
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data$$1.isTouched = false;
        data$$1.isMoved = false;
        return;
      }
    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
      return;
    }
  }

  if (data$$1.isTouchEvent && ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement) {
    if (e.target === ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement && Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target).is(data$$1.formElements)) {
      data$$1.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }

  if (data$$1.allowTouchCallbacks) {
    swiper.emit('touchMove', e);
  }

  if (e.targetTouches && e.targetTouches.length > 1) return;
  touches.currentX = pageX;
  touches.currentY = pageY;
  var diffX = touches.currentX - touches.startX;
  var diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)) < swiper.params.threshold) return;

  if (typeof data$$1.isScrolling === 'undefined') {
    var touchAngle;

    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data$$1.isScrolling = false;
    } else {
      // eslint-disable-next-line
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data$$1.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }

  if (data$$1.isScrolling) {
    swiper.emit('touchMoveOpposite', e);
  }

  if (typeof data$$1.startMoving === 'undefined') {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data$$1.startMoving = true;
    }
  }

  if (data$$1.isScrolling) {
    data$$1.isTouched = false;
    return;
  }

  if (!data$$1.startMoving) {
    return;
  }

  swiper.allowClick = false;
  e.preventDefault();

  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }

  if (!data$$1.isMoved) {
    if (params.loop) {
      swiper.loopFix();
    }

    data$$1.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);

    if (swiper.animating) {
      swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
    }

    data$$1.allowMomentumBounce = false; // Grab Cursor

    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }

    swiper.emit('sliderFirstMove', e);
  }

  swiper.emit('sliderMove', e);
  data$$1.isMoved = true;
  var diff = swiper.isHorizontal() ? diffX : diffY;
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) diff = -diff;
  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
  data$$1.currentTranslate = diff + data$$1.startTranslate;
  var disableParentSwiper = true;
  var resistanceRatio = params.resistanceRatio;

  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }

  if (diff > 0 && data$$1.currentTranslate > swiper.minTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data$$1.currentTranslate = swiper.minTranslate() - 1 + Math.pow(-swiper.minTranslate() + data$$1.startTranslate + diff, resistanceRatio);
  } else if (diff < 0 && data$$1.currentTranslate < swiper.maxTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data$$1.currentTranslate = swiper.maxTranslate() + 1 - Math.pow(swiper.maxTranslate() - data$$1.startTranslate - diff, resistanceRatio);
  }

  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  } // Directions locks


  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data$$1.currentTranslate < data$$1.startTranslate) {
    data$$1.currentTranslate = data$$1.startTranslate;
  }

  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data$$1.currentTranslate > data$$1.startTranslate) {
    data$$1.currentTranslate = data$$1.startTranslate;
  } // Threshold


  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data$$1.allowThresholdMove) {
      if (!data$$1.allowThresholdMove) {
        data$$1.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data$$1.currentTranslate = data$$1.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data$$1.currentTranslate = data$$1.startTranslate;
      return;
    }
  }

  if (!params.followFinger) return; // Update active index in free mode

  if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }

  if (params.freeMode) {
    // Velocity
    if (data$$1.velocities.length === 0) {
      data$$1.velocities.push({
        position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
        time: data$$1.touchStartTime
      });
    }

    data$$1.velocities.push({
      position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
      time: Utils.now()
    });
  } // Update progress


  swiper.updateProgress(data$$1.currentTranslate); // Update translate

  swiper.setTranslate(data$$1.currentTranslate);
}

function onTouchEnd(event) {
  var swiper = this;
  var data$$1 = swiper.touchEventsData;
  var params = swiper.params,
      touches = swiper.touches,
      rtl = swiper.rtlTranslate,
      $wrapperEl = swiper.$wrapperEl,
      slidesGrid = swiper.slidesGrid,
      snapGrid = swiper.snapGrid;
  var e = event;
  if (e.originalEvent) e = e.originalEvent;

  if (data$$1.allowTouchCallbacks) {
    swiper.emit('touchEnd', e);
  }

  data$$1.allowTouchCallbacks = false;

  if (!data$$1.isTouched) {
    if (data$$1.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }

    data$$1.isMoved = false;
    data$$1.startMoving = false;
    return;
  } // Return Grab Cursor


  if (params.grabCursor && data$$1.isMoved && data$$1.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  } // Time diff


  var touchEndTime = Utils.now();
  var timeDiff = touchEndTime - data$$1.touchStartTime; // Tap, doubleTap, Click

  if (swiper.allowClick) {
    swiper.updateClickedSlide(e);
    swiper.emit('tap', e);

    if (timeDiff < 300 && touchEndTime - data$$1.lastClickTime > 300) {
      if (data$$1.clickTimeout) clearTimeout(data$$1.clickTimeout);
      data$$1.clickTimeout = Utils.nextTick(function () {
        if (!swiper || swiper.destroyed) return;
        swiper.emit('click', e);
      }, 300);
    }

    if (timeDiff < 300 && touchEndTime - data$$1.lastClickTime < 300) {
      if (data$$1.clickTimeout) clearTimeout(data$$1.clickTimeout);
      swiper.emit('doubleTap', e);
    }
  }

  data$$1.lastClickTime = Utils.now();
  Utils.nextTick(function () {
    if (!swiper.destroyed) swiper.allowClick = true;
  });

  if (!data$$1.isTouched || !data$$1.isMoved || !swiper.swipeDirection || touches.diff === 0 || data$$1.currentTranslate === data$$1.startTranslate) {
    data$$1.isTouched = false;
    data$$1.isMoved = false;
    data$$1.startMoving = false;
    return;
  }

  data$$1.isTouched = false;
  data$$1.isMoved = false;
  data$$1.startMoving = false;
  var currentPos;

  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data$$1.currentTranslate;
  }

  if (params.freeMode) {
    if (currentPos < -swiper.minTranslate()) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    if (currentPos > -swiper.maxTranslate()) {
      if (swiper.slides.length < snapGrid.length) {
        swiper.slideTo(snapGrid.length - 1);
      } else {
        swiper.slideTo(swiper.slides.length - 1);
      }

      return;
    }

    if (params.freeModeMomentum) {
      if (data$$1.velocities.length > 1) {
        var lastMoveEvent = data$$1.velocities.pop();
        var velocityEvent = data$$1.velocities.pop();
        var distance = lastMoveEvent.position - velocityEvent.position;
        var time = lastMoveEvent.time - velocityEvent.time;
        swiper.velocity = distance / time;
        swiper.velocity /= 2;

        if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
          swiper.velocity = 0;
        } // this implies that the user stopped moving a finger then released.
        // There would be no events with distance zero, so the last event is stale.


        if (time > 150 || Utils.now() - lastMoveEvent.time > 300) {
          swiper.velocity = 0;
        }
      } else {
        swiper.velocity = 0;
      }

      swiper.velocity *= params.freeModeMomentumVelocityRatio;
      data$$1.velocities.length = 0;
      var momentumDuration = 1000 * params.freeModeMomentumRatio;
      var momentumDistance = swiper.velocity * momentumDuration;
      var newPosition = swiper.translate + momentumDistance;
      if (rtl) newPosition = -newPosition;
      var doBounce = false;
      var afterBouncePosition;
      var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
      var needsLoopFix;

      if (newPosition < swiper.maxTranslate()) {
        if (params.freeModeMomentumBounce) {
          if (newPosition + swiper.maxTranslate() < -bounceAmount) {
            newPosition = swiper.maxTranslate() - bounceAmount;
          }

          afterBouncePosition = swiper.maxTranslate();
          doBounce = true;
          data$$1.allowMomentumBounce = true;
        } else {
          newPosition = swiper.maxTranslate();
        }

        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (newPosition > swiper.minTranslate()) {
        if (params.freeModeMomentumBounce) {
          if (newPosition - swiper.minTranslate() > bounceAmount) {
            newPosition = swiper.minTranslate() + bounceAmount;
          }

          afterBouncePosition = swiper.minTranslate();
          doBounce = true;
          data$$1.allowMomentumBounce = true;
        } else {
          newPosition = swiper.minTranslate();
        }

        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (params.freeModeSticky) {
        var nextSlide;

        for (var j = 0; j < snapGrid.length; j += 1) {
          if (snapGrid[j] > -newPosition) {
            nextSlide = j;
            break;
          }
        }

        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
          newPosition = snapGrid[nextSlide];
        } else {
          newPosition = snapGrid[nextSlide - 1];
        }

        newPosition = -newPosition;
      }

      if (needsLoopFix) {
        swiper.once('transitionEnd', function () {
          swiper.loopFix();
        });
      } // Fix duration


      if (swiper.velocity !== 0) {
        if (rtl) {
          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
        } else {
          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
        }
      } else if (params.freeModeSticky) {
        swiper.slideToClosest();
        return;
      }

      if (params.freeModeMomentumBounce && doBounce) {
        swiper.updateProgress(afterBouncePosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        swiper.animating = true;
        $wrapperEl.transitionEnd(function () {
          if (!swiper || swiper.destroyed || !data$$1.allowMomentumBounce) return;
          swiper.emit('momentumBounce');
          swiper.setTransition(params.speed);
          swiper.setTranslate(afterBouncePosition);
          $wrapperEl.transitionEnd(function () {
            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          });
        });
      } else if (swiper.velocity) {
        swiper.updateProgress(newPosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);

        if (!swiper.animating) {
          swiper.animating = true;
          $wrapperEl.transitionEnd(function () {
            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          });
        }
      } else {
        swiper.updateProgress(newPosition);
      }

      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    } else if (params.freeModeSticky) {
      swiper.slideToClosest();
      return;
    }

    if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }

    return;
  } // Find current slide


  var stopIndex = 0;
  var groupSize = swiper.slidesSizesGrid[0];

  for (var i = 0; i < slidesGrid.length; i += params.slidesPerGroup) {
    if (typeof slidesGrid[i + params.slidesPerGroup] !== 'undefined') {
      if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + params.slidesPerGroup]) {
        stopIndex = i;
        groupSize = slidesGrid[i + params.slidesPerGroup] - slidesGrid[i];
      }
    } else if (currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  } // Find current slide size


  var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;

  if (timeDiff > params.longSwipesMs) {
    // Long touches
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    if (swiper.swipeDirection === 'next') {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + params.slidesPerGroup);else swiper.slideTo(stopIndex);
    }

    if (swiper.swipeDirection === 'prev') {
      if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + params.slidesPerGroup);else swiper.slideTo(stopIndex);
    }
  } else {
    // Short swipes
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    if (swiper.swipeDirection === 'next') {
      swiper.slideTo(stopIndex + params.slidesPerGroup);
    }

    if (swiper.swipeDirection === 'prev') {
      swiper.slideTo(stopIndex);
    }
  }
}

function onResize() {
  var swiper = this;
  var params = swiper.params,
      el = swiper.el;
  if (el && el.offsetWidth === 0) return; // Breakpoints

  if (params.breakpoints) {
    swiper.setBreakpoint();
  } // Save locks


  var allowSlideNext = swiper.allowSlideNext,
      allowSlidePrev = swiper.allowSlidePrev,
      snapGrid = swiper.snapGrid; // Disable locks on resize

  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();

  if (params.freeMode) {
    var newTranslate = Math.min(Math.max(swiper.translate, swiper.maxTranslate()), swiper.minTranslate());
    swiper.setTranslate(newTranslate);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();

    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
  } else {
    swiper.updateSlidesClasses();

    if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
      swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }
  } // Return locks after resize


  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;

  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}

function onClick(e) {
  var swiper = this;

  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();

    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}

function attachEvents() {
  var swiper = this;
  var params = swiper.params,
      touchEvents = swiper.touchEvents,
      el = swiper.el,
      wrapperEl = swiper.wrapperEl;
  {
    swiper.onTouchStart = onTouchStart.bind(swiper);
    swiper.onTouchMove = onTouchMove.bind(swiper);
    swiper.onTouchEnd = onTouchEnd.bind(swiper);
  }
  swiper.onClick = onClick.bind(swiper);
  var target = params.touchEventsTarget === 'container' ? el : wrapperEl;
  var capture = !!params.nested; // Touch Events

  {
    if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
      target.addEventListener(touchEvents.start, swiper.onTouchStart, false);
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].addEventListener(touchEvents.move, swiper.onTouchMove, capture);
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].addEventListener(touchEvents.end, swiper.onTouchEnd, false);
    } else {
      if (Support.touch) {
        var passiveListener = touchEvents.start === 'touchstart' && Support.passiveListener && params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;
        target.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
        target.addEventListener(touchEvents.move, swiper.onTouchMove, Support.passiveListener ? {
          passive: false,
          capture: capture
        } : capture);
        target.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
      }

      if (params.simulateTouch && !Device.ios && !Device.android || params.simulateTouch && !Support.touch && Device.ios) {
        target.addEventListener('mousedown', swiper.onTouchStart, false);
        ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].addEventListener('mousemove', swiper.onTouchMove, capture);
        ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].addEventListener('mouseup', swiper.onTouchEnd, false);
      }
    } // Prevent Links Clicks


    if (params.preventClicks || params.preventClicksPropagation) {
      target.addEventListener('click', swiper.onClick, true);
    }
  } // Resize handler

  swiper.on(Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
}

function detachEvents() {
  var swiper = this;
  var params = swiper.params,
      touchEvents = swiper.touchEvents,
      el = swiper.el,
      wrapperEl = swiper.wrapperEl;
  var target = params.touchEventsTarget === 'container' ? el : wrapperEl;
  var capture = !!params.nested; // Touch Events

  {
    if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
      target.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
    } else {
      if (Support.touch) {
        var passiveListener = touchEvents.start === 'onTouchStart' && Support.passiveListener && params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;
        target.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
        target.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
        target.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
      }

      if (params.simulateTouch && !Device.ios && !Device.android || params.simulateTouch && !Support.touch && Device.ios) {
        target.removeEventListener('mousedown', swiper.onTouchStart, false);
        ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].removeEventListener('mousemove', swiper.onTouchMove, capture);
        ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].removeEventListener('mouseup', swiper.onTouchEnd, false);
      }
    } // Prevent Links Clicks


    if (params.preventClicks || params.preventClicksPropagation) {
      target.removeEventListener('click', swiper.onClick, true);
    }
  } // Resize handler

  swiper.off(Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize);
}

var events = {
  attachEvents: attachEvents,
  detachEvents: detachEvents
};

function setBreakpoint() {
  var swiper = this;
  var activeIndex = swiper.activeIndex,
      initialized = swiper.initialized,
      _swiper$loopedSlides = swiper.loopedSlides,
      loopedSlides = _swiper$loopedSlides === void 0 ? 0 : _swiper$loopedSlides,
      params = swiper.params;
  var breakpoints = params.breakpoints;
  if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Set breakpoint for window width and update parameters

  var breakpoint = swiper.getBreakpoint(breakpoints);

  if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
    var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;

    if (breakpointOnlyParams) {
      ['slidesPerView', 'spaceBetween', 'slidesPerGroup'].forEach(function (param) {
        var paramValue = breakpointOnlyParams[param];
        if (typeof paramValue === 'undefined') return;

        if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
          breakpointOnlyParams[param] = 'auto';
        } else if (param === 'slidesPerView') {
          breakpointOnlyParams[param] = parseFloat(paramValue);
        } else {
          breakpointOnlyParams[param] = parseInt(paramValue, 10);
        }
      });
    }

    var breakpointParams = breakpointOnlyParams || swiper.originalParams;
    var needsReLoop = params.loop && breakpointParams.slidesPerView !== params.slidesPerView;
    Utils.extend(swiper.params, breakpointParams);
    Utils.extend(swiper, {
      allowTouchMove: swiper.params.allowTouchMove,
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev
    });
    swiper.currentBreakpoint = breakpoint;

    if (needsReLoop && initialized) {
      swiper.loopDestroy();
      swiper.loopCreate();
      swiper.updateSlides();
      swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
    }

    swiper.emit('breakpoint', breakpointParams);
  }
}

function getBreakpoint(breakpoints) {
  var swiper = this; // Get breakpoint for window width

  if (!breakpoints) return undefined;
  var breakpoint = false;
  var points = [];
  Object.keys(breakpoints).forEach(function (point) {
    points.push(point);
  });
  points.sort(function (a, b) {
    return parseInt(a, 10) - parseInt(b, 10);
  });

  for (var i = 0; i < points.length; i += 1) {
    var point = points[i];

    if (swiper.params.breakpointsInverse) {
      if (point <= ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].innerWidth) {
        breakpoint = point;
      }
    } else if (point >= ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].innerWidth && !breakpoint) {
      breakpoint = point;
    }
  }

  return breakpoint || 'max';
}

var breakpoints = {
  setBreakpoint: setBreakpoint,
  getBreakpoint: getBreakpoint
};

var Browser = function Browser() {
  function isSafari() {
    var ua = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
  }

  return {
    isIE: !!ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator.userAgent.match(/Trident/g) || !!ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator.userAgent.match(/MSIE/g),
    isEdge: !!ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator.userAgent.match(/Edge/g),
    isSafari: isSafari(),
    isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator.userAgent)
  };
}();

function addClasses() {
  var swiper = this;
  var classNames = swiper.classNames,
      params = swiper.params,
      rtl = swiper.rtl,
      $el = swiper.$el;
  var suffixes = [];
  suffixes.push(params.direction);

  if (params.freeMode) {
    suffixes.push('free-mode');
  }

  if (!Support.flexbox) {
    suffixes.push('no-flexbox');
  }

  if (params.autoHeight) {
    suffixes.push('autoheight');
  }

  if (rtl) {
    suffixes.push('rtl');
  }

  if (params.slidesPerColumn > 1) {
    suffixes.push('multirow');
  }

  if (Device.android) {
    suffixes.push('android');
  }

  if (Device.ios) {
    suffixes.push('ios');
  } // WP8 Touch Events Fix


  if ((Browser.isIE || Browser.isEdge) && (Support.pointerEvents || Support.prefixedPointerEvents)) {
    suffixes.push("wp8-".concat(params.direction));
  }

  suffixes.forEach(function (suffix) {
    classNames.push(params.containerModifierClass + suffix);
  });
  $el.addClass(classNames.join(' '));
}

function removeClasses() {
  var swiper = this;
  var $el = swiper.$el,
      classNames = swiper.classNames;
  $el.removeClass(classNames.join(' '));
}

var classes = {
  addClasses: addClasses,
  removeClasses: removeClasses
};

function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
  var image;

  function onReady() {
    if (callback) callback();
  }

  if (!imageEl.complete || !checkForComplete) {
    if (src) {
      image = new ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].Image();
      image.onload = onReady;
      image.onerror = onReady;

      if (sizes) {
        image.sizes = sizes;
      }

      if (srcset) {
        image.srcset = srcset;
      }

      if (src) {
        image.src = src;
      }
    } else {
      onReady();
    }
  } else {
    // image already loaded...
    onReady();
  }
}

function preloadImages() {
  var swiper = this;
  swiper.imagesToLoad = swiper.$el.find('img');

  function onReady() {
    if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
    if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;

    if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
      if (swiper.params.updateOnImagesReady) swiper.update();
      swiper.emit('imagesReady');
    }
  }

  for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
    var imageEl = swiper.imagesToLoad[i];
    swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
  }
}

var images = {
  loadImage: loadImage,
  preloadImages: preloadImages
};

function checkOverflow() {
  var swiper = this;
  var wasLocked = swiper.isLocked;
  swiper.isLocked = swiper.snapGrid.length === 1;
  swiper.allowSlideNext = !swiper.isLocked;
  swiper.allowSlidePrev = !swiper.isLocked; // events

  if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? 'lock' : 'unlock');

  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
    swiper.navigation.update();
  }
}

var checkOverflow$1 = {
  checkOverflow: checkOverflow
};
var defaults = {
  init: true,
  direction: 'horizontal',
  touchEventsTarget: 'container',
  initialSlide: 0,
  speed: 300,
  //
  preventInteractionOnTransition: false,
  // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Free mode
  freeMode: false,
  freeModeMomentum: true,
  freeModeMomentumRatio: 1,
  freeModeMomentumBounce: true,
  freeModeMomentumBounceRatio: 1,
  freeModeMomentumVelocityRatio: 1,
  freeModeSticky: false,
  freeModeMinimumVelocity: 0.02,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: 'slide',
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  // Breakpoints
  breakpoints: undefined,
  breakpointsInverse: false,
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerColumn: 1,
  slidesPerColumnFill: 'column',
  slidesPerGroup: 1,
  centeredSlides: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: false,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 0,
  touchMoveStopPropagation: true,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  watchSlidesVisibility: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // Images
  preloadImages: true,
  updateOnImagesReady: true,
  // loop
  loop: false,
  loopAdditionalSlides: 0,
  loopedSlides: null,
  loopFillGroupWithBlank: false,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  // NS
  containerModifierClass: 'swiper-container-',
  // NEW
  slideClass: 'swiper-slide',
  slideBlankClass: 'swiper-slide-invisible-blank',
  slideActiveClass: 'swiper-slide-active',
  slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
  slideVisibleClass: 'swiper-slide-visible',
  slideDuplicateClass: 'swiper-slide-duplicate',
  slideNextClass: 'swiper-slide-next',
  slideDuplicateNextClass: 'swiper-slide-duplicate-next',
  slidePrevClass: 'swiper-slide-prev',
  slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
  wrapperClass: 'swiper-wrapper',
  // Callbacks
  runCallbacksOnInit: true
};
var prototypes = {
  update: update,
  translate: translate,
  transition: transition$1,
  slide: slide,
  loop: loop,
  grabCursor: grabCursor,
  manipulation: manipulation,
  events: events,
  breakpoints: breakpoints,
  checkOverflow: checkOverflow$1,
  classes: classes,
  images: images
};
var extendedDefaults = {};

var Swiper = /*#__PURE__*/function (_SwiperClass) {
  _inherits(Swiper, _SwiperClass);

  var _super = _createSuper(Swiper);

  function Swiper() {
    var _this;

    _classCallCheck(this, Swiper);

    var el;
    var params;

    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
      params = args[0];
    } else {
      el = args[0];
      params = args[1];
    }

    if (!params) params = {};
    params = Utils.extend({}, params);
    if (el && !params.el) params.el = el;
    _this = _super.call(this, params);
    Object.keys(prototypes).forEach(function (prototypeGroup) {
      Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
        if (!Swiper.prototype[protoMethod]) {
          Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
        }
      });
    }); // Swiper Instance

    var swiper = _assertThisInitialized(_this);

    if (typeof swiper.modules === 'undefined') {
      swiper.modules = {};
    }

    Object.keys(swiper.modules).forEach(function (moduleName) {
      var module = swiper.modules[moduleName];

      if (module.params) {
        var moduleParamName = Object.keys(module.params)[0];
        var moduleParams = module.params[moduleParamName];
        if (_typeof(moduleParams) !== 'object' || moduleParams === null) return;
        if (!(moduleParamName in params && 'enabled' in moduleParams)) return;

        if (params[moduleParamName] === true) {
          params[moduleParamName] = {
            enabled: true
          };
        }

        if (_typeof(params[moduleParamName]) === 'object' && !('enabled' in params[moduleParamName])) {
          params[moduleParamName].enabled = true;
        }

        if (!params[moduleParamName]) params[moduleParamName] = {
          enabled: false
        };
      }
    }); // Extend defaults with modules params

    var swiperParams = Utils.extend({}, defaults);
    swiper.useModulesParams(swiperParams); // Extend defaults with passed params

    swiper.params = Utils.extend({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = Utils.extend({}, swiper.params);
    swiper.passedParams = Utils.extend({}, params); // Save Dom lib

    swiper.$ = dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"]; // Find el

    var $el = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(swiper.params.el);
    el = $el[0];

    if (!el) {
      return _possibleConstructorReturn(_this, undefined);
    }

    if ($el.length > 1) {
      var swipers = [];
      $el.each(function (index$$1, containerEl) {
        var newParams = Utils.extend({}, params, {
          el: containerEl
        });
        swipers.push(new Swiper(newParams));
      });
      return _possibleConstructorReturn(_this, swipers);
    }

    el.swiper = swiper;
    $el.data('swiper', swiper); // Find Wrapper

    var $wrapperEl = $el.children(".".concat(swiper.params.wrapperClass)); // Extend Swiper

    Utils.extend(swiper, {
      $el: $el,
      el: el,
      $wrapperEl: $wrapperEl,
      wrapperEl: $wrapperEl[0],
      // Classes
      classNames: [],
      // Slides
      slides: Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(),
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal: function isHorizontal() {
        return swiper.params.direction === 'horizontal';
      },
      isVertical: function isVertical() {
        return swiper.params.direction === 'vertical';
      },
      // RTL
      rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
      rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
      wrongRTL: $wrapperEl.css('display') === '-webkit-box',
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEvents: function touchEvents() {
        var touch = ['touchstart', 'touchmove', 'touchend'];
        var desktop = ['mousedown', 'mousemove', 'mouseup'];

        if (Support.pointerEvents) {
          desktop = ['pointerdown', 'pointermove', 'pointerup'];
        } else if (Support.prefixedPointerEvents) {
          desktop = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp'];
        }

        swiper.touchEventsTouch = {
          start: touch[0],
          move: touch[1],
          end: touch[2]
        };
        swiper.touchEventsDesktop = {
          start: desktop[0],
          move: desktop[1],
          end: desktop[2]
        };
        return Support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
      }(),
      touchEventsData: {
        isTouched: undefined,
        isMoved: undefined,
        allowTouchCallbacks: undefined,
        touchStartTime: undefined,
        isScrolling: undefined,
        currentTranslate: undefined,
        startTranslate: undefined,
        allowThresholdMove: undefined,
        // Form elements to match
        formElements: 'input, select, option, textarea, button, video',
        // Last click time
        lastClickTime: Utils.now(),
        clickTimeout: undefined,
        // Velocities
        velocities: [],
        allowMomentumBounce: undefined,
        isTouchEvent: undefined,
        startMoving: undefined
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    }); // Install Modules

    swiper.useModules(); // Init

    if (swiper.params.init) {
      swiper.init();
    } // Return app instance


    return _possibleConstructorReturn(_this, swiper);
  }

  _createClass(Swiper, [{
    key: "slidesPerViewDynamic",
    value: function slidesPerViewDynamic() {
      var swiper = this;
      var params = swiper.params,
          slides = swiper.slides,
          slidesGrid = swiper.slidesGrid,
          swiperSize = swiper.size,
          activeIndex = swiper.activeIndex;
      var spv = 1;

      if (params.centeredSlides) {
        var slideSize = slides[activeIndex].swiperSlideSize;
        var breakLoop;

        for (var i = activeIndex + 1; i < slides.length; i += 1) {
          if (slides[i] && !breakLoop) {
            slideSize += slides[i].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) breakLoop = true;
          }
        }

        for (var _i7 = activeIndex - 1; _i7 >= 0; _i7 -= 1) {
          if (slides[_i7] && !breakLoop) {
            slideSize += slides[_i7].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) breakLoop = true;
          }
        }
      } else {
        for (var _i8 = activeIndex + 1; _i8 < slides.length; _i8 += 1) {
          if (slidesGrid[_i8] - slidesGrid[activeIndex] < swiperSize) {
            spv += 1;
          }
        }
      }

      return spv;
    }
  }, {
    key: "update",
    value: function update() {
      var swiper = this;
      if (!swiper || swiper.destroyed) return;
      var snapGrid = swiper.snapGrid,
          params = swiper.params; // Breakpoints

      if (params.breakpoints) {
        swiper.setBreakpoint();
      }

      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();

      function setTranslate() {
        var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
        var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
        swiper.setTranslate(newTranslate);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }

      var translated;

      if (swiper.params.freeMode) {
        setTranslate();

        if (swiper.params.autoHeight) {
          swiper.updateAutoHeight();
        }
      } else {
        if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
          translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
        } else {
          translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
        }

        if (!translated) {
          setTranslate();
        }
      }

      if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }

      swiper.emit('update');
    }
  }, {
    key: "init",
    value: function init() {
      var swiper = this;
      if (swiper.initialized) return;
      swiper.emit('beforeInit'); // Set breakpoint

      if (swiper.params.breakpoints) {
        swiper.setBreakpoint();
      } // Add Classes


      swiper.addClasses(); // Create loop

      if (swiper.params.loop) {
        swiper.loopCreate();
      } // Update size


      swiper.updateSize(); // Update slides

      swiper.updateSlides();

      if (swiper.params.watchOverflow) {
        swiper.checkOverflow();
      } // Set Grab Cursor


      if (swiper.params.grabCursor) {
        swiper.setGrabCursor();
      }

      if (swiper.params.preloadImages) {
        swiper.preloadImages();
      } // Slide To Initial Slide


      if (swiper.params.loop) {
        swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
      } else {
        swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
      } // Attach events


      swiper.attachEvents(); // Init Flag

      swiper.initialized = true; // Emit

      swiper.emit('init');
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var deleteInstance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var cleanStyles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var swiper = this;
      var params = swiper.params,
          $el = swiper.$el,
          $wrapperEl = swiper.$wrapperEl,
          slides = swiper.slides;

      if (typeof swiper.params === 'undefined' || swiper.destroyed) {
        return null;
      }

      swiper.emit('beforeDestroy'); // Init Flag

      swiper.initialized = false; // Detach events

      swiper.detachEvents(); // Destroy loop

      if (params.loop) {
        swiper.loopDestroy();
      } // Cleanup styles


      if (cleanStyles) {
        swiper.removeClasses();
        $el.removeAttr('style');
        $wrapperEl.removeAttr('style');

        if (slides && slides.length) {
          slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index').removeAttr('data-swiper-column').removeAttr('data-swiper-row');
        }
      }

      swiper.emit('destroy'); // Detach emitter events

      Object.keys(swiper.eventsListeners).forEach(function (eventName) {
        swiper.off(eventName);
      });

      if (deleteInstance !== false) {
        swiper.$el[0].swiper = null;
        swiper.$el.data('swiper', null);
        Utils.deleteProps(swiper);
      }

      swiper.destroyed = true;
      return null;
    }
  }], [{
    key: "extendDefaults",
    value: function extendDefaults(newDefaults) {
      Utils.extend(extendedDefaults, newDefaults);
    }
  }, {
    key: "extendedDefaults",
    get: function get() {
      return extendedDefaults;
    }
  }, {
    key: "defaults",
    get: function get() {
      return defaults;
    }
  }, {
    key: "Class",
    get: function get() {
      return SwiperClass;
    }
  }, {
    key: "$",
    get: function get() {
      return dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"];
    }
  }]);

  return Swiper;
}(SwiperClass);

var Device$1 = {
  name: 'device',
  proto: {
    device: Device
  },
  "static": {
    device: Device
  }
};
var Support$1 = {
  name: 'support',
  proto: {
    support: Support
  },
  "static": {
    support: Support
  }
};
var Browser$1 = {
  name: 'browser',
  proto: {
    browser: Browser
  },
  "static": {
    browser: Browser
  }
};
var Resize = {
  name: 'resize',
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      resize: {
        resizeHandler: function resizeHandler() {
          if (!swiper || swiper.destroyed || !swiper.initialized) return;
          swiper.emit('beforeResize');
          swiper.emit('resize');
        },
        orientationChangeHandler: function orientationChangeHandler() {
          if (!swiper || swiper.destroyed || !swiper.initialized) return;
          swiper.emit('orientationchange');
        }
      }
    });
  },
  on: {
    init: function init() {
      var swiper = this; // Emit resize

      ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].addEventListener('resize', swiper.resize.resizeHandler); // Emit orientationchange

      ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
    },
    destroy: function destroy() {
      var swiper = this;
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].removeEventListener('resize', swiper.resize.resizeHandler);
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
    }
  }
};
var Observer = {
  func: ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].MutationObserver || ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].WebkitMutationObserver,
  attach: function attach(target) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var swiper = this;
    var ObserverFunc = Observer.func;
    var observer = new ObserverFunc(function (mutations) {
      // The observerUpdate event should only be triggered
      // once despite the number of mutations.  Additional
      // triggers are redundant and are very costly
      if (mutations.length === 1) {
        swiper.emit('observerUpdate', mutations[0]);
        return;
      }

      var observerUpdate = function observerUpdate() {
        swiper.emit('observerUpdate', mutations[0]);
      };

      if (ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].requestAnimationFrame) {
        ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].requestAnimationFrame(observerUpdate);
      } else {
        ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
      childList: typeof options.childList === 'undefined' ? true : options.childList,
      characterData: typeof options.characterData === 'undefined' ? true : options.characterData
    });
    swiper.observer.observers.push(observer);
  },
  init: function init() {
    var swiper = this;
    if (!Support.observer || !swiper.params.observer) return;

    if (swiper.params.observeParents) {
      var containerParents = swiper.$el.parents();

      for (var i = 0; i < containerParents.length; i += 1) {
        swiper.observer.attach(containerParents[i]);
      }
    } // Observe container


    swiper.observer.attach(swiper.$el[0], {
      childList: false
    }); // Observe wrapper

    swiper.observer.attach(swiper.$wrapperEl[0], {
      attributes: false
    });
  },
  destroy: function destroy() {
    var swiper = this;
    swiper.observer.observers.forEach(function (observer) {
      observer.disconnect();
    });
    swiper.observer.observers = [];
  }
};
var Observer$1 = {
  name: 'observer',
  params: {
    observer: false,
    observeParents: false
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      observer: {
        init: Observer.init.bind(swiper),
        attach: Observer.attach.bind(swiper),
        destroy: Observer.destroy.bind(swiper),
        observers: []
      }
    });
  },
  on: {
    init: function init() {
      var swiper = this;
      swiper.observer.init();
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.observer.destroy();
    }
  }
};
var Virtual = {
  update: function update(force) {
    var swiper = this;
    var _swiper$params = swiper.params,
        slidesPerView = _swiper$params.slidesPerView,
        slidesPerGroup = _swiper$params.slidesPerGroup,
        centeredSlides = _swiper$params.centeredSlides;
    var _swiper$params$virtua = swiper.params.virtual,
        addSlidesBefore = _swiper$params$virtua.addSlidesBefore,
        addSlidesAfter = _swiper$params$virtua.addSlidesAfter;
    var _swiper$virtual = swiper.virtual,
        previousFrom = _swiper$virtual.from,
        previousTo = _swiper$virtual.to,
        slides = _swiper$virtual.slides,
        previousSlidesGrid = _swiper$virtual.slidesGrid,
        renderSlide = _swiper$virtual.renderSlide,
        previousOffset = _swiper$virtual.offset;
    swiper.updateActiveIndex();
    var activeIndex = swiper.activeIndex || 0;
    var offsetProp;
    if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
    var slidesAfter;
    var slidesBefore;

    if (centeredSlides) {
      slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
      slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
    } else {
      slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesBefore;
      slidesBefore = slidesPerGroup + addSlidesAfter;
    }

    var from = Math.max((activeIndex || 0) - slidesBefore, 0);
    var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
    var offset$$1 = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
    Utils.extend(swiper.virtual, {
      from: from,
      to: to,
      offset: offset$$1,
      slidesGrid: swiper.slidesGrid
    });

    function onRendered() {
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();

      if (swiper.lazy && swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }
    }

    if (previousFrom === from && previousTo === to && !force) {
      if (swiper.slidesGrid !== previousSlidesGrid && offset$$1 !== previousOffset) {
        swiper.slides.css(offsetProp, "".concat(offset$$1, "px"));
      }

      swiper.updateProgress();
      return;
    }

    if (swiper.params.virtual.renderExternal) {
      swiper.params.virtual.renderExternal.call(swiper, {
        offset: offset$$1,
        from: from,
        to: to,
        slides: function getSlides() {
          var slidesToRender = [];

          for (var i = from; i <= to; i += 1) {
            slidesToRender.push(slides[i]);
          }

          return slidesToRender;
        }()
      });
      onRendered();
      return;
    }

    var prependIndexes = [];
    var appendIndexes = [];

    if (force) {
      swiper.$wrapperEl.find(".".concat(swiper.params.slideClass)).remove();
    } else {
      for (var i = previousFrom; i <= previousTo; i += 1) {
        if (i < from || i > to) {
          swiper.$wrapperEl.find(".".concat(swiper.params.slideClass, "[data-swiper-slide-index=\"").concat(i, "\"]")).remove();
        }
      }
    }

    for (var _i9 = 0; _i9 < slides.length; _i9 += 1) {
      if (_i9 >= from && _i9 <= to) {
        if (typeof previousTo === 'undefined' || force) {
          appendIndexes.push(_i9);
        } else {
          if (_i9 > previousTo) appendIndexes.push(_i9);
          if (_i9 < previousFrom) prependIndexes.push(_i9);
        }
      }
    }

    appendIndexes.forEach(function (index$$1) {
      swiper.$wrapperEl.append(renderSlide(slides[index$$1], index$$1));
    });
    prependIndexes.sort(function (a, b) {
      return b - a;
    }).forEach(function (index$$1) {
      swiper.$wrapperEl.prepend(renderSlide(slides[index$$1], index$$1));
    });
    swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, "".concat(offset$$1, "px"));
    onRendered();
  },
  renderSlide: function renderSlide(slide, index$$1) {
    var swiper = this;
    var params = swiper.params.virtual;

    if (params.cache && swiper.virtual.cache[index$$1]) {
      return swiper.virtual.cache[index$$1];
    }

    var $slideEl = params.renderSlide ? Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(params.renderSlide.call(swiper, slide, index$$1)) : Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])("<div class=\"".concat(swiper.params.slideClass, "\" data-swiper-slide-index=\"").concat(index$$1, "\">").concat(slide, "</div>"));
    if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index$$1);
    if (params.cache) swiper.virtual.cache[index$$1] = $slideEl;
    return $slideEl;
  },
  appendSlide: function appendSlide(slide) {
    var swiper = this;
    swiper.virtual.slides.push(slide);
    swiper.virtual.update(true);
  },
  prependSlide: function prependSlide(slide) {
    var swiper = this;
    swiper.virtual.slides.unshift(slide);

    if (swiper.params.virtual.cache) {
      var cache = swiper.virtual.cache;
      var newCache = {};
      Object.keys(cache).forEach(function (cachedIndex) {
        newCache[cachedIndex + 1] = cache[cachedIndex];
      });
      swiper.virtual.cache = newCache;
    }

    swiper.virtual.update(true);
    swiper.slideNext(0);
  }
};
var Virtual$1 = {
  name: 'virtual',
  params: {
    virtual: {
      enabled: false,
      slides: [],
      cache: true,
      renderSlide: null,
      renderExternal: null,
      addSlidesBefore: 0,
      addSlidesAfter: 0
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      virtual: {
        update: Virtual.update.bind(swiper),
        appendSlide: Virtual.appendSlide.bind(swiper),
        prependSlide: Virtual.prependSlide.bind(swiper),
        renderSlide: Virtual.renderSlide.bind(swiper),
        slides: swiper.params.virtual.slides,
        cache: {}
      }
    });
  },
  on: {
    beforeInit: function beforeInit() {
      var swiper = this;
      if (!swiper.params.virtual.enabled) return;
      swiper.classNames.push("".concat(swiper.params.containerModifierClass, "virtual"));
      var overwriteParams = {
        watchSlidesProgress: true
      };
      Utils.extend(swiper.params, overwriteParams);
      Utils.extend(swiper.originalParams, overwriteParams);

      if (!swiper.params.initialSlide) {
        swiper.virtual.update();
      }
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      if (!swiper.params.virtual.enabled) return;
      swiper.virtual.update();
    }
  }
};
var Keyboard = {
  handle: function handle(event) {
    var swiper = this;
    var rtl = swiper.rtlTranslate;
    var e = event;
    if (e.originalEvent) e = e.originalEvent; // jquery fix

    var kc = e.keyCode || e.charCode; // Directions locks

    if (!swiper.allowSlideNext && (swiper.isHorizontal() && kc === 39 || swiper.isVertical() && kc === 40)) {
      return false;
    }

    if (!swiper.allowSlidePrev && (swiper.isHorizontal() && kc === 37 || swiper.isVertical() && kc === 38)) {
      return false;
    }

    if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
      return undefined;
    }

    if (ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement && ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement.nodeName && (ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement.nodeName.toLowerCase() === 'input' || ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement.nodeName.toLowerCase() === 'textarea')) {
      return undefined;
    }

    if (swiper.params.keyboard.onlyInViewport && (kc === 37 || kc === 39 || kc === 38 || kc === 40)) {
      var inView = false; // Check that swiper should be inside of visible area of window

      if (swiper.$el.parents(".".concat(swiper.params.slideClass)).length > 0 && swiper.$el.parents(".".concat(swiper.params.slideActiveClass)).length === 0) {
        return undefined;
      }

      var windowWidth = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].innerWidth;
      var windowHeight = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].innerHeight;
      var swiperOffset = swiper.$el.offset();
      if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
      var swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiper.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiper.height], [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height]];

      for (var i = 0; i < swiperCoord.length; i += 1) {
        var point = swiperCoord[i];

        if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
          inView = true;
        }
      }

      if (!inView) return undefined;
    }

    if (swiper.isHorizontal()) {
      if (kc === 37 || kc === 39) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }

      if (kc === 39 && !rtl || kc === 37 && rtl) swiper.slideNext();
      if (kc === 37 && !rtl || kc === 39 && rtl) swiper.slidePrev();
    } else {
      if (kc === 38 || kc === 40) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }

      if (kc === 40) swiper.slideNext();
      if (kc === 38) swiper.slidePrev();
    }

    swiper.emit('keyPress', kc);
    return undefined;
  },
  enable: function enable() {
    var swiper = this;
    if (swiper.keyboard.enabled) return;
    Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"]).on('keydown', swiper.keyboard.handle);
    swiper.keyboard.enabled = true;
  },
  disable: function disable() {
    var swiper = this;
    if (!swiper.keyboard.enabled) return;
    Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"]).off('keydown', swiper.keyboard.handle);
    swiper.keyboard.enabled = false;
  }
};
var Keyboard$1 = {
  name: 'keyboard',
  params: {
    keyboard: {
      enabled: false,
      onlyInViewport: true
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      keyboard: {
        enabled: false,
        enable: Keyboard.enable.bind(swiper),
        disable: Keyboard.disable.bind(swiper),
        handle: Keyboard.handle.bind(swiper)
      }
    });
  },
  on: {
    init: function init() {
      var swiper = this;

      if (swiper.params.keyboard.enabled) {
        swiper.keyboard.enable();
      }
    },
    destroy: function destroy() {
      var swiper = this;

      if (swiper.keyboard.enabled) {
        swiper.keyboard.disable();
      }
    }
  }
};

function isEventSupported() {
  var eventName = 'onwheel';
  var isSupported = (eventName in ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"]);

  if (!isSupported) {
    var element = ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].createElement('div');
    element.setAttribute(eventName, 'return;');
    isSupported = typeof element[eventName] === 'function';
  }

  if (!isSupported && ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].implementation && ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].implementation.hasFeature // always returns true in newer browsers as per the standard.
  // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
  && ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].implementation.hasFeature('', '') !== true) {
    // This is the only way to test support for the `wheel` event in IE9+.
    isSupported = ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].implementation.hasFeature('Events.wheel', '3.0');
  }

  return isSupported;
}

var Mousewheel = {
  lastScrollTime: Utils.now(),
  event: function getEvent() {
    if (ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator.userAgent.indexOf('firefox') > -1) return 'DOMMouseScroll';
    return isEventSupported() ? 'wheel' : 'mousewheel';
  }(),
  normalize: function normalize(e) {
    // Reasonable defaults
    var PIXEL_STEP = 10;
    var LINE_HEIGHT = 40;
    var PAGE_HEIGHT = 800;
    var sX = 0;
    var sY = 0; // spinX, spinY

    var pX = 0;
    var pY = 0; // pixelX, pixelY
    // Legacy

    if ('detail' in e) {
      sY = e.detail;
    }

    if ('wheelDelta' in e) {
      sY = -e.wheelDelta / 120;
    }

    if ('wheelDeltaY' in e) {
      sY = -e.wheelDeltaY / 120;
    }

    if ('wheelDeltaX' in e) {
      sX = -e.wheelDeltaX / 120;
    } // side scrolling on FF with DOMMouseScroll


    if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
      sX = sY;
      sY = 0;
    }

    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;

    if ('deltaY' in e) {
      pY = e.deltaY;
    }

    if ('deltaX' in e) {
      pX = e.deltaX;
    }

    if ((pX || pY) && e.deltaMode) {
      if (e.deltaMode === 1) {
        // delta in LINE units
        pX *= LINE_HEIGHT;
        pY *= LINE_HEIGHT;
      } else {
        // delta in PAGE units
        pX *= PAGE_HEIGHT;
        pY *= PAGE_HEIGHT;
      }
    } // Fall-back if spin cannot be determined


    if (pX && !sX) {
      sX = pX < 1 ? -1 : 1;
    }

    if (pY && !sY) {
      sY = pY < 1 ? -1 : 1;
    }

    return {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY
    };
  },
  handleMouseEnter: function handleMouseEnter() {
    var swiper = this;
    swiper.mouseEntered = true;
  },
  handleMouseLeave: function handleMouseLeave() {
    var swiper = this;
    swiper.mouseEntered = false;
  },
  handle: function handle(event) {
    var e = event;
    var swiper = this;
    var params = swiper.params.mousewheel;
    if (!swiper.mouseEntered && !params.releaseOnEdges) return true;
    if (e.originalEvent) e = e.originalEvent; // jquery fix

    var delta = 0;
    var rtlFactor = swiper.rtlTranslate ? -1 : 1;
    var data$$1 = Mousewheel.normalize(e);

    if (params.forceToAxis) {
      if (swiper.isHorizontal()) {
        if (Math.abs(data$$1.pixelX) > Math.abs(data$$1.pixelY)) delta = data$$1.pixelX * rtlFactor;else return true;
      } else if (Math.abs(data$$1.pixelY) > Math.abs(data$$1.pixelX)) delta = data$$1.pixelY;else return true;
    } else {
      delta = Math.abs(data$$1.pixelX) > Math.abs(data$$1.pixelY) ? -data$$1.pixelX * rtlFactor : -data$$1.pixelY;
    }

    if (delta === 0) return true;
    if (params.invert) delta = -delta;

    if (!swiper.params.freeMode) {
      if (Utils.now() - swiper.mousewheel.lastScrollTime > 60) {
        if (delta < 0) {
          if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
            swiper.slideNext();
            swiper.emit('scroll', e);
          } else if (params.releaseOnEdges) return true;
        } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
          swiper.slidePrev();
          swiper.emit('scroll', e);
        } else if (params.releaseOnEdges) return true;
      }

      swiper.mousewheel.lastScrollTime = new ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].Date().getTime();
    } else {
      // Freemode or scrollContainer:
      if (swiper.params.loop) {
        swiper.loopFix();
      }

      var position = swiper.getTranslate() + delta * params.sensitivity;
      var wasBeginning = swiper.isBeginning;
      var wasEnd = swiper.isEnd;
      if (position >= swiper.minTranslate()) position = swiper.minTranslate();
      if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
      swiper.setTransition(0);
      swiper.setTranslate(position);
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();

      if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
        swiper.updateSlidesClasses();
      }

      if (swiper.params.freeModeSticky) {
        clearTimeout(swiper.mousewheel.timeout);
        swiper.mousewheel.timeout = Utils.nextTick(function () {
          swiper.slideToClosest();
        }, 300);
      } // Emit event


      swiper.emit('scroll', e); // Stop autoplay

      if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop(); // Return page scroll on edge positions

      if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
    }

    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    return false;
  },
  enable: function enable() {
    var swiper = this;
    if (!Mousewheel.event) return false;
    if (swiper.mousewheel.enabled) return false;
    var target = swiper.$el;

    if (swiper.params.mousewheel.eventsTarged !== 'container') {
      target = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(swiper.params.mousewheel.eventsTarged);
    }

    target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
    target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
    target.on(Mousewheel.event, swiper.mousewheel.handle);
    swiper.mousewheel.enabled = true;
    return true;
  },
  disable: function disable() {
    var swiper = this;
    if (!Mousewheel.event) return false;
    if (!swiper.mousewheel.enabled) return false;
    var target = swiper.$el;

    if (swiper.params.mousewheel.eventsTarged !== 'container') {
      target = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(swiper.params.mousewheel.eventsTarged);
    }

    target.off(Mousewheel.event, swiper.mousewheel.handle);
    swiper.mousewheel.enabled = false;
    return true;
  }
};
var Mousewheel$1 = {
  name: 'mousewheel',
  params: {
    mousewheel: {
      enabled: false,
      releaseOnEdges: false,
      invert: false,
      forceToAxis: false,
      sensitivity: 1,
      eventsTarged: 'container'
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      mousewheel: {
        enabled: false,
        enable: Mousewheel.enable.bind(swiper),
        disable: Mousewheel.disable.bind(swiper),
        handle: Mousewheel.handle.bind(swiper),
        handleMouseEnter: Mousewheel.handleMouseEnter.bind(swiper),
        handleMouseLeave: Mousewheel.handleMouseLeave.bind(swiper),
        lastScrollTime: Utils.now()
      }
    });
  },
  on: {
    init: function init() {
      var swiper = this;
      if (swiper.params.mousewheel.enabled) swiper.mousewheel.enable();
    },
    destroy: function destroy() {
      var swiper = this;
      if (swiper.mousewheel.enabled) swiper.mousewheel.disable();
    }
  }
};
var Navigation = {
  update: function update() {
    // Update Navigation Buttons
    var swiper = this;
    var params = swiper.params.navigation;
    if (swiper.params.loop) return;
    var _swiper$navigation = swiper.navigation,
        $nextEl = _swiper$navigation.$nextEl,
        $prevEl = _swiper$navigation.$prevEl;

    if ($prevEl && $prevEl.length > 0) {
      if (swiper.isBeginning) {
        $prevEl.addClass(params.disabledClass);
      } else {
        $prevEl.removeClass(params.disabledClass);
      }

      $prevEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    }

    if ($nextEl && $nextEl.length > 0) {
      if (swiper.isEnd) {
        $nextEl.addClass(params.disabledClass);
      } else {
        $nextEl.removeClass(params.disabledClass);
      }

      $nextEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    }
  },
  onPrevClick: function onPrevClick(e) {
    var swiper = this;
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop) return;
    swiper.slidePrev();
  },
  onNextClick: function onNextClick(e) {
    var swiper = this;
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop) return;
    swiper.slideNext();
  },
  init: function init() {
    var swiper = this;
    var params = swiper.params.navigation;
    if (!(params.nextEl || params.prevEl)) return;
    var $nextEl;
    var $prevEl;

    if (params.nextEl) {
      $nextEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(params.nextEl);

      if (swiper.params.uniqueNavElements && typeof params.nextEl === 'string' && $nextEl.length > 1 && swiper.$el.find(params.nextEl).length === 1) {
        $nextEl = swiper.$el.find(params.nextEl);
      }
    }

    if (params.prevEl) {
      $prevEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(params.prevEl);

      if (swiper.params.uniqueNavElements && typeof params.prevEl === 'string' && $prevEl.length > 1 && swiper.$el.find(params.prevEl).length === 1) {
        $prevEl = swiper.$el.find(params.prevEl);
      }
    }

    if ($nextEl && $nextEl.length > 0) {
      $nextEl.on('click', swiper.navigation.onNextClick);
    }

    if ($prevEl && $prevEl.length > 0) {
      $prevEl.on('click', swiper.navigation.onPrevClick);
    }

    Utils.extend(swiper.navigation, {
      $nextEl: $nextEl,
      nextEl: $nextEl && $nextEl[0],
      $prevEl: $prevEl,
      prevEl: $prevEl && $prevEl[0]
    });
  },
  destroy: function destroy() {
    var swiper = this;
    var _swiper$navigation2 = swiper.navigation,
        $nextEl = _swiper$navigation2.$nextEl,
        $prevEl = _swiper$navigation2.$prevEl;

    if ($nextEl && $nextEl.length) {
      $nextEl.off('click', swiper.navigation.onNextClick);
      $nextEl.removeClass(swiper.params.navigation.disabledClass);
    }

    if ($prevEl && $prevEl.length) {
      $prevEl.off('click', swiper.navigation.onPrevClick);
      $prevEl.removeClass(swiper.params.navigation.disabledClass);
    }
  }
};
var Navigation$1 = {
  name: 'navigation',
  params: {
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock'
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      navigation: {
        init: Navigation.init.bind(swiper),
        update: Navigation.update.bind(swiper),
        destroy: Navigation.destroy.bind(swiper),
        onNextClick: Navigation.onNextClick.bind(swiper),
        onPrevClick: Navigation.onPrevClick.bind(swiper)
      }
    });
  },
  on: {
    init: function init() {
      var swiper = this;
      swiper.navigation.init();
      swiper.navigation.update();
    },
    toEdge: function toEdge() {
      var swiper = this;
      swiper.navigation.update();
    },
    fromEdge: function fromEdge() {
      var swiper = this;
      swiper.navigation.update();
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.navigation.destroy();
    },
    click: function click(e) {
      var swiper = this;
      var _swiper$navigation3 = swiper.navigation,
          $nextEl = _swiper$navigation3.$nextEl,
          $prevEl = _swiper$navigation3.$prevEl;

      if (swiper.params.navigation.hideOnClick && !Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target).is($prevEl) && !Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target).is($nextEl)) {
        if ($nextEl) $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
        if ($prevEl) $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
      }
    }
  }
};
var Pagination = {
  update: function update() {
    // Render || Update Pagination bullets/items
    var swiper = this;
    var rtl = swiper.rtl;
    var params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    var $el = swiper.pagination.$el; // Current/Total

    var current;
    var total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

    if (swiper.params.loop) {
      current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);

      if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
        current -= slidesLength - swiper.loopedSlides * 2;
      }

      if (current > total - 1) current -= total;
      if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
    } else if (typeof swiper.snapIndex !== 'undefined') {
      current = swiper.snapIndex;
    } else {
      current = swiper.activeIndex || 0;
    } // Types


    if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      var bullets = swiper.pagination.bullets;
      var firstIndex;
      var lastIndex;
      var midIndex;

      if (params.dynamicBullets) {
        swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
        $el.css(swiper.isHorizontal() ? 'width' : 'height', "".concat(swiper.pagination.bulletSize * (params.dynamicMainBullets + 4), "px"));

        if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
          swiper.pagination.dynamicBulletIndex += current - swiper.previousIndex;

          if (swiper.pagination.dynamicBulletIndex > params.dynamicMainBullets - 1) {
            swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (swiper.pagination.dynamicBulletIndex < 0) {
            swiper.pagination.dynamicBulletIndex = 0;
          }
        }

        firstIndex = current - swiper.pagination.dynamicBulletIndex;
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }

      bullets.removeClass("".concat(params.bulletActiveClass, " ").concat(params.bulletActiveClass, "-next ").concat(params.bulletActiveClass, "-next-next ").concat(params.bulletActiveClass, "-prev ").concat(params.bulletActiveClass, "-prev-prev ").concat(params.bulletActiveClass, "-main"));

      if ($el.length > 1) {
        bullets.each(function (index$$1, bullet) {
          var $bullet = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(bullet);
          var bulletIndex = $bullet.index();

          if (bulletIndex === current) {
            $bullet.addClass(params.bulletActiveClass);
          }

          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              $bullet.addClass("".concat(params.bulletActiveClass, "-main"));
            }

            if (bulletIndex === firstIndex) {
              $bullet.prev().addClass("".concat(params.bulletActiveClass, "-prev")).prev().addClass("".concat(params.bulletActiveClass, "-prev-prev"));
            }

            if (bulletIndex === lastIndex) {
              $bullet.next().addClass("".concat(params.bulletActiveClass, "-next")).next().addClass("".concat(params.bulletActiveClass, "-next-next"));
            }
          }
        });
      } else {
        var $bullet = bullets.eq(current);
        $bullet.addClass(params.bulletActiveClass);

        if (params.dynamicBullets) {
          var $firstDisplayedBullet = bullets.eq(firstIndex);
          var $lastDisplayedBullet = bullets.eq(lastIndex);

          for (var i = firstIndex; i <= lastIndex; i += 1) {
            bullets.eq(i).addClass("".concat(params.bulletActiveClass, "-main"));
          }

          $firstDisplayedBullet.prev().addClass("".concat(params.bulletActiveClass, "-prev")).prev().addClass("".concat(params.bulletActiveClass, "-prev-prev"));
          $lastDisplayedBullet.next().addClass("".concat(params.bulletActiveClass, "-next")).next().addClass("".concat(params.bulletActiveClass, "-next-next"));
        }
      }

      if (params.dynamicBullets) {
        var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        var bulletsOffset = (swiper.pagination.bulletSize * dynamicBulletsLength - swiper.pagination.bulletSize) / 2 - midIndex * swiper.pagination.bulletSize;
        var offsetProp = rtl ? 'right' : 'left';
        bullets.css(swiper.isHorizontal() ? offsetProp : 'top', "".concat(bulletsOffset, "px"));
      }
    }

    if (params.type === 'fraction') {
      $el.find(".".concat(params.currentClass)).text(params.formatFractionCurrent(current + 1));
      $el.find(".".concat(params.totalClass)).text(params.formatFractionTotal(total));
    }

    if (params.type === 'progressbar') {
      var progressbarDirection;

      if (params.progressbarOpposite) {
        progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
      } else {
        progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
      }

      var scale = (current + 1) / total;
      var scaleX = 1;
      var scaleY = 1;

      if (progressbarDirection === 'horizontal') {
        scaleX = scale;
      } else {
        scaleY = scale;
      }

      $el.find(".".concat(params.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(".concat(scaleX, ") scaleY(").concat(scaleY, ")")).transition(swiper.params.speed);
    }

    if (params.type === 'custom' && params.renderCustom) {
      $el.html(params.renderCustom(swiper, current + 1, total));
      swiper.emit('paginationRender', swiper, $el[0]);
    } else {
      swiper.emit('paginationUpdate', swiper, $el[0]);
    }

    $el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
  },
  render: function render() {
    // Render Container
    var swiper = this;
    var params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    var $el = swiper.pagination.$el;
    var paginationHTML = '';

    if (params.type === 'bullets') {
      var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

      for (var i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          paginationHTML += "<".concat(params.bulletElement, " class=\"").concat(params.bulletClass, "\"></").concat(params.bulletElement, ">");
        }
      }

      $el.html(paginationHTML);
      swiper.pagination.bullets = $el.find(".".concat(params.bulletClass));
    }

    if (params.type === 'fraction') {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = "<span class=\"".concat(params.currentClass, "\"></span>") + ' / ' + "<span class=\"".concat(params.totalClass, "\"></span>");
      }

      $el.html(paginationHTML);
    }

    if (params.type === 'progressbar') {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = "<span class=\"".concat(params.progressbarFillClass, "\"></span>");
      }

      $el.html(paginationHTML);
    }

    if (params.type !== 'custom') {
      swiper.emit('paginationRender', swiper.pagination.$el[0]);
    }
  },
  init: function init() {
    var swiper = this;
    var params = swiper.params.pagination;
    if (!params.el) return;
    var $el = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(params.el);
    if ($el.length === 0) return;

    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && swiper.$el.find(params.el).length === 1) {
      $el = swiper.$el.find(params.el);
    }

    if (params.type === 'bullets' && params.clickable) {
      $el.addClass(params.clickableClass);
    }

    $el.addClass(params.modifierClass + params.type);

    if (params.type === 'bullets' && params.dynamicBullets) {
      $el.addClass("".concat(params.modifierClass).concat(params.type, "-dynamic"));
      swiper.pagination.dynamicBulletIndex = 0;

      if (params.dynamicMainBullets < 1) {
        params.dynamicMainBullets = 1;
      }
    }

    if (params.type === 'progressbar' && params.progressbarOpposite) {
      $el.addClass(params.progressbarOppositeClass);
    }

    if (params.clickable) {
      $el.on('click', ".".concat(params.bulletClass), function onClick(e) {
        e.preventDefault();
        var index$$1 = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(this).index() * swiper.params.slidesPerGroup;
        if (swiper.params.loop) index$$1 += swiper.loopedSlides;
        swiper.slideTo(index$$1);
      });
    }

    Utils.extend(swiper.pagination, {
      $el: $el,
      el: $el[0]
    });
  },
  destroy: function destroy() {
    var swiper = this;
    var params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    var $el = swiper.pagination.$el;
    $el.removeClass(params.hiddenClass);
    $el.removeClass(params.modifierClass + params.type);
    if (swiper.pagination.bullets) swiper.pagination.bullets.removeClass(params.bulletActiveClass);

    if (params.clickable) {
      $el.off('click', ".".concat(params.bulletClass));
    }
  }
};
var Pagination$1 = {
  name: 'pagination',
  params: {
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: 'bullets',
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: function formatFractionCurrent(number) {
        return number;
      },
      formatFractionTotal: function formatFractionTotal(number) {
        return number;
      },
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
      modifierClass: 'swiper-pagination-',
      // NEW
      currentClass: 'swiper-pagination-current',
      totalClass: 'swiper-pagination-total',
      hiddenClass: 'swiper-pagination-hidden',
      progressbarFillClass: 'swiper-pagination-progressbar-fill',
      progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
      clickableClass: 'swiper-pagination-clickable',
      // NEW
      lockClass: 'swiper-pagination-lock'
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      pagination: {
        init: Pagination.init.bind(swiper),
        render: Pagination.render.bind(swiper),
        update: Pagination.update.bind(swiper),
        destroy: Pagination.destroy.bind(swiper),
        dynamicBulletIndex: 0
      }
    });
  },
  on: {
    init: function init() {
      var swiper = this;
      swiper.pagination.init();
      swiper.pagination.render();
      swiper.pagination.update();
    },
    activeIndexChange: function activeIndexChange() {
      var swiper = this;

      if (swiper.params.loop) {
        swiper.pagination.update();
      } else if (typeof swiper.snapIndex === 'undefined') {
        swiper.pagination.update();
      }
    },
    snapIndexChange: function snapIndexChange() {
      var swiper = this;

      if (!swiper.params.loop) {
        swiper.pagination.update();
      }
    },
    slidesLengthChange: function slidesLengthChange() {
      var swiper = this;

      if (swiper.params.loop) {
        swiper.pagination.render();
        swiper.pagination.update();
      }
    },
    snapGridLengthChange: function snapGridLengthChange() {
      var swiper = this;

      if (!swiper.params.loop) {
        swiper.pagination.render();
        swiper.pagination.update();
      }
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.pagination.destroy();
    },
    click: function click(e) {
      var swiper = this;

      if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && swiper.pagination.$el.length > 0 && !Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target).hasClass(swiper.params.pagination.bulletClass)) {
        swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
      }
    }
  }
};
var Scrollbar = {
  setTranslate: function setTranslate() {
    var swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    var scrollbar = swiper.scrollbar,
        rtl = swiper.rtlTranslate,
        progress = swiper.progress;
    var dragSize = scrollbar.dragSize,
        trackSize = scrollbar.trackSize,
        $dragEl = scrollbar.$dragEl,
        $el = scrollbar.$el;
    var params = swiper.params.scrollbar;
    var newSize = dragSize;
    var newPos = (trackSize - dragSize) * progress;

    if (rtl) {
      newPos = -newPos;

      if (newPos > 0) {
        newSize = dragSize - newPos;
        newPos = 0;
      } else if (-newPos + dragSize > trackSize) {
        newSize = trackSize + newPos;
      }
    } else if (newPos < 0) {
      newSize = dragSize + newPos;
      newPos = 0;
    } else if (newPos + dragSize > trackSize) {
      newSize = trackSize - newPos;
    }

    if (swiper.isHorizontal()) {
      if (Support.transforms3d) {
        $dragEl.transform("translate3d(".concat(newPos, "px, 0, 0)"));
      } else {
        $dragEl.transform("translateX(".concat(newPos, "px)"));
      }

      $dragEl[0].style.width = "".concat(newSize, "px");
    } else {
      if (Support.transforms3d) {
        $dragEl.transform("translate3d(0px, ".concat(newPos, "px, 0)"));
      } else {
        $dragEl.transform("translateY(".concat(newPos, "px)"));
      }

      $dragEl[0].style.height = "".concat(newSize, "px");
    }

    if (params.hide) {
      clearTimeout(swiper.scrollbar.timeout);
      $el[0].style.opacity = 1;
      swiper.scrollbar.timeout = setTimeout(function () {
        $el[0].style.opacity = 0;
        $el.transition(400);
      }, 1000);
    }
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    swiper.scrollbar.$dragEl.transition(duration);
  },
  updateSize: function updateSize() {
    var swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    var scrollbar = swiper.scrollbar;
    var $dragEl = scrollbar.$dragEl,
        $el = scrollbar.$el;
    $dragEl[0].style.width = '';
    $dragEl[0].style.height = '';
    var trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
    var divider = swiper.size / swiper.virtualSize;
    var moveDivider = divider * (trackSize / swiper.size);
    var dragSize;

    if (swiper.params.scrollbar.dragSize === 'auto') {
      dragSize = trackSize * divider;
    } else {
      dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
    }

    if (swiper.isHorizontal()) {
      $dragEl[0].style.width = "".concat(dragSize, "px");
    } else {
      $dragEl[0].style.height = "".concat(dragSize, "px");
    }

    if (divider >= 1) {
      $el[0].style.display = 'none';
    } else {
      $el[0].style.display = '';
    }

    if (swiper.params.scrollbarHide) {
      $el[0].style.opacity = 0;
    }

    Utils.extend(scrollbar, {
      trackSize: trackSize,
      divider: divider,
      moveDivider: moveDivider,
      dragSize: dragSize
    });
    scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
  },
  setDragPosition: function setDragPosition(e) {
    var swiper = this;
    var scrollbar = swiper.scrollbar,
        rtl = swiper.rtlTranslate;
    var $el = scrollbar.$el,
        dragSize = scrollbar.dragSize,
        trackSize = scrollbar.trackSize;
    var pointerPosition;

    if (swiper.isHorizontal()) {
      pointerPosition = e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX || e.clientX;
    } else {
      pointerPosition = e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY || e.clientY;
    }

    var positionRatio;
    positionRatio = (pointerPosition - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - dragSize / 2) / (trackSize - dragSize);
    positionRatio = Math.max(Math.min(positionRatio, 1), 0);

    if (rtl) {
      positionRatio = 1 - positionRatio;
    }

    var position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
    swiper.updateProgress(position);
    swiper.setTranslate(position);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  },
  onDragStart: function onDragStart(e) {
    var swiper = this;
    var params = swiper.params.scrollbar;
    var scrollbar = swiper.scrollbar,
        $wrapperEl = swiper.$wrapperEl;
    var $el = scrollbar.$el,
        $dragEl = scrollbar.$dragEl;
    swiper.scrollbar.isTouched = true;
    e.preventDefault();
    e.stopPropagation();
    $wrapperEl.transition(100);
    $dragEl.transition(100);
    scrollbar.setDragPosition(e);
    clearTimeout(swiper.scrollbar.dragTimeout);
    $el.transition(0);

    if (params.hide) {
      $el.css('opacity', 1);
    }

    swiper.emit('scrollbarDragStart', e);
  },
  onDragMove: function onDragMove(e) {
    var swiper = this;
    var scrollbar = swiper.scrollbar,
        $wrapperEl = swiper.$wrapperEl;
    var $el = scrollbar.$el,
        $dragEl = scrollbar.$dragEl;
    if (!swiper.scrollbar.isTouched) return;
    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    scrollbar.setDragPosition(e);
    $wrapperEl.transition(0);
    $el.transition(0);
    $dragEl.transition(0);
    swiper.emit('scrollbarDragMove', e);
  },
  onDragEnd: function onDragEnd(e) {
    var swiper = this;
    var params = swiper.params.scrollbar;
    var scrollbar = swiper.scrollbar;
    var $el = scrollbar.$el;
    if (!swiper.scrollbar.isTouched) return;
    swiper.scrollbar.isTouched = false;

    if (params.hide) {
      clearTimeout(swiper.scrollbar.dragTimeout);
      swiper.scrollbar.dragTimeout = Utils.nextTick(function () {
        $el.css('opacity', 0);
        $el.transition(400);
      }, 1000);
    }

    swiper.emit('scrollbarDragEnd', e);

    if (params.snapOnRelease) {
      swiper.slideToClosest();
    }
  },
  enableDraggable: function enableDraggable() {
    var swiper = this;
    if (!swiper.params.scrollbar.el) return;
    var scrollbar = swiper.scrollbar,
        touchEventsTouch = swiper.touchEventsTouch,
        touchEventsDesktop = swiper.touchEventsDesktop,
        params = swiper.params;
    var $el = scrollbar.$el;
    var target = $el[0];
    var activeListener = Support.passiveListener && params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    var passiveListener = Support.passiveListener && params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;

    if (!Support.touch) {
      target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
    } else {
      target.addEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
      target.addEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
      target.addEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
    }
  },
  disableDraggable: function disableDraggable() {
    var swiper = this;
    if (!swiper.params.scrollbar.el) return;
    var scrollbar = swiper.scrollbar,
        touchEventsTouch = swiper.touchEventsTouch,
        touchEventsDesktop = swiper.touchEventsDesktop,
        params = swiper.params;
    var $el = scrollbar.$el;
    var target = $el[0];
    var activeListener = Support.passiveListener && params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    var passiveListener = Support.passiveListener && params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;

    if (!Support.touch) {
      target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
    } else {
      target.removeEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
      target.removeEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
      target.removeEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
    }
  },
  init: function init() {
    var swiper = this;
    if (!swiper.params.scrollbar.el) return;
    var scrollbar = swiper.scrollbar,
        $swiperEl = swiper.$el;
    var params = swiper.params.scrollbar;
    var $el = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(params.el);

    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
      $el = $swiperEl.find(params.el);
    }

    var $dragEl = $el.find(".".concat(swiper.params.scrollbar.dragClass));

    if ($dragEl.length === 0) {
      $dragEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])("<div class=\"".concat(swiper.params.scrollbar.dragClass, "\"></div>"));
      $el.append($dragEl);
    }

    Utils.extend(scrollbar, {
      $el: $el,
      el: $el[0],
      $dragEl: $dragEl,
      dragEl: $dragEl[0]
    });

    if (params.draggable) {
      scrollbar.enableDraggable();
    }
  },
  destroy: function destroy() {
    var swiper = this;
    swiper.scrollbar.disableDraggable();
  }
};
var Scrollbar$1 = {
  name: 'scrollbar',
  params: {
    scrollbar: {
      el: null,
      dragSize: 'auto',
      hide: false,
      draggable: false,
      snapOnRelease: true,
      lockClass: 'swiper-scrollbar-lock',
      dragClass: 'swiper-scrollbar-drag'
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      scrollbar: {
        init: Scrollbar.init.bind(swiper),
        destroy: Scrollbar.destroy.bind(swiper),
        updateSize: Scrollbar.updateSize.bind(swiper),
        setTranslate: Scrollbar.setTranslate.bind(swiper),
        setTransition: Scrollbar.setTransition.bind(swiper),
        enableDraggable: Scrollbar.enableDraggable.bind(swiper),
        disableDraggable: Scrollbar.disableDraggable.bind(swiper),
        setDragPosition: Scrollbar.setDragPosition.bind(swiper),
        onDragStart: Scrollbar.onDragStart.bind(swiper),
        onDragMove: Scrollbar.onDragMove.bind(swiper),
        onDragEnd: Scrollbar.onDragEnd.bind(swiper),
        isTouched: false,
        timeout: null,
        dragTimeout: null
      }
    });
  },
  on: {
    init: function init() {
      var swiper = this;
      swiper.scrollbar.init();
      swiper.scrollbar.updateSize();
      swiper.scrollbar.setTranslate();
    },
    update: function update() {
      var swiper = this;
      swiper.scrollbar.updateSize();
    },
    resize: function resize() {
      var swiper = this;
      swiper.scrollbar.updateSize();
    },
    observerUpdate: function observerUpdate() {
      var swiper = this;
      swiper.scrollbar.updateSize();
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      swiper.scrollbar.setTranslate();
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      swiper.scrollbar.setTransition(duration);
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.scrollbar.destroy();
    }
  }
};
var Parallax = {
  setTransform: function setTransform(el, progress) {
    var swiper = this;
    var rtl = swiper.rtl;
    var $el = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(el);
    var rtlFactor = rtl ? -1 : 1;
    var p = $el.attr('data-swiper-parallax') || '0';
    var x = $el.attr('data-swiper-parallax-x');
    var y = $el.attr('data-swiper-parallax-y');
    var scale = $el.attr('data-swiper-parallax-scale');
    var opacity = $el.attr('data-swiper-parallax-opacity');

    if (x || y) {
      x = x || '0';
      y = y || '0';
    } else if (swiper.isHorizontal()) {
      x = p;
      y = '0';
    } else {
      y = p;
      x = '0';
    }

    if (x.indexOf('%') >= 0) {
      x = "".concat(parseInt(x, 10) * progress * rtlFactor, "%");
    } else {
      x = "".concat(x * progress * rtlFactor, "px");
    }

    if (y.indexOf('%') >= 0) {
      y = "".concat(parseInt(y, 10) * progress, "%");
    } else {
      y = "".concat(y * progress, "px");
    }

    if (typeof opacity !== 'undefined' && opacity !== null) {
      var currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
      $el[0].style.opacity = currentOpacity;
    }

    if (typeof scale === 'undefined' || scale === null) {
      $el.transform("translate3d(".concat(x, ", ").concat(y, ", 0px)"));
    } else {
      var currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
      $el.transform("translate3d(".concat(x, ", ").concat(y, ", 0px) scale(").concat(currentScale, ")"));
    }
  },
  setTranslate: function setTranslate() {
    var swiper = this;
    var $el = swiper.$el,
        slides = swiper.slides,
        progress = swiper.progress,
        snapGrid = swiper.snapGrid;
    $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function (index$$1, el) {
      swiper.parallax.setTransform(el, progress);
    });
    slides.each(function (slideIndex, slideEl) {
      var slideProgress = slideEl.progress;

      if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
        slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
      }

      slideProgress = Math.min(Math.max(slideProgress, -1), 1);
      Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function (index$$1, el) {
        swiper.parallax.setTransform(el, slideProgress);
      });
    });
  },
  setTransition: function setTransition() {
    var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
    var swiper = this;
    var $el = swiper.$el;
    $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function (index$$1, parallaxEl) {
      var $parallaxEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(parallaxEl);
      var parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
      if (duration === 0) parallaxDuration = 0;
      $parallaxEl.transition(parallaxDuration);
    });
  }
};
var Parallax$1 = {
  name: 'parallax',
  params: {
    parallax: {
      enabled: false
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      parallax: {
        setTransform: Parallax.setTransform.bind(swiper),
        setTranslate: Parallax.setTranslate.bind(swiper),
        setTransition: Parallax.setTransition.bind(swiper)
      }
    });
  },
  on: {
    beforeInit: function beforeInit() {
      var swiper = this;
      if (!swiper.params.parallax.enabled) return;
      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
    },
    init: function init() {
      var swiper = this;
      if (!swiper.params.parallax) return;
      swiper.parallax.setTranslate();
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      if (!swiper.params.parallax) return;
      swiper.parallax.setTranslate();
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      if (!swiper.params.parallax) return;
      swiper.parallax.setTransition(duration);
    }
  }
};
var Zoom = {
  // Calc Scale From Multi-touches
  getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
    if (e.targetTouches.length < 2) return 1;
    var x1 = e.targetTouches[0].pageX;
    var y1 = e.targetTouches[0].pageY;
    var x2 = e.targetTouches[1].pageX;
    var y2 = e.targetTouches[1].pageY;
    var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distance;
  },
  // Events
  onGestureStart: function onGestureStart(e) {
    var swiper = this;
    var params = swiper.params.zoom;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture;
    zoom.fakeGestureTouched = false;
    zoom.fakeGestureMoved = false;

    if (!Support.gestures) {
      if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
        return;
      }

      zoom.fakeGestureTouched = true;
      gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
    }

    if (!gesture.$slideEl || !gesture.$slideEl.length) {
      gesture.$slideEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target).closest('.swiper-slide');
      if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
      gesture.$imageWrapEl = gesture.$imageEl.parent(".".concat(params.containerClass));
      gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

      if (gesture.$imageWrapEl.length === 0) {
        gesture.$imageEl = undefined;
        return;
      }
    }

    gesture.$imageEl.transition(0);
    swiper.zoom.isScaling = true;
  },
  onGestureChange: function onGestureChange(e) {
    var swiper = this;
    var params = swiper.params.zoom;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture;

    if (!Support.gestures) {
      if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
        return;
      }

      zoom.fakeGestureMoved = true;
      gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;

    if (Support.gestures) {
      swiper.zoom.scale = e.scale * zoom.currentScale;
    } else {
      zoom.scale = gesture.scaleMove / gesture.scaleStart * zoom.currentScale;
    }

    if (zoom.scale > gesture.maxRatio) {
      zoom.scale = gesture.maxRatio - 1 + Math.pow(zoom.scale - gesture.maxRatio + 1, 0.5);
    }

    if (zoom.scale < params.minRatio) {
      zoom.scale = params.minRatio + 1 - Math.pow(params.minRatio - zoom.scale + 1, 0.5);
    }

    gesture.$imageEl.transform("translate3d(0,0,0) scale(".concat(zoom.scale, ")"));
  },
  onGestureEnd: function onGestureEnd(e) {
    var swiper = this;
    var params = swiper.params.zoom;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture;

    if (!Support.gestures) {
      if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
        return;
      }

      if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !Device.android) {
        return;
      }

      zoom.fakeGestureTouched = false;
      zoom.fakeGestureMoved = false;
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
    gesture.$imageEl.transition(swiper.params.speed).transform("translate3d(0,0,0) scale(".concat(zoom.scale, ")"));
    zoom.currentScale = zoom.scale;
    zoom.isScaling = false;
    if (zoom.scale === 1) gesture.$slideEl = undefined;
  },
  onTouchStart: function onTouchStart(e) {
    var swiper = this;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture,
        image = zoom.image;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    if (image.isTouched) return;
    if (Device.android) e.preventDefault();
    image.isTouched = true;
    image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  },
  onTouchMove: function onTouchMove(e) {
    var swiper = this;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture,
        image = zoom.image,
        velocity = zoom.velocity;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    swiper.allowClick = false;
    if (!image.isTouched || !gesture.$slideEl) return;

    if (!image.isMoved) {
      image.width = gesture.$imageEl[0].offsetWidth;
      image.height = gesture.$imageEl[0].offsetHeight;
      image.startX = Utils.getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
      image.startY = Utils.getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
      gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
      gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
      gesture.$imageWrapEl.transition(0);

      if (swiper.rtl) {
        image.startX = -image.startX;
        image.startY = -image.startY;
      }
    } // Define if we need image drag


    var scaledWidth = image.width * zoom.scale;
    var scaledHeight = image.height * zoom.scale;
    if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
    image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

    if (!image.isMoved && !zoom.isScaling) {
      if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
        image.isTouched = false;
        return;
      }

      if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
        image.isTouched = false;
        return;
      }
    }

    e.preventDefault();
    e.stopPropagation();
    image.isMoved = true;
    image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
    image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;

    if (image.currentX < image.minX) {
      image.currentX = image.minX + 1 - Math.pow(image.minX - image.currentX + 1, 0.8);
    }

    if (image.currentX > image.maxX) {
      image.currentX = image.maxX - 1 + Math.pow(image.currentX - image.maxX + 1, 0.8);
    }

    if (image.currentY < image.minY) {
      image.currentY = image.minY + 1 - Math.pow(image.minY - image.currentY + 1, 0.8);
    }

    if (image.currentY > image.maxY) {
      image.currentY = image.maxY - 1 + Math.pow(image.currentY - image.maxY + 1, 0.8);
    } // Velocity


    if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
    if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
    if (!velocity.prevTime) velocity.prevTime = Date.now();
    velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
    velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
    if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
    if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
    velocity.prevPositionX = image.touchesCurrent.x;
    velocity.prevPositionY = image.touchesCurrent.y;
    velocity.prevTime = Date.now();
    gesture.$imageWrapEl.transform("translate3d(".concat(image.currentX, "px, ").concat(image.currentY, "px,0)"));
  },
  onTouchEnd: function onTouchEnd() {
    var swiper = this;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture,
        image = zoom.image,
        velocity = zoom.velocity;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;

    if (!image.isTouched || !image.isMoved) {
      image.isTouched = false;
      image.isMoved = false;
      return;
    }

    image.isTouched = false;
    image.isMoved = false;
    var momentumDurationX = 300;
    var momentumDurationY = 300;
    var momentumDistanceX = velocity.x * momentumDurationX;
    var newPositionX = image.currentX + momentumDistanceX;
    var momentumDistanceY = velocity.y * momentumDurationY;
    var newPositionY = image.currentY + momentumDistanceY; // Fix duration

    if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
    if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
    var momentumDuration = Math.max(momentumDurationX, momentumDurationY);
    image.currentX = newPositionX;
    image.currentY = newPositionY; // Define if we need image drag

    var scaledWidth = image.width * zoom.scale;
    var scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
    image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
    gesture.$imageWrapEl.transition(momentumDuration).transform("translate3d(".concat(image.currentX, "px, ").concat(image.currentY, "px,0)"));
  },
  onTransitionEnd: function onTransitionEnd() {
    var swiper = this;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture;

    if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
      gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
      gesture.$imageWrapEl.transform('translate3d(0,0,0)');
      gesture.$slideEl = undefined;
      gesture.$imageEl = undefined;
      gesture.$imageWrapEl = undefined;
      zoom.scale = 1;
      zoom.currentScale = 1;
    }
  },
  // Toggle Zoom
  toggle: function toggle(e) {
    var swiper = this;
    var zoom = swiper.zoom;

    if (zoom.scale && zoom.scale !== 1) {
      // Zoom Out
      zoom.out();
    } else {
      // Zoom In
      zoom["in"](e);
    }
  },
  "in": function _in(e) {
    var swiper = this;
    var zoom = swiper.zoom;
    var params = swiper.params.zoom;
    var gesture = zoom.gesture,
        image = zoom.image;

    if (!gesture.$slideEl) {
      gesture.$slideEl = swiper.clickedSlide ? Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
      gesture.$imageWrapEl = gesture.$imageEl.parent(".".concat(params.containerClass));
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    gesture.$slideEl.addClass("".concat(params.zoomedSlideClass));
    var touchX;
    var touchY;
    var offsetX;
    var offsetY;
    var diffX;
    var diffY;
    var translateX;
    var translateY;
    var imageWidth;
    var imageHeight;
    var scaledWidth;
    var scaledHeight;
    var translateMinX;
    var translateMinY;
    var translateMaxX;
    var translateMaxY;
    var slideWidth;
    var slideHeight;

    if (typeof image.touchesStart.x === 'undefined' && e) {
      touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
      touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
    } else {
      touchX = image.touchesStart.x;
      touchY = image.touchesStart.y;
    }

    zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
    zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

    if (e) {
      slideWidth = gesture.$slideEl[0].offsetWidth;
      slideHeight = gesture.$slideEl[0].offsetHeight;
      offsetX = gesture.$slideEl.offset().left;
      offsetY = gesture.$slideEl.offset().top;
      diffX = offsetX + slideWidth / 2 - touchX;
      diffY = offsetY + slideHeight / 2 - touchY;
      imageWidth = gesture.$imageEl[0].offsetWidth;
      imageHeight = gesture.$imageEl[0].offsetHeight;
      scaledWidth = imageWidth * zoom.scale;
      scaledHeight = imageHeight * zoom.scale;
      translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
      translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
      translateMaxX = -translateMinX;
      translateMaxY = -translateMinY;
      translateX = diffX * zoom.scale;
      translateY = diffY * zoom.scale;

      if (translateX < translateMinX) {
        translateX = translateMinX;
      }

      if (translateX > translateMaxX) {
        translateX = translateMaxX;
      }

      if (translateY < translateMinY) {
        translateY = translateMinY;
      }

      if (translateY > translateMaxY) {
        translateY = translateMaxY;
      }
    } else {
      translateX = 0;
      translateY = 0;
    }

    gesture.$imageWrapEl.transition(300).transform("translate3d(".concat(translateX, "px, ").concat(translateY, "px,0)"));
    gesture.$imageEl.transition(300).transform("translate3d(0,0,0) scale(".concat(zoom.scale, ")"));
  },
  out: function out() {
    var swiper = this;
    var zoom = swiper.zoom;
    var params = swiper.params.zoom;
    var gesture = zoom.gesture;

    if (!gesture.$slideEl) {
      gesture.$slideEl = swiper.clickedSlide ? Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
      gesture.$imageWrapEl = gesture.$imageEl.parent(".".concat(params.containerClass));
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    zoom.scale = 1;
    zoom.currentScale = 1;
    gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
    gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
    gesture.$slideEl.removeClass("".concat(params.zoomedSlideClass));
    gesture.$slideEl = undefined;
  },
  // Attach/Detach Events
  enable: function enable() {
    var swiper = this;
    var zoom = swiper.zoom;
    if (zoom.enabled) return;
    zoom.enabled = true;
    var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false; // Scale image

    if (Support.gestures) {
      swiper.$wrapperEl.on('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.on('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
      swiper.$wrapperEl.on('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
    } else if (swiper.touchEvents.start === 'touchstart') {
      swiper.$wrapperEl.on(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.on(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
      swiper.$wrapperEl.on(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
    } // Move image


    swiper.$wrapperEl.on(swiper.touchEvents.move, ".".concat(swiper.params.zoom.containerClass), zoom.onTouchMove);
  },
  disable: function disable() {
    var swiper = this;
    var zoom = swiper.zoom;
    if (!zoom.enabled) return;
    swiper.zoom.enabled = false;
    var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false; // Scale image

    if (Support.gestures) {
      swiper.$wrapperEl.off('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.off('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
      swiper.$wrapperEl.off('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
    } else if (swiper.touchEvents.start === 'touchstart') {
      swiper.$wrapperEl.off(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.off(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
      swiper.$wrapperEl.off(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
    } // Move image


    swiper.$wrapperEl.off(swiper.touchEvents.move, ".".concat(swiper.params.zoom.containerClass), zoom.onTouchMove);
  }
};
var Zoom$1 = {
  name: 'zoom',
  params: {
    zoom: {
      enabled: false,
      maxRatio: 3,
      minRatio: 1,
      toggle: true,
      containerClass: 'swiper-zoom-container',
      zoomedSlideClass: 'swiper-slide-zoomed'
    }
  },
  create: function create() {
    var swiper = this;
    var zoom = {
      enabled: false,
      scale: 1,
      currentScale: 1,
      isScaling: false,
      gesture: {
        $slideEl: undefined,
        slideWidth: undefined,
        slideHeight: undefined,
        $imageEl: undefined,
        $imageWrapEl: undefined,
        maxRatio: 3
      },
      image: {
        isTouched: undefined,
        isMoved: undefined,
        currentX: undefined,
        currentY: undefined,
        minX: undefined,
        minY: undefined,
        maxX: undefined,
        maxY: undefined,
        width: undefined,
        height: undefined,
        startX: undefined,
        startY: undefined,
        touchesStart: {},
        touchesCurrent: {}
      },
      velocity: {
        x: undefined,
        y: undefined,
        prevPositionX: undefined,
        prevPositionY: undefined,
        prevTime: undefined
      }
    };
    'onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out'.split(' ').forEach(function (methodName) {
      zoom[methodName] = Zoom[methodName].bind(swiper);
    });
    Utils.extend(swiper, {
      zoom: zoom
    });
  },
  on: {
    init: function init() {
      var swiper = this;

      if (swiper.params.zoom.enabled) {
        swiper.zoom.enable();
      }
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.zoom.disable();
    },
    touchStart: function touchStart(e) {
      var swiper = this;
      if (!swiper.zoom.enabled) return;
      swiper.zoom.onTouchStart(e);
    },
    touchEnd: function touchEnd(e) {
      var swiper = this;
      if (!swiper.zoom.enabled) return;
      swiper.zoom.onTouchEnd(e);
    },
    doubleTap: function doubleTap(e) {
      var swiper = this;

      if (swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
        swiper.zoom.toggle(e);
      }
    },
    transitionEnd: function transitionEnd() {
      var swiper = this;

      if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
        swiper.zoom.onTransitionEnd();
      }
    }
  }
};
var Lazy = {
  loadInSlide: function loadInSlide(index$$1) {
    var loadInDuplicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var swiper = this;
    var params = swiper.params.lazy;
    if (typeof index$$1 === 'undefined') return;
    if (swiper.slides.length === 0) return;
    var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    var $slideEl = isVirtual ? swiper.$wrapperEl.children(".".concat(swiper.params.slideClass, "[data-swiper-slide-index=\"").concat(index$$1, "\"]")) : swiper.slides.eq(index$$1);
    var $images = $slideEl.find(".".concat(params.elementClass, ":not(.").concat(params.loadedClass, "):not(.").concat(params.loadingClass, ")"));

    if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
      $images = $images.add($slideEl[0]);
    }

    if ($images.length === 0) return;
    $images.each(function (imageIndex, imageEl) {
      var $imageEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(imageEl);
      $imageEl.addClass(params.loadingClass);
      var background = $imageEl.attr('data-background');
      var src = $imageEl.attr('data-src');
      var srcset = $imageEl.attr('data-srcset');
      var sizes = $imageEl.attr('data-sizes');
      swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, function () {
        if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) return;

        if (background) {
          $imageEl.css('background-image', "url(\"".concat(background, "\")"));
          $imageEl.removeAttr('data-background');
        } else {
          if (srcset) {
            $imageEl.attr('srcset', srcset);
            $imageEl.removeAttr('data-srcset');
          }

          if (sizes) {
            $imageEl.attr('sizes', sizes);
            $imageEl.removeAttr('data-sizes');
          }

          if (src) {
            $imageEl.attr('src', src);
            $imageEl.removeAttr('data-src');
          }
        }

        $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
        $slideEl.find(".".concat(params.preloaderClass)).remove();

        if (swiper.params.loop && loadInDuplicate) {
          var slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');

          if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
            var originalSlide = swiper.$wrapperEl.children("[data-swiper-slide-index=\"".concat(slideOriginalIndex, "\"]:not(.").concat(swiper.params.slideDuplicateClass, ")"));
            swiper.lazy.loadInSlide(originalSlide.index(), false);
          } else {
            var duplicatedSlide = swiper.$wrapperEl.children(".".concat(swiper.params.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(slideOriginalIndex, "\"]"));
            swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
          }
        }

        swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);
      });
      swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
    });
  },
  load: function load() {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl,
        swiperParams = swiper.params,
        slides = swiper.slides,
        activeIndex = swiper.activeIndex;
    var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
    var params = swiperParams.lazy;
    var slidesPerView = swiperParams.slidesPerView;

    if (slidesPerView === 'auto') {
      slidesPerView = 0;
    }

    function slideExist(index$$1) {
      if (isVirtual) {
        if ($wrapperEl.children(".".concat(swiperParams.slideClass, "[data-swiper-slide-index=\"").concat(index$$1, "\"]")).length) {
          return true;
        }
      } else if (slides[index$$1]) return true;

      return false;
    }

    function slideIndex(slideEl) {
      if (isVirtual) {
        return Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(slideEl).attr('data-swiper-slide-index');
      }

      return Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(slideEl).index();
    }

    if (!swiper.lazy.initialImageLoaded) swiper.lazy.initialImageLoaded = true;

    if (swiper.params.watchSlidesVisibility) {
      $wrapperEl.children(".".concat(swiperParams.slideVisibleClass)).each(function (elIndex, slideEl) {
        var index$$1 = isVirtual ? Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(slideEl).attr('data-swiper-slide-index') : Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(slideEl).index();
        swiper.lazy.loadInSlide(index$$1);
      });
    } else if (slidesPerView > 1) {
      for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
        if (slideExist(i)) swiper.lazy.loadInSlide(i);
      }
    } else {
      swiper.lazy.loadInSlide(activeIndex);
    }

    if (params.loadPrevNext) {
      if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
        var amount = params.loadPrevNextAmount;
        var spv = slidesPerView;
        var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
        var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides

        for (var _i10 = activeIndex + slidesPerView; _i10 < maxIndex; _i10 += 1) {
          if (slideExist(_i10)) swiper.lazy.loadInSlide(_i10);
        } // Prev Slides


        for (var _i11 = minIndex; _i11 < activeIndex; _i11 += 1) {
          if (slideExist(_i11)) swiper.lazy.loadInSlide(_i11);
        }
      } else {
        var nextSlide = $wrapperEl.children(".".concat(swiperParams.slideNextClass));
        if (nextSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(nextSlide));
        var prevSlide = $wrapperEl.children(".".concat(swiperParams.slidePrevClass));
        if (prevSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(prevSlide));
      }
    }
  }
};
var Lazy$1 = {
  name: 'lazy',
  params: {
    lazy: {
      enabled: false,
      loadPrevNext: false,
      loadPrevNextAmount: 1,
      loadOnTransitionStart: false,
      elementClass: 'swiper-lazy',
      loadingClass: 'swiper-lazy-loading',
      loadedClass: 'swiper-lazy-loaded',
      preloaderClass: 'swiper-lazy-preloader'
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      lazy: {
        initialImageLoaded: false,
        load: Lazy.load.bind(swiper),
        loadInSlide: Lazy.loadInSlide.bind(swiper)
      }
    });
  },
  on: {
    beforeInit: function beforeInit() {
      var swiper = this;

      if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
        swiper.params.preloadImages = false;
      }
    },
    init: function init() {
      var swiper = this;

      if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
        swiper.lazy.load();
      }
    },
    scroll: function scroll() {
      var swiper = this;

      if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
        swiper.lazy.load();
      }
    },
    resize: function resize() {
      var swiper = this;

      if (swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }
    },
    scrollbarDragMove: function scrollbarDragMove() {
      var swiper = this;

      if (swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }
    },
    transitionStart: function transitionStart() {
      var swiper = this;

      if (swiper.params.lazy.enabled) {
        if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded) {
          swiper.lazy.load();
        }
      }
    },
    transitionEnd: function transitionEnd() {
      var swiper = this;

      if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
        swiper.lazy.load();
      }
    }
  }
};
/* eslint no-bitwise: ["error", { "allow": [">>"] }] */

var Controller = {
  LinearSpline: function LinearSpline(x, y) {
    var binarySearch = function search() {
      var maxIndex;
      var minIndex;
      var guess;
      return function (array, val) {
        minIndex = -1;
        maxIndex = array.length;

        while (maxIndex - minIndex > 1) {
          guess = maxIndex + minIndex >> 1;

          if (array[guess] <= val) {
            minIndex = guess;
          } else {
            maxIndex = guess;
          }
        }

        return maxIndex;
      };
    }();

    this.x = x;
    this.y = y;
    this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
    // (x1,y1) is the known point before given value,
    // (x3,y3) is the known point after given value.

    var i1;
    var i3;

    this.interpolate = function interpolate(x2) {
      if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):

      i3 = binarySearch(this.x, x2);
      i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
      // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1

      return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
    };

    return this;
  },
  // xxx: for now i will just save one spline function to to
  getInterpolateFunction: function getInterpolateFunction(c) {
    var swiper = this;

    if (!swiper.controller.spline) {
      swiper.controller.spline = swiper.params.loop ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid) : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
    }
  },
  setTranslate: function setTranslate(_setTranslate, byController) {
    var swiper = this;
    var controlled = swiper.controller.control;
    var multiplier;
    var controlledTranslate;

    function setControlledTranslate(c) {
      // this will create an Interpolate function based on the snapGrids
      // x is the Grid of the scrolled scroller and y will be the controlled scroller
      // it makes sense to create this only once and recall it for the interpolation
      // the function does a lot of value caching for performance
      var translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;

      if (swiper.params.controller.by === 'slide') {
        swiper.controller.getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
        // but it did not work out

        controlledTranslate = -swiper.controller.spline.interpolate(-translate);
      }

      if (!controlledTranslate || swiper.params.controller.by === 'container') {
        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
        controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
      }

      if (swiper.params.controller.inverse) {
        controlledTranslate = c.maxTranslate() - controlledTranslate;
      }

      c.updateProgress(controlledTranslate);
      c.setTranslate(controlledTranslate, swiper);
      c.updateActiveIndex();
      c.updateSlidesClasses();
    }

    if (Array.isArray(controlled)) {
      for (var i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTranslate(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTranslate(controlled);
    }
  },
  setTransition: function setTransition(duration, byController) {
    var swiper = this;
    var controlled = swiper.controller.control;
    var i;

    function setControlledTransition(c) {
      c.setTransition(duration, swiper);

      if (duration !== 0) {
        c.transitionStart();

        if (c.params.autoHeight) {
          Utils.nextTick(function () {
            c.updateAutoHeight();
          });
        }

        c.$wrapperEl.transitionEnd(function () {
          if (!controlled) return;

          if (c.params.loop && swiper.params.controller.by === 'slide') {
            c.loopFix();
          }

          c.transitionEnd();
        });
      }
    }

    if (Array.isArray(controlled)) {
      for (i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTransition(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTransition(controlled);
    }
  }
};
var Controller$1 = {
  name: 'controller',
  params: {
    controller: {
      control: undefined,
      inverse: false,
      by: 'slide' // or 'container'

    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      controller: {
        control: swiper.params.controller.control,
        getInterpolateFunction: Controller.getInterpolateFunction.bind(swiper),
        setTranslate: Controller.setTranslate.bind(swiper),
        setTransition: Controller.setTransition.bind(swiper)
      }
    });
  },
  on: {
    update: function update() {
      var swiper = this;
      if (!swiper.controller.control) return;

      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    resize: function resize() {
      var swiper = this;
      if (!swiper.controller.control) return;

      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    observerUpdate: function observerUpdate() {
      var swiper = this;
      if (!swiper.controller.control) return;

      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    setTranslate: function setTranslate(translate, byController) {
      var swiper = this;
      if (!swiper.controller.control) return;
      swiper.controller.setTranslate(translate, byController);
    },
    setTransition: function setTransition(duration, byController) {
      var swiper = this;
      if (!swiper.controller.control) return;
      swiper.controller.setTransition(duration, byController);
    }
  }
};
var a11y = {
  makeElFocusable: function makeElFocusable($el) {
    $el.attr('tabIndex', '0');
    return $el;
  },
  addElRole: function addElRole($el, role) {
    $el.attr('role', role);
    return $el;
  },
  addElLabel: function addElLabel($el, label) {
    $el.attr('aria-label', label);
    return $el;
  },
  disableEl: function disableEl($el) {
    $el.attr('aria-disabled', true);
    return $el;
  },
  enableEl: function enableEl($el) {
    $el.attr('aria-disabled', false);
    return $el;
  },
  onEnterKey: function onEnterKey(e) {
    var swiper = this;
    var params = swiper.params.a11y;
    if (e.keyCode !== 13) return;
    var $targetEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target);

    if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
      if (!(swiper.isEnd && !swiper.params.loop)) {
        swiper.slideNext();
      }

      if (swiper.isEnd) {
        swiper.a11y.notify(params.lastSlideMessage);
      } else {
        swiper.a11y.notify(params.nextSlideMessage);
      }
    }

    if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
      if (!(swiper.isBeginning && !swiper.params.loop)) {
        swiper.slidePrev();
      }

      if (swiper.isBeginning) {
        swiper.a11y.notify(params.firstSlideMessage);
      } else {
        swiper.a11y.notify(params.prevSlideMessage);
      }
    }

    if (swiper.pagination && $targetEl.is(".".concat(swiper.params.pagination.bulletClass))) {
      $targetEl[0].click();
    }
  },
  notify: function notify(message) {
    var swiper = this;
    var notification = swiper.a11y.liveRegion;
    if (notification.length === 0) return;
    notification.html('');
    notification.html(message);
  },
  updateNavigation: function updateNavigation() {
    var swiper = this;
    if (swiper.params.loop) return;
    var _swiper$navigation4 = swiper.navigation,
        $nextEl = _swiper$navigation4.$nextEl,
        $prevEl = _swiper$navigation4.$prevEl;

    if ($prevEl && $prevEl.length > 0) {
      if (swiper.isBeginning) {
        swiper.a11y.disableEl($prevEl);
      } else {
        swiper.a11y.enableEl($prevEl);
      }
    }

    if ($nextEl && $nextEl.length > 0) {
      if (swiper.isEnd) {
        swiper.a11y.disableEl($nextEl);
      } else {
        swiper.a11y.enableEl($nextEl);
      }
    }
  },
  updatePagination: function updatePagination() {
    var swiper = this;
    var params = swiper.params.a11y;

    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.bullets.each(function (bulletIndex, bulletEl) {
        var $bulletEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(bulletEl);
        swiper.a11y.makeElFocusable($bulletEl);
        swiper.a11y.addElRole($bulletEl, 'button');
        swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/{{index}}/, $bulletEl.index() + 1));
      });
    }
  },
  init: function init() {
    var swiper = this;
    swiper.$el.append(swiper.a11y.liveRegion); // Navigation

    var params = swiper.params.a11y;
    var $nextEl;
    var $prevEl;

    if (swiper.navigation && swiper.navigation.$nextEl) {
      $nextEl = swiper.navigation.$nextEl;
    }

    if (swiper.navigation && swiper.navigation.$prevEl) {
      $prevEl = swiper.navigation.$prevEl;
    }

    if ($nextEl) {
      swiper.a11y.makeElFocusable($nextEl);
      swiper.a11y.addElRole($nextEl, 'button');
      swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
      $nextEl.on('keydown', swiper.a11y.onEnterKey);
    }

    if ($prevEl) {
      swiper.a11y.makeElFocusable($prevEl);
      swiper.a11y.addElRole($prevEl, 'button');
      swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
      $prevEl.on('keydown', swiper.a11y.onEnterKey);
    } // Pagination


    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.$el.on('keydown', ".".concat(swiper.params.pagination.bulletClass), swiper.a11y.onEnterKey);
    }
  },
  destroy: function destroy() {
    var swiper = this;
    if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) swiper.a11y.liveRegion.remove();
    var $nextEl;
    var $prevEl;

    if (swiper.navigation && swiper.navigation.$nextEl) {
      $nextEl = swiper.navigation.$nextEl;
    }

    if (swiper.navigation && swiper.navigation.$prevEl) {
      $prevEl = swiper.navigation.$prevEl;
    }

    if ($nextEl) {
      $nextEl.off('keydown', swiper.a11y.onEnterKey);
    }

    if ($prevEl) {
      $prevEl.off('keydown', swiper.a11y.onEnterKey);
    } // Pagination


    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.$el.off('keydown', ".".concat(swiper.params.pagination.bulletClass), swiper.a11y.onEnterKey);
    }
  }
};
var A11y = {
  name: 'a11y',
  params: {
    a11y: {
      enabled: true,
      notificationClass: 'swiper-notification',
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}'
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      a11y: {
        liveRegion: Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])("<span class=\"".concat(swiper.params.a11y.notificationClass, "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>"))
      }
    });
    Object.keys(a11y).forEach(function (methodName) {
      swiper.a11y[methodName] = a11y[methodName].bind(swiper);
    });
  },
  on: {
    init: function init() {
      var swiper = this;
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.init();
      swiper.a11y.updateNavigation();
    },
    toEdge: function toEdge() {
      var swiper = this;
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.updateNavigation();
    },
    fromEdge: function fromEdge() {
      var swiper = this;
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.updateNavigation();
    },
    paginationUpdate: function paginationUpdate() {
      var swiper = this;
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.updatePagination();
    },
    destroy: function destroy() {
      var swiper = this;
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.destroy();
    }
  }
};
var History = {
  init: function init() {
    var swiper = this;
    if (!swiper.params.history) return;

    if (!ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].history || !ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].history.pushState) {
      swiper.params.history.enabled = false;
      swiper.params.hashNavigation.enabled = true;
      return;
    }

    var history = swiper.history;
    history.initialized = true;
    history.paths = History.getPathValues();
    if (!history.paths.key && !history.paths.value) return;
    history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);

    if (!swiper.params.history.replaceState) {
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].addEventListener('popstate', swiper.history.setHistoryPopState);
    }
  },
  destroy: function destroy() {
    var swiper = this;

    if (!swiper.params.history.replaceState) {
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].removeEventListener('popstate', swiper.history.setHistoryPopState);
    }
  },
  setHistoryPopState: function setHistoryPopState() {
    var swiper = this;
    swiper.history.paths = History.getPathValues();
    swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
  },
  getPathValues: function getPathValues() {
    var pathArray = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].location.pathname.slice(1).split('/').filter(function (part) {
      return part !== '';
    });
    var total = pathArray.length;
    var key = pathArray[total - 2];
    var value = pathArray[total - 1];
    return {
      key: key,
      value: value
    };
  },
  setHistory: function setHistory(key, index$$1) {
    var swiper = this;
    if (!swiper.history.initialized || !swiper.params.history.enabled) return;
    var slide = swiper.slides.eq(index$$1);
    var value = History.slugify(slide.attr('data-history'));

    if (!ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].location.pathname.includes(key)) {
      value = "".concat(key, "/").concat(value);
    }

    var currentState = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].history.state;

    if (currentState && currentState.value === value) {
      return;
    }

    if (swiper.params.history.replaceState) {
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].history.replaceState({
        value: value
      }, null, value);
    } else {
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].history.pushState({
        value: value
      }, null, value);
    }
  },
  slugify: function slugify(text$$1) {
    return text$$1.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
  },
  scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
    var swiper = this;

    if (value) {
      for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
        var _slide3 = swiper.slides.eq(i);

        var slideHistory = History.slugify(_slide3.attr('data-history'));

        if (slideHistory === value && !_slide3.hasClass(swiper.params.slideDuplicateClass)) {
          var index$$1 = _slide3.index();

          swiper.slideTo(index$$1, speed, runCallbacks);
        }
      }
    } else {
      swiper.slideTo(0, speed, runCallbacks);
    }
  }
};
var History$1 = {
  name: 'history',
  params: {
    history: {
      enabled: false,
      replaceState: false,
      key: 'slides'
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      history: {
        init: History.init.bind(swiper),
        setHistory: History.setHistory.bind(swiper),
        setHistoryPopState: History.setHistoryPopState.bind(swiper),
        scrollToSlide: History.scrollToSlide.bind(swiper),
        destroy: History.destroy.bind(swiper)
      }
    });
  },
  on: {
    init: function init() {
      var swiper = this;

      if (swiper.params.history.enabled) {
        swiper.history.init();
      }
    },
    destroy: function destroy() {
      var swiper = this;

      if (swiper.params.history.enabled) {
        swiper.history.destroy();
      }
    },
    transitionEnd: function transitionEnd() {
      var swiper = this;

      if (swiper.history.initialized) {
        swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
      }
    }
  }
};
var HashNavigation = {
  onHashCange: function onHashCange() {
    var swiper = this;
    var newHash = ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].location.hash.replace('#', '');
    var activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');

    if (newHash !== activeSlideHash) {
      var newIndex = swiper.$wrapperEl.children(".".concat(swiper.params.slideClass, "[data-hash=\"").concat(newHash, "\"]")).index();
      if (typeof newIndex === 'undefined') return;
      swiper.slideTo(newIndex);
    }
  },
  setHash: function setHash() {
    var swiper = this;
    if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) return;

    if (swiper.params.hashNavigation.replaceState && ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].history && ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].history.replaceState) {
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].history.replaceState(null, null, "#".concat(swiper.slides.eq(swiper.activeIndex).attr('data-hash')) || false);
    } else {
      var _slide4 = swiper.slides.eq(swiper.activeIndex);

      var hash = _slide4.attr('data-hash') || _slide4.attr('data-history');

      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].location.hash = hash || '';
    }
  },
  init: function init() {
    var swiper = this;
    if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
    swiper.hashNavigation.initialized = true;
    var hash = ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].location.hash.replace('#', '');

    if (hash) {
      var speed = 0;

      for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
        var _slide5 = swiper.slides.eq(i);

        var slideHash = _slide5.attr('data-hash') || _slide5.attr('data-history');

        if (slideHash === hash && !_slide5.hasClass(swiper.params.slideDuplicateClass)) {
          var index$$1 = _slide5.index();

          swiper.slideTo(index$$1, speed, swiper.params.runCallbacksOnInit, true);
        }
      }
    }

    if (swiper.params.hashNavigation.watchState) {
      Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"]).on('hashchange', swiper.hashNavigation.onHashCange);
    }
  },
  destroy: function destroy() {
    var swiper = this;

    if (swiper.params.hashNavigation.watchState) {
      Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"]).off('hashchange', swiper.hashNavigation.onHashCange);
    }
  }
};
var HashNavigation$1 = {
  name: 'hash-navigation',
  params: {
    hashNavigation: {
      enabled: false,
      replaceState: false,
      watchState: false
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      hashNavigation: {
        initialized: false,
        init: HashNavigation.init.bind(swiper),
        destroy: HashNavigation.destroy.bind(swiper),
        setHash: HashNavigation.setHash.bind(swiper),
        onHashCange: HashNavigation.onHashCange.bind(swiper)
      }
    });
  },
  on: {
    init: function init() {
      var swiper = this;

      if (swiper.params.hashNavigation.enabled) {
        swiper.hashNavigation.init();
      }
    },
    destroy: function destroy() {
      var swiper = this;

      if (swiper.params.hashNavigation.enabled) {
        swiper.hashNavigation.destroy();
      }
    },
    transitionEnd: function transitionEnd() {
      var swiper = this;

      if (swiper.hashNavigation.initialized) {
        swiper.hashNavigation.setHash();
      }
    }
  }
};
/* eslint no-underscore-dangle: "off" */

var Autoplay = {
  run: function run() {
    var swiper = this;
    var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
    var delay = swiper.params.autoplay.delay;

    if ($activeSlideEl.attr('data-swiper-autoplay')) {
      delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
    }

    swiper.autoplay.timeout = Utils.nextTick(function () {
      if (swiper.params.autoplay.reverseDirection) {
        if (swiper.params.loop) {
          swiper.loopFix();
          swiper.slidePrev(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.isBeginning) {
          swiper.slidePrev(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else {
          swiper.autoplay.stop();
        }
      } else if (swiper.params.loop) {
        swiper.loopFix();
        swiper.slideNext(swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else if (!swiper.isEnd) {
        swiper.slideNext(swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else if (!swiper.params.autoplay.stopOnLastSlide) {
        swiper.slideTo(0, swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else {
        swiper.autoplay.stop();
      }
    }, delay);
  },
  start: function start() {
    var swiper = this;
    if (typeof swiper.autoplay.timeout !== 'undefined') return false;
    if (swiper.autoplay.running) return false;
    swiper.autoplay.running = true;
    swiper.emit('autoplayStart');
    swiper.autoplay.run();
    return true;
  },
  stop: function stop() {
    var swiper = this;
    if (!swiper.autoplay.running) return false;
    if (typeof swiper.autoplay.timeout === 'undefined') return false;

    if (swiper.autoplay.timeout) {
      clearTimeout(swiper.autoplay.timeout);
      swiper.autoplay.timeout = undefined;
    }

    swiper.autoplay.running = false;
    swiper.emit('autoplayStop');
    return true;
  },
  pause: function pause(speed) {
    var swiper = this;
    if (!swiper.autoplay.running) return;
    if (swiper.autoplay.paused) return;
    if (swiper.autoplay.timeout) clearTimeout(swiper.autoplay.timeout);
    swiper.autoplay.paused = true;

    if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
      swiper.autoplay.paused = false;
      swiper.autoplay.run();
    } else {
      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.autoplay.onTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
    }
  }
};
var Autoplay$1 = {
  name: 'autoplay',
  params: {
    autoplay: {
      enabled: false,
      delay: 3000,
      waitForTransition: true,
      disableOnInteraction: true,
      stopOnLastSlide: false,
      reverseDirection: false
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      autoplay: {
        running: false,
        paused: false,
        run: Autoplay.run.bind(swiper),
        start: Autoplay.start.bind(swiper),
        stop: Autoplay.stop.bind(swiper),
        pause: Autoplay.pause.bind(swiper),
        onTransitionEnd: function onTransitionEnd(e) {
          if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.autoplay.onTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
          swiper.autoplay.paused = false;

          if (!swiper.autoplay.running) {
            swiper.autoplay.stop();
          } else {
            swiper.autoplay.run();
          }
        }
      }
    });
  },
  on: {
    init: function init() {
      var swiper = this;

      if (swiper.params.autoplay.enabled) {
        swiper.autoplay.start();
      }
    },
    beforeTransitionStart: function beforeTransitionStart(speed, internal) {
      var swiper = this;

      if (swiper.autoplay.running) {
        if (internal || !swiper.params.autoplay.disableOnInteraction) {
          swiper.autoplay.pause(speed);
        } else {
          swiper.autoplay.stop();
        }
      }
    },
    sliderFirstMove: function sliderFirstMove() {
      var swiper = this;

      if (swiper.autoplay.running) {
        if (swiper.params.autoplay.disableOnInteraction) {
          swiper.autoplay.stop();
        } else {
          swiper.autoplay.pause();
        }
      }
    },
    destroy: function destroy() {
      var swiper = this;

      if (swiper.autoplay.running) {
        swiper.autoplay.stop();
      }
    }
  }
};
var Fade = {
  setTranslate: function setTranslate() {
    var swiper = this;
    var slides = swiper.slides;

    for (var i = 0; i < slides.length; i += 1) {
      var $slideEl = swiper.slides.eq(i);
      var offset$$1 = $slideEl[0].swiperSlideOffset;
      var tx = -offset$$1;
      if (!swiper.params.virtualTranslate) tx -= swiper.translate;
      var ty = 0;

      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
      }

      var slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
      $slideEl.css({
        opacity: slideOpacity
      }).transform("translate3d(".concat(tx, "px, ").concat(ty, "px, 0px)"));
    }
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    var slides = swiper.slides,
        $wrapperEl = swiper.$wrapperEl;
    slides.transition(duration);

    if (swiper.params.virtualTranslate && duration !== 0) {
      var eventTriggered = false;
      slides.transitionEnd(function () {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        eventTriggered = true;
        swiper.animating = false;
        var triggerEvents = ['webkitTransitionEnd', 'transitionend'];

        for (var i = 0; i < triggerEvents.length; i += 1) {
          $wrapperEl.trigger(triggerEvents[i]);
        }
      });
    }
  }
};
var EffectFade = {
  name: 'effect-fade',
  params: {
    fadeEffect: {
      crossFade: false
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      fadeEffect: {
        setTranslate: Fade.setTranslate.bind(swiper),
        setTransition: Fade.setTransition.bind(swiper)
      }
    });
  },
  on: {
    beforeInit: function beforeInit() {
      var swiper = this;
      if (swiper.params.effect !== 'fade') return;
      swiper.classNames.push("".concat(swiper.params.containerModifierClass, "fade"));
      var overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: true
      };
      Utils.extend(swiper.params, overwriteParams);
      Utils.extend(swiper.originalParams, overwriteParams);
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      if (swiper.params.effect !== 'fade') return;
      swiper.fadeEffect.setTranslate();
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      if (swiper.params.effect !== 'fade') return;
      swiper.fadeEffect.setTransition(duration);
    }
  }
};
var Cube = {
  setTranslate: function setTranslate() {
    var swiper = this;
    var $el = swiper.$el,
        $wrapperEl = swiper.$wrapperEl,
        slides = swiper.slides,
        swiperWidth = swiper.width,
        swiperHeight = swiper.height,
        rtl = swiper.rtlTranslate,
        swiperSize = swiper.size;
    var params = swiper.params.cubeEffect;
    var isHorizontal = swiper.isHorizontal();
    var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    var wrapperRotate = 0;
    var $cubeShadowEl;

    if (params.shadow) {
      if (isHorizontal) {
        $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');

        if ($cubeShadowEl.length === 0) {
          $cubeShadowEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])('<div class="swiper-cube-shadow"></div>');
          $wrapperEl.append($cubeShadowEl);
        }

        $cubeShadowEl.css({
          height: "".concat(swiperWidth, "px")
        });
      } else {
        $cubeShadowEl = $el.find('.swiper-cube-shadow');

        if ($cubeShadowEl.length === 0) {
          $cubeShadowEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])('<div class="swiper-cube-shadow"></div>');
          $el.append($cubeShadowEl);
        }
      }
    }

    for (var i = 0; i < slides.length; i += 1) {
      var $slideEl = slides.eq(i);
      var slideIndex = i;

      if (isVirtual) {
        slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
      }

      var slideAngle = slideIndex * 90;
      var round = Math.floor(slideAngle / 360);

      if (rtl) {
        slideAngle = -slideAngle;
        round = Math.floor(-slideAngle / 360);
      }

      var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
      var tx = 0;
      var ty = 0;
      var tz = 0;

      if (slideIndex % 4 === 0) {
        tx = -round * 4 * swiperSize;
        tz = 0;
      } else if ((slideIndex - 1) % 4 === 0) {
        tx = 0;
        tz = -round * 4 * swiperSize;
      } else if ((slideIndex - 2) % 4 === 0) {
        tx = swiperSize + round * 4 * swiperSize;
        tz = swiperSize;
      } else if ((slideIndex - 3) % 4 === 0) {
        tx = -swiperSize;
        tz = 3 * swiperSize + swiperSize * 4 * round;
      }

      if (rtl) {
        tx = -tx;
      }

      if (!isHorizontal) {
        ty = tx;
        tx = 0;
      }

      var transform$$1 = "rotateX(".concat(isHorizontal ? 0 : -slideAngle, "deg) rotateY(").concat(isHorizontal ? slideAngle : 0, "deg) translate3d(").concat(tx, "px, ").concat(ty, "px, ").concat(tz, "px)");

      if (progress <= 1 && progress > -1) {
        wrapperRotate = slideIndex * 90 + progress * 90;
        if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
      }

      $slideEl.transform(transform$$1);

      if (params.slideShadows) {
        // Set shadows
        var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

        if (shadowBefore.length === 0) {
          shadowBefore = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])("<div class=\"swiper-slide-shadow-".concat(isHorizontal ? 'left' : 'top', "\"></div>"));
          $slideEl.append(shadowBefore);
        }

        if (shadowAfter.length === 0) {
          shadowAfter = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])("<div class=\"swiper-slide-shadow-".concat(isHorizontal ? 'right' : 'bottom', "\"></div>"));
          $slideEl.append(shadowAfter);
        }

        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
      }
    }

    $wrapperEl.css({
      '-webkit-transform-origin': "50% 50% -".concat(swiperSize / 2, "px"),
      '-moz-transform-origin': "50% 50% -".concat(swiperSize / 2, "px"),
      '-ms-transform-origin': "50% 50% -".concat(swiperSize / 2, "px"),
      'transform-origin': "50% 50% -".concat(swiperSize / 2, "px")
    });

    if (params.shadow) {
      if (isHorizontal) {
        $cubeShadowEl.transform("translate3d(0px, ".concat(swiperWidth / 2 + params.shadowOffset, "px, ").concat(-swiperWidth / 2, "px) rotateX(90deg) rotateZ(0deg) scale(").concat(params.shadowScale, ")"));
      } else {
        var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
        var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
        var scale1 = params.shadowScale;
        var scale2 = params.shadowScale / multiplier;
        var offset$$1 = params.shadowOffset;
        $cubeShadowEl.transform("scale3d(".concat(scale1, ", 1, ").concat(scale2, ") translate3d(0px, ").concat(swiperHeight / 2 + offset$$1, "px, ").concat(-swiperHeight / 2 / scale2, "px) rotateX(-90deg)"));
      }
    }

    var zFactor = Browser.isSafari || Browser.isUiWebView ? -swiperSize / 2 : 0;
    $wrapperEl.transform("translate3d(0px,0,".concat(zFactor, "px) rotateX(").concat(swiper.isHorizontal() ? 0 : wrapperRotate, "deg) rotateY(").concat(swiper.isHorizontal() ? -wrapperRotate : 0, "deg)"));
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    var $el = swiper.$el,
        slides = swiper.slides;
    slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
      $el.find('.swiper-cube-shadow').transition(duration);
    }
  }
};
var EffectCube = {
  name: 'effect-cube',
  params: {
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      cubeEffect: {
        setTranslate: Cube.setTranslate.bind(swiper),
        setTransition: Cube.setTransition.bind(swiper)
      }
    });
  },
  on: {
    beforeInit: function beforeInit() {
      var swiper = this;
      if (swiper.params.effect !== 'cube') return;
      swiper.classNames.push("".concat(swiper.params.containerModifierClass, "cube"));
      swiper.classNames.push("".concat(swiper.params.containerModifierClass, "3d"));
      var overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        resistanceRatio: 0,
        spaceBetween: 0,
        centeredSlides: false,
        virtualTranslate: true
      };
      Utils.extend(swiper.params, overwriteParams);
      Utils.extend(swiper.originalParams, overwriteParams);
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      if (swiper.params.effect !== 'cube') return;
      swiper.cubeEffect.setTranslate();
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      if (swiper.params.effect !== 'cube') return;
      swiper.cubeEffect.setTransition(duration);
    }
  }
};
var Flip = {
  setTranslate: function setTranslate() {
    var swiper = this;
    var slides = swiper.slides,
        rtl = swiper.rtlTranslate;

    for (var i = 0; i < slides.length; i += 1) {
      var $slideEl = slides.eq(i);
      var progress = $slideEl[0].progress;

      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
      }

      var offset$$1 = $slideEl[0].swiperSlideOffset;
      var rotate = -180 * progress;
      var rotateY = rotate;
      var rotateX = 0;
      var tx = -offset$$1;
      var ty = 0;

      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
        rotateX = -rotateY;
        rotateY = 0;
      } else if (rtl) {
        rotateY = -rotateY;
      }

      $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

      if (swiper.params.flipEffect.slideShadows) {
        // Set shadows
        var shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        var shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

        if (shadowBefore.length === 0) {
          shadowBefore = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])("<div class=\"swiper-slide-shadow-".concat(swiper.isHorizontal() ? 'left' : 'top', "\"></div>"));
          $slideEl.append(shadowBefore);
        }

        if (shadowAfter.length === 0) {
          shadowAfter = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])("<div class=\"swiper-slide-shadow-".concat(swiper.isHorizontal() ? 'right' : 'bottom', "\"></div>"));
          $slideEl.append(shadowAfter);
        }

        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
      }

      $slideEl.transform("translate3d(".concat(tx, "px, ").concat(ty, "px, 0px) rotateX(").concat(rotateX, "deg) rotateY(").concat(rotateY, "deg)"));
    }
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    var slides = swiper.slides,
        activeIndex = swiper.activeIndex,
        $wrapperEl = swiper.$wrapperEl;
    slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

    if (swiper.params.virtualTranslate && duration !== 0) {
      var eventTriggered = false; // eslint-disable-next-line

      slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return; // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;

        eventTriggered = true;
        swiper.animating = false;
        var triggerEvents = ['webkitTransitionEnd', 'transitionend'];

        for (var i = 0; i < triggerEvents.length; i += 1) {
          $wrapperEl.trigger(triggerEvents[i]);
        }
      });
    }
  }
};
var EffectFlip = {
  name: 'effect-flip',
  params: {
    flipEffect: {
      slideShadows: true,
      limitRotation: true
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      flipEffect: {
        setTranslate: Flip.setTranslate.bind(swiper),
        setTransition: Flip.setTransition.bind(swiper)
      }
    });
  },
  on: {
    beforeInit: function beforeInit() {
      var swiper = this;
      if (swiper.params.effect !== 'flip') return;
      swiper.classNames.push("".concat(swiper.params.containerModifierClass, "flip"));
      swiper.classNames.push("".concat(swiper.params.containerModifierClass, "3d"));
      var overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: true
      };
      Utils.extend(swiper.params, overwriteParams);
      Utils.extend(swiper.originalParams, overwriteParams);
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      if (swiper.params.effect !== 'flip') return;
      swiper.flipEffect.setTranslate();
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      if (swiper.params.effect !== 'flip') return;
      swiper.flipEffect.setTransition(duration);
    }
  }
};
var Coverflow = {
  setTranslate: function setTranslate() {
    var swiper = this;
    var swiperWidth = swiper.width,
        swiperHeight = swiper.height,
        slides = swiper.slides,
        $wrapperEl = swiper.$wrapperEl,
        slidesSizesGrid = swiper.slidesSizesGrid;
    var params = swiper.params.coverflowEffect;
    var isHorizontal = swiper.isHorizontal();
    var transform$$1 = swiper.translate;
    var center = isHorizontal ? -transform$$1 + swiperWidth / 2 : -transform$$1 + swiperHeight / 2;
    var rotate = isHorizontal ? params.rotate : -params.rotate;
    var translate = params.depth; // Each slide offset from center

    for (var i = 0, length = slides.length; i < length; i += 1) {
      var $slideEl = slides.eq(i);
      var slideSize = slidesSizesGrid[i];
      var slideOffset = $slideEl[0].swiperSlideOffset;
      var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * params.modifier;
      var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
      var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0

      var translateZ = -translate * Math.abs(offsetMultiplier);
      var translateY = isHorizontal ? 0 : params.stretch * offsetMultiplier;
      var translateX = isHorizontal ? params.stretch * offsetMultiplier : 0; // Fix for ultra small values

      if (Math.abs(translateX) < 0.001) translateX = 0;
      if (Math.abs(translateY) < 0.001) translateY = 0;
      if (Math.abs(translateZ) < 0.001) translateZ = 0;
      if (Math.abs(rotateY) < 0.001) rotateY = 0;
      if (Math.abs(rotateX) < 0.001) rotateX = 0;
      var slideTransform = "translate3d(".concat(translateX, "px,").concat(translateY, "px,").concat(translateZ, "px)  rotateX(").concat(rotateX, "deg) rotateY(").concat(rotateY, "deg)");
      $slideEl.transform(slideTransform);
      $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;

      if (params.slideShadows) {
        // Set shadows
        var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

        if ($shadowBeforeEl.length === 0) {
          $shadowBeforeEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])("<div class=\"swiper-slide-shadow-".concat(isHorizontal ? 'left' : 'top', "\"></div>"));
          $slideEl.append($shadowBeforeEl);
        }

        if ($shadowAfterEl.length === 0) {
          $shadowAfterEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])("<div class=\"swiper-slide-shadow-".concat(isHorizontal ? 'right' : 'bottom', "\"></div>"));
          $slideEl.append($shadowAfterEl);
        }

        if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
        if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
      }
    } // Set correct perspective for IE10


    if (Support.pointerEvents || Support.prefixedPointerEvents) {
      var ws = $wrapperEl[0].style;
      ws.perspectiveOrigin = "".concat(center, "px 50%");
    }
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    swiper.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
  }
};
var EffectCoverflow = {
  name: 'effect-coverflow',
  params: {
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      coverflowEffect: {
        setTranslate: Coverflow.setTranslate.bind(swiper),
        setTransition: Coverflow.setTransition.bind(swiper)
      }
    });
  },
  on: {
    beforeInit: function beforeInit() {
      var swiper = this;
      if (swiper.params.effect !== 'coverflow') return;
      swiper.classNames.push("".concat(swiper.params.containerModifierClass, "coverflow"));
      swiper.classNames.push("".concat(swiper.params.containerModifierClass, "3d"));
      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      if (swiper.params.effect !== 'coverflow') return;
      swiper.coverflowEffect.setTranslate();
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      if (swiper.params.effect !== 'coverflow') return;
      swiper.coverflowEffect.setTransition(duration);
    }
  }
};
var Thumbs = {
  init: function init() {
    var swiper = this;
    var thumbsParams = swiper.params.thumbs;
    var SwiperClass = swiper.constructor;

    if (thumbsParams.swiper instanceof SwiperClass) {
      swiper.thumbs.swiper = thumbsParams.swiper;
      Utils.extend(swiper.thumbs.swiper.originalParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      Utils.extend(swiper.thumbs.swiper.params, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
    } else if (Utils.isObject(thumbsParams.swiper)) {
      swiper.thumbs.swiper = new SwiperClass(Utils.extend({}, thumbsParams.swiper, {
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        slideToClickedSlide: false
      }));
      swiper.thumbs.swiperCreated = true;
    }

    swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
    swiper.thumbs.swiper.on('tap', swiper.thumbs.onThumbClick);
  },
  onThumbClick: function onThumbClick() {
    var swiper = this;
    var thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper) return;
    var clickedIndex = thumbsSwiper.clickedIndex;
    var clickedSlide = thumbsSwiper.clickedSlide;
    if (clickedSlide && Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
    if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
    var slideToIndex;

    if (thumbsSwiper.params.loop) {
      slideToIndex = parseInt(Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
    } else {
      slideToIndex = clickedIndex;
    }

    if (swiper.params.loop) {
      var currentIndex = swiper.activeIndex;

      if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
        swiper.loopFix(); // eslint-disable-next-line

        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
        currentIndex = swiper.activeIndex;
      }

      var prevIndex = swiper.slides.eq(currentIndex).prevAll("[data-swiper-slide-index=\"".concat(slideToIndex, "\"]")).eq(0).index();
      var nextIndex = swiper.slides.eq(currentIndex).nextAll("[data-swiper-slide-index=\"".concat(slideToIndex, "\"]")).eq(0).index();
      if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;else slideToIndex = prevIndex;
    }

    swiper.slideTo(slideToIndex);
  },
  update: function update(initial) {
    var swiper = this;
    var thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper) return;
    var slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;

    if (swiper.realIndex !== thumbsSwiper.realIndex) {
      var currentThumbsIndex = thumbsSwiper.activeIndex;
      var newThumbsIndex;

      if (thumbsSwiper.params.loop) {
        if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
          thumbsSwiper.loopFix(); // eslint-disable-next-line

          thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
          currentThumbsIndex = thumbsSwiper.activeIndex;
        } // Find actual thumbs index to slide to


        var prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll("[data-swiper-slide-index=\"".concat(swiper.realIndex, "\"]")).eq(0).index();
        var nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll("[data-swiper-slide-index=\"".concat(swiper.realIndex, "\"]")).eq(0).index();
        if (typeof prevThumbsIndex === 'undefined') newThumbsIndex = nextThumbsIndex;else if (typeof nextThumbsIndex === 'undefined') newThumbsIndex = prevThumbsIndex;else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) newThumbsIndex = currentThumbsIndex;else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) newThumbsIndex = nextThumbsIndex;else newThumbsIndex = prevThumbsIndex;
      } else {
        newThumbsIndex = swiper.realIndex;
      }

      if (thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
        if (thumbsSwiper.params.centeredSlides) {
          if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
          } else {
            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
          }
        } else if (newThumbsIndex > currentThumbsIndex) {
          newThumbsIndex = newThumbsIndex - slidesPerView + 1;
        }

        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
      }
    } // Activate thumbs


    var thumbsToActivate = 1;
    var thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
      thumbsToActivate = swiper.params.slidesPerView;
    }

    thumbsSwiper.slides.removeClass(thumbActiveClass);

    if (thumbsSwiper.params.loop) {
      for (var i = 0; i < thumbsToActivate; i += 1) {
        thumbsSwiper.$wrapperEl.children("[data-swiper-slide-index=\"".concat(swiper.realIndex + i, "\"]")).addClass(thumbActiveClass);
      }
    } else {
      for (var _i12 = 0; _i12 < thumbsToActivate; _i12 += 1) {
        thumbsSwiper.slides.eq(swiper.realIndex + _i12).addClass(thumbActiveClass);
      }
    }
  }
};
var Thumbs$1 = {
  name: 'thumbs',
  params: {
    thumbs: {
      swiper: null,
      slideThumbActiveClass: 'swiper-slide-thumb-active',
      thumbsContainerClass: 'swiper-container-thumbs'
    }
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      thumbs: {
        swiper: null,
        init: Thumbs.init.bind(swiper),
        update: Thumbs.update.bind(swiper),
        onThumbClick: Thumbs.onThumbClick.bind(swiper)
      }
    });
  },
  on: {
    beforeInit: function beforeInit() {
      var swiper = this;
      var thumbs = swiper.params.thumbs;
      if (!thumbs || !thumbs.swiper) return;
      swiper.thumbs.init();
      swiper.thumbs.update(true);
    },
    slideChange: function slideChange() {
      var swiper = this;
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    update: function update() {
      var swiper = this;
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    resize: function resize() {
      var swiper = this;
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    observerUpdate: function observerUpdate() {
      var swiper = this;
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) return;
      thumbsSwiper.setTransition(duration);
    },
    beforeDestroy: function beforeDestroy() {
      var swiper = this;
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) return;

      if (swiper.thumbs.swiperCreated && thumbsSwiper) {
        thumbsSwiper.destroy();
      }
    }
  }
}; // Swiper Class

var components = [Device$1, Support$1, Browser$1, Resize, Observer$1, Virtual$1, Keyboard$1, Mousewheel$1, Navigation$1, Pagination$1, Scrollbar$1, Parallax$1, Zoom$1, Lazy$1, Controller$1, A11y, History$1, HashNavigation$1, Autoplay$1, EffectFade, EffectCube, EffectFlip, EffectCoverflow, Thumbs$1];

if (typeof Swiper.use === 'undefined') {
  Swiper.use = Swiper.Class.use;
  Swiper.installModule = Swiper.Class.installModule;
}

Swiper.use(components);
/* harmony default export */ __webpack_exports__["default"] = (Swiper);

/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/weui/dist/style/weui.css":
/*!***********************************************!*\
  !*** ./node_modules/weui/dist/style/weui.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../css-loader/dist/cjs.js!./weui.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/weui/dist/style/weui.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "@tarojs/taro-h5":
/*!**********************************!*\
  !*** external "@tarojs/taro-h5" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__tarojs_taro_h5__;

/***/ })

/******/ })});;
//# sourceMappingURL=taro-components.js.map