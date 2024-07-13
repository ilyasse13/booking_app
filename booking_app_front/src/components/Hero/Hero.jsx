import React,{useState,useEffect}from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { nights_club,sneakers,activités,restaurants,locations,coiffeurs,cafées_et_biscuitrie,opticiens } from '../../assets/data';

const Hero = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [data,setData] = useState([...nights_club,...sneakers,...activités,...restaurants,...locations,...coiffeurs,...cafées_et_biscuitrie,...opticiens]);
    const [filteredData,setFilteredData]=useState([]);
    // Filter data based on the search query
    useEffect(()=>{

        const result = searchQuery.trim()===""?[]:data.filter(item =>
        item.nom.toLowerCase().includes(searchQuery.toLowerCase())  
    );
    setFilteredData(result)        
    },[searchQuery,data])

  
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
              className="w-11/12 mx-auto  bg-cover bg-center grid items-center justify-center text-white text-center "
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
                     className=" ring-black/40 focus:ring-2 outline-none p-2 mb-4 rounded text-black"
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
                      <div
                       className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg  text-night w-fit mx-20 max-sm:mx-0 h-3/4 overflow-y-scroll relative ">
                          <button
                            onClick={closePopup}
                            className="absolute top-0 right-0 mt-2 mr-2 text-black  text-3xl border-2 border-white px-2 "
                          >
                            &times;
                          </button>
                          <h2 className="text-2xl mb-4 pt-4 font-bold">Search Results</h2>
                          <hr className='bg-Lion w-56 text-center mx-auto' />
                          <br />
                          <div className="flex flex-wrap  relative gap-10 justify-between max-sm:grid max-sm:w-full">
                            {filteredData.length > 0 ? (
                              filteredData.map(item =>{ 
                                
                                return(
                                <div key={item.id} className="relative text-lg  rounded-lg flex gap-4  border-2 border-customBlue overflow-hidden w-auto  max-sm:grid max-sm:h-full">
                                 
                                 <img src={item.images[0]} className=' w-20 h-21  md:h-16 md:w-16 max-sm:w-full max-sm:h-32 ' />
                                 <h2 className='text-lg font-semibold w-56 max-sm:w-40 text-left max-sm:text-lg max-sm:font-normal max-sm:px-3 '>{item.nom}</h2> 
                                  <a href={item.path} className='bg-black text-white px-2 py-3 rounded-sm cursor-pointer '>Visiter</a>
                                </div>
                              )})
                            ) : (
                              <p className='mx-auto mt-10 text-red-600 text-lg'> No results found !</p>
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