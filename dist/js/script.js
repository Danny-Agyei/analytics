$(document).ready(function () {
    const btnNavMenuTrigger = $("#js-nav-menu-trigger");

    function navMenuToggler() {
        const nav = $("#nav-main");
        const navMenu = $("#js-nav-menu");
        const hasExpanded = nav.hasClass("has-expanded");

        nav.toggleClass("has-expanded", !hasExpanded);
        btnNavMenuTrigger.attr("aria-expanded", !hasExpanded);
    }

    btnNavMenuTrigger.on("click", navMenuToggler);

    function stickyHeader() {
        const siteHeader = $('#js-site-header');

        const amountScrolled = $(window)[0].pageYOffset;

        if (amountScrolled > 0) {
            siteHeader.addClass('site-header--sticky')
        } else {
            siteHeader.removeClass('site-header--sticky')
        }
    }


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
                items: 3,
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

    stickyHeader()
    initCarousel();

    $(window).resize(initCarousel);
    $(window).on('scroll', stickyHeader);

});
