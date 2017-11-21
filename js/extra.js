// Hello.
//
// This is The Scripts used for ___________ Theme
//
//

function main() {

(function () {
   'use strict';

   /*====================================
    Page a Link Smooth Scrolling 
    ======================================*/
    $('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 900);
            return false;
          }
        }
      });

    /*====================================
    Menu Active Calling Scroll Spy
    ======================================*/
    $('body').scrollspy({ 
      target: '.navmenu',
      offset: 80,
    });


    /* ==============================================
	Testimonial Slider
	=============================================== */ 

	$(document).ready(function() {
	 
	  // $("#testimonial").owlCarousel({
	 
	  //     autoPlay: true,
    //     loop: true,
    //     slideSpeed : 300,
    //     paginationSpeed : 400,
    //     singleItem:true,
    //     autoPlay:3000,
    //     stopOnHover:false,
    //     goToFirstSpeed:2000,
    //     controls: false
	  //     // "singleItem:true" is a shortcut for:
	  //     // items : 1, 
	  //     // itemsDesktop : false,
	  //     // itemsDesktopSmall : false,
	  //     // itemsTablet: false,
	  //     // itemsMobile : false
	 
    // });
    
  // When the DOM is ready, run this function
    //Set the carousel options
    $('#quote-carousel').carousel({
      pause: true,
      interval: 4000,
      items: 1
    });

	});


}());


}
main();