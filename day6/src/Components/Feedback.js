import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Button, TextField, Rating, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Styled components
const Header = styled('header')({
  padding: '10px',
  textAlign: 'center',
  background: '#f5f5f5',
});

const Footer = styled('footer')({
  padding: '10px',
  textAlign: 'center',
  background: '#f5f5f5',
});

const FeedbackSection = styled('div')({
  padding: '20px',
  background: '#e0e0e0',
  marginBottom: '20px',
});

const FeedbackList = styled('div')({
  marginTop: '20px',
  padding: '10px',
  background: '#f0f0f0',
});

const FeedbackItem = styled('div')({
  padding: '10px',
  borderBottom: '1px solid #ccc',
});

const FAQSection = styled('div')({
  padding: '20px',
  background: '#e0e0e0',
  marginTop: '20px',
});

const ChatboxContainer = styled('div')({
  marginTop: '20px',
  padding: '20px',
  background: '#f9f9f9',
  border: '1px solid #ddd',
  borderRadius: '8px',
});

const ChatMessages = styled('div')({
  maxHeight: '200px',
  overflowY: 'auto',
  marginBottom: '10px',
  padding: '10px',
  background: '#fff',
  border: '1px solid #ddd',
  borderRadius: '8px',
});

const ChatMessage = styled('div')({
  padding: '5px 0',
});

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [feedbackList, setFeedbackList] = useState([]);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatMessage, setChatMessage] = useState('');

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSendFeedback = () => {
    if (feedback) {
      setFeedbackList([{ feedback, rating }, ...feedbackList]);
      setFeedback('');
      setRating(0);
    }
  };

  const handleChatMessageChange = (event) => {
    setChatMessage(event.target.value);
  };

  const handleSendChatMessage = () => {
    if (chatMessage) {
      setChatMessages([...chatMessages, chatMessage]);
      setChatMessage('');
    }
  };

  return (
    <>
      <Header>
        <h1>Feedback Page</h1>
      </Header>
      <Container>
        <FeedbackSection>
          <Typography variant="h5">Leave Your Feedback</Typography>
          <TextField
            label="Your Feedback"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={feedback}
            onChange={handleFeedbackChange}
            margin="normal"
          />
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
          <Button variant="contained" color="primary" onClick={handleSendFeedback} style={{ marginTop: '10px' }}>
            Send
          </Button>
        </FeedbackSection>
        <FeedbackList>
          <Typography variant="h6">Feedback Received</Typography>
          {feedbackList.length === 0 && <Typography>No feedback yet.</Typography>}
          {feedbackList.map((item, index) => (
            <FeedbackItem key={index}>
              <Typography>{item.feedback}</Typography>
              <Rating name="read-only" value={item.rating} readOnly />
            </FeedbackItem>
          ))}
        </FeedbackList>
        <FAQSection>
          <Typography variant="h5">Frequently Asked Questions</Typography>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>What is this website about?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>This website is a platform for users to leave their feedback and rate our services.</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>How can I leave feedback?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>You can leave feedback by filling in the feedback form and clicking on the 'Send' button.</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>How is my feedback used?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Your feedback helps us improve our services and better understand our users' needs.</Typography>
            </AccordionDetails>
          </Accordion>
        </FAQSection>
        <ChatboxContainer>
          <Typography variant="h5">Customer Service Chat</Typography>
          <ChatMessages>
            {chatMessages.map((message, index) => (
              <ChatMessage key={index}>{message}</ChatMessage>
            ))}
          </ChatMessages>
          <TextField
            label="Type your message"
            variant="outlined"
            fullWidth
            multiline
            rows={2}
            value={chatMessage}
            onChange={handleChatMessageChange}
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleSendChatMessage} style={{ marginTop: '10px' }}>
            Send
          </Button>
        </ChatboxContainer>
      </Container>
      <Footer>
        <p>&copy; 2024 Feedback Page</p>
      </Footer>
    </>
  );
};

export default Feedback;
