import React from 'react';
import './App.css';
import ListaDeTareas from './components/ListaDeTareas';
import Logo from './components/LogoHover';

function App() {
  return (
    <div className="App">
      <Logo />
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas/>
      </div>
    </div>
  );
}

export default App;
