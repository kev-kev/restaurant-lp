import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import $ from 'jquery';
import 'slick-carousel';


AOS.init();

// document.addEventListener("DOMContentLoaded", function() {
//   document.getElementsByClassName('slideshow')[0].slick({
//     autoplay: true,
//   })
// })

$(document).ready(() => {
  console.log("hello");
  $('.slideshow').slick({
    autoplay: true
  })
});