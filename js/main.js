(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(window).width() > 992) {
            if ($(this).scrollTop() > 45) {
                $('.sticky-top .container').addClass('shadow-sm').css('max-width', '100%');
            } else {
                $('.sticky-top .container').removeClass('shadow-sm').css('max-width', $('.topbar .container').width());
            }
        } else {
            $('.sticky-top .container').addClass('shadow-sm').css('max-width', '100%');
        }
    });

    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav: false,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        autoHeight: false,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);

// Scroll Spy - Highlight nav link on scroll
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    function activateNavLink() {
        const scrollPos = window.scrollY + 100;

        sections.forEach((section) => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            const id = section.getAttribute("id");

            if (scrollPos >= top && scrollPos <= bottom) {
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", activateNavLink);
    activateNavLink(); // Run once on load

    // Manually set active class on nav click
    navLinks.forEach((link) => {
        link.addEventListener("click", function () {
            navLinks.forEach((l) => l.classList.remove("active"));
            this.classList.add("active");
        });
    });
});

// Collapse mobile nav on link click
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".navbar-nav .nav-link").forEach(function (navLink) {
        navLink.addEventListener("click", function () {
            // Don't close if it's a dropdown toggle
            const isDropdownToggle = navLink.classList.contains("dropdown-toggle");
            const isInsideDropdown = navLink.closest(".dropdown-menu");

            if (!isDropdownToggle && !isInsideDropdown) {
                const navbarCollapse = document.querySelector(".navbar-collapse");
                if (navbarCollapse && navbarCollapse.classList.contains("show")) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: true });
                    bsCollapse.hide();
                }
            }
        });
    });
});


// Google Translate Integration
window.googleTranslateElementInit = function () {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        layout: google.translate.TranslateElement.InlineLayout.VERTICAL
    }, 'google_translate_element');
};

// Dynamically load Google Translate script
const loadGoogleTranslate = () => {
    const script = document.createElement('script');
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
};

loadGoogleTranslate();

// Video Modal - Load YouTube video dynamically
const videoModal = document.getElementById("videoModal");
const videoFrame = document.getElementById("videoFrame");

if (videoModal && videoFrame) {
    videoModal.addEventListener("show.bs.modal", function (event) {
        const trigger = event.relatedTarget;
        if (trigger && trigger.getAttribute("data-video-url")) {
            const videoURL = trigger.getAttribute("data-video-url");
            videoFrame.src = `${videoURL}?autoplay=1&modestbranding=1`;
        }
    });

    videoModal.addEventListener("hidden.bs.modal", function () {
        videoFrame.src = "";
    });
}



