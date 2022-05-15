import { useState } from 'react';
import Input from './Input';
import Filter from './Filter';
import FlagGallery from './FlagGallery';

const Search = () => {
  const [isListVisible, setIsListVisible] = useState(false);
  const [filter, setFilter] = useState('');
  const [input, setInput] = useState('');

  const focusHandler = () => {
    setIsListVisible((prevState) => !prevState);
  };
  const clickHandler = (event) => {
    const region = event.target.textContent;
    if (region === 'Reset') {
      setFilter('');
    } else {
      setFilter(region);
    }
  };
  const changeHandler = (event) => {
    setInput(event.target.value);
  };

  return (
    <main className="mx-auto max-w-[1440px]">
      <section className="block p-4 pb-0 sm:flex sm:justify-between md:p-12">
        <Input changeHandler={changeHandler} />
        <Filter
          isListVisible={isListVisible}
          focusHandler={focusHandler}
          clickHandler={clickHandler}
        />
      </section>
      <FlagGallery filter={filter} input={input} />
    </main>
  );
};

export default Search;
