window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky", window.scrollY > 50);
});

const toggleBar = document.querySelector(".toggle");
const menu = document.querySelector("ol");

function navToggle() {
  toggleBar.classList.toggle("active");
  menu.classList.toggle("active");
}
