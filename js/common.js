document.addEventListener("DOMContentLoaded", function () {
  // Menu
  function openMenu() {
    const navWrap = document.querySelector(".navigation");
    navWrap.classList.add("active");
    document.body.style.overflowY = "hidden";
  }
  function closeMenu() {
    const navWrap = document.querySelector(".navigation");
    navWrap.classList.remove("active");
    document.body.style.overflowY = "";
  }

  const hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", function () {
    if (!this.classList.contains("is-active")) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  // Scroll Animation
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
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className}"></span>`;
      },
    },
    on: {
      init: function () {
        const bikeCarouselTitle = document.querySelector(".bike_sec__title");
        const bikeCarouselDescr = document.querySelector(
          ".bike_sec__description"
        );
        const curSlide = document.querySelector(
          ".bike_carousel__slide.swiper-slide-next"
        );
        const curSlideTitle = curSlide.getAttribute("data-slide-title");
        const curSlideDescr = curSlide.getAttribute("data-slide-description");
        bikeCarouselTitle.innerHTML = curSlideTitle;
        bikeCarouselDescr.innerHTML = curSlideDescr;
      },
    },
    breakpoints: {
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });
  bikeCarousel.on("slideChangeTransitionEnd", function () {
    const bikeCarouselTitle = document.querySelector(".bike_sec__title");
    const bikeCarouselDescr = document.querySelector(".bike_sec__description");
    const curSlide = document.querySelector(
      ".bike_carousel__slide.swiper-slide-next"
    );
    const curSlideTitle = curSlide.getAttribute("data-slide-title");
    const curSlideDescr = curSlide.getAttribute("data-slide-description");
    bikeCarouselTitle.innerHTML = curSlideTitle;
    bikeCarouselDescr.innerHTML = curSlideDescr;
  });

  // Images Carousel
  const imagesCarousel = new Swiper(".img_slider", {
    slidesPerView: 1,
    effect: "fade",
    speed: 2500,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className}"></span>`;
      },
    },
  });
});
