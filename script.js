
// <!-- スムーススクロール -->
$(function () {
  $('a[href^="#"]').click(function () {
    var speed = 700;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - 110;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

// <!-- サービスシステム開発モーダル -->
$(function () {
  $('.js-modalOpen').on('click', function () {
    $('.js--modal').addClass('show_modal');
  });
  $('.js-modalClose').on('click', function () {
    $('.js--modal').removeClass('show_modal');
  });
});

// <!-- サービス地方創生モーダル -->
$(function () {
  $('.js-modalOpen2').on('click', function () {
    $('.js--modal2').addClass('show_modal2');
  });
  $('.js-modalClose').on('click', function () {
    $('.js--modal2').removeClass('show_modal2');
  });
});

// <!-- サービス人材育成モーダル -->
$(function () {
  $('.js-modalOpen3').on('click', function () {
    $('.js--modal3').addClass('show_modal3');
  });
  $('.js-modalClose').on('click', function () {
    $('.js--modal3').removeClass('show_modal3');
  });
});

// <!-- 利用規約モーダル -->
$(function () {
  $('.js-modalOpen-download').on('click', function () {
    $('.js--download__modal').addClass('show_modal');
  });
  $('.js-modalClose-download').on('click', function () {
    $('.js--download__modal').removeClass('show_modal');
  });
});

// <!-- サービスシステム開発モーダルスクロールストップ -->
$(function () {
  var scrollPosition;
  $(".js-modalOpen").on("click", function () {
    scrollPosition = $(window).scrollTop();
    $('body').addClass('fixed').css({ 'top': -scrollPosition });
  });
  $(".js-modalClose").on("click", function () {
    $('body').removeClass('fixed').css({ 'top': 0 });
    window.scrollTo(0, scrollPosition);
  });
});

// <!-- サービス地方創生モーダルスクロールストップ -->
$(function () {
  var scrollPosition;
  $(".js-modalOpen2").on("click", function () {
    scrollPosition = $(window).scrollTop();
    $('body').addClass('fixed').css({ 'top': -scrollPosition });
  });
  $(".js-modalClose").on("click", function () {
    $('body').removeClass('fixed').css({ 'top': 0 });
    window.scrollTo(0, scrollPosition);
  });
});

// <!-- サービス人材育成モーダルスクロールストップ -->
$(function () {
  var scrollPosition;
  $(".js-modalOpen3").on("click", function () {
    scrollPosition = $(window).scrollTop();
    $('body').addClass('fixed').css({ 'top': -scrollPosition });
  });
  $(".js-modalClose").on("click", function () {
    $('body').removeClass('fixed').css({ 'top': 0 });
    window.scrollTo(0, scrollPosition);
  });
});

// <!-- 利用規約モーダルストップ -->
$(function () {
  var scrollPosition;
  $(".js-modalOpen-download").on("click", function () {
    scrollPosition = $(window).scrollTop();
    $('body').addClass('fixed').css({ 'top': -scrollPosition });
  });
  $(".js-modalClose-download").on("click", function () {
    $('body').removeClass('fixed').css({ 'top': 0 });
    window.scrollTo(0, scrollPosition);
  });
});

// <!-- ダウンロードボタン活性化&非活性化 -->
$(function () {
  $('input[name="checkbox"]').on('change', function () {
    if ($(this).prop('checked'))
      $('.js--button').addClass('box__checked');
    else
      $('.js--button').removeClass('box__checked');
  });
});

// <!-- ハンバーガーメニュー -->
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("hamburger_menu").addEventListener("click", function () {
    this.classList.toggle("active");
    document.getElementById("nav").classList.toggle("active");
  })
});

// <!-- ハンバーガーメニュースクールロールストップ -->
$(function () {
  var state = false;
  var scrollpos;

  $('.js--hamburger').on('click', function () {
    if (state == false) {
      scrollpos = $(window).scrollTop();
      $('body').addClass('fixed').css({ 'top': -scrollpos });
      $('#nav').addClass('open');
      state = true;
    } else {
      $('body').removeClass('fixed').css({ 'top': 0 });
      window.scrollTo(0, scrollpos);
      $('#nav').removeClass('open');
      state = false;
    }
  });
});




