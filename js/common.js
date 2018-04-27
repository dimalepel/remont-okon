// Карусель "Наши услуги"
var servicesSlider = $('.js--services__slider');
servicesSlider.owlCarousel({
  loop: false,
  margin: 15,
  smartSpeed: 1750,
  nav: false,
  dots: false,
  items: 3
});
// Go to the next item
$('.js--services__slider-nav--next').click(function() {
  servicesSlider.trigger('next.owl.carousel');
});
// Go to the previous item
$('.js--services__slider-nav--prev').click(function() {
  servicesSlider.trigger('prev.owl.carousel');
});

// Карусель "Именно мы"
var receptionSlider = $('.js--reception__slider');
receptionSlider.owlCarousel({
  loop: true,
  center: true,
  margin: 15,
  smartSpeed: 1750,
  nav: false,
  dots: false,
  items: 3
});
// Go to the next item
$('.js--reception__slider-nav--next').click(function() {
  receptionSlider.trigger('next.owl.carousel');
});
// Go to the previous item
$('.js--reception__slider-nav--prev').click(function() {
  receptionSlider.trigger('prev.owl.carousel');
});

// Кнопка "Наверх"
$('.js--to-top').click(function () {
  $('body,html').animate({
    scrollTop: 0
  }, 600);
  return false;
});