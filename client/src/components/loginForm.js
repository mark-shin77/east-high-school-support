import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import TextField from 'material-ui/TextField'
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
          <TextField
            floatingLabelText="username"
            name="username"
            errorText={errors.username}
            onChange={onChange}
            value = {user.username}
            />

        </div>

        <div className="field-line">
          <TextField
            floatingLabelText="Password"
            type="password"
            name="password"
            errorText={errors.password}
            value = {user.password}
            />

        </div>
        <div className="buton-line">
          <button type="submit" label="Log in" primary/>
        </div>
      </form>


    </div>
)
//Prop types schema for the form login 
LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.objecdt.isRequired,
    successMessage: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired
}

export default LoginForm;