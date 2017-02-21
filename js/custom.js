jQuery(document).ready(function($){

/*==========================*/
/* Page Animation */
/*==========================*/

 if($(".animsition").length){
	$(".animsition").animsition({
	inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 800,
	linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
	  });
	}

/*==========================*/
/* Main Navigation */
/*==========================*/

	(function() {
		var menuEl = document.getElementById('ml-menu'),
			mlmenu = new MLMenu(menuEl, {
				// breadcrumbsCtrl : true, // show breadcrumbs
				  initialBreadcrumb : 'Menu', // initial breadcrumb text
				backCtrl : true, // show back button
				// itemsDelayInterval : 60, // delay between each menu item sliding animation

			});

		// mobile menu toggle
		var openMenuCtrl = document.querySelector('.action--open'),
			closeMenuCtrl = document.querySelector('.action--close');

		openMenuCtrl.addEventListener('click', openMenu);
		closeMenuCtrl.addEventListener('click', closeMenu);

		function openMenu() {
			classie.add(menuEl, 'menu--open');
		}

		function closeMenu() {
			classie.remove(menuEl, 'menu--open');
		}

		// simulate grid content loading
		var gridWrapper = document.querySelector('.content');


	})();


 /*==========================*/
/* Animation on Scroll */
/*==========================*/

function onScrollInit( items, trigger ) {
  items.each( function() {
    var osElement = jQuery(this),
        osAnimationClass = osElement.attr('data-os-animation'),
        osAnimationDelay = osElement.attr('data-os-animation-delay');

        osElement.css({
          '-webkit-animation-delay':  osAnimationDelay,
          '-moz-animation-delay':     osAnimationDelay,
          'animation-delay':          osAnimationDelay
        });

        var osTrigger = ( trigger ) ? trigger : osElement;

        osTrigger.waypoint(function() {
          osElement.addClass('animated').addClass(osAnimationClass);
          },{
              triggerOnce: true,
              offset: '90%'
        });
  });
}

 onScrollInit( jQuery('.os-animation') );
 onScrollInit( jQuery('.staggered-animation'), jQuery('.staggered-animation-container') );
/*==========================*/
/* Parallax effect */
/*==========================*/
$('.parallax').sparallax();


/*==========================*/
/* Other Sliders */
/*==========================*/
 $('.simple-slider').slick({
  dots: false,
  autoplay: true,
  autoplaySpeed: 6000,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});

$('.project-slider').slick({
  dots: false,
  autoplay: true,
  autoplaySpeed: 6000,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true
});


$('.client-list').slick({
	centerMode: false,
	slidesToShow: 6,
	slidesToScroll: 6,
	autoplay: true,
	speed: 300,
	autoplaySpeed: 4000,
	adaptiveHeight: false,
	dots: true,
	arrows: false,
	fade:false,
	responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 5,
		slidesToScroll: 5,
      }
    },
	{
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
		slidesToScroll: 3,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
		slidesToScroll: 2,
      }
    }
  ]
});


$('.testimonial-list').slick({
  dots: true,
  autoplay: true,
  autoplaySpeed: 6000,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  arrows:false,
  fade:true

});

/*==========================*/
/* Share */
/*==========================*/
$('.share-trigger').click(function(){
	$(this).closest('.share-box').toggleClass('active');
	return false;
});
/*==========================*/
/* Animated Number  */
/*==========================*/
$(window).scroll(function() {
if ($('ul.stat-list li').length) {
       $('ul.stat-list li').not('.animated').each(function(){
  if( $(window).scrollTop() >= $(this).offset().top-$(window).height() ) {
	   $(this).addClass('animated').find('.timer').countTo({
  from: 0,
    });
  }
 });
}
});

$(window).scroll(function() {
if ($('ul.skill-list li h6 b').length) {
       $('ul.skill-list li h6 b').not('.animated').each(function(){
  if( $(window).scrollTop() >= $(this).offset().top-$(window).height() ) {
	   $(this).addClass('animated').find('.timer').countTo({
  from: 0,
    });
  }
 });
}
});

/*==========================*/
/* Animated Bar  */
/*==========================*/
$('.bar-fill').waypoint({
	handler: function() {
      $(this).not('.animated').each(function() {
	  $(this).animate({
		  width: $(this).attr('data-percent')
      }, 500);
	 $(this).addClass('animated');
            });
        },
        offset: '99%'
});

/*==========================*/
/* Masonry */
/*==========================*/
$(function () {
	var self = $("#masonry");

	self.imagesLoaded(function () {
		self.masonry({
			gutterWidth: 15,
			isAnimated: true,
			itemSelector: ".grid-item"
		});
	});

	$("ul.project-category li a").click(function(e) {
		e.preventDefault();
		$('ul.project-category li a').removeClass('active');
		$(this).addClass('active');
		var filter = $(this).attr("data-filter");

		self.masonryFilter({
			filter: function () {
				if (!filter) return true;
				return $(this).attr("data-filter") == filter;
			}
		});
	});
});

/*==========================*/
/* Lighbox */
/*==========================*/


$('.project-slider').magnificPopup({
  delegate: '.pop-image', // child items selector, by clicking on it popup will open
  type: 'image',
  // other options
  gallery: {
  enabled: true,
  preload: [0,2],
  removalDelay: 300,
  navigateByImgClick: true,
  titleSrc: 'title',
  arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

  tPrev: 'Previous (Left arrow key)', // title for left button
  tNext: 'Next (Right arrow key)', // title for right button
  tCounter: '' // markup of counter
}
});



/*==========================*/
/* Form Validation */
/*==========================*/
$("#messageForm").validate({
	submitHandler: function(form) {
		$(form).ajaxSubmit({
			type: "POST",
			// data: $(form).serialize(),
			url: "https://formspree.io/projects@lev.geek.nz",
            dataType: "json",
			success: function() {
				$('#messageForm').addClass('hide');
				$('#messageForm').fadeTo("slow", 0.15, function() {
					$('#success').fadeIn();

				});
			},
			error: function() {
				$('#messageForm').addClass('hide');
				$('#messageForm').fadeTo("slow", 0.15, function() {
					$('#error').fadeIn();

				});
			}
		});
	}
});


/*==========================*/
/* Submitting text show */
/*==========================*/
jQuery(document).ajaxStart(function () {
 $( ".loading" ).show();
}).ajaxStop(function () {
 $( ".loading" ).hide();
});

/*==========================*/
/* Google Map */
/*==========================*/
	if($('#map-canvas').length != 0){
		var map;
		function initialize() {
			var mapOptions = {
				zoom: 15,
				scrollwheel: false,
			 	center: new google.maps.LatLng(25.932884, 83.569633),
			 	styles: [
							{"stylers": [{ hue: "#ffffff" },
							{ saturation: -100 },
							{ lightness: -30 }]},
    					{
					      "featureType": "road",
					      "elementType": "labels",
					      "stylers": [{"visibility": "off"}]
					    },
					    {
					      "featureType": "road",
					      "elementType": "geometry",
					      "stylers": [{"lightness": 100},
					            {"visibility": "simplified"}]
					    }
			 	]
			};
			map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
			var image = 'images/map-marker.png';
			var myLatLng = new google.maps.LatLng(25.932884, 83.569633);
			var beachMarker = new google.maps.Marker({
				position: myLatLng,
				map: map,
				icon: image
			 });
		}

		google.maps.event.addDomListener(window, 'load', initialize);
	}


});
