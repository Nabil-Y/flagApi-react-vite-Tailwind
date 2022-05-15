import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../UI/Card';

const Borders = (props) => {
  return (
    props.borders && (
      <div className="flex max-w-[600px] flex-wrap items-center">
        <span className="mr-4 mb-4 w-full text-base font-bold sm:w-auto">Border Countries:</span>
        {props.borders.map((country, index) => (
          <Link to={`/id/${country}`} key={country + index} onClick={props.linkClickHandler}>
            <Card className="mr-2 mb-2 w-[90px] px-8 py-2">{country}</Card>
          </Link>
        ))}
      </div>
    )
  );
};

export default Borders;
