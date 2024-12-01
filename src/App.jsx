import { useState } from 'react';
import Navigation from "./components/Navigation.jsx";
import Section from "./components/Section.jsx";
import menuData from './data/carta.json';
import { LanguageProvider } from './contexts/LanguageProvider.jsx';
import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState(menuData.sections[0]);

  return (
    <LanguageProvider>
      {console.log(menuData.sections)}
      <Navigation 
        sections={menuData.sections} 
        onSectionChange={setCurrentSection} />
      <main>
        <Section 
          title={currentSection}
          dishes={menuData.dishes[currentSection]} />
      </main>
    </LanguageProvider>
  );
}

export default App;