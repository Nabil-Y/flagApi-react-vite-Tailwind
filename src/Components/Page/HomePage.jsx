import { useState } from 'react';
import Input from './Input';
import Filter from './Filter';
import FlagGallery from '../Page/FlagGallery';

const Search = () => {
  const [isListVisible, setIsListVisible] = useState(false);
  const [filter, setFilter] = useState('');

  const focusHandler = () => {
    setIsListVisible((prevState) => !prevState);
  };
  const clickHandler = (event) => {
    const region = event.target.textContent;
    const filterToInputEvent = { target: { value: region } };
    changeHandler(filterToInputEvent);
  };
  const changeHandler = (event) => {
    setFilter(event.target.value);
  };

  return (
    <>
      <section className="block p-4 pb-0 sm:flex sm:justify-between md:p-12">
        <Input filter={filter} onChange={changeHandler} />
        <Filter
          isListVisible={isListVisible}
          focusHandler={focusHandler}
          clickHandler={clickHandler}
        />
      </section>
      <FlagGallery value={filter} />
    </>
  );
};

export default Search;
