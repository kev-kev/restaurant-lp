import AOS from 'aos';
import 'aos/dist/aos.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import MicroModal from 'micromodal';

const LUNCH_MENU_ITEMS = 8;
const DINNER_MENU_ITEMS = 8;
const DRINK_MENU_ITEMS = 6;

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
    dots: false,
    touchDrag: false,
    mouseDrag: false,
  })

  AOS.init();
});

$('.menu-btn').on('click', (e) => {
  $('.menu-grid-container').hide();
  $('.menu-list-container').hide();
  $('.menu-subtitle-grid').hide();
  switch(e.target.id){
    case 'lunch-menu-btn':
      $('.menu-subtitle-grid').show();
      $('#lunch-menu-container').show();
      break;
    case 'dinner-menu-btn':
      $('.menu-subtitle-grid').show();
      $('#dinner-menu-container').show();
      break;
    case 'drink-menu-btn':
      $('#drink-menu-container').show();
      break;
  }
})

const createMenuItems = () => {
  for(let i = 0; i < LUNCH_MENU_ITEMS; i++){
    $('#lunch-menu-container').append(`
      <div class="menu-grid-item">
        <h2>Lunch Item</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    `)
  }
  for(let i = 0; i < DINNER_MENU_ITEMS; i++){
    $('#dinner-menu-container').append(`
      <div class="menu-grid-item">
        <h2>Dinner Item</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    `)
  }
  for(let i = 0; i < DRINK_MENU_ITEMS; i++){
    $('#drink-menu-container').append(`
      <div class="menu-list-item">
        <h2>Drink Item</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    `)
  }
}

createMenuItems();
$('#dinner-menu-container').hide();
$('#drink-menu-container').hide();
MicroModal.init({awaitCloseAnimation: true, awaitOpenAnimation: true});
