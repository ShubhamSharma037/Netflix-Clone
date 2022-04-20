import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
