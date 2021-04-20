'use strict';

const goodsCollection = [
    {
        type: 'item',
        id: 1,
        name: 'Клавиатура',
        brand: 'O-Klick',
        price: 980,
    },
    {
        type: 'item',
        id: 2,
        name: 'Клавиатура',
        brand: 'Genius',
        price: 760,
    },
    {
        type: 'item',
        id: 3,
        name: 'Ноутбук',
        brand: 'Hewlett-Packard',
        price: 17300,
    },
    {
        type: 'item',
        id: 4,
        name: 'Мышь',
        brand: 'Genius',
        price: 670,
    }
];

const renderProduct = (type, brand, price) => {
    return `<div class="goods-collection__product">
                <h4 class="type">${type}</h4>
                <p class="brand">${brand}</p>
                <p class="price">${price}$</p>
                <div class="button">Добавить в корзину</div>
            </div>`;
}

const renderProducts = (goodsCollection) => {
    goodsCollection.forEach(item => {
        let { name, brand, price } = item;
        document.querySelector('.goods-collection').insertAdjacentHTML("beforeend", renderProduct(name, brand, price));
    });
}

renderProducts(goodsCollection);