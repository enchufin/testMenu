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
      <div className="min-h-screen bg-gray-200 flex flex-col items-center pt-16 fondo">
        <Navigation 
          sections={menuData.sections} 
          onSectionChange={setCurrentSection} />
        <main className="container mx-auto p-4 max-w-3xl">
          <Section 
            title={currentSection}
            dishes={menuData.dishes[currentSection]} />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;