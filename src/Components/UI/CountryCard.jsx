import React from 'react';
import Card from './Card';

const CountryCard = (props) => {
  return (
    <>
      <Card className="mb-10 w-[300px] md:mr-4">
        <img
          className="h-[200px] w-full"
          src={props.data.flags.png}
          alt={`Flag of ${props.data.name.common}`}
        />
        <h2 className="p-4 text-xl font-bold">{props.data.name.common}</h2>
        <ul>
          <li className="pl-4">
            <span className="font-bold">Population:</span> {props.data.population}
          </li>
          <li className="pt-1 pl-4">
            <span className="font-bold">Region:</span> {props.data.continents}
          </li>
          <li className="pt-1 pb-8 pl-4">
            <span className=" font-bold">Capital:</span> {props.data.capital}
          </li>
        </ul>
      </Card>
    </>
  );
};

export default CountryCard;
