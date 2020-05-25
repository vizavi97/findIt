import $ from "jquery";
import bootstrap from 'bootstrap';
import fancybox from 'fancybox';
import knob from 'jquery-knob';
import Datepicker from './datepicker';
import noUiSlider from "nouislider"

$(document).on('click', '.bg-btn', function () {
  if ($('#bg').prop("checked")) {
    $(document).find("body").removeClass('tpl');
  } else {
    $(document).find('body').addClass('tpl');
  }
});
$(document).on('click', '.mobile-checkbox', function () {
  // $(document).find(".header").addClass('mobile');
  if ($('#mobile-menu').prop("checked")) {
    $(document).find(".header").removeClass('mobile');
    $(document).find('body').removeClass('overflow');
  } else {
    $(document).find('.header').addClass('mobile');
    $(document).find('body').addClass('overflow');

  }
});
$(document).on('click', '.find-job-right-sort-item-data', function () {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active')
  } else {
    $(this).addClass('active')
  }
});
$(document).on('click', '.find-job-right-sort-item-time', function () {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active')
  } else {
    $(this).addClass('active')
  }
});
$(document).on('click', '.find-job-right-sort-item-remote', function () {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active')
  } else {
    $(this).addClass('active')
  }
});
$(document).on('click', '.applications-sort-item-rating', function () {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active')
  } else {
    $(this).addClass('active')
  }
});
$(document).on('click', '.applications-sort-item-reviews', function () {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active')
  } else {
    $(this).addClass('active')
  }
});
$(document).on('click', '.applications-sort-item-time', function () {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active')
  } else {
    $(this).addClass('active')
  }
});
$(document).on('click', '.cabinet-category-operation-sort-item-all', function () {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active')
  } else {
    $(this).addClass('active')
  }
});
$(document).on('click', '.cabinet-category-operation-sort-item-replenishment', function () {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active')
  } else {
    $(this).addClass('active')
  }
});
$(document).on('click', '.cabinet-category-operation-sort-item-offs', function () {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active')
  } else {
    $(this).addClass('active')
  }
});
$(document).on('click', '.sideFilterMenu', function () {
  if ($('#sideFilter-menu').prop('checked')) {
    $(document).find('.find-job-left').css('display', 'flex')
  } else {
    $(document).find('.find-job-left').css('display', 'none')

  }
});

/*Modal menu*/

$(document).ready(function ($) {
  /*First*/
  // Клик по кнопке для открытия модального окна
  $('.edit-btn').click(function () {
    $(document).find('.modal-window-container').fadeIn();
    $(document).find('body').addClass('overflow');
  });
  // Клик по ссылке "Закрыть".
  $('.modal-window-close').click(function () {
    $(this).parents('.modal-window-container').fadeOut();
    $(document).find('body').removeClass('overflow');
    return false;
  });
  // Закрытие по клавише Esc.
  $(document).keydown(function (e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $('.modal-window-container').fadeOut();
      $(document).find('body').removeClass('overflow');
    }
  });
  // Клик по фону, но не по окну.
  $('.modal-window-container').click(function (e) {
    if ($(e.target).closest('.modal-window').length == 0) {
      $(document).find('body').removeClass('overflow');
      $(this).fadeOut();
    }
  });
  /*EndFirst*/
});

/*Portfolio*/

$(document).ready(function () {

  $(document).on('click', '.profile-category-example-image', function () {
    let rel = $(this).attr('rel');
    $(document).find('.portfolio-modal-item').each(function () {
      if ($(this).attr('rel') === rel) {
        $(this).css('display', 'flex');
        $(document).find('.portfolio-modal').fadeIn();
        $('body').addClass('overflow');
      } else {
        $(this).css('display', 'none');
      }
    });
  });

  // Клик по ссылке "Закрыть".
  $('.portfolio-modal-close').click(function () {
    $(this).parents('.portfolio-modal').fadeOut();
    $(document).find('body').removeClass('overflow');
    return false;
  });
  // Закрытие по клавише Esc.
  $(document).keydown(function (e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $('.portfolio-modal').fadeOut();
      $(document).find('body').removeClass('overflow');
    }
  });
  // Клик по фону, но не по окну.
  $('.portfolio-modal').click(function (e) {
    if ($(e.target).closest('.portfolio-modal-container').length == 0) {
      $(document).find('body').removeClass('overflow');
      $(this).fadeOut();
    }
  });
});

/*Profile Menus*/

$(document).on('click', '.profile-menu-item', function () {
  let rel = $(this).attr('rel');
  $(document).find('.profile-menu-item').each(function () {
    if ($(this).attr('rel') === rel) {
      $(this).addClass('active-menu');
    } else {
      $(this).removeClass('active-menu');
    }
  });
  $(document).find('.profile-category-item').each(function () {
    if ($(this).attr('rel') === rel) {
      // $(this).addClass('active-category');
      $(this).addClass('active-category');
    } else {
      $(this).removeClass('active-category');
    }
  });
});

$(document).on('click', '.cabinet-menu-item', function () {
  let rel = $(this).attr('rel');
  $(document).find('.cabinet-menu-item').each(function () {
    if ($(this).attr('rel') === rel) {
      $(this).addClass('active-menu');
    } else {
      $(this).removeClass('active-menu');
    }
  });
  $(document).find('.cabinet-category').each(function () {
    if ($(this).attr('rel') === rel) {
      // $(this).addClass('active-category');
      $(this).addClass('active-category');
    } else {
      $(this).removeClass('active-category');
    }
  });
});

/* Knob rectangle rating */
$(function () {
  $('.dial').knob({
    'lineCap': 'round',
    'width': 130,
    'height': 130,
    "fgColor": "#feb627",
    "font": "SF Pro Display",
    "font-size": "26px",
    'inputColor': "#000",
    'min': 0,
    'max': 100
  });
});
/**/

document.querySelector("input").addEventListener("change", function () {
  if (this.files[0]) {
    var fr = new FileReader();

    fr.addEventListener("load", function () {
      document.querySelector("label").style.backgroundImage = "url(" + fr.result + ")";
    }, false);

    fr.readAsDataURL(this.files[0]);
  }
});

/*Date-Picker*/
var datepicker = new Datepicker('#datepicker',{
  time: true
});
/**/

/*ADD and CLOSE address in CREATE_TASK*/

$(document).ready(function () {
  let index = Number($('.createTask-main-form-address-item:last').attr('rel'));
  let first = $('.createTask-main-form-address-item:first');
  let parEnt = first.html();
  const max = 4;
  $(document).on('click', '.address-addButton', function () {
    if (index < max) {
      index++;
      $('.createTask-main-form-address-item:last').after('<div class="createTask-main-form-address-item" rel="' + index + '">' + parEnt.replace(/0(?=])/g, index)  + '');
    }
  });
  $(document).on('click', '.address-close', function () {
    index--;
    $(this).parents('.createTask-main-form-address-item').remove();
  });
});
/**/

/*Input type Range*/
var priceRange = document.getElementById('price-range');

noUiSlider.create(priceRange, {
  start: [2500000],
  step: 50000,
  range: {
    'min': [0],
    'max': [5000000]
  }
});
var priceRangeValueElement = document.getElementById('price-value');

priceRange.noUiSlider.on('update', function (values, handle) {
  priceRangeValueElement.innerHTML = values[handle];
});
/*End Input type Range*/