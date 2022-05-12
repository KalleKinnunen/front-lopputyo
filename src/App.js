import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Customerlist from './Components/Customerlist';
import Traininglist from './Components/Traininglist';

import Kalenteri from './Components/Kalenteri';
import Tilastot from './Components/Tilastot';



function App() {
  return (
    <div className="App">
      <h1>Tervetuloa PT-firman sivuille!</h1>
    <Router>
      
    <div> <Link to="/Customerlist">Asiakaslista</Link>{' '}</div>
     <div> <Link to="/Traininglist">Treenilista</Link>{' '}</div>
     <div> <Link to="/Kalenteri">Kalenteri</Link>{' '}</div>
     <div> <Link to="/Tilastot">Tilastot</Link>{' '}</div>
     
     
      <Routes>
     
        <Route path="/Customerlist" element={<Customerlist />} />
        <Route path="/Traininglist" element={<Traininglist />} />
        <Route path="/Kalenteri" element={<Kalenteri />} />
        <Route path="/Tilastot" element={<Tilastot />} />
        
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;

