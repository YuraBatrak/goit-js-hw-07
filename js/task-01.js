
const list = document.querySelector('#categories');
console.log(`'В списке ${[...list.children].length} категории.'`); 
let itemList = [...list.children].map((li)=>{
    return [...li.children];
});
let title = itemList.map(child => child.find(obj => obj.nodeName === "H2" ).textContent);
console.log(`Категория ${[ ...title] }`);
let numbersEl = itemList.map(child => child.find(obj => obj.nodeName === "UL" ).children.length);
console.log(`Количество элементов ${[ ...numbersEl] }`);
