let inputs = document.querySelectorAll("input");
console.log(inputs);

function inputUpdate() {
  const value = this.value;
  const sizing = this.dataset.sizing || "";
  console.log(sizing);

  document.documentElement.style.setProperty(
    `--${this.name}`,
    `${this.value}${sizing}`
  );
}

inputs.forEach((input) => input.addEventListener("change", inputUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", inputUpdate));
