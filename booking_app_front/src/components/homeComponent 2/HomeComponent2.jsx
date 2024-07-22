import React from 'react'
import homeComponentImg from '../../assets/travelPicture1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBookOpen} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const HomeComponent2 = () => {
  const {t}=useTranslation();
  
  return (
    
    <section>
  <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div className="relative z-10 lg:py-16">
        <div className="relative h-64 sm:h-80 lg:h-full">
          <img
            alt="Marseille"
            src={homeComponentImg}
            className="absolute inset-0 h-full w-full object-cover "
          />
        </div>
      </div>

      <div className="relative flex items-center bg-gray-100">
        <span
          className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
        ></span>
       

        <div className="p-8 sm:p-16 lg:p-24">
          <p className='text-Lion text-lg font-sansTitle underline' >{t('comp2_about_us')}</p> 
           <h2 className="headline sm:text-3xl  first-letter:text-customBlue font-sansTitle ">
          {t('comp2_title')}
          </h2>
          <hr />

          <p className="mt-4 text-night font-medium font-sansBody">
           {t('comp2_paragraph')} <FontAwesomeIcon icon={faBookOpen} className='text-Lion' />
          </p>

          <a
            href="#top_destinations"
            className="mt-8 inline-block rounded border border-customBlue bg-customBlue px-12 py-3 text-sm font-medium text-beige hover:bg-transparent hover:text-customBlue focus:outline-none focus:ring active:text-beige active:bg-customBlue cursor-pointer transition-transform duration-300 ease-in-out hover:transform hover:scale-90 hover:delay-200"
          >
            {t('comp2_button')} 
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default HomeComponent2