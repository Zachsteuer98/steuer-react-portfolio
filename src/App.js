import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio'
import './App.css'
function App() {
  return (
    <div>
      <Nav/>
      <main>
        <Portfolio/>
        <About></About>
      </main>
    </div>
  );
}

export default App;
