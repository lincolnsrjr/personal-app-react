import React, {Component} from 'react';
import PriceItem from './PriceItem';

export default class Price extends Component {
  render() {
    return (
      <div id="fh5co-pricing" data-section={this.props.section}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 section-heading text-center">
              <h2 className="single-animate animate-pricing-1">Preços</h2>
              <div className="row">
                <div
                  className="col-md-8 col-md-offset-2 subtext single-animate animate-pricing-2">
                  <h3>Escolha o plano ideal para impulsionar sua carreira!</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="row"></div>
          <PriceItem
          title={'Mensal'}
          value={'29,90'}
          text={'Tenha acesso durante um mês.'}/>

          <PriceItem
          title={'Trimestral'}
          value={'59,90'}
          text={'Tenha acesso durante um trimestre.'}/>

          <PriceItem
          selected={true}
          textSelected={'Melhor preço'}
          title={'Semestral'}
          value={'99,90'}
          text={'Tenha acesso durante um semestre.'}/>

          <PriceItem
          title={'Anual'}
          value={'159,90'}
          text={'Tenha acesso durante um ano.'}/>
        </div>
      </div>
    );
  }
}
