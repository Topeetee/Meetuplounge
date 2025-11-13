// Display current year
document.getElementById("year").textContent = new Date().getFullYear();

// Select elements
const navbar = document.getElementById("navbar");
const hero = document.querySelector(".hero");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Initially hide navbar on mobile
if (window.innerWidth <= 768) {
  navbar.classList.add("mobile-hidden");
}

// Show navbar on scroll (mobile only)
window.addEventListener("scroll", () => {
  const heroHeight = hero.offsetHeight;

  if (window.innerWidth <= 768) {
    if (window.scrollY > heroHeight - 80) {
      navbar.classList.add("visible");
      navbar.classList.remove("mobile-hidden");
    } else {
      navbar.classList.remove("visible");
      navbar.classList.add("mobile-hidden");
      navLinks.classList.remove("show");
    }
  }
});

// Toggle menu
menuToggle.addEventListener("click", () => {
    console.log("menu clicked");
  navLinks.classList.toggle("show");
});

// Close menu when a link is clicked
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

// Ensure desktop nav always visible
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navbar.classList.remove("mobile-hidden");
    navbar.classList.add("visible");
    navLinks.classList.remove("show");
  } else {
    navbar.classList.add("mobile-hidden");
  }
});
