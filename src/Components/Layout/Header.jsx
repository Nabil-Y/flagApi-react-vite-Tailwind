import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon as faMoonRegular } from '@fortawesome/free-regular-svg-icons';
import { faMoon as faMoonSolid } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const Header = () => {
  const [themeDark, setThemeDark] = useState('');

  const changeThemeToDark = () => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    setThemeDark(true);
  };

  const changeThemeToLight = () => {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    setThemeDark(false);
  };

  useEffect(() => {
    if (
      localStorage.getItem('theme') === 'dark' ||
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      changeThemeToDark();
    } else {
      changeThemeToLight();
    }
  }, []);

  const clickHandler = () => {
    themeDark === true ? changeThemeToLight() : changeThemeToDark();
  };

  return (
    <header className=" bg-elements-lt shadow-lg dark:bg-elements-dk">
      <div className=" mx-auto flex max-w-[1440px] justify-between px-4 py-6 md:px-12">
        <h1 className="text-lg font-extrabold md:text-2xl">Where in the world?</h1>
        <button
          className="text-xs font-semibold md:mr-4 md:text-sm"
          type="button"
          onClick={clickHandler}
        >
          {document.documentElement.classList.contains('dark') ? (
            <FontAwesomeIcon icon={faMoonSolid} className="px-1" />
          ) : (
            <FontAwesomeIcon icon={faMoonRegular} className="px-1" />
          )}
          Dark mode
        </button>
      </div>
    </header>
  );
};

export default Header;
