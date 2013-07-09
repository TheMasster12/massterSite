$(document).ready(function() {
    var deck = new $.scrolldeck({
        slides: '.slide_overview',
        buttons: '.nav-button',
        easing: 'easeInOutExpo',
        duration: 1000
    });

    var projectSlider = $("#project-slider").bxSlider({
        controls: false,
        pager: false,
        slideWidth: 200,
        auto: true,
        pause: 2000,
        captions: true
    });

    $(".bx-next").css("right", "-25px");
    $(".bx-prev").css("left", "-25px");
});