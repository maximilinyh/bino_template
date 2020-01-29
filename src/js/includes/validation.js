//mask for phone
import IMask from "imask";

let phones = document.querySelectorAll(".phone-mask");
phones.forEach(phone => {
  const phoneMask = IMask(phone, {
    mask: "+{7}(000)000-00-00"
  });
});

//validation form
const validation = () => {
  const forms = document.querySelectorAll(".js-validate");
  forms.forEach(form => {
    let inputs = form.querySelectorAll(".form__input"),
      button = form.querySelector(".form-submit__button");

    //apend labels
    function appendLabels() {
      inputs.forEach((el, index) => {
        let group = el.closest(".form__input-wrap"),
          label = document.createElement("label");
        label.classList.add("form__label");
        group.prepend(label);
      });
    }
    appendLabels();

    let labels = form.querySelectorAll(".form__label");

    inputs.forEach((input, index) => {
      let name = input.getAttribute("name"),
        id = input.id,
        validate = input.getAttribute("data-validate"),
        currentLabel = labels[index],
        value = input.value;
      currentLabel.setAttribute("for", id);

      //input event
      input.addEventListener("input", event => {
        let value = input.value;
        //function for regex
        function error() {
          input.classList.add("error");
          currentLabel.classList.add("label-error");
          currentLabel.textContent = "The field " + name + " is incorrect";
        }

        function valid() {
          input.classList.add("valid");
          input.classList.remove("error");
          currentLabel.classList.remove("label-error");
          currentLabel.classList.add("label-valid");
          currentLabel.textContent =
            [...name][0].toUpperCase() + [...name].slice(1).join("");
        }

        //regex for valid inputs
        if (validate === "true" && name === "name" && value !== "") {
          let result = value.match(/^[A-ZА-ЯЁ\s-]+$/i);
          if (!result) {
            error();
          } else {
            valid();
          }
        } else if (validate === "true" && name === "email" && value !== "") {
          let result = value.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
          if (!result) {
            error();
          } else {
            valid();
          }
        }

        //check empty valid inputs
        else if (validate === "true") {
          if (value !== "") {
            input.classList.remove("error");
            input.classList.add("valid");
            currentLabel.classList.remove("label-error");
            currentLabel.classList.add("label-valid");
            currentLabel.textContent =
              [...name][0].toUpperCase() + [...name].slice(1).join("");
          } else {
            input.classList.remove("valid");
            currentLabel.classList.remove("label-valid");
            currentLabel.classList.remove("label-error");
            currentLabel.textContent = "";
          }

          //check not valid inputs for display label
        } else if (validate === "false") {
          if (value !== "") {
            currentLabel.classList.add("label-valid");
            currentLabel.textContent =
              [...name][0].toUpperCase() + [...name].slice(1).join("");
          } else {
            currentLabel.classList.remove("label-valid");
            currentLabel.textContent = "";
          }
        } else {
          input.classList.remove("error");
          input.classList.remove("valid");
          currentLabel.classList.remove("label-error");
        }
      });

      //click on submit check
      button.addEventListener("click", event => {
        let value = input.value;
        if (validate === "true" && value == "") {
          input.classList.add("error");
          event.preventDefault();
          currentLabel.classList.add("label-error");
          currentLabel.textContent = "The field " + name + " must be filled";
        } else if (input.classList.contains("error")) {
          input.classList.add("error");
          event.preventDefault();
        } else {
          input.classList.remove("error");
        }
      });
    });
  });
};

validation();
