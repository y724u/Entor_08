
// <!-- スムーススクロール -->
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 700;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - 110;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

// <!-- サービスモーダル -->
$(function() {
  $('.js-modalOpen').on('click',function(){
    $('.service__item--modal').addClass('show_modal');
  });
  $('.js-modalClose').on('click',function(){
    $('.service__item--modal').removeClass('show_modal');
  });
});

// <!-- 利用規約モーダル -->
$(function() {
  $('.js-modalOpen-download').on('click',function(){
    $('.download__policy--modal').addClass('show_modal');
  });
  $('.js-modalClose-download').on('click',function(){
    $('.download__policy--modal').removeClass('show_modal');
  });
});


// <!-- 事業内容モーダルスクロールストップ -->
$(function(){
	var scrollPosition;
	$(".js-modalOpen").on("click", function() {
		scrollPosition = $(window).scrollTop();
		$('body').addClass('fixed').css({'top': -scrollPosition});
	});
	$(".js-modalClose").on("click", function() {
		$('body').removeClass('fixed').css({'top': 0});
		window.scrollTo( 0 , scrollPosition );
	});
});

// <!-- 利用規約モーダルストップ -->
$(function(){
	var scrollPosition;
	$(".js-modalOpen-download").on("click", function() {
		scrollPosition = $(window).scrollTop();
		$('body').addClass('fixed').css({'top': -scrollPosition});
	});
	$(".js-modalClose-download").on("click", function() {
		$('body').removeClass('fixed').css({'top': 0});
		window.scrollTo( 0 , scrollPosition );
	});
});



// $(function() {
//   $('#check').on('click',function(){
//     $('.download__button--link').addClass('box__checked');
//   });
//   $('#check').on('click',function(){
//     $('.download__button--link').removeClass('box__checked');
//   });
// });

$(function() {
  $('.js-active').on('click',function(){
    $('.download__button--link').addClass('box__checked');
  });
  $('.js-active').on('click',function(){
    $('.download__button--link').removeClass('box__checked');
  });
});
