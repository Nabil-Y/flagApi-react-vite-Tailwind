import React from 'react';

const DetailsLists = (props) => {
  const currencies = Object.values(props.data.currencies).map((currency) => currency.name);
  const languages = Object.values(props.data.languages);
  const nativeName = Object.values(props.data.name.nativeName)[0].official;

  const firstListData = [
    ['Native Name:', nativeName],
    ['Population:', props.data.population],
    ['Region:', props.data.region],
    ['Sub Region:', props.data.subregion],
    ['Capital:', props.data.capital],
  ];

  const secondListData = [
    ['Top Level Domain:', props.data.tld],
    ['Currencies:', currencies.toString()],
    ['Languages:', languages.toString()],
  ];

  const displayCountryCardData = (array) => {
    return array.map((li, index) => (
      <li key={props.data.name.common + index} className="pb-2">
        <span className="font-bold">{li[0]}</span> {li[1]}
      </li>
    ));
  };

  return (
    <div className="sm:flex sm:flex-wrap">
      <ul className="mb-8 sm:pr-16">{displayCountryCardData(firstListData)}</ul>
      <ul className="mb-8 sm:pr-16">{displayCountryCardData(secondListData)}</ul>
    </div>
  );
};

export default DetailsLists;
