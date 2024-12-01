import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage debe estar dentro del proveedor LanguageProvider');
  }
  return context;
};