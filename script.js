let isOn = false;

document.addEventListener("keydown", function(event) {
  if (event.code === "Space") {
    isOn = !isOn;
    document.body.style.backgroundColor = isOn ? "yellow" : "black";
  }
});
