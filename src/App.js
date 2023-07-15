import "./App.css";
import {BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import Authentication from "./navbar/Authentication";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Authentication />
    </BrowserRouter >
</div>
  );
}

export default App;
