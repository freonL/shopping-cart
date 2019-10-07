import React from 'react';
import './Product.css';

class Product extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      qty:0
    }

    this.handlePlus = this.handlePlus.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
  }

  handleCounterChange = () => {
    this.props.onCounterChange( this.state.qty )
  }

  handleMinus = (event) => {
    if (this.state.qty > 0) {
      this.setState({qty: this.state.qty -1}, () => {
        this.handleCounterChange()
      });
      
    }
  }

  handlePlus = (event) => {
    this.setState({qty: this.state.qty +1}, () => {
      this.handleCounterChange()
    });
    

  }

  render () {
    return (
      <div className="Product">
        <h2>{this.props.product.name}</h2>
        {this.props.product.category}
        <img src={this.props.product.pic}></img>
        ${this.props.product.price}
        
        <div>
          <button className="btn-minus" onClick={this.handleMinus}>-</button>
          <b>{this.state.qty}</b>
          <button className="btn-plus" onClick={this.handlePlus}>+</button>
        </div>
        ${ this.state.qty * this.props.product.price}
      </div>
    )
  }
}

export default Product