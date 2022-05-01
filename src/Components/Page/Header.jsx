import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

const Header = () => {
  return (
    <header className="flex justify-between px-12 py-6">
      <h1 className="text-2xl font-extrabold">Where in the world?</h1>
      <button className="text-sm font-semibold" type="button">
        <FontAwesomeIcon icon={faMoon} className="px-1" />
        Dark mode
      </button>
    </header>
  );
};

export default Header;
