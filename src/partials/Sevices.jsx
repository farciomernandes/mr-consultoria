import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUser, faBan, faShieldAlt, faClock, faCheck, faGift, faClipboard } from '@fortawesome/free-solid-svg-icons';

function Services() {
  return (
    <section id="servicos" className="bg-gray-100">
      <hr className="my-1 border-t-2 border-gray-100" /> {/* Linha divisória */}
      <div className="max-w-6xl mx-auto px-4 p-16 sm:px-6">
        <h2 className="h2 text-black text-center">Serviços</h2>
        <div className="flex flex-wrap justify-between mt-8">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 py-4">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl text-purple-600 mb-4 text-center font-roboto">
                Qualidade
              </div>
              <p className="text-lg text-black text-center font-roboto">
                Trabalhos de alta qualidade
              </p>
              <div className="flex justify-center items-center mt-4">
                <FontAwesomeIcon icon={faStar} className="text-purple-600 text-4xl" />
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 py-4">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl text-purple-600 mb-4 text-center font-roboto">
                Personalizado
              </div>
              <p className="text-lg text-black text-center font-roboto">
                Serviços personalizados
              </p>
              <div className="flex justify-center items-center mt-4">
                <FontAwesomeIcon icon={faUser} className="text-purple-600 text-4xl" />
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 py-4">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl text-purple-600 mb-4 text-center font-roboto">
                Sem Plágio
              </div>
              <p className="text-lg text-black text-center font-roboto">
                Conteúdo original, sem plágio
              </p>
              <div className="flex justify-center items-center mt-4">
                <FontAwesomeIcon icon={faBan} className="text-purple-600 text-4xl" />
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 py-4">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl text-purple-600 mb-4 text-center font-roboto">
                Seguro
              </div>
              <p className="text-lg text-black text-center font-roboto">
                Processo seguro e confidencial
              </p>
              <div className="flex justify-center items-center mt-4">
                <FontAwesomeIcon icon={faShieldAlt} className="text-purple-600 text-4xl" />
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 py-4">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl text-purple-600 mb-4 text-center font-roboto">
                No Prazo
              </div>
              <p className="text-lg text-black text-center font-roboto">
                Entrega no prazo acordado
              </p>
              <div className="flex justify-center items-center mt-4">
                <FontAwesomeIcon icon={faClock} className="text-purple-600 text-4xl" />
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 py-4">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl text-purple-600 mb-4 text-center font-roboto">
                Aprovado
              </div>
              <p className="text-lg text-black text-center font-roboto">
                Trabalhos aprovados pelos clientes
              </p>
              <div className="flex justify-center items-center mt-4">
                <FontAwesomeIcon icon={faCheck} className="text-purple-600 text-4xl" />
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 py-4">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl text-purple-600 mb-4 text-center font-roboto">
                Bônus
              </div>
              <p className="text-lg text-black text-center font-roboto">
                Ofertas especiais e bônus
              </p>
              <div className="flex justify-center items-center mt-4">
                <FontAwesomeIcon icon={faGift} className="text-purple-600 text-4xl" />
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 py-4">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl text-purple-600 mb-4 text-center font-roboto">
                +300 
              </div>
              <p className="text-md text-black text-center font-roboto">
                Ajudamos mais de 300 pessoas por mês
              </p>
              <div className="flex justify-center items-center mt-4">
                <FontAwesomeIcon icon={faClipboard} className="text-purple-600 text-4xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;