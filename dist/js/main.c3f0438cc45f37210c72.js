!function(e){function t(t){for(var n,a,s=t[0],c=t[1],l=t[2],u=0,f=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(d&&d(t);f.length;)f.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,s=1;s<r.length;s++){var c=r[s];0!==o[c]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={0:0},i=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=c;i.push([120,1]),r()}({120:function(e,t,r){r(168),e.exports=r(167)},164:function(e,t){var r;r=document.querySelector(".button-up"),window.addEventListener("scroll",(function(){window.pageYOffset>200?r.classList.add("active"):r.classList.remove("active")})),r.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}))},167:function(e,t,r){},168:function(e,t,r){"use strict";r.r(t);var n,o,i;r(13),r(68),r(16);n=[window.Element,window.CharacterData,window.DocumentType],o=[],n.forEach((function(e){e&&o.push(e.prototype)})),function(e){e.forEach((function(e){e.hasOwnProperty("remove")||Object.defineProperty(e,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})}))}(o),[Element.prototype,Document.prototype,DocumentFragment.prototype].forEach((function(e){e.hasOwnProperty("append")||Object.defineProperty(e,"append",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=Array.prototype.slice.call(arguments),t=document.createDocumentFragment();e.forEach((function(e){var r=e instanceof Node;t.appendChild(r?e:document.createTextNode(String(e)))})),this.appendChild(t)}})})),[Element.prototype,Document.prototype,DocumentFragment.prototype].forEach((function(e){e.hasOwnProperty("prepend")||Object.defineProperty(e,"prepend",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=Array.prototype.slice.call(arguments),t=document.createDocumentFragment();e.forEach((function(e){var r=e instanceof Node;t.appendChild(r?e:document.createTextNode(String(e)))})),this.insertBefore(t,this.firstChild)}})})),(i=Element.prototype).matches=i.matches||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector||i.webkitMatchesSelector,i.closest=i.closest||function(e){return this?this.matches(e)?this:this.parentElement?this.parentElement.closest(e):null:null};var a=r(29),s=r.n(a),c=r(116),l=r.n(c),d=(r(126),r(133),r(81)),u=r.n(d),f=(r(44),r(47),r(48),r(70),r(71),r(27),r(104),r(49),r(28),r(51),r(52),r(76),r(53),r(117)),p=r.n(f),v=r(118),m=r.n(v);function h(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}p.a.polyfill();m.a.init({initClass:"js-flexMenu",breakPoint:769,navDropdownBreakpointLabel:"menu"});var y=function(){var e=document.querySelector(".priority-nav").querySelectorAll(".nav__link"),t=document.querySelector(".logo"),r=document.querySelector(".priority-nav__dropdown-toggle"),n=r.classList,o=document.querySelector(".priority-nav__dropdown"),i=o.classList;function a(){i.contains("show")&&(t.classList.remove("fixed"),r.classList.remove("is-open"),o.classList.remove("show"),e.forEach((function(e,t){e.classList.remove("delay")})))}r.addEventListener("click",(function(){n.contains("is-open")?(t.classList.add("fixed"),e.forEach((function(e,t){setTimeout((function(){e.classList.add("delay")}),100*t)}))):(t.classList.remove("fixed"),e.forEach((function(e,t){e.classList.remove("delay")})))})),e.forEach((function(e){e.addEventListener("click",a)}))};window.addEventListener("scroll",(function(){var e,t,r;e=document.querySelector(".js-fixed-header"),t=e.parentElement,r=e.offsetHeight,window.pageYOffset>r?(e.classList.add("fixed"),t.style.height=r+"px"):(e.classList.remove("fixed"),t.style.height=""),function(){var e,t=document.querySelector(".js-fixed-header"),r=t.offsetHeight-30,n=h(t.querySelectorAll("a.nav__link")),o=n.map((function(e){var t=e.getAttribute("href");if((e=document.querySelectorAll(t)).length)return e;e=document.getElementsByTagName('a[name="'+t.replace("#","")+'"]')})),i=window.pageYOffset+r,a=o.map((function(e){if(e[0].offsetTop<i)return e})),s=(a=(a=a.filter(Boolean))[a.length-1])&&a.length?a[0].id?a[0].id:a.getAttribute("name"):"";e!==s&&(e=s,n.forEach((function(e){var t=e.parentElement;t.classList.remove("active"),e.getAttribute("href")==="#".concat(s)&&t.classList.add("active")})))}()}));!function(){var e=document.querySelector(".js-fixed-header"),t=e.querySelector("ul.nav__list"),r=e.offsetHeight-30,n=t.getElementsByTagName("a");h(n),document.querySelector(".logo");n.forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault();var n=e.getAttribute("href"),o=document.querySelectorAll(n)[0].offsetTop-r;window.scrollTo({top:o,behavior:"smooth"})}))}))}();var w;window.innerWidth;function b(){if(window.matchMedia("(max-width: 768px)").matches)y();else{y();null}}function g(){b()}b(),window.addEventListener("resize",(function(){clearTimeout(w),w=setTimeout(g,100)}));r(54);$("img.svg-image").each((function(){var e=$(this),t=e.attr("id"),r=e.attr("class"),n=e.attr("src");$.get(n,(function(n){var o=jQuery(n).find("svg");void 0!==t&&(o=o.attr("id",t)),void 0!==r&&(o=o.attr("class",r+" replaced-svg")),!(o=o.removeAttr("xmlns:a")).attr("viewBox")&&o.attr("height")&&o.attr("width")&&o.attr("viewBox","0 0 "+o.attr("height")+" "+o.attr("width")),e.replaceWith(o)}),"xml")}));$(".equal").matchHeight({byRow:!0,property:"height"});var L,E,_=r(30);new _.a(".top-slider",{slidesPerView:1,spaceBetween:0,autoHeight:!0,loop:!0,speed:1200,effect:"slide",autoplay:{delay:5e3},navigation:{nextEl:".top-slider__next",prevEl:".top-slider__prev"}}),L=new _.a(".services-content__slider",{direction:"vertical",mousewheel:!0,slidesPerView:1,spaceBetween:0,loop:!0,speed:700,effect:"slide",pagination:{el:"#js-services__pagination",clickable:!0}}),E=new _.a(".services-image__slider",{slidesPerView:1,spaceBetween:0,loop:!0,speed:700,effect:"fade"}),L.controller.control=E,E.controller.control=L,window.addEventListener("resize",(function(){setTimeout((function(){L.update(),E.update()}),100)})),new _.a(".study__slider",{slidesPerView:1,spaceBetween:0,autoHeight:!0,loop:!0,speed:1200,effect:"slide",pagination:{el:"#js-study-slider-pagination ",clickable:!0}});r(164),r(165);$(".price-item").each((function(){var e=$(this).find(".price-item__button >.site-button"),t=$(this).find(".price-item__head"),r=$(this).find(".price-item-rate__val"),n=$(this).find(".price-item-rate");e.hover((function(){t.add(r).add(n).addClass("active")}),(function(){t.add(r).add(n).removeClass("active")}))}));var S,A;function j(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}S=$(".filter-list"),A=document.getElementById("filter-tags").querySelectorAll("li"),S.isotope({itemSelector:".filter__item",massonary:{gutter:0,percentPosition:!0}}),A.forEach((function(e){e.addEventListener("click",(function(){var e=this.getAttribute("data-filter");S.isotope({filter:e})}))})),window.addEventListener("resize",(function(){S.isotope("layout")}));var x,O;(x=j(document.querySelectorAll(".js-tags li"))).forEach((function(e,t){e.addEventListener("click",(function(e){e.preventDefault(),x.forEach((function(e,t){e.classList.remove("active")})),this.classList.add("active")}))})),(O=$(".form__input-wrap")).each((function(){var e=$(this).find("input"),t=$(this).find("textarea");e.add(t).focusin((function(){$(this).closest(O).addClass("focused"),$(this).addClass("focused-inp")})),e.add(t).focusout((function(){$(this).closest(O).removeClass("focused"),$(this).removeClass("focused-inp")}))}));r(109),r(80);var C=r(119);function q(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}document.querySelectorAll(".phone-mask").forEach((function(e){Object(C.a)(e,{mask:"+{7}(000)000-00-00"})}));document.querySelectorAll(".js-validate").forEach((function(e){var t=e.querySelectorAll(".form__input"),r=e.querySelector(".form-submit__button");t.forEach((function(e,t){var r=e.closest(".form__input-wrap"),n=document.createElement("label");n.classList.add("form__label"),r.prepend(n)}));var n=e.querySelectorAll(".form__label");t.forEach((function(e,t){var o=e.getAttribute("name"),i=e.id,a=e.getAttribute("data-validate"),s=n[t];e.value,s.setAttribute("for",i),e.addEventListener("input",(function(t){var r=e.value;function n(){e.classList.add("error"),s.classList.add("label-error"),s.textContent="The field "+o+" is incorrect"}function i(){e.classList.add("valid"),e.classList.remove("error"),s.classList.remove("label-error"),s.classList.add("label-valid"),s.textContent=q(o)[0].toUpperCase()+q(o).slice(1).join("")}"true"===a&&"name"===o&&""!==r?r.match(/^[A-ZА-ЯЁ\s-]+$/i)?i():n():"true"===a&&"email"===o&&""!==r?r.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i)?i():n():"true"===a?""!==r?(e.classList.remove("error"),e.classList.add("valid"),s.classList.remove("label-error"),s.classList.add("label-valid"),s.textContent=q(o)[0].toUpperCase()+q(o).slice(1).join("")):(e.classList.remove("valid"),s.classList.remove("label-valid"),s.classList.remove("label-error"),s.textContent=""):"false"===a?""!==r?(s.classList.add("label-valid"),s.textContent=q(o)[0].toUpperCase()+q(o).slice(1).join("")):(s.classList.remove("label-valid"),s.textContent=""):(e.classList.remove("error"),e.classList.remove("valid"),s.classList.remove("label-error"))})),r.addEventListener("click",(function(t){var r=e.value;"true"===a&&""==r?(e.classList.add("error"),t.preventDefault(),s.classList.add("label-error"),s.textContent="The field "+o+" must be filled"):e.classList.contains("error")?(e.classList.add("error"),t.preventDefault()):e.classList.remove("error")}))}))})),window.$=s.a,window.jQuery=jQuery,l()("isotope",s.a),u.a.init({duration:500,delay:300,disable:"phone"}),window.addEventListener("resize",(function(){u.a.refresh()}))}});
//# sourceMappingURL=main.c3f0438cc45f37210c72.js.map
