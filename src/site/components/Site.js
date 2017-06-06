import React, { Component } from 'react';
import Header from './Header';
import Slider from './Slider';
import Product from './Product';
import Price from './Price';
import Footer from './Footer';
import Contact from './Contact';

class Site extends Component {
  render() {    
    return (
      <div>
        <Header nameApp={'PersonalAPP'}/>
        <Slider section={'home'} />
        <Product section={'product'}/>
        <Price section={'prices'}/>
        <Contact section={'contact'} />
        <Footer nameApp={'PersonalAPP'}/>
      </div>     
    );
  }
}

export default Site;