$(document).ready(function(){

	//Parallax On Big Displays
	if ( $(window).width() > 739) {
		var $navBar = $('.navBar');
		var $win = $(window);
		/*
		//Fixed Navigation Bar
		$win.on('scroll', function() {
			var top = $win.scrollTop();
			$navBar.css('top', '' + top + 'px');
			console.log(top);
		});
		*/

		//Parallax Hello
		var $hello = $('.hello');

		$win.on('scroll', function() {
			var top1 = $win.scrollTop()/2;
			$hello.css('margin-top', '' + top1 + 'px');
		});

		//Parallax Skills Box
		var $skills = $('.skills');

		$win.on('scroll', function() {
			var top = $win.scrollTop()/4;
			//var vh = $(window).height();
			//ar past = (top - vh) / 3;
			$skills.css('margin-top', '' + top + 'px');
		});
	}

	//Smooth Scrolling Between Links
	$("a").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			},1000, function(){
				window.location.hash = hash;
			});
		}
	});

	//Smooth Mouse Wheel Settings
	SmoothScroll({
		touchpadSupport: true,
	});

	//Change .scrollbutton position on scroll
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 100) {
	   		$(".scroll").css("bottom", "-50px");
			$(".scroll2").css("bottom", "-50px");
		}
		else {
	   		$(".scroll").css("bottom", "20px");
			$(".scroll2").css("bottom", "20px");
		}
	});

	//Disable X Scroll
	$(function() {

	    var $body = $(document);
	    $body.bind('scroll', function() {
	        // "Disable" the horizontal scroll.
	        if ($body.scrollLeft() !== 0) {
	            $body.scrollLeft(0);
	        }
	    });

	}); 

});