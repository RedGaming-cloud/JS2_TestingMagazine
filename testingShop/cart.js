'use strict'

// const goodsCollection = [
//     {
//         type: 'item',
//         id: 1,
//         name: 'Клавиатура',
//         brand: 'O-Klick',
//         price: 980,
//     },
//     {
//         type: 'item',
//         id: 2,
//         name: 'Клавиатура',
//         brand: 'Genius',
//         price: 760,
//     },
//     {
//         type: 'item',
//         id: 3,
//         name: 'Ноутбук',
//         brand: 'Hewlett-Packard',
//         price: 17300,
//     },
//     {
//         type: 'item',
//         id: 4,
//         name: 'Мышь',
//         brand: 'Genius',
//         price: 670,
//     }
// ];

// class ProductList {
//     constructor(container = '.goods-collection') {
//         this.container = container;
//         this.goods = [];
//         this.productList = [];

//         this.fetchGoods();
//         this.renderProductList();
//     }

//     renderProductList() {
//         this.block = document.querySelector(this.container);
//         for (const good of this.goods) {
//             const productObj = new ProductItem(good);
//             this.productList.push(productObj);
//             this.block.insertAdjacentHTML('beforeend', productObj.render());
//         }
//     }

//     fetchGoods() {
//         this.goods = [
//             {
//                 type: 'item',
//                 id: 1,
//                 name: 'Клавиатура',
//                 brand: 'O-Klick',
//                 price: 980,
//             },
//             {
//                 type: 'item',
//                 id: 2,
//                 name: 'Клавиатура',
//                 brand: 'Genius',
//                 price: 760,
//             },
//             {
//                 type: 'item',
//                 id: 3,
//                 name: 'Ноутбук',
//                 brand: 'Hewlett-Packard',
//                 price: 17300,
//             },
//             {
//                 type: 'item',
//                 id: 4,
//                 name: 'Мышь',
//                 brand: 'Genius',
//                 price: 670,
//             }
//         ];
//     }
// }

// class ProductItem {
//     constructor(item) {
//         this.name = item.name;
//         this.brand = item.brand;
//         this.price = item.price;
//     }

//     render(name, brand, price) {
//         return `<div class="goods-collection__product">
//                  <h4 class="type">${name}</h4>
//                  <p class="brand">${brand}</p>
//                  <p class="price">${price}$</p>
//                  <div class="button">Добавить в корзину</div>
//              </div>`;
//     }
// }

class GoodsList {
    constructor(container = '.cart-collection') {
        this.container = container;
        this.goods = [];
        this.GoodsList = [];
    }

    getFullPrice() {
        return this.goods.reduce((sum, { fullPrice }) => sum + fullPrice, 0);
    };

    renderFullPrice() {
        document.querySelector('.cart__price-block').insertAdjacentHTML("beforeend",
            `<div class="price-block">
            <p class="price-header">Итоговая стоимость корзины составила:</p>
            <p class="price">${this.getFullPrice}</p>
        </div>`)
    };


}

class CartItem extends ProductItem {
    constructor(item) {
        super(item);
        this.quantity = item.quantity;
        this.fullPrice = this.quantity * this.price;
    }

    ItemRender() {
        return `<div class="goods-collection__product">
                 <h4 class="type">${this.name}</h4>
                 <p class="brand">${this.brand}</p>
                 <p class="price">${this.price}$</p>
                 <p class="quantity">${this.quantity}$</p>
                 <p class="fullPrice">${this.fullPrice}$</p>
             </div>`;
    }
}

// new ProductList();