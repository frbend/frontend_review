$(document).ready(function(){
    $('.slick__wrapper').slick({
        slidesToShow: 2,
        slidesToScroll: 4,
        centerMode: true,
        arrows: true,
        infinite: true,
        nextArrow: $('.next'),
        prevArrow: $('.prev'),
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 4,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 425,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
              }
            }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
          ]
    });
});