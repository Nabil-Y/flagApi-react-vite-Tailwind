import React from 'react';
import Card from '../UI/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Input = (props) => {
  return (
    <Card className="mb-8 p-4 sm:p-6">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input
        type="text"
        placeholder="Search for a country..."
        className="ml-4 w-5/6 bg-elements-lt outline-none dark:bg-elements-dk sm:w-72"
        onChange={props.changeHandler}
      />
    </Card>
  );
};

export default Input;
