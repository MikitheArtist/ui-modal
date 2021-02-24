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
  function Modal() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$onExited = _ref.onExited,
        onExited = _ref$onExited === void 0 ? function () {} : _ref$onExited,
        _ref$openClassName = _ref.openClassName,
        openClassName = _ref$openClassName === void 0 ? 'modal_open' : _ref$openClassName,
        _ref$closeClassName = _ref.closeClassName,
        closeClassName = _ref$closeClassName === void 0 ? 'modal_close' : _ref$closeClassName,
        _ref$disableAnimation = _ref.disableAnimations,
        disableAnimations = _ref$disableAnimation === void 0 ? false : _ref$disableAnimation,
        _ref$payload = _ref.payload,
        payload = _ref$payload === void 0 ? {} : _ref$payload,
        _ref$onModalResolved = _ref.onModalResolved,
        onModalResolved = _ref$onModalResolved === void 0 ? function () {} : _ref$onModalResolved,
        _ref$onModalRejected = _ref.onModalRejected,
        onModalRejected = _ref$onModalRejected === void 0 ? function () {} : _ref$onModalRejected;

    _classCallCheck(this, Modal);

    this.id = ++Modal.count;
    this.disableAnimations = disableAnimations;
    this.openClassName = openClassName;
    this.closeClassName = closeClassName;
    this.payload = payload;
    this.onModalResolved = onModalResolved;
    this.onModalRejected = onModalRejected;
    this.onExited = onExited;

    this._bindEvents();

    console.log(this.id);
  }

  _createClass(Modal, [{
    key: "getModalEl",
    value: function getModalEl() {
      return document.querySelector("[data-modal='".concat(this.id, "']"));
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

      if (this.disableAnimations) {
        this.onExited(this.id);
      } else {
        this.getModalEl().addEventListener('animationend', function () {
          _this.onExited(_this.id);
        });
      }
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
  }, {
    key: "_bindEvents",
    value: function _bindEvents() {
      var _this2 = this;

      console.log(this.id);
      document.addEventListener('click', function (_ref2) {
        var _target$closest, _target$closest$datas;

        var target = _ref2.target;
        var modalId = +((_target$closest = target.closest("[data-modal='".concat(_this2.id, "']"))) === null || _target$closest === void 0 ? void 0 : (_target$closest$datas = _target$closest.dataset) === null || _target$closest$datas === void 0 ? void 0 : _target$closest$datas.modal);
        console.log(modalId);

        if (modalId === _this2.id && target.closest('[data-modal-close]')) {
          _this2.rejectModal();
        }
      });
    }
  }]);

  return Modal;
}();

exports.Modal = Modal;

_defineProperty(Modal, "count", 0);