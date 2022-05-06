"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactSanitizedHtml = _interopRequireDefault(require("react-sanitized-html"));

var data = _interopRequireWildcard(require("./allowedData"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SanitizedSVG = (_ref) => {
  let html = _ref.html;
  return /*#__PURE__*/_react.default.createElement(_reactSanitizedHtml.default, {
    allowedTags: data.AllowedTags,
    allowedSchemes: ['http', 'https', 'data'],
    allowedAttributes: {
      '*': ['style', 'class'],
      td: ['width'],
      rect: data.AllowedSvgAttrs,
      img: ['src', 'srcset', 'alt'],
      mask: ['id', 'fill'],
      svg: data.AllowedSvgAttrs,
      filter: data.AllowedSvgFilters,
      line: data.AllowedSvgAttrs,
      g: data.AllowedSvgAttrs,
      path: data.AllowedPathAttrs,
      clipPath: ['id'],
      use: ['transform', 'xlink:href']
    },
    parser: {
      lowerCaseAttrributeNames: true
    },
    nonTextTags: ['desc', 'title', 'a', 'this'],
    html: html
  });
};

var _default = SanitizedSVG;
exports.default = _default;