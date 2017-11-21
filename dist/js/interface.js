$(document).ready(function() {
	flexibility(document.documentElement);
	//document.body.classList.remove('no-js');


	// init
	// var controller = new ScrollMagic.Controller();

	// // loop 
	// $('.reveal_main').each(function() {
	//       var loaderInit = new TimelineMax();

	//       // tween variables
	//       if ($(this).hasClass('left')) {
	//         var imgSet = 20,
	//           imgBlockFrom = -101,
	//           imgBlockTo = 101,
	//           contTextSet = -30,
	//           textBlockStaggerFrom = 101,
	//           textBlockStaggerTo = -101;
	//       } else {
	//         var imgSet = -20,
	//           imgBlockFrom = 101,
	//           imgBlockTo = -101,
	//           contTextSet = 30,
	//           textBlockStaggerFrom = -101,
	//           textBlockStaggerTo = 101;
	//       }
	  
	// // build a tween
	//   loaderInit
	//     .set($(this).find('.reveal_cont-img'), {autoAlpha:1,xPercent:imgSet},0)
	//     .from($(this).find('.reveal_block-img'), 0.325,{xPercent:imgBlockFrom, ease:Power1.easeOut})
	//     .set($(this).find('.reveal_img'), {autoAlpha:1})
	//     .to($(this).find('.reveal_block-img'), 0.225,{xPercent:imgBlockTo, ease:Sine.easeOut})
	//     .set($(this).find('.reveal_cont-text'), {autoAlpha:1,xPercent:contTextSet},0.3)
	   
	//     // stagger text blocks and text
	//     .staggerFromTo($(this).find('.reveal_block'), 0.7, {xPercent:textBlockStaggerFrom, ease:Power1.easeOut}, {xPercent:textBlockStaggerTo, ease:Power1.easeOut},0.25)
	//     .add('blocksEnd')
	//     .staggerTo($(this).find('.reveal_text'), 0.1, {autoAlpha:1},0.25,'blocksEnd-=0.75')
	  
	// //  build a scene
	//   var scene = new ScrollMagic.Scene({
	//     triggerElement: this,
	//     triggerHook:'onEnter',
	//     offset:400
	    
	//   })
	//   .setTween(loaderInit)
	//   .addTo(controller)  
	// });

	//LOGO-LINK
	$('body').on('click','.menu-btn', function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$('.top-menu').fadeToggle();
		$('body').toggleClass('hidden');
		$('.top-menu__bg').fadeToggle();
		//position_indicator(menu.find(".lang-item.active"));  
		//setTimeout(function(){indicator.css("opacity", 1);}, 0);
	});
	$('body').on('click','.top-menu__bg', function(e){
		e.preventDefault();
		$(this).fadeOut();
		$('.top-menu').fadeOut();
		$('.menu-btn').removeClass('active');
		$('body').removeClass('hidden');
	});

	//SUBMENU
	// $("body").on("click", ".page-header__link--sub>a", function(e){
	// 	e.preventDefault();
	// 	$(this).toggleClass('active');
	// 	$(this).next('.page-header__submenu').toggleClass('active');
	// });
	// $(document).mouseup(function (e){
	// 	var div = $(".page-header__link--sub");
	// 	if (!div.is(e.target)
	// 	    && div.has(e.target).length === 0) {
	// 		$(".page-header__link--sub>a").removeClass('active');
	// 		$(".page-header__submenu").removeClass('active');
	// 	}
	// });


	//LANGUAGE-SELECT
	if ($(".lang-wrap").length>0) {
		menu = $(".lang-wrap");
		indicator = $('<span class="indicator"></span>');
		menu.append(indicator);
		

		//SUBNAV
		$("body").on("click", ".lang-item", function(e){
			e.preventDefault();
			$('.lang-item').removeClass('active');
			$(this).addClass('active');
			//position_indicator(menu.find(".lang-item.active"));
		})
	}




	//TABLE DEFAULT RESP
	$('table').ReStable({
		//keepHtml: true,
    	maxWidth: 600,
	});



	$('.consultation__form').find('input,textarea').each(function() {

		$(this).on('focus', function() {
			$(this).parents('.input-wrap').addClass('act');
		});

		$(this).on('blur', function() {
			if ($(this).val().length == 0) {
				$(this).parents('.input-wrap').removeClass('act');
			}
		});

		if ($(this).val() != '') $(this).parents('.input-wrap').addClass('act');
	});


	//PHONE-SELECT
	if ($(".phoneselect").length>0) {
		$(".phoneselect").intlTelInput({
		   autoPlaceholder: "off",
		   initialCountry:"ru",
		 //    utilsScript: "js/vendors/telinput/utils.js"
		   nationalMode: false,
		   preventInvalidDialCodes: true
		});
	};

	//TABS
	$(".tab_content").hide();
	$("ul.tabs li:first").addClass("active").show();
	$(".tab_content:first").show();

	$("ul.tabs li").click(function() {
		$("ul.tabs li").removeClass("active");
		$(this).addClass("active");
		$(".tab_content").hide();
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn();
		return false;
	});

	//TOP-SEARCH
	$('body').on('click','.search-wrap', function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).parents('.top-search').toggleClass('active');
		$('.top-search__bg').fadeToggle();
	});
	$('body').on('click','.top-search__bg', function(e){
		e.preventDefault();
		$(this).fadeOut();
		$('.top-menu').fadeOut();
		$('.search-wrap').removeClass('active');
		$('.top-search').removeClass('active');
		//$('body').removeClass('hidden');
	});

	

	//MOBILE FOOTER TOGGLE
	$('body').on('click','.page-footer__toggle', function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).next('.page-footer__nav').slideToggle();
	});


	// $('body').on('click','.input-wrap__toggle', function(e){
	// 	e.preventDefault();
	// 	var firstEl = $(this).prev('.input-wrap');
	// 	var secondEl = $(this).next('.input-wrap');
	// 	firstEl.insertAfter($(this));
	// 	secondEl.insertBefore($(this));
	// });


	if ($( ".adwert-sum-slider" ).length>0) {
		$( ".adwert-sum-slider" ).slider({
	    	animate: true,
	        range: "min",
	        value: 500,
	        min: 0,
	        max: 1000,
	        step: 100,  
	        slide: function( event, ui ) {
	            $( "#slider-weight" ).val( ui.value );
	            // $(this).prev('.input-label').fadeOut(50);
	        },
		});
	};

	//FS
	if ($('.fs').length) {
		setTimeout(function() {
		  $('.fs').styler();
		}, 5)
	}



	//ID REMOVE
	$('body').on('click','.id-delete', function(e){
		e.preventDefault();
		$(this).parents('tr').remove();
	});




  	//INDEX
  	// if (true) {
  		
  	// }
  	var curPage = 1;
	var numOfPages = $(".index-page").length;
	var animTime = 1000;
	var scrolling = false;
	var pgPrefix = ".index-page-";

	function pagination() {
	    scrolling = true;

	    $(pgPrefix + curPage).removeClass("inactive").addClass("active");
	    $(pgPrefix + (curPage - 1)).addClass("inactive");
	    $(pgPrefix + (curPage + 1)).removeClass("active");

	    setTimeout(function() {
	      scrolling = false;
	    }, animTime);
	};

	function navigateUp() {
	    if (curPage === 1) return;
	    curPage--;
	    pagination();
	};

	function navigateDown() {
	    if (curPage === numOfPages) return;
	    curPage++;
	    pagination();
	};

	$(document).on("mousewheel DOMMouseScroll", function(e) {
	    if (scrolling) return;
	    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
	      navigateUp();
	    } else { 
	      navigateDown();
	    }

	    if ($('.layout--index').length>0) {
		  	if ( $('.index-page--top').hasClass( "inactive" )) { 
		    	$('.top-logo').addClass('toggled');
		  	}
		  	else{
		  		$('.top-logo').removeClass('toggled');
		  	}
		}
	  });

	  $(document).on("keydown", function(e) {
	    if (scrolling) return;
	    if (e.which === 38) {
	      navigateUp();
	    } else if (e.which === 40) {
	      navigateDown();
	    }
	});



	// //SQUARES HOVER
	// if ($('.squares').length>0) {
	//     var interval = 1000,
 //        widthB = 8,
 //        heightB = 8,
 //        container$ = $('.squares');
	    
	//     function buildTheField() {
	//         for(var y = heightB; 0 < y--;) {
	//             addRow();
	//         }
	//         return $('.i-square');
	//     }
	 
	//     function addRow() {
	//         for(var x = widthB; 0 < x--;) {
	//             var div$ = $('<div>').addClass('i-square').css({
	//                 opacity: Math.random()
	//             });
	//             container$.append(div$);
	//         }
	//     }

	//     var boxes$ = buildTheField();
	    
	//     // Triggers the event for all the boxes
	//     // function forceAnimate() {
	//     //     boxes$.trigger('box.animate');
	//     // }


 //    }





	//MAP
	if ($('#map').length>0) {
		init()
	}
	
});




