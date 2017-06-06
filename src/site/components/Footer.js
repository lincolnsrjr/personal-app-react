import React, {Component} from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer id="footer" role="contentinfo">

        <div className="container">
          <div className="row row-bottom-padded-sm">
            <div className="col-md-12">
              <p className="copyright text-center">&copy; {this.props.nameApp}
                .Todos os direitos reservados.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <ul className="social social-circle">
                <li>
                  <a href="#">
                    <i className="icon-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-pinterest"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-dribbble"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
