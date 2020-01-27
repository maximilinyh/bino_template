//	isotope filter

const filterFunc = () => {
	const container = $('.filter-list');
	let filter = document.getElementById('filter-tags'),
		item = filter.querySelectorAll('li');

	container.isotope({
		itemSelector: ".filter__item",
		massonary: {
			gutter: 0,
			percentPosition: true
		}
	});
	item.forEach((item) => {
		item.addEventListener('click', function () {
			let filterVal = this.getAttribute('data-filter');
			container.isotope({
				filter: filterVal
			});
		})
	})
	window.addEventListener("resize", function () {
		container.isotope("layout");
	});
}
filterFunc();
