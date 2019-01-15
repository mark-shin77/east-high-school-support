import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
//login mechanics
const LoginForm = ({
    onSubmit,
    onChange,
    errors,
    successMessage,
    user,
    toggleAuthenticateStatus
})=>(
    <div className="container">
      <form action="/" onSubmit={onSubmit}>
        <h2 className="login">Login</h2>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errors.summary && <p className="error-message">{errors.summary}</p>}
        
        <div className="field-line">
          
        </div>
      </form>

      
    </div>
)