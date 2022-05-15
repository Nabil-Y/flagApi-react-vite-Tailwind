import React from 'react';
import Card from './Card';

const CountryCard = (props) => {
  const liData = [
    ['Population:', props.data.population],
    ['Région:', props.data.region],
    ['Capital:', props.data.capital],
  ];

  const displayCountryCardData = () => {
    return liData.map((li, index) => (
      <li key={props.data.name.common + index} className="pb-1">
        <span className="font-bold">{li[0]}</span> {li[1]}
      </li>
    ));
  };
  return (
    <Card className="mb-10 max-w-[400px]  sm:mr-4 sm:w-[290px]">
      <img
        className="w-full  sm:h-[200px]"
        src={props.data.flags.png}
        alt={`Flag of ${props.data.name.common}`}
      />
      <h2 className="p-4 text-xl font-bold">{props.data.name.common}</h2>
      <ul className="pl-4 pb-8">{displayCountryCardData()}</ul>
    </Card>
  );
};

export default CountryCard;
