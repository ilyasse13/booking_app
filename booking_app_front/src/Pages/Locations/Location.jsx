import React from 'react'
import { locations } from '../../assets/data';
import { useParams } from 'react-router-dom';

const Location = () => {
    const {uri}= useParams()
    const location=locations.find((loc)=>loc.uri==uri)
    if (!location) {
      return <div>location not found</div>;
    }
  
    return (
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10">
        <img className="w-full h-64 object-cover" src={location.images[0]} alt={`Image of ${location.nom}`} />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{location.nom}</h2>
          <p className="text-gray-700 mb-4">{location.description}</p>
          <p className="text-gray-700 mb-2"><strong>Adresse:</strong> {location.adresse}</p>
          <p className="text-gray-700 mb-2"><strong>Téléphone:</strong> {location.téléphone}</p>
          <p className="text-gray-700 mb-2"><strong>Horaires:</strong> {location.horaires}</p>
          <a href={location.résérvation} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mb-4 block">Réserver un rendez-vous</a>
          
          <div className="flex items-center">
            <span className="text-lg font-semibold">{averageRating(location.avis)}</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-yellow-500 ml-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
          </div>
  
          <div className="mt-6">
            <h3 className="text-xl font-bold mb-4">Avis</h3>
            {location.avis.length > 0 ? (
              location.avis.map((review, index) => (
                <div key={index} className="mb-4">
                  <p className="text-gray-700"><strong>{review.utilisateur}:</strong> {review.commentaire}</p>
                  <div className="flex items-center">
                    {[...Array(review.valeur)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-yellow-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-700">Aucun avis pour le moment.</p>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  const averageRating = (avis) => {
    if (!avis || avis.length === 0) return 'N/A';
    const average = avis.reduce((total, avis) => total + avis.valeur, 0) / avis.length;
    return average.toFixed(1); // Return average rating with one decimal place
  };
  

export default Location