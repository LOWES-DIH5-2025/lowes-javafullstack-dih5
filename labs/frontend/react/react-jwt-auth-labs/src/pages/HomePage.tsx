import axios from "axios";
import { useEffect, useState } from "react";

function HomePage() {
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=1")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("It's done");
      });
  }, []);

  const clearAuthToken = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h2>LOGIN SUCCESS!!!</h2>
      <button className="btn btn-danger mt-3" onClick={clearAuthToken}>
        Logout
      </button>
    </div>
  );
}

export default HomePage;
