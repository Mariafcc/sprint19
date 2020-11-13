import React from "react";
import './App.css';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Index from "./components/Index";


function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Index />
      </Wrapper>

    </div>
  );
}

export default App;
