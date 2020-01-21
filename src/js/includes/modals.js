//modal open
$(function() {
  let modalOpen = $(".open-popup-link");
  modalOpen.magnificPopup({
    type: "inline",
    midClick: true,
    mainClass: "mfp-fade",
    removalDelay: 350
  });
});

//form input tel mask
$(function() {
  let tel = $(".tel-site-input").each(function() {
    $(this).inputmask({
      mask: "+7(999) 999 - 9999",
      showMaskOnHover: false,
      clearIncomplete: true
    });
  });
});
