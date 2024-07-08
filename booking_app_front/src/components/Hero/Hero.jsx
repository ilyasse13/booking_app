import React, { useState } from 'react'
import './Hero.css'

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleButtonClick = () => {
      setIsOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsOpen(false);
    };
  
    return (
      <section className="relative h-screen bg-[url('Marseille6.jpeg')] bg-cover bg-center bg-no-repeat">
  

  <div className="relative flex items-center justify-center h-full px-4 py-32 sm:px-6 lg:px-8">
    <div className="text-center">
      <h1 className="text-xl font-bold text-white bg-Lion bg-opacity-70 sm:text-3xl p-2">
        Découvrez le meilleur de Marseille
      </h1>
      <button
        onClick={handleButtonClick}
        className="mt-8 px-12 py-3 text-sm font-medium text-white bg-Lion  rounded shadow hover:bg-opacity-70 focus:outline-none transition duration-300 ease-in-out"
      >
        Learn More
      </button>
    </div>
  </div>

  {isOpen && (
    <div className="fixed inset-0 flex items-center justify-center z-50 modal">
      <div className="fixed inset-0 bg-gray-900/75" onClick={handleCloseModal}></div>
      <div className="relative bg-white rounded p-6 w-full max-w-lg z-50">
        <button
          onClick={handleCloseModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">More About Marseille</h2>
        <p>Here you can add more information about Marseille...</p>
      </div>
    </div>
  )}
</section>

    );
  };

export default Hero