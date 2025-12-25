(function ($) {
  "use strict"

  /* 1. Proloder */
  $(window).on('load', function () {
    $('#preloader-active').delay(450).fadeOut('slow');
    $('body').delay(450).css({
      'overflow': 'visible'
    });
  });


  /* 2. slick Nav */
  // mobile_menu
  var menu = $('ul#navigation');
  if (menu.length) {
    menu.slicknav({
      prependTo: ".mobile_menu",
      closedSymbol: '+',
      openedSymbol: '-'
    });
  };


  /* 3. MainSlider-1 */
  function mainSlider() {
    var BasicSlider = $('.slider-active');
    BasicSlider.on('init', function (e, slick) {
      var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
      doAnimations($firstAnimatingElements);
    });
    BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
      var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
      doAnimations($animatingElements);
    });
    BasicSlider.slick({
      autoplay: true,
      autoplaySpeed: 6000,
      dots: false,
      fade: true,
      arrows: false,
      prevArrow: '<button type="button" class="slick-prev"><i class="ti-shift-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="ti-shift-right"></i></button>',
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
      ]
    });

    function doAnimations(elements) {
      var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      elements.each(function () {
        var $this = $(this);
        var $animationDelay = $this.data('delay');
        var $animationType = 'animated ' + $this.data('animation');
        $this.css({
          'animation-delay': $animationDelay,
          '-webkit-animation-delay': $animationDelay
        });
        $this.addClass($animationType).one(animationEndEvents, function () {
          $this.removeClass($animationType);
        });
      });
    }
  }
  mainSlider();



  /* 4. Testimonial Active*/
  var testimonial = $('.h1-testimonial-active');
  if (testimonial.length) {
    testimonial.slick({
      dots: false,
      infinite: true,
      speed: 1000,
      autoplay: true,
      loop: true,
      arrows: false,
      prevArrow: '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrow: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        }
      ]
    });
  }


  /* 5. Gallery Active */
  var client_list = $('.gallery-active');
  if (client_list.length) {
    client_list.owlCarousel({
      slidesToShow: 9,
      slidesToScroll: 1,
      loop: true,
      autoplay: true,
      speed: 2000,
      smartSpeed: 1000,
      nav: false,
      dots: false,
      margin: 0,

      autoplayHoverPause: true,
      responsive: {
        0: {
          nav: false,
          items: 2,
        },
        768: {
          nav: false,
          items: 8,
        }
      }
    });
  }

  /* 6. Nice Selectorp  */
  var nice_Select = $('select');
  if (nice_Select.length) {
    nice_Select.niceSelect();
  }

  /* 7.  Custom Sticky Menu  */
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $(".header-sticky").removeClass("sticky-bar");
    } else {
      $(".header-sticky").addClass("sticky-bar");
    }
  });

  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $(".header-sticky").removeClass("sticky");
    } else {
      $(".header-sticky").addClass("sticky");
    }
  });



  /* 8. sildeBar scroll */
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="ti-arrow-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });


  /* 9. data-background */
  $("[data-background]").each(function () {
    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
  });


  /* 10. WOW active */
  new WOW().init();

  /* 11. Datepicker */

  // 11. ---- Mailchimp js --------//  
  function mailChimp() {
    $('#mc_embed_signup').find('form').ajaxChimp();
  }
  mailChimp();


  // 12 Pop Up Img
  var popUp = $('.single_gallery_part, .img-pop-up');
  if (popUp.length) {
    popUp.magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  }

  /* 14. counterUp*/
  // $('.counter').counterUp({
  //   delay: 10,
  //   time: 3000,
  // });

  //Another popUp     
  var popUp = $('.menorie-icon');
  if (popUp.length) {
    popUp.magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  }
  // 

  //Brand Active
  $('.brand-active').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  document.addEventListener('DOMContentLoaded', (event) => {
    // --- Date and Position Parameters ---
    const totalSteps = 63;
    const finalLeftPercent = 88; // Max target
    
    const startDate = new Date('November 15, 2025 00:00:00'); 
    const endDate = new Date('January 17, 2026 00:00:00');
    
    const now = new Date(); 
    
    // Calculate the movement per step (for 63 intervals/days)
    const percentPerStep = finalLeftPercent / (totalSteps - 1); 

    let calculatedCurrentPercent = 0;

    // --- Calculation Logic ---
    if (now.getTime() >= endDate.getTime()) {
        // If the timeline is over, the position is the final position (88%)
        calculatedCurrentPercent = finalLeftPercent; 
    } else if (now.getTime() >= startDate.getTime()) {
        // If within the timeline, calculate based on days passed
        const oneDay = 1000 * 60 * 60 * 24;
        const diffTime = now.getTime() - startDate.getTime();
        const daysPassed = Math.floor(diffTime / oneDay);
        
        // Calculate the current day's static position
        calculatedCurrentPercent = Math.min(daysPassed * percentPerStep, finalLeftPercent);
    } 
    // Otherwise, calculatedCurrentPercent remains 0 (before start date)
    
    // --- Intersection Observer Logic ---
    const wrapperElement = document.querySelector('.count-down-area .count-down-wrapper');

    if (!wrapperElement) {
        console.error('Wrapper element not found.');
        return;
    }

    // --- Set CSS Variables ---
    const positionValue = calculatedCurrentPercent.toFixed(2) + '%';
    
    // 1. Set the static position (where the runner lands and stays)
    wrapperElement.style.setProperty('--runner-current-position', positionValue);
    
    // 2. Set the animation end-point (where the runner hops to)
    wrapperElement.style.setProperty('--runner-end-step', positionValue);
    
    
    // If we're already at the end, we don't need to observe or animate.
    if (calculatedCurrentPercent >= finalLeftPercent) {
        return;
    }
    
    // The rest of the Intersection Observer is used to trigger the animation ONCE.
    const observerOptions = {
        root: null,
        rootMargin: '0px', 
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the class to start the animation
                entry.target.classList.add('is-visible');
                
                // Stop observing
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(wrapperElement);
});



})(jQuery);
