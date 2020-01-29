const statsCount = () => {
  let container = document.querySelector(".stats__inner"),
    values = container.querySelectorAll(".stats__count"),
    viewportOffset = container.getBoundingClientRect(),
    header = document.querySelector(".js-fixed-header"),
    headerHeight = header.offsetHeight,
    offsetTop = viewportOffset.top;

  values.forEach(value => {
    let targetValue = Number(value.getAttribute("data-count")),
      startValue = 0;
    let timerId = setInterval(() => {
      value.textContent = startValue++;
      let currentValue = Number(value.innerHTML);
      if (currentValue === targetValue) {
        clearInterval(timerId);
      }
    }, 1);
  });
};

export default statsCount;
