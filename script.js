const goods = [
  { title: 'Shirt', price: 1500, image: 'images/shirt.jpg'},
  { title: 'Socks', price: 100},
  { title: 'Jacket', price: 3500, image: 'images/jacket.jpg'},
  { title: 'Shoes', price: 2500, image: 'images/shoes.jpg' },
];

const renderGoodsItem = ({title, price, image='images/default.jpg'}) => {
  return `
    <div class="goods-item">
      <img src="${image}" alt="">
      <h4>${title}</h4>
      <p>${price} руб.</p>
      <button class="add-button">Добавить</button>
    </div>
  `;
};

const renderGoodsList = (list) => {
  let goodsList = list.map(item => renderGoodsItem(item));
  document.querySelector('.goods-list').innerHTML = goodsList;
}

renderGoodsList(goods);