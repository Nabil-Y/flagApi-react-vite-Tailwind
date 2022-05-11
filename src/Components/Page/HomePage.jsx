import { useState } from 'react';
import Input from './Input';
import Filter from './Filter';
import FlagGallery from '../Page/FlagGallery';

const Search = () => {
  const [isListVisible, setIsListVisible] = useState(false);
  const [filter, setFilter] = useState('');
  const [input, setInput] = useState('');

  const focusHandler = () => {
    setIsListVisible((prevState) => !prevState);
  };
  const clickHandler = (event) => {
    const region = event.target.textContent;
    setFilter(region);
  };
  const changeHandler = (event) => {
    setInput(event.target.value);
    setFilter('');
  };

  return (
    <>
      <section className="block p-4 pb-0 sm:flex sm:justify-between md:p-12">
        <Input changeHandler={changeHandler} />
        <Filter
          isListVisible={isListVisible}
          focusHandler={focusHandler}
          clickHandler={clickHandler}
        />
      </section>
      <FlagGallery filter={filter} input={input} />
    </>
  );
};

export default Search;
