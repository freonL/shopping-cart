import React from 'react';
import './Cart.css';

class Cart extends React.Component {

  render() {
    // console.log(this.props)
    return (
      <nav  className="header-cart navbar navbar-dark bg-primary">
        <h1 className="navbar-brand" >Shopping Cart</h1>
        <span>
          <i className="fa fa-shopping-cart text-light fa-2x"></i>
          <span className="badge badge-danger">{this.props.total}</span>
        </span>

      </nav >
    )
  }
}

export default Cart;