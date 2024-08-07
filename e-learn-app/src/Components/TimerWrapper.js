import React from 'react';
import { useLocation } from 'react-router-dom';
import Timer from './Timer';

const TimerWrapper = ({ children }) => {
  const location = useLocation();
  const showTimer = [
    '/',
    '/profile',
    '/about',
    '/achievements',
    '/materials',
    '/tutors',
    '/courses',
    '/feedback'
  ].includes(location.pathname);

  return (
    <>
      {showTimer && <Timer initialMinutes={1} initialSeconds={30} />}
      {children}
    </>
  );
};

export default TimerWrapper;
