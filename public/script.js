"use strict";

const V2 = {
  init() {},

  header() {
    var nav = $('.site-header__nav');
    $('.site-header__nav-toggle, .site-header__nav-close').on('click', function (e) {
      e.preventDefault();
      console.log('click');
      nav.toggleClass('site-header__nav--active');

      if (nav.hasClass('site-header__nav--active')) {
        $('body').css({
          overflow: 'hidden'
        });
      } else {
        $('body').css({
          overflow: ''
        });
      }
    });
  },

  hero() {
    var swiper = new Swiper('.swiper-hero', {
      direction: 'vertical',
      loop: true,
      initialSlide: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });
  },

  projects() {
    var options = {
      pagination: '.swiper-pagination',
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        576: {
          slidesPerView: 2.1,
          spaceBetween: 16
        },
        768: {
          slidesPerView: 3.1,
          spaceBetween: 16
        },
        1024: {
          slidesPerView: 4.1,
          spaceBetween: 16
        },
        1400: {
          slidesPerView: 5.1,
          spaceBetween: 16
        }
      }
    };
    $('.swf').each(function () {
      var _this = $(this);

      var swiper = new Swiper('.swf__swiper', options);

      _this.find('.swf__filter-item').on('click', function (e) {
        e.preventDefault();
        var filter = $(this).data('filter');
        $(this).addClass('is-active').siblings().removeClass('is-active');

        if (filter == 'all') {
          _this.find('[rel="swf-slide"]').removeClass('is-hidden').addClass('swiper-slide').show();

          swiper.update();
        } else {
          _this.find('[rel="swf-slide"]').not("[data-filter='".concat(filter, "']")).addClass('is-hidden').removeClass('swiper-slide').hide();

          _this.find("[rel=\"swf-slide\"][data-filter='".concat(filter, "']")).removeClass('is-hidden').addClass('swiper-slide').show();

          swiper.update();
        }
      });
    });
  }

};
$(document).ready(function () {
  V2.init();
  V2.header();
  V2.hero();
  V2.projects();
});