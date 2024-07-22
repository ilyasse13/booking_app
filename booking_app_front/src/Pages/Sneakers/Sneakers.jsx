import React ,{useState}from 'react'
// import { sneakers } from '../../assets/data';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const Sneakers = () => {
  const {t}=useTranslation();
  const sneakers=t('sneakers',{returnObjects:true});
  const {uri}= useParams()
  const sneaker=sneakers.find((snk)=>snk.uri==uri)
  const[activeImage,setActiveImage]=useState(sneaker.images[0]);
  

  const averageRating = (avis) => {
    if (!avis || avis.length === 0) return '';
    const average = avis.reduce((total, avis) => total + avis.valeur, 0) / avis.length;
    return average.toFixed(1); // Return average rating with one decimal place
  };

  const [reservationData, setReservationData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setReservationData({
      ...reservationData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    try{ 
      const response =  axios.post('https://localhost:8000/api/reservations', reservationData);
      console.log('Reservation successful:', response.data);
  } catch (error) {
      console.error('There was an error making the reservation:', error);
  }}

  if (!sneaker) {
    return <div>Sneaker shop not found</div>;
  }

  return (
    <div className="w-9/12 max-sm:w-full mx-auto bg-transparent shadow-lg  overflow-hidden padding  text-night">
           <div className='flex max-md:grid w-full mt-10'>
        <div className="flex-1 px-4 max-sm:px-6 max-lg:px-8">
            <h2 className="headline first-letter:text-customBlue  ">{sneaker.nom}</h2>
            <hr className='w-1/2' />
            <p className="italic mb-4 text-lg font-semibold py-10 w-11/12 font-sansBody">{sneaker.slogan}</p>
            <div className='flex flex-wrap w-full my-4 max-md:my-2'> {sneaker.images.map((image)=>(
        <img 
        className={ image==activeImage? 'border-4 border-customBlue w-1/5 cursor-pointer hover:scale-90 transition-transform':'cursor-pointer border-2 w-1/5  border-white  hover:scale-90 transition-transform'}
         src={image} alt="" onClick={()=>setActiveImage(image)} />
      ))} 
      </div>
        </div>
        <div className=" flex-1 w-full h-screen mx-auto bg-cover padding transition-all "
          style={{backgroundImage: `url(${activeImage})`,height:"80vh"}}>
        </div>


            </div>

            <div className="my-5 text-lg max-md:text-base ">

                <div className="mb-10">
                <div className=' padding w-full text-night font-sansBody font-semibold'>
                 <strong className='text-lg font-bold  xl:headline'>{t('description_title')}:</strong> <p className=" px-6  text-left  "> {sneaker.description}</p>

                </div>
                 <div className={` my-12 mx-auto md:w-8/12 xl:w-6/12 overflow-hidden xl:padding`}>

                <form
                    id='form'
                    onSubmit={handleSubmit}
                    className=' w-full xl:flex-1  flex flex-col gap-2'
                  >
                    <h3 className='text-lg font-bold  xl:headline text-left  '>{t('form_title')} </h3>

                      <input
                        type='text'
                        name='name'
                        value={reservationData.name}
                        onChange={handleChange}
                        placeholder={t('form_name_placeholder')}
                        className='focus:ring-2  bg-tertiary py-2 px-4 placeholder:text-secondary text-night rounded-md outline-none border-none font-normal'
                      />

                      <input
                        type='email'
                        name='email'
                        value={reservationData.email}
                        onChange={handleChange}
                        placeholder={t('form_email_placeholder')}
                        className='focus:ring-2  bg-tertiary py-2 px-4 placeholder:text-secondary text-night rounded-md outline-none border-none font-normal'
                      />

                      <input
                        type='téléphone'
                        name='téléphone'
                        value={reservationData.téléphone}
                        onChange={handleChange}
                        placeholder={t('form_phone_placeholder')}
                        className='focus:ring-2  bg-tertiary py-2 px-4 placeholder:text-secondary text-night rounded-md outline-none border-none font-normal'
                      />
                    <span className=' grid xl:flex  gap-2 '>

                      <input
                        type='number'
                        name='number'
                        min={0}
                        value={reservationData.adultes_n}
                        onChange={handleChange}
                        placeholder={t('form_nbre_adultes_placeholder')}
                        className='xl:flex-1 w-full focus:ring-2  bg-tertiary py-2 px-4 placeholder:text-secondary text-night rounded-md outline-none border-none font-normal'
                      />


                      <input
                        type='number'
                        name='number'
                        min={0}
                        value={reservationData.enfants_n}
                        onChange={handleChange}
                        placeholder={t('form_nbre_enfants_placeholder')}
                        className='xl:flex-1 w-full  focus:ring-2  bg-tertiary py-2 px-4 placeholder:text-secondary text-night rounded-md outline-none border-none font-normal text-sm xl:text-base '
                      />

                    </span>
                    <span className='grid xl:flex gap-2'>
                      <label className='flex-1 flex flex-col'>
                      <span className=' xl:font-medium '>{t('date')}</span>
                      <input
                        type='date'
                        name='date'
                        value={reservationData.date}
                        onChange={handleChange}
                        placeholder={t('date')}
                        className='focus:ring-2  flex-1 bg-tertiary py-2 px-4 placeholder:text-secondary text-night rounded-md outline-none border-none font-normal'
                      />
                      </label>

                      <label className='flex-1 flex flex-col'>
                      <span className='xl:font-medium '>{t('hour')}</span>
                      <input
                        type='time'
                        name='time'

                        value={reservationData.enfants_n}
                        onChange={handleChange}
                        placeholder={t('hour')}
                        className='focus:ring-2 flex-1 bg-tertiary py-2 px-4 placeholder:text-secondarytext-night rounded-md outline-none border-none font-normal'
                      />
                      </label>

                    </span>

                      <textarea
                        rows={7}
                        name='message'
                        value={reservationData.message}
                        onChange={handleChange}
                        placeholder={t('message')}
                        className='focus:ring-2  bg-tertiary py-2 px-4 placeholder:text-secondary text-night rounded-md outline-none border-none font-normal'
                      />

                    <button
                      type='submit'
                      className=' bg-customBlue py-3 px-8 rounded-xl outline-none w-fit  sm:m-0 text-white font-bold shadow-md shadow-primary'
                    >
                      {loading ?t('form_submit_loading') : t('form_submit_default') }
                    </button>
                </form>

                 </div>

                {sneaker.prix ? 
                <p className=" p-5 px-10 border-2 border-customBlue mx-4"><strong className='text-night text-lg'>{t('prix')}:</strong> {sneaker.prix}</p> 
                :""
                }
                {sneaker.horaires ? 
                <p className=" p-5 px-10 border-2 border-customBlue mx-4"><strong className='text-night text-lg'>{t('Horaires')}:</strong> {sneaker.horaires}</p>
                :""}
                {sneaker.informations_importants?
                sneaker.informations_importants.notes? 
                 <p className='p-5 px-10 border-2 border-customBlue mx-4 '><strong className='text-night text-lg'>{t('Notation')}  :</strong> {sneaker.informations_importants.notes}</p>
                :"":""}

                {/* {sneaker.siteweb ?
                <p className='capitalize p-5 px-10 border-2 border-customBlue font-bold leading-10 mx-4' >pour visiter le site Web de ce sneaker Cliquer sur :<a href={sneaker.siteweb} target="_blank" rel="noopener noreferrer" className="font-bold text-white bg-Lion p-2  ">site web <FontAwesomeIcon icon={faLink} /> </a></p>
                :""} */}

                </div>
                <div className='bg-Lion text-white text-lg max-md:text-base font-bold px-4 py-3 rounded mx-4'>
                {t('alert_reservation')} <a href="#form" className='text-customBlue px-3 py-2 underline font-normal'> <FontAwesomeIcon icon={faArrowAltCircleUp} /></a>
                
                </div>
                
                
                
                  {sneaker.avis.length>0 ?
                  <>

                <h3 className="text-3xl font-bold m-4 mt-6 ">{t('avis')}</h3>
                <div className="flex  items-center m-4">
                <div className='bg-white w-1/5 max-md:w-6/12 max- h-3 rounded-xl mx-4 '>
                    <div className='bg-customBlue w-1/2 h-3 rounded-xl transition-colors '
                    style={{width:`${averageRating(sneaker.avis)*100/5}%`}}>
                    </div>
                  </div>
                  <span className="text-lg font-semibold">  { averageRating(sneaker.avis)} / 5 </span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-yellow-500 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                  
                </div>
                  
                <div className="mt-6  justify-start flex-wrap">
                  {sneaker.avis.map((review, index) => (
                    <div key={index} className="relative m-4 p-4 border-2  border-customBlue rounded-lg bg-white">
                      <div className='flex gap-2 items-end'>
                      <div className=' flex rounded-full bg-Lion w-12 h-12 text-white font-bold text-center justify-center items-center '>{review.utilisateur[0]}</div> 
                      <strong>{review.utilisateur}</strong>    

                      </div>
                        <p className='absolute top-8 right-4 font-semibold text-night'><FontAwesomeIcon icon={faStar} className='text-yellow-500' /> {review.valeur}   </p>
                      <p className="text-gray-700 p-4 text-base max-md:text-base ">{review.commentaire}</p>
                      <div className="flex items-center justify-center">

                        {[...Array(review.valeur)].map((_, i) => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-yellow-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                </> :""}
                
                                  </div>
    </div>
  );
};


export default Sneakers