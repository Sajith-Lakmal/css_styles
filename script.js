document.querySelector(".btn").addEventListener("click", () => {
  document.querySelector(".btn").classList.add("button-animation");
  const time = setTimeout(() => {
    const btn = document.querySelector(".btn");
    btn.classList.remove("button-animation");
    btn.classList.add("button-error-animation");
    const finishTimer = setTimeout(() => {
      btn.classList.remove("button-error-animation");
    }, 4000);
  }, 4000);
});
