import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import Nav from '../shared/Nav/Nav';

export const OptionContext = createContext()
const Main = () => {
  const [options, setOptions] = useState("Ethereum Kovan");
  const value = {
    options,
    setOptions
  }
  return (
    <OptionContext.Provider value={value}>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </OptionContext.Provider>
  );
};

export default Main;