const goods = [
    { title: 'Chokolate', price: 150, img_src: "img\\chokolate.jpg" },
    { title: 'Coconut', price: 50, img_src: "img\\coconut.jpg" },
    { title: 'Shampoo', price: 350, img_src: "img\\shampoo.jpg" },
    { title: 'Shoes', price: 250, },
];

const renderGoodsItem = (title, price, img_src = "img\\404.png") => {
    return `<div class="hover-product">
                <a class="product" href="#">
                    <img src=${img_src} alt=${title}>
                    <div class="product-text">
                        <p>${title}</p>
                        <span>$${price}</span>
                    </div>
                </a>
                <div class="flex-center">
                    <a class="add-to-cart" href="#">Buy</a>
                </div>
             </div>`
};

const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price, item.img_src));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
}

renderGoodsList(goods);

