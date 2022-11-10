$(document).ready(function () {

	$(".cart-select").click(function (e) {
		$('.popup__cart-body').fadeToggle();
		$('.popup__login-body').fadeOut();
		$(".popup__user-nav").fadeOut();
		if ($(".cart__list-item").height() < 200) {
			$(".cart__list-item").css('overflow-y', "hidden");
		} else {
			$(".cart__list-item").css('overflow-y', "scroll");
		}
		e.stopPropagation();
	});


	$(".popup__cart-body").click(function (e) {
		e.stopPropagation();
	});
	$(".search-box").click(function (e) {
		e.stopPropagation();
	});
	$(document).click(function () {
		$(".popup__cart-body").fadeOut();
		$('.popup__login-body').fadeOut();
		$('.search-result').fadeOut();

		$('.popup__login-body .alert').fadeOut();
	});
	$('.login-select').click(function (e) {
		$('.popup__login-body').fadeToggle();
		$(".popup__cart-body").fadeOut();
		e.stopPropagation();

		$('.popup__login-body .alert').hide();
	});
	$(".popup__login-body").click(function (e) {
		e.stopPropagation();
	});
	$('.close_popup_cart').click(function () {
		$(".popup__cart-body").fadeOut();
	});

	$('.show-siderbar__main').click(function () {
		$('.sidebar__main').slideToggle();
	});


	$(".show-user-nav").click(function (){
		$(".popup__user-nav").fadeToggle();
		$(".popup__cart-body").fadeOut();
	});


	$(".nav__sidebar a").click(function () {

		$(".nav__sidebar ul ul").slideUp('fast');

		$(".nav__sidebar ul li a span").removeClass('glyphicon-chevron-up');
		$(".nav__sidebar ul li a span").addClass('glyphicon-chevron-down');

		$(this).children().addClass('glyphicon-chevron-down');
		$(this).children().removeClass('glyphicon-chevron-up');

		if (!$(this).next().is(":visible")) {
			$(this).next().slideDown('fast');

			$(this).children().addClass('glyphicon-chevron-up');
			$(this).children().removeClass('glyphicon-chevron-down');
		}
	});
	$('.active-li').closest('ul').slideDown('fast');

	$('.active-li').closest('ul').prev().children().addClass('glyphicon-chevron-up');
	$('.active-li').closest('ul').prev().css('color', '#339999');
	$('.active-li').closest('ul').prev().children().css('color', '#333');
	$('.active-li').closest('ul').prev().children().removeClass('glyphicon-chevron-down');

	$('.product-submit-cart .disabled').closest('.a__submit').hover(function () {
		$(this).css('cursor', 'not-allowed');
	});

	$('#myModal').on('hidden.bs.modal', function () {
		document.location.reload();
	});


	$('#form-login').submit(function (e) {
		e.preventDefault();
		var email = $('.popup__login-body .input-email').val();
		var password = $('.popup__login-body .input-password').val();
		var error = false;
		if (email == "") {
			$('.popup__login-body .input-email').next('.errors').fadeIn();
			error = true;
		}
		if (password == "") {
			$('.popup__login-body .input-password').next('.errors').fadeIn();
			error = true;
		}
	});

	$('.popup__login-body .input-email').keyup(function () {
		$(this).next('.errors').fadeOut();
		$('.login-messages').fadeOut();
	});
	$('.popup__login-body .input-password').keyup(function () {
		$(this).next('.errors').fadeOut();
		$('.login-messages').fadeOut();
	});

});
$("#img_01").elevateZoom({
	zoomType: "inner",
	cursor: "crosshair",
	constrainType: "height",
	constrainSize: 274,
	gallery: 'gallery_01',

	galleryActiveClass: "active"
});


$("#img_01").bind("click", function (e) {
	var ez = $('#img_01').data('elevateZoom');
	$.fancybox(ez.getGalleryList());
	return false;
});

$('.field__input').on('input', function () {
	var field = $(this).closest('.field__input-wrapper');
	if (this.value) {
		field.addClass('field__input-active');
	} else {
		field.removeClass('field__input-active');
	}
});
