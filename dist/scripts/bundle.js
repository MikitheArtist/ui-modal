(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _modalProvider = require("./components/modal-provider");

var _confirmationModal = require("./components/confirmation-modal");

var modalsProvider = new _modalProvider.ModalsProvider({
  rootEl: document.getElementById('modalsContainer')
});

var openModal = function openModal() {
  modalsProvider.openModal(_confirmationModal.ConfirmationModal, {
    payload: {
      title: 'Напишите название списка'
    },
    onModalResolved: function onModalResolved() {
      console.log('resolved');
    },
    onModalRejected: function onModalRejected() {
      console.log('rejected');
    }
  });
};

openModal();
document.querySelector('.button').addEventListener('click', function () {
  openModal();
});

},{"./components/confirmation-modal":2,"./components/modal-provider":3}],2:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfirmationModal = void 0;

var _modal = require("./modal");

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
        cancel: function cancel() {
          _this2.rejectModal();
        },
        ok: function ok() {
          _this2.resolveModal();
        }
      };
      document.addEventListener('click', function (_ref) {
        var target = _ref.target;

        if (target.closest("[data-modal=\"".concat(_this2.id, "\"]"))) {
          var _actionsMap$target$da;

          (_actionsMap$target$da = actionsMap[target.dataset.action]) === null || _actionsMap$target$da === void 0 ? void 0 : _actionsMap$target$da.call(actionsMap);
        }
      });
    }
  }, {
    key: "getHTML",
    value: function getHTML() {
      return "\n      <div data-modal=".concat(this.id, " class=\"modal-overlay\">\n        <div class=\"modal-content\">\n          <div class=\"modal-content__header\">\n            <h2>").concat(this.payload.title || 'Confirm?', "</h2>\n            <span data-action=\"cancel\" class=\"close\">&times;</span>\n          </div>\n          <form class=\"modal-form\">\n            <input\n              class=\"modal-form__input\"\n              name=\"name\"\n              placeholder=\"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0438\u043C\u044F \u0441\u043F\u0438\u0441\u043A\u0430...\"\n            />\n          </form>\n          <div class=\"modal-content__footer\">\n            <button data-action=\"ok\" class=\"button\" title=\"\">\n            ok\n            </button>\n            <button data-action=\"cancel\" class=\"button\" title=\"\">\n              cancel\n            </button>\n          </div>\n        </div> \n      </div> \n    ");
    }
  }]);

  return ConfirmationModal;
}(_modal.Modal);

exports.ConfirmationModal = ConfirmationModal;

},{"./modal":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalsProvider = void 0;

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

      (_this$rootEl$querySel = this.rootEl.querySelector("[data-modal=\"".concat(modalID, "\"]"))) === null || _this$rootEl$querySel === void 0 ? void 0 : _this$rootEl$querySel.remove();
    }
  }, {
    key: "openModal",
    value: function openModal(Modal, options) {
      var modal = new Modal({
        onExited: this.deleteModal.bind(this),
        options: options
      });
      this.rootEl.insertAdjacentHTML('beforeend', modal.getHTML());
      modal.openModal();
      return modal;
    }
  }]);

  return ModalsProvider;
}();

exports.ModalsProvider = ModalsProvider;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Modal = /*#__PURE__*/function () {
  function Modal(_ref) {
    var _ref$onExited = _ref.onExited,
        onExited = _ref$onExited === void 0 ? function () {} : _ref$onExited,
        _ref$openClassName = _ref.openClassName,
        openClassName = _ref$openClassName === void 0 ? 'modal_open' : _ref$openClassName,
        _ref$closeClassName = _ref.closeClassName,
        closeClassName = _ref$closeClassName === void 0 ? 'modal_close' : _ref$closeClassName,
        _ref$options = _ref.options;
    _ref$options = _ref$options === void 0 ? {} : _ref$options;
    var _ref$options$payload = _ref$options.payload,
        payload = _ref$options$payload === void 0 ? {} : _ref$options$payload,
        _ref$options$onModalR = _ref$options.onModalResolved,
        onModalResolved = _ref$options$onModalR === void 0 ? function () {} : _ref$options$onModalR,
        _ref$options$onModalR2 = _ref$options.onModalRejected,
        onModalRejected = _ref$options$onModalR2 === void 0 ? function () {} : _ref$options$onModalR2;

    _classCallCheck(this, Modal);

    this.id = ++Modal.count;
    this.openClassName = openClassName;
    this.closeClassName = closeClassName;
    this.payload = payload;
    this.onModalResolved = onModalResolved;
    this.onModalRejected = onModalRejected;
    this.onExited = onExited;
  }

  _createClass(Modal, [{
    key: "getModalEl",
    value: function getModalEl() {
      return document.querySelector("[data-modal=\"".concat(this.id, "\"]"));
    }
  }, {
    key: "openModal",
    value: function openModal() {
      this.getModalEl().classList.add(this.openClassName);
      this.getModalEl().classList.remove(this.closeClassName);
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      var _this = this;

      this.getModalEl().classList.remove(this.openClassName);
      this.getModalEl().classList.add(this.closeClassName);
      this.getModalEl().addEventListener('animationend', function () {
        _this.onExited(_this.id);
      });
    }
  }, {
    key: "resolveModal",
    value: function resolveModal(payload) {
      this.onModalResolved(payload);
      this.closeModal();
    }
  }, {
    key: "rejectModal",
    value: function rejectModal(reason) {
      this.onModalRejected(reason);
      this.closeModal();
    }
  }]);

  return Modal;
}();

