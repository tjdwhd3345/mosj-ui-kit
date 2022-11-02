import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';

function App() {
  const [arr, setArr] = useState([]);
  const [items, setItems] = useState([
    { name: 'mo', age: 31 },
    { name: 'lee', age: 28 },
    { name: 'lee', age: 28 },
    { name: 'lee', age: 28 },
    { name: 'lee', age: 28 },
    { name: 'lee', age: 28 },
  ]);
  console.log('App.tsx', { arr });
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
      <main>
        <List items={items} />
      </main>
    </div>
  );
}

export default App;
