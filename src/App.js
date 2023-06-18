import "./App.css";
import Category from "./admin/Category";
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
     <Category/>
    </div>
  );
}

export default App;
