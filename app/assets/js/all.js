$(function () {
  console.log("Hello Bootstrap5");
});

$(".ham-icon").click(function (e) {
  e.preventDefault();
  $(".dropdown").toggleClass("active");
});
