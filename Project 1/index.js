

// service
let modalBtns  = document.querySelectorAll('.services-button'),
  modalViews = document.querySelectorAll(".services-modal"),
  modalClose = document.querySelectorAll('.modal-close-icon');

  let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal');
  }

  modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
      modal(i)
    })
  })
  modalClose.forEach(el =>{
    el.addEventListener('click', () => {
      modalViews.forEach(modalView => {
        modalView.classList.remove('active-modal')
      })
    })
  })

  