exports.Modal = Modal;

_defineProperty(Modal, "count", 0);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIiwic3JjL2NvbXBvbmVudHMvY29uZmlybWF0aW9uLW1vZGFsLmpzIiwic3JjL2NvbXBvbmVudHMvbW9kYWwtcHJvdmlkZXIuanMiLCJzcmMvY29tcG9uZW50cy9tb2RhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7O0FBQ0E7O0FBRUEsSUFBTSxjQUFjLEdBQUcsSUFBSSw2QkFBSixDQUFtQjtBQUN4QyxFQUFBLE1BQU0sRUFBRSxRQUFRLENBQUMsY0FBVCxDQUF3QixpQkFBeEI7QUFEZ0MsQ0FBbkIsQ0FBdkI7O0FBSUEsSUFBTSxTQUFTLEdBQUcsU0FBWixTQUFZLEdBQU07QUFDdEIsRUFBQSxjQUFjLENBQUMsU0FBZixDQUF5QixvQ0FBekIsRUFBNEM7QUFDMUMsSUFBQSxPQUFPLEVBQUU7QUFDUCxNQUFBLEtBQUssRUFBRTtBQURBLEtBRGlDO0FBSzFDLElBQUEsZUFBZSxFQUFFLDJCQUFNO0FBQ3JCLE1BQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxVQUFaO0FBQ0QsS0FQeUM7QUFTMUMsSUFBQSxlQUFlLEVBQUUsMkJBQU07QUFDckIsTUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLFVBQVo7QUFDRDtBQVh5QyxHQUE1QztBQWFELENBZEQ7O0FBZ0JBLFNBQVM7QUFFVCxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixFQUFrQyxnQkFBbEMsQ0FBbUQsT0FBbkQsRUFBNEQsWUFBTTtBQUNoRSxFQUFBLFNBQVM7QUFDVixDQUZEOzs7Ozs7Ozs7Ozs7QUN6QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFYSxpQjs7Ozs7QUFDWCw2QkFBWSxPQUFaLEVBQXFCO0FBQUE7O0FBQUE7O0FBQ25CLDhCQUFNLE9BQU47O0FBRUEsVUFBSyxVQUFMOztBQUhtQjtBQUlwQjs7OztpQ0FFWTtBQUFBOztBQUNYLFVBQU0sVUFBVSxHQUFHO0FBQ2pCLFFB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VUFBTCxHQUFrQixTQUFsQixDQUE0QixHQUE1QixDQUFnQyxLQUFLLGNBQXJDO0FBRUEsV0FBSyxVQUFMLEdBQWtCLGdCQUFsQixDQUFtQyxjQUFuQyxFQUFtRCxZQUFNO0FBQ3ZELFFBQUEsS0FBSSxDQUFDLFFBQUwsQ0FBYyxLQUFJLENBQUMsRUFBbkI7QUFDRCxPQUZEO0FBR0Q7OztpQ0FFWSxPLEVBQVM7QUFDcEIsV0FBSyxlQUFMLENBQXFCLE9BQXJCO0FBQ0EsV0FBSyxVQUFMO0FBQ0Q7OztnQ0FFVyxNLEVBQVE7QUFDbEIsV0FBSyxlQUFMLENBQXFCLE1BQXJCO0FBQ0EsV0FBSyxVQUFMO0FBQ0Q7Ozs7Ozs7O2dCQWhEVSxLLFdBQ0ksQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCB7IE1vZGFsc1Byb3ZpZGVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9tb2RhbC1wcm92aWRlclwiO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb25Nb2RhbCB9IGZyb20gXCIuL2NvbXBvbmVudHMvY29uZmlybWF0aW9uLW1vZGFsXCI7XHJcblxyXG5jb25zdCBtb2RhbHNQcm92aWRlciA9IG5ldyBNb2RhbHNQcm92aWRlcih7XHJcbiAgcm9vdEVsOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWxzQ29udGFpbmVyJylcclxufSk7XHJcblxyXG5jb25zdCBvcGVuTW9kYWwgPSAoKSA9PiB7XHJcbiAgbW9kYWxzUHJvdmlkZXIub3Blbk1vZGFsKENvbmZpcm1hdGlvbk1vZGFsLCB7XHJcbiAgICBwYXlsb2FkOiB7XHJcbiAgICAgIHRpdGxlOiAn0J3QsNC/0LjRiNC40YLQtSDQvdCw0LfQstCw0L3QuNC1INGB0L/QuNGB0LrQsCdcclxuICAgIH0sXHJcblxyXG4gICAgb25Nb2RhbFJlc29sdmVkOiAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdyZXNvbHZlZCcpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbk1vZGFsUmVqZWN0ZWQ6ICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ3JlamVjdGVkJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbm9wZW5Nb2RhbCgpO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIG9wZW5Nb2RhbCgpO1xyXG59KTtcclxuIiwiaW1wb3J0IHtNb2RhbH0gZnJvbSBcIi4vbW9kYWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb25maXJtYXRpb25Nb2RhbCBleHRlbmRzIE1vZGFsIHtcclxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICBzdXBlcihvcHRpb25zKTtcclxuICAgIFxyXG4gICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgfVxyXG5cclxuICBiaW5kRXZlbnRzKCkge1xyXG4gICAgY29uc3QgYWN0aW9uc01hcCA9IHtcclxuICAgICAgY2FuY2VsOiAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZWplY3RNb2RhbCgpO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgb2s6ICgpID0+IHtcclxuICAgICAgICB0aGlzLnJlc29sdmVNb2RhbCgpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKHsgdGFyZ2V0IH0pID0+IHtcclxuICAgICAgaWYgKHRhcmdldC5jbG9zZXN0KGBbZGF0YS1tb2RhbD1cIiR7dGhpcy5pZH1cIl1gKSkge1xyXG4gICAgICAgIGFjdGlvbnNNYXBbdGFyZ2V0LmRhdGFzZXQuYWN0aW9uXT8uKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0SFRNTCgpIHtcclxuICAgIHJldHVybiBgXHJcbiAgICAgIDxkaXYgZGF0YS1tb2RhbD0ke3RoaXMuaWR9IGNsYXNzPVwibW9kYWwtb3ZlcmxheVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudF9faGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxoMj4ke3RoaXMucGF5bG9hZC50aXRsZSB8fCAnQ29uZmlybT8nfTwvaDI+XHJcbiAgICAgICAgICAgIDxzcGFuIGRhdGEtYWN0aW9uPVwiY2FuY2VsXCIgY2xhc3M9XCJjbG9zZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxmb3JtIGNsYXNzPVwibW9kYWwtZm9ybVwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBjbGFzcz1cIm1vZGFsLWZvcm1fX2lucHV0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQlNC+0LHQsNCy0LjRgtGMINC40LzRjyDRgdC/0LjRgdC60LAuLi5cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRfX2Zvb3RlclwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtYWN0aW9uPVwib2tcIiBjbGFzcz1cImJ1dHRvblwiIHRpdGxlPVwiXCI+XHJcbiAgICAgICAgICAgIG9rXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtYWN0aW9uPVwiY2FuY2VsXCIgY2xhc3M9XCJidXR0b25cIiB0aXRsZT1cIlwiPlxyXG4gICAgICAgICAgICAgIGNhbmNlbFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiBcclxuICAgICAgPC9kaXY+IFxyXG4gICAgYDtcclxuICB9XHJcbn0iLCJcclxuZXhwb3J0IGNsYXNzIE1vZGFsc1Byb3ZpZGVyIHtcclxuICBjb25zdHJ1Y3Rvcih7IHJvb3RFbCA9IGRvY3VtZW50LmJvZHkgfSA9IHt9KSB7XHJcbiAgICB0aGlzLnJvb3RFbCA9IHJvb3RFbDtcclxuICAgIHRoaXMub3BlbmVkTW9kYWxzID0gW107XHJcbiAgfVxyXG4gIFxyXG4gIGRlbGV0ZU1vZGFsKG1vZGFsSUQpIHtcclxuICAgIHRoaXMucm9vdEVsLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW1vZGFsPVwiJHttb2RhbElEfVwiXWApPy5yZW1vdmUoKTtcclxuICB9XHJcblxyXG4gIG9wZW5Nb2RhbChNb2RhbCwgb3B0aW9ucykge1xyXG4gICAgY29uc3QgbW9kYWwgPSBuZXcgTW9kYWwoe1xyXG4gICAgICBvbkV4aXRlZDogdGhpcy5kZWxldGVNb2RhbC5iaW5kKHRoaXMpLFxyXG4gICAgICBvcHRpb25zXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnJvb3RFbC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIG1vZGFsLmdldEhUTUwoKSk7XHJcbiAgICBtb2RhbC5vcGVuTW9kYWwoKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIG1vZGFsO1xyXG4gIH1cclxufVxyXG5cclxuIiwiXHJcbmV4cG9ydCBjbGFzcyBNb2RhbCB7ICBcclxuICBzdGF0aWMgY291bnQgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih7XHJcbiAgICBvbkV4aXRlZCA9ICgpID0+IHt9LFxyXG4gICAgb3BlbkNsYXNzTmFtZSA9ICdtb2RhbF9vcGVuJyxcclxuICAgIGNsb3NlQ2xhc3NOYW1lID0gJ21vZGFsX2Nsb3NlJyxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgcGF5bG9hZCA9IHt9LFxyXG4gICAgICBvbk1vZGFsUmVzb2x2ZWQgPSAoKSA9PiB7fSxcclxuICAgICAgb25Nb2RhbFJlamVjdGVkID0gKCkgPT4ge31cclxuICAgIH0gPSB7fSxcclxuICB9KSB7XHJcbiAgICB0aGlzLmlkID0gKytNb2RhbC5jb3VudDtcclxuICAgIHRoaXMub3BlbkNsYXNzTmFtZSA9IG9wZW5DbGFzc05hbWU7XHJcbiAgICB0aGlzLmNsb3NlQ2xhc3NOYW1lID0gY2xvc2VDbGFzc05hbWU7XHJcbiAgICB0aGlzLnBheWxvYWQgPSBwYXlsb2FkO1xyXG4gICAgdGhpcy5vbk1vZGFsUmVzb2x2ZWQgPSBvbk1vZGFsUmVzb2x2ZWQ7XHJcbiAgICB0aGlzLm9uTW9kYWxSZWplY3RlZCA9IG9uTW9kYWxSZWplY3RlZDtcclxuICAgIHRoaXMub25FeGl0ZWQgPSBvbkV4aXRlZDtcclxuICB9XHJcblxyXG4gIGdldE1vZGFsRWwoKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtbW9kYWw9XCIke3RoaXMuaWR9XCJdYCk7XHJcbiAgfVxyXG5cclxuICBvcGVuTW9kYWwoKSB7XHJcbiAgICB0aGlzLmdldE1vZGFsRWwoKS5jbGFzc0xpc3QuYWRkKHRoaXMub3BlbkNsYXNzTmFtZSk7XHJcbiAgICB0aGlzLmdldE1vZGFsRWwoKS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xvc2VDbGFzc05hbWUpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VNb2RhbCgpIHtcclxuICAgIHRoaXMuZ2V0TW9kYWxFbCgpLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5vcGVuQ2xhc3NOYW1lKTtcclxuICAgIHRoaXMuZ2V0TW9kYWxFbCgpLmNsYXNzTGlzdC5hZGQodGhpcy5jbG9zZUNsYXNzTmFtZSk7XHJcblxyXG4gICAgdGhpcy5nZXRNb2RhbEVsKCkuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLm9uRXhpdGVkKHRoaXMuaWQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXNvbHZlTW9kYWwocGF5bG9hZCkge1xyXG4gICAgdGhpcy5vbk1vZGFsUmVzb2x2ZWQocGF5bG9hZCk7XHJcbiAgICB0aGlzLmNsb3NlTW9kYWwoKTtcclxuICB9XHJcblxyXG4gIHJlamVjdE1vZGFsKHJlYXNvbikge1xyXG4gICAgdGhpcy5vbk1vZGFsUmVqZWN0ZWQocmVhc29uKTtcclxuICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xyXG4gIH1cclxufSJdfQ==
