import { useState } from 'react';
import Card from '../UI/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

  const [isListVisible, setIsListVisible] = useState(false);
  const [filter, setFilter] = useState('');
  const listClickHandler = () => {
    setIsListVisible((prevState) => !prevState);
  };
  const listItemClickHandler = (event) => {
    const region = event.target.textContent;
    setFilter(region);
  };
  const changeHandler = () => {
    console.log('value changed');
  };
  return (
    <div className="block p-12 sm:flex sm:justify-between">
      <Card className="mb-8 p-4 sm:p-6">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input
          type="text"
          value={filter}
          placeholder="Search for a country..."
          className="ml-4 w-5/6 bg-elements-lt outline-none dark:bg-elements-dk sm:w-72"
          onChange={changeHandler}
        />
      </Card>
      <div id="region-selector" className="relative">
        <Card className="mb-8 inline-block w-[160px] sm:w-[173px]">
          <button type="button" className="p-4 sm:p-6" onClick={listClickHandler}>
            Filter by Region
            <FontAwesomeIcon
              icon={faChevronDown}
              className={
                isListVisible
                  ? 'rotate-180 pr-2 transition-all duration-200 '
                  : 'pl-2 transition-all duration-200'
              }
            />
          </button>
        </Card>
        <Card className="absolute z-10 w-[160px] sm:w-[173px]">
          <ul
            className={
              isListVisible
                ? 'max-h-screen transition-all duration-200 '
                : 'max-h-0 overflow-hidden transition-all duration-200'
            }
          >
            {regions.map((region) => (
              <li
                key={region}
                className=" m-1 cursor-pointer rounded-md py-1 px-4 hover:bg-background-dk"
                onClick={listItemClickHandler}
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
