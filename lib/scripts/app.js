"use strict";

var _components = require("./components");

var modalsProvider = new _components.ModalsProvider({
  rootEl: document.getElementById('modalsContainer')
});

var openModal = function openModal() {
  modalsProvider.openModal(_components.ConfirmationModal, {
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