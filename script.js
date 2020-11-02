
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


// $('#check').change(function() {
//   // チェックが入っていたら有効化
//   if ( $(this).is(':checked') ){ 
//       // ボタンを有効化
//       $('#download__button--link').prop('disabled', false);
//   } else { 
//       // ボタンを無効化
//       $('#download__button--link').prop('disabled', true); 
//   }
// });

// $(function(){
//   $("#check").click(function(){
//   if (this.checked) {
//   $("#download__button--link").p("<a href='#'>ダウンロード</a>");
//   } else {
//   $("#download__button--link").html("ダウンロード");
//   }

// $(function(){
// $(document).ready(function(){
//   $('#download__button--link').click(function(e){
//   e.preventDefault();
//   });
//   });
// });
// $(function(){
// $('#download__button--link').on('click', function(){
//   return false;
// });
// });

$(function(){
jQuery(".download__button--link").on('click', function(e){
  e.preventDefault();
});
});