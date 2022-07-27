document.addEventListener("DOMContentLoaded", function () {
  const wow = new WOW({
    mobile: false,
    live: false,
    resetAnimation: false,
  });
  wow.init();
  // Hamburger Click
  const hamburgerBtn = document.querySelector(".hamburger");
  hamburgerBtn.addEventListener("click", function () {
    this.classList.toggle("is-active");
  });

  // Bike Carousel
  const bikeCarousel = new Swiper(".bike_carousel", {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });

  // Images Carousel
  const imagesCarousel = new Swiper(".img_slider", {
    slidesPerView: 1,
    effect: "fade",
    speed: 2500,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
});
