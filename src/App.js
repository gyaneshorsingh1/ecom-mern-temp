import React from 'react';
import './App.css';
import Header from "./components/layout/Header/Header.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/layout/Footer/Footer.js';
import Home from './components/Home/Home.js';
import Loader from './components/layout/Loader/Loader.js';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Wrap Route in Routes and use 'element' instead of 'component' */}
        <Route exact path="/" element={<Home />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
