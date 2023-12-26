let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let header = document.querySelector('.header');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
    header.style.zIndex = '10';
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
    header.style.zIndex = '1000';
})

let products = [
    {
        id: 1,
        name: 'Stationary Bikes',
        image: '1.PNG',
        price: 1200
    },
    {
        id: 2,
        name: 'Strength Training Machines',
        image: '10.PNG',
        price: 5000
    },
    {
        id: 3,
        name: 'Dumbbells',
        image: '14.PNG',
        price: 2200
    },
    {
        id: 4,
        name: 'Strength Training Machines',
        image: '13.PNG',
        price: 1230
    },
    {
        id: 5,
        name: 'Strength Training Machines',
        image: '5.PNG',
        price: 3200
    },
    {
        id: 6,
        name: 'Elliptical Trainers',
        image: '11.PNG',
        price: 1200
    },
    {
        id: 7,
        name: 'Strength Training Machines',
        image: '12.PNG',
        price: 1200
    },
    {
        id: 8,
        name: 'Strength Training Machines',
        image: '2.PNG',
        price: 2000
    },
    {
        id: 9,
        name: 'Strength Training Machines',
        image: '3.PNG',
        price: 2000
    },
    {
        id: 10,
        name: 'Kettlebells',
        image: '4.PNG',
        price: 1230
    },
    {
        id: 11,
        name: 'Strength Training Machines',
        image: '5.PNG',
        price: 3200
    },
    {
        id: 12,
        name: 'Adjustable Dumbbells',
        image: '6.PNG',
        price: 1200
    }
];
let listCards  = [];
function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item'); // Add 'row' class for styling
        newDiv.innerHTML = `
            <img src="image/${value.image}" alt="">

            <div class="heart-icon">
                <i class="bi bi-heart"></i>
            </div>
            <div class="ratting">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-half"></i>
            </div>
            <div class="price">
                <h4>${value.name}</h4>
                <p>${value.price.toLocaleString()}$</p>
            </div>
            <div class="add-to-cart">
                <button onclick="addToCard(${key})" class="btn">Add to Cart</button>
            </div>`;
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

total.addEventListener('click', () => {
    body.classList.remove('active');
    header.style.zIndex = '1000';
    alert('Teşekkür ederiz! Satın alma işleminiz için teşekkür ederiz.');
    listCards = [];
    reloadCard();
});