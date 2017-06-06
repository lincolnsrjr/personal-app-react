import React, {Component} from 'react';

class Contact extends Component {
  render() {
    return (
      <div id="fh5co-features" data-section={this.props.section}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 section-heading text-center">
              <h2 className="single-animate animate-pricing-1">Contato</h2>
              <div className="row">
                <div
                  className="col-md-8 col-md-offset-2 subtext single-animate animate-pricing-2">
                  <h3>Ficou com alguma dúvida? Entre em contato com a gente:</h3>
                  <h4>duvidas@personalapp.com.br</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;