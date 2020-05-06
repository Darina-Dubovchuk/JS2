
//Формируем блоки товаров на странице
window.onload = function () {
    //DOM ready
    let menu = new Menu([new MenuItem("index.html", 'Home', "current-menu-item"),]);
    //спрятать вывод в размекту в объект Menu по типу продуктового листа.
    document.getElementById('primary_nav_wrap').innerHTML = menu.render();
    //Вывод товаров в разметку
    new ProductList(".goods-list");
    new Cart();

}