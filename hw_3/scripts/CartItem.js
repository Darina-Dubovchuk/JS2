class Cart {
    constructor() {
        this.cart = [];
        this.amount = 0; // сумма корзины
        this.countGoods = 0; //кол-во товаров в корзине
        this.goodsList = [];
        this._getBascet();
    }
    
    // присваиваем значения свойствам Cart
    setCartItems() {
        //в полученном массиве под ключем ammount вытягиваем значение
        this.amount = this.cart['amount'];
        console.log(`this.amount: ${this.amount}`);
         //в полученном массиве под ключем countGoods вытягиваем значение
        this.countGoods = this.cart['countGoods'];
        this.goodsList = this.cart['contents'];
        //смотрю id в консольке
        console.log('this.goodsList[0].id_product ' + this.goodsList[0].id_product);
        console.log( this.goodsList);

    }

    // парсим файл с сервера getBasket.json
    _getBascet() {
        return fetch(`${API_URL}/getBasket.json`)
                .then(response => response.json())
                .catch(error => {
                console.log('Проблемы с корзиной');
            }).then(data => {
                //полученные данные с сервера присваиваю cart
                this.cart = data;
                // console.log(this.cart);
                // this._render();
              })
            .then(() => this.setCartItems()) 
            .then(() => {this.calcAmount(); console.log(this.calcAmount());})
            .then(() => this.calcCountGoods())
            .then(() => this.renderList())
            .then(() => this._render())
            .catch(error => {
                console.log(error);
              });

    }


    // сумма корзины
    calcAmount() {
        this.amount = this.goodsList.reduce((sum, currentItem) => sum + (+currentItem.quantity) * (+currentItem.price), 0);
        return this.amount;
    };

    // кол-во товаров в корзине
    calcCountGoods() {
        this.countGoods = this.goodsList.reduce((sum, currentItem) => sum + (+currentItem.quantity), 0);

        return this.countGoods;
    };

    _render() {
        document.getElementById('cart-results').innerHTML = `<p>Кол-во товаров в корзине: ${this.countGoods}</p><p>Сумма корзины: ${this.amount}  р.</p> `;

        // сумма корзины
        console.log('Сумма корзины: ' + this.amount);
        // кол-во товаров
        console.log('Кол-во товаров в корзине: ' + this.countGoods);
    }

    // выводит список товаров  в окно корзины товаров
    renderList() {
        let listHtml = '';
        this.goodsList.map(good => {
            // создается новый объект CartItem для товара в корзине: 
            const goodItem = new CartItem(good.id_product, good.product_name, good.price, good.quantity);

            listHtml += goodItem.render();

        });
        document.getElementById('cart-list').innerHTML = listHtml;

    }

}
