const button = document.querySelector("#switch");
const body = document.querySelector("body");

button.addEventListener("click", function () {
  if (body.style.backgroundColor === "red") {
    body.style.backgroundColor = "blue";
  } else {
    body.style.backgroundColor = "red";
  }
});
