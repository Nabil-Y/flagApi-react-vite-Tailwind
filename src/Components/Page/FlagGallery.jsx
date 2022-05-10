import React, { useEffect, useState } from 'react';
import Card from '../UI/Card';

const FlagGallery = (props) => {
  const [flagData, setFlagData] = useState(null);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/name/peru')
      .then((res) => res.json())
      .then((data) => setFlagData(data[0]));
  }, []);

  console.log(flagData);

  return (
    flagData && (
      <section className="flex flex-wrap justify-center px-4 py-6 md:justify-between md:px-12">
        <Card className="mb-10 w-[300px] md:mr-4">
          <img
            className="h-[200px]"
            src={flagData.flags.png}
            alt={`Flag of ${flagData.name.common}`}
          />
          <h2 className="p-4 text-xl font-bold">{flagData.name.common}</h2>
          <ul>
            <li className=" pl-4">
              <span className="font-bold">Population:</span> {flagData.population}
            </li>
            <li className="pt-1 pl-4">
              <span className="font-bold">Région:</span> {flagData.continents[0]}
            </li>
            <li className="pt-1 pb-8 pl-4">
              <span className=" font-bold">Capital:</span> {flagData.capital[0]}
            </li>
          </ul>
        </Card>
        <Card className="mb-10 w-[300px] md:mr-4">
          <img
            className="h-[200px]"
            src={flagData.flags.png}
            alt={`Flag of ${flagData.name.common}`}
          />
          <h2 className="p-4 text-xl font-bold">{flagData.name.common}</h2>
          <ul>
            <li className=" pl-4">
              <span className="font-bold">Population:</span> {flagData.population}
            </li>
            <li className="pt-1 pl-4">
              <span className="font-bold">Région:</span> {flagData.continents[0]}
            </li>
            <li className="pt-1 pb-8 pl-4">
              <span className=" font-bold">Capital:</span> {flagData.capital[0]}
            </li>
          </ul>
        </Card>
        <Card className="mb-10 w-[300px] md:mr-4">
          <img
            className="h-[200px]"
            src={flagData.flags.png}
            alt={`Flag of ${flagData.name.common}`}
          />
          <h2 className="p-4 text-xl font-bold">{flagData.name.common}</h2>
          <ul>
            <li className=" pl-4">
              <span className="font-bold">Population:</span> {flagData.population}
            </li>
            <li className="pt-1 pl-4">
              <span className="font-bold">Région:</span> {flagData.continents[0]}
            </li>
            <li className="pt-1 pb-8 pl-4">
              <span className=" font-bold">Capital:</span> {flagData.capital[0]}
            </li>
          </ul>
        </Card>
      </section>
    )
  );
};

export default FlagGallery;
