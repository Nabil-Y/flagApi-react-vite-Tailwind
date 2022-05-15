import React, { useEffect, useState, useLayoutEffect } from 'react';
import CountryCard from '../../UI/CountryCard';
import { Link } from 'react-router-dom';

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
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (props.input) {
      setFilteredFlagData((prevState) =>
        prevState.filter((country) =>
          country.name.common.toLowerCase().includes(props.input.toLowerCase())
        )
      );
    } else if (props.filter) {
      setFilteredFlagData(
        flagData.filter((country) =>
          country.region.toLowerCase().includes(props.filter.toLowerCase())
        )
      );
    } else {
      setFilteredFlagData(flagData);
    }
  }, [props.filter, props.input]);

  const displayCountries = () => {
    if (filteredFlagData?.length === 1) {
      return (
        <Link to={`id/${filteredFlagData[0].cca3}`} key={filteredFlagData[0].cca3}>
          <CountryCard key={filteredFlagData[0].name.common} data={filteredFlagData[0]} />
        </Link>
      );
    }
    if (filteredFlagData?.length === 0) {
      return 'No country matches your query';
    }

    return filteredFlagData?.map((country) => (
      <Link to={`id/${country.cca3}`} key={country.cca3}>
        <CountryCard data={country} />
      </Link>
    ));
  };

  return (
    <section className="grid justify-center gap-6 px-4 sm:grid-cols-gallery md:px-12">
      {isLoading ? <h2 className="text-2xl font-bold">Loading...</h2> : displayCountries()}
    </section>
  );
};

export default FlagGallery;

//flex flex-wrap justify-center px-4 py-6 md:justify-between  md:px-12
