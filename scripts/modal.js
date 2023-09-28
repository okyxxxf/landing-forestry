window.onload = () => {
  const modalWindow = document.querySelector('.modal');
  const body = document.body;
  const buttons = document.querySelectorAll('.modal-button');

  const hideModal = (modal) => {
    modal.remove();
  };

  const showModal = (modal) => {
    body.append(modal)
    const cross = document.querySelector('.cross-icon');
    
    cross.addEventListener('click', () => {
      hideModal(modal);
      console.log('sads');
    })
  };

  hideModal(modalWindow);

  buttons.forEach(button => button.addEventListener('click', () => showModal(modalWindow)));
};