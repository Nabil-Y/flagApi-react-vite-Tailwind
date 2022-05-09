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
    <header className="flex justify-between bg-elements-lt px-12 py-6 shadow-lg dark:bg-elements-dk">
      <h1 className="text-2xl font-extrabold">Where in the world?</h1>
      <button className="text-sm font-semibold" type="button" onClick={clickHandler}>
        {document.documentElement.classList.contains('dark') ? (
          <FontAwesomeIcon icon={faMoonSolid} className="px-1" />
        ) : (
          <FontAwesomeIcon icon={faMoonRegular} className="px-1" />
        )}
        Dark mode
      </button>
    </header>
  );
};

export default Header;
