import { NavBar } from './pages/NavBar/NavBar';
import { Intro } from './pages/IntroPage/Intro.jsx'
import { Skills } from './pages/Skills/Skills'
import { Contact } from './pages/ContactPage/Contact';
import Footer from './pages/Footer/Footer';
import { Slider } from './pages/ProjectsPage/Slider';

function App() {
  return (
    <div className='App' >
      <NavBar/>
      <Intro/>
      <Skills/>
      <Slider/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
