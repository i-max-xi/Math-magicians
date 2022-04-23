import React from 'react';
import Calculator from './Components/Calculator';

class App extends React.Component{
  render() { 
    return (
      <div className="App">
        <div className='wholePage'>
          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;
