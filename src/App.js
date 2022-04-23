import React from 'react';
import Calculator from './Components/Calculator';

class App extends React.Component{
  render() { 
    return (
      <div className="App">
        <header className="App-header">
            <Calculator />
        </header>
      </div>
    );
  }
}

export default App;
