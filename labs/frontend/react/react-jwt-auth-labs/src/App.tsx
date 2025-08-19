import "./App.css";

import AppRoutes from "./routes/routes";

import { setAuthToken } from "./helpers/setAuthToken";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  //check jwt token
  const token = localStorage.getItem("token");
  if (token) {
    setAuthToken(token);
  }

  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
