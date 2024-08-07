import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Paper, Container } from '@mui/material';
import { styled } from '@mui/system';

const AuthContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
}));

const FormPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  width: '100%',
  maxWidth: 400,
}));

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSendOtp = (event) => {
    event.preventDefault();
    // Add logic to send OTP to the email address
    setOtpSent(true);
  };

  const handleVerifyOtp = (event) => {
    event.preventDefault();
    // Add logic to verify the OTP
    if (otp === '123456') { // Mock OTP verification for demo
      setOtpVerified(true);
    } else {
      alert('Invalid OTP');
    }
  };

  const handleResetPassword = (event) => {
    event.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    // Add logic to reset the password, e.g., send the new password to the server
    alert(`Password for ${email} has been reset successfully!`);
  };

  return (
    <AuthContainer>
      <FormPaper elevation={3}>
        {!otpVerified ? (
          <>
            <Typography variant="h4" component="h1" gutterBottom>
              Forgot Password
            </Typography>
            <Box component="form" sx={{ mt: 2 }}>
              {!otpSent ? (
                <>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleSendOtp}
                  >
                    Send OTP
                  </Button>
                </>
              ) : (
                <>
                  <Typography variant="h6" gutterBottom>
                    Enter the OTP sent to your email
                  </Typography>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="otp"
                    label="OTP"
                    name="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleVerifyOtp}
                  >
                    Verify OTP
                  </Button>
                </>
              )}
            </Box>
          </>
        ) : (
          <>
            <Typography variant="h4" component="h1" gutterBottom>
              Reset Password
            </Typography>
            <Box component="form" sx={{ mt: 2 }} onSubmit={handleResetPassword}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="newPassword"
                label="New Password"
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                autoComplete="new-password"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm New Password"
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                autoComplete="new-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Reset Password
              </Button>
            </Box>
          </>
        )}
      </FormPaper>
    </AuthContainer>
  );
};

export default ForgotPassword;
