import React from 'react'
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import { restaurants } from '../../assets/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUtensils} from '@fortawesome/free-solid-svg-icons';


const RestaurantsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const calculateAverageAvis = (avis) => {

    let totalAvis = 0;
    for(const review of avis){
      totalAvis += review.valeur;
    }

    return (totalAvis/ avis.length).toFixed(1);
  };

  const filtredRestaurants = restaurants.filter((restaurant)=>calculateAverageAvis(restaurant.avis)>=4.5 );


  return (
    <div className="padding ">
     <div className="text-left  px-4 py-16 max-sm:px-6 max-lg:px-8 ">
    <p className='text-Lion text-lg underline'>Meilleurs Restaurants De Marseille </p>
    <p className='headline first-letter:text-customBlue '>Restaurants </p>
    <hr  className='h-2 w-1/2 ' />
    <h2 className='text-lg '>Découvrez les restaurants les mieux notés de Marseille ! <FontAwesomeIcon icon={faUtensils} className='text-Lion '/> </h2>      
     </div>
  
    <div className="container w-11/12 mx-auto  bg-Lion px-10 py-12 bg-Lion">
      <Slider {...settings}>
        {filtredRestaurants.map((restaurant, index) => {
          const average = calculateAverageAvis(restaurant.avis);
          return(
          <div key={index} className=" bg-white border-l-2">
            <img  className='w-full h-48 object-cover mb-4' src={restaurant.images[0]} alt={restaurant.nom} />
            <div className='flex justify-between px-4 pt-4 text-white'>
            <h2 className='font-bold text-Lion font-sansTitle text-lg h-20 '>{restaurant.nom}</h2>
            <p  className='bg-white rounded-full h-12 w-12 flex text-sm justify-center items-center text-night font-bold'>{restaurant.avis.length >0? <>{average} <img className='h-4 w-4 inline' src="star.png" alt="" /> </>:<> ?/ <img className='h-4 w-4 inline' src="star.png" alt="" /> </>}</p>              
            </div>
            <div className='h-40 lg:h-48  bg-gradient-to-t from-gray-50 to-white px-4 pt-4  font-semibold'>
            <p className='text-night'>{restaurant.slogan} </p>
            <button className='text-Lion bg-gray-200 py-4 px-6 rounded-md absolute bottom-6'>Explorer</button>
            </div>


          </div>
        )})}
      </Slider>
    </div>
    </div>
  );
};

export default RestaurantsSlider