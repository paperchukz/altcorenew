$(document).ready(function() {
  setTimeout(function() {
    $('.index-page .navbar').addClass('fade-in');
  }, 800);

  setTimeout(function() {
    $('.services-page .navbar').addClass('fade-in');
  }, 800);

  setTimeout(function() {
    $('.dev-page .navbar').addClass('fade-in');
  }, 800);

  setTimeout(function() {
    $('.index-page .banner').addClass('fade-in');
  }, 1100);

  setTimeout(function() {
    $('.banner-services').addClass('fade-in');
  }, 1100);

  setTimeout(function() {
    $('.banner-dev').addClass('fade-in');
  }, 1100);

  setTimeout(function() {
    $('.sub-header').addClass('fade-in');
  }, 2000);

  setTimeout(function() {
    $('.dev-title').addClass('top-end');
  }, 1400);

  setTimeout(function() {
    $('.services-banner-title').addClass('left-end');
  }, 1400);

  setTimeout(function() {
    $('.services-banner-text').addClass('right-end');
  }, 1600);

  setTimeout(function() {
    $('.services-banner-box').addClass('fade-in');
  }, 1400);

  setTimeout(function() {
    $('.dev-desc').addClass('top-end');
  }, 1700);

  setTimeout(function() {
    $('.select-profession').addClass('bottom-end');
  }, 2000);

  setTimeout(function() {
    $('.section-1-title').addClass('top-end');
  }, 1500);

  setTimeout(function() {
    $('.section-1-text').addClass('top-end');
  }, 1800);

  $(document).on("scroll", function() {
    if ($(document).scrollTop() > 250) {
      setTimeout(function() {
        $('.section-2-title').addClass('left-end');
      }, 300);

      setTimeout(function() {
        $('.section-2-text').addClass('left-end');
      }, 500);

      setTimeout(function() {
        $('.section-2-button').addClass('left-end');
      }, 700);

      setTimeout(function() {
        $('.section-2-img').addClass('right-end');
      }, 300);
    }

    if ($(document).scrollTop() > 550) {
      setTimeout(function() {
        $('.section-3-title').addClass('right-end');
      }, 300);

      setTimeout(function() {
        $('.section-3-text').addClass('right-end');
      }, 500);

      setTimeout(function() {
        $('.section-3-button').addClass('right-end');
      }, 700);

      setTimeout(function() {
        $('.section-3-img').addClass('left-end');
      }, 300);
    }

    if ($(document).scrollTop() > 1200) {
      setTimeout(function() {
        $('.section-4-title').addClass('left-end');
      }, 800);

      setTimeout(function() {
        $('.section-4-text').addClass('right-end');
      }, 800);

      setTimeout(function() {
        $('.main-1-item-img').addClass('bottom-end');
      }, 1100);

      setTimeout(function() {
        $('.main-1-item-title').addClass('bottom-end');
      }, 800);

      setTimeout(function() {
        $('.main-1-item-text').addClass('bottom-end');
      }, 500);

      setTimeout(function() {
        $('.main-1-item-link').addClass('bottom-end');
      }, 200);

      setTimeout(function() {
        $('.main-2-item-img').addClass('bottom-end');
      }, 1400);

      setTimeout(function() {
        $('.main-2-item-title').addClass('bottom-end');
      }, 1100);

      setTimeout(function() {
        $('.main-2-item-text').addClass('bottom-end');
      }, 800);

      setTimeout(function() {
        $('.main-2-item-link').addClass('bottom-end');
      }, 500);

      setTimeout(function() {
        $('.main-3-item-img').addClass('bottom-end');
      }, 1700);

      setTimeout(function() {
        $('.main-3-item-title').addClass('bottom-end');
      }, 1400);

      setTimeout(function() {
        $('.main-3-item-text').addClass('bottom-end');
      }, 1100);

      setTimeout(function() {
        $('.main-3-item-link').addClass('bottom-end');
      }, 800);

      setTimeout(function() {
        $('.main-4-item-img').addClass('bottom-end');
      }, 2000);

      setTimeout(function() {
        $('.main-4-item-title').addClass('bottom-end');
      }, 1700);

      setTimeout(function() {
        $('.main-4-item-text').addClass('bottom-end');
      }, 1400);

      setTimeout(function() {
        $('.main-4-item-link').addClass('bottom-end');
      }, 1000);
    }

    if($(document).scrollTop()>450){
    	setTimeout(function() {
		    $('.section-download-1-img').addClass('bottom-end');
		  }, 300);

		  setTimeout(function() {
		    $('.section-download-2-img').addClass('top-end');
		  }, 500);

		  setTimeout(function() {
		    $('.section-download-3-img').addClass('bottom-end');
		  }, 700);

		  setTimeout(function() {
		    $('.section-download-1-text').addClass('left-end');
		  }, 500);

		  setTimeout(function() {
		    $('.section-download-2-link').addClass('left-end');
		  }, 900);

		  setTimeout(function() {
		    $('.section-download-3-text').addClass('left-end');
		  }, 900);

		  setTimeout(function() {
		    $('.section-download-1-link').addClass('right-end');
		  }, 700);

		  setTimeout(function() {
		    $('.section-download-2-text').addClass('right-end');
		  }, 700);

		  setTimeout(function() {
		    $('.section-download-3-link').addClass('right-end');
		  }, 1100);
    }

	  if($(document).scrollTop()>300){
		  setTimeout(function() {
		    $('.service-item-1 .service-item-textbox').removeClass('b130');
		  }, 300);

		  setTimeout(function() {
		    $('.service-item-1 .service-item-button').removeClass('b165');
		  }, 600);

		  setTimeout(function() {
		    $('.service-item-2 .service-item-textbox').removeClass('b130');
		  }, 300);

		  setTimeout(function() {
		    $('.service-item-2 .service-item-button').removeClass('b165');
		  }, 600);

		  setTimeout(function() {
		    $('.service-item-3 .service-item-textbox').removeClass('b130');
		  }, 300);

		  setTimeout(function() {
		    $('.service-item-3 .service-item-button').removeClass('b165');
		  }, 600);
	  }

	  if($(document).scrollTop()>2000){
		  setTimeout(function() {
		    $('.row-3-img').addClass('right-end');
		  }, 300);

		  setTimeout(function() {
		    $('.row-3-text').addClass('left-end');
		  }, 600);
	  }

	  if($(document).scrollTop()>1000){
		  setTimeout(function() {
		    $('.service-section-2-title').addClass('bottom-end');
		  }, 300);

		  setTimeout(function() {
		    $('.service-section-2-text').addClass('bottom-end');
		  }, 600);
	  }
  });

  //About US
  setTimeout(function() {
    $('.about-us-nav').addClass('fade-in');
  }, 800);

  setTimeout(function() {
    $('.about-us-bg').addClass('fade-in');
  }, 1100);

  setTimeout(function() {
    $('.about-us-footer').addClass('fade-in');
  }, 1500);

  setTimeout(function() {
    $('.about-us-title').addClass('left-end');
  }, 1800);

  setTimeout(function() {
    $('.about-us-desc').addClass('right-end');
  }, 2100);

  setTimeout(function() {
    $('.service-item-1 .service-item-img').addClass('top-end');
  }, 1300);

  setTimeout(function() {
    $('.service-item-2 .service-item-img').addClass('top-end');
  }, 1600);

  setTimeout(function() {
    $('.service-item-3 .service-item-img').addClass('top-end');
  }, 1900);

});