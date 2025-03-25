import './App.css';
import NavbarComp from './components/NavbarComp'
import AboutSection from './Main/AboutSection';
import ContactSection from './Main/ContactSection';
import FooterSection from './Main/FooterSection';
import HomeSection from './Main/HomeSection';

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <HomeSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default App;
