'use strict';

const Carouselyape = (update) =>{
  const container        = $('<div class="container"></div>');
  const row              = $('<div class="row"></div>');
  const carouselSlider   = $('<div class="carousel carousel-slider center col m12" data-indicators="true"></div>');
  const carouselItem1    = $('<div class="carousel-item " href="#one!"></div>');
  const imgCarousel1     = $('<div class="img-carousel"></div>');
  const imgItem1         = $('<img src="assets/img/icons/icon-people.png" alt="icon-people">');
  const titleItem1       = $('<h2>Paga a tus amigos</h2>');
  const descriptionItem1 = $('<p class="">Paga a quien quieras desde donde <br> quieras,sin usar efectivo</p>');
  const carouselItem2    = $('<div class="carousel-item " href="#two!"></div>');
  const imgCarousel2     = $('<div class="img-carousel"></div>');
  const imgItem2         = $('<img src="assets/img/icons/happy-person.png" alt="happy-person">');
  const titleItem2       = $('<h2>Sin número de cuenta</h2>');
  const descriptionItem2 = $('<p class="">Elige a quien pagar desde tu lista de contactos</p>');
  const carouselItem3    = $('<div class="carousel-item " href="#three!"></div>');
  const imgCarousel3     = $('<div class="img-carousel"></div>');
  const imgItem3         = $('<img src="assets/img/icons/group-people.png" alt="group-people">');
  const titleItem3       = $('<h2>Gratis y seguro</h2>');
  const descriptionItem3 = $('<p class="">La transeferencia es inmediata y gratuita de una cuenta a otra</p>');
  const btnContinuar     = $('<a class="btn col s10 offset-s1 background-yellow waves-effect center white-text darken-text-2">Registrarme</a>');
  carouselItem1.append(imgCarousel1);
  imgCarousel1.append(imgItem1);
  carouselItem1.append(titleItem1);
  carouselItem1.append(descriptionItem1);
  carouselItem2.append(imgCarousel2);
  imgCarousel2.append(imgItem2);
  carouselItem2.append(titleItem2);
  carouselItem2.append(descriptionItem2);
  carouselItem3.append(imgCarousel3);
  imgCarousel3.append(imgItem3);
  carouselItem3.append(titleItem3);
  carouselItem3.append(descriptionItem3);
  carouselSlider.append(carouselItem1);
  carouselSlider.append(carouselItem2);
  carouselSlider.append(carouselItem3);
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
