const menuBar = document.getElementById("menu");
const openIcon = document.querySelector(".menu-icon");
const closeIcon = document.getElementById("closeIcon");

openIcon.addEventListener("click", () => {
  menuBar.style.display = "block";
});

closeIcon.addEventListener("click", () => {
  menuBar.style.display = "none";
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
