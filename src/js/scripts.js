import AOS from 'aos';
import 'aos/dist/aos.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

const LUNCH_MENU_ITEMS = 8;
const DINNER_MENU_ITEMS = 8;

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
  createMenuItems();
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

const createMenuItems = () => {
  for(let i = 0; i < LUNCH_MENU_ITEMS; i++){
    $('#lunch-menu-container').append(`
      <div class="menu-grid-item">
        <h2>Lunch Item</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
    `)
  }
  for(let i = 0; i < DINNER_MENU_ITEMS; i++){
    $('#dinner-menu-container').append(`
      <div class="menu-grid-item">
        <h2>Dinner Item</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
    `)
  }

}