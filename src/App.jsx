import React from 'react'
import Navbar from './layout/Navbar'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './Pages/Home';
import { Route, BrowserRouter as Router,Routes } from 'react-router-dom';
import AddUser from './Users/AddUser';
import EditUser from './Users/EditUser';
function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/"element={<Home/>}></Route>
        <Route exact path="/adduser"element={<AddUser/>}></Route>
        <Route exact path="/edituser/:id"element={<EditUser/>}></Route>
      </Routes>
      
      </Router>
      
    </div>
  )
}

export default App