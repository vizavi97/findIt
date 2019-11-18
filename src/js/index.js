import $ from "jquery";
import popper from "popper.js";
import bootstrap from "bootstrap";

$(function () {
  jQuery("body").css("color", "blue");
});
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
  }
  else {
    $(document).find('.header').addClass('mobile');
    $(document).find('body').addClass('overflow');

  }
});

