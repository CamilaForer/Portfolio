import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <>
      <Header/>
      <Profile/>
      <Skills/>
      <Projects/>
      <Contact/>
    </>
  );
}
export default App;