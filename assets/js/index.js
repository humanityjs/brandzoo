$(document).ready(() => {
  // Add show-modal class
  function showModal(modalDiv) {
    const modal = document.querySelector(modalDiv);
    modal.classList.toggle("show-modal");
  }

  // Remove show-modal class
  function toggleModal(event) {
    $(".modal").removeClass("show-modal");
  }

  // Display categories modal
  function showCategories(event) {
    showModal("#choose-category");
  }

  // Display getListedForm modal
  function showGetListedForm(event) {
    showModal("#get-listed-form");
  }

  const getListed = document.querySelector('button#get-listed');
  const closeModal = document.querySelectorAll(".close-modal");
  const categories = document.querySelectorAll(".category");

  // Event listeners
  getListed.addEventListener('click', showCategories);
  closeModal.forEach(closebutton => closebutton.addEventListener('click', toggleModal));
  categories.forEach(category => category.addEventListener('click', showGetListedForm));
});
