//header js

import smoothscroll from "smoothscroll-polyfill";
// kick off the polyfill!
smoothscroll.polyfill();

//flexmenu plugin import
import priorityNav from "priority-nav";

//flexmenu plugin function
const flexMenuInit = () => {
	priorityNav.init({
		initClass: "js-flexMenu",
		breakPoint: 769,
		navDropdownBreakpointLabel: "menu"
	});
};
//flexmenu function init
flexMenuInit();
//end flexmenu


//manipulation with mobile nav
const mobileMenuAnimation = () => {
	let nav = document.querySelector('.priority-nav'),
		links = nav.querySelectorAll('.nav__link'),
		linksArr = [...links],
		logo = document.querySelector('.logo'),
		burger = document.querySelector('.priority-nav__dropdown-toggle'),
		burgerClass = burger.classList,
		dropDown = document.querySelector('.priority-nav__dropdown'),
		dropDownClass = dropDown.classList;

	function animationLogoAndItems() {
		if (burgerClass.contains('is-open')) {
			logo.classList.add('fixed');
			linksArr.map((item, index) => {
				setTimeout(() => {
					item.classList.add('delay')
				}, 100 * index);
			})
		} else {
			logo.classList.remove('fixed');

			linksArr.map((item, index) => {
				item.classList.remove('delay')
			})
		}
	}

	function clickLinks() {
		if (dropDownClass.contains('show')) {
			logo.classList.remove('fixed');
			burger.classList.remove('is-open');
			dropDown.classList.remove('show');
			linksArr.map((item, index) => {
				item.classList.remove('delay')
			})
		}

	}
	//events
	burger.addEventListener('click', animationLogoAndItems)
	linksArr.forEach((item) => {
		item.addEventListener('click', clickLinks);
	})

}

//export function
export {
	mobileMenuAnimation
};

//end manipulation with mobile nav


//fixed header function
const fixedHeader = () => {
	let header = document.querySelector(".js-fixed-header"),
		headerWrap = header.parentElement,
		h = header.offsetHeight,
		w = window,
		scrollHeight = w.pageYOffset;

	if (scrollHeight > h) {
		header.classList.add("fixed");
		headerWrap.style.height = h + "px";
	} else {
		header.classList.remove("fixed");
		headerWrap.style.height = "";
	}
}

//nav scroll spy function
const scrollSpy = () => {
	let header = document.querySelector(".js-fixed-header"),
		headerHeight = header.offsetHeight - 30,
		navLinks = header.querySelectorAll("a.nav__link"),
		navLinksArr = [...navLinks],
		scrollItems = navLinksArr.map(item => {
			let itemHref = item.getAttribute("href");
			item = document.querySelectorAll(itemHref);
			if (item.length) {
				return item;
			} else {
				item = document.getElementsByTagName(
					'a[name="' + itemHref.replace("#", "") + '"]'
				);
			}
		}),
		fromTop = window.pageYOffset + headerHeight,
		current = scrollItems.map(item => {
			if (item[0].offsetTop < fromTop) {
				return item;
			}
		}),
		lastId;

	current = current.filter(Boolean);
	current = current[current.length - 1];

	let id =
		current && current.length ?
		current[0].id ?
		current[0].id :
		current.getAttribute("name") :
		"";
	//  console.log(id);
	if (lastId !== id) {
		lastId = id;
		navLinksArr.forEach(item => {
			let navItem = item.parentElement;
			navItem.classList.remove("active");
			if (item.getAttribute("href") === `#${id}`) {
				navItem.classList.add("active");
			}
		});
	}
};

//scroll events
window.addEventListener("scroll", function () {
	fixedHeader();
	scrollSpy();
});

//animate scroll function
const animateScroll = () => {
	let header = document.querySelector(".js-fixed-header"),
		navList = header.querySelector("ul.nav__list"),
		headerHeight = header.offsetHeight - 30,
		navLinks = navList.getElementsByTagName("a"),
		navLinksArr = [...navLinks],
		logo = document.querySelector(".logo");

	navLinks.forEach(item => {
		item.addEventListener("click", event => {
			event.preventDefault();
			let id = item.getAttribute("href"),
				section = document.querySelectorAll(id),
				fromTop = section[0].offsetTop - headerHeight;
			window.scrollTo({
				top: fromTop,
				behavior: "smooth"
			});
		});
	});
};

animateScroll();
