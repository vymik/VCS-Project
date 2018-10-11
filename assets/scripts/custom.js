$(document).ready(function(){
	console.log("pavyko");
// ######## BURGER MENU START ############
$('.burger').click(function(){
  $('.nav').animate(toggleClass('show'));
});
// ######## BURGER MENU END ############

// ######## OWL CAROUSEL START #########
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
// ######## OWL CAROUSEL END #########

// #########SMOOTH SCROLLING START##########
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
// #########SMOOTH SCROLLING END##########

//#########Change menu bar backgorund on scroll#########
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 800) {
        $(".top-menu, .top-menu ul li a, .burger i").addClass("menugrey");
    } else {
        $(".top-menu, .top-menu ul li a, .burger i").removeClass("menugrey");
    }
});
// ########Change menu bar backgorund on scroll END############

var sections = $('section')
  , nav = $('.top-menu')
  , nav_height = nav.outerHeight();
 
$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
 
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
 
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
 
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');

    }
  });
});
// ############################

$('#clock').countdown('2019/09/07').on('update.countdown', function(event) {
  var $this = $(this).html(event.strftime(''
    + '<h2>WE ARE GETTING HITCHED IN:</h2>'
    + '<span>%-w</span> week%!w '
    + '<span>%-d</span> day%!d '
    + '<span>%H</span> hr '));
});



});
