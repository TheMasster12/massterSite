function GigaStorm() {}

GigaStorm.track = function(args) {
  _gaq.push(args);
};

$(function() {
  $('.link-nav').click(function(e) {
    e.preventDefault();
    var link = $(this).attr('href');
    GigaStorm.track(['_trackEvent', 'Navbar', link]);
    $('html, body').animate({
      scrollTop: $(link).offset().top
    }, 500);
  });

  $('.btn-action').click(function() {
    GigaStorm.track(['_trackEvent', 'Action', $(this).html()]);
  });

  $('#mailto-info').click(function() {
    GigaStorm.track(['_trackEvent', 'Contact', 'Info']);
  });

  $('#mailto-jobs').click(function() {
    GigaStorm.track(['_trackEvent', 'Contact', 'Jobs']);
  });

  $('.social-facebook a, .social-gplus a, .social-linkedin a, .social-twitter a, social-github a').click(function() {
    GigaStorm.track(['_trackEvent', 'Social', $(this).attr('href')]);
  });

  $('a').click(function() {
    GigaStorm.track(['_trackEvent', 'Link', $(this).attr('href')]);
  });
});
