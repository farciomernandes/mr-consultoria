import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Client1 from '../images/cliente1.png';
import Client2 from '../images/cliente2.png';
import Client3 from '../images/cliente3.png';
import Client4 from '../images/cliente4.png';
import Client5 from '../images/cliente5.png';
import Client6 from '../images/cliente6.png';

function Testimonials() {
  return (
    <section id="testimonials"  className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">O que nossos clientes dizem</h2>
        <Carousel showThumbs={true} dynamicHeight={true} interval={0} showStatus={false} showArrows={true} infiniteLoop={true} stopOnHover={true}>
          <div>
            <img src={Client1} alt="Testemunho de clientes" />
          </div>
          <div>
            <img src={Client2} alt="Testemunho de clientes" />
          </div>
          <div>
            <img src={Client3} alt="Testemunho de clientes" />
          </div>
          <div>
            <img src={Client4} alt="Testemunho de clientes" />
          </div>
          <div>
            <img src={Client5} alt="Testemunho de clientes" />
          </div>
          <div>
            <img src={Client6} alt="Testemunho de clientes" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default Testimonials;
