const el = {
    inputEl:document.querySelector('input#name-input'),
    outputEl:document.querySelector('span#name-output')
};
console.log(el);
function inputChange(event) {
    console.log(event.currentTarget.value);
    (el.outputEl.textContent = event.currentTarget.value ||'незнакомец');
}
el.inputEl.addEventListener('input', inputChange);
