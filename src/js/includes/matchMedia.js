//events in breakpoints change text in buttons

//import functions
import { mobileMenuAnimation } from "./header.js";

let resizeTimer,
  initialSize = window.innerWidth;

//onload
function mediaSize() {
  /* Set the matchMedia */
  //768px
  if (window.matchMedia("(max-width: 768px)").matches) {
    mobileMenuAnimation();
  } else {
    let func = mobileMenuAnimation();
    func = null;
  }
}

/* Call the function */
mediaSize();

/* Attach the function to the resize event listener */
let resizeId;
window.addEventListener("resize", () => {
  clearTimeout(resizeId);
  resizeId = setTimeout(doneResizing, 100);
});

function doneResizing() {
  mediaSize();
}
