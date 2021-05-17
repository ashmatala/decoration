$(document).ready(function() {
    $('.accordeon .acc-head').on('click', f_acc);
});
$('.acc-head').on('click', (function(event) {
  event.preventDefault();
  $('.acc-head.active').removeClass('active');
  $(this).addClass('active');
}));
function f_acc(){
  $('.accordeon .acc-body').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(600);
};
$(document).ready(function() {
  $('.btn-tab1').click(function(event) {
      $('.btn-tab1').addClass('active');
  });
  $('.btn-tab2').click(function(event) {
    $('.btn-tab2').addClass('active');
  });
  $('.btn-tab3').click(function(event) {
    $('.btn-tab3').addClass('active');
  });
  $('.btn-tab4').click(function(event) {
    $('.btn-tab4').addClass('active');
  });
  $('.btn-tab5').click(function(event) {
    $('.btn-tab5').addClass('active');
  });
  $('.btn-tab6').click(function(event) {
    $('.btn-tab6').addClass('active');
  });
});
$('.tabs a').on('click', function(event) {
event.preventDefault();
let activeLink = $(this).attr('href');

$('.tabs a.active').removeClass('active');
$('.tab.active').removeClass('active');

$(this).addClass('active');
$(activeLink).addClass('active');
});