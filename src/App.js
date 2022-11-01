import logo from './logo.svg';
import './App.css';
import { Home, NotFound, Explore } from './Components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <Home></Home>
        }></Route>
        <Route path='*' element={
          <div>
            <Home></Home>
            <NotFound></NotFound>
          </div>
        }></Route>
        <Route path='/cars' element={
          <Explore></Explore>
        }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
