"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalsProvider = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ModalsProvider = /*#__PURE__*/function () {
  function ModalsProvider() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$rootEl = _ref.rootEl,
        rootEl = _ref$rootEl === void 0 ? document.body : _ref$rootEl;

    _classCallCheck(this, ModalsProvider);

    this.rootEl = rootEl;
    this.openedModals = [];
  }

  _createClass(ModalsProvider, [{
    key: "deleteModal",
    value: function deleteModal(modalID) {
      var _this$rootEl$querySel;

      (_this$rootEl$querySel = this.rootEl.querySelector("[data-modal='".concat(modalID, "']"))) === null || _this$rootEl$querySel === void 0 ? void 0 : _this$rootEl$querySel.remove();
    }
  }, {
    key: "openModal",
    value: function openModal(Modal) {
      var _this = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var modal = new Modal(_objectSpread({
        onExited: function onExited(modalID) {
          var _options$onExited;

          _this.deleteModal(modalID);

          (_options$onExited = options.onExited) === null || _options$onExited === void 0 ? void 0 : _options$onExited.call(options, modalID);
        }
      }, options));
      this.rootEl.insertAdjacentHTML('beforeend', modal.getHTML());
      modal.openModal();
      return modal;
    }
  }]);

  return ModalsProvider;
}();

exports.ModalsProvider = ModalsProvider;