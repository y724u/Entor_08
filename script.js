
// <!-- スムーススクロール -->
$(function () {
  $('a[href^="#"]').click(function () {
    let speed = 700;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top - 110;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  // <!-- サービスシステム開発モーダル -->
  $('.js-modalOpen').on('click', function () {
    $('.js--modal').addClass('show_modal');
  });
  $('.js-modalClose').on('click', function () {
    $('.js--modal').removeClass('show_modal');
  });

  // <!-- サービス地方創生モーダル -->
  $('.js-modalOpen2').on('click', function () {
    $('.js--modal2').addClass('show_modal2');
  });
  $('.js-modalClose').on('click', function () {
    $('.js--modal2').removeClass('show_modal2');
  });

  // <!-- サービス人材育成モーダル -->
  $('.js-modalOpen3').on('click', function () {
    $('.js--modal3').addClass('show_modal3');
  });
  $('.js-modalClose').on('click', function () {
    $('.js--modal3').removeClass('show_modal3');
  });

  // <!-- 利用規約モーダル -->
  $('.js-modalOpen-download').on('click', function () {
    $('.js--download__modal').addClass('show_modal');
  });
  $('.js-modalClose-download').on('click', function () {
    $('.js--download__modal').removeClass('show_modal');
  });

  // <!-- ダウンロードボタン活性化&非活性化 -->
  $('input[name="checkbox"]').on('change', function () {
    if ($(this).prop('checked'))
      $('.js--button').addClass('box__checked');
    else
      $('.js--button').removeClass('box__checked');
  });

  // <!-- ハンバーガーメニュー -->
  $('.js--hamburger').on('click', function () {
    $('.js-open').toggleClass('active')
  });

  // <!-- ハンバーガーメニュースクールロールストップ -->
  let state = false;
  let scrollpos;
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

  // <!-- サービスシステム開発モーダルスクロールストップ -->

  let scrollPosition1;
  $(".js-modalOpen").on("click", function () {
    scrollPosition1 = $(window).scrollTop();
    $('body').addClass('fixed').css({ 'top': -scrollPosition1 });
  });
  $(".js-modalClose").on("click", function () {
    $('body').removeClass('fixed').css({ 'top': 0 });
    window.scrollTo(0, scrollPosition1);
  });

  // <!-- サービス地方創生モーダルスクロールストップ -->
  let scrollPosition2;
  $(".js-modalOpen2").on("click", function () {
    scrollPosition2 = $(window).scrollTop();
    $('body').addClass('fixed').css({ 'top': -scrollPosition2 });
  });
  $(".js-modalClose").on("click", function () {
    $('body').removeClass('fixed').css({ 'top': 0 });
    window.scrollTo(0, scrollPosition2);
  });

  // <!-- サービス人材育成モーダルスクロールストップ -->
  let scrollPosition3;
  $(".js-modalOpen3").on("click", function () {
    scrollPosition3 = $(window).scrollTop();
    $('body').addClass('fixed').css({ 'top': -scrollPosition3 });
  });
  $(".js-modalClose").on("click", function () {
    $('body').removeClass('fixed').css({ 'top': 0 });
    window.scrollTo(0, scrollPosition3);
  });

  // <!-- 利用規約モーダルストップ -->
  let scrollPosition;
  $(".js-modalOpen-download").on("click", function () {
    scrollPosition = $(window).scrollTop();
    $('body').addClass('fixed').css({ 'top': -scrollPosition });
  });
  $(".js-modalClose-download").on("click", function () {
    $('body').removeClass('fixed').css({ 'top': 0 });
    window.scrollTo(0, scrollPosition);
  });

});


















