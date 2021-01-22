
export class ModalsProvider {
  constructor({ rootEl = document.body } = {}) {
    this.rootEl = rootEl;
    this.openedModals = [];
  }
  
  deleteModal(modalID) {
    this.rootEl.querySelector(`[data-modal="${modalID}"]`)?.remove();
  }

  openModal(Modal, options) {
    const modal = new Modal({
      onExited: this.deleteModal.bind(this),
      options
    });

    this.rootEl.insertAdjacentHTML('beforeend', modal.getHTML());
    modal.openModal();
    
    return modal;
  }
}

