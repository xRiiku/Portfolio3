import { NavBar } from './pages/NavBar/NavBar';
import { Intro } from './pages/IntroPage/Intro.jsx'
import { Skills } from './pages/Skills/Skills'
import ProjectsSlider from './pages/ProjectsPage/ProjectsSlider';
import { Contact } from './pages/ContactPage/Contact';
import Footer from './pages/Footer/Footer';

function App() {
  return (
    <div className='App' >
      <NavBar/>
      <Intro/>
      <Skills/>
      <ProjectsSlider/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
