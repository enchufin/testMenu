import PropTypes from 'prop-types';
import { useLanguage } from '../hooks/useLanguage';

Navigation.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSectionChange: PropTypes.func.isRequired,
};

export default function Navigation({ sections, onSectionChange }) {
  const { currentLanguage, changeLanguage, translate } = useLanguage();
  return (
    <nav className="min-w-full bg-elBrasesRed text-white p-4 fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="space-x-4">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => onSectionChange(section)}
              className="hover:text-gray-300 px-2 py-1 text-base md:text-lg md:px-1 md:py-0"
            >
              {translate(section)}
            </button>
          ))}
        </div>
        <div className="space-x-4">
          <select
            value={currentLanguage}
            onChange={(e) => changeLanguage(e.target.value)}
            className="bg-gray-700 text-white p-1 rounded"
          >
            <option value={currentLanguage} disabled>
              {currentLanguage === 'es' ? 'Español' : currentLanguage === 'ca' ? 'Català' : 'English'}
            </option>
            {currentLanguage !== 'es' && <option value="es">Español</option>}
            {currentLanguage !== 'ca' && <option value="ca">Català</option>}
            {currentLanguage !== 'en' && <option value="en">English</option>}
          </select>
        </div>
      </div>
    </nav>
  );
}