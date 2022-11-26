import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init();

const navbar = document.getElementById("navbar-container");
const headerImage = document.getElementById("header-background-image");
window.onscroll = function() {
  if (window.pageYOffset >= headerImage.offsetHeight - navbar.offsetHeight) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

