import React, { useEffect, useState } from 'react';
import CountryCard from '../UI/CountryCard';

const FlagGallery = (props) => {
  const [flagData, setFlagData] = useState(null);

  useEffect(() => {
    if (props.input) {
      fetch(`https://restcountries.com/v3.1/name/${props.input}`)
        .then((res) => res.json())
        .then((data) => setFlagData(data));
    } else if (props.filter) {
      fetch(`https://restcountries.com/v3.1/region/${props.filter}`)
        .then((res) => res.json())
        .then((data) => setFlagData(data));
    } else {
      fetch('https://restcountries.com/v3.1/all')
        .then((res) => res.json())
        .then((data) => setFlagData(data));
    }
  }, [props.filter, props.input]);

  const displayCountries = () => {
    if (flagData && flagData.length === 1) {
      setFlagData((prevState) => [prevState]);
    }
    if (flagData && flagData.length === 0) {
      return;
    }

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
