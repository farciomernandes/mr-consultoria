import React, { useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Client1 from '../images/comprovante1.svg';
import Client2 from '../images/comprovante2.svg';
import Client3 from '../images/comprovante3.svg';
import Client4 from '../images/comprovante4.svg';
import Client5 from '../images/comprovante5.svg';

function DeliveryReceipt() {
  const carouselRef = useRef(null);

  const handleImageClick = () => {
    // Ao clicar na imagem, navegue para a próxima imagem
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  return (
    <section className="bg-gray-800 py-12 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-extrabold text-gray-100 mb-4">Comprovantes de entrega</h2>
        <p className="mb-6 text-2xl text-indigo-600 font-semibold">Aqui você pode visualizar alguns comprovantes de entrega dos nossos serviços.</p>
        <div className="carousel-container">
          <Carousel
            ref={carouselRef}
            showThumbs={true} dynamicHeight={true} 
            showStatus={false} 
            infiniteLoop={true} 
          >
            <div onClick={handleImageClick}> {/* Adicione o clique na imagem */}
              <img src={Client1} alt="Delivery Receipt 1" />
            </div>
            <div onClick={handleImageClick}>
              <img src={Client2} alt="Delivery Receipt 2" />
            </div>
            <div onClick={handleImageClick}>
              <img src={Client3} alt="Delivery Receipt 3" />
            </div>
            <div onClick={handleImageClick}>
              <img src={Client4} alt="Delivery Receipt 4" />
            </div>
            <div onClick={handleImageClick}>
              <img src={Client5} alt="Delivery Receipt 5" />
            </div>
          </Carousel>
          <div className="carousel-buttons">
            <div className="flex justify-center"> {/* Centralize horizontalmente */}
              <a className="btn text-white bg-purple-600 hover-bg-purple-700 w-full sm:w-auto" href="https://drive.google.com/drive/folders/1BH74dXm-yv_balJpgb20Z57o-BA6tnlp">
                Ver todos os comprovantes
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 border-t-2 border-gray-400" /> {/* Linha divisória */}
    </section>
  );
}

export default DeliveryReceipt;
