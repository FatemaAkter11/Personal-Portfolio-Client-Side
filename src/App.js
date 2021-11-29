import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home/Home';
import About from './components/Home/About/About';
// import ContactForm from './components/Home/ContactForm/ContactForm';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />}>
        </Route>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route path="/aboutme" element={<About />}>
        </Route>
        {/* <Route path="/contacts" element={<ContactForm />}>
        </Route> */}
      </Routes>

    </div>
  );
}

export default App;
