class Modal{
  constructor(addBtn, modal, closeBtn){
    this.addBtn = document.querySelector(addBtn);
    this.modal = document.querySelector(modal);
    this.closeBtn = document.querySelector(closeBtn);

    console.log(this.addBtn );
  }
  

  init() {
    this.createModal();
    this.removeModal();
  }

  createModal(){
    this.addBtn.addEventListener("click", (event) => {
        event.preventDefault();

        this.modal.classList.add("modal_open");
    });
  }

  removeModal() {
    this.closeBtn.addEventListener("click", (event) => {
        event.preventDefault();

        this.modal.classList.remove("modal_open");
    });
  }
}

const modal = new Modal("#myBtn", "#myModal", ".close");
modal.init();