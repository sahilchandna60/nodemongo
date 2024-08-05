import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './views/main/home/dashboard';
import Transaction from './views/main/transaction/transaction';
import MainRoute from './views/routes/mainroute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainRoute />}>

          <Route path='/' element={<Dashboard />} />
          <Route path='/transaction' element={<Transaction/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
