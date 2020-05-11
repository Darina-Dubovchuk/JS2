const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue(
    {
        el: '#app',
        data: {
            catalogUrl: '/catalogData.json',
            products: [],
            imgCatalog: 'https://placehold.it/200x150',
            // создаю поле для привязки к поиску и иниц-ю пустой строкой
            searchLine:'',
            cartProducts:[],
            //Добавление поля управления видимости корзины
            isVisibleCart: 0, 
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
                console.log(product.id_product);
                this.cartProducts.push(product);
            },
            FilterGoods(){
                if(this.searchLine){
                    let regexp = new RegExp(this.searchLine, 'i');
                    this.products = this.products.filter((item)=>{
                        if(regexp.test(item['product_name'])){
                            return item;
                        }
                    });
                    return this.products;
                }
                return this.products;
            }
        },
        mounted() {
            this.getJson(`${API + this.catalogUrl}`)
                .then(data => {
                    for (let el of data) {
                        this.products.push(el);
                    }
                });
        }
    }
);