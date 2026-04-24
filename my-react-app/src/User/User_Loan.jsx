import React, { useState } from 'react';
import { useNavigate} from "react-router-dom";
import "./User_Loan.css"

function User() {
   const navigate = useNavigate();
    const handleLogin = () => {
      // After successful login
      navigate("/dashboard");
    };
  
    const [loanData, setLoanData] = useState({
        employmentType: '',
        companyName: '',
        monthlyIncome: '',
        workExperience: '',
        loanType: '',
        loanAmount: '',
        loanTenure: '',
        loanPurpose: ''
    });

    const handleChange = (e) => {
        setLoanData({ ...loanData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if all fields are filled
        const staruiredFields = [
            'employmentType', 'companyName', 'monthlyIncome', 
            'workExperience', 'loanType', 'loanAmount', 
            'loanTenure', 'loanPurpose'
        ];

        const isFormValid = staruiredFields.every(field => loanData[field].trim() !== '');

        if (isFormValid) {
            console.log("Final Submission Data:", loanData);
            alert("Application Submitted Successfully!");
            // Redirect to dashboard after final submit
            navigate("/dashboard");
        } else {
            alert("Please fill in all Employment and Loan details before submitting.");
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
                        <div className="step completed"><span>2</span> ADDRESS</div>
                        <div className="line"></div>
                        <div className="step active"><span>3</span> EMPLOYMENT & LOAN DETAILS</div>
                    </div>
                </header>

                <div className="form-card light-shadow">
                    <div className="card-title">
                        <span className="dot"></span> BASIC DETAILS
                    </div>
                    
                    <form className="grid-form" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label>Employment Type<span className="star">*</span></label>
                            <select name="employmentType" onChange={handleChange}>
                                <option value="">Select Type</option>
                                <option value="salaried">Salaried</option>
                                <option value="self-employed">Self-Employed</option>
                            </select>
                        </div>
                        <div className="input-group">
                            <label>Company / Business Name<span className="star">*</span></label>
                            <input 
                                type="text" name="companyName" 
                                placeholder="Enter Company Name" onChange={handleChange} 
                            />
                        </div>
                        <div className="input-group">
                            <label>Monthly Income<span className="star">*</span></label>
                            <input type="text" name="monthlyIncome" onChange={handleChange} />
                        </div>
                        <div className="input-group">
                            <label>Work Experience<span className="star">*</span></label>
                            <input type="text" name="workExperience" onChange={handleChange} />
                        </div>
                        <div className="input-group">
                            <label>LOAN TYPE<span className="star">*</span></label>
                            <select name="loanType" onChange={handleChange}>
                                <option value="">Select Loan</option>
                                <option value="personal">Personal Loan</option>
                                <option value="home">Home Loan</option>
                            </select>
                        </div>
                        <div className="input-group">
                            <label>Loan Amount<span className="star">*</span></label>
                            <input type="text" name="loanAmount" onChange={handleChange} />
                        </div>
                        <div className="input-group">
                            <label>Loan Tenure<span className="star">*</span></label>
                            <input type="text" name="loanTenure" onChange={handleChange} />
                        </div>
                        <div className="input-group">
                            <label>Loan Purpose<span className="star">*</span></label>
                            <input type="text" name="loanPurpose" onChange={handleChange} />
                        </div>
                    </form>
                </div>

                <div className="submit-container">
                    <button type="submit" className="blue-submit-btn" onClick={handleSubmit}>
                        Sumbit
                    </button>
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