import './App.css';
import Home from './components/Home';
import Navbar from './components/NavBar';
import Projects from './components/Projects';

function App() {
  return(
    <div>
      <Navbar/> 
      <Home/>  
      <Projects/>
    </div>    
  );
}

export default App;
