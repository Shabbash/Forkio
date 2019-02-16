$(document).ready(function() {

    //////  Owl Carousel ///////////
    $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            smartSpeed: 600,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 1,
                    nav: true
                },
                1000: {
                    items: 1,
                    nav: true,
                    loop: true,
                    dots: false
                }
            }
        });


    /////// Nice Scroll /////////

    $("html").niceScroll();

    ///////// Loading ////////////////

    $(".loading-overlay .spinner").fadeOut(20, function() {

        // Show The Scroll

        $("body").css("overflow", "auto");

        $(this).parent().fadeOut(20, function() {

            $(this).remove();
        });
    });

    ///////// SCROLL TOP BUTTUN ///////

    var scrollButton = $("#scroll-top");
    $(window).scroll(function() {
        //	console.log($(this).scrollTop());
        if ($(this).scrollTop() >= 800) {

            scrollButton.show();

        } else {
            scrollButton.hide();
        }

    });

    scrollButton.click(function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500);
    });


});