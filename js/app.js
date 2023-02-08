//--------------------------------------------------------------------------------------------------------------------------------

const buttonElement = document.querySelectorAll(".button");

buttonElement.forEach((button) => {
  button.addEventListener("keyup", (e) => {
    console.log(e);
  });
});

document.addEventListener("keydown", (e) => {
  let keyElemen = document.querySelector(`[data-key="${e.key}"]`);
  console.log(e.key);
  if (keyElemen) {
    keyElemen.classList.add("keyColor");
    setTimeout(() => {
      keyElemen.classList.remove("keyColor");
    }, 500);
  } else {
    console.log(false);
  }
});
