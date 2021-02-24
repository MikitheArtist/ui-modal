"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
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