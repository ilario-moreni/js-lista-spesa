/* 1 */

let shopList = ['Yogurt', 'Banane', 'Pasta', 'Passata', 'Latte', 'Caffè', 'Carta igenica', 'Riso'];

/* indice shopList */
let i = 0;

let listContent = '';

while(i<shopList.length){
    listContent += `<li class="list_item">${shopList[i]}</li>`;
    i++;
}

const showList = document.getElementById('my_shop_list');

showList.innerHTML += listContent;

console.log(listContent);
