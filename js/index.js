function GigaStorm() {}

$(function() {
  $('.link-nav').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $(link).offset().top
    }, 500);
  });
});
