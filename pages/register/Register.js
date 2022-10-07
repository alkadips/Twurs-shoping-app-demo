import React from "react";
import useForm from "./useForm";
import validate from "./LoginFormValidationRules";
const Register = props => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    register,
    validate
  );
  function register() {
    alert("Register successfully")
  }
  return (
    <div className="section is-fullheight">
      <div className="container">
        <div className="column is-6 is-offset-3">
          <div className="box">
            <h1>Register</h1>
            <form onSubmit={handleSubmit} noValidate>
              <div className="field">
                <div style={{marginTop:"10px"}} className="control">
                <label className="label">Email Address</label>

                  <input
                    autoComplete="off"
                    className={`input ${errors.email && "is-danger"}`}
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email || ""}
                    required
                  />
                  {errors.email && (
                    <p className="help is-danger">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="field">
                <div style={{marginTop:"10px"}} className="control">
                <label className="label">Password</label>
                  <input
                    className={`input ${errors.password && "is-danger"}`}
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password || ""}
                    required
                  />
                </div>
                {errors.password && (
                  <p className="help is-danger">{errors.password}</p>
                )}
              </div>
              <button
                type="submit"
                className="register-button"
              >
                Register
              </button>
              <div>
              <a style={{cursor:"pointer"}} to={''}>Login Your Account</a>
                <a style={{marginLeft:"10px",cursor:"pointer"}} to={'#'}>Forgot Password?</a>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
