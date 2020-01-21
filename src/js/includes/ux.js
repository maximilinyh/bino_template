//tags active item on click
const tagsActive = () => {
	let tagsList = document.querySelectorAll(".js-tags li"),
		tagsListArr = [...tagsList];

	tagsListArr.forEach((item, i) => {
		item.addEventListener("click", function (event) {
			event.preventDefault();
			tagsListArr.forEach((item, i) => {
				item.classList.remove("active");
			});
			this.classList.add("active");
		});
	});
};

tagsActive();

//focus inputs effect
function focusedInp() {
	let inputWrap = $(".form__input-wrap");
	inputWrap.each(function () {
		let $input = $(this).find("input"),
			$textarea = $(this).find("textarea");
		$input.add($textarea).focusin(function () {
			$(this)
				.closest(inputWrap)
				.addClass("focused");
			$(this).addClass("focused-inp");
		});

		$input.add($textarea).focusout(function () {
			$(this)
				.closest(inputWrap)
				.removeClass("focused");
			$(this).removeClass("focused-inp");
		});
	});
}

focusedInp();
