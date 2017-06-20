'use strict';

const Carouselyape = (update) =>{
  const container        = $('<div class="container"></div>');
  const row              = $('<div class="row"></div>');
  const carouselSlider   = $('<div class=" center col m12" data-indicators="true"></div>');
  const carouselItem1    = $('<div class="" href="#one!"></div>');
  const imgCarousel1     = $('<div class="img-validate-phone"></div>');
  const imgItem1         = $('<img src="assets/img/icons/icon-people.png" alt="icon-people">');
  const titleItem1       = $('<h2>Para comenzar validemos tu numero</h2>');
  const descriptionItem1 = $('<p class="">recibiras un SMS <br> quieras,sin usar efectivo</p>');
  const btnContinuar     = $('<a class="btn col s10 offset-s1 background-yellow waves-effect center white-text darken-text-2">Registrarme</a>');

  const input        = $('<input  placeholder="numero">');

  carouselItem1.append(imgCarousel1);
  imgCarousel1.append(imgItem1);
  carouselItem1.append(titleItem1);
  carouselItem1.append(descriptionItem1);
carouselItem1.append(input);
  carouselSlider.append(carouselItem1);
  row.append(carouselSlider);
  row.append(btnContinuar);
  container.append(row);

  btnContinuar.on('click',(e) =>{
    e.preventDefault();
    state.selectedScreen="codigoCelular";
    update();
  });


  return container;
}
