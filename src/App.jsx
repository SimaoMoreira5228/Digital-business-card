import React from 'react';
import './App.css';
import Photo from './components/Photo.jsx';
import Info from './components/Info.jsx';
import About from './components/About.jsx';
import Interests from './components/Interests.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Photo />
      <div className="Main">
        <Info />
        <About />
        <Interests />
      </div>
      <Footer />
    </div>
  );
}

export default App;
