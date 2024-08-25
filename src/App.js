import './App.css';
import Navbar from './components/Navbar';
import AboutSection from './Main/AboutSection';
import ContactSection from './Main/ContactSection';
import FooterSection from './Main/FooterSection';
import HomeSection from './Main/HomeSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default App;
