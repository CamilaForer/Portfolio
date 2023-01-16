import './App.scss';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <>
      <Header/>
      <Profile/>
      <Skills/>
      <Projects/>
    </>
  );
}
export default App;