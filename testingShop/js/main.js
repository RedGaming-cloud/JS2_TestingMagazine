const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    catalogUrl: '/catalogData.json',
    searchLine: '',
    products: [],
    searchedItems: [],
    cartItems: [],
    isVisibleCart: false,
    imgCatalog: 'https://placehold.it/200x150'
  },
  methods: {
    getJson(url) {
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          console.log(error);
        })
    },
    addProduct(product) {
      this.getJson(`${API}/addToBasket.json`)
        .then(data => {
          if (data.result === 1) {
            let find = this.cartItems.find(el => el.id_product === product.id_product);
            if (find) {
              find.quantity++;
            } else {
              let prod = Object.assign({ quantity: 1 }, product);
              this.cartItems.push(prod)
            }
          } else {
            alert('Error');
          }
        })
    },
  },
  filterGoods() {
    let regExp = new RegExp(this.searchLine, 'i');
    this.searchedItems = this.products.filterGoods(el => regExp.test(el.product_name));
  },
  beforeCreate() { },
  created() {
    this.getJson(`${API + this.catalogUrl}`)
      .then(data => {
        for (let el of data) {
          this.products.push(el);
        }
      });
  },
  beforeMount() { },
  mounted() { },
  beforeUpdate() { },
  updated() { },
  beforeDestroy() { },
  destroyed() { },
});
