import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserSubmissionForm from "./components/UserSubmissionForm";
import AdminDashboard from "./components/AdminDashboard";
import AdminLogin from "./components/AdminLogin";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserSubmissionForm />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
