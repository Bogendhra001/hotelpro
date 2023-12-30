import React from 'react';
import {  Link,Route,Routes} from 'react-router-dom';
import  Login  from './components/login'; 
function App() {
  return (
    <>
    <h1>this is the home page
    </h1>
    <nav>
      <ul>
        <li><Link to='/login'>Login</Link></li>
      </ul>
    </nav>

    <Routes>
        <Route  path="/login" element={<Login/>} />
    </Routes></> 
  );
}

export default App;
