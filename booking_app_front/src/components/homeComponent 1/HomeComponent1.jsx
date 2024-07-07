import React from 'react';
import homeComponentImg from '../../assets/travelPicture1.jpg';
import { TopDestinations } from '../../assets/data';
import { useNavigate } from 'react-router-dom';

const HomeComponent1 = () => {

const Navigate=useNavigate();

  return (
    <div className='bg-gradient-to-b from-gray-100 to-white  items-center justify-center p-6' id='top_destinations'>
        <div className='text-center max-sm:text-left px-4 py-16 max-sm:px-6 max-lg:px-8'>
             <h1 className='headline     first-letter:text-customBlue'>Meilleurs Destinations</h1>
             <hr className='h-2 w-3/4 mx-auto' />
             <p className='text-night font-sansBody text-lg w-1/2 mx-auto max-lg:w-2/3 max-md:w-3/4  max-sm:mx-0   max-sm:w-full '>
             Explorez la culture vibrante, les paysages époustouflants et les trésors cachés de Marseille, votre escapade parfaite vous attend !
             </p>            
        </div>

        <div className='grid grid-cols-10 grid-rows-5 gap-6 h-screen w-full pt-10 max-md:grid-cols-4  max-md:grid-rows-8  px-4 py-16 max-sm:px-6 max-lg:px-8 /'>

            <div  
            onClick={()=>Navigate(TopDestinations[0].URI)}
            className=' max-md:col-span-2 max-md:row-span-2   col-span-4 row-span-3 bg-night rounded-3xl relative bg-cover bg-center overflow-hidden transition-transform duration-1000 ease-in-out transform hover:scale-90 '  
                style={{backgroundImage: `url(${TopDestinations[0].img})`}} >
                <p className='font-dancing text-2xl font-extrabold  text-beige absolute inset-0 bg-black bg-opacity-20   flex items-center justify-center rounded-3xl cursor-pointer hover:bg-transparent hover:text-night'>{TopDestinations[0].name}</p>
            </div>


            <div
            onClick={()=>Navigate(TopDestinations[5].URI)}
            className=' max-md:col-span-2 max-md:row-span-2  col-span-4 row-span-1 bg-night rounded-3xl bg-cover bg-center overflow-hidden transition-transform duration-1000 ease-in-out transform hover:scale-90' 
                style={{backgroundImage: `url(${TopDestinations[5].img})`}} >
                <p className='font-dancing text-2xl font-extrabold  text-beige absolute inset-0 bg-black bg-opacity-20   flex items-center justify-center rounded-3xl cursor-pointer hover:bg-transparent hover:text-night'>
                    {TopDestinations[5].name}
                </p>
            </div>

            <div
            onClick={()=>Navigate(TopDestinations[6].URI)}
            className='max-md:col-span-2 max-md:row-span-2  col-span-2 row-span-1 bg-night rounded-3xl bg-cover bg-center overflow-hidden transition-transform duration-1000 ease-in-out transform hover:scale-90'
                style={{backgroundImage: `url(${TopDestinations[6].img})`}} >
                <p className='font-dancing text-2xl font-extrabold  text-beige absolute inset-0 bg-black bg-opacity-20   flex items-center justify-center rounded-3xl cursor-pointer hover:bg-transparent hover:text-night'>
                    {TopDestinations[6].name}</p>   
            
            </div>

            <div
            onClick={()=>Navigate(TopDestinations[1].URI)} 
            className='max-md:col-span-2 max-md:row-span-2   col-span-3 row-span-3 bg-night rounded-3xl bg-cover bg-center overflow-hidden transition-transform duration-1000 ease-in-out transform hover:scale-90'
                style={{backgroundImage: `url(${TopDestinations[1].img})`}} >
                <p className='font-dancing text-2xl font-extrabold  text-beige absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center rounded-3xl cursor-pointer hover:bg-transparent hover:text-night'>
                    {TopDestinations[1].name}
                </p>
            </div>

            <div
            onClick={()=>Navigate(TopDestinations[2].URI)}
            className='max-md:col-span-2 max-md:row-span-2  col-span-3 row-span-3 bg-night rounded-3xl bg-cover bg-center overflow-hidden transition-transform duration-1000 ease-in-out transform hover:scale-90 '
                style={{backgroundImage: `url(${TopDestinations[2].img})`}} >
                <p className='font-dancing text-2xl font-extrabold  text-beige absolute inset-0 bg-black bg-opacity-20   flex items-center justify-center rounded-3xl cursor-pointer hover:bg-transparent hover:text-night'>
                    {TopDestinations[2].name}
                    </p>
            </div>

            <div 
            onClick={()=>Navigate(TopDestinations[3].URI)}
             className='max-md:col-span-2 max-md:row-span-2   col-span-2 row-span-2 bg-night rounded-3xl bg-cover bg-center overflow-hidden transition-transform duration-1000 ease-in-out transform hover:scale-90'
                style={{backgroundImage: `url(${TopDestinations[3].img})`}} >
                <p className='font-dancing text-2xl font-extrabold  text-beige absolute inset-0 bg-black bg-opacity-20   flex items-center justify-center rounded-3xl cursor-pointer hover:bg-transparent hover:text-night'>
                    {TopDestinations[3].name}</p>
            </div>
            <div
             onClick={()=>Navigate(TopDestinations[4].URI)}
             className=' max-md:col-span-2 max-md:row-span-   col-span-2 row-span-2 bg-night rounded-3xl bg-cover bg-center overflow-hidden transition-transform duration-1000 ease-in-out transform hover:scale-90'
                            style={{backgroundImage: `url(${TopDestinations[4].img})`}} >
                            <p className='font-dancing text-2xl font-extrabold  text-beige absolute inset-0 bg-black bg-opacity-20   flex items-center justify-center rounded-3xl cursor-pointer hover:bg-transparent hover:text-night'>
                                {TopDestinations[4].name}</p>
            </div>

            <div
            onClick={()=>Navigate(TopDestinations[7].URI)}
            className='max-md:col-span-2 max-md:row-span-2   col-span-6 row-span-2 bg-night rounded-3xl bg-cover bg-center overflow-hidden transition-transform duration-1000 ease-in-out transform hover:scale-90'
                style={{backgroundImage: `url(${TopDestinations[7].img})`}} >
                <p className='font-dancing text-2xl font-extrabold  text-beige absolute inset-0 bg-black bg-opacity-20   flex items-center justify-center rounded-3xl cursor-pointer hover:bg-transparent hover:text-night'>
                    {TopDestinations[7].name}</p>   
            </div>

        </div>


    </div>
  )
}

export default HomeComponent1