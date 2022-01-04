document.querySelector(".btn").addEventListener("click", () => {
  document.querySelector(".btn").classList.toggle("button-animation");
  const time = setTimeout(() => {
    const btn = document.querySelector(".btn");
    btn.classList.remove("button-animation");
    btn.classList.add("button-done-animation");
  }, 4000);
});
