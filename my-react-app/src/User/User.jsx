import React, { useState } from 'react';
import { useNavigate} from "react-router-dom";
import "./User.css"

function User() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '', surname: '', fatherName: '', relationSurname: '',
        occupation: '', gender: '', dob: '', monthlyIncome: '',
        email: '', phoneNumber: '', altMobile: '', panNumber: '', aadhaar: ''
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleLogin = (e) => {
    e.preventDefault();

    // Define only the fields that MUST be filled
    const mandatoryFields = [
        'firstName', 'surname', 'fatherName', 'relationSurname',
        'occupation', 'gender', 'dob', 'monthlyIncome',
        'email', 'phoneNumber', 'panNumber', 'aadhaar'
    ];

    // Check if any mandatory field is empty
    const missingFields = mandatoryFields.filter(field => !formData[field] || formData[field].trim() === '');

    if (missingFields.length === 0) {
        navigate("/user_address");
    } else {
        alert("Please fill in all fields marked with *");
    }
};

    

  return (
    <div className='user'>
        <div className='user_form'>
            <div className="form-section">
                <header className="form-header">
                    <h1 className="logo">🏛️ The Vault</h1>
                    <div className="stepper">
                        <div className="step active"><span>1</span> PERSONAL</div>
                        <div className="line"></div>
                        <div className="step"><span>2</span> ADDRESS</div>
                        <div className="line"></div>
                        <div className="step"><span>3</span> EMPLOYMENT & LOAN</div>
                    </div>
                </header>

                <div className="form-card">
                    <div className="card-title">
                        <span className="dot"></span> BASIC DETAILS
                    </div>
                    
                    <form className="grid-form">
                        <div className="input-group">
                            <label>First Name<span className="req-star">*</span></label>
                            <input type="text" name="firstName" placeholder="Enter first name" onChange={handleChange} />
                        </div>
                        <div className="input-group">
                            <label>Surname<span className="req-star">*</span></label>
                            <input type="text" name="surname" placeholder="Enter surname" onChange={handleChange} />
                        </div>
                        <div className="input-group">
                            <label>Father / Husband Name<span className="req-star">*</span></label>
                            <input type="text" name="fatherName" placeholder="Name" onChange={handleChange} />
                        </div>
                        <div className="input-group">
                            <label>Surname (Relation)<span className="req-star">*</span></label>
                            <input type="text" name="relationSurname" placeholder="Relation surname" onChange={handleChange} />
                        </div>
                        <div className="input-group">
                            <label>Occupation<span className="req-star">*</span></label>
                            <input type="text" name="occupation" placeholder="e.g. Professional" onChange={handleChange} />
                        </div>
                        <div className="input-group">
                            <label>Gender<span className="req-star">*</span></label>
                            <select name="gender" onChange={handleChange}>
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="input-group">
                            <label>Date Of Birth<span className="req-star">*</span></label>
                            <input type="date" name="dob" onChange={handleChange} />
                        </div>
                        <div className="input-group">
                            <label>Monthly Income<span className="req-star">*</span></label>
                            <input type="text" name="monthlyIncome" placeholder="e.g. ₹ 50,000" onChange={handleChange} />
                        </div>
                        <div className="input-group">
                            <label>Email Address<span className="req-star">*</span></label>
                            <input type="email" name="email" placeholder="email@auraledger.com" onChange={handleChange} />
                        </div>
                        <div className="input-group">
                            <label>Phone Number<span className="req-star">*</span></label>
                            <div className="phone-input">
                                <span className="prefix">+91</span>
                                <input type="text" name="phoneNumber" placeholder="10 digit number" onChange={handleChange} />
                            </div>
                        </div>
                        <div className="input-group">
                            <label>Alternate Mobile Number</label>
                            <div className="phone-input">
                                <span className="prefix">+91</span>
                                <input type="text" name="altMobile" placeholder="Optional" onChange={handleChange} />
                            </div>
                        </div>
                        <div className="input-group">
                            <label>Pan Number<span className="req-star">*</span></label>
                            <input type="text" name="panNumber" placeholder="Enter PAN" onChange={handleChange} required/>
                        </div>
                        <div className="input-group">
                            <label>Aadhaar Number<span className="req-star">*</span></label>
                            <input type="email" name="aadhaar" onChange={handleChange} />
                        </div>
                    </form>
                </div>
                <button onClick={handleLogin} className='user_btn'>Next <span>→</span></button>
            </div>
        </div>
        <div className='user_image'>
            <img src="./public/User_page.png" alt="Loaging" className='user_img' />
        </div>
    </div>
  )
}

export default User

