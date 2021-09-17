const rangeEl = document.querySelector("#font-size-control");
console.log(rangeEl);
const textEl = document.querySelector("#text");
console.log(textEl);
textEl.style.fontSize = rangeEl.value + "px";

rangeEl.addEventListener("input", (event) => {
  textEl.style.fontSize = event.currentTarget.value + "px";
});
