import './App.css';
import Particles from 'react-particles-js';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home/Home';
import About from './components/Home/About/About';

function App() {
  return (
    <div>
      <Particles params={{
        Particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900
            }
          }
        }
      }} />
      <Routes>
        <Route path="/home" element={<Home />}>
        </Route>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route path="/aboutme" element={<About />}>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
