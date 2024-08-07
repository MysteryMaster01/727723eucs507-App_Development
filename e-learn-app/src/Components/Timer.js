// src/Components/Timer.js
import React from 'react';
import styled from 'styled-components';
import TimerIcon from '@mui/icons-material/Timer';

const Timer = ({ initialMinutes = 0, initialSeconds = 0 }) => {
  const [minutes, setMinutes] = React.useState(initialMinutes);
  const [seconds, setSeconds] = React.useState(initialSeconds);

  React.useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [minutes, seconds]);

  return (
    <TimerContainer>
      <TimerIcon style={{ fontSize: 50, color: '#4caf50' }} />
      <TimeDisplay>
        {minutes === 0 && seconds === 0 ? (
          <span>Time's up!</span>
        ) : (
          <span>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </span>
        )}
      </TimeDisplay>
    </TimerContainer>
  );
};

const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin: 20px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TimeDisplay = styled.div`
  font-size: 1.5rem;
  margin-left: 10px;
  color: #333;
`;

export default Timer;
