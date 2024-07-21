document.addEventListener("DOMContentLoaded", function () {
  let header = document.getElementById("header__bottom");
  let lastScrollY = window.scrollY;
  let threshold = 100;
  let didScroll = false;

  window.addEventListener("scroll", function () {
    didScroll = true;
  });

  setInterval(function () {
    if (didScroll) {
      let currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > threshold) {
        // Scrolling down
        header.classList.add("header__hidden");
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        header.classList.remove("header__hidden");
      }
      lastScrollY = currentScrollY;
      didScroll = false;
    }
  }, 100);
});
