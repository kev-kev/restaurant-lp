import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';


AOS.init();

$(() => {
  $('.owl-carousel').owlCarousel({
    loop: true,
    items: 1,
    animateOut: 'fadeOut',
    autoplay: true,
    autoplayTimeout: 3000
  })
});
