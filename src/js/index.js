//polyfills include
import "./includes/polyfills.js";

//libraries js include
import $ from "jquery";
window.$ = $;
window.jQuery = jQuery;
jQueryBridget("isotope", $);

import jQueryBridget from "jquery-bridget";
import isotope from "isotope-layout";
import matchHeight from "jquery-match-height";
import inputmask from "inputmask";
//import magnificPopup from "magnific-popup";
//import flexMenu from "flexmenu";

//components js include
import "./includes/common.js";
import "./includes/slider.js";
import "./includes/header.js";
import "./includes/footer.js";
import "./includes/price.js";
import "./includes/works.js";
import "./includes/ux.js";
import "./includes/modals.js";
