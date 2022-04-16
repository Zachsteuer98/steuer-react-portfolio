import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio'
import './App.css'

function App() {

  const [categories] = useState([
    {name: 'About' },
    {name: 'Portfolio'},
    {name: 'Contact'},
    {name: 'resume'}
  ])

  const [currentCategory, setCurrentCategory ] = useState(categories[0])

  return (
    <div>
      <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      />
      <main>
        <Portfolio currentCategory={currentCategory}/>
        <About currentCategory={currentCategory}/>
      </main>
    </div>
  );
}

export default App;
