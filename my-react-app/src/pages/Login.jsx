import React, { useState } from 'react';
import { useNavigate} from "react-router-dom";
import axios from 'axios';
import "./Login.css"

function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    // After successful login
    navigate("/dashboard");
  };

  const [formData, setFormData] = useState({
        identifier: '',
        password: '',
        role: 'Customer' // Default selection
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // New function to handle the role selection buttons
    const handleRoleChange = (selectedRole) => {
        setFormData({ ...formData, role: selectedRole });
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://127.0.0.1:5000/login', formData);
        
        if (response.data.success) {
            // Check the role to decide where to send them
            if (formData.role === 'Admin') {
                window.location.href = '/admindashboard';
            } else {
                window.location.href = '/dashboard';
            }
        } else {
            alert("Login failed: Invalid credentials");
            window.location.reload(); // Refresh the page on failure
        }
    } catch (error) {
        console.error("Error during login", error);
        alert("An error occurred. Please try again.");
    }
};

    const activeStyle = { backgroundColor: '#007bff', color: 'white' };
    const inactiveStyle = { backgroundColor: '#f0f0f0', color: 'black' };

  

  return (
    <div className="Login_background">
      <div className="login_gif">
        <img src="./public/gif.png" alt="Loding" className="login_img"/>
        <button onClick={handleLogin}>Login</button>
      </div>

      <div className="login_form">
        <div style={{ maxWidth: '300px', margin: '50px auto' }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>Role:</label><br />
                <div style={{ marginBottom: '20px' }}>
                    <button type="button" onClick={() => handleRoleChange('Customer')} style={formData.role === 'Customer' ? activeStyle : inactiveStyle}>
                        Customer
                    </button>&npsb
                    <button type="button" onClick={() => handleRoleChange('Admin')} style={formData.role === 'Admin' ? activeStyle : inactiveStyle}>
                        Admin
                    </button>
                </div>
                <label>Email or Mobile:</label><br />
                <input type="text" name="identifier" placeholder="name@value.com" onChange={handleChange} required/><br/><br/>
                
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required /><br/><br/>


                <button type="submit">Submit</button>
            </form>
        </div>
      </div>
    </div>
  );
}

export default Login;