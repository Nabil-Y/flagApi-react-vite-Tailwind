import React, { useEffect, useState } from 'react';
import CountryCard from '../UI/CountryCard';

const FlagGallery = (props) => {
  const [flagData, setFlagData] = useState(null);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => setFlagData(data));
  }, []);

  const displayCountries = () => {
    return (
      flagData &&
      flagData.map((country) => <CountryCard key={country.name.common} data={country} />)
    );
  };

  return (
    <section className="flex flex-wrap justify-center px-4 py-6 md:justify-between  md:px-12">
      {displayCountries()}
    </section>
  );
};

export default FlagGallery;

// flex flex-wrap justify-center md:justify-between

// grid grid-cols-gallery
