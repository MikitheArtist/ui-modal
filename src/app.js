import { ModalsProvider, ConfirmationModal } from './components';

const modalsProvider = new ModalsProvider({
  rootEl: document.getElementById('modalsContainer')
});

const openModal = () => {
  modalsProvider.openModal(ConfirmationModal, {
    payload: {
      title: 'Напишите название списка'
    },

    onModalResolved: () => {
      console.log('resolved');
    },

    onModalRejected: () => {
      console.log('rejected');
    }
  });
}

openModal();

document.querySelector('.button').addEventListener('click', () => {
  openModal();
});
