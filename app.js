$(document).ready(function() {

  $('.tool-cards div').mouseenter(function() {
    $(this).css('background-color', 'transparent');
  });

  $('img[role="button"]').mouseenter(function() {
    $(this).css('opacity', '.7');
  });

  $('img[role="button"]').mouseleave(function() {
    $(this).css('opacity', '1');
  });

  //-------mouse enter display widgets-----

  $('.first-tool').mouseenter(function() {
    // $(this).css('background-color', 'transparent');
    $('.wiki img').css('visibility', 'visible');
    $('#samurai img').css('visibility', 'hidden');
  });

  $('.second-tool').mouseenter(function() {
    $('.builder img').css('visibility', 'visible');
    $('#dustari img').css('visibility', 'hidden');
  });

  $('.third-tool').mouseenter(function() {
    $('.gmap img').css('visibility', 'visible');
    $('#pirate img').css('visibility', 'hidden');
  });

  $('.fourth-tool').mouseenter(function() {
    $('.stats img').css('visibility', 'visible');
    $('#zorm img').css('visibility', 'hidden');
  });

  $('.fifth-tool').mouseenter(function() {
    $('.trash img').css('visibility', 'visible');
    $('#forest img').css('visibility', 'hidden');
  });

  //---------end code block----------------

  //--------mouse leave code--------------


  $('.first-tool').mouseleave(function() {
    $(this).css('background-color', '#ffffff');
    $('.wiki img').css('visibility', 'hidden');
    $('#samurai img').css('visibility', 'visible');
  });

  $('.second-tool').mouseleave(function() {
    $(this).css('background-color', '#ffffff');
    $('.builder img').css('visibility', 'hidden');
    $('#dustari img').css('visibility', 'visible');
  });

  $('.third-tool').mouseleave(function() {
    $(this).css('background-color', '#ffffff');
    $('.gmap img').css('visibility', 'hidden');
    $('#pirate img').css('visibility', 'visible');
  });

  $('.fourth-tool').mouseleave(function() {
    $(this).css('background-color', '#ffffff');
    $('.stats img').css('visibility', 'hidden');
    $('#zorm img').css('visibility', 'visible');
  });

  $('.fifth-tool').mouseleave(function() {
    $(this).css('background-color', '#ffffff');
    $('.trash img').css('visibility', 'hidden');
    $('#forest img').css('visibility', 'visible');
  });

  //-----------on click events-----------

  $('.instagram img').click(function() {
    window.open('https://www.instagram.com/arrieoliver/?hl=en');
  });

  $('.email img').click(function() {
    window.open('https://www.google.com/');
  });


  //------close modal--------
  var modal = $('.modal');
  var closeButton = $(".close");

  //------about modal---------
  var leftArrow = $('a.carousel-prev');
  var rightArrow = $('a.carousel-next');

  var aboutModal = $('#about-modal');
  var aboutButton = $(".about img");

  $(aboutButton).click(function() {
    $(aboutModal).css('display', 'block');
  });

  //------review modal---------

  var reviewModal = $('#review-modal');
  var reviewButton = $(".reviews img");

  $(reviewButton).click(function() {
    $(reviewModal).css('display', 'block');
    $('.review-slide').eq(0).css('display', 'block');
  });

  //------gallery modal---------

  var galleryModal = $('#gallery-modal');
  var galleryButton = $(".gallery img");

  $(galleryButton).click(function() {
    $(galleryModal).css('display', 'block');
  });

  $(leftArrow).click(function() {
    var slideCounter = 0;
    $('.review-slide.active').removeClass('active');
    $('.review-slide')
    $('.review-slide').eq(2).toggleClass('active');
  });

  $(rightArrow).click(function() {
    $('.review-slide').eq(0).toggleClass('active');
    $('.review-slide').eq(1).toggleClass('active');
  });

  //-----carousel buttons-----


  $(closeButton).click(function() {
    $(modal).css('display', 'none');
  });

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      console.log('stuff');
    }
  }
});