import React from 'react'
import { sneakers } from '../../assets/data';
import { useParams } from 'react-router-dom';

const Sneakers = () => {
  const {uri}= useParams()
  const sneaker=sneakers.find((snk)=>snk.uri==uri)
  if (!sneaker) {
    return <div>Sneaker shop not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10">
      <div className="relative">
        <img className="w-full h-64 object-cover" src={sneaker.images[0]} alt={`Image of ${sneaker.nom}`} />
        <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-white p-4">
          <h2 className="text-2xl font-bold mb-2">{sneaker.nom}</h2>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-700 mb-4">{sneaker.description}</p>
        <p className="text-gray-700 mb-2"><strong>Adresse:</strong> {sneaker.adresse}</p>
        {sneaker.téléphone && (
          <p className="text-gray-700 mb-2"><strong>Téléphone:</strong> {sneaker.téléphone}</p>
        )}
        <p className="text-gray-700 mb-2"><strong>Horaires:</strong> {sneaker.horaires}</p>
        <a href={sneaker.siteweb} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mb-4 block">Visitez notre site web</a>
        
        <div className="grid grid-cols-2 gap-4 mt-6">
          {sneaker.images.slice(1).map((image, index) => (
            <img key={index} className="w-full h-48 object-cover rounded-lg" src={image} alt={`Gallery image ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};


export default Sneakers