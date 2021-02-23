
export class Modal {
  static count = 0;

  constructor({
    onExited = () => {},
    openClassName = 'modal_open',
    closeClassName = 'modal_close',
    disableAnimations = false,
    payload = {},
    onModalResolved = () => {},
    onModalRejected = () => {}
  } = {}) {
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

  getModalEl() {
    return document.querySelector(`[data-modal='${this.id}']`);
  }

  openModal() {
    this.getModalEl().classList.add(this.openClassName);
    this.getModalEl().classList.remove(this.closeClassName);
  }

  closeModal() {
    this.getModalEl().classList.remove(this.openClassName);
    this.getModalEl().classList.add(this.closeClassName);

    if (this.disableAnimations) {
      this.onExited(this.id);
    } else {
      this.getModalEl().addEventListener('animationend', () => {
        this.onExited(this.id);
      });
    }
  }

  resolveModal(payload) {
    this.onModalResolved(payload);
    this.closeModal();
  }

  rejectModal(reason) {
    this.onModalRejected(reason);
    this.closeModal();
  }

  _bindEvents() {
    console.log(this.id);
    document.addEventListener('click', ({ target }) => {
      const modalId = +target.closest(`[data-modal='${this.id}']`)?.dataset?.modal;
      console.log(modalId);
      if (modalId === this.id && target.closest('[data-modal-close]')) {
        this.rejectModal();
      }
    });
  }
}
