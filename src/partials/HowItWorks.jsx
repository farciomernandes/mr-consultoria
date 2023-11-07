import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faCheck, faCalendar } from '@fortawesome/free-solid-svg-icons';

function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 p-16 sm:px-6">
        <h2 className="h2 text-white text-center">Como Funciona</h2>
        <div className="flex justify-between mt-8">
          <div className="w-full sm:w-1/2 mx-2">
            <div className="h-64 max-w-md bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl text-purple-600 mb-4 text-center font-roboto">
                Passo 1
              </div>
              <p className="text-lg text-black text-center font-roboto">
                Você solicita um orçamento gratuitamente
              </p>
              <div className="flex justify-center items-center mt-4">
                <FontAwesomeIcon icon={faEnvelope} className="text-purple-600 text-4xl" />
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 mx-2">
            <div className="h-64 max-w-md bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl text-purple-600 mb-4 text-center font-roboto">
                Passo 2
              </div>
              <p className="text-lg text-black text-center font-roboto">
                Após sua aprovação do pagamento, iremos iniciar seu trabalho.
              </p>
              <div className="flex justify-center items-center mt-4">
                <FontAwesomeIcon icon={faCheck} className="text-purple-600 text-4xl" />
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 mx-2">
            <div className="h-64 max-w-md bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl text-purple-600 mb-4 text-center font-roboto">
                Passo 3
              </div>
              <p className="text-lg text-black text-center font-roboto">
                Você recebe o trabalho completo na data combinada
              </p>
              <div className="flex justify-center items-center mt-4">
                <FontAwesomeIcon icon={faCalendar} className="text-purple-600 text-4xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
