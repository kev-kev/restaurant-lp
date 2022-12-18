import AOS from 'aos';
import 'aos/dist/aos.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import MicroModal from 'micromodal';
import $ from 'jquery';

const LUNCH_MENU_ITEMS = 8;
const DINNER_MENU_ITEMS = 8;
const DRINK_MENU_ITEMS = 6;
const MAX_TABLE_SIZE = 8;
const RESERVATION_PD_IN_MONTHS = 1;

// Init.
$(() => {
  $('.owl-carousel').on('initialized.owl.carousel', () => {
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
  
  MicroModal.init({
    awaitCloseAnimation: true,
    awaitOpenAnimation: true
  });
})

// Hamburger
$('.fa-bars').on('click', () => {
  const hamburgerMenu = $('.hamburger-menu');
  if(hamburgerMenu.css("display") === "flex"){
    hamburgerMenu.css("display", "none");
    $('body').css("overflowY", "visible");
  } else {
    hamburgerMenu.css("display", "flex");
    $('body').css("overflowY", "hidden");
  } 
})

// Menu
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

$('#dinner-menu-container').hide();
$('#drink-menu-container').hide();


// Reservation form
for(let i = 1; i <= MAX_TABLE_SIZE; i++) {
  $('#num-input').append(`
    <option value="${i}">${i}</option>
  `)
}

let today = new Date(), dd = today.getDate(), mm = today.getMonth() + 1, yyyy = today.getFullYear(), endOfReservations = new Date();
if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;
today = yyyy + '-' + mm + '-' + dd; // formatting for html

endOfReservations.setMonth(mm + RESERVATION_PD_IN_MONTHS);
dd = endOfReservations.getDate();
mm = endOfReservations.getMonth();
yyyy = endOfReservations.getFullYear();
if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;
endOfReservations = yyyy + '-' + mm + '-' + dd;

$('#date-input').attr({
  "min": today,
  "max": endOfReservations
});



