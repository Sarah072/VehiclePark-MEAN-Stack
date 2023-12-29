import React from 'react';
import Register from './register';
import Login from './AdminLogin'; // Import the Login component
import Home from './Home';
import ManageVehicle from './manageVehicle';
import Contact from './contact';
import SearchResults from './SearchResults';
import VehicleList from './VehicleList';
import VehicleSearch from './VehicleSearch';
import Reports from './reports';
import ManageUser from './ManageUser';
import UserLogin from './UserLogin';
import UserHome from './UserHome';
import UserSearchVehicle from './UserVehicleSearch';
import UserManageBrandForm from './UserManageVehicle';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/manage" element={<ManageVehicle />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/searchResults" element={<SearchResults />} />
          <Route path="/vehicleList" element={<VehicleList />} />
          <Route path="/vehicleSearch" element={<VehicleSearch />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/manageUser" element={<ManageUser />} />
          
          <Route path="/userLogin" element={<UserLogin />} />
          <Route path="/UserHome" element={<UserHome />} />
          <Route path="/UserSearchVehicle" element={<UserSearchVehicle />} />
          <Route path="/UserManageBrandForm" element={<UserManageBrandForm />} />
        


        </Routes>
      </Router>
    </div>
  );
}

export default App;



