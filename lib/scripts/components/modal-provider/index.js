"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
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