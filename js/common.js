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
});
