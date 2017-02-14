var lightbox = function(){
    $('div.lbTrigger').click (
      function() {
	$('div.lbOverlay', this).slideToggle();
          $('.lbContent img').toggleClass('pretty');
      });
    $('div.lbTrigger').click (
      function(event) {
	event.preventDefault();
    
      });
  };

/*var viewResume = function(){
    $('div#nav').click(
      function(){
	$('#res').slideToggle('slow');
      });
   
  };*/

/*var viewResume = function(){
    $('div#nav').click(
      function(){
	$('#res').toggleClass('block');
          $('#res').toggleClass('group');
          $('#res').toggleClass('hide');
      });
   
  };*/

var viewport = function(){
    $('div.lbTrigger').hover(
      function(){
	$(this).toggleClass('imgHover');
      });

  };

  $(document).ready(function(){
    lightbox();
//    viewResume();
    viewport();
      
    $('#res').click(function(){
        $('p', this).slideToggle('slow');
    });
	  
	      jQuery(function($){
 // Touch Device Detection 
		      var isTouchDevice = 'ontouchstart' in document.documentElement; 
		      if( isTouchDevice ) {  
			      $('body').removeClass('no-touch');
			      $('body').addClass('touch');		
      }
    });
      
  });


