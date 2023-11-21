// src/LoginForm.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useAuth } from './AuthContext';

const customAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 15,
    },
  },
};

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const controls = useAnimation();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = () => {
    // Validate login details (add your authentication logic here)
    const isValid = validateDetails(formData);

    if (isValid) {
      login(); // Simulate login
      navigate('/main');
    } else {
      alert('Invalid details. Please try again.'); // Show an alert for demo purposes
    }
  };

  const validateDetails = ({ email, password }) => {
    // Implement your validation logic here
    // For demo purposes, consider it valid if the email and password are not empty
    return email.trim() !== '' && password.trim() !== '';
  };

  useEffect(() => {
    controls.start('visible');
  }, []); // Run this effect once when the component mounts

  return (
    <motion.div
      variants={customAnimation}
      initial="hidden"
      animate={controls}
      style={{
        textAlign: 'center',
        marginTop: '2rem',
        padding: '20px',
        borderRadius: '10px',
        backgroundImage: `url(${process.env.PUBLIC_URL}/your-image-source.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '70%', // Decreased width
        margin: 'auto', // Centered the form
      }}
    >
      <Typography variant="h4" gutterBottom>
        Login Page
      </Typography>
      <TextField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        style={{ marginBottom: '10px', width: '100%' }}
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
        style={{ marginBottom: '10px', width: '100%' }}
      />
      <Button variant="contained" color="primary" onClick={handleFormSubmit} style={{ width: '100%' }}>
        Login
      </Button>
      <Typography paragraph style={{ marginTop: '1rem' }}>
        Don't have an account? <Link to="/register">Register here</Link>
      </Typography>
    </motion.div>
  );
};

export default LoginForm;
