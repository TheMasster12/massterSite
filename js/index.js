/**
 * Javascript - Index
 * Author - Andrew Mass
 */

function MassterSite() {}

MassterSite.track = function(args) {
  _gaq.push(args);
};

// Sets correct heights for various elements based on window height.
MassterSite.resize = function() {
  var height = $(window).height();

  if($('.start').css('display') !== 'none') { // Showing start page.
    if($('.centered').height() + 30 >= height) {
      $('.start').css('height', '');
      $('.start').css('min-height', height);
    }
    else {
      $('.start').css('height', height);
      $('.start').css('min-height', '');
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

  // Click handler for start page header.
  $('#header-name').click(function(event) {
    event.preventDefault();
    window.location.hash = "content";
    $('.start').css('display','none');
    $('.content').css('display', 'block');
    MassterSite.track(['_trackEvent', 'Start', 'Start-Header']);
    MassterSite.resize();
  });

  // Click handler for start page panels.
  $('.start .panel').click(function() {
    var panelText = $(this).parent().attr('href').substring(1);
    $('.start').css('display','none');
    $('.content').css('display', 'block');
    MassterSite.track(['_trackEvent', 'Start', 'Start-Panel-' + panelText]);
    MassterSite.resize();
  });

  // Click handler for sidebar navigation image.
  $('.content .side-nav-image').click(function(event) {
    event.preventDefault();
    window.location.hash = "";
    $('.content').css('display','none');
    $('.start').css('display', 'block');
    MassterSite.track(['_trackEvent', 'Sidebar', 'Sidebar-Image']);
    MassterSite.resize();
  });

  //Click handler for sidebar email link.
  $('.content #email-link').click(function() {
    MassterSite.track(['_trackEvent', 'Sidebar', 'Sidebar-Email']);
  });

  //Click handler for sidebar social links.
  $('.social-icon-list .social-icon').click(function() {
    var linkText = $(this).children('a').children('i').attr('class').substring(5).replace('-sign','');
    MassterSite.track(['_trackEvent', 'Sidebar', 'Sidebar-Social-' + linkText]);
  });

  $('.side-nav .list-group a').click(function() {
    var linkText = $(this).attr('href').substring(1);
    MassterSite.track(['_trackEvent', 'Sidebar', 'Sidebar-Action-' + linkText]);
  });

  $('.content a').click(function() {
    if($(this).data('id')) {
      MassterSite.track(['_trackEvent', 'Content', 'Content' + $(this).data('id')]);
    }
  });

  $('#footer a').click(function() {
    if($(this).data('id')) {
      MassterSite.track(['_trackEvent', 'Footer', 'Footer' + $(this).data('id')]);
    }
  });

  // Carousel initilization.
  $('#carousel-projects').carousel({
    interval: 3141.5
  });

  MassterSite.resize();
});
