import { useState } from 'react';
import PropTypes from 'prop-types';
import { LanguageContext } from './LanguageContext';
import translations from '../data/translations.json';


export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('es');
  
  //función para traducir los elementos necesarios
  const translate = (key) => {
    const translation = translations.menuItems[key];
    return translation ? translation[currentLanguage] : key;
  };
  //función para cambio de idioma
  const changeLanguage = (language) => {
    setCurrentLanguage(language);
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage, translate, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
