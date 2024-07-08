import React from 'react'
import HomeComponent1 from '../components/homeComponent 1/HomeComponent1';
import HomeComponent2 from '../components/homeComponent 2/HomeComponent2';
import Hero from '../components/Hero/Hero';

const Home = () => {
  return (
    <div>
      <Hero/>
      <div className='-mt-12'/>
      <HomeComponent2 />
      <HomeComponent1  />
    </div>
  )
}

export default Home;