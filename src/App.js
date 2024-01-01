import React from 'react';
import { Route,Routes} from 'react-router-dom';
import  Login  from './components/login'; 
import Initial from './components/initialscreen';
import Home from './components/home';


function App() {
  return (
    <>
    <Routes>
        <Route  path="/login" element={<Login/>} />
        <Route path="/" element={<Initial/>}/>
        <Route path='/Home' element={<Home/>}/>
    </Routes></> 
  );
}

export default App;
