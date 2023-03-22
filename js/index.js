window.addEventListener("scroll", () => {
  const nav = document.getElementById("nav");
  nav.classList.toggle("sticky", window.scrollY);
});
