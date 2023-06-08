import "./App.css";
import Navigator from "./component/NavBar";
import USERHOME from "./component/UserHome";
import LOGIN from "./component/Login";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navigator />
      </Router>
    </div>
  );
}

export default App;
