import React, {Component} from 'react';
import MenuItem from './MenuItem';

class Menu extends Component {
  render() {
    return (
      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav navbar-right">
          <MenuItem active={'active'} section={'home'} text={'Home'} />
          <MenuItem section={'product'} text={'Aplicativo'} />
          <MenuItem section={'prices'} text={'Preços'} />
          <MenuItem section={'contact'} text={'Contato'} />
        </ul>
      </div>
    );
  }
}

export default Menu;