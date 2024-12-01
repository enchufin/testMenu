import PropTypes from 'prop-types';
import { useLanguage } from '../hooks/useLanguage';

Navigation.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSectionChange: PropTypes.func.isRequired,
};

export default function Navigation({ sections, onSectionChange }) {
  const { currentLanguage, changeLanguage, translate } = useLanguage();
  console.log(sections);
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="space-x-4">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => onSectionChange(section)}
              className="hover:text-gray-300"
            >
              {translate(section)}
            </button>
          ))}
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
          {/* TO DO: TOGGLE BUTTON DARKMODE */}
        </div>
      </div>
    </nav>
  );
}