import React, { Component } from 'react'
import Product from './Product'
import './CartItem.css'

const products = [
  {
    key: 1,
    name: "bread",
    price: 1.20,        // 1.20 €/loaf
  },
  {
    key: 2,
    name: "ham",
    price: 7.00,        // 7.00 €/Kg
  },
  {
    key: 3,
    name: "cheese",
    price: 8.90,        // 8.90 €/Kg
  },
  {
    key: 4,
    name: "beer",
    price: 1.20,        // 1.20 €/L
  }
]

export default class CartItem extends Component {

  renderItems = (item) => {
    console.log("renderItems")
    return (
      <Product
        name={item.name}
        price={item.price}
      />
    )
  }

  render() {
    return <div>
      <li className="cart-items">
        Items:
        <ul className="items">

          {products.map(this.renderItems)}


        </ul>
      </li>
    </div>
  }
}