import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from 'react-router-dom';
import Particles from 'react-particles-js';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';


function App() {
  return (
    <div className="App">
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "line",
              stroke: {
                width: 10,
                color: "#f9ab00"
              }
            }
          }
        }} 
      />
      <Navbar />
      <Header />
      <About />
      <Services />
      <Experience />
      <Portfolio />
    </div>
  );
}

export default App;
