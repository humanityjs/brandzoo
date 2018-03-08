$(document).ready(() => {
  function toggleModal(event) {
    $(".modal").removeClass("show-modal");
  }

  function showCategories(event) {
    const modal = document.querySelector("#choose-category");
    modal.classList.toggle("show-modal");
  }

  function showGetListedForm(event) {
    const modal = document.querySelector("#get-listed-form");
    modal.classList.toggle("show-modal");
  }

  const getListed = document.querySelector('button#get-listed');
  const closeModal = document.querySelectorAll(".close-modal");
  const categories = document.querySelectorAll(".category");

  getListed.addEventListener('click', showCategories);
  closeModal.forEach(closebutton => closebutton.addEventListener('click', toggleModal));
  categories.forEach(category => category.addEventListener('click', showGetListedForm));
});
