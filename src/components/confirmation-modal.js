import {Modal} from './modal';

export class ConfirmationModal extends Modal {
  constructor(options) {
    super(options);

    this.bindEvents();
  }

  bindEvents() {
    const actionsMap = {
      ok: () => {
        this.resolveModal();
      }
    };

    document.addEventListener('click', ({ target }) => {
      if (target.closest(`[data-modal='${this.id}']`)) {
        actionsMap[target.dataset.action]?.();
      }
    });
  }

  getHTML() {
    return `
      <div data-modal=${this.id} class='modal'>
        <div class='modal-overlay'></div>

        <div class='modal-content'>
          <div class='modal-content__header'>
            <h2>${this.payload.title || 'Confirm?'}</h2>
            <span data-modal-close class='close'>&times;</span>
          </div>
          <form class='modal-form'>
            <input
              class='modal-form__input'
              name='name'
              placeholder='Добавить имя списка...'
            />
          </form>
          <div class='modal-content__footer'>
            <button data-action='ok' class='button' title=''>
            ok
            </button>
            <button data-modal-close class='button' title=''>
              cancel
            </button>
          </div>
        </div> 
      </div> 
    `;
  }
}
