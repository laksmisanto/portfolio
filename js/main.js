// body dark theme design
var body = document.querySelector("body");
var btn = document.querySelector(".dark__light__icon");
var darkIcon = document.querySelector(".dark__icon");
var lightIcon = document.querySelector(".light__icon");

btn.addEventListener("click", () => {
  body.classList.toggle("dark__theme");
});

// filter your portfolio images
$(document).ready(function () {
  $(".list").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".itemBox").show("1000");
    } else {
      $(".itemBox")
        .not("." + value)
        .hide("1000");
      $(".itemBox")
        .filter("." + value)
        .show("1000");
    }
  });
});

// add active class item

$(".list").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
});
