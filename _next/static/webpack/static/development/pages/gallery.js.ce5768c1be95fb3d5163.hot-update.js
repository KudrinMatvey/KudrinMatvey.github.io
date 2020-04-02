webpackHotUpdate("static\\development\\pages\\gallery.js",{

/***/ "./components/Grid.js":
/*!****************************!*\
  !*** ./components/Grid.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Grid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "F:\\cod\\hello-NextJS\\components\\Grid.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

 // import 'bootstrap/dist/css/bootstrap.min.css';

var item = {};
var wrapper = {
  display: 'grid',
  paddingTop: '2vw',
  gridTemplateRows: '1fr 1fr 1fr',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gridGap: '2vw',
  rowGap: '2vw'
};
var itemFunction = {
  width: '100%',
  height: '100%',
  objectFit: 'cover'
};
var item_wrapper = {
  margin: '0 auto',
  height: '320px',
  width: '320px'
};
function Grid(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      show = _useState[0],
      setShow = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      item = _useState2[0],
      setItem = _useState2[1];

  var handleClose = function handleClose() {
    setShow(false);
    setItem(null);
  };

  var handleShow = function handleShow(item) {
    return function () {// setItem(item);
      // console.log(item);
      // setShow(true);
    };
  };

  var items = props && props.data ? props.data.map(function (n) {
    return __jsx("figure", {
      style: item_wrapper,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("img", {
      src: n.pictureURL,
      onClick: handleShow(n),
      style: itemFunction,
      key: n.key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }));
  }) : '';
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    style: wrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, items));
}

/***/ })

})
//# sourceMappingURL=gallery.js.ce5768c1be95fb3d5163.hot-update.js.map