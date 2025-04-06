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

    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 800, // values from 0 to 3000, with step 50ms
        easing: 'ease-in-out', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });
});
