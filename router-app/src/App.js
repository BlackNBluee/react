import React from 'react';
import { Routes,Route, NavLink } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Support from './components/Support';
import About from './components/About';
import Labs from './components/Labs';
import HomeHandler from './components/HomeHandler'
import Nothing from './components/Nothing';

function App() {
  return (
    <div className='App'>

      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/support"}>Support</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/labs"}>Labs</NavLink>
          </li>
        </ul>
      </nav>



      <Routes>
        <Route path="/" element={<Home/>}>
          //CHILD ROUTES
          <Route index element={<HomeHandler/>}/>       //DEFAULT CHILD ROUTE
          <Route path="/support" element={<Support/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/labs" element={<Labs/>}/>
          <Route path='*' element={<Nothing/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
