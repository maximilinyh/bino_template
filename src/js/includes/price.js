//price hover function
function priceHover() {
  let priceItem = $(".price-item");
  priceItem.each(function() {
    let btn = $(this).find(".price-item__button >.site-button"),
      head = $(this).find(".price-item__head"),
      rate = $(this).find(".price-item-rate__val"),
      icon = $(this).find(".price-item-rate");
    btn.hover(
      function() {
        head
          .add(rate)
          .add(icon)
          .addClass("active");
      },

      function() {
        head
          .add(rate)
          .add(icon)
          .removeClass("active");
      }
    );
  });
}

priceHover();
