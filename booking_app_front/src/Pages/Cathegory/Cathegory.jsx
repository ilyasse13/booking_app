import React,{useState,useEffect} from 'react'
// import { CategoryParams } from '../../assets/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeftRotate } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';





const Cathegory = ({cat}) => {
   const {t}= useTranslation();
   const CategoryParams=t('CategoryParams' , { returnObjects: true });

    const[categoryfilters,setCategoryFilters]=useState([])
    const[filteredData,setFilteredData]=useState([]);
    // const [Loading,setLoading]=useState(true);

    const categoryData = CategoryParams.find((category) => category.name === cat);
  useEffect(()=>{

        const filtréDonnées =categoryfilters.length>0 ? categoryData.element.filter((item)=>(categoryfilters.includes(item.category))):categoryData.element;
      setFilteredData(filtréDonnées);        

      return () => {
  //       // This code runs before the component unmounts or before the effect runs again
        console.log('Cleanup');
      };

  },[categoryfilters])


    const toggleFilter = (filter) => {
      if (categoryfilters.includes(filter)) {
        setCategoryFilters(categoryfilters.filter(f => f !== filter));
      } else {
        setCategoryFilters([...categoryfilters, filter]);
      }
    };
    
    const averageRating = (i)=>{
       let average = categoryData.element[i].avis ? categoryData.element[i].avis.reduce((total, avis) => total + avis.valeur, 0) / categoryData.element[i].avis.length:"";
      return average?average.toFixed(1):"";
    }
  return (
    <>
    <section className=" flex flex-col items-center md:flex-row md:items-start md:justify-between px-4 py-16 max-sm:px-6 max-lg:px-8">
    <div className="md:w-1/3 p-4">
      <img className="w-full h-auto object-cover rounded" src={categoryData.image} alt="eee" />
    </div>
    <div className="md:w-2/3 p-4 md:pl-8">
      <h2 className="text-3xl font-semibold first-letter:text-customBlue mb-4">{categoryData.name}<hr className='w-2/4 ' /></h2>
      
      <p className="text-lg">{categoryData.description}</p>
    </div>
  </section>   

      {
      cat=='Restaurants'?
      <div className=' relative padding rounded-3xl flex justify-start gap-2 w-11/12 mx-auto border-2 p-3 flex-wrap items-center'> 
      <span className='absolute top-2 left-2 mb-5 text-Lion underline text-lg'>
          <FontAwesomeIcon icon={faFilter}  /> Filtrer les resultats 
           <button className=' mx-4 rounded-xl p-2 px-4 text-white border-2 border-Lion hover:bg-white hover:text-Lion'
            onClick={()=>setCategoryFilters([])}>
             <FontAwesomeIcon icon={faArrowLeftRotate} /></button>
            </span>
    
      <button className={categoryfilters.includes('pizzeria')?'font-bold border-2 rounded-full border-white p-4 bg-white text-Lion transition-opacity':'border-2 rounded-full border-white p-4 text-white transition-opacity hover:bg-white hover:text-Lion'} 
      onClick={()=>toggleFilter("pizzeria")}
       >{t('category_filter1')}</button>

      <button className={categoryfilters.includes('tacos')?'font-bold border-2 rounded-full border-white p-4 bg-white text-Lion transition-opacity':'border-2 rounded-full border-white p-4 text-white transition-opacity hover:bg-white hover:text-Lion'} 
      onClick={()=>toggleFilter('tacos')}
      >{t('category_filter2')}</button>
      <button className={categoryfilters.includes('fruit_de_mer')?'font-bold border-2 rounded-full border-white p-4 bg-white text-Lion transition-opacity':'border-2 rounded-full border-white p-4 text-white transition-opacity hover:bg-white hover:text-Lion'} 
      onClick={()=>toggleFilter('fruit_de_mer')}
      >{t('category_filter3')}</button>
      <button className={categoryfilters.includes('italien')?'font-bold border-2 rounded-full border-white p-4 bg-white text-Lion transition-opacity':'border-2 rounded-full border-white p-4 text-white transition-opacity hover:bg-white hover:text-Lion'} 
      onClick={()=>
         toggleFilter("italien")
      }>{t('category_filter4')}</button>
      <button className={categoryfilters.includes('traditionnelle')?'font-bold border-2 rounded-full border-white p-4 bg-white text-Lion transition-opacity':'border-2 rounded-full border-white p-4 text-white transition-opacity hover:bg-white hover:text-Lion'} 
      onClick={()=>
        toggleFilter("traditionnelle")
      }>{t('category_filter5')}</button>
      <button className={categoryfilters.includes('tropical')?'font-bold border-2 rounded-full border-white p-4 bg-white text-Lion transition-opacity':'border-2 rounded-full border-white p-4 text-white transition-opacity hover:bg-white hover:text-Lion'} 
      onClick={()=>
        toggleFilter("tropical")
      }>{t('category_filter6')}</button>
      </div>
      :(cat=='Nights club')?
        ""
       :(cat=='Cafées et biscuitrie')?
       <div className=' relative padding rounded-3xl flex justify-start gap-2 w-11/12 mx-auto border-2 p-3 flex-wrap items-center'> 
       <span className='absolute top-2 left-2 mb-5 text-Lion underline text-lg'>
           <FontAwesomeIcon icon={faFilter}  /> Filtrer les resultats 
            <button className=' mx-4 rounded-xl p-2 px-4 text-white border-2 border-Lion hover:bg-white hover:text-Lion'
             onClick={()=>setCategoryFilters([])}>
              <FontAwesomeIcon icon={faArrowLeftRotate} /></button>
             </span>
          <button className={categoryfilters.includes('Donuts')?'font-bold border-2 rounded-full border-white p-4 bg-white text-Lion transition-opacity':'border-2 rounded-full border-white p-4 text-white transition-opacity hover:bg-white hover:text-Lion'} 
      onClick={()=>
        toggleFilter("Donuts")
      }>{t('category_filter7')}</button>
      <button className={categoryfilters.includes('Biscuitrie')?'font-bold border-2 rounded-full border-white p-4 bg-white text-Lion transition-opacity':'border-2 rounded-full border-white p-4 text-white transition-opacity hover:bg-white hover:text-Lion'} 
      onClick={()=>
        toggleFilter("Biscuitrie")
      }>{t('category_filter8')}</button>
       </div>
       :(cat=='Coiffeurs')?
        ""
       :(cat=='Sneakers')?
       <div className=' relative padding rounded-3xl flex justify-start gap-2 w-11/12 mx-auto border-2 p-3 flex-wrap items-center'> 
       <span className='absolute top-2 left-2 mb-5 text-Lion underline text-lg'>
           <FontAwesomeIcon icon={faFilter}  /> Filtrer les resultats 
            <button className=' mx-4 rounded-xl p-2 px-4 text-white border-2 border-Lion hover:bg-white hover:text-Lion'
             onClick={()=>setCategoryFilters([])}>
              <FontAwesomeIcon icon={faArrowLeftRotate} /></button>
             </span>
          <button className={categoryfilters.includes('nettoyage et restauration')?'font-bold border-2 rounded-full border-white p-4 bg-white text-Lion transition-opacity':'border-2 rounded-full border-white p-4 text-white transition-opacity hover:bg-white hover:text-Lion'} 
      onClick={()=>
        toggleFilter("nettoyage et restauration")
      }>{t('category_filter9')}</button>

       </div>
       :(cat=='Opticiens')?
       ""
       :(cat=='Activités')?
       <div className=' relative padding rounded-3xl flex justify-start gap-2 w-11/12 mx-auto border-2 p-3 flex-wrap items-center'> 
       <span className='absolute top-2 left-2 mb-5 text-Lion underline text-lg'>
           <FontAwesomeIcon icon={faFilter}  /> Filtrer les resultats 
            <button className=' mx-4 rounded-xl p-2 px-4 text-white border-2 border-Lion hover:bg-white hover:text-Lion'
             onClick={()=>setCategoryFilters([])}>
              <FontAwesomeIcon icon={faArrowLeftRotate} /></button>
             </span>
          <button className={categoryfilters.includes('cinema')?'font-bold border-2 rounded-full border-white p-4 bg-white text-Lion transition-opacity':'border-2 rounded-full border-white p-4 text-white transition-opacity hover:bg-white hover:text-Lion'} 
      onClick={()=>
        toggleFilter("cinema")
      }>{t('category_filter10')}</button>

       </div>
       :(cat=='Locations')?
       ""
       :""

    }
      

  <div className="container mx-auto padding">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    
    {filteredData.map((item,i)=>{
      return(
        <a href={`/${item.path}`} key={i} className="max-w-sm rounded overflow-hidden shadow-lg bg-white max-sm:w-11/12  max-sm:mx-auto">
      <img className="w-full h-48 object-cover" src={item.images[0]} alt="Restaurant Image"/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{item.nom}</div>
        {/* <p className="text-gray-700 text-base">
           {item.téléphone ?`Téléphone : ${item.téléphone}`:item.adresse ?`Adresse: ${item.adresse}` :""}
        </p> */}
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