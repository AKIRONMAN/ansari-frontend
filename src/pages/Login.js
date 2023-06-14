import * as React from 'react'
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css'
const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  console.log(watch("example")) // watch input value by passing the name of it
    
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
            {...register("email", { required: true })}
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
        <div className="mb-2">
          Don't have account? <a href="/registration"> Register.</a>
        </div>
      </form>
      </div>
      </div>

  )
}

export default Login