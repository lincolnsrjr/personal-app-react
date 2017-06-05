import React, {Component} from 'react';

class Slider extends Component {
  render() {
    return (
      <div id="slider" data-section="home">
        <div className="owl-carousel owl-carousel-fullwidth">
          <div className="item" style={{
            background: '#352f44'
          }}>
            <div
              className="container"
              style={{
              position: 'relative'
            }}>
              <div className="row">
                <div className="col-md-7 col-sm-7">
                  <div className="fh5co-owl-text-wrap">
                    <div className="fh5co-owl-text">
                      <h1 className="fh5co-lead to-animate">Case Study Title</h1>
                      <h2 className="fh5co-sub-lead to-animate">100% Free Fully Responsive HTML5
                        Bootstrap Template. Crafted with love by the fine folks at
                        <a href="http://freehtml5.co/" target="_blank">FREEHTML5.co</a>
                      </h2>
                      <p className="to-animate-2">
                        <a href="#" className="btn btn-primary btn-lg">View Case Study</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-md-push-1 col-sm-4 col-sm-push-1 iphone-image">
                  <div className="iphone to-animate-2"><img src="images/iphone-2.png" alt="Free HTML5 Template by FREEHTML5.co"/></div>
                </div>

              </div>
            </div>
          </div>

          <div className="item" style={{
            background: '#38569f'
          }}>
            <div
              className="container"
              style={{
              position: 'relative'
            }}>
              <div className="row">
                <div
                  className="col-md-7 col-md-push-1 col-md-push-5 col-sm-7 col-sm-push-1 col-sm-push-5">
                  <div className="fh5co-owl-text-wrap">
                    <div className="fh5co-owl-text">
                      <h1 className="fh5co-lead to-animate">Case Study Title</h1>
                      <h2 className="fh5co-sub-lead to-animate">100% Free Fully Responsive HTML5
                        Bootstrap Template. Crafted with love by the fine folks at
                        <a href="http://freehtml5.co/" target="_blank">FREEHTML5.co</a>
                      </h2>
                      <p className="to-animate-2">
                        <a href="#" className="btn btn-primary btn-lg">View Case Study</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-md-pull-7 col-sm-4 col-sm-pull-7 iphone-image">
                  <div className="iphone to-animate-2"><img src="images/iphone-1.png" alt="Free HTML5 Template by FREEHTML5.co"/></div>
                </div>

              </div>
            </div>
          </div>

          <div className="item" style={{
            background: '#38569f'
          }}>
            <div className="overlay"></div>
            <div
              className="container"
              style={{
              position: 'relative'
            }}>
              <div className="row">
                <div className="col-md-8 col-md-offset-2 text-center">
                  <div className="fh5co-owl-text-wrap">
                    <div className="fh5co-owl-text">
                      <h1 className="fh5co-lead to-animate">Grab it now for free!</h1>
                      <h2 className="fh5co-sub-lead to-animate">100% Free Fully Responsive HTML5
                        Bootstrap Template. Crafted with love by the fine folks at
                        <a href="http://freehtml5.co/" target="_blank">FREEHTML5.co</a>
                      </h2>
                      <p className="to-animate-2">
                        <a
                          href="http://freehtml5.co/"
                          target="_blank"
                          className="btn btn-primary btn-lg">Download This Template</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Slider;