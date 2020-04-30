class ProductItem {
    constructor(product) {
        this.product = this._setProduct(product);
        //Поменяла название ключей товара и id в проекте так как в приходящем json названия ключей отличались
        //Поэтому вместо вывода имени товара появлялась надпись undefind
        this.id = this.product.id_product;
        this.title = this.product.product_name;
        this.price = this.product.price;
        this.img = this.product.img;
    }

    //метод для проверки входных данных товара и его редактирования. 
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
    }

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
    }
}
