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
    this.handleChange = this.handleChange.bind(this);
  }

  handleCounterChange = (val) => {
    this.props.onCounterChange( val );
  }

  handleChange = (event) => {
    let delta =  event.target.value - this.state.qty;
    this.setState({
      qty: event.target.value
    }, () => {
      this.handleCounterChange(delta);
    });
  }

  handleMinus = (event) => {
    if (this.state.qty > 0) {
      this.setState({
        qty: Number(this.state.qty) -1
      }, () => {
        this.handleCounterChange(-1);
      });

    }
  }

  handlePlus = (event) => {
    this.setState({qty: Number(this.state.qty) +1}, () => {
      this.handleCounterChange(+1);
    });


  }

  render () {
    return (
      <div className="Product card">

        <div className="card-body">
          <h5 className="card-title">{this.props.product.name}</h5>
          <img src={this.props.product.pic} className="card-img" alt=""></img>
          <p className="card-text">{this.props.product.category} <span className="float-right">${this.props.product.price}</span></p>

          <div className="row">
            <div className="col-sm-6">
              <div className="input-group">
                <div className="input-group-prepend">
                  <button className="btn-minus btn btn-outline-secondary" onClick={this.handleMinus}>-</button>
                </div>
                <input type="text" className="form-control" value={this.state.qty} onChange={this.handleChange}/>
                {/* <b>{this.state.qty}</b> */}

                <div className="input-group-append">
                  <button className="btn-plus btn btn-outline-success" onClick={this.handlePlus}><i className="fa fa-plus"></i></button>
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