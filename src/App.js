import React from "react";
import Calculator from "./Components/Calculator";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Quote from "./pages/Quote";
import ErrorPage from "./pages/ErrorPage";
import NavBar from "./Components/NavBar";
import CalcPage from "./pages/CalcPage";

class App extends React.Component {
  render() {
    return (
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/calc" element = {<CalcPage/>} />
          <Route path="/quote" element = {<Quote />} />
          <Route path="*" element = {<ErrorPage />}/>
        </Routes>
      </Router>

      // <div className="App">
      //   <div className='wholePage'>
      //     <Calculator />
      //   </div>
      // </div>
    );
  }
}

export default App;
