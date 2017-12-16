var $ = require("jquery");
import 'slick/slick.js';
import 'slick/slick.scss';
import 'slick/slick-theme.scss';

$(function() {
  $('.carousel').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
  });
});
