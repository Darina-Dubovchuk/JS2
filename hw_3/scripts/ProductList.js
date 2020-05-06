



class ProductList {
    //list - в конструкторе добавляем список товаров 
    //container - и атрибут в HTML к которму будем крепить данный список товаров (#id .class)
    constructor(container) {
        this.container = container;
        // Объявление переменных
        this.goods = [];
        this.allProducts = [];
        // this._fetchProducts();
        this._getProducts()
        .then(data => {
          this.goods = [...data];
          console.log(this.goods);
          this._render();
        });
    };

    _getProducts() {
        return fetch(`${API_URL}/catalogData.json`)
            .then(response => response.json())
            .catch(error => {
              console.log(error);
            });
      }
      
    //метод который будет отдавать продукты корзине
      getGoods(){
        return  this.goods;
      }

    _render() {
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const productObject = new ProductItem(product);
            this.allProducts.push(productObject);
            block.insertAdjacentHTML('beforeend',productObject.render());
        }
    }
}



