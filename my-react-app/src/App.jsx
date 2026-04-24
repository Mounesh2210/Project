import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./Admin/AdminDashboard";
import Dashboard from "./User/Dashboard";
import User from "./User/User"
import User_Address from "./User/User_Address"
import User_Loan from "./User/User_Loan"


function App() {
  return (
    <Routes>
      {/* Default Route */}
      <Route path="/" element={<Login />} />

      {/* Admin Routes */}
      <Route path="/admindashboard" element={<AdminDashboard />} />


      {/* user Routes */}
      <Route path="/user" element={<User />} />
      <Route path="/user_address" element={<User_Address />} />
      <Route path="/user_loan" element={<User_Loan />} />
      <Route path="/dashboard" element={<Dashboard />} />

    </Routes>
  );
}

export default App;