import React, { Component } from 'react';
import Header from './Header';
import Slider from './Slider';
import Product from './Product';
import Price from './Price';
import Footer from './Footer';

class Site extends Component {
  render() {    
    return (
      <div>
        <Header/>
        <Slider/>
        <Product/>
        <Price/>
        <Footer/>
      </div>     
    );
  }
}

export default Site;