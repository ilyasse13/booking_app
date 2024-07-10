import React,{useState,useEffect}from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { nights_club,sneakers,activités,restaurants,locations,coiffeurs,cafées_et_biscuitrie,opticiens } from '../../assets/data';

const Hero = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [data,setData] = useState([...nights_club,...sneakers,...activités,...restaurants,...locations,...coiffeurs,...cafées_et_biscuitrie,...opticiens]);
  
    // Filter data based on the search query

    const filteredData = data.filter(item =>
        item.nom.toLowerCase().includes(searchQuery.toLowerCase())  
    );
  
    const handleSearchClick = () => {
      setIsPopupVisible(true);
    };
  
    const closePopup = () => {
      setIsPopupVisible(false);
    };

    const imagesWithContent=[
        {
            img:"Marseille1.jpg",
            content:" Là où le soleil méditerranéen embrasse l'âme vibrante de la France."
        },
        {
            img:"Marseille2.jpg",
            content:" Un mélange captivant de charme ancien et d'allure moderne."
        },
        {
            img:"Marseille3.jpg",
            content:"Embarquez pour un voyage à travers le temps, des ruines romaines à l'art contemporain."
        },
        {
            img:"Marseille4.jpeg",
            content:" Laissez le rythme des vagues vous guider à travers une ville aux possibilités infinies.."
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesWithContent.length);
      }, 5000); // change image every 5 seconds
  
      return () => clearInterval(intervalId); // cleanup interval on component unmount
    }, [imagesWithContent.length]);

    return (
        <div className='bg-gradient-to-b from-gray-400 to-gray-100-to-white px-2'>
        <div
              className="w-11/12 mx-auto  bg-cover bg-bottom grid items-center justify-center text-white text-center "
              style={{ backgroundImage: `url(${imagesWithContent[currentIndex].img})`,height: "90vh" }}
            >
              <div className="rounded-lg border-solid border-white border-8 p-0">
                <h1 className=" text-3xl font-extrabold sm:text-5xl  py-10 text-white  first-letter:text-customBlue">Marseille</h1>
                <p className="font-extrabold sm:block text-xl w-8/12 mx-auto  rounded-2xl text-white pb-12 ">{imagesWithContent[currentIndex].content}</p>
              <div className="container mx-auto p-4">
                <div className='flex justify-center bg-Lion w-fit p-6 mx-auto '>
                    <input
                      type="text"
                      placeholder="Search..."
                      className="border border-Lion p-2 mb-4  rounded text-black"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button
                      onClick={handleSearchClick}
                      className="bg-Lion text-white px-4 py-2 rounded h-11 border-2 border-white"
                    >
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>                    
                </div>
                   

                    {isPopupVisible && (
                      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg relative text-night w-3/4 h-3/4">
                          <button
                            onClick={closePopup}
                            className="absolute top-0 right-0 mt-2 mr-2 text-black font-bold text-lg"
                          >
                            &times;
                          </button>
                          <h2 className="text-2xl mb-4">Search Results</h2>
                          <div className="flex flex-wrap">
                            {filteredData.length > 0 ? (
                              filteredData.map(item => (
                                <div key={item.id} className="mb-2 bg-Lion text-lg text-gray-50 rounded-lg w-72 h-74 px-4 p-2 relative text-center ">
                                 
                                 <img src={item.images[0]} className='h-24 w-24 align-middle mx-auto' />
                                 <h2 className='font-bold'>{item.nom}</h2> 
                                  <a href="#" className='p-2  text-customBlue bg-gray-50  top-56 left-2 rounded-xl'>View Details</a>
                                </div>
                              ))
                            ) : (
                              <li>No results found</li>
                            )}                            
                          </div>
                           
                        </div>
                      </div>
                    )}
                </div> 
             </div>

        </div>
    </div>
    )
}

export default Hero