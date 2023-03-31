import { NavBar } from './pages/NavBar/NavBar';
import { Intro } from './pages/IntroPage/Intro.jsx'
import { Skills } from './pages/Skills/Skills'

function App() {
  return (
    <div className='App' >
      <NavBar/>
      <Intro/>
      <Skills/>
    </div>
  );
}

export default App;
