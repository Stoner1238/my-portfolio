// script.js
document.getElementById("openSidebar").addEventListener("click", function () {
  document.getElementById("sidebar").classList.add("active");
});

document.getElementById("closeSidebar").addEventListener("click", function () {
  document.getElementById("sidebar").classList.remove("active");
});
// Highlight the active link
const links = document.querySelectorAll(".sidebar a");
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

