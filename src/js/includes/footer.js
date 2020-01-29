//button up js
const buttonUp = () => {
  let btn = document.querySelector(".button-up");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 200) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
};

buttonUp();
