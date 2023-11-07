import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [lastSelectedButton, setLastSelectedButton] = useState(null);

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  const handleButtonClick = (button) => {
    setLastSelectedButton(button);
  };

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          <div className="shrink-0 mr-4">
            <Link to="/" className="block" aria-label="Cruip">
              <svg className="w-8 h-8 fill-current text-purple-600" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="" />
              </svg>
            </Link>
          </div>
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <a
                  href="#"
                  className={`font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out ${lastSelectedButton === "INÍCIO" ? "hover:bg-purple-700" : ""}`}
                  onClick={() => handleButtonClick("INÍCIO")}
                >
                  INÍCIO
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out ${lastSelectedButton === "COMO FUNCIONA" ? "hover:bg-purple-700" : ""}`}
                  onClick={() => handleButtonClick("COMO FUNCIONA")}
                >
                  COMO FUNCIONA
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out ${lastSelectedButton === "SERVIÇOS" ? "hover:bg-purple-700" : ""}`}
                  onClick={() => handleButtonClick("SERVIÇOS")}
                >
                  SERVIÇOS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out ${lastSelectedButton === "SOBRE NÓS" ? "hover:bg-purple-700" : ""}`}
                  onClick={() => handleButtonClick("SOBRE NÓS")}
                >
                  SOBRE NÓS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out ${lastSelectedButton === "FAQ" ? "hover:bg-purple-700" : ""}`}
                  onClick={() => handleButtonClick("FAQ")}
                >
                  FAQ
                </a>
              </li>
              <li>
                <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" href="https://api.whatsapp.com/send?phone=5588993768255&text=Olá%2C%20vi%20seu%20trabalho%20através%20do%20site%20e%20gostaria%20de%mais%20informações%20dos%20seus%20serviços..." target="_blank">
                  CONTATO
                </a>
              </li>
            </ul>
          </nav>
          <div className="md:hidden">
            <button ref={trigger} className={`hamburger ${mobileNavOpen && 'active'}`} aria-controls="mobile-nav" aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
              <span className="sr-only">Menu</span>
              <svg className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>
            <nav id="mobile-nav" ref={mobileNav} className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out" style={mobileNavOpen ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: .8 } }>
              <ul className="bg-gray-800 px-4 py-2">
                <li>
                  <a href="#testimonials" className={`font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white ${lastSelectedButton === "Testemunhos" ? "bg-purple-700" : "bg-purple-600"} hover:bg-purple-700 transition duration-150 ease-in-out`} onClick={() => handleButtonClick("Testemunhos")}>
                    Testemunhos
                  </a>
                </li>
                <li>
                  <a href="#quemsomos" className={`flex font-medium w-full text-purple-600 hover:text-gray-200 py-2 justify-center ${lastSelectedButton === "Quem somos" ? "text-white" : ""}`} onClick={() => handleButtonClick("Quem somos")}>
                    Quem somos
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
