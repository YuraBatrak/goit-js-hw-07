const incrementEl = document.querySelector('[data-action="increment"]');
console.log(incrementEl);
const decrementEl  = document.querySelector('[data-action="decrement"]');
console.log(decrementEl);
const valueEl = document.querySelector('span#value')
console.log(valueEl);
let counterValue = 0;
let newValue = () => {
    valueEl.textContent = counterValue;
};
console.log(newValue);
const increment = () => {
    counterValue += 1;
  newValue();  
};
const decrement = () => {
    counterValue -= 1;
     newValue(); 
};
decrementEl.addEventListener('click', decrement);
incrementEl.addEventListener('click', increment);