import React,{useState,useEffect}from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
// import { nights_club,sneakers,activités,restaurants,locations,coiffeurs,cafées_et_biscuitrie,opticiens } from '../../assets/data';
import { calculateAverageAvis } from '../../assets/data';
import { useTranslation } from 'react-i18next';


const Hero = () => {
    const [message,setMessage]=useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [filteredData,setFilteredData]=useState([]);
    const {t}= useTranslation();


    const nights_club = t('nights_club', { returnObjects: true });
    const sneakers = t('sneakers', { returnObjects: true });
    const activités = t('activités', { returnObjects: true });
    const restaurants = t('restaurants', { returnObjects: true });
    const locations = t('locations', { returnObjects: true });
    const coiffeurs = t('nights_club', { returnObjects: true });
    const cafées_et_biscuitrie = t('cafées_et_biscuitrie', { returnObjects: true });
    const opticiens = t('opticiens', { returnObjects: true });
    // const data=[...nights_club,...sneakers,...activités,...restaurants,...locations,...coiffeurs,...cafées_et_biscuitrie,...opticiens]


    const data = [
      ...(Array.isArray(nights_club) ? nights_club : []),
      ...(Array.isArray(sneakers) ? sneakers : []),
      ...(Array.isArray(activités) ? activités : []),
      ...(Array.isArray(restaurants) ? restaurants : []),
      ...(Array.isArray(locations) ? locations : []),
      ...(Array.isArray(coiffeurs) ? coiffeurs : []),
      ...(Array.isArray(cafées_et_biscuitrie) ? cafées_et_biscuitrie : []),
      ...(Array.isArray(opticiens) ? opticiens : []),
    ];
    // Filter data based on the search query
    useEffect(()=>{

        const result = searchQuery.trim()===""?[]:data.filter(item =>
        item.nom.toLowerCase().includes(searchQuery.toLowerCase())  
    );
    setFilteredData(result)        
    },[searchQuery])

  
    const handleSearchClick = () => {
      searchQuery.trim()!="" 

      ?setIsPopupVisible(true):setMessage(true);

      
      
    };
  
    const closePopup = () => {
      setIsPopupVisible(false);
    };

    const imagesWithContent=[
        {
            img:"Marseille1.jpg",
            content:t('image1_phrase'),
        },
        {
            img:"Marseille2.jpg",
            content:t('image2_phrase'),
        },
        {
            img:"Marseille3.jpg",
            content:t('image3_phrase'),
        },
        {
            img:"Marseille4.jpeg",
            content:t('image4_phrase'),
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
        <div className='px-2 max-sm:px-0 mb-20'>
        <div
              className="w-11/12 max-sm:w-full mx-auto  bg-cover bg-center grid items-center max-sm:items-start justify-center text-white text-center  "
              style={{ backgroundImage: `url(${imagesWithContent[currentIndex].img})`,height: "90vh" }}
            >
              <div className="rounded-lg border-solid border-white border-2 p-0 max-sm:border-none bg-gradient-to-b from-Lion to-transparent  max-sm:rounded-none max-sm:">
                <h1 className=" text-3xl font-extrabold sm:text-5xl  py-10 text-white w-fit mx-auto  first-letter:text-customBlue  px-0">Marseille</h1>
                <p className="font-semibold xl:font-extrabold max-sm:block text-lg xl:text-xl w-8/12 mx-auto  rounded-2xl text-white pb-12  ">{imagesWithContent[currentIndex].content}</p>
              <div className="container mx-auto p-4">
                <div className='flex justify-center bg-white rounded-full w-fit mx-auto  border-2 border-night '>
                    <input  
                      autoFocus               
                      type="text"
                      placeholder={t('search_input')}
                      // className="border border-Lion p-2 mb-4  rounded text-black"
                     className=" outline-none p-2 pt-2  rounded-full text-black  "
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button
                      onClick={handleSearchClick}
                      className=" py-2 px-4 border-2 border-Lion bg-white text-Lion rounded-full m-2 hover:text-white hover:bg-Lion transition-colors "
                    >
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button> 

                </div> 
                {message &&
                      <p className='text-night bg-white my-2 w-52 mx-auto text-md font-sansBody capitalize cursor-pointer'
                      onClick={()=>setMessage(false)}> {t('search_message')}</p>
                }   

                    {isPopupVisible && (
                      <div
                       className="z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className=" bg-customBlue p-6  rounded-lg shadow-lg  text-white w-3/4  mx-20 max-sm:mx-0 h-3/4 overflow-y-scroll relative max-sm:w-full ">
                          <button
                            onClick={closePopup}
                            className="fixed  top-0 right-0 mt-2 mr-2 text-white rounded-md text-3xl border-2 border-white px-2 "
                          >
                            &times;
                          </button>
                          <h2 className="text-2xl my4 pt-4 font-bold">{t('resultat_de_recherche')}</h2>
                          <hr className='bg-Lion w-56 text-center mx-auto' />
                          <br />
                          <div className="flex flex-wrap  relative gap-10 justify-between max-sm:grid max-sm:justify-center  max-sm:justify-items-center max-sm:items-center ">
                            {filteredData.length > 0 ? (
                              filteredData.map(item =>{ 
                               const reviewsAverage =  item.avis?calculateAverageAvis(item.avis):"";
                                
                                return(
                                <div key={item.id} className="relative text-lg  rounded-lg flex gap-4  overflow-hidden w-96  max-sm:grid  p-4 border-2 border-opacity-10 border-black">
                                 
                                 <img src={item.images[0]} className=' w-20 h-21  md:h-16 md:w-16 max-sm:w-80 mx-auto ' />
                                 <div>
                                    <div className='flex justify-between font-sansBody capitalize'>
                                    <h2 className='text-lg font-semibold w-28  text-left max-sm:text-lg max-sm:px-3 '>{item.nom}</h2> 
                                    <p className='flex font-semibold pr-8'><img src="star.png" className='h-6 w-6' /> {reviewsAverage }</p>                                        
                                    </div>

                                 {/* {item.téléphone ?<p className='font-semibold text-left font-sansBody '><FontAwesomeIcon icon={faPhone}/>: {item.téléphone}</p>:"" } */}
                                </div>
                                  <a href={item.path} className='bg-black text-white px-2 py-3 rounded-md cursor-pointer m-auto'>{t('popup_adresse_visit_btn')}</a>
                                  <hr />
                                </div>
                              )})
                            ) : (
                              <p className='mx-auto mt-10 text-white text-lg'> {t('no_result')} </p>
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