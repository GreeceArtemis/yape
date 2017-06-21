'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  if (state.selectedScreen == null) {
    wrapper.append(Carouselyape(_ => render(root)));


  } else {

    wrapper.append(Validatephone(_ => render(root)));
  
  }
  root.append(wrapper);

}

const state = {
  screen: null,
  selectedScreen: null
};

$( _ => {

  const root = $('.root');
  render(root);
  $('.carousel.carousel-slider').carousel({fullWidth: true});


});
