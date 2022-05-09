import { useState } from 'react';
import Input from './Input';
import Filter from './Filter';

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
    <section className="block p-12 sm:flex sm:justify-between">
      <Input filter={filter} onChange={changeHandler} />
      <Filter
        isListVisible={isListVisible}
        focusHandler={focusHandler}
        clickHandler={clickHandler}
      />
    </section>
  );
};

export default Search;
