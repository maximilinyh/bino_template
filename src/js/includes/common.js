//svg img make inline function
function svgInline() {
  $("img.svg-image").each(function() {
    let $img = $(this),
      imgID = $img.attr("id"),
      imgClass = $img.attr("class"),
      imgURL = $img.attr("src");
    $.get(
      imgURL,
      function(data) {
        // Get the SVG tag, ignore the rest
        let $svg = jQuery(data).find("svg");

        // Add replaced image's ID to the new SVG
        if (typeof imgID !== "undefined") {
          $svg = $svg.attr("id", imgID);
        }
        // Add replaced image's classes to the new SVG
        if (typeof imgClass !== "undefined") {
          $svg = $svg.attr("class", imgClass + " replaced-svg");
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr("xmlns:a");

        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
        if (
          !$svg.attr("viewBox") &&
          $svg.attr("height") &&
          $svg.attr("width")
        ) {
          $svg.attr(
            "viewBox",
            "0 0 " + $svg.attr("height") + " " + $svg.attr("width")
          );
        }

        // Replace image with new SVG
        $img.replaceWith($svg);
      },
      "xml"
    );
  });
}
svgInline();

//	equalizer plugin for height equal item
function equalizeHeight() {
  let equalItem = $(".equal");
  equalItem.matchHeight({
    byRow: true,
    property: "height"
  });
}
equalizeHeight();
