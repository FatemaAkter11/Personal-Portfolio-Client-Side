import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home/Home';
import About from './components/Home/About/About';
import ContactForm from './components/Home/ContactForm/ContactForm';
import Blogs from './components/Home/Blogs/Blogs';
import Navbar from './components/shared/Navbar/Navbar';
import Footer from './components/shared/Footer/Footer';
import Skills from './components/Home/Skills/Skills';
import Portfolio from './components/Home/Portfolio/Portfolio';
import Project from './components/Home/Project/Project';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}>
        </Route>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route path="/about" element={<About />}>
        </Route>
        <Route path="/skills" element={<Skills />}>
        </Route>
        <Route path="/blogs" element={<Blogs />}>
        </Route>
        <Route path="/portfolio" element={<Portfolio />}>
        </Route>
        <Route path="/projects/:key" element={<Project />}>
        </Route>
        <Route path="/contacts" element={<ContactForm />}>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
