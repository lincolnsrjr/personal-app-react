import React, {Component} from 'react';

export default class MenuItem extends Component {
  render() {
    return (
      <li className={this.props.active}>
        <a href="#" data-nav-section={this.props.section}>
          <span>{this.props.text}</span>
        </a>
      </li>
    );
  }
}
