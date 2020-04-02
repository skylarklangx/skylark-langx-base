/**
 * skylark-langx-types - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx-ns"],function(n){var t,r=Array.isArray,o={}.toString,e=(t={},"Boolean Number String Function Array Date RegExp Object Error Symbol".split(" ").forEach(function(n){t["[object "+n+"]"]=n.toLowerCase()}),function(n){return null==n?String(n):t[o.call(n)]||"object"}),i=r||function(n){return object&&object.constructor===Array};function u(n){var t;for(t in n)if(null!==n[t])return!1;return!0}function c(n){return"function"==e(n)}function f(n){return n&&n.nodeType}function l(n){return"number"==typeof n}function s(n){var t=typeof n;return"function"===t||"object"===t&&!!n}function a(n){return"string"==typeof n}function y(n){return n&&n==n.window}return n.attach("langx.types",{isArray:i,isArrayLike:function(n){return!a(n)&&!f(n)&&"number"==typeof n.length&&!c(n)},isBoolean:function(n){return!0===n||!1===n||"[object Boolean]"===o.call(n)},isDefined:function(n){return void 0!==n},isDocument:function(n){return null!=n&&n.nodeType==n.DOCUMENT_NODE},isElement:function(n){return!(!n||1!==n.nodeType)},isEmpty:u,isEmptyObject:u,isFunction:c,isHtmlNode:f,isNull:function(n){return null===n},isNumber:l,isNumeric:l,isObject:s,isPlainObject:function(n){return s(n)&&!y(n)&&Object.getPrototypeOf(n)==Object.prototype},isString:a,isSameOrigin:function(n){if(n){var t=location.protocol+"//"+location.hostname;return location.port&&(t+=":"+location.port),n.startsWith(t)}},isSymbol:function(n){return"symbol"==typeof n||isObjectLike(n)&&objectToString.call(n)==symbolTag},isUndefined:function(n){return void 0===n},isWindow:y,type:e})});
//# sourceMappingURL=sourcemaps/types.js.map
