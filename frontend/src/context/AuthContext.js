import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    user_type: 'mentee', 
  });

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [error, setError] = useState(null);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    try {
      const url = `http://localhost:5000/api/auth/login`;
      const response = await axios.post(url, { username: formData.username, password: formData.password });
      if (response.status === 200) {
        setUser(response.data.user);
        navigate('/');
      }
    } catch (error) {
      setError(error.response ? error.response.data.message : 'Login failed');
    }
  };

  const register = async () => {
    try {
      const url = `http://localhost:5000/api/auth/register?user_type=mentee`;
      const response = await axios.post(url, formData);
      if (response.status === 200) {
        if (response.data.error) {
          setError(response.data.error);
        } else {
          setUser(response.data.user);
          navigate('/');
        }
      }
    } catch (error) {
      setError(error.response ? error.response.data.message : 'Registration failed');
    }
  };

  const logout = () => {
    setUser(null);
    navigate('/');
  };

  const [mentorFormData, setMentorFormData] = useState({
    username: '',
    password: '',
    email: '',
    description: '',
    user_type: 'mentor',
  });

  const handleChangeMentor = (e) => {
    setMentorFormData({ ...mentorFormData, [e.target.name]: e.target.value });
  };

  const registerMentor = async (mentorFormData, queryParameters) => {
    try {
      const url = `http://localhost:5000/api/auth/register?user_type=mentor&${queryParameters}`;
      const response = await axios.post(url, mentorFormData);
      if (response.status === 200) {
        if (response.data.error) {
          setError(response.data.error);
        } else {
          setUser(response.data.user);
          navigate('/');
        }
      }
    } catch (error) {
      setError(error.response ? error.response.data.message : 'Registration failed');
    }
  };

  return (
    <AuthContext.Provider value={{ 
      formData, 
      handleChange, 
      login, 
      register, 
      mentorFormData, 
      handleChangeMentor, 
      registerMentor, 
      user, 
      logout, 
      error 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
