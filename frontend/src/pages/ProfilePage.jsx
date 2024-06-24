import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import Header from '../components/headerComponents/Header';
import defaultPicture from '../assets/images/default_profile.webp'
import { FiUpload } from "react-icons/fi";


const ProfilePage = () => {
  const { user } = useAuth();
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(defaultPicture);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    // Create a preview URL for the selected image
    const previewUrl = URL.createObjectURL(selectedFile);
    setPreview(previewUrl);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post(
        `http://localhost:5000/api/user/upload/profile_picture?username=${user.username}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header/>
      <div className="edit">
        <div className="profile-edit-part">
          <h2>Your Profile</h2>
          <div className="form-wrapper">
            <h3>Personal Information</h3>
            <form className='profile-edit' onSubmit={handleSubmit}>
            <div className="photo-upload w100">
                <label>Photo</label>
                <div className="photo-container">
                  <div className="img-container">
                    <img src={preview} alt="profile preview" className="profile-picture" />
                  </div>
                  <label htmlFor="image"><FiUpload className='icon' /> Upload Photo</label>
                  <input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="file-input"
                  />
                </div>
              </div>

              <div className="w50">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" defaultValue="" />
              </div>

              <div className="w50">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" defaultValue="" />
              </div>

              <div className="w50">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" defaultValue="" />
              </div>

              <div className="w50">
                <label htmlFor="Location">Location</label>
                <select name="location" id="location">
                  <option value="Azerbaijan">Azerbaijan</option>
                  <option value="Russia">Russia</option>
                </select>
              </div>

              <div className="w100">
                <label htmlFor="job">Job title</label>
                <input type="text" id='job' name='job'/>
              </div>

              <div className="w50">
                <label htmlFor="linkedIn">LinkedIn</label>
                <input type="text" id='linkedIn' name='linkedIn' placeholder='https://www.linkedin.com/...'/>
              </div>

              <div className="w50">
                <label htmlFor="x">Twitter</label>
                <input type="text" id='x' name='x' placeholder='https://x.com/...' />
              </div>

              <button type="submit">Save Changes</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
