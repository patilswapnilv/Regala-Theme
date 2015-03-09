/*
*   Background picture
*/

jQuery(document).ready(function($) {
  $('body:not(.single):not(.page) .hentry')
    .height($(window).height())
    .width($(window).width());
  $(window).resize(function() {
    $('body:not(.single):not(.page) .hentry')
        .height($(window).height())
        .width($(window).width());
  });
});
