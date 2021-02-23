
export class ModalsProvider {
  constructor({ rootEl = document.body } = {}) {
    this.rootEl = rootEl;
    this.openedModals = [];
  }

  deleteModal(modalID) {
    this.rootEl.querySelector(`[data-modal='${modalID}']`)?.remove();
  }

  openModal(Modal, options = {}) {
    const modal = new Modal({
      onExited: (modalID) => {
        this.deleteModal(modalID);
        options.onExited?.(modalID);
      },

      ...options
    });

    this.rootEl.insertAdjacentHTML('beforeend', modal.getHTML());
    modal.openModal();

    return modal;
  }
}

