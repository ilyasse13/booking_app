import React from 'react'
import homeComponentImg from '../../assets/travelPicture1.jpg';

const HomeComponent2 = () => {
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
          <p className='text-Lion text-lg font-sansTitle underline' >à Propos de Nous</p> 
           <h2 className="headline sm:text-3xl  first-letter:text-customBlue font-sansTitle ">
          Découvrez la meilleure destination à Marseille
          </h2>

          <p className="mt-4 text-night font-medium font-sansBody">
           Ce site est conçu pour vous aider à trouver votre destination idéale, que vous soyez un visiteur pour la première fois ou un habitué de la ville. Grâce à nos recommandations détaillées et à nos conseils d'experts, vous pourrez explorer les trésors cachés de Marseille et profiter pleinement de votre séjour. Naviguez facilement à travers les différentes options de loisirs, de restauration et de visites culturelles pour planifier votre voyage parfait. Laissez-nous être votre guide dans cette magnifique ville méditerranéenne.

          </p>

          <a
            href="#top_destinations"
            className="mt-8 inline-block rounded border border-customBlue bg-customBlue px-12 py-3 text-sm font-medium text-beige hover:bg-transparent hover:text-customBlue focus:outline-none focus:ring active:text-beige active:bg-customBlue cursor-pointer transition-transform duration-300 ease-in-out hover:transform hover:scale-90 hover:delay-200"
          >
            Meilleur Destination 
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default HomeComponent2