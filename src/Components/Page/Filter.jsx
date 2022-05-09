import React from 'react';
import Card from '../UI/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Filter = (props) => {
  const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

  return (
    <div id="region-selector" className="relative">
      <Card className="mb-8 inline-block w-[160px] sm:w-[173px]">
        <button
          type="button"
          className="p-4 sm:p-6"
          onBlur={props.focusHandler}
          onClick={props.focusHandler}
        >
          Filter by Region
          <FontAwesomeIcon
            icon={faChevronDown}
            className={` transition-all duration-700 ${
              props.isListVisible ? 'rotate-180 pr-2  ' : 'pl-2 '
            }
              `}
          />
        </button>
      </Card>
      <Card className="absolute z-10 w-[160px] sm:w-[173px]">
        <ul
          className={` overflow-hidden transition-all duration-700 ${
            props.isListVisible ? 'max-h-screen  ' : 'max-h-0 '
          } `}
        >
          {regions.map((region) => (
            <li
              key={region}
              className=" m-1 cursor-pointer rounded-md py-1 px-4 hover:bg-background-dk"
              onClick={props.clickHandler}
            >
              {region}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default Filter;
