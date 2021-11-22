import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />}>
        </Route>
        <Route exact path="/" element={<Home />}>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
