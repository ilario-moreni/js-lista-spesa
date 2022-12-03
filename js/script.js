/* 1 */

let shopList = ['Yogurt', 'Banane', 'Pasta', 'Passata', 'Latte', 'Caffè', 'Carta igenica', 'Riso'];

/* shopList index */
let i = 0;

let listContent = '';


/* 2 */
/* while index < shopList length insert to listContent an li containing the shopList[i] */
while(i<shopList.length){
    listContent += `<li class="list_item">${shopList[i]}</li>`;
    i++;
}


/* important to give const */
const showList = document.getElementById('my_shop_list');


/* important to add listContent to the innerHTML */
showList.innerHTML += listContent;

console.log(listContent);
