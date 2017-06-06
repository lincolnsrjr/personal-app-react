import React, {Component} from 'react';

export default class SliderItem extends Component {

  render() {
    return (
      <div
        className="item"
        style={{
        background: this.props.backgroundColor
      }}>
        <div className="container" style={{
          position: 'relative'
        }}>
          <div className="row">
            <div
              className={this.props.imageLeft
              ? 'col-md-7 col-sm-7'
              : this.props.imageRight
                ? 'col-md-7 col-md-push-1 col-md-push-5 col-sm-7 col-sm-push-1 col-sm-push-5'
                : 'col-md-8 col-md-offset-2 text-center'}>
              <div className="fh5co-owl-text-wrap">
                <div className="fh5co-owl-text">
                  <h1 className="fh5co-lead to-animate">{this.props.title}</h1>
                  <h2 className="fh5co-sub-lead to-animate">{this.props.text}</h2>
                  <p className="to-animate-2">
                    <a href="#" className="btn btn-primary btn-lg">{this.props.textButton}</a>
                  </p>
                </div>
              </div>
            </div>

            <div
              className={this.props.imageRight
              ? 'col-md-4 col-md-pull-7 col-sm-4 col-sm-pull-7 iphone-image'
              : this.props.imageLeft
                ? 'col-md-4 col-md-push-1 col-sm-4 col-sm-push-1 iphone-image'
                : 'hidden'}>
              <div className="iphone to-animate-2"><img src={this.props.imageIphone} alt="Free HTML5 Template by FREEHTML5.co"/></div>
            </div>

          </div>
        </div>
      </div>

    );
  }
}
