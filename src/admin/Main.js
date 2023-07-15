import React from "react";
import { Route,Routes } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import Category from "./Category";
import Subcategory from "./Subcategory";



const Main = () => {
  return (<>
  <AdminNavbar/>
  <Category/>
   <Routes>
          <Route exact path="/" element={<Category/>}/>
          <Route exact path="/subcategory" element={<Subcategory/>}/>
          </Routes>
  </>
  
  )}
export default Main;
