import React, { useState } from 'react';
import './App.scss';
import Container from './components/Container/Container';
import Half from './components/Half/Half';
import InfoDisplayer from './components/InfoDisplayer/InfoDisplayer';
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
        <Half background='dark-gray'>
          <div className='app__right-half-container'>
            <div className='app__info-displayer-container'>
              <div className='app__info-dispalyer-wrapper'>
                <InfoDisplayer label='Tip Amount' sum={0.00} />
              </div>
              <div className='app__info-dispalyer-wrapper'>
                <InfoDisplayer label='Total' sum={0.00} />
              </div>
            </div>
            <button className='app__reset-button'>RESET</button>
          </div>
        </Half>
      </Container>
    </div>
  );
}

export default App;
