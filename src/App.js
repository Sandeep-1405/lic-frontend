
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './Components/admin';
import CustomerDetails from './Components/CustomerDetails';

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<CustomerDetails/>}/>
        <Route exact path='/admin' element={<Admin/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
