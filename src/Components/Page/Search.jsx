import { useState } from 'react';
import Card from '../UI/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

  const [isListVisible, setIsListVisible] = useState(false);
  const clickHandler = () => {
    setIsListVisible(!isListVisible);
  };
  return (
    <div className="block p-12 sm:flex sm:justify-between">
      <Card className="mb-8 p-4 sm:p-6">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input
          type="text"
          placeholder="Search for a country..."
          className="ml-4 w-5/6 bg-elements-lt outline-none dark:bg-elements-dk sm:w-72"
        />
      </Card>
      <div id="region-selector" className="relative">
        <Card className="mb-8 inline-block w-[160px] sm:w-[173px]">
          <button type="button" className="p-4 sm:p-6" onClick={clickHandler}>
            Filter by Region
            <FontAwesomeIcon icon={faChevronDown} className="pl-2" />
          </button>
        </Card>
        <Card className="absolute w-[160px] sm:w-[173px]">
          <ul className={isListVisible ? '' : 'hidden'}>
            {regions.map((region) => (
              <li
                key={region}
                className=" m-1 cursor-pointer rounded-md py-1 px-4 hover:bg-background-dk"
              >
                {region}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default Search;
