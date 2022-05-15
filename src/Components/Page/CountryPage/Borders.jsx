import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../UI/Card';

const Borders = (props) => {
  return props.borders.map((country, index) => (
    <Link to={`/id/${country}`} key={country + index} onClick={props.linkClickHandler}>
      <Card>{country}</Card>
    </Link>
  ));
};

export default Borders;
