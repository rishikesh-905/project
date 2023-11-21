// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import MainContent from './MainContent';
import { AuthProvider } from './AuthContext';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

const contentStyle = {
  flex: 1,
};

const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div style={containerStyle}>
          <Routes>
            <Route
              path="/"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="hidden"
                  animate="visible"
                  style={{
                    maxWidth: '800px',
                    margin: 'auto',
                    padding: '1rem',
                    ...contentStyle,
                  }}
                >
                  <LoginForm />
                </motion.div>
              }
            />
            <Route
              path="/register"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="hidden"
                  animate="visible"
                  style={{
                    maxWidth: '800px',
                    margin: 'auto',
                    padding: '1rem',
                    ...contentStyle,
                  }}
                >
                  <RegisterForm />
                </motion.div>
              }
            />
            <Route
              path="/main"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="hidden"
                  animate="visible"
                  style={{
                    maxWidth: '800px',
                    margin: 'auto',
                    padding: '1rem',
                    ...contentStyle,
                  }}
                >
                  <Navbar />
                  <MainContent />
                  <Footer />
                </motion.div>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
