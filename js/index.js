/**
 * Javascript - Index
 * Author - Andrew Mass
 * 8/1/2013
 */

function MassterSite() {}

// Sets correct heights for various elements based on window height.
MassterSite.resize = function() {
  var height = $(window).height();
  var MAX_HEIGHT = 500;

  if($('.start').css('display') != 'none') {
    // Showing start page.
    if($('.centered').height() >= height) {
      // Window height too small to display content.
      $('.start').css('height','');
      $('.start').css('min-height', height);
    } else {
      // Window height larger than content height.
      $('.start').css('min-height','');
      if(height >= MAX_HEIGHT) {
        $('.start').css('height', height);
      } else {
        $('.start').css('height', MAX_HEIGHT);
      }
    }

    if(height >= MAX_HEIGHT) {
      // Window height larger than content height.
      $('body').css('min-height', height);
      $('.container.wrapper').css('min-height',height);
      $('.container.wrapper:before').css('min-height', height);
    } else {
      // Window height too small to display content.
      $('body').css('min-height', MAX_HEIGHT);
      $('.container.wrapper').css('min-height', MAX_HEIGHT);
      $('.container.wrapper:before').css('min-height', MAX_HEIGHT);
    }
  } else if($('.content').css('display') != 'none') {
      // Showing content page.
      if($(window).width() >= 980) {
        $('.side-nav').css('height',$('.content-pane').height());
        //$('.side-nav-inner').addClass('affix');
        //$('.side-nav-inner').attr('data-spy','affix');
      } else {
        $('.side-nav').css('height','');
        //$('.side-nav-inner').removeClass('affix');
        //$('.side-nav-inner').attr('data-spy','');
      }
  }
};

$(function() {
  if(window.location.hash !== "") {
    $('.start').css('display','none');
    $('.content').css('display', 'block');
  }
  MassterSite.resize();

  $(window).resize(function() {
    MassterSite.resize();
  });

  // Click handler for start page header.
  $('#header-name').click(function(event) {
    event.preventDefault();
    $('.start').css('display','none');
    $('.content').css('display', 'block');
    MassterSite.resize();
  });

  // Click handler for start page panels.
  $('.start .panel').click(function() {
    $('.start').css('display','none');
    $('.content').css('display', 'block');
    MassterSite.resize();
  });

  // Click handler for sidebar navigation image.
  $('.content .side-nav-image').click(function(event) {
    event.preventDefault();
    window.location.hash = "";
    $('.content').css('display','none');
    $('.start').css('display', 'block');
    MassterSite.resize();
  });

  // Carousel initilization.
  $('#carousel-projects').carousel({
    interval: 3141.5
  });
});
