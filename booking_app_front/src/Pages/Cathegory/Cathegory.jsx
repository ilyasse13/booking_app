import React from 'react'
import { CategoryParams } from '../../assets/data';
const Cathegory = ({cat}) => {

    const categoryData = CategoryParams.find((category) => category.name === cat);
    
    const averageRating = (i)=>{
      if(categoryData.name=='Sneakers'){
        return 'NaN'
      }
      let average =categoryData.element[i].avis.reduce((total, avis) => total + avis.valeur, 0) / categoryData.element[i].avis.length;
      return average.toFixed(1);
    }
  return (
    <>
    <section className="flex flex-col items-center md:flex-row-reverse md:items-start md:justify-between p-8">
    <div className="md:w-1/3 p-4">
      <img className="w-full h-auto object-cover rounded" src={categoryData.image} alt="eee" />
    </div>
    <div className="md:w-2/3 p-4 md:pr-8">
      <h2 className="text-3xl font-semibold mb-4">{categoryData.name}</h2>
      <p className="text-lg">{categoryData.description}</p>
    </div>
  </section>
  <div>filter</div>
  <div className="container mx-auto p-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {categoryData.element.map((item,i)=>{
      return(
        <a href={`/${categoryData.path}/${item.nom}`} key={i} className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full h-48 object-cover" src={item.images[0]} alt="Restaurant Image"/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{item.nom}</div>
        <p className="text-gray-700 text-base">
          Téléphone : {item.téléphone}
        </p>
        <div className="mt-4 flex items-center">
        <span className='text-lg font-semibold'>{averageRating(i)}</span>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-yellow-500 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>

         
        </div>
      </div>
    </a>
      )
    })}

   
  </div>
</div>


    </>
    
  )
}

export default Cathegory