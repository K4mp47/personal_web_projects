import './App.css';
import BigBaloon from './components/BigBaloon';
import Home from './components/Home';
import Navbar from './components/NavBar';
import Projects from './components/Projects';

function App() {
  return(
    <div>
      <BigBaloon/>
      <Navbar/> 
      <Home/>  
      <Projects/>
    </div>
  );
}

export default App;
