import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RouteGuard from "../components/RouteGuard";

//history
import { history } from "../helpers/history";

//pages
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/Login";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <RouteGuard>
              <HomePage />
            </RouteGuard>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
