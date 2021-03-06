'use strict';

$(function () {
    new WOW().init();
    $('body').scrollspy({
        target: '.navbar',
        offset: 0
    });

    $('nav a').bind('click', function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});