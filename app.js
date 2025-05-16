// Add JS interaction: flashing text on button click
document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".btn");
  const heading = document.querySelector("h1");

  button.addEventListener("click", () => {
    heading.classList.add("flash");
    setTimeout(() => {
      heading.classList.remove("flash");
    }, 1000);
  });
});
