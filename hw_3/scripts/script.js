// const list = new GoodsList();
// list.fetchGoods();



//list.fetchGoods((goods) => {
//    list.render();
//});


// addToCart(){
//     const elems = document.querySelectorAll(".buy_btn");
//     for(const elem of elems ){
//             elem.addEventListener('click', (e) => {
//                 e = e || event;
//                 var target = e.target || e.srcElement;
            
//                 //console.log(target);
//                 //console.log(target.id);
//            //важно было понять, что нужно рендерить заново, иначе не выведится обновление на странице
//            document.querySelector("#cart_info").innerHTML = this.render();
//        });
//     }     
// }

// addToCart(){
//     const elems = document.querySelectorAll(".buy_btn");
//     for(const elem of elems ){
//             elem.addEventListener('click', () =>{
//                this.goodsInTheCard++;
//            //важно было понять, что нужно рендерить заново, иначе не выведится обновление на странице
//            document.querySelector("#cart_info").innerHTML = this.render();
//        });
//     }     
// }

// // слушатель кликов по кнопке "добавить в корзину" списка товаров на странице
// document.getElementById('goods-list').addEventListener('click', (e) => {
//     e = e || event;
//     var target = e.target || e.srcElement;

//     //console.log(target);
//     //console.log(target.id);
    
//     if (target.id) {
//         let arrId = target.id.split('addToCart_');
//         let id = +arrId[1];
//         console.log(id);
//         if (!cart) new Cart();
//         cart.addAmount(id, 1);
//     }

// });

