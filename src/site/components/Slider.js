import React, {Component} from 'react';
import SliderItem from './SliderItem';

export default class Slider extends Component {
  render() {
    return (
      <div id="slider" data-section={this.props.section}>
        <div className="owl-carousel owl-carousel-fullwidth">

          <SliderItem
            backgroundColor={'#352f44'}
            imageIphone={'images/iphone-1.png'}
            imageRight={true}
            title={'Seja diferente'}
            text={'Se destaque como personal trainer possuindo um aplicativo exclusivo!'}
            textButton={'Adquirir agora'}/>

          <SliderItem
            backgroundColor={'#38569f'}
            imageIphone={'images/iphone-2.png'}
            imageLeft={true}
            title={'Treinos'}
            text={'Envie e monitore os treinos de seus alunos'}
            textButton={'Adquirir agora'}/>

          <SliderItem
            backgroundColor={'#5F9EA0'}
            imageIphone={'images/iphone-1.png'}
            imageRight={true}
            title={'Chat'}
            text={'Utilize o chat para se comunicar com seus clientes de forma mais fácil'}
            textButton={'Adquirir agora'}/>

          <SliderItem
            backgroundColor={'#4682B4'}
            imageIphone={'images/iphone-2.png'}
            imageLeft={true}
            title={'Agenda'}
            text={'Tenha uma agenda online para facilitar a marcação de aulas e treinos com seus clientes'}
            textButton={'Adquirir agora'}/>

          <SliderItem
            backgroundColor={'#443f3f'}
            imageIphone={'images/iphone-1.png'}
            title={'Custo/Benefício'}
            text={'Com um pequeno investimento mensal é possível ter um aplicativo exclusivo para impulsionar sua carreira de personal trainer'}
            textButton={'Adquirir agora'}/>

        </div>
      </div>
    );
  }
}
