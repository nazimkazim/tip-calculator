import React from 'react';
import './App.scss';
import Container from './components/Container/Container';
import Half from './components/Half/Half';
import Input from './components/Input/Input';

function App() {
  return (
    <div className="app">
      <div className='app__header'>
        <img src='/images/logo.svg' alt='logo'/>
      </div>
      <Container>
        <Half background='white'><Input logoPath='images/icon-dollar.svg' label='Bill'/></Half>
        <Half background='dark-gray'>dfgfdg</Half>
      </Container>
    </div>
  );
}

export default App;
