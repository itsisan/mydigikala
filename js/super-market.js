window.addEventListener("scroll", () => {
  const expandableElement = document.getElementById("super__market__button");
  if (window.scrollY >= 800) {
    expandableElement.classList.add("expanded");
  } else {
    expandableElement.classList.remove("expanded");
  }
});
