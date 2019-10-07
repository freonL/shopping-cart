import React from 'react';
import './Cart.css';

class Cart extends React.Component {
  state = {
    total : 0
  }

  render() {
    console.log(this.props)
    return (
      <div className="header-cart">
        <h1>Shopping Cart</h1>
        <p className="counter">{this.props.counter}</p>
      </div>
    )
  }
}

export default Cart;