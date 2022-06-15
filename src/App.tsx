import React, { useState } from 'react';
import './App.scss';
import Container from './components/Container/Container';
import Half from './components/Half/Half';
import Input from './components/Input/Input';
import PercentSelector from './components/PercentSelector/PercentSelector'

function App() {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);

  console.log({ bill });
  console.log({ people });

  return (
    <div className="app">
      <div className='app__header'>
        <img src='/images/logo.svg' alt='logo' />
      </div>
      <Container>
        <Half background='white'>
          <Input setValue={setBill} logoPath='images/icon-dollar.svg' label='Bill' />
          <div className='app__percent-selector-wrapper'>
            <PercentSelector />
          </div>
          <Input setValue={setPeople} logoPath='images/icon-person.svg' label='Number of people' />
        </Half>
        <Half background='dark-gray'>dfgfdg</Half>
      </Container>
    </div>
  );
}

export default App;
