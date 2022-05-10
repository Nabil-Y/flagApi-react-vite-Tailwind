import React from 'react';
import Card from './Card';

const CountryCard = (props) => {
  return (
    <>
      <Card className="mb-10 w-[300px] md:mr-4">
        <img className="h-[200px]" src={props.flagImg} alt={`Flag of ${props.name}`} />
        <h2 className="p-4 text-xl font-bold">{props.name}</h2>
        <ul>
          <li className="pl-4">
            <span className="font-bold">Population:</span> {props.population}
          </li>
          <li className="pt-1 pl-4">
            <span className="font-bold">Région:</span> {props.region}
          </li>
          <li className="pt-1 pb-8 pl-4">
            <span className=" font-bold">Capital:</span> {props.capital}
          </li>
        </ul>
      </Card>
    </>
  );
};

export default CountryCard;
