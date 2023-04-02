import { NavBar } from './pages/NavBar/NavBar';
import { Intro } from './pages/IntroPage/Intro.jsx'
import { Skills } from './pages/Skills/Skills'
import ProjectsSlider from './pages/ProjectsPage/ProjectsSlider';

function App() {
  return (
    <div className='App' >
      <NavBar/>
      <Intro/>
      <Skills/>
      <ProjectsSlider/>
    </div>
  );
}

export default App;
