import React, {Component} from 'react';

class ProductItem extends Component {
  render() {
    return (
      <div className="col-md-4 col-sm-6 col-xs-6 col-xxs-12 fh5co-service to-animate">
        <div className="fh5co-icon">
          <i className={'icon-' + this.props.icon}></i>
        </div>
        <div className="fh5co-desc">
          <h3>{this.props.title}</h3>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default ProductItem;