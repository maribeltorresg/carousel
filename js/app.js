$(document).ready(loadPage);

var target = 0;

function loadPage() {
  // Elementos
  var $buttons = $('.control');
  var $previous = $('.previous');
  var $next = $('.next');

  //  Eventos
  $buttons.click(changeImage);
  $previous.click(previousImage);
  $next.click(nextImage);
};

function changeImage() {
  target = parseInt($(this).data('target'));
  showImage(target);
};

function previousImage(e) {
  e.preventDefault();
  target = target - 1;
  target = (target < 0) ? 2 : target;
  showImage(target);
};

function nextImage(e) {
  e.preventDefault();
  target = target + 1;
  target = (target > 2) ? 0 : target;   
  showImage(target);
};

// dibuje o muestre
function showImage(target) {
  var $lastSlide = $('div.active');
  var $slide = $('div[data-slide=\'' + target + '\']');

  $lastSlide.removeClass('active');
  $slide.addClass('active');
}