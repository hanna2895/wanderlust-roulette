import React, { useState } from 'react';
import './App.css';

// import countryData from 'country-json/src/country-by-name';
import countryData from 'country-json/src/country-by-flag';

import globe from './giphy.gif';
import pausedGlobe from './globe.png';

function App() {
  const [animated, setAnimated] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [selectedFlag, setSelectedFlag] = useState(null)

  const handleClick = () => {
    setAnimated(true)

    // pick a random country from the country array
    const countryIndex = Math.floor(Math.random() * countryData.length);
    const country = countryData[countryIndex]
    // set the selectedcountry and the selectedCountryFlag
    // add a delay for dramatic effect
    setTimeout(() => {
      setSelectedCountry(country.country)
      setSelectedFlag(country.flag_base64)
      setAnimated(false)
    }, 3000)

  }
  return (
    <div className="App">
      <div className="header">
        <h1>Wanderlust Roulette</h1>
        <p>Spin the globe and receive a random destionation for your next vacation!</p>
      </div>
      <img src={animated ? globe : pausedGlobe} alt="globe" className="globe"/>
      <div onClick={handleClick} className="spin">Spin Now!</div>
      <hr />
      {selectedCountry 
        ? <>
            <div className="header">
              <h2>You're going to...</h2>
              <h1>{selectedCountry}</h1>
            </div>

            <img src={selectedFlag} />
        </>
        : null
      }
    </div>
  );
}

export default App;
