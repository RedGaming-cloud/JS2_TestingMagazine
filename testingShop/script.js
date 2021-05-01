'use strict';

const goodsCollection = [];

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductList {
    constructor(goodsCollection) {
        this.goodsCollection = goodsCollection;
    }

    renderProducts = (goodsCollection) => {
        goodsCollection.forEach(item => {
            let { name, brand, price } = item;
            document.querySelector('.goods-collection').insertAdjacentHTML("beforeend", renderProduct(name, brand, price));
        });
    }
};


class Product {
    constructor(name, brand, price) {
        this.name = name;
        this.brand = brand;
        this.price = price;
    }

    render(name, brand, price) {
        return `<div class="goods-collection__product">
                 <h4 class="type">${name}</h4>
                 <p class="brand">${brand}</p>
                 <p class="price">${price}$</p>
                 <div class="button">Добавить в корзину</div>
             </div>`;
    }


};

let getRequest = (url) => {                         // Получение реквеста, Promise вместо CallBack
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status !== 200) {
                    reject('Error');
                } else {
                    resolve(xhr.responseText);
                }
            }
        };
        xhr.send();
    })
}

getRequest(`${API}/catalogData.json`);





// getProducts(`${API}/catalogData.json`);

// getProducts(`${API}/catalogData.json`)
//     .then(new ProductList(goodsCollection))
//     .catch(console.log('error'));

