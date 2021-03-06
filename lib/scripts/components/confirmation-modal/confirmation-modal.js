"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfirmationModal = void 0;

var _index = require("../modal/index");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ConfirmationModal = /*#__PURE__*/function (_Modal) {
  _inherits(ConfirmationModal, _Modal);

  var _super = _createSuper(ConfirmationModal);

  function ConfirmationModal(options) {
    var _this;

    _classCallCheck(this, ConfirmationModal);

    _this = _super.call(this, options);

    _this.bindEvents();

    return _this;
  }

  _createClass(ConfirmationModal, [{
    key: "bindEvents",
    value: function bindEvents() {
      var _this2 = this;

      var actionsMap = {
        ok: function ok() {
          _this2.resolveModal();
        }
      };
      document.addEventListener('click', function (_ref) {
        var target = _ref.target;

        if (target.closest("[data-modal='".concat(_this2.id, "']"))) {
          var _actionsMap$target$da;

          (_actionsMap$target$da = actionsMap[target.dataset.action]) === null || _actionsMap$target$da === void 0 ? void 0 : _actionsMap$target$da.call(actionsMap);
        }
      });
    }
  }, {
    key: "getHTML",
    value: function getHTML() {
      return "\n      <div data-modal=".concat(this.id, " class='modal'>\n        <div class='modal-overlay'></div>\n\n        <div class='modal-content'>\n          <div class='modal-content__header'>\n            <h2>").concat(this.payload.title || 'Confirm?', "</h2>\n            <span data-modal-close class='close'>&times;</span>\n          </div>\n          <form class='modal-form'>\n            <input\n              class='modal-form__input'\n              name='name'\n              placeholder='\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0438\u043C\u044F \u0441\u043F\u0438\u0441\u043A\u0430...'\n            />\n          </form>\n          <div class='modal-content__footer'>\n            <button data-action='ok' class='button' title=''>\n            ok\n            </button>\n            <button data-modal-close class='button' title=''>\n              cancel\n            </button>\n          </div>\n        </div> \n      </div> \n    ");
    }
  }]);

  return ConfirmationModal;
}(_index.Modal);

exports.ConfirmationModal = ConfirmationModal;