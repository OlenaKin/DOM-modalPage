const windowElement = document.getElementById("myWindow");
const button = document.getElementById("openWindowBtn");

function toggleModal() {
  if (windowElement.style.display === "block") {
    windowElement.style.display = "none";
    button.textContent = "Open Window";
  } else {
    windowElement.style.display = "block";
    button.textContent = "Close Window";
  }
}

button.addEventListener("click", toggleModal);

windowElement.addEventListener("click", function (event) {
  if (event.target === windowElement) {
    toggleModal();
  }
});
