const goods = [
  { title: 'Shirt', price: 1500, image: 'images/shirt.jpg'},
  { title: 'Socks', price: 100},
  { title: 'Jacket', price: 3500, image: 'images/jacket.jpg'},
  { title: 'Shoes', price: 2500, image: 'images/shoes.jpg' },
];


class GoodsItem {
  constructor({title, price, image = 'images/default.jpg'}) {
    this.title = title;
    this.price = price;
    this.image = image;
  }

  render(){
    return `
    <div class="goods-item">
      <img src="${this.image}" alt="">
      <h4>${this.title}</h4>
      <p>${this.price} руб.</p>
      <button class="add-button">Добавить</button>
    </div>
  `;
  }
}

class GoodsList {
  goods = []
  allGoods() {
    this.goods = goods;
  }

  calculate() {
    let sumPrice = 0;
    let goodsPrice = this.goods.map((item) => {
      sumPrice += item.price;
    })
    return `Суммарная цена вещей: ${sumPrice} руб.`;
  }

  render() {
    let goodsList = this.goods.map((item) => {
      const goodsItem = new GoodsItem(item);
      return goodsItem.render();
    });
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
    document.querySelector('.sum-price').innerHTML = this.calculate();
  }
}


const goodsList = new GoodsList();
goodsList.allGoods();
goodsList.render();
goodsList.calculate();