const body = document.querySelector("body");
const toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("nav-open");
});
