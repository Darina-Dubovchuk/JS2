class ProductList {
    //list - в конструкторе добавляем список товаров 
    //container - и атрибут в HTML к которму будем крепить данный список товаров (#id .class)
    constructor(list,container) {
        this.container = container;
        // Объявление переменных
        this.goods = [];
        this.allProducts = [];
        // присваение значения для this.goods при помощи метода получения продуктов 
        // в последствии лист с продуктами должен приходить с сервера.
        this._fetchProducts(list);
        // Важно обратиться по ключевому слову this (т.е своиство и метод именно этого экзепляра)
        this._render();
    };
    //получение товара
    _fetchProducts(list_with_goods) {
         this.goods = list_with_goods;
    };
    
    _render() {
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const productObject = new ProductItem(product);
            this.allProducts.push(productObject);
            block.insertAdjacentHTML('beforeend',productObject.render());
        }
    }
}
// Блок отладки
// функция применятся для выполнения кода, после полной загрузки страницы
// так же поможет если забуду прописать defer при подключении скрипта
// window.onload = function() {
//     let container = '#goods';
//     new ProductList(GOODS_CONFIG,container);
// }


