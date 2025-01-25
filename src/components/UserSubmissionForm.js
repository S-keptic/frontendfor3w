import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserSubmissionForm = () => {
  const [name, setName] = useState("");
  const [socialHandle, setSocialHandle] = useState("");
  const [images, setImages] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("socialHandle", socialHandle);
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }

    try {
      await axios.post(`https://backendfor3w.onrender.com/api/users/submit`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Submission Successful!");
      navigate("/admin");
    } catch (error) {
      console.error("Error submitting data", error);
      alert("Error submitting the data!");
    }
  };

  return (
    <div className="form-container">
      <h2>Submit Your Data</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Social Handle</label>
          <input type="text" value={socialHandle} onChange={(e) => setSocialHandle(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Upload Images</label>
          <input type="file" multiple onChange={(e) => setImages(e.target.files)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserSubmissionForm;
