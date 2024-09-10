const menuIcon = document.getElementById("menu-icon");
const mobileMenu = document.getElementById("mobile-menu");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".close");

menuIcon.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  overlay.classList.add("active");
});
close.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
});
overlay.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
});
