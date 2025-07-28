import React, { useState } from 'react';
import Header from '../components/Header';
import SimpleSlider from '../components/SimpleSlider';
import CountryList from '../components/countries/CountryList';
import Footer from '../components/Footer'
const Home = () => {
 const [selectedRegion, setSelectedRegion] = useState('All');
  return (
<div className="min-vh-100 d-flex flex-column w-100">
  <Header activeRegion={selectedRegion} onRegionChange={setSelectedRegion} />

  {/* Add page content here */}
  <div className="flex-grow-1 px-3">
   <SimpleSlider/>
   <CountryList />
   <Footer/>
  </div>
</div>

  )
}

export default Home