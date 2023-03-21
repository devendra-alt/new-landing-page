const mobile_nav = document.querySelector(".nav-mobile-logo");
const nav_header = document.querySelector(".head");
const toggleNavbar = () => {
  // alert("Plz Subscribe ");
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());
