import React from 'react'
import HomeComponent1 from '../components/homeComponent 1/HomeComponent1';
import HomeComponent2 from '../components/homeComponent 2/HomeComponent2';

const Home = () => {
  return (
    <div>
      <div className="m-20">
        heroSection 
      </div>
      <HomeComponent2 />
      <HomeComponent1 />
    </div>
  )
}

export default Home;