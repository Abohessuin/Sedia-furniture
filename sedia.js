var controller = new ScrollMagic.controller();

var scene = new ScrollMagic.scene({
    triggerElement:'.text'
})

.setClassToggle('.text','show')
.addto(controller);



$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    $(".navbar").css("background" , "red");
	  }

	  else{
		  $(".navbar").css("background" , "#333");  	
	  }
  })
})
})