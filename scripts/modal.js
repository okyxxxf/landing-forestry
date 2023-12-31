window.onload = () => {
  setTimeout(() => document.querySelector('.preloader').remove(), 3300);
  const modalWindow = document.createElement('div');
  modalWindow.className = 'modal';
  modalWindow.innerHTML = `
  <div class="modal__wrapper">
      <div class="cross-icon">x</div>
      <h1 class="modal__h1">Усадьба "Охотник у дуба"</h1>
      <div class="modal__info">
          <div class="modal__slider">
              <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-inner">
                      <div class="carousel-item active">
                          <img src="./img/homestead-additional1.jpg" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                          <img src="./img/homestead-additional2.jpg" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                          <img src="./img/homestead-additional3.jpg" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                          <img src="./img/homestead-additional4.jpg" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                          <img src="./img/homestead-additional5.jpg" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                          <img src="./img/homestead-additional6.jpg" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                          <img src="./img/homestead-additional7.jpg" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                          <img src="./img/homestead-additional8.jpg" class="d-block w-100" alt="...">
                      </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Предыдущий</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Следующий</span>
                  </button>
                </div>
          </div>
          <div class="modal__info-wrapper">
              <p class="modal__p">Охотничий комплекс «Охотник у дуба» расположился в 15 км от г. Минска в живописном месте среди вековых дубов рядом с озером.
                  <br><br>
                  Комплекс может принять как большие компании для проведения торжественных мероприятий , так и небольшие, для отдыха на природе в кругу близких и родных.
                  </p>
          </div>
          <div class="modal__info-wrapper">
                <p class="modal__p">На площади в 2,5 га в тени дубов среди зелени уютно расположились 2 дома и беседка.
                <br><br>
                В доме устроено автономное водоснабжение. Вода поступает из скважины глубиной более 140 м. Обогрев дома в зимнее время производится с помощью системы «теплый пол».
                </p>
          </div>
      </div>
      <h2 class="modal__h2">Актуальные цены на услуги</h2>
      <table class="modal__table">
          <tr>
              <th>Наименование услуги</th>
              <th>Ед. измерения</th>
              <th>Отпускная цена, руб., коп.</th>
          </tr>
          <tr>
              <td rowspan='2'>Услуги всего комплекса
                  <br>
                  (в услуги комплекса входят беседка, дом №2, дом №4)
                  <br>
                  * при бронировании всего комплекса на сутки включена аренда сауны (2 часа), свыше 2 часов - доплата 50 руб/час
              </td>
              <td>час</td>
              <td>127,27</td>
          </tr>
          <tr>
              <td>сутки</td>
              <td>2 800,00</td>
          </tr>
          <tr>
              <td>Веник банный (березовый)</td>
              <td>шт.</td>
              <td>2,00</td>
          </tr>
          <tr>
              <td>Экологическая тропа</td>
              <td>чел.</td>
              <td>4,50</td>
          </tr>
          <tr>
              <td>Услуга хозяйственного блока</td>
              <td>сутки</td>
              <td>200,00</td>
          </tr>
      </table></div>`;

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
    });
  };

  buttons.forEach((button) => {button.addEventListener('click', () => showModal(modalWindow))});
};