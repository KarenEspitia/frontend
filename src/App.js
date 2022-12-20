import logo from './logo.svg';
import './App.css';
import HomePage from './components/home/homePage';
import ListFactura from './components/factura/listFactura';

import{Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/facturas' element={<ListFactura/>}/>
    </Routes>
  );
}

export default App;
