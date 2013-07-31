function MassterSite() {}

MassterSite.resize = function() {
  var height = $(window).height();

  if($('.centered').height() >= height) {
    $('.start').css('height','');
    $('.start').css('min-height', height);
  } else {
      $('.start').css('min-height','');
    if(height >= 500) {
      $('.start').css('height', height);
    } else {
      $('.start').css('height', 500);
    }
  }
  
  if(height >= 500) {
    $('body').css('min-height', height);
    $('.container.wrapper').css('min-height',height);
    $('.container.wrapper:before').css('min-height', height);
  } else {
    $('body').css('min-height', 500);
    $('.container.wrapper').css('min-height', 500);
    $('.container.wrapper:before').css('min-height', 500);
  }
};

$(function() {
  MassterSite.resize();

  $(window).resize(function() {
    MassterSite.resize();
  });

  $('.start .panel').click(function() {
    $('.start').css('display','none');
    $('.content').css('display', 'block');
  });

  $('.content .side-nav-image').click(function() {
    $('.content').css('display','none');
    $('.start').css('display', 'block');
  });
});
