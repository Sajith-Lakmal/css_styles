document.querySelector(".btn").addEventListener("click", () => {
  document.querySelector(".btn").classList.add("button-animation");
  const time = setTimeout(() => {
    const btn = document.querySelector(".btn");
    btn.classList.remove("button-animation");
    btn.disabled = true;
    btn.classList.add("button-error-animation");
    const finishTimer = setTimeout(() => {
      btn.classList.remove("button-error-animation");
      btn.disabled = false;
    }, 4000);
  }, 4000);
});
