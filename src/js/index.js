//custom polyfills include
import "./includes/polyfills.js";

//libraries js include

//Jquery
import $ from "jquery";
window.$ = $;
window.jQuery = jQuery;
jQueryBridget("isotope", $);
import jQueryBridget from "jquery-bridget";

//Isotope
import isotope from "isotope-layout";

//equal height
import matchHeight from "jquery-match-height";

//scroll animation plugin
import AOS from "aos";
AOS.init({
  duration: 500,
  delay: 300,
  disable: "phone"
});

window.addEventListener("resize", () => {
  AOS.refresh();
});

//components js include
import "./includes/matchMedia.js";
import "./includes/common.js";
import "./includes/slider.js";
import "./includes/header.js";
import "./includes/footer.js";
import "./includes/stats.js";
import "./includes/price.js";
import "./includes/works.js";
import "./includes/ux.js";
import "./includes/validation.js";
