import React from 'react';
// import { TopDestinations } from '../../assets/data';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapLocation} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const HomeComponent1 = () => {

    const {t}=useTranslation();
    const TopDestinations = t('TopDestinations',{returnObjects :true})

const Navigate=useNavigate();

  return (
    <div className=' items-center justify-center p-6 mt-0 max-sm:mt-0 md:mt-20 lg:mt-60 xl:mt-20 ' id='top_destinations'>
        <div className='text-left  px-4 py-16 max-sm:px-6 max-lg:px-8 '>
            <p className='text-Lion text-lg font-sansTitle underline text-left' >{t('comp1_what_to_search')}</p>
             <h1 className='headline     first-letter:text-customBlue'>{t('comp1_title')}</h1>
             <hr className='h-2 w-1/2' />
             <p className='text-night font-sansBody text-lg w-1/2   max-lg:w-2/3 max-md:w-3/4  max-sm:mx-0   max-sm:w-full '>
             {t('comp1_paragraph')} <FontAwesomeIcon icon={faMapLocation} className='text-Lion'/> 
             </p>            
        </div>

        <div className='grid grid-cols-10 grid-rows-5 gap-6 h-screen w-full pt-10 max-md:grid-cols-4  max-md:grid-rows-10  px-4 py-16 max-sm:px-6 max-lg:px-8 /'>

            <div  
            onClick={()=>Navigate(TopDestinations[0].URI)}
            className=' max-md:col-span-2 max-md:row-span-2   col-span-4 row-span-3 bg-night rounded-3xl relative bg-cover bg-center overflow-hidden transition-transform duration-1000 ease-in-out transform hover:scale-90 '  
                style={{backgroundImage: `url(${TopDestinations[0].img})`}} >
                <p className='font-dancing text-2xl font-extrabold  text-beige absolute inset-0 bg-black bg-opacity-20   flex items-center justify-center rounded-3xl cursor-pointer hover:bg-transparent hover:text-night hover:bg-white hover:bg-opacity-20 '><span className='bg-Lion'>{TopDestinations[0].name}</span></p>
            </div>


            <div
            onClick={()=>Navigate(TopDestinations[5].URI)}
            className=' max-md:col-span-2 max-md:row-span-2  col-span-4 row-span-1 bg-night rounded-3xl bg-cover bg-center overflow-hidden transition-transform duration-1000 ease-in-out transform hover:scale-90' 
                style={{backgroundImage: `url(${TopDestinations[5].img})`}} >
                <p className='font-dancing text-2xl font-extrabold  text-beige absolute inset-0 bg-black bg-opacity-20   flex items-center justify-center rounded-3xl cursor-pointer hover:bg-transparent hover:text-night hover:bg-white hover:bg-opacity-20  '>
                <span className='bg-Lion'> {TopDestinations[5].name}</span> 
                </p>
            </div>

            <div
            onClick={()=>Navigate(TopDestinations[6].URI)}
            className='max-md:col-span-2 max-md:row-span-2  col-span-2 row-span-1 bg-night rounded-3xl bg-cover bg-center overflow-hidden transition-transform duration-1000 ease-in-out transform hover:scale-90'
                style={{backgroundImage: `url(${TopDestinations[6].img})`}} >
                <p className='font-dancing text-2xl font-extrabold  text-beige absolute inset-0 bg-black bg-opacity-20   flex items-center justify-center rounded-3xl cursor-pointer hover:bg-transparent hover:text-night hover:bg-white hover:bg-opacity-20'>
                    <span className='bg-Lion'>{TopDestinations[6].name}</span></p>   
            
            </div>
            <div
            onClick={()=>Navigate(TopDestinations[8].URI)} 
            className='max-md:col-span-2 max-md:row-span-2   col-span-2 row-span-3 bg-night rounded-3xl bg-cover bg-center overflow-hidden transition-transform duration-1000 ease-in-out transform hover:scale-90'
                style={{backgroundImage: `url(${TopDestinations[8].img})`}} >
                <p className='font-dancing text-2xl font-extrabold  text-beige absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center rounded-3xl cursor-pointer hover:bg-transparent hover:text-night'>
                    <span className='bg-Lion'>{TopDestinations[8].name}</span>
                </p>
            </div>

            <div
            onClick={()=>Navigate(TopDestinations[1].URI)} 
            className='max-md:col-span-2 max-md:row-span-2   col-span-2 row-span-3 bg-night rounded-3xl bg-cover bg-center overflow-hidden transition-transform duration-1000 ease-in-out transform hover:scale-90'
                style={{backgroundImage: `url(${TopDestinations[1].img})`}} >
                <p className='font-dancing text-2xl font-extrabold  text-beige absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center rounded-3xl cursor-pointer  hover:text-night hover:bg-white hover:opacity-20'>
                    <span className='bg-Lion'>{TopDestinations[1].name}</span>
                </p>
            </div>

            <div
            onClick={()=>Navigate(TopDestinations[2].URI)}
            className='max-md:col-span-2 max-md:row-span-2  col-span-2 row-span-3 bg-night rounded-3xl bg-cover bg-center overflow-hidden transition-transform duration-1000 ease-in-out transform hover:scale-90 '
                style={{backgroundImage: `url(${TopDestinations[2].img})`}} >
                <p className='font-dancing text-2xl font-extrabold  text-beige absolute inset-0 bg-black bg-opacity-20   flex items-center justify-center rounded-3xl cursor-pointer hover:bg-transparent hover:text-night hover:bg-white hover:bg-opacity-20'>
                    <span className='bg-Lion'>{TopDestinations[2].name}</span>
                    </p>
            </div>

            <div 
            onClick={()=>Navigate(TopDestinations[3].URI)}
             className='max-md:col-span-2 max-md:row-span-2   col-span-2 row-span-2 bg-night rounded-3xl bg-cover bg-center overflow-hidden transition-transform duration-1000 ease-in-out transform hover:scale-90'
                style={{backgroundImage: `url(${TopDestinations[3].img})`}} >
                <p className='font-dancing text-2xl font-extrabold  text-beige absolute inset-0 bg-black bg-opacity-20   flex items-center justify-center rounded-3xl cursor-pointer hover:bg-transparent hover:text-night hover:bg-white hover:bg-opacity-20'>
                    <span className='bg-Lion'>{TopDestinations[3].name}</span></p>
            </div>
            <div
             onClick={()=>Navigate(TopDestinations[4].URI)}
             className=' max-md:col-span-2 max-md:row-span-   col-span-2 row-span-2 bg-night rounded-3xl bg-cover bg-center overflow-hidden transition-transform duration-1000 ease-in-out transform hover:scale-90'
                            style={{backgroundImage: `url(${TopDestinations[4].img})`}} >
                            <p className='font-dancing text-2xl font-extrabold  text-beige absolute inset-0 bg-black bg-opacity-20   flex items-center justify-center rounded-3xl cursor-pointer hover:bg-transparent hover:text-night hover:bg-white hover:bg-opacity-20'>
                                <span className='bg-Lion'>{TopDestinations[4].name}</span></p>
            </div>

            <div
            onClick={()=>Navigate(TopDestinations[7].URI)}
            className='max-md:col-span-2 max-md:row-span-2   col-span-6 row-span-2 bg-night rounded-3xl bg-cover bg-center overflow-hidden transition-transform duration-1000 ease-in-out transform hover:scale-90'
                style={{backgroundImage: `url(${TopDestinations[7].img})`}} >
                <p className='font-dancing text-2xl font-extrabold  text-beige absolute inset-0 bg-black bg-opacity-20   flex items-center justify-center rounded-3xl cursor-pointer hover:bg-transparent hover:text-night hover:bg-white hover:bg-opacity-20'>
                    <span className='bg-Lion'>{TopDestinations[7].name}</span></p>   
            </div>

        </div>


    </div>
  )
}

export default HomeComponent1