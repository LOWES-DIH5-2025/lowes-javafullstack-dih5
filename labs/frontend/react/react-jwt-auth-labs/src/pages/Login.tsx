import React, { FormEvent } from "react";
import axios from "axios";
import { setAuthToken } from "../helpers/setAuthToken";

function Login() {
  const handleSubmit = (
    email: HTMLInputElement,
    password: HTMLInputElement
  ) => {
    //reqres registered sample user
    const loginPayload = {
      email: email.value,
      password: password.value,
      // email: 'eve.holt@reqres.in', //reqres registered sample user
      // password: 'cityslicka'
      // username: "adarsh",
      // password: "password123",
    };

    axios
      .post("https://reqres.in/api/login", loginPayload, {
        headers: {
          'x-api-key': 'reqres-free-v1'
        }
      })
      // axios.post("http://localhost:7070/auth/login", loginPayload)
      // axios
      //   .post("http://localhost:7077/auth/token", loginPayload)
      // axios
      //   .post("http://localhost:8111/api/auth/token", loginPayload)
      .then((response) => {
        //get token from response
        const token = response.data.token;
        console.log(token);

        //set JWT token to local
        localStorage.setItem("token", token);

        //set token to axios common header
        setAuthToken(token);

        //redirect user to home page
        window.location.href = "/";
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form
        className="border p-4 rounded shadow"
        onSubmit={(event: FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const form = event.currentTarget;
          const email = form.querySelector<HTMLInputElement>("#email");
          const password = form.querySelector<HTMLInputElement>("#password");
          if (email && password) {
            handleSubmit(email, password);
          }
        }}
      >
        <h2 className="text-center mb-4">Login</h2>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
}
export default Login;
