import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home/Home';
import About from './components/Home/About/About';
import ContactForm from './components/Home/ContactForm/ContactForm';
import Blogs from './components/Home/Blogs/Blogs';
import Navbar from './components/shared/Navbar/Navbar';
import Footer from './components/shared/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}>
        </Route>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route path="/aboutme" element={<About />}>
        </Route>
        <Route path="/blogs" element={<Blogs />}>
        </Route>
        <Route path="/contacts" element={<ContactForm />}>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
