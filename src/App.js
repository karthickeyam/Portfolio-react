
import './App.css';
import NavBar from '../../portfolio/src/Nav/NavBar';
import Home from '../../portfolio/src/home/Home';
import About from '../../portfolio/src/about/About';
import Education from '../../portfolio/src/education/Education';
import Project from './project/Project';
import Contact from './contact/Contact';
;

function App() {
  return (
    <main>
      <NavBar />
      <Home />
      <About />
      <Education />
      <Project />
      <Contact />
     
    </main>
  );
}

export default App;