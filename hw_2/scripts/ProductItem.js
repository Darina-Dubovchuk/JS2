class ProductItem {
    //Добавлен параметр id в конструктор.
    constructor(product) {
        this.product = this._setProduct(product);
        this.id = this.product.id;
        this.title = this.product.title;
        this.price = this.product.price;
        this.img = this.product.img;
    };
    //мветод для проверки входных данных товара и его редактирования. 
    //Задала картинки по умолчанию
    _setProduct(product) {
        //метод кеys фильтрует по заданному условию объект product переведя ключи объекта в массив
        //проверяю есть ли в массиве строковый элемент img с помощью метода includes()
        if (!Object.keys(product).includes("img")) {
            //в случае отсутствия ключа img в объекте produkt добавила картинку по умолчанию
            //с помощью метода Object.assign() - который объединяет объекты в один.
            return  Object.assign(product,{img:"img\\404.png"});
        }
        else   return product;
    };

    render() {
        return `<div class="hover-product" "product-item" data-id="${this.id}">
                <a class="product" href="#">
                    <img src=${this.img} alt=${this.title}>
                    <div class="product-text">
                        <p>${this.title}</p>
                        <span>$${this.price}</span>
                    </div>
                </a>
                <div class="flex-center">
                    <a class="add-to-cart buy_btn" href="#">Buy</a>
                </div>
             </div>`
    };
}
// Функция для отладки класса:
// window.onload = function() {
//     let product_1 = new ProductItem(GOODS_CONFIG[1].id,GOODS_CONFIG[1].title,GOODS_CONFIG[1].price,GOODS_CONFIG[1].img_src);
//     document.querySelector('#goods').innerHTML =product_1.render();
// }
