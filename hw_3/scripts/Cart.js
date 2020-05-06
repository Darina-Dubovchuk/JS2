class CartItem {
    
    constructor(id_product = 1, product_name = 'Не задан', price = 0, quantity = 1, img = GOODS_IMG) {
        this.id_product = id_product
        this.product_name = product_name;
        this.price = price;
        this.quantity = quantity;
        this.img = img; // GOODS_IMG определена в config.js
}

    render() {
        //Реализация кода с конкатенацией(с плюсом) в коде, чтобы видеть структуру
        return `<hr><div class="row">`+ 
            `<div class="col-sm-1">` + 
            `<img  class="img-in-cart" alt="${this.product_name}" src="${this.img}">` + 
            `</div>` +
            `<div > <h5>Название товара</h5> ${this.product_name}</div>` +
            `<div ><h5>Цена за единицу товара</h5>${this.price}</div>` +
            `<div ><h5>Кол-во выбранных ед. товара</h5>${this.quantity}</div>` +
            `<div ><h5>Общая стоимость</h5>${this.quantity*this.price}</div>` +
            `</div><hr>`;
    }
}