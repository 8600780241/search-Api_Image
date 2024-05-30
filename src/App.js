import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './Main';
import Mountain from './Mountain';
import Birds from './Birds';
import Beaches from './Beaches';
import Food from './Food';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/mountain' element={<Mountain />} />
          <Route path='/birds' element={<Birds />} />
          <Route path='/beach' element={<Beaches />} />
          <Route path='/food' element={<Food />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
