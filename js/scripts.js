$("#btn-menu-pc").click(function () {
  $(".owl-carousel").trigger("refresh.owl.carousel");
  $(".fvv-sidebar").toggleClass("hidden-menu");
  $(".f-content .fvv-content").toggleClass("hidden-menu");
  if ($(".fvv-sidebar").hasClass("hidden-menu")) {
    $(".backdrop-menu").removeClass("active");
  } else {
    $(".backdrop-menu").addClass("active");
    $(".backdrop-menu").click(function () {
      $(".backdrop-menu").removeClass("active");
      $(".fvv-sidebar").addClass("hidden-menu");
      $(".fvv-content").addClass("hidden-menu");
    });
  }
});
/*
$(window).resize(function () {
  var ws = $(window).width();
  if (ws < 1201) {
    $(".fvv-sidebar").addClass("hidden-menu");
    $(".f-content .fvv-content").addClass("hidden-menu");
  } else {
    $(".fvv-sidebar").removeClass("hidden-menu");
    $(".f-content .fvv-content").removeClass("hidden-menu");
  }
});
var ws1 = $(window).width();
if (ws1 < 1201) {
  $(".fvv-sidebar").addClass("hidden-menu");
} else {
  $(".fvv-sidebar").removeClass("hidden-menu");
}
*/

$(".btn-scroll-right").click(function (event) {
  event.preventDefault();
  $(".channel-menu").animate(
    {
      scrollLeft: "+=100px",
    },
    "slow"
  );
});

$(".btn-scroll-left").click(function (event) {
  event.preventDefault();
  $(".channel-menu").animate(
    {
      scrollLeft: "-=100px",
    },
    "slow"
  );
});
$(".channel-menu-inner ul li")
  .last()
  .click(function () {
    $(".f-navbar-search-mb").slideDown();
    $("#nav-input-search").focus();
  });

$("#close-search-mb").click(function () {
  $(".f-navbar-search-mb").slideUp();
});
$("#dropdown-search").click(function () {
  $(".f-navbar-search-mb").slideDown();
});
$(".action-nav").click(function () {
  if ($(this).hasClass("show")) {
    $(this).removeClass("show");
    $(".dropdown-menu.f-notification").removeClass("show");
    return;
  }
  $(this).addClass("show");
  $(".dropdown-menu.f-notification").addClass("show");
});

try {
  $(".f-post-author-name p").html('Xuất bản ' + getDatetime(arrPost.datePublished));

  $(".labelpost")
    .html(arrPost.labels[0].label)
    .attr("href", "/search/label/" + arrPost.labels[0].label);
} catch (e) {}
