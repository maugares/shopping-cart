import React, { Component } from 'react'
import './CartItem.css'

export default class CartItem extends Component {

  products = [
    {
      id: 1,
      name: "bread",
      price: 1.20,        // 1.20 €/loaf
    },
    {
      id: 2,
      name: "ham",
      price: 7.00,        // 7.00 €/Kg
    },
    {
      id: 3,
      name: "cheese",
      price: 8.90,        // 8.90 €/Kg
    },
    {
      id: 4,
      name: "beer",
      price: 1.20,        // 1.20 €/L
    }
  ]

  render() {
    return <div>
      <li className="cart-items">
        Items:
        <ul className="items">
        </ul>
      </li>
    </div>
  }
}