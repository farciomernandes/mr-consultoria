import React from 'react';
import NewsletterImage from '../images/about-us-image.svg'; // Substitua com o caminho da imagem desejada

function Newsletter() {
  return (
    <section id="quemsomos" className="bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-8 sm:py-16 flex flex-col-reverse sm:flex-row items-center justify-between">
          <div className="w-full sm:w-1/2 sm:pr-12 text-center sm:text-left">
            <h2 className="h2 text-white">Quem Somos</h2>
            <p className="text-xl text-gray-400 max-w-md mx-auto mt-4 sm:max-w-3xl sm:mx-0">
              Nós somos uma equipe altamente qualificada e dedicada que se orgulha de fornecer serviços acadêmicos excepcionais.
            </p>
            <p className="text-xl text-gray-400 max-w-md mx-auto mt-4 sm:max-w-3xl sm:mx-0">
              Nossa missão é auxiliar os alunos em todas as etapas de seus projetos acadêmicos, desde a pesquisa inicial até a entrega final, garantindo que cada trabalho alcance seu potencial máximo.
            </p>
            <p className="text-xl text-gray-400 max-w-md mx-auto mt-4 sm:max-w-3xl sm:mx-0">
              Nossa equipe é composta por especialistas em diversas áreas, permitindo-nos atender a uma ampla gama de necessidades acadêmicas, desde monografias e artigos científicos até projetos de pesquisa e apresentações.
            </p>
            <div className="max-w-xl mx-auto mt-8 sm:mt-12">
              <a 
               href={`https://api.whatsapp.com/send?phone=5588993768255&text=${encodeURIComponent('Olá, preciso de ajuda com trabalhos acadêmicos.')}`}
              className="btn text-white bg-green-500 hover:bg-green-400">
                Entre em Contato
              </a>
            </div>
          </div>
          <div className="w-full sm:w-1/2 text-center">
            <img src={NewsletterImage} alt="Sobre Nós" className="max-w-md mx-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
