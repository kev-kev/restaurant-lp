import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init();

const navbar = document.getElementById("navbar-container");
const sticky = (window.screen.availHeight / 2) - navbar.offsetHeight;
window.onscroll = function() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
};

