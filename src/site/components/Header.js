import React, {Component} from 'react';
import Logo from './Logo';
import Menu from './Menu';

class Header extends Component {
  render() {
    return (
      <header role="banner" id="fh5co-header">
        <div className="container">
          <nav className="navbar navbar-default">
            <Logo name={'PersonalAPP'}/>
            <Menu/>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;