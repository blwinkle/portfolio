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
//Function to the css rule
/*function checkSize(){
    if ($(".checksize").css("width") == "2px" ){
        $("#headerimage").attr("src","portimages/portfolioHeader2Less500.png");
    } else if ($(".checksize").css("width") == "5px" ){
        $("#headerimage").attr("src","portimages/portfolioHeader2Less500.png");
    } else if ($(".checksize").css("width") == "7px" ){
        $("#headerimage").attr("src","portimages/portfolioHeader2over500.png");
    } else {
      $("#headerimage").attr("src","portimages/portfolioHeader2.png");
    } 
};*/

function checkSize(){
    if ($(window).width() < 700 ){
        $("#headerimage").attr("src","portimages/portfolioHeader2Less500.png");
    } else if ($(window).width() < 1000 ){
        $("#headerimage").attr("src","portimages/portfolioHeader2over500.png");
    } else {
        $("#headerimage").attr("src","portimages/portfolioHeader2.png");
    } 
};

  $(document).ready(function(){
    lightbox();
//    viewResume();
    viewport();
// run test on initial page load
    checkSize();
      
    $('#res').click(function(){
        
        $('.showhide').text(function(i, v){
        return v === '+ show' ? '- hide' : '+ show'
        });
        
        $('.col2', this).slideToggle('slow');        
        $('.showhide').toggleText();
        
        
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
// run test on resize of the window
    $(window).resize(checkSize); 

/*$(window).resize(function(){
    if ($(".checksize").css("width") == "2px" ){
        $(".checksize").text("portimages/portfolioHeader2Less500.png");
    } else if ($(".checksize").css("width") == "5px" ){
        $(".checksize").text("portimages/portfolioHeader2Less500.png");
    } else if ($(".checksize").css("width") == "7px" ){
        $(".checksize").text("portimages/portfolioHeader2over500.png");
    } else {
      $(".checksize").text("portimages/portfolioHeader2.png");
    } 
});*/