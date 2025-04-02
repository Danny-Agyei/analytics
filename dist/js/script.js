$(document).ready(function () {
    const btnNavMenuTrigger = $("#js-nav-menu-trigger");

    function navMenuToggler() {
        const navMenu = $("#js-nav-menu");
        const hasExpanded = navMenu.hasClass("has-expanded");

        navMenu.toggleClass("has-expanded", !hasExpanded);
        btnNavMenuTrigger.attr("aria-expanded", !hasExpanded);
    }

    btnNavMenuTrigger.on("click", navMenuToggler);


    // Pricing carousel 
    const owlOptions = {
        responsiveClass: true,
        autoPlayTimeout: 1000,
        autoplaySpeed: 1800,
        smartSpeed: 800,
        autoplay: false,
        margin: 30,
        loop: true,
        center: true,
        nav: false,
        dots: false,
        items: 1.5,
        responsive: {
            600: {
                items: 2,
            },
            768: {
                items: 2.5,
                margin: 50,
            },
            800: {
                items: 2.5,
                margin: 50,
            },
            1140: {
                items: 3,
            },
            1280: {
                items: 3,
            },
        },
    };

    function initCarousel() {
        const deviceScreenSize = $(window).width();

        if (deviceScreenSize < 992) {
            $(".owl-carousel").owlCarousel(owlOptions);
        } else {
            $(".owl-carousel").trigger("destroy.owl.carousel");
        }
    }


    initCarousel();
    $(window).resize(initCarousel);

});
