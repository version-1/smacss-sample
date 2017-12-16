var $ = require("jquery");

$('.js-hamberger-menu').on('click', function(){
  if ($(this).hasClass('fa-align-justify')){
    $(this).removeClass('fa-align-justify');
    $(this).addClass('fa-times');
  }else{
    $(this).removeClass('fa-times');
    $(this).addClass('fa-align-justify');
  }
});

$('.js-accordion-trigger').on('click', function(){
  const target = $(this).attr('data-target')
  const obj = $('#' + target)
  if (obj.hasClass('is-opened')){
    obj.removeClass('is-opened');
  }else{
    obj.addClass('is-opened');
  }
});
