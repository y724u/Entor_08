
// <!-- スムーススクロール -->
$(function () {
  $('a[href^="#"]').on('click', function () {
    let speed = 700;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top - 110;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  // // <!-- サービスシステム開発モーダル -->
  let scrollPosition1;
  $('.js-modalOpen').on('click', function () {
    const target = $(this).data('target');
    const modal = document.getElementById(target);
    scrollPosition1 = $(window).scrollTop();
    $(modal).addClass('show_modal');
    $('body').addClass('fixed').css({ 'top': -scrollPosition1 });
    return false;
  });
  $('.js-modalClose').on('click', function () {
    $('.js--modal').removeClass('show_modal');
    $('body').removeClass('fixed').css({ 'top': 0 });
    window.scrollTo(0, scrollPosition1);
  });

  // <!-- 利用規約モーダル -->
  let scrollPosition;
  $('.js-modalOpen-download').on('click', function () {
    $('.js-download__modal').addClass('show_modal');
    scrollPosition = $(window).scrollTop();
    $('body').addClass('fixed').css({ 'top': -scrollPosition });
  });
  $('.js-modalClose-download').on('click', function () {
    $('.js-download__modal').removeClass('show_modal');
    $('body').removeClass('fixed').css({ 'top': 0 });
    window.scrollTo(0, scrollPosition);
  });

  // <!-- ダウンロードボタン活性化&非活性化 -->
  $('.js-checkbox').on('change', function () {
    if ($(this).prop('checked'))
      $('.js-button').addClass('box__checked');
    else
      $('.js-button').removeClass('box__checked');
  });

  // <!-- ハンバーガーメニュー -->
  $('.js-hamburger').on('click', function () {
    $('.js-open').toggleClass('active')
  });

  // <!-- ハンバーガーメニュースクールロールストップ -->
  let state = false;
  let scrollpos;
  $('.js-hamburger').on('click', function () {
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