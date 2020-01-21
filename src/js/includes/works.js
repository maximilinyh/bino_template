//	isotope filter
function worksFilter() {
  var container = $(".works-list");
  container.isotope({
    itemSelector: ".works-list__item",
    massonary: {
      gutter: 0,
      percentPosition: true
    }
  });
  $("#works-filter").on("click", "li", function(e) {
    e.preventDefault();
    var filterValue = $(this).attr("data-filter");
    var container = $(".works-list");
    container.isotope({
      filter: filterValue
    });
  });

  $(window).on("resize", function() {
    container.isotope("layout");
  });
}
worksFilter();
