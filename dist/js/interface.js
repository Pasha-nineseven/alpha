$(document).ready(function() {
	flexibility(document.documentElement);
	document.body.classList.remove('no-js');

	//LOGO-LINK
	$('body').on('click','.menu-btn', function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$('.top-menu').fadeToggle();
		$('body').toggleClass('hidden');
		$('.top-menu__bg').fadeToggle();
		position_indicator(menu.find(".lang-item.active"));  
		setTimeout(function(){indicator.css("opacity", 1);}, 0);
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
			position_indicator(menu.find(".lang-item.active"));
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
  	  var curPage = 1;
	  var numOfPages = $(".skw-page").length;
	  var animTime = 1000;
	  var scrolling = false;
	  var pgPrefix = ".skw-page-";

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
	  });

	  $(document).on("keydown", function(e) {
	    if (scrolling) return;
	    if (e.which === 38) {
	      navigateUp();
	    } else if (e.which === 40) {
	      navigateDown();
	    }
	  });
	});




$(window).resize(function () {
	position_indicator(menu.find(".lang-item.active")); 
});



window.onload = function() {
   pageLoad();
}
// $(window).load(function(){
	
// });

// functions
function position_indicator(ele){
	var left = ele.offset().left;
	var width = ele.innerWidth();
	indicator.stop().animate({
		left: left,
		width: width
	});
}

function pageLoad(){
	if ($('.layout--index').length>0) {
		setTimeout(function(){
			$('body').addClass('loaded');
		}, 2000);
	}
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
		<li><a href="service.html">Услуга</a></li> \
		<li><a href="cost.html">Стоимость</a></li> \
		<li><a href="cost-result.html">Стоимость(рез)</a></li> \
		<li><a href="track.html">Отслеживание</a></li> \
		<li><a href="index.html">Главная2</a></li> \
		<li><a href="test.html">Test</a></li> \
	</ol> \
</div>');
