import { useState } from 'react';
import PropTypes from 'prop-types';
import { LanguageContext } from './LanguageContext';
import translations from '../data/translations.json';


export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('es');

  //función para traducir los elementos necesarios
  /* const translate = (key) => {
    const translation = translations.menuItems[key];
    return translation ? translation[currentLanguage] : key;
  };
 */
  const translate = (key, getDescription = false) => {
    const translation = translations.menuItems[key];
    if (!translation) return key;    
    if (typeof translation[currentLanguage] === 'string') { //si es un string es un "plato" sin descripción
      return translation[currentLanguage];
    }
    const translatedText = translation[currentLanguage];
    if (getDescription) {
      return translatedText[1] || ''; // Devuelve la descripción si existe, de lo contrario una cadena vacía
    }
    return translatedText[0]; // Devuelve el nombre del plato
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
