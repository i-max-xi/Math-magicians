import Calculator from './Components/Calculator';

class App extends Calculator{
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
