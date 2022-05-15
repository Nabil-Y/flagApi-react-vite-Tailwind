import React, { useState, useLayoutEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Error from '../../UI/Error';
import Card from '../../UI/Card';
import Borders from './Borders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import DetailsLists from './DetailsLists';

const CountryPage = () => {
  const country = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [countryData, setCountryData] = useState('');
  const [countryCode, setCountryCode] = useState(country.countryId);

  useLayoutEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
      .then((res) => res.json())
      .then((data) => {
        setCountryData(data[0]);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [countryCode]);

  const linkClickHandler = () => {
    setCountryCode(country.countryId);
  };

  const displayCountryData = () => {
    return (
      <main className="mx-auto flex max-w-[1440px] flex-col px-4 py-6 md:px-12">
        <Link to="/" className="self-start">
          <Card className="my-16 px-10 py-3 text-lg">
            <FontAwesomeIcon icon={faArrowLeft} className="pr-4" />
            Back
          </Card>
        </Link>
        <article className="flex">
          <img src={countryData.flags.png} alt={`Flag of ${countryData.name.common}`} />
          <section className="w-full">
            <h2>{countryData.name.common}</h2>
            <DetailsLists data={countryData} />
            <div className="flex">
              <span className="font-bold">Border Countries:</span>
              <Borders borders={countryData.borders} linkClickHandler={linkClickHandler} />
            </div>
          </section>
        </article>
      </main>
    );
  };

  if (isLoading) {
    return <h2 className="py-10 text-center text-2xl font-bold ">Loading...</h2>;
  } else if (countryData === undefined) {
    return <Error />;
  } else {
    return displayCountryData();
  }
};

export default CountryPage;
