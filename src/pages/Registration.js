import * as React from 'react'
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css'
import AuthService from '../services/AuthService';
const Registration = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    // e.preventDefault();

    //addUserHandler(newUser);

    // const myData = {
    //   data: {
    //     type: "token",
    //     attributes: { ...newUser },
    //   },
    // };

    try {
      const response = await AuthService.login(data);
      console.log(response);
      //authContext.login(response.access_token, response.refresh_token);
    } catch (res) {
      if (res.hasOwnProperty("message")) {
        console.log(res);
        // setCredentialsError(res.message);
      } else {
        console.log(res);
        // setCredentialsError(res.errors[0].detail);
      }
    }

    // return () => {
    //   setInputs({
    //     email: "",
    //     password: "",
    //   });

    //   setErrors({
    //     emailError: false,
    //     passwordError: false,
    //   });
    // };
  };

      return (
        <div className="auth-wrapper">
        <div className="auth-inner">
        <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Log In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            {...register("email", { required: true, pattern:  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })}
          />
          {errors.email && <span class="error-message-input">This field is required</span>}
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            {...register("password", { required: true })}
          />
          {errors.password &&<span class="error-message-input">This field is required</span>}
        </div>
        {/* <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div> */}
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
      </div>
      </div>

  )
}

export default Registration;