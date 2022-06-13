import React from 'react';
import './App.scss';
import Container from './components/Container/Container';
import Half from './components/Half/Half';
import Input from './components/Input/Input';
import Typography from './components/Typography/Typography';

function App() {
  return (
    <div className="app">
      <div className='app__header'>
        <Typography spacing color='gray' tag='big' bolded>SPLI</Typography>
        <Typography spacing color='gray' tag='big' bolded>TTER</Typography>
      </div>
      <Container>
        <Half background='white'><Input/></Half>
        <Half background='dark-gray'>dfgfdg</Half>
      </Container>
    </div>
  );
}

export default App;
