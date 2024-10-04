$(document).ready(function () {
  const $darkModeToggle = $("#darkMode");
  const $orangeThemeToggle = $("#orangeTheme");
  const $animationToggle = $("#animation");

  const $headerOptions = $("#headerOptions");
  const $headerOptionsBtn1 = $("#headerOptionsBtn1");
  const $headerOptionsBtn2 = $("#headerOptionsBtn2");
  $('.title-h2, .internal-page .title-h1, .sec1-about-us-page__left-big-text').html(function(_, html) {
    return '<span>' + html + '</span>';
  });
  $headerOptionsBtn1.on("click", function () {
    $headerOptions.toggleClass("show");
  });
  $headerOptionsBtn2.on("click", function () {
    $headerOptions.toggleClass("show");
  });

  $darkModeToggle.on("change", function () {
    if ($darkModeToggle.is(":checked")) {
      $("body").removeClass('orange-active');
      $("body").addClass('dark-active');
      $(".intro__anim").css({
        backgroundColor: "transparent",
      });
      $('.header__logo-inner img').attr('src', 'images/logo-white.png');
      $('.logo-footer__inner img').attr('src', 'images/logo-white.png');
    } else {
      $("body").removeClass('dark-active');
      $('.header__logo-inner img').attr('src', 'images/logo.png');
      $('.logo-footer__inner img').attr('src', 'images/logo.png');
    }
  });

  $orangeThemeToggle.on("change", function () {
    if ($orangeThemeToggle.is(":checked")) {
      $("body").addClass('orange-active');
      $(".intro__anim").css({
        backgroundColor: "#F55F23",
      });
    } else {
      $("body").removeClass('orange-active');
      $(".intro__anim").css({
        backgroundColor: "transparent",
      });
    }
  });

  $animationToggle.on("change", function () {
    if ($animationToggle.is(":checked")) {
      alert("Animation Enabled");
    } else {
      alert("Animation Disabled");
    }
  });
});
