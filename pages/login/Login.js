import React from "react";
import useForm from "./useForm";
import validate from "./LoginFormValidationRules";
const Login = props => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  );
  function login() {
    alert("login successfully")
  }
  return (
    <div className="section is-fullheight">
      <div className="container">
        <div className="column is-6 is-offset-3">
          <div className="box">
            <h1 >Please Login Here</h1>
            <form onSubmit={handleSubmit} noValidate>
              <div className="field">
                <div style={{marginTop:'10px'}} className="control">
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
                <div style={{marginTop:'10px'}} className="control">
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
                className="login-button"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
