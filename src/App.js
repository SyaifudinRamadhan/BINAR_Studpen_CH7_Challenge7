import logo from './logo.svg';
import './App.css';
import { Home, NotFound, Explore, ProtectedRoute, Login } from './Components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <Home></Home>
        }></Route>
        <Route
          path='/login'
          element={
            <Login></Login>
          } >
        </Route>
        <Route path='/cars' element={
          <ProtectedRoute>
            <Explore></Explore>
          </ProtectedRoute>
        }></Route>
        <Route path='*' element={
          <div>
            <Home></Home>
            <NotFound></NotFound>
          </div>
        }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
