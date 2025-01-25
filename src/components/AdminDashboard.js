import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const token = localStorage.getItem("adminToken"); // Assuming you're storing the token in localStorage
        const response = await axios.get("https://backendfor3w.onrender.com/api/users/submissions", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("Submissions fetched: ", response.data.submissions);
        setSubmissions(response.data.submissions);
      } catch (error) {
        console.error("Error fetching submissions", error);
      }
    };
    fetchSubmissions();
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Admin Dashboard</h2>
      <div>
        {submissions.length === 0 ? (
          <p>No submissions found.</p>
        ) : (
          submissions.map((submission, index) => (
            <div key={index} className="submission">
              <h3>{submission.name}</h3>
              <p>{submission.socialHandle}</p>
              <div className="images">
                {submission.images.map((image, i) => (
                  <img
                    key={i}
                    src={`https://backendfor3w.onrender.com/${image}`} 
                    alt={`uploaded ${i}`}
                    width="100"
                  />
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
