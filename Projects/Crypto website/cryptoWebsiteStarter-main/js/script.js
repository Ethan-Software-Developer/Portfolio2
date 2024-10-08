//JS
$(document).on("scroll", function () {
  var scrollPos = $(document).scrollTop();
  var navbar = $(".navbar");

  // Add or remove navbar solid class based on scroll position

  if (scrollPos > 0) {
    navbar.addClass("navbar-solid");
  } else {
    navbar.removeClass("navbar-solid");
  }

  //  add or remove class on navlinks

  $(".nav-link").each(function () {
    var currlink = $(this);
    var refElement = $(currlink.attr("href"));
    if (
      refElement.position().top <= scrollPos &&
      refElement.position().top + refElement.height() > scrollPos
    ) {
      $(".nav-link").removeClass("active");
      currlink.addClass("active");
    } else {
      currlink.removeClass("active");
    }
  });

  // Mobile Menu
});

$(".menu-btn").click(function () {
  $(".navbar").toggleClass("mobile");
  $(".menu-btn").toggleClass("active");
});
