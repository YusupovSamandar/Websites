$(document).ready(function () { 

    $('.post-wrapper').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: $('.prev'),
        prevArrow: $('.next')
    });

})