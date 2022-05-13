import React, { useEffect, useState, useLayoutEffect } from 'react';
import CountryCard from '../UI/CountryCard';

const FlagGallery = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [flagData, setFlagData] = useState('');
  const [filteredFlagData, setFilteredFlagData] = useState('');

  useLayoutEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        setFlagData(data);
        setFilteredFlagData(data);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (props.input) {
      setFilteredFlagData(
        flagData.filter((country) =>
          country.name.common.toLowerCase().includes(props.input.toLowerCase())
        )
      );
    } else if (props.filter) {
      setFilteredFlagData(
        flagData.filter((country) =>
          country.region.toLowerCase().includes(props.filter.toLowerCase())
        )
      );
    }
  }, [props.filter, props.input]);

  const displayCountries = () => {
    if (filteredFlagData.length === 1) {
      return <CountryCard key={filteredFlagData[0].name.common} data={filteredFlagData[0]} />;
    }
    if (filteredFlagData.length === 0) {
      return 'No country matches your query';
    }

    return filteredFlagData.map((country) => (
      <CountryCard key={country.name.common} data={country} />
    ));
  };

  return (
    <section className="flex flex-wrap justify-center px-4 py-6 md:justify-between  md:px-12">
      {isLoading ? <h2 className="text-2xl font-bold">Loading...</h2> : displayCountries()}
    </section>
  );
};

export default FlagGallery;

// flex flex-wrap justify-center md:justify-between

// grid grid-cols-gallery
