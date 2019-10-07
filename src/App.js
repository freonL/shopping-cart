import React from 'react';
import logo from './logo.svg';
import Cart from './container/Cart'
import './App.css';
import Product from './container/Product';


const DUMMY_DATA = [
  {
    name: "Apple",
    category: "Fruit",
    price: 4.5,
    pic: "https://cdn0.woolworths.media/content/wowproductimages/medium/310968.jpg"
  },
  {
    name: "Strawberry",
    category: "Fruit",
    price: 12,
    pic: "https://cdn0.woolworths.media/content/wowproductimages/medium/144607.jpg"

  },

  {
    name: "Beef Mince",
    category: "Meet",
    price: 17,
    pic: "https://cdn0.woolworths.media/content/wowproductimages/medium/577860.jpg"

  },
];

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      total:0
    }
  }

  handleCounterChange = (newVal) => {
    this.setState({total: newVal})
  }

  render () {
    return (
      <div className="App">
        <Cart counter={this.state.total}/>
        <div>{
          DUMMY_DATA.map((data,i) => {
            return <Product key={i} product={data} onCounterChange={ (newVal) => this.handleCounterChange(newVal)}></Product>
          })
        }</div>
      </div>
    );
  }

}

export default App;
