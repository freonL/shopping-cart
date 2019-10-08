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

  handleCounterChange = (val) => {
    this.props.onCounterChange( val )
  }

  handleMinus = (event) => {
    if (this.state.qty > 0) {
      this.setState({qty: this.state.qty -1}, () => {
        this.handleCounterChange(-1)
      });

    }
  }

  handlePlus = (event) => {
    this.setState({qty: this.state.qty +1}, () => {
      this.handleCounterChange(+1)
    });


  }

  render () {
    return (
      <div className="Product card">
        

        <div className="card-body">
          <h5 className="card-title">{this.props.product.name}</h5>
          <img src={this.props.product.pic} className="card-img"></img>
          <p class="card-text">{this.props.product.category} <span className="float-right">${this.props.product.price}</span></p>

          <div className="row">
            <div className="col-sm-6">
              <div className="input-group">
                <div className="input-group-prepend">
                  <button className="btn-minus btn btn-outline-secondary" onClick={this.handleMinus}>-</button>
                </div>
                <input type="text" class="form-control" value={this.state.qty}/>
                {/* <b>{this.state.qty}</b> */}

                <div class="input-group-append">
                  <button className="btn-plus btn btn-outline-secondary" onClick={this.handlePlus}>+</button>
                </div>

              </div>
            </div>
            <div className="col-sm-6 text-right">
              ${ Math.round( this.state.qty * this.props.product.price * 100) / 100 }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Product