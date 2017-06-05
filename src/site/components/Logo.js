import React, { Component } from 'react';


class Logo extends Component {
  render() {    
    return (
      <div className="navbar-header">		        	
					<a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
		          	<a className="navbar-brand" href="index.html">{this.props.name}</a>   
      </div>
    );
  }
}

export default Logo;