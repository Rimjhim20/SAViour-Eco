import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Signup = ({ history }) => {
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = signupData;

  const onChange = (e) =>
    setSignupData({ ...signupData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      name,
      email,
      password,
    };

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify(newUser);
      const res = await axios.post("/api/users", body, config);
      console.log(res.data);
      history.push("/chat");
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 m-auto">
          <div className="card card-body">
            <h1 className="text-center mb-3">
              <i className="fas fa-user-plus"></i> Signup
            </h1>
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <button type="submit" className="btn btn-Dangerous btn-block">
                <Link to = "/community">Signup</Link>
              </button>
            </form>
            <p className="lead mt-4">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
