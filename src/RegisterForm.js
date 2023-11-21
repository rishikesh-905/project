// src/RegisterForm.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const formVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const fieldVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const images = [image1, image2, image3];
let currentImageIndex = 0;

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [shouldContinueLoop, setShouldContinueLoop] = useState(true);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    setShouldContinueLoop(false);
    navigate('/main');
  };

  useEffect(() => {
    const changeBackgroundImage = () => {
      document.body.style.backgroundImage = `url(${images[currentImageIndex]})`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.height = '100vh';
      currentImageIndex = (currentImageIndex + 1) % images.length;
    };

    const intervalId = setInterval(changeBackgroundImage, 5000);

    return () => {
      clearInterval(intervalId);
      document.body.style.backgroundImage = 'none';
    };
  }, []);

  return (
    <motion.form
      variants={formVariants}
      initial="hidden"
      animate="visible"
      onSubmit={handleSubmit}
      style={{
        textAlign: 'center',
        marginTop: '2rem',
        padding: '20px',
        borderRadius: '10px',
        backgroundColor: '#E8EAF6', // Change background color
      }}
    >
      <motion.h2 variants={fieldVariants} style={{ color: '#512DA8' }}> {/* Change text color */}
        Register
      </motion.h2>

      <motion.div variants={fieldVariants}>
        <TextField
          label="Username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
          style={{ width: '100%', marginBottom: 10 }}
        />
      </motion.div>

      <motion.div variants={fieldVariants}>
        <TextField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ width: '100%', marginBottom: 10 }}
        />
      </motion.div>

      <motion.div variants={fieldVariants}>
        <TextField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          style={{ width: '100%', marginBottom: 20 }}
        />
      </motion.div>

      <motion.div variants={buttonVariants}>
        <Button
          type="submit"
          variant="contained"
          style={{
            backgroundColor: '#303F9F', // Change button color
            color: '#fff',
            padding: 10,
            borderRadius: 4,
            cursor: 'pointer',
          }}
        >
          Register
        </Button>
      </motion.div>
    </motion.form>
  );
};

export default RegisterForm;
