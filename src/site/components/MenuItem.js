import React, {Component} from 'react';
import  {Link} from 'react-router-dom';
export default class MenuItem extends Component {
  render() {
    return (
      <li className={this.props.active}>
        <Link className={this.props.to !== undefined ? 'external' : ''}
          to={this.props.to !== undefined
          ? this.props.to
          : '/'} data-nav-section={this.props.section}>
            <span>{this.props.text}</span>
        </Link>
      </li>
    );
  }
}
