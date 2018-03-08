(function() {
  const getListed = document.querySelector('#get-listed');
  const overlay = document.createElement('div');
  overlay.setAttribute('id', 'overlay');
  overlay.innerHTML = `
   <section class="flex-row flex-center">
    <div>
      <header>
        <h6>Choose category</h6>
        <span>some text</span>
      </header>
      <button>shopper</button>
      <button>brand</button>
    </div>
    <div>close</div>
   </section>
  `
  getListed.addEventListener('click', (event) => {
    document.body.appendChild(overlay);
  })
})();