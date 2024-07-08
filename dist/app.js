"use strict";

var _add = _interopRequireDefault(require("./add.module"));
var _muliply = _interopRequireDefault(require("./muliply.module"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var c = (0, _add["default"])(2, 3);
var d = (0, _muliply["default"])(4, 5);
var e = c + d;
console.log(e);