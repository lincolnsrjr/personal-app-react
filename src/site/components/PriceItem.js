import React, { Component } from 'react';


class PriceItem extends Component {
  render() {    
    return (
				
				<div className="col-md-3 col-sm-6 to-animate">
					<div className={this.props.selected ? "popular price-box" :"price-box"}>
						<div className={this.props.selected ? "popular-text" :""}>{this.props.textSelected}</div>
						<h2 className="pricing-plan">{this.props.title}</h2>
						<div className="price"><sup className="currency">R$</sup>{this.props.value}</div>
						<p>{this.props.text}</p>
						<a href="#" className="btn btn-primary btn-sm">Adiquirir agora</a>
					</div>
				</div>
				
    );
  }
}

export default PriceItem;