import React, { useState } from 'react';
import Productmodal from './Pages/Productmodal';
import Frontpage from './Pages/Frontpage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createContext } from 'react';
export const mycontext = createContext(null);
const App = () => {
  const [category,setCategory] = useState("")
  const [searchdata, setsearchData] = useState([]);
  return (
    <div>
      <mycontext.Provider value={{category,setCategory,searchdata, setsearchData}}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/product/:id" element={<Productmodal />} />
      </Routes>
      </BrowserRouter>
      </mycontext.Provider>
    </div>
  );
};
export default App;