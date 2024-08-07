import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import backg from '../img/Ac/log.jpg';
import { useAuth } from './AuthContext'; // Import useAuth

const AuthContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  background: `url(${backg}) no-repeat center center fixed`,
  backgroundSize: 'cover',
}));

const FormPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  width: '100%',
  maxWidth: 400,
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
}));

const ToggleButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const API_URL = 'http://localhost:8080/posts';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { login } = useAuth(); // Use login from AuthContext
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const { email, password } = formData;
    try {
      const response = await axios.get(`${API_URL}?email=${email}&password=${password}`);
      if (response.data.length > 0) {
        login(response.data[0]); // Pass user data to the login function
        navigate('/');
        toast.success('Login successful.');
      } else {
        toast.error('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      toast.error('Error during login. Please try again later.');
    }
  };

  return (
    <AuthContainer>
      <Toaster />
      <FormPaper elevation={3}>
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <Box component="form" sx={{ mt: 2 }} onSubmit={handleLogin}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <ToggleButton onClick={() => navigate('/forgot-password')} fullWidth variant="text">
            Forgot Password?
          </ToggleButton>
          <ToggleButton onClick={() => navigate('/register')} fullWidth variant="text">
            Don't have an account? Register
          </ToggleButton>
        </Box>
      </FormPaper>
    </AuthContainer>
  );
};

export default Login;
