import "./App.css";
import Subcategory from "./admin/Subcategory";
import Navigator from "./component/NavBar";
import AdminNavbar from "./admin/AdminNavbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AdNav from "./admin/AdNav";

function App() {
  return (
    <div>
      {/* <Router>
        <Navigator />
      </Router> */}
      {/* <Router>
        <Routes>
        <Route path="/" element={<AdminNavbar/>}/>
        <Route path="/adminshop" element={<AdNav/>}/>
        </Routes>
      </Router> */}
     <Subcategory/>
    </div>
  );
}

export default App;
