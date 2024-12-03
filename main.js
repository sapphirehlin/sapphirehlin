const menu = document.getElementById("menu");
const hamburger = document.getElementById("hamburger");

function toggleMenu() {
  menu.classList.toggle("mobile-active");
  hamburger.classList.toggle("active");
}

window.addEventListener("load", () => {
  const menuLinks = document.querySelectorAll(".menu > li > a");
  menuLinks.forEach((link, index) => {
    setTimeout(() => {
      link.classList.add("bounce-in");
    }, (index + 1) * 200);
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1000 && menu.classList.contains("mobile-active")) {
    menu.classList.remove("mobile-active");
    hamburger.classList.remove("active");
  }
});