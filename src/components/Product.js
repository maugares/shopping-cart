import React, { Component } from 'react'
import './Product.css'

export default class Product extends Component {

  render() {
    return <li>
      <p className="name">{this.props.name}</p>
      <p className="price">{this.props.price}</p>
    </li>
  }
}