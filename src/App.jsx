import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer"
import Nav from './components/Nav';
import './App.css'
import React from 'react'

const App = () => {
  return (
    <>

    <Nav />
      <Outlet />
  <Footer />
  </>
  );
};

export default App;
