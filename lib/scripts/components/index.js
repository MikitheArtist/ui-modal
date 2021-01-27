"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modal = require("./modal");

Object.keys(_modal).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _modal[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _modal[key];
    }
  });
});

var _modalProvider = require("./modal-provider");

Object.keys(_modalProvider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _modalProvider[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _modalProvider[key];
    }
  });
});

var _confirmationModal = require("./confirmation-modal");

Object.keys(_confirmationModal).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _confirmationModal[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _confirmationModal[key];
    }
  });
});