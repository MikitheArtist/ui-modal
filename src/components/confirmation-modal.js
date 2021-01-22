import {Modal} from "./modal";

export class ConfirmationModal extends Modal {
  constructor(options) {
    super(options);
    
    this.bindEvents();
  }

  bindEvents() {
    const actionsMap = {
      cancel: () => {
        this.rejectModal();
      },

      ok: () => {
        this.resolveModal();
      }
    };

    document.addEventListener('click', ({ target }) => {
      if (target.closest(`[data-modal="${this.id}"]`)) {
        actionsMap[target.dataset.action]?.();
      }
    });
  }

  getHTML() {
    return `
      <div data-modal=${this.id} class="modal-overlay">
        <div class="modal-content">
          <div class="modal-content__header">
            <h2>${this.payload.title || 'Confirm?'}</h2>
            <span data-action="cancel" class="close">&times;</span>
          </div>
          <form class="modal-form">
            <input
              class="modal-form__input"
              name="name"
              placeholder="Добавить имя списка..."
            />
          </form>
          <div class="modal-content__footer">
            <button data-action="ok" class="button" title="">
            ok
            </button>
            <button data-action="cancel" class="button" title="">
              cancel
            </button>
          </div>
        </div> 
      </div> 
    `;
  }
}