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

  // Popup Modal
  MicroModal.init({
    disableFocus: true,
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
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className}"></span>`;
      },
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  if (window.innerWidth <= 768) {
    imagesCarousel.autoplay.stop();
  }

  // Slider With Thumbs
  const thumbsSlider = new Swiper(".thumbsSlider", {
    slidesPerView: "auto",
    spaceBetween: 20,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      992: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
  const mainSlider = new Swiper(".main_slider", {
    autoHeight: true,
    thumbs: {
      swiper: thumbsSlider,
    },
  });

  // Scroll Block
  const scrollBlockWrap = document.querySelector(".scroll_block");
  const scrollBlockContent = document.querySelector(".scroll_block__content");
  let last_known_scroll_position = 0;
  if (scrollBlockContent) {
    scrollBlockContent.addEventListener("scroll", function () {
      last_known_scroll_position = scrollBlockContent.scrollTop;
      if (last_known_scroll_position > 10) {
        scrollBlockWrap.classList.add("active");
      } else {
        scrollBlockWrap.classList.remove("active");
      }
    });
  }

  // Mask Phone Number
  var phoneInput = document.querySelector(".form_phone");
  if (phoneInput) {
    IMask(phoneInput, {
      mask: "+{7} (000) 000-00-00",
    });
  }
});
