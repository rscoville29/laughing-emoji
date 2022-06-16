const laugh = document.querySelector(".laugh");
const smile = document.querySelector(".smile");

laugh.addEventListener("click",() => {
    smile.classList.add("active");
    laugh.classList.remove("active");
  });
smile.addEventListener("click", () => {
  smile.classList.remove("active");
  laugh.classList.add("active");
});