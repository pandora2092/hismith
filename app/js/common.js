$(function() {

	$('#my_navbar').on('show.bs.collapse', function () {
		$('.hamburger').addClass('is-active');
		$('.navbar .wrap_xs_phone').addClass('toggle_none');
	}).on('hide.bs.collapse', function () {
		$('.hamburger').removeClass('is-active');
		$('.navbar .wrap_xs_phone').removeClass('toggle_none');
	});

	$(".card .card_custom").each(function(index, element) {    
    	var card_custom = $(element).attr( "id");
	    $('#' + card_custom).on('show.bs.collapse', function () {
			$('#' + card_custom).parents('.card').children('.card-header').children('.mb-0').children('.btn-link').children('.circle').children('.fa').addClass('fa-angle-up');
			$('#' + card_custom).parents('.card').children('.card-header').children('.mb-0').children('.btn-link').children('.circle').addClass('custom-fa');
			$('#' + card_custom).parents('.card').children('.card-header').children('.mb-0').children('.btn-link').children('.circle').children('.fa').removeClass('fa-angle-down');
		}).on('hide.bs.collapse', function () {
			$('#' + card_custom).parents('.card').children('.card-header').children('.mb-0').children('.btn-link').children('.circle').children('.fa').addClass('fa-angle-down');
			$('#' + card_custom).parents('.card').children('.card-header').children('.mb-0').children('.btn-link').children('.circle').removeClass('custom-fa');
			$('#' + card_custom).parents('.card').children('.card-header').children('.mb-0').children('.btn-link').children('.circle').children('.fa').removeClass('fa-angle-up');
		});
	});

	$(".nav_foot .category .collapse").each(function(index, element) {    
    	var collapse = $(element).attr("id");
		$('#' + collapse).on('show.bs.collapse', function () {
			$('#' + collapse).parents('.nav_foot').children('.main-point').children('.fa').addClass('fa-angle-up');
			$('#' + collapse).parents('.nav_foot').children('.main-point').children('.fa').removeClass('fa-angle-down');
		}).on('hide.bs.collapse', function () {
			$('#' + collapse).parents('.nav_foot').children('.main-point').children('.fa').addClass('fa-angle-down');
			$('#' + collapse).parents('.nav_foot').children('.main-point').children('.fa').removeClass('fa-angle-up');
		});
	});

	$('.news-owl').owlCarousel({
		loop: true,
		nav: false,
		smartSpeed: 700,
		dots: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 4
			},
			1100: {
				items: 4
			}
		}
	});

	if ($(window).width() < 640) {
		$('.category .collapse').removeClass('show');
	}

});
