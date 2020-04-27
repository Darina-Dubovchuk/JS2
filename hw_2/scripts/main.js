
//Формируем блоки товаров на странице
window.onload = function() {
    //DOM ready
    let menu1 = document.getElementById('primary_nav_wrap');
    let menu = new Menu(  
    [
        new MenuItem("index.html", 'Home',"current-menu-item",),
        new MenuItem('burger_shop.html', 'Burger_Shop',"current-menu-item",),
    ]);

    menu1.innerHTML = menu.render();

    new ProductList(GOODS_CONFIG,".goods-list");
    let cart_info = new Cart(GOODS_CONFIG);
    cart_info. addToCart();
    document.querySelector("#cart_info").innerHTML =cart_info.render();
}
