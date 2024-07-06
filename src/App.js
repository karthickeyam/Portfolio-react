
import './App.css';
import Project from './project/Project';
import Contact from './contact/Contact';
import NavBar from './Nav/NavBar';
import Home from './home/Home';
import About from './about/About';
import Education from './education/Education';
;

function App() {
  return (
    <main>
      <NavBar/>
      <Home/>
      <About/>
      <Education/>
      <Project />
      <Contact />
     
    </main>
  );
}

export default App;