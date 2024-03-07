/// cart page

let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Wooden Furniture',
        image:'kam-idris-_HqHX3LBN18-unsplash.jpg',
        price:  120000
    },
    {
        id: 2,
        name: 'Sofa',
        image: 'daniil-silantev-sN4u56baSB0-unsplash.jpg',
        price: 420000
    },
    {
        id: 3,
        name: 'Wooden Chair',
        image: 'martin-pechy-bpg-ngqrPc8-unsplash.jpg',
        price: 220000
    },
    {
        id: 4,
        name: 'Interior furniture',
        image: 'inside-weather-Uxqlfigh6oE-unsplash.jpg',
        price: 123000
    },
    {
        id: 5,
        name: 'Modern Table ',
        image: './ruslan-bardash-4kTbAMRAHtQ-unsplash.jpg',
        price: 320000
    },
    {
        id: 6,
        name: 'Classic Chair',
        image: './charlesdeluvio-0Y1qUg1w2bs-unsplash.jpg',
        price: 120000
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        console.log(key?value.id:1);
        newDiv.innerHTML = `
            <img src=${value.image}>
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        console.log(value.price)
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}