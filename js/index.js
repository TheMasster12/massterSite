/**
 * Javascript - Index
 * Author - Andrew Mass
 * 9/2/2013
 */

function MassterSite() {}

// Sets correct heights for various elements based on window height.
MassterSite.resize = function() {
  var height = $(window).height();
  var MAX_HEIGHT = 500;
  var SCREEN_DESKTOP = 992;
  var scrollTop = $(window).scrollTop();

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
      if(self.innerWidth >= SCREEN_DESKTOP) {
        $('.side-nav').css('height',$('.content-pane').outerHeight());
        $('.side-nav-image').css('margin-top', scrollTop);
      } else {
        $('.side-nav').css('height','');
        $('.side-nav-image').css('margin-top','');
      }
  }
};

MassterSite.scrollSidebar = function() {
  var SCREEN_DESKTOP = 992;
  var scrollTop = $(window).scrollTop();

  if($('.content').css('display') != 'none') {
    if(self.innerWidth >= SCREEN_DESKTOP) {
      $('.side-nav-image').css('margin-top', scrollTop);
    }
    else {
      $('.side-nav-image').css('margin-top','');
    }
  }
};

$(function() {
  if(window.location.hash !== "") {
    $('.start').css('display','none');
    $('.content').css('display', 'block');
  }

  $(window).resize(function() {
    MassterSite.resize();
  });

  $(window).scroll(function() {
    MassterSite.scrollSidebar();
  });

  // Click handler for start page header.
  $('#header-name').click(function(event) {
    event.preventDefault();
    window.location.hash = "content";
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

  MassterSite.resize();
});
