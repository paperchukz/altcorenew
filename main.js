$(document).ready(function() {
  setTimeout(function() {
    $('.index-page .navbar').addClass('fade-in');
  }, 800);

  setTimeout(function() {
    $('.index-page .banner').addClass('fade-in');
  }, 1100);

  setTimeout(function() {
    $('.index-page .section1 h2').addClass('move-top');
  }, 1400);

  setTimeout(function() {
    $('.index-page .section1 h5').addClass('move-top');
  }, 1700);

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
  });

});