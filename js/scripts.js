/*- question-modal -*/
$('#btn-question').click(function() {
  $('.question-modal').addClass('show');
  $('body').addClass('o-hidden');
});

$('.question-modal__close-btn').click(function() {
  $('.question-modal').removeClass('show');
  $('body').removeClass('o-hidden');
});