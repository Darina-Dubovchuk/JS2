class Cart {
    constructor(goodsList) {
        this.goodsList = [];
        this._fetchProducts(goodsList);
        this.goodsInTheCard = 0; //  кол-во ед. товара в корзине
        this.goodsAmount = this._calcAmount(); //сумма всех товаров
        // this._calcItem();
    }

    //получение товара
    _fetchProducts(list) {
        this.goodsList = list;
    };

    _calcAmount() {
        let cost = 0;
        // переберая в списке goodsList объекты товара good,
        // нахожу в них все с ключем price и складываю
        // for (let good of this.goodsList) {
        //     cost += good.price;
        // }
        // return cost;
        this.goodsList.forEach(good => cost += good.price);
        return cost;
    }

    _calcAllItem() {
        return this.sumItem = this.goodsList.length;
    }

    addToCart(){
         const elems = document.querySelectorAll(".buy_btn");
         for(const elem of elems ){
                 elem.addEventListener('click', () =>{
                    this.goodsInTheCard++;
                //важно было понять, что нужно рендерить заново, иначе не выведится обновление на странице
                document.querySelector("#cart_info").innerHTML = this.render();
            });
         }     
    }

    render() {
        return `
        <div>
            Amount of goods in the cart: <span id="bascet-count">${this.goodsInTheCard}</span>
            The total cost of goods in the catalog:<span id= "bascet-price">${this.goodsAmount}</span>
        </div>
        `
    }


    // увеличить кол-во товара
    // addAmount(id) {}

    // удалить товар
    // delGood(id) {};

    // уменьшить кол-во товара
    // reduceAmount(id) {};

    // изменить кол-во товара
    // changeAmount(id, newAmout) {};

}
