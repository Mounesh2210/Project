import React, { useState } from 'react';
import { useNavigate} from "react-router-dom";
import "./User_Address.css"

function User() {
   const navigate = useNavigate();

    const [addressData, setAddressData] = useState({
        addressLine1: '',
        addressLine2: '',
        country: '',
        city: '',
        state: '',
        pincode: ''
    });

    const handleChange = (e) => {
        setAddressData({ ...addressData, [e.target.name]: e.target.value });
    };

    const handleLogin = (e) => {
        e.preventDefault(); // Prevents the form from submitting/reloading

        // List of all keys in addressData that must be filled
        const requiredFields = ['addressLine1', 'addressLine2', 'country', 'city', 'state', 'pincode'];

        // Validation logic: check if every required field has a value
        const allFilled = requiredFields.every(field => addressData[field].trim() !== '');

        if (allFilled) {
            // After successful validation
            navigate("/user_loan");
        } else {
            // Show alert if any field is missing
            alert("Please fill in all the required address details.");
        }
    };

  return (
    <div className='user'>
        <div className='user_form'>
          <div className="form-section">
                <header className="form-header">
                    <h1 className="logo">🏛️ The Vault</h1>
                    <div className="stepper">
                        <div className="step completed"><span>1</span> PERSONAL</div>
                        <div className="line"></div>
                        <div className="step active"><span>2</span> ADDRESS</div>
                        <div className="line"></div>
                        <div className="step"><span>3</span> EMPLOYMENT & LOAN</div>
                    </div>
                </header>

                <div className="form-card no-border">
                    <div className="card-title">
                        <span className="dot"></span> BASIC DETAILS
                    </div>
                    
                    <form className="address-form">
                        <div className="full-width">
                            <label>Address Line 1<span className="req">*</span></label><br />
                            <textarea 
                                name="addressLine1" 
                                placeholder="Enter the address" 
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div className="full-width">
                            <label>Address Line 2<span className="req">*</span></label><br />
                            <textarea 
                                name="addressLine2" 
                                placeholder="Enter the address" 
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div className="grid-row">
                            <div className="input-group">
                                <label>Country<span className="req">*</span></label>
                                <select name="country" onChange={handleChange}>
                                    <option value="">Select Country</option>
                                    <option value="india">India</option>
                                    <option value="usa">USA</option>
                                </select>
                            </div>
                            <div className="input-group">
                                <label>City<span className="req">*</span></label>
                                <select name="city" onChange={handleChange}>
                                    <option value="">Select City</option>
                                    <option value="coimbatore">Coimbatore</option>
                                    <option value="bangalore">Bangalore</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid-row">
                            <div className="input-group">
                                <label>State<span className="req">*</span></label>
                                <select name="state" onChange={handleChange}>
                                    <option value="">Select State</option>
                                    <option value="tamilnadu">Tamil Nadu</option>
                                    <option value="karnataka">Karnataka</option>
                                </select>
                            </div>
                            <div className="input-group">
                                <label>Pincode<span className="req">*</span></label>
                                <input 
                                    type="text" 
                                    name="pincode" 
                                    placeholder="Enter pincode" 
                                    onChange={handleChange} 
                                />
                            </div>
                        </div>

                        <button onClick={handleLogin} className='user_btn'>Next <span>→</span></button>
                    </form>
                </div>
            </div>
        </div>
        <div className='user_image'>
            <img src="./public/User_page.png" alt="Loaging" className='user_img' />
        </div>
    </div>
  )
}

export default User