$(window).resize(function () {
	//position_indicator(menu.find(".lang-item.active")); 
});


// $(window).scroll(function() {
// 	alert(1);
// 	if ($('.layout--index').length>0) {
// 	  	if ( $('.index-page--top').hasClass( "inactive" )) { 
// 	    	$('.top-logo').addClass('test');
// 	    	alert(1);
// 	  	}
// 	  	else{
// 	  		$('.top-logo').removeClass('test');
// 	  	}
// 	}
  
// });



// document.addEventListener("DOMContentLoaded", function(event) {
//     console.log("DOM fully loaded and parsed");
// });

window.onload = function() {
   pageLoad();
}
// $(window).load(function(){
	
// });

// functions
function pageLoad(){
	if ($('.layout--index').length>0) {
		setTimeout(function(){
			$('body').addClass('loaded');
		}, 2000);
	}
}


function init(){

	var icon = "img/content/icon.png";
	var icon_h = "img/content/icon-h.png";
	var latlngBelarus = new google.maps.LatLng(53.9077113,27.482882);

    var markers = [
	    {
	        "lat": '53.9077113',
	        "lng": '27.482882',
	    },
	    {
	        "lat": '38.82259098',
	        "lng": '-101.07421875',
	    },
    ];
    var map = new google.maps.Map(document.getElementById('map'), {
	    center: latlngBelarus,
        zoom: 10,
        mapTypeControl: false,
        navigationControl: false,
        scrollwheel: false,
        streetViewControl: false,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM
        },
        styles: [
		    {
		        "featureType": "all",
		        "elementType": "labels.text.fill",
		        "stylers": [
		            {
		                "saturation": 36
		            },
		            {
		                "color": "#333333"
		            },
		            {
		                "lightness": 40
		            }
		        ]
		    },
		    {
		        "featureType": "all",
		        "elementType": "labels.text.stroke",
		        "stylers": [
		            {
		                "visibility": "on"
		            },
		            {
		                "color": "#ffffff"
		            },
		            {
		                "lightness": 16
		            }
		        ]
		    },
		    {
		        "featureType": "all",
		        "elementType": "labels.icon",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "administrative",
		        "elementType": "geometry.fill",
		        "stylers": [
		            {
		                "color": "#ffffff"
		            },
		            {
		                "lightness": 20
		            }
		        ]
		    },
		    {
		        "featureType": "administrative",
		        "elementType": "geometry.stroke",
		        "stylers": [
		            {
		                "color": "#fefefe"
		            },
		            {
		                "lightness": 17
		            },
		            {
		                "weight": 1.2
		            }
		        ]
		    },
		    {
		        "featureType": "landscape",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#f5f5f5"
		            },
		            {
		                "lightness": 20
		            }
		        ]
		    },
		    {
		        "featureType": "landscape.man_made",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#e6e6e6"
		            }
		        ]
		    },
		    {
		        "featureType": "poi",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#f5f5f5"
		            },
		            {
		                "lightness": 21
		            }
		        ]
		    },
		    {
		        "featureType": "poi.park",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#dadada"
		            }
		        ]
		    },
		    {
		        "featureType": "road.highway",
		        "elementType": "geometry.fill",
		        "stylers": [
		            {
		                "color": "#acacac"
		            },
		            {
		                "lightness": 17
		            }
		        ]
		    },
		    {
		        "featureType": "road.highway",
		        "elementType": "geometry.stroke",
		        "stylers": [
		            {
		                "lightness": 29
		            },
		            {
		                "weight": 0.2
		            },
		            {
		                "color": "#ffffff"
		            }
		        ]
		    },
		    {
		        "featureType": "road.arterial",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#bcbcbc"
		            },
		            {
		                "lightness": 18
		            }
		        ]
		    },
		    {
		        "featureType": "road.arterial",
		        "elementType": "geometry.stroke",
		        "stylers": [
		            {
		                "color": "#f3f3f3"
		            }
		        ]
		    },
		    {
		        "featureType": "road.local",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#ffffff"
		            },
		            {
		                "lightness": 16
		            }
		        ]
		    },
		    {
		        "featureType": "road.local",
		        "elementType": "geometry.stroke",
		        "stylers": [
		            {
		                "color": "#d7d7d7"
		            }
		        ]
		    },
		    {
		        "featureType": "transit.line",
		        "elementType": "geometry.fill",
		        "stylers": [
		            {
		                "color": "#ffffff"
		            }
		        ]
		    },
		    {
		        "featureType": "transit.station.airport",
		        "elementType": "labels.icon",
		        "stylers": [
		            {
		                "color": "#000000"
		            }
		        ]
		    },
		    {
		        "featureType": "transit.station.bus",
		        "elementType": "labels.icon",
		        "stylers": [
		            {
		                "color": "#ff0000"
		            }
		        ]
		    },
		    {
		        "featureType": "transit.station.rail",
		        "elementType": "labels.icon",
		        "stylers": [
		            {
		                "color": "#000000"
		            }
		        ]
		    },
		    {
		        "featureType": "water",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#989898"
		            },
		            {
		                "lightness": 17
		            }
		        ]
		    }
		],
    });


    var marker, i;

    for (i = 0; i < markers.length; i++) {
    	var data = markers[i];
    	var myLatlng = new google.maps.LatLng(data.lat, data.lng);

	    marker = new google.maps.Marker({
	        position: myLatlng,
	        map: map,
	        icon: icon,
	    });


	    //HOVER
	    google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
	        return function() {
	         	for (var i = 0; i < markers.length; i++) {
					//markers[i].setIcon(markersIcon[i]);
					marker.setIcon(icon_h);
				};
	        }
	    })(marker, i));

	    google.maps.event.addListener(marker, 'mouseout', (function(marker, i) {
	        return function() {
	         	for (var i = 0; i < markers.length; i++) {
					//markers[i].setIcon(markersIcon[i]);
					marker.setIcon(icon);
				};
	        }
	    })(marker, i));

    }


    //resize map
    google.maps.event.addDomListener(window, "resize", function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });
}



// links pages
$('body').append(
	'<div style="position: fixed; z-index: 1005; bottom: 0; right: 0; background: #fff; border: solid 1px #828286; width: 200px;"> \
		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px; text-decoration: none; font-size: 16px" onclick="$(this).parent().hide()">Close X</a> \
	<style> \
		#pages { padding: 10px 20px 0 50px; font-size: 18px; } \
		#pages a { text-decoration: none; } \
		#pages li { margin: 5px 0; } \
	</style> \
	<ol id="pages"> \
		<li><a href="news.html">Новости</a></li> \
		<li><a href="about.html">About</a></li> \
		<li><a href="stock.html">Акция</a></li> \
		<li><a href="stock-no.html">Акция(без картинки)</a></li> \
		<li><a href="service.html">Услуга</a></li> \
		<li><a href="cost.html">Стоимость</a></li> \
		<li><a href="cost-result.html">Стоимость(рез)</a></li> \
		<li><a href="track.html">Отслеживание</a></li> \
		<li><a href="index.html">Главная</a></li> \
	</ol> \
</div>');
