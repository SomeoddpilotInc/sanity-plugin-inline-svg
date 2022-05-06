"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgUploadPreview = _interopRequireDefault(require("./SvgUploadPreview"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Svg Upload Inline Preview',
  name: 'svgUploadPreview',
  type: 'string',
  inputComponent: _SvgUploadPreview.default
};
exports.default = _default;