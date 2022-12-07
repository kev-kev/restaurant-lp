import AOS from 'aos';
import 'aos/dist/aos.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

$(() => {
  $('.owl-carousel').on('initialized.owl.carousel', () => {
    console.log()
    $('.carousel-placeholder').hide();
  })

  $('.owl-carousel').owlCarousel({
    loop: true,
    items: 1,
    animateOut: 'fadeOut',
    autoplay: true,
    autoplayTimeout: 3000,
    dots: false
  })

  $('#dinner-menu-container').hide();
  // $('.drink-menu').hide();
  AOS.init();
});

$('.menu-btn').on('click', (e) => {
  $('.menu-grid-container').hide();
  if(e.target.id === 'lunch-menu-btn'){
    $('#lunch-menu-container').show();
  } else {
    $('#dinner-menu-container').show();
  }
})

