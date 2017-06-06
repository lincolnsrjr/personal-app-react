import React, {Component} from 'react';
import ProductItem from './ProductItem';

class Product extends Component {
  render() {
    return (
      <div id="fh5co-features" data-section={this.props.section}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 section-heading text-center">
              <h2 className="single-animate animate-features-1">Aplicativo</h2>
              <div className="row">
                <div className="col-md-8 col-md-offset-2 single-animate animate-features-2">
                  <h3>Fidelize seus clientes através de seu aplicativo exclusivo e impulsione sua
                    carreira. Veja as vantagens que você tera diante dos demais:</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="row row-bottom-padded-sm">
				
          <ProductItem
          title={'Marketing digital'} 
          text={"Esteja presente no mundo dos aplicativos, aumentando ainda mais a sua presença no mercado de personal's trainer's."} 
          icon={'tablet'}/>

          <ProductItem
          title={'Divulgação'} 
          text={"Através do aplicativo, você pode divulgar os seus locais de trabalho e suas formas de contato e redes sociais."} 
          icon={'bullhorn'}/>

          <ProductItem
          title={'Multiplataforma'} 
          text={"Seja Ios ou Android, ofereça aos seus clientes um aplicativo para receber seus treinos e se comunicar com você."} 
          icon={'shuffle2'}/>

          <ProductItem
          title={'Agenda online'} 
          text={"Facilite a marcação de aulas e treinos através da agenda. Com ela seu cliente pode agendar um horário com você."} 
          icon={'calendar-check-o'}/>

          <ProductItem
          title={'Chat'} 
          text={"Tenha um chat para se comunicar diretamente com seus clientes. Isso o ajuda a fidelizar ainda mais seus alunos."} 
          icon={'speech-bubble'}/>

          <ProductItem
          title={'Treinos'} 
          text={"Nada mais de fichinhas. Utilize o aplicativo para enviar os treinos aos seus clientes e tenha uma acompanhamento mais efetivo."} 
          icon={'paper'}/>
        

		      </div>

          <div className="row">
            <div className="col-md-4 col-md-offset-4 single-animate animate-features-3">
              <a href="#" className="btn btn-primary btn-block">Adiquira já</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;