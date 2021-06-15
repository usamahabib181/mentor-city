const sideBar = document.querySelector(".side-bar");
const bars = document.querySelector(".top-bar__bars");
const close = document.querySelector(".top-bar__close");
const dropdownBtn = document.querySelector(".button--available");
const availableContainer = document.querySelector(".dropdown-box");
const chatActivate = document.querySelector(".audiocalling__chat-icon");
const chatContainer = document.querySelector(".group-call__container");
const chatMenu = document.querySelector(".group-call__chat-menu");
const awards__active = document.querySelector(".awards__active");

// Ham-burger
bars.addEventListener("click", (e) => {
  e.preventDefault();
  bars.style.display = "none";
  close.style.display = "block";
  sideBar.classList.add("sidebar-transform");
});

// Sidebar
close.addEventListener("click", (e) => {
  e.preventDefault();
  bars.style.display = "block";
  close.style.display = "none";
  sideBar.classList.remove("sidebar-transform");
});

// Available dropdown javascript
// dropdownBtn.addEventListener("click", (e) => {
// 	e.preventDefault();
// 	availableContainer.classList.toggle("dropdown-box-show");
// });

// Available dropdown jquery
$(".button--available").on("click", function (e) {
  e.preventDefault();
  $(".dropdown-box").toggleClass("dropdown-box-show");
});

//for awards screen tabs
$(document).ready(function () {
  $(".awards__container .nav-link").click(function () {
    $(".nav-link").removeClass("awards__active");
    $(this).addClass("awards__active");
  });
});

//for helpline-2
$(document).ready(function () {
  $(".helpline_2__container .nav-link").click(function () {
    $(".nav-link").removeClass("helpline-active");
    $(this).addClass("helpline-active");
  });
});

// Chat activate
chatActivate.addEventListener("click", (e) => {
  e.preventDefault();
  chatContainer.classList.toggle("shrink");
  chatMenu.classList.toggle("chat-visible");
});
