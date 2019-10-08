import React from 'react';
import logo from './logo.svg';
import Cart from './container/Cart'
import './App.css';
import Product from './container/Product';


const DUMMY_DATA = [
  {
    name: "Apple",
    category: "Fruit & Veg",
    price: 4.5,
    pic: "https://cdn0.woolworths.media/content/wowproductimages/medium/310968.jpg"
  },
  {
    name: "Strawberry",
    category: "Fruit & Veg",
    price: 12,
    pic: "https://cdn0.woolworths.media/content/wowproductimages/medium/144607.jpg"

  },

  {
    name: "Beef Mince",
    category: "Meat",
    price: 17,
    pic: "https://cdn0.woolworths.media/content/wowproductimages/medium/577860.jpg"

  },

  {
    name: "Ginger Beer",
    category: "Drinks",
    price: 2.15,
    pic: "https://cdn0.woolworths.media/content/wowproductimages/medium/180891.jpg"

  },

  {
    name: "Water",
    category: "Drinks",
    price: 1.40,
    pic: "https://cdn0.woolworths.media/content/wowproductimages/medium/769629.jpg"

  },

  {
    name: "English Muffin",
    category: "Bakery",
    price: 2,
    pic: "https://cdn0.woolworths.media/content/wowproductimages/medium/224737.jpg"

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
    this.setState({total: this.state.total + newVal})
  }

  render () {
    return (
      <div className="App ">
        <Cart total={this.state.total}/>
        <div className="products card-columns mt-2"> {
          DUMMY_DATA.map((data,i) => {
            return <Product key={i} product={data} onCounterChange={ (newVal) => this.handleCounterChange(newVal)}></Product>
          })
        }</div>
      </div>
    );
  }

}

export default App;
