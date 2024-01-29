// App.js
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './Header';
import { Acceuil } from './Acceuil'; // Import other components as needed
import { Dettaille } from './Dettaille';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/Acceuil' element={<Acceuil />} />
          <Route path='/Dettaille' element={<Dettaille />} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
