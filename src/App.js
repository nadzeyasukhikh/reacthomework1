
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  const [currentTab, setCurrentTab] = useState("about")

  const handleTabChange = (tabName) => {
    setCurrentTab(tabName);
  };

  return (
    <div className="App">
      <Nav onTabChange={handleTabChange} />
      {currentTab === "about" && <About />}
      {currentTab === "projects" && <Projects />}
      {currentTab === "services" && <Services />}
      <Footer />
    </div>
  );
}

export default App;
