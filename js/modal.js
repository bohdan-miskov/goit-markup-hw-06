(() => {
    const refs = {
      // Додати атрибут data-modal-open на кнопку відкриття
      openModalBtn: document.querySelector("[data-modal-open]"),
      // Додати атрибут data-modal-close на кнопку закриття
      closeModalBtn: document.querySelector("[data-modal-close]"),
      // Додати атрибут data-modal на бекдроп модалки
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
      refs.modal.classList.toggle("is-open");
    }

    const refsMobileMenu = {
      // Додати атрибут data-mobileMenu-open на кнопку відкриття
      openMobileMenuBtn: document.querySelector("[data-mobileMenu-open]"),
      // Додати атрибут data-mobileMenu-close на кнопку закриття
      closeMobileMenuBtn: document.querySelector("[data-mobileMenu-close]"),
      // Додати атрибут data-mobileMenu на бекдроп модалки
      mobileMenu: document.querySelector("[data-mobileMenu]"),
    };
  
    refsMobileMenu.openMobileMenuBtn.addEventListener("click", toggleModal);
    refsMobileMenu.closeMobileMenuBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
      refsMobileMenu.mobileMenu.classList.toggle("is-open");
    }
  